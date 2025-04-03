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
    "2D4k87TLgfHGwhhkTqX6dvSEGyu3uCFV47sGpagjW7odJbm6iAQzt4AbbwQTcXUMXVhLjfgvHS5tWXgeSXbiSSi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vXQJC9SZbNMdz19i7JwD1jC5FZtzkqqcx8Keqep9E7M3m1ny1S3Q3cYyCLmVSLKQfjfrr26YCCczjvPfuJiNw4i",
  "key1": "4ayfK2k1rXpp3ovMGe3jJKmUjFy3ngkLmqUghjLjahsnY9KRz1DdNv2C3Swu6hp25eQDbDKD1T5UFwjGmeHhcyUB",
  "key2": "5JSMhhagYf3523QASA1bbhseMWMRmcvfDvFF5zLPDG8bW4X1e4vBDQoUTD1KooKxQdEgZjAEoeU6LnE5PEJecbsv",
  "key3": "3Gya5TjRgRv92eKN8dUUEMQ6G9eRbyoUoDd6nfkvGf1NZEY1a5JQtEMTTU4sqmkozuDYmgxJ3hBZBBrbLvAz4K7u",
  "key4": "4ywHW9RdzMYc2W6XpEBh3ijVeAw6SnBS4azqHwUeJt5d5eGskAc1nNFThoUyrztKPyT4TqWX9qHvnyc4dnAuJXnD",
  "key5": "4SW3jXuPnHQhMCRpRYtMUFbrEwNbKVsGKL97g2Eey3pmHZTGh7BRrf2KhAp3EEvHbU8mGah9EPksp7PhoRTeFVMy",
  "key6": "5xK3vqLMffNGNhuefMmQhLmXLAk72XFoBHh1uzhWsgJwjheqEScQoraskEuoGj6BDXZpQ6oCvrrn67UUuMYe8S1o",
  "key7": "vFu3qG71wM8AQRCkshjsb3bj9zcEw1QGsU1XNXTUtAbuRorh961dmdp4wf5rhXMaR6PwDPDJT9sE7hZfqfBW1Vv",
  "key8": "yzCi6suoYQeVsatZEbM8n4c446NG5tAVqdsXwmNX9ysH8TzTYoYNCNHwynnvtHDW9gtqPYAUs8Ty6wexJdEYudW",
  "key9": "31Fi1nj98BBzvBQekY6HkzT5X2jmmW7jqxqUU19c4XcAtuaQZGbzS9zfmx6yDRX4PkHHaY92NEpKLa8PuRYeGFCe",
  "key10": "5DDu8CdGQPHTg5HGVpwRHdvpbNDn3BjHp6EWykGmC1bNwnhM2qJUouaroov4YMftYSk1sPzruBScFMqxMaaArLrK",
  "key11": "34XvC4GU7PFWZAwTgMPBxJyhhixBsPrpFXXmKC67G57WQto5d1A9krq1qi31bNFYFUbGbD8tE81sT1N8mzy3FuMN",
  "key12": "2VbDUpErYe3K5vk8Xrpnqj8534iZW6JR1DdXwY5e4G5hoFvc9JeEeCYTjY9ZQeyg3Smtq7T6nxYbtTRUHCd7DfLS",
  "key13": "36G8R9FwX2QdyAu5JY1LRprudU4DRrTepyX3rDeKvWPkBZ7ewNFa6g8x166A3nzEQef1mtz2nvaVst3c9ATvW2qJ",
  "key14": "662g93LAocEsYKQqKJxJ4TvrzsqghjP9wQArLZvHhkiipvKtfEBkEWkgJDmt1yHhYSjRQctkwQSepExjEYF3MF2d",
  "key15": "2D9bpqADdgQx677KL35EhGbrnYmgokwdNtfrGtj9JZ8ZdYCD534M5qpeED8X2dwWQkUHCEvgG3327fGtv1oKvR2Q",
  "key16": "2en6RQJ9QKH2sfLCHWWp5FuH82pLsLVmpccxcUSGbBp41VjypUntZsMY5FfQLZo7J29XwjptfqrE956JTL1ZeM3p",
  "key17": "122V8v6Hi6PKHXvsurqkCGXRARNyZNhTZiJKczQvfvD1r2MSk2rHocoNKhEbdLJwvq4pWfih1DhgkMRJoXD5EYXr",
  "key18": "5aTbrq4A3YPS6YtaFmZSMoUuGnYF7FoxFXTQ4HyzRhfteC732FvpYoEGCGpZFMeAEg7RfgBDtnsSNo5NsLahn5QC",
  "key19": "2Xt31b1b5CbG5NFUFMVyWxYq7yB1rC938z4ywVhdr2yQFqN16Nq5TFeMQ9XPviTNpsyFLW8yp54UQBnF4HSpM5au",
  "key20": "3uCyvwXwWcYHUDYhNXWcmBzenv3CmZcvwEHk1vJNReCNMgozW4n4prcUpGUhcVqiDQ5qsCS1xJHBUSPptzbxcsRe",
  "key21": "2anReen47RGfVXy9Dq8strT5R1AfkuS8KAvvA3bpLm36Ku9hQoKQMvnUGLvEs7Zk213FLm1MpkXZqZqUi4vPkbkR",
  "key22": "5Shfx62pThDJ5aqADZxLNe3n2FcUtoq7EicW2jqHSmPG4AV45mzcHCAWoLj7DYv7fcyWsQUHnZdvVEXFxsgfPxeq",
  "key23": "251JQsGq2WWqZX2Y5mkAZdxs8V5tNGbEpxJsAahxzeV5kdjmKqgBNTy3FeFY6SMc6Ys6kgzREhtDhiheQqVRzemo",
  "key24": "5T1HU7K2ex7nzY3gzBfi8HBRGqMbp8WzjczToP28kPgrpRNr1zYTFZEg1WozKJLqy1umSkuKAT5fbSsRZvteFYDs",
  "key25": "2rja4JNh8o38kbysB2SdkAXCFgkkmTBSFupLRmLQuRcT2E5TWUT2nm9pccJqh81R5tUPNwXMDLb8zop5PbxuDwEF",
  "key26": "3rqEz3DurmU9653qLfXpw2HcAByCoF6HCJk4ce3SqyXiDm5WEKUQ8fMbyz5XeEeN1GD31jnLngRnKzBSZ41YnzuW",
  "key27": "51dBddYEtXuZEqHWddprhSCxz7o5QnwMk3TBrzxcdrfxUDeaDH4B4KZUkL9miSUca7U7ruibxFfoPSjtNgMrYw4d",
  "key28": "4UPwaaFeyru6yCjQeW2GzWqcMHaYpUGtJ9BqLsGPHCUMnNgPXqhWftqX7gwAcLAC1fB3QdQZUeoEiwHEZ9RVhgfs",
  "key29": "4Pry44hwwoU2HndX1ekAHTCs5puEwzCNipnLeNUykQumEdFFkKfKyY9UAGtcU7KdVBDAM9kqnd96UFg5QbYfjuj2",
  "key30": "4SfPzwBHLrwQpYrmb8XQXduFc5pMeeaX5NvkJP2sDEpNXucrWvyNXDAhp2innexCJ4pUMiz93ZmyugJWAbXWRpks",
  "key31": "2qfPB79Wz3J8xr44S8fddHr3xjNJHtZ4CUEQbfmtSVEBa4ogAjpK4WdVUfeD1erDLHyrEXhqeDfcVGcR6sacCtWf",
  "key32": "5Pm6Wo6t9rLNYKv48CAK2a1fTHX5wi5fWMof9CNB4HAjoRYYMuaQbVtfeSr6GD3KQNRfDfgnduDKnBK7PwvK8fnC",
  "key33": "5CE8mbP1dwxn8L1vW2vDrGbHaN2enjYWoUzZ33FC1DHun8f1UKjQ9aU21SMBvQcnz4PGu1nt3Xa9MciUEm7Mc8sc",
  "key34": "4f6inWAq3hcZhuHxtCABhFB7kgP2Z5LCAgW1xoGYqorA3ip1ijcfAkXkvekCU3bUumazzUoaDSMR2oyaNFrhkpQ4",
  "key35": "CGfshJww3VPUbUvsY7DsF6FyYEU2uBcdFm6VwDvfwkafv8aTp5XYRJUxSFLLAFav1ssd1tCd6kjtq8MS7vGzweR",
  "key36": "3gxjuLKQQYLjCAcpByES4vwcvaUunXCnnYBT5r9tzHjfUc2fCnoPVyMGyV9VUNC9FJuZ4Bmej19SCM2BJfHPLk7P",
  "key37": "4cobV71ayN2e1JzcREQ1MYujwyZXneS6fubmnvPxZFXTF4AM9DJuKg5QQkkTFbcDnXvqNxkCZN9e19CJ5vfjjRPN",
  "key38": "4oAQ1LQjSAcH5UsEZSfqZTQg1twyVn9xj9iRf4GzFhY1Q55pb74xuDEGT2pfUtz26MkX7SdxFnXbXKM6L4eN9ce6",
  "key39": "4ygLv2FweX9jzfHoj9dAiZFvEqnCDcuBnTX3ZcCFhiHnGVv6iBSEWUj4ajkoH61CmBEB2Ta5gTtgAvujXjsTzrQz",
  "key40": "4BCZPaZkWrSGn6m1RLbUGBAWnj5DuuaaFytPSZntdELL4zmVYjE75jFgbg2qG7dbUJxnWvZgKSijJ6LJAwg3CsqB",
  "key41": "qxcKSYAHj7kSryNCjHDFZPbMxZz4eGRQRj1usgPXUmhPkNsDTgymXoJvS2oiYFvb6aPR1p9NSRKTFwjQwhrvoqv",
  "key42": "5qPyggiJg7drV7YL9ZNR5Y27VXsqsSiySYRoz3kTeoaJKMUZ9ZAuDwafQcqrBh5wTgCCb6RXuBdDYMBB6QFmqsWB",
  "key43": "4ZgPaqVSQM3YAqb6DGoKEdVv7svY4vNpJXenF5nwVyN1jBLPb1tsCEukoka65qHaw61HjB3VM2CnHWKqKWZvRvrG",
  "key44": "2bkcFdZGsHBSTMUAM1konTstNpjTGuLGC8aHZrvXNRFzqwH8hSk73kZX6F7d6N5sMwdsKTx8tPpv8Wun46AtsN15",
  "key45": "4P9ziLwbAKA6oQJVdVW8x4CgxYeWpGH6pBBM1FAxMovJexpjD8ZsC3wKxvTv7HeojChq7hX7ZCDYF1kxCRASwoCg",
  "key46": "2MjnknDRqLTPNyZQ7N5R4p9pRYLpn3GVxDJ18FYf3g3sqAt9qLQgjkdAje2g1ox4e6JEhk7Nx7gepSfMBe2dGrZB",
  "key47": "2LqZB4bVfUB4TZ9UjTawatBKwu3X28pZ497qTc2FuzeWT9HrayaJnTWqJZVQyDW9v6gGdJqFR93QmTHVYftVpyMS",
  "key48": "3KKCGpDYJoQ5KY5Uxo6weJn3HkHu8YRfXCteiKj8aSncbCcQrKPpMA7T5DfxV19RwsjYhrLK6SNYPQb4iDRBqKau"
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
