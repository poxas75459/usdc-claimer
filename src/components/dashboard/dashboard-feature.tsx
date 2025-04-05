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
    "fJqCEmyfyzwWz7BRm2rxmpiCYhpdaDqLWmJkGkQkF9377bqEjtgii6yanYf29DHbXYxY3xRUssfYM58ussVxQK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s81RZ1zHhxBceNnfEBiiUVU4mMYpVSk5z2Hyxvnsngso8jeDj3MKTcwJTpb6TZUzMsTKBXfGDykc3B7XC7U4WFR",
  "key1": "3N1GK3cJjXgmorryDdfPV4odS7Md6SjkAJ7LDDJUHwex1Hh7HjmVhkBZGyBjioygyY2A6DPY2hq4UNxpbe6m19NX",
  "key2": "5Xh2ndGnYC4dKM5jiQK8PBR7fwv7eLQrxdkS9zaApvC3LFuRzFtXNBpLR5MLBCSWYorE2spGdenpNHskrGgLZtJd",
  "key3": "4KvRvHMJFaKwZKDfVYWXhmnU5C8EvPYC8yCqMMoRC8oSiAM2m3vptpMME3kVCGxe7yeWat9tQYzajpnY7f1GycES",
  "key4": "53oyq9ig5m7JRtMLQsYJ6J3SzmXiStSHLgEq3wUCyxxRH2MjS37XvfdEPTruM5bg2fpob2Rc2DCutShwbXtc8djH",
  "key5": "279VjXTrvw8BedcuCB1p5e7zeh6sxegZg6nhrAPBXogkZXbbETzyCrE1QhCwoTwaCtZCGxmpDEKhVTfbNoiHmtnJ",
  "key6": "3TQfakyi1tyXrJUbyhRvrw27zCDvxLFZ3GZB6PAZnCPG2f5eqVN7tMVdBrtphXfZqeNGvv941MnAP59YbAwGdRwv",
  "key7": "4QJvWvZxbmH1hcKJZLF1fRhCJkdiKaHMR2mj4rU8yVFD5rRdtVyZHLwPhAPHDj4zhyonAaoyGjBvvNhwo6dQePRL",
  "key8": "4SBR2EFj6YcP1t7vJqpCLCrdKuBb8NVvSc1jU4zKUjkNL1XBFs2bfxmP56agjooTPHsRR3W9nohf3CFkfQ5prY5v",
  "key9": "n1PtZik1yAg9AJyowegCt5W49JQQHfSnsRiaqgQFPWXGJNzf6LiLDjN92iPMNT1KNZHPqC2N9pFfCAJSGGQqsPD",
  "key10": "2auefrdJ21GdMwMpwUFvzigM3g2LChh7uUEpqGiAfGi3SShULDJSWV68EFeMhyZ5xZJ41sSHkXMPQabKfEDq5ErP",
  "key11": "66Xk3ZgxHhFgYghhjwPz1hHGvFC43sE3LV4gxe2gSaAxg1fM82UPMQCUyBE3nRNQxA74g1jMhS97GFUtogXP7URY",
  "key12": "45NccLW7Ek3FHHpFwVpbY9tsKFmr31WSuianGVQAEcfeEVkf7bpGUxCQSNaMgVpCMzhyNe74ppJgEDCBVikMRXbH",
  "key13": "2VSNwn4ZyLLR3e3tAGSpU4PtgMxYpdEvW8YVPfrzzhSLxP8eRnDQ7Fo9XzJNGzDAQHuXVrMKQknVGvMG3baHvXpJ",
  "key14": "2mzNGJHZ1bRw1EAx5EgVRf1ZoJkLL3dEaHkhZzWppaFtYVGLtT3cujia1Rjnfdc57bzeBoETZzN3FbMSyR1QUtR5",
  "key15": "K7usEa2i6KWYcSAVNyt45QySjir18zHmrAynAPciHLKkBqA25iMVd1oeKja6HW36q3eokRcEaYJGuDqfgiDriMq",
  "key16": "3T67kif2ASubJCTTdDajquqi3HJXGQyzEWJK2Xz83iu1gZxNxVJ5krKDFEa3UYeBJ5xiKCis3v9Q9aTxLJVHaDRc",
  "key17": "3aYAfTDPnLDk8SGcprcErgAgPZyJuzSqAs87HrCKQqQKe7bdqEF3dtaA9hJFspc6DYcEukcNMDA23gX4bErpVR6A",
  "key18": "7H8GaJm8TArDbUEVVDbjR7fuBrzu1nopQWgdSsfmgsa5Xf2Evt7Asxc3LvvLPBfeokXmMzUUVn8UAvVpJftKwe1",
  "key19": "2BNX9nVmH8VJUNfHddfE1DXtQJWHTdiBRMaxhBJbzbD2hzMKJrs5qdVNxUsVAcccP37bYqvJWrLPhyUHouWDR3pY",
  "key20": "5SN5vqkS4pBoBzrDqqazpece2GLKuzMnFBNasGbYX6W9R3dSS27ovizvjs5j9BxoGqzJhyHwiHmA4r4YNRUBp2TZ",
  "key21": "65jN1vjquqi9YiNqiFVtziSmzyND3mtqfuCVe5Z7ZjLWfs73sLWv8nqEteG25Fu3QPK6eEZDRujWTxbK3bZeDsqe",
  "key22": "64p3sBBnGNqK3b5yAvpdWcWbsLrLnRXzMUdtmCnVfuq62v7nGLegihjtUuAo9wtMQSyRZzSwxQwyg7pSMSsoyzQn",
  "key23": "34B84TxwhHtWHhjuzwWBkKB6ZFdy6prwWPx8gBkHNfdTHQkK51DGGmqzP6ciAiYkd1mZa8xuKBiKVrzb3aEvScAb",
  "key24": "JH9qEjxYjRH5nwoLWie2SjPSfk9hbgo4NYP5vJxG1RcRDUjTUFzdcVBy5xs5pPkFdTCHXvHRSus7gbA4WvyTMCt",
  "key25": "4qMqBMbDveYVEHufvAEBAgnKkax9rhTYYTwgjBxvMhopBCS8mvtFFuehnEchJiAkAi37Mrjy9C8NAZ3D2Esg3AqY",
  "key26": "5mbuWQepibTkWddMwMhXgvtJJmMEp59KfV3vCxNxBrzZLJhMdtV2ieGx4JTFQM2hg5BgU31r7WM8b7BzpvMbbKzD",
  "key27": "3N7TyrqrVnvAkico9ZM9WE7sZ5vim8dsU9NB29JpS6DBeXM41LZzDJCHDoeTKb8nFkgj5ZQkqfRzfERuC4r9r4oJ",
  "key28": "qomTrAPrZQesVCuE6uwSt7VVNW75HfR8fZWfERpnFDASpnyA5bsUNVr5jAfUwvThgzmDtb5cRLcH6gcHy9PsGRh",
  "key29": "3xtRtrSqweBM32xhdH4N5TBV6hwUSe6pt5EZXq9X5j4RMf2oW96nRhbjqV7fC941fN5APHMexaEtE7XC9cqgJbVf",
  "key30": "3iNavCyhYm2xoeJAdmwezG9QaEkoCEPJ9zfRXkwNxthPbn8Apqiq7p1pArDkFLjum8ViipZ2LbVxd4XgjE4jUNbq",
  "key31": "2FfBNMMrcwCtHcGCsr6p9kZWaaxUqK8WXM98bSdJTc5YL1QRwPhhK8NYfMFw7G3fUhvw72tnvb1URexcZJRmtzVa",
  "key32": "5EU98ZzP2WdqfPEtemckEoUrxD6iLazGDbeznWifawhzBumkCQbnp5skGjrB4b4qSJo26LnGqvbw7JtSZXkBfcLm",
  "key33": "4usmCbcgcFTNGdUxQzxHcjJZsogh1HBhdPz18m2cnE9VbP1FUB11gurHY18FE4v5HpZ9o9M26ce1cxaGsUusmZGc",
  "key34": "65uV8q4G1NvSiqeMVwPf1XGswFxSPy5cgNc6pDc9TzL9sgjPqWu2MMpzTPyEULjMRrrwZWPL4iNRregKnFizTAv1",
  "key35": "uEJujpsaBiouMFCeMQcjShiAY7E1NrigFcMPwMPJBpfNy7T6GNPqWF4B2KEjVEimHw53Q7Qj8DDzNLtpeNM3bh3",
  "key36": "5X5FqQD67CrK9PrMa6gwUQST1Sqo27swqv7pjcsoK6yR8jHeAWiugTs4SuZZ3t3kBKxu3X7x7dwKRrnwSPhNAbe4",
  "key37": "4g9fKZhCM2N3VTn9jE4jinmkgN4u8wusVEZK3AxYTthP9HBUvWj7whJyjoFeCFxFQTYjkZHGseLW61MMZJs7tQsm",
  "key38": "58Dpt81AhRkdGYNotTgzWTrjr6kz39knpf1Gx1UuKSmr5RBfhZf6nwfx3ubeJ74byYKkCwKk5AvpreGw7qevBAjH",
  "key39": "U9LFiF3ibW2HuVSk4MwFH4RVfF7uFLGUM2DrgFw6rxdPYXjvKAQzUCnwSyuZAaes8t1EDNRpHPkbnnKPbFwzuZF",
  "key40": "3GxPEbAuFvHjdp152JE9aktf3SuyWH5oavFTQDGyEZ9uR6P4Pa6y8xkEB9AYw4U7DSEobJVtt5RjZHWhA4CNDaJq",
  "key41": "3dSci7NZq11ZYr7fVijFhnv8ajysEgov99m22nQeL5Gm96brxa9fbxv7DgQdPQGSvr4sRiZ6YrRRasYtHkmNJSJy"
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
