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
    "2MG51rCq5Yh21sofBAaXCWP8a37isPcU9pSadSQyvQujUEaMee6Ee47Eazx41Tw9MisxLr6do7N39TBrpX3tKxTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BKoBKqoSsUSkWvLBoqHEeuAb67Saz5YPEX5uMz5pkx9pfoPm1Q5XL4dtredLAtLsKykmCzze7pVNjDKJst7Jzgz",
  "key1": "44p9VXu3HqH7334JxSaqPXmQabJWmCoYMGyxrjjw3vASghsJv2towLKnc5zPRagQNeEVPmwv89TczBaF4KQ6ByMU",
  "key2": "2ELJadoLKb8SeE815aiU68ck4secZJ7543heLnRV9r5cG8ewG4hzJyb2hLi7dFG7jPv2Dzh8t92ERoiEBjy5nFyQ",
  "key3": "2xjjTA7Qdq3QqXZiuGP6ewVpvZXiYTD8YDzyhC97uLzE3zhHtC1QNgvephFd7VTNHPdtqqUpZ59oaSofKELxK6bj",
  "key4": "45Rf3Z87nam7gF8S3Qi7CFxVpXLbS7TpbyhqUzSKqvtLHSZncMonjCFi1vpkBUMQ9wmC9k3e19z6ZHhY7qaT3E1B",
  "key5": "4uU99qN1mhc9Q41V8f1Duv8s5gpNT17SZX4arU7Acm1z74TMkSTfLSXAf7dMXZC3skqzWJP3Y7sjWmHqWCQUYj4o",
  "key6": "2SbjFJAjsvDhjMh2P7VjNZogtYCQYxJDi81RQQRyxT5Re3sjywcX3PBNcnnWjaa9uwnEfiScPGd3xHpeayH3D1rX",
  "key7": "3JYn2MHrAYvoBytxtCAjaVxsvRdQxGooUbubPqX6Fzb8Ngq9ReoQ8vDyYGaF7sJq4jz4jxuLTMV6j6boyDxQgD1x",
  "key8": "2eiZGQhdaCGqT2fGutmMMyTwUKz7PqoH9tVbK7NfCaPU1p5KdHNbCpBP8htRdt2PDDoP6Yxcxyi24JbFPP1CUaJ3",
  "key9": "5EaZf3HMg84LDdpRsYuFek8sHN6vCMiUDbCcDiWrQdr9Bcfk5sUGAFb9xm7SgohHdWDh4AK7oBY7Nr1CyohmCjSo",
  "key10": "BJRfFKr9xRdoTKvsbkPq9EDoPThD2knZ1fx6r7xhSAMSAdBgbxEsyYwcB5Wyde4LiAS2hB6icfeaWtyUUL5n3xe",
  "key11": "26Ld8x4uhWXDFqEMcykTJB9NZ4bUPMERZr3GzH5sTfcHvbLs1uHoj8BFAhdURZiRe7qxqXpU1oAZqyyJTN5C2TxN",
  "key12": "63KX1ejj7HhZYuXDMjkRVRFy7qU6roJyx8kpX2BKdL3VEc8ndyjd2dWjf2gHNJ9o9wHKzW9c7g75ZFjdC9LoZpsZ",
  "key13": "CJSmBY8Nfk7zibnDksDzUn7eX4MBry6KVCWoiA4MHtiqd5iuuzF4UKCLD7kFs74BdedSpaPcdJbPSXsEfmDP4gW",
  "key14": "4WVcvxbP3BiQqMTATEcFyt7Wdgjcmp6PgFkizFsrte8BL48kxdU761Suty5vbkbjLAAH69TP791KwgbkQaoJqX9s",
  "key15": "AG1WaYAHwxezY9n3seuw84iKpQRQPsvnPSEZKCoBYNjvqCVDyBWmSZvxBfwzVWTu69jvprQydaD9b1tZnRhdJVF",
  "key16": "52VN5HfbeeKYvftsuEQxkqcseFMfDpvdZB6UsA483yYKxLbgCJZnctSsoDuZQNTTR9kSyUg4rPdyCnArTv9hrNZW",
  "key17": "4wPxLxQk6gezaop94wcmKtqaaaMsV2zy3zrDcxoFH9gb4fwUChPg2DotVVTtwfojd5cEaytignNm9SqAUyZMDXpC",
  "key18": "3iA95CKD6VXgwixBNiHcA1LDG1JcPBBEERjYHrhUhMHefy44cpQ7fn5bbQumXBSskJLo1WNmpp3CX7My3tdQRv6T",
  "key19": "2duEBeRnHR91Gu5G79GYRjzCE3ygoJPwhh9T2hxJS4PGkYhhoA7Z6MpzqBj4zHB2aGRL7mmomXxdWbEzUBb7mYTL",
  "key20": "412g8LuEx6HcEUTu6eYURCyfehk6YSrYbrecgw3XrcHYFvwtMaoFTHMXEM89VjuYfxrcj5Z2rgAWGaArvJ9Lrugd",
  "key21": "3r8iucoU5hn6ryB2NyZHYeTDW63MYJcsf8EUYPQNRjJDreAPupw2svvxNbAf72kLv9aqZGkuGmGmn5en97V38WPx",
  "key22": "2fR1A37hfaMh89Nafk8VVQNopf2irwPD7bg6LH7cB1kaVECsATWLyVmRH8W2TBczfhU1vFE69vtxTjD29K2YDmqg",
  "key23": "3CGWPeD7MkboHtdSgfzdX7Y49cDjP6qbEgN2E5ayeDG5BvgbYEwS4cgUqXrZQvYEUR8rRcAwhRjEvoNNidja9y4g",
  "key24": "4g2wcd89LnujPFh4FahEFaUSe1w9Hb5tVf9Ef7upxvvSPjCK1LGZvwp7dvPuX55GJduKoajGChqCfCqJe8xXUo5v",
  "key25": "5YEJzWdccGu7CR75iedcwx4DiZ2yGrLEXz3teGLCoGGKHiq3fQtcm99nF7UKhhxvQ5JRT6GuPCTfTmhUxEWcrWMg",
  "key26": "3Ygru85D3anJhAnFSSZoWyBMnzAdG9im1ajqotUyCkTkVGtX3Vq2zJ83jxJGupE1byYHfyDbqZ82nb7EGcCQdA1H",
  "key27": "24qcPxarSAuV8zryWCJNuQgxGUVGvPCsSbvVgKeXCqKAtiLCN5uAKNHSAccoACm4paBX7Vb5Yo7Sm1JL2DRZqcWw",
  "key28": "2AMYqCV56r2Hk6PxBUFnK8UYyMTgYKyfs9zTAHFCT9icWBdoB6Bj5eNGouJxfWoghW9Z9vTq8BKUjasXxr7LF2uJ",
  "key29": "47J24f81YTRPDq6jKgetWUHzbVDGXjG7CD5SKz7ipakqXVLsJY5JrsjS7iZYxarSMqEnDFUfq2mpxXveafNd2h6N",
  "key30": "8h1wGHigfGAL4QKduQDhcCGjCD1eXTL5MXPmm6pYEhPZqgKmDULfHg1FJQ9DfQqK41wScsei1wR5Ztd1nLwetgp",
  "key31": "57H8aLXNutg1sJGU7NNaCVrjCj1d9Wutk1FjQcGVuAwdbB1Ka627UgzxLbYE1MNcHdkSwVc9zFh4o2x8mq8An6FJ",
  "key32": "3P5zJHyr69fAvmVhT4rrQqgSvXQDmDxDBRdMkoV3MXbh3CLHmAFcbYjiKajUxAXTmJHV4TQki2QWdbSxYp54W1i9",
  "key33": "fc6WtiVhM7Cmv9YDEVwwuCExJDjjzVrhdG1k3oAYq4z2jeMCfCEuBLq5miKq5UWVQnsxZt9S2SiL8HDqr8cRtoU",
  "key34": "4Efueg9N9NdihiMqzLgpYz3AniSxN4kJMHnG13z4U9gRw8ramrMtg8QzcpTUnKj6sgYP1vvTrjUQHyuHPAnLDYDE",
  "key35": "53QFrysg4QerocJ7yRraPQas37zw6ZGScFKbxsyS5UzGkS9NVD3Y2hrQJJgnviN2kBTJnXwFozLwJRN7fH7f8sfZ",
  "key36": "4MDTFZEFsU3NzYu5wNA71qjPiokADhfoWuSNJyRXkxrfvxungBGPTexyiadkYFfa4wMW2VZsVhG2eF7VSA461dWL",
  "key37": "2hVUriGH45wPhwNWWW95Q3x23ZApVfmVThJDz2Tb6dSRUrb6BFJvBz89iMqv5jFstKWeowKnpdNVJjbHzAsFSteM",
  "key38": "465PU479GwAKp6MX53QhSfxJEsQ38PKGvmqefNPivDQUdbcJmxqESDNerht6zJM3BNVnDRj3cEfTAhJgEZKGJpSz",
  "key39": "3ous4fU3naJciMFXHxoddaisbYxqEVGUqq75YeS4H5jebwMA4wfysh1DHSA4fgKRnqYQZPyuQ4AeQjEgkrvb9wcX",
  "key40": "2hoDzp8U4rd7dBrL3WZ91hozU6TyLQV6gULYPodeF7bathU6ScGv9oW9jwn5Wq4y8eL7ibRtkA4jHzmx8xrKnt4h",
  "key41": "41oYtMXdebgWwPLFwobaDQK4F5i8GvXaPwiAUc1eUEU58HjmPVwo94FNV6fmhv2GfoniXbL5TMmfbnSwkUGLkuLj",
  "key42": "4KRhiv1Zk9cT4Wz5ebptW16V2LEPCHRKzq9mMStWjwSjuCZdpcRSNpfHTqii3nAk9yCMwurZtRcB22Btoi6F4uCm",
  "key43": "2cB3MN8jWNSA3TvJAsDBVa1yNS4k6SjCGVJCi7Ne8hT9H38CkTDkrWEQRi7tMvRZxW9rRVCrm7RyjcgbFjzfHnqs",
  "key44": "2aHbHsTggQPaBNkvKoG1AEvKnamBNC9brboJi1tmtteSr7SHHE2mb4KjT7Ampp3LxohnBQWyG7zYtQ1ctiBjef94",
  "key45": "5NnKvoS5RcCjVG8e4PupuTMPBGYvSpuzX2hMTwgv62cX8v1JxwLDVETfX59AsVoem24y5VfKSPmnQdqNRgb1ohRD",
  "key46": "4fiHBaooccMGZMkTYaAahSXkTwVtLTYkuv5A6V3vQokyxy4aXZmn3qHBbzgbKJTi458UBgZMxqKTPV3ALRhvRbAU"
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
