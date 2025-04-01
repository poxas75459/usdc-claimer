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
    "4kmM4V1nikJHh6sFWxDo3unWy4TgagERC46T8nPmAWMotssgugMA9qubKPjXJe7vTe82qSK8j5fiZcYRZ5DaoYZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iXHZs3Z46vwCnuT6YwMCWEtwd5AULf5dSpGrtJZeWw7uZK7c9tteSUK2Qs24bMdouAc1HmbBZ9drEbEmRgpFaQE",
  "key1": "4fYYgpvaVrC4AGqksBkoEKEYsHP8bjCnSZg3m1L6Fw7GYjfdZPZwciCSuhg3b29u6QT3vXLZvD8cHa7kW1vLcbD1",
  "key2": "gWoYpvCArnwtXxG88aP6i9L7axteP2wsNiRKniQHSno13mmVJCVDEs95rSrwSjFsxXERLzYKbXoe7sYgDSoPuSq",
  "key3": "3Wqnns7QDSSJRzkMVw2KXZmwuYYPxYeMsgy7DBXs3hiJcqN2e9JQc6uTrM92spPmFHwsRW1nKfZGXCNwUd8yNzTx",
  "key4": "LmsnEGdDtyE15xZx4aBWJYenxB1PrYpmHXDdUxoUFSXxqBJD1wDWXzmfyChLQ2JuDMBkxASutC5EFR2NJRMPF7r",
  "key5": "3KnaYvRFZD8U3TpQU4u6BD3PTK285y8fSM1sDtW4b4nYfo4EX17Lg4Aio5H9AyXoFMbrs6Tqxo5qRWpsYibgZRjw",
  "key6": "4cu6tmzciTXdPBNedQFVmmN4uf4b3erziw87SCqm3TTtKP119gsmiANsY7CzohcLGQoD9WZGfFr6WEMTYM98pv27",
  "key7": "2s3B2PpsNLU8neJTwYk9qnsTYajzPjaMmpvfeBMrEgCtw8QvRKDtKfvpcXLVsP6PsJjTPEDy8DTEBzixFGD1xY4U",
  "key8": "vyJx2w6U1xMQkJMAZxookP9cpf1EnCtHBnL9b68qAABHoJR8jARNyTFS2EfDgEqVKBuxAxquFHaai4Te3pFMdbM",
  "key9": "5WokrJMWHPkZQR1YRpkdhBSMLfPYEWnTK7BMMRZj84stjCSCenKgJ1cAf5ZQVqB7MVB3FthkaYhzB9NGx9bNLPKF",
  "key10": "4zywovHtCj8K5Voow9NHAvqETDsDVGhT7NVKXgiuPSwennk79gFKsUnefLSbabJm5g2mWvtVWV6Kb8HgXLhR5SeC",
  "key11": "4rzFhbLBznFnwTXWgNA3VmcuBzewEcPNER4ehXk5vRRbxrtRTsdpcRXdqubgmPuSKwEAqrrpfvdZXNnqNnKKjZ5R",
  "key12": "4MDXfFRdrEv2g9yqwnbw23iH4rykNCKmjGMjNUWdHRquiTzMn6qUd56vx1fUUtffyH5vSY7HdTuRWccKSLqfeoME",
  "key13": "3ggiYh9EN2tak3uRuZM1vmeErQDWGLdCYN4s1QrwEp4AUbiyEFtteAZrhMRyGxMjcDjCVJrdSvsbSApmWRwHFm7a",
  "key14": "2poyCRYZKeegni61H4i69sLCiE7RTFLkAy4VQqg4Y8GH8AT1pQpERiwi3Caz51UZDrGGrEGFW6QxvM41A3LHFXMx",
  "key15": "3ne6jDqEwVTEyWpP6g5NTWn3rR7z2hvBJfgVXUnp445aSVCTB9AQgyEymLLmX3Q1121NphGJyATHKaCPrDzNEujG",
  "key16": "3ht1tGmS8ZYXaH8LFyNLko3QMo8c5xBhbBhZmRtJS4iVhakBcxwmyqhkMpXGtoKn79HciUL1nyTAKXcWSKaAwBo9",
  "key17": "2aMVWR8u3vNvVFk8K9YyiAGo28ZuMXUZHZU8Li68VDcAJp8mqHzHDsTzgxKAuhTGxrsLjKTKehYiWBy3LXv4cX5t",
  "key18": "nqMciYNnhvjWnPhHAKTvek6GgASeuTNQaY3Pcy7nYeFZ1sRhEeiTWB885XRwDTC5fqz6W5uqpfHpQbcPXkq7K3t",
  "key19": "21fDuJ6CqGn9MfFHiVbVVawSFVT5aCTbmgPb8o2LiqsCnUG6EdZ6VnU7RUoUEtVqHVwTDMDwnBCAndzWqhcAozFk",
  "key20": "u4AXjWNfU5WncGj1HD2msfhBNu6du8V9Jpho7fiuXUUdbMPr5zWHm5QmyjgLGyHmNpstv3wAsy5dWwdKegmJfnP",
  "key21": "4DUUnwMYut3j1hdYNYKsD2GN9YjLW6sVNBPzertJ58zMRDT1yH5esbMiopekAL3rDVUxjVhZb47VBtbNfkyAi7jw",
  "key22": "3qHwbqT5KbAiAdAc8bSBQUoXc9xLwGwzWM9NJRRnLcpUWXvuYjxJCSXNxSN6dAYaASRAaH6oVxa32kTextEKmpAw",
  "key23": "2Weydk5Z7hJULvvwaADQr977kN4FQA8CuL5YGRFkDcVwNkfZcAEg8dEuHMGy8qHyWiu7n2BcAZj84QWBQhoEWejU",
  "key24": "3J5BLnxF8iyeXN712vW6faX3oUjFSUd7GcSJyxibiB9JuZsa34aygPHKYcWXhovUfGX8SkYy9UPcuPAtgX2pG8qh",
  "key25": "XWTj7tc4Jhje4dwzKpwXCKbnxEyB4PhV3Zrwawi4aCZE94LmhRt2i5DNQMEAjfMe5gP8LYWZ8tdMgfrJ3UzrZQB",
  "key26": "3JqLLLiX2punja8D7RvWDVELsa8mnNJ86ANRkvfydGtoyv5UZCr2aDoyqV71gBwWPuSkXq8T5zm1Y3SZjyLcrNBM",
  "key27": "3MbLQpAHGaUgvjCBzjrestWivxU7cUQXzrwjPiccvN4JYs4WdZGza7UEkvXry9HyBiY5pP14rF88k3iqzfXo7i6d",
  "key28": "3EQVdoCrUemCTz4ryNzncwFHrVynASxAJEKnWbvz2UbxwjkrE2EmQbf9SRjAme5d3hsb2u9WwyXhTNpUQdLaTC8b",
  "key29": "5io3PywSEAX3WF7JtBX24gvHvFKmutoh16cy7mYhKXBSDUksyG6DjrmMdryVnt6GYgQGFLQ2dbrBX3crnKEZaQGT",
  "key30": "2cr8v1kX8oP6o1ZHbMbwnDm7VzVxA4oyZcTYpbKBYSC8v5WMtptDHQMb4hdFj3y8Cg5ikTpE5HQtCrtmHb3caUci",
  "key31": "38ED7rxDx1WrwWVNWqZHPQYhaYq5ENrsfCqPwkzhx1FeAqi2PMyjj8ENdi6eqr52ELrNHbL5amthDXSFEfZLSVCj",
  "key32": "2ww63ZD8SRUpuc3eTFAUDgkVZuGbgNr7XcDHqu96PQw9Q1wW34c7YQtuND4ZbojSpDHbyWHGEAHESec78jrkARgW",
  "key33": "5KcNZrr5G7QHQjAJ47p7Z4qMitQKbu9UAeiiJDzjTzELwguD2674PPtr3PqL74LdW5RHvMgNcQ5RWQqFkCGfvqE5",
  "key34": "2FJSECavFmX7H8JQQKuUjQe4QQSqv49tYUjx2xrghxpt2RxeWsZeQDuVZb9JCeAR59QmtQceMvzPXyffMwds3usX",
  "key35": "2MQPUT8yfCAXU5tbYxCNcfXSQb7T3NbdNwLkrQkSJ9dHwyPgsEwLzH7ySkkGBNmYeDEULUKNaWGzANSbjcczdiwR",
  "key36": "29a6ywLGKNcDk8dVZNKDbYjGMgRVoAhNczyCiKGnn6mJ1ia7FUr36MJ2579bEV3jSLAK7jEwycZcek4nTzu95mLf",
  "key37": "e3m8yrBoVQtTPGT5K1Ra9aKyS6GH1opKTB12qADTjapMjFFkvQc1yjCkKkorRJHVhDfYVyYAfGm68c2QNdv3ZCd",
  "key38": "2jaiD7PNUS9VNF1CeXhoanLP9T5BKRoAxL3eePF6qwWWQUVK37NjGpfTF3nrCbfrRYDPnYT6VFQJn8gcTogpg81i",
  "key39": "2b8Ly9zzEcuorCDUGzS95h4izDwYqdxsweMb8V6PUmEx8VAgNUFYcZTzVj99jpBaZrBWfDMqiFvPkJhNwRRocG4D",
  "key40": "3U33ptsh4s4z9BbqDQ6ta6LvehJv4qVVyhRWyu7M3d5Hiu5iuNLVjQtio39Jwq4fKqj5YgjjBN21GmRW1XNgQ3sZ",
  "key41": "54h1xbNRFZbghLv6iQi6VTjFreTBxshwVZtPoo69R9mrTFUKH7u2RKjM5jkDFVy8SYZaExs2YPcxCGNZzPa16sJm",
  "key42": "PzSLJKpT2Ak5NHXhofAyzVUgPf4Z8pxHbctp2umHjdhJTxsNL5HZggZGRfszxCpkp5HC6SZDSxTXBhtWEhpmdqo",
  "key43": "3qhwv6t1K6JEC1AaDAcjU9QZ1V8A73z4Wd8ksHasyLTetYVwxj1X2p3tNtFNJWfo7kyjHH5U6ksxV2qZ7sGzxGZW",
  "key44": "DKMLcQMPWuzo5jUyHyyXXgXscoj2N2kr2EeRDkNMgQsJ3T2hzsiDUZUK1SFNZp59hqR8Pkao2nZib4eMPxeiAJU"
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
