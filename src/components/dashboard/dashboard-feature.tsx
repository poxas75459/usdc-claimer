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
    "2t81sk8hhD1vXqmErECEaQHK2wf7TkYwt1rERY4QfkAiLtbBu1s3sXFM7nNL4thTEgteMkKePSTcQhZRYcsvvW2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eDrU8M9c94EqJn8KHphSY4Ufifi9VkUFqGsgQZvuyXQx1cd3TSiW2Bau1AZrkRjHsefN6eq4irrmLvWPVyPe8S8",
  "key1": "4RV1Nn5XajFGP42inRsrZjWWTPU65W3yz8bxFWBQmyH5cxBFQxobcd8JGBidHUfi6445ct3iXTZ9wF2L5zEi3xjh",
  "key2": "4cnUvbJiWSKwnZZKcc93v1V7HEoaFBqC3PptJqVMBZpTxuYy5XjqzHvyM8JciNrP8DixyWtAAJegGLEQdHLuPabS",
  "key3": "4Z3utXS7p83v24JAsiXZJAKoUSnRszZ7wGUDwoRCuAN2WJgoKYegPK8qtveEo41anqrhxPjExu9aPHbtX4dtnW99",
  "key4": "32mdcbhH179iwP1D94QC3wiPc9JmcozedovLWLC3WBUo9hQQ2XpbnbEGsqnDeW9e1k7T2nrAqD99X5z3cz5eyNqk",
  "key5": "4cg92VEAACzpjRWRH8CZ7R8DDoha2eM87Z2S23eR9KznDwFW2FBaYvEQhWCX3XUt9SpxditzUdTGE2UP2h3nJcAE",
  "key6": "3wk25WxAHx5HgsGLbmGKHtJMgu1ndTYi2pdpEZfAH1dDjjMgt6gnwN4puk9fZSBAmUmNgdbn9pxnmGWfsKxmKV9u",
  "key7": "3KdPhUKsNxWtJJS8diD9jwxX1mQSWLeXXVe9vePV72TBgWEH35dDPzckX3mbcEbvnS3tyCaiq4nmYeBtXFH5sYps",
  "key8": "2SuSSvdpZPj3NYiVhrQg77cHNqxwLxMnj5b5RUjuayGbtnNjJsH71YEn9LMxvGGyriseDPCuizDqH3CczcoJzcGr",
  "key9": "27FmTRdbzPeAxQidux3VN7RmGunC758xDsE9DpjAhFcRiA3vE5Gu6c9eTqc3fZeHDY7ToJKEiUqnZgUcnKn6XYdt",
  "key10": "5PABHHWpMbiSieWq2KM2iDG6oKAg9C8Syge42FR659PRdRGfCF8szjvma4LkTKanngLmb58x22Rh8FsCMyLo16vK",
  "key11": "31R2AJMF59eE78YebP5rZuHQAeLq2vPGF1CGEuTV8MSdSxAKV98cLABsWehRRbH3m2tKqCSYspbn4xjFF9oXt2Ls",
  "key12": "3Lu3iJAvJERrCtH8fPhEqQgbV9obdymmqutjFXsRA28WWDJ8qtnmVeJEY754V71fSGgM6Dn1dr7tzuWXTiWfGhXu",
  "key13": "2A3XZLkGTCt7RLxDN4HbhNuqHSy14VV4D3nCeCaKXtWqotubRR49FqAQSLxBvweJNx2xwsxq3arsKguaroG7j9ZD",
  "key14": "5bE9u7nPifGgRJKhneX5AQXJGKEtqEXDvy5kSYGGc7fwrPAueX9VcTMAYVPRBL2iifi3MgPTsaU54hiFEENnSWtG",
  "key15": "26VuiEK47tV5uHLA2M7CQDRTbhGsVVc5U6KfeRRhfSgvDEWEEok2Nk7kod6a5yB1GhydjuuSBk3XZCTSwA79VsKA",
  "key16": "5CkA4xpPoJ7KB3Ca6qubXEVyFvJ6cugWqMkWXPCcyJaBZMCq1S7fR4BFgo1BnKR7BNZSUYrezWKEvppfu3UAL5AX",
  "key17": "nnTymnxG18WNDRmCyqMKuCCyFui5XoQLNqQTEPm7PtuwEuTGjFdCZLdotvXfuEfpZXS7H4YHH6yAKSpybwMXB9o",
  "key18": "1Am1THT6FuBobQqVag4bpX8Zqh1hLzsauUtWggN9RW4RMx3inZV1s8QndBt4EbvunMtWymXB7BtyMKR6JDB9xvh",
  "key19": "3WJXDbuqVPif257V6VLQyua3o5E41AhqcsLzEEKrNexQ3rnYeEowRFNgTyhTZxF6VRtiP5VQZoZ5kpS2ovZRNWCp",
  "key20": "5F5KEBn8SmfT9Z5sRsKa7N1iPEZNt9JazWEfi6rsrMt4Um5fAPQxaadJdFeKHMt8pVLUEAgmTCLQkVBJPaLEutdo",
  "key21": "31PE2yu9gbuWiTFN5YGuPqzqpUUMz3jEcj4zaA4baU4kbt2q1tQJvS4DTA8DhqJcjgmjY7mbXSZnRs1CDSHyKanx",
  "key22": "2MrNYm8Tk48GiK7CFBdDniVHM5jxjnKe8ahEz1R8BtTZV8uzmMbMvtxELj3PDJT8douK7zDWKzvZZPrn8Uw45oxw",
  "key23": "5whb61ykb1KVf5aYNX5x1PppMvYHycXXZ2gtJLheoaDDu3oNkULanaPgn4H8rPRKuVsGcjn54tPPu2fpUwibaer1",
  "key24": "4KhEKturkNCBckwvyxkCFVFvpWC2LK5ichAE4LF8PCNmCBdf8yohzsPM2jTtMFoUL57E9LPxZgFHEsgsktc6M2NM",
  "key25": "51a6SxcJXqQeeoPsrBVdNKC53BusvkNcXSJDQFE3gJsUC1iGch74wvgFpTgctfBRdP39N1sLsrENtScVnr1YPcDj",
  "key26": "4RYqPuQjBcQkee8ZjUtAYseNHNoMZpP1z75sNuDds1BynstyTp7hm1hmhVqrCxMxMrCGS9U9NR7fQoJiu9Kgg8ro",
  "key27": "2gB8WBncW9dLpifVFftTTeSxMyhuRy11sE2k2KyzQkor7bJsMFdMhDKD4fG6an5UagGyw2u89yqrGrZRKQ4TxJbW",
  "key28": "2V7rELUfQF3LKnLFKrft2hLe4TbYqQPnPc3jEpfewDM3MWaN7cxzk83CDwZJ4LYES9hCCuSnPP7WZdSh3T4Q2k7d",
  "key29": "3snyAviq2Tfkx8GWAn4Q3gnqazABu2fmuFGNBBkSdNFif5Eeu4p395q9WCtN751XkBh5YoogUs7RrXyQpY9kggAw",
  "key30": "26JgMsnPAiypRMuwFUXnJtguZ8umZW9RyBVzxd23iKxkAwNEySUV1eJ5zVa7WPuQFsBAKiHumHu9jKpZrjtDAeZE",
  "key31": "53DzrbJE8kSrApkBc6fWsrHuW83TJJSUj4woPmrfDcb34ETh9HCgLMWL8gh7aYjtccAw8R29hjsaUg4ByxCn51ZK",
  "key32": "2qZcN9ijMS4yhQB1tKQaKGcehT9Esa793dY5TTuerfNneuqCHAccBe3aJ7JEGKhLFMAtjm4pQhzJwg9JaSWGZbzo",
  "key33": "bHFdNAGHGCYomT7Mq4dk8Xjr4wEjx5DR6868hKr1X6xEeLu5sei482rVX5tsPr4NqU8xXXUkzTofpQumWmJ3sBK",
  "key34": "54CtFCV7ZukCtyG5psExqdovdoAoYwjAjMqdrsTg4ebczJTyProypvTjEXq9pT4cGQurZCeCj6LemDgtX3C7T3PF"
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
