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
    "5ckcJpAnA422RZBxLzGbiFDmZZgyziyda3QoZRK5rrAqzA3P7D3CV1PW3xvCbVr9im9mHftxcVwGnyb48majuZto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CHondR6nTxzqj9WGYBjaikCbXdxEzPbe5zABYfNXxrqF3XH9b36RJPu4w3xvL3VpyXPtQ87GtrJJyQz57K882hr",
  "key1": "WDB5ZVe3i6uMVvyoU8JTiD9sftNsU2T7N9zJvt2fHFwyyqQwTA1EVyKmV9ji9pMq5TA3Gpe4CjMtNyBAFUjC3h7",
  "key2": "33WP5dANUL71hoQ7KzpU54VGpw4kJMVHy6G8mYPFoM4XquYnr5z7tidaswo85b2e29Y8mKDUo7ve1pqS3hoeE8AW",
  "key3": "62Wf9mBPsguZfWsJS5T4PDTqhHRUxPfPkvLFHuR5MGNJiK5V6qYBCkcqhBK16EfUeGFjGPf8uoFs1z2aTKW2cfvf",
  "key4": "3YnybGKW1iYkMGuo3U6F4UatK5RXyNWFBbz3YAEC6Ta5atrFzFJwyTFfeMerHpaQoKncvzbG6CzX6cTBWJHZd22T",
  "key5": "4MqadVaSsQavYHSE2J7H3ce6GHSCVgP1DLLHA3ycZk3fzejKgz8HNXFwQ6ZWWBUBsKG3VNwG9soJ9Vc8EtJcQKvE",
  "key6": "3KJ51pakbDhdoGFaAAvSkBCDgJGtuCFLFiYWoHMFUh8pKzp8SwxqZyXqmpHu3GSdCT7V1fAVUCZj7C1t8qK1XFmR",
  "key7": "4WbTmcRyBvdYNdGGPbuo46QGeStFtW8YgPZ27xtbENGhwq8pJ72n9s691igKXFPjRS5M6ytmaXabbxtZbJAMWVaH",
  "key8": "36KqRambSjA9RP9vv6C22UDPijLW5GSKu5qhukxVkTaotkwQTcPuekzExb4HBNsmDA9X21L4jYK8qjNo7BF3zCue",
  "key9": "2qDS6DzgKLCei27bnPFbZSkeQzGcYKKGk8VEQWn9CvCb5YbjQwxi4iB5LwmaAaR9hQP2jnrsTo8wnX3FEBay3SKC",
  "key10": "4Jxp1GQjZxYKYgp87rzaeLuH4WeNTmYE9M79rP1kGGJBvYB89DcgGNCesqnNtBUDTmiCTtYwuoMAf6huoFzgDVxY",
  "key11": "2k7xwiUbqauohyRSMQfJesfGTHUWwJ3vMek1pScYZap9eYt2pL23pQAN6evnjC4DaWfiVoywuDmnkVKfBMMmXD8o",
  "key12": "4jVZYb9qbyopfowNoWwBJ7wttApVVYMFhiqeHDLwbs4wsKTZYZmQ269djACDNf9gsEXyQH48mMeRjvDWmULRp4Bu",
  "key13": "3hcjCmMFUNvadRT5S8nJSQHZWJPE64NyzrM29Qn6rvC3gXiY1RqqGiJXAUHXrJ53p1SPN3iGRhYgBG6b4hjnh4mm",
  "key14": "4tLwDQvzC1YtY7JHKbDbhhwvbKYBYyhhb9yS2AGU2aagBCF4aNsDMqaUD2zVv4LbHGE7sbMqiEMqKrAnJZaSdYqv",
  "key15": "4wXH3cgrStknbtMZAK8qeECRLuMg7uCkcbYabtXK5ZQ9T6CMT7GAgtszNDhhDdu3C421jwDjHxL8Y95GGiQLU9Pe",
  "key16": "5r3hQQ1fXpFhz7rTotcoVAcH9WkM46WEFosCvVSTtvodpTgrrSZjJXZSjNXRvrpibVXM78zRXQJaFTb1zKVfrxqR",
  "key17": "2yzAvCAcG7EbNTsVJdq61TE3ZEGsenvvsCkTBJHW7uyJFGtAJ1RbkgN15otvCHpTGaRQ3jhWDobHik14dekdk1Zd",
  "key18": "5LabSFSmuyJ8MKJEzwPPUTFjEqRmgwStZNiqWT9Bj92Duk6gQ9EtgJX3SyvDizC8smg4gQ7ePsZ6BsHa61XZsRyS",
  "key19": "489VhgkLotie85Z9MDG3KkMm2H4kWBHM1QaY1Mv9N51tthFqzBbyFm9WqJTXov3jVXqKQEzUK3rp72BoeJGSEB97",
  "key20": "44PpuGbWm8sAEuMHSG1JkqTPj6PvS19wixu19g9yEzpr2QyGtWfRNizdinL4vnXkjX4S5m9P9kdbrGcrZhQRK1s7",
  "key21": "4WiXAdgWyyy71gRge7dJbaKg3Ab8sxxoULLUmCqLQ5RGCDh7Hf4DVU8ETwGCmyJD3U2ZEdbAyvp98iJWRYvRgAA3",
  "key22": "47599rF74tHrJtFyRspWXBYNDtCtvNZDQm7jSjG4riYRhtJWDVsoUQi5njBWXipf5vb1rexwkQ7pT33JKj7EZpLE",
  "key23": "GZQg7HQrRPjg1MKEWdmwXmuMKWcSvVi223FjNiiG4JYFqEmeaZY3Y1Vt9A4rwqQ2Mr65GVpxiYuY8ZwcfqYKshL",
  "key24": "2zns87kcFpm5oq6D2w1v2Hc2AiKj7DU1mHuABF37sWH8jCXgtTHjnLnRu3gzr1aWodNvCFE7jsNFkkU5eSkwvnFU",
  "key25": "2BHuCbN4yJx7anBJKMgdte8MhstCn1r7qQmVGUrMz5BJBqw5bXM4AeJkTy62hKjPiPrLqfEJsde8mmW3fhgdEZuW",
  "key26": "61uADFPnxe1QVda2CyQiV73Mow7TeWSkP1Tf9Uqzv2H2upCJzUrtwKta8d1JXhskWYWGEEqbMFYmmmEKtbQpGZEH",
  "key27": "uzvYcFJwMWHinfdioux3N2VfdwEN9ENjet1h6GSnMSca2UspMP7R9v9ckuHkFQ1e36XJvVMk38njreEt81Y7vEt",
  "key28": "5w9YeQpXgC8pPScJ6Mors64tFsBxy4dShC6yRL4umWJA5RgJnP77r1MwvjpHE8Ap5Bm4KxJApVkawvTrf8DW9tzH",
  "key29": "4usC4gpXLKZ1sbNH5T1gxwyY2BADSKWa7PNNCjfYSyzNmjWWZVtNYzHKcCXQFR8PG8pFvRQ6aPCyhzGtr3X9mUkE",
  "key30": "5zR4tb6Bsgdtw6iMWVXfTcp7zAtcvMNDap18b5C1EiVvncZYzkMza3MAqEDrnP8snDMBdvqFyaQwMmV7XRE8ZbnJ",
  "key31": "5xfgBLVxZPv1374RqDELAg21MRj7u3hueu2yMHzKutYtYfKdCyHSUopPSU79D72UcGSdzzHPLLRQ6zKK5s6irD9h",
  "key32": "5KEGXdcmcPJih1Zkq3Vf556zJzqBQ8JZLtwtWMMj2vMPaH3vihuzQp37jHdHizkZtXj5Cr5sMHuPm2QVrfeWjtP",
  "key33": "2rGmHk9ZqdPsRVLJZ5W5kXbSVvLwKTZFEdNCAiY6spumzP7KQ9ckyNyLiHKU28RezkzqXZCqufXgHN7pW9N3Jdem",
  "key34": "46ucyu3XpRXygMr3k1aLfWjCzGCHv6JzQJAA8JYXWCGPaoZmNBmvWyrNkFodWeMtQBvbxg9JAQe6cv4M1Ud5eRim",
  "key35": "aRCxGsQHfFPyKztcW8v9ndq2n5H9PM5MWScTFrNZ29z6Wq8BWFvPB4igJ8BUvBGMMAiFvEeKdgw9fJ5nE6R8V4C",
  "key36": "4QbNRT473B5AB9xkHwZ99fWNSAFXVka86peRGTqkEZqNamCK8drbpMzkcqMT6gnbeZCjZ5XeHrcjxwbpC1XHaQ4b",
  "key37": "2PYJsnnULE9KCDSWt8S5grhBYA3GVuzuDgpku94J1BKd6xqaW7LXJmUTDRdt27WKeL6XMGneA9FrZMHQftvX5Vmm",
  "key38": "34MEQD5MMuB5g8j95giT4PdwXtz9TWJFSaAueR6FxKTmHrR3wX6hZNzf9HAmToFtwmwb984fLPB2vCHXDSEyijeh",
  "key39": "2EgTuES1wzwKCLjs92gMAzwXWuRvW6i7MZrxEHVn6MHoQZNRruNn3VjFUqKh2QzPSZxL49iPACz97nBENuQiDYBY",
  "key40": "4EvRcKvarwMkkaQWHPmPSpFDFwqWH61hbB5XMvAWzegJpN3xvdzBMYJokTTqj1edFrzJqCPqezLRGMD8s69CbRdL",
  "key41": "3GzUDVp7n7tXG9GAP5qm42MALxANBb1Tjc3eNktr1LjAfyHwXKXLgZ7uZd2nxiYKqtBWmmtsjzQhMCU8c2ZGkhDs",
  "key42": "2fW72rFaVEFHsqa4WzTzubQxuPa6vToV3nom1oE27M2fB5JATMWyHKqJJ2WXbhoMExEH2rrA1dJqn8QZh16WtKhV",
  "key43": "3xUESSzDk5ZqbS916jSa8dzcCiZYmQB2koPKDgkuHYNQDm7Fht4FfbdEm9y8tuTwnUj6NFMcAuQ75QCjcT9jbfQr",
  "key44": "3XmmyWg7iYtrkHvwU9Ah15kSLwZ2qpcTshACGfcHNHPjZYVCjqsgMAakoiMhtNBVUkudLVSNU26H1WyvCZWkogaH",
  "key45": "5NQbniNt2q8JAeF35kBAa4dY9Bq13NvDhD7MS7nNzZ6NbjHPsffBqcx2nRZ1jAEHk4ar9F7tsAMAZ2eg9nuZxjAu",
  "key46": "1kLLzpapn9TufV32rmvxfoiXStmxDSTFb2mVDHV1LXNR3LrrkRGAiZk3h8g4rXsRm3yTYcLTMqVDXFx5BQyRX2f"
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
