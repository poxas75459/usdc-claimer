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
    "5HB6KJo6Qi6uv2Y7spugzDwwJLVbcJnF45ty5ZvvbJVamyhCoCtw3H3n6Gjs5GxNUoY5W54w8yEXY3ERZTktXFoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7VUsyUx6QBztcBHX5c1ZNHu3ncCyMJQjHRA2pjFBjeQstoRkFr6RUfYkc5fKdH9t6Rsgs525icXPquH54vHDUbw",
  "key1": "4vuiF9GruFBBZohMteQ8mm9J2tzx1bT1oSKCjBoz82BZjtC7zctyMLSCq5meLWDnNysoKAjnJRgSKHhcQGRFTtMt",
  "key2": "3HmE6h8BcqBmTythJfWExA6qtmkE38pKDPvwWL3pC3hiNHg4TNfsNswwSrVqQdVhmrbmcidepGPcvp6eWeHYJoam",
  "key3": "4J4VagayXuvMmo9NRSEqmJ6rBoM7oWw3hoUWgRmG3TBdcN2vKUB9DmbPi3qurFYBCFTNLsQmC1iAHxARGrLeu11g",
  "key4": "35BpB7rUsLEmEauAiVNjcjSfSbgLxMw5dXpW9fNXwYzezTX4NFUok79ar7V7T7MCtXxxN58HC8P5ZGDFLLjXi48e",
  "key5": "3t1SGFUTesLF6YYtLLoU9dCdmhYaEm7Y5PTmTtwjcRDuUChnRHCVutofWNemg2XHv1HKQtsE5YrGFMZg9RCESsCA",
  "key6": "4RhQJNNcizAA4a9zbM7oHdEoUJfCMBMkdJJFqmeZKPChhXwdACDUVujFbmyw8NVeitm5PzKTDmTnNL3Fmm2HxZpr",
  "key7": "4Fafy3dYYfkVroU8jM3XAQ2zatFy7cicUm3wVMBqt1tAhXL5MuiGXt1n75woKdtQQX4sJ5EasB8S3aJtsMY7Uh9b",
  "key8": "3jpngp5UJRiw4NRSeMSqUorPGD5ooVSh69VPDhM9Rz9EAqtJckXzE2FR7tnd9JAi7S1xHGjTY4FNr8dtNrG48cB5",
  "key9": "MrefEFyCqACB8VsFVnnMGXuhCpW8a8HHimZYTLwo4uKRu1TVLVzvcQH92T2o3DsxWnSFLqj68xYmaHBxqMnYLzm",
  "key10": "674V9gZvJcpS6Svp1KsziA9GhRSoiSsfGK7YE4AuSka9pWCoXmuGxpyPKbEhLkkMLJHh36r4BCMK7sG3QXYoWgQ6",
  "key11": "4cnD7vVeT1pPCWTDLfK9bAjV4WXyNLNRxkGV2sLbxmNRxZBDR7pS54x5uxuuAEs6fV8kPma73Ha18ynQcyBpxi3Z",
  "key12": "2tEVd38DmfznXw3WKgUXzEbeakXqzGm52mYsvZZNywXKt2wj42nhQa5FhyEQri1ti6fyyQaffHYfHXWJCdMqfp5L",
  "key13": "3LJ38HqXQTGgv1He298FNugKLknoiLLpZPA8UvqXyWSKHypQxGoKE3ba1WVHhWHNxmFcQdy2e9zbCG6HY8eBtNBz",
  "key14": "4wV94o8LmJybdV68xWVAAKGQwE6NK6kRcCSqsGnoqS1DgfjFARZqVLMF81H958CefaohVYEFEMDaZqLGFAT7zauL",
  "key15": "2htNMeBgarqrqk788zDQeKijeqZpcZ4G1xMQ7Dg5d1T6V3wcrcXkXV5TGvFV5ESR1bV7vwctLNt1Jz18sVeaxVn2",
  "key16": "4726DkRjQMRLp7NszrC36XABrNtQv3AeaFAYWrX9UzX3jq94KDMTd5YcsZoLuZa7f6GgfWSRdCqCjmrmXvHgFwxB",
  "key17": "5uqF2AYAyQXn4N46cc2SJCR7E8x3oJsuYfAUHCQEufoWPJG1FtpUgz68tom28CaPEjRviok5duU9Cu1m1cuhfxcC",
  "key18": "4JYsuHHqatVjBYDkdx9XiQWizKfHYiy9GjUxWJXBChrbJQz4bG1e5DbY3ncw4zo1DdYBUUohexgxuyzEgJpDyoa3",
  "key19": "21JvWYkmwYVYKh7chyRf5ovQF5yTHkr6mc8tVFUPa7HeDNZAJfjPq2Y3YXdvxKnbnrfUw5DiNBSZynqtmJmMRH6h",
  "key20": "2ZeHhxofpRf2pibEYqBq1BEUBu94kTSEwJwjDgaGbutJCN9hEcCr9h32SUSqEE9pDPzXfF36jHh6E59KpVxX8F6w",
  "key21": "4qjvQ5BVfgcUpKYxwDEwpA87TaHv5KUBhW59ySZKfBGsZZ76gkVacQmJyDHM7k91VqaF1gU7eXHGTdy4Y6k7dtEa",
  "key22": "3CuWeoyDSWgtHieBCHYVRrdYt521CaYxkTqNj6xLt9iBEP7VEZfVJkFVBZ4ANzYBy1ekwft3hVqHqcReJMJGbNPt",
  "key23": "bzxWHvVfwZALMsmVvgRwnzhH5sivXm3zeog6So3AEo4wwLKDEuXdj5Rq5iV3B9odBdxVoZ3Q5hDKhe3q6ohXGRA",
  "key24": "4yuzFT76df45rresjbnqY4gDZ16DdwJrMNVUGkrZ5xyH1VtrTJJtYwXCpQmXqromyzYYf6K8bUiCpBmB6DekM6V6",
  "key25": "64NW36ZPxbVLF71J4P69wpHosYx97YPJKqnqCCCa3B6qRCrb2akSnoRfC53p6ts2vquiHdtjHwHXWHqm6nF3aqoW",
  "key26": "5unXVMkw6PQCDUTnxudKjhdiQCvgFRzwWdrE6dKFqMdAiPNiqapj4RFnXv1yYzKzue3id5amvzPDJkWSXC5kRXAm",
  "key27": "2PQRnThqNkVwnw99NP5MMG5byABgPbJMCpsgRrsDfqEQ3qwmUkLekTBtuwJWr2ou2UjXQaCdKS2ZNjA9oGmNKXDE",
  "key28": "3TZTvmEMNKV7UC4C4p6F2UpPCb8ySA3zJnE9aW8VwJe4nyfWH3fdHKMmAQQZSnvYJXeQK7akaisETdLX7C5EGpTn",
  "key29": "HdKTRjNkmiVSABFZZ6LfLQnM9j3qBhm7LJncwqziEwadEEnirhSknkGKPnYDZ1gFEQfJn3hAQG1T2phZwgkWjx5",
  "key30": "4UFXfGjkxMovZQc2NKZQKgA53U7ZcY4tGXpFJD8Xw5vVb9bgHUiipv7VuZiNoPY1Sb3gDcRyhc8H8ghL6Qc3FoZ9",
  "key31": "67MwKW3UWuMgM9AVE5zDcykpfnv5WvEUNH7x8t6YFDrduSLkZzwbV6B4rB1bDpqdqRFwvrzggrix6GWzuKbkG8wG",
  "key32": "4WDcB6qa9ifoV87YAZMkNAP1kXZCdHX1A6kqQBPwDiQFRmU5BNKGvirr35Mp6xwqEmu3gRwNvUXEeRVz3RdZ77Rd"
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
