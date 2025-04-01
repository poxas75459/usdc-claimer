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
    "2RYyR17SHSjdBgFgqQinfn9mezvF4dJqR5W6BJqon93KxebBTewvZnqGNrdBevHqvK54L6fm8fmtrFn5WFJpqCnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nLXqhXMoeiRS6RUtXaHy4JtQmChZzWnpY4GZ76x3yDpgpabJAcGBEHgHJxoRXb77NJDFUvLWVWhXfmVJgCyqb7j",
  "key1": "4DWCTeXimKDapV59RShUN94UajztN7Ns1gJ8dpDEJbwrbUxNKVyAUYMPaQqca333YqTSbaQ3oqzxFgeTuamn6bzY",
  "key2": "59oqSjDgpVGkXk3GyFHnpnnPFQUpGEUz26QPXdKJNmikTRDroDphZgPH15fHHXwzpGAptm5bTHwZNwc5xNJNCD8f",
  "key3": "5t3MKgvzrFMR4YHRyTmKng2TRiYsyqCA1tgFfak3QYqwF5WsYqPM9x2UzgVGg7EN1JdicgW4UU9mkct3uZeJ5rBW",
  "key4": "iMRSBAW633NTyLeJay6Bzh4B2GF6AuDZt8SbHorrQqKdBwKk9rn3AF5o5qtXaskBh9n9JcDUVHHAmzAo8W8Smoc",
  "key5": "2oNUewvQ7yfedY6eXw6Q4r2FcyfDREFGcFaLjhRBobNqnhiES7mbgDkGJD7QT1HY5aE7bSAFwgnZ6y9brFbj1grY",
  "key6": "3odFQB6cn4AHW63Wxk8v9Uy7qxSi8J7G4RSgRth3RmY3EoiQytoCHyQUbV1FU2Y8WGNHVLBXv8HFf7vD4hqNEMxj",
  "key7": "2aRRwKbNxH7PmAjAggqp7tsUpU64U3vUZt11PMM5MTdJ264LVdLtY7wpfbJS6jRtt2nzSmMUDqiu8RrCdtdQv6Xm",
  "key8": "3GArerESjsohCcsSCpxNaBt3r2ZZ3Cm5tRRDSsYubZD1Vg4Ztp5i8Sf2qds3RmsgYA9TVayRmmbDVgW62vt4s6yb",
  "key9": "XKUPo5GDbHZiQsKLkevmP5Neb2B6kfGcXfaU5hJxPTWGCcoPEoXoFMyScokcTyih16D3T1Hq1CmbQpULJrZvX8K",
  "key10": "qGru22vqeRtkCptQ6PRmVuQRaCeoTxH8YKBgLGfaBP7wz2ftaiGLzJ4WGqsCPjJ9MwXXweEV5kUsjZmtdmnEuWW",
  "key11": "2EPDCoJN6bPhW4b8V3tkhbVYneGtovGtPEtJ4kH9UdxWvTkRqMQurx7fNJNNzevpUjUXJkLKMQvgJaKf68voczpk",
  "key12": "5AnCHtnaKnBNgvSCL5SnqEGK7wWoyyXKSkmMVgyKVxaBa77hGEuojQtkAxynbP2MWxqJqzHJ2Yk5XYwoL44QWSRN",
  "key13": "2bqBNL3tVXuhYmjQKrTgvECfhefpWf5Cm6dR6sAjBAfDz7GDyBGRniqcBkkAA1ifRqQQt7K6i4qkCsBKju1Yrbmb",
  "key14": "JWjeDr88d8DK3DL3CRLoQfGZKc6gMEvSuB35UVCuHGxKcJHAZvxmnnLZrYXrS4wA18EGasNfbyhKNx3Jk2NFmzs",
  "key15": "5S7eJaYcabFjygjnwZyWxXSx19xhMLTbi5s3VS9iKBe1Ptc88Ka6fU2Bj7A7HPyNARMYe5jee8QJZoo2U6Hp69Qq",
  "key16": "2Mmp78grqwXHisjFRnE9qNkBteU4X86FY9pzAhPtjikjhDCyTxABfng5qNx1skurWz93aS78SwC8XTEZj8vmQNtd",
  "key17": "eafYxWJxwzsoPeojt7Gb9QJQn1xiLLzYjq8x8hWU7DtKXVMVGt3YBmzyXGNnJa3FKxaGuq9iSMC7ZnwT1BGWDWD",
  "key18": "2kJFP6SBYffbrQYF6xSX1gsmGXvec8bfgdTmRnCk3YNUHTWEPWn5X9kgyFg88MjcnJLSnSuS6yvKYebEkmjhU1vi",
  "key19": "46P8LKXKHEbL2FArHYFx49uxqB4CxWrbMYGZ7H84LMPPUXXnxxJczwatBmxdjZtUdk9PTkKXwVHNtoy5Grcj9mzK",
  "key20": "apM7SZRGnRLZvTtPpKCMvQhyDyKzMhaKSrTUYJd75JvVQiXnAzzaeR8d5hE6a2VbjGk8HHBEFJ32i98Qq7qBxqw",
  "key21": "3UdSF8M9S8Edf6NmvQVRGwtWVxcXf3zt5B5Zja9Zt9DeuJKRPT8rxyzjPsfTHdU7XiPz8JBS3GUxbkYRJm1iu6Mh",
  "key22": "4Wzar6zv334QcCXZSZXGcB6F85ViidahSz8jzGMFHK7HCuj3MxpT1jTcjg1jTXeJV3ZDuCKj53qjnwWjJYETV3q8",
  "key23": "ms163bCEbfVTpD82RPueRHUn1XufWMZ8F2SteuZz4HFqDdvFT3ztzaQonf3ZBCnwatcPF62KAagEKsHcYcE2ogf",
  "key24": "5bjdFrzSnUMxp6X7FgcEfZ1uPnD6BnjF2m91K4EBsmxLAbiPixEvrf24ZiGTX6s9cPXiA6WZpPL4aPFWo7uP8LSQ",
  "key25": "4RUdvcFsuGLFRuRpqiBT2TtmEqZVj9yNKXq7JPtLaZY5SkWs4KPSbvrQSBXhXJUeaBA8duaDnJ2jg2YAdPiiVdCr",
  "key26": "65y9iDaTtoyxHcvVQ9LwGY8FMB5NvKhD9RQvikgyhKosZ3eQv5ZT1z8WgBN4S1z2UhmR6F3pxznzA3vfmm5oPskE",
  "key27": "5KdYx6A8Q4UAnzvdYGkzKQQAuiK7GqSzzcWAei1C68KH2PHNyNwS24RyU88KJDnfNkAaKdD6pYwvSDcEwTD9hthr",
  "key28": "E6hUaSPqYEUSPzDDtsWvwN8XaKZcyMCHNHpBdG6hkatCRdyohtqfcAWXgE833NMoJzkmFBAKgkAa7gcaZ8CoLBE",
  "key29": "4L4iLwCohMRDfcZCANM375h21NDTdXLbaVjkUWaqJxKaRnBWMgmgsX9bLkNDSLE6G5MRH1SLbkj6GmaUzYdPxXZU",
  "key30": "2uzBHZGuS8mkh9TjrWsxTPwNJ5GUJi34st43pyb51pqu1pxjeU3E4XFr1B1gp3iUdgjpAzm3Xw86uyRtnBZthi4v",
  "key31": "3o8Xs6LvFgBcNtPJttWVrgjAYdjjwdzz6FRYQPKUsRtRPW3e2Lk4f7v2EyYxLjxX3spXhXJdsMwEPwyRzmyBivGs"
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
