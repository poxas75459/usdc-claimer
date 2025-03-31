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
    "5ngDA9B2ceFq1NJuQv9E1UFP9eJJLCkJqH3yQRDMZkk42EBFqgmD44sdDhREvw9LyNLcs19rh8UdjzsqpnD8ioiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ssuFLhLqrKA1x1PMTpKRkbgvEhg8eTQkqRVwhzsLBma9AVuzeDHimLns13WMahKQuVts9NzePHCScqAHjyHrCz9",
  "key1": "1QkZ1phBq5qnr5CmqnMjB2TP4UV4tnDQuD1Vdvik7eDa7WA1VZ8xcERBxwQ4qYqjKeB7qhGwhmr4UbmoBpFM7Xb",
  "key2": "2YJbihzCKotLvad3ZLvKnCuZiaygTT2j2pRFQovpXeEYrjJ9496fGrtBeyYY1A15HeeRRQbYLaWnkfBSUCfAMCqm",
  "key3": "322kxNt6pyJ12jKz9sjeFNqXsAetdYSD9mskuHK7vxgoUdRmnduNqLGRLi8rzJ655pquBcVAb3LA3PX9j73U9RAZ",
  "key4": "5zwBzNFXbQqQofc15vSCx5t1tgmzFvC4UZc31S8PFdtoETHxKC6z6bPyi2vanLC4gRLuVUaiNqD4kkR4BZp9zZ4Y",
  "key5": "38JDc5fMDnRodaD9m4s9QF8wsnY4v8VLJrEPTHeC4RfAaky75LYozH4N7QWBTpiLTVJ9yiR5LcTe2Vaje1Ad7jRs",
  "key6": "rjSK5fhGMWn5DDy6goW88MdDVNhV6wNepp4fQaAK4obydspPKKPbkf3v2jLMFNUdBzfzQSRCuYJeUga6KHF5XbC",
  "key7": "3Er5XwCMoxn8cyYzLQgTaw4nLPLQm5HDoV98Uun2xFdfeze4PfLxyX2EkqcdR4BxM3fkaR8Fb2GNnESLhrtMuQjW",
  "key8": "2VFx89zjFCvSE6UL3Ue2aRrZCDQEmMyRtZ4vABT8522B6eMUe4XRi7aQB4D5AhByHYGimP5MaSBfevUYv7Y3JwN9",
  "key9": "4zWRRbRZqQR2jk17sgLqe8Zr1WGNX6j3W1V5DpLok9msk1pNqRWS2J1hArtXYTeQBmRaKWXvyBVkUW4QkSBWnZZq",
  "key10": "c1VG3Cmi9dxp2d7twgZfKnwAtJaC5xCbar6uSHPouXYi2jaTXskXArWZdc8cHSU594ZAG93nph2r2MiAYUGnPQr",
  "key11": "3QhZz92RV2rLFaN85mCCAiVASMtYKfSDUY4f3Dc2Uh5Qke7ebYhJLVZFa6F24f6MR42xmXEFucWB5A7ZH5JcArV",
  "key12": "3YvaJwYQm898kvTUzTVisSBHKjKbwFiD1KMTMBFN5U2eagCkK6Uy8m6CWs3HwAsi1YKK16xottLDbx4eBqKcN8Yd",
  "key13": "5tKjpc4fLyAn6Xs79mqZMBBVekjLBc7z8d831Nf4uWiSw4yoikc64so4hZWtf1FmeY6mM6xjykABxbGG4UQWyEbi",
  "key14": "2SYqKpF5XD7W5KATgBuiwuaL6Rb2PKBiwoSJUV4sBsE4VhKCMFEBfV7zzJHG4EuBMYp6pScd7d1Gsxk2kRy2Qu3d",
  "key15": "26THGds5ekqNnBGpAxPkWNqKKauquR1iWPiQELRwtzj67xodyWEadbHHAD2yaDHfGXgyJ2VWRzrwoufH2j5sA4mj",
  "key16": "4YfWrnCF98Yyr3zBwRwrhZyExPCvqZF4KQ2g2BCkhEiUF2aQi536jfWzqtpyYBw3vEnR4fZ8AXeZwkzJpZWEsWSw",
  "key17": "49pmAxuXc8WM5ENonXpkymsiRpoWdBdkBxhA44CDHMRjWFX4bec5PzjfFuZhVMUKTGwAp1c4tW3dy3kYiZ2qGxhs",
  "key18": "5qLzXvJWHnjeF7xj4Z8q5P73uyD2c8VWThoN9aw3ZuQHd9gWKSo1RUT1rE5p317SAgH9TStJY9pE9bUQwEQzR644",
  "key19": "4gBbc2utQYa5M1wiX3bjMHjjtE8LUAm2RZ2jLNBKFRwC5CCHWPvw9aFFmZfxZkStMqdtoXgkn8qzuHYp4c2cHYLW",
  "key20": "4SxGFsK3e7ChFYGJ12njgCnT7reJ7Zd4VN3Hqeom76NA4ZLAtnwqUgJhnB2LyqDmdtL4rHhtwG7WGXr2g1FrSbMo",
  "key21": "3WjkeKLhTZLtKx6sjSPtrfWnkWAToWcx2fftRNvoDhciVLFVRrbgY1r8W3mXfG7mQfA3jSsXvJAoDvcUKiEr39bQ",
  "key22": "5vYedYS2ZhbxPUXTxwGPLJGR3JKogEJVBQ8GgLiAk9Sja37niiUDWu1bgWAw261MzVNm53qPVBa7JjnWPzURmhR9",
  "key23": "5Wsgak8NcpoxycJAV9SXMW1fVrpZRrfTKX9Zt7MLZvGoCbg4uQLCUKHmNX87ea4hHeh4NF2UpPRxJo1troA64cCZ",
  "key24": "hmFban73TutMeFgTcZCSWYVgWjjU2D2DVvTrpmQX3jCnw8AsXk2SPZewV2nLT4zYuKjbadAdsQ8tzfQHEeoWhHW",
  "key25": "3BadggkWGACpLVwXPDAXPVHdwaJtQ8WcDiAtooQJyq72EZC797D9woeUZ5VHpVgoTPk9yiJqBcbMvoe1mmASVEdv",
  "key26": "4bj4CnBjLSiDLVr1yZb4tUodQwfK4JBJg49tb4CnDkqdFBCCTHRk6h3L9fusZd23kdiNPyMx5Ujfy7y8NNwyFBJq",
  "key27": "hTLazP1qoSafjJ6qSQLwPnd1SRKFoZsRp1ko5AwxAJcLgMRjYYTfoGkBTvswrJjtq6y2G2GmXDopVMHB611mFXy",
  "key28": "236gTT8rHmAJRjK3FG6SKxJHohdYYg59XXw9AEtgSwfN7z57WBNBnWH8Cm8eXH2vUT9mYGq4jdBt5kQg5fWiSwaj",
  "key29": "3ManD4azHtPBrNgA2ZTDebqfbj6ed7aPSoSdLSLv3amTkJsTpJwE3hPncowDN9ZF1UnckSpi31L9cp5h8PjgFvob",
  "key30": "5M7jwxLr8K4ULBkrqgMH8pkkNnMgxVD9dQjS7H77hrAJvcXiUhcSB2jDGaUyyc54gsEs1boz5bZh5MaJazJfd6Ro",
  "key31": "2AaHjNwhTaA4C2ZAs6c26yVQv1gaKcbCvZjGDRrq81Np27mxMhcDgpqYwFkbq7PoDaXBcgGUp8J24VR4tupJ54bg",
  "key32": "4MiYTvhtZQkg7jjbbkCn2TC5pHghtKVA3vfcepFMsXaDQMn1iTE13dNfpEWyNniPguKgJ4UpyQsbb2MmgVNBy25z",
  "key33": "c94NPDPsEStPF5XDcs4TRMC7xUkd9V9ERbdFn9g4BwLfwxVgLRT6zgfdGbrBiTWGAUXgCMRg845Qkz3NfVUwpoD",
  "key34": "62hxVbxs8U9NBDfJfrj3eWc5sVWKUMGkqQqRwS2qcxXcEoRTk1tiikum72zWPo9s35i5kRi3aQecDzzSUDQJzCNf",
  "key35": "4aKsiMKYQucbXbR2UWueNVSURcSPR7mFAoJjefBgoLE1otQyXXRbU6sGmf1ayeeCCmQk742w7nJcE5DNqKuZK3hi",
  "key36": "53UUFBr8XVJumGLyiP6e72r7iZUjfZoW5oDSLrKFEaYkx8E1nnCD3vfnnEGwzUuXXhA9pf43YZ6njrJAgzNx56qY",
  "key37": "27VCvdEQvgv5AWsikWBDFZRj35jJY4NxijBbXrmM1YjYV6LSjDHjW6dSiE9zaeWjHBqtKGCbCcjGbcVjBskjDVgw",
  "key38": "289mzbMyhVyQF7pCtTk1iY5dDX6J5P3qFBngyEdvaxLdWhYc8tfquiieLeNnau8G3iG3ZrcX1Njhwh9fr1gM6Gn1",
  "key39": "4Khy7mR88J97Q9pA5RVFmX9cDchXruUAatBYh65cxogZN2Yut14aP7NsKk6Kd756Vx9f5C2KXPAEeKi6MYYhdWFQ",
  "key40": "2Gvy6CXBcDLxcR6ru6haeLyZnurmxTqpKtxmX9S8TsLHXEaXyhfJ22B8nRYK1gMSDseD5XyeuYDy3Ahdh8MneHNQ",
  "key41": "5EQo8De1RruQgyiPwsotjL85yVAYSv3dB5d6x4mgheZXyA9uCJ2UuLEwwnEBWw5kDT2tfZZ2pRTN71vjcKcp8yjC",
  "key42": "KL8JY7ktEbEUC51ckfKs4qbLguTTukW6NYNpPD7jZDjsXVf16J2LkXFXJ9Gv1PcPoWTqCm9BwuNdgNHYZ1YJ4Ym",
  "key43": "53jYyZX1NN4aoEXgQEmkuiYMrQmei6RLko5oNHYoYB2VAe1pQkk94JW9DRHSZBAK6JHt2kPHmppks1bkPaLZmjSe"
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
