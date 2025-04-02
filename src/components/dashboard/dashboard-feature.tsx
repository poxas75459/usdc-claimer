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
    "A3XZ7HaF2M7TvLJkegg4X9CzSctMtmwwhnxdPwwP1G5mfDu665eobnR6BZVwoRMV1SXwvsWH4d2V6XEZUTKiqJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62hnqnBtCqVnGgKVby8BX8M411WPfhg9LKiY8SeaZ7jrCm1kWVguPxm44vysHSdgReWAJtvRSCBh6RBvnmANCzq",
  "key1": "2ygmQjxtMN4VQaQwJ9ZQuTPEBb2vxngRXG8DYNKeo5WbxUxh17X4NKUEGNsHwE4ss3tPQFvi49QKZaEd5QbGCLqp",
  "key2": "2782e7ysP48mQGRNVELpVAXSrCPkmAkgueLgzqFJDtG8T4jgNkMFSXBURXCYjUaHvWo9Sg1JYwXXotn5768w6TA4",
  "key3": "5DiCtrvLS9QB9arefg4xNXfFwqUoNKU4icccow7UhfVj2X6VDsWCdMPC59wrSJnhMMgyHxPafD1JkAV6hAobzUPH",
  "key4": "3FUZea2qpJSWmrMHWzLeqBYNxE3kEDZ8327YvxHwdgLFA21MGDsRJFSMTxtHc3P1pJB6A33FS1oYGKn6DpZsJx9a",
  "key5": "3aPQhRzsJc8Gjd2EF6Rh2U5DAzB81D1y7Y99oPcyGnKoQYkXcFuZN2dgPFBK5g1wc7P4rnczDmiuUYrdQNrz49eX",
  "key6": "5mSrjkRzkz3vGsrmipCDdnKg2PGwTQGHDWCkwjt9iowxvGfwhrRkmGJFjAcazUw34SdcnjCch5uqdmfCKoRGViRe",
  "key7": "5GsSGUjwKTUMpRpWrCyB4yqoYy8pRptW5jtb26DJepFGiFqbvuFwKxhTbKwSyuXsquJiPabGwmJJRod3feWfANJN",
  "key8": "4Vy3mGsoCBK99qYCJ3CahC44U1ehmbQpw8u4G5W9Z6Cx9fLVKTZAYajkqUDf1DZ1hrEQ4qYPpY5yZQLqim8gJnQy",
  "key9": "45uvV9nTVRUd3XPPAgpVYnenb3LEohtysRtmucd5xfqtfhgLd1rb2mn23KRaZ7K1RmhGM6WcsRPBP84Rncf3a2BT",
  "key10": "3BjDXvLMNABpbd4sxf6Kjv4XrTGcm3dr3eSNVPgtezmBeL6vL9r3jL52MWGEAovDRgxuNH1kc4jbiNDqvgxjfQgs",
  "key11": "q8qGrC65imWmZ7puLiZSV2bEdedMv5Mw5bTi6UzVb4zKpBdwYXSkJF2R7mZPYLBhJQvQDm66UYbf3ZFkXqX89Gm",
  "key12": "5WXMReaAPNDP73zbGmxSqDBK9HcjzDVMVdcBz4krpCeZSkRZnapYEskT49v1Ju6DA5u1JoCEHk6dZ4nZMXWMRxJa",
  "key13": "3eU4pgBeiWiBc2NXq3SL9rzjf1WjR53ERr4Mn4mKCWimFUHokAQLNbwRDXnQu7qkqvEBz2B2Dha5Siu8fe6TFB45",
  "key14": "5EkxD38sZuQhC5eXEw4aTGqtLvDkDjQyK2uKPgK3kJSC6TpAZx2iyxT2U7wcqdHKcXChMr22UHwEy9t9uuj8BRJB",
  "key15": "5bqaVE3SUK8Ck4NRCQe8cjPd1D9VkZP6nJeTfN6uhYpnbpyz4u26hZtayosXSEFF6zvLiBvkDf5DYJBnhqJRmRxo",
  "key16": "5amfcVpU8aDXMiJT9BGZ9Q92R5KNn5f1Nm1zwx7R9MZjy1PSn2jJ5mTAdxL7fR19wgMDaxRC7KHt4kKMGaVhtGDH",
  "key17": "4AhijK9S3gc69hwDf4wFkkWoCWHG2AY2ySFtTCPri9AnPJeXPYUZAunnskqvm1jKkAJoNnEnDAUJS5P5RnyfZet1",
  "key18": "cvyYPFstqVi81HUgYaSWK6egfPA78GLiRxVdg6UCdpjorhFFxEWvPFKNmFMPkRLtzN8N7FxbQQBBGqaFNLj8Fb8",
  "key19": "2jWLtv4fALVFoCVmgoZws7Zsoi5AqeVJ5q7RVWpHXv5LqY48B6UXbYXL7UUiduPGtmfXpUA7ZqCkji5jNXceXWwf",
  "key20": "2wdR8BZdAAYZqhPbLhekoTqELVe4b48ge7k2otA2RY1uWzxmmTZ4RPdG6CL4R7jjg2DVwa2fdsyWuJgMiXu2Henq",
  "key21": "udckHCZG9Gv6QP6HmptFsAYFaPB5WBH5yTeRAi9oG9BRErxvsFboAAvRMhB8AJSBhpnHXgwZcvshGSaj7P2MS3u",
  "key22": "2N8epHBDoRbu3XWRBYjgwezZucE9DhA6JCCqwZgJzmAC17LK6qnRZiAQPVjAFtFiP5S4NEDvZ8DTpHpUrhD1YHE",
  "key23": "4WurrpE44unpiRMVAge46K3ScR7d93QnZmPGfQ8GeYhtMRbiEhWLNoHhw5uHFbBrfEGGrxjKVcu6usbnfbcF9J8o",
  "key24": "2X3QEM6mgMJF1SfHoskvkwJXSeGWXWSswe2uHifpbeD3B3zzZDw7LENGvkhLK7XxTQUUbSstey58xR7ZJF3zGvH6",
  "key25": "5nBuU5opjbdwusvXUaEwLWQBpqHLUYMcGcHvrsHU5XqUoDXdepXxMEdXDoTRdpdDKnPgosgbsHJmHnpFkjSPtTBc",
  "key26": "4kw3CNHdsuM4WdKmD6mv1rxdhkwAVxTgXU1Xme6PUbG6JMQ9NzQkozYJQ2CaFEW4AfsdskhJfsgb7drzB1L3nAL1",
  "key27": "5yHYpdsFz4AwNHrPQAHyRM5SCqn5AiYZmdi7yyaLtetg7GfMNSPtyUmFUgYU4Y4xgnemKbdVJxQA2Ad4CZZa6Xkr",
  "key28": "5C5zRSWjtb7hML7XRU2MzAWqVFQrQTvJ3FsKAVAHqatT6REgW4g5PW3gWMyCRj8x3HNQbGsDqnX7CdTLDTmNQCHo",
  "key29": "2AxDbrbD8Wj7ymdwSHJcCVpXorpYUoMvhb17cQDUjeahffbHMEATCzTMWHuGvUK6tLVq7Ra53K64mcfbBUFf9rtP",
  "key30": "5gUfEN1edvuHLYBgfXkwtnnCZTjNXF3AWbp3wJGa9qfD8r3k1ihDp5VDiheNz3CQZERhu3S352s1WykZWe347Q7Q",
  "key31": "2bXeWSJsxFrhraxRn6YpCQrtWaz9qEbmFk4LCzE8toi5AhuY2DFHMPYqdSD1BLaFppUfHCe18DkVujz4gAAD2hmh",
  "key32": "4ATTrNu6tk65E5MNpE7WPQh8e2jQVmaaJf3pX842fkgmcKLBeNTZheNqz9XdNNTqpM8pk9zRBtrV2f8fRQEUo6g8",
  "key33": "7ayRnFAtXYdN8HN17jkVKoyGKkqtyuFmbuSc7vDw3desmrfayEATEZBirGxdTKJ4YMm193jsWMNnZ1Z8QghiWWW",
  "key34": "2da3RdEZyUDPnvXzjA9NNdk9RJ5L1M7eNh6j2FQFAGvBHTLPTJLGTxEUz9Xkt221iosYpgT9XRnezgvNGQezvas9",
  "key35": "2doL9pXnvTH51WM3W2H1xP7R4Y6JjYLWwNd8xYDM2fSkKienGZW1DFPjzdvB1rVfJJFgPzatSjwAfC3uSfr5MU25",
  "key36": "5GXrmDfmkpMBXCmgdKeamZAaRT7DwZfojA5Q9CTppsh3LEAK2A7vwUSt2DE9V8o1gK9cGvyjJzhAegYFyvRFsUtW",
  "key37": "61UrfH7JFLFXBvgJHqvBQPZvPghGi4e4ZYN5CTdTd6Dx4nSWhQjMNCpxburTpa9qEQYexC6tQyt4BcMaWgBWBoiS",
  "key38": "52dLWvrphqqCa1E5uNUKdiH6nUm2UsX8cceeJbumqHWYMtiCU31c2uXNVcDVLRiZzwwuG9kdDp1iPgzSGcKkdyfy",
  "key39": "3pGcXC2PhPcBh6r78gZDRhYdkz5khpUPhna393AmbUZLEX7VhjJSTpKfgUyA577Jbcj64SuCbtX8d8ztuSRTnZNL",
  "key40": "3s7NsghWQD7K6Agsnfe8uoEASS1C2dXebzxygjyZvuKNbSKmQGJeYKHJ2edybCBFcv7RxYqVw2R5kE1tGfSqRuEo",
  "key41": "5EtAmkp5sgu59WXkzZW56Nw3CNPDh9gm695k6sPEeerVMfNKBNB1nohLVSW4ktztoF7UZ3J7jSCiZsWEuQsGDqBf",
  "key42": "4Bce71LKqrxjdKPAD8nb53tu6ei7kTGds45iKYbavCrsunUHBhVJMNyfesvfn93kRUCDWWaS5E9RgPfxcEfSpExc",
  "key43": "25Umk1fS6DrBpDoFKn3QAwX9b5jukXvZm76LBSrx5R7fTfHTTffDnGHPkzTQDXE1SKGvJZJ7XAokihC5fb78TFGm",
  "key44": "rSyQcTq2diJZhsYkgnXsBdrG7htw4Z3Yw95tgMf2y2stStExshPxyRJe9YzJj3Vp1NRgnT35WydL3iGnPMTo4us",
  "key45": "3iui49JJKtD8YtscfKqhP9LP8oGG9pNquoNxCk6znjJZTcqrLUKRwocxE4mxDqj6AgfPimbvmcz6Z4y3ETyWfwz1"
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
