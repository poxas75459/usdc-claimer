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
    "56f3k8BUTY8ko6GEb8NMiVgvSQwX6H97FcUPoU1woxXf1xVqTDnrusaEoLefEYNxhQrt7ovUjrF83mwE9XmqQdXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MY29a8qUdtxJDSaZGAVuVJkWxprQQcWFer1mSiQNYAhR5MkRP39kUrSsxiLMS43hiPNFzRYPHn97x8LpYVfNMVe",
  "key1": "3Ywc26wqNv6xvURRpXxuZxPqAbJ6Qcy9iNgABLm7gxCNhsKMRoKEmjpCQTjDQ73ovbiiksDgvxcp7sYCQee1rtXp",
  "key2": "5RoPoJvg7t3HVjfCTJoJFxc84CvzJfVd9X7Q5Y26DV3NHWLJQgWHSucbK7o9tAGbrKWDWZ7Yur9p7981LqSqPgbc",
  "key3": "25HwutbzDHG9h9n85uxmiDrSGA1R7gfZqrt6FiDMS5iCCyAaaenLYTTeBUr51cYpcoyH5xuuGoT1gbkpiyP8ev9G",
  "key4": "35pc6PZuiP3qvbntgQBB8uaG5X6e1AzgTpPt1ogcU5ZwV7d8FPtc6Tjr9XqxV44ETEQ751qRkvHvR13myphjvsmh",
  "key5": "2VhS8dkb3MpFjwdm2J1fYkK3JjYvHeAEWN21ryTVukbMAiwvrWfn8eQKCf3eMg1HyXcgajKowei7nxpXwUWrrNqB",
  "key6": "4ifoecUDMubQftFTsRz2jhSey8hdKRC6fV9k8feAjfdLDRLC9zB6bSgPHPXsBUhnxqh384mms3JbL5mTHs8mzm1V",
  "key7": "4yHiUqrsaznz82c6RbMCYN7des8ejYcoPd8qznvry8qh5xwD7jQTKu2Uexhj7uNAVwhotPouTxP7ePaSKDmzb6Aa",
  "key8": "4A6sXdJrZYWGGn9j6SuJTn7rQky4iDDrehhAuGwUGWWxYrhsMikeF5mWweroYd45YaZKE5q1XWQE8MrWw6cg1hBL",
  "key9": "TAjRL9TGktz5xRLkuj6BPHGbgJSgEhUGkVov2WsFeLf2hAUC9YSVDkAZRCvUMwtALPGLdP4qZHrJC3PgoBW89Sj",
  "key10": "wQNAHj47Tj2iVKGw7PP92StCr3TGq3pcWSdGstJAZNXFS5dq31Q6ZNuCcmLCmHSvYwxaz5pFcWvdot2ezdmrGDS",
  "key11": "J3LdenYs3TicVKT9qCz8qti9q9tUCHfxERjgSBrLAesvnmsLJQQFnoQEYv9faBs9DL29tMg7HaanCc3WwUuyPCt",
  "key12": "3KPXpYMr5bjfkLTxk21efBfvPcyAE9ww2EpgNdTzHbmKxSRA9XKEsYHn4UiWxjPGp9BnVETS4f3wAwqRD4J8CSyF",
  "key13": "5Rierga8HrYkMjbCKW23n2h8v74WvYhXxydnGoTNYiZEWcGH7zTYZ2vwrJTVvNMSLQ5fTmM8fhKbJZsac19PMneq",
  "key14": "4u4d6bXHWZYLxuLEQ3xeXY7skKEYKmV5YBq4xC6hniLP3Kh18C1bwc1oXenz2eRMUQWXSCQ42VxdkBs8hHurSXxq",
  "key15": "3cZDFoC1dgN8Szefv7QEZRScgr8idb4HXQkH4rYbBYhibKDp7LuPscJJBmFQrD2SfHCWq9Zitr4pjazXzMbpqghx",
  "key16": "2ZpHD5KFqSuSiwd1MoEZox3SHf7xewGaJfpu7Fbhd96TCUzx9tAPgAH4THuNVLeeT7CCZx11Vf1MP7gCoozBjGMv",
  "key17": "4dMqXnoMGtP5jxTxAoLudZ3BB6zbgeVXHGqxRmNahkgwAUJSaZkGEZ4GSBHMPVZW3ZxBm1VBtQbQcWz2cRupVBfa",
  "key18": "58Ym3YgHuqzkiK9pqoUYStLhKTrnzMF6SuwwQWQ6W9wRnfqFQHskPkLPn9P8iSrDx4XR2kRy5mCwBuwFicfxBjkM",
  "key19": "5pW1w6ettnPMKADuqPvS37tXQD8mbNrXVkPPq8WN6prytTvdJq3rAbjx52oRHmLcXUtdiJrTBd8Tz2SxSZdG2cp1",
  "key20": "5RfMMyHK9o4CNJZQYRVSLi3x5NWxG2bLruxPVpBwYSEFKXanesQg5nU5MfsjdSxojeKx7dD8D6hTZYEQwfUvocHW",
  "key21": "dPJqm3VDvqPb5YngGg76x7YqNSnCKs3H8wRbd8L6RQjwTPvBGJ1y8pF4ADST8NDdukAYCkzre31d7CXCb5tu6Cb",
  "key22": "5YeiJpUsk17KFao3zfeC9ptAypEh3t3rASBRXkwEpGeJUpjB99sM4bRJH8fa2nBicx1YHpqZnvUMy4gvcMANaNha",
  "key23": "3a4jKoG9jUzms3bJv1Su4n13KiqzhJKi78xQP9gcjjmpD6U1BZRm3cKjNdBPATEKhAM81coLtYu9PkBLzhrLTW4x",
  "key24": "3Wjz1ja2ecKrxtVbhFbp8cL4FBXJi4CUYsjwk937zXVqoxomURLP8kir2uLu6Lq3UD7QuSF9V8mNsD72g56K1Dax",
  "key25": "4CueJRAbZqrTMjkn3FWGBF2CyBYs12pAsjgRPkLa82aKWT7eB96ePxJtx9vU8y7ftJ2bVS7kh75DB4aWhNkn6cuA",
  "key26": "2J9jcSSpaqp1fHwagh5jZmAX1NJmJHzWFKWkAVWP3CqXWCnYNRULwJR1MpddTiBdgRMg85hfSU3i1qZo6cNSz46z",
  "key27": "4xZP3GvrQdK9E9pSL2rNucfoJkNeJEP8SskK9G6UiB2RgeT6kK4a7MoegGGvHrVGZpz6qiXAvpuqU384GBwqdqHL",
  "key28": "2RUz5QNUBAVuwzSsb7mYgc2bJ2YarFSA6PtxUgT8pmTwNTX2ze7tcQBGNJ1dQWPBgBWapCid2LFgvCsMJy2hNUkk",
  "key29": "4C2Aoxeknurn7DXpJQ8JxrxGjxY6hmRADwAhvg6uR93FEcJpGAg8ZRKqsuJYbZFva88oH5i2B5QyeohcmYCtL7xe",
  "key30": "21fgqmH7XutkNvb3TQcNm3CdCNtyjDShdKRkGHumarfPWi6jEA7bcEJKw89YKixZRjeW42FNUfEpLmnC717D6RAz",
  "key31": "WYup4SNRTxeNLpsAYtWNXc4dd4PKBDeP7rtzmVKcp4AGxJJ3z9EHpCtvkhHCUtBXa5RGFn9MErva2XF5HTgsMAb",
  "key32": "5cEqeSCdKE4pvt7Qyee7Xqu9B1oDX7B3UadgMqFhA4eGEWgyDn4wwXojKRNMNXDQ41xfvjSMNoLE4ipSd7ngPfMr",
  "key33": "5SBcwPtoPzVtZzVfvH1N9tGe5amwoRvfiQyv6iY2RhVHSDYqCDSZnv5BMqKBKo9YxTs5HfgWrmhBQV3Nrt5hYH2J",
  "key34": "4vX4cHM6R2MMYGSuj45B52pLEmXACVhaBpdkfyZhp3YR9bgL2qGFE7SrMScUePYJapfS8BVGfQTEEfh235j5Huti",
  "key35": "62szU8nP42y1YWP1BouRNEzESYWKkcxu3kJTjidUcnvbNJaaMhJiszaqndpkdYGBsAPosNVpuPZrUNnyQUyv44CK",
  "key36": "4J3g8rArdiWXcPt2XwqcYyY6KV57d118qPQcAhMTJEkkPxnsi3xWQh5aCrvkFRyHTjcpMj4LNZss7xx49st71MnK",
  "key37": "DfvKz353PJdWbiJXoe87tkm9GzSPjAHmi8rPzNYBAAXCQRKBeN9gEr7SNGarfBqy575YyAqaAvSrnSddyvGVsjy",
  "key38": "4fJLNTbudbo64W4uYxU7bKzNunCPKooNAJFkJiEiSvYsRaGRPzBaecFxzuPw4rWPauHXmJvEJVv5jKxmTusdnCkD",
  "key39": "61xFtsvThXy1QYfXiYe2aSceyN7afzPmq6srNtUFJkquHr57K3xSMRPbPVHSctVSwW1QcE724TCvmeA8DKgZVrZ5",
  "key40": "on8bA9WVxfm6LQ51FX1UANhHSq3KbsCthmssYRoLcPdQ3yPnpKqM4xqRNLjNp5zmJReFzabUVUS2fkH4E986Jbg",
  "key41": "3CPuPHwVuWJx5bEJH3oUyT3xKzDa2dwFU8AK9KDX1QejKFHp32VAfncr22gM5g7fNpvsK5LojRq9TgDkEq3T8t2F",
  "key42": "4eC8duEj9FRFTpGMKrSsXEhUgqS3vGJgykxSraT2NxegDgt23dgTXq8AeRBtWWQgwosLD3NXT5RZzhomXBYhCyVh",
  "key43": "538agX6hxHeo8ub4yGhUF4fTd9Qs3yFjnCMtwJJCVHfsXZTxrp1Gyrz8qNZbP3kymcTU5HfzjCA1bjJHKh6dN8Vq",
  "key44": "2ST1Ao15ZGDWwks7EsXgZMpxKvCWQs8sHCcEd94iJ5zBBgzBaE3GcEcFztbndnbyJeiXZtrqnAx2a262qMBw1TpU",
  "key45": "37Kd2bSV5cCZuELkoakqL9oKKVpXMBz1PGFdH8ypKms3N4BLHYsHu2ycJHfPkAYLykm6e2FkoTVK82AdC82xmf1s",
  "key46": "4pwgsL5hK56govFvcnpUy138ZAzKFghdoLtdnKvuEkqAqNKNCbME2aJC92vePgvpDN4n2hMsd2rT23ASezGbJazV",
  "key47": "5tgAPUAXNtC9H3u3bYeNgeoYA8Y81M3CCmFkQ12PdCtB9wAazWPoGF4oc3kt3un6DDmZe8k88NTqrpMtZzj7csy4",
  "key48": "5naop1NrPabf9QHJNkt7Sj2kVyvKAYFdfe9jrJVTFvPtjzfb4ybZnutEoY1G1mi5TMxowsCDE8pNyANmcdnTnuAS"
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
