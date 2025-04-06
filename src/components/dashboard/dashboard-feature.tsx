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
    "21hrx9KirX4pW6CbNUsUUuDa463717bP8Ee9oQEsyFYcZUr4HLLJ4REYZXbQLWfF1HL4HfvKHj2crn6vDmUofnZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zws259UvvP8fzrCfW3SGgvbvH8mbUMmJpTvQkpF3d9AKKNmNdtF4Guj8CPVCZQiLk8cGV9ARG6B1AquXyyUFN4e",
  "key1": "3n32n1CY2EruS7rpaB6JZD3efZV4A5UWpcMLV4ct6vz5DMtS8rbtGf48UnmSbJ2rQvopmurgcJYWhxguEv1iBLH5",
  "key2": "3umSTMZr6wQbBPxEmdbRPcnySLAwB9rtSTVPNYqweqBSbdmFsCCGY94PB9r5PjSrX2U48TxFUX7dbvsv2bT9ZvkL",
  "key3": "4QyVrJFURSsCQYir7tBHyhn85QWh5HKLee2oVCFEUuFG4rNN1sjQS9qg78ZBwFab9H93fsWph3dQgFSaHNXsgUs8",
  "key4": "5RdiBqzEaqRCmbyEAHkjHmusCX42oZHGUAUBW9HNGA7yFMcDtx7psmmNNCoBtY7Zq7TEu7kx1QgcTdEicHfmmyYU",
  "key5": "5uy1kEz2t56zSPqx89z2qHzWsp6Fv2shKJj12UqPqEUivMm3JXm476xMcp9fspdAFMUESzsmatoUg7mcj5iox7kH",
  "key6": "3PTf3oWmgqZpuM3VVepGkXf7Ng5R7baYbRTRy6oCF4FDDphV6zb2PwvT2jRVBzvT15fdLrrsPu8ezzcirDk5mTz8",
  "key7": "5BwukKn1eyrjQSkowniVUy86QN8Kh27jWk7cb5zNwrVHr2j83kwekspJfNzp8BantUQZZN6DhKRY4CbbNXMiqtTT",
  "key8": "5Y1XGF5xc4a3S7YXigqcuXYyVPCa2CDqbAA2dr767sQ54AQnFzrLmTz1nZZR1XDhVBiRJBsbDQ4otBeBA4Kg5uxH",
  "key9": "5m2GqiWRCMa98XiGQ7ErHQ1Wf7h94K2UvxEaxAVbr2RAW4nBMBByoRSrj6J3wSFqnu7rdp3hvmwHmWJ4hybc2Cim",
  "key10": "55RvQ9fRi1vC9KG4R6kAsY3w2D6BXRFqts1QWitisjvzmh78dWLYrMqSgqDZL1AaqGXStMSGd3xcqDG152HgzDcu",
  "key11": "2W6tFrG7dQsYkZnh3k7GAoESget29ZpYUtEGPB4gLCzABx97VBc4FUSJymYzkd265Bsx81XxHxdnvJ6q2umXCiyK",
  "key12": "2TZcsNnpiWVhL87pbeDXdSrUicRe1jeK8hCwqBHrwgvnaKVRuVuEVgGYGMhF7n1hGmZBU56ssoH4GqwzSjtVvKe8",
  "key13": "Ud89WWNNmiM1Q7N3cmrtwQD1UopjR5Ne6oPbKE6KLvBsyJUdrLCS3MLEQnXrT83WE3CtuB89z2gnvwLULTwnAAj",
  "key14": "2oFYET4DhnqhowBdbRP8eftvaEa3qpomyDNquEqV8fN1yhyuDWte28cHsrusDfoGEZAVE9ZD5AzQUidicu6VffA1",
  "key15": "yjqdDTjf18hovhPNHfmRc38H6Bg1QfKSgjetFa6uaxZTUgVW9SfCzsF1dfF9USWhW52dpGaQjxz4NdAPUQ3cCC1",
  "key16": "2zY8TzQRPuMJSptyxn2EEbNfCe7qXGXKKx79WBu1t3zuAk2sEnh27XTv7zFMimGUM4bvGdbW6nybfwwDvH1ULrJA",
  "key17": "EGx62UT8TaFqvyiW4H3hUNPmRorZcrPvUHjQtFRcLQQRohux9aXHkAGdUKfvfz5594vsyoiLxH9pJhEMWWj5T4r",
  "key18": "2rVyzrjngPj98i5UWvxsmfM6P986MT1K65xsy97ZkRcBsPfxKcTP71UNZRHNUndsTzNasjGgec9VLLt2Bw8qD1Gx",
  "key19": "4CV4z6csubUS4gUSZeaQQMVHj9s8MV2mYNTpRQqFzgHQiB2xjBGj5QW43APJvVBwLji8HUM9ywS4VtL3BVHqQ1D8",
  "key20": "2qzdQ2n1ur1F37KqhFexpW45EcfHSYUFmYxMGz8kv4e1LqM5LzJvTfoc8Q8yCJZXYWD7boyTHVxvWgQ9C9ef7HSL",
  "key21": "4yX4RkBu44sNXGWwpj1bsuWuLYCco81qwBqYUsj17YoFr8MUM8FAbU6eniegcYEcx2J2EFvUAZmrBwHJQKVSRGVk",
  "key22": "3NoczpFkZRkLaT1oQD5L6WLVn7pC4r7jy4eaRCnnWz1RQe7AREnh4aytB5VgtZwjPmxToS1nSHjyza4yPLFqSfLL",
  "key23": "2aTS8EyYwePgQmM3otrC1cRZiacGNcPNhrmSufybyYt4BV2zLoqfuobqH9xQMEBbi4Cu14xcWSbAoPuzG9n7gUMc",
  "key24": "3xye7XBLqvNExXtkJwQDbsw3Edtg5fB297NQvxpguin8saGinL5XqX8hA4GJiGF7scDRjcTSbAgoAWkaDW2yoAww",
  "key25": "ncU77C2j3JZo7g2GvM2VPjTZytLa5uhhAfPmeUbeLJNa6uLBwBHeFR768AxMMGaoHxDyzi3E6uku5xC1QsKNwFT",
  "key26": "5YwuFBUUrNV3oSUwfjLnhkikX7EAyHKVQEzLR4rjWjzQCqVDVKaVbryAw8jDZubo2FnsWM4VVbLnymh4LtWVTRgN",
  "key27": "3eZ66konMD1WcQgVyVCa9asCV8zgz8r8QdZeaYGbAkobJDGbqybArXtom3JXgTfYefMT3HaaDN7bHJLUbCkGusUZ",
  "key28": "2psLdoxheUCC1KYN5ecQQxXrv43t4XRAESYVhyK3P9AXWrfiRGB6KTAsaedYamJAMqAeKDRhYLYqs1L8qVay3mz6",
  "key29": "36FVWCUyYrohUpJCiWTtiW9bgTXr3qdiamBpUMJR7Z9gBdigCN65GE4b1zNv5Fwtos7Ejf8b14fc1JqJ8RMVyzUg",
  "key30": "5vJwQwZQkRE4BiUbX7k12deF2xPy4QQWegri3vXgDxsLKVmaAraJJUnf1KmtBkPuF51uEioSyKGWX8itwG3vbv7H",
  "key31": "3qPZuHorsukPLELvbDUd3fVXjWJWuMAkp9T7JTKAXw7yNGJG1UGKc7YacBHqcXbLk5bVQKKfkLjGyojQEtxoV21n",
  "key32": "3AkVRz2QqGesAEbidj1gAdPxDyfBQ3GA485reuM61QacBiLkxN8KJtH2woiexVeviR7gKTLG2E5cGgvRhSW2LYff",
  "key33": "2ZQj66o8mHj9e7a7A6JZDsGEUoqntjPSbTWuwNSQWSQhNX4LunLg1ka6DJV1Lgkqs3CV8vTSWYkrBhQx9WmDaKXu",
  "key34": "4mUYbPgsNU1Ra111JEzN7H6f8HdJ4Ehvg2dcyQAUc2Mc9FaEc2XPU4aeSPaNkkfQea7NoJp62nruNjsoXZDjPaK2"
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
