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
    "2EEjK2kHyhf9tNP1QYRAtqpgRu2Ms9SqtQWKxZPka1DQj86rufR2HVuidhJhEHg1fyZQrisj7DKaFRwWDJjfM6VS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zaXWZGpaNLtWF7ftQXXi5CZb6aqpDwAMefkkxQ38qi4xKboyUEFWtP8er8USm6GAojdHDhJGBx6n7Y9q6h9sdox",
  "key1": "3ok1Tz4Bfevy2ZaUVctNzodCmmh6q3GTXyBf8DJh4V75Tci1XkaWHR1MXPis2nhiJGW61x8csMmQp9rSzsDPAYjz",
  "key2": "KHUVGwnQ5CiKrsu2UDUB54eEZEmPKhETJTtpu9hSj6NjBETb5s7Es9e75JRKubGcNh3HBmuFbpGhwLfKeAwfbki",
  "key3": "2Jy1G1xuco88Rch5EPvkVfswyvNJW3PS43iaL4PzxFL6QNKaET1KfGRefcuo21o1MWfsDnz8iJCroyMXv1mnoZiY",
  "key4": "5kqsPdfRNifzjmvWH9k2Zuxh4GzaPmr7BgFtjEP22DPpNpSpvqfFEPDeM29krnisbaiqKJZSkemDENNYGiYUoi4r",
  "key5": "j2FjNQADtJkeWvtKSfJ5PYkLX5JssDJPJMuxmJHgwcN3wStmkAo5uTpu3iDCyn8523pdbmeG4Wrj5raP4ufecym",
  "key6": "2B2BNqk3CcN3MY8ygcf11uQhzPkuKF9NHcJFtAkRDKZwyC6VssvahzeUoiFjZvtK8MU4gTCtFWCsVw98JQzdkzvk",
  "key7": "2WqHyx6yUctQvcf3gJzSrqiVoSE2Z5HtRJaCZGD7jY1cUKykoh18pjyGznxskvs9i4VY7Fg7gqY6ZtNG5XHMT9XW",
  "key8": "4mCcKqjo9aZ4yNXqfFHpDjhRsw7WVN12tju6m4BxqrxnsnQqfo5CLBUkWqLK1WiJ5xivpByLnuTKSUYyD3wZDkNx",
  "key9": "4ETZsPjWTWcXG3tdJ7ZVLQXCF64yXzCDCcz799CnsxEe3EH1x6QFLrDtciui8wKFK2dBoAd1oL4saY5tW6iqKTua",
  "key10": "5dPCquCd2e57kADgjt4obj1nSgQCbCP579abCLkaY3dwxhFKb8LRQJJtVpasmdgt8uKq8KJvPD8AV3cHTNhkdpNf",
  "key11": "2vCTAiaa5aZJ2DEi72WXM3vqKRcKkrNCVrSoRBRFTpxvE6yx4GLTPTDcVcLtrAfsXQkY7oRF2rgArVxs1XFvEHs4",
  "key12": "58E5Q3DK85hQQ9k4E6PjLxsTWyD8dvY1EdrengQLMffLLBEdRr1ZjZwekdjwjDWShpaRKXMmay82xTUdXGbTbuh8",
  "key13": "4eoLU9FQT7Av3EMKxhqTQWm49oYNZXVCVVKMzD6K9K8EMe9SKAwp5iWYoqwr3QuCaXjmNJd2ofKhaezjou5XEkcd",
  "key14": "3hN3KFAL1evNeQPAJHXa2XJX5gdmPpVgH9fY1tqJvfqWHiQWBdxBEodVQEvD9BbbfpdTvEZZQSnKpZE8cdKoumzL",
  "key15": "276dr6qq1VSUdQucWyxLh8hFPHgn1KKjzERiqpRJPrf26w3Rjny3jmnrxPHFCmcVewrQHW3SpAF3kQFhqVJoQpsx",
  "key16": "65jHu4QKwMcJxv61kF8HtRv6zJpLxjHt2o623v7Fx1z6eBfBAgJ9wDoU9Z8cEAHBcALmb2WFemFzVWaXtB4zww1w",
  "key17": "5di1KCJhZ1SkAaLbW6RZv97U5ncZm3YC2PsPLUebJ88gwACTizK9zv6AtvB4uwkUS2igirDjLDayuszFBJF3mhhc",
  "key18": "4SyPNHT7HeFT6BTaFCoNCg7RhLHnd723HYzreMm5GVWXuvjMGxLfaZC3ghqiSmZj3imjoxRcMb7qtKw8aog5bHcr",
  "key19": "3xbfxDRpqHondE5FnmtCKsUgz9vg6mtj8KHcqY1wyoUv7zwSwjkEC7eWTPR4AszZLV5wDbgGHfnJuSoNa8ikxpNk",
  "key20": "hoCMK1rM8h3DY4xhAPNb6pqgUu5dDE2Ye9aJb5qAzu6D9NpqZHtqotdZ7LLPSeQ6ruvEQA3n3cwYKeadGnUcrGT",
  "key21": "5C18oYiv5HNHzB3X3ix1mbZsgmcXASeyvBxyhu2WmRjHnXhnVcNFk3CWZCZygAYWSHKviTwi8z11DgQZwiLq5sPy",
  "key22": "2LBptiKhFQ6LP1w1PCiXdD78LwDUHzFuWQgW5pTwm2GWNHFQzgtNRMfLeB7k96usodx9ZARhbEAsGDocNDdhu1v6",
  "key23": "4rehAdoCAZfU9bkjjsg3s5ft6VB9ejzta2nr85cmZ5XoVaAMkk449Hok2ddzMptxYHsNz7FP9b8MatHTo9eeH69S",
  "key24": "4JDmqjhUsGRrJc3636kBUCPHur2xHpq7XdVP2V7UvHFLUhdPJkAywisfqPvsf2fHKKSuy9kW7V3BpsUpx3vVoZ2m",
  "key25": "2ATSZqsjkYMReZi2F7XApNRJSHqKy5JyqxdmnnTkVY8GNDEaomyFbzYCydgKfF7qdq1QUyR7Xzkf9fXyLqm1EV1o",
  "key26": "59TvFVDtsZs49YEkx53x4NTSGc2XAXxj9MWuKAv1y9Y15mSmFzTA1GhyRWPVKhXnunRrZYkg92jMiLS4dgAm6xVb",
  "key27": "2aqGo82T2SiAW5HFnNrQH8bbJfzZjQ5d1AhCy681Tdhsh7diga2vu3EGY8MrNzY1L1r6ebgq7DcsJRCi4niq452Z",
  "key28": "5EHexEy8jFyL4wb9jfbw7oGmdXCYceXtpDFhEV25hNatqjXjLaAtw8EGRYCxSjYiemgsuP4vzMw4M9uSVy31BArY",
  "key29": "666e9AeVF8H8uD4DymfAf4TKyaXhNQ1GVoeT2TzmywWNRaLEGfFSLrTNJyFjS1PXP6UXDc8eJDhq5JGdbxVyCPbh",
  "key30": "54ajN5NwpCq7zmWQDMbWd9Gi9RzuMNEJoySMNDf45DYnoWd99n4PwDmVkaDWEDEnAVBE8RAbJtnq2NFVULoauuBX",
  "key31": "CQzsncxeSNQUfbsz8LgaV2qVK9wdaLs6djEpgLY4Reb7UkcF6L6HQoqYuDdQihyGVLRafvzYNWHE6KELjDbUSku",
  "key32": "XhhdHu8cZUddaYb7w6nfonNU4GjVfvXPEt7bxdjP2waPWA7uEPFx6njrpNiHwWkjv9oqYwr5WKk4fKR4Va6o8q4"
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
