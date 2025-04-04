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
    "2LYMULfPdPS85AY1FbZCgLYZ3NhYy2UgZmWydLekJbmFgXNq96hyHPkP4axaBHBySA3eENhMnctqboFJawW5K6k9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DiX57eE4cX75N4x5B17RP4VKxJXLNHBmZYB5Uv3XR9UdFBvVoBrwzhor47rTJdQW7U9sdB9CpdJRo8TuZcAjshi",
  "key1": "4aYbSstFiPxEuiHuLvgUTRAtk8V3ECphnBfrfZBiBUz97dy4B7ci2PhHNJuUZPAzREVzXBAhvGNrqNsVTxwEZbnb",
  "key2": "5EovrqJKnsRq8Ggsz6Nm66qwN9RYNUoTfP3xY64Ceh4Fvt3Vi2aZgBePqjnWLzPCZbfiCtiWjToqfEzxEAUTae3c",
  "key3": "XSBaYtyZVZCxZRTDzs9WCWKzNebQiZofKrpUN5KniWpF8Y3EACv17GF7BzFUg9ugEyMBU7PPrq9hQxBfn7CJKYy",
  "key4": "35ZsXVkpqCniEfftYGcF4aBFRUyn2EsfUdJtTGt8Pqy29CLYYe2xLwkUr8Mw5ur5hHRuYXGAE459917KNWUg8h3t",
  "key5": "4gaNaJahMw3Hvu4ThYQcYy5wVjRGytDoRX2KJPQo2NrfRWHeqzneYsdkpX9TRVAHmxwWA6jseCG1LueHjAWbjxdy",
  "key6": "5KiuXp8NpUj1oEsYfcJH8eJLkLUsNPAHf7F8ruNz9byH3Kmzy9Em75z6FJyKGrgbE1qxdq1XWKsGVAkQ4cjK7hUD",
  "key7": "5pzvATfXXAeN24UEQxgtx6w6gv2MVKGRk2HZJhgfHLiJpSpRB9Qgn3iMiZSwE6C8Mh8EUojAPJBgQHGidPeTNSwB",
  "key8": "4t8HQHA7uB2Qb5KFvo3aJC5N9XAgi9kEW5ZcYTX7xNSdj8X1XLEjhBTbPvAEYpdCnAx4gVR4wMLkxgr7vRJxLrUv",
  "key9": "b5ZLrdCVY8n4uCmMGdJi1iLnb5eYAfQmZfgrJv6aE4DsZWBt35bxeNjZNC419SZMQzdw5ouMBfRH81KNJ6JZxH9",
  "key10": "44gnLSp6mjDedEBNAMQCS7K9CYDCvXAgtk4bu6XvshorphSpHMgzf5ZLsCHQcZjVGZTfYU6t2SS7kpPwL975f7Ad",
  "key11": "3cnskihcP6SGrAE5NRGyP79BKrD9KbfASyz4xsRcB1iVyz1A2rNNsJTKTiybDoj8n5WMHtAYLaA8dYiepqKKjPNJ",
  "key12": "ZTBEWYWqcPS3nXGrWUPKU6sDgizfszrGfrJSpzaFRgCnvJ5F78WMvtHTedxhJ95egTcjfEj5gkJSi6ZHW6Nxoxb",
  "key13": "3qKf6GNuMp4D5tPUCQ3PstQpCeCWucaTgTcD4xaDzSnk8s2TxsBAThNEFNytkXe8r1HdeqYZUHGrebj2TGQLwf1R",
  "key14": "3zzhgbehCV3eU7FF3k5mXsfsxWi7dQ8Zf76XCrVoBPonNS1Q1Yb5iY2W8zWvZgmHD2wrmB8235VQjVSdXYpComQe",
  "key15": "3tDpmxCN1auraMWwLH6fvhZj7os4uwM5c8LqKJaoeRAmPfHiiSNdF1UVBeaCCM65GJV1rX3si9gixfGdBKaygHoR",
  "key16": "yeGbE4mJeiWMcXJKk8B2J2FpNrTQSZiYnA3KKqtNCViYpNk3MaYyVKN4y44Kto1XgARKwsf8ySgxrcrT1QJwP5x",
  "key17": "Kk7MDHraEJEYL645Di44HEtKTw46yE4NaKJ8MyfTugsQPnAVB6pnQtH6LsLvhrpC3bbtLnjoFSvjq98jkFCuAou",
  "key18": "wxT5Xk4dNxpBVaXyg8nQFgqBm29YiLv2zrrWp6KPyUJnaJnVit7S2cTKzNmmWkmtThX5t6TFohNgqLFy7J2FAxx",
  "key19": "53vzpSUaKUX2FKA3XeEiBdUtmBkjsYaQK4wTd6gvRz65m8WfpYEWeFChfdzr3txnovhypfRWpCrsW6m3ft3vjrdk",
  "key20": "44f8iym9aEczjUVwT8WPe7D32wAM7VWKcySjrf6h2zJJhArCFGo4Cc198c9rEfkz69y8jFqcMjdwvGtHWMWm3h8X",
  "key21": "5vzbhNuSjcv5BfaWiapgwmpn3btUea8T4H1jW4zN1KsM3cnwPNQiGiawTpsKWcMRhkDHRf8DubtM1bBiTR3CDr31",
  "key22": "JZiRzRU56MvEKWvVTRj91TvnGYnfq7oSoa8tJqq2DfJzZw9cedHp13cvyMXJ72N5btsexRMaYdgaRCNJyvXWKPd",
  "key23": "41bcHHFKhZEceK3i3v4GwV4qZD7uXfCnRwwctc9LtwBfMweJfAR7XV2yyZ4jojr2xGhXZfn1ReNspATSJDLs72Md",
  "key24": "2TQcP8vXmrWnHAtpKJGVJrYzoorbx2oRMPLr6v8udknGRmqWcZceMzPTUtMg79CqVpwTeCXZDzAXb7t5Z3hJNF9D",
  "key25": "3khDCJ5UPusDU5qdkgt8CThTwqUcjp2SYaxeSANSpDrUwLVKHdHwufkSoeXZihg8qVAFoXN1wTYJsKBuYE7k54yo",
  "key26": "4GNMKC3ffxxnWQBck6CsALzjbb6FB3SJ1KAjAoeoEwdTSFCHbEDiWMq2cr7pvTjv8qXWxee1Unmr4pJsmfxi3pAo",
  "key27": "2LxA2vwSZU24UALzRyXxDA2WigLxtGBrSweyDF6gHeUSWnyLLxJ6CR1hUYuoaKdW1GBzTZStSRJCfhVzmFXfipJm",
  "key28": "2KG9dyE7QdHKnheZau26yt51g5EMBF4twheoYQ1hQ4HfPtsZw5VhCpf8DAWqnQjBkjRsc21ksWnRqLScJmJGCwED",
  "key29": "2WZUCU3DAiYKu69CcLF38sbGZ8H2Qp6P3byrTmHqw4fg3JxgLjUrgjbsSpbg8KU1STXRujTXh2d3VfyvfjZJUVXt",
  "key30": "4sV1B4P4Zpb56FxxWuaRX3PCC3P3VKHboYgcPgDhEif15zdjKKCaRLrfDy3m2Smu6ruhfTPKE9kRs5HeE9rALjD7",
  "key31": "u4kGtHUdb3maVncxJaVHVFpzKShxSLLSRe1xBKjqi2ozWh3HFcXMfpKFvupZG42thKNvdnTmRufBydu6TXDU9np",
  "key32": "6qepH36LhjKLxVGTHJXyPYNnK2tCrnDzjdhUYbkRSrAMo29WDUCpwRggAoAm2Q5QDZaPWZHDRdi2iW4CvFpNiyB",
  "key33": "4HTwJpVpzddD5QGkoQrjw98zuoWEEJBHoBukJ9sZtcxVVME3nK67WCYQPXnuUcLE4rXeKFEvffwTJDDU972uD5Yu",
  "key34": "2hMD1KqxSbaA1Dh2iGS9FopEqASnra7S8BsYqqPUyh2M2ok7dxzQDcWVrjzGNSdhmUSGv8yxsWCtyeaLNDKtEMAL",
  "key35": "5f5cko2QTDYjbw9bySkGiFQa2Horrwgj3DmcDHrjwcqdLWEzu3cevGta39JvxwpezBzXJUWsw5nKCnA6Aui1XXdn",
  "key36": "3oncK5V9excQTNL5J98dcuJ8HsP26C7ccMuh6hSVMC5Cp822LmY86Ugyg42uE1oAXL12QSzYQjE2YUbN4Tj1jXa1",
  "key37": "3dGPkYDTL9gLTBDmodsaKQMQEPDXUygipo59mcKttNWX4ZWgFdxPStiJf8jBozV6Six58XpfyfDLVTj1eafisynS",
  "key38": "3D8ips4gF7QDbWzEJyNZBHfpqazwsHKdNgkvVtNtd7ckoKtaKSrHmPrHrhaoBMF2dsjjjDzFZLcwsUjFSbU3aa1g",
  "key39": "2xzixrbAtNqRpPu3nq8Z6dSui3V21tSW6njUbTtXfHt6F7vX4vAfBRha6csbRinv5q2QTk5S8vaF2snp94kDKLmN",
  "key40": "4sufUjgkJQeZqEWBEUtY3knrjZ8dLUjaSdAkGZdN38AxJycLMpJ4rQB8jtKyyjc9a7Wu3Ud46sN3Pg8VfpnEcmE5"
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
