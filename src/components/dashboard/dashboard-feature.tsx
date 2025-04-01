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
    "5ZUSoyr16vmQ7FKL1W9jsvtXYp2hAtKJG1s68MZx56m72WCFD7G1swJggdsnLizCH6hTBa5TvMVzJReSxVoRP1qD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43C4LkqFwqQLeoDEWZNfvFi5sVpFinicBngqYibQDEAhusdLr1nLXJj8uG5PayPriCPHxPmwPnTZ1uG7Vw6WWLXn",
  "key1": "4oyBUBKnBdFbR8mhYbsBgT2CXhYBiu3GQ7grBZChrpbSViokNsVMhHLAYk1hbvJbSWYHdWSwEYmWbc3BELooTUBz",
  "key2": "SmsWqYARGcRbcqSwuAexEbRmNx3rsgqvPyEpcxMKzvQ2g7TiDRubEUnJ5c1enHas4ceCvNE8xPsKZDMVAmnxg7y",
  "key3": "5PswH5UTN5ucdPAqthES8rRvVbfeZERFrwNDZH1vtDqAi1nwXAsKfB2rDTknmXe6woyFysbhgWSpNjgEJw8E2h8k",
  "key4": "3ttotPQbXNeeXqrgV967g8KKEUptRVg3LfjQm7Hz2MGcFDvwaDGDyZqv6173pXaV4PU2nPYLqJtmnTtAh4s2QcdJ",
  "key5": "3nRPXiq1d6aoLRAMqMwpR3JRGD8sFJi7oKD51avhFBZHTk1bqNFuwcUQAFqL9NGAjzmjvqP5YRprBtGkMRn4bKpv",
  "key6": "QavjuivsACRM665F5qrEMAdiPBtvZtiJm9ZPFgjohyESafsjtJV6iR7Z5zM233Dx8V9ww9tZQX6cbw8sMoyKdiW",
  "key7": "3KPkZ1qhjnN2iWssYAJZ9HPRuxQgL2mcfPUCVpBtyyjCBMZYhGfhNRtEd1xTBLGTzkn4zGTuDGmmF4yznoyPtCEo",
  "key8": "vcbvFLwgEtCGTUg1PTivuwJaaYg3BofnBSyDUjFhx77je8q8tTpCros7N3gvgE4cywKjxwPB9Kochgfx5nQu5AB",
  "key9": "4z518xnBVUDZqeATnKjsYJktb8PCEfG8nYVxGhTr6ZKUyX7jqaX1jjVzAAHYxEDki4x4rXNPKszKngMQW6eG9Kc6",
  "key10": "4FnDPkGSAWu2Fkqgs32N8He1wkymsteBcftLFNdSXPtuk2uWmyM9EE5sHZ8SydbbdemYpFsRHJviZnTVC9YojcRr",
  "key11": "5KQH6aS3MxFC7nuZZGPeqXA5fk5MyTvgyZiXUocGAAFGDKLr5y9N88fpxw84CHaNmb12kr4xps5CYtqJvK9WSzVs",
  "key12": "2ZHxMQGL6Gz3TZjxNDAvSWg1zne99dowWY21nT7d2H16E9vgshYoX9cjKPEW2ej1ctifW7X1N2fu3JMpdb7Z637H",
  "key13": "67dZHSpkGPKYKbyTsvtek6f8SWve5W4WB4gvJXkTYjxdpqbA8BqR6ZyazNpiXdzbDTjLT7SZvYFqyFH28YpXy1TH",
  "key14": "4pvdPg1yoM2XV9nNyQGmU2H2BfAKGKhBn4BU5zLJqyXxSPLXt5qNXJJLCCX9bHLs8BEYMEAEQayCBcSL25i9iHcK",
  "key15": "2QndtTK96aaT6M3SMmnsSXZtovLXLKD3Seepe8YqCPQGeKudxQig4kxoDduHq54uqEdCxULcxXHHGJvvWi1Kvx1q",
  "key16": "4zBQ1ZsEUVZyNwsn4Ay6QWZpew9WxPanJfYctvVbZgoFnAcTHs6BpBxkdoTtXJfdu9Tn1vAodUu8Jzcjje31hxfL",
  "key17": "3XBkqKabjTPPmnvU5MMJ2ghcuBo5NUF98zG2aeGQRxVjJvr2xm95G2tjZWmsUzwKGvZgzktH3ekreEV2GAQEHtGf",
  "key18": "467dPpAuBTvKoK5hA7QMH6FcQ1gGFPcQJ9GkbgL4wTRwuujFLTCW8dySo1mutoqHRLdt1cwpc6Lea46JgCqPtCjR",
  "key19": "2xNtzesyTGdFvXchbdV6jn4v6FWvdmo6AHByoepXcSnoU1X6CH2ndbtMVf3rDibf5rSdvoye9Tfz1VS4oP4pfA9Z",
  "key20": "2xXsaDDiydvj2FyFMUtZAdyUnu49kdh9DJKfw7TT6N8RdUxXRJdaJw67Ro2AJ6nRT2pvjkdB5SKRPSUyj4wcunPA",
  "key21": "WrDaTaKRjKMLL2Z3hy75zXo7ZayNvY8u9pq9ciSz7a4qHk48KbdnFUHmKSuaKXCRNpf5a3EPjhtCS3f7oqCR6NE",
  "key22": "5wKAXBLMW1HDBmBdu4udaHebQVw1jgDWzsbkS3uoCXBvs7A7f1gwhGC687iMsZ6oB42CZyP92Jy7bRH9SwDiZfky",
  "key23": "43SgvjqWNSMMn1oqz1AfeXiW2KqeJg7HuX5uXNMKfi2GBwhw5naWEKT7Lc8CD1eZJjWJTPY2H8FzpvA2MJomQqGY",
  "key24": "27hqNT6hCHennMtwCT9AbBWZngV7vcSoXaj6r4dwSLNBPApuN4wJL2bD2Vdd3CiStSYeCjfKywSKY3y6byej1Nnt",
  "key25": "2GxgeLNRDQ7a5rU71mgjQM5XevMHpaXkZEHinK1DoxDK2WgTfAnms15v2vr73osGSUXiZjyZxoDHSyxLXkzyhRZi",
  "key26": "4KJRHXSzevSELoysyEKL26tva9MStuoZjHcZMxrfiG82pnCZta1fm6eEAuQpESSWxfMHkxar5mma429eE5T1B3cM",
  "key27": "3jCswsWMWvviNC4ZwHwSVSxRCwvyUTrctsazj4cuUBZRLs2b9RhH7ZuVUhq7RnCk6gSMjeZ1drmfe4vxnYUNRSmh",
  "key28": "2fcrZVLrgMYyT2hVJ4a8fofKhF8AVhBmqc267nzNnmuyZaNvToSw7mMsDPXZJKYj2bgjcmQwW6mHotd2ueFVcfBz",
  "key29": "jgQPV8BjyeSzQp9aPPDAcG3iTq4wZcqXzx21qoMFsMfSaHUjGZq6tVB84jGXC5YJi33YEJSuxwNX5UwkZp2YZfD",
  "key30": "4CvNUUfXwraJyUEonpMUnSngJgptfQdVGz7R8aYVCKAhC8mj1sHpovYrQ8Z8s69pBt3k2n1Gp2HL4xhahCzJCpKX",
  "key31": "5ioeM2RxQTvZHAcwz2egbbYdKFr9R74WLCPLxunXM5YG8g4vaf6Z9df3Y1LpYwXpGYeTL5jBrf5WhReEAVcVBujV",
  "key32": "4Tae4fp74ADqPY5ikLdNdJenshtpU8KyY9GU1aFPcYfzr59EtWe4LkZr6uikxY7RGJv4UpCxjurxbi44P49nLhyY",
  "key33": "3ZP4X1EgcHDhXZkv1aN7xEswmrVmTyfKmvwAMmNHjr58FmYJVCncW4hexht3AUhErQSm2EEY4iMrJAoc8EH4AHYR",
  "key34": "44dp9nCQ8tPMXgaC4RFUWY5dBtGAWbhesYqfDAweEaTAWqHXBEzrkgwEUQ8idyonVt6Ej4NR9phe4Dki3MWWLvbX",
  "key35": "2dYU8wXrhj1KKy6USDK8SLwvUK32mA9zmSsXnUJwn4E7LHE14GwcwVt95gjf3Y5LPcKF5vX2G24fYmQFq8FBHTN6",
  "key36": "2rkHVownKJ1oJabNr6RgzmHRndyVca8z66qQKz7fW1ha18EYqptREQhEd7fJ4WEsAD6h4idDyVMjCCTVeiqD86AN",
  "key37": "2fmG2tWAfeDKqvSaHaKU2y4FXkozUnzy6n52fDM1yxn5kb4ADi4i3tFW6KhVZvKC5i4EDYFnD7Ze7ACRqsVkDrUQ",
  "key38": "5auPJPEmuu2e7cnwAd972dc3ZpJvwp3BHiutnhnKP6RtAq9iezotTq4KBbZF9FiDsarfGzVN48FSVkVRZSFyvmep",
  "key39": "4XiFHoWS7nLLQoM5YiDdQW3imGmYWt486Bz7dBbz44KbysNRK52QjVxuN9TsikDerGv3t14CP6k9NsYoAujiwFRL",
  "key40": "4cELxQdvzkYJyTe883iTu1zvpevj9nKt5KrNzDeDBpZr1y8G6bawHJ88Jgv6FXrBsqT44Kgkz7uWGAPEbQGbYS6t",
  "key41": "4kkhmJvdJvkNTTpGn6fKZ17yi46JkGgjsGmwpDqT6nYBBnKYYw81Hem12BFBY3XHueEZ9yW2BUiy1mLnC8JKt2ee",
  "key42": "2WbDWYx5wnecyMqyiNAv6EZ49p6FS3ynjPELtEgHGfiCRQNEjWG4nFZ6ipjrHWfDtYyed65E4cuwf4VV5BJkThb4",
  "key43": "4bgyayMVtkpsSUt3ud7rX97Vy3KZoTeXEezqRZTAPDGzCsJJZfDEnfEtn7p1o3ev9W61vUbnxaAKZB5EtMu8iG5s",
  "key44": "22fmU6TrTEMRxuEf2knU69fKXQJzN45qwX1HTBEbfJDdx4uEfcpm8Xjt79S1zthbM3hEWeMnAnhoYg7mWHsuCN9N",
  "key45": "3sDetAuPnSDCxKnK1qKiq9gvbJM7RyGXNxK9FdomKnTcDi2tfmSdeHhZacPG8zkPusc5cFtvzur8JmpxorfskJi2"
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
