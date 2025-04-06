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
    "3pRoCrxqhBTfAssFgEDs6vwmPbuWBfpgRUJBZijcshXFjefCqwopATnrithbxyFLiYrytEWaowQrY8cVcuMKcCCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K5Pd4H4hfLcAQJR9iBX8n5iphVYNoZ3nUks4eymqp8kK9YXa9vJuAPTMW7YL4ShuTXkgXjxjsDJS89iUsmFhQ9d",
  "key1": "5CHjeW4KvkFBYW7H9VToepPvFNMe6NzxNCtCQh88AHSCeZD9JJHpNrNhiKCnAz3dChQmAgC8LRLHXcqxTFHWGF9j",
  "key2": "37EKvYSkwUh6N4BTqNHhMPAw6xH81SEsd2wBRsUReYmEEMpmMsmzxKoGTiompViHSFUAB6LJkCsfuyxqPnA3ADsX",
  "key3": "4JsU181TgQ1weYVRG5XgTtKEuf91tnQEGPccet9qd2CbqHqwVZ8ASnPBKifcaAmG4gdNeV7WLJ5BsVKkHiFEvP96",
  "key4": "2z88Upim1fNEpo56BwvJSpQoLfJUEfgDxvcbfQHzWRjri4BmxDj5MVtwyokDnES2RLnrxsZJ8H6reeMsLtVG6f5o",
  "key5": "4KZTHREGjmH7i9q8DBwUXxbvC74uKS4PRtCkCoMjShJNRLV52WweG6ZP134LjsYaMpa81yevbrDkUJVhADeniCrm",
  "key6": "4wVmD8JZJGY8xU3qpKMZG5bTppXGuA92Du8Xpgycbut82Faw33PU6ZN6q5g8AXhkNCT5UW9HvuoxmLCWQ42zLdTv",
  "key7": "4FWAH42MBiYiMtqQpw7G855UxVcgVjrRjj81XK3RVrvV9tU44Cmq5g1MUNHzLLz82gSiVysar9LvpoJaUHMj7wiv",
  "key8": "3QDobk4rwbqy8SWt9WrqA7BnXWA7zzo71bs9s3NAguB3Fpgv96kfvVXjmMfJNQ3uANSDrqCiiSQ1USPZHTA9fJC8",
  "key9": "52QJGrVXWYH5GSbqNMxWQPi3uGkxz9e9a3hT6LKK7go24DTRJkVAcSJq4MkBtLs3jRa1SoiqAjJj16ppaSkLaPxL",
  "key10": "5m2wT3TEa1wXng5dgCCbHtUMbScQ2iiXmcPKdPyL3dagwKE9i3ppAW2pMHbvEq3rSes3t4XrT5naZGYiCCW1cDq3",
  "key11": "5Hiz464bpAk6fFp6WYgwnodNJfdzY3smMFMXZqeDNUsts6d9oMbH7GPxQ9b45d3VEFusyFBKB3CwKHAhgWcaAAP5",
  "key12": "YDR2Y4Di2o1qQpsCgWSuyfhMXdfMUpB9x2UDsEvxm6hY3PNc8upN5eDAv2CLyuwD7es3JXyVC5sUVRg9C7qYqXS",
  "key13": "PWmebywpYdnXFPTYx6Z7B2UXy1ZWdi8adZoZhqGTYqrVWbMv1SE9gFSVj7BZDemRmSm4vUsPtQLLJTxNwCAqJ2u",
  "key14": "2SURUAvD76hHrZJn18Pf9doARehTuDjx6g3JXE9r7nVk8BmQDDFwsnGsLyDVFBLazuDQ3RhSPQ1UrqTSv6KovXiZ",
  "key15": "3KZChqytGoxEg46Wz81pJnDZy8fwKMpwjrE7f1p8GTs4x2mrgMRuXYq8JEWhrfYyjFXH2yfAjQsjJGojJfY1Q5j8",
  "key16": "5j71o4TYdUMu6TGDyRCMMnivKcaC3vP2jqfjsjCdNQVyHsipQ1uGNeKHMdPQv73XhVhvmjAsK5zpzRRyVtDTR3b4",
  "key17": "5M9roWh6oQSswcUztj5Mn4P8Xc8qPU8qVs2CGobSrjXicCN1cKX8Ri6mBYNNapMTTwfqc1GPvCNhKgVekdv5PdvY",
  "key18": "5vgPuNx9KqtVxkJkS4gEh6WQbHAY6yKoFtr6omPxdRzVyiXgZfoy7aicg6sz5wv9ut75gjqR5UpgpQu62iJRemM7",
  "key19": "2cvCYuRAnFKgCnEgq4Tvi57PpV3JxE5ccBqBrpKH7tVCQp9Adrsbq8pw7LsG4RGxU12vRaddpfs3sWifE7McHCjf",
  "key20": "5KBoSrvxSqFCxPcdagBcVoprZbJTmnK6nR5QYrzCwmV6J4ac4jkj1CAZGJ7itoTD94KEDtG2QF8eyP2cV6MP3X3r",
  "key21": "5DzrfqYvZQcNnnTJSo2sei56ZqP7ATqM5iBsTifY9u4raK3Up7VTFX9pnGzcthU2LH5VU7eUiguHuhYKUsXgnxxW",
  "key22": "4gZJkWP4KEipfEx8hiuXYghcYKH34ssPbHkh3PSb3J1tsirtQT8ATX9yCrECer6PRvGXVnxADqzhjRNeVd8wNUm3",
  "key23": "499yncSg9RnPsApnYPajMh5v8cngPdSHjfpqJmkbs8vA2aWgWggVD2b7zm7ZppFbcVAVE6H6G4Qkmsav5RGZ3ffc",
  "key24": "fFvzbyDftaqcwDRCLXxCDX29BfuuVUANjLpqtq97PYfQRHDnfmuCq7oxkVJrvwNURhdTK4VL2MUyfcawW7YmYi4",
  "key25": "5bppsF7kWXFV1asaHBYh4kVo8bZGZ8xwqshayL1MjJqKyG66rCtRDUb2GxkoqhTdnZ3oDaA99GNzYLJnj9b4rx9t",
  "key26": "41Bvio6tLPyncR3EiHPZJ1cbgz7Rdo4n8rKQf6nuMjDFDEXJ5hSRyRSZm4rDhLmZWi1vzbds935dAgFuVYrbizBn",
  "key27": "3xP6XNE2VfCJryicD7oxD9uJPwnhbVFAGoHko2dTJXCg1T9tNKgEpFXqhBYopBKcxtBvBZvmnvwRBxn6Zyc3KdgX",
  "key28": "3yYGsQBzcHmC9yVNLSvAVvvZhCEH8Je5F29izED3RAMGZkgauFZHiTU4EJTAoPhmNdcUGX5h6T1Dq9FqtV242JtN",
  "key29": "4GDP13kkKQ3e6dQcjbEaJDA6Z7sX5hajunbQ7a5DqNUYf1U8QKZUDyMyUETzNRxL6yKD7d9v5qEAvZMmmvvGANTq",
  "key30": "2XPVmCbadYsQ5Zq8Z533HMGx2cLHuProc4pgyaXm6cKxK5paNANMGVPtY6TT3oaHmtx2Rm7o2aPbggVVZUg39UNY",
  "key31": "3GYGMR5k2ooiYetdssyqxvFsjUaS21MpdoLsLrVGh2265Gz2o53zsbsrtA7dCVVn2xcYEjcCbLrZLvmecrvgXBHz",
  "key32": "3wvxuPeJVHSLRNJ7MSJnyMFFuh7AZPFUYxwj13TsMpWknrNP3vSRz8rUksrugpknmBMoHa8dDEh3gXcTavRM4D5N",
  "key33": "5zH1Ja6ZYNGgsydDwZ6TdHGScPvDTUoUVDNhbmhSkcB1ZnUEN6crSfgEw6rTPP1oEixWU8nmXmKQXDNwmLLq4UPB",
  "key34": "63NdGYT5Qpw54qp5XDumMhQ9CqDMYHokNHSryt9vzUdn4VWfLyGHGcLkin2Kohv3HGSQ8AXePzS4eGhgJw76BgQ5"
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
