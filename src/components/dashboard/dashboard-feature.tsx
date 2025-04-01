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
    "ABxhZBbYyHoiVvGvzYBg6V9G8TbJPguB5cu79hrS8faca313KMggYd9mXhmuoXUG5GDvYgvYbo3vaCfMNjpfQBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ed4jCDoDRy3S2Lp6pXWmG5j7zKWve5NTNkqVVfr2P1rajp6FhgYHvwFbxB9jRgkea8jr5LqcyHEPXG4nN9z7yT",
  "key1": "g6MNemKWVih8RRXCPi9QH41CvzeYqgLW6AwdmPZgGSkVK7cKxTuCQRaQgeBvYG6N8yu9HrA3Mb9grgBCUspAYwZ",
  "key2": "4urNiVJweWf8WK1QE1LZMNqh69pwC3hNM4d3BiuL2e128hUG5y24X2XhcKxFHnxME5SsTRQvMYX2qT1Uht76YiLq",
  "key3": "5Tg5gpKtpujDpo8XLkaZoFoDEpAZ5ow58oYBKXS4y7ERDwsVb4tG6yDMRquZDPvPJHaenzZBsgNxa1CUySPmjUKH",
  "key4": "5yYFwVE1d83sB2V8EgmacJipsE6nECH3M92TCjgcrCRqhA7hbrNXUwzDGYwtRwXwPciwXDf55Y5dZBXM4Kmitbph",
  "key5": "5N8Rd3PF86oeCAngD775Y2NZbvYJkXcUvS442maafZAEAYqWVhqTAeDEvNm2zzNgHjwTLivLBVnVLVP7rWCzq5tX",
  "key6": "4ceAf7atuHGDTqqmDqzpSGqCopNQ9EF9YPV1F8gghtLL7z4u1Vp1eZybiiTws7UxEJUsrRjGPB6TPb4TntDRwgC1",
  "key7": "5m57ZQ45WXw3b8kTSaSGVREBm5t533wQfwKAW8xFdAyjeXzkxRJkvjXuCpYBXRJzjH1SdSRnPcG18rJBP6FLQ9Cg",
  "key8": "3QhE6qbLRRHwXF54A73jKXmUpnLNnbDYthBbr1PM43CpR8UJhaZuJrP4zVbpdeukEuq1PNMTVaXJNVRTboKrc4rV",
  "key9": "3KtDDGyxWLNBR84vmCVKAW1vd8hDxLhyrCcaF8xDSyCuhBiXcQ3RA5zyaPjQNLbNBJmNCRFc2WauZ3RWurhidcux",
  "key10": "4xASYmZtrFL4e7pGVk72yCCRhhv76WoWM9GS7NxYBVdafZg2WLxDp96T1aRtM49BNRZFgnDC6zy51mbq5aVrjLk6",
  "key11": "5KLRChhT4vmRjHzNt6rbMUTEoSt7kRseMVCZwq9tWq7Vr76ti8ektjVpsryTK5jizPQt9uSYWkbQGzwV1g2E5q6J",
  "key12": "2qswmu9hWEAsbFzPPjVPJQFqMx3Fs2CqrQ7wdWxf5tcaLBsHDBy6gwEqtLmgHFUtA9jnZimdpDftSTtfJNa5LFMm",
  "key13": "4duzyMYEp2B5sav7eakcJF5eezQFwtiMerVBPjRW9sJEk9Xhtxc9G89GebZbYJ9orkHTi7rGFnu4CYMWdBePFAuK",
  "key14": "4RDygvmWiJwCcsBcFMGpuhv8AYcAC16pL7NdYoFG7bjH74rneq3yz2eyeg1bzMZzB2ngwvvrTn7tFwi4a9q49fa6",
  "key15": "2rVSNA34XZtRF9EjdndwS16mT2fK9pma59QAdQ5Dvix5j4YZhnZ76PWZcarNdidwGsdB8Fh3KbXyeVgBHrA7RmDJ",
  "key16": "3qwqqgjtkVVZ8QBZt5FStWkZmdvaAEfvUru7SiYhJ1qfyuaHcUg5bhD5oGZWuC3Lx2rT5XJU1saXhaXbY5QEiqLc",
  "key17": "4wBvu7GE5G74jnmi2ANv8iRX5A212H4weULxe2hjMtfzi5MXDRcpmnVUJhkcTkLTUuzzLtGFLUcPkwYQxc55aP4Z",
  "key18": "DVnQrPDitQko3wDY6qD5JZ82ksiBehJZ8fTFctzWePUJDWc43RWKFKzvuNjCqzYm3t1fZmMiDXJBC2caGxJmsD6",
  "key19": "4M29y7iscCrxoBwWGHbfhzQYnUPph6Vq4ew8gnGgYWwa33MQhZ3cKwf2PKo8RGjMWXtuWgVm4MDsK3gjTvTSiFkZ",
  "key20": "4KzMMHdqy15qEsiXbn122Kc6CsVdy9tUMPuAD4u2wBHZtFanQZY53eMGKZupT7jCuyyFMTnYaaQzPG5xXqRiax67",
  "key21": "2tYvNRvAAjqnBqBWwakBiekTxNqGYpxkgDuyB2bXdNSVWptnaWJX1oRiheSux9TEEoUsQ5DRKhHUd896pGn6JKUD",
  "key22": "pKoV8zadDpjugoeGd1CQ2wN3uNHkk5Z94MR8e4eXBFcndWtfkDjcK5RvYkUML5YmSJUjvP54kppLcvq5oTdG86r",
  "key23": "4LFEuLUyTXix9j1DfbfGxApZpdcwaGZjAHG72gHzMr5a7cNP68WZjxCdtyFvc4Uvf7D8b6fDBY34t1Y2fHjWhxUn",
  "key24": "3beyQtzGEEV6HuFP5H2czB6ubu9naNhwLYR5UghQf7dQhdpkPoQkcFT2ATKe2SWfPUE56kKEhVjoD7kdvz5EjmKf",
  "key25": "5Tu44PsvAAvKFdGPfcDCfYEJmBDTGtKMVDpRitorvwX34XaEDXSUUUtgKnXqDBUcHU6je4w7xKdNgbCgXYA7Adnd",
  "key26": "5vbBpNUzqKivFFnnfoimbAVMaPougYVdfVggrDg1aCNNmhk2tuvTFE8gpWw5SXbWmF3b2pRp6YN2ZUypJA4GWRZE",
  "key27": "36RjhL8qyriynrB7bJDey7CX5Z4foo1Ltz4MS28Fuu3avaKuhZQozAx9WbN1KrJ11mVF8ErNH3drfBN9AsdA5VnB",
  "key28": "yQS1ECEgmWo5DP6EJQEg98CfzPTLqqMexry36fa84LozqjG3ma8BWxRkzbRq648fAh8TU9R3QmNPwViztQXPLYA",
  "key29": "2ewDRFJztXKhR7b2ZsgXMFmWRc7YezhncjwUJUkthzZ87CSRi9yn8ywb7kr3VR8zgSprbdHTeWrVBFfkhtAhHqCp"
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
