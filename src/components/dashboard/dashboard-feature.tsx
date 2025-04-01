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
    "3NDDt1aCsoUqAscNDnuPPSsfoqnhdTxpDSudJtAPihE2JqzSEBm91YRRKrRb1yspbaNbwUUNU3w5PjEjbi4vqoXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dQQ72raFzZN85ntsp5zzWcXFgBis5av54oPuntRwHhNoZMAUmJso8A7ChMVpwnHnFmEgn515uMMpnwqMnHHpo5d",
  "key1": "4K2RrpwT7HxKbozztvDGXujDrzXehJ91PEtuB4FSXVyj7XCWJjD5G4mwt5NvSrkcJsQ5Cb4aQr9jGCQqLysswkK2",
  "key2": "4qu1vQxab9tKQ81pjmPn5EnZny9iRJQax7UZqgvBfn6vng1qJgM5B3CtGwN2gWJiGBBSMLKj8krw2mM12u1LLqyr",
  "key3": "4PsHGXdacPhfpCL2GnthPN7jFbiTctzkPuU4SuRhmXcdZc8g7jfqFfK42HrQoPqtdKzEWxACasxKF3CzUJxh9KDM",
  "key4": "2NPBPdqYwhD6WSZHWjMZQX2h9EEpwpc2ZsYtuZS3bgEhw1HJLiHvJWXhvRswiXSb5QayBiFCabgjmXURCCh1sHCn",
  "key5": "5T3z5EUw4F6EJ3jxBffHVQXfJg9Sh8fsRxDwhqhjZjTL61Aepz4pKV9u6Fm34rQyEcLdP6c9xBPHgahHiedTCFTC",
  "key6": "4g9QwXB8fTHgiSvq4w5ocxhNHXsZh8FQPFsYtzZEX6FkXFf8rAuLQRkYYeWnp9pXLCVsp7GgLNrHC5bMsHHYMd6W",
  "key7": "nAqVm7DFSMxfNxDpakPUeLxG9nYHE82tP8Cib8fhJc4DDKmVimkActtGDf1c9CjWzUa7tFDdW5neCST9A9o2p9X",
  "key8": "3VsaT7UD25jSB4S95RyvHQRHoCcittEegZNbhmoegiscpNy57jevioaySJKn44KJyFfxKszbfrPtqp3MPCKWzyip",
  "key9": "5CRHQwgVmqy9WFvidCZDEfPHq2K95RpigCXfXpWZ2GkdByF61knvf87rrNnEQeSkJrL7czUrZRUbCHvaa8KLmhxt",
  "key10": "2ukn1ETxE3256yuABrt3tLB5imd8JTJH16Vd8MUCjZanD3TSG8Wvj3AF2KtSCDsz16emboHyU3gaTJgh1eG9qoCw",
  "key11": "76fjbXKrNdnmVPmkg74phBpxUjPG1tZ6qpM39HwU42ZoQj5HArtrPR2845u3nM1qzNAGjZuAozjJMFAmW4Y4Y9x",
  "key12": "55sfmtgdWEbgYDFuuVE8cTf1W1AZPpzaM75hWkZtjjjhLqmaiEAFwuor9SH9BA1SJsWX1goAArc8oTYGE7VCUHJJ",
  "key13": "2QvB5PhjhEhX8mJG7k9V1akf455eqetVjp8Ev9UiyW9Ha4YfkokWM6YLXea8JYXUcDFGpbD4im8bjrRQX8Mwsw3h",
  "key14": "3ZxNVTPL87RDGaoVzSrDfjA1hMNXY2hCPwzsoqNJ5mCJesQ6YwRa6Vp957MjmepwxR9ojRR7EtdUadYERxZzo3xF",
  "key15": "kAiJhtpCvzd8jNm4uosWVgU2TDZiQ95GnNtQ6FMhPj1MnP8u6gEkvDKho7Akk2UspuE2YuvjQ1m68qrVFUcHxWK",
  "key16": "4NCTCVAXhXkF4QZi9jB25Mzh1YeMyGRx8ytfYs3NdKU9fLLfxNSMozKSk8TNQcWcJUHjoX7BizzfUYKAPMk4wsTm",
  "key17": "HfAyBBe4C8anSXFYbudPApyFiCfSm94M1Y3cr1VZDAW8wgAKa3Gzzfqk6aMiBMbwJn1jrQ2H3UQmEDjwTDEoKug",
  "key18": "5bDL5zZaZ1uasmPJpEVX5XV2tjoDXW61J1r9DAYMsb96Ygu2Hmo8JkdJqCxQqsYgivHy1FDaxYsafzZ9DZsQXsJ5",
  "key19": "3cHBPUHVCAc6LFzvU1gEKs7KZhA4s29bFWwEGbj2KxxRxX3iNQqQCbhQQJTUM2DptvAumPExAWweF8VP1ZDjoHLv",
  "key20": "4J1dL8oeCCH5EGTGiM9ZTQgMQ9cXTzZrutijAekixNBAKKyXRrc1PuGf1CbbaXwpAFFJQ88f5vbnRJ2zPXo1s5cD",
  "key21": "4swqtqbnxny7tmGBZAJ76TFakSQ1Y17r9JVDajEBJbBB3k1mhoCfdFsi6vYZ7SsXDSWf95PWjKGHGVbY4R8tGUzy",
  "key22": "2krQBmdtmfxdrJzig3CGBbWpePgYZ1aK89johzrDJw4t6BJDixkQS2QCmJQELRTtznFYTdFC4dQVQYnPhbuu11fa",
  "key23": "55PbQ97xejH5Kycuv22oua2qttmUUvHRBeZDJguXkyByGaf5AQXQkrrC9JjuodKawjet7HdmSDRw1kdE9ehSQ6rb",
  "key24": "3YbGiaSKdX8CZXtzaVW5gcNmbibGTEsBRY8KVt7zzFGJNXqFhA5y8BjhS2Rgw8m8TpEE1zxUmXo3KxPuPWHeGrEg",
  "key25": "23hx4oSfiecjtY4g5JtX4xb2Wm7Nz59RKomQE8qYQUSBM94srJcfUtSZVhhxTyZem25C3G2tfK8UpT98mmzsbhB5",
  "key26": "2n22ELLe5urdd9odkPJxkXUZ12gZ322hyuYtwSCaSk4qmc6aJcHS5U5DjzFTj9f5oTnXngSio6NE6DnLmxptPWbZ",
  "key27": "3EEo9po62hhkq1SK1y2U8tPtRCCLAVJ4Ku54by4U3KYXfgjNXxgpbykkHFB476QfU5PoMstmg9RLRd1EFdjpLa95",
  "key28": "3SSh2QZfYi58V4dB1rkrnqVFJryi4Vn6LJqqtfhv9vHuBAyb1d2suEggxdecS2VJT7MNwB2VA5U5uLHSTSJtLjXG",
  "key29": "3Czwvp17j8fXCn7WiM9vehxZMzZiD1e7U8d5eQhBs1LGxwUXvKcAbc3XrhF8Mqcpm7NLS6TSNFTv5Drb3S4uNqwE",
  "key30": "2uULmrmQCeRfK9WmnF1yTfBS8tyYxzzCikHEZNuK5VLpuNweJffkPk6iAS8S1QCjbubgz3jbWNaATGb4y6pzN77y",
  "key31": "5g7i92NjBn2F25T38qoqaw1ivdXagxJ5psPJZ4JAqAoZ8TTuZpi9V7V4iKActaUHVHSnd8RbswWaoysfpBkRF3oX",
  "key32": "2LXnioEAW5KWpBm3p1DpVY9LwNddktNikpQsaWFKmp9vMsHomV4HdMSaVXzMUh2q37CBiNKFtK93RNxf9NEesXHv",
  "key33": "MsyGXwPTWSfd43yW5vTsWFuRkFuv4WK4dhAJPWFK2qCLAsD8y8A6M3ZfqM76EmmiQzr53u1TTpSuvSjcWFFVSq5",
  "key34": "4DMNxLYPSpxa41beAc79SRpm81vbSQqjyz1Jb2ANBEMsqAfZZjM2oMbPFSYHqPhsDDYmMgrn8fpLF5vwzWP1HAiL"
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
