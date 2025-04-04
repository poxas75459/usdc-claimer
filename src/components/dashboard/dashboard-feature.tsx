/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4abmMcXfMpQkKSX1N1ob4mNA7FNDXnJARHpJeqq3pk3WG1B3pJ7FZTMVrbhQMP2b5VmquH9QXybhrKF25MkoFTJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ifWUgA7dyY5tEcqFRNmm6VSwTwYTwJgDAdYVSBycQNdnGMmUf5NrfLtWGHXB1i9SejWDGyZt5u1jpUwBbGwcLJv",
  "key1": "2rzk7CBj4UpFriYPWDYBzbEXTHdtme1aRtyMd4hqxYE6Jzfru9oTC73LNvjJeNvwz9e6G97585x2Vs26Cc3ptRJo",
  "key2": "2HsxTdqBMY39AByzmx8KDji8iDS8KUegEKpukJChz9pFtvrWBUjShLvsv53KVoVX58YtFC2isG3nmU12s7Em1KC2",
  "key3": "aYw7PoEo2JtnLq1PPApi4MBphSQKoN5wqeP1KZfn7rk7D1WGBjzAMSdBBy2LZ1Q3KLME8B5abPhor89VyL3vcCN",
  "key4": "4zbwE9UeyPrDBjZKYMHKhhS1eo5p9ggctLBSvZvuUi1wYxzvfrgXD9UC9wFgD1J3BsAd3hR7Ymz8pmhvjdLhtmu7",
  "key5": "5b9snU6RA1ve2v4TZa1mw9trp4XiUbu9cnkexPxVSScf5saap9g1Q54BGxZhem8eT4FptnUyRQHn92oxLxCAowXX",
  "key6": "gHgm74Gsh9LTBJRNMyiwEGRGZKMQ9mfkhoh9374JJUKRXXQyYuaH3rZkqKhDvrNwJfFhMaZqKqKFj6BFGqB9BDQ",
  "key7": "2Zf8MVHCt6CUKjCzo9g3fyboykMY92EgtwPVEJDW2nNdj3AvEs7jNS2uHNqeZC4uFxMeDyLf75gnWcUqq9hrnocA",
  "key8": "3S4Rr3hK5vbpX8dLKWrQteLMo1bf3XYiJq46inN3kYy717UPmicWV7mxNFbeyUjDeUTXzGf45rifeywoDwMuRohT",
  "key9": "3dbA3hExL6Nh7PNp49n2HrZDcM6v51J9gDSJLdSFD7z1QotNj6uH8YQi1kKNK22HYHoRjAwYZ9x7U3ZruEk9zfJ5",
  "key10": "3PyX9N6UyC8YPUQkJNCxumJJiy6KPAiAaMgigCxRtdAxXyQjs35QsjDHUkHu8eVArShLFX6bphRmeFjSbHP5GfvL",
  "key11": "GaXci3xxXXoBMxwyqYgJLjjUCicYAfxxmkTxEU8if6o2ZWLvdvWWy3TJfHj4sjC9X1RheCGy4MSpX3WzFahtnmj",
  "key12": "41FoZ9tSbAMvfkRgrjWt5rwRKCA1LyNqF7bFRzLynzqrKUT7yEFPMaoVAGkBcYvJEUognpikNsHrVqR9YwFwaxD",
  "key13": "2oR2u45hvoFLmV7Kr1SxurkEgK3RbQE8JGCkXaa3g4JzWT83cDmA7DFE9AzKrjaJJnpAZ6hEW7RZoGVmtMCHR2WJ",
  "key14": "5GoyjoP55AreyYUTxvP5AT2KwjGbkPDb957dLt95NSdQfHFyBvFbYrB1jaqF2eitw3SyLwdA683Az6P1DatxL6Zv",
  "key15": "23sF1tg44gm58zebtwKmtNYSBt8mQXjmuzHDU4JCRDBDjGfGCEwbtUz5XeD2rmMa4ENqBqvsvq3MUsbcKbwZtcRX",
  "key16": "26zY97zXjsoVDBt45DihuQh2DY81u56HJYjKsrjMu2rN35Br175NzG517RSDLHozQ45vrHi3tsoFT92CrR69rENx",
  "key17": "3J3jBgmNzYN6ww6QYanBgVboFcxxFittvNhiWvob4ss8Venkivo5ZN7itx7QH2rWyXKH382U5qmYNXa2xgtQEkYR",
  "key18": "3i4PizhT5UnrePbmDrNWE824NuaobQiPJWj1Z1ksJGpme9CgsBt8zpyfE7DTefxYrbqpnTo8DoZYMGzNnfPQ62Xe",
  "key19": "2hhcmvYWz5qRxmdAcXo2B87HKSd9h9eQDZFvLmasHBHJUnTVBMh8ejgf3U5N9v8vd5tinCHNoNWaZQyC5K6CpoCU",
  "key20": "EX74P7SDZCwUjks4dxFMJtuB4zbdmnjWQY5Gm6xyhpgb4zhL6wRcgsRAthMV1F3DnU1FrCP6LxtqWBQPcMmdM1o",
  "key21": "4E3U8HcKfiADuPF1Az2QnZVtER2QiD2iNNyfGce2zrJydW2XQ8MW8r6Ys8kgb8BmkTX85nJZ1kMmrad6iEgGpz6Y",
  "key22": "2wehJnooqWZgSGgAwpEhJMVFVkrLzf6wvGnaZiz8KqMvT7zsq28P1tNyUurb8wHyC116DAcopp5uFgu21GPTYTaN",
  "key23": "2XYoT5EHa2imGKRaMBF1SsFi4Pnm9mK3Ykuhc3XCMs8jP3ebz5scVSFe4HdmM9fHu3ZgFvBRpSwgY8m8sZQNy6Bm",
  "key24": "5r6sctqWZ3hjFQpALa3hiQRMr6RsfPW4R51GMX7mPK7p8i1HRLnS87k6m726PzFQczDcuCYkwFE1hnUMhmszQcSS",
  "key25": "4sp66XKDVqDrsKbDojFmB4TLTGameAqVsb1XF8qXaeu3GJqJWZAbwQYNE966J3vbxZqKQotQatL9pggEcHXSBGBQ",
  "key26": "cNS9yYAUx5H9rvmXKk12uC3i1NrXtBUq2UPiE4k9KAuwDGTdJmsZfxj9m3UTmoqrCxuAa3ofe3ntXkF2WYqnoYZ",
  "key27": "3pvzXVJ36TrenMizTYo23T1oqXwZY2PbhozFD5KA5uSUam2vWmiuZRF4qBU1c6keSWozKDtNKz2hFoDopGxAT3zB",
  "key28": "2iaJGv1gWFw96rzJSsnix6KUednbq7f7mzESFRTbd5a4ebMASZBNqPA787SPVrqS8orixkkwDfTU7mh57XPsWMvn",
  "key29": "5ZkXkfydssMGoST7P5AbEHhAHA972Akto2nMsTfyYuhsHu8D6obTzMHWZ81WUKkVfQr25NtYtbY2PZHUwE5mT5Nz",
  "key30": "Hz3SivhMk9fLaZRwAoowYv1BS9xDQ9vroDk3m9VstJNi7GQboKqP7PnwDC9eoRpoMk2eQrGQ6oqSvoyyDL9vByw",
  "key31": "ksQH1Jsyh7FZCrGwJ5tocaaqbyzvEEjcYTmTAEcrNEBUfimJzuwR8qwa9TxTyiyTWi7MvukhH1Yvrt8kkUYsaeA",
  "key32": "4ea2khpXrCzMzG4ubvnhJxA2PST9yeGAzKGnS3tU3MwFTGEVayeTSq7biArYgYqbr7MivJuLvP3FVFeqKwkiHKRL",
  "key33": "4rEnPDHipLFv4LU9X1h3A2ysdDiDpbu3wvRpJNj5aNmHxJTYXAZ8jw4eH7EiznYty7qkPQkn1CR3bNnD58JnNAVc",
  "key34": "2XYrZcQikswCWCqB5nt32XPe4m1pCSrHzvd1nfDCznhgVftkexNeuRCLB9vu4zFCv2Vg3hL25jVTb17m3RZeSzq2",
  "key35": "4nqp91HtN6UPfWkf5pkEY2aY7rjUpnpExCARzFZBzC1pxYJSQhpY9VNzZF3YSX6xSy8SgnYXm7K3dZohHjk4pqBM",
  "key36": "58M8RFL5cQSothYfAmJc9f6uKFED5b3C4C4cHgUpkwXQNtVUt6YVUnTorX8BrAXtNWojEbF7ryyp9EFvU9C1dvcM",
  "key37": "4KwZcyivHXaMEdartf5MtZvbZBnEgqonsJ8JUv23VLvZ6KKQ9XQYXqfcHTc38R9SVuxVFAT4a3FyqCCTizGVJ6Ge",
  "key38": "Kmx4qFHNLVNCrJmFeDbh69tYkZwDczzFse8HFWXQX33ogqYi4z2QWeVdSZhr2RZaaLnovQbY5zzZLqVtXDLaUC3",
  "key39": "ezGPvQbfiH1dTYWdFvivgz4N9PJ9p3yTkec1BgjAuXZggZfPrjqDe5X1EK8cdTcBKiPgwsfgQsLB3aJmj1LeqJc",
  "key40": "97s3Q41C93HRn8jKLSyJeESmTo6HgCYwwAUxoaziVDqDkDQTCADyoLMJfxGCM537k6JjU2j1y8QxeQ1VuLDh6JV",
  "key41": "66E8RKrnXfq2LGp4kWfwmedjmAzQXSbksYJ1NRtp42kkDJTmVK74SdYR7CsqtsVAEF5mU8Xj1m5xHs2Z9wyuXVqo",
  "key42": "3jfKMP6YEUe23z7X2UXJyyPLoqtUYUupg6bojBrQAS4MjNDpK2zKmSvoWqqHENh7NXqwBRkR4Yb942tChYF7hB9b",
  "key43": "2UMJ79CTHwAVHWLoXzHHpPAZBtJ7AYvxEzJAqLmG7NsQ1S8NCAip63o6ber5kbXxZvnxkc2g5QFFxq4V81MCQhYk",
  "key44": "pHAQ3oBL76gEWkBvGW19bAVPevRAWNW9MvxZAgUaqwttvfghyFFG3mWVYRgPFzC7uhj9oWEHUer7hym2w96ooJi",
  "key45": "3JtrkgSnfp85rQn9pBg2aTaSkefEDbYL7espbfgYQoyGa5kPeGJVW8JxBkn6iAjWDaLJ9P7j6SRfoXuez9aQWMqz"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
