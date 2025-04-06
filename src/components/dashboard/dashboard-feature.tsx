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
    "4A6HZ4VpKaapseoy41xCCRACXNjFp6KMKLniFSHDmUYo7z1XVrVTuiBZ69J5mh1Vr8PuN3HAUTd4YbeGZNsPiNjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ED1P13vAhJMjLZmqezXHbiFafo6zfAX45QBrSoSUdPWJispRDPqLWwqztCnx1ux5CK7GC1mdj1jg71xBcyDQmY",
  "key1": "4TiutQXbcE4euPg8Q6MmEcMVAZprQsQ5a9kGxfH9WmQkSkWZ3pec4KdPyJtuNYyfk9pRyPw345EVMqfL8KFAsLp9",
  "key2": "2KTa2GbM7nj88jUk54HPPyAAkQGm2TGm7DSkVVsVe7K8ysYQjFEpMs7v9ciKTFH3CvYDax5wQy5ye7SM65gPTSuP",
  "key3": "2zi9o951uqtg7eDh4ErWV8AhDAe8hwqt7nrQkN6BaAvDr5aoNYvM5Y35zcjZzcc6i6Z29yTbxKLtyW7XEmWZEvX7",
  "key4": "DuHuEF5UWWes8VT64iRDr8q1yjC2CuDo5m7sqw3NEeTrbf2rHzffynJBDsQ6D5ffFgH9rC8pQTGtndYwM6AExVk",
  "key5": "66GPasFMjpZMMPy9i7BaGNJcKDi9b6eMsnLWaSCX9Y7hE6q6Z6TQkjzL39BYZbdSxZMWMBEZfHjnuxCpJSdvtsaN",
  "key6": "YPkkpnyeGP3CfmnMYWGfmgi5vpArqsQaBfvcYC6vjBrPhbXf7ZZR2mYFZH98Mn8wcbuhWTKhgcfPK2cMjw8HsP7",
  "key7": "5bGFUoa9f7SyGLQ4TLC3eze2sAaMNJVNU4S5EcksMCFgnyA52nZQPhERVSjgEWCQjxxLfjpDG1bAK47JWDcszHN",
  "key8": "3t7WkUNyauDx9QaKX9DXmKk9hrzy32Z4SVHvR4gwe8Ebs1oXswKNP7YsKycoxspgFuwZqL2jzFzRffoSLY5GaHmv",
  "key9": "QckunYoU2KEqibZgxaXDKH9p161GNzEj1EeoGS8s9MbUxLhnb8E389KbpvZZ2oSt6CYXTWd9zQWo5tHMXMLGGsT",
  "key10": "8GHuSrr1nziHAb7WKN2xAJyGDCMg8C647yrSRmrtwMkbe5yeRxtakt4i2kzFrWtBbVgUHkRscXwBZX8N9uqLaUK",
  "key11": "YcsHdhbDjMNQFXDhXftxdQL8cjKAYymeCdE91kpAoy1sa6vqH9e7xaj3pgfzSoUr8XkCuKFRd6k1Srw2pzCraSh",
  "key12": "B4TqR389rnW1tedZStqaPYmm57ShG4iqYfb1YoSf24S1LsraTxkmgGfLk9aiSEN3mNnscJUXvxDK4wDFHMnYBi5",
  "key13": "GE1fkNHCta4VNt1WTGeLpP6BGBfHHaS9e1cXctVwQUB3DUi1hKexFCoJ6QzMigroCNBQxu4UG6KVGEnkKek5Gi9",
  "key14": "4SHDHLgfaxGknxuRCVfKiMbz7L75A6iDAnjm9MYskHwNZLM89oo352RXqmmvwB2ptkYA1TzdJWrrsD5NrSDGD2QM",
  "key15": "3vEsSXnd6rENkf824We2Nb9gWBLQqLqxVGisyCuqxwNApzVDJqAcuZzMnfMFfwxQ7pedrjixUcESaYoF8Ke1mk6D",
  "key16": "2CLiya6URK9Z5L98R1xhN5jakkSPXGAQ3AX1bamAomGPtXZ4UCJRDxRtXVW9opDbkS96YKxAW8FrqyBNWWMzxeXt",
  "key17": "3m8jXJzk56Rx4w1vWWpaSp4QVBhz2y5QdKog6Uk7dqjbVuTci7fdYcidYYRGdwSm9RkwcuHMuUSyfVQQ81RxhbAL",
  "key18": "5vnaCFJXWNEp5cvoD8BKYCdv2zHTQXQA988SKCcRGD3kBtcXvVjnPvSqfMKgof9LowmE2hub7FbPWjAqxSQMYwcc",
  "key19": "37jduL1Z5WaAXwRLXeZEVUXLMeBP6he1LW3Cmo2TgVxtJj8KNWeEfPM1ryt4UAeZ6ZkErTZvyKJB3JW27eYUFbcm",
  "key20": "4VKCz3GLhsFPncDTR1dHp3CnxukDLpGZz8AFW63UsN1fXeVVdMQzJDTrEzZHYhWYMzRXAQUp1sRwaQXShNGC1aZu",
  "key21": "5uJtusPVxxv4c7wXvNowSXnLtf5r3Kf5jmDHYbcFuAR63zFFYbSj18mDaJCjyaoFqQ7Kbx7fabbd4CVqvg9VUQr7",
  "key22": "mQ3yFfxA1B8oEWjwwHSDiZrnzCeSC6JMr8BpEExMWGF4BDBHBC7wYwEJ5iUDe1FRuLmRKBqnkW6SeqHQmWYFdkF",
  "key23": "5aSY31aEKW4YqVSgngw9yx7iQKj6CehM72gJBzq3gFc8ccAoZfNLfucWfqWuYTGwo1FuiPFPDq8WzDqxDSwXCtC9",
  "key24": "4kDrneJqKiWfUhkzPeWfkv6xRpuCqY3K7LQG5pDdbKbitdVMnRwWhZzke1ELRuBMixkBCjVyKdBfv34L3Xn7Geh2",
  "key25": "5PdqjwrWFcufMMw1hRUxk7qRJTQzCiFrxza8Q3vwPaNpyhLb4FfWaHiRaDycNLhqSQztHjTorqBT7ZpJ6UimywPP",
  "key26": "28Jywo3nS9kduPsoYodSEKEvFN8pVyXpRs8t3hLZGBMMsqLgXyD7qgNdmyuQ1h8h3LrPtHGt88NauV3kiWQqYLnN",
  "key27": "4B9DYCnGBmUmJirfGtepaRVe7Jz19v1MZG6SoeKHFw4n7ixe7u93vyo3ADPZ2TDnXJNSVUjvBUqsUHenLo2xR8SW",
  "key28": "2BQaBFKj6932vrBUYMHoQpSRmHPnCYp2yD13yGns32ciVPseARCEiiVkKEnvXRRTue5pPeDo2rQMdoDaCH622vkK"
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
