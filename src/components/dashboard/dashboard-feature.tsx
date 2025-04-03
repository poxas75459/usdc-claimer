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
    "2PK71xd2yvpJU42ULvsWwqAre4ppv4P4rEsKXWt3ALsCAGwQdyzwEqmsXMpGUjScmECADdWxfLcwNGzRcYoMXftu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31pEkVzUPyxu7ZGxKKwerK5q4RjgLHWTznYSsoHvmAagZGwf7SNLwJBEeZcKj5Poge5yVbDCAESWsj1XR6iYsUj4",
  "key1": "2Xy2oW56RkbuC2cLhzAoiV1xbpviUgL8MSZnQn4RNoFgoQ6uMy7iZSRNtHg1Jh2fKx5qxnYG2idFxt69wPh2SqMo",
  "key2": "2gKh9WnB9dxX5APYZHGFj5B4uVfibSvbtmE8yqyKsU1Jb64GnVqL6jPnYUmyULF6fRsrW2WfXmH47g61HkruXuKN",
  "key3": "xc7fB3xdWAgJZP1aBAwXvFyTRGDv185b7eDJUmk4jugAkKcDN2zmMayEMxa1jgWH5iqbUG5rWwbWgPJfPsrvZP5",
  "key4": "3A7PmPcwiBd5kACfFjLgAxXmtX7AZpHrkU9GtUuT1vsuzE6VKv92ZUYcHdA4rFHfUaW8d3sfpQ3h1gF9WzG2Z7uL",
  "key5": "4pMnXn4ADoY19aUwGa9Gr8RV4Q5KSTKeEXUyZRxLwcHJbUUPGVSg3wF9GGfJTh2qqp7WL4Nqxh8fQ552Y43VSgE",
  "key6": "v1rG2izwpBkCsGFoDhcYFSTZHFQpoaRDuBRyYg5ndFGXYdvgJhvpNNfQz6qn2CEzXCsF6L5wwBEcvhESsRcD6zX",
  "key7": "5k2qD85r4VQTFrhbkvLhCwMzZ7s3ch58AZtTpW5kvxJhLEytssoQuyqsSq4LiFk33si7mBGrVpeZxNPq8Cw9PJvh",
  "key8": "66mQcY9tpMRi7uGysP4ez3xjDfkEY6eqnrSMp4zpYJnv6Xr137HasN4uUAKyEN5mYbS1UJtpzUCGJRJ6kvwZdi2k",
  "key9": "5ysER2HeNJ9dFDBKvsvPC8Brrvp42myQCv9KGJDPbLeoU4BKYJjsEeZx2D1XuHubSPUwyNi5ee4XiDLFbzSEUMdr",
  "key10": "5Y4eookA2rdNhUikSsuyezmAuuDc3SndEGFXCoixuergb4Wj6fs5VSq7sdA7A42J7A65NAA9egJxkzdA5rkZDwzh",
  "key11": "5KzFZFXN3LQNy4ZEYHV5EqsYXerGashjHiSfYZPsCMoRBvUCc1z7XgwjnUup2W43D1FvcxjJNuH3jPhrWAjMCGC1",
  "key12": "3FmXmysJj15e2dNSPdWLMe5hr1JHJhWZyk8snycME4D7fL9868z1SxiEPtXMQq4UzKwqnaC4kHvuzY5Xyt7iyu2v",
  "key13": "5CLNXU67rgDck9VK56Tthm1YnwFHG7XQS1byZ1ALWZmChZWV2oDUpjvcB13uVThzdgCGcifcLp4waDMN7CrQCRvn",
  "key14": "5Hp8pdiDrfUcdHZUrNW7TrkWiZ6DijTiDccgTiTUGtSHCNzbuv9YqMJXfYETrtAvYgj1M8KbwMViyTEXsY2rt5hR",
  "key15": "66MuETQR2ci3ErJY5LD2nLcjqSr6FqWVAuLrUN6zYLK8416LjvhrbVAefxKWw69MEAuWfu9CAdYt834bEaSV6EAZ",
  "key16": "2u4pJq637j6bhS1ZmnXNKJRN6ErnguTwW2D4wgqBi6Sn2TXfNs5swJ7dKk8RbXgTZHn6bciGGX1Vw2Va5B9b7neQ",
  "key17": "3RyVCDfgvLKmMHYxx4EsJ4k5t54FR3s9x8ebMnWkbCWtDp32eMkeAvDPazpAeovci6BnEQKvwRHYv1c6mVjvfTZr",
  "key18": "2UNekV8oFi6PFf9h78gp1unexcs1AV7CXj1odf2Lc2fyrHSvF1hX61aCNZH3ub5qgLo5fEJ291kvE8EUp4o1CS8T",
  "key19": "3iVMBAt77T5mMdmsXEXM2pA7D6oqZ96XksFiZYHB2XWEdmKccBKEJcuo7Q6Fudchv4B7S1crgmxTQBxFd8Gy42k9",
  "key20": "2GTzXapV18inJy5Ki9uaJXu9Qh5h1ktLWv54q6VjceTscv5dJG8yAG9W2Z7pErjvxQbePKWmucVmpUa8e9zFvoSs",
  "key21": "27DatKi6CcjK2agH1X3by3iH5QumHntBv2JXPDE5gv71WhaarAYFk3tmkjiTgb9akgC1cGa7pNhwZdoSykQLjbk2",
  "key22": "4Gohb1qnDJXvhLMTXRbYZTWdv6Q4Z2d4P6gQZZMFZSei3qJgGpcMo9AFZ3drUiaHbQmZw9jCpL4UcftoRnCbR12a",
  "key23": "AEVkupJJeiCd7AcWqgHrSvzcf7pRfoafx8duEWDebnJBJNcuZyhkrXNBfgzhRs5pgoywr4SZs7vypSj8CBWwd77",
  "key24": "5vh4vfrLp5TWxD74bHCqmnaqkQNndsso5MxZq9WrZwuDXsAw4AQdgCRhrkGKefu8MFNqRB8z41aiTPjzuFAQCdvK",
  "key25": "HVdf4SWEuGRAPJAmWsHmmegzuTtNmhaUr3d6zX6zWRKH9YZJipTQrf9XPbKoFeVVcYBhsGDxWaAwZ12MUo95cuT",
  "key26": "39mtzs4pBTFJSvBwpWrKVq4t1tTw4HASfMtDiQG9maCLtwQ2y9XAHXqbgbMqzETnc5Q6ph5jcd97wpSi6XA95jLX",
  "key27": "3QHUKJ1vXQzdtbLRvpafPh3bqkPfhQscBzupQhQ7e7gr1WEcSd6CYk5RLLK3eT2xfR9PRYyWwjhLNoL5nKCr3cAu",
  "key28": "3aNP3VAPbkw5pnmiADjzgTQpbRURW8As73ERqnjnho1gc5LXVALY1SdUFTmEFLogwwQkMhjwA4YAuXpAxbUT9kP5",
  "key29": "4m5FYKz8EfGgtf2J8DtRLCNGsQ4evqQERQCKUgXTprZ1yTWGuctJ97DyVsVRGDXKy3MEtX6MrLRoYk1yjboAkQQw",
  "key30": "41sSYwHheaETWDsm1pAgH9fyx24Sfesq4hnE8waookzmMKqXWvQcwqTTHPWuGV2uXQF92E8HEUwKxMj9vfqrCa6A",
  "key31": "3LBJmybUytiWLnV5EUEojfJZnG6wzAEqzJPzxEfkci2PP3i6dwuBPybux99gjXnYvWQfUdAmMssNeKqU9F9XQ6ot",
  "key32": "3v3Pd9DrD5D8MCo1G1LSimct6AttMktCY6nVFwdBWBqyDsNVQ4dSmxV62XbYVEnWpNV6GchWfjousK1uJrP96bYa",
  "key33": "4KDD9zxH1E3MxqtBP7BtCar2Ha7HaFDJu743PDzsKxVrNLirWNoNNYjwJAWWwuqUoSqS4uWjb215HFQ981gqMBLJ",
  "key34": "5W37TCx1y4AJYQimST7CWRYFVFLonhety5XbajBMeNFKLm7tkJPom7ShnKzBzag5MfdmfXZWv2yReLJgSWD9AVS4",
  "key35": "37HjjX6wPYem5mCuZmjyWCh3uAK2nWQdzGusaNqSR41hHGn4PMx7MVDKcStMCJKy6Z1N4xrPpdjPh7QfHpEBY1DZ",
  "key36": "2UMHPDcakkimm4FvQ7xwVAYiu5iMXStLSva9ZZgtu5tgoCRPdztF1esftz8aYYR9UmNeSfWz93p2CuSRAUpoa1BA"
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
