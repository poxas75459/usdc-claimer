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
    "47jxgEwUC3EinPAz5kNncHuduB21EoZZseRUy3P2CZLRdY14sm1uunSLUxnA9ebJSpo7y1aQe4eu3N9bcicgLbXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AFCwRv44Yhe19n8CLn8hSLhD89XNV6GEDxSt4kwKC2GKcnriDcyjoUsM8rGTYFWmshxY4XaBHnAnJZdZTdBaUoP",
  "key1": "3vxQBbxvGytGqH2vRLGMt9UPWseuKKc4ETXRkTu3fHPHSuQc1qQRiykAKLq4wuZWVZDWd8feVyLcmWGZ6xJRWTxJ",
  "key2": "4NCXiLVR8xwu9qufN9nAd85Z5wVRFS7N1xujLYgtAktVNGT61k4gCRhDf5SYjqbXKmapSwP2TJFtkxuRsZ9qtCpk",
  "key3": "39tHHCVEPcjsoEAtzCnt329qeAf8ESiYA7PWVZgvDvxvPHcpeJoD8yGktZiekm8ctH52S9pKHGVDZNtggjXRVmsH",
  "key4": "5g8Hou12NP7dhB6LcbHxtusNMPgqgJHZT3XBjySXVb53zkThVGQJWCmx5pBhtewKhqdFVaFwT7eMEU2PuUeQPD1J",
  "key5": "4cmsKT94biY3Awmf3W2AyrKk8jPCRG2ebTMigsKpRUu5eE7RZGw74F3yykJhFf6GNDZU5XRcDwCj8xqRGqeXDx6r",
  "key6": "5qjWxNgxawQEguEFkmV2hDfkkvrF9jijZxtgydGi9MveeM8r88HKUfZozu8FNoZMngMMKBPNJXQ8hGrYCLcYjpnh",
  "key7": "49H9DTYtB2a6qv2PuBMJttZNBKV7UTvBvVBQhMH9biJRVghtwFTt1f2WUprZuVp3yJb2iqWhuJuPsk3QnSjR86MJ",
  "key8": "5jnb43xAjhBdBD4bVQ933CRv5EFim9TUzuYjUGeiheP6BmNoGsjajzmqGfhimkiLC6bHx3hKYNuyLDpZY9DzbrGp",
  "key9": "62C5jRbVS5VNgt1LEmAvZTBJZFc8xGBPDrP74YU96WmUQd8BfqoDh6zeUoBCxhjjYwS7XTviaJfvNy67CAcMLrna",
  "key10": "4GKzmX5oo5wxo3MGYmuEBprqVpp4bUhiDciq7bZPdDzpy9npDYJvkM1u8KxeC7RfwiZJ7zjG4A3N7UysgFNVHK7s",
  "key11": "2Yb1KWvwiDFRyvYPoQfuP4LV7UGXwQWCCrEDJ4kwQP8ZNGZ9DCGi89bTZvSVWtgdcFk6mewKCdB2syvn6UhAghCf",
  "key12": "2heNhyy5zdkMd3zHsCFEoSPJ7GMjDCXsDZkE5VUYo9V4BGoFXWFYVMr97LAY7QAfyZ9vZu8oeJ7c222waywjQxTT",
  "key13": "5p2gvFYtayje5pr9dDxZ59rihWkvMfvEVEuUTRGWsuXrzLdibm4ikKq8e7y2yNDjCcL6gKdKamb7rGpayD5e2XSh",
  "key14": "5geqNo7BQ2p5yhHXtUW323PCLkKk52GjgyZPVQroHHVVAuQ8TqkEq6o3aiBUjC7sCVDJ9pbyL8M7BS9FU1HJUzxx",
  "key15": "63vXVf7fhUvsEf88x3MeYSZiGXzSEasBoqyzWsXkg1kQBWZcXMpqJwBKnkxbCheLBWprELgswF4zKpLJS4UW7igx",
  "key16": "2RMAPdDitND3cGQ91m5G823sHU3LF9Tx6q3YXujuUqy195EcCNXdFge9MynMBMobvuwzKN7Kfi7WYTAjwtEBWx12",
  "key17": "5UffwfLFgf11UpWadDYdp54DXWvtPYxeqzriHw3DwpftkFWg5CyRVRECC1Sp2jmu1GzCL1M95y98AvJJm4sXLKo",
  "key18": "4m8kL9icGfP5YhSYAKd1y7smdTsggqCjk14mGVpoVSrYG4KTTNG5tH2tfdoFJAbMsVKxvAHUgbuwpT1zvDww8yZt",
  "key19": "EXn42M4pve7F4QbwJC5Gx65JXz1Xsw5HAoEr8K4Tt56Twqf2k5KmH6G8gaV1sBbQuE91pYYfJQVmGAtjHH1iUz3",
  "key20": "5Kcy5X742H76AypoTf6CD6xVz4y5qj18w37NtWSTXwS5DDvRBoatxicnfW6rf8zcHvWcwQRDNnBjuuGXy1gTChjK",
  "key21": "2YTWh9ds3iuVwGUuaDGuXcqnw9h4uqh8cGVfa94UDktZYrgnQaPfRmQrC6qNrZzw3pcEMiqNM1yMGZ6qRszJ7mq3",
  "key22": "5YQSwmpjahxg6jpRXdxCKcDkveFyCa3fyDkjdKyniCe5KPJ8sHCBK1aAGn8Azfn5yM3dc6e2UeapabD21BDg9Wne",
  "key23": "3YrhKjJS9wjsZaiBPKv3vbTkGnQPNKDcsDic6aPNarsWL4s7yBRd7yRcFqpSLv6kP5uG9dsKN4sUmEFL63ZBPzNi",
  "key24": "f8yPEMYXBfsohiDchktJY1PzdGDpkHat143kFNJYPM7iVy1sSsjTXYAoRMzLoyKUuh8dboaf3cQEkbYuziFWUnu",
  "key25": "4zTQY6duTL89xtkPmNVV57kKGgFSLwz4MKtbqSosbEGNSFwHH2UVRJ3wP5EEzna8zVfknMYu3DCTfLSG7KAoHxVD",
  "key26": "XsEn2W9utPidT9yDJYFCPPtRGDTjp8ZUjRsVmWYjFxHZtygyT6JNTrZVbQNJH2yNo8LM3kgXDCj8UcqA7rzYNwm",
  "key27": "4cP48b3fw6aAQNEP5NZNxTPBcbb1ne5oMtEQXGBRBGRbTcYfZBQj5hGYKBHKatNDfh84bcGpJ2VHjJzLuy3EppBQ",
  "key28": "4n4cbx82deNDenGQS4tjc5PkDmBsqqoQck2JDJm9CT5Z6w782jrKfhQRhhgXXyKg1iTnkUT8NakeTKtKW75LtKeX",
  "key29": "2z3fc11pwwFzacv2Xfwc99qHtZGbqvjaXS4ivvDLrZVa34fQXyQeCNBMth9ZfshHV7VC72L3RMNG798DrLTozoAE",
  "key30": "hfdvp69dhd4geA4M6mLig3Ni1XXsuhh4kYHhrZsHF6jfKKBd1mTT5CfABZTXrvELKsKgfDetqvfL8oWacUT3o35",
  "key31": "4rtzDdbQaRZMQsKiSkSE5daHsc9Ehq178essno6CqHzoGdFhw86S2a4dC9ZbkTkEfnwYWJzEDDo1KhpHU3j36cVz",
  "key32": "4skWb9sQ1FsgCeLj2wedRH2eWHGg3KrvtCATXQyH2BsErjgkeyqjpNvHNxwHn5SMndkSJmEXTRTRMESk22Rq1H2N",
  "key33": "44uzQEPZ4sVhMriTyCdAs9FTVk7XtNCquzjrVpZqgFp24vPptfoRx3ZwH9HUs89NmbP3EqXoAgmscRjipSzd5gAo",
  "key34": "5Ej9GQ5h6c1xevqhGwtADp67QyoyRyDvgJ1Pmgi8bz1tdNywQy2DcLR3aGPTiazAc2KjEyRG8wTiNT5Vpm3MiGzY",
  "key35": "33bTJqXJvbNM4CwK4ZLLd9GgA9QKxZbeqxz5dN2G5fhmawomPQpuZeXZJfubP1nQdqx41G3TPW9SCMkWPb34Gxgi",
  "key36": "3XCrpvocuVLTaPEjoYJo1EYffbUE2EzLgpsgYzD4iBhqWm7QngQYVLe14bvWGXY3kXLfxnjQfcVzjvNP8ehok8G"
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
