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
    "5niia86jsevjnG2SprBLRcbYctTW4BpnD21z5kyTJabTtrpjb32pnTMxpM9Fx1Mz7CtpLAhCap6svPjJjQsbherE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hWgLGpEpbYryMRdZL79YSWZZ9H4Qz1d61aKD2Xdj47YJoH1F3GN4Fiad82sFcAegXVqsoeX7sGUq695h8oW63qw",
  "key1": "5DYb6U6TT1FaLUaB9AjE35yqJU371euv9RKh3osY5DXyBirTqVaDczvjFqvJ5bd4VJecWNr4Y69jFwYaLBMfDDPk",
  "key2": "4wLd22bp8Fe4RNcstsnMwTmRkYv8Garh5tpeWv3DLwEYfgaVJ8jz2nbXvu2PdUZqVv2HatQLMs6MXGg9F7NNv1yj",
  "key3": "4oY3FZPGbViFRcPUrfzfWUXxuW7e2SsH7shamYKaHBZtccbBbr9jzFyyKMrczsKu24SNr7dYy5dbcoM75CVjHWUu",
  "key4": "2RtSzTqHQaqsrWmVfjQC34Ym52X9mZuLF1DUxX8BcGbDqDFpnm6GLx64E26u1E731cPJ6YnDsGzLVF9uGSYhD9uj",
  "key5": "NCx1e4tdVL54UY8enDy6zur6dKk12Cc7RA5xoHuqRDQHKass6xb2YTECDAvbQGVFbfHKgH5yXD4jfLoyVnWUptq",
  "key6": "9YR96nmxkggoyZFR5WzUx8UdFoQW3QCk8G5nqYDJ7yzfuuxU9kuVDjEA1nTupiANKYeBEpxoUVpL6b2QNxkAMGs",
  "key7": "XKk4vbYB9H2GRRBC7QCjTR1AMRFJDNeS6vUxG5WxZipYMLZoPzpkjdRpmRSgHsZLaqS52pSpyERowfujRkD6e2i",
  "key8": "3pxLhc5V3z4oxHJJTHPGAmJCLTP6ZjGMGQc6fZfYSGFz1yWF11g1T13svSAWGPpG4qHiu7yHexQB4edBZuvPud1a",
  "key9": "5KGjaFhtDnd6E7zFvw2kaqUPC6Skv7d12VY3Jq3W3ceAVSNe9pMjBiadnYpARx2KpMkU8Xt15NnjFvDvtH6DVe6d",
  "key10": "3m1DqDyJK9N5P3Wef8zEuhxE2L2UR6p6dMfMnTCm2RtE2WiV8Ur56okvBbu9aoDAttNYu5KhyRtKFi4kS7HDgxpN",
  "key11": "2HeZN6peXAHJGHNVZm1xoa8x2BkBynT6hzsp1aRLhQFzPbXo1N8BZ5Mvq4yfpoPjXQZWYnwdtmAC8TXxgYyZ9scT",
  "key12": "5PxEtgBqtba9mZKsgGJHzAU2SwXZqAztYxuuYmZaqvTiweiJiwZpkU9zWpdmYt1drBQ19KUa7XAxuomsBk5aMkL7",
  "key13": "4sW9ochZJcgs3pEhadCLZmiYe3NzkU13JaAuLG1xjDcKwz2iM4h4jGiY2cA42aXiG6H7ABvKkJyoD9Ctj7ZZeQY2",
  "key14": "5wQjZk8qDvdUjvqqkxuQD5vAHV9u5iuMu9wM3McoAwq8YvYezKn6PP9o3QLEHYV7Wgxsjx4p6ERYy8GjcpxsA7UX",
  "key15": "3Ppr3m4UMXBbthksUBKk5umpRx7txjfNBPdWkxyuouXsUEddC73s3aenMY5gFiyPqQd44vSfLD8HFdzXy7Krqm65",
  "key16": "2j9yhiFzayg1X5BvNue7jThn8R9G76jG5HP9GsghV1sv9xRLSx8djFusACtmL2yfzFBtPq7kQejFTjZafsRPwuMK",
  "key17": "4z8MMxGAhGwJtqrQPR95KBxgJDxz9wf5vxiU7P1ETQ5sdkbJcRBER4WXLZ2P1vb3SCzVP68Pu3Q1Z43k8MVVgKNq",
  "key18": "2psei2LYBGVkjW52RkskaAz6FjxAeBpekpEH8kNwsDc4dDGSAkWPAgbMYvNrfUteRMFXEab8TPMJ7TzudLctP3Tn",
  "key19": "3QvqS7WVJbXYYJoeUu3cYy9AqycgyAEmJJihTSJzyR1SmHmWqbRNwB2HHWdKnPTQgzgcmxo3UZSXFeBPHx4KMgaN",
  "key20": "d9wPJKSbAmXYHFhMqsm74Uj8knfG3iMS44zgda2k6EbTfQbByZpbtY5rVjsQDXn5CSAv58cN56R9xUYVbUziVtw",
  "key21": "5t1ji9bX5cQjkojKeXQ4TvFnPXDfwDnrE98Ue7fi5zXenTcSEnro9NX8FckHX77GxhihPL8LYHU6fofMgVmL949c",
  "key22": "3h8ERbiqD9sAtFyDivBoj6XamDn6muzuXLisG3fSwyycLjpkPUkeeSr8mxo5MSMQd2Y8f98Zuck8K3sfx2wWviHa",
  "key23": "2suWVPsV4yrXqBkJc3H9qLVkw4WLayKVYWUuLWZj8rREte4JEVeUbgXuJuVTEaSBJsUaGnZsrqmGrNVBis6t1mrd",
  "key24": "XNeDdD7KCBDAZarruERcUcSq9izDeK8Ydw9vXMgiCiW3T7icAyazretoJJizfuLqnLKGiTD1Cg77UUqB5JRLgUB",
  "key25": "617uEGSLP77TqVUvFeParHUQWNThXfcgb4TxdKKp6v8WRdcspiowLDwsZpcvYVuDw6Q6M8v7KCuj6aWwFsvaxtcA",
  "key26": "5acbUGEBSHJigETiLLTBE1YQUhsRcK9DENzxj64xJ2JanJN6qod6JBLN3ZseZqGhDLbFkCuVvQtkvwrXw7pagqcp",
  "key27": "4dzmQ1Km13X1uBXaft4msuyGXT9wJS8gpDLrxs8r9YYVVHpqmwCY2mGG7omMBQPeBr6ueG3eHxcbsm44TisB8NnA",
  "key28": "QMwpMmFnTLvWuKNwYqUqvvPm5SX8wYuQ7NkswRhF8gPVVu7X8uwLCD2Z789DXn32bgqwBnqgLkFfsyNL3FJ6bpK",
  "key29": "22NYyTGJ2HYM39yAtS3w6b53b1cwEMcAyLdH3CRiuuJwBytGZGKGH5GZrD7HYrXE5MAFUQjzVZG1MtqcEwyJd8Fe",
  "key30": "5P81vWRJHKpqBtZCmwspHg43cfzbJCZiMnKhysuHSPcLSLPWqd53h4w3S5igJ8tzRwDeLEPekxSUgG5rjsfFqg6T",
  "key31": "65Wpwhy3amz9o9HdmPxTK8Ajt9EzQfHW5BDk6BwcoqX63BPncEjGP3Ar2x5hSySb82mHE4w71WkSk9e6YrnTY2Ht",
  "key32": "4SM4Tmcw5otHNTEs8TEkxsBxD4xC23MNp8sp9Gzh42nN9vZy7UwyEYmH1t1CyuDyvrnPVCdNXYuYVt7MzYkJL2iQ",
  "key33": "3icWpUh24ULiKXYRKBR1QPoXjuKh4bwAvUx4HZrAxMudZRs3mR7Pszhe4X6ueQ3KL7CRbgLpz9tk1rm75fTpZig",
  "key34": "39tmdVQK1QMf9ZCgMfuivgLR3VSjCzati3pDLqA89Tz6xHbifmqvppGLa7fwy4ivEuE3KkFigi33VRimQECCS1U6",
  "key35": "2V6xG6jdLQTGkWMsjXSSn3zbDtcrrrYYXb1UUNeD2z6Cq9ZstvwmmHV1psxoGJb9yGk3YKkNTXphn3LdKSPr4BvB"
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
