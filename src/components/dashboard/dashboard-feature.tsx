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
    "32TFc5Lh34e7tScWNdxr1MukYtbcxEhjQ1fHHmam9AiecEERu2T7P8rejUT7CVjbJrLfWYeND1eZDSvttEGPfYHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qkqLWo2pACRUmCrU4apNUR3CvPSpKZon8dozfWBvCEP9LJmiobzLDLtnr1ZZp5VZM587UmYMKfcAj25dZLmHjNN",
  "key1": "REKXe8waYuUbY57uXRi87P82eAMY1W2Uen1Y7YjtVyg3N4pMoV4wFKmXfQcXvyUq6hYkGL3t9fbndBXKv8qxYLK",
  "key2": "2q4daQEmaTyDWcBKHV4oChH8EcVcwfTyM6uq7jeejxHYAPBhby7MzNu8dBrn3vwRj8vwdq4FEFkVAqc6D5kDKZKM",
  "key3": "3Y6W41rrTk1bpdaqWBwrjvTydx1D5F73xBQZMSmKECRsHqFxFD8SETbK43jwunh5HTtyBa9zBDYwybWQBUf1LDNz",
  "key4": "4nCVeBRC8pmvYksa68vApGxeEqzR2LTXFkPSrwups8NftgbdxCqsGrkUDDKCv9LD2AEaqsHYqJhNruvb5xuWdtqS",
  "key5": "3WtXYd559DYWqK56XddKiRGNZLpWf9Ak3uhL3W5ca92HTvffUR3K2HzmcPYeHhaXerduo97YpmHkz47DbTuqkths",
  "key6": "4DbZZMuq9oVdHa8tKruQHfawXRKLrN26yizrvK7rFpaBjToiNpMWraANkmiKEnvTKf3DRK6eysCwQSKg8U1Qarzm",
  "key7": "4yoZvayZD76UzTV5sRjqmB71jJschv1C1YHLv5iYJA9bekVzRAjBmikQUga2jfXPFz2FsSivQG58rXVMe37M9zxa",
  "key8": "2cBEq9iF3xboEu9YNgeYCwDLJrrvJTkGYBHPiVaUGfhJV8JVL5MN7mvkVNifaKZTdJox7soCN3oH817L8qN7K36i",
  "key9": "595sofVysm11ikYUbLv5TLsRj9VgcNpVXcYMdRUHU4yRLXhSKqvzGgF5Zxqi7j7yZci1YFqNwcfwgwsLMpojikgZ",
  "key10": "GxGea4sFS7mYcG6ZQ25kmFhqykFxnQMzY6t94uKJuh7dUtozHigWyacZNePNK5gkjZiikXsdqtBwxPxEdB5vf5x",
  "key11": "5nSBvKgA9e32ktyDxNykK1pjxGrNRRmJhWusE6EWzx3We6hHSpy2zTWM7keBQAhK3StGdd5k2zT45zPLd23QSVff",
  "key12": "3dmb3t38fL8dmdLumdvemZSRRdVRJisHmV9vXLPnzMeTL2ZZGPZsHWvpXfRFu5b5KTrezzDRAFydyHGDsTqvTzS",
  "key13": "4CgRcksoJjNmMNz4pd2GUwyaJyEL4yH6LkMQkhqCZY2E7qXERKENnEk3eV7tgiqQLeQhiQu28BL1bv8QDBbB8SP",
  "key14": "PjjfpVEdda87zJABuK4Tp5BCpg1PxRJGuXqJRGN3nvQ4WcK9bsp1HM4yLnHwEs7wU3p7864vfbqzejfWpHuTXHe",
  "key15": "4WP5F4zeRaZvq9C3NPqeFYBJJ3d2Rj66Af7WruYD7ZgM3Z3SQMU6vsJfYSbBwp1i7Kou4ZzupCeQbKHGUrt8XXvJ",
  "key16": "3YH6skLgfrKVYB1PJXwGqBDGS2Swr7NQapBi22QV8CDqTTox6Xrh7yimihA3NsDquuKVNcaB4hCtXbS81pzAmqXT",
  "key17": "DWosHhNRkjp8RBi1UEgpri7b1VB7azBQwBdyAGErB3zsjSKFicYYtbk6RvoZXUqnzbPXwQcxPg6Kg7tuRyx5ASv",
  "key18": "ALjD2qCXMsW7DLAvNLv3YPLP5mLcRTShNhSRPH5eFdjEdzh6DxTHrxzcR1bH7khJpUykfuajAQGJmuHmGmsAbam",
  "key19": "4UejkkNDSL5BeSxyo9tVWeuJ3Jg1t9miPZiMjNQmsPa4VNCzo6ratbWYu4tVYx3iHVemcKXJbp4UXJ7QtFDx6Stu",
  "key20": "4reC1pRdiwcWhy4bL9guADGau1RC4LAf8TgVTuackewBbecaZ4HrgxigJnhMZKay3esBFY7nEnuMDfWf7AvTyRHA",
  "key21": "2unS3yWZ2fV8nwij5hiv6D3ThzjwuupbMbBiTH8o1MwEDxBgCBA4wxBTYVr863c338JmLWcjSZUbhuHfcKwxVse6",
  "key22": "4hrSLCgrnrQNkQZ8PgwhAszm8BtRtfTu6dEoPzqp8fcL2ptxbDgh3RvLhTVAZRZCKVZRwd48PFYPf2cJmSmK6yC6",
  "key23": "2UfRNK3Q4G7Q5odsdQKTF5atyWk6aLHT83vWYP6Rx7fAdWD3B9JbzBXUs7pThU2JkGJavAqCWoiQqgxebaVWtVLA",
  "key24": "2AYpwZaeifFMsZzaMX5CUNRn2zoxPghNFHswi3rZBoQq2aVvPgHk7QhCeVH15ZVw1CpeZiE3owAWnCJrj8PGKtNy",
  "key25": "z9AmJmtLiDXZ2JvyqDgC8JsqzKMHPX4nQiwmoLaQKEQEuy2AzNrEQVobn8pQ2sAs6TDmyp6wRF1nr9hyyK2T848",
  "key26": "58xzZdMiSPgPybJGf32Z2bwU7rxuJf4kSeJUF8D9TCUgiQ9SUsSjzsZYwsV4KFCmEnxbqgcbjd41YjfoEgD2LeGE",
  "key27": "3fjhCZY6nYkzBwaWCDzXWBXcf1b7Bgf3tpcNPnbVkSTSCdChiH3v1BofJTd2qUjG9d3kdJB1eLjMRkESGMBppNpb",
  "key28": "2gHSWorRAYWGnpa4oPcpDxEThyFtPPNXHJjFt2Vze8CbJ5Y7orJqVmUkxHL8i9ys4ty8Pz8UknM27XpaxxXjzNB",
  "key29": "5Fdr1y3diFQ6t9tXiWVr5a6VGwAouPjTer4w4KSncwpbiVYp6znSgkfvYe7Mrpf4iCrpwSZsXASKGoBPB8SaYHm4",
  "key30": "ULtgh76YTdSD3KuhMVx1eQe8Nu8EsR2YZasHxbJTSnyrnfxt6CuMuG3Ha3S49e35ezwQERu4J13CVUExir5sQKR",
  "key31": "5Q21nqwJYBg8FWEdZD8E9Buz5nLZBpL6ozmaNmM4dGAJVo66RTUiHtEfMiuyrKxuZtV5ehptEMtYjQqugT1vNJyz",
  "key32": "5QGUmv49uPeR9jeXopF7RkiYoxN9ecGzJVWLgHPV6SoZ24uD2aJNqkq9q84Q2ginTKxr6iKRpJRJfKpWS5Pxdzqx",
  "key33": "3dtC4CY25LnR7KMDsikrPNkbcwnwNZ4jJiGKG7qdWNdJNG68q5E9NXpm4tUQ1Zv8PTpqgXic3P62VazZyGs4yMgm",
  "key34": "o4L1yPi1LhZxp99Hcx7KRNg3foTSLwbHzePDd7BbvfcdHieCeu3hN2UxmdtwtZBByosNedyaBXfgEtdniZzRc9P",
  "key35": "36LCgMKYNA7838C2SnxVKPQJeVG9u2eE5Cu8Vgd46SitLWodWWCtMD9X4P9CizEffMJmWnPF1fGwZgpQ1XaEkNsg",
  "key36": "4JDPPL4k3UHu3Fa6f219ZpdE2Cqwo1dNLqWCefjR3gcpeccFgWcDktNZkP2yC9MvtiSoe6fooXs6n9fw2NHan686",
  "key37": "4EgxrArJSZXoh1KGe3wHhEqYJN9ZJfRhJDajEqrBmy9nHC7K7xRHFpkm8YPbHzcSb1mLHSySmm5y5wPXT7bhx5JC",
  "key38": "zBAjuXHS6ZdobxBYasZRUQXUJCajgtwWXjVvwBaUFiQGKaaCBijr1wmnWjF2gE2oq8HUftbvG3WdbagLbiX3qxU",
  "key39": "45nJ358HZBWLrNydm5pHmd21jpu5WUGRhptGusSK9qv9219eS2ZEiLWEYtuXWsJ8nmrcv9bCAHx5oHUFxfCGrcdw",
  "key40": "khkAZT3KaqVZbqgvhGHiK7s8pyHtnbLxJnNvCxVWoeeLLuwDvkW1oLQ5rfdbTJZdzZhFPBez9UP6X51HBrvrkgc",
  "key41": "o8yyD2xK3Utf5wL4Suxb4zzMbRs2LudVnoERmhAWyR4fZeSePEAGUqvt1VxkeyuWdRtxVgkK9MPwJGXuLD9XpEp",
  "key42": "2DVAZbe7dgPjZKDLbf32SwstoiQKp8Es7UXRyF7tChibyuZP7Zh69YpewmhxTuYGiotAVL8SpyH3w96Sx4YQ7PKu",
  "key43": "B1w6EnjhTM1qX5HuzH7LjArXVRtLJ7R8PRGSkWobUJVswL7AndYLUocExEogAijh8cpsD4nNGYmnCCNiB9sJBrp",
  "key44": "2ZRibbDc7C1MwjBcMQDPcaVRUKrppdhDWQYaxh7uSEctczdKgbBUXEKK8u6dKmJywEorjpSZi62VP8hYajBdZGzZ",
  "key45": "4AQQCk9JWYTsuW7X3SdHKLKeG3JXzvY5vyQs3UN5esyaqdytZjtTyQU4vzYfW8JKNQ741doZph9KGNPq9waAJQc",
  "key46": "2Z8MxFAXUCQrFr64XxnuZRmwFhJZjQ6bwu4BaEEygTiRmh5GytQGTDx1WeQVR2iznUtYiCtuV7ccMqxjiSPt1BWh",
  "key47": "5bj6rFbwq2nAeZcPPACGRiaVjDVs7ansxBt5uYZ1Hy31HTfkMx8K4TUqK1DE2MyTpA4ZDSydWN1hUyTnbJ9KsgQ6",
  "key48": "4RfSJCCqFDCv9WVrNtEjmXrWSLNBWLsjY3x2nbvPRMMBFw6d31UPKGZ1mhbDx8XsU9u91p3cfFGHJp5MZVA1QYGz",
  "key49": "3yz9NoAetazC3XB2EtcLh86Jrkwugm1pzwe4b9jFVedJthfXZvz5mtBCGro6QcgDWaAMGAacTeqhLXaaM9NSBETs"
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
