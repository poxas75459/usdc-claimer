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
    "XwtWB6hbs8V6aeGF7zW2FJQNNsKbg1AX3gxs6uyYFe7pteNDUUJSPVdfs4BsREDmrgmMK3L996hNV4V5uHH2BFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B1htjdJegm21yuDmitk2QBgVkriNDWkuFNfZsZzSAM7CjcvEZNGYiaFEinwSdWLDfnroYhGFEtZbkXTTAqzGtaV",
  "key1": "2wmYSXA2fbMVBRgADHGAbZFRXjd4SWkx6nvstJuVTmnqSuHqToWcyF8M6xcswgcVuqzKCqAsDnXFSSsbQPXo4ejR",
  "key2": "4ebvS4GeoNHje1DUvpR82qDuT7z8hAa7PQ5qy2FABB1ZDzMuGZ2wQkgRZpVaACrWPECHXyiKBvCMSZv7sL3ryxM7",
  "key3": "KiFX3KvnFKHL7wzHhZB2Y3PHhDBjsZUev7wH43yQM6gFdQu79SBnU7ezpSyxaKQnjpsHJvMGV3PfWYTnaMUbHPx",
  "key4": "5qu8voccNVbtui8dMq16YZiJSx4sBf8xxWDouvhMXVJged5epNfPQ93NSB47UarJxyzgTQsYgrWmjaQ6yaGwAg9d",
  "key5": "kYHe5T1ojTJexKpBu2md59SJgwVoVAe2FPA4SLzjuZWCBVTmJdjV86zj4mYR1o9kPzDXdRDEeRC4bHbt39PiX2q",
  "key6": "5QT7KxYCbjTZrjmwmeo31BczGwjK4UQTMxKZkkTsLuUC5xXmNdBoWAsgPykcWBxg2kXCtKkjegZjYZmuUwUym7c5",
  "key7": "3oXJVsTqtBSfj4QdtW4oz56Xjqa2zWtwGmP1BgduBSHLbDsYW6rtWfVCiFG6kqE6qhyA9Xq5Tsmbh3XLbVV4ktAB",
  "key8": "4bcDMSX3BPqTsTHweC696bSLQgctL3v2oXHVvV3pYneX4RuYsUornEqmqDa6bsRKc5BWpQtrr4ecn3zkPfAmpfup",
  "key9": "54xJYVDxqQ7khBpyHNA4AtyAry25SVgit9tEyjkx4dyVLd2gKeJih8FDDB5eNp3FnHMLfemVLKabNxyXHe3N5eqm",
  "key10": "2xr5xX4iV5mXcz1GkKRkgrp3SKADXa2MHzbuu7jFF1ZPQvc5dXCZwQCfsPYFhaRUJBNjL9p3Lwq7y6EJmCGy8PTA",
  "key11": "2oP3i3WqvuSeutiJSDFpGfRLn55dBzEnMwaq2PU5ng1A3vCcKAAJKMTUp14EhVfJpe9kHvvLDtW1MWZ7t8iX7iyS",
  "key12": "2k27D6mEtQ5m7DEDSUgcMrg5eygNXeGMEyRTf3XNbDkMzjAriy5CbsRjYuoRGHFFqBCpWB7SXawBaT2eXZQFYvx6",
  "key13": "2Uy1fex2Wrw51XKousCa8bLwxUMfZSNNrfRzrBbfKPgQVmuBwbyUZqc5S1EXb78S3uZkqfWm7n9UNyRE1R5E2BjR",
  "key14": "5FbEXkgSMgZ8p4RpLexZzC1iHhQ6efHd6gcFa5uxvxCfdBJbeFgQ43NidiRk7xK3uwyD1FetMR4x1VQhUiZysEUk",
  "key15": "2CUeFMBePqVbMtwTJoZUCNR6i75thMpfoaYTpk72tASe7XE3HwrziuM4J8bPEk8JryeBvNbcaRVYzWWBzHkLhufa",
  "key16": "22jo3p7Ns2HoVXvuT9jdffiM5Kcjs62ZoMHW1sKLhm48f2fKALqoMFoBvjZxpyxw4bzsRbRKtdNxq9KvLZX7h4nb",
  "key17": "4qGn3gfXrqayiWvC8zDqsxK5SYtqbpw5w87EYwRTJz9vp79rUWGS7CZ7aaaz1REna8LrBbiUCwQpRX8J5eYujcD6",
  "key18": "2JDxf23bptitazLE3m7YPxYF1S7cKx9DL8F9HXUVTLbSqARuEZgnUsShtsLfN6cBA3t9UB4UEUnSsuo7XubpL7MD",
  "key19": "4Ax7Ey51dYM3wBE4LEb8WadyA9bKRNn5NEE5PRaDkNioFQ8Uj6rMVsRXvH6pF3yc8xMUyvvkmh6Nxt5qr1aUgu7z",
  "key20": "4eSLPX23nH8hbuJJZshKrjuHU7ZgBf8whXc2empPTYxdAifKCRCtGRsqBumNDDUY8D6wd81rqSCFeo1NwC1w6qk5",
  "key21": "HJnEgTDVep4zym6vNwy33PVckSR5RDXC1ydMBRTfFAQAnArrjrdnPGG14epCLviSreqiq4GvKTYa6Whz4CZNkyK",
  "key22": "4fDTas5fKbUxXoKq7mwRx6zYwkGAy2QrnS5rgSd85NJzJ1wLbSaqcLvdQvcXMQPtPQjQH3meeTYvuUNos2NQvEHa",
  "key23": "5b1VMEtxjBJrCoEk574xo4vknzYeRWVk4rzUnnPYLYH2moskVcrWNPRmaBF2bPcjZpAyeVQg2jNxbngpwFvDqTJt",
  "key24": "fDvqnmjxK3sF8kFGoKBTYG8vYzjrgMApTy1xLNpivmqHzMoUc5M5Lsu9kPaj31WqM62T69B56rZVnPfg9ahqS4C",
  "key25": "5tUYUzGoXMxsy2UrpL3qwtVn7mHB8rgAi6d1fNMzFPGQECN54ZjKCRM93GWDjgui4VNSHyHtK1GdUoFLGDKHveaH",
  "key26": "5Bhnm17mentjXErPnAXULAX4s2QtXQMyCRBw7HvGzWSDjThfqVv66uK5x1VQtugpwVjHjqLBopzkipyyvU3e3yv8",
  "key27": "5XFDyMGzBmoqjwxfFtiZNrN4wKG9XBuTuwGp9vZChaY1vsJ8o5sKL23uvvyVcXqSYHVVKiRA9EK2gkA7GGsVQ4hZ",
  "key28": "5XY2kJyJvUuZgSdDQbZM9qY3DV1TQkLdQFS7UMGMKmbtmSGFN6xPdz8DWKv1uNwv7gehtkccGesZynGuYR3S7BW2",
  "key29": "5z66zYosokyMf6wrxV462AuCZPBonUHmRNERVNihFXapaX71zsQL4M9mDr4pigUyZpetHbHCTCsmSsvmTy5cYx93",
  "key30": "4Z6qKULEVwQfYCX3X6M5KtVQris6LUHYmwyMZzvwVYSWMvMhNHuhjeHjCQCDBwqzUguQrcyGp8y5Fon7JZM1DxVB",
  "key31": "4PTrGk7dymu6Yrk7nfy4R73B3NRHFYaMt1c9KCnDSdF6UumzMk5cBVx7p6bseMdrUTorQR546sptSZiWrgGcTL9u",
  "key32": "2GUk35PECzmEZMLFMBy1fUt6TscdAvUBCWQpaDLVNTu9NKM6yMqbo1AuG8DLBr7NiaoYTYCovH6KLzPaTJxCVzbG",
  "key33": "3H4cF54XUncs9CngadmYLcm4R7EBZvJ9V9D92WurHMzy6A7zmkDc5P8mEThszWqyTRtSzFekxqpkNq3H6FfyXfak",
  "key34": "VhRk8oSZ8aHnELGXNnvi67aAHKh55CrbVEHYzxbvoDgHb7YGoEZVZCTPFYbpo5RiWAPG8r9yBBowKKCypsg84YG",
  "key35": "XxYHCLFxe66K4szXY9hfiGhQL3XHFow5vBn5T6b8MfsJw39dPHA28fn4j3wZKVtxLoqL5uRG7UPm5JRrDUgo4kY",
  "key36": "3xZct1uqJgdG8vk2cF8jbfJ3mbDnnhsVf53qAnA24MSoadzvP5EomXLSyhDXDmWXtg53bze1YXxH67Jg4DFRwa58",
  "key37": "4yo9D3y178ekhTQLNftYbKAGRy7zCfMtdAWcZDVLjAv8Q13nJ3G6rxrega8JEaoRX9sN5mjXC3aD6fkrv7Lq4gyq",
  "key38": "3NPMRwgVfwEgKqyBMTPuCzY7DrgFcKRucG97RPCBMUPaM8paXwrTFBcBdjXwExrCP56pvUPxXn8CpLL4ieQK6c5N",
  "key39": "dNCoUkhnxX1ejHp1VXjRvjD2AXFmVadkZNR2FBV5HhYP5oJhNAYENH8XTAPxsGh2TTT1yDUcau3ejBLoDwqAbo2",
  "key40": "2uhyyRRtQWdUD5M12Tp8131dMNag2zvPqD157vUpKpkVrPDw78Dcx6kyN7JkRTWPYRXFSFzWxhxL6ePvcnJscGt2",
  "key41": "3k4waDWsYLecPpqMyScVsni5aEr8mZUJC4FVbFVzHHkdzb1uecLa3o3QTptQyScTSUnEZnoaueiSdVJhtKiYyZ9u",
  "key42": "5KBLpS7DqT4nbRTNZjeYVBKB7jLpvXo98bnzsjs4mRoeCmr5jW1UTPLmu9LtPqmWgrkWbadRTxJx1PCWaB5zHwPK",
  "key43": "3RUhL2HzeVw17da2Exw9GyrZhygynDrdaSr8aMMGAM2sKzZEmsJ7eVMkiSLTcrjTRjYPpJSn9gSsWUaas1wKqRXV",
  "key44": "3QwcxY9Beh59vPvmGopkm34eQx4zHrFo3fMc2wySNmFAP7k2rVT4amKYdxbhC4ayhi5tgVZbTKzYKjTHKi81LARZ",
  "key45": "4Cce5ugVPwLbSC3mBaExM3HCeeyUZBCmeUWVbQPnfsYkRWQo4d6AzCAj72tJXae7u6kakLojYtmFNphPXfhfXqiC",
  "key46": "3wtYaS24zzta9Fz5JVthjzYsYhQ3Ews9PbSBWMXwbtF9hpQbhjNx5cieBmAZupCdj4b8PBziQqimtJS894HGBCwJ",
  "key47": "K6Y7NHZiNwLPeaw2Cuj8guDbziKS2hcfKAt4fzJhx1mbRGrydjyXHXEtj6ium82jKwP3RLH5mDe36kNbdUeTBZv",
  "key48": "5iu467mQdgzWUobEjTXGeNnvsSyK4zZJRMePbweU7x3NqA3dfFAkrLzQBvuUN1gV86p4ekW9focx2rjpyiBB95JQ"
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
