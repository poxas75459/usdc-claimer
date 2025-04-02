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
    "n1tdhSZuJ2Ck7nniFyC4jjyZcYtuN66u5UhpB596NwukK5xTtZuWfqYLPJDGS8vDaaTRjpkdqmk8VU3NePNEpBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Urs7PVt4yim1LXqmeQokDLiRfbEjjuRDQckypcZvPGT7XvGWQ5etUWWuH72j8zqXeDVhAToAKi3NEyKFtF6ozzN",
  "key1": "2rpaW2j54uFENa31dW2dddqynGXkBaAXzPp9aJE7j1DGTapaDQde7LFbsVGuyHhamGP1gPPN8yvWPFwQtGLz3acz",
  "key2": "Zr1kusceBE5yKzmHgY3DGuv2fewCEQdiYPkh3HKjZhkcvKPep7kmbsi1teW97StZjNMSfTkpxG3AFNNxstsi6vR",
  "key3": "3PQKZ9s2vRmuHHLD1kiWa7RLXViRj5pEL6dj18gRpRYvP9evuNTqw7xACYp1wZMQva6tXvXy2R18vY9NbuqwMGce",
  "key4": "2yzDyirrCzM7EVEi2Qi9GGWkHgF2WtevRgLng2XT7MgCxegKPMaRfY1PVUwCtJbSWtDMTBsNKGSAdV4Lm3THoLwM",
  "key5": "PCtRm2T8ubN64Y1FvV3ycrTQM2tjJfrVa9vGwaiFbsRDd8LLEkdKsMjf4gtvLLtj1AGTZeFEb64yCK4E36QeQhP",
  "key6": "3irabhkaJtdog93qU8DJoudmLP3VciqWavHC1ifgcxnG6ukpTueibnVCvxQGVVSzhDGf7UVbo6yiNvLA2iH6iXtJ",
  "key7": "3fdSsw3nyY7EGeo2p8JjpLsX8MvrrBEaxN2cf7Uc185Mw7XjTAptqsxyJf8eQmQToF5bKheHMU8o5NBrzK39KrjV",
  "key8": "4zon9KC12Luas42RPUwDqw144hcesSFSvGXhU3KcCo95F61yhpsg3tYrKSmskJhj9GmpDqrbiKF3KbDtYXpNe4EN",
  "key9": "5qvxC9GYoqV1df5TYP4a2KpRniFrExdjpvE9hngiV2UNXHDn6YhtVDVioDSgN7k9c4pMe149jSZ4oZKZRiX8g3tm",
  "key10": "ugsqnFEiDcnCnwQo2WRrcbLN9n5Fr1AgB95arsQPWiagwHdS8apU5A8cKGmr9NERwCSwHv4LGSzFh6CAAs8TxAe",
  "key11": "2NbgtSH9MmzmqKUtDY8ydZK2cNd7cEbPNuXhYBUHbbif8eTPSTee9BKMWPzkp8br2PcwMj5inicKk8idVUUCeS5u",
  "key12": "29SbbvRCQf7dGNMYu5dWeLrC29w7Fi1VYCF8t8W2mKf3QKb6CSFVbgAhAygTvxmdA17UWVVfHdjfZMFKvzf7onHE",
  "key13": "4PUKHesrCewvbMpDDy6C6RCFe6T9VGCQH1nM9MtXHxDxPWGYy2jtYmBZRjDAjWi9QjMVCc8TGUmuMZZj4vS8Y5bH",
  "key14": "4yB5YuLXCQeSs5pZzEh6w18BRMkBMLF1qmk7dsaX3WW6FFrAotdsKm5gTpCM8D9opeWtQJihgR3iyxhdvPAyajju",
  "key15": "3aWE1naM9wdwRH5WbTwTjTZv5UYVmr5X99dWyC7q2uHAcwsvKwUypRfSVBrnNGkp15jBnYiG2rPyDBYtphGQpsbL",
  "key16": "2Wk1bNWaR4wCSJZiXFrEn47EAynVJRJgCUSnuunUbwuKFW5RGr1WJEJ4RjhnbmQmXymYbW2rsGhH4AUjd4XBoQnK",
  "key17": "5HoMh95KRUcC73d5UDMbsxqm8w84jWDwCxhUfUh7M2Xh7t7h1Wz2btsKH1wb8BuN7zm4ECH84bGbmSbWNHoQqLNQ",
  "key18": "5m5YxBtGyg7F7FyZxSJSRfP4xY9o8HdbisJ5EkfnG4DQvGgxRYCNoq1CaNufgnuVXt31XNdWwMHHfE8SaVytVMh7",
  "key19": "2LSjZYMhRrgB47kwgbwHMRsgFHq7wUg42sjWnMG227vX8NLp9wewg9xqR9RWL1aeoQAbVDjJg4V6WPRQuxG8eGF2",
  "key20": "58egUTkhmhKmf4uZqBSwEmnT5GZ1QwpnSKEHkhcVUdvxhjd6jo4aMdHa242PNgtVDRkJuCLyNE9aJ6wtVCsyktKg",
  "key21": "tCTnLdWGWHcGYK1zVoRo1cAzLEd1yUafRyZFxQez3critNpAroDcsHmL8PDioF96mCGgfCpFs6uqjGxPFu7qPGd",
  "key22": "35dxrzEVWPhm8QuVcvqgaBF7kCskeuP5pYyCFRnJRwaZsg4PX9ShqwXKH1Meo3TL3BRsuREo6Rcs63GH6hxcZTjp",
  "key23": "a4vEVQki82JqHBhV1YR7yvdiyDvcoQ5SFVERyMwEj3kJi276cHJh2x1yYHLqsqmkRjXpu92pojJoCDB9iD6vQfE",
  "key24": "4Wkvj4wB63U6dmbNJnr8P8y4mPEYPGeAtDGSf9Y6buJvA5sJcNTWwAsnSdvJQwXVBh78VMgo9ECkrvg1ZtCRoWRo",
  "key25": "2CCJGvgrtTzPTzhR1iCLnPDTBrQACmXj9xD3Co7zrbkw8fRvAWWUcXYL1gAKq27yVouNRPdzNw6EkCh9fkrByiQc",
  "key26": "2jgTMbqhm6J6z8wVDZxhvpqWXbnuqe26Na7P69yY3wjbU3iFQgm64bBvS4f6hfqFX4zNH2xaaMGqWYfwXJp4axSA",
  "key27": "5Kk3txX1wXz4jY5BEfCCdb6SxcqSHMjDbT3WuUtj9gRV9nhnqhZNnYX3Cq1dPx3nB2WPx2bHpmuZ6RMLAU15Fozo",
  "key28": "7WUXetweRdYM71Uphs3CAKDi1Q5uz3cnTQkBGAH4Q1R51Xk34rov3fLLqW79ubHYG5Mg39Rsy89sSH1MWdf9YEF",
  "key29": "49HXxqbjNLS6hcGi7SXqfTbuB59RsHyow7a9hXU3Wz7KaKVssRDAfwWynFXc9WT16sH8kcKtphyUk3XJRE6NkvDr",
  "key30": "2DbNbo3aMRk9R9En6sTUFb5iubKdaDnh6mPvjhuuem7MEiFS44FS2x6FKDn92C8NNXY61C5tXqnyNkdprY3RaRwi",
  "key31": "61mQL7ftDSHhQodB1C3qepKsMK1FJAJGQjXD1sj1mu1XFikwNYR7RKhmvztpJt2icQvJSWe1gMj4gghhQ2CWMEwE",
  "key32": "31T4fhmSUu98ws7criseWYTeefyfSJ3HsjhEhuH4RUm1QtQckUDQm3D5SqHos8ZuHxgK1WkTPmeNMXbu3tebtBKr",
  "key33": "xrGMFUuewChwLfaL3KuwJQ5Z9uP3TWt5dPjzaHGSJFrWtCDUnc1iHsWJA9CzrPEkrpWXvEkBEApAyL7aVuD5LwT",
  "key34": "5giwCT9nDt7CtEhZ3TeBZ2HLttVcsdAYLXt8LK6iihizk3axXQm9foXRSyDATG1jbNkHF3gHkiYQAP33Q3y5fJsA",
  "key35": "2UNDc9xcS44t2FCSacnT43FuU435QLATuLoHpvLRHir6GcdcVU49Lxg5CQNUHSeAQUXNyNtFQWgEnYq5JAVtdfBG",
  "key36": "qTEdcoZP5eEYKAXydvwK1n7siZnHfp9QWsjx2mMim8HsAwGduk1CAZpJA2tDjNqgF3k7N9nfokTchVgvCCjrJtv",
  "key37": "nwTLkMyZGTJF4eaYSPFM98zkJCfufAhsNDxJBHCBkMauyaui3tkVp6RUt4xTS8ZSXXTXLFdzfara1G9Me3HWfGp",
  "key38": "2E3UwkCuWHWDMvnEDxC6GKZz8KzTT1nDQCQ13nXdPQ39Xrr85ppjSmsUknumLdjAuuwMGfLX5K1wum8osoSCb4Ep",
  "key39": "4ZiKpKfRxAsSFiYjWpfWssqMpCzjZsc72am9cjejsNfV65vR8TUSQDuEdXMSgu41DZLWBHmTq3U4BQMd8zXhUPHJ",
  "key40": "66svKYAsYR6TPLYWSv9cDCX5YCB5p3RxzHeGUuUA9DmU4FckfBpXDcMN6yitdncbDVWfbBcXyBaCQTDZozXEL8zn",
  "key41": "Rt8n7BvFzswgNLvfkDecpmGLdT6KbLSmEi6XCoxB8jacg1dorMoSzJtGyVs1a1aoHiGZp7wXZwAt1Kh84HWUcsh",
  "key42": "2mLQZGJUEfYt1iYste1i6NQis9JB1wVjTeXw1Efe6naPpRi7vL35a2nCENPqa1tXSdntxjqufzqYcUjD5Dze6kP8"
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
