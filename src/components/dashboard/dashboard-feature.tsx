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
    "2gv7GX6GcrqVs9bFMMtMg8H1STmc7TbHcG2JDaduyLETzNx1nbZcSNBUS2fReRZmXjygwhpryecHyqjyCKwLerkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inyZH7UDRiBmK82UXW6CfH6Gz8Ww8uk4uKQTXQ19AVJFLsejmF2QyLS66G62K3mmaPD39Lpj85KKtYnUtTQEKsd",
  "key1": "8haNVZoGed5saVRWPtygD7TzRnwjzX4RiZHmxNiGCwbsHR3bKxQyiYfxNZocsNvZg3mLpUBMZ9HrsPLXeReYzC2",
  "key2": "5gnNAXxXt5rx5jbsGpszXbeL5Hs9uwF8GLAWLcJMVJ1hC4xZ3ECdocmQ2HArw5YpguVdQ1MG6rYnpspML9RQ9oXQ",
  "key3": "2Fg93bUiWXNjBaxrLFVwimCXo6CdsAyxEnMU7j3vB1H2PNt6PYtVtGPz5zEqJuys8YQEmyJMnUt8M9UpNQxzcFZ5",
  "key4": "5a8L2L6UkxBKGqWRkQqNc8GTPRdnFX7yEuY2sYWDf3B5obdu84spQHXDD2w2P4RwR7y2J1AUbTmRp9P62TwZLJvc",
  "key5": "3GBm4PZFiMgGh8BXrbP2LjEbEXzLccmaDx4kLRjhNkRdV8xg6rgLTyMn7NGNTWhYKEQWr4MtKxMBXyB5bmXxSygh",
  "key6": "484KAmc6sZR5aPQ8EvhjDtCNtmbbibTUgCXC9RuxQKBG1o7LhGQSc69ERojok8aUk8Kdn1LPGfERoLj2AUtcLKWj",
  "key7": "3u5qtAwhNB1sr7c12ckKGY7kLr8cpNaQxd2eANYycB8fTvpGAWoUGGwjXvRmCbkPXCCGLTWVcejgFTbdUTvDdD1X",
  "key8": "55oTmXfqYZpwS8DqHsXK3ATmgPCqnNmzuVMw7FFgPsqKo5B2aE2NaHHpR55oszWPt9zeQswUfNo1QFmFQCCTeVbS",
  "key9": "2izFqgWtWoPW5GYxfN7aV4MnDyViCpwcJnAXngeFaLHkD9nKxNjgztYt134LPYiSgL2DXS9nXvVe2kVXbES3hUfd",
  "key10": "8MxMR3FMXnaKmYRvD4J1PsKsnXQcVqRAt4qynSZFMPBcapQLygBHGbGZapXLCbL4DTXFQdPhrCPSzL6q6q7Me6L",
  "key11": "3HT2KEqutwUnXThQ9Nqg6TveuJqYPpXumiHC6Dcbg6LEMPmpr3w7FAZQBnPDXfpEzH8r8ESz6b2BTGhF2AuozKTh",
  "key12": "5c6TxyNpU8eMtFc3RrNKVhRrdDj7zxEhzHjWZMzyQQWxKULrUexzHDemghrybmrMJqd9JtPW8Dy4Te4Y9LKv9YHC",
  "key13": "5GomB7sDA4EWUv8UvX6cEjNBsuA3LLXh61beboAkV1uNynzXBZNRMxF9Vp4zomyEjp2dYTdsyFE3bdf39Paye92P",
  "key14": "36xZVACJJcTS9wUGuR6NxXBxxK4PCBN8aJLqGJ6JeRoXzXGVAibSEMzRuD6GFWKqgMMo2NkyBaiPP8b33pxy7mcb",
  "key15": "21mJRHsrzPvfQ9z2VUkmpLxrhKXzeueH13VFe8Jfrhr91gG32qty3X4h3W8MsJGVcb1vDVMGMHhDp9UWRZDX58CP",
  "key16": "37WSxBVftawrrvD3bieG6Sfz7Rk8PKrJcAU5aN4u8FjCsgxdBjTBQJxLyJTdThBx6U8CMgjuKULKqvzTmpXLtjSQ",
  "key17": "4vKudzvLRGf5ZRKGjiDLNKPAf4krAkEXhtHakqP8DsNS4sbYLuDT8MXU9zNevFYfALokyBSXYGSJwhyU9LgkcnVA",
  "key18": "5tMyMtz7CFx4qTNiEUEF4cYKmAFLQ9PaJGNraCUmgRZGp3u7nbdbyMEcY5oRBZARBNWRLsgDmtriUpJ7z11BTpsm",
  "key19": "2AkiTceKW4RzcHW4ZNaYbQtk3z1xAvNSxFwHVX3CsE6PRgDp1ZfwRVfXxwUcM97Nn8hddD9coj6sTWLs5ULx76xk",
  "key20": "3iK6v2ZjHXFzqVVuvfyvfnvEKhEqHQeDJhatitgkTd1JYD25TjgNaGx9kqMB4q2MJxqFs3HxgrvLBDhJKno6gsTq",
  "key21": "5H4xJbs3k3fNWTS9zMyZmpeRZxBw5uyoms6bKjwfriXHiWJmU5MG9pCsE7dbFZuujZ5dT2PyKZHBfbkaYB2XU6AT",
  "key22": "4cwFgfRvRxmEox1UJnHqmtAp6M55nD1k2bh5o7heLUsnPkVFCWYbhndTDcQBF7dKHwKYpxwZkKPBLScNYxrkZLjz",
  "key23": "vZbDHsWZRgDJvDrTE8EuCgAfn31d8B73osjKGphouwJP6rrMStj1k92AP6Yg3xhqwsYrDvrLXFwJ4see1dzRVSM",
  "key24": "3RsayJ7UC2FfkTiprZUm6tayc5VfcMTxbb8DHpx6Y3YVqFhM5PztRnmC8dBzRK5xcsLrm7tH2x5rNKfPpt9DSW6T"
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
