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
    "67GAFzSpJJDZvW6yQDrrN61GfXSzprzQJpStPMvNQrqKkBi1TUZ5YhUYZZW4pgEybitEwTJ4dsqzgMptAdcV9ydB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rs1daEYcBiSXcu1NBoqGtQeerYZhDa5Mgu2R2PQm2FbjiPGGNv5EAhxBGmhwzE3kMkLr6DF9Kwzee3GdR6iWjXR",
  "key1": "4Zvww17z7D5JuCePV86gdHGEHuQU9h5E7AyWgWuXQ1CnxqiixNRXQrcWM9qNkx2MdbUG75GqDqoFDh92ifKAJE6e",
  "key2": "4EgFr6i5h61E5pTKjsYAMgZwkxAx5j8XDrTN6Lkyc9bgtNG3uKwxDKda3rRdpG3tG55ipd4HKCX8Yn4qvyuN7Kv",
  "key3": "535LiKc7Zef2BMK27y8JaNA16r9HvpGb1Y73waeagQA6ru9bde3TWi82uDBgTFVDhXd8g22AAaeyNft2vcMQHXSi",
  "key4": "3mFoFsY6YAk5rxf6mGchuUezV9ZLeUyVmDZx43CYAiyzUq9esFgGZUGKfZdn3zgC5Sww3YD7M1WXDbcw7ZKNGcdr",
  "key5": "427PXpJvB8gGPrJwPaHRMuxYrgF7FwEzPFMKTqpujxBmusPsqV2NWt4V4vUDhtF8ccLuGPhEL6ogpUN5KrgPxCqz",
  "key6": "4frFkxFqXkrTghGdg1fV9qioDxVwweA4gLhTzZgfw9vCvfqsoxhHqD8HNH5fngZ4sis54qWXMAaepePy8VMrrwyW",
  "key7": "2PEC3SZ9c8NRoAyjo2mt5MDSrtFB5FQagy786uWMsrsC77YG77By45jpe3mn64whiNm5j9J3W9eiBQQkuWb8j6kk",
  "key8": "9YUkGf83XCFV75FJwoJUVyyxVsZ3Va9QdtSXv13xZuc5konynx4sxGmCSznfu4pCKMezgR5d33gMQk9yy88xvGW",
  "key9": "5KTfSssMNt6tuZg1B3652EQT9fCAWbQqxUStqCzoqDKn7NtG8vdPhqiyxABZaKvJyHzPcukQTSTUbTVHPJpmhsKq",
  "key10": "3LdqFZoTivtMYUcvfoa65Q6v2roEcyoP2PMfcQMZtJcd9U27zQZGQXNhBVftkxmjRD22zX93TMYxR7ADoRyDHGGH",
  "key11": "5Jog272A2xZrtcjnv19pCMhcw4B8oxQUNzVDKW4ZoUdWJnH7tMMwaUwhXRggrx1B4gj787xN7JKTuF6orsdY6hkB",
  "key12": "4duzyE9ZM4tDCTKR3e8csEFqhpAwGU4sSsyyHifB4yTHZwW4SedFwVxoYVtrJBN3LHvP9w4hdBpN6r2rKPBuxffV",
  "key13": "3DtDhQe1AwZndsADq9NmCa16RcL63BdSQpbfavWgakqvLg5jS2i9YGrZFjxoKqAooS2Wu4X3P2b4WPEUL45KE5nD",
  "key14": "2pnHMNKTtfDLmJSonpQXoPFtXhRvAYdFfgbVhSyk5KeBAaeKYLuBtBmhYi7wbUJqXwqGD7bFpmyXWdcFKBHkMG2o",
  "key15": "2ginFVeGJWsHAThZ4QZ4FVwtqpXZZc4jxFQ3DXndzzy6nDDzNiW6Gze3Exp12j4ZfaPdZ2xUChLZRHi3DD8qb7FE",
  "key16": "2Z1hgTv4JcubYjo2rhopkJFRStmm71gkDtayJCCesebECLvwwwPe2zuCKd18fbm8SkS2ddZzsuf2km3sYRWc27BE",
  "key17": "3D2XUNudQ5XPAA5htopsgXtf3NF19SHK6KudLvsrQ9cuVxX1fuamSUMAQvavm9wsHkJJV7YWLcpz9hLn5muGvmtm",
  "key18": "5r93HoHGZtftKa1FpiXZBCa5cgDyy1nN5VR6H5pEThfbVoZg45U5RYfupRJASn16zCjn6uwtJBmcwn5hF9m5a3cs",
  "key19": "5XCQHWJm8Yw5gDxjkhHsVAoLemNBKspqi2gajr4gSKkazYxyggYrkmN26gKBdPmY1XJ4TRhaqetVhVb6ANEpEVqQ",
  "key20": "35kP6WDHF89ZXJcA9HPvNQXLJCzit8neSV9mVgALk3isCnsWcjm3U4EXYNUrstkv8Nu1re3Fmq7zUMVwKsisY6c4",
  "key21": "oApXJjUZh7fy4yfZce8BEPDuYKwHD5Kpd4EqvrYuWsMsePXXer6hp9Kin4WzjAj8sDtXn1ZaGGT9WQMBZKczPy6",
  "key22": "47x54R39j79PK79LPofYdJSimJkeV2DVovUb6fEbysZa2own5YBC3b8ZWenpGcFZNPDyTuE7v1mxm34gL9rxdc8e",
  "key23": "4arFF2MYGvUgvntjKabx2x1s3qetVt5FdMnfKga8fXkP8cWcq7DcKGkKSFZouH8ns3EqwjGjqtn1sAaCoiupHttT",
  "key24": "5gvE6pSVD9yfSFmexaX7EeZb1vzgyevChLBCoR32DMmZRb6426anQEuqKfapbsjAzxYZbJu6h26RdG5afhUTo3nc",
  "key25": "57c9vaJCDZHX1jxZwceNhscXPkprHuhY3K1FKgQ4QfvWoeQaRrs1N3tdRaSpUgn4k1kZsuXHaV95KmeGpRC9yAFE",
  "key26": "5Qzn1Dthgk2KByxvkpNNxGcsi3pap5hbMfrqBVye6Jqzrz8kzuCLVP8mCDAgnsSmo6hi49oebPC4BqZmmL3FrpaX",
  "key27": "4BkLUj8Ns97GFV6tTAdBekguXvfvvjRM63UuYiXNBfVtkkTHvspsdhtvCg68iM7jYXerzyVccdCDZefAf7n59dzv",
  "key28": "23RRfrWqhDN1kr9oDcUMPAAYtv24jqNh54i3DP5EAjeKagkdVHnwoE5MafhtGH8iezkZf59p4W2xv9vMH44AG2gg",
  "key29": "5kSqnU6kAzutY5ide1QFWr6si8Mz3q7DnSBjWdqBoYmXn83FQQDHD6bLoegkvFvS2s1UYHnkUxBfwFSqDu1AQzZ2",
  "key30": "2WgeeEhWTVKu84hxxE62feCYg7DWKavQe8x5ocrCkRDBNdUw5ztTwzvJGGNgL8SQjR976GtSCnVXrNvoP5JA8ijh",
  "key31": "4EimZ86cdLyZDdKG4Xw68LHA1MoFMuJTNABcog3JrSemJ4PS9h4ds5iocjPE7MwaCgjqwmjnP5vUrmm1Yp1Tz3u3",
  "key32": "4CqXpp2wVbsQGxoNMA2Gn5TtkaHRmUEEm5RYVfynmU2RD1GWexCgw2y7Auu3RYFBakiViEkdreDor4NzyMg19VyK",
  "key33": "h1JCsuPJKCEdNFnUd64Gpf6K12LF4HqAsoskxGLr9MxG53Nqvagp4TcvzLNsmdxctYeWy6DJxhdUSWF6EJC2G5m",
  "key34": "3TXyBqyiN9SBeSbHc2XFMH8Urrnm7yuSPUA3uiwSvBvJa81eNByvEbC2siLkfX27fghEqqBsLET3DpdnXBR4JL2C",
  "key35": "ZEKW44PjN3j4TP85KNPSdZArdHvLWd17cmL42qJz8UQsgDPymdfQvTdjYn16VnkxGvjAUYtTiuyk6EQX9j47Wsc",
  "key36": "2hvx3YS7qcVEtAC6qZcsRgcu2UUsJcrHwQG5feDUGpsoasNUqeXpzEcfdw8Qg3gcUMei6eUCGNeBAp9d1YvvyNqz",
  "key37": "4YJSGEMaVLig23tS3gETaNwHCAfpy6TVBqfLDKmbxQ7V84Tj16e27V4a5iLRrpXPrtMZVq9gpoAWGFftgRHTynmJ",
  "key38": "44N8bLu5vnwu6TC7npMrUnaEjqK71phEAfqopgvAUjzR8Q4X8e4CazCFNAeiA6wi9T2pTbi8iQWQaDZgmNb8w1pm",
  "key39": "5uUpAvKTwpYgRwxJVcbaBuCcpi2dGBopcdTgQvwd2pN1Z7q3ywmnkEDqA89x61v6B4oqHNAgf7e3x2wp8nmdUYpJ",
  "key40": "28QSpkAhN9Lfs1vKCydx7EMz9L27oMFR7UiyqTnziAyRCavTnH23Cr1fTsaTomWzsM8FGB3k9Y9ajFJHf41oGAgk",
  "key41": "DcFKKWB6JU4tAe89XXnYtpFEd6P3PHUW5yNt2X6QEU9opmtynaWfQY9nzpnGSAGPZTvhbtQE1AXPL6MLnsCF1gv",
  "key42": "4irWK72SpoaSSMAuBkbXU4vUBvrraTZswpdhCwvkqq5CnohSwK8Z9RSVJRMWMRFkoj7AouRYr5LKYLs5RAXBxHFS",
  "key43": "3T9iiJ7rKwKZM38bFaN8n5i1ZEx8PuasCjhJE4D96WoEisDuvmrKHYpsF7vmFPKJDpM1NnarkA1vNNmLDPBHtc4R",
  "key44": "2qz6zzY77cB6WyqyiT2ux4rUm6uj2Ryzf7GvEbuzN5gLfVgwy6qcUBDTxU7ww4HE4pFwkES217ZAfJeGFzMEE3H9",
  "key45": "2iiGg5GwFecx8ER6SkM5ccPBCAxqPhu9fJfS9dmEMb1nswZk6ncVwfLDztuWKwHkUXZqpZTspDhjEDb2iy8DP7b8"
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
