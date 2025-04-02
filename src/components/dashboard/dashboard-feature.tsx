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
    "5zrwyrjBgfKuL7GPGkyUQDsHa8Qb1ZFp8227kyRZKETM2JeB2t3jpKPbcTorhLSCXZcXrxvXT44pbY8icBHS3kzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66chD8rUppZYQY3f4zYFPdgdUtj9uS2UhdL9a7xtPx2Z9AUEue5iTB9PMJzBJqB4t7P7erfQmZyGcEcMLgConkpt",
  "key1": "542VwTPc2eTGcWNaeqPazW9iXDeWk9BGTdsGFbSvbFp5YMxxRfvgYgHTFNFMkkFcQWvWLzWKwK5zj71FoxRFpBW7",
  "key2": "3XKeZZpkP6W9uxVeCd9shfMQupDxuJ1fyoQXsPVrvycRSLdjk5kTtLpo5symA4BXruUETzWV9d77Kk765QWXnfvM",
  "key3": "zbQgWiMHXoh39vxuBGy7m8L38rPAAkjkp6cAyKoUS4vxnVvChHuadQrW83RVhUHzgoenabCdKMRCNFdmtrhtPwS",
  "key4": "2nHRJma5HpQ7rWWc5MyHic7rb18KJNvryzDtacEX1o2T5pk85pxA5dK4LuVvmh1uEet5DZcfCXiyAGwsQYzDKCzU",
  "key5": "KedLGYCPQs4G7qxroBfw1BCqT1a6gkNSKQeqGimAV1b1jWroJTMcGacmdHfMUo7pTTUitjyMaDPvL8SAawo3qNb",
  "key6": "qmJkv9mybbaT1VNcXJFPWUHmhcdTtEiX9Dh3A7tL6dudSDVjP5QuDDkqKMHkAfLeu66z3McgYVvMjXKkXEePEQi",
  "key7": "3o3JQbbRU8okWVGgnRvM9nUkrMifn4whV8AuiSQcAHoXFPiReH3t8pxxzTxAwkeK8Kw3vUUxkrqqmYPTjCa1d6Yt",
  "key8": "2CgujPPGskZ8Fhs8KAvWvT4gRma8muXrE9HGXcfiARCgcHJ5ytfWCEgcGgKjiQ26gmKWSANuMt6Xoc7BtTU69aLe",
  "key9": "4TS8c8wTSn74mQWHMYxgWYH8ittiwSXA5REXScZWvN8Dd6nFnscRjg1gjgvAtpeDH7q123Ah9e2RQLkUDfveoCh3",
  "key10": "2Aybw6RuirLd2yeMbEwcL69nNMBkWbrHS3j8HRAQtn1urLaoSeJP7oD8rLGEce9kEvv13dmDHEnEF7Wrw4gUAmiY",
  "key11": "EzENNP74FFEbeLEaw4DfQjKvFUczpYQrF98zds7UnS8dWY4j92vrzD8qCpHmBNz26UDH7HfZWCGfn5XqiAp3LNM",
  "key12": "43Q9YP4qn52hpLivukHQyF7Yy8LAudURdDF75WomnoUvag69PTtnw3eDADKm8P7c4UcQbpYRW1TEcfU5QpiejWLb",
  "key13": "22TGf175LdUK9dhm9b7TPsKwAvCZZgmcaYD6MoexMTD1ZefBX5vUdfDWHKjRgwcXzM1y5xYkyQF6KerBAqWkxVa1",
  "key14": "44puL5BKmVhHc3Jh3h1tcXjPMsDBLybzmuvNaLGaiTxdjgMDdVr39nc2GbXEzoeKLUy1XYCMxd7V3y4r1Z9qJuWv",
  "key15": "P7F1fXYj9hRZDxFLUod4sMGXNhnCr47cfKXfVAYwUnTuit8QMf3bL3USj9Qz5S95M4kn4XqaQ4pFeYwZ2R5k1XH",
  "key16": "3Ai57UukeAvg9D3Ek6JveAhY1VEFe1JUiwyidHQLTUo8L1wN8Ng427RgNXZctHtBLq5SCX7hxFk4qcEUMdQ7QoDC",
  "key17": "269yqp1yvUcZ3adNBghjusejFWyX55GJofbJMKqwTeLzVeuZFqvRJkBkEN5wApXi7ZQTVNwVRmuiUCexEVTV2NAs",
  "key18": "5WtZfNtM3LQeCXz27RivHT43RinNL2FQhLBgkxKQoU21P8hDDobLrPCtA3CL6oQvJjJexEPJwcBmk8rGM28RLxn7",
  "key19": "3msYdEiuXau6qMjvipp1WXUr1woih7UkYsdyESd3Wf4zGMBnPHcGxC3PNodW8gauiH9Wy3t2Q7vNEqazRZa6A5uR",
  "key20": "4ixrEDWa17a6Je6RgpLxk2oTkvSZekMHxHhSWR4kcnStXrN714KSkWKr58NwticMZiDEZ3EBtz2LHUrYDcDHdeEc",
  "key21": "GvDMvHazdKXiCpnjkrNVUuzPjZMAhgKK5BpNZdGgoagnujMqWd6PbpArb3TV2dCwW5PPqQM4mkFMYB6PYZ7aTts",
  "key22": "2qFDqLjjjrsCkBSBgV3URNc7fvSmbU5v6DtYCuZhHzhzN9hZTuCWkdcsH3UkQtC1QRAeByXnmFjY6VXLiGkPuVe5",
  "key23": "5cjxuiAcVwqXaweYz5HBzRU3yQ6JrDb7oRzMK2M36hVUH8FgjAKKS8zLRHY8B6ibi2FeymqCLdt2HBc9bM9YUK15",
  "key24": "3bh63hGQ6a52JRNjRnG3cHsa3NNhVtxAtXCDHqVTPUFtb17spEahKbWjaqjmW9hWakEfZocwxtKwiQGsVdjrV8m8",
  "key25": "4Hfpz1mkd4HyNAUKHUCbjJZgSHHJowpqCtnttENucBKp5Zys8mAodfiNziDVcqF4NS1PkGK6RUWFmaQsdgjuR75a",
  "key26": "29LAgGzAK3JpV7ZaZ1A8fzQzfMUhr52wNVRnHNkJyqv45KkKj7z1XtFLiMeHwA6WXgHLT1PwAyKFcxNJJGPvCEpA",
  "key27": "anpxJQj8SxRueB3M36N4UXuvkEfiP89wvbvzky3FpbdQwxGtcTvswR2CTZrsZVTZJfmdE5nqWVAydRbeEWFcz67",
  "key28": "3dLYAj6YUg412pQX6M4Z97pzp2f64dbnweReZDpCt8xULfo1ZdH5CQXsyi4EXuMx6uJfaKWyRHfE3U4hZfUtCmiR",
  "key29": "3XxvhXfE3yisfWN6osmGr3HWXhierFqNtVC5Uw5uJ5jhPAVdnDFQRtd7FM9dC8BWHHMqxcgh6HzJuKFLD65cvqKP",
  "key30": "LdmaJsksmVWjjwTQaZSiUPZjxZvsoUTYuqGzf6GeUuDHCEjR1kUw2qmTDuA7XpyD4qBkofeJ4KqkfAcYuyk7t7w",
  "key31": "4VkL3nZkt3eSVEdw6mWw1stKUg2A52sZk4CfdQYHcuR2BprvWr8ZWHUTBmhocGCEuAPHk8qLh4eGHCCpcmg8DYxF",
  "key32": "37UqQPxJSW5w4xhpgec1bNXWvz5cZDGUUNYntzAph4JEy7FLx4SCk9PVH7JJd8vbdHxW26p92o43AFVAbrL9R6UA",
  "key33": "5TPmN1tZLNSRCf4yFd7FXyfDXvTdBoa2b83PYCjhWJ78V2YsvT9pto6VfpvKBFzoTdsWFcGBKV8BM7NsKdJvuacW",
  "key34": "34r5Rk2tUiGoJWgBbiCZKaTYck5FUnXabfwrEJ3kPkQbU5bF6NP6DtDZj8hLf5W4jKnpdEB7NxrrDxhARZjbHhpp",
  "key35": "5gH7dyTDReyuVGb5DNSiFBNLGURjcksLJNonqaL7LGYgnes1byDM89uxfHqEPVSFVsCKg8CkARVupQTFcm9fFiQi",
  "key36": "szNWvLtdeyZ9H5oujYHi1KjZAF65iuNovUDxEvQkXZChdhLZHj2MHcDSUVkN31sJm7iiU7sKQ8dGbT3TjNUAqsr",
  "key37": "2TQ4gfqFgsPWcckpr8HPT4wnSkzcqoixW2fCozrdsVdz9pFVuapFDtfdzoWaZdiK3qxfmH3wC7wJogfDK3CQ55Qu",
  "key38": "ukcaHjVUWYCvhwNt7qy7u5hUkdof1AnC1RmjAcVy4W6aGU5tGt1ms4HW6ZtECSusoFi4cSVnenazBpRUvFarkdK",
  "key39": "2gHCve6VQYnNnEv1RBWthJaRfTYrLZYrotUKqBE9jvKrN5M13MixQu3ZnHWE3a8AVmDLdQC9GQzu8hiQbhL9nuqd",
  "key40": "38inA5vQ4rJcheanc1jxrKBPwUC67CGdSG2PNZGjkhh2gPTahFHKBq6X9GhsKnwBWHCvKsw9X9AUK8YF24BhYvAa",
  "key41": "4MRASsK64xaSK3JfqShx2gxtPg7tyzXt9kQJp4AjrLQkFziGQd9W7RPB1Cto3SFrW3SHET4Cr3NVxivAJeBaJxc8",
  "key42": "5p3K1fC3PQahcTDaeNSfKNfiTKBQpXPbq3u2sCFnf5vEthrCqqdsy81SgFY8rUdgD2PZFM67SWtS87HHrdtWk6hj",
  "key43": "4VAD2Q5isLbtiwTLJBsVLS3wBFa9eiwpWuotW9aUfPrHnE3BfGPo7jwSuLVX7fVV162R79MaFttu5Qv2miFsaTqV",
  "key44": "2wSzedmXQCGukA227mF3sXNjzbuHXzS15yvvMStYQrreyvpTJPX8kyMdqKAMNc2B5LmvijLgBqBrs5xutGxsBvZ",
  "key45": "33HrMJU6ThDS8XJ1pcB3rQUZJ1dz5tvduJQcfhfcrRhLVNmjFF3GCnsurr1U6o3rQsDutsqCsaQassnGPcmY313Z",
  "key46": "3rFJCrhSj9Xh7hHy445MDwafyRUZAWLSHsXa8pHcbeDQTu9AuisvvBrFYx1Zw8E6VTcKA7YifFGfP22we2LduAPc",
  "key47": "3oJhRdhxjZbq7d8k9FXVmsppip6qCv1e9AoNPJRirQ2nsnpz1r4CQCo71uXxX9iZsuj2Wzge1mmCrqBTv7N4Sj3T"
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
