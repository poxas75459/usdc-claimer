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
    "4sX8P1F889yHskWcvrr16Je1x5rEhrRgAzAmoVUhxf1qbgUKAWugqDbqGWVcGvzcY3kA5R65BFiqGpqhMgW6WdwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BScLqh7MhQjdbrDdUKnR4FF23hsZiNYvkfScVoYdcX9dZQsbH9SK8DoxsGxU22eTsKuNgMwb4Ya7gPxCoviLrUB",
  "key1": "34SWssXooWDhYNDYZ648jf823trMh9K7h8GuM2gnsU8p9EQWsyzxjvSUAda3VzNjUaKn3h2pdoCSH1yBqL1CoVVu",
  "key2": "aXEocRXZ23jkM1h2Kf12hyX5RDvvJXj6H8QSTdorsPDrLFED6p82VdcFZLusTEod6kHTSurHc1fBFKjTreKLXK8",
  "key3": "5Q6tPU62ppD9jsRVPN2ZG2RN7zjCdH8SX3LpH2oj2eDLW4nHeQa1EKFaqWan25Xp255cJQyCCbWGGWop5xEJkUdD",
  "key4": "3f33NAc5hT6rQ6wStrY5T7kHAHcQyqV81Umsbp6kLL8PJC5u5Cg11nHdinUmWedhBcqFiYdNzT7TdW9y7ZCxHvx6",
  "key5": "qhBA1VgZeyiD1kZmSGhJrNPVde2hXwEkcns3rnmTZ5eeTZ9c857VyZocHiD5EmjDF5AbcXft2bGcqZpe5p84zBg",
  "key6": "4xvECT439dWJ8rxN5TnLcajS6WNHve1cKondbJ1pno4HXAMUd7fH7M9bmnbZ7SjyGeoqLVBmAqFY4aPqidM7MEMH",
  "key7": "3w3NjWLtkD6gY6yiu2eKiVXsCbAbKAxfbUaqLs3Jm7bWy7ohF1FkgvjwYnmBDYgCeSBtUYaejBPBYqrWBtPbrVCY",
  "key8": "2uCX7fGd1knfccytG5Np7qbiHAH5yZcfue8CS1TT1op7K6DQWe1gnCChQYxhVzyYPTxqyDavrwsEhpAmBKMwb9AE",
  "key9": "2dz3TrGjs8F2PeNURx4gafh9jfvewfyhWzkTmppWzqSHwkfkiQjzYXnyUuyaLjUwQP2jDfYt6T1NMxYY7oWAkUPe",
  "key10": "3eKeWTAK9pwMbKH1KRyTxvmwjriU5CwVj4c9f23EnbeTaSgDcsagCoxZ6aNBfxZowSyCjyVJ4cxU4boBDih2bYhk",
  "key11": "3Gd55p7fdd7aBT5j1xwDXYZQVormoZAZJQbPFFCT9515gaAeLSJrjny1S8rxBJCCfgjD9kAy6uv2G97oi1me7YNw",
  "key12": "63mGgiygwQSoqvKas1M1YFYdGMqsU8Txr8uDKPBMYcxeYCzk2uPEDB292fHdVSEqpdXXPX48sNZ5ZkmEKbeZs2ux",
  "key13": "5rJdRQFDnHgoZ65UHgnBytMMnP9GrTT1mvaWgTbMY5q2pVnBjiY9V6uwpgPwLz8FUgS8Dvdvtk3MazWHPMBx7D9b",
  "key14": "5pFLG2uBZfMwRDJmNV3LrkKgTqZVumpTh1sounxzEEubnpuYkCGMCig546hYakC5bJVT4zDysGixUzTrWriSBCoe",
  "key15": "2mSAabuECptHzHbn2vpVptAQcxiHmQ1BYP5SY9uWMdGh5H45PLbqCSjBG5PRxA2NUXGGAJ2HyjXRuzqMqD75ybXp",
  "key16": "nvJFvbpLhvssPvuon9HDeoDp3ivEkoVBvFUkyxnxZGjAgZ4TDihA3NwuZ91PPsS5A67QjdXHjfKqRBHUnHe8yFA",
  "key17": "3Kpvzd8Ub23yF7MsBRxiDwxwU6rhhBxdKHFz2N9ZXrZN2Vm8bJV3wC2hfDcRQLDfQ613vEVWHEaoUiHEexHp1QQe",
  "key18": "28JZ2n7TmTbVQtzXAJkEmePFLVDaMcYuRUCTWGEk3th5bTc3GTbfXT3uyJoNSRa9qGEj41JoK8FeQH95Qz2ZuXVg",
  "key19": "2ZjtAY7bcgFZaMCBonfiA7Wo1aWxv3nnK37tLA8qPZKjeg2Gw4tJCZaJ3dBroiWwfxLwD7c3ybfKVbJ41Lw6wvKU",
  "key20": "466oH1ZjRYHWuvv4qaYTQWbBcD5iBB8aX22rWaZKWd8d7Z2zDn2bUzL4weUpA2yuhir6taeLrRRwRdz44fF1wDyo",
  "key21": "4374rmnVbVidNUqaGJ2FvCU2iyTb8VZpX1gZXm58gCEyFCfs78uSEXBMChrxqAf2b44JhgaEHemo3CUcbghSyupo",
  "key22": "4sPi7G1akMQfCPsLqkZ1EPjqBUHxUb5BKuesGnTrAaQmJQ66vRTA7xiZ1CfzdNDNTAwvVHJiaEC5upZQp3xu6ZCC",
  "key23": "63xMrcLJT1CdwhQ1pWAEgxoP23LHZ3Y88JEneTumKVhtSD9RLXkaou3FKN3EAezB6W8qLLgjZPDL2TFyLbEjhsNR",
  "key24": "3h6iA5JQdyc7dc8tfp2ZZvDLbDgj9x6ExVFH46C6RbepEPRkoubo46KwJdbwBdzsrq3xGSxim3D67aGJuDA2u5U",
  "key25": "4bD6jpAMddDzwqkwLE8L8WndDY2Asvc5T2YL6R7GUJUaFGphyvMpqQNhYhapvgYS6n6Bj4iyKGVv5VapVQUjKez7"
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
