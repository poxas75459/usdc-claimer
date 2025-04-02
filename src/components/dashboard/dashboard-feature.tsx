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
    "5VjjwuUre2PH4e5szGX7LCqkQKG4rBuKKk7B4j95bu9EnzVHJnWDLtUVxkhzpnGoPkaDd4atqN28JPsdKzShjJXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g3Fj4hsZ4vodRuCrntMAeK2czcVGu3UqTW3igFDhtcoSkYUg6N5g4d8CGg7kyB9UkwdRZijwDMwAFbnGzaK9RiV",
  "key1": "hBVf5xDkkATzk8EMeZynfS57BpuRoe1Sg6oNRMFKFFWgdEmMpYtomKx84pGwQyMKb2a8fQgY93arr7jwiSApoNt",
  "key2": "3jcuHr6eMWzav8FAFHs5DE7JCCinsPkk9cSfRa5KEtqT3Q7kPGg9s1y4DnSR7yD1QMfErWtozwZZd7gPHpm5PKeG",
  "key3": "gin4B36uV2eR3iiQ85jJ1m2bvTXkry9gKtVsccogFbpach1MgoVKFZcesdcw2W9WxZyf2e6tv7N2jtnf7qniwuv",
  "key4": "62bzgPwife8Q1UvMtVrUNg559wJk2jsc5NtPu1cJrEjZxHh53xjm68UzUcG4BKoyRWMt1P6N6rgGZdwXzkHaT53h",
  "key5": "3ekMgQx6gN3pi7vTq2yfNWiprp2vRpv4EDYy3gr9YTT9swmynpTEujetNdxPbXFkmY2L9AVdshzg4bjkhk5sfDZs",
  "key6": "3x2oVCsDnV2LaKmRxbG8FrQ9BqMbaTF6VedGL8WSbRNgWPQVqDEAoTt8ZQhJ7M1zomW1sLHxBonzbJn8S9VBqXvF",
  "key7": "fZAjmTRnmWH5qf65nrwEG8QaqoAzSnuC4XqHuJEofaKz141Vispe14uVVKgYLXcP3L65UENckWvS8diY6HGQ6dF",
  "key8": "3qS9o5bBprcM7TRnRK6nim12pxRsTRPLMyx1xXM8ReffD2bR3WqjHEJzhvB5XkUWe8TSFLyqAzy2jKwiRJKU2iUs",
  "key9": "3weNQwZZTjuKZpK5XZhraZja76FygoQ53DdGoamJmyCjCo6f1PtkjYRgN2xsXoyZGDv832pVfn4jivzWW9csicGr",
  "key10": "4sD4nvRaEQqsU5QjnZJqh3yzCL1FcEJYQnzuFzWiRuMpzNdoFdvdvgr1DjjP1XPHuL3m5wSyWYSLyBw4Hxjp3S6A",
  "key11": "Eagyd9B8vfYTTNwMHWRB5BDFMQ8sHbD3CNALuPQZYPD1NQbXgXNBSuyrEavPykQ4dGQSKxkDQkHRNGEx6CoLdh8",
  "key12": "fsww2XjXvmbX1mpddA3yGw5QjecTfD3A5v6znZvgoqxjF2b4YyocFURBdBu9dfe5KS93vSK8JHeGnsRTzEtMBpV",
  "key13": "5hQ6J3mzAKWYBii4xFfB66VzPvhGBVUVxJLZff5UEwFeuu1m7b8yRQ6hmYahA6THwwSBTxxbpMQ7fFBcnJsfJQJ",
  "key14": "3KUu1S5AnJ9R181rndxfuGfWgRg7Sz2PSsxH1i5q1AFk2eDso4iJXuVu3yhyG42FEvtSiyWntUGdK7hMq4zWgGEG",
  "key15": "2pYQEJD65b89GrDorY8gMTHmBbiRJGb7K7M5oaYiou6nUxZaPe3hsPKXyH2UoSR437ofniiU1N9CbxSZKfheL9zG",
  "key16": "xSy35q7aWHpSw9y2h5H9th5khrQChynBvv4MmnsSSUWrbwCTNxtc4mxvsaBMLYVL2GTMwLWSkFRQGDsmeAiT4td",
  "key17": "5vEiSmbtXzw4aQt7rcnrx3AYauQwMuBmxyVqxTH61ci4NYYraBsffZZU2qDJ7DmM8oMSpFtG8DAprXkPqkn1kcBD",
  "key18": "4sSgqYHnSXT6Qm7naJDcWFcGgUjf8Uvg4ny4Ta19veXmr6GxkgQUX7NhgeQyuhaen5LBp7qgXspfgw5wcs5pYoXB",
  "key19": "2UvGzJ9PENRZvTevairhj7QDYPKSPxwqAM6oKF8wZCyfd6La15JgPmr4Ap4B88zfosYVzn18oD92m5dJCG4ERCbF",
  "key20": "eKA1haDHRCLx7rpaSatJZ6oRH9JMf3YFYvxiD9zrVfeGTW7u2D9Q12YPGoNWdBEmQcgmKr79P2rLUoERnhZfMjN",
  "key21": "4am3b52vBQBYZ1qTew4M6R8GYjQemJUGsgBxV5Femex7L3uiVihCVn3afzMxKKPLmQe9qjHxs99pZR3umzdJZNC4",
  "key22": "5DWav676ToT4WXn5oQ4nQ7wK8bveu5rsCGyatfsZPTZSM174Pemq2Ggr1UX9ZwZpFFzeMxkkv8b1c5XNPBHnwya8",
  "key23": "3ifvwskckCNCtkzyG5jfzHoEAnWmRsahZbVs5XP3DwRSr1TFHWe6WAL2DaCX9LyRhcA9hPdPYb6aauWp4u686fP9",
  "key24": "2Fm3g87KdJ9oii6NQd5nVeTcxZzXpirLBqthhNJp68sMKKdJ7ErYaELwy8CmHCPrNeTHTiKtE2eLHJMJMUw6WA2W",
  "key25": "4ewHU5Niby7AaLFDPrE7cWQ3k8fp239kzVifAk8g1EUNYQGCw4264aatTx3SkVMZA6xj3Q7kUuHwu46G9bsCQWiF",
  "key26": "cwRxD2HaeBLyQsXf6c9foPqjBoKAAop7ZrtSVt5qGLxXT1WiyPSq1MrrF4DL8TGLQVUxdg9sKbu5YoSbUkr7x3W",
  "key27": "5MWxknWc4agk5TPLAY8MmCCqgNbsBVu4363gUuYU93Xhht28ZMXqNNwdxuJ8mh93h2mBSg79kqWdDkzxTWZDk2PF",
  "key28": "5mAR2m1nU9yS6zjETQmvqoYubpxwKfrj1yBGmyJJLDhQ1JpuDr9iEUNwYoyXSZqXAhrcuxKSaoN46pcJ8SM2ZaCS",
  "key29": "3T66NofdGNyvjc7jHu9juyUNJj9pdakymSgbGZpUcM2aVd8LFKFKhBs4SKqSchbsCCQ6PgLvi4fqHhgc1ApuLE6h",
  "key30": "3w72Wwzo4A7RU8Wbz6DCuGczQejQRPF4S4Zwio5qYe7H842A11oFeXopduMZMvWSZpn41puKWbTDhzTtpGSykMsu",
  "key31": "3ejUmmnUUK5SDd9tJJzRrrsDwGwY3n4DkQYcsWCRo8HXmRFizVDAisgAeiY5aYaE3x8qjBVEjp43t6K3CsoT5cJp",
  "key32": "5ooakEcLwmw9zZZss72cQPBtKAVw1VCRRYWFzWZDzwdbEPqYhV74P5qVitPc2B1JWtanyQuf488bQFPQ3jX8U2sW",
  "key33": "3LfsCZhuVodK1Kc3Mxb2hWWLQMmZeg6uYmMM1MiZmBYaGJLp2ce58w4kLrKRGUufU3dAGF5L8qwcrLtXWfw3Hxs9",
  "key34": "5YjEeqbxtHdDpXSUqvjtdSTisoieyfbtHscWhtdj4LaZ5CceHWt6RnvxPfP29oxrtU2NEcZKqJQjfJF8KeSMCvrV",
  "key35": "F8iYywoW6zYqE7L1y31q7fAvhgTFoexbQ91UtYW69f9bntsgquwd2v44BEfkYz5tGqWN35T52n2fvbsBxgsfxFy",
  "key36": "4hjn89gkvSzfrsR9hZdrLQnoQ9N4Ju2Dpf8D4ssNwRjKc6PSPd8y6D9ApyJjzsLsRACuN19soEYNU8dcKLgu8KhK",
  "key37": "4oVHyjTS4zPmrXW8YXViTpoHDfK1eRhwueWonAYKetBa7e6TbG3HHxuTvxNgPDwBDJnneSzJRGhrXEyYSCGHkaNk",
  "key38": "2mNrppnL3CY4RktjbbTaArGHAWDbVa8rmgZVPhmxbuuGwQo8MsxSMEHLfq2st7iH2K6GppAr6T6speb54vJhWas8",
  "key39": "4bfH5yd9VGEKJEFQo5c7C9jnUUdeBjugJABFyDNGJrvvSSev6v3je62CXs1HF2RRUoB5zmQMmAwVHCHQTiU2QiLK",
  "key40": "3ULQgFLHNAtmd7awbe95jzdNZw46HAFtqFXPUPGRRjnNSEjb9YZNLPULhUsxvsoASxZtj5oL5RwRbx9igip39nwX",
  "key41": "4axA3xyRtL5KkcfBmGk4nMSNnbHbkK43VJ11kdK9P8AW9akg3TBLMqyRwYTh3uuzbKjGjpCUrYyMQQMvHft8rjCW",
  "key42": "2Th3wYmWe91iD9RuR4wnZPA774WGhUXRR7HoJTZBqw696EF4gECqT2CtxuTjWhePFwZAGaXtNZ1Vmy1fNQBqFsdf",
  "key43": "wLT3V23JNompQnhGVPFxCGLf9D2kgYT1gh5gn1H1CeWmjaaqthwM5vJkKTWaEXrPy88WRXk1JreEbrgprL9wUvC",
  "key44": "YUUoY12HqGxJzVLwGHCFNhbLAMnmLEZJ4WZXtGbT1CjcMwZF1AG8oY9NTypCwoZw7r5mhbHkPYyiRJyef1sMfEt"
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
