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
    "4BscDZ1X1aAhAyf625TBcrpzzGfwGgy5q5sNoCWrhvPNzLZ7wQyFV43v9hAe9fmmYBXbEif4vdfNHcUeYmAfWAAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m3UvebB8QnhBPqtsBCVXY1TMUqN7FUAVsHjWmGEJpqdzfHovNL8mmaKu64es8JFMJoBUduFTXnd3abZYEkaLyXF",
  "key1": "5vWP5KPcqWhHQYKp98KtWwux7RpKXyRj3HnEK7XGj7g4s7VLZC9s657k66t8HdTa1MtFKgx26MoAE42ke7X9coNL",
  "key2": "5jV6rKxPkTMhtYuurBtuQh1VSMvGqUHkw5V5FwKUQCFdUFgkcbxWYo2oRPLwfWG8kDKQaChwmXfbUyXfJT8WYB7q",
  "key3": "NfFWfL9STfsfwzJketk7HUjKWM9iLSiprFPoNWKwcNf96GzMVWcfbd6KUCE4LWemyFpDKqNPm5oTvAH8QhNLrz8",
  "key4": "2yb9Xtr7mWvVoDCTrFpwgbeB3Nh16hf5ZWMueL8ovPuTjRtGMcn4H4o2YkgDkVGoCUtt2jGaRGpWnEUDuryGe579",
  "key5": "5sP2c31GarN2V4mbG1Fiqb8GY9Ejzq8PMoTockQJgrc9hixNJvMKqJhhGr1DvxwEThrJgr1QGwMFkBYgViuFfahH",
  "key6": "4zSJJMG5nfmJyKk6BPgrUrvD9nvxwkACUughAKdF42xLV5X18DUpNACcqkwCjrWM5gXndEHkrGEvVckXMzBb13Gb",
  "key7": "2qiEzjosS7QnamYUpKfWBnqB6bvk9UYUAgGTzkH2FydtTSaavmzphsPL21LaHQuKJZaFDyJvK7LuQ7Hon5ZeQn43",
  "key8": "5QrP7wg3EmYurjTh42gJjiYEadqce62JGwGMWYdpz2Yp7cTZk6X6PerTPYznhaVY7DRvXKoiZ5ybJQRt177pjVG1",
  "key9": "2kriUUuY8TsjWy3JS5vy1NmKiEWbZxuDfMZoyyUYZov2RdbQ89QtQwaHchQv8nFwZyw83bj9YEtvPJzUXmWVT5vV",
  "key10": "4hMGn4Deub9hc1qP3gvpzwc97FQ57K49H4mgf5EVErJiLRXzWgcg3EU5f7bLkcgwEaPDK8xduUnHr9TnAFWyoVfx",
  "key11": "4xzirbZvNHYASc7LrurL5GTgZZxXeAjofR8qTJ3GWgb8boX9118T32EWdTZGe9jVn8bpiNaB4uF7kQTW3yhAjn6u",
  "key12": "5DrxcsEfEr9E9YjNiS5FNQfidDf6z3AMeTZEYu8m5CCpkBmWAK8izpa5dwZzP3Vmih4VHbpKdBh4yVNx9HajTeCt",
  "key13": "5jHinRW15u4Rvuy2bDY54zL5KxdhU5xw8SSbnKtjm86AtVxfZL6BehK4DWLwytNf3wpiyDyuLnfi4ipmqoMeAtJt",
  "key14": "3xrxZX3dVis5oLRhmXwYFFczJWZhsfgPQtQMETFzfZCaLGh1nHu1nTXDGpZzNsmFTzJ4u7mz7HLnsNfaVoSfz1o2",
  "key15": "53fVkENmeW5HDXbDbA4yS8Jwin2dRMu1aZNQop7xoswmESZtrdTMxvi7JePPFh8N6XB8bjRtTRXjveGRu4krGP1T",
  "key16": "62ZViDDV55SukXRuTDAq9kxGidKFt21MCRPdJmza2ZPdNrpjKKeWGydjdzaaec4vUPRbAqHSKx6UNfyUcyKdqDiY",
  "key17": "3uhKjhUjwaXC8vQT3fgF4gJo7CLkc8oRhygMcSyTDvM3yvNdcy4qjQA9REyKLss3o26mq2BgZS5FeoXM2Ebv9RV",
  "key18": "3HDjj6rTagushryE2gK45M7QTjcAZzzZGePLSoRgQMCVwtxgNQfCDsEsqcwdopreHzhkJVHSzcoWcsaGocto3w2g",
  "key19": "wkuiQjkEPMwTjqPYyCjYi5wY5yAjqzaxmugRyAvsX9zH9mBHUvqaVCxVzyUQY6pKcMzuAFeCSdmS5L32bMzUtnR",
  "key20": "3kixZfkn8qAXR3ecyEichuWEvrysPxk87zsWsJecPZRYAxi5d9VCL4kkM65Zs7LpGq3F6UWpgmaFmzKC7JRx5we",
  "key21": "5X9K7cNdvGuDLRyobG5f9B5RGmvqSiiEhv7jTCno5kbMmneANagBWm89kUGpTfptvt1SJq3mtu24uBPf521Mp6k9",
  "key22": "2DuNxs7HsGKR7AEydaf4uaupFb1r81ahGGNd4bQFhSR1rGqFsLdgW5PRffSriMX7FMB9NRvdctm3somPxL1ikG2a",
  "key23": "2rXmL8q6DfXHVZYBt1kn5JLG4NnxLajzCw51Hu5NrxzGyfSXN91DpbPYnK1iHqqJ7GKzQCw89GACi7BpFo7hVHuQ",
  "key24": "2brZPcXTh2zboaTdT3DUbfGbABxZKusf4uVuQzfKzswj4gxeNM7adnsC9EqV9B2MZ922tpc48wshFKBhdoQ6K128",
  "key25": "3NbksLWehsX1QJ7iYgbw1iZARwrHXvcq2ALpwH4LNzm3teKQLzhdLtyJiKThFpCHN7dB1JAaJJynKoNGTJR7siDV",
  "key26": "455H2hVeJ2uqvw8pJM8NQZGDQkLwDLjTx4GaC4aYVFGYrn9ZryrYMNCVyQ3BH61f4TKJLqJ11u5DpsdT1PDusV85",
  "key27": "499RG2mX2kCti5gUTFtPnFauQfmWiGot7JYbrgbEo9yKxjZiBTNKD4FCqL6GRN4bRagfGZRcgkJ7h5hskegdyErf"
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
