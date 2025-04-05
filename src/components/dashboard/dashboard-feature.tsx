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
    "tDJm81n3BGLSHihmgoSCiwqaLhkbtFWPGTbcxygwopuvxoJbGvZMUaY4uAHhC9CjFFaJugR2y493mySRpTLsyqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mSwC7qSw8UyAPaZzW1CoHyu8pZbNbVzH6mqqjMcxHHjed44dERak9v8C1XCWRu23uwGS1xTuRoWuMYejvbBCfUk",
  "key1": "5hpYAegXufYhsEmeMEioCDZKfih8DNeu9RtRsW1QqHM9bi4mjJppsprWQn3nztWpeDCEhFWJYrkJbbdMRTbSTruZ",
  "key2": "5G8sMYenD8nCyeUWzfjbCB4s6fc7fdiJ3unEFjZubtPEvC8EHPhPjDxxH1idRPTuvJTKjbUc1q7Mes1zTTGyKWyW",
  "key3": "2TvXZNtBoW5apFZwwbxZuphvmh8Td9BVTYMndGiLKwGrdVDALQQxGFXx1yF7aoosZDKwhfzwj4RA8WeUaXp52q59",
  "key4": "3q39KkHSEqTQwBeQPZXpkc4mT5KuS5E1LiC8DyhBmid7yTAZWfXmyzo6SScpMC5gAemP3BdyXGZ7EGjasbp8C36X",
  "key5": "21nKq5V9hWnd3A28VTYT2VaFQMZ47k1EaZmurzJuk369by77R7nszxLUbEZcAy19oz9cgDcnqX4zu8Mk97CiazNf",
  "key6": "25cPzUh9YmuFCHGtShsZwV8KJo4R3cVyfVA1yGnKR7QGDaTiCRUpJsZTFeEdskcJ41RZoxDnezrCJjeTBjVxoNYz",
  "key7": "LK3iN5kQ2iofyMAizthBYjDRSAkC19GdhJiL2bADtEZmd5CT9hDPsRF43X9N4oHuxQ9W2fKbdm5A5uWdMfP5x9X",
  "key8": "2Gme9FJzRXtruhj6SP9iJSbhuxZyG55w8uia9grSdHm96hbdbANw1gDPsR1h9cBWZfckrQcSBJbRYy8DEA96FL7c",
  "key9": "2fUcBFkZex35Qfrth7eKkJcDitunQ9umKxWEqXwHDoKyuuuoybgqPFZ8ewxgobuzs5rnirpzJMXJd4HFzdFioc4D",
  "key10": "2cvyxHA8pC3X4E23LqqJ8o9M8wqAf81YD9gZBH1CiugfUErVb5oEZx2D5jMZD2Hba2qKyndZnp6LJv33HbXUBjUJ",
  "key11": "4E4KEShTrqFGcbXxTZEvwXwWc7YVGD51cCLRwwoHnaub7Z6kLFza4Me4QuSdKfiRoGQ771jHfr8ovquk3JevxUJ6",
  "key12": "44mie4uYMfBV318kMd3UQi7moZGZkPz837k333oBMtVyDX9XjHk4XqcTsTmpwHKrfVJGt9rccn3GyvSURPztTswP",
  "key13": "4mn8qtaqwjriL1nYpdkdgSp5UVbuGqcUcJqY4XaRJXfFJFexhBQnmit43QeSgueNqGYDUj7kLnTQr6JGVyuKGytu",
  "key14": "2vheGznwE8WFCX3K3nS44xooZgqtiK6copqBCbnutY1DegHNK79y1RYgUoZUAgpK1Ek8kufS7CjUdQBxFCqoQKp4",
  "key15": "oHDsaMWVLNy9UMjiu5193jjnKGuZs6tA69ZYKxzKg9EdscsvCSSjEqx9N68n4zxELSdqqtMzWGbbzJ1aMbk219J",
  "key16": "5yfNVXccGhHhSsxNpYHcDk1QjqJzZMNoNPJVUKqMfKFCDSJ4p6pKC2mxfe1d5U2URdD7zWJ9AtMFh1dB1T4qySN5",
  "key17": "5297uUx7yf9xN5d9bJGK9Fu8Bh6LjRV3vKkP7VdSVT2oUm7RkCnmpQoPAZTu7fBtR21kh55Ag3jbjXDCjTzyk4hM",
  "key18": "FmG963HKDi4E1cFw2KYvsDuqnQ9vtYrkk5CVVj87gWKGLdk5ihRKZ9brNxvgWJmLduPnyCd84UdA4fnQuTvRrXS",
  "key19": "4kt1KrDojwHjrryEQf56NmpCWnsvSsJSHs6B7vEJch5BTBEJe2xTzvdiZTcKHT5erWo3dw3ZgTehdc3tSX2zSAPA",
  "key20": "57yqZE9TUPFygU5QDG9x9f89VZRz3kXreSwwpQvwTsNka3y6R3VrkYzKpk1bRdr3Wv3UhsoBdAj7k3cGV5AZRdE2",
  "key21": "2Wq5gyzGsAEEdBV5dAgzXLuG5GMdyQq5JH9DzWC65cXgKHVQpKSgUzjiQPtLCfVySSsx6N1fmnnmB5BybrXZyn8b",
  "key22": "2VnuigYXyftdRQGUyiSe8n7rjtfhmXCewS27Anz3JTSYhLiUvUYs8SM1wumLu1imphFuFuqHDEj8evQaF3UgzUPV",
  "key23": "294hUDJmD5qEWfzfgcmwowkQ5PPzpxgQtdArr8yxMKLhAdaH8riVkbupMopBSx9osWqXKC6AFv9284oG1ecovkNq",
  "key24": "irtcy6smybZjTYadbzekrwh69AHrww4sX3dvGMrn6KTLp6q4HA2RzwKrvqrwtfesMtnGB6JZsX6ZVCapYD5TGXK",
  "key25": "3pZ6FrAUWtDVwTHNESWVR9qWf6Y7jZarrp5KQsu3hU6q95DkzJTxgYQNoa3c4psU2qxufz6EAsjppn7PS3izABVc",
  "key26": "3P9rhXtwfCD515ApX2MBdBAsv5ULzR8Bg5SupYCNLZ1VHqGpPCmT6pJQMDeovS54anp5iCBTKiD4Ge3NZYaTMh2B",
  "key27": "3E51sTuibHXKGbBq7zyTrofTiGzY2GHh2iX3EA2VVk1b4VjnrrhEVF8oBQdpcRsaMGMpLW4ArEhLE3q6L1N5v4zs",
  "key28": "55gUUjnuBd1xxmR8BATXYAk67ZpRRrH9esfcGZuGe9RYXGTqcT7G7uAAoHz3UuCUMNFQjwEKNWWhCuYBMdAJtFbN",
  "key29": "3jpGtVxDxTmVdoft1bXBkDy5692sKe4q14dfm21T8WBdxgwRgN74QsoVzSxbAPHkyWWcyfxZm15fPq48ZPzhQF7B",
  "key30": "35NKpZN7zspKT9fUZZeeBYjL12aZvhHwjiNkbrRyrGsPVYrMHYbg4GdMoKfmEvV3QDdfPDydPXro62b1wzruTjFv",
  "key31": "5Fh6hzqxJ8ty1RQRKvtvdvpbtWbgRQU2jftaeCRS2QgRJUWHrtB6pi9eKfNhpGKhi3mDYN1xU3xUVrnkvU1RRWAR",
  "key32": "3tJj8Fs8BmiXeDfLhz2S711NSeE5qzE1xZemCCjh7xrJbkoGid6aQNpHpm15MxLCnX8NL8k5hLERoMpGfPaxFWzM",
  "key33": "5DEr8eJwFZKkXHPDADcCcJxRbyFW37Tp956vb5dBkUUpFdDXwi3Ew8Lo6oKMsrmzs4ZVczQAAbm7QXYmPsoRue39",
  "key34": "2Z8xAeZQ3dcXWjGABbBVTA1gAAHBrbS7BnnX5RDfsmsDF8prKF2SpWu6MkCztkmDFvY6nVrRhaJkUUjr7xSNJdRr",
  "key35": "2GztoXFmQPGUXHDus7gS8KP1MFiQFbPj9BsvnMtyrwyCYBGGTtAZYpBXuyTo9dBpm7FT3wLnYLK3hKk9Lvkfbh44",
  "key36": "66i2EtEU8ZobL2cRBrbqTKDkrjhj382adVr8NUSejZTU9sTfUs8VbSH1ZCH838m6LqZGDEjjZE2faLmvGUheCHYx",
  "key37": "473m8TcmBoXDRYPn5bmEWWQcHadDf4YufSYPYaRx9qV3M1hMWt9MBvQsW9NoP8NqWzc17KzWfB7DpYQk9jrW9XkG",
  "key38": "4qotacFE9Wcrz9NPAk8NUa8u76WofBHaSibQ4NeVyaEQufRBbaHZMenrcYMYWHvHbE7ZzbU6L2A2FpT3AfNvDgmw",
  "key39": "mimwc2K9MV13P6ixLCxVVikbHMjbwzok6FzGZgXsrrm68t4puPsDSFYsCzvMRKY4yYH9o2HKA91qAtmgtygVcad",
  "key40": "zAHeci2Aiemw9pQUayPwS5tH5UAxFZePYqf2vx5Yt8QNyEYnWHebxNdKFn2ZJKvC5LF94mJSqHQR8VkWW9q8bcF",
  "key41": "44AefRNwnetq4UpHzCaX453t7adM393YpWnwgCbCpcEeymT85go1mUjao2jobacsMtiSwcKWu67hFNG2XGTwwRK3",
  "key42": "bLGfz5z2NeDfnFXYuRotRCMbve24mtRvBj6HKRaXVmHwVkJ4bcy6PSkLLTSC7rnPq7PGu1733pQf3nWDbFgJMDu",
  "key43": "4tBfhHtDghkhGTkiv9SuTwVsRTo9PHFoT7Fxpw9WP4YpnH1BMoZcEMMVpTuBsWerWn3fnAqH48BTiC1ebnKiTZoZ",
  "key44": "yChwf7jR35npkwRZpvEdngL3JdQL67NGkPMSAAkJ6GBmM2Bsfb4ACfPzrMD32LcaTSjzjY2VGtHL5KardJWGNAJ"
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
