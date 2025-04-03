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
    "2LpjKQZQnGzDSoyJri5GtuN8mgf3kRFJMeAgCaNm3VquhynPf1EUMgc4ddxxjip7Hmj5CT2MtAjjAo92qajz15o1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HUTVyYSFd9mJUNcxx3Ndc21dhtZQfJVWoDfUS6TB3JcHEFTfuMxem4r5D8v4EkJQG9nr3mxcmhDRSXUTr77o3AA",
  "key1": "A58kiZrhHYqqey6fUszUiuJHpiyLMMAm9iPiTmqr8586HmRPzW9tVKRZNLQQ8j7QmvEHgMxAuWvNrCJ7jhN4KcA",
  "key2": "5S47WzofViAmgj3WsxtSbih9Rs9VQZDdtVT7YgCbbZtYqejYhuTvZqEQx29K53NyWcd6eNn49AQv9yFy1Q1mWQrW",
  "key3": "434f5VEo4bbuTYmhwpC7aeTJrwam2P9h4RJscHzcp8wE2pxTQbzzcqiVFD8R5jJMpDi9pGhRd4v2cAAh4MPcYjMB",
  "key4": "3yAypPaBKmX8g9zW8jkDHx6nuAX89DtjJa1jQWBY2EjtNRyyKQKmvZAuY1eN3KnkPJZGuWnohLo7uZ8BHNdFS1tp",
  "key5": "5B6W8tNnni67UWtkCiV4P7VuKMffAQfJM9FiyJHTYST9qctrP22QFfoDbYn1ihLGWyR1msfkxhRAJLEioAX5jfEM",
  "key6": "V14GfFmPGihyAsnfZhK2pJkCUshQz8k8Djqzht4XwA8szDy1GHUEJywPtFBNmYMpN99sMqzhf2hYs3q5KBsRsZM",
  "key7": "3mSafBmEHVVfUKvd533ivrWReg1B4FBh8NxfRQn7d4wwtjwXppnxLmxQafQ2ac4VqW3peScB7xGTxkoNJJFxTzcW",
  "key8": "5GugtvpkTgedffL1kqnujFnbxRx5bQX3X7WKKQtKhxhkYseQqdnXnF5Y97oY14XdS4tAdLyEefUACU8Te7fWmAAt",
  "key9": "4HcH8U8fScSELixBrhJYdRZnPwCHVFoCYkEfmZCp6AbDzNkKGfJefYMjbGEYnYxuUF25j6Rs21P5CvFYMQdf43T",
  "key10": "4JqLQyD4h8CP519cPTe2iZnz7UMmLvPHNknqjbzyEFXSy2jdPirj9itLu4VzKRL6ydCHRe8Sgzb3WdXd6CgzHESk",
  "key11": "3h8UV2pcrcPMCpZ2cpYthP27yLC8TrWgDFRRwg4KT6cNexRc5TPyjpSkryTK5E3mfHb55hTsdeSuzPDndXt3cHst",
  "key12": "4PnuPBr1FE2oeGTtrBmTqafVMdrC2iczh3wx7C7anF8hBLJ7B3SwZaY459afnwrNc5BQLPoPvwzmxFj248CfijUj",
  "key13": "5Dg8uUc2czQ3E4TJjq7HEKyfzBPQL7MLiX1hHEWTJC1vgpP8HLUE8ToUYJ2ADYE6NiyJvMsbJ6MLi7ZV8iD9iwJq",
  "key14": "3vhCbuoaPSPci84s8YBjnzsW7eB4GJAVaMKCrZQktw2vRTcEFBAxSpcFyQ6SrBf5AWCvyDWqxb9dEPzES75eULV1",
  "key15": "4UYB7XaiHHETRoaXAs6X9d5xUTeTSbht8FFYUxa5spSkZqwKrxWELPQzi29o3VsHXPHVWjVphzw1zg8sHh6Q8aHd",
  "key16": "63rPeDjm8ay79F7VhS3pxg3dE5yo4NDZR1crCQDjFoXp7dJhXivdC4iMtQPxx9VHuMSGVFMqWivNAzHhKto656Ht",
  "key17": "38PAtXjtzq9R37sAzeDm6KkDtAKtQ3GVUe2e5tsjsQ9CAkajXYU3B6rdUiDRHpLJx2ruVDJPQbhag3LA2MNQTjH",
  "key18": "c4s8VByB61dHRWNkLkqnynhB1f6AGxj6HZJCnK9KZZuUNRGxsVD3tMzvyu7Hry16RNmPzHEk7TWnyp7kXB1fMYe",
  "key19": "4MRvgBnm6tahwCeKWBUmHTDnqU5z35QooywGpyTCdeb8BH958dJ8xR9C8ebGjNrXkWRrXswm44A1i29LrJ56F7yq",
  "key20": "2i7FvTF7EebpEdyYDFaBHLvk1PtP1GSjZxtkYkVUYSnmR3MkDKq8ESsQR7rizLLM79KkNPFnryNPD1y6poas9H84",
  "key21": "3gGjE91GZMZoUuqaEepCSsVAyitTkKZhKAC4tjEpP5rPWwGjY3H6tPCve9uwt9sFpFuDHNrhmYyyvZbmFd3PkKEa",
  "key22": "67W94V7Uar65UUhqu3K9qu8MeULcmwRxART56g2NcHdPjVBSVcCpxiwkssaNzDQ5SLNyuFFBp2zjMio5kMoe14nZ",
  "key23": "EoRnusdPLEWFfqJ3SGb3niFpvugkxxEUdwqkBHHM8WMXcyW3MCp26WHZWf4Ts3bNBRxiKh3b6NBJv76eVg1WbLw",
  "key24": "2LU11P7jwpyTevT14YUJDPJsAE2XCYGo59WzLixACF4SPxUqdqoX7QWXA9spVYesd7p9dQD9vKXJvJkhwLC8oSHq"
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
