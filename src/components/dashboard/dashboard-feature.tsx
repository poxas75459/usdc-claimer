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
    "4kw1Jq6cKekhYemg3fQTovgWLao17jdkYVJfJrZMMMbkwLGMZWUSNqxuyYmwcLg8dhM8d9SgFsnopFWamXFfz7qQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zivyFSLtgV3AJr6PUW7NaPSECthe6vi6mJB7Qw1P9xBJf1hNoufJL8pEJkeVjd75F43xFgJH349kCqKACvbSVpq",
  "key1": "2cCWoupDMxBDnZoGDySvkSC4qh25bWnXmh5xJbikr9eoZmMqYgnd3PyAF2TxrWroZm3mw9sLSo2RReMvGRqrPWoD",
  "key2": "3NZfQ5sxTKrTQQGS1V3UTBQrHwqYqzcRZJk9uDRsjf3EScLrBVktGVaew3fvGcwkHnfbr13bRpXdGKCTE5vzwWvd",
  "key3": "5t8cCGzMhpP4wA2mLjBsLoYUMegbiyJk72uAgagCLkNxWtbhygibBDPdc6AhZtXXXvEzMEBTDcStJmPY55cnLm7F",
  "key4": "3CBSyWN57jXwtHZ5RkJAUgaLmjbcWkSMpo8xssvSXsaN1wxUbkqXwskda1XyUX3fz6YE5KFnpq6pXC96Wx3d7asx",
  "key5": "2ZuevEEKkjuk5TC11axbxwbc6zfefUaS8CWerkDaqB98FmDw9AhdvPy7mQ3yogYuCFiuTrcQcTzLLPNCds3ta8ho",
  "key6": "ukLMdbFXJgTWPDQ2DBzkicdE9J4bAQf3NRD8BcYD8m849ozWrs22XkWiFWDa5Wpw5ex9TLpRDDyggJ4nPHMuQ5R",
  "key7": "2GRYZnnr9HptxgXKdrHh9RXkGsEzrZk2zWERiZC2XU6QLLrrXu8tvUrZKup1ASFSTGMqnq9jAWhSBpSgzrndaXQm",
  "key8": "218hB5rDARPqfUNCAQxEqUojYCf997J6jt64TKupQPV2ddywNb6aCJ29dacNMXbYr53kiG4yqcRGQceNtaNuvLjj",
  "key9": "5h99ZS2ao3U6WLq3FpWb5iYGaVasB4iL8w7oSADALNnWGnWCMNvmpXa2L8y5ieU8nKQRHQXY21NEUqzUPPUHJ3kn",
  "key10": "2GhtbrZaxo28RLpKv8KMRzPe6ufV6VVU1MW1GhVqu4rjyFp5e3QVGAczT3Q2xAcac2nehjQSwquGT1nwfua2ecjx",
  "key11": "24sR4qXPsTorvd1FkCZ7heLgqnuHaLaCR4nP5hRHB2dF8tiJEmX5pAGUg58RCuYnjshN5xf4gJkxvmhWQ7GBkkk8",
  "key12": "5j5RdbRGiPtkTW9TRzew1J8AmdEfUswcL6bBNvnKS8GnzsANM2D4Cw6FFGUWePis4Epq5ew2S9VQSk4s3kgck2X1",
  "key13": "23c3PA7r3LF5UDqk9PkUekKDf8K658fMP7CXyydBieF57hTUMBHWHVW3kM7RVCjhNDRqzdSZV6j12iVvFB6HDRXt",
  "key14": "46cKXfdRGtwJYpA34NLwjUsRasF49sTMbaygmnvQ7aXXRngNCLPpovDFAgzAVoUNCTmYqv5oBJr2XbVmJhEMwma6",
  "key15": "eQwtgsqtHzXfQjZcrY5kGndoyp4GLdiW6jZ7ueJRTuTiJN6RfGaKsL55yyTZJqGZdpxBG5tNQkMZrLYcM6GoEWb",
  "key16": "65Baifi4FCALLHdbhgSHXez5p2yphNgwAQMkjDosD3ZX2ueWV1joZ7t8aG2jUyCeMeQxvEsvVk8RvQq1EyJyBdGK",
  "key17": "5qFnmzwYWg6AwLvpbWyVsNTVYVYrNRfNZuLK9QmBJMMg9Y5fq8jo2PQZenYZ9wG9jMMiMQ3bNRZLud8XX2YTL3s5",
  "key18": "3i8QJ7chLKvhqskc8Bnb8YPCvyZ9eAL6aQuxasK9bUv4L8KfHmmvH9wTFxWkFRjJKiA6vH9BSnis3WGHkXuqggXy",
  "key19": "mczErK8G7DjA8MqzuLTPzXbvSLdJKvkb2AT6t8E2vojFMH6aqgHXdWa5eVZYmPRkNLQEWvAPA9qWWJ5gxQ4UR2K",
  "key20": "54duDFvW9DFaZim1YjijFiQBh98wUXgJLJRoa2bmLDZtPYU1TeigjoC5aeg7T5hHWztc41kb8kf859B632woeHR4",
  "key21": "5cgUpdxzTNbgTST56DhHsnDjo4AsD6gkKCjKKVbmp28vKjEpgvLXeAooGUPxLbk7Xp8Qfp5yXKGNL6eP9NroHGNh",
  "key22": "2ZCePZNRaBBk2DeEheP4SvDRy3uLs998mDFyPvXxzXtPhsYpwgGVBttnXz2VCsiUCZSHoLRbbXjHh1biTGH2pNAY",
  "key23": "4r4ZDZRyTGi8hvihjoEoaJGkrFXTb8Q9KuWNaGR6mHC68vuLSrpgkNrLngCswVZpY25TU4pYAMj8NKPaXNWr6CtR",
  "key24": "AGsWo8YWaqnp4Q2bqKC9KVc7mBSEcwx3AQU1FA44yqMcT2gHVane1VNm4DjLN2NuDZTJf4vnN7V6pMSSFskQVfj",
  "key25": "3WrazsYEaE5cJw4aF5jExRjmfYfxZAsT6YoZfWQ2vamQoPgRG6Ru9j2mLYyQz8v7bZPgk877XPvXFy4N11z5S23M",
  "key26": "5eJqwHW2QsxoWaaMYJAPaWfRnudeMSp7Hxk5a5SyZPYm1KTSrLVa9nU3dk7TLgjwPtyhxwYLbMw2uEhE9M1nK2Ba",
  "key27": "2zy8wrnPKh8qoQtwddM2bLuRvqymH3a568TY2F3dtK7aMRJfAQ8VJfxLRA4hzDSyNHoenDpZDoqeT8dmcvDKQCj9",
  "key28": "4TTBMTf2qLDPm27pzMU93BbVpot4DZFfLFM8cBsdqnbrSHUnjdGzQbhYHZYxz5AfBeqt1rEjRrYEv2vQ5vCATTfa",
  "key29": "5b3cijpv3dD8niirkSAFdaykBTEk6ftpZDPftFXqjsZeQKEfymXFBmTAaH7NqbtxKxGLqJyFoeW5SqyNFBzPqY7n"
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
