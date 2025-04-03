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
    "2e6a4fC6TJ8qPUnaNwrM5FZB1JFd1zXd5XffSCyRtTfn2TEuRL8xUjbrHWBKb6mxJrdTkLop59BghhPK7PxkTFAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AqEChwBDD22LFxExBPwf6twMp4cRKsv7aUiorjTzMwfCtN99gUbL57SMYkbcbRPtt53Z6hnFCuuxfQEKawYP73X",
  "key1": "4P6DhSYQfYx57hxPi8xf42MRdwuXmu1UTnfsua2K4ZxdP4K7fVj9fvm6o92xpFJxCXCXZtJVtSgTLdK7XHHmRrhq",
  "key2": "4pcTN9Zva4jbbERQjGgoK5YhYww652WzHTRJwZuzyTYJsBd4AY2S5Y3CakPpXW4eWhGmZgGDgqAYsTASXn19XZMz",
  "key3": "3eyB1J5hGGeQsAmvMiHJxXytuaWPMmR5P5Jedk4uat5FJpmfVQN3XHnVeGWeU3veN8dibx1ucego5yGFYzyaKSzp",
  "key4": "54ZJk58nhFW5arcEdunTJg5pgRo5SRJEf1erCsJ76qfRQVDgFhHvVap8bErfBoS8xFMybm88pDZfbHaTKRxewtLH",
  "key5": "54XkKNpy9Z7zwm9GZ2THMtjpRZ4qFeDmGXZx9bK39iP8m8doWawwNyFwsuLeyZ7CJLY5CPPu1TmkHbHMLs5GCnsy",
  "key6": "2PCvJqcoRf6uazZtreVppcfMtc3VSAphczLpMzEXWzRyrGu7WRYL8gTC7eevXby2xz4mqs4HtFzRCmTBwNLC25wi",
  "key7": "5uH6wd8Q3cNdh41p9XJDc4dfoguAE9s94SMDyjTDQxvj6rTS7p1m6P3copdS3LDCfMsLCNEps6M9U3Q6E1cbeN5X",
  "key8": "5H7vdzYMsfXT3U9fewbYR71fPYU2dAE1Esb19itRiHg4seJjxSdndKqxE2okUMMLXGJy7wypwJ1GAve64mccBy5t",
  "key9": "2wi5Fqj3WdAeumXdRtVFcykHSi9QxgfqGrpZPdoqp2LLhn1YiG9yEifkkLipbk4NeorJzd2xd6feHWrz4VXMpHXp",
  "key10": "5zPLAxjWCbVETMkdYNZZspW7gXbHbgUNdfEv36TNHBdmKYvDeWnVvmC81yiP2cAGaB3hKvSUxcgfHV149DhLqyBb",
  "key11": "DF8XGkzcmko8eDQ5rkeg1JRoDg5bt85jaXXgdkUgXT9jwGiKKTL4Hv9TXwMHYHkvteYxbb9aJwSZuWeLvjbVvyE",
  "key12": "c9MRq8aGhNCC4yNhbGXLZ2xRj8gNmDjR632sxwFTnPpx3PZpYmkK5HpxLnt9L6GGwfE7LDXMn3AAhJzKxmjuzDk",
  "key13": "3sNGMFQr1Vbkchipu6MHmUcpsWbuqdQD7tUQJUrxXw5TTmgvVvHAMC8kxSbbX1Yn6pdBsoxUMr4Qvgzyg6NPyV3h",
  "key14": "3PQgGULB9uVZVjViEdhXRMz9PjAWzbqQdToRDTx4VrFGuneXhxpt1e7YKzTpEhdDSc5odGELxutnkAY6hvP3vUgy",
  "key15": "4AsiUeT5YoareintiiSr33fZkPD73zYsbTf8JwQVfnaDzoDGgaVVTpp4UgBN4e1bwoqBbwBgPxcxWiYYRSbe2vWh",
  "key16": "5P6faGEsmfmZXM56YZh6phBMzYpfPX77hmC8binx62Pd8o2WVdwH6bdVuVdc4Maw76YXjhvR9tCHLTDhLQEGSJ98",
  "key17": "TFg5n3BfNPSwKJX7ia9zooR844TAPU16WVccqSrYyZdEpGVEpTY3FZfitpY67dTjkzLHyBMXfoFUiYiSYC5HW58",
  "key18": "2jicoppatU95BqKGm9TCAbggPKFpvp2xLMpUVMbz7qdgTaxyHQTSWVBwmWcfSZ1T51dzokRSAroFXuy9qobhCmof",
  "key19": "Sv8jLAgREZHLpgeWAmr5yjUhJY1xumXwQFuXnzsAzby7Spdp4pre5HSH9hopN1zvv447vDPrHpuQJLDC3yy3XYG",
  "key20": "5dWoy63GoTnW4AAQqafUqhJwau6YqHhunirNsFZWq39BdQ3mhhZcZFnsZNUvw1PXpyxo1xqbFNc1XQyYqhUsXkHQ",
  "key21": "waRgFDwKNDRQCWf2zomEqYAJgCqqWjwiUdk8DpDQQTL5FMgkE1dPnqxGtgLRDatC1fonbDGzEv4tE3f4AsG7Kvz",
  "key22": "32MNVcSYpYvDSoDZ9DNw2a58WiwBurNu7xMSmLEC6XErNazUVJVH176MQ1VtRTgy8h5Q3jkq8PHrinauKTGFhNwE",
  "key23": "4ahTi76vszgLaFy17jeCtE7FwfMPxSFCKc6qyjkb8XnpMQE9wTN28dE8ChK7Tx9SjeEDXnVfoeCJ5kSYTGNKauNE",
  "key24": "4yHPNkBE28PcdRbR8DcNG8fjXXCSbD5SUZbHH6eHveVnoxFkoPSwSWmzfM7guVi38vh5yPZuMZwgU9EEydJYDApQ",
  "key25": "4784voMixB4rh2nqZzETxJzMkgCc8uSn9daKk296Z8kVzG8A7HLL39cuuJJgxq4eQqDP5PTk3x4xAsFJHbZLRRAi",
  "key26": "3LxAoPc9w695hQcXzwkVqeGwa9ewnzm7Srd7mj6V4PWyNN5ieDqt3AfFHRHGAvkMnd6wEFpMq12HMtSg7FPd14UZ",
  "key27": "4pVCrLYzobrb9iyFnxPrG1YrbLqk8bU8osQsR1YXLKbmFude6UHvTA8Mu1twZZirPwxLEWvTX4KGh28XmV7jpXs",
  "key28": "4uZz1marzGruyjSB4LvM5Wif4uMsaiZmbtDfNk7UqByYsUx4vQaXTM2wom3bgvDpiq3RKREgoVyrTAWQ1sYhonX2",
  "key29": "4FjwjKWHx137fmauoiGpQc9TM1sMKdQYRJ2ogkY5kBgzBNR2uUwt2YHL1wfXZiD3HZeFYhEi7vmfuM6nGKMjMJpj",
  "key30": "2Zeac4ke6SHkWhJYfpkK5SdYCjdvthq1LYG1KddDb78H36p7hRzsj6UhHv6uQJePk8vzj8gFf4Mp2rNet5wCeipn",
  "key31": "4LxVgkiZ27VHQDYst1JjVagsA3Rr7CPocMu9k569zTjdyPqd3oRmqTK68ybUqaNTXVxgdjjvVoSYAUfnLWy236Yx",
  "key32": "jWKEj4KGwavv9bSLPkznJfUGZoN67tzwSaPko5fGe5v4K821fx21gf5f3dkgUaX3SSGQCYqCdL9QkWm7JXWBLww",
  "key33": "9xGUe2QVV9SAWm3yavf4nubChXw6giondkowJ1Y1zdQBU82aAfHpZaFH2LMpvH38i8E8j1kpXk2HAZ3M7RNStBh",
  "key34": "5Fk2rU8PJXPMUsWRvwUuaKbqQXWZn63Gnsc3iAzB8CobX87nVKfSzzeN9k19do85WenMMmQYrwYnxn16YcbALxUg",
  "key35": "1P1M9kvaptcG7tKyQfbhQxc6TeYKt7ihFXk1QJqt5BjtvWZwBq4xGgoprQkAMFCRL188hCNLPdFF3MX5VCHzGXg",
  "key36": "cG3m5DhoAAwvv4YLkDFxpw4Ue91Jq4CgiHxXxwLzW3NHsA3GEg4K74PTFPjWABnjSSuTDzkSM2f8QFNgYhh2DJ1",
  "key37": "1VnGvoDjZUDKpayfRatZcGqGCKq71h9svDqZYP9keu3mXek4uQwRVBziMkQ27zGmuSvDjcXbPXHA5MXe27ZZRLY",
  "key38": "5W7YpjZLHHshoez1L5QpyE6kBwgJdQBSZmbq1ThmwXtaxQY4PLRTLw4kCn5ew23vHEqQPwJYzF8xYYte7FLn3eCE",
  "key39": "4S87bPaiKjHCLGz43tgZVqScFMfGjs4SFgtpLvqwGL7TnvtsgpMWWY9BYv5imDmFRnFEX26mAggXweks4cTA1a9y",
  "key40": "2z25hsqmrnWaYk4CUrtGdbZX2cZosaFCmpGcRLqTKJT3BKWTuGtXuU5faB8kApVBRY9Q36FNotXp5S6jc8P6Cuk6"
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
