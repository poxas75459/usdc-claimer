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
    "2y7VSDfzXStoYUmXbUgiQPY7HGEbRr5NG34BVvfzAF9dAtBC6UrzgySnanPxiwdoiN2X4DGM9Q6DdG8fu6RDmVUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zjUAMze7gVQs7pP79XkDBhuhf1zUh9wvc6pgqp13o6inWS3UWtXnMHQcAv2GFTjwYgsSerowb7ET88hjRDwzqsT",
  "key1": "3vFay5cpsTyDHQwTr3h7PsgxLoHUX2dj8qof7B1cxVZL8XwFQtE6p9t9Fkh69TS3GZ9Hpy4bEK7irMSsHLKQVK6f",
  "key2": "5BTNuNkYnMPgScr577dDHrcSRpgwUFqQ6AB2RdhBaJKKWCNwWkKmFf1TGfgS5RwrV9hhbksdb2SASptxCDF5rCZb",
  "key3": "3Da7s1KZzHRU5sfucm4NTMXkoS3HwRXexZWs1cFP1BAtSzEi9fwbXjSE8Q422viqxTKHJFkWrSR8LgQPXuNvPhtx",
  "key4": "5UpJfEdovEQBrSpLjoEoCQzsHDD8r4UqkVXnaqtvBfRprZtti2DvviN7zhaHBcJ6gUqG9QcfRaf7Eqm4BmZGFmvc",
  "key5": "1D2XGsht5QK4SL9Q8tTHPHCemj5NT1ATVAahpjDE4wBBFPKpytUKX5PHh2dPW6apF8ZnWod8G3T2RL2KNyrD1ZA",
  "key6": "1snvonEsoPKfgxtbiu6tUHaVL39hf1BtnZ9PRvWHZDMbPgU1r94S2vedde8weSzQxXUrmXHge9jW16PvTDoY3sQ",
  "key7": "2678hTcyX7T8M6pWT5gioBn5coMteV87mBbDZZkSbKxhhqHgBxsgYuF52sGjVMxSe74X7yCCiPx2YmEtAo7eQqzf",
  "key8": "4aFRmnfy8XXxVok1Ujt1EMtLS5b6DwHTrnqfy3spKamRK2UrBmE5wV3cGKPpZ6JoHDRu5pq3D4pqoTbt5QcvSDgN",
  "key9": "2fs8Cann26rpWKyZRE8NrJMy6jt1EdRBv2v5A5XsQ5qpAzRyZuPpqoQ2SJvuaBFnPCesfasQwbL55ZN9GrXpK2Dz",
  "key10": "3E5jBAFnC5M1mNqbQsNPCEsdA1FRWC6bQZxBumvX3ctjX7qqPm8MtjhM2h7hYYNHLExhLbCkyPYAueb25Jk6wyR9",
  "key11": "bzKvfvhsXF9XYRxGjuDbd6mPaVRjR1rJ1PhGTCkiFPBaUQeB1X4HwNsMsx3sPH9Nwd6ZC7bGbf6132KrTyWwUKv",
  "key12": "5Esn5mMVHZtqQe7766sJko5HYr6TE48wJyDUJinPqU3dGYmjGS7zF61BKcYUnM24zgYSKF2YrC6evgYRPVWNwLZ7",
  "key13": "25ZCrvNg1WZe9JRZ4oU39zJThRN4Y4BLWN7zXBWaqXj84MfiNskPdBa7cz2Pi59Sf8zU3ZkGe3261pA6tbrXCtCY",
  "key14": "4EDmGs88NSJ3U5Vu5jprxLgA7YcumHmegEKYJWTzodGAvsm5nSwxmP2UY8KnqeB9RfxTpn4P6Yjr7FscUTErohgq",
  "key15": "5XZhGToK8bXf14B4ajdYQEERVNVcQBLa73MXzj95DEV8hmYMnaKGG8842PdqBnfd5Hwcs39Kk7uzAKoDSmk2ysSZ",
  "key16": "4DBGoNbCBvqpoffG6Z7y4jKB7RiankFStR2rsq6pqRZ6h4rdFW61KocheE4PEfgYurRmmkuBVmmRdTfv4Ypv8Mph",
  "key17": "2X7BCWGk79S1UQFsMGLJVprU2yp18PzotcLNTncKKzTKhN15SMUUQiYKhEBQegp2E9kqy5zswvVAy7q9n457USAo",
  "key18": "3Lv8ry2vyFEvniFJp1VFFSfqWsnFH99LwxAsppn465fRNMDRtMX9e5CteyVn7YwSKMBbzYtLtqHL12Rj8WS6CVXs",
  "key19": "2ytgSrJTGfvdVeMTntVnFQSHcmvU9ag3EzJgcDdJfxUi4T6wpjW5tS7STWAy21cBEwuuWXJxYCjh2e4q8KD422rY",
  "key20": "4a8CKVPC4qCHMYKQYQyRzzThLvqAzH9USNWBa2WqYwDiJHVG56TpCQmHTMpkg8aHqiwAPn3b774CZ965UwuzrqoR",
  "key21": "5NBX9ee91rKpRuYjJAUTN29KWn8DEAtG5NtNL1c3nrXnEfaXFo8aQmYxYrvn13NCNzYaETxpyXeupx4vXKRsjTjW",
  "key22": "HURG7Xkp4mYbxdTxL51aqVrSCa8Pfc4h6sqsyL3YsstqXLa9Ls1cMJy5a6vPq8jvVJS94Y46etKGtGo7XZbXmwo",
  "key23": "38TH4kBiJjqRaciXjV8Hx24kcVQ6C1CbVT4zTZLbizC4RwHfjsxHRxawJ864UoFKeTHdxgPZG7ALNd52yQFBmjxV",
  "key24": "2q53zRuHCX9dyTg44cEpqCLtV5tB85vDfi3PpSaqo6EqpEkRbujCDcsBuUL1JWZ7jvGzMsAzc12ryTveXgQjMJ4",
  "key25": "63oRmtxL9VLmVkiyE5Tz8SUZx2vU1pTncPnyfncEL9zc6YwKguDG8e2dgtPg23HXEBPJ8n95KZqgJeSGtNs1pbKi",
  "key26": "4f5a4xGBaAS2CUSBV2mfgndFYMQHUErAJEcZq6CFuhLPrCy84XhrFR4mxihoxfFBSpZrDD8C1LCBQDBWsmg8U2iz",
  "key27": "5xUY4SZrRSfiq9fmX88nHXMtLRrK77BxhVR7jMmTeaQfjuCqoWZauEEU1LHR6wHGUrjP5Wy1wiyZXWuSk1JCByTv",
  "key28": "3XcSDC2eDYP4Rv8f6KdcWARVzta5X2pxCAVkZccQK9GiWXFkVoZ1tjuch7ZGwi8WTUwYA9a7sAQRib4coUcL4Rnd",
  "key29": "3sPbL7GehZA8krrdaTHrD4SWC95pEGeyFRDFvJDPL8o48rHv4FvAH9KSpVjsLWVgFMawDAuMpYAQRdkUz9jGJF5Q",
  "key30": "2sL9sHVpxcpVmo7Kgj7wdgbAwk3Yjds6ZcYZsFWDRCct9n1Awtxoq73XqsUa5fDpxxRadTcdyHKz3H7UPNSgceZ3",
  "key31": "2eoWDqDGQHBmKczV1HrhBC8izfSEd2acSVKimwCCGCJ8fpdspKRZ9NQThWrHLKSJqJNavhy9D4ujrCZG53LKpUFv",
  "key32": "3z6ZnZ4hLXWhdUySrnERka9Frd6kW3SF9MREfwqzsBXzV2mEvbJ3cn8wBhmqARZNBaxNn9FE8uJvex93uQRBe3MA",
  "key33": "4SPbcbaS2bZp3pTSF6MxGDbbitSAyC9ne2SMRUuXTbJAyuzn5nvLPvQ7tScQ4Fb8UM8PCvmY6p5tN1jffEU2pV1g"
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
