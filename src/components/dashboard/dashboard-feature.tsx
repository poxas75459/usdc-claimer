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
    "2hUHSTKJQrgLwmxVryNSzmdu9j53izUTN98ZM8gbxNmKyY75qUaNRYJrdmePSAaNiHsRc3gGXSyNMpJHc7TNsAtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EBnjCYYPqcegi87uLdBVxfntBcsxmEttnxxadRqZgB1jmfYB6oBDfQ4gsQ4sJXXv5ThnTs6dxuhVJScxS3aTfv9",
  "key1": "4EiNiHmmiPApnUoCXQrQELJ5jYeQ9jwymioLrTSZp1yEpBnvaLTueCKsRz6uDnuz13wTY79eNrS4or5zfEh2HsjF",
  "key2": "5KTyWSM8UDqSzkbKz8i5zhUExiPrqFbGhbK6Ea3HH7bW5Vito9wAabY6szY1S2xARwhTmUYLbRMTsFyNHWxnTcoX",
  "key3": "AxFNJWLQzmoARQpd7891SiHeVPuMPPyRB4fqYoDRCRm74rhPjwptqD9q1NuYaLnGTXerAF4X7i4wjdnbZ5x5Kb9",
  "key4": "2mrGg2d26MMw7yTtKnkpz3xxmMJoVkcMopBQfgaqbBv6jPMwDQDtLTkfcvxTRDSJnGTN7DJoBUHqytmMxFiYx2eF",
  "key5": "2kb37SWPxdP78B9fhLGxFivuCBgKMKxZxyFgAC6QJjSWqkpT1i7YxqZ3NGu7YoUD5PagFBiGx33x14Sjk4sWXKSN",
  "key6": "3V4QXTH8ZrAuFsFdZEtkTiWrX16eENjq3nEGiy8zTaHUuV25ZZ2vi47mnhFqxphLqo1eHUQL3at3LaAWAhAtNCEB",
  "key7": "3s2yQb7fHrySNJt3cAXs862YGW3Z8hHL4efB1iruj7x64nrmJgsdBJNk19kVFwQJj6eGVte76VVV8TCvD5nWQnRa",
  "key8": "b5h7irk4AbAhXxGSUw38jSxXFW7TEUTD7qn7UQhGeJrDvc1EwJGm3MhYE56ZXgbrTXUT3igswph5qNXdDP5nqQx",
  "key9": "5zpJ2kXBTrMVi1jBpEktwMkhQZC34n7tLdT87e9kS2yp6D5HrfBmq17MkApuZwLw9zgCXSGYdsx8jv6sWtukLRV7",
  "key10": "WrHktpbGHz4eaSMPmvvxWWXAX2GUaUBUVVifh6NsZFBR2B9ocdVJ624kUVqFAdipu6SiDYmNL4P8ZvxUoMDsGLo",
  "key11": "4sXLzZfkuWcrYLtzH79fB8Wc5398aCUA34VEnAmiJXC3hGbW2Tt2PhAEy4bSgTnHtdwwzpLJaiBwENVkrEJ4xzh8",
  "key12": "4zQ5SFeGZwjonFKx9wwGvPm7kUm8wUGcCaJaW8YMWT3qpjJ2cyoUMturxdgLTGV98MdScdZmZJZnJphWre9utsHz",
  "key13": "SmBixCSv9bLEx4N8vfBrLgzBvGGkZixrs12ZRRjM3KWHeeWPLKz1Hd1xYzeniiejBUEpG2L5C9jhgGNRoG9nS93",
  "key14": "j69HLoXCP8uwKsK9juiUFJxuTrcnJuiftNRNxrx3hjPqYmhjBTTPLnuUjojbpbKZ2ZuR43qhpJMxhPXPuabUBvJ",
  "key15": "5VYLkJ7MTSHCqyRW9rYBKUTLGJC9Va5ChA6JDNTAiPe3avrNTMyGjFf4HirqmYaCVuZ3YePCov3R1Em1mLVVSwvN",
  "key16": "tMEBDspGhPYsNGtMx9qjesYQ9q5uWNGESyuGkj4jgBvrJ6uJ5aERtWWsrWjuRD9QK3WbVEpHRv3YSXmqWC4izhZ",
  "key17": "m7oh9kDg4R3MEnA1PgPfqugP8vHkSRh4qttBxvybYbBQU8sPHtDGd1YjkAzdeLNbRC5tsvoxcXGUR6Qwz8rsmF9",
  "key18": "58hV2BpU6LLtgxdEwjkfSqM65uAfy2CW3CqtXnoCXStgSS95wbTiwSFUUmVTraGcbuYxWi3MSY1NH62ajjm7T7Kv",
  "key19": "C3vf6coQSMGoTPYsEjTZjpwxh9cvrRU1yppXEqJmBAjYTm4xSsZrL385xMBxwPxB1DJSwh4poi26HoEgfo8EbcZ",
  "key20": "2A7bxX8Dw1b4bXnSAnWwfsxyCPj8MX8ex8pUVBGtdoUUzzRwXGakNTxPHeNW22sQP7dCzH6LMUbLGuoyWig3CVgs",
  "key21": "4sT6oCvXn4KrNxVksMd4bVefushJuxkeNx5f9vXPRfbYPbPNMFsqY3CbsKBSVdgVAKvdjNANdXDezDanxSgX1nWE",
  "key22": "2Q8xmrArZU5znM1d88qxsStexKpPHntP6PZtfJhbFK5LvDDmddNEJneDx5oUcHvQarCn4sqAze9m4iLzaiktfqnq",
  "key23": "67gbvSM5gCyo9hUoPgcpoWbgQ3KsPcDNkd8HeDHFFoLoupgM8zL15LLThAXyaSWpTShfDf67GvfEtJt6V8gYEX4w",
  "key24": "4ggTtJSBRw9AKcvwB5tV2eoLQJk5uWbGc1LXahAhZPozMdZzMPewqVpbEK6M2jzAndHPKA56N4e9PacG6ArzhoE3",
  "key25": "3LK4x8YQSVZSVohkGwFvuHWgpuau94EtjzAK7CEv3Ddd3gi7Fs3FgApE16DcZSmYGNf5FrZdvMKa83FrRdMspz9m",
  "key26": "5Yg1f4MCEUKRE6HoVuJEJpFcoWQAmUXYhpgPdq2CXj2JANRipvyT5dkTPPCipwPbojpC2vSSk6GJ3ouraVtYdsuZ",
  "key27": "4dP4HoMjs1iD5cdnFWweU4EB2Fvph9BRiiYrJz59RhFFaLXPAGu5M2WbVarvqRmsuGJQskais7jEneNjU9Tb2d1u",
  "key28": "HvqLprhkKf278wwzQZfwFXht3UJH1nwPyLu8Lmwk8TjR4yyQ3zF1CsLWBSsKbgqCvWK8q9MtkqF5EmcugbknygW",
  "key29": "4dyfphXrmtci2N4TAQDx6i78vtTuuFSvm3Y3UrSYPbwQ5gxj8U41W2Zhu3kiWCiZbzmWjEdd4QM7BR7iE57w8zv1",
  "key30": "25CwXcECafu6S7GXYYizsRsKkkdvLBfNT1d88okumy33NcEJ8qgYUrsMTL7484JJpci4tQwVucP5NUgjP6tLYBFR",
  "key31": "N85RGcNUUWSN19jVTJWNA58hFPaxwU4EimPqKVkpXrToiiLfjQrxFzPhX1hBMocD9qQPRuvqDg8r1a7cNMFVHbV",
  "key32": "XX4ohaAs71KYYdzpHZXm4Phaf2hKzFQ92f5a6P1RG1KMmikQmvfz6jPHBKyLFodT6LzdaaE4xJoy6oQLLJrmaLv",
  "key33": "3D64QzCrDbCXqZSReGx5sMYR9GtLmbWyPLrzbwSZXQDP3shvsknWripVw4oUfE2eeKwNit5AJnZoQqa65p8jxNwA",
  "key34": "2QDxVb8HyLEgJv7G45LwwUvFMQWME4Ueo9QXmtvY5CbLfieW4qNNa61Wt3cPsAsvAmA4QTPH5ZNCXZ2YPoYFf9H2",
  "key35": "58UscMSTfNtNLMqmMRFRvxSRJvLMdaqs3Vh3GwX3ZEU32z1GqwuiF1eRWuXKb8z4XJgg7e2qQQS8TcqQwRBqKx9d",
  "key36": "2EZaKo3ZjU2Wbc6QAoPDG7ehSa1C18NQ2ASGsbuW8i2nSwmmHjUtnxjWnFuVXcJTMSL56CiDg5vgZKVcNJfC6PtA",
  "key37": "5aR7DuR6p4h5AqVGwbvWMm3CAFrZuSftab7UEkQ2zUpk7Fh9s4Gz4mtPha5S4rHv2RaAKxTF2uDdbj1Q2aDCX83a",
  "key38": "e2mpUyjDMVf5sovgHCTYurrhN443W8qc6QJdprL5NjwSdvo6C61zfroX7F9P9P17qpu3saJ8QTNwxEqsxU7Z4hX",
  "key39": "4cfAoxJw2YfmPEGij6hNV5McKoGoL2d6b2G1Jvtqs6TeRgWcbq31T5J66oTmspNxEQN4zBWW4X6KqAzfhNmtmy3",
  "key40": "5bgvkykoD2oMv2fnX149dBiXamHYPotHookrZoHetTi7zLEKUpEEu1J8B1cQbvZRbEZVkBZLZ5Aq1vRuXdQ8v9HZ",
  "key41": "DT8Xo8mL3GDSAs3S2xroT96X1n798j4T26ifusHsHn9AWqg4ziWd8p69iZxcPMJevLRBzBYsFc8zfeVDLtrnwWP",
  "key42": "4N4XVihGcTKkhcHDQ2pLyP71vFb8go1gLeJhSoAMfokJYHRqP8o1eWEbZgWf2idRgjiVc1a9i262ZtVBdjj5rCRX",
  "key43": "25ZrFgeDuRo7ujYgQYTXUdnpqyoD2CVkhZbuYqmLboe3ZTaB3P1k7Dgm7dsziuCkTSDuzU85fbiWXFaooiqbDRw9"
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
