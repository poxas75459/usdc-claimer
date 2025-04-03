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
    "4JRGJmFB1tazVHy8zrDqsiqwrPPyBTKaE3FWr16bMYiRd31uZFpVy2odF2CuBSiN5hk64dANkQeGHszBkkAcaUaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38TTUU3bidHar7uHcubjnAKJ5xcyrdMsmBRTaaWDDP7Ye4xT4nQZhWE32kPsgWQQW2HxJb8Ct6Ar1jgMHqZkkGXs",
  "key1": "3NkNvJfYSxRj8JwaY9SzbEfNZ9yzvMteJxdmUxKui8uRdMtzAotrjDnjH7qrNF7dNDHEDtv6njyxVaAjB9kyBMBm",
  "key2": "XxXC68SvLujUAVGdX1PWqBtJNNVstQhRgyVkdZHC8HbRFFRYTkEdYnfknu1Lz65qCm2JiyrqNMjnfczaLph6EnV",
  "key3": "2UnWH6jkTPz4ryHiwiisrh1p3PgM6osE2rRASvv9mvZX1XiyB7mjqbGaY4dGdUGD4i655N6Zx37KrgYivxntKtZf",
  "key4": "4EaGXiJVUBNWWGZFLUxeT7yipHpYxnmsHezyWEQyKJuBQHPJHvzDWTTjcC3wDfnXeHzngKqMRrtNHct9pZnsbamv",
  "key5": "2eh7DQiL6mYc5SDzQHqYgbkAYpBhF4jFDiZ9GUcC4iUA5U58vxmLzy2EX8Hne17jsjEzmqLR3BPKp1wCK1TcFsbV",
  "key6": "5vji1FXhbrLCypkEEv7P9nepukMih2egbJzyvYNGia6Wi1zDRYiHUbEMHGShjQHjj8K85XbAazArQfVGaSBow1VK",
  "key7": "4qTWxgpc67GBuwtdeL7VHVbB2rkHDYYmPdssJfpNyxp8psCYBajdoTGTT8LsHAmE1YWotErDQ5DnAeKvKDsn2hi2",
  "key8": "LiNJCj8dbUJHUmHnx7s9HwQsLjVZfmd5u2hLzQuUuNUjCDN5v97sCGFELWBerBArf6zFy2ksMuPtnvBxu3DoYi3",
  "key9": "2bYoGZdKkxW5LuDd6BsizKSTZXedftejHhHwSG2mubCYwybkvUgzwPaArgzotv5rfDRJPD8UszgzaXjyGwxx3JDi",
  "key10": "5NMdnPLJBxLaTCnpt1GBkzW2k1TkPKvdXQ5M9QPr5QWk5mJ4pd851xLSjFv2o4mv961H7HG6CrZy8iPCLen2bc6D",
  "key11": "29g2LEwPuB72am2VVzKuVoqTEvfuPdD2FFchFVXdqqkjQUgsoocSeXE8cb2urtJuJeGyXdHSudZE8ryyojwPShgP",
  "key12": "5oWX8iq1KiVfTFFC4W6oLsxeW5ThGH1jkfP9RrFeFTBnm7U5N2GwZhq45qdyhEudpJgBmkjK7HLXU7QMCQnCwRo",
  "key13": "34XX5EZAJPuQd5PVMsXuLFcj1RTh2vsXKvj5VoP4t3iYmAQHFEUgU9wPrKZnV9o3MPpu69fMCHTF4tz5qz1Mbj3K",
  "key14": "iARN9XneqLBQVFVdQbwKUu83NoWTe7YcfsbhSf2rf4YX7UUBGMufoom7NqRFHnYuiWaZ1bmQo4swAJydQRLpTm4",
  "key15": "2Ze2XjcpAdQ9jwuAyFtcJdWVAwnEN7QqgPohEnHjuXuqeSYbK55mMYZatPRafScWu1kYiTtTpbkcK1bW41gNvG2u",
  "key16": "wH8Fg4xzRYHPNYbwYjLPKCA8m7jzbMaZvNpyMudraRAcu7AL9ify6r1K2pxz3Wsb5waYwJgNnk3JRErXhZEfgT6",
  "key17": "3WXB5PRgBVUn42hao1B2wXUB7BRgMPCEZWDgdzTmvxCdpwBXgc4JqktVCKRZpABwfApZdbTJasprGg2ASx2mDhFY",
  "key18": "2Q9TjCvp9K6tJFuv3bMTAbs7ZBG6vuDFgiguXDhJHsHmDGQAuXBbjKcnxoqe6381ddPsQmESpNbxyzHTThd6t8Ut",
  "key19": "3JvXpL1pVKhEpGa5wwhoAPqW7Ho2wryhRrWNrcvmPjJbMRMBDp7QZVJkEsGK37NAUScfQJMkWxnuPfQXNF8AsZN1",
  "key20": "5JeRurttByAVjSPashiXFwPog7JEzmk5FWJ5T33FsFK7pPYzmHeYe32m6pjMKipq3FUiSaNk3Thjqysbjq3fmR6v",
  "key21": "4XVhZmKER84byEjgUF62BbFLw8azXVQph2SvbRUK9Ber5Hi7AoeZ1iCQ3QzmsUbPyzyUZQr1z8miQ6NEpj6puu8X",
  "key22": "53xX45wt3ijZSvurJbainqxme3mTUZ85fxxpc79oim3aYmupDjP6JQ881FLP93TULXbxcChZsvP41YvuMy9TUvGH",
  "key23": "5TKggjNuhDAoV6VYDh9ZWpQ4QTjEtsF2UduPtUJMZjutG1koMqJmh6LiUq7ELsoUEAiZ1ezvWiDhhzjG3e6BTrcs",
  "key24": "5NjFf8xVDvVDDjB7UZyJC4zojEQ4bkr53xnwzLzmwLsDShDfzh8GUupdif18tghUNHBm9mNEj3oQmko5byspuG9e",
  "key25": "5ffeF3EMy6S6jqCZUGqJo87xHxmiANfpHeZTVEx4WM9eNCSMPqKosZdT6ZMSZkbCZih7HHEaxEfods6Zna2ZhhaC",
  "key26": "ZM82fMgbMC6VcSFhUxgUBxrEsk3RjMqMYzmyn4DnhxT9sS3wS6FfAUXMxWb2nHafMaYKKtzRUi91ihSzDRFGCWa",
  "key27": "5XzMeoUJiLd4Pgtoc6WcVmsx2JA6hiNpPQYUKStw2J48QfRqASChrr9VopBmyBwAEJuYRVMhcMyCpeBX48g3hWQx",
  "key28": "2CrbyszXMt7Xrq6m1sPKcZegN13tKDsnWtuy2q1wZzfSb4YDbPhd6miqkciveczqHFbry1ZoyLNe7oi7siYYLeJG",
  "key29": "2C21CtyiwJFTawayHnMJY8SV8taQqZxh8y6GXMfTJohbZEBMaCZKoTKZySN1jV2dR5u4MCaKTHokJ4N1ir8tZezD",
  "key30": "4yTRGMc7T86E1TkUQqJgTm2TztssP2vAyMjfaX7oYKjJ7K3KoHz3jozfH6XycAYLExFDEmLPbC38Kr3GGLZMZsKj",
  "key31": "sFaBbgvghGVjc33agyVK5EwSKvroS2MgP28LNjzekfwy6H1s1wdcTBn7DMb1f4KsyfURCLCb9ATwJDHLLDi6jpL",
  "key32": "oKqmiaxzr7jwsVMyAP46vnz9Rp7dwQBrdVYGmEifuFnahnZRHYVj1d5XdynkZKqRJVVSvsDyuMNgk9aECyYkjRH",
  "key33": "3zHjMr6nxsZA8kUtFKx2KbJJoSyJWMVJ574sRkqrJGNquptnDYvLsDEhCYArLdB4AxDyjDUVucbzHWq8xEyrJa7b",
  "key34": "4h72ukGLQFfbHZkCisWmsDhrgPEghU2Vm75Stefd3cVDnAFK2QHMoYKFQvzqmKe9L1TpYuZiejK1vFHxNwHHvsUe",
  "key35": "5b2vrhZdSxgKpsPfB4grYprfmSTdQsUjAsEpDZkShoTxJTAZRHmEcJVMYH2NFbKHtDDAkeuyokD75rfxXh3qGJpi",
  "key36": "2Wn24HHLo4HNvE7i8ZdXyxKo9CKVTB6tyCD69tJckay2ghZFjWynJuB8iwFMxPY6MzuVRBnmkg27dXQTZasUjkyM",
  "key37": "5Pv7v5CTJiATPvLabGYfGjckw2LKj65HMo5hwz3MN619gPcuNnUJfp3ug9vY95ZsNGzw51XGRFeoxm3aG4QksQt1",
  "key38": "4N6RjN8ZHxrz4AZhB1PCMf7FZM1meM3tyPzvXkB5um6P1cqRLF6rjVqLBGHe98w8bAXRAK3WfAsogJZUyAUAquUf",
  "key39": "W4bSZT8j5WYPZNgAqoZrNtk81gdzVU97RaZnLL2ZEe8tHjDTsN1mdQdqBjvxXicqDgRCCt5i4ENiBEqgk74t3ax",
  "key40": "md24R1KjgGh9Dt8y7txXXKoZy13hjp5AwzXATiRa95cte5AtWXSg4Np5imJv9chbRZ4VFqDDXg89ecUpVduynpC",
  "key41": "4uYQhfTuLFFNwj1Ncdwac44nn2JcrRdHeGAUpu1k4tJVJDP9iAD9SsB1nGzArTLcuQxzP1NubbrCDZvcomp4ZtTm",
  "key42": "4JEcV8cEoie7795yN2noW2HE1o5n6Y38tS4oisdhDKxqkYbh41jhXCqVAXbaoD1zHdPGT1dmCP4fvf3EBorrbmYq"
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
