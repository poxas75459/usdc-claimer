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
    "5yYS4uNSi13WjstqA5mvFy1tnXpqS7vUMAbh161HCbLN43JCxddSmoqj9w2h17BhRY8c14uqEF5zuK8MG9DCo2ZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "656WrT8tn53T4k5PzXiikdHv6mDQMj7qa7T3bEpp1sorY7V7t1rxHNHit9qzsjx7jLfmMCX5dEuwZUJLXNGzYJqp",
  "key1": "43QmM9dU4SuVyG3sixxLq6DHauMgTtwzji2kr63iyfWSRPg2bRxBgMxvZhitxD1Tgm69WtH6GvpE1oRSXiF4zhUd",
  "key2": "3EhwLCrzJCwZzTxhYa8TbLp7PitW37LjQC3ptUZ7equjS1oZQAbxHVr4W1dxeefjJp1sAosTpjnw53ogpbwPQHv5",
  "key3": "2s63wEJzFyu8m3C654qiZtQcMoW9aGozoDCU9Z5BkqBw4kLNuMHUK4H2qgemfWJH2T36q1yyN11HG9umfZcxu3Cc",
  "key4": "5aQLSaGDmiNbgymBZpiyBdg4SmB7RPMnq7i8FXMMir78sjaHAKrA6p5TSfTDtGUrjp3MvBggkZs9SeQUMoQb8uKW",
  "key5": "3qBJafwvhfJ7yskKf3i6jwidAzQ4rSTMSBsUfHYsZpvTcdKFfzM9Hw3NAqAajMf4P3rgQpgaWftDXQdYXLFQmN7T",
  "key6": "53XQNKrxzDWJ1oHzuqLwCQRyByC2M5Mjee21WYMXddJGwsvxNXVCaeiQM4jgyv4yFmHemRGqM3FHMhqtnupTYmot",
  "key7": "5a9yy5oEStwj5tad29ULjwYigvmudSr1avQdvaZmugc98F5FpqAa8aq3Piz6jwNikJLwEEfmdjCCwpNM4mF2HxXF",
  "key8": "4gtNq9EJNwLWR42txVH76VEDyPUymwWRVZxLv4A5DN4sE1Hx9HN4n9khiBfBn6hQzvXSSHWdTmeiXXUZ2KLVU3Du",
  "key9": "4rkbuauPoX3JJm2NPcpURzgiy9wV4GbpPtqj2wc2Hy5Dc5Am4RgD8N9YAUpXHbjqtVQ19gGD6gNupy78J1krZ8L5",
  "key10": "2SGCfjhj8ELMr3aYhFj8xqXpzxyf82MYec9bLdmEdvKLdsVgezkAoB5JUq6SycPM4sLgT1JKnH16aeKs6B3DfuJ",
  "key11": "Z4xxHP9J9hqCktsy5615Y8KYBhCvKTTGgC2JNW88K18UwNjTtuHZDJwDtfHoBYCyfEy6aYfGSGtiZg2VnEodGfb",
  "key12": "5AKb9WzV7HsVLtLvuZ2ifDdeCUkaxLYjgDiijFspn9Qq9zFNWgUEnQD7ELn4cLggGkr7ZJvyEQ6LgcgFsPUdfPZq",
  "key13": "2o7qPWcPS3BUpC8P7hNae6HyJLeB6sanPWkZpzA8GDE8uEBEXonVVN3GzFuSR2Qsm2jb5evPkAJL1hxH3b8vbEjZ",
  "key14": "2Tu44HdZfMhLzpM19RsFJfxHdgysRYxV3rkEWr4Zopze9dYq73zartaxS7azsUaXWe3NkGdF933j4gzbMvSJKTuP",
  "key15": "3sWWKbKCpGXVmTaWKRJt3TCisqsMUs8WfGq5qBuUuVqVwwGybpwBjycjVUKinmzNbXjkFoFAYX8fAtXsg252WWy8",
  "key16": "vMaNYzhzmn2KH6dLmGmCfjr9J5NUn5mQD8biRsSGF6RFNdxB4BnMQXi2Jjt9Ne6io8j3AEXRPsNZFzooeUTykUz",
  "key17": "4SVQWChQQ9CQvYX3dd9p2WRwFSZPmyxoGdMEmUof9cdzzzoWVCKGFTsBAWRBNDWgpHjWRhCuhiAuoKbksme9c3vT",
  "key18": "5pXkwbGToqEUtjsSKzBx3mK2iSFv1bKgNMiuxmdFqmPtZkWJ82waXMRZd3E1amyBH4ouDVmL6SVAqyNWmv5AnxSb",
  "key19": "5QJ6MKKC7aE7cFsc7WRGfEcvcVUYan7J4ciXMj2ug6Sh9egkB5VAckF7FhMKSCXirUFGh7ZMCzWw6bqHtDZyzshy",
  "key20": "5WCPq57aHx3awRyaCXAEraBL1s2fpTFSzJJwS8yQ17ERCrKAR7MehGqpxZPzc297MyRZrAKLJNRGzHYTk8iRcyHS",
  "key21": "5AR1dscY1T3MXW8JjXPUuPBm83oEujXs1ey7hBE9s48bNTaizpBDhZXKy2Qn5tCSm37XPVs5Bbud6vAcMaK9ukUx",
  "key22": "4BQ7DMiaYfNC5ryrEX6tXwQ1bz3WRDJNc5Ym1qrssgya57XBBMwZL2se4NrtJujkNSmM8mjszeDxBsD1Ty998tR6",
  "key23": "2VroZY46EcK1hEVGrXHpqZQ2Pg4QtAGcsHzwQAtqeiFPSLgZCu1y45PWp7vP8TSzJmbnHLskdLdHXuqPkN2uUZqd",
  "key24": "21HVd9aXipRJkoYri8re8DZvWRWhYW24KecCq6LakZofCbCW88dTzUnJjjdDCyp1kK4KVAzsnkbfviwo9d6APf4x",
  "key25": "62526FRLUF9uDKZCfDCeDYUpJc39FVXHp7RC8NgwV8ojnys78u2av6uVCV39BP7fTRNFT9LZHxyTebpUWTKu9dvr",
  "key26": "2yrniDyr9W8a33NuXUSKuaWZjPKXUsENPueErfUhJ4ZdeSLhVznysM6ufcCJamkpxmUsoGpwzwK6SffR31EJ8ZUr",
  "key27": "5ghvjWqB6747K6QDBov7Q9yMYMg2v6BwRpdwAr4SA4JP63boPW93FGZAbEao5KYPNp6wEFigHSzMRuFe5Rja1BKZ",
  "key28": "7DYKc6WZUjCEYHRDGF7YzF5nj9caBMp8uN7hbZ9UaoFWrXztqiTBfcXLockJde3ynPCL6zYftZFtf9Y82uF1wSW",
  "key29": "3BGnSobe7MvBhddRLg4JRmeUXZKE6v1Du49mBd7t8dbWAJ6nVr3urit8J7J6VX43N69Di4VdNm94mTN2fC85Cxu7",
  "key30": "R2BvF6YFyeBuGwfejNwLEXzAoVA1JRKkrBxQWHEdS2T2j7uQ2xJYnMQAHmUdqAP2HDGuK8SEwyVyJ9ZeLxTofwp",
  "key31": "K2jMTz5sbuUK4tqdStC1m6WopW9EAzTVGR6nR8NmcwwdB5oj5EYQEKQwY5P84P5gyQgADcavCBEpY3R7E7bGRLu",
  "key32": "5wzXbQk3sF4bibpPcJs9WakPYyVvv1iCS8BQgvnAdZNaoUXqwsakpvD6DvFeEE8hhrqYbC8fjrfGH2i9nJbVXQvC",
  "key33": "61BA2wGkHngndXtxW6oNsQGj5QzEx7XwiWUyqAUhRCJaGBQiPyt8SpNvvP3ykr8nia579DJsGFLT6TGj7131eqLP",
  "key34": "5xw44FWyiRNbPnFBHSVeXNCFGVef9nJWjLPTUoHTFvy1m1ZNTXxWwdETVcxSLLZGaxDEAcBExSPDEHxzojjxTJQh",
  "key35": "58gWBRSGk2vjmqpMj94Rn3AuJUNziXGbieyzd8qnuPLXH7f98NFJadEZPBSpTGdpzzTDTDx6kHtQ5f5R9npeAg4M",
  "key36": "61HN1uT357cuwT3WMpMgsXWEfq6uXPBNRYF9VRs7RHxtTZ9Nb4o8ph4vsU7uA4gPd2q1nh6Vsx6F3EJ4vyeLJyW3",
  "key37": "wwVwqGXDs4enTCE7i78W5BJ8nxmcERbHFwABNLQhwYyTorFLTfREjN1oRSRYHhpbJEFtT6MWEhxuLDEWjhYZXgP",
  "key38": "idUBLiYG8bY9jNhgirrBnyPWfReFhKxzSfkw7BsKBf7ModsKt1MiB5RDS8fqCjpqY9Ca3mqEqceNu1GqoP1RMww",
  "key39": "4HeuNGtVTyFDGjNAFoATYxGeviMBAaP35DfMVeaPhsUB3ZBidmybGXojDgRFGt8L4i2SounZWDWgVdPyGpRRR8Es"
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
