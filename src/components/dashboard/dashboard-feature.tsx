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
    "3ZEJH7FD8LVFCiD3Dt6o1rQ2CCgUwFZpfVSQAGuKGMa3FKwoTShRnSXVumfvp5kedcFGNYvuLpXvUv4vTPtgmhMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pKyZ4thUZ7gVSNaAsLffD7caKuNopU3CvemuoSn8Yrb3sUuERpaFNZw4Kw5WT32TzPtT57HHidQjqvxfCUhphSw",
  "key1": "FNsuK9qLxuz2QQWrDg5ibCTyjjUkXaSYUndzLhRyt3aw4UCvQXYgpLAAPUcRJYjFJQzdrHRCpKKSwjtABsS5TBe",
  "key2": "2qu4T3mFni1xADqHiBfh2nGQFbqQhjcGSxfGTdKjmCXeSJiEV5iViAu3CBBNcUqsw39z1kFapbDrEtdCPbQ1k3Mm",
  "key3": "7qzzzf54wyXh9aT12Uh7eWnrqGcygR3HHgM6JLqKx3JniY5PrCv4tGvhkTLE8jU6HjJiUsRzJcztAxzgvJDDD3e",
  "key4": "KuFSsWsc14ePbuxdKP1W8Z7n56xdWhUNz8jDn2oYFM1eU5zstcUMkvfaEc8r5cJBLwkXT1DXiPtCMjkDTR1zuhd",
  "key5": "4ss5NcGnupSnEEvzCsSdyf3nxoy7Bh9oNYZypMZMcpigMrD2qX9Q1PCATG2b4HrX9Ez3ABD423c2pq8m7kYerA3F",
  "key6": "j5LfdQifMLA2YbSkgUrQa2gSNMkyP82FcoVwJ2KVqUESmfRek6q4WtGoSkJDLcwoCBBU6QTRVTzN1q8pXDxZSyk",
  "key7": "2xsnUxHR868SK7pRgeGwQ9hD8Eb1obMXzq1nRB9kpQjgx8rn7Kz812evBqJQLGzRemFfksuHDSHCqHBRfboaxLot",
  "key8": "3eyhQ8i5fXZehQfyg64TyMg2NrcCekv2fVcNnfdnAjzhFZC69pM5U2PbMVfQ5hFAfb2hnmJdJWPya19Gxcj9Ef5Z",
  "key9": "2VNNBHaF7hPGtRdnKYN1vz7rqXSEuTNdeDQFreas2GWzhqJ7BeTkNGUTbf3Nr36CSP4C1Tt3Jwvf9ctV6e8E3E9Z",
  "key10": "wGc7JXpACpksUAf6KT3GQNmpUCnfhhtw7x1w8cAMmT7n62qGmrjY3qSPVdEUM9adPWMtwNSMrwUCZz2QH49GdFC",
  "key11": "2YbPs343ivhcCfZzfErbdyyn2qKH1CcmWdBBkZYzpooG4kHjtcdgtCqsH5BNbpZutb1WUiivZAwgZGPGa9YoAjxs",
  "key12": "4T1nwFaixxU1BSW764yvU1FQfV2QUF2Wn9L78oJos8CjZYgCdJkfvQucqCu9ukRW8oaBYfyn1r3g7JRPS3yiZ8UM",
  "key13": "22ay4xw33FJoX48ARvaMZ7KDBBCHksk8Ha8jQsCgiMQqsfxypRLw45aRQEZ2iRcGbSyLtJvxWnyJEvMyTbGiTLHn",
  "key14": "zyFQvBH1h33gpDvrYYGhQVkRnN6wBXTrfH3xncUjfCYEw88ENEit5Gmwmj1nxGsi6sUWduX1WNjVn4fwRbsiBhM",
  "key15": "4a2TqbHbPZ62FJKXuTZvNi7bWjSz4nZqJY9MFJpLadPHazWbfk4RpbK2HTE4uYxKPGm36edAMio4U6X79QunGBHp",
  "key16": "Ey9QDtSr6XabTcU7mXmeYf8HVXT1xx9yJ15VWRqsvAU3cGYTfFJ8nw4VdhqVBrH6TSCKDG1dESKcw5mVfTANeU7",
  "key17": "2yyU2Wi5wLeLeDGHQFhDqmYy9DvFg8yA4ScwD6hDuGdhENToDeFD5fLEDH7z6Umt6aD7dzG1SeJhmvD3WUHwzsfP",
  "key18": "2UvvaNxknp7acx1YdqSyKppbS87EghLb2tWy7oF8KkEqE6CdJsLTkAwQk5ei1X3rBvVnaSFh13MPbkwTW7mLS994",
  "key19": "3iCsm2uMBGkAEoaEiJ6CwCRMuN4qQeTMb2r3qByy4kR5srx31nsK8HVKi1uGHYCXBnF13QUWr5dzvbFW7vsrRKci",
  "key20": "2EnQWgXahKgPwRZTk6iFCCmaHpVg4nsNyZChboJroWU6fYkqRXWWjqkFgLRj5PmmJitPtwkLgew7inqLUHbyfKiM",
  "key21": "4Y7ZBxLx7vfUBYLPfQFay6e7oqQ9iBpSKT27g4kRmpJzak3t251vM2xBN1tAc2FFu5HotZGKAJ9tu9R1WMHxdR8N",
  "key22": "65tv57rmYQuGh9j1FjdLHuetAG3hqEd2k1wtPAwT6inJ2XfuuM96phVV6RVe5joK2mUD3yBzJiyXTeBJykrAScdX",
  "key23": "32znnUyd2eHcRK2Dvww22vvtWgyUdFN4W2YuBMQnPVjQGcseieZQyQYpGxq5SJ3euGWCJmyB8vNx2zYZSdVqB1Ed",
  "key24": "5BKEWw1NF51j1deW5HzhBUwbLhtWpJj5nWgAn1QFhQwfRpWeisJR8JYP959FKNoTHR8gCegdvPX1Yz3rEj8N4Urw",
  "key25": "5Nvh2AC4tYhpGRzBjC3wJxLbkZx8kkshxSdS4BB84ncyKSNZa293eZ7Ud54jrrsVVnDfxRhEfRrtcprR2BLwSDRm",
  "key26": "4TPFP9GQD8oHeivwozVtDNfKHpxsQ2wW6CFz61CudWQszbaJs9NBanmFVrJZQt2a3zH7UErhYPWJpcaGB4owKDhh",
  "key27": "26d5RhyD7vzoh6NWJB8r2CfmVjTJnrsuoAp7RnioVeJshfw2fWUExYYo9Y7Ucf6fyXQpDopsmYqkFxSd3sAA5w3J",
  "key28": "3Upn7d5RAhwb26oEfiEUrVwx2G3mbrchUXdKJLSxtYuVg8tgaPekBgurmwBCsgLrBNYnGmSa2oVrSSqPAXDSXLHS",
  "key29": "4wTHYxzsE7LFQ1K91jGpm8Ga5FqZZyNftGkjxRPRVar6NqyXA2xCLtsq8awRJLzqVLm713yJ2hF67DSrZEko9EYL",
  "key30": "2ZvR6uW4Ykj6StbSMgkXN2hDhEgBQrtgJ8jLnNYqsoUtb7UsKeYPZPgdoHuPHVqKVYfkTiZQ7NXTqMBtpuRRWf9E",
  "key31": "5xQuxfjKAJiWVk2YcTLwrEJHp2kCoFk6QuuHygZgHgJTHGBFj4ctwkfw7B7F7SR8cQsEvS9VsYTQ8avxoEh5n7XK",
  "key32": "2Pey5qM7BNycEpwFyqpBMzjBEKigVM9hDmDHKjFihuFMn7uuqgntCRYg429ruheKhaF74pbRa8LVqfsQkehEZirm",
  "key33": "34rNP8qrHt4Mv3ZYLt3ynyCeDNB2cSTRXdygewRz7pRPFECdod5yPGjskNgCKeEfGwYJiogSMetECpkfNTy3LCN5",
  "key34": "4yTNNeMhkwyhpFd7aVmiZ6aCo146sLVtzGuJKyT74hG4mXczGZoxA1RqXES2NHt8DadctLVjgyrg855cagHK33n2",
  "key35": "4vPD1zhwdV9FKuPB1qLuzy598YAUDePy7WMvXQgjgiq1uLJbfrUGNRtBFGgxpfi5EwZxoS2zLrNCCyYR7mb8epV6",
  "key36": "4qVFkiDSweAKBYRcxMmxip5dCS3hB2w6n2qD5KsGq5qkQtcADCMK3ZnjobfwrbvnUiQGTtmAqrwHbTcXyfeMwFSb",
  "key37": "U1XL1NdATSiyCNcq8iFDsQ4WvUkjky3ATqzkU4kQFxCMcpwBmWhwMdbJe6WcW2uzE3vDHqxu7QSfqSxUjSUHRPJ",
  "key38": "DEng7K1gPDnSN1YiiWxsMTb4XahwHn9mjzoux4fFGgqxTK6THMuDLC52khbkrLA9oJVZbakSi9wN11awBTNx7sx",
  "key39": "578NyvFZvZ77TjPjV815uZvLbdsGUHk2U1S6v591yV9RiESVTerPD1M97HF82RcsQgrixEXHAmPF47UN72gmPHXp",
  "key40": "2mcoSpArAx4m7eR5UHc3hL7m1DwCJAWhNCL7ijhSTvEwaYLgVAuz6E58YAEpPbS2eq2SbvjV94KezWMCUbZ6hS8M",
  "key41": "5uGybHU4HYfZafWmYuhNfHCQt8mJm3btCzCQmBdpsccJJgeJLpRXSZE82wipoujBkw8uqJgMSSjvPzrUyfe2yj7x"
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
