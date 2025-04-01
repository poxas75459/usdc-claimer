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
    "3Ja9MDHmhitFsPeLiKHoHKkvMCRUhZWcp88Xiq1EdxnnFfK56KasqMgTm4cmbeH2JsFEuH6uvsdfyeygCRhQwtYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2rFomGKBGjDuavCowiggQnZw1GRvxhbe9Gq1rfXEGLHTpBgTAmH2e5n3r4LBZFQjatYajaqvgGTR3DbnkGJLnD",
  "key1": "2awWmvxXCc9D86pYPiLV6Bu6r4KLF7jHXVx4Ctz2ey2qLZ4cWrs6uzYRzsrVuQNZBgPZdXaXcRSVq4EsUgq1DnmP",
  "key2": "5KL7RUWv3S4nKKjMDZp8fABejFpvurcTytzdZesaydtrLknEymH7weUwsAonXmQbzkUpYyQSJprxYBDGdVdbkXRT",
  "key3": "3XXWa2HxmUqRQuymfRKHnBUSDqKECM75YDygQTT4kM2rfQhPkVYTjmtnr34tEUnEygxm6GSkZwxooXrs4NYkjxND",
  "key4": "2WN4pv8EmPLBjFuNHmekAq4bZdVDWZV6nwYX875TY6X5WjAG7xzU7pz1KWjWhr3nbz8AiC3vWFBYuFjUhARt943C",
  "key5": "2R4W3wMf1TRU9jYnNuZeKf9MkerhLJgqp5PzGmnFn2GWJViLyK3mWCHCRQJfv5X7kCgoyZK9U6h3S8aNRbT76mjz",
  "key6": "YqE3xbZs75d7SJKjBmDs5r1mU3TnbqbMrdxKJfxdhh7Brr3Gt71Pw6Yndxy6wCcT8D2Jyu73tPH414x3pkBmwMf",
  "key7": "31DhFvnKE6nbHJLqepnMexJF6FejtWtrDK7m1LoAPpTvj2BySsAAxhv5aGM7ZjezjH8G19yjMmPqFTYojv4TVc3m",
  "key8": "sLxTg13xEgab1SpSqKMXxNbcpHXU5mSJdfdfCZFy1JWti8ApLB84bVoeTTc4koGpgqCQxHS24Ha91ReKUVETDw2",
  "key9": "3edJQeX4diPVWirPgNSL712oUs2xbFjCBwNcNhFS1oCP2uLiuf8wrJp7mFWeCDYjNRbp2ojXmBUsP1vtAbKHyxEa",
  "key10": "4szJxxwaMvttPsYUX7XjdN6VpFHiD1RDw1ASGa9QQGohxL9nyvZWxnWPNFa28bTqfb6x9eA7oB3v1XTKCMxgq86M",
  "key11": "4rndqZe1sYk2zHBXco5EgCMpo6sh7bswZUB2NuK71xscTmRBpsF2TxqW5FccVLCuMJ7AYvbZeGDdycVUMNSqKbtF",
  "key12": "4Z1eVLBN3rrepHh7cZwbmH7morpZeAbbmDr4V6eVDeBV2GMpmpBfDBqfqasbTqap3sZBfh48hP1c8Reaff14en6f",
  "key13": "2YPrDBoJYSaCZPUY4Z5eUbzCTT9pjeeFyxYQbBRa3bQQ4e7kCYYnBoB66X62HgXyWoRwnMRw2TZuRJjmbqVrY4e5",
  "key14": "4YjmR88EWacMZ9CPgLd24m5AtNgqZS1RGYC4GeYRTVrjszXwtEModR6Z9SkqjCgrL7PBTMEo4yLqpv7FEDBxb49p",
  "key15": "4ne7MqBG48ffS99UGYLHn3ooyZjaCBMtpjevsBimjbi7NL6Uay38XZH1o5YxKyRx678xjy2LYujuYqSGvVicVAV4",
  "key16": "5nE5wDGyvR16HFaya4fczqCqQBxrbT4jdBgTceswaJzVbR5X3DevXbgruiHSbjb8pod6Ut2mqrsiBbScgqtat8pv",
  "key17": "2Cuytidv1dNVfawkbD8rJ4WPTYLg2723sYAXhoDTWywBSmKSBvs9eepgeHtqpTaGrA3YuMu68VmqnTb7cKfD9ZcX",
  "key18": "C62AhJ8WbBjLN7KrBVpYcKVi6i3Y8RCdEFWgTuskEkKxriLv7JjGu6FWvsUvU6MYv6cW1UGfG6eNh7hsaujn8Kf",
  "key19": "HhNX7QfBUPgDkw16HdNkFTvF3WmkX4bzx1Xn1w291M863RTX2mydJ3Qk24YueP9DTMSLjLDjyEBNkxAsNGKy512",
  "key20": "5FsXzV2fMLZv3QhgDiA2JcZkSGR1EHLjLy8S2aTcVvUYNnN5MAPrKJ4bAqcZhTZH7Ypxz36h2Ep6hChAZp9HqT49",
  "key21": "9eiQjgmPAxr7rFvZzrecHoX326mojuqDB9wBWbk5JVTbAmuvFKPTUAFzh2oTdY8a24TdWYRoPjyEZHe1XRkthRn",
  "key22": "SEDgwLcaZiWSeewY1MEoXUP99LXbNk8n65HD8NmYa9bGXjKdi5Lzyn2KFfWadBJWxQBSdpiSY6fdhp5EgVkXgBF",
  "key23": "3E13YcxoAqkcj3DEaqJqL44Yd4aRzxUSbAbLH4tcSMeZVeThaHh2eKByGaNqt2BHAoMybTroKcy3WM2sQVyQF7v7",
  "key24": "4dfdQP2R438aeLgdxp1u5RGArkhTQ8q7h6888aJ59u394tTUw7hFQLesXXcwe5k9UuEB6uoxWRyy6Dr3q6SnqK17",
  "key25": "4g8nfLjv8NgzfuYWRfcqc822MHVD13dYjtsiQ8pEoA6KyEA2o5z65ERmJWRAKqaQvwgA3TC8TbCn6drT3R1Je7mY",
  "key26": "396yy4tAsCabwpb8re1k1dB3mJZZN58jytGtbLNi9NuQCAuEG8kwVXiNc9UwqdSWxWfa9tG6Mdhu2QoUE692J2o6",
  "key27": "46acfndjTiR5SMGz4kbabrrWHDmtbvKbKMZAhJRKTp9nuGg7FMubBukQbocKUoBYf3JUwCXcBC8EEpvCmvRGwUnb",
  "key28": "4Ywqj2TTocMgaMbV3Evr9Y84o19ZQxQmfNP1wSXcED7dKMjWgdnUtG5wfmeHXMWPdmdAtPnHXpmGSzz1tASRFWH",
  "key29": "5EFryqqxv18ZyeGYGBK4aBwQWWEvmVr6woJzh9dT9QVkzziMN3MjRy6o6qY7ZQxpXV8usi29bYiDrSJCcqSJUxFy",
  "key30": "4BfZQQ2zZeJ7P4YpAB7JFJsyam1qddpk6jq7dyjj8nJZFDpyudZkwimzg3BTv4PxyyQHbG1x1N4gfU98HWHXwkRe",
  "key31": "5vdkxGj4okBKPRsY2g9uW6pxKpugejNRmz1397NxmsUKRqUiD4YFe7xypkJymu7gy9h6pVzvgaHw1rapaGtJAUS7",
  "key32": "2NQsB9ccKaL4M5cbp2xz9pPTf2aiVvuaVNHDKLMyzanTPrszA4XRKtddk35sqCPyhTtdmNZceWQYG5CAG35dDnu8",
  "key33": "2UWbPJDU63Mh9wco7UiUiXibyZ1doiWEPnVTgJf5VhHxPxV8tNgELJG45Lkn9MqhA4VyfXfF7JNYTVdHCu4fZJTk",
  "key34": "5ZDRrDzfEEGFHU38WhNBdLjgu66GAuP4sESJQGpU8mNgqZYBTE6Zy2TyvwuMuTQP79G3fKPsbh7mQc7GDkSyWzZi",
  "key35": "39UwbnTss9WwuEadPLiK9x1LbajB9WWAH4G3dA8LhgVNazudQYW6oMgUVXn2VqmkFjrSbJCTWmmL4ELWa4mBHvLY",
  "key36": "5cXzGuH4FhZoPxn7NkX3GzzWknrdyKrt8APbTv8zFixzTVju2knwrVFPZ5zbBp7WWesLhDpq6WWCZTN6yfvXWeJo",
  "key37": "4KMsb8zMpLHZsNFa8iRBRYkJu6e3CXaXCKQhPTA7LL8WpyhNgvJUwSAWpVdxxhHCHqj86GAnjhdm2xdHj5bhFJ2T",
  "key38": "4RJ95XTRtaiBqtHRvmdnWdi892wyv1zj8pn9bnrDwvHT98H7xY87YcSktL2gB5uMAgovdHEQ3GSB6pZ1fUGBedvn",
  "key39": "Fhi3udtBDnAu3RNoGDpmTC6waK6PbwzKgC3mJtKK3tZ3R3DqSu8CG7o997AiHAysDJ9MVZSv17ZVndRnVUZqrU9",
  "key40": "3vTwMXvQb6igWCH4UU6uP9xWBjrWFts4QEksReCGoW5UdfM1n3vQBKUSmoLdYW6dyj7K1P1YrLgbvwjqMPog4VFx",
  "key41": "3ZaogpeYAXmjVrSYE8NW7nryy8kCGCJ1Q4HVJS7SojktHgg7jT2vxjzK7pNVDBEf3rkT1D8CBvd1YDMuQrFuLcTq",
  "key42": "2pXXkv7n1gxNhcFAVNDaz65xL9bMrTKX6L6sZ3trfve228ZSTokoEs8147ycMwHvMFDzrogZFvYADipHTuEitkby",
  "key43": "3CZ2fy2ZJTBBTuLWtLPrdM77GTjDhDsdH8oi9X1bZJWnYBNbhDTf6ZdmPWEYHZ4bXkX68AsETVuqZHtiMk5XjWg9",
  "key44": "3TfhQJxARYqwg6XBrPQSR2y71pGEpkPmr4r6dBxdUMtD8MnEYLGoyvKWVEchkq2ySbSPQNhZ9DT6jah8xxtXvjmw",
  "key45": "3872U8cLtPxh5Uv12r8psRhHBuaY8VHhWnA1XSneRJR8fBNjaFLyp6YCA7Xz7e5JrKQjSYAZUGZCy8qELdmMHKSq",
  "key46": "2U9suxbd3TYhZ2oNw85iXiH6BNjCuGpcxkWj2FV2ykZiqmBKXXRk3MjaHPm487H55xnnG1zz6VzPNvuFemXcmNSx",
  "key47": "2vN26RKzKvPVS9AG3GLRKyeWPX8uCjxKGmeYvX24VXbch8y9yK5AWbXjtAW7qQv4SbRGMEvBwjGc6EuXuhenSjcr"
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
