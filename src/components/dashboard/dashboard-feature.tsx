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
    "4M6HMDZJaZgV6xztPvbJUJcVV88fr4a5uvm9LU4kM9tsxWnjLS54iNoRRiAf4QDSpjnTpvgaymNcr8JmDBKh2YbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JxN4ecoC4GRFa15BXkCwXt1uZWzYV8A6Q6HpG2iAKbwt1qM7Rh92zEGG2YCvvVEkxXULq7BoFPapk7zLxNzyWvc",
  "key1": "Hcgx4Rt5hG7tUsHfmZ2ungV1d1kPMURsiv2Hw1EqMqqrZtitcbbo1zHFsPXTHfZWA8YonLCKcPQ2qKrJZAvgRnz",
  "key2": "2mtDYFXC7BMJoSEtmTxEvZagf1eH7cXuxCjqXqHgQD7w55cLndyEsEV4TKH6SzBmLV8xr7jMq6CTUzbkdaHNeQZC",
  "key3": "4Zw498uruBZvoZGSUpy1uwB9cBFWwPdw3QegyKwztan3x2dV2VmevQZnFyawyqaaevoHAMpFdYGZwjZSUSeF8ePa",
  "key4": "qoibNH2xzqwe2R7ptFQvwGkr6teHKY5eYana7aU9WhGxdc7j4FzFHcajxjxdH4d3zsR8m1BzUWefub1KgZ2VucF",
  "key5": "5amu8ZQfoZja6oWDwLsTX26yr5XPqGqybehKPcxgv53vpG73zAapFo8SUamW67W7WoYCkxm8ia55ekP22RgXFtrL",
  "key6": "4yRSex7sKF4shUauHDHxqib8u9qK4HLtBvqsSLhPsQLmV6xDfkkZd93Xfm7Kwr8Mjo9ktrUUzUz2qJ8AjXgYeQBo",
  "key7": "49Ac1RxBCpzz8XKKFy1yTuRG95j8gSmqfyBPhnqAJEKAiviLWzvss3nS7NpRhV42z5amWbwXeEJ8Syk6xtUnVZxc",
  "key8": "3kWkUE14ZHdfzYfZDdgCDXc9xsbKXEcaqNpr1cWnhSQ5vmFvZR6tWezEUeopzE7v82WwC9d7V2796bjou1QGAj77",
  "key9": "4nrSqj1xHS3jsv4xBq1vUkQe9BHfLH2GR5oRs5c6rSDuxnWY55ixV9beQaKxkpTQMCNNkaAAAcmVVhfx2C8fojnn",
  "key10": "5ecNaauYUy95jbgR1nPahV1N7V5qgCfrVfH8nFQbDNKVcMN6BskJTn9e1JoAH9VBBxL8jgdQVY4je9HfANcLzS5i",
  "key11": "4B9U9CASVCJVcnMKwkyEfJ3JWp51FziTp2vDmbKYoDumgrKu4UGvYvPL69vnVUB15MHi4TVc3iKEcET6S4jHJnPo",
  "key12": "32uxovTkdJ9XwLG3qtpGgMLMqUKUEoE2CpHuYWC3CyCfDq97PjxkBrWnf3dQxnx9kBnmDbi5TPNR5RpgbrAepJra",
  "key13": "2ykVMxkt7tN1NsbcsffQhcPB3A7u5nFywV95TuqGhvLDJyo7V4DYy65S8pG6z9XB3xvfngxhvdXBsRyVVxhczBXM",
  "key14": "3WbNEhAAAdB4KCXr627zVPoDsabAWNhsnSvfUKyHMWCQEKhqDJh3UNX3bbZs7ePajxfkKyQnBd5DdXduxm8x1joG",
  "key15": "2V6eiDwL1wtcb3nTbfNzQEG9HaZsHtN4sGqMxAnn8745z1b8keNASowoJkA2yFXKHaMjj6GR3knhjSZsZ1Y6iBqR",
  "key16": "3MgQxJ6inSYwJeFZMS8SckPvdXvrG7QkakbeKETwLGrwW1VWMEcJjXigb59GbaZujzFvAc7kd18kVHfRHP8DC4tG",
  "key17": "3CaMvguT2w4uwGnC3ZzxXFBsco4TBhPMwGVLowYD8qHa5Q3Zbdf6TqGEyTNNuY1T4V2XUGVcg58q3uS7yWQJZWzo",
  "key18": "4A6grP2Tns9BfssK6twZApJyfxKyT16kZVtv5RpL8558bvVzNdqsU2bC2Mtkthpz6a2NEhuEQ4WEVp5qTXsjg7vv",
  "key19": "3yVpdD4StFnyfRgBWBWxiBLNuQvD8HnwMkpo1NXRF9xxJFzutCHjKCmGPWjM5EYGHwPy4ugHuiqp2kM8eT5FFBmU",
  "key20": "4QZB55Fn6VrUXNyGxxApvpc4sWsCzj8taoJYe82mWcYaNf9XmqaLPeBaWbRGYP91v7xtMaK7vWjThENkVsZ3cX9h",
  "key21": "KR8NR8L2PDSDkd3DZUnsN672ZnfbS44jTLheEE2z8T6Wa5WEXh7JFKomQeKU8NroD4mQznoviHusVsaVLuCQu1C",
  "key22": "4LkkbMgzSqomMG8JH9dWzAzg8eMmr34YuuAsZTCGfMP4ZevQrJBdmxkUDDX7ppuZteiTD3aEVyiT1MtMK3bu3vxf",
  "key23": "ULzjFFVHpNc2cyj2L14zVmGwWidzh3k7No8gupjCNisr9F9j6ecjn6wRDWGrvk6ar74agj37ABFFFm6VYhkEnBd",
  "key24": "vSsZN1cGnMSyR72SUfCnrLuWXWv6FnJgk6zhHqGxus63xTQf5eBtjXuczUXkZdvJC3ENMPD6AHUWRgUQkMXRvBa",
  "key25": "5VC5GyzBzMQongc8uap69emF3xfgQ3NunCrfHLBnzUQQHcGGjsU6VDRbDuonhE7QfvVnERRr5txMQzXHqs2educv",
  "key26": "2kYqUnXQGGU82Ta3KhmnxQujq3maJDWewqp3vP59ivaBUgZPFdLYqP3iWZaXLWgCFAo3QSpR2xcz5NcnNpqwt5rr",
  "key27": "5hKwrTA3aDFd9VvYMJ98au8L1LdoJUE8T38qGnndLzg6RPCGpuDVJZj5fFMVpUkD6oR5AcxYPyvWzm5np9UhaKRk",
  "key28": "2xSbuRmT3jWmS4u5ubWgu4kLgdFPoZcyBMLrkRNYsQxHtfeFP5SdVnSbJ6vvqCfTtRwZkYVduXDS5s8qR2sujHNB",
  "key29": "5FAQBsphYhdCk7NnLMY1qnJ6iHy9U61PJzBHPQ784Rj8R1fiUZj5b1pQ7yDsxEkG2uH7Jcw7xAnE27vHh8yFSPcw",
  "key30": "33GYqqA6NtqrdDVbp72ZSAurGGKVrzFG3UWmPmxg3cf9FDjo7irKs6cXbEizyCyfTWQaSjvdNwLyxcRpZiDSfYEi"
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
