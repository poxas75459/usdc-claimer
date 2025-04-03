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
    "53g6z6iXUXAtAaBe3tzo8zscSyt6ifGCsrduLmTLP1FFM3ytkWCJepZH1vmUJ5fg2q6XMSViwmDNz9G44T1TGgAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TEhuwFnmmhCBGaek63XpKGqWkV65veNj3FosTsPjMfXwroGCRCejEAFMt5k9jrC6aEXgs7dxrGVohtqpEPiLurj",
  "key1": "578o1S4yjD8RBnSRe79X6BLXoUGy6bUBk9puevCMpwZNkMg62wzsnBAyuycS6YEFy8EwVnbn67GTQ1vVNriNmnuk",
  "key2": "3KJ47LWMrFccQkN8r9REYiJGd78hAGWomgE2TyJzdKEW7UJ8w1moZPqGZyMTwAGqyTN2DvgbD2RqbuT6hqzcnYWB",
  "key3": "5pTzZzb1nhxSuSfAGtE8ReFwYdGiLMkmzrX6SwhQoAxZohqNLuPg4WPc8vFpndb1yDnnWNceVWJqQ77PkQzZQoCF",
  "key4": "S9c8EQBrygov4w63BpNDPuuoH4WnAVQnVuxWzATTKDzsVvSvbeKAj2QqWst6kRPnW8Qbqbq8LhzFuVMFoBasAzi",
  "key5": "32CtLR2RQDSnaNddknpNMtyRFGgDDn6ieHuVZeZVonGEJR4mdraJUuRjS56cDwXDmc1PuKXqPnvmh27hdAnB8rhL",
  "key6": "3Gmbrg9ZzRDh4aoRDbS6gXfP5Gbkvs1wpug9KtKMqzjshbwBwYLfHkCKR6QCEdaFbumrgeaQXiNbBDQDT2mcY4vo",
  "key7": "2Ewhbne2K39Pr2P1W8qmTnxffTwjHNjJgW9Zin5MWjdt51mWbstQ1aCgNRSzFLRgyan2j8oZkrecusBjSaRgVrtg",
  "key8": "2L5hx6448GVrtvPUu7dYG5cgAkk4rssE7i7w467RMGRsSS7ZK2HMcu6RdS37DBkjU5vze1nD2AmhPbGVoahG8PT9",
  "key9": "3NCqxFsMRRiZkQGht1vC1YCkVGBCQjyom4rf5QYHrnwhMnW1hVXFFHKLYABCMf6BwXqA2xBjTHcTXpLDf2JTbbYk",
  "key10": "VGBPtJqZvZ23kAEgVSUc6nuaByvPyfcSGHG41nhbrWq3qBK1NJ1vjHaGSuKnDvLJxq43G9Ne1JpAwdWaKb5UtMA",
  "key11": "3x6UG8YvpmEwsaJv7Pa4E5ThC454UngLafEXB19UtkWXtqAhbG7zTD8qeKLYysFv7VLfu5zUgDSEZUQQWyNKTsnb",
  "key12": "4xgVY7CAeF1qBwzoWNACFUtG7cokwPjroyqATY4CQp69betb2JVeRhkrM32BGGqQ2tyS1pFxMKyUi4cjYDD1bEFT",
  "key13": "2RzdB4n52YAEf5hDY5k5tCbWZodkbDhgdg3dTteWmuZ2PPMhbcpnV59GeWUQeuztCxuLxsxmXQXZ75QTmTSPP5h8",
  "key14": "5zQUjEgGounyc3bVHKRfRhnmA3ar3fgDs1e7Agiv6RYnH5u5rTKsMDwzFWkYnoBvFF1RrpysA6eKt7bRbtP9pWre",
  "key15": "2Vn9a6bofiHBi6bum3UhdxyJXUkeim3tKaecE3xtTcLeGLxPWZ4BFkhgni8PEt5xnDM7u8X73yLpoQ13UZ6h46XX",
  "key16": "41DKx8rCs7J1YXpaVg7XVVR6KSKxF5XQDwfpbroUL4ciXZQPJ6uNKAmTDfvBXU18S99kwyXANQTMitPB2VC9gMMg",
  "key17": "55Qh44Yd2cESHfv4rkUGkuGJ2Q2eEQVCvYbNiSrApsdRZPh5EM1EVnuUpqwgfLyZ9WnVabExzhxr7kvQL6eT6WWw",
  "key18": "3bHZJNcP6y4D5QvmnCUcZjLDjZAPkF54jiCNrHeCv8EEzNsy2HU2Kb34ZWFyxomzPor5cMw26Deqkm4TgTDVLR1i",
  "key19": "2gFTn2ZMmfPfGTTMV3XGX4u7bDTA4832mPsPMoV6MgryDYXP1NkAeVLtUP3bgxAGYbkmJFCbFiAPTRyUAzg41onD",
  "key20": "652Zbp3dcgLdhKF9v25p5earis76N9K1s1K4fWZVkWJYQBUx6wbPq9ENDfVGmJ7Z2YkVK6xWNzYJcKoPx2c2PHgC",
  "key21": "7aZBhrLAy3Pn4mBmS69Lx1s4F3qGmpFuhVAWX8iDN2o3N42zkU9xEB3ehCW2EPRyt9wAhZskJMZnHnSMFBkf8gM",
  "key22": "4i54gsVTTB1Et39LxUcWqnZLGuYkBUL3brbjViX16fA17ZTocVsAEZMBACDNjDqUUuUVZgBeDVEm6peK7u5jxRm3",
  "key23": "3fsR6mK1FSWZzY68SsrYt6TmtcgU7CdvmQACKNqa5p6T8esAkJMADnyCnQrqEVZeF1mY5z52vJiK4yb9m3v4PQ3Y",
  "key24": "3rYSzV7LqRSG89u41PyTTiYYqw2ysYznjmZbmMSGswxtYgp6BxUkkpBE2TEuhgaAR68FSpEYi2s5Cf9P2RwKKqVV",
  "key25": "5vYUnvJWK5haKgjFBihotMfEEhy3PFDBxV3B6Xj9vQjfUkQRR797yXq3yXHyQRvLAVqHyFMVTXBPo5niSQLaiwAC",
  "key26": "CzqFBwyd9q4y5cc3dahtsvvEfzJiw9HYF9Bg1VSqv9u1EmbTeSBUkgDNxfm6E1ymH1P169h5cMEQCopnfGiA9c8",
  "key27": "5ARrUqmZ7EobAX1ZM9d5dFPtaR4WJg2gojUjeT5zwcgwigr2XFAXybqNULtPWrnL8rFVu5Sb969CWGe8KBJXxXxy",
  "key28": "sC8HrAWNtT3ADxKmkSBGv5aEpgPKecpNaAuPCyzgMnjWq6s1DTkUPdsshFLr3uhfUewePHRsGH9Ffxye2cpPoHD",
  "key29": "5oUXDgdUzHRPqkvvV676bPNw3YphH1WPLnmsCM6V9PdWDku93uwaWAbB9kxFTjWKmha1qhgfB3bYRi7gjfNwtKGd",
  "key30": "5uPfatwrRcndpooxb1JMAiNqpNriwtqZaXBuDmxC6FAJ1MuycdchbNTAH6sCmSeY2cWGK7VaaQv6rnSYM17GT3HX",
  "key31": "9NMgazjMYnfjQaBGjSaMW6M7CDbYNpU98tgc2YyPM376wpf9MruWxyPSsNSYUysCJP2gKEEy242BqVDiiNzMpWU",
  "key32": "24yBovUPA95UzYJQwJGWsGgrqPKvySkQ5GyktLP2JbkEYVa2WB355Xpv881WGLu8PoGPwaogAqiGDF7i562ZrCej",
  "key33": "3XCJKaN4Hr47fQRceCJQrBjjSwtCpguXh3FRCd148dXjs9iMJx8YCGBW1LQKAqDAzuSKR5PTZx3NEyzsUeoLncwG",
  "key34": "4AMtcvBS8ysY672XxsZ3QRKDXLQu378jzMUdPZmYWoj2evwSzwn5cH8h8RVcCi7RNnKX4cEqXa1Zmegr4whKykrX",
  "key35": "8S7oLs59zUsAYSPk6PJEsApUKLybaFusLd8s8ycPjzjCAyLP9FVuRHJDip8RERfzHhnDjLP3X2PzikFKvk3zG5e",
  "key36": "YaJi4cp63sMag1h1CzSiKGKbEncPPYpwwHmBzZ7NdhWkkTB3AugrBKhznL6NrDioSw6DQayXGkgvVYrzGTLCdss",
  "key37": "GsLWJNTygQJvt9cojgrY2vpHDAsWS4dqaYkowiaM9KAAWMTjyh6ggvLcoCgKUbuY6Jr8nBcXEYyxF1NLd723aBM",
  "key38": "5qZnUcqogZTpSLLu2tqW6c66gmcJmi3S3YMea5zBrLwA6AWsLjyRnkwSJrosLDmfjjzf8RXrEXfXriwZFh7FRk5c",
  "key39": "2S9VWfW5kq28aEckbvJme6qeGVYncPTtVTD2YZsJaTYc5jVe6yBzFHqicPn8c5ebUPoLqWwthF4VjX3UUfMBiKxJ",
  "key40": "5K4Kx6M65d7RUh2BSbp5TuuTJqNE9VGeayafo8XAUkSjtrkzAF6zJdAgvTkJ4kJHhJxcwNXeCTo8x2L6rK3PmSSd",
  "key41": "4t2C6uBsTfC4xCHNMPCQWit32cN3XxyCLqXrx5xBna3SHJZTdLP5nP4BYxo4Wdr1zSBpUQbivvnB6mRz7A9KUK1Z",
  "key42": "2yWPpYvnLfMkZ4nz2n3fM8ZkV2gQPB8kNbg6UKRa4gpYb8neAQCJ3y1svpJSRQTAgWKYjXUXGENRf8VpFDgcsVLV",
  "key43": "2vxSnj7cUgfwrZp3kFNj8deLCtR23TUKBVPQnw4mExmKnAktYjhjntCWt8yP2c9G1RdPvTXo5sGG14WMnArSLBzM",
  "key44": "tea9eXXbw7BKkN9nQLiNRi1rDvBsj9Sc5j929u9Z1vTNmTnA2Ft4SAC6RvayicbvzCeFAk7LNpNnSLi1iDy9CRy",
  "key45": "2qATSfgqk8JdLfDQQsWKttf9fuDNX9qNVZwFg6dWFyod2vYKqsHYQBkfr2ZLtMrMFYYr8gSMb7Yhy9sfe37WVPR5",
  "key46": "3wstU1Yup4we3xeL8sNpY7rKWVh89qYz488iZZodKmXJysxcWtT3KNFw269hfGFUVt1BwADPXWBYXm5qskkx1a39",
  "key47": "372K5rq5n9J6mpwLDhdVoEvSPhaHRxQ5GMkM6rsYRAmZfQsWKcZbGCmZVa95JXoMBkNU3FFeiLgiLEDyr3AEJAH9",
  "key48": "2GaJRNcmuuxoKSv4qBVKoi7WuCKH5QUCBi77y3EnoJ26yp5HxXRT2pjuBQPWuYjdd1C9fSfWNE6wCdx3UHsULvZK",
  "key49": "hstYkxUaJaiJjqCAYmq4Rc8RvdBXMNLxwoM1DGHFpLF6qxRg1MCjC5HmtuRorxrW1SAhhzQfsoo5vnwXKijbVi4"
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
