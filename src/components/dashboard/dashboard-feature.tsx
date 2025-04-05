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
    "BKPi1rXxTKsdSgrL412DLygxW9xFgqroqqM4XeX7s3pgjHXow1a6GRiteiGv6r3mVE6PnfV1Jo6XJAh2vipSH13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36r9Adjbtt4vRD4XYyFwdvtvyYMQkdFCsT5vGHd9QViWNxMaotmRRP4BzT8rhLGtx2cS5mLaznWGyrfehRAiePic",
  "key1": "5TeDE4k8qtBwcTC12nJ629beXJez5KVGYFkuZYLHAzGfGQWmfFJdtL8ocEXLZudrhMhzYDQvPaH7UX41Joc3uXD6",
  "key2": "3FxRQLUpf4cSnHxePTZZxbA1HRabwhBLGSFPHvfrvj7n5b2SPJzxEQqJKDczDBX6cSYeQJNMwYuumPqHMdz456GX",
  "key3": "cg8Nboaw9sZYzJ9UU16FZkLwVhu3K65kn6PnDBRpyABA6qjemMjLos7RAxnR9CeK93tW2qF3t1L9b1f5ejP3D5s",
  "key4": "2EbrxApPmCTgkHSAgJatzGP6r6NAAPhbQM5GFnKU1wsq1jYjWvGJkZKjiTEdNc42777Wd1S2VVmnq3VeE8YJGsk8",
  "key5": "2fV81tjkyCtusHEqzCptdoUF5bM925m1ugcCWuuvHmdyWK5x9q3pSixwbrL9zPW9zsyyK8qWC1FRWcCcYgf6az8B",
  "key6": "5zZQ5K38arGg1PtcxDdZbRB1YmzHafS1ko2DXSFXMhZTF7o2PYstesuB7s62FuDxRpQp3NLrRX6wsmpxirbbqg3D",
  "key7": "vEm7vW4GB2HcTumMsHsBPUcp3Vkf3bYC1RyxjYhJ2Eqj2RcS2viPSz5wQazzXwQFcYqSFL5HaPA8y5aKPwc4G3e",
  "key8": "LRk3yCk3evEakqLCKWex8Ym2vNrxmosc2Wn8WsrHTnnukVjkyU6Qjk5GxCUfrPK1jDvTWy3hyMCUcyJJjjkKNnz",
  "key9": "2nnt792WoH2rNfXtYG9ygJ6f2w3xshbotg3pYZCLcACZHFR7ZwNv8mwYwCbAZo1BGiLkLXJ5H2k2qytzNgi96hgh",
  "key10": "5gmHq1Phw6Gc8pUM5jsxSmsJRzJhT7poYe7S3KMY9GXHiHB9QiE2daq4s8eZpdDSXGJfQtvRJCoFnHrACcYEN9MJ",
  "key11": "2wgwRTEP78Nf2jdQJ37UKMdyUu8k1HwS1LdcYskV5iPWNzSfzYtE25BzkESbJy88fudcNvDiGuLurH4wLH87V8Wy",
  "key12": "4LAs3KoJTgfbLBxRB9gGmQEA4bnAjzQMxu4rrVTaqoB4HqvJkHn1bZ9RavGn5yb3Py5UGMDoVmMNS5uT7kopAust",
  "key13": "58QtaYGUhhvGdP94kG22HrhnFgtQvfP6vZjzDWvkD8CuZ4S1RsofyTibFP14rwxoMUTZ8u7TuxcNRngDYToQ9BVU",
  "key14": "3TB82Z8GdhyDorJg6n7haDa4EXu3T3rGJDARBg59iSUbEEVKpduWhGXgCqguF4VJeajhL7HWvUH4SrXDa2R9DT29",
  "key15": "4nf8PQLGU4TwgUeNz2bwu4Tp7CRKC11gMKMMTBX2MuzxPLiRNSkmuswBqhWocA6wH65cPMj7tfmVZjQYqcn7afgU",
  "key16": "3QJ4TusrNFRN7Ps9BJ1CSw8AWU8yxjG7YS2aBbJSA3P174odJYXUxvF7mvX8bPWm96D57w8pzSEeXy3uuMKXTtmf",
  "key17": "2E9Z9k8rCsLoCKG2U8iMiPfCDocZuVJUnupgikWVMCX6cwpn1jU72GTbhuKUeeECjku86aSs8RjRUNSQbGhtXbsc",
  "key18": "59BmQi9WcjviywqbWGrRBNwYNA7TCXn7LQRhi3E25jYDirzkzGBYkAwAhXU3EcvHnKhWiRY4WHsTiJatduAqvaXk",
  "key19": "25MNrbUSzT4ebreXKhvZR3vtUeZjR2i6G8QzprnqecF5HEdxwgZosJP4Hdp3RNhXmVoDnhbw8ZmUptD7bLqDfy9u",
  "key20": "2tPwr5u47EfpXYYeWajDDWGLrSRSvdmeSRA4L1ux9DE65Ry8WviLvzd6pVg8W7bkMZCRCQgURW7CWh6yhkyvjF2K",
  "key21": "4ypKdyZY5LQXeoqEEZFZdq8485wt23fjSQrGfWVUQ1eEbYB2kbpKNkGEq3xQ6yLHEQUnLDcK2qSbTwmWppBpsUnK",
  "key22": "3BK43zaL45vFvtTBvaZja9LknukexMhBc5vibMkneKJwS5W1Qfshhw3VRf5qhHzTUNwP2RjCZpsfpJsFkG4JFJA3",
  "key23": "Neuo3JgGrMLPUPbMLtR2Pm4v37a1XhMP9tmWJppD71NcY8b6VHhnUv4fr8nHX2wQ9Ej8vnE8zWH98iZA1753HjH",
  "key24": "2PR2RgC4KfV5Nw3Mc6oaHrpZY8DrWcKKozy1hBP9d26DNy1uC7BXRcih8jBcRUduoPgSA2Nugy18TbVfTR2CqiwX",
  "key25": "2uuggPFvEaSKJoZuXys9m9Pa8ipzAZ3ZCds1dEjg6gvVgpe78dNh8FKf7Kmocq6K99xZxkUhJXue6H6dGUegMZZR",
  "key26": "2yezoxQyYcGpwihihS43UW92nKqkPUTP5gkmbjFge9ottt3dPL2RVoznPLjEtqngXUQ5kHzB8vK7BSjfJiGF87ya",
  "key27": "5hvfDR1Z8ACdZ1KzZ1ytuHwA3HUk4k7ECjp1ge38cvrec6ZfhgSGsj8Wyd5MN3EC3SCqBitGknukFFRbzs9nikue",
  "key28": "5HySjgnXdG3FXT5chYkpNQWoFziz6YyK42ZRQLdRXwfRLRvZca9aCAVfS9Bdqa7PD2Yr1a5KzsPhHmqRqQQBnEC7"
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
