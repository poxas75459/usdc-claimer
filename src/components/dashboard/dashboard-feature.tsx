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
    "22zix8aCUYtMJxoy2ymaFDTozQdbLKLAQ8xrHKZAeNmnAWU9gjACz7Vkbo8jpER2fbQwzSKHFEYDAfcJfn3sMVPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2btg1DMVCbfzRz18SGhUEoaWi3U4JiMDyJV6y35GnybmEaLHvhDWUpuKaw8cTWtnEHgrJiyRfzBqivB7vkorr1ke",
  "key1": "4SmVaCdS28A9Jog6H6Qp3KMRP2RA3DSFmWUydjZkjEgq7L8rPojdZXDygo4YFJPCVDQQDqUnAsbnGQPQWKdynN47",
  "key2": "3tYuJo5RVNyz57BifjnmP26B4E7zf2mm43hqH5i9ykCH6xrAEQGNNTGBpygYoyvRxecud7ov2gdfJNEYpaXJ7kRa",
  "key3": "JeYE6fRYKE2K8oYweUNQnangSGT6ntUSvYeBxUZszXewNg262aknK5tb9MxcAMBiqyDFDwPXD1xwF4pGiMWJFM7",
  "key4": "3qJ4GdRA45wVx3Untpy155RuTjVdy7qBCYkyq4iC2ADXGcKgMrVZq9EiLKMMCMy5awHb4NKy9unpAAgtKbdp6sFv",
  "key5": "63NF3iQbgQayPEDCr4yo6cpgVY5CMRaSuu3KvnSsVMQtAaGESoqLerkVECP9A8RpxSSWd2WJQWFYFyzox2tKaEj1",
  "key6": "4WhqBkNNQUgGa6aXrHYCstxPJtZJA6MnoUKmwYaAi3VJYw4M5HYDc3HgWySqzqBCdtWWGCgdqtW572LQJkWqYixf",
  "key7": "5xUpsLJ7VzfMQWpiPQT7P9M3Ua9kApAKibHVGof173emH7zyybGWhjEeUsyEoR11QrzFZNPjomyLwW7Q1UB1W7AX",
  "key8": "oDzXDuJ6rj6DrPUCyBHeLKmv5tgwVZwwqB3pRBCH73yx9WXqHnqejPtGkSVB72RSLt5i6dBB8j3u1r6JVvhqTuN",
  "key9": "4gncu7W85xKQGgh8L4yZ3ba8veq3uHnL6TkDMpcbcjy5MjaXW4L4MGNXdaJ91yuvfRb1c5rodrVoknPFUqxx9zfr",
  "key10": "5avjKi6YfuCW6APdJcHESt6AamVe4YKys3ByfSr78gKxWbUdZ34VDuMosJe3fBeAz5bZL9XkRQnZfY5a9Mfr9DJQ",
  "key11": "2UQaruhCyspsVFpktYZBeatvoPZCGfcp7ppd5NceQ1dBTjLcvNeWeJCuCg36J2nCcfp3tBszqGj9qYgAfCjBAc5n",
  "key12": "2rj6Kor2c3tYLHv476YwKKktY3tYGkFkgJ6va24SvwKeGTEzXkZP1hWsAk9PFsyBWWmSCGPfLyfWwFsw14py2tha",
  "key13": "5dm7u5afMoYtYYwoiJZceowx94BCK1pJfQkwcFfq6Eoih2WNv8ouU7adwdBeZWAK654Kspy9WpEPa6qTH3TZkrNo",
  "key14": "5DVMGVyPUF54XnppxAcxbVjWPY2VpPcQbQhpe8hbkxmrPQunZUJr2oGcimvQ3zsuiPXS7EUpNSftkPXSER4VKHhU",
  "key15": "562AXnDa1aDqEQrZfGNjtyt7s3CvmLSBPVJ8oRDeg77mxKywrFyTJXBJXwV1K69icUFCRApqE6StkF79uhwSd2Zp",
  "key16": "2g8o5FYtC6EXR5tdH8m9J2S8A7GJ1btNw85i2okXeXrT6Eg9nU56roHKqvEWHAQWyMAHgjVjPZkzeKAbFvbTqpTP",
  "key17": "uq34QMskDjvSPYcj4eybN6hsso4wa5vjZMPYsNytupXSkUHLNkV5tG27rXU9ttGtJ4vUJrhHW9NGE5sXVT3U4do",
  "key18": "3u9WWLkNzjtkS8AmCopwTuP6ZfHsxGiuWbyRqfL9QbPLsKaJ7nZQ6Ktf6pqdmczJ6q6amkvfvrTG4JzK21sjYSuU",
  "key19": "4cuJgXmDeKUfrpj8SSxq3KPquHrNsKWJLCMRTqaP23LMV1S3v34v9K7DoBT6mf2x4cAQxEpgnJ25A2TxVYUbbRfm",
  "key20": "zv8ncshAUjinu1qNWtbAQ8vxi4f4VYx8Mt5T3V2xSVsEfvLnMQLnuPLcX2wyakbmkrPxWmL8dk8qxKkDbNFwKGe",
  "key21": "4BLiuuYApdGBkMokQXEW7TcDje15xjNHZk7BNMdeNPX6ecMxn7emCKujkYi9ZEASWpsZJ79mntiBbiSf93L2ogL6",
  "key22": "5iskZc5tbDK3ASBmVyPpVR4wo4763GUNHB4EeLeYNmzwZj95JdArTm5kw69JUSN3Lq6xoHYV7YnRXLKxfcRhGY55",
  "key23": "9cW8vkxhFqaitaFeXwaDhTmhdzNRUeq71Go2hRkABiePnru11otSPaWDXNd2wSj8JSAthHPr8izyz2GjDj1DD4C",
  "key24": "5CsGTCzbPNvsJUZVFaPgLEo2wNsi33gZ2bsNJt34n3tpsfCY9N523taxuHvsYpN8GKDu84xcgymGWX1xG25CoT5N",
  "key25": "295GqbdK32vpVovAMaY5sCX5KQnYWk1ypMXuTYygzjuCvmZPRrWnFZRETDDJfvAu7izv6Zd7kx5WqWh7v56uQfWM",
  "key26": "251zQGy5SJQwb6M36cttM88Gbnd5Lxgg6BGnF3A3pAouGZEqWHmu7JsmhEFZXN33nTSfTADbCj8pENwcFTkRkf5W"
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
