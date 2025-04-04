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
    "2MkmvGDAoYUnrjjsB75522ymTzCizDARQSN4ZF2bXaXbznmisAQfWR4sYg3sCcetu5Pgpwv7MyU1RnBfhHyMNXNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wj6jj8XTndiZCvhaQf2r76butBztMWGcGqzqNUorpaYY2cgWnpVH7i7eEioqbvUPT5uYKD2moYTkQwbj9KEBUkX",
  "key1": "3DKHczuxrYn1KM52AjZ4nt7V1T5fo8gX2gTG3Trr5EtQc3yQaYtSo7E63Dq6mL57YSzjmEW8eC7xXKbLoAiUGYfu",
  "key2": "2xQqcfJJgUr91k1Fy1RfXqXuC5PmyYNF7HjJH7CidMHU9RdwBEHwWyGNZAVMC676aHzCWyRGLPd5zG6LHGcCrJPW",
  "key3": "2237RKvMwDmhRNnvXETMZKsuT534aeGTkC6DcVGARnSBsDS8HuZ4mQ73TQJh3h7V5xjRwwXgqDmvteFMJQxBQz86",
  "key4": "5jCgK6SvEpjvHzDBKDTkn7JkE5XL7zHCJxTH6nmpctYPcQbuQX65wPyA6vpuqoAyGAMzN1dkt4GThJSbtUcNekBG",
  "key5": "5nE1JivejnqMF226i8AcH8d3iMr75QwRzgw5tRSL3iPnZUhEQeoGCTaqsDKNuqR711M4avjJHMCKBY8dYm214Tai",
  "key6": "5Tqchsaid6RrCeVm8QcPStF5z7QfgZvaLEd5oVVtznZkSvuLp8DU4nKicC8hWaAV7n8NvBevLTxrGTG9kaZKygSK",
  "key7": "2VmiZK63vKNoZv7QbsHkEBNvF4s7VmVjhgAHE9B57ArepjXrUyU1PbUgWbPwiceAN85C52B9ydEdMmJQPV1zk7xt",
  "key8": "27M6Zv8dULDu9iRSKGRoX17JjiSXtLrJ4uTcxd5rjw3DpgLsU33GLFavpXaAs5DYntGDTeVqCPNciqZPUdcTKPmz",
  "key9": "28dmj8npaxLdU7EWXoCvCdgY3bPfr95yDngcUHZBFahNxs5qfgMQFy154SM6Eo56tNwrNo6G2rW2tPCRKHiKEGEL",
  "key10": "3WipEs6BmP8d9AnajtTyJ8u619q1gJcCRdPuqVWsgLri877D8Yh7hFeHWAAC2BZrQm61FTABDFh11YPG6cygTVK7",
  "key11": "2fagXHmvSgdqXUW2aq1NFG7y1TcwX962rNRK5T5uUdHMhoYKmgGxJFg4fCNgqdPFJhW5tDkFuvGTLTyib4iPngLF",
  "key12": "2bJjJQi8yVM7XYRJdkBvaPHXB1wDhXEvPHv2tRUJfEvJD6275X9Wi4iwEVbau9oRMVaNXfGesFNRmP9WccqLpMfy",
  "key13": "4gxCdTYxdo9xPYvwFqskdJFFw17FixyLCXR9AcmBbPw8pM87FpwAbem6pJNLbf15L5z6VNNJ6gbbWVFPC4828ENY",
  "key14": "2wrK6FkCkALaCXipgswPTgn2fHeXv2ZWPGB3ZEtyJstF3yBeZ1gcf6ch87ivUoStVcemXFnv3KnTEx6dCdbo1jVm",
  "key15": "5rHiAV7fQKGpSv4Ds1JMEWEf6X7LuCKBPhkR3cQQnSXVCFoUNSAR5bib6G14M1KwbvjsdXDAhYpGw5y2aGgeYGVg",
  "key16": "3GEuU7PXBZenmFji6tAG2DMjxnphNWmuqTMcCUwhpJJCYSeAUmqdZ6zX8RzAsHbaYZsiKTPK5iDRm7EBaDgYCFHw",
  "key17": "FXagj1WcG1KkaT3x4xwzcQW43VFwjhZtKMDaPkh1Xhw6jcWAYZTDAvgdzWrVWGog4YgBZFof1UD5NR2TiZDmChj",
  "key18": "3aeTXBfwWhMYjQnKJsdvH4CxxtSvJyz7qso2gQb92txu1MmNGi9PDFJ8yzzXR6Ume7DpiEWvgniZZDQCrWPumgXa",
  "key19": "xf72BdygoUUQh8VtbeMXm5VRWatxk1hXuH1cyG6AXFyPiqXXiGhudVhHwjByceSYBN1Z9kMDmUsobHX2K6wzLRu",
  "key20": "4yHju69W2dXS4c2hh1BGWJJtNc7MoNLhkGste99aBsixBBU7r9EKVvouc5TkZaPSkQXU7hWyXM2AzbELgfVS6k6X",
  "key21": "2VTu6irDrpGVHjeZQ3UwwwwimtPaQuf6febV5kNwjKs4vhUkqnTK1X37fPZHvy9KLrAYRUuk5q4uiaFaUhRtE4ar",
  "key22": "41AQYFcsXBJXnTD3KxBaa1XLvwkizXNRHYzsyTq8xY4StsUAzngpv3TA4gnQK7rmD4gWBf6noufN7yaWManXJdVN",
  "key23": "3CZQTu4u9ViKRKukwQbjgzkYqb4uhjvtrqMdCL6kc64N9NYa3xyUp989Pdv5UsLwnam4Lbs3QYwkgsW6CXvXUDEm",
  "key24": "4Yd6UxB85w3aqaKWFVx4uAhSRa6yaYXadQkanFwwu3PqXYqPcXo853AFBEJfvdVRoJtRnqWKGnBxQV22aATkv8Bc",
  "key25": "4nfq1pej8kwBi2zuu28YcGQ9oa5ctLKuRmwmBpP18Mh5zrczMZf51ePHRuyNVuxnpWxPfTivQZjR5r6DFiYTGJ56",
  "key26": "4KVW2njcp9yndWEdddY68Er58YUR277UHBD5Tg4eY1wpvLQK7xBF8Gfr3B6vVv6Mjm8AoxJjDR5ukGtSVvnyGkBG",
  "key27": "2cR8yQwexNakKfWGXBTRXG3Be23Jjzxph7vYzE2u48qbHAJD95w9bhbXDau26p2mzzcJSwUisweGTKj9tseMYEFA"
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
