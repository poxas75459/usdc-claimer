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
    "TRTWDEmZnACv3buQ5mnNXbrxQzqKmwbGEWA1XibK5HTJFF6ypjh1sxp47nd7QPPwUhmvzUYX1QfGnHszr5hNdgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CMEwRYKE9JbkYP74cn85JxJtGvhLU3mchbwuCLRnF9V1MyGak8KUnTv6471qU5SNPwAsw721BKfrcvCnbz6fufc",
  "key1": "2zMxVcjVQWPnPcksCHjKjSj7uYPsUSoTju6rDN4cGGUtsZPdkh7zsBooKoy7kvkYMFbM4gCVnAU8pkNRfxm66sXd",
  "key2": "5JJfAad6yUs8jxFSnMWn4x3eJ9pXGTBT8k6G3GRu6qpdGBQdC7M8ukuowEE32gW5SMK2aY8W3ef8NwECQKd7Bfgp",
  "key3": "GxVv9RioLcSu983kHvxjTyhH3cvubiFfSuuWmfjELzUtqP8R3d2exrrECQTSSMoc9vLgJx2yvomx2KqRvXPhfP8",
  "key4": "5WdDMsJV2MBkPnykxb6Nxjoap6KutETPqddmpNXKqvjhSybu69N834Bj2n6Gjx3ckZLqKsnTzC5yBeJAYqfrBD4k",
  "key5": "3Kd8w3x3CznzHCBRAd1ujm96u82LCnvrvfBh83WKpqfaydwtASv6PeRFgU5k7TakCrccN8MRgqqj7DLaXyNeaDdg",
  "key6": "3GkAHRTLgRAVP57qAbEwNJXFNMASkZBbvnyJkTWaUTnSGE4CsNAxL69KshyarkdHYizAhncj3NfypYvKeYJpnZd",
  "key7": "4pF1Xdnkhrx3KHvLegqGvXXoJSag3MxEvkeognht4C5ATJJnYep85PEj6VgtP1BLyDi9iV5tPk2fAGsmmfJqtY7M",
  "key8": "3BkjjMt5DZiaLyfGhDLbEYreWq7JST7yTCUakwmFiDx1LHYVy3CZyMGSRDGVQpxvk1wyihGtE1F8FsM2vdgwi5qR",
  "key9": "5FLXcQFug6q4WY65J3ZyP2JjfMVZnFkAK3iLmGBrURJUmeTBNoPFJXHQ9z9pZo6QvnzwQBWUbD3U8y7GcXbKGiB9",
  "key10": "3CLJmqwHTQDS1Asp59HgWr52tdXgYi3pV48tLqPxksgekmPBT9mWpg4oHNmZbUZM1Mtms38nKYYqrrUVszk54Utd",
  "key11": "2ETdqgcMraZGPFeZJ688gL1En6SrpQLBL6xmAmLTYbtnuwGsAeHrpktAw8d7K1ga5sUhCMof3BzJmjF11hGd76Ze",
  "key12": "2Yah4sTixVfvvJzffrrF4dFteLxVhoMv76h2bB4AHR2hKzrrztSHFJkKvY9UuSihUcwD3WxWxDLYGPGWLFnWvbSL",
  "key13": "2CGycvBVnkLC37kbkoS3Rt5uhQmB1561WvAThL22yFJ87nVPGs8PznW8L9Y3PxAiSKATbKaTtgfbbMwa1AjMPm1u",
  "key14": "96nCAE8AhxpwrNmCehKix1pfQSbZyT77w3u7u3RvEuyFug4PG1XzKrNEMhkBN7oQAWCgsdFdcQwjGqKXJfcFCJb",
  "key15": "wjvgiyjKdAthzfBHhsAFTUzJLyAMrhCvRio2Z3muCUh44ivBPDkzeGq1QGsVFhoruKWpvEmruSp6Bd57jJKUBvy",
  "key16": "GDAp5QBpssrGTrzZVrXcJzV52dgqeZHBQNMFq5rJeupQQPodRz4KNaF8BbJBECDSA9gd35F7jHbx3bqrSKzMZ5h",
  "key17": "4KBzgPT45xqwAyk9F5JTWjJYtMxufEkyvqJe45qHXEpiSCBerrFktj281R67kD3bu6eQhkqCMZ5gfQKjgV9qsnpx",
  "key18": "2JBVY1hypZ9Q2UJX53754Zr9ggBkHQ5u5VzabLBzhcnk3L1GzKgNogAnFmZzxsumtJ3PTTv6uJL9Npz22KkfNTyK",
  "key19": "4yVhZvXRzYRLQkJaAb197AQXkWKPqUpxfUrVMQq6f5S1jwYPnB1VXUXspPUC3DhHwpNZrKgVP8GcnKYTZ6zzTRw6",
  "key20": "4H1WA22GB5HZhzG6t4zth1Mb8uEpncUAniqPY1PBSA6rfVF9riFZCtBNEXKWdMhuBnArbXCRgoFLr1F2itacEkrg",
  "key21": "58PyzR1DjeViAK9hMMYxsNGrhSd2zcxmfbPTEMnu7fivePnqGEKS84wniVYDUZ57CGSz1PuYr2vekswicADkfuzW",
  "key22": "3GBfsn8x5Mw9WHXGRF9p2c64dxUBWYXoD1hAZmMsaqAKToz7Bbp2eapcFTLaEUwhk7d2hcBk4MXU1KjSUGWy3jtG",
  "key23": "2UAcfboUpAEAzToU8ZK3ng9Xc1zUteu4fSuDbM1A5VUswL8MthKHk2uF8bWkX1iqLV4q7acFKuvKjLRqRus3wmph",
  "key24": "2EGv95uvDjBBcteC9zEoVRmBak4zFUwNiGir9hP3Z7TE1szquofmZWPQq51EfWaZPpL3XYTstFkPdQnA4w2JfwMu",
  "key25": "4xXZbvMJ7a2j3yqznxpD7pZcpGvKz9sa5jaQXWLEEWNvC3pV9bftBAfAQZhnEwT7PzMKy6r51h1PnxUwW55KVKvs",
  "key26": "24q8pypLZ7ynQR3dWP1pLcez3VhFsYAyNT7X1Xpku5kxEdukpNLe8jHPXRaQBfkVGRW6Mp4rmJUJhf1c3JCgeVFP",
  "key27": "2F2h5VcdKnRfaeWp9KxRchF3soDTSUvGDpR8yX3DQ3AU3cmPUdwfg7ynAjS7TduBYjgomha1TAwaN44Vm6DeLX1y",
  "key28": "5XvqQFb3wgzHAhUq5ozLzkqpUBhKrhjSDCsmPfS3xHYA1CYxTiCK8i4xh67PZJ4JQtwoBi1bMobwTJu6v6BLTXBP",
  "key29": "5GUt6uWfhN4Rbgxy97v6WPjaQs3JXNuDrEwTHRWNYVjjbJdA9xJiomNGV4GxEhAxA83VopHhK3RXdUhkHKubCevc",
  "key30": "5vnGJDmPHW5iy4Rb3UBsYMinJYVa97r5CQ7Zo7tdJtVQqYczu1dJyHcxzATn4MigCMhqazMsMAqaASXC4zVsijmS",
  "key31": "4MFpBMLqesKzG7jeupajq46bfY8MJenuwHrVGz6819R5icJPwAz2xg242SR9tXYfvhMnipY52nwMR4VufR1Ugd9U",
  "key32": "5N5hyozB9ivJvgr8f6obmr4AcphaKfmvpGigvT9QKzaN737QPygSh2v27KVkoNWdSkhaTMXy4yqDnjPRgZKsZzEN",
  "key33": "55acUrnB3ceuqdV7aqtj1rcRKiVRjmw4N9BWwjGkL3nzBdsxJ3CbA6V8grUbhxGCZM34ba7zTuxVFBf6TeHThKp9",
  "key34": "2uYR4HZY2KZAMdWmNPbj1jmtLqz3vTcDSVMt19XnuTprrKztKZysXWMAFR6wzz9A62N1E16gCASRntnoPbV1yEfD",
  "key35": "3LjLZ7kSmEV2kW8kz4ttvBCi7sjkXWszen9sqZ3exp9PLSc6cFPUXZ8bkxULFQr126uFb1T4nzmPPFQTuyd5A7AR",
  "key36": "4bkoDS8xcBXnqcvc9y5eqZ6Hm6tuN9uLF5Jck5H8CZDbCiqfDmbTX92g6atY5pTeXjyiA8TLjN1a839w2vbA3wDn",
  "key37": "3t9HGomr3i162vpnprDUadpo3rpebFDtNntE4w6x24uLUkLmiszG5usEXHvoWg2GtD3DKjRaxFgfxtRV8hVvoRw9",
  "key38": "2epCAVKCNSftzExqmgsMxxfKzY3wShayL5HEVT4dvvKUa8CbqyEkGUebokZiEPRM9qrsr5XMgrJUMtFaEoJy2uHc",
  "key39": "4jNXjX9VhSJYyYqzQaEaQtQCBUgGmmHxzjZemgh8tdHr4tiARS1m8rM8gdTSqH5xDdL6nXqKpbYpPYAomxxxSvG2",
  "key40": "2gj9qU842jGCxReLYjz58JcKAXNFoDiEcoKwEJk6j6MD6gmZRURDN23De1JcZcRYndai9tzd2FLZ1XhyStPhurzb",
  "key41": "5GrZfGoDWPXkehKuWhZz3ycqSGrALkhEBPMra8kxzqDgS43c4He8VjxogcG7KY7ohnUpVg1Hz5C3TPATHm71JYW8",
  "key42": "2tC4dJzTFRtPA8TpxPsXKk4Evn4mX83eHNwAjmVFS3QND8qFccqa6MZ2XZvoLy5GSLscpiXdM4W7YKMhrK8Gf5tE",
  "key43": "2KBMCmCNGBp71UNuQqDaeYh9QzhPjEBv1nN3Ffr8o61RELNvGLnecoAvzSKLF679gwgmb4ibYyK8WHbkAuhULKzr",
  "key44": "33LPL3VXzbEpAxAC38RGcBaMjbjkcjDuvEarWCZyVkd9zMvcbdMscysfQXPiT788uxQCtXHrgqAqf2T93RifEQnt",
  "key45": "DaoGuBjSK8TvQggkCgRGFLKfBRURvSYrQtGs2jxoZQJAcjAEeogyGdM6gjFcMpJ2rmh94uWtCihHzqrQBfZjwsi",
  "key46": "4pk7RZaBTLKVWQtvrwgtMLZtDt3ugQKDhGNjzWay383G3yfZDQpyaVSP86653o8mziWvgkx21f7wNTNMDv1XMyEj",
  "key47": "3GoXqTuBMHUwADx5EL7pVtWfJPxdYTZjqTDLF9ePhfFpHU3LEiBrFLksAaHY5mZQFT9KZvfMbUkE1CCRKeB8kB5P",
  "key48": "2erfYfUnViLnp1ekUGjSNbge2HQxwqXzbuCabGRGbDPM7K2gx9oxTakoqm1oqbYLAyJSfbp2Ri1qqWswWqDZ4pbf"
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
