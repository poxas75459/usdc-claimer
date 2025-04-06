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
    "Eff3mQNnx2naRwfgZkXJYZtkVFoZCsYJQAM1E8ShdwAX97QveBRhDbaRsW19S1sDQNhj4wfbQ2xnCpCkxY6ccFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hQKoTSuPXC2J45WLKP2aEJoY3F6hwBzJTQZwfrdEwPKbP1bPtu5mQ5gMEVc4FtJpRY2UHQ2nj4nvREyu9rh3Rjc",
  "key1": "642mxfxhs6n6DEKULiuCQ5duFZZdi3nRBwXfYG2SQungBH6PXoTnPH4YLgxD1eu1RhtZKUYZk1mYki5qdBpyhiUi",
  "key2": "2vTTcFccr88VDzhT2jVxFajy2jdu93xaR2DBjf5pm51DQKyiJgi6ZqhoFAUcRfTbxBCGPVMXTNEUys81wSvnZ9LR",
  "key3": "2Yh2Ny5Ff4tisv1ayWKvVZpMTCv9pt5nhB4Cq2bB8z8rhexk3FKVd9YpZKwg6e18uxxgua91wvbJeixbeBVmobPQ",
  "key4": "2uF4GkVi5q9S2KUGZKfpFRX4fFHr7Qr756Z4pvph8VqkdcWVmTHN4vGjvMGAxehBTpoFwEeSw7BR1DY8Zpy4Y96F",
  "key5": "3mZHJ4MCiQ5Rk1ZENpbG31Lt4vmoBx6RdCS53sVioz1c7wu5DrJvDLtggbqbnoQkE68XYuyq5E1xugjoBaPh3Rri",
  "key6": "xxuFCpw9e6CHmWFrAZf2QeepFRLoojkrMDHhgAbd4RnrcPYJXBehm4npkz297CuuRMhDRVGJsxs17u4JAX3fj67",
  "key7": "3tHtAtNSTGvuAy4WzMDBxEGKK3iQSqLdZpDSVGPbHaqf2JxDjejWXQABqCGdzeP7tKjhaBc4ctGm6v3JvMbjNwYW",
  "key8": "2ZExyVGrheWd9PfkYeBesEJAfT69sDhr8FFnWQ4utnBUjMmZvXATD8vJVgRx6VG59P81XNRpAP8EsUGV6ApR6h9h",
  "key9": "4PjrSh7aVUwGqMLKH9tm4SJBxVAjCWQkDCaL35bNfmeqR75y7gvtFR4twBaecrMJBywAkiYm1kn5rJuedRFAbQBp",
  "key10": "2ffNTAYsasezEC2QRQtToJFK536g9NcNXueqUJZ76xbHvujGpifX4ENSUXGPFmc4jmd1PLPbpiUw2GnfRi3hcJui",
  "key11": "57nGanvbgt4BArCB24cGzmaBm36h5V2EEXBZEWBT5c7HoB22228CAv1CgD76rUvycYTLoD3bpLHUW6iunoSyHEWx",
  "key12": "vv4VBXVLvfJC2CFmQyT2DpNhXMViiGtoUhMV7QvyNHxMKuryMbM8sFWLuSftvctDFF7k86KZKLumWiDtgFxxtBn",
  "key13": "2B6RcXwjA5ayg7oB4G3Q6nNxfEiZuKNJ74F3UejUMjK1fspw5CwdovmJJGVU5Gvw278Ls1x6SioDShczMJEJsyzS",
  "key14": "46XxFY5W5kMTJt1shHq43kPzmGLstqjdDA1nzg66Y8ysZsxDk14MRCJvBXt1YqRKXTHEn37X6jACCRRZKuRpxigw",
  "key15": "2TjRJ9MjeK4vGkxBHMDH8y7wURnMLrCzSJ7XFeJDq6CZsc6wZZ3BWFyCzGzjrnj3tGFFcTEbthHfyTX3LivzwniQ",
  "key16": "2rhP4XxhAuLNHPppmixboNh8LBCJg3FeiB2jDqbu1r3yMRmdF8WruNvrG48cmTw7NbQbwHUVkHu5KE5HdDnrCEnA",
  "key17": "MEDWuJSc8kMw9GLsih3jxPs8RYC57KhWm5QT37b1EJUXh33c564mBHR4FmCxdN6Kfp5qDQtWKgcFxZapTq2grwy",
  "key18": "oVZbZob2GnEJdgZxJNn5r31P15EqMMsMVPn9Sh9y4STY8LmrSYNh5YFWwPv4uo7rGij4vd2rBpzKruotxS7MzLx",
  "key19": "2D3rDx5SDYgJ6Ef4UqSnQgC5cms3FJNNw6ToeHKikZrTM8mXWHqKbSKJaRtpboVvLtRevX7vWmo7YzVYnt6j6wux",
  "key20": "51fQX6HxwpiUT4PqpbyVcMQTLvS6YCE3NyfJjenBZaEMrwduUcmRiN4HPdn77Bu9ighcaeekSessrsyYt5RGHkuJ",
  "key21": "4UULzQj4hkgaQNhC8tVXMXHq9mdWJgFij8H4qfAoZjKPYSUAmH5by4ZAuC3gLzrMQZyeT3xtFyYw1Qmvn2a5bVCF",
  "key22": "51LhoNH2s9XYkBwGge75pDNsjHP3g8wdQotzucMgFrS6NYsob6kYHkvRuR31kevqthN6HAYisnVqNBsZaR66RxHY",
  "key23": "5L1y8MicF6nr51bBLqk9ACC5xgsbUnQMxU6JLzZeVakCKKNvygEgZEUcpDiuQswfaFCZpFoS5S3bj7d79mtRUZQj",
  "key24": "2Da49qjgHH1JFQfrDMRxtJGjiE2QVQvcgNM9ETGsNwFJ6AjeYah5uCnsJsvbFcReSZyMRHmSsN1grhBSYyjHkqRh",
  "key25": "jbCbN85K3dG2SBWgAqEr6Qaf6XcUzDFoneCEYqe1jWGXs7u8BC26Cn8ecQY1BkYMXvmt225XknmmHEkyu8hhoDV",
  "key26": "4DQsP6q4bgdZgMeRYUvBdRLASbaPQB9By2n4E92hjuWc9JkiTazi9o4NRf59h4u5r7uuetA4o7qpj9jtaN4X9QEo",
  "key27": "FQDgPejyuVFghnpvbqthGbLbiN6SGgT4QRqNAiVxy8Kvux2sdVysR8gbHe2C35HLcihG9qZ7KELohKG9Hna9F7S",
  "key28": "5s7iGay6u4HFkTUHBW2XtwiDNEfKnu2FxD2fFLV5fDu14Wzjjrgrcar715oxRbQVvJZz1jCZzoRnVoq37HpYoD9C",
  "key29": "5ikEgwc4v7D9wHjPwYnrNtgrVKh7wvctsAUbMmHQPfSuDeYzxAWGwKXZSzk2GFzWGptjjEVN9Dnkxmb6Un6sCiBL",
  "key30": "5G6rvN6KYFKkz7e24AzJDXDCphUyqRa2wyVVzmv5cWxb8r2ajdhNQd9U5SckPteoMXbez6YgkvnyoA438tTBM2YG",
  "key31": "5Aixr7Bs79LnMiavDwBepESzSDMwv4eS9FtvfrifSFHukapFZv8dQe7J4UxTiaaqwQzbsHz6NajmM8HE3RQCi9yH",
  "key32": "4UwG1Trtj1HLpFRKt3LqicVNqALuMqsQneF3fRQLWPUgw8oY2zdmt9DARwYdYfy2vZe4Vs3R4yuSeDGoJh8oYNw1",
  "key33": "3oe49xaaFWFQQAbRjhy6h6huQDp7AxuRGowGjnuvPnEDC7K9kRgiQ22FnMxXFKQ8XLdhA6bm73pvWrkrmfSGUJHV",
  "key34": "2AtzndA26F3jGyXkhQR6nbmdMMS6S6X6UKRbrXYt33twWMqCg9Xck5cxfqTS8wHsNx8GpeT28yYQ5VcBnmhCh66D",
  "key35": "41qzgnDDU5V7GT8WV8sY4a5pDu1p4EWrRZShfqVnNAB4gNxzAZS5Qv9wq6YkKGbxAzu7EdeLyQF5BESVuQxwU4qC",
  "key36": "DevQuWkkwmRFrgyozq6HxSTCumpM4uWSUE2jWxVhRmZYYjmSzcGbQfEbYRHBk3kHg7w4Tupr1PniY568YJ7iZWa",
  "key37": "4hgJNmpLzTVq6FFuLAZ5Pyr3LB9Bt2giT5kbyS8qftGKbrKbYyP97rLpE96XvC7LahgHSF6xKFxhYwzuytU7GALH",
  "key38": "SysfELhUPLsqf5DCiKP8DLor5QkL65BYdAPfCWz8r7auY1s27HF9yyKGV96VBEfusDk3PzK7hF7mLso3L2U6vqF",
  "key39": "3tKAs6nwnkgspegiGRU46LHVSuGtdknKE44VAYBhVxP8PGYNG3kSUHxRdKc79jHqBS19Xi3QgLrT9jWgmP97aPNm",
  "key40": "2bodquhZ9iEa3eu8nt2swq9Ji6rvZdz3mTnhbBUKKe6DMZUNQn6FWwNQYh3ikamnN9knfNVa75w4sebdTSLTXvin",
  "key41": "3tKf1G5mMYrm14itY3TEWjQMV95s7qUrZ8izadXigFZtcobvCwodg3UWwZcKRo6uT8TNgfpZ76UFX2gkjAgJbNP5",
  "key42": "3ch8QF5LC1dqLdG68Lt2ffG8D1HQMNWLne4RyHfouHQ68QKAupwenpeAtz5M69cXanE5A1ucnCbrRPeGnTPvVFQj",
  "key43": "39LCjsXbhotJsbmWND4o4MtKzdMTvqzvDgrrLusPby5zuRdqh6T6PDohzSd1tx21U7PJCsVD3SXCo6fFPyL5EC5m",
  "key44": "5dJiNa8eXwAwAFdWfDQommPCsuHkz9U1Mwpy756dJ4Ccr3ZVVkxKo8Mpmudwp2ZRPys9VPtBkbVbpZgqt5VC7Q9V",
  "key45": "2dBKCWJfiYA7uCuDUkV8x4a6Abd9UWN48Z8SDkmj9yboqkFEaZYweNwA33s4B1o6cmar21dyTsUkrxBuD1bsp91B",
  "key46": "3m9fBhaHFmFkaYYNkdQLVywkvk5Bu4Jp8cqa6TSKuQt2cjyFzc4HzgN9mYebiKs9WSF9Uu3Ufj2AFCKoru1D4jyt"
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
