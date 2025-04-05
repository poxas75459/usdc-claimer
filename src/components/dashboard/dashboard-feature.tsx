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
    "2y9fcvCUbQw2efMPQPGFp4NAd5WDq3ZNqBZH7CP7nRUDfcc7o5CZeY6HavJcKgAATVSoxUqbSGqjeoECJ4b2Lr4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fhvx53oMLP8epernMzAic4zmwqVDY42YjqfTin3d2zGvkJJUz7hQsxD1YPu8dNVxDfybjUhBW7zPyKXFGRpxct9",
  "key1": "58g4ww7cSZB5VFy7muAKsDysCC1jZGyYW2PLVshWhajwAy9M6ACvqyBafwBL4ArvHsa4n3k4wwrMumrbgYEtKjWi",
  "key2": "ju6EqPvupX3jD8HpPJ2av9jg9yyMFfWoTGrnwXBbcCQjxnD9CQycU7AarnetVYQFRbQ2KK6KcspkyHctXdhxXT5",
  "key3": "48yVWJAJuceZRmJeDEaW9eqwV4E3HdGKesMx9koU9TNjhuCHNn1kqcviQGTxegpebUpZqVC9cedqfjjwRpWPsqW6",
  "key4": "mrw8E46QjE7FFZ4hd4XqWXFZ5KeKeEoJqKWCqfa4kzCa39iYPMxq8cnCc4Tae57mmy267rQ5Y7CjRhcvxJdqZ1f",
  "key5": "21ptMVGyGxqPy1AoeAkAAA2skvFcTXvsiuFV32rTJveeZBe1BHRCSQ9UYXr2Y4xYjLK1FBRzkBNCBzWkdZR6Xwya",
  "key6": "3A3fdHAX5rEqgCcjyBqtMNqkTUja4TxP574KGa97Lvhj6NVZvKjeX1n3k2fU7pxyavj4QZ8iq4WXwExoYEg4Hpkj",
  "key7": "4NpHEK3wm3q1E1kr78JQi96HDd9aoG858zT6J2vjaemT9MpFte5N2JhfvY5ieBghQZiGY9Yb2TfFDC2ZS6Cn1JCX",
  "key8": "4Jp9z8BYo2o8NyKPMJ5xfaQL9iHPR4fBEGVdpT1njRrFtreUiWmwpKCzb73AVmUW7gD4GWEau95cQDAcDLdgCyVj",
  "key9": "Ybhh7yZ7XChiQohBFoqo5LaRhcMJXsWbe6bf7A9wRD3wMSm4vc2bJVGsayUNUojPUe62tfDUC7DqFAkMgsVUy3C",
  "key10": "HMiGMBCc6ev29LzChjpW1dXv74FqGcbcPb2fiBZ9VWTMeKcBHD71rV1jrXAfRVnV3J4s91YrwyAXr6dKekgGMnM",
  "key11": "376dSPnCrPL9LaxyWKcqyuZogTCyPXKVVPi6fKRS85sGszTTSPE9BaT2aW8HGC5gHn1GLPiKixiGfSWsfAcAPMeW",
  "key12": "51dtcQwCDkZnkQ2urpfHZ6D7h9u7FAxFpkxxoLeW1wZhHsCDZvm3LDMyHzmSTsbtHSVVucJ2KmGQwN6u3VvqKoXc",
  "key13": "2jTSrE5NNh7dnAh6yT113XnoxGNH45VbwdrtMSyp2WGoy3naHd1FZXviEBfVZ2N9kAR1siXZ4o195511NoeJ6nan",
  "key14": "4HQzV7dzEEiGnQ2prAcjC3dMfP5obALd31TyZ2nZhmtNLPA9Q9gfP3GFuSQCe3gxM1yz41fqDgFtgXTXkZJTPHiv",
  "key15": "JwkGfyDtZxLjLW7S1LgXCg7A9VUxwb3y7QCF1StnPdaDaeuzBWNgK751iTt6GdyWXiQhzx7a8saVv1NN9UfwYkE",
  "key16": "5d6J3Bn7KKs6NAenwzDpThVM8UVKSvvGyU15Wbify3snLt2rDAnJMUCVvYvMNPHVkFq1q5Kt7rQxbQenkidfUJBm",
  "key17": "3WZoCpGzaktz2yG3wbYEWHjnhLbAKquwNFpTsB8GzqtuJ6RmsfRqqcTXJSTMf2PjDytpHm1QQCKjmvYxgMEkakL7",
  "key18": "2CbTbeKZSWixXeZkxPGTFy4ryvNQJUC9RX51EjTHBsfcSMXFrSAQL1Nc2sFyCKkxA9u48wEza31P4PWCnQYrmyTP",
  "key19": "3aKmLFooJaXXVp6wxa4HGV67KjXmseRSDd2FHoMVwABv1hizMVjzZRNEY3iS4e88mQDhpVP9ikSyLuvURHfrcXy9",
  "key20": "5yGPmuQ6fHcf3kbypiQUmJNCj6rWBCAzyXSXbfcbBhvBAkxwRannLEb4zPYJ79sAhX3XAZ2DR9wR6zpMg4ProgWQ",
  "key21": "3TDCC8Jm9HQPtLeZ79jfMNEo7CJMwfDvidWwLBGtEi5m4NSdYuYjaFdqpUPvUxwKrac5d6Nd3Vgpj5ZQJ3xs2MoY",
  "key22": "3cu4BW8WckL3FZYuiThjx8c7nMA9g84nbBcCzZ5EMB5dY1WetkNm4WmY4DLKwtbRaYJeYWA5FJhMhxXXxbZYiLWm",
  "key23": "5PX18pTN9RwCuJ8XfhVPTLgCRW1N7pDVwn8kQvu2SNx3EnqzZNsoPUUmLtFkEssEPqQoyP1Ty5CiAnRRMa6jr2b9",
  "key24": "2EUpqmT5YUP8tsR91x8TQ6mt74sUjpEywh5YBFE5FW5og8BPHogH77RKwbNxqP7caygK5BsaxjStTTYp7JHJKLDg",
  "key25": "5mQ3L1KyHf2CQhL8r1Fa4fHhhHo2MNCu32HfM9nCXD5BDKV3h5FnRRkhk9fGbL14uWt3mevHR83F945ZDPwe8wcy",
  "key26": "a95aewikQ6zf6bAdX7ijqTZpAbhmRKLj5fEkDxdza5TVhiTzesCAtajaiNWSSpS8rMkuf6Wd6AxnBKm8SSVH9sD",
  "key27": "5W7mum1h2mQuiL18o1yYEmT3QHuSDy8iRrAY2e2edr98AhBKY7YyzisFtg2kLuGLBnTQZ7vt1zMWP94vpMzjVn5s",
  "key28": "5gUAoSzBUTktbPYY6u3Gs8HaEwnzZhYYy9zW45FyCc8uUdMaFUJj7QaMJAKd6S1Q6EaQZvSF2Eq5u9xCNwfV9jSV",
  "key29": "ZmV5TGyu44vCny5t2FXaqshRbiy7LqG2cHFdJXdp7pZGt52wtA2DTGS2E5hDbxbjdfxELUk7RBGPKN2sXJKQKr8",
  "key30": "55wqBjzPZzwZqvrKHkdeJcSjPa3qPtfXRBZQ7buwpydYS8CLV8Nh7fX5VoX3z3TBmuWtSiK1GX9s5N4dFWG2Jtm2",
  "key31": "3tnjx1xzrx5fXK6YNRB3Y7s1h6i5ZZbTVwWHjMAQe1gEXXnuHSMu3v1AmBkfyLdRnfnJsGpUTrSKUDHgJTtA7FXQ",
  "key32": "5z2jiRsnnEBXiHtf229aMAA65L9ieM8MC8aTgcfyyuEU8UrtbA2RMZFDL6v5MzX2xYnLKKLg95udaTxPYJXZRRMH",
  "key33": "2wHgQJacJtxpiVkuKG7JsDP6Z2ENUyaA5W5JngmGUrNd4izYaEvM6TdzwTf16FxWy2nXzpqu2TzXkHKixdvKT5Db",
  "key34": "43yu8oUxKQRShMnseHGzRPbjLyxkKz84wTaZDG3kwX9WMsDd96vyeSvEY35BHCyuXag1RKtMDY34oP3ycWD2nyJ4",
  "key35": "3snaap5Pk5uJqRcReJWeSnKSoNSGW1c4ag6XFMsQ3LVTDN2ke7naeHa2v6ugVfz2qsBwYSDX2NVoM4wdA9Rios97",
  "key36": "31MPS5ffG3bDQkZUMi8DPp4MmUmQEkSt7Uc9YBKDVXxddurekpmME6TT3PQDDDSaPjfnuwsoNpHcA98UEu3JnJT4",
  "key37": "2jycgAnsx3JNwc7tMpeWQ5XwLt6qRr9dsxKehujSNAJsGYprmVTLPsaxSecgqAgFnUMWQEkMqVSE7PX6Ho5A6g4X",
  "key38": "24sXEefXYgcqxKi3LN9wjXePetGPzjh5HoWHpXc6bpnQxJdeoBJiB2PoJVjxzmC5DS2tvJtEiMvu4cybeS2sC2HZ",
  "key39": "48TDARxkU1uRhaRjNddcLb3BgqDxSmkfFBwcKpm6mwuM4yCeeGgjTPrpdrFwia73vLHui9XirWkiiP6xZpLwBVqc",
  "key40": "2jpjdVxZEGMBBWD4fyBZbNH5hLjtFsk9gjq2qAmT3H7DS1g9vMSHGknQr2RyetaJRFEfQB3Jpch9D1HKDuctt8V1"
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
