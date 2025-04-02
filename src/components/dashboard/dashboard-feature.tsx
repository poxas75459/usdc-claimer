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
    "2ZxpcJ6Zz3JJYqnDqW8HF2jwZbCC3U9nomNmALh4xtm3WCz9uNv3qokZCReevbEfBcTHsiXkErJFsvpZq3x7gxPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJFGzXvNApi1vkCgfGTXVuQgMgFnF2xnzptfk3nQv5QG4ZDDmuSrbxXe258pSUZxkZzqNNc1rAGToXFh1GqgC4L",
  "key1": "56Q6MBt1CwonSSpJKWnLzqx35dQs1QgrxNCQ3PAMMFnjfxScVwCN9j6u2q21DQX91dWWXvix4dieDBbbVbXCPGHd",
  "key2": "h1q8vzp3iJxmdKtoNBBNYJdjUtARpJXtcRGq93ob3QCBMBistNecdZAJvrj4mSi2dTUCWwfBkZCWLXjEsjM3TQD",
  "key3": "uETBWnY8G7s9c5zRnLsDUTf9R4Pm3f9Mx8kbrKDzkbRCL3K9sEvAQBtBqjtc2AWp16M6Q5amWaU5ynwDV7RZWZe",
  "key4": "5jxpbx4PvQqyjXEZLuy43se9NspXZoP8TjzcRabyPXmgQWRX773ka9u7w2SPpzghnc3xdPj7y8kdtjuoQrJ9Yvvz",
  "key5": "oAWGKQa4VHqNDzS8gSmsvdFxnQadzGWxDiFJzzBqzfnp4WoARmi6zN5941nwGxjhp82cugTZqiE4LJp6S6PEVY8",
  "key6": "54ennzHdfvfqHnUnKqVwtgdhquCgsos9edc7UmRMsELTy4eRVMepfHvb7voXPVAnditJi5RVoa8PGtyrbqwdD4Jk",
  "key7": "4egDrKnYQvpGaHfbMPpaEH1CqBiG8BmnTTYsUjn87ML5XWHUfpDtLD8h2Q6zY8QuDDAopDUXjomyFHU6hcJuRz5o",
  "key8": "BNzXpUwxfNoCUkX3WFD2v5gnHL1GzhAP7eJ9g4VZsSWmWFqUF9zXzeGtNqFrq9dUzsx2rTShg8ggH2YUTrYTxe3",
  "key9": "4nZUmEy7z8GMpaykoaacVnDx1o4p279uTCfRjAE1dTgX7YQE2G3VLNhPn5fV3kHCzhk6M9icgFZEuBdBb8dbkm7n",
  "key10": "3tHKXy1x8GxoUz4KEkhHaizWjA3SUEmGXg7kgzAQ7VTm9DBYGRpyYXWLxbwakiBbQn24YHARmzLrEH5PxmUv97tz",
  "key11": "2WEVEdnJPvMQyA2jzb3eZM2bFEN4JDVRrjokoceYUHCevb5tmRc6bo3F2g7pybXPLF179HBZaRpscdERYkmL5DzC",
  "key12": "63CDPBP7w7RQm4pzFs5ZLSEM8rqADKMExgQckVmwUnVzEYqy4SFfAPDsonxbshkHK9w3Usy7kQqjTJX2UHBRe6Eh",
  "key13": "3mVSVDiMc1Fy1JnCUw7fHxo6wax5yGcXh1QF2PSLth4aJoqMBwFM3i3T78EMxgrGuHwnQHqeX4RCmetNAzpfym5x",
  "key14": "2xRcG8MvBjh2vtSGgZdHdS4SsSF3BA7Qe37abCwpbM8qpaanvvMhLnGsYjZs8mCrsicAJuCKNPahGE4g4eeqytvy",
  "key15": "51qkVHV7S3D7MhJRJB9QusFpK4PibRYUwqcfCrAf9GevJnf7WSCpq2Bo4TAYNdQvtgMDw5SUbu5Na1BBcXPmon78",
  "key16": "2JDim3Mpm3uUMXpedJPKkGDvg2M6vUTTTfu2sCUSxXCY133ip6rRHDUrcZ94yp8fD1kV8QtGir64FGj2Bvz9zJTk",
  "key17": "3B2E4M6c1DPQoEoknAEXJiqtw7KNh97K8oRUT67qGFuBP1yo4CJ4MKVvy546q7MqKjqbQBG6GUTE7T6XwZ3qhxPj",
  "key18": "ozopWRnvg9qV4ysSCukx1LBE3Z6RUNw9PRaTLWL6GgRme72b4MB3UVQHMmZyVQa4xZ3WSBqg6RWJeE1KoMYPbi7",
  "key19": "3kRjwjaB9GPnyXKZNKR29n6YCV5w8pyaqFGjg8aGrt86W93wXqQaTag7dFUFBAmFRgraryFhPzfHuuFoFM55riy9",
  "key20": "5zRWqSXQyWceUPzffTearGpDMJ1497hLDdKRum6ZNyXGLh6VQzjVLG28cUK3TEsmvbwrh47iHjX9gN1BoqZqFaec",
  "key21": "4KwqYxPsGKfqFWSsXsDksR4VRwGy1vhv5gYseABERAo6pV9TLVDiatdHgZ2ipeagM4rSUpQXCo2DCRZVfi7pUvfP",
  "key22": "3nXH3mMhtJdQBaNcN8mkbX9ZG6MRLVEKkDbRtLS7JfJWkn1CT5NVMvqQPsEVukXgB9HDcsN7KJZZ7BVyewADcE2b",
  "key23": "3ZHbR6b4B2n7tEfKPQF9CgFf8rVnhQ6k5EopbndAjJmBhxyNbUwPM99qgva2uJaA3zrPSd5LXJBJDC9oVG1xCveH",
  "key24": "3XnscYXE6DUDFZaf9RdJ3Jtv3KGnL2rrqu74Mc15Nkz7kEraXVdi3sSaiwoh25AgGKVVU8DdnpeZg8GnrR2vnnbG",
  "key25": "34n6abHtKFsWoUAxnsHKTd6YwCdWTL4QQy4jvjEYuk9dfkLxZ6hXThatmhzcFvfMUffXaq7vjf8CkLqh66sQpYaZ",
  "key26": "429Xm8Frz1AzwGR5N3SSBQvzcgPyQ6AGUqejLK2rQUcQCCZ9Pdeuqmm8ZeTyMUwA3cGinzbseUoFXRqtSa6AKbLB",
  "key27": "4VjLZEXnjFDYYSZQgFGTq3ree5u3LBzF9XNg6EcRbFFivYNuqbLqxsaL2vgWmEoNAFh5rAy6ZAgHXDUwqez7uWeP",
  "key28": "3B4iArUQXdbVUVdPzNxqQusuykY3JRPQG8euhZDEt773dp4EnYi4XEjG9Gq9XfNWBStq4MxotACLs1BpD93WHagv",
  "key29": "4Eej8UWgnnniu3DjEfp7P8fuZmVbeTMaiJn4uYQgAD2x3PbQXQzH3VBo55fhrUKxjQZY3Y6SNKR5EEPaKdStJLb2",
  "key30": "2oVUvWj32g2AdU6hWBjE8JyhiJXYW8gjcC4XMCtPzzSLp1hBPFVVnbJWLqUy1F4bVKyAE22BgTcyFSpSmtBtB14X",
  "key31": "65vdw2r3dH4RZ8UaYvaKaayrjxpTkk4dtCE1Va6La1C52tKnrWvosVu2XdqkBPKF2Eg9SyqJCNgEiRr2qbuUBQDK",
  "key32": "4bgaBrvSbxA2hFQbUarVqEJKhnWbS24BxJT8j1UmaXC1BgvnwLkbcQMLrrnkWdiznM775qQecCNVuxG6g1paYzyS",
  "key33": "4tWtyz51xserXc6h7Buri2MM4yeteoseqy2vxKQa7FpkZdMuY72aDDbHVnrJFYF5Y5tX9PXpycZvovWDz9FQo48u",
  "key34": "313Q6HJ1Zy87TcH4HvaCvFhfYbEntyuNWjaGoa9csnuDbvkev4zrf6i4RjGy2o8n6mqjbxaNu3MySp159fRXDfiU",
  "key35": "YEx3kD5gwFHgxiTySF3WYQfUDYJcaAJ2Ak5CwnGZtyL2nABbUk4Twk1CrqAbV7KrC4gTeYnGcpVY1Fdnh56T7Wc",
  "key36": "5gDZw4EAdfjmEHxXinDzvWc59sDi9uXi7pTatLDarb6F2ueadHgnSuBZMjJKRYfgJBqERQQrYosT7w6S7rxcTEvo",
  "key37": "2C6gfdh9U2agfcKt8zE63JsBsyrcVDyp8vLMouXoaZqaKNvzyUa1D9UYRbZzh1jp3kV2QU5vJfHQ47tNaYD8nT1a",
  "key38": "4ayivH98ArcU9ugWirUdZ11Saj8oRSBk4z61ZUACaueAzx4nm82nx4FuZNVkG84CQYHq3SJA8rbeUq1Wu57A7aQt",
  "key39": "QZ7bHvPVjfBxgJxX6wwe1hsbT3pKdPwhcD8JdQqHstBvZhVg7jiiPAoXSTPzNjwhA961WCj2Z5En5uDjvK3WqEw",
  "key40": "25JA8V73rY7reaAd2e2RxunnRsXpyz83HeJGYcFFEqoq6vJMTi7ptbcwUcJ9hYUd64TLC4ZWuqvsdvaCD4tVES3M",
  "key41": "3TDkDhvTgFmTNb2vXzhddxJvdQPETmaAu6aW4kfrJ6ZGmY5mBbcFbt25XGXMywqHuQK5W3g8GixyQHkTnsyTV8r9"
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
