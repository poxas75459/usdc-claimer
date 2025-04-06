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
    "4H8e1zDq7wP4JP3FJgSpmWdXKvWKFTx3qdi4r5ffxzTnUj4goiU9VviujYJbvxkg3wyXLKvjUWFS6jbRchHnzAok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62EhNEpfRpa3MQ4ANeDhzxRKxvBiRUjdfsofcJxX19PZXu7ShZS8xiixpgKJYuysqW7idZwoaEHBy2JxkSGRazK9",
  "key1": "yw7C3GRBQCSvXmxYFHh32ZuVZhLTAJMrZnvd7ZnKyHevnA7aYr2ApizYj4i1e27Ab6Ja3uEgMA5mQtum4Ck714Z",
  "key2": "unNErG9393u7Jbkgced2i6HEZo88LwFpczYCcRN6Q7cn8GEYDJi1JQ3hWcjjV2tLhRaiWVS23kHWCofmfteQegC",
  "key3": "4koo5RW83gSkXFPcVUE2iAFtD9M6tqoKxUiJtsajXuaGCJrkwBtbyFzan52HcoA3TxmtFFRtV89tGBJ6BL7Y9FPt",
  "key4": "5TFaoJ7EBHuzoeNMfHZk6m7AzkuNogjxqUzamzwmhqCzAp1N1hcikA6KQqgBQnuip3GGJhvJUgbvVd7J6qYyrt2u",
  "key5": "2EtvGeLcTi8Dvx8gNmXcxPZ6wpUrUT6MJiVtya34PscDLjXYBUtttw73xdSLJW3HyghB8gV3czPmJ4wuHCLc6m52",
  "key6": "WRgNGaoDkXzJEF4XGVVUBRU36PmSY1psgoBUMNWBp8Y6rGUZMdStN24GEhbHbcS1yAawABHfGUPRbwYdah4uVse",
  "key7": "21MYxbz1X2PuXnLLA8RgkvXsSBjY1EKKsJx475P2zR3P4KfyQx82BUUYaE7eJbtkpiYvs2fANuMsxVdYDXRP5vhA",
  "key8": "4XobPT9dcTMTtMFURJVyyFs4qLrLQ7tkxM9EjvwCuiHc9sZBvdshrcy2z6LzuEpNQQ9LmxLzPth3LA2NTxvLdmGd",
  "key9": "4Er4u7eCjBvkkgT2e33bufaffu6cWJZTa691krWxcg5CdjxQ8W5Uuy27KHjD2VrBBSqJM1nJncuvMygUXGGtA2JA",
  "key10": "4JbsLNtWLHJjaExwxmsbfd8GYHGYeWF1qruyUPtaRTmFFJeNawowxFajDunnFheJVA1tnogoQjU6VznFmyvLFK2a",
  "key11": "4o4aTMhGeAcEXF2orcHYVunc9gGNvHhdUUJvtxyXpffX5ZLMC1J6DvfRXJooA6jFRXSBrYTmNwMTFLY3CLfJ5aDY",
  "key12": "3fzXZFwrGBUmh2iL53m7TbsQJHGsSkcGbGKZ7VSRCLjg4E2qZyEdELqzPTKZ7sAPpeQ8w9nRh9Z1PToMWEX5D47K",
  "key13": "5zfJ8yaQttPnH9R2rqdSwnjHsJR5WoLHaojeTjaqpSAqjssQqhTRg42cBKvpMJABULZLVNqo43mn9SsB4yHK8Q4T",
  "key14": "2FqXeBSnBfu54ToE9ixzgejadjkEHFGgbLZ5MJFMdVn22N5m1uh6TAkSsAMAT78gfWpXHn2gSTJxFK9eX22wpLKU",
  "key15": "4QkempJ1iM1LH223QjeDK8LbNDdZxwmPmWpNPiwUWw4FSHMCNf1RzYrRBHRwSjfmM698mmoAcqLFCjra2nb22bYy",
  "key16": "2F7aeHrsogbAfJy9Ld4YUCdK82uMj9enibNpWRRk8xVzwH23NiHezDcNotLQDpDd1RWfBkoRxXgPcwkQ6nNUZjrs",
  "key17": "2Ba8G9h2FuBB29794nwqecriCzXwV7W5Xr3JgAk5DPPPt9J3jDHqsKDdErQscHdMjuWAD3dFweLJusvALm7crTB6",
  "key18": "3eFhsPJ8fuV8tY7Ak4yc7Tsmtxw3g9cNDC3XJtpmGbGe5b8yEVfLKXPdvEmuXEyQHStuPzKtf9dgzA9myrJHNinW",
  "key19": "541eFZgeZH2McY5yFbJyvzfmpS6PxHchnT2f6iVQBrh73KV4STNGrsVRAhVi22YC1dEUiroC3HvoMohJY2rWdL4S",
  "key20": "1259opTAGBj78KFtJqyLdhjR7SWPz4fPGC35S8zWPcpXRzkTfyEnNRPdGFAn8YGpDWW6wZEZGHtUCJ1u5pxq9B7t",
  "key21": "3M3Fw3TzvgHQz1gx28QLJMC1fpnPtsSHVWN9yfKTjfw3xryzx9YyqkNTPbv9597AJ5DDfnG6vPFeVhKUp4KigDPq",
  "key22": "274gFxWUfnkRZMUUB3C5mKFHDQcr8M4D4Zw1grpjhhWY2DNsP5Lhdg8Uei8Kg3JpjGgVhE4JgXSH8ayqcqsm3bZt",
  "key23": "TJi8nKw9AKhrMF8aoE6YqwmdPYQbbW1d9wjudwFzqQgrbJk3pKtMSrJH1acvEgrcJFfZuCpCQawhczyPYt7JmCn",
  "key24": "4GWFrfRqzVuEEd49Ha6xkAirdeX7gWq8d7bL5ad45TV9YDpUbkWHd32cnCd8sh2MXAc9ukRVTpRvbxgYYsyVciyY",
  "key25": "2vcqpUH5FVVXUDbWJoPFmugkqhJTN1J3JnH7BdHnN6kWcAnbW44khP28CFDxf9FXsNR6PsgfbcEt8y7purrAebWb",
  "key26": "3YEe3j5AgtZQnMwv9h33DpBBEyoon3xSfAvZMYJnCJF2edJw4wA3ZaHNqsNR3kunPV5woeNgbj4Vqw4vkNFCYG9F",
  "key27": "5j6Xx7z8ZutTppyns66DqCbXfph69rG3FoDPsH1AaMa8MyZArcbBKKfUiRFVCX5Nq1pefGpNfwKJaQcnbMWvZWs1",
  "key28": "2HmmZ8v4mbYG3zWhv1AtQXK6TMNSeMGRpgexcnBuUy8LuhyowkzvuxXqsLXM245J8kBb6Ves1jaRjvSt5urQQxbW",
  "key29": "5SqdgJZi9g3AMY3JSxsg17jv8GVUogbh8twuy2UHh5Li6JnhN5DaLpyZLxYfDnqKGCXeqDDfrtRnng9gJ1emR1QK",
  "key30": "3xmSbFy1BGzEPty5zk7TLMA3wQjNzE3s6HwwnZNDkSdNj4nzNssbYQKnCUwJzfuM7XpZ9CZ8JCpwA6LwsGv7uTs2",
  "key31": "4Ff2b89AL9KXW8Sr6vhRZJhN3mUazUaTQMtFPWNfjNoNBKTEZGK4LKFKMHRxZn4ZmwWKzZSZ7MaaxX66HXhiPk8w",
  "key32": "5skyv6b8eixeVnxzaHAFw3TkjpuidNKHcpMzdPC1rpADcrNVpKnrSZF9K6kxqgQDEAZ3TzfmcNb7anZFvzYstEUR",
  "key33": "3zHweiES7GtTCcNa4BmLoGXZsycSBwkGeJW1FHbT1UdLBEya5ruRXY72exyNszRFCjnkZuWBMFn153i9Co51UP3d",
  "key34": "4vJDTZ6QFg5HvayEidiVPRRs59SjRhFdNngHBcauksKTDiSyHAJvniixbeyspYqxeAYpchgy4BcAszVYq6NgRyAt",
  "key35": "y99jAYzYXK2nTs6JFCRWwk425ph1H22MExS5nNHscMhg91GGgne1CVYWZHTWcB5mRsk5ycyAumaBjzNFoLzGKcJ"
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
