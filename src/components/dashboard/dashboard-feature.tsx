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
    "3usNiMi8ZZftNJDiaCdTK3gXdyggcksrehu3PAqVHmuEFkRpuGkNgon5ijQrUY3PJnt65ejcYiPqndKVjT5ENgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hMBegQYXLtfVijz9MYQhMU2px54QFoomzbJjxETosKpQDm3byTpDAsm3Yxt7Vua6FmpWSY2ksryo2jtWm1cCTtf",
  "key1": "53UxqECv7Nsc3hbR5B2XYmARP22eAjRuvVL9DFmx5Gx9cZhcFg5pBdokbzVk2kXaUw16dsm4YXXUNE46oBUsLEWc",
  "key2": "4wNQWgDNhdCDcPduBy3e4ZaqrK3Lpq2PhkbBX6vm2JHh4rXpHtE6ovCKwAiMQNoNtgKKyhP3dH5ZvYqp3AjJJyNt",
  "key3": "2Uv6q9vJQABfza4B5UNoDpRMgWBqjYLjxTRxNTXkCsMKmdVkzN137bVpxGCdG7NFACPnj68XsjfckgLak3vKoaSP",
  "key4": "5vf2CJQe9oZomjQTaSRbyqfGiAfvapRKGq4zPxAg9tuM7C6YrwQPKSsgioy1js4UaUWSg51BHZmEPM9neXAnNRgK",
  "key5": "4v4decUMsTCktfFZyA1mnnUHoc44B2meojdbZRjbDgHXP7YKEvp4eqjyjnqf1JueTJnDcbpvbs91SEnzPFYTyrHZ",
  "key6": "4W5PeizVAV5jmaG2oicnPcirtwaa84Wd6EAdjJYNZY1x8vv1Wt62ZHXjNKM9R3UURvrwkm5BLbPKABRow9LQzWUP",
  "key7": "5fbkTDkD8hzqHQmULR8iHJhL6iTVgoVEm5WziRJcGnkCXf9Spr93ukDVN1DWS3NJVVQRvFP6cn8fQn312d4qvRk",
  "key8": "3vsUwobUKppWjj4s8E29KAb1UaWYu7tZ94zfo6iT1gUZ9uFK1qXK6qiTpch2pvJqv3ZV44iETUuddhiAdxmVbx6h",
  "key9": "9zc5XtgtsEb8dgBeofN84VoB7HPUMR5u7TtfYDNjA2rcdopyodYpDsz8iD7piHfGxSKQ2v355Bd1NRzJrhnFdvX",
  "key10": "2i2aZmZ16xaDZ6zj2ySj3JG4NcTisZ9VMdSMLVpVHKtodmLXKLTd2imK6PEcbnWudfx7gKN3PS6p9MLSMRc5ckNv",
  "key11": "4fEn1iW2gnco4iMK9FHCdTgtQ9x7P6W4z9dY3LyeJnPGcwRs89HDMkJYD3AFQwDrF3Tc442ooPhc2pPCa2Y4iWpc",
  "key12": "3WxZjwcPJ2hdJWikhapf7wp2eE1tWku7AiSNkY31aGuPKNuERRNoCnHFYqBgvJFskGESi7mxi4RMK5FrpGLWbGVc",
  "key13": "9otUfP1rgv1x6hCFrSKBJUoRyzQ7X979UR1kpkYopZj3P2x6ZvrpFW1GxFxFdfKeN4pvjpZ94tBaufrgUgdBdK9",
  "key14": "5LSSzeDBtq9cYZikqYEj1LgYM87xqTjPDn7XPgYyNEMhmcFwweMrtSYfLd3FbesWVGerY8bWEAH2wVmsLjryw78P",
  "key15": "53TEisg3a8SWWH9DB7ta7jL74vKt9hgUrsvU2t88f53THBMMeLwiFQNapjRgGL56NbSPXT3ewkbDQGG1F2uRy8eD",
  "key16": "4Exm7xs8Zbh4cbLwNV1HMxPXZUCMZj4qtGipoxyVC6NEfZZVpV5vHi6cuwwCWKr73g3K7K4dUnpbGYUq84A7TbAP",
  "key17": "3mjU3QHMFQtBZLHPHW3ByQCK9Pdrb1pxUhR27hK8wDjXQ71jz5PvNHykFAWrH2QZWyuh7sj1DUZB532AUiZdzX5P",
  "key18": "3DagoPHPEPZkiU83Wqdo6dtrTZj6CogBBDDN7RVN5Vgw8GRYeU55e8PtSSESXMpZTemmRQZi1PkYLcq4ZVjBBc6u",
  "key19": "2noeCPuRk2SQqgkr2d5b6d96TLBEdmTeAbJR7bc8m6vPaVzMD71m15S2yKQURwMstqStviVJ6Zf5rS282dww6xom",
  "key20": "3BnP61rEh4taHnpM5CkQw9TgLNiNjModWHZjEiB9CwdLT4nz5JikeN6cqq1Knndj4hSVcR9qHSgCY7otysSRNbYV",
  "key21": "5hiTRPbidgxzVaga168wsaAznyktRMF41Difu3X2gxxpkPQaFiniPk4jaiuFv8xMpxde1dmZXcv1yT8YguoQFe5e",
  "key22": "3GE2tvCB3srM5rxx7ZFq9seuUJJxPWCifsGbDN39nqDresLsDbznv3DR9aJdwc9RSsNDQ6bcA3gfs5xqHsxfGx4a",
  "key23": "4XFmApKnQxHA74CYFCmJVSkrg89nh39V9Z6ieLKePCvHvb1v1mWCPktNqfefNDTKF6K4HyPMaPUNQjArGRuUj5fL",
  "key24": "CaJt2jT25gNy3ZxNwAhtgsTfvtKzuTFh3L522ErjxLAEG2jFP8R6WjNqCJkR7yvrnJTMmupn7iPmXqgsqFdSdRm",
  "key25": "3NMohGZZuVS456BpiWbBN2RsWBEZJFyXn5L55Ccbc46LHAaJzwb5JFpBwS45iPW93c1iUsmaw2jCRHwCBwXBUUUa",
  "key26": "2NNZQcToSUWFi8vChQmBAXoFbQCkD7aPWGMmCoFgH7tZQHxPk8KHs1EjZ2jhMffvFNEMfDg4Y1JFj1eyCbso2N3d",
  "key27": "4itvM7A2H7xsjqTFcMRUQCQfXnwHzEevKkN46HYQnv113Q2fuzSyyCbt7wYZ4S6VZKSTWrDAfpF2GhExAWPrEvmX",
  "key28": "5n6xQFiNRyRGNUAwEF755c5A1BhHKyuACqV5vwEvv3kgmqtZBRkSSi78gxBRYZ4fa1MKmJzdxanNBSVPipx7u825",
  "key29": "42ih3kmzq4x5TDznoneWd7TazNXNAeJ65jGc7gvVUHm192F1MZf1X7JeWTY43FnbJUXvScJrL5Mj1rFKYrb5kyXt",
  "key30": "28byA5BaVmJw5tidZyTiC4fE3cKsaKdRS9vgqC8NE6AWzbu4wKPkqrm6iYHfQTQYKK1usEU2PBrhkr3F98mvj7qN",
  "key31": "542bGtQrBYEfyKbQoGH2CBe1gBxWZ12V5s7kojrhTXevxX6w44HgtaXjHtFmAGKGDkD3WN3q9C8NhMNTGcLHryVF",
  "key32": "3CHx2BsVvBoGhzZSy3GP8e4gFqrV8CPyxgm1ovJmoY9mCYX8A7RNDsgYMu6FRhSxiCnpZvK279npVXZsRdBHasfQ",
  "key33": "3uSz893xGdLUzJ4unxcurr4jpdgxmU34AnwzeXjQdLYimibrJZ2T8Lkhiziy3eDtiqRVf7frLEWySUpPriQ2qa2n",
  "key34": "4LXaB7jtXMugMdLbsoTkQPiBRBHqN5pd2sG5tsYLwBvEy71NTU9bN89iDPxVAosdwtEmsotWDjJf6e2s31Q6xyrQ",
  "key35": "29jYBLCAD4HwCxjvpL61fxdSnCWfnMw1PPDzoUwypVvH7ddxPkAgqLMe7mybnLCS8eFQAszYodbxKsFdwrME6DXJ",
  "key36": "3u5WAQazifr8PjcmpGWGHZYj8zauY8wtpk8ZcPBWXswAHzLk2ud64HYMongAdtJiGpqYM1TH22ihv9QniY3V1YKT",
  "key37": "JtnzDhgUsZFQNjeiaMPV5bLtknwBP6LdtiDsq8RTJXiN6EbqWbsLTSBDweBa5DcgiwSpZXA2E7Xqxa56SzQcc6A",
  "key38": "2ykyNaXWtMUzYvJxdQ2uzw1YVKhLkHy5CvNn7QLaJEPcCRd1MTJqpSa8ZXCLWujXXTwkcAncbvpw9bVUHzUomzQP",
  "key39": "2DEk9JeMnenmD3Xzoht6N5YCkoXNKSE4YFUvmJcVqCqQJmz78pnKc5RSXZYrnrnUdwCmLuV1ixaW5Jt9Sr8oDTz3",
  "key40": "4aS27bmLgb3kYyiHZ2BGkfK214gAxgVQYbiSsS2x9Zzaj4UcHLMJiLQvnKTuHTofZ3C864EH9qRyFUYYHDVLwqgA",
  "key41": "127Jj5jaLjRJ2iiFHMFSxPyFsZ1H3hAVo8umNHkvweGqqZ6Rww1crKYbVeSxTtyDjNUUCnspcyGFZtoKmEAmuKXy",
  "key42": "3A3mrXKyg4FB5RZWNAwD2xCoV3g6wXfz5gfCkTDQVaDRKR9SAHoC3nX2EhGuHg1QbnfCLj4nze2im2uFBUNCMwwL",
  "key43": "5FWtp78HSHHK3vd9oex9pxDkqqEfUPTcUr7rrErT4kZUwEBSycWUPdHvKdp1rtFeCPD2zuL4UWTdMaywFDu3f5hT",
  "key44": "2FuztCkQ2dqfHqgM2eZNzqht1tD6a8M6wUSYUc3MiTTC4W9RR7CKnxLaWj9S6t5XBkmFjh6x868TrHzx1Gbvo4AB",
  "key45": "3o3DPx1Fy4SH6ShniQy6LW3bPrsMM6t2Dnmb41HYQ1qHGkSe7YvC2uV8MR1cW3hQVqA4BLQo1Yj4cjmBjehD49YX"
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
