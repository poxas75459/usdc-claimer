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
    "g9TPtNsWvrxsFHarivs6R92A4ueuAE2b5FkjnERjetVPRrS2f1bGyq3Kb2eEiHmdio1QDpwUQvNfHbCbDa7tQKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TEapz3MVy9RDvZU4ztCuUxpi8mnziW3xkYogRtMD9zGUNQKBmF6Pd1aGWo4cV9e1JPfH3zgcee49VuSWNvGaCnK",
  "key1": "3MVERULHCKYidndhC8S6GDcwWZg1xTivtvCJ16DAN1dnEXichqbDbqsL4ojQ7bodfRVAuGXfSCpD11K8ZmXQaLds",
  "key2": "2NtmsXQrYzWFPVrb7LAPw1qArCQtzbMf1rwSBDNL5z9RT9bvtcLGk9mLyk27CN5E8pYe6yiG9Kua6JGiDBozF8GU",
  "key3": "2DNgms7GSVJiR9DT6jkHLer7R4ZjMyBERczUWH5ZS1xeXV1TycB9GbdosWAJMmmWVbPvGBDeVYG8Y8KniLbvkci9",
  "key4": "asBZnjLcWxdravB4tkMNmQ9rTb7QLCCtvnnsUVd66Qv2bQWWYvKaYRxTxUWyGEXymp1AF6iZmDj4SG6FJfJLsTP",
  "key5": "5tdW1zNHFsh8g7Rr8WNmgunNayD2nr7L6HQ1D8kTP4GQ4vXL9AprYKYBB9dfygW5pjwYZxuCDDFdmwjuJLWKiT8J",
  "key6": "4xF64DihEZVJygnF6bk6Fxk5nydakmyCEB4DMjBxyobfgiG2p9ZVG9DVtYMgQ2J9B7BpmtgscnGcLgRLJg9MtvqJ",
  "key7": "7XGaqpUCEUPXCQQZN8Lc3Du3tYd7TeyQn2x27tbCgLnFgkc4bJc3QyQeSw9YaDZR5deVrmcsasMw39pNcLrG6Vb",
  "key8": "2Y6uZ6Hc7eYDszfmnkLJUW9stQU548pD86zKQcMZ63oaeZqPqewHth14DCbZeuH5dbPmtzjAz8uxUCBp42qmieL1",
  "key9": "55gkASMRBQbSxxu7EYwtBE7u5ETBn483bc69kWJ54ASVbrVjhYzaacfEWKofBE2iFqxU4EDxHxtkimzXEzRxKx2D",
  "key10": "3tQPpBgP3iaSFA8R6EXtUMJmEZGmkBacX3HN5y3oAQziCa6UsbVjh7tMRMBu7DAxDYHhWCqhPAqXVpEjPC4E2VuC",
  "key11": "5XRm22PNrjnd4PWfihuJ9LPP33HRvpyC6pLsZ6ypV9f2wBYcw7zXWsHzGxt5GcM1xrvH2GciPP884Mz1XSxLnoq4",
  "key12": "4t9zkWpnmM6bPcmdYUSYuKFXcxSUMyWuc4L7F8BBaGBqoARgXw5mCuazuGukEe5zzEm9atpUp6k2XrPPCeWjjY4L",
  "key13": "39vZtF8oBb5KqaAuk4nywzzmr1fKZNM8nsNhpueRYKMQptYE2daV8eTKqwC3eBX9cG9xud99Zh5MS46323qdgH2X",
  "key14": "5M9VF85mKPonGw9HjSnMnnZ39itD7czFSVkt2KkfzxoiWYyZeWX5Rqc4WvyEnL9p5Cb1xoUhRhk15dEFr9nSbw1n",
  "key15": "5VwDhYN2K1jTZLhz1FfL37dSLNyf3ATHajmsfiLbTKBrpcJ22xe4ayQeBep37tRUBfWTrrcNGFZ3uketrpLBQiZ7",
  "key16": "VZFcizvBGcuPF7FCM1tSDFTvrT9fQnuy83r53jvBQ7JRosBbU9TewDYZfPvt1DpcWoB8Ws7PFeWAFvkz1mdMLiw",
  "key17": "4oowCc3uyKQirxS2efZMpiYYHoFAtwxrhgin66hD2CEWvUrYs2dJG5PRqcTeWY1b1UTg6icg9gCyApsKpKGgdF29",
  "key18": "4GL8BV7Fc1MWMos6uX5vA1Ko2EsY5KNVJQ1PzGXrQdLWRAmCJkwuhgtmHW44J1FLkDW2Cbw7eh4Cm28hFe7BNvYw",
  "key19": "2JMXoedLhNitETvRQS7vCMNVMt8E3xz5cXLYd6aqjLfbsdWuVVMZqVV82tkr8gpU9s9kSwtFAxzbfr1a5QpSrXgn",
  "key20": "9wiNw9oFbnuKFkQnZ3Zb6k1biQcFo5DXADLkq12zDrKLxxBrhggLdbGqTt6ttGwGEXA2Lqx9hiKbwM2sy7LVZNE",
  "key21": "5GWRU2d8FF8UNWBdt4QvmSPD6HS36Sbpq6nxCxrmUK3fCeVCvChH1HRFH3EodNsaHnPmqSVjqgFjtB4tBb8UPEmi",
  "key22": "2xo2RsRCx4LVs4DrHWNwMKHMDviKfz2YMatJsTAHcdP1rch7ucaSx9KtypxXNYHPRHYYiAzEwBxvxLUSDPHF582i",
  "key23": "2Q6qr4hY7N5JeniF3oVzbXMFDSb9ALhXNKys6iykaW2JkSc9Kb2HseAUpsscRLNm5S2aTJPDRnHDWztrhuxWrazj",
  "key24": "36MR7CkhTGcTbee13g58xDekLZsu9etQMKS36Z5MbgtW6UtBpn6sq4hfUJvJzkFFm1MfX1d8r5kakDC1pacDiDPX",
  "key25": "3fwChGHiHSaymAbjkynA7t1ixesKpXjVRjtkQykNjtE4LHfAVc7CEgSxHi3EstN7YDpKxdPryjvcZdKWBu3HE96J",
  "key26": "23Rb3EiXB9oFHvyeGCMuuhjzDseTRT2EuNJDaGH2yKcNVB3ovhGLWatCn5ewqA6jX4e1hd9uufyDHCygs9wAK6CP",
  "key27": "Lsvh2t3QNYYitpnRrpcf3n3N7r8AtzBZwt3ssRd4jbYqPUhJGo82RykmvmMSwD6i7vPPqa3wR9FDkswMYP2YVws",
  "key28": "da2RYVXe2k7Ldk5RY1o3sHS1RUPQPe43tqpDHPjDirs9keGS8FprZXZciw8Ux1NACpUK6BCCPHAk7exf6cTw19w",
  "key29": "4S8VBMQHfomoiH1rWH9XMp7WtMqADH9Mxnr1RGodSZi5XVJ5b7NqzRt2zS6MRY5Gcjp74PxPNhqS3L6mL4DJUaKP",
  "key30": "3QqpWmVfzJhSvAwdmfopYJMtYwDQJDx65WPkjyNRgo5amxHRZukecaiS6P7jYsMgBtTRVHBSdNYpFza6EcXeRjcW",
  "key31": "VGbJz6EHW387wiwTPfAyvK8bkrcdTJjTebZGoQznkyd6VchN1NCR9F8XrzGnVgYdckpi7vzdb5c9fVTXpQG9DSk",
  "key32": "4doDoU83rRdijUJzQoLoJ8RFzbqyu4AB1qSh8mZeybAfHKsxddDJPHXx6Thg1NUEMFMAs6bNcEfjKcVXb759AFUv",
  "key33": "2Ztvq6qoXSv8PyHhLRH2YwKpzrM13zVeCM4DfePJEfbeW4pm6ef1ZEdGeE9hXxSFikvMxuev8uShCfHowUSgpnuq",
  "key34": "2RX1NaB6KsFhaGYN8iRhYpds4feSfjNe767STHDZ52NtyUgqSwPZtu1e3y7EKAzfWof1aD5aNJLHMkHMC8DUZiae",
  "key35": "2dEgeTRYqMHhX9VHWPfkuH2hahMY6RLP6ZcjMkd3wkgE4AGg5qXKpoqVkuWsoYE79MFGcztbeMpsjT5DDeKGiJWS",
  "key36": "5QEpjfPAax8Q9HZwh24o83LWjBbH5TyksxNseEw6uoPBeP2rfqcnbUZMAf9jmULfFRxvxgRmuarxanMv2FVtEEmk",
  "key37": "4DsmjrJUz2qGTkGmtQgGqf21QVttw8x8CieTrnUCzERwudVZBQecXt1uvjD9yYf9gjs4RbjWYJd2hMkajTZHpZUH",
  "key38": "4dxqUZfvsxH4KfK5y7TFPjEwBJG2FJUszi59MVrrdSrpKEzhHdgQcXH92FQ5BfjD1hPtr1QG1t1yrTQLRzbb7SS1",
  "key39": "3z6Yw9C1YAHhn6P9MDEeaPUzX5sBU2UuCjJ1Zi77WaExNzV6upycTDPK6oaPHR4MGSpKPrSeYuvFFjh9DWXo7cGH",
  "key40": "5fXDiz6QhjnGoQMLX8Wn9tKtqFrrUNNNt5Nkfqubpc4fZURMDCChi1GJ9HQssUSWp5q2KCdN6Azp3MAe726K6QVK",
  "key41": "zWoavjMdyejiMRNnVKUGpXVEP3wvg3ZC5VYqzaSF22PF31dvFfQTXTr19LT7CQmrVdyBYKyAUQnqzMJ85LhakbS",
  "key42": "4jT1M5otj53RVPThaCzkRvbhLFpqWrJJjfBbmGnnVW7tYgyBktbjMcvBiEcGzVbpZcPK6xFLHwfp6NGRgZDVYd9x",
  "key43": "5yYFpmHh44hiMFoLHGpw1DS8wy6GdJabwHiuSjZ5HhNC2fj8FLAMCzv7f3bUtkSjMc13Wkv2QDQwcqhZgV9zgTzy"
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
