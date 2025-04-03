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
    "63CXZFfkvULtMjWZZKAahmVsy9Y5WCE6LucrUtwwGQeWSXoEPPkaJh5e1xzAS9g67MuTDrbW85HkvEK5YrewEi1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bzaaBwD3wrfCv3nuKxF6a6Pgd36dF88y1gSKjnj6cucvpjXfitFyTwGyS51jSHryPqZMx8BpW8oFdyVWcjsHT9n",
  "key1": "HeXnTMdrf3b2b7YHw6y4Snss4sg5RUnTEwSE8gHBHn3mDoor5hbkLumHLVQm6eVxJMXPHDiBjS5ZCFxgDcd63MS",
  "key2": "34VEx19Gf4TqtRffRS9tqU13DAtcbw25cL2CLoLQ9jZFAEk148DMx4JkF1jhSbBFu723MEwouEpZCxeHRgcZUnZd",
  "key3": "4mrCxTzEQms2mhQqqGo6PBVjtSgswR6MuxbisPpSqSLegr6BK2pbdskS83pTGUF9D3fTv4HTxJS5Ta88Uuh8GdZB",
  "key4": "5EjesW4DE7wE39NBc6ritPM1vSUFTdU97gbEeyAHNTEpRwGGtHLZgLTHbBRTkoLpiQi55XyxC2F18Q343baAg73Y",
  "key5": "2x3gHwt98QjY1t75xGSNbYDfGkZNCdtnEe41uwssxXWS2BSpEaNfnTyUUf8Yzt8gYr6LwwENiX46rbEysjSCZ3rd",
  "key6": "3a4VPoZLyCgVpzck5KCKcpguo8wXovngi9XnG8kaaDe9WCPfYVDvLtAAeKDCeqeV1QCs6ViqNkJUM2rFNDWGMaCG",
  "key7": "2gkPPxmTqNwVS9UqGq1atRH3QjT15vJizJr86EF4in8bzciX3GN3h2gzYqgzMBz25YkVyXqX7zAhm7uTbB7wEsia",
  "key8": "4ksKa8YMbkiMtCE6jmSX91JnurAvcp4oUuhKjzCn2b1EBsex885xrtAeZCyCZ8LUDxLPNweVT4GhZhQLPEQGQva5",
  "key9": "3DDuFHkRHKzv3TmArWvcHM1oLcn72g8BofdPTZqvrYKhjurmXtzd8CZs93br8W8z8nGibM3oQTYM8fgzQ1pRhfUF",
  "key10": "3MmD4SgAetzn2aKcWCFLPkbbok9HQ9yBVv7rLw2PEFnQzotqVoXB7ViuV8VHkA46CDHt9fPNo5iwNFG79AHVsnpm",
  "key11": "45tfg28BEWvuwHT5RW7W9MNBPBYL7TW4rXd517APTtToPKdhXhMBM1RvEi183r4TBiJL8ucmefgPqgzcauRoBD5q",
  "key12": "33iN7m5DBBFiWwsABQUGTat9m6aZKbVpf6VzCbMzVmKDfV3e5GZo9naCo63h4BDtBuLybhRr4YYyRSiRqS2X4cZe",
  "key13": "5BVZTx2oN4dHf6LJ2rwfLXLAqo7cw8cbyMNt6ymJJtUHULLJtKrYag6pvEVMgdJY8Ern4QMZW7VzzPpXzX4CtTrs",
  "key14": "5xcXXTmRVMWZEegm1YxiV8PUbPVNyB5mi4dSUfqfYuWMycQMubvpnANs7Eh92zT992GbWVymNtvrJ6dTk29QzeSL",
  "key15": "56Sy5rE2hykSKwWcNY6LDeRWanHGXhygS8WJeCRhHaAveMoCu1QbGrtQTPzkpjuRB68GWLcschjx24fynxMCQKxy",
  "key16": "5CGUPtYjbLcFrtcXn9JppPW59xENhX2aYuE1vyw8xkk9JhW4cL1VTRZRneTGV1kzqJAzpfTn5oTjvpTTvb7yDu1Y",
  "key17": "2onV98nJWAWcWbfqAGh1YVjUcVbN2odfvVvceLj6f7EJvs44mDeUanrnWqwyfkUF5nnPTgLu9KQTywUtiTKwmcQv",
  "key18": "2q8KTNGwQr2wpJsMQi1icxD7FiV3adnRCHTRoQY4n1t6Z8QkqpWE1NioA7AKWcL9BNn6fJTFATpR2FDgnxMPyX7f",
  "key19": "5SfBJmNuPMaFhPLRXKeTxZSesmRoVEhB9qeVGLhiAkaUuTXaWKpqAaFV3k51XS2pE33HMCpZwWsC9QSczVdfqurv",
  "key20": "4gJcaXae9eUKFBGbV6TvG1TKTk5FFSd6tWQzKVbBHkumP7zT2nvf57ccxSXBvK1mT2zn9oUT5Y9PzTsq8oBdoWKG",
  "key21": "2T6cRR8frfTz8wg4rfscX3MGUnxWjWS4kwAkbqD3LWQsW3UoTWkfYtB6xTTEXZj1PSsFV9YQg6u7x26oC34iCXC3",
  "key22": "4zJtwhj9LzyJb55TxoogVwPSM3E5RJgJvnP8aZmvfAegHAndvE2o7ray1FiJqLtKzoqp9ueCqPCSPgLZjWGoSSqc",
  "key23": "5RAVix5RvHAjkPUh459Fx4J8x2TWbBSWHrNAJL7ZesCxN4YBupRQoc83VsAWjp2FBjmEX1RWJkKfCo6fg9jubFtn",
  "key24": "3i3VQ8vK6HtUw1HyrjhwqPM9A1NZjv7CBMnTvZAWMR7QjojGTiEEwzG7F2N47x8y1PFeKs5KFHdZ1eH4e6BqhamJ",
  "key25": "tVynTVb8nJzGNNijbQek1obxkz8exJpKYewhjjCBoVqRyZKFJuaBc8zmND2Bj3TFcRB6Quf65LWyPZUuK4Tmi5Q",
  "key26": "4XsAxG991q3ekX7FXUmUQFuHujYULNiFqyUKuzMwMuJMAUp2SE3umzrhrXhsP3x9CzJrRvPq67KYM9sYJNz22S3Z",
  "key27": "5sPPBYxm1ez8Prh7PHATKtDMubREGxzG2Mu3xqsi1zUsbT2uTcQBz187ZLwKpXgm69x8Ehsr8xaJmLDsXZB9KQNB",
  "key28": "rSNrmB56fe6ddizAamJjqZ1pNR2mxeJ7b4tPcBN1pifePAuC9JRARZSy5bKBJqm72iFCbFsnvYWrkx5GNGkXeHT",
  "key29": "2Dj2KdgdeARkTdNxvfYcSB7jiYrpGXA9DJxnSQytTgsSLz3YdZhEXzkxJu3H8HoK8w2eojojzXwK32sVt92EjWNb",
  "key30": "5xGopy1AuBCurTsqpWfgfzYsrpCy7XWpLSji3iR8ZjX7eteuL9irndHRFCrhBu4g3aiTGWC9RN7iP91fhrzMHubV",
  "key31": "61sB1HcLeYEszY5B2NZQdnkVzpwhGvGgjfAkLhdZ6PrNReCS39YyG1c3WB7VuektE7Mx9CNHGNFBzy73MF8jws78",
  "key32": "HnATtM5N64UjJRYw1bd96Z5VBFcjE8DZNuPnW7oEQ8HxLV5eviXFDwd7zgE1hdCFtvzd1cAfZUYRpiy3RTCdo6d",
  "key33": "mFWr35NAF8cBw6WAfsoWhqhmhC4ns66iG3zf9vnDGuuN76hZGDdwa9HjokmyZnDsuWCM33o4XLrgHZvwVnNrUB9",
  "key34": "3scmbaA1zUiA26NpdwE9h2RYdePPR73U7zgtzSghpVa5JzJ7iWF3CJ6iwiaBD2eH1NqwdQtd84jNRzDqgaZbf6ie",
  "key35": "8P3KnTQjeMZ2dbu2TGtHYDc2nt8vvA7xfcoW2o8yTLH8WWj35FiMUU4BVr9m69hPnJrp4ZjWroNge2vH9Qfiqos",
  "key36": "3GsHbWU4uiAmJ3WQeDewLosgj4gZ59jrczRfEoWFW7YY8de7BpcKRyzjDwmgXgYUtuc9GfDQRgjaJyoS3bo2cKvz",
  "key37": "4TZMxCqj5gAGz4RUdY7WitSXTgPV8Af5fCksYzrtJ8kr4ZLcmDncLUHbDmsyJmz1sETUvgykrAAiKPDJbmfUx9u2",
  "key38": "2uPuGgtrNyFziSGAnzJF23rwvj2jWapQerrHNd8JcH1xRVX5qzHaQw9rqWWhDHKkTFdNgbdiYt7ig3ntGVNetBKZ",
  "key39": "5qw39JCWbq37WujPMZ38ac3rZAWVHqC1CnA2RyYcC1XBFJNvLiQkSNwzgsMHEjo9mV3jVf8eKuni2MVxDu8dj2Cb"
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
