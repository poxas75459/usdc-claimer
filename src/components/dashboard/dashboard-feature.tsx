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
    "42b9KwcRGDuZw5ZSpatCkWUvxfCjP53mqF1DrzhE2GMz29KU1KQvo1Q6imypUCqbtUJXanpBGrw1GVpueVg9V5A7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21m1JYCkN1Xpw4n4N85W39EV2ST513ZeRnukLCqTTZb8xLWR5xTkpETYUXrpGLQ9CfB5NUfV988Fw9cYGfCgJ7Ti",
  "key1": "4cqfXF4BqZ6Upbu4CuLuKEP7XnGCH3KwmyTYZs7mSjhAHc5U8VFE1mwq8xRhPetrV4jYCh5QukUPmG6AG8Xh5Uhn",
  "key2": "3yd85vdJtGHdekM65oAoRoMSy1iucqGd8djzzB5Pa7KgKMCyMQqAHA4PAxuGnnjo5vTCumdLE8bikwPmgicJwy4m",
  "key3": "5Keha7AvfRHvCErQTqPhCsXTxiaqeBKxMz2e9b3nn2T3S8fxjJqZa2GWkPUmfQSZ5Sk8mT64v97N2qDBNUi6zXLS",
  "key4": "24Qx4GjupgZ2Q19rrGQA7WkftoJziwR3S6KrtSHXUGtFKzrScVE7QG9VpRorTPNuWFk3N8DVrFNiV5G3zyoRRbsU",
  "key5": "3mX5CdRV4YmwVk7CtWjzgYZM6K1Lam3gMZzw2AkuqgBe4tZJVFCsu9sbEs1F23jFcU2Up2PDzkg7jPJSCF9bNcM1",
  "key6": "4z4mw1Mfx4Vfmfu3VHPtRBxFLuiF1TBbvRYJs4SSVa9a1mGoJxLYGZuvx6yTWfMMFEDGeFoTbR2bYJSSsNKDZ4vk",
  "key7": "y6d43i8BSzmz6ACVM7Jxbh2mKhnURST54qsFwQXheEJfEc9nsNhRwzeYs1ukeoJH5XwtZGkUWWzN3LCHUNueu7Z",
  "key8": "AwRHP66w9TswL8hR8JLxR3bB8R2M5tdVEk9yAYBFqU9umUqPXdrp5TWzMQ2gWQtYREkiLmeemWB2Fi6qAcX94GZ",
  "key9": "3DyGkDDzXDweyZjQEmNfceLQqE43symzq9NjsCT4KWEXvYC2jG5trrFLcsZWsNtEdAEAP3izJnzL1i98U37kwPVf",
  "key10": "3nXPjRmyztt1JcxKfmHNw5S9bCBzb3fdLcY6ZtAGt6UQhvJwvostx4MGSgR8saMkZgwEYGpRhVdHTtaGpsDWUhjm",
  "key11": "3se41FVC3E6gZuAnPmLbAr9cy9mVAYH6RvcjfJ9eeSycymptHFkSNVM4BXMrAYW2XXpJkgscFH3cTfPo5gAe8py6",
  "key12": "5SPSRcPB2M3rEWN6HoZYBbbQS6reDf1pxiPzDC7tbfZtJE9X1XjjZeRzKtBFoXCPM7x21WFRxUzdnFwYtVgs9JB1",
  "key13": "25iR9sHBULwKWwwCxURfS8KMDMGgjeStxbNzkdwT1Mi9mhFqkZuSAzpjqg1vTB1nwCBkeZPETWxPg3orKivFnY1p",
  "key14": "28XNSSA8gqzCHjHA3aRwBkXZbthsTPacs6cmpkGoMq9fZJwZFUmDrUHuaVSdFWmYpmmGM31hgSyQ8JVu26ajcDFM",
  "key15": "4Se5xGZpesud97shkHrjzzPZDQ81GxWvZ6ag4a7tDttZg8S1PZuHppwNKuL7P8DJUnNsVDsi9Yxqc6k8N8wYSvKS",
  "key16": "3VR7JkowkVQQC2FyqmYzdq7AvDZgoJM2MhBtjf7F4e5jraffynpr1NTWpKqCmFEKAqdFLKZotYcjmWpaRfqojQiU",
  "key17": "85aejM85gtsUJJMegFh2ATfkSWBMJTeus7nfF6sBX2VZicUgXsykZdrnTjFLMS25XGRrKjNtcdafRwGXvXosPzt",
  "key18": "4vfH9dTEygsJ4jPMmeCogJmxjQxbFgrYL1vHD1o2oyjS1kMbfpdwnFT3JkDurSC6BaVUk5EGjk6BDkX76hZjMLLC",
  "key19": "624AwJfW8ppxDjRB9UjjUar2jfuMVaNUhtLMnMCEPexaiXoAfo8reyptJeLc7vNiHko66JAQwMcLuqQAJqfoAshS",
  "key20": "2fha8buTfHL4fbfmrCKYiZb9AMPh8w2whtK8y6VWMg336W5PoCgZUbMQzWMDofVS3VSacEEa9CuD1onvtaQRjZCB",
  "key21": "37eLGiYBiLaqXZLKqfE5taJh6x9F8T2u8sHwgzZvxmYWz4TWnDtRTjxW8C8pboPBjDHmyZ7he9a8yk2sDUVGW2MQ",
  "key22": "3Aohvdy3A76bFeaM68oMMty1jB8kqnxCccokvWHhmFrDpWsn9eCYAhdtkGmbVXZbWSdjyLmcAhuqirvtQ1Dw2inE",
  "key23": "2vPXUZdKaBNJFqD2gmzXhpU1SA6VVxzQhZkfFykVZnkBcqs6A1DYuJR4EbSH2wbsc75mSop7Qaum1tKRyuz9rto3",
  "key24": "WHbJam6PHX6Y9d6aBTa6PGiRWQjUQ2iZnm7ZWKNtx4vACZncjNKUAR7pit3T1uSwgnX9mSC2Ym4iPrTH4FJub2R",
  "key25": "2XFpBaZDbMEKjL61YDiZ5xbz8MjpPmGc1xX19RsmwQPYhFEfNYkLuRV22crq7Y3agEoFFrozTp5Tb411CKRAj9pn",
  "key26": "52cvvDfrvDTzw4JFC1qVcMsPAxUGr4aW7BCbMGHr8Bqsd18HqA6A4T8LXTW8WHg9ycWjH16WKuKardRmmvjLV9iG",
  "key27": "4N4sYpSod3AFa4to3XDiVCEfbYhu5k6WhApY3D5MG8mzHJE7ENcz9ne4zU9r8CaveHYnRRQUzwLszkTGebTWVVEM",
  "key28": "s1aEEBnx21YbjgHfwRJnrhxVcX4W3YdQWDLBf475mn1uKeXP43Qvau5fW7YQ4NqaYhXJteYGnPYYJdoPAF4Bbw7",
  "key29": "3yv57MNfqnD5BpVQt4AGBNvYmMUyuVyPHMQ3BmH18pS5bX2yXxAd87UkoHm341nHVeC8Q2DTdRYa8sZATVxfnbNp",
  "key30": "Qizy2XMR2SU9atDd6AfdNbNPZwbchqkxyNdNn6wpQFVuYbFCob9aKi8vw238N3dz52TS3qwGptL3KsBa67WYXvS",
  "key31": "X6jVtWSqm3NeerRAAn86xNUNiAyMoSihAQ21NDpi6QNSCNrxRKTfm94wV4d7WvohEdX8jPCgLErJiRPTDykDRNC",
  "key32": "4SM42oBv3jPpxd6NDe2g2fVWyJNeuFmmNFQodYa2CR6mLFt3ipXV13HrdEcNsQQWiaJA37mNW1tWNhw3tBAiPR4e",
  "key33": "5jqjrtXKAGr5PncKN3td3d4c44S4FT4Rx53f4jZqkT9RC1RLKzJzCy16uJMCx96932GunLmrSd5YYr8yAQvhoHcT",
  "key34": "3NxzpcQj3pDq8qx4kiptsQj92V6rcAbiCzUAXpFXrwsyQA5mDjPDbwZjtz5UkZjUF2RKzDKaRrfLSTRJhRPG3e44",
  "key35": "2nPAas9XwoZbUG84QjCtgRmYHyuDtHyedbfuxa6RduLXRHvxTsr9uodA7BGcjSogDEGLi5FY6YWqi3HwkRdK97Fq",
  "key36": "2iu6PJ4eR6D6Vr9w6aoe6AMCHGUsZ93GbeDahjAkRayFzL41eC9pSWZNLRf2G7HtcGCCGTniJZWc5pdX2jbuyGJS",
  "key37": "KjrgwgfBNcr5udJuQZvzgENiARG9cYvEH6TvH8jertZyuz4LmXwXbKK8oxhgGg6SyVprbYtLWfbHcdX83myUyja"
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
