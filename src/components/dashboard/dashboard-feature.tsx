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
    "2qMGRPheXrZ8nZkGx6CmV1z5RMaiEv8WLsbdc1kFbYb7cxsYQThZa3KGLcxUFY2zy6ucY3q9VrFyu9FAwsjm24Hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ok9Y8JCF6VuU39LoscvAjLDyzbjd8cTcS54HjcgiS9vDwpQ2mLv2wwUJkkqi7DTk3GDZPjxq8tyY2z4CL6XX7Np",
  "key1": "5XcgepSC1feuieqLCKnfjmDmbrDhUF5Qgvv9j3veP728VTuEynSyKPZsb5ExArn8DG6ZLbVdUDVQ24Ytv6HxNCEw",
  "key2": "4DGjn7BDNMyXiEPFuvxjEftnc9wDkrAV5bYJyMbEUcRrZFgzuyax4rKBjix5w7fj7HESurv9aZKev94AiP4Ssvcn",
  "key3": "XZxnfNBe4mWK9qGQLHn2e18DHxdo75kJQr3CDwPccpWosX7S3cMzLzZHRy3bbGEN6aqpXy4tV6GF74oT18FwkKq",
  "key4": "iDC1wJgh4NsRK3fuP468yGuSRcJPG2i2nfDqEdNpuVcy7Y7iXvcrU1zNopJ9W7LzBamJBStdGGu7pibWWvQ2VoG",
  "key5": "5vh3EjWUFyhNXe4SmJTz8va2ArkYkCSmpgJkcU152KkSRgyWMm2n7cAjXn5mGZB96k8xXRKWQAT56zPhXsFy64qo",
  "key6": "4tdjdhYJsNS1GpR7LPk1GY54CSVrmVT1EhgyhyxfLeKX6k36kNdKTNGTfm5pZSjaysWz74e8rzTd1UxsZ6q1qmQe",
  "key7": "5vtKeCg3cAhLniByVKuQgc3TtyPTVQMBYYXqfBovSKu2ZGiirMef8W9dA3p45DiVMUtGVVwcR3eWyMjhGLchx39r",
  "key8": "5bLW7UFkxHBScLpWGmtswfMgxgM5jTaUFUxXf2V1cJcumXa6YNU8CUVtXDZPjhjv189W8rPV1vhq8b3iwodtKR6t",
  "key9": "2gBj79bmiaJV8r6c7mqkJjcv3GFqTQ8USTCG3yckT7THfnwWTCVCB3yTngVurtHrYEytAb1KHxLiRfEMjyuw81Pc",
  "key10": "33cT2UZ7XX9UdwWqWNT7sZa46QMStmZrqGmcY4sREW7vbU8gE4tq5VfaLiJCtPec1tU6NThDpmWY5aLk4akqUAvk",
  "key11": "4wFBrsb3ysoUmCeFQ78AwWRhjzJbiB2PQWBYkLMMzD8RKZUEHoCzC9ndCfMJsUJ7EzJ5BCudRP6Sxu2f1nWQkvsv",
  "key12": "5WMDPNM9Aftwt8Jwt5Fx9kDsx296ckntDZvCEiTh8K5FHac5BQuHErgbQrso3FFiFeMazD9cWmcxfD8kJhSLpDjo",
  "key13": "671UYyjFNxaQZ3qN1fNtn5wSZPzct7ywrY9MAXFPgC8PX7HwTwY6EYKYR7JVt9k3axyNoRkyD2DVTezv1J721ng4",
  "key14": "oAPhGiHGs7jiEP3tWbzYFHRmePYtB4t6RJzasEY5VmF3XqWEjSZV6oRKWKaNAofTbRZbQVnfgiyWZ1ihsGiVYie",
  "key15": "3XPQhLd5yXNVAyUAXqk6hDFaHyJSxr9jAFz99xSJjr5gMXKDSGTtLqKHxex44WTRYT6suJYUGZoSaQ3st99zsV7v",
  "key16": "46RUMLhQHuoc8ZPELkfzFQyLfqgbCpsUAz4Nq8dhgUHKAzuehssyCcLTnx16cbHvQptDDQAE4ph85mvDUbLb5diT",
  "key17": "623t5qvr6imGQhZi4Ye5e1cNHv7LZMbcsBtiyL1YN2WwboVyQj5cbUrz3TEXQLa5vR1LtDqgrk3oDMwXS2wudiFn",
  "key18": "3hdr4hQVubhy2TxoxNKvjyJXiBzBfqhEgToaUS6TnfYakMADQz9BUXMV6ZpBnSmSwXisrTyr1vX2SLsaaKm4pd8u",
  "key19": "vwfxWYJGNwbn5oRU6TZ7jnaCGURtR5cL6RN5F37pCFoJfdJC6HHHNrS3kjsV4Ea2Sk8HAjomU6CxKJ9Wtu261hR",
  "key20": "5isZ5EY2vqKUghcjHtHEkr5LtVP3E9nuQ63Fa3vQ66fnMaZCNAVejQjXehRq1jMzBXdDW5XvWn9hNkY1nQQx5ZC5",
  "key21": "5Ye3sy7zxgpTroLCihRiUeXdm37egsAuop3HAW9unzom6tD1WMfwboUVyRAxTpzWwjWd6cESK61adx64ofmdRSn5",
  "key22": "3Aog74Xj87mGyJZDaX9pfNpLnTJCMrYfnGeEzV9d1vFpCgsvfmYt7bTmgeDqDqPwY6HfqyWBvff6NNvCDiZzHEhp",
  "key23": "4AwUL9trXNrAQ5qGzbZo5GsFZCFVApyXrDRy3KkFrW9HB4H2uD52UwtEUPxqxq5u5QKwbv55iLhJe8HAyubdDksJ",
  "key24": "51mBHrJBFfQrz6iYPTZzEJRVuxrNrKWi3JgZBf9JefiTkmqb2aEUp7eWc7GxCXmTArNTCgGPYWuPeSeDVuxowbjg",
  "key25": "2MieU9LL1z9puB7PPtjSHaGM1PSYLEAgryYX38k8whv1aW8yokqUJKjiEYqQKjJWL9uua5xbQfcfmsrqCZBQQgbq",
  "key26": "4H2vK3YEU98AEzkVjzNn6MxMsMgfZWfN8Z3w265yC5yU9Y4kk83CtH5DZGP9y7xm8CaE8fpkkVg8C6HBJv35ogbc",
  "key27": "25mZkScGGG9AonVFniAgyeR5DGBmyGMLN5D5xgW783Xoax3HhkaKmnzKYJyqaypy5TdhEJS9ckctZie1rEMNzy9U",
  "key28": "46nyYuUV6W6bwmdRrCP5esXdU7nnXEBuK5ht6STwXH4uwfo4DkMpVFSeZV5Jntx7tSvuamkRoDEiENXXwH2DxY8C",
  "key29": "4xyjzcausstM11pL6AGffgf3XHdrdRPX4Q3cz814j5ejst4nNsQA9zU1yb2KNQ3667JBWsnTC9gx6TAYRUQ6hep7",
  "key30": "4ETfSYjabYVUUWfeaYe8mGcPCntAtUJiwBVbXA8Ua2kUxoWUyrrUKWqy91XeLSWatgjb2A6mC1tDVUbz8PzNLyfr",
  "key31": "1k3XsDWuRBkEVoWZ4RmW1BRo5o4hCwHvzR4zsGqYyBN3cJeUwbiFcMrnhAAqwtoHsThwuSQUKz3mWeM6B42UPRX",
  "key32": "2w6oMPHCxvFufskqoMXeqXhR7G6JqBaw1VdLHZkxv1JGrctXvYV6rJrfcjJvE5MPfS7jT9SKeQn5b9NgqUJiLdeT",
  "key33": "tZSJPFAN1BLq37y75q9CncZYUpAfAkvzN3bBHHz5AUFudQMGH2MVJDr2va28cx3VxTbgLDSXL8kZie9H76RuhGu",
  "key34": "5Yg5BAxfV2gsp3H19jJn6wWYCH99iRSYJ5KLrvN4cGVMMrFYAALDQ9QE3k3zZpyrjuudak7vCJDFSi6gG6xtLGaK",
  "key35": "29pvEcwBUoNu8seMJfQW2tHZkK7x9zfFnKPchRff1QXNGqaMjFgtdXhnPrhEqgJCv5qezLBo8K27Gu7YhEsaUxjr",
  "key36": "XBCJdvfG8RPDs4UWFE5qLjQ8ocQCh699kthd1PQxookjSbuS5QQhMqLmkh8BXPXHnaJ39Hj89XyyBvPkHzbceXg",
  "key37": "4Dcy3v6mKAfLUVBGaDfkz1mHho3XLu1JsDuSgifkDBWyK3gXAvBMseu6k8qPDUyvcsegTzxewu2aXgk9ph17pJyM",
  "key38": "nizSSUZLeZz38wqXuZewiNkDTmW5Jffbb39YM6ickiDCJTSur6z7D2aLXJNv5G7JcqzcwLrZDxHi4rHtpu5ffN5",
  "key39": "2ZEFhyRgAsH7mw8pz1ew77KvezU4Aj4ifCSNu2xvN1QVrJZziKSVqdz6owanZ3fmXjCAeRTbdcKQhCDP1RVydPJw",
  "key40": "Ra6WWvpKCWBXm59JNqBnkWY3AwRKPMxp69CLw92tMXTTE4iiDkiMMPttKGFZXQqMirkEsCevTdmf2vncX5KfxMA",
  "key41": "5NF4k4ZoBPXYvmfshrbSmTX7xJEXxwd3N5sVMFuph9mi7FaTKWtgc9zj8MgyDDcpEJ3Uu9Q3GyB7HUqrgWQvu9Ce",
  "key42": "2e6RT5jCBnxMGF9carCN6KAGTTi5FQrzrwGmcL1GtSnt92HMrmzNRMKox6dZijqAS3JBBU7VbiPyj1BBbWaGmAGn"
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
