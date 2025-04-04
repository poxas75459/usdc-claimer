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
    "wwyz1sHTY9wTVHB9KhWcrSgVeT38f58z37V6TqN1uhw2GwQMiwEvkj4PMZai6bvCRo4wzMry2cCPDfZaq4ERrP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LTrSsFxbcfwZ1xXsrfTuh6ovoWaXNtUeG4kVCsND4fUQqVq8m8oPUvDhqQRjEmm95srjdR6vq1kGNtdLFjYzxuG",
  "key1": "55QKimg9pHiaBfcNbAAfPpEfTVkBFpmSmG6Kft3beZuW93imVWPJSmQroEc8qvzvkLJC3ZzrHZFJHBhJisykUM4p",
  "key2": "3rwxjUQonnERtMEqWw9G8GEU2f6fHk3BmKx1TsTbaLZHYreSZy5J47XdpqX7EuLoSkzsXt32T44Jaj2B69RHcyfE",
  "key3": "5UDMHkQLGqdW98eotN8xvmR7i6Lu9pA2NmihrWgsRwvR9BFeDLFJEesLS8xF6cyaXFB1yxinWxAev2LgUMFkwoc1",
  "key4": "4XcB8kVnuTQMGMJBXKYv67pwx61QzCg7Epf4s4hv9EYNLuc5E6zoRktKRs2E6dK1kpeuE5gpEGjCqRX1cEuemaFA",
  "key5": "2bguXDUrowRRW9P9EvwPdSHgdCntaP6Uq9UjPBite73z1GgJinQqveGGEBZhDNKDq9yFbP97FjWdQ6MTcRyi82Sw",
  "key6": "3uGuHjkbaSKAJDCQytMUts1apiwFfu8DQ6gPM56mYb7H7tbJRuKyrJ1jJBVvRQrZ6Zw7G13H6WjoShR7wpgzymiB",
  "key7": "RV37YWK6JS8Ro3nve5zhUWoTFo76MmgLyo3d5K5qjVZabBsiZ7stczmPU17bmWHy6CpdjDYAxoNJKWeZtHkQ53C",
  "key8": "3aCY9gyNGkCber99RBsa7nNPiGZ9mcTD9aEPRbjuNFiEh8kHqinhJsKGrW8HT5XpPyrfYfuVYRoj1cv2xPDgeMKQ",
  "key9": "44jp4Gqn7uru4LA34LFH9ztCJ1KfadDQpKsFi8hcdY45kRkDJVKbkRweymwfTW3zpfd6nqmoA8fCsaB7kV9TSi4x",
  "key10": "2ndRWtogvNofvZM36BFTf5bqHzhdq4D5YUDiXhLtyPc8jofcWNh42YCTuUpTQQWYAUjECNqMtKoMfDm9FAEimzz9",
  "key11": "5ZiS7AmerCqn6MFLLCpaNY91LQcdgdZRby1BvcvoKJGXgboDJSeeTJ3XxaLPJwC4QKE6TRaJLhSNT5VDMkUad2vj",
  "key12": "UD23jBKN4sYBRLpPSZGbC7VpQ5xYdX4Rf4Ftobsos889AD6dTDMLqcfP1qMUkCfiH1uSyFdPADrBk3psPdhwz7q",
  "key13": "ccdTuniRH3WaoRk9icW14bLxnTrwqJuqBQVM843Ce7VN2BvwKCV4MEEJAWmD92b6nCtbzthTjUmeKwZyoK8ECW6",
  "key14": "YS8PmCCQ8oEm5BiLEDBzJuR8UGiNPAyBwgfpDu5o3RvUEWEXFSCJbFpY7c4R4DKokHcxzfB6ioFTqKqw3UHe4VC",
  "key15": "4mYE1nzWktUctH1XASuQbuTP9eJYDLmSLxkwgSHF2kqvM14iuk6R1EDgmMah6ZkLQsnHxujphYNrtgZy3LQXEmr5",
  "key16": "3LdPcGdLLa1PVb9XCn96u7qfB5g8f3WbwjZQKgroctrpRQ9xdqHeh2WjUzcFrGc6bvCuGZyxakn1tYXY1JSExXh4",
  "key17": "5a4Yigj6t17boXjySVarC2qAGSGgBp6WU2EbN19SmVYemHbwee5mJZ8kgCX2bSCKLAdaZ8TciMqfpZuCKHSQK5YT",
  "key18": "42hKBQrfa3671wisffstSxqpkrCVQ5BLveQCXRsR3mSbLd5UBiso5kqm7jKEQBbHk1C98X5nKi6TfftBs1WPw8XV",
  "key19": "2N9tXyGsCcauxyuaKwux2ceTKghs8chHjURbct7WCvV5fZur5nZBwUduXPS4K3rCibyXPDXWq2tgsPoyTBqP2wY1",
  "key20": "5wJuqci6BEzCvL5TUuPA3q7RGXR4RV6V6V3HoMwdUbx6T4GWLqhAwhed4dU2LiMmGu8GLtYrpFXq9yoFfgNvwDUA",
  "key21": "65ZS4t9mi6RrPKFGWcFHcSBGaZeuW2KrtjRB7fSVN9Qw7t7JHdCMaTJAG71FhRAe3kZHosPBZ87yt9tAtNHRqNbk",
  "key22": "4Fzy9NV8FbAjGyJq7c571MLPqLbAtmrjFt1MwcAGWGfdAWpvvzDNFpQ21aRFZd3jG6gUrsUKW2vvD3mxgrJLBZXH",
  "key23": "4grAmby4mHrGdYB6UZqGKNmL4aXW9fQyzvNojAcEXHb2RBTNoj5vdMgFTWXu8WJEMj195EPHNiVKJCaUv6GyTD9U",
  "key24": "2vrFQ8kn683Gx6JGMtrVoZojJWqSCrkaWpdiepUaPHSES2qG5XNqe1qr3rLddtMs5TEQgMMkFCzTaP7uzQDKirqU",
  "key25": "56bMWzsctTCeG8rtezJrV7MfjsRp1cSFo6VksNMkDu3NtpBLhfqHFw7gqR9FFYtbN6a4ZY471tuopiTSrs22ThTz",
  "key26": "3sVpHNScgXeMUysUJgyakxsm873jHfhvKG3CAWgB9MKhQbSXfCQFckX5QXdFgr731zFXRo7MXP4mB8dhhFPyTiC",
  "key27": "3A6D1n7eKfpmN3HSzixhdYv6nYRxWHHxpdbgQf5qGubJ7DBswjrj7bRUf3CpWCtRLRfKsgns5Q3PFJXXQNJ14zZw",
  "key28": "nc5aSjBaDAx8ChHppKCgYVGYXBQM9ngm51zfgTxLadVyH81KD94bswFNjA2SBDfvVujnsvApfSiwME76KhgoTRx",
  "key29": "32DJxHAGMuxpcmAJSDNYk1PX238R855JCHEsq8sVuPUyA5bUbuAtQqWAnWRsJj1apuz4jQStHQGKcG8zWSf1MqDx",
  "key30": "5PYV1FbuV3akhbvak4bnzWsm5cL2xYuPJ7WVnzf9vFfmUnQUytqwWzBQL5aFNPJiWdHiLGBQtrhZULJoW4ifZTgV",
  "key31": "2n6ZBeqBNzt8Tofo91scB2VMdTCsEZ88bfbmsZSAuw4WmoxsNnNeMYHkzM8pUE532ZcNPBLWRB1CThjFpisKcgBC",
  "key32": "1iddeAB5pnX7aLcgAFC6Sne6RrZCW1kxQHneQriu78DxYxq3gzxs3fdH9m64WRewnmjCD8wXotzEWUrU6v3tqM1",
  "key33": "5AA5ptURufnBHXcknryowTfrAjqk9JJBoqjvhdy9q1KPkZCUmrrmytb3v1Fd81SZvrErNdjD8zUN7ZXuyuHqmhQg",
  "key34": "371A459RjsnSDjAupBAT3D2642bhPUXzGHX61JVBZBCkCXxdJMRnxowoSFXfFs8vnyyTBBvDV8xEZJJSaFV1i39o",
  "key35": "2wEJHZFSbrnKz5ddrcdjQrn4YhMm6cWuAJEew1BXccEcWhu7eG1iiqe8YP6YzremD3uLypz9BL894CEVS1vD9uzb",
  "key36": "64G2jHhXwmE2E2K9AMojmjCmDc8i9KTw1K2ceYnSJELur6Suh6T6MDUXRJuejjqp5gVpySJsjivfi5dj3h1A6TwZ",
  "key37": "3jbYioWuhBLaYRd2JsfyPtWwSuyMh2kBzV7163WoxnahCUdfBUBbRzK6kPN9FKj2peMUr5xxMzz9hTVpYwwDDZdz",
  "key38": "3Bpo6gE1BcML5Y5CyBtTbe3Pi3VK4T8zosZ6Vq8ozQyzKtBCeSZ15VyfWgEnHbj5V2SxAh8S6e9iCvssj3GRqbhN",
  "key39": "29fTngf8g5WmEKseHoi22MLdnAqgrge1bQWNGvMiH9mdUbNAinUHEnpSwAFtjDxmhPTEzXkauYsc4hHb4oZ9MVMd",
  "key40": "51VPUDuBAyeWz45E8pyqqVbjZhjxkMHVgf1m1UFYuiJtWF8mNqB483pMEXefCqvC2yErf8X3fMe6V3CBskgimC5r"
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
