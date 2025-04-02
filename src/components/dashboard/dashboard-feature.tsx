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
    "4s3spYrXU6WPv1VNiY42bewUxtJGS2hVbwyrXHmakMwZpU1GpKxShVGR2WiuLRz88CuLhhiXKg2eSQqVXzo68sdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DwYtkXot1oXFH1iYgkWNwdJ3xaCpUodHjJKSc7UywDp1f7eXVAbjK6D62fHbQNttr65rtsFVaBdwcvKuJLDG7fM",
  "key1": "2M1D7AGoyxsdCjMkkH1iKRKJGZ8kmCwiMXx967hXchQAxhtaN31HAevqPDSYXH4vzay8uMBTTDkR3SaSmsfho8qw",
  "key2": "mdHPuhKo8mqHdMHWyYMs3kqHWLRZ7fTiEiAsDW9JfFByHTihb2iBKYtwGx4MoLajZBLF9sgGHYciLmAAwm2xXW9",
  "key3": "38rXZVhx632BD5orTYZNBGDAP4iPXT863SJRejE2i2vBNepQ1qGsWTWZWrhqCPbruX47cNLdTCY4wHW3tGXhsh3A",
  "key4": "4u3M1PSkJJYFYq3KQLJ1espwoAdZbXXxoYXG5gQza8f4GoZnWYiMtHLcMBXd83z2RSSKsgpSnzrLNBv4jBVy26jV",
  "key5": "44de578VQ7JDqLu2q8VVA5DZ6cEfL6vSSvwFrmpN2rp1AqGm3utCdJqDc1c3p7gpXFUE2G8DmYJ3hgGwB9R9HpDv",
  "key6": "4hqGAkjhFR4bKUKDqwGHaGuTBmpUDo1gy7CsPeP7ofFugw4iBL4PwqDY5bViu53uCRidfooqGwG5VWd8rugjcbN5",
  "key7": "mnHXJp4zWpeQfC6nnSVj9aj5poSHXQCGvSeQZW868f6T3DZzu7BhpDQ8Az1qSkJKD5aUqzmoTgCeeozC8uKZMSh",
  "key8": "4hLv72eaZ6Znn3m6JCm2r2y88Ljf7VGCLRtaaJVTfTiV9ZA8uh6xbue7EjtGtgPPtiaBh5Anwr5G5GUndSVhauwZ",
  "key9": "3oDdka9Bxsz2FTbw1yM2ZNNeG5FGibNnpXDn3mV3KgbcA7metJVksQtB86VxLsJBqF8kd3seuiuWdeXzpVuaVyt2",
  "key10": "2Gd3BWHfyQFSmJwK1tXnobmbUV7PAvHEaArpUbvo5VHH85wZv7R5iE5GeiZMJJxxeAJih2MeRWccucvEaFLpF9sF",
  "key11": "5u92GbFw9werSvWmXht3jGhTC7hCEqHdUNdJcnFDk7cs85LQxdP4cfaxVM4rcd5L3T7SHZGUwem7f3wfZkqpd4ST",
  "key12": "66fB7wf8dNddRDeRhcMuLg9enL4WZqFpMmywZ4HQzmqcjdDr4JSscQNz4G64DWYvP2ayE9h684FWKjdC6uoEGz9j",
  "key13": "22HYmfjLWjxch9315shjXqsSbNMTx5LiEoBsXNEa51Xt7dRJ3z9AQpiZ8ymZWm68xGu1w2eXPw4pWciNn4rDo5uS",
  "key14": "2Caj5xBYSV9nuEczHkggg7dbGphXcJs34xHXcuq23Q3tky4RvLjkDUZAnsSwMi1ejtjW4pU5LMgudLGJgF9bodqD",
  "key15": "2egNTUpUVndPRHSDHFnpg22DNLGqaA2csZ5GPoHES1nRHU2LDQ9BV1MnKRmbUD4HH3hUxturpNysgUPQo8koSiPH",
  "key16": "FPRwKLLRkkZGXW6pidwwRKQh8LhuuZC9byJude51DdHPUdXVjADwcALRqruBafhDG4TihgfjyxNirMsLMVvfgkX",
  "key17": "4fpS7gcXZXUTmjHXed5n8Rh781rn4qbZvTqg6u263ySDQCdjgqQcc9ex9JzENBTupE8EYh7irFNUiR1TfJg69QjE",
  "key18": "5EbjUVQMd91caAqqVKUPXdWNTrqa4vxnYcewShf44cGkW4ppm9qZKwL76azrZg49dDVmGG4CbUw34hVPqxVG5T6v",
  "key19": "dTNKagVFuiHF8L7CiuYcR6Si3QrZUuxPvTvVtrtJVZKhVHvWQZhSLQsBtjKaE42t7T28E7Pt7E3jCqBcF1YmugT",
  "key20": "53GVtQ4d44KQyFkYwzn5XRea53CeV7GaiQamah2fH3FYx9HQuTk1ynEL5RTXpgiqRffrMFFw2MvTXodkBBoZFqd9",
  "key21": "55t4N9gy126tD4ybYGwiGMQvEXhgGaZHSJCATDCrrzK8sQf7yTKySc5U6PvMxhfTwTfyR7MewFZ3Nm5uBYenU4Eo",
  "key22": "3gfGJYEEN2mWxbGAhR42wCbF7M27STWLZmbwZcMBvBPri8xzhcM7tczw4UJJ8tuBD2q7bzdg5kG9LDKLSRWif9eD",
  "key23": "442fBa6fBdR5XAjQrtzyzaCXNT7Rde3QWJPMa1WbXjm8KJVcmdejQp5q9AEsCyoqxM33hCddBGLsG6zqFWLqLwiT",
  "key24": "3fmNZTMBZCrQe11zhKBeFZMqKcDhev6AxEkeih2132nicWi2wcFyFkazMzTCV1aqKBktDsdnAjqCr1bx8qZibanQ",
  "key25": "4na6uaz4916K7dgxBmoJU72yLxJjo1x8uGdjS9qMRAE3sd7mhkVvuLAADfYQf3ZYRstbNCGYktfkitWPvt9WmxpY",
  "key26": "2Cy4MqfJ6HGWkXkzWqyfp7Fq7cGrZMo5GqjHbLKAzfqmt7ArG3b4pcXS4QJQFxcyTZcuKEnszZHU8mSqX36F9BXK",
  "key27": "3Z6FJ4UmtKGVnLXMXcizWE8h4374WMkmnhc2Qkpek4dScD4rpvRfG9R5pzoBkp91ovGzwPuvhA32gman6rgD44fM",
  "key28": "5fXqNkQwGWv47mHrQAUoEdnKWNaVVvpB31YsuakU5UhAjKAfSFGy1mv8hcZk9QrQZ8S2WY9P7BhZ3sJoyZvgfXFG",
  "key29": "49qMfU4t9o4QEYbTMVn95Xxko1LSxbsdtJZLGhQUvq1VeWj9TqFZHeuhWrH6hUAtSCZ3UASozVHEWY6yFcz4tiRV",
  "key30": "5a18ahzDVsp3NeHZjsx6ew5Bw7d96YsUadAWjrx8GoradttxoX4LZkGV5SE73QuvyV8595jCMH7irpuKHvVJuvMU",
  "key31": "3dsib9wyz6jNW8hPCUa51sb1gcBu29KoaKjQH4mq9MAtAjfXPkgRh7iYygAqZnFNbS6HNDDe3pZLnvjzSamLxBh3"
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
