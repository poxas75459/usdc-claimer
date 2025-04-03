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
    "2kzA2ZH1eppBoUdkSGwrJPJPsXaHfXB1jhmGjb55FncvTrt9HDvyEsHGhrBt2t3Thg4nBud795mqjyn9ZTSPjMYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJZvhhPHvNJGyoGohz4qewADuhUjRCoExFuSeRPmp6V5dRMjaLBP1a7jQCQDmu6DrenShBNK5xrWtJXu21iSpKE",
  "key1": "2mBtm8QZLSs43upyp2RYQAaJcNuzY5kPFuGbj1uxtVMJdPWeA9AKwJnmGNKAxhc7uuDSmLo5VygVtERqVYPmYJai",
  "key2": "26tQydjGCDYoKtiWnFbvkabS1LY2wvJjQVLHJdDibLe9Abmxw41fUcZzyeik6VpnSCciAgJzn3u7Uw9B2Ge697Te",
  "key3": "4CBpmPgjdGnTPRtcVB7a8YCtByLZokJ5NGT485qNkqvZDknjEvWpxGrWmtxX4rZPo9UpZHdyftM9Y9FxgXRfNWzJ",
  "key4": "52DyDQiLrh9kDpamWM7AZvSz2AEGGFCscF1XUdaD3i2mAtuwjmE7qCyUWqwgNDuW34y7ihhLTzus9MP8Ur7rQNjd",
  "key5": "568dDb187hRxC53hY7dLsWj1CzDR8wXEfShKFrKpy4BrB2sZ3gZbp36r4Hy6xVhK3SkRrz6m883gM88fMNRceL87",
  "key6": "dz5AFj7cbrBN4mhWomiHLqXuRQBQRa2xQkeYVJwC2wmrQP4K2B9BDqVGBmHdc12bFbZXpkrjGnxkPm9bhnAKvD8",
  "key7": "SkB771TKJRqXpT7GCvVmVDee6QyPWyBTqjsnsiH1vU1eP3zYeXKkkc8UjCDRyWKdbb8E5aUdGZfuBxScjHTEMsD",
  "key8": "5YfYNoePiCwaVKrvcY5TAYMUMkB75M8R6FZZTMQ8kzXRfn64jQhKPDNGto6ER7kjaTqWkmDF2kjMyaiPsiZykFva",
  "key9": "D6r8AkRJKtZzQYtHs9KNR391MRDzuZxJXW7FSfBSC1RwPSWsNkuKk5gJn8p2gNsk6WgT1xdWQBHYm2ZbC6ZtMhc",
  "key10": "3r6f6WqTfJB1h8sj75nFXkPfo7AAn2oVSjbjdHMVuunnHDMWHQq29x4aCDvxcEkyFCmtTcy3y3MDqxMvKppJnMAL",
  "key11": "3AZfFwvJUbnwH4ToGp9WDEA7xmcqeDLcvauU38SC4PWQ8SajBVAL1TvR317HbKS7pnS5oGwHjmjB3ro69oPnXFM7",
  "key12": "3aPuDZhYFz2KVZuf4jJtimvJDk9emS1V7VqdNK2fkZZZ1wH1uuZztcGSPizDroNCYsPgKDd7bQ3CnEXFRDixkijn",
  "key13": "3W397WwqPqJAcGdvfa4xfgJaZf4GPCGTBY3VRwviQdL8EGVkBR5fgkAa2guEdwQ56FUrZpZmPe7GbUoBuf1YKabt",
  "key14": "21VmtzgCGLRoz5bRp4WcN3YGiPRapBENAfzWKH1f31TaNUZbvhJt3Wsy3mP8yEwWoRkGzY4TriM3ASTdA2K4gBsP",
  "key15": "5b7vXBxUGMhsnRFVBzJtTLdmKfn5W76VcHXKP2GNPvAPh75WC82VdmKLmjnFwUcJXTvthkZNxFYD1BMBxyVevQij",
  "key16": "4WhMQBza8Rv6A47wGWBiRphyuY51WWE5ogYFxEQtDaBbEcwyqZoMG4JHpsKF8PmSQ3a8iQdKvSL99qLQEfCrUmNR",
  "key17": "3WGxoBwh5kfFsZ39RjtXcMH5yPBbfMcQ6jaKfczjsQuok9Sw838Z769gv38jvRn46Xt5vhB1igrtCJUi4J3qNcFV",
  "key18": "3Qmh9TwmxzdK88vc3SiY3BYxBxyQ5CRcBk9Chzq1UCoaAy8ZMcwEF5NjCq3LidA2o57eCTAgLFbsgZeA18KtKgEt",
  "key19": "5xgEWFQJWoRaiMfXMxgHrhe1DvtS76Kwy98Gk5jD8Q4A1VxE66LTQA4Z8jxDKn1gHA3gUDZ4puX8C3w9NvZ9B133",
  "key20": "3PVykzcZ4Qy6w46zQXcXaeQoQ1qSoJsGuB6gUT3jEhYMEB4EAFodMEnqMyjzRHyE6BLjCgaT8a6GhwEFQjqxHfSS",
  "key21": "4kfaWxXJ9n5nshAKD7hTKS6BfAzFn5eefzMyeBxzrL3mSdXtjETuJ2ETvyefem4iGVW6kaFnP9sQFWMcFHt79aYb",
  "key22": "2cNMHrUZZ27iprr4GQ2rFMw6NMEQa2EL7ucGo9QEyiyQV5GpGDLubkrG49VcZF8fx1gBAF3GrRxR3VpF3Ja6gp2t",
  "key23": "2D7nCTrABRSCHWz8SY3ktR8r8kwdhhdaBxaBXZJhwVXa9dJTBn3ZKEEjFsJ9BLtMuWy8PsSAx6iJoki2XFitpuSC",
  "key24": "4CJqS45NgrK197e1fMTiz9Xghs2NngJ1fBXVNQo39bGkyQYUXvhiLFXxnmZR3zMGheb4UvZxPn8RNMXgpV9U75vZ",
  "key25": "48aryWVvS4Af7SryrXKE8yuXXjC39LPRPcCLN95i9NS1uyWHtho7wXcnfHFcJyuyAytwTWKC3aEXcz8GfN5jJ3RE",
  "key26": "2xvv1jUVbu3BPgXh7pf7ZJX48Kv6DucQfSe3Nbu7sEVGpSFfkUqnds9hMXE1P3TCVBmZxmKC1SPQX5KPKzT47eiv",
  "key27": "5wedySXaFBEomFmNA4YYkaxT9NhcS8tmQHUukJhFRHajVHMhjPDhUYBQYBH62tKVr1f8cC56MDGnGzuhm3jcfDY9",
  "key28": "4xw6HACJSc5nkNF4naFX5FXx4ywP6Zep7KJjLFbiR4wRt6rdxXxcgvc95DLc2UWsKjzdbYDJGuUuEhYxzZ67ZaZ7",
  "key29": "FUKuGfgUCyeKjENf54cBfYaj2yHnvTuUbWsXPCGqCV8t5qfEh18FLbuTq7WodJLHu9nKToYr3z4S5VAjU7gkfzm",
  "key30": "2w5FSipgoVRcW3wXABSYFutnKVPoodpD6PtXi6u6DtommJv1u2nZ54MBFxkDKE2eyyaHvHtQ3DZbaFwJ1G51UfXd"
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
