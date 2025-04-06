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
    "5Q5KWs1d4VsZz6ydfKhisVACTH5of5YDsfFYHqoCRHuwiseDbJNpeRHSnrDkY82eti3G1Bbi6uqC1b4HkjAbniyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AiyPofsQRrmxYExeEgYRV1XogjNBvqJsy7FbcLjq3ihKmtfTTatrs7CvG6njMZVe8Jy1tnq7994cLUNntk6pMnn",
  "key1": "3zMMNwvCWCdHMeVkXKQ9xtCybFcgkVFEo5xWaUQ9UyzC2FwiUkWfxZ2L1kdEWXMyJ3dF47PTdJ2jPdrRv8zEDBKg",
  "key2": "331FKHbN4PfBAoMTCstkHQvb3AtofUxseGwchvMGm6BnnCZ6zeywh7VfdDyADnbhXvZLjNs4ry693WBVQVFotkKG",
  "key3": "37pQuPHmRJBzc1QiNRmR2QbS5BBzk6ApyC43j8ermSxMeeKwUSuiyjsS7b9dNkE35Bt1jrsrV3Ewr72tTuVCzo1t",
  "key4": "4gygR4iFemUsYPyTLJX3Mp3NGZpvMJpaoT2H3Ya2bPtmrbqn11431XsaoRdhZHmaodxyRQAx5do8r7cFp6HqGksU",
  "key5": "46YhxRsAtFc2XmNyZqPkdktDM1ParLoey1xbpkmCzpndWpdS8EH7okF6m4cbqiEfsHKwg5Skk636ADTVwQU83AW5",
  "key6": "589TipMFqAdw5EeMziCtGZR5tq1ew1BQ9ZvLD1AdM4qZx8rSqQJsUVxWP81ptQg2yAZSdwhQQpU4pyRokUAQkhfx",
  "key7": "3QxHSXDKGW2GgHgPQpsEX7me8MJ1M3Mfh1fSpzo1cd4bEopjVpVa6T2FA5C99y8xK8irWDYG9hBaaebRjsqmkjBr",
  "key8": "4Vti15DdbFkfthgeQN1Hw6rYMGBpwKommNgADV5S6N4ZJ3D1bdEJYnHhsB9YXo1Xwtstm7szJWEE7vcgZ1qmK15V",
  "key9": "5k9H8XNQuHA9vDoo5etjT8X5sWGk6ZG6Xs4tRoubhQHXG9pYp4tpivJ1SuudpBgXLogaRJ1LhAcgMaapWe8gNSdZ",
  "key10": "23gHFU2UXa8bvTuyDjjyDqxrgFRAvqFvLStf8Fdc1ymsPXfK35ca2cPYaqPvKKVhNM4mKPheBLgvh8mu9QvGCJTk",
  "key11": "53yBEeuB8GTJ2CjY5tCvCWn5ZNCuDVr8GiPUwnJbW5EuNohEaaprSw729UavJFx5PbocgQT9N8LqgSjtoTTRmEjn",
  "key12": "5hT7UKYCcYbYjfqo8jJL8h3RkC7DEzdeujAv4SDzPEsU5pEZQ7WPyTiQChVBMxhJTABSHQArKbVEKbVQfdNn1xh5",
  "key13": "5VhXVzF6XuPJqny2nXU8zbueZS8XJPBE3ehF8yGr45huTpaUPfmB48bhwWUDgztw9hknF89aPKMhikxwLESJ47bp",
  "key14": "46hCi1MvVH6466fGBXPVDSYvRk8qPaS6XTZ8HVd5FsB3a4wRePafCn6jdfbvwmDvNhh61Te5VUw3aVyzE9G3pzcu",
  "key15": "2D4Es29WxTBCgaFAEXjWsdp5LXVjuMyYjEpmUZS7A5gp8X23tYtzUrD1pSjzgykhn4GPKHY4Ers461gPWzYeTT3D",
  "key16": "2mdNJJc5p6NVKJ8CbMJCqDXnsx8FWS8G6zXm7f7GUuDWb3a4AUGC1rpvfXyLXqaqcAYGxxyC17xVPTD5sek79TLs",
  "key17": "3n9SqHxf7MEVyPm8Kgf9BCV9mGk3dj6kfd61agDoHBWUxJXrKFNdgVzzgWbL6b5n2UjatZyvg4hfKbdMkQ9o4d2v",
  "key18": "2t41uPxfLozkMQk46FSH4qAfntai3AfKq9ZHrDuCfQMcSnecrKHhfvTZ6pJe3hnFWV37fxGUUhJJGQkBSc2WtVWU",
  "key19": "4trmDEx1ir2o6Qmz3a3yjGEAkdArXxnBMNf9UberF1u4Ka3nAUyb813Wk3TZ1Ge4QDyZXd3fFCJgfokAE27Aqg4h",
  "key20": "roLJfXwHDwzxE2BTMYS9x2i9xe2hysFLjYzfZGt2VbsnwUjEfZ72crSb6aWqi9UtnLzbVCpwCTeZKUTtWwM2FpJ",
  "key21": "foGshMCGVHn6k66XdHYKD8eBmpwdHqk5R52XRuC4w3YKbMWv2cN1V4CrYLZM8kDibYkeFd9kVunCG3K32T8b67h",
  "key22": "3Knb9Zrx2evmk4ZtsbkqQuSic3nBXdJCfrUVkuyyAkw452oP5RBDBPvy3wvdQzdKKu1CWUkT9phpGWtEyjMtVa6Z",
  "key23": "3XoJo9rQg4geoQ3Qq9bLC9B7wamerNf5NYvtPcKQJZKg4EGWXyKvYXKSXebTUFUdXHZhnqRn4jWbACuA7Pp1stj2",
  "key24": "3UJ4u3U7Fsq3agB7wBTwMPanYDQPzKBVNGfEqyUSYhEB6Gp5JmRorvpogdATnJWbzvxMzgMvhK3xRjHGEJKx4tZs",
  "key25": "3cTxZpWKbF6MfQNbwaEvM7rtvbfB97tc3Jao8Ds1Pj9hgoFQj2D99KK8P4sytRqVZLff6y9mjmsxHgpvfT51T4x6",
  "key26": "3nophZvGJgxcEsHGdvVVguerV1mtxwwKT1z84PtHzeEtvNJkkSjHFdoHqHfdJmtvJGScjoWUS66b3Km8WgZiSVnT",
  "key27": "4sVTAhY4nRfy6JkocCj31PgUJEmWCvQkgAFJUH6KiFFoFsSbKnVhDzogsHrr9ZyZB58pbGP9MensYhU8XGUJDupw",
  "key28": "3SjFZSuKcjKQTDVpRMHJusoLuqvnru3ZYf7GWXEyQ6KptN6AauQgYb5rM2uzZ36qzQXWjeDt895cQHUPN7sFD5a5",
  "key29": "2jMb5HsAZAVNU6gjtcQnDSs2Yd4EqFsnKVxmp9n75rxY3xHsne4m3EvrXieV3TJCc6Qdp9LPZ7Qyih2ZvjLnv5zt",
  "key30": "4kHoLcjY6vT2UAP7Y4MGdiUyZDcrmuuqeaevhDvbkgLKEH7dNAeJXqyNLnu9XgTWhvKCdsj9jWoTjJdaN5zBBYkc",
  "key31": "3wqWfYi6c7iLH6GMZAGFnyBarchKqWVVkLVhL85yKBosWabd5okn1HBm6mGKiH7vX1Yj143tXMekkednvwq9qyUA",
  "key32": "2UugnSbewszB8vYrdd2ZqPugJ9z8Y1nu42kjBen2N61GrYFdAd2YgHkjBmECrhsvRf9vxN7U8ai9mRJ8irDSvFFa",
  "key33": "4g1upKggAAdV64tcvLxvTmKRYkhAoA44x5c2rYamSYcV5hUkoYaVnhnsk3SZZt51QFNwKsoXfBb4jp8cxVQj95Gy",
  "key34": "3Q3FMGDFxZx7PNi8MuKWpRzw3aaGn8W6cYWwtSLXfbb6zyck9mFYHg8CAh4Efo7XKMSJL2T45rBftxYUycYXbrrV",
  "key35": "587yZzPopNN24P4fjEsxMp6qzKk25Q7EhMu17X9Qc7waLkVUBX2UZNzi746jqHjrvB4C6vZeeSkQuCB5vSbcfLSt",
  "key36": "4f5x52b3QRyFmgqr7SRo2buTwyriQ64ga8bphsQL3YpaNzFmAZK5sA4qrzWhL5frN4WjHaqwUZF3s7G3jMdLJ5hz",
  "key37": "3c8xKbbHujzcf3fwE8f5p1mE3EsLT3wVdZDwonmrpMZe13TL68PytUDdUQdsywcxidDGQKdNvffyVAn2Vu8YTLR1",
  "key38": "4GeGqcykzkKBR5mJL7VGbgpfWRDGGuZ8uzK7Y8Vju43dLNxvqqY6iFvfHm1UY2RKvewS9L1RvLncbG9cYL3hCWuM",
  "key39": "2R7NqpExrNYxT2r8wSghMT5xbfvD4cDj6JFYYuj7nqthr9jKXAMEbg1DexLTJWVJrPwMQ1FhpFVVQdLwohtXsETf",
  "key40": "47erpS7zDUN1X3uMBrLAHMHrqTS4wjk9UTbLhXn6s46HVE1ZMGJ3vX7yGeadYX1f3kbvEDHTbrP7SK5ojNQnCkAh",
  "key41": "4dagSQ8U1mwJYE6aRkLfmemr8EhNvsxUTp36NZhg1r9c4vqghCGpAx4uiUnY8T6Ro87JNB1YBrb4DBeyZmtxHaTb",
  "key42": "NQBna9m3oowTzz8VSCaZxSoG8cFytCHzqK7Dg2oJoRrhmbG441qJhecWB5EhbMtdyEEvLQB4ERbVeefLDeS9LoS",
  "key43": "2ozBN5nHChoS8GBqsgeVW9UufdxvNG1muWNndpVN2Pyo3jejZu3SVAmAhMqabTQmPq5fe19NGcZutQLU1j3odvsf",
  "key44": "4GsV9JcyVGAyJVpbz7d35wVnhfqGchAjPpixp3G4CbMRtvoaZi8eXuKL6YgPvc8YunrzFH5bPkiS1iGc1WofMBKD"
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
