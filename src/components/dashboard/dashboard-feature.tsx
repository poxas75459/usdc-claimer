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
    "58utt7ZmxX7tqeY3NyDSVMF5Fa5J17brPWERGpVCWHbrpAzumnyMu2M4RFfkgFe4DLjMCP7KsvY6vNauMKDyijNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46fJ7sxYoxvPAs8QQzqepn6QacTo1787HwXwR9iT9tmWQNxPQCnVbPPdpTmnpzhJTWiwpUdiL5proaV6GAh1Xgz3",
  "key1": "4hS1LFjXXAwTVdgvLttREXJ8mLHXTD1XNn9CJi2ocq4oyxnxptvccyaWfcdexTgrygVQx2m7ArHK4WM83pvVxxjw",
  "key2": "4eD5k9wuAkpPWPLzs8KJEghrzvzgxFB19HEc1Gk9GWd5QMvpfRNabrw5Xw4GTgXfrW5neAVEbtiKLYGEykYZnrJU",
  "key3": "62hZ9Fj6bD8i1tYtNNb6iinKhXhhL9Gr72KU2V6qaavY9QQcnzSFqDexkwnA2EVviTZ9bf992hWmvBrhcNUa994M",
  "key4": "5rCkVQhuJRGYT5xdqYB5ANBfCWrUseeDzoMEUPwGde6Le6vgZuSpUPP8zQX12VqZWjz2BKFA4d5DNdiESvQw7bkQ",
  "key5": "2tPXyYEW9XoPdGtD3yUSqiwMXNH4oo6wmuS3NfFJtajVH49HmKSL9ivSG4C8TqzrMwWYbW5isT7k6N97cGSFegDF",
  "key6": "4pG13nNn9JMm1tFd4Do8kDbCao9eLkT7odeJS2sEY9p6ua4cgRrymAijEktDGWBksn1oStidhcmc9CNXkPo1uBJh",
  "key7": "ex3QMZe6uLydCf9eCmXymekZSfpqu2gTpJNxMkYwqgew5DyXHQRnUzABPcwex6QRNUG8xjVdpfC4GNgeWqt79qL",
  "key8": "ftqmiiyCFSzzj9da7Z54nWLpRxkzJvwqE6boSyisgBXGJfe2WQ2jG97tZjWcQfndCq86hjdJexo9H1PQ5Cef8hK",
  "key9": "GSjiao6dmrnYaUr3bjpZUoMP3FRWmaoWmaQ9kim3iAxbgSNz9AMYnsDZ2uRQ3bveobHMxkHQKKLBEFUpdwGaR8a",
  "key10": "CyeqczF6PAUZNBshDK3WSsdpfBX8CD1BzjGY8ViJVaAvAReba2k9xt2KiowDudnpq3TM7WjrGrheu7Hn2s6LKSX",
  "key11": "adtsRsaFAjHotp4NCC9x3vHDFYAhBngsicHegY5xcrBQgMcPXEuFDh5G7N3Pfn4HxZVyYeHDyGnnsW6q74Tqrnj",
  "key12": "22tjaHNhBVruqkDzAtEi7FQZbCwWPnV8Y8JTCpr1csFHGQtUkGicjxWpcCAsyS1KiWZeKdA1hatsVbve6SiqRgGV",
  "key13": "4PEWB9uQmTUdsKx8Rke7PBG4sZUAtVH8nmH4e1Jx9jUXVhREZ8kQewABgyW68psUcBQgi3zLRWhhnKGhzrcyg8jk",
  "key14": "5J86gD3ZqMBW7Gd7JytTjRSnfPKpfyRqW6HPUSo1KDcLHcL6RxeMHdUEqcKoRN1uZM6tpmBc92JcdYKwbyrBVzzc",
  "key15": "fyxbXBRkDn9wAKEA2rRUPKN15hpNSHL9j5CMSKu8dwdWTNWyxrXVJrsMv9DHJHUXJZdavNesGXRP1MKdhG94XfG",
  "key16": "3hny4P85DrQNdqkSqaezHiisJBqkpR3LM4JBZUxfmnvTA1Nabes8rXUUPj2kafgbCfMyCcxjzxBs8KPhXTSFHBwD",
  "key17": "3Qd9s4MmQAtiHxYcFChetYR58VA4sr9CXv4dEeMTxSS11uvJNC74utXxu2X7BVnj8jsJ13Go47zrgmtBjWp7Kwfb",
  "key18": "2pVLYxtgKtytNFRtwhFAXQ36Uk7W2ThwSNR2kRjGKsnammuTZL6ZcgfM1iL3gazoxQmY4niV2nLLS9Lu6rhYzT16",
  "key19": "3t9XpvhR9GehbUsjanNYKymKTYtAu3qmxZfKjPJUY88jcdKCx5bZAyoZji54K6zGK7VMxvB1iAjZLmoLG1eTnWc2",
  "key20": "2KrDc8RHtu8FvDDtbkvkBSQin2Bph7JS4tHTBUW9UQjUmFsYhjX4JN13fZJHcZf1GHTSfdgaJrhrkiSvKwZ3Lu5v",
  "key21": "Ndt7szUWDCcjAnziYhtMMVZmXzC2Lv49CLMegSxNpnD19nRegE4BtNwN6YvD8DJjiGr8FWvEem3L4DK6JGQKtSV",
  "key22": "2aYNMrUePQgKyjFuQXGGdpLjzxX5ayWWBo7TdaHv8YwSCQuEEqzMXKMJKGp36Lg3Lf7JxkAckGqj3LZcZfgqPcDy",
  "key23": "2XY7dDz9CSZCBjkg6iU1hc8bysNbfrWFHwkGK8q147PMX6XsWqeGAYXs9NoB41p5GGsnG84KZA6sAjLP2J8JVQfj",
  "key24": "2y1bGLUmmgcnGVCdm46Hbz8Ani5Tr3Zxf9NwFwTkYArFzRTPXz6rcWZGANSaCzpXUA3FRJhNsQVYkLUZ6eiGNaPE",
  "key25": "22BWFXPNjxeqTc2rBWhCWTW5QkGEikkSy3Xh4LgwYNparTNAKJSgN4kQU3d3V1nE1eqDhgNxrR3nN5EXkkEcA4mv",
  "key26": "2TFY5Vag83eStetTQELSkGf5kpLcLuixMSxL3qcgLfURyjDEftKgsdvLEhQq13hTC8Agz5gciARuEExtgFABdet1",
  "key27": "4sGLpqpQFUJQmebW4xnmBEENVMfm12b98YZaQ4ZEZTaw3yRgcg43HcKHkcJBhR3bKJH817HsGX76burAyUuNC1HH",
  "key28": "3ZpYDMpkaGuasYPPKtwSqqmq7fzE7DXRfogJg3ajrEqEi4mKdipujNRBwG28JPekXZm743wf1FV3WEiwSqNfJ6dB",
  "key29": "FxVPWzqCsC7miQJBE6Wg9RzjgPigyvwF6a5F2SiR1vQwkg27CeWRjowvN9KgzecQpVSnPoVcT1ioe4pergYpnJc",
  "key30": "4mEA3vWNRHsRs4FRdAhQjFsQmBoNhc8XPjKPq9UqNbPoNGyNjq4UPk6Bc8W1MxU26hUpxCG9i6v3ZkNVGSQRKcBR",
  "key31": "2dMgkN2AVbTbwxYPYtrZFAbuw7pXxaCPniisUbotMknMLLBbMDk5ZtBXxwHUj5HJMjz1tV7vCrYnMn8u4Zmh5VHC",
  "key32": "5sr3pm9TkTGNeyzyMp5nMHd5zDkhSK7mkDZosV18fEtTMUnPQPVsihSNpryvYMQFqLZKydsPhbL4qkTJpkwkSXDD",
  "key33": "5gE3phPY7EHZD5gdPN9S8r7X4FwHmTkdK5pPuWiuFTfbtBtAqkWMLoSQxNoMVaLbCnngpi3RE1f3XsyMrgSoHt3L",
  "key34": "25T6RX3RRKk2GLJb6f4UNvReLr2Vg119dK8UjszyQ9hwCTgNF4dZwMNLooTM2hiPTq3S2NswK7JzSbd1ELXj37qC",
  "key35": "2arsTZLKy7528EGkLp63PmC1anC9jczDwGFYG8BTuXNjcB5rfcATy8jVGW4WoVxm9NHU8GL2skAsha2HLUTaa9M1",
  "key36": "RHV1t4423ywnM5c2Nj7Jdc9unRRgCfT3KWKV7f1fzMZfx4DPjK9gWjR2Wn1P2gPGFVHcQnH3pedieJTB36CzLMr",
  "key37": "4qFcrA1GeSDBj5gXuCAn43r2jThALCU8nCJZhBvSGtvysSAKJZxT9AunhnfqZg9EdWeTtyfjiYkVZkFLae7YLKuG",
  "key38": "66ahvNSS3CzyVZmESWUZ6xhKDw6mM212n7A3AZh2VTtEd4DvHDqdf2vJY7ahFgBvGbP3y5w179zxXwchq8Fyd75x",
  "key39": "4ZwShgc82k1ks9fXtfYsmz3MPqXaXPHvnHMchizroqstQXBje9ejfcb8okLc8YA8nDzmYFapPLeUy4cfoJmMqVMm",
  "key40": "4qdBVcFaojpwJ8LhUoQ6gCimHxsPTitBZXhXWVffgfhaBZBGzDhA3Z7HsANBhE3N2pVJhw8Rnvf8xQcLSA3YY8Tn",
  "key41": "2bUwdJVQw8baAUngv5pyzeMda2HKxMF5omRbM9qzPs2z21vFYrxj5Yg81jDRPttLDDpXFeektjtTxsqr3D2jJukw",
  "key42": "31V3jcCn4jhaG8xqfX4RopEXw5zCBq2oD2XwfJvCEXarnXUJJY6HhLgrv1SBYp8wgFoqGDG3qarjLuD784JxL5PE",
  "key43": "5dLv5CjSnWDFSutQ18jbFw5ZBNpoPv45mZBhDuUp29DErkqEJoZPDPimtrVYh8uTvAiZZ9JyoxNu1uFGg7goK1Dj",
  "key44": "3kYwFvZXgX6mCoyq6mHSLN8nskMeJawVr5ifNCVCdDJQQyGABz5TLTnrWAP8jJ2G7GSVbgZuyUcByiQdG1jzLAYF",
  "key45": "Jz2GBztUDtBTAGPL6cfJ7XfTbi5kqVy8Adkcj6EsGvceJKQDvpk947Yo6MXsD2nniNEW3JKZAqWJzoRzoX78eTJ",
  "key46": "4iwEBwpKzZku2GxG1q4Eyp1npkhaCmEuzxDv14swVMdgJHth6DC2BqYpXcc16b4nHNLwVWd4Cw2ayWEugnu6tUYZ",
  "key47": "46Z1G2zG6skT9t94GTYnhk9L9P9D8X3wKAHtd4pJY6SC6V8KVE7uHD9BvnqZ3HW5U85S9EgoEZaP4ounKBvSnxSi"
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
