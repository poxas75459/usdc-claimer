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
    "B4m9b6EDNgN331ULsbfri5mXWWeGstAzLDMsWMdxzyGUNibN6CizfwRXrMVGwuCuiq4zbP9UMufSsRMwRDy7QGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sT3RYzwiKEgiMCM4V8zFKJXkuskEEJLmXEZd7mYVyCHReKYreoG1ZFxUoLKf2aRa8wz8QTgiCvGqSj65w35xV2X",
  "key1": "2prHecyrkGpduJQLdZeMiJ9bHEvTtPverRwQHJpz151pivkyZzNacDLvMmqf9vFqfSzJjavPeETjRHGB3XbzMCXn",
  "key2": "3Fb4kq5Kc2heuUnrmw7YunWHW3eMUZfzEvj1AU8maj7P5BqSitxGAJRZiyg8u4VnAQPiga55z2d38rmFgq84kRSV",
  "key3": "2MVXNSEbbc1yp1Dxm4tXcZT7F6ep6TrBALkHUL7FRpqEaoCFDq1FwLS2usWeWCpETrDXfcXtE3Ba2vWxRcKs6B8j",
  "key4": "2j2748fB3nhRz9dhE2acrAQwMF5puQ1Ecu6TJnBprVtJ4UFHnUgTGE8nJjuh8rqr2DXKytosJGKZq5fHSXoLtras",
  "key5": "2VSaTv6szZRgZqZCzV1dFDUNDZ5n1tL7KmckujQADqcyZyaSU3Je5GnravvdWLFDbwVAbFsoH6PHD2QoYufr1ed1",
  "key6": "E97SYzXQvfZuTYCWZNRTxRW7RLE8QP8FmcWTgsqfQoAbBFoySP7gJPcNsawoSx3HyXFx2Qbt4XYyA9PZ7n1Nmty",
  "key7": "65nrEHsYFzQwPCRUVKNUAsqUE3ChvS9KmZjkT86nsikkipY5jQ32pEDsF5RMpkA1AFjCFDgr8pKQ4C6WzHW2NDm",
  "key8": "2QD7Hwm8sWnYWjkspAcDSrX5yoQhBJb1bmfssZamJkFQdt4kuoGULfBa9gXyargVZDmoHGFo4Mfp3GamYfxjo7Gd",
  "key9": "dSqeiCJGF9ab1eteD4vLp24V1LmGfxmaCFBSAiJg5FcWeU81Rff2vWqX2gegHxTGz1Si2FZbMb1EThEfwbKi1w6",
  "key10": "3CpYfhXc9U4q6YGQbzkMgr4W8jk412Br38viVd18NSBn4QwrZF2XRUwW1eMqXHr4SAmbgSkDcUf11AHviyjoWHje",
  "key11": "gKa2h9evPWVt9dvLQC941BE7eSAwY4vmzKEGjXJDpdzNoxXRUrUakqFDiiEH3xWbBXrcsrNwhUbrk1xtTXvUyUa",
  "key12": "5irmjneBvQ1StGtcsjrXovTZgKDCeNSVwAF8vKqdkyUAuN6Ny3ZuyiNUf8cK1pKDft5cZmjUvXkbBLfhzkYgUHXr",
  "key13": "3WppFDNMhLz6cVS7Rgtu6sq7GgWbUXxqV6QcR3y6E1zaGHtL9h8tj7am1hQBtRtk9nDxPT6yJjSzfGpCsbRpaxyJ",
  "key14": "a77kCdvdXF9rJGnGUqtZdzXqQHjVfpKKgnjmjSBdLoFqYHQPNByW2TV2Ct8YShcufJvTki4p4Rshws5R1UN9FxA",
  "key15": "3w1TKE1McKE4H4c6mAk74tEGgYPR1M6GdRkKDsq7cVzeykBu1q3NfZ2GL3drinJ39trJwUg2noS8D9ZwGRKQ96HS",
  "key16": "42VSTRQergduRL3pArTXFtrXaXPSoc6RASxqXzVtnSMrbiTDUPVHtGkJhpNaFuCqQPsFWTRzbxU1rDcajePsayj9",
  "key17": "2UbpdVpLJKy9LZ6na7sfTZCFwdKM6KwdhixAS3Cf5SRE97Ww8MNgkfWQtJVVSUF3XTvKtVv11CFhyqtFMuEUJqVy",
  "key18": "G8GPz26upXEe8Bt7EuMhnkbfgoGUgmyzahWkoqFbaWjt86SxzPo1DJ8yK1TPT6Pjq3fVGwEN7yRCUpCggrVHbAw",
  "key19": "27hE3y8LyqCyFJytxc8ce7jT1eYwbsGACgCwAXYuvfKcbMF1YRGNgcGL6HGmX8dzcqL5zYwYRmz7wQjUvtN4FguW",
  "key20": "2kDNDs6xnj6RJJCdMRHXKUYXbJbKQ4yV8gLFnZHEKWuP7fjWzgpKWNWWYL45mJVAjKMK87vwtqm3PJem4fKatQ4H",
  "key21": "62ffg6b65eqw67ZHQoPTvgb9soG1DFpKtzrJzZfEchjhGjVm5P3d7qyS98AQrc1aZgmHzWrjimvXQiVkjZvkZzfC",
  "key22": "4aGGigfAZcSQPtLppo4PougN1yWxFDmBM3ZGmj9wKWt56xX9c7rDSvxikazzUFkLLJd1V6oj9XpwADWXZt8tpZ7r",
  "key23": "32ToHA4Pn2JzPc8gNeQTWxesZPQL9apSAahcGRETada7UiYRKAyKNRpdebbmHyaEQP6juyoC4yDMuHNMxTsx2Sim",
  "key24": "7kEwcZJHNsM2CKuK8CDU1mHmbZ4Y9nQ71s4WVH3QL7VASc7BycnkLVin5Yy41pGvUXGEuHi8PVzfZey4nbLZbcx",
  "key25": "3YkT4AtWGRYKUgsWy3hhf4AEGmuJfNAKhwgwqH2HfZ8HYgz5TJSeNudw1fEduQLwEEEjfdg2HddavUnx6QU5JEQk",
  "key26": "3qj8xumcxhG4j39VwMartbZcoP9UZH55AckWhaNeX2JxbFyx78MBNfNVmLmjQzuTzX2xhLG5WMwKXqVLqFzRFiV4",
  "key27": "3U2saEBZrH6A3q87UXnexkBZ9ntCPvuYfAHoDVPRsgEUxB9z7qP9iE6YzVH3oMfza4ys4T3bSmF7LWa32Zo2DjnL",
  "key28": "4PcXdMyEw4NuJ3Ud7qQRCnck9g2R5HqhUZS3edmnJ9QkFwVHiZErNeAuZsa2ydgS5CP7VLZGJNAfx56xexuJMoRa",
  "key29": "4zVMunWdJSWncZGWZBQz2yu5gdLWMLbnvn3EpZVHcAwiXhseoa6LFbKNxtVoLJfipCV3SH4jkDsjbGmsCeZL4g2J",
  "key30": "eQP8ktyA8uKwzgTdYTEfTKSrzxuPoAd7EKkn7YPFFyCAdS2C6L9KX7zEUs63biMYyos6dmckjoYhiC81KXqcwT4",
  "key31": "2yxWa2W6nkJqiSqBrvhP2Cww88ZFYk7nJefjb8LZ7z1RJzviGpicZ1oCXx7jfydvggU1KpAHjyanCvh4GTTidkfg",
  "key32": "2qzB1GYexCuwothw2kqTwjYN9mdJ5Bh1sP19DVxnj5nHRpAHoDAkUP8HgayaRcFz6EnNhkpWHAsKHxKDbVnBTfSn",
  "key33": "aZ2zYF6WWVNcCeEoaP4hKZ2BG1ZnpyMiQBqPn4vefZt8kiFaBunionzvZMo517s1ajyCDGJhSXh3Pmy1eo1QH5X",
  "key34": "2bezLBhZFKQhNWwRDJAV2CKdPsoQH8HKD9Lyeij1AQjP6Z21sJXErPvQ9UMdc1AnzrRKRQaXbxv4fbLYp9z7UNTY",
  "key35": "51dS5qSKd2z3NG7VxQyj2Kx2RmUSfWfpffHAGRZPu6j2LdzBQherH5fEVGmNmshMinZW1LmvEsq2yowjSiiBMPcA",
  "key36": "2cLCMYydd5aQrn7T5qd5QqSQu6WgwWoLo4Fisdt2rrWYasy9siMg3CnPxXhmDq4HA2EkxbSnqR1ucn9vx1QsbYwz",
  "key37": "2UmViu8QcR9tRS9ucssjaLR2RRCmD8AbTfeq6ys5LXdMEP5Suvh2HJrenbasmQXEf5DiWPnLQxDsXJ96kJykFqux",
  "key38": "35T74J6J86gek7Lu9FkMwBdJk1veSH2SCaSTACDp4GrikxH3sQkbUDCSDJuicXkw99NYSMUuRDEAR9M5pA69XuF6",
  "key39": "3yHmrxTGEvmm9WxgwEQHYhk2sPTfENCieanb2nSHkPAASWeSNNirWQj2mzJHdAtc7ByGrCfjwZ4oZjWGMjLiGNsc",
  "key40": "4HjstWzYUNJvX6CevyhzYrdGoPiPVQGuthswux1VDGgUnvexJBmwyvxgLiP9mkpRg1ZXeeVR3vSPCEfi3UDwmi72",
  "key41": "54aVep72wjdKpKoyZ5f2ShPoDASW2jEsPPix1htZAKAGRGQPpLX5DPU72KbnBbuStvxBc4Jkf5gLsYTCdBmSjybb",
  "key42": "4ivzEU8XSri4kd63UNvUnemrAgxfpEJspMR9q6mDWpoqUUGJMRVv3f56uy2FWbCucBDo51TpjSLLRySVgnnqXEuE",
  "key43": "3ECKWvKnd9c6ozrHTDd5kr2C8VfXkMNLAmkfmB24xmhRwu6kEp6GzDbi2yT3UHpzVgGWkeAKfACsascjDNPDWTfW",
  "key44": "2w5QGYNM7Qv8kNWcLzUEjcZrKXxky8LkP2qKKr2qEp5cBKuqSrNyYjpDopmucoRa3C4UCrmuX8D4sXnTL3UZ3NJq",
  "key45": "3yEWvS7rEKwqZx3JbSBYM4GhKdcFQGAVm3MG9Qxw3SwzRhuh8bp6zrDqnyBEgjAkHVwcFKCzsnWds97R6Gw2puy2",
  "key46": "37LagKZ1cALWGTr6fvPaWCuxtHzUMzUxqDpWYTQSzMdmzsXihzGu91idty1uRGwERVjLMZpBAZTMAd26ecG8SxJ1",
  "key47": "4a7CPFj1C7RNKxGdXySh6YRJQKrvXLhagMSnkG4e3KWQ1KZFoPAM5iyVtdpMGHnv447ZF2NwZo3zcBEfAXiHZ64h"
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
