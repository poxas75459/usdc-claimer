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
    "33Zr4vRHn7oWsgwP32T1CARYpv1KvKKeBJHUrfJ4j3CnUCJwtBUSEpSoNHGsDdJSLJR4eiA28ERVgAQUayirQvaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gj9Nu32PDh4bwsvuj61x5JmBP6pdCfjYpvbHapgkDQ66hbWctVZd7zTQx7LF87jq7rCFoVnEJ3cAvVVTMMLnCwq",
  "key1": "3QBF4T8aN8ThLMDb71RNzDhpu3oykX6ZuaxtZtzURqBHzfHHJ2mfEh4gyK567hiQcPutXYbXKdW4RBboG8465XUH",
  "key2": "3gzb2Td3vZWFApqRo9j7q5cHwBdZ15ZfZBBbZHuLwqGduqpk1jj5JvECAnC34ToXT8tLif6oKpZNdPwdZ3szMJGr",
  "key3": "5KZPwfpxRWk34cfCPsz58nKiqP9wVV1SVzz9iSjVjENChJknvTw7yMzVQqHHarbjcnbMXswZPS7pHKZN4DVD54cs",
  "key4": "3EBN4rV8yW5JRsUc7R9GW9jKGZ49mR7TnDixPRtkT9g2tx98Rfq4Akjy8thrCRfegpY9TZjAVuYqxfVBXhToQP6u",
  "key5": "5n4Jnma37PHpEw2DJRfj7hFqUq2JeYdDfEUEAQvJw4ciuSgPygfrkTCfrQ1m84fkp8L8epafWaXQQFdoMxsXHCL9",
  "key6": "53TPtrLJsagzRUGvMxTQjT1DLSu9bvoJd55REH2NjiNpt4WUF1Nxrmo4LdVFzmFGyXQeQgPN4ReHdWVBd4r9nUPV",
  "key7": "2QTJzoRcPvQGuJrJ1zNEGWYaXrSSAcpWSnNAc9cN2Kpjh5ySQaxAGHhVwjCN3TmcTcbo2HZMnAfjSWbqcorwEUXi",
  "key8": "ZnNqJDNzfY7TnsnhmRLGUksWQzgf8SRwkd8WBbhG2Vz2ZDgPNkicA9wucYPaGXQP39cNBTT5CwsZpoc6mnkPwFw",
  "key9": "2KraBYyvMH71aATkqPdJzL6Jrmsr9cRu5825dydEw3vUPrkxmdh62SB9ECuaxvVSsoKfScjvbPWvnm9LeSPosN97",
  "key10": "2XGJ4QMUHkZrXzscEBhgcX98zhUpZk5iKd46FsybPTjajGQe6i5kAss5AL38Srd4SUuNiYWCy3giJbXvoQJqEipZ",
  "key11": "DepkaVZem1H6q2cZxTGP8SFvy8NcvJmEvFDX7ygkDPRCkMsgV5PqvvA5defgvvPwYZnKTDK6faes5N96qYfvCSs",
  "key12": "67fWMR7LUHxE7FWTRySQnZSkKrXSSD2Dapd2h42XJmayZ2je8JH3P3XcWKF4myxrNmftCSdHrzZSkzvkQQHRAjbS",
  "key13": "3hKjJ8bsqHdpSMaovciJKG1mFW123yf6VzuPJbDfBrunohnzBA5DfJzBEto9mmP68foVoC7zyAMmGsVdrcU5xLAw",
  "key14": "54fWdyDRTRqeVX3YRBCD6mrvPJYGhbLfbr5itt9mL4PDjwdppASQJGoXA6TMfnzT3KyfGjR9T5qWzn7sLHtq7X7z",
  "key15": "byZ2R9LD8SVA7Q2oU26EoZxQvXgPAtfHHJDZUjQyuvVZ3fBWNWRByKpU58JnVeASG2wXzfMH7cAw94wfMcVQXwz",
  "key16": "hpoiGZ876KesDqZT2fjE9H1Zeotf7ZiuCWpMHZiKK3pjPXDFYK6X3pRy7nTQhmv1zEBng2u5MnjWadgJ25Wqf6B",
  "key17": "5hdbpazHmzRyCBSp2X9fvTBV8Rq1rUuaMbERAmq4oaZa4Yhb6BQjVquZmNDMPc4VpR1fpLBWFbb3ZhuDdgMHwL42",
  "key18": "5zHTPHXrERWrGPJY3FDvH1RnJQAynDXJRf5jhwB4qgfrnFzFfatJ9aBCacDFfZXkB9yq7hkqz7DiEexoiHBQSrJ4",
  "key19": "4as64k3BA5Jy1zgZKsUyRA8GBSoaPU2vPgi9A2oPFj6cKNfe6TUSyUnpfZrkgJ7QKutsbY5M2rYz17Km3GxGCKqm",
  "key20": "5ZJprYDHpyxvEoe26GUjYpnMc89fXaPQQsGossThvFR6z8NviT6XTMjW8XmvW3Z67sGdYiRU47v76au4iSFPpXob",
  "key21": "4Vy9634ADa31Mza8Bewn3Frf75BmtLgtNnyBxqRd6WRKE9JYDkgHbUX7PD8gudbwNAYLehARpPKVbaCRMcjmN2cx",
  "key22": "4LyxPmSqgH6diEn2FcArJefZeL9JrjCrmL7FPJY5jZHb42m5Jp2e5szcwwW1EzKVQdPJKcu8RcMwUnY3os84Zg8s",
  "key23": "AHAQ2PoooGjLVwGqnzFQK2rgtAFCVcpegx4eETY8FYxr93JKQgX2BRS6Nahys71GuWqgsFNmSQrtUyvxtXUAjaP",
  "key24": "4z33aNeeGo82LQiGsbtQCCyecXDMRKcvuRoU3Y2LUFq4661mwEnZtjd2EvaKbs6vGfMUCgmr8XznpNuFi1sKdq4v",
  "key25": "2EEPCwLyU4F54CAktfLsrcs9bhqwRYbCTGP15tGVQ7iVxZkjUhLUj5r6DFq2hVR3Ep9wMfN7VH13vAGkDzHJX6Wp",
  "key26": "rtPbxRS6ja5eKxpCB4sGYYueiyHkE4CfamcGhtWw687cyfLtpfJA3XjgJL3nQS8jCbz1vDF6mBsFTPFDHyjDWtY",
  "key27": "5oBkkfc2h42jN7ghUd3GPJHSfnGKRAdKWctkndBUBdJSYdAscA8qFHbQGU1VUU1VAvXBqPY3NW8ZQ7MzmLgnzngi",
  "key28": "5YhCgMFTy5Wyw2jqPz2ZAjWWBn8iry2J6EfPw73nfgiJzXEjMJ6nUXbTUBwZcBKxSBbJzppvApioxTVW1GB85TX9",
  "key29": "4QRjQscTDFMPFAY5Vw2LWpVtkBe8npQyYqdNCU4Ai3MCdBfnHBej8VgxBxRHTMb9CEqF9cowzap4Jvad192ZPU9Y",
  "key30": "25ewKXyW1iPHFkT7MMbjWwaTPGbNno17wMHyWpEjtKABNtMDGJytR954AotqpHDF99Wxk4jRUgZmYTwj9dc2UcKs",
  "key31": "4PYo73DbfzPF19vLwmbtK5opJMuUXFySpatumLYUgQV94Qr6tsC8xT6jsjyTqXg3oi2J3pBHx2anQmd9aPph6Niw",
  "key32": "38TTGwLhW9TkPSUkJCsR2mHL3VfWaHvvdgMJbASgP5jNTzv2Xv5dMMUZobtorRzNAtkuK1BFF8yLBRUfBxMzQ6qg",
  "key33": "5yLRej4CuTyer4W8hpBPVaXbbjQ8sPvyGTKwWWNNLiXSnGWscCbshLhds6ku4UkyHaGWhsGb8fFnENsTFXNYCX7U",
  "key34": "5yhSsybRNSknrroTxCemn71QQhRz8J1pHWTBn32yietq15oYUG59xBzdgPeST2oMSHbvimsq7YYQyPVHGoBLjB8Q",
  "key35": "5BwwhTjrroQxMXupjT99johHJrsfZaFGJNGEtL7x4xAey63Kvqy8dtP8K8ZEsvp6BJ5hmTZt4y7oajfb453FtMW",
  "key36": "jp86WCk2pPdyBd2Hk4uZzfLCoJCq1Eo1YhBp9HQhpFnVqpmLN75ZYPimTtKt3mYDbF5e5Yh6cTTtd8Bc8sndxeM",
  "key37": "4BRkGPuhDd3soUUSJuXz26UvDj66yWBS5rcy5v9dgGRmS1Pj11WFuYbbip3GVu2pnQiJxcPzpSSd99fFqAtDvCwt",
  "key38": "2W1WLFeB7vXYj8Ut5btSDWgBXAyCKHjd1oJSnpnr6fc3TJcED2N89vbdPYi9wMSDzHdCUTZoB6CCvzXm2XHPq4Xd",
  "key39": "41RpWu1uCxBaMgBMREfT1RdgfAibxrWbVBqbDWtrUPDxuSYRMrV132nbWL3wb6L8JcVkTKrUAyveWCiA5v1jyZhB",
  "key40": "5SmxCSdqAQQqt9CMCgVtQ2AWcsGVUZDh6UqEVmikv12LMYYJYY7eXhymgfTg8EJP92HezjYXkxZ3hJPEqoZzniJX",
  "key41": "sckTW7s2HihCc3C9CJ2HpYqyHFAPDAnbTSgxdUTN64hUbUu6LYUPpo3TJj4F3PWfj3ocrWDfkvR7aa4gitJWCMw"
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
