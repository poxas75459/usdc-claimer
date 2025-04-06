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
    "3V34c59SiGeuYiABdApVESXcpENxNandDRKWDH8JFgo7dLTU6moPqSTLUAVhVGDy8Fum9chb9hZDixc7PP9bmiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zjjsixvHiqpfQvmZLLSBwkzMdjJZBkErktkBhLaDuDcXuV3Ybx3etXqecaKjmrMFzRjShYPLPvyErDXAagrDkom",
  "key1": "3AmCnt1ZuyxCSdKk4iVTSbu3UQjKWNMTi1kyT1v6rcZV79tm7rMxUFZk3u481N1CvauzviEPGEJYx1WLb4WPrrte",
  "key2": "5M4sdBwYayiAxFFsKe12iwtdf9HM2NWoNftK7YXGSi4sjF8tFfDdYAR8wbfTWTJVjTaaimpPqGx5BbsNXY2XuT3A",
  "key3": "3n8WZrVCg68sE4PjEnT2Keud3ikmsr6kjxZC7v8hdJpAPcSbZ7qmYQJdPtKaXpDsJ8HLfAmuwoRoCRTvFwAYXzdB",
  "key4": "2GU2PpwtrmvTApbe3rzrAYUxxY9P7ighDTH8YT4z4hZTK6ahkCf6wxEZ2GnR7CPaQHR6Z4Ponc6LvP7PgnHB2WtL",
  "key5": "4NecHqJRAw6gRK1BkHpxnWDpgytgBwqmrZdSZgs7tyrrMC9nzM142uxu4J7yNNVw5NKBZB3PHZzvPHoVoZnhsQ7Z",
  "key6": "2fWhLC7LniFzcnPp8ZSBVJdQVJdtg8XjvTBXo4a7gMV5oHpdUUJ7gkeLzCQUoCQnXvJtnWhhPzPmL7qsjkXGnpCR",
  "key7": "gMjZChAqTzDJB7cKSWE4Nny2SSs5FomoZCfgsZ2P5ePLFrBogYNnhJHKiUeyysNNYuRVEaspiU6qXAgpBA8TkXp",
  "key8": "nsnkGrxXuK2DgvDmJr4hDUQdb5wsyx42VjbLmzn1kNLKs2V4zLWCUqY3YKriBHLQorYfd8xMSaUhURedSEZyP6F",
  "key9": "3D6iourxVdqtBspEucDM4bE29yxVA6fs2EvBREYCtxC9XPtVRdwfgzSzkRAJZtXEQiAbfcLijijukWfbkhxtZzU4",
  "key10": "5ooy4DxaGJmDKqWniev7shx4yoJ1ZwEqLFZKr2Gxpu4SYfe9NLCQTbWwm84dnBpQhV5UTN9yfLKwyDrGr6kX91iJ",
  "key11": "4XYw2hxc8MnuhpvFprGgpmX5TJfyEqKhd872PJ6gVsUznbX7RnL2Vb97BNcPYVt4GjP8XeRrUVzu8G3DyjZTRRNQ",
  "key12": "BtZxFD1CKFFv22dQvXyYMJPHqo2hzh2dpfEa9vuSdBQZEEVEEr6PxzzmVNVjDU8eYn37oMjoHAGnPd8rw7kdqSS",
  "key13": "3irNixytqpkZvTqTBxso8qqNGSK9FNrsnF5vBLmpVrgNR5TfoD57YQHBRjqqSpBwvGxd56ymQHyKSX8QAdUSQEYZ",
  "key14": "5wT4UWR6AZsxZCAxvbNmJcSPCU81zpJ8VduBsRP5HaAr7NDYaTCYfaQSzuXCSaM9jGWBNqus7Nm1P45n8g2fjjL1",
  "key15": "2A9RbrqBzZ1niQiQxkKqQKmcwAzGGcCyH4ByR4Yuf52vwKVx1TCvoPmoo7vQW9DNwhqoLRMgrNMwWKh6g9J9wDMw",
  "key16": "2TFj3wsfeLgbqnZFtwZCNE6Q9cYkGTBXoDdXK2gB6Nwe3iiDmD9nP5rQ5dfDjgBroD1wMZwV5ZdtXCsM9xcqwe9J",
  "key17": "3MrU9rU6RUSF8Zhk5EDLRXCSAzNdxBdwnDeC1TGZFkKwWX7JRTX5uKeQMcEMvQfHcc87KP4DcKUCVy7N8o85jFaw",
  "key18": "2hqYb52E94mgCiLJhXVAnQnzs1dwtQpRtRDwF9gMFdMsdm5Smozz5tighHrkuwz9umqp4HTBybhyqoBwfp6vBfKr",
  "key19": "51ETz85Tas1rXHH5FturgCKGvMuojBCL83aNWDuXsCGi47g3utvR9qhf5mYrrkAS8vT7RYFJbMtn2dqZbVQ4KVdj",
  "key20": "2MxkLvhEA8ty3nkU8HXxuj2mhEFsbneAvTMC2cfgZHfyh3bZxbcc2RTiKd54srrA32mThEP3ZhdCzikDzV9w8DXA",
  "key21": "5G6EYBMsPWqt3bzFk4fASzaWeAqEaNBg3fYNFdoE6KQYrHJSeaxUuhT3sfNbz7VpGC4jNAfoDVbBi6n7AtrdKWxE",
  "key22": "44uggGVre1HniFkA4kMKQ55QqoKczUAUBisj1Ej25xbTwEQaE1hLHFDQpfFtF77cAQULPKirqKgR2xu2coe7aAxf",
  "key23": "3oWK27NKSUusvv7w4wAykMAoQssPrhZREgp2upXHPnM9rAqyu2jr7kckWa1RNzsEAqA9CiKDqJZVFupzxB2MUVph",
  "key24": "2zrhq2qY8v7Y76cby8c5FNu4ZRvsy4fMrTM6XZSkZ8SPi1Ey67323vdmPJVXwhFbvcW191J7uxJ5xDj9bX9kxE1Y",
  "key25": "FHFMJo2UiV1ATXm5S6kbGwX7xJy4tmfyf37Ua2fknViAjsFBZ52hGcZsWPWF4xhZrzdxkswLqohHddiJEyrPRbn",
  "key26": "zFdku7MH6xadXhxRjdqm6cYm3aVjvTsXXngkrj3NEX3LUmjn9Zm1XQ22SmXCBG91pxJRjPtZHVsQK6efYegxC8B",
  "key27": "uwhhkAjrf5NFRDQZkSMsT2jxnDKRLi1iAPfr7cdXN9fLkpkUbfYKLPt2SLBpCeDeUH4ujmSLuQ9cpjybk9izx5s",
  "key28": "4yphmgf5SMCDtiVe1uCyHgXvDPVW9d5cNfS7gohLk7vEqfPLj9wyDSbPvs7BdpT8776wUh357vmoPDY8ZHfyFR5f",
  "key29": "3KaCZb5ZinNwuSUgrTaCo8eU546LjndTZJhrcTVDPKijngm6QEHczFpkhJLQ2b7drNCUCXsPZ8A6MBhTC3ngaVQb",
  "key30": "4nsaYvdkgWKUTvVXBJw8tKFuayx1JkqaUqc7EQxAMVEgbtEWa2FozsnfePuxgUoWbXKrneixQPMx8KZ39vqHqFXJ",
  "key31": "557GpXZc6hznB3HPSBVoeAjY8R1VxaPEdkLN4sor54xznBe6MXWsFrPRYQn6RVbXmwMdBsrdLWf8euskgyW45yf5",
  "key32": "3TMzQjNNNFt13S3ff8rgTJiX3csufmzTVeL2mEMoLqByEuPeswGQS3YisABX87mjUQun6JeCKpJSqQfg8e97a6uX",
  "key33": "4Sw7ftaY2S9ThaTAvgmWCfpDmuX8YK1Dtxd574qMPz28Uw9wKwcXSKdBmhREhANzJGrAhcFL4qjeavLa58ptDNYB",
  "key34": "2ANZuzjuDdT5735WS2xrbmPTpmShuEZESLeeZxAn5dXqH8YCSmzFmMf8Q8GGzLuwHuHmFAarxi9rH5AkoLRN7FkU",
  "key35": "55gWgnTBEkD4Fyk3pRXNm4d8EJRTLM7Avvr7UBsL5zERoT9AnsEEvo2DbuVB9eSy91Dvf7hCf2CMFj54UoMATSZy",
  "key36": "iTWqc8YUBdwHW5p7L8oPPtXedSroAceG4EGgJtDogNh7NzTyXVHoBcxtwk8jE4Fwug6QZesRego7M7B4iifGrQi",
  "key37": "3XRL9QepRHDfu7WxFN8yv7x8BBSNTGhA2HF19ZJwya38TWTQtQDPJx9yioSQmeMCSrU7KzUkr1bUdLSwGBCchQv",
  "key38": "57oeYqhw2ZQXWxLXUgLLw2rUJj55aSEYNNZK3Bd6mAkTVjDDKUFaFUCwsK7GnLaEPC3wZDbrw1x7DLAdqiPctWvQ",
  "key39": "5Y2iPCCtw6roVCPMUvFmu63P193T2vgHsZ93Z8nVRQybQTTM8vqcSn5meLcTzdQfcuFeDG9URC77ksU4im9BBfqg",
  "key40": "3mFm8o39rdfXJ3DXRTBM3TWemaz3FuCgskvvRSGjmC3z3XjjE2f8XkYhbiYR2CAEjbCwDZgbNdFuv1HJTzRsahRf",
  "key41": "woMGoQzaGipLkTvVxUA87hDLDiA3KXK9s6b6RpTp4XX67oHzTDZt89CC9De8cSQ1JKJQ6urHFdNQnDmABNZRme6",
  "key42": "J7TfXkKEuwr7fRXAyDTHEkbU261xFsQQ5X5VatMvRZHAv7Yxz28xYPinSJ3VuaXSAc4xokNouuy6G3N4CTSNG4h",
  "key43": "kHXizGRLiuZZSG44S4znFxKVfXB7YaWgZrWpJn8gDgeJxuAiuaibPNEYjBQqQKapNUcH4SjDKsacynpZX2zAuAW",
  "key44": "43WpzZWbMfWPXjNxd5eqM1Rc94VSnAdy65S6ekDUMwePXuArZzu9doZXP9iTkFRX5J7CMf16BQuec4itZUcr7gk1",
  "key45": "4Q7TAA6Bmqvib19H2habokjBhru7Ej2HMqF6UYuW3vmmeRyJcMUpjhq5gkFpWPKzYV4cPPPF5HJ2z8Nz5yEvVS29",
  "key46": "3BcnAw7XbKS7ZVsKdwkBMaD89hfyo7RZVEsBNUqqFtzhd9E5WpJNxHfhuboTqNPA4vZnk7dXyMYKVa6UU6UT1gNm"
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
