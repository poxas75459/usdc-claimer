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
    "59Jj5dwEeSg6Z7duGqnZtGB3XNQTUaLFyaBfrENFiMEg9jxZzQUCXQwfB8gpJPE6N2iJdgBybPDyk7Z1g15eKzbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GAUKaC4J6s5Seis6B7YLe1CuS6imkftVBknXQGYya4Bd6VWCW9KWLUwpdWdzvBVh3SYu7YVviJDzyzKDGS9Dht7",
  "key1": "2th2rcLDEj1x2YUSM9jXz8YZ53YYvvQMZZu1ZzZJYnuyFDtXBJ1EATdvQmjgdNgH1jvfVryPxyMaAiPDH5Evq5ia",
  "key2": "todDvJNTY2eaADj9pPsNWB9jDhFkNyCALMT3wmWjTL77THMDsFWmM7M7jHxgZs3ryJSQ3StRfPEDZsnu7Pi9ENh",
  "key3": "3HFKKP2qK9LDafKnLHJuxf1LPQKRMbMXvuR7GZVMxxXWiL2sjPVLuAgWU4HY5SzDWkMCuV3LrFD8MCxtpmbHbdd7",
  "key4": "tPNq8eRUfZaAZJEM9VFY8ASWjpDwUC3pkMPq1GZxJDWpHJ8iqTbMkpAfVRfoEEb9UNCqubSLa6o3YgTHkJXX3iL",
  "key5": "2BJ3JXzE94egjKUcebhT8z6sfYNxyESA4FniGHBArLm4xfssNp2Bdzx6zxabcSQML6WQZ7RPGEpNeAaMy6EjF8Mk",
  "key6": "615LJ1qm2inGgQ9qk2PPtwGLUaoiT55fheVa1jKBCim4cPrCHffnRakdH8fmKpGfMp3CVMXN6uzLXqbLApTneNx5",
  "key7": "5sCG8vC2AnEUViLuUaNx91WPXWKFM9pieQLMXSJk16cNXfQzbwE2GPko8rNAXi7KP2bUhbaBTrmA18fGNkHTUkpC",
  "key8": "55XjYzhWtrUMAa5MwzcPYddc37ExymNVL64sELxtyDgG3AXzgT2qzknA9ZXH7LFmcadKo1vhwfGAyFMYwou7AYTb",
  "key9": "2JXU239nREneFUuAs4hx5xmBkzFWL8VHVN851QDKUkQtPzh6V31gPeR244sdeNJbbLjeMJgLxaR2ErKD3PgXZu2Y",
  "key10": "4cDFEUjNmBpdrb3KywLMtSVGhbhQ4SfUvbWKUTAibJsuv1JMohWqKahVbXSQfMn91CZgPUSQfdGs25hupfzQDJTM",
  "key11": "4GMmpW1EMStsNfNDTfjniT5TxuCo2ekJAc27fNrRDJWG5PTAfKuh8EeTohRp6cPTvPq9VqB7PJzs4d61YU5A3Hh",
  "key12": "5y8c3cRZ4G8btXeWpiopX7FA5NK2hL8qmrTM2LgYCm1ZkUvGy4kTFcte6zHnhvNLfmRSPv7UUb28V4yAe7MymFnJ",
  "key13": "3DShXFigDkjLYgrqKLnGQkA2hy5FEXghrqBUqwuKio6FjLB8SD2Q5mATDZYmqY9hU3Zj6htzcBXUNqzfS5EXu2xK",
  "key14": "3b7Ea291M9aQwpZp1W8LJT9MggyY5uS8rwWW5pzVsPHBoQP98afkixYBVZw3fTamYcHvZ76re5QqcTreQjYdM2Kq",
  "key15": "n5xAuuxQV5HMi5qvPcPd3pJcGJDuJ6UmGUjiBqTfsxDSg8zdCiXUgA55W7DLb3tZtGrGPULXc21y4i2XkL3cQhX",
  "key16": "5gFnMWoyV1PYdPoTyVM32bXBP73J1CV3pxUb385JsJy9iwy8KjEZotDo4P7CkZtbzmS3YmZ3kDTK6kDMhtfBxHPQ",
  "key17": "5ffJoYEYF2aqQoo1NavBVNHd987p5sd6hdwrCs1bJkF8ErMJnt5u1dEbEMyJL1c8M5piCDe5VFyUb38cimMSUDJx",
  "key18": "KhR1qZL4J9fprwSn1QHM99LfBMvWAWeF3cRGgdhCN4u3WJy3cZBoWfhyNc8xdNQ4zpCUiN14dW3j62ByTUw2wi1",
  "key19": "5nWH16AVZEK92krjeKqfD5unAVf1XgDGtN3xaGmM3AwaJSwPKrBA6bkpq69tHLu238DNXSUxhhEYwSM6LCMxEm2S",
  "key20": "67SodC2mbxhnjuvpeTekS8fUeEFH2Dm6evBnpqrqJaNxost6sjpP8oVgEc2qum34yTwqWF45ciHdMDLgPrJM2aEw",
  "key21": "39ZMRFdsPrC2RbZHBxnuPtMMY6GWrzJ8dsuzJ9fRNnk8URuaE3ho9EyWA3EaPEcxqHaT5qwr8WKrtqttxymuesyW",
  "key22": "5g5MfMpUSx2a3uNzw8QNi9eQ9mLUhBwh3E2cJwWBN2GwDUV5ggx2hnaRJMfdcEjZTRkWVVQcLVHJJzYasgy8aBzk",
  "key23": "2LqFjh1TgxuGpu2eVyZMzKPHTdWeAjyN842xnqQa1oCgfQAW664JTx96BNC9x7accQtu6gbEa8UTaZyxMMzXaEQq",
  "key24": "iZMcYbT3nAQvGd2xFP2U31DU1f31JzM6BNEkcJBu4Gvpd63CSSqgJirK4sUHm5trL5suEv8NCyvAjZtMaywV4VR",
  "key25": "2yMoZ7uqstNsWuTZp4PqB9q8JZoMYNVGBjQmMJVQgbtSzRbSK5M1ETJTCAwu3j9jWs7Ew557nys5SwHus3TNcu2J",
  "key26": "2c7Tt6BFnrC7gAGjUni4Ww1RjjJvxU9mymg1vhHZhkne4ejsinzaUTHdG1CSfnQ2VFb3CLaEGx4yQG5rkqksGK9q",
  "key27": "2hUcWB3wFHcpPardZaZqstRnfnkjs9TwgMisefrabSwBKcMVdMY9tuzEBatqn2Lhi8FQQQJmjXE6xAEdfX7rm4DN",
  "key28": "4vKW8CgPTYWUNuY9B7aRF7YAxs4mKSHmEE2e2uywgrQB9cd6tPwNP7eMPSpRsS7HHNHh41Gdp6gVHSWP4KNDpLub",
  "key29": "4499awySNBn5r2JQUVC8mKn7uEGrTrKRGbahbmYY1mqRAd6WdoWWpEfSFPP35nJgD6gAE1ZKyorijeTCkqGj4hum",
  "key30": "5Jr89qcpv1KjjNfooFKJZg1toRzvzDymrytTEan5xhsxNNAKtdGHCnTGseGimMjr5QgyVgUkGZYa3f8PE3TNj8gm",
  "key31": "5Pz8G1mhX5xUbXYr334UAiYAN2hrZXGe4chsn8B6d7AfkSpy7H4aqHwPx7GvwVCYnY25Vx9dhGiKz6hXCpjFZVJX",
  "key32": "5T5qA5b4k8K4XUwLWUFmNdhMiGn4pHpjmZGJauZzFcgSTqWcN76QwkzphUxcMVUb3qDZwMioDh9pzsb1n5B3mR5z",
  "key33": "29maff44dNJh5rW8XXpR7KHUtHES1jNn9vZNv8KiatvZfWp8Cdf3wVwWUrqfQ7cxVEeysupgZEtvrbrjjTRUaECC",
  "key34": "6YWYApbCHwsoNVrzmwqZrk2ayBENp614UvoJ623hKSaTidVwujqeBm6UN12YHpJEuELxyTSwDo3Lw8SWKizoewx",
  "key35": "4HgwQCQFRvRVgmuXrrf8kxDj9mHFcSQj5XuS1m9CJzLoSbLgXT6aZ596Yigayw8NiU9K2ptNFEBY4vKjt87WLrdu",
  "key36": "2NRnob17p8WZAwxYugvA3Tr9J9AGsvUFFrPjYuHQWuwGKHXDhKVr68PLX4TSVNJRtry867RWFevdu6xzZ4WA9vaw",
  "key37": "odrkVA45i7eW2aNtTR4QojFCYNHBJVs4Am6vEoFtq8w8jYUMf6tk4aNn2GKMaBqAMYTgKWsHZRaRZD1w3S6HBJ6",
  "key38": "2G7FqNWFFB4fAaUsvNFH8PTAZ6273yfFscohECzVdd5BhRTwBA8kK6cKxDKkbCQQzRvyfABLf154voy1mJaJUoVY",
  "key39": "3jMCJx5fvd3fM12P2ZyojKiQ43fSvGfBbmsSkQBWyS3sngeYt8qrfMudVBJKCTHUKsu3tjJo8UdmpF4j3xqJRDie",
  "key40": "53CQSeYiXHBzzUVW6a1NGYvUQE6ReRTwQqU7eirsxmK4TUX9nf5p1GCtaA6yDFB81zjtNmMoFFEHeQLALcR2CwMS",
  "key41": "3zj9hLKvngvbSjDynSy6V5YgfJGXiq8vkSQPPR85cPbPgYLRkKPeGKRRvDMZwPzoaA4FkcQScJed7pW8MwxPskK",
  "key42": "t8VV7WKMnGtm5c5epFazm1gnV51bAHpHz7LozbVPuyThmKVNKuvKNAsoK9hZ4amSF9216UfaGzTFNVW7u6KHjyZ",
  "key43": "4ZXZnojBtjjUaPsqfjsdPoiPfBJXpi4UAofoEKkEQFRBtRWbUSKPUFPG6HHwnXWMoRmV4FFF5QJ9ekxNZKRdG6gv",
  "key44": "2VSfQEt5vkuYCLB3guegoCDwBCiun6pQYRg4cWrCy6GTm71i3NpzypKAWZABfJjn2PFFrCnGguB9b6gsBDZdF5eD",
  "key45": "3CoWoYyS7nL36twKwre9aWTrC9zczM8oimKqQNyiB8r8BWUCxA4hwK3Y7yPVz4mseXDb8G46fB8B8QonhVx8conE"
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
