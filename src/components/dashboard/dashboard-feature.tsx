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
    "37nr4sfLvEvUGwV5vU1Hk72xw4GwpJXZ25xRcJUm4PhTt4ntL927nipSarj8C3dAD1ujDf53sKpM71UbCcXWszUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zXq5kctN6fxWUrJdUZkb5uvGQQsiVYWf8XTc65b8oivRyHfoGtXvdg4dkP13JgF1oPGCmPrSLrUeHcTYiE7Rtsp",
  "key1": "2f4aUJFfrBbvEhd4GHSm2cq3iusXWLrGdPqu81KRDRDxupYQrjuBn3HuxdywxTjzSQ2SE2x39ge1fdJfn4bbzYK4",
  "key2": "362vHs2eF8VKvB8cY6oTaXYjFvP8KHGYozqnXPK3kC3hqTnbivsYR71rdmYa873vEQoRWHcaiRZM5jN7gEmJ7HT7",
  "key3": "5R8rjfVscFX5frYGWuEDDRanFrmaHKCSLuf1XC8ygncP86wEGUYTcDKjfhij8sNtXbjN8ZfwbHLFV5tADA8jkhqf",
  "key4": "559VPFGjU9PSNDHZhZg1aZh8kZD1Kir6LTEvcmu9AWsJDucdPKm6dHuHN3s426cajnCwFtwc1X9QYxUuNUUw3GiF",
  "key5": "324UTgtq1pEWwN8bLRnmmBeMDwCQNmk3d6j2DUPrWgnhDB87HHZUDx8vKutGP2iDXe3rcUfWWFHzLLq23xz8NCcv",
  "key6": "4qVddXcSLBkTBUUa7ZqK1SZ5xoWXorpsxmEfhfUkjFy7SZjGxpBgDxf9XFEUQVapuyAyDXNgZ72y3CXfXJds6uq8",
  "key7": "2mKjCaQ7qrZkD2c8u5qZUzX6BHUAnZ2983mwr4MpSh91wfbqQH7aet53cBGVmCPRKyYd5Xt69X3ZTbGJF3jNWrTv",
  "key8": "55PNZBHgiokvNVXpa14yCk8dzK1N58asSPv1ProqGVnQPFmWeYtW9hfBopaoyfHKUuGHGNPLBHu1oTx1duPNAovU",
  "key9": "4kartNiKPr41F36gNouukkPxYhcJRMPkWVpKjV21fJkYG5v8wsXvchieWxetNh3xwDkj1Ryh2YzvrNqvhy5dLX1w",
  "key10": "2hskPJtoP9Tk3Us6bBW25KrANz1buWZs6gYh1kTSALCY3ayTvDXqukr6LitfATutWymyjzW1gioSA5S2e56NS5UZ",
  "key11": "64BsTG24rDoQHtuPivu8cEuNBDuPMZywurBDgMmDdoVDjwh4k8VRtSVDnppePkGUnJHHHHPHQUC4keEtRzrdis3A",
  "key12": "4EwHfuL9w9FQVKvnjuRLXfF4zSRBRkJnG2aDKqRaSzycY7Jg75y3bDGa8KnTZnDaPsBD1ivkqL6g38Zu1TP6RDBa",
  "key13": "5LmJbn5qdfrBBFmZsx9TsUDS9cTkC36uFBj2unpiJdFFWMdDMLiFWogFqngVg6ioJCnbNLsNemCTw6k2p7sm7ST7",
  "key14": "sREF9dTeB4UDVmFcpXVwqcc5NabA34HNjqMgCZMnx45QukB9pAdRBNRf238DV5wrFX1J8b4zMtNvW4Gv94SjZpt",
  "key15": "5TVT1FxVHg1ov9WmG44fuuVHoBesB8koW6oDWQkVjgyCdDhKgs2Ct4k82Zrw1CXryKBct8ZREDNNLxSWiQDGw55y",
  "key16": "2KnX7aHiNEFKPJHs1nK9HPvjz7CCZGVCwvnqC7zKWNHXmfupvXPjGssr5DomhVL4wSzkLCzAMcsFCeg6iMYLDaWs",
  "key17": "3LcjzaNdnv7DPTrRaMiuPrVe4ZY98xfWiLPU4pyKSkREmHmM8Jx5GJ9pejNt4twyfywR1JJu8Qm7nfEtK6EJgJQE",
  "key18": "8Yb9H6uwAXYCMUfKt8eGGjz8Y49SRJzhGtMUpsZ1HnnshSceWCQkAfU6V3nMtjwtPtAmz2LCuECTtjRs43W1Zat",
  "key19": "2Q95YEB3yeKhsKg6QRKN4Ejw1vn7591PxBQv8GHHFcEULgkDuVStNLPZ1oDZxacGyNzCVamcqxHQjAY6QXtTWNid",
  "key20": "3t63omK2hfJBvnBvH1AWXd7VsDAzeXFaa8BgjA6j8zogbauef9Ng153XUWNAgszjMUCymmQuw5o1fMm9tZwnJ9m1",
  "key21": "Qvc7VpF1tammo5FH28RBExULGZcHpZ2jap3YmSdKxxzYngyUNEgwN3hewksbeAV6aK8SA3CWzdPmtE79s6MFGkJ",
  "key22": "3HPfmy3ukAbG7fgfpxnS7ogxKgyF2uSmWndo6YXt1PZzZMFZRy92bvsYruqGXgGQp56JACx8xNzvJ97jaeQ1y26n",
  "key23": "3GhCbWUgy9RNVa9bvaC2wTAL6brHQ2kBeec3p61Eohgg6KqQJbYJJWvBXPFJttXyFZzkMWeiVoesribfEJwAx5hH",
  "key24": "Jf6eyYhpBMAnQ2YfoiVBavDSRScqApRhtRhKGyKpDv9wH7M4u7qhEYnCqq12sZcerBZdQR7NU7WbqozPJKuj4q4",
  "key25": "4jeZrE3Q5HXHei4rHnjUSZgvAsuKLDoSPBe8firvvMhgZ2xQV2MM7fUqBipxSq8yTB7ubZME65dcs1bi3m3gpeYS"
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
