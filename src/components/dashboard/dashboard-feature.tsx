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
    "3k4EvTM5aVnUMnKcuKke66C8WPV7dmBhsTNmjuHdSNS5zy6rKcFCNq3xLgHG8kzyc7TNp5W7Q1rSuhPXU1b8h17v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VX2BmwWnSgfLD3ThLjCnBy3jZdC4m5gfxo2Y2HBzeaJc7Nc4mo6gHwrnbZDfCmjgSEoESEuy293dxbdkQMrUgJV",
  "key1": "5MFXcksNSq8GekPrqhT4PxfEtHLLLtxk7f4qoMCUeiUKAPKeyHiSJkhMhVxwmJi92MVP1i1BhoYhV5ESdN5YxnnF",
  "key2": "4obo46Go82bzWetJnPQWHcCzkDnsAsyYeq7VFWc4sJhxqtTEgnVxjRDnxFZc9bJ94iQijkj5G6M28eH9EjwXzZDY",
  "key3": "2LeHXmUXwwmLSmA1aFU3UUt7KcqJftTqwNkFTHf7Wstft4JFrNP6SsETbRxd2pPzgPDAVPTPVZW7tCL6sn4jF5wZ",
  "key4": "55uvcXGLyR76ap7U3b1YkF9ax5gz3HfYcmSeEwpHaR7kWWtw6mL85ihCyEAVctBegxyPx6f9fmvci5Pi1TNhx5BT",
  "key5": "593c9bn2bd2twYiVJv6EjNvY486fhpdM5hytysmnYuErfGGyzQzR28wUWMdTWTzUvP8RqCBTM7HXFQf9ffR76h4i",
  "key6": "3WLoiaQRoYgCwPEkPc2knTbk8dFND2m72RwDHLWmYjWcMYp2H61eSywFEzNWoYs42sAg7qfcy6tWAXtpQkNy9SGg",
  "key7": "3iYTCRrFNwFqaXQvH1gmT8aLJKWqjnoGdeYMTv9TNENeDoWK72WBhrhmkh7NeNrKsgkCL2i8kFRreCgMKbzkxTEG",
  "key8": "DAUhZydXbXDgSUzJ7pZxH8gN2Si8FdatQFZRz6JAqKTk6Vt9DJFkTo5k4qZA3BDac1AHvjoDXAZwhngs8wuLWsf",
  "key9": "3ieqFzK3iVaNKdmC8UfAz4meK2A2UbKAYPP7sZnnQn5js16UBh7PYVxN7aUUWBXLPtZxwNYjmHfvUbLU5iympsib",
  "key10": "4nJcYXoD1ZisstSb3qFcm2jRmrZbCw3nHtDTK5KT7o98un2aThh7KzeKGi28CSVwBopNRkUkts5i7yL5PeKKGiDC",
  "key11": "3G9UPeBE7NpP9s1iN1gFgqgaZthU8nJQntU6ETzSjtyLbUAQJrJsFoYBDW451iS67TFBkqATa5nFp9m7znKTQLko",
  "key12": "4zn86UpH56jkyXhtgdbyosHo9ekUUYojNBZQa2dBpT9PcR5g2mZWfukUAHj3AQK17jX3bJ2FAFG3JqwkjUZkMFWo",
  "key13": "33nWg4xDCcYdBGxUY1PAxagdnpF81n7jPJ9uPY6p6w7LEEoKS1nvbXi7sCqpdeRvvqjnEK5dQ2eU1dxKBvqXE5YY",
  "key14": "2RLgVnEfwe28ZPFY9Tt5XSioHshBJzfpPwSwyytnLRzJ3eY67Z8M2y6deqru2uAujzXoiGMoNYMHHJckARC9yXNK",
  "key15": "4iGyzA4mzbE4MuNTH633cM6m7ew5hFn33sHRnuPe7JfwgvB8pGdNKCZwJqjm6LUEctgzLHy1X4Y8pRgfnhshcXug",
  "key16": "22fm5GqMpETfuNRrinVS7svL4gbgsGYKRpZYdjbLiTJtXwe9pcFgAprAUKJRxEpyZhUN3F8yfVFwojykqcVngT57",
  "key17": "5raC976V8cEpT7cRXjyWQmqD8B9kXqAbk4rYhiquUbjY3ttNnuhZjPwwijfyYTPfvi92yZdxLG3xgtemmJopZodr",
  "key18": "4DVWK6BuT7BpijA2gE4yaSw3wYmfaNq2M9ZD85q7SLqoQs9tRhRhr9qj9drvct4UH1Wb1aYkeTgjJy39GwkX6hkV",
  "key19": "56Ujr4NpVGMLDF6W5mEKwnbJb8PA1qofDLHAYAtdQX81fpTBRRM9cUKxS5zeVCYtPNxZk8YupxYJZd25muHMWg75",
  "key20": "5YaC3scyM6Z3dModoFzmww1FgqXs2iiCDLDmjcEr2QAGyciuYW5dRmBdoBuc3ZCtVyWazntzmTivj39veV3Vs54f",
  "key21": "3AuR2dK21YkeYyBh1jEiAZxX35Prir9dbMEqmVu6EawaE1FhqH6ttEFsGzVJHR5nzxfkRkJuuP79fhGbDRAm8oko",
  "key22": "KJaoLHN8E2yJ789Ec2LPbuSxzLBV3WqCnHXkmRNMbxaSu9PcEzyYHedzmSiXBwYBdwpvL4Uhg5bsdUBLeGqLRDb",
  "key23": "3rQQczQn7Exzz5AJa1HchKNafk8dxuDrgb9xU1myZBBLLFbZAfPGv5AWLQvRSVvD4tMhnCCrwmnr32yF33sLF2WA",
  "key24": "iD241d2m9vFN4ejmKaQYuMPZST1TFYJbSKJmk64hGTHd6mYgYDRMFr5Bz4fDzpvwHS2tjAAwuHkY9eVrexxTcG8",
  "key25": "3gXUnHrrtD7ypRUjbkhEuwVbF6giSQzoS3mqMUZvc4tBFzRejZsaPpWs1M2UWHk5W3vPVPgY36LCre89S61ooWcF",
  "key26": "4nsdXoryjz16mH2AMwjw15CkyFit7FJs4kPqK7bDmtqJnGRrBgojjNzjZuT8LNN5fB4cSsHWWrLiqnyiTy44Dquk",
  "key27": "XR8n1CaMLsHgzArUs3PHBKmTRf19N8rc54HtJ522PNGoEy4vPAWuygiegBqKDnkJYPp6Voq4n55p1N1e7rPj8kq",
  "key28": "2FJUg65uNRTf8muffe68AmcxmaPnVVcWE35zwFoowaa2nfcjhs2i8S7P6DJ6Jr17hBdEwEvsTTU3DxDJ9kKL98VX",
  "key29": "45F3uefQ4E4EGudxNzqeGXqgKQGMe6cSVs89CvCS4Rnt8BtohURKXYKi6pBR5Cd26ZpYxPJqoCDSn8Z8HiQEn81R",
  "key30": "PEHJdySWHgzvuL9z6xTA6kfdRBD161DtiLQH7MdvPfbAqGJtW7Y9orXxSTFPDyA5zcPm7hzhwVY8TUw8cvWmxQz",
  "key31": "2a3C1EtKQWeAnqQTDUwFrEXGaTnAik9MMQNUiy7kenpXVfsUQmWob3MTN35wrdLPNH7Fx3VMLqZzkcttCKHJYJc5",
  "key32": "5PxTKrARQttpwKK4uzT74KVPgBMh41AJzVrADf3nZKdWbnxXsoHeGP3t4JfZpyWQsgniTvQXzopaVxExFcvCM3Zk",
  "key33": "4mdHcRp4yeMsWHFYcPXpFkgPYDBUBX1xCs7p9r1fqNY8bjjLMx3ufSPFU9WGuK1jDPUhMZzxPwDRSVVC4Yw7fuR6",
  "key34": "48m2YT6BpSUdm1W9ivhdNPysBZu8BiewpbhMmMp5G1yLBYoXbJ4MaS9TEbbo64seTU88nWY6MBXxKVatQTa6iTUg",
  "key35": "4FzAbdnri7k8zLAmYXWUPCqorEF8qdyheByMc3HQEdhdSWSSqfSMwBnQTttfTbjapk5ZccinF3XDtgfCC28PDw59",
  "key36": "5H18iAAkrPwqfD8WMzJr4fgS6Vrotdrp8S7RTiwhXFVunYaz7S29VUMMjTDMAPnFms17PLYMVdBh3bcrZJr6u2ny",
  "key37": "3QBTnLEwv4h4YgJZ6EWt8Fwi2c3zCXCFnPS1VzCoxPVtPggmYpA2jyd1L3USMoGTawWvBXMs73ReRoAkgb2bJZVk",
  "key38": "4nV3piF9NvFseep3DGHs5PjiXnhLwyvTPoEMyuwRiGPVeTZy6XpCXqXfAkE2U9TM1JTk5B1kk4TLggb9RbR796FW"
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
