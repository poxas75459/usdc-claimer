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
    "5CfHHBNPkviEfSgXDTDnNzC61ERAn6UuCdFk7WvbQTv1y7JHJFhXwxCfVHQagESx31TZo8f4Q99r6bKe2yA7YUv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LpmcktAo36u7ZphuesLyKGkVHVHmLAn7g921t8iSrCEtPKkyCJo8hpBH4yyj8bTs7xRPuSrcLcGJRjHp93o1K6E",
  "key1": "3hChmuVjN21LZCozgY4ihqWfRQgsNmqSsTcKrXUbpgGApzbA4a85qWWvJzLKFAYiFVb71pnhy7Cq7DsZFTxSKEqN",
  "key2": "3FCJBHxzk2fAKDrrECDmYafGfWf5qeZN4pHsEfSQ79pdfZgMWXRzon7pfw9t7ii6YyDatKnFCxu4HydQjEqLNsCi",
  "key3": "4KpjRtbq6JeXfYT94wQzpWoHfefa5zbAq6Z7yd4mbH81mxCp4L2qUnBrDidUHsE397GK73zE5V3cJeq2FWvrJgzA",
  "key4": "5dsaV4ix7VGfsAFbmEdZim1RVSEjAJvGMTsqLWmXcdmmDeoxCPdkzUZmygQrrmKSwmYioBhy8q3FP87rgtoEjAWf",
  "key5": "2M2fqzQ438nzuVZRUGCTa1ohiU2ej4pRPwC342xkwRmZWG7ydaamzbzFkJA4iZ24SnHLQSd9RTfNnQLn2pvKMbKB",
  "key6": "67BG8NUSXsg6VMYQSba3mc4vwrB2wbhRLQeNiFLXKRRoDHUqyXj3L7WnBCMP1tQD94EPfJU5LPmKqqV1oa1suUkx",
  "key7": "3BYLqewGDYAHvojhvuMPBV7iVioq1qjNYuexDseCqTVkFmGnt2Cwo2hSkKqbqsNyVXHYcBUk1cZ1Aq8gm3qA9My9",
  "key8": "5aDKN8SSvvDsvw6DvLC3qr54kFVDVVmWrLFdUv2kHnDTwtE8znc4KFeJ28qG5NPZQjAG9dWD7EgYwr78fBxiHdto",
  "key9": "635ULAfndCmSKpde6ZasNUgqZJn3UiGoi7CKv2zwKDDv3hkmSgA8YWNcuAUtazBDc6yk8nLjAt3y6p6UXHMkZ9Uf",
  "key10": "5athUcWDYB15mCcmfStCLbKgv2A1da5SLSmK5SB3taV18JQdahYJMr3PjyNfxRx4XzSraBA4F4R1aKHxCGch264R",
  "key11": "2gN5dTeprdMWQ46z9evbnKm9Tq2tsXnQadyHZySS1wh8MXxSpceMHY3C9ZKd9Q5J4Ddu2Hvt9ay7h4SQ7HBVGW1",
  "key12": "xwf8RbrBKneMSjZxaxD8hT7mLCrRAvzDJRVryfNCw7WEcWwsfzxF3cr3SBvwUbtpAo5paQbZXXR57W4uxdTXASR",
  "key13": "LHeT8iNbh1F9oKbTzMBab9yMtycw8GPezdmBSEkJRunHCVnxjdT8ZbvhJxA9RpUPFMb5fAusyHQLJ4GoWV2tVVT",
  "key14": "DCSE7sgKedBVJ6N6HEet7zTLdiWdAWf5oPVZfzAkgK8agaWKeCzii1dE8hDSWemLD4NAyoH6Km69BKN9zRT29LQ",
  "key15": "5k4EXddRgQw4LnZA2ZZo7qTMVQL9RYJjHdG4msNfpjUH4tcx12rAJXfC8rvRSRmpREJorxkaAcFjBM2PWKEbBps9",
  "key16": "XcbqW2bLg9K3DPkXjzr3sAkJLrf6CZECBg8QwLJx63KNprwYFT27DUU5YHYkdXRRe7kbvxE75LZuGcsdENttmur",
  "key17": "8uN4iwjC7utahkg98Z8WrL4mfZAgiAcxgSNzUKXry5ydydH4MjUvBYZGGNPLmRf8dkcBhhJATTqwFbGJq7kH5R8",
  "key18": "5XjFg2MBfxDf9nkRpTboGD4s3JWYG3L1urK7gfBy6WxuTUABUg5bvpESP1EYsXgLo3GX9ynL2Y9tPEkvnySRoJi9",
  "key19": "4savvHDBgK7XGXRnovXD2BWdDpT8uDbDL8TA3unTsaPqMehgnWauPwcRPwDSZFquRfuinjwXWGRCNqCU6tHCBmPH",
  "key20": "2z6jrdowBSoWC6mXCq6ERu2AKGL2WfaimTpgB1R5KcF5RuPJwteJn7ecori18KPELowjsjQgQ9bh6BaLZP9pWRYS",
  "key21": "5qshg17hDA86nfBhEn57te4t2fcAzEaqZBkMNPfv8qP1gzgzwwLiS8m5yUXXVrMwWc6yE4CDGytx8yrBLJK9DnqW",
  "key22": "246ATFpqmBHTX9tUfUtwa2zuwm92sfobyCHzejxQyRq148M9tqDAPB6wa5qZRVp9FNTKCGJAXSaMTM58GZcT5NSm",
  "key23": "3fyfChtgfPvj4cXTE99V2NuvJjBk9tY3LorvsrYzbyKkg1xNA2XegSfNyW6WYUmkuU1LSx4NJWC7k3rh3L9UrQ9c",
  "key24": "4iwJCDX4vyhYCqRx6dAdXdQnmeLpHceTrHE7cvSV3NLWtEKHkHTVyXbErUPM6ExCtYzJNc8tDiQakFRN16nW2RJ",
  "key25": "388J6vKKCPW8PwFiTNaz7C9XvhM7LgLemDDk2D7APpSEgEGbKjQuk3xcwfPfA7RMC1B3A4bgW4eosPx63zjugY98",
  "key26": "2vgDezWVyZguzKqYbS2m2Deupao3Nzimyf3JCDrYERyBkv5vnd1pFpdfNPMpFxWdGSEeDT8ZnhhR5SkFMYJpfQEJ",
  "key27": "4LBJ1Zv2ebQ3Cka5tYx4VMQVY2kLEADLwAf4T4FEfHuUNK9xBoaTW6zJ7V1n96dhKwfuvrAmKYASRXEc5tpReYPn",
  "key28": "2Kmxumz3eTqdtdfUNoWUVbXN6Uc4gtQy8825TRHdV96exthJMKZJMjPniLgLQqJ59tTbPrRRQpghYN4b5EmHEX3q",
  "key29": "4WbL7TJxgP3q4rft3jUpsPgivJQEBf2rL4SxKzVZ9v2WPnLEkekksvLKCw6wwvBxLZANTaE795HSsiCyKdPHkoy7",
  "key30": "4K1uwE9m4qpAdQSdZQnZjZLKvpc4bEXD7fLseUBRup4Li7hRzqz6gcA26K4iUQiUcbsQHJYC7SqrqP2TA1A4DVvs",
  "key31": "638GpSqcPwiYyzhzpBc1KVGpfffWw9Du1eL481DZf3FsuP1vwQprqT1P6nXNtQJfqX9y9Li4KT1FBRPD5XusTVRV",
  "key32": "3qyAtDBGpoMbuAzcguMciLuwN9TzpGfFr2uqD833VWqSbG6zM35hXtcNtQFzNeJNNUpEcWPMHSd6cRa2Lw6JKyXw",
  "key33": "2A8TP7kndjfXvTH3PxjgCBeWZ8EzHBpGLPXnnQNT71ChWbCw5nyjDYUdQKnZ9QSddyuXUDRB7dc4Aj5uDmFbBG1q",
  "key34": "WJV9EZvpJHVKu9vtihAPz2LeZiV57wLs6HURbKaQGNByRBLmM4XjgxuxLkwwbLW8xPGep73wMitTo2DiAZynTG9",
  "key35": "22xiM9MpduBGUu4YkKy2JDxkPanAdY6C4Cap9fXoWfTyFd959zVMgDFBgGcwSvtDKeX9GiLL4yYzwVugET5UMBGT",
  "key36": "f24Ge1sFQEVUYSr5HFGoowQYhsneEVHy8EfhZaT42VmsPXyk6uyS5WtDHFUXz4jJetcNAmJZqs5UpmXSUXDzo9r",
  "key37": "3AfZtYL8gM82Meeb3Yqw3GbEYs1UtjZK2oNywmE81zCXoMT6st4TVV4mSiC9E8jgV92FhEfGkFtDuBGEwnRUo7jj",
  "key38": "451XTswNgjKf9sahFqRFBWJfZubheNPiPvbt38CsrogGeoMMut3Rmtq48S75ioHuAE3wnNyVwvRxiPh4JkQkTqtq",
  "key39": "zyhpGBgyeb7WRaUFRyFdtePaTmJNvieqWT7bkVNBfZxt4wv2Mcbsm87yABxc1VuotyZH3jHsLongRYMnvba4Uvz",
  "key40": "27KR1y78hGYb2GW8uWrH1QjtyXCFBx5G7tSBsZG2ZCcQnUwD52D65teobziGcPpxnGnRXA3eT86nQEMKwN4ARyJd",
  "key41": "3fJDg7yHorhiA991hZMYoTb48soGEnVDWujktcVhekc7MhCGsw91s2k2bTCJVq6pPtVvzh5ECjMVvt6fk9kkaaUY",
  "key42": "4zUbYQTQdgwGNRrHPR6AtveLYcT2HinFGKmkJu1Q6kkv5neMBZRRhAxqcbyabqhijBFQL46rL7Ci9588cEuKi4Vv",
  "key43": "hja2MnzzMPzTwrGuHqTcggQMvhJuCAgNxj5jxGKzfQRofR4y1bfYY5nnj2UEx6M1pCfbVsTYz69eZVyjzVtmGQ2",
  "key44": "5FdrqQzDGcV13DQpvKRMAkhk6i8ZHqvJRJEpevoC2BXde72ZexFBipbdNQMXvbHdttb8DktYPH27jSGF8JLNJTWg",
  "key45": "2RQ6UTYsRSaRtxADhiP9SGRP5zshYd2TUt4Mdw1BiiVC68Bgpxt1sacQrvffwjCPxCkqtMLiGQSfLwwzBinUMYgM",
  "key46": "4iXCm3XybikVpd1gFD4drtchRvEXafrU9VWe5sxqEhf4KqstVoct9uHXgiyWdy9Mfw4gy4EzAyXPbikJQq8F7qbp"
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
