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
    "5NNU531RWTJDYEpG9ZvcBBtDS6BKWqVMeTRFodvpPQA1wMQCdSWiHQKD6PYuJpDfnyNHAJHucSNx9hw18GKa4bnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nMBFTZAjW155YGeCa53yrtMr8ViWbfGjxQYSHzhwwM7mo24Wbws7xAfc1sC54SikWwsmpUHdtrAtqxcZFC2EhBD",
  "key1": "27YdzC5gkrGNUusf4kp8sPUThck4FRETNdU94zbnjvsuVpn51T9Txbs1bkqJR7dqLWweHjQEN6xJBUng6f6dYxQE",
  "key2": "2BNwMW6xCf3smKJzn3H2v1hsnqBV1EWcEJy5ZuYvhxTEUteXuH4kpvdhjKT8KCousW54UduKsqQ6xdwCbvnXmmQx",
  "key3": "aNidt71A1uYcvFfDyRfXewtc1D6mnsRBNMXYNnhPa7g1E5dSF3wcafufVaQVidfvWTkkWKozowXbTacayKwrqyV",
  "key4": "5R7613EFfVmWv2fPMLqQC3d1gDeu7BmfAoNYXzw3ihDSbBDUkVNYoRYyFbzjuFwpfveWaaR9gZFdnuK8VnohTFWg",
  "key5": "2r5seimmAVnMzh2enX4DXsJz9Qwc3xqJed33XAsyB7QpadQPpBjP6V4FUvGX78Vep1jTvmEL75eKqySTGCr9ZdAW",
  "key6": "5EYeXDbN5vLHojeEcSzkTQ15HNyywLQhGdKtAGt5R7qkv59P7VjToyXtgm81b2eTxo5APCn7UT1sCBH8HjHQf9qS",
  "key7": "3HvQWMCNHYfs6y2zpRVDgM7B5Gq8JoRmWL9qRKYQiUh5fA34ZLMTto9Lwv2oXAUxiNkGZSyfiFfpVjE3BoLk589w",
  "key8": "4GBDUCWdh4bJWitVXjEquKKRfx5xw5hexWAgjFJa8unMA2p6iWNa35hUUVFgmCybZGBokZKDDPkgfoBwmGbHa6Hr",
  "key9": "4k5FfdS2T9D5z1ALEust1tDkpB879CWhGUv1DTK3VL5CaV6sKB8E9UTuCLxu3hTETasfVnkGgs4uvxY1GPbxCKM5",
  "key10": "zhGrAfDEXo1bfgujBcF3Qo5TP6WubbXumzxLDuqK2r2CV3eWRBeD44yXebxD4uUVLWna9KHKvWYZ29QjvQoFgCc",
  "key11": "3jRG7Xd7SsUDNot9WeyBh6BS7GpTDiT5MGMmnZmXtsuBwPZpdCF1FvKi9fMVtdDhfNVFPbbo8aJVRkt888GRiHAT",
  "key12": "2aUwkRXzphHaKzPDkhHtLeLWPUj5hJMqZwUrZLSXUkANZ7hCRbELfqD48rBdU8makrojK5KbWok6MmoktyMqFN8t",
  "key13": "5oc2zM5UcqRUDGXhZYXr4UAgv5DqjAqnVjRcqqg4bMjZ3rgjvZRzZ2cHjeyJbrtDQPpXjQMCGuyuFA2qbvx7GMsr",
  "key14": "49NwfMFMcPBbY8CCKgJecuCphFNYGidvc5ndGY5d734Gqo1v1vcU49hDYCAaurf1TszXtsE5CtucMoRqAiaFGZRX",
  "key15": "DifWY1ueciqbn5JuGknDSRM3RxqjQvCJZ6qY7ppGTM1BRrjM4CwkefQy2Sfy55DAMWEwZhUjuCX7KvWrU3pW1aq",
  "key16": "3LMgDNAvGu77MYchCCth6AiWkdCXcupfFzaYTmVKv7P8dmWqw16yDVgXMk83fYoAU2WqXKGSEETcj7CvV1EVeRPA",
  "key17": "66gFmcF7eAKHF9FVDcuC4iPvRx74dnKSrZ6QJbRvFPZV3mE6ChG5pCrEQFXoobrXgFsRrzyJT8KZhDxKTNS2EJ8z",
  "key18": "3JwZLLt9YKBd9zYivgXHKbrntRsmnbkJ2bWgTVNXnP2jHthpMdD8gT1cTCS5EL8osJXY5rA3BHX3euL9Gzj4Ajyw",
  "key19": "2qasRTCybBbpXvw2ze7HgugoKMRtCWCSFFbHJ6j9W3pUq9TwCqEnYQkMvSYdmBx1NLXYTerSBD5UrFCrY5dgiUkC",
  "key20": "5s1nQeXnKUL8mFTuvTBx2rjoGExq32zZpACeihH8KXAF5x75t7nJjnKj6Wtsstr63bSAgyfJXRrfDP7oKBCvfPMS",
  "key21": "fsMg6psME9kfL6tt8cqoBAu7GGnjGMLdH8X8pJPEjpBWYDPpo2YWcXhC1D5P21Qg3EFj146zgZmF6uxgyJ4pGFK",
  "key22": "UXc9rkTU8tAsen7QGtaVN8soxPeMXQQHDc2EE6kZgB8xX3d1QwKV9Ko9Np5hFqTg2AiUk3wPS1w1JrP8UR1h17g",
  "key23": "3DTfjZH2K2Jrby27dMUHsS59JnC58PT4PnW7cR5uSza5d9DV1sHKTsfvcwjcGrpSo6Tyq83Qc29BzT6Bxy1AZdfL",
  "key24": "x4r9UZRAhoJg24ptZ5SGetzjw28c6mnt1tut7gG3ogGoUQhm16XJMSfgDZazUTHe1cjtUmQi3QVZLbBBqcD2hnh",
  "key25": "2yvkX73XtskcqJY6hHcohWw2rZCGgjbLypzwmE4ooRF7cABtdQBV4DZxRk5FcwtHPSeEuEuKDGZebCfLQXZbF78H",
  "key26": "53CSepm9N1zsC3edoJxxRukwuikpqYo96mC6BjQGQaz4XQXXrRJhyShfF8bPGZosyxKsBSHAf9gkUBjA5QJyJGYX",
  "key27": "RdG3YFswJUFEBsNCK8BFvSjTWxmNzEKF7JmUFYQtVVgZvodx63PDdMcGjMwpPzuc3jxhVn47PfaBL5LyenyzqGK",
  "key28": "4iqoTMtoVcwpGoDVJNdEF5toxaZ4koUxcS4edARpgiGVLPfEinCsTZVMm3LmUXhe7fAjRi5XRrnirNfYwTJFu87r",
  "key29": "2qTUdzmWXf4Mr2BTYrqi7g1t6VFM5RV9BEqE84k5YrqpGHX1fNuZRdo1XxAQYAQCNYjS83DjY1FrLvfc1aY19jKN",
  "key30": "5N2Zre7NzJsKA1zXDEw7w9CZMtez4iupPerUCNw4DGRSqDWJtYxykRaGsdY87xgr7qnvZk7JDksCDWTzcsDVbVwE",
  "key31": "kHCz6uQbhLEX8T4BA2zZ4Bza3rNFCJ7BxKD8DctH11cZtGBpUyLrLqhbNJi7W8VdWYLCR2vJtTUS91yZjvJ8ZJm",
  "key32": "4mKF7omkq6tqdQ6QtPxMk43d1twoupG7ywhJd3QateF7S1bhrLo8nyLZp29eQZLBNAbajKXpZMck9Sjmu84RaoPw",
  "key33": "5wk32ZRpPTnZcsUaybu2e2PQRway2aGHPZPVXTRAnFErB5Xd3zqTASnWtsJEtW62JcRqAebyYJVPZRdh52zYaDbp",
  "key34": "5xYWwHqbXwK1cqHsWn8SuyYR86aDJhXCw7xggjYjps12HU6fkw68H71zUmTEs5VzBX668oqMQUF4Ne89uhDQwEcE"
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
