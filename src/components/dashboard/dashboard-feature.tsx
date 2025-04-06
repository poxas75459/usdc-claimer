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
    "21ohYS3JR9NGBkwt1LxW3cuzrri9zvMqYxfeeZw85aYL8eTEJXmrTKzzqeh78iZA38URMy1SNYisMeRTWMncHrjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CgyVpbTbo7VLSZkMYFVSbKR6e3xDiGrvf3YyNqHoSyx592dWUGh4kvc9Lb9TURQ1aVPGk2v4fSDFbPY4ggo6BEk",
  "key1": "43CkLTKjVVbBAGgbx3eW9NksDcFsQWc2Ga6dMoJfVG4HjhGii7ANfG8sLcKFWayweWUXpBikU8HAaraRDY7Vi19B",
  "key2": "4Hq1hiS7EvQ17gubojqGwJgnmxdg19Z2Z56oTAVPuzkMK9EytNDbKnYNBoWQtH893GpmtweXLP2Pmf68zg5BRKmp",
  "key3": "2DduY34xWdoqnxM5QzygAaybuYoWg17dESQHCvxZZgjt8C7iKCyv5GJQadpZsHrjf6bYjqrvTXGNKDhNEYW3j2kn",
  "key4": "66hwRC9D3CiLqA59T6MvPW9R1wooJUQTQdm8xpsyfaKMM4cu4KpkXyMWBKQrGRnXT32YGFehCmY6ztmGtaxTNDCH",
  "key5": "RcB5ZwwpfSKFbmHfxAYXzuNWKp5g1HYSX6LfKQ9WAaWRqMzphCbM3ufSkVmmaPiFFHEZSr4fT2CD3DHjBxrKxxm",
  "key6": "3VB6qtS38EQRPGKuZwVNLWaiXnSYVykExTbUhfnvyJMAu5UCNCDzy5sZKmvrE6Y3K1eZVmNE35Gz9Ez9FFTeqtQ5",
  "key7": "2SQXB7jKskEGuyQqTwFFYkZ886EPffLhZukvoW7mbS6d48Gjmi5hQkK9drUYUJPUd1gLAQ29M5WGEmWKqcNa5CpY",
  "key8": "5DRJeJzm7GmeVT63oLyNbZv5KpBENsuVyBrBZ4QihFeUqJCvoXyDwKfsjGHQXPSVsK5QVfqvzyzyohiY7CJBvzXX",
  "key9": "4taaEhBreRMG7bMX3hg7KxfDXhMPW6rpdaFnd2k2tzgTKUmcsxSCZJGBy5rCPpUTC9TCpAqB9ENwSAthHmEUyeNk",
  "key10": "3Cq753ThWJZ3RcwybGLHR4qjfeEEuGnmyhueJeuxoVz8MtHw1M2LKycrSvgwmxXbNXvNjbXVuY5LQVnik5XXFcbp",
  "key11": "bvREj3FxiQPmUEr4bgCHA3DBRZHtvqmGmVQwEcMoQw2e5YzYtnufmCNJWYz1quRjB6f5QMfw2b7G1VhksLgjccH",
  "key12": "ZN8kBqd9jm17cii1rtxFsPPo37F9rMctWJEWB5MEehVyzVC1BWQybwBVQyR3dNwrge7cBZSs4EUDsB6yxz9VTrB",
  "key13": "2qhCfPeUaEPaTNWqKGUcnjr3AyjzZ9B9FUE5LBPfKx5D8oMXz9ExQQccUndgYmmvTjrE8LqETBVAbdJnQRLQFuqY",
  "key14": "3h6vVw1wghjqNz8LAsSNLuZKYyt3AcfLZVasBgcsPfb6PmSCy87dA9zFtzAVFzdYfHVDzwzFoF2EfXBnZqW4cB8s",
  "key15": "2aNzhbhdTdjm9tiuZuKGavmRkM1r5zB2yy1hHTgNk8QH2gU4kcGWj7fojJfXNG5HzEbn1sXadRJs2K9XAujXFRhV",
  "key16": "xmjnFGJiFoxrfxuxAsg9cbASq6SEMHsqZ8fuuo6k7D3NaNxhUajiuBt3CnbzYb5gQ213Js9rrLR4Gu55GRwXx5L",
  "key17": "4XeXfJqWbgQKBuivdV8DS8RaMoY9RJTdPKHjsLoCeSmx89cDFpYLup2bxuREbhFSJabZuwNAETkMQFh6DMPHApKw",
  "key18": "BHJWH1TAEJ4mzzvV8g4NEmE6RDxEX5evXi98JetLMFhonk9z1zEnqKKSKq9mh1hPNePv8QPz9GZr1SMJYUAQU4p",
  "key19": "5ZYjJAxNbm2AVjWSjDa4ehMpFTsySEBRJbafYXDANdvrRxthyQ3YkiGh2e4ERKBN8Hyu3zu3j2mHaCMnn65gz7tv",
  "key20": "2qCBbLWEmupu5CbjH99V4btdTgZJp7VnkKrynYT5pzQ1ZLry78rb7cwzD7uGpL6xtXiSNBS5K4rQAXkRJ5Wm7KwF",
  "key21": "4CzGXwqAMwuPjwp5CsbBchUEjGQhjhmcwYNC4EPMu1JS5SvrX3WNvDs8q92DwxDBBbpZSkTUvULPJJN62w8ukLF1",
  "key22": "4TYn34JngzN4cJBrkZuFmcjf5gEZcDzfNm2GrhypMyTgG6fcNbFURLbK6wnhazuV8cYiE3wFcN1ZcVMKMsrZ4tQw",
  "key23": "5vJ1oRpTrkG84sNqk6Pa8YnTq7imBXZ9WZJWd3Um7cRZjLg3zcXjiM48Lo8rE9ZCuVZeFUqGHs7iLjYGnuq6itwR",
  "key24": "5A7wYN7sTYFZ1MW8pFketiubZo4jLQDqKYDyhfm8uRGdwiMR3f4AuVXPFL8GygxuvmhAU6DTFfi8Xhqdy8mJBecc",
  "key25": "5gbfvJhe1EgK5jC3k7Z31DjxAZmFYrM1GXxhoCXTg6zDup7992WpGxsrLE5Bqenoad84V2Eg4g3Vapw34UTrKMDw",
  "key26": "3PekUyRwLw6bzWG3hG6ymkQ57wzR8XuL2ZsQizu5zryVj3SiBDQpAnX9K8eheBj3VNPFoi6A8muebQCv9VzXKJWd",
  "key27": "3HSQTNgvgPqcfEvRgrTWniNYfLorLPrRKFyHG8c3h2yyogXi2gzFDjndjCKBixgiTDKMuYwWxCtSi9vLJa3pdDiq",
  "key28": "GRxnvgyHMpEbisR578Aq8TA4EMPxMwCLh6FBpvhWchhYQotXZ3PJFpZ9X6GMHHHrfnaUZ5w2s4svj4dz4v4d4J3",
  "key29": "4afaqjbbyRifUNAUFSUmwcHXNUJ7Rso5UhSBmpqRzLsYJvRtWZe6eZGuiRYVMJEGLW6kbCp9oXoyurhvGsZNoQup",
  "key30": "2EaPQN7c939X836t7qWYei6HjQ86TijfkaKAzPnJknuYQ9EY57Fs26waqgjBS5nhtzEGAykUf8jduN2zWsjiTJGE",
  "key31": "5XXjacFR8h3JwNk4TQT7ECjFYj6p4gdErL1GeXWcKJJ5S7eotTvfueiuWgsF65hZ7v1APAfUYz3SV51gnENB5caS",
  "key32": "2kViTZdooFgixAcN59y5N5CwEHm8siVWmHxQryw7NbuqcnvjFWvA3ZpXpJ9A8hHA7SZZusT5AvHehicq3j4UL9qV",
  "key33": "2nxU62Y1vdzP7aFpYj1J94DWZe852b9zKxZ1SbqguTKnVdr8FUmhqfDxfo7v2FPNGKxJ2RcxqvRGWnbwMwhdgVuC",
  "key34": "5nuzFAEWYtjDmNuUZ67R8PT1DvGCiNHfb7NRHodMm2e7LeWnukkxyUgUoXpaGP1ckC5viQ8rmX6pquAC5oFA85jS",
  "key35": "38cdDCjPDKjBWdoY2pUo4V1Gcm79azP7ECqQs4WALDwZ4q5DceCRHuLh82Mm6Lx62FJLNLHBJiPr1p379fWqWFBx",
  "key36": "XGgfYZpvmkvz7meqX62jsHTRAdwxEWZYt9K2B2E7eUSkDMobvddRqUpSAkxgsmr6bKpijBt8HzerKGAMw7Y6tCi",
  "key37": "3wSfe4Y1WAmHdZb5PB2v8vrFFszkfZYzgYgAeeacBKzY41nnvfjXKtLtyhJgNkYf3iZhojAUEFqX3tzuzmRQAB2T",
  "key38": "4V7a266XmGhFLkga2FNtXcBDCnXozgyqNRmbQ6L2WQ6JruSsV5xwVkWxBpss92KRAiYWSUixV46C5M1ipWsHEzVf",
  "key39": "5WLTMkBdBHU3zefkyPfPFPfGatynw2QCfZy42g92VAfgnzpyjHaTNaZLMiuGdRgEwS2uTsj93oa97qHtkC9DP32w",
  "key40": "2ryba5NxaeS5ZcNwuiJJ6MBGkY2dPMTcwXZK9bbozDYQhPzPmaymT3wRq48S7odkPL3tZ791UZw8RqhRFBEUQwpB",
  "key41": "5Sru6vUyp9FPRUgf9T4pB5iYhVpdLLx4Q4FLjzc5t86gFbs2XGLiLTZLW7rLRujBGn1YjSYCwU1N3scAyMyuBzgp",
  "key42": "FNkn8YSDdJVtaMSw5mgAMkoyUHn1FHRhw2UaLxNp8TySpJG1ZY5yWyaVCMgVDjWU9a6XeT3SHRZDHerwnarg3nm"
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
