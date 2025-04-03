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
    "5XmYgNWpM9Km1vMooH7pnFL2hK4WqN133Tm6gXUdJ3YqEtrs9jT87CPCTQaqeS2JpDw4ksB4mk3W72JShBY38Q1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2euAo224hXcBw23chC5W6PBBqmRercAB1bNWQSu5PJm6yT8M3FZa663TdUuBnSZzsJcFAam4cZ3oWbnuTUX8aBBZ",
  "key1": "yV7hSEJxvDdpVfyBrddhaCXC7Weq1xutaeefArXKDJuaFukpmM121xMokavkCbUFZByw4u3jaECrCCxarULSu5a",
  "key2": "JLvgamURnBT2gQKLni6eP3UntfAPCvF9Ym3ZHjRGAJzLfPJWfkrduD2sqDyEhw212PadzVzyDeavCAp8WBDsUQ2",
  "key3": "5M3sSVLviJGxqcPPVtGLq5QPrEucYR4HiMWrVmx2pHLYZGSDkLAAXtzmJzHNXGiq42JocawgASEr1RrPzsDy5KTc",
  "key4": "65LW2eby1Ry4Pun7Fw4fcudBBhWkYqD9hd7HRSdFbKHVgpLhbRBH3eXLGCLdGN1QT5Uy7fwpnJ7eiDxiEtYapbcf",
  "key5": "2fnEa5x6zCbU2nsrgMkiUeuKz7gM1zx3Ts9chDweHprPooZZz3bkN9eYYgNJfAzfmEk3nh51Pbw3FnEsxdWorkVP",
  "key6": "5midvGQiDKfWYNbtcyhmeoC1CwyqmZz6B5o8E8sPfyEo9a6WDm48KSrBAoi4hLzAzQ35bEEj6ksa4Cwyv6BFH4JX",
  "key7": "2ab8JP5EjLaJ5bubLHXbksYNCghAvbNU2noW4nCE8ftDmthG4h118GuCYxkn5DEZ2uXc9hGFwx6AHc37VjE6XoHT",
  "key8": "5CEEC7zHnue5hWcrnmdFud4X9yTqP8zo7paGW9AaGJMbBZDYDSrgSkpqzHieu1C7PTg7mG6xaF7C9pjFaRLZ4v4Y",
  "key9": "3FiggLqp7vxPFUnJTvQUUPdDhjo5CjQADcsxQMSDxKpQtv5WU8Xuw47q3BtRQSS7VXD7FUUQGiVBsNnUS3NaDuMZ",
  "key10": "3HpRMp3HfSnmkh8t3zxLUyQzBKW5wBY8HaS4vyDNUi9x326sZU42gjiKGq1ubjGAVPZnFgs7D1hm3y6xbVEFJCVU",
  "key11": "41jK4awSD2Ft9Lmxg9cWgK9KnoJUtvLHkDrp8VCdMkGzfHh4o32mxiznYR1XNcrfxCLhgK6DAsbgs5zdDDe1Sd6v",
  "key12": "5JurJPTqf1MwSXZeUEMUxxpMckhDrmsscq6eNZfdnoKsyEm3S5doSza9EJToxQzqyQ3d9iDBnaPQvd1ZiNQD8brS",
  "key13": "58YbYhkcKXQMQJQ76qnwzcVLHUQFskZrHCFmevfnhLpMfYoYt14w71oTeS5QZs87oHa6m94gaT27F4cm44QsmfEe",
  "key14": "5SfFLJ9ndvKob3YRotX59zBdzy2dHeWZ6kbjK5CN4xXS2DyUvR2TkAfyPVKMMgUUjXAitAz32HkuABD899Dv248E",
  "key15": "3JNxzXBVFuF2U2Ddw4sorFDJb8yzDW3oPr7gvrUaYveLWXCAzFTqgowYMMrA6Hp8SypMMpvGhPfdNWtiFZGcJStQ",
  "key16": "458wjGkGyqAVWwBKhzcpb9bBSBEx3XgFW2iow1W2zuvtERwNzkbrPL41im4QQ7Upo2i7AHh2Ac52LpsHGXjWyAJx",
  "key17": "668nLaw83gbnMdkmUHeyGMyRybYPviow13x9kW56GeThpgoYcwUMBcFYSdkrcG4RhfNTdiRgoYo4aLE7DMEzfpbL",
  "key18": "534u4aLitkirnCu1hcstXkLecJVZrSSF1YCw6qAP1uQcEC3uBpKQ3BAzMH28zHThNn8WgVWydbeEijJEQKt1tdgr",
  "key19": "628PqvvJ8U4nrwapJwygywd4atvGsUDKYpkWHS8qB9guWVJ7SrUyd8WXMnZdPuSMCxDJax5wZ6FCBy7VhFbw18RL",
  "key20": "4RJAoBn4ouV45q7s631VE8dtPQEvxVfMLStfsxxQ6jTEMM7HNqK6Bvc61bPQp4inzMcaABN2wq1JKaV3LKwu7CjX",
  "key21": "4cAHCVJE7TdQqXDVPmVdbKMkaZ79p4Z8K14v3fCH8aCrp9xXzVmZYyWdvVvhzgVLo7aV9N8kGwSCSYJdBAQvwmEq",
  "key22": "2dG4LYLtVWnXMgPzWzUZp8yvC9treY3PUq2wrKrMpwJpvtjPBqEpqyrzgHBW4tah2xMcZNxTeu8rMQ72QmNqLY3q",
  "key23": "4Kj25cMPQ5474sGKmMobURtX5p4NeLMpH5T8ynLB2M9rMKofGqo45WvZQ2N8cNTeD1XoJDEDLfzW9MAEzcvZ7WHP",
  "key24": "1UWcqpkcQdm9pyjLmXLPhEsq7GXiBe9UiuuYGUJ15x3n6ZmeF2HXED2MKQRaW3XateZuLoojvQKQbUcTKycWfcW",
  "key25": "3Sq7fMkWbDK4dJjj474fA9B9d4NkwTw2ffYE6cVUa9DaJKrJCzSPxvksWctAsrKyQ65vgwZjw3Q2G2xACGdox3Yr",
  "key26": "4JJyEMx1mFxewL7ara1FHzzMrWrJnqMZ3ZwtUzikacnJk45sk5a3uvLsvnmwaoxgL6nHKmAVUCGB2r53AYWzvtEW",
  "key27": "5UNTp2WVwKprUs5bA4Gn11qah3JHQENGu8oGZbwvy53KuWtVhahoSUBNThJCAzrUujKeudBUmje4j5oLMcFprbQ9",
  "key28": "5ZnXTfXXGTG8ZZEQSwXcw4hAMM5kHsyYPEyQxoLGkBRmuqTYyy8TFPtmD8wpMzjoqd4WEJ7fquB4C26LVe3Guteb",
  "key29": "5uEzB3tHvZeZSvm9VDBvzV1jtXXm4S1JfnDaxHrs2FbyEdEq7nRKdmST6rUVJYq6PBqWmY9HsBrCye1UiFjFsW7V",
  "key30": "5tfgQqJ4mE9X2uk2NeNGU4GEBbQTaV1CuhRvUVSyN8XmKF4kVaQYXmGmu6SAX3YTy2eWZfkgNvwu6RUqTaYcZx7X",
  "key31": "4k3whUmGe1AsT5f8BmFr75fwPgYwbUtwcDNin4uq1PChKCKoV5mxsZRG74zzhjcA2bHD9PWPvgZTiY168mMEf7ho",
  "key32": "xhRs4gZJNdskGZAz9bZcMaNm713a4gjVT5BgTHTtTia8qHKBP4asa5jVTQd1raFtUwPHcNTQ7hSS6ihzeBYnN1P",
  "key33": "4N44xRvBk1ngTSgv77CLbajPQj1DHeoGGmBdcq82oeHqEvMhi2BPCCE6ju5KyPDeBDrCMM3o3v6EHhZjLvungcFN",
  "key34": "4mSCFTNRcaqeghrwTHK8ErCjoL8UpY1g6UJAX2z49wH76ZvduAT36XugyazhfDQVYsZDDC89vSaERaNe5oi8sxgV",
  "key35": "2DuKpys2byHyJcXFvFn9HZm3CnvMYhCLSdW9uExwZmHEhsuCM2yrZYFopXJc9UaJAZEjSfJboBTEqZ6zMggqDqLj",
  "key36": "5hH2ri4AkAVqAi11USLWQYhLfefhKwxsEoiBmdkM82hYi7a2WvB39QKRT3n1gR7iZfZbSyxKSixTHZD7F3pxNjbV",
  "key37": "4ezoPBoxCrEcYzrJ1DR98xYFLvKioQPg3d1tvr6GUxceraLVbt83T6Xki4mkU7MoZdcfUJ6XzEhca7HTFUPcf54J",
  "key38": "2opvEyb9RnaprHaLuhytBCuZrwY8mvkeSbWBxqfsx88r7AFMzqoZQmQ4ePNHyNbvgpP7GFQJg2rrJPxJL7fZMtB8",
  "key39": "2qhcCjdg81QEPKDQCZKudhRiXkHXa39XnfFLn72UBDEjGjPK2hCTGBcfkxguARqEzxySChP9hiJoEKHayAEypZsm"
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
