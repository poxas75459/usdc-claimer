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
    "2DPtDZjYYDvKYH5Ro3odFg1hKLo8Jt8YNAvEbJoGuDCw8baJKU2Lx2wnxiGESiuweFhYHDsQYMYvjPqfRJRki8ph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G6YdA147pY3svUpBrYDouXkLkyWfmMyncoqaCDyQ875yLqRFnLaTCt3yPN3X95UpfyzydzQntRPvAx6C1n3R9x4",
  "key1": "5kzgxzK1neqUhjYmsFnX3Q5boYLZtmMbwk2uSza2VA4iP7MFQtrPapwKhpjSkhBoJ9fqSRy7gt45PjGKDRw6N5uc",
  "key2": "2wuW3xNwQ7WGEyUAXHRiapbzUFVrpr1ApwsayPqo9MuYFyeep9XxnWuMxNjbBpUA4iBzPoqHv5xiWqBdwwcbYT6s",
  "key3": "2ReksMANaQFXLLFYACRteqUBdkJwo8128FjXxdBpccrJRE7P6M8ijpVKTYb2RgJ6KriXfvKsMHdRAqSet87Ycx2x",
  "key4": "ZVKhquSDhnc7goJCkrfVjwLp8WRjJkAbpMAFFELrFEMxTyNMY2NPy9eXTU3YjQnmRpZJ9rhzbbFTU7FJk29tHgv",
  "key5": "4NNePgD68AUy8FYRkr2bjadB4vfvR2E8cwNvfqerKYBsKNzPi2yhCP9zKggA9avAA42nGW83iPqeBg1D8NzWaU7b",
  "key6": "3fznuhHW8DDVmkfLK6TCx8WaMZGVjXxD3jGwqXpsMk1fAeDD19iUjiboQAFfTfD5GnZaEa7kQoYPBFMWaobZRz8G",
  "key7": "4FpSv9W9en6z7r4v8V1qN18XzcCfE2vJ1nj3UMfXTgQfKdF2QTwp7qztt4vJxZsLjVAcrfLTTMkrn38eY3b7DW6Q",
  "key8": "62voEwuRrMVQP7RpxgWZpgUPGf7qp8pbLwWWvNMKq1wuX2ALSBZbBjRgmwqNsqjTsfRxgKSFqJsuzzUNUbYRrZM",
  "key9": "39tFNB2MhJTbYKF2y7XspPKv8NoUgxob7uAQfdANmpE4yhGZXKAUoCj26RMZTz2ffEtyYx8beGADGnqKJmWcBMUn",
  "key10": "4HRJ2ngrsP1FCDXxcXSV2BpLo6ofict3TFhT3HFoLYg9WsVMHqx9ZFJrafSzuXqaVngJy2GMqThGLWndL6Qhsn24",
  "key11": "5jbyFbJ412216XwHUa68cQR6xHs3piDdQEcueoomEwDQgRQtA7dTa4VgCsjkuWFYTs47KZx8b7kAtHzPa2TaAXG",
  "key12": "2mZPkvEyB2CCZgoqghLrN4hDUkun49U9Yb42EDsTB2hGAGmSuLQJJSh6AJernGmKRcY5ocAaE8Np7groLGdov4Hk",
  "key13": "2oLV1VeAifnodVJbNBLzVhhetV6rC7dmEYb2iNErVuUVdt3r1AYWhuDeUoxr6XCsHhy1n3Gjesk3DKKMqL2o5d1V",
  "key14": "4ABwbczz4A5WXDi5XKEd7wdmULv3QF8BCmPYBHeG1952topuopjw8bKe66SjLu8cJRsYVGneC67omdDDtns2JiLR",
  "key15": "4pmhTmNnPV5NrW5RGdsiU6srmHArfRsq2tqoBwPS7VYVRBLMw4asfqEwuGFDs1YGzWXTfyNtZB2iTVifWz8xRQFo",
  "key16": "5feAGqGbUaBgjgy9EbL9c43XZyy4ZKpA4xBqbjvsyvrRbWXNppHwEqhNfssfxKBdwWybVNATnnSmuB8PL7TjdgzN",
  "key17": "4n7TkXYypC29AqihxeHBzC3uyf6hw5P4t2SoHACrdxKvGRR8kWK7Wr65N4n4T1SQKjhcHzqdwf5yTYGS7ndTCnwg",
  "key18": "3QQY2KVmexzhy1uUNiAR26S1wpnp2kKT4AA8k18srfhxC58Q1UkjEGX4WiRARBegszJkpPDjN6Mgu4gueASd8hav",
  "key19": "4fBerzeJzZWxRDnExA5cWGqUmdaGKbkgwpT5Yh3YqptSV29CXsK7QAiLurQkKiptwsymTNLEUMFCiXxxXroFbMPv",
  "key20": "biaoBzSWi5S7VB6cvFHjhEMB3cN7kYbv2aV8omrtyJgmSUid5M9BYVd9t92XSGxdkGnmBekabLPdpBJm3JvEdRb",
  "key21": "TvspWygZfTV9t6MrTWrpmQoQCWt71GmanSbfi3hEgpTGt5QpGC9bCSGaWnb8b5yNmWBNKTAo4tS2oPhbXfyaC5G",
  "key22": "517KmaFPHmLay3PmV6k1QFxkGfGhX6JpYhLxvw7BiGNibohzwAxomXNvZUJAEawETZ9ZzX5JibUUt9qphqxPaucy",
  "key23": "3FZdqXQqxYkddb8775rYs23ndU4dtDxR1YXdQV5iEn2keUcXRDB95zHnw84z55FdjuY2zT7jE7QLLuFBD1P9JhXz",
  "key24": "3Cu9cpDX6ueKCXb9mnHNwfkjdMfK31HnMmQV5T1Kd5ckDvUC4bxuVkjd7MwYaiaK648pdin4GKYiiEuAjze3GDJo",
  "key25": "2BHaYbEg3z9CXoHUZGUgz5xFoyyK4RX2zuBJirbyatjgYUhsBc3czkf63Tj8SxvUccBBv79BtusWPXgwgLpAFdXm",
  "key26": "4BTxCWg4r1JtrSGcvyM3tRF99eZMiRr5WbVQ1a241k7HgHm8zXkUstYpCCzB2Xdc9ruWDRzSGuVZ1bTntXvsQK75"
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
