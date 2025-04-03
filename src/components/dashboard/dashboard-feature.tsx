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
    "51brzNK5LXEFoJMXpuCSA1hQTQ34NdZuYVq2j8oyW9EKHF2vVBLRYcwYMz6Ait86nJzBk23iMtXFK66b9k6zmtfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMPTLGQCJvPLHNr37NSRMnEtcw5PCfd3QjsbBKhzpN8bT9eoXm83ha4gWKqWahWJ1ecK8yVi4wCUBABA8tUGT1R",
  "key1": "2hZg5c7mfFZiC7YshhPjfkTLote2x2udx5dYrUiVg2phSZZTZ6d75PHG1bDu73nSAWbLxWHLQS2m1w5D3nAQK7CF",
  "key2": "41xi1y3fMoYW563vrSLn2S7beDEDB8JbydGrnCqwcvehRTbV1mvADeQANejzu9oA1cHcDnzM5XKTA8KyCnNjn6Gj",
  "key3": "5ds8Fm8KzCA7NZGs5Cb7YavyYKbZHgjkUKJ8KfL4mQzA2V1wnm6vCnagvdP3wDnJcqw5ncdcSWHmqyAgwwfo8uAA",
  "key4": "axpWL57kYbdm1b3c1qTCfvgWY5XKmWXayb9Eme7XHdF432dPSXaCnDRHRryTXqL7v68oryUYdSrmgPR78FVa94t",
  "key5": "3n85vnbfqMMpmG5TpkqBdafTQXboSeVzbdmr4k76F2TmuzRExiKY4TtnVStxrdxnLPjmiyDHAPMUdsTVZ9nBf9Ax",
  "key6": "4pR396oBT2dUV41qMAdXjtTR8VWjYnyb6zXHjbgNko2G1Q2FMRawJGykw1ppPQZdM7Vyb8qsLXHdEuExmkoTs1KA",
  "key7": "3VriZMn12WkRg87EiBQpuie5Gdp4RXSf3PevB7jck4UccBqPxwoVCtJ2G1JhPWYPUkmDMTfENUcvEenTTvzKcAqM",
  "key8": "4KhFuEuZ4ENiqXBNHYaQGGDA6m8zjibQjEKs7GoceqMMXaxtv9h6DL1kf4dKTtVu3BJCB6bn7doAModRWYFNzMtr",
  "key9": "49dCRZjsyeYhYaarqoQX4SApjpDgGXK95c2jxprJTw3D15W246ASiqo1hpPpnKd4c8csgzFrjLtDzuMeW75wF6Uk",
  "key10": "3ramotw8ZmcjSvehH42kQvv9ZVFn6waVe1u2eqZB8LEFNqfeMCVwAcDKksBocL7emfiS8VbBiDNuRqJp2H1BZq6T",
  "key11": "NFgJPnqj7zMUWLueHZ9yRtApoQ67HaPA61vo4UaRz8JEyS1nq8bYw4861zLirikFNLMP49UsuHHiurNq8KCBu51",
  "key12": "39ebCk25uHqGwtTthzTWS8WCGdSKZdr6mxH2U1yrNYSohqAtbcTEDxfbA9Yhw73jFKrjKFqMnFCXpiyyjjL9Hh2V",
  "key13": "5KZ38wuPKkVNgYRb1rQfGbW3zJCqyZPzgeWcKiEGrceKvWDLg1wFWZCVrjhKBvxGYyXZEATWa2vsysnqdCXz9f2n",
  "key14": "3KarQgqMEN49K1kWBzMMtirSnEcfEhZqBzmpgvGBh7oA62hNBupqL56EcrptRX6kZvvTE8byNxgVBVt4xDnWqzaA",
  "key15": "2BDNxSbr2fLAmhag3PrXjFn8RLbsFt41fbojRAGUsimqs3uzfevCMRK2xSrp2Y67igACCcHLedhmDn9Q6Kj5G2Y4",
  "key16": "5YM7ysZEsXFVD7QdLfpCpMcoPBdjGAG7U23TCuj8BfNMUqw1tUwB1kjxVWengrMZEyHG12jWRh1JAJqcabitYW1f",
  "key17": "4zNUuVR9yYRXiRV5FtvytBmTp4w6iEJYbithcEtvqTmc3WE862gc5FC6tpx1BAnCSNeJkVjeEDk7gV682B3CPdDh",
  "key18": "3u3Zkr3GSEtfh8zPrvMVmVa3mSksdsc4r7UxRAVRpbNGmK4w2nJpav41uFecRjA9UGmTDuUawNpsXm5U6Km5MKj8",
  "key19": "5JwD5rM1AQiWBLipXciNq5GFe8FU1ETy3cbUTWXw2nncY6hBFCWUo71jfNTVCawt8oDR8MGqK5nuq9KHH6kHWuW7",
  "key20": "3vFQkSgLGDGCFaX4MGqCEk1d8HpMBVBkfxcZmKpcvcsgEDMkALesHykDWBFi2feoZCcmKv59aLod2c7YxMMdtv88",
  "key21": "548b7vqr1qd4Xq7ded7TJmWqombEqRmmqc2YAri5eZC3w8F3nZgLs7Er9YEdJ19R2UYQ33FqT9sewEriKNQoWD7R",
  "key22": "5kkyrrgvh4d5uWThBakPpTTvimcR8F3RPLbJe4sAcnRaFJCm8yUvBSAiVENoeQMyPoJhMyZiro2LMyzhXYem9xcX",
  "key23": "ecXTZ1tJbjQmEh1FDYBrPTeM2Vv4nG4ET7MhpxWWyQARZs6kC4LoWvB3Gwz94zqTJLvPQx93rpqfK2Tb27bprpg",
  "key24": "2nn8tZjN6dZhnLht6m7h7hRzGjVurBQbw8o8YTy44WA8RHqZZXxq1EZL81tWD112dL4CCqHhATnQZWCqr7BvRdGD",
  "key25": "4PTu1tEhoXcjFcNTb9GE1KTAt4JMTpiA1QvKdgqBYJ164ziCS5WHAgQgfhmMJNA2RXEBHuS6uG1VnsjhSqJb1QLs",
  "key26": "3xNeQSVneDkkvm5tzadsdzGR3nNXA1DB5S75mgkQRuzL7XRa1S6bKVtJciHNKUDMwjXRAK1t3Yct9NxC9KCXgNHE",
  "key27": "2XYmgnrzbRgq1NTBSiTqmgQRXE6EqtBsZ7c6G5vFfBAnawYNzH8N3bFvU9omrTnyxogUNXPpvHBXTYAwLPxYftzJ",
  "key28": "3JEH7vG2P7VF3WtDNzNCLpzDjXY9EsEcJ84B5E9cGSY4VRo12h5Bc6PNczPpcBqj1LHTydvqZNYPAgTsjp6oTqa8",
  "key29": "4oiQL9CjfUVC8Nz6tKzQ3gDZRLpkJGVDLkJy7gU3W7WBPTCPYVHxWdzeNNqzXw5kbPcraWysDqHRrs9EVMT2nY9d",
  "key30": "53EuXSiqnS1ofmzmKuF6WBoJPzNmfjVQ4XFJS6qTE7RsM2gB7DrMhZRkf3PidDm5La9vqxnKgrPGiUoh7ot5nuPD",
  "key31": "iMaRSUPah7X9Kz1wZZMSvF3r4WaP8vWPRK56yy2N5quZ9xzTQmk1vj7i7LA9dma8wZB5dKQ4TCebDjgGAR9J9WN",
  "key32": "4mrTCZwSwd2juXik4GNyHEzT43AFAFcDkb9wR18FCEeXSS5iSRrRzaistWPsKKSBKVePLCrJ59cAZj1dLb5qYTGF",
  "key33": "qCRkinzh28SBVwj7pZoD1JhVncPAaD1QbhgUzoqWjQSEargr3TvXLZWUrPJjGgabi6Ea3WRHrry7PU8KeRMVpGk",
  "key34": "4xXDto1De4n9dTb4jagkEDv4ykFeFGK1TtpKVoZe6fFbxQrSoEsk1CgSVP3zSf443fGDdtLqLYMdEiDA4TyavvcC"
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
