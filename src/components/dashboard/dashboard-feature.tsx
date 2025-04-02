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
    "3JrBNKvNfvfb1nzAizhSQQQHpmrtMYPiFDSiob5BAKX9gDDosoKQH8rNhqGKJJxZnzVJZUqSr3Dtv5kNtvBbWwcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qhbd4qBNE8R7r8zgy7o68hnJhxfAChJF69imgNUje751WCnBPZ5yoU2iQtx6eZhT31EUm3Hu5BH5gAbynk6gAKH",
  "key1": "4Ds9WhjnBFn8n23DXyvNFSzzTT599CF1JwagMQrPnKvjDjsGySSyuh7QW6Trp8GTxrVrgXxM7nGLKwLPGb5CMR6n",
  "key2": "4ScZrZRnSGhDfRXgzGZDVrEUQpQpN7S37HASha7P4MB3F4vwZoYWAEYMgPkbMLQ72Rkye8BorD2fLhep7ANu9dLu",
  "key3": "KV2MFNEtTY4s9inuTvqTZ6C9g38jjspQLRibNocS9Hwy9UQK7fWXMdjqba7h5VtEcs23mTXYiXyFfpJddaYLmyi",
  "key4": "28QV23dTud334WanmtEp7n9xaqryXQ7ihe7WygRrfMqQnJYXmPc1j6RPg6ajYgEAixNAmmhhJFU7YvEJBQ68Bxnr",
  "key5": "ewcimpbTThjZTdBDwaKNUnvUTwCahgtgXVK2Rq5S3twVUz8CdYNwPMDvjeVNVsDtxXP6W3ftvRpe8RbGC6zYVK1",
  "key6": "4ZQgCjZMU2oX79VaenbLvkKJAxjS7FiYJncALFAN1GCguVv5D7CvkRiHoXpdF5ZBAa6oqAJXko3xNLHxgy4JvNBy",
  "key7": "2JWquiRJVWDfgfWqZUv2BrpkkAiRE2MpgXuQ4Ewkw2tEUHx2svzfmvyvsZRK9V5vXsfJQ9FZ5CAX4AMjDzRfm4wk",
  "key8": "RUtrkk4Wq2Y1jjDBqEZfvybkfJdfcVfFbVVrDjBpNFnEqj7je3HXRGyArE8s4fMBt4jH6v5sXjun1Gzrw9t1zkj",
  "key9": "2GjvRfB796JEKf7ZjqvPk2o6gVcMcodLKDwXBus4XN8HYGWZNmvELTXYQhqC6mF83WbieWj4zZ7orNoF9MDemQZV",
  "key10": "2NfqPTzVmDxhcGEp7gVmXvPfR3VJ41azPhvZD5U5hXeb21uKHhNtRqqrtYoLTQP8qDn5ZqyzgUhLBNrpxGSoeouH",
  "key11": "zKRTE2AdSVyhHF9SBQXWHETUavt7sCymAhAXAA4nJjsVD1U7GYax8knuRH3Jgt4fdrSfLMdRA3kin7JJDZfQv9a",
  "key12": "9TnR3DcK7zGKT8DWRkBZLEwR4FQ7JxLemmPfoFUmXSF6kUVnpCo4Y2aCJvs3JRBtReLxH8eEoLEjscGqyCnELYC",
  "key13": "4FfDEFEdBULncdtecY6ciww9hh19YWXdWeLNJFa3NykeWsh7Ke7xjUHSN6GQnaWRcXXGsA448GH26ocCazwoDvAb",
  "key14": "onXxKgEN1c5eeoXuNFAGM8Xg245dhvm8MhNr7aMSuhdzbBpbjhdnHhB4cYgnho64wcbcya1mAWwJncwKm7dqXGG",
  "key15": "3Ptv4xyKQdYeUhHZeUkJFkz7AKULrbRgRDnkRJ2MHf2TXViYz7FhU4yeZbbKoSqtjPnPgw7uFBgGms4HvFmsDSaf",
  "key16": "5LEdxaeQpx5sEPoBbfGG1zq2zctQ4nX9RT95fGkKDTmEWWK32gKeRkHGecjYoL8pCrcy32zF8WWsQNWbGMn1JQ1r",
  "key17": "HVC9gdHYD61oHRRobSDnY6VWvwZBBHUoCZSZvSKdHZqXS3PJkYYSYkMXVvb6rq6osvdmDQmTTuxiYej5ZaJeUqJ",
  "key18": "3e9VWxfkTqyWYDHQxAaWrtKg9Lqwym4fL8jrfyD5e8mE2YzvwsPPtkCgxosy6omTWHGzBaovXxqb8WMETZBUTj6X",
  "key19": "5VT2T3NotJubENvNenH5yZEAVLwjXJu5LZpVad3RmCztRooUZDZaRF4eAA596moB3ws6SaxDQ7X5vYwLQijMht1Q",
  "key20": "5fG1pv8ntbSJuyRhC1dZ57zrq5sASQ9mHV5SmatzYNFzAUmzMC2JVeuxKLiDNgQWMxsRZ4vKgiM2guTCqV6ncJHo",
  "key21": "51LMyyhyTqFXPLepkATkXmdzBGDF3ExAytnNCHp8SGGdjU8kVWUjfGavVwmECrn6GX5dkao5ufCbE1evN6gdNYBa",
  "key22": "31DVLZmrcXy58MiUd4qqxnrw6eCitaiRzJKoJQwtzV5oHHPVghXMrMAR3yBtxXexWteZHVJhYyhsTaDzVGz42LNH",
  "key23": "39RHhzzSGBwnJVez4DNR27saEeMZMDr2rp75Hh8JR1ccUwdH1pgpGABdN9tR7iyzpR84FNxiXfe1yV4ZGEUuyJn6",
  "key24": "25hfFPJiiandLMmrAniAP5hYYkvgZj34SzmBeBcieiYhgPtZbUN1oei7fVZWKuWt8not1UY22zBunLKopXkYxm9s",
  "key25": "3s1uzvfkHbuMzCGKrsbjTMDaGgMrJb2v7TJUq8sDgqvA4DFaZ9G1exftM6BTagySL6fuZaEbYqsGzT6gNtkcwb8A",
  "key26": "5mGYjxWbAqHq26dvftiAtdmmr71j2oiF6STmdkkvCCqvhLcVvo8ziYMVDeVbrgCq6GcsKwKNAVZxr7Z5ufDtkHd8",
  "key27": "JVz81gai8EhbftSS277msD6DStW3m5QVCNGM4WSthxok3VSs2v7iLkdy8xjPgNcgGQqhQ9e6NeTG5rNwftT2Pv7",
  "key28": "2mwcydW3vhGjgS6AcjC8NjVQg7R8KeYoNj9MsmQQbsuhYPCCBVWGn3RQnMXE17DbViRjd3czn6ZLxgmiFRnXQNmW",
  "key29": "3TWGoPznqYipbmfWBmK3TXaKKs51jqN4ie5k6Uq8bjkWz2Uc8T3jjXSFKDJjtsNyLhs63h7dg1k6vE1CjYviwV6v",
  "key30": "3Gcgjq8A1sWtEuxhFNbRwYJDZZSo3ymKGTLQ3Ri752m15tGxqByxrrtrTbJMib5vxd9xYjUj8rh7ygQHzD5Vn8Ug",
  "key31": "53kD9oorLYEHKpm78kFmH44eocvHiK5LbUaj2b3pDw3Bo44eFHui2YegtVGX639iRcAN3GCrgWirzEjQd6gNFB5g",
  "key32": "5scKG4YbvUrkxRvJK9fJ9ULF4EzmMdigDzhT6Km977aeiwAXcav52jGGzYaxxnUomHcxCd3dfrCUMM6PWFSUBkp1",
  "key33": "292yjA5JBi8CxtMc8DstUiaFgjMPeNXb4pZs9wjy6Doff1qV9ZCBsQiRJLn4a5Y4fj5grQf7Hc257ZQxMvDE7vwF",
  "key34": "27haGmvapqZ46hjrKK8chxYa1pW9bAvDPbVHN8Chf3Sx1XF58HFBkwK71MZjgP7hmuutoXRE9o5S8CLZx63oA4PM",
  "key35": "4gYPx43oQAXg8dRkCdWfR8Ht2KdX8tyqoofB3cToUFALhsQPbiXUQMHUg8m8UL3XhUTfidXb2AQgfKZ9zvbgQuq1",
  "key36": "wJvdLvGcNqQNzRi8zYhsPZouSbVmpce3g2nkZHAbJy5E3tmznGH1NUQDMVNbvRAGd7yUUvtXQma3ixBMQKaM2AE",
  "key37": "66p3VMt8SoLpwH1ZXgT8GZLd995GqpsaFJsRQnVR92EbVpmHjAqtMDbPvPo9oK2mdE4Vdm8k4bkFDdKH1A8YtrHd",
  "key38": "abg99iCDdGHy5hsv4aBAbw1k8fCpfTmAYMVK4gnUpGyFnW7fyiiN9KPDPeKiCBfX525fnM9gwFy8TtttB1aXagm",
  "key39": "27YNeEy58d2ng35fZKWJLThn3SPxybyQ1iPx2Tsdx2cvJ1Vdi5E2bqA8o9F8Lci9i9UL81ud3GTmQNRtE7XjTbGE",
  "key40": "2AbfX9E8yzeGBFmSgtFy49Neiw6FSkZH1QgGCLQywdL1nQFpRoNcmdGYKxD3DCFNKP6hkJEjpVsRbgXqxKcZod2T",
  "key41": "46eaYXW9WGS6Lkq1xdTrGhCtC1Vfp2DYFdFKt8v1aHGbvdwyyobTXfEjKseBWU2xnpzinyQdkZYqAjdxVLy2TrVh",
  "key42": "4uhVkLebDqVVGxRHF9kQHgxU2uE6YwxJSNbbxjUHCiFebscxLs5N4TDXhXuBjYUC4ecbeVHrsV3HnuvBc4unotLc",
  "key43": "25hpKAj1ojXb9E7DxBv6ZrAPxT3ZbrLCMV2ooWEsDquh2pJXBR8ttbHUTTd3rsJW7yM6xuhn2VfqvkmfUmLwaFpU",
  "key44": "3raDnadDpyDqjp3oYauB1XVoL1eD8TqAQYMiiByvs2Z8CPgyVj6gshZuUURaRPx4E7hfwjPh9kKTh5DL4mKanBW2",
  "key45": "TgNpJC6joZqMrzL4FMA2fQ1kCZkVEx3fCdVtJRbKWt5SEyqgDZjmGHnf4DLR3H21kMotNmjYHDJwWVmbTgahSLa",
  "key46": "5h8nG6UNnqbvLfHMzY8QMc8hCbBK8CaUC9boboepnFCi7e6A7JGrMQAYLDyEfde73qb2wHSYG4Yid3f1ZBCGjKqf",
  "key47": "o5FYHDezWkAPRA8tVL6mhpr38zAUfBC8gchEciz9bLmHTSTPcmnD6vSZFE8LNNM2QjWTPYWnn4sVyu1W27YBJbt",
  "key48": "3dwPB8m32Q5pgqiswKu51BfEeKxgLt3a2wffNwqTZJZ7ku5hP4X18mg3vcfxk1N4TRwEtPz11LsRPmBLyLZFQa4Q"
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
