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
    "JQVsrY9Jxp1dhP1syj33Q3uJrsCW5pbzx7qDMGtGtG4oVZ8Rbp8NzEF74paDNPmBESHrW3UtnZeqKB6hFGbQpYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kLaWN3ZaEjHr5kW4JFn57KcsH8gvfA9seGDrW4MooysUtF9dvBp4Knu3f8fxqkh2xvvy9kStQh9XP3AwzuV5Ump",
  "key1": "4eFq91tBWS9wBsr6oJcsXYghhH7RJ7Jaz4c1uQ2WXZpNrXVj9epwnfbDHB5VzWvMQYhYNSK6zkTmnb7C88xSMWGH",
  "key2": "3vWVjESBXKBoVPHerqrFTgPjsHEoe2Z2FZj3oZUTcDu5Y6vWynEgLYygDvneidAGBHqYrqLbCtZme1sdBsFLLrkx",
  "key3": "4TjvspWzQnf2sEXJDJuJfstF2KP1QHKa5fL9C8PsVmurBHVDyrgT5NEYro3oQjiEvkdxsTdhVULRyzPAtESZVZ2G",
  "key4": "5M9eeVo7cQeC6quuZY53M5eK8K8L4x4W5JgAgwjxkoUtmNXNrKzmYfrBoDhLDH2EQUPxqgFs5SehAxeubP856uVr",
  "key5": "2BnLK6nMhmPhEQc9DviE2442AbJDJNxZ7pKmRn3z5Kvd8ky7d2vLNoZqkwrbaYVYYimD4srxNyaiSj3f2iBWm9BD",
  "key6": "3biNonTw2NZqZ2PiGrg5DWv87xdLwKtE8QKG6sqfEPAbWQr9freeUDfUxEuYdJfPB18q1pa95JjkjMTVn8eD5wKz",
  "key7": "5wn3B9NnXR1FGtQULynPyDrXY36jHbRSpsNgs3ZT4codw6cFhNPP2DDguWY98516yRQFDuShcFQPCKphqT81EyVP",
  "key8": "4wTUhVSvSoua1mhp6MjiAkMZRqHys2hsiRvh7cqRwr9YrE8pCvPABvRYaJpbdYnbNVXXE2VqahQfAsquFfwpvf64",
  "key9": "4RHaYTt39M8kxQA6zPXxoCmeYPgBVCGcVZhiRU4vgisf9XtTCXLZyw1ErQs2zEj9wQ95tAjDixChznHzq3BxwHKb",
  "key10": "YZWJnHhkHPXGm7pnFumfP6QN2yvWnE7JVEw7Q1ut6v1TFAVn9iCevNdMCGBPAK7dpXy2tdFxESYTYHmkXimmQLg",
  "key11": "3CjYwgBukhP5FogRYQPpJAduxvGn4o4tTCQZvSMKqkrqx8C4GdQeRRnbSU7hTkHSxns9NRPZ6545sYWstPWVewwN",
  "key12": "3YruVmv79hiBvtoF6yZBgPeXAYqhojS9Bh6J6o36xsuQbdGGYDBr93eNsidcs5awny2Mc4EhzBaCepVnHJijtDiN",
  "key13": "3d5x91suV4TPq1c7M55KYP5Ee4nAfajvf6G1ahmkbdtpH6HNuNkUeUo7bP9Xs4FANEayFH6HeYYN8fmQLj5J6cLG",
  "key14": "22kyJmmxKjU1mPsVV8YKnm3SVKoAeX4BvZsjMwoQ54UMQzNTwoGN6kCmmvUtybVeAf9KwLp1U3yRDnbuNCYFLn4M",
  "key15": "3xWrEzhAjpvZhXLo8zCQrL71bNCgHMoBRPPr2HjdqXM7uABE1wqSBrp8ymDCjCB5owDzwgpoUuxadi9KgUjY7iSP",
  "key16": "2D18MB18K12yx3JhGZmgq6Wjej77NcQs88TNCYBHD9GJBxhCqLMd9bsRcBvjNQU4atwpAqRHtxa7Z3xNAt3NV3nT",
  "key17": "2S3Nq7fYueoDkhuByzojzSMSsKMqq1PrXT8CdQUHRgXK3RwV5HAZKwXw1mtfS9dq8Bsv8mbXkUQ223PMvivXwUg8",
  "key18": "3Zf7F5sUrZLCJdL6hU7bnk6KxyTQPWWVKQqYFHHyFpCYfVRnc2qvMG8qnFAE2roDZ9Y7RoXKSHnTstZehqE8d3F6",
  "key19": "K1fbupG6fsb81tCssBBzPF924H4wpvBQ7LMWqQhW2CvHSJwzX44pTwLsugTbMZYg3FybXHcZFHbQoqrxeexHMeS",
  "key20": "25ufTKBbdmxBzpWznEgVXWauHNuBhCM51aSgfrXk8pU3AcKctk2wufhBXFnQB3LikjRRFJZZaRzbxJFEmykzYh28",
  "key21": "a8mQMryqNMz51g4mhP2RN9grwtgVXzWyw2kdgBnhgkbqChtdqidXMUwdwCABMjuQ9WEb5h76EzGeGpsdrJkHhTX",
  "key22": "CPPT5D35kvk8piW2gBZjUq6qUxnwYh8njiaK39tdQu2LNzX94bPgZExXjVxfxcAg5dF7NoQD1jtrNuvqCcRqXtD",
  "key23": "6yD3kHWywR3u1hZLbPaVYfyT5nNtNSvDPyGqpW5bQyDRqUnV4TLxqXB9KS6Z7k6pLkgSbrHoi75iZ6y4m8mTXRD",
  "key24": "3eoY42DTdn8Kz4EpMAv7sE5aczYLtXys4dYSHg4vfWMTC3TpuPA2eJcmkQZkbqPW3vLpw535iU6vqz8SLk1m5U9J",
  "key25": "iGvMAMwFf4MGEcYwdz2x2jFZew5EbL4or1QtX1YmJBSUjsR7EJTSxgTU4iJuqYtx7dzBfS7uaPU6wxb3xHJ2hoT",
  "key26": "QQCP2bMe5KdPatDXCXkMF1w8u65pgcjEfGjkbwFqRtWBsC9sTRmc3P6r6XEtzLAh7WSHNccKSfZ5LSncuEEG3RZ",
  "key27": "3p1MtqnArSEoDZuCjtEf3Qgcxu8DkYgNhpeJSJP4ddzMBf713xPWPwhLCmAhtuNG78NRD8kNH1XBFPSXnysgxyEe",
  "key28": "hyNb9o76iNoCRh49G3buEcgQJLBuLqCGwQLxEy5t8q7xRnXnTLbCtX6WQWfTc4dAm56JMuknViZunS79BUeoVuM",
  "key29": "5SLsDpjnt8UQm2F7kaaAVe7RSXBD4d4cqNs3XUPPTeA5x8ZtBh9ohR4hnHkDnLZWBDyX1dJ3EHixrFscubJLkc6p",
  "key30": "aSbp3nJWdvsLKkgnFcrTaYjQPSF7pdeZhNJZg7sS7tVC1qvt83hhc31NxCvXzyRsRnzAqUfza67MkYqB42Uqhy3",
  "key31": "2gQbW5JDHavpJMAmBeubSnG4E54ooc62xNPTkt4A3tky3b5Asthrywb7p7NNyfQHTVM3EDMQuGJ1bbjirE9dAkKL",
  "key32": "5iTXDqwTHXnsdwWVdePQJWNgnACe5XkQgiskdXeA8o6fRscxTm9AxhVGwFs2kzjGcdPupSER9KVzom3kiWabqabm",
  "key33": "2uqSEHn2gVSGnHh1QH57Wro6e15TwPYKKkrqdcG2DLo2GrjczegwkLmx9AJD6CKtAxAnXpeu7KWNPy7yJyGYpft2",
  "key34": "3V9kKkYCkVomZm49TW6aPcxXWzueiZEXSSWLDTCjgR2BkpAQSgEQ3Uv9fUrf7XaTNmPTpqg57VtsY6iR7sf32hVw",
  "key35": "ri2owyQwjhG44ZT3cADtkPzATKbrJuXdvQWfPpxfkfBgHeqiZNJaqfeoqX2CVbRFbDoWhgPRMpSTE1YFg5ATRY9",
  "key36": "4QBJhAhrLuomqqHh4DMzFc16zNTFs2nkVfnhq5eaykgMfAcu1pFWXzm9AN3BXq24zk63HJLzxv7nQkJEWq1cQEWM",
  "key37": "3KNY4GPEShRti1jcaXoSoe8TQsLosUwHX2UWS327mVrt7RUMhuSYy87TwHJAxyLF1izMDagAwveTXXPDQV6dTc3o",
  "key38": "3EUwkdgbGtBwg1f3b2Y15VN6jGs1Y3RhyZxeccHCWeA3CtE7BhPq2NuDCFSGLbqEv5khw7rqyuhopHhfWk43hzAV",
  "key39": "LfUsQx5u9NZrCytum8u6VmdtamSwHQJsMBjN42TU6KGm7sJZ2hDizuZGqRfq4jMTG7dUu3yrPovsv9RDGC7jH8a",
  "key40": "DczJEBZSWWbtcTkhzWyasZVKG956q6LDoUvy8f5qPqAVcfUYMiVQ8UorL7dYHsNRcWrJbf6cEidPJY222FVmL3f",
  "key41": "4hP3y7vCYPMtG6w9bGh4v56SsVPLG58W1L51qUWfxKQjN6rduahpHFwpj42twq7c5SZcGuh3teBEw4jLuHYQaq6w",
  "key42": "iYNv2QmjiSg43vHRWcZbUChjaVPLZLDDLZGSfbwbEVFmDW1raknmagqQB2JNvZJNRhehjVQ6QAT6FyotZ1UMbBU",
  "key43": "2bsLJ6KgY4f33HfkRA79gGrxH7vdRTfwVY7iyhPQsUoAjUNTexFZkHoQwuv1pUn1E1H1J9BZXzp8kkK24T1uE8G5",
  "key44": "LGm5NQHsb65XibfhgbeEwFuWdjEYd5iiZ4ELTtLSS3HqX9B17hXgbY9wsvUeTXt3JmTpBHeMqQJF6BQjZNchCN3",
  "key45": "61ZadnZ6PGhD7ySvnVXa7G5JnbEeBT4CKKbiJVxo6kTY8MrZR5zMfmU1tVq5icqrTiaFTWyUbKF8bjgmcbpRvyzZ",
  "key46": "33mCwjDn9DXFXhUf9wHTvsFDDrwy1E8Fa4R21dUewSwpqZq17iwQSNscwPXEouQG4qsbPRL6JCjrHn4YjEeLErPk",
  "key47": "5S781bQyG1drXHkC9NJfft588SkW4mXB51WFcjAzqvEuwf1x257MKxG5jGhDUj6SSRkyhRvyT5E9pb9cZyJLLW3x"
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
