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
    "TxtWpLDx8ygrNJ9gQLnp7Tu7c93x7NBYfjGH1ZQR2Jo5vhPmVn28QPRTJbrm7NtXkdrN65UGPXxusaWqvGyAASk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v2qfoRXFC9vBfrtWe3Cx54i2b7X1tBBb4UrugCCEYMHwE8bv4kyq548h4dk7HY6z6ex9mqGvKSYB8HDPRJD3fg5",
  "key1": "3R3cj37Q44hjLJwW9KPWbHLPBFtto1jVG4Sgeje9LRUNJhxpQg8fLtiUkEmonqckUA67iPvu1o9VYm58rUig8HVy",
  "key2": "xZA3y5try36E65y6jofvTZqSZ1jkn4TLvjfbiEsNwmM5SSUwG3P5CUnrLCsR97DMmSufwkQH2dVcFuUB2muScR5",
  "key3": "3GCQcTsewCRoY35BjBva6ewYXgT9mXfcagWHkCjfK4XiTqMteS7V7pqPneDtsRajExNhNQvKkHvnn3Kx8wruugu5",
  "key4": "3wdxjAW3Z1RfEyFRRy6gUkwnxm32uRq2wW4P6Scd64hY2yVq3GJyisa2uLdWRZW4x6Dh3t2ZV8W2DebhJpUyk53T",
  "key5": "4uYZ5jrHafk9qNfDWgY4oCnXYiUMKqQkzywkHiJd5h9CsJhj7d9NsgTwGqkMmidwUn7i1VVY2uc2Skb77TXkTUdd",
  "key6": "22Jk2xyALn1xTiN4Nv68XawWfadBUqRX1Npct5j1GWHeEWKkrKUmtvhQ7WUxAamRHsTyKgdYK5YMVnkZ4qjhCYET",
  "key7": "2gsAZmokBeLagLyzJdQ83S9EVBaBRBs12fHhdwW4FEaui2E1JfzDK37GZNC16kZo6PyJNPdqzVZEezF9vCjQKi7M",
  "key8": "67HK2T8T6UipcJm6y1S5KPdedakUaDgD5kNmTJxdbk4fhX1KBCeRbGvS555JMgtUwsTbBT3VGsS5S3qnVsG1wQj5",
  "key9": "5YPNxMRG13nbhwoiGXBbmCdWDRfRiR9rtmF9yaUYHXBuhV3GuReGHwkPzCjcKa1xUjGvCXwTZ41Zbup9xzxzefsC",
  "key10": "61BupQYuTQBEgwuEgusy2eKoBxWPTUGtsnXZUbeLUaVwuKLLe1TDxpTZsxHbi2UDcxobVMyUvbUWgcGRkd54WDPj",
  "key11": "2Zki3jnf6QqEUqg7qWQHBp7UZrdGQ3ifSjEgoi5EjFx5wUZBduxWhTNZ4mMbKFEMBHv22QMaDab5NCEbVvfRj8hm",
  "key12": "5bgQtuZgUoAyzESy3N8CVpFFvKPwpixSw1psXs6bkwkWzKH9DRD2tupe2LXgLgBLM4fjFxkK6THHAb1rKDQ4GYSG",
  "key13": "3TCSZmgjy2aoYxZi6sQ12LRTYV3ucxQvENizNcDgsdfH3re1XJp1tqUAe7RSRfbG3dXGc4cxbQpF7RAcq53dMPMk",
  "key14": "4EvTF2d3vmS4CDdpGt6X47Z5LuR5fiZzdwxJjFTTKVgs9zsMbUwNx2dmFu6yCY8focRoshyKNLkySg9EsWYa7WAM",
  "key15": "4wxiVvpVyB6KyhANZDeXxJrq4RdUtusoKLu1wTuhaY1jcxs3JNBhX6FWsRcWoQ9qnJGdci2xwHu49PC1yfL3ft4Z",
  "key16": "41NVcB6xjpPvhrDN4jbXKHccLyDwp6Vd3WLtdFhaHvWfJ8Yigpu6WC3kY2zrUPxSLuuQCQTVp9HskLnzUsWP5z4J",
  "key17": "5cznnrr1mT3iHNk5c3eqkebTps8ei9Koueqf7FgbQ3BkSVztQLiEd5vYcD2ZFuAGFa6GTkBkwNKgfBHRnJg8ZxCL",
  "key18": "3WA4QJWKqUBsyPJUztqGUtEnNhFbkHorjYwwN8tphKVPVi6YWp62dcoerK1MUUptuHDzeF3ZW7P9BtbVhwKY6V5i",
  "key19": "5M6jQE4zx6Arq3oasPpgmkABXeQzcS5Ccsk2aKyYu5kVV8VRisKpaGneUHpgm4dZpSyjhUZir2akQW1ZoKLGgX2b",
  "key20": "mEExwtJaNWw7ZSShXyBwne1QyHm8rGC6sWUn8B9gDU7EyhnT8HvXB9nPyNwv693PGDeSaCar6oNyRQTeVxymfNN",
  "key21": "5omQF4GNeU2vwJsQDi9QTJjsmNKhiJFeSxwkfyTKsUAUFTARKVdtN1q1es1YLpw2TM9hRzKBjuUq4f71M3tHwhhG",
  "key22": "3tQ8CF4HvRTAB9tneVZWUubLY87QGPtGwNGtgeS6iehXsXpVf9xELxHfWjn2294jXrnAYLAmwPs3d4jkaoMGyumF",
  "key23": "4WA6L9FtNnGTccaTcWhtjsQ52P6rG9TRX4fc6XMJDqW7mviBWG1ad3ZXRh14Mc84wU4isRZbdrpWERVxpJQCU9ta",
  "key24": "32Z3A3mMaVA47GXWYesCDMa5wfGqz8mfTnX1h5jxBkn3NWzXXLvjCoRsPmEKESN9K1GNtnfvh7mh9yfWn1Y4dfG5",
  "key25": "3P1T5CHPvPMDD4ebt6aAX1DiUA7niNbEVyU4qoHUPdvzopd1j5V4k2vBnLFgSXeMEPgKiLBsKAx1rvY7MiqBGyhd",
  "key26": "5iLmTugcpZa5o5jQwSPGpnDvKJztiPfpdri28z4xMWJvaFhs5THmq2jSfAUfZ14DDi3ikEKDkozkm6nGaCdzMo1C",
  "key27": "5cmy4tdKJrAJLPxanBc3YsT6wXJRCTrvohDXsiPWzmB3Czv3tb1CP2V83KCYrCtzCnM8x6qx8YvPcZTAv1iurzfH",
  "key28": "4J2bnUoRXWfkQKMEcmgSPcGPyBg8PsoKWwZkpu3vWUJfMzdaQUzaPqnRVUmpb6xVL9BL9bgJSE6dGp9wLjxpWcq5",
  "key29": "2dYKHcjfnKQKjdLngnyXeXVML8gut9r2itAaBh7DP7d5KujYvKfAAPiouFNVCbQuBdPJRfHS3mt41zjjBQ69rcyc",
  "key30": "4NCNwszVpQxuTPQYSsPQrFD3CNipCUcgbfW8e1LB4VRvK5bLGd4kEtSo4bKMdbFFot2gLvh4EBQp9FrSDFCHXkjb",
  "key31": "3hwSZGQdsz6Bjm5A1yXwwny6AaqZiehVX6zGdhth5qgvBFMNTjRTgwm7BxVfV5WfL8PsZZXM733ZfCRgkF6vrhYq",
  "key32": "3hniDHXrLqgvJ1LzQzJZ7jpTNhHJa3qeVUsaFAveRniFtykAqJGRZRTucA1WXPrfmmYgL2qFxZEEGZwdC1D57x1W",
  "key33": "2ESEf3unN8kWVDtreXKqVdLkziSQ3Kz7cKk8t77TVf586BZqbYWWjtU2eNT3vpDvvYYr9Y1UEGgsN3QjXFBtbA4p",
  "key34": "4N1KRCoTmc77gsZMwkDNhvSLeeXAYnDazX6m3N7T2KnAENUPRgPpPPvEMenujkB43dRChbeN8oJRjKC54rKCaMVp",
  "key35": "3kumAHs4goyzzDZ3DrXgLrWd7mzDMM9DHke6jn52tpLMRi5BLAEaZHiC4EedKJMU4bvHEEFD6cJvMC98Yi1sHb8p",
  "key36": "2mE571GYgNBwEtx42Jtxi6q6irks6Defap3i2zAruHayKbsJh6wQuA4CpfjQrJHn2K6GjwBMHjvbvuDWjhEFbFih"
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
