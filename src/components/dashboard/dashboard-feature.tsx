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
    "fGYb9ky3EjvmfggXtzv2Mxm5xp5u9d7FKASNmGQE7yvqGtAhvCqatcvpR4VqqhyqgZWu5UGxdhD34FydwqH2Ns8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NNT8iSAk4aUu2X4sj6RzxdQX78FWEjWCyKYtgN3UNX54Bz4Zwq33mhXURCSjMMF7Y37u5DceaCwKCZCfJTzF6av",
  "key1": "3A9s9t3vhbxe3vgSLuz8W5Q94prkMuxbHDPZLRbmoKV57cpuv7xT8PxEM6Cye1fLteQvBCgYyKr3Ruj6BTWpD927",
  "key2": "2TgjcwWQBRryEDQKbM8Vx51eByYnTZ2zuxZV4G2HJBpS9CJxZwtXhgbMczHTLBdAaiS2LCfw1UJZyo2wfCh8VPZ",
  "key3": "2NHnwtSLE3QmiYbFWBBS9pCtiSk2VNhWUjyZr1GJQniYTHAJmxt8UYidzKxn66gdLPJY9XRFdUKkRncxFfePU9SA",
  "key4": "5n1ymAuVwtGzMVuBvuAdjMVFL3YjdBU937nQwgsy9P11MViLPKw2NzvmCPh2iq349b3HJ6a2RXWHZeU22CwhTczQ",
  "key5": "2AZidN1D15JLqn8mZXf68iRb9LDGnYwZ1r3vzdvAaSuy5uiyadEjgo5qBcfCDpJud5oS4LXi9uyBPyMgy4rS4ch7",
  "key6": "4AUihsTqZDck5YuNv3NcFmaz1xtzQDq9dx83LQrHaQjPdCTV3164giiLgNfnDwF41hizmkocwJGXJFFRyKnyVuap",
  "key7": "3xwRxe7vaDRXccDLSiLT2d4FVC2wajai87MkXXvaSUNeRZBqDFjaFF6wCEnVq6K4VRwbSiE6ZtxKtdynAcAxs2hZ",
  "key8": "4xkJndkTE4dPHbXQAZZBkmLxQpHM4Wh8acYud7g54NBctgEXs2r7F3jWWtTBeKQJkEJv2QyLFjuCEoChJPzxyARC",
  "key9": "3EeE3zypLV439kR3LrLhwsfFZQ5ueiWSs2o524SxJsKju1ApmdqeGpVmnqg5CswmfbKJ89nCMrTz4ahFeQJChuGe",
  "key10": "3qheYVeofWy1mozm8D5BE11YVdPY7mY5WnpiAqc59Q3j5XEUCqoWUoHgjL95rqBKDyYid8EymQnJH9d6ipSGvabX",
  "key11": "3PrDuAsFgfa14yX1vCh1YpNVv4dwC631FUYmLpQy5CgA17X6sdDVCee1speEcQKqSUaWxJkqkETBoZev1rLmtCNE",
  "key12": "5CNXpAFD42zdFLK7Hxa5wrpdc7eTRJ1nnbi4EjBRuEQav5WpYicQL6uixmR947DjwFLPRp89nZKTsz8MiK9p7kiY",
  "key13": "TqPrwyP4hvrAy4wKwQXRkSUz1jvgPGgevRECdX6GzxErtv56rudxomJNpDgP1FWtDD4zTFUWuHdRC4X2xFReBtL",
  "key14": "5eLY4EoLeEMgRKNskQrG3Yc81KwjwJ4hJy5XrLG2rCJ2mfdizCRTzhkwGQeJusT4GoGqCnkWPPLxAgbXfyQZPPDc",
  "key15": "44HeHRK1zJQgGvjPMoNv19DhjrjTdnBg7ukV8eS9rfa1zayrTd6SZkiVm1C4YcB49XT6jCbe8oUkVSjoGTQxSm74",
  "key16": "2DKgjnDgjxaRt2gs6yni2WrrVw7o5t9euXQh4621Ye2C3MMj8RiTgjLy7Got5Am7tDjZucox3fQrgifweLSHdCLg",
  "key17": "5G7WgMaRLtn1Lp6PQW3XaRTSduD9zehNW6AduLxy3Mz6x4qzQdXgJxiUbY3xtirQe1KiqQum8zUJU5iLJe3hk3NX",
  "key18": "3Ax5fXdLj77Vcb2idtjcANiN9Jo1F9QzBQpkYFf1wTrB5ZoiUXbbrDYRG5vnGSg3enC7fSca1UaUPVjFT32iFmra",
  "key19": "5mbj3D8NNAgxp6jFpE1R7sGd1KUT7KDxRAJybbiqRTRRvWmFVwJLvsMZfZtLbxzBEXZc9XFcyUDy7bfRwkpG5WVG",
  "key20": "3he7pVFiAPnuzHcY4H7zKAT1CuPBUbt3PDKHMk11aaw9q7gpYuTo1yYN68SBB1hyAh38V6zdUyPyE64xPRjzkrzf",
  "key21": "61KmUFKdeosn6aUruZHeomJuJFMoy9LDh8fpBTiPTphj1edDWGcbG1rJL4yDPJgdeRTjqU4k5hct9TDH8s8p7wFw",
  "key22": "59YoxmmwbVXJbHHLZLCvtW4CmnDaK3KQCtxV1GjNhEmzbKFbukk6WFkvG7tCAonWB9LHQraMecjs3eqCT3fs3H7y",
  "key23": "3SPW6pg3nYYQ1HPSrgi8NsNbhjeZ2CFzGRrJvztBZoM45M58ZauPsDFYWGtEo8kmEdQcwNKbMwUhzLuBT8GBFms9",
  "key24": "2HbjsFhjnAtPc7AN4Yhw4TpG3k2gY4ZC81NaitoKk34QNqFvdo4k1qFE1YUSNEgp4Fehjvhj1JM6fMr2N67BFe8T",
  "key25": "3RLdjip8efRiz886az2YhsPgVQJBXLWwqud7Fm1nHJ32wKsKWiwFwxHnYyVqnTeg8n1rvqoccV3nptVrVHPLdXCk",
  "key26": "2o5dQJ8mHcYQvXZKkfx1D7v4F2PuPiWL1xv2grwze9KgjjwjNnm4NR6QW74EgmmqAupAWGPSHu39cKxjN8ajFNNN",
  "key27": "2av7v5w8hWv616oKydx9yGHAVgFxtvS5qQLypqmu1Up3m3zVvFM8P4CxJMUeuRkq9xGs3TgNgnKoWtz2mkR5kaTd",
  "key28": "5dBurgv5JjvT6Cbqr7F9R6b5PLFGr96CCvH1BhTSQqKdznEZ9uL8vRwzgF7pLCqnLiJCVJ8Zsp8c44wgwz5PZkjH",
  "key29": "2zGyS4UuDrDnUMJgv9DgAmLE7b2tDtg8xcZ7UE7BNBKSTYSL7SqZtH3RoA77YJhhcZYpHTCYme7HTsJPCHVcgrU",
  "key30": "uPRtAkjEssDujgRzEHYJvHSNvApTNdfNfbQzaRLEyQbZgtzK3gZAY3wtQdAk8Z7FPKJUjZGpF22jRZbZEMUbTcC",
  "key31": "31hwXLZxZqahU8VTrKiptQ3KoRZqnbDXeh9fEbFSPHb1Jmv83d8p9eor8uie26MD5Y3iQYd6Abg2Xhi6BWW7t5Dm"
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
