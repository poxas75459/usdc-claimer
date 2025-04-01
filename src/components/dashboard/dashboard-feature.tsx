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
    "4sukocezsB2y1UAxEz6LFQFJf8ooM3KYBLXtbeHwUu1wWmKhtshCESePV5kUAWQrbNRcKwpVsZsjCSLDDVyE8PtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rk21hWF5Skc2smSjyNb63VgyAuBckVJz44aMQQNAuLSaQ3bnWBeStWY23KsuwYEvoTVg9uDdUWER9TwCWP3xcnr",
  "key1": "3DbPsKpPTdLos3RFinPqC9ujWVFd9aydpCNv9coefKgn9qVdLYSRdaP3n43pHPCQc8t5L6K2YiXHHPpEUcvfyds5",
  "key2": "2Mj9BYFAQPBWbuRBsYiocw9t9Kv9YkBZx226HgUM6M9aGUeWKdrxeCvtnd6WsnSf58jRhGjCjYHokaG9f5CFcvhW",
  "key3": "2NvLsd17iy4LymnTcgEqzRuS3ieAAgxy7wWmNEoo7v3hw6QhcbxGogJEQvQ1nkzMDs8JR8VLJ3DD71FtvraZ76cM",
  "key4": "2cqCLH5sDpvUho3qDZHUXPLnWvcnN3pNqU33YdpMibjvRtdq4gq13vGtMLsDw2C6ESt1f2cW46HAQjyvW5ADrhdv",
  "key5": "2FUcC6BAtdPMBtvygnT9ranKAywGvBzNMCefMSSjLi5YKsskXHpvMqHzGWHUWKAo4c6NzsZys41EVkaUA5qMPVaL",
  "key6": "5GKyEZ8kFdeh2G1WoWBZj3EUW7Fx3D3KKUt6yBboZctEv62MfweWBLdpw4BJheM9aVnFqSTwmQDaKqMXt2YEh6KL",
  "key7": "5iJm1psZ9NcDtfg8m4EDAiGdur3EjDNs5yhYqiwguhjhLwoBgriU81V2i1KcCfwT2S2Yn6uoaokXZBQLdUcRw61w",
  "key8": "WbgG3bodNdsZGemdC9Y2aKVFEuDnHzWBXQXreQ2JVnj8bcrFo4srvQahyW7Mxt9qhnSsDQseffYQTmabWfXna7k",
  "key9": "61QTcWux5A7w7uNMd91CC8U7kpRnJKvtyaGMTYSnZBuUm6EFGtPNdXpXvfKCC6wk6F2n2g4LhFx9P6nzCDaYGvyd",
  "key10": "3usiofybwaJKcNydqbkpfPqHGrKAo6z1QuEeKuTdRj5UNyiVZdFLBMdkBKejwmPngAwwohK77ZSCTUrEwAUXukbK",
  "key11": "8PzyTCeTBCvo4wsY7oMfBpKSczKSsnxpidSL6MKVean9xiid76ZFu4jTDQTJ9n3LbndZxj7xmKMwckcwnesPDiZ",
  "key12": "NDWKBp8yFvpxVHTp66N5Z4HiwWSUKYsXoYwG8XEU5Zy5T8mfYq9ZYasdPceCBZJbGA8QjPWiegYiowXgjedVw2U",
  "key13": "GibwLUsGCMxn2behXGzGL7xEoAQFXBDdkhkbfeMDa1q4TED6JLefQ4ELW6CtKKs6TmbytSXT5pH52NPznWtim6G",
  "key14": "5B3LPoEni2vJjVfwpSdKaRSUWFy6Q6C67UZu8HHX3BDAPX4C6WQFPdyXXC11ykm53zSkr4WjvEQzDxqS2o3hnwVd",
  "key15": "2WWLRZEVgunN6TyL4WmLQgK8tXD7hzDHeQ2AGkTL8cTjCVR66W5pA7eJyLbEGKtjadQm7rahzrRuGB7LktxjmptX",
  "key16": "5ZYb46hiG1GxYvWHGteRVWx9GjFQTM4VWodkRAuZJzHtaKmBpn8BvnnWg9L3hvpQFhJbTWGCQUggzRBGSnJPUgtt",
  "key17": "2riAmqDJWBNrqk8svdVNdUQB8HfXPP7uKP2LnWhoSD3JSUBwXpBxi2HkB4xjdkQLs9iRQbtFLTUPgWrUfBJTNvGE",
  "key18": "39LL4aeyJNFYgSqUB8ejVEcQcWC4WSYxGjYvimSTKCt97Y7wj7zkrno2pXNh9xGuoMjqVqkpV3Y1D4aV7kLCJH1R",
  "key19": "4VCiHJB1dzBVpXKnH1Vo9Re92Z9qAcoqcE5nReE9VoxbtCSGGvsJod1KyBzoq136kwzwrcBV2WBB6Bta5oWvDapH",
  "key20": "Uq2NMggpxMnZXTgUv1jWnxbbBR3mc4LazBoSHnw1fseq7RpjHivoSEiNxUQ8NvhM6ZV4ZXGo5NK3Q9DNVEw8R32",
  "key21": "oqZk614jHC5h54bmB4f7wgwYfkeqZT7N8DB1KQKGsB34cBZUE8SEX38Nm1FBSo4Xw5Gmzv3AyzCuppGMebND6C3",
  "key22": "3fLQHety85M2p2DdYYV6v3yq31WWvQzEZ9Y4pHyob4R26MK1g5Mm5u6FfZGP5vBYZpKK15jKsUi1PScLVckDZeeV",
  "key23": "3wE7EQYYH5TmJ9UFExmimKsBkMGh2ryABsv83GjKppAJom2g61vuDG1F2CfoG2pgrpsaaL5S1KR8KRHfZ5n5FN8e",
  "key24": "5U2GCMUg8RAAPsP7w69VAkbZWdtRPmWdc2zdDtBgEyxEPhPnbc4dqP1xfaXMbnjZTphxEd5vi5mNG8BEdeGu6EEN",
  "key25": "umSY9cQziPtWWf9JUS2ewAUjVdVEP6uEZoyUkLWNZigx8cCCYXYGTuECgHK3TAk68kTQmWUFoBneZaVxfiKMDhZ",
  "key26": "v7ffB343kYUCthNo2RZcPRzDCZaU28rYQJcFNZwi8SNvCnRNykYGfnu7NxM7hBekxEDFABNpaanTMmEdTupTrpk",
  "key27": "4Q7nDftC2D6ngELBuQUBLMShTcw6ktzwtn4Mw2d9oiqQip1aB1CwKhT5vn9Kumzun5wbVpo5spskqCLPHUD4vWvp",
  "key28": "4dih8m3zG9F2SVfksryWhUc3aXSrGAkwuCq1TsLKcvPNYqrQ9fxDY2SVAkx7pV8eUjNxJX6oGsrGqmHXc33tUVpq",
  "key29": "3bRe9uQKojvPXnnBmmHSFHSqQaVCzNJ9xd7XmpHdV4R9EVeqVfqKQTum9Wok7d7Gp18eVRswikx9H4RCB7BbcaN3",
  "key30": "2HhShH37Dr39U87m8rGJYsLkWv9opVivkE7YBjgfLuyv2MgNmp3rsVX3mNCVkMBJmR6ZD9SnrWdynJFeo2t1zpgk",
  "key31": "3eNTH3KQzByjDNQFCCejrbjebjc153NtRG5ceyuALdCUQ1VG14D5PeKcrdvfMEknxEb5bFf78Kdy3ge7JXfBiX8A",
  "key32": "2zo1LH3AdehquE61kcocYVDGz6rirtvQxrSWB35D92PoNp9gFVHaVWQU6CifZJbZBjwKATqNzZqSxMXYgsHShEVS",
  "key33": "3hDc9THdCHaBmVNGuXakdf7Qop58UAKSDkr16EReBBt8oNaU5CR5EorKDjXppSjpSUseHjdTSpVydt8B5AY9t94Y",
  "key34": "6avz9WrZCk22CktGj21jQBGwoK7tq3EajkDwJWmTEfDnxdXN5NXRFSEMnfdhWCHXc12Riyxn6yjT4XFYY3AkoUU",
  "key35": "2Tcng87BQzk785woXCfKaSk2VVUG8jfBwvJCCRP79yVQ47mEe4zA3KmwzWAvQh4SbUv7zpJMwg2dFYM19susupGc",
  "key36": "3ZietrSRXFWGBoeDLsuQ4MJReqVrUndASJ7JAbXdnj4sQuXwuX7TsRdmqNxZcbg6yRQ1hHgobAFX4az2EtgWqWgB",
  "key37": "4GK9BRPpzzjL7danKCx3x5k5zEDvPgUttRY7j1N7LbCLH3aUPY2P92gBMby3Ky8xaWC2kG18vsZDdcj2n5dFy6Jc",
  "key38": "4jiATdVy4KYbff1ASGTrfUYfcKPdAPbwPKDhAeEqm3p5Qo3hxkrpCjPe7q1FMKTwREn3ZfjJfauhqF9imaPM82Fs",
  "key39": "VFeHEFEHySYcXNcr6FC9PbU4fPv5QAH1v14VWyNcjYpRkWbsQBUTZJteR3of2L2VkXuLBNYoTUNkKoTNQafwMKD",
  "key40": "3UU78SnL7hSojaESDjYjjgGDkoDUPYURudBYYLx8GyF2RP5a6dxvy5xECis8CoVBeg5ZGzahMoJy2aH7f5NAUW4i",
  "key41": "xDnN8zsEzettGcTRVjnDhrHQVk5C1oQRGxuKFVjXFQXFW5JxPEqNHB2vsTkw1DZPpTUgt5PF13hVNdeNnXr9u7h"
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
