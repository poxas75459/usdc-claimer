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
    "2C4d3CiwtuTE5ysH18azFxqAsSmwhuuHQfG5tpLyk4oYQBuAsxwx26PE9nA8HhDhNwxUyiFt1uBJnxg8JFpfsCpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5djVCExpKxr41nNJUeFK523n1yuApNfPBSf2Sbnk2zwQeorhwcdSowcVASx1beovahuFuwhZg81X98oWjphhmEFQ",
  "key1": "sSCvYp7F1cWe6vW2yAVqnEZ71Moz6gj7rSkYktbosoK1d5gYBBU5285uTtPDFnkP987XdY4pvVtoRzXeQMJSLRQ",
  "key2": "5Vjp4psgvGTU5dUHQftSWwJXNiyEhwC7N2SUdZNXWEwstupt2p3P42LRyGTVaohsi9dx8NaRNPGasb2NGX1oYD5u",
  "key3": "36nLssuxJ7iotcK6CSH2eiMZTjZHJVGCfXDy62DUwFtBkCiwrv9DLguXcNKdKWDfmFrgZiFw6NjiLniBB2YceRqL",
  "key4": "7jVDVNWHoy3vqZr8just1LhfxYSWd4aQPRDYEn1FwgzXr6zaKvT5LuujdtnvMvBpL3bJ5mFaRRUPvY4PU7EK5Pw",
  "key5": "4qBixzE7ZSK5PW5nPoyijAN7qimSvQstKu4HRdiwLe8HoAdmouaLw2uWeBxSF5YUCdwMXdGNoy48f4oFF9HRhXLy",
  "key6": "2dfk3yueZk7fS2zbio9x2oAizigmjWSMEJ257F3C8NoSgNE7RUWJ8shu5ZRTgvqZVWtPZkFMP6FbMP9aNGc5peJ2",
  "key7": "DY5G151xohzEmHZfk8h1vk5q2ctZGPCPaCv6FtjGEZD2ZVzo73xRyjXw67F65MEaeL2inZ327ZiMTxcd1BH1Df7",
  "key8": "5xBfdo4NFcn1xFX3MauRMWqC7jEXYx8pMrHKN7zYkS2bobWaFW5hL2M1Pho59omzXEmct6kwaznkwkKhfZJpD8GT",
  "key9": "3V7F1iCdYjyiBE1Gd9iE7jGLrBDciuHoCeWRTse5CZcM3TavwCgbx9McdsQSuqB4XJxm15EoK7vaDLkjf7fpCamN",
  "key10": "4DKkjh2iLahkCwEaZ6H1CcvdsDY9iMGnncMWvSKMCjqRRTYirC6s6reffyfGaVXP8X3sKGDuqNXDqtCcZyGUwggc",
  "key11": "ZTAHRUdVfJh3pKgWAgFWdaNPrQmiSiUyd7cHd2JcgCQofJmgE5zpD4UMmWWuwRKZLAARqPSBtPPFn3YoAWojx2E",
  "key12": "5JiHjPYKpG3NQWUDNyTfUXtRgmK5nVW4rVCsoXay64JDNiL3ok5nXdLbe95FVMYMrZKD7Q7ohac1qBAzmsjKW7mi",
  "key13": "3uvbbNfLECpSBVvAdHB6cjAJgDdkHaarT6HggDJAR9rnE63W9Y7eXK1BvVNkLJnVHejTuL6GqvWouKHaLSGuYFP",
  "key14": "3MtBPHd2aNDHUwEPYHbLbx779kQANL7KWdToJHkK1iot8hcXJm6nWeZLujNGxk9giQy3KLMk1gVXhP5WHfnVxVoN",
  "key15": "3winVc56Fz9Ddad7LFXfE1Q3wxmc8PYty1RY37eDxtVYs2dApL3ojb3pZTTpi2bF9RWKU3o8MY8DhmhLpRUKMgpf",
  "key16": "54LrWVbNwTkmWPYedcvtxqbq2auwmtAZtwJdaFpgWsNv1e7LZBAV5xjpEJMAufdiSZG17bLJZzFFwUwiYw5iLEhF",
  "key17": "5vaUBe5czA6Y3qvMnCjLnMbqStmq4axztTBMzsppJMMHpqDc4Fzdt8pSRTH5utz7VWasnDELRXPLsXMuAs4ec1wz",
  "key18": "3aHWGShTgz4e2YnFZfejyCjjGu2CaBJPhzsVzaVq66NKvTjhcN5s28WNCT1yP2Ro6Qe3cihLuQq9qMbv22axfjGn",
  "key19": "2n1hCh6hwfAQbe35gkfxEgRRsmLzzYPGYZCtH8gUPf92vLuN6hwg1fmSr1sr3fmLuB17Z2P7CZtMVdj11Tp8CAmc",
  "key20": "4DfqwVhcrYvWDCYXCoTWFA5Swvum6UdQPWMM4Cc1Ta7soWc7inVHhp2wiM8555wXPXubwvkhugyAH7363FsFDmLt",
  "key21": "4ET9WqaRwU8iMxeg1X7ZTyQAb13GMXGoW8Ue7AJ7JxCGEs8SNtuWFFDoDs1y5qiMGQAp9fEnzMxw3GgzZimQbwE8",
  "key22": "42aGr2tbq9g7doKwpTgqwkuo1sdS5MaKsZQeA4rjv5RBVa9vs4CEmM6bKpXzvVi6Qig9kC7ZYprKxwSoqFbo4DsR",
  "key23": "4gzaQ8yAbEbodHsG65F9CYSJ4T1kfjyvifWr3HhgGjRpXiWXciEae79RNXuooUtTnKmpFBo9bePCJ12phq4iPV1U",
  "key24": "4zqYunFLyXA2hsPazPNiQnmYtQ7yAeHQuG4YhqpQ5DGy8ckc9s8rpritbEN2FUZoyrMSK11Gngqp8fUsznpibWN9",
  "key25": "3wJ7LHb66cpmAV3XYKX57Yrck1a89TcZbeHjsHrVGFnZcpT7XwSJsqDR2BchowecqHAWP6zvGtmxKhpNz3dPRuYz",
  "key26": "52beriF8HVaqjraWEKSzBkKfhTzFn3mJ2oxWJfoGSU4q93L7AmiVEYDwFWzw1NAqUrrbcAJTi7ByNFqEfYzvueXe",
  "key27": "4Hw14D1CgKs6ZJTwmX9wv5Le2VxcbfqzLxpUz2cMXWj1QP4euPsQX3tChHCkHe9J94VqVGNLYnrzCAsgTtHtGvnR",
  "key28": "4SN57Hs8VZaJ5364XaeufQXmUas3cgnHpJTPuUiLfYrDKA1YGs2i4RJVdV8FkT1XJt4q2SAfBbfFmb9f6BkqRaLJ",
  "key29": "2WjPy3jvbYdLnELJa8Xek1MStZhCTkoJH2FW1WtNF1eWnTqZpxD4LTucG77XNJc4NC1asJGaFiQMb5x9vkHpQmaH",
  "key30": "5GnPgBc99dGLaj8RSM4NjYW4N5dRPSGjJWt4TCkaHjqH1jJhDZ62ynbjYoH4eV79kMzQDbfG4wiRhKHD3iVhY7jA",
  "key31": "hgFDSU2BxpunyUs74VwNqW2mYAzyQ1gQUkFjvoGRp4gPHQq6AgKfta7dixuZXwTMd6GEvmjNgcmk8Ma2kqwa7z9",
  "key32": "5YJEh8WynBYtdFe3nTyYw5EEYtjCtPbjdWSjyc1rDwofMFYhRwjdJuPd62T5wkCufFKLmtqM4Q4H88gnEiZfdmtW",
  "key33": "5uPEZGbGpv4i1DNzjyaQpBACiikyPxCWsjTfmyNHzj7YTtb8m1dW4JZvtGR8ccMUN6Hd1sS7F4vkM8HimFUhhNBq",
  "key34": "3RzdCZYc4Eg9SYXT6Gfdb2kYUT89JJSiFPajnAd2eEkRFTZ5CttZ2DUnYXWAUSvEcResampw8DbGJz34RHEoH6nx",
  "key35": "yBmRXGaqnn5ZaCmLJU8ot1oZsMZhAz7YTKUJHxPKrry1cUNuCJohh76Y3oETGMj6Ri3w6zhQXFdKyiaxVZBuFqs",
  "key36": "2jNdnTV9ozbsMK3vsfH1XJasUBZhEnG6JWNMUB1FCJ5G6MXGmkK1ehJuJbpwzK64dubALNMXzocQhHmJh57GhdK6",
  "key37": "4FDksFZhwZdBY79wWiKMvhpHxVcJf7hjophkiyvjuAz5NeHiVLj6DzBrKuGkD5k2ZVasf3Pzs3xYU1BSXLAXLiNZ",
  "key38": "39Ba4DJZaMp4ebVQikoaapPGiGEhaYHWVhszRgVMnXZBMoHeAj1fketJ56aVrXVE3cxSLshXEx7P6JFkaycQiA3d",
  "key39": "4U3ASFxs7zGsZimogjT5L7dbzZABQz9654EftWmQy7Czc6GfgbC2xNNu4WRMXekfbVP5wPJgWj8zYtnTk9G13gk9",
  "key40": "5qJ1gRH5nEamG6NgErzmTwHubGv4L8bqxxiRJcX6tJh98TgX4SFYALq6RheKnwXT6DzHZn7Mgo3k2yzoCnjsMoAD"
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
