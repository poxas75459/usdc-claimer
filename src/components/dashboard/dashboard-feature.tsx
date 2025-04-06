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
    "45UKqK6oGoW52QmyXFStDLYHtfh5U33Esq7sP7TXekERyk2vCUtmarGg1tr4BCpUoSjcdPoresdsKMb9njGY27eC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iehvAgEaNzJuHn2Gk2LoRHQBHn5pCAWT8pCiAjrFjWBKG6LVhwPCozaWNCoiNfuJdnLhcXaf6hp3wqkn6rxiRii",
  "key1": "5HZxwRtbMDnzCT3BrYp1d6a9Zsxse3HWYh6YRM7Jud6iBBbaov5YUcwAaUmUhw4RnsKWHBYASkfvWE7G9UriSuV3",
  "key2": "5bkk6EZqDyRCwnvVtBsH4BBreJbpA5McdJzWggz4betoKVpuKWXNBVDgSePMLLPuWhfvwZnQKZ4PvAdbveCdyCMR",
  "key3": "38SWdoYPJUheL32gZYw9wQfUVVTZYCMR5szQUTdbiqoiGC9YiNMcTETekJFMoAjxXKBFUajvPeTHfQsr9eeh62j",
  "key4": "4bLUKjdTnxmNTZkLoi55LgzeG1uGiFDaqBrKXmo4GXyb8EzqRNjGhUmPpNZSHKrDT77Y31Ky6KiYm9az56LXVSzx",
  "key5": "44ojWpfrXH4uP7JudNSvpx7vJztVQpM2c9EDVTA5ttaXT4xALc72Nsxk5UVdCP3r4PJDK6PHNYxZNjS6rNRoEd3D",
  "key6": "2pEdHu1h1AqFq7a3S9XL5QY9M3ktaspCH3ZCK8ppEEJ2fWLS47ZB7L8Zz2exstpZayLB8XaUfg6MiX1RwoMbnsM6",
  "key7": "3NKub6wsnASc18AkLFHDALFR4duoTgr3rhB2zUMv91d6PXmFiGZTwWvV8DTRMiQMGYgEBC2afgePsnsVKoe3icjh",
  "key8": "3ifCG7UR1ZAEUzLhjY5v7ZZRmE62e4BnUH16G7FVZtwviHJH1RJrqEnR6NCPDddXjC1Ybx3BmBKcZE5Rs71e5A3V",
  "key9": "5m4m2CaePresUiJKdXr74xgojAWEQLEcFUibqjasFitbGmDo6yZJCTKsyvaTkzzVb5mcH4jXgcgaYGZzidEmZWha",
  "key10": "5JG5Wxh6GquGJhvveXvnaEpWfoS9EYZy5JZSaN8ygVEE6xuzhmEDFo6UXGfipUcWmHD8kGjZD3h1qPWYQc7KC1hF",
  "key11": "4vqDdUFvb9otZrqisBFc2A2fGiMj2rLrDB38gmufehqu1DKfzjVfVqrCuJiSzvHi8wB7MLsCnBuupebQDMBZxiaZ",
  "key12": "5m2TZP6hfYV7KgvV83BiuhWdcEQSQS9HVNem3jrKdBvuw3s3xLxSUbBvWQKw3GxYUJo7KXTpG49CGdejvNs1p9Vi",
  "key13": "2wYRx4HBaUsygMeZfWQdNdXCwARS3sbf1cJrexiC67Hpbnwm4GJ8z3mvwBVWxVfyu7R4pt8oFSEV45JVpo6Rowcy",
  "key14": "5qDVm1HZs8H2V1TRzvyH7EWmAbGwSqmXyzz8CLwDHBCsEPxYJ3G1o7WaofpyonqsDJD7eBCgoZH93eateLna4LTj",
  "key15": "5GmPv1HvXJUzfSgyDP8g1y9sRZvZkbrnEidzzWyNofxwGDQyt9ReheGjbRfRh81YVt45y8voDMpqNJYU2WnSc89H",
  "key16": "21ESfYq2PWHpuMrZvgEVoqdRx15jdjYcByzXmLv1jAtw3zXWhVDizWpn8qi9U6gBhtSSEqU8fSeQTH8oMqDjmk22",
  "key17": "GRQrog1swrkhmTiR4ffeoTiwEv68wDEwQeCC3fqNbVqmK5vWPTn9aTVjxJRHThsSEUTLUYHoCRoQaMRRphmSUCU",
  "key18": "CpVDkcmRmyFgf2ygJFmHqCgJbLSYYi9cXB2XCawF4Yo8EUVPzpHwymZHJcY8V2czA3y3bDH4jJfD6yDMueSWHiC",
  "key19": "5agoYxapYLNeMqawWw9o6q7XebffVvBHJDruEh3KYwH2XQFaG1wCw8ZL9Cx4xcSHwHQiCiqEnSboVB1co2PbDcAu",
  "key20": "5dY7odXsc6E7P2kZ5J8ACNc98TLU21GZH3ohFS4THbQUF37LsKnX8qhSBfuYZ3v2PxiVE377hnVwbaGsSMDX5Eyu",
  "key21": "5Fc23LGKkRr8CpYn8DZTTMNDg3ETgqhWBRwoP35nimaacQxQxucznM3ei1tZQP9D1obAmebeBmP18jAaqxrxGfjP",
  "key22": "5tD7XPwjB3eTv2Gpgf2GxT4rsgux9br96pzKfBBNhmLyb9KJQTgV3HhpU6gh9GXuTurMgDST7FtNigMoMUhDu9KQ",
  "key23": "2e3MADm4KqpTs7k4pp39brQ6r8zBc7VAM7YTKDfZHkLAsPtAj5PmGTsjpzdCxSPx6re2EisogVSNtR7C7VAY7dW3",
  "key24": "5BkHauyYN6eWGPfGgnNksfLCF8CCJztxCHkbiLTqgUSdZJMb1JmRXF9EwnfPgbvFCGSqczk1zykGwFfsoxTDB5u8",
  "key25": "617dYrCZhKhY8QLPrKrubnGsLpXQ4XwsXdWsst6T4xEVbSXER1vQzEho5wJEA8Gvvoq4RL22nKuxNHtUDFp7xUfx",
  "key26": "63DgFDWKY7dEBMnpJ3vtPtBTLm1Qx3EqgfpfhNgA1cTxBPu6sNFwG9XfpscnmovW2Fk5nT8uC1b3tGgpAvYpfabq",
  "key27": "5yFdYhLn21f4NqsxmXmCaBm6K7rffetcgpMSjbKMKnigbHAZLrHgrXXkr76iJx5hpQMty1yKeCVt6ieJB6EWWTZT",
  "key28": "4x6HXFvnjEuHairjEXyWwcXPFnYgLYR6iRU5cLDG7nMaRB7TkfFJrhYxKSuTnCk5yUdStVGMWCmFrUJzasYJpKQ1",
  "key29": "5b5BE5YgA54nc9kGnhgByqPpcE5NHTqfMYj8kUX8CtNQuhY2o8PtsHbCoMvYJuYDWyp2nepg5FKH16mf5fVKCVXn",
  "key30": "8sjzpBkcJaJ7hRwfYjyQtH9HgNvus64vi31sPippW2DDarkUz32VfAtSNfyqJeLg8JZb4BdcxEHtyPUgPW1Aexo",
  "key31": "3Fsy6gpurxxc2HLiaz2jwUEkr4L6yAnD8uup1YY43w9aaTDKZuZKfJKKjFRKyjURqpaJTbvECoG4xMhG9dNuHAzA",
  "key32": "4WGBpziUyyd9iQJmujuYaQeUtEUiAqNrd2eyrda9LDz3esm3pH6udkBaivKCUNzMQVh3Mgk9TMD4uR1SQDxfcVcT",
  "key33": "4MLxuzcvK7B1NnFdnHkZFA4GWY4s1bYUsmbZb18WVTCdba4k9rh6TjTuF1TFKSiXv7qPRZXjaJ9QF4UNjpghbKXU",
  "key34": "5W6cQzgSWPaTa1BZvAFhbiB1PBj6HCmUhcsbcAxws79gdHnp59ZSTmAhNqQfZKvGR9r1x2inN6TprShtdMjyitqh",
  "key35": "46dDAMwXjpADDdRsbPfyxsEhy8eQF3YTbEg8NwwiWAGRjy1rRqDb5BEF4T1tNeXNz1xTugaGqQjgG8Z6YZuYUB1f",
  "key36": "59S8gbv4JUCZQ48UdTeVRqqDR8Vze5wYrTwN98xJX37q8SQZ94UjB5KGQs2nvn9pv2t4fPYB2FdXrWfTQMxMtoZb",
  "key37": "5zJFKgP5CaU7zMoo2qj7dYaTyuc8WB1xcKMBaTwwGUXXCXZsYQB4igjL9KEfb4SCinqe9fBWKbQV34taXEe5c1Wb",
  "key38": "zzBNHFo6iotAtr1c6SfeVHiK5Q19EhBDFbjBVgA9z6hZFAo4ZDgtpVN9QdEXvSFZSBS6kWd49Gmw8KgesaiQjzo"
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
