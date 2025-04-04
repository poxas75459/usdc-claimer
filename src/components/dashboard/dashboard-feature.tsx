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
    "BgS2KcmWxtfKRHPT9Qa3iaC7e9uWVPGyXxnJmmiyHRH2hik3iKjTAisuZSJS1oyZV6PqehzSuSUpX8QCycT4562"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E7V4QXwxDUhoneqJkZSA7GV6sfzHuiEYKdfYCE17cMdS5xonTLAHHJYam8qhNX9MYahdTm83aLav7H82mCu12sT",
  "key1": "4ohrSwefQ4Bteysnz8m6ZkThk6kbc96YThwnGtuCZCQcRE3yiqu7CiW74q9uzNLdkQh15vum575ybNDSPR9qdkek",
  "key2": "2vJ1yxpQRtYQ9zDUZNdJjjb1zPAt6WnnCdctgL6iud27ScCnYpFaZWGVDJ6KpLTS5qHYBGbhnhujPHPBL1AqAvyS",
  "key3": "284Z8uszspNm97cEeS4w3dVaWfdGm8h9PbhJqSTkQZzN3Y4yuSwQJ26cDzh1mRABwBZfgS5JdwQN2UApYhJSuLfB",
  "key4": "5RzpQLexMp2A9PRfPXzV5CK9uRyLLBrFrMPxYTYaxsWZqUB2D28hwTz8Z8aHw7ft8fNi5foquWyeioDfpmPo4jez",
  "key5": "YXu8dtG1vJGHqbyz7BvAqD398AMTN51DEg7YGUpFHfLBiqKUVq1QFgZRX2UBRphMXQh5kd1KJKrLmkUht5LuESF",
  "key6": "4735MTmPTHFHGTHtyzhPn8xiP8piWKcG2BxwtaJa9n97eEapDMeAtdnQhGbFoUsLbofjePEPSWKv8B78TtRhFtQ6",
  "key7": "5ZmaHgVkGhtXcdUzRqrMqQy3b9g5DdiArDwEybabYVwn8e2k59VckEk6jYDe7vpUpoLotoMpWsNoy8Ra9Zbt2x18",
  "key8": "33n6EQfSddjZWnHvcs8LYKMMk5avbQAoo9Dp7RDo5B2b5vR4ctpbvSN7n4G5DsS66DaypbYTGkcNR9Xyt3rJgG9W",
  "key9": "3N4Sxe9QzUoeSUqAdYLu5zhi7zw5eyQRpsRT2oPjHZPGPS8HbsAeZSsD5wZmKeDNKeyvU4zHeQNufRwZrGUDCE2M",
  "key10": "76Mh1RusL4mxhbRdrVpZDTLnuyNKRNTh2bwaVJhwhvtuXyDMM5qH4jK3cnGdJgXzCxiQgzbFvNRGTMsJZ3FUeoE",
  "key11": "2mgob5HpQSoQeCb6wwTPSQNKg6emDWyZ8YC2Eo1tyjZfCciNC4kdm3m7ddU3PsUUihFbenkXeWAk5o56syx7eWDR",
  "key12": "XnHiRj3Rta6zxLSaZxu16LP9jbVJS2hKoJvrvfoVy88PCfsMizSJzjBDNwHDhJRNMY1CEobPwWqkAWfaZtUuDbL",
  "key13": "2mkVXoQzdFCSDFVKZcYdd8agai3ckkydNRvjGN5yRX1WtSMagaAuWHfAJnBf42LeeaSJzmrhZr8B1VytCJCNU5x5",
  "key14": "5NGwfNGicRnci6bcXnXqS8df9HZxiEteuvjugFEnEW35pzaQidwVpngKAMTCyurEttwp9vLNf42dDZSm41L4Dctt",
  "key15": "5DSVGQNgqajpkoVG9fDNhYKfHdxA9v9h8CsRUtM5DjyZf9Ye414PgzSEW598aQpL1wuDnuzYoH5K3Qwcrt14Fkwa",
  "key16": "4ai2BgtgjEWBMCpTue3nDp7TknSRLRFk2aGJP1bgnaL4bQXT44aq1PnFefuuZfQqn8NiCqoibULz5vTDHNgc5h1M",
  "key17": "4cs55iJwbFM93bYoCAH56VMYo9PTgeM21cj5hY5JTJgbsK5wHNgoBRp7Ymim9MHV6FGy5VodseFxab4cYgcXXzWw",
  "key18": "4q5AgQQjrpSg36tLCBFHcLq3We5PFLw5gs6qtXgr8j9AaUEJvVqj7BXQPYXsApZcv58Ycv5sXNPZfpCP1VajABUY",
  "key19": "21WB1KefHk8FFZK4uifpogSuMS2uVHLY28Ec74PffNDfMPTuVhGGe3wqK1XPg2EL6u38fk4942YzkjKqFPxWBGth",
  "key20": "2QuLKjfZ2ovYChkBaQ8K5KHvZuKFFhm7VCqkXrP5qL6wS6NbQjsg1rGbFWmqczFc3vAHf1DnhSzHriFbbdBb46tq",
  "key21": "3n5SSdnn4FbxJDUzMKnBenrnqPfDtngqcCNb733YFBmvnky6axkKvFEtVyEYVBfNafNVzYYwXPMR9FyU3huAyUJF",
  "key22": "31HwjgXJdgZYPoXGMoiMhMdJ2zgEzqDTqn91rJU1TZAzWAGkU8xkeMwZi1XiHe1kmy3RpBzUTPLHmJRfiPdwZi89",
  "key23": "rFmPAPWB9oU61XVwYBZHL3cS1zZWshA6aPqcKywJ4ihgxshjkFqrWLPkePLw3GoMumr2qSkJ6LF8Bdk65TuaAJA",
  "key24": "52UYaXaFQysSPY9vdqMBVWtZVuNot3GUAZ8k8Wz42bfsjXaNEySdMkLMLN3f4orzTzMbzJaDNUeseBBBc3xvtiyx",
  "key25": "5Xpm92NQhN7Y5agKN99xK8YSR1R5zjCSCYDjpduJ8WHo6ekk89bNCHPSeAzghqSWn72N4NFiaHYWQGkA952Uyy8Z",
  "key26": "52aY274SjqGA8JtvJsHyM5W4RLzzSMMHm4p1SbeY6zV17Gf93bbo7LGr9hrkDtBELndaVH7yDpDDU9RhN7PzYmtv",
  "key27": "2dNxpqfUpD3bDHzg8ZTmh4m7CHpmyZQhYGmftxoV4teZvEgh1Cy2oV44fcUNdVZzTLN2Xc5vX1zreYstyLs42BmX",
  "key28": "WotKtSnQ4uUwHetHdHyT37XNmB6R57woRNYcqeCxBY9pWAomoDQqRnEFus6umu234CoWxWwFUQ1SrtpmmAZhXot",
  "key29": "2ztn3q3XW6r2gxmwTPAApc3pn5DfHA1XHd1oHSs6c2y5bN4mKjcxeb9byqEg9qRsJ8LURVoouwJTkn9HTQMQxDr8",
  "key30": "5ims6JMREZZ2kB5dfWC9uhhWu2UwSKQgjXLmQTvFP4pLFB36uj9HcKwHhiaocK1m3vRfbs339QJ1XzUfR5H6ugWs",
  "key31": "48cGXxtMPPgRwrh7Nu5YQoAtBVM4fzimM3Z5fVnfMfghsBmJk5bMws2XmHKsZTMReywY4DP4ZvYQ9QnmPaREcc9q",
  "key32": "HaEjEozwXid3SGKbmgPBnZYiiYiiuN8V7fjUWRA2mJRNYG7Mafw7AnyN9VWUMLcuXgL6shdxRFBCV8yQai6XJkf",
  "key33": "4YVye9ZvhD17Hgvcs7b7M9cuFUa3gPUsGhNeh691M25Lkm71KqV5HwBcwdj8ii8Kw2Gg71ZAfZqcSYvz211gq2Ga",
  "key34": "JL8y597LyaM2aiScTc8JsaVtDRva27SKjqzpBZXkTdpEtWMuk5g8ooSG56gtqm8uKrvTr728fM8dGio9Z8jR3wX",
  "key35": "36qESzykj6SbosyX1JzkGtMXrh8KmzH5k8uq2BG7jacVTK634UcznxTEMdX7hxir5BAt7jbAuPvByVcKukb3HmVA",
  "key36": "2NZoAMnnc3TYXgKGCddBL9ANYpevri5BN9xZcywufVEzeCWt8zhemcdppYL2Gti3uYnsS2e6K9Fz73tk6uUYPf2L",
  "key37": "5rrdik3JvJtoLK5E6zHqgd3unP6huWdt1o9XPc1cnX8mGq6pHoRQwVDKRc1156UDTqWzHW5aCDHm4NTR5B8t2uCg",
  "key38": "3kgec4R8a8FLfp5eYZdLFBgq63TtoDoGfUvUawPYRwS7kGUewwWiaNve67GqMEddq2PPKaW1ZpMUfovT7qvsc6jH",
  "key39": "whhiaHjienq9SxDtSh11fxQCC3A8c1iRfRphuzmWo9hxMwxKX3SZkyQyfB8ijVaPZZe6sSyEkDdbRk5vnsR23g1",
  "key40": "3HDakBcYJ7xBHAizB4DDMXU9dQxHjE6NW1vtXCm6oPLkf25VWYyfqN8WGmeMvFo12u6EXYRs1FMTjmd4te5KjnHW",
  "key41": "3gsa2Fwdwa9mDukn34RU3Z6wxZMf1MYUbzUW1iQKcBuexbuzLG1EbvrUVguo7hNJHt1mpYiSdc7hpZ992F55nSim",
  "key42": "47EohwFAmtJ4sqBzoW6miTZHt2mrmwDqFcbYwyUHcyAsrnvBGSM1eJjfmwWcMCnw6g5HCU3rhnfQbiB38hqD1BBJ",
  "key43": "52h39PhUZ6iaJEcpPWd2ADSHxTiuf7Rm55a4tdjivqk9C3ZRK7XFd29rk3GzuiaJ1Mu4ba2CA8A4gszj4ZLBufUt"
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
