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
    "9to7osTbhZsCZvSebB4x34ECMBMdrQFwQ9X5oUCu4tg3rvhaRt5vqraW9Y2nqiQws8dHL796E4FiiPLPXpALAWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JCRQQLEoMfZoPiFbpiimDTJq1Jv2Cr2gWzbTi7yJSjjW4T2YndB8toc7gvMaGstJCYrBes9MQ5rdHmqwG6T8YLS",
  "key1": "2RyHz6uGDTyKMp9EvTCxaewJ1PLQqSuC9KyqBiZo3U8pTd6W9q3EiozBkSNJzt2A78Wj7h9WTBgPqi88Gu5V4zMN",
  "key2": "5asXU222xMUDTenW8PXvEMZNnjTnXcAqiScPWfeVGvsJxitgDjR9AJM54P4a9qKbTvJk5mrcWdJi731srPjJ9Pzn",
  "key3": "4aeRCEA6ZiuMjBKPtCY2V694LvmAcxYHq7KuN9v2FRXgEuASAKL3p43yx3mPsfx1i6VMHNuN7nHzzofQy5LvYZve",
  "key4": "57jeENfJ8jX21bUdFGkiDXLHzkyGP9bf1RnfAJzzMTrk7yDc4RGz1ZwDCEv1YXCGg3s7hnVGDf9Dcrd4eh4hVpiU",
  "key5": "57uiHPCS6m5dp84SiUuALC24gCUoBGCz1qZsX3m8kuQ2fnmzdy7YUKnJmZ4KdJ4JtSAwkeaDszV9Vx75vDaf5KE4",
  "key6": "3jVdEbMjZ9RgVsr4ihDBkvf8mCxz38M9c9DeYA7TqDZtaGPTihPKxPS95C65urgSeYTuWRdL9zGQTH5PY7mnbmUM",
  "key7": "nXh17z6XGY1uwgsKrGyaCLfQPd5T7iQMBUSsTvUSP5MWDkB9D2qDeVb5ABTJiv53TsqH7p6Mu8bJzg5uPTnVQs6",
  "key8": "5LvD393ShPhbbi6a3TnWeME1A7hVU2jvQGVQKEKjzgxEuFik9ReztnC1kBG6HLmXeovxXMz8wZwEFRHZ3Wjjcvgk",
  "key9": "3JGVcKLegbBKATeEJK4LakJwsntJNDdqfCoKkNFsh1fagsJDpWvSMYBpnBH35VMceCppQCnp8bgzSTPjdzEwMBDq",
  "key10": "39TFi8vJDn8gH9dVHcxPZc1GdAL2i7ZJyg1aVCG2W1yifSH7Lxi5o9ifpPtFjimVnEcm3DuZG2hMaEpSqvtQ1j6R",
  "key11": "2bTenvC7q2chdMxY6SFssg8o5CGi9RQQEy2HQYtrk7e1LKeBWkPfxU6ahbV2x2bWwcoAZs4W75XnnFDRTUnZYSry",
  "key12": "2194cRJo1bAxKfQ8KCD9ewXVwmsVii58wPYT8xYccc2MbQU9885NYmYMB5UYLXA2Y5n8DZjwaKgCr9QLxgjsdunx",
  "key13": "3yMKEYNEPXsHkmCNJWeBBpQjtknPYWeb6A5RsXGCwwBcU5opcb2AyjWZvZPfMYaHeMMYmg49ZzUq27g5ceTpRktu",
  "key14": "mg6hnYGLnS2ZawThTkE8m8nmCrheDkhwZPTCGX79hVXezGSq73ebaT8fBpocNXTveHn3fKMxTv3cbCNeNu6pVHk",
  "key15": "XcvsKB7YWXJ5zd5CNHEc3QjV2bkMxFbgYSyumPpsBCdA4mVpV6ioD65fa7Soo75eCG2cPB6zM4YLKNWsiJGBPe3",
  "key16": "3svBoLHiUPPZohNdrg3rjuaj1GnJA4Wu8XpHykXnXTNyEwdSaVTpej6vx3sTfUTJVfT6G32GnsXFKk5wcV4ApMc4",
  "key17": "Mj6PSvib7grwi6UbZs7FeXUyjCdRtzSadN8PEbDUdPvtQPXiWCu9awkaSg1apfbxumN7wTWYswKAwmhviYxS6hL",
  "key18": "26LoKNUV1hHDZLBSgU8rPVH9ygBLdvvSYxZxBzFTUF4iiCkG5Xhr6zZmWt8qjpx5juYU5AWd7Ng37tpELta1T1RM",
  "key19": "5x1z3FLTpo9btXfg2jWcTq3Xsrd4isdW2AKKxp5wMegJbBYyQviNoAXkXKXprx1YZGtBAvEu3m4VwMUFfwbkccY6",
  "key20": "51ccNAKNDjWqCY3smKuchJuwukq7kqJ21oZEJPjafBFFn7UdYnT6hj3j3G681ikYRj35yKRnziJZWfK2wTMg4gXZ",
  "key21": "54j9aCGKiddNrQEN9vfDywmgZwKcdjtDhhWppRYT8XjPpYkoAUDKf8fbNpXg4ULRAJ14rxEes1aMrH3Xmr27YMa5",
  "key22": "27kfYSMCAJsLjkD426BL2ieuBFehsUaWYExLrEG1jVZQEAqACJP2yqJWaUStMH5pkPtCQWuWpqhCy8Rb99HCio5f",
  "key23": "4yApYfJreac7K7NHj1dbAVPKC5WQkYUtj6GbJezRx5mpBFocvvwhEmPwTFoggLBHX4haweF1ZZXJh4AbTneGkmA7",
  "key24": "5okABrPSgqn7sFZJyTeYyL7WvCspjU6b68deZaLd48dzt9m8bH9HTNPZMvDr1Re3bJqPQkQ9ihkX2yCv4hWvStp2",
  "key25": "3hY9vtSjFbMuh1sHcnpPkowNzQvWvNPFYPNGFgJQ7tjgDkjrYenD2nxMhzdVWt524vqaRvAF4gEtEHyhcKGwL9jt",
  "key26": "5CW8zJEVw5J4iNRWx1o2gZqKgpHV4cQUuhhvdA7x1NFSb13PnWTcxsvpT7DFkC8dojUf5nGUKnjNcq8deHxAtrr3",
  "key27": "2jApw6zhX66o5ZnVvv23MqAd6sBoufMPyK2EDbf9fPh1n1jn9ZnUovtPTnLwvuu2VpsvumpyzRGMhqAdMFWNXJLA",
  "key28": "cxiQFWHsR1Z7NuPP8FomfVWmFVW1TRV751tHDbryjbs2VWpSJzzeSfx66DXZ7Bhoa1XjX9HvbrEwa9hFzy5NYJ8",
  "key29": "45jmmLf1zpf2gmJzTEGiLBFBmZ9PJPk2c7tNeajemTDn5h2cERuqGdwHwe5mF5u6iwEJj2TLEXxpDihGfY8thEsc",
  "key30": "EqgNQuqNRKUruo4fjRaALB2G2qs1rBss9qRLDd8aiQm8VspjbjabWQ41gCxAAohJRmmd6eLF9yLm4vGg94R9fyE",
  "key31": "MMGK3HhSG2bKEBeedWz8PWiy8mhB3iXhJ3PaXURL8U2HRsd2G7yQrvTZMMaSQZzkugjeH6LxaNqSUYhUCxm4frY",
  "key32": "4ZPCipfgb8B2DWMzbFb1CLKRANm9WgsRBoK4Sr7wM1n83Ehi1UR47EdeSQonHMjerCaLMEAr2GLvzFnmpDB9LuUi",
  "key33": "4E1yPcLBnNU2zWZzE22s4BCeXV5rimDmEnhUJYRqeDxe3fwXG92yhijPPhV1cPEdwZNFE2pim5rTe1eQwrki9wpM",
  "key34": "3ZRV7qqjTLtoJU8m3YE7JtEjgFvHZ67eWV3QZCep1vPNstxrcUniyWE1CBopFtVtTNwD4TbTEHiCPmYoG5zef65f",
  "key35": "46mu2EwRC7Nry6je5DecSnU5hrsnjCFqyni78gEugZNEGUechzrY9y6VePymFLiQABv88GWXoRPfkodn1jJPvYpz",
  "key36": "Evax5ipEqxHZhxJkVnAks7Gwf8sexsZJNur8QgWCWjfwaE16NyCyrCphHC4emBg2KHsgr3YnJht6qcqRgjAMsVU",
  "key37": "giszQ2TYCMxRZTKYRNznnhVvA7p9iWzVnzDKtqHgjPZ7kc6sDwzqq1gk4rjXw4Vyp6XWquwPyUhDdonCcfg54d2",
  "key38": "3LAHPfFXeWKVDPfv7q2Hc48GhjSgTeiUEhZrSWSVYxKe8FUavKwwUHCqzsZqiMHvzw8S7wLZdAbxqm4vMEyn6Pcx",
  "key39": "4QLFnpKpjzUoTWiQpTL4EJxaNu4qdXeFfcb8XtgwXJi94ghdrcZqq78RVNSwd7aTYiDHzy6NBMh5rbnXgDSWWGAb",
  "key40": "2QvswtWkmMUVYkfsKM5JyNTqobuRJWC6BSt3AobnTU4KjZsFjjTvS3GUSZscGDEvvcAdu28pSgLbN6rfuvmYAvsU",
  "key41": "5tybZYmL1uS5wd7zodFYNP3hh4Fcn8nNPgR2mFaMiKMmorrCXPVhZiP2ePqFogNYP9CR8mMYVHfYRiLHT19e5cvp",
  "key42": "5cnWEShpRRzrHsAUKumrAuSAbABrJ8BCWzEdqxLoDDwNK3zr3izgZ4NPXsLBdoQn3AUNNCPEaQtb2xpuWHCyWJeC",
  "key43": "5GMi3Dxy2BWkV5jxZ683gLRF1KfEGxthZ4uiuckxTnDrPKdVcRGRiRPQKLqMHGPrmGcuvgPfrn2VDJdDf91cNuKB"
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
