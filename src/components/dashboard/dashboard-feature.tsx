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
    "3NjQxVQTnZ8rKziCZV2NzLkqjCkip7CBzspyJyuLj4YoTVjG9qGWqa9UHS4k7WfQs2hEeNShMSz1jsGsf8ueqq7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BANEkUZn2Mh275dQ3KgxTQQSq3FntvUeTJwpsmhKCjKWz1HKuvJWD7zgAgHRZBefiKzLo3m21Atkvijv4Umwocz",
  "key1": "3Zy6AdZDU43a1NxejWDtFw2RxCWMSLno2evwortQrwwo6bYmpRpPqGDYpqDkdZuXr2XV3aB5cRhcMYnd7JEbcrHD",
  "key2": "2Zbn7vR8innubnw6ztjonDTFajzenngb4AJsT3Y5GP3Zju7DXTm3aQJ6vUbxuAmXRRFF2kG84hA2W3ZMM7aHf3n",
  "key3": "292xj7DX5vA6TE7A1ZRUrywB7P5AULJ7TMMs8n4fDcEgQdaucBNnXeB8gJ3JDkQ2JsWLvL1tjgtizLKYPxDAJMjh",
  "key4": "28hbiy1ArWxEiSgVePitL6RTErU7Q3BFHkHgQprBwFn3UuXzRQ1tWRHnKceLhwT4yqXGaGRJUTEAt7P3AfCR163p",
  "key5": "666hKyCK2kVH9Vp6YcwTquPDaPJ1iCErwS1j2U1FAkcKqaQfcd85mbreSDKk9KGaLuRjqh1QXTRHN1vPRk11rjDf",
  "key6": "5ZCoziFJTxHuQVmEWnMLvsGzhhpqiS387AzCSD3u27Fb92wLSzrYyERxYdzq5N4X8vBv7LH4YF2RuGJK1gqcbkwb",
  "key7": "5oTVGpF2WQvtYuQLKwtaTqvSXeQApKcNGfiaEcE77HN179oComKXkDvdbYM51QSVNWagpG9eNyizrX7FTAgJ3jFC",
  "key8": "5iJeGCNqMiiB4RYopboDcFbszHAptWe2hzcaj6NCnRrDuxXet7mc8u1VbiutaSWdfbH598iRSX2dC37AmhJ2QjeQ",
  "key9": "d2JVzYGjnoJEH2JxQCa7JRpfdNkNMW7x4JQxYgybSGfrRBYpxExQBGMaSz9jPy4oLtfsv55shutmBNwkhZQr1zX",
  "key10": "2RY6V1ALYj8kswXgxRYSwaEVmtX7uvKTdW3GcHvRn4geZAy1nVFDa7SqS64nvquzrgcS6VaMYpuReeBx1pms63Gs",
  "key11": "3AaGVfZcA6ViVh9qpVxng7jMaij49tMviK8Nv22WVJznVu5B69f6wss3cHQrsNvNrN353nknAjweRJ7mkT8ScKyN",
  "key12": "4haP1N4kiRmEbTaXBhXoabQRX54xz2aYDq47jv2muFWhHh3TdcbatHQbinbLXNuLy9yAK3WaGANsmFVnDMnhYriv",
  "key13": "yrUmxvHAmNkLY9vqf9xTZruYSAReTrgTzFqDMDsm2kvX4Qr4NXy4sbAeBTWMPA6BjxSiumFvfyzfVmq4GYKa2NS",
  "key14": "5Z9J7A2n11f5ZwpdPpegccaabMfQ4wm46SSBHBaTrxTxpvpjwMw11tsnDTs5kom8fkZnnS69ytxNJGLaPxeqRWQr",
  "key15": "32Mm8zy9YpMAvhdt8dDxchwMnkeszHttJ3XRizBjifwqkctp7xowP8C5bT1qt7FykAQZV2bqgJNyv59A6tGMYwTx",
  "key16": "2KcFmkjXMQG29736dyZRQmKQx54J39s25gi3541CCkiqQYZYTcTeBUd4kcTv8uoRQR6kG16eDGoKeM43h2EdBy5Y",
  "key17": "HNDQVZvSdDxKu7Vq3jjhr8f3zPNXcBrXqpDFNNfmCUdv79veT6v87JhgQ2VzddHNN2q6BkwWJZCwgSrBenErcQS",
  "key18": "5m6Gh7ygYst8bnHiYkGfNViSnpJvf43aYiUHQsmbwmyC4xmhdkz15xvaQLhcpXY4cDqihvV4NQaQaW1gQRBHpDQW",
  "key19": "2j6jhnkUQJHnCiY61WwgUw78bR1B3Hd6b7KBGv45S7xS41YUE2F1mpErtHgrb3g9uqWzG6ByGJckZiRSV2i8NdJ9",
  "key20": "35tQqUiHFFLiECDDUyHRJo61gj5iGVvQMKYqLWmKpis5CFCGh8C8NDN3Du6wFw3d3BLJNXcvhbZpfxjKVvZMmiSE",
  "key21": "25SWYEYkkMaHu6SicTSdiqqWtTnLh6T7CxqoQDUqdsQMSjsbrG7uwzi6ZzuLn4MHdKhnVCsGV3AwsLFymJWvCX4U",
  "key22": "DZgNwM33L4EHc3NLyea8B4Wo4abiJgtW6waXKAiYndVPhChN46UG4foJQDtjbQvTntTXmPuN6riwcyfXsKS9uAo",
  "key23": "3yeBmkYTGAPNTYbmLKqtYML96tsypjpSiwGE6dmmWGMgkiisGpMywsD7qweJSm3J9Secxwu7g2u4S9H5yCh5vR5Z",
  "key24": "58s71ZB92uWo7LP4JRgyKax3mgrkt8fzztZ4dBKwLH7TiHNUeLoUysjcMBotc9ryb9HH2uBfgbMU63JF11NHXgt3"
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
