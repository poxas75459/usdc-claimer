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
    "4vnvWuZH9eQyJG4GtX1Buuv1zC7DcSsYkPA9x8t2o2iUTgMGdfDvC2VwhRDnkPHcZQCnYyY3btbzBtaeu68xuRoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21L7DwnixfyqMchGkmjKuqxwBRqpccnVJrzNx6psSJ847LXEGqcYdoTCL2XfaNhgtshuiWa447j5QDXovMrNQHLV",
  "key1": "5KzEgDutvZJkMq2xb8QaufSbmHF7MYFKTBvuEViY9zHk4Se6VvEs5S7TxeQ6q3PJoWonNEySkX2XdnC4Jx9XwRrD",
  "key2": "4rEYXrziJds49UBrAr4iGSp4pvZi6suHCptc1mkhwQQ3QLLepAZXBevdUVdSWLZUBV2UnM5Tj5LiBpSafvBjhRPZ",
  "key3": "3j7MQv9qBfeSxfaFmXo3Xm6fZM8QNegcWp6uNGAwbyp6gLpzmw8e2PQAL3sBMHNxMALNUyFhSosbtkLgpZrMGyX5",
  "key4": "4kB3FSyBfTuTy1Xcaw3zwc18srnRSyBpNgnvHxa8GB7rg7KDYyXQFX4QZCexLZHyysKQeifT2Uudjt4yWpvy76i",
  "key5": "5Gs6XL5woVHCPhn9RA4UjfQAX7ae4zahnxYkcC9DraMxLpU2sZh4wAqBwseKmcJDFTBq1kUMhkQzUja1p2EZ22kg",
  "key6": "5QTb6q1Fr7Y54BzRjvWA2qjxTJ4bfvXWzT9YRbG6aHRiYAHJJFTnGVoyySdgG26ZeEbeo9Gd9vxuB5w27gYgRWW7",
  "key7": "rdgkuZaZQaRAKXxqRo8zXsPN6pQbKqyZBu5uRVVHYY2W9VKgekvDchyRYDxCishWAYFMbYmYEPCwDBqSc2SSWqy",
  "key8": "3u5hVH4m9bvX2MgLENJ9Yzd7BRgm96K5N5kB2qE3YjNXs8azKMCygJY5Dg2naKuTYtuq1JTTf7FGNXydpeHqjUWb",
  "key9": "2qKAgG4jk4ovhZDoPXSEPQd7fggTMUBqhjzGNYVHKebLxqqv3LLTxAYFh7C3XjHZpWTbvMer4tWpe3tcvUhHcEpK",
  "key10": "3CQCJvuUSuRSh5MfgMiPXKVg6Gd6riLyWFQ1J7xe6SX8LHABux1u6GFhDRC4zqzXh6N9cA35VbBPrsQj6cLG7QHu",
  "key11": "tLnNeuahxcbHqKGYo5Dx1F9iduHYYkdeiGXNRtkhnKKxXp94djY9iMPEyVjQthiCwCKhgpGpkMbhDTx2tnhZ9ix",
  "key12": "4y7i6YxozHjxBeHwNWJBWbX1j69DAzRehqyUw8VPCUUtY8UCHxW3DarSZscZgZcirsbGhhSBcm6bpyGoc32fYqKQ",
  "key13": "4UoLEPH4Ay3Z61dLNYPoQYNgazKtYcckZtkZHghkaE57uWxRjW7t71jciuZhWDnXfjmzbH8fuKA1Jcqimq1ybNmU",
  "key14": "X6Q4pQqz8HqJxbucsog8U9hAxCXUrzbvM3Cop7zJgh7bJLUuAqg6YzLfPFiAmnnFEbNwUUQcVtnmZ4h5wdmU6SZ",
  "key15": "5Mwn2foFzphanVLgZWotpFJ8wnPdFocHnynY3717KYmFwgbcFGuitQG9LJvKQCofAzQMrGtQACbboZfnd6TmdMxY",
  "key16": "2QKju3wopwTkpjxwmX7d3ahg2z881xWTXujeqnVWqGiUJRnvUQW1ck4DFZxYH3x1JrN4AaTvgwLam5kkNkKQhwoW",
  "key17": "5KAznvC22R4z92toXuZ4RAtMHkuXh61GJWrMzHmHnMkiUqEimPBVxhNffbKp1pSnvqBFd1BiSAJpubFyqTVBkXMa",
  "key18": "QFXgiCfAjksArM3ZCNGmwFCXuJgS6KNs811LeUBJx3xrCtFNuZNx3MS38zmG6Hh6wAXPxveRzH3WpoMC1AwK8oe",
  "key19": "56njFHupgrPePVssBBF1LHciJLykJZd36YzsLxY52huHsuPvsos6kkvJihvnzg4yXx1TFNroR3QphcjCH6WUpNWk",
  "key20": "fdSeStkjD27viaGGTCgSa2zLQ8bsifcXG8GCohp4vhTbpT3dCm4gphn9zEARBiQ2e4wXnZyAiLczzT8jDqjvrDu",
  "key21": "QL4rpC1U9kQVd155certNPgfpk24o1kLakQYjXEnjPmEUu7AgD1vEAUv18riLM7Huq4Dt8UD1uyA9XyWU5JFhwL",
  "key22": "67LpJcrqTsMwLixg8hciEymtNiHytUBUFQL9Hm3xxsMY3jaTCsJYKyiu1d5tx8R83JK7xq6iEQLFttsy3yXpkwJD",
  "key23": "4T1G6jbBPhCFnVmreXUh3Eh7JosFDC2328TQ2mHphJN3V5VjAHMPncShEPPyppXkSQZhomRfzzas64utkDeoxkBy",
  "key24": "3HM3hagonYFw3ePCPnp2Td4xxoHu3DdeffU6P5xymxcHEsGnMT5nTJ8uMt4NSSZabAtqu3G8KytZJSz64dxnDQ41",
  "key25": "EYpUSWUUN6R43j18iWCB7Wfe2RdsNtMkWJaafCvYvsVtGpPNeY2fLZoi7G9SMeBfNGpr5H5nKQPVzBrNW11RJPz",
  "key26": "5J2mpSkysBHNBdmPbnJPCtcRP7vzLeSjw3xsRu8nA3DdR2gJmwZ6uF5bGw9HwzsbnGGD2w8Jfs2L6NoqxBNdSx4r",
  "key27": "2kf51zVsCsQPjd6VGzATNcCHBrTrXEqxiRqCy6fpS1JvZZmt685vzU6qAHGPKj8WCQQcm4wV4mGKYKbR9r8b8SxN",
  "key28": "2zi5JCzBH92NiYqAQ2iscFJnfkQnx4bo3MLUUFrpQwC6wejcvo2Zk8HmgxvoHHSMRVVFM4wZsM9xv9ahZiBKqHF8",
  "key29": "3Mt6iEXNCyohxeZjtdq6DE4Byuy4GC6MN8VVLFtvXjFtrRzodYovLYg31Kf8roY7w88XjaHkkCvPU1crNJG93rVt",
  "key30": "5985ujyCy3xrC14gQu67gp9NZ67o6yeZFyNuMPUZvbnkTQXNbpAdkKFNajcVHUoYfTpi8ycfpHfZLbcLybkotjnG",
  "key31": "3Kfefr8yaF4iRm4VheqZxJtJB4bYMaaBUX2LJhP1zC4VZt7FrqkgfkVZ8P4VqJ2iDEkU13PQx7UVfNspdvu8HJ5E",
  "key32": "3TXtEGFmNSvE2VikqYLURq1f9M89zutAafAfuyz8kSyVZmfdSi31TRcbhmu7VyMz7oAa3Pht8wmUYLycX7jJ21oy",
  "key33": "3pmXbubZvxV7sS6BsAMSAMCn6hkPTxpTLBCTxXdfBoGsoS4LFHY9MtgjdqCHQyoXAYpsNEmfhpnNo8kHLVV6JPqg",
  "key34": "5qWuFHKbvAH5b4uCCFeqsVWewZHM7LYQ1q3mCWLcCK6CGW14QDY79qBFyxfDUPzngNe3GES7bnB9dXnJF2nrTkme",
  "key35": "2TQqJ6MYMterZW9XasLQe48DwrTYLMqh89rg7uH9ZKNeAXbn6KH1MXbVLTL1FRhZ8GtuJEbpQZcHCPSipXvPoZzw",
  "key36": "3rnKRCnecC6XysXQsf37HNZyc3gdtzS5UmhefJdFHy8urDjPbTES94ax7qSuvn6W1w3iZAzQhSeVRad6ZQ6t8D72",
  "key37": "4jpWNwPuSmxu5P3n8y5oXNVjUnk1TzMhktjqFkzUd9Rcb1S9Jdj9bJNr9nY5C3QQw9Bwktw29i63gy2b83znrXdC"
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
