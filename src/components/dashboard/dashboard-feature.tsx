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
    "5CwTXKZaxP1Rgx5w3c7D1sTxutMHyfDF3LzS4Veyd9PjY9uYXLzdjxhhvu8ryE6iVKk69AnfCRbte6gxy83PxKmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XgUCNn99znDVsHHFo1rLwvHxK5hFrvCW34GuPAVdLL3wQbhE1EhE6PnXNHBxGTFDb8f17Fm4CGGyC9VH5WT7nda",
  "key1": "XnMDFQeokdGTDFRB5F1TTpZj3UA9WuDvWGuo698XHma4Tzjawtb64FYCysWzKAT1YGwVecmuTvso3P68pjrTQuC",
  "key2": "4jz3ppEfKhZVcdZ43Zqf5pzWGXyv746KDqMXo9s4C7bxwifRAbYLLihtgLPXXH6PqGaQDcrAaKzYHFXhBcT6eumk",
  "key3": "4BdsUgrCsc5YyTogavx7ERMRSH5dYySHEBir2Z2TVe1vgMQu7fp8fkqE4Baqt33HxLZDmrd6JWz5ZSefaqZrwPCW",
  "key4": "2vUcNHM2x66WR8FfDgj8S5FxRcAHjNSXswZqwimNw5BxAAgHehWpJpynjCjBpH5zeNsRkJxdrkm2v6CUjSV4X7Vt",
  "key5": "3yuDi8kW1P9CV6sngNKYNDsLTc8H7ZDkr6CEmF83gx3K3GMwfv76ZjP6dtKfFYqGjMpJzmEnPzmeFhZTtua9PA2H",
  "key6": "34ftiWERNiZ4MNAwCLqUuKrh1q7ooZCamVL7WSEuYRH1m52akqqJTKb2UYVjivTFXPoA8KRXpghfLN9W78wtuWir",
  "key7": "2iVNmZ65bg2mz7qPtAML5jLJxTC3VpwsMkDwVwvgosrgis6wgWyfWREZKE1DdwCrU7PUeomoTtCwmScQwvq4ChN9",
  "key8": "2KFPkMz8ShjCEkqycQKaEGDHovg3RFrYxrkuBXgJJopZ2Tx2SrGd65ZSvTsFR3HVKn6Rt4Jh7woxGzNPqXz3w1Gc",
  "key9": "5nGvd9KmV8ewQUyzT2Wji8STUcWBRZhdJBJ22B1JfDhRabudaPcEfsFzvw3YG3pqZUuMpE3fCTMFjrqWjf7FrweF",
  "key10": "51cvtdGDiRFjPPKrKq5eobRDkCVVEfG5FTt1owhrAtB6skttadjEQeuapyf9pP5dQewoJW69x13RfLu6yo6k1GBi",
  "key11": "2MqsvruYC3HV8qEUrzyzGNmY2Wiu2ZruhqYKaN2HMALhmD2uTWaDc16C8pT387As3x5NPqDcJmM4Y4gPn6GnmZoQ",
  "key12": "2LXBqmrpu6cpSxgkVRsRzZpcQJq4gcVuMzCpejrUJTVk84p8256zdN1YAXocMccMNyCn9bHgrxSjw5hqjARDFANb",
  "key13": "5swmxk2L6psxZWq8zRYdZDzDz4jp142Ag9YQqNtQLyJ2EMDAM66oN8DenrMay5Rn1E8itHawqMFqkWrgZP3Hgb9X",
  "key14": "3DKcaSqypUqB5REJZfa81TSgQLCnnQRke2cn3oPeuxB7ss46zmFUB9CFDi9krgs8bq9bpXD96UyT7wxWvwTr3LyT",
  "key15": "3ZQHRK3135WBXf26j7yjTGPjAHBgDrnAWf8wNmfQdSQRfzj3NyuGEiv5yHnf5nALMbjzusTj7AYw71BcPtjwjGkr",
  "key16": "5d1JrcdUDwGy8tShhKsja49aij6WW524Q9nRCj9s2q82EFd39321v8yEMPnVtuKa1nCXkfcjMVFwdTdNgXLC6VRX",
  "key17": "3rafFHxuHJ7uysAigjwDaJmBZJggQGuTRUWGPa7RbiPwmxf8nwaJWXJt9y8T6VPRpxBePVZaFUkY8vyn6YR4vuBi",
  "key18": "24W43A9dtwX1tJTX4MJwFwjuR8gLRHJpw9VU9oX9ukd1hHbJx98pD1he9okLZTJ5xvj3U46gU81dCrXuusudLgJ2",
  "key19": "4tS7WjvFEPn5PzMPJD8WFtUTfi26973Xx6nBPPLDHCYV2WmM7kC623BLUGt3MQay5FaphoaNpJSXFqmEtsTryuq",
  "key20": "5deVLw4z6G4DESoBQ4LkKUe2Cbw12CxdBXfB6SQA7dX1Rz5k8b2QXpnBVNMhaYk2SoVjpzCYCoZm8tnnSoDoKiCw",
  "key21": "4KFf6qAeKCep9Ykf4Pd4deBwbRksqs1GRFi7Y8AFtnvigJ2fN1G2d6t2HoNdYGRTxe5YXLmFwHykBkpJZBcGhv6r",
  "key22": "4baSaFz32pNuSTG4ftEZHfhjz4FVhXB8UaQkTfY8kQojxUgzJaYaA6mgcZHS2DnxQDWaYz5BoNteFwnaFCCSRMPb",
  "key23": "5XdmeXfi735ENoizcntTDJnBHuoqQbRLs1bqUNtHUHoQ2hspDp7BCRm6w4NPgE4w1yYgreg3Tj1AsAH4NFJ7Ti9B",
  "key24": "4cdWKvC5hvGZQbNmB8THp6uuPGfRKa991n9AySkzxK8MD3CKiBqgCBa6UPvxJ7QRYoaYHz7aFUFFUpVWbX7WKMkV",
  "key25": "nQssYWWBkBNbt4dwAwDEUCTemUvJWNmi96LJ1cXxAahc438WRKDyfbJxKnMpG1d9LQCtpsJsx92ppPNC1tka19k",
  "key26": "g8MsmZfEKj5FVFJcxXHX475MkGj5dGqW6V9Fh7dmSQ5TugaoUGe9qWgt43B99Zvxw8MwEAP5a5hUpYmKnLFrfQ7",
  "key27": "2FTGHBKC4dkpWoPzPyfL4pjhzzKqmFBht1NukVeYtjYgg6DvHoDmQpQhsxs2cWopR9ZzzxNo2dNabj6sgQDKymGh",
  "key28": "3E29FEGSxTq7SKSY12AUth34sAH1EjCiB1unpgzBYBN7JNnr6iLXm5HT4K1pWpsav2G5K8t5twczgJnAy3PhKoub",
  "key29": "46XMSfBPWsttb4wSXBmd1dz3k92bDUF9cRc2enmJAZfuRz83ensbUvQ1tgXWoC7GfLQP4ixVrmVfpycx1JGquRjg",
  "key30": "54JEEP4eFy3PiTRb9YBgNwwR4sJ5CPkruHK2oMjKaa2y9ioDALVrz765BpshWm62koQgG1UUndYCcVPQy1EF8vD5",
  "key31": "pyRTCgVbPmrdUHqas9ejwWVgYVHT5W37kuujqkfrAEjMijjpSXVb4Z5csadbV9PVBEkhcDZ87BBchzUGigYhRhE",
  "key32": "3LikM8F5r37RYKxMiijU8s8Gd1C7eHVSKuEqq2rJHbw1R5qztZTrQo8Bsk7RTZiZ5a353iht1tKg87FuLEmR4rUF",
  "key33": "3pLvNbmPwP6C5rxC3pWqcuf6BPTvrHZFzRQ462JL2TnCZMynaygm5rkKvWeVnt3jW5HAp2KbcRvUrtpSDk1g9EhQ",
  "key34": "3f9omrcCESidsN5FR1fphsEV8XfrZKLZ4EYLBRzUaxULoAR1VnWUqxVCTefZXTv5BV9cnmcKwS8HtZ7vJioufpNK"
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
