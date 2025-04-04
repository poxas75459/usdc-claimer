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
    "4e3r643ksxezyeVWe6ewna9oY2uQ9fvf29LWQrrokNG8GXEZdAEo8BAjnFfz8XVActhTM5yWuetN9Eq5xdEUYc3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "igPyGss11i2cry6csuw86atij29DSjt3dvnryMaqxdEkLL8uNYMEMXxrxPFt1D3T2kmSWNUwcBM3Bw7yBsBEXmA",
  "key1": "4EGqX53PVSdPMEtPxGpKtth65WsTjuC8kmxuQg4NzjdciFPjbqh4Z1Tfdofuf1XLF7AiKSzfqsAT16X9iDGW4bmJ",
  "key2": "3sANu8ft6Zojpp2AtLwZFTp2mZnREABV69ovfsZH6mppUPdQjABC1rcpKmAcbGttXwbbntX1gQsRC7JPK1sxNmWR",
  "key3": "3XuyiqE2uEtazH4VhYTMsasLvbDaRpSeQ7HX8YDCr7uKkug7o5E8fuwVuSiC9JEPnxSWr7WKPQjqvqeRzWdhdVsv",
  "key4": "4S4n655PrUipWLTeJZmMctQURzfUFbM1TMAe8wAuWJL2ebEYfaKQ9EqHDm8PAPPAwQTgwoKjxfnLeBBVYczed4Ez",
  "key5": "ypn437RdwUSjx1zLBaFJHrh8HordSj9a14LhrTjknhsXLNw1o3p91Px1Nchbjw3zuPn7TZswgbWXe15cwgwetk4",
  "key6": "28ES2H948smqqJ96uYbYHpQgSQjyix26ibkbGGU3FNY2U7vBs23XMZz3qPJmz76ko6bAXThxpo5YMq2D7ZmXm8Ys",
  "key7": "21tzT9JDRE1rRsAvPVqBipFiH6eg9psNjTC6WJWBCMHxXbTvLVW5SKf9wHHPjuuiZp4wP217KzUBy57r8pkGjZDM",
  "key8": "TtevUn1jg9ctgCVyd9ZFGP8FACmVfjkUfQwLE8w3seGBeAgHEAePUtzVYournEfqEMRhWBRPFDFDeA6MPEKF158",
  "key9": "2weGtVUpanK1u4sf8Dbdeo1EQ6KBF5jvWEmAwMgLJ6M4HWuNNMsnEpMgMBooAkGjiaipZKXKAz4n7wvdztPZ8RNL",
  "key10": "C1FtdbD9puLC1CDriGDDeUyccCK2feMLYDLfPabVJVqRz27svpQW4ezH9NaoG8KFqk7PDEpRV8N6tNvjk25awsa",
  "key11": "2itiJ2g9eN5dXTRgs3QjGYmA8PpqKckkpxrgh3hTwPi2K3dKnmBfLJ1inUweRKbQWEefpfMPknvThmPNehQtkGse",
  "key12": "5Witvsvaig6gNUXkNXfmc7GWsFHavgUSwuTtDwB5NX4ode6Rv6JGRso3ZbHLkG8zwKVMxHK88ysboxyWoZGwiTxB",
  "key13": "2xJLFG4fwAHJtMJ8YbPNG19z8BDqMiDgEB5CjQT3t8JYuzooo1XvcUnRs9A4FACmVv4nKA7eMFmVaK6wwMrjFDF1",
  "key14": "5xL65RLxVDaeK9Dh39wfDs9rXgsjVQw2bpZf1BjnrbjRFvUc6UfkgCuwaurhfmcawv88AD8FeRY2a3ZJ4SLTq4Sh",
  "key15": "2iZVGMuDeyVu89cGkbFxgscTfmBkAqhyJ7qGVb42Uu3MZuxmDeiQCq9GFNxT4rwJFH9Nd64HQKpPfCxs35VCH65F",
  "key16": "2BvQzvkqSBhUWFCUJ8fgnEkQU2tqjFtPjZQSQe6PhbiGCZDWJLdVjkLeGNX6jcc3MPiE6qbKrMcX3GrCezeh15xH",
  "key17": "3728hexs3r9MY9jLzYrun4xnq2ksYxni6EsvocCr1TvvEVeCWT6qQCJBCmowJvb9MsPe6QQRcsR6JCEUg112JhkC",
  "key18": "eRS9j1iuhPNSb7deUnByv4st4dQCBDDhi9M3mejKU6TBbhdK5kAtXkdc26bZKKqjDNh9A6KLCdbpYZbFCpN193y",
  "key19": "4MjX6oACxJdzHYEgWDeo7sckcbvjEWU66w4dGaSEw6LrWZS2YwfvtLhS7WHoQRgeH9KfbdLqZYsrpkhXo2up6cTG",
  "key20": "5LvCpGqxur3znnJiaAqH4eH5H7AqA3cihD98W7VBHWdVP2SJtDuWFzzbmm3gZqikpyDMXK5N7sHAUUWVFE4oLNyj",
  "key21": "5S5J5r3wYXJYDdRqCrn4tR6JwBLiYBknF8o5ArJTMJaKgUKhRPyxc933AbvKwxZ8Qi5nv4GW34oSF8ACfuMyNwpk",
  "key22": "GnY5scNwwEZ2ZZ6doYmMrdamXTVKCuUGKLFZacTqcgc1eraeAYfj6kK5pcoTCzhyozSpzvEkjEKbVUMD3V1g9Wa",
  "key23": "ANEmZn1bJRmktaSCqeKFQAJrETzFuhTT9CQ2rNmjGeu7gy97TxLRG8uWoyBHDwZNecMvrL1HZ81nWmJ2GoEjX3o",
  "key24": "2x8cefhZawdeZRRY34VMjS7b3CJFmZnjtQw2w8XjewLZmTF3wnzRDSoKsEtZ59W4aDf16Lty9Ut2B6eLHyjPArCx",
  "key25": "3uzd3bZ3EJ2vSG2X6FTA9YrSwfJfzsakfV5TEL4v4yVrr1sLFDuRw8ZhPQWH42npxwQjuonhA7hqUvFjbQTWeJsY",
  "key26": "3PGeBdhLqMrT7bmdMBLfcCexSjqkn2wm9ReE7PtroGhrcx5i8wD69ZmusdXTameL2VFKYkDuYGyZpzUzuf2KST2V"
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
