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
    "3RgUBfDw8tL6fz7qCsaiwvChGMrsdSQeqpbUv6feYtTjbBYxCucJpWZ9e5F8dhPPyq5DwGERFvVHBq4XXDr4FBmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8qgvDn66tU3vQkE99kWkVZZtDuzcx2kdaoaCVxaF1SLayt5HbJJqtPFvxZTKw8tC1T4oEjHsexEvjt8NJS36w8L",
  "key1": "uhEBsLf4saDAmCweJGvuPkdHQfKKqiW6gTotiG8u7UBtWKAzuxcThm8buNUMA8U3ePzkShRPiNhSsjvmNb9XAEz",
  "key2": "5QhPCoHtadaM6sasm9qmFTCsHf51h93icmdDyLNL4Sd15SwYP4Ge9nK8PnnW2s5sG1rJo9jXWQ87JtU5havjQ6F3",
  "key3": "2wkpbDhYAWwEXPrFieTHAL6nbsKuH5vJzHriaB99u1oPEtda4XXBU9UZAFw5VoYqGMhNBoKTy7uxaLMw8Djx9nYe",
  "key4": "2iUcsw1JgzAkFYbrbaYLpoucxwAgwEuddcsorLi48pd2r2UpAX7iQisqA92rJY2nKhUchAWCoaHDTiqAF8jH9bKq",
  "key5": "4jQzeKtdWAAsGzuMaRgkTUKiQpnbSNbmuDHjP3SXGwcrjgY1uMfMwYK2jaYGdJqG4FurSUZAxUU1ZrsxvE7pBYuq",
  "key6": "2kKQuFRwQL9riFYhJfWyX2FYPZxsRpJhfby7qaKBEECXZ8NK7T3gwgccx7Lnv16tUqeBuHc6K5GYsVs2d58fCKA3",
  "key7": "4k2SxYcdJ1zMrQvrXYVXWqqP7xp5HYGYNmpeq6TETEsfH46nCQ41Qkxr584pTPVqkdbYg76RN4vpboZXKzapnPj4",
  "key8": "64z9nJTj21byHXzLJHFamqiL6efnMwaTL77pyzRsuxL9NcXZQ8PhwhSNifB6fuERijGXDjRjDrmCfo5poS3mXc5g",
  "key9": "K3z3xRrctF5o4rkLK3UqnPa4mayaLuGvKAkCVZDSkWC46nmd3QnYAoStmw3z9Rq4K1ciuHWmJEVMGZv9kG9eFs4",
  "key10": "2uAGfbx2FBR45MzQErG42F4vphEAbNZiXvpszRL8BDo13fkK5An5GwUU6puvMt1MKA25tK8oNEmN9txTKQT6Tzyz",
  "key11": "3uUquXnpR39YfNhUzxvj2ZSXoQJQjQV467sXtWWNxspd1MJhRXsipT86xFXHRqg5pGkwyXX74vLBgPC9EeuqYRVV",
  "key12": "3WU2TxbhUrWLMEzfAY9xJCJZLzDf8SxiYhFEx7o4up8boCry8yUdBSF8M4rBseLPtKf1nD4ZvtpUx74kTg38hA7E",
  "key13": "JWLXtFd8NBeHtWR3gbjXy9QQSUVcSXKsm3v3zQzKxjXWZz3YV7H9f67DcnEgNajWPbSeD8rsqAm4UKQWBCSRssz",
  "key14": "3AZo9ujWxhLfgcaYiqbJB6DNFgEr9ouHXiBCFxbe1nmgoSWjTzqhFxrnizcbYeZfGxXjVa7yHZJjTQ7JXZp2kuQg",
  "key15": "2bwuyC6gkWLTsegHn9Tq9TnghPW4DPMEaNbkEVhSNsu22qCjwzYNQQhBz7dRY26vRFzXSQWFAxUhdfyGoZAczmQH",
  "key16": "2aKkLrqsqRobKBoJyaTciqxA2ryZTwRdEfGEiC7TwfYej57BH2PcC1yyLkQwHK1gYVzmczXNetMe8wr8Jgg9kPFg",
  "key17": "5ryTxqmgtVpbSpZs9YAP957LdkP4dbtYHm22kBvTamVQkQNcVAvyfRsGqJxyBwNih3SnDKs9G5wQXQoQDpGoo1q3",
  "key18": "2AuvTGLKx5sucmVoDVCnpCrvMzdTm3ibRtp3Scf9JzX6iekHuZdRaKME4kieiRqbZE3iYXZecjb63FQjrSMM6DKs",
  "key19": "4YTk8izciCEX3hPVt1v4QZZq5X9SzBogRQUGd6YGBDFt6UY7BNwyGGUtD6n1j5WBKgrjgvSfeuSdUPhUubeu1m9t",
  "key20": "5TSu3KyYuqXCftPVwn2SRjhrAkQASQU2yAw1sikGRWL7BkF5YYBHqRSgprdBqKnqZVpkDpuy2C4JfcKuvZrnJmSm",
  "key21": "5v18scmaz8KPT9uasjtVsVLbppyrc4h4ZeWVEPbBGCzB4ddNzUXwDmRfm93SfNVGV4HHpYY115QpuJQBtD83YMfC",
  "key22": "31RDofD6qHG1T7YtBnexY5RFzJ443DePUmRHc2J8YquLzyocm3deR2e6D53WNHe7Bw2gwT8NAVqHk5uoHAd9T75Q",
  "key23": "52b94oNtQy7xiqYSg92ibSYoocbSzdmquWYkPSLuU2GLB99oQdgBUTfqTtjxqcXevzbBbX3rojHj81ffzsDmpHwE",
  "key24": "JUzFmzjrk2HN3rxdGa6gAEpGoQoXaTvhzRUFvH4hp4NdLtZJwhwASfvSQEL7z3DUcK6kWar1XngEnTPwsKKqN6S",
  "key25": "4YF5QXUcqM7dJoXZNi4AKVSB2M5XCZAaAyqSLPKMou4ppctTdxw4JEGuPddJXr7dNe2t8TA4TXxvTZGpSMoXth47",
  "key26": "491R8SGY7PbW3nfpwRWwjeV1nfzaVSHepRFFrpgjFQ7V4wc2bokMiHchjpn57pr8X2FFUoX4L4snmeg73TbBb2Ry",
  "key27": "5XHfbmpmVip1VS9oDZaRuVZAR8hniXwGCJZPtCXHDGYg2FqumBDU5XpoZP17Gu46Y3KongShCfqzmK6wqYHANyAh",
  "key28": "2kC7RpGC25RpqZKPXUSWQTztyNpgBMijCfu5fxxPHk8KHYhUDAQ9z7c135nFykwmvomyujPzJunu9D8C6KDxLZw7",
  "key29": "4uahPb57qEzj4HFMSAHaCMyzeTjLgmtUeSJDBWzdGtEKkkuKKLZzZZZGbzYSVDHWWUq9aToidcohPgEDFpUQBRu5",
  "key30": "qGjuL7AqzC4gys2PkhQbZGpcfdbtj6EgsatHhaK83PLbwcdJm5szqEZNrfzAjUEkPjVev16pnKdtE1m53wCYcsi",
  "key31": "3UN7cRMhR4qYqDh6tgWfnrEdsZsFnMvpG4B4iWsmYkDLYBMDP1oik3qo5ghMipsdh3CgYg9ftKV6iLL7bdEik37h",
  "key32": "62u1jBthZpZFN6z4CnCFTcqUQdVyn8uTdvQ7ZRvPz8GiubvpRrST4KhBKpebMjYbCeAiW8G4y6y998yV3coF6SiT"
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
