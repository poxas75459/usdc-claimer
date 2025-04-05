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
    "3UQF2ZzQonEWzd5G23ensfxunHe2Eaz3bQWhJgXVjAf82hhRKBBdyxQMCKkSYXFw7hdFoUEBtqNjYJHRWjL8YxL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54pTj4FGXsZydNWXeYbmHTek8E2ntPN2fmMKMAGhWLkG3drtDkbKcECRTUuzhgceV6gmee3NQmUDy1euoov5Rrvg",
  "key1": "2v8n9hrmdz8aRcS9MPMqrvVxrUCbR8YmLBs8fcdueCHksg5ZhXy4Z579CRcAyHzErW4wKgbzXQdgwLUBtSeLMjFT",
  "key2": "3NFspYnGaYJHEzK65WMmvPJBAoYGTun3PUCZQonqj8KfuGKUKN6MvXGphoxJj2vwTzTyPXv4SXdcogPBm7rDvsX5",
  "key3": "ssTKKfd5iPncsAVkTfnRa5rMnS5UnxbbLnd1cpF7Smrg65r9NUq1JzCXMhq5aJy4D6CV7CNsRxBscoatbr2VhGA",
  "key4": "41yCTRh7hB9VxrVDkTrFuHXsyrFQeJLphbUd7PcJbZR5ynPbUUEE2t84G7yygvu7zoXSd1Vqi1c4ahyY1yEtQcWB",
  "key5": "64yL6RBGDcUeJfWYVVpBb1xGLqWJX1P366ULgpA4cbSDXP1SwVZcZSAhPQ59WEMgLxZFrPUNtitD8H9NRoXM2Pq7",
  "key6": "5mqorjGe7i9A2iEFJohmjDLKQCT2hy8W3ZzcjmhiAxT5agwLMeyebVnzyBUkZBDB5vE8N8ak5YoNucFEakrPQYpX",
  "key7": "4kn4N5ERGNamonbZSFAgBbqC3oMw1VddydESWfQ6uniBwX6WQ1EzgpsyzDh3cMR34aB62Zzrax21VEjFmch7na92",
  "key8": "Yze5FB5FWBiF5wazQRYVtCm5BC3yypNBekpbN5CV4oJmY2otDwaAPQrgH5p5TxAvJDv17Wv9mpa612roVJGpgRj",
  "key9": "4ruQRhAH55cWMrmwFfmEpTXusFtadBm5Tcmmwar6Lyxu7cEhoAvXHGpjNuarFhnqBv1SSu51R2iY7P31qzxFywus",
  "key10": "4LrTJRNXCHXt2zhsv2vrwT9Jjj95QMkf7s1zZwqbgmuBBmFGGLRXaPX4yvrFux2eEagmCKGsFJGM8KXND6cRbDM3",
  "key11": "5uACPe7MYY9nX35vdZVZTGGPV4Ana8z4Jy6oVzYqSmB8ytSK1ezqCbZbw5T5QTHCL8vGqGxuRF4f5RzGMv6pW6Lf",
  "key12": "4VgZSrcCMZnMudUiFHctyRoSxs9F4X8DRkUbqSyasCeQ6iMSPxwi7tbCftbSGJxrQG6Kk4FEGWPnpsngixd5AnRn",
  "key13": "nfHhMAroA7Ac8TgkiN6WUauBA2o5V344YaKw46TbSZbNDpDZgHqXpkVXfQMyCQcZik8AcxsoF2uDdfuMP3DBxKc",
  "key14": "5W26wHkAu5LZmgjKkjxmQZgmdgX4oDghAEV8MeVKA5yERjjrdaoNk5xMPjycZ7jeJzVxsLiPfoca23VhoFxQ7zx",
  "key15": "66cRh1t6Ezjr75psAmJse7YDdkQUHwU17d4RAseX32DknzSUASNEPkpgCK6BnhTyk1mvi4i1mE3sggKF9LvjzqX",
  "key16": "4LByHP3BFhssEgHy2FStz2stqCrmGJ4Ry71We7kQU7yEYvuHGFmLb5WrNF6xxvRg16qndjYedckzrWEsTWDAS8d1",
  "key17": "2Ww6s9ncXe3se5bT5KEH12A5dCt7KCssonJTpDoifxScUtGDviBcZ1D6KjEguDyFMMoT66P9gj9n2YKMPsennAGd",
  "key18": "294eesLPh4sPw8BVxgertLAoQrft7xbyyZ6eUaHAr3TE7Lp5dGk9gHBHfGPeZ7FepUqcwTXzAZmA849WcCahuV8S",
  "key19": "5NMdymDrULHM3Kt16mMh8kHhhVJ6hZQDMB3wkqyi6vcRNyYUpFqF9G3Zdtan43Zmz3A34hmm2iacpdG7m6xFXVd",
  "key20": "5rFp4Lnm1fSMw5f71wJgSNAs3CbGcobNBvVLTTmeqctQJb21NHQJS5fzuEzkuhn1AUqgmWpdTd9HrBzDP8Gu9ydp",
  "key21": "2AmGLkFHr5WxHGRj67TwEpS1KNJLcEiY6saWZYY8Tz966jDXUXQRzB8xtT1D5uyEfNfi9CkfcnaByqGAbxCXXh1N",
  "key22": "4HKmRaWaY9DkDCWB1LDg8fG2QxhiHRKAgi7UQmsyqBKcsgaMtNmp99SZnGnzCNpu1f3A5A8yiWMoC5QcjjYfJAGt",
  "key23": "3kzTptAuPj6Jr28TwjazT7Kto1q328i3sbTBnEXXL15CWig4cJ6ord6GWG1Yiv6N8GdDv29g3giuAYREkG6upELH",
  "key24": "37Pz8Pce3cKd7uXwSiAvPBCRp5j73xhrMJH9p1AU2aZxFBy5LEDN7euTMpzRXdTP8FobEtR983yC3u6hM2tP48tw"
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
