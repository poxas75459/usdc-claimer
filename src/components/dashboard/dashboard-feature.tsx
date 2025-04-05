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
    "5a2sXX7FUFyFYYZ2fGzYGQuC3JYhHArxENjpHQUKKYseQ8qqLCuMH6meHbWDaFdJ3HAMGNdSmn3dNNZcm7viieex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rnGS2Y5sftDzrbvBccNfmEKHxUZiov6wLjk1xQF1s1ouPgtsJ7fp6yrW96NuLWz6Hq5SCWgz1gKVZkJycPaibBb",
  "key1": "9wGkDwxBB8f7wRyJysQkUvMzAvxXHaCvxF3F8XkxPgST5PTQqAtyeG6b6wHNGVpARFf5T57JD3GRTmeGTVhSWRk",
  "key2": "RowHSVbBjJ1pTRg2AidcCr4nkw5X76qMS2nbzActgj6toWQLjea8PyrExA6W2YRH1g35xoNmxx7vXPWawy4LnPZ",
  "key3": "DKYYc1wpj8CPdTT3jU9Etbs2sLErpihAqEZiurctKvHvZmkC5ryQgYoYaMuAwzZnfhjUkoHcHdZwhpL3nZjaoAc",
  "key4": "3H7rZNoDw9TSPYMKhSr4XSxgDQTtnDe9GNaC1QRkCa9SjT1DJBHjRo9cCXyLPKtmv1HTHhEPEiQkvTy7BsvgavGw",
  "key5": "65ZnLUMgAb5JzC2275MyiRDnAKkkrAvt4V2B2rye4BfSXvYV2wj4mTfnGmRT9XLZy7so4FCRvjWNrPaYWAyUcKa9",
  "key6": "5Ns7BTBgziqAT85nZ4fo4WdMA5xFvcNxHchnz2a8kYFBKLN2qAQX46koVpEKnbfcyGrtzcXNXsX8esjd1oTXVu2T",
  "key7": "WKesyDMwtVVVrQtqhwV9BJUhvmHeCiuFi7Q8rVduBhKKD6GbwLWt2bsHyvzHqgD3tnjxjVdwMtdErSQzmhwn2M8",
  "key8": "4PGmMXKC9qapzTc9PPpByYg8EpBvS2pmKaFwRVEUdZSz3LEXFTF9M8qFGpZjkgRBc73PVy6HeXiUjtP5zMK6suu3",
  "key9": "5Nm4VVDmPTc7Kmx3Lmk5tYBZaesBALu4rZtN4wg75p1sZgu4PbVYFLVTx8f5uVb6e276u6SP4khSdhHsDhazcEcj",
  "key10": "4cyqeWtVJEvrHXxh4GBVX3KU2SCADxKh5t9ktLMC5BXjQf5EwxoGTvmJ6iwHfwiN9THbYpaBWKyJiCScrnXATMws",
  "key11": "2ZChFpdJiB4VyDsM3rCfvE47Yrnvw1jWm3mFTBHwKbBFt3owsqzY7zYzA37c1kGYDPV4LsXAHMSeo7dG7oWLTQwx",
  "key12": "2Rjok9sgKsYcR69gCoFdPdk4YL3yJ2hzbgpLopRQkjAMs3FmshYYvpA3pY3egJX7CWLftumizb5Qn2GNoc4n8kCj",
  "key13": "4dD1ooQKw8qP4X1vDPF7oHieELZy4kaixNfF9JCZN1PUpS4vd8Ds26y8J82NbWr9Bs964giUE4pWxf9zuaSNwwcY",
  "key14": "52EV3FqDYrxBMG4bBwVdjnhPrBjZ9XiAr3WkwTqtENbwDp4g3aaAGMRbrf6hVVQnWPdzJn9jDvZipXpXxtyMuyZK",
  "key15": "4GUdfQ28ckTCCiN2xvbdqY5KiviH3zbhYYk2yUEW4EQoe1KQEQGW4qbTPraTvc1EepQYq5pjWw9rRvGaDSN5xmWj",
  "key16": "2xw9adVhvNk1Ze3stuUxkNf8QbmC28gPL5cSJpnouCgYzkR3irmqqWrAwimgUf1qpYH5AVLtDeU6zc5RbSNT7jhW",
  "key17": "364834mKbx6xKFQFfQUQXYr5uEpFNxzg37Sd6XpZXnLE5eAwppKrgMyh89daCoqKeYo94HiKkpoAqBVHVtQD9WZj",
  "key18": "3EA4t935qYtLXH3RZRxn8wpi9koWFjL2LAQq58eA8M1RvBvMBdknvGuZEEYCZHeUTK5wA1rKsz2DATomPEiygWUd",
  "key19": "DmnseToP4jfTRfFk5C5EavsnjoMsoDHqiTdL9kMSuCPwPnwNnBzfSvtqbJWyuLVKnywodBVWJdzNRrSVymKLifi",
  "key20": "5YrqEzLKtuh6gQJTUrGgeAJ57XtRq5bPEXSRMbZZMq89eYuJFfGoKprjPVsNkfeMiSQWsFQefWwP1HRjhsJXe9z6",
  "key21": "3PtmB2ewpCMLEMAU4qtSPzRFUcyPGYvuyMwNqkaN9A3spYHHsk4nrChwgqG8tNxnzqss1p8ML3gPXZZbVqWvpMq",
  "key22": "66vuS9jPqLL5qLdmcXmgQjTtFcmvprse9HnqtvcxCiCpWb13WtgLAAxvXw8DsLVwSeQV9DGUY9s52Z5vG6CRGiY7",
  "key23": "5JknneA6hBJc5e2YK3Hzd34MJd4xKgzLQqBeQqgrJSDMVncdqqZmq2kMeokYh2W1cbLBgiKYNa6oRNeMcWQMvS1y",
  "key24": "38BToGysr1aX1jXojKWpJ6n6ujcqaTWWMs6jKKj1tV5eBZcDggrTmsr6PcMCjcdfE7Vbg7zuwnDwen33DGFzY5Nb"
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
