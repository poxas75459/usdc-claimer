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
    "3hfv7UumGdkeiagmTtZdggoR165Farv12p1CbmdMo1Qimuob1N95RmbQtcg7M8MiCSxo6CeA1pyMcvapKPQX8f4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TpWfhiZb4MEu1puu1vXtSisK1g4jgwgqJVu6zm4zwKvcKrYHrznUqXm1pnekGUFBErMgMZKtoBUhtVd2K5H3XJR",
  "key1": "S8iZFb7Ln4f6H5y85ZrH3ZAtHhuu9uMLAXRQVsTckYjadG3WgXNkckqHVYoJwE9SWFivAnpxjSfCMYd5FqSJ8K2",
  "key2": "3R5qpJAAcQhyk6s8sgu8YHNZo8PuAmoZs3DgEftCsC2ayqhhwtYXtmfQPGh56m4SvyaB3u3xffeiFLkJuwRtDFUu",
  "key3": "3bSo3jvkEy6fSam5zTFJcxfn5GvoXF2Gtvf9gWfgQ7TLhcPUDH7vEzujKa9FVHvFH5EJBqwx7hYaPh7mWASjira",
  "key4": "2Z2uj83B7ksLCHUgBmjdpFkqg1jBNTocM8JQo1xWdn8u2DKoXf59RTvC5pYaosJP8d4c5JNw9f5h7QSQUR5oaM5w",
  "key5": "Ff887rqg7CEjJBdJ7wKqbuHNPqFG62bC9SbddXGsstrj6HoC6b9Km5TVnNLgdYss92R2GkXBpJeX6esh3LesuaW",
  "key6": "4pW2TPN4D7SDk47DY7JQtMeh8jWQBdDfWXQ9stWC7xvY4AhgLMiR5XHqW51hTRcLyPwPh4YjcKjG6AUfgTiUWmEn",
  "key7": "5AbF6TzbzNHQoWTd1m9Qau6hcnCgzeKC3eTXf3mzXEebCS3qj9BsPtpdc8sjrHnPQ2JQwQPTR2aJ34dTTjr3EdEK",
  "key8": "55FoSyiT3FGRBzre7B1KuXTRrKFYv7xaiKWReYdgpF12zEJNs7cVC4zr2FNe4YdwUmkR6xVAQ4J3Bu74t3kBDVEc",
  "key9": "3pegs3DT1bdp81j53KvF5HfPFuFEKFrCYcancQYW82fZbcFbDqZYcnAHxnu588LVAGG1uLW4Utd7YoHsxCR6yCL5",
  "key10": "RhdsHFusuJx9dd8suNcERGJdgE2262xDLbACaSWtozTbCfRbjRELYg6YvznV4MV27bSaZh9Uatnc3aXHaRLMff7",
  "key11": "5DVBBH84b7ZQ4LuuuQdPd52BehVz1fvTVnv76TsfVcd7eb2xw9JXmnRwiscadEKmwsXMEA9sQioj7bmEszqqScq2",
  "key12": "2H47KZUT2xgaekPLWnvPDbvsm9AfidAneAHXsPtuKjqGQMhBis6cVuPGh9hkovymZHaw3vmw8zbStytfeta6QMJ5",
  "key13": "YjyQozKfeMVqEXHvPeLmDKjT1htrcqJsVDvws1r68zkaTddfkWkUicmn32TW3UpTY9i7Ls6859zFCZk6bvEysnX",
  "key14": "4XVyoq7RgDUnfQEwowsiKiCEJioxbCihbestTFrkZqimyDAQfVJmomXiLA1dbc3XX8V2vWeDZxnT3HQMEd2sb6Eh",
  "key15": "5V42bCPDoZwEWvvyVh6kJUYK1Qfo7mt2DgyFxB7yd8ra7vY4NFnLwHkKuVxntXgpTNpHPeBXHFqDX5G1ETgGXNyf",
  "key16": "gdxDJiHiV1ysqNki8xZk14KVqZ6HxCChh5HbCXUo7rWFqPYFMQ7xDqWvVWXXZUguWwzS6btuJehFBY7HcGh7EWv",
  "key17": "GeM2eYXVNRNbG6xCfi8Axx9MMBMjYXMv4R56G1j8Aez3bFrUP5uMoEjDc1Zg7mYn7HuZJNsSfVksX7Y13Rr4XDb",
  "key18": "5aJ3itbPo653vukRFdn7WzFhxVY9scHSXrN8paQa6xfiJCeZoSEosB9FR3UKZk5mYasFiMmigfAM1d3goJhzBVsC",
  "key19": "4HsJUePjmj9ypeaMwStHgvbk2bTaTEGKFN7QWZFjpVzbyAzMzsrDn4caoxAF57HsCHNvWdqcHGsanKSzkegarGex",
  "key20": "uL5G2DzqpeGUKekFGunWnG3NrdtMFyQVpsSNtCaTZw32XaV2XdNhNCeYMD9KmngCcAo5xDds8kXGt1fr4SpUDCo",
  "key21": "3XrE7NH9K7QbEuGviz7yMZJ1vf6awnpZccYTSxWqR7noLN2FJviLTi5C92vxmY5nhx4b8vmqnvQQb7tTpkYvVYJu",
  "key22": "5bCzpXpKxt6rbc9v3aDJZT6hCftgj6SxGfchiH37uhnRTzGU7FoSBUvHKCVKAizVtJwgP2hy1QQri6uc6gDWujvw",
  "key23": "2usEFg8WN5DAr5vKmefgGBVThHVChJ2Fnoc7cSb1mueC1jJXGRpmfQeRJF6t2PMesDNuuiiNbZggkdz8tCLgVNC7",
  "key24": "29S2cxNyEimJFkhqVrgn5YCABrhiv5V5JUkEzm86CN6LogydGRnSs8mGnAPvetWvoZ2ZPMmHui47TBaP7etP2afA",
  "key25": "2JFBgX8QPfjHL3o4hXpteXB8fxwNL1uNqexjWg3MWScWgt6iTujZNLbdhj6pxnoYGnQvgkWwcYYMLFuXnz82KbLh",
  "key26": "F8SgsaDHaTdLZLypcfgf9dYsgVNUf1CrovQGiM4kxK6QS19qEcPZxGzfL1r4dXmasMeXCJwjutQAiv5431umku8",
  "key27": "5NaWUmXAu1oHjBTDDnzSw7uRun2KEmSX913qn77ygVRkL4daQF5ZFQL8Ziq5QAiGLHCKetj8KzPYXEAEfZK7AnBD",
  "key28": "4iXVgzq5qREDmA5A3ReaKE7EcLubzESNgHt2B71UbwJgLnRAr1RSCu98NTYuRfq59ajXqHhjkk5RsgmXcdKW1uNV",
  "key29": "5ZYKxcRUjtFQHgDKsnDKckjUpNNMnVy7NEbLJPwC6Avr4cSBURCpnvazaNZtdbMuXhip9Nkwjrpg99wgdJyDFZb2",
  "key30": "2PmeqvScTqsj6Vz3Z2FFAFRMRddJTwM2VpSHJWnyKQZtdSZ7qPhbQ2c2sDnM3rgJDQFyn7VMnpFV1QxkXDw3exUo",
  "key31": "A2e5FaqxmBgtgnfmaM848dr77HsgAUGcCSdfjrtKokL77axgE39NhVw9sUHFprrkEFFrv43FWCfnqpZgMfVY5ui",
  "key32": "3MjpvBbwcVbbSyxqs6ZbUvgJkTR3uD21rJ9SqWUqdhTRUR4fcgWEEWR3PUCPZGyEhrTU6cJdEu3Tc8g8Hzp3MSAg",
  "key33": "576P4Jc5FLc4vYB3R8CLeSurf62pPPyNNJHBXMWrTLWPvc19k7SkQbg2CehuRvKxXBZqxAwwFMnKAFx1xJMoPKxj",
  "key34": "257nto915oEJSWHvyAAPTUKaaaG8Y1uQvo7ZHUEAJF4BCyDXM7MGBbyReqXKdU4QcBvrbf9UXtB7A4L4hScRjQys",
  "key35": "4MQ8wzGgQ4eDvUky3f4xfTNcHR4mT4g2cMCW3j4pyeXe8Eg6gCddmam96EkLm7wmpgHarESKPTwJRwUcH6Hv6Gdf",
  "key36": "371YRLQE85GUveeX1GNW7y3AbnCzhfnFba8eTRfEL9KnQ3XFso78SaVWt4YS9v5mm7XirB7oFGmCurGfDCHFQWp",
  "key37": "4QAwVJsMEpxixpBM86FuwgpT1ymuaNxaXu15UXE44Qrp7Ub54hGPtyD1RLtWXpGbywaej5H7abLar8DftXmS96tn",
  "key38": "2v9BahJz43JKBQ8WdP9LRZyK8bTtgjpxjx365NTALPMMdndFpSmmFrkVmrn4abM6XavvqASUbtheuTzZhFDbnCMy",
  "key39": "2RPZggwtForakxg6E2AwexvdfSXDfE4VJUmykh3k5J5fHyhBXDQV69LACDdtG6LZwCfXMYCd5q22vyhpgssubQth",
  "key40": "3DDswRBcFbqqe1e3bwsPcxXZZEzGAFsf4JGJZ7zPCPaEWFR5sX7mmephx2REEhs74S5VNqLbqpkf4xNTBMDvuN9i",
  "key41": "4WEjCxcQr9gCnZhRBPGppFY7YzC5q4KUaEgweRrijEgWeA8cUq9FyVwN6QdrNAYtunE63vGFQ8gV5E1cQPPDDkcL",
  "key42": "5hNzREj4bpxqm8fVUfWPum8mLq31bc1PZfjy11Y2KT8xojQpcdenkKd9UBTwt2iTJERDf3vY5zs9LKNhhxXmb97D",
  "key43": "2RhhDY8B7GLZRc1W579hzTu9MQpyNmCPSYrMj6wqan7kyVLiMaaGMH5UJBJ5Ev5f3EFbgXSMUsqKau7hYicBGiRL"
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
