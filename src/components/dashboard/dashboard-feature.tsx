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
    "3W6byAcFMTYKHYP7fJfPCzSNNk1LcTVNwEQoZFXk1qDeZBdk1SFDP78jT6ganeCK9wYRDug8vwp2Q8kQqZqPBFpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29A8oLEQJ2W4jjre8UYzK5Y45GuvpZvKBc3QcjiJRaaQs9tPJhVbaUg7zpAWS4LXnK3TXarXwtXEgAqripyWg7zb",
  "key1": "3JQYcpfxueANxuFZvLGpFigfbzagQnNNGQzFijX11jfpLEzceztJ4wuUajzRQeUUajEqiDMNTHxsud6mMugqzqQp",
  "key2": "2K1uBJuKj1QyFvneH2d5XGxdGWndXsSxfqZRZdUFsJzqiHzaEJwdzuXNsY2qUgHMNogF9Y9zsNaHqk8iy97FTJkH",
  "key3": "4FtFcMZzgYgE5oq5hUQBRxEwvLHq4RJQnFuVPRvo5umrztTZhjhP8vj83bWmAbhKMegK898Y1rvXvkTdARL5FEy3",
  "key4": "nf37QPHD6dhgTYHuTYjTp1zkzzShpYk2BkiSpq4X2G36Cnx5zsskzr4zSnPfoq8GenbqyZ2E7Uv9AyqE1YVx43r",
  "key5": "3ni6a7rxurxQdq8ifHwcD2yGfRDgPsuhVzLfPUNDAwiutsmfEoPwfvEru1eC9zmiyFJCkmSxw3f1y5niyVZ28Kzb",
  "key6": "4y6F3uqSbBEY1DEkEz3FSQi9aa3Sfz1N1LsVHJUj3QYXhP6tJczAuhGDruQwBvVJuZk8jWcfdnvB9iv9qu4kf2EW",
  "key7": "3JN8REuhbShHEA14nRDYQNGVjeDjpSoSHDnJHwySknSGHXeZbFV4nfYLo9CAhc8gTwMjQ1y8CB2JLXTZjdetSegy",
  "key8": "4vP8kD8G3b7SEw6Uzfm8biruz3qRaXjbPvtga63qJYBqrG6hxHtjptNnUzDxZ8JGREkXJAtcXoZecjk8rmm6FKfK",
  "key9": "57J6AkgXNZoHvrwLGpXbtAY6DBewaTqNyQ3iDzRpWpBCrHwVNMRAaguwhy29mRP2FUXUMNPKm47e4pVT7KjFqosv",
  "key10": "5sHW8Ad4vHzkB6W1GScwV2Jheu7knRfTGoWaRskKBUa3tZGfWZnvcc4znnfUcUYFDJD9UoavV8uSeHvKPG6b3cbr",
  "key11": "37SSuMBAneD6d8HECCkHL9EnbY1azLxMUh86WXQfB6mGhs5PMtpsP515qZZwr1RG1caecVyCQfVdNqyRryM6ABd5",
  "key12": "4rEAtLLH7U9DtsTiqifNP8NxzYMRmzm1fwkdFC4ZoW9bKoFS41WeQLc5gJAkn2n86AGXfwNsLkUpH84jezx74zGk",
  "key13": "4GFhNmpzTahpvHiGh5WmNsTb5DQ3PE8Xb2oNoSGzE1PxPmmxBvjepxQPCEW1znZZC1zXz2tbhvFkoDr1AiRzudhZ",
  "key14": "3tGhpuYYV4Jt7pTKKurQneUymLkoZbb2yjWSXg9YcBzyJXRPwAgnV9EU5VeCWKDe812yicupAJytmVFbR6kA82eV",
  "key15": "GZa6p6fzp8Koyofj9FSY4vkViTGwkjW3e61Ss9nK7aJD2wA89BBMcTPubk6EoaaVxpJG3zKkgmtgfh8wL6kW5cA",
  "key16": "3q7n5MmoQMpwMt5ehfycVCQhd9hK5JTv2BvAnfcBeFXxGngJi2FB4qPFX1iSQziDVZ4EMgZ9wJvdy7Wsrh8SKs5D",
  "key17": "3utybtNSDoiVrj6LufooxhbYAGdJQpdcxR8k5Nu3R359oqYJ93nXdwdaQmefvygfutaqKgFGsPwNmiiZCrN8oNcH",
  "key18": "4cAns1Rsz9tNC4xyYdmYErcsYcPpG1f6FjAvasnZpnxm6pY2Ysng2RficbDdrtoo8FJmJNZrmV1b8pmGo8wfoym1",
  "key19": "5ZmsxQ3BKZHMv5gwiE9RT7qvfpF7t7sLAYvhrKDAe3kS17QEwb1qRpTChDM4X532Jh2B555SxN1Jz69UBTNjqUXA",
  "key20": "mh5P2fvGL1avXTZaCVjSkRRtZ2ow1HqcHWYqmiq7ozSEcbiN2gtuq97drmaQ6tcDFoQjMmmLWPfGaBgZZKPP6Pv",
  "key21": "3yFfgD35RanYownf3YtgarL9L5jWPSQcPxc4AR82EpD3GmzArBEktW5h7668wdYvSY41QN3miKjRi4WxvLJYFLn3",
  "key22": "3778rCPDSREoyyw2YpsaK9isBaPNqPMmt77CWNzQDKaTWqTx8nVjaY5kT3StuAgnUMqXujSotMagvpCZ4CS4tAjy",
  "key23": "5MM2hAcdNhvSQtHfhryUmpi5eRFTbWfwP6jLsRgnUabPVFbgePv4eeWS2Z83aZVrmjbZgVN6vov68mPfhZCREQJL",
  "key24": "4EB9HPg3PAFgu3hFqTkJJpRduXBKQ5Tik39jQTf2euNtkhNdjtbRjTzXAD8jBKMFxFxKhzhSJu7RKFYLPNWRwZqi",
  "key25": "59xDTP1ahjVT1MZABcz7UZGBct6EcVegDjkMcERWr31DxaTFswYbXHpKUaCAyQcXJEKQVSeJtrRQdqQpTJryaeyq"
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
