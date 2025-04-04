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
    "59ciybo6aGAcSdw37B5y5tbK8qwQ9gK7ztsdxW6vc9zERWMgvxCJmoMRE2kCVUwwodQnZFzGuZG7xoznNKWt6JZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YihjqQgovLrCskaug6rDUG53AqS6PXaJiKGKF7i95Kvvux5R6kxMddk9RkhBuExnijKLyPVfyFJMjvbyVoHYoky",
  "key1": "3Kk7nrjCcbrSCo5W9njcDcvq7vALn27EmYBVevYBFrVBghwL5AsiptnDtUNkrABnUc76jz5oZ6pDcVkCvH93SrJF",
  "key2": "2weXqUPbrTWweE9ZBvj6XZJncx1bhEJiQhwm3cuUEdyTdV523qRkLbEmZYj7d5qdaZhwPyiWeRQT58uVi4qP14RD",
  "key3": "5pMPqVb3eiJ6Ls6r5L3hrgvSbapRYPuBhYRTryrHMMSPg5hcEdjKE5WquNfhBSSXhGonGny6sTrxm2mvuu4FujNk",
  "key4": "4XPjkbJZfvDFY4hKUbsfCCiUKrMZyprctXFiaetPrLEL8LViUFhodHdWRLnZ6KdxsgSQ2pYpa6z16xmA6XFYSGxv",
  "key5": "J6LcXyPDCijxk4tdEZmd5js7aYZUebiWGTfhbehduWdPuKEGN4gAnFVLeoxEcH13NyiTckU3mvFj7Q2rzvT3d4H",
  "key6": "33EPSY6ppdW4RtLzKzetuiMkB4iBYpuZWcc4kALuAu5d8CvFeaPReTDMJZUj5krCHa3VnNFNrRD3WQ8XoKywDWJ8",
  "key7": "NzUbjEoxqA4vhpaDGHWhmfsYRVo5PHrQQK2KKgFqRaoFvQUhEz3t1eHkFRoXFkYPjz9LbXfocjpEqiiQJp5cKvA",
  "key8": "2SCNMVDLT6tzfNKV7axxes7mjXVkju1DLBjRze1RUtf8Nvj6tyz8UV1g3QwBXTkhjcs7Pfah9wndh5ygmSDjfJc7",
  "key9": "3ZzwoMx2eY2MhvqRa2qV2nxuaHZCPM43T8pF3NdADoNinuxdZZWXx1ybhzQWVzivbvhFhHbqbHk9yj3osAbpnXX5",
  "key10": "53KDdWJJ4Jgyeai7SppWxiauKGYx8i3EkANNiVVFFtfWdDkwqPVo97AAwCHb7gHpuQa27MzYjrqHQn5E5HN7sG1S",
  "key11": "4v11gQS8TmpTx8qVUyrZAVhQUE2aZKVQTeCHpu8YfgAbqirc47aFf165QDaEwfiGdo6TjNgfSRCMfiFTPc4WeALY",
  "key12": "4f2b8vVTj7A68sYX76VNVcKewFm7W3uEvHGmm1Xu6UHq2oHgmqGwcMuEdDrcnxhZd8Ca2qZaBw4zGePgFtefesPq",
  "key13": "nV2VYYk2nF64hfCdEumNQMFHq8opERXH9gwjEfhQV3rDozUqpxNPj74CQV9CcWjdUxLdLjAee56HD8mzXgL5AEk",
  "key14": "4UoWwtX6ZsSBS66oLuxLZXFXG5Hrp3SJn1UdgYmRUyu6g81zVvxsejsPewbzgZs58EgDVFDEZ3HYMpEGsh939gC9",
  "key15": "5q9k3eWGoWXdxCUXwCKTkZ5bejwKipA4kf21gzc1rDVifwkZdiHV51GRSE2q9KNmxUqko8kRnkqjiRpkUvPfrtBc",
  "key16": "Br3eZoSXoepC6D1E6pFP2DQBL4SdZTLUxoqifngytKskY1SW3Y6X93M5Fk3xsoYTaWdBMkX6qJnTJLmzB8iLBiC",
  "key17": "3KMMrSw5pzWTsreztPDHDxpm5dCrFtxebvsw36MxWfqbWRrNVQfrxRrYPh2jPaBuNu5ZmGZcTC5ULwfyCJC3mff4",
  "key18": "DyUn8QY72PgVAhrmAFdr5FYuY9vEEHSHKh194vcm56yPAxd1hSgGEjT3ggiCK9ezoGqbj5JLBfuDEos5wYv2v2f",
  "key19": "4LYfaAn5LYq1pUNcu8S9zcXn8VVQa67WLarVycrSuiFfeFaBx1EiGTdVhN6TGzdcyWnqARrGbJwA2L4FETUC1qaW",
  "key20": "5AXYKnniZBXEpncLcJatBJoXAPSQ19FBNLKscmYRvZ98CDsZUrADsxyJemXRMe4XQPhJfzKvSsP1UatBhPhgnAnT",
  "key21": "34BWTDEfWBnNBMqu9XwwDoM94Z54UQBAWsPXj8zyRnrUCBwmHWTWcJvwfod6f5njRHufJLqKTTTo286LMrtVJXt9",
  "key22": "5SmhMEtx1FEMW7rrakHffgudfXkfqFJDApm67uHLA8E6QBzx5GSQBbvKh6yaWD64nY64wwa4GH3mKnzFJ61eR4WV",
  "key23": "5wtdK6LwS8PfNooUXcRJUYaJ4DCFTtPzi1Pa6ZHbjGqAj4NT2Yko88js4dVtwwuz8RYpXsPsm6uYc3KwDbjkhcSB",
  "key24": "4GQPxbCiZ7LS3fTwkki4qDJYWwmdZccZHBxbu7xr5ajPYeCwXw4khuLhkZKo4igLFbXbq3z31HsJiDRhLNmG14mU",
  "key25": "3CNTgFv7xaho8jaSuFVKDmcSfNTKjUV9tLbn3FpNMdDCwXC197eHy6Gnm4z4b3Kd4RDPc5NF6ACnbpYhwHJodRzy",
  "key26": "fSqDpyqsNf7YkLfcXZF8UEtomkaEoCFKMszAWgMwTEK1L81ckckTtWEp16H6QmEWi33tjXNfHTCFzkS8TnYJpw1",
  "key27": "3NSRz381kooBDZY5URhzQx9s3aXwW6Svv7RxzapzZuJQQ5RVQoTj9UXYKxSD7rZNca7C7scpxdyaL7LV2Yfsqud4",
  "key28": "4WR2jANDs8K8wRUyZ6uAmxF7yvUaXQqxvh22HzEF45SL2N1rV3dFRZMo3uhK8UA9WPeMtoVEtgrBsYJfjThf4yFH",
  "key29": "Q34akVf3XXYni2M5VnfezCHx5FbPeiT7KD1xzqRpNZ43iCW6Kig9SbKxXeuVRaiRruGV2egorP5SprodbQiWb5c",
  "key30": "XfsiTba4tAEho1ZsDbBHRWocZq4SgrFEXnPSofziG9m5Lp5rwsCPJagmqLLZw9vR2ucGQvT89bJ27gZZbGtcLwH",
  "key31": "5t4NNN31F1YT5CGSJsDajKVztasqmeiRtR3LELwCQJcviGUpvVziAF7TPo8EPGGji7AsBAyJeJ9KkZQi7o41R57Q",
  "key32": "2Hwv8WRhrmXBoCxyW9HXeF89Ck6ZcuhGHKMSe1J3M8ATL8PAhxpWm3ugkE2rf2XCuGJV3BESckw1w7H8UEa15Nfa",
  "key33": "GPV8Xr9yMqq2muxxR5FAXJBBQWQ2ohRvWq4V9qtaUteonQL4KMzzFP8nCCV5nJXQT69k79ptrwrRRxeKBa4RGXR",
  "key34": "2MGd7fM5qTdfEZ5JNiUAJPQTy3RFkjgkXDh6HRAU5K8wf25sJ8EZCNT3dZwKFv7x2SMhR95fRYUyh2r5HoCKp8Rp",
  "key35": "wAaeuH1xKoYNxJkf33Bcnvnfih7VGrB3LKWHhhtwSJ22pbYQ6eahFgZAausM5bYWFye4pyGuPEqQd8dnd9b8LER",
  "key36": "3YMBgZEnaSZpfbE3Dsh5nz6f15xeRwZeVz35B4ULUNRumPmptiJbRYj7HQvdBMBXrNDr7q2RRNFDJx9CsabouzZr",
  "key37": "4AxsXt7W9yAkAFrWDg4XnT2C4mRvFs37D7QTRAVgW6e6NWREeduCZaKFqrS5zePcehvdmQcmQ3Q2uRARxdaFZ3ys",
  "key38": "SsPdtGMd8TkzpVDZRwk4ZMqcTDbjmfEyHuSH2wWBen27nVmw3NpNFJDZNCDLPF87LTVQAexWq4dRUou9h4varfm",
  "key39": "49YLzbHSr89wmrVh2j4vcNg7gRByFvjiZrJsNeRLiP5cZmViso3zBFfa9jkGRQNcKVTobfAGXSzAuzUy5r5tURw8",
  "key40": "2FGcbxqZmePqbTuQU6Uo45rUhLkPocNftL5wZWv2jJ7BeQg1bYXgKZ7rWi1LrzsGnMJg4ZBRqvtz6e4VfBEZWoKC",
  "key41": "2bRDziT8fS4e7A5gWdZUBom6ugUVzee4BZS6b8jiPaNx1DBhMVCDxd4EqXuCXsQ75qc5GhL6XSUQqyrvc8bPJYLA"
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
