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
    "m5yQwofBZLWXDyT3rjUmCsZWkw8RRUu2LR1NznwNHgv9GxgzVCDx1wwRhB2SaAnsps4ygkLbtNNQbds4RNd2XtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UqcfRABkNWrAFGWYcon2g7o5Tz8XHdBvjFVA45XMnEh48tpMhouUNg9KAnTwfZh8SK2kMCeYnshdGpTYMEDYjHm",
  "key1": "51SBCix7iQ9wjckUvCGJyhNuMRmXjxnaW6SQdTkrhaQhzNr1dPgwyrs9SckiXN6E1TQuThyasADj8jPTub1ezHmo",
  "key2": "4AEVRSzYwVWLUsJ31CqDB6KUbbtwU4S58Wr4Utrci8H5NzCFQudCoNdWgAyxSBse2e8yYg7icjFctZE3p1ruMgzA",
  "key3": "4nmKnG2RNGVU4qfmiHGy7FyLYcUXHMQN2vDwiZEoaP8iYnxrMXefdL3ZEUZ4BGwrkjaY64zpzZdo5qRdKCmDRr6X",
  "key4": "3dgkjTz8DjPzu6VZD2kFG8QSfhT676W1vqq7hW9aBYtwAiGnn97JkTsDFDjdqTCoo5iWRWvveEShk5C8uE9SdV7F",
  "key5": "51oh9gKjKbdEB9JeTJtppZqEKQD5RpTyDCZSMMMNTRUL7N3KBho2pNem67BAk2NkQeFPjTT6koXSTqm7rp7BaizG",
  "key6": "CQEWAJxcZoEBn8y8BNio2g2GPbbQb8aV6hefDTGejNmne5fC1qWhCis1HNE9gKwtdvKX3YFdiedLHhFS17L8dq1",
  "key7": "5uPHg6L2aBw6L8X7kGDs86f6JTtBaUGhnKvAbzTrHaD6beNRPko2dnBsRt2wy64HxBbKKBzy6HwsLtFWe95tsVr4",
  "key8": "aEwjcAucwxNfiZNH8t1qpNDzPkBwKAQUHaLETBiVfyzpv7rNVHSdHJV3Q7u8ZUZ3PWa5qx95nPDvB3DW2kfcZLk",
  "key9": "4o9XWEueV6HPsmTZExmJ9WSuNe1urHGuvQtcfZT8ki2hdDkqgQDo5FUjPN8J2EAxncmxwgUqzy6tRf8DHfpMYtYG",
  "key10": "44AERERAWkEyHGdnLPYekGgT7cEreKDwDREMt5s9D4n4qEm1TgnbQoyJwVyZepd4n33Tzuk5N44apr4iKwqNGQvq",
  "key11": "yguL1zu2J2xen2R5E1k3kfCk4LuDjgG8iyQKeV2gZJhLmaymRL95mnyYK6QxwFNtAC8CtnbZ23Q2dszUJUNgrnn",
  "key12": "vQg5Vy92Zr6WCkZ2NUxZW6VFpxvrLzAEQg9dgXbLn14kCr1H3if8JDNfVZo5iF2Zc7emPGU16Djkb9LUPSBPjcW",
  "key13": "5H1rRaZhRZqazkjXAaptouMsTmsEd1VehU3P8vipgBMYCJ29fCGUypgYDQVnKPZjiFzXeQrL9SHedsH76xnHiUB9",
  "key14": "22fgftuYFCrGSZMcGcessZotTvBHcYeFkNwzqL4yJdpeVUph3mNeac6FqrKpy5gitmp1XUqYDzsmNLh8c3R6b6iR",
  "key15": "4DVQaPriZevrSzm9P6Zjewyf4PT1uNWkWK9vWary22F4Hvj1BgpCu27HCGVgwoJiGCgWeNdVh4bnnuWfU3JDrp4A",
  "key16": "3DXHLMVbz54uK2gHMTWUtXJrH2YhYzQiaW2cJxA6HFssCMQkBcndFuQjDwQF3UNRsw49DSqztxDywxf8ncyShaPq",
  "key17": "5zrErSZCg78fYPGkikfNoWN9ES3gyHbVVaTE8xn7VPwCrHimdgXstYd1xn1W24ZPNVXgfqKXvBZCxgcFgqM4q3Uk",
  "key18": "J9xXcn14JTDvAz4dT5NK2CTcH6xGA7WCzhGHrjqiAbjgUgCbG6xRiu2CE4263mAsSsVCfbATRrr6vW2ivEdXJhe",
  "key19": "nw7kCTwuaMzLuEPyZFsLyBzhZkbLPZLo6Yo7KhqCRqSPatgPxh4dM6rLESEJUHFbXvczuqpLEDC3WRm4fwWFa6b",
  "key20": "3dxeh6WCq7hGKX2mtNjD2pvgQv3hEAbNPeyVpWnNizu18NCfY4AqckzbckGEBBJDpE1RANECxrZ5rGRjQyExh32k",
  "key21": "5VDvX6Uxm3ZgXkmvi9zizZ1XZBb2JjrP9VNEV3o52e4KMyX6CSHxdi1CfhGy3VbYu6z3k8VnW4kUSwQhS1Z3wpcw",
  "key22": "4yLWk3dvdH9gqbCMpdTTyH3g27cuhv6peViQx2m6bXZSBnSuY5kVvQgYH55b8jqjsMQZmtxqnE8F9gmmfXLn7CfX",
  "key23": "4joBvb7cpUhMVBdAdzh2vPxSmLd4S8DiAywbesecX1L5Q7ubWcJe29peMFLc289eGnzGDRe2hAgvfEi7LLYMngRD",
  "key24": "3pZSx2NqdCTS3hQzrtKLh7tG9XTCU4o3YyBFcXudVB2KG57gCSBfUXuGJ23ihcae6gDQPjFAcEkYYUtdghnaTjzy",
  "key25": "3qjQEnZ7qkMjYWGCdm8psGDT9DHro1Ty3T16u5FqYm8nXhZsRpHZfXJqasbxhgTzZgXsw99J3MUNrqsd1RLugPSt",
  "key26": "2UxpkwgUWQHH4FDFjqrnh4tDqY5MLuFtbLL2Mo1XSPTjTqG98jpqVtaAtBGYxM5rwKjzLA1k5TPmEam2RWFanki7",
  "key27": "33pCEYAQKZNP5afEuHEeymzLjWCZLGYCKeDURJd3yqjkugXVzfA5fB9TaVLV3f1ejun5DHisVNsEtCtZ8rXc5x4D",
  "key28": "583GwR9XNTgp48PSiPtKTN3WoGDi2onbKqC5Z7Y65rkAo8wUzgoPWsVHFLaGovuyy6ih8xeeWqwyQD1xkeS7v3dc",
  "key29": "3xhttgtsTXJE6aH1iCFCWFJgfYGzUCEzas3q7jqCJj8tGerfKcBYz5fjiMv36gXYyJSPVCzBLM34bkpigYsQDAbV"
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
