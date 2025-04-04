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
    "3CC3EF71DgJtSxLWEiR3wgDdekVKxZEH7Kr3Qcnyonbm5vCY3wxEKRFpSwhCAbpypaMmwcSmhTZE6f6L57fCktWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBy9me1kvSWjveybEFhoPnouNZSdkoshZjbHuhn2saJ3428C7JQLG4b7rjGNXJjeCbXXV3fonv95u2kgCxiaaU1",
  "key1": "4ioPxcCspp4ghwesjHbRpJdkbW2CBNKLc5EhNdzpokkeirtepNCLgo9GAKffyQWYxBsEirsfusEzWpo8j2Zt5zmN",
  "key2": "61ZL9wsjVjeF16hdd778m1LFv7BeeUM6XCTtqQQ52qU8UaNtgMVS6k6wXZG4Q5BvmoExHXVVUxWmyXLmfUdndmDo",
  "key3": "4wRJuPx3wNtQg1T5BsWxxBE5SuWybVAL5oBE6ax3Cv9GtV6ZTjaKB37pkoMwjpZnQsASQ2sroXFsnPj2ox5m6aw",
  "key4": "KBuUBozTqZLswRgu9G9yfhAks32oB7kYmdFXfFGZ81JXMqTkaSdrN9Wzzs5RCh3dNnXPUwS6zQBwYnaAQ3KrVnn",
  "key5": "dsYmMWRGJDunVZGqZqJskjSrukT68hE3s6sE6FXxSqJwXDaq8AcbYK2LrcNXExegdPHnPu9hWeMV5cm5kUHsF35",
  "key6": "26NKZ9f9MRD9MGc5VBQTZFkRvTbymTE8ze6BaHapTJZEgd3mx58ueVSt5svhXYbbxkKarB56L6o42KJVTgCizhFG",
  "key7": "4jAsFbd1fxTXf97tCZAkoZjN9ZhoCn3RnYmcNmxBcUnbZUo95PbAHaUqcoxXGJ5LjTNT7qssmdjgbQP5WeJmGqby",
  "key8": "4rVUN6jfiWrMVhi74WWk3SYr7WgkYsUigCvCnk7U1G3gXNq3WjC74PzfspdknbvA7xHqySfKyTuLRJZS25Wgofm8",
  "key9": "4PGvE4roXkSRdyfXuDNL5Uaps6kNb6SCBJESBwMHMxu98wjq5qezXEMMo6VKz5SeNa9ABLb4uq1abxn7H9pJkYk8",
  "key10": "4ZXFBznD34ztdaj6Lh1tbJMV5US2YCpkoWkGvSDsJVVBE3GchmTzcpsbsezC4q5ydANU2U6KAwvGuijA7nBQCfWq",
  "key11": "6438ytVJ3A5aQDa2Qbxgs6ZZczNz9AqxNY47j7i6NPHpU1SkxeoDRuuVWNBAESGrFMeNzRmFPqXcLVK6P2E4opyS",
  "key12": "2bRrUwFndAVFf1U6ZBvx7F2cfyjkxJCWDuo7MqzYU3Myz4VK7V7NxsFBWtu5Miki9dQDXhsHk5BwDDLaoC9R6mcD",
  "key13": "2AcAei35g5FYDa93uhLvf82pzo4AAZDQJ3MwfVxu8ep7PkfjKjXTU68VuL5n65ppmvjKvxNrSQhumDaAHp9QtXvZ",
  "key14": "GpYXfyVqi81aiZWriitNUwWyq1SDCLhSQsURDLnR5tyiZ5F8T5y2yoJBkRsGnmgRgJB2KgewENQwWS4VwrebF3H",
  "key15": "4soS7ySEGZ8woMVSHjeTHbVgv5nYhdAE2SfjiZbitJDbYRzkY49vRHTeJiGHy3XJqXVw8CpzcSiv6kJy6DTzwTtf",
  "key16": "oUXt3u29pzKuPJvf7UUax9FSfYLRSwUD1AU2N6P4juYzdZ9AieCkr3KxBLqmTazt11Qf8QJfbbQYE5FYdmusf63",
  "key17": "4Jg2bUQ8KFfCa8Zi5eZMZd7j5TZV1rGn88fUiuYVQxoQ2t7D43RABwv15eAmuuCBTb679ffxtXEiGthfufyReTBn",
  "key18": "5L3YGdSEYMe4HQRib4WJGPFiVpUH7aaShkr6sB9qAWU7hQcHQYwZagKzjRetTZtyBA6pChJb7Au1sJm3p91smmt7",
  "key19": "58jWTUu99eRqBawEMKuEzCqxHV4zQb9FFn4qZ9TWuUZDP77gfiBDjvxCdx9axaNQMm1SeitGqt991x9zcYcqtHZh",
  "key20": "3hCh8isjTKjz8tRTmon8QTVm4unfT9QcPYTCm2NTgd6aD43gyyzLUvKocJ7Z9wYZvAMN2Zv8PycFkQzgpafdQNbD",
  "key21": "2D1AgLxMbfvBPBA3w5oUuRH7S3Frm44iGq41rox4qcEePSmYHHGmh5bg332mE4iuXK2sevy7CRd5sMH39E3eQL8T",
  "key22": "65uV8DAf4Dx9BntvV7gyyS6bB2euhQSyfEQUrg9bB1oiMC3W5s7PFicerYKdhkfzmbFUY43Di1D9cpFXqJwdSAEy",
  "key23": "33knwgV56PidYncUFdWQn9KhgRNax8SwofjSNfnsU2uK2gP6RnW9f1s9tg9Jucei1suVt51aDW2KtMGWCvABeZGd",
  "key24": "4Q8FBMTubJZSJx3fFfQtfkfmSjfx1KHVjvaNrNpW67iL8Cye4kdj7g6sZXpkwga7khiqfNvdDSsg6dWUHYYCz7mV",
  "key25": "2ubvvsLUH9V9xTYR7gX6eEJR2b7XMcxjEEouu83hVBjbi4iTic7rBVuWPStAaWzhnHE1v7UvHw5D3mxCvf9rQFz",
  "key26": "4aFZ137HQXWBcweTbVKBCV6qoywcwv4PdF2mBdesHn6XBU96usaxVyt2A7RATzdK1qqfPasRAA9ZAgXTFnpMpu7H",
  "key27": "2UdguG9J3RCNanBVAbsmCCeXERzzvMJWFhNbGgAgxWdSVRe2muLVQDQSRyH25HLfQrQiwJTSu8MfAxfqbJ6Wus6v",
  "key28": "3uqpwtDEWzUSpPiY5MQJaPDvmYYpzpNSNX4wZni1jtDHVnANbTCo5xyF2bt5VHhQnDF6wYwBDssfGkeAatU1VZU9",
  "key29": "3LiroZqGg572MiCZBjGpQtawMNPuzUAXwd7GfHgoB9yf6c5anbedqacfyrUvgPK4ujTtEezf8aAVvPRSGBPpgKb5",
  "key30": "2DNB2kbW4JpaGB6tLxFK839RgXgrZkdZUsrsG4aobPHfMrkw5HkefJPdn3VEG9DWrksnY3f5KcyWTLKwb33zQtZ8",
  "key31": "2oCHj7JsJ5EX6CXWNPNXYJssA3Cexhzq3NLa4pSS96nqtu5eF6MBj7pAGfadpXRe4HaGg2t2zYvTDiDnVXbdVevk",
  "key32": "5vnp8Lhp17isj88Ec3GnperZDV4Mo6fgHG4q1H7qGYfeGVxJsg9SAJJfM6rPktv5MPnxKhCcLVQd172xANTy1iPt",
  "key33": "5Wy863cYDrE158nS8ca1ZiCFbmNimXgDmdd6ysrCamoW4sd6xwg2LLPdzwt182j5qT5KkV6GHjUfmH7fk61ubmZY",
  "key34": "5ALgnqPtW49WqNpRyvbXakmDN3SubzdZpXH2sXaD5W4aqTRPdHJ9QhU649TvJVmzqacU75vHNg1SQrBZBgvzLJMj",
  "key35": "4CZq1xKnDCLcnHeUwoiZzxRnLMQ8sBQUzSQ3k3kJuAs1RP3VnvMMvLpSxWAXwbuFwtgZK6g61GtiFC3zLU9DfY49",
  "key36": "3gWXrkRxXecG1wiVmq3st1zgxZCqHF42sTpt4yawXWjmWj8S2MZ8oXbwRY46KKLc5Cn87yLAd3Yjdy7XFFT9W185",
  "key37": "2aJbjmsPz6XB2hYmtvGh3uZWzo4dAaFdKehoGV5V7MsWeB8HWfY7uTxMxzZcUMPuvzVx4gEYrnzFhcmgyFKW5mLq",
  "key38": "275ihtUxg83RSsjoJfj1Nock3qkrgKZ9otsY2NSs1WGizqd1tqwiX8iEjiaTNayCBE19k1krtaTxyvgAHxqJZ86M",
  "key39": "39kKh2Yjz9SMTKDPpYvzPASBsYCosV8JWDiXpBpEYdQ6vhiYEtUcWScvdLpaFd7e7Y6PeQKZ3A4FsZYdviT7b7qA",
  "key40": "53d6cBNM3Q5Mywhe3PZBFWfHAbqb3HvLgyZAgfsh7GD4iYry7hhZWCXcvw79JMY8GE8uEnBfHBVNckU2vEeHj1XP",
  "key41": "HCn2F8UbiCm9naMMr3rJQre1SQM9JyvRuBSCn6hV74v4Zo4Uo3CGnYPgkdSPwsdbFQr2qtcMxMjgiCNyEv4hFEW",
  "key42": "3naSYZWFAKxFmUCzDLUcj8jxMWYZHNiG29tECHkz3eswcJFZGDwLgRd4ZqeEf1qPSvxRXTvAC7d9exxjQcxxGGz8",
  "key43": "CFA6DdjaXKGzyYgmu9X6DpWKFd8ZZgL5RAWxh8qkcLk1d2kbyRbfoDoCoeLP1n2gyTwZigr7wKrNF1PK4cbimHk",
  "key44": "5XQnFExBgXF2RXqSKe9vkV6AbYM3a54Bno7v9T5rrLR3nKbPdHtRn6Y58NNmS4JjfCNrxiwNXrBz8AUDcSZKhGaP",
  "key45": "whiWZi88xb7YbuNV49dDGY8foRQTfR45Rx9Lcx1mXnNEMgPUBs3Dki5tSx3noze2F8mHLC8kR8iv78WwDdEUWtM",
  "key46": "4JhKUvQfrrpmZTTvUkJ4h5CVxBpdmzRc7pdrPnxTA5yGp5zPQDdPcLUUBv8Pqwev4JX8ZTEHMPHLRGtULPyiF69P"
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
