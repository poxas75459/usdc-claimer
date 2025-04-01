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
    "PBj54r7JUkF8tghY4w6tZkcYqfAh8s78GEwHSyXwyLVbUb9sHTfYJcUfh5edZFq5pL8rts6ekA66yAFQHZUDzFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FUkXtQqe9APksuBkcgWYLoCKvrPyA3KH1PMtkKEMqMP5fCgrQqrKDqDa7bzpHiaep8qFpyPQJZcJ8SB4a9pLjZd",
  "key1": "48FQYppbnAAA46UrR2iWzV6wGCyfqei4w8xtXseRyCQquGicfyTAYej1cwvqEWd5Bv9GjuMr81Q65GR4Gyb9Sbvo",
  "key2": "2oZdtvaBkfR21x6gsHR6x6AL1XAAaRET213B1wZ7PArnpiZK9U37hgWEyxgV2FreGRjhTMQs38GaztWusHbUcoPV",
  "key3": "o228MUa78yqnB47kgAKuCvCP6qpqw2eBxoJ3kBcV7abqQJ3psMjrwgSXQNwUBPjYXMcmsv6ZmKtYHoxwQd2L3oK",
  "key4": "2juEqRsr5buHXpktUddgzBQNjLuro6qYw12eULF9UQ7KbimtTpjJ7cvNXrcyrvBRJden3UH3df4JfZR1GLWEmTqD",
  "key5": "58KDaCJkgK5APHsWYizphrU7pSYZQMceSchrEKw4RM2zoPu8V1UC2y1yAMJhRkUUHnkSig2QzhoAfnHEFLgBKWyj",
  "key6": "2TZkbuV8ccqPREqc6sm1Ss7t7rWww765yPH9RvQwYHTjc61iwwkrCxA9F4GHPDGUmE2HDyb1duqbtxBDjpphcraf",
  "key7": "jcYRH3RkKwHxqKMJ1s1MupXEnRgygLtjr15XusxKjBiVDquehorojqu7bEwYGJyDPqLwZJjwNEn5zTfWsaip7xi",
  "key8": "p2q27DwYfTPuyxNPiqqhqEB6SSsBNYpowUVbxr9W7R8CNpKFJ23kuuchH75VPuJCCx2UScmUG9RNWQHPLya6ckj",
  "key9": "2k2ciL32Mvgu6Gxi8Q7cXmk3JkWDtDgHDNVy2tnX191j5jtxYmZ1vxTWVNzEDpks8GMc8f6TmccdshdcMXQJqp6T",
  "key10": "2zLjxRy3WDBTwaaEb4wWYZG6EtS2r9twSy6w9TdvSN4eD4NNV7w8x8TbB4wbKXyCy3tojnBG154YqvZpamnraEMe",
  "key11": "JxWGM6KJy1bRWgY2HJxLyDoHEs7gjYRFQ5Tsuy8jpEJjEVL3EwhGFZNvRm7dgZ5so2mExud9A7GcGLG59UguifA",
  "key12": "5dJ3pmGNAB28ZtgV4jRYsQS8bpSsjhPvRNhe42YZ3m2M2GqRvAD2SMHhZqbL6tocaRbYMrGb9axkAENT3aaVJts4",
  "key13": "XRFVGrjuQDsgcTEhjY8HVub58e5wqcrAd6G29c9Dfv8jww5FVov5xhwPR6FPJhSQtKZyyC5o1TekEtd89uSErR9",
  "key14": "d6TzvKxfN8LUx1KtzA4Qn6vroUbhR31tgGa9rddUKG6ygCCAKVe2ScteAouYfSP9SjZUQ1C8LJ1kUxvSSxBcmYV",
  "key15": "4kpn4FRz8CLzYaoMmmuH6F7ZBmasZzuKwyDXWqj9HuNq94D2DgCUUgkfTY7dFhWCJmdoo6kxd5Q3wbNicYLW9uiH",
  "key16": "38P37PZKe1fZJkrg4L1Q8vcLBQAmofpte2U31srPRdmJmuf9RMCN98Jay1tqjYfaMnPNvpfmxbA1g88caBsKmPY7",
  "key17": "582edecyVKg5HWUepYZpJZ3S3EhWfLRxzy6sSzXaiHwDA9mWrkQDFo387WrxYzB48JyJf7unsXZpa5BaQNEdhKsa",
  "key18": "5PFaVTD9LpoXGAPudyybukTH8CFVBg83gNbNuhHTugebaPWoxKXZ4ZHyDVZUGXdfuDJowGKxk4igyFWQGHgXRc6J",
  "key19": "2GrpZiBHUASLGwNKZdPuSLN2osCJikYqetkxduGxpTRECAUFFxa4HK5XmWUpU9SLJg9Z39nAAQGsrSPYRm5ApPrH",
  "key20": "4KAnhdphQhB4KhnUTi2X9cfL4wTS7EUTH6qFyydZR1Zd2KqchEfUDxw2aoFLs3wSzFDrY7n7LWTkos4CaEuGW5Ah",
  "key21": "3cw1zqVa8FTdUpkiuYmvA8aQ1JerGxE9aCTwBtp3gwDo3mnsBBZrc1NhwrsapRRWqfQXKywsP7xACewAw2FDxAe7",
  "key22": "2at4Nu9x8t9AUM3p37VsEEuy4kLEYYDDYG2hPCe2Xv6AoLKvbxPVQomz2qW2PYcuP9bpT65fFs9X773qzSJQ5PWW",
  "key23": "LdkySKDNHH751n5MhbcjnJehRRdhahznnuJzkiH387TxHszbSFqTG9din2X779YwCaqVuYLzBaQALYTrRbaXbom",
  "key24": "4asAM6RYCk3jVxXTM52f6xwyHfPMCxYrRHdeuDyD28zCWgsP3zwRvjitJGvEUuBaQs8HjoYugTJ7h9VPH5M4wY9Z",
  "key25": "4RUsSLhbKNVcxr4UEtWadSkxZukvWp7ad13pK98gcGM83XynBKWqkGv9zg6s7ChDmkHiMnGK2TXcC3dXb2dZXee4",
  "key26": "4U3qCS5d1FnhDmzj3JKJFHGyjBv2MQjwiMWoKHFPwrWLEZStTFuW4JbCaXSEnLdQAqkJDVLVucnAF9hnopFv8scx",
  "key27": "mkL1FpHkaBoftZdVE7zS9ckFgm3WbDuxuC4SViy8rwPQ3moKhQvMTZ4VVVgz8dbyq2RG9FxkfrZhxNSLtCuzUt1",
  "key28": "6o9foDN3sPqw3oNFEUhNSbgLW1XZDsjTotPfZqW8Rvdm6Hont5Dqz1qWYvSoLxsvY4cViWfZonHDtdXQJFcdZi4",
  "key29": "228az3oFXJrj72YDjE9NKyxtH3NW3z5QzhdA3gZHbbXH3iEEKgGs4nFTG89Xga1YVQ7RzrqNFuPELpm6rXpNo1AT",
  "key30": "5PnijxAn4LdcAR95hJJQ4ipKWaweEhAH3SNWpbcMTXot2zwqsNLSzKrvRW51UyNeS3dz3q8zs3T82SrzcYuhwDZY",
  "key31": "NuhWsTCVYWtGoiTkixFXf2gsXVJ7qLfGG9Coe8HY5Q9yz1jz1XwuGSwjQvzshi9bN8n75hc3PCa74uMCNnJc4kK",
  "key32": "PGXjZSKJr7CdsV2r3FAcTf6yrHw9BNy55JUwGJ5yNLfV4uiTpyr7NywyWCwzjkNKnKVqLHE7kNGCJpchmJRJdFw",
  "key33": "5RwnxFNRBrGi7R6h8SNn8z5vRCRJ1qAm7iRMEtuXu8qpWPUo8eoTHmYEeZ544bx2VebfF5p3o2b4gHGX8trxGgEb",
  "key34": "2mGJJaz2BgjeUWvSmF55HyJYhzF1kz1FkHiBmdqhdxZZcPNS23n1s3LtK9YdN8SbMkeWZ5hqfm6t61zmb8JiJyyp",
  "key35": "5ghht7rE7eUdSLwt5GqYykMdd69zYLFhHqkHWcHYjmzfhm3CtcEx46tSV4uvwxjfUo9drXpxqzArgXbyYeYgAoZR",
  "key36": "5ztvGFPzsQWyjA8gQYhqWQURoHcxaPxMChwbb3P3fhNn78UxRowM4QvfgUuuMbvaY7547L792Jewy2xChidRZvVT"
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
