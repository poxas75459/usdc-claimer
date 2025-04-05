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
    "5igQttty7ZdoZKdsT7UvxAUeB9TKbrkUmN3z3DKEkGWAYnSnd86aeiReGTAma9jfhhYwXWEtPdUf8woBmemUe91H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qqnmESHA9d3CJMXA1571kWXKL513eew1MryYQ9h36rJk9t5BRBa4ipyDi3pwR7ZnFNUPdLptnXbMBAQ84t3kmh8",
  "key1": "4b2ndthCuGNeose16V54kCbEvhpjcnWrQM1p1HtcMZwd9oZQ3zMf7D7aHPb5q6zFEFSRTgv9jvHLWswZdwrNLxio",
  "key2": "4LD65DRaNMQV9QCt4nW2h2fT2EKw98v2jsZ4XUBjMPHSNbDhPyjp6pEVcmsF8zpeybfWXdeFioxfY8CNZnGiMkGH",
  "key3": "2yEKSTV9M6UD9pxwNn2kyHbtitmKxV1anqP8ZrSFKdqDovMGbaYZcWn4yMMjfBkioXWsAQzV5xuJvrEs6epKyxUp",
  "key4": "2aRKT6g1ndK7Zc8n8cpxHJ9XE3N6FF9gwGYTKnGWNgzD2dyzw8w7S4FFduRDRgPHFagLw3YqTX4tcvfNMJ3ydDdo",
  "key5": "2NpA3rwciRrqfCknYoJv7okLR9Ym71EMoYyPwxP4TdK4nCipFZbKPEHvxc6wcUuHkyjurBqRUroXCYH37mRjE72n",
  "key6": "39pVJNwTVLuZ88Jaq974QMtfSxpvWAS2kuBCPx19nTmN4KVam2q8ZaqopNb3DSvjkp1jrNHDrGyZ5qL9Yujj2dB3",
  "key7": "3PbHipvvWkfqWE1cgow2HEQV6MEKNCUj6uwjGr2Fww9RVYD8tHwK14sWn56vGwUUEpxUsrGAtm6jLVEkc2X6r6B4",
  "key8": "5DrwG7tw5N51ZyMQA1RxZ8RnofCisuFoSwM4EbD5Lq5rLELCdxgAMmp8Lnek2KfBea3DAYDPg8TAyTmmooEG1gnF",
  "key9": "5hbiY8SgYAvEXNEpW9WzMQENBbWtdeqZUPzonSXs46oPkSX1DSGRBJBgDJteFS1V2txizxSp6bG9ooLjd5qFSj1h",
  "key10": "52dVuN5D4FMNkxwKbTJRqjtUSr1LeVamAJKJ832t7CUPXMp8qe97sWGWWDt6uxina8mriRXAVgYMxvoHbwpkzspg",
  "key11": "qoBFbrcyyoMSZe3GToZUa8TYh7N3a6L9ZFvu2aU16Vxy4zGfroxv3xVz5He66dKGXUEG3AAfj17J81VDWxbHid6",
  "key12": "4AjSQnz6HGfJ8gQ11njz3Hp6ehnnRDn6UXNMQCJNML31SfXs5qF92gn5H8i54P2rg3BPbJGhcvoYnUnukgaqtmLE",
  "key13": "3pZiCf6znQAuN95dmYEQvNBQUatsxQps1H5qC4VAYUP8tKHuPCKEVSWQUTQ8famp3yPSQF7pas8kbBbNw6F33Vcm",
  "key14": "4xqLa9eikdzrvrsVy69cxkFzWr65y6gRFgxQzyvyKbRQitWj91UP5DMajpyqKiEZU4rTTwHkxs6WcvekzZ7gWEg",
  "key15": "5ebyRj2TswHczSXF5HJmMMdTjHWSbZaSFCGqmvxN8kBJZTHcxWrbGBnehSaQBoFEETxe3nngPrv6yCY8XfzQQhhP",
  "key16": "3vUUPMUmt9SzzasGMgt5efuRZRq9yozcp633CKBxYB5ZcX58ua4ztWYSW6Kk7MkorVRvUVD4QLs4RMk1w8a5ZBP5",
  "key17": "RAiwCNDTdz9y4JFNZW41cxLvpqo5X39XAtk2MUHygGL8YMzFcPLihNQJCZHu8YawKTnbgLMMLrm3mN49qH4uJv5",
  "key18": "4wP2JBGCvE26GJeaX7Yy8kiM739xYf5niFa4DkAr9oGGzWrGN5G2ffDRuk8BmpUtd65sPbLyBYAyWELZ9ik9s6Xa",
  "key19": "51QZyVykbepc2M7uaQ7uGysDbU6kkfk2Zn3KqfgcKHJQHh9vPDyPJZ6414osqe9KwmdaSXWnhSYDFYiuBLs4mard",
  "key20": "2PNFYfCTknzmXsZBuSQ1vtbesr8oMvpd6pkPwL28bCVaCT1ttykb3wjfQPvmzw3RMWRExS6WQmhfsap6p23UQFVi",
  "key21": "3kArYAbtFvBoDhCjYt7H5gqgZENEMpdiN6zCx2jXjzUVPzYrbPtiMRSEQHz8LRc77PAhhdXrsqznE3kp4qeDSc42",
  "key22": "EJn6zm8SRVePt5tauNH1cJLsDGWvnnDNjGB6BS3N9J3pH6p6PXSr7VfkqLJ8cTBtwaYRmhDsJhei643PB9jGVsM",
  "key23": "5ajZLkTYB31XEreKViFPk65LAFF8i5q9PHS3BHkdkn6W7Jsd6uukJ3qK6WHyGTnjzydcsCVP3kR7n7hUfGu1RhKS",
  "key24": "3bQjb73WR9VQ4bSecnbmMLUYCeo5pRR1Lv2vCUvCCJmZxomrjwevd8Znre6JCgesHf2u9Hjsusm179gWxfbFt9d7",
  "key25": "4HKrF6zVacL9NR4Y2x6VCPVYrP7eUAFS4VvdynRe1vyJnGKBTwYFExJZzFNda3BUPccWS44TCqNmUf8S6YM8Uso8",
  "key26": "2F4rbtLj3ZHVaF4eJnwoFUJX5HQQFxnAKhe6dR5qtemFpwzYF56Jf57ZZ8WXPQZ2CnGHLTj84WXVwvwQmoVtNKKj",
  "key27": "DC9159hEC9cPDsahds1vHYYLtcTQEF7nNFyQCigNAWEJYjHqMSMTotSbwV2szt4Wtue4Xp2bFkMdJXYX2NGjxkz",
  "key28": "5jZqwFM6vqb3TtSeLvUwcWngDsgjdNx3C8dJni3Q6xcJCHQ4bppK5Mxzv86wAinyjp1AHoKZ2TzQDNAqJrLqN1ce",
  "key29": "3Wu4FksibuSHpiHh6jJgnPLJhnPn783npz3qDxjm6xNgjVZ21JPKB9RFRNwBprod6ggq6Wc4ZLssNYr1sYvr5P1J",
  "key30": "3HNSLovn1EwjY5Nvb7gUtp5TCJ8J8EpXr9S4PVBDpGn3qgMYakcgSEEccJA88R9cWV7dmRNAmWvMTkbfcMuySobD",
  "key31": "2wC5gmpLyjCt6VEPbJZm41UaCb6ZMA3e4qpoQw8CZpCPornppcpyC5SKHQrBohZvHbBfLfSQQDVQB8Lrn6QA5s4b",
  "key32": "4EfysaKMTSNXN7JZZqLvEhodEcrZbyLShaf4CX7ArsNh4r1Qrkq1qXAbtPqp7Ajz5GkJbBcsWVZoy5LAW2xxe2UV",
  "key33": "5Rs26mpUiX5UzXYJSqcWRGm2zZsqirANm7TcR8HoyZvEAfsLtacUaTNZYcMbHtPbomMNy11gi7M27vgfkiGLetWy",
  "key34": "5emGS1wNpUPTDV9KCkPyP87HdddAfMPADhLn5Bc3D67TRAiUCfMnBpTrofLKN1LKZpWvZ3ECfjMEviaAcTU4aCPM",
  "key35": "21s1GLS4ejTWw5sFmoWJk9qvXC5KxUE8Av5aAmxMEwjcpgkY2CRGL4gyc3TPqi9PsmJwGz5NTKSCVd6Sf1HdHrUQ",
  "key36": "5wepC9H1rx6sxKAyFf6edWN5oWSYBPdQ7r2jqSnr3JYn9a5Md5foe1bqVPQVATkCw4Hqxagzz4knR3piZV2uYejh",
  "key37": "57uYyt3v2F5LZx4BSKBdu77iKS8JfXBFMQvW1uaZ9WMVC8zGTg3NLamWFaR5zrcJ4Xbw8rFpjk6CBW3gpwEYgY1Z",
  "key38": "GHgm3z6ZABkTYgqjHRHZVLnG1hqQvrTaztBDTcGsKrDX8nBpRtdBJ9Mnsrd4RyPsK5GtozkorXQoNh5JUigBegT",
  "key39": "JV5wv4ERNYXLbxVkCQXKPTj9WMY9NyCo9XZGLRukxNpFX8raXJtojqNJ9pKVrSP7MRzZZQceCc1Z7fxLwgKUV8Y",
  "key40": "3ZVzeSuDDMxRytJk1VUCNhToCdMLSHTGcgsXTLuEosRt43P26UKxnAUkePTUeaXpt8Qa8jAXMEY6ym7X5dfrwzSy",
  "key41": "4PVjfqaTT2jpMoYL5MJKNDKcnPNDaqDFFaeHcyNv8Q7sRHvb1BxTM7HzuvKnskCnEpt9JzEdJRiLFmnvEVbnEGcB",
  "key42": "qSxFwAZ3sgh8ypyGXWPep2yXpAJHCzGSYPLuVdkYYihBPZ4h1dBTw7AAwgexwL7FFNBjL7FFW9HKjRoSCh97oQk",
  "key43": "2WAtY4o4bGuzEQGRTUMWJ7MQXxn143BcCx2tqumhciWD2G8NmRRhTK8Fw95yzDdWrjJWvfpqfewYuu7ahR8ah4YK",
  "key44": "4WZtzamdvARUphe1W8t85JZ4CgsXaQU7rFsbFQkf4y3s1NYFCCK9EGrbL7TmYQHYK4KSR1DCRXrJpk26RxpJsNb4",
  "key45": "5u5DjL7MoZ9WPx6Ug6B5CVnfDX74oynKQiFa7Azd9EghkdZT8Kekk6tHnWHaxjJxPokazGNFDQnastx19FozFUew",
  "key46": "2rYvnQLuQiCB45paQy7T2mePeFhUpb1qUUjReuYX4ZCQaAY3ctbppCS7NbRTNUuAJeu651iEqZEEkBkTNCycjHzD",
  "key47": "3vTfLjRHNFCbTsTyN4ah8RmsaSdAPLiD7e4LoyRmwSQZFB2yn2iBvBeWV3t2q9ADcy6VBesbY7q26Smby2Mh4xwW",
  "key48": "52GFaRSQq1eHzEZ66b1AuKe1PJLzS2XVmB6SZHyN1NcTceEe6ywAj18FUeKAnirteXjToqHeRV2fismT93pvDFR3",
  "key49": "qtfMfemiSMd2sCgchXCyWFtBjbpqrvdtCwFyUBbkYE2ti4eG6ygxCKim5g22EjK7B3fH18MS6HhcsqszeUNcaic"
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
