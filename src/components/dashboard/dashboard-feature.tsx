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
    "4aWYmjhfWrVx7d4yPszGQgiD8kYBdFHogJcNfzRP2odfB55xdVA5StGQzUPsREVFbXFW1NT6gysEeTT7osVm9EHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rXduowv3X7q4U9sjvbDD3VjaobmY3V2vsbSwjxTRvGbGdfV7MzKLJU1ywN7kEUVsbcy3bSjUMoGnH5JSVhWZv7v",
  "key1": "4A7TLATdDWp4S1rK3xYf1QbjjDEA7sCETSGWDZ4wsqrMQfubM3uxHEKELdapDbGwQTeNvUUHxgWcvMMYsLwUsJeG",
  "key2": "3VL2xAqRgscHkEwf2Qr1j7Xx4T6EjpRpoQxpjsJERSM6x7ddEfZmqR6cKYfNWzu2vpF1xLbY85fGJMCFnegeBBKz",
  "key3": "2AEmbjDZCyJnw1kRrmBPWdWtVVPsD7ZkU3atAHoG7EtpmTntVWJvunYrYGzkxvYopcFxzEwaa4gxjfRH7X3vyktf",
  "key4": "4k341L4KMwufyxjJBNY9sDMByF2TW5pvvQ17QrzkEoXmbMD5h5iFgPUe79TaSgCsftRVsMumCYUtRB8fgm6wUys5",
  "key5": "2LsJ1GUMU5ovYSXapdGjAUoB65BhYc1PBz9iFBsZzM9JNeeRAr1vyjQzqHHW11N94sVcAuLKrYFzJxnyBYyLB8RE",
  "key6": "NRdhm1b3WuKw31rsdrqGKPeY33MEXWRJcqv6G5Yo463KDB5S4JoVLTQpiXbc2u6HK1tXRnRqQwZJg7oXtw74eq7",
  "key7": "66WjkmeKPsYnZuemekN5g9Vv11Ff5GHDSqMWgxHzPtkjN6V9z5DMiR8qZA83bLmDdec7jm1yxKpiUk9Rj7hopSuB",
  "key8": "DGA6rsCCdhTYR5de2T58E5PUdZBcrTAi3WD3D9HMC2hATiDFJNg1CiL9rBqtKUWnS7yaY1c9G9gmP71GisreEux",
  "key9": "5yLZEphBNngy6dYi19Xctp3VgCCJHR2UYebkRu17MNzcDuoUtLPnjvjMq5N4xLsHwE5rMkxuD5AThgSC8JCf1QhK",
  "key10": "5HxiyShLMHNFGKLmZFbH1x47cWWWJus3oS1x8tWHXtKW49oSyNQkZN7mZboqF2PhQ8rrT7NxCBNk5iWrLDeVXQn5",
  "key11": "4quor4iGJfgez3h6dTMZgeYAafwN121xAD9xjhgY6rfKpJ5Xgg8mtBSn7kkE9kcqRsCoBABiyzCs9bAAnCzZ3dxt",
  "key12": "3kbqNEXfLoyB4cUadVwJeiy22T8jvRMfh25AvtS5SoAPp32Lm5zV5zhizqTNEwbujCyj1ZH9YuPMA1Lea1soUqLS",
  "key13": "XiUPWSHMWoLB4MoDXUzySUHYHo8kc2Thqufrd7EFotomTUMdmCfvcb1irB9shWcRvhXjoGgsZ4s6VWg1SsCiPY7",
  "key14": "2G7isbqC6rABWBt4N3Ei6bNzHjBoRkE5V5MVeTFvxUB7UEf7PnpKgM2EnAbkr1hguN7H6GdmR5dqhsPH9MuQbwJy",
  "key15": "347Hiv1RmfwG6PRwtkNQ7qfKkwLtpxbKCGy2Mxqb79FqtBekLpmfyyVBYXt3wEdLKEenFSZnyZZSssxvNENgPXBQ",
  "key16": "rtVcXf3F7jmbB4ejBW5RaTzHVfkJQVZf1Mv5k7NqcWTAEpmaK8PMbdgyrokLqMyauyC5LbBHscL9fZdpM5vjjVH",
  "key17": "aRqSfajE8Psus2kz5SSm954ZKeLr7yk96MXENj5HuMZSujxHPySZHZw9e4Nyb77jqTBPYjpmPUC9dXzcP7Ci4X7",
  "key18": "4yRcyeovHKGLzhNEvgbvTiXZ25ghWn3tTKpbFnQfVsJ5SxhT9QbFAo6YWTRz3gX2h2mDZqwVbZuiJbRSo9TFe718",
  "key19": "2repyUrYgj5F8SDjYS8JKf77tFm5uFEjmhbocWwufuQcXghbmhontx7zFUZFsyKVR9VqpP8QjuFy2wrMXmB2vqZb",
  "key20": "4y1Cquoh9yKMy2k2crpm9UCe13p3WQkFv5jrbi37Xao1QcD86JXLTPMWWzbQK1T9mC7KwJmTgPzeBSWFVHpFACXk",
  "key21": "2boD7ZUQit5fEMZQBh3mgbX9z1SF4GAB5stJwHujBb1JGmtGgNBUQqVK6vLipE82u5roDKrxm62A4M4gCh8akenB",
  "key22": "66H6jHWYjs2vAq3YwJTxhfhMsmPuGbPgcQubavbckmxChi1vpHqJYD12eLdypUaedX2ghVWaeqjaUwSDqEq3Gvfj",
  "key23": "fFzUA19om774Wviv2A383ycYb5GfWg2Bh6VowqwwQ1nVhmhEk54dabnP6fJ35bsqE1ukXUkbTtURsXsQa82LwAy",
  "key24": "31SVDxRHmu5sMP8i99QgUUq26d2Ddksdbbw4bFfMqqHavTGufFGaQc2ZL7VgvdiBvqi9TW5gBQ4cbyBAvN3KhMs8",
  "key25": "3W1mpthzo5SkTzgiq7DAMJQfrqw2FXKyGvg7MGDD2s9WyGMTt3MYLyXMirhPiVW8tVWBHvyX1Pqxzx4D6i3Cxory",
  "key26": "5v3VcUKFWzt4zspa4bkHiVStAb32V5MYEgRmni7KtXGq1dCjd5YStxjQWM4gWS6HVCaWRXpFT8xa5phamAkJt4y3",
  "key27": "jqTSZPcZotWAYBYART7bcFMS6b3KXy4VzKQaQNkVs2T4DAg8TtYRTR5yrp4vKTKaNqt77KKp5QF7xnQJtMzpSW6",
  "key28": "2KAg7ftzSKxxqu5Piity94TCVXzYeaYZefUGKzhBW1pqFRfDY1rGsFZPbB8cBfbxasRVvSY8EinhdZTbsuhnCXNj",
  "key29": "4cpXgH7EZcercXXiESD7VgGNu6DMw4uj4LKLLpu2Q9QLnZC5WhwLuL2HASwwQdh9bJ3RrXmVwbHm8rSFcbvtkzCJ",
  "key30": "2TCVCJ4F6JVucPiSMDxZ9oP98pSjwDGtKy6kQi2BsXzS2Np6pxsDiNVbUM4YHsnXVG3HXEWoWdncYyjdVwZ7Pe9q",
  "key31": "537Bdi6p2mEyLtEeVWBbdSEtmwoYvTX6eYurDTHcFYq9D1pDJodL7nRt8YuGojSii6bDMDRhkZCbZAMQaF1GuiPZ",
  "key32": "4NYBo5gyeBDyi63nohu6Rx9knaKaYN1LMTuUUsikEnJVzRJeA72N6nDzFLKAMm9Kd3p2siNa1d7zPpNycmNAiLum"
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
