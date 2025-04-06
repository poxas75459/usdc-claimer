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
    "3wMoeya3z5FnnLBTMdpYTEsjZZeBx2kEYgCT1DxyhMWE75Nt8H1Sf6voqAhGpC5g2tFcY3as4d6FoWqrGP2hAv8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QF1zjKKwsW7xFTonkSmBj1pRfmRagid4icwzC6cQRL7AmgWR9yxSnNrCK4YTcTcp6wSB9JvbrBqaLupuob3fxYU",
  "key1": "TVy5rWRNnMa6YhaAve56VeRCSwT9JQPZh96CBCcpWHFWnxA3yYCnfHhGDNegAC7Az9FdA4dfvaZHVJfCRG7ehK5",
  "key2": "4RyQUSbsp7Df8aHTSEa1nq6BspqTfH6EBMXVqe4YQKumNA4oq2hxHyJFkDDU83Xu4vnrFpacxpqboDefWmmSHPaf",
  "key3": "24Jw8TgSLDMGWDGoP2StapwxSmG1qBxFGPSsr41MD6YoT7F1QAmRNk1EC4JQ9m7aQUTrdvmzwMRGwXFRwAxwXuwU",
  "key4": "4xwRyFmoVT5ZQbJdkNrYFh8SJNeBCD6EBtTyine1nh99GEwKzvLjSSbw9A1EoWdeJzRASZQjgBgzc5PjGJFcRV3C",
  "key5": "2kpd1TxgGp68DoJrqzWLxrSns4CdULBDiEQhYCysVdNt3LUGJLY49SrKNFBEVpATLQD5JrcYfXCAxTToSUZtbieh",
  "key6": "27wLPomxt1xh6HSjRcfHpz8c4ZSpMyLABgboubDF8MoWkuWnd3MFZeuSoAbT2S87BKYVCKvcPXJxrHo54TacgrT7",
  "key7": "28DTAXt1Lb99ysm5MBqcY5hSSGxCXVtArCamP5x9nQU7j4YmK9sAakk7ps8qmJf3vhYZiLgBaxtjfkkLHgeFq6Az",
  "key8": "37CdF5wJGxFPDZNZKuzxxNmZv9yeSqG3jvURRSzT1of1vm4BVvzxdKpzpfo73Mp8mK6B9rgMg18aButGbYxaN4oN",
  "key9": "2j7e2LTkdH58UtsCkS49qh8xXwA9Yqwgrx2VLeNnSebMuWEocRu7pKd2Q6PNRBioAUeyngMDcs3nzPHPpVsoY8L2",
  "key10": "5TeLm2394tdPYFAEN1FS41XVZ1ABiNihvcGZGqJyAtmnzuJWgeefBbrjMA9E2oPageSkU348Z83ieERXsRf75r6P",
  "key11": "3fRteaoWAoB3zfwLP3GCb4mBraeduCaPdbbhYGoikTuE19FWPcmKatR1kZKPjiNY1H5iqg1RzsGaPPtjgHJQ3sNz",
  "key12": "4o5inCy9aRrP6PJUKErzmPfiMqdRmaoCmrbjPWcV25JWeAt8fsMiCHpAf5DXen1jgr4p2un7iupsN26nqxGeQkYV",
  "key13": "5dgvS4jZjwK9vUZtvVFDZffhXdnxkoswYVqiWd5pCEpXKBCud3hEqruXs3oAG1a6APdPqGihbYd53dYvUetr3W89",
  "key14": "43vCLwsMCLZy2pUcGe3wjLyhm8rFUpfvSsxZnc9bzJF6yWWmZscywx4t6R51rxfTXVecHCb5i2iaqoeaoW62jxp7",
  "key15": "2v6DymK8Q3GnaGtsE72FaYdkZQDDW1Fm4HU11u1ce7SmCfP1PWQBQWJXu5Mw9hP7Tt9YjQwi7mQwrDom9LM5u2gX",
  "key16": "5Zmz8d142SsooX44jeyq2VMbjrPdAitQdTp13SwX2NZnoaSnNz9C6tjBzfvp86mP1zNToAedxvX8uigBPZ1D15mA",
  "key17": "2PSZePzcZ2iZvrK8X9x2WQE6BaMWc8dbwUnpmGc2WM9oUtKeLVEhR2w3UjME5Cufb3xzqKvpb9TmWAiZrij7MdZz",
  "key18": "4q7iSTdz4Zt1Jfz9fEcqdu8fez8hRMyjAdxozKhBiegaueoN3Sv5YAWa6818HpuoMe9AfqyVPZdXwRAW31xAzCv9",
  "key19": "A3mUCb5wFjNUQR6Mrd3rHhFBmv3SPVyDtRum5vDi1Xgzv3dQ1inKXcsdTHKFf8VokW4oLip2aTSsSdRNwFmPSK8",
  "key20": "RgtpLJMxq1qeCXbCbXpBATdVc2F6UDVfNd6cu72e8TaXn7GRwVCxUTxsbTy18wzVxiQAdKYEb7d7zj31NDDXz9f",
  "key21": "2WLpxE9G29cDU1kXSuag7RBSBapyBFQ4nWMj4DFcY71Fd1TkorYVYFFLs1T8uTdkpxcutKRmQFnCUJYhz4QPky4F",
  "key22": "66rRyb9VTQXyG8j9474LVx5f216mPK9FyZpoEo83WAWyNAvhK5iYM8vGKqwjuSmxKbkjiF47fX9wDqeaj4hmvkeE",
  "key23": "3R5SKACumqe88KdLXUNE74bczdMSG8zEK4RWtZRvJqMqBU7Me948ebyBSkA8Q5Vt2hXWB5DztDRQmBv2YRFUp7C6",
  "key24": "5ysubiraJF3QbyRUUx6Hj8ZDUHZs4Pc29S62gGoDFf6A3hib9TwGC5hQcBtS99WZf2zLnjbnqkBpquSViDRuXjiC",
  "key25": "5vdw4RLxK2PczGdwAz39iPYG8NfWoCNQE9nnjZhk4MWqXp2YTh4f4W4DrosAKT2sQEfExqYgLVc4UNm7H4SsdJkK",
  "key26": "2xjCW6kcEoQqo5z8MWJTRWj6zr5XBioNQfDKs38AnE6v51BwTiYtTyuti35pHzgxZTMxfYiVNMdkmuQYwzhbWUae",
  "key27": "22PeNQNqqEd6Zma3RifacxxrMGPqHXPjFPA6F89D82GNcULtQBLcvKVWA9joB2k9UzAvf5QnbyJNiJ5QpXd9xaVi",
  "key28": "gsbcXQBiJAnQJpdnS7mrUpG7yJqMCa7zxBoE35HREVEDwPuHf5VLNzbbiUPw8v4ackAyoD6Kw6ZnsJpcW7BGM6H",
  "key29": "32xwsvNqrHjAfzZTacWrNUHZLWja9KZwFJd2G9WRVG85XVZn2JQoSziqMk6F94nf1LBC3MQt4xPqVk4okygpfUsF",
  "key30": "3wMoyzCWgK8cM755V1Zc37baMkpQJaHYWXJ2eW2XSafUANUTitHhw4iAqFgBww7DxejwsnegPTMp51suLVUKPut",
  "key31": "CJ63vBz1Ktx2oicvjk4PGzYkVK6rbpWe9kSdmX5gTT7pDztTE4NvBfVTL9pA3uFUuC5To7KFu6FtkH2C1RMuCSr",
  "key32": "261JLnhddYkDqeL82tUXAvSaJAXrchNZEZaWqRYmhFHqbC8nyKHtHp7Hr19ecsjdmkUUqrQCfsEhiwdQz4W9T2oK",
  "key33": "2nzBe96nAkeKFDFmHxjYAyU1gPjzKn2wFheyDsPxSV8SDCBfgE6rALdx6uCRH3iqng2GGoCXjSXBvaweiD6x66Kt",
  "key34": "2sVZPJFdW9gSdBnnbKNwxfKZ5igcuzbjmaW9jruwBUeMYhHac4pXq6A1M3Lr2Bur85GsS5zMaToPHEovDL5umTsU",
  "key35": "sA7jjigjSbZh1K98RAdqJd512VxDd7MTX1prE78k1SasYRTe9AhMpjKGC98EABi3xSAHLvENdzFD4KChZyDTUYR",
  "key36": "5HStJogzstLxQNXLJDNCMR1LRNDojQQKjfXGgjZhWiT3hU2u72fG5iYii9wJAvAYwFJEdSSqrm9u95avE8acjfcT",
  "key37": "9QeBCLkx5pkYn5F2j9CdpiQkCzhiD3ZBdsV71JvDnWffhmH431p9J1iJ6Sgyq9uDAQ98stc7AAURcsrFSptJnbd",
  "key38": "FeJcQQ52XwTaeFATQzV9W3CX4zHyy6wvB6xhq92PMRexafAz8sC71TE2q2str59DNN59uMJksJtLSTcsuyjydv1",
  "key39": "2GyczmuKyGfNvyMnFVJhERm9k4U9Ws2Y5CXhPy9TjPRrepMSa9Thz1cyPectNFPomKrYsyCjKxGhDMk17kr9y2w2",
  "key40": "2PYKkQu9E9KNYN8eUuxzRgoJHQSYSwW3SJX3VG5XmszcRQWB4rYgHMibdxvLhzikr9eUJnF2TU546Q5jojCM867T",
  "key41": "3ZGWPduaN9vue3QMrZQeR4tkNdmGvZZPEqUNDExXkGtc7EszuaJGgHxj8FWwDnuSzFoWHGGCk6tkGvEb4uVgJmyc",
  "key42": "5rqB5curJSLAzsdZuUqTgBjEuRAZqhEhr5AxnuqF1Z41FkLeydeLPoBoCwD7wdUu8PLgtdm3SxHJFA9KwLQBFQCq",
  "key43": "nwwhcaKEUEicBMPZD76pA2Yii6PZxfuGzThx37UXG5sLQJ5rPRXnActPZYiyLMibjhWcFx2bZF6pgrCzENEGZZj",
  "key44": "5ke4hxopbGCxaDiZnQYFBjkMqb63Vn1JqRfpT6NRK1WyA67TC6PYfDkSWsVPH7FSwwGRS5cLEXQQ2UXgsgaVVHJj",
  "key45": "bekHYABGZw8eJCvWMtrTihTXwWjZXQhaTF8DnmtHfo68xsan9PXjwLdH5xG6jdosaMW6sT3tPCrgsZuVWSLYzXF",
  "key46": "4MQR3P8QMSysGSFyhBUCpeLbwEqnsFrUBuqyqPrMsKDKFw6XmFegMKutuq6op4s4Fy25GBNn6gqU6s7xhVYGvhSv"
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
