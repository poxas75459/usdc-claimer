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
    "4jYN7Tnuzh72XPx5T5WzcBBoDkThoNJrfT7UBeRj7byGDXrMFf4bp7Rx2ZGWfGEXVEndscgo8Sw1uoa2kep9fEoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NytySWiXTSKJf4TuSPPAMz1BswVk6f5bYJWZh9cZjMaMyvv3Q9MXewSYesRF6YTFd1tzdYhwkz6rkfbacBYJVWb",
  "key1": "HQq3DmpcUvpBstyTz6fmvK1R9gEGKA9ajSicpoXXXpPHBRYt7DmdeRPgwTkjTH8wbve1XnyNKJDRRovyRtXqC7y",
  "key2": "4LHJVGUhUMfmycwdKr4Ev8ZyRSdmS66Rrd6iKKMZ63sGC8WGc9s8JfHMSsLQo63qS5YsYMQ23F7cns2FPVSA94CS",
  "key3": "5A6AqEYijE8U5mFSDK2p5zbduh6b25kGUfA2MJnsDUoV2kRxfS6ZrjjpgkBB2LwXoqMiQZg1Ss5CQrVmrJKS12cQ",
  "key4": "5quRVq12iEPnMyoePUnYvQC6bqQv11bRLjL3CzA4WyTgLQbGBqQp9MQDY5xnCRFvCSsnL8arHAr4WRDgqZWoXxih",
  "key5": "ddqd8th59Apv8UcMi5ykqhtohN5XrgE9m6JMPUkxUwSA6WmHKU29U87sBwH6eGoZhZGJ6Aqwi8LcRE8EPJ7MbAF",
  "key6": "3mPqpk48b6f5kCfeHtmgPLJxafuudYbkFGP7fQeXo2eeXxqv88HWn3T1cYLKTw5vD5CxNXnBs1E7AYuTCSCVZ7pg",
  "key7": "46icdbHKcMD82CfehgLN2Qb4rdmgLpXHHyyVYfnrqi6E8ST9gmGcQb6wuFZazohoJG7XLPtZz47NozzwiBJi8y7S",
  "key8": "3TWwZwXGqKyCDvScAAavZ2LJqBTztSiCBdaUHUdE2gtYorNMxwYEXxp11sPj3a93XkfnLQPee9U55Cxej1WidPWn",
  "key9": "gth9d1NVQcnW1Sjx1GYtmo7PNhkN6XagnuTy7aJvn5TqhdJAb3WXEZthvhFjCMP33qCRpqSR6E2V4mHCVXjkUHU",
  "key10": "49fnZKVBhG3BEkqhEaqUEafVXaR3mZoVb8REu8PRV9YFPt56fLLKu8cbZJBCizAgtbfijeeX9BWgbsPd59BRq5xq",
  "key11": "4Vp7GV4XDnoSV688mK2qxaC5Uu5sqwCxEF5w1vLGz6XkussmtDsouGr5GbSWz5FoKvKnru7HEx2UkVDE1qZPh3ig",
  "key12": "63uZpQuX1bWASJtJNJsWyAoUQf6nzroE8ZNQgcsLHvXBgoNM9nPbR13QpvsYzZLTk8n4MiUKe6v5XP27NjUZuLa",
  "key13": "548SFJEsDKe8KXPUKVmffSXMem3kwHXngMQvgyMLVn23xHcATNGFKwxcGnbQonbHrLVQqfKnsEdiE9d6JD95jYTp",
  "key14": "5DWcttRXdKbpK6d8Ac8EF5M5FtZ6QZEtMVJZBQSLxFih4hBwSRTtx2a7EjvQCb61kChgvSDmrXU9aeAhC8PzF2F3",
  "key15": "56onq5oHEbQ5HBCTaAGJziqY7qtQCgDkjAi9TSkoAbMJhx8tT3a9jZxC2mwxiXvWq13GakR2WS2YV3NxaHSFxivz",
  "key16": "2TRnkdfmn4pSAR4nimzSSwo5HoBApw9e8j48z9BATZwLCsH5GvykLzk56Wz6UHCAs21Wh1kPri6ZgKJahu34Zgnk",
  "key17": "ew42VuqmzvvfWh67sfn6xkSmNH9ruejPst81FEy7Aio8qkqVVDMdkZycSuxFrt6xTXTwj6KkfQEPgvUM9S6FvFj",
  "key18": "4YRnEAUsU4rFUWTLUAaox9d5hRUt2njQDbFBqtv4GbmUNnQFtYAGg7QZFRAbbCLbWSLBmFBk3saPZJZY81KjWcrx",
  "key19": "21ZUuQfUE4ibdWankCGsif1b5Ji6PKjUS8kmkiiY9dey2Ae2YYvMxo92giteEdR8tWSX2bmw3YfLTWmTUug3duBF",
  "key20": "33RJuC5a2S3VFkVCznDEJm4Ezw1SvxHicbgTK8Pg6UBiR8phB6Vf1m5C3gJKP3SfdZNe5wLoifH4TMvrTThbS1s1",
  "key21": "kJcbNTfiAqnKafiLconssfgZX5wwjPH6NxyhKcpiumZSTphTAX2fRM7y9Fgsyb1Wm4pdstce3hZCrQqJRGWgEwm",
  "key22": "cCoXGiwGJebo6samF8PYSptVKzXvdfWLyxNZeD4fYyGVui3M2hQmLcL28kfjyzceHDTzgzdP5QZtdKHF5xGt9p2",
  "key23": "2GFe3ngqdGmhRVeS7bpwXA3ZE2vgmp26ixpCQqiJGFNaA6shFrKX9PYqCrRcW5dn6jJpxh3c5YDryxoKbCZi4d5H",
  "key24": "bkvJ9VdzVyz6eKTeRq3erpHqXRcM2cRDLMmQmL8QWdoVDtB7A8hDUs8oje12fD2bKhu4ki7JMEKWkomMM8f1cj8",
  "key25": "2VME9CogoreWakecf98MQAxadymJy6oPnaVYkKNxeqd5JWVaGnNXMpWf5BzTNvqx9GaAFi4wQVMrCmBHGu9HRMdV",
  "key26": "QmhKrRn29pkLz4q2mf4Fw1DxubrVDMHjLzocRn6Qg8mcinPp8aaKf4fJ8YuCAyNqWBHaXCHx9WXufJCLQ1xY9t6",
  "key27": "58WbACYuUkVaf7E2A99UdHgD1zagrB6HtqWx55AeVcfi3k9oExW5vrrFwMCKEQcgATktVkiwD9c6hdwkaREuxuge"
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
