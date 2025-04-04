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
    "M7JVdfjDPvNjXgKvggaCW8NC6BHQ2eg47wcYM4ytKy32gKXHVqU375N2zwJGUr1KMK4eeuSYmnnmGDpTFVMJ81N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZMgYjvMA2fpGBN2gQBojeynyeXqPFTysLPUoxZAc28SL7htSLxGGRqsLPHTqCUd8EDvNKftnksbEjxxFt7cyswx",
  "key1": "Z743ohEJ6T3tj2F4LP6QtUuRr8Uomajhc3soU8Y16xDuTY4L8SwzdbxA4wBCy86rEy4UTePRHpD3sdFBATqE6dw",
  "key2": "455yE8pCFGvAQwveMM6ka6a5f3ks7KmPQaVqYWATMALtAifSXC7n1jcqoB2JCY1mJD2CHgNSruKpLpTZKzrLdHkM",
  "key3": "2MoKikkzDq27ZbksMavy9RCT5zgScF46Lkg82Q8UDZazbaZDLgpj3yxNXHEHoxx3ysvdu3YetfGhK6mhzA5Zu59S",
  "key4": "3mPbcqh5MvAXypDxyGXNCuAoYeYdCAvsYrpLNzJgmqFaPGbaasRonrFwf4BKZRdZHcXuyJ7jgFSR3ByE1iyfJ9hc",
  "key5": "61PXJ5rro2MDJHBLFKWhFHGH9CT6iTVMF5NMiduh37KeHm4bNJpBK1NgpjebzzfcFFXAmeSDb8Key2uVXsmu2YBD",
  "key6": "43JG6jWSqLJejYDPx9Dh9Jyv6btsXBgWEAaA3UP7Gf695eDeJoCDKXyRzcRqkFj7jQz3vtYH5Fu9y6NFL2sJvHKb",
  "key7": "UqmYxoRZkhcAHT81giHJAycfQzwXzT9SdmPbgRf6UmWdgGsdKc8Ep67t9sUUjr1Udv9D9xcsT5zxBTr3T1AYiFw",
  "key8": "2a7xH4UsGzsKtsmxGSaVTnCkTg1rozrjz8QrKKjZC1mXUjGBtpyAeuYTb6z1d9iNwpF9CjPh9p3nmWpVQyzXRPsf",
  "key9": "48ShBnY9urPeZaTo1y1NziYs82FXXfPgx4dxrEXSda3UKojmSnp3NP8cMUfw7jkc9r3Eubaci3UoSekxE1XEFe9C",
  "key10": "28QjRSLETZqRcHzUmY1phqfFpXxet7bxAxxzeQS5Nbs5UVzyvdvnizsxR3BMu7BaUK1fJfBsuZHQmonfcAYfdBPa",
  "key11": "65A9j7Qr7so2J4CdgCGVMVzKgjsY8Jmv3yFmGcWBPkzupziNNPbx1jFpTisdhMDMoyWC1LHBjB8wVB4sCieR9byn",
  "key12": "3gB32BzMPomLr8YW2hjUXwCy3LdmpfkCbv7CUYtKA6QSzBbDhzWN9iuCYFSwqPNCDKmgs8bh8fyPZqyQvwcDL5Qo",
  "key13": "4QNn8CkHmrRJvAsqRMc5pGmxkELNwpe6WAQ1SYbbw5PnjC5Tay6NBE4gHfShXheUkxePwj2xqN3ofnpJ5Vk7SydX",
  "key14": "4rsQnwZ9nDAL7bwQr6A4wHF1UJF9EguyqjB3wAmAWeDb86ZYuxFGPb8CgBnzWkYva4xzdP8pM186vhxQf9FNzhDZ",
  "key15": "3jyMXtny7Kc5L8i5RrdC91FzSDncFC8NR5ZrHjajiW1RJrVLT3MXP8HtQJTw8TNkk1aoi9b7NNSHFzEkkZXmYrYG",
  "key16": "2xM7funGYdbSAoZSzBZGcbkKFGmZGWBu5v594WrmFAVKu5EvVoTLZGKWsnHeDvzKnMZGR7CNWiFrn2bTcHfCjoCy",
  "key17": "4Zzv6utCEj6XrobrfqHZMQDoXY1xuXEd2Da1mBPqLpngbTyDsLZmnjjfN4JQV5Bo3bUsFNkKP7XERD3edqB3VRd7",
  "key18": "5GeR9J7PvY8pSMVCeN9A7j59DDJwfGmtHLE2EuBkmEQWYjnmFd9hqeBPAkRvrfqnEeLjE1fTsnBH1q3Jf1eET4i6",
  "key19": "2nmMPxzcVofdfDu61Bt25mwLBmsi6vAE6R1pU9Wnjz23eE75cW7kYTftpyvQkpNCf89fxpfEz4GSjRTFsRTxkCPN",
  "key20": "bD9mK2pe1hhAK8DVB4uA45LTsT5xoV3R66T2Lb6MeTxMYBgnDSuE1ag4JQcRfKiLX8kLafg65s3LjXF793GPuQZ",
  "key21": "5f56ZNyLCugYtpePXj12L2TczPfDLbTj4HHBBdAVn8wxDb2uxyWR6EFRFxjPSLj2B9uLxkAce4w22W8nR6iJtn2w",
  "key22": "4GU2XXKnZASJoeHFj1GLKBSH4Lacxu9tFkvW1pnpjrkJqjMtxStNaroPMo4SQQzq9b25VgAcjKeeSE5AGzRWbgYG",
  "key23": "pQrQq3BHX7NLWhP9nA5a4qCHa4dR2s6E8mBmzokBry7FHBUTm7r1y9whsww8o2eNXNVTUNCY9uvpxUybu3xRpHc",
  "key24": "4NAHKSsepSs3ZFWTheZPPV1rPS1LUnq3oZZcSFoQurZUKr23QN9jmcp2uLas6bwnbcdETU8roVgEo5UYDQpTKXsc",
  "key25": "2cbhjEFdGAbf1psJ3xvq4Q51zQX3PY7aKju1xsdG1862f1Pm2bYM3h1U5ZrwKx6qbLKGYQ6gZrrQ8GDdpwtn1Jvg",
  "key26": "2ijG8jYQPz9mocwFC6a6xXPcS2CaTfbRGpkZiqzKko4NGReF6LVyR8XpR1DKar1eHZyVvqx968XxuxXoEH9Ji8yn",
  "key27": "5HrdMQ6TkacKvTTcnFRA7vePZ2sTrP3YSDWkVZrcPXWja56LRvAUnFcH9QhoSjDMAwZAWfXwymUP1GmMejkZTvEa",
  "key28": "4DU8Mwxuebv2NmsC1koYqYLmfUVKmZvCwJBcihwV8mWLmhwoNbqxgCZ6x31H88e5YAYJMZnco2Sh3NdDFRTuQHdW",
  "key29": "4gVTPwSvBUV6GAqLVEnvZRR6w8GqsHudYFvutS5A5jiqqHar1n3yXweF6wzVtjBggYiRNZGNKVNATHaK3ZUyYweg",
  "key30": "4U6emyUGtSojVAHrbLMgacmef3pzmJ4YV7Uus3Xa4BvfZ1cABKhN4uXVw35LhHdReJvS3MZmNLrgLxh6vzPJA2CF",
  "key31": "yp7QcmS3Bwtuezoaa8ABdnz3t51yH87Q3aWGCjxHej1MFs8Hba7f8NZN49M6y88GB5AWowA6Er7tAjznH3wcMKW",
  "key32": "4djXnWQ5PUMMGMqd4DHHU3z3Yjpw1xEMHeaEe7JJ79WZhy994uKLuYBaYwysAYVDfcb6Gz48EryrzTFTwkSE5xy9",
  "key33": "4g6V98h8SN5vinCAE2PMh8mdEhR7fTMgLoRFrhdAYrxKKFKKfTZ2FjftgJJ46ExmGH42wxgYscdwgjVjEBDdZSfn",
  "key34": "5Eo5qtsDhgaNddyB2vfgdnxTFktq6dnvS7LDPmXj3TGwe78MUEu1Bjfa26MGWRxqPcBWfaBDArJEfWCH6jdUBxAr",
  "key35": "2Q57MN7nspXksyt8QMmiXb9WYhgTTMF4CdEgnNppx9DweEmJrjm8WZBMfaNiRDmmM3C26pTzrTTebcukgKySxTjd",
  "key36": "4VbfQyRYNc2mSjVK1SPPkaV4ZidwwZFdrnzUxZnEGFcW9QYjZDMNC3Hj34L9nSiVfMmaHUAeeKrkPeKK4oh2gG7j",
  "key37": "4d2ELaiXR4EU5u7HrG6iWLYKeNH2nNp7GqcjEVMofoeroFsmgpApdL9B7iMJiEgRmxGbGP3ukX332WgV1vyR8Pvg",
  "key38": "54LhWMKZg9PUy8VEbP23qqUokmsW8pmM5MbZnT1ZnL1oCHZeboP8aptQenYsefzy7WRho3gEDfPKCqAD424uq4X9",
  "key39": "Yy2RfpKXeVYisSFU9SQYU9ecX5VfZPnyAGXht83XFrEoHX6rRmB86EngafrtwoVvebUY6Fm7m2XHVykqU49atEw",
  "key40": "BSaUjz5BDtx7ddpE8scwFPYhFasYKWQzDwGb9eLySe8bHc6SrDWa7caEbDo7YTNC6PVJi8M3DS5p5td7QmNAK1Q",
  "key41": "nhN2bQXaGyfM4LB3bqqgrAGV9XLjwRcFw91vddPPoCzvxhVnxYC1wvLkcNPskyJj4UTyTQQrggaidRbjxMNs3AJ",
  "key42": "4fBVGav7ZV2oVeRHGkTv8rYUZxdRKs3dJtF3DQsCmYvuUKu1BV9N5oaDa5anhiKG4D2QujpkEppPGh2rJdyhgXCe",
  "key43": "Wx6sn55p3aHxfDSmRGZKbrbcwKaFb16L6yATRMWQJfYWi1ZG9LzSe2L6MkE1WYLrwGHfjEHwqCrDchGZq9mkLQ8",
  "key44": "3dsZeBxEAPQjVoJmbq3PYwhyMjBCDQQ5CQ2dt2wU5TKp5PkZm8RuNage6EY5pvoRnMLYjnt9whRWLJoL7wvToMVh",
  "key45": "3NFSeQ3EPwUfFWutbULWgQgpn6AAzQeYPLkFVfaytQ5hHuQJK2Uk3qD2T1jYWFdSDNSXmfSZAS5NKREYobczfFPf",
  "key46": "3FkxQ7LGUm6eXEfvD42WHGPBWyy4HehbBgbtgkKbtCG5MAqJYFKp3L7zvwq4b9oiYQssemxcRJaCgxni1UzZZ739",
  "key47": "49pDaosmQM9kjP1xG25oqDk53jU2Ev2BhcgeNLU7Pbu9k2XVBFpdCFpsu5GLAX8qEyeaMHZgPhasypKrmWoAdmF4",
  "key48": "4Kwocxusa66EQDHbnGkX7acXfmLRkeJ9Jz6eMxq1HMoaj7VxdkGogGsSncUcGmYNqTNSVRnJjtx1J5R8SCJCVopM"
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
