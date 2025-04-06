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
    "2gW3YcmQw2v9xfn1NhdgumSAxd6c3jF2xZvbqdoVzWRo44doa4u3NMeTLQUZjN2QbY13ybd5mDhGjCAdsLiuxPKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "512DkzTxRwqUkaMYbfK8nZobidBjbaXWuBjbdjVcDaN5XjXryLp3soCoLZPMYKfF4Va2uz12PENdsviTZCqqJYbE",
  "key1": "5dTzVKryJTA1df86eKPuSxfQZpfdB9zkZNMTj4wjXWi76udrQReDdDx4RNVRnACE68f3SNZZyTjcnVhnLHsPxLgo",
  "key2": "uRSk6j9bVKiNAG6fqfRSFHB7csgq38SpqgHj2GLJRw1iLa8w5RGtSvrELNSmLewyBar8adXPpiK3BYHRC2tJPdR",
  "key3": "5n5VrZQn1yB5XrumuUoPF6fDD8fAiFSt6bbR75dBiLAkYa88yvVpspGJWr4Rk8qFj6LaG5bF5PWNDtGHybCn3msg",
  "key4": "3h3ZoC3FitSgQmEzXaGjsE69WZ7AqvGgAbAydfyBF9oV6fS9NgNatWgXHUrxVA6FsPVY2vCGgMDpg7CgtoR7aWPQ",
  "key5": "3gU7btDisgqhnC9oaX38afj83KJQsnZFi2T5BKLoaSP1hWFKtrH9YbEkAPcyyTnLAzfhgJsd6U1JjqbDXbVCgRd1",
  "key6": "5M5Vnq2M55mDKwLLSq8ESPbhjBjK8ZkCHxSotcvgH1NqjFTFm4ZbN5q6mwygdW7gJjaEzoXk6YVTx42h244oxtSZ",
  "key7": "4dHX7iBCUcwHqZgQSToKEiYqvpD4DJ7pGBCMh5H1Qj2F5YgdZXXxJHtT6jh2PeNHKB29fXTt2yQL9GVjNYR5Rqsr",
  "key8": "5muAVnbuZWbaBny6BrKE6x5uWb3khBEMTev8i7tieJgyvvvP1sBbwVKUXscU6MR3TjjHENYFsvkruCB6qs6neyQ4",
  "key9": "64Nu6i1Yznh26ZvYYpjgL1mifQeSHviRvLmjrCZMJ18MRQkdVcb1mgXxihCaw2wgiW7Mz2rtyrz86FSvA91afBaT",
  "key10": "uv4JkmqyXp5UfSpTwEoGo3zrdTnCgew6RxZJkVSAtMebMWo39NsCKzdATJR72Y6Y1uSPBMGfojpNdX5oy3nn5r8",
  "key11": "4fP4JqZWgBRoLj47yHfLThhJfoLBgJCV81MrLmYh6LER3UHoRrdKL6Lattf6t9fkU31eb6c1zAwPHXX1KuxXDKhf",
  "key12": "4dzCicsYUFF1mY3cHHv7weNtAxk2A7mK6W6PhnCbY6wGxH6sngKA6t5tEKQ4aV3vuvGvrfH6PHsvdN8a7kd33Cq4",
  "key13": "4xo2uTNkTh44rdryV7SoCuSjKYLVvnr9skPHBFAjuujHDdYbaUouXVYj6qsjwVv55VUizAYVtybstBV7gcCZW92A",
  "key14": "3ZYMmaAUdNN5CMUvUUsXCRiixVG4FCGJ6oiBD4grhbUPC25juyMVvDxaRsGhWbpiXn2zj64uCseMmdxCdPasrdzb",
  "key15": "ffFN4pa6VKhsSWhaAULQ9QaARCkiH8RRZreBHYtSCpfs7DqHW78nWzutz845SofLfLPtCyhVA82LyNM8V2bxoit",
  "key16": "2XoC7hpPfyfuEVvDSuYhbk3amC75yyZvrGHhLVHJFCQTf6rWZmznJZV2BWdacoJmVaxGqYNDW8M3A1VbQiYSkxTv",
  "key17": "3puzeDnSeCAFWBGeuh9MTc2BkT58BmGPob7QzS6kbaEYrJN9LeKFDwpF3Q5C23i7TGz8e3WXNtXwe2NSNavFmjFi",
  "key18": "2ojRSJk3HWgKhEyPWrnVZFyU5Fnwrovj81XHSsfrSRRjGwCbu1pqWK6X97VEpprv3ATSDRyKAqKa9xepCgjbCZDd",
  "key19": "2St7WjHLv2NvcFRAksVSVbRb7MnQRbBsRhgA682CWAYFumgtXoKpYaQaq9pzBbGugwKZSu6yfNZcxqDrYkHMhjiX",
  "key20": "MwTpjYvJZ3j79GxA51vErydAfwa4815fSoPjsfs99mSvBfi5eVzUyPWYCLLDHraeZ5q5L4zFGL7SjJc1Sg3z2tw",
  "key21": "39v76zAkNiPdMGzNb1Snm3ckMKyzUc2DBoMqqqt7tAj6UG4zqDr2n6KQTmfMMCq3joxGfTYS2fV6oY11stKeeAZo",
  "key22": "4HZXZm9eR23k1adM7BzoUkq87mdp9dagh4krZ2wZ8E8citH9G6hBE2rvWceaZsqPMKLT9fq6hAtfGUAB15yzhrCY",
  "key23": "72KQbEXTNpWwVwBiemTh7RE79Er8jyRxkxAehBwcVdj9kDvGU2G4szmg7CtvukiW3tigTaFcDut55eiHJu1Vi8S",
  "key24": "3aJ8LC9BmAyMvNyMpbtaLnDt3Fks9EzTr75KvYJFrf9APDdZfYoQz783UVQ6N3Wy5pM6Z1Na7QBKsAsUgw2sM6Uw",
  "key25": "3GsAMmmdZ7noAm9jK2zMzeRNL83tFckJGHARLcgECmoqHK93ugqKBFmzSrt7Pd2JLX4GRK4iBdzJQrDYCvUMqTDd",
  "key26": "5uzTb6V9Gor3kNXP2Uw9MjAknbfWxcAV8jhBNLtUeDaaQ2n4ZqK1eF6mShZ1fgdzRq9iftyd1CcEQMrKJvggjJrp",
  "key27": "5TmoX6SypuGr7xb8ssCzdCHXG9nGsiAK4mFWQZ7JigpH7vBreYxReAw6aNx9soAcerwWJGdBhesqAUkX2Gv9gJnp",
  "key28": "23f9DvsgU4gYmDB4v45mVEi2628cQEyMf68eUY3U6KCEFVZuuAtGLThKcz1KGXRXSevPM9AjrjsgkVWZCPD4pk2u",
  "key29": "78MeThhjdc5oHhgjNpqCnT6wEuerQhESdGpwFqDGStnMqN8FJKZEcHkfBPqcbbrW5uVLm2T4jxuZQ1BChwLZ9nm",
  "key30": "5fh2wVotoNj3J2aN2oN9KcPNtq8cetMuxK2eNkjChk5dH7UYYRrsWw9BK6sCqqgQUU2FoRdffwAL8jrewkcSgxNW",
  "key31": "3Q7nVnUsXRUjMRwj9Jn74k9hKoSYb5QZhgTwg2RhcVWgfvwxfBsXgqFRLWkGYc6XHBWqjnpBDrCsywBPxBexciSE",
  "key32": "3BUn9wNoPz52mRJjwtQiXex54x58VVw9YwAr1naBvDkcUkvWFHYmpF8YjfLMbgyqkaeNZLDXRgv39Pif9FjBDemy",
  "key33": "4N1QoHwB6UC3F8R5fTGoyWjnAQveN22bucDPz9DEJtq73Zg2pWX5BGpTw2q8wVkS9rT2gMVPG8oVqrbDJMYdDzxF",
  "key34": "3c13MJvhn1nPYUtgkTe4Knk7zsUVc2aCkBE3ixMe88rajPntNr1WTzcpkssjvKUHSA8AQMKUcS2VoGVHE11eiWtV",
  "key35": "ot9gxC6onpoRtUsitA16yUv9qkvJXQcBtNjzsmApf1Au8JLoiQDfd1Wkx1aLo4PpnbdTk6AD4SrBmSZEiqdeH7L"
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
