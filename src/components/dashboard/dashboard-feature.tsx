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
    "jVxebPtJJeE5iNztUtgowPYz82rysKdCCP4tkQjhRTNB7jDHoxyCYaewHfAL5Wgi5RZdfdmAUFkihfiq7WZhFKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JLMmzUEkxVJ2JPsPF5iBRc2BKGCU8Q6NiVtrcvRpRb9mpyFfGXU3EBVs4yit8mBdC22yCThNtK4ZdjZiRFT8wNM",
  "key1": "2uzvnLn91PwxLeuMYvXBEPDc8yXTY7asSQ6ygtLrHutVsFEV8DEjBr35X81vTBZAdx8iPb8H11wYb69B2RtWCt3g",
  "key2": "3cdWB9v3tjy9R3SfX5toT2yGJFmBhhLmysW1w8Fd1RCFZeKMpQWCL2pFrTHKm5F4B4MDhR8qdnoVFcuHqU2mjB5E",
  "key3": "28yLSNHgKMuJ5Kiie1BHNoFQpWnW2mj9criApuHwT1Xc3SNCRGpoL58WWh2mSWb38ew4feqcEPEGEf465sharEkB",
  "key4": "5SjDR8f49r6xbZKJXZEUVxuUaLiHMFTBuBmDNZykHjEQkXBxzs3Fg1YdSxvJovzyvLw2f7QqJrA96zX5CgBsrPS1",
  "key5": "3phu3UL37VptABqqXyzGWbNrR591wzggGCujLoRGck92EDJizdGG71e8h5W5DAwEoNC4ZxqnNsS8NQrs3215rZdk",
  "key6": "26uSxjAZcAHnrsgHUR4vknN4wWg1zuvptbBCP8UpsSfv4gPQn4CY78kCRfAWhSuc8HPovJJ3je3nHb1Qn8Uq26L8",
  "key7": "3DJ31n2etLvgQg7cRUg6wL2F36nG6EEtPEWDXVw78bDS5CNWhSLFC82x5UZnmAeoRgXcPuXtFnrf1EKEV5dyre4J",
  "key8": "2vxDJTxuRxKgsT4kjU2LKpiPozfYZBYPjtNZHBdJwQhdbQQBGuG1zziDYsWQtokgXg6jJE5F29YvCngdZkHN3jak",
  "key9": "3QvHBpE8pmqM8JAVkhqgUKkiFYnf9EydkTKVHzxgsmT8TuduSgVTBbM4YoXNKDYUB1oBBBPyJiV4sfwVnfJr7YBU",
  "key10": "3xf4he7kHHeehxkbqoyvMZ2AQXneMVYi8KurogMYBpm4U4DCGcGY9T7Bk6UJBZD9VaLk1UvEFsqhz9qaYnikPteg",
  "key11": "GmH6oCsFSzB3srV6QMCmfPnyGCTWJxokAHyqu1tseM8b5DBvT1scvE2gq4Y6Y4378Ru9rXrzK9MLc6NoXq9CwSm",
  "key12": "2pxBMZ9eWdHkSwHm4x1xXr4pdzTqKgZ9enU5fZEz5B9AM1Muap3Xxghsmc3rjD6kH4t8ecd8VVwT2rR1zAhn2t4t",
  "key13": "k8Fiq2f78zUC6CiMciM78SovLjhsg9fqgvAH3LfzCyNzk8Kwf1ZuWEhwLLJzXUtV54EoyTPfkuiEh4D8knDxRyR",
  "key14": "5YKJatJ8myGxWGEHzqq9ZAKNnhi3S7cNLwguVgTnXUsue72bG51LyeEPQ7umjUZRFQo2Bp4GHSismSenoQwGUXbs",
  "key15": "2xB7y5Hr3HYYx6SUPaojEhrJiShsFhC5F3s5cxRhrrMEmE2FNAs6YSm61jLjWUUiWzk1WGrLSwUQJCefQq1QwpAt",
  "key16": "imhG9dV5wZjpGRVfvVstLFe9Mj2iU3FqqwGh1ie5bA8V7EK8gmLZbhcU7ZZzLNm48KTd4XquFQj23Jj69GChtJH",
  "key17": "2LQW3Tyyhjtbx8ZNtjqdeBK4RBqAngjAapGeJcL2gxLYNPSYEMrvu8LoBxyjGyg4GSwQQYzRCwbTtJYjxP87XrnN",
  "key18": "2X6tkXaftsMpEF8pprZqrGe946o81b18rdzoWx6nNS1c5REKwFcwS4DZBqwcbEgWYDZWXBhyheBSTTdwpfLAEGbA",
  "key19": "4E6g2o8hkd42BQHhG2Z7hGsjRqNdwnqnX9H7xHaBc6qhZm5Bs2VL6ygwzDzeHugCECKmhvHKnUiy8iUvKwyi19yE",
  "key20": "56miDn2Cn9V3NzKZRTaqtFNRSNzk8a6H9ZWHTHMUCHYcZivAE4fmicAJ4BVYTAVdArX2y5418AK6hN5GE7tmg6QK",
  "key21": "2LN7cPdXAwt8VeyFV359a4trQMQBUaGBw26nob1t4xRhD8PFfVL5YpD44oQ4M6ko4pfqQL1zMvnKMRsZYBCpkN5d",
  "key22": "4BGcSzbxpop7ru7W6zwBx6wt5YtnHqQ21ynr1dL69xESJjtsqnS48EzcAACXoyz7oep8jXH7yYtAUjyHWtTAAbHU",
  "key23": "4z2XsT1SNSzPVTXK7D8e9aa5iUx3NbhwTi3S8rS6sE4s64f7eLCuHkVGAAZPQxZ8ppKnykKSsX9rDa5EW1wMgKGf",
  "key24": "2WNRXsr3YSrztcdMoPDgRy1q7LYTen5NEK1he28hF14Xmtr2cPXCJGqYWMLFAwQmE1NnsVScPo8qwchgVFzoeeiz",
  "key25": "2uoDbnAQnac1YaxzBBba6VjndEiDhjs4J2nys9hkvNqGooXjTuz8jnpArgCvuuirMhganPDfZWDhdMHgKM6MNv4U",
  "key26": "3wCKsP5dRBfykG7F3fH5JokLRghAUGPgEje2U9Xp4zXXoUozr4v5A2PaS8nd2pXhASeincQHjCmFddcam5ZNU9C2",
  "key27": "3GNsLJMqf9za5XqRhXftPfPG4CYRL7jmoEu4KTVEvsewzqbHKP4qBqsctZnxbtgyXNgB4nkmZg28MyB8g9PRbb8p",
  "key28": "5MvuTZQ5juQQXuRjc47CXbXogweCcDVSGJKFuE5GScexNF7ra1dCFZs1Hvq1fSbtxArbHSC9guLjtuBubipgz8p1",
  "key29": "2buvUhDia89StHfajftK9UjKBrhjSTjchuhhjuvNZfuqCauGA8zHBh79tiYbRQTtV9Hii5dKcSnKwXxuwUgbDehL",
  "key30": "3RMW4b7yuzwfS7H2WcfyNtxDcZUuKhL5LHQa6EkEZKjBHrGQs2dzbFvE8Te3JEfvjuG1duAkjYGg8x4jidfsHusr"
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
