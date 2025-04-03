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
    "5SLGQd5LEDyYEuEonxmgML3oQB5wcSpyZHWBwuScu58v9ptsSx2MqycbA6Vm9dHgxdUnJAjr1wHvrkUk6uNXUtvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AFuX536KpPGzZy1KVswYwW1Wctk5q6uLYRR2WTYnBnXwojC3P435r6QNMe5mjP3vMjiAUZFnmkDCA9mHdEVmg8h",
  "key1": "5kci5wkCkKh65UL1upwLTsF9F7kgyNYhuKGWyN7AWCRsrBsRi4GA8cuyAVmyrvQCR3cWmjirsuCCU1E7YHUxykT9",
  "key2": "yoh4xUue85RCBa95sMc7y1SdigCPUF1FfQaPunHaeo1tCntgQPuR1qqBoAT7kSudUjpDgSFky9uzovKQcLXEr4D",
  "key3": "4rw2GmM3z2gXeZcmjESYXcJeRNksMfYYWxx7Zqm8BTETgz3SgKY6p3TMJBqE3HxVeYF6nUZfBNq83sYFEJEJWD5t",
  "key4": "5t2vbYRjBo9sjPUWuUCxXKFn4ZoayEpEr5DvYbFjGzFAFy29zWxkVWgnpECmzJHUz5c8cEiXP8jjWJTNGa1gPjAW",
  "key5": "4YXGoc5QEnNuePGyJMq26UNN96y28SpnoF9ofbHfUhYRnn2pReL916RajTaBK8wDTgjeeW7FY71JoaMPVeTRpjpe",
  "key6": "N3wWuk3yKxZwFmNMQAvekFBG8EA7kVg3Dn33KphiL6Z99Ny6K5ZFJzthEU8UtS3jHk8u2w9m4TjyLpQiyQKmaJK",
  "key7": "4PPb4UrYyHPpcqmzU4dACZ6xqv1bYStvowuLR8kJtVzwZWDibqRpWpMZJgrkSB2ucL789DwPfNWgUhhnh6DeNGjs",
  "key8": "1CSuNxzPxZmaLnzZWWWFF1KTMfoYdakmJLmEU9kauuX9G7QhcVz2wXjYbAsXsjHf7mSaHhz1jPThJ4vstcbFkm9",
  "key9": "oZ8kmvksvLvRjq2fJRjxuShr6Bv1DDdUbnonFAZWvhZAPDCW23XiRodCfKHSiiHuFJbtWToGsj3yMoGhF1zCXvw",
  "key10": "4px37dxk2UAmNquPC5fH7euHUaELurH1CiNTTE5uUySWwMFh8hwPDQMkreHznrvd3VfWw1wXvAFf5y61GSeMFBMA",
  "key11": "2hYWJvQfaahHDE6LgQ8yhroWAE9GXj25YEB2pmPDeS4e4foQoykphfgWtfMyqjwANhz7AaYar5ApDhHGHBFpL3ou",
  "key12": "2PfNmUB6zgAYpUMgeUAmB8kfTszBpBv3TQQbgw62oN7gqwt26bChqcEqy3fn5yoLiLLi1hHAYDkTx9QMbnSSkThT",
  "key13": "WK5dZSYStXD1jgmMGjeEXrDNRv4KwQYaLsRqgRiV6YgVoUva99JgvQChQ4BN5MRtTwN8keuCw6AAsGQK4i4JifP",
  "key14": "fFCFcvN7Bpoz7S1y76jNa9G1NHZtBWepfMPVcGcytcQJLbJmjDdaXfEnNJsUAbQSpsJTUJuiK2urwHNjyYvyM4P",
  "key15": "36TWJj3gYJEXaTTpFvMvo1J2XdFzNu6YpHeydinDLwjS5yW5HcyXr1X6AK4VfZoh4Guxiyo6RSDJYMLaXuERAvTn",
  "key16": "37mitSS389f3rjqLqmBpptC1jRUEqxqfqZJfdYPWjRzJbz2YYUgB9tsg7J9xikFmwxYsR3BHUSVzCJ153vxK4LLH",
  "key17": "3rmYqzYH4KKYPCBWtNG7MGGNtRjiM5Zwy4xgcTkC2XBQwuL9gL82TDKRv1Cgp6buMpUZDAGTW1qjUvTbMo21K5QL",
  "key18": "s5KxhQkiymouiRWkufnkoaVpzNeC5ePKT6sVTKGbvoygRVJKqXre867NqtCo7653tGXbL6VbrrZsG1n7AwyKRHG",
  "key19": "51eLWxrWQtWvEJV9uPXGcrTSNXKccpN5fqwfuekUdQDJYKwiHHK1ePPWbvAurAmRFmN9Tv87gapgJbmS7eHxjD6i",
  "key20": "4WFMk4voLjW9ZxQbn2RsYcapbj4S66MMfP6hxywHP7zQ2eXx6frnCKmusJ5UPFrbF3hRwGcHQgapkmAYwDjY69MM",
  "key21": "4w12Xs6eBdDv17Tn7sYB3V7NtANrzx1cGVYL8QsfCZsLqDoavkgQueUq4CEozA5QVuyQZNMXzmGMw3k4FvsAbyJi",
  "key22": "2dFzAhRUTPYHq32FK7ScsymbZNECDbex7iX2o8B7kHw9XPKmzHRv968Amkde5VmfeYAgMSj6BpgMkZEk46rYdYMj",
  "key23": "g4dHB2r861Jpzo9ERzxwGYSusap1RypEV1kWD5G3bZAv3cXxLuttPDWoJ9P681mbfyD9PTo3cxBzqZcChY718zn",
  "key24": "5YM5GbqFYjAqNu9NDFfZ37SBuiTtcZhxFQ12pGwuk46yG2TyN4JRRJ1LXd8opp5MywJ9Hp9ytVFA3V9Eo7ioQPNP",
  "key25": "CLnnt9AW9x5BgqujUeVFpzoBhsNxDgQcNW1J7pqitVgpynVB37858r4NqmJqNtB8pN1LMb68BPcSUfzw6HC3jwd",
  "key26": "34QC7EV26b3H2FMit1gvyrupwdxNWRPVUw8NaPqrxQYtS6tFaeemTYE8WRNCdSfouf63k9sYcPsWgTYdYSeJjSbC",
  "key27": "67AfMn7di6HLZFkWdGC5wzB5J3L2dqB9ZbLfp4d3RAw5utBgkBT3EFJ3KxRDeMeH2SdKkeEA6rdrdcLJjUYZNC3",
  "key28": "PfceqGFs4TDv42KwimLiX3M1KYG6LqM2WVB32LJ25zpVqVUoqfYiUKwz7AqzijQ8hxkqk9Dv1xxPsmGcKayuUNL",
  "key29": "fpD8JV1D1XSxuNyuh7LX8ogUtgzbp9Cm2gmhsd6MyUcWEPzYpmLuUUwX2WcTBYHoyNWDkh3XPGuhz17r85M3NaM"
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
