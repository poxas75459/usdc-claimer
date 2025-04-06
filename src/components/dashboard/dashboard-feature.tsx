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
    "4fauYA2MFydvHfzyswi4CtSE8p6FtuSjN3CmYJZVXHvYcXkvCNDKwrzcwzB1FH4qxzd4oStbznxNfcFPtpDpWLqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nwad1RPAo3LhFqWnGxofCG5DfuZpdyH3gF6LH1DC2FGBzXRzA9dW7xWtFTBaRWPefBqP3eZr4yxfZe6RhdopzP2",
  "key1": "5GrZbZChQpbGqP1pGAfdyNx5vNce7EQU9GM8P7ivQPMxEmhAaKvaDuTGWpHctQzk5wXGEC3jzwXQAgDkvsAm4Hia",
  "key2": "4e568vwgJrUCbYeRoCYMX3EchE7anhGZoPDLDpJQMsWJ8vYAeB6y2TNYYXymnVZiZRCc45zpg31AvH9XXcZRLzVa",
  "key3": "eUdCkdHEF7f597t239ANNiBrYTMtFDFhQUSFtFzeEy7S3GJmYkuor9DKxRKrdwKTca6zv9zw3hKLS2dGdC9N5Ad",
  "key4": "2eVFbcodxd4Gki5CRLG3NYmLtjgEST57TD3EtW9AijS1sS6DuRcZZqePsidtAZQWbb1CRARYPcLspyF3RP8ADR59",
  "key5": "SdtRay4iu9LzvA7RyzBoYA2j46dEesAZBLGVyA1EEDjwDZtg4i29hGCkjd1ZBg8gbhhL5gp52WUih4vUDJYs5Nq",
  "key6": "5SGHFshnXMTmmzj3TAXkAeULSRrjtqWVuyomJraRSGeaUjU5pEpqeLpYsmAz8NDYQUoqNZvvNoMe5RL9jdExcAJH",
  "key7": "4gP3pS5nx7veCSKNdwmYMATkM5yWbrE47cyQXMWCAeJnFu8iV7YUqX9EZGLh2BMJXUtjPE1H8Nv3EqCwxL2T2P1R",
  "key8": "439zxGfj1c6QkvfVfxT8KipYgZycRALqpringBjTw2mJP1JNPtekG8h22eAtqY189mTCQRFWuZzfZwKHwisLnVWd",
  "key9": "46tTSFgmpR56EyNtranBGBUXdmP9wp84oRNuykF3Xc8yKNzjJzLxXZSgegpRG7KMayAcrdgU67wet4UE3rSK8nPo",
  "key10": "2ysqcG1EwEeoNX92VSsNrBm3Uo2W1gpBRAfpBqoV8UzoY4VqykwkuPR4LCxHLZnAwf8o9t7qZJmjNq148FEnR85",
  "key11": "3o4SGDfsXxu8iSgYiFy3jyMi66n2MqxCPdZjBWNgrR1wVPJbQLt4TjUetDeVvrUqU4Mq8twA1aCmTQu441VcpxBu",
  "key12": "28eDN1x3ALzBwg8wLGJGHEWtWmrvmAnCU84MQkmXwkWMgXkXcBhfbPpK7K9RHmtGrGpVhaSZyXDUUqBkY2TfLQpt",
  "key13": "2uiC1qk9369rX2CAnW7vefeZvxFxi7q3FywDRDM9Ph7VTJ3SwS9bKhiKbRbuyTYLh5RrvXB29ebb82AHA79LHmkz",
  "key14": "5hMyfxkv3DUNJiZY9FnfT73uYFJ8oB8LGowmDrPAPxsfSnyRLyiLZy9aH9qPsYWTCqRDm4acMGmYGXY9sUFS9jvM",
  "key15": "2dS9rYUVmK6AyxabmYVC8NETzr5RXxtc2naqW3HwngDHALSiWLgVtuTjKR7W5Z76CJatPfJyPVcwh6MmEGbYohgD",
  "key16": "4zwixevCgkmW32hhjA98KZTzUu9VgGTRnvshjhAcCwHds5L4E7garnwubsEL6wDrnCpLAsgUgSLT6axq25TDwHZm",
  "key17": "23BLtnjZZcvYt5bnj3EL2PisbRUUiNGdYDrukh4sN2A17NNFW8jjL2ENEK69YTEqsy6MGfCPQdMJEP82WUqoMgGB",
  "key18": "3A6oMekiVR8xv51fB3ysSvXLL6x3SYERzGZ7XUsQ5Tmo9o8mqZm3Gh5VM8cZ56ubLf5ofCAeJPanB56nnoTHJ4VR",
  "key19": "QmCrFfJZ5fXmPyxKvBJky7SjikLnnghQvndpUARgyUM3xG9wCf4p3c7QE7hisx2rutk3oYaq7sawDmjjkY7wNRp",
  "key20": "3qG44y7VqjrpYebepV54UyV1APnXXqnY2sHFuJqi8cp42NujYp6LaNvQeKh6yxzZhLijnE6c4NLSUhbQwWbnHtFP",
  "key21": "2NgN666n9pJWfXDg6JcapvoF9Yka8p4ZrbTS9TEqJHNR7qZH3b4LZvTNHXcg2b65yvyKdTzrKQTBpytivmQEDL3g",
  "key22": "64Y4u29xqiXJEZf1W1iFCb9pAZRwDxA9xS7KYL7BwmHPPppPk5kv2fPhtKGPejd4t67MiNhMTSWsNJUf7PhmXu98",
  "key23": "2qL6MkxTkxWVoXj7GY29XePMZ1CYNggM2saBfQtJkrEtqthbXcN72pJNuiShVtXHiMXnjKA6EFacY7AM89tam12o",
  "key24": "5gxQnj8QHvjYzxKScbGE9Apzy8qVgqrVDiJBZygoxTxwvyz72UrGDbgaZbex3rjgf7yUj7e87qhuHbMUpvDxQTeT",
  "key25": "65wyroisuegFifzQrktNmSxRwNinxTckENS1ssuqeMPNNgfpRTw1PtBZEfJ63tcEwxC9Qu6D6xPHxJDixMtS3dTh",
  "key26": "44nqZxCLVSMQXsK5dm6BCTSbWCcawBoDe99FeDQabvfu8W7DYgKJ3WSjkHVBxXnUYhYPNaCZ1HpWSZ5oi5B4LziA",
  "key27": "3s2Zvu6BjQgA9aPev4NneV8h5T2ytefjhbVpg5mqZiLqsq8d23FCBraLMqLwPZWqkzgpF6jFbp4bd7nYvyvQ6UC",
  "key28": "4c4QqLcVVBmpsBR46tePBu1KYKUWsrCHeGJsspeTFWSnwmxXVPMbRwngydY5tV4X8DvLvfuticZHaE1DrwkyUxeX",
  "key29": "3efV8FvNbQSaZ9BnS3vsqogSqG7fLtnbPdE5Bvix2VArnezPG7DXRT4FVyKqP9gH8G3xt5WTWq3QnPmTsjBUejLm",
  "key30": "kfcDCd1UdCMKUEUk6x56WYazgvHAHVDdcf33qkXtooupm4LS2JJ8XGNpPL331j6jUJYkWJh6dojD8BPMvMh6VdS",
  "key31": "2NoVXvCj6vJCdpMCCFEkGHts2dkE3C2JQcgdyQ4eV4BqFkcj781bi6ELf46UZYPNoiy59uJJGfprxsfeUGLSKUUT",
  "key32": "5JZiEK3bXVabsPfQyqtL1muchWQeGd98G3utVdfK4b9oPdvejD4YmznXkp3bzEJjKe2iXCrpbp7jyfZP7N3U5qHt",
  "key33": "315PhN1uQQzPgLwtHH4oZiaN9CHipyA88qX8riDTUjBXYe2DtPxGzfFtxznD5iiM7zvwgRCPCyEExNzZGFALvUCA",
  "key34": "yPfE6vMtKcWEjSJ6iq8mVYdQreMUWEnJcpxcDifXa1NXemxErJxTJ7mcdeynwEa7wJu1YvRkeFq2gVEpihNFKHs",
  "key35": "49Z6Ez4H25WPG1BAX6fm4sbHF4L5EkBigNpYvKYK9f8wUfZy4o4TuMxJ8Gd8FnR8RdTvPFt4xfJcamCVKpgpxnUs",
  "key36": "45vhVzE1RzT6rnvsVHxBMnyap5qMuu9LNvFm26Tr11KwZczrRsFtsbe8T3adMrM3duvSRNiS81NK25oMat93c37B",
  "key37": "47G6Tu95kWs8nbLaJ6tqR7bmpG6N6U6d8PiaazsjRJW38yCKEeJi2SUrVvLXgfzBdCDB6oRnGnH6xzzZtsNNE98z",
  "key38": "1aRuKeBoUdf9fsKtA4ceBE8oX2yuRprYYajmKvkd3bqPdfygrH5Jz86DLZNa5yo1yebFR4yBQqdrconkd5A5DEN",
  "key39": "2Yu168HXQLEmNuWWvLQcNtLq3dGGBroSqzpsZJQZKiTkQGFmtikR9xiU1A2ZKpimoe26KGMLV6ZTycwokJG5pQAe",
  "key40": "25GHidQmBybqpA2QBg8AQv4ixeVGBzndNb2FpjMur5DFxTUwiRuZHdsee4sxs9Dyc5Nv7XBmv6pTapG9ZzhJ2PcM",
  "key41": "5YxsyQFyHchTvWLMxvGmBJkKyXPYP9BMa5YD3mE1zukXe3WWpH7dxx8ErNCjRonbKWoi2EMUCvTvd1P9Lb1S6s3w"
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
