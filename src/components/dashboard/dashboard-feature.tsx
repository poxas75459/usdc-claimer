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
    "p1MTWCFcLNMBfwofVyQtHgrv8jPJs2KDrXNE871PTvUBEopuP6vhcNAWJQMFUy4dRUbETAYMLzswWB78zAbNAiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zKNkD6BCgP5DMKP3BPJ6oun1H59K8youo2RXGUYGhH6F9sqNEuYxnb2E2S4aSdnQ62SyNH8p4xHyBHY6mvjG7JH",
  "key1": "y2NxB4QHykbsidJSPSG6sm6HUuM1H6tEzvSKiFwiV6tcwaP68kQQfUkNUyrrzWYdQvC9rD397te1nu1yk6ouJYV",
  "key2": "5gQAa1AQRMJMxX9JYG7eh4cunE25icZokZSzkuJsNgRpDHCu2Vzv1BBwfnR5yqru6d2Nu8W46xVSscXwqGZUhiLh",
  "key3": "4dMBZkTpnipgyfR7LYmHhY4JBMC4RtDP4kuvTxhhJwrmSuxkTMPgwz6bbgh1Lvdyvw4451EmafveT7FfStxoHUUQ",
  "key4": "2LeBXPxHp2ausDf5r1YQknJDPYvVGERMpbCHYdo3EDwjqzWyYuatTwPdTzsjfuSzxscB3Rth1L7Pna8qtsEKcsBj",
  "key5": "3ApDvpgfngZcDYsfRqHGGfCx6xTNeJzLAG8i4TUX8Rz8KPjNPGJv6uUhqM8gnGVmrbcDueF8RBosQD3biwtZMDSX",
  "key6": "42RdeYkRdnm3EBh2VWviFH9Hpz7eKWbVoXVHgA9cocVgeXB12yb2LG8tWZoDHFrAvgECUmrT3pKZ8BUXtD39VJfX",
  "key7": "4UQPWdKvByNxbhEteZsa8HWEFavi88xkjPTL1T4fPRHD1S78AChjgszwhUqgUywCnjcgerqFT8B4yMgG95knqwWZ",
  "key8": "iN33VnUDvzbiaSXZR4JckSeQGCNCS8ij74JCoFmk6ZQkucy6gACWqr9Ab1wDHuYjxPBpj3FcgJFm4ktCRJdooWs",
  "key9": "5YvJ6mNpNSgnpVuqxAeUvbdzuK8xGtC68Bsd65yb3dhLPCajUbsGhTdA3bqAXQH84FRy2HpCMfYwQFoEAuhGNtWz",
  "key10": "PcWUnoeEQ9t9sa9QY6Xayx7NprzPEpNPffDWPsB3JpPvTYrdaVRQyscXzwGYzfGVRimMn53yRpm2csoV4Utj5yb",
  "key11": "3UuRJC7QW3ZiDjXZWnwWK77uQxUC5ZTKReFMwEr6LyhS6NsjXvwmoGf8KTosC14DKyH1c8Jwic3vUUHYMSbvYCtb",
  "key12": "hwfNZ9ms4HfT5fEG4pRnw3dWdvgQ6xM4ZjrbVBt4g1RHrcdWXZttncDX8NZV6Gkf6bbhN9zDDLprzRkMgvznUxp",
  "key13": "56yEdcA85kVcQThyDCdMHmx7xyuQJt2Rmr42TyJWgAzyH4HhitUaSwtBoVaVLW4jZ3CnANgHXLWY8uzHD4bfB4mn",
  "key14": "3S3ZsDbiaS8iU8G3U4sqXEbz4RPpZ8MsTju6Mxxw3wu3m9TSS2P6WQdrui7tckMHu8V8JrMgwRHr4vRjnfWHbgHH",
  "key15": "3SUtcmS74oVipYjdg1UfnCtC373z2PCRgTc7GSoQMtrLdZacUgwRSqidsW95rm3rjADKVtTB1uDeA85zrWXs4NWg",
  "key16": "4vjvXSUVgLmdcUWN5uucqMo8RikTEYoY5qyunKGvtbqnpxwUmaUHnks2mXmhD9hLHW124LqUQqzwK5SGoJFKxFCY",
  "key17": "24NzZssrz13kpsBoiGyre4vhqtBkNAWgGy7fJbQDdJ3SogJEkKak8B2abrPrcofR2aNcGRBVPDqUsZoYWKwKGiim",
  "key18": "4siQQrMaAA9UBcykmSYxvL5JeRwPozfK28tECriQxCXDGyYw7G5Yq4s9Qs5A5naFcvgn47PaUVgYZraHbVCorac2",
  "key19": "613aH4Spqa2NHYZ8Twp7KdB1WgQKvneeT4c6wpkLaub6tW8RghQint91wPzizmvkcmaGksb4qjMejXfJGnEfNh1g",
  "key20": "hujxSW8TchUgfk5NkQsHdvWBAgz34jDdAq2tzEgbDqkMoBAGUkfRqTRmAQ3ytEeHKTYbTTTMBzsNkadKpj5GUrk",
  "key21": "pDi8NkhNMqiwS37nd6DbHUicTU9s3Mu5fDuD9S4bM8uEGtQRnmorJnoGWqZvh7RDqcV8VGmx7QinZDPfEYCUq4b",
  "key22": "43dHVYTgMugY9c9x6kARdafdeKgFC1pYn2KNbxFeMFCzELBQm9xuiARK2vfSAY9Js2BcqqbGkkSA5thqJKSEJfwP",
  "key23": "AyzSSwWc3J6aKXQFuL3pU4AQK8fCFAVkNT6FNFyedZzwEsmFGqr8HNZGEN4m2Wx2FQZmJ54qgq9fQhTSAHHv6Q3",
  "key24": "2DoZDd2r42So8NSCm9sLRYLVvTX4M1Hsfk8qMwLedhtjWS6EvGGXJV1R2npKNFsAPYAnsnjEPCAJN9qefcaWzv5g",
  "key25": "koKFXiYuhnpKyCVJfVfYBDMUC2wHyuQkRVgJpgoWfhtuA4Ui8N9iZS26Ypa9A1hNReFoeDHz6d7PSZjvy8ZC8ej",
  "key26": "3AsuDuCL4n87tf8WdDtaYYJNz5NbQoCz3BVk9EjYKra9DEFKKZpoYsH36iBZikTHbRLJEJWzTAWZ5TYBLxngNBKL",
  "key27": "52mn2gxCM2zewwqxmqSrsQD3Dj7moJds4LynagR3zqSDxELB63RvZkMnE8zeYDvUG8aLXPnsuYQ4dMyeuFM2KU5k",
  "key28": "3WbkwkEsixPQrNn5BZeHQPgLZASvsE5nRAzvB7goUpXT1ZbJemACUCLxRzwA7rFNjJACSmG1ce7pHjPr6hM22aUA",
  "key29": "5JwssZ8FmJ2WFQbmgAFkEZifyYCnknE8mecWu77TADneSQQdp2jcViBntuRQ692ZZY4bPKYyAwYPXR3s9aUmZDiF",
  "key30": "4TeTXhNuSvU8XY6q2JaBymNHhfxzdfpjwRt7hB4eSowH2gW2etsdQebuGGnwL3CVrCvJCLCbEbPxr3fXnKs365W3",
  "key31": "4oAWsCyfFe1ZKo9sYignHM5CxDHxKCUyix8Pbuh6CTDKhoU7k6uXYH9dBPTct4FF12Jk5P1NNDUYGVtRPvobD6JH",
  "key32": "VvrePUKZ7PsGNKLFVZaEX3aDWBdvM6pSQx64Kjfjbg7ThUsywkTiLC7gGKxV4HsGPg8PkjFtLzBy4NrwfSXMtdW",
  "key33": "3HpnT6nV2HEqgsdgMqEuzUtqYrm5pr4B4CXx6CD3SxPZQHiVch71BgqDeV6GqhEFFATcRe56ZzhYca8Gfj4JMsXW",
  "key34": "5ZwyFAxhkcCMtZG4V2XdnFWfR7jCLb6MFxBq35eTK9XafeJhY6MD5CSbxCobPXTnCQ5aVLLtYAr3BGLg95EhfPeM",
  "key35": "3c6EwVaerf9cdb3Di2v4nDwBJVMybiJzu9Xyg9h3XwRNFFUja4vouJUMzPXZz9EAFyuv77eq5LHPTUzVhkwjmnjZ",
  "key36": "2ptmYh6DxPX9jYZjZD9fhJXndiqob6RRVKVTaXCt6owLg34zaRX1PJVUpTS1dvsGvARtFMxRSKmfgGQQM3R1s4eo",
  "key37": "4bhmX59tKXV8rVRWDJYm6qZC5meiV3tx6Tfe79p8wB8UL83wYGpRc4bAQMpLcPytB4RNHASUGBstZNNoaTHx5qqR",
  "key38": "4L189v7FAzJ1RWPKFoRDDmXGBYsNtEURPF1HSGYfqTXptgzJ4teXP7BAmVaubdZpC8tBJp2pGHyuskG9Uh1LSTH8",
  "key39": "5yBtDQmVuUg7z68jyUoR3LF2FfYgp4vpAgjNXjDoNx1kFusbi3an4gxzKuXwDd4jmrBV5fPFqVcmHxshkHifuGs8",
  "key40": "49Xf6Z83NK1ZZByyoZneJ45oNQyY6U1fA5RcAe93P8o4VwnTQg2Q8WZpmf5wPHngA4WJ5rZWQ3d8w1EZh4iNZJe4",
  "key41": "524Y5s7sYPAdQJfDgTGkF3CYrc91AkwNrzJTXNKsU42FTAEqH5HAYCkV1BkeWqnftXbkd9gwvRfZ5YvTgmT3WRnu",
  "key42": "2Dt5ZcB2STa2QrzUqhV4bFcdkkY15hC3BgMun9U7xnJDa7j4ZNyGyP2mVjL1GFrQScUJofDBYRwF3iMHhFXB6Tu",
  "key43": "4qJULZpy5NU18HXxAzHRNL1Tm2b4Aw8CX6j3cjvhmaMbfwc3mzRPz8HRPEMPgPMZM7H9HosF3Za3Yfw7SfH6nP3B",
  "key44": "3D9fx2n2LF6Zviy2V12S7TRcTRmvAq2icneNkdR2kmJZ5etU2yZ72PANECUzbPfN3XveLbiGajDMxrYQAhSVoGkU"
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
