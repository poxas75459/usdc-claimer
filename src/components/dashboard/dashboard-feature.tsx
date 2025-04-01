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
    "2J9YVbbyaX69wjBtkEwehKE6Azo8dkBEGW77Zq3USSeRMNGia8iuY9HSaJQFZwC1uxKiRuU5LAm6Tzz5TeaCyT1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S4ewqFhZV32dnuWUvYrC11KgaxSEJC89M9wGAmRVNEa7Y5D6WebC9VwKzBKXqhdNgDZDeRmq2cahy4Woj1bqkzs",
  "key1": "4smrnF1fBGbGhWTXHupzA9UU59isc38vDBwjebhq2pz9rMHzAG5uL9v6KtddgSw5objQ3vZw2xYDPJgNRD7ZxpKc",
  "key2": "3R29vx8wyjhSX8BSunVhR4E7BUseNDGBKSU1dSr59MeqyvaetM1KgLNcB6qzuijE8YKBDqEdoLAQaQopE3UyyMPH",
  "key3": "5BNByAeWbkzWrFun6kdAmBaBT8YmkXjVjKZUbbXv2o2NdzS1ieVjw1hXR1RB6nsDEraySBrrkSwLFMCda9VwyscN",
  "key4": "2sDTcu8ZrTuTytNkgwqPEEE3XSNBkvvZcqJrYBQx566Pjorb8SfVrN1YbL7snUd1ApALF6JREHWbDHTKK6DVRvF4",
  "key5": "55Tq5qcbtNPVShZBcYWLPBsb7ZcSNLbtFcN3o9GNj35R1tJf7Andk63WqV5ATE4jMTAD54rd7E3yhny51YWncCuE",
  "key6": "2FzebPYQtfXSAZMfZDUiK5Wo5V7e1WqYhUCKPxxt9WecRbN3VHTbnM7fe8aUncpxQ2fC4FgpiY8kNiqfXXu4G3rB",
  "key7": "5NrZQfKC3PEFZnx8k5mmNNQcF21jzXXP3EugQRrgMp1CpnyqP6FwYqjajWkxQ3y13BwVvK5BRwN3abgbRjno8VUN",
  "key8": "4s3ULhcqWq5toT4umzgD1pwPMWXnhdTVoxr6Zg92PXBhrQEvA3BEWjqdLtLZXVdEmtWdpfehWwgykkgjmXqBQKFr",
  "key9": "9FEwD7RrW5UgbaX5dLz2mQyMni3UBcFczZAPXoNDMQ35rQqfGMRyUzyxZ7ENKQzpdeP5LnnwJQk2jDDw8o2SH4L",
  "key10": "KqsKyQUdTLsGbMtYea8uAdjyPGN2Uh2JLrTUobjJk4h24sa8sfaLFjaxBBGp8esmcxMJsjZCXF3JniyTzyHqar9",
  "key11": "5oqgBYa5dk9ZZMr939Xe6TkghEQLmQuY1xYjGTiW2cJkAivM5BgBWo8UiU3xZs2JNbMnXkp9zPt3rnjXdJrdVHcC",
  "key12": "2i7e7fLukDnbjNgRdZ8xsFNVEvksdidQedmcYvP95QoPbZGybD2cEqozngh4Y6rtyFtqteeSecp1eMwjERiWb29k",
  "key13": "4QopjmGXCcG4G8sp2ZQNUsWX5LPhn1mx74imSRfMHEZTtPLtC65TzkVDgYTeWvFVjsDob1gQoTFXWwPxnNauMzA7",
  "key14": "3GQ43wrEPRwaM838AGxEMaQ15rXs3ivpAcbpVCxZJp927AWh2zHrvo6yeDrGBjdfpSStZu3rByotVuSY3LfoXFAa",
  "key15": "3MPjjm34Dxg3L34tCdWQnLFeW79YaT7XcGTQ3HDiLDypCUzXWX6Z68UBJPPhozxx1HGaZNCBNNaZGmVzKeM3ATq7",
  "key16": "58JQJMvvdxJSYHXxJUWZWGJHGdcTW2TWwBk93EYGKjKjPaqg5DBmt5RBMr1ApKbYtRjUTVrKWaaA5szdPpCWBbde",
  "key17": "5i1sHZfAHyEYXk3sgoaJX9mte5emh1KSf8uqizRmRE6vGNaZHTc9EaAXbGwiruauV6rajGuo37HSkanxQoL3R5tB",
  "key18": "2DjcEWPi4h5q2R2NRUvPx6XkpkrZ3iE2YkD3xS2xFYKZHTJQy574YWUFgU56f6igA1HX2abmCMn6dvLtjcu4u7tU",
  "key19": "4f7YWa9sucHaXpueDq23gpctmsdUYg9N4BfEa2N6ozg5NBikepeps26rw33aaS5aAvu1XFZ8QySQshbJvNy9EvPV",
  "key20": "4nUGpjpMztEXx2XcVUkVxt3qeYzKjNGovvtdaCtDNB8VhZ8G7QSYCEXMmwXTHZRMQYRJjxePJAuR6GmCLhjJXyYa",
  "key21": "4T8jEPCfemRxgWekXR3YnpZTTsspxdzfPSoxdhYbhqgYm46WjXky7nHtpfdUaMiM4iyzeAtg6iJxPKQAKLktN8Uw",
  "key22": "5adXWz5eAfcN9PGwAyNmu1hsB9XC8f6VVMTF2dyA2DAkhuyfmU1UR4PnVmq38o3KBEwTMaoGnWzf7MTEmAdXCJhi",
  "key23": "5aoj3kzA3rSgmnEQQ8ALfJ8TBccLRMcfvzKriZTE9hJHaPgo6pYxXaUzhZXzBLW3bDmK1mqYYqJS9r3acQXWYTRG",
  "key24": "pj8PbuJbu8YYgWmGFrwaXu3xnvNa7pTojK1C5dbxcYmkxAfuKNsDAbLH6QFhEb2fEGq3b9dAPKy8zJ1d7ra6K1T",
  "key25": "4ATLwsYmB7ARBDp5gTrckA4qsAx6FWqUrMh8HZ7J1sPFsmy6ZbnxefrfeCAGJ8GQZUCnJkXxJ93XrTPEaPvsvXgy"
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
