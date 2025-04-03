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
    "52h33Lz3GayVBw26JzT9qs94MYiiTdUG9Uo6FrnmhzmTQiNEA7omYgy6pvp6ETqmbg7MD3StUU25KbtAbjUp78nA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qTd6wzvvrDjrQ91bPZz7P7JSYRucTFdb746cUSEs9t3fR3brwXtRCLnfk3k9trkkt9PniGcYvyC9pjcUwv4Rarr",
  "key1": "2EbVTyvYnKr6xCer3JHQaJciptKfD14DCwe9x1x21AcLpxEpnHtW1nkxTuHTQfUFHoFiNRWaePZQTqFH43dVJbi7",
  "key2": "2LtuZn8Jvk4QRMhBvpHD6wTJAy53uuYQWGFZJQSAAKnpsDckBJyMVQcwx5btKiCrHyMcdUomessuVUh4BpjLkn2s",
  "key3": "3q1hi3GqS3c14zq8KTCwJWUGqXSfjSDbAPS82ULUFuEV6CPE1ZChG8fsig42PLU4npjGaq8sUTpMu6GQ5vmBNqBS",
  "key4": "3A7P3ZQphukcoG2tPTt3AWFWm9TRMfMk3wHRUL1pr9LYST28XtQomopTPvFupEW6VYAzqB8gNDQJWj8JUu8m73YC",
  "key5": "HifQXi16usZnQQWmf1ku1VFibEodLW6ccWcEkFF1BQjmGxWagv3Ew1NNs3rzEJQxJuLVy6Kkdcaze7evNuAdWon",
  "key6": "4hHS4x9Z4ot7Br6BNexPEzAv3hg2ogpzwyxrvVjyz3KYvWUaLAGkfRCMFLLzQAyBZG6haoc6BdYqLBS6iwEdd8Ng",
  "key7": "4jR6hmYDEPWrhWXPTtp4tgRWaU2cDTFtAnsjyMrvJTiZwbBuo8AhRfkHWBPNNQKV1Lcg362zT8Rg6N2ukCeY65Mc",
  "key8": "2T5b4gZM8LP9qwN1RFxdFueLEhzWhd7RM2PbcXji61vAMtF6JyQXUw6CifuayimtTs9H8awoZwpwuW9drKcgpcCY",
  "key9": "5GCzwtHgSekUPsrPpNbEKtPBvA3t8AkKXiF53sZbVyRkHLX5fv2og5BAMmS2zDAtJ8cDfyGDQJV9jc9CPMx9R3tH",
  "key10": "4VRpMQGpJhxahhjj57xjvJZt1p2Z5ZAcdB9PLKnXPqp1fg69grtVqPxxXAQ1oGmHZshRZVMYE7DrcJw2xHgQNgrV",
  "key11": "532gwrhtJF133dXinvKHrpssKMX2HEnwTcu8sxtr7hLjbRXq5mg7vPQGXH1FzBQ7Z8PyVm9eZ1Q57a5A6T5imU6w",
  "key12": "67Rvn49aFr7Rdx3DX8gmcyfP29cRXwteSWfA1rpbn5h2kfzZFvCKJVjFEmW5P3cWC2M7dQif4ecaB3dWyEzASMWS",
  "key13": "2Gv3ASnCF4WuRWfuEoLm3X9mJCupYhJKopTHm59vbv9aGcqFg5p6GLJzYesCmJNsj6oLWYxdzAbhGfEBgBS6S3Gt",
  "key14": "2HVUrNEcLvmKxvTmnirJi3HxCggbsQn1M5nsHksx8b6kvbM11V1aio6pH21c7Uueokn3nvY8sqX2n7zX4HR1zDXx",
  "key15": "5hJ58Bd4i9XcuaHCU2NYhjc6chDNS33xFtrPpUQ9s8PMrEZ4boaA4BaE7eKTs87r8pbhq9y6fhWoTFaiC7BhsGF7",
  "key16": "5HVeT9dQfpAUcb8q39je4JnxzpXWiBU3e4VwFyBVGXGVRSmyxGqEuBfSfHHbcuhd8ZPU1nhEBSJbqsNtLS6Sx8Cd",
  "key17": "2VbgYejhUn7y9UNjFdmSSqzjMUZG1J3VhZDe9VqcLdnZzmyyds3UqCn1y7fPRgRmjzAPQdTZPU82UxBgA98iqGdK",
  "key18": "2Kmeazg1ZCRaXAQDu931wFXxGXdgEs1d2qp87F7dp7cyKFXv7xL5aCZ4G3CCeMMv6MyWEMCHfdLS4qpERWqRhUHh",
  "key19": "6oP4rw3qdKjEtJ7kCwYtaVktVtrU5DpWDQLivpVwXhkMr5UcppUPygh1RPtPY4BZuY6hk5R5peEWkrvofRyxBRf",
  "key20": "26Qz66wpiBammT7rkDJcvZU3a3DUQyTpGRvYG5BGRwTdZzsq8hi4FUj4R2jH5zhRLrWrsEEPV1q9Ve7ccy7EToLB",
  "key21": "6799pS4DEC22YkPaWikPHrnhf4cCaeueKeQ6rKbsiKPak97VDmGMebdusns12HgfBqNCCTcKirWjrtsRT7fAFRqg",
  "key22": "3wZQvN6nqR4Knjiy2dty74p8UERJJ6yDqM1NtTENLwD3GBEGAbDRoejL4vhMcVXPgq5E7C6BxbXentwjdoaLyyC8",
  "key23": "5x5iBmJmm6K3rsLaUo1mCK6xh6tKca7bdqNUqkAgKtcVy3ZkQX1asgNnXc8sCx4kZ64ADTcVKYatjabCee1BGEc6",
  "key24": "5d6RWQ1GBVgB8sJaxzwkqL2MhNubjocq9kDKPdXXNvXREShPFwvwxkv6jsuJ2v2ZU9B6J55jLsYNH5UeNmooRGCr",
  "key25": "5hVeKru5HtQgm6qmQ1KdVJpu3XxjTqrgmCEoSqGCdhKbBe8hhLVyDFUz84XgkmjUXHvX77AknbgrfJgyzYr9ERN1",
  "key26": "4ZTN7JmL9bbC5v1RyKvSFkwzcAn9XwFqEoeCzLt2x7kgpawTiMoGhm9o1c24oAFs1Auhy1JauYGCj9A11aeu9s3B",
  "key27": "32PDJ9hdQFtxxYri2XhxK7fv5VcL4FDQXDHcTWgKeC9K3baEWMjaC7LmEidotVDthUHZFMjmQCq55fJsfM1uqFoN",
  "key28": "2r7YyHnaZ38Ufx6orTdYMoXpew2m4bfjD5ghu5L9SKrN6LJUeVzoZKHRym7EZPGkJRnvj3bUA8V7XCgVLP3WRRW7",
  "key29": "3Gibbsp8XkDm61RKDA7DPhj7qvWZcKFKtRRVdL6QSjxCt85ngnz1AyrAyVECMwm4TMjj9G5NMLob4ZcNrrcDHnbu"
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
