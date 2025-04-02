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
    "43pg22MeRJ2yBZiZF91sajvVtk6gUUdChspwVFU5kye77zmaT1ZDyoprR2YPUkNJzxvwMGorGN5irXtM8X4bGRNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29DFYiw9Wnz2K8XSUhCdWJkNr7bBY9qBtkSW8vdB4hESDkvsvjN8zAaAyoADTbYgy62xHbE9zjnSMYEtNgEkiWg8",
  "key1": "48N9bEXTLLCsxcVfp1oLDGYvwtRDXxYxHGfRxnUF6nc5RkJ8R3YTx2YJqGtMTJsSJvZd6ZQnYQ3wKo4JbyzNYkf8",
  "key2": "2618JDpzRzTcgakArKqgkbmiLGGnMJqLBuNoQyGA8JCZGNs9K414byvuNCSHatJmsPLD6hv7fyXdNY6HjAGYzqRR",
  "key3": "5H8DMQLpHKgxhToooQq5enfB7DbbBivH8x4qXXj2a7kQwKNXP8D3wa8sQiXc7nTpLpjxkbq7W9KesPJKycwddi74",
  "key4": "4rUac48mqT185y5e69yPUjH2SjMsQnGdcH1idHcDAbAdCnR74W27uZ92c7sJ84DKiTFN69dvm7DzSJaKVC7CBm17",
  "key5": "3t3KYALkitZ1HfeXkobqeka2KfnEmgfzTL2LS5fKQm9HXxLVFJFhea93kiWhHQuBG6Chi6kynkUEFMTo7F7UrFrh",
  "key6": "3rDiSuZFjQmgwpXcswJ5vpC4h7fJ3a7X9hzr1FVx4tCiFxE4CRW5YKyDwCGBDDjxnU9MDFv7wpzyoWpCDwGEft4P",
  "key7": "WTxaJy8rfgiMoZvsPnwyJFrQXE9TV1ufNTwevA3vgEvAPmM1yZcEBx4KEBxFG9nBdYTCweKuiPvLs8yBzjebp7s",
  "key8": "2tG6p8CsgpPWDJSKWpiFvamVT527QpPdx2Vj548vaZDuq7xa3spQsYw25qxgpN5wBN4R8YKLmXK1ZXeHHTdU83AX",
  "key9": "3nUovSdTeU7scCYNHx6xxYKqmN7Pt6DbZCyRLfrqipPaFSitzyevAsZmruEX7FCFuexmf8ifbwPaU1DDpXXSk3ok",
  "key10": "4ubKsNmBiUA5QTWxCg9GcVBPUqaVmaWNzU9DQ9C15uDVDDMT8rPAxkXWZLg7Fvixf78tZat3n4dFP6F7Z1L1zeAs",
  "key11": "2TMs6x7j9uveFNRpXQ9K7LeSryGZcC2nLRk5krXHs4q7C9qBZpgB4vGe6qXBRMb5DGewUN18FT8iybmqDJHDc8Zf",
  "key12": "4xE1VZxFiRrvFBaBwM7jcsLEBvtgRQwj6vw45jZWeB9w6aGDtuMUKYPVufBrHaGeh6y98PtN9Sm5sZRU2XihPyqm",
  "key13": "3mszvWX4s6hxbZ35eiRgF6niDUrVjGxt51jQRgyCf5pnJgmsXUAyvoV9ttVapZ4Mf7XcmH1Zfux4zimzSkvpisbH",
  "key14": "5FzDTF4iHgdqe7JatRHcQ29yrDYX7xPDzoq9B96H26EEQh52V379MgifsE8J94vvkwwtRjy7k7HVSnx9SVE1kdet",
  "key15": "wEMqqTy4Hn2qPcT9EhJbCfadwgXCMDUEg34pJkdArKHZtfje1z1VwN9qgGoUAMXUzfUE3sT84PEsJ3fFvMU6MSj",
  "key16": "szB7oAjBKLFs2AFphkHecw8SPDM9hBuyYCY7VVMxSbVbSbwTn5VhMZ4HRN3UkfAdEkZ5453hoB42ybYy31LUY2M",
  "key17": "4rwpbug9L7qKRWRdhCtNLMRNacqmeXqfjbkCLG2y62cLGyxhyaaW7Ugd9xEDXT4wMhsoeExkEuGPZuhHRMHo7nKa",
  "key18": "3xGHod5YnUaJJcLb5LcUzCTuD1FqHmvbc5ykKZkcZ8LQ77LrXDopyGd1UApGWRQbhvfka1Wb9GoKrTFkZK1HxL4g",
  "key19": "2Lmr5eaeTmBbYKnifmm6SePFKu5npyiJBEaCWwHfifitUqyMqWABJX1mEDWgvcX5e5anTnct49jJkH3RVq86m632",
  "key20": "4Tbov3Q2tzrXkepzWbGsQFoMCmYVwH6oJr5JGu79bch43ywh1KFCK7qp42L4WiyeBpDk3DEz539SvBE6LYuZ7Faf",
  "key21": "p9tqYE5gA2dqRDsDJuAJ3AW6ZaAezPAKrHG7Pk5NVzrY3CzDsDNaFR6Qev5phCVkPtaKhkjDZAQacbAVpWPX7MK",
  "key22": "KrQGL7TKgVp5JSLd6CgXaR9vEradgy7KMKnfGiE33psJMhHmttoUBAfM3giGKg4WabqV3Y5mNCgcqQ3bsc2ECzz",
  "key23": "xB7u5HiaWk8iiGT87T4nq6KNyNp3BwguwE7tciYANeb4MS2ouJbUUcVdWDrCdQkvZrVq8XBcRqxaD6wAzAFKEVg",
  "key24": "DhEKT3mLyMj8MJHPEjfADfbCZ4RwzSvfuoh71kQar2V761PCCuwAMRLJhRmwpTeYEzBpL1zL7q9NayoPPni6FRu",
  "key25": "gMA8xPiLLiANvuyfa2qUVsPvy6RSFpCFd291BsLRWXHZ84UQzfMTXW7ciNR4VjohXjL6QRBvNCeRekszAt9HWFJ",
  "key26": "5qHkQFD7X3tN1cK66FLAKrfDGVWurQLcW9yRvQBJF6A5PojzV7otRoEcS6mR2UKAyTx9U8Rv4Kq82HnisJYu7NjK",
  "key27": "3FCXwuxKnYz233RhS2XiS6EGYKA5ZCHyUcT4iZVnGyo3V4ssiPqABdL27f9makiy2siGFX9ij2GZiYTKeXEHkfcb"
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
