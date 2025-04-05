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
    "4grU3jPgc7yKRuiEJcJiBsMB3r4ZTdZJDvC7CGvLfeQf6rDrwtHhJKEJf4zus6kgVjTE5En7bEiU81yENET9KGbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dMRWcrefBSuysHwHrrKxHUFV5XyUAEa3fGcPqRLmCw9ow4tnNqrdyAjeVDgNMdcHCzG6Pc8Kjz5GsHTaEXxxuLm",
  "key1": "W8sVota6X2wu7cHaUcXre72FKf1sVefSLqFRW3brRt1c7adBvWaYmaGEGBQ7ESpCuNwNE1YUraBW71odKNBTS4U",
  "key2": "2sV7JTpGzByJP3iCHHG293kmadBbLMWXaEGmULnopzcQAWKN1PevTKKreUWBEXNvuSca4vALyMUicQLGrELDPokC",
  "key3": "29hMPx3hsBR7Bdw7b258WbdrDe7CaZqoBKvLZ37hYd3yWzofifum1kMv6rRJwMLFdLQRaWH6FFMrPD5kySv3EnWy",
  "key4": "qDFymWgTUh7MFeAiFew5qP5v63SPs25FFNaBuYdZboVwKxHEuu1mAZzbBPoPSGahquBtQhPzTLfrfJsgLCuBs7u",
  "key5": "3X93NvAzRgJxnbR3FstuN62cCUrjR1e4uviLcGuqKWV98dDa8gDufnJqcwuNiT1jaiUVQZZq8uApnkUghsHshYiP",
  "key6": "2UVmsW7TV7MJAnTyqMVKMvmZUbfG3LGPbdmBE2NCbHwn6J65YwqBo39E4Wi1svan16Egjuz19HxRdfyyagmkmUsk",
  "key7": "CiEW86cBkcBNi2NBDb3KgoTLJDASkuuGQKUo4qWaT55tNYUk4wRVjvLsMMhZoqSmbq13d9iXWfSK25U4SnL4Ecc",
  "key8": "5ejC5xTW7w2gfP17uXzLxMPVcPjAHKNQBKGsbYoc3BLdooTmaGZjvArcUiByurYRsxHAq3zW84juB9qG9ZMuw8ZX",
  "key9": "43xbgUJXK6SRMYNU4vjm41XkJ7ajaRyGhV1hPPV6y3CqnkUszejyYyu7ZXnWACGWsLPoYburiDq3bZbjUxzQK24J",
  "key10": "9k3G3AXDwxVyVbMLGV8RXtTbTKsCc5mXGNMKWjD9cCm4PuoURULHmAZ7STvoiawNv4qybQCF3MQbYF4DrQyqPHp",
  "key11": "31YYBJCybZsBFjkDS3FXWAceu5cCwcoyDAXQRm2o3s3N1xKZsjDtjvzT3V9FyxJPqVHwdpujiNMwuG1oyhc8sD7S",
  "key12": "5R1dv9xwttAngS1BFXnkuptveDenanr73e1EGtC15SxBdBrovieahkMx54tbB1twbrVLoBHgwoChY2UkJJhcnYSh",
  "key13": "55qx7hYfQ4BzRYTPsCf6WyHRtodYvuMsnpA9Cwc4NkxenFfoN8VsAdsq4rsjBEZL8Qe2k4t4RYkPYCUqBgGEwtzj",
  "key14": "5CEBevDGP9yUfaBZcZgqDZvoCzeFYfWNkSvvq7vb5X7CpBxVA1or6qEFpFS8kRZZDbuyaV64LNzBhQ3eXSMn7jC7",
  "key15": "3JZBFmYX3FK19Kni8rFUFwgY7csV7ibyspu1j6N3eUqhX6LT5dW18PTd6XtxVC7f2fHFFon4LR7aC37CyWSahxRL",
  "key16": "2ENHmurTsPZ8kbfTeUgAPeKfn55CtnFVz1ebTzPcLYKxnSVXQTHT1RjCRRnYUVqaf48W8MPttGfNT6E9S2sJoZCP",
  "key17": "ChXpmsHiQkiswKhkrgs3g3kBHCjXHQ1XVJUH1P8eN6GduwPE25RMYt8xYNR31wrPkCBCvHfWxuQx4j7AomavP4D",
  "key18": "4yGadDPh6eMVJqjRFf5D7BEsgkPkgcVZoEpdnPMhkqdxW2kLrYx1ZHegtzemrak7YoCjHMdKynsPWoEtWHQCveAu",
  "key19": "34Ayn13QZjWjfBkCkKZpL4kenaVzEtQn4dqM8yEJgAAKT7m4oxhkumzc8bywFaG9H1tFNn27XfRcUmZjk549QjMY",
  "key20": "5A8EQfAewXq52XDQwoPk6jmZfToHEq9FBzsSPQG3bTx2PTrnaWYT9iFw2bmDtJSfaAWjjgLhjeaRXXoFqi8kNH4A",
  "key21": "2ZpXsnbabq2oqzQtLas5utMLwjRjTym2FPUNbv9tNeDutLMyMBpoKtrujw4ndb1zNDqN1Tb8ReZzY9XWG3xJk5P3",
  "key22": "tHCMSqFnH2zyBMvBELpF6tzaFU5QfZHJwQSxJjm6vziEKBRhyn3JzhuQVr16QRt9Nr6yiW9zdLK5ccvJCLS6DZJ",
  "key23": "3BtJU2uUH3RyGd38ZCgsBU6Vd6KSAD1J8q7zVVxFc7vCNR6pvH1tngKdSn9Fz98jZ37QvcBVNa6aMWk8x5NhUXiP",
  "key24": "4q4NTL4pCyVLDG9AGM3L4RGNEBuTmqdkYBVHKNTcjFRH4DeBgHp7auJHsd8Yj5dSw6aCZZS3bMamo2FVkFddwMTv",
  "key25": "4X4CyNSQhLjztJibVhPKySyjx8ZYrPX6fAMW8p4dUj4nnLKLi4goNtMQmWiQ1gExZfEG4Gh79VmmY9aM1aTVfYzQ",
  "key26": "47Z5cqUce6tuwtRHptq2i9PwDUqfWhbo3s1kFQXEMUwybtmAmQK5BprFcGGAQ8tiSTxJcBWZ2Ujh3EsQdmirzZaJ",
  "key27": "2KjFoQcuaNJdDagNS4Q4NKPtW46r5uzeHuoTTqyqQjQ7rK7sxfwKwewKfn6EGXNUvNkdaNJPdHp7XeZhGwMG22Uk"
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
