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
    "4jx7mB3e2CLem9fjhaWYs7vvj5SbkJj9mJqK3JM4FX9cE1ajQAxRPUJaVSvg9QQZBiEC1JLSqaFP4EGSxKy7ihMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uBJSuXC8QuBoLqm3JeQfWiqKowJQZSfgkwsJgd4EfgSDXFgJbS9mwTuSJezoLweYPQiCcG5VZx1EJjGn5QBfCSi",
  "key1": "5erUCRACwUVV2m7hMeUXAahzyouzWbP3vDNArLd7cm5PCbuKQHQ9Deb13kbYFSb3eWWjdsvVCRZMYZJV44j36i7k",
  "key2": "rQjcYsVSxk4qEd5JRystr4xeFj4ip7FWovEDiZeQyeQpJ5C5T7eGYpKTaiGpzn44Mb83jJNfG5wMnhssHsovJgv",
  "key3": "3Zz3rGcYsNAWGNjqxvkDuyKJNTcdmmr4yLh9pidFYk39YUnGS1MawnFvSMx4iiuTZ9B33GU6b8A96dktj4V5F528",
  "key4": "MsU6bUbaq6YfDTqeeCDvpkub5Yx1oeJuYU4JC9ZZghprssatHG7FmGZq1dBe3VLanKNuY6xRJQjnx9gAUHPhuJQ",
  "key5": "5opz1PonPUb6B3FJi5qstbA2Kv2JeJHgzJZ7V5moicfhL8NQ8EV9kCM8y39XwcjZLJtRn9rs24u7ffHLfTCmyoj2",
  "key6": "2FRyADDhXidfsCXSPPxXHkQKuzknUiaZTdgMPnN7XZVGuH4FyLTdmpw99uC2QxcoxMjEGCfeURmKMa81bAApTLzt",
  "key7": "fTFDjKrA6Ej7JJa7ESZjSvvpmsTe55asrGTEWpMne52WpWJJBTbdKttfZqzNfJpCnu8eSRKHxsY9nNmhSDXyJ41",
  "key8": "5hjpD4AKvAqjqLTGgxdpEDu4Wbe1hKjdz8TUKB8beGudTbxnMV958v3t9AAqTcWQwpQyHGrWAYyQqwnDntnTbKoz",
  "key9": "3rJveWzMTeAQgUjqsP9CT2ZnC3EVhxpCJBgSTVdrCuNwLiinmCQ1FaKvkaDczszw35BN7cbrdH7H1NjhfPK5oAzF",
  "key10": "3byXaDniAZh8pM2cPNF21JkxNYNW4ft5W6GTNMJDFrxQkFzyF2JRukf5e1GHzYL9VuQB4trNfNjygckw6DydLyoH",
  "key11": "2pn3PjR67QFi8A6Japm9ifyyqmHxuHeuie5WQxLQcnHSX3XREk7PVf1o4Cq3DcR5ffRNopBV1GdS2LJn93ndL6x",
  "key12": "3duYqWKF8c66mLuAz2RqKA9GsYX6p3AxKkJUNRwsRPfXpsHYGjipuMpY641onEguVM6xwCZt3d6aYV6p5PktoPLs",
  "key13": "4W8GB8HoLrXhxoTVgyZws8KipMiTT7iAmEV7oXWsgDLJMqjViHPC2kGaggFk17wkLMGQkzfjYqpz3kXUa5d2kFRk",
  "key14": "5hq7qrhP6Tr76S2ujYTm4EXHy8bVKc4riEwLvXfeZyAvYYErrMaRA3wZW8ecspndyYUfUWcQWtiyNarcLWLjLhUm",
  "key15": "2wLhhCC6Za7BCmViQLBJTVrJFt1C4DUmQmUQ4Xhb4UR2MBybvA2YtSMfQmcnC7oMmnSeDPYBhy3PPZwsg6qXgUez",
  "key16": "4oGTHtu39omeNM7zY8U3zB7yDmDcoXmR5ZBDf7desQeGSe6WgqpBFHexq3BKhYSCcXmrzNBTpZQyX4U4JfA7P6BX",
  "key17": "ft67dze8zjg2FT3C5hACSyyaj7x1Ss7wPc8v52BVkfgNkHHZzqDZ3yGfxcRbyHW7yBwaXyHdYTzywQdLJWCyW2A",
  "key18": "TJPMgjNLQ8RLR8EaYcXBXY5XbbQcNT7DbH5BzbJ1wKUGTKRCHNQLyEq389pUsi1QDYL4U8phcdny4gxCvVfnFow",
  "key19": "5EoHuK6TvkrJMhgUQ2y2SYLjYshguZX5wobfME36FJWVEHfYjThssqXg96iWuhk8uoNBu5fhxgV7NpaH82uVHJCZ",
  "key20": "2NVAuVFp81QhfmXXq9ETUhYiYwTU7K2xDWDQEUub4HkH2RxyPPg43HJTfY4JparETTV24EaBscT23j5cs3mqwtdh",
  "key21": "9q5duXX6F6noi4yu9C11L2rPnT66jqKoc6r6wRvXbXbh3gwtrcQ8xFWYrQNTE2TSyZ4LeLhGCgmTJypDziiAsqz",
  "key22": "53WF2Ef8HWmBrqSYEn6wNZd5Hm28mva7AwijzBU6zjTeAvDwMftyxXSAu8AfWUCoLhMfzWw9fYS8MXpAzNFnHx1z",
  "key23": "57EcQ4FeffYswyDntJvK6Xgt1cBPdNWtoDxWmgvJo5bSSirvbKrFPNnoj2YB9yUfwfJormFK99YEW128FVU5rQpb",
  "key24": "pnw2sJcuoH2udeLtY2XHpnyAq862hwrAJvCXp7fkodJ1sHAX85s79tyWXhzgGxpHQYjsB8whXcK1fvqtL7fJgiK",
  "key25": "WDYa4XrEfnWgQW3zzKoA346ecw4yFHSmxQ96im9X4rQLAmuL7EZcVXtHrw819WuyoN84UDeNTH8jsd12VB9hway",
  "key26": "2RfvW9uKBK58y5aEsq8YRz3kGwbGRdb1yN49k2RCrFRD2Ftipobjnvhtm5MuDXWHRh7HeWLGG8dHY3ebrpB8Fhig",
  "key27": "2hEi7R9wsC9WUJhDrfpS8qMhT4FN9U7riSyaNaEQCkhvMw68BcZUoUcBGKGVfb6i3BDPZiMg5DeDzvHa3WRrN9Vu",
  "key28": "4q1rmyRHpaqR7K3s4jffRpzSztRq1RjhgkbW6c843t5nYhDNj6Ykpydb3qW7J9P3vGJEnfC2Xjg7W8kisqMWVMep",
  "key29": "bS8MiQvqVu4efrS8PSPzEX4L5hDRdvWV22WKz3N5fpJnbgQAxGRx53rEBVtXwxf4QjuG5qsmaC95g73aLnToPzs",
  "key30": "3ANpCbqCrt7ex2EKDo25WM4Ag444PYjHHxj54bF7vhMZKa39XUYuo2G3GDZ8ZrU9oYd8xp1DswnvoQNknByNgX5Q",
  "key31": "3SdJnDUPqq35GKXoedu2HA1RhJATHoHLC5UNo9xhPq5mdWW7kHPmBRCjVdExsvD3bZbZACj5MpLMkDdqf5RrM7rw",
  "key32": "4XLZMUJSUTmnovtzVXwHUixBfBpsLKZsfDVyZHSVyXnp5fULu1TcbLoCaFEYMNsnnHCo5rG8L4GQJKNj8eGb6Bfa",
  "key33": "57f2PHAj6wKrrMo4wrhLeD789ZS7UuxwSzFkHkgS2LTCbyukaMYMWgacVuVA7ZxmCAbUhfDVS1hSx21dQT2JfDa",
  "key34": "2Cc5jpKUB32p87zd15xx88XGiAzNQ3BLZntaFbnQjsFQ8Mfn9AGBocmzVK4FCNCXbsFsFDvurz3xW3DkF8EQJuzN"
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
