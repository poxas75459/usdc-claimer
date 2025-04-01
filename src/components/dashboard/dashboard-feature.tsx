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
    "38uCkJ2ccZBDSiDsgNDK8AmaNgb9WUodifMifrzXGBtoUSYaZ2oxpu5eXtUZtbJb5mCu54AKDDR4Nj5mMQemXgSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GrdRDNEn8g4pRZfH12SbhWxbazRJZXVLvh7xoDyPVhaeiC4nHKZzmvVJpvdpV8xaBdSZm315m88RKsRAJeGgvdS",
  "key1": "4rqs8EiHu6KjUTY2gyGYjGuLPwy8oJZDVfVNfpEepanqtQ9pqFuV4zTsxNqVk9v8DC6V6gqV8Au9f9NE2WGEoDCj",
  "key2": "RtHW8S1rFq3eZ9MoExpneMUf6kUhcmoff6fTByxgrbQcD4XGqYTNQXSgpdRXRuAD9JPCEyAdkMyrtiCCx3CSV5z",
  "key3": "4oQjGkAWg5GtHxrsmWgG441VLiXgQV5VPykSdFskyk6LS89kbW7ZepDwYSDFy1nKmmP2pYMQtBKbYAWCdYATviBZ",
  "key4": "2XuMBM2NN934rZSfiw9kDHd8hVfGX53cJG52Ga2FzmogjoRtFV4djiywV5LtsX5vGrX9tkna6GzYPyHfeYNxQNog",
  "key5": "XXxmjd9bB4Ejs82PNHpsqTqjRN7vvkvpyVV4zm9KLRFZ8bpjUZba8nM8uCce9RhpCMGw3BrS4VNybm6zUGcN8wC",
  "key6": "wNhEdv1W5hbdbT9VxFnuR6MAJUAEvLNL5EGp3bh3fU817LmAVSnPSM3e76ppVq2VwLPMba6K65JF3bg8A2KsZ3x",
  "key7": "4qabsjXQ2kSmmB9LvNBjz2SKsxxcJHsaAMHkJPoNJTSjjDTCMyzZLLv1x97TjF1NStwfNMQXVugnhFf8bZe463EE",
  "key8": "4CJr1kDR2h9TgwvhoKE7UoCYvMN3TN7u8X8BJ2Z9J2kq29YeTkNvaMGFE7asNsg19pQC5ncqidVrnWyTWcZ23Uff",
  "key9": "2Tr6J5NcjvSr9VCrWyJZWXoNU5h29Jro6tZmmyib8L2uephK7FyCuKbTyUDTvqm6NkKV6MLpocjfJ8Ai42kT2TBU",
  "key10": "2NNFRsf83epgf4NxiYPErEPWasXTX2J5v7eUpQLHMsiBm9ZZMHy5fjTpb6ytHC1z5XvQvKSooudHRFSwtiBsCszG",
  "key11": "4i3JmJLHKwLwPhtGC8VoNRsfxyneJAfczj3mCv5pWcQCAEWfPUPHFr34pc9qKF4cqQbC5aEvE3E2RmaAJ2AcWX6B",
  "key12": "4fXqGRNgrvigHwNAHVBnrrFVgVdoXDFztsaShnZJh3sUVrX92AZhcf6kA97AL9ssf1bPsR9Hu9op5vz7vAeiMsEr",
  "key13": "65P9rt3CAFfvZbbCg6cT1m4c8wtm1FKAqctKTj5xNvex2kmeUe7n74vxwVgNKSm9LwSwcHKtapCkmZofAUhAX2nC",
  "key14": "5nTY5uAtxENfbcyy3tKZe8STnaqnH72ES9i27QuwBgwWJTtnpdzQurZ6r5FKjzcJRbw91RJ2oBJkHmHmyD626Zb",
  "key15": "5cJmbuqd2uYuFLDPVbeEGAy8crRt5bL8eeme8n5JRyyuXzr95VFsXAGZrYqtaaqeyxGqTVAikUr3NMEmfUDpWrkQ",
  "key16": "2rgt9aD6poqGxR62pbDvJE1sWCUtrtcZcBkPh9o19cfVgvWSAFpdyT1HnNz4ykFrKWESmSsfA8wBaDTXU4SXS23H",
  "key17": "3oD7YtBj9HAm6owD7rvYY8UAtAw9M3kU3eUDUPjSPhoqyq8hyhYNN5yL6Roiihj2B6teb7UjTrhCyEZaWy7n6jec",
  "key18": "3WWeaZ41ZNRnGFoiHMZFGSWmkXMhugpTYPLWy8wEGnrppjq39pZek4PKEqmrokCD5icUbpaGQ1caWuYfXbEEnpNV",
  "key19": "5tNv8TmRCQjpWE694cxEpa7AHKXCDWpp8y3Qg2K6HEDmVjwfFFVzJswJJCNKc2HJRDskPkfVDuhYRfwEDFbW7b9a",
  "key20": "614387iuueeDNJhvWXHLZaoA1SSTuxtep7o7WVZjA5b9xyjYQ3XWNhZmsnCr9vjCXP3PZYuFJWXKqZj5YpZqcGXm",
  "key21": "4Kgzi1hLUrbcWcYoqCgth5ejAudWb1gsJCkS2ozbtb4nTFsitz3UZE93vw7QUS2rYGuv5hMCmxK3RHaxd1gEzSb8",
  "key22": "4vaQgzKohr9YkDYtU3auzkFScx5wvW6r2ojfa4JJjdvtPkE3ixrg7YsaN1S5tV1ap37JZPnN7MipnEWEqbGXg6qW",
  "key23": "2DeFWQ4PDW68vYPHGeY6io1NUifFDqBvqMK2qDJ8agHPq3LJRK3vjFm894EBvoQeJw7FZEDpbXrGmQ9JDn8AxB1N",
  "key24": "edT5c917UPAm7LDG8C1637c6N1w5HEaorwhZDXJCgE89tAnPKRHSifyM88TpunX7CcCZwwhahKGxSqRamheBsyV"
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
