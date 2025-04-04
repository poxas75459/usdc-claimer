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
    "5ddyiMsxoiWFL3NkNEXTs2p6SPqgF6RtRo9KHjQXLQMGMPsXxF1c5FCqGnQkiGpDt55ne4nVc9T44zzrz2Qqs6Ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qr1j8oZNC3uaATabyfirao5GgcPD9RUJc3BZTUeNHzPE9tptCr78oap9zxELxrQgjj4HN2bUEAiUF9bpfGAo66U",
  "key1": "5FBDuRFCjWf8chGfYcMgSe7G7j4BKV39ydN2LbL53n8PGkw8ke3NBcFCXk8WtXPWt6EZCXcEGgprb5mw7iAjfZqs",
  "key2": "44GU57V58dLYnbonGvXMS4hHAXx59vH97yE5rU8Cfa4WNuidGnQ49bY1yrzuvN8RcXJejeznsXrWWQjJo18oJRwD",
  "key3": "2k2V4KCAA2vEBsLLQ26Hvv5XaziwM9GNZBtuvJnUgud2j2remqpUWuZ2V53KhPUNcyjiPh3BKMy6YNDQonaW6x4t",
  "key4": "47PN8SbjBnc2JNnYi7cm21PBPAsUHgCrhKgXdqrXnAtegGnsSzuErPCf4oGyTxWg8UNwi1sf9cYPB5sAhQHQ5pHa",
  "key5": "67k1ThwLz6dLJ4KexDeFbt4SRmLN5u2hPXKW8L5MnojUZJgUpR7dyPHfWex1YxqGtPXXNNKgz92JeZKoyWYo54zn",
  "key6": "mQiKT3maPb6ptkDpeLApRk2myVjECGMCZdrcTNJWnySN1MWC3qXnB8kfL7E6jkbUgHWpQHdBgSazfFCW5UPTcGE",
  "key7": "57nuXBAXjTf63nwngk6PSfPBPEFhwLFpqe8TGXWHBFwfxvQDiynsEzMaEpZ7j2Vg2CvPK8nQPDBENvdvTKU1bKDt",
  "key8": "4JaxKXkHguHKCtDdReEshHsrSCSnxn4uEnCwXbCf3x6DZeGoVpqgqZfnV5iPh7UFFvMXD3gy89pbQTyGFstbwbbP",
  "key9": "EY6Est2kjScWEpLxtSgVFxhbbZu6TSdEThPEQqQUWKZXkCTVkBWNFgSNRgQMih4rAvV9vYZPdXMrP6CtNirF8kD",
  "key10": "5iyDpJNQ7mfs6peaBdXa9DtsRJjbvBwsw3tjJ2ptsxYfxKMjX1dvwWhuraXDP2uocyzuwCPd1BxZUpaaRSmfgBD4",
  "key11": "4yqqeLz5eR1NKo4DpTBdbzaybEwL29QrByRS8KfEcF9tghKrFnw9pKBZFtbjanGWf5h2iCXPHYUDCNk87ejf6uRD",
  "key12": "2q8Juh6e62kuCW8mHKjK7G5Wutqjt17XJ7r9McwRz9TDwbaYvzaFoP1bD5J6hMZHTJr7i1uG4gxcWooBbEsfS7uu",
  "key13": "4RwCvvwHyPyhurZkyFCi7XnPaT5pdkEB5i3AJrcJvAamAUy3CLmBTwNFewUKYPQrxazEppiu81kYJZ57p6SPXhh8",
  "key14": "2jPHWnbVaMjQRcwPpbAnotHyrWtBrVuQCcVScZPADmv44R3jbYb2NtqSczvAyM6MDG5F3yU2FNtVegMDhxuH7me2",
  "key15": "2sK7pEN6La4LKMzMZ4nbg7HoEXj25SK24vy8GdiSaSGmyZPkk28F14MJZQPRvxqT77U2f26h8hWZcZtQEqsv6XVq",
  "key16": "2atTohK6MmfAK2bTAiLisYywhtn11isTLz6b3gWojoXebqt69chD5rqh4NezFY54x7rsyayKrFui3YMizZUJww73",
  "key17": "gFjUM5SPZKDPo3K3BsXMLZVq3hXsvdWQYD9RFe33fzokbiSTSmqwQ1BKtka1QtYJsbFTSK6xoBj7mx2oqzj2fCp",
  "key18": "3DMxXH86K5vjanyz9XfhCdxV9kFvLPsJjAQ1nU95jwc1vWqxrQ7JpvPyGLi7x7foc1zPr7hHKdU536Zwd3yaKrN3",
  "key19": "37dMepb81f9EZApb3bFWptc7WawxZ7ymNLTVtdXnaBZrZocmRZD4ehzMyvXgNPaUkxCBZappJLmr7nMNGMoMvoCS",
  "key20": "3vnLcuhmrTFHb5yqsgGYtYRE71V3hrEmT5uQBJzQUmuUW11TTJke8QvN4UuGnxpe8qwuiiMoXdgstqL5mLfrULXY",
  "key21": "5pCm7mPrZ8Zed3CZL1ZHfbWjaSu2LfGAD6Etzx1UFnnJiG8jbzvGJ5mRTL3hzwLVYxFewNKmbbenRjirQJeXytW3",
  "key22": "2neEkGhiT4fiTVEd1Kdn88MBFf3FiA1711aH2oY7y7V4pnJv8F4shnjDQTEkvCQRAr6xD6SDWszr8A8YEunHDHoE",
  "key23": "38MzEHaiNviuzU2daz8gVzHnqCacyGSUTohCeGWmegC4ujLm8AvUp7bzLZMHnMvS9Rga5aGnC2z9EvbtS2MC7PsN",
  "key24": "2Coci29UeNTyCGtCbopzJ2bAsgVeVTVSDjB2S9iixpSHb3Jc9aewMCokfw8JSjVRgrBCwHhAt3pJmGQpQ7oq6i3u",
  "key25": "67SF31uzhL9C61nyFWwA9SHYdWSRhZ3S958DXw4Eh3idsg8ZgkeEQHxRXLpwNw9D3mxNiNobYwxvViPUycg1tghL",
  "key26": "5Af46UQADcJvdrLFmp2wve65Vc86seBU6stzBcpRdMXHaxpBX4bmTKxgWLBJuVFSybcDtTDC9s8g8N2dRvsh8bCa",
  "key27": "573EvBJ5s6YjSwnxW3panBSmBdKgfa44rTEtrKfBU833gLcL8gAJ74P3ow8vt8qiT9A3MhQ1VgWHUesUYdrhSkAE",
  "key28": "Z3LrAZBYYN3FndZvKSbWfBhnMPTtESXdi7mPm5CvKaVQRa1bwjiuu6MBCnWYhRnzd9UV7hSNNoQDwTZ92FU8g6H",
  "key29": "Uv1EEWut4KdJpY7yv1SDhNUK61hZjSGeFUH1CTqgfouhkaxvtdwG8dfBW97CBYwhNHFQQ8a4ZnGvTtHcn2sF6Gz",
  "key30": "MrypbnxknVZCANuC55Aa3tnay3Xv9pJKTzEsqD9PFfsDAp6z7F6ZRww64SdG7EDse5PPuniRfzFEuejLzBRyH2a",
  "key31": "5VSXFMSVS4tFVBi5DKQZ7agMLai4adVs9FbUCQ8hPaonHT359psxqS9T4kLFSTLk58KWuUezFfCujVwWAwq9qU8B",
  "key32": "eSKdzyNmiUpvwFrSt3SRmCoSKy1joG7oLRayi6k6uZX1bLyvLcsDfmwNfNdxnFkfu1YoSMM6rikZQJL9EmMQsN7",
  "key33": "5UQmVib3FxAyVQ7BAoxq4PVPFD1nTZmAFiiAiJvkeaUow1jQLHJzTeWh62BcpVtrUGXY7Ewa7qMs8SK11KY6jMja",
  "key34": "5M3DfZZdzkCSYVy4zdvZ2ZDPLAaXYidRtb2J6jk28mWtGECoE5Jj5CRDhMbPKCqhfnuSmUrY9UCge1sNnRQmGxRB",
  "key35": "3pWaJKMySXCCGEr7AES8JVVpzQ2weRR9bPUnUaWTrZXauBNWWrA8fN9MHS8j3N7BKFpZePPDNYfR5d9KBGRzDBSE",
  "key36": "5MymruYUwkcbuPAi37bR3c9nrPFGiTBhq3qpDTP8UG776UVVQMjZoKbaG8kXUkY1YB5VQDsTNFfVDy1E8nvjPnQN",
  "key37": "2LsjkMrTbzMKXDHocvFyZvtL2V3LCsu7NPzt1Ns6uAcgGPKHa29R2w2T5emifgVufvqwPnjUB9ze2kgHH21iYfcc",
  "key38": "58fKaFQzgAv6jitBSmVgxzVsyXVYcFeqeDepviTY8KaBDdrzfKbAPnF71VNS9x8wmqDNDXkj9nHEqmAZ1gnia6of",
  "key39": "52M7R2QCR26ugohd6yeVVZo5TuTgz7fi2oumBL6HhXdjrhtVQFceWcTXFLmobhCqjidkmj5Ut76aB5g591gKVWDu",
  "key40": "5Ni8mGcctdyGwFBg7PbFkmUMdFeKRpnsY4GZPDq3cUQJiAXEu4hdqtWMwp852xeocJ1h5nbes9gQ7p63ryjr2GeY",
  "key41": "291yeGrbToCwB5EK7xz5yRfqH2U2wgX7XG4Xz4ufSDYuh3GKdsth3SixC5Wf5inNXH6bvCMQnrKYY41hqLUz3JRw",
  "key42": "7P6zqXwJLyQqSW2GFWHS246SHv8EsfujV8rDPhu7kLLeUyzse1Mg7rhQ35Y7C3JPAAPz6xQmtnT244q15cDB3WT",
  "key43": "3tBGqTHqk7S9hytWPJ4YdJc8HVWX1dCRhM89cXXYd4JB8FMGU9hNNFKJjbmzmewh9daHK8NkSV4PMTGDL88FTv2h",
  "key44": "3rCjmYtLFKR4EtYShmnEStMQhUhKZbf41A5bvfJcxKMjePb4611Yowfwc9D2fU16ZNriyz7Yokhpn2WfJTYvL9vt",
  "key45": "4Bs9n9TswwDHYYyMDUQDNnQNvSuh3TaJtveGvDanTkpEfKdpwvvtpu74EVPgMtM1iowyUJ7a6DsJa2ZaDcncHM2r",
  "key46": "5cyW6LA4WxhBeUTHxMaQ6TrSnVTF5VjCBpubKoimvKL83mipyubmfaBMxta3N6wYDhCYAe4w1cCC1H4tL39WDgbR",
  "key47": "3j9TmHiMPbqH3gtF858k4y9wE9XvM4Gz6B8yi7cEiRqo7pBE77DTRFt9Ftz1VQiAGajhCztfrYj1STmLVcojBhgf",
  "key48": "2n4tKY5WSDqps9CTJ3Gic4Vrgom4jHgRA8u1LgQJXiDbEvmeRetnqXYUu2uXrbjL5crbaYo6eaYcc3rttRwQRvMS"
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
