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
    "iqFSECAKET2ZV7qLkY7r1K8S5TaoyeT5SutVb3ecmLndKXJrk98p5KMtHkjEA17roSPKTNbPodBiRUsNaBHHNYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aRyG16QXowqc2ukgRxmccrN6LYjbM9iuvWN5QBST5YvN2JoG8SCWrHNqH7Hdf56zEZmLin2szrUqBri34LeYMaG",
  "key1": "2tNSth7sff3fFj2pYQ2XnM8Fx5c7U8a6ACZMvSsWS7VcfEVBSucKRU6MXUdEvd4bcx1ycZa6R1Er1fTmzxbzK3zp",
  "key2": "4bRM579FzyXhtsRhf8BXWjvdnHFLmyZVHZJGE38zp6p3KFWgpqCjevX3z3JQBPceGJBgeMmYvMuNXJsyrwybeTLf",
  "key3": "Rkm26oemYq4tNEcqC8JbvajQhuALM1FsSqCC8rpoXTMD7tZLqY2reXu7K4sDJEyh1sjuvi8H7wyvswCdptPs72o",
  "key4": "4UzQqnQqj6stuUvtf8rU2MrmquGHmR7jh2BY2RTE1tCSWEXB83b5UqeZcepxBnFxbCeSSJ9FC16tVYibHXqeDmyB",
  "key5": "65hNZaKRrEyy5bPyPmkG8NrrJiVaQXvFEMApZ6uknXkE4PMJCiCWaWZjzrHqc9KcNHbRdx2RtWnS3rQH2881F29D",
  "key6": "gRPD1qm6LnaYUre6W4DFrUhPXs7eqibsYYM3gq2LTBFu2oL3RbodwFovnHXdLDetqtVtRYgwAHkh6PeLsHiVAbv",
  "key7": "5YQLFVsi2Cgtx2NbuGy7ZahtCpoJ5Amt7bTJjXR1ZLyqKxQ7QXeRAkP35j3xuQpPJXBKcfFjBKk3az7QwcW1VaQf",
  "key8": "2goHHpMgtfrKisrHaBGhzAHTcgW21oWopWnEXs1FB6sqVm8PnFC7mmerouM6V9zCC7RS6GGmzH8ZXhwvycUPwFjZ",
  "key9": "5E2ZLEz2NCs8rsYXVnVkNe1oknkS5hbseLGyEE4kpocvyDcYU8aHEGinjaNSerExKWbJqqEr38AqUZYb4CNn9RZ9",
  "key10": "5H1U9rj5NXwgNf5SLbwVTZ9BbNKcR9yfc1s6rZTH9geUqwjCnaHFyfv5oFyPYCYVhmouhm7CmjqqLHX7mnffyexV",
  "key11": "4kKFzxiRsF4jeAUMxuGApQcsPE7t48rygVsvYcy87wHZPEFhWt7ojAhgkG9E4XGynQhPksheALZasLcvWKP57Xwt",
  "key12": "4XjEHzszL6G5Rkkqr9kF6ayLHRrq5AEheiur3Mfuwbr7HkkCFzwbaYfAdtDwTP1zTPn6uVnWAz9ue2KeJpaJ7Nnd",
  "key13": "5kJ3zEZ3Zp4gpcQ9avYGW6MXRMsoVEKNGr86jbHkUsM8FTHjAVpFyuUdqwRsx9Zw7gd3faBpTAoRBHPdjJpgKGKd",
  "key14": "4o3QDY9fMKmXva3zPN57KS9DG8xoGxq1nYGmV7rNSQcExijvT4oy148SFL3wNDV4onL2KuAnWMCjKC2jX6a8FuK7",
  "key15": "38n4nnMtex2SiJPhYX9Kj9WMahHtz3E6ABNukTu69YYF3AuhgFZs9jeddB8WwEGPNueTnCYChd5HDPT7ikQ8UKTb",
  "key16": "4Q9xcfMq6VkTMtpk2W7CGDYbFsCCbeZthEZLZ4fFo3qMe6byBD561Hv7R1Qzx8ALzS7657sPtg1G82VaLb9MYjga",
  "key17": "4oSzde3tx37MUBB7bjpqbF6V86TqX7UgEakvrcrUSLGAwYxEUvPRhn7rvrt6jStwZm3omp9UNa6WxvHJiw9hjUeP",
  "key18": "4DqK9wEY71PKWvGumLRVoA868Hnrknud1jfpsSGMhdkk3TNVqkqP3iyAUHXibsZwrDa6GMdbs3sM6Wn42SmS7F3R",
  "key19": "dmReELA12EiSEZpALGjP18VNHYjhj2gyEiKcGq4eoASPUqYsJbduA8i5HWuoPrngcfWE6KpFEVTzjy9HQMcPY8q",
  "key20": "4vAUieMbpmas45eg77WYy1o6VFsYZcsFhySuuoW1mXaJSVEP1q5uuh75vGFfm3WYovio85CP4cx7zF9y7TNFFUN3",
  "key21": "3yoLSdTaMei9BXyj1SFKZHiynRk9xsEFnHLmYrk2fh2fod1AJMMEqKb7Zbjp1sGv2wg4eNswasnYjs4L1ZcPCv1Q",
  "key22": "4pY1CyT3uYwLioyuCjTBVCxm834vduLtcELuHDXoyF5mK1MZRaZKj1y2t71gR22QCEdaMgHKUy3GrWR4Hsh7XuXX",
  "key23": "3Vb4BDkuyYF8CoRQLQZdWszt38uspTmFiPjQuo5ep9kkaCTq8wgUvgGpxdyLkAFKqqHstMcHDmPvLXGfj4rG5e6n",
  "key24": "35bBrcPxMGetZc9WTPiEvpjaCHvUJ4G8X1t6ddX2X2jaLGGM3tcQYj7Xv2hD4jgTvRQRGNfPGY8KRz5Kcohvwc6p",
  "key25": "5JWqLn6Ts9sE1BK6SSBiWRrpgVjnnaCHp7undrSfsx7YKW8xG2Sne1dZH9yeQhg8KUg4WLe4W1vPaeCBALvYkCxQ",
  "key26": "2xWdYv7nZN1JH1QUSnfmkRXT7JTuHR9Y67R3rh1JkctArGvFCHxtm9XYD7BBwNHP3nfb9r1NB2Y7K8wWK1TQh8Ce",
  "key27": "57siYv2cj6NLC9CyXdSFV1Nnm96jX4E59XRGQsDayKmhvzXNyaY29yCeBn8pFBx55FDY4dfeHE2oKcdrJjZHn3vG",
  "key28": "4Xyyf5528FRDF5Puuj2mCPq4hegmB6oeGmM3G3sdasVi24sgnF5SACevKyUmSwB2NiQ9e7zC7TfkfER2fNAKnnAv",
  "key29": "5oUj7RTUafwHGyqdtiMwwjodTVBnHWDcfuVokKtXTcx7X9Mcv5ELxBaKi6tK6YPGZjt1bsgDhykXAzp6cZmbbr52",
  "key30": "3gSAMWUiTZXGz2Vw2oCkj9UH7zczJA13CfqvuWMZVP5BGDq5MEDVVMY8PtEPnShSP67FUof9Pvhxf4sBS1b6Zmqx",
  "key31": "42a3Vzq6Ly4MsfRZrTHRKYviCJyJZStAAYFvR2JWTZ2hF1RF5jimSkmGrZLfCBQY2Y18J6CAfd5ZPo4SZCZfqrZu",
  "key32": "5ahZc3228pdYj9EurZQYbCtLGrR8NGQKNvcb5FQBbMDZy2szrueFEk8QyunNPLLXjePQq2fX8zCBTsvs6J36NTKv",
  "key33": "5T6a5Q9rKjNeoc4GFQa94rHYf86m29LVJst6GUi9eKtEQb3d6D32CRbbAvaqnbCLc2mo3MjtQwTMZ5juwpxyMz6E",
  "key34": "PNEYG1X925dwcw9WyXjwFthSEraBHceCxLAcw5NG58TYDJj7pm1hPAQbSYotapLgnsVT7V5XCi6z3yPx44TMagT",
  "key35": "4EoedEogCb3kezus7Zr5fuouzVk3T7QTn3FabUBcSLdxHGU3Du7buE5AxsXSmRPgjfeFsgi2C2cHzx5rWPMjvhti",
  "key36": "5DSdvvvBoE5e2QYqw1igjBmWf3Vf69JCX98Me6jQpSFJ4EQGxV2SCVegLXukU7pMGQwvwPDE2HSkZr8LgiHwZXJB",
  "key37": "5bHyQ4T6eu7KfUe4bsMbnKVugdpSj7H6YMunmkrMq7E5CdwNcx6QS4h7ubZqXo8uMg95gkDLGnmbG6bCe6Xsocc2",
  "key38": "3kYYuaxMyCCZTvr4JfBb8gqASbiDh9UaNvZ1CVHNJPqsseyHdJnzwqHESBCfeexZoJL3EWPYcaTjZVwScNi6bZ1a",
  "key39": "4S1LiDySKHGtUJBr81DAd213M8uQZpTrJfjRvhwNNs6WpUEGJgEAgRiQeEsU55Bk86H3nKHB8Tg5ZXKARvNuotJm",
  "key40": "676sm3BXFELTVmrktLGUyN4JxscyPgRmpCCf9CxGh8rNxKx7rvbp5U1iEzpMXm2ycxME4NYmSRnP6Z5sJgZAr6ka",
  "key41": "42anssp96kMZFFUr1Qw4dYnGZypRy5qMGCgZzQza24e9k5mfK5ShpLwZF4U7cenZ1kjJWUU2Nno27xvF3Be4Jpix",
  "key42": "2Zv3B4Hc2mjgzZ8x7awBGq3YfpUtrjtmV7Du2ZMUHx9AnKwaExJkEAavBVHgTuaCLEVry2qD7JZKcXJdTYtoJqfw",
  "key43": "4PSbjvaKMkFzdduh794FYF1tBkmSoV7k3ecMK6CZdGyJyWJ8cPyiggpsZcKEzfrRAqCg8cg5zhiA79swWJtLeeHG",
  "key44": "4AMhffvLxTjTicANos1GRWqBbdx3Aj3KmUa2AFrwLLJH4TMjcdBrTC7xZ29MCi58jto7ozLs5njSHSZYV2ekTkej",
  "key45": "DFFPdiS4z6g7hGN9dJz8qFJVM5TfH3W1eSy9Q7kqx97cpR6ojFhVmCv62YvLzgXRZ6Qf43JtXLC4LWZHjjnbpKD",
  "key46": "29LWbv1iQ87ssSZnAukBtXvo2819z4U7MQWYWEW5CyP7FwBa24nq3CmWy7A19SmBAdD5aX7qmVK1otPasqNa9vJW"
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
