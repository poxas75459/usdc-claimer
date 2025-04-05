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
    "2QgtNobwhovN2A3A3iZAwiryXpzjaohjmJhxSgKSR57JYFnDoRvdjn4VbFmhWUfmeTWEyAZ22jKbiemsWPYPh4GA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59yz2uYBnRQYjuLVpVMcrMmt9xmL7avU2m6Nfdi8SkyARPE6tgHRpuQKT1QHdnzBu9oZVeSKE8ebAV7LQNhmNXs5",
  "key1": "r5YiTisErYY1b2YRMZd2Aunr4bT7erXigbhxLUoKAqGeg8TG52f44xHyqn5XykqbC5GcY36ySCH71npoCqTgcdX",
  "key2": "2fLm9t4XzduDwsNuzRPFYHVVwFQC4v6AtcCMCj715DCFEfjE9UbTdwpjLDUuhdGef7Y4H73CjjCuzArfz8i4RDyL",
  "key3": "5LyRiWV5Ziq9byeVMW2VtZgeMoJ7gGKnBvmdn6bASpfn9SmrxtRGkfAdrDTcaFrm7AyGxk6Rggnt6mL5MH7tM8n6",
  "key4": "2DQbgUz9wekpFhDRyxn1P9qJzBwNHn7Aizvdinyeosh6Ygm92DMW73PMZwT6EM8jQRKwDfyf2jDot3fSUtkPcjkG",
  "key5": "5LdBbahgVQqei4ubk9pur68ReDdscuoWSNR9QkyFqWkuEG6HHmu85iesJXQf5SQRpv9VCaqp4LFeZFz4xZeLHvMF",
  "key6": "2BFiCPqCeYpWjjS16pv22MPaVtuaQGYZMRwjkLCVQGstfpUFpCbM65SRjHdby4f71UD4UoU4C3FPawWtRQDhDW9f",
  "key7": "2Yrn4AyfiLWwDf8NHiqvNaPCgBmsF1VJpyt8uaryq9rztqsk5Q4LPuURts18GccRTHsFzdyBMcTnecr9di7K8Mp9",
  "key8": "47MY8LxjzjzAnQ7UbRXES8Ptf46fwVKAQduwgv5JogGU5kovYgos4PPhKjWNzA1BjsVv8LdUmZKL2DbJpHuZM3ed",
  "key9": "4kdP5RCAAtTVc3EYzZHbzBUDnREH7vFm3aqsDLJAyJ288WkSuVeciBgvgN5xyGYP39oeUoMCkzmmEmQnWq2qpdRS",
  "key10": "55edXtfQMJh4AR8wdZchEMAZMdXuKcTjxtbtCbgy6yckYgNiNepYi8ioLezdRG76iCEotKWYTAhqmvJgLGTPxCrc",
  "key11": "264MMrcJEfPkAy6x1sVuZC4fvXJMvaTnquQgDbE4Yx6gNB87SP6wuHyf77zez7VKvKxQn8EH8CEFneRnPpPtk9mJ",
  "key12": "3dgCj5cJWxoTncRFPqmqSgcziWFBZdA4RdaNdodLsdjTnhNyZqmnkFVZgo4q7TgCpWVWdFhd6RLJPRPkaa6rHVDH",
  "key13": "588Tn7cqhaJ1TAeCLGv7UzDv2MhZrn8iY9gMw1o2ZSL3quqQWPBEczKUKAeN8ZJkHnTMcsbSb48JtW7oRSUJBoDv",
  "key14": "3X2Fxs4nLaA48yKSwB1YzF2BaScBSqhqT7MH5vaafHqVdcwNCiBJY5sedUAi5f2ZsUGqekSFPpy18R43QJ822bxp",
  "key15": "2w6Qy8VwNKHAf2AYTfcdBED7Rd98fEVGF4NtBJp8rHZZicPaiWZWu3NrQxvK2PN8NjzjBZPkbMsd1CWNQwM32Wgx",
  "key16": "4cqzh22pwrBwpTmcK7MjB9yeevCfnRSasHGZhzL6xTyTv9CCosYetiezCkw1McYyrdkVKmjD6u2Q1cwRRYt6cT23",
  "key17": "3RMkCHBBhgYPqYUwkiD7tXLzy1KbPgoTbA93gMeGsbFiESo4h4FkjYruhLK269Y4VRyZAVNDtQmtBs5hbdyBMiVq",
  "key18": "2h6HjB9S9M72nqropJALansSkfAQ5vgFJjchnnXVR4poASMA3ozmgbPv4uMzaZDhT7R66n6Kr6gWeUa7h7n6MCZ2",
  "key19": "3Vks9u2V1NuQzgQ5nCQHjSLkTDLWYKpfURwjWPMJCZFpV1kquRqGNJitnVd8EfqKXgLY8Q9brbXfD1UWmh8BtHb",
  "key20": "2ZSHspe4P41gxKKtVojsAgjsg36Rm5qJBSghd8JaaLKdGSSczdatu8t9MK8WZ1Gn5js6F1Riemt9txYdJ6wA8JSh",
  "key21": "2rYoaG4cKEWVTydqWLnvH5v9ZPDMS9ifSaXa5CRVcog8Qdxx4nUnXmApTZGcFhskE18eWroQrKKmNgDT6tAz64zM",
  "key22": "4oVAwB9BHqf6VyVawe3dFAym4VpoWkfU3xxZKEyJ86PEmygQsWpwrDQczjCkMc2nExUqgP2yYraLPhkhgw6tE7Y5",
  "key23": "5qSaQcUKfU77WSiZBT8YLitxyWy9F3YS2b3Ypge6s1JafukiL43ieoMDD6r9dsZZ1yLVtimCA4K47gmPqw95TV4e",
  "key24": "4cSinrjnmMVaWc7jgs6gGQ2BVwzkXJEFGcikkJGgCfN44fPn3TGpPzVL4RaGE5UasaGr2MXZrEzjyvFeAZKsYhge",
  "key25": "3Qd95bM9RnUESwWeCXzZ5zJ55B6znfbFNNtbGuc7dEyiHMepJ6Dkb6nZnX2ccCBzi2Yq4pNeXVqEgfDpeffdKh1F",
  "key26": "EdwC6R9ZyGhB6m8Fnpte3qK1VbvhFBB1aggs3YWUMKzuwX2xRkUpWSakVAJiKF9iXWzwEva7N2TC4XkPE7nM1de",
  "key27": "3WSPhAvr4dkRPJCZebdmxqL6J1basYuJ9ZPSfBWRRsz3T5bNKAjCKRyjSrwSZP9P4D3XLtvpw8Vo8wpg5jDuvmAf",
  "key28": "2d6HLbWAfiYPQFM6T7DRpE8YBZtLdBtBsjz8M2RPv6VWhtwBgVVhkbD7Vv33AU9yUEU6jCbEMeYXvF6Q9hWTJBiz",
  "key29": "3QWAC91THn4qoe4KBEFpayTT3CcPn1VWEyKG9oPcc1B6k9vQCBeWHNtZuXfTBPmzxuMy8kAuEKGJnUDjAgCzpnRw",
  "key30": "5e83vS4foT6ukZJpoR7eF8FnvTjJX2AqoZWKyzjQvd2wGhrCxEpYdT2TbH2LWRb9tiUQZRALU86XRyH4o91yEnSC",
  "key31": "2PGCKR9Nu2ZZXPFozFPM7xpq7zKiUu8E3H49LDtmGh8qGG2Q7HSJ5v1G9HJkpJVrabmw6rnUEARCbvbUE9Tj7U9Y",
  "key32": "258ho3PmDx4PEuUqdP4pVKR3gmndmMgM8a5bDPNr8KuWMCXM4smDT8a9HZfm8m5rvrAGKUoUyDRUBfXhygSnvjva",
  "key33": "4G8PNC9GdoaN3KaaBzqXpuZiTvnokhXpoSz8U6gwaLyRq6gkHcFd1aG9Yb664m4xikjhuGY3NF65dm1vhedi6DR2",
  "key34": "5KuuZoAy4zecsWLRjUM2Zwp9FgMxjTJq8rMQqfV2V49EgyaXcosvBADLsbrjT8pCQKsZVfbwU4RRChAprhL4aNiX",
  "key35": "3LCb7cGaUQBGuUHhYoMz3Dq7eA6bNg2RE1aSwUWrcxRBpBPedfb6Qa8FUnpfxSzLs2zT5C68uPQPyc4PPiiXN6EK",
  "key36": "4om4xJMkkFZeo1V1osatdALnWxDUPpVyhQp6vaJS1aE1p64hZUefRD76wDeMSJu8D9gRqFvpgaf1Fs5u6VTqzB9R"
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
