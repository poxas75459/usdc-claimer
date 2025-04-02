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
    "4wgAVEAczYvZAJrf2gwpKFagF3LPtojqGGWCWS9uMmTUHpp4NeFjoMsTbieHCiTect2DMJobDyqojshZH7W8GhoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3arzfqKBuYdkVhHY6VfB2n2hQZoYqLKFUnnUhqqYrmmPK6dmZCPtc935L4ZTnuxen4rRDRHNCnzhHoe976h1pgLY",
  "key1": "4ApSn9zuyHPBduTuhPMfg1iek4ceRTKp6qfyrqM2auy8BxuTCWqgV57ikTLgzAfgDcjxAKmTtwjoRvRQLnAKJkk8",
  "key2": "3Qdiyr1pEV97gTTGfVNiYTY78EXrtyApZHG4ABAef9ZmGhq3Xbu85FkrqkPrkDSFnsb3x1ewrKvJkDEWLdZWboQY",
  "key3": "2YPr8wAcvSyyjDVQa5Hjcn2x7MtRbzUcLqTbCd15M66hMRtNKjUQwuPq424Agnxke9Xg6vaQLXQDu6K4t76wtMDb",
  "key4": "4zXzi5ysqiV3Xd4PpX7DouAxCoiAw8UWyneQzV6KxEsaPbfFzMkkS7n7s3aiVHo9nWdgVw36GgKHJEErugjpWPKs",
  "key5": "3UFjaXpNiPzXJGNyoHpFKCCRrymB22ds6q8f1dcaicUSz1Pc4pefzHEPF24f4ojcZTqnxkR3ZbncC6FHz5yKrYoD",
  "key6": "3FXj5FikoVVXfGgjhoejY4qYGk6uqYwi9vmEgHtgMnKXruShcJmPe1SeuCUmeimLfDibU4CoYBVa9mBcQAy1EaRR",
  "key7": "2fdovt3H257HB2Ghjzwupi2ztxDDHNXWmREYspLZv8ZhxTVyZEqpCayYQHNrDi5wqdYJSVMWLWm6Uv5ANt7ShCB5",
  "key8": "3sGzgeVfzzpHetw4X1MAnBdTBLyVeJMk5do9bcv6w9aV11ecAqb9tD39GEgeYfM4qoeEyhTFuhp4wn5r161aAP9Q",
  "key9": "4N9EW1A1rhFc7et72u2F24nkLQGkis77cKYRBvGjLX9y2PgvJRH5K2qmKmkJ4AQ9YFPAAnoeRF1mRZfpjrSsTKe6",
  "key10": "2pjZ39MJpE9u1LHTWTRrf15x548n4spJPTbn2PgXSzcgSKij7MyozRbHfvZVkY6EdUyhFQPSzQELgeQmWr43zNwf",
  "key11": "4ogTQT96UpKFMwa4T2HAtfhKiWFcKuWvCcxg3GBShWD39e1UCMKGyEHSwhyf23dt5r8c3Z6BXCw8wdibnL9cLSE",
  "key12": "2644cKjxe62dyNRWxYHcVk8o1tDCrLWn4sBGzPpiuv8cwu1JfJbz4hHiXwiQ1w5tgbKo2k3Wa2o4Rbij7LuGcXDT",
  "key13": "41oiQpciExXSobtieDjcbACcyekgsSyZ1ofXTcQNg5iNxadCdmoj8PrGwKj9KcBjeZ6Rt1VUN4HcQsoFFehiKUSj",
  "key14": "5sRtmw1nVNAGV44CYR5KD6WPJ9dnpSDTAenj5dU4CYDvDVKrh54aXPo6Yd2iGiZcHYGfVqCihUXw5LqfPee7T3ye",
  "key15": "2JbLW6Jv5uctkwyQhm2ZhEqKaNEHckuVAfGtxYe3jQ6FwzoGQYQDULvZAiXYKLeU6uTWySq6RSsoh1qcV4heM1mC",
  "key16": "4pez51cxGYnC1D8fauTFNXaJtC43h8tDzZRmGQTKQseRdQk1XYgN7SV7TnwubwqmppJA7pbTBYBjsVDHfvw4vtzx",
  "key17": "4gLhJemuQT22EhQ8TAL2qXq8X4k1buzxBazXFrfstMKkXkoSCdBG6i2sFDYRbwYXBZLrnMRiQCSgutQg9ZDsarZ5",
  "key18": "2BHLTEu7VucNuNgd5gAfCHk5Eg1ayTQJm71rHPR5Y2QMJdA7FF8Fi2tbDEJSyAWLPWk7LAJoWgFAPGwuZzDRw91",
  "key19": "3hMcFxUqJqCcJADwiuRuAajQbPdCXZFYTu3VeQR74Udoxh4eb5vwFSLhwwUTC8tejfaDJoASmT7vN7VggaEE6nJH",
  "key20": "JVqsCP2tjCvja5FrfgdcPosqWsHwhFgQHMDj577HmSBTS5xG7vKKEWs3FRj9kcoYCMgXnP3J6WhMpZZKBXzjR5J",
  "key21": "4BBGLfjFbrv2Mm4Fc2kgCKFuLgzAia9tdohmgGLAhVdLegLRJ3gZdg67VGMnMYuVKCMT23Lv6k4mXdQb1s4hNdpa",
  "key22": "3NdngsEDKf52qrkMmSkf4hvUcdW6mkriKh5aoHPLSgkx1RCejksbuKfrYTWxRzMUwkgfyp82pFFJ7o8qKRbwk493",
  "key23": "4Eet5ZJSnKygNuBQYo78YE7AnmJHAcKvpFkREZiVVdghXard1sbxJadMbWwYah246w99GGJ52tFrFVogTFJbnc1T",
  "key24": "5G69GyrPdLkk1pzKbEfkJFxn8wvfdjXVMheQRuC49cuHwZXG1LVGkeML8z3AibPX5QcgdxVGvAp238E4jFgjGkBt",
  "key25": "5XnTFwzVNrdfAGdab2kB3Dxk4GYwFyutCVUGJvox9iMKboutAyiTkJFDgciMQiJb8D7NPfy6s5Jr9DYuQoNw7m88",
  "key26": "5F99PPa2u2C6jafQxwfPC5jqFr77EY3KgtijavUKNSMABzKhtTHhL22CBBAagB46dt2cqgSEeTvJmDYxFxVhxr8B",
  "key27": "2sUgiknFdrtWnGPXkCza1ahCSphkPTRcDLuuvWghLVEZogVhUMbS1MF6peqD88KZi9oAXKVXQBHPgbmPDauXa2aA",
  "key28": "5BjCHdTFzBpJv75ZiUj6gvrbgcPybzyhD9yB619STecYL92UVcH1byu8DUnTJVDfb3CXbxJEvEeQL4Y2H9gdhyfr",
  "key29": "8BfsUEKgg7Z3BZhzm67eUVDZPX6m9rvU56npifFx9yBd8pRCABn3XtGTE48bxmXfBzH6ZKHkZkZKyaMHEHxcrEw",
  "key30": "4qVhhFuL65JL1HPvBZEzdQxok5iYEhiZcWKjMMuZPfZKakkHaFCTvjVyYmBTTD2QwYRfZ8mESVGjSWYgBXuRYpQH",
  "key31": "2qaXtaqiLzxiJSaPk98tBZrLPxwrfM8rdpaHry7bse58ckVcpk48xrfWSq8F3pvExioKQMu612LD6vJuCV8rWq2K",
  "key32": "2VDLpxRBKccMUYmPNFdHBfd3TC2x9HhQRHtBHBzUxHoWrh9YhPvpgNdZnMBNNsPvkcLCQb3mT8aoUX3zsGHQU1pD",
  "key33": "2jNy2Q3zvkHnvDE4nPSeRoozVmrpQrN1PpAsKoiDmiKzy9akBrUPgotH1z9R76DCNj2NpSXDHUNEqWpjusY9xhLL",
  "key34": "57Kwg5B4PzJ7xc1h1AjZvzCfazQB4PX8oDZPd4icxh6REngMp1nEbXpzfQfQmm29y9y6FEmaM5oRcE4xub1UD3Fm",
  "key35": "3ZbJ5Z4zHGDpYrXv1dKGqe29bVxVzDAG391QKPPVVJvLiRRjA3yYYhcbMvtTWYzjjXEYsWVtxL6DJmBZV3GHPdYK",
  "key36": "5TtNxDLnJMYWEKsD8Ro9Msq16WpYoir4nt3LR4erayXU2tuMEeaDf4Va9Zxkv5QHkBuYuayp5Lsya2z8hC9aSJYg",
  "key37": "1XfZHXR8gmBN5XMbLP9ZRrFbeBMc3JAJfC15ee9ydf12tXQPTTzeoSeUyNqTivXU6S6WiVKYCJG2wg9WYwwom5S",
  "key38": "2MNGEzoH9mQCkByE3akeBsLDKL83uSdKsQ9ecvV1MsT5mVD3Hk1yivwZbHQdvPCChv4x39uJyYY7mWBHAnWjhhAX",
  "key39": "5pghZswhsoLyjC6LSrTsfnQRFnLVucduwGBkyjgdcCSVQL9vsuBmwAXbgaGebipb15AvV4QxootsBE7cNVpRRBhJ",
  "key40": "3zW6pqsZv8QGmG1jrwPDow4TAydf8hThngLHmrXUmWJ99kAR6fYfUCFQy4ez9GzD8DCxmyKyHLL96hL85AuPykeS",
  "key41": "37ZAJHEezhXddXxTXRRYXwwG9EQN3mnDDeJZaDRfGZEoXFCS5Xd4CSShNfKRUg2gEpLAjuh3SJFyBoNVnPsHngKf"
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
