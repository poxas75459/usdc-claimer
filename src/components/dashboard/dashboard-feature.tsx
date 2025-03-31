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
    "5qhA2Ya3qafgfvx1hG3e74oXdJgXrKmfdnWFX9rdGu8au28cDCMXh34UxXqkZmwwxRL2WEiYL4v3CZQQFVGVfz8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y769t4LQyXYaRrnEXcQCduyfvcbZPnq8aT3dfu6J6ANXtrKzjKcowp9hrEogTy6e4QDDfK26hzSKXw1Ywbk858B",
  "key1": "2v2cghXv6MvHkjzdz6FRQcwXQs6wSh19ZTAzN1DvuDJQwGoDrv2hYNZKDo5pgebkTy1aPDq1cZXah6NkSKMreLKH",
  "key2": "3A5fGJPx3AFaCSb1A4Ta9cGCqLBtQ7vhCS7P4S3XAoHhbFazcireY5FpCNbWMx3SFnfox6x2xRmu9JhiUL9UdFT6",
  "key3": "2dYNFHY9sWWB3T7T75M6jgRTHdkisNqDPWiSR5rF7PLFVc66XxuR3EbRe11DvqL1eW76ZmsFKgjh4Ct3rWgUnnos",
  "key4": "5BBdZpEjkKQvQ5Lbn67LWNHMDH4Rn5bDrKqYP2CSauSJd9o62Ki5BXujsY3uYjshSeb3DheF1WToCoFzgEEoaJi4",
  "key5": "3L68V4CbeqEjY4yoY9eJ6j7ECQDWewf7FbPpgPoJfFaXEGkDNwohbuTVBthz4rgWFGoL7B8SELwrhwP38LeEw4X5",
  "key6": "rdhevk7Uja2WRpEpm88YnNqHLiFaNRB6GoGDDbGpuYvrzW5oN7b88Sybusy4BvDU5q4yhNsXUzrm2To8F6ut4VJ",
  "key7": "3zM7EUTDwSkw3fx7hL9gjvsywQUEMymbnAubH7vcWBU5qNgXhoc9WyAA2XzQmfFmbvBxeh5pEGfdPz95RzknMfEP",
  "key8": "3yNF6t97Fw4JRjae7dSAh2D7a77bNqeLmuDdLXGqFKWPMZRASCZxVEHQ2x8SpDwK5xxiqbdWSf4VkKZLaSf2REtT",
  "key9": "3BMXXRjf7DqyQvrJjCq6AtwjZj6pFmokCB9LXpbjcgDWrXiXPcxogeRZvJefefYEqVpugBBFWXWzWbm1QmLcCJ6J",
  "key10": "5VUBzKAMcCWi6BhTAXaec32dCYnrcR5uCqHdd1ps7JU2x7YDaV5kGMhRbUDEL5QtadNreAtPjwkcPi4dHXbfYSvp",
  "key11": "481FHi1K34turE68CSmj4Ze1c8hi1Qj3CYwBU1hcUw3vRim64uPDWsJLMs1ibVRQEWjydXdSnap5fxss7wAg9f3",
  "key12": "3XbEv7wdRbuvcJFg4RXUiJyHGXs9PbXWf9NgPnHYwBFzpWJCxynE9ifwUP5wFpp3R3wJHEoBWtPiD2GR1nKZKQsp",
  "key13": "4GWseQHPBenLms7FkH7YKZEW6iZgAyWFvKQJCVH8itPc5LUMRW3eKotoJgQJkwzetjoz5H5H94uN51fX6q1EdkPG",
  "key14": "2sjawPizFYMX9zKFQv6az44yzcSgd1BTUoRWmkdRmQbJ23sCyNzqWaF6w3UTbNTZaTjJxPBHPQFHA8BYS81U3tuK",
  "key15": "3HwBcPn8NED7eQUWKdiJH3LVP6MhgRoFzwuAeLpwCawccEzWXApMAthSXmyCYRQqZBmcWY4osz2q8jq2RuEWFxz9",
  "key16": "5XmxWQgL7bryuiMwK4KRyTWYRpdbRYLKYGdaeiLcAuFVwP3oGiAYb9VY567Luwts4Ciz5aWsGcN6PsPFJKMpYkDU",
  "key17": "5BFDRBMUne6Nh7PSXGY34SP2jNeodjg441xTh9bKTKSxEj5fCu2FMwvo6tf7ig1DiwpLiTEdUMBF1mvXq8KaWu46",
  "key18": "2sQiEdRsPUjZziAu6q9XvmZaPAxEu1VCznxTkPPkpmLovNVYw2tXm5rjG1wjdeuQwMwmQ95vYn15XfcDg95P7bu9",
  "key19": "5KDVshd9Q1svm5cWj4REAHmS2dbDN1FecFHvv78o7aYCQ7bg2WGkNH58ALDHnMqUfWH96ezqqAK2TCzEf4kw5SB",
  "key20": "239gcCaaXvrxkDP6L7q8buctJwWoAWtcgDb8MXVnncDyX8yK6JyuRxynHptu3jbYF8jKWJDFSshGR26VJmGYciRi",
  "key21": "4ahmGDtLEYkJe7BCimVw6z3mGAWbLzqgPCRY1UEW2SCqkB4ihwL8aeEbAJBTztKYdt3nnqo3vZY5hpFhnux2FRZT",
  "key22": "3ubRm1itbCarWnNJ7fPQ4nLUcVz13XebHsJtLVSbGAtYFdK3Xh7rRAN2dZGrt78HcB6ZRXDUhwQf2QEW9Fh4GX8V",
  "key23": "2FgWeHjXMeAXsifMwtPaJ9MwMPCuvodZ9s7AjVdmRDcod6rQ8rs5ks6BqEAqcqSE8WVpNNzX9Pqz8STTdoZ5FBoa",
  "key24": "3myhpKxkrjRGXTnCeE9YbnA4hLczMcAGgZ7YJMW7SjKpy73L6ocPSFW4LgiTokfs9g5ywFp63fSXBvUvh8wpdFKD",
  "key25": "2k5fx52szBtzxXzp2ot7tbZXgNMVidvL893GgBx5Ni3bTBNYcMEocS5K84YJYJPrbKtpt81kjWDdqJC9TgVUf21h",
  "key26": "gaAZrA1jg1H4DHg6NT8nfNb29vjByfhtEFHgPdzCJKzaCBoqSorwpj2rPPgqQpQBXThY75bVFU3f8xhQBWbMBbc",
  "key27": "VBTCMMTQKq3KdXewohqyj1wknoHsdToe49UvDdwrR3aW8JHs9wDUNLT5nZfDmadgmQPpus7t7tcZPNxurugcFdn",
  "key28": "61sMjqdfWD3SMsJbNXKEh6fHU9YUurr529VD5qrkCV56XFomaMdMWUeRq76mYgg7rNopvyWmeT5LGjUFyQQQxFLL",
  "key29": "i7nURMTLTG5L8hH4aB1N78vBEyQQDnS8HvMZg9iEpgWmK7UR2w6es23Cp1y31iCviRwwiu3ptnAs4H5snyqgzuA",
  "key30": "YTCXutUutJjSvR19qh2T2XLwv5FhJUrAcW4MNHQBf3WYF3seCUnFNQhABMWSsouikLrmXZ3rHv3ndHe8TJ6nWZD",
  "key31": "676LJpzCaexkyDHkZF2annvGkvSBHRWrRFtHk3QGyYN7b4T5RcFQxYhvNypxQMr412g3PAZtyvTq5uLMnTNdqVhJ",
  "key32": "5PQhzuwLHi4VmHPiyEhH4pxCXADWkVK2DCmhGYD15h5ZVoa9XvoavaFzBnXueSxVV5nDyrKQe4KLKg2Tv5dR5uEA",
  "key33": "5CCxgft2YkMLB18BLxuNC68WnUAWd8TKNmT8Sg3euuTjxKt1Mjs5xPEwKWvoi6144J5jSBZHhZNB26EGh2D475YS"
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
