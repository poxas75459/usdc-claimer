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
    "batg4hQtwgJnoBp7APLsb99NSqZATYvsaoGMBBpR6tYaVrrtnHwmYXrfZDDNJdzqJrtXJE6GFbgpv4dWkUnBzU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x4g7yxRsBJ5gTpVctdTREn3tcB1jC9GboNx2aBk2QE7uebZXvEBKDW9hDQCQdtA6eVFyLrETw3WQnXEi1oYxTVN",
  "key1": "2Pxi89pDsUL2mJ9DtCXfWEdT8imepEv2rkw1kUCgVwfe1ygCkrwed9xU81waBnyMcNb9dv9enxGduiMiSqMp1d7a",
  "key2": "41QPusPpm8AAZjjX3LKCaM543rHYvjcZW4hwXn1szK6HQwQ6NVRGF3atBeDUgdHcfuaqvkgTqkghPvBJosfNHeCF",
  "key3": "vwNXHuf5VHSpboxNFJqDE3z3uTuvti9A6Me1FzcLFos3ye3xVVXW4fgQBEdUZdxQDWojD7nSjBrTXL7fnh7PuAb",
  "key4": "2aY1wAYgumk9gv265q5L5nGt9KZoCEc8Ge6hkhcxLPTsp51NA37g49jTmXL26ysqVk68F4CMXfuAqrXfwap7ybWL",
  "key5": "3QnLDVsRjSRXsRu5FwoPsTfSVDbUNqL84LmK9u9Ma5ugmKP3XkH6v9RD396jVrbrjRskvnm9DAnaApHSyAwCdH7F",
  "key6": "2w7pM1m6mk1JLuxCjRLUWXeMT17VnShFHgdbTBEarQX57k8CFyAuAQWhWqRpvJjhNTMKU1Uo1fRp5kYmzLcqY3vc",
  "key7": "dsYdwcbcHeE5PxPg866h3E5TNDV3M8zAgafW5NUcYfvHByFH4FJwtvVZJNucb8ZiFUJRYJL3GnckqAGvHE5b7Gc",
  "key8": "3HRxbQtami8LHFPrkHKbyzadkqpWcENduKks9ZFzKsWBWnY5WUmXyvwuGSGwM9rpKaAAM9z9tZ6wF2egoMUhigr3",
  "key9": "5vHcHT74VNETXGinHUMd6ayPJHV64MajCmruiQ7pjQthfnbLwZ3cJCznmEYuJKdKQcwd9Zxo6rpmk8nsZwVHdY7G",
  "key10": "APXqx3ucsVGWmErBdSGionFgGx3NGSd1Sec2baXTbyAV8VmgLGShLAKGE5Um2JKL2eTuq2caJQC183e55qdppdH",
  "key11": "2X5aMt3HVNDFYrqN2ikRiXtScakBeXniECnF9rJzW3ABMCsbaYbvRpsUBDF6gmuh6TigNMqLWNb9iYnDKay7Lpok",
  "key12": "2EosCM1sCHcivkB1ogiBGN7WbWKtbG6Mt4YNF3iaXU9N8ZGwjub6oEHyy7srCgaFqzN6W3gtJnV3dokMuHZ76o7V",
  "key13": "2efiqwzTisRYcrksSF8FiBmd4zVdMKoYABaNh58yMyG3x2hYsWxwXTAVK3bnnp6upp1F15F3eLd1JHL8FhYFrmFF",
  "key14": "3ahNxaTm8QFSizQm6gukSHVdEh5h5eVKLhM5SZ9JkePfGMXJrkD5N68susSu1Dj2dnqo3weJD6DDMCUWckfpsn7t",
  "key15": "8FJmD9VNjSNvi4CnkPQiyF8Nq1wQfs5tpDqpdJ4jYvPj7ktjBwKXks1byxzDjEm8x9jx9Z95RUAuKM1q3ri1Ha1",
  "key16": "2ros2BNxouKisa83FHxNZWfZwMpeRSYUo1hAyaRVzhUM2n2hMBNR4KKHEX9dUUt9P3bpHgsBTqQvASG6z1dGYXcG",
  "key17": "3Cz9ty4Vtrxx5QLdoQ1awrKx1feZcio6NCUPQwq6fCxv8aRq6A7xNC1FxhGmo4PcMVzAc9Q5gT4fvBkoT2VCefLD",
  "key18": "35xW8s7ww6USjsfFJLP3zffHkKW5eFeKgUsiX7dbwVyTXExbUF4MwmxZhKzeney3cPwA14w3kc9P2vZo8aSRPqCy",
  "key19": "2q9H6WmghwdNTDZwCNWgvivL4dcadTiFLPoZuZkuPV9VKjXikRDoL5Wc7bGzENhfC16GD427e1HwEUx4DA7GZJxg",
  "key20": "5dXaThCbh97EhQTXiXHQKeEHRQgeE3yJbxv3SZMKA8HQzoNadK4FmHoByq5cz2HfvpQdtfWbUba9kWBQgCG7upfW",
  "key21": "5geaFXfWLUs5GFSJqrmpu7bN3vLupKrRHtvVsyYr1nUnxLKK8zSCFCQ3SVHEfarGC5UW8X6JSmFhY31A3LYgCxUg",
  "key22": "wLnvTvKKDPCMdNPPdWtyVzZ1eD1bDmPKEBRW3rkjQ5tjwcsLkZd4YVfzhMyJNRaFKh8hMm9WVw9FcdRZzFLzneZ",
  "key23": "2gVtSfDxycyQ2AGxMEkrA1kv8zVeSyms28EkAT2uet9W9vptpq6pKMgmRkH9xochaovPqsqTEkt4RAXg8ZqNFSSt",
  "key24": "3dwuU5nzYrQBEWKQa3bzd72E261FePCvMaAP6PfAn6jh75tXMgEfSgFT4U35k1MRwvcBN68kYToiMqk36QxmznXW",
  "key25": "3ZzD3DneFwqReKwMWMoZYqyiSAzKBznUb3j3GHYc47eFvLr7piv7BuicznUUAGXKkNsFZiqJg1kguyL5kjSomGH1",
  "key26": "39dCSUCb4xpvzcxkAp59s84amqzErHSqHc4edCm7ADKAWpyDoov8nDX2h1QgqL1x1KFoRqYZ4isXQRHumt81G9e9",
  "key27": "4QgcNZHUCzJeNLiuP5uimCqn7DZvZ3z9ReLaBrtinSTd2CBUUSpQrz9qgXinaQvEB39LtNHQU6hZXKNsFAE5GK7X",
  "key28": "5WeZtusWxTbevaYmyKk9j9YFmQZ9KrHiRs6qAYSo4wntGvsCEVYgpznQr1pJWghg8uFA2JDit6LgD9BydYkQbryN",
  "key29": "4Vkn1r9VbkDFiJbej5SPEm1ifP4gLKhEQMut53MHb12dQe1ZqBeg8egPUuAGpnBCm4KGjAkH5TdGt99mWcsJpiGV",
  "key30": "5wgdQKk9eaeQSJjBZK77PW4c7UnuAMswk5nyHQTGcxZa3XgzdUeYCKeyYGjZvLJRGHjxtBJSGZZeXwZ6hbsDLuxX",
  "key31": "5AjKXFJmPmaQBXjg3q6xd9SAovPGocpL8biot5nf6SBdc4Yxjn5tzrdbyuT46gjnUHKVar3R1EgELaSenWAtU1fL"
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
