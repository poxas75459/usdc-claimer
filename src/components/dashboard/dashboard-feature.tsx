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
    "R478b2g54uRiDZ5CSDZvtdKVkmYUbMYPeX62hDVP5n989qbRiBbQBgnxQenzGA3q3vDzAyNDzCPt7nPCgbZxC8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "APCmbpNqhyus3yjCfuFnu8vPa1SsnvsAicY1fJTvCzyAFjieo8rTo4s93AF1WFBXuTf4Y2ULnCrUxs8rEGCxXeA",
  "key1": "515VGsSCx2DLywWWapUugPTKXujsE2fmpJPCxebaZg5ZxttLtN5ywBom1DSrqwXBPiBoUDpeRxNcRDcnuMYD8Mc1",
  "key2": "5WHxMBdPGK9FT3Hn2JqmHR4Qd4CxVUX85hGexBmHYSpVybfr9gRpRXrEKBriCezQeheVtKaxgaeVxsZ8avtSQHZ1",
  "key3": "2UAuREWP2W1Pbxf8wA5oZqxdoWtrPCwr6dxqNhJo7pLwHc1RYHdVJBAHyaADbzoZG4g4mLmcGmb6WZoztq5PXXtM",
  "key4": "pDo25e8xQJfTSWFtbjxuAiDgrVEPX469Egp28bqssVSYEjK6ELtBUgpegsBrdVY3iHFM94BvSMFSwATXMHrfGY5",
  "key5": "5uGpELwHTNM9Arm8eCwu14Wn9bAhRCdfmcmD5ey1jPDvZZc3kdNGh7DRN5vuZiMivgtVB9zA1npvPAX9gGRM7SLV",
  "key6": "2yTbFbnoYH4rz63EzDR6mepUXbNwBUsyV27YzDX1zRmko2qgYSLrhHCtcmf1otohriEUCeRM6YyN1ZBEeeQ1oFvB",
  "key7": "2FYgz2M5HgFieYj9xZnGihEGwXNsRnuUHdzTwABwr5xHLhNNxgrZcXczfmqFdQ57UZjmDBykzWkaiEbsb16pLc4n",
  "key8": "5JGFv1WykzPybcvNt9ZAdZQiUy9qhxmvxdeUkpQrrkTQZwbrNYPwx7xvE5mWFiiW1BnPDiVnSjAoQnWYJs39BLQ3",
  "key9": "P3ZM2KX8ejQGMmCneJyzjYcL1cfiv1imyFP4U5k2VTTGj5DyzeZAWMPNN8PcFgkF5G7Efnh9E2KmiT3DNPdCQry",
  "key10": "tq9e2eux8npeXBX6ZLmVFjcifernnyHVSMHX6QkuoQA7kkqLky2HRbYe1PYKV9oBREWW3VMkSkb3pi4md3S7EW4",
  "key11": "2wLGdVCywzeSKW6z5uDtFP19MTaaMwbs3uXpc3oncETCPiUgmhtu2HN1WKYZS9xmegcT8yz6Y1t6XwxkY91bKJng",
  "key12": "3sAJhiXJ83vdkSq2HxpgCwh3FEbo7x1LStUWN7UfT5SzYdVMtyDybxnKjdRDtHVRWmLqy4qp4c6YNVrNHKHjuBwz",
  "key13": "2WgTdSRDU4RmknYyDJHuDsquP6w9YKVPx358TusuKyZG9E9GJM6zgWo3z49b73i1hpHutohwwEJF6qZykCG2jm69",
  "key14": "3JtF4HW4kx4NWM2J3wUZ3D2YNTKnoYbjNViVbXuieh9x7dSbNieibh8VceEwqmtCh1Qjsh1B5iu7d8nLMfDP1R9n",
  "key15": "26n1pXSCTcLzJZbKvgB6aaeJwFjP31bLS5zhSpbBdkfQU5nwozLYeYeTHbsx7Tt7fJHSXZ56tpABsCER7THpFNfY",
  "key16": "4fcmTGafwUUzcWcuYsT9SdFgGof2s3RmSgyc62c486ZrMeDu8PCxHixSwXAyiughHQHLvdqNZrwUbdLZHmiAocp",
  "key17": "3Y244847RAiiRw1XoBsE3Y3iNky932JGrEaMJ1jYWNxaKh6sLUnd9CsZh4TCKispMtHm4xLEKaogY31JKsMqdQh8",
  "key18": "3tbuXeu4UCgZVfkzYHw4i4Uy1YgrrotWVGFpbTMiywXr1rHCPVMW59V8DzUM7LkBLhDqCXDcxmMPrSjKH86Go1pj",
  "key19": "498B2QZx5zH5x81CQHiKRhX8P2t7bmLSNSJ6tZdwyZuxUWmGfLAEG2wMrWVdgbEyePFJ8cTH5mdef9CaDM8ZH8Jj",
  "key20": "3rNvCoWjMhG74wPjVb8r4BqkuatGzF2EaHN5qFmp1y3sMvHDpx7qXipbjrnwmu8uDzMvHYngeGeToFXMeweTAMuf",
  "key21": "5jKodU5xTpr55poQ4wfT4SQ6HQFFAThnTeNwen9ghitKLLxYwmKdUnB9DZXknSBAq2zzn7hVuQ28k3p1VbYhVE3F",
  "key22": "4fRz16pSRvo7xqk1j8Wpn3HpzLdRdj8YjzgKGa9hA2mPtFArwP958yKrVXLbqMtT9r39m4V1qs6RibHoi8Vu4vgu",
  "key23": "2kTQxKfJaaXDef9zUf8n1AuJuNtumim53aC8UX7K6K13f8m71NCWzFwcJhPQ7FWRrM9cKWM3hwKVMjQyt1cRqncZ",
  "key24": "3CrxpZU1X6LtadpKiSWUF54Q2BYEc32StFpSrHcMp3c35bwHMUn5Zt3D4u3JbUrQPdRnkSBzAfFVnuL8ZE2dZLA6",
  "key25": "4dWkAYGV1ndtx5P1ayJqCHfwsSz8chcQe6VKbs2yx72JeqGGkRqe5NLEkx4jaGVwZbaWkYHnDy8vaWxscZFS6i2g",
  "key26": "2GdgLf9am6koJvqDH1xsXtfqsAa2c4RfStrid9D7Gf7rr6XmpeN6paExLLD7Lry5TWR39XX8KMkxkLxnri5iN7Es",
  "key27": "3R1Yt76uBxTt5hnSNJPVK5Mi6r182LMiA9kt8DWzgaeRkgFMpQa8BVoHTMmjacr8SigDiqW1rCHXvq6NLAqCS9c6",
  "key28": "23zBsCLUN3uC8kHpKYne34nL5BhzNthVn6ZEfg2LwxkZxiSPbvgVMXf4CTmBeykdy6ge7qV1xhWbLwr6CMYssQVJ",
  "key29": "3tftKo2Xx5HiTUcc4o9qGkbRaJrUNfy4cH8vRVMamhQPeAmpPPBGsykBfjdVXKLSGppBmNWBYsrzZjSLmzPj3XZd",
  "key30": "2wsiEdVCjvJoyfDx92qsymGGYrfB5v3dF3V3GNMq8TjcdYpqbinfFeabvYSBWZpx93f1Pp9TMmbUi5phsonKQzFr",
  "key31": "3WwdNwBtUuntjGLxS26SsyGAioWukDJC4UjAXy5CkAonBb2y2dAyMgb8DmNA6V8idRzuUxDPk1hrLgujak91f9JV",
  "key32": "5vzJ56c59b3wtB1sJdAZ23rViK119TvncahevmpY3XiHitZLswf7YQTtuDDZgCbxR36VCw2PCfMEMjLf5LmAXMzN",
  "key33": "46FWDdYnf4LfhimtdNsySLiGDhHfGhj6pR5owvc5RSkqe78qH8ox8bRpiQQice8VJX5g1dqWJ5W5nZ8sMYgjD2ux",
  "key34": "mwfQEeTPB1L5KCdwHo5SDB4JH1uRSV99PcCbcrVuoXW7wur3Bvj1eMxcEUQtUVQ2qrTMEb7aUXMhsYWyKkW1yW6",
  "key35": "2Qw4N3TK8b5QYUEs9zqZ2mnmfSGVs6SZWa6Xmy3qN4D9U97Wik2UeKs55bmCNeSoxWDrNfn5EX5s1wNYL6tmaNpP",
  "key36": "tEWskcx8uKMNVpgw7nnC3ToHcwHD4aXgjRAFogQzcuaFjZsFdKeck8hqq4CGfpWoZ94kz5ZQt5YRCEefSmCeZrJ",
  "key37": "4wXfAiTHXi745xNghXZDpMCmU4rqcs2wKUKLPfQz8gyiZTrHV5o6pXWLk66NUpXSmEfm1yg953DRbUkkP3e5q6ur",
  "key38": "iP88RbSMwuaqBaKWV1Rtdygif5CwZeXYN5sCUNYJaPFSon3gMRzgAkgydprwmTrnmgZdiJ9aebq5Fg7rvSMhbDK",
  "key39": "343eFLwMF6AuEfckYrcHqroTLvmyW959aQXL2Zv7VVyiNoNsXGHbHCUxukzAWXZWGB9dU7ViqTi14xbAxd5CKbQo",
  "key40": "5gRJtBpQW7nu8KC7nJLDBsUV6ksuTsPiif9mrA66QwmpiqaPFSBkLzZ4tsV8eNdo72DDrwDmJbZYK4kki6o8Xgeg",
  "key41": "2g2yDszSop36c1P9PzsK3aqKH4f9ErHawVDaKKb7ZjcTb1Ry7oaUbpEzxyuqq8q3pHqLvMQGDyjupWyGAASSEj8Q",
  "key42": "5vsPNJ7qD99WvZR2xnvF81p8EvqRjX9PGrxc5u14aDX4zy3Y9xMXTgZU6b1ensuptKazaZ8G79sVmmzLsMgXHrpj",
  "key43": "3HeZ9tCyKG8BPVa4S2Dyea17wq69GnJjDEsewWDWHRJDvAaWPyB3ja5aZiyryhAP1rzZmeb8cbjFYtgSHgdbfEye",
  "key44": "4GYRExGECsyb28wzXsgAXz2kA8v7wM5fXKSn3aR9Xvk9XMoY9tGAbkQZDQpY15Cf71gtLCd5yV2DirArhJrZRqXQ",
  "key45": "5SmfFPqpdHqUs1GCugasE4NqMEgWRTvjZecSdKTWELcgBZ5RwiukzRFb6BNoFLEGZCsSKArABRzG2G2BmLVPiwJE"
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
