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
    "573Bgqf9D82e8tHiVPe4QcbRzoYYDomSsJTJWz9Tk6TYQnoWqPDFrNJ2zH6YXAp7Ype2kHaUqPXtBjhNFdZvbVrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ypwcv13a6aVp4ZqwbEGhHLxe2Xvys4yC9zwDgTj5LeF8DfVsd12ehbr86ocTk6BgCbWCj2wPAxgFRt381vPF3tQ",
  "key1": "GLQsuhMMUHnEP9EeWhFDiYWCBSdn2ZfUaCm6rsHiRvPhQsNCKLrpCJFgZHnEwqNVCrQc8crJKzczRNmNhLPRmxN",
  "key2": "pzw72U9fMaNMQWf6HXY3DPq28PF1hUrWSZga15gJ26iXWA7b2ZqGbSC7F4u7pa7xsocDCRPeKSR52FuAvDqHE7q",
  "key3": "5LrAzzikhiNhnxc5VRkRSjq2fhcJMUJxB7g31mAx7pUeQkcU7fkRZvHmVjHY3AtDHBAagS3CkXN2W797DD85VKvD",
  "key4": "3HcmKbaNYHn5T34Jj6XWp8c9K4FmR2Vt7GHEEuYeLtag3TCvFKiQmiuZfNmSB8xBTQzZ7qiU5V16M8wHWRbnpmr7",
  "key5": "7wy48uxAKqSFVjoH3R8cDnjg6b7wPWJEjt7wacvEQsmrtv3Xqa745qPPFHjrC23bKgzG7QYUCppq7jupZ9TK8Zj",
  "key6": "5mvwp2hDziwhShEgPNxBYuti6bnhTeCMicWVrrMCdaWpru7f9PsUGUVvznv89AkbQTeWGdavwcBdnFYPrhN1H7st",
  "key7": "3ME7ej844p5brmMkTiuJXbMdSgReuCbvzwYghzBP6aM7bWryJW9oLHskA2Bohs1MmRWZJo74ECYgkzpNw8kkEo8t",
  "key8": "w16CFgfCjg6VCGXp5fCYPQGstZNimobPq6pDwCpXv2AUECTyExLngLbzBNF7uvSnMC814EwvGnbxn7CA8xiyzTR",
  "key9": "sbvgyVoig9whNyF68bNhLm5Trpk9XcLZVMDMtfNbvHDQ4W5eh46ZwasvZQFxqdKMY2Huw42Ku23CuimH6vvZX44",
  "key10": "gBicKtNnQ2ZRJV94Tm2AwMVJkonQRb8mAfngvb2j4oTKzJUdbziPkALe4k9gcVNQeMpnBXwEoteidkkpVG4WusS",
  "key11": "fNWqaesn3xBrmHb9ktAUxQBrXcnCiEvYHByDXqiZboK3KQH93xKi2zVDzdV56Zqv7v5pgHgDdYf3nJeCswRAjiM",
  "key12": "VPJXFtUm1EkUHqr5BjyR3Sa5eK6HuMfB5f8HtEn3jy4Evn5n9199wqCba5dFnhEigsFZtX66vuuYNh4H5RN2usg",
  "key13": "5Ct62DkyHgEemfS9DtpdBDv8uYtHUXeZrriAWGfBDDoXaADY1HYijNi5vRG5Uox7pRrZyrL8HYqicBp8ag8kg2Cm",
  "key14": "4LUe4bauzFoN9emnbtXdWD6qc3Co2GUiTY1aYW2DeWwdepLjjDkLEkUTbE2KaKhvgTgFEqdmtizqHYSpYBGxaFZq",
  "key15": "4hh9QuP1hUdM2QNEsDtSRvaLKUDfaCjtrLrKpAU7pD16FnRgzJ1vjPZUKq3f7A8ni8BPD4hmkRtJPPQ4tgNautFb",
  "key16": "39PwunpJy3NF1CHZYh99W38A1MdWdf56RstsbRzonyRpCNVAg748ENz3ib6c8urEfxbDgKLWwGzXXgLXdcKVxQL4",
  "key17": "2kb4isTYxwws2NsVVVeAxtEQdjWntEkAN38i1hhZKNkqgf2YxTyvnxiPJs1FeYVjA1AQGFPL3aqiXFQ9ghEa9MtM",
  "key18": "4JQNjBJ1qiptVKRXqjrAMVzgTr3fvgN6c3tkQEcDcg3zhKSXVyaUZwGe8pKvwCMFRSSCPCbs1MJ2Suee2cc89iJX",
  "key19": "3bAPaKp4VwiNTSGjap7MFaD3x4h1KJqNUxiF3vPU2zRuKWULDNfcaH5Hr1hvAhzWK6CYLTANbbDwHWqd2W3wX3aP",
  "key20": "59maZp8w35bNGfemPBocscfHri3hFZFuFMzSFAWzCzhiZQ5e5XKKjMKHkQBhG9FhPtshCE1pwLWPZxxJFuWxLqJN",
  "key21": "3FQ8qtQpbwH8NfUYHWKUqud25WBFTeUgSXKr2zVnao1XVcBaV5cbbRyxCqQ5RQnAnBGUQKSMy2RvDm1cQdFezgqi",
  "key22": "4LsWUv5u76E86yp87XVigFK2RjFsuGuBrKwG77jhtHtDf1USzvJM2TVG7LGiv9Do8KFaHWEeDnt56VRvToSCF6bq",
  "key23": "D5VtPNs6aQubMXz2SQrgUaqKob7311GJNk8zSz8ZyVCZWgkmJS9eZ7e6XTbEVFXHm17jg5T3mQJXrPgSNcb7eiU",
  "key24": "4vnpP7r5ZWHz2oxfed6uvuCaqwsAWvmYhpUgrR8wKjSk7gboJzcGKrxqpB9a1dWTUJfraci3K28woKojCHViqTx9",
  "key25": "5Dpxs9tWoGi2LuyVihn2BTTxVdiZwMPNdnc51ECH364VU5LfaDfXxT7JdtSds4yTjXM8sXSzrnSjwDYV7v2ivNWT",
  "key26": "u1367sP35uPYFPPZdV1q1hX17gotKn8rEn2w7bQ9sPPUvVE1S1nAr1xuyVdSPAxB9jxF6BYfN23YVnzNSWRZQaT",
  "key27": "3rLRV9C23eSGmz3sJy2CjjwBhDn8GyVsHp5uoUWzjE5nnYgWKeC6YcCDuQS1vwSQQbE888AbZCX6sF138c78MCXN",
  "key28": "3gFuhmUFx4f1ZX84hMLNc1vDDebeVKHqxjDiYZ8MpXoq8fsRUKMg3adcaTZESKZXgszQ7iS9ZJUQu5zYfLVyh8Gr",
  "key29": "3NsoJmXHru4eEx8mdPeWhPdyMMsMdH2vypqsg9B7AsZ2PW4PqLi5Lc2GBhqZcwhhJQUsq6Lbi5cKMRRbcvRMZukV",
  "key30": "4fr8ZebHbmE7QvX6Wb4GGDrAKV7DPbzQDCcVES6kHUfenmA3Js2EjRAPaQhkyUrV1e8D2P8r18wjBjxMrcgyqKgR",
  "key31": "4zq9j3ErUBxcYe5WAJANiRxW3FCab8veZpjf2AXftJVhpxRL9VrKKptkhnpxpJjppBkZZgo8NY3cQVVRE2PM1TDq",
  "key32": "41kfYHb9pvaevwQwLPzSt5Ge1UntkMVmeKyKXhrwjktPaH7a1EdH9cAoMuV3hiFbdZYV7DmWeeLTJoiNFX8hAe8q",
  "key33": "4KHoAr3JyrHNS7nm58E6U5syscmWj5hdBHGviUL8htrxi6F1MtLVVPWk18V1BKsn72ZhdMKHmHV742ns2NE85828",
  "key34": "3ca1yMnmWFcTsJaUhLmczJbQUjUjCxVtbwERoebtmgAwKqmR8jSMmb57sUo3fd2QCPmNFsFz8kKQb4qnUR29dajk",
  "key35": "2mYx4wKuhN3J1D1LGGEh4RLavaijsWVa8WrkbrSWRZswNyCQCF536ZaZBiZnJiczZwezcbk41LhA1frVEN8A4vUc",
  "key36": "mPpxYfiJj2x291aQXAEYifEWiwtWFjSiuV1Z3ioaYYrRbUiZov4SNei4GyPJUTiwVZcYwyKQEDSAGrWpH4xdhdG",
  "key37": "2C3hpbDrCFnDrvuvaFzQVM8pdAjdNXnUapJHjqL5y4bEKsz5466BoEt8Rpf6wb2c26pk5jkxbuJzyFZmsg1HZJiX",
  "key38": "3foksAfcCrHSRyWFqsEbyjABZucByuTVRd2ByKxFxB5rgNDnSXhdDjzrFMDvPuC5H18unbWwL1BH769hj9SeoDvL",
  "key39": "3mJwAFTKCLz2tUGrxyQG6KJJnknxHVxdPJ9BknTNkpMuGkvVxjav9WbceWVTuXkmPC1bZppUmLLruPZv3VXYttbc",
  "key40": "2d9fjxBPkHZJxJcjN4ZgCASP4H3JEQzzUPcrEgLEz5qReSepPrevBaGwXea7NhY6a62fE89NvNWBxFHVeKuWK14Y",
  "key41": "3rwnZrh3UVEEM38bj9CEVU3nMjSTCB6aFV1MjVNc4KXXCVi4WWfcWQUG3SzFzJjHkL28tYurthpFw2b6GQDGWPh1",
  "key42": "4FP7TdopS8qsGv19i49LAC5gSJPAsGoEjvxT8v8PdE4TnyUv23Bacy5gnybkpgi18sm1pnBL93J2Wk8CfbSjuaC",
  "key43": "4Fqqna4Yr4hjNDX74JxjDHdJRWBX13jr7dYB42JvktextYBMD41yzgWdMCuDa6CAwyv2QDq4yXbLr8fVZoHnRHbz",
  "key44": "nXPNUpeUJYrKohigukxnuKeXNFf955Z8pz6j62Hg1gxGgEicgVVzmaxVLEqbPkdKt92YGMVfgqpVCBcp4yaNBme",
  "key45": "jwgA2dtL4f5hfgkHWwnuJxx44RvTKD8f4JGiKQCVRnDQnVPqaVuBZgq5PVkhnzkfYu1JXwc6pj5RH6oVwcKiEhz",
  "key46": "GtcZtYD4FZZP7xbnKd3fVV6jvYUPNPPcpxB513AV4ytCJzUUfjAiRC8negYKavMrL4PRHd2CoBEL4rH9kAuDzs7",
  "key47": "4eVqXXiTh3uHSSVCUXobMHJKCvs7LPog4JrnsfY3fBxD4ztnEWFBLDa36ibxvEfW81J4d5hPVJ1NKMsh5R26h315",
  "key48": "2DeRdgMfoymqxwGPg8f2FL67G3xmToD1waHkiihP4HBnsMFD8oCdzuov4xE8g2DfK8YiJjw3BhuUqFNZj3jBPba5",
  "key49": "3SMzicQqbvuA9QTJsBjUJwCgUqsMSWXsLXH6D5SkHfiAAoaYCtP7kzeXdgP4AmMAozZ7qDHWmYV48vuzmv3brkb2"
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
