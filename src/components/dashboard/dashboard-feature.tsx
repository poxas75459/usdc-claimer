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
    "5w74azLjA8wqvVdBaLUEawbRdzLhKJqR93vSBwu35r6iGbV4foDGmDauUnx9d4zvaFAtQP4XUsM54nygkMCX3vqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nrYMFgiVfUv2AjpiFd3mnPm4FVD2gWj9dNCT2fmubPsZHG1ZrH5hdsWKR6Yb2wjirBGhXR8HdXNLSXP9eMoPuw3",
  "key1": "2edH9GKWUWNdnHfNSk4jU7xcXM2do37NWqL1Qxoz8gb5c574fndr92YmXRN5HerWrrbRMZHTZGay9Q3i2eNQVFxE",
  "key2": "PvaUthLLnwxYkHEocVqEDZuUs2djWBfwbQ9XzJ54XgrQ6yNNYQeHFpNKojDHPj2csY7rPPcqKN7yfFsAdYBkuRh",
  "key3": "28ShELoU6iSA23HCxbR1uBtgDwSeU3HMSLfReXaZduBcJJt9sGrBJx7aZKsPX4fMif8qmNC5NmYukhYdvJkhJefc",
  "key4": "5g5sq28dcyjG26hn7zdr7gtkqJ55dwF2qAGQbQ7aXDxVeYFdFDs3oNeJt74m25A1wLQi5ia2AH8ZGZStf9cFaKh6",
  "key5": "2HDBwYenruaUBWUEnH9bVdJ74qqvbCoCMohUvsK3tJW589Tcva4S9Jnqhqr8Ez6dT7B1UGM1PuQk1r9hhJSAqvqi",
  "key6": "4MiMVTBgL8vM399B1ojRX3UGXQ6jL3ebJoNxuLsZCuMo2Z8JhDKRhCuNqrRTtTErZPxHkG9L9hsd7BPemUSjBh6X",
  "key7": "4uj8LE5gHQQuRp6NC7JjgJ4tq4LTTujHDv1cMv4JPwkq6NhuYyAq5J7qUrH5nSEiFp1FWkgBmeDVHtk4qt51AXw9",
  "key8": "YtNXHtvnP4qa1ZTi5AVsAscK14iFxQBJ2LvwfA7QqURm4AKasipj7aavaqCSe3VNHEmCt1W4a3Sgwm4D7bdP3R6",
  "key9": "2bvzF6og2CpLCAFH3AfsqMvBMncah6Ptx4V5VX5kqjnfnfb1kF3vLPTQoxerDge4xghhHb73Kyod2Bi7bapgaV3E",
  "key10": "3eNjSkAtG8YQSLVSL2GMfKQgViktwmEyiJH6JvRXyhx3q9TdZnpemzWUiYujbnyrZdGkrD8LktwXogbJYZoBZgwZ",
  "key11": "4dXH7j3zR99ctCW6CoWwvgQqpq4E7KUsaaFYDcifEYQDUrVzMYi5w8ri7DsqLwmNWaAMNNcQikuT2PXXSyy1Eode",
  "key12": "2QQww3nHoWueSyeQ8etSa7mi6ekssgKhN5ysuF5VMm1juZsDVeGYUWiLh5a4ZNHb2kk6HtXuUQrLC67e1tccLjQM",
  "key13": "zgKPES8usCZCBnMfe2CKUT4VrJnBQt5BBtCQEKX3o1EfXmgsT9AcTSvRri7ezxyz4Z1FjoX5TT7XE7FsaoH3R1y",
  "key14": "5B3nZY6EpLgC33ibn2rRtvC33W2vUiMiK5gbkzGqRciakynbDobdVPvo98EXW5WG2oF2pMD7fjGYSBzT2t12niz3",
  "key15": "3TDJrxVCLa46qNvFWue1V7KJS1ESVZqXebzS195HqhkLRk9MmBKPGwwkdP1D1zjg2mQtsTW6jLXAiGXTAuK1PNbX",
  "key16": "5n9NfdVovoKSjF1zHhhvPbY1BVnU3iVWHxqpidLyo8ktCCdJEH1Tund3U1nC4nwUWwwgPdT5xafcXx1wUufdUBbs",
  "key17": "25h7pPUU6ZESd1wMWXuRbZTVi6DnE6VixzL4gzGSnDDQkjfV3h7Ri9Q15nh8XHHwvxCVe3vgehv1yRfh3Ebpe2ps",
  "key18": "63AxXYgydTbhRof64hJnUFm1zk4mTnjGHFLYoNfnmYmJodC3Zv7igXPFJDLuYk72P4Ec83EquxifVGapWc58RRyE",
  "key19": "5G7juxC4saL5XqUsQj4b3SQdMKs7qRyk7xWEWAEUxYMDmqaCuS79cZhJ6RXo7tJBxx85mmf5vUxRW5LeQB1zfSBn",
  "key20": "4anMiXqUBeVLtvxkFJ12jbb63qeUYbfpb5aQSMTeoSNQb48PHDMP2mbLt3YCeSymxTihy3A6h3QhTSeeGdoUJE6p",
  "key21": "zY5V1QZNyfPNGT2UMmpYx2oCTgJqsBadBRDqok8aAz6DutyKWPJ1qSjGFyd7HeZCa8FT7No2tenifg1UaeM32L3",
  "key22": "5XcJCHAPXP1sKX4pbyTj5rCaJZ7vuGmcvMR5n8P6vUyoGEwssW63wJ3nNAmt5Cvrkgdp4tEzDf3eAzTz5cthYLQU",
  "key23": "3wkYEcTjt42WUNRaPCHLbx8tiYoUcGcpGpWdsMZawkT8kjFopHgrNxsc2tHxqY1B8gwmALDg9FnMuRhajeVbkFd4",
  "key24": "5VSc6XGr7CUsi6Wmqns7oS4QSEHQh2QqL1M1CXLDKJ8rJZVsWH9xfFqiE3hWzr5bexd3Mm57Jfxsa3p2TGPetsKY",
  "key25": "NMqhkaCoTqq8bKDHeuEzLtzopd3iWuvzAc63cfRpafGLRf47s5ff1ZiauymZ3RX9RusykfytGtu5gUv74Ph23e6",
  "key26": "4uY3DfGUSJbWY3djRs8KHapKpkNaR4HpsfamdAjyJV7ELZuNGZFUZ85mHPgurp7GFupnKqBGwgJ4oMJ1HXNaFsNk",
  "key27": "5YHtxaZ4Z8w35f3rwKaAtMZ3B3M5jFWhZRn5ZKM4oQFHZF7VRm5iVaCNjmPFMvWwQZLbecsEyP7xe4Ux5mBpf6nC",
  "key28": "3ifbEykPa1bhNjsyMoauKSufXREJqREP6yVBZFbiCeePNVZEv7wBm6YV96YEEpum2wqy4PjhdK31LZ2x4vhnjaGN",
  "key29": "2tQ68qFoKRoQJU5asN1K7ME7UjyvS9QbV1gbhXAa7kyVgjnA5U33VMNxEDPkVkkARnWAC7sQuKgwTX7Zvn621V8k",
  "key30": "5FJQQDyDHyd6oGVCQXLQUGwFnPEKJ82rCYDs4biVkkdnpoSHcviRSazs3dZDVV72unYNWYNmS7XYigdMy1Kpni2D",
  "key31": "2vtJzzGXiE2jxA8bBNVDmjEzqCAM5aZedEa55xdtoENKsxLUDnLwuv4B98wE5AnBLuH3T6kETszGtTpws27mfDX9",
  "key32": "S1kCC7hSno9QAQSL2Fcf4cM62cpuBEZSAzPfbobWc43MrK3ACTw8gyA1foX9ePgKnrGcDRDTXwjyu5xL3vWNpcA",
  "key33": "4XzGko7MfBwopz9FoLm7egeYuxncxhaynQy1wJE6tbHJ7F8AQsymTnFz2aSX17dPEbd1ACWapBDDqyHNTbVhc99B",
  "key34": "2SCRBoc2BAzYiJR9HkvB6JYWpFPE9VFjX5LrTctC5ZPU9S5R56gJpsc83EkXK1TV5x8sBpD7Dgv4YwWDhGwQPk18",
  "key35": "3Vx4uYCTASa6jP4c8Koe74sMXZz8mBZfK21biHhicW8vWPs7YVtzw8WmnMAWotjeEQeshJ7ss3Kbjx2MiKMC9xya",
  "key36": "jsw4aPn1aZa3Kf1yLZNTdLbB5EXRCUYVaHQVz9pVv5AdADDjhQwJeLc5U5zVTim3QY7jJoo9QDu88i2YHBL6sMX",
  "key37": "46AS29NqxRT6ngRyJyHaqQNeB528yfhztSBzLQkL4gRKzHe1x68EgvCCK8AYhZEUiTuwvQ1onmRFihmheynxbBMf",
  "key38": "5KHEQEMMgXrVecp4p7nbTGZC5mwPptBqEqV6RQKs64RHY6QdeLi1zSdUqXXHLPRJTCESWjNGhWSmNckXu77WnTyE",
  "key39": "5cNKgHYjJU7Fq8cXEerWWBmMHzRLgrEhV2ymGnFMx1TL5BMgmt2wjW3xASQmDVf9nMRf9kyW88svSXZvoV76dc19",
  "key40": "4ZgibAiCPUayPDbAgTr2U4AqDrZGYxnBKiRrdybgEfhBxv6DBRZFBQsNnxdcgAG9eAiMhv8LUUhmwDwG7Wgi14X",
  "key41": "WiNrkHZPaMtCjDFzbJcys5CB21hoNh2FD1iY8yt7g5ABTuL8XPeCXgSanDUs42gxNXtcMmZ8pCt4md4cs2XecNN",
  "key42": "2TWhpzEhYCiAUSbQt8YqyJHkhkUwo3YM236PfSPJFg6pYYnL8CGjuyRqp9UhxbCBs15ocZi6RBrcL3Qpgaddfbqi",
  "key43": "4Fbx4wH7b7ShSTsDda1a8CpULYwAxLkPnKk6vyxCVPQFD8LV58okYgMiWPu4sPDoTLWDrRjx6b23MPDe2x7Nc7er",
  "key44": "2P4XMPWbBsGi6Ar8b5MiEwxYSkhKkj6n1Z8HyK3V9HFN9Du2yrTmU5X1TnjvoYZUMpnB6WgALGYf67ATBsu1JbPu"
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
