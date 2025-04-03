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
    "LJjWGFoEPaXV5NpCwCq2knyQiToC5m33M6riPPYujHvhrAP1dVdvbb5riWmzkuJN2VAKNK86ay6HWsUb8Ugos27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L6Pr6q3eyG29NwHC8eWYFvyZvXVA4xLbLFeGDExzAPHmJDy4qPGFuecFTtQKi4uJt8GfrHgVCKm58pd4MQRWQvF",
  "key1": "552S3xNNfcWKBqCwZZm8tLLsisvWUyL65QczZrQSP8a5ywg6QwCQHN3ubhEqcEpUB578N8yHpZUAoSpTQovxcsCL",
  "key2": "3HrKY4DeRcQVqzjFLmQr5yUB4i6Pxbf4jRGZvMzwGh2vKVZzUd5sjwpbF78Xii12Vmv6dL8Ee3L8pqnAR86cZa2P",
  "key3": "4EmZr4dkQsu3fcjzgQK8VFpQbVjsy5VffM73kW9QEP8m1V1dgMSdTfCUwgEwpBVZkNbN2vyqjD47fL5KWpyVUunW",
  "key4": "3LKD8rJrTzqA4FywML1wRXYXLZxYYtrnbNXtQJXnAvJpZm6U98mcpTARczdU74mhLYUMnFyb4GYic3dT9bMuaRNR",
  "key5": "5ruChEon6aHZQD84YCNYPFpritdsA7zmdnVhQtErCUWKJ8eKVFm6GyF2DdfcLKixwUjK51emoS7UYEsdoXZKmyuD",
  "key6": "5ShpHyptQxPi5fmYaPA63W5XcveBhJALnwSzHwJJbVN9PS6EHgdgP9Nz3hqsiqUGR9qDr7ywpAMEjUBUtiprpjbe",
  "key7": "4jkyaCm4TgKbrrJp1higJiVYo9ewZsBDRjB1j8j36AmX17we8V5XtZYsCKCrgSUXRVvkMP6vWCy7NoHcpaM2m2Mi",
  "key8": "2cpBxJ5mZYLj8FR6xUHRmVbMVvyA6tWohLZ6osC65QxBTYqFwo2Qb1AKB8T8UNwyyQBSM6fpD3WosFns397UdG29",
  "key9": "2Qa8sgTHAaNjYwxySiJaAqgtksWv8vwWzBD3ozeYTNdjcECfHPm4B7kGP2Lx4xpps9KHGdQ2shnP1vfL73QWUNUX",
  "key10": "8Lf9SN6JzCSuNEnNg5ZvbHVDuirPJHLehwVVe7v1LLRrWCqvCThcxGEKA6WEPMLAnW7nY7LvHSz1PxtgjMAgWX6",
  "key11": "3ZpJ4H45A8TyWQABcVcvAQUML7iC7MKkP2o4dPrtCx1exYhamwuKp1Nd4cMVQZJRnB6vr4CLFEGtJmUirji9F9oS",
  "key12": "4cMa3yPDMQSvTrPww36SK1a5wwy1XY2tBuUqrujR8QhpQyNUDRELKXmCxeogpAzT2n15ydSTDJGS3nWKyzTsepiL",
  "key13": "5WougS1gvACL7AG89Rz8ECRBVY3xxvwAWeUkg7rcpYYxy9FW9kxsvkstqUqGvt2UgFhaXVeEbL2EzaXfzDrNcQMU",
  "key14": "57FSh9JpcVNcf9a3nXhA133qfFTymd2KX1RokutrY7NC8bApVvc9wYnFdi6xAgaSsK6DYgpKaCtp2BFXjDSHN7sz",
  "key15": "KBSLLh9MJ6EMvUmqp9PfXoMh7YTCRnAD7Y7uYmEf2PkPpP9fbv7C9QCWKeRaxtHXxgwVLX4PxX2iavRStHNNHkH",
  "key16": "3Arbj6Y8rqwq2acSBEfthw9ykNVc1cSuDmAmfVrbfpM1GQdTShMDpDvrsmXwo2LwkaA6FUc6U2zQJMLV4czcLCry",
  "key17": "4K9PTAy7K1zcVrabFbWhUcJEJXoHqR2dArtMcyzge2RE5qLezgGQSRVn8pDEgfGnNX5LEU2VZ4myDrg2Yb4VYHvr",
  "key18": "5s7tsoQiWJGK6KA1eadLKivYTmNCnHYt41fNLNx1ad7JKM48ECArVtq22WcEXRQo3Fae8x8FTriGd2ec6xsX33hj",
  "key19": "3TvxH2PKrfwN1sDjXkfjbWPMqAJeSwhLzF65zkgH8kgFonZx9RkcmbmtH1GjnP7CUqU7S4vmSD9YGf2nZ5CF9yLp",
  "key20": "4YwzrnuSv2cQfWXVLVrXcDK5P9ganx2DGJvdQ66AonCoKgewrC7AibghmgRHfbXNNTTnUHmf3uDL6WZXmuGZLWmc",
  "key21": "23HqYVZ9oS7NScBVUSGM7kFxVCJXdrypTBzA1gpi8PqEpLqu8DK5CUQAC3UCKXZGMxaZ9nVWTiCrgdhxoBaHaMsj",
  "key22": "4vvDPp1KAL59eCF7SDbfVGHZn9ELmFNzwdgLcjST2yv8R2tHzWsHWG9PBFFx5umbF7sqsD2kc7C4RnrSdF6Bw6k9",
  "key23": "47aZueiNuXKiLmssarRBz4t6oLVFLQtvMULKJyDeH8sBAARuVhVou6QXfFd91Uu8SjRhQVxGGH8gMAUijMCVCZ51",
  "key24": "5p8wZAXjWpCUF12JVJ9kwNDBuW4MNwibxtGyzSRWfAXYLLJh7pWJZhJKCNnnf6u5RujGTXG1Jo6QsMWQqbXFnaF9",
  "key25": "5piQcmkUNKMvZPCB28sBsPUEAUSzeFAQXX1WvPm6t52uyzRS8x9qK9oEP6jrTFP3S7wU2nfAb63sL18JcuvtE9mp",
  "key26": "2ay76bcdMAT3eM3W3jetjxFmfN316y25H83bEPRVrf4feU2w3i1zqVAcpqmStN75gwQDf8oMZj5NsdftMRVtP1FT",
  "key27": "5ADjko8vXUMjyWZTnyGNweCjGCydN1m2crUm8iLYBvkCGNhtRxQV14xRabp8q28p8jLekncwk2d4ofnfSXrFY2Lx",
  "key28": "4uem2dYLLP7sHDVh2U6GGFJg5sye3zNzZ5LxQi92EF6fQ4arxem3H6HcnDPwAGDWU2iZsLaMRhjLdcPjzyCPjeXL",
  "key29": "44JiWpWuR5UUhyM3SgeFLHeQTLBiUAxWyu1TiXtKb9cUSDej9qysMQxuuFJGdCLPWsyg16rM57ZS8pCaHK4SndFa",
  "key30": "3pJq6FdCduhQxqbq3x6W5np67hrTGssbH4Uw46q9FVnEJfwc5wza5xVEPpXuYt3E7tqDiVLwU13cHuLEZsUfjysT"
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
