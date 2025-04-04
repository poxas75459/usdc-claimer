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
    "2auwWQQ1F4XPmNUioucFFFFnWTGkrfruQBmqTnaEJzeXzFjht3N7DrTbYnexDbV4oQcYkwWpeQRbH3ekkXg33s4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xtSKkqSiBki7P6r2ZLceP4Cw7icPRAvbM5yXjGMrsZSs3Yp5GDfnnxM6CL6JdLTiV4YDrVfv3g9Xk9BF3GgnNhL",
  "key1": "2LYJGQmJ6hY1ckV3mhMxsz9JTwJ3nKGYKbtvaqZSkT4CC6eAosf6TZoNEQcwLUwEx5LLpPkwN2XGF4HgUwBnSSyg",
  "key2": "4fNJWLMzzQBk98LhJSrjq8ryNwqgPnnmFnnNvrv3eGiu3Cu1HMFXFDb7974iyeDpXqtbfQYguBR2ggk3Gyx1GDcG",
  "key3": "4MD26rRSWG9i2SLpxBzi7J73toRmEPdVnZ847cmP8fELcD4sSpiUQYShT2CE8Q7fGaLWygMXMuuWyL8yYaTqkwsK",
  "key4": "2kCs4dSr1H4fRkwzJ8TXseDWBQcVdz4xZuaVzi7UNjTMkeims3j6mQ5gQuVNU8GgJ25HLj5xdCYDgex5itzyrHJL",
  "key5": "51Ek53NvL9C4uK4djX3buG6UhuT18swHx5fPAAYkPAgEXtK4Q4aCJBR5Rxp72mkbiiZjTu6Rch1eViubasEAbK63",
  "key6": "cKCeD2YK9Nt8hP3iQhuudjXGKuCRKdwXid7kbDJshLCtN9kMkdyykQdYdNH4FuTQpgqNUqfcvNmZ6LNo4rNhxaX",
  "key7": "2b4nboktPJbxxgv8A8ctwA63XpFZD73mpHLLboBmh9pAcvQBVd4xmnR3M2uaJVZkar2GCzPHMWf1hudn2kzYQF2z",
  "key8": "4TcnK2jSJMnfGiKXX4jfA8guwhmnbBsCgV1HbVvbKZZn5xMnG7p5tzAMsAvZzeziHmAijx21i4E9RetVpuxQNAXV",
  "key9": "5v4gDoFq6SSMGbjJrvJeCy2wFWQgA1u1A6wrdfgGGGs7uYt52gKRoWGmPCBKn8RW9GB1jecRAM15PGaFvrBdgf2",
  "key10": "5LwS9a3D6Zrw9FQ3twEW3apnByH2FrGkxKfFwJdjuGuTxfVPwa4j9p6pzQ2BDKtvtQSzu5A6nP9szcEcXdsg8eeQ",
  "key11": "4s6QDczUj2whjJRhDA2q862QBCnRGUN27AKVGfuAMWvc9iTakTRKKkqW1qWfRF3cReBgVAudbNZFisk2SdmC42U9",
  "key12": "2UteKfd6Z84j4dNQkeyHTDFLyKBD87zs5FhxSN44kizwpqN1vGj7tzgN814WhGETd2zyXZAZMxrsm1VoMvWFJSva",
  "key13": "3SU8mJap9yBo2FEt3fAiux4ikmNWwdXp5yz2Abgc8uFEcu6DUZJJNHj3Aj9EVeGtKEGdKnFVhTzEuaiARdPRgjG",
  "key14": "63pqHmhR7Ts4qyubfsPSeKxESCBXyhTK9ovsbyaXd4JcwgX1WU6rMmoDSYo8nSmB1cwS8MzfPeUUih9bfVrPsPqs",
  "key15": "29U1kWabhdsCT4gbWSYbBai3Mg3QCUa9HR7y4Bxbf4oKzp4BKd1arkhqKganPUMsCHxg3PsYzRbURprSAPB5XLmQ",
  "key16": "UVqEG7Mujkq3eURHC6jsZwhFgYCRn8sye8WmMG3yown5WuLB7cRoocQF6gnFLmzAQAAFQvzaHiEVX7Fo4E2TG2Z",
  "key17": "2UciuvPvZcWTxtxmSfaXTRBZmcBrM2vCMMFHnVVLEe8Z5RAGtyhipP7Pw2wFiRYKWF8yQb8jQ7XADynC61XdbRrS",
  "key18": "5RjRcKHDpjr7YJGEgAAicN6DdcefXHZx6mfRZfoULxR6dwUcaoS25eqpf6dAodx47qnaymxV6uPK97CZ4djzorcy",
  "key19": "2VJ7H9P9JLWD8NXnxRSiEaNppibio5L4o4deqohWeXCWfTrsbxW5stpG2pxCWBwAZTk9vvz7225gW3SCKiEYszKg",
  "key20": "3UwwPeWZ31pitBMv3Z1vjBqmT7KnXrN9SeVgEB6tJKcMVBhoYZXwh7aVDGDvqodgLSkqpZyaSV6Lm1xU7RnGShhP",
  "key21": "5uRAMiD2i9JfKJefiQfSDD9eYayh4N2WhyQSUtQ2RjpyHSdm3eJ6eW8LtKr2FjbZiHawkJyviM3Ux3sGrkGN172E",
  "key22": "2a454wC7r8Z4gKtzrkFeND7vjQzFejSJebcwzEjJ9t2dDAJUYQBdwYkZGMzjpDc1TZNA8TZFtvtxmGaFkGhry4L4",
  "key23": "2vPnW9PkAYpZQrtpdJA1gTNAXc5h1FyFPg9sqVEcF88c34AzcVSzGJbic2rCSH9FHN27DaWXoNFrgdxcWmjm9vCs",
  "key24": "3Qe74vtNcU2QKQTetexVWKeJYA6dD76pdQpqmHyx1vSbiUQur2WF2nDLdzk7F4CBJkj9U6DbnvSXWAL1SwkokUiP",
  "key25": "DGW2JRHKGrPmejSv7KYvJPYGBQJnXTGhKkCkMfsd4jyw1X2f9CcmqiWfb9mMy8U4iHXFyWgYvEU1s2T65ePVH1J",
  "key26": "rC6yiSfC3VzpdmXjLPPzUdK3dfbVMHxiTNAgsa5AjJaErP9F7KEwYHzVNz7CggnCBDuYPKCLxgEivs6sZzk6tvZ",
  "key27": "4bERA4JYVkBddtwyeyZEP6vmgQAyZhmehZkZmgbcoWJrb8nvzYNGKJ2Rc9rQUWC1SLL62d45rpRXmoLCyach6fHs",
  "key28": "2XgXngdM9kCb6c7sBgaMxoHspUcM7K4kg2kdFp9QhU29u8qebT77QhkypvoSJVWrkisZHBwiAy1YMuP6htGncoF9",
  "key29": "4nnyBGzVMx72GfRFv6KcdMm9g8zmXEcHjPuc9Cazm8xVRKvYP4d9EGMKxPuXA1HURkL27SNwBmbGdUWNR1NzxsfR",
  "key30": "5yEpzHc4VBhkhnMPyEnzmQ7u7294yb47VCYyiqGBmCQvukrvtnqc8cAdooC9VSAnLNV7UW5uGDA4jrjtBved8Muq",
  "key31": "4ALQ3eaDhsktVA8KfDKKNzA5H5hbgPQ4E4Y5jLGM847jsTnB6NqcyyxUdTSpj3wTXLLS4gciyBfM5BeXTZMcjhAB",
  "key32": "2ZnLsFtdEKAS3wrBHJDSZYSs5YhbcQp1SzDTxmyBX2YEVEq1XgDnJzyingxqhBmEsouCVNV5D1RTSDNX3xvKn1yS",
  "key33": "21VoDP6P57w9mxrdv4ZduGaQKBVBjjwtbkejGmHm6eZWMiqmp1n2vyH92ibneKZYZK7c77VnER5R3obhm1Qrs2eM",
  "key34": "3gtSi41Knm7Jtgs9ECsUH1htXPxQTv4c8Ve5Xbzcmrsdo3soCep5PSuBfVFdh8fky5KiBM6hpCqEiKzZScRUkBiu",
  "key35": "3FiMo7wSUQJV14QfBZUuiGdjYFvYRmBp4eTosELrEjctSK95apRaDQCGZ9uoAgMA2MUCd3hVJAh4dzSHK1Rg2MGY",
  "key36": "4YBvR9L3tx2z4sKhgFZdjAjEK7gecRpAurUcS3yhTZ5YiW4Tds7cKFZFBbEgTCy5foSmAKCAvwKUCFQidL6ae2Ef",
  "key37": "2HZCz4DJ2EN7s3FkjCW9WraS9Hab8yGLsE28ynD6VZU36mvdRAbvtq22peMqfFwNcq8y5xMNXgF3xqhxR4vUMmDB"
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
