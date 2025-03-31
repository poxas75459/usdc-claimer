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
    "5doJzw8A1aG1v1aTLmnXUXph3iATXhy5cSCWMA6reMmT9SKPHGuSrj5Zrgm4hs7VDwmb514XAm4J9DJfUyB6Mz57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uzNs3FvVf1iqashNXsHJsubMMCJEJKV4dCiqVx2vorLVcp6SaYdQJ2X4gKAbwoJ3LMyT4HXUL5e4Lbux2sMrgPS",
  "key1": "5JgtG8i88Ld7tP796JzcfyNQ9A4L7nHr2Jce5rtDsCUq1rgiLtJQRr3dng2ruif51Hbw83BBDa9EoxorzP7EkcdS",
  "key2": "2zCQy3PkayA5tCwUBzdKkvrBNrNvuBx3PrPu4nVTavQJDX2B19m6Rju9DqoEx4ZcQJKJEtK963KvthqpGmgJ1krw",
  "key3": "25j7w6QbZyb3VAd25nKsUbrQoQSzqKYeGAXTZRaihvpA68DAEyTVieY8JNghXgbFjsrGEYHNkqhPbCYySrWmGLKf",
  "key4": "29V7EffcWAECHd3hbhnMhnRsVGsowEfBUxNpvC2fY4brnBFBjwF6RwRjxu1VBtQeAatxcyaUW3qfb2M9T1LGMA2s",
  "key5": "2pV7qdirycxwZPLaQR31AoK3RHKqiBTX3TtQ7N3bx3HuAabDvANsUt1wnCqYdQFGUZDsZehkbdQPJQG7nVCnbZhy",
  "key6": "jwAePKT5c5WRfbb3GsbFZT2Qo8WzDdts3YbFKtiBBu8qUzC73c6X9EUA2dx2bYPNPmc8GdDxHtYnwTPHrHTuMkU",
  "key7": "TYsSXJc1k35R4GanfHZiUwLZN97EBnVNt98oqcVgDNr1tEFNAfbzQJfqqjfB9D7yisqL9V8j5FmuVRyG1wqXBGc",
  "key8": "3vv2wgN8UnaPBFhVwsb6TDiAwbVAVb9zUAV5T4q7W3t1ijgTPEsmUKugtwsMZE9FjbTyNpG1spjjFjq3Cjc6TLf2",
  "key9": "h1eECjmTwN9pcRc48jDCCwEQx6YWHKT2viNYWdfVh2yDDb87nc73v1rR9nRSk4VzVsKihkCMxRSf5yHqxLhjGmx",
  "key10": "VbXKzkaPx8tPKQKJwanePSAWwy2d87FideSYXLsANyxtXHMmtwcsymRVUuARQFMerdijuGx5AymrRjhL235shHk",
  "key11": "2yrq3rf62Ve3xk47NTLPnw5piozw5J5EtuR7HWMccLzHGMJPpj7eoeE2ESvRsfXSVoSwWHhFCpjEkwVq8dYFhaSU",
  "key12": "235iDfmtwqC9gJNFFLgst5S2w9FXz8nui7JjiNTaVd4dJi86hLvPE2hTGUgEdeoPWcA5aJbuKNFvb6DMePmWfPod",
  "key13": "3PCWWSj47LpSuUmaajJujjDPKyD6bg3iDsTzv6SXBuwg2gDUzbtruhHtrxhLQTywRYv5vnpcomT8pBvZvXDCisXs",
  "key14": "4tPvkDK8TYTZRPaqD8Us36ZezN6cgzHQve91U6xn9tcwvyVeKKr8fnUFwZ8zF9tFAnSYASBruUGkmNfE1jNy4kwv",
  "key15": "2Ubm8uv7nvBEy4rKFLgVmP5xNRtuBZejYwYwckgJ1bnrMeLRinEUnscgRmVWxyRuWc74sfHhp6X9bjgZmxESeBpC",
  "key16": "4K3SSjdYiqsivgghdPG2KjU84WAYujG8TdmwMP64gJULLw3f1iyTTHKAS4ox6gnHyYuKMFzBZdZpt8YqGoprZxi6",
  "key17": "26cTRcWaqTVNpXokegg67fGdZxFzv6jUjp9qUKPJMQAhMn8r64NqNM6xbnrad7m8YS6EFHbgVjBS1xMz7v3zZfmo",
  "key18": "5QmybP1vXFL3nCiXmEytMgReev59g6tq8fQsAGpcUSqD5mA9QT49h13vbGdr1MeT2H2QHzwY9WwKrFJj3bdrZKgu",
  "key19": "bKJrrGiQ8CxcE9XcZgAtqqUd9f2xmVHe6ZbK7y4PjMhCZvW9jE1hiXCbApsvExdc7xsoCVxZiQfh7ivS11YwRJy",
  "key20": "2JshqCxeu3aouFVF6wQPGcHQ1WaRiUtXM7bnP4dGBvkPF56UZtL5Rod2VzxyHrTxCuydwxwK8MwKPFhGcN91Xqig",
  "key21": "4wRSEeYtZcpP3NPz4cvMAcDBNmLkkoUUnh94fu9B3TyUsdooUatyui84PNjX9Hy4dJ2riM7MbXphEp48e31DFzht",
  "key22": "4QwbE6vZWqaQReLgCk2usNLoFmv19k1WpNNC6ekkTLJM5eP3MsLgkUc1nVjD3RZ1jKKb5aAoEZNw8Jd2tSnPBncf",
  "key23": "3apDAHvcMNfhL6HDsjewfjUjSZUB3UWUD6uvRiXvfSjFS96aSZWXN3PEFBpZnwXCWbXiqzXAJatezvw8dmqZ3ZEM",
  "key24": "227wMzinWt3KmDp21xcCjxxDAH7Jfs7xS5gt2xMc1rPc9b7NygtdxFBSTzFQQbRBBqy2PPkMcXf5xd5cyd6mNs1h",
  "key25": "5sdedDf25RdAgZ17tNeiUJpPYCJ93t6JT7Q9gPVqkzz8vpF2mUakTpXwfCCrcwowztSkmpp2irP3xdDVUtsjyhcu",
  "key26": "iq4zMdz4iWXqySCnLPWV7yVFCfvK2bmE64XmUrcHwmqRgxUo8r5NpaHrvVkc4167Qm7DYGexo8EHRCdVCuATRmZ",
  "key27": "s3LbHD7nU5vsKGAu2Xh2DWjEVRxvAYKgeYVi2bTdhA54i3xq18Xh7YKv7EPeyqwYgZZpP5jboNLwYMnd8EmFDZU",
  "key28": "3YXXWMvZysuHtqYyddg1XgXTq6mVJrRz4gT55ACcAedw6LW47VVk5KYe5dVcR3AbVV2uAwh2bApqT8vW43nbA6JW",
  "key29": "WVuj1DE135Ghq2dYTW3rctZjqk8FeV1S3B8nv31no6ATuncX3WRvNpy6Vh57A2qrdWpPrzxbWPh3ZtdoVAGDepP",
  "key30": "3wikg2dyiY2oYoSVVoApgKTCYPPtqhwSiK6A2FmiPSDdF7HMYiYrEwfvcWRZboULjHkbxYseUL1udkMkHzZfxuSr",
  "key31": "5iRhvMf3ddoQVGaQyYQqRXKB8vqv33m449EewPQ9xqY31ZRGKwptqUskykbAVW71F7Qiz5ggWVNmDxUxqTKHmqHD",
  "key32": "4PTEiqLgdE7ZVJLLfe9FbsZ9nNwdBEBjFQtHMbyA5S8u3QsUmRodhpZkqettfTRamUotJwVzyqGdpMcZpRAK7ePH",
  "key33": "5pJZ2d2RQ72vQQUPgntn7Y9FmuUEhcD6p4R3YXHn1uMgju6SZCinuRdpAQ5xBDscqXc1Nv1n7MH17Jxru5jGpAzz",
  "key34": "2Ja9quhy7NvAk3zGn85BR8MoBfcwzP9wKpzPjayHynxm951yMxvaR7mwn7bb9MrpDwWhXV6AFpayPWxnwyYZQA8a",
  "key35": "2vkTsifcLZDXcpKDiEJqiELPmcPWLkjvUVRCZtD4qcTWayXNghaqcxURwCg5NpRoEGwNXV9usbeDf3B4VrMBgot9",
  "key36": "3ARYworxMJRr4wnZHZq6qJah1ku79m4aKwV1CL4SdK6Qr6Z9fYXEsXF8GaRz1ajMncnRW91RPRKdQthY5oBYWCgF",
  "key37": "5bmYJSk7qyutx5HmQgqn6VKeyPKuGocPo9AKS6N7ECiqApsMnvMvm5jxpbtJstE5FeXJ7gqPUzDHfnRpJYAZrerv",
  "key38": "2oBNY9hagDzoVxvweB7VfzCd97gDLQDLxpVSfhLhkcQUXgHAYKFAv8w3iVFm4ggm8ySFYd19DbEHbUNvmDocdqjR",
  "key39": "4jy5mgSf67qcsiFUyBZzYokSG2v1YtZpRKb9gKMKcX8DsiNnfNfX7Bi5mZo711mTjKyp2ZLjZFQB9BVmStDKb7wN",
  "key40": "3wi8kmx9imbrSoJjpALT4SEjsTw4yeLRJXqM5wkWzmEHPCVoVw83oi8EGgxV8L2tax4d6X34rqrQj8sHGxu1JbXH",
  "key41": "62w259ybwN92S9JhzWcQtzRAgH1RQAMqEXKqdhJ1GxzjM3M9suJqBoMV7kmrr1mB2H7txvfQsV1rQxeUWdiyidDB",
  "key42": "5dYpaL9BF1gJG2BBPYDwS1tJd4iRzs34Afk245ZocUtBKcwKjWhA65K4ZkNre8r5wcBBV2Umfhit31gXZzxSxL8b",
  "key43": "35brwPirgGcsQtD6tUvY9R2NqtvpZRu4tTJ2NRYVUcKJh4fVZ3tZBozFAsAyALQ6t6ZaTBGfNb65a8Tu2RTgQNDA",
  "key44": "3xPeiShEaEYVZCUgFNdox93qKf24tvvswRDHSjay4LFqctCvMEwJwMu9i4R16R3i6Tk235c3iaRabdLTw4UYcdXZ",
  "key45": "Bt9o9nUu77yzT2m5UQfejNuAyZWbUGL5r6xk319nHNv9pQJYvnRXGRf46pY1DmLb6HYWLjBaP11T5kChfCyuYqB",
  "key46": "4dx5NfoKak55VmAYqWgg5DqzhR8ciADr8Ki1yVyX1zDSZqtkTD5dV78EZpYY12a92Y9AH9aEd7UktfpiSGFcoa2X"
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
