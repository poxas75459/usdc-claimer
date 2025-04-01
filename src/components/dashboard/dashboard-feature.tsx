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
    "fL6fi6jt6nhTsXKs2dC9Z5Cg5qZko6Lta74tN6P9TkForR1kJ4Y6W5jdYxo32KcUs1gvwb8gJo9ZPEEVxTxv644"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62xWbs9K534nEfHvFj75RGNRJ1EHrhWPqjfFU6ZkctdgcSjhPHSeBcoaTmcg5gQ92YeL9o9oZJZAja25ZTYiBsxg",
  "key1": "2QAVy6U3ejiHAPNpbeK2K7E2QirgX3qshGzgFCQFcN2imPjzTi5kCFCxLXfyLcDhoXKr1ST7qtJXK4ayQrqfWqQJ",
  "key2": "emJgE7XkJcukNm6mCNJhXrezHZCj2LNWURfFuzEH8r6wbcnYZERxD7S86zQYem4iTpigsZNVrYGWgus6qQwKgcF",
  "key3": "4XyHRJ8MxVMEhmawsvNgW19gQWcQXC93q73G5tGqTb5QUiinWHj7ypHDkQXMLLnfgnXDDJ81tr5pFkPmt6q7BX4c",
  "key4": "4FPcxmktc8mGWKiNQsm5ArXF3wmQbZjYq6nggetiFx7qCWXXdgm2u6do8T7yKEDj1tbE2zrS353inNXCGnkYkQUg",
  "key5": "3MxJoYeL9rjY7hAFr7T3KwktQSr5WmRRoJvmsNoV167ZeFpxTB8Jyp57SwCYhxREEKYfXt4qP9ZGJ6U5xJTx4hAW",
  "key6": "g2WC1d1g4qWmveDYpKL8XRdv9JUNk5mU5ecmhLA3HP1A3PgnY3zuSwvt6AhLiHDSxm9TUtVWro3di7k51pNnqX4",
  "key7": "54EvQCbQ8xbWsnyEw1PSTwH3pZqiDbPZv8HSY9CJr6DYgbxX67XaiH8fn1oLK6uk77zGzJaTUqvY4xdjvmvAypSQ",
  "key8": "2Z2h8fCrLjxwjDRnLeHJuS5D43PJ7qncTPfTRk9QqGcfbqa7aTx11Gbr9MVhRas1C3RZTeqtUjhcUSQ3FkjMVz3R",
  "key9": "2tbXBXRUMywERihomK7eF1fvnMw2BGHjJ38rZRyDAyseaMXmyVxgyNwpWQcQGWdriaACDBjfMobPR7yfefoYvfUL",
  "key10": "Sd7jtwP1TnaGK6TKQYbrSK7CvEdxG9mVpSP9AR3XN7rHHZUo64ufFULoSW6m35QPmadtSKkdpZdRqXA6C7nWmsZ",
  "key11": "4Z8aCYTSGEYX7qRnJjYs3PpQkfURERFhi9y99CT9RZGXW28xxvsd974a5DdPPfb6tFUz98MPwPX4fY6Cbj5gbf8F",
  "key12": "h8j2vWUQ2wpWy7rzvo6deiV2LjxA2DErsHLnDcJsmSv68pTiErMNHQp7uyEd5vseQYzynUQhmaGUR3kJazC22Lb",
  "key13": "4mMijK7r9ZcpMKCLVZji2797LW2XwMErP5KwDhVZzbqbU9YR3MjT94iyRbznRndUgk2AnKiQSDso9cBv86f8gQSq",
  "key14": "4aTioNVmRVh6oMUr6idub3ztVTFS9SpsrcZ3Uk3XmCagFcKLb93WRDpgNMKkBZEmGTYkYrKgqv1Cim1U35msdLvF",
  "key15": "hsisdDEcD7Z7S13RVxpHYTtb4rwt4rgtqb9WWDBTC2Acc7ECAshQ68yDxtWLuSj6TcToednB2r8DZdLqMH6uaPC",
  "key16": "5F63BSzpddurwpmNqZM2qFdnUG7iW9h7WTRTzJfGgFyFWiSSyCtUwaqJtda8f3qJmvZwKjytD5gvPB9SQwCXyuMx",
  "key17": "3eMoGA1BB7FxynN5sUVrvQ9hbRxwZ1BufTvBZav6bVR254DwA8Bg2z7isoauHxscBw2M2WoDZq5pBhCQ9kh69gaf",
  "key18": "USmqHKnqXAP9GHPNaNnsgxtdWx5e7T83FfrgFrQGD4UwwrdkCzYv53qwbMQngaLE7EjSMpSkCbrJ6gbDApi118u",
  "key19": "g8BPt2DmYvxd35ptpxCeKQmFh8dg4QYuQnkLXnrQtA7UDDcWMocAZG1Cxmn6qx6JzpqooueZQW2QfYsK91dW2Jw",
  "key20": "48GDnQ1xmrayCrSzfJyXqYhdH9u1MQj7MtTjVdPR4Sm5h2M69GaziFvGEk2XufJGyobSAJTYdt89gYxdaa9LJKaN",
  "key21": "3brYWdN3sHzKsGoFJGNvCaV3WCCWJ6U33X4rvg8j9S5Q26Z6Kr3KxPcuRxhuiAJy3pc4VGuZ1vRVs3bEaovZ9p9f",
  "key22": "2cVU8BBpCZDq6JSqwfiZpYfvVJjaCwkuhX8ekpE3kngzEvJaUF1EVdJim4pVZeD9to8SuA59kXeGHp8JYypmUj8n",
  "key23": "4GVgQoaqKEf2dBHdknpiz8KL8nTPYyjyCkxWqduE3ND4FRC7GdXRkQeqizvdpkkoZV2uMtYr9RnNeoq5tKBB4buT",
  "key24": "3hL92kMXD15GKLohHfXgKRr6CwNHnsHzkPFDtPMpDopUhjqvHoGaTxFEZvFcEK9fu8nYWXdutj9SMkUrsxBtjMnQ",
  "key25": "344Qfc7JA3v2yvGkXMhMcaknTvFj8xE4roYBNVJ7Y58cqAa4BXih4G8CDerCHh9Gj9hBacrQKXq3eSAvjDDbHBWS",
  "key26": "2FgaXM8MRwdQJpSwgLJqqgMoMpXc53eLzrvkc4ZkKZzqAPDYpV872JREGopTM3Vcv6qGjzh76aRzUtyWhxGFYM9C",
  "key27": "3nkYtn9rcxeWQmWHC9YDVayQnp25Tt4m7Y4mQCY1NZsPWcNT6wAwWzoKNYeMEYnSMV2AexwoxiG4Lyd4gFsHwwhH",
  "key28": "2nrn37TjRjgjKaNAeYfEMua1tD2tudCE98YgHaEmdxDDgMHVCqUDF1aTnX4qmP2qmzHPkTADZEifhM4AeeEj9nY2",
  "key29": "5z9VKwkjyq17VpYYBmhN2VfQKu5vTrBeMoTRcWJC8GF5GQ2intVdwXwZPTEUfaxdPuZo2K1sdqXSYsPmLde3NUEc",
  "key30": "3ZPz834UuTuwrWfeTqZU1n3eQFxA8eHnuDaqPejFD2VTzdAU9dzccG8SF6vfKnSzEhs4qbDbZwpKtKivDqGR2HBK",
  "key31": "45pxjkmTyDwFCWchQV1u1PiLxggfMTehacFoGv8iHHnQTYETQ8fM6L9brrPNYWAMy5W7DXcqxtRTXZMPNH5SRwgN",
  "key32": "5E6X9WQWdTgHvxZ5qcG1DkbCXjPvVRqq61NuTBDRHNus6bLP2g1UZBcAjje1127oAQ7WCb5DmZUK5sGPenG5srFG",
  "key33": "3FibPwy9T9FT4TcD2UDYNUKsDXrdUJsMk1HS5Erxet7JkcJVv5q2EPY1H7TDtsLRC5gqECA5GT2usc3KiUrHWR9K",
  "key34": "2q3UaLZVQtgkoAZ1ce4AExyGZ1B89BB9gECJAMWEU6yc7THknnyMRPMrMU5bYsvrgzzqwx3k6zeZjWupsQhE6NZ3",
  "key35": "2bMqdykXcYZrdgssQsqog56byZTtoV9bffwxe7AiUwriTDS11uJrztrjHbEWe1cEHc8mEPJeVtVNjMJ4vRP2YK8K"
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
