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
    "2bb5UAQsJzgg6xX2id3HddqqXMWd3Wk2NCL9qHP81Hx3Fxqiw6wfZKpU2enejofqss4bq7av51q5XHJF1AsJzkx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39euNxdrNrMNjbfD1qNp2vk5U9AgsSTtCUhQYqqqkoDaUF2qkHcTZG3e459SmgXXLN5QggSeqLsVSMs12yxL89RC",
  "key1": "5XjTpYfBvLwqjWsNGpdTx7aR6HK2MTTVB37kw1W8rXnRPPUdq2uibgEj8ZV8ar87z65QLAmYwHUUiEQgT9oy3AR2",
  "key2": "oBnXnVSVC2aBDxwXkLAsP5Vf1y5WKMTwSGWpUxkLGsn6XVGsYw8PAHuUtEQTeJfD2bYGDLrCoj4Aqd1EHby57Xk",
  "key3": "3FWPta6UB85NvFatFPbfGq62GwuYPkAwRpiG1jCJwXFSYm3ntre7b5pnW4mSnyPc2kveWX3MTnqw5GdvVsnpEsNR",
  "key4": "4zwqVJGcECBVaBH2t12qi97Js7BceVbkWrqaK6Uv9LJXwb4htLowSxP24noyn2TNc4GkApKGKHSeR89krDu9pw7N",
  "key5": "AqS4MeYAJdKXj7nFn4fJ6AFcvnr9kaaZpUASRgvDJmb9pJRe5nhD6qtTcM8vfXGkqEmGBJHh1X83SAN23GQkUwH",
  "key6": "3fTHWMAcyJuo9XKKakGbFY1x3TFzat5kf4HNoEqZXRGtfNuBypFayikWFta5i2QBqgtZxyjShvs7iU3bATYtgj9",
  "key7": "qcSwMw2k9sijyUrYYA8fTZKHf8N38joPNUZbcJcBt3wXtVTMLJR24abNwywGu1z1XkahhKxTvsH4D1aST6X5Gcp",
  "key8": "3QN6cjD3A9KdPStLPNTr3vgWUodvAqvKTCSjLvNigAbZ3xTZWrusQi7t6AXuQKVcHdGfFQ8RoMrpmXg1bL5N37hr",
  "key9": "5UCrdFZsvveHVYFRH1gsB7GWqnG5R5PxqkBVyDKuBzgDdtT51dndRmhQsDfDnc2oEoireutXNCJVzz7rZekmTzgs",
  "key10": "2JKGFJ1hYbRsxpJJK211EoUZftNXbEgXHdgkS5z2oqdN1YKNL4VGUpWwSvXqKrU3Za7SJtYYFTVxf4VcZYZMqer",
  "key11": "2g2qjymLhRAN5bpAiQub4NsP91pn55yezDCg1vJLinpCMjeKmMQfRREJxwMKFZxpXEZpuU1hna8r2BKprJjEX6LV",
  "key12": "4YVhTjLGeWg8W58GjJWenXhXLX93kcqX1uX4peqizHgWEpcWMiNfQtj3A9f2Etkc4cxzvLmoDNbvNwLGbY3PKDEX",
  "key13": "3ZBTXDp7WkxWqNoysyTaiUbCrgYw21xpTWMSBAP7va9gS3zq3nUX5vwTEmqiHwfMdPmr24mQW1q24HzwREd96sSP",
  "key14": "5aateHddMGKxnXCQSV6noMSJV7b21UebD6vWTB4mrB9WZYvJtvsWDQBCLZLF5NaLgbW8G398zbJMj6ALjjwTHKF3",
  "key15": "5vjermX4AnHETfKDwqMSDzoeKmzLZYu1hmaMyNtkcCtAdF8B1iuYBW2vf74CCPgKaW1FfJBXPieEufspEEGsyjVu",
  "key16": "4t4Zr4vPkkf43U4zmqetgi1yD8eaGNiy1vv8aPEEXN1nQ3KVTwJ3WP3K9RcvmQv9TrR7fQHujrN4gTmqTrykg67y",
  "key17": "5VB6sEZTGfghP5AN8u4jmP4RDEkYDobqHKY5pTZ2t2NM27KYCwmfNhY6q7UsL8dF9qsNbJM48v52ji72VABrj5rd",
  "key18": "3RtazbyjcicKyERcCEwAsvynvKMFQWP2fb93V9NrLQj6PVj9w4fAyNDScCQMmQAw624WPsZhfaY1oHPoaa8yKTgy",
  "key19": "3UC3T8jvciHRWXNm2vot17VVZeVuosZbnfARstdDToSq16rYJwpuNTzoxRRjL96zQDKJTiTV172KMBL8EeWc7gE2",
  "key20": "3DrCehADf1imQv3qseMRCME4GqkMKWAGUbJKUAvkBF37a5oi1oS6cm2Jj58ZE7zGvTKG9aNt5jP2naGia8XdnZs3",
  "key21": "27d7cXGN6NZwe5ScySX4iDg57588rV4s3qYD4Kef51mgMPF14VpygoTAg9zfxRgYqGNqSLURavyjkqmSHoVspqPq",
  "key22": "2yJjzUjShCMjNKmEK28EfUgNmpEdHLjNoad9pMkjZP93kEXPPgiP8ciN9mT9QbgMWBGVFH3t1w1tQwhnijud3JDJ",
  "key23": "4xoeLLUm1uGVM3bVYU2hS4DUFTtW5cmxC7PSCD3z1WkK6atY4DK1apCgKxHJuCQPTzpBdxBifJS1A8WKocnmnDKH",
  "key24": "3pVTS9wzdppw69NSD9YhRpDrUvA8ZV8hkvFRg6HVRHJU135zpnHW6TvbDZqXzCKTR2wzickHVJGuF28SFA8Jbdds"
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
