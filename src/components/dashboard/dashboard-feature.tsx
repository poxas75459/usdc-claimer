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
    "46iy3FScQcumu1LZcbTEzsX6zSUcXijHGBCFCQQuxHDvvhBC225mbJBaLBKF9k2RSkugmfzNDbf9HNzZmdY2soSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MRm9upw3a89vfrDY3FsjaQdtLJpVDLa8WhBXhoiR2NeZWRi41ZLMqkMBBeA1BffE4KqbGvB4V6i9ZCfb8rbcDsN",
  "key1": "5ck49B2zE4k5FEfZjySDrQj7TCyz8pXLouPEcHKx2j5bSViQWsjMwFJnvWchjvjnjW5pntiDnqek1BhH2Qyjpikq",
  "key2": "fdTE3GyskJtmSFh6qaHBACPRia7hrSvDQxiqKGJgHxqM5JfaQKmdbZSnX7tVGcMadkf7tqYogAKhTnGNddTBGKS",
  "key3": "4ParkkcH4NpWHZbdeHuMiUjuv51YdBCCCs89tiM9XHtgVGNwBkaJhmaR6H7hS4aD3faaLx6HDkiru94MbwFsoE24",
  "key4": "5Xx9dt811H677X6AgMJBj6oWykmJcNPfuDsgy4teHr5Xb9VW2QdNu7bMdoWBdmJsrSqZv8mztwqhShBZWyAJGn2Y",
  "key5": "4eDQtgo7S3SYUdY9mLZqPkxSSjcs3dk8YKd6BPm9tuPxSutry1US6z58pGvfGniiYXJCTQiMTktscuLC1HwsNiKv",
  "key6": "5kaBddu6vxPLCegBtZUgagQ7ZxVv1KW2btGMMKc5sEtfvzuqu4mxzUvS7G5UVcr9NU6PHBfWGBzLheyawfK7iy99",
  "key7": "59M8xCL8gxj61BgSLuoefraP1ngUFMUtyx2PHrPgRNt9kbKAcxzKsmKSPh8pn1mAvFW4ZrYVXxxG1QMBnh2DgbuB",
  "key8": "2ebQEimyVZBuQHTQKWyYBbLoB99MmQY2aJvFXZBvQyPLhytTbpPgmwwUERRji4EZt87nmQZ8fK99pJAdAdbHD8g3",
  "key9": "5gFKyN93Gm8BYk6LcMpsPH2KeVEG5Kvjtz7adTz6J5XntUaf6u58AC3RKxC7YhmHvJ9eiRpWtHZXxwp8EnZ98hFo",
  "key10": "33Mhvdej8uhwjz7CDoUNf7oVgDUw2g4xmG4xKAfp3GKKyf3b8rrxG6FgxXHtRyGKrgfAm5bF9KEY8MSut3TK4phG",
  "key11": "uRgemfg2rEXamHie3MNTXFxTjP9N6xaF7TXfqXuLrz4FBfYibEHSk9eUe1CYAya34zFtvhwb2zzteHnwF4AtMDj",
  "key12": "41opjMZbXPRv2o76QWTGfpq7seks4toWQ6kHc8NX3Y4kmcJ1kqipZgfUYDzYJZVPbs8DwHadv3Z61PeRVg2kNjPq",
  "key13": "5Uo8PuqQ4cyT7Y17XgWee98V1aTFqZ7ane9yiDtHP2A7Wf5GLzxD7auZnUaveAYf7wCYzbk8heTtabBBJcSJm7PA",
  "key14": "36jKc68XPqeqhHe4sdc5qQjSyWiPAEkZEifscmbJSXhzGDjZ1CVuDEn8h4w3hzXHb2U2vEuwPj8Z96VdWreBrCLe",
  "key15": "25aDvGBvLpBuqj3h4ktVehSmbKDFMMLeWzup3T1gXu6WXCmF7NFGBaGRdNomoiTUYuM1bcS5HRuhwoATxoa9NaLj",
  "key16": "4XxTqUCAcD4BKQQFXsjSZN874Gh4doS2rMgYN37dji7oG2jGu3PBZs6QuaYKMqicdDJVP28E9gUr2pyzc7u594vb",
  "key17": "TzavQEkqEzgtZofUxez2YhsYiX8SjoWjcNngfs4Tuwgc6Ft1xqXJy56mv8oNM4PVELhvXW79xeTtqHNDeCUkrWb",
  "key18": "3nKTXv3xghnfrdbxX5pcUrZAxMYn2vv1QrQRWa7B6Uetqkood7tkFUWDLEpFiimtKDq6YnSfA1ns1GbkXH1tkDin",
  "key19": "4yVkpEQYVGAh4sZyyDarwaGoCVvzdRSB9AHQ9fqPk1yS7p6y1tLFZ7BDcrcYHYNYz9KAhzrqtfntzDFbJV71USfv",
  "key20": "W5Pcx811yxrp92dhG7Vjh22mUDgHYmisuhPesNNLc75Eza1R92RBdfydVtEGBrFVAVDyxbeDNE8uoeKQiqw1yrr",
  "key21": "5vX2h9sTLgY2dg85hypjG84um3KopyXiVbrqKvrHgtRE7UD74bUeBqSgky8C9gJDM9UiFvoQwicNwzZPjhSnLAcS",
  "key22": "21C6NWqQz6vSrqjAFPssBNwJPC57nUv5gtidDwhx9uvadS2uV1LJNjkAtvDXSw6nviS86z4j53ZrLHjwdJ3eHqhD",
  "key23": "4zUj6fNyaSoAkWALRHW9VbYYepAJpfu3QZuUVrQH4XVm93aVHYaaFQZeJPhhYhzWpzzn32HhhrccqDhkjAkA5s7t",
  "key24": "3F3kubzdxJyTgfRrRnUZUo1dTAes4tE7tPGofvT5dG8nESeFj4epX8tD4WabuLQZXingqPUGMR8VRwaH8Nuxpb3D"
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
