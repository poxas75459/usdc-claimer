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
    "3LShVsJGFo6atuH1Udi35rAHFgsvZj6zWVCJiGVkLm31T8iWqJNNd9fTDpKMT34PnTxTDa2bqikK6FYYfSovvZFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Y1qoCuub3e5uukqfCU3jTGg6CBKS7FFE5vDRzcLcampWctU7Dw3uypQnYXru4XiabmRXAUZX7gCx4LseuSoWpt",
  "key1": "4b5D1qxeUY1w4a53ykaz1oBCB6e6QFiZYPNgLaiN1MLxSBkEdwNzyJMxuDqg1wWaAqYRzqoonME1UwjW1mYTZZnk",
  "key2": "43rtQXjPyoguStL7X622NNcyPGS4MwxS4vfaqovdLweqAJVSd54Zs2LnQY14gBx2XvfMDFXfCuzedc312XfTkk3M",
  "key3": "5Ua5wimiUgs3qVJSu77s6ahRmmWLhwGH9BzMgQXazynjk81X1oNdUeSJXF2tzWrZ2HcBV2KrMLEYjDrE5DcR5XjX",
  "key4": "TgzJP2v3GSMMKW6MkoBkHixkjC34i6xQin8kYAkRbvQA4qu4DBWqH18NjLBa8S6FBguW1kRECsQbzoBcYtdr2r1",
  "key5": "2c4TzP7xSEAa1hewVAd9b3eUFUH3WTpqMt4m6mWnankfWSR9Z5gqUurCzPKCuQ4tYDqxWYq2MjMzWzgJcTd3D1Bp",
  "key6": "2MDgaTdyZ2WBcQ3CeLmxhpEFoc3TYmoZCx3qBPmSrQMeVjusZHWaepyFHPAcLhDpikE2UcrjciEgfiHNKbK7Lbzs",
  "key7": "wJa7pikLtW1QZndsLn6V5DoTzjuvMaSVEy51K5PLbyawMf5yFWUKVin8cPnF1cMaSc9kupDHTyZH7UvTM4Z7kgA",
  "key8": "hHhzuc27my9vvKwRpEs3YaDT3vft5misJ6gdpDMT9AcDfjUA1RVpZYmMeguwhBTB7e8vRzsr8hD54FQsRx5MGPE",
  "key9": "e4VkD527rvRy4vSJJNdGkAKCfeyV4VD3agQaJd6E9UGa7XKzLwTMBSsErxQVUPU1v9Pf1cTPBioeB653JN2eBjW",
  "key10": "3cw1kGGm2qwWHSRFs9zeNBormNGCzb6GUx9uWhcRdSKBF1evnVELn5zjkco27WVyg4hf2MbGsCY4SZZAnHGBytp1",
  "key11": "nXm1YwSWe3nihyCVqt4jrhXVLzwnaKKRXxwf3KQxtj67xxa7Q9w4B3MvvogNuiA56oLTwL2MATYw99eb512SMjD",
  "key12": "3rtPmsnjpu75ocpNCUDda9h3dhpm4t9f33eH2YbfsS2jK5mYSC6XDCR1XfDVMYSeuwXb45jd8vKJh5ukrbzGYC9",
  "key13": "2ZzA2Ys2gF4qmXQ9EfC67z3fdbFHTNyYfv8KqUsRQCaGF8SKKEREoucEAN7U2dM69Y8hRDBbt4wWgHgewhYAS56W",
  "key14": "3awY76zQ1FdHiitbXhPyh2HnbnDRk7V6uLQhJtW5mqvjA2DrHuzfo8UA1VccTSuf5YJQqUGGYAD2oKTQx91PGgsA",
  "key15": "2uYbYb8yVjY4n2pZDBk6ocH1vP9KNhvJ9t5uRz4XjC151b3Mru92gCsywRA96eor1DTb5wUxK5QEK1NGdjfcNM3K",
  "key16": "4Ed31jiycSW2eF1VnEaxoB5KoWoEjSbaAZduFJhn8Vjx5XVi5SbXvNmMzQAp7R38Xzr41hgvhTRmSpTSDJ9sCYjc",
  "key17": "VwRcHQeJiCBeySb9V6kB8NRKk1GkSLqC5NkF2goKHfgcqe6JtMKstoBUhHKzZCKJa2fj8CppQ87Bsz4LjhGxzAQ",
  "key18": "EJ9RzCZbMFiadskyuaVNUr1oyxYDKvsnwGzqbAsCVhUf4nNzJWKMKsh4cmzkXWzp5yhxUKWJ8pNARshyYUuH7bP",
  "key19": "fpbdVHFjZ6x9sZ2AL4FGMcNWJCzPx9CWXfqAbTJ9vR8LWqqDtcxorNYoszbkAPSQv6hnLkkFc2fNbuu77VhAvzM",
  "key20": "43qVTTYn8QQBMz2juZeeNzQcRntC5J8EVNWtiE9bHu1M2h4F92kkSwMSJCjR2TY5VFVeiYvCWkhuW5R5xe7MaxMu",
  "key21": "3LhfGaiEi1itbL8CyUQJu3TC2E1M5KF8xgBFfhDf2yN5Qzb8j9iKNHNmTMDdHxiRTNE4Z9fQmHBeRcYbdY9cqe9C",
  "key22": "4Gxh5YMNnEiwWVcurHcB4qa2a19jBnLGETjGjeQnr8PLdQQJBUSdaWYHdpC8dUuMrEumD7qacLFwbLbHTeDqUvSU",
  "key23": "3PKpJHhLXc64TT8Us4JNpftkBNX93HWfU4SXJ9G9ds5mzG4oVN8E6HgfnfYmkmVLM21QrmYgk8tJgQcZE2DGFtu3",
  "key24": "3KuBvrpT8UipTD6GpwptskF2i7hZQ2hstEaQApXVSUAK9wYLJeDg6TjXRgG9tu5eD4RtgLSagFqrfarTtg9iWurd",
  "key25": "5CPpXpyJCCKZ1o5J8HpbPkW3zNAwZAcPwwEYxk5tNcphCKXM8xXFjF3bZvHccD4SyjAfX44RVHah8x6cfCp6XcKW",
  "key26": "2WXyRM33AcV99fdg6WMwieXLKnfDSfPff3ZCaA1LrRU7YaAzEpk66KveqayfKsGA8sbaSXLYVxZ7VDPUTvRvXVra",
  "key27": "3iBL6WTyDFkS3DKYuMntuxKF48mNpbCdcgKaCApvocTYYz9xtuw1tswiUaEuaCgQornUZqjsoqZQpQTZm8aspgMc",
  "key28": "3j7ZHHiUbT57oki8PBoGCtCvZnY8QD1Hhsy26TmoGYXngaKoPi6PyM33bXb1A3N6xWMuuT5a6bbYBqgVbLhL7VBA",
  "key29": "5uygJDfLF4pqestHbLWhBStNYoBUBjpaX4DAZq2uD2ALBheiAnjE2qvY2cMy5JJfX2PWQ6XboxTbbLfMubZcyWzk",
  "key30": "58PATiez8eDiGB5FeMq2qpA1ZRVQuHtrC3uyuTTC3UJKdQSWQLdwzkxFxA724RMBZW2iQ45AotQHK3AxNjSbuqed",
  "key31": "vfj2yRD7A8ttcs5y9CdNejdnHbQvutQbxBgH3EqJaGSr8K92ey7dtNX8updgB7KRK9gE4mVZEtn9zWkxJSRfKpX",
  "key32": "3St35vRDzVngGWCMRvqYDti5UE69V2qWmWecp4DMnGqNgJtVrKBMUJ32M47fN6XFwqzAy8XsT6ox6kzCRBHBfoJD",
  "key33": "3UyMNedNQkcyZcZ1skD4hJh6oPCTs7Sc7fGUrBfDWb2DLJijDFRN1B7y7NodobYHsLq8QSZJdyW4KxXyMEHZ3xBG",
  "key34": "5XnXFcxjSgHJxviMCjrvrUCnYhYp3jN6u5Qna7jqsxHN8UNYZ3apZWmofLRwJqNFRjkcuhawdHffEL6YXKQpN6rU",
  "key35": "52zAfKPcrgRGqntztxepD9LgxfZQX41a3KSGqBoyP3ARe7W8W8m3HNQHJTr7APE3sUskjeSFDEbhisFamx3MYyWw",
  "key36": "2qejSEwYC7t5gyV1zytCfPxV9N4DjAy6LnUaHkAeYEMNQ1AgCTvvpVUUFYm2ehsZGQRVZhVGPGvxbfnCd4jpcsxQ",
  "key37": "2dsHrD2Zf5ewFtXqw7TgRnz8seDQYawfSS6XgFQTVqZR6sUX4PdvgHg9T7qBhSSMDSpJLDFdtxUrhCpDcVN11NkM"
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
