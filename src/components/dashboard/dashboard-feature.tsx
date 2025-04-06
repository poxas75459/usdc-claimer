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
    "29EJk3TUXnDTw8Lz5YTMg8ZmVfaqDHx7QZEAuvGM17asjh6tF6cVH2JRFeq14KB8aNY7FVXXERx8tpkne7JcN73D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTnRGnWTuaxRthx22aXt7tGSoVkTvC18Ba5JWFSfGj6SuKa9kWEvwF3K46UbtGPjYPo36uRyeLysCD5G1rk3xhf",
  "key1": "459GfGXRmNekAixLAtrePz4nEDJyCR4saoZ9YhpQCbv3Y85j3EfR4BkkJTkeVNCpHHX1Xw5tPNPNeqkcDtPE8nim",
  "key2": "4RZpZUrv56zxB7V12pqsNAwuGV2d4pywru4gPpPhj821RDzimGN5XKMmsDUuqYF7BYv7PBnkgDCiWjA7CWPiKKNi",
  "key3": "3WYms31N2ZgvxJRj4qeqJh2CNWg3sUD15Dt45P39T7tfBJ4KJcSj1TeCgxYYDBcffBreyTWgrXq2ig7SwTdACVRQ",
  "key4": "k8MSGEk1BRq6sjR1RNLLVi9AduD8xJhsgNj5Kw8V1KiWVuLZC5G93uECiidkkRMWLb3gCuJxHABKXYznMmJjiXa",
  "key5": "Kgdi6XskdDh9Xm62DLDEn9eKg5r2pgUdm7YbPKn7yY32bx2sxxT4rQp9a3BhE5s7hAQ8RVSWS8Gyfv5F46Ge5gp",
  "key6": "52kujg3BSnp7Kmjm2sfmvj2iAhPYCN6D4MySD1ubjYEpqtzvw7hAomHzNZE42Jx6PzD2tJ4jtviJCFfNv3QZ7M8",
  "key7": "gF1bGhAvCFLgEbxfD2MwGXT3hu5zk9bPoYxQKiHJGqMemEEPmWpmMt5WF9fdLMBnjVC6PwGU4Z3GQmN9M7qstL3",
  "key8": "5brzB4hveStAc9z5VpVsX7Bvgjvk85DskXMYTACXmUjCz6vfqsHYw44cm31CVFVXZJEj7rtbo4nUxNRa24vAmEGy",
  "key9": "4FXHCcJYopdp8UHxmDi9WxX5tFEFhER3qg7D7QUKsRQkB9bvw2HG3NanVThbniu7S2eD7nVmUKuvJZAvAKK9L4gJ",
  "key10": "3z77HVwj8Pvs4VQNTKoj7sXWwpn5ivWzLowNnfxneVw8YZhRwVVBaz1TkjYn3NxRnafp9jaKz5RkUJ7r9KPWQ4zF",
  "key11": "2Wd7HSRxakRH9osiztYnVKjj44uJZSZBUDR5EfU35TLtz9p6u8RP5bw4N6w8iZfUmhRatJNoYdGC6SHytwZhdYjf",
  "key12": "3WReyGCBzpHRcQDWiAMPfLZPoa5b4CbtibvfskKC7bvT82Q6RNCeLEPorNvapDf2d7qgjRwBa964463ZKhQ9qGWY",
  "key13": "4FVeQi4B4gthGA6y3TiNa5GdZmguAyykNQ9XeqCKp8MYPCMaHvRaokbahDREfpteCUwqyd88WggqcKPWh5BXePsD",
  "key14": "JsXB52iJ3XZnL6xFXhKVHHazkAX4rELyYfFhRG58166FuL7TUHep5cK42bAf8N15WqP3Z9ZJrpqU1KT11KGfCKS",
  "key15": "2NDvCmDZo3v1jzLuwwzTjDbDFsiZ1RM3dbxnwDfeJnHWzebk5pbvGHR9dM34DRe4mZvmEQX5e4pwx5bYavW8DUYc",
  "key16": "2b59c3w9eEny7XBWmKvs1LVUReQ3UUR5PCxjVUXTz9HvEyin7k5GVtDgWYWChD2eTY3FCiiJPkeMWDKhpx5vccjU",
  "key17": "571ByERWSnuB6j9AnvsFeJNiLXS3bmogtcvAEgcyn3XibtKryAvL8RAu4PzFND7y4QQcahjSqpaLAYejB92BWSc5",
  "key18": "3e47Ws6dCXWMA5fi6ADF4rUEwMdD1V58QmwY9fbXvT9gpJCEGKoWT9ByypZrjhrpUdLMYYjDMBzub6CjnfVFLuUU",
  "key19": "2nQ1zJXNyRgG1jQqQaqzt3M7G1aMevmg4WD9mK2wL8Z7KusqcQZKNF47pXPKa6qKKR82f7EAZyeBFNd6Q8pvGyBv",
  "key20": "2KQ2WNc8ceKNx8hdRNueCEJn1HNDyzauu9gBXqGBupJUva7RaYQDqi7ezgnFnwLrDDrcmym8ZHGpGnUPsLXzDaSP",
  "key21": "4gisfP8iChYJ4DRmR2JBDuWApyHAJw1hiVa1C6eEAqdAHtvfHRsu8HXn975faydvV6c536n3GwGy3TdUT8LhrMfs",
  "key22": "47YPeEerQUWg6nZErsQRd5FwzMLmLNNWDJDP2p94MURLzTxmgeySRVzfsiZ1yU5AMh1xDWFMBB4xr9bY9T3SPd6F",
  "key23": "2BuRJBUPvtBdaSSVkgvm46Ewq96mit79QNU9Dft6fuas8iX9kyrkVntuXattQqNZB7qfvqHD3UgKtHZsYw2q8aVZ",
  "key24": "3DG2fAyP66rhRMbooMLju5J1ByS4Zv5CAVp9avqPZGGujgW5hiqzXDx88iC2KL6kTtt27UyEoKjTzec9hrudrC22",
  "key25": "3u6fJY1tq5xCE9NKrbUvWDgjBU7EQrod7GUFe352YRkR6XmWoVgs3SCf9J3b8tqcRDR2yPMza5H25Ekf2t6NrvSU",
  "key26": "wLcqMPk4yC7Pjfiz1NYxhhm5ySLJbbC5pbxTkwucgjsXQ1sUEcibZM7X5agpVmAt9LBpzBpZWo3tdhtcq4fA3wN",
  "key27": "53c3quAKLgxWwqzhnMLAYzzt2Y2WJwLDWCnyhsKopHot7xyCjL2icnocvvtSQgkNQDpGwKoTA1o9wFGUNCsi8K64",
  "key28": "TVWhwydtU2x1inNEuZWPMqL6GiZZu5kMPYbECKhPtZ1ieqQitDUF9rbA3GBiXMpo7qDj4ZVFa9X2dYVSrLb7LBF",
  "key29": "36fFFKYx21Rk3o8enm4khCSTxX8DuQ1fihetodAhEFAr7amHiFZDPsPVY7ZNRTuZAs99wjS64qUey8FnvbkeSRHs",
  "key30": "3dWyKhUcHBtVGCYjbUsR5Lnw8XbqcvsmFhNW4Q4Qko7er13fjcqeTZFDsjeonJR8MuCYXutdQVM9Zn39v6mMtW76",
  "key31": "4Q3pnyjViaP2yANwmA1WV9jWSLm6LSgSxPRMH2NfYPiZVkFbnLcHaKGWQF2euZ9Qt56qm5f9tRRwg96CT7Y4xVW2",
  "key32": "34yvB1hwRK7sn4A2UvXLTHFcnxKDhUTDGP59Rw178rJTz73HhR5Gd6U22kj17MWp3hzW9jinNe1fFc1Mi9EvJXUd",
  "key33": "5AyNosCVP2YrLNcsXwD8PMS41ShWELoWrjLeUjkkZLWBfBXFoVCoKkokADmFxwT7NnvPpQpW7Xwikhfe28vXHrSB",
  "key34": "23nj1monHpp5i2QLU2e9EgjXgHKWaQxnnF2UDUVnrEoUs2ugs1Y31yADfxbbcaE5JdrCqCRWUmXfVDB65zPGSgXW"
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
