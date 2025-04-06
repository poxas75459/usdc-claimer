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
    "2dW6KFhybSqHzDZAvAi9JiehvhL7Yd1CfuFxHEYAo5Hgu4fuvtaAbgFFFQXxJvQxyz8CQ5AwNZRQT41aiWUcQt4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sq5XxtKNd256hXzrAaj4HfKJURfxyC4WCz4kXhFqFAyJSkks6SP6vZeUaqP8wety8eQZTA2yMhSAAXYgshrJ44o",
  "key1": "2Ecb5P5uoANGVnKNutrakpfvWyVKzobPDLtJi3FiWGrVCWSUhR38q17Hw7ugZPZrauLZoAWNAfvQ4HgcVkjq56Vn",
  "key2": "2r5T6yAfv3moy9Vu3FMErtC8eBcRpbABAYbvxcgdjhyD5gvmoK2x3gMhEJfTgrtmey6XkHgj8H7n2Hbar5jCGL4W",
  "key3": "Yc4V9pYPQE1YhBQ1yaxENJCBt7WWqW6eJtwHHPNnVcw3an34ZW1JBeeWFrpHRL6Wn8TCjTraQ59w27caJ7H4Wfg",
  "key4": "3obw9zbHJPcQFyPCtjSsxgojkvCMv2awdUw6j7hQs1tAAtqB7YgFA4J2mse67EejGRiRDPwWJpSYW3LZoWaQmcdC",
  "key5": "4fQMHFjStv4hnoxu4NMtyRSfUUap6A2kCMZquHDo61R6gKJGm3RBF8uhSaV2Ss8nUMSh6yQzdaQ53bK694d8AzhU",
  "key6": "5tmtb8TX7cem2M82FqaqpPygWAeycthZAfXmfmuQA2qTryG8MWntfaXiB6Q5LXM4hgfRfViLoS1xaZUqtviZVv3B",
  "key7": "4yc28NoZ9QKMwo9xyF5wRJGKNX3t9QDbpKHz9zdcY1FRhLJmm1QuMgT6hMDtSL2vrXAyFh7a2YCMaVSKctErLjdc",
  "key8": "NabteBNRWKagLvt2NFkE5RDNgo88PKvZSUg43qfSgoKLRURXgX84Jsnxe9MaicDdAeeiDdbmP9K5Tpz62nQPvoR",
  "key9": "5NDYHdAvB7dTe2irHdyH48ZLu2kqKgLHkU4hM2JomfHTWKoKHdKE3e7yZFT4ALSGP4qqLPZUYwwTQ1S9XZgmj6Q3",
  "key10": "2tuCgmH7cGAfqrKY1vpAzDVzb8UtGrw4b443aCf1mfpSXUBdo8UCN5iWLrXNDLn7LMVo6jrXz4eoP7LeEwfGXBSL",
  "key11": "KyDJFvL6Y8fwFJo4dndWtagxfEWpfTVpdXmLhBvtebksyzqW6gZ3ppa4pGZRdRyRLmDN4YLJ77hpWVKQognPpD1",
  "key12": "kzKD7R7dS5BFHoiJJTVBrpDVmsn3UqYtfMHpeZa91YuYR1AaEYNBCvWtL3fcNh2pboLepWUihAAMeZRTn4WNFS8",
  "key13": "3SdWbGzPisJQkJyxGdaW372yRxYwQzbcKrVV66kYjiaPjha4bWq2h8HotyfqoCGM66xqygFeYJfWBPYc4GFkuPmE",
  "key14": "3aDV4d4CdXXLodBDFUXE4y3bUQ9dUzX6a7hYHErMog9tszS66pWKwyZ4S9P5KKSsPKnC1QQ1i6rZzYkjmNXLHLg3",
  "key15": "wgF8RuC2Mq5i1971cVgcKGLkdpyctSKbtznkTrwdszrFu5oGcUK3yr2JBrBYHpvV1Ne3xgiFzunm5SrAyzcqYEw",
  "key16": "3pkAH9vEK7Fz4Y4y3azatJngZeQfUBh7QjWpx9uRTsJ1tXFvmRWH3brBLkkjwiDetcycy9qDt1T2VGDryigVKCoo",
  "key17": "8BZuPynnr297nt7sgPAcqLSDTxcR3WKPMmu2pcntoUpVWqzzaKgdn5xutUETxpBQtGKDDZ34fYp6HAwvdxqMdeP",
  "key18": "3KzBGg1yRXh4aF1hzdLja6xaRRaNEsGDzzuZP5quqLUwRJW6ZJWAYJYwVezBGXFcWWFcSex8AE1taCbxi2gAsQwM",
  "key19": "84dfuwqkzgdGSJb2o2FnDMsTTea2XbuBkfCZDressLyHsocP3yVGnMHBPBhEQTdnZYksTiYaHTVgFUYt4nuiPwS",
  "key20": "3xcs7vTS74J7KnRfFSCwKGvKqfMupEc3xaw1KE23ojhwAFWKbgpxZExm6vLayV8871wBmBTwhWn6QcVVJTCb9qnF",
  "key21": "SgYeM5oBKASQd1W1GnzAhhFTK4ZgS6bae4zerWkxZKJpbngnyWsGgwg2FR5xN2ndtaLzV3uo4z2bHodG3m6ugwm",
  "key22": "3xkHw5xxyv2PNNjSG3QWozNeKZ4ojLqBzTcJhHfF338DXUgnuz7xLkbJaXzbhUXt2Dbpqe8r86WaqQYRx41U8C33",
  "key23": "46i5dbqDQrDeEvgYgQsftjvp3xKyTxgpPnknsvc81VM5C11tMnUYjv8hMuXEinFyurQz7TyXjgCwMwx9zx1uQ2R",
  "key24": "44TzLdfZdXrrU9QbPj7GDqRzyFGEC52QHH54b6X7pyLv9BMG6Gnt8Fwt9TrXY179JZigRpjfCH5yqNLQbiHSsE7S",
  "key25": "4L26ffSx5GTLHcKUoKRk2SgHP7sbq4RSy644uquwvg6GKuvmegz2PNxCZ9WKyuxQnxi9a5goCy2shZGbuFGHfnnS",
  "key26": "3sEtPdH8qiyPCNcE8YjS7KZXN5Uv4C31mQe7NUVNQPP9LWA4LZHeXBm87PstdK1B8t8wsEnnFag6yRVYTCEN393R",
  "key27": "3FdKfm9fNDCgPRE46aat1RiEJvDtN9V2iH6qC8MgsY4KUzGWm7pQGP48aiwXELNnm58Khy6hM6QHGAsJwyPx9zUq",
  "key28": "4dbmdn9ieLAbjoi9T7uLTx8gnaqiBG7kd4Y6JDcu5tBzhTWorYwXE2cYkkZ67mWd6siMNNB133F2aHknuXbnQjPV",
  "key29": "4rY1s6SAjCMH6DNGNQaRuVAdBBbWnbQxq6GxHMSeVk2iKRang1KqU6zsL7te96wSQFGuvEGQ3SWFjnzs4o6P9A26",
  "key30": "3NYTTfx8DKiRdeu6QXooKff5A4cfggSwnss4jchzjszi3qTBSeBouuaBiahQgU2MA5HnoEbhdTqF71rtpmspxp72",
  "key31": "bQz8ddCPaY66QmHXBDspw2fp3u3qWuct61YN583Bi4LUx7F84fhmrcCUXsKUm5v43CnFuL57TWwYfYTYogdRzT9",
  "key32": "25GXQeqUfUbQRxbFkHEfNqiyZ7Lr8T4uzoqpxTe1ZFPRiW7tyCgM6UZKHPETFaFNQ9Gp9hXFuTmsFnSXmJJwzK7W",
  "key33": "4acjoKXCEhMkxHTWNNMgRMqmQU379ziboEjmyWKUs4nkea1zwDd7u8zDXf9AA54mJ8GTZnBRexerj8EYYQ3RqK6h",
  "key34": "4un1ectU8ECUYW7BKyzSwdqeuXEtyZzpkcMitR9TLZNERpfK8F1JfDHRQ1qGKRNwSC43K1bKvBk85fEGkhiSEoZU",
  "key35": "66nxZodjgXNmYGURx8iT14jpGW4n2GCkPhpeHg7mYDoy32Eh3hK81NR5EVVpNrXm7d5z9WY6v16qqegeCCU5k6uh",
  "key36": "5YkBE1ry6qj7pfiNA9wtxNm4JzXnDzakjCRuCXoX8HiVbvu6afEe5hPQAF2rKdW7fufRGpLUJAQYs6azRezfJXvv",
  "key37": "3SAF11LqWS757o4GAGRxX9dGR5Vu3XMVFC6pv46ebYRyKjvvzUwN5Z8wpzaDMi7FKNiBVEWjamyGSywFtdFocLnB",
  "key38": "1213t3QSELTUb23JgefLP7XKbrrEw2Zwwi4fQM7zaN9PEtGrMo7aKADXm3Ka3Hybyp7dEKnFhhTRy5LVVticzv6X"
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
