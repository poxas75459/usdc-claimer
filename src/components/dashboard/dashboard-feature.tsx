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
    "4XndoQv3cEV4ZPsuyp6YtF5YpyBYq8KWdyeXVTkzJXr86ggE7RkAjBUBrMUWFoWCaS43RChmRkbbmWAY2FQAjEfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JDMNfHdCSamKoASivzWm7VLGZ2dUwFFn6DBtFJe7JXgNVSNQzYbrwNLXrRdYzARsgazUxkT9T59R2iAv8tmJq2n",
  "key1": "3qavmfx9n26fzLpgpvsrsis5EMD1WPwNzQJMgu73R9CmGZVPe28LKYrEdT6iGDDU57QhPnYaKVcqsEdT79NjhTW",
  "key2": "3HjDi8TLDBhChSKymDpud6w7xtoeXFD7prcX7sdgGT4Dzfy81qMyPV5TSgMEkGguoy6BHM4UrnDiQ3as4CXJwyWj",
  "key3": "4hrJiccJCFu2Q5nEaqQZMtsSkk8baeaqG657DwyQRBUBJjdzNqPQ9P2T5ArFRmy7hVrC9sagMKoEn2pcSm9bHWfS",
  "key4": "3EVmzJGD4q1MywZ32hTVh4p9H5jER3LXE6oWz3zNfTW3fBGT7UKpHvrhJz87wCkhaL1MhpGBA9yzwVaBtK3uFkgB",
  "key5": "GTMhaorf5DnEKnqpBpupNzzZjQXopxELkSuycLWkkwYZYobtMSjUnfBEoo2mqU9vGRGqamUcnsma77DLF7cLS8C",
  "key6": "5ciCam9QQ5ViezL1aBDSCigu8FP3jV7LdWGzHsuYWtfztYSgWhTkbFMfLJiLzqTqUSZMHebH8nTqEefDyPcnDwDZ",
  "key7": "3g1AhtYcPTnD4BZSXBB8pxT33wMt7gscrxzkLAKay478Z7cYHqcGgUgwB9RmNqkd8GGirAL6yjtfYJJyihKvEPZQ",
  "key8": "5px9w2DYN51XpQENj6Gu1Kv84Yfwev7M8JDerr973Ja7CefBgcqLEjhTBvyprsxwvPxv5M3M196uM1wpMepeL7o7",
  "key9": "5BUXeEYbVABeMfuKPT65behej5rNbP7X3iiCtuvsXm5SxHYjMXjXqHNhSnB8xN7LctfHgm61fuqjRzeWgNCsekF8",
  "key10": "5gZspW29bTYkW4B2QtutSsynPdvtCsfWv2xQeAJfzTBSWKTUpBYyiFB7NqH7kK1LJgFdjBhQnQ2BW4MR6saBzFKX",
  "key11": "4fTCBkxeV7tyYU4yYShjqdSKGDHfBn1R4erfFZedapoFKbLvtCczz8urSBWncbGqHnWxrEMq2Rz78aj7dRPEpNjt",
  "key12": "4fBqKNZyxaZo1MWfLmesaicororw3HupQm9EsKuYHwwpVMjjkSvW1jFDPmVhg7zCLhAaXHMNp6q3jZANJxMecsJm",
  "key13": "59VfQekRpEKYFF91jz1PJKr5EUKYFcPH8whnrrtJX3i6eDzZ2VGc3SeWxxpk6Voetn3akBa8aqnp9UwTrmXY62rN",
  "key14": "3kXeWXB9HSoSSZg8aivHUTcBYUBGUbe7WVpeZqEbSEs6TuEsFvGhLr2gGH1tRrjahhhCDZhkfBgjwajDHaahNksr",
  "key15": "23igEQ4jEVeTe9BTXqyhh3ZkY6LXuj9kehvkfPkkkYmeKTdsF2a9XejinNFtgiFXJ9xqF8x26ZWasAnsJ263W1sb",
  "key16": "5XHW1cTcYPw6C4muwSXWatFA4DspabLKDz4f3LbHd5CpKtr3r2Q3rnYn9HaKQKfGUDnkhUM5v2P15XhTFqYb5j6e",
  "key17": "4jYiZutJqXjGWtw5Yb7X6JuMurmyp31TYi2YRYphcfzPWkC4KQEG2uTZhYw8oXch8ZZ326WsxVeGi9Edmzf3uSp6",
  "key18": "5JTjLfKovHxQTRUHKyw6j3tRfv6sg8zxAio6sU1nMB44A2g4XPWDFKnY7RYZEhcFq3KEF2AjH4D9utvbaBCLxkRx",
  "key19": "3uQZxAxBGWQntTGbcG5zxxUPCbqpfgdwdSeodWfevxDwWabqMVw5upEtahitDcW8EUguKgngyfr7NdB5XgfKdLwE",
  "key20": "25VmnKWeht4Ft3AvCSwihBb7TGWDCTtcBPvBiD7LXCyW7duDwPuefvG46XVBBp59tmrYAepcHRwjyjvzVm52GVeC",
  "key21": "45yYZ74Q5qe8mDKaMnD8ADUMnfHs3fJXqgVW8JNsaJrU4QdcasPzpTbnuVeNhoSgQpS7gEnZ6kmy1UwK2pnsdpvz",
  "key22": "3FcbSLGUeWvVnbZ1acyjw84jpiL5N4yMkKLcLdyDG3kV8wxYwGzsu1zHTt3R8oRd14ag5fUHe4GPL3FxYkWUHemh",
  "key23": "2UhmqVmFGM8bn3v99d2MFxbnofTiss2DtWxv9yiSMvX26EcxYB6BsaCbeiWUhYXRVrpcDJjNgEiTUEdhK8dYfPyf",
  "key24": "MCszsnXf9QKtGr1rhbnUsJKYmbg9de1YGkmFhrQTZajRbXk6eVe9XAff321hLgaYi3t4HkEGzNR7Hee91Ls9s3Y",
  "key25": "55XkFQKmh5rwx4hFA1VNibDTDbKKtSyRzJcLRXPd5xJyCmbpGZU5qR2tZxxZAjFWPwoFZbHQGT9hdAwU3ujyfRMa",
  "key26": "2y83MQEt8g2kGRfpccyrXXsKT6eGAJ2yufEiH4gqpeJ8qzXqMBxzUPpzq8SdWhwTU3RkBfR3E4DtWAt3VRjRcTNR",
  "key27": "3tHTmDqVWsU82waZizFuw1QuhVeJzJRtYw3n5oyhNMSPQ4mxdfKF6YZpvAPmrwNPcBChZY8Pj67CyQx8mV9obmyL",
  "key28": "Bfp9bVbsjan5dohwnkC2GAzwEKHEP748zWtbmkrKXhDH9vUxDASFiczp5Se5URXCrpjcsBxcidy6oUE7jkzsEc2",
  "key29": "3e2Q4ygj76azUEd1VnK96x444EbEx95Fom79wigrF8C6b2cJSnPygoAfRQgZkSWrx7Uy2U69Dv6aU3dtAWD8fo7u",
  "key30": "4fdV1RtDkH4Fje87fKSXf5UXuWqhqu1JEWQXBMk7v1uUwLFzNGmHFL3aY3HSr4BsCH9WKoBooAkHjikRALx2zx88"
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
