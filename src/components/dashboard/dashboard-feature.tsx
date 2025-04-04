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
    "5UcLQK3Hj3QFYdVZVuAdSP8Cof6F4hayvea4z31Hw4sicKM66M16PS9dEqfgF8fkAJ2CRQVcGvq3eWwynsBnWFwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SVsLdxT8XFmvZ3sDHGJAu48pUomoFYLcmPR7socMo9BvDigHHyy5fxPgwhFmxXbvd72Fwnm9cfUnnj4BQ4zx74x",
  "key1": "4XJuv1KeyDj2U239gpSMY4K5ucBtLh9VZSGtX28kH9KJuUYy39Z2FnqvaNXYZF5BpFnWSN9sYfyuPKvJU29SpSrr",
  "key2": "3ZeT8fEnqkuYvKctCwwJXWZsPv5hVpUmi222oS9iFkazKqhihHeD2YhMwiBdCRvPCXPakd7FQV5DKa9diE3dHSgT",
  "key3": "3osX3qy8892bX67qBqPRs1HQ8yQtF87PPz7fDuNZPTSKnfUtELFhaUrJSxhtvcp14vAxPtxeKXysa9L9vp39J64S",
  "key4": "qRbojP5dhSpdv3bPsAk4oy9KfBPZKLgoYifXnu5d7csHvZ4JmbLAd9NxaRAfwRcbUVws9ARFsEpetBwcE27PEUW",
  "key5": "2tKU8cF9K2dPAGu6qUaaQy5HPpUK1nvevBY5QWPd8wX36d92JPwQG6Kh7VQrYcunaFSEucZvyedrpzyguWtzkVMW",
  "key6": "4JWeM4X3tEK3G6BuLeNLn7jzqoKuVjJTsC7kXvsXBLgCYkAxEActFPMNFaHPpYaK7quSDNE1rGKj9GKBHv4oEbP9",
  "key7": "4PxMP49cK9fndKEUyabKVDwQT2Mhwqy6LPF4PpkutYBPyrMdpogqvRazyPsvc3Mgd8GpMYHTKxf4EN4Yb7UZsL5P",
  "key8": "eZHp4SJEX5Jfv3roSjgrnAehgWeBuoFpW1BSGA3JnfzxvjnYgjmKax9VJWXcyAa1xU1WL5dycP633YzX1RKAAkq",
  "key9": "Knnq1HhyAk7bCznjsd1iWPi58s4ss1ZBBUZV2J93SKk4HHyctuf1YszHyVP75qPWuhsLveruR3bbS3jJeEGa9ze",
  "key10": "4KCuzH56asMm3gKEif9KF7oPoixHNyFtnuenfRJmK8fEnffF8ePw2UJ6LMYQapkPXKnMiifqvLvgwYyXYBARGtjc",
  "key11": "Gbs4pAMcrgiHtY3ipSSdUX3uADS7HC713uJvks2Em4dujg4qHrDSP1Cg8SCHip2YMk1u9BEVPvG4DU9PJeFgiss",
  "key12": "HWxAbDuHaKgFZmZySDNh6Ujx3Dhbj3twkN2pkyuvCaFHea5YiZV2jw5bnpbjMwVrdWSzFw619ntbgy6s2gejTt1",
  "key13": "2V5wgGAm4jzpgbc8j1AwJXWKr19WSEK9ZR7ng2HroA49vkytiTVa4DSvG6aA4JdnYiCsG1fyvmS1fevXnGPWupzg",
  "key14": "2avZXiXZQXJKq8xnEamb6AM7Bv6xUEdYWreQcysFYcszCdgRww4DbgGuFvZ2SEYAUbAFaTMQox5oGgkjfTrvxDCv",
  "key15": "3EP53PEe14HGiQTPE5NqAM9Tp5GSoU61aUxGws4BF23DpGrfwiuyGQ3kpdxcCdHt9yWFZpTqCYbeTvjQFyRMz3R1",
  "key16": "3iuxoybybg8bc1RUsWsMzh73xTF4Jh9WXikSxB2WAv3cmgUQnvxWbibj1vbeLUVqmfWUwnMCfM3WGvQvFVAypmmN",
  "key17": "22eAjVYLJWfzmhPQVWKwA3M6eAZjsu7moCiFzFvUhpjWNR4yLmejrTH3fgGUnpVuLXg7mYxrEUzXpWfCgkA8NL7M",
  "key18": "3LZveGt3H7eZDUMDi2XXyqYZjQYcrcJcnDV51pBf32V7Ba2F2aTSia5eVVZMzzVTbiLV6sKMjx4pG1bnYjqShpSR",
  "key19": "K6mBdpzpwcBMJdfua1ZKLfTu8rYiHr2WkQsSawkXV2WV5G3bRooiJBNDWWN2pf5Sj3W4XgyHJVNY4vTEeXqa9ro",
  "key20": "qpFemY7oDSYeHZqPJCxQuL1tqgd45djkuBR5yvzwZeinDpp5whYPFzh9BYfqEBCLt14wV6BhfJNh3HBhvgAGSCv",
  "key21": "3Gas8jwARNXfSa2HgFXrziLffZLbEfK9Q4aLPrfAK4N2srncZJWngfa85wasmbnRz2afczZ9zyBpfVXrMiYY1tK7",
  "key22": "5BaaeydkaXvtgJH5RhLkiLsui6X2vJ4N9WHEMxZKD61cMV8XDkYabYmfZYY17rqiSc4LgvNCBUEXwMxZWgfSbRty",
  "key23": "2MmoaoVXazYoTaEE8RWJJ7dXfuLgT6Uf9LE7phAtwHCaqbXdSGRXs2myjGuvhfuJXiErQ9SXBaSsvhECAUjC8hZR",
  "key24": "3jMvCKRUP7nLBRvHYcHdpzNkYQMrUAAc9cDHsLk1CmYUTxrHomB6sNYFvY4Jazr5oNe2F5KLjtBCQ698pU5q3gia",
  "key25": "4mWwYHLWGpaP5owUZwFMjF8PDxGaiDFk9DtxM8PZL8UqGfmdajBr9GKb8SBSUjZ7556oBBWQC8J8XBnscfwPF8GU",
  "key26": "2LaN8Tn3HMSSYw7Tb4oLCoLF29dwF9P7ckjuiWeemp3hWvGCVB8qZZqTdRHiCrS9V5ohpfH8ARMcVRdfu1qHxSdx",
  "key27": "5hpNi57UtcbTG5SsXe6A4Sr13up6YooidTZRxYymWgjBdYBGJuasbSeSEynQHfKy2vgpCRssjmo574t1KcrZYh55",
  "key28": "5yRABHCxx9MJvQrzMWa9hDUE8dsy65ULbBQVLruMTH2XBsJYVt3JVdvVkZe8YF9jBT7qQ2S7y7tpy3U733eSTZ34",
  "key29": "T8okVHCET72Jvawh6yrXxbYfq4DbNc8tEEee1PD6G9LiuQAJjPQvaqQFdcwFbmcXAh4HQu4bnB6E3tvm4Ux77zJ",
  "key30": "hS6fwkDgcdhrjbiE42FfoaevVtoUuRXwTT3Lj6zTZp7zRWuLgsy4oF1cwWPLEWkxV5CbMCLajWZUBnkwjbxeM8Q",
  "key31": "2wDZs3YCiC1V69KoJDVtjj4o1ZLUTSye5MwzJ5UQV8A9iP8gVXEyJFihNEgkV4PWRNR7cVsVJcLuBKCqtBVi3Bc3",
  "key32": "4U1SvErF7YkhfcNU3uRycnDgph22YBp5iv4WEpbCaqgw6MdVBRmU2LkYn3ipwu8rUbJNz1K4DSdDQD9NMYQEwF1v",
  "key33": "5hnd7prieTTPtnqcGry5QvQiZcBf9ebPgUMejZJ3i14W3y6tBUuzXy6TsQcsD8GSu2bqNtJEiuPFR5yZ2RWCdrUN"
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
