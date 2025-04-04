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
    "3B2c8XYGCQtnBCL23HEaHouaBA58m6CAgALBULYCCqhdrzCG5Ymu7ZH3jbsWfpiNVu37td4uNMpCGr25DYNqsBqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2esPa5L2DsxEyoVGKpgrkykq6GfhXUoszXtenzs7umckfj8Gg3NdCEv82di1FRXczRsD13ttoc5FtVqACW6VNUi4",
  "key1": "2BfrBgRJZ2PEPnhmvgfTNDLD7tLBsPmd3HfsKaDX8oQi9p1XsL5ULxSuNqKmKPAwRd4nfAc2CYrteNZZj3eAYS6m",
  "key2": "4Xfk9NrzgUJvC52iFcRd6RoqzSn17eZApQ6nQWnh1ujPv6eC3MxwqR7eHkAXQn5XQNSjKhszaoNpZjW3PS7EDDYw",
  "key3": "2ZBAyy1xZ2gmrTzNvFbYc5pZoWADYTu3SWb8qk76qNzHZohrCd7fYKe1WSC4gqreV199XvE8Peo8qW8xRYJW8bTJ",
  "key4": "Z6JiXxkKAWo7D4ENpTCjX54Jv3PMdz3PfejVbtngg2FHovM9aTt4xye1nvf1fYS4zDE7R9LW7FE4JLJh6HF3qLm",
  "key5": "FnUU8xr8ctdGVM7rh8cxN1nD8V6CCpbAcTXMHwDdkbpAocgN27gf9NuJgU2t4rGcCkA7j8kWcU6WeUahZ6qSDSv",
  "key6": "2GDiTmxNW2s5msrFLKRdPqqhh6jK1QB68Zdw33vKHkKi5yCeTiixuT5zjsYpkdmBML3QicwZ9KSraXWUtfG4W2fK",
  "key7": "FYZYRoDkMQw2YmEqVkjmQs3AbaQhXmp6KHxMKcKdGsRzfXLGS6tZps64cf3ermmm6i9rUjL8nSRyfHV2JhCXJcz",
  "key8": "3PB5ot1iYHR4y69HUptSYf45qbpavNHP87oQJMrW1wLRXJEejSSF5YSsMA4sxjbnkJNq8baQSkkPzQS5QXf3aK2K",
  "key9": "3yeQGwbmJYEeYeqFGviZvwbEV2ULXiNdHA4X5vePW8mAjZWUQ2qi8aL6HHV1oQF9TcaXTXqxBXdHmF2fGW6VvQBy",
  "key10": "2Fwvzs3NPQEycpSSrbF2r88ktvWmmyjp47B9LDgNpkk9RRpov1XhNnXW1AvWJ22cbkwm9ucqWG3R5i1cwyFemYog",
  "key11": "5xM5TipKVtenUP8xMEpq6onK4BiqqYwijYCzPCdWq5dNw1jzHfHabz4DyfdQmfDh1WKNGWAgfFvMtZf59jFPwVUU",
  "key12": "58dFdgxfYXJLEHdwVLRBKNLmUuUTkdauFi6ubZ8HcztGy24x1L56Phh76YBT49BKv5Nubahf6V76MWiXonf6aLp3",
  "key13": "56EbvL16hCjz4r1EtfXrPZQssGTtuG9Zhn9ocGTGTjYjQQ9jPmhGoHsRHHNSZgdseNnXGow1YjVZs9tA7v37LhWe",
  "key14": "5RknVevRW3J1sYfic1JLWoSJ3uhwmJzrCnPTPEYGFBnYu21msAT496XBe2qKCXsn1Wx2baidLec1TXrPsGGSfhbG",
  "key15": "GDyK79YmFD44DtYb3JPof2Q1fXb6VS4EH53FWqCCV6gsPFemkj98FphRT1unV9qUPLxcsL1Tr6nBBJPTUuCbxuG",
  "key16": "qdb2BWtedPrYnF7j5edFRLmxkdi479Kh9RiyY4RwtUws6rHstiyooJpzRkymAQK2939pbrVMmwUQdQgyB7Lj1dY",
  "key17": "4VnsnNPHF8RcrfBwLYCSzR3oAbawaYDjnzDJr6LHhKdbAeJBavzjB49okh1GHRnTAaAMxCWtBAP9smQy4yFHux4K",
  "key18": "67bBcdGrAcPyx7MrmXVyufqpDZmAz3fQsGo4h1hndnoMoSy2huhKxxWVEj6rGL9H3LTqskKyKbpV5kwQwweDMx9c",
  "key19": "3ERrGzmmo4szF9YSZzJG5DAigf4yaV7VuCZDgWjfyinCuqg11stZNEJeYdHnh8p1nyGrTbZMuUWv13ge7PaB78yD",
  "key20": "552bHodxQKs8d4EMqwWVeJcnap1KsZr44v3uTqcc16hkqk6PGQwu4wLGWX99mYtzt4L2QfN4kmSWuVVGu8nBDg4m",
  "key21": "4h1VQjLDDAzdLE5ETEHWbW1uWQAYWZo59ajeyVoCv5orzBa2Cut1oWm3tBhkDhVHAfX1D58uZ647utGGcfknqtLA",
  "key22": "51wLaFrLbJnXCTqvrb54yZABJPxd4eNk5dWspnZavdbAHxFCyP6UQeh1U93gUPCwVmNBXbiqDkH9P9izEyjW1cKz",
  "key23": "4amuEb8ZKdR8RQTa9YimNauDcfv2UkEq8rPVCy675gUKwjRNVLmik8Rb6sviyacQH5ZZJwPe7ybukBDg5nWtmDDs",
  "key24": "rtkFgJk4T2K14CfkNV9totgS4dsV7JiQ2t973Wd1ew32ELwk8K7hJm4YFevD4QbszkKQ6fKdLxQr7o96igZEorP",
  "key25": "4Bu5XijpBp4eh7NqkSUBwoqB9hw7uW2oZDk9dSY1rctz8SjBKBNSFvNbRsJ7GktYBdX9R782rNH3pZcDLgHe4AK1",
  "key26": "2MrSiqT9f1tLspXKHyMQxyKW2qx99nag7Lo3QuDVZgUPFZcLYr4856pTZrR3wjkH5XBYY4RhyGaDiaQVgWWyBrp3",
  "key27": "2FELviMuWJY7APMde5oEr6SgVMUwyA5p5LQvUDJo6FB2VEt5m9sE3jci7Hb4Kg8ErRFEdiPPb6CcxD6rKx1Dy2V5",
  "key28": "3iVRZRM4S6XGSmHbr4QQeaVbGmroDLGvHywkiE1JAhL7HhbemUqXyMaeumJhAGUh41pMom6tbxDvyMTKd5LyZK8V",
  "key29": "4mZzxsauUKJA6nv27YAXREy61AKMtrKRXfJ4RSXVqRPxaFpAwSc1KjtWtFCuxzXcZ28TFyKwu4tEk6A1jmQ77uEw",
  "key30": "2oyGZsHtQpP64VLrhSyvMPqmFVFy2q5ySVHzKuC168remJEZHaTyxKMsy1yxt7rxb3ePFwpKdEuRyiyaz41ghxmb",
  "key31": "4DQTrDSzsE5nxCDKvY6oHKzv8u2uormz6tNR9dD5nqLS3SYAbywg3ADxb2UP1tdGnkCVorGxtA8L9bABfuKogsWj",
  "key32": "4NDVy2AkPAxNjtjqu3DRVnXPp8n9NLLaGniTNnexDdT8FqDkU2BU6N3k2FLGxuCByujXeMWUw6v7KYsqxoXWeHeV",
  "key33": "42RtapW9d8iyVMjbiRRbLY1VVmtSJSXeJM8oQaLvzzPRH6W9MqVpSnHz9t7n6jNdwHSwLCEZiv9bcrAghRAXtrgk",
  "key34": "LbcUYXbSwammSXNiMko2ceoSynehdrZ1AnEAyKeYEwjJcVQBezAB5V6nKyfkuEZXrZSHMzBX4otmxRwwNELDK6p",
  "key35": "37ApD2BDGEq521BJPKfEP2UoTXKK8NXbGk19Efsp7g8RuKVBVDGxxxcWTjKXzQ2ymLeo2Ch6hfkMvJzpf2eEPtQp",
  "key36": "isFNqWrEuHhKU1AwEwQ7WzJsGaRpRooktEv6dn7HMqnAYpfwXg7whGMrg6yfeMrG2zo9aA6RqYKLtevm4Wyc3GH",
  "key37": "47t78GmwRL8RRajiZg2WFJmvJNgwdceXGXQqbqrQzmZ3gFF9dEEGg532nZFHtMFDnspikp5peMdHn34dPwA5YbY9",
  "key38": "3ZxoeBkqR4fcLd3ZE2vbWNMuYSrnUS66h3Zq91qtoUueKZ6uqJqWQirFkY318Hx4Y1krqCv9rjWA13XZ2pJB4Gr9",
  "key39": "5DX7Dvh6ehsgAsy59b8uoecYZzbe5dajZxocnuEzhdGNy8Ezqn7WKpyeatL1UvJeqSbQVpDvGV9ZGRooaSXd1P5b",
  "key40": "4AEemus4aQqMZHRvRQocDfr8U8x9d5w2iLf2ENSXn16ZusmjKGGLsqfx2vrekYoxfRqezpdgerPvtgJCSPfF81wS",
  "key41": "45spZKErRtoEVJKdDsuuUmq5v6ZdnqaDR5nMbYMmcRzJbhbQBrxxZJNQiHPKY6fR98HrnWyRgER4qdVECsPzhoWu",
  "key42": "61DsQk15JEAtzoteGsmRu4L7i6rWwUKNUkfumgRqpGicytzwpPGquY5KA9sPJ9vPSiDNNSF9uY4YQLDzKyZvhBzX",
  "key43": "323s8YFBCb69T718e3xwpfypsZr8MMsJVGthFCnXdyazeiijBF4Lj7WeF6THn6wcfhwLaxL8mA77PbM42MQRcX4X",
  "key44": "4na6m6GhE8TYFXppsNJpJ4FoPqkRgQbLAw7b5gUc42pWPxEJeKmwEXQH578PVRwtYEqxsFihGiXZF7YDjzuLGfo7",
  "key45": "3egNNpLwGP7QnZ1XA6n2DCGxnsitspYBXm6k2STBuvPYNDj4tar1ZLULU1kXhVFiCs9zUjuxXk7DB3NGsPGicUoU",
  "key46": "563XkDQioarUumbTiNbozTVFSm7tCqfZhabtwALyUUkDn4DpjoFsk4b6AsYuwYWX2to85RshKG8sx4ay8pxMWRqe",
  "key47": "5kF6YbmWmRvrGwhSNiE4V7ojJvZEruUbHitpkryykuLfrqiYXXJuKhc1wX4x1j2YBrYVttxG4nR7XVxNmDLq5Z57",
  "key48": "2jc97v5yrw8AtxWykD7N6ZEAcN2H5B5ZA5g3z5TsSzTecEzt9ri8khrvatQB2snthycQqu6ZjWJkqtjsvNWfcjaE",
  "key49": "5TCcujF9s6CJbL9D9zQ716VGrwT6QqGBok3eHEg4gKyxT7wt7DVWGV7SHELT5ewACAgbFtg9DPRHbkpgK22oRUid"
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
