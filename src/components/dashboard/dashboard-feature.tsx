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
    "3RBw56N9ECzjFkP741xBSPYaruxJWUFFcL17NELTh9PqqJmxyJQRAXEcJ3abAByufL9jUotAh5SFsdWuB6KF7aR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oThhHeRPbfW5pf5C1HJ2szC68dKXcfE8sUBwZtLtd2vZsus8cPEJdZhpoc2Q5QYUDwGnBjPTfp5p4fzaZvtLPoZ",
  "key1": "5bq1ZQt54ip9qN29oY2akgms7ARoDTCPcqTKwbr2jHXZA7CrK78giZ6zhCdGF9x9C2vKxGAXDrGNJsnGPtgSbRcT",
  "key2": "5nYSFPx6b5jV9mbDv77EuhmzidGbad2i7oXJoiv3frCudg7tRgwox14QkR8ayidSUuAYcYjqAKayN1NQmSdr9w2Y",
  "key3": "hE2egougiqrd8PunTc927WRMMDfodAaLiiKTNANfpmdf3qhr5jWJsue2vFrLbf3H7vmTxoep1k3zym1sD8N4RAA",
  "key4": "4QBSDkC84GTT55NvDvKv9zZUMp914oE18g1TxGpJNYCUbDfySi8ns8jmZsqokkeSDs8UA4gVfAz8HaDKWHpgwJsG",
  "key5": "5kbw5KLw8rzx9vyV84p2aSSWUoPZU67T1WVL9HrDqgbMR9hG9RpST3SSursjyXx29JbL8Ti51rp5SyrW7grnNMyZ",
  "key6": "4SDeru4xtgtZb6HihvBFU11preb2fTozD8Mfvu4bLvgdnHpqaK7XchkGtvYHBBwH6v5bn7B5HzPkWgtZx8Yf5PgJ",
  "key7": "CHo8Ze25FbJptn5aHoc1731BMFErznwHW8H9E7QYXwk3nJpJUAEc5TDTesYc5oLWvPt5CzAF2kYbd7SfyQVYFKN",
  "key8": "2mA7cxeniVt5q9L6Nfd5XDahEyzeGLuE6tFMNofM6sq3k7VmfhqFYXEJn7S4oJ6XbGkKbhebhcRiRBEbwhmD5Ffx",
  "key9": "5t8PZyByj6AKUF6yrMm657zYbYfKqvVB4YuX7tqsV611zLQEriuWzez3cNEdv4jDQ7neGEQqnPpLhu7HzmD364KR",
  "key10": "2sZuPuaywnqncTj2MuuAkRcKJYa93D4z62uUAMCZwYwgC3Ge54yt9pDppcJGHrjeEWfs1CPthtBGFzgxxCfTWyy8",
  "key11": "4RssvcALsyHP15t9z9okrRV8VDBaFA9FPZP3MbqVC9GT45r1HWZnk7BW6dLHyX14A7ksbRmAhEX4iYUNP1rskPs8",
  "key12": "3BwTsMYLVvYuJDqdg7uFxxJm4dYNowYJKBVQPczQCvi2zFQuDuCAuDTV1z8sHE5E6GtmgRtZqxAJMTrX7Rd5uHHt",
  "key13": "5CCBq3fXvcj7qyXXDTzZnSxYmVp5THgtMe2YfZ5Bu5J9rPDTXithQRuDzhRF34PkuMUqQcoZxLFXLmTPube2pMjG",
  "key14": "5YT2cqnNGu4j4ukiZbaxcd4ro5o3FnpGu33X1PfzWENFyy166WR8qGcnqAgq8kDJF381zBkwagCPx4MC9aaUYuqG",
  "key15": "3Xk2R9UFvDQ1eGvijbTR4YVJXrqqXwS11yrRuxCcD3S1vh8EnbH8JtfSJGyFpVwRgo9Erj5DRsRXu8rsiVJaNDbe",
  "key16": "2XWaeUaDLMEZPHMQ5aQBByRH3oe37PzWmPMnvJrnfNiTDaNDhUehf5ftBBtSnYokA82gJcvswiYvuUsSpvhNFA8X",
  "key17": "21g1onNnHkQgGCAvxenoqbY37kHzn34dNWwWBtRxqSfbboVVAtq6zYPBwbaYaefb8ZJhLUa7W9QQJGCah1PkSgff",
  "key18": "4ba5SvubtLvvt1rcG9UByJksPXTUeKEieV2YNSmZxyevvyP3pnvbUx3MhHLiMNhDePB9SPFdE3Tia6nQmXVHXTCy",
  "key19": "5iQ328K2BXFZ5b4PkgZXZmKahvH94V9rTCMWe9Yq2S8wgw3hrzFahxxxYyGJ473GM25oEG2C3FRk9kUKrUpsU7E2",
  "key20": "59TvtJSNEodHFZy2jG1f7d3ftBSLSM33FyJTrkkf8qhPBefYPWjp17XTE45ofxrDxisheGUfCfesH2VrBFxqxK7S",
  "key21": "3Ljpco4CjyTaN84x7zohLTBqqDtwnoUbwSAqio3qVebHhmJMbc1q7GRxQ74FFJuz339MciFnraGv6WRLSpZrvi5u",
  "key22": "2se5rWN96Xn2rLmpXNmc8JkjbaihHwmpnHp4snQA2ec4fBhRnwuqiib5yS28xVhxTZAJu5FXzbYcsWH4NU3Tx6zC",
  "key23": "4HjRKkfN4bkwL6AS3czkFRHKpwNuk2x2ycM4xqU3axSbySJBv1LWh9gJrmjw1chFJFCVCAHvDMFvKJSgtWeEtbJX",
  "key24": "21ZrKYiPeUUeKcryEVE343bKriH12htJA78qjj2PyBdqPNSJJr7twWB2D6cGXjVv9SeqPmDJJWYiLLmHMjEpVkSx",
  "key25": "2NLMZqQXwgoPeLdTS3QUjQbiskzaeBRRGJ8FjVFZuPof4BVrSBtuAge9zuLkN1SrcXrwRyaRJTXkPHnSuYrCPPmB",
  "key26": "vEuJRanJvcWQ55z2YqMeUV9NboEua3VjDLHXGn21XPYgZLi8yWw9AmyxmTE5QL7qigHcbdfoxSZCFi7jq8H4Kj7",
  "key27": "WxxqNhzPPWA8Tv6k4gsvsfyzERz1Xw6rd8GeuabfL4oqkr5EdognxqpY2mLandDpwgCpiUzXy9LWceHW9Esz5cq",
  "key28": "59noWLKGY3cRFpgMfmoZPiRqoh8YCKvZiBBEFNxLRp3dsxjxRFvPhnT4tj9g98kbBoTGUyfZXdfZF4J6R7zBTY2B",
  "key29": "5cqPCwRM262m39eut4WU3Jdj2uAxAQa9exbB6kZiFSPcmc9hBgiT6Ve99oPFoXJnjT2URgHNKz3HL9onwt2UV8NJ",
  "key30": "dsFGTsDFeTzYrYfx6TSZfXDdDGat4bbSZETvYyi6EYy9S9TewSJ9SJ43siwuLZz84JTpKVDQVwj96Xyc5VC9LoW",
  "key31": "2cM7AKBvAnuiXQ6ycDk1xSj8vh2fxoFefMdpn5iosMhLbMB8k814GQtUhYSpZQ4HdSYVaDnPVEStwbehDUARkRgq",
  "key32": "2pTiEz3imyQprqgsryxJ3CRizbPZ3vb2epBJpYPWPTP2eeXUd4aHejVCgmfKscjdTbwDDGeszh49op9WPGyyWX18",
  "key33": "51EY625Tybv7u9k1oXNZGMFmX5w761xMmp8xws6gn5cBtgBNTUmJWqFVDddW3sVCAJprKMPzQ96UCmoQHFamUKVS",
  "key34": "3Eg6QWYE9aNoHECDVWMQ5pQDB1UT4kB1z88kxfGe8vEEdk6HMmdtERVE1N6QYPDcS62qZKX72TK6NSNFMdGtj73u",
  "key35": "22Kvae5L7gwzp16v43RgbHnKkdYxwqXfSkUwNfPpZmB83f4hjdFWHgjrrjs24FUvD3CuMjYZiRh6siKTC7GhGAbK",
  "key36": "4WP6S8R5HiT8Kf835H6KB8Zc39EJ7CMW6EyQyDC3zt4ayCVoVQ8kKUCR1tSs4wRq1oJQSAduj8Ss9vo7djp932Hz",
  "key37": "4y9GFSGiTU67aejnZn8e4SyCn2uVDmgxveNLjFMY8eSXFjy4PtBNDmybVD9oqEdVqJ2uLpNLpfxb2o1UnznFHQVG",
  "key38": "59WgLPuxfvYDrda8bnXrwA9xg3we9qgkMW8z8qFBbYGm8AgrCThbVqaFiK9dbNxGxyqBiYySCYAG3iS599XfFxSt"
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
