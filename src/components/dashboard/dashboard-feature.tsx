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
    "4ucfWBdYEmXcn1a1ij23RecW6mt7Dig6cr4MJSxnpanRJ8EMwcNVFPrsmvzurG6r9Mm6H6b87V9uRUhSN4q3oFtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T6Aft9tzYDT1ChiSGAAFzZzQiqGAhYcq1G4mUi6DjEeHKP1uMih8UqVzPwqGBe28oFn6JcY7jvCv8NxjmXguqAw",
  "key1": "3VPPWistvpAHDd12rdFDm76HCyqZX4yozgH85hgtDZ6cHEtm9EzQ3SERJNt5tJvBMV76fn2a8Weh9nCxS5dWwrSg",
  "key2": "A1b4gNqtFKi6XpmSXPmnQnbLP8uSMJ7XsMJ5BG9AsQySZ5KuN75FjguRh5347m5Qsbw1763ADpRcTx4ubjmmGNE",
  "key3": "3mPcFSqFPHhjWVe68Y8KPgUCAT4iirfr8FGUNfRv2KxsSBvs4QksT6EyYCjiiZcXT1GAsyBwvHV6Q1ajkmvt3w61",
  "key4": "5Zdgis9WW5cyGFXxzdM2EkCqZvhYwvnRrWih3f9SWrs6QZgNSWBKD4QVugRj4tcATY2q2F8UnHuxjxR4gjiZg8J6",
  "key5": "586aKoJdS3DApaPyawFpHoyAfZRrUMgqSYG7yrvH4HbwjsyTnMQgd42vACEbRuG1ZYS4RS2vjRX8maKRrFhWw6ur",
  "key6": "e4CmjXXAt4pdRMM5WBV5A2NFArhm4kmvjHM2hQmTy6LNnsPaRUzte3squwTHAZmng5nzUUzS9Bmenv12ocdS3nP",
  "key7": "3Z38FLe6rhgAHoGc7ERCdiTaUFAdqWKTF2ji5GkYc7H7LQ9pFp3uwhHngQAxNHc8n8iz7XbkBhc9RuKqMnA6tV2S",
  "key8": "4v47NyN1b4dVcf9xJQWDhMGPzR59jzb18etyxBv9Rq4PSXCP2kGzs7FC1w71JYkWP5fdAgDg5w6mo9bZf9P7nBkL",
  "key9": "59m5wZJWurF2WA5dTyJsgk9XJw9ogi1HF3zeWvS18TyVFAyZLjqTwXQQm4AE9B8iKdZKfF79ij51bDETNuA9Qme4",
  "key10": "46tZ6KSBVXwQcdiNeNdg912XYPT6s5ZVWemXXAvYPQqCCKWnPC3PzQV2WoByrARLJuqvwJYgTiQvcPAyHNzGiUor",
  "key11": "BcfhQRTwoXLTYbAwJvfx4joEqEDLJj2MoZ4RJjWfPsyiJefxjKht3aAKtmvHRfGwAatzPCp2evMc2GP2LxT5E2w",
  "key12": "3RDjEFmY5LTEj2XoUgjXyW9mRr8xJPc4rGShPaF8eWGTxMU8QgBWdVF549URCnxtNmqXsw39z6NQ9n7ArVySWMXf",
  "key13": "4SRJN7PK3Mc3WibwQ2JHvo1E4GYP8GhWr7ptcGEAuRbaSfnb3AvN3ezDk3fBBY7Hd3eb2b8qkxri26z3RgzfCHFZ",
  "key14": "3F8kC175QjU6w4tNnX9q54XdinzcFd31xhr8BrNJk1JhD5CnkMi8miGANYXbP2jQiZRVqY5nGfRPdsVXTVq2VtwV",
  "key15": "4cnSrvwaCbpvrttTphz1v9WDayPM5qmQ5bYvfXrNUMkceVXgHhWsgMwYD69vCmU2zo6dTfuxhxK7PBRFASjUm386",
  "key16": "3qMSKeaDghU5GSiG3PRtNSkPTiCNuPaq4qgdpSSYUgH1Dnqm2YUjRT7yQf4KHvzvZAZMoJfS9cBLTj5bFyxUDUy8",
  "key17": "4N6gPZtD2dDBEN9BJtReS9g6Enkx8KzaxW2PteDF7eeLdhfa6q6LxtspPvLdxpVdkU8nQ5du6djsBWy5zQHFLsPu",
  "key18": "4ZbE6gqiu6hpuqG1b4CyTzzxAZm2NEUJZophpcxsi1Ly6xpGutVMz8MeAsXHHz2nR4MVNxPSgo5xUd8diX4TCGL6",
  "key19": "2cj4QiCs4A3nqLz5rh7xntL92iC7rnqi2k5BXWknCo5o5RH1Pc91m52QBBUE1fQyu86dig4hqnT4uvKuBeDdbNEd",
  "key20": "2piwVGsr6nqCdhuXMunYfSSuhebBLstonQgCSySYdELS9HU6YQkDvdsCUpJbRT2F3VB7wHLzm73LmpL3NWWbeTi8",
  "key21": "eXyEP4j7o8VYwEsa7dVK9TfsZTfv5qcLekeJ2FZCYeCtjk9vGock162geDhtuSNCKzSFoYxkqp8cZgUHWLevZXe",
  "key22": "2ZwfAHm41pQdQPFRpzgirhE2APuA3gwWWjfwLChyr4grJmvC796ryWyPFXGMut9AegVr2dBfS489JebzHPWYWx6q",
  "key23": "55Lw6v4LnTJzAcwZ3pmjiTMWpm52Gi2JNxcxFEmxbkqBRNHUf4hriucL1JGHwb9J4Nj2gXtgnNninVLvHPJ92mNc",
  "key24": "YuVZoCpnjkVUfpKF6fJU3zSstf8xvRdyt1vbHih9nNyFHbh7nJPR5qCRyYTW4vrc7trc9n2ENi2cw7Dmo9YCP4i",
  "key25": "24AUnd6mZDx7Y5KBus48S91zfm4uAk2v4F4oZsZJjoA3ZFvAn4fULkXR9q1WVSoCZ11DU4Va8moHRXWbyeWxm1ea",
  "key26": "4yGXE8RM4DZtGY1dc2CreoZ4e2J1D15xcnruYtgQtKsMh2MiwmFgEv1sLHt1T2mrzCSC61cXLsXoHd1XMBkZhcQo",
  "key27": "53KsxC5Cc1tgqEDYggL3h7qgJRhisy7wPNQzVhFyHEFzyK7EwmNRpRSu3aaA9ZTinuyiAVBBaQMYr7V8YxvHiTqP",
  "key28": "3EsJkYYJkGUqjmSCbw2gE5GKaUA4vNyrAGZcrNNuhV2E68iunaRyVzjiJdHqauFfUDRspXDjPcQc3bnJqyXdE7Qr",
  "key29": "45BjVs1GZNzJemC4HGTzTWfJSa93UMMj6jCNbMTgLVRwkiPmXpM9cqkoTvKW8r5rxzAsTazrLLSXzW616fhnafyD",
  "key30": "GyoNJTQj7MWxbka9XtwLCGCug2YrBMNWwrkvnexL5v28PKzkeBCmLDgUYGPtL1wVKin1jcTbtNTsy35MdtjAnCg",
  "key31": "2gK9WHuk7fBwBENYjWWMK7tUhCsFC6Wmn1Vbqkz2MX9xoQNQxpCG7UY7vis1DP95Vu2qKhJht13hiWpvBVFpWL9u",
  "key32": "2w28bKcBaLnA8gcrTr2CRuUu3qEj5S9Bk1GBLFqDqgQ1byeXyGZ7d2eQfcbbeLpB1ApWGAhEXY7nHvVa6omL8bkZ",
  "key33": "34zQ7YxVAH1fPUqP6SfLCqx8nUS4NyxyGdni4byE8YmWYhoZLE36SMQsqvnTYVPQvx9DoPqdSEvJowHKaGTcSYse"
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
