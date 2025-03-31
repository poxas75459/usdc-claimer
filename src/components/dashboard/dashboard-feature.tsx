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
    "46gZK2b2UWk43Zo1CjgLo8NEvDmJJyJvKzoBSfP31M2kh5zj44FuuVhsetZnNv79SK8Rcvbt917oawpjXbVyKbr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QUAR9BLAgjxSpwaoyVK6AUi4dhVBZJ7W2eRHAhfpVNyuE5xUQSWtJD7u9yjnAySUFaXkn4eYZ4mLQhauU5VRbVv",
  "key1": "yKvzLjfDtUnteMvCpyD2UTMN24RGdvjzjPYCM1zrKvFMyhH9FT2EXdqCnovKVte58QRjDhRyVkTkBH5FS2G3v8k",
  "key2": "4ZXSaKV1oQEm6RcpFyshMcybWPpfcKwvX3qbLx6vv4gUjhGmbSTCoomrTNz2pFikUQDEgLuh1roEnxQWrvZvsRPN",
  "key3": "2fA9tPT4czj4aJsDEYHsipYCwkCbi6DpXr8YX93grZdegqYCzKQBMFLirwLSPYaYCPTyQeo8GtiPpfHspzRdTSCB",
  "key4": "P9oEVu8zbvcDdV522dCTFai8MnD5Ge33VFWgDmQJFe7ycjF7C2K3HF5hRDAEgPqurJst5A6NqG4pqjRni9SiJc6",
  "key5": "4FsWGfM9gXUwCCa4UfyDE4duRgfD8ex1qPrjwS4Tz2Rc6uAwuG5vpVd5SL8nJBz3aQGJxVYXgmh983zqSspL5K3j",
  "key6": "4Dm3heogeSHuCFpgePWeZYVwTte3aVtmUNSZpZa6GimWNhVJbqMv6LMxQLKnCLZMYetBNS59aoPXZMjx5fE7fSma",
  "key7": "5dLTqGVF3uekLSYGBWVwT4j2hGvqrjqwBVegMa2u9YeGCf2cm4yMogfkFiHsRZekhhAcwwUhbRZ3MEXWf7dpkdkF",
  "key8": "2KzcvXiGPyqxknc33e2TQAvNQFCcvRDKxJrhdc4D2bkbXe34kCGWn2doUfwUF1ZTeA49QMBYXuSszFZSbtSvtRwD",
  "key9": "3gJubGyUS7oREMfXps3YLwKHVbQdRajThauPragLuF7xqpQyJPbQEzkV4mjn97RGSwPPKGn744tFPf3tZRiaPCW4",
  "key10": "2QkRdHgMaGSxJDAMPhXvLdsYRLU1xF35ZU8s6iWQPcbEH53ur8VvsiggBXPqJ1o1RJ9cmK1iSLkZXArhqwSYAoqw",
  "key11": "4zqQV1m9N3RNiGMJAuASdAL1FbufRWLp8cnU1mdFmVkHWQQoBLg6maSmC58XuoPV8YK6LPh5Ur1SxR8U1wuk1R6k",
  "key12": "3wvongcnvRAMfZyrdxGE7dadJ89iMYiPxtBnb128KXPXhoby5XNsWqtS4ENJWJN1NBfVyjmx6fTPow8QwVtQb1ZD",
  "key13": "T6ymQfsQZEtKFaF1QU6tCrwfiN9VyE4euxh5hVsTnVRV3z1WQXtUhxPHWpcM9kVyzfgtAJhdwcRbdZi3gqVAQcK",
  "key14": "3R3EPGDQDDdUWFkNtmw3GMLw6tAJwgi3YsRa2qeSLNvGWJcWTbr5J3b6X3NnKxxwYw6NdGo4spzPsZrG4B98aB7p",
  "key15": "4XvNkXoquWbh2GN3Xnnh9bWsi8x9Dipbu3ewV2Vq1XWw7rS51sAj6ed79dopet1J4xo7GmmvtkRZvTt6WPVNhWah",
  "key16": "E9kFAop57J8s8xbr73EPVqHpZxrMQubEuExKGjoqZKiGtRm5LNzSrkGRUwCADXpvkfF87DRsQEcRHVdKBFR8vJ7",
  "key17": "J3daxRVqgHVPAaxkQXG9UYTn4DUoRnvr5RdpirJTUXinbKnkvaMBPSieCdZieoJLVwPFXezrhbGd2PTssE1t31f",
  "key18": "3LJyZRH6CE2UVroJVgUdyQiZNkuWX7rYFWrGhRYRQ3SVQuYvfv829TQyPH4ca5fRKhD5WvoyMJFob8LNbvBcquoW",
  "key19": "2hdynq3SEjdTu6SR3vQuxcpzk6CZ14sYYiYKcsbiQURSyB7hN7Rds67G7JwGM4f2JRVmZn9P1RnHE8HmjPgWEPcS",
  "key20": "53uCnctM4jZywfLoo9Fr8buHVxwSY99r9NJ29cXDufbDN4QApenJhvZPq3DmPBMH5GcrnL2eun9aXPC9msBrozaf",
  "key21": "4J2rweAAtYJndcamBvS4acM1oJXTU4PwArQBPC13Wz6h3CZbPk9SBqLPCtxqvHNw6YjuSyKbcBZn32qb7ZaJp2AM",
  "key22": "5jARvzsGUmodyTp8jt5gkZHT4Hz9DMfjpF3bqn8mJ8EBVJ15ACXQrSbNtg2zdo2azKyqTuTo9zRtc84TQrQnhVeC",
  "key23": "3qqHjWRtcCWfFjHyRP7nv4LpziNUcv72Wui9r66j9SCs7yw56DkRLri1fR5iEHbRXNRptkmoYoW1Er63PUDcHbpU",
  "key24": "4JW6tnjW8ZNBXfR6tjA83zoyBNVNMGDXQXk6c7dXnMec298FgfTuxoSa5ibcf5avZAhh2Z1ctgBt1oveaB6B5YWb",
  "key25": "5vyC3RAkbNUGYFmqAjAtWCyiLKd8BWA6U19w8r9D3i9RcyzS6aJAQ3GDVrfKxwn8b21BFY7uBySvhkDpdAmptPaY",
  "key26": "fkWa2wE4G8WjT5Tp3qwGysHRCu7m7hH6cDXMx1A3vVRQyVeuRxtZDbHEwaDxsqsX6jgsmVyzxNUFo53A8WFM5Zb",
  "key27": "6cJfnrTisiqLen4hL1XV2qQry9G9yQ2sLtqQPRFp1DiM3cyEdL7DvKFyhe8zMvAUqWtbehuu4ikCKTHSBkLABVq",
  "key28": "3pGGaHehwcXhYqNw4SkWgzej5w21kQNEZu7Sa5CgK7eaRikNAH4e3d9d1K55LNj6pFYbpzEikNtsCzFtGz4o4n7A",
  "key29": "4uPX3Gm8V18hTopwQvnJsL95Nhi6Y8XymEizuJXLz9aTxSJTDqLwWhkyp9tLPubhdsZ91Bj6TqLpjYSihLE2WjyG",
  "key30": "5BSsE5mDRUiz69xURQzYEh8xSBG5FzDEfTx7SHh7CcRfXg28GEZU7N93d3f8cCK1o4vJMbZvDKYXuy3sW9DCiYRK",
  "key31": "3wAHb4z3TADLo4Nv6Ah6yZFrr6Jqvj8JebbnnQxMLtUv296oeeWsn2cDu1ixtVwzXQjqUvwN85iQS4gsvoM6Pi8C",
  "key32": "5DAZLPdeYiKP1PcuEF2gtqVN8WgUnx1c5NoHUV3pJ9w4Qh6R8N59HSadvd1YjSkzmecMjc6FcS3k4VL6Fazwcd9t",
  "key33": "3wR3CjusphQqMnmQMwntVEvhV3neeGzvcauhsGKMsgBmuJcEWmtdrSraUHzRfb74fDcZgbc3RRHrZHbioD2NqeUD",
  "key34": "3Uo3m77exaDggi5BojppL3MgGt25iwLpa9QCMRxtGv92ZuarJ4Z9ntzc8D46VVM8jaci4sTs8d3XUyRfsi9kpc9e",
  "key35": "5yFodJpfPY4csocTThd7byQcCAAHRYD236LUkG5hCYigkFuhBz9h4VeJSAUYpcsZkSSkXecNaWznHHTjC5Y4Y7pZ",
  "key36": "4dWSCVsFAPVsNm6GH2wFRrje6jNCueFgXH4mqjJ8N9qCkR7QcMzavMxxPiU9RRZjs7RCGY1Y62DMZqFTAnn7bxCk",
  "key37": "QMrRTSkNhKxmA9qrogxFC2PuRF6FpbPqSAuixdywsRfX3kdo2XCnKtuvGbL2v6X1eU9Y5TxUuGEaq2TJBcDjVKQ",
  "key38": "5c4o7iRp1Gb6jZqHPV5TU5YDKLFR8RwMedFf9YCfg4qaTsZuBp43CfPcwPUPLDbMcWRugneixsU8HTS5tS3k8d54",
  "key39": "2N2vvfvQmw4YqG4349vM1hZcSLPUazgUzWgaPdjy72XydgSKrAbDawckKSASZcnP92Mm7kvMFyFP9aM3F7k68eSB",
  "key40": "64GN8v55X5K4WP5nMfr7cTutNDUuUHksajFvNE3cXX2Beeuj9H2itopjJFdRwARtbL7834mT44SZtpnRYDgFaPt1"
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
