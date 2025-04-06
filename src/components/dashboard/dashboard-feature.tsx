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
    "VJ7xWMeTnwgXn4ZJgZBHgnPJGQvfEnD3S48MyRo1mPRqHn1BgU3cKp5gTUrmhzmq3mZm7Zc55m7a8asJGoRyZbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ipJabhCGYCKWCToJz2WDo7YEwj1XXajaHcNLWyTgKmWe1T8DghsZ81scq8Y1rLZ1BSeFsh974NGsGt7Na6mVugf",
  "key1": "5TpcK7tfQMnU21CZcG4yrhYLPCRNPAs5dwkmMkBPydyLMoiVyi9JLKp1p29v5yMNWQTnt7aoWR7CdwF3qAd5RS1F",
  "key2": "2fUeyiSPUPaFRUDXGfkXJYfnZCWFEFvKta5iUtDb6Wn3xZE1ydTHpmXMRAbDKWMGTrfGGm3oRquJRf3LptiZRPTE",
  "key3": "XSbZVUYUrf89PNSbG2Z8Ur48Fu68F4WHpQBS4iX2N84ctgN87TPEW6g58fdBzDHanR4jFWA7Kv99CdKHPVDKfLE",
  "key4": "2Upj5cFZc5MrWfA7RdWP3bZZwzBpm2yga1MJNQabVnCDraPgrAYyQ6fwQtjQ3hALEJZTqTLYt29Fv7r7AQEgoZ3i",
  "key5": "5umDjouQVheR4tW7MSvwfB8y84ktGwKeLDNspSFZyJyoyHMzG7ZR8D23T8pc7JNeMjED3vNhnRShQe6rG5DbCuXw",
  "key6": "ebSqQQUeDC8Waxj5qPLJ71PihpGzh3Pb9kbcJMRuY2LECCnYAvEWtaC94fz3NK1ugmf2wjUFhwm8EAcBQe3cWRo",
  "key7": "2rhRB5fvmFJh6SQSMc5FdpTvvtcCMUomDADEq5YUGZCKXvo68cGjeen1pxidC6KbEiLe9gLCREbVnNvDKiCSUHhS",
  "key8": "zPGyvS86creUTG5YHCcnKEDXfLLmAV6tmrgJR58q3cJKSKfNXiSXj8bfqA2xkQXvqQkeBEqJrWBYu4jx1ZUxEo3",
  "key9": "3JpPMrmRWE1mrcUVvmEf8gR4uXMVxYRhnitqeJZiQJfVhi8GuHAycNPWjxt2jm9uuLbuTgGv5xQdgSXqJ6NLZ5Lg",
  "key10": "53fnsouoZvKNphn98Jwx4uoS9Jih6CDzcsp3gPEFQWn2JjbcHXLYU7nmMmW4Cmj6RCamUPLVoaoz7jU9KswhqRVy",
  "key11": "24uqm14iYPbY8rxsBt5GaWNYRgv6apsNKeHkA8A4XiuGnjNFm8YmRjuJRUxvkTUrcQ41voeUEo9H1HoQSaFf7Tbw",
  "key12": "2qz6kgHRJ3PSF79sUy2dztqV73QV5K3JeoTzaSW4cWV9fdagjouYWpJ1ACukGcnAbnDzAUYvRKDiBpHv7LHRFhnJ",
  "key13": "2UUZDc26RGRmPbUxhzyW8SiosAvARkyRSqcrPdV4Pp4RL3sWQyFRQnfpZYmSv1CtDZbutgRduRMmMyRyVyrj2GqZ",
  "key14": "yGyxGMtsYeRdiQqTJKs3b2AU5rFVc5N6EbPVtWhXs1hEQkwnB7nD2erQskN89PmJFb9mBhuA5f3SBqdJkRrYaKV",
  "key15": "3pbPav52ofXruCx7SQTJzDkToeK7ETwVcaFkmE7hZq3KN7txmP7JiaNa1vftt6qhFaaqwFpR5mdg1AK2AqkHKR9N",
  "key16": "36KiSpAhvQURGBHywvdztxKoCRJ2N5brCVhxRoyj3izhxwFtrJdrifGLroUsnffBenDCi5iVveeF5MMXhgFVzK9F",
  "key17": "47akh4nEuB3V4PXU2Wdx6GfBKvy4z4hU6aJELJ3cA3yhD1C55PSE6vfCR9LxERP2S35PbAJQG5Vo2SCjwzCEEM7z",
  "key18": "272PW1Wm82uGKRZUVx4CmoHeo2HH9sKRpdDVnbX5qGeQU6GzrraxdccH9Vn1ThMnjQ2CWZTw3soXtGV9uJXsAVqt",
  "key19": "5Ceut4BUreW7CZWKY9a8J1dkvkq5omLvM2T5jH84iV3DDWDRv68uLjCqZMVfL7vbnkoS5g8BT96ihC2PZcJNDQhn",
  "key20": "E8SdtUduB1bjco1TbZG1XQDDV4jEvjPrhBPZZnqThPJ5AYeR7sxYw7eDn1Q9C4MECwdqi56kWaVcect8jE55CeW",
  "key21": "1RC5Rm6m98fQjohDjCDQP7pHBxYYJcc1BSbfXySFTwRGNj36Mbb2YxQyugzPxUpcaPV5EupUyxpiUu5qvFATot7",
  "key22": "pgr6nuRyYTKDVH2a14k1E8UDKZfF2ok84r73VTa4oMiso1BybJfdgw8W3dsTgAshZNwCJdGXEBNfW7BUAqjyfpz",
  "key23": "52P9d9GzGS6RTStWCALZyzqvuMR6cYyS3FKycgdgBtGnFtg7nRWvK9dW1dqoUBjBYwBC4r3MhWsb6xu2KjuAhrCP",
  "key24": "2e5VMftpy9bahQzwW2z81Axvef1wjXXUgT7LTtDEKUWXxvzjUFJdVtKiF3y1VL4vUMH9zgKV6odu5LVCVseWrm7H",
  "key25": "63VV5mvsDPdwgqDzGtdNDJMWK4zPVveLBV6MvMBvYMxFVGK7Bq3NpTDP5fkLbSw1i312vNd1Kn5KArcG2zNUrnim",
  "key26": "48qDsv9FLP2LRrTH8J9ZZL6xvLw6x2ckKkACZjUrfVu6w1QG1SQ8C3e4Ur1LJEKC8RNyH8ztKdqWMMFAip9b3qnA",
  "key27": "5vVNoRbVfmfeqrMbi4tjGkUqjMsWJYYrvwt7UdqtGRWMLJ1SpF3z7cVkKF9zQoKC4SzB9tjaPus4zwBFpEHo77mU",
  "key28": "4PT8ikL7dHAHnx87P8AmDSWpdt5j9zqbhWwnXL8KEHkNedQkaSG8UvA7zcGdVCkZohv4J1VA3iAftGvBR9XrTz2R",
  "key29": "67a6qQjfzpUTtmoBQCtE5fP4qoSYCrxMRFQDP5ex6w3XYhU4VrzvyHy5Kz5srAHQAeAUpyBcJ9qZZhdMvv3jic4N",
  "key30": "25z8NnXgTuU4QH2BeiHVexDBF3D6JnPwxBwPCwAdGNaq7T6VjTVKkBXqJ6QcFQrfj9eY8S8n6HpWQt4jSZA7hv8P",
  "key31": "3H9bx8wdPaCCJ3yHQeHNeHSTJtYZaGfX2dw1k7Emwo2H38VzxekZ7zUHmn1Hf4KE7EhaWVbq35p8Sg8ZWHNqUuTu",
  "key32": "5qNN2Lr1RANG3B7X78677jLm8GCCPEnUqHq2B3UMoQjkiWhhpqbFazER7RkswuBe8nMArE2FuXNCj8eihky1kCxs",
  "key33": "WXquC8NC5XpHtJUmhMTwxB83ExyUi9xX3e3yQdhQUcM5GwR9QjtNoun2yFLeGqx8iCRxmNHFkQUGb2AvVrQJCjF",
  "key34": "NhTQjc9JddH7fKzqD9h9LXFwpEBF9NHLYjne3apHg65qZyaDvsPK7inp4qi8aNPGTDagFz19p2V6972A54W1ypG",
  "key35": "4hJ2Kh3f1XPHaaDcQh4FEHTQzKUYewkv9Et7KXc4EaZWn73m9JyAVcX7tNCy6FSy5WPj5TUz3xv1Rnsg964qCrhf",
  "key36": "t9XKc7gmijZcjaK6WP3KSfyRKZjRph8YWNkDiLvrF4yL7atBLZDwgpWKjqoaJW1xZV55x3facjukcSe5bogDRry"
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
