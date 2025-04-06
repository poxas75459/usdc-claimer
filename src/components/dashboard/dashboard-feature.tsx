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
    "BkqNpjNf8GMfV8577C3LqGXE8DNrNMgjNna3eyMkPff7nGHvaRPmzzqtnuSmbHgaNDgmb6vJDMNUNoBqtLVzUyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "665iBJCZ3h9HGHw1eGosAoBQweEY17W86YM8SUReSPpD6d3CwwbecbEARKN86L3R73zd1NUfvjv1ehEvA3zfBwS",
  "key1": "59R2j9bbSGptSph89JJeuY51dLnsFSW6c6o7LQiUagAZBFAd5Bxo97GS4jpaVFY5gFqCpmQkEvJrfrYBAz9pM7nW",
  "key2": "5Kohd2DPQHiC4LUMfjZSg1zKSJtp8XtYj9SzMii89bWoR3rnHVyZ4QzKM2j7uc1NFHn23EkvX7kbNBtXD9TfpAwk",
  "key3": "WeqSwTjsiX5KSwDtHoAUZ8P2pmVCj8V5jE5dwn1mqM49QXVxTxV721mU1tifWcgvPi8Si5yEF7ov6WZzEDkEKiE",
  "key4": "MYmvuQ9zdYeABej6xCML1qVmETuANEaXKXs5CLz6nNBomJkBqfYyovoSkMk4ap3MJbe9f8ucPApPTupfcUiQYXR",
  "key5": "5SLiGQyBdwSuSUKpLjg8xDsPHBo4fkqeU3UdTCK74iQ5x24pjPY6qSTfJdQ9QW5gKTgGMB87ezfpcMpqz1gjEuQq",
  "key6": "XumXzX3ZziWuXfsBWQVU3XSuDK6cC2oEaTcubcMLWjUsLrse8dnEgLY3wivut9KcE1u2zAdyafampsTajzTYo6v",
  "key7": "3gZoRZtZTawyBcxSDkJBLRbR5Ksn8Vx9UZykkSvAjYiCXVtwpPqgKbDkvJtKiNLJfMn7GYR2iiBrU16eHD4hkTt7",
  "key8": "2AcXSKHm4yKhtDSd1qN44buf6b51jbBBpWA74Av3MfN3tYiCA4C2w2VsvRcqXHprqfz1rEAyLqJ5GwELQpjMRXjG",
  "key9": "22nYpqexf2dGyoLZtRc3X9KbB9vkBUPGxw8N6bhnJwnbZe9sAJSme7BeHmyau352WxVSb8tq1wiGgr3wRHJm6Qf2",
  "key10": "2T2JrBxD5SrUtw44NsK5ouXaR2MYqU6w3a4DbcSTSVArTvP3TdFHjjiedJwXYkkF9An6UoyUHbsKuTsjus3YRBeE",
  "key11": "4rCgUk6MTmMbPs62phzYhZGNnPsw5op7a2Lx4Tc72ZwcLNk55Eih8bacXwq8s2YGWB74nsrQwWpcXRRtTCSYg4qy",
  "key12": "4NAiSgJPqGyYLMbEJvdxrFf4V5nauF6NBH2SLpnoqUByEEGouqXgwToUwTjH5qdhswjNiXoBmK43TQUAh3pyH4rr",
  "key13": "52ivKx6mrGNis2RcpyLgndmSvhkuNwCbN1YSR3ResemUoBMHnDgcbYL8KGBnQPPNEUNyjx6QKzsMRsyyG3sPv7qo",
  "key14": "jcBuNGWk6hBSRn9W39yvqrbBPTTQhtCTSy5x4Tz66FLt127oHLXYtnj4aX9iMB58eF7BcRvf6574LS79vkmAWMB",
  "key15": "cerKyMBiMkxFQoH6xPy3oXixNBYWyaWkqLcdAxR6VZ72setYBjb4UTnydwibbkS7f2fWsmTnXTWgXLhuSfpkK4W",
  "key16": "5fsRRaBEUqAQL8T97W3kTtTafJuKbsyLUdFv7hSYc1hCmZzEXSmGDC5K47RJEpGqkg5JJr7ucS7k7vq71uDYg3SW",
  "key17": "mxFFan4PAowXo9XCw3TuBL9Gxo71aB15GFhwdy1EJhC5Ke1yKbpdrHuDHtwPSuZyt4gxM4FXG3CNh5rRK747r8c",
  "key18": "3gXx3Nwpd3Hx2FYGmMZy8cyJkhp3yTsJDZVEcSiUNeZHppxyMpVoUFvUdEcyegofh3nTP5jQKYLCjkLMX6UYZrKM",
  "key19": "32jBc3e4CNSJhWZNYCufKX3inxBx6eG5nWtkfWTEp1LAZoYhnvJHf5U7k2yzux3tqhrtdERxZ8dnmpYYiU6yHAC2",
  "key20": "5NYDy4XZhzVAyDmmftz8Bpcn36tfAdsUi9GW9JnRh9UWeC8PEL9j16aKp7DZEEUR8eNK13cJSeR2x35MA3A2PrGA",
  "key21": "GfBvXrraUDH35MCudZwth5uKTTtUmZgLEcDy3PcN89Zfb88ETktT1Ng4MUpYkUGyYe8yBKEkUgFeJQRb6zfPA8b",
  "key22": "2iNguPkkKkBdw5Qy799hzWSnqKVHaj7TjVfJS466fNnKKSWhvhwr91zWf2BykCddnCPfEGXM8eY9WAMrYSvcmA4z",
  "key23": "5rWS7sMeP6y9ahzA1Zkfa547o479YvPLTAMuZGRaVpV5bT3A3ba7fZERx1MZeTdhxPTr4qDrzhbYkbsVuCawDh2g",
  "key24": "3A3FGLBr8GVtv3x65YA1SwK9ySJkRGP9J53D8u5dfAmAbkYChwJdrLi11JBBf48TQwwC8n6HD1HdNJr9cr1yY8wk",
  "key25": "4W544xt3WFouGa2t5gfoHKNPNLoWh7MCZkHXRJnKzw4WcCPDc1fop3CT1rLW37aKp9ZdjD5SaVHprLsFZ2Ud3gKC",
  "key26": "4o4radCVPjnWkDS4GnyiaFYWyqEbkwPFFMEz6MFeWwUYbSuoXzwa4SwbbjvRXiKWeFAKHofHeStukqD1uzuYeXQT",
  "key27": "5DgQJh7aebAFTo9njrB9cSA3auxeHsUKbZhDESgT5AyrgWwd5JRPZTaY1s2taVb69R4umWmg9rdYNCZsmBGk48qr",
  "key28": "2C1ayCyv9MWDYQCpsozuipxAdC9meYVrej7EbrEz1S46zs1MN638ALaR7927whpT28Hkv2u1WvuFkDmVsvNg6GKH",
  "key29": "4LhZX7RyW4KsjfjfXHP5KCHFbrXD2j8xryNzZtLMHL59v2uHcfV5MAumdAgnSvZmEyhm3VFH2gqHYcjxx9k2ixTG",
  "key30": "5gugGrcJKCv89omoBTMNrbsKBtdiJuZBkpCTX1rcGr3xGhwF4v34sPgf8tBm6BGnb64n3j9oBxEcnws9NtFjMv8M",
  "key31": "vp2n5521Bi3B6MCeu2gE3RbkJm3Zbsyf6QrgfmgDfgj1ZnnGKkZcAZbxrM1shhShr63GQmzwEyFdAHGh1QWL8UG",
  "key32": "5U941Qx2hCJcCMo9RyDz9eQLX2HKjJoFxtnoU4HPySFMRqiizxqxDe7znikthGRUvLg84jUB96Qsbhvcrm8hbnXb",
  "key33": "2tHRZnJnpP75CikNxY1PVdvbZtNKiEF1oPARj54XHxEJTRudzFCyvpcFcKcBEezDFQibBQRQ5tJLMifQytJ1UtvQ",
  "key34": "5zN7JcSnvCUe8vHMvnKwWpiZuJrkWr8ju7pbNybvMAR2pxcTsW3A2PGtF5oCXkN6JmfwepLopM2HEpvde495ZPFg",
  "key35": "4rQWZKRYVFNgpDTFGB2GbfZWQC9U2d9YEWGqhnEXj7ichB2LfiAfyHMq5mYNU7UPr3xUdYGJxLs9vzsaZDUtp6qz",
  "key36": "64ieSfJhWBTxQyXmUuS7uZHoEjZLuZ73Lr4vSAmWRxTknMeMYw6DCueEeVX1QJ4wFH1Gi121QwJtmkMy83EdLczD",
  "key37": "xoM7NBz4t3FnjPu9jJMum9TfuGKEeZ7jgBt7xhe7q3TafCQ4gDnUqcC1pc7q8md9YYZyqYbYEEsr42rxV5BVaqE",
  "key38": "5yYEkNX51ccvVdpx3fRMNrfKQAu4c4Vi8DWrwFhnVhYJcS1evKkqZDCbc726Km8QxkjgTN8aqT5Xdc8u7TALNZyL",
  "key39": "5wy31MnrZw82Apj9J9hAKHUPTcFFEHdoveHdP6VKEwSSP9LRQyPFsB3qrFw3uLN5KWL1GXyvoRTyMUdf7zyZWXvt",
  "key40": "3QepB3dRMvN7nGhDShgy7PRtU2wJxicMMusRGgvtsPjVyb52FhkgfrKR7QPEX7XfFnm6YVrF8gWfgut6AMUAQ3Mx",
  "key41": "2EYuWM3NRmEXeAk4JRyx5PWioL3nxoN2UyMopDpM2RKRzQZSzPWaFzVsosBoqaJTqUwVshJHepBJMwuujhi3RCeJ",
  "key42": "5mPcsYLBwgotYPtt9bP8nqcsfguh5q5QX2UadnpVyy6rngMN4dvXP6JN9DQkrNwrV7o5Agwrt39LDpvsJ5WfziHi",
  "key43": "3SQ9qsd8ffF492NQFvbVAGnsAxSCxNwRUuviiGGYVXPqAbCMnKrdZRct8YMV5edWh9zenQgXwVUHE8Ka9T2Lopsb",
  "key44": "5yjaecFdG2QDmnGTsUdcmqvUSYxnAza9taH4yFHFGkuzbzhcXshuFgRUgnvHKEzdjM6SGSsZUTaVMP3cy86S2CKJ",
  "key45": "3k6PrcbazKhRqSUK55uzB2Qk3qHiDbCWDK2JN7t5pwjziekjeSx1YW654HKh6KDbrMmwHDr7MugEMmgZdpJDnCGQ",
  "key46": "2QGL5Gyq281sU7EVujSvzTSQcam8hUNqsirfEkw7xk8WbcRfwH1Z8c7iUtw9GBK4GgawsSzx3zegMqwZhjpdmfQE",
  "key47": "3kZtdTrecN2ob3YB1JydGHDdKu3iByJFswJVDDgZNSCdxp5FFHE5qERSPrLU9SaucHitdkUK66CWJHnVyXksegWq",
  "key48": "3AGc1UbAY7NLFQEJe9AJKt4fKyjgsDBJ11pgCQXx57wvpBLyBAZ2MavMT186bbYTzp4g2FPPHuv5qvz7RMTmMN17"
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
