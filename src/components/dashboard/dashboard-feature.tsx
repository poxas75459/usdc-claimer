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
    "4oubbYThDQoRZCyo6UnXoUFoJEzEbPo9M4pGtt3UJsD3iwB3eRyuAatQXupnnuuh3YVSfc7n6DVs451waqqVRdX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RXViYUjWRG2ibQgUCZ1LByvtyy87fGULax3pS6tb88uEHonErdfhdRWVRXaPzqFBzQukPFcQGZD6nsRB8tzSYwQ",
  "key1": "5E2S4amb1r5n4SC3KGbxtS58vmG6uGKrjMRHVvqE9mdbuFUKubAae98cJzSH8AqQj5Cw3QhE6xyWbDUP2cg5mnQe",
  "key2": "b7ngTTMGK2GGVjB8H7d5TGjneYdBkNfWqoWKoxZeEcKvVTGUovzUqLmREZkMWpnkpRAp2UMHe26fZ6LBtp7oDsT",
  "key3": "2nSqWukoqfaHMRUreX6iLo4g8mHsaJLuVeJQaan4vrUD7uCatM9Vy8aWDX4rD5q2WKkDqPCNA2Mp3Th6cPJwCNLM",
  "key4": "5rEUfg8YNYrJw4DGvXM1MgTjhc48kWLbtbb6ZjRVMBsCpCf6xDNzZdQaLwwNXndDckpg8TrXHhS8MZ7wrEVbcFw1",
  "key5": "4a9jBhn6iw1BGcUebmdC8fF6eL62mJbMG9ELGUP6dmpNpFjYSb34Twh9KFWg4HtFwyo4QH8R8kbr5eJw1fPEehXG",
  "key6": "5gC5TeYVKHvaaBWjHPc165QgvPDB94M58W7C1mvj8c38UWyxJMBYJarcrQ5hmiSKZNYUCnQSNmQY9Mka8SWkKpE5",
  "key7": "34BiUtxi3tzdBDExDon3c6HniWyweLfG5gYStY8c29iUNz4MFNdTHycGkKctwJJqm5fP2dufFc6LB7qo7Qxjtz1E",
  "key8": "5nLR2pow5KtoxaqxSvhMUiuEEpCc8iQSy5KXWxWf9E9Fs7VeRQjLWvVJJzz4HdnbAjZsTGndEoMxg252W2wg92an",
  "key9": "3wuuFtcgTEeaiuatEKgP1Z3h5tNUgXh7Y5sQiiUWguZSX7JVTCuVDJTxtAhd1aVTSzbmcmZNtUiW7E6e7ZyLxRUZ",
  "key10": "3iEzEF7mKRLVQrRTEeh7F7XD3qUpxXmvarkTkvFd4ZQYA5enynJ6UL59WvA59VmcfHPUyYuPs7Xirc3iu3wBLxna",
  "key11": "4u5MNmRe83b99YChCvsfF1FMB1qh3ZiMD2vvokjNJJLfZKeC4DUFBEzuETiCpfGGjsqJfvepSL5jYbNYsxuAkUKu",
  "key12": "494FrxC2mjW4gfFdsP71spFqBzz9W2rXKbk77CFPvi7F4hgiWF3Kdmm11fcrch8jxSK7F53N8dzjqxQcwUuBsbUa",
  "key13": "2NVLb55SVKRQxfd1Ckwq5EWiZWtWqo9FyqxKZsbVsoHXzkVSLdwdcnRm4EwZDjkpNvb58GFyYv88rzkKpSeC5TZD",
  "key14": "2Y6qKxU6L1K5fPMNpFLV2YKzdqspjxuYYMUX6KLfbouu6QipgN7GHgwCvDVj1ecChYfKVAcNTFofkZMo2D55jn7N",
  "key15": "5aEJfEjpbrXfEVZrmPGu6b8iuEnSGPJC1nNwZo7wiaWLq7CSX8GyiDxEHekJm4pJd45hyG6DzjEyeFdwhmztD3pR",
  "key16": "2LXo4r5vcDWxYkH1LfEiodSEzCx3jWzHH2447GtoYqGLeFn3K3xnPizm6U4W9M99sQSnyc8GtdLthyNCkNDzkzZQ",
  "key17": "626ogiHfgG7Gqe8kwFrbq9AyJ4Z5kvBrQZW3xYhMQzqh3XDxMu9chJoTfBn1Hp8NobYdy3e7pJZ5PBfnhDHM4zDE",
  "key18": "CFDnsckCNpL4tNwh4J9PAVVu9Q9LzEHnq4ArpmoQA9CUyeSAtU2VB9QUkgjzhjRZsMmV2ty8JUpidbXE8rfMpLW",
  "key19": "4RCup5Eedn2HgjNwoDsizTPH35LubEfW4cT1jQDcAHRpSbbJXNugcJVzj72iDPPQvQ2b4PtYY7DcWwLHKa7xe7vx",
  "key20": "5KcvmV1wCwEs2hL8WNRRzd3PSU4numVRPVPRn3zkDoYq7HAdt7iP5SbEn6HUuTfH75F6rjd2m6paLXkRBR459wsf",
  "key21": "5G5WWjTyxi8D5AZ4hSYvVVY851uC778BtgzVtcADEDhN3rKF7mputPB43mePVhUjZCtnAEBoq2zAfEAzjHQZDHJb",
  "key22": "PzdXeirVjF6K5WsqWpxYs2H8Ueqco2mWCqp1NyLeyPyg9HPMxqiJ6UBv9guzrbUsfWvXCZvqrXBLppgSZkgAoZc",
  "key23": "54qXZJR5gVCGRcAm6mZ3jpeyZWeuf5YcX9JzVDQFRbVB5WLi8S7tzR3THGwyLeFiXoe4cCanUW4qsCHx8v2r19G5",
  "key24": "4TqpEFAme3eDx2kj1iP9KiE6MEUQyWaR4fqFYFV8SwZrUyjrtDYZi4DYhKSrAPNahKyTsk8YFgyWDVygsLXcPwWS",
  "key25": "2Jf2YovGPkosKNfRcSj8RknqGkRHKC49qM8SN22d3ieJn7ULoDNnAGCwGEDvuZkuK7Uad64pZutJ5QPaRNFq6tYN",
  "key26": "2Zv3ssVeSfKSRJX2FE6QKFcEdo3qbbhwKCoPEgPqL29JibFuyTpMQHe2HbGgNywh4jjrf4CW1ebF7VEaXmRg6tN6",
  "key27": "4nN1GGtdKZJiCNd8BF2kAn2xreZ4xpfQVHjMTQuvFan6yhvdiHE4J1DFSMb4dZwxoxr7zStiiQDdDpgT6Y77sVtP"
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
