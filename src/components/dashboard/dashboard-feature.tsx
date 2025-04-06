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
    "2RVSruaXnwsQyUT4Gd1H8jNYqG4c6wCbPfCBwekviTySpRQdXjxvi12WLBhYgchsJpfRBXBnkAcVgf2zT4sBvydv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rFWVeUFgiL3ie7P4H9LmbsiFaLQfUHXhyiWyUrPmFVMJBDVV17fG96A4dzz3yPvAZJc29jB3sHvnyfKSiEXSRXo",
  "key1": "pG9D1wjUpHZDuk5tM925J7gjcG8AfRcZgFjvhfU7iwTd3pFLmeNreeXNJvBni54MJ4LcnzEzKR8n7uitNW39Scb",
  "key2": "2LNXq2qkWanvpykhcT6Ze8cemKvG6QbjFBugu6GYYXfMkD2WPzev369Ft7xgfxh91xKHPqEKhES4TXsSPUxJxQzj",
  "key3": "5AC6RccKzSyhPA73UqyCf337pAke9jaNT6NgpAhNLbA2wV7gADgqneXcW9CW1j7rTUiGYFXJQwseq3RJ7EGZpngt",
  "key4": "3EdMBYtCEGdvBmkWuVX4YvNLsvk94opfJMn5EybztTBbvgBKk5gauogGdkuS9CvP8WyM2TtGRQhWEYNpCzrt6zz1",
  "key5": "4qyKxjYtQ5fvLqbfskzXNbHEWawKJrHcGF4sZaZrAvbzsYdQzFVKZrM8aiWvbpyXdsfRECMzjjvQZCCtMCR8mFhL",
  "key6": "3iL1jiR58FViFREkPLaXQ8KrAysR9AqGb9A96K7dMpAF6UpUgiQnQHwUCbt2mJ8Nut58AekZMrpaJptuT5Qp3Tag",
  "key7": "3vdfYZN9BncdtQac6k7yDkqEuzDypxaPLCJPwueTzh4ypFqr9ZpC6ojWUQwEyCCXmgkfrD6Siu1cuQP9PdtoCTYK",
  "key8": "2kFvrJzpa4yFbfG3NT1bQsmWedZtkkMHQzhRWNtph2VxKzkwBkzD2yuMnk2zTaHT39s4hP8YwFS311PmsvyMXFFK",
  "key9": "55oP44K5FcmGoem85n5EeQnj3cBBqNfXcUCtUFZqqexWyeDUZ8TQQpCS2FGP354KSMbRZtFszjniUHfLkuHgwDoL",
  "key10": "2BUbzZ8jJFmKQGXWo3rghJ2KAxg5DkKmHRNzdPdpgc2Ep4TVmCCUCAecebJXSk9LCeWsAxYvnK6KoR3v8CAnrYAA",
  "key11": "3j61AZYD7icoeWxWUAJhVX9LwNUUn7vLoBYxgSeSoj3sgcyjsqV2aBd2MeUxk9aDknD5Ve3y9QocMkAmjzU7UPGC",
  "key12": "2Gc9FdLHDiwmqBxWvcLzchEZWtRgp2pRtKq8qu5A8KvLqijLyPzDvx4KFxUjFuUTK4TU6GUKAarUGH434uH3ZAnd",
  "key13": "28gFxuRXZsH7RVfobEEQEHGVcGm1WYAy7psA7ACeXXQecxxjzHGiTU7DZLQpvQcAijbNQ5qXnfeJQZMA4rECuJBd",
  "key14": "4csQoeMYxPNg4th1x6Dk3e2KwUBbKYqyEPzXqjNoQcQmk1gnxPQQDtre3ezQKUjESNRhaNGsnFkDusav1CLgVava",
  "key15": "TjBDqZaZYteAg5314LvV9X7YmSAZVEmhzmzpWbme78thATqoHC6bk69dhE3FRjnGij6beTkthsuKiYyy72r1Bkb",
  "key16": "2Fj9rPtJZSU2oRySyYJACJ7qB1LDzggkN4U6RLxNHCNjruxFUGk7544M4gzfmg6bPqq6CBtH4wpoYk6uKfo1XmZ",
  "key17": "5euYC7xkbdpac2E87g4MfiACuxioAkvatTNaGhD574HhoWGct9s3QGjFArdXCTDWmceobDfoSuNtwxNvEvw3s6jf",
  "key18": "c5dEaD4yjY1ToApycxHMCuQbXCCFMBTFmaA7PHQabEvXRnjbrfga9eJJzMgMpSvEYL6H4jhpAXEnVbJBK3bHfph",
  "key19": "6e3qDv8HdM1ZTjGrKQtoNUAGxmEJDsynDR74jZWittkCATfcN7ftXxcqEYRMW5PJoVoNZB2NbBLYfx9enGnR4wT",
  "key20": "2kN61uzSgvVGN5A7uNbZKh2BYdawjFKzemXgSmsF3Qs8R7sJfmQ3K8SZsBHh3DZQ1PgwsYeR1ybSZqkKgMdqdyTe",
  "key21": "34gpyqET6cUmfEHzbxSRJVYRzCDYyzu8Uza3f3nedpHvekrZm3Vdme97SFiJtn1TSQU7skQKzg7ndiipRksanr61",
  "key22": "3CHJn4vTRD7MGcV33UwvvQ1z3uQELqvKBrPRCcBtiiZnWdGkZe1J3r3TGnTgjVmbiuDFLm8Xp9RirULr5oQh4LZh",
  "key23": "5tmWdqkjAwR2qgtVKWPCrUsb5cCunNs81o1yHXp6Gyrom2d54NDULqmMLF5ur1qURsCk8TjtuaCaRMbVBJYWq1XL",
  "key24": "GhrBEmPRs1VEKx3oRpWh2SspzTSZ4GLgkLNcbepfyg9WfMX9bsp7gLEKvm8iijvLM757A5mBGu2JzKsFE9yNkm2",
  "key25": "21qL1KotomXS6wu16rzBtvw5uhSZxcEF9ATbHGxswxmuHBXzTmSLctvb8bsAVsC9r3CWMZrNEcVqW7yPUfFhZkzi",
  "key26": "3UDEBpLpEGRs1K9ptBDcH6DUieRVbKb7scuHBvt3qaXF2FQYGnhJN9bn3P9wiG96YvU1o6k1Gg63jy1sZxWTaBrQ",
  "key27": "3KQ4ivP53v68fHEtUUQz1caJ4FgneFxMzE3ge3q7X3N2tYTYcS6f9sxbU8zg1Jyn39UrCtvi6rrrZykgpZZQQHSx",
  "key28": "E3FEjjFXBFj8ZH4g18HW69ue8HRGvhxmCeZZ3sPTKRFd7iwSJS6qdY81uAXYAXmuffgS7m5vrHusGTDFphC5W5b",
  "key29": "3AUhCYMH736rjNoKsv9kksFSRL7QtWpp1GL2Te64TYYQLkMdoqypVfv9UPzThpAx8CoSoWFyn3j2FthKkFezFBLC",
  "key30": "3UMeXsRLJE4gNV2jaFUHza9Hh9cc9AWwcSVt9y6b6AEV3eFYBMjTXUNdCySsCEAM4rH9rMjUYhLsJyBqt6fgPaQc",
  "key31": "2hxanRHA95d8aoDniXDrc53eYZWvG7ywPyzQeUWpCQDpZnoVS9tVeHg73uMAd34rYab7dHRw7MR294xg7kWNPNdG",
  "key32": "4mSCsdcXruXGQxQzMgFRQBovfp2E7fNbZRm7bHhPPQrsPzm7z2xgFaFyDw5XZPRiQAMUWPXgYp7fwSUqj3jpd95P",
  "key33": "3zMChgnDLYYPBvXdVhyX5w3tFBPX1vcXx9teoVTjYQ948RCZGDHZE1WzyqPxs73jkiT9mxjUMsBNk3fnkVByg8CA",
  "key34": "4PCxioaquVJgT7YSgSEnPSZKvj3qsi8AogVKS9AWNGDnbpXyevabaAELCgF5cTPfgGK6YMF3FaJgmijKARdSpjff",
  "key35": "3Z3iFAYjxpPrVEnbfsutBCkQxf9jimQmQnNtipsQmy1yqPRojzdWjy8y2h5xthsEbNEiQENz3zodLPGRndk2gXVv",
  "key36": "5zac3PsCYRhP1fPpofYciCGL1ZxS3zKBxgBjzmRDM8ze6mBNDftnMiB7yKshbWZLeX8oeiDD2vV39kRS4XUeQp5R",
  "key37": "4JpB2WXwZBj1KX36wfYmy5oimLiNqLyFNHc6nUVDksj9PH8X37xBxb6boHLtLVoVS38TAUws2Mg1iUhQPZvimiWa",
  "key38": "2Hw4X53bCaVYwqNtB7suzx5pg6WkQWFDjy99FzRML3r9t53y53HZJ2nbmMN2iEJKzJfv7ZTtCBjejoT1NiAd6Hc6",
  "key39": "3HM4QxYAKwcbb45sxQKq3YT5VRjEdxyLwjDGrL6srbBhfmjL9nn6UXbGjnX25aYZou8b3cqU3irHrEjYn4KPC5BH"
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
