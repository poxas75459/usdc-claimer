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
    "4kk3AjytU1nnChV1ycmGMZRYqzLgQKkasgyY4gpe6QgsHSHAHwQyA1TSiKgkGdkbyuNtEbqb5LGYgDxmzWwwPFKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DFxATwbpvV2Gre76jtMTLf8oHq2pSd2S5cGEKdkn371uiTfpzm5BEFt5WVf7324CFVpeAdxFRz58nuPVkHEfUr2",
  "key1": "2oY7jaDvFK71iLaMHZnBGnHDpSS52WQCEYerq248iaEJLYy3ijkD1ycX8VbVamzMmA8nvKs9cZaMHmMcYBEd2TtV",
  "key2": "3Vqy8Qqp2ZCBQvss4wrjwqBnNULsVcS36C9hHW6ZANw79VomYUqBkZm6vHCdNCY8ACvZ5Sse6JR8VKefEXat8K5h",
  "key3": "5FsvEEi5V2VBfMGxgjCYRE29FWNYLEHRBiU7i4iQbmgc9eYVW8FHKDxayVKknXoZYEAJKv5TVKJpHACnz7me9rDE",
  "key4": "2133MHYz9yBzcKRh5vZD41Mt1rJzeiJNysDjwPqHXMUBJQbHgA1WRw26MU7dbMNhmw62CDMQ356Ac1FpfaFCMTkb",
  "key5": "63wJYRzDg1YDYQFy9UUg4hmazomcgmTiDA8KAAFSDGZQ4xwCCehaUV27JBYZWKzAbCbC8agxtx2iw2EKwiWaCz75",
  "key6": "4v5bdfjAxHBw84U6EJeHhpDUwWgf9Ao3kZja3ziFm8bdfGwkvx6zb9UorJkF9QXBWhu3dsvjZLnLNd4qPeqDkkRD",
  "key7": "2moMNivGjeNNsDerEHNpPcyKDn87QM7dGKnDKVrz2VSesRC4ErrPhmUdgfAKyjR78KMczZuGkSQaVSzcXbpiGRLp",
  "key8": "62Y7qCWFJ9zZ1GQ8cRNqSNRenr1ZeJGYTWMGdH8bRuzdJoZ4pByzTjqBNskhBMxsSgr3SUkspRFKYWiAUECRFkPH",
  "key9": "5VqHGmeeYohudLkZrEbtqLJnm36uNpQL3EiLkSksDSYauMwPNrr2DJkBxg28CMDpMrKj9Mg3t8xyY8z6YeFu4xbZ",
  "key10": "39fyNH1JBXxCjCkQVmPTnXZr3b5vhQpP5LAA2NMggPwjrNvhex8TA1wWhaNMRkrdYjv1Vayk1ieTSpGmMKMXBoP3",
  "key11": "4fswyMnTxAbETTXLtYNAqiYJTpkZLXpnvMrDD2MmjLExfTgyhXN79xMGiPoMRCyfJB85BGTN7UAVxszyfCpyKx68",
  "key12": "4vYM4GNEAqX9jJT4yNvCw4xY8viJVZQxKFyRL3HWTnpKGgv6Lnkauhawu6XMSn7JQCMTTVGQs5akMX5MQrtTmfXC",
  "key13": "4R3TqxcyNtJ11wFva2FZWfUjDz7gnscWzbSfJ2NFGhNiP3asfM2QAdnrqFtsR8TRHMBTs4YXXzsxgCfGcdWLKeVm",
  "key14": "dazD6tfgcnw55WNY74QUpbHA2Yzh4hXC2iy9CrjUR2kzRNKBN36ihLh12fXb1xxodP3NRcNf4nyeRU8RQWjry1z",
  "key15": "3TYttY4oStcB44kzRMJ7FhzhKriF1gDu8AS9CazmZkbc2ySN9RaPrNHYTcWrphN4JDnCYpJByY86WtytMEJrDGzD",
  "key16": "4M3iVCAaKMQDTe8AXKpwSom4arKX9C17YeaekkZX12THtPq1RNb3yN8puTQeyHs4gncSAhBFt89Jf7RGm8YfWUTM",
  "key17": "3yYbEdPzUScLSVqNU58BL8ebEA3s3P5Q8DMamBmYi4jwxMbG8b2RSrKeeeSvD93V7v4tSgAVaWsyxbQy1hVmjBdB",
  "key18": "5Kouprwh79CgTaTTqmdTB6ZXUQGVfDULhBFnD4WNuFjDqjVtyHsFcKUxPT9XGiA6jHSz7AswEd6oPcMvFrz5325X",
  "key19": "3wji4Yx4qErBJHRU2oAU14g8g2MFQtEwQ2pQaHUrf8YL4ML5aSKxqFXxfggtutMon9igALA7AW3L6cg4MwRHHQCy",
  "key20": "2KbxANZZTTneuX8bmg2Rn5VhNcuYEtKMYu9mrXsbLfn2vcSVhFSkuwjz3QDBaQKUj9ds37h5TCJM4UfRcTpiR1Hq",
  "key21": "2iKth1nKk1qXVuTxBasXJhDh9kWMZTDXSqzoEepXLUetRafB9MSiMPnHghReJwwPWor7U8z9r2oKbuz2VxCcwiBG",
  "key22": "3xoy7VhTEvL9Nf2WCJcoczD9zXAxejGPGdEThHJrjRdrNYWFrZEK7wou7m8TmExYyJyLGaLZobCEn3U6xJFPpAdB",
  "key23": "215qpPfwmxzadVDuUJf21wTm2me95Y8Geh1fKrvYNbTGUcbUwJNCCjWUtJExTtuAHYfirFLS6DFBiwrtGS3rBG4q",
  "key24": "5SdzWtwmpD8FFZYFWKpss6oRWzpWqijJT3qzofU7xVRLm5mK93ba2jMeVF3wSuW1sftRMNFXhFQwE8qQ8o7xgNNU",
  "key25": "QRZQ8WM2sjLJipBUa5NHsHzPbz2A8prNwp1LyHLDNa9ffsYJPCshXJ1deLMstaWcRu3FzsXJf8snUBqGijPEnsz",
  "key26": "LTivmJzC2ofTQTwqzs5iK4351QhC8rUq46TNL92BdrRgUcESREgMo26WcPjJUtWS6qDp5nksXoJezFisYoJ7XqE",
  "key27": "R2JhukKmD9fHsrvE5tZrgUTHXmhhE1mVei3ti9b6LNPDHE63C7hRcsRbjVndVswESSdSLha2sZcki8YfZBmXEYe",
  "key28": "4HR4vX8CcmHFmiQUxU8v9vbRQL7pYfuEmi48PAoqCoeTpeEtVUTsBowXxsDTC46EEFpS1daZTZ35A4PdzGs2QhoR",
  "key29": "5m6yRmuyeQvwiwyvGzoeLY8PdJWR2U6aAjEa2ZZVuPspoRvnqpMdUskVXemFJaSxXpADUnh77T1ftg7Z3VuVz5Uh",
  "key30": "2mQ6TosFwe5H1nvRqDourvLEvnBAtRj6er5DnyL7WrkPd98nTatN1guFp4g3dVXc9Kzsb4nnELXbPgiJs1AVbdmu",
  "key31": "3GUBH39PgpvpzLAfRtS9EbLaNSWoAbPepKBU8XQBd4F4TTjCTvDMrZA5z1SMsBWrTwUE4L3wDNBeRoWFAKQs9yDR",
  "key32": "QERFxJuk7qyrfzjijcbsiLrTF7KsEEaqT8gU5Rt5pDAxZcUNdvF1rCkCvozvkB85wmeJKRJ8svdLpJMjqCQVqoq",
  "key33": "5BEfF5fu4JscYp2pFEKNwnbHQkSAUm2RgMXGsmzdjghmqzCF4ri7yqtB9hgEZueBMkwdKDFxA4pZHTHgVnPbeE7V",
  "key34": "38UojL8859th2kztsh9p1dWjnPHrH9wyMf8cr6Uos5QtaxweLqY6QJ7vL1kc9tJqEW61nRB7J3hTwEnVy6ixjLtF",
  "key35": "3CgJQzw3CUVydwwuLWFf3NHDdw4Kk1h6RsbVPDrjnVmh33BJ5FZUi1FmagUT7GFiJnFHvdHYXQn9DboiPxnSNj2w",
  "key36": "DLmhTLhqDCAWPzNyPvinbCdssZHfuSGESbLrk5gPP4uPsd1GFHNqWdh8mdUZJr6xrhCGsDZeQ8rpYdvYFsrCSZD",
  "key37": "GCAW3Srb6ivstKw4AZZJBNCWxfhZ4DhLszh71czXgyWcNVDaxKjjA5i3TXW4MFYMpcYiyxfAXPERX3uME3BiU7c",
  "key38": "FiFQTr1ja3UuZ2SnScNhcc2c2dpTHS6RgNNCkKhxw7Y4BEKvdcZa77P6aUdnp6J92EHQQuzM4YFY3JRwzTXC3eL",
  "key39": "48vuUhU1XHMioYaNfEAwPrThyc2Ce8GkJ4eE4tVQwvKeaDAmxgT1eeL7Pe8NzdcDDpbgV34oAYZnvE1niUzoVGVs",
  "key40": "5BeoH3WLRmsNtjeA5JsSBBjvy93kC33XTfq1ne48wMks12g8Z9y8ATgngXJgxw7sKnDteh899cRWoUUVf4B83Num",
  "key41": "2MfApkAZKn38KbZgDDgwXr73d5k7fJrCoymXn7EgGNe5sQwFyEqtVKbyaHaVoWpQDKdfmUYC2Vj9C4my1nZaMENC",
  "key42": "hyyx9tnMQXZPRc28kRezCk2nd34g5wGf9HWcWbV6SDpsFRCbffy5opdSYhYEYnYSqazrhMarxeEKWeHVyrtPfFU",
  "key43": "4d36jBeBiQMWHWViCPpxZ5Vg59oZ3hPJVVq4RnDSiXGtRvJnjG82EMVTbFpqTPvzu2bJQrAfDCucdn2K8ZUE52EG",
  "key44": "4y3VQWDfVzzwvy1uMbV46j47ReG4FCLvsaY4MYC96Ud5iVA1ftXBuVRPYUS6sQ6nwCFZ2cDTfSN4idspjuZ1jA94",
  "key45": "5VDspWWWmfw8ySmnrJPLxYkHenFcA47VGYH1SuxreTSpwBQdq4wnJXhMpxqVvbmgB7PTztgbtkrRXyGsNP7fvCoR"
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
