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
    "62G5Zb1kTDF54zrFjojAajP59i7Ku18CE8xqD299fmogcMAB1KMFCPoR4Cbd2brHt9DKHVQKLuE8ZXXkiee68XPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9v5cPdbzKdyHuW2M4R1sBhYGETkguDnTnTKqekb8Z6DWrPwzXEuv6DaRpp6RnKf9XTip8dUnXLkh3ZE6xiMh2LA",
  "key1": "4wmDje2skgh2RQMzffVXBdAKmT1YhufW1qL7Hgx3Zbuni6jp2Gwyg2mT9MykHzWf8oDyoZ2YXHgqGJKoik9XjYfZ",
  "key2": "UzVsEDGcBSW1uJzdkBAQQ1t7yxQiU6ZpNQSCvUDSX35WsJdfY8ooLSx8yFWNbRe3agipU9UrVS95MC3Px5G2L1i",
  "key3": "2M9hmY5ZuVqpCMYdqQxDh7cqJSMYSBuw5CBDhDGbiM8717zym7feCUxuy1GbRTNgyKgQxfAboYFEeXRDUTL4RDuM",
  "key4": "Aj8GSvjMFz4y4m8vUsfcY96DcQFwciBoq5go1KassJc5xm1QTfo451t8QZ2pB2N8qFxiGEgaFuwP6dgj3n7P7CC",
  "key5": "5HzXLrbBgF2anReRKtY74GeJnXTuqyaxR6tmmtY825PmrxedQT3JoMAnbtkocLug4jCtiFGSGWkJn1suCEWPBoeT",
  "key6": "4AXMtTtg5YqgfryZn3wifuVJpVs86s3qc6fcAyxxvsMLSPpAXTnVDTPq6YfccEKUpR89amLh7EwJivXHXzPBaZgd",
  "key7": "PmV64bD4Ryy91s8MgJP1ttrZB5qqWYFWZfhxtGmcKEkkUbsCJQSaxjrkQB2o454q5eyqK4Zc2vQxU1zPUiNkaKB",
  "key8": "3BkHNP8yVaUQGKxKN1cGa7SuetSLshYRdPcviFw3XiUranQgbgMCBTinufZWwFBviiK2JhaBNQZ4GfyGLdBJJdZz",
  "key9": "3EBPNCqU9AugP5iwmmZNG3upBt2NN83hJpX8feD5k8JE6bwLPZ2cKhD6nKwftD27URwh6SfoPEoMMmzZMiF31VXa",
  "key10": "5mdhuY37oXT1jqjtosc8NwmxHDiCHmTSEXsdRkpztxBUkFtmyaAe6wVMP8hhTZRHELZdDSoWWzn1FVCFdmk6Hykk",
  "key11": "5SQKVK5a6mofKr2SFpZACQDNBha5t9pQt8PAFdXXwwVBCLQjJAu8VBocLrAtnCE7xx4jfnkTe7F9yF4LsSJoNzgC",
  "key12": "3GM7mTWxTGXekASvyBuFX3zVN9tmmjw71zXMjJocjfGYVCGu8hLQ1iB8JFTt7MbZNdRHCwKb28zuL4npQr2JMc2J",
  "key13": "3CidpniJx67KRDUR3dGoYYu6HDfbx8K6n5YR2mw1gYjY4WLzAVLuUKkQWnfB2Eim3ZLz2198m7r9X2GEizJ64awM",
  "key14": "2TvpAfVhrF7ABVS8PCXi9ykyt7d3fGxYQbaFUrAHAe7midagFaRvpYHp5jk56Uq7h4nZEzFfPe2NsZqyCkrT8DUM",
  "key15": "2YnSpHg6x6HGo9DrPAsgjFpEuAGA9SE4Aw5NVYq7KBoHJgVf2oetqNNCFp4UDC9QnHcPJAYr1SGwj4kokJyy47y8",
  "key16": "4UqCnDgk7w9auCEDt6gzpwzo2CmhqiCf54d7ZcXXH4DaNTGqapa1CcpRqytvUaMw3d4X2b9XvB6TFAhooVBfKaDT",
  "key17": "5XTFJdaVnWMDCGp5PKyhYAr8eRcFUactMfk4DMuLSQVi92vjKEFEibRQYCKVhXwL48hthPLHvjAdq6UTMDEN9Swb",
  "key18": "3rquGACxSErmv7xa1HdoctHFSTtKCAxmByVLxmnwbxnzrda4B74mZ23qp6kDYq4XLnKmLq3wZ97crEkyGL8deXLq",
  "key19": "MwLJqXG1mCqYLn6ZiH93waf8k37Tdy5ntSWC4FRdWbfzbgitDBe6KkLKw55QqJ3anLLaygPcjucEFb5GMF9hZMz",
  "key20": "dUec8Mhg4PcXu4167E1BKjGjPT6PQ7jnsmgpHrdYqj6htddfXR7AgxU6d6HcM26JY5E4cCJDBpBx3Z6Uq4jfQ2o",
  "key21": "2LJ9ZWH77gEsvNtZiLRrDrvRJszzzzYpkMSbp9uchjKpn72MeW9YMZZK8MkScKy9LnXpe2ihWE9YqiMwFJrb9N5j",
  "key22": "2sqEU5gqJHYJk3zxmAj4dV1hhtuQg2tSdcdHDYqiYt6mJLan2gGJuA4yFMa9KH5GX9ZrBQLrbUX3r7MN9cdkTgEa",
  "key23": "5UeofmwgQetcoNkMZuDfiGftrQt6uTfCvq7g74cMBsEodMke9a3uS3UFfsjRNcnoPQ7vnzXeyx56eEWndqpaiHQ9",
  "key24": "3obNVbN9usXUefiCTeowmHB5APMT6RZe2Nizg2zGj4E87sF2wMUK2gbMADYRhpogxELu5jJK1cbhXYSp8XRH1k42",
  "key25": "4fSJGxFtoiccqR1cT8MPUDhQwvZ8kZqPP7qkywjtDqbxyQU1fqb3VXBs1qfm8vkmUQKGQe9qRVnHQwbHxyz4BrgZ",
  "key26": "3zZRff9M9TbnHVNXEobbiRtPMsbqYpvaSN7d3m234LwaffBghN13Wg3wv57ZzXWEzaCsf9GuS73ovgDKfx319WND",
  "key27": "4bZFWY7nqd993GYhNiJ8Z4cVmLg6JjpCXAPFsgPLWCNGHXXaftmCU7SWQ7zD3PkL6884XYY7qFWjZnMW4T8LpgnN",
  "key28": "39bLp41tWC4AXBX5qupfQvg42yS7JtMTjBuVLPsKMksFYnBiaGmELXScf9Mjyo8RSeCDwzPJp8sBs5JX4mUiht4L",
  "key29": "f5Ha9GhZh1Ev7DunHm61EMgpfhc1UCPcZ58S2gVAjjhF8ggVfoUVd5ntBWqqrn8LdyTPRVjM8qAbPPKs8sX8Po1",
  "key30": "3jdrL15mx6hxUUkNfmqz2pRsRq4m3EBragXjGxRRgEULG8HBKta7E9cPkv4KQdAJ5rCxbMcEQ6pAiRny2AkeYHf5",
  "key31": "4oAqL7t9Bz4eb2ULqGAUQRYh1BZX6eoQkVDz9VMvtFYdA8pWYLyTk4Xegy2ZtE4jBN7QANbajJLEH8ERBtz2b8F3",
  "key32": "5eKgZvDK8PehqLxjvQhnZmXHWQhy1RsidKw2kayuf49txZGgXwmDG3mRJWUJmCGJZEHNTwRfYmuwP9jyCfoiQAUj",
  "key33": "4AP5WFKYTrTg58bXAnAkZUz8Cm4er88tbsWVNAJfXb6u9Ui2t7bmXj8qYNTHqujqmpoE5pBRjGVP5ngSZmdbEiDK",
  "key34": "4E5bYHbEsvJupkMsy3LSU2gCeD5UnT4xty95LZYDNXYkhVDmDuh82p1kY9hWDixi9CiGTNHFd5Kzi4HtVJAnZqzZ",
  "key35": "4bewa2JZLnYN1u6JvfAWDCbf5ExQj2nv6ZSg14DEgMX1tcgdqpysATiBEMJennK42DAbEkSWbnSXN3z7fP2K3isc",
  "key36": "qW6E2AiwMac7Ad1jHwTofcrYpeDQyu4X4sLzesj5HcmqFC72nJaCJSqZaC7Qv6XeAxuteETBpmurqRY89rN99Xi",
  "key37": "24ffz4v5tC3sTP3A6QXGmxoaGuuLLPU1B9zTWWmWTEd216w24FnULhyPMwYfCQ8H2G2PwVLWRiXeQ1FDSnDk8Dij",
  "key38": "56na9KpjRaRcy6fPBBffu4snJ1FSkXTQEFW17R8DLQMd9oqagBjYd1SvinreRNUbFrhTaZ1mvG9pjviHCjnX3YTm",
  "key39": "34Q7K8qx4Mwk9BaFEKpncjDHVWxDSY9VxYKpo8HMMa1QvBKraMFZx55CsjGt6bNPRTYZPPWNNyfb19bTaoC654Mu",
  "key40": "4vMLDUF5VxvvfJbSPcqnpfcLatKUGQmDiEH2yw6PqaA2s3Cw7bFuC5QPZL1Ws4M83wHL8fkgC2jG2NQcn773BRWW",
  "key41": "5cAVe7YW37Z3fVF3zLfBFtLP34FmeJBvYdK579wei6um87eJqcVszsVGg8fLDYJ8gDGuZHbCqPnVazjkxabaPiZ2"
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
