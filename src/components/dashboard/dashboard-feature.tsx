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
    "3mou7ZyE4PHojdUaoULpcHcwJB8e7GeHtQ9QLy38BG7rxRxFEQTELDbdvcRWGXKjUTg1RJMgCw4UULHDVKyJZQwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62CJ5FHrgpSsrfK3qExznxXF8HsVw242ycE4MPRzqFfMWxhWE5MTAg93DnnGehJ2RGubtSghuVFeRUpiuCM6Uu3W",
  "key1": "4EY1VtM6mkQrAwYgN6AFaWC3sJsie9AYsGxKmtFpXp9We2oeuXGnRFVyShDMwuQ5sudpr6gTuEbMHG4MuiZRonbF",
  "key2": "4ww3DqvLCMARagCWoabjdcLmDJdNntb8oMVdiUCFuKogTKgB2K2gV1TmmDcqzC1BnbrhopnU5jULqgqncw21GYgX",
  "key3": "5Z3cX5FniV4Kv6HdLugsqcnVRCDYYUqAN8shQS7xrs6Ndg7NL9D1MKXyiYREk7yuDBx67qUmiNrA9nYb5ydDJqmL",
  "key4": "2J8cdP39XeSqFZHVHHxKrAhVgKzVTntFKjmUoTGvz2HhznThQhKy3knRcHjPh21HQyFocnJzUXkbhNz6vDhbwMQ9",
  "key5": "3gRhNdkX4WNAHqX5DUy6dyaJSrSU2g7TNYCUpj7pxVp97EWo1RK9GectNXooxbySYWFFjenJyJFqMdrSME7rZQSC",
  "key6": "Ct4C5y8WvtRsCUePW1vithCTiGuPG4E8phKqbN86hmUes5vZHK6wrAn2QKf1V3WNwX7uG65uqK74dnmks6EBe6G",
  "key7": "2XabvQ9iy86fk6jxLfpgb94Pc1bupnZ9A2ebrPhGtmzuZDywTZzMMspu4u3hEQrUETF8mK54zBegdHapQnmfw8xH",
  "key8": "oeJ5Qvc34efhppM3MyrfFBKGhMEunboWAztyAeNuPApyjc9mcKxsYfryQJxwEXYueiXjmWJKEMy3wmxUxadxMjh",
  "key9": "2Fi7aYeq7Ks7bNVNUQu4WK5KXMu6uz8muA4hc9PBCNcwqj2vNy1CkpVe2yv6ts2BrxNyXJJjFGuqpPTBVpKevua3",
  "key10": "X3QTeTFpeA9A7QB4J9XmewUPdyMWD5x5Q2hGqZCUaRVjRVgoBLqWv2yKP5PdWDoMNzHT78eaD3TPTsuyuFTCQbw",
  "key11": "5zwxxWtjzvpSagsA14aqXRbQwYi8xPTQ2TUFmydCwgZ8RX6bq6ak3fntyDDNPmGSynmhTXAVsMbGPsLwsMpFUidU",
  "key12": "455uHKLWwkpXVfZrmELs3Hc6GuzC2sv6kPbTTVeurMxPdPmC5yhMkFBRxuM2wUB4HmYa3g1g7Ttcknt6GAK7paDP",
  "key13": "5PutJF5xgAgkEqYYwJPUcrm6qSELdBqLhLAebFmDtDN4buBgs8ApGFhNYedEKbqzHjjBuVxqxtGyyAioA7EQ9pFR",
  "key14": "Fbiqsi5fkNEpEVaBT73kFXXWWgjoxAD9axLpW5ybfNWmgXorhVMEd7EFhkzY9TBrdGGLfLYfse1MbxwLfv11ur8",
  "key15": "r4gLTW37byfLFYkE3s3r1FraHQDm1TTKxcetHMyLgVRv3qy5MBfpkjRJndXbVvJXHnFG3dz1M3XX3JYRMHWxZvN",
  "key16": "2Z5bLkc8fmCyis9jKMw42Ub93K4YESSwy15pua9MRbwEEVfaYKZ5XkjjAcCqnTUcH1kQgJuh2ch7RhkhhKF1L3MC",
  "key17": "3nRJmn23sjwXPo6MC6Dy2XoRomx79a9bf8BhgYd4rgSnbHcnwtPszyYgMg28FFP7RdVE3JCJp8HcNqqPFxwnC1Lo",
  "key18": "5ioKXctyxYgrQHwHq2ixspEMTpY2pmg1iSR58qAHHBdUbP8WSymqwTfAEazEiMJ1NcPe5KFY3vDG9R4gFW4N4GAJ",
  "key19": "4xA38mNLMXwreiAQtacMe4PniTxLG67MrueJUFZAA74tqeD2K1Fr2gnj9MpmTejnzJfCYrLbetpzEw9W9K29QFfE",
  "key20": "2n1yCiRmnjiy3uWJu35v5or5ZEyvqf69Q5TTLhsJracrp8wKejeH34GGHVFVnwtLifqM6WY6zPDTZsVxa5DsXw9H",
  "key21": "2KXteThfSTcSsKxsYF1ihM45bLVhrpzDG3kFX7WiUrcQTMETkRh6wSB3VbF2U9YVLoE5vXVaoz2po9aQ4q1zaPRS",
  "key22": "5QbA6JXwMrGZoKKPUCaT5opJ8RqY3Rhpk41MBEZAPfE8qx5EhcWKYc5mgLWFMJ2gEbbtRB7dPj7aCM9Eu83dPfrq",
  "key23": "2auicPRJjzED4MgVF8JCtLUV8RmGNKjMbcRrrsqe2WufCP7kQJDWhWbG4nKCeiNGi1wniK6ZfLf8QMRy7MmXYTqT",
  "key24": "ETYWc27V65sLJYvzSCdBJGnUSo1z57QEYrFeseYsQ4CD2Zi4E7qx24DvHD9u3yN8q8TpZtNyQwLoNps4ew4nZAJ",
  "key25": "63hWW7K9uDvA4shM1Rpn4ZP56cHhtBN2wx9X6NqimAeeMK8oVSM5EUoPbhVfsxFqUS6ujCc5shv3ebLGYFC8S1ZP",
  "key26": "3fHJ6ZRPn4tJoAYQm1edTXMrq58JRPsQyZCCoq4pY1spCLKHfhEoKmR1kHDf1BcRQb996uTWB3C51MUvwVq6X2mp",
  "key27": "4PXc3XKCVRH9vRd2jQSbKwPTnUyNgAHHXVA3fCkFff6mzKm7ToHY4DrbPdbGTz7N5hfFJLbVAPS3EJWAwXg1PLno",
  "key28": "67P9cnJFtgXoEhHznv9HgJdACcqSwapRXru3gWkKEmffTfo9SRKJJ2xW2Q3rMvrjmwaUnQNktSqvRh4gFYfQq8aE",
  "key29": "y4D3s1ba2Aw81cmmjmre64eNjNeHscXCrkBztLCH2J2f8VHhSq2LHKf9Yt3dWo5yeiTE5fuFLjh79o2945ysz1p"
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
