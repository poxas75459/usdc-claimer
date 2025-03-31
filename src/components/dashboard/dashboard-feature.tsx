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
    "4v1bjZDoJc711acvG5G3LNtpygVhPD7kAg5wpkkQj9pJFh3F284aDrgHqQpMrUycy6RHUa9jUh2vdcCaTFPyz9DQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wfVDiZLX5tSJj1zCxyozDRkcM8VjofwVKJJe3cz84at9LAEfNTH9wdxj2UsNAnScY3BXADTkgtFnZaLTC7QbP1p",
  "key1": "21tXVRDygX8ojC5JMmVH6BzEnQH8dJpm2SKXJLq8V3YfsQs9NeEw1pPZHWMYANrfj6SB5E2ezAWf5BdvJVum4KuR",
  "key2": "3GTpuSXTTs37kpxivsRRvvVu6hXfvj3UGywaLkHtotfATesR2GiTGZ5TWnQDEVofrktPYNfi2dZMm6PEfnTu2BDP",
  "key3": "37bQnQFRcjGsYvjtpHUzzTtVvzNLLLYHR1WUZNQdNHRzB89bH3NPzBFrevXPvQUFMFxTgmuvSRZWAcmgq2p2nArg",
  "key4": "AfbVq2tRrR6DhFsf2tB3iYLuw8qqZuHWRqrRmzJw7B7VhsCoiWG9AYS1Sdnc4TQGvWUCuNZpiX8rM1Zgh4jsHMg",
  "key5": "2U3yRXpmUKv55swAdmpN2s8SpnXHMMhQuAdwhWxZjWK3X6zegrkYSzxka8ruj4nZ8MpRpGVoQhVkrF1wQrSTvTZt",
  "key6": "3V31vHpUZKDaiyca6VkuJEbj31DRL98kEoATMcJBa6vNsDcNk4Tav2qpdZCGswCHowUCxCtk8hS8ghme8w8NQSXE",
  "key7": "5DCvg9zFjpsJkLu8aVaHRRPMovxYRAyNTTaWXBp2TncGSV8aTFA3wrdNQiSmu6VWCK2Z1WdWc4ge4eyGvjeg48X7",
  "key8": "5AgoNUAeLNhHZMRLCQJKCXCiV7F9MoW2hbFWqNNTh4XZR92xQFN5mf1VP3oe4pij1jGnTciqwFysFDRBQM9Rkk5g",
  "key9": "5aHVhqkPKX74Xh2cDWY7Jvb7fCPLo43ex8CSjnTEBY98eJ3Qn69JWDHWNR2XUxkBritFeb6RGL5avUUjUH5n9rkT",
  "key10": "2mBZkWauFUF86GJ6VN37euTUTciebTHWxdzyUtYQw9WqzDzsmuzTF31SzjY1i83J6BBE9o1bmEKAWAFJKU8S2ZcT",
  "key11": "2jhpKqhygd5Tm6Mmk5Uv8QRTz2kLreSobAqE1haLJQVjtBYkWS1jhfQPouikUuyJH4KbfB4K34Bnne8nz3LXB8Lw",
  "key12": "3JPqpjHVnjpF7WpNj5vxD1huuZLUj4WFeivUQ6whpVFhJtmeUPT25kyVYtDYvk5Ee1UXkjPhcEsVeCKL1VyhtAJx",
  "key13": "3VSNxpxszAbNXEFxdoj1oLpkiKU2dJw69cte4uuGqsPuEBCJkB5woLmMkMLpP4CZMycXpee4wQoS9nZAbupy7Qy5",
  "key14": "2H16atZpis7DM9LymBquLb5Rb3feFoCrSGguoKLsaJ6ugc5h8vDmZMM4h9UsXF26zhDJzYNUfi8tbFDgHiLiLtf3",
  "key15": "5UGTjoMUoXMp92eWdPRoV4sWsBFsbPcNF9McSdEmp1Y3tmzyHJ8SRix2dEATAdup2ThfwyDeJiC8dfAgVwVKbnPw",
  "key16": "3ebbHw6GiCUVASSUfudjU5U49uWH7kv3wTFaM16VbCfgb7X1nCzTJUeet1zHfH1uBhiWKZLSSgLP9onCV8oS8PjW",
  "key17": "3jbp8N3gxgcTkUCcA6MfdcY51D2d8jwoo3jwo4rJzEtuqUJnRYWRxNoSknsAPjfxegt27vkgmemt3VSEQmB75KMK",
  "key18": "4VpGqy7UYCQgpq1mKG6CVqetQfLu48XFvAT7uM7WFhvB8hcLnfPfHwkmtGpxxiY3rkZuoETzTfYnFQdeJ9R1R54F",
  "key19": "2Wz7FZZrQH53WvEqd7tcuNMbqaqd5VA64grvyFnzh4KPGwHsGce9fgjHSMhJ3oTErFek9q2U6DwnSQVoG1jqJZWi",
  "key20": "5cXfGxtWahkXfutkKnbSE72o68WuHE614niz3kqgEKfxmSfwTGFtN6ziyaTg1yhTJuuhwHPPfiqnnTGFZ9pHN9xT",
  "key21": "5DF8gyPhhZ5kiWbh91KGKFDytmnPCcwHjdmCcBJYZzGgUtV9ckND3ir3nxEV9MCnBFVCmXbi6QUqEnZ2tgBLqgQk",
  "key22": "3hmsSqWVgcwKzLvp9EuHnM6BGaRAtkL5GUduVP9WHF5YkQ1RwQfnHKeaRuANrwUmndumvifPzspdiZT1pYC6vB8H",
  "key23": "35mXG8wyE5aShZ1jQGcometGVuVktHZFRuNUBf2niKnMG6m4MQD23bJQ5Utyh6kLdZ9iHzxr5FSFX22nCqUM8A5w",
  "key24": "5DFDJ1DedgVUn9uHe5QUQUW5rw6yqfZXDQZ79u8PyttDpoT7ynaTj5Se1c1HX3k6orzDMesN1U5G6GThPQ48GHQW",
  "key25": "2Njxcz3ogSMDuAzqrKDUPLoabK5VvpVVepZhAHZQERkc5qJufmRw5DHVK2ezAp3rtuZkRDsRVeRa18y1sSCvFc5m",
  "key26": "3JPAJPFHBW7yAyzn8HpjQzWBQzBvfRA1U8YQXDCN3s2zk7espjpQ3GXc5S76Sg3avi9oqW9G2YuWiwGrGh1f1go8",
  "key27": "7DgeKa3s3nk1NnsvCYrYQPofFirtncm9bMFKHE94uTZ5Lsr7TgXcGXMkq5ko3g9WMx6BF1KkzPRG1AY1BHggLKF",
  "key28": "4ix4neDTUXhrdDqiY6jyDD32MG1WgFjK5RamMphHi4h4JHK3pzuoN2rCktX4Vbh26YVfvrRcBminfkQZQbGqTzwU",
  "key29": "2C8oXtQgPPpTThVKJmahmjvPvNBXjg7GAXuYgYKh58eJwpond5R6KxjtXS6w9HugfTMiGbB9jdKtZKcytCcjhfTA",
  "key30": "AmsnJXeNtqcyugVo9meyEYKihBm1s7w5UQ2J1kANJfckkNxCfuAfQ5oJDsFvVticzn9jup42qKhkJ6fSK5pLWPe",
  "key31": "2zzHVPbdSQ6r27zfy6R6D41jehocibq3VtYeovtRiSVVusuDz5JEH6QVcJYWkbb6q5Js4VVqTCVtQQEcXuBYXYFZ",
  "key32": "57rq1ABRzMogjLJZUBQYSNeX2HXFuuvc9UpQRzhW5FZisG1EhyrcwhwvCUvRF5EUtSNZsR8cmpRjybqsCASRiz6x",
  "key33": "2LTLAF23nPxE9qZHYGWym4ca6M2Kw1m9jfxHLQ6UHrePp6Fd16wZwJPpdqVEoefSTe4oNKyijX9KYJ15NEZmiFmV",
  "key34": "4zWtWdYcaWedD8cTPePmdPdsrutWiwDuteo11d1wMo2o8Q2DUnepcnsNpTBDYfEh3kAxmmyTrjARgg7sErCntK7b",
  "key35": "5N2tPkuB4NnX1kDAZ3zJvFzxFxF5oYRJngbMJBmJTYMLq4a1W1k6s89H6bKTAz1p1tDZqDEmtkBHzuYCzPhd6Z3D",
  "key36": "3hmdVXNo1Y1RJczjB8PvSHpfBSzz597MK7jMRFqS6q8Xruxd3zCyDHPBacgAPvGiV4Lg3yKwHoEbSp9Lwif9Q8SC",
  "key37": "5F4hRwGcRwrDyqGdpurHpLM9Hwk2QRrwWwxgpTM4b51KudbEEcq1FMpRFWvgU294RpNibU7ZY1p5WR1NtPjjx3h2",
  "key38": "3Z9GkZ9aTmfFYVMNiy3xNJfFgWV5M8WB976JF9mJ2RZGLRXwRar7VZtrnLFB66zDzbDWMQzEqkEEeoykUqkTGLpR",
  "key39": "5PDiKo5bg5hhps6AdqeVmNz22dQnkkPQuMtpjTEStNGSAaWHyuTjYnS1EDoGgXVcoD8y7HQ3zD19fhRxQTjP5QbA",
  "key40": "3AFsF9dQgntJ2jozpHurQTaL7y56rAPAgtvztPgHCAqEgd3HfMmtnh3at6pDiufUkC4nwJ5VqtXozuitEakke3RD",
  "key41": "5WaLHFgwbWVBJp4Nw2JDuu5xEuTrqerJCKS7QrvM2yhhxeQ9cpVdmxucvbg3weyv5u4TcG1HTJyiqKYyemPjefki"
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
