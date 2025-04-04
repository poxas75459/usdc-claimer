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
    "eu4NwE9qpAMATjwbCz7fGFzGkhfSeshyqfiK918wYLwjYein47fxbJVPkDDYMYHFmmDDGk8JyYEQxvBj8RQ1Xc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GEBmVPM6CMYLrXtTonE264WPkjjhuDroRBh2kghTRxipc1uvhBggRzuqQgbGbLjqiLDxK7mVVR3Gvy5Rk7QpYr5",
  "key1": "5Csaky7G4ZeCWhuGrKasBmoiqWwtTBJGNqDKQi9LEPTySk1qPLEcxaJtYwhvmvX8qo2Q88H2FGmqUekXdE4HeFuc",
  "key2": "4fcUsQQXrkE1ibYosgPxghcBz5E7mLMkaeLAZrkWrHLHYL6YxinCe3iccu6eHEZSWjtpPShhbj4DYicRakoi8L6h",
  "key3": "5o9wtZHZ9BBjXfbJ7qzWYvC4MLq2DHyGpXJT29m6xHJuSCiMfBa8mA96yitdssn877vU8FKLkruH8uHFuWoDwjge",
  "key4": "3CsLh4dfa7saAPzHmJez3b2dEj2kkBxzVhQQFfdgePmiybAERnApTF5zmmkip54Ra8jTcLTiGkuBAfPNXxNhQRnA",
  "key5": "2dEZfokQ4KgnsqXiW79DDoCfWcXFe4Aqx2xMSgHbKVqRup94KJDymMtmVoMh2jTinGuMjt12p9hdAgq5o47Y1P4M",
  "key6": "5SG6A8vznB8TqAVxbTTvEa6sS6mSC6HNRkXdtdtAWXwdGgif8XCUuAkmVZL8ktk8gqBeHhgsqvqUMwzGEhgj6M1C",
  "key7": "5rGUQucafNq3PPyccaWvPzVqqtzjgWYH6ATzPvSEq6NV612EqYLLke8XThafjfNqVCzEH2dA17Mj6mH5uBuNZdcE",
  "key8": "VsmsZEecMBEUDen4qtbKkvmEb7FNsuMAXBZEiDGu6x8yVuMNnfwhPYRuW3vUxBWiNMh5Lvkg8vDTSCViKgRL5b9",
  "key9": "4GBoYuHzkvgFJMR7FFF5d1Lr7rydWTVJ3Q5syVS2cwuLKF96CiKCb4QKYL3m9TH9pkhANbokfuZstcSnMGfvnAMZ",
  "key10": "47NPPrFCQc21FYM3UzE9KoREnDUG8cWTqwP3gTncdwpMZEd1RGD7n7JEdLvCVCTuYCtE7ZQMSEB7Be5vAhyKLz9C",
  "key11": "mZFCgngyCki8MVm97zBGRQeRrRMjJgKpWEaRdwDrR8yLRb4WwHPTwbPpB3sqkoSMnif3sRRiG6s68isb61QKQwZ",
  "key12": "3YwiMMgXFqPKkdjgvCzuR5rmqM4C4xNP1ZtVBmpTcFhhzBhdPG8RjSoNmSrMg7i2n5VSur4Ls95LK9iTwJPoDDaU",
  "key13": "vBeE8wGC6PC7XbV6deGetCyxysqXMsW8CBc6yruBf3UMuTfZggHTbbV9k7rMrwDUd1zfTDu8CmJPMXfKJFTSkAJ",
  "key14": "2jFHqCYdixtwLTMzY1ZVTsdNN9frjp7AXATdGu1aKv1iwJwrTS6E91djdEuLLHdwsWy742EPFfdubEFT1sLBTWcJ",
  "key15": "2WJL1tT3v4YL4Y3sGPxUyoEtHbzsn1hvUwRq11GcWrNs8cEwTbnYrfXGcFuSxcUwo7pXb8BqEBFyF5GyAWQ7PwQe",
  "key16": "NwBXuBwYKrQWqcyLBqbYkcxr7sgMqUZFVU627uUbSWkDjDb7ykcR42hSFvQ4chjwRo2oaQn9AhyxcnnAf3CBSbi",
  "key17": "2K6tKneNnXxCJbXD2V1vayi6ysiWogxrtgkkGYsY3ifYyijt4Q4u2bjbAc2ZKmcpZfdZao6Wf3cv7VRYhGPuMEcW",
  "key18": "5yHSFKwP4Joy2LzBnZT9ph6wt8ruHgM9PC9yYcyotGXMGguPT3AjCVerCyuidaVyefXVnL6kMp7epEpfXigCWuYr",
  "key19": "5bqiW91449YMLp4seZ91M1oiWyruNjQTyEpdq2wm8c7fkiAS6Me8dDg5C5LHArMGPz53Gaxq3vLyJgKiBZZ9nzFD",
  "key20": "5duyfoYD8za1BdR1iNbz3vRyRi8JHfmSfraPp8aswQT6gXtGKhamK7Ma6QRTyQo1dJiTPvLM5yJViLyPhbeJb9fs",
  "key21": "3CoAAYt4mmjiEpxrihvcjK61KUiKvPjSgQTZapRnQNGHPH14oF7wHE5UWH2Cspa6tnXUWiE2be7VtHcEK7ZsUQn1",
  "key22": "55bimoJCmRFkQY1zoe4TssQNG5f95wRSarTgNi4AGE3ftBCGg5Rce1pyYV4ccipg6Gj398mNkH46582Mv2GF61Fn",
  "key23": "3Ho85QoMhDJnhJJDarEig2s6MGSDtPbqNKXtooiGNspu9ECvLBY88a1CGviFBuqPinsa95bY383o3zMh1pkc68k3",
  "key24": "4s5RdSgzCpvL23o5MQmwuGLf7gE2upqADXCt6nfkbJRiQx4TUMQrym8hjUeNH5DCcxWedoJnhLP1mXEjH3nHMhte",
  "key25": "5THJnajoapCRutj4otSH3p2krDjXSQcduVAoX6Lsr83AVSQtmXtVVjzf3RjYbp7JjqWQmiyA5F7h8hHYJAozzP6C",
  "key26": "3zCgtUNc8Qq89xA15wPGWqAdF219F3jNH4DpLdciWPDnzT9NDR7QKHR2hymLqni6g5FhzQJY1gXnHBqmH2WGudQ3"
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
