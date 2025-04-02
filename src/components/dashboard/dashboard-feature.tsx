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
    "2WYRHqnmR5FPWq6T5jMhQJvtRGhBAs1CcnwG49eHSjrS55mmJRcJXb9gvebFdB4WiyZoWnNA8rCv26CGbWBxWmJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4taufE3mEFD3n4iNPAUxixvT4k4dmXfx5hP9kpuExBoBGy2Risbkv7ZitvrLU1tn6vj3zBZrWCnki9VMJkgCtyNz",
  "key1": "4UNQVcbryokKFWMyR7SHAnYyPbiqLW3tU1ojJdSL978nitHiCVM2TK5ZH8thxZLG1Q19cdZpYg6o168CMof7werw",
  "key2": "4bn9FHbfhSPWY9UXwEJMKqZUdb9yWXwXtAT9z53uwLbeFSSR8iEZBuxeUfZPUJ7Mxv2QPD8ff8pEuxHQuYbrFmyR",
  "key3": "5VwGyyrx79rCJzgggfP2MXSGj1eDnKuPdZHgzQvRkoEd2vw6L9cD5oA4UCdz4BHShEMUbjtT9cctZ24ojMJNgFPd",
  "key4": "9VRnzqZsGGkQsXZTuQfw8aJ5iXy4dSkJvizgdNaMVbtjDeaC6kpU2Lc8py6MgKSbzCjwKHhvqtNEA1xE6cfacet",
  "key5": "ug7t9878P9ShH8St4x4oLxecpEdgkBJRThY78QxbRWFmVwrMdMZqtmiwmEikXZqf3oRqP9qchAHmuBwFMop6HrG",
  "key6": "5DVa1fRzB8ctTw5frkyb8vsPayc7hPiRC7J9g76xpsiEDFzUiw57dShuaqwUgduBdwtTrBWhNCNhFXhQte2xJ6dx",
  "key7": "4Xqs6dEDFDeCt8UiWvivQti8SPeZ8EZ4NABWrjd8G2tKoyCyK8PztpFyoz7FuHw43cAYCeHx1wGp5y6cXA3PmudT",
  "key8": "tpT1xVcAh4TjayF3kx4gPK7635tq6FkYgHn2zu37WucCJKov3EdB34Q5nGJWhzTpKJR3BGa73a6xmNqFp2FfVBF",
  "key9": "4wjSPFta9A5b1RixQjv4n5BXLVMggLiJTpxhMQT5DCoSoJgGgY4ZR5hmPZAAKdFrr7NwNNGm7Pqr7qqNK322TKsB",
  "key10": "5345tvvNC1w8BjM5ZwptG6Rxv8cVj2mt65iQ2k2yGp4BWZ6y2qefh2t8g2LzWMDcPyqcAb3DmVS6xXJXgiKcY6aC",
  "key11": "5kDPYBx8QCk8Sz4L2YoFZkL2vezahTbVonyCDbyhtM3x7JHM4R8n5BhopqXedRkpUNh1JY5mFrxqqStwAfptqbor",
  "key12": "26JysqnpUz14FNnGdYevEKyESaQVArZtcxG1x6F8rvDDHynG1pk6RjpMQgKnan3suz3Dk1VeyqnkfxfGVbCRVLmY",
  "key13": "2QZUYC1U3wyNQiKQagz8B6RJphwTGMmgdhguzeiTaTTM6yTTAK7XVaa7D8EXEwax98DoYh1w8gnnYf6VVyAdYdpZ",
  "key14": "o6oe4vzNAa9URfgjRLfQzZyUdiJPH29AeRgMzrm2cFYxNfJWhAMmqzsi4mLXmrQoY8oYjq2sq3QSTvEJUurH5WG",
  "key15": "59tUiaZWxgJoYXGBHT7rHHGM8yNjBhcdYrVSnVc1Rq2F9EnB7Lh3Z1wttagRBxLqz72LSTT4tj7ireNb67qcF4Tr",
  "key16": "4dnp43b6nx3kNcxZJdN7YYhFDC6Hmbo1HNxsuWRpMX6eEjizbzN4hNhDivaACRnqXJcJoLoJcRgJTK9Y2gWAagBv",
  "key17": "2LbyRf1RViShvhjTvevtgsonRDNRXmBmrt6XtGviE6CQ2ny7UYsPqN59YVz8XpkbCU4KYYGVdSWzTYzr62nPFEyb",
  "key18": "3hjV4HvgiAMNmwsCocrCzf3HymaznHKVoArJt84xhzCYV4MVjJvBuE224ziwpZi4mYMXYzbnMZEhHesGNHdhipW4",
  "key19": "3Lv3w3nAuQp9ZA8Vdb8yDTnSsAHJk1TreEbXFSN89tk1hE81E1uy8JYEGxCHugaCKJWcU7eHaKe9mCZbUvdbBjHJ",
  "key20": "2Dn3ZRbNzCE1qsYB9WvEiwkBt9toqrMgiieDPC6AzgkwrXRYefi3x91hxJnywRV2XcbuhuLKxSnex1HPPdDqyNUG",
  "key21": "2xUGrTGRzqPXKBfDt6jrVRvKkMvbpB5DTnwqchqvQ1SNUSNab8edMj4zPpvhKpo19oLxm4gf5AeiMooCWc6iwJUK",
  "key22": "MX71KbysFFU9CxQicY5jiLyvAW8KSfjjuh3kp5SDWFxZJV8LHnq59vLMNyVGedm5kFR3cEzrbVbpwC6NCgBJ8zb",
  "key23": "3eeTEhuyCw9F5XJBBM8KXxh1NkrXb6nPgem7NALnThDXN5YAHZjAy9fqv5bHm4LPN7hJeuUmgnSQGYqjow6xemB4",
  "key24": "66UrF8C3bTfSpb41fzFCRpLmuKstsjfbs4Bk2ZgZT4zxGPYTPV6FCxqpcTJvQZXRhYmDU7MhamZfwFe6irqugp5n",
  "key25": "4nUygQKMpYXPbCJvQrproqEW5cijJbFoxTpUc9HfdTnjqiPFDXXQjXTS6TTZzeQPFLEXxC3yYfX7xJsWR7QZ6uQo",
  "key26": "qn1rt9GyfbMNv5pTWFVFruCYipaTiNBjooSohngkowpGj877EQuboWtn5EDp9ZnTYj6RozqSQ185F5oNWAXvwN6",
  "key27": "3dMxLfdhUWVH2sAzGF6o6ZsWEoo3Ds4iUmayzbr1MnxnsA9c1JYoQ6Cw2mPdZqhX5sKbonKRffZejwjPhuohjSL3",
  "key28": "DmpK9hPmPzKCVpxwnxqR874KU9sngt3GD3LTsX6qp9yJPRDZnqBbMGQqwuRTZhRFzKxLSj5GxdCKCLCDBJezX6C",
  "key29": "3yWc3Es9tiymvyoxjkwW85L5ifXi1GHjjunMgpMr4WT596Uv5BFETMUSXhY4PswyM967hdRKw8uKB63akR3fTHgu",
  "key30": "26sUqkgLX4qZZEdu2EeebaGAH6Ti6GhFJSLRrEUiLNfzBbn5fNWisdq6h9ai5mLnX29Mn9PsP8MLTKkm6SBMjkAF",
  "key31": "TgT8sXzj5mnBxp5SuA57gP6SC3at6MnhckVdAS5i6AcrFr8Z7MG8SNnrDnmWGsTaUgQVBhvQwUADSXR75szFbVW",
  "key32": "55GRjkzG1mA2iuLbV3C2CtTLcCbpqUUqKU7xiNpF1Ra2ThztmeydjzpYWtbMiCaFhcmkxCRdycBqHfGnjBspgT3j",
  "key33": "3p6bgEn1feTZg3YZA61adw9d8gcNVpLtF4bcPFqNuNPgqLsD5fLTLqupCbqddZPejmwZAvh9aFjcybZamR5meudS",
  "key34": "8moZYADmkTpvkhb4q8zqMoDA5sfnaAguchMPcUNBeHHazvvHEvzBDbMYKsnRUjeCzyGarhs2yEzRk64u82W2UnW",
  "key35": "5DRidjGm7ZucnpES3yAwWHuxREBzA8dTrgBnAaoLMwHZi7M3ychfAoXP9SwLD7AvuyYQWHk5vcmm1LUnUv5pdar1",
  "key36": "7W7Ee2FXD8m2KT2fVC2t7ti7kidGRxKn2zCGAhBSVAEXh5kMqy4CZP4Z6Ro9bBHY2NbCvhzbBYryjrbqWYZkxJA"
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
