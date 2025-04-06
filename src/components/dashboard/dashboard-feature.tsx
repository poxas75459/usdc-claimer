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
    "3LwhdBfRqunFtxvSGQK83hS16ZGirfVw6o7BUVNg4hmKyvCambTdQ4S45sdUrqggP1J8rY5ncvDZ2Fq685mRTpTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vVzjU7btpPYHYyVwCstAx1PPGfytXqxWhYHjFqwM8BvTAJkK4azBBm6bqCJmyCgyiG7wUGgy6LQHZVH1U6Co8KE",
  "key1": "5CNKdyJjsLNk49sSMS5YSLo9bb4CMcWKNVaTFQkeERwkcUFkmxtbiGHRjKFjzEJXocQZyssGZfcDtrbnF9pPXYne",
  "key2": "5RW7SDBLrxJaabZkoYYYJC8NNaSotAAvX9BhLAnLdifKZPBAq7Kgmaav9iiwbRfg1Rt1vFbCvYXt66LC8xfivPe1",
  "key3": "48R8cgQsNbscwCUVmkcKEbPHyNE8zLcek3YNWR6vcQYCUdNtUATNpCDHsAP9dSBuE3oGWAjmdvTsKxnBho6MRcbh",
  "key4": "5XtgYixgDpc8mqBsZsJkTZR5jttC7qVuZtJaYeqKTfPnmKSgq9sLzkKLE6V9CFm9pkfbkiLCfzyikaphTM3Hgxrw",
  "key5": "3dGmYvmehtQW1yAnxGGrsfLzwGDjibitptYoWT4Ndb8zKjfNwxVmGyoGWcJfc82YBYakZ38NsAWU1JMVj5iHQZYa",
  "key6": "Mi5oiih2m5AYLEvnm2QzXohUroubXMsKKKjmoE6UvB797Cj4QwQWvo7jru34FMF6yKBDkifbG9wa55J3yYZUiXi",
  "key7": "4whVrRQTXak7gnAB3pf6dgYnARACcyLFcSjxqJFARrSe8mEMJ11fh8nv5WnWzrnsomD1EmMtmrRQHmDZWrdDVg9A",
  "key8": "5EypyUcbjm1D71f4hjaJ1wMbfemgFrur5xcGyuJcFBQewBAN15t6R33UEExCHhDHXh9f1TpnovySeFVdncNzd3tz",
  "key9": "3qr6bFCad3Bmyhjv39SbQBGuaRMvxfjpDr4MGXDCSxg9U5mN9SMotu4vUoxXphkpBtncinP8oaZ3ihQjJfuCr31f",
  "key10": "3H9mf8J7o92chWYLzn2yCPepitqJLBCdkpFfXU9ZvPQij2y6XkY4kg2mNn31hSBY9DnnRSfFp8YcXsnqcsTgXgo8",
  "key11": "2xwgrg392G7ntwxpiMFF3g6idTqsRsQB89HdSLk9Fv838ZDfarMGLJF5swNwh1cCBm6oXh7PpWNSBt9aEVqaXeTk",
  "key12": "2QsvtxBaioNGBrio5zaRc7qT8NDcYsrPyHQmemghbjj9V5qjept7hsovSUwspWHrRpVmLyoMzVpEzSUnpwiTbshN",
  "key13": "3EJxQ7XsRUdUYh6ER7Gq8aVHozdF6dJPNiERupEZ9tsLUR3N4zUkVNrTZc69HziwYp2sFwYQbtRhnATpxgsZAd2k",
  "key14": "3jowJxXAC78gL3o72LbtZSm7KWnxPb1wFrfUTsNfjQHDmYbEKqS2ZYHu44aHwjWYve65v9Uf7XT2rKbHioVWGg9j",
  "key15": "4SGAjGNQ15xRnVvsTG4qSt6zCarsSWhcRsDkDEMC7ij5JzgLoQbXtSBxwqV4bLFBKzvNkLujQR2HSdn27XyvyoRx",
  "key16": "49zrdPMHMEr4wB3HMLcSMt4kGWPPewBU25kswnNXVeN4mV4fVrjUerRFS4LxSeSzPj3ypQwAfMVYX3kQaTwYn2Vk",
  "key17": "5awBUR8q1EW29m3dUMmiV22gid1vLnZSSEaYmes8uK2ZXQ4uZggTpUDdRbEeBjqQTa2hTKmWGUpDNcgMnGx6qfk8",
  "key18": "4VjczPfTgnhep7wqrtBGZFD8b56Yqn41RE9Sh6MiVUTXkcdDKqiPD3uG1s2W9nkV9VfAin7n7fEStCfWADjR2wN6",
  "key19": "28DJKM5EemzRV5diibAda1sriKtCLrxZ78VZs3rur8s7Sfm6Pd5i2BK9rEphbfVmpvLBhqFbB4w1HyjkK2qeAZjo",
  "key20": "UFC4FHTDLMsPFWM5yFUwNVUqujC4zt3B2RtFvZqNMTvJ2FQKS7Yb2BV1ZY1PrEVCG8YKvZxNTaqjFnWG9HRJDFW",
  "key21": "hWzP3pYAkGdBnrx1aquqpjUfNgPtGSPeyUcmR5ffhCsPgW7s2CSvoMMLaGhM6Yo39JZx7bpWz8jWUJkMCoVMqDV",
  "key22": "2JvokHjUv8HNMpeVrCLxS6EJ5F43ChQ6DgWNFg8KaawPNPkpRSvuVfeL4AQy1A29qghYXJ1KM9XTvF3eukWpEWLB",
  "key23": "4JANHdiw4k4Tfx3fSbRRMxbiD8sjwipd9g66vTDQnjhUNN2PtjrZN8Xr5zAS2GK1QhrnpakiJBhxY12APxnHewxf",
  "key24": "CkrzXkfrVe5TE66kQVwvxFhdvEiMjWbcqUGTTFSEH2QzBxJtY2MQ65mQkCTiRPuucghiwW8hc1WZu5YqafzKR7h",
  "key25": "ToDLed5nf16eLGfsm8BfFWAxiZsYd9frWoS9FVAExNuiYTpn9s6UhuhXn7cihjWKgSNzcL1DeGkDJHJM95ZaJoZ",
  "key26": "3aDQC6TgEp6PhWubwXijRoG8WKQLzZGmVcZxkXQkoqe93t2cqZL5XxZKMzTy8wB3WirSBaZSWTN6TjiiZiw67j2a",
  "key27": "2hSaSEAga7nhnTCm9yFRHS1hVq4Paeu27wUEs5oKFXRiFxTgdEeSoZpoAoMv8NRhzXanc26dg67rZUC1k7cv3Tgd",
  "key28": "3y2HE6RyNdgcGfYcr7gUFd4c15NC9jsMHBxY32KUUmWipya2zpJ1H9dXPpRmcy39kgaBw4i7gVxzMN9Uk6BLqegM",
  "key29": "2VbX3BDUNmzxuNCGrNGS4rMcGNjS2bnU7cEqwp9ddrEVYKcCmCNgUS5HkG25XRDPStsUGPSeMGvXTpCoUz49XtGM",
  "key30": "iMnmCjZHTM6cGJYTUqPbTmEpmSdE6VSBefMx9fgVpmRdWdnfWreghWaWRYscCGvByLThniXcjgZHCY9P3M5k67v",
  "key31": "d26geDNA84RtsVGw7PLseNPypMjHX8dJcWxr1bpYmZYnS5VWLBVK9ZEQPAyce5CsSfEtdTm7Gqiywogvzgvzt5N",
  "key32": "4pgnBB33Rs6LGpGs36pXgqKPUXotwXhqcurSntmuiupgNoHKG9X7yRjB7YpaKhCZ63iWKjVgNnUi7VxQGrNi9pBb",
  "key33": "2DriJK3eKDJhD7ongrD5oxvk7TQwhVFB8Df3w1u4i6pqfomnjGzFid7BUoJanPwxShTD2F9LyMSnaCRypVkbdKe1",
  "key34": "2YJxwyfJ9L935ZHbs3dRAXsvTtjc6tzCUmdCLnXkiJq8kZy9DZ71c6zQNJzv1CSZq5PRdqx6KyQnDo6VQx3rM2Rw",
  "key35": "2Y7Qco5cVxyGg99ScnyYDfYYsJQvcCRAutkQsUSpYd1LrVuxfHfYsDTJcG1e6bCv7Sy5W25y4PHsm2na2UCt5r1r",
  "key36": "2enr2NWmjjEnce9rHLGGT6hK57fNX9fnuW5depj1Z1HtRnGVwnvD9TCr8eaCTEiXa8mJvp5CbmEfTDRUKGkhKu4V",
  "key37": "gjsxyL5F9kZnQHr9JS8j2omZkRVQtTEnTUKk3qZgHM9rih9SVteXwPMx45saBUN8NCbNab1AtjTHjcfwgT25Ld8",
  "key38": "4NddUvcekXKMr6sAcTtBpnnkZ7haih1CgsjYvCuFdvNKWNfXpZYN9uoMQCTqVB2wrxsPM2cM4fnGP8xFsc3Z3GJZ",
  "key39": "54NZvWTrLaDVoEh9txnyzEtM51ofMXbj5Jpn498Ze7eBGsU58EHrs7ARPUz2jfLxGsnjVvidaXYkK4UEWdcrsavj",
  "key40": "2em12s9gDr6hSjuL2qGsRcwjz71aizC68tkR35BbSogqwnqEuw6YYKQAhEpd6f7TKF4x2L6CUwzhrrK9M8muvzyF",
  "key41": "28Ho2gLAfLT7giQ5YREvT1XK4MuBZovvnKMshhWurZpR1JXZU7JSAsoc12NDjqamttcknVL1pvPyhkLXLprD5YG8"
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
