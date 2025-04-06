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
    "3dJemQe4kvG12NvfDZpahvKf1qYxnC5T44MsxPx6cny84aa2quj26Uc6XUb5eosUCjJnUFEbfUdTdCJrwg9TTiqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXqfN9GRu5MMs9Lbvp7m5uNRFD7Q7STEcxLJFYXfEoe3g2kQDix5Lmxdzg8HAWNCWNfskBE6FJY7GFkjBGunYuR",
  "key1": "3SMGBiozB4StBkKyuEcCrYQPBYwPmfjuBWHLGCBH5Qji7JdBjxaNyDNAcxviRwFkChRxUdVaDeS5nVdgbddL6HpK",
  "key2": "2wJRwzXZeyEPA8QU1QCMgj2nbyWzMWqkKQzN9xzMN6jEpPMQFtmtwEXEKAK7gNMZHhaQv2J6La72PBsuXb4rihZ4",
  "key3": "3n9gxxQ3xP78TV7dSuWuXqe1dN5CvF8AEF5MLB7JYVKB42qq6Ang3TLqYBZUbgSkeHyxmvNFfEMFmt6LBKW5eiAr",
  "key4": "fncFoatXuN3dD5tBQw6YgHrBnvo7BBKFi4FPZeY3zKeZmbgX5Sr9xGdqhLAX1dgmSnpnnxTiMtHscUxoC7Z5rQC",
  "key5": "3Huc6SioWKWAeXcKg54uTHPAeJyLAUGSGNtKaTR3GcVBHWmy1Kh9gG8yC3hEn5PqBwCgbhJAr4Lg5FuNQ3GbdP6L",
  "key6": "2AbDvPobz2v68ReAaErVB8sK5vkreqF8vvbRNiRsdJ9a2LWEWPdR8W1fy2CLNuQandhbSMPajARgtNQdfFxkfd8e",
  "key7": "3vnDZMUS6odKeDuis7doazByGoryoExPiRJeknnzhd4ufEG7ifqaE8UgYv8izXRNWny3CddzPCJS7sFr1N6t7P9w",
  "key8": "5Gvb5KbYFqrPRKuxvhpmBwhEq7T64ebAnyChwEd5HzDHM3XNhTS65uoWqmQYh6MjHZUxiVPM25cc5KYPi4oie12U",
  "key9": "25expNNJ6XJbfmCTDFArDsvUREyNYngnbSwSPtC98ygN9LZnjfbvdbkqE7nPvXX4KbCLboaVAX21VVshV9mCzwEU",
  "key10": "4q1NteY9Vwe5QZeM7hvupNbKFi5XyXMYxkTgxmfBwiVEHivzXLr9zwHn2Z6K1zguquoKhMd9NeZ2DHHwGpLKuUip",
  "key11": "1L1cKYzvQ1ZiwHoA4c2a7PaYQ4GJ3ncA9yqvdr6Xks4raKorZE23Gxi7xLoa2dzDTg7B41Vo6LKRcQgiybFkKs5",
  "key12": "41B77KSBZu9tPkUTd5X5mnLLpqWYTrBSadg7qi6Cav9hAq5NsFPKvcCar4VxJ4FPJ4JCWAcw8amw4UGsggncFkx4",
  "key13": "3i9J885zqEf9jVA1XaEEovMZPXALoz9hp6yKdwUHFXarsLvjFsvjWCzgqsxuQqJXrigKLHPwmbHwu1g4VfR4M8Lk",
  "key14": "2Ecd9ks2WNs6uH8RPve6b5UfrUM4FdS6xMf7m2wuhd7SUnzbtV5h6RzUpTc83CeTV34yvrcK7xfRghUpJmqFz8Vt",
  "key15": "3oz4NyzskdPm41zrE27quura6L6uzueTXKCEmfhkSYoZGM9oGy2MZ7jThDcPLWYwuEQrzFTwqMs9eZwC4kkc1tjK",
  "key16": "523jFejEenzevCogAJ8foMoWNhEGLtsRzf7GLocupyeYX12fVJ7u6MmcvCgCy8yHhvfF931ki6qJEA7JunG2Nb5r",
  "key17": "5GHofHqWTZ5WP9eG2ZdJCxac5HSAxMQ1ZRWm41cprqPLJsjZ3fvGJpfw32k25dTPwEREm3vjcZAfGMW1AVcs4LCu",
  "key18": "2FFfCLyNGadSu4FJivKVVok49GiomHohLH9NxtYPqh6XjkHGuAThNPZdYLEBkmCpQbQUQGyJ2r5cZM57gY5xv841",
  "key19": "fHbeHq27bPpAyA6PGG5Dhiep3D6a9onK3DZr2rmkk5rbH6gS9kCAFm81TZKUQ859PowSM76vpKCDnjMfakjmBXG",
  "key20": "2hTBHwYyUgm4oUuWfUP6z7vYpQf1YsejA8pvT2AaP63LJN8GMrYnZLofXwKvSFkHNP4d8U9W5eNbcNcQ4boyRVH",
  "key21": "5MbVjQ4bWVNB2JZfYZ6Nh2qanDxiEnyWoN9wvPJ8A99beHfHLYhC8zuJqf3FfnVZSAgPC6wewNeuxN2tsBNcjxvF",
  "key22": "4C4tRgvai3dRHXWiGkEgJy8sWBPMjCWousfTt4Q4S4abP3vrK8PteVBYVKoHsWBSbKHX75Tk2KTUgZXJaQMkbnAu",
  "key23": "mnMgu5HBbNMe63TZqqZawxx8QsdN7tW5LHVgM4ibF8bbv2gjP9sRM6fqdRf9mDz1jEi5j2pM4uPJRGAjCgk7W5K",
  "key24": "4ZGoi81338YfThUWEHb1CGQuHzXHgQqKa1sMDQbG5dj7YeXfKGxhEDQXce6pprGwV5S1JKFRCCp61mwyJG3aqRqt",
  "key25": "nBXmD1GM23bRgKjyv21fe9w7arnNhPbH6h73E48NTbTcRoCchdg8jX2G2XAA3TPYBcsQWsitibcct8F6ed8Z3YL",
  "key26": "2hjdBRgQcgiZ4V4SfCbm5ZU1dVgNQCVUQ7Kz7yjvi4AE4LN76c1GHkZ49kErRzmAoAQhMSb588mXB7QuKSwaMj5r",
  "key27": "3K4nNUUfinMWyaKJTWhFk9bcXErsRS7SbYMNTgatc736UJwyBKxvsiHkyr1RxtA78gth413svbBmb2eWhXb1w6CQ",
  "key28": "ibNbTKntTYgEX8PDdTx3r1UHxo3ove2KHswkDyQcNESUSjh5CXqUCcrW6vzX8pK7Z4o5KRg3BJDYpUa94ne1TnJ",
  "key29": "2MVdmsTCNtzaMsA6SksGXHS3Mw3QnCDgVDWjg2qK9pRsjybotBBNYWqNDLtvyrZcfeN4eVivwzdUU9ecHcLd32xf",
  "key30": "5oDC8A6HACTs42m1KRMBx1p8JB9VbU7xnxtEBnMQpkQZMin4yvppCStsx8JWUQ3vwVLcybJ9dpQrn8DGapFEFicT",
  "key31": "3MZCaBX398Qz3iWNqZWb8oQeCAfbRkm6Pxtbv4BaBnCAJe9ThrDQ3EZq8z1UgdhYsRnhpvh1N1PLtyaznUM5ohjQ",
  "key32": "5M4kyLsqZ99rUxDmqnoZbTyaj4vRgKEf3SK3pXJ9wzsVRgWyJts3aJD44pQStyfTZa1cCEpMpGAu9AEfuqZw9TBR",
  "key33": "5Jata2jKZWHkQjctBUWS56LN3YL9SaKLnWawM1CjvgfxyDoNqSzjfnpxmrLB5HaFpTmpNY4BCiY1jeMTwpoY3cXs",
  "key34": "623wnWbBtuDf1cXgi6AhHMhLawDJHjupyizEjY27gJGcnwWCZ9QDqSoiR4VSdrcTr7dDNwfHx6E4wyoiBh7q7bYz",
  "key35": "5zg9kAexE93a4nW4Q4BaHrsn9tYcFzN3rtMKQVNctS5oAUVTHE4HnMG7YXV2GLBqa4apBofxSFr6oXuRZgenAYus",
  "key36": "4R1wpjEMHSDWMvn8grkCvNwxCoiDYHeymBm3jsw8HDPwE6HKAEaaqa5wpcaqpUt16s9sShrFDG7aJhGbjRFgcMnZ",
  "key37": "31wJHUWLHfFSFUft6pt8fhog4ZVrPAeEKW1ckWjSB9mAkiSWwDPjTa9aKviug8Q6z5Fsx99PAJvz4G9Rrgx4cnuT",
  "key38": "N64xxmQabv2dGMR2HPorNVBmcUFZ2LpH3ygVAkoP4T42av2EtvqF4HWuJKt5s2rQfLCmcme3UAQxZXhhEeZr79t",
  "key39": "4BvzmyUJah9iqgby7QYgR7pc7bN9tuZT52noUdp5c2bVh1a6kd21H19jjo4TSqAzY9vNPujjFR2EVtnJx9W9ohZi",
  "key40": "5or2KY7Gb8VYJmDSrAiFbXrma4RggrxjtBd61iTNCnG9qSa6uphouKpz6p5TpxgRDk1vdF5pquqgSsAMBzu9NC1P",
  "key41": "2fswKAxMWBKurGtfWCZJ47yvy4sNvXTuCz3LRUMCVQgtxLpmygpQn3Zpe6smqdqfS1M7xWdsvkDoJmVb6ygMu1eJ",
  "key42": "5aU3eTWSLQhGxPZegyW8ZPd6ojz5LMpVaUbZ74Yzj3uvY2pUwZzBQmEhcRXEniNfd6XNKWxrHtuL9Zd4pQqxJLUc",
  "key43": "5JUprw2S4uMMBPPqrptm9RAiTMWzkfE7RRa8ZCNshXk2J2FkmTNZcRHz2j9xURnGpSma6nmtUmAvsemtntyH8zhL",
  "key44": "3zWpMRXBjgSRTy7WpTnmmzxtWE39NSr5JpoXTa15oRzMxDhSHf9jERN6NwBMoh52jaWRJEw7vUHW3qAsX1mkdtZ9",
  "key45": "izS4s7ht4gzRtRx2x4Kz83N12kHwYyhxRWUEorDWfnBPWoL625nSStBbgdGrAE91MXdchA1n8i5oKPi8AL5MGfv",
  "key46": "3gwZTfJZMdowNmUJqjV1KMiV2zJKjdes68q5qU9PSis889WtFagfigtjt8zii7HU7ZvbcA4DhRoDz31ptgvkattb",
  "key47": "PPE4LH7bwy1BakoqXhYEzmsFK6zQ3SGuZmVXtpNWmzxxW7gVcqBoNrYdZtLJNLagEGv1PPx3N3QHUZ2YDhWdeFJ",
  "key48": "5UE6rzKMPqk36qZ9U759GihWrX1p4xn6UWyTtLJpJQd79otY6koei1sCxfW3AuCiNBtXRNa27pPgwFjtUrFeBc72",
  "key49": "24K2vfB5rSRAFDEsgDBRdiiV3o54DPQJKGQyUchvvemedj87ELkX9ezZYv6hMu5VuXqFPk5MjENQHHP58uAsFWLW"
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
