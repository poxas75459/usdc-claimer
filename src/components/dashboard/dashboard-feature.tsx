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
    "2tqBKEQCW16UAhaVB3uAaz5fCs4m8h2V9hC7aDZs15w22TT1ziJDUKnynjdVrznMjMJw6qTTtdCsg19kddCdx78a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cSqhvRk29P4L1PZq5HqFBGeezKMZChJECxEtaFXUVk115VySAaD6hvzQsino3Pm6cBacXojMBmsyMqskPtpKUib",
  "key1": "3dnKYT9sn3yXpuh1kL6pBx5RjrzJk6jvxdZCVsZZutnbyVeHKHMTKmUTiqqw6AQ4twit6B3X6ajMMCZdWuAeAjWW",
  "key2": "vwr7YXqPij8epqcUH5tPnyFJ8kj6QwrWXrdi42es5B2dPKSTU52SngBuV5zjwJtwZZ5NFmKGR2fzPTSFtoFtyXN",
  "key3": "4fVe6XbDx4i69NJwWrEi6321SStkMNetLVAozsBsxqRepxwQgQ8FDwhSZDJJokDvXdqxgtmHqWpnR2LeKS1jaoTb",
  "key4": "5NY971jGT6YnKrdyfVzNKtAnUyRSiBc3Kba8913RaC4cRnSmaBEakUFBG3RjXKQHQbEUQV7mvNi4udLnerTVy2fm",
  "key5": "47TaEBoMnAGXesR4a4HnzAEPf5cWY8CsFHLmFAhyo3znbAC8EE4Q32B4s9gQF6XYBeCQh4eNtCD9SNXgtbCc3jyL",
  "key6": "5bDs5daZa6Uhvk3gvrMA94jowhxKXXUWJ58cdRQf6Hbph5r7cQhjy6NhXRQyQg4kM3cZUdb8CdZHhf787A6XsBex",
  "key7": "2AggpU3aRyPZhCGBWPyYjPneryyVYSiiVzrpTAv2Zsdne6Y88wzt79aDL9DRkAYbuGDBqy693kBazAgBR1V9jDTw",
  "key8": "4juyCtM7Z1HHXmMmydD9rv7MEuypX5q4j61KfB1GWMsKSnE7e73fFQ9U3j2RUeqaUtuYCQxwLtZAQaxdg99tvhbu",
  "key9": "3pGHUgzuSpTzQLEaeFz4HJxLadJ8y6YoErXqBnRKBMnq9y1jyMKo1X6TEapRdHoJRYjupuLqc4t5yvA1NZfVvpa4",
  "key10": "gzcjQj4kHsQ9QXfM8b1Es3qvUHm9Bnb9fmUMxRVB3SAejziKv3qKyFr2rDjeqqjyVaLG95xApBpkobU95szzkis",
  "key11": "5qsAudSes3ndBoNtLkJ8KDzVFCFCdYjtdJ8iVdtqpZRevBygemMzSQG8Qc1u5ZzXnvj6sU8Ey4WCiFF8ZupKEhX3",
  "key12": "A9w7wfhrG5LakTNEW2CsbgCXWfLFVo9W9mTCBtLmAQzpSm4rcUYg1Rw22oiU7KvHRkjMhk61j3yWGk9AHXEsmxu",
  "key13": "4KkgCY2PfvsxvjiTRtpYTT5zkaxfWgY53kDZxqNhyd8jx3TqarJkorizeKTbR9NbWmg9g9Sh1P18owWcfUQhubGc",
  "key14": "VpFRYwFAtDrqsLUY1W6KTeNeB8yim7SBt5WHNdMp5Ti1eYCfpgGFzvVvwhnUALBJrFyNYSyL6KvHmywvwAtnBsR",
  "key15": "YuYVNsVUDTq6q4C7Nxg9Fe9ApPpDWbbpABwqfsYQr4U6Har3X5Auyc3MR8XNSv2SdkezRZCpNPVoqiMYQjPs6Zs",
  "key16": "4MCkMDgMDw6rstzuJMpGpYs7b5zFhRuUJ8UQquZTkJ8WV9ajNvXyAnW7fKbTwYCZAu31HPtzbpLeLqAMvkD1pdj6",
  "key17": "zfNzwpdnKD2fk1NZDd3fQw94V3BY87G8EEozxHj7FjSJfr7SYdbyn9hYVyvdmiu7ERGvNnE4Yh3dCJt21QJt5r8",
  "key18": "HgeqSAmew8zt4Mi9kY1UQ3JvioWYCCjGBgGYGQJVesCqb7Nap7BVLKKmEG2u4r93VEjQqABfbYhCGYwEMHaiEyN",
  "key19": "2CV4oFtziKyunrAZpx8LXutPnRtaK5nLGULhLvFEdbni6an3hpf73J4biWBEunCH7VvCtC1CgdS9Rk4bxwJ4Ew4L",
  "key20": "4Ee54K5d4Dcu3wV9C3MgEwnGy75jYputQ3rjiPVerjsx4BBV3EacEW6NfhVhhZn5AyiajsGozoEb6LSv2AhUv5SL",
  "key21": "3BfbEegqPUdfWWJoYh8TuoJxJi5j43rCEhdMJoSYUCs91ymXWgRQsDSfkEK4DMzPUfbPggtmUCfe5NVSYBhVj7Ww",
  "key22": "5PMkhhM7QjUaM3BBaNSn3bRjjFesJihpLt3sUGHe279qJr2y7yHw4Vgr4Cv7po8sFzL3bdfqBr4qx9QZBK4CJqS2",
  "key23": "4v7XR1osqqo6yvkay7uyj4bSS78MCbJAgjKrMfSNRhB2aqERGMnwDBdQC8WFD3bVno5FnSTraiUuDxVSPPebNc35",
  "key24": "4GarTSdEy54egCQiFva7GufwLABMAXJ5MgyoUa43roDi2oy53gnXXBS5ExmBjgL1mQgoi6VomHW5RCbTxJYQdSDn",
  "key25": "3Qar1nPatG7XVFNJFceegcyV4AX9GYNHmpfN4NnCQahvde8eKeH8dQA3ZRr4K6ytq4rC6XM53ok17ujaL4RSJtBq",
  "key26": "VLfkFzcft1THMwXierkphpR8C6LqFQsctNAEPDRVgvVj5SNHevxHDHLzRtRMiwKy1NFhbF4ZznruR49AwqwWeW8",
  "key27": "4Umuc45wH9tusGMTj35QZMseRarrRpKwJnXznbmbtGAjtxZMM6nSTiKaUZy3NF6i2x9GrxiPKPr4qkUGZGZ5Lpse",
  "key28": "2xApTUwHbqjLzt3RSebWtZtGhcc3HVJkBoLmC8cYQtXx94esXGLGUEmowhsJG64vZ6oLnpGDigujXe1EVBupWxfP",
  "key29": "2FEb9jC9iN4NSRH8Y4EqB6pXYyQ3w5agP4ZkGT2p2JbnFq5JMAZBqNvsHaN1URgde6LkpySmPXi6eLbCQUcyoRk7",
  "key30": "216naDFpqM5WVtdGZxuHAh3sVyXjHzPe7ZmcBvt92xqVAAE4tCcEzH5W3kSBvh42tHLKMYTWeHzxX56FZPgfdaju",
  "key31": "5EBnQZrz5d8t5iq9T3qaAyEM13sLEZAMZLan2Qn394UYTCD7AEJDXmRhBvuqA7dC4qEj36XSXQtMxzS5wQmun6hW",
  "key32": "XU3yGfD7bs26HannfboUe17orSiv67Ucu1DMupdNuRmS3uBefujo4uN9hHcWEyfFCNTu6oehqsKD583n63NseJh",
  "key33": "4LbnjdgJYGyxSwNnFbgMxhr1gbfMwgVB4hKJm4YR7imudH6KuCTpY8MzrmGvGGkVE9WGi7FF3q1NzX1mKkKvYHWB",
  "key34": "2oit3vfinVqg56AuiqJdfsHKvAmfjJTKuj8eSvcBsYJdeUs1aBC1YWGg1954bu8v4DakirdKeyKENwJff27NyEHC"
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
