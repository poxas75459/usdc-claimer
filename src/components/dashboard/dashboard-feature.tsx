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
    "2A1AMMngerLbe1sbAp7EdSkotcUsCbSZKuhrYDycY1LCHZQu8MH5gxVA2FjcibgaEzXjfxq9q3PuVnfiukuq4fr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QFs1Y1drgTgoee76ZwZPQrVJkYoHrHRoFhw7P94ho4ThxwvPjKFioCADjUM8grLfWhkwib3fe1KFsubLfxAaSfK",
  "key1": "2P54bwqivTiK9UfAYiZiu7ehEZEssMunKrWfnnGeN12GWFdpR1c6poyTPCdDeDo4JBYiXiRGfkyuwYLaZm93doir",
  "key2": "5MVYBvo1qJrUxNLEyj5FWU6sqUN1j9cSNRPLKP22dqdQGBUzwSMQqbZh8snNwgUHxYWMNNZpK8ycgxRAt4aEhNuC",
  "key3": "4oPJwwdYFZm3fy7oBrPaKTCTg3keFb4PkJA7nF7hutEnESBHuZ8NEqjMeaGpex2rKwAMY9WXSpoGbg6gGqzrKDgK",
  "key4": "4eJ3AJCqg5XQF4bZAYBbRmMnec2KCRFJwXogBL4pAUaRyL36q5TYMyi2JFd2hJKF5xF3w3prVZquRChBgKx23TT9",
  "key5": "2XyuWUnPZybkrcjPqvWZWkSrY6LBvGV5jmQ4rYxeWD3MPM8oMQgpnXzQG5vw2ngZmRKD4dsPFGS3uV82YXnrGhGt",
  "key6": "3zofGRbJfSK3VBE2oeSX41Ra3KgU1ZbEQCvmyenL5FjUxhzcv28dVhHYhJ3WmEyyRgPkA6qBTy8BL5gXMPa3fANR",
  "key7": "Li2zud88VVRueVMyK8Z8j8qbBUuiGvyb6mzQEamEpyHavxy7bRr9JVr8jFi1dVEjFSRxmRWvcvojmjkCnYtjW4B",
  "key8": "FGaJnbsoZQytDP2V79YgBbrQkpmQ1V975PJTn94fbUwy4uSt9W5SK45v18yV6Mwvhx97wpMaEq4qWVK8iPHkeQM",
  "key9": "2mFZUWSsQ91zLL5C9QzP5KupnY8iYNpgdyFWnPTnCP3e8vHHUfu7S6GtzmgSEL5woMUJj36gwjrZmFJSSsVwiGFL",
  "key10": "3CNtcF7JELbErHPF76g7XqyYr6HN8FGqESSWxLmp18MByefgFYZ7bbWEgJb1ZEvNaqo4KHBTGUYvcomwm569VbB1",
  "key11": "2aoKqZDHbbz1n3E1k8coz3CieXWrrTHB4NRV3VteuXWzv7JE5PssDE6BnxdKPAdmAvdofJT9DkGtzH8Y3AkBCFiN",
  "key12": "LiDvunaXjDDDd99FqaLV5yyZac5FSKu6cpzEcWG9KHqa7JRf1dF55Gt26k67dheJk9wSH7mz9xcKsEZzQBiNvWp",
  "key13": "3dnn6THEowdkoE9c1bp6QjpSSAUipSQKf7np2xK72wHR9XUyqMdmU1q3v9tjJkJUvQ9aU3BdShizAtpgbHrvb7R8",
  "key14": "5pZtW9DdVS78w7tQyJqUfngwcEoQKozPgkmM1DFZzPMn2yxe7LLPVY6crgC5xQXyjACkYuqpACarVz8kaY1uRdBr",
  "key15": "628RXbMBecKSbprWQABUGiKaaDs2qZ7pCkgerVwjF4vrWiQAsgk1XYJcxR1bmMbp7AB1grYD34yKBQaDNq17Ekbx",
  "key16": "2nMH4miW6Cr68MoE5Cshq5cS8d1Lb5rK3A93zDTmndx6jYE3ctKDhAW3AFzrBfqRBJxH5J4MNnEZJi9BgK5MZPS6",
  "key17": "4c24RQxuUjdsfKvUFU8aMjAPy5hRMM4HQL4fj4a7QNfRNv7VURCpYiePUjsXB9k9ftnmxun4qxWvQzhE5keKdDgv",
  "key18": "5ZfE2F2QgRWC6QXKjxGNsSotcBqspEeaTnCYDGN9NqnHjPDJw3RBKg6o7NZeyimtRfAg1d79krRXoX5Ky93JHFt3",
  "key19": "3Wsg1MGEMURoReKequSEpxmRy5sTH6zmceL5gPF6hNJNbetepkuZfdJVaGU9cBoCkG8APwaZUmyce1B31E2mQT8j",
  "key20": "ZndsDSerMSZPUJZfbYYXdV8xGJH8DRxCquMPZhCB85CthgFWMGuui7M4b6rZikDnhqfhLd8wg9Yc9fCiFmRgPzY",
  "key21": "4RE93Ecjpsh7vcBCrjvGxGzVAUuEHwAtZPFHZFdgE9Uq9Tz2pkcrEtf9uf9qssvoTWyYbvCqW3XrZfgfDKdWor73",
  "key22": "4xcwFi2KMybQMk74aGXZ9PmsVGoKMPwYj5KnQY211J2Sbk4YeAzghXNL9ASHqhrcWwrUbfFQMF6cSaaDA5RU8Y5L",
  "key23": "FzzxovNK7khXAXu5jPZ9Z5X8SZFXpMFdBw5npVR9MMJPSAseSDUiZt9qqJVRNmXgNfpu2PrbV1uKUyWwaLwvWyr",
  "key24": "4XqtkbBspRsVLhzyP5YqPM75Kkjy5rNEdopN2HfqtWcpyP8p7byMSPCuqt6mybxuZ9CEYfvkh3gMdz5WPQ3dWqcA",
  "key25": "37TAGAJXHwa3DiWtHyPt8pAQjvhDULC2EY9SExCzK7VpacAZR8wY5ayjyUJfXB4YxG7a11fnqZVwejerhB4Kryhv",
  "key26": "53YL5gntQCezV9A2paRW4WbXJ4Nd4KutJoWZKM3qW2vpBpA69ypjfNL2oZtUhXCtdbwFHg3g5qf1tqURRBa1aHMQ",
  "key27": "3ad3wBiN3XoxuHWXFGxGkwZqbXQwBgN6QXmCtPiDNnAMEVL4FMke1db6c2UmxAWJbHH7aqoikZjTTC6H92EFd9CK",
  "key28": "5RQCuDuFdQaZ3P4Ekw5JWBcVBHNMy5YHtbGBG8EtNE5o9m2fqpFnAAmiL4gzDa35ouXeuvDR6mVe4b6Fdv5tVDX5",
  "key29": "65Hg9Kxu2cQ9gy9VrENjrsSJeSJ8N9eaw87GtvVznx7zErAezmQCypiteQ6ffbJuPnLvURUpedM5QpPnxpMCb3GF",
  "key30": "dP2vYw6HdrdgK79d9UtYxPYJRBP9eg3akuWLKbFEjP1KoQ5s7uPwo3vMowAEuYHQDM5SGqvQkSo6wiV8iNqAXhR",
  "key31": "5PATLadnoiVg4ZGwvH3PGpP181k9tKfLZ4WkWaS76MC7Q64gh1mkYwoyh6CJBViAimnBzYoJjCcBHnNse6oGGKBa",
  "key32": "3XXzhRQAkZLpcLX9yExoUgUkxKWVjWMmB6zQLFp9srstgjNYPyM2u4aBVggqVb1uHTS7SDVJm3qqvwuyRbPcHqoD",
  "key33": "2iPtrJz38jPBHgBcWVgCh1VhRLVcxndBkLRSACtSJrrMjbWUusqQRiCZ8WGUHxQmpxF4eaT9FT8QHNN76YS9Vqmr",
  "key34": "AJUKS8EcgA1J5CCnS4pNWc4P56bU2KFDZv5QhGizxTFnQxuPducEjnRJbrjHS5YsLXjC1GpVTzf39XR7kL43MAi",
  "key35": "5krxFwS1Lj95cwxQGfxi1bDNdi4Ggxv21282howYrjfycRybSfXkjH7LG4T2Gj4SKtKsscfprDZsmBzURwr1ViHU",
  "key36": "416g95pQsfpmcqUrcomp4xWEPp5o8HG3LjaU96zZPe67i2kxT7CuvWxrVhoc75RV9S5FY7w1XkMENnuMNCHp7ZfQ",
  "key37": "4sxhNeKuqp7CQRgaKpfn2jkNMhVWJWbaN2LW8ttHcS6KdGV9n1YhrH5pcDedpkDtkGnqvUDD5LgtBhALmYKaykYE"
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
