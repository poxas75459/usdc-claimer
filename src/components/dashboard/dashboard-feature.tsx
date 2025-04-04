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
    "4P72oErJtpr3fQZrhHCkPaMh9hwZLrGxQyHzzVxREX6GduYjtjcNWNE1HWE6FRkPfWLswWeYrEaqgvcus1QXbBPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LaSM83RoT8Rft5f9BkWuWaRmHMFEcAtLKjkTHDgxLnJg4kZmQrzxtWsgtPWZrMHz8DxfkxctFiQjS2zApXUuPeb",
  "key1": "5ycV1GUh7WSi7XmJpfLaExo6Pa2PHxtMxddDnVDFQ4UGaHfmnYqhfiVJDss8NQAV8m88ZDeA5QQ5n8xExMPcY3vq",
  "key2": "3Xfrnjua3JUK9Pq5fhXmW4bfqa9xw7VKiwe7ZQr7wBBfgP1QcgajFwuQ98uWzziFaV6teUa9RmbLmj1nSxQEQdLA",
  "key3": "2cVAtPknKYM8fxUEsqvGeiNr9NT3sveqxgR8LprpbW8YoMWWhBQbMSBKaiBmNJdtzRNXcv3V4somXSCmBFSTUTyd",
  "key4": "Pv7mc9aZZjc9ThVmWbbnr6gPJCNjViZBeZMs1r5juRb9vvHshMxTCHhB849WhSdB24qiopaCpPyeaMWZ8ivFdWz",
  "key5": "5mT4SdN29XU8XhCzzFR8YEQ8CVWukLcnsXfnxSzYyxAXLxQYDr8MAxGrhU2PVyyp3mshqHd8xgiyYa7hcVfotGyj",
  "key6": "2HtXtHw3peNhVdCEQqTtg59T1h4n3W2h5ZuLFnHxXqU4rGiGbALCysCkoQhXzUNX6kDoYWY1pMc6ZtqnsusoJbcS",
  "key7": "4psuHkjVLbgsVdX6n98uJv7gxkkagg7RrmA6kup4jBxxb1cyzDaXnLyuufLteUXUPa1p9NwRWqkiostSbxTgBNyG",
  "key8": "fbBHGpt5ZwmJkqtbxinqrnH2HorNXiJbmQcBJaSATac8RNNW6qnAHjkEu9nfegdWffqga417jH2iVtcDXg14dwi",
  "key9": "ih3BH5BpV4YNvEVS61FLwHQ5fHhzzHerLPKcPf9PpY2YhkeffeVE3ZXNcL6J88zYQvpAaW8nyxc1B4mCYihL8aK",
  "key10": "rwmKNu5944opE939MdgPxCvcVsXTFLC7dL14Ukkm8DT8EB2iFXJeGnBSiyF1htdzWHQxe1iXafeFhc9vMuyNPAs",
  "key11": "66QRecPf8LvskGXu6FidrNA26Ai1YxJmuswpByMmjSTdGVBBv4FfcbXk6vSmGhiMdj2ADUD6sbJDP1WUXLB71cUn",
  "key12": "5V4LYQg8U5ge6eHuLbAypiTMqGYcfovvkj5nAwDGkufZEqxTG7atgP4L4VswXeGQviQpA31qQu3RLV3xjJXypBgo",
  "key13": "4cKCZrjPrLFQhZEUFqgKzi6kdTUUuRNwCtFJ11Hm6afZSGU4NU5htwNRVsZDvQhxofCPEqV34Cn8Ee9SUrBgCP1",
  "key14": "4pNr6JpKM8rDW4XQwt19vLy9dyvs68JUWiqTLExP2jhR8SkW5HETwojWGwFWJ9UMovPwJpukvMWa2pGvBpn14xSa",
  "key15": "4apCaUa9EiDPU6yYEuet81q6iQBHkfuXJLq93ZczZvG1szqZUpHs9Jrp54AGsDPFqW6GQHEEVZFzUN3UUsosVN8o",
  "key16": "4LcJXWcyEDGYhDJmw3xiXxiNZCfXsM34J6ghAAQ2ibGcDK3ez88pWwVghBz8xyboMtULzgLmCWo9DHXLYtE1Jnh7",
  "key17": "WziSxmxBdoHBvAocu4yWySFMaPd3JmtwpBLzbvnxfcCFrNauCpJCP2rEgA9Ne1EwR7nNZwCmmnHhDhAd3LK4Ydq",
  "key18": "5nGD6whrjJxB45BxDHD2rqY6wuWcTetFmnG6xZBhSkuHvNMnytb92TveKfZGcoqDxYKqiNah7Etu2FCkfN51cdup",
  "key19": "2guFrRgKVtxBGDEASwHPD1ieh6X242AzMZ3QJKHcAiC5Ndi22QRjLA4aHJRdLdmomnouvUjetM1ZRzJr5AAsD9Qt",
  "key20": "2xm6eXDzm5E6fLqkTUSmFZp9CzuzD7DiMgHMZKedYhktaT533WqbZjtWPyRhSMg9L3Q9spuR5X2cfoYiW14Qxj5Z",
  "key21": "2PR7Tetj7gwC4iJf1GhZWYJD11Sc5JjcrdF2B6jbCxbPEszCQERD3RTgxrpb6Tym3aeFAhMT6FQMbS1Kc8eRqdVV",
  "key22": "3Yt6YnwpUpqoCbP2ZajdjgfwZ57NcpyYiQTP7e4Xjc2hoyoXHFQfgR6nksxYg9e5ABooVowZ5L3jgqWEYMybJvfR",
  "key23": "3bzyRPk756rKQDQMWtprus5GcC8HtTHoFPHeKMNm55mYRNg4qAzRqaqbn1d94sp98KWep1TX7HAFUVn9uFMnQpXm",
  "key24": "hUSL7hoQ2qDWwJE6NVsJChzzAQCtQe7a6tg3xQeExziyGqKt5oJy6dFNdcH4JXo1PBgLBkY928LWEZkqxSnF169",
  "key25": "jgXeHc7sPzhCojfcpRNsmHYtdJpoKRd9QSyHJDQQrPVxeF4E1BA2oW7AnpAenaKfDoSET5sMh9bKMYbA5XUbDRe",
  "key26": "34gD2bzTw7iKQRcH4pawDmg7x3C3Ctx7ejQjFQPGxKya3zKAD61r9VcNzBJ6joQ9TfLme2MaPmeNUMzCDJtds4CU"
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
