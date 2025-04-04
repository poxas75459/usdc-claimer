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
    "JmTP1m8TYfGY68URRqRRytmfVwJy9XCoaRXqqnhY5CJR6MB1rY2RACRfKPZRuPqNEvy89odDARTaN83jZi4ZW5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X43vRdrAeQQEq7wfUnepEkSWsqdKq8ekuPhRX9YqFV5vH491aiSgPSgDNDWz7D5kepFXb1Z1qHpVd6SWDfTq4a7",
  "key1": "225MpJeKSwDZaAvmEMaekKfrhjBNzx6ihLsiGcStgVgcoMzttX34pp3qf1jD7CJorQ8VyQriqrWY4wFyM6EVjvhh",
  "key2": "2CRxDjH8NrgwgsijUgaNgSgv3rzs9byCJZQrzzToaDpv8vsKyAkqYkXiurgB832iQjH3RZyw1x4LUjjprHE7bZ7j",
  "key3": "3C2i5esN1Nn3Cfu1wXJjaKJF55KmTbqb4keFCmCXCHmeMLQED53PPCvhKfpZ3CBJPxvgqNNr9UAwnPXpgaJJJG2d",
  "key4": "4HWk9fVQTGEbQ7Gn8avpdc3Z2ZMJw2W6TxhMmhBLhSGP3m1ran1BqugsSdFdCYXAyw9JK6523Z1AQ2SRoPy1ZsVw",
  "key5": "2yKNdcYNXtavKLkiUydZgdntx5f9kuRamFArkEFEymfsoSC5tUak323ghXVNHqGXt2pLBZUwjFbn8djACeXmia2K",
  "key6": "5m2wajCRkqZXoAG1mi3szu58f6hzN7CL2cNPH8LFTTFp61uc5ErC4Pbai12sdrpNyVoyT8Lfdi1FyL3xzPAavnYV",
  "key7": "4MYC4rzfpRwNvTK7EE4cAuSMgQjZvg4T5FA5ugoZSTBpnAZ9Js2H4h8NmRwqr9rFN9uqg4qJf636XXwCSc6Ms1oN",
  "key8": "5gffBHPamXStoo1tsAtJPggDqD38MmZziAmjm59FGEFeU8RvbW9mnbiaqLHdZvugzFezWcg7JDJBy7P28a1KuYvk",
  "key9": "x28Q5Tz9864so5xrRqAwGp3679otLknrzrqtNd2Z9Gr7D4sH6cmzLXhQXe3c8pNzXvHfNJNZcuyZf7JqJBDUzZa",
  "key10": "51cHH1z7eFhnvFitD7TQ9w2FaL1Q7rZ5grMmuy1BtAP1eeqhXyyBKKAsu4GHqVLXwCJBvxN9pKHmCyWArNCbG5W9",
  "key11": "2ToJLnZ7EHeXY2XhwG9NrNYRDw388YEVmdUcJgU2EHkyxzw7wXGe45sieXWm65n1G5BUsmgjTi2dhksAL3d44tnp",
  "key12": "ChYnWgeCbM2F2k7fnCdMhLZUPkY2G25FjVBMZ2rxgWeTZTk8BLz4bCtjCRkH6YasWzgD4xfMNdpvmQqQFAywyDw",
  "key13": "2d8aSjgQdXnNaycWi5h5mzEtxqZUN6GsDobxqfRDmwD2YVGcjdw6P6apAd1UEmthppWnEhDKTDHzCWthvDbWRGZh",
  "key14": "4VDkeVrhjZxVChWpFGHaeMFtE2KxadxT8kUoCG7JMeyMb5CXiADocH7Jffyttmrvago8Aods6Hj1Ky6cnjoWGcAw",
  "key15": "mh7gqCGphdn7UXyzpTnWmFKWRGpYswC3H7jXmFHSoEnaakNGe4mVP5dM1u9u3BtNir4Z5dXYZsS1x2LxBxB6iN9",
  "key16": "4B4AEf6g82369GKKZ7VS53j1A3Zo7RqXusfVSfUMF1aoNqpFg1HBc6EkQuTMpzScVnyhfS8ohp9ZmLxPP5scvPzd",
  "key17": "RjE7CfNKa6GY2zNpYjAYooCZXKAPEPtyqfRByjrhHq225RxpLu1NrcFRGFAE4MhEX19WYc7tsmhnF2ZakN8h42Z",
  "key18": "ujrpSvSXFSUgUfHRDV6jwpngxwtkZmkZm9yPKWE1MeAUhfTo9e7mfVogdoc9ruMUUua7mpF4vcb33uEJS7bBDVY",
  "key19": "4z2TEzQCBDn5SGfnZeEKm97dkiRPB6pW6JrvmcDnuVocV39z6Ln6kNRaAZCS53PZGoFA7A4ZuvGzdzitg7v2cWz1",
  "key20": "2qUuwSUvuT2Qy9BwefXwUgf8DoEGHXAVuayvQhUrsArhn2XGEJSZ14RWjc43czTmjdUBWrFbeTtRLqNZDpx9nYP4",
  "key21": "3JBJRnBQsoKg3ffj8Wx5QreNZo34Qf5SASxzWGrt8dXeTKDdPw7RkwiR9AGASWCgwXqujCsE6kDQZ8XC54rdi8f8",
  "key22": "2vnRiUwvkP317Fp6JMLkGntPeKmrdH5YEw526MdXM5NBApxRJ8wAFS3zpKA5P5YZrW4Rgm329nLm2AhcEDcTmtNE",
  "key23": "8dNKxpKH7hNUvZdRdg3e1SsnHGLN3vQcKikhygddVrUXUdzeA8pgJiN3CZDqwwU4RNWKNENQqd6oRiLa2TBepHa",
  "key24": "ARGB8B4zHB4tUm8ZaaNdDQojUdV2F2vxF6XRCp3YR3d4VHd7cci7QYM571NpQYd381EBqFi1o5QhGtRd6xmCUze",
  "key25": "4jK9rG75UEwNMeknzHAsdheBDDc8AHTQizxTi2uZX3cC4sJBZ9HtRQ1tBaY7yPAJ9cfnfz9fhm9NxDhvj6rjFqZJ",
  "key26": "RdbejWSoMZPGMckzNWSxtZewZYEGnXyHBApbCnjNz1PKxbKPDD8r7G293fDmbQD8s7JKyPbKcFXA3tBfweQBcKV"
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
