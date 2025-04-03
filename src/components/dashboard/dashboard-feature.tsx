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
    "jTLwqzxNH3jkncCS32UCLSnbaH2VEb4TfZfvqFKieVd2JafjVtGozJVmVtfLhaSqzwHgQgyfvDH4jk3EqS1YWuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gE8DKx8EtoRd5JiHBrDRAFYPDEraEL2YNUdNUZV2P5D3YbLBCnJgVDS3SACvLr4YS5UAE3KHt55gtnffhLhdi8N",
  "key1": "3A4sMQcYKdd3p5dhcA24jGectLirhjucuFXKzuBmsuZkpSAjazC8Kr8P4A9fHL2CG93DKxK4xJwK6S2b4tMRHtYN",
  "key2": "2J7UtoPgn99rCossAtLMwQuDEns2mpwKmkBc8VgNELjWJMcdiQVeRWnrW74SeUc9CXCEtuJYMhgvFVRBARMMK8wM",
  "key3": "25o1Y4auLFSHGKBcipCvYbJYZ682MA6N3NnoiK1b8yon178pEqegBj1MpdYA42ZK8DV7v63y8fCUTdStvt9UFEUt",
  "key4": "5Q6CpZPWwciTveHuBmvQWGfJ9RVfqnUGm3qrus7FYfPJ1a45ipiEa9BFakeE8rLXt3Dc9qY2TprfKzgqKhwZSQW8",
  "key5": "5vmeYGZat228cw4t5Y4UF1rpXw56YS4s6kaZWmf56wPayTkLxxvZJcpo1b8VedHMgtiGzzzbBetMQHm8JyUaiTX7",
  "key6": "8eDMzYeDn3cZBVXEWMTHFacagWsdvtVK5BGH2vh8mCqCP9Y1T1UoZeQNPCQjQAjrs7yvZz6wkMqiDDU4sjpmE5Z",
  "key7": "2tgYiY4opsbXs9iUM2DvrYWtmD8o7HhbTQyiABs68sjpTEUemmXcpzjPucjtpqqqKdAbHYiqR2G9adhi96biM4Xt",
  "key8": "3Wb6sfSYr2XPHg95BRY7UeJ1znoXAJFHHWMR7GVawTqvqdzp59EYTRTDCmfrA6upGDimfQrPN2zKX8bRk3RqX1at",
  "key9": "F48qVNWTAnV8HFbZqwuVhEkLdjyCtn4ZvmL4aur4awyhEZXjUwkQHCfxDEGg2NjzBzwLr4vdfDqFSGhAjV6eRZG",
  "key10": "5767oFmhd4SNHz5ULYuMfxqHxr8UezVinKvvcwbcjeLP3JThZcQo1JzLEpF7oiw3n4yAukKMiGjQhssPuzVijTc9",
  "key11": "4EKzHPxJmQGKsNSKqkCXvvtHcBpGFDUmP76C4PHg291R1fhvL3eJmiczawWMgPxtuiUpk72HvAb4ZVUfU9wzF9qy",
  "key12": "f4gfhZHBCHYwxcv7nxESKm3htdevsTDuc2psW5QB4krcnfwZeAS8bCUvwYaZUPhnyNEzMUqgzonjYUMj5UcVFwN",
  "key13": "2EkeAiGwdKCMK5PQosJaUR1f9nKQKor8qAVP3qSaV5LRKxnwDq6s3yubTme7JcDHb2txqSC1jYAsiHToAoVDt11w",
  "key14": "3L9T4feLS2A8Ue1vGDN6rrtdBKZzjnJnxV4tPcsHTw37bQaGE9rg597CKa5u5yRFQ1Xjc64RsC5rga29dAArfat4",
  "key15": "5qqCmsxBJvEnFxL3znJZTvAdyFYUyubu2BS9pR2LKcoMdi9xg248Dyhse9ctMjamYQ7Gn3Wg3MumTnaT1pCGW8vJ",
  "key16": "2eXU46kjp5nD4Z6NUrzATwRAHJnc8osJW6zWh7PGQZJ2SYAgymdwgdtrGGNZSbNW8sXuFJ4mNFQ5oekfqW6WbUD4",
  "key17": "5dtCJKrTq3boxjohk8KmhSufVUrnBGJxKwh8x9Ba9MfGZY9ZqV5D1rWUpAUYNUTEyTh1bWytFZbm8Zg27WpW7bLS",
  "key18": "5SF8VfWu3cCUqa4eta9bw93gNDL8QqKomW3PK1sk91bZA8CUpcEz9So1AoZ52aRF4VFWZK49KHCFeu2PNLd84TgL",
  "key19": "76jxAMbf95TqYXkbgT855XopwsB6NSiRkzUiskXL13aMMED4pqN93MAZ9J45w9Z5oBxT7R57NuuMxfxwt5aXvYm",
  "key20": "4i1vVwwAK4GcapTsJ1QxQb3QAgVWnuSsj6CZ39prNrofnQPNfjds5HEDoLmdm8kCUxQ7jNZVVQPc1scj1dd8E3zr",
  "key21": "4j8AmzBg2SpKrpD3PTvZhuTCsAcXBWi97JDmrsarfd9zhiMzvTytQYcaE9saBHqjXdHSu1i3oqWoi3w9pEtse9oT",
  "key22": "5KJW9uUqxruenQfoW4P2c39mdLonebShcCbLJh4jQQz4zZR393uXpW4kYCPZAj4XeN9s75zEEMso1cGHMSbBwCEz",
  "key23": "64ZySsYDgmpw9xspvvezJcSC7vLux9BM5F8CG9mxjt11HTqXRDyXBwB4rW7C19yMwJ5ceyiF33z6Tnte1DUWiPrw",
  "key24": "5qGeAeKNSvmirLGQrMa4uCBj9BNEuhNcwo3KhKJySPcfg6motJXUMV5cHZHUvNZ4UWE2URPrAufLDaKn4eKqWKfk",
  "key25": "29GYsKKRKoM9Q86yDPzyNGQzV4v5QjdYdxQ2F5EkqD8DF1MkcBNGQo24wdFQZghPcpM6AWKLqqb1n4ELLSPq9Rfa",
  "key26": "47nk3yEyRGbtshPnvTUtHwc3BZmdfHxGPFioqsczsW2XXubyPaxX8dwdEiph8pjxdZCaT37xiRz5usywdGdyFtjY",
  "key27": "ras1aL8QBWC1QEnKuvR8DjYXPdJkQ2AXJYv2UvABpp1div66JDxwdV6PMkoN693VQVEgAp9U37VNrKNQf4W8ojf",
  "key28": "57yfebNYcEfkS7cPU9imHwWKVChN4d8iry15sCRbvC1FSRAR7CtrtYH4jGidpH6xYtsRaHPTB7EY2WXp3pSeegr3",
  "key29": "5PDMb6998MMCWrvcFWCZnEfzjwebQe2RU7yFK83tKqHiUkhBfN6dKMvyzxHAgtYWRUEPQpp93A1dTyQRaTtwxiih",
  "key30": "4YdSDSddTaDAEH6omnckbJ8K3qj4rJDTXLkZyjK7Zovv4G47J724qt6UjPQCmJUM5KjQc3ZCf1oW1mqACLQHoAGc",
  "key31": "4CnopWeEKN2i5SMBJybUm7LRWLYbQic7gUU9QxsCVLdSofX1pkCKiMd5BHKp4mjq5agoDDhnfvGWNuaeKcXSd78A",
  "key32": "2RbatUvpeLTCXeJRw1wPPb1RMdzsjV9pawGbEuksam2TfY95f4DD7yXs7QDvXdcR1tr9DEK92HQLvxY97EPY8pKo",
  "key33": "41iNbYHZXvXpDqbAf6zvMB5jxWQT7UTahuVUVN582EGCHxkX6YGevMU5M2nFxMC8fWdybJzDQJAFJqwArygZ4n8j",
  "key34": "2AzZ1dnfWqgvjTaJLecLYJeKygu9m9ZzLGc473gLZ2bU6ziNgFacZMw6wECz7RHpCYEqCqD6CszyQCWAsD1hPTxW",
  "key35": "4R5Y2YSoPfFJ5hzXab525rQerXnqhtJ3CfdAxHYb4Xyz8QcnnmUvHeDnETjDynWQ8qWsFCgicVzrL1YTz2YULx73",
  "key36": "3gdAoe2Dg2EkT3k18mQesaPFzJbfhP348DoWaaE68v6CjFQd2pS82hRsJz6r62kgQL8hcXP9K2QnWHmmPC7UhyBY",
  "key37": "3Vkc9gZ24KqsKqcq9UKmbpm2MkoTwAU8t7YiscibSJEoeNpAHRaPVRzjfmJVVAWM5tXRDdwFrnxEjMXUCEHeuue6",
  "key38": "4kE25fxWjUpQRPLUvvEbCJmtoGPGNKMcvV5yPfECHZGz1nigHFzPdAfi9pHBWFkzx8GVW2VhV4moTGGgEA82WPQM",
  "key39": "2eoxD71DZMPNuX8wdaFQzSRGJ7pSbA8HfRyLP1hQaif1BdupDykNH9LuY3f5nSm7Xo4X2PnavLAiUoif1kBXNwrr",
  "key40": "4iJhKz7Ts1szgYs2DaPPR5QUPTvU3a33kA8BSPvCiEJ8oEvkfh6V6Hwd7pv9yHpM49gmxUuAynesHGPTgSCMBzL7",
  "key41": "5Q8rH3Lfa4dvzFF5ixr1Gj2G66jrx8iYDJyBNcV4Fpqo6SNDZCxpbrmnkJtLYtNxpUKkZEQdddDkGCBYJ8wGZZzf",
  "key42": "4TXqiNgpkSncByPX4MdjNFA1zrJ3JBty1nFnJ8D4zQHHfiQkHyDjVhw2nPMoXdZYLKvgZiogEA46PFhGjprctkLt",
  "key43": "52fKFtz4b4EfnasPaDLMmekatHYyP3GdeCFzwJ3Wku5Fr223uFaPPn91TeiSohT3ySXH9fUx8GkmyzL9Mqzvdg2m"
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
