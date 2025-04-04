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
    "5CkuYSSwwrVAZgjYKZPsKzNidJzC8UWCrZncVRfqb9H4yBhZ5ADfC9R6AT22kogVt5A8rg6wcyW3kQPc3LvnXEP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28coHHmNi2NBXFqCA5Z62XeLNqyz611UdhLrEwmjjunsqWSdKmvFG6TheyZWaLpSjZzL67CTNKFcL5NFZgznyBFg",
  "key1": "4rFJXGj88o3ksy1uipeb3tvM6uZ95vSA2cz3EffefBQ59dUein6soQxqbRK79nBNYjBE5B2MJwM2xfqVu6UFk4As",
  "key2": "5ArG23wsBpR7UxTFkzKJjZAB7g6RS8e4VDSfx54pa3o6hagRZYviTedf2r2NCjRkr9mxmuY4iiDreq9ERhE8uiZj",
  "key3": "55FySWy9jpncoNJ1d5Ea7EHM4uEMJQnuGXJRdVewS5ZRyq6suKcB9fWrHhiYAdhknVcxczD5mxT1zUv6LmAwAtZE",
  "key4": "4fZd91iFSDtLxb4Tu2MYPAXY4D4pNF2mZxb7PZ8F7RaQCTqDno4n8avYd39NWZC9NVUqTR7pX9ririC3Tx4dJkZ",
  "key5": "3wSRwNLidawySzQXkT7Y5TZtuHxaLwyjv3i2i9v8NwsM7qveUi5peudmJStnze3TxQ49GbNWz6oXFnyzd1YbezZw",
  "key6": "5HQQqGxw6MeGwHTQEMSo1RXssaabjSrySq1kmXtxyEePS5JBHe6yeAGjwBc27wjKESvHFpv8U6Agpubaon71XjyP",
  "key7": "3UPDhjQ9bcgyykvaAt1zH3cAgeXWNJgiJPTEG3Ht7x33xsqu6Ed2nw9R12cYi6MWqFcF5QHb72NgPRu6pi5wfnWV",
  "key8": "3YTJTHhVvg41bpHEzH5Mk91twmbxsXQn3r1BqNNv6RW3JRScSZP8eoJMm2mDr5P7iZRr6z8VKebaYS96RF1mAh16",
  "key9": "4PcWvayRKiZBfnqjYngHSmb4DDqgBYqQSK1tDT8cCTFs7e7jbFGEP3AU2ZJeb4ZCg9wDnCK6hYi2mRZUSZyJCSCW",
  "key10": "4rfscGP8Lrh4v9C8RNVFamTn1e9H5CHmU2thsZGnay1UXo8BJAkDCgcu9r3TPuvmNrrTCn7v3WHeF447zQDp2ovK",
  "key11": "4S9x7czZLQZYdDTuVDam74zN9QFEAecCSj8pjad7PoAPXuBGNDerps3Tn17NritbS35n5APkygxFreY5wLQ9F4tj",
  "key12": "4a2ywFNtDqr1MRYP8pnwpUbtRMWf3frTvv9zdtZCxW1jddds6XHkgEKa7dRD6T4rFWw6dfF4VNAtNfQtPRwuJmMj",
  "key13": "4ER7frUw4nxF2DURuQ7ywqtvmTqbKwoWd9kJzYnZngdD6aUZDzmvi1vGLw8EDc7wmVYk436gtdza6ELpPZ58e38U",
  "key14": "39YnBYJZSECRxqWas3nKpFi6G8jGtSUMD7SJUyUqtBTQfRFUoFktXLV6mGR7d1jJkHrxGwWVNELyzre16WgPF2Ne",
  "key15": "36smzEfu7DQBFe5J7rL7UesVX6HfHorxMS8cSBjS5sDrF9nGbsG3292WAqCtziMUXSXDRHPRJ8DShYEjTYw27W5r",
  "key16": "3MeGV9WioQ65hV5DvP6Qc5TArsSFHJnz7788wDhYeohL6yDb3X2K6PMLDyJvFkxiJhByJ9vtDv4WBH5TrTv6TMG7",
  "key17": "3bpnt9b7C6HMjTYHLzbT2DkA5x7RgtjHJTxnJHdzdEZQAVXqMdT8VkSt4MAXpff1Hppbxn1gpaWmd9qD8Jcvgvxo",
  "key18": "32dpmD6mZzXzRbyKRMfgevsSjadwBhPCA8mRcKtJrPXwtPAbnCNTF79UyTQLShUTG7zKxC3TUgmobAZ89AxTZ3Se",
  "key19": "oXMn3SQE7oC6JnNVLCaLJAmHFMZeQ4qdUS3iV5oJrovBv9c58sCyb872GrMHCFKZnwnjZYTxztFiSKXjjNQAt7h",
  "key20": "2GorkHjRPf8PbzRkRrVz65tLyHAJVvjNc4c2NgPc4WSvFEaeVAvrQkL14vrod81dUpyLJDunjmThytLLwgnLdo8L",
  "key21": "38pK4Bs1xuQ1AZQa6PeNuY9n2JEjPRfUNWXMBUQhUEiTZm3kvunKLPKmSGBq197deGjrdqFmYNpPjgLrcHNaDat",
  "key22": "5gadA6TnczHAo6CwArj2fuDERpiM2MnyATgXEuotfPYNZyG3kiDBd1ADy5AVixCmZJtjwMBkur8zQp2gm9NJo3uJ",
  "key23": "2WE2chBLQjGE2yyjGLWjwzfAgzTJ3GFn34w2qFM9Ff3DNYHP6kMEaThNMmNVEcjVgC21QUXR4FQo3Dme6frLJEQf",
  "key24": "4BHEhEfvH73roKWAjf7JSyqTpPubPExDnuxagQMStN33yyzdaEZ9mzW58vtFXjKL3BW5UKj6LMZi5K5g33rBdEn",
  "key25": "5GQT2VMjVPcGy9qYFpfHcG1YrsHzyE1npmN35TwW6gPT5WCgoRjLposGy1XHmRfg3hHUeHEoZ4tZhVrU56DPSSDF",
  "key26": "27XrkncRqVoW4qydPJggcFHzNNud7jLYSvzYAECeBpkhqoo34gEz9YxHUTVzDbnYQzWK6t4G2WQH7HHJT2YnDLcY",
  "key27": "2h5e3MpHRV3VasFdLKPjo7oL55S2JkpCYKD2xovKs2Rpts2N6dhJrJUZ1q4btc2ZDNWMKqo2eYZXh5BKvGZa1BHq",
  "key28": "67rSe1Cak228wJHCFNFzxz8LCTYrLuq5qmpHK6ALGpBZ1CV2kdBYw7kWUpunzn8eQiPMaheJmkK8ZXU18nNuXDMr",
  "key29": "4uyNZqxDxatr8j1YbtmXfJyn2n4d69nuJKDr3PXw5URx4TJUDzjLqiH9EoebYxZJ3XqJGMc6z9inBLNVpB3nu88i",
  "key30": "3HmcREy9APPNqtYMfcpZJZ8gVya23q7jtpBwkQgLXvFknPE8G7KW6CZGaENV4qmwuhY8yW41TzsNMPyYUi6dLoRM",
  "key31": "3FDuHjPFddMPfwEmXfWXN12EkA3nj6EBP3dT5Z5vvsFFpEZUxeJ1C4CdrwFDeWaGhayQwdq1ZNoK4qN6ixQYF5Cd",
  "key32": "3Dkwt5UXqxwL9XqCNrT11Eh3EgSegq3kneWzpoyR8pK8TpnBdNzisbNxdxoKsEHigSfmDWGR8q95Q41VBLTKH2n1",
  "key33": "2ST2Ym3EdguDrTzjRG3LRGKfj8RoKqkxaUshcyT6NBFrVvsLdgaJmYTF3WQD5qG5eezhsKpbHpsRXkwjYeRqNsgA",
  "key34": "3qZ3C4CTXcoqR4b3FxBgsL1jaXpq1Xwm1zQ2Rp2oV4HwH5u6KCg5DVfaNVyhRSc6UwumXbh5shSLXrPo6yinDtNX",
  "key35": "4zKbSk4e62pybuXx6n4YoxMVwKf58jB6NprboRwRhcaM6NPs3j8WqSL4GbtXx4ae7MnCwzDpnkmH59em4FRyj6S8"
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
