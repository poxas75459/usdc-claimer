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
    "3Xbv61u7iTcaPdg7vVzC69RCWCzXgS8YpSX1LAxkYExGUaeaAxZsH68qMnGyEXcwr6VywqqRaiSYNffFAs5fyN3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43hcbL77KfzxYZZ7xiGkL3zidNNYuV8r2oMvnAj8Nmo9Y9MRF4fip1ruJH7rp9P4Mi537QR3cipUgcxeXDSdzSkc",
  "key1": "2kpNtrjoGvR6fxTowEGpP4VR316TMoay6HipNJFQHmdF3hd4ARRJFnKjwrDdJauRj51aZJezNxd9ZXBesbzHjBQG",
  "key2": "9GnDUCy4fL5z3hy5iwNDdaqutyDpA4QSp9Tzp1tn8iAPWfbdjcPf49DcNgyPTfuHkKyuyCAe7oZZNVdKnBxCVk3",
  "key3": "3jV747SpYxjyU2mep54Zvy6pPsWHgieoM2LK7fWM1ff7CFZipDiWH2CqEMG9FaTDuzmrXfRbzZf4YU5RmgMtwHoG",
  "key4": "4qT2SXHRJ2kJXCTVW5bYfWJ2QYuFatZmPoyD5J4WdgtsTPuCMTvyM1wKbU15QYG814vZiZdwHZtCRBJjeUk9ZGjK",
  "key5": "2KSVdbhiypTLiL6Z3h66n1HazAFJECsVaviERTBNfm94USdQYZEkMcmvvAHtCPNvEe2QvZ1xVyCCmxaZ7h3yWXrn",
  "key6": "4KewShPRcGAt2ktc1xWPMLwEDb8zLdZGPSuNzFYvRqKJ4VwQyScbsN8rtQHnZP9zsK8tpT6MLtNJ9EwG7gVLNak5",
  "key7": "3GrNtgDqCcooes3XBz9o2ZfHFkn8xhviUEgbdQ5b4X6QLGjvPbcwJwA3QZ1oTuDnVsgSBpW832w3iLtxoem41qjt",
  "key8": "By6zTBEpdQBKEj6HfjwZXXq8uR2ZERZgibE1M5Nw2HvoxiSHGCwTPT4QhyvoKzBh9BwwaWv2kkYNCJLstYbmyMy",
  "key9": "SZVqWBsT7MRbBhhhS8zY6M3JGdEk5b9kbntQrqdrDaS4bexr6XSY1ShQXrt4PawKcWqcAics3MmrKHkku7JRrpD",
  "key10": "3a7t5XLcsPrqCZbcZ1SJAx8PzdyZVPrTorPRjgsFiqcyepKfYMSQkXVMQpTxPCa4DhBXBKTVCawNReN6aN9xaU8p",
  "key11": "36Df44BQUFXvM97NAw1XvHVykwt6qxtZbJ2mmazAsecEz1ctz4gkuMUDABMTDRcdaMdGWFvnUCzKs5aAaManPqk5",
  "key12": "2A1Wij84RGjESp6iHJUpaXcz6t7KCKSuvfvHs8XpeD5ST6JPDUMmm8CqFRtWVuSx7LtsrhF1m56usXa9C1RW3WmK",
  "key13": "3L77Ss6C6QZR7FhQNBeCNZKSx3VJQFgPcL5CZJYGyiRwUwx5o8K9sZ5qJSdre5qArgXjuqohAVBjTDErdKU5jVcG",
  "key14": "5aZvVKhRtYCapREGeFQ1D2zvQnkur97puDz722gcaVGbhTjmjXv2jy89ZHdDCmtmYrvZDSHX8knQ4pb8baC6AwQv",
  "key15": "K2BhaYFaPWZgrf1Cx4WCgPNAdHJFyQaChwec7MovgANiLZhsN95UQeAv73CGJfs7VJBqeHuR9tFz6B6t1t3RHpE",
  "key16": "4XhZ1Zmik8y8MF3MREiyXPXZdhEMebx3g7VrNNfSJiXDSbRQhZyX4XNme5Covcn1DHaXki7KhA8mHodYfMZ9eVir",
  "key17": "43bzLD9qg1hte5SFyC1xKLxcqbgQnRdNXatdaYD3dr8EM5kd7TWj29FsV7oU2Vr2rCKvFB1aF1DRj6ZdpvVTNzCT",
  "key18": "56mJFarDGZ8BzE1qBuDNAFWhtPZRswzRzLLj5bxxqocjzPVfLWap8ung29NRuiqxhEW5m6bQzRqzSrgY743jUnAa",
  "key19": "5FYikgXMtTaBcqGcUsL8WLPUyBkbJkRA6QV4Vf1Kx1mSs1VyQFYHSxbk4QkVC6arWFMLoZnPAHFB6ixpJjv6UaQF",
  "key20": "5WSLxxBkr5tNmoZi6NY31Ye9czyv7FNH8sFsNzHgsW8GAXWWe5FKKWWc83ye4UJdDhaUPfB6VS95TXUoGmWeNRSf",
  "key21": "2cFsZVV7nviJoQhyzqa7C78s1ED9vsZefFmyYBeL7GGf3UeC5Gvu63To9gvPh6315ssbLsnGzsP9ZWGu6Ckc5foP",
  "key22": "U6R3dG1pJRHr5ygRd1QKnjLhgtHXTR42byoTEGgkdWTJpDKkFcWQw5eDejgcC3dkaHY61F3eUgQpsyJTQEvTKtz",
  "key23": "63NVod3rDdUY2EgBfFzMJ5yLMPJywzZJyHZwusNSkUb7LtV47nb2jb26VbMGrSZL1mv5TE6QXYVihoFfbTbs9ENv",
  "key24": "2kfXBjr32yH6ALVmyMbQof9mt7ZvjVxe1ZPi9Hx12JGEcrSw1j1fcZEJKH7HUEJV4PeobH2Bd4h13axu5u2vcgUH",
  "key25": "51HBEZ5gZnbbofu4xqQfdegqMDxkee4R1SbQBjk5HMowfgQVm5Y4Qwpz8BUrEBwx6hQzs11MUnFHHDPYA3zzR9EE",
  "key26": "31Myt67tCAo9CbGRN71nN5MjonHxVyK6XdnQWWJhoaUJYGXucoVqaZ8MMfWQAoUuQ1x7L3HDptLtZsTQXPprUzii",
  "key27": "5NxrLFQ66NWR5kVNSKAYwMmPNxTcYsi5RF4JeqBZAbiC97yQN53N1T8imS9tXjyHCTwJ6gqagdZdZottrvjD13mE",
  "key28": "2ycbuuJmWb6NUAPZPaagN8RS48QLJZSmk2fBGKHNScNG1tg6s9AMNMGLSm1NqW5o5TT1cCf2gvDu59znyG69YVWG",
  "key29": "63yrGCHaaWHV9f2unB7nm9SBorxhCTCQuQxkUMTz3gjX1fWE8XuSbTvK8N63AthzdLXZR6JspAbeBPNo9G9ep8AU",
  "key30": "47vTeFBBp2xdENVw41o36dL2ye2W2KrapR7Fa64JqTeyZBTV4einj6Fd5XvbKs1MLpwhzJAGhQ8WcuyHrPa9VYFy",
  "key31": "2wgJAtj3kngDKVFYjnHEPg4e1HJCfCtwTBCtUWsc7hiQVdQ9Xa7SZhU4BRfFPUsrD1T9geBf1M9ChWCzHg8qo67L",
  "key32": "W2Zt8X5azdJUHW44Fnm4kePLC8BGnUydVmK8QEsFDhcq93adHACaLpBRCAJmB2atLtF3ZnQVQN2tW7HX3YRBEzG",
  "key33": "3qhTZVptA9YLtwU9wyiu8JmXNeQgxhgaSWjJkwXMVjYjfeNEuwok13owv7jvQxa2vM2UjqH1EmLAPZihYS9aYMRo",
  "key34": "5w5GRXHQ78vgA7ESYHSTK2SpTPz8hZSmpKNJbx3V94vPfEXWYvPe9JxsESxfg8f1X855GHZWyfT4fTZaLs4k5ApS",
  "key35": "ixrJGYHSYqsHFvyyn7XN91tYcHm8eSDW2rnX9mDmztssFDdkGdsuMxGAdb4BZUUQg1eu3BeTtkHEuYh5imS6awW",
  "key36": "2sHDYvEXcCBYgagR8hbWHt9L9cU322uwgQuEErij1QdrbWnaMhCQqPKMZQ5X1mBLn5T7rRxsosAKrPMFZKU6S7Eh",
  "key37": "beEph3RLmvJytQroHzCJ6mWmtm7EiBMw1sMnWgQg3ckiA1n5MhQaRub9px16GkiGNK5bfBKLu8ANVPYk5S4K5it"
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
