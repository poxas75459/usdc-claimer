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
    "2LoZMEWXuaAbpDjBWe1VqfGD495rzDEf6k53CECiNfHpDVuBBjjPj4oY3Fm3YNvsznkSSH78uU9jS2fxd8eF2RkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26fiZJEr93yZ4S5aUeiKXZ5jwmPybyzTN7ch6RwwThRQiAsCjJuGBmMaZVdtRzp6J7yaKieETRfbGLg7sVYZdmMR",
  "key1": "4whiQDQ5KFYFMuL4CDEWUTYyTXtmUpTmKAahue7xcfxQdpqpxdtMSvs7AybNKUqAersMMAdWBMPf9XaKh4zLqv51",
  "key2": "3oUTgWi361gdu3bqvoQap69gT4ZCLM2cc5fx4epZnchqfjFfkDUM3B7zRQVcgh6GB1ssQUZgPKvYJyLxWJjU2112",
  "key3": "3yzHog2kdeCYuFmKAEMUR5L46XNM4Ds9cJe1WoeGeWh2ya1B4d7yDDhVWXDGpnToz3zaFuxfb8UZLNWnje3apXyt",
  "key4": "5iycr2XoySyeH1PpMAa1k1Uj5FJto8FVVLKCHnNc8PvQP1DaBj7kGUU2o9ubm5B2q7R7hyJ79FTHVPxQFzgrXUrf",
  "key5": "bB7eGLMHm3bEmPcwJbppB3pjmBQdFxEPRiA1wg48vW4C3bH4Bz1UU42nMiSTMiDukfYtk5t1YpssemssNstzzH8",
  "key6": "2P8tCycXN9dfvNwvtscnAidT358D669tv898gv8t14QXLEbPLMX7uCtJdXLWkFUwCiozsD2xyRsnM7u5NuJBosB4",
  "key7": "53wHyZaZbXv4j3KSo1HU1Qgq2DKC2yViSzHULSqNFbdhXauuUKdH1Ptz4TLeekefvGiz1rDzCGAbBcf9i98AAHTt",
  "key8": "5xZ8HZ6bQ2Ujk2nMSAHxJJQoR8No7sWTvsAQ5doGgBDGTzdcVeLHomHeKPGLLyJet6DM51aekvV3UVfRSZJz6D9",
  "key9": "3C5pBRdJTVHLr99PtGx8F1ceTxhMNY4Vzey6Qnex1cZfmJtNumVDbN7Vz2VLzHH999M9HGENBAmGxwKgQWGT21xN",
  "key10": "4AjAGuntvKuTPBNerhHDs17CMbsyKk6G9P49Q5SVaiifjDq6DN9r38HN6e2aDZXh6hwYYnhw7Bv2Xh4dJpYKpVdR",
  "key11": "4f6Ls9rYoniBagtYQhfod8kg1H97sAu2Xoi4eLK31J9mAKCYcM4VYeja4PEaYmisvMxQcCd2cKRpHrPPktnXUmEB",
  "key12": "y7GvpYjqNxRX9cmtUU7jAcg3yW7EqEh6nAWp6xGtyWzpS7EgQXRz5YsJHpQZBE6pcFZJfM5KU7KFqV1TRKEr3Xe",
  "key13": "4Z9vZaYWFow7cJnKK3shHwCAP3zzRDwM7DvUrWYZYW22mmxajZEmZGrdjQzmUSDVUhYaGNadsEYZd6Ya9QsYaWKx",
  "key14": "LhZJUFix8GaFvd8ttHpGNDC23KxbNdSWkZdsyBYpNRuYMSFMvVCTLJecfzEUpvqMyFs2rYUXAn2SQr3d17nZDqv",
  "key15": "3fMvgGdEYSmMrNd9fvAdTSowvJidwHYJDxUKq75Dt3n6CUgEmMFLGXR4NDvnj1CuVvwbGFtTbjCpFLpyiQ6h7ohW",
  "key16": "4kMnVzXXuyF1k7mfu6kvSgeCsoRDbzHo6R1ov7ceBKQjzTont6mg6UUGobjD8iEK1CYWsDBGGXfdtGXBbSAeMdiQ",
  "key17": "2MKQLbZfLU8AP58CRyKc5ARTfUmSLjKf2s6PiQgHSzNuvxfcFz6nbxr9B4jBAVN5aKYUGBuedjmNhhER4AU1xG7U",
  "key18": "3cKM6orhj71uqSDc9e5uXzonJRrAvepvP9TrnDirDHzh9CKLozM2KDwfmiscMAG3TEKswEdz6RVJ4Q8TvwpbKb6U",
  "key19": "2n1h9yPyAQij4Hjqy8J1W8CXVX6ZiZkhnfxWK6RxCasdq24kVHMjcQhTUctdNsJVvnRqAiZMtEbgNc8agFtqB1XA",
  "key20": "4Xxw5w3X8RRUTJdhNBhZC1WsyMKHofYS1tzW5Z2FPFjN9GyydrtvehEcGGnMXutxhKpH99rUp1RyuzpwjApBrPcQ",
  "key21": "26Z6HCZoHf7vZr4Zr32Yw9jmVSuGcCkJoMtpNHdFuaCBtxGaF6wavRGcD7Te4Fa2gqZkS1UW1GX3Q9r3U4HnQoms",
  "key22": "53bxzHtKYiVe9wcfEah5iqH9f2GGKzKkA9dzkyTPFK2UJW9FpHmLyJcr69bCpCDqwQtWiwkqAfLoF17y5FJVMTwc",
  "key23": "4Uy96vYMaarDxxxrNEXy6uYi76mr3y7SKorkW4HQsDyAdZGZXWr3DB9V1f5Fd5TRexHyMuR51gjAUeTQZe37jKSL",
  "key24": "MSBLapicVSrBzTkqcD1ebE8gkpkJE6BNP1LgoSueRiQ5arvHaepUgBeaggxWno91F81HZDNXCq33e4UP4e3oywG",
  "key25": "3jomcffseY9nxqPVML49nReQz3aYLJ5hfXzt5gSiqht7LFd3kPnKxPQboZAkoj6hBfveSexSgxSrFCNJoS3dXrti",
  "key26": "4V9N2QuLq865jxpfaaKkiouGtHGHhiV1HDucEk6b9kAjzfVH9pGzUNdJKRCFEtiXJuaFjZvBYi1tBqYMwPBiQct4",
  "key27": "4FA3wwiKN1X9wZHjusjRr4DBhDtZ73yFX6Uwuq8Kn6JMK6SUGCLzsdbKgrLT4Yc6V5hMh1Zw88hEHZ8S2x1yJy25",
  "key28": "VuSDYaGJxrdWesWDiPGShYB8agczswUkBmG68XppGufVQKhY6ibp1V6bNaSreeDmaUwnSBNRhizE2JVThnJnGWQ",
  "key29": "3cTr4jW6xizWrCs7Rj5n1nf73fonacLmvYMaiiXXE8HsAzG1yRkrX3rrizFeoopZtv6J8QpR9v6wN3d1sLsMfZgT",
  "key30": "5B4Ce1vir9VVsPUdLpdqHjJttquhzb5NYtC8tqPMWJ2XSsZ3pKZeMUzZ4WjLAbqDhHSd7aXEfi8Xhhov51LySApc",
  "key31": "AbZ3Hi3W5YKL3WAvbaGHWFBPmzGUEE8nWgbYCzdg6SQCouPPt9gzmaY18vo4xTJtYhpvqpPcDuxzPRZCDJRnDCN",
  "key32": "5XfzSXc2HxQCrbgi93kx1tUXc9tbumoY4kBeQYvTgtNw9662GMrgFax9BxtnoFb41a1G6ZcVGbkH9vtuasGnqL9A",
  "key33": "42jFSaDLPAycgxGvdyomi4MLumUVy26hc8LakpmzmzQ5hAdCcmfuqFZQA99T1wK8qwoU3UFgiU5fPsUDzBzJBykF",
  "key34": "2Y9Ynf6eopW9NQoou4CqCuzS9id2c788szQFeWJtijXevxCpHPvbggcVtiGg5CuXaqAjbR1KwkRyLsgALSEm14Pa",
  "key35": "2vNQ2uJk17tQc2ztxugKPixNg9wUJ4z2UxPrKwoJGA8UChgfDoVrtZaUcxRhjvasBgpV7JiPQ6ttn14hw44xcNGU",
  "key36": "Hw8ekMCy6AmMGsxcrs5Zs4uW2niPR9eiq6tN2cy3z8zci46TS1ZDeY7sGyP91Qt2695ke6VyL3u5Q2oPFa6EMRt",
  "key37": "4hBo2BnaJ18vaegisqqc1jbDmZf2RFqwwxFUK1391b7byWefqFaFSXoceB3byNq7vyQCYDTkS5Mm3Wt3ZoFnhvqe",
  "key38": "4k8DMM51XEtaescv7q1Z9H5cTjEyh2i3y1tXSnWY45Gqw4ZbbbSkBo4NL85L48i8Fs6HW7xSXN7T5JX33edD8ofd",
  "key39": "2GgQcverNuFYAGX44gTP4eA7Kxm8auyy6hzcgThZCD1rzWtrTmcJf49M9sNjWKZCTofjxPH527Q6givzNVDrz8Gm",
  "key40": "3W6forjSzf5wHP8EXFNH23CuiveeHbw4t2Fozz4qsSJLSu994wnHGNSEeu1m3aXBYRT9SBmS3a2vg6fyaK4njUEr",
  "key41": "272gDHKPMGKBsLaPTj9ivDu8mXv3Rveyvu8tbXMbaRDGyWgdxEeX3ui7gsZAbEthZ9PETYKob5BS4sHYvz6SpBEP",
  "key42": "4tx9Liip7TV35qP9SvVTrLvKy123QaK8aXuUcTSbiM3c9YrKstNRtXnqRgxQzTEPkXenLjUiNsYMypQg9tr1KmUz",
  "key43": "3614fJ4WGxzAdG61sQtXCRJ1eRTUa9E88jyjH9HG5isihniconvSoQ1Znbkn5Ur6EaUYsLsTNNRqT1aqdnbUYkws",
  "key44": "1mHs5NxTUFY3kpZXUUaL2Q4dRRU4BoZEGrP5jEQoW7XwXkJSDjG3Yj8BQZUU5s3Z9zZ5SBu5RXcWyNKfDKuj23V"
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
