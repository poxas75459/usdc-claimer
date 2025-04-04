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
    "3URWpdMG4Ya3B3RJFqfFzof8H6LLonYjZ4bC97Qyn8eHHbWZjFcgxvisUeVmeC9mf1zAZKMm69BVoLG3aR8cZNWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HRtNR5gU6xyyTk4Ha813vovZtQHYCafdFAkk61pkXF9QUUoMTCVTBb1wE5Zjvr12r1mZRaLYK6YzLQc7YDi8zw2",
  "key1": "5Xu93wAruRdE5r8Jz6pdbEVaYvQQs5f7CJJPMkdfbyMWRDAuTGnqieqrLAmmy6GRZY4QeQ2UyGsvwwFgMNFdNic",
  "key2": "5QZbbWwHxAVE43n8KFHyrnQMZ21vgZF5SiJejsn1ThdHHNRxpnnSZdD7UfFrYYXnZCiFU7MeCtJHpYdehpbJUUCP",
  "key3": "4HyuBqm6YH8FrDcJ328AeGqr1HVTxW937V6Dbbw9sQk2iQYBkpg2CkZPZMPwQFQWmQ72po2YRcLS36YXTNtUJ4Y8",
  "key4": "4mNybFNG6Dbtv1r13edfjMvXJbruPTMhbybKAA6Tugkbkjv1E7QfR5kVAsNWpJW646keSPqryYsqi6hd68QV4gaA",
  "key5": "8idKqFSkHb3MLJaAgqVfjGqFvmGjvnDjWVdhuYDaG7SA7sMVGLyzqkHwh2ZAXAXHedSLFWYNUbDbLWWkqxdUp6t",
  "key6": "3VyCHd2nABRFrVTT7C6wbRho8CuvDXXLXxohXeWiZoqP4MFGJmG3BQQRHvANXqGDTJwsXzbYAGofRhZ714x5AWic",
  "key7": "4aMzBxpHXHjCewE63tSJaZejCeSSTkcYFwsJd95E9UrSJ2HMcYiUbs26qij8mokWJW98YRy7ng1jyoVBAfWKZvpv",
  "key8": "337gGsPr5q9Z6HgZ3iAt222YbZmagDtXR24QrhKt4L6dxmeVoC2k2pzpt6RUraSyds9tspR49XJTJx3z4qXPEp5E",
  "key9": "2KRXmcCPqioqMAKW3tNcAurJeCJhmLynyUgFVPntbNhaNfevxBEk9X1vfusTuL3sMYQH9GvWG1UBeB6qnCqKuiwm",
  "key10": "5Krh6SmHdka4zCwjWoJ1NSapNTuWSH3pvq9HjrLnsTUbtCK5Wt9UaTVzCry5BjxVvbPLucxGDfBeSXDtxoZ6Zubr",
  "key11": "4afDSkwQSq8pXYqmCHX9aGwYwZ4reEUf772AefehhaoAJ2skEt6aCfsUNGCGtXmBufFzZvbkF5Hj7QfJBHy68Eqv",
  "key12": "4wKu7U114pAYXWaDPTwrzZr3kGaZjL9XW5L2dtibaN5s6JUqJfJ3afHh9j9eFQpWrDijtVwuGMYrwi3tQSVcK4HQ",
  "key13": "4aXj6XF1EH4xAwjzeSrokQQ8HyMi3UM7f83EbN2tyDrSNR5BZxwkmpUthezgpcjtozMX2nv3AgGmYeVQciCpA2dw",
  "key14": "3t8p9WfwjB6Lr2P64E5wYVELwtZcnjToEX8ssEpNWoQqmgwpcfQtPT7VBc4byh3xQ46DXgem7G2KpfcqcHhQYo2y",
  "key15": "3qPYH4TFXxS9SjnEoeKBQQ73SnQXfhEnMidEWPhsxKud6vibfqksM44PjaJVmw5WYdjQydBRqCWjCrtvnR6eHKSX",
  "key16": "UgRaZBpqPW95v4giLpztvVFSx1de3RSqTpbU5xfZ8urwNYuE24owQN2bQ5kZh4YFmAnqGcU5qhobNYSAJ5Wq86h",
  "key17": "5LWz5dEqNkb6EWj2ETS9m5ZJT6d7G2ShoKq92ZCj7E2wpSihu5bEKQe9qvWuZvrTdxNLJyHjiYxZZbyYxYh2EEbD",
  "key18": "2xkZpfi9meQogBR5Ud9yWW6pQRfuegmPnay6GRxkdo9xpLyxJz15XnFEEmdfYbojEYeB9H7G5Gc41VmqnacBg87j",
  "key19": "TFzdzYEPzJVFjFesvw7SDpvcp2Ahb7fwMmPJFjU5w1Gb77dAs8J1QxmQVDSJGogkSL4guoDiN38s4aMR5ZqySnR",
  "key20": "58ufzcSkKSfD3tnrveHBioguCc14VdcGphN6AC1uBSQRCDAQZecBR4ceC9rKWPFq8JzkS3RVUXqv1DsgPzzRZSNX",
  "key21": "4KE8NKF2NwiPM2QnD3JaVdYU69Eop2tRaVx5LGkqcaa9BMDpc8kjkEnQKJKcfa72ifXKPSvit35Hi8NneNPn8Qaz",
  "key22": "fSjnhJz1KxLjm52dQTRxeVT7owRNfZLXKsSYYP53JUYPo6Dc5MdrEhJA1m7crkA4urkRUZTuZ1mMtDfHnvKkRi4",
  "key23": "2hbgvPHJEgzLmwbHmyiey6LZZDe522hC1WVQby4Eru7hEF9yf6Pfec3dZVtDgKhnNH3dHnBNwZkqNumG49DaQCcq",
  "key24": "29zvwPRYZJ5r7AUvQXT72LA3ZtK9hetJBZhwCRQNtmAuvK4QS8xaqnqTk6BJDvXNWaWuSM24C1zXgnWf8fphtNni",
  "key25": "5bRvejYVHonCWNMp1svtvSZnJ4VxZy2fNeu4GoY7B9bVwaQu1wzPouqrKx1hXCZ92DFwF7dc3XozDWuxBhzGv5jt",
  "key26": "28TQU5jCMnDAWW7bDGbsgBQ98BAvmxcd38k2MUuagriR81AJY3dc2xev6mScQCynKgqBu97VD6M9F4KrdbcVV3dr",
  "key27": "rG5Z2qAEV1MXBsiAA6ecJLqvE34Sz5Ggyy1B9xmvY4LpM1848phrXX8bttS6ziUpZTJgDFattpkYEJww9GYNbE4",
  "key28": "3E7dTWqj7XbSQANwmj8gPwvAaikaxKL2ZMscNPEM4f68ujvA3bd7YvAc1ffm9qEbiH68MVCaNoeqLkr3sGWaNTKh",
  "key29": "2rFqstfBforsE3iZ4iZzxc4mCng98Hb3PR3xSWYM9Vgudbj5RJWsDh4px73Kpar4Cd652gJ8YTSZ9xccGZACA9xb",
  "key30": "LoKzY5rxa3ho6MqiJrg8emaRQQoKTDg6QRHMFVHKaU8kNwN92FwxBguZncNSbs6iN1twHPhu8VoJWRrWn2rCgKv"
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
