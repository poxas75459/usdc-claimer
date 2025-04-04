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
    "5zMb635aHeo6aVNqfxWr3CJ6sBxNd3tiqva5zJuHHPeM3VHGzTeUu2kNAcjix822Mi3bpnpuPg2F5aU9h62sncQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vb4bgfB9ocRXwS9YgaXCNnmDti77KNmr5uWVUZ4T5Z45sfaVZFs7EmDnNNGNJc5eMPmq5PmUgcn3TudxdSj3TuW",
  "key1": "5eQwZmeLWc26uodhqQPL7GJeFdPf7EMQE2MyVmkbR5Rq94E5aoG9NgY4xANwMMgUsgzTiBPNiDRPf25EhGL5CsLm",
  "key2": "2EYXYpcUiTgVQrZ8nTrfb4fC5T7UA8wXACQNJccDzM26UfLNbrxrceqsoiKSrFv7YTCbQYzCWgQu2q61LCVd1iKN",
  "key3": "wKBtBVn5M69rLc3CABkNYJWp3foF6XGs6h3D41Z3awYEdd3ekJzLxt8K9tsq84kv6FPzuK3kDnqAaNdPrZ9NoBZ",
  "key4": "5idkHz1GBrEta9kgYG5YWrUwmuzrgBemA6UggYnx4iHyMcUD3mgzH7EbVyyxHzvdSUbsgFTB78he4S7NrgsfJZSK",
  "key5": "4DmML64FQbKCkrod8cVEqrZRDH526vtzynWfbqcYboD5m6ceGmLqWPHZsxrPH8RD5Fn5u3HDFhwFJbG2zvwRaXDw",
  "key6": "2vhQsMc8TfuC8hPAN2kx1zeUjZa5US5sJFGYtkWmkVca7BzKniSGaCsi6tDXbSVWzRJkGXrgxGokybHV8K5Qn8Rn",
  "key7": "5eRCDdWhBmFBcbVGHcT1Giwzg1KhUkVQWDxBbv7tSm5XgqZJSWKUzLZmtbBadyg9TVP4jcmcD9zu7ehNEew6UsVr",
  "key8": "4S9xqEhu22A3VgFFvi313mFy6YahToSwz3WPLzL1KUz4BCD5HYedFcu4MVdi15gy5H2SDTU1mdQ1GRbSdpU4AZbW",
  "key9": "3yrK7dppnep1P3vZwTeKa9DDYxfatP5mTYWuKLC7qocieDi6ScDE2MmWKH2BswqTHec871mQaentyk4E2GKFbok9",
  "key10": "eXzzMRMR2zHcU5KSm6U4iXphAXWJVtAW3MvsVodTWSy7h1rRbaQiqkNoikr9S5oNWeCsyWUYMwT1FdjbZdC79Hm",
  "key11": "2H9a3qfrQCwbxcjMprkEg6tVGtU9sMqAZayiCUBXD2d6DmrFdx6D4upfRPDDVTgd2jUDAVNquVYmo92Lkio2wLdA",
  "key12": "3y3vaXxU41E2Z72dytz5QsRpc4KGMfx8qfKyCVNdaRTLqt8n9qF1iimUunWnWnPPAXS4wzAQK6aSmsFcQ7kUhyw2",
  "key13": "3HTNdcNo4rBhXhZZ3cY9h2xzYoiuW454btbMVvjLuGA5pr3VwmMnGJ6YPtCALnBwCVvPi7xFt7djriuqsexijvE2",
  "key14": "3p1Au5pMcHh5stCbUtt7vMpzw4juwKcygPCyp3uQBtwg5sfiiF9NabF3CorqjmD26RoWX6NytH235WW8akMKuCy4",
  "key15": "2sPajkdNk8HsbsJPdsq42Ri9DnfUp8xULJKEnGXns7kKtaAofqDE8LcD2ZCJV8DiynFsRS2zt51LAFJYwWVh2uMp",
  "key16": "5pXrh8vLAV8DEM8SW3GT2QNSxfSozPeiK1V4hsEs9rX44AJDZ4bxjFk5bmyYdkUNTJgQi2oACe45FAeiQfUAdqL9",
  "key17": "2L1C23KTKe9qVdMB4fV7KSPBK5zM98rd1jRw69NLRv4z2m9Hzt4e2vt4YmiAoc96Lse2wV8wErta5oTBvNZrMq94",
  "key18": "iXzRGrcX4LBcEGkcUSfgZgFUNSjF6146rnRTvpLFwrLmY49u4VxrMj6mztpZBtauTkr8DgzDGfLS3qyA9M8rsYs",
  "key19": "2JuWCiZSMLt5fzpDHpKrkt5EWGFBNZcSoeq5t4ieKkvqbwgw9sv7JVASxdS6VsYUfYzYUE27o7oFuJPkL1pFnqe2",
  "key20": "5e1T3XkkSwoPzYXzbq4vPLWxsP89W8dfV5c3UvwHcveLp5XFY1uQdV12tSNbTm2LdrXUgnv16FS9uiiq9Z8LYrut",
  "key21": "2hkFGGGctqDc79CjsfqK7fXgFUcjm32qwtzbzdHpVuvaGhZzC97gSGFMjJf6hVcZ6M3zKpBqrfCsbCzgKx1KUdcT",
  "key22": "3ZcmWE5h333zoXphVx6X24Sp3XWq49LzzCa4ZLhqxcX8RmQ3aiQX4rSuZp683ovy8Duy8TjUD2B6va8AUm5dTpFS",
  "key23": "3qo8oUNaoQaiybF8DPxf11KF1HSN87wCNRXrM6zWHxRxQ7Cqq4d3UKPbRZTSGfDk3R7XJZKrvrHC1WuAo9SvUtq1",
  "key24": "4hWwGa4eGboyhm4ofZgyWb7UMxqYQCU1v1C1TaDQEbQLwLSLWRftnwXvHz4H26d89siZKNJfoaMrQGAJ7mgaoefg",
  "key25": "2etKKXKhT3K2VBRkb6e3cYm2yUsdQLXi8GizpCbuG1uMmEDrpuZhARD6iTak4JFuKYq8uBYYHtjCg2gZar264vPw",
  "key26": "4HMzseAdA77NYNB7xdpSU7fT4xPeVeT7LZXdSamLxpiua2eZodRB13o7cj6HRrC3B5Qgb8sGodNg4NNJU9uxFHpU",
  "key27": "58MMz7Evwy9FXckECeKawp5eC4dgFHbGZqrmiJ677SgbrDhdkspAY6Wwb7T3Mi6xKTR5BQCW4YigxwzL6w4neLs1"
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
