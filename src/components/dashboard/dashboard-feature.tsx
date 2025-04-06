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
    "rwsy7WjcyiKesa8A75CXkSYjgGhQMa8LrPBiiexTGgtSaSAfyZcydPQrs1duQfG6ZvaXbHujAnzoohCYJGxwxxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i8fPzEiadg36BBodDsmc1A7S4VwZJR8vNTAQEdtgFNbxpE7Eq4SeDxLMFEB3MrPLfxA7nfcYXhMjSE73rKFXcMj",
  "key1": "42kG8tFaTFBcu9vi2zkHvphrMRQsAvJ5ydE88tkPNiR6CzGfhYvgf3FDNbFkDyw2bobwXWjaPsq5rffrDAvbovJC",
  "key2": "4mzu5L3FAegzHxZksKc9z7XG18pmS4nv17QdZTYADXMVtJbpRpmWsDiMkrZmePxXyBAtw43gm51GyPFsFhBJRYpC",
  "key3": "2MTpC2D8TMn4hoccPnkn9zwpPHSP8XWauJ5REoYLEpmgT3CeCxgB8mR3th3niEjDonstizrmmUuyLmTtqejhM1Co",
  "key4": "FCx7eH772L32tpXx6dQgBmdwFiYNaxHDoreKH3MQqu8FwzoZeWj3PFStr6QDQPFasvtWESCepG4NF4H2CguaeUn",
  "key5": "XWMhS3e3VYQjXMbxg3jDXXF7Pnem7u5NsBW4dXesKpzwva7GwVVtXzrfC2Hz475M4YCEY8qyDduRDDTwwtJnr69",
  "key6": "5FC5ZWHm5GBcBXfQs11Wtrc1njq5xQjWYSvGSsSwjJYFMQp4V6yPX1EJBEu91WoCqx15h6or3RknjKzQctVi6ZQy",
  "key7": "2FWk3XfCoWQd2noRoK5RWptUCoW9tFYXrVjwWkrHEb6dBYnJ3nUQf6fg2q777QsrYm3oJigmzHh2LBY5twhj9ur4",
  "key8": "53dBLHWU6YDS365XZML3m5RBFFcafYLLaE97JAz5wAKLdN4d3Pmoc2ySHjCGcPNo2Ze1DBa5PHMXw7qFFM5Lc2dJ",
  "key9": "3MBeWCH4m3kX384b9tuRPCqXBjFFc8eoZBXbXEM2dw8SqynejM7L2pdQwz77cgpZGiNUNz6iqThmEVXpDHGy4YCi",
  "key10": "4Db7CZDhH8Xc7fXrrcdmVJmgbCzxdLaHcFRDF16EcRJxTMdViiYfFeztN74ahUZ2R4MWmzWTEbrtd5HguZmxWD2X",
  "key11": "4eAxyJid7D5VYCNWEUWkXC6uheagt7Sm75ogCQwQyVSxF2jF76HNnYLU1vu2fuWNWYz1sQjMFuPgXPGVt8AhFowc",
  "key12": "3zwgZzPYTpi5rAweHuhdw4riX1F9yboj578oZrX3hPmoXrf35SgeVhz1KGs85Xne6K2y5uPobEXNDisPwvMT1PJf",
  "key13": "6B5mmGQER7vyEHsAstDcWdFnr3S7nZPCkgd5sT1LX1izjo3oV9DHHW2DhiCdT9UyYX54sSHBRKJqPFsooWvjMFi",
  "key14": "5vFU2dY3L8HEbabLxBKQWzDcEjN8r1UkdcFcFBwwuoKfTQKfcTrYajznGFWsyyvWoDtk2mBExQwv7zH5JmWV5fXL",
  "key15": "K3GDZbMmmawLrkSw1VHxUpp69eBTa3EVGEJUZ7ZGshW1sG2bsCGhjYny4P1NfstFV98P5RrUKwDK8GtsKZVA4JF",
  "key16": "3XYTAMmrke8cBsYqXdvdgzhG8vYXpK4fRCAwZcm9q5AqJW3L4RGdgTibSxfNgx82wU28EnLX6PPB2BDEqgk8uHPg",
  "key17": "p4KQ3rBMQVAZehwCRqJ4e2RqMEeAbeao8XLWUzpD1vcch9BWvQaWP1YG2YmAxMPnBFbj8dBGRUH5mboSaxyJhPT",
  "key18": "4CtErjLBCDV8zHPbE6Jq2F4s4UPCDqWn6FkMWDk7pFVf3DLyGdp9EVBqBE4K5gyinGEaYHmi1ZM3Uvs55MoptWNS",
  "key19": "5DZ16uQsegPuHXtgbQQYyFLFqo1MmgwNhN2orFMucus3V6jDvN2SYs46FYq1RdsTnPYvrwH3wbtHeoA8PAQgNrHg",
  "key20": "2KS9jpfSZqTQfFSG7BNyxVDNb6XBrF9ARdW8qqVWiQEfGLiVLfu8medaxDsxfd2QSUDTCuWdYjscDdrzRM25dadf",
  "key21": "3KY9BERutBnjMWGGnipJo9xgGkADfnqJvkWiyKE9kynjGLWyAhogFj8P8w9yrntXtaxf7nvddJNU9X7AsuZfBFRr",
  "key22": "4VRUrgcrvhvykZWZcF2VFGrkmsdXQRio65AestKG4p3Hdz3HPYcey1BmwQKE5S1Y6Dbsw9MYYwNoRZy7q9w9bjcC",
  "key23": "S3FsWFpau6MFpFFS5Yg3aq83TzkqTQJvoUYAkxmgToHZZGq4KdhffS2EEY5rRBA46mgu8SCtdgKYsvkcndu9VFw",
  "key24": "5VYT9fViG76vLVxMsTpyoSth1p8pkrQBhgR545i5Ka5p6gZ3x3pkKGgDzoE4S96BYEWbSxT2pefsrEir94xmG8w7",
  "key25": "5QB5J2WkD1T3pCdqtspvodD2E5SBkip5w6oaWKMnLQPcyoPYTLRM8CLVPifLE52kjgFtw1pJyJ9JUBVBAFSPZueN",
  "key26": "4ZiUr3AUqYi6oVgHMhgdf3zyxsFWB8oT7Kmkd9C8VeoX6qvW8LZLkKrMPHhAvaX5svXVsqM4LKbNPuaxdBVUtr5z"
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
