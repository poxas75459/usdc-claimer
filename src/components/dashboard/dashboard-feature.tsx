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
    "6448Yjp4XcHHQQkviEJsdDMjWSRLEYNC3Wdmj4kmuijXmTwthvXf5nwFMH8JYHEniA9CQ8Q3mFeoBvgyppL2mGYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "diBLJfiDhX1F5qsiaijxQXdHMG8b84wLjMkQbJUTjJhHLwPSRph9wHAJ7hEsrw6uQcd5Z9EtZBBP2czoDRZYvwS",
  "key1": "2Em1Ey2wJK4igPRrU5B6KgsUo7CFhPrRkebBdEozKB1xd5EYNmbqhQDmVEwYxbJBe1ugfhQ3NN9UJMNXt6qW11v8",
  "key2": "2ZY16XGRPpcbZ1JjGLDBCvFai3aBXE4c6LzBB9WLKaqUkSNBw29bjgbJZ1tXFLHQiKGTDLC2zF36ScxXSf4gUTX5",
  "key3": "5WkmWpDeQju4DZnLZu78qeh9bi53SV97z9zK2u7NkMmH8w1MfAuA88L3QZFqbbJccH4AMyha6z4w2LuJkp7STquN",
  "key4": "5evZXZr3enH8HxffGAoVCFBupMTaocHE85DvzKgFwETiEpdWBb1jkNDE8MoRurps3ngUEZei5cHnp9JMUAmVWH84",
  "key5": "47SG8fyEzch37atkUnmxiFWeWrnbtkBbPU5aymruudayWS8yfzZjAwNSo3oVesuJB7oEUbV86dCVduL1kwdNa1A3",
  "key6": "4exGobckY7k6RL2n5TixhkS2xekYhEpoyAQoDPJVfjNX6nbKW8RAj3npFJF5zBfJKyqsmvZbSyGNq2TLm41Wn2Xw",
  "key7": "5UrETMdDe1FskQamLCtGm6jF3WD3rDGY8z6wYqgUvUvAE1Je9BBNcMyg78ymPQMxhfAodQV2ZEid2TV5iCi7ZhHq",
  "key8": "3z9k8msfHPPtsrnSksdkNbU4Yb5mcHz1qbCxwZ8rCoKTtGR4B41dow4KuiQENC7wUW9UKSsFUSjyLYjhwmBBXm43",
  "key9": "3sGv66XLcCb5UhKqtyENLpoE32Zt5YnCHGgsKabsn6uLUxGsSgjnPnPMBe7JZvicj8PAMgwpTwvHyoYSehEvRhpJ",
  "key10": "5i1tQ3fEMpQwEk22eszmWFnhwBhhAGBCd895X89C8q7VK5U4KnsPNHx5zto99bxCn7NMMjdGPsfhvFFXLG8SJLUm",
  "key11": "2q3p5TB2RDPZLyj4Umf5wPzYC17AiZkVFmd1ECCuY6NeRNeWc29DWE9mvxUPkCoSQRfGMPQ5mpVzN3VBX4bdo3vU",
  "key12": "48v7urr7Q7feRCKR8w872pAHoGDncakityE5JXnP3VNkpmZ8yg93DwPmcTow598ygm4oYycAkAkYS2N8h85BCM9P",
  "key13": "2vaboa4xA7K7vTEWG1UAPmyv8NVjM7aBKMm2LjunBaKioUFMR9bVF1RGELSSX1iGehSHReEzZ8jb7WGpXbNzFfCj",
  "key14": "51RuTd4STHAuUBuMWtFv1J3cXDdrLEarpDG4bMHbyG6CVwSG4nxfQuS9FzEWP4UvaDxWwZT3iHoy8meNWpqm5uxW",
  "key15": "64635vyFs8SAp7yGv5AVeLhisC3aXoyPjEUQrKft2E88tLZtqHDbPJy8PQddpcx7AdmXh4vo5cF9f17YmTCFJFZw",
  "key16": "5Cf79LpoTxBWCcUfevhoGsVfJTCZX8w9k5981eWAzDPbQC9aCKEopNw6zCoXoLzFiUC2CZm445g5nFeqrr7WPMUD",
  "key17": "5nEPQPzmz4g4hL8AoUF2JyPRqndgc6NcprC2oAsPoZ35SFeKsf8hqgcHRMRoVUweuHjpTUvPCjzQaAVMxrNXoX95",
  "key18": "3ucsRvpxzigSSKSadTRzfupqGiKXNvsqWf9BCwajVBD2umyXQ9KpSKyjNgDrmpSVbwC38RuBCdQ3W4sSHfKU2bMT",
  "key19": "2HAsMGneg3rKdXXoFkxEi99LmVGHtT7N85rQpjRaM8Eu3HNjPsggksdssjRKQ44eMPJvtYw2jKNhZsu43LNFvQN5",
  "key20": "2zoPDvKqNneBt6Nrm3vMwg9CGZJ9dmFFM9UjUzsiGuZfRMEVuSwhAT7uKdt6B7zkJ7gKRKavw2aUPGrFCWoeabJh",
  "key21": "v3pDz1yVjgekuxEQ3PoawZ3JC2M1mNg2pE1VyJVAd5ucvfwaoRkTm3o22nLQZS3EuB52w7putHVHJN9EvXDj8D5",
  "key22": "4CeU8BbcqVWjvZEZXiFn9GWJvcgxvgm84sQ3c8KFp7tJgHLnSt3SMJnTBUmvB6AWo3WcKP5rw6phugZoU9J37NpX",
  "key23": "2HHjBJMmCQfBkRXTVnovRnF7q5HN2nDbf79u5eWyQdgYM5VenmZR2WoFsdsqfCpnGNQjkQPymhqGpbYKLL7vxAsm",
  "key24": "3CiR2PGW9XvTE4VG4GmeK1bpZKCz4V3QKoWoYMQuQ29bCCzF5AFB9bj8yx7zu9r7z1WbFvzFtyBuJ5Karn7m8rhc",
  "key25": "3RLQae1oy4ueXZoy8VcGrzvgowseFm6cRYZP748qxtUxYDPMGZtTvLH1UgoinkxaWpoRckLes8UjZPqaajegvmUY",
  "key26": "3jccA8EJMac4c2Kof815GhLXBZKh1bJHuYHKJ4YjmUFuPhC7JmEqnPpYYDsHFLMLnTfQHPvtKQzNLbWafdS3xQSx",
  "key27": "49HG1SbzvU1RaqcixrxkzScT9SGBNda4CjbwQgf2r9PNAcY3iKA1VEzLxUiBSG2Uw65CxEvcv7HL3mogQHoPyT3e",
  "key28": "v6zbVhxjBVGKfVBzNmLeKn7Y2vDrzn2ZfPcLwRLogQuEHiBMuGNxDyPMUuKnMBzjLPEip9Aeabfihsm8BhoJaVY",
  "key29": "4Zt7PiMov7jqNHaDP5heCqJZTvWQDTdK7nm4Z5ZSxYAHjA1TWeTYgQPPEPt5uJCznTMLvUY8CGJ7YYoXrSbJzXDK",
  "key30": "46ZTfG2BX75uvxEUe3xpNC3R6qyhAdfbKewSmaM12vHbSdiGtZUStU6UT5dBgz4nGXgXkwYruvAS7wa4pmRmDEy9",
  "key31": "5UEXDRN92PpHEb2BxF3zzBJhmSe7EBBYhMtCBVcUi5TtDjCsYMTaD8etcGjzD72NsnVCVivRvPR5Lib5jNuRBQdp",
  "key32": "3aaBHor8Hqgyi9Bo9AAxh6H8ZLuToCo9a635ak96UbktYZq6uz7u2qP43eB5zbwieK8Ey6tbhtvQEvcC5c32P4jZ",
  "key33": "DrxL74ofjqhxJVQVdW7JwEqqQ6DkeQ1xUBa6fVX5pi4oosY7Tv5oTbVuRXoKp97KotPVb9cbihfpGdEK7xFttRA",
  "key34": "3DzHzH9vdjeKDEE1VJonbZZdWKK4XLPY6aJ3vH78e9wFBMaWf2ZV4TwnGM9CcmWCxDfvvxu1aB8MewVry3Nn6dFr",
  "key35": "9YuQY5wXHLm8zstTEZWEA4hUGRc3X8UU1rhaVaxD5W6UXdt2oDEGQTr2e9cTCtL1sWQBYG3xVH4HhCq2M1vW9Dn",
  "key36": "2LGiYtsCSKkbwdextx94vTwpc7BAg1JB1CPpeXWfcUp3JgUphm3jpDRbA6hM6k6zfS6TB9VTXTi9T6m1C8m5usHA",
  "key37": "4ndttdvtc4cDR6Sh8ZJCE2tUAzQg7kZVh9WzYBBFAgMF8BXFNMrm28S9jMqgamCnZ9Ras2gTtTbax3WVRxs8Xk23"
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
