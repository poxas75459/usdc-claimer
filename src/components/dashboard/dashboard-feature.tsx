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
    "TwasU8QZHqd3oiHcPgBtPdgejpUEVCJoKgfAXBivk6HTMansHh3SCxC4dhamvLyuPFCckEf2wyqGScz6QBa12hD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zgnpEWq6mYWAh9FmSpm7njnHUyHSK4cv4GF2Duc34BfUGpDx5tHdEd21eEas4d3hcP2ZXAoW9GSNwKM6hqtGwet",
  "key1": "3mfMe8EsoiD6WMaAE9ZbigHmBGaN7UiNiZgC2qvqChaTfwD75pW528qAxwzLP4LLAxd6justsGzkPb6w12FLvEWB",
  "key2": "2sLkrfQ7MXoBup1m19j6iV8MTCwrAuYensQVdCQfnjPyoZa59bsnaNRcBBsEyNZVhPZytDeTTBv8XejgvRUegKML",
  "key3": "2k9vpXdjVM3rXtiqvJZGHzkcEHVAVjrqP8AhL58Za53yMbxExTfo7av1tQHaGmHVb7UoW2RriAf5sBPjo278cGGR",
  "key4": "5kdRoH7YSPP99CSMoeDvaeqYUbHGw1zTuhk4s8NuwgjnSt33epqVuUH6wmhhnDfgJJjLrZkKVyK5iVfvRsWsCKMr",
  "key5": "2PDdZztCCyLmctmZxfyngMNFiBkeG9Kb9ritfxhxzUuJ8buYkHiiw22LLuZ2iY6yuSYru16SE5VtiWMEuqAppmiJ",
  "key6": "8J1zVEFA1J2rRnxLcEmJAtuSHCuc78zkaMKnzrVKDbDvABeroR4NQ97ezRLpAxaeXFbeZzDZvpqDcX4UDotkLxf",
  "key7": "238PZjuCZgjoHR68XgdzdZG5di4rNgdVT1YcSS3iYMAzLRmSFvR8JbdVXyLZxuXmeNSe8pzgcHvvoPisB1TJ7fN8",
  "key8": "2ESE5zYHFk7knPsQHj3JUPHPmWAssx7rWXnndcCaLwPdDCJMaYnBNs5uSzxYtjkoezFV3aCHR6m6TFRBEKzgKSq3",
  "key9": "5rjicegwwb5q5ieeRo7eCR5hLfytsGFQf4HJszQBXoarN93W3r9VZrmicwzy9BTxRerbTF5oBzxWq4P1mmL1qWgr",
  "key10": "ZA27E3wB3AxujYWA5HZSmAU4HoQ25WXQvZoqfP4PmkfbdZfmP6VUxPo4ekdk4qDyFPx5dufpwtKgawnVHWYGFQV",
  "key11": "37oh1or9vxHLyGZFLiC2mv8soE5jyE1X6aVQDUoAXcUagWLQdgD7ttn2YJPAhwV2NCengGGzWA6XpsUaKy5q9Rh7",
  "key12": "4f86V52MQySQiuPWAb9V1STb4J8KUJH28P2np28Z7qiTLGVAHUWjZfoLgoeQzL6S1nx6PUM4BvgK1Jz6dH23eSSY",
  "key13": "AmF4Ep4nNGgbKwdtHLhA93znVRRjtz4sR2sN8TfqqeQK4VDBt3ySgUB6pJc8G5741bPNzXddHY8zhCb8vrTWrv9",
  "key14": "3AotkJSR8peuAHBYcfkHxJ9oehYQrnTYSNTXB9d4mnb1tD1htL9kwq9RzMryv3mHsF5nZvGjBDWSsfZdx5cPH8oT",
  "key15": "58TtrGyfsESNQy2t9ZmnN9hXC9SGoSS6vsnEckPbBixpBXHwyJvkNXnbW1GohqauCP44zmbJ7doD44bJoFHN4cVv",
  "key16": "5ttik1fPFNjPHhGhLtJ9V2VqSPdHjwBCLU636dx2gssaydsUL76Lg6QaUnmKAHbkEghLPRFStp1We26R94DpYWCa",
  "key17": "3krvx1AzapnnS7GWpj7dMqhPnbvz9LKVP7jDptNJfJDpXu6UUocgeAkHjnZKetp1Vo5xU4Y3Ni8CHyqL3HocKahE",
  "key18": "C9DFajtfS6ka8HEarL9VeJNmR8bHTv7zTbE4a6s9Voq9BZFh9rFkhYUxybDxZkmuyAYB91ZCdtEpeJVoriudktn",
  "key19": "2nkqYgDpMkih6is8ZbP5cA6AsPEK4ZNWujNBidrGxwohRxR9o9WYg6C93xQxGyZo3vbSjWbBjWQxwY8b1oZXZNbb",
  "key20": "3QL7Atouy7EVXz4hqNxM1iVTA4sBBvya6WUSTJ3JVTLQtnEqv4tbMFzkyE1dfCGVG7KGeD271X27DVeAF4Q7CLja",
  "key21": "38aHgUAkkzHccH1iyb3ySevuESq5v21dCgCxpma9L4T2mETALbmpCtPxEUKKuEF58saFcaDB7CjaKoMhyGedgUp5",
  "key22": "5JLpxavFzeV94aMHoj3anSwWs1b8yFqdZW4JAkqMUVNEEXKrsq8zzoZzGAvjxZm2seYdcKkY3hDZtPbSfZWhZoMe",
  "key23": "kzYRHApa6PHKGeA8g622s4NFrCTMtMgyf1gzpE7VZ7RCfP7R8HYDWqkEDjYj4KTuSyeTohNaBiQZjR58CZzoQ8T",
  "key24": "wziozZxEmRVDz92fZiZyg3SMTo9u7oLxgMbANHPD69YXdT3vdhfnoDNRkN2zLhTfMSbS8ahE7vahey1J9mam2bS",
  "key25": "3RgHtCrznHCrE23cdFq48SxQH17Lgif3btUaRBtCtRzFQPHNnFtLsUfiTPAuo4ZWEPraiMe8b5N47Jz2J3St2PGE",
  "key26": "5q9TuswaWd9eUuEPSRq4bvkywuM2kFwGh4C3Sp7YtPvGJVCVEjewtzCmTUDYvRXhgFH9LvDnpJcCH6j3zSVbd2JS",
  "key27": "3PFkpZp7hNvbR3dYg1CNWECeS5LMCgrBotJ16GPRR2TRHdWaTYnvG6sNu2uuyLGU6xjCqrEFJQShNnVfsjRQVFAt",
  "key28": "3nKZRkh14MAwvGpYYPQUCP4Bi2WpRSG3GcAWKy3QfyDYfHcF3h37Mew1DM3xFkgeXBaxQeBzc6kAyMA8BmhtpgCA",
  "key29": "3pbupcn9hkhXvJ3N8G5Rm4JchkV1WcFB4pREe4PDVWsFXPrNPqQscZM3NE1tgyTC5bZgcZc2Be2weZWod8taczp9",
  "key30": "ZAXpXJALSBUEP8J1EAZFGfgaxBc3idwYddr6fTF4H5QY57LKd2vxeVDfz4zZ3CEiN7De1xT3kbYzv88K8jPcgP6",
  "key31": "48XjUiDmy5u9Xq1Yip4WVE4aHGMaSuvhqPYXWzTFLRfZ9nmKbKLHrxu1zihzd2qxERzkSnoPNrUzVJsRMKwMsgr5",
  "key32": "HGPSSbzemd5wzrerXUfkETeT7rkPq32PQhv7cKLroyUqEDFVKKAxekozoC3QdWFsNhNDvfwYbJMEuUthen9yuae",
  "key33": "3r7aMgaXDwYtCcQB3LLVYeusJ8nqdithVKXNinDLbjcE8QU73PbPQk1baLsRvCYF7CoYwGB9Ke1jroiK3GkwBnKM",
  "key34": "2xyAaJU1L1Y2YwEGkNdnx2z5LiW1Uun8XRgjJvtofB8XrNzNeEhPtjF2wA61Zwd92jEVgoKhqJUQqT9QzYexZnxi",
  "key35": "EuD98DG1NGyaQ1Ju5nGRXLfFfT1pqiM7QYj8KRHfcUnK6FbThTiKexahXJ8dMepx5TYSpnf57sWj9Pw7hydXmvD",
  "key36": "4NmfsNKaqzRzS4FVpP2LEBjXALr9QwYkA3psR4v5ZuiX3kNhEH5jFSYrdposx34MhM8PUECS3E83JJURrH9NHu3m",
  "key37": "5DPtwogqR5p63MYyRC3bzfCuGULNAtbd9sXEeUE1zbssR6xNoPMibviyzT7cZcCDidTGkptPjH1oW3E5ELLhHhMQ",
  "key38": "3j85jzqAJSZxTxZLGwd6ktYQ4mxG3TQWxjzB8hR2U4WsfeHZsXjyqi8GHigshGe1g8VHW6Vdr22SpKoVhHm71x5W",
  "key39": "5gQfYircpaLgSujmSGkc3UnGgtKDcS2ZBXScM2xc6rVDvwuBFTwy29MbcLrrfZB6iAMgdHbKjvXmSG3ckWCQYwh8",
  "key40": "5UQW9ALskmQuuMgp1TYxH6EwExJ48XRagbsdTHQJavjoEfqmXB4kSCfbvTdJaCMhua3WtWyNKcfdWwT63eSsSxaC",
  "key41": "3mmnjXszugdtZGEKLEWh5M2phUyUpAxhbTQ7gE8NTfyyAimBnbubzqsHyAmZWw2zNUT27B5JdgDSjohtM9cHPGLC",
  "key42": "441StzzTGreDMPR2kQhu9ssUpKSRzjANaum5eahMgdBwQS9itUAvSNGJiTKSAJH9vU4rtkEYwoeLCHwMhzrUkauQ",
  "key43": "p2dk7LGrr6QCNiMxMPfvSQ47BVsWMP4WaHG4aHBZLQcnAxEbqULE32ozAhSPBs2gMTWmsdW2mnAyEGg2RTkYNyZ"
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
