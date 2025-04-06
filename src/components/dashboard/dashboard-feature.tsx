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
    "2zg6qwyEZG9yrDJ6Nn874no6o21hRKxUkxah4SGPrSKiYuHq12cuwnEuJhoGwnj4NAF4xdV7dCdRka1QGHdN7viC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UeMmwtURYu9jpZZRCNd4fvzF1oC915iTrWF76tu9vdobi2nSEur257cEKWzYcRzdUGsTZySP6ekd9AJ61o8aHZc",
  "key1": "52EbcJNLAwJVSmD9sgGnxnnffr1Ph9bWH7zjLXc7aEooRw6wpVK9iTUk8JjNkxx7exHkCX37WPrKyj9nLw46UXfV",
  "key2": "4pu18x759PqpczRGkCzY7eMbNCofbrCekeVcYrvUrb1pj6nCcw14HTZgvYoVABPKjPUJGM3ogiktD32BoBcaR3Dj",
  "key3": "3WCfYzohWmtoR6W5UyLZVmbxuL4gzpotPmQbmM2EcGXAZg6me3mk5TkkAiXHKTnXmi31MTKirfoUorkikwkDQY3",
  "key4": "27dr97GyAVCE2pMQX7vYhFqZmd9D4Uzy63fr9vXjv3YqtEUW7o9e9ZMXP32Jm22YCaTsreTEWkiPB5qp1yXxYGxR",
  "key5": "3rAU1aXS28rcU4JTtQyWLJqEc9MAeND1KVADDjDd4xDdktRDe236s9ySzKuvZzb6jjkYpgUQUhCBFstfT5CSv5ch",
  "key6": "W4jt142b4m9ZsDLqZgPySobs3Umdnch191Rckqg8eeDoEkorZrkGMyf5MLnkBT7w7r74QRNSnRWNxjPrUcAQ1oD",
  "key7": "56cAareaP9DGyQ9ywGP9kVosp5MXUP6QXTLhTqW9RkUckinbiWhrXsf9tPUGE154GaBPUP9E4jZRo4PiyZqYJ1GR",
  "key8": "nbHccj1HQMWBC1VHeZrHcmmd1GgeYgc5dCrwjZqkwNDJi71xQBBRC7n1tv1PHhZ5KauV6i8NzMhz9nyYrfrYu1z",
  "key9": "2HYRA9a74aCH1Xkw595GdvCQvAWzjFpKGbAmEa2EGS8QH2BNFnYf5kM5brVchnCcCMiwgA8v6McZ22VADVw1Wyp9",
  "key10": "5w6E92J7eYVocrSqFKUg998HXXNe7M3LNaQb7wwpWJF1MoT34CR1ZBGXpvHs3FW3NBZfamBytENU3VFebiTSGWPg",
  "key11": "qvtg9CMW3CqKMYjNdwfoJcKqhzVanvL9euiFT9PyVUjoFox5pFNTVxS4WP26B4YJkevb3XKGPPxz68RUGr765qC",
  "key12": "4uY3z91JWBaTNJsT1nSttQNX28Xo52auV8UpTpNcPKggfWutybeLomAonu7zhsKLgRJu3uAMKe4cSt3t7WxkmmaU",
  "key13": "2Hj8cehYZic8ER8NDA9jUm7piRqGxhBtNks4kW9WQ9obnsehVviGAw9soDwtkQxVhWj44tN6U949trpGr3igbPgB",
  "key14": "5JoqGrotpHLmddiwvC8pSHMy96LSVNAYJu2C9dmsrasjzBks1fLExD9ZmjmPnFrNWP7b4FnmtePqJW8LJNo4md25",
  "key15": "3U7rqJVx1Tav8iYRH3yE4ySitVYccmngDNEjniGBqxYhwcivMQCkEt728b8vy1HyqUVVGEoDCGsLvSz3sMPMZ1P9",
  "key16": "5YDSCvRDMdg6ChJvuCBTjdEXdf1w7dSYwkSeY7G19uTFvuhKtg9E6Ni2LHfF7Ssc9fZXmgcRUvapWCHiMVtp79wq",
  "key17": "4iogz9wSFFkMwcaojetXgcziD7wSK6hfwvMPc48ixZE9BZEuKEdiqss6P78AyQDnY2p5Qjv8wL42hvBvkReZUpic",
  "key18": "2hBiw71wqiH1JKXy3qucR97AhM1xbLZLf6yYtwyY5ypGUwigzn28Ls4sijRGmPxbcRQwtq31heHEWi9SrMccL9pQ",
  "key19": "3sMvC9k1rem2gKymG8ViY2GsfNuWiNHwhbRQXdAF9jg7TVRwpzMByP7TR79airtYcSNwwva7eWPSbLztr9AhQJLD",
  "key20": "4KHaV94aE1n846xm1tfwVXC4UpacRYEx52cRTVyMuQ16w4aeGb9AjB3Ug6hNvCkJnB9Wo6gPGzkBAB5ovqHzT1BT",
  "key21": "5uNzteesdNcav8v5zs5qcrzJQiAUq4P8WCC7F9w9bkHAEC8AK2vaVgugBF6CeMJWguE6ixSRRjUyiDegYyLrcXWA",
  "key22": "3QXKVjkqztFgdk9aF4PF1XjbUfjyeCShA2RmDvfYkWYcgqv5A2cMxPQNib4xJ31e7QuzEaQMPWUze1LuDDUNtYtK",
  "key23": "28pBqHKy6XsnvEgs2NQZm54TqQjqtwef7wMaHYTShE97JWfjCMw7ETo7CCBaTaYXLsMVAbnZEcJDoFooMzDm2M9a",
  "key24": "56qQhwceK7r4YsjRhq4BcpcxLnK8sfBJ4feh4Xw2pRCzNgAWj5jjWe6Q1ZN6ANanQpymZGHjeLUd7nKzyhBaaHR1",
  "key25": "3gTb6SR3sfi7eDWXc4yWv9ME3j89bQviJ7u6ezTqdqk5qJQZMjbpJuVgqbvTrbaB8JZ8HAY9FY1eRGk6vr351tVM",
  "key26": "2xyv8ERgh3Zos72KmGbkLa4VrzKBERjg4AqayKhgdZi6N9cT3XVRgghTK1xWpcrna821e1WhDhhKeMqLLj1cjyz6",
  "key27": "4Q66bA8UML88PSa1GydjuNUvcSxg1GVTNN5DhE8dgBJWZWTGYEZQW3YietF3waFQDPuksaHNCTDMfLrMJfkbVruU",
  "key28": "2N6dZNY8w9DF3Cq2AJ76xGTs2ZxdHfK5T8drADFvmuF7fF9QAvbYFJYNjxDWa428x9z4Sb8gmMiMSAGgzTpnmsZb",
  "key29": "7t7w5Pdz6DyMPqK65LDdE5uib4pHkkYAZwbHeS74nL6dv4Zta9iWiMPWtATAszpboxWUcMKcbfrhxiekoNjHwki",
  "key30": "2D5Te5BwEjYemt8k83HbkHuTgg8nEwuNukBNzfz225HfupxHBccxB6Nh3QZkkNR5dtAC6E3Mcc2kTjNeh9SyfQUL",
  "key31": "4dp5LF5Q1Kquu4gvahAbEUvNCERRYyipEwvo4YNDJRLneoizypTcmKnEsSauN7wYxMYtmDsU8VNRiCqRR1LQVqx5",
  "key32": "5NkC9kLRoLURA5WuYbVfLituBhnd8MwvmDMhkDz8Kg2MD6FcfFT4qC7wX6Lf74HdW4oT8G5L4mfVPMuTN9RQ94Jf",
  "key33": "4rkHiRGKPed9AmXmSU84TxHadcLVavy1eMeUEuBu3tS1PzRAAgKFnAsnNiFPqF1it6wJvEtHhLxcHcrpb5yyfRNc",
  "key34": "AXg8u85LSGhyffgpc5AyYFft2DuXbSYCA2vseSq1r48R5BmLaY5oZwYRHVMC3iKbyXgvsjxcoD9uWyJppq1cnw1",
  "key35": "GHjB5pXeyJ69HG7mTrNh4GrnwH2doFiw4DTfeA2BkQeigMynTFFTHv6fo6aim7c6GRvgmCTrAUPtZqvRpaFzWqj",
  "key36": "2VJesoCcyBfEuBi37qHnVzqyGuACWvDWPqJXKyvqXKjwPguzyN7tNJXGABWuxqvdvmiz7WBojttGQ3mSY3CeJBz4"
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
