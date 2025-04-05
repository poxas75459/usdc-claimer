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
    "4CNpNYpK8xGifHdjNrXERZRUA6MstJenGEhgSuDA8kQ66nrtyaRGbebDzDSNWpxH4WqcS2HTWcG9nKKC3wGhdqMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59o1LFRRSc5nXnHH1s7jBSaaqFS5N6gXr3HhZtRfUcTQjDrYmH4BGzRNbp5U3gXKcUPCu9pxv65LHASQiJb4xAAA",
  "key1": "4aP5xDUW1593cALYRHf9Ae1HMgqAcLN2UURDKHWNZdcYc47SeWdKDGNJSZuE9KTcwkPL6Wfmr26iNEWETF2jWzV8",
  "key2": "RKp14FsSCA914QGqQtzUz555Q1vPL9XXeJw74MphYshq4Ffu6RP7LPctoVSGjp93GDJ7FKbNxDXVT1yBWVHxrYG",
  "key3": "4kLPBGKx6PjZVeUZtynT3cMJrS4ngSR36QMU2wSihLVepMKQ9acRbzKu4yqT6YEkAG974Dr5d1ydQKioWRqPWBy4",
  "key4": "5QbPyvfAE53rpfKfyMC2GE7oxZViiXmsegGMPLwQivFAQRW4TGoS5BzSz58XBYdQNxDnGgKWvMbNx4k2UZ9hUMZJ",
  "key5": "51ZHpJBRUfjKe4NNmwDUMGNThR7VBrtiR1GFmyY888gHHbEs9ng8GAhBFGVnBiuX6DJ3TbhVhBVDnnMzu66758Qb",
  "key6": "5NvAf94KUtRVaYQWy6JHcgrnQau2KDrBeFWrAmaWxF99kfjmbyRYZVZKsRVSwGVaAH9zonvQFjr2APhp14hf7fJb",
  "key7": "3wxySJXjUbBwcMFaq7qGcx61NQ3qnGXgWGwp7TxuonTbzVUdvm1Nr13fksm6877E3qv4h8br6o4xQvRu6ScVxJxN",
  "key8": "53i2QDLDwhrLwGHSRCipFY6hYzEFfibbPTf7QpeWVf2eJocqpgyS31ANLq6y92WkpL1dALRjxNeXoN32EuGPAzPg",
  "key9": "44f1TapYCpYycXmd2yoTXGxXSZf6drRCpTuWLb1M5AeAkvZ1EFU7QMzzDEvt8YC8U6f1QySrpC29da9CGWNfTQPE",
  "key10": "3h7TA7xMqTt8EPQES8Dcjv4vHvpJkfMzZM8Ri1HBz3gqJTcUxGAtHyT9kCz2Qk21WxvCNJukH47ntWCBBwrZsjVD",
  "key11": "3SkmRXWfWMfDVWrVf544Gc33AGhtUYhv2oXyCAKiWiELv6aKSkZecTgehaM8dp7P9QmFd2vFBFK1hGRfTpWEDcX7",
  "key12": "3D3aE87mbqGtfxTWvuXHk4BnQifAzib6u3dD2UudkQzzv5Kk8x6KNonwuQva3gd9zSw6rPJ4AAQtcoeimQkrTuNj",
  "key13": "52ME7oDgL8brbtVMnoMwW9tCGp8EUQpWnkVbsJRiDzQwNqZwqHe9j7bJLPVyHz1Zj6zrbaAUu6kQ8Semg5knqY43",
  "key14": "5muSuZvagkUCUG7v3U2fvpRnzBasUxKTNLxbTdX9VrqpPdMJDrxXvCb3jj7FZHHTS4TQ3BgWEQoMMZjnN7NQMcmk",
  "key15": "3XFpUxeVS4XuAs9cibw2yRuMmJjJciAoyp777Eer1vkLMkKKkcjnbpJ5ZUWPKyDZAafZVEsAhTdcRGjJiyjZSPXT",
  "key16": "3T8dP6eUKfPfgk2NvAofH2sPQSmJMLDwwctN3Kiebf9YGV5LCw8R3gpJfmQvoWcXDAngtj2fdS3JZ4YXw1m57gX7",
  "key17": "67YmTJ6bGAy7PAvfkiq7NAzr4vs9ex1sUaF98W1afMcUMsNr3uyLHJinR1vvaQzGXUek5aGT7Fh9jfeDxjikhDPY",
  "key18": "24CHPvHySaZEDSBd5WircojxMWVTxWnMWR7AHA932vWd5eWVzZdjejoW5LS47oJQses9DaEy54stCpwAeZbUdgsH",
  "key19": "5nQJZ6grLyaJsfmddgPMBSHcVJzcBM5KoLs3qqSUMD1VbUhVAp2KAZpAV7uSYkaBHZUwfJ1Gj1DH8HefkMEpgiSL",
  "key20": "24CRZBDwium58jz3utp76V2eJJC2bXiT2LC4XvvRJDz9kwEiQ2M1x7MbeQgUxRxK3eSXz3v3qHcmWkkysAZ5Ee5W",
  "key21": "3pkrSCwFj76YFkCcZisgExhwXvZ2MDhK116wM2q4FvkLAzt5NAmcEpXvGo3eyrt9dPeNXgxEzmC4CfYZJ9rQP39d",
  "key22": "4f88cheFcmD34mV1J4EHWHABa4Gk9kfnjsTitGKBq4Kpv6ta1VV6ZRG1Lz3SvdFYyuVD3HnWzPakeA4vaQZM4jXG",
  "key23": "5rC8RLtEVk9nRmaoYF4XD1v8z2x4nnFvrZcG6xD7uqcWrcY2sZawDrbvUGqMufLtn3baWJ1LnoBhDoCBDv573CeF",
  "key24": "2eyHwBGWxkTBrgFAeyU5bfyYToYV7obxkRUL6iFBns2jeJJ5QS8h2HqMWBvkqpTLALLCkELGyxYNZPESzSep7gaN",
  "key25": "36GkYTHpLWd67eRDXoDjsGsibHEAtM13FgAHJo4xuHtBvM7NbkMJwtrugPPQZAcsduF1Bmap3vhr823s7v6ayt4Q",
  "key26": "2iBpjq85u73uuC1TTquy62dvYzjCSXiX63GP3ZYcBQVjNuegdtrCdf9A2Gff55oD6XWbhpFiidfEHiPooaYkchqn",
  "key27": "3xj9YaWuo7yFdTkdqWLAmNnRXThMUDA2x7Yzqr5nniDZYS3T7AxxqUMrdAm3Rx2SEDpepfFB7AwQkztQ2T9etLJM",
  "key28": "5XzCJggi7wfFhWC31LJx8B2MbyWZodgXJ1N3HJq6jWm2tfRf1vEyUNnqM3zrfAbmRqecvN53kiHytSPD5NqUyasv",
  "key29": "61ENBhRNpKvwWfVXfrtfqt1n4npQUTs1cGaRm68uCy8QEsiHuBPDm7mucoZPVm92MpgMjw6mHECZX8AVLLqKtscb",
  "key30": "4Am4r43KNApXF7qvBXckGiwz5oi5e7auLMmAJStmmGUKmkWFix4z26BJRPMyXL4HuGEgRNRRJaBtaNvaoDz7Vo5y",
  "key31": "2jibVYgpyyGr2NnBiv25Fe3nkabn9etyj3N4uqQrpiZBV3L3V74NSZBoLF5EqTFLNZMWVRiFJD8gJy1mNDrzaem2",
  "key32": "2PKDMq5MYkANmq1sxdwJmcNExVkToM9i19V3NMCrgxCAqsxmXKQenCZyMjPquNKc3kYkxdgtkXukU9FK7PaYKNKE",
  "key33": "5aUxDc8Lu8UNX9nKHQCGm1ZatPEQhSJ2nCe7uaTWwZQnHMcNx7LAzYKPYBLxCS4n52KyTftmPgqZ5qZgb3TUD1Gy",
  "key34": "3uMosrKWiGyEuHXsGyHnfKmHbBfcPZE2dgwFfVFArFeLUoFzKVpu3z3PV2C6MRCKcxMvBFRp2GE4C7odwkaWJrHo",
  "key35": "i5G4hgouqSGfwnfDby3GeUhhMHNzfKDC5bC7xVunZMnET9ENHUmw7g9jNk8JbrhH1T29NY3hTLtxrkw62nRyGqv",
  "key36": "39h1eoa3vMzpLQuZW2YmQPivUCRXHd6pGtEWLhfYqqsPQzJKhA82XzbyYva1qSgULy7bEV9Xo9ym6Dqrr2Qv2wr4",
  "key37": "qgBf1LfgHL3bSEBhV8k1oDnPfziypvz7bqrT77nz5R52eLEzfDmzfxhaPYPPQZbyhqDcvEJbcLR7tpvRvso69YH",
  "key38": "3yccfHzDqZ4LnfCBhWud88QfD9t7d6NpmsF1o6wZ8KezjVmhUqca43JP1nGwS3Gvay3X4p4uKLDssFaia2EbN8cg",
  "key39": "3bpSa4pJHiHZUJWMCBRJtGALKXDuRAkc7ooozaYQ9EYUUEMHyv3igZHPZgBaqHGXSCGsHHtbYEEvHLL99vZc2ChB",
  "key40": "585jQ6VdFde2ixdbgxvtmmPK3NMcFsY9bNcvz7NK3bXUrEqtRDh3QubNgKQPG82UFkmUDxLrQpHiT1Mbj2oYgKGM",
  "key41": "3W8oS1dxr2reKu2FrCU8GEwsLAeqVLrF7HD99iEMdAgMXRNNFbdoQ2vpvNbAgV6cEta9PwQY9LNFrTEqpcWe6cYi",
  "key42": "5Qcktz8jft7cb6Y3NrvD1jcsERUs1QnA8K6C6RF7XZB5BjnxaPYeUP816QnZ5erfeX2rrgVkPWQcgGZxHyFB3cWi",
  "key43": "CaXtK52GsVdqqDFR7H8bDreexPCpSuxynFrC2HnDz6BHEj2UdytYTYnTHKwkq1Wacu7T5wVkX9Gwz7MaCpqtD9s",
  "key44": "3McjXNwqQctJVGyyJs4WugZupjAi55pFdwvNrFfDF6i8G66Lf5pjtTDEXq2jhyGgqeCqvdxU9LwpC4WtDTFNKvBT",
  "key45": "7tbQ44tBhwuJk35stpymMvQfqeWBd7dt4JzcyynQrmySpvh6mKwZ99ZtfZ2KKP7VzgVEe1u5L92PDnMJNKZG1Qg",
  "key46": "5q6GTtBDcJbdScb5iak3jftSqhKJu4y8xK3h29m54jQxTxiPizyMHC9CCHHvUz1Gzujd7cHrFLJ2Vhx7YGN8xafQ",
  "key47": "2oXatUnzJEXdwgdrrMZd8ga9A4U1WK9o23wbpQ3qaqKfCMGSwpMMTK5vME5R9nBPP6oqrVv4cqwRCNUWyG3LSBrd",
  "key48": "49L8woFzFiitKLyzQSnCHz7EmL8jhxE2LrRS4EitqTTqNWorTyAoxJQYpiqKG1293DSJdTkWSScampvZMY2gAfoW"
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
