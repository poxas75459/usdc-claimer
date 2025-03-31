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
    "P2BXfPV7KX6MCQnd6CwkfobET5KJxKi3tozd1r14FUnenT697FK6oYheGbrh3576EeP4xFQcF9jo78uG1Q3d2io"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQzZMddNf5bvWNzALqMnw9VPDf2iSk7JcyuHZkmecmh2EGKjp84dSZFr6zYKMNHVSpm4gEuvidk26TrJsCX4sDb",
  "key1": "5SznZBomfgjSLnG8ac3eC313EbntSvJErT6n9BK1YfcTqQd8LkPLAKfThbN44hSAwwX2T5gMuXWiTGYxNXiPcWpF",
  "key2": "3YkfTqNYRuaeEruRP6FfydRCmfdXdJNz2fvSCcf64J5nYnRsBKaM5DPvdP5dwUeBSiBPVEvM4yENTXqufEWzwt4s",
  "key3": "5P7YVab9A6aaqH2bdtRVuanrbZvgfhCdgKYWe5LiXNf1TNb5X2u7NSnYLqXrd4ef5hJLVuyv198WWbsaTaJ5DLrR",
  "key4": "oAvGdVjKVeXt885CwvDeoUcABfWHeAuSX4NARyfeyrKGPf1gybam9mLfFwC9w9LbPhthv7GrFDpwcKsREVsdXvP",
  "key5": "53EAQnnpV1vi3Unf38Tsr53NY8e7Q6cwo2qwtwQs6i6aSt4RAgZD1JSM37DsZYg151mrBzooE78zFHTus6SYGSuD",
  "key6": "2mXW8kFtiB7nU1JjCqQPUUaNxq89nHokoFXxseUDfN9saXRaYV55SNBg4YfVzBqtCVi1srWNytaNTuSBgzNFrMD6",
  "key7": "3YZhy61RcL964rDnvC4uasY7psQKnuTJ5kXsyAxAwHjE73b6UZA9YhKjzzgC8avM7ZsTduXMMpTEP71Agp7XEqJJ",
  "key8": "syjQjPEwRMkg5vzYKh9U7FtBT1wPFGvd3GrWHC8kxRTMaKVFBoYjAfi7nuQivkQUPn2syJUGPtEwnYBV3o9Wx2k",
  "key9": "64TQAiwHUcs2d3xrpqW7eaWD1gPKyN5ZkzPLoMRuFJgriBEV1uL6DofWsTVBonJZgDGEMKEcknUUGbFVAx7oJvML",
  "key10": "3Ghpp9xdgPSeaJNFJWnLGqbKrCSGofMdwyqVxiJbFYgybpq9tuJeUsXA8iYS7oqPpbitEmWQnsvMEpBGSd4xskQF",
  "key11": "qSioUjnKuEXGE7QvRiyuvk7zPCDS3xyP7Ne8L3R6fT7UFhVGNTRbBmX4iHWGHmzTD69Aduv1fAVL9HEFHyqFzNt",
  "key12": "4hZhaX9AQu7TVpDb4QmaAYtCP8xqW3bgrNsULzLcDNfo4fAhSD1sSyDVs1MMczugBB9RNisAiDLTRnF1aczFXeVe",
  "key13": "QfB6uQbDbqaR2ZEQ44LvuPWGSn9kgEnfPXuqyaKHf7qzVmp5jUXVa4BBxKV9LUF751RXZaZp8qMH8dnZTM2Y9wg",
  "key14": "4q5DvBZRfG7C12myjzQakF7YJTanqYcZUP2djpGJGSzPkMYeB8rFQHPsTrWk64xJCwjjjbFQNjckbpcEUxaLc3Rr",
  "key15": "JTVszt1Sr2DzAwZvWBgErLHw1ee49AseGrq4Vcx88keAwLb2FidKd5jEYvcEwAmkckxo5Ru9XBX52LFBNevjKq7",
  "key16": "2T4MyPh8SPZS2tfNS8JDnU85AzPsb11vphKUuK6RzBSk9tVLALa7fZNDwPwJdcALqF3NfHmCoG2ZEUCLSaYbMnMh",
  "key17": "38ct77v3BzjyTaej5a9t2G2Lpg4AroBFyZ7JSZCKKWeGM3EFYgCv3M6avQ2DCabimmTr7YEtZAb68CgCjnub2n9H",
  "key18": "2wZNQFxab6ZRJHkjyN4MiyNQ8j8a8yYEWLjW2hDYSZdtvZQWfyroYDjSNDPkA6ZFamRAykpGsP1dTkorUg2C6Uy1",
  "key19": "2A8kyfQndsXbuG7gKUE8KpPDA3KVJHwGj8TT9axSHqpJ6cJYqJ5cxKyKghNU7YsbT8CzSeVLTSUHbus2ac6DehbS",
  "key20": "wm7H2WcqvbyzTnajW6oE8PWa5wNb1DBHkyPXc9M1cLiedJ1evBkmhqp5oFv2WxQgqDjReZZNCw4r8GEHA5egWPv",
  "key21": "2eVhaS1mxQYJTLW8osLqp8x8LPWjKq97GHZy1hKUUjnuAAxBjbwBWjBRVShARwqpKpSuyHDK77XWmfSb1JxXHGhW",
  "key22": "5hesm4B9mc7z2YMHL8jeXaWzqjYwBJXZ7jd2gS7rGxzkFhtu5ihwWppssy5RmuVyA59mtN2WBo3eoZoEWrnXFreg",
  "key23": "2zkeRboVmyuDyUGnRGMPgECK2ZXfciC4Bm4uN7Y1Nwon2JaWMv5c8ECyBd6excPoKKFhBBjuexv6WJcai4GfqmEK",
  "key24": "efUk3dqgKyVzrD92ahG2zzDTk9aXqkyBKbsqw29VQ6gPfCjC8Sp3DdUPCFG9Q1XrtyKoN3V61EEtWgdebpCQn11",
  "key25": "cJSfs6C4MkT4YL2WhrQGxB1fxZDro12JaPmxxrTzYwfoRVdodRNUG9ejfDfSAv73qMRi83XKtGvv3Ne9msKZM62",
  "key26": "4g7M7mXNW4MzQYicgdCFFp9RNpyH2ktCPNRtS4uvPCo7WyWsuN3X8EFqMSnV2x9fJfKxnkpoch7GASG6ZFHskXzc",
  "key27": "65VHydDWhNsVcf3ytTsZGzAmHSk9Pck552mHhL2sE96ujqViAtVnDFtK1wT7j5p5LUZiJ9kNusmRLP856PBbEbkG",
  "key28": "3pLgBHBHP3TzN6B5AsJ59hxcXd93NoJrTE4qEyw4UGNXnXPJ5KFSp7TpFGAoz59SCEazCxjbMqgn3jsxsaSndf7V",
  "key29": "59kXiHvZK6SHEQ6zhPH5kBPFrVcBzvZabgSpw9ik991gqzubpuKLNDW5YZza6ukcS7GqZU4Gokw6w4qH7w9oHk1u",
  "key30": "5rsksYQbYwTATXw84gDpspBJRPToX5CbQJNyLN8ounphMiXUn9fjFC89b6BGGLRTouxgd4SAjWBy27CMY8SJtQMp",
  "key31": "52P489wTx9aSY51TV1j9CQMeUbD4hUqSzWjrfgpc4F5cXy5azAvoYoGbcu1CnKs7YEdLnovs1BrTXyfryWzkxwAK",
  "key32": "5K54cxCGhMgEv8a2sxhPdxGmcZi7FTZg34Y4iuaG1DtPhfsZMpvPpG24fxCTmx1YBbZwvWJPDahAZuVRer2ox2NN",
  "key33": "2uwJ5ydgb6nghTFC7mKo1Ur1HaUThnRZdaPiaGyXfSoSrP9f8Moae5qGwKKjCaYNdbtcL4XchQbSnoeNiWYBGedp",
  "key34": "5VfM2B55SqdM9f7giHvvkh3vMrXkwkUBUeMmxo6XDeKK7G3GbKkevd5J1V4HXcRubaqhcbcrQHMa5JpbX2sr4uCo",
  "key35": "586M8yrEfQSAEoAkQTmBTcLeH9SaaVepxieix3XE5arHCUwgpfgnjtfqAwtPJaDhUah22FXcUseWWZPnDQAd84r8",
  "key36": "2WfsK18B6vLSSpUUfgzmmw7JXGjLpmED4ZGrGUtWk2jExDQ4ko3BqMZKn8oE59JQTtL3i22Xc4inriaQ9a5TXquB",
  "key37": "5Qh5juV42SwumeMDy7zMiPqkCkGEZcXjQJU24e5ASKhiHjaVkq5jkqZn3HHCjdJrp3Wh1bjkvHfJNCd3EfD898nQ",
  "key38": "47NNzJ2QfJdhXg85aShTELEN8v2kqesLJR4wGmyF819m4YRVPJoGmgYvs8YUK68mYtN2ekDuYb7GLZBsqPgKwEkJ",
  "key39": "4LuffvsQ1Q4ru8EvQi69xCNkKooQBKa2bmNJ2VsrGBPSHmC6McA3FuCU52mmLxadgfuaYfTPpT6Njy5Ukdk4q2SE",
  "key40": "5AoLNxW2BK8jvzok1MXo1ePSzTpNQo2vKXVBUSNW3gJDCVyV6EZ32HZTRHkfttCrtxXDBCgbmGmzRWjyYCAj2KQG",
  "key41": "48ewrxUPcVbXqhkBHmvirdwBDJpvWa1PGkjfnLdUZzLiekeRuwoMrFMqMrJRE5zih8EmkAJhGWFDkvgLuhhcyfVg",
  "key42": "3ij4KzabCJ86YniNpoNL6AGgVHcaTSypLqshqsren64CKTNXqVpGX85xN2iq2nXoUWgNxpCSR5oek7WK3xPDquy5",
  "key43": "5UymfajCDtd168Dnh4Bu5QcX9SJwTLZKb6fN5L1GmSn5xVT2EgGHvSoETexgApk13F5qeeBkcWGTwXpc1iyB3Wg",
  "key44": "2LJszfZ1FgFmCssK6rrCGKN4WfNbUnjUEw79WqkqRsjDF6SHW8qM18sPKeEd98Zv6iu3a2AseVgtaRGpCZW4nzDW",
  "key45": "5ojJ9AhQP7UN25JgS5kwytmi43PUNfv3P22vaZhaLFWRV9Xt3Vv9b74YEm4ieDMLmMKdJNiF2g5FSU4HLQa4Tdwd"
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
