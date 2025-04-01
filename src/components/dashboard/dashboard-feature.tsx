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
    "57jQqPD3EXefMoZWS74j9S9pppkjutkP96VWRiiXLbwhVJTd4575oE6DxFFiUK9FhJLFATdFyttxgaCDHZzor5RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u9Dj2qeo3VR3TX2KPtrmk6SCccajer6Y7kBNyzmuHM3sDnRpouusBqKoMopgi4QMAswx8TUhPqyxihhSe9ee4W7",
  "key1": "tKMNEAcAuzdNLS3q1FKKDNsohnNgbpGiKsExgHrtFR2w9R1J32y8GHRqscLPD8QMogK1wSmHxatkKLiAvhuqvjV",
  "key2": "4wkZjHg4p2LVFXgSz6HfZHhu8qyWUhNFu2MoJbihav8LmeB71jxyo6S9ejtZKqELJVWTh2mHxVp7F8x1m4tcu6Tp",
  "key3": "2v7LRCBDeYNu654EjAi9j78MMcvZhvSi1jyRe4ryJyDFRczc5Eb16VidYcPPeY5x7orkPmzAZVkxMXGfVNYKVXZr",
  "key4": "2qcrZAswRFDG8F3P3UTbgikonPBeWzd3fPR96UuP5YNTZKgZtMpWTr9wKRKjy3JKEuwXFZd437YYqf2xJsU4R3d6",
  "key5": "3JD6S1zhijrA3E6BTaNCmupsSXcxmanLUkTDP238hFUqA8gSyGVnHXAcsj6yRQqs2HC3TM7ABmr29FyeJgiivipk",
  "key6": "43jToQyGc3Wcm8AKTNh6jGFmSovwsreKa6xTBYuRMLsSGyq4YJWuqn6SZtH4iMnRDmb9oKDzef1FgQA62sWws6aU",
  "key7": "4WmxrR29jXmjifWpKrFihxoBMXNqoHLM7qB2kcYQKX9bhpz6krKbnifdNexFGSE8aTRhSiDxabghitPedC8FhkuM",
  "key8": "2WCMyTxnSB5VnSHMkyd4ccKMQNwdjDo8iGvzSLr1hgj2BWP9Py4fgSUZKLRx3wiJYoK1nwpRZ7ZTDHC538AQx6A7",
  "key9": "Mq2Svgz3ze7UzLW8RsdMWmZb4rLkpBDVJuVDSukZjwFhzV87Ak8xoFRcGMGqzDPsiP1PUoMqUEmihteYGn9PJ51",
  "key10": "BrDqzD8H6GrHAaSsQnUzs6oZk11wfom4QTKYRpvquamZjpEi6gxx8rKieK5n1bCSTXeRJFYWuuCSJN7JHiFBMpZ",
  "key11": "4L2w2KKeWhwFt2z7AQas6P6uCiHfuvP2TFEdVPtDgpwzH5YcuJiqboa64qeMchVn1Z3ZVNYLH31mRPTQYxVT4h7F",
  "key12": "2pNgA9rwAaoLPszTcCs9M3CZhEHKzXy7FBK1WhAQA3ffrVL9kcEoaoqPAr7cu7apZpSCcKRXJbEjjtzjiDqAV94b",
  "key13": "vFx4Nhd3njAvDJKgw8Xr1vLmUknHUGmerjyqhoeeoUAYbcsqgP3cLY5hSZq1uxbKyD68XAoczVKCZf9ayv6L2RX",
  "key14": "4dzVgowR2NiFWWFHA7z86tjBLpvWPggGD5ReVGjx7YosQfGvHssigKb949MSN2aqsFEvrXzLxJiXxtRfR5xwDe2g",
  "key15": "3nYxecwkyk2SmZ7w7kwadFRpTYV2oeEoTp57E77mJUGoEZjKKUWh5DL6Vz94atmYo7Ac9ZJG7WauEd889BreV72V",
  "key16": "5gC6fyoPY2k81MVSbSEkzKJZfLqMppgLoM1ht5yQkiPJpDhQ9FPpSHf7fJGrQ1ufewaXfmmQqh5M4Ac9fRCZmbRN",
  "key17": "2GVLWgvNHx7jRmvfpgCtZK6x4wS64aGNgrh8hJcAS9P9WNXtGmQoqn3VRwsC9vFzvsSBXN3Sg5j7GHRVBDeMyKvV",
  "key18": "5V8JWW2AnKHPWmcsv3xJWffg9Uw8wGjxmVXp2wF4AEBWQ1L1R6LfZCRr9oKBp7frKRY3KETNhuCwzcsNPnprfq8R",
  "key19": "7mKfjkr1yzhvcQ9ww5txo9cWVj1e3pLS7X5UZ2hHYir1hyJPD27aJyt2B7qKZ67g8xBZf4u8YZo59qej53e5Uvh",
  "key20": "5eJ9cZPXtiR9Fu1XGzMWfYC7z4MuJu6eM8GqyoNoEDEHdVnv6Rwgc26tK39mRhsetJv3xaqrLbRBn9M5U1HiL72F",
  "key21": "29dyktpGum6gkY9cf2T1fvqqRS6dyV3mZEzxDsz5MC3G5r3SUqWGrBpJG6E8KJhJ52qG4JJFBLhe1KSfkeAeZBn5",
  "key22": "3UyBQQGNaWPZgibDA2bWbh9q2N7y7W2eKE49mYryGjEtAgQhE4sEQKsgF93eTWEwv1RC8Dd7Xo3oDytpvHAFBGJR",
  "key23": "2id77RfpcAoAUCajGRsCD8prLkq6CJrpxMRFBQq9mrijVYhPWPmBP6y1JA7v9S59pLVtbFp6jDrYFs2RNnxAyzad",
  "key24": "3Tu3vomegkAoJw9GhEsce15ZWXU9RMcdrrS8KaphNpRxkbQRsgPmsjDgLUzxJ1Sn9jgiQgMhNfWFqHWSteQfB2oj",
  "key25": "4ttFXVYK8ZwFYEc4Q5ocEMQ9t29UJKQ3HiYDFim6BbJRXGQZ8GuVc811pFEXyzkn5dPJkzH4g6JcXcfSkZxm9Wjf",
  "key26": "5dZpWs2s781kVx3y5icJMosSStUtNTHYQjFciALxoBWH1vx7VKyEebEBb6g6pvPF9fpjbRayfRUpo8U55fg23A5t",
  "key27": "3gyuw541bmQ6DBQXbc3CbnZYKEBpYpPebkHqWPjhgJfpmXKQVSgPXCidB4hgHu982GFzhP8upS3zH1RhFyLyK81x",
  "key28": "4kF3ZKaDJMBKM4Nw5CKfcoy66uFgM6bqNdJjnQp4vSrTvPMPkxkWRk892ahQknchJeQDdyKJV5UDn7uUCbu3pnDu",
  "key29": "QxYJESe7SmdXN3vU3QWew8NhtiJtynLUsNdQyJz9ZaMzbio83x3ZbzRTUxUWuwiNmQ3nSCGW9CLnLQUuEYniWx7",
  "key30": "3cxaC6gH4AJ4gYTg6QiMyAVeg2pRivTjVytUJKDZB9uP3PeUaX6LPV1vR2ojGfH2mTzc4T3iZD8uBWm2vK3NBvu2",
  "key31": "4YyQYYnYyQsrrvN7nxiQav61yBAESMJXZsKcWnBxDEp7JcxQQR2r2hhcDe9HAjPdEX2s5QuaRBDf4JDvNBp8ZngF",
  "key32": "tH6qgNhy8NFX5jLd9Q8wtKrN9JDDq7ifzKs8Y8y7BMwJWVKT6cq1FcRg24h4KVMdM9W33MpRbAC3w165dAF1xrY",
  "key33": "3HzFBJmbfb8Tw4fkX4c42UwxoPY2q6upgHer6AkP5NPGco6uKdmgWy4BJ95Z3Mtp2BXkVcTZ7KHjuvVyh6JejbcW",
  "key34": "4TLQxNPG697GwSN6qLi5VA9MitpUrZTSghFgMvWEKdEGfb8oZ558BMuDPW1eNx4TCpXKp12voA5VSnRV5UaZjtBB",
  "key35": "5sSVJ3SyJJ4ecJe3NHLua27wBQ512BwkH4cUE4CRToQNf3upVB2Nhp5msorZZSU5fe7NK5sB4Nprn94zqUtfMmwR",
  "key36": "WdVpxvGMvRQdKuaB5MQX3GshebRHffu6Mu1N8rZfnXAetgRtYj3zWmXb5Uo9PBMxWCad3RM6ZszxGawGjfB5zVx",
  "key37": "27w2hYZr7vvuq8hdX8kQvDnyi7kW4QzkpTwobDfKsE2TBUCvLYvLet2cTrWqcDfTkYMvSgy56vFVAN38Gu3wExd9",
  "key38": "g3r8D62bDYF4Emav3PD7Hb1E1Sdap6sfD3dVw8sTyfcjfqzrGXPRSBeXk5KwjLYRMmDrLY9Mirtz1X42TjaVtxN",
  "key39": "5ongHoAHrS2hRoDo6tD8QCaejc6qEV56XFMCwhoFqzq8qA43ytaqoFuLq9EfNsS4bYUF41G9jgv22E2GxK5QEW3s",
  "key40": "3LYU5hZTzrjuqw86Ht9Lra7rJ1jyAbV7DiCc2Udnqo3YdxLRAWmRXWSpbfJZniRz7issy92U64coAj6a9fea63Nh",
  "key41": "4vd9378WgTa1eMac4rT9xdB3Ne6kTaCR19xb4SDyHRjAXcedK7bqjM8q1MrrZeDY4GSjiXxiLUTg5owNBDQuvG93",
  "key42": "2LNyyd1eNtQdLfytzW1eW74AxyijvevxpzsYtqHUYJmMfkGFJnceE4X2n477JSm3qYC7WvwWirUZk7gXvU2gK3Ph",
  "key43": "3nq4RSjBa1Q9b4c3VHKH8qkiU8BpfG6A6KKkFongux6szyybRs3GHXvkD61c7TgeJoLxBZLEqzDutadsDUBuWu59",
  "key44": "27ybTDSgC1bq22GxgkWbmQazF6xXm6RnGtZptwriVRA9RT8Bb8WCMdEp1jcctuuDoRnnWtiyquzeigGFMkwozWrQ",
  "key45": "5mCFVHyEXCwnqeAK4Mxr1zDxaWm5UZuydYrNhnEdjb9f9TTwfD7aEPVfyNiy5ZYMforR9cB14M7YjM9ZtC16xTHy",
  "key46": "4weY9A4zyuHcHSy7gPeVXHN1ggLCSsJivspDQGSFNp63HLHXL61zhGQgoRDw7rbTAG9wKYq53q9b5VaAQojwHHcm",
  "key47": "2FgAGRTu5GufTvLrYK5y6GQ5qYQQqaBbGHuQv5Fdke5U7oWDjhefh4i1h4un2nuz2XkRg4g3M4vSiWg2ZPzddk4W",
  "key48": "5xaFXLw4prFZMJBPdW8wqqe5uZNnWZWg1Tshb69b8UGyk2g8DeSrP8kbaFk7nwsVK4inRb1P14YdWiDFdq6eVcDy"
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
