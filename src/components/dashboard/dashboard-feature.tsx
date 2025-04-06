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
    "TtRadtYfduDgoXwHNGrb6AEydo1YU6mAg95hsq9TYnZvtwm2AfHseY8rP91meY1cTLPsujUAFowQvLN9koZ2us1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "smMZeR9HzNqRJuo4SyNhgRAzkDxFUDJuVrfHBjywg7Kw5r7iyiw2nQZHr4GnK2ygTN8MP1JhagtnFSUbDPGxvZh",
  "key1": "2pbG4JmEJbNNSU3PYeahP6vYyHbxWzJqVxUBf2oM9rMR9BuoVrbn8ZZmwSdjNjDcyuA1of727ozqzReSXsZMcqi1",
  "key2": "4akZ88qWZPPzwPJLDmsaokVeUJBa8VbUsFdo86Q9wv3iDnyt31Go9cgdnneK9SmTQB4nBNMSboB3fR9dUr8YUnrt",
  "key3": "5JmNM5v6eytcfGBtijgsAZ77rBK6mCwmtRUHoWW9WA1N2RdNvGJVyDewYmg2RRS92JgStswp32QSCnq9rTBow4fr",
  "key4": "35gsXbhpZuiz4qs7AfdwZCCdfqAPcqVmSaR72N1LgepjxaxNShLDmY5KsxPHxxE9EQhUBqgMuWNpgkLa94iZ6wta",
  "key5": "2cr5JuG2BQXDbX6x2LqFj5NMndZWBoKpkV4BtWjX668rC4hS86sjbdKViXBZZqpE5y1fZjNm5FJiaCqBF3epJoFe",
  "key6": "5F6hD5jm9JwMtB7LdwaUgqS9wi5iQidTpix1LhUkgx5en5HfT26VtfcvNniTyHSp2ATZrKZHi8RpSurzenyKosjs",
  "key7": "5DTv4FQeXkHeMX8syGZ6dVFfrh1W6zPQMr7U1GUixD67vRTqmVGPQV3G4gZ3VS74TjopygKH5AyVQhX4DZdtr8Ks",
  "key8": "3hoR7r1jjUu5WHARGQv6UPAPkPKyHQ93brQaQpTKDaEUXk3rpaeQrHysS9BWkz2XJe3ZQifLUWHajsw3WTsLBsdF",
  "key9": "4NQpNu4HcxDg7JAo38fNZJPNmJLAhxVD8VZML6bGmuH3TSayC39F9uKJZV1DNkgVXHHj19qjw4ohbsVyaPrMN3S8",
  "key10": "2iyK1DHHhymVe4AxTnYAJrFoXfLDyjuY5SXacDDjYx67SGjQjECmuwgRLnK4g1gdBgy5es6z8Wb8fsVP6ZivbBCi",
  "key11": "3ycwJeQAP22Wq4yaqyJmjMWgAJoFCM4rdTu6mTU5gnRWTWRPFQPkdzYRYvihqVtTWg1qEZunGJiT95knDzKUwQoQ",
  "key12": "529EfX14QQZpkarspw9mia6YM8eRLXydUhNRyP6sYHdD6aqxHAncdeihVGNf5FjzntxkMQ3PHAM9JiDwaMeZ7bDf",
  "key13": "2wHX2FUuoBrJpBQiW4Z8MJDScfePY5gpMLdA6GAk1mUye5DxLLSTe4u2WaqbqFUB6smdwNY7o3txAYXuyZfTPn2Z",
  "key14": "gWyW7ySCxDTwtWoEQTKfbpumtDj1c1qrnPUH87nVH7xosz3R79C7DktmKp9XDqUx1ee2mNMZoDHsTDb9qLdsegC",
  "key15": "2t5WXByA7LVDZDD5nyW2RzNzYNNCWzAZ9z6X8mrz5sBgEt8kzyo7RLL8UauSeLhDbURoSMBRU6fYuYSN71dHCeE7",
  "key16": "2Y1m6V4VTfJKe7jRWv3cLqBywRRCuhPdT5BTBapXCnEASo8JwfVA7hTyWSVQhgjdichZUN2tpPDZkTTzee4Er4qS",
  "key17": "4ZujLUTz3WJCJqRTnPi5ui6BiXtf5NSshcz9DEDgmkTxys1UG4yeVK3ymG7anHfg88DyYXHwJkxUXS3DKQvKM9wy",
  "key18": "4FSznMH5j75jrnoEJFCQ1dkPNM4VgyHHHRLd3DWNhrJjS99vJ8atGhQNtWEQsqk96Q4j2wBPJEAGatxyhB8ZkwkS",
  "key19": "2vqSdB47SDXdDSNQXN2AWfj1TVfuAtssKGbcBNvLueXcXCYMabSyMqKvdG9xfDv5nrLmo4ae94nfnxdoSnCUpgMF",
  "key20": "2S4xeNbj1uHXGagjNJRyA8s5z1yc6dEpE2JwjLbL3QqCBqDDawetYGuBtpwLVjHCXuLzHzvcoPn2P8yVEF21Bixh",
  "key21": "5VGyJMy4DYujgAtqYtwLXCXJrw7Z7T3fg1ACz6b2Ki2tpRoQ86iXqf1JMYEwfihHj6vvHA5T7Z4P8noPy7rLnfui",
  "key22": "4aG7DD2tGTTmAKVKiF2d7MpAzfJf3sUDKCBU7FfYavZ6Hy7dJjef8uosxG58caW3oZXyVWRBXjdZdhnxsALWH2eo",
  "key23": "5gU1ohE3RDLsDzcCkG6vR2srE4oQVuGbJu78rxvAoRqkFJFkYWcEzKkUpbbvj77EGjRtJMV2UwK9YGaYUEG7b4om",
  "key24": "3Y3medycXbYCbUWSi9DLQji1omSvD94oLdnh8La9X12K96KwqS21LJaMhntogqVpuiWKvtCD2EnyzcojzMCwdGav",
  "key25": "32MioBUqcpoTXkmtKZDGiNSmKmSZ9pPkVf1MTPkejrZ4TkrZob9QBB4A6PbjqnKDGhMCCXyfh52BeFwsmy1VTdCb",
  "key26": "5mkF2tJEv6UAsBuxbQBT1LVYsfBkwjxt4e3FckpahHtongJxEKzMWeEnwDFBoQs2iJgPFhmqn5cguYQ91YAqhsQW",
  "key27": "2GVBXLYF3xwdHfzJGcgdseQSbUByBkke94r7LjCkFZ5KpPRHbgAwvexsqWsF83evyoraEW6RQf5Cn249fuaQbmSK",
  "key28": "pUP6GR4Bp3gJBA3MYaarxUcGCUw27iYbkn2ADUgzDDRbh89nHo9ryHRAiCLRZ6LZV4LuTGEXa3mT9jsMLGVE9Sb",
  "key29": "2EvtdSTtoV4qzgozJA28AJ1wgaBSKszW9xWvD6Y8ksfqc4VeJyxRnkoXyH5Rtn8wQVHK3qjwUmMzU8hsb5EcwEbT"
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
