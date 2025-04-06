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
    "2M1pdVP9kkjZgCkwrazgTfFaDgpBGS1FV7e7fNjgrTipceAtj6yDzvAbvLdX7aipH7JHu1vpDZU4G3h7xtD8i1uu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EbigTiuqJPGuypdURPe1ncWsUdUwLdAXmieafWpE4ae91GCZMQUfH8AHh3TkEVMiuCK6gMRN2Nc4avLgg85hyxM",
  "key1": "4m1B4DX7PGqYqFBdCakhKQnsz5bhweeVANTbw9HwbitzFQ261vdgXJTe8FxPfJSpsmzC4PMxsgYELPhmKL8tbGuG",
  "key2": "3mfZVbTvwq1UhaHz9Kk5vXibo98sj9UiyUM7yme9LDx6xJR6P6rDDpr3RRJ82s7kCp3s1L8oUfE5KCVeHXPW8LLF",
  "key3": "4wzhNeZHEJLVB2etbearCi7eWruuE3anajii9xWiDQwVjbv112ASX9yrDYQ3F4yFPW9MTYcKAcKHKJzmc89PoYbf",
  "key4": "9YmUFawq2xn83EnbRvfmBrbRWSGoXpxhKFMKwUfHRAAKE7cNsS5w4zZCG9pwU6HXp2ECh758mrRbrKAV6DWwXa3",
  "key5": "oEC5zyoKji7CQWVd26YXyPCT96dHdhnnZK44F1kD4AyaCDtniqB5i5H16KKyXD56g2Ur6V9cYqGJWYjUCjeBzcc",
  "key6": "2PFFxumMBTyjHVnUhfT3jFZydgHvEhGN5xLjyEPanxk3bkd7iCr2AAQjHXJZS9Wrv8vK9tA2PWwnbpmJNBxTvKfS",
  "key7": "23saWJn58Afdo58pj48q6usJ5XnEb41nCwbPnFvcd6ikzjRCRoU3wzCP5DQ1gf9zVtDyV81GD8H6cZDWy6pRFVSk",
  "key8": "3CokNoxE4H421T7E1QU7e7DVjYY2gahX6b1Dt3PYDgVzAsNiUBMRsJuR7HD9UUp8g6QgfPbNUSWrYw1fQeRku3DF",
  "key9": "3FojqG5mz2zvJ8EYb5VwX5dcF7AHW9DXs3C8cYeYnfV1ZM7k3PCfsCfEvFTKHhC9mmXcLpSVXrh8GMJCxWuD75yY",
  "key10": "qJgGNEFekYHLqaZcynFbPbNSkuPgZyuFxEDR4o7WZXYnQQN7LaqeahQo7wNouchx2uVCZzJbXZyq8s7ykRfnu1m",
  "key11": "4ScSi5jL4UHHXwGoSgizwYVZ5xJkaSq8KVj2LNuxtZbJWRewmZa26ESj4HSc7a7vQPeCKARbteD44LeFSo7k6ZWM",
  "key12": "3W7DkToJxFBxErWTYm7kJn66aqga2mfTXAfyL7suzd6GJJZLY9uhqGQMGXY55SiCA4nbBq1uPa7t1qeJffWub7Uu",
  "key13": "5qhNPmQtzaLjFzJRXr9YoDuUt6XUHDrdcB3zFPFScGH8f8EAdhGH9ubx4ddRMhcqaQ5D7fVwi6LAEVYCvDXWrYeR",
  "key14": "2Wekyu6vTdHzQySCHY7gyUhZWMXipiGkSjHpmuJoZWXWSnMF9TmdiJewgquqhWzXgXwmb2ho2LQMo8MUmtPidddn",
  "key15": "4wSYphmHJmsFpSivWyd5HpSdhtr6T6a8hN6mM2obH8zezVJ6Z45RLSvjqn3SNbL2KcVekxAm28U2n7KF2KnoRT9R",
  "key16": "3YQhbXTJQjQkH196f8KKXq7SS7umt44fPJsn1QyVjmzyypU7z56MgieUQcNnvkJYH5UBGGtM8NVKtoSmWmtJhxJZ",
  "key17": "8ZhDbBvmqwBfXpoAWEQV2BpQu2T747xm3nAUj3MaXCwCiq9XU8zWd4C5spaXv2H13XuHK5WWTRbYoCYouL3rvgZ",
  "key18": "dSbcbbMFprQTvtjAZc6KpSYXxQuW2YSwuyqEJE5k5aHJ4HCW68pMResY2GHFNLGQGaTNyjxeBedbYpzgtfRZsHg",
  "key19": "a3zGsdmBu5qNLutqyyctvJzipUZt3quN3uPWFFadoCZrULRN59QzWvDPTNZyjDGu9Scb27kiSR35ErL7sxFpNwT",
  "key20": "2aLYK1g4LdMGiZaJKi27a2bXEHfxC7i5mSwmtADtTjMBJsS2e6RyNw3ibucptxu4nEXWHRzPPrrcf9PCHpZQd6Cc",
  "key21": "5JAk24FzpUDJ4qKERJ8K2L8m1CJhj22DT5NiqjbBpAJ5eYAfwFsi89JDD8AxQ2qCUHtgitvwbiPGoGdd6cUPEjGv",
  "key22": "5araZP9dFRBGjP2BiiXyERZ8GF3bmT8aCbijxPDP2e8CNjWfsDyR9QPABfNWMBEPEdkJfLebbXAVTJ1phDPp9sxd",
  "key23": "243jQeXF4civcsQ3df4LGym2MN8GPxTmEisFERPfYPup4xRQC2e42MNMYMG5qmjuEU4ahimhaNFZhpRw8Qu6H3Ez",
  "key24": "5CtC9RRBxMcRcpkPn16jUHjEVsrbHHV3a2AePto26MarUJF8DxWScpvtX9xvYxwUxMqtMsLnjbksyv3hmtsczVfJ"
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
