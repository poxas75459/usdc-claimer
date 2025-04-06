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
    "3mU1nM3WcC723Uj5WXugPDVyiP96MJpg4X52GXw5saZ5FxxMC2AESHfb5rNSiT7Mfz2vnDZKtZ9riTXurNd1HG62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "613VXyvv4nNfV8EcRdsj5pCh1Vvmtbnnywt5zSa2SYZLuzPtDtQ68KR6Je48zjtXYQTJESEUR5iTgYurfmZiLQBF",
  "key1": "2b9iQGdhEGGCy6t45iMtnUQ7p3RvYhQY37ePQjGU4x8KGDT3aNgEDwv1F1HqUaXpJX8ALt5X6ZGd48uEcdqPW7cJ",
  "key2": "2j9cdvZgT6E3v6sEUyvCpjaqoWo8WjnLpeiWVmYyZ1YzzcCkigKqZTtsB8VgCTHtV94SPDBXhFanrjq7dKehZnXF",
  "key3": "2E5KWKYJiuApGMNRkWpMDNfE78VBYAksiJFZ8RvagRTBJfeuz6oraP4rsma4noiTVVnrQ2xRYunRaxfV4hAtnvkK",
  "key4": "CDuozRaTT5H1C2qyozzGAr27DsUXZrCDSuF7B8oqyQbVJtWZ5SvmoJvLqj9vmDaavDcdMLwn2nvBSJayDpuMY9n",
  "key5": "38n55TiN5RwXtadD5juyN8kkLRYo7hHnZxkq2a7CDsj9nURFqoYpgExevJkinsWMYGsK9kPGochd2Kpsrf3Lu5D4",
  "key6": "PALFUKTWxWsJudJGskbTbBwvbFB7ENdYhMrVRaZz1p6pUv76nbMh2dnrxigVujMo8Tuc4WiJeUoSGx84ZkhRU5m",
  "key7": "4DXh9FbENFuaPaFDWBUX2C8Hp9TF63BYogNGUfue5SReysFVUHn2xSScde15tZPkTMarBM1YJvFdcw3p46NnkMRY",
  "key8": "YAMzfpJ24q25SoNHHJWAmVoMnLKKXoLY3C9d5TgQnsneQrratoVUc3ysX2ddHCQJAY3wbVbDSat5iFeBaMMnqPc",
  "key9": "5PMNfHH4RvycnGH3fr4sjMBrAVkVogenMhsaZqdPRvjdjTXBfQXuBSDhPZYsZnM3XqCHkvKVv1e4muoFNvZzVPA7",
  "key10": "WCF8h67nhnGz9QRHzr7NF1ThV19XqBjpbCN6DzEwdKnVzjYFpAkJDPt12XZeCn6QtNyPhQMmvfuQZHC6hope3kk",
  "key11": "4oL4HM9FeWV5gM15feTM6e2NTeNbKXY63L566apMKSjSd5QDcATjTWsNaf18wpasn1pw4ycCiLXZTeeaLycNi9Tv",
  "key12": "5aXt2EF7vkX1dUHjku8eayju7B33EW9Jt8L7xAsHmDLvTDm6hE2m1n1MSjs2WVPtbqTayQa7SqT2dnexLYypsqkY",
  "key13": "G3E683kj23WDJ52br89RvaqMSWwxLQbxMUC5CvPHkQ85WU2PBFC7tzR5LvxC82Xm9zkaThK2NxvHYuUwWXPwuna",
  "key14": "4GjsNYMjq8egG4PQAY8SJT4Jq6mUmSmxBChJYLjZ5yLGY56cCbSQ94bNgKAi45KtNZC9koopAj71FnJ2QqTqCwtq",
  "key15": "4DMxEoow41MMd6LiHSTMP2tDRaa99sWJqsYX1vgA2KWHWgBai2KsByVLAqyZHeo87PqcvSrPVhzAneqLLvHiufqF",
  "key16": "ENuqeqELDh3K8jQ6BvmvpZxgx77p8WoWE2PNmN8YaEfWrQSMxzXfpVZkYyYpS5i9YjWJqEyvi37gie1QhCGuNVi",
  "key17": "3xssUfZCPdHjunK7G2iVap7FzGLQXnA2uuFTZ9fFmxj9JAFysSW9HCdbE9BAcKeCHkrr7c1nQdA9NFyRHLAyqXmX",
  "key18": "5WjuooxhbYutG6JAimg9keYuyJWy7VR4S73UE3C3PXaKnp64VfkYsqChqnqsvRh2u47oQttJk8zjpYqsfhurT7x3",
  "key19": "pjL9XX2kDgYap77fnw58wQTvgAYX2A4ZjRUMEHUq8HskmcLZLRZq9CQTTf9whxJSgtHnv5vFRRXQcFRVkaZFWLx",
  "key20": "3L7BA1oFMca44naPNmbPWoYdhFSoQRwwJBF4Kc4VoRoAdzf7FzXBd4Wo2YmQrN5rUYXzdrC9drbLTXaKYE11Y74j",
  "key21": "PBJpDVykrB9Erc6vxfK8QCB7qhzC73h6tMv6JChWpdEuqZdE2f9PNBK2uL2GdWENapdxji6zTvhz66zUXJXwttT",
  "key22": "2ppKPN9H8e3udEDDVppHVjr5GtEtt2tuBLmvkmA5hz5psFZRHdsG8ndrXbYS2DF4PdymsnzZJsXywopSXFcCyWtj",
  "key23": "4Ng2udWS4tpTo8G8X1RVbMqW62qN5NdMfSKjZSPj62S5AzFTshjzGRLfPHWA1oVCvpGyzhX1HpovyT6agsRTjGkb",
  "key24": "4PFzK1nGWWT6U9c7eNgDjvR3choYhVDv2mdAG9M1RdmMHnMwgvonGAyH9qjvmYzPQTkttBBdSECwWLgWCeej597L",
  "key25": "4WZ4KhjN3meSc1cFvM2Ltrx9YGC23FufFY11xAsSi27uf9vWfH8mC2fLKYNF5WBSJZezHemuXPZAHVeg5DMwG26n",
  "key26": "JU1XbEV9wdMGcndpJgypjj1p5Q1iwi3kCEckbw2fSJ3mpRDpNDhEKKEdi26QVxkRyXC4hkYbwZjVieS8zkVyMnL",
  "key27": "5wmXbvjgZjoNCXzRrM3ub1DEvi2aAMRsu1Cc7FJzDobC13SAKEjzDuHxXnriheCQYbnh82TxTgGMLGRnixxXckYd",
  "key28": "4F1sZHnXVGJGUCSzpVnspy7zSqagVowm1Lzshd2awvKcoLeHRzzYm9Nc1HVdjKiNt8jpVRJn139ti78vpdrF8WMN",
  "key29": "wE8baDRVpr9oThJRhpSxiNHBU3EfDLPuuykQdSMjD7A8CMr3Eo2cRTFjiYJYBk7hoNSYjLp9rS24FbcyHrZMAu4",
  "key30": "3GZ54j4E7HD4dL9e8u2LWFi5jbU9XoWVcK5VzqWyghcb5sC23YRefdDWQUCeKMWUxDLMnUYYQb97NGEeXzAZ1ZGh",
  "key31": "5pKeCDD3XxNMrxuzxJEtx3ahmRe36RPTpBQMff1H6mX3AYhLPceYhyPeRFcz5Gntux3CM3v4SRougWKkPLpXonuQ",
  "key32": "2XHax5kpL4NN7CBy3mR2RGF7mmbN45G8VoJBtHAqKh4rQTGMzj3RxBfYF63Dznfay8tfSGmfmGbaxH5g2tEpx2Kd",
  "key33": "66aAiF6YJrr9CqrKEbifMTiYFgbAHNoUnpoJ2EuHLHhcZpRjxdnbXEcJBKJLdgEhX3XSuKDrSzWfJdMsbDGpwxV2",
  "key34": "4CXrm976iLff3PxkncmjSePjGwYySc7razuehFe8PftwAyZFHvdjAbzEh8yRsBPdgQxaYVDz8dUFWfn9rkVeHAmf",
  "key35": "qb46fYoS5t5jYW4VQYrG3wi1mQ4PpFt5szVXrjz7vPELQd8Pud8i3oXww2rBJUgRGyT3h4jAJ6q1PiEZ77As8tt",
  "key36": "5tVoXScBoCkAebL66uAFGVbw1R21nqAZoG5aLsDz7hfKj41BPuEsN3kAnj9djbnv5VWm9iuVKKBKoniJddGG1rJH",
  "key37": "4NQgLYu6g1GWamBrnW9NEUi3jxGa4rKBCPz2iTRKCZE17wchbUpVCaYHkhzzRXjLT7XPhVtLM7PiDjCtqutNLEoB",
  "key38": "8rgJ5WWjKojCvnbagsPkSp2CGvGSyTvQAaB6udbkvP5P4sQTKez54bxsDen9P1Succsd2Shm8xCW8xpizvp2DH9",
  "key39": "2r6HcEfgvA1rBj1DdcfAcK6Cf9G7ACNFQurHcQz6QHmsMPuxS1N1VcHZpPhACGSaSEAdqay5deUdaWmNip6sCKUC",
  "key40": "3LHKpbENeA7eEXcoXuxbNa2inWvX8e8vBFfB5NN2xbQQnQf8Zp5LDDLdcaLfJWxB5AjdxgY3fQbzXosLi5JHmtBt"
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
