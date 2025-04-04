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
    "4876UVQVypnZFyDJgqPshiAnmeD7uhKScEdsw6GZyAoxBV2LkNiD8LsJEo61ed7EEDrwWMYkubeFLYHVrg7oF1d2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y4EEf6F3TW8pv7r1gsWkchN8zZUCdL6UjfTRNHqSNUVk297aRZk3mjQ3vQKvj1jHRSB2aVavW5LbZXt86Wb6hpP",
  "key1": "4Eoq7bW58b7Gjodsu9EyvAtg6bHJEiV5iHEXWsCcgPEkcYptzQ93tdEqq6sj9SbsZoWGwr9DvS28z2k7Vrmr6R54",
  "key2": "3Mr2Y2PyT7vHNdUTpyKpka9sAodLA1qabVRWAFSYMmYigYefDPXJyPvcKuG7dqRkj8u3Cwzof9XUei9xPN4f5KTF",
  "key3": "4XrJKTqqzm3ovQLVJMxQNwgySpSW4bYsKAuhjihwdFVuX7FXJC69Pm75sZn5Pgovrx5V62s4HBwkX4egx9CxX7Ea",
  "key4": "42VhYGHcjSdQcvfnh4MbWTR3T3zgPTVwDeML8Sk4nsughQgaCMqa96bNpRcEEQVjLpvi3WJToCPzAH5AiRU4DUJs",
  "key5": "AUdKidbdWqsbakCofY2tLL4Vovu4u1Z9ssPcVdqfTh6fhnttfYtKPkXYrH1JqnshJHn51z3LQchUbf8wgByr4Vk",
  "key6": "suz72BNSpkihGXDrMRgZzrAU43e2YrC6XGW5FJ9YRNNGBxBgBmdyNwEuJrtv7TW6skqeyj5Xu4gJ9GqHvrDDeNh",
  "key7": "31gwkecAKfuvWwzJMjibhSJhcyzJ2ycACKsU372MN2myLaCiHzoo4waP7EpVnbhdyNiEUgqavyaiRytwQNKUm5pi",
  "key8": "Lh8kQcJiD8gqgcADzS7PCcQBaX6zkngZX1iwMFG61RUVbsiiD6PdTUQJRSS29bUs6B73PGAf8SrDcrYie2VfLmw",
  "key9": "2bF6nx1nTrDT5Bv19KoNnNfWN6GFBQ3q5D8QjZ5LiNBWt8fLPC5JSWLLsZaJmWCh3ZRzAfrvu5T6gQUxMRwv5Yp3",
  "key10": "277dquKByXxF9pZ1AVP5gEJ1JmWjsbaZVskXEhff9MGoHAzLrJA8JgyPJEZ5H7unVytsCCUNqT88EDqzn5FbT74k",
  "key11": "5TAjgVtTXV2wyt4SKmoKufU68SA1zc4kPFYbwPqumLxdQ9Vt6qqFDtZrA5uaUzSvAnRhg7ruD8q8Ec8DCXhvBpwc",
  "key12": "2hg3FwZwvYVWSEXqjKoheSfS43hbSvAe7myZUp62d2ud3euNRq8Gk9dUsd7spcGy2PBjeLJfpBUzy852Scg3beoN",
  "key13": "QnWwM6SHvHfLFdGNkWuNVFoDGog2btefUNX32aVjiiRxKs3ThVVhj66eat89EwyGTQ5j1aveLJkuAQn2Q3C4U1P",
  "key14": "WthGBCBkKGqCejTcEs38kZm34KjZgvP2aZuRzcEocWkSaoMBoeMwMjTV2NLYtRjKLAsACo6wubwBBDvb4wPEkWR",
  "key15": "63pvspbV2e9CGWLR6FfMdZFjcLKzrbhYKCq3oi1buEZ6NtrkTXkLucfu63yoefmSa4DgyVTZeBvF2czkjgJEdf7D",
  "key16": "3VhHhC2GBoVuYTNpfqvqm1M93aZhrx39pJbB3WGGAs6YCdwTVDVjKPvYE9bmdpLr65F83wPJSp8HuZUmGwmEKQqV",
  "key17": "FYsZiaZ5ck7Yoia3Wdt4rHucdiMzh26maHEihppns7U4KM5yzCdQiMptetZwGH9JNARvYj9FcypxkPdcWUx5Xfp",
  "key18": "5NpMKm4nG1HR6LAhaBEW5rbrpKRRNvZ5e2mByAmLnLNzyARE4QLrUogWeCLiw7WfDEL9wRVbhq7tc1TgEe6wfBYg",
  "key19": "5ekBCwxGbshvPhCmcVKQM5KBw9J2FB5476yfoeUzePLkn5NmWL5CESwCVDcrxBE16C9XhrthRdGC8TQ2qZoCBAsE",
  "key20": "3ohQn8rWuNWs97jNbARpNdphENryVzwWY584nt8hEpb2oXgo943Z5SBVn2ATq9BKZZhoBxgcSN2Xk5VaeE4mfm5J",
  "key21": "5PyczYLSRdBzn7MAn4CYEQ29fkUx9aZbDZSjZEXAM2u4BTLuh32eoKpibbjw6DJeDP8zRXoU86iA5WpKvs4oh2zr",
  "key22": "5yWHfcr2hCBxemKm7r7pZNG8HPMQi159HQogPi28dEuX4bTGxm5iDHMvYNpGEHXet4tSguWCYcmhZQAFGANTQQ7i",
  "key23": "H8tsSTDBZZTvyBBv38dh6EhEyBE2Jepf6f1cEoY5gS8z8A9p8yFyg8FSctMdoVFT9yUDr6VYisAwwA488fLtUpZ",
  "key24": "4UZX58kkyLzRDRywi3ePaZbUwFr6TAWREkZYpodU6XuViyrAz2PcpZEapT2MCsJoYLd8gXDqCgihFq4JnTMFKQJV",
  "key25": "3HsH8XqmgzjurDyeTA2Q8cd9UUf2AY61qYnsP9YAVqJ7BVWqLXocVrpTJCNiohRtgm6qaWyvARci2iNWzgcosqFD"
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
