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
    "4NFYh1MvbXE2Fc4GU8o6Ufv7p8JRSVkx1GdvT7X9SS2YnFm9Fpz1tWVmcsE8GQLyx7MzAfnGo8njWFpYZhiMrvgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s3NZZqYP4huErCyktobmHD12MPeBvDKPiYcmjzUTy1JNakVEnY8UQM9ZAmw2mNrBtqB57pWnDFg8C3bZCo5bGqo",
  "key1": "4HLTRA6QBAaGrp7oiDPrsrfQ95Piu7MTc52fC3Re1SX5J1VsfQ5CWmGmCMQdpqhhPY2Q6HH4z8buC9umfp5yUEC3",
  "key2": "ko2XwiY7zdFx25dgLLv42nbpnXhVxzjdSek1kU736QMnnqhN6vUho51taDWzwCrkLKMe87dUNFVmaa7Pszq71hE",
  "key3": "3XG6tEP2bp2jwio7xXB5NvUJQBimZZUnGtj7c51C34yktW2eryYDQ9qafWX5yXYoHFBezouqqjWFCmy1Bk5sBeJG",
  "key4": "44Qesi7ByRgeUPeQgoLu6VwBPXEw9Mg6caDhs7UdEG1pBMYqAk7mZwHcM25ARBkHKezPDQD6ZjDdPdq4zaJE35Vd",
  "key5": "32PkwVHydKS73DWdKQH1n6JVq7Ht6RmEPdfomwEDoUfYQoxfDjXyPkNS6jNewQKBX9y2BiWyXHdi53Dcxb1fKJa4",
  "key6": "xWV1QaFBrHczrhwgo9aV8sLDibdxLYkae5k9ohAH5R3mrK4mow1NnL4zZ5SeZDWtxqpRsLyYYWV6HeCr8JLJTLf",
  "key7": "2Tvniizp3Vr4ck9aEgbZXAsiY9j4eEaPx3inxWygMT32qg4NSnsSM4aQMTNG6HgLdzx15Me2CmxHNL4ZPHXDYzoG",
  "key8": "5jVqa1AJCPqr3RigLwjtb3wP5AUCBKGekNMv3zCXeq2ZaZ2Ft3Ju5ees6MTuPsEzis917vztDSyW8oN2MzTK4jKk",
  "key9": "2gtJ8adZ8XWjdQi32QeN6LyseMMuT7JkFDrKxGmwyeTHZQqGBxT5EjsPZSqhyMKGevKNMzFjz1Uvhquk4k8aTtBy",
  "key10": "5xaddZC9smY6fRwd7U9AfZzZbwCRjuAzoc8Z8KzL8Y5u8ucNWN4b4DTEzVECbhAzU3X7Vx6iCawSeDRyez7h4Mgy",
  "key11": "XDkQeGSNjXVUJu6smcm6FECZoob5NNGtnDEsxYPSoTFaJrWMXLNYE6egVpDrcE4jYtKKKvWirZX4Jw3SjT3GGej",
  "key12": "QZFyy63f5cgzqayLHzWcwHrHoEmAqk2e3y4ybvunzZU6q7r683c7oCTXfn4wvVJB36SwzVwGqEyFUXufLTQZsRZ",
  "key13": "2kQxZesbYV4iYEuBFHsDgWz17iRctyEDxu6rxSRHXDapMuJeiL6u6CVgzktwTzfceAr9N65mkuV5nyq8KSFBJpYi",
  "key14": "35aDTnjhKGcL6gKxEgWukNoKPULUwwtGg5R2yta5k7uMwqJiv8t2btPW7kYKdnmKLxpWP7NcLgW3jXBGQ3qwqdaj",
  "key15": "3mYXaEU71vL617RkcsJ3gXqeg1pt7ioFhCgmrRm9zxRypZQkMiF3dWmsGYcvqygb7Ex1fgJJS5AbyhZC1BEt5bER",
  "key16": "2CjFV2Yk4LpEP1B6MKY9jhghgNFDHWWvqRrvpSTqwxE9cPEbeTnzad6SVXLqGRqtoFBCMjZFDHUmv7kKRLMZCXrc",
  "key17": "j7UjoZieKx5RNekMe6qfqJMGFErvjAxcBsThGsnkYXPvtYaVnJwCA4ayaGeKWGRo334tugKPRJaA5XC6oos61uX",
  "key18": "28rYi8CQtPrSPexkeiSsoKEvpUvm9K7YRvmb4rBxHtLEMiWqZQzMkFZvhe46ozRTA3YN4j3YQSMTGm5mm7KzLQom",
  "key19": "TUhc2WPv7R3E79uop6wSryg1y5rZ18XahTYQeC14XYcW6BvFSJF2DJkw5X7xKSRTSkZN1JU42ivf9QmWL2XkeFQ",
  "key20": "5csMQDJjZXs4EySeuzQA3wDMN3BFJQR2ccTLjY8Y9EbzzxqwGwwd52xe7MGWynPqbNgVxjiJQrcwdYhbwGtWAToT",
  "key21": "j7WFKMEPR9os671wSPAhuSD7e5tDnNjk2BEdssqU8eSZJcSi28c2PKETGpNDKUE6mpCguu8H4DVtW1vWgGiwt3k",
  "key22": "2jdTHEf6LCXTQCPLQPMtnwAZgEL4HrNz7ZCakBipwXmqEi6pWAWThr5tBMd8VH3CyicWmYufhiTXFfQb2JqPYQss",
  "key23": "65DDYs7M3mgMbQM7teKkpuvQa9h36ZamrBgJTfqfSaRoBvEcRsgU4FMu8LdCKbW67Wee5BMBbGRb59tnPfdHrofx",
  "key24": "2W2dR3U9Ai3h7yceGt6qWvs8A5sABTTrAAkUjcqZQEnz6BQC19uoKnBXf57s9QTGhz6a6yLhWd791GbpP6ZLhueq",
  "key25": "2rsuCkXYEd6W4951oVJP3QXcDkYFFK17zQgYzh1tZPmksmmZKBH8Rv6KzqxjtLDuhrwq47gaBgdym9QQrQ78P29N"
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
