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
    "23R5CNtuWTEwNkDrTxPUiB7s5T4nZDqYcpPX9QKv3ckuUJwvDBPnCC2mBUUa4vJXhKJmoUGcdvCwCe7dsXabw5Ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WtMwQNFgzsQFc1sYVPCLKDAcWAVxtbLGMyV1DQ7713dm76PBYjZF59zGxwQz9oRYARCBNSmapWaxuUBwQEuZgGG",
  "key1": "bFQPjDJbnSKjKSWyMkewY4FtuiayV1ypoATRYndVcFDAUiVVgzqDia2T1ocFtqrNH7mYGyrJ6GSWMr92bGyWv4W",
  "key2": "3uq8iBE9Q7xUSqPPEmGQf4zW6V64SahLgZhEit5nW35DvQGMDnQHUupDEeFEz3mpqNrAA2AckxLmQ5MJPvANB2Gg",
  "key3": "4AFtFYHhcHRSynxaBH6g9V2WihJ9tD7GHL62mh1wCpJxYSFyXkjRssHAabfudAhciXBU65jq9iZgzcEpGsobcxwY",
  "key4": "HxTPwNGLzeK3T8DDJjCJcysrinqfdY36nT9hoi9dZinrZT92LTxt38XS3ixLCqo1QgfdHhGmQGm4ZL6AZmRimaT",
  "key5": "2WH86oPdxsYvidGy7xTBtYYtzQXCXbsx43WBCdhp4MR2LS4zdMwsW51hc48UJkYKypnkzRRGM5wJGFVW6XxsZdTF",
  "key6": "4xz6j7TXTDxVWQizN4BRo6sVRDRSKU9WGDFgkvwaWe31qy5bzkvpcTwNqqRjn4XVbF9vPNBn2ThTNp4tKsbbkoig",
  "key7": "6Cs3mmpEe3T9WMxuKAJHxz1UwqiThXBdiqJaCbVY9mHxXLckP3aJHyDz65gt3ktBQuydTyM3wasMVVoSCPWA2vg",
  "key8": "baGyDE4KFG2VNt3LuRvCT29NWzbFtJ6XNwz4Ym8xqMHvfUYk5dN5Y5SXQJGJjPYH3ScRg8UN8RvHx2PP78ZaTUK",
  "key9": "F36vfyo1Gd9mVJkraGxQzLypCtygHAHEsN9F1kkADZ4fcHnvDgX99hNMBxYoURxyoDRtDwY2mD2Vs1E75PZXXCR",
  "key10": "5FkN9pXStb3whUgB4JDJt7HzDTcTj1aErZBxeobRDBWRgNax5EHNmXz9z16zA1FQmEqZTrZ5Q2miMWb9RphbVNko",
  "key11": "2WMEbUzrjt9MV4KkPwKKbfqct9iCZPPeszU4eHXrv5rFkf4kA2rieLEfN9o2w3bgN42Qvq3uhnDLwuYz22UqoXPd",
  "key12": "3ts3ZpU5kPqRYbgjeH29fhsod9Rck577dK4CrWouJ6rvGhx6Uqj88NEKbGRCd8bt779bVLWGfD3gWxZLtQCQEY1m",
  "key13": "3LWSHgJ7Zhci52NY8bXKe4aCF97KmQNSfuvbAybDYDXDTq3Fr3Bk64bmbsbLzUqXh517JxXQonzkikPquJ1Dhomw",
  "key14": "4s9FwvNEo9Z77aYmLFE2QXBcf5URrESnJ7XwxWmg86ZGSceFk8PtbUbzw4YfuoAMATbbDKFe4Up4L8LXs2W5PJAn",
  "key15": "Y4jDgzjZSs6VhrPUFEQe9WfSA2QuqqJDrykGCe8swRZZ9pxdCuXdCh8q82bEGr6wVMoZgdnfBNvessWNTYUh5d8",
  "key16": "PuKKvD3TKHxGK2zqk2WSuozUgc5gPK6Cc46pxth5yruBMmFqywBjzfxHZLRqyPYMktFaSuL1PgRVPCLPaCzB1qC",
  "key17": "osuVtrMMRyTmrtTaearcwxop8gWi7c2nKEgucvoRYa1oi7q63k71SDJRkonWycNZK363ftEw6ZxCEb91jQij35A",
  "key18": "4Vjty9tquKDXodb4usQwM6hrh4q3ABkuYCSz6vpN2gFjRhZQYXhznmyZ6tu46PUPKHoBVU8wXVWRLRM26ZtNCBri",
  "key19": "wgELQCxGDXMnWXsoAvy2xJ17c9aGYC1FWv6vCiwWEeFi8K4yRr9efym7Dbt9W4qjAZ4rKSfWUzzWFRR57vsnwJx",
  "key20": "31wGpsA6mbppc7pjYL9e5FkhqBG8NWC2Pf26xg7SdCztg78S3RcA4aTo6T26bf6zPyawAupJYxoHugUcbCAJi6yN",
  "key21": "3sAviYWMWtDpgntoSP7awCfmYrDSJqwUMCn8jJXVErsLrGKEnoEd6FhUMvKSqSPvPX9GeyyyvBAmxjvDrBr19HXL",
  "key22": "464TKcSooFSP2g1hL9Cga3NBbhNeD4VGvtjbFvVHd5oKLJTjdd88U7tMn1f3NkrThYv2xAV4Ujfg9eYgp3j4za6h",
  "key23": "5TTGiboVu93kUvBPVa6rJ6mAB6EZQ7bcFzsVFVjZdPaYCj8TRTf5JhpYVS4fYPKUCEedbSbgRssk9bJRGYTMGa4t",
  "key24": "bnnrh3uj18npm8JU94pJmw2MAUmnjARdJbzVWKsgE5z6f4Uv6NjCarvXnMRUsqTJB5ehNaHRc5y3z82QeEcRrnV",
  "key25": "4YSp1zWnQJSA6wt9YFyAssgstaZRndTDctq5k6ePimT5d1JjEnrCVAjVgHLYGyCktphi4hdvheKf4QCfCN8Y2yAy",
  "key26": "5WRnhkpgkNR5Fb9AUEpFNnGuVz9AzBN3Zb5TrnKUBceCxLfYw98HRqshEiXmGguHEkiHgZy5HmdEaC8dWUDnDXs8",
  "key27": "2CQSDz9zWr9pFbbA5sw2qcCo3Efgpp2FHJRAmcq9emB3W3yUxodMRLCHcCrniYD49LVVDMqippof5MWME9eeXPum",
  "key28": "3JgLVWF5TvpxvbxFoJKbAcNjvHDM33KdkeB4X5ZdCEzUejwpQnxFLvmPjfP8cDy2S757yoLZkF6KjfeMfPYgyS2M",
  "key29": "TyYUuhtHoVyfZMpgtY7EJDFhB2BZz7jRL2KfhSH73ygb1SRjbrjgi3Lfcgg4nARyRRyZ2EWrbErjQ9sUCL323WE",
  "key30": "63e4T4M9xjPYEihpsN4pmhhaekrXfQtPFtfs43C6EB7HXE5Fmb1kRXTqGaizPeWEkBE6bRFpxqr31iPbDNW2c7T7",
  "key31": "3QqVr8MJ2P9ZkHpRf1zbZrxazVJpZ4sZSQpD5zj1ku4UdYdNfA4VtDezrDY6sxJDaCEZMtgHVqcVx7zntx6maxEA",
  "key32": "5xPw4v37mPNzMaNUN3KUWoPE9MSifk9i7bV2m5ba53SS7X8tmT6pxoHMxEUwToTmr2AzwwH2onJ5286zADaRkYY5",
  "key33": "24EZuVqgwHtkx6kHJJW1mUXf5JmTDhG5BtY6xAJGYbSM3be44DMBjjo5NvRG9obAiFK9eh2xa9BpJTa7sgQsREHc"
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
