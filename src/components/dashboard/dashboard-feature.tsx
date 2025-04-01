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
    "4DK1uRaJuX2XwD9ddL7xQUFXNBwWdWiLQKMYGKtdSNvk7crkMqbRbTeArWhUEgNA9Eaha2pDZu1EtBGsEdWFSaV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hxW3bzWhG41GH6y9YHWFKeHQMK5X6qeNbKbUQaKjKQknz3cYNVL4unYMxWHpZbiRfvB5zS4irpTpdGpb4i28Cek",
  "key1": "2fQpEGY3VzcPKEeqRcMSomj2S8Q3NN9VsGoKtKEAEWxBaNKPdbdZY5wco71ogHbKszrWsSTNsH2GEW5y38RdPSSa",
  "key2": "3FooU6bWWx5ALNFRTetWCmaGtzpSU1pwi3juz2W7gcKHLocATdqLPrTP9tG4DFFSAWXazLTywNny7BTX7ojURFHg",
  "key3": "2GMHic7dhHG5dB8NKT2JqB1q25CtrGVK9iTwR5qFFkqUEZPo7uvzhU44BMsFiLK8TqUCYsHxKfuAKef6VLPfVGtJ",
  "key4": "3t5DjcMeotp2VveJxfHGK4gicspgBDznn4fh39Nw8AFUc3eX3UG478LKuuMwQVP9iV5xZyDo7YXHJ3PWnDkQaQCW",
  "key5": "4LiEpPJ5S1gccyYKzV6tMZ8Cc8YiKq8Z1SaQQHRuLdAKXb2hEFBjFjiEK9sevy7rfq1cGFs25CytNjEBy9ookUVR",
  "key6": "5FcgDhJ2ZJZmhA1magE23wTyqt3c1FGSca2oxto9JA191XMzS8XqV2wxZc8vJDFxDmnhvujW1E7RgiEK3tV3AuT4",
  "key7": "91qXKVF9stwaXgmrCafmG5K9CGkFCEo3RvCH4ezKZ2CTQni5JTUvt3Lan3TEVUY2YrcTS46NcaxyYWdkjhyarse",
  "key8": "5Phukgyep4BDWBV8YF4ow2C3XR8hbt85krUdS6kzwvrmYfNH3fbaN3DZMXG7daNiC6r3dSVEiUaDRWUYoRqJPGKu",
  "key9": "4nRo17VyAofvrhwE9romdtZv45owc8CQmBDaU58NkRuUqdmbgqvVKatVXo2fPZsm3PAuV5nNdHmfDkA42xsr7D7A",
  "key10": "7rXyBqcsQzBjA4GQaii4FpvH5NXxJUTqqx9n8EWmAEUSJeZkyYqFD9Y7xWXB1n5ssLZm7e4V9kdMYeshsnNTXsN",
  "key11": "ANVBRFcyb9osXaawwSKKBceSgCeMmUqNoPGPZFHAft1mJZDhm2MXTB72fkbzvbP7H3TM6ZcE2to5zxPCVMwaHMA",
  "key12": "5ZqWSx4mMCdo1kZUiCmswFBwf8WVTk7xJNttXmwVLSLiDPFGqYrAVSRv7ViyG7VixYP8zeDKsBw3JQoYXtPUgXmw",
  "key13": "4PmWKChUbzaWGjZyFiV7vTEynBD4t47txVPH2QomNhCgHnhfj9XTHbvZFw79QdCwhNmdmhqdPGiogc1ATFaDtbK8",
  "key14": "48pyWK4G8Nsmjg3V7znJDFvEMizHPfqEstSVSx7p1MDJhmhhiJnjTZ7pV4Npze44hPmLVd71BdQWohcYMUoF2cXr",
  "key15": "2wYQsx3PpyEe6Lro99VepkeNNeyXxmWqNsAQpU1hvZBrT483Pbv1VpADC5tApyuqW9kZjC5o8bb23D6E1jQFWvo1",
  "key16": "2DDRPsrYXdEWoVF4pWw42cgkRq5sq4WA7rqj4Xy3WmVJjZXNRDryDmm5HCmUL5PjVphKCE8hbHcKZhDn61QJdier",
  "key17": "5Zs8p6L6KVbNJ7TtRSKMCp8mcGcsD3cZ57Bdgfsz4wXcpvaUBLk8M37XuywEXTsHENzbzCVtauiXnVKRQeFwM6fE",
  "key18": "NQfwYR45izpAcpdW2NM3LRw12EesmMxvtu9qLppCfGwD7mKZpJfsaCkS3uwAz96tk9sgeUpoKqaPdyGYA8hHRj4",
  "key19": "2m4qmzd3UABhH33Xu9C8rocQjzBLJTkcoSHJxnniSQJjWRiVbB7je5x13mDg9EqUsMBh1HwKNy42vurkAGH2aDvw",
  "key20": "3WXP86MNLvUk9NUU7oMqrtX9nAX5KWmLhJc1pVGcthhPw2NfGTvmtmyFb25i63rBb777oUzzzPcttZbX8bVmfQHe",
  "key21": "3Wp13DshWkTZ6XkXtGQ3aL3q8YgEhYYWHjy6HDN4jjThK5ai5erGY83gXpQgWAdsiwjnhc74TiYwSxe472HPbK8x",
  "key22": "23GDj55vSLHFLxJUepaBwrz7wooWPfV4PApDqpcTp8rJyJku3sVD4kw7DsSLZkBCNmzjXeX9aWonFjeTCQRjfiNz",
  "key23": "3zMC6xtGsJmUCZVketjrZ5B5CTzcWMAedvRDqHDVHVNZU2s3G8PkejP3xTVnvLReU3ZvVAsUkAo6Edq9drLpdmyM",
  "key24": "2uqyz2yX8GGzNRe11HhYcJqcUwvYeZVuZzHG4ETmNJmGB71dDQ7GywaZjyyTKrjZ2PPkgwqM7xKpsnZ69Rkn7Mfo",
  "key25": "uH1rwcaq3QF796EuoDUkzwjFGyMuqXAsYmdErChAz5RrPMKdVvrX17ZFjG2XQ9WYWQcWDLxQREjyTmZqiEnWSvR",
  "key26": "4Rt97fiUag7214Kbsv6QZqSFikzcGR1gbsY1EFRYaM39RjevLFqieppptuz8AfFrRSwWJuHxtNVdnTDQeN9RR7Yf",
  "key27": "2d5b4GzVUELzhp2gA13jKDq2KvChWk91Sz6PMi9v5nvx9q63rvQ5uU8qHUjJ5WkeLsztbRKzTnAYCQQanehF89jQ",
  "key28": "31oVcAfxyqpmsbfrMpFdBLAwKR3QrjiyLod7JARJ6nPSkMPXkWsSSah9QUCJbJZH5MXybXaeWKtVy6hLXizX5mUq",
  "key29": "48j8K76DLmYk4CBTUUTLN5zHfsg1d9MKWJEXWWy5Dk9uPvkGg9XvLgchuzPFpF9KwVpcJJTZYzhDYnmvdukmeZ2M",
  "key30": "56XuzqFpVSuP1BLEb8KJ8rY8hgBkCzPjW3kv6gjMxDeAuZf1rmqg6LTK2CS8LcURjeLf1JA6dKySj6Y5cKc8q6dD",
  "key31": "66GUtTEnPrZ5HqcYZjNbbmmbRzgRdoKHZpfdkAbxePEk65j14f3LJ7nikWpU1S2RbXri1VspvZ1VXQsDTcchWfgT",
  "key32": "5crKZqmcybuzniemCA7ME8VWixK7F3QbZLt4FJ9Dnc2QXTzuXZUqvBq2BgqoZTGqynNbrECTrJTGkfLX6EGKaBv2",
  "key33": "5Sfuza2FW4LxnBdu22xB5nSLkX7hpaL5ofnmdCft21eAgWSRbZFmRGmuAArkNZaRJQ21uNE6NCXs8TnXeDAPA8c5",
  "key34": "4rCWGPRbdpNwmF9tqZpQwyeAKxuLzvS7tScyL1z2zXbH6AMGaCZzfwi2gtU6MUn7KnNkq2ATVsTL3dDV9nJpC2YG",
  "key35": "5YpBcH6jJfdvDMUfQBvU5nWPZJY138Lxr13k4ffJWyjXdqrztg7ZJPbAyZszPd5GgU1TYXTEEZhBvvtM21pP7YwG",
  "key36": "5AZu1nF4zexcRvtorTdihdGzKbz2CPPMoFsbXTye8DTqwCvRvvbfiQnywg8v6K5A3muZEGhLZL2wGoYyAnCdU2Ys",
  "key37": "5ciWuZpnjFba1uN99Jgn9msmk5PDgg4pqbAFcp6DgbEgxiy44Vbo2V6BsL2kEQQ7H141oNYncb6TW9BTQVDZwH7P",
  "key38": "Me6Lcp8dXZSWj7c7r3Sb8vFgjaNoix6vPJaWMMP6EtdcTnvhRDrvDFiGPddf28TMyBLtUSaGQTZrDYGmfAX1n8B",
  "key39": "4sQnH1jRduFjhM7CGZfPbjM9qcrJGzhzAJYjRzHr2wxJTdBX4WdAF6omVBK9MvVnFy7BrW7HGAFKZixhXzTLLHz5",
  "key40": "UkuzXgKAQmop1CXp7QYkD72gXJYpbnBUttoGsSGS2e95GQaX6YvAg2FNDDb6bpUKDf3dVs5My9jrjTCRDMZeLZF",
  "key41": "3g3RhvvdcgsjN4okREeQDo9ktcmnp3FZBmr4ZXyFN2uVuGfRM59rbNm5Lw7uM8VifW2LqnQTkysz7WVLqHxbWNq2",
  "key42": "63FbCmuKK3bdLepV33smm7fSgb4byJBMxBcSngZz8LcnaS8bBrx34MtUZSUkbgkaptFqytgjU217LBShhgZsx2Dm",
  "key43": "2AoJkYmPJn3yLqiYiChFSCcEJ7dPgvPhuJcw3bgmph2Xr4rjfbeUg3Gpo4myzHME48cQK9wk8bB9fHWzszcZmkUX"
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
