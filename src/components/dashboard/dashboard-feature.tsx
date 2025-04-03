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
    "2SdbyWtgHRmpnLmgBiLX9YR2XYvoKoKekBkkkqhVeH62QknXMmtdv6LDWaweCQ2g1vqTdVngfeTZvq3eQ3LNUHvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ENFbWhckv7UbmWecz2MAHGJmCdVSzi5gviBwVa9oxWxCyVo5TMQTKQ9qU16dfbzfsLVm8NRwxFjM3iXYyfBqW73",
  "key1": "5zVzXJbp9yhcqudtuVUfrQkGfpAQGMCRa5MSDJgKpLJ2hJTgfxR8xpfDJpXEMdBMNFktoggJLAGEg7JG4JFXu8a3",
  "key2": "5yEyZ68QKXBWd5LjYCStcHAHHzooHHVwTRBTd2wvWkZFNLtZtYVyFzn3ReGhWRmvQ2tm4AiJdN8GpZpRDKi9gP5c",
  "key3": "4mrEERa9MfrcqpMxqYBucZxf5ykg35Zye2VdrtvYiy52sYamYmhHMc4qWVMpQmfHRoBtQfHv7gBCFhuVAP6RkjRo",
  "key4": "Rd8qXT6quCdu6f3e2kj5qonxecHv7NmuEXULpfPAMB7PiXTKSTLkFj9uqAUXySFpcmHBPkn9urDhj81Rz8k3h5B",
  "key5": "5gStqSv6YPBN31oe2oEJEb5zWh57hSRzSfAdCpBcy4E6sypzhho7HnyQJKTZFRh5oH2NmvojDLKxCYx9uvDsStfC",
  "key6": "32aPAdLZTMFaLK3AvwPr8hNAkuMT5byEMmDstWwVGeivawtDStdDPYm5Cxm91cqPTzcjYHFqcM3nXC1aARxmcbhw",
  "key7": "h17VvDZU7jE8Y49hukWKrbmTypYK22UCFUBwQ82ngpzykSYKzR85EUAbLhmKKEos74PRXzBs3i3zN7TKTYz8UpB",
  "key8": "3NCMw9LPBts8nCk9gKjZUsPq9izQYWsaqWVZMnTn7nkTwKvMgEHaaWWjntWPBSf4uWg252NarVjnJVVedszSmjsC",
  "key9": "LWAC9EVdZGf2xAyQw7b3Sh9Rcpku1d9umS7La4ZK5xH8McGohEdu4GGNb9DqLhJx3VwZ2Rabg3Rp1exFFB6nax2",
  "key10": "26UDPeprcoZ9hTGED9yXF8qb7VMkAuAK5wioxjUKtq9zVvmexYA4z7MyjYkhR2dz7YSAyx9KLYoHVpMap9THFQvh",
  "key11": "2bWpESGxogs9Pj9LJ6C9jbkdnVx42moNWEFU9KsoBqJEZKdatzx1LywVfLkqSESh2nGibw5rCHzKdUupM5VUPioq",
  "key12": "55eN9icv5KdceyxuVF8roUTRtmtfrY9eyizyLTJXEkY7EsHAQq6nxKfQieHxjpm2cpR4nwP22PX7zpaeKwnoFHaJ",
  "key13": "3vD3BTXL84ZmLyekFYHCP7y6cAS3tjVESXMG6xVutFHmDfXEtG5VG7JStHxjymDQi2ABRspmEgxKoAY5E4yhHWrV",
  "key14": "3zjsZif3triLUtaCgfE1nauc4UzsjGD2B5HjUgen7XaXxn3fG3wG7mb3cGEofiQkv8dvi935KyywNkR3RbQPnLua",
  "key15": "4Hr3Lf6t7XCkuHatFe4BMjvg4qEMRUqjQAWJaeGz8MTWF3ovNB4uf1nAtrWsa63Zqyi4kRQPSPRGmoJbJS6njnT7",
  "key16": "LydC4rEdqKwbxcF5DddYY4CkFYyRREe1uzmvM6AZSBKxp2okzv2FQWAVPcgdypZ2tC4PYGDBdByxUMkpYSbPSGA",
  "key17": "2gcLeRarmCJNoXQLCwK137k8a863QBPWAD2x4z2qRnguEsSb7HQL9pbCwqJspXJbjhWxsYoQG3Hhwep2orQB5Xj9",
  "key18": "3a4yRttHfA7AZVMKzCFJ8fHGNpnKNJYPTLA6sZKMCpzL7L6ASjFzDdVWPmj13H6s5ZBL1635xhzMjX3muX9M617D",
  "key19": "vbxoEYEHeyKCkkBdGqeRPbeGz156NKvtBJETcb8R7mhHfAnSQ2mEas1Z5ssSwY9LYdmwN6LZucs274qxphncZRK",
  "key20": "2dahAqbURnVhqNQDSBzPuFnjyDFjQPsdHr7EWe7FiddSDhQsDsZFMB8o1vhKLTdh4aS1LUjiHyPuYKzrLXjcv59y",
  "key21": "3Ci3RoEnRsSejrMwZ5x7fo6N8xxbaJZ48eFvt5aU6uexvY7j5A2KKwAXuuDf7ejrzjwmb6PibHS3ReVyEu7vJyHN",
  "key22": "2dLcVSV6ushCJLLWCLGaBWZEsNnJH3JMjozQTAC5QxLyCwpGykfoxsoeGUpPYL7bu5chNpmaZeRwsBQL9oBVSCBd",
  "key23": "313GvmW7RvoJ8Q5k2DQXo2S2CSwsfpi9gvoA2Y5WDn1nmCr4NXYFJWuAhcz226Ptk6tGLxwWuoYqtcEu4yV6NJV5",
  "key24": "K4e3QvLGeCu1EDPgUNQBZiiLAQsrKvixjnY6tNYVVdHWPw2JGD4gvS54nCBpkWoNQxrYMXbouEyw51AmPv2JGKE",
  "key25": "WdGKxA9ZSxqLuAE1bFQQeYXcdWydQpCaCBNY9FmsQ5BjvgFcSbvQPxYZnX3uPPCCBmRzh1GATuDtY6nNM2nwVNw",
  "key26": "B3P6Li2v2DSQC7U5vNNAhjgxewgXtPpofW2ZkYv3L7PHczwqf52KXUS5qTJHXhpDQXddWEXGJyQ1AviokoqAsUZ",
  "key27": "3d8dFwn8ZxuBsKSZ4AUNktm3JQVtXAGDsq87TNcZqSuMEfawBJdvErUBmD4G4iyrWCk5xUWJgsuGxBprrWisZMz1",
  "key28": "Qqmchd3bkekXHd9wY8sGR2sMDcxBRPRMT8WLxNJ71oZKbY41Fe4Mqxo8FoF8yABRX6GMk1bVzLDwoM2NUnZwzTq",
  "key29": "47W9jts5QWPPqB5odq1o35m5rEf5p3hJ7QwJ6ViCTQ43QWhMoTQu76Eg1YzawgmJzgdk1QD2EDjbodWkWV7NtQdr",
  "key30": "5YrHJscjznbApcZmWymgiy5jfSCEHhwjZCbBe6vPyrQYVyfuXauLMcUQh54h7h1E9YzWaqykWdui8WmrZsSaznji",
  "key31": "4oz8wJ9hnDi1vKCZn2WUXNCCfaQox835UmRH95EEGhRyjNT7tFpc7FyMAj5B5nHrkvv8FyvpEkexVcaGCkt3qibG",
  "key32": "5fZiUUUGyQA4HkW1N5u3hJLeVooyGu9CHWzb7XPGmRuecgcqZkm7EBY6XSP2GWcxoaimaMqhDELNVaBnm7L3AN3x",
  "key33": "2hsYWaWtQEASRQwzp99s8tPJHKJvh3S7pcmFcExAqqyfRbWYE82EuwuB1k6nYMGo1KBZAaJbKkDEjwsF7xYnri5N",
  "key34": "KtfqnwkMjfUYabqXrUzk1TjKuGbFECnXkCZamUwWg9BEqoTdMpt3vAJBefFdoth62ZgzPbBRjMu2E3DsqfKc2Zp",
  "key35": "61EBTxdnGdL1MmtUHTSJ9ruSRTtF7HeyoG8nQThjuH2Fda1AXpTbhbPidS6qzKGvpA786o2suZ36XRnua6R98T2R",
  "key36": "4mTLd7wYhdZf54RgW8uYYBHTcQKejqNRQu4jMy5u4hGoVeTv7hkpmSemqnHUkL1JD1ATKsgfBiT7rn926XLJiNvJ",
  "key37": "527wt3W5YRydyUUYZUvMjQm8peMNYNLYVgeXGpFBroHbtGGuEySBzJ7f4MMKqXxmjFD4kWu4J4S5SPd9aXLGdNZL",
  "key38": "3bz1aapVEkWMt9qA3GQTjAEwWYKYvVR5mNoNejc9MTbcNiVPeB5ZZFrGXZgTeHnb1Ezb1LWczuFywGwcjcNYUczB",
  "key39": "oTAoZ2sDEmnK4kSVMPKWMS1nqvhXycMXZLgM56FmE16Y1uKb9dZB9o7n1edJu8ideZNR8zaoyzSjQPGLkcnZtw8",
  "key40": "2gzMsfLUqgKFoEEFcV9fhRKRStdQ14DEGkH1yZaJsaX6kmWQPCHPwvH8KVp6SvRGXf32paZ11YNUVyRhJg9abxw9",
  "key41": "9HLBY4dnCbnhMn1Xygjn2y3oEravrx7iogKpro6hWHhXDJsEdGQXPRCT63bfen5sFvfs2mGz6CQmhkLtDNVtmzv",
  "key42": "4M98jigJ9hH28BMJvFxKLmrDtEQs5SAo3htsJMYQwW7YpYy55gASCYdaZ2AoSjPkLHt4deGRRKBFrfiA7JQvMhd8",
  "key43": "4LCtnz711Fj8PigFDHgKuaNJP2K9T3S1sUBc8C5UrSf9SFmFBKhtWmrgoSGhsetAt21G2NZUUhWTBQxARGVPh4Ck",
  "key44": "5LWz7oGf3JnGqDroskEvynDKAT7Cq2vNNEYpi9uK7NcakFSduuGm2oyLFitqpF2gAZkCBdZTRmwZEjJCUS4bcq85",
  "key45": "5h8T9sx4kfYj7z896tDbuxSubYn8ZFu46M3sFrjHnEfkEC69VHfyu2aWfcSydwE8k3cTn5MCVEgWkH9jHo4uw3e1",
  "key46": "26Xy1wt43NvyeTnMja4SJ9FiXULD2wwLXfo3SaRS5fXkELrhSpvc5PftsSx7PyoKaYaR8zuC2JUUwMRqJ447RYEe",
  "key47": "42R6bnsg2BfgVygeP233sXTkhkFy7TEx9UN9yqrD6fnt8YxZx9ryUXLor6kUV8BuZyXTjQYUffLfToPxVt5KvAgw",
  "key48": "yCL3ktKt5EDa6eUsGtFxo6YRx5bki1yCQUCMcXRs1E2hbyB1MZsTomdghaWCCi9t3BhinM7qsui6emmeKKSG88g"
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
