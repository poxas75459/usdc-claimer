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
    "524f4Pi5qnHaQuvVPSU1VnZnNTzLtiFQrkDmubLNoEVmLmwj3SXXuHcH6ABtmexUdXxJU4NBwVevebYwewh3DdgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28uLMsFiZT4EVysmpUStcxcp3iKvpRMfv4H6WrSmU7b9MuycgiF1WJCaJL4XZbAohj5fkDn4n7buAHEa1VA5gv8n",
  "key1": "4VjRE37mhVHA6h3dvrGKF2LrQJyTyJS6LEV7YCUsNy4NrQF2Leskwn8dQ3LkXxA1VJkp521aowX48T4UrmXgmiTc",
  "key2": "nD8Fn1s4BFMVJFLsrUYTUmQ7TMSRcxwFJt4TCXZMXngU5JvggL4yU7k4Z5sHCx381uazUywwfucDBrgBomutfQ6",
  "key3": "RKRM4bcYbYWU32xKcW3nN4xRWG3Mk9RTvjtUVbrRxzPwkAxEURUVgcQs9tSjrWia9GGuj8KGYNmpZD8DNwiMN8a",
  "key4": "9EhJMVhVsKa7QTWNmcGkfbvtLdEfDuNhhAvJa6vwXTzP72T7hEsQ7e3TzMXzKTjvY1MSDtQTibZdB3KsFxEe9kh",
  "key5": "GH7GYaEALMYMqXTe8A49Cn6ANmB3h3oUuYdwxBXr1WEpurXu7ro8WRLLSju222teVRfghscbzFRTg7fJb8yGJXE",
  "key6": "657xNJWiLAvfcJaWXm42E8Zk4R8jbqq5ZEnkr9Lk988p8K9WxXKCmRWWF8gM7EPoAYfPgcSvMg8Q9rWE7L3S1X8e",
  "key7": "kWLn4aHoyn8QoDuUtrjzyfVbR6rjfWfiw33tCAbP82yEXVZU4LHmFedb2K4rHNU3rvcp8EzPmk2BjuTamd1yeBs",
  "key8": "2CrQm2PBCXv8niHm7Po8vHLuhNyWbjfVotSLqb9KeyRJZ6P5UvgUV7X6rkeYh3VBL2QvnFi8CUozar16v2YoGmuc",
  "key9": "2hXkqXkedgT6VCsCyNTmQszwCg2dtPLwdXe3Mh9gJyHshDFeN6zaHTy5v6dP6bderKQ96cLZsFHr5hcn8iArw5Yb",
  "key10": "3fh3NwR6vGTQQtWszbXypvQi5igmWD8NESu62hhPm1DaQgHxS3ERFkfGjVBktQwUkggjrkSwmm4HtzF3YxcMQUog",
  "key11": "TDxHcoxdP3MNS4zccKErM9BJKXrSCYhiNgrMfwuEp1vMJpTTSELngeLkJnKxFhgdF5NVXFb2SANaG1Yb4MRPqqB",
  "key12": "5xojqGCaMFVVXe9MoTNafhgyxeKp742Xx5V8PxdEyAvahVtiQmrH3zG5RQyCUfAMtcaWAmH5GCuGB8XFKysi4xJV",
  "key13": "5eLp1pt9d1Le2CzJdTbBNrGiHFBzxNHHB8izAAqsNxZ2wABy3nsAfQvUuuAP5AKZcR3Uq95cpwz54un1ZFTaXwD8",
  "key14": "3swDcJKrGQ5ce6vFSxEeAGTmNVmFfdB8sWvGhPFjWzFYATnx1MpJt5bb8CN3pyCyMTHkT7Y5fJoWXkFhvFav9bKg",
  "key15": "5R5hmdaZ3YnFor1JyJJWuyWZgpEcaYZp9JPpnfQd8YauQZyKZ2oeVLftdG7EdY8CRHTx2tkiYpQNouABdP7mqpzC",
  "key16": "45JfMr8hh8bjV18Q1LuY1hDzbCMsVq8rpEzMfm4rvSqBmjNDVF862xsfcmEN4shQcMaemhv3uqHc1oQRVVvLjU68",
  "key17": "34kEsbjySWsQipL2sR1MYrMSnYH9fZrZVpX39qUjnFJEv9NLsu29kfiHyq1AGVyvKZnyyEREeSXyb9zxjCWqmeF2",
  "key18": "rQpJQfPuugMkqNDtV9jhUu2ZCfbjNsxEtAznkFQwnaN6mnHrih8nw1Wybvy6nutVVoPZ9ZcQnQX2vbgQxKGeasj",
  "key19": "2qQhLweSLAHfh1j4rrFwdM7xpDuJCWdWUtytsJfPNqF8jzkFUKXchuEavpdiMSUG5rGH7Rg5uDvfUQFAkAB8SN7H",
  "key20": "msmVsk7esvv9txt8EiKbwWXFMcr8FgfdosJQjBAn4XMR2iincnCyFLB3mCKcK1zKRfXC9QvUJYfp1RZzo66fjTX",
  "key21": "2zRdGcsU99fARkumKMvdQUyaFWB5DUmbFGLsPmPapQQcPVYUgaJR57L9xRfyRmgKhKnzL7LyeihmbsxCoYca8BKH",
  "key22": "4xHnJQWeR1ugqA94r8pwzU1gHaMgoxcMTJtuJNFAqw8iYzMFCURYtyM6kk5FHBjNup3sdxi8DZqD7kdNiWDFB45X",
  "key23": "5DWCeSK6x6fDoUz9suASXMzdgPcBMn94DvzkyxU7b85a6nvpop1VL8eYZs3i6DpGyVRVaDCPq3nbPbcZYrAmkE4D",
  "key24": "2NqCgN52Yw6No8QB5UHMCaeNQi6oz9v8siQe4WWLa4yXqgcoEDYzoy21vLUJtzTqKUJP46c2Mj63LYATj1vvD8xE",
  "key25": "343x2YNnqVHKFq8ezzMmhgnaYTYazRLkHnAJSATN8sSP1VPuDC5Tw1usmjXGDhZRs1FYEnDfXeqhVvL6V4HaKtTh",
  "key26": "3TMk7Z81djtxGHCm98YWQgsqMvXa2aHugv9phNUq3TWhcAU2Bz2VP5n3TNKrZJx1nyfMendKhQ9bGdN8Mm1FgDsB",
  "key27": "4rfRRp2UPFEhuYwQQpRb3UPF35KAr2SnE2satWyVGPkyKaNXLL8idAR7xNr2558WVkSHeB2en9hsQZTuZ88zUTRG",
  "key28": "5siePTjsQ35k4UZsnuAi9gmrBhAkDpbzGNuTivvowJXcaBQzf8enYXfagSUDKUC7XxbHA9nmpEyJAxxP6WSLF6Ne",
  "key29": "3byrcfVT6GrYZ8yvrXuzDvHYRM5pMt5hiBjiyJGKj9gh3WKM12QLYA5MyUExGxbvLTewYLvKBHuWZeAhzjWSt79U",
  "key30": "3WuBbVLLiswUjWjzAzCciizRaie3SC8bdLhUTss6auZKxPPVmP1acvC1yskWH2xBrNqU3Pe7ynjsyKih7taiVTbH",
  "key31": "5Yzz74kikWf7jZgqEsWySRToZXV8w4bSWSJcAxHQGBuHtP8E6phPaRpqhLYpQzyX5iuWj3rCL93QeXpKN2aKeV9Y"
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
