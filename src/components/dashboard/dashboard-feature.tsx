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
    "3z4CRXbCwquLcDt2wqhEinJZKvA4WUbawZvPkS99L7ahTx8tnXzxgWTUV9ZTLgL6zKcHtrgEUKssbFZD8AMLLrTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JLWetjfggCRV7oTJDbaMeUpShRFd42pVxT4ZAXJevdvYPKMFzog9TZqrPgsRD5LT65RoxzBan33kr7ZimYnsbj",
  "key1": "67F5bT3rgqvqZztqcutNHnHCos5UyMYYMqAsEJdzTu78n7noQJ5Xg4mhQWjT9CNfGkz5yNX7dhzPZojP1Xu2WLx1",
  "key2": "5pGUhA6AoJTMRyuY4LSM614ep6okoJghJeGNqKupnRG2GGuSTfBVasCQzvpRPWCbfxM3MNTp8ThodAPg4p8u6Qet",
  "key3": "3yVX454PuggeWCK1ghJnQdsQCdma4gCmgW9RLimbfH2mPapyD42q6P6hWNZudJxD3DUZQJNaBbqX3dWFZ3e5j8gv",
  "key4": "2dD6a7q1C8ibFV1RqoXjFgg5D7S4qbENE2zeP5tQp3YUAPqCNxXfVgaQMW5WPJS7VS3jhykgcW77s96DbRB5ZRpN",
  "key5": "4V2Q4Tk3auCCtdKhte5w3F6mwqL37jUX39L1TnoHisX5S4wehF8KNxAotcY5q7JkBzNLGqEPcvbgNz8f6uq6Z4tL",
  "key6": "3kcT2fTMR9neHXKjb745mkhHbqDm2w5K99gtu7ZyVF8Fbn4D98LHs3cr2hfowe89qD8xYfCzj4N1DmqaWVg7ijop",
  "key7": "5c9RktpJJvJhegHNqNmWbXFEtC1RYzcDfM57fE9QrGzv7BgBjkhDVaHyxUbcLn8nRMWFpmaABSDyWNLrU9ePjmPS",
  "key8": "3BvaZawNWZiZQ78a9L27ocNsHnmLLGNsmZkhzE9DXbPCrSmd2k2s28T4Naxj3FpCKDrrFxQwMDJKziaJHqrNNo2M",
  "key9": "fmoXUxJcPzjgd7yCdJEjLh3fYaXkttT8z65gnbiGaMuTvoDgE8zQVEom8fzutt61Q6g1VRPn9Qapux5veuVJ5M2",
  "key10": "5ymcd8WcFtZxioxudYcrqfbW6z7tkrWmVrBJSPWBfmzgtGZbkz22xBmbhmC1hYX1Xxq6TUamZvYBCSFqGm8nv58u",
  "key11": "3PThxPTenVwpso3s1QVwjtqZoXkRSJ4WWiWhiJwX5Hw6ifJFk8sqFZ4hx4HFYMKx2SYgWEP6KZXkc6aEpJeYzskq",
  "key12": "3SmncRL8SJ7YTb3tn4M7PyoJZ7L6yTq1LPWh8t5guvg3fCr7Zxn4p1TVnY8mrovzuyzyzoXe6hHGKkbyJtJC4dwG",
  "key13": "UcCGn3wx1eTuo7LUXmb7TNzWF3s4a71xJ71TyeEAm7zxYz65ZTpX38v6Bcm7i9otzzQVgqatkyEGsvdbCFJPhTd",
  "key14": "3g4em4q7D8vkcZKNbgGjT14fgmJxwErE5uXL4psqeZ7huWiU3XcAdbVS7TfKJv8p3ZxSCUFGm5SSnxZaNqcbNaDk",
  "key15": "4BNMMwoCr4WFTswLnBSDN73Whn7RezNvF2UHKa1PnKKBN6AnqEiTnSrWC9aBHBb7RUZywhto3wEiGdk12E6HpG6A",
  "key16": "5MbrSW3HqjGKGPFALJ1e28w9YEmSvu2KW9Xd4ndVYtKHFYScomjPcXGxy56GiGc5WMp9Ku8zc1ZEtspHi5WBepV9",
  "key17": "3QxGBu2QqzruzdtYqfAben42W9iLHpvWVd4HZrE9v78BCgumW5mcyKE2RqcWmD3ceuWGkqR2FVhQehnasCFvH1Sr",
  "key18": "9HknjGN7xE8XF1cjG5P9RqV5dBQvgaRPbcXu8hWRkV1pskU9XTGfYTom4xNMSjoJAoqdy3TC95t2cqV4YwYHm3p",
  "key19": "4LXFeovtok2NweM35XibdMFWCL8H3ZHUkA3mgYaNVcxqmKguf1s2MVCuZ3H7AjT1tzHXdawRhYaWut6fEU2cRGdw",
  "key20": "YSreB2ZAmVJpsmfeQffxN8ZgBXXtxmSkrVjtrEeGhGDcDZ75eN9FBsFCVrEdd5NMFdT6a1A7LeKy4hQCxBpat9r",
  "key21": "2R8y1M13xLdnB3ofRP3XCB2eEszycaZutLdCzP9Bnp7BYEkdWi1guZrJmQSCXGZFdjdbFHJjjKsdRzmwDCq84gc8",
  "key22": "5KosEgG6cTptp7bFmuFhrz4XKzP6v63e2Dkgrkj7B8VMsxe53UDxGw2Fyobdw5tVApQdS4siDjfnBL7unDfysaV8",
  "key23": "5P12oWzX2ohHMqbxUy2tjvaNSj8EjSqVv7UTtuEWBYrSYzoHiLCb6ufwC6v8pULKfHymYMZw9DbQ5Zwe4Z4QTWd7",
  "key24": "PJuB9V6uGE8GVxiQtV1sD4wnMRGXcc2M6e4LgRvxPGZxUenceYHtF6YpA2dRh7cS73E7xFV3qeF1YHkzp9fb8t3",
  "key25": "fbLowNKbkUkcSH5iKrtfRKenH22RNubtv7eKLTW9m3aQ7MzD2aEiuisfvHmLRX7SzJqvwe3FAeMS19XaMSzBZ7G",
  "key26": "2wdY5Ty7YGe7jCJeUSKoNinTSYyDdLd2ETqJD8ZTYf6auKLDX7pSkQVhoAztr8xJgph9pmdcHvNucXfkHunbpQVu",
  "key27": "2gkLXKP8AmBnhhEBt2CWmqBUFmNzFnpgipry5T6intzHHU1uLmmaSmJ4c8nWp864RZgmnjK4aqvrfWGdne99b1Xy",
  "key28": "XKDhWp15fLpzfKm18pi2f77xuLB1qATJ2p9UwUtKT29YsvZjfSBkfELj3tzgFs7nPwxuQhbyjGTNNu7QSJ7pJfj",
  "key29": "mgugNkQE7cX5mjxGzDik2kHVvkhnSPKyvckPptv3w6xpecWyZ1GJHS43QdC83pqkScJk7XpJ7XKFHGr6NDzdCBh",
  "key30": "FRbwHoZvHT11Wbgzi7ggap1aJr7eae6NLTpfQxp1asK4DnYYmNsEfMR48iskXnEYoREnSFC61G2rgURLXqWMVNr",
  "key31": "o6Es15ndGMumfe9tPvXmmf6hZ37LmU22jZttVvJ5AN4rvDkiW6vSW7PgKgLvgCfAxm1svD2HE6qqR8DnuGHMbUe",
  "key32": "qGTSFFPVTMDf1H7apJ6K8xTziir8ukLzinuUVSpEdGEh9NWdQyvwF6h4LQzjGUVK5ncWecLDZkPE8bj8yrJLNEi",
  "key33": "2KFp1CKnbdiBnPMvrpGQ6NT3cpWRZMR79tiYVMhidv5oEzNrMKZSEhYFhSXvSdfq6SWcu6kF6We5ePFiZgE5iq8D",
  "key34": "5qDc6KKet8xCjWqWftMkTvu1CCBAEBdfYB45KMZWzPW75vwmbMgh1mQ7mC17uEeHBjeHSF3geFQpcLydVxqoeeqw",
  "key35": "3W2CaMwqMP17mXAxVCfBYTUBTn95xvfT8oPCZkQnSWhFQFiKx3NSveta74M1w7imRB7hdSCaZoq8KSPbNEgBNHpL"
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
