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
    "2ZzUtqm4EQhTkDu4gMQVfTrqv5AsgV7XoKMP4758XWCRuYMqHxiff5HyunZSgbYQH2wqrK1vrhm9PhKJTJiyd1kQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nTKx643eB4xYj8c7xznvmVkB1xUjuy1D9RGBA8W4d1DyYw5RqqjNmfRLtmbTrvZuUduKWJoqZoF4iNmUDJrVw7F",
  "key1": "26cXbtMHJeFftEdrn7CiRJUZZuSAogxu2qByNtFkzV6fe6zPVqEzErArTVU23hhtW1RGg4Gf7rmNFVMQaLzjTi5x",
  "key2": "pNwPFyzCZx6QLn9ojHrksyCVs5EppUYKwd46DuPWgWym5oEou2Mg6BHBTkLUX37NbDh8gDqt8bwo8W5Nx3rr8dF",
  "key3": "3xcjvzmwRLMVfrKc8aYWZU43qWu1M4KFCbHg51zUY7ZxyRqKaYTGwAZSMohtVv2WBXLJzaxY5Q2PxWhq6u4MhEM3",
  "key4": "3YbBktHk3vzNkYQ9evDoJJbeF9kQuHHDBvY8Huw21G29LE2nAfvsqmdzAdEFTZMB8HAW1MKvMgUTmdfAiqBGTje3",
  "key5": "4H9JrtG2vhrx57gtoKDALkV8CRX1SCZiPysEWbdiQkKH2eMeUSafXNyQKbBztmuuS33cLeMmJ2BhbKaKF2zvcUQu",
  "key6": "2kc14snHg4Zzz3t9sxBcoUobpeUwRreRkgvzoCMsKHaRkMUsz6cp4yAkUBFZm3iwLxPawjqirM7xW8ak6871N7Yj",
  "key7": "4buFKs8eofdSv1pzWC9eSAbxYR8rythvxACNfjovYbnbSaqb7y6u2SgENENW8GxYbfsdbHiXY6VSHbdNnPvUHSqp",
  "key8": "27dThPCGVxJhaJrPUwiyyBtDfVTJnxTNxs2i2b1eP4LL7k2AVJkBEwAofeMGQdfzx9MCpErLv174xEB6AZTwLToG",
  "key9": "5q6dHGKGZtfh5ZfcKnJfJR5WaP9kh7fMZAboEmYFJfoaBUaALFNk3XDdtvSSheoGJtcJoqW2CfnJrAfaxwbnXcsv",
  "key10": "2cL4VyVZUxAJKfHTVj3kTNhiXks8xpj9kux76821ss2B9hmpv2Txh7NYxGujUCVAjTypfP473638JEM3oFCzMriA",
  "key11": "4wnLbQ9CgAWjRtTVpM2RAQnvAgLW1eyWdNASizrAbmLSGmE4acx8PMP36smDEMDrX8jm23hideuHCzEMNJkAiM8U",
  "key12": "3uxVVLwd1P9BxrigsRqALXLarnqm5Mizz9M5zMsGb4Skiwjova78VaivcM4ie3pXcZ5cdPYQYJXjP1ZH57F9ky6T",
  "key13": "4ofop2KrSHNN8nCqtNyPV5NJULzZVRjg4Rx9Gcvn88dJwrw1kk7owDhuE2ys4KLrqYaCznTLyVhBnFBnpvfESqoc",
  "key14": "bDpBqnYbhQqj18zhFJmw75BNC1XozUKju8FNBsvf7tuZaVGkNjNv7ym8MeZqZqo1QLJYDabEX2EV1Lq38X1MiwN",
  "key15": "4xVbmQYaycALH9KqYwyMev2hHpA8abLc1QBtGqyj3F8RLLkLp6raWUkETrAQhXKHuEAXGdS1v83Rg9cdKss5jFsA",
  "key16": "21TkQBc9Hp6M5gWz2GxiSnUvWYR1fQtRfeTNq9GBKQVB5SMWuevmZyqgqvMuEk6QHkUHJzoFHekDeuVLKx3rNUtb",
  "key17": "2TqD2E2Txk1dPac3eKMxRcYqgzK2UP4SLLg47KpFHjwHXcCQBeJRpe8jtfFXMiHPsGB678hnd2xybqAA9aZfshj8",
  "key18": "36kFG5wPHDq5e1kXtofBomxFbbJME4KfAxd1uFuU2WenEScjU4J4qep2gXak79KtNKpBNZQnGK4uTw5aQBkMvCKw",
  "key19": "5JJxikg59uXA1WSQJL1hwmphAmYfyz2ALjUR57kKEukLqoodQAcvgj38CeB1sDPe2mZCNTEomEimZPrkHTc8ambu",
  "key20": "MsmZ6FXq3ejWaq68LQqgrwLzd2nWHcmqMo553dYNZDiFS1UkezQ69zyrfR8gjxeNtBf31DuhHkyno1QbPsu2q8D",
  "key21": "2bzac4MkXWcWsnAJjdhzrcwsJ2EY4CBB5GUTNGjL8Sm8Ex7LKGL4xNtAptVU6wWGZqRTVtr46KLzcTwJTU151Dni",
  "key22": "2uUBeQVGt6dJHZ6EnWRkky1w24VLec77cFmHhvi1qjPpbcEnV3SyroHiPp19638Z3ZSHuPnBLo4a6NBcNz2AMvh3",
  "key23": "3WPUj74RyA4tv4PUKWxdSMunwJKrQjEQhJN73EDMCpi9m8sJ8NSjsS41T7cGXj95E833Nv6TD4vvfwx8QCkXXGcP",
  "key24": "e5uTHpU1hxcfMgQMevAV75aPpxUMF6r5GiPBVH5ypeNevQBMh2mgxsidZbG8tijodQB8LqS4nthqEvV6eWmgRzX",
  "key25": "2dWydVGrws1n7uKx5sfoBuVmcM4e1vaHKW4EVqxcNYFgJKCesTgK3YXWRatrH8AZ8VFWDdsw2ZT9W4qB6wiEbPJ",
  "key26": "3sD1TXcaa3kSz29GTT5aGBiMydYEJaRXN3JQikmGqeeYLcoWPzU1hpikQC1jpMS5DibH5L1YDu6Ybq3uw5WLYH51",
  "key27": "2oqt3tS1p5DSnJ3RqPHyEn2pePEKQRbGDfpjVSWCuEKqhStUUWvPzKqQBobegxg9wZuzULLkuRFhCq3kdBkgG1zY",
  "key28": "2BLpJuN1tLzGF6UAksCQCf5t8kR99VwzuefFZ6wdxXDzPbAZ8D4UtU6HJsdoMqUzYMUFHvm3X8jM2Z8JhMeg1v6W",
  "key29": "2wwEwiPAJF2UU6BQHdUqW5MdwQcvmPJa8yJyFyPxeKdW9ECaDKYD7HqcKKbo9eQnD3mst8JzwwYDYWtEptFsxJQZ",
  "key30": "2orwdwARQyGMmGcrPZTv8kN29zv72W9GnzqraJ7ZBZR5GAASfngnVx24KNXYtsPn2EM3njhqcvXkvRdLVwSiFgP1"
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
