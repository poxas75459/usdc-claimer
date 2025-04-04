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
    "5Rc9xky6i21YreMCHddV7VffpTFXRvChMVwChY9ysiVR8j5nGEYWPPMCYgpmfDgqL4TGiAmTMJ8w6GPExcwQCoX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VWAYyPjqrs5ZFzWvkSqi8snciYFc46PnsuhYUR1EEGfVsiM4zr5Sm9neonvvXjnyvjbDbJBdvUBQv58h5oW5nQM",
  "key1": "3kyN2x636Yj5ERZ7FVAVpiKyXDqXsgHS9Ke947Mht24hT19L9u7f1LdRKHoJDemJpsbEoQX8WGAPEy625HXD9Pyu",
  "key2": "2GEfXY2Lk2Pm4qqNmWwy9vxnEhE9xTikPVH622BTs864rCPijLqokVQJQ1w8odtKZuVWWRRCpf4eh2L7JGai3sUJ",
  "key3": "KUmpfjQ1jG4QwdjC1BpsQtw9CqTUVC1zFJxKWvGLja7DuhmQSx7J4GWER1CbBKkaGuAp9mjpHzYMER4Fbtm78Hg",
  "key4": "5ydL2nj27dG9tMTyTq64zJsnEVu8eSGqZ5MgP5bRaJLZBYQqW9nrGudYCt3eC3fmeiDQf6qutomsJDcintGessWx",
  "key5": "wfJpaaTPgtaVFKY15mdsK92w8gsvP2F45zFKUK2X6v4gPvMBqP6faRg4v8XJGR2uKfhEQ4tvpbXxRkoZtsTZji8",
  "key6": "3DJTVyzb9N5CUKcLpKu5ARyDo36HFfwed7QijB4iVwuXVrfnY5B1f3V2HYpSW8J9W9Yy53JschDTRhCFHdWKAgE4",
  "key7": "4WRP8kNCrQzZpnoGtE775TPMwcJLA8qgkQCTGrQuiWBiJwskXW9uLkmj8Yq7uHkukhjNkx6F2gRrnm3LesNiZgU1",
  "key8": "2Ef2VsGKtuPWhQWWNA31ZkQAat8dPUeWkQrA33fVpVSevZbdqDCpoFjqUfhxGGJtbNpzFLjUpkX8bTNduQEcqJdN",
  "key9": "2pETGSfzuVs3926uf5Naf9tiQiBgNi4FhmVo1wF1fopA2sEyCeCWRV8oSyV3UaBWfbZLDty3W6ZqzeXmUgrQVkL3",
  "key10": "3xLCZNWRFfymatCa7YsLXePmWa69duPYtqNYMvCq4oqF8iL2yMBxd9Eu3tR6nuBUBK4mEY89eTcPz7dEtWPg4fRj",
  "key11": "4ZMNxAwwfP1RQf15ux8t2s7msNGpWdmyVQd1rBFVKCGhvkMoxvX86Hx4MTuBRwhv5spcFwJBU1qpSdpCvCCPk9oK",
  "key12": "5nKuvieSKaVijhPnyRNGTLojABX7ubvi5bP3vgZpeReLBFqKkjLQD8gKNEj9RgVp5ssQzjTaLfCkgkgyN72ip5fF",
  "key13": "4VNJdLvbUWTioQmTJBPNQddNzeg2gVXbhwtwM2YrJRUBc76si4TnyKxTqDJEjghsMdtA3sydsRjgBQZRw5NpFBRz",
  "key14": "43YDQ1gvAECSxSiSbPjdn263f6HWGBXUrxP3rDwh5Kj6wD5Le4LPNVFtbrsK72PHijDB3s2PUtizJ16VrfMBpozA",
  "key15": "2Jd3EtEV6tQMNVySXQ5KBBwwsv3iSraQ2d6hTBcTvixDsGVmMJxiooSDGCpL7pDeSc631xdbLtT8NpLCr4saE7Yq",
  "key16": "2MgEpBkXv9GhGqDnCgrAt11F3PATAQTCSNi1amXkZyB3GnQjVxtEcqdvUw5eFmdvLAmy6HVTyL1NRHF7oKK2tQ7i",
  "key17": "5Sn26MafPUizFcYqZqUA1Xp5ThmQBJijpBVtBptDaP38bHwdk2fzdjt3DQLTtmJkm4DGGnxEarQ4qndqCzDBHvNR",
  "key18": "39LZbAAsJs3debARq6C95susbN3qwtAhB1P1jthTzoZEUiiKZ5bqKSaepWq11YJs3FHvLyM877zhxTCLHhdwQ9ca",
  "key19": "2apxxqKo6CnK4qegSeASpJgg6FAgUkQfYmpgcLEbxMAmbPWmnw7pmAfSf3emWSSziWbYPjBkPXn529GgMPELAnUd",
  "key20": "5uSfTjCwXaHNRo1sjgGGMxAkA4xy5LTAoroTThDeUbXmRav6hdL9s8DiLohy1b7i1EkibK5G9r8UrHYg8uxSjhST",
  "key21": "4azfQnyb4GAybBy8LhFeroDt4Fwb2pAgyhEihe1XND1gCyeFigxA9UQ4gkeFDziq8wqL1Z5UpsPsbmq1JrASjjYn",
  "key22": "4qoAaD2DjXGMDxTLSAPojxK1svH1x3atQbzEX4pcC4qG2SrUgpChsyCugUUqutJtUseKC7vtjFiofjyDvp4N5ki8",
  "key23": "4mc7FoCir8skWLmDCwWxpHFjhG9k3VATxADi7hUDfYxq4wi1vdTMFzx72ynrGyb5RjzjCc9Cf95Wie7kPfXXNXcG",
  "key24": "65Pc45Bn5HAAwg5WKcaABhJUAxWTLQry8hjEFKmXPq2eWzMLTRBWsX2UC5SndtT7hPtDyZLDkgwjdLTckdEC4gx8",
  "key25": "2CW7dvTaqwLrVdgnCWvRoYaWk6Z4PbRe6jf6hmQvZGh9hQ19LFUUXNussJ2jy4XHGpqAzpLgdDQ8c2MTB6acedBP",
  "key26": "4nDgzo1rsN1VyrDZq4RvWrq3i3Eo6uM173VjfFWHHUYY9a9qyeJV8uJGmiW7fWtwNruRYN6T5Fgiqg1jrJWM3Mrs",
  "key27": "5AFYL1XKytaiD7Wrdob6v5Y67yaYvUcZdijMJ5NyfsiWxufoi1aK4zZvieZ1eDEPrui4GkvrKj1ANSYiGxdD183j",
  "key28": "3catjPpRwtBhpbzz3DB1B9jhTAmhvsEJyS3QgmVg6r6CLpawdq49DVbi6FCw1wzbAJxmE9hysE6KpaD96yUVcw7M",
  "key29": "3D42i6v2MBi9HchTrUWA7b54x9qzBXbhdQsGGbvNU9EP8d6u4dje1fNygMgd5oo4UCaSj9AUJ2RBANJqrF4TWsHf",
  "key30": "4qZVDGm1NrT6w7pVpK4DTi5rQgrHsEKQHAiTqqnjCmSW4f4oST1QUeX8Eefat5jSat27rFRH2ncDmviij55egnU6",
  "key31": "5cykzL5WQDPGWiYEjKeYDS2u79ipEz9LdJb5tm1wEhaiwroDW8peyBZ1wfJFtzkpavCaEQJW74XJMnqB4dBq8mfN",
  "key32": "3Gzjidt3HcVchNkwxMr8xdCvMGp4prqaF5pTDtkpWzoasEJAUuwy2jLKho81Y3hLwMLQwz21VxL7K8ZKnyqCGgnL",
  "key33": "3FTuNbQbEEbHFVHXfuk3h6GyjmTYMWrhN2vuh6RM7frSALFctBBNd17tXPMynAXdMXgrwrzeoS9mDsbVaXZVw9v3",
  "key34": "dVNDepgQRnwcw34YqTq9yTWituN9aNxgfU5B2TVqTzKzZzKCn2RJA8YURiUMLGEj7kgXsKbpKgSTaJfGZw3SUfy",
  "key35": "2PNRpEvKF362VKChJuDW4XBTmJoH5gUSh9bXpAXxV2Yrm8TSKekV69s5eyLFgu8vTGeQ4fAYZaTz7u3fTnYa59Ps",
  "key36": "42muXi6aMwZV6KVR6HxwhTzDgcfom1WMhgZrjNiwaYEvMPJVFWjmoFzfNgGTjDHwEPoDJXSfSdzqkG9bF5sTcHob",
  "key37": "3NR9cUyQ2t8MBRCtEvSiR7YtKaUcWFoXVJkcFooE8fsYJ7cP3W979v64eTou71zxfcteAnuGVs5PuVeBUtLQpe4t",
  "key38": "45h2mRDkNEPDj2SXRnZiCbn5eoZ4SqpqM8wgE9ifM3DMf3DbY3aeNR1RVzL5A1QN7SM68RQZ8FH9cEuqT96AGiUf",
  "key39": "41MtcLvZunH6ampW4ZDgrtUk8traKWLcLjSiTAp4aVdSnPiqRY6yvsQTkLSL22zHCH9EGcsNzSJcXovXtmnfmwpQ"
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
