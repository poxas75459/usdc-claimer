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
    "5pQvFRfcmRAV59CzdTHWsBFK9JFVvA7mJ8qb8iVxTd3gDkma3TCWhCYTXpqpLVYB7eNb15VbM9HJQY8PQrHKCnBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hU9Nrj4qneumTpgPMgEC86tVdBPTRYtn3XnMr5bjfPdaLz2mRVJpKMMk1tb6MPq9RbLxMpnU8oX8iSFfDskvid",
  "key1": "5MR1eDg5f19gd7vMWaSeYt3QXKVCRGJfPcbE1mLHwbEJwCxFPfLTqq3Hv6vHeao8ZqeFccXADBamza3KBZEWJFuE",
  "key2": "4QM2sFf6puVTVdsHWyLa765DummMa7aku2QiEsqQc77VQuQRpoKMkeyscYcwMmXkwz21D5ErcYJxfhQLCqhhdSj6",
  "key3": "5PAoJsXvEvJSZXHWdcTqbosLY1JeyRikP45uzdqkML1PEhaGMQkeMpWm2fsPSwM4xyrUJDqLbKhgW6m22WuJu4Wg",
  "key4": "3GVXUBEY9Z5VZK1dh6GU35nMC89SsJrR6nXbfXzXyjJkAJ1bDfmpb3P2Bts3bmdhrniDNQGzkT76W8J8b6pKQHoV",
  "key5": "4hgLNuZSs65hy7VmaUAqHRdQa3qmkkojBneb1V3fRf8biSR5t1nq2NLquoafuSeR4VVv4mBFypd9E4uKG6LF2Bc8",
  "key6": "ZXmUQtEaoHPrqGbwhdwvUToL8L1CpDgxqcwDaR1e99cCVfC5AiHz2VKvPSgb3h2PktvFRVJ1AB78vagg6fyAZAm",
  "key7": "Y6MWPAtAyhHU8mjDbkt1wW6KKdJLa6SNDy7kkNPixMVqzjoMTAmm9k46ftzLxTSVhnVhasfZoPTRwTZ7UNPUzvh",
  "key8": "Ga31dCpUad6ZJ6tSoMrdypZo4vnEdaD1s99R1ktfkjLRAxeSdNqXLsrkFvc1Kme8ibTu6fJbZzjDisLpc2cKwEt",
  "key9": "5Yewp1graeYGBNSuQmdRwaGjyEcArQb2kSfQdbRvzxk7RzbcekfQYG6MzZRXVGaTWCw1XAZspoYYxo4g6YnYARj2",
  "key10": "3mXHTuxYngq9g2Db5NDvwSLMQCYq57dU1TttudfKhKw7iP1dnTsnT9gYRoBzFnW9hCc6on5tQb1wmwXrA8ZPQudS",
  "key11": "5aXkNmtAKL5jxJDxW4FrEw62KDeHJnWRvmm4df535amT6Yr3tgWxM3UV8uXMMcNS18zQHChho1FmkcNarXU8UGvJ",
  "key12": "4Y2KDspspfabJ89vtQd5pDkkzsjRRUerLvFyR3tNeyT9ToqfXY3UYmpH4oQWzJxPrKbrg4HhaCW4FTVFesd1Lbu8",
  "key13": "kn6VMLswpNk7z6RYXLv55Bb8whUm12wmCQ8wPEaBhEpDU6tXZ247fsPBNDk4cEdKWi1YoefeHtfw9C46eodkuRf",
  "key14": "2aqU2osiaqPJ7vpGVAdTRK8XCNzqYyr8Up1MdzopnQ8oWJiXJ9ayFhCKUHSe4dkWSVDh8wA7gt1CBq5cyM1K6oZ4",
  "key15": "62hSySB3BFnpsdJ2i75FDdgbGYEWMJxrLdDm24z44xXJjm9fiNSjBPcWGyK49m9QnFcSgeukrF98F5e3mtyAeP8V",
  "key16": "2vD2vctfRBAdCtTPTbMpRUrCY4ET2pQqPRszmwRTb1UfJw1ycdNrFnLuLWVaoj39qxRNGeXpAVHkS14MJocC1vYt",
  "key17": "4ER4EG9iu9Ae1EeHvw25SNjiCgLnKCuwJCHfWD2jiEXXs6DEMsA69czdY6AVd2Xau3pgtBgVa1BAtKvLNm4yxtxL",
  "key18": "27hExAZrRGPzDTP5bsUJYKDfeYDbgQRopNHdBUc45J7jyrtvSbaK4srUBqdcrhvCFYzzYjfwhwu8bpSKjMdwmG8F",
  "key19": "3tiiBvozyGtGzZrEHkyJgfRGnv6AofcUXwMCoPjhtyznn4HAKCDt7yuYUzg9bP8Q5QrzbRW5mZFUL4NwqBBimDGP",
  "key20": "2NgaJGaxeryhasvjepe8Spdid8PN6GQhFxr7ja75LNLuMKfw9FtjvcQmxouMwQ72y9wxpHw1bH2jvP5hdgk6RW74",
  "key21": "42Ut5voYZzgWeXsAXEKuSsW9fXnhKLZkvVqDgRXwmCqsXdGq7w1euRbBcV9rd8AWrptpNvkQZ1GSeiW1uSEuiwDn",
  "key22": "5R3xzULxHbYbajTsDbV62DFCZvTmxhAJf7kCi1osDCb7iQn2i3NVqNnVtnBtQhKpEM3qp6qvjgam6d7d4DmSc46h",
  "key23": "4YEqnciz34zdFYCaPYgCxQT4svFJhaLWRcr7s3QvkF1TxScXHLqsEN3P42htwJqKiUF5Qww7DbUjur4CCZEP7QNo",
  "key24": "2JBaK4n6nnXQWkuSHhEEscbk25w5HHHvi3YrmkqVacfnPjAHXKBDbJUhpxZgCmoq23YhHT8E4xenBCvjbRUuDhJY",
  "key25": "5piTm2k6zq6DWw1PZ8vtVnJhwrmzPJyXDWNtLmDGwpzmnciQTXeMdybjz33Y8y6yW9GANhPp1ie9ePcTdh6EsQKM",
  "key26": "5nsmis8VbmuCZoTS5xqBWqXVagysfwhT9P7Hzk9zjxZrorZWoKXt9aLD5GfpmturDEDFD4ePnBmx2N534quZn6GG",
  "key27": "2JTV8JDLDURW1h17aoQiR1TQDU1Rioa1R5syDqg546zMcLMnmtA5z5zyKtGtvGvz5FpWor53grvT4Jvy4493x9rv",
  "key28": "3xmFasQ2WZJ6tFydpGy1Eu91eG1GxH7MPkCJYTN6kobsZz5z6ebVqNnLoc1zDnvynLxtNxFDAZL4x9xgadQq2zzG",
  "key29": "2Z4GZ2PiNMyc4GtxcqdmxiVp9EC6AbMiYu3FhYutkhZdWJDBkPLoi6VLLKC2GCShaC8hDaCJfDedjk6D9NJtoHdn",
  "key30": "2RVGbu2w7iRjjjGpgCxPn9p6Wx8qXGTT5bKMu55HYat3fGA7ZMdQZKTv1Zhgfw35ddgs992wmgJLF4CppCcFfnV8",
  "key31": "2aMY8FoFTtdFRMmntPshbsWKbQe9ReWQ7MrsKsM4nJjnkLBwMbzG7bkBjb4K9X3tUnbzWK5W6Df3j1Z8C4opacJL",
  "key32": "4bTJJCnZRVrT33zYd7YsQkiNqoDRJQwPowakLxhYNJy7UGS92Mn6THcpVo8XxkYofkXzfYUpeCfbD4dobBYEqXG4",
  "key33": "Xxx9LozWkPgBALQveAXHANbXV2vteM4P5a2KRpaMdDoHDm2r9RK9cNpK3N6MD2WpEY27RiJ19KDCjxc7chTugJb",
  "key34": "22BqHvXCcSHpge893KdT7eWgsHxVojEb6tjfsSvmqW8yMnuvyS2z9yZ5eAbB8LXeGufA7JXtsravrB312W3iiEu9",
  "key35": "4iTzq1Htr3K3xvmRtsvJuPBC9Hjv3LwXrR89ixafG6USZjjkjDEn859i3skf1wfwQnG4JomU41kNp5kb7WBR1V33",
  "key36": "35rh8u2zcT2cv8MtiVqqHH2XyAAkg5Xu7PyZgpXmTa5uerwZxDSWxuBGa7EZ8Gs65LDKzNhm8D3jcRT5etAir44V",
  "key37": "2jYxLXnTdGXxABHpJQiAE8HxX685PaTfZ2vDwjzhj3PEamv2RaKfUs39bPG15rsyyXgb9MxHaiEsA9pztPCoHXU8",
  "key38": "3bzMzUa49k3vhpz7dZR1UtYM737HdKyFzf8eVTFT9ogHFAwgHnTjdVMp4WnAD8d1DZxkQZDiry5hnmTZREYSFF2B",
  "key39": "4WJTik399GfBFHvFEeX6sVqeViKPHpQt6BrH71TaS2VHTGPReRpn2T6pHbwNcVMFxnmoLJ9eLbmmqqVjNH4Xwvnd",
  "key40": "5ptynUWnRPyrF95jHXq8KZ6K3brG9zktjDDY5YN4VT2JWXUUufvCWQYdo2A35ybQBmuUdf7GaPYQ2MWRgKDyNfPa",
  "key41": "5pjbjhBuH8axxjhRxa6HEqCQeZicK6yDJWhX6t2vNVsunDqX9xY8kajicNRZBEmLydwA2LuzD8cXd5ieGQeJ2cxr"
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
