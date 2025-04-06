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
    "EbE8rSZnJ5JT2RcVDDMRZBvimScCyhiSYor5DwhcQSNCfZzsgHaRvZBkQBEoCzY3iNqqV3kYVdP7puFC9txFb6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RKaxJSJHuLdreETx9TYqmfqbLQfHdszKVz4bRX7Gutza3ZKaVpHdJVDs3UxEA29H1Zx6RVRuyy9EjzcSenj8zhr",
  "key1": "22WSvHjM8t1WxjS9NTjDMCtap4C7hJzfxuzxdypCBP9xzcTsLpZGngo1NPbVUNNuoghCszgTSaYK1C4HCZA7mF2C",
  "key2": "37dE8kky1MfayPw7x8Gw8MaEY9VJhJdVdgvsBzqWpHm9VSvtuzyMCs5sTzsaosiM4T52nSexxMPKsxP1BKLhdZ5U",
  "key3": "3rZ694hbmxyaMmkauio4fV2TfYZ5oR7uZeJRDetU8oSSDe8wzbTNx6pKHz6sPtV7ZUxP873tMEsLZYYVYcef2zXe",
  "key4": "5JbRUw1J8b2ecBuyibXQjcz7KwyQRxENeqi5nh6TpjHQQ48kgfc2JmRZ7xHAHoCA1Utm5LAMXvNbpJbDMdA1tZYF",
  "key5": "4oYri6BfZpirPQK3RhgAgtxCHuR5ToppRaU1JcMvrAwjAM1zz4bko7NHyBFGTJzotfxD2BeLhmjGTTxe1YkGu38p",
  "key6": "5Q56b6xTpkkdKa18KLUuQduCumxmz1yyfFH3P6Pk78vC3VQvXZCQukeNnxSMRGieLwkeYuGVTvzkP9yVpgFazVB1",
  "key7": "3dpkiXxVDqbdxcigomiQLjXNFJBM6WfU5DmSjzCxhdQ43iesK2eGsYikup4RkXCsAwCgLMG1cL6jvj8AdcjyZsnW",
  "key8": "4Tm2Sxw5ArEwtxBTEucfjrQAkTvjhsDRNsPaqp786AsVVfknJxRfZBEsoooQKUuQiCZePWUffSiXJkmruX39sPCy",
  "key9": "3WT5b6RJXEAU4j1fKu1FPBS1dpZ2YLghfYmpFKBRhGt4GBjtrkJLvUoYh5wtnk5Z1jNt9idAXWBf9WQLeZsazg1D",
  "key10": "2MKmGbJQ6vhoQcMr9hKUHTZVfZZAXSugLsGcgLccdfNKGQyLvwghg3s9NKi5CcVUtVQkm17Jz7NkLcc7UVz9ersm",
  "key11": "5UqBs2Pf376TATBwx2DosaWj2CDEi1vNE8baQBULm1LfNcMUNsjnvzrRqjtiGNBSGbpbauefFKJfNC4zuVQ3Z1uD",
  "key12": "1nZDfEZ5oEXvzSJkhEXWAaDfjo8yYGEwxaKAJUXZfzfyB7AjbGvMyvoeLp9jokjvxw5kck9CjXR9rqy7oqesNui",
  "key13": "2nU7Jk2RVZcmPuD4EPTnigpwNtAtbqmYW7HXV9RbyS9vX3i14VdNmUKeJf4jtPiiTXkjHU4sofiUcUbdm4BEGV15",
  "key14": "34Q5RhwnZyuBfQWpzLGZzNBZzLng2qU5asP3kDTWPsVCiNBQuHBVQJ5a1GQ7k4nAGKmAtpckiAb5QHt9UPXtSmLw",
  "key15": "QNGxgmmR24TLbMfEmVpsZa4fJoLCfpk8syMqbfUYCb8whNpz8bJzX7iZo7nQDyw1wWV4HbKrxLfKH59D5EkpfNr",
  "key16": "4YgZCxfxdsyAGxWhUkMqtYTfRAJK5KJjBbYvFHZ2NMoWE9VSGiPSvnZxoHMXLhD3be3uUdCWJHCHWjsbUWXzdhXc",
  "key17": "38U4Ze8rqjEGfKa1puKMBSZjdeMgYcspH6ENg46qtPDG5VXJ8QKeXL3VZxgUVNPGnSzZaviQRxLZ2TPCGMjsDJd5",
  "key18": "i7diUz2V8uvYN8w8s9gyZ2XJ8dv8aRZzPhryYqKzGGfreRV5eAhmxNSBG3qHvDETQbSfWthD5S28oXeDLurY8Za",
  "key19": "2AVPymBBcornujMaD4nPbv1edi9ajxFc3tXL23BAdM8dRKtKphLdYNjP32Y74U1AoanBMBMjgKXKqY9mv9sak1Xj",
  "key20": "4PgYG8qBpfs4FVWxLogDewJCUciuybLewLDJk8chCo44RQ38WviChEcmr33pFebrjTt6cybcXmHDB9p9hWkxGewH",
  "key21": "4SVTekykaSnECtHuMtq5fyAqnwwNx8LnzBqyrQ4HykK9NrcydcvsEvDv2L8VBM3BDGSt8pAMT398j2X3rdecjrGP",
  "key22": "4WMkoWUuqKSJYoVy52jvMwyeERPDA8ueVoXiY8Litpv3b5r6dSUh9fTGc5Wd9c795aGsD338NxkeNqXE2HwaHzGa",
  "key23": "4Vr9YLdXX4ZjpCfD6xBkpPgqGcuKWbE37apgjmTkpEP4uTeyCJFkAXp5Rfxpj8eEXgc2icSM8AZ6jkzv6B8wk3QY",
  "key24": "4fCnyJh1eu1HfrNwcRvmWiQR5U6iXM4E7hPXFE8Zz1DhQLDeX8QSm44M1tSoFKUjzM6724heGyHVU7VGAkb9ejdh",
  "key25": "4yhidpfSZYtwtmoWVoCxheyFfgaQjW9JS1SNNaSLmvrPGfwMHUidgk6s6MeepAi5ZdNrzo6Rjz9TSEUaqxzmZjVi",
  "key26": "4z3FBWym8aSPfDmNJFBDntJxydNUoWC1sCuDxs7sj1t291UGvcHSofkfaJzyhSG8cTYqUtRgBxWRPqtTwrWZQNuq",
  "key27": "4CHd2rjGus3HgTwhEMDC6Dk5JnYP8ijGVGXe1wDvxXbSJsdQhEDemC3DXmwYwk6fG7AeLPr5ELZY9WpG7gnwkFfv",
  "key28": "3f4czn8nek6XzsXWvF2z9hEpNLbbawPgE2J2oAQWAPUyPhH7P53chYmRqHdghXyTaGsZahBA6P7cn7zDcFdp1G5q",
  "key29": "44EprsjkfNNqEjpgYnSJ95geXGZTSsRCAaj1Tnia92VdRaw8xWyQ616YcBJzmmcbnKSoqePKwtt1Ky4PT2DjThg2",
  "key30": "4ZaQ67HqsatqsDrg8aAKvXH7THKfRc3jrMeAyzzG27PuaNjbKyYDcoK3iMomXz4fKFXmfJF6NQZdSPHVj9bibvDX",
  "key31": "Z9pGSMipuPaHkvSHMDX5u3eopfFy5v2qBCuFHi6mzcJXPY7qJc98kV6zwuriz3JjHEHGhKK9HNaZq9b8KJkp2Nd",
  "key32": "3XkGQ942rHXAWAXxu8WeXJndhmCB5spJ58xtpbrZUinyLppfVURhCiSKfPqSXjgs1ecRmbSqY7gacnkKoUEKjd3X",
  "key33": "3Jk5RxNVKSVF69iN32kEYa26k5QA15R8cY8uGBRAv3ZtU8xTVEnVD37hXAnYmLqF8xStdatZQxh6iUSWdKkbiRtU",
  "key34": "h4c2GGhzs3RsAYCMv47tYSKd5w1QMH9X7iraj9EfHtP1KKJuDQNfMBeBXXQz6PJukhyrkKzirrgCpTf4Zi257dt",
  "key35": "3AA8ikyy4e6QcbxWPx6CDWadPYAq7Q5FaeqLzDXzjqaQTjTTqMu1NXNRjyF5yjmVSu1uRszkDzxmtEjT7rw3jptL",
  "key36": "66pGoiKjgN3HmDRqwEbDmn2wFUhMjRGLjUdmsXVe877SEyLiDqMxe58XYujyRCSXnqPEczjYo3eQfrvy8huWQBT2",
  "key37": "5T2NnvMiWQWigdHL6nTWKnS44HKwti9XnX2L6yw59uyuFs6mHhmF3R8SryFpTKpWs3TKpHKSPcQdAzMrPtiPN91t",
  "key38": "5EF1dUaTATR7JrdUuN8jBvCTTvbDVwVwtYcv8bPi82TXvCB4ZRW1r7J2tFzehnv5zvz4eNoBn8P4BCC5w87ftiq7"
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
