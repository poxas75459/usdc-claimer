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
    "2NAV4sup3Ash9auLRBekoUQg6Y2MNEgcZYdAGZpFa5b1s4zi4KQsMLTkYJcH2sKqqFPocQgsCzMErPDyYAxbFj4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j2xNxhuEUWbwxMxbUtnu9Xutg6BudmdgWctpuvf3U7sX2izBZ5EhbCBjpKEjL7gwhHjpv5ypb4MbjS6yH3F4jeW",
  "key1": "ntJFrTguwW6hy1TjQGJEThyLaFRHxku4KsqFpPQuuPPW72wQicexrjMHd91C85odbay438VLF5f3a1SzJCvtY9G",
  "key2": "4MCAkkEsPB7GoPUgwZACNmaDBtohtqjj56Z1cdPPTdqA5uvwESGnDXUfHDbB9fYotdhcghEDnoNgBERfqixLdFME",
  "key3": "3YydXijSLtiDcAwbrkTcNvwQqTdbvNevGUQr8FxdhqMPCkumiAWDCwVZK1Y2v5DVoJFHVJy3yZ3Xu6sTQaGyjSUp",
  "key4": "5F8bAtuthZBevJopSsiJbWb9K1JEtzJMj4VDsNFsiQEfzAugFFckifsSBWKCuCTdfGpdntLZ33qBrNLR9Y7Acjz1",
  "key5": "5iw3Ux1XkpJnYp3ZNtEUzthZAKyhVEBQ6fhbGJkY7QE7fMifdyC4z28MCtfvbTT3c9DWMZGhixtN9asad76CtPND",
  "key6": "437WXEwk3YC7bVcoAqL5QfbA8nGiLumqK3qJC5LXWazoGTVTjmL1hUbvBxzDxHn6Np2YiYa7DPC2KGeXxmS3Dpf5",
  "key7": "2H7jSTJ322AhhBPATJmsYFFCN2eVjTYJ9YWm32Uf73TwYdQ9eCPiHnJwJyK2vsN4758wdDfhrFuZoH2ARsS813rg",
  "key8": "5NSi7QiXRq6V3vPYP5do8nDdwuktumowzW2xpJWJTTDEPRombHqKkqDvNXrA7sg1weYz9drN9DhdtGx7FVVBdcZp",
  "key9": "3pZezBU25VRNhVXTZ9jr5yADbPFeYjmwFuXzwNUpiPzFfoi2bWmBEaD5hpthmYrN2txA78nAwkm3QesMc6dyHT1h",
  "key10": "5HnCHKoaP1ShQZxdUVyWrV6WNQtcG2ZAy4tZnguq71FmGk9UeaRgtEXMPDJ9RA4vqYvR32Hd7H2uXAJ1xkXJ25eK",
  "key11": "5pwPfVYcbEFogGRTYcRzeRhqq9up1go1ZkrLVuvUXj5rWRQzbc7F8XVrJkK2iBYbbuKLPucWq3MSMJAhMKYQ33wS",
  "key12": "RpgZ2uxUXpLpjv22JgyZborKkf3Xvtbs8NeZkkuB3cnDkNbrKFMMfcJR7658k26HJfuzz16sWmVghcf8aatcvWR",
  "key13": "cdMik5e4F1KqtwSMjj4PxmPiY3QLLTZhcEqDbUUPWMnGXFskaFEtcJTPTWJJpEgVvsRQ4MCSwcvRSMDzQjTfNVD",
  "key14": "39EHiqoxB9hCLGqLVbZxiGYUJyBGwRdwAKQCGHUZspiAwNfrkEVKZ9TqpYT8E5rtpjj3J3vULETpSSEgJZgtYTnG",
  "key15": "4VWghWzj7JUSMTyrEp51PHtUBksUakRuZ9wAtYttq74QH9mzrXn7SvCLQqUAtbpZqUhAR88GsoPqqD1MqEwxJmiY",
  "key16": "5fqgpSKuoUaDCVcVfsbSd5DG5FNJz5Ugc6cvchWQm2EB1VoCJnFr8Rnd98P66LpdvdfJHBgTvsTYgwJu61hd36QA",
  "key17": "4zAFaRvzvz49cpyzYnKRnXeaKtVmDzKGDKjAV2WR9foN1DkX4KY9Xkr1rxtDKFBHoac5EnfGttwmrd8fC1jcvzDv",
  "key18": "45p5MQucBSzuiJvorKkjBYThsQ7EC6Db6KseU16eeyNybBfvttsS75QZJGWRi4r3siexvFQRinp4Rpafwkz9jcPa",
  "key19": "2Sh7s9gFCu6q4DxP6d5MK8a5m4ZHL7f9e6W6B9jiomacjKt5WjXZoySuVinpsjEPMpTf7u4d6XRbGf3k6MveYwsu",
  "key20": "6erHJJPwLFAjLnx58RaZY19Eu3zDHFfvv1Pm225rh49FBAaBMQBnWYdySQ3fnMxrtTKDwHTX44hNWYBrCVtptB4",
  "key21": "Ht9e44aWnMxRtt7msf9dXttdCDzSnd4vyotxUdE7J5UaEUQWh9A4p7YHBezBPzmqU5LqomWNZy1nsD2zuVkGgDP",
  "key22": "66Mnni5reqEZuv3pjvgJyghvat2V61ig62sXfEZfg4ACYUKvz68it8dQyiYC4dcES4UE1YJJGRRugBXNfmVGyneB",
  "key23": "2H2nZNeQPms3B73dzN7FnF5c9MgV8dpfqNzFYqJBSQPbZn3NiCjjNfg4yvkufNwqjsXNYnCG2KbwdojbtEryfKfZ",
  "key24": "2GqD3ajwKJcocrscdPjTArrVgiMRrgg6UWwG7y1Z3DFyEY9Y4LkFgQ7vnrEjZEMw56sswTizz76inAR3D1nTSssL",
  "key25": "8SqedKadiHbP2QNZWyU14Vea6Vu4hYbwAdL9HPGf4K1k9rJ58KsVUovoQD9oSmdz6CCMWJnu6qaUfDfAuA6WfsV",
  "key26": "3XndWCGtiGLGx1pYWa3kFcWDah3zymWMb2qJ79aZ4BVDMRw6r6xbc7GxknFZX3SwfA6TjsbPDumNDb39R2Qk6A1L",
  "key27": "2LGgiu1mwgJVsaWwhK5cfsokHonAQjpxFRMtMzdjag2rLgoSctKGnk9UqochaHFj3dLYbXFzwVFhqqZ7qRREXUuH",
  "key28": "5fmxVKK2VdocvpUwuYktpLo3XEE1TUibLNLo8uZLbThbbrj2dQyX3iHvAzNQyGZFNR6HGkdKUTJKK8mXc9MfiZs1",
  "key29": "2XCY1Ma3sZuqYm4HQVZXneGAyEZ5XdhZL7NE18wD1HwuTLkaTPyEe5vqGv9qs4CoHXXFVTEZxGWSNLKaXXyvxd9o",
  "key30": "5rgkh2tZSzxvyexsB7nmy2quTgUzBrTzDmpz9jM3o4tQWCuRfUACSTMJgoDURrH4aJ4hP3c3NJGiXhFNCfZWGTDf",
  "key31": "5RUhxrio2Cwurz6giEKcgV1uqR9EFtDutbg4ZAbQn9Kkkx69c3dE8HquB4N8H3jvC4DiAwLt1rdTT7FLVn23Nt9y",
  "key32": "5KBeCmU3b757LW8pSq8uv1dTdAP8SwN6XYaUYQMo7xU4ncQgt63hm8WHaK294KbhvNrTruhh2xWyeToNhFogTKC4",
  "key33": "67fUEMA9gZnGBYXinB9TVJ2VW2ZMHdnuehVrcxhQkWsALuRueXqYcaif4JPe97qM2xih3T4MkfV5dRnTPBy1RUPi",
  "key34": "46XKnuC2x1abzA9g74r9odcvMWq3HYwe99ViQw8hiEwKDBq5WHMUorHJrnRSH4wKi4Vu28pGgbx4C6Ak26hGZ44j",
  "key35": "n4M5VzPRjcF7cEN2YLvCdXBkRa2yjX8ec2LwgznaydpUrCFC6azDzLqrj5SS8A1mMRhiDqZywYrYkBU4xx8P1PY",
  "key36": "g6NiPLz8JgxKcyWizbHRcmK9hkjQzU4dqz2AgSZnjmn5yKCVtbsjpwb2XJqhXkRCmQvgQuqghqMCEA7maWaDVwK",
  "key37": "2vMKshSXnrFu4oEjqTK6CtSRnKMtFHE5KjQaK9Gxm77PXZiCdFH5Hyrp9gRCzwQJskL3PKwfqymyWqGnkjehb6Zo",
  "key38": "4YEXumcJVCdw5z1Dkr3xnnpQ3x1EYzd1c7KL9X7g8wpBi8enJ7K96RuP9BzX6wLMW7JRVJwPfLPLWrECj4WbuoWu",
  "key39": "4ff5oGLFAtCs3z7Vu5J3xujbyKQvxVSnMXeEjB59E2BBZPnDryTNt6L2MQ52r6W1vxeW8VFXoXi1pVqmdj762thS",
  "key40": "5KUYPrqwWe2cmhGzthnWvCFfViQoaYXepRDRbr8DLh9HKzbQXFotpvdJjrBD2UGK5Di9PEV9bwneSAnchfEUKsTS",
  "key41": "2CQvCf6YctpxBsur1pVNGKh9vUBvSWRcRgQEoR9jGcVe195CsjAV1f6rcJkaN8baPak1ZSh8b6Es1xpmjCRkDRZy",
  "key42": "3kiFefsJytUkUUFas6ps8WNGv7iKVh1xofRzz1esaMQzQdVypZeHQwCj1rwkYptEHHJreJuisoJRV4To52649y6p"
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
