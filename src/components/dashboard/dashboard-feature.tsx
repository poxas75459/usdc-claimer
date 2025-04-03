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
    "5TDugrSDTHZuN6FWNL8cFt7THWD5zXVv43Hbu4PJ6mYGydCLbrmosntSyW1krXDVxEgioASzv3KPqso7bSBPwjQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w9wTgSWLihK3qy8ZeP9PsGbXT4ZfQnH8VZWyhqLdDSJ7GGFYpEPK3FVqQxyGSVtgJVrkwgkrFdPScVj7n9V4Hub",
  "key1": "3rU4Eod52xZAHEWGWAZus6kt6Jc1G9GjnQ8n5SVSvLrPwVMs3mx7aroHcRVVpZhw1MwhcLY4V8bGLNXzMzUsvBnu",
  "key2": "5hFMn4wXHkFjANf1ErGScB33DMXfDi3DVo753cwiaZpEA3keWG2pe53Z97UohL5xFNve88YrphmoZSJkPPjCbVAK",
  "key3": "2MNhH4VBD5jzmXxYRWVapAiVye7KTBLFBn1a3WcWYgKNSnAVaW1cPatM9WAwrxG2iHzMmcbNLqQyRBqUjnARqice",
  "key4": "5arHwqUzqJp1nJqXRNwnYjco9o1KpTPmeP5FJCvRgv5AzknxeSUjVwWbFEdetyPUKV17CTRmpm7AqnsU3ZkoDu4k",
  "key5": "N9Nt2aekrZd14mzQ9kucfwQWbcqns8DhjRtZU86hecBn7qnSjH9QAZXmpkeDHjeYZ241rXvw2icwoW7q7hUJMCQ",
  "key6": "331V7pPtw6StWEwyXHqQ4agAUdS8vvwgciYhdfzB34Uq3ZqGaip66PtGPA3mnYKoG87fLLSPjH4DpPk9aRJ7QD9T",
  "key7": "27tZRNSwvEf9NzWbvGJfoFdzubwdiktrTBnH71FurCTHUJrv8em7rrxXKuS4qxWUDbmGjTtZbBxubBTZkda2kYmg",
  "key8": "3fJqLUrCTGnhvYR93tfNwxoHCePY7epeB7TNoUUQuKZ2agtqCDL3Prboqk2JZhqmG35ojtix2UCEzdmzgaHpH1AT",
  "key9": "4PgrNidZAhsmNhCT5R93ZQBCtdnX7gEaB1yxdkLZRmvFREzDAeTBRxki4ZPFgdkCn3EvUrhLZbGcBsRREn7r4iJv",
  "key10": "4Q1ieNmE6Khk4ZrkaZ6PEKff31qH3rbdK7PyFaMVRjbgyg5sEMsoj8Vo4Wbger7dFLhsSU7kw5vCuVBXCGoQuJhA",
  "key11": "5V8P9GnZBEztPcLufDe73ndA2bSCSXxBnMqT5u4vBtPGihBUbSwhW8pHyDnx2coSCP3iuZyN4R9FHfrnBJkLyEbp",
  "key12": "oCdg1RS7Jbf8cyUzZ1aKRY2MZqxB59r3a9b9u7jXBacouKh5GQTi5Cu5ksv4V4cXKdQTmwftW7muTdGEsFi3ox1",
  "key13": "MwL9Wnq5ffhPEugKseNfnJZSLcpJ7uFGDDAAzje3xa1eNKjWd6Pcps2X1TRETDgMTq9LV41TxSAfJ4MmkUmkiyk",
  "key14": "4PaT1Cx4pKrW6Rjmg8B59WeMtGiKnpBWhD5mCJpgDtjx9o2kgB8bFPLy4WqJPvqVRsR6xiJb3iW5yq8TYkWTQcxG",
  "key15": "4c8M7Gi2ZPig9WucdZzCSRnK5JfiNzNH4DXCQg39Sy9r9XvmzCcLnC1Eonx2AiWdstMYZih7b4Z4u4RAod1mk8KH",
  "key16": "Grrqt8GJtmcf6FfrYe9fjWbTJiCKVQAzBEkVdqq9Ahj5iuRkw8mJN5Xt53U9abrKqxTreXtQzn5g3f87Pmup3yU",
  "key17": "3T3zvb6xHkv6WcAD6Ec4vZsBMgYLAJ3Bk65yLZt576zcQwoGiqjvczpFprxFpru9qW9hrSFgC38jSzj2T9VhQwFH",
  "key18": "33k9fPCmWHYJzBg2TzXW9a59Q63yrsiQp1mbLXayqhAHUZPhe4WdFdMJJi5WPG2xuDzqvKAaWaHGvBGfiRqKEwur",
  "key19": "4Td1hzTfiHruXfki6yErGBA9bMhUDasHfid9KiV9HdUgaGLWacNRdsgQAvPQ8D3if8zpZUvFw1M3DMc6TnsWgHyM",
  "key20": "34t4zEKmnJcSUm6tySKT29JYzeyzarmvvDQE6P51sYGQ1oPMjgFJSo7zxfQ5oEniYJYFR8asTCF8Uf2FUWW3S2Ay",
  "key21": "5PMrTi4a5ev63nRFMgEPmAuYjHkWMwdFBreJvN5WnHx8U59xWDzHdWGPvCJrCbLqY1qSCXRXmpUTeVJr8nA34EEV",
  "key22": "6K8SD4oPiSVmMzFU6tmY8U7BiTDAL197UNzjzGaM1F63LGEgc94U6rHMLzum8QQBCQCyRikCj3Hriywc8xXzbdc",
  "key23": "Xc2CKWgc2BFGzSowjJUoMwmVoWogTrJNBYbtZa2L2XZyKzxoY4N5ZFW1YdN9VqJdjhVg7ZSeGbArFghFxuSnAJr",
  "key24": "5XG33u7h9PYyj5n9TCyiANgo81akkgeWVYWZrtRoiHJLLuQ47ZuGL1B3bss7dY9TN1kJdwBj5zb92wCbf5iH61vZ",
  "key25": "fRiEWnGcFXtHrQxGGRpGd2Gv2uE37RdrhabHTt4v6NCEkbUjrUQkrzPMxYBZwcHxZ7xtH3MmrEUgrcPx9PYdsXj",
  "key26": "45jSKZsXf6DU7w6WkDatgvbBvzaKfGnnFoon9M92r9Nf7UTahWh4vBTkJexthTa8KrVzRciLQMamCbfNjup5wcX3",
  "key27": "79tNycowRLwhMiPEZvG2TNFGgA5UrAQud4wos2GgjeYWcqAXkr9Ly5nnrsXTjtem2F3xK4YBL6vYLWxY84WLYtx",
  "key28": "26F2fPaFmR9LQySFaUJivoWmcpHfegzkewLqHyxQUv9aNt9qAoECdU7BZwZNov87aH24unmzzPkRAMwRwkU7fV3x",
  "key29": "2MT3wAWg9RatM6nX34uGUd9beN3SJFPZaCA5nvryboNtqBwuGR2phLNo36jQ7keq6hqUvM7HSPRMPghB16uhsquR",
  "key30": "4BMw5qBQkqr9cRH5YhNrQBFzHZtRytrh5dpntdQ3XWpD9mMaBVgdJRpzVBAF3Naaqis4j1FMmJQseqp875rPyNUK",
  "key31": "3kMhpmBeBwb2sdSyxGvWhwUxHjNiCh5QCvmWS7M8Qgv9KdXkBgnCXpDG4z2PwqEsQLeXeJDpb86WTubvmiHX7sac",
  "key32": "2URNeNBcE5Tqvy6ZWEQaLaXaa4N4jUAe6chuvHqQ93ueSEkP81C4NNa9XkMJVAc65d24K8gsZa63aH7M7WvwBNV2",
  "key33": "4WswS6y83Dn4sVQU3csWAMAkZWtvtaa8ryjAKu8TkMF9AAueCYAToYgm5CHiBtYDoKFkKX9nu6GQvQrrUnmXLCqV",
  "key34": "HWkFqwxqq31jZU9ZE1TEDZxv3nYBzVU4psqx96HRhRtgPxN8X8W9Lu7dFSAjxcA5vpCCei2LwMQvTgnnhhY7nrt",
  "key35": "Lnwdw2MQMKYvEzMfQqfJBVte2p5vocDvQfq9NocEx6Njf6SehCsht4eFcSduE53db8XBgLJrmGd6FxdejreUBqk",
  "key36": "XGVG1jittU8vo8ap8WLTDXMYq186caUf7MYForhKyqnuDhXVYoxppknYAsLukbEMwPnAP6iCs8jhx14c3TxgGAx",
  "key37": "5BJBP5hjngXAkgtoz8zR7kQ9uxqj4AUq1io6foS6wmXJkSmzzae5gq5YS2dhpyF3bAwwTc7CNAdTeQVuceKhSYcf",
  "key38": "uSUu4V417LYUeWUrCNbC1GLkxcme35Yx3wpdGqoxbDe7YbX8qdo5XYj4yUsJqKfSgp8SjWdeYV4ntABKRJVCUwq",
  "key39": "3tTgsqgfLbjb8UdscFmBT7nbTWabzBRybP6hV5pkEyK1rCuwG4Sh2vp9G8K9DYdGcMmBTdz6WDHfwAfBcyXu9EtQ",
  "key40": "4E51xxxnRfA1asXAQB1y8KsfrWmoznETyUiRh9NK7yPaXyJCwEL14Rnq7xJBuUSdM7Dfh8eJtdiYJWkLKtWZkGNg",
  "key41": "5EXMy6KCiNX5oGAGWneA8SvgmAY1CqGJ76mc2aDAe7pAmZm6u1YyZbQsW8WLBMuHL9jr176JG5hstDQogU8auvkL",
  "key42": "57BzoykovDGKNA91pdA735bScDeZbQbhqdRzSgJmZJppAANYdhJWj9ZkCVeW53dNNx8ebudqvebGF35wQoshJEbz"
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
