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
    "3gBNSPQrgDsrbLx76HiRVScJwtSys9yeBx1f7YA5wrnwCtM6cdAXtERpCJEQ1c3j17VpYLpGm4yjbPV39Ee5iG6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n4JAzR5yWmadJwx1RmBNU75PehBHqtgSPAkGWeWmVPCWQc1Keki3EEUwKSeR3wwyErn4AaygiHKmN4yVF4fKSqn",
  "key1": "2Q46WMBYTqd3UXQQTe9fA2cpeYVFdMig4u5eWjYwXSDBrCjNrvsAPRasRrJwg8C1h6kKexvRcH7piHZnG7tu3U7b",
  "key2": "L9qQ3bMisPPiF72JHke94dSQ4gQitLJHScfnd4cT5YRWSGYi6TnuBxaGZaiKFSB5c4ihKaZtjgZu3XNyqofZXEp",
  "key3": "5Aq9ZpzhFQGuFKszzQgDRVWKpQkJ6V948qj5Vm8UiamsXz2TyiGXLmqkCLLz78DVo59RBNDegQks7fUdNZLfESJd",
  "key4": "33BhgJRN6pw1rbDUCHQQMJHBSR4rLBDQgBQfa27fj2hoAydhWHWqdaYHzanxaFS1n1AyGEBNHNpvFYSJFC1Az3VM",
  "key5": "35L2bs6qJN73n1bPmWKodyQdUhikjJjX2KZJxi27P3yfARS6RPBNUVVtjRUDh8ZpWPaEscoJNvcqtYkZJJtv8iYh",
  "key6": "3m75ib1rGy4E9j8aCsU21LzhXwsWF7C9Av4XdSo6NV1LgHHUwPGXeATp5iQAgm6Do7HB2kS2SMCADXo5VZVq57vz",
  "key7": "rWtHnm8hg7KuRGXwByFCkxPJDgHPaACiM7QcNV2aYprJ8iaADwCy553GV6BCzt1fBpCQ8sZ9o4LaeXeCX7tYP7a",
  "key8": "3bLypzWFjt9qfBmmg4pDJCFqy7CftGrFko1gWgKdmHfpyCc5ewpgLS7iGbgaLh2Cnuib1ouXVtRXyU85QruKjhme",
  "key9": "2UBWLfAGWnB3Qr9uAzsTigHnoAMYStNCEdobdn6PyBGheTnDD8V9vjk8GcGJAKnBnAwMcA1uisD34n3ydtrSHXvy",
  "key10": "2fajQxYFP3AQq8C42z5B89AvsiyuHFLiYfc9rJsueATYGd2jLW8GGoiUuiEz9YYw1Xn7jeJiSmBCrARpseaj5kuf",
  "key11": "UkU7ZAQAbXRzEMrMaGxNE52PETNLFa7y2ykaih4UeituGbGMYjQsBcRxMrsUHf2Z5xDuX2MXTbDFmhXeHQAdC9U",
  "key12": "3JZvb7xkbYb9gBsd9tW9c4zAYyPnCemZzuZpB4Ev12YgjxsDa4fMZeELmUnAGputXE76rmTFnnqKJ6rGk9SmXb8t",
  "key13": "2qERyXYooDbjFM9kinVds2EqXRFrBQwYatBHwwb2V6CsAqtcXE1g4tYMFCGaukYxxv6kaVxjQEcPhjSELmoZW991",
  "key14": "5uaUsbPT6FD7ggpR9x38gK73hhFotcMyBqcN796xAkL3ZYSuZuQMjDE7ZmQkRAKEXMEEZ785EiTQFQX5hSqnVjBu",
  "key15": "5oJbW4VE2M4tbmyWRMWA9r3q5SL1jX8CJoTS3VBP9HqL5seYSsLa3dEtjw284FAAU1oWuAPi8u8qAFqQ6bhoHXGJ",
  "key16": "3HU5MsKqX5PecoqBz5M48mfBd7UFXi2iKDxSUkbdEWJ9cJXSnByUyTNmDCJ97QbhYhaCzMMeP1AmuM4Skkw3iunq",
  "key17": "3Y4mxhDRFbQUdmipgsoF2eTb9Vr9dPErJA8uU2WvvDyfQ8EcfLjp6t4HjzBm3EBwuXr4DQnCpzsLpEV6ryHt92kS",
  "key18": "tVAdJQZ4sjZEUpZf3e2hDRkqhRWKd5dsjurtas6psBTW3cbBN6shGn2sFVYsVQDJoiRbamj9qrSvjKphGenNgcY",
  "key19": "5UvkGFp5KtSV2nER56a436Myj1hnUFqQSRJaMpw9bViXBYN1QzzYsiTD22dQSN6Rn3EHu3q8Y5hEydx1X83g4o1j",
  "key20": "2uGbHGMWEnRHrBj3NPZSZ2RkbXX1ZXEhBn1zg9HyXCw4XNbh4F1s4jGCmpERPnvKsSn9LEFzQsSiH7GsGmU7CKUd",
  "key21": "4YQW7GSjsgYP54hpZhhtXz82T4nx36rz2iCFGsB7iLVXRTW2iPiAjK8LQs8EVZvZj2okd2pkzhbGbsG2mtXNWmNC",
  "key22": "59tQs8iJuzY8MnGURsbHrZ4Fk8adwa5Njjhpy1Dp6xZtr5jw1rjedq9jbUBvSusYUzMp6W7QnQqSru6cn9Sh7Jy3",
  "key23": "3t7PLAxgC3SniAUmpTEm5SrTb7gVebJdtE2JbRL5UmJZ8RjEjFGgahei2NLiAsD245HshLhDuNSvGDAKFbpwtW4W",
  "key24": "fdz7RXJzifk8FimkuseqtNywqeoNBizBu3a72XEYR6HUegnmL12zXvxWvSzeiEeFBfZER9NGgJ34fTMGNvrXKfg",
  "key25": "rr6EvNUYtqspoZXtUUzg31cv2vTD5megNhyX2Z5EQcgToYgWPRiirK5yEFp8Sgm2CUHDxUesF967HtR58Ez4CgM",
  "key26": "5WUaeR3Hqxb5ZfvBhVbXn2iFiMy6gRGBWxXczS4MKJ1fhLmVKSiacUSvnrZEB9P7n2LBDkst1eqUk8o9TAse76Py",
  "key27": "4U8AnBd1JA5nZUTER5ouJ5b1LXEzzSKZ3u4nbfhXs2Qyjqqu1ihpMzUoPGhHFCq1NMVne1u7ZHytg1U1FgqZZq9j",
  "key28": "JwFuBH8ahiaBFvAZSiAGdQ1f247NnJs6BUqKE5QDbPkStTuVi1aDntuYUhAZLGeXtLRiYq5kMvZ63NJxqxEByuC",
  "key29": "CCEhetFPxbyk49UWC7iWUitCrCCtSA4eoUHDSadJq4HLHbxBdGaCCjM6b8ELS9A3mFLw5NASgNgddVj1iQmHtXL",
  "key30": "5wd1UQQPEkJ7DUzNAVTApXUfyWnKeBKPzrWFyTGG4mFm545B9ANkUmWW7EhMZhup7KbUKVGP3nQGq7X8aaBChZFE",
  "key31": "ZcxMmP6u9NZJTHNVKDHPV6xZ2CNNk2oyvgJ6cr9KKLu9mVK6yM9oL9TemJodLCxn66gZUq6iegMPrh79gmZ7TCi",
  "key32": "5CPgKFYQzeBxCEti54ZPmZu1Y4sz8YFfSdkCpWQDaxy6jzpPzBX5CsBFX7is9u5MMbSVN2kHZySprC6yUvYCzXu3"
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
