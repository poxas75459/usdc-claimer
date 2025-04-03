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
    "4gQQccbkNvWw7NvxBvDJbo4TUzE7a2Hrq8VxF9ViGChf6tX7MhtWd8p6A1ydSr7K4iqtrwim2UYF3AUbCaj6tJX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vLdpn4vzt2znecyzECuccNDJ3riFDhK1VKDv9nixUutWrPT6t8YBhjREJDtSU9nZ295yAbEDuUW28Wa8aGAxf8k",
  "key1": "38tDbt4RTNPHTWvgMCc8xR8y4KVP6CR71VxpL9jxENJQXWQF1NDtB3jeSPBGaFfp6GYXRoxhLHgMtXCCxPeLcpSn",
  "key2": "42N6GzGsxb3WhKoAQtF6oH5HnUwrAUcqYSrFDmog5MCzf46J6iazcuGYLsng3JwUqSZgbcR5oqHxfNicqCCq9sgk",
  "key3": "5R7QmFigp58uwDRvUP1bbYs3YVnngT7D7rrdefJSdihdAhoi1NrnmRi4uPtc3ZUNSwji1sgyFcaDUDgyshYD8dEN",
  "key4": "61nFk8xLBNhs2THACN71XJkPUPPdaPVYhXbkqLVpiJvH9h64eK2yXmaa6ZiXGKwTzRdPdwyJVktDQtbDxQWJ17C1",
  "key5": "3egABEeeyzgVF27EFC7vLkojqqD9KfieRh3v1M9hD4VAaPAF3uagUE6qXMgpsfB9Cs7f7kTUH91gQU3rzsgzuF3d",
  "key6": "fq6bVe3ENRkwEjstfCqP3T7xNZtwSu2BtLnioLyLui5T5k9NYmrTfhfsgrA31guiKNZJjwiRXCtXd7mXBAH8Tgy",
  "key7": "3ReyXcTphnUDKq1pHf7oQYsEdRV48sq2d2tqYrjK4KLubrch1BXXrrE8yopHekuN4joUxhgLjVLAaERDVviHD27i",
  "key8": "4NepyLZq3vJb1Ye22Bu8Yt7p9ZvsDLzLkh3BPAmEnodSDNUsMtT1wBGQm9mp43QqgTyGbPsUsQ56qDG9RojMmspQ",
  "key9": "59s4MwjrS1zvYiZqQuLVPexgcqkmPQJ2PGWjMhKXNAnwB9rbDhQY9GcxkUrwS6CZy5MRjcD6McpqwhnBEZyF4Mo3",
  "key10": "2fE6PndAQ7J84gAe9p1DBjadxgSYrqdJKU1veZd3AGsERHnrkPD4W5vHdeEnQPKBoYhTNuA4dpgKHJyTjjtZRzRq",
  "key11": "5RaPjKzD9t8y4ERrH9BKXZNiz8WtvXihbPqYeENfmas7KK9XBr41NRPPs1xK6fci8iTPMTFLZQ6JbysiDLyfbB8C",
  "key12": "4rLiz77tczCBGiJ7a8zXvCypDQCPsnx6YoCQND6HaP6QTi81JbSCrGy76JXTh7YqH9orDpfMJF3UByiJqMrK3iRY",
  "key13": "3n3HiX1h29vSG4icTVx3ysQ4i5mnpydxt38HhKSFjxE5uqzgT5zmUi7Tob9K1eA7dXb1jTMPB7QKyZGKGTJwuThX",
  "key14": "293P28UE29YsHAyow4knpywE3pFaxd9Yj5FojP79V3uzA7CE2fPz21sm5P9riV9JBZW39SHETsXhxEjhMi9XWLVW",
  "key15": "r1hEuq7RYAEbFzK2iCJHamS8upoNtKzaTvYonmaZnSKUYLEaGFCpbyUiyDdwXTh63LR1uMYzhqjDcAVgpZXBXVe",
  "key16": "atkuwrGccyM362synzpcMqoV2bzvnPt1y5ifin32ywevW2Ah33GKkQ1w7ByV2H9CHwH8NthSyGSCDza2aaTfysG",
  "key17": "4TqJoZBKQmXLGiSeRQfLJMBj8BWcTVV2qQq9Mj7P25Y7ZjDxenNBgrEyzWeNkbT45FDJvXGAEqmpMFn7JnmsNLXY",
  "key18": "4aGxQyWobYTZmnDFbM5GWkBTfuAkREYV85GUz7urUUjZ2QgyF1mZLY6WNUP5uoDajH72Lh4HmPCzvoMxgYExcTp2",
  "key19": "5oiiEw5f1FoH6jX5mezAtJLEXRWDHYEQLZcDvhRH4cxeuYbMkwfk7LuAyjXkBo3tuMZgsbdqtZU8H7oyNLgEAK9V",
  "key20": "4JdH2UbBG24YnsAsZi341GrxTGa86zqYZbnyQtpq4hGd9tA4U9ufh7d75nDM9YoYzTjA2HgMuZA8N2SL8LJrsYgB",
  "key21": "3E9Bj8vw7nFygdUVKy9ip3qzdYkQcW5mWVTx4kWJh6h2wJwrbtny4hTsP2TUMHuNfjePGtucj6e67AgbSxguZWeU",
  "key22": "3FAyPLGaU6ypkNh3e8kotd9sbECvYqVi8y5CoikBBHKMgifLcxxz29M8CZeidVM3HS6HMzCGpHieTuEy9eLUn6ee",
  "key23": "3tRCporhhDAp1uQRGsRUFA84h2Enf43A3Voj9wvnUJpJSVqtjVxKVkVKCrfsT8vwK3kUXWAes8soJE26yU7MHB3o",
  "key24": "4atnRnHdxy2TUALrNXGuhqqR91eNWtnEdDx83dgAYPmX4aZRKiBfjyxpmgsjD3QLRTt88aF9Bj1AANWFQ5b29HXi",
  "key25": "N4j7jFXBcxGjpnKCHWnZcBNBp3nUz1aFmMANN4mDpRjTw5Rv3vjxGieVp9uJKdhBecoBKbK3TToqbXRNAbYqBoY"
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
