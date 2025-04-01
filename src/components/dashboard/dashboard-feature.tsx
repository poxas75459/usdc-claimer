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
    "5joLm9t2yuZDVnovDsou5xUBwcio5BNX7zDTPWp2nwgFJEXjrZETfoC21rioC4DvYv7PKnnuzmzJkTMDt5rK8Kif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AXSPRUrLeKuUiez5ER9atQe4yq9EZEeSnhYL7q8ecqXa5ekE1cn6fwJKEJ3E9wLqkb2i6KUi2xq5GLFsVVrvouQ",
  "key1": "2JLXmRTX5J5w3zwqvNc3PiviiZUfantTGtpQinp1e4jACUY3HFDHvBqWutBjBUa7TCpCNKxNnM1v3af3CfpfUKDK",
  "key2": "21dAzetNhYJDbsBVr7skyG46pRKRA52uxdi12rCkoVMHFMinQ4tBWHWbnQjB8k1VqPHMTXuWBqLTM7Kfj7hBTQn5",
  "key3": "4nVeZG7ykAf9tC68pgHiBTKvMR3AFhoSDLPjf6YTkBx8U117pzdokNGvHreXJis5utoQH3uCnsAdzLK8HvUM2ZA6",
  "key4": "5pmpxPTYAk2SxTgX2DMNEBNopUqzSgZEEsf9R2US8TFuFuoAs5XruKFmqiJPMZ2wcXpjKKxjob9NimDMiUVw2uFY",
  "key5": "2ee9DLrSakEmbdUNtivUtJNcaDHZsJ8KVvFtpSaqP6WheiQBefq2BQz3njRShj6Xj2LG9dEG9ZMbHSiFSWcxoAJa",
  "key6": "5RTzcw1kYedkMXGt1XHHAWgkAqn3imHzF3Fipgj87LXxzCaqTXHgYWjZHRBvCQtMqgMhUiXAcmswhkZEEbTngqGW",
  "key7": "4hXWkTFHmqEF3WiNvZpkg8rxUmkN3M5RzVmo36HoCvmRhFxuv3Du8GiS4cB15uXX3BpCFnABDYS9UU29xkWY9tPM",
  "key8": "4ZAB4KFYdrYZpXjZLPw8mRNnkBvPCqMX9AWg2gmVZsSw4RX4FP7HTj2fqC68wdsuK2BoVPuii4eMFAH5k8XvCkjK",
  "key9": "3jrVYbYGLQwWrda8YK7YdrZo5VzS6HHvKVeLroFwzAUD2b3fPgeA5k7JxjXKjd7kkFdeYnqLvfCfe36HipBPtv22",
  "key10": "4GyULzMZa3njc1HJ6NsUjURU2d92VwBgXC9AVkkVPP1BDH8FuLHNztYdCmX6gBcbxfZzq5FeLTQCasSDMeFpg59C",
  "key11": "G4uLy7ocyyUsX1rgVSrM33J3FNAcHMiGvCBCVgcT6ZmCW9euhzFpUBtaz5q7vd11pe7qzYZGXd9uSYMVPqtKWM4",
  "key12": "vSWbkbiAHbG47ChKfXAHDX8NzP12UiWaypaqQz4DGrk454JKJTJc76EXPdfVNCRM4C2L5ZiKH5cUd1tsjc7q59N",
  "key13": "JfoK1Ef4kn3R1jyxFu2AG7vqGCkMpXLsVzuNb39WwxNDGfFim8UdaceA1iFeUD2W8yC8Kr7Nk73mSRZBKoy5vJR",
  "key14": "4wu1fLwfXaamtVVSyMgjnRG4BHxgFnUGWJhERY4k2VBxt2a56DZQ7DvVSP3QtT9BFuBdRCkcZb4tJoeWabsS5SSm",
  "key15": "dpK9St9QveH6amx9nQKZm7AJr6E6bmEnfsf1WSGvYrQJrKrsf6btpzZbhi5891ySMmeXJgGftkoW5WWHFJL3At7",
  "key16": "5xJux8aqpH5RzXaxnwfdSBURAjFpRQJR8ErhfwnUL686Xx3owh4mrZeLBkj7z9y4W7BV4HiJFf8nJmaiK39dwMn1",
  "key17": "2stShaukzz67JsGwrwuW8MkCBVXkJ6DPkkdBKBkx7HLnG5HRGnFB8ZFmccproz1YyYHXUxbvNGsov7h4zGmfJ6FS",
  "key18": "53BR8XE8fWzPQ7cU7CPaZEUn5SC4umdNt72N9reKCxJczdGDD3eQUqWbcRvFW9TNtdhLNXu3NCAcpAqap4YbSCja",
  "key19": "3pmcuftbukBqnUeU2uY9EJrRJJdoanrNCvpoFrbeBQA2r5ntqmbEjLJwfCZAQLecHGEbgwapZgGoYWaCyKEKcNiT",
  "key20": "4T1BrXNHfkpEQooVkLQbEuTH4xfJi8RXhkpGiR9imLaKp8DkQaspzwCH82igtdg3wHewkTZYwbPT2zEAaHm12brR",
  "key21": "h7FfZGXGYiUAwRSk7AzG1xvkNEZqKDZwiUYdsD4pHod8Xoac22Nkzsbnf6BS5bFVSQdEcQNQdHxF8NjBzqfsgbR",
  "key22": "28AgDRDDsy2SYF41ifhAMbJXfPuNJwjL134xUBuCTN4bK9FYxEA1S74Ueei2tfstBhfmWpM4MtxJxcUk2gTaC7Bw",
  "key23": "5xfZLEZBZksupZKukqmk5oKqqa5aUYBUjTz2rjJmEwzeHa2U6nkejufszsWKxQN6TD9Zqb3ok81Cd8rEAdMG8kcw",
  "key24": "4TujssWawqwrNaYZsEAoB5vyEHLExvdqi53kFo6WQHRSbN59X1mWdPTg1YrRyGTA4PXDscqk37H3Vox3FCD1RSym",
  "key25": "NujAenrJeyzaWY5DYYYn81x9p2HYvvDN9GSm6RAc5QfsMz5AEwXcBJTsH9xt94bFBT8NKsXngpPhJZ7XQ55gYZa",
  "key26": "2dNKjnvnp9xoZjQTpsrwUL2fyna7TbMkvcsXijNbgTSDcsTsNt1D1NkpFmoKrQ5bP9g6c4YWJtwbkdAF1LXELZvK",
  "key27": "3ZNgawvybEpvUnBk4pAdWGQNU6Mz9uLYoKe3PRdePZxWdhcj486nePaWV6DhanwyBXzyHjv2PrduVrJ37mpqmxsp",
  "key28": "2Lf6Md9EpwmsoUNFQRPVgGr1ajb3Dvqh3D88eMegkkeQeeqitGBgzXT41ZahqQgdGiY2pDgCzixeaqgQ57RdCgBy",
  "key29": "4jCddL3gHmcF7HWe4dx6WhTjrno8S3HjL6jnFh3b6WJSDMZ5KHJB3hZkQnxfZ8P3xyohwKNWiwgCVr6t1Q9vWnAH",
  "key30": "3UbnBR9AbN9BSE5JA84nMhk7z71oQJBo9EZcKWPxoow6iiX3rUb3UwQWx3DKWHkWeFz4DTuJQghDyMzbS6jA3emD",
  "key31": "5rVM9n73z2PgqhDATrD2nvKND2ZPmTrE7AJ2zXfxk8M4NvCfY9eWrqK5XrR1WRYRJY7Q48URuLzR4jLeaexQuABo",
  "key32": "4o2zHneJUcje8JhggmBTAK4icMnxL6qs3xeiSeeKRkXyibxoRyT5hLWVEzu5e8Nox6e4D7VHFAMYcrjK7QPNf1sV",
  "key33": "2XTEzXX5rf7nMKGfjajqiHvafQKbb3xTJ7yn8VWMHkR1nAFnLG4FjsAY5v9giK9sCzPnPBGtkJLVA4HwRZz2sdXV",
  "key34": "5NRYKEPzaYtj8d5SvtHGWvbyZ8Z6L94uRMRH6BgPGHwVtPu5yKGvcYNDfcU89zpcZn6nDYvyVTXuugYgrN7qECQU",
  "key35": "3z2UqcawXhsP6aCXkivnJFnyPcBYcRfXEdwaq761D245ZdkZkWZC5KxC7ZUEFWUXLhLD7BrFCA7U899NthEUQNej",
  "key36": "38wUYuNPtgf9WkfMDEJZVeNWcrGZXephNL1owaZj1AfnCVuFccKoBnAxiwRuqg92aPVtV23og7CuPAfcwcaZAi25",
  "key37": "4V9mKmePjFtZJcTuEaTwqV8kbyxPyV7V7Rdt5ZD79MaPrfPZeJi2BbjUfNjwS5jXjyDYMDdc2STuqawFVHYGQHW7",
  "key38": "4m4DDpenc1wiekS4aPysPEK3qgPeRRTmQQJ5sDXYQT5Jcoc4XArzhMzkVaJrFcvud2STqSmoNMHVwQJFo3fH9ZMh",
  "key39": "2rABWLVVtnY4Jqs43ChqZ8E5dTae2PauS5oxX7QZ3EkcEax7ZNE79E43Pb4VwhdKzmM1WTryb5DoBvEJF8fQWUoT",
  "key40": "3GUkEKpyFPaRWrQSqrnYRfgMu29r4RBFNhqB1Xqt1NcZ3ZTp3pDNapgRGgcHJ1noheCN5xFbMHVQQyZmFdJkmK3x",
  "key41": "632VtJwVnL9DoVLkqL9jHcHW1WCnJv1ngnxC33andARYWjJz1Lwkt4E5SZBLBqNNBp1uPi7KoaWxD3yWUJCqnMrD"
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
