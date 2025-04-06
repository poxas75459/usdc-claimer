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
    "3Km4Q1HikRt3t88BTy5e9MgP5C7mRDgN4K1G3zZu8za9AmAvFBjpe8bXFFAaFe1VQX2df9jJzdkNEGT4y319Gc1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GDyXVDXoD7j7SuVYbvCPXqZpSM2E4fdtUV9bXmZHWsVqXUNroYnFryc9sH8AwXUMqW2DCcGzLGXBk56wKbQHS8s",
  "key1": "3jFjE72sPiCZ281ibyJsecoEyVZX7BWARvpTDVEHqxPqSyrfn9K1sPPq3DVjJVDBpWyJRoEJ7UeqxVTLa8HDNVzs",
  "key2": "3P6Y39S5xUHWuGVQK7qtgCyrpvnsVSj9zmivmJpGzKsSHQRytTVmDh4EaPNxd4LNJv8J9S2m6pP74h5Y7YLs8EAZ",
  "key3": "5vMzM1cDW7by4dudq1XXVC7XrKyNoGAw3NMU1HZknPxnyEE5mmKZoQnisJ1FJ3kZLE7QULuLj5H4oRM5s9DGEUqG",
  "key4": "4sLum4KUFxBTnjRzAWgteUfBhqhZv4E4UUua9sd6ZbVyiYGqRZPuFebHehPY15U13k5uynpQgz6r8YabiGU7wWuP",
  "key5": "4KVJrvPtZtGboD8iLCLtbX4NMJjffVHSi28b6tNXvvK84CQKBVtquR7rt1AJC7qqai3qh5Qcpc2H44562vzJ7Yff",
  "key6": "2s1zYdwCvPzs3M3Ybu1WVqknT6UMuZ32wwL5MuDZawRUyqmZdYXaMvx4wKbkUT8SAH5JTrqEJeNsb2uF3T3m5D6g",
  "key7": "4shZt9nzEhdoBcyNSk4oGf6MKAkxeyvHhCoxdwmQ1am7WwKnxqM2WhFEqsPSxfC61fKc3s34CD5AHtSF8RvrhH37",
  "key8": "4BKQLqVmpkF1GkUkthNyRwExvdMcGtcBFNGbxaTunLiWedTZu9CLWdx4N4GLNN6bAm5VDpZEq4ArCAHFsAZfqFeZ",
  "key9": "2g3yzYJrrAv2z15tv1BRajsuLarZXrr1VkN1RQGNFVuS5VhFXTLwjSX1cohjNB34mwahxTxmGPveqpz8xebhdoF5",
  "key10": "3Wi3YpfAfQTi1S9yEZg5YeD4m71ZvB5kyAhfHCdNVYCEiTe19RRGtPLQjyNgC5ssFH5d9rCxyJ9QNJ4vZVgqLUjd",
  "key11": "5R6MSAvPP7wrTM2W5MQ1c1Rr3Qgdf7uhMLtUvybKpQsyxArYkD9xMLmsZpFEZdCr8Tt4ZDvhZx9JtdDQpYb9Kiud",
  "key12": "5hWJ97ZCc51oysRFz2MYWAJhMsPY1LNggnBuwY5MUEDXuLUwmjzwRzzrX82LTAsRysNtAQP3PFR7RQk9jXgFbFqh",
  "key13": "pBc4eFWokDaZm6iSoAEvU1L5zJnXYWJH8R7ELcw7Siu8EEio1BUXXSn7WykFYozgVA91XCQpyshz5gUVGwXZGEu",
  "key14": "RzJj8xN1aBZqgc11VxpnnLADhCAPjLQptpc9CWNrBE2mTK4vCGpWgmjpvxDrVkvGPMGeBtDWPcPhbh5ZU8EMcDj",
  "key15": "4KX8mKiegVyMhq5ov5MykJdbpDAn2wkhjp28n6T8WuaaFfzdFatJcmAtct7k4B59fxHbXwNqjKfiQQcBfr3TqfCf",
  "key16": "4arJLkUPMb2DMfkHPUuCaai8D3d5N4tPTiwZZsQQRqH3aqwA7NvGFJUy1Z4t46CvJ5h7S9RaasX45LFtyWxTEfU3",
  "key17": "29u8d337e3t33ArsC9V3h3dB2epB4YBXxiKynfkcgzCMwvPEXh8SBzHDMnNZ3NJmonu8UHwXRzM63tT2JRthQr66",
  "key18": "295cemcJGdriJnZExtX2spryNmYykzA6AZx8rBz3PMr56FYE8piTn7k5ATMq1sVkf8vb9oHaWhem8BxQHV8egQzV",
  "key19": "3N3UBYzu7Ly2VKb9arqwm5DYjUdWsENMvE12MsK244G5YR1a6TcAkjFNNHfESaxNsWrXu8otBhK657VopNNz6BFJ",
  "key20": "VX1Sgtenup5R3yosCN2PMpvZSb7Nq4FddBuXijMA4SDE3ugdwH32FBTvV1TFinJX8xZP3uq6XrbzzW61mSTGFmR",
  "key21": "4zvT3AtdoNRSZYt5cp1bEnYHK5o4yYkgDSY2Y1xu5S1nz7yeHERu7iH4vzAPC8YERHgchBr8qxvw9eN1a6MsnddR",
  "key22": "2EbW32QDStPNd2rWW8Ggv8bh81BPDo3MFddEDNTBybuxUhARb8bEBNW38UdjQDStzssF3Q7QBSLsWYAfVsm4ZM6B",
  "key23": "5ktVkm22ZCerVZ62nbU8gBEtQwVyfwfYuLsw3xpaBZdnVkioeGfQsFTbWoMC8u9Qf8aRtpDQWErRvtzmPhyzdM3X",
  "key24": "2MTHAsyKKYRHPraRaJXK9EF8DWjWFCNKkowr3494B1PiKtwcssvMXEx7pHXJKn8Uwnb2DdUFXV85HS3WPDR4mAb",
  "key25": "5YENDS3xrggSZooSBjYmX3LGgguX3vTZZXCU5MQEbkQJzZpf7w7QaHkmKPoEA5MhV1LFUzHP8fKWPyeELF6QJGbH",
  "key26": "5TvsUhbB5A9ySJ6AmdVmM38WrHTgey7WR5DpsKWntojagB3HW5nrBGJF7mdy7wQVUMhGiLwyy9fP2N4UH55XrWNP",
  "key27": "7LfSm7Tp4R5kbiQn5NZbfoWH9GVErakjJjj2x8urMhBiHB9QP2ktzwvetKAWW6MzJNAchPumxQY9iBPpZDfbTBg",
  "key28": "3QnLFy9QLmp6qN6aLUnyc2ecAV8hvMc8cAQdaFa8m5geC2LscUTjFaBcnMPaKh9VagvUtEXo1A16QAt2FQEVAooB",
  "key29": "4jEiNxhBp55oMpxmwFvM1FhTQERTFsazs4EeAQTdwXBPXzeiu2bLXUe6j5a9LCK3aiVydxbKDAaZjfC9zwoE9dT9",
  "key30": "5MauYds7knaNUgAZm71Vjbizz8d9DUmh7WtdYZFGV25uAusSSJsDbSDwaQxXMxKz4GqxgJsfd4AbzNwdbvVnRhu8",
  "key31": "347McQKikHuMaff2jZccmPRQLiPh3TZSZyyXMC1YFdCd3eLHQT6NeggXuXAMV2eDU66PUzA7WBsfQdutRdPcboUM",
  "key32": "22Viq3amj8Mv5zfeCJm4STiU9stmAQV8Q29dyPXY3NziNRHsKNJcw8SpmWD9wxEz81sBZ7JAg928h5TA2tdG3kCT",
  "key33": "5dxCZbkGWRW2ymx174sGJmcU8tAHLxhEEedAS9HWBWZA8ZpYRgdJF1PVcVyJdiVVwQkVx32RbyG9b6FQDVvkqpLa",
  "key34": "5KSZrr6tKxvVwJmtLfNFEZUBB6kQLgh5vFSS5F3JHJqC9REgUBXTWtA6sqPXjrXXVXsDUGRYM8Gb91b66PpCzVup",
  "key35": "46EBuQQJUyckp5kyoGMT5MMZ5T94k1Tvv83XxJcSnHdGqkbP5AosQ91frRXHECVQh3PXmSik4dpVbas2vAWxpY9Z",
  "key36": "5gtckufuGo6VAFdoRaPgHWkpnHBSBg5W1YDGjQAZsLfQsDBmBsG4LdAQKKKNCEBjBanKGwtjGV7endkBk9pj8DJo",
  "key37": "2MVHZn5rbTjxNyk9TzTEjpbv4Fob92wf6iHzH7AzfUn3z22HpeMqnZCRo7pJEXe3QVGzV5RDofBwL5hmPKU6ECfL",
  "key38": "57XsTZFepqw7AmfSFzJCotX7dXBDd7Kn6EVBkqpNCU68qrutB7TFzc8eaGddgZTYj15Nw7VzckUW42pH4SNCNNDL"
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
