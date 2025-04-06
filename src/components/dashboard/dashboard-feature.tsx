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
    "5QFJk5NsoB4XTofzb9g4YMAd8j3PPFQNKEFo5oT33wt8hy9TQV1ZU7guKVBGfG6HtF9tVaH86Pp8D7Xk1uE1V1qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hFJ3raxuqaqaCqRM8mbps2KdHXRS6chP4WsVtJR1jfrm9cR9tUk785CxMKs6KWkwk2eTyZPKGWnkdu3Mq3WqtBV",
  "key1": "5hy5YwiKcxmk8jukPKT7L1GpCEsBUG1DPBbXfgdNgqZ9FrfsfF96NfqVq11Yq5Tw3br1zcoUFspvCsHxZpTYffoM",
  "key2": "5qsC6cEBbLWpLfzMDBrW4LLfdGqXDipFkJhztLRCLw2xe2qxTXuJUyUfxdHpYWGB23SGSsGrHHw8UkP4Ljq6bwo3",
  "key3": "29GjksBjkMFF6B9idknMS18Ko9AcGhs1kXoBvT1XoziokKx4ix4arYfZ1ztLeZBr4N3CGjN7TfmUPAXaE9hMfSUw",
  "key4": "2H3hKXpGT5u47Q68QNopKD2CkU1jCvK8AwjtvK4aVVDxhCXtZVZyBXKpsNXRgx654xUvVZDaCKGZFJv3K6RhZrTd",
  "key5": "41TGcYr7JEwcU3rqeaa2eLptEGSfMoMR78sM8mW8AG4ysLKfwBy3xaq2N4kmubuKF9PuuSL984b4nRgfrooaYWF9",
  "key6": "4H4caZ2eyrapsGPfnjvqUs2c67qXhrJRg9XT6nFkJDfkzP1cvjyQEVr1XSL42kgXEAJcB3AbCFGojRYs1BtdJAJn",
  "key7": "41QorhNA566UCstmXSUUa8vTK5kuYGHgXqs2vwz19p1tY4oaRwDfNCofxdtu1UvE9WvqKH9G1LmQcai6vFr141Cb",
  "key8": "VRaHu98F5KGULqR3svJgWaTbiJUWvtdGUH2VRZdsWK3d72C21HzR77bkdZKPDeMu42vWyKSzBRKcfEeLcUHtSun",
  "key9": "4ij9ZHiopW5ttz4P6zudNDstaAxJPNVm53aX5t18nnh2N6parZYSdQfHDw84KXaEeQJXEC7rjqiySJqBHkQNe78a",
  "key10": "2R5765qcnW9t9C2ZmqUfrfU6phqmARJssGytQSmpWFgX36wpsZk67EneY5drPswk8qqMgWZATzzHy6MrMB93646",
  "key11": "57MoYJiGyopVqz7fk9zK2uriKdBZNNvcKtS7rRhyPQgJuUzdPyF6jQrPKFgAFTC4xJGrXwF9xh5DJuCTZZrbGa2Q",
  "key12": "5CVfLaRow1nozBPEmLjWDSz56zy7xMCANvQW6Ju9yGaZKw3xmBzvf8KmfgQUqLWDx7LhdFnHGEUdVaoBNJFYXbEe",
  "key13": "45ksSS28Acsp1NtY4vB9VVK6NvrunFrtyyvPSkeRztz5JtRQUVRySrY4G6FZArZNfM3McSEs8njgWgYYX2s3wqjK",
  "key14": "DCRZtQwBQ1EBNWv1FSGeWpRMaow4fdxMAnV2x1jsCnepaqCHfrVs1MoUUk4SCP7PBUNY1J3AwLZysDi8bqK45BK",
  "key15": "2YqUaRy5dzNbykuUf2ytoevBjoNdNZarMx26vgKXwcTHQXgaGbG8SrvY2vMQRkdYNUuCKJfwgRwBK6PRT7rcZTb",
  "key16": "22jRyfC8aJ7D8QdSjPMzqwVo2BARVYTzMhFpsMdSsbhvjbKZYvzdtSAyRxEwnf7Fo3rcuR91Ux9sA4VnasGuGuJe",
  "key17": "5nApbKTZnQkgi44G1zvs5tjCPZEVpEeyWeTf9QyoRFjAa8j9MNyJkD1fodsCj4BUA4gL56ATk2pBzTu7vRwViFRm",
  "key18": "5HpFVGRMKx73yASsczHEgiDUN7rcaQfubC2awzZm6Hjs3eYZ3vWjfVeTbX5kYCJXoGS1JU6gM55eJWSUKCTYfgsX",
  "key19": "4uHMf6GQHonnP6qvo4PpSKHRcWongpMiE4eZzwSHZoRxzKwy4k1RDffqxXK5oqBnnVKqWn33WV3wBrvrbaeCuAzj",
  "key20": "2Ri9PQMtn6PJkd5wifA6ozn9uGa7BqYT3uHyjqeyy6s43FE97VYTk3pY4eoZn9qx68D3iywkmiXi2zTymzxNNc3n",
  "key21": "PEmJTKkyzpFKwZkT6uNcbSMTyLQX7B8UkyAoafwEYUqPEvFZLHjDArxEZZVT8cMTVhGcPHb5zyCpjPNo89zn3Ge",
  "key22": "3KnmVtXEwXc47qLqRXqvHVVosaQQ5TuL8D33yuFKC8xJjunE5zb4B3gFqYqUzj9mhLKyRCmqTNPLEeaR4ge7JqNX",
  "key23": "aeKnWmXEpipyAxuxJFeCbZzKjmjDfDyhZzmwNN89X5aKzPnudLdoyydkHtq78AgDXMfRqwk1HghLisvp7x7FwTR",
  "key24": "3aqvwmhCh1V68oARQNU76UVkUvySvyHu79BFNvwen7pTW6cLWAFcStnErUsWDgGqfC7od6PPskxWHK6EPqkE8iaU",
  "key25": "4NBvRrrepRCfxD63EBxnoDi2HzDLfbSrAWNzLPsW4hByyYwJg9ecsHzpQUDh3RHaU1VK5tAxpwsau88c7jbkPMXZ",
  "key26": "3rzJpHzLV3VfNUEGx7no73WtsJpDryapiwJJWJ3WHZKf5L4joBg2Y9xsFb8fJdBckuQVyUYiAtS5DytsciR6Li6i",
  "key27": "4SZMj87S8Mhehy2WXJx6su3TpDwUb3mQqDQ45rAv4dD7FyP9DfMEt5MNYc21G2ssq1zNxpsUiqXCHWSKmPLGJ7Sp",
  "key28": "5Udb82TJ9qoQQAsXrQZC2LM9sBxZueM9GpqCdNHFYnsBetqSgxSKb9YFZxhbEbCHFC6MSZs9xcGE8odkaa2tptqL",
  "key29": "5VpxqUFyQ6vizFmBT36Qu53FG1z4Wh4LHeXvBDkRqpXmcbJkSw2nZLx3zi9wGsNo5pEP6ta9EGkqZDSAupsLtYYJ",
  "key30": "63f8gvKRZ59useoRcmngARXJiyaBozUkr6gT5SvTgHA34d5RmJ6YBzu2qu5U7kKghnoMKCRAoiyAUDjL9GQHNB5a",
  "key31": "2EMp12Lvovzw2bcbv7wvaD5xu7h3WE2Jcjw7bRRm88N8PVMjdBqqDVqQWGrFSMscs9ZRm11twf3xrXzyx9hHzQbq",
  "key32": "5WqYFDqrvLdreWdxXR14CdWRL6zTfSWEzqM7hnZ4B3JE4sRTpKPB9D9FH2gQB7F4bH4zrtML15TNUAFsimaPi1tP",
  "key33": "fMgKd3GBe6s7bKENxh76Ay3GNiHbTtSfygYFt6LpX5biY8vQsWVEF7BPkc7B3weuniM4XUbCCcnYeFFcnC8JCWG",
  "key34": "D6ARo8K515Mq5SsyVXCkPYMQPKbw4iWUAe7Jm46eojou6Ny5yBaX4zRFVvj5bxJAe1S4aWhex1mwbJhwSAJVeDG",
  "key35": "657zQcT6nDsMSqtBFATm3gmVycJettcD28J2ENMbEkdG4KCS4f4Nas8ovjuUfFSxzNZ3hHxUiKh1s5SRiPGUcAeR",
  "key36": "52JQLuHbVEE3mBLDDjm1V1tpybUrL37fGXEoF5ZbsN8QnuwsMYjHTEpXKndk7gQNdxkZEo38dKNZM2mAqej6uB4k",
  "key37": "5swRnKHcFgs6HpX8mXrwn4K6M7FeWbv835MZF7kXVkJzf5WxzA5RbvBAm7AT5BRDhtDyjBytCVe8XLH1HnsZM4Me",
  "key38": "4bUJsWTBt7iE98SncdHKRDPxji62SvXJ6MvuuEiUspGMjXeJCqiVsyoA6PZAEHiViYerh9PfYd7uV7nhF9B5m9dD",
  "key39": "62nxUkxZgXy7LQNrntAP8cAKznqEPUGFW8FqqrnCobQG7acDT6tX9juk9VS3otw2S1gnC6D6uM3t4SWytVKCwTc9",
  "key40": "2EQRwgGUjfuFwLBYZ23dFAve3o2j74GWZ8CmQSA2qXscfpLUo5YBRTBu218D3q8G8AJdesmqLQ8QvxEEgaYGtXis",
  "key41": "4SsCN18q2jEp5vYfzm9M3mmpFysKHv1CEunMFpfhD1bcKKHQs2ZUdqWkrCggnWbG5A2T69s3RQtZrN1s6XtMxizj",
  "key42": "4WWzQnrVVf2XN7fnVenbJ6LZrFQThPCNkN75d27avXR148Lnyb2Q4Yr88jgajwtsbUF5QqDuDbhPPJe84SK4ZA7D",
  "key43": "4vceYpQ3gmoRE6XEDiFAojvEaZ67ApSXXt9EQqc4BhPWVNDqtRv4kHnJFpStBnJJPkcXr2RPP38Ws6ufroALGDNd",
  "key44": "4yM1E2wYKj9DaPuBKSrSqEozjKFCQS3dWUdVFMf2X1RLUSGbgmKi9MUcJx8GE4KQfALKwLjUdtyzwpZbtkXtrcgW",
  "key45": "3Awr5Qe1KmjLX3VQxG6sYioWdokXLe9gx9ze6j8pUtC5jZzei58nHATLQnncuT9uRjhvnJ2sChsioCVyuiRDcua5",
  "key46": "5gHuuVgGDqzZJEyXRaBF9TZvBJaRdeAbHtwdedmSKBupMLJjDxz3kZgBpNyTE62KAYo5YhqvLeDTLdiwHqiMndoW",
  "key47": "5hDz7AitP8dYfg2z1RNKVHDQ3JuCurtCfuvkMEREex4eZMHkqYGg7PEja4j6z3AdcgccbyronZe2xH1AJYeykMon",
  "key48": "3CSNNMBwLUWjVECYTw6SCa3xBQRGLaRLqt2XQjC6gAXpPmJ8JxE52FEvBeRcAkUnNM6sQMgJng7E8vBaCg2mtHxX"
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
