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
    "2TMX985oZjHdBbzVa724c7BMDfzvXct5XJRYvoZQ3Vvt5yyVAZEQmu8P16Au772Gpdw3EUeEHdBgDBivUMLC6AD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XttaAJm1TgQBXa5pdJBAZqDRf3iG7jZox3c3AAwoa3Z6QFEv67EzQA54MxBQHh91JMkNA5WXMxMHxFftwUrQr6V",
  "key1": "3LpwpMUwZGa8XwDr41FLZa2LbMbEc2BBvsHdVb6n1Lnyn8FA1RotjGNWQ7gGNNgvcCjgoy117p63E6ryV4GA2QY4",
  "key2": "2sbrm6rh4kqWFsEtLH6fQcpDpeQf4WcuxnX3CGW7bWWrm53mxMcqSLyJEmJRjYd6Z6jnyzDRbtbxwknyA28x6Ty9",
  "key3": "3YkARby78reL69PRaAZkxXsR1tFPg6DkcPkXmp6dW7bTy6S6SLCTYXSQdmFDbZMkuaaQuprqvoWxZCTwxtfEJNrA",
  "key4": "2bJqPYxib8QyNvuLBnXsf832FWMHeYApsj7YKfVv77uDUhZP3QcdT47L2VNTA9PSCYFYSPgmyHhUza7AY7pMq4ns",
  "key5": "2zUTJeAQVAweqa4kizY9tHYogw9aJb9KC7zKURGZtea3uh5p78rgXaG4nNocfJxkRt2xbftW4gYHC8p2xiqHmWWm",
  "key6": "3ZrUq3x6U11Tdeu2aUSZ88Cg4hqd9JSSkBD3mwcApPSp3DsRoA64GFyTeLovTk2uPmZmcZGmHz9cKKrW7yMJuN5b",
  "key7": "394b79GKGFuejvh9JGsjuJXtMCLSRAkTwrcfRpJQ3ucQK64ZZtFYNpZWdbyPrjxQxFyRm4889RQ7LLusJdQPTuRK",
  "key8": "3sVajrijJ1xbnD5JM1Fyem1UuqjunnXMrMBvq3uikbSfYwSHRBCqk9F8ZHay88vESeKqd8mq5GuHEGF7DKFypwu8",
  "key9": "4yAJiJYwfYumLtetSuRh9o6qwS39TNESHfrpkGA1FxrupDwSaSqBVNghVqcbL6VTZdoYDXkzjUi2WN5B4f4NY36c",
  "key10": "2fr1LHrcwyw4mRBZsox9zfiBLxpFxABuntXgahuXuWxHi6sEDu5zSShC7nGJTG7zYUbRMBkgRES4o9ruqYw3xD7Y",
  "key11": "22CbZ4J7xUV5ZCjK3ANWcm8AK4PPQehRo6da1xs6JU6Rjp8zZ6NBCAaz7CUfrg1TMgUtohKsdUX5WLcihyiz4vJs",
  "key12": "MHcuS5EhCnFpfFQtDmbjbvvTqgfVBHfqxq79WUfS8ZkmXX1myECCp9gyp8n4ZC769wzHk1xAU9crSJcqmKx9zan",
  "key13": "3tUn5BC991XScU5UYWFHs3Vejrn6NJ6VE2pNJuu3gXJSZDG8SGHevFoCvrpDtWHcjANS4yEPqW4837NvAwCwcnaX",
  "key14": "3emT9sA5QoPhECeXPaC3sUEWsRjK3Hkz7VR1zCyuNc9bEP1QiF4VhAekVdY34KbHknd5QompxSdMafW1w4JzNh4B",
  "key15": "5xSmgRCeAXdgXBTraJsvxCAJhCoxTMhN95HLvjFVogBDy88KtKPv4cHW4LdCAiFhRCcqZe1m2UWUuLsCQxfdj44f",
  "key16": "3QuDDxPTLDC9HhotXSazwTAsqJPwMYAsPCi3ibf8Cv9hKyUJezgvZ1He72nNJ1BjGebamVq29P1abGSdavZF6dbF",
  "key17": "2HxXXnx5Z7aKkSmdr54q7BrrnwSYwFyPUKQosJdF1q5ribkZAz9Wnw9Cbc4K737XYh2szeweRhKs5LnmYJQDaej9",
  "key18": "5dh4pEoDfXxBNKp5kKaeGCxjRhNxhhYCrQYP895YDxu6jUJte172nG4u1yDkquUkf9CfovwyeGsm5XLXAttq1mS8",
  "key19": "2Ln4AGxKtZiLDryr891F5prKREuarbMnN45ztsq1CQvVMjWd44dbJVFmdtNzjMfC1cwxkJm85WHFn96efehxqbMf",
  "key20": "2Jfimrpq9THvyyCB6qWYuUWZaCqARhYZTRKKEvEmL2ZDy4UJG8K2ijRFP4u6kDaQBN9UqVHW41ZQMWm4bdH1MQfJ",
  "key21": "48uP4bezJTdbqLpRXKPpXerqkg9xWe7roMtpN48Kdso5HyWdWjS9eCtRzi3rjYdCE9NgapANgWF3tyD5ETonBeTG",
  "key22": "3yx2A7cp51PuqQt4HLqzgQQsUgjAZRXWNHawvHG89sGyq6D9eQEexi5tLdP15BnLxnvFiJdHDviYikt9jXnbB7kF",
  "key23": "45xYokVoWydj8937r8MFrXZC14aBtEUUu9Hz2xQz5x6Hw6tt4qzakjdRqQQvtG8ePpxdvyFaFH9v5882QK7cvBVW",
  "key24": "dsfzwisbNSsWwNws4Rheiw6xAz5s3kZ7A9qQJhXJwxdyGq2v9To3WbwR3EbF6LkTpuaGrCLGAUtHTq6KG3aVWFT",
  "key25": "5ezBUSKj4PVAoDAwfJGMSYZgbm7iGdvbVK2okKPEZ1BTJ2hdxvkBd6cYfQASTTRmRtyBJYzcceS9djg5gPw7THDM",
  "key26": "42NsA25QZSBJb1642x54ZkkHY8VVQYRHt7aPugDRLNpNKZYhwqSVWGXq27oURU2fMJ6FigeuaVg7fjmBaVDftjki",
  "key27": "2dqoYi99CTgpzS2hVFRjTvctXdjV3Z1urjr2YCjPxQ17T6goMSXEquUHcCy5F6DxwHVAhn1PDSbF7ni17oTX92bx",
  "key28": "5vEPkAGcGxiU7YQM88FScKtXnBQr8kcj6sT7FmiJykyqXh8fmwm1VkyretfAm8DV8NMy21AcHbZaqoy3nmfwJZvU",
  "key29": "5onq3GW7hrKCq2uW7piV4UEWjGc96ixUyDY9TnnvQk2hp7nNrbb3ydC7iw7zpTZYsuVKj9aUuxwyDiJDUbFruMnN",
  "key30": "2ryLp5WSZRMZmT1Pp6rzKos8TZAaGuQc7xDQQ6hZujtcY7UD5a6VuZDp7jdEh9tkyztSw4c8Yks4Ujx517xKAfD3",
  "key31": "3hXqoYbsCGvjXULGYxfcoDq6uBMfGHWWuHzjJpVsr2qTsrj88vzgjA1fqGii7kvwyk9zLo9WrwNe1UqZCsrQHHAW",
  "key32": "3Cgqei5Edm8S26xmyY5n7TAbbYgkZtJsCPBhnzAMxA1iWVp8BhRbsPhQohKhZgBzxGnYALhe6XguT2LSyLXSqtxn",
  "key33": "2fXd8R1aT3XEivhZbcxovN1heae32g1WANQ9qmyoX1AwVc3r9Lp4SnA2wWr2TpfeWDRKtKjCYFsyftXGVR25drVH",
  "key34": "Vn4HwtzcaMZQrHr6YMiSvSN32HtvJNq9z6TTDVb5tFqCJ3Zn8HTRZz5PUCiADgiihdLdfxHGXS5fHc9GpDSBNVF",
  "key35": "scVukPaNn7LZJvkCKVtUt7LFPANqng6jPN4bwmVrDLipAbh5zreJHVWUfWjXRyzqHtQiyQY9EkeD8wjnAWS3u3w",
  "key36": "62wVZmn4WppM3u97Aqm7cmqjw4CWiyAivcY2n7hbGTHiBxDXvtq7xpKDTSpMbvAmw7sgv9tEz6rCe8xMZVitsyr4"
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
