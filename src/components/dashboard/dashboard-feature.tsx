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
    "jEYpwccfH4LVm9wNExB9mnamG4w3fz4KEtMXb9ER74ZnMMRLzkdQgPeBxhQS7QzAmQTuNDPAfYbBmuqmPrsrsG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PxKeR5YBcZ5tdSxuyxnK7xRPBd3nqCv9YfyjuTtk3q357JVx63sw4tBY7L7nuYFwUARvbppbLadNuMELZmEydSp",
  "key1": "2iF5X1yyomsd4EQP6QjrsEzTdLEUeVi47V9pKFzSsrmrDMCYi5VuhkF8dCchDyrsxrAxV8XtAPQnrkayQmzN4g3L",
  "key2": "2WErTD7DieLyXthXFoZ9ibiK6CGi21JZQfxjtPtfSN3h4QqSA7iXcTA7LzfJbe1AY3UuiTj3npr6SVzwopkt8Vb6",
  "key3": "4NdX915c7p89dtuewJE7ZWiKUNrhPTQvGFjPngwPGZQ4uYn7StUSFnRTbe1TG7QQPWu3nWoSjeTHaK7cSDoq1Esr",
  "key4": "58FAkqagZ8MLQbGStZn6PTZUbbV3cgc2JNnhN5TfATP6t8AnJQWT4r9hPrQHK5Ygmg3TXfyhp81dPT7RH81cpgiR",
  "key5": "mv3nFfL3XzagSPoNoKb2DSz7YtbNRxPwUr2PN82P2CKmddWo3UsfcPUkR8ucx8RBFBqSAonDr7Fi9xmo7EJwCDY",
  "key6": "2MxHf6gLks1wLuJLt8qw21a55Bd24FRfSEbgDhDRya1jQfE3xPE6GKWNt8Tf6QGJfFjNMhGHXnNenCVbuusNRmzb",
  "key7": "4rs93jysSDAsVbpxJ19YXyohmCLbzqweJXTQqQfMJYprDinfgbaF2ksSduaPAGCjn8NHs7H3r6gXaHRsNGNkkwoc",
  "key8": "4thi79jKM7WAX8fVg6SbsLjW6bAsK2NTUdi9CmF3pPJYycqj7NqYfwwvGxmzyKm3Ew64Fnic1k8MAFH7BqLzSL3x",
  "key9": "5Sbda83Cvw8BU4XKHYtHWeXZgJGdLE2N8PAL9HsUbDxGPJvfTSNEAZd1icaBgmLztXpVcxRdEfErcco6oEt6sFQi",
  "key10": "d1XAV7MrMY7eJiBikxDPk2fQCAkgzQk4sWLpw5QizD7vXENoTk334BtcPzCscq1ZqNnz6n34ZmGFCewDUiaajhh",
  "key11": "5yGqqjpLQNqJTf9c3971H1ZiiKC6RkHGC5Z7cHz1EyQY7uf9mUtkma5NC5RkuW44kx12mQzPu4RrWKgU11DquxnP",
  "key12": "3ABHDXQnEvftQ8pgYy8yJTDSgtVD3EdPPVCbL8v35upeHNhn6mrovu4cvF7Sube3WC3ey1rkxY11BgvBcjR9L2vc",
  "key13": "3wBsEEw8XtPYCjpZ62pqErp281AU1mMtpW5eTrMh8dzXJ8qf6ppcT3Es9bzihyGSjQgcncoAcre6T6SYjGNCQUsq",
  "key14": "5RA2k28aekFqWPFfXL4aukjia3sLfi9pZcL1obRPP2WGfpuRBkJe7yuze4ysyywD5kJRPXi2W1NoBBCBhNmZvTHi",
  "key15": "44qs6itFf1eEe4rJLkrXFjgFeqQG8YPA8UWaFLyBpnnp62UtLhkBCBQtCkp9UdGGbvLduaj3MBHUmziysx3mFtYq",
  "key16": "2qN6SEE66p5BG8cMjRfG4iP8a6cdnsUjD7eqK3LunmbX3USB9494m55CECYExWFeEUUXAsvWm6EyPu79mQ1W7gPP",
  "key17": "4mrVgAqT6ccQpct1WuLoJ4JYP76sw71bzCJuniBDzKK81jhJ1LNFjVpXyb5qMQb3bLuQPa2DSPTv1XYL6Zi7qAyt",
  "key18": "29sjmj4Ztw85kaGcpZ25zNBo9Q2Mb6JXmkFLZCB93Mhb7MtnH4zKWcUmkkURBkWxMYnMT9nARq16RN2BCF1w6Ud4",
  "key19": "2Dg394LKmMopSxGZG8vRCQ7yCDR5aPVBTYTpzaDAGdVMjRcYzt5GXjYEorTfYAQxB9ewLYShgyh1j55VMEB1biFz",
  "key20": "2b6pTzuhe9DpV1n65kR6X893VWsGVzQ6p3Thv6mwE6SampKdaLD5VngYv9MXSHorwbzCJUNKNp4QgDahoiSfwkvx",
  "key21": "yA2xYNf9ZoAqobXT1s3aocJvMico8WwuiThv8nCmqrkfijomVgT5gJE3vELD2Dm16S2LKDHUu4jD3a2XYuZGKLy",
  "key22": "3WCac4ZJvat5ueCi6UqQdSt2mqdzEkeyC5xzKqLVwGTpCTRCn7VMbNFErQogqq3K8gXngMk8qhweZ1JzzGctn38A",
  "key23": "3EdbcAyH9fdvGA7uNGue6WrtGuuaYEiH7PGGzHiRR3hUw37hRcVHyRoiRhcbupPcs4xXVPYtUJFFXTYu9Jh3KvcZ",
  "key24": "2XQFtD5koW8BXmdVnkwRBggfDZyqp9Zr9UFyr5rzbfeLZDJgnJ1jQyQuw9zeYZXGtkUUYuLh7AkznnQXHDFTCPBg",
  "key25": "23xrP3V3GiobanmTTHTTkkFRH6eCWZ2nFQgPqXsHd1Zet41p6ZR2Wt3tVeiyufwevxaBTC8djQutN9bJRsmdYdT2",
  "key26": "9nzZj3u6K4aYJg5yVB6XykrKvy8uJ5Hdvua1h5ZCbk3F3MQ1gdJ1aJpGBkfaKJ1URA257HCm75j6HXwk3x2i1cj",
  "key27": "5rjPyQy9szUgWNKnKy7nYyRoTisREBofqYgJ9WL2Kks3hDv7UyEXmbrJY2WgEiwktWri8hn8aHCAKCHNc4fVkodA",
  "key28": "4ex2HtKeRToYvz5M87M8GAcLnrXRCBhREqGf9As8ggmFnqvuqJBDHDUq7hbkX1DUPRja6bC9Y6vLL8Due6Je83Tr",
  "key29": "36XCiuGU2iH1pB4wbWxaKaNBv9AmmAqGWZTaQJp9JDVnfhyxdR8bfajFuPcvYPxQnvgYQL4yBDRt1LSc4JkkDAt6",
  "key30": "54rWiu4cWfyhxVaRLueYndaWH6JhwswjicaP4c2pqpnuJJU4bj6Xd9pjecKXhHj2YjovHtuogrpQc7MapdG7uZjV",
  "key31": "3FszCv5GaikUypEojTJ4nrgLpCLSehiQmAJH5inbCkn7aTNbei4eGYmEeLD4x8Ytudv1H4rrCjCZ2vGqsvgv66mL",
  "key32": "2A8judT86WdEBLMhqLCGHi2SLyg1DSsiExdoSvkLqk35ob1T8xK7NcyyqUjpFLEyqrfHF1kV8fJv9QZor4ZaQHGg",
  "key33": "TCYGseGY4qNPLZ21hB8Fk4fkop94uxdsyxxvfzq4VLrxhGLyi1zGtiFjcUMgZN8nQKrpBGUZADbFx1HCJ5GhFED",
  "key34": "2Z5ajz8GMzbwuzm3ZfG7JWcasUwVqCeCAtei6TyeLDzgPXv2uAG9AJqLStjWAi2yEJQ6cdyzmSUEpFCdgCkLGiXe",
  "key35": "56BCDB2JCwyGwY4wVvWjicaHcsYicho7ykJprAtiQAcUKoqZJdycW6213hgJ6vQjXGjyVtbKdqNdPXwHxkMsn9hK",
  "key36": "5je3qwhwowuysgC2aKVfJCgvvpEeh8QWXHkvYiirhK26Vj1exSYbjeSR34rtwLTjb77nPL9vVad2hYzYoP6a3eZT",
  "key37": "5vtL9FzbvN8Qz2udMAU15US1cczZ9y7gHo1TVrhdBuc4Kvwz4pjEkKnT8aCi8JofJw4jTbhQJLsf7SJeVsrM8npq",
  "key38": "vLRxQX5fh6hYaD2AY8Qc5YKDaHvkZJR3fGxJiVBBoQ1X7pLSh9qGGga5ACGQixCFoEYbtHgAxTJVXxMykSQuKqi",
  "key39": "5qXg6SQsRK5HPc2e5Bx72jw1cX5cjtJPNvmc6zN27gUzFuPnLCuHs1zmDshsCbLCkVL7QmkBjfypQmbncszGg2TE",
  "key40": "2EZuebQGhJVhRxxhD8VFwtnQizGuYHhTAFfN2mg2Lv4TLppuWKpCiGaHDwu8WLSc8mWRGZHz3PW3xkxSKU54LwLu",
  "key41": "43qE17yc2PFyXRhSPJ4X3x8puARxFy5G8C8w2PgBgHrZ4JZqXM3NMkDfqNLfPhMxihKQBgu8g2PoVuZSt6z5BMwf",
  "key42": "45RZ6E9rg8uFW1psZ8Pmw6JJsjK7u331phywEumZ9P285rCJ263hJJehS9RdJp5LQwoyXpx3h31Cj7SXsccPXPjJ",
  "key43": "4DNnkJkJEQ5JiTAKa7t5KSBnXPmyLrmjDeqL6hbWrScybmQw5w63XzCRYbGfrYrQP6cZkRYnAmd818yCSCXfADq1",
  "key44": "4LyXGduQywJaAUUUGaYoha4PswFftCwDdYM2TXWeiXS7XE8Hkt3TjSqvsLWDDfKybfE9WFpVjdf3WBCGzX3kPoRr"
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
