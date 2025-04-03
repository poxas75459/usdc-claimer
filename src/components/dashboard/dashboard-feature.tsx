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
    "A4TxgSuzRYD5dMHS5ERzj7Y7qmTzQmp8Q49gnpkzCy1vPuMWzAQwAeZYDiQ7WXB5KAfxXyohxnfscwFRdDG4BP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "519xaH9fuf3gKoZxH7zWz5chwVxu4B43TLDJ3nygFioKtSJzn1ZU2trAkRe8XxNKGJEczuyomZGepq9dGiLW2k9a",
  "key1": "3yzbTiBFdue2BxSGWQNSnRvWYj4K33CSFoH86YSQgsZnLuiaUGQqBGUi2HbjkWXxFKg5wmnGuEethEct9UvSzFpQ",
  "key2": "rp5KmqV3mvr2m51akG7ZeDNCEEXLFc9jSFjMG5PWcA1MhfaPvf7WAQmWynoHNsbWRY5dV9RoCWKgxUVsEyFevsL",
  "key3": "5yDLzZBdziPz7SfUfKYiTftRhmjpHebSqmtg8EfqcCqDrKZ6Fk8S9XBEpr4LGXodubx8KSUcdNDNqJYtVniwzFnS",
  "key4": "2WvyREMsKVqUMKW7HkQQzrKKdw7woYMnAcMwhCgSjGKfy5Z7dzWJ6tJMfVTuYtuTe5Hodp4VNt6MkLGHoVkorJHR",
  "key5": "cjJWWsPwaeEmfaMtJNQFbkTXr6zv8tLsTPxStCn5CvxC1RkDZp46JCkzjjKMBQCSxpDJgthcrdcFrkSk5xoHWRk",
  "key6": "3RRfDECidmdyAHnKtRuNDcDESHcg8LJkGdEsEUFzLdDWSjssgUgzXbL4gRJoMmp7mkQZCyYJ58kQmiiHw3XSP9Ha",
  "key7": "26imihQvjDQ4oNBzDP8EjC4zMySET33b513tmXqn8EkFL2Hzd1ofr7BNeF81NcyXGaT76nFHCVy9Zf1Vwhhdon84",
  "key8": "2t6yEx7ftjx4psdfojYj8y95fksPukrkawsVwDdLHaGhsxP35LjrgGjU1Hh1CrVmjgHBaBup5MyKtBBNe1kHZpqf",
  "key9": "2uGKnaAehwNxZqzY8eNKbgMSRTTBMnESEqCsabncXCdWadFMe7v8X9RKraqnUUBLkHayUbYHGJi4fri4i9h1Yquc",
  "key10": "5ykUZFjpT4YsHZQrEf49X8t13FgG9nZJ9qiLRVR1irrbjr5EBW9r72hCw1tjK2Z16xaCBdN1AeqnxsAXkENh9WT",
  "key11": "2ggusom25EvdCCc7AdkwnWagAbEJtEbp11gu1LUU7GfWKqJbv7K6xUDxGVDWXowHDELX4CXsysp9FyAsF4BsFLsQ",
  "key12": "3krkCYVwHExjc84RJgDFyAFvvLMGEr7vhGkTpCpARJ1q7He3XAmDqArYPf2csvTPAXDhCViMn1qawRqiHHRRooo2",
  "key13": "2h2CB7qs6uSQcdekLLe9XdHVsLjX4PfCkx3g1nsa9oLg4JGuuGi7ifmJyK5mUNth1wLAyCU5cr2gzHnNtmLrPDzK",
  "key14": "eTJZmRbxEEHF4DaMUSMLQsbsWEzGmr5cBYdUZ9SToVvNyXYMUQX16aivkvxeDwYpgWkZKggSqCz7A72eunyUGHh",
  "key15": "CyY7oCvGzdNih7Qa8hAauARuPFj8irvSGZnV524T6FNfeku3uiGH5FE4csLxrNv4UcMC46LZjt3BFch8Sm144Ls",
  "key16": "2vuwrmxHjiFeyHqFumiwLcbZE3VsmxkQmnmvaktAEgGVvumumUZsGipwYXQVPBPPrq6qGJpF1ktWBzVnkzpXYb35",
  "key17": "2goTXipxMakABDgD2n8bPwY8y3PMQWvGFKtTr2tjb35AZwTgZkVnA1B9F6DBJ6pnXM7dmLwr86oF9GGV5xpUHxMy",
  "key18": "3iX8K1G1iK7qUyf2jH7dvVuy6Dhtje27brQf5exCXP9j3fcMni2593fyDopDsAQ7mHRSimSP6YawB141BpWTLFPQ",
  "key19": "3FLBvr6EkZYCwu8TrCWYbByL4WWAKM713GPdXVDjACFPFkdDwkzbn7uswhrdF5Nz6vx2Siihq5UjpqcjH12CnrYb",
  "key20": "VFHTWcuWoTeFFBXgkvafxthEQ1nqk9nWo4AZnietMsSJtcTvcbfJWCDa4KuoKezEHTYepiT7wKHdHYom1SwcBxY",
  "key21": "5nwSa2hZwgGdFnuZtoMBdhnJvnGpwgVR1ruQ3iYxvkM9f66LKSCdGDfGSFTTc1MNSdpW3vZT9buhg6frECBXMcPz",
  "key22": "5hAWhoCYu1TFdGnUboPGHKDJiDsfM1fMdRaCL3LV7TgTpaEDa5h25xm6PtVsJGryqjt7KZpx8mWFrojeKyzzYK5Y",
  "key23": "3rvcXJ86UFSkd7Z2njYYDmZLr3ia44fc5pBo7FFqJ1AuvWNhnqKEYF8DpzepUiV97uirY97gDbnNMkWRKam1W6fo",
  "key24": "jXsKQdPoP3aL1sFjSRYUeU4UxM6kiVDm6xLqyQ27z9RzUpEkagg2LNnTaGvMjSZwkmkEdugscjJ98nqw6g8dGYa",
  "key25": "5mNxtmu56JmYrDu8iYALfEkxiE474MbjGwMGrobDPmMohBku7gE9kU9KT2Ru7PwKHarBs4odWboyrvftNn9EMuhg"
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
