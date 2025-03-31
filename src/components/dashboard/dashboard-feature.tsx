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
    "2K1tEkPQJeHsLuUwnSbtoPCBzrXs36NNTVRVsd7dAeRsSrpq8hPYxYT8shKfvXDi7FHgaS3ZTwpr4i5tMTMYzAep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JjDmuufExerqFN1Sq6qDDUBKqjoGqTxDoapVx5Xm4i5hEBZpC29W8e9JhXrAnM8hq82jbMk4at363Rxm43YfyD6",
  "key1": "9rnL9EacZCmBWLWHrCtw9dTEPEEAeu9zLvtRfGXPXzABtiVSHHppavrxMUF6fntdpXggGdKXRgGksaYPr9nMbBf",
  "key2": "9yKywiZgZDE5a2X6E9vm9RivBiYhdtdRDZvmSDcVUYqBTWM3NnrcEMbXoheNa4HKFRCMRafBgWNzsFtHE2k8GWi",
  "key3": "3PBHm5ZTLE4hMN1DTdvNt4XTbR3gKgYTVYYoZjVSBuyU6e3heziEoBSFQE4pXFM1TQaAZaxCmqRvrz3fMGFJ5M6w",
  "key4": "5VVVN5vSfaacDjyMXbYt2xzDbVerfEBwZPNiKEMZmmBfBajqjugQfkCuynNPxCC6YWJmGeL1ExwnsPcKXZdftpk2",
  "key5": "2hyDiAykzfwfQWtc4bLB8ajJ6BdFXfKFwhTxr5AawjNvRMwzLnWT6fXF8WkMmNe51DjzDSqLYcRQfo79v1TKYvX8",
  "key6": "a6FRh1Cxe4orcXPX9sJLyvTjSP7zN94sgTNNKef3FTn4H3sACDthzTPw4pTWTjGZfAs9agGWRm72JEDZi3hiy1q",
  "key7": "47rPKcRD6JxASc9RL56Ew4RTCbggQdofSgVTowdhC3ZWXD7uHvGGxgDbGfeaKTKrsypFktqygSPGcAKW9RS9hsow",
  "key8": "xD44s67oNY1tTCaGByKCn2yVMwsARF2iycE37wm4U3dKiR9NXQ6woxLJyRabDiVb6M8bdMHRDFvKpypD1X19Cux",
  "key9": "jYMNc7DNGXUDQM17p3sPwuw7rG7GEgxkBz8fwqaErRm5ApoBbmPi7rmtA1Afk2FkTFJJrNGyqNWqvtVL6NCnRdc",
  "key10": "4SCv1kwY7LrfRyMpYk51RRBMchEFENP7Qsnexduc4hAL9V17ngCSDU4pEcPAA1g14g72YRUvbo8HfDw4VNCmC2Nw",
  "key11": "rnA9AFUeqjVf82ZoovST4YMFhTyG2tD656CyoTB7uxesgWdHcXRTU84uBGRQdWN3FjWiTD16HMANwfAAr8vGqhH",
  "key12": "3qfjuuUd4EscwCZZHXWP89CA4kaGLHeGvKfGjHEbZfciDLaaVJNbsvcpHJ9NgsAdfNzQcvEXLy1exGZJGmjEhu82",
  "key13": "4JUz6ymkZ3HwZgZ54K5w8Cjbv8vVZAVWEi2bM74s746eryb6GjyvNE8KSB1CU31f88qLkqjJ1vVariQ1VzH2ARF9",
  "key14": "6wXdiAszFomyN3wy9KwNEkMxBJStoZqumtm8vrGoWTqjd3HZq93d8dmyiWBR9qhJw6UGdiZkEw9LZZLzkKo8Q3Q",
  "key15": "2aDnoYwkG6mHTLWkrhRimEe1L2de6Xa7kwuYB7QfB9vjWo8spJWjfpvKxDYEaF4sRvKc9vFh9AZxQkDj3DJrY8u5",
  "key16": "sGKco2Sd8JUPEKFfZx4mbXEyZbHNaU9AFA7Zms1ZgHxkrPTLaG7ay6hnYRJssY6EbYKRoGgT8dcVuHnHpurRjNR",
  "key17": "5bEVvBxLhEkkfqrcYdjcZGHL9DH4ic3nScT1ZQA6sQRAhBjh2wCSsWqsu9ymfcZHHcsUpiKTzJNC5915rDE9fbu7",
  "key18": "5F8jKKvgkZPg43AMpYn1zoFbL31YKLARwW81CpW36oXuzHZnXsCNF2Nbgrb7TCdEhC5tR3kFeSbhz7AvbLdLntm3",
  "key19": "5uj5y3XysjwjDScgtj6f2boHukgq3fLXCcVNtWvxkZfYtTbs214RRfuCnHy43QCBkMDMJpVKxkeYLhtd3XcpLBrZ",
  "key20": "BqJHC4HgxPVkSMAkHFMeNwaxpz6nz93Er5BQNhUq3zPinf6um71uPn9ZQyoMqXJQAh1bZH5PGz2pQTBcNxppHQh",
  "key21": "51iGc7LdPvqBErrtYtrQL52r7vjrJEgZRyvDY8SYotR8FkixVQtZ6ZacE7cwSsoa6QpGSJYbLcUfzdjtxpwrTmkS",
  "key22": "2BT85i7iPmdFu4o6G8JGmHwphKBTAhE8dmSPYf98jrBGosaT2b92QTaPB6d2BZQp8z2hoQqKC8TQTiLqNPfRT1nG",
  "key23": "5CYVF7CN2pntzNANC9jpuoEmVQ7JVa87QrLdYiN3CBBdV955aVxT3PjjXDHN3RsyJtyvAYxRVso6MQHLToidnoUv",
  "key24": "3KaER6wk8vNHbLXyH8KdHDXX6Yj8HFEkawaVnobRAimc2ny3qhbfiedonevC2PP2fSQba2FgXuzowqng44uWTKGt",
  "key25": "43bWsxjUNEnvY9rTv9BbRaWYPn27jL9QrRouGHDWhVKpsBMvNbCRpkoUqhXr1P9dhmJjocZkzMH4RiWncohxHdLX",
  "key26": "4oFTkFLRVJKBPLzeQiFFBo9ZHo3AwmkSNTebc5JUxu9iYHFn6KrrLHKnsQ9cG3ooKjF8qGbkSm1K2388Tmb5xavm",
  "key27": "4b53HfHZ8ojzwXXfd4EBtK4pPvrZ5jFh5v9BAfDH549CkTpXrWiseQcTNrzCM5KqbtZGXRjEiBvAYn6SsYj9WXao",
  "key28": "5LwnK1MpM5ujhgzN1KbjapX2Ef6eAL3zgNhUwWL6tS72tZhpuZygcxCZDFKDSsKu7afYJGnqCd9saV3LFyz1a3KC",
  "key29": "4KBtQJVczHFZrYrDW2byKwBGDyUdJ76U5C2W8EKfGJ8PhbwwohKkVo1VyoyW6DBgxrDNVYYxpCct6vzDojDnRMyS",
  "key30": "5v3ySoRMw2qE6BRtHGyf4bfDpXT6XqSix27dga6FDjajc1aQEtYSwmnEgnC8U1Y12aCo85ajRUh1tTHmtNsKDnXq",
  "key31": "uYH81WK1NvFM82caXAs7f5hGbnzskE1SUM2boJLQ57JHW2X3GXSnphcDZFNTE8s4ZHncnJuLobBqfaw6r1c1EEy",
  "key32": "4hGi75V3VgT8KRnHm2qBJ8V59PKvEUzHT2G4FFFKghxNeXQdm6EKj4HkxzUQ1VxiGqpJZLE95auRjDLzFudP84fs",
  "key33": "34SLFDayAw4tH7fQQ8gqXoRR8PVqwqD7w5DVeNai3EdrahVna8w6JwjYBjTjZ2ZjS3Ckkq2Ae84r4SiuYJjewNYN",
  "key34": "4WohXudMFVNrmCsP51bUmE7eKzRNkQYqKSjNf9TvhdVtCqzY9wJ5dQ7w5ee6q1cfdD458EfShcqAcPwaF39h4BZT",
  "key35": "KU2ZX639sCwFPdztY6kmkQA2kZJe97kgBqUZuve5rwjZ6iWLniDh4cQsSztCtm3RKXzU3uT7ZgjMvPz88Z3tcpv",
  "key36": "2vT6nTJgLGLM831gRqW7WBYZfvAso6MDip31BQrjPB5Ws4XxNGHuiCf6ES4qsg5Z5FSycJiDXmdyB6C9upGSoAWj",
  "key37": "hCTDDBUgSUSgEucxY2Zr1W1Pbd1KnwTS5mZcbEqcXo9E5vM5rj585A4ZAiw7po6b7qQVRfBQWyAkp8fLaux1WEi",
  "key38": "hTZMX4Mvck1yR2U6z2bqZ1GJKpyjjpYexQY699W3Q4bgJswwruwWkfNtnkubeSsRdZ9kqdCKWkE7U9XwgVQzb23",
  "key39": "enJShrJ2Ur4aCE8dRz6c7RNqJJiHCEUgVeSzDsHKYhZkANvohuNSj2122CzZSNwTSTcAKxkYnWcnawZVMk4xAU7",
  "key40": "gtZcCJY9VSUcgm6yDZw3PgEcfct3QkfqCRbx9G9qh8HERyaRMjRwWgkicE1XuZFpxLUd2q7RoJv6gybS5o2uuec",
  "key41": "4MXqCfEHdG5QiXiKrA8v5fYZdtovux9oQGjgZs6Lze4vTzFsLJZT5kBGbtrCGF2RwYCiuV1FtMXwnNsgwGPQmXME",
  "key42": "2MWt9cyrDf6bux63ih6vGXbGLR39i8K2g4TCTV6KaQY897q5wsBoxaUiGKgCzSnUSPubRMHaBUx2PuT1NTeUq9PV",
  "key43": "2rwxuUEzkpJbcSu2qJeY3Lhs9SBXJGWYiNBLFHtZMQSscvX3KZ8VtkJyJni6mhx2a6B5q4yBDwNmdmQp68kksyUT",
  "key44": "4fqCdosCVUsQnwqVSKzcpncbA112UYWPw1QKqC7suB1eKhiznBBgsrJEVG5EC5M48TkLneRKNRGPzB23EBWRygnB",
  "key45": "5RzJ1yDn4FG3T1fSuZ9EzfadVwHNr4yTUYmnLMDZjvyRmQaPFcuHvMACWsW6MxGBVUTBUs7t6p5FbRH4ihDUdttw",
  "key46": "4UXW5273uG6H3qAFkiRsMLwxn9w2PL98CvFHqtCxsG9uiuW2nT6LDqbZDQsZugJmfKqRUzJXPjVNfKje8LNSyvtF",
  "key47": "TwFo1HbJxadm35PgWA7XD42Fbhcky7Z9jxpHCV4PKH9T9TuBK9xZXJjYgx6JqU4HpNVoMHShSqAnuk8zNPxLZED",
  "key48": "3oNCWqeM1ksWTKysSvto5TeQnhPSGgkKLnBDKoiMFKra2UiyfZR5CXb4DSNs5VEkcuouFEB6ofzhPkWT7KugMcMK",
  "key49": "3GKXKhFMZWA398vSyYQTqQHjywggJTerRHUutLqpEDrnnncKP31yrUFNfNPv1u73ntYRVyYfR1sKE8yZrEWxw5fM"
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
