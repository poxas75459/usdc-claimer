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
    "5CCTyEnXyruLyCi9Hf7NWbhxPzKYkPZjeP8Kmr5uEBnmC4db7PncwwXM2sHDVowgCW75MtPfYrSrFZshwC4CNfUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hXGHQzFPDBayLAAoQfpPWFS2B2q6VjteLwSPewbsNmqioJgFhXjxkd1XUKqYbRMUZJAX3G3fWxrUKVyh5JXhydc",
  "key1": "5TMVsCE7jk8YpfsB8XYHpXGcnXHT9gm5QAiFsbhvEEGiDMeKeMtLDChrGrR8ZsPwqEoTHWuDNLBbxFpntEzcwpAK",
  "key2": "5KQeapYiscfy5TVzBcP3SGK18S1k2ADXrt7Bs34bfxK487risu5VwXdWQ91r75YT9yXERGPdRWp69y2tBokvEAFo",
  "key3": "5pNfxc2Gx9VNR7XrWAwQ4d7WzkBdxA64guB5bhDzUS3s647ptFEqpsaEpywLrpWXg6BCn9nuQsyAQVCWJPLUFgoD",
  "key4": "54gvZ45kf8cJv6UnJrbiScxuXf3Ri1EouJRTLeMQCGDHSur5ZzEP4UrEg6bQM9nwaQoQvwMGEDjBwnnXaWne8nku",
  "key5": "5isACTwt7qdy3DrvcmJMpJggfBi8gVfGskLvvgcnFmidodmZDzAaheSP9mHvDcqZANF5quBBGk5pRr57zUuRRVzS",
  "key6": "5jLQfPnjxBmRzMXpjVFizqHbjP9X1t49GxsMeZVH4zxEJo9BNWp5p3AueEdAKsnoLSDcyhdFFzTweiGXnsvNuM4V",
  "key7": "TjCGYir3iTibd3mSCPVo9hSkRVnegixbKyDnkfxgDPejCpftxmHDgKFscBqCWkevc1er7Ky5SeM36wA9FbpRUst",
  "key8": "4nf7wZBvgNgch8yiWwKQmrzsVQK2DD3DAjfRGjDx2JpvENiJuYtNvZ1ZRtMySukELQZXgs8tJMeSJJov76UAhsNG",
  "key9": "4yBXktsB8eHjRGmWnZSsyRP4sBhNeuNeKtyXkRxnAf6N57amtwaq1AsCXAcgW4VzzQnkfR7UnmEZjRfvB4d73NdE",
  "key10": "2ZuPQrWH2WLQXMQMT4Rb53PjQvMvN68pnd6bN7ThTmaH8TjWsCbwzbjNty7dRC9xDYNpphS9WUJfrR5BochsNgJq",
  "key11": "66sJRPrbFk1RAykg6cA6RKCC28tFbeCsgf1rPHfAMC84f2e3xNHFZUr5ATYxsUiWjjFHwU9Mqc9u6T91PwJjYHhM",
  "key12": "46uPxZTY4S1JGYbtW31fz7ru7AdmVephcwmctjPukDDPGJD6rPuxkop5EgveWgw6p955ML4BeRVCzLpkQW5mwDWK",
  "key13": "puKogFswZSqarqXFoDzrkGjg9VRcoab6zzdMcMBBEJScztaZbpzL1VMFwvQvJAh8LhYa3RjcMvhausJ76kkdQhY",
  "key14": "4igNmuFUKtGLVF3oTvMBfX3QivJQra8tvFkWYUhznHT6PrP9yVzQp79w5Fce24dMb8VnnYHuYDzakUGmFt8troTn",
  "key15": "56sPhXRYsdQqBFMM9FpJcWLNvNGjkqQ7Vf4tqWzJsUf1rpdyTdSJttzHUKzvPrckENJoGY42wVBxAe7gwYpmeAfU",
  "key16": "3innb6drPfCzrXGR8fDu61nrjGghCfsjW1n22ND5iXkCKMQ7KA7NHNMJMuTT4jDFD4zA9cq1qUTzS64434Duj3BN",
  "key17": "2H396wZGkCpVNnaZsuZc7iWfrPo7Jum8XdHynFASeMnGvS6PsSXzPRmVdoYe1gwfgLJa2JpCSMwtc5Qrt4zAZJSd",
  "key18": "3RKspMgZ9HEMMsHhGtoh8C5ayS6akAiDRvkG4mfb4JV6t8PDhRkGpePq5K87e5455YqWTruTGCo3rabksQHDPQ1P",
  "key19": "E8BC4Y949y9qZW3UfQ6D7NhEn5dK8tpPGT4zSq1fBXgP3gqkyAuuuGZQ3zMEfNjKCEfvosLMA8XJTcazNmFpagX",
  "key20": "4jyqZ5CYpaUwYU2mqcTW6bJPGjaXaNEQCqjiANVmUSkrgJWGoGK2AqJEicvW8pJoMbwZsQEgo1N63Ho5STxRJT5s",
  "key21": "54qvVKWRbXGxHQvf2ZA76zp6prYt7pJWKtriZdVPoESzSG8K9bREfe8bvYcSSZZV9LzJHoRfbv4rfpdVumfdP7AU",
  "key22": "3EuWt3AHHVesihJzjEEVBeqZ9owYbyEJdcJs1vAYf6LFN158Zwk3F4JyFoTtYphsYtkXcw9Jhcid7Vi76k9RWWkF",
  "key23": "24mksD2iz2hmeMhW6VcCyBkmb3EDEWxxB9yNn3bpWAh2rrMdnUxckW6raHdCfjrt7xnU5RFxhsTv7fi1Zv4DEaBz",
  "key24": "65khySSVi8ZKgza7DMWG9HArZ5L1ea7pqSXriyQKbDvgardH1CBtizsvLoeksKSKJ7ATUVKGQkqQHJ4F1479TbSe",
  "key25": "33g8QjqZvpEzJs5ET5JaRN8v4fTt6skQZbd4KB7JmCWrf7YwV75q2GhRPJ9G8DBPu4gVFs9yL4vQbRzH67pLXgra",
  "key26": "us4u5HKSSpgiCgquWB3vagd7z1fGC1725Q1VxVKQvAhxLCo2DWJxdnEueJ85GZV9MrWqiEjz72Fuxjs1c5Ues4H",
  "key27": "32z7L2sHtni9AGMUYqSNgnjuZJ3Vm6p6tJXujf5iG7tfhYvcU4uSjUBNQhnWejAjsmPePYCE7nJ5a6HuUTfkc6yn",
  "key28": "5EUThdGc1agpfgdT9EdzNYU7ohcrMdddXn9nQK2GwnAjTDBmDWbtkG8GCyvRXwoi59AqRJwyjxw4wm8BDuKXAHNY"
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
