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
    "2LvJx9BqAYSsymZrhfnJVmXhSvziw7JSvHnntLdLEh9zgNwH5wDfBD8reqsJwqYdy2pGLQfc43qV4EPhbGA4N17c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43KAFMqg2ZnFMKiz6Ba4cZdYVbL1ATj4neZJU6TKQKnd8zhovzpUqs8ZQ8SuwgPuZwCQxEtVSdHKq5FpidN6rcA",
  "key1": "3q8jacbi7BAHv6XMEAoV6J5rx5eXfzjDMzAPDAdeVPpD2Y1BWDHrHc3XwFwz3VM5BmsmL1Y4rVikuX315sRg4hkg",
  "key2": "4mRt4t9C51KuU2qoGxCqySaNECZMhU1Fjx2rH5Tu7yvepYFeXFDifeLBZqLZSjUDdGBt9hUktrSVtVv25yJ4dygb",
  "key3": "3szjavEgQkdorc5s485PKDvi5kPzJWDpabLTJJF1ZhPuQgVuUiH2nidwG6QjJkByV5zcATFv5ojdfZCkr9bkS1YS",
  "key4": "3wrAK4UDw9xx2Q7Rgo2LGMRGwmjPwMFch624kgpPBzuS3kSaNFwz3tbBeMWPSSKa66vdHG5k4epXrKAP1XGmKSAr",
  "key5": "2WXaXegTN3NJ8ZvgQc7bCW3RJrrekQijec7oWQVzk5oRXMdhTBv64xN56AWtJjhtyTgRNWCKYK29Kmv1sPiBz61L",
  "key6": "dFRWZWmhFUgjYoGAQ7T1SJvcvRJasy9ytvUfokrP8DHJoyYkX1BmegcT1EXomzKqwNiB2f5puRpU2qmtKey8PjQ",
  "key7": "2ww7ikT142TpGXQyxBYc4TkWwZEKvGTxLvdvMf4QrLc4ZrPpPsDVu2SifQFGBcxpuPTuKderNg6cFoRPYuU2bUcU",
  "key8": "2w3KZKbAvLU9tU6qBxmkU7x2mgYKVZhzUotH3yHxQ1K2RzF7PU4m3541SsmoZau1BJTzqXdJvHCPSs5iWUxZCxxE",
  "key9": "2gVbvYTcReS6qSLCKCZmwm5XXmEyxTSopLdYGPWL7akh83sTK6s8iSqpBdEbVvtjhgtA5p2UrNFFjw1LPETfVDHK",
  "key10": "4BnUkj2yp2epaNC3U3GpU3UkCQZcbmADNdjWGBF1hHSBS1EARt8dKy3hHAQYBFWJZp4BmMGWecMCeDJcHy4K7qR4",
  "key11": "PAu6W1jrK6vdQU13tax9su39QB5oLZQLt9kFdop7Fg87ajpa3m1jVK8dNb6uAU6ajhtPUAw1H6qrZsoZs7zgJQy",
  "key12": "3EZp2ptHLrqK9mPzYbskRKDFgjEys7NJKjdb47EKiGAuns9KJjK8VifMj3GymfUMRaZki4chpa4wcQyZyvvPrJuo",
  "key13": "hzf2gq8Z75z9VAex8Lg7fvLF6cY1Ds2U9PmDuVZjmiVU2pVWGx64T2wP35E8EdgHZWPYS29XW6LeGyXCEpFHMPC",
  "key14": "2QGY4E6REMnV9EjoMm3P5YVkBccPSFxMxQp5Vj8gvnMNVCsbbhfvBdAcoguffLGmqTqQRfYT6K6tDNM48RgDzY73",
  "key15": "4aB1Hr7jz66f4fCmPGKnC4BuXnnBFCPtjWdwLzgwphamp1ZPxLqpDnmr9RjwDz2AyQB7RwcedVwcnoVqN7Qx4pGk",
  "key16": "3959hLBs8ze5Xk7FVyUtfMCCPcgpAbpgbDaVay5RUAEXe8HECt2a5hcMSZJJc7RX8uYyHv5tq3AXZ1Bx4TVRjxyM",
  "key17": "3HJjEqzJ79AvKZSfZy5wzAjE43Yg1reSX9QHLtYEjNURWozQXM7esnffDR5oDRdJhGki4buUW9RDsoutNMo3wuNZ",
  "key18": "5GGwjwE8px2BVFhFY3nRq1xqsJpGwexHvZHvkmZgtXQxhTyWmzThwhmu8HJczXbSkM59S5F59qQcK9NgTezmMn3n",
  "key19": "3r6LqRBSRw3NLMo9wX9iEFHNeEV7453sPk9RB7JQ3GGw1FnBrMsWWdDQViLMpRsoSh3SohzrACKCzFfLwGr4sHMr",
  "key20": "3QFaVYx4VQbnY7tnPTLKJRXnmWBsRrwzwxH2w8CnCR9rPaC8S8hWQZGvR3dT7CXZv5M8Utjwugjy1vbeXpX58jWD",
  "key21": "LdMuFWhb1H9vNsBh6XNXyy3gyMfQWmUkYxGtd1bswefH1n1YQXXcQ5BbJjj2Da2uqfz9tcadmad8V9NM2xFyTC7",
  "key22": "3p5JfL1T3WgihkLB47Q4DiuDC3M8gHtjH1gpr75XkX5nSTHcHzhmYReQXtPwqDMubp1d9TU5AATnrA9vhDVveWeS",
  "key23": "3yLJNS1LpBmoFM3dQmyiWxFDNrkw8NMic9hENEuKWHZKciYzeDVnf4kdFZbymbxd1BUsQ2GGVdzyzk2bRoT3true",
  "key24": "22BMVMdiCfsdb36Jzm6uCcUQmQDqh8kdoLxuXB1bYMS7BFNdoabNyvcPrHmEb3mtJGxye6pczFKoKXC28AwTit4d",
  "key25": "sAgLepFLKV18drGmnhwxLPhWAVYXn5n3hWQepSdFgdBfwyWUGYRK1E4HwWcCP9X7xTgX5sAn34UkZjJDhd9TT83",
  "key26": "2rF6QZ7Khc8Rf78Vh3P1dKo26FPMfF7V4kZ1jDPVPtFXm9WE2WTatQbU3js6GsmosaUG3vtRURD11MvBn3QuzekP",
  "key27": "YSXViCcyycjDqd2nsfJ7ut9awvRaeAwRFRCZpFEwf6oLm2ULQVinWXQ1bWRK3oFJiTR3G2ztYMNv7LAP8z7Ggtw",
  "key28": "mEw8bmDQWxH8A7HmDNq66tKxp1Uo1UwCNGxNRSi8kemtdaz3qbPB5ntMXKLRkHk6pJyXvqoVUpAbT5ts3j2fezQ",
  "key29": "3qrc4vY9r87Kaqshfiu2Xy7SqxrJ3RRpd2rhiUkgWE47JAj6Hnc5mb4ftZtpXRWqcz4NzVF2nwg6ZRuECXHwTrwz",
  "key30": "48WEn3eTJq9pDQkxPyMQ49zqXGB4hxwoX5BrbSqLxpp5kYJK4bpGziURLXZAci78Dt9NNCmq1Xj14EP95QMjLWRG",
  "key31": "5wuNLoGYpFWvKg1258E7AnA2hHcMAAcZ2S3uqiYdLWAbbe8fvHgpf28dE3NVfELYi18K5QYnsZSjDAe65H9EeBQ6",
  "key32": "5Ub6zUXvnixEoYmhFVPre19B3nNrb4EBRhtF4jfximmfnJTYbcdgbVrK2JC9SXgZRVtcFaCoPXfUR543ZqoXbiew",
  "key33": "UHGqpCoajxaEUemDpkitHKgUqyFZ7sxoounFMSFbWvLfVN51z4wMVzQteN1gVXCaUZSS8qfri8Y7B7FPx5MrxeT",
  "key34": "pUku6JKighjLgeNBvsioT1GVkDS9yGjy3Y9YWTYuCvRRsFJQ7t9isoLhTEWSAQbus6Avz33afCAfVaJniG6CntP",
  "key35": "4R2CUqkyV2DdCnJ5H791htVm1NTd2NVhGyR1oKF61VSZREKBs2RBCkqs8gL3jtb8jCMeyHvMf9KyCgVNRvHEYFei",
  "key36": "4cxGkcE1npKgGa33uKonQJxjKzY5UBiy2sHfP1SXNytrT6W9dmMNKBGEQuNQ4wXgMvLEK7kbcB96DyMNHStQRmf3",
  "key37": "5ZsQwGZWRPyfqQ9okphZnRqbVheWfEsuirATB2eTpw6gcKJCyPBfQsdat9KuVF2EyXYnFkneuTcXzW5j6RALiYjQ",
  "key38": "ehXEYVzipdtLfik5FHqMKK5ffkCw3waP1PvfXsxV9d5LJ2KeDn5zLUBbVSZuqtMia6wtFUzbaQ7x3Rk8PGjEVWw",
  "key39": "5j3BxASY66Gru5jkpAtb3KidvEuB7GWeg61WbzDpEfA2s4zcTuVH4FHr4w93P3LAra8f5rTqZK89ABkZgbcSozXU",
  "key40": "2fBmYAqKJ1egN9FY9mVSQT2QDierqVZnxmZRxeoNcVf3SjAfNJGcNA1DEPeiQbckiXhknRCC9JF8T5vhiGY4obpz",
  "key41": "37w815Z1XzMstEbY358pE7qB1NJr8bLXPuTcrPrj8DZkfWzGxBx1jJXgTmLvpPPbaAZooXY9y9MoDXrj4FQQrDc4"
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
