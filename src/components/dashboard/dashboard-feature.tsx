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
    "WVukveRz5Q4vgoyQPTb6WFgRN789e9WtScf4uSe4VegnPrdLiUoTJaz6RJZRhJLhnD7NXkcumJvLBYFyXpfUqmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iCMFBHe4XnHR2HEgSJ1CnusL96tFrVh56gWFuFFSyX16BJJNcqL5UeV4XbhgxNeZNvod6sMYsLvLFij9nbBkKjM",
  "key1": "59GbEKd9D2utBainhjnuwJ1tNzVcZFVGNyx9FqXTh1aWY21F8zfFnSgzX7ckzit3MwC6FXGU7AKAKFtwW8m5uXy1",
  "key2": "3AHZPA888Ekb8mD9HryVuUohCHPiYayUUv7WqaNdZYTTCmTz7bmw4PAWdn9VAsgC7TnBsDJjJg56nxpwJV39TY7q",
  "key3": "4hrVRvXXnkMKiB8Wfr9gCUt59jqWLvtqRBRGn9da5f8j69sGkcfo8WaaYjkiH5d9giAuN5TRmQYA3mxK5WJnE4da",
  "key4": "3mMzqoPZvLKwTpbWbNJW8yH2PoMMgF8V9J2D7pSQDeGZsZsaewCm1RakrddnRXhLjaFudXLzyKNuLR8cDqM6DAEn",
  "key5": "EDpsoFQuHS3r1yK4PkbVapQMTKVFfYenBChm8FAp5W6hkd48q3g9yfBEN2Yf1WSU914iW4Uczn9fHgFffmtmGj1",
  "key6": "58msYgsBshaAYPgvUyN6dHnS5XcjYWZvoSMHattNyiFc79NKgke2r42mu4ZJzN41RGRTww7yhJPQ6x7bGzVXT8RW",
  "key7": "4dDs7gpGQbVweTt2zgJFTXXuXsYgYjvQ6nZeuCur39ZeCFQfeqNTQmKxtQFTDxm1miT3mg7kMSuQYvb4w6ZffAyt",
  "key8": "6dCaYHFBAgktp8m9hE35X6LUsNqrVz6nmFi16FQM2D3mudF3VxsC3GLXXpeGq8hc48P554gFiHM6jD9MFhUpVxk",
  "key9": "fA8Ro4bAoxAwUeHHp3GvDirUycA9q5gp8GsBwwvqVQik7WeAZbvmrB5HhgtZM4MhQkYx1CzReo3JZ1fFCYEigtJ",
  "key10": "2bYSrW47aJDfVvRYfUWoTKwbVZuWzWBoEdeGgQoAnJ3PFhC5tFVbrCpvdrDgGULnjpka3qfFU65SvSBtoKXv8roz",
  "key11": "3Vm5r9dUoFAgg2eHoUn1P9xR86W7R8mgSru1b7Ji9B6ajRncVqcAi2G3kCsggosDVKNZEWtExX7XLyM99ubFHDSW",
  "key12": "Tsahbb5iePmfpZRZeXBpyDPGBgA5CkxKKH11Z2bEEZYJS4AchUAcQtR4MskXGusWumj7MHeE7fcw8u1x9AnV6mL",
  "key13": "63H7rUmFYu4gKNBbmmb8ocDdAPbBttYhR2Wbbh2UbnkyhiH5guaW1GomxZiApeWWRfnUs4FUwdmXQkm5uy7zLCZw",
  "key14": "4GE4XFGTNcw2nHKCwcvxLMYikuFLGuKDJ3tx9Pq2rgLaNrmPFJaGF1KaNZidJaExEk9ydRH3oxFFLG4G37Wos5JS",
  "key15": "5nzud58oddxLWNHzstVMzb8pG6sMs8DV7kRfoaaZ4Mf23BD7dRDo2B7xEuSiayraNBWeJDJNyKkUAcQ255tC2Ev1",
  "key16": "2FiwaWX37boiDLqsWPK29tfhoFS4KJVEBFtmB5HDbu3MZ6uBLG1pbFnvJnW6Ub3xX7GbA8cvMXwrXpkWjqU196uA",
  "key17": "4TDZKG43GLX7JEx8Mh1Kqtpk45JkpiQNR7viw8WunBk9D1ky9kiweBsvR9BGntjNijNE2EYoqy78XAHcaByhKBeq",
  "key18": "5VA75VYiKkg7ERn3P7Mxwu7oHmqNdNZFw14otyeLbuMf8YyNghUGMd25ZZ3rXtE3e7bakETXjhoGBECPtzkv8cDJ",
  "key19": "gyQs4qe7gimKh7tPFQyb1GXgkP5Hd9oFUKyYgALQmxh7Ni9zfoDcPUHricFfAn616v622vJmRVgwj64XgM215Jx",
  "key20": "osDcDD9yruAhsrw5X3iDfi5iWfsY3693Y8N6VFcvyAEwjvmnrSRoeCpWciWFSFjDS2JBPfJMRVNU6Lzgo27pamQ",
  "key21": "3vboigiU9Nn9sFvYdVSvTaCnQpxh5CcTFerzE3XWrSbWgEMHNk1TY3oGKAxzvHcy1G1NtvmRrAXAuYvMViRhHgDp",
  "key22": "3sSeBSfY22PfBNr4N57GQwoiSbgJYGkTqCWRfEAFLysLkAsFc9YvjXreMpm4FTEj33r9cyzBqSZpGZ6NDt15nTMP",
  "key23": "2dZ8w2LpayjNJLDXSpQJAfEco4yAE3YT6TVQLR31TdiWGW8QNAUCrsEf2anwXHvamHuCeapQD9W9rwr4pVSyTZnH",
  "key24": "4ffcZEWsAxrBzCFGjHDgdTQN1hWkC9ygiSWjbrP5SUr9xE9T39wZEZ9WdCixwTe64qGiymKi8cX2CfC4C3XsYp8X",
  "key25": "3WvCGYA1dCWWwi7uAa6zcyJxpTxvHFuAK8kbTgRitySDKFDfM1dnUPnybj371V88yTYuNm3DL9cbAx9wBAVtF2kU",
  "key26": "3d9wMv26qEibiaoYyDkmaxP5Bm6KD9shynpJbb1tJzmb7GbEqmnznq2v9B67BeD7JYTKAQzhkszddwqzsxsgesKn",
  "key27": "4c9FfYmqWSnvS19gCkyd9EfMKM6pgK87TsMdgVoqyKAtBBaryLkSzzotwV1PjqWyuxQ45TFnDFGCiV98mriAHxkC",
  "key28": "5NezPtz6DhfRk376gRXaVWCchefozeWqSUgjiG8CJYaogrBbzxBen7kDYArucid8DiFrDMjLBSEyz3pnccWf4PMU",
  "key29": "3YetgcVaCX1PQGF4SK8F8WziucWUhTyAe3bJTbrTdyCfMdAWv4kYSU89KtKdpB1h1wSuJ9QbHDN56wEMAmhTfA9y",
  "key30": "5SBc7iv352kAJHtUgkSz6GC45Ae2FhRFHGMbBAxKB41qvNF9N5RAKvhXWKZQMLZC21snHnHMcS6nNeQadjih7aVo",
  "key31": "2WA91FcVDdUQwVwa2vSUg22PSpGNYzkk8ZVgxqamEusPF5X2E9DJ4tsrNDDnhiDqaUkXSYPZGULdwBhmp9KHnyA1",
  "key32": "4k4GNJwpcoFoKVecTDeHiKHgoJZzy8mgYVhDTkNddwcjB3knVhiC2CBjwhV9ttdH9U9UvWws7PvLxX1mmtbG7ja",
  "key33": "fWF6e4JH7Z3upgQyQHguSk38Zd4f2CLCyoX76JvZpwVsFq5H8E85PMGWgoFVuu7tjpkxAWwKFpJi2iajSH7vn4x",
  "key34": "4u6vW7DvvKXe8XMYvoziTB9PvA9PZZBmitowyBacwHXeTVAHTN69oM4Q8sV35AiZT33EP3Sk5a9SwpoB6qjUEXSa",
  "key35": "2DCupWSxnu1jNHxmtmrqiDYZMreqaTCWnjY7kiUTKgRLTCzXFRhvaCgfzpCUAooXM1wnDgXHpoFfncVHa6M8bHhV",
  "key36": "35U5JZroYwgQBHB5xAhXwQucH5PN3xnJA5pxPc2MzSvCP88TEV1mLj18dCNsMZqToGwhuBy375Qe1my3NhNejVio",
  "key37": "2Kbvfy8oMhUUkTxxZTjDNPE8gHA9RRwEJFPDH9vFqcVt8uZgUYzu31YndYQBquGSfEaz2iYb3NbJHaTdf4ZWKB2U",
  "key38": "66aFvirfHiKfNwPySnpNmvceSJ7qHVrnyQk2nH8zSsPYhV3pCB5VSixJZXzcoUqu1dmek9P6eaYfC9cQcAGasbUK",
  "key39": "2JwPZRGicgYBYbosMiMiRgcb4fbdhDMVwLNeCU2GJrEaCatrRKY2UFCiXRRuoea1pZpotjQQV1HEWbpaoQd5YLB6"
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
