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
    "3WNRkCe2K7Dweg86YHyR8E4rrWaZc8yEdtJUDTfsRMzDHvQQR2ksTWxn6Zw66pLtgVBYGhTrRqSrC9o7atNAxGSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BAa8WiQA8TsdvCdk2zZHZjFwNUGjAAnJcJkE2PPrxc7g2GK4hwSzumFY8Z67g54gyUgEWJXeYL7PQrfGjyPXvpR",
  "key1": "2rxQmAE1sR1mHQpPifDWAy9vi8wp1RLrVjnCyDGKMCYXwUjMmN9Afddn3EF99io7dGd4KZYUVAgx3Rwi7C792g1k",
  "key2": "krmqFr2aAWrxGCit28HMNoaUgW22bKy9tHU5P31syGtoL4vrTGnPCQgt41HpVzFoWypkAH1QwdSnjrvcQk9XMFk",
  "key3": "4jzFLyrbwZVvCKSehYpDbsABg2ydgB6Z8uPnqXxH34e4MNcyXRerynj12mKq9cAKWa5JeVcXKGPydD3mesBXSWHk",
  "key4": "4yqG81mZBzNCp7XUUkkAjn414nQVeGufgEUmuVJLxbWiLQYZkFFDZVuyzQbwr8j1R7eDRCrE182MXtpiP9Hh2kD3",
  "key5": "44vU5cXfH9uLbvUT7wMwHTzFdDHmWgGTvJXHrM1vG6GwEammiDBdGHMjLAQt2G4DEVJAM5HWKowUyG52FPAYC5jj",
  "key6": "1WF4qZzfEEYD4aAXq2bMRyhUBLbDGiiEKFZ6jJQpzCtw2xyYUXzdrUSDUvr8FHRFz7CwnvpvvdnusAgXmAYvAhQ",
  "key7": "61KdktKMHr2JXpJ5mSGzjAsWWrmWBZNnxJWA7VRpCkp1RJg7TUxvh4hzTFnh7yVcvxNdVgJsffvZv5FADPiYFPZP",
  "key8": "oVA2ovdb1KWjqrLXZd6gN5Tc87GMZB6YB7e3dgYm6B41eeysbQNxqqvja2RWVafvanyfQhZU7GEeecUJeX8G2yZ",
  "key9": "rCwSZd3tdHCXmnm55rx5x7q57FvESMs9HEbwjrXuCy7D4GNSpniZDNFL3j5RAyqwLNgfgy57W1Pa4fbtyPt6Fdu",
  "key10": "2sUHKdxt7tqiE9dPmUHn45afdb49dHHy7EHsRMR3mbF6kzvHYrmojCD7TTk7PWsFy9u6igqsbiU38BfCS5XFcCXd",
  "key11": "DwHcJ8bFf9JCxBHZJqVPkS9dFpNWwDYTo1mveFWtX1wTKeEYwv1Jjgk4ZXHXptu7Wj9MaRCPVfAG34RZUqgk2bE",
  "key12": "3uRwddkRsHWFC7P2KtaoSLz8RtBBJt9kVu8hv4wgSgh8FsjHdJy5odqexrMygVbX9ZMeaBtYZRp5MxY8GrdfPfbw",
  "key13": "4Ub5EtHNwbvL93SnLRfTumeNCFieYvUBBUwZPhDh6RfGucHmjj9x8WbqudtBoBNxMMTWCczV9NdXrk8Za9f5gjAn",
  "key14": "PZ8LXCLHrzaBX8qcb3tKmkRmiRx2Auvxg1KbY93uFD7DcMyv4zhGYFXJSMYvok9GXy1QfyJ81XWWFBfPUrt7ghe",
  "key15": "3JQYLLb15WkteBfEiJT2oKit85LQiqEzSGHVRpj5RLX5UhjxQ4Jk8Yo7KJJMoUzrcTQSwkZT8FQC4254rH9dPj9o",
  "key16": "4vPsCyr1zEkdZVU6Wi8yT5oadL2KQgHL4CE3t2z6kdqRMUBmtuPtiEHgDxmr3uXd68VF86WbjtUDyKZNLWWSjE4v",
  "key17": "3Drq3yMmWeHe5ymbXcYTHYbtULC7rVXqG52Fqtwnm4debTcxti2dRFzhNdYG5Y6gKa4GgFK81veUCG2jzMjYcZSc",
  "key18": "53w5Psc9gr9whNTEZSeiN34ymvFWU2LMbzHcjEgpUCEcnnXd93HuJGu2zVsaU9qEbz3x2XpXvHvHTtxeEwZQSGuY",
  "key19": "Q49UDwt5GNzEZHmhCp56QaCzSuC7AfWuUPzY3LFzu1kxH9DuGNbaaDYF4quTJAy583SuEBQwgHS4a5Ki6VzxH7M",
  "key20": "67m3sWPTXtWi9fH59SKLajawHyc1PYZQJP3rpLzyymN6mee6M9c42S575DmYGBPupTUR51PwngdVKj23BaWuVyes",
  "key21": "2XRFgrwL9G2yC64rfDJXsvmwppkBYBQxrft55ck1Wp23nDn6wZ494WzHW1utcfhRsKoKdJTPt2S2p3wh9YYeLaBA",
  "key22": "66JUG8UHRByAzXsWwQX6NCjmUe9tAFmf6vtGgUiurnP6DYux6EgjMzFrpFpRH1hncTpYsXi3CcQo2YnjnGuGn2ak",
  "key23": "5vmGd7F6inuqe3v6SbcoYCwkSdkd7sTRR12kX3LFk9cuL448UMmK76SwjzVaG9a3rwB7PWNYoUhi8vYAtEyAicpf",
  "key24": "5W9G2Pbw2oQ5Qt6EKuNVdqXKAqgeuzF9fPkkdSdzPL6CcsLmAPtfEd2VTKCCY5yn8fxykcm9jcMgytbWUJfGpAu7",
  "key25": "35ReHRHxxj4Z9BjkVEdLm8Y5AQci7skfDvmxrLsXJFUeMkdcCzHtBtKyKeCPDXBgj5gGjrj5CH36guUNAkKDrtoX",
  "key26": "gfftucWUeXFv6ScBrzw3pqcLrw4gJ8Ewv1UxoiaW765k5JmhPebArbcd75jQqbrTh7jhCbgJtVrXLKbMJ9QexrU"
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
