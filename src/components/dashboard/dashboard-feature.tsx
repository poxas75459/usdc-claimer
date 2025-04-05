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
    "123gqg32KLere93CeqEYuFQn5g12TebLmmR6aaJW3pZUMu8YmZSKmiXkqzpi8pRCZns9fr2trmUGALVSChTeMzWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33R93K4NuTXYm2JLLFsg5kg2aZMsrnw5fRPheDnqjmgn97hkNjRRiEJxoZkX39yRg5WMoueKCQUSrxfJ3xkJWvTm",
  "key1": "44yXC6eBziqJwFiAuCcBMuRfQgUJopTJe47jupzvUCpm8woBS12DGAykjDjscqjqMpkSvjm9PyhJi45JdTYZCM4z",
  "key2": "5gW3k2U6QxUKkp6ZnHLDDkFQEfAyjPUbXGQE3RxcUZw4jLBq8KQyLbiJUbT9ujqA3abDJ8a7UFquJfDSqtgWUrHf",
  "key3": "3b42bFg76zqicWiPYZUWYAvrN8Z5DjVrtdGfTackJgSfj2JkEdbQK7PH9Q4JMqPEGz2BFoqekJRYGh13bQagZ31U",
  "key4": "5Hpkob4u86QMbNCo5wNuN4cg6PnTUga37UuXU7ySNzYNsHGt6UuvKrWNeUsi5AXHTcx2wSAWFZBjwgVxBYKWaExN",
  "key5": "2CimtLd14BnEmztuKcLuVesHquGidZh97MsKhPqM7qBenidSXL9kCfDzgnsdz3x7HUrfvQzMjD953tWgRDmzUTdh",
  "key6": "47ueS31VhRWYESeUJEs2TN3bimvBBrWwNgnxhibeVfQBCqswSsHqUt2Aq22iQinMQuMnk5YyPpvChpT4BPuRGeP8",
  "key7": "36t8uqZC2CUWTAuHB78wXsQKrz3taEq1f4qE1NJxrBmPCJ7oXWuYAtys9PmYX9ubJAoex1uqkATqLo42BwtXXut2",
  "key8": "51cmUBJetuZfdLhir6oWTnpoDCYm5ZLoseiHUgTKJbneSjc8oEkRaKTavtbW9reKVLzzki9v46K7EWSj3QcU7C7M",
  "key9": "2CwNBzmMoTeoEqNR24vtB6mvPA1cT1vFUH37UajHc6DrvneT3RNBVLjWgSTJkSG7LRTwxafdVfm9pFzeWqHSJ2Kn",
  "key10": "53FNkosKpBU2LJC1mwxvcFUgKMZYkXZC824ykYEWDZKrDRU7GA6fv47vYsc6LCX5yGENNxwRfG7odT279BkDygwB",
  "key11": "2uRMqiDLuT6VdEUrZePLo2RfRHzyWrwZ1UuSabkqzjr7o3UfqY8amwWtDEArmDkRSPRGo6pkje2tomtwMmYtANLw",
  "key12": "V6qh2x4QGfigU4dHN3zWS9uzgG9yGQCLiGm37mGtL2Ae8sMe6f2LU4VKyxPzkiY35yd5hyHAWhUVMMpSS2RfNJL",
  "key13": "SXHps1T4A54WwTTuAHMU7JkUUUqb7XQZ4hvrRG97vkr2NJiM4gJwmvED5qjxwSE1YJbwWL5auS99UGnomQNAvDB",
  "key14": "4HxGxmtnjnmcEDy2fRDwVGTy3wmKq1eWZ3LN9YAj2zwrGCqHSqxDNUSkPHJ1Mt56xMcWo2JPtpYvQsnpxbDLkP65",
  "key15": "35NMURZ2vh8tfrZjnL6eqNa82hHBgSCQYKeqtJ9nn9jMhm4oGZ7XUKepkCuU6USMtdAQDVpvPAu71q1fUu1qRA3x",
  "key16": "6FTXkKPWKgmFzYkzKEmiPPvYNxfG7dTcN169QrrfzswtpqWrqxUbAAmRFhC8y8ANrY899PX3SgLXuWwKkqnJcQK",
  "key17": "3kdmHcJCa4Fn73y3dGTTaPZ63u2AcUgjqYt9hpxNVHefBroMzXXWKBm4XmCUadnpkdoonKd1r3B92xm3aktqStKC",
  "key18": "67ULtEsdwXYJvYixKfMChYq7jhxkztJWAA6ZvqBj6DKQBGtAkX6MwiGHX1n3arZpKDehvQjNqt8yVosohKWi5Mzc",
  "key19": "5outtKL2Dy9ptsDCGbKk4S2WSFzZSVvtZKSrtSv4ahwebgaZev6n4KhfSHfLvYkR7Am74mPkiiN6eSXrMyqhLs7d",
  "key20": "4MG7JL65vQUvWw4xjxwTheSE4tgUkX4TkKU8Q2mnzWNXNF8gCb5QWCREVyBtxjGfJKiMGjvvu8nC4WtVePwzHo2S",
  "key21": "5b9YW7Enq7hHfXBHXPvvtYebDHkxDEcU3xeeFQj2LnyoYi1gAzxALwSnn7NvZWB1CignrEUU7iyKVqhX3stpkzzU",
  "key22": "nebJ5wUjcvgVuPKMkGDW59xQJsTxRifSxjZ1e4y5cGQZYCjFurbrfW5HRXorvkU32b39SbpqoyjQ9tefnbwoXtp",
  "key23": "3oFZvLJ33vUM4TJP9Lsu2E6E1vtowshYtmdSP9iVjLTGDpK8MzERXCb7tNmhz4N75dprdb8oGki1hMpQuYEGwZ8",
  "key24": "36GpZkAeFmEyZ44CaJ1BXPWMdxN5qXbUY3kHZFafNxCAbVizGSCesSLQZEpP9X8GRqpb3PiZo6tTN8z1CDBZw9Mz",
  "key25": "5xbo79zdL7HYyZRjs9PQQvxFeozz3bZSLV5dXf9ib9ihH3fAaj9SahmBsAAUy25nvsUd48pQjfLLabsGLjqtfaYH",
  "key26": "57YWtf5oow2dBLLd76wVNhe8SE9Kdre2waddqXT7QuhpfV9M9bKWQUw5ttwZ7t1kr6KNNwmSXQSvt45fEWzS5Eja",
  "key27": "3h4nHrfZJD4DbrHREopSsU8wUKxJwRJHRxCx7spL1nqyrgwhvQBYUwdYKtHJmR3CUgs4cuYwBWZQXYMSndA3tPNv",
  "key28": "32ceH9jHdJ7Qhye29xp2p7657A7SE2n1URJB4adKiN63zSmS5j7u9X8VWR2bKtpQX7bxQt7TJUGcgSPABBztdvJH",
  "key29": "3N7s4Z84qzBAiez24KK8gCaeUvJ9nLqEXYQKLPmi1mWHEW7DStdLV1ApaQwvXQSTfGxBnczCpdyxuu3cjs6tYqAj",
  "key30": "5CM4PptcW9ujrmKAJHEJhEQfxdCft9Ho1xTknchf3hxGvo66FtonfyU8uRAr19jx4MhbSy5qYKzbKoAPanwBHno",
  "key31": "3GpAQp5NbQFwrDqjGQgPWN7hX2WCxmzdfmiNuMNiRwnjuVXRN7WWNTe7ABWsJTDE6W2nD5KfmGLrQt8hCEF6GsH4",
  "key32": "2JRQ3q7JuwWE3jS5W7yquPG77MDRFh7LCRcRjZMiLUngJWErLdQDo9ecZYMN7Xbn4Li83eviHAb44npfcfL8sn75",
  "key33": "3rkJdwa3ZNkzNrRczAivUAmFAkNeYqa4AmnCBj6E1XwyCCCYZgn2Gi2isMNETJsPpWEKh7zUT4bqdyJZo2B8aPzb",
  "key34": "4JQz2gsZrM22tjegjYTU64YMqke2a8J2N5cYcwM461UxzFQmEfuZLyCYWf5f6gtWvaMeSeRJ42bJnV3Wx9egUA4x",
  "key35": "35Xnf3mjUuiLHtM7NXPTvVz8CZ3kBwcvawKKk1bbvsdpsNML8gzbNCTX9qGUxfS6SBpMRihaCdY3z9RrzMU3mACG",
  "key36": "4UyVvoNCZQjmwn1Z6aWzA6UkNGF3KtKGU9KKagci17L59CUbaAJt1vCuk25Gs7wmzRZXjjMwb1Mn5GXriSimwgsi",
  "key37": "5zBeDDtER7ZRrk11n9n9qYds7vQozot87UqHj15jFkQACqWJpzBMMPdBuYPivDeHWP5Wc6zAJ9eQB37SGrCcP4Zj",
  "key38": "5avna1e6DvKRUXvFmY5NWVk5DAGvKctq5LtFAh7gJaYpWL8LnGpXTh1yF5gGN65qMtPnjwFB5YBfNan2Xohozqqo",
  "key39": "2hecTc1nueK5Nv3mudf5m6pticHokNCvK4AwWxYJSmJEz7BVDPzqHQY3y246QH3sxWWwH8oCE74L79xc31kVS798",
  "key40": "2EBaNHa5fPWDXudBjCCWskaA6PBfcns9UQ2pPWzoKJETp4jpnTNjEtydcZvxjjeTYLNJ5qfnUA7Ssp97y86Vv9Zi",
  "key41": "5qkctqwMhX4K55nuWBpS3YwV9Lg1ACpkzTicACNnu3UJxVvXWvCHHtGsaWoj94c2ZFXqwXQQsF9QwyLc3Hq9ssNU",
  "key42": "5YYXXwDa3EnMTFqXVwEBSfGhFH7yzPK8YjU8tRxWwPzEqueE9GQ1DYqzn75QmuGpyVoNjvLqiHPgHrT17CbqF8T3",
  "key43": "5bWj5juGCgp7SPtoiD5ZCJ1JNifA6d7PkVY8BXQMNt95mnVXpqsJiQSn4Kxq5eZwF4k4F9F4tvh2tMreEXXKj2Yx",
  "key44": "4yBeVWep2VE9bLRcypua6su1L595sjkPAuDQe9xxBR71TMKeaino998MZf8xt8Q4CVpmWktpW4R3tK9yQVHbgxbr",
  "key45": "3swhoWM1gvr1siUECukVZTFNHxGuXsSbqcM9jzPx2g9368fGf5GJvPFB6TEYcnMwQznVd4cWFNfwCE359MhHfkdZ",
  "key46": "4AHDtRPzq5wysxbGALGmfq4ftADEuYqqjNKs4HEcCM9aB5pfyVFr48BhcnC1gZqAqGNhvJmbxBcM9CimdkxLMFLr",
  "key47": "1whsHXy29De14gFEAa7DawRXqY5FD9XXpK9EhazKSSfGtkV73qVA2q6pp4wdHf2XK9xVcFZDvhxntEKnRY77je9",
  "key48": "2saTpeuCroC7NzRSxh2JsTriKgiaj4iu9GXQgrmJhf7TpneNjXpMo4BBUyZBEP9WdR53WJhSszHKwwUAbQ4yNmX7"
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
