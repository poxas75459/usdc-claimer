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
    "R1vFi7VJatdmajowrCdnnXCZLgxnvdM2acW8wufroxTwKpLCCzFKeAojm7abXv6NLbTn3gK1RvA2PawRz54j4Y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57V32oJf7NLCHyqeJvVFwyWMXEQ3ggCBRY13X7iE4XtYRqcrXwnC7Pp5iEphu1dTsfDqsJ2iBoxDgLKDeNkWDCKM",
  "key1": "3GsRu4RfiVKMKM8UrA5Yvw7cniC4Zkk1JDwqidwjr5WfCGauSH8obhfhsLkxfa5m4yo5AnPc4KdcVdHB5oGaAnwC",
  "key2": "43T9XXGNLjNbbaZc58BKNBHEqH93avNnuvP8rpXkASPHnsiyB4oCrgKzjFF3M8GuEkNkdd4X7cGZ8RPJJPsVXyys",
  "key3": "67ocJ8SEcRVg9gqkLco6kGdPY7Shu5zsqyRpgQMs7NNNdA1ZkPLKX1v8ojFZVher1PBNZjvR9MTMrYnxC35TMu6v",
  "key4": "3r3aq2HHnz2hL7xZF5RCqUyKLWw4jNH6d1LXBYNSkKtbg7aAjdqKYGfiB3nG58HMa7njf9NryFYiVimcTySXoZ9g",
  "key5": "3ZaH7LJ7Xu2cCBVABbDfcAcuTRYK5rtTmPBHqt5dNx2QQPe93QcKzRmJu2RB7vCuc65gzdmq51vEBhDYYpvhrDy9",
  "key6": "4oczZpgEbmeV7YJpH2diwkhodnqrxgYtSLUocgFR6aAXz6GBJebX3xCcfwN3GxdnsvXjTKgxcdZP3Y4TEE6VKcE1",
  "key7": "XQEhWckEkk5Sc9TsJ6VxBiR4aZNkuq9BXV2mv7q6ggDeVHNYRmrzQV9XsGXv7t1FCCV4X5xDgV9VMBeysKuUE8B",
  "key8": "3pg7YyWgpuZWmSk5MvGCuyf3SvfxFNe3YrUbYnDP8PeiiBTdzksLz7G2Kr3dLrWy76y8EXB1Fd3JJ7H8S97DfDa2",
  "key9": "5nQMWo3bwFqtM2kXcDiPJ8e8DpE7gqz5xwxyvuCuhw6wJFzbHUAzUoBHhcWAUV2GYq4reF4rgF3GzjYDUc61R1RQ",
  "key10": "AY4kBAAvytDh1KJitu7YxkndBtdj677gxdxJCch4aqcPNMfRyTG3U8QsabC7xgsWeYyjMDAfHFP4UcmkUyyxyuh",
  "key11": "WLGoEkd8LVdVvmwSsoRC1iWxSBfXSPKpenF3NSf8yykxk3JpWD3pveaggbqNUus7kTj74x3foCADSTyKHqT5CR6",
  "key12": "Wpq7hvZ6vAMrzsmnkebJWE6aw8uiwjjJeSNCZttJJLj9Ky9tDdMihA58gneyhyerzAuve6HN9JRfs8Vs1JzDTcG",
  "key13": "4vR8PfXB3hQ21rvqYyhcXtH4j5P5U9muHDQfYc6WbDMvdCHXT95MLpG9vUc8jVZwMGc7arX34SYtpGeJ6Wv4rfGy",
  "key14": "2uZDXt1oXUhZHRkfSv59HTsnwTcLp5dNyXYBXCsLvGSjgo5YwBbuhBEzFGnsdMy52anmNL2AiTV4JtY3UsgGc5Sk",
  "key15": "jaHDmmhzLbaMnhT8urbtiPgRnSZMAos1uYs4dcihu4Tzo7KhFkGtPU8wezTARumfRGUsWW4tSdExQyhZsynJZsr",
  "key16": "4TBHZ4G1tofKUxdiw3nHFMy3hhahS4o5E4TPbcUt5fMLa4LzAxmviyoVqRATGnaRTTZ2pxJnTXQebQ4KP9EpcNNs",
  "key17": "4MrU1ZKSrkpMMxHgsZhG9uQuTp7VZbVLMUA8yYXkwX2hDYD9cbZZAnhvo3LWCPSsakrWD2MmyYHGFBqxox1iUfko",
  "key18": "3P8jxFS4yYPeECr3gKWcXdooCWGZn7wYjfhGGutMSbXKBCJJmhC1nptfqXnF2BUYpc8vFjeb1jLEBVTSSmcuFX9m",
  "key19": "5sjxFa5iTJPULbZvcdRdie2Mt6NhoPzvJKDHyP7TYmZoikkuq3yq9kHgWjJm9S4EaZm23QPZ5TckZX2ffbhKBN7Y",
  "key20": "4xWK6qnDsKdyTLtZyptNQg43zTuRYuztZ1qzBfZw152woSUBpXu5MbnDUzyu2ghCPM66oMHWZhEQ8rBaXFC1tNzo",
  "key21": "naBxpYEDMMoNqtN4bC8VGEQp7bTPVEBJbtgAZjveDgrZSTeKWLgATZwxcSZvjhjRGCRGsF5278Sxysj9gnLkb9E",
  "key22": "3PdU4FLHP2jYt3gKJbYJbHYwSpa2wxdsJeUdNz2XxTV1rcXV7Tg8nB88A9ibF6bJBCHSjZDuDz1AwHeWGYaRJKXL",
  "key23": "fBHDNGCZw3UGashfess5triafVTYS7rDnv4UZHCh7G1VM3XC7Dsa7u3WKWXtuMgoWiqt8SQ68CzjRUDhEAoLwMm",
  "key24": "3TqLHovexQVBWkE7fo2jrWxXMTJgGfCJGncwouKfVMH6vFzmPjaG3zhgYKtw3BZyEagpaSd4nUQ49nMLDkmFzhoh",
  "key25": "4WdC1nPeYMr5N3WzEgjwhMtJHswJefCDLcYJHsJ2rEc6AY74c7vw1x6hwtYXf8uWoS2tpZmTvCagfo8FqFu4rmfF",
  "key26": "3oX9FUESMBt9Z3XGRegaj9GP3QqCZm8geDUgV3NhgBxWcKZTDBcCLGCjH9pEU2XF3WuL1QHiYmxJMdrbxNM88YgN",
  "key27": "38gYBmkm7XAtNtQvjJaRTTJcaRU1K51AYpoGhHqcAtdBdKDaEVaHFut6duejenzFNUsqT2v2AX67jZpa48VXhk5b",
  "key28": "pP3quqAWEAU4GjxNEP27vMaj3rYq6BEPVRpDY5XdUzWY6wTxu1ECLra6u3UZPBWE4h8Rc941RRA5JZx7jC8SaTp",
  "key29": "3D1BY3zY2ssX663DtgTCknjdcfd3ptopJUEm21DmqCzvu94KT8ZbW9WCCqUfuBDtjtan4TCbsRSwGDzXqYjL7JEw",
  "key30": "2ACYLr3dgLJ5Exn8yEbs46kV7w9jbRWq2v3UTbgUpaf8rTVAzAPbatWnScm947kUm74vnrSk8KKwce7XskpjNUe5",
  "key31": "5pzSChc3SCzV4BCrJMAmUEcnesJi9bsRfnjiWvQXPjyXXTsempbktPhpgqRXzdVxKAoNAJzC9bVYVjQoMEJ5tCfe",
  "key32": "U2J7z56Z5E9QmNgoZBu5Yp6dsTviEQ6L8koxLoCAbAMJMQUspa4nW21z6KpDUfMPHgSEr8AguuU6xoG31Kb7hKv",
  "key33": "5TzsTGo7Wj2pTyqhLyhuKDbgv8uUKCKrvfvtaHoT5q8g4vPqbPyRDGRvDCCyh77KP6xnzPeEHaxYmyDMaiQ8C5A7",
  "key34": "1H4QpP9sTM91WFKizbmco7sPJavdX74QZxpvXeEhuNub7mCxChqKKEoLfv28tDDN8D6CkbvD87ia4tKLmLFUZQ1",
  "key35": "5m2zau2UR2SsxKsF9RpyfgKn1NatFKo4PLsA7ofFQb2aiJrGzT2Zj9zpJzcYyZ1RV8FWFSm7SFDkZSVkvY8f2k7P",
  "key36": "3gznaCoTNvb1bH8RYB91wGeq6T3TFxRTUVp39MzCAmjhMFXuF5RqX5j69BkYxDL77zR9yiZsNR8HaY39NaJRpDy2",
  "key37": "3hcCUnAdim2W6c1P3wdj25oGi1Gnb2885rFakHMsZyvGbWNxwu7kwKvBoPTy8Z7C1KvbpXLn7ErhgRtY7koh1oEQ",
  "key38": "4GWcYyFKTkxyVT61XaAi444FHuM78Ed8XceyMKsPatN2VKpBxLPZWBroFvN9TtKN1E1JuKddfLHq1UCHqFyrg2M2",
  "key39": "4U5wVNY9bnL5KScSKpHvtR5DwrfUpfVHpX3XsY6oDHGXG669Nv8aFwHBX2g4TPkBt4gExeCMdpfgxGw6UAETpeX8",
  "key40": "2JzQyghppcLAQHKByt3wKuqrsMhg34peJ93D5nVxHnnCdy4PbB4erzcUJTWbqcBFufuMkogX22DKHXn8UT9p2faz",
  "key41": "5ZqPS7WJZwMFWxZYebfUWsmSLpZGMucut422V42n2yZS26ruqW8xyPwiSsHyVA6MqWx88w2JhgBeUghQ29rkV1gk",
  "key42": "5QqSQKTPpZq9nqVoryUWUdFJWXtFufcpAFUtEveQbcaNszm4HNGfsSJkoDPfbhnxB64zhFHgS8dda2k3ENZYXy3",
  "key43": "3UVKmVBAp3GeFoZQ8Fa5e8xFPycpgpvajz4JJxT2pW7Ww1Wuss8uCBQqHERfZ1mS4rZi9ATMsYANizdusNvtGrEJ",
  "key44": "4YM7Nx58LATTDUFxdhTd3isHiL82fd9nNhHbYSX1LVyCYBqiC98vrkK5SATP2UziYdDMrfu3hTx7Gh3mtSRgTTmD",
  "key45": "tXFR3XsNDXuRVe94Tj7zhyD5zYAfG2GWLCwV1F9qUi7zexSYVQnsgWYv76JJ5gNHSJudg9xNVqToz7wkYKkJgNR"
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
