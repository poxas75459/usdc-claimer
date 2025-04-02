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
    "5PggfuxAhTMHqpyJg52nYQ3ckUoeVbkYWnzqBxou15Vc4VBC7deTxyoJGZCAvy5V6L7L3csMYzLitnqwcSTpTJKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZCzmziwG8bE6FU8ZtSVbKmQep6bHcqaGhy2pYtU3Sx3Wq4fPTF3ywkCBHvoBqAupSqgSx7Bu3TESc6fQ88g78Bv",
  "key1": "ZU3ERRcDD9kDWdoLqaSa6kM7YvW6k3yfsdULF5gJio9spQQBYHhT4nsMFVqPLHdeAyNNTkkkf1YQVPistXaNT1Z",
  "key2": "2FG2SCfHXgMa4kBHtenaSUsJ2AnwBMYGZCF8ytgp6WuNdiQLx67PjWMY3p7Dd4Vx19m6URyCZr3u2yojbAXAuhVD",
  "key3": "U3hNEQqe3goGWsK2WEebFfKVVzQVr2i8TAsXNvvTf9bHXV5865954GkaMZ6DKB2f3qtWqWHnwaU3MK7dizw2aWN",
  "key4": "5sToeyzatSKrzWc5h8pxff25SwZNVMNvsTo8HJtfkSkXiDoujkvdRa3TCcQ43nMqGYRgyimSyXov9yYxF8SLyYqN",
  "key5": "3AkG1Wh9rtpHvr9wBN1DS3QVHDqp9WSRLnif6ZbceGYcnXiYqDhkuSDb9NeSRLjqbC7iApGMRdB91dJEjTZiLpqG",
  "key6": "3XoJ3d3MGPuXDfdWusT4VAUuG7CNENCMUMtoKyS1SaqM9SqaDWDeZmiMRKhjFbdzNZ8yTyBg7VDJUoYmkYb7dtLV",
  "key7": "E6fPmjQD1jtYPU3Dt6mdNKRxFqd1Mjsk3QXN5QzzedHow9p4bnVtbFQnhSmJyGrpnBk2CdAZm7UeHBqJiztMbEa",
  "key8": "5S7mL3sMSWqp9pxjPkobLCberEsKdxQzxcGWrRyeMSUicAxfdFc4amDQQ4bs376kLUZ5dZCyEMFLqd23WjAGM26Q",
  "key9": "ZnJEkvLAnPP1YPpZEEjJy7pCqzLwW5Ty2YfvNrv9gTeB9FGscy6UQLQbkdnH1Ds6G8omRgMZ4Q3HA5pkexPqXWs",
  "key10": "43G4WhuU7PSmRutYVfrFTccnFwARekEBei1kp6y2WvTrQCJFdd9yKRy5iKLUKf5AVpgCtjB88TKcVc8DMb5rc2kb",
  "key11": "4zx9G8fsvaeD7WxyRzhJLXRffbSGFU4p1pcXS9VetrwrHpVdR1mVFsgHeoEg4A6izqqfVXgN3VUyAhXeqFNZVK3K",
  "key12": "4n9VSNxsN65wLQB6hhekWjgZRHGb7NwouCg1BW2dopg4JvmrFYUMBSqjdZA1dNBZofaparLpMXbandRKLcmK9iUq",
  "key13": "gTWEso5ejQeZigqNfStKaVk5vfWMdmJn8R4myy8iwECbX8nCZ3KjasjWT9h18zCnutpdrKNMzHQ6XJZxw3YrTHh",
  "key14": "Gq5WEvzEeZTs78iaXv3VszNiXARx3AXCMQhKNtAnqjLFeYBryQVxTwweDjDi3LbmNb8Quu5ghdHsLbruKbp2pKk",
  "key15": "2SPWZNpMKZwiJTARf4y1WhsU2yWBuWkWAFreQieSSsfMfuavYCHC165PAFs7449CqfTUDY4Aa6SFZmXWXTSCj4X3",
  "key16": "4rLorL3yPRRkKm5VoieEJmYAKQU1KKWyweHHE44Zfdz1iuogz4qiEoQz6xuyF1hogYhPdynmaEZJJptkUdJmPhpC",
  "key17": "5wSBKdYJWpQyjy2njzewiAb1q99ddMj5HCGpbdpWBHir9n4hMKGb5zJZGbERwZDregJ5MTbkzEw791GJ9ecdZhDN",
  "key18": "3GMD76TvZW4ctYxKcCnsbcRhYaXtiqkj43911fq8V2DpKrtvopPpRmkaxcqooZZzNhNZAbaKVmZDt9kpWdD89WbF",
  "key19": "2SZpmkdHK11KnnDDvrJJZEDCVsXNSDkJoKbnLFtj4AYnTc9gDX6vTFToq7yWzSgaeSYb7vkhceRsRcxipHXdbhnL",
  "key20": "5SWsfiFt5frb8CsgEZRTwjbbye32QM5AKmxknArrwvUqPQDrwivPuC5rHc1LywnRqxHvfQFH1ryMWuMGV8cjdLJj",
  "key21": "2hQAwNSM1YiLPJp5s1Jry1qmXBHZE1JtgcDXg6hHHDjTANGobaiGUaZ8njNpfJaj3nAk49Hki5xvB54cnaSXnnQ4",
  "key22": "2wkopxYFVvWhr8xR72F5YpD9oX3V7mphakKr2MKwBgdChERgEcyUuemTYKXzT2zAEE9ioVvannsFf2PXhV2UR9oT",
  "key23": "3W4prWhPt4DS7aHt5AUc9rsgiEBBYYxvUQ1Nn6x44nLNRmTuSCppKBaCZeLkstJSwDYrC3cp7UAVLt86UzxmG5yp",
  "key24": "5uCC3ghgzD9vSexcsuu3NTZT7KVzkWSk65UT5x3hJ9xsM2FmNEKFdQJ7nUAx11JfUZJGmtRDLctN6w1wcCVoUwwv",
  "key25": "9DpqM5X6HWCiAo9jCwk3X8zqwP38ZJym5rwmNXq5QSGwPWtznweL79FRuGrkhAji5uwoarjyQtEWkSoXB1CUJxB",
  "key26": "3wNGmdXxb6aJCjzdky3dsTNEL4nSjZy4hGNGmVowNksxn9upyEt9u3ibN9sNUnFr8QQfTpkggc27GZ85V3dtAVSK",
  "key27": "5v6szdw2JJCkE1xJqTgNUAGgQ7hYi1s7WCtw8WnznF3BX9zGJ65ENghbBQhQdRW9i4bkCQV9ZssmHY4L2AJhGDUd",
  "key28": "5DikrFWzrK2BUCuNw4xnoNgruVkZB7ihXHFgQE1zeRbBaAcbDFBC66bqWdswx7i1iHjP7jhDJhvZ8N2BZjNPapNs",
  "key29": "3FxrQLMPtUF6yF5drC2LdxHmkx2UYStjtgBiCR2RHM3BoQxkBSK1g4ZaF9iuLsZafCxsesEFprTRQUFYX7fwGcMJ",
  "key30": "4jeD1fujfyax3pL8cWiWWdMdcxmzjuwLfekhf2jKEx1bXkUkmfnnDj8w8mrg9eBmk37bEdq1UEjxkw1aPmiYqaiA",
  "key31": "55bwUc6p9odksvEhgN85JDDijgyrbAifF3AZj15zwTdm5ieVr54sQshRGLejLtrSePm6go495cBYCGQ5iFGtUnCa",
  "key32": "Fs5ThvmtudfW5VoKDtiAUaR5AEtcSHQaXPg3oS7f3ttrd8y1EU98samx2gxKwrxAjgGyTiMnx7jfERRC4fZ7JDB",
  "key33": "5pqnBMT6oroHSoTVPv52xNtcyFCQSBDYm7V6Vmcap8HdUYUf2oh855skaNdAYwfDtedYUJx6wq6ioSNwi9QZZsKa",
  "key34": "33DcSykwy3dRxWATnF6U5YYRbYcuMwYGuffhYhGETwftger13cou4G1PFXt8gqt3hf3wGuUfwb3ywK9cFdhNBbcp",
  "key35": "QS6nX7cDxgDi67owNjzFvJ3fUXD7wCrs9o9AFg8Ldh3WykhEsuwyMuu6LTkmmZ4SvwFqoJ97NPm3kKA5DCTqxiC",
  "key36": "4rHFrmnhfL8U6xXwtWZ5M7DPhErKtCHtSkMW1CVwXHaRYzSFzkM7XePFHGzxwfNPuhS2MCCwq35nnNprksbNoXgp",
  "key37": "5duNgDWP97DpdaBnbWkibDBNmgWonA9Zu2KvNXGUVhe2qq29ArLJvrSVVyLmKurBBid5pC1CAWYajsDZtS8WbdZ9",
  "key38": "62n9VLMV9aT1rMNTjdwJPAe88gBDHbQv5ucpNL1TTs3aX63q5Lt3Qwc3Z9e2EWQckKuuPEA7cyJ8vXnUgBFjdA2M",
  "key39": "3CPPRS89x6bxxJCk6kEjujVbgqPHPUAsaiefmQixitu8Z2HEN3LEifmHXc75WTWexa2DaCSFyVdpy3gNTK513MR2"
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
