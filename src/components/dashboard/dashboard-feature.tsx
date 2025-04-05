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
    "3otaAFKZVnmyRaF3G4nfFTyi3y9KaQKU1WoEPvn8oKbECtG6uoRjN5pDKhLzJYpzS7MToMwG3mdWhVuodjbqGnBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x3nAjVc45CFZ8GiuUMQngFn5whtEtiKqVcVTjP74sVoijeMFi1ZktEppXVAP7areN7pMQHJpDhaEBhXGG566T53",
  "key1": "iKnfA2i59hyKGJ2MFvYsd86jvHevpWdV4j3pWFLAixg9ZpBLWzyarnnJ2znWJE5mmX69p56cGoLQ1qoirokUJH6",
  "key2": "67NzsPdPQLeHBGTXMh4aaBmPEtb4G3ESSx9FcKm4Brj1gUqiWzK4jPmg8T2jyxhX9eKRGx1or4z1fbeKJ9t2zaay",
  "key3": "5TxLT72qF5KCDMiDqdCZuVkJkPqmPzLFdyk7WE8zcMEtrEddyYZp9MKMtMNovGjXbE4bmAXofQC4gf5ByYsWhxE8",
  "key4": "5yTjudpo4nZNYwaqsaZZAPFHY4TZXDhTJsqM7VUX2sv1814Hqo5ktKmcREk4x1evtf1nr3sqEGP9ebY3azu8ju5s",
  "key5": "3od5x3zABrqUXgczFzs9aWGR9ivRXt7iha5fmGzuYS7DDJHdAVGH8FstokVVUgvmnrcuGN2MkHgNSHDdxC2MKRoc",
  "key6": "4AttEMjxGWDLu7B1oN5Aa2GHiRRxTNx8GxbcnNtVN1dx3PWfXrcMsm9BrfWKaoJ7biDHFUbWzNaHbeCxK4pmWkGb",
  "key7": "3ZRfZBDkLLmzV3a4SePn7mfTXp4nVpzc7fYah1iLxDCh5HdFvLnzEFVzi5bKU7iDBLAVCxk5Z8VvW7iuLm6ymWFZ",
  "key8": "47cqpwrDuNxLyNzdRfRGekXHzLHA3fehzv99tXBWeUyXDFqwCXFVjLcCjtsN3pFLcCA7dMrRFWuWR6hLqGuFDJjW",
  "key9": "5fD4jDG4pm6XvFFBU9tpfV5bYR9iQL4dr9sCwBwyUzx8LHqa8Xacm2NTf5YKQ334f7jwZnQUxoN57edT4cNFPk53",
  "key10": "5RLg72YCL1aND45JamD3dYNuY3Z2vpqmqrmBvcwtACLB5XASZe4pdqin7H1vneZrr1nQqwCwBnkuJaSag1t7vemv",
  "key11": "5UzFfEqNHA5biDzPxXUhPpbcL2UkH8Lw9fTSYLiJQtPdhsiS9C8SawaomnwPQUjcJ5edgtGVnnaigrUqRgUPvryD",
  "key12": "2b3hanXeMgVC4tFMPUwodoSBABuXdHdm9Kaf5L7LCBkk7EcZuoVm4EHULwRATxw9LDThCzFYy7YF8huAeugPdo3k",
  "key13": "xBbhhyetK6HWTAJ72LGJErF1iwVbhqduiTs1WvSykxpbzS37FWRQ5KjacJk15JujJ1xQh5zfJtkPdQfPqBnMmpw",
  "key14": "5Wdm31joCnSzGXy4H6G8TBQPcQwds2Nbj2mUAzUhRG5ks568tTRf9NCgxVo5cadXzpwZLgAd81Sn9KiHomCzLcbt",
  "key15": "8nj69kb2s2aTgR59G3ymbeucAyZnzQevrrZUqUKB3a4YYeWTnVeB4Ga2kvktL1AaVDpzqKvYsCzNJiHZ1ZgrBFU",
  "key16": "Uz4X1BCVjWgqg3DB8TWWRJtye9svPq7o18pgLLBTy5zsn39yjpXksd9CDBEqfQSpcJFKaRKgB4HtY3Tf3wZMWHf",
  "key17": "QNy8gjjn6ij3X7hge2V6THm7A9qgiPiU46Mfp9PegPFAJ4vR3MN5C7XbChefzQs6pkuDwjikrCk7aMSBvqmzwZq",
  "key18": "2SMMGRJi9b7RUFTBWw6xprvh7KEf3wueFxwupzf4bJiD1BmkARvGUxmUoCakXm2tkyEaiXD2o7hb1jAEj6CxSi4c",
  "key19": "hgwG7KHoK7SFGLnco746nKMY44b2iXKGomj2SAqrFQL3RGhsE35vqvqTJa8nQHA2YMhr6UMCWKduNSAdC1g8Jp9",
  "key20": "2TEBgpEkp25ZtLVCKHpQoGZKDTSVgSgQLFptbEh3MFaaBcqDuabJf4Y1bD8kN9AtmsWjoRMgNxsYV1Jv3QGTok4J",
  "key21": "2ShXDwABFXXamsFT9cSqNSDEud89RcRKM5Y6naYWbzB9CaEcJFWztgySktYmq1ZjYeA7NsDCmgCtHxWLgd6yjHxY",
  "key22": "2s9XeZ9qLphtauNFGggkCTEJo21PAuTit2BKaCVQVGHEJijXE2HLVDBz9fioz4PuQ5Xe1XNebJaDbU6sSNDraqSF",
  "key23": "2xiwpaa8Y6BccN2rLpRLzjHwZmZ9S7YAGLMjmTPDMzZvX4PHDqmCE9G42BTgDGyS82MfZkQguGovE4GEYLcdAroq",
  "key24": "26R8tq9YF4DczKyJeD6jR86xrHiyiECnaHzZ1sNXDVbzzxV7cx8YHs19Wpm7wSjjVkuFMynqRSsUPXvhVNU8kD9B",
  "key25": "2x7eVAPRmsba63HXdyi4qNvTwQZx31uvpEYRmQkR33oCHLrFkLzG3DCnyhNM1pa1Fon6J1TyYoghqVvhJJXFgkWm",
  "key26": "2QMXRAYzHXNmPWzLe3iQWhckJsme5WfhZCgqoVcdyCeTB5JyB5CnNXE3xuGgSVApmhmrQcLR18rHmZ24i2ExVjKo",
  "key27": "vUNSMJvFgMZuXdmwz5fQnE8fVD9q8BkXLQ8jhCenumkfgqYDEwbLEzjH8uinbTP8ZHh5kST9VywMMxVuFu2FS1d",
  "key28": "64rkN8PbtFoKTKjVDAPqDcHSpS3WQ4YcAnMQWVzmqWDe3uoB18rsR8mVH815iYM8hpRdvGcU3GGD1TwNrsEtPb76",
  "key29": "2S6cfPZRsQfRcJpErLZwb26VRbq2hnV3pzQcWZ4gzUMNJrUCzcQDDKJNttUuykD61oEw75v9sGDx6R4cQaZXftJm",
  "key30": "5PE9g57fq6VAWwEqLY4YyTVSzR6d1FWaSm1qqJXueojk8UNU9xGfzrozoRVJrZY3rt1EjEaj8Gb7mHtutdqcrF6Z",
  "key31": "5HaRyhXU47JGHZUEaAqdm3vTTBuVQin7bEM68s4DgS5v3QTQ62t34SLwQbyzKUZaeURXxgRxjYbfXqrpH2Azvusp",
  "key32": "22M1d2cvz4ZShCSmYFqva3NkXxKvmb4f1r1Qv5iFCMUhjNdnvxqHTTFDKjZEURotA1VmAeLSxuArcod1Cvy5F9fs",
  "key33": "27A7V18VZSsCted4vy6oLwjNEf8pWfomNnMZM5NeUup6qb9ZwasrUp4TdLRgv8FiiLfdYsZpy6ZHPZTm3wkwde6C",
  "key34": "2syBXiJyWP3Yfi7VikpDDBhuQgumbrEnwfZfrcC9nVDSr97tZ5Vi1e8usBvKhwzejPbeGQP8P6iM4oxuGjYtZMkh",
  "key35": "2MGt4fo8exX135GuVhHGa2n1uoqcsmQDxXeKEcZE1yoqqjw8wQ9VxXawMVE4tos1Hka8hC6gkCZzNeadMroBmbsx",
  "key36": "57xcskfbHURzgDaqJvBqfdGXjpY9R6HmbbxEnPRFWjuWqiX7KPL8C3ksdZJocLPWHcW8tbu6BdMLJZAVKCr7yrR4",
  "key37": "24Qi6fbiujpezuU43BonhgsfuRwdPEoAycnrtsGCpBgmVpk2zU9isyZQCJurKjJ1x5E38HhAF8GiynFuhEFAVVt9",
  "key38": "3FXhiBLZBvS6LW8a2UQjf5X5oibfggnxUY4UUPArFnFX8nnQy6UHKmTvgsLtNaHB4zrKaVrHPhCvwvkLVYpVVnii",
  "key39": "45kEJ6Bnr1dpdB3ibmtSnekgSPy1LnSGexouvdh2sYvvzxqtpaZiSCXE7dGtUg6YNUedQ84Dy5hxByw99AKrgFTb",
  "key40": "2CgQEuhDKk29ETSdWVS3Lz61TH3xgirW3toJJnU6P3ZbU8VFN3uJfQ94q5nhCaunYRgdTxz3AFQrFyAGQfvtsSPM",
  "key41": "3T4Tmd5YZGRrr4CyqSchddqHcfxskgy8agqmauU9TtZKZSnGXgzAgyZNqgvkJnhJm3idF6Bp17XCumhUyN1PGf4A",
  "key42": "2JJEbWkKTRDq4Mu6YQLeSLxwMS17wmoqKexLmZTc461HK28eLK63bdoVyfAyAULxS7RjPZV47CE7kt1LHMjFaxHu",
  "key43": "2sbgRQfm1xQuYfsGgb3soMipUMpZTVayygmk9ecv27D8MYhy4gn3BGwTb5QR2xdXQ91RDJb6v7Hq22UR1TqBnPzr",
  "key44": "3XBzsFZXuAatWGVtipWUj9Wz1smYHUgPNzbgVe8H6NbHJopE27URgyLWE2Rpf5fKz4eH6uH8pN4h2dwUXqHk7TJo",
  "key45": "pUCy9AwUPGfrRZZRPF9n2sRrBy2GJXhcsNMU1HgXK7mDDEX9ZY94SDHMKGBUyw3E5ySL2RRFydPYQgiyiD5pMff"
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
