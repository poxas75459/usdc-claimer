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
    "ScthsUw1THFNs9sqFpMPdPmc2dKmtfdCzkLVcYXf2VNWbgv2YGm3pzE6Fu8yYewEuUwT5fpK7VxzkvHY2MMZE54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42nwQytuewnpDvqPFAKSoobPx34mwY3e3nc52DEg1wVzsrkEQd79jAzSXW7FubLBsP5WGGCTk25dvr4EPWk9nTGS",
  "key1": "3PrBxk4ij5vYgssagA5kEaGNXLZLPn4qUiDUPbiWa1hr95D7douEkfxHgZ8pximWMLm2tRdE3iPmbvJAQoJnxosk",
  "key2": "mFUS35YUt51rzioYMLs8AG8osCnJ38CBRksjqp4wK9ZH2WPx4Zfne5jgqsRz8hbR9tbtrBhVZNZVn9Q7T1EApau",
  "key3": "5KUMMrhD3iSXA3aTdmcPE8wAU2JzEVu69T6pwG1kL1WRL72QFzwj4ubePd228CetP4RBC2qU8K1ERaeDwqtvG2ve",
  "key4": "2GneHmkYLxbuz2rP9f5EUsDkxNdgsXvz1Q8h1bvBGjcaYaBUiYL8EtwHdy9o9gE67kHFuiPejgtjaDjrXNyaStx5",
  "key5": "3RhL5CVuN1yGFJP22K9FTg36eM3yV7WCw5FQg24KoCYYSzLuFoqGDMGRgVyf8Vx4FgpPapCTV4Bbir1TapWBaCtL",
  "key6": "2ToWRfLAg2ACV2kjCDsQwwaa5uJsM4VMNVnCNHpXY6B5rc1WkyLot9QhK1eC6zj4yGFap6KYAtsLCxRgcVT9JHTs",
  "key7": "5ZLtbwphd3AQr91ShcQTEZ1UP8nqj2zukxkvUeotBHK6Kh8BE2EfTJ4H4WvPxWRZnC72FREZ35VS1RtYRfphmAWt",
  "key8": "3LHSK9F7AZZfijJxX2Bc6ThqvCApny6PXnfVmhm4XZsbVqKuoxiDpaorrJ5b3MhPQaSH2eUcskUnQjvS3PPj43Jw",
  "key9": "5XiNrQdDcuJ97zN8J2zDuEr36AK3yLzifE32Up4TtYAsJKqJ9NeJ1LdvrVvKmQAshx3QSSND7CTaT2EUvhe8x4ap",
  "key10": "W7UWDoG934FheLYtNPUH6wiUmFJmP4c7bfuKVjmWKAwFx6cpV6j2RGbVDC2DAr6DyHdMgsKVwSHRY7Q7KLetiVn",
  "key11": "5kaDHjxbHGW76UW1XgDcPkPquKDSY2wb1bu7RRUdf8edufMz2nurp7Be8DvYddf3W4zfzwzzPxpSP5gCsfjFV6Ly",
  "key12": "3YqJSmn2qQiaaHSrxwCY8Dvu56EBL2fvZXBG7evtFkRm5CXjnirwrHqn9Nj3tsj1FbLmykwBZC2EgQ1YsHxK8fAp",
  "key13": "2frzQpgjdxYoZY5J5njH8YCfWWg7xsusWqZBH4aVNri61xxxGjdYajsAjwKGVDZ7sRzUEDw57sPtwN4bd156FzGk",
  "key14": "UAHwKDrvMvSVZM7HFyCLZVGtWWVPuT88nA7As1uuAFMEkT2zkgWZjZMVimG3C2ZUxwPi8ckm95GfPkTyF2f4faz",
  "key15": "rpbXXheLRsGBVYT28wKA4452C4W1kxCBqN6YKnoJwd41ZtC9TXCiiVbKJGT5iWsehE7SYCKTPQv41kwg1FGr5UR",
  "key16": "4tKbdArfg2LKwoh2i4bmJTrYzgACBRX6ko1u97DSypJkZdCL5FLmNAz5swWPznqbM9toYcVhBPtmKPJEgr62fATF",
  "key17": "58uvmaBh1KBcffgV6YQk3kbqAnaWq8fvxjPnxDWuLwLQNDXFpNSxzznWvVtTypifRVFCVQyexoGH4Eu1YWJY8ZE6",
  "key18": "67mdE43ykTiWMZ8nYvpTyffc2hPNfMniBTTgbXUzPDiz8tP1HRTLs323jVEFjzBrxpHB9QKKbt52SMuftXskwZ5v",
  "key19": "42jUZKUGwMuPW3RPMWbm13ZFwCWUbFaXnQ26FkrS1KfytTiq6yiQM6SW5XqFinFjxZVEvuUNUUAbduBpj5t7C66T",
  "key20": "2khXFZ5u6Zd757TVHuEjYzziCycVye3Wrx5qtC6kGaLyh8NuTcWHcHtvh89fVF7nPibypAEkRePkGDTGS3qyUrMj",
  "key21": "3otS6jbY4gGgxXRDS9wN81ewB4NiV8xpVXvuxxULC2xA8LzJGgurFBvSYDTd2T4mtL7rSsfPq8nnmiTJ3w3FdxJ3",
  "key22": "5QpDMe42b2Aw63yuERky2vVFjgEPkdVP8KLusPhEqop58wTPx4KCEaAaSKGmwHhA4NmkqSJk81U7ZT2NJBixhTVX",
  "key23": "2JSjefGE2uSYGuWFDw8xQbC8vYcHXnp4QKX2tvuUzRvYuLYVkfnsbrahL9MFrN7gj3xVcHTtKxWHHMoc2Wh3nf7f",
  "key24": "2Nq6gymgddHbnKRQ9UvCvUh1z9ccpbQo7umAUaMY51rbZmHwq2CXVUwaJdvViDQAe1nPa3rFwMhPWUxWFKFjKTPp",
  "key25": "23kMQ3V7vMZfFZhutYk96HAc4HFSSCJPsJNVvyYQi6tgoodb7EAKjPb5mG8oXHC2tUTfLa4Xe24c7bHtE5xGH17F",
  "key26": "3ztPQz9LxNM6StbPt6GxdxaARnRu8t7yQqhYqvPzzeS2kbichddZPRV8fGtMQBuyNk8nMEKRmj6o4gSiJyXEDF99",
  "key27": "5h4EFNnhPBZEJEUFD81gp9MtbzLgGqsczAfJEV5VtjH7UDvv88koHMhYLP2o2wKPtHMtiiL4LZyYT29nbeyEDPBX",
  "key28": "5yurshhjfeXxz9RuvqVm68Esi57p2aK2Gcqgmzfbi25k6fhPNDYXG5uxsB7k4X4Zzxdh3PB2RU9NtfwnUf2C3BDn",
  "key29": "QLXdVb1LbzHbDzV1iNDj87M5w6hYJNEDZWQk83d7xyofcZBKZq2ezwR7D8PQsrBDh6gQDQv5vCkxawYqXiAZwDf",
  "key30": "hBwg3yNKqMUnWTbUFskBxAkdq1Pss8dNFtQVa7hMGtP45Bjz7fP9meRh7ryzPRC4dN3epX3ERKb3Wt8ygNj4qDG",
  "key31": "2sWYTe1Am7Wyv9v6FFBBBhMYA5JrXfQQbXbmu46SWzEEnkcLjAqtcxSU3Zbm3s1tonjrxVBF9EkFuP5Sb3wQ7oyE",
  "key32": "3Q434zGv1zGyMPGvKpTzM8neBYUFiYvASsQseaM1MCF7AL5hZf42qZTYjSiiCgoWbmm9FC4y191Tcui1S6DhAe6K",
  "key33": "5mmRsru1r6FUtKBwwDYML2zbrkUscqX358CrwSqa8TqJzMhoEjY8vsJ28wTPuzFLmkC83qWJzzZKzUpisAUuiBfT",
  "key34": "2ALLJc17nX9d97siymnu1AcULUhRXgMNwcnkny1b1hBcKwNHw963QmcDwENPiDzoKKikczQpNPT363nMnDXVq28Q",
  "key35": "4PdcGnhWaHdqyLaG9WFMV7pjhc3tXYgqsJc7B5hLBDLqfLGHCpD65aYrYcLQWuQXbUPf8RG792ye5YpMCmz3pVpR",
  "key36": "4So9dq11HrVEFdoNvREoQ5VjCKoqacbCnLDCvLu6iJsd9gummS71D8jiyaBXp6S4UW45cbALSGrBaYhXRWMGNwRd",
  "key37": "9cZC9TjHZKJL8dU4qfnAohbSy1eGDUSNbyddbyzYzkfBPSRY8DGkJiXqR556LT68AiVfAikxnnKW5wFXfGhRkvG",
  "key38": "2w4AqNNn8tgjBmcUtDXXyVQpgK4vpcqqwD3YXycR6CddU6xkBjcXCj87b3rg56yeCwpuMXb4A9YYajt8NUKXjBRx",
  "key39": "4PxYVV8itNwi2ReiFoYwenkHnemVC3nNmUVfPt9JajpwfhhKRcQbxqstuGuVTLjkzuvTtoVgSiXpgPTxtijmAWJY",
  "key40": "2J9LFuyg7pQL52HVs5GxBc57MXsHkNHb39Ljsk3EWdVu2Sxw8EUMTQLvDwZfdykV5GUh78mCfCEwrtjJXYUa1TMz",
  "key41": "B9WUsy12GeDFi23obmJukAUhazMvbMR21AbLtJMG6gprRoMbt548wYRccASahRk9bqvPDaSxo2WQMKA9U2EwijX",
  "key42": "3ibWQd1Qs6yTyGTuA7ir4qC8usumae9vw7odPtXK1PLixc4aHUNq6L88XRvCy2Pmpf9ybi7KxXW6rigk3eWB2wY1",
  "key43": "4rTHid2q8tUEVueorS3QhtXEWQVGidypUJtBVBw2zLWXmJeLiWUciNcTtqvMB7HN2Jr3E2Btw8YQ2uAy8HFWEG5A"
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
