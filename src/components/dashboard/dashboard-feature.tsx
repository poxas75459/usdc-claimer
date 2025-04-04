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
    "2Mx6BkV5FeE4FzPK9RAR1bPkb4ADWkRRrBezt5NtwSL4gdLiZ5Ct3HNeRu5MkwyoK6KTZzsyv2BcxrW3e1V1JiJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d21KhXtmsBGkkkpMfwZxvkZH16f3WvWLeSqqGuSstbDpXrZuoezPdc395rjtwsT89PgPLb4nDGbcM5qckuAHn6P",
  "key1": "4Tkp7iwC3roXxpSaKQKVELXyC6qeinjzmPvj2Gcde9drGtdvVELpgRGtJfYbAvUyxHDt4WUXg4QLSRDSTjuWwtt6",
  "key2": "25RtGCxUp382dkMK59R5zB1Jg9zPnh5stNdoueNgnUj7h87en3qfrqkfsBbDscx1g987ezA1KiX6HvQRyRSKAuZh",
  "key3": "5nKEfS2yFytCgU8kDmbUr8Lmx451sL77DxCG6ZyfRKUvP1D5ZWghehRiBzLwFsqVUnoTn6n1ve8KupMCfVQis8Na",
  "key4": "5VkzrnREhcJxoksqCMFwzyCTNuGSuKNcBBEC4sQ5C2uytjJxU5jvQ31JGdQNcnnSJeGxWDezNwc3FWtk96g6uS1y",
  "key5": "2k2pnQmLDe5VoWva2bVExUZe337yGM16bDp4CJmQFDfD3i44zg5DoU12KLQHVr8gzuR3YT1jwjHH5Gc4LSZQvJtD",
  "key6": "3CNhqgXTwHg8mwDEaRjW8RpsAXCKxLrNmJctS9HArrN7V97BGupsrePbP7HBwXJ1AN7VpCXNKbNcM3UB7UsPhaVo",
  "key7": "3Wbu4RgZbyj7enn8j9rFRmJgyRedhRZyVevP5x75det2QdqvmHPDRkwsVFK5yLZnQWqNLedm7D85gLCqiYeccKnG",
  "key8": "4ugRWFgBG1omeXHGHMhYudBr3jtmCE3rFFVWb7FuT9nJbYC6GsZWXniDbCd5498n9RXDqRtnDTEjcq293rxM39UV",
  "key9": "9mBYhPuTCRAUuyRbEy8tzXxjSSNk1h6bMoyfhZ9vDVc6eDaEbR78CZHqBffRsFfo5QshQjuTjfTTftCkMqnZ34u",
  "key10": "3cHsVZQ8eAeWiMbeRSEBeqAKP1MrAT2oYWz8ZXTrfXjEagNrYQsPS3DXXxjXsv81gH9wQBVkkVP7J58hPCGFnUJn",
  "key11": "5P2xBDDuS6W4irmvw3GYSsSsxcDQiyVf9Ea3BUNnauPFBvNXiF6jdLzba9dhkF4wFaWEKeMhnmDdnqfCmEm1bqJU",
  "key12": "2BEJtPmSYWhUy6y644uV2aUUfQAVTJ1GUJq7vpWt2oZgcYq9JkZLmFbnbmb9qxph2jPAgSWSrZJpdcCWGKGTqBv6",
  "key13": "3Ano2JQ1SBBJAMrFkyTZKSt6vo3hokr6j1xM4ePdn6mzG6D1btUb8ShA4bFXfJzkSbDuLbNUhRCfS9mk42Ny7qAe",
  "key14": "uLXPC3QFD5T7g5V1nyCBA573Jp9UxuBiaMeo5pf6cDAefKuUadHeYhmrKFAznsquzpvdrF4sddnFYC6rWBgrN8U",
  "key15": "3yxJ3yeqf1cyNrmsuPJ3oUZ62kqey44Xnc4uUM9QyipxWeK5tAgQ93sbX8JKcgoe7NztkVDx8egb6aVcPXm5Htyi",
  "key16": "74YfgFg239AQAKRgDEhKqYKndpuSbTuBSLgDwmshcPN6w5VMsMBuqHfDZLjAFPQ9AF8oprseUoTGacbaHyTY2fp",
  "key17": "2BnPXBrtqN4i2eJYKrPudXu5KReALW9avivkZJxcbXfXjPUGCAGn6ddb733kfvZ8TrGLXNLUEnQkHULqSGRv38nC",
  "key18": "4cvB91r3LKrCmdUUmPyEsca4kFVhKPSPXiN91tMFDeYSt1E79Z9FXFDif5jX65DtCE8UKsktcZY2vscQXEvF1jKm",
  "key19": "4tfGb2FjdoqqSQ8z42njG6nZ1uDCWS7UYcyU4hhP79GG9MhmpxbMeM7UnxbWbg7bxYy4NkQ8VRkBF7Kfs8Y9P55d",
  "key20": "2zUoPQ9exQqypDopGYzTTvh3bUFKfDvLPBeNoRUuL7pQQqnY9dhhc269or2iWJn3tzzEjUdzZXPcnTibG7uKArZM",
  "key21": "jFoMxj2QFRBhTjD552jPJNpuC4Ezo9zthLuv7TFUk1F5DksSmieo9HGGvkKrFkKjfoAnRoWr68QC4K9HA5THfg8",
  "key22": "36MEkXtNofmMc7Cc4GfC5Ufn6LMd59rhJoz5GMj7SdTAr3degfBHTPvbA3vE9keHWc6HMocXHMixyYXv2w58JBhb",
  "key23": "4KtQuTvsGN8auutGufEcF5jF5UzwaGNGhJ3XAXMzdQubM4P8KBcctnKyeKK8YUemEKmbJ65Kbm7D4VwbDVR1sjZd",
  "key24": "5d6cXAhjiFxDMQ6AZfKFLzKVUtezw3aC3srMxtFFSVWtatQhFUQwHhJP7TBwJznqBbYatSsNAbofKMD86aqnG1x3",
  "key25": "4cAneGQTVHjMjM8DRdDk86B8tZanFqzEwgwyRcW7xc59u56Ny1WKKboNKQcrYakwhyVfs317ARwigqewKHSE3HqH",
  "key26": "53yjzUc2dJ4sQTjQTrGz8GsJVfqnfVtYVo8Lm4TLVJEKk11eNXv2t9jsA6TwDT6BLMT5rkcoZdhnexAgVMnBbJUV",
  "key27": "3nqkvtMXhJAFKy1LFtDakeLh57Jw5V28SCV7tbq8tZE86vo84n3nPMPfvAsnEyVwc9ggzifd6vPCUzLqad8zRzAF",
  "key28": "2sqKDqTxRBKDarL2Vg28bhZ4deg8kB26KC5EWusjmzkJ2REhY6woorC42vAW6uXR3Hk8jMkYA9bmJiJE1hznEH6z",
  "key29": "5X84t5i4MbDK5hcNdjBWjdv5Ce5z6wvRRZWegYbCxTUYZ6otb46XhRusVVDkZMbU32WvmqW5gbD84d21PK4Rzjwr",
  "key30": "5HkbtQD2r8qjFmQBQqnNubMpmNGYuRCC2ZczzTct7u8MbWADHFhAQDxA26CKVFpLeRpCeLUGsaMAQpYW3KkAtgWV",
  "key31": "35fpVyipyKrscRYP5kyCgfmVFnRNsbvC6VeyBZc3nzMzz3a3cim2jxc4VCCk1TKvWQsKicF9Lx8qFoGMx7snfTWz",
  "key32": "5q46xRDHLRc2qjejCcdrK1Gx6kUXkL8B1yz5G1XykcLT1wbtu2WBXaqo22KjsJUtQEvWqGkrqWTe8VyeiVBdhJcw",
  "key33": "fwEptDKRHtFz2jgWFBh9mV1Aucrk936diTqi3yYW5zp48ke5CgJQoHSR5mHDTw4SnfZLjLBNanNg2ZxoNEJ8u5U",
  "key34": "4gJAGfpY24yHSk5KwhPVCY2jykDPzP2iMc8t7ZBt2ixiHYzeFbS8PnpeMrzHxNhoDp2au2YDzUP19gKwRZJGNZAv",
  "key35": "446ssdf8XHn3aBeDVL2eWMrL8nGF2VESMvBjveGwPkhEzAtzPbuX2dc1ufLkbGAiRmJ85s2v4a964cWMRuQ7aVTR",
  "key36": "2oKKuLwqf5KKh8eTfwnV6Ndd334hUwdeGxMCE88iBHaCLUDx7716wMeTveHQfppQuyTBQog8N7ZMdxd53igoqPB2",
  "key37": "2zYPQxr9uFuXJxVGEnEeRiokhh3nGucFyy2Gd9v4NgiS5ckn7TyLHw4fhf2ZbHwh6LrKtVkHsKSFveRSnER7bjxN",
  "key38": "5w4v3yVEVGnP9WpJ52VA66UvNqanvJJe1CEaZsncsFC8Kogjv644mDBvtu8JJYAJxWnZTFZ4uLSKmZb1BhA2dr94",
  "key39": "57aXsikWpjf9FJAqXyuEMW1qUp4XMtktnHatokgc4jW9ZWB9ntdNd7eBEHeKpH5Ggbdkc1wbK6LBStvkkp8GHV3v",
  "key40": "4EHWyaZqYP6fBqxxVasV1Nq45bGZiMdN8SM9KTLokDQqGpcfJbLSQLjqp7kCc27bKvDJ2srENYhgYk1EiRt7jpDy",
  "key41": "3J9NydPYLD7pJyxt8rcB5o2ncwDGfup57mg8LC2znStQx7Wv7LTk7suoBBU2YSjGmzAzoPH3jgAeqEJjAvQxq1cZ",
  "key42": "2tndj7v1RSitAaN685AMfojFkB1nmUbLyKnkGU2ygBywiwxGK5hQw1e1Ndzw3nq1AmpSx6e2dZb28KrwV8pQ5Byd"
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
