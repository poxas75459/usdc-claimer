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
    "2kWKJu1zysDLHU9jcsQNEZc9qCbpt9SRSWyY4ayQaJjHzfXKWKP7qw7V8nZ4aHB9WZbeQEB4KwiPGM3TquwxqF1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rpYQ68U2Sg3M7LnFrw4WY1LbRXamNWt7Ynp8iJhCmruXeCzeRjDC9MSRHiqrU3Bk1aFFLZDAX9QNU9Kw42U9HxD",
  "key1": "tFMkKdY968v7gobLAa7hBAiPdKQyu9kKXfLvAHaGskT6yZArkWBU8NTS2NydS2kTjwbsChUuxdAzrVVq8GET4xC",
  "key2": "2ATMJbJgVXUhrKAh67Ct4oRShetYwKUHdLRGtokrZHbuQmL6wRgzeyikeu5Q7bvah3yrJABPQL6aNkZstFNErHdc",
  "key3": "2j4b1WWaRuSqrydYVEC8cety3QBnqN82oNKGNhrHLHs2tRK3KkNSMU8zbBkPBe1CpBqUJu2QdncG6H6XZKWN2QLQ",
  "key4": "uMUidrqHR5iS3MAK3LYAxRU386d68zCRyXKbgsJVLENK4XVQrejxAJMWzY2DK8mjEH5hoRYvrPUvqLCcyyT2cFm",
  "key5": "vmW3U2ofFiAemJstB5tDVmuAPc4tkgizCBkTmwQCHxg9EbST8MJPrKYJXuUFL5QgQVjZbqeTf9NnXPLCfLB7iQG",
  "key6": "xY7bwbLsmyWUwevFvQBzH7BLRKadMbRwWsuig5j2zGRGndyvfSuAwsS1C6j2mqCSEeHGZbr3u9NXSUCXXk9AnHJ",
  "key7": "22g5H6DfLRKEcVuLdMPAYvDrtCsmMKS93QeUqW9NfpUMhTfMo1Bd4RMzbxAPuxjwg5G9ygjVZw1kwcp56oWteAZL",
  "key8": "hWZVTFxSWML3xktU6NfevKgWuG3jY4THuiXXrt1zb1DZAP4DbzgsKXarWAwdExoQUXN8SwBd64gVZ7BR7m7tecQ",
  "key9": "2GmKpRBf4r2NAf4bqV51gdxjF6uJ8k6fENAxuuQffUF5J9wMypdccm3FqvjrYDCz9nkvzs3fji7oJrVwsrt1aM5C",
  "key10": "2crGyrFF1NEnsjbNse7NXdUDzFkjLdhuEKrPdcTWa93MwZDcZaSJazGMTK6tLhmEH6QppRUg9eZfZa8TFkZQhFgm",
  "key11": "3dPRdZ6NfZawKd7fHcVyVPsD9mJkzmoRa2gfjLwqVf3VJTbvR5Ce8ZsWQXA94B9eEBWTHibqUU56Be4dPPaxVRv",
  "key12": "4t8Rmcf2F9oEtdUd3GHo67e3vWR4V4eogoA8BkqDZMyZsJFyyy9HFJ27AFKGDNqQExBc36Sq27zPreLdF59G7dUd",
  "key13": "2k5Q3PwZU4vYYKN5RuMhXcdqWtYAWHhZZhgQkvymkrE69mQfvoh2QGbHGVaoDwT4GjF1Hoe62Hm1NkUfyN4HxZ53",
  "key14": "3w1iYSfGVxZ3SUnsKVoeDUBkdghtcrB3V9cL8nRGTtRFgC5dBh3Vy8nDefnAGcvtaZUHNL2wwP18n7ZqHqj5ddVM",
  "key15": "iKZr7peapGbc4pAZs46k8zMUL3EfHRfaCU7aRLWkgzL9dDueXb8umTdD6GrAnpAvd4XyGUjL3Bz6fNmK3z6C1Y6",
  "key16": "3EiXsqoyJdauMYUBKY7HgSW2HQxAAPKSwcyktjCVKUAHp5JeC51bpRVsz2hDbLFVYn6SpHfRYoS1nLGWjbutuvRh",
  "key17": "4cyf7Uhq7jYFtTS6uwxbhkDFmwvAkz7wYqoJXS7aEt3c7qyCfMPayMRVkCVPyD3B2eLtXzKw1TXvo3zzPqwzjJRh",
  "key18": "4W7eE5cvcKGKajm9hrjfLLEY1tBMLXy515ijHtUAFXGKSDt3mjfnm3uizpkUimcXCFWqdKtEPvPWVbCzN4Jgu1V5",
  "key19": "XencXtKu4bq86G5KkXmG1ynabToo8hbcbR6Q1Gn9hbgVDKozTZ21Ya3AXEw34t8y9kZBVUnBAEBiqAJp5uWvAe6",
  "key20": "5xf3rTVkKreSHZ4Jg3cNePcfoc2vuAj9oD15TKCubLRbNYhaZJQdTn78v4MDEC3eGs9vYRKc3NQgR5skwujs4Woi",
  "key21": "frkt5UjUn2bez1cGxNAsH2dPxBrQrrBFmu3i7yG27sg6fzwnu3ssrYhENcPB3MwCkmiEStv5V5X6o3g9W3sDCUi",
  "key22": "5MF4pRaeFichg3SyPTW6rW695asFnd9HkVsjUBVm4FBL9FLycRapaEJnDZwMVyzv6eQgGzr6bYcCkgo3vDXVvewD",
  "key23": "3gSjRHphgL81p5GVXqc7q2JUNG8i8EbUi23tKkN1Rh5N4ViTcraJmeSCuaYVaucTFATsSzYGrJvqomMnN94qDhLz",
  "key24": "4ttjZBXZeX7mqviK5yneX9mZe8na9VDYsPPZ9nZGeKWCqha46WSrgcSFQJZcofXZhhPEDhQ5a9bN4vttvBbJB3oj",
  "key25": "2xVVcZWrRUZz2AHYcCspMRijQHPFPz2zPHvgcAvk3eCsJsKGAQZTKU2ZJLPmKX4fP5mRG3cdrPY2HzNWyrnacCpb",
  "key26": "2sgjYuMc4CPq5JkyiCqgn7euvGqRBrZStYv4RyGimZ9oJhs42dwYxo3TzTRcghhbjkFe9uh3KziETyQ6boBzie46",
  "key27": "nNAJPHxdpHr2z9oZT54X11GWU6t9k3jCncU7FzZG1z94mo86V6PePApgy2q7KXLVJcUsG9RfkXXaDgsaqrd68Yz",
  "key28": "5umuauH6Z3ChMrTzX2axjx8c1GqM7YhBTH5aWHHiyXgvf6VmwLHM2Sdev9kMMTu5MffY3who68ArJLqnHpe5v3j8",
  "key29": "4TvE9Qw4bZMfTcnLMvf63Z34Yffy8qBP87eCWJRiG5qQ4ZLYvCYVCi5CX52ETrbeh9k9UYHRRAGykTic2oqPBNY5",
  "key30": "32ZUJH7YQs517sc7n4J5fSGM2BThC23q1uGD6yuUcvkXjoWMi35TWZXnYzR64TAb3SThbRpDNckTpp1dW2tNy1aQ",
  "key31": "2DqVArctYE5EzQkvALN5Qx75tYDdcLxLrjLQc3Z3q4eDy5Tz4oiKcvegdF7JTrKFcc6cGxkmoah5xooUijyKakpo",
  "key32": "4kf3GcsNXXcvg4QTEC4nLADFNgfwhbs9xZeMbER1mEmLChWZijJAqbqa7g9ibaVVisz1m9SVk1NNbgVgxD6tpSB2",
  "key33": "3m6mvhz2Ugn8gtGvmPWCYNMLMXCfDMmvncfJhYupPZmQ19xij6SjN4ycA53QsxP4tdvYPCZKmYfubdtpAWtxdwNk",
  "key34": "5UVQYBBmKRiH4TGZAticvDysuYHzjK5Ddsvmr9coHdJHq8bE8RVABg5qmcJeTRiLGSEm3hLQsAYWqLANzrg6N8kx",
  "key35": "3iKFPRhRT2AGQHsDY9BnrC2hiETvFEBdkUyL8RTxRM6SxxoGdMD3Nre2d6HmcfhNkSnQKK8XsaK6WHSHnWc6jFcx"
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
