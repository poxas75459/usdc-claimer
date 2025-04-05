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
    "3ueLqjopDYG6bb7jKGsJmbW9GBKGpKmqpxJQCkiGZnt5JDxSFCcTfpu2bmdc3pZ9fKaQ5AtVLBpR7NtJ2cNyMWtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BZksTEz4MvHUdqbyhTevVitLaTFhp74j4jpdLsZh4pEyKoPVjZBGw2YCpKaFFPf8kfcShNmMbKuXeShArubwsMn",
  "key1": "5JyvpVJ9Us5Dbt2rs5QKhnmUk9rWLXSEToSZP1XwPw2QpwhmJnFxy9ewCEFYEpNXdCrqFdjqMSNNS7tv4BbrY1u2",
  "key2": "2w4dPwgemfmGxXg4pNsjKpvVTGJ814q5fupFmRRbk6aBRr8AacJVKKm3sSZoHTUxkGgwP9Y4pNJcQHhDpviyuUGy",
  "key3": "4x5iNydXeG58NqivLwpTFjWcaZZTmrK1iVYL4hVrUoNwbLhN46bPzffDCp9VjGgMJNJzDs85A9m4grMMNgZW1nUL",
  "key4": "dvV89MskaM5iKZSQMxLr14QnjAffNr8onbX7Rto3K2o5CQg7KHCV9zhHSuRkkVwJWiSigoV9UfrrgXiMz8EPttb",
  "key5": "2mYx3ib1Cmik1JPZjYAH2W3JFXVHiToPkP35win1yGk51poooF5gPFkbZ5eCBmML6NL9iqYc9MH1TRxbgjG5evuv",
  "key6": "3f8fjqBaheoZvPxYSgVpGKeA56nzYfsGWp2a7Kaq9PST9bF7EGLY2tA2nyLzv7XBtw4ARHiLU9Xvvnu5JjEjUKsg",
  "key7": "4MGvJYxpANK8B6kfDYdtmdNLtdjW5siMRS4hUJw712prcefm4i7czexdPnyQSqckoRHmWLgADDEi3FxeAfNLgQNp",
  "key8": "Bvmnnyzudd8sUnEj4GGaFWMY8gpbwTv19uGUNbm5QH8v25cgWpH8EfVTubZaiS52bqWJdW2Uo8U2otHjAq12f72",
  "key9": "5pSDhB5jEbx1FUGgB16Hjfuq2amD5qgbadPNPg8AjXJS4YZ6tAnfdqp5a6bk4BBWDahkodP1Q1tfeJBnN7kev53y",
  "key10": "49RURainpttsG1QZSm7GKHZL17b4B5d6wLmogCG2uWzjTkhXGv9MfTMqDjXoC7NJttBskfcgQjcJzwafRpgWfzgh",
  "key11": "ezNyATCozyF1NcyzFHkYDLHy1AFHSkDEQt3Pbdv7KvPiepN5pcnjfebALHp7HPQb31gsaisQsHzY8AGyy3otcVw",
  "key12": "3qvbRVbqUWUFLxbBWTCTcDXEhuMCFxvPQc2e6snfeGvomEoEidzAoo8yYshRLBpeDWKNnVZqPA7JRWSL1oAK4UaV",
  "key13": "3NoS2EKbdWTefeEEjjFoEosAiSwDAoX4hjMkT13myWdv62XJTL4pTUyBkAvssFMf5UFcTXSkShxrp9s9hVuWNYuK",
  "key14": "1xu69MKgY45uNJxtAgb8rj1Mi1GhF9TAP7fJHt5qx37Df37wEKMAUgKCyaC7EGHPrPANXQRTRCpE9VFqzBx8ZMW",
  "key15": "4SAaS5hipuM9139GUSzNzYcJTvskh1V6MS1hx4zFN3jcR71H8fKGvYjST88sV9xsYcnZ4QVstjgK99GUnVZGz5br",
  "key16": "3o3VVR4Sdzwy3dAECtGDHvjCqQf6LspC2mVp1dVyPirwWyRxJwd3K1WyDpSBW9dpn8RpJ6sLodpc1mSSWWg83e6g",
  "key17": "3rhrJuvuFpSkbKTXShA5U1gJr9aLL9htKbrpBCoEPZqTMX5VYUTvLj7TmjKfGm57x7mGNCkQkCazU1G2sQ1vWuDR",
  "key18": "2868zKpz8L27P34bLzZZZFnrMcG4jYJjXox5k2eJ62b1rF4TiU2Y7DfRQrFcsCh7KDkZH4EwisqH6wPjX4m1oUzM",
  "key19": "52yBjWacLR6aMTu8Xi7jqhQgpLLqLXd63haYHcYjzHD6KhubG31UHfzNmQcSZZhw54pHp74aZQzFYZPt65jV8Y2b",
  "key20": "2tnRCaiaQVZZ7Po9SzjjncqmUz8asxMAswqJ2DkRbVVcmfpM5b9Jb32RjaehzqwRxs7MKDVVqPqD7WGrQXucCWYy",
  "key21": "4vhcmpxE7f5YDW9DQoQSdyQwBRbhv47zTVPZUuNiJL7QesFVQee1dUubSgLKqLXKAFh5KPSpV66HV1BTuBjPu61u",
  "key22": "4N7TpERvoF37YexyZX29L6h63W52swZFNYymQA1Den9bZNjPrHER2UBbfsy7cnCwXBafXYyjKYYpNA3Z1h2Ycqxa",
  "key23": "3XEc6KYVshypPjcfHCDeGo9eZCqxd58grjZCnc6PGntwUR37c62TjoscmBNBEgbr773oaxeN7FdKbKywULkc5Doe",
  "key24": "2BieuCJK1f9eX5T3vingFWaWhBWHZaa6HgJXLNTcJKWPRvRmC3bYxQdDL9rRQdeT4FPGjWzdV5NvWmJ2GqLLTo67",
  "key25": "5ijvzqik9oomvw3rfjWBREpbyrzxS7AKPsN3B4pwZZ3Kn8omMELzsdD7WRC6FZg2gwK2T6KXFbsP4vNjCFKkkq8p",
  "key26": "NG1jtLhKwCarWvUcSg3DEwRWvy1jZdBKURNaWKkJ1VZHE6J8eSyPFNct8dGxqR7XW6JD7XNyC74fg81G6NVjnsq",
  "key27": "5LdJ1RSSd3S3ZVsitfRa8M7svbmhK8bB1jDWscAG8GFnzkb9iLoB81paAEXXfME6gpMZEFhgRukeoQZswEwkiWXU",
  "key28": "5euRR4X8uMdsnkMqYbQMbLHRQ8Byo4rqmVTr5DFP3Rjzf5fiDLzxobUhzcMvmDTZvHeEZm3rFfEZ5q9kfCzRgvxs",
  "key29": "2hdESpK3AjUM16BwgGLHMtq1B8zvbSn7BGUS4UELq3GEGr4KVySwt72XDTpNiB91vM3GxqfMU1zSzYaNQRdL26G",
  "key30": "5LJvMMAub5T3ChjxbeX52goQYeB2Hm16JUBEggbmazaViCumb8PJNpu4LdRcPh1ySmZvWAaVrNrmpVQG1e1EL1eR",
  "key31": "3k8FQfqFiRpC4nbzcCrLoHLQvo5c1Kfo3DBt7ZjGoPXUnF2TjvVnP1LnofP9GsMc3mJPx67UKeFyWq1jNNuSw4fB",
  "key32": "4qnhDpS6JCoWfFUpVGd1TRtVT4RYMnJdRrdBxEAekA96fNwcUB1JTWpL2ybZs9ZjS7aAUhnMcVGRAvKr7XTatCrQ",
  "key33": "3NivGcagA249N4JbFfeccjis4JjyshUPzDKFqSe3pQMdKx3PbqpWQ6CtgXa7KMveBFcV1BTHpC8utBUjwreyWshb",
  "key34": "45oXN1nUS2DZ9M4Ym6PY4oa51KYj9SSmjK1CLsqTZDBnQ5P7xq3kK6Nx2UnHq3FuNvyYLnX3yuGstUm5ZAnqSz7x",
  "key35": "23bqAEWLh5J1kJfc2k1hKTtx9cYMkyfQCKAKvvy1sK4SaAowRNHPuCMrDPGtJfChgu9e8eCiv1FqsSTUL5ACxJ9p",
  "key36": "2rkM3t8m24aVTjDuXU8HXqUdQqzhUsNobKnWkF4QqWn1RjeTeUoXj6ickAzWFBFuEzjWZRvqaQWmpWYokPVboSbS",
  "key37": "2Stnfj6cTugkzWcFqhZpnma4jnrsm7NL1LVSA6XXLf7Bvpmn9wnR9TuyDc2CGcZDPYiRCe4zGcYeC6ghZZfEqApY",
  "key38": "47hqreuLMfxEuGA6ovET6YFN3PnqCtMJTZqnHaaB72VhzJw2qrvFQJ5iMwvncc7FwuJCktEs8YgiHT1zxXGoHRzb"
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
