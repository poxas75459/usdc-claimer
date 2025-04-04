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
    "UVv37i9YNdDzBAFu7Mpz1awbcdD4UVmTSzuXfHHLcUswBq11XTY47FKpqW5niyBpJN78YT1Hm2Fs4y4cq5ZxfY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p74DV4rU5SPsukVu2tnjsSqfk1emkDZFi45Ps9faiQnPfCNuhjbesPKexfDakFTWRUBva5g7XB4qz7q4AAXPbnM",
  "key1": "3ASdV59XZDakXfbKirKBLYXe9BtFZXFY78qQHrbtfcRH8dt4kvCgwZvdyJS7gPLgLBBcBypiMCrNGoyUSJy37Jqm",
  "key2": "4QjG1PdjA8zA7EJeDs8bWFGdiMEivX3tsRDnjCBAn7vv9ZB5wx9MFQNhUoFsCeTzYuupEcQTL36yr3NX5N2y8gah",
  "key3": "2MzYVrmAm6WiqHiPreAmMjEZCnLP9YzJyMqsYDob3hpedMwRAaPM1sbj2hBZgYJmVsaSXbZpzoX7dtxfXek2P7mW",
  "key4": "2grHDNs4bmAGuQ4L3bLYwa9fqsSq9KeGNLaLnF9D7i5zS9sLkttqaMmx7Lro9rntmPLYWZ42ZDq8Huj8x81dXHvf",
  "key5": "K5qwJjCK2i28t9RKW695qrq5jcB54wTQodG6sUFjFmbxDJ87HZkc9hBpsRFETmpi8CHgqZVqQaCLpTmF1Kjw3AC",
  "key6": "4KjDifKCpdzQCenS2aEbfhjxk8Wg7WFApbPRtj3KDZaAbncvEWP2LCR1tg4o5F94nceY6HNLtvTRWwfZ6rNxwfRQ",
  "key7": "YBHqmxMRvF2L6oBTZFEkVbTqDLjzdARZ7HecCYiJRDupr6sXzCMNJabNZ5TFBnHvA4v1mXHG2PA5CwjEwqMuekS",
  "key8": "3aYPCZgkVpgvU1Ac4MzCgzNKtYsRBb5cuU4vrdhVewryNNyc8AnziKkb1Npk2CbL5SzAX7PPjpQ1TcYT9CuPpsDV",
  "key9": "5jLHDQGZb1SQCSui2i1HKy2W2mYb2KAqWFrdCHtBCTPjsCjAfcSa8tYuDit17mSichncHj6PpxyGqLtEyGwgbadS",
  "key10": "4bSQD8KGKZiE9SEV1LJsCZ3uin8XedWNpVpe8dDHL4ZbkV7qw96yEpAR3hyXkAPGx9sDyxjbRzNzsnFof9qEmsfv",
  "key11": "5Mwq4Kr5RXJDjzXu8NW9o9J1dgnHVLFNEpveMrEvFUZDRoGbs8q7xgYWSiEWNshbqfjHMZ7t4vEWV4ocLHzZ6eSw",
  "key12": "5uQiwnNodt5HVLKRZQBAc5mqtzdCkoEJtZ9zcvjADhZa2qFyqm2uQ1phLv7YxKGsLBQiQBLLesCAc2r5uL88gSRd",
  "key13": "5qWB3XKAuFCgWmpwcZ7jonwBuih6xnvzryqJbAzNo1ckVSQjHfKPvMsX1RQT3JZ79Tu4wHnqKFL4Kkw7GBPfApE8",
  "key14": "5iKournBGYKPHkqFxieqtt2p1chjwJjVdfzFj52ciQXnZt43dRz9asUHnQLLL78PVBu3Zti5cm6xSKnFxsyMRr8D",
  "key15": "7gJ5nrkaAmq1PfFGeJ4XhxoQ3CkgRnGkvrkZ3fMfwi53bV4dh6s3YYUiJ7C2z5SD3zeocSr9CtiGJYnV6skTnh5",
  "key16": "2oGUQ5sdd7iXk3uUhFjMTKuqp9sXCBWggfgAfSSNbH4ExbrmHKuLbzgFzCG98T88WntoB5z95yRysyCYq4KsVkhG",
  "key17": "5ws8BiNHg9ppAtpZTqAqHKdPGTPrXAUUajXJ5GA36rEU1iQxMVm9XyZKPdMA4FwU7jpyCwRSn2mgzcvEznK5DWzd",
  "key18": "2xkRPw8LJVxCmG5b87UzGGtNcyJqfcHdgtnV5pctPhW7N6TuG4tiBrLmCS5ddwhmQKmNNYX3Scv3jJHkV1m2JgJs",
  "key19": "34ELVqkQqjYsBmRhEcDj7B2axmQjHpj3ScEUGov7anet6TDBDJ6ZVojBegCw1XACqEKbqUyTs3kuA2FXijLiFCHa",
  "key20": "4zXtCJLF1mrrWymQcSPCDJNshrG51mKX2ToRa6dzF8Y1Mm5WuCLwJFzTXEawJHuiu5CnAnrbfa4WaHAoS1WdGGkr",
  "key21": "2BFBU7iayYnPoV8CsoV6CG3ejXJ2EhM52XzGYf63G6113dXRiMmnByjkF4sGoZEHm1dUaSn4dReKpDygg65h2BPe",
  "key22": "3m5UYoDq6ft1DThEccBDG3MbmjGFRQnMh4SS2TvY6EyRKxKbbGg8NXiBsTgtkWArAnGQ7Qnx23SPZvGmFTT5Mcap",
  "key23": "4XoUW4yqJ6v6CKikrgLAsWFhjWUQe8VdUVDf35u6jASuTWzAy45kJJLUVoUKpeRKoJuAQe6CF8xPjjG3atg6iFmE",
  "key24": "RnyoHktByG4Z4jY3KwwHZ8BhUyjBKvnf6JbsnCtYq3No8W4pKQi8pZv6x45ctryjkKpEy82Y6GEGvD6JRs3xAMt",
  "key25": "2N2VWH8C9n6AuRSW4TwD6AkDbex7rmvEC13UfsoMM1nrcFUZ4gAkYPRUakzuv9UtmLJTLAJuvYwHsM7GH4FunD4R",
  "key26": "3mdv8dPDVpcrnz8TonDxvzNJ5cKVx3aatAhPacb7FFvqN32pBdE87pXxLwV1UWUrcXFWbDWhLxeko7zCYSuHxX8f",
  "key27": "5difyZckF35AbiAZnJiTQopgDT4C6c7PTaV9S3wY6me3vr9D1ff1hdmkS7jyKx1uTBtRQaeNhBRxNwDemqJZKkLo",
  "key28": "3zC7AJN8UYN5SdHaqE333KWn4M6eUroYiP8eESJt6QQhQdbpyDYxTQSXa69RYyf3G2G7ebxtSgCM69EADMEX118z",
  "key29": "ZJdWDS8Wa7MtvEbFGn9UED8rDVHpPRTarqfaaKvbRcF1bg7pnJJtDotN3qv2Qm7EKmHdv776UB3AP6psK6f349J",
  "key30": "2pHrjj7DtcDySE4jctp71uQVYDJK5LraHVVLVqiGHhA4dw8VrM2SvdSfdbwwG8rLTKMzZHa2YXJFYSurFssgUJVc",
  "key31": "5erUDDEMAZUFzqN8Xo8pDiFZtk9kNNmosujBDVXbhfykigxxLPqAULjF4ZRzdi5BsB42HkanN7eTDFYXxRdGzkkW",
  "key32": "2j221Up5BuKpvHRkCAyJ8vhJSwnezoQPxsHrHhvQ91Fwv7aUiRa1cZUUN9gUoD1dargryoVfz8W2tLBvpmijdgRb",
  "key33": "kQkVMcvQz5FgcrFdT7xmB8cVFkdCVwhxpzjoRNeb6TrEg6416hBGHP7fgrj2HMM6V7bgbJVYh1dchjdZ2rfi8nr",
  "key34": "4hnhfSaX98iLPqUCDfdHFWrNzQ38v5kLHQJQLLkWuAYoQt2SWoXkHE187zNEiMQSzj48UZTbiceCw9jjs6Ensmt6",
  "key35": "5t4xYA5XSKRLhA8dayRVznW7h3ZQgGMAtwe23Q4Hsi73Ggbx6xotQW9KTDG7csTsW6uX2KfbunonhwawEt6bjoPf",
  "key36": "4F2HDPLMTm4rC8WMS7o9GhFreBgvF3PK53QjqJLbn2JEec9cUhWDGxXafm2MbvBruL3AxpQVPi4CEDWfNEm3qFnB"
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
