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
    "4uc2SZwX6n1dh3nRXGeQUWWUjoq5FsKwY6dy7HBHhMyuKM6mEByPYhZVwMV5BGQ3DJdDChnZcSmibkCfVZDfsZcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KUTXvFwbaMwEXDASzmAC5wo47puVkpYVHt6qchuxnYA31ffJo8X93ekLjDyLLyCi5gmP93X4WxvYQmAUcGU2CfU",
  "key1": "2j91Pv2tMQAamVF8JEL1PrwqXTppfhebGz8uRQX8QVLdyAA3uJubB5w7sUvsTW6By2ZbMVKxJzNYeGHmuiZ74HdZ",
  "key2": "5gXxhWhYNzguFsGyXWR4BC5M6QVqX6Z5u6zsiGq59acAmm1NDzwdZLnCmKHut7RferTzq5VVvJCzfZGry3uwF1Yw",
  "key3": "5c9har2T5qgNzYgcoSrDkwEh5doeLJNPTeL89d6E4gtRvEWQESNaYYmLikzKEN5yzan7opuLoVADL6upGDWCDQPE",
  "key4": "EQn9pkJHCs3dGa6YKy7qct3KnDztJxDgpfMiJhRKD83Q52h2kbQySTbYEYpPrirMejmWHuqL2K4Wq2zqeqFhPQi",
  "key5": "5mMNckTxxLEdLTJXQCYGQQDpEavRVYQwk1dx1HQNJvu1b2S8HXLkJAHqgiPt5eULGucnNXhSCqZHsede1WenWHNw",
  "key6": "4vTrVyUoqkXdoHWg6L8C4KdC6ZJpLPbgtM35aUs331rWkGUbV4dSHm6mrQaWveJJ8ifA9PZNvoqwFFKgVudMYmcu",
  "key7": "4hydjjsYBsoarqu6Z85bNCy2GMBKdTrqXcgxiJG3yYdb1bEAHvAxNLHRjUss96eDsTGfdfEoteGcTwqpiQW1fJve",
  "key8": "5RUfdEKrG96EtuhhymbvviJbbPA3TcwBCgAcfTpqXNQsfzyCbXiffLqLbidesDeEY4NJZZdnnbF57YLStaz7wd1W",
  "key9": "57knAJaqvaEaWvkstFVg96Gi4Jmf2JfX2SPyHUrpijXEWutC7BijfPPxRioMKbVHi3vvqJKDvAPuyUdtmqwqiun",
  "key10": "48WgNBzuGbazK5pvuS44af7WKc3vJeqH6ooWyooE7D8TXtKRCieANcvJATDZUEookSLVUumSEZbinHk3hmHMXEZ6",
  "key11": "2cBpJDKDv2W1AeH8HV92jAAqoTMwBqaWm9PwkzhNGbJnbSKkPhwT1uuMqUiiXjodgBkfqu3ftjLFa2Mbd8KMCoaG",
  "key12": "3NqqNX3fkx8k7WYe9xh36qm2NHCqnNL9EoedACieiDEurpdsEmMo8fBm9n5i8aebHvfgUTtXRZLnPz1tTbfsdjMk",
  "key13": "abxYXcm6uf8AxLQbYhMrYf1XVgUUb6j77KSXQ6sMnivsKhbhhNwJRZPfUQ8oFBziZX1fVFZm9ePN9RuuEipfsBn",
  "key14": "TdTcCvqiGEodFzxc4durcVrGG78dRfP3B2mpnJwwH5bGnia2xPEgmFsfPScmAViUwQLgs1eLZBifJ33GgnwkoXU",
  "key15": "HBkxsaYMjz1D8irJx468pAkBB3hoFaRtNTGCb7wyuyFkmJ5pgAoXK8auFrcJ1vwKsvYkXcXCHpoJDDNLvmbPfG1",
  "key16": "3jgnUaJJKaHdyULaz99rEH61kpjW3eevit8rQsh1RQWrAQtNHhTrLN8XBiR2vuSU2en98TrXjvjT4h5AQosAEvqv",
  "key17": "3JDV7dkuga4d662XZXH7bd43xyuEVkqKkgu9zjN1yrmmzzuvRHdkmfm8xvjYCRUuJpQs2rSqP5ENhrnq25r5y21x",
  "key18": "4q64C2qLTJiEMTiAeczhuDcprKZ24i5ZhkvBiJf58S5g8HV6fbQnBbEi92EHw5rwxQ9sk58iv6tTgavhBHn6wbRg",
  "key19": "3Shk6sVf4k9NwzBEuE4rCexkcSE4SDHG3zV5vgaMPkoZ3BHtMTwi7egyozkbumifV9mJT9jQYBjp91rjVBsdWmWk",
  "key20": "3V57KYxT5zxnRAba7rXcksRLQNQ5cvkx7ShMM1NYpMWcHk8M4e5HNe794WhLb7ZPQeRDZNoPcYueGjvoxgjAdMqZ",
  "key21": "49f8LJSwzgwoHGHWtzTt3qoXVEZxBUx6sXCkXCBWpz6X9K31VwASHYt3QZ63tyFUhfm2onkUD8m1LJRgtb7hcV7V",
  "key22": "62ePAS4WzKqTj6seAMsQs6FdCTEghoLEtw7Ezxgsmd1Q11BYqDf3hrkx3wud897pRvvEcfjsx1QJSQoo6wyjA6a5",
  "key23": "4aiNL1i9DPuxQ2n6hPPZ1Lm4Wcd6tEuR47tcBjYtF8T39r83m9rkfHpP28GFsvZ4qYDDpQwPxqxd7N6GCF7jq2bY",
  "key24": "3sZa9WDCVkQxPhs64x7HVNKSFMKxEQCaxc39nZEkvTaPfdjuTqcHgbKCyfNZnnjEsp1T729pKmN3fUvH7if6nzWN",
  "key25": "PiXN1gWUiZ25KNeaHs5x8vPLNiTSgCZRJwN3UkHpBxrPQ9icoGxLddBVyQRfnda73XZfzSEPuTZPU6CiMPaW16h"
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
