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
    "nToyrBMcpHYD1FxQ7mZQjvn2bNFs8betDx2aU6guP1NGtbCo1TnThpHiyURgn5m6Lqhj52qobND57r7nhK5Lr7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32tzicqHrFKTqJi7BDqVS5cwNVBCveVenZBGkyiQzyrAPDnuwPSvgn5XbcJWRcpRwF78YzeQJEzMstcoodhdBBJC",
  "key1": "5eSCSnjN1aCvonZZatPam8biko7THdQQfQkGvHRR99mnYEXvukd376Yf9rny1xf8xsQ25LGyHig6ENvHPaBMj1tQ",
  "key2": "4LXWFUjEVigar5F813HeWDiF4XVmo61dVdt6fBRJRJffTaQp95qSCSgFkbTiotHVni8urnmfuJudCEyyoMA1qmCy",
  "key3": "3ypCbn13nH7zWGZoSCCpuBzLr9WhFecMBaDTBegUec96ggZbeC666oKrjBHR1kkWauR4RfsMnf3awPizcjNac9ey",
  "key4": "4E7Dv97CKkV2TtL9nNB4KD5Tp3mQrpKQPPFcVcV8Ly8rmfXbQTLJj1sihsVEQ6Ur7KHFS7BrNqHi8ePRZdZzt98K",
  "key5": "2usYkLbCdEEZXTSQgSpKo342T6c49XocuKBq7UsF54b9BPE9UCTpTtqkePfd6TLZVKrDtgVzk6dEUcrYcjgtwDjw",
  "key6": "2MNxYno3JfiHo31Fn9yX4KapAgg1E7UbKwjoMvGRakNjHKVZL1vdG288XC1nYz9DRiL61koa7GPgmGqeKtdFqpJA",
  "key7": "4qkw9r4i41zMEPM8BQAu3swsXPZCyf12sxQQPwLixePwMpjSgretbn71aZPGvMzSGzVx5gnn9AAkuGiLVEmRRkjg",
  "key8": "2eX3QxNh5uqvJj5hBgieqzf4mgXTbj2hLp1X7YkkmHnskoz2PkxeUcyNDHqBwTMHa9Y6rG85fL1sgaajcHjEmoK2",
  "key9": "fJJxup1aLzWMCo398KgemmeYg9WaxYmyGbEKrnh7y57HGsB5ZeWsDeBcQ3GPmAVSwD4qzwALzgmQ5MiKmfUrjyr",
  "key10": "55zDSgEKah1NQKbaEPqVBzdbUa39nt5vPCYQfapcrFZQXPZr1hStMEKbqyr9NT1yDJ6JSCZzf2A5RXoCmHRQZd82",
  "key11": "24d7QYywinMMp2sGoASr9gcmvabpFbAHGCFepXuH1Y31cgjF5iFjBePDuvYMHGc7n2ySyAmMM95wEFycThWuKmoz",
  "key12": "2QdjNAvhVQt8TnnTJ2V46NaqarGvMM4ajNhmN7YWcWBewu8puCQyqKcqFNJMYQro51344aFJiFz1aHirgrLtXSLg",
  "key13": "4eG8XXZ4BeiuKLV9gDLgEF6yx9cx4uSXb5L89Mt63yR8cZ997n1rwjwVpzLeFKUtAmMMwudLqU24EQN4B7UG6QTX",
  "key14": "4hoxTf78rTJbSHehaGxLKBS2h61hWoAKEYe5QcvqHE8ysrFmmXGLjKnqRDBNEh7vr6UEPU5JxPWZXScvLH7Z4b5",
  "key15": "2mNMR7ARcDEakLciW2vawLm51Cta7pDCQouSd5FNkSAUaejKE9J5WWJSjhqRB1Hc33XiaxyF4oaWpTQp11QQdRut",
  "key16": "qxLdYNeGWqBV1AZM8CqTSx9jJeep8AweiCcx41k68aHzusQ4AkRGARhva4mutPHFo5wKrMRm5BytJJM4ND16EfQ",
  "key17": "ETJhRdr6oXqC6qTCf172XK3dw4mcAAez2nQHGkM5WgNGGf5gPsmzXyunm15smUMzbTXaootq5rv4PwL5Mx7xAzA",
  "key18": "jb9iZn4dz8Kv9CZDSJBysF2sdSQ35kK61vjjgvLe2KeP14biUw3XgHEAPyGvFKPaaJMF9vroA7VzdQVmUAY1UyG",
  "key19": "5k8DdHHCowvoU7FjoDsbBZA79v15uHNrQL9Qp5K5JNX4gDuU7hwNJG1Ch9TUfuZaWQfCrdMu3DudyQCifGozTvPR",
  "key20": "2JDKMWWdqPfp59zURSg5cSYq34m8h7kVbmXpJbsfPWAX1rLooyuPmaEmZufDLrSky9F2yXMZ2PYuejsnNjjiiptf",
  "key21": "HVdnKYxnvC6WomZWxTPo4yYZM9QMKwh8KwQvK3jxvgMGMxTLkWgnvgcz9iQ5bnm7jM6XBNXpEY7E9BPNWk3M732",
  "key22": "5iovsD4FTnsG7ZnxruU2AHTLuwuqiwVZ6sB4L9X8uxZrCo6ai7dr56rpPb3CagNpJdCNjVjuhcb5umbT3SE88VG8",
  "key23": "3oXUNTEHXWRyAXuN9qQPmQnKxWtDJZCiGg1quGtQxe4ztKaEYh4vv6CR5SY7vB8b4jL1shvdK8oiF8JdThM368Sx",
  "key24": "59omKr1q3gWVfd8wfgmScwfWoCfLe77JYwaHeHN22ssvoeJ2RHXzK1YEve6wNJqy8h7puEU4mwKjsUzw68zVSb7o",
  "key25": "5sPv2fGXVu7qFP3kzeyNLgrAWqPSCcYjeyRokMBzEWhhTaWhyvUaZdF3sVZsPb44xj6Z6M1HzXqP3E5Dn627uWzt",
  "key26": "51dtyWHAc4WY1naV7gvocnyiLbx5GrtNc6KDAy2Btq9o17f3KWezpypfXNKpLtPr7XvTDNWa11gJyyZgmn9TcNFa",
  "key27": "3uZeKCeJ7LYi5y2qFRb3qB3SuY5jp5BMzCmfMmXuXY9w8FL9KY9ZFw6WngvcdWxgutnF8pCGq4LCX7iYXFszx29j",
  "key28": "63TTAkZERbE3PBt9YthScDB6TBvmUDvrC8f6Kd4MjNsXcH2ppujhqDV59pEyF7YAt5YttmdTakxTZJJzryAFMWqs",
  "key29": "4MiH5KEW6EHTiukJ3VZmfnzD7oGzAqF13ggUzqb95ooT5GHhuG2effvy2M8erXZBXhz735huxS3FfWBJ7RzeD3Fv",
  "key30": "4k2NFFidG6sVZsRT5pjTgRuHvAMdEoWDZYs5EqoJa8CwEtS4KerPdiFvTmE1WEYhGmYxqusZMB12L5Zs8cj9kEoq",
  "key31": "59iohKK6nGaJg5QiGDWbNHtGD4Eo1ZMYmsWt6wEk3dAfQduYbMaXQ5G92cdeX2fXtM3HMbj3bznVaSnR9uuAeZ3P",
  "key32": "2SdFrZ4Ku7Nhoq1apbWvX17Ss9tSUcJPsBuEv4LDGFhpoviPyouYRaUPiY82FLono6sKT9nGXcrwHqXfNCunWxoR",
  "key33": "3P71PyxPJj1JtFdorj2eNcQQ1yZWZKTKChK92o63w3oujwhmFBnNc5sp8bbcUFSp23cZsKazBkHTcQp1cEidih9k",
  "key34": "5pbApPjX4zgb4KjpKBKF7WA7yfXLWH1dB3cfusSUJH5FuK3dfrUJytzkGPyye4f12tyxsdr1KAJ373z8KARYJPJJ",
  "key35": "266txzr5hDs8huRutwb7f11jw5vqUWUhc8rdYExggepcdx1yndghaxwV4DADS9Tvi25oBpqjNR7ztFXw8DYDQjp7",
  "key36": "rmm4oGsJtz7tMuvNxmwMVL29bYzjkoSYTqXFydSiftApQwr4Tv45CkmtQ3NddjdcErbWZ6ECeWiRN8UYMyJu2yr",
  "key37": "34gwDMBL8Jhex1jrQ2DYmoDpWtHoDBJG6n83EtE58mLi46QjYijTvYEM6fxpTC44TfofZXKhTMQ7m9rLsg5AfqWg",
  "key38": "5TkoebLt6JrwV43zmiFryR9ZfVuyGAhJFhDx6tzCzf1wxqJPjtY6imcT8axjN7puha62RMDPE2pEaFrpQCiaWTvJ",
  "key39": "2P3tqZ6HMeY4EbyNoXSnJwesYVCT9JTv1v2R2QvMMtYomiu754pguhkUKb9m7KyPQ1QwrcjGeHYwHcFCN3yB36TY",
  "key40": "3o2g6evk22p6TL1xUogLXEbVFMh66crwma7qrMt93YEs87aqwiCiZ9Fw54nPLCFvYd64eXgnFeZ8L93kSQmXDRGd",
  "key41": "sEgx63zMVW1mGbmEsTtR7YhhdCXt2raqpAHSQmzdSkZYLQZBrjq2jnXZxuxpxLq3jeDiKkogPvuQUHP2fcxNGLU",
  "key42": "5xPyFFQBAmF7Ccktkwkk9UdRVpsqW4BkxmE82nynxMqYoKQxv2F6tyD4BT9Th3TPnzzj9dUKkka876iXvX1QeQfg",
  "key43": "4wBEKTYKbodB5TDsHV1XuCCT5MqDNy6VzkNHu7wsfnvz2SZq63kj9m22VMRQFdkYoMJWdcsCU5oL6J5KtnqHTNWK",
  "key44": "59gSVGinnJXUn4SjQHz6XS4N1Yv4a6E3UTdfBAYg2DEQQKBb39bR5QMV76ReQCtn34SNWU7ToA9yrshLDx1uw6Jh",
  "key45": "3XQUGLZBsfPtQD6WX6U1JL3Xa9pP1BUPH6RNWzf6Edy3FY8EsorAS65hR9aqzxPqDV6JG3WxBe5QcWy97a3nnZL2",
  "key46": "3bHktjjh27F218SbAjzuWoggqg99mSG9GPcJaNXr7ApFStjCE1jrAs3LDvEdpZ3m7J5rJmBdExoot7c186SM9hBA",
  "key47": "3jYbJszFJayzTdbeojg3Yjzht6NKfPioTJzbuMTmBjwRfUuSGvd2sxfHV9hUE3aYEvHn6EPx1ehM9bnvAVjeAhaF",
  "key48": "f9hCcz7CXkaQKVQF5NuvtbNBRpEEqtqKDEMgm42yKP5FqP4fiWTcSqZxgZCzmgQCT4RScktTrGeoXZyMjZpN968",
  "key49": "5q9wydTh73iK4xFDBPTZ9ccexRkpjJL17o6Wq3nCxcKZJRe5m8Y3QnnjAu8R7pasQqFPrHVCvDt4koi7CrdxzXj1"
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
