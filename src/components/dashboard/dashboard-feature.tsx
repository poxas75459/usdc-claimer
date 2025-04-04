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
    "4JRSoZNtMVkqmnXc9YUByCBov4PPi6vAVkJ4XWCBRM6WNzZoWW7bB6pFxarM2DY5UZE6momgcYZQHn3mfMUUYzKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vXHvp2N81Bpz38CLHnw8z8pgkSY9odAX3g9HbDAHpxWchuHyLDmCzjLcnnrrhveH4vhvDu9djdr7Bnc2wEqsePq",
  "key1": "5T96DACBkP6KaSfnGPxf93KCibDG49yrJbnzo2sExJfP3o2xBkUR7aq2V1xeGTwyiBgScm5B5ksqp2vKMtz5dniq",
  "key2": "xy4Yu9qhmUyaHXHSFatnkvp2MuCAgwURCArFDF9kWBSUUu2X2av9dzuSgfnU1q1omhERwWb44qiGKGj9Cjj1KmB",
  "key3": "4vpScWXCrzTxCGbTaKjeguSwfuH6kYnv5dtDe7GUHj6xDbkiouZsDcU5BhxGFJMvjqmsWsAtHwh6hZ2vaAFJ26MX",
  "key4": "rNtrgeRRzgJy53mqBVLM7Hfa374jx5nvFtVTpz5BhocbgcBLiheXhDwNHrRfD7ViX6ALobggkgrz5jDf7znUEpM",
  "key5": "3bjwoRQitg3aHVtaDoQjsCXqdRNKaxM5KQXhbdhbHo9ydcYTA4s7GdgkeW7Uv6EpueVXVfm2SUJaCTaFbC3wVmbw",
  "key6": "2huwkdYDtUC7LurRpxpAz8G17Yj8ET1QeLMwdav7tG254xeovNmaisvQdmr4FP5akvmZcmA6hKWaG7JFvzbypkdX",
  "key7": "5gH2LtxWh7iBEAFLRXRQq9vgG7hJJHj2Q1MrXHVHGq5NWCGP55zBywaYr56CiqyeDfpzbciVCe2Xi72vrFaGe75S",
  "key8": "3V37rpvmXjWhLgzdh43ibf54usgQPpXqmD6Z2V4pTLTj344xyU6EXsRnL2CCYZNyYduxpaFsAvjitSxND8D9HR3y",
  "key9": "2Ek37VrGcta5onEDzZ9zmaW5sWgtF5QjAJE1eN8Vp8iJztbrVydj4WzPiC7o4zasiYNogoAwHf95ZEbR3U4Hsewv",
  "key10": "3LNrf91HeHcdJ22r3BiHZhp3Df68eoYuw28HZs6bM4ts7TSr4AKPJa1XvN1e272EeVPgS7FgCV4bkQdMb9McecUN",
  "key11": "5Z4yAR4SVAVN3p6BKcG2ryyGcMXG8FwBjMAippbGkSgQpN5f6PzvhXoLAa3Jd83d3Lo46eWQi6y7sc4UTdfXH6w3",
  "key12": "5rgGzNeHC8znYd2FcSMtZ2te4knxXFWEQSGbsmxSynDhXfPYTSsuxhEPqRXWYi72TAr5vykPvcV45tsnFAcs8kvm",
  "key13": "45WDdKJCcQg561KS6EHJHa6k8zxxygknekDmqdB31V8ujEWroSHrcf92gJJRKsrtFrA8gwN3DkiDGvYszWJNMom5",
  "key14": "5z9tbpcjCKgLBbTJ2yv6aEGx3WuCEFqBY8ih5sKEWTni2jsgaAtt89fXTHLcRbUUD5KeT9kXXzrzmsNizrm7dYwv",
  "key15": "Nd6YBc9v2tkd4kAhPZunaieqr4dVyxVFyZgtRLAHJhUjMPMLjGsJEpsieFM4McUJe8npiK3KxeHXGYUnXTxXg2p",
  "key16": "1c7rNNmA6QDqX7CM8SAypnzuj39CudhGX8Fo5uGeCRY9Bmuwg5ji6w6eBHCaDSaQfAc6AZJPNyb2crAgyto7zyc",
  "key17": "2u2QqdkCPULq1uj96SKZsKxFpW1rCkTnkKU3pvwAVegmCUqWbya59FX6TNP7DcpgARiVuoiq8MXTcC7dybn3kfa",
  "key18": "3BggniypMUKfmsng3mcF3Nr6xzkvM1KTh74G8Q2vKDHtDGvkX3LJMdxCKqXNLt2mMRconrDMUwC2zA42yUh1yPh4",
  "key19": "dXdqie8tsMH99KJ7TSyPssp9EWtMEaXu91Gth6Xn3XfNZp4r2u3kzcLzFCL7TgQScbvUcSaipGTwde4i1u68Gda",
  "key20": "5XAhoajKb5oD6QdZoNj4StimpySaJLs5P3MTGzaogbwKaZYquj44uBQEqQFE1EG7sxnh5k1dxzWW8GfYin9Eo2bT",
  "key21": "4r2acWLfV2m4SxqjFHXToTFtrQUbLduvCGZNAiZejfdaK6ebaShxcrR4THWxFkU6AsLZY9s98rFgmr33wMsMYzxK",
  "key22": "4n49DYAgaAp9dhgZ4YJ3jzJJcrTC6LuWS3ijNFA1CHF5NbAYyuJigsRvF2QEMSr5aMQX5peV3jDeVBCt6ruPB3kH",
  "key23": "122qWiqmGvNhrDdiqZtrhBmgu8AHHNgf9kvYzxCJJKg7K863MFfcU9vionFWQX53j7Z9sZ87MqY7QKKjtdQ82Cox",
  "key24": "VrdE7BAsU2cz2GrHDZqY6aKbMTA6Qz7b3UBXZrr8C9T1Uu6VntEXvsh2skXWE43pyZe1jwh9msTcrhKaafuAJUq",
  "key25": "5StvtNSCguCvqiNqvWczBKB5YjASHcrYKRgosqu8PLaAEyHBA1ZiuQo18L9YvNQa7366PWevLAt24Fq2GeQETa8a",
  "key26": "4uEiSEiJww72AwnUfudD41RsKYf4uDg29X5hpWXmiLaGGtAaczTkMnLqeoAHj2hyNndpPWYuknTXRXwHesFabbe1",
  "key27": "FqV53UvMA4yNwopPhEr1MSrz4gqphZNz1sK75jLKRvg43VGLE9UXzjEJy17uRQH7jP4haxJrRU2dEKR7YuaHhWb"
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
