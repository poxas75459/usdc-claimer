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
    "3yEpW5U8AhZRv5vWFSTwRgBBEs76yx6D6qjmV1YB6nvWsj7oXbGy77q24bnkjsSETNHx8ovRgyVjwMuiks9RDaYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WaSf5ShPJuW8thNKvSDUHWXMa3TFS31tn9k4Vz1bWDhQyDj3yLoNqK8zzygGNCCVa1KeKZEi8RskyJDRgD7huM3",
  "key1": "4utyJ6BvFEfZMYpvp1teENaK2dn58rmZmQF9NonCZEHB6SrZQr41oiSrAHZD4Vv9VPvhwfj56LngdJsHJM6vVVxR",
  "key2": "4FmNnekKdZri12tyo31KKzAhVthKuLLwVZ7CBeX2q5VceL36hpG3Wtk79ZgwvNAFpVb2eE87KS4FsXqa8FDnF27g",
  "key3": "3Pa6ZwAKq1oWTM4xMtMQ5xacsYxbsN27HsqB3GaspJdnm5KrZJoDwP2NnHfv8Rb1rMTxjiPsFW56pW4pEigCckCS",
  "key4": "3D3S5QgChhHrkb1uEuSRLski1rmVtXbHwLfeJYdB62iqvV6C2L5psk21n1nthKWM2d57DcgQMdkrjKjv6QFeB4Xg",
  "key5": "DrTEk3KxJKeHie6PnZ21biFaMDV6d3w651z6U3DVhCnSSgPdrDDezVkEM7VDM4rMicsTCnpoft2JbZ7CAwmEMBG",
  "key6": "szegfVgEV4adVoEXPe6XzEGHmwy4ckFAfGzUZ47xWFKPnEVP2rS3cPPjEYAqB8GEPYDmC4SqxfwvS5LVE7TnpcD",
  "key7": "mvLGSPyHzjaF5oaQKpMh5uuAXie4v9UUAJRtmq6tsGc2jdZEEwNqhadJHnZd1AEYsr9RS2dNwWrifnVGAEuU8Ua",
  "key8": "5ZpW4eoZvDwRnXSxjcuyvg2n6MgB61JJNMAmpNhJifzkC7Z6FA38eRQ5bBNQkdSjLT8VjR9zfpKZ7jg1bkmZvg1N",
  "key9": "2HBhUdXbQvP6Z7AaEnpAUEQ1ircdbwRDAsmvXN52AdyBrSeUjbFZFs4hUEw3c7CHCaHzKRA4cNqLUTAL7ai9Y5ZE",
  "key10": "bucCHcB4fZ2hii3hLfxkrMXyLq33S8gijKFtnLL1qP8tHj4KMZEF5nMV9RhVVoUYXcsP2bxZLbGuxo7NFFrnPCP",
  "key11": "26Zqu9xssBar2KUnHBwR1fnxoPiywUZNfcPdkBcNrbJDkUHcUpJzjYpLag1rCoJNG6XyxfJZfzr7zTd1ptXvRSSZ",
  "key12": "3dYX9asyYnJtjM9xwQLJSGGZn8JCFU4F13yn7Kd297rwAvPszGQ3tP9khS8Gzt96NT5GLTxrED9MBAwzR9tZHa1j",
  "key13": "2pJbGh54KtjHrCHbCQ7tLGyGfcm2J458sJZ7kdtTCLLVt5MhWiiTALzJsMUhR6vqbGEt4XdcTwWpLyoWFysQHaUE",
  "key14": "3MxH3zvdAsQtwLai8DoBmFcze3acyevNUcgQJXKCretrDyWXef5vbUJJuvzQm53nvknPzuGi3ciUKWJLdwnocN5B",
  "key15": "4oFABCea29YQ5bnT6kAwueta8TVFk6o4uWyg8qtrUQm8PB1iNZHcquRFw5YFjWMaY1mBjuBfpiufJdccmjvm5ner",
  "key16": "3ZJ9NpRxa1ik98xw2KbUUnnEQAGchXHbStfTL6hEy5Do5sV5wHJutNFPFQFrh2ZX7bpowd1qfVPzhtb7dFrgWPvj",
  "key17": "UDL4S5YLrGQREw4jkZTnAVwY4NUbs8qCt5JFUHwJxPqRLscuLkh98mcttodvt4UWrzwwY2koyt25uXyaSvAgGoe",
  "key18": "5rysUmeQpM95FneJArpBHXLzV9SLg7wmUXdSU3yTB8mAREhfDFiKNkVQLU4qBRh6Vk2d4u2tSmCA2i5AXqhGLe5J",
  "key19": "3Mi82GSJnqvz6Vgus7NaN9qNT6qJs8gZFCtibsamPkKXibg7nbpeNxLga7pVfzpa7qHaJkJVkCaYkJSEZHWqZpUS",
  "key20": "43qjq1qZXSBt1fKehrD9N7MhVH3mj4cn8rC9ts9tyYr7ZvuKi74qxdkxv4XbBbK29j8c3fj3V2Hgr1mkUcGxiCdW",
  "key21": "8Stq2YaBFYt7ptVLSkH7Un55jsJy5DY4agrawuWdHbmLpQLhtGHmWibhKqMGht6kVJMUJMPtG3abdsr3VBEFtYB",
  "key22": "wN8iQWS8iSALUg8fJGPcHdSDq81KYDWGmHCBvJhh67JnSHt8Xn67NR4KK9Ha3BsLYxxokfjrfr6QukXPj2H55qs",
  "key23": "3c28tXj7Siie5CWwr4pYMuR7UP11hLxdQ6M2NoQoqFmUiZ6jSUcPvjkymVuAbPfzJsF3CJBcTjdb1jqyXS9jwcMc",
  "key24": "3ML7yZQFKJF4L37EarN1reoWgXcwienoS2EfyDQJoqhh1UPAGRNsR39CbdtAAcq4eZCsfnFAkcQPrLMVRNQrTNXZ",
  "key25": "3LbPkiD72uAQRYYJuGdyx2utxCT3BWn4WVU1wQYRw5hjNsrgn7HCUwXc8EKaEDsFLLFCRcyk4XJmPUQktBrwGZoP",
  "key26": "weM96MZLwRG1yaEXXL48uqeKPEEMAuBS3U9kR6HC8ofMNkD5n1eo9yWFjm3v2whzLxTt5Z3TmmGMHshHVUxtRbW",
  "key27": "SMfZjZGWqUwcdnP1ydWnTC2akyfWsjTSt9Y8idHADB9iMUrmVUfbUh6PNYAYvuDZVNpY7moBmrbf4sxiZVgfc1r",
  "key28": "2M6ABMf36nkbCfCeriXz7QV9QANdodeWHshnwMiC9nkv4qDoL6yKtAHxjSF4kkyiKFZczPrtGmRXqvryYEpoqGY7",
  "key29": "4EaXDCo71yGqfPz7iGgK89e7CsvzeAm48TF2YdTmftZsfxR7koUoDqBAJZiby6n46chiPqHewUoR2gfCwTEYbLRR",
  "key30": "2BE6SxNrWxviMb6jqghy7cF2Z43WXY9HxMaXtPd4FzTSn2VfcU4dnogYHaoXCqiQmtT1AiCQGS6118HpsJfXCBPe",
  "key31": "2RLS2dapM2HqVPvVykxoYxHS81B1tfDsbUJwaeXSoyvWzxwzsCS4oZiTWzxMoxpGCDYrQF5TvsTuGXFX5QFYTRXA",
  "key32": "5WDcNi8FV3rAj7kaipn3Nagk7FjkiBYd3YRffbrGKBgpa2EwxMDjh2GooNcK3996MY5wtie8f1wwSE1HNyMz23FA",
  "key33": "5PfTtbCjUCJo16fu1djj6LHPuAABTjqkSZ7tevFLExRYKbZp7LbbawKSYnFjiMpea1wUx6ePvpRZhXEueSVqHN81",
  "key34": "2Gx9u1kWakysynwoXRa28WA3fsDh1FGmQMsoVrm1eQXCgbgm6ztd7TE6KE2Y8xBL11qxFKk4RgkdLeyP7rwoHMRe",
  "key35": "2jDvF7DLiDZryFcWSXp2zRvhcvvwXqeEq9YMM1PNz5BAgY2aEUZA8UbdHto6sY7xec7tfwpf22N4MVRRBSAe8uP1",
  "key36": "4MWnnm3wrNyrbX1xBpXXT15bbY2H3WeWBWL98Fd64x1FMTsSwKdv472XEzVPmrhjGoyqK42bcUy6FUG1hSSjT1M3",
  "key37": "G5BKRN3ZKr7g5mBkT6jm3pbgPxpieQHXQxESXGthj5wpvAXtWvmeH9Z9TDEn4vebcJQmsyfRVk74WEZtDwjaSxn"
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
