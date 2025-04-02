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
    "JvSqqgkzeKNJ2fEAsUVod5qVQHqtjPU474y6vo4pAQu2iqtjo3eC32iQAUH3v2s1d88mTaJRXh9mRKzH8etbhRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kQMUbUyKdMTfYCS1Sfy4b7X1CACMtwiKM89XAeXuxHGodmGHfkjdiAnPGAUZvsniPRvVgVxNEzo37HPsnwQAaXq",
  "key1": "2xz7Tf7VjHsms9jf4Mi415gaiF7cMEdtDcbpBh54kC21YyJkdcXarwie2F3AL9RTZfG5GcW7ek4ChZuPgWpSM6KD",
  "key2": "2LmCi8jM3Sn62LmnJ6eQPbLY5w1JDAnBR6iYiwFdSMpaRgqVbcRBqPVYZgzXRfKDReFtAX4YH5AfY7irNLLKh1Dv",
  "key3": "orzMjqVwb8Fz5FjKbLLbCUSga9zwN6ecdnXc6DbV3CPeXWM41NKHqjXWAtKLpuw7iQ4L2vzSGXUqpV2TvbRA4Z5",
  "key4": "4cSsSgZpHs6CuEibj3yqRqHujo1xRDU8WzBC9rc9jLHLpJ8bkNSUF5Uw8WQcwqUNDxxJfAbhzBhodQ77dAnd6jTu",
  "key5": "4rMyJR7S6AJv2H5KcgbbUVQPMCJKteTYyXcVNcPouNoi1iaXNqcLX9pygstQ2QcMNKtTFPrsx6YAGtoC8TktP8QQ",
  "key6": "5gaTnGB8A7NvHqzMU3W1NQYLY1AaKgMk2uQyFXpXyLzS4oFg85jw9fWPdbNFPvrtk7tc4e5RLJmkm9XwA2ZzZVMy",
  "key7": "4YCHhFL7MrMs2NHNBFiatvyhGWzFh17ZKYKawM4tNv4vaycsnczZnHEBxuYCTve1STPBevBKEkAwpRSfg9YkWvAf",
  "key8": "3YBgunjsij3xcDkERL3WhEJU21BWDEimvBoFMJnUS8uqb9ZAqNYq9qPynNuH2ANQYX4S5qaYoCCJPLAyDNevHnaS",
  "key9": "cBm2M8uFDGYbu2dPrEoaPi2ZqE584nF4KC1JFmKNusee4YjBKBL2aWXAMPuNV494TxxS8mCtUgthbbqvi3VS2Cd",
  "key10": "rGR1DKJp58VDfCgrAgHo5vJ9Gkif95GxTrMnoR78yiT6Q8mEkefroPosmMdKfXPZGjpmYvZzguncsND1MNuRC9D",
  "key11": "5g4RkFuGwwS7z1NoXbgeNzqS3rHq8DJew77e6YimEwqgZgC8LAubFzaMKLdyLfGVugw4ivVZBP1xWJq4Q2sEpMQB",
  "key12": "4Hq9dpJVuYB42Ns7sfMTe1jE2QztKo5eZaRokkLkRYn6PoLBBk4zoNn4ePLcWc6eqJdQUPyw8scnYqfxHV4DV1ma",
  "key13": "5ti3L282s3bN28HBPyrQAwoaBd1XpaS5u1PcZang6wFmVgAuxpCBQDgJMKVddqZsBjL8JzJAQfj36ZTRThtnxjYa",
  "key14": "37vy6vbkHaMwy8RHBaHAaC4Fq13u2X5Geo3cjWFT3349HVwCbBG6hWVLLZVbm7CXV8LwJzE71bSc7xPkepCeoa2b",
  "key15": "yYDMqR1qN7viM3FWiUieqAKUc57qGDkRMnZYKUKP6c8F4BfgEYatfLAqRGA9PUSKWCu4AcXAFyQUnHQkDhQMTEw",
  "key16": "2EUhjg4RGWAqoRaNNyTnbYnM7BYUtaPBHLzmWNtnjmeZZ3PmiZyv9wzWsDqvcdncZeGLVQ1iRMwaKbDXyJEvFvrT",
  "key17": "giJMMzr3Nu7Y5g9XAtGguxoX4432FSf6b4JDcri3khKBicgUvUQv4MNBQ2foXJtnVeKrpoth7hLw1kyzWCFxeV7",
  "key18": "5TzrsoenchC4LsUphkTFEbsNrsbKppYhK1dxwuoyPo5wGy1zZH7DqCqLhGiWeB1BLVJaYwCLpoqqM772arjEJzMo",
  "key19": "5x72tPW2zkHtbBYMmneeDvdk7rWX8mE6Sau7ufpfYLUwdpwjwHsxLRUdMspYSameV6K3XHLEubk8gWLfPRFRjrC3",
  "key20": "47V3VeffBbiW2HQbxnGyZvByCP1iQhYWfmeiJLuAAHSkaT3WifGSNqqVxzSrMAsheMLEedX5tnN3qUVC2oD6kfjB",
  "key21": "GmzTCfCxfBzpdkLJLFbZcL9bADdyJ7xiBG1DDiNHA3ixquvpDCGccKfCcLZKKqox7xx6rAxTbBgqfQWp8DkMmaU",
  "key22": "37HihSvhiSmzQ2511Kk8J8ud9JfwZtQndt8sA7bfpzk7FPsBsSg9dXXfxUQqW77z1UnEVFK8RRYb2rspR6qELkTf",
  "key23": "5zSr2b6KBKgu7KxyXZQnzve8FTeCpVsk4CQtRg73851jyWEPQoD8PSTZGsHTFtjamq7nNBkAWRBNqwq3nAPJ8Wth",
  "key24": "4n8ftohnjBmk3UEKAkbFhBYRn4kywUwZjAPowPpqChrVNLyftozsBGjmzv7aHMRdhXMuo5ddHazQujq27xMyCcJo",
  "key25": "3kN3T66SDzYj4Lp4etEunE1mH1GRVpiJSL2aYEybmAcFiS3v4oQkQB7w1yDCDQGqVHvRoqSmKTnwHzmCsPqoGkRG",
  "key26": "3f3oBaGUDKoYgphQcgBLKGpyAmfWCqHz6LQ2wm6dJQ7hheHUxirH46Zf4E3D8WajR9wjDp4frpKnUJE2K8aeJpeB",
  "key27": "uL2vzfoSMSeUAHCtvkxP1R3VWZEbWdwuLRsygXmFWtNGXbLDYqYn2B33aWXK52TZeCMgd4kfFJBhPG39hbAETyN",
  "key28": "327bD1TyaStug16Sh5d4PxGEC8EGPJRgHa8wUDvuWpBuXDdETt8DHtQYME1f8sDjwLXqmXkZ2sNWEuiomTJg5YPL",
  "key29": "61vPWcAXWz1NspyfWN8XMq9tWZnTUevB2BRyUNoRgbd5HUSzBJpsj6MWDMDmE8doqwGQE68cWeaudLtb1zSzCBda",
  "key30": "Ant48Am637rtsx4NThLbfaKioank4fKioQx6sGE14EdV2rDfoGPqwaDqekfsPrVcAP1MVMUvUuiT6YV5Bbg524h",
  "key31": "126LtvR8rkaDjuoQEVzWe1tZH8cAmorW4BsJjTre4zXPzqdgo872QzczhG2U3ntLU6ssvgEsQUhWnadkctp5VdkT",
  "key32": "5ieSndPE4Ta3vQZAyzNht3kEvcXkizeyZFfVedYk3ysehWWLZywUvTWzoJxYzbDQ6NAuP74fAMo2Ba6Yf3aZmqEW",
  "key33": "h72g1oumb1JGusaGWUrprynLDVkNG9vp4vENgSgUqSXhiBC4Pm4gYX87SdiTGtis4FPcX6Me4pghdLph3YGNp1X",
  "key34": "5fX48DbxC8TbWy5ths5mpkWBvynubQZmMfxAKMZAcWCUyyWyBCPSRnAJhQZB4NXuRtP1B88p6rH2jhAFx97WReDh",
  "key35": "PzWuB74qyBT8WHayqhF6KQZLYd8S583yb82WRyc4JgwsYqMR4XupRQHo54SLHQzt5NqAAeXZZKXgXechkvMRJY2",
  "key36": "4mcUSYw5FtXeajBmWGeVmBXBfoeo7FWrkCPTKWUd7icUggW5Rq2EEkv7BNaw514Ufa5VJsRGwxiD8UZojuSfChCs",
  "key37": "3kPvqB5JRCL5Mr5q8yBzwLrSgymHASg2ZFq4xMAztVLq1E46FHsnyZ2fo3dy3QXhSC7NVwxLCA11hgWzqWhWq9xc",
  "key38": "5GVsjZgFdksGakkQhBMRnPWJYcS2WLn55AfPo4xrAqovpwnQ464RKRYmDRqxw3hXAcoDFjxf3P8s51KvbniZCgGA",
  "key39": "4dC4FpMjvmZL3wsPhN2SaXtFXuP5m2RN7BcsHL6VvJzCG6ucWqrSQdPZ4UxKcB93MAiF8EZKFcuD5yrjp3ogtmQM",
  "key40": "zc9RWsh1uBDA6aLqbVTk3EAyADnm7xzVH1cYMNUwVNCLce5s24fk3as6fjXiYn4i6XLpg4zn9otqCJKTgUUXDsE",
  "key41": "5q9eKxEyhpdvJUNuzTgMSkXYEbe5mspZ5UmUDaGXK8uz43xkyi7NhAdNhmkCZkZbckVv3V9yo9wUdU4XF7bjK8x9",
  "key42": "BZ24e1kbjjAWRcANyG3BqbPvWYEWVPsa2yK3moJhFAib5tfiJTkhSyxjjw9Ys7pia9MSBf9P5YdYKgCmosdjpJj",
  "key43": "2ozXGaSpBbhMY7xg7LjrMuYagALc7ZYWFtdBnN7quszbasaCAGPpQfYfV5cQBMbrPkXXRQk6w3Hqav9tPLiTFMxt",
  "key44": "2B8MBtQUtR79UELPBgVkWYAd9vmQuG673eg9hHAZbNw2cCneyRHEzbNHWCLj9wSaRDraVpZj4N7K8FXS2ZXh7GB3"
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
