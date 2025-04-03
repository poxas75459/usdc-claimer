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
    "3LfcfmrXFDoNm8WdztAMfmMTgs7rWAxmRrkFHcuJc4hPsBsfWVDjWSTjh9RAPMxtY49oumgo47Yye8wZx25JxPaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oCMMBDq3XN69paUps5pn3VRahsUCbYcpdtivkf8GctEAW1hBnU2pGxuVKrQreU1TTMZde62scpG5Trzb5YfNRWE",
  "key1": "hakuCaF7yUj2oUpzYhFUCJ5EiYSVpRtimU2sWTUuuA6W9wb9A9utk63UB3QdSBeoMBUvABJBsvo8jptBR5cySbJ",
  "key2": "5qfEpxcA9m6nfVJhjtNNBFmwiHxbQoygJi4XZRh7K3y5ftxPsjxUt94LcaHiGQfE5FHfwc6vaQ21c1Jf8kMyNDc6",
  "key3": "2DgKh5x7CZFmeX3xsFWngKjorFMEWxHiHDVLe9cCJyZ6jHCmsPqEGdtGjosoGZCb6uqPQyFYy5bniF14CeeTA2F4",
  "key4": "5dynEf7aeK7KD569U1JnK9b5Vxru7PWu8JYT3ehKCRrDodYftUgHRGJFgZmmcWWK9BpB7Aw1jyodwCKoAwwWbE84",
  "key5": "5AQhznzBwdnYdkQLV58w2YDJ11hvdSwhZiFafYh6hAmThUn1fcqHibMJvADWxqYooDxb9mQJpbKJ5B8nkTCv7KnC",
  "key6": "5aDT64K2Sf5by3FZWvTBKefkVjE7fKKWkutZuGmTz8CdihM8KLgAVpoM6BWSMov81jpaXFBLfDvZVsSyCB1trVD6",
  "key7": "2LUDLkLSaorMKec9SrQnJSkGEGzXXncHfn2j6hYS6cvwL1bjucTFW2MWM7iPifziFJq6JD7QV9CSDRevRcHdu8hV",
  "key8": "3DiUigJpUeikHnF9cKMnDHeL4wGyssDkezFHspXZCz5Q4wvX82dkpqu8gEoSvdeayHBeXyn1GDo81tfaeXBpAQQE",
  "key9": "44sB5CHDrvosewjT7j3VLyL7js93KnAQDAf8Z7nTfv4e1JaKNKsb8feV53NzCnPEgJe3eaQNyMbRTUrXUMHT5BP4",
  "key10": "2RagGvFtfMXaYvG47jzygt6tQZ2UwJr1rCpSGrqcgQ2LtdnTd6u9Pp1D9CiaguhLeQaJWCPSVHu8t5xXHtxvJa3J",
  "key11": "4k1XwvGxe5NwR8ZDBdXqqbBwhhQHZ185kkfUX9rncJhXeNHpT22LXa6nWV2JdhzumVFE3j9y8nArtVwZEfxZ4cuE",
  "key12": "3EZRLhtsHgoy7A1XxbiiTXnE1HSeoc7b1bdTqwk7Wm8fgv5jLbz11Q4ehp5RWR6oQQParwFY1BcrjzgoEYzZZNKQ",
  "key13": "2kmNjcH5VX8KpNnHGUorLZu9MgFrRyQ5xyuBHewvqhz7GzWp1Qz8GTGjTkYcCzMNRyzKndhBppj4sK7fGdYsBPo3",
  "key14": "3kEntrvbWakd4q8Cx7svRqbFrHWqGE7vaBvESXsQN7TUvCg9DfY8Tuxyuc1SbTwSwfgcs1dZ7r18x7UKr9pyoSwJ",
  "key15": "3hdqWSLxKGAyhqRn9AAmUsHfppjHAoXvme5QsPZf3Sj7GZ1Xb4WkALNyX4oH7sjimXgvUKj24ie31BExx6xmrRZ6",
  "key16": "4FWE2AFYdD1eX3Hu6gj9CXykyZ5hj58bzPzjd4MT7zt9x9eQcRibxNaxvmU3qen2RvXywE4573wEgfssKD9PBpg4",
  "key17": "2yZ7c35C9BWxhfvy7py3C6QZR5gGvydoWoF1gS2LaDyuowedMGF2GbqTvHKKqsAu53XgagRtd8vD9StjPM6nWbE3",
  "key18": "4a3WHjAzG3VoU3byfAfA1MtVsVk68xnmZh4H55UdFWdGVX1sH8W3LupEF1PimESbL5UWuQ6HZB3UyW8hX7oAdk5h",
  "key19": "5Xm4Zf8AWYhjxmc9nMD24nSXDBUewJsiuqNw6Bxh8XgnEPsc6mAZ3ASHsU29yLL2sxmCgCLnaUqao4bL2HVMXNFY",
  "key20": "5dmSHz57B6AV87GQNGtmExQysUdoKS2etMCkoTxP5w5YTBRadzPghJsyci9voVet6tbTNmoSJhMNGPauuXDbVpgT",
  "key21": "5dAkfTYvrLRCDKbKQyBGQVW9B48dbiAzC9Yn1puRkj29ktdV6HemZLnD1LsqBZNxB1Z7i6eQnAvVNP4aQSVBhDU8",
  "key22": "2p13VSLtqymMNmUJLZe2J2zVuc7tPWCQSCw5o1f37TAFrGqoaiguLkcjh7MuwGq1sr5mmt1ihmjvqBrbUitR7hYt",
  "key23": "3MMSJiY9VUxuq3GyCZztkcP3ZkyErMEu52PPVMKBJ23RMuCT6f5vsKjDG7572rvxNw4K5evk3JVHbj68ybJFvq2B",
  "key24": "yRcpUYzFWR2vjz8K16pmsoVCb3ShNE39yt4WyMBBPahNUxvonScMqgrRtszxBPxoP9z6yY3Fxc36k8gUfhs8BBa",
  "key25": "2A1xRSHwLfM1kQCooZEUSngvwSY91eprknYtJUsKo8CL11HyR2jTGcTH47JXw4SevmYNYuT9G53bebo7WzijJb3p",
  "key26": "4WF1ttkf13xEJzamwB9zbHJxqPEaRheMh1FpxEGb2Sm1aMzuiRE4TC89WzUcVDmuwaWPzdFgqzpczwBZ6zqFg23e",
  "key27": "5wCgLkcPCNgMy94kmULSAnLgyWqjWduQdgXVP3JK9GwLeSdgyfXS6NjahWp9YKCaYjmVvnHv7YSEGrGfzqNY9KFw",
  "key28": "3YS3ExhMUBEyjMhNjAq6o3mYWZT9rTGygEo8G6xnFU8NJYsPY1UKGtYusH3Lqpdqcm8yk13NbSqDqnHSweXMhGZq",
  "key29": "584aqBmtSpB7qzs7cGi5KVvEnscE6EgFan2CX7fQx9Vrk2yFQssDVBtEQfqBbpS3XqDuUj7FU489F8gjLh4CQaRm",
  "key30": "5CUfFgL9wkpGq84HApKBVxRndsjf58ohFB9bFy4UaBLzMHmnDf6oAQT8qRkESMXt9kfGZ5EUBx16caz5xLP53dec",
  "key31": "4UogxiGiDZ4NqEF1hBRxUbQWK8p46aPV65T7ygTf1FvtEW58DHWwfhEUL7Vsj8wvSMmFwzQc1dJRDxqXCGJtWWfK",
  "key32": "4P9dsDZPbyRAgBDNM6MwbFmKkyC4tTDgxjPT9WevQHLPoTMsgtZ7LJMo6n3bVzVf38EkVucwrQfngydrqMYPZT5x",
  "key33": "2izXFmnCknkgh18JBvPu5ZjQXHzSQJukDwLy8esemwjmh4ZhFZEZbtaXXprcqYP6tC1r28bW89fAqKy3YbNxDbF6",
  "key34": "sW6J5UpRtzmdYVf7RPVxj9xGLA4WeZqj139rQrZWpx4BkraSVzRev4a3XxT4H9Js1XRDeaxSx887rQdaxXggrwH",
  "key35": "5F4WqurvtUVot9AoNTXGfrfTevNk78Mvexk7o8JQFYZsXUVsXX498FzUgZKns1WLpa3nDQ3njicgVNULze1T2riL",
  "key36": "3r7hFkcAUR8NHTFnMC4eeF9ndHWTVChptQNfmrV4NAXe3For6xcXCTnFBveGo38i5Qdf4ymZhgdMpW2XVtcgb5bv",
  "key37": "KmkvD1D1NME5fapcPehEnSHwrkU9vSjnLDTDqdr2GQVgj1xKX9jX2yEZVxKjVkGsGF3w78F3aKVmBjrjfcyD1MC",
  "key38": "2hfk3f49pTp1ukXyXUrKMU3AMUZDrL4T2AVWyPGeKHCp4CfamsWryCRJoaMjbS9jc8WNcziaLtGe7LxuzZiHMKxf",
  "key39": "5t2yN5Tci5nGpqC5AP3ybxPtejZxj1gacmb19Axq5acE6SY7vFSPDSstphXqkXoeqwtDTQ8iyZ2q4yZoTsEFuVfx",
  "key40": "21nVQCN1rDoti7BAvdH5a73Yn7sS5ev2jvLaeEVXwhaYFa4qiWgmn8kS9au5omDTUCWTuXGLeNDV2WEHNGCbXkNe",
  "key41": "25P2KH2XTxBkruZZn17c3ndtsttnFAv8AYknZyqMtUBRqPtammqDghyUjKX6QdCYPsPwnLRBjomPTfLFgvHVdTtF",
  "key42": "3nTn1hoXF4DASmnjfreE97nfd6oKxGmsTPYPqmTfXRxDBRKdHCk1U4VsuoaUKZVvMVcFKrYKjUHDrsegprmyYw6",
  "key43": "5uaEFNqriSRXnsHPankLfwgQVLEZF9zwMHUBpjQ15Fjpt2c375nCYiJKLTW4Q2FMdU3xx1K8LNo6FntLgBtHDf82",
  "key44": "2uHAsTNyuESesvJWx1NawCpxteVJft62gsT2ZMNHJRhirj7QGM7VpcYiZfTEqaEDCfLRdeW14aYJog4toPaSg3Jk",
  "key45": "36i4fEWL2yxKfJbg771siCkadsWKnewq5piWEq6bk2ubaZ4uJYnsv1uFaVhgVsvnA8fAbrKFwbDQvvRHDyx6bfXe",
  "key46": "25qio8dySdz4TU5e1UpBRF4gLzmoEbzVa9svZ5iidTUfQMN85bDmdL5PqzsQaUYmXG8RBu1u3zJY5BRCGjo5maSr",
  "key47": "53DbKT4ifx1Bta5bXnyRtsKsxYPhF9UEgWMskcuNZEQtBppKcmyobbGGaPcdsBn1hWp6h22PN4uEvqWj5QJDWfkM",
  "key48": "HrksD2GUzV96zU8kVFpm8Q4DwNjKyHxX78pyUyMA9fSHJEzkS191uVgH9gJBMm3BMfukTEhGfGM1mzV96zqBqaF",
  "key49": "4fB3ALbXxRwv8xfzuD6G7jbeQ8wozAdHPJdsvVdKdjr5SAL8kZ6nQMbQNsPDz3LW6bcZ5W2UeU4xJZ1XnFMBT5zR"
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
