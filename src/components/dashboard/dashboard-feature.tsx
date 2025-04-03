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
    "23PxhyZXoxrA9S2ezsC41pRzvxixV9MzWKAA5cH3DNvc55zr9UkxGxJ6Z6NcPtkc2NuSnqz5RQYKx3JtRj7c42YZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59CTeNUMwWKbShZYL8Wwdbbo4iQPXcBaacX3yCtfcN6bz7RF7B73Tq1jFzHXDwtUHqkQW2nAswQ8gDTZGYxJvCdm",
  "key1": "LSc9WwT8ykwR6MoVEyWvwRBQWj4KTQStWe9PVd7AJzcaXnyukNp9XB289gNTeW3YQaaDw16LphhYdVWPFkM1fha",
  "key2": "4bRMGvAwjDpiowDcu89DcTLDGZ5uThtGsvEFsRrVNDcMdUKbMbfMHuR1YwCy9Mc232FjBg7jR8FZ468dwnpeVDsa",
  "key3": "2dMJRZgDVoZ1sJiKfN9DNhuDnaiFPfgZj2QFmXQ3eWfQN9RXRM4we9AZmUZm9Xe9ydHy2fuVRUCdWcjbSoXDSHNL",
  "key4": "V7o1bsAuwbzsvF5FEAPSdscC2pZCXNWqwDQvGuBQyX2bLchaLtMsiWAftije6oTeaB7KuUqmvASk27RBbg2y2ka",
  "key5": "3v4yzhhcEarVviXiKBN4N2vP8aXPmuTWECCdkaB6CqT8aZKv4PCLnR8mdsxyAeY4DyVSEzvKjqWVLiBxN32BxGpJ",
  "key6": "5UUm1DrPSovji4hSnjU1NvPxFpfctYEPSGrRgH6MdGEdgt6fTi75F9CnDwkrst8anyVUvTm3W2B8Jc5cHb2fBDaT",
  "key7": "5UgiBuMJmZpHNVYrGCQvWmR5exG6wSn53BS1A3dvmEKFPvPqzfHPQevUW3ReBVsWKN2QG64VYcDd9d9EJvDJZas",
  "key8": "6RCbsKdjCyhk8Ujqqv3yLjX4WfQEdsvp1oqP72xWgy6eQHHHkAAkfdRV94VYt5vffWiydjRjzqkepiTThUvoHgA",
  "key9": "3NpricRM21tuJnphdBCoLC2YbkkFXzSPzVReqWUxguEjdhdaJiYb58cV8wM41xXKPJVrUCBih7f4rMY8FezWUHAi",
  "key10": "5SetMpLaLHiqdBeNWj6jV912oKjTAmwWtUkEsfWDoJEujP72dCnCa8iQMhQPyuvSs5KfYkYfRrpyRM1sPTXBWMno",
  "key11": "5ZWgDzVP7kgtwhm73jNZRnmCncr5fcWbn8WC3kCx8WALRAcSKXj4CEw3dQ6e7PondU2A7WPJnmiRE4UeUqmLUDFw",
  "key12": "4qAuGZ3abpCXV1HKxx9rf4FBvmiJHWWf2CTS9jN3L1Q4oEPoi6gctsdHfYwgsw6dZksB6VK1f2GAtEzMe9FryBCn",
  "key13": "4x8mJqtxci9U1fqovSmyihPejy3dHAYwRHv66zAM5mcfW5nrbCi3xxfEtAZCZMD7zxpNwQACKm6XQTkuRiPQhvyC",
  "key14": "2veDDFkPUpw3PnQv8sTuSBVBMh7WD5LgmVQgyLrfUYRJgM83kuM35hyrGNMKJeiRZHV43Xxf8q6RsDfuvc83bdGd",
  "key15": "5Q5MztxbQTLsRL95N9hQBZPmi4mpduKw2adKRdMvgJKUUtqUuzGFYGkYfyxTZ7LrkuiQHp5UdC6CuQUv91E2hCVT",
  "key16": "a1NqWMWzCvkwSsw7YCRQ4wbskLUNfZrdRHMTGsRtnAtNvJz6YcSf73aecvGMQrcZ1xYZqEB5n3MBNdHcQZJmLhH",
  "key17": "3mG3eARrkBPnJthJQwze4ZUMVkGxzsT9zhYMQf2vwxsbgv7rESTQuVwKBkJP8FyKA2WFFX4kuBWDgQFwGpBz7BTR",
  "key18": "5c5J1cnTchLEbvrw1xdAGei2npng21nmF3LNyZamWTFVf7KDKPTS2LvWLQ6dV1UZgkW8ysDdad3AYoV5KGARV8XY",
  "key19": "3qrNfuUQtLNP1zTCECrQcTBUJfMtAV9H6kREwmnF8A89e5xWzTxjMYd9nZwM2DnBogLtUM8A4naiSMLWvvFCc9qC",
  "key20": "2wrDKBP1CRxmnznUSrizNL6tEDPQn9tBSbQxNawQRobhrBESsByiQmAJnXK4Y9mGqpAcDnsQa81354uVaCkA7HKP",
  "key21": "5nknJmmN1wYNQcPyGKSveZgvb76vwU3GhYFqpwRFwWVvT1T92x7xzuoJvbDLtGL59ZveFeY48vht9JEuaJi5Q6UT",
  "key22": "4Xcm7RJAxDLZAE2L6vzyAh7rEnzypJQqDLV9NviHf5dwcQRzDXZWaPGRP2S1tUDAjGgGBhfGR9TosdEVqRLBJUvs",
  "key23": "5FTBJafz4WwZ2YBVhztxhLbz1F9Hq8b3f7p84HCXau4NdvHWHr6B7Q19EfnpEy8HQFwKVCRAhDyJiaxDhU7L7aSa",
  "key24": "2KmLYukbMowgAyxW3qgVB6EsRWQd546Ux28Y1C6vzEtxyG5usQMEB8dQikjpVnLwH5THCAEQoKGC1gis6C3UnP2G",
  "key25": "4BmjP28WmSJjuCUcBJkKxfKE9SAJ96rYqsFQG8a5Q3PB8d6nHE7eS338YQKFqFqpgcKqrfjgS8zUgMS4PqkCQjFB",
  "key26": "2XRBEUMCqVBv5Lpwm4cVSZA6hB5fQKnevzD4PAfzexKu2ukvj4KvkCF4egvMbkQZZ23k6kAiv6DRAjW5s9Wb2dUH",
  "key27": "2D1vAVCex146k9E5S1mzikYmfoEcimkaVmTNTWi1vSmiwKdjeaAbixkHqMDfexoDgg9eUKHCx6ppMpnW14Nphi3J"
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
