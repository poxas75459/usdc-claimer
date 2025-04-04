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
    "AYBUe3CgrZak71WMW3rRX6iciPgiGwCzz82zxsjUPuQrrC9SvsMu9YPJFb2iMFSXVNYANYxQUVTZkdL6g6H9qiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NXCeDioKLQuv1CGvNDBGRFRewHjYFhCSk5ZLko4M8afEqxBrbxatJW4WxWjgVruKnWCUafGjd4rcsuxeF84Y69W",
  "key1": "4s4v9vswAHKe8uzhCG6q92qsPUSGih3EYp5fwqqpeyJH3fmPtpepmeeWCy6KAfKH3kXuE291b4A3NUwNePZAU37n",
  "key2": "3F5Z1YuSzyzdkbcKMwRj3GWPyACWKWQPHUdeVVrBnMAGgNjCqhVgdV4i8EsL2xtc4RhAUKLmMGuqJQz22UEgFJ92",
  "key3": "6C26BF8sPnKt7bTj1H4P4efksGni1R1oBGqtjjypvY9XK8EVc4jktRsxuRovF1nyeoF1w4Ap2XudQq3x5qJHhm6",
  "key4": "4jmjWEVzs1W8ixzP6X6mHXRx2bqQRb38vV5ocjAAqU3sv9x3TqesLcNFwgwEePj8S1yo3ywK8T6k969CSgqeZRKB",
  "key5": "558Za8W8wExnvNtCVaWtKNqV7X34cw3wPAfXKVSKTxXC5x9oQoeL2WWcziF4yGJNNTJMuMEeeTUnJMsyUtLEDq1k",
  "key6": "48wqbNJxtgvAH692GteRQYWkuYrUE4UGMc2U5S4ttk4k2yQv4we59RkiWc1X8ssmGn5dkyHHsjGAEFepzsz6VNud",
  "key7": "5h9G3QNraCcXqhcGuUqTqeP2UGRfFRbQs7riYCtXmRDHodEzUBhLgoBufdCwyVYBMmKKQBJftwo5tZvrMMH5bJW3",
  "key8": "5dWiBUKR6r1bRvC8GZ4sk9YyMNZbEiNXh1eayyrvjiffDx89acsVHcpDuhaZbnwkKM1w6fLBgUXNNULSfwaKMdz3",
  "key9": "5kbAurTCGpruVzJu71jxhsDeGs7JQp9WpcUWiqnTSunjaJALjfXb6BYUXvi9s595FkmqhTvudwp1vYyszBxCxFnj",
  "key10": "3VKBgfCwQNmeZxakkLT1FuzwwSj4WFcbKxnVJUWvSNdu5bqkG3KeHaXdA6uYcAmoc3EensMrY8vw3p3TZGzbbNFz",
  "key11": "4xAjRBNLQikbkGoyxEZdEQ2tFp1XccRKjLAR9PZYpLGNEHtYgiwUviEfmXTtrDxWofdhTntRx2bG1Czo3B3PJGVn",
  "key12": "2dPPgWsJyZ93QUg1tkXRdaRjbU6H3ZWDgKwRs2jKg8GxyBRyvW8xyEr25GmPbjagU1YTCacGqQgW1yq4wpA6AM3q",
  "key13": "5bwM1bRB2yKCyMjmoi7he15NVkwqWDE9LzbhECWuwBzmbLcsaTR6xDToHEbC9cuLTb5nd8h8cX2y4gEAPVUqi8FR",
  "key14": "5TcARTQATXLQ5yDfa6FRK1FqR1umRBqZA5h1rtySpVC3Ar5aXbk4rGvsTuUX68jeG45cfPBRz8SxrqTbiKc5QhwX",
  "key15": "5EtV5R3FyaeXjcX2H9kbPpkeC83RJ9uMnTJhuSAF2v9bhV4ZDTLXbLqWiRgkofQuZXgEYLPyiKnnmQnZVCqZqPup",
  "key16": "536gSnzB9mq6oPVjbPiZSZDTG7qTBjYQC3hjxvav2KXpTGMEWTo3fcmtS3JtRKkNTdQLbbwWGpku787vcVRMPvNb",
  "key17": "3SkN8Y5yCBfpZCFkuvgi1PnXSyCS8GGnxB1MMddk3xdhodWz3JcrCBuDV2VJsjfdWuFm4gWsXrQNZTtiXXJetbWV",
  "key18": "55pJ37GePsEKYmuu8AAxe7UpLa9UjKYtb26zaiK88JEehUd5qESwuQbQyU92ZFgNztWJR2BZfE2VmAAcpuCX7eD2",
  "key19": "3wtuy7sa8hQH6Q298uBqhjtxK2FPsAY5QjJ7KQfrz5w7NaDSUMc8iWHCwfiwYrcdTvjN9CNtwtJycdvzQRpavRvs",
  "key20": "3YqbZHhrYUeQ5dnncLo349anPDzox99EUGd6ypTcRXfQV34CZumWN89GTcFak2YWfPCWTXEQLhHqUHbisV2aas3v",
  "key21": "YQvRX7bCFVuKiy7hn6eWbk5ZbJS9P4yYT6MLqZD2DogSFT3AdMCNtC9wCC2M5nVrB9mHQh5bpLRvv84pj7sC8jA",
  "key22": "4m1dJMzaXevoC2K2qw5XEMe6XvDmASRySLYh5S3qvhbzDTf4ic8xL8Eev1aZCak1xaFapa5W5Bm24yMS6h5ywWx8",
  "key23": "4dXtNhz3iFBWyvUPJJYD12pgy35Z5HHBnvydtUSVB4b99Vo5dhoHdiiUCgwQH43TUbuF2GfyV4h5RtapB8x5FSm6",
  "key24": "66zTTg5kBH6zRaWY4ANaTZfR4wz61GYZyZBRGxgT1mmHbAjiHg9j7FAa3KZM1jRMHYwzJRmpottW7ZP3hWGea8EV",
  "key25": "5LR2XYnuLqz6p8QhHvDRTo2r8EbaGURZi9Z7yxMdgSrYVXMK4H6VLTYVuPsMk5Enj73mmccuEV6ywbU9Q9AHmSfJ",
  "key26": "qKhxY3JnXVEvfFcPdS755PZ4SMZT7tA5KmRJdYYCpPnqPeV6QuZe5eDxNMsKgCK1PNjf9WBchwxZbvZSgL36adF",
  "key27": "2vBZbBkaQTfuz98HcnxJtMBUKTKGqVLgGomeva1tZqFJwLhJUFYtEKKJSRUATdoRrLLkjeo2tz9V3F6Tk4WaJQ8v",
  "key28": "4iVwDUBxE9zjyAEEsWHr2MAspumZdcFpGfTHEXLismb5bLxFxL12L2fPk1umt3HSLVsASHaR9a4kKmufme8USy9Q",
  "key29": "37mdaVCydCw8sMiXqTsv9dWpZhVEtsYWm9834E41js1bcT3MxGfyHk6nMUFJvtw4AVGodqNoZc8sMJ3ubmAgByHi",
  "key30": "3YEERQcpTZsqDMAkj7vSUGkqSHiy9DKGUKEiEKi4877cbrTbww1MCoFLY7GBKhSyNVB6B6YTz1GzfzrPxw2Az5Rt",
  "key31": "3o7DGgdedqKN65Y9cicRtSB9TgTznxzvav7wwvBc2y9NPCLoLP7yEzFk4evjeRTgEzBRqFbfL2A4NpUBxGsA4okJ",
  "key32": "3LsJRZm132yc3xdZbkp92kTrzFUX9utC92JNepyeX145GNKwhwTjeVEiKbiHTALLxPHC1dSM4mW8ZR4McLPxA6Kk",
  "key33": "4TG4DNvYJbtPZXsjJm1NsFebidAVrgwisZFi4hwtCLxs6YCKjphAt83mSfUQ8vgYfHgV5SPqppd9CezkXbmVjzar",
  "key34": "ZjwGgJacvm7eHsBUG2ZY7PGjX5ZJMWRZk5taAhfSqN6osPyBW2qEApdqUWcoJ2GrUFqEWjpjrNPQx1Z7hj3p6wp",
  "key35": "5UP8oJDyUL7XVYMArc97kmNWm5zynqvYWP5k6UuAvt8LzkvEcoL2f7NnfZD4b1bt2UJDXpfLpirUMJzeuq3kquuc",
  "key36": "417P7sjjhW3wisiy5YRSowhiDBvzzpKNYYyHzyGUp8cJtVC5yAKQGVwCnS6dTHWBdec6fZmux8AknRRN8RW8Yenq",
  "key37": "669DuDfrwdve5md5ZjPRK4z8wiHn9AptAp7DenXAtpBxSpi5XD6y5YhKUtC4nDKc5c4ep1673rZ8a4tgvDUsjUot",
  "key38": "DoBrx32csGYAJsZ9p9PpFbwmEXCzeQJJZL8R4QMQPVNmTpRZU4PGBkKXtTEjnx3MrSWGPE7Nwe21GqDTkGUXFJe",
  "key39": "q5qCDheu2eLYgxjg7u5TceR3MGXM4bfwmP12pbqcTi2xCXHJJYZk94jT5Z8zCd7QsmezTNWmS67AuxJVJgJC7gs",
  "key40": "5MZgjaK5piMJKwR98KDUfaPPj5C2PJrrkojn5fSAhiJ5Ep9nb8K66iYsDF2BQahCzxB1qqnizs7agPMDQpD9FMkt",
  "key41": "3dk8nhSmkL55XnqNBoU6pArMRnAEv12rk9uZy2y6mvitS6q6dBQq3bgfwAoyxjcJTpWV49dqW97E8fkHrxKFAReY",
  "key42": "124WCT3RGr6J3bKvCLjg8QPYWiHmrH84JGgAdcrWaJkaPyqMFzop7dzPueogFbL5GFPbtE63eLVSMeBqDc4GdUXB"
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
