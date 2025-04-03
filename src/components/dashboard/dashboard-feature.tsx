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
    "4ssf2gPAw9aJNtmRtUrcBHp8qJ1mfWi7VRDZRSwi6wzicD7LwgFg17zNXNDMEaX6BKasXbQKoqET4x2og2qMJ69z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L8apddw5KTUuatpTJD85xdctWH6CHHdkagRdBsmuizDQSYjGdnxqjQkzBc1Q54tH7icon14hK5EruxtJPfkGyj7",
  "key1": "3ALQ3i8hHBdr8Bf7HFEcRE2BkCGZTTzJ1WiPxGFifh7ctRZYy47Xx36mf6nPvdFRYuE7jmWsnBvt7c7NsnDfeMjc",
  "key2": "5pJF3sug7zWE7xCWtqr4rdtFtE32Qefd1qb8aScD5KU7c8aqarydeAhY9Rs5GHrsjMx4YHZN44FtkUtNwJJ1nZdk",
  "key3": "4kCBUeE8u6rRZ3JRF1YieXGakxZfDy9oQUxep8S8ZRPzvQEW1mc8a17AcTKzr8rfXz5Eq5Gk5XAmiLhW1emqibtY",
  "key4": "4VoYSX5HfdAiPAfpgHVzNFCoWkA1VDLKqN7gaRicnYBihuqhJK2ev6j2idHCJS1kK1YAwM9HHoSS47ve4w3swHFs",
  "key5": "sYZhLHStEVM6gAV4m7PVaDgLYWKnFXGHdfnL6nWzcGnTdJKbvomPdzrNjUdJQJowMDpPSjFQbfo4fn1Z33jacaq",
  "key6": "49gX4GXAkokcLuPhAnWhb2H7VZoGy3EKUjeGxBZA7zp86bjgLekFBcXMkFb4R75ueSJtVSqyZqBwdzfmBZgdsYDt",
  "key7": "4dNDvvpKdcD5nNJ7oTYyzjfQumWzZQYx4JreSFma9Dwt4GJizEvcBDtzchGVsvyLCsjiUTwHjGoFSTsY3HTcS2VB",
  "key8": "5CoBCdbfDJom9e1WHkWLomgbm7Bz4EJCCJe2gd33gEzYyW3eJ8xztxyXQkwQZ53qiAxNkTWMupc43gKUKymvCHtw",
  "key9": "3LEBsajHnGZYsKVKpJ7ccqQACVqhWT6bSQwpajwbgAdCXQweA4r8EKhdPNX2udf2Ytzvmk5M3qfXpLYru7PLYCqW",
  "key10": "4ZBB81wPZDf2dAmEGddY1Acnz4ocsZcPmxCSHUETt2Y4XGoh6z6qBxvktKknef23ArK967guCQmXmwFfAVsh53NX",
  "key11": "2Tytef7bdNChiRAkHf22f32FAEWPYpwLdJCujCkc8tpUaffjvevGddkquN9hkGxxAoZJNRCsBPZqLaWv4qLQbKfj",
  "key12": "3xvdL6EhyAhhn8Nc5WfSM95Hs7frzxu1fCTCgWYv53VvPxkGEdUi8XdGENGRnXkUDhHZ9wnRrLPoGZ9vHYx7ccCY",
  "key13": "4oYY5ddGT4yyxXvnjN3WuGMaGuN8ssErhtgP5bYFucVygKyHWyXg4kuvwhTrRYY8Xq9ru54gomxEBTLx2ZdcMG2E",
  "key14": "DfPKSg961aCMVVsy4bp6rLJnohsbSRPcznrDEHMkaBTzUfX8VBj4Y8o7yfem2r5Ys5aYnZ9nv6iQCE9sM7wD9Vp",
  "key15": "5Pd49y5CZr3GiZTaZrbzb1fAHU4EPKtUzQ2q88fJj4LjrRRBs9gBK6sSjvdmngvUk7PTKVadc5bQqwH6Gf3H89xB",
  "key16": "PsCrMco5BodFE1mbFTCjXgSq3DE8P2Gp2yDAMvwoH4XmvSzmHNfLB3izdty2NA555fCnFowRSVaPaXybopcf38a",
  "key17": "5YKAwuQxzXkJaz9xsX91GUzfd9URfv1ALrcQzMZxs3Sw15bEpT67AEKLHjB69Vkjv5YwQBGEKfnntKDJm7uH64Ma",
  "key18": "qZuyrwD86vtq6ab4SnwmYUdKsnbXgcF85pS3o1p2fJGrNcMY1EoDZW5DWxkzHX6qkVCvLjgGvqhek1CuLhr6XQo",
  "key19": "2ogowFRMPNK6S9pCDBXqpVfWnKjnXKqfj4sNcxKkgrPEPuruKvG1HSCLeAyJbkRHeiuuKsWPhrw5YFMdjLSPAxqB",
  "key20": "4tY6AH7WczhWGhNGH8U2rXWBT421Mcjk3WGkDv4twbTRLDRsdPW9zuoVGc7UX7DTy6p9UMPx4RxsBzyVg8hJcft2",
  "key21": "HGN961JvopotcF7SEpksMbqnRxaYZKNA5imYBN7c31jmgF1A8UCj6FKPqZ6m2VHx6LNCx59gm9TeAj5eYsQkGcU",
  "key22": "3UgnNPNbj3mXQ7t8LN4ecFM4Lf4nZ1y2jx95mtKdhxnpXGfdshb9dT67Uz8Hmonz196Gmh8fnZegeagcipPKoHTx",
  "key23": "3nPc7mLgq9h1BiCXnywoa9pjfDpLSoSbDssHHWfUNbgi92RoR34jXJVkxu4FuzfD6e1QE65hF3ASrYWrSKURmUe1",
  "key24": "4NKSQgmeAwCseLpkVNUVaXRv77H9LhCgqZgBdm9WrHAQq3uffY5jNZo5efpt5QC8SmP7kH7xyTetaL2YVCrs73yj",
  "key25": "2ahwwTZAb3HMAtVHZpNdWurnCsP81AtBLJLTtog7c2qkb65qx4c76pK229uRdTiiCASkyEgMmsaoTHekLi6Lo1VF",
  "key26": "2YpNH5awgiWXjJXGkxrcwsMxQqjiDkw3UvRHKudSJP13pjKKiKhheDD5wgXHfxnAagMEJNdFqEBeCEP8uymjBV3w",
  "key27": "255W6HJXh3Mm3nrs4TBqie2wVt1bEDeaWFn8Xy4mQWXty4WcEqo11MDNHmDcpi8QBpkQJFzi5GPnTdLzyNZprQEZ",
  "key28": "6w3n1FKMf3azbuxJmdW3B9JobPMRqLSvo9zv2ffDh4SXe8uyqX2gzWwJdtXxvbJGj3wRTbZuQUF9XFMR3AkL6P7",
  "key29": "HTVA5tcPZ3C56h6wNHACeZgzr9XcpSikKnfN22oMgYiHm16jxePWwVvkfu3ogzmZyksi6MkwjxrsXDqrbdDfLME",
  "key30": "5ZDYGvQomPEhtbHQ7jN8GCuerU9yYManwW6vDdMfmts8wiEL9BppskaKwUZsNWnMUPxu7ryUwr4Rp58p9ctxrSBS",
  "key31": "5j5YnuB2GEQBBD3TMt8Zt5BP7far98a8MpSzQia3F5YHPRQS8nnW33ZNfDGaaUJGvrn2w4tQY3wUW9VicRpXtvsG",
  "key32": "bHPPbVj5g2rDUTiJQbH9hPYftmbwGTVpa6VZuAWgT5y83D7bedf6GmsMjtpGfm57FDhTviFAxJAFqBEzgJbqUMC",
  "key33": "3qifBaCHFgGcG5CUVr1SZjbSZ4b3aNRDVWQA3i7ihFZZj9YQrFNK3h2TNKU1cYnmkN4vYvT3vSFtFK5jb1GdgMTP",
  "key34": "22zmPZFeXLwCGwHBi1Yrs7bGuZxZzndvEH2QcA84V7CGczQirRM8gER5DCpzPHuF9TNmpcqYDy2LUUEB6N6b4Ssb",
  "key35": "2t9yyuWz851oYD8GjxsP1oTCsyeQV1mxVrXNqrrgeKsMjEa1ymK8T6cTQXycgpz7b8xo7wze7XemM4Q873X5RLDw",
  "key36": "3LnVzici6MDWABYgZ1DgdAxT7V5o3dDG7a6jCLYkpZoTpQsUmyFu2v7Zay19ivMQjXPMRxyCG6PZpzYujQcxwzY",
  "key37": "5k9hgfd5HKBHLViiVGQ1n7Ps7ditCfkgUXrnh4vjTMB36AmVnSQE5koXHeDF4HsH2LifDCJr7uV2jfe8rM9G7DCs",
  "key38": "2vQ6qfeVyx8SGMncv8egjRKhpFRQWVwqtqveAqZM5sdZHiL3QWMFQwd3SamwvbhzvhUE2o82RNKodv3V8VguEoyn",
  "key39": "QVtuN6jW2fk5QpVk35ghwRekdXteLEGbqVkn7AmCdb3NBQAxQ6xaqTAjCjZwbki4koJufqak9z9edghpdG2FQbN",
  "key40": "3NyadbQWRxDJjDmc2xhKAUhwqzzATKV6DfevNkqCdanSH2n2VY2JT5WhcWngY6L8y8p9o3hFfT4iCCHThrfNQxYi",
  "key41": "kMBXgaoQBgWZCrx6BSFfDf8yEk48MfgBfJcCDro9TzbAZLYn8k8WMY8bX2ztXmFaq5KHKdTrjpSRbDU6HJho4oe",
  "key42": "4Bm2dFhiyLdEabaQd97PPCxkbEnSF39Wnr1sKmz4rp6wKoY8e8fVtEN8McgtzwsWBQaP4WbKgJrndGRokLLj2YSv",
  "key43": "2gDLBd8TNe4BnLwH36Ncch1ybLudW1V5sdX17gexWadn56vAKaXwxBYUV2mUMjYDED3iWYUeWGeQqhKbkFd995hd",
  "key44": "2H7h9bNHh5H5x4xEYVoi8bD1wq4KYgSnAXTFTtS4T5mHEwYZvNMdbn3iGce6Eh6cgjxX8FCRmBkQYWfARTkAJqR2",
  "key45": "wiHpaNEYUEGHNHzpaFkZEqVSAkzmKsg3uSEFqTiKLLjzm6nCtkEJYbAxtaHNmi6xZuyvD6MSA6GQEmSLrdzNui8",
  "key46": "66gAQWbTXhfT69RSrpY2hg34XvrfGXnrY8Vgk2oQZkLy15saUpUV3Sx6DNv3phyHEDzUFQNHWpzzdZ4h5GhUzYHe",
  "key47": "3SHVp5uxprKemqvGog4UWYCX9B1YFjpVSUYjnKx6GX3WAoazFRrHMDzFTvHwZo7UJKg85eJtSDubqGZYapcwG3Q1",
  "key48": "3kynYEFsg6cainVAoz39j6Nb3pYnpE79Kp7Mqf11UnhhSejJcxnovPZsrepcpEhsHtAHpRKaYqxijjiVk6yTVV5A"
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
