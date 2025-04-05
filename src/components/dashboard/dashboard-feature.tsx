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
    "4iRnkAZnzBP1SrUrf5gJBtCJXdQKCFCCfrfJdSqFQXWQJAwgh37sSkbGuntwfmqZoaVPHHvCg1ZnDndGQRUeiue7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hPe1k15CePnmM9dmxH3PZhqsj7eo2oqDBfD2sq1uh4GvUGoMeChew9Xbdza8NLb1JhwUtoR9wkQsxokPVw3b5xE",
  "key1": "51pkQ4a5FPGbf9tQvE4kALFmyAhxyUgCP9cW6pD5HFo6YNvMT4xUS1Pco5iGfnKj8AANqK4JC8kgEM4Gxmf9mbR8",
  "key2": "2pEVB3zrMLRNW696P6CaTFZso1YE8VZhJTXSHMB8JXDcAZqXpmKtgMoqPPD3k31BKf5zFhoxqjzJH4WeoD7qwAcZ",
  "key3": "4e8aETEaepe5BE89mf3qSdZUePicoZipYkWSUXa1nM8gzmcNRSahckpk8NCYDtdVzgXXcvFKGUv6jBGAguKcQR5L",
  "key4": "4iJrBSGhmQsw93XTYLPubM4M91nXj2gCVr3GtMc71iLWNo8XTQrSMWGKCi83zf39qCMzPf1uovkFRZC1krVDobt6",
  "key5": "432cu9j4Ud6KHJxBCHZXcbhdgJjdT86BvLPh6qMdXQQiwCZFXA5d5KoFD6e2HC86kTsH2USfYtdsDq9jA3kpRQyw",
  "key6": "5oENkKdjMFvSEt7YPhk7ghJSRpM9XDtd3FswV8Drm3uLed6xkkrGK1DzttxB24z8HfQkoWTunDrgz5nUtGsZnuf3",
  "key7": "3viLkTDu9W2FuJqphEUpLJQ42uXzYsTNKsfJR2HYH894SbXwiLNpZ7pgvECh17ubawc5HoasD5yFaJoqwBsJWPGA",
  "key8": "5oLHKV1PwqWtVS2DHwdYgYydAmrdB11Rs9KXWkq3QZfujnNFmVhPY22dyeM2YkYdfVQydKCqVA2M6vrmbeppiNip",
  "key9": "56NxgWYHVc6URWmfsRe55B8pgpLT5QiFACQ5dfh1cF3Tz4c1U21sJkxCDpkwFNC751eotLTsvT3kmnpw62KRC4Pz",
  "key10": "5ubzjbgGRpU2MKzAUULUSZYpeWD2yxctq97UwSMqkwwuzhKxqguzB3QWrSKKa4hkjpMSMuk5RHAQdQHs16KCCz9i",
  "key11": "5hw2Jz2aeufnMh8HS2EVppJMTAgyxifZD6T6VxUfSmPTpMYt7pxw9AKpBVTHuYfS1cRT8beVhdjB2MgEMTu45SFt",
  "key12": "5sS8h4ZnSfcc5jutguYRAGrmAvnaXGNWUYVEkoNroe3gDqnueFsn2Fg8zDyV4miuBVu8gCmUpKwT7qCkPZc7qte4",
  "key13": "shGVjhjxjrYaJmqTah6Wvt3Er1dZz38q9txxvehWJRr9chk6uXkV1LpW51fN1GFXSLr65EVRyj4ycUCQi1DToiv",
  "key14": "4TCHuxtaHykm1QBkpT7MdM8TfnXQvmw9anzDoVdKVpyZ8GPv89ZnyiowJT9KW39NHycEPEJ8FsMRCxU3a5oz3Dir",
  "key15": "5kGXwoZn2hc1bKm7ZYSKxbvcyCcprVwuW1tixpvrg9EYG15k6eCMvpFxDSapxSqJwQfhp8PbYcvjRCVfXTLCMAVE",
  "key16": "WSoN7rGU4CQpNCg6a2nfBvHvNspePsNys6tZDwyH2iU6reaMfzP8E7hSnv5ks3Ki12Pex9RbBTHR5AAccycnczo",
  "key17": "3YET7yU99aRe4azJgxSJif8oZGV6GLpt5mabtmYHZ6VxKDGno3gj5gAc7h8uMewtSZpUH3rA48ujfByiZ6y6S3QP",
  "key18": "4C2ePH9khUWd7ym2eJdhajjAkeTu3t6PWHe7D1ttZ4sSVijGYjoUSZa7pTd9wm6pjqxkQRsD3uKMi8LKZi3WAkhz",
  "key19": "etE8cjDazqCC9urgNgvm3DF7tvVM3vXH3hPCXvso4sf75igHWcEPVyvJ4BQvRpEdgFCGDZp5Si5EhgHqLedbzVD",
  "key20": "2fxxHWA4QjhPvC7wvDRUwkz8gXHmdVDpwrFKd5F351CY1pwx4RhZis8fne185WZyYYtvuTB4GcysqqxeJbXUbju4",
  "key21": "LJhC5fbqdZkuBvBgdZrc3rGunnDB8h4ujhDsapNHRDsWzEQb1vbJamuk9cEE8s68DDMp7q5nbYfSHKzbZsDmX7a",
  "key22": "K2g8mdxZLqiNcqHU4tTJd9oxrf42AW2xtc8HL9jn9AJiLMvE67mKQscT3ADYrYC48ax4N3bvaHSSpJz9Yd6UcWi",
  "key23": "cNj9cZKyEWtThsmWrYCAKEE85u7pYZs2fwJ8kyJAdS62Ju8nmgbMN2B1RUfy8wpboqQJfdcys2LefV8mMTwWtxC",
  "key24": "Wnqpp945TbFZdDy1xWLqh4mCycup7yYpr5J8GwLFgtmm1zMXkDkm9mriaU7bK17kTyA1kV74vi3HP7tFYRtkGHj",
  "key25": "2fxNDNS1eeDbPdu9VxAnPq7HpAj7XMk5RDvWh2f7LZ9ZoV3SXWtCam7HHHeoTrQwe3aV9gfv9j3Hy4UXRmUcWsBE",
  "key26": "4ShpY6ii2KZueWve4wpzYVj2aerhvsmh9nyGaEcEamvALpJQ9CRRsJGKqeayTmH1hYRJBYiQR4FgBPMJQDhenTxJ",
  "key27": "3UftMVgHhheFTxrdyYGAKZ9aGZpqyhANyAwYbSqi8SPjfMQ8XsqvZ96k9vuy24y6M2UfL7ac55uTchywtsnZgqV8",
  "key28": "2Amz2WMgwkkAK8HCX82CEyYNkU2usvuyfxHJA9ikx1v6n9zidhjjFJ2CLwiV1R7EcKokNcJJPdcWzsD3QyEnPH4P",
  "key29": "2aunbZYHtZ5sV8T1KRjivcM4mt7MBp4JusidV1MxymxGZkQbvkVsTQVQxvBxV66hSxTjpWTrrcQZPDk4ZRfqekUr",
  "key30": "yu73uTdfzXCS2MLWPWRu4CLbfaVRYJk1DibP7tk8DgaRjibY2BDeuQSh8EwAW5N5BEUU4cZx7V7aBS42LUyofDN",
  "key31": "5vRhb23uaLrM1oig37WZY3kX74pkeeTRqKa5YTimyxFu9sKLqCbZoZrs34rKfj7kQ4QF3KuvXYLgYRySLEhJa7h1",
  "key32": "cDKK5V9nAg422duiGzEuHQDbNnj7zKoAisdnYmhMX2drwnmKoVkEVvnAwAmkLPCPWYsDQj2zBXWCXK6nLGKw2Dv",
  "key33": "2wkpTsWMCV7bHZeBYu4wGx3JwLiHGySPTMpuniABHzuPmXfMSGzdvDMK38Fi91LyxbRHE7YuEcfeexPSUt9PNd6t",
  "key34": "2YzUhbPXmZvVnnzv52S9zK7vH6Kdpanp7qwWtPsoQP1Qd9AFk1jXU6vGCyPtJ5TApdSYfsVSUACZCYhPz5GFXdZH",
  "key35": "vuM6E5M9S8CVL5GNom3DAinzAC1qruHtwTcfQw2nDoAyjtVf8Kar23Btvi7uJyuu3V8pQnEbt8bkUrvdAvVJyVi",
  "key36": "2q9Te7vq8x3FE8YPJgcshWznyMCqHwBDSPfaXHgLN32DannFpSipvTsAVzRDD1r5zPt12Pdd6S3kYu6rExNdsAED",
  "key37": "2uXoXfi7JzzmQnKA7v9AMTaPkLYyo6DuR4EcRH7eUC1mTYQBHoYUcaCVTt7utF4XXsxDguLpsd9PnPBExzfMx5Xr"
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
