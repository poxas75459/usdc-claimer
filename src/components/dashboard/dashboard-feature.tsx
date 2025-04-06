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
    "ucMgu6enjbUUoeBjhZzfJQmMNwPoQYEBrVZedwbq7cDmar8UX9ridFFhjwqTxnvp2zpSYJ8VFvReAswCfWUKwf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S4Taihp1XbzVXKFowYo3qS2CorQRx4bJ9DpEVDFcnTxAdKATN4D9aiGvKBwPXRPgLnrCvpwrs3c7x4u9QnGNQW6",
  "key1": "3pC3Rv4wtEJRxDeuEXfqTRKHrS5iwfE4pApFekpu7uo867y7tAbwq8akjTHjHYheBhW4KvpuHvCYFzbt5mKXnZes",
  "key2": "32RBEYMjA8CH2sdS21jPuD3k3FkmjcsX78BuSMDvE36wtEFgYQSVpzTapbYAuZejeRUddzNtqNLAmnJFniWLxoK3",
  "key3": "4gSXcXRxp5AuNBtk2qF491S4i3Hg87xVKHbaCmGxbnXAqUJWLdZGrwht218FH52jB6bGNnLNyHuRKRvrzfrWa3Rf",
  "key4": "2jngReSzjpmNWjB1Ssk5S8MpG4CgKcRfsDdi4wyZE7MeCqvgdRecRYvsi3C9sqmAD52RMz79y7R9zRGjRqjrZPQw",
  "key5": "2mHGbVDTnz7HtZpeVBTSSNk2hMfBqkvhzzFeTxD5BsMepfhMY7AUFb8RethksJW3dXg4txSR2iEXgbYt6YVdC7hw",
  "key6": "26jKWg6ErccpZgNHGFpYbeG4pYyS8Fu7wWaVHAgm1rxfeXSejLCkWjKo1cRtTsFygPAfQuRZ2fQ5Pg9Mwxqnor1Y",
  "key7": "2jUVwhnpW9UnDBWbrCicubZzu5cp2iuYCYiioDZq4qj5piPaeAGhiAPArJXWdCtYzhVR6KegGyhMJd5uycxcWDBx",
  "key8": "39vxqqssEvzUk6vncyZZU7upGZwCGEDgmc4TQdt4DZtjauvo6uVHC1vdDuGxHRna1e4QdZdr8v978FmUyLBKkKFT",
  "key9": "2iBqmpCGtGcraD1uiVy3rwpyThd7RxTFaD79CMpFGt9hc3HZ2oVBJUmfKbQL9YC155uvfYkNZqHU6Sj2y2JUq5mp",
  "key10": "4SdsuAfeSCHoXrf5T7dXLrXx4x5pmBfZiTPXfmoxtkQE4L9Ei8JFtXJcmZBxzkUsCLvFoXBywtpZPuVS5RTdBhvt",
  "key11": "4zFQhAnpWkmZG2tCBupbZHSC9Fg79dd6KE7U5dFdbNpddpfRs2x95FWrJD9fAa4La11DmXKDCM47E5hxtJc5YBXe",
  "key12": "23UvpnKqyzXkksamyheVus5zy3FTABMSJd3eLGjX6EMZRuiULCej7K6euuro3PfD5SXJKiz37yFy5zAFivq4epSx",
  "key13": "yeRcuRD4n2jwEFBAPQkri9UHNw9gcMztbvnBm2iZKjefv8iRXsguyzycce55vYzpKFNvzwpq7NtcovmPnfghqoy",
  "key14": "3p6dNwVmzadLECVkD53Y9okFtASje4KcgzoF4RbQHgXJmKpEAHWkEAKDFJdXNNT4SdgE5m2tjsC7dcGTBP2FVNUi",
  "key15": "5kEo7n4J7pSSQM4NPvn6zKCkpURVMHtRz9TYUQgRodpYcfAwdKyZPNU79cbCbCWC66Q5vVBovFf26fWQb6NoAsnn",
  "key16": "5fmcQTEzadP9cniVrHWb5Yrtzr8JUs3gUPpVewKyYVQinB6Q6QHP8PajJNEHkvvTf4Rx6eLMqb78huHdQCQhaFdP",
  "key17": "39AniZQEuZDQJFp5dzdY3ZP3d6zhQU8tApBEUVU3R8LbyzwDEbYwwB4n9gpkUBNisVJEiAqGpFuiS9UsHbDUREpP",
  "key18": "5bhNXDy9sfqJYa9fs3PorKxqQM2VS3sne3tbW3qbDckgGUwxGfXPbcwscM9iEJRgAg8YV836rGU3G6ZAmxj6m9Cc",
  "key19": "4Q2priUwJispMJQQuKuzsLxyGQW2ER27DyXDQwhgLsMvs5cH3vL68jqeBrk1b1LiX6VGe8Kgky3Vg4ypvPVyW9iy",
  "key20": "4kRpJ3YaJgnZipcbWFPyhGhLbtrt5gHUAohLWKiTLu2HdXtey4VLtkUsKHPpPstxRz2oxuPMedapciUjJvKP1Sk4",
  "key21": "5a6ee6QNnW2HcmwubUo2WZQHz7DVUNgQQj6qRSN83JYjmi1hpK6gwaD4cbZyLWWVUxMt9TmU7Vw4vxpUC1kk68Yx",
  "key22": "oPEKQgo2AM3B2dZrTUTxLuioyPUXDC9ynLXgPoBe8hZdK7GmAz83Bkr5Qx6SeYncBN9k24TEyPBKZWTqM8DWHpf",
  "key23": "32b5f34f4878eert1493RH8Xqm4D5qYZmQgh1Hhs8qiAYAff4iwziSrFZMgedPveeqSmnoLTViKwuR5zXXMnrVes",
  "key24": "UemFGQDbnjNZgH8SKL8YN3pXvYaaUqX8FZD6T83YWP2b6fEucEcFxF2fAX9oEj2uvFWWtpkfYrXWpuM53jDrRcd",
  "key25": "2vgGEHJrM5BLBJAWbaQopqhQuoRYshyY18sQp1TLFC97h6dtdLPrnm5gR7dmbDorDpCZqxP25EP5B1nisQ6eoVgE",
  "key26": "4HGWVPCNxKwUxXVUjpHdDYFgY8JEdzWsocAdvsDKQe6LLwqLeZz82ssxEXtL2Bx3th6D3bfKQQfx7wMa2JJdiMc1",
  "key27": "62Fp6dVXFzkLdvfbMHc8Cjg7uykz54SdqLSPyV4xwc5cYTXXCchC1LsmKikcnqQXbEZywT8HTw1mMJeTuxPvyjRG",
  "key28": "5gVVyZhHkkJxnfczuVQVVtuWazVeVnHxM3rRfDzv7nc4Md8nYS4evAghQdsXnC4a8LxctxteULJCTqCzqfAuAi7",
  "key29": "24temDgomnVJbcB5bpMqhfJLnRiUVUWmdLvxwdBUCYSvZfKNij1rfhxc8CcA38Tiga7NU2GGrpf6NeYxciAX9B5K",
  "key30": "3mtuDiF9ftpsTbAAT6DpFgZfjnEDQodsfctD7fBnHXQTW57uEP36yYSzLkH4RsTyoP3GzQBD7wWBnW1gLLQGLhHH",
  "key31": "3Xc1ajwFahy9tCXw9VsD6mP3P7V4jLPtrxE32WNn6A9rZX2mfXRCSmvmHK4FTnNeXXUoav9VUCSh2cvrMmC5kd8V",
  "key32": "d6ga2emem67Jk3PzBkMcg33nwE4JUMjksyffwNzwm2Ch2oUE97Fw3Vsf9dUUWbgRRo71RrSHvwBXyQ7zW5kxH6U",
  "key33": "5FCvSmLXhBBHXA9D6u7QRoej7f58hRJQhXuBy34t42j3LeRnQYsEHD1MacDdPpcpRpAmJ84tqXHkkXDcfjiZJBrg"
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
