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
    "5dAyFfQkzMG7hRywttBH4bZjNL71PmNQCPgDisC2RE1wSUpYXBWPgrfDcjyiUU475YDYt1M483BsAwrCTu6beBBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z2HGfjy6cELVdttu54jWsDWQXcoBKz3ePezNr7QYtCQE2bT75AFe7aTizrqNyHKPiHavEGotGCnr184XjaEVJh2",
  "key1": "2aoXh9YtHTbgtuxvB6FQbLUiRK2AGun12ybBhPCJkXM4QeJEYwmuXFxboMj5frvHQvVwCUswM6EVV4dny9af4Mf8",
  "key2": "4LnZTZs83jDtJssXSwajt3zBqHE9uAnyjyBGFqbFZPvtkwAzFQAWR6Hr8YZ8UEe8D3M5ngoKMop4QDCzg7PFWh45",
  "key3": "5FamJo6mmtA6ydk8vKxRLxgUbwazCv8ArfpJaC9RDzy9YuLjvGukrgG4HbBQCrJZtyxLS8joDgyeFDkD6YjMj7g3",
  "key4": "5YAQLV29fmqMEs3gehyBoYtjxkdjf7DrZP9k9Df8QT7gSuFoDcsyMQNPLgFq1WY8Los1urPTgdFUMFZPg6dXE7xW",
  "key5": "2WKvuCobGCEEUs336inwk3UQe6XPZ1GDbiRGhDeYzS244wN1ZJHtuZegTk9z2MKMgwdiosMvwErZxDi74L1tL4qk",
  "key6": "vXYookY9CwqS6GpCB9ZfrGGps75wakhxZGbWNwL1uj7HoW8z6HCzUsHwduZKgGQ4qhnp7DQCW15HJVdU6gi8S8E",
  "key7": "5LcdqkBBghwEp93F5WuJVWo31C6iBXHmCR1Swa6SPh9qkKS65Dq9QtDTrwue4CnCtvcDNciGxnP4LCuohzyV3zrC",
  "key8": "2W9SKx8xR5SbjnkguZH4R5nZemb4sfRekBfgCe128hjDu9ecZ1ZpP4CMEJDiXwy2oVMPbLhUe5RcxKqB51MenTmD",
  "key9": "5QjF8CJY5uCuho1P4xFissq5C7LNKrz8631igJVYGRisGyDZ1N8Ehxt9PjSDmVWEHsZG8SFT3AonS5eKUzBP3Qgi",
  "key10": "4ttcsGDC7Qwi28NLXiEYiAhxLjCYT7azsV1nwjVcd7uTGCCUq21V6qjKoCBz7vBtcTHocD1V51suQmA3dc8c8vRy",
  "key11": "WAg6FzDGFCHUzrHUShfVP9jByBdLwgPcwKrFVuHgjYdqs2Sd3EXeBzoPXHTUdCDXnSe3qd75eattMAArocyKW8q",
  "key12": "5SLh5s5dr7upZV8TpmGkbcjcYArxJBfqi4fnnjcrvbYFW2THVPiWbrEnPpmDE9HZxygz2Y1hMdnaBsygXGKxMtRg",
  "key13": "5BSQ2dWjw7vkwcrHjg3HgPkpy1bqW3xbdfJuFWoLXAtKYFSu9boqNJkbc1mzZ2fYcR9eWPLB37Ccqqwvb71kdutg",
  "key14": "46B4UvjsMaCb4Cqa72gEvXLxHRggZGQSC7FkdPMoHhZdxCnaYq2NRcQS4r1Yw7bHwRSa5tpddCB7aLu6bgkcQXL",
  "key15": "3Eefi3T8rit7SNsNiHUorUYsyQizTcwfuQgVeUP3mHPTUCoL6p2aNqu8M6nJn8Bh5gumvvf8P1gDsJnqAuqaR8Nj",
  "key16": "45qZjosmvHp494A2vF4hEfVs2EhKCDZ44TNBwGw1oroZXEUMWYJJCBj93tW4XA4US2x1P3KgwhCknZNWvVkvY5vg",
  "key17": "4YJkt3kmsDTFZ49wLLtcKdVJu1TdB5GWNFREZ8excbc6WRyt7XXAmAhh4HFguPQxGoBu7CbgRMK3nTBKWnLBCWHC",
  "key18": "5LETQVZMKGjURpEXpTywj7jDKoxNoXa9nmpmFEkSNWn2zZ39HCUjqvThDv4oWyqP2hHt5fw68LfmzusxhyZ4sUc6",
  "key19": "3Ro5j1Nw9vve6d9q8r3J8npTCs6o6G3e6EVFDxLHTF4PcBWwiXJT4rRcRY4T3e5WV4Lb548AL92KMKQ1RBnzKMi6",
  "key20": "te2NzZuLzCB5GCPzzstdAtPAWJRN46PnqX2qVSrr9uJhDLt6uKDf2AcvhGPruRHw8xty26q57mcsW39feuYPMim",
  "key21": "3g1BCu1e6idUATHqW8nFTSUo8c5kLwe513SMME6v7vDS8jMn4Dw1pxUWqtzCX8mtsMHcexDNQpaNQTBFFQLFWhbb",
  "key22": "5s3eTA26qtr2YXpuqzVtpYbbUnjKognkbmhWXFATVa8cfsSy7GF73YKX4TdZzdXQSyfgHQheWXf7237bimzv2kum",
  "key23": "5gj94K3aM2ifoA61f5x4zcX3d34bbF5NLvegCfBsyZDN3pfHEVFfh9Vg3wBPGyPRLUU21vkRXQ7aogjC25zLoBd1",
  "key24": "SC7hVkS7iAi4DmFnYYgtZotsRs1xS1dUKXBFP7ugPZRyncqUbT5nuA2HBWDV3igNGQyYgFAZvVRVNFaAYKRgbpL",
  "key25": "4ZmXHcA82E1KM23TRQirFx6wbRq3GdT1iwf2oHkf7xXo88iRKNzfKhJLR76YV1arh3axhUUoo1AiqEkSPP4fF32J",
  "key26": "4Z2ueZUCs3UMob4AW8fHW6rtLJEK2imUrYGmXBEioUJjkFwZARgu3muykAjg8E5yUHaHhGvUP1QeU1VUv675nbGh",
  "key27": "4evJLUZifB4fcjJJzSjjrJvL5jhKJiqf2NJe1zR6Z2ERQ7SKpCNh6LurUxFYDgkBR5q2LBQ6tAhJfbd3sFe7ZHy4",
  "key28": "2iahA3WNCEzYfJYrVYb5nAdnaaJ2XJNSMc38ps6K1WPx6ypowDB7LGbM1B6NB7WnWY1BrYf1oGQ6thtBGfMHUCcu",
  "key29": "opsBPLiEVpnmRoj9zvwDLb9xb8EZ7eSgVUc9cRppCGuqAQFN78HYB1R4hVVn9MDhq5BKQ3fgDcMxzREqZF4mRkU",
  "key30": "2tNoAoaY24pgy58mejaCvRasPQ4oTRvfMT7KbZ9aLnvALEwAMALwP9UtVK8zzRGE5v8D6WGBrH6GYHkFAwtzxLd1"
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
