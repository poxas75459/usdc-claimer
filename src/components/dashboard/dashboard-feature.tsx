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
    "2e9bYVEtMEnnfuWnXCgk8mUDURNgowaRNKs7x6D47YxYztLwC3nLUctiP4wBGH9Sh15ymmTQoprKJp5nyUAXRabK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kh6GK8JuiDmoqeSBEDPPRWxYQfCSMzACNwx4QTgE929qoxUV9n8QW8akUiChgtSjy42mHotHWg33dcoqF8cHu3n",
  "key1": "gXDTr9VNanNMTBHY2Q6CeKPS38LRdRXCxoRc63BmhRhBjiD6WFyh8pgvzBUytxLeXL8RfK1FSR715MXwCUzrzp9",
  "key2": "FTr6Tub6rrF1M49msFyVuEN4tLAFNxmSSDEAcR6ChYRGNPiBf9rc3piWnMaz1Z4NEQyiRfaQ2xhgTeW3yA3tikM",
  "key3": "283b4hKS4Kwr7HHofpBBW7HFGVwqmSWx3to8biv5Nth4NvBs3c4HCPZ9PhdqR2194QLPEqbA56JcE39Mn4R1oXa9",
  "key4": "5R9XZwV8k3MYpvfM4D2EePk2ikZGK7s8fxJjj2rd2a7619qkbJuKbYd94tJ1S8HELNbesfiSr5f99xNcZzVk8uX5",
  "key5": "3QbwohecGCbG4mjWRZARwrSt4eMxbHphKxs8ubao3PqRHKQGSFZih8udt4miuyvBjq5hLNpRrXCXF1gcqh5sQxCz",
  "key6": "353296LoEk7UbVwJwiias352FwnzgjmkqR7mC6s6DvziReqSSpjddJ4NnpaFHLd6ck9A43MVBws6BkdBazShuAiD",
  "key7": "3Hw7sM9icy4bzCLKNVtH9LHQQzDpPnFdbLa3ZZgpriR1TXqXpmZaiv3evv5MTUJnan2TMBJvq3WGHXQfYnaMa9yf",
  "key8": "4vESa4yswwpNLNP1jXoATRknyN2AmrZkoNDLTybav3wyy1XW5iB8tRFFVjAjV9kuMfRMeA1iGcvVjidzKEj61Nhc",
  "key9": "3sPFRspNLvXVky5eSbbR64iYWHjdoaDRVqMxxUBvuZzMAEv8rtBzB9e6LswAFGK4MiTKXdExoUsTakXGXmTiNUtq",
  "key10": "4JkwppfcMPErVSceUvrpZyWrMybKApoyeE8U5ikFLpfufRt6SjMHJrhU9AnWWgWRmoTrUZfn7cCD6UhD4bWm9Frj",
  "key11": "45sJvk2dKUTfaec2kWEKmoUfKyWZmMvmw6Cpm4N3zApVuCziw8DFWnFZ1TtCigXHVmZdn2VrRp4o1jm7mmveeB8E",
  "key12": "5y8VpY6Hrfw7LpB2SayePvCfuByAtggKE4rK4EGpZpVkyMVD1MwWPN3XJkLmjksAB5AkixspwugkYm7Rku1iZawS",
  "key13": "3vKKAjoprwbmisffXjwBneFUtwFjZq4cQer51wi2gu8hZcQ8whYLrD7rYAXkShDB49yuUa6HpyUcVg8S2gHNZuNy",
  "key14": "fG3g6AkxktAe16gcX5AHxUd4oJEyHTA7hqUka2wcXBVifDpNRWNetW7A5YjKWzUEqyDuMS41Z5GDZvJ23vH7kpg",
  "key15": "4NnRYP8yRVXWZ8ncgHcfmr87aQ1RUhfxHTtJCSxUq37C1AGd6M4J3dZyRgiudRqmYRxXreyFpFXxZx9qTxCwyUDQ",
  "key16": "4dLk3fbruB3XYVvsNBXe6hpG86tqiCo86ZRzRTVoWzUnyUTuV7Msydx3Fhcm8E9rUmhhJV85jJTqG8apQyPNSWd9",
  "key17": "4ZixJPHmQN99i5ZHajUm2PTYBRRTBRhgEDM4WbhQFjAWy8pSnkRHNn7wcaQSg5kSwBPFnRvcCz7GQpkLSD2JiAP9",
  "key18": "ydxWSSNk6x1dHKzqo4cRBbQ9J2C5WUSiCdZWTcXHCXnymBvznZqtpxqTh6mUDPeHdGSeSr6RvRFSJoJQxiF1upL",
  "key19": "5trbfbaTi3D1LoXzxZubpmtH4t9Zx52oVq2xEAVKUifHK2ifbpXwMsV63fSQfFi1HGM2f8Qx2wHJzY6fCyn77ZQk",
  "key20": "3tgms8oChzHcAUo6rv4PuupTsnWZtRfp7fisGRAHqHQg4RH9Hm244Vzmtpqcw6o646vw9q58ZatNqeyGZtpu1wKv",
  "key21": "2FBRoUysb2FgPQmR4tinZvMiFtgVz3dxEtKYL3oykdM4HaPJMLi9JZz635WhdXjdu3wiSUQmeU5FVeYG82HC4QP1",
  "key22": "61DH89AJS1rpTuXjsBH9a915aN83NFk3673RSLadayAbCd4nt7RvuPXRAKQcUNEdmJVLJYUg9acjE1VYYspgitA2",
  "key23": "3J2ERFUbQZdfzXH2k6MrakBHes9rE36T5CeKmxxfX7NHej4mt22PprbrdvJK4isjSyCec4rfX6aWMrbBRxahQ2jo",
  "key24": "2ZVdMvtpQfabesqiGTKETrvwqDkoNP54RMexJAFCBx6ghKFZTQGv4KMmSW2zQCLSK64pibzDuLuccUp8saTvqGCT",
  "key25": "3VE21x8T173BnRAAuAprFkR5gCuH35xEkLH2utK7aCbfDf2u5MYLx3ktPXEomJgL1mq8TYPmxKymPduAHWMviiM3",
  "key26": "2tckKdrm41gUxiTxyZMuZi1JN2pDXBjjQQxAAehbhBKEuYrRPRWkTRQwXyzH3HerVNnGNpXyJEkVT15K2a7Qg4T8"
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
