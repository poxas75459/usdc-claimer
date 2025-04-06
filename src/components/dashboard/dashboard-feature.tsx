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
    "ACtHEmSTY5KZviiYq8oVX5xjEeZsne1ULhCRgHiw75X1vZRktg7GDczZrnmWuQwxZASkENvRY2dGRprwMtatL6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QTexEjrGiysztJxbQt61EKEp9gkbpF7eGJpcjMngEv8bJUxHqdUXqnE4jYHJyvg8NfDTTQtwJKd3mqY7nyixmrJ",
  "key1": "sitqGvdMT2J3i4S9nUxy4FH9xhqTABfnPDto2dEodh781AwXrU1ecy16798851VC3vvxZd9EYiezdY31aTxM9ML",
  "key2": "3xkSWb1dyyaXEtmCXYG4oGY8nqHnRPsmixyiNcvASufEA32jN2Hn3yfftvXVDLkLLF3odK1QNk2oQvsh2JaKSSPF",
  "key3": "QccrNyVQgwYAY7WkB5eyZtSXTdnVmmdsVi3ZzEhjyuRoqZxjhFsciavLqYN4h2qVC8aXAvHH9RJhH8v1rmCzTvV",
  "key4": "o3KeWquvCf5dPrHid6vLqpC7NdgbreMeEJMFddbTRhLYaXFEQHRPxxzjffZYqMMdtRdT1JtYv2tc1dB7XvB5H3X",
  "key5": "3bBieBHMhDYU6DSLjh7tzsUCknvMs9s72bk3GvaNPVJ3kSwLCFYd8v7gq1Tf6p4FU1HY9gB8SyVd8Wf62R41G9U5",
  "key6": "5BhjJmxstkxdPHveSYd9NkfCkdjppUtbciCyHqcAi1LphVN3njm59QuaXqcQZAgrEL5dyGzdaLhTF3r7zyxPFR1i",
  "key7": "mZj8v68UTvZQqypiW1xyqvcN7iSB8NphShQu1ZCRjgY7A1itgFVvi6Wr9avPY9SBu9d1nEat1p3C4LWG4uCtbKo",
  "key8": "471Kdn47XFpCZj5uNqLLWfH4Y93F8kBwFawtJjPnrpWG4gU3eVzuSRHFCbzU1P9H6aSS3wwrW4JLeaKqqWCV3jWm",
  "key9": "43QbsugnBDkovPcm9HA5A7k1HXoPGTKwSeKFoLuKDtQQYrG3FgBZc4BGJnc41GnnjVk7SBKMMhaHJJAx6xkemxEV",
  "key10": "BZzE385Y5jXKa9HsrDj1LeqEdg5n43bFmupX63GGrUwFaTLRfg6yB1wguzarPtJjdqzjE3NnXm76mMeQbbPyqLq",
  "key11": "7nPUu3t4tgUJG5BkYLoM1Rx42wgAkN6i5rUfq7xEPTboxV9jYxh27qw3AKFttZhyFhWaVgYqhyPCuy5E7zvK5dY",
  "key12": "312efTekKTMzfM1gqAf5Erw68x3N2BVAZ77Vtt7QRJURjQ7KjnoyeC9Gp1hzt5PznQ2V8cs8TAi4TVZwo2Jp7WYt",
  "key13": "ZELodVUKZe3ea5ZHNZ9kHDX7N4eVGfmrBEdbxNsUiMKufcVUrqg8RTgCnGU61ipSpMvAnFzGdqQoCGE2ccQGnRH",
  "key14": "3j2nc7xf51wSvk2J47MjF8xfUMrQnCYPo7M6rwHzFL5JSTuAmkVoj2haTKc23ejNdvRbzqzW5JGnVTA8BrpT4jBu",
  "key15": "4Mc28a7CsRd9HRUTtvkThffKXMFTfgQn1mnBbH2erJ4ChdTtvhtGqvZasjqfjS5ci2dDNseAibC2k78Rk5J6wat4",
  "key16": "LPvZryXorrvXSchsT3hh5kt1g1EEzs979fyAddEjW2Pr61XqkftDA7ZpRxXPEzQsDxxjdmChZMjKHbRnshGyn9y",
  "key17": "Rj5N9Ea6m1XBdydJrPwVLSUo9f9vLF6uk7FPcAKRSdMBSvobRuEQ7Fzc4h4M7Po2xAmCVuo1fyXuzwg76MBTQT3",
  "key18": "WnKXJgZaYWmhWYYzVtTYJSmGURSPcidMEwGw78NcG5bUA66sfP19nfZ1ZchQzeLPFSDSW4YupynGxH3frcJgVLU",
  "key19": "2LfJBwtBaXuqC6wBw6zYNWmgrHfPtrutrLM87Bf77WbaHmaqTcMqc8Woq9rdviFY4WMfoVvdt1RsVWrMmk3xEGAc",
  "key20": "4qmsUB3956SvpKMf8AAd6oFMxWC1aKa3VLghy32ZibK7ETUuu8AXVwK4SZyRTLLJaceiwV1FHo1mRH4CnjToah7b",
  "key21": "5tdxAycRQTxbb3y9tsiMsCCfLtHgFrbAqJkQQfknarKbxEknvfWvc989jqDkAsi7fyHrHySoYaZqvcQgnhFn3Tdz",
  "key22": "agQ6ZSTEF9yg6R7WzAHC1dYvw1HkTeFetq5kHviSLcwDTUvmX7d5VRYbPGCtBid7YTwdfz9eCLNXfz3esreWZGo",
  "key23": "3Pog8Jq91rx7tNfueCYwzzWQpAQYyNmsSdgFGQmmuP6FvbdJXs7VmR3se3NrY58LqefSiVq2wFFYCP3DUoiE9t24",
  "key24": "5sFoqv7KgMm2eQ7qMRbn8D9TPcNKgu1TmqYXLmw415KL3pK1ap4s3mkoTGfm1H4vBrC9QaXdvmHdABM9S3RuNtp6",
  "key25": "1828AcQozkNA4yxvuQXcjdbrH8g8V6hsYbPHgBXjbwGuWiPdmPBTtRdPaEsG8JWnhjqhGUzMbwHoBhg3detd9Ln",
  "key26": "3AgQKQXWzhLdj5DtxQYzLW88HpkRnj9qBLkqW342oAqpd95HMqU8LB87G5cLbfQD5J2qkbt1wCLCvG6gjSSEar6z",
  "key27": "5jgAVUpYuirCiW82ZzGra8RiEh8aTXyrp5nr9kBtNNBNuUEwLLf6SPyMG6uLea8Nrvsn89F6DF5hmPCVzWD2iU9Q",
  "key28": "PnUBRJL9mWDnYACuQ48eDjNQhjKBo1BFrNR9ALrFatDEeJUhLLSb34Gh4D9HnSFzkW5TXYdCQbwRiKaWLsFyifi",
  "key29": "4Qt9w7UFNCsUybUHhLNmZeai4EdreNi5ts1AxUh4Dv9asv2BjZ6fWYtHMBaq6wPgop7iNFfQzm343A2ToChyRhqD",
  "key30": "2e5ShbHwgUG9LLJeizecxQLcMaSitiYAQU7boWk8shACQYUt1CT6Ca96PMyFHES7hJLWztX11RDxNedHgRjEnE8W",
  "key31": "2bKU9EuJthPmYxPXz8tTkkErjpyihR4vAqbSULLKCM8xtgxQQmmr3X622Ti8ijEQNK8DGJmYXH32QzFeJxFbMpTJ",
  "key32": "2kNu2xMADoA5iLyNBR6TF3khamEdgYJhXpscL3iiChJHcDpvxuDJWUrmVqDXhKJcG7WTYzPV2EUE12CdgHKaw5CK",
  "key33": "3DWrFGAiJTUfaud7416SdM6BuRyRCbDkCD9TMX6Da41q3q2D7V3WeNgRvVk4ryQ6qmyK8bAvQZ25RSfcuydKUyxh",
  "key34": "2cssjveiV5SrHirg5JCJsGqBnNfQnzTsMHcsTpbyVugcTzKLdbqY9Gb5cVWcTidSApDA7BPsgwZgZoWXWA3uin9f"
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
