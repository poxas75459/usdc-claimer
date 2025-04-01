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
    "64bhrDPie2i3Uzxru3dJN6pPvZrfEpEWnFz3gdxZTT9qJfLfAjrEaBWxWkuP36mTjAK9sCHrqPzChqfmipzMqFmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bQdKGaa8bqqRq2LWKU6hSYqJisDkTV4Ymnk9tcHMBs5LoqFhxD4ivo4azE4iLLdePCsecg7ihWjfvZ3BUUgsmsG",
  "key1": "3SWxsuCG6fLy8sVJ4zf9dv3tVLQiWS4jSSmwcgHRtFv8BRPahYHFMxz8gUD4tVm2DoVD1C5wLRBdyGsWRHVqd3t8",
  "key2": "55VmeFShhR8qHStUN1Kc8cY8YKKhww1xDxcw8hukwD4QKgwfigjAVW2Ln1EzwxkgJomD8xmFArqGMoF3TsdteQMS",
  "key3": "2EnfE72M9GbvnNSKH24dHmG1Zbu8uRPBzQa9np7YDqNL7hep422Ssch2xU2a25MT7gYPrPLtrZ5dywXJVCuCFe1q",
  "key4": "2mnESSYC2BEEC9nwoeSH53eHQU9Gxnjh4vNR7GPSMnFH3nbeq1kKw1HdVrUu3ejhFJXGntEaLQayvC21yrMpw5mu",
  "key5": "HdYEAAwAHXs1mYusfb6htNT1h675TsuNeciKA69vn1RgRcimahkMoA4FgeV5MP7628vdef894AZtVCJzzGbx5Na",
  "key6": "aownxtREsN1JZiZhpp6hQbn2zRyVtyuquQcNiC75pgw38edJLHxXFmzQgoVwciWHYBWJYACA8R5ed6S3RWEGoUS",
  "key7": "31ebuWsUFNyMcW9kCN2Y89EJMxj4KqRQmCagd87NvEDt5PtU82LHqE66Go5TKDaRJRmNfb33GtjQX2WuoQFxXR8d",
  "key8": "5P67RBd4YZTmjyekjVUQWkkgxMbkUmwZvoUSYaME5AhEDx3spMACuvhwMMe925xGfvsSXtcVaJ47CGZuZFvpgnwm",
  "key9": "2WS2ThMVFbidmCVfRwrtYp6rGcTxg7Xr5JdYqDpGcooJHtGZvAd6SD1tdr9Ktp7Ba6wXtjnSMUtz1G1NuM8QfTZ6",
  "key10": "53AKtiJLmF6QZPGhoUUvxRQCdjP8Apd7Qi6wpZt7pQfhNTec3jX5u734BppyKxjCwdDmmpzBEKad1DGtzhGif5Pz",
  "key11": "gutC77gU9dGD6LuEmFWBdqV2cmNHxKTSa3Ma9YtYCpRQuGC3qy4HXemhu4Yr9Ucb3KHgXULLKqSyX8UCnsU8BZp",
  "key12": "2voBeTSmcEkPejphtA3TiSNHcgAfnunpRzwmZDbr3rMsVL9LSmRwwq2GhecAgwK6CJWpy9KW2vYdVJbcmLewpaGg",
  "key13": "LuGxUZUNHQ9mCYP73mm4huDFfef9L1oAE9sv3CsHBoFM8cARMxtkyEy4VUYNfV2ZcgZTShCQ2FRpp4oi9eJdZX4",
  "key14": "Ktr9bznhreQx7JfcBN8tWbwgzSqqeEtkHkeoczP99yjhucKCWFw8NSBEvpnNNkqxkgMcQtKMnHZR7tPNwrFcWYH",
  "key15": "usS2NwKFt7JXhNLXVEgLe5dzWkYD3B6UhkXyM3PMMQ5bQhqTDDrnY3fwREZxt1s8m2nFLbuS83mm3dJy4krVi9R",
  "key16": "3S6MK649cT5H95xHEqHAH7ktxBjdv2gYdp7XiK72KmDCkBRkK5SD38ZWHynAj3Hhd1YbCVQiEN24u8Dtw2NYbcHH",
  "key17": "2zrx4Kac8keScNKQVe9ARmaqRP8QKLd5BMS6JBpA5LwKATpabhkWsiJzUvWVASr45exBLoxtMoL1fYXqyJ3hWbSD",
  "key18": "2okafRqAN4jjsxmE9NsfUcaHxbTgnCqLj8sVUgwi1n6JwUfS1mckc4K6DLbZMVfaRLVd8hjzvV2DPmSLfTVzBRot",
  "key19": "5pcYZGVjCsec3WHy6aEuAyVzi8chw9YaAbABSr6itfoffJcy5sEeNjNp6UAM9v5tDZzFHpcVWsnNCwvHA8mdh7Xu",
  "key20": "5xAsycUVE9njTQ1N7AmYhm4DVfUk9ezvep4mZPM11WWJoD1TNKVwVqe8xNGyKVEH2fqD6rMk4UxNaAzfe19qnDtM",
  "key21": "3E5UqZUTwpxgpBAQVRJQyRyZgQL1EfJ4C6SZKwLUnApVEryEQYCJLVi6BzPWWJZkb9YJPZBtoZ3D5bEBnn7tRCWg",
  "key22": "5oPRRmmyuSF7vnNKNEUCe8roLN2NNHT7gJyN2ujJPmL4S5BBmU7vX2REzxm8d5ruztqibrcu8kUvaPKsrdVSe4xt",
  "key23": "5WfiHYfo4RW51V9WF3ZUSoGp83Sn4qiohKA7NHSipKWkwYhgKZxJNJ2FLieFsz1VjF5CigBVZZsn1RiFhev7igVj",
  "key24": "Jk2WSNYAnT24HpYJM148rrS89rkYHc8xmmneKSgjTVaAXMJQirZNWD32Sxdmitto8NboSUx31Gp1bkhrWRgTuzn",
  "key25": "3aWqsFAFaq66nLDuKKm2jwdP6D6DJyUjWphW4mT2TWv8YRd4KDC3dekCdR7PhZyoJPu4hxwkKCueCG5KeMdgeQdi",
  "key26": "QKDUXmXYgmhNmP9WruanEkYg8TMzkDZCdZ1ConT5HbEG1Pd2XKqVzHfL2WDccT1oRMtbgeuYyfgxvTc8DwT3CMX",
  "key27": "5KZPcgh1bMz7HB65TSV1kLXNwkGRM64hP2ktwRvW1bSfFySQiQPwV9KPxbyBf8yWzi7cPcZZJb7kR7V2exCK68dC",
  "key28": "5cYB1HWNwbwTPeezpYYrobhiPr6fWMzgnFngTHzrEgMKTeQVDQxFycZmtQ3HdcAXDWQCW2GRdK9HBptv75JKqj9j",
  "key29": "FSpEJwzosXAZSmSAMdMia98oDeS5Qb4FJoaA2AgTPvYZV64DjuKC3mzjYKrdidxERDGW3Sh3Gh8PXUYay61vCFf",
  "key30": "59nh398E6SSoBqcXgo3BMV5nhaRTcj3H65eLZVeQK5XEWXifkU4pg9unqmKPhVm1uJhp9CLEw7qhmz7UC2FTJpZJ",
  "key31": "PXdsvSjFD6E26QB3SBN9FhCa19i4JpNnQuPJqjE4TD1hy3pWhggqZowaZiVvyJJasfui9DPsFfBLrdVLVuVppwj",
  "key32": "4W3KPMVqRqXJwhZqba9Fsig6wyXAKnEhCrEY3cRtEz36H3dLpyWyc8UPyuSUQkzfghzL5GbmD4SkCHPkTsZshSKB",
  "key33": "nB7oq9ft5hvL2d2qZXHjMZpdeephm72mLpjxNzoQZ5whZk4tAgtUWfuEE2JnGNy1uQZDy61aF4dGieeNuRHkwgU",
  "key34": "2jAgY1x36AjvNGCvPk95VEug81o8zRjtzWU4HXtMtAgXQHY8X9zKLeQPjP4pCcV9GWcbzaVVbL5N2Q2EDxfia1zv",
  "key35": "3uSV2D7MHUvwbwxu4wHfFaghwdvNJFLT46vAzMfjeFDqjjdBcYYkwkFZwy2sdaKoQNX3PebKawCt9QDbQiB3ED2u",
  "key36": "2RtWyfKF6B4fra2EemkAeYEo6rYXwUje347qZ8wi2s55ThfSxrwPqAQ1NsrBWzHmDP7FvdEco8vrdQzmJ4583vHD",
  "key37": "5xDZzN8wAFVKTdkDNR1JWJ47PcCJiVRyCaANw5MFjCXRBLJZUt9wzPa8iv1mcCAo86i4yqTRGewhD4MDjNFDgw6S",
  "key38": "5xD7Pc2GrWsHHzBAwBYEqDLJk4LZLN16FkouD3nZqDZwui8sxaT1CvEnSsJv6XoxKJrBjCN6m8g6EnnhFQ9gTDs7",
  "key39": "38mBSQaHHiBNFJbYNfxDCUvjbtyyrZnGrNcKn1AH9Ec3mxJdcRVgdaWBQK9SnpHPuhK3fj3pFXksUq7AHd3RJDgX",
  "key40": "39ztTuJr7iwQYnuZdYJUQBGw9wUbxxzef8Kd2UHWBk6xrAcY9z35tsDeRhJxHGCHwnCf3SPDvcqih42sVJPMHVRw",
  "key41": "3Cox5QFZte4XDwRwwWZeiMB6yokcnkNkukYHqQshUvs6XCNvmYEKQjD3ZihCnxGVZkyargDgNQ8sHY8r9eN2QDGx",
  "key42": "3puFeGuifyouV488FXyNen522KaaQWUGMqzjBKkjBbSEiuTCm1stgZqWGRzumtuoMaAiUA1ss4D5q2PT8mRDEU5N",
  "key43": "4qfpHdeyUM7LkHgmfPAfDDVRmPz6qFrm3utEttSQXZHRhi5aq12jY5EoqESY2EwsFHE6VmQ2WuTDwRqLoChhN1ck",
  "key44": "ShWPysnMQGVXL7RqvKsS3rYZVepTsDYztvozMoH3BoPnc6zVuap9peo4ZQ9z9h5Uwqk27DQp6Z6tEG6Ee8ZuD2d"
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
