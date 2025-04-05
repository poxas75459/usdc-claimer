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
    "2Ztx8wwcbZC8jDtSSTS72WToyzEjs1B9UfCBbpc391vFgyCcYW3iajERFmyuvo37ecGZVA8gnQudyNdUxpfsVaAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ixmKzVH4sc6udWG1Y4BJk5ioSfE2f8qwCRW95E7ydZGfjmfREt2foh2APbK6NPrvUBuv8DzNahDZ1d7o6YsTiat",
  "key1": "2mBx9r95yUZGymhYggb9toW5reepHvgN6FxTYWKtPrd3UcX9n8L1wF9JiQmQqBzcRS5hTAGjRjj78GShpxL62Mi7",
  "key2": "Z4rNJ7G2e6LbfGNX6ZUZ38UhuPxnnhdb5juYf43PQ1113D6GdKHeQ72Xd7BiDNzYegjTnseFh9kE97xjKmsB64y",
  "key3": "5HMu43YvNHTgKhjsddwwnxPviGMWEsNgDC3w8EVjzvaiaNwpor6TrVKWzwfJnkpSzt74BvxE8drHvk1PBYzk9jyr",
  "key4": "4RycnzEU5Faky6zgZAgZRr369zh4o1c1vbZ5ieeTviwxqD5PFXtShHGA4qNf9AfibHLJaYbx1Qb7Yj9ZhkcrokQB",
  "key5": "2gGZtcWqpfa4kiom955GCmEjk9mFPCaEbkwLBU7LwRZCbPa51HaUUKSnBorgyU4CcNUtpK74jaM7ZMmHJqPxTaN1",
  "key6": "2tgRZAyFvghqfWe57nKbe3C2tMu8F8jwAzDoG74WNqL5Uipqixx16QHNcXyGS6VtMJitkjnR8RbwtSAWx7LGUCg1",
  "key7": "4LxRzQg69NoKYV2XaPWYQpvTyStEMkLXudSSJtWkWfpMyyb31GT2F4idRG95SrdPdEKy1GVP4CP4TYq6sst5Nm5t",
  "key8": "3NFxmhc3wSECn8PxDhgLkWq7cstJ86Mu9AAdWCGfLPZC6P67UXnXvy9qKD5Tat4BwjKVFE6UUv9RzfPqUqWpnp21",
  "key9": "67cHEQisvqrwV9J9VD3Zpyt6hvC5sgCQ4S9VByfS7EzLsKJEBDBsMg6DujVY67GbLfBUvHqFr8F8J8fgfx3V6qHa",
  "key10": "2JawRsszGYWuzYHsVT9bncfTeqFNgbV8m3aUXuqAEP4Tpsq6gyDw2AaA3LM2VviNBqNTZGhv4wm6LdpFnjkATJoq",
  "key11": "vU2pfgWGZCT5e2jUek8X2qgJCip8zHHEed6ZjsL37rFJFz4UynYfYXQZUz4kMmLxHMvX7aVRMuYd6PDMenT1JXM",
  "key12": "2YrQpsZcrLkiF8UbCkE29VvNMcey1YaUo4E4SgUddBtbKfmYzUqjtCZor7JLAMtqiU8D4LKKVtqW8gHFvXtcuS9T",
  "key13": "67JkQgBq4npdrubL4zuNqyn1d1S5JnZkqqYsm8DZDKFBtVwNT5VdSAmwLzzmzvuu3R1jEzojPKzYSq5K9W4wzmUh",
  "key14": "4wpRcmW3rKPNYyhaHMF1FnMGgnZLcGj1yFqdnFagicXtwUjtg1Rs815CHBSnjmL7FUgHLPZjqMn44hoRnQCm2eY8",
  "key15": "54WM52yoSETaYERKt85F1YdyDPdTNTmqUyAMuRCudttwTdhH1BTkYAVKP5nG8u9bgnVCTaShiFnncCZsCpfkePs5",
  "key16": "4foECS1uJBePyU46JG85q9a9M25LD7WggAcYLrgr78D45yzGj9T64pVbzDoxQojTvaxLexNphN5WuK3sQ6wQ4KjF",
  "key17": "325rxXEDQ3a9ZHogGYX6UHNnMyATKZo4xAT8bMgvy4AN1JNdwcZgAgvju3iA1du66hkLQgnt2682YwQPQyCk6pNS",
  "key18": "4UaE8KHJqQikcHSQyxRj3vLoHhbeYCvTBCw24gq33EFurwih8XZQXFszyhoGAHyBbB6JNU5mfPpUVZZfrdKfcGjv",
  "key19": "2Wv2jPSyfWUTKSpK1GpBGWQo3dGQiNATvfL36fLpvWX8PRhhc6dbSeYy4EULK31x3LT7PKEcXC51etchyyRiiTh2",
  "key20": "41YHkS1dtFgK9qg9dqXSwJQVgXNRvReYyxomsjXishFrCrH3eChUTDnmU9HUPRk8SH6euepM73HJ8apga1igVrMS",
  "key21": "3MGKUdMknSB2j11GPHnhiqzofm9VzwbV1p2dYLLq1b3Rmqs2XbfKiCgtmpGwFPhbZC9BMmiXEdKnhWBxr6tm6qum",
  "key22": "3aJR9KkEcfnYwX58GfVojmr1Bb9CqWq9Mpnsop3ynL5HfH75ZyhtNmdE8Uah3qatvaJGFvYujuXzX8jWtqNwgxYW",
  "key23": "44L2zxneXLnu7NmZaJ52TJQyJ1UfdiXcReLPWTQoAPrs7xFBQtYnkPsY2N6eXo72EtmTkAUDtBwXNxmsm7nnr3XS",
  "key24": "3K52cykoQT7e72adpDG87tXYagEYFbj5CHoqdqfmjvXyBVUxsVy3A55npyxbayrgrL48hXURuHSJU1s3Xcx2n1yV",
  "key25": "3gtBkBcBbcfimHwDTwoWSkEuMTmRYRxyLYp7onSTkNN5aCCwL9Y9vByy11M9yumrNW6EGftyemZqAchuCHdRrd19",
  "key26": "5iJyVh2JfzEM8ZE7rFaCAeojrNZc6vXq7EkknbXCEh5Qj8kRhcTzbeQ5eGHdpXDugRxhjTSTZWXXXWGt29z4UMUR",
  "key27": "aaL8waucFpiKX2DQiyR2mdjoiidQfbVT21Gcwv5ZysQjvGPcyDbVZ9sUnHTrH8sA9nNR2euqZXu6WXzD3d7nKuJ",
  "key28": "4cDNgMwfDzPfErSLWbepris1uM33PhTbyMUvHKTpq4fCFWrjepSPJjKcgSxUxNV8KwLPaYqEb8WBs2nwHo338M5N",
  "key29": "2ZaYrChQgedqSXjzsVDe8RsdqavS9pU7DKGsWrUZWSJ9uijckgCdTjwoaAY7zRfNCKwFQ31wwA21mi61DzYp5UMo",
  "key30": "K6U1BHspNWCzYo6HXjnyuEV527DDPQ8JkSGj7XmAvVxF87mbpEAj1JNm5r6dfhyAQoVzFaaK3VAPPv32tXRCMzv",
  "key31": "4rGmCXeuHdgxKtwQDpH89wxs6xTM7oQCx51rKonB8r6AapW7VPRSACbX2sCzxLTej7NePyy2LLTiviGqHbQSXwCM",
  "key32": "5RoHTXSt3FexmBHgbvvNKSXotgtFDZ6iPte8q4Mh4k213p8gCtpNajcqvv2Jcqj8obmUMHMT23ZwyBAt9ZwxLMqi",
  "key33": "5kZFJAKaAMyPSg9JqWmJUQj7oFmJX2od9hNezB3he4ncUQ8t1xPcZE9AtcRCXCsKRudXVgFJNg3XmKv21SN8C81D",
  "key34": "2JNycaZeMJpGw7ALEK94oAfArLe3PwbaN6yDjmQwx4LJJGBv7UTTiQo4Coz1kbsn4VjSfXko5p9rPBxdLmX8qB3P",
  "key35": "63HEmWvWGFNPygtDYoZ2g49wqUmBYQuNZ1opm5tJk5Fbg9Cyu8c7gSP7tYQhD5yfQzPFbqTTuaw6MHwzVsd9bfBf",
  "key36": "4iUoGcD7WTS5C53ohDkZCdstpMRGht3knxkMmYgXqkQnhpYZs9T758TSQjsppP1CxhAAF3R1FowvnRT376QecGUF",
  "key37": "5mxaDwdHcN6VsZZoRDcuEo5jQspNyX3RtmLbsfEWvAxDzpmtTDxUHCRFAevcFSv5U1aTMCX58dHz2waGJmTNAV1e",
  "key38": "AFpKsAm5tQqWZtQNz1mCVUurL9tH2Frp1xLY9dBGHChgCCw2aZNaipfLH866onDP7urahhULGjYgzb6pPXFk4Ab",
  "key39": "hQdCSVyHmc1Dmj2QincnWbxEmk3EwMku5Rp9KtzF9ATujETb2F2xBpcMtZG4HUE53o36vRP6mP6BP2RM18PMpap",
  "key40": "4fj14DQQjKVCFqM9Mbj8YKVA2aNkqLBRevzQxY4JxLToJP2EfPrRsY3sGf4xVKdAqQfbsvW9ogJQTs2xMUnqtN4s",
  "key41": "2BfWNWawocYZvRuisEQzx26aTEUm8MsuDzLfHux4ZnF1rGYgzudVHVqAgDMDH8dPsn3dQMbuXeTKW6RNdKKBs1w9",
  "key42": "2QFr4cUbdAoDWQtg3oZqr8kHecZdSJiXH23tkawK72N5dnkM3uygwgqSaXbBuCqoDWVEZMyHTwCgzLsPEav4u2tw",
  "key43": "36SqyN2Hc65SPsmGFLFqHr5exJE92KewT7CYfy1W9tnEvioPzmYc8BJoTZg3kwJjN6aoFdAhCGXdeCeuQmn7g4WH",
  "key44": "3gUPyrZBtcxPRZEMdqVqMd42kDaCYfVBV5zKCY6YVcowA4J4tmdeWGhqPque6287JfhBsfXTJYGvGa3nNmmpBEHg",
  "key45": "3z4uMknD4125ESMk5b6GP6W3ASP9byPp21dDiRBawbxLcCn27ka5yXqjM3rCqnwVJqyUzu75VMaXHLoama1d8XKL",
  "key46": "2qwMLbFzzvk4YPHhZmFDHBm8xftKGdGVrSW7NxAbG6amJ55eYj6BXUQ4nvpwA7b1Vh4STQmpkPcggHpDUctZxuHv",
  "key47": "2Q35MHag3oCNV9CMPjjphL3rCCi7e25AtUjFwRWxfbZmacSgi58J5mmGbMnEPnVBtWVCJRZpEhtPK7cUCr69kWAP",
  "key48": "qad36hSr44xKiZ1KknErbExw4DXH4yc4UVTKRiV39aCjjxH5CYmfxgFBTAV2JVNScBam79x4M8Nf4a4G5emrY4o"
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
