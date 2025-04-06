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
    "Jq5PSSBTDHZ2eNaaXVmne1Tdip6P1kJNp8cbYTfyAyVuiaz1hSt9dSJhNNjdzxexgrim1Lq26Enxoky3z1rbWpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GrvHtAmLddNkw7oyTTew4KjAbFPV8KvuwUnvZtZ7wV7XaA3TpZmcp1fmMeJ24BCDXNx3LrFFAASAnVKD9thp39Q",
  "key1": "4TSMGXBvjk9Ha2QjDjYfEmZ6wB4QHhpSBBp56hqGiFgyyiQdc2yLkAp8YYUz4tyXEyVVgDiwEExdmsPrkZs6P5wB",
  "key2": "4RTCncmwpertqxPZb2cnwyUfP9NrAQspwxTB1m9tfkjox1vxqGiusGVLSrBNR7n72G1X1QMJoUJJrChMCb5xmoa3",
  "key3": "W7baBV5Me1syzdzUVmG8E1igK8EG6kziBYzwtVMTQPm4XxdKU9V8L7qiBW3QYEWo3kmvwfFbosZBqemfxqXDzgm",
  "key4": "4KsLnLDM8m6NFhManVaZyQFBQRteJxswXRFh9BUxx3imxvGY2gqCBduiW35v6Cz75V9AXU1TitBEvmEMWNUGGMcR",
  "key5": "5it8Tsc3wWxheFjwhs98wNEafG8DeEohccnvHUTrUNNxVbBVtxwP4QAMgudWGKPWGS4zdWbeUGjLyfcXB7YFY78W",
  "key6": "5PSTQPZsgu45BGEZthXhAvUxiYGRUnbcTL6eCWyAdyd5mtT3AF7WSagp1QHRYm7QNaSj3ckYdH8wXBacoMCbiqC2",
  "key7": "3BZ7K62rd2hVa87R3ZAkhDD5mXh4tBknFYqxn7hRqre5rmyzFAry3CFhFsFXRZFuRLhWLm4V4waqmE2b8E7dG4Fb",
  "key8": "2dYr6fgBFxmfwL3t9BSsTqsYXdRyyeNpmcX44Z6kJbk1uiSJY4AnFWLvfQVoJBecJMXhuMJN4uBspfFbcUNNifyn",
  "key9": "3i15CwXPPWkVfASats4jVdRcmVxGZdpGgNzzv2FfhSL8Yh8xX7Yri6VLxiKpSwiqoHKpQ9sWKuhf5TcL7H8S2wvZ",
  "key10": "2grXdCA6ZaQCMRbGhncmpuhVTBDSQwDLoE7PLMJQbEJMsbfGotoJpnCqXrAH1hcXn7mm3iGDHMPe1fKTM44tKik6",
  "key11": "5oAmj1hnt1sEcAAoX4T9pj5YAnccFx3FYA8z4Zgbbhp5zcwhLRc2EZWKpDrfSYernNsNX3HwxXhfCxjBgeo5J7uK",
  "key12": "58FEFxrgdKgLpnuYC4DVgBf1wb97Lc4dgYrXKhFVSs9x9Qo9BTyYktLncucbPVPvLgEVEWqhTS8LVg8fmzqQCVZK",
  "key13": "6VtrJu7UK9NX8Wj35Xc5ccUkXN7kbnvkCFaDVxrobSfrgrKzdSMmoqm5H1EPG7AXzs9WQDXPCQnU9B9Tn6HGmmz",
  "key14": "21kiZEccF2SbFS5ZMkdutJvxLxAc1EUxg4LcwyKB1LDKYEFJn45zq9cZEQM3AZzhopQcLNiJq1XfyxYsyZPsRQkb",
  "key15": "3SgsD74PLTZ9eVnHW4ZLVqdzkjuzp4by6XFqhtoH7nxaoPDRU2ZeaVYW9p76ov1P6gqdzJyFcDVnv8xwURgebjSz",
  "key16": "44zjGtg4aBcWFDZEU1jQmogzYrGav1pxqvhEnME9abW4SXrHMPks5r6ayNTCWEoBtvQYwERfFy6RBzi52Ct1EqT",
  "key17": "4X4ezcuxxT4h5UDPSXbyAxqaR6YbTAfarrsauvAmZr4oZF13BQh5TzJercGVpmcuLxg82nqs1vdrakL1yrQyEcb9",
  "key18": "25f5STMdVBZuNRxq5kaaHzPEuXvMvqJ728FfJHEPk6oKQXr8Bn4AFNXscV5oy9zvP5gMSSXU3usWRPihgMssykGw",
  "key19": "23xJRduSi4zX1kaKh4GQn4C4xUEPV1icDFA9x8Uhfz9KNLgKTAjGiTn8wUrepB5CD1YbBreGQv1tG2ZTDifuatH7",
  "key20": "5CZPyMSVRrSH1zPapqksjindspckYNYQFmTYxvtZDvnbQdE6k1VAwUYzXEFKae3GQ75CNYR9TeChSHRsz9jvRfbt",
  "key21": "5ShnhQK2YRm8fZt3vq11DUQvCBevgdgLcsd2Ho9DxWbtjQJHFtpxMdM1ZfBAVMDZKkP67BDeK6x4BzNhddGQhLSb",
  "key22": "4yuwuYBKZFpAY8oc8ztePcrNgKSV5o7E5yeP1Xug9ofhCmSfKWQsNEumpoRKrurQhRrA5FrBm75b1kEvak7dseAD",
  "key23": "29uhApMMHfvmXBRPH9X6N4LtqP5vL82K1zjFUmACXYLfpWBnQQ2qfQTR3CyTHBVjyDJpJi7hix5h9E51VKmjQxB7",
  "key24": "3pBMk5iPTw5pwc63wcgUPTnqf6mLwA29Fb36AFLf2C4aT1EnVAjRYmrMd1kjSokcjfvJYrgyRhybT7f4cUACJw72",
  "key25": "Lan9PNR8RBsyaFkFybFGvBtHskVXCvdNUn1g6dSDsKcXFu6kN8XKX3nDnDEKwhF6BxMpWJRJgdLJEDowCJQrtLB",
  "key26": "Am23nfbDv7HLB5nCqGX3ffiw8iWs81SWWWdKjSRNM4wbsfAuKUtXvA8CQ1FXQJ4t43AXENFVxoRdJQjHeyhHrRd",
  "key27": "4py2JYX4NHQRN8Vh19xz4Che3gfm3fd16azk6z7T6GJrAT9HsgznoeZf6TxhAqRrqQK2vfN9Au2QwZ8VQFCrsbrh",
  "key28": "4cG9gg77pvoaywFy6X7AUj78d4EKPR8mmZTAvP8dDyLkoHDupRnsooqQFo3o4f7qB6LkszhPZ7wbSAFGd3u4oZ8T",
  "key29": "24biTq2WmqKQn8e4k13A31V2kcqfkVB6GtEgCMLy68SbgiKX5rGVHSDtg1m3qbyfk68swjXmMdddKaoDKtLsrNz7",
  "key30": "EZDyQCyFcuX1nzYkpWsoduRy51GtA3saKwZPrhVTyGhp8ZWBzUFZK6hGRbV2Skp71bc9CsYezVspUEnaJSsodCE",
  "key31": "4jn5HmmxNz83bEukhDunuSRWqa6c7DpXN2RrFUmGuQLG2HdKvLnDJxZB4kweKdXJfBkVFA1ZL3myssLZk71ZMHnB",
  "key32": "3faku9KkyhnobSvHj8EcLRgi5aZunFYKYsC3Tssqcng1Pn9zdsF8jdKj8hRQR9LFqifXaC59cVwzQ3rwXPF1ir5Z",
  "key33": "5Ue2gh8uuSkvaEMzr4AtZvs8rCZs19nx8owDsZXhs6p8xxZcAvGVn31AqT1sVxpetwn6hSMzUQq1jNvEr2gB6Q3s",
  "key34": "2GwKGeG7s67cwEAXhM13jUPHv4EvjXjXrep44w1PJzqJDu2Z4PPYgUxrenU4jWQGnAgY8iw2psLTTvNwamBpxHc8",
  "key35": "3j7VGVooagpAC2jUvuTf6xxdj9uzgn639kJ4nyqBpb3dYAbPgDYjvwLTN8iByjomPgdA4uCGA12jcSLXCcqcfMuZ",
  "key36": "4CCtN5Rhebs1AanuAd8mFAzKqhXSppyjwX9N76QqZSa1utgSY6atiNrJPaopVHMH1QojbFKecQWCecRFKDee2TUo",
  "key37": "Kd63Pm3eQhrTCTdpeAeMnntQ2EMGwTTyQKSxjaFxQcvv2prDz2CyQL2xGb9HwizDwU12A4WwoBKUjeU2M79b28o",
  "key38": "5dLERoU5cpCF41a4baoe15XeU8jVJ4EPwtvDQuwNyNr1ocAVxN5vjhqoiHYvXVHsinstmz53DuaB6eH9cN68Dqhb",
  "key39": "3dokLRaWuc9CUETQcoF3FyHkMrEDvAB4yvrU2LaHY3NWypfaUt7zfY3tcUyG1Uq2oEdbdZyJWVkepWJYYBiij4AR"
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
