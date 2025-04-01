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
    "4AtDnC75kGEb81eHU1eg5QaabV216q4LJSauW19MLau1Py8i1unZhByhwTUhS2oaQ7ZFhqjDivvKiWGf4S5EeuzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MgPFWsBsAtJ21cnGPt7qfGDbFe32vJNqrGDgx1sfWY4NLoVC34MQ36mocRmViFNJtUKEb7qaLNHDaeWu1opHVCo",
  "key1": "4wxKWdkM7cMePiQZPmm6LjFg2T4quWYcVvvPW3nu8y4rTEYLApa8VdmVgoaC7Y1HcgMaKbmm1zAd9rpnVKYixFVk",
  "key2": "5SdBTGaJe93FLsU4u5m2LSjjFDfbK5gRXTvDnDGZCgzs29r9Sa2WjxpwEP47Q2AMyh4jKBXBwwygRGfMNjsZ8vUQ",
  "key3": "3wBgZbrmDR9Twnw1GLKRh6inBZmQ1AMpVVgiuMJpc2pCZz6Fs3ZYwcfGFTauV5a4EGMh3RXqmabemb9xo2WG1sc4",
  "key4": "4JbjEWR6R9cqL98PzNkAifcXY4TUuULq8R4vwKjkAMqJL6qnaHK8Bja2er9oTdTPG3gjc6vauHEyNBjY9XAxTdZF",
  "key5": "4bCDzBzVkc8KYab5oLaebeqf58eBeUqAdbZRrfYVmdSd4yVGszHGFVTY7sCViEuR66NWhXi8qKx2tkMKHQgjVkiC",
  "key6": "3tRaJpCBDkiS3Hc7BXS5cXSL3pcVvECfrdubVFv3mbitUztwAg9822CX8H8uaju7psBNaF1wZLHq8qrFPvP8NTfB",
  "key7": "4nVkj5dncMM8Adk8YeFd9rQfvYCheyU7DVGmABXrGkJNRcxmVZLvybFkwmK1DhH6mKdFXVjEBhd1CXNTH8oWxn9W",
  "key8": "gzPtpctVEWr3rnAXjspKRyc31zhmhiu1DNFBXuNuxm8W1LTeLDgyBt8xU6FHGdXKP8YsiNutLB1BZcK7QD1N8rR",
  "key9": "7RXMuXH4obUNX4Lzemo2vkNiGgCeYXoCJr2GexYUBfcffW1ENM8mfd9rwuGHeJL1CmWQjcPubfPYuWehfAhXyAR",
  "key10": "4gLh57FjXfVY4WxnKjLKJF3sYCPBTskzVzejmSYG9MEU7e7vHeffcDnS8XQzBQCqyCPM9UgMkvsvMv1LP371R9R5",
  "key11": "47T5DcYLpkvKAQio2q8qQKv1NjdB8RcLqAFhdWX6WiPNPTDpKFDsP64PW6TC2yH9qtT6iXK4NTKAcZiVvvuMLeFw",
  "key12": "DV6r8X1XCVqRRfZz5aVo1FUyxxx4YRno81fvTnyfHnXLJ9aPz6xgQZi8dzxtzrLP9vYfsua2RjW1q7bqbEcV3eL",
  "key13": "2vF7BFshACJXVRfYwegtuLnXqoZCdVCeaidZD8CL1KnQrsA7WTMT5sXUCo8qKzmutC6z44R8fCLWN3Z1WbNbz3aA",
  "key14": "3ykbbGNTfpf17vj5jwrC1c7GfTRuNGGh7iZVZoweaAV2tuAvyZNpEXQ61sSYJu8qtcKco6cfWWTCw6t8X1UFKdKv",
  "key15": "5BLuivFQs6y1tXoB5Lw35LTxwhPqSE6QEUKtwGCSkppkLzrxUDM1pKPf8F9oB1e4N1MwfYkxMgnSXScs8qg4p5fD",
  "key16": "5zjK19HHzmiRsJHk3L7WNYE6udVoxUYNwC8j2e8SWdVtGc62Kot2k3YB8TsrPefEsmq1iWQAkqM4t36d2EyqXGTN",
  "key17": "4QFCvBGNajNvcnXGiUbP4yW6SwahztucfEqoBkrhswByr6UPudMKZcvm4gFJZo2D45wxMrDmGmoK5UdQiqzYpCdp",
  "key18": "5XxGehbxusGbjWdZP7dFveNZMRhyhTyuoNEPyho9f7zMnuiw6BgadJc3PAALSwV2xD2BaoZ3nx5HeDHa8kdCD3y7",
  "key19": "5cLwg7bquChmtYtn1sBXRuEvEcWBQ6iH2jTFq3uArXwApSEZMEn5BNCWzpkRUefKDBdKFJqh4MRw8V79K9h41bMg",
  "key20": "YJMzxSwGKL4V2r9F4U17zhScof9LYo8sZjydpEcpZ895nsuhmbQEnudyqqrgqARgiAQEWo7G7WsWMnf93ZXDuwZ",
  "key21": "2wnmD9tVoH4gPZDoNL1uqoknQ4Zydg97vm42qDP9FKUhDNMprgU4D6cujFKKVpS68codotqBuhJJjrDyTAh5cP4Z",
  "key22": "4uwvXLkuNtak5oiEbP2WzNSM4PnVToXGobL1nv1biRB2Y8xtuL6z7Z1WUEi58JTSsYkvsXpgPMuJCF8umrZThXGw",
  "key23": "5rBEpV72NENVnFXuLvxv3taWUxETdq5pbJFP7ijjHcRZZLhRthtNCQikg8j5KqJnzN6nXhicgCMNYivcta1Wujye",
  "key24": "KKYzUwsLWdkAGoDNth7HGdyDQSUG4MJdw9ETTehe8oC5yESqL7YnN883TWzj1S2vQ3UxD3xoza6tbxhSwSK8xRL",
  "key25": "3eBkXjWMqq4KjU7EG2hZGd3uSK5Ggszhx354YPZnVRjvLsw7PCFticffgimi97kpDGTePPEXNHToKXm2nAMeGQgW",
  "key26": "4Q3ZvJqp9wQytSqxpAzjjariXUe4EDTzH5edicTG9XDP7XPv8PUd227UiHRQCLRdSEqKtMUdPVcvkJvg2PZwVoyr"
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
