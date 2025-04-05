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
    "4SeAYax6GSee5wX4r9pwcGkiTgZnkwnTevGDjQe3X71rTz5hdYJXxhEcxyhPFLhn5wHrBFCgBTQqJ11zgMWvTEXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jjrGtrXVLjFC4H7AC7FHUK4FUNMvxLoD4gUddX3HCXzXZ7B8bdYSQi56erab1ZK6Jt4jheLwCANWYamV3jaitUR",
  "key1": "5nagSR1g4vo15SNVGzNvcc9njMaV1B7zPr73NKZmTCKbMjwdAkB5ArmGjaobKninPK6SFuWJZmH6UBq39YkHqZzv",
  "key2": "619wgTFx312dDHpuFNjwzVD8ADuL98tpsRhQTtwPMay6RuGtbXsCraSPXrWXNCrUbcgw2TDsEP5hETgxuGFKjePv",
  "key3": "5M5msUAKmapZwhaP2JTJDABitZDY9Au2M1zT9n8Dcii5odKcLhaqotBZw8XqcghASjBBdQywogNS2bytgVcTSgvo",
  "key4": "4FMTdxr9iU5VhJXhenzotgU9Ebhkam8r5xVjNSLCdG6iEkh6WzEbMFtRuGiE3Xi2KFAi5WEhpiG7HcY3fVh8ZSXt",
  "key5": "2EqMcZHigF1vG8x4CRbghQ6PmjTKpvYue9GBB7iz29F75TknR5HVJG4vSDYGUfgWi1bw1T321GATPQy4rysUDxQc",
  "key6": "35THPQoFuCvUpq7KBEMHQRPQXMNddAW9k7D7Y1TYU9uQWFgW6BMkTt3kzDdqXWCd4YQLsMhhtrwjNaFDNGKDqCR3",
  "key7": "23Gbfnu1scHroUSGxoZNXotCKChoXbsKV19Yqj7P8xfjV9PPvfzTS7Qjew7jtoJLkBTKExGNcqjb78VU3ceuYira",
  "key8": "2Cqu4cstT7CgGDAPQEkQf4msGX37mk2oDUvM4B36rigpag8HEzV6o5jCsjHKkNcBZ5yVi8S3BAXoKwaL5tg5sbgL",
  "key9": "3gdFsewUEhydLZE1nW3BJ9qTooBJHc83RhDfVjCJP3qwczwBc4VZR8Kd8RTFaJ8ujpfshKQxfLM2fVXov1qGChVY",
  "key10": "5f7K7RmiyS4SCbt4VdqFF2aNw6bsZpLKFVh62jvfH7dXPpnVXTr1aQvZ2qKC6y2oufvgM9vANFiKGVgadKieyk4F",
  "key11": "jR8J9DHvV1RLHkBVkpAwAXEfnyNnn6QXtugB9WVdMY8sx97XHj8tBZETYk9SVdaHixs7p5cY5nSJFgiV4RuBe8W",
  "key12": "5VoHrwVy2jCRwwVzP5Aid6juooFxU3XzBbqY8ixk5mZ2p9dz9pqVBvfnxUgHNthC2in8kf5A4iCWbFd2qkT8Dp4E",
  "key13": "48sQdC9q4pBd7zyKiPkrsTheZXaU2yeP7eQy5H8LrbXRcAauTxyVLz92oEFKYv3a9TnfJiAo1HUxvzsANMQ6jSGn",
  "key14": "2NpEDhDANYx1n3eqK6KYokdATGm4N1SirETQPwgQDGWTaeSQsQm7fDboqrda8xHV1bB2ZKohx79DwqwAYguce5eT",
  "key15": "5L79t454WAmjD5THLFX9Sbtwi8dmkQDHczrRoUBVh11bnHg3jeQMxAjLqhyftmuEeXadN49sKJRhicZXoqsMQvnN",
  "key16": "3mGBoQBTL3mWT2u2bemuHwEpdMwZtPfLFuoDM9Wmc1jf1AKPGEmd9JBoh2gdWqY1ikZTpVXqTd4PcWgYr7atPeAV",
  "key17": "5ZdB9tGAfQ7R1ktZ82s2hi2kJkAakMcR4S6nsxyRqKh1EQZvZ4A1zivCw71eXovfZACvfw9x51oweTU97mMe94jk",
  "key18": "4eihPfejqJqW4L7qxTQQW4SWT5wg7VvL317bE94JZFHayKx7hHKuyFyJHwdzHdKgSUL5LweUnrsTSAcrg7BoyUfo",
  "key19": "4NyTPd7tKJ3FnZH5AVYKLB4LX1L4trqGrbDPY6zkS7AvCjHkbwUdDRmVNny16bYGcMJFMKHsuuVgN2zciJwWwyT1",
  "key20": "3suJJxTfqmzRzsqLfKbrUikVMKTAaERfDGL5MYmi1KmFT8S8DLswGBGQBjMU7K152Rftk6k2mxQ8qdqLjqUDQgXE",
  "key21": "WCZ9KhUPYHVzkR4DokwaE7YDCPUJ2e738BMKBPS26EmDHECP5Qmhf3TFwAt8zoptkKY8mXZ9VVeJq7PFQBNFeMP",
  "key22": "5oP89KZtgucmXjPVQVCduGm8jjonU25zscdbtNetExDLw7cexdDgmQxBnUHwmrmM5KkBZaBvjJgPVknBdY5DZtnT",
  "key23": "4HVdJK7N7EJV2QCWm7HTMLLFCLGjFVjCH13M8Me3dBHWpdTRju1hVFDU2RvD76rdE7V914FRnydWczGvf9p4tVEo",
  "key24": "4jmJRR4dyN3AZJyam1CFecyXW6xLoTBVFZB6wJGPmCzNEXmTEjFUCp6SacdjCXq3zRf5PvNmK2rGcq2znKzvBrb2",
  "key25": "Ry8GarHsuQRE9jLPBq7yAPnXDeBKtk4JFbPxgSmEt2bNsVpDtNuPciRmiCBjSxCsWURdEJ6TqREkPanBToU3xuD",
  "key26": "5DcMnyXuvW2cqwbtDmwAQY8FDjbhRcpGQVso4XVhGGemUXFG3rZ2iqFXtc2cnRvJ6s2LRvQTSVgnuEwmJnYuvKdy",
  "key27": "5KLvh2FncQgC74DvrUw3qjqrg5J8oMVNMXMGavTzMLwCgdBfErzQqGZoghk4FL5f1xuoKckejTvXBJDcH99gkg6w",
  "key28": "3p7HWtTWsnGA1xJTtUgNTg96mabb7gVQo45fzAF6Z35mUGbvop3orGEYiov1JMEMoHfeD6GCDx55CRq4tg39CqvS",
  "key29": "66deNL4d4Bphwpk5f76NVxFVaTkx8HG9qewoNDPhdwjvha6eanGvpTqTbu5ugwy77oWSFjkxwmhXr9bKMJ7Sm7T9",
  "key30": "4f2JeepWszSSmuuAtCLy8ACU2KWEvACCh9QoRaKv5D4mhnAu5jZXKvWuNDEXucJocr3ssvxtTr8h4tK1GHvmrMNM",
  "key31": "3gyA3xNvTjirCGJBC8JuxZxB6s9Q82FnNjRHBwkSZwunGmXJCoA8jN9J1ms7ip44SGgpUfKCGuVm7Nxo2MMPsQZR",
  "key32": "ruYUGuKme51kWPRHxMZ2HBQ3JUsNjrspRHqZddk94qW4PS9HcZiuoQ7XcugX9tYsLYnrmpQqzQ6xyeTdG1rtdKP",
  "key33": "5FjggnfbeWfKUfb3bzxG3d7fVd839VrxDYyHjAXT9bztEorgo5eJ3V5qq9LJGJ8KYaPgEKAa6csugNmdtfS2Bv7W",
  "key34": "NwdQpqTR5rqnzHqgi1TR9oLR5PaZnpHZBoX8VyqcmaRpV98pGyKnh831WgCtXa9QVeo2fZbv44acKaCxv6iLyQD",
  "key35": "A3Ai76cXQSwmfN27VkUN66eB9iM7Bwf7RjdER42QQxueReGqQF16LmNLJTMs3sF2T7vyqsQsAFwcubHmqjKXGfo",
  "key36": "5Ln5T6rNYnv3cdgeQvXe2UJLqhbSFBcHR8e1Kzb8sDRCkSawXjFH89XzK3H52hjqz4VFUK71ZUs1Vy5PV4ERtY8T",
  "key37": "3x8Lu8LbT8KG4CeTWYCEEw1e8wYwqm4tRzRN4WV2c9Yvh7jyiAkfNY1WnbpLvgDiN4vRvGNuLyu2rvTs5oTyTmc1",
  "key38": "37CL9K9o1xz3AHYQEZaGvSBjrQfTsKm5gTxcw13DFCQE4kXX9Rhwr7m9gEyBcAoswcJU2erAmVLvyDF3NC9Hm7LB",
  "key39": "4MFKeXxhCAPBdBGDTKdyz49x4bE15gXyUqSXrt5nZp4VWKKDKuJ9vK1c8vzFqH84hP4u67VTkwahDEkBXzojSK9G",
  "key40": "yMXUKUWvEqcKSknJZUDDzcCJoDWYZ1gsFUtuhpA1j3c6oBMsLrXcPtnVdDbnwbzXfTqdxPtbZa8wgWxqRYeUaaD",
  "key41": "3GKTDmzbNSZQej9jmk941ovm1H5bmZ3RaWi4qDFTigso5qojJR6jYVegwqFykXzwr7jjojc6HNXtHm8vkhifXcVD"
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
