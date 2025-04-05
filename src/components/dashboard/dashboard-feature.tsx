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
    "5tnqvUwn1mbJvsKQHYCaAh6rit722cXDkbAD6PE5W7aiXEJpADA8Qn9ZaPk59buCD828kfaNY3qN9EdoESsVzTAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c9jWs6FcDo53oEZgvXddFZTvQLuNVDeuh1eetLx6BmzgqEzgJRZypdPjG8B8eVffSD8wpR3sAvXEzYEU3gNUtaA",
  "key1": "29mBQv38rzUcScPcn8jw7qMCUUAuPhoKyt7xVBpEcbFJa6kRV6uRnE1y6GEPa74MpDrUAU666p6fNjoxPDo9Femn",
  "key2": "5AEFuixotkcuN7NDVTcQNc315AnnN9DY7Pn2Qi8bPMykp3S7tCuw7insYuU2oCQrm9QCbVoyGLo76a9QLQP8Agcf",
  "key3": "Lzp3nggL6nLukuNwDXDtkGrVvAbjNDjxMMSwh7ZQzeG1PSEkFp9wJ7A9ZUtgoHKRQb7GbXXNC5wxYZbtDoDsKSj",
  "key4": "2U78TkqkjqQ2ZRnJwwn7KVHhevrJJEDRJ847rnedNHUX44m8Mbjv94Y8jTW64g2RyynecsnkEdku4LtWvDTy8MeC",
  "key5": "KHeNSpntm6fevCtTPfVRZCumTuMdEpekAPym7xqDjWCxhLozwPSLQJywGe9apEr8iGK8GiCE98yDBtNHuDdYs6i",
  "key6": "5mVNBPg8y4Vmq3vzhajHLoeN6uwZH3b9oyStNFE6gG6eZWbxkGCpfVksJrFExZN2EiqwUdeE6dPEJVSgp6XqVqhQ",
  "key7": "3XnmnZJ5sNZTnH4gKVo4naktEVHwBNKq59b6NfEQBJ1wJDXPd3SSDWXnXWXoKfMQM943kQb1QdtwJuqe9w9sHwaj",
  "key8": "36Krkqh9L8bf2CqFrxiwFBqr7VgkX771L4R2uwhdonBE7GdRDzrykZoLyj8baAzpMadV5nrYwzA1j7SYPJhkS9WF",
  "key9": "4Zaf2qZL9H6ZW2fr4xhHsDkz85XnRK2JagwbB2uLq7yyk4PNuhBq5UNbXWmUXFx6BiNjPRxbupN1iWGAFKjKxifs",
  "key10": "3TGLq4c89jLcMpBVzCnvjudmR1UDzAwvvo53suZ3XL4wrf7Y9r5ePCRpF6Hu6rMW25SixgLLpgQvQAA1TdySmMa5",
  "key11": "theD8igNqhU3KUPynk2BBoMj6YY3ZwhCwLqYXmX7uLeF3BFgAfLR4yiu4rUCwdcDBQ83oSmJXWp6jJBY9fRFNta",
  "key12": "yfLG7h4MDp3XxrWotFnWWyp978F8jKQuT3XdiHhZpEoZ7DffhnsjzULWa8R9yvsZ2NCHMvSY9U1YaBxNYw3n4AS",
  "key13": "59q2bJ2tBJ7e3A7ugQtg29Lyox4XaXPGQ4Lh3qGyjHgdQEus5mRXspxuJF5zQ9LJByCqvVrHxxSfFUS9mrt2aBud",
  "key14": "12VFTrvoc6itpYVwFNseccTWD7LqUpMA7totYRRKFz65atdwopkESyxYqmHJZdeZwgMiTYVpAeX9jPYMvy8RmDh",
  "key15": "yyrFe1sRS79QSyMaXEfMwYNJpao7mxMjQpLQhmq4ndQMnupx2j7rgXEJnW92Akxi7VMJuHediPwaoXEg4LeoqL9",
  "key16": "5Q8kgVTKE1ntRftRcM47ZVVBwWiLLFKAyeC47XwSseNic5fmW7ivWS4a9KBzfJwkAuz2CpEGbSpEwYi2UftXX6Tp",
  "key17": "3Ad3BYtgKwQRWmie3avVCVfZjV7RR4KhsaCEnmhYnLSQscsdhDX1sd3UADgZRn3Y12zijPEsTpEx7oG4A4XjNzgA",
  "key18": "4yJRV3HKwVgF28EUznsy57W9rMsXkcWzqHh9hv8y8svsNGWvjzsmH394YihMqyMq72KmSuvF67S5hAghMAQeRbcv",
  "key19": "XZfhWrwk1DqqfpJY3UG4GrPT3sfzJb2Jq7Pn1goCHiRus1UUQt3WHgvdu1GLPKZa2vo2686ZAtGjha8R3sHJ6gi",
  "key20": "4WbfiqiuAzNtFBHf3rMJMpv1YbzwWTNtTfNvhgMHEsN33asGFcSUaHc15S4PtPryDuk8u6XcRAXGA8qTcrEypgZ3",
  "key21": "5nvZWG9QjrZ5S5NfaBtPjhrGpFuPx4BkKwQ7rkBEqHcLjtfvBecmwwVReeirnjXXBv8AZmXc3m5jT55aqnc139py",
  "key22": "5CvPfKJPbZ8iqTGspowQpprYTp2jiBpKDY1FN5tAbfGRFRMet4xnqndPpkas3zC14QF7V9cbgJG6TZgHQsPjv6PP",
  "key23": "ShxNWKDhsuQrw8oqYVyobZooFHPVdEzwUpQRgmikAaoEzp4S4MnRXKLyssASxEyKyYXTEvDpmKUxMus6YRCavFF",
  "key24": "AmmLRJmoCXjVruV6mDK7XuPm8Q86DzYs3EsCiMyprdHNyT8ewuLWQeR7kdeh3RSEQ54spL1Fks4rwn3sxiyBc79",
  "key25": "3CGUkJ3ZEYbh12jnYzBskVoXrPHN3yEHHuq6n9tFyxjVQREqo2fEBS2vhst5hpMXvGGPbwHLVxtUf67VtgCSp9p2",
  "key26": "zha26NhCPHXvFEPEmEne2dPzBxzcTB5Cf5vee9M3B3xDxMJX9d67oefTpeb7yeaS72V1jf9BG9oN28rSV6Lyf2w",
  "key27": "5XB1xdjtcAuo7Pgig9hHi1Xt3xmkCvQGeNjzsquP8ax7Td9c4FXw7DbvoZpLC88S9fX3xKYoEu2LakPdKjfmZ3q3",
  "key28": "3F2A15VfYEqZaDehE4Rpjx7rQ1iDtbrjXQoG8YsKDg8XLnEua7dfzwi2LuPb9cH7b9bvfuv9RNg2vLDsscxosU8E",
  "key29": "4j98mTqATB3fFy38R12bf9nAv5DvGM4AhbTQf5Xiya6Jij3mZsDk8B11kUTzauziCNXRRyHdgjCsL4W888TmXmba",
  "key30": "23kGsWn52kgeJTYkaU6JrCz1VqMni3uC8K3FRBVGfHRMhY65LuWSdKUVQgyBwmedfoBaF6TmZaGHrDu7F9zRGuWm",
  "key31": "5Pvh2zxC6LNjgyHu4GAAWiupvTeCfa6eUaGNF4G7LJYxjFevhnywkMNjAhmdjJ9pY7Njo2eiEcZq1wuKashw8MS",
  "key32": "4JZFgpveuuXy4oBP3RuyVcRCDrY2re6UDkkrKerFrU5uTsd2obCg2K5Gg8skLLgrvoSa6wQ3T8CgD8gXzuUwBtNc",
  "key33": "5MZBA6DESh4nac9GLU28E8v7XDx2CsqC2w7Xu9HBCbAU5hnu1Mpm9XCm8KZoHcY4LkRLuAAnex6NbYNfp6rmKhc2",
  "key34": "3F4pUgeVtQj2G1spteZqBiWdqEocC6X4zhRH3LFwuzSU62woL7poVV7ED3yS3kZcRNjkKsNMsiN8AHGh6VTKe1gc",
  "key35": "ikjMqnCgTNSFJAwnYJfFdbkfkiEtvSSCoiDh1GWX8y698ChrY7rBPGTJioFmaz3qbXCMPCeNpMTnMf1Tm3BBDrt",
  "key36": "2yeufB7zDQJo1eRPLe7s6wbjXpaic29c5LQz6GGLhbcFMo3TATnKhth1Lw4TuwdepVsYW1i9yXHUjW3oiDo249QF",
  "key37": "3YZTJsctFvZZtHnEJJgnECru7yfGwEjyzNz7RXo4SsHM4jw9Kv4SPuUogzgCrbFbivTVnpsyJk2yVEbZKn2SNm8N",
  "key38": "5qFgQ9Xn9cJmBdnMJHiyPMK3zP8tR76KhtUEoQx4fMyzgoJrr4eXCRhdUtMRXpi3gUNLpdtSqvgK8a9yEZtmLLhR",
  "key39": "4jbGfaqYiLsmAah7cMqKrik6JcvaUgjKEr6Xgm8yMC59WNeSC3jjLKXjByfcyKXhPj75pKqXzKAurVF4ZbWN5s1N"
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
