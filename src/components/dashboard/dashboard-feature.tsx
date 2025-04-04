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
    "1TdTxvTFwNpM5fz7WxrZyze5fUYdAGnUW6fN6nrdvL8ieXMm2Q4A9rHdWGt24XdSEe1AhCPv63v7y6c6KmiZz52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34AkCy1VHoShFuPtBbtZCfAQYNQjV9REWGLxWBDnBMYjXy9r7hQsVqz6ikUTP3HZZTfcG9VK3hBqAhmS9V75K5Qt",
  "key1": "3hkd3X1i4DBPzkeaASQoucNDm2LjQrruezuvuwcAgu1PuN96VjhMa3GypyHbCk6XuyLgeUc6WtrQSNEFjtLBjVzk",
  "key2": "3bc2q2fT597DTJXpEPGYf85gJNn9H8wSAi4vQWAAXM9hdHNww31f3x9bwX5yovbsAULSsHWGeHA3PH6GMTtt8NW1",
  "key3": "4f5AjvwQiZQiQtMtcgbaqMp1vtpS2TBFqDrU5MUsVJAFYzgjmpBX6Wu8J89KKYnvpQdKSqTdZJfsoVqfF2zkEBLT",
  "key4": "2GpksvMnTdPciK3kivKuxyQfn5mn4FrM11CCKWCSNFSUQ98y87qdJbKUim3fjG6BR6PniedJBeeh6ddJw3qqsZhq",
  "key5": "3WaCFH7dH3XvP8aXuQZUV11adZ7V3saQ3vN9QQbZvQeagWm2tPH2aNKXzHiiDBhzi5hPCuLRVRa8v9qrMUkY79Sq",
  "key6": "5Xn3CwZM48qm7oQsYXVNz9tKtjnSip1bdZ4f7BAHirajLVWMXZQpaB5qJYRbQjw8UkgwheKTvci4e7FX27kPRQtt",
  "key7": "4nogE5Y7FjzZbSET6RQRfGKLustTyLmu7qsczVBsvRH44RpHVp6zbqfbDW2nE1YZ2rTVreMnANuyP4mKgm8dGbmG",
  "key8": "2V355CFqhsxhnE25sSGRj7gL9SLwyoBZjrpuA27sRqBF8Jzaomo2gx2GQYVjFuos3Dp7yaZXwPSeVF9QNmXPpP9d",
  "key9": "54nLAJrPBjZ9n342fVBbRamSfJebLZJWd8wvWPvuua4Ewi566XZ6ByfRi9uaXGEDZWuwDm91PQdpohMRjmGmFZrT",
  "key10": "UKzo7GM3Dexb9JDBtxP4j1Hayiu8jgntUDqfSNzHjmuC2JnwjCkhKEN5K89iwCCZzQbgkhrqVqPZdQceFcNFbVD",
  "key11": "3wk8xb3zWAXhVhHg64MNHpxiH7pwb2LNDmxDMGF51NwgzBPBpTUoo15vch8K6oY8RjYfiFwa3orUSe3YXH1ZdMQv",
  "key12": "3XnUY4NHwTZupUFeBi8op67DSq6eCxiPzkg8BSyA6ay5kBTPiGQhrevojGvbtVG1mPJgNbHxW8VbdkndPisssYxx",
  "key13": "3ZPnQ33w12spa5pVdDo4QJmG9kc9CzMdE1Hy12Z1bBbSPgevjZpE3uQVtJXcZS554cxix9zfw1eFkYGrv4jUUk8W",
  "key14": "535eFgrt6EnRfdYUgbWRZ36AN5a2KCgQhxeuTwcD2F1ygteZHPfB4Eaz12qJe1pAzS3nuG35E6oLxpi3V3Q9srHs",
  "key15": "5Jo6YJ9v8msHWhrbfqqSvD2FTLWfrnTkbWGNXV3uEt9CvjFMM5nb4KGbZ2q36fuGv8Hx8roSeE3NiCbbue3Ahpwc",
  "key16": "4FtJoEDHdpvV5kqmWmv66axg9Cng7TtBVchzBX4kP1cYYB5np9U513jRcvS4LpBouhG4bfGAN3Jy2HEM89xJDsYr",
  "key17": "5oAtuLoeJxsxVuUx6NXnDLcS6PymwF4t5jAWAY1w31dEt4ZV1hDfePqTregKWCY5bs21y5rDg54vFTFCzGTgN3Kp",
  "key18": "5R22ijw52RcsrC4de2upeBJNeUMo5Xyx2aTopp7z1tPDe33MfqwuTu4sNiRpkf2j72sDtnQABBRHDg1jeeVHphxV",
  "key19": "xKa958vXpgyiVTReoHTnH8kYNzSgGJ3TdjNZTMzeyLsAAzfszL8L1BwAqatQVhjb2G9dMkwRFFaCef9N7Cy3EwT",
  "key20": "b449fjvJQVDgts16whAUNpvwnwhiARPyaqS4usUML8C62JwyN6ao7GoVzSbVbc1XZKM7jFR7FxqCxRa5oGyZPpB",
  "key21": "4iC9jUjxjBh8T9Xy5Qwo3ua5smgF6Dg1QLGueqgxr1751wQG59ayQFpUt8r4CnjyMiPTg6jemNzupkW7eBxxZ9LQ",
  "key22": "2cDpMXLxmbDB6ZyqKYSyaqkkuw9qVumwwHjHzwvhqY2W1nytiRFM1vHp2tYMLGra8iigsYsqL7rSBX9euPbVANzY",
  "key23": "28smEQLbUAe7XcMR4pMiPkUcviBLq9LT4EXQnocbz1KxWR4rkQtFC4r59Tq9SvGLHsPRG8Ahv5ccJBfsC6dfssPW",
  "key24": "5sGAAqfwdGfFSDTqvH7xe6hec2uViPJijLD9eAgLFR9LySMuizZ6Y278LKe2pNec85zNaYKYs2ZHFMMJH9CWBs5N",
  "key25": "wPzVFapp11DixyXTNswjcmFa2NjMRdhek6D6CFKy3hvRXbFmPrsPVwoqKHMGiQ2YcHDP97q7HXfMsCLmvgUgtSU",
  "key26": "4akfJisANNVBqUcDHRfP4rzXx3fuQYoapMCAEicTbBmPwDosngzPPSohsdRMnaZeS7R32RDRBdbvnpdxpSoTihGW",
  "key27": "4MvXM8Hs9994TZPgsxUx6wcfoC3HR8vGNzGo5piNNohCawYkn4mkZqQ3UxnJmYhT9Qz8Ar6jiJXttYXw4YaESYz1",
  "key28": "3P9s3DEPKoXCG3U3ndUAfo33fEZrwRHQaXvPWr4GWMKbf2Kfh6opUW3QW1uFuVR1o7H5SVce1YfCRQAGqFt5zbuH",
  "key29": "4gSDYFJzcZq5YTpYro3qqLtPd7YQzuiHaEQkY5hyhgef2gHvb6cHLNDmTEGpP7JgN3jJgKr46Dria5WtqK2Nz8X8",
  "key30": "3bZczy6gqHN18vq5EYUrD6ESSqdFzYN3oB8pNSv5Hxf7vYTRF4hohkqPJYyytVNzzKazFTBhtnmYm94TRFyMnuF6",
  "key31": "5FXHwic4NKLydJx5BSHMzyMdrMmixzHQSiHiGE1gZUKamRsXXwk6udSf65n9dhLnH6PubbkhWGT3T6VHypvJRck5",
  "key32": "W2YjRTUW9jNwvbbwgZKJ9uVcXUnU8d47S7hhoEa5XLAbp5ANcnz8jwoGFZFCVLvr8zVGpoDA6Sn1BhdHg8rJVUB",
  "key33": "2irfXVJ6agZcRdjhson34DLsVujYMGCQPjvDg6XKQ1wqkXqm9y4349cKsgXYuuKC6bonxrz4xP6DCtbHDnWef99B",
  "key34": "4YkZ818vakuk4KkB75LzBnuo8STLbHWHFm1rzyGdptCWpTMRgdAeLPhj3kL8rGj7e7KRvBYsokXkM4KMHw165DEn"
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
