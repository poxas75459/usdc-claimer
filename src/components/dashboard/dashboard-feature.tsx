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
    "HhYkh1qEMcZonRQRVHQbPXzqSSn8Nnk79n7bJQHW8Sg7QNv39mdt9yVKcnssQd6SuoNF3SQAYuhbUQ4EemZm6zS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G5UZzArwgjmptuLeBqpbCsgY4K1qc5vUXkQHQH6qLLTfgupcXjoedyf8sZWQjcxVmgf6Ax4iFvG4p7ebFqRs3Rb",
  "key1": "d9U5DLYbagRdVBvKMB3cHqNF8aEDEYxU9vPBwTjsyNGGspvgxgWTwVbiumHBdEa55dg7kLuYW6zLSiPfFKdt24j",
  "key2": "48Nvv2a3bpMGQqrhpa2qXsr3m6CtyQ4tXtF12YRv2z2ARmJceLscQHNQwz8ZTvEEYhgJZowfncCcXmxFJEdh2QpA",
  "key3": "62n7D5zzNcgG3KVzcuTWcERVzN16yj2wTS5niWaKrA14aoAqK25nXSXhBeQUQnB1Qa9451N21vv8vyeFTUavoRP3",
  "key4": "3Fg1Z2abC5SxFXktuqKAdzB5jb6WT12A6UXiZCR2Wzo6mNqTAHZtA57qpreRSm7VS2EUE2LJsLT8oNByzM8zPcBs",
  "key5": "DDFJWvEASPNUERCRTNvBdSXHxTDzKZuDuUQqD1WLtQ1UJLvUpc2Rzu6vKZf9Gdwsn6hvRrPy78r7Cppjn1v2sCT",
  "key6": "4j7aoK6DXgegJBk4bNAaCTjp33hpAQGQk2NkuWEEhAgtWRnUEA9knLY9vWzyQAurEnwss4AAxYwYeWPdT9SkBibT",
  "key7": "zwfcgFFK2QTXyy58dTWajsbM9hxtzzUWh32yAf1ioGKmmCoQVnqQWNkFJzUeyPiAQK2cKtdjSzR1tJ2zpQvNSAP",
  "key8": "41nq5cLy2ShUyMNjCWSpB9zDueokGC1q4DHbpfXUAfwFLBTYYES8uF8bMuiTtTZ17r2bpfXZCzAXUmo65DmY2D2o",
  "key9": "4VPfRXaXQZmXti7nCbXt56uYvSVfUMDCansRQNtPghZuqTJh2GBCptCQZkLuhaDsHafZPXA8inoHqKe7dQ1493Ud",
  "key10": "5a5YYGTSa8dRgy4JVnjis4RFRo47rsNANAivHuN1q8VopEaspi3SuVXaFNnRjaYtuYjUQExKZKZjMRpY5NyH4pSy",
  "key11": "3hVanp2azY9PUjrK6TVrfNoW9rfDtLmDv7fFeRNWvuHrmf5qxRTRjEMhfWHrG35uGrqARFDu9Pv1A6FcBgF8tr9W",
  "key12": "dSrreinKccUMssWNkcRxDWyEUvj44Jx5J3zwdkCGUMu8DVHiaRefgbNsQEpobLtZZFBh2sSgG665hbyQR8L2yJz",
  "key13": "2HZ1n7FBrrpnK6DkUnUK8eF4NQCCEHfBMuVyfhQiTE33rDQ4oAi89aMrvFVd8xYTPBtR4YcE7LJtefqQFVxLsa5j",
  "key14": "42PD9Dg2vFY7BUvzvr4q2PQ9yRqsNeFtgB9J8Ryg1zD1TqqvaRCW6GXgFRTy2GfKGTFV5kLMTEbHKSa7HSEKB6DS",
  "key15": "4ejmNWub4A5LKAp8fL4J41u3515BQuHqHgGpxL6CTH7AYfvWzAo6MsmPa3ocUraxn8Cgg5C894L73kZqTXguhe1w",
  "key16": "48FJYcc1h9ZSYN2XgckBvvx1Aewfq5CuiUBoemGuDzPMuR6tp4g95JnonpJpxjf9xkVAXPXNJVurBsPEF6fcBmg",
  "key17": "221rfSzdirJc4HhJvCcqdR7LVcgG8xyKbStGua6GE1rneiBcRMtST87CNW81qSEaC2PMR5AZMtDrXzCYskSjaG2Z",
  "key18": "4LKmRbYcvwHp3JxqwfP4QXT9ovCG6ruK9FJCwUspGnXveDh2GxV9sG32YT2LJGVoEr8rvQQWWJ9Q9v2t7zFXmkkS",
  "key19": "21zrTVR4b6VR3htpfzNEsNoJGsD3Rpjtr6pp9vcmhy9RNn6qgQshcKrKgUXzEUuB1mh5562ax6itaL6HS5cq5Q97",
  "key20": "4Cpo21RbqvdkqcRDkHkpLZvufa2upCBTSjUzRkLMkcsk2AS7mCHNNxb9QmJDYXUThNmL3CRz9rALtZ32EHCSFcNz",
  "key21": "4gEYDnWQQEakZ8P3PZbVvAQ5seLXF1qc6S4bvaXJXH3HoD17ie8GqVN1VWquq7p75BNEbJQM72JxHqpNcTJTzaCz",
  "key22": "2QLZyEmFyewcEPVo2HHgVz1JmuACvpZPwbDWGbJU1zrjubvhhkY3w6yFe4XenGkungG8nA7RVvwoc4joGjp4WVPb",
  "key23": "2DHQ3jV9QfEJGvdnRLrbG9LhtdLnWcJx6cW6aJNbt7WTXYWnEiny1nNWZXzsEJTJcUNqST4tGRtawD8XKuPFN68V",
  "key24": "4VhZwF8gGx4fj3CGTmZWPPfJPgevBFCmAwhnLhtGtknMdAXT9fDAPksCKtfQ7s1AhreuXBoxvFyQnq76jihEUdwr",
  "key25": "5kPH2bVRyVK3NyZUfbSwM3nnymsX6UeEApuRxhU3erMVSqghwkxAQuXHQiSixRPFuoD3Ufn45XCFSbfPDtyaypuZ",
  "key26": "5bRTq5xRhMLhYyZX4t57espATmaJZ4JgZKr2c4ooH9ExnPpH5xFQ8VK51EAJzn23aaifTxrk5o5zVeKEjt2fgjak",
  "key27": "4rBAY8m8xXw29VkbgNbj3H7aFVzLUrsSxtvhnHwnf7stNe5wdWgmWofvCXioufJJpn71FSndzTe9DhkHsABNkTtp",
  "key28": "515uLZBf5C9RNXZct1mrXjndd1hsCiqLm8QUDR5pYJtvt1aK6ZcMRwhGsQCB8ABUY6GkJm7DNnbdh9xFAs6HNj8",
  "key29": "98LdLbHkzEQRxahjYBMtTZqx7p5bK9EXx5UuSpigacDgxBdovuyRGWJjN4X1WkvdV4pDdrPW9twfu1yRZASbrNP",
  "key30": "5fxdhLT8KDCSnnYdcPSKLCUEXgD5avDtgaMVjVhnYWfkxX59VqVj8VSsa7kBHJus2PSNPy2WAgDq63AfCx1bVycD",
  "key31": "2vHz82u6SeBooyhPqB6jmuDQibwBmjA1Gp5M6gBPGKHdSABcBPGuwG42tie2Dq9v6Y5w8i8rQ8v79XfERhi6QF1Z",
  "key32": "5Zqgw1Fk4J17CjbU7vxTkuVRyW3kMqAob2EdW1bJPCn7REWEVe4DZcK3nNYhhkqNG6MmYE7xtF8Kd1GtmNhRbncr",
  "key33": "3NDaqYGzJB2TDT5CPkHMvxaiFD4vPFzVXQgxigtPvDtaPErk9mLCSxrRGEtwLJ7TxJCubm2sxtkhtmDHNAsARLwh",
  "key34": "5fa3kHvK1dK8UWnEqsix4QR7c1Resd21kVqRJRwVhKaRmeUyMtiggkDYg9HnduwfV4S4txyWwK2E6mzPNHsUT1xd",
  "key35": "2ZF8ApSGHQQoujv2gpR5BQGGsPgaxRt4X8Q8C4DjBcDR6QvGeJNwzE1XvCcFAyoxiCfu9KcfBBqAPFC5UR2Zfgux"
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
