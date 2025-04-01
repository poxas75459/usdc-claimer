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
    "21KsmBChpBC1tPU8okDh9qQ4FUm3tfCaMntVs8Ap9t9La3ifR1UX4voJFZz2dXB7A8F26ip5xCGBLWLXdu8c2RVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o1pWfa579mj5U3i8g2i1XZ5Ke45GXfHu87wwGj9NY84uVQYCAwWkPxgDAcbvpw3uFDvGUnkQVeGMorUcc43bcc4",
  "key1": "3p4PHAybRughkt93M3cbKkP9oTHj8byzcBfaDvTmxZ8HJVmCWm2hb6bE7AaNbPoE4iCs6a3A93HQvuecdKc2iSf9",
  "key2": "5bJru9c5HtPmAHkRYVPJZKTSDZC3uvPX52uzJ8SoDcqDtx1j5D7HLPLVEGfY3ctCARQkdptHSF8vexFSgQaKoCiJ",
  "key3": "3kHHozj8f2AQUdkZDGtLxBoWsy4QqJqFg3uHcatMRzy8nrmu7N2Fxve1rskSp6rDrMnbigc6CR14rEY6f6XSePmt",
  "key4": "5XUQA3gW4TwMKM8UycitMqktteUSnSCU5UyCfwgxgTSMFCPpD5iyLJry5JoBWEWcXntLRvV6mFQjuVm1nNKvc42Z",
  "key5": "2NeyXQFBTqJZBxsCmqqbUC8L1zkZ2LyLXoxYGQNmGjs39EsPe4Ccio5w4KQpV6LByM4Uo7pXsCYiEEVqVaGthYq8",
  "key6": "F5aGPHfSznmhaT5djZw1Vf8TX3vLnAa3QHewt1kfgRCqBbccpM2yErEGeFWiFXGs4mv8b2rv39yoxbFc6pY8Niv",
  "key7": "5UTvxwncLgrna8UPPw8zcffERhM87UFSRVGSacjbX3Ua4vcq4Ltne4tuhZhqmkqAGU842jRoeD4MhzHZkb5aYTsy",
  "key8": "2RzsKo5JAzDgRAdNhgnpmsXDHnQ1tXSm19v1TAxgQSwzd9Q6c5sN3ApwiKGfNHBZtpKUg3EYP4Ymyq3pX9m6Zm2T",
  "key9": "2TxykfHbJzLDzdDgb4voxBZx7dazMXp2BvjYuytFQfDut1gs8xCqQrTFfaTBriL7NA5xtj8NUU1wb6qRWkN9mazX",
  "key10": "2z2L8yeRCowWnfJGWL7fWvdSxhyMVEoJXYEbhZpzWU1Wbr3HsjVLVFFBMnC9DqKPPtLjthvzg718MDV1QnNK9pPb",
  "key11": "267khRrbp3bCLUHYy29LYB1QnwsBATj8JEgrA6jgigQCSbZVbD5cAiGZvfuYGwCyDZiMyRQQDHuFGjpifs9597tw",
  "key12": "2QPxeNKsaRf6JvwkaoQdhQmKiTuJTvzj2cAQwjPcdsiTj1mrafLS87sjjcocMYcJy39z6v6dStUuyiCUXjALYEDV",
  "key13": "36Um4HVzYYVt27PPxgPNJCxspJfbFLicztua3FXVbzea2hu21dvsMwnZstoRssWCApSDddguenAVEqDzpCJPKagv",
  "key14": "8mSCwTngoP22AFXH22NBQ8BQ1jCY2Xa44yenJZyVvxyavMbaqsrVxYKqMnLMzDrk5VXQfc8rBNrCA44pV75zQuq",
  "key15": "43X24oEvpxx8YMzAD22Wd6MytudaA5dCJA63WmWoP6fxxd9GkL7jJQ2XCzkYuSCEUMNFJEix8zeufzo7b5t25e8p",
  "key16": "3Gvu4uLapVUyxEjmpxqA2B7wh6c8BCCmDbrh6t46SwYVzhkUkBBcgmF3vMVANmNKeZVW3AuhikJH5QjqHHyNj8uY",
  "key17": "2Mfuq4KdBq7ZK5VJU9nkQ2R73k56ttUFqAxt5orCHceaJvktxUiYYHdyiGKo9xMxbHYMPQkeJMJtEV9SZdKEMgWn",
  "key18": "55jn2HxfLwDgn9xYPZfwKx2oj69PUzx8sw5A1XMLGpo9VrMotjHQtU5aBx3w8mv9vXrvcC2DhMEYT66DGQsVgT1j",
  "key19": "4g4kVuDSa8Q4sJEyYjd2mdHYdttjky1tSgBmAY3Wwk5oAv1LjQboJerxNpkzvWrUHtsHvybKxExQKRs9rWDmGSwv",
  "key20": "iJiasS5ADsNNHjMkQx8Z4KG8sTRRmrwcCmZFD6Q8L4QMqRKHCQAPhM7XBRzQFFLTDL2dHGkyFvXTwNfUSZuG1dV",
  "key21": "4Q3y5YHQRjf5EhM67X8tcvyoawbwYzTWQVfxBxrZkYdVogYqsYhhwG79s5ECf9P7eqxGEnAM6ct9qXniXr25pJyZ",
  "key22": "5YGeJtp9g7w7kW2XKkxivvvrfr6vpVfgUePyt12cqXo9M8jYMZBPH1C4R2dKhAijdXQ5uBVbgDtKVDfE9Uycutck",
  "key23": "4Ur8272V8auexr4fPfEv36kYWfDMhkaZqkWrBZHBXfas9Ms1XZfL3ihyVQ2Q6aAPqJG2ZY49wKGChfj2WMDGR5p1",
  "key24": "58grWqFZhn9VainqUjLfX2FpyJYY1WPHGHtYVZ561AK3vy4MTirkcaqkgydLz4B79TEz6cykPRVyXoGcjSpXnCaR",
  "key25": "2HnptS1jvCLykaoxJCXTSbW7yJcPz7CCeBQUWQReQJbybYgSuxKKdiBqjJaRSyJSKF2B8A7VpfLYBQdzKxxRBjaz",
  "key26": "4KT2Y8gpo2HW9ugw3WF8Kgv3KZLLQudd72cn7CggM4F7FEB5JMWEPF34E3JA6i2k9vuBJ3u8PJ11qH26vsXMc6Wc",
  "key27": "3uDcXNVkSNEWB67v76WYPtgWo3KtacUoVj2GfYSn43TcmqJdCVx3WrLcbDL6GnGQHJgfLnYdcYUuTjk7XrqzZsJD",
  "key28": "4qLZTXknRQ4RFHjRvsKdcb1WMHN1JPhEztXMgkdHDw7EJUTLhV39CX6CYU4phgttCT2ZUNSecXD16ZWF5RvbR82Y",
  "key29": "5VQE2DSXhqynEfi1thYUw6wV3tnM4Ls8sHWLBaR97bkybsyXgMoYu2ecjBaHNnsew8xS78y99BazKRjdjT7EvzKr",
  "key30": "5RefAEJj6szoSQZk6ipRcnWBskL5cZGDZEwJeZN72JH3JRWAdYqtJwaHz4Du94DeEhWgf9bBkz5UhAx4rKPtDjkc",
  "key31": "BiFnFHnffcPsPjbQDZM3kTJef7m2j78fdapXevyrTtzp8sEYdJL2Y8AkwMKdWGMoaV2cDhytUM7J8dtHMko3Do2",
  "key32": "RN6oN4Q84zwX3mB52wgSMduyVmRNH6q3oqe3iwykwGrZvLBWDdD2D864GRRtFv7fRHg1HCmRUS4REZ4KzKUQU6u",
  "key33": "4DC6KbuMX4tSPVm4jF2xhr4YbHyWoY5AZVAp57gs9vgJpgodh3pg13Ycs7RdYP9tB1bbmLKjao1A4Rd2B7T3CXg",
  "key34": "47R2Aa9Kehr2swKcjWNpUzvWHUwJEBDJEwG4JhpgdyZQ2NuQfquwdbURa4ok6X8KspQwX46g61L9v3nu1stPmRV5",
  "key35": "4gdLxwGzRrJXxQvintytKZRw22SJnnQ3jPmUyLsYxtR7pxAkW99YV54PUVeTGGTMi6r6FHBLPEYTnh8CeHmdrwvf",
  "key36": "61dRYntgv5UeEfRa5KdnBfhtcvdh45VuR2gmKHHbR7oKvfnpegkdgQmPkEBWKam4xnrDBM8Nc7geXuMfUdjgJH6Q",
  "key37": "sThApGnowwCXqtW2ayWzgkVf4EmHcwWYmzGQnSew2DxjaEj9NEZg6TkyJUaJnAhnRQgqXA99vnE6Tkf65CHUqx2",
  "key38": "2cb2jQVHtcRxjq73Z1Zo8VEUnfwXCEzrYicypp91cMfCTACnZQJqXs3vGjRPcPz4ZyFk34WFeCxDNhY2RSYX8DDX",
  "key39": "3gcWqVETDNMdKVrw9EfsmqUxk3RqU4N9CAwGaanfppRnrn32CZ82Lg7tzA7M9AQxAwuMxCAJBzHr28fKtECMY9XU",
  "key40": "3cMCjwPkD3KEvD1JoG3vzMSQUaLM1aqCgy5sKa8QnSJLyw9WthAwBo5GD34rewnjok5Ygn1Tuc35SiQmuZ1Ci1bw",
  "key41": "274xBgHuqU8NWyuggrCjx6RirN6VAA1MWQ6PYMEVG8iQc5mAjjeUmAw2ogSph9CLVGdXLaGR3V9VuwTdxHwNNWDF",
  "key42": "22VjgJGw9cD1JeU7Ra8BNALsvHTeRKt4fqFPas3eFD5MenJaFmcRFLgqLKaL6x2TnfnLwApi6uAGu2YjFykeCqX5"
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
