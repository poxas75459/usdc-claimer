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
    "3XBQBuGPTabxfpw9X4uPC7mRu2corJXoq4JQLQ1vprC2oAKVhCSrtmuLcnFXKGbbuhURWPntko2CZtLhzQPjERuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MBBF4NXusfiTMwNHmJGnULPKfiu6PepsQe3Yw1CBAhLdznLSAQP9LHadzGCbUit6zU31b7XQsroLcQEafcf4TrN",
  "key1": "3w8iF4N4E1uZuDpTwzhUq5HQedFRzS7pBedcWvgRd3SMPpgy1zLQz2E3u4KWkycrRkB7EdaEkUVjYkbpQqbLEtG9",
  "key2": "4waofZBjRiw2N5jYajqYVSbZQJugXpjBLr9Eamsh9KV2rh8ix7tiY3HW7LibCUoiY8GdwdZGjahXh3oiPpTQyCZg",
  "key3": "3hbumkwGiNoE1xdpzvKeb9kYieScbWVFzcVjiHUDbwAxnNJdDmMrVXC4nKomWiPMi7gmyzTMRLs5AULxyzwLHTwK",
  "key4": "3kRbcGYHEdqxP8mHzdGxML95zEqGCzCZJEycYKk5ofP2c86F7wG12w8vzubvZipYp1bugYkgExDnYVoPCUWmUxq6",
  "key5": "5mZcW4GW4qgJUBLyDFCuVhtj6TgmY9waiHANmXrkALMJfUfZ3RciDmpQ5xiArb2cgzbPHat8ZcGBLnxU9nGF51sF",
  "key6": "2fjHKnuJApHe4s4nEuDSk652ZPXwzRADRRDN5nyjmUPqoJHXB9VtsgzT12YSpR86d9iuGYGt6iAuWUFyMt8anRE3",
  "key7": "2EPDXYSQZnbUAWtyFXXN2MaqzhNYWYcxT141isvvFThrKngJP8aqSUSrHVoWciUtfTgu1MqetW6X5MPik6zxWbgZ",
  "key8": "c9SsmawKQmvWpGyvqGMTdxMMXVZCFEdSU75Sm8VZ1gqN9m88y4iywJVRWe5H5HArcvvALywUmH8pSRGMXDRPK9s",
  "key9": "3q6JWnzJ2bjs7ZbMcxVfENukzgtJKef1436ck1JDR7EqMANA4ShFcsUp4jpf9CRXmTc6nGRxHMkoZMe5NzNgLRrH",
  "key10": "rLr522TAURthvwRc5jhXUEnqfk1RgzdVtEg6MFUDeBQvCmaAkZN2k1mzXfv8rhzZTK3RzHArgj2A6cGg7qHH3ov",
  "key11": "5QJKdLPJQrp8XAeLvZrKwQrXiCeAXQuL1TJSddsAu6s8SerYszaPEZ16qN5wDnFDyXSbPMaFR9k9PQZHJy69HUr4",
  "key12": "3r31Rz6wHpWa7evpqvn9hGBfffe9ML9UaCQanje378W5kLsw7YQaRzQwvLKfYwyAe9fZzMsAEWnPBKTFMcVuzVHa",
  "key13": "YTYT77MintYBUw688r1mFy1znqspnVgmkXBGqoCG4RmCkpJqGtG4YGGMVFtfz4Rbwi72tXjdsZLdf7aMAyrKpun",
  "key14": "tHZy7dKg7uadPBaQkX5iekaXsdGWqfZkAiyCWv3CTDD4ZXmZV5uXo7RatJTQJavZTcQSo3kh1ncfhJWRM89isgh",
  "key15": "8aiXrCcdaPEjA4bUopotSMSXZ5BPAoszJ8swV4PV2PtAqSFzAAr6UZqNsfDntaxS9yHq86kczncXatb4Vu8ULNC",
  "key16": "2XgHS2fnidyFQQi7nbdEdPezxew8hQK3n561d2qjXr6qCz7UzRaQK8K6XPqHeFbuauFtSHFj8uXxfBTQUhp4XpYq",
  "key17": "42QL2izJq1VUCG5MVCNndVLwLqZ5pxSGcFUFDxDTP7U4iWJFt1ZaVRTaMavKwQ3gymDefZpzZ7es6LAiQEF5tG4t",
  "key18": "29RHhqCAGT43nC6K6QqBReZxbX2RKzG62WoZWCsb3zWmAz2pXPB2rrJXUgc24Vfg9F8TYpc6ALm6Sfii3pnruMUT",
  "key19": "2FqxTK3GfgDHY1ciPf516wiQzGoHhAmrjWVC6WTTQyzEBj7QJaN6q9rNPBvDM4HXaTCvt6e3XsuiVxUVjGQiTfzr",
  "key20": "2N8VRq2qWjM9LcUMJxyEufs3WfcV7PHqfr4j7zkoxKFnsta5n6nv7JMputs4XRTHCjpVreVRK7tW9vzzJv1aG8Tj",
  "key21": "36iqyGK7QQexHMN1Luyw7nRFpzJsBXtjCGPaVtkicnkagdDaMe1vyqVnzhvRnbXrUmFsQeahiTVKpW5e1uhuG1Fv",
  "key22": "3eLaspY9yD5ELBZNB3fscnAe6WCkYmHs3VJpNGNaQrq51QdC4jDJ8ZfhyNgCyc2HCTNBDz3JLAzLjdjVJQyByCDw",
  "key23": "3NxoHssJR9JyKhMduDuJMT2fEguLT3KSmYP8inBYyPYCcE6V8RURemkcwTVtTXrbQmf8x8Y4TGknQjDdFRhXS2zd",
  "key24": "3sMZSBFaDJaMkqMWyERFvqwCaCtHNMU39ez5AoCQg9dzhdZQfmiBbRDbQSJQLuZZdPbuHUs8hidbWrEpEdqXk6Q2",
  "key25": "5aaBp5nVxmCBr4PCS9UaSE9DUX49VNwTLr1Vt8DQTGABEjddMbuENg5E3psfjipb9cMbHztrehSqPbvbqvgogcp1",
  "key26": "4g7W1vmd54F6YpgaFkXYsKvf9LrUz9V7R6LuJgeDUX3MGq926U1f18xXsRTofUQTmN5Q2UdM6bXfED9mDdmCvT56",
  "key27": "2YL83PkwGNL6NngQG4NtHqz5gawZCuFe3sgx9LzGxZDRFBd3b4u68fxD5pxNoCmpaM7SKM9CFnsnxd89fw2EzGUy",
  "key28": "2LAwCrfyEQc6YKL75TsiAzkKZxvczoRqGVhDFYDsFtjbWoJSrLkJ93oExwNtkNTT4fE34beUzCJr6xx4qwdAtuL7",
  "key29": "5SuRb1D7Nb54ucH6AUBa3VGBBTJhJQ5RznL796dLryqfZZsSg4dTy1coPqZrxPo74gQR7niigBkaxbAK9X6gVc7V",
  "key30": "28s65N2kSAY6tvEKu3KPxgF68s9j1dAXjZ41YzFZzcQuZ4jMKcDMfhMdxgZWV7rPe8h2nFxZoWMTZFuk5uAQL9t2",
  "key31": "4WShaLauPoifWKmB7RXnzDRCcBWzLNvAovK8qTTeGB51wX2ZrJYCNZCnGfX1e6fe68qmvGR84KW98kFU4dF25j5B",
  "key32": "5xanwvp8qLcuwip2RTDF1rqmB2a1wMBqckgJSTcWnwzSGVaqy4THeeits7uMCZf8dP7CmGJzb4Ai29nP2PbyEWLT",
  "key33": "9pn3rWBCzhTm9XrfQhv63mV8ya4dG8JzcfQK3YQG86jVJa5MynjPieXGcquaKwoMrfc7W9JqpcSTn52eFKVvZp2",
  "key34": "4jAb7wPw7oyTxoefVyi9FXzqRcrLqGkBphFpnqWukLrqKPouB2gZC14kerFagZEQPqReUoLtAqUHBcV7MQzYFu1E",
  "key35": "61qocaHvYf8f3KPJwpHVBw3MRDT7TzmN1R6h6VahaR2bue7ynBsWi43nB3ZXjwjhSEH4TvAUgVfBVheDKsrv2Pts"
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
