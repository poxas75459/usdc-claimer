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
    "j3wBDTbZC5gp4yakYfns2H7PaVaEdx8AeYJfUYUuuwKRCpYSuDoG64jLJjBBGic65soQsXaTyhkg9yNP3jm7x9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43UMmaz7WqjZhQcSA3TeYn45E7yoTy8EWjS1DUcG2ZUcDYpScSNuqpEQoNRhSuAhH941LwJt3jnmK1Dftw1cH26W",
  "key1": "wQXDGF9osT4n3MziWZrek4T9qNFQVNbaiwLThqeZMxcK6QVX64aaMHRE85o798HEWPUDCUiBq9GNG1qe18PVp1J",
  "key2": "285o4PEGLtG7eQbaE2NazsceZJkicipDo5R4LBduFg8oKok8wWmWUi4tapktTqTXL5S7zHfnMsCF1ejwUuV7tNmh",
  "key3": "23Da8BdS7RuPsR6sfjADkWtRdsCFLzePP2Hk1xV9NfWDtSeV4LzFAX1SQJEtdj72BKMsX1BeoaiJaHRZ6VjPsnH7",
  "key4": "ub3srSK2X1mWEzF7a8RFFusDwas2nS9SyRnuntEYcd7rdVcmXVK4ZqKyo5baB8jtP1o8TzRRjS7Z5nLvFRXqySS",
  "key5": "3QVqEWb81uVsX9B5odZNNgVmJmwx71ecekQkRAE9urzGqmNwKg42yHuAAtnSuCVDp8RABdTsPSi6xgu5HyJsfgqt",
  "key6": "5pVu1JUNJBjBEzj4e7UBaCkUo7fjUKT65fSYwUepEEreJXKRLPTwzB8XcEHfdmBtkLsxpwaA9XL9TEmut4maGtM4",
  "key7": "ZafjGcKujUonXZUk5MazsyAgwpqkk2pYEFxKK8AYQ2H1Mth2GwXcvMc9g1JCmUzXXWGTZi1K3v8JaPvrXJaU8Q8",
  "key8": "3jM9ftuePx4VgEm4qMPj8ioCC2XSST8kjDLZyRv1BZh2dQSeiv1MgYELaVKZv9JLH1stSCbKx6Tu9wDQW7CEhPU1",
  "key9": "yXSPr8pi9Ls1qiMbjuuYJWChoND53fmTJ4YU4kywrRpBbBw62CJ9dyU6GEnsNvcGsGN3q5UYnCCj8jNv2pAxfn7",
  "key10": "4WaNQuqbQU776Wsn4FrgokEEqYHUuUjDvhkmzpYWM2GU9W67anqJyqs8Xqw72oeFMc8p6XyryHQi7KAioyEPp7nU",
  "key11": "yZVrLkqxrDMs9fBNJMw9ur1chhS6ZTjZKUedSHgbCPXScpsbtK8QMXwfcWdYW1vPffVyqCEwPwwoxkvMLX6veAM",
  "key12": "2agM4xhdQ73PyUSKSK8YrUDqYxp9QiyGR1etBqqtbndDmRsoGAt5RLq9ApjG9Ev1U5Vck9EFtkRWWHAWfdhPtjH5",
  "key13": "2smDFK27yvtEjPxVCCERRd7PYgHLvz1xx8iDCHvCBxNPuxo2wjfhDwve3PhMUjt5y2FTacgSL8QZ31S348zp8vMQ",
  "key14": "EVLE7BMaJGncg6AtzoXkCFJzjuXnM5wT3pqqmuejiQVvBpdcmNAXrxnZDU9EvK4ySDTcEvsqnQntTDLvCWtqbYx",
  "key15": "3CbGahRTkcKKkHQfrYtGYZgywXmqvLkTQoHXoynYXBVFH4Z6UwTWrvkXbgTSCNQmTBtWCXuTNQst23CZ8HpbDhGc",
  "key16": "2M3q4uc6A89FZYqhXtXNrPsGaNJf42FD5dvqVrSKDjUxPfYdeGwvVmAhDZMCzPFTGbjxpUyhg6Muzdr1U8ioeAJF",
  "key17": "XkJiAPC23wM9gBsASPUrmudarsiZnD6SEzzKVyGUfRYgwWQURJExmzjKyyhbDbqVdszLdxWV6u9uKsokuoQVks2",
  "key18": "52aXdBqCmiAyEHRwgkjMF1abKukW9jHEmTUoJ4QHB8rCxXhx468G9nCa3jYYzdSBk7ehtAxi2r61EZyy4S8MDtBB",
  "key19": "3FhEk1Uw7Bt6rW9FyLywmmS9wA91VV1qsskp552cp9uu3DK6wV7wM7vB9Vf4APUWYSApGABKDNERiHt7nzvBLvWg",
  "key20": "59xNLydSF8eDwjUC8QPt4Z4jCXzX64Q8jjEZVYuAP2ZoERTN7VST1Ynere4VnUCdhgPd2kNrfPwvTruHr47vvQa1",
  "key21": "5mjnStZ6Zu2n2vPoidzBXzVNAhfdmQoiiVmkzCocQxda5RQjVdNpp82RDYU9pUh5ptas28D7S2u3GR9iDBqXjQTE",
  "key22": "CbonZYVVTwGa9XhQVuAxUS3J93bTEMgA64rgK2mfFgDre63nsf2SN1tRvp9PXhZwbdyLApvDbyMP9YxUhW9Lumr",
  "key23": "49uE7ArfpzPB5wq6yDV2ymdRkQLhx9tJDJ6qGz6i2rj7B9yzeihEL5kGv3VgahjYz8BceVC1qiAwGJiEna7iiWbP",
  "key24": "2MozoMqXV269Q63cGG777kweMuQk8cvA4jocb4PXmAx5Rzpu12KM84EYgLhJ645Fxd7gwfS4g74Dvv27zWUMDwU6",
  "key25": "2yuLFrLR32ZL6iVjbWPY3qY4kBzXcUnJfkf8U7XwMSYbQNiVY2XqL8i2xuueeRuWza3S82hQVVUtvbaku3bcb5Vq",
  "key26": "62yQudcbFxmXCc4ADjCWyB8JF2JqU9B5cYPbG5axHKXX9DTdNiinWerQZQ5eEPezKStAnGyfyUJBNcRcG68dJi3X",
  "key27": "4YytCEggJEjziK679bc64xsAiEj6TyQCohsq6fW1wCm2zgQt9HtGpWdnCqMRaf8JP66vz3ndpGrED4y1JwUSks4g",
  "key28": "3Q36V2YnsFYZbNt48i8BqaSwGyUpqoA96mLYp3t3UMRySrw21cLUZSkDyA4veUbq8D2LWzJ44XCq2rxshvZtozMa",
  "key29": "4qSTdGEpTPNM81wqvv4R2XKF3xQqhwrtfzRmRex8fxR7bjZEDY3BtjEhq8MgoQDYac4zdtzHMzCxG7uAJ8wwV2CW",
  "key30": "4bjAJbgdq9dafRMie8rv7PJj8WGLaRtne97baPB2VC33U4C4BsmbbrJnuRWotG7nXWq2WALBRdRZdPKTbbGwBiRs",
  "key31": "5H1pEZJfx569vguPY5U4dFfTp4nSmcRcyCUNMF3KF6TysNchYovaWZEhA5p4zh1rdG28ur9SGQM2jBFd1gzFMXEF",
  "key32": "4BxcNm9ctAbjvczpgbtHJL5rx8C7FD9WGcMVjTPhXkdWAG4ocCjvsNKeswEUqnqvzbWx1qMhukmXWU2xfDb7YbBd",
  "key33": "2bTSLhMLb3y4t44g5cPKzcLasAGCRjWKsSGyTmyCKFcjpsDg9EWJa6A4pNUbGNxaC4q4E2Tsh1jp8mA6Bqn2uJ4N",
  "key34": "2R9LcSTvDgBCt6AMvsy3yutm9gqhkWiCnqmcJzqhn2XYpvXx8dyBcczyZs7hQjiFzPAaSivE18aUxxdUmj8uJi9n"
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
