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
    "7YTRCvKmQzb48dN36XsimwUk7EH4SeBcmnKFCHmzUrrrnQ9ca2qScDt4yErsfLHCKnpPRdXxEPC8jYdE52PuVAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fz7i1wS27X4DVuKnkVoU4HPHgc5wr9X69ckQh2tJBDsXHRsN2jvA4MTREjTyjdsEiCZcSHFeP62npvpFpoZBdPR",
  "key1": "37SoSTtwbijnhyvGgwmT5r76kWjU8smzFSvJDb5m8zCSHUb9FLLGuA3foAx2brtBDKMmmKPZ6j65KqrPGyahUCaQ",
  "key2": "5JnYu7UiBQ8sKYH1BFgox3YaDvExdBRVDkHTu75tfYWCU2YTuShUEVVbEhYTNbJb3RmfF2mgC92fhv4SDBLMN2gd",
  "key3": "5e2xUpezZs76sbnfHQFE8hwX3UrysZzqD8JeX2f5jGDENTB1q8czBGNUT1m4y5kmf4nx6mzwWkEsQJxPosWBzFN3",
  "key4": "25sLeVXeQQi8pD6uWo5TeDTwtR4F8VetsfbdoKRdUB3iFfqXPR9YTgSDtNTpxhmCBa7hY7Cob61S6TYRszZxRGU5",
  "key5": "5kpUyD4x3dRXDD1eYcLAc7t9qnFpmgwfrV8KykBd4uXn9SEYg6nHAAw86KZKCEEendqX3vyQVukkmsQ36kGUvzLo",
  "key6": "31eVAJtSFCRYvR8zako75z3w6xPrYYuD1oi6pKsGrjqKXCbRuFmKwSkgHHHrFP96uhrREbHaSuDaW1ypzZbmsQSW",
  "key7": "6dmx3z7y4ZsqSufQreoNZ9T7xLGdSAJJc6xXA8CGiEAPDsfocBVebfiJE3whNv1wXNfQSzoFxtZa7arr8Gtibij",
  "key8": "4QiDQpyCXA6zMj5MSog8XRLptjsJJi6aRE9nE8rb1G6sCU6oRY4irtFYBvNBwpbHc5P3eAcDwdxGdEpBYPzuagwJ",
  "key9": "2jCJUBG2N3nDG9Lbbz3DtoGqpy5cqWsnMPii6dm63u3RWWZsmgYhsypxHgXH5Ebd9mWjmFMqtSzo2Sk1DN64DBkZ",
  "key10": "25Bz9JSseEmUZWWb9AYFMS3QrShuZPUFLamgHsiUHF5B7XqsfCA3uLWSWL9GNEPCMMjMwgzgXTgknSo1FaJeLxsR",
  "key11": "5QyavWfCW4PvXBLkMtaVkxcEzdRaHBpbfFRKeyMTySiww2v8gjF76payTryJTSR8cj7f8uKdrH8HnPy6bik4NFdD",
  "key12": "4gKvacrfYwJ6fbiv44j6wrfSL9Xjv9RNmPMQjdZ1wvEqoJiKFAyH4wcyhpiY9uwRgqGjMrrxSixXMrb3apdhVnpS",
  "key13": "2JTX7QW1iELyBTHiAbAP3r9JwA7TnhnySygdpYkot3JS2SwfrZR7qsSS6F63L9VAHrMsxBdPFnnP1LXpC5BN6uFs",
  "key14": "XaeayFkcoiTrcwZTNT2SeEZBo6wvbWTV4zZ9YoUrkZu7VHHUg9TprrqkMcgnoqXHGJzUu5xmAybmJXm4H8B6G9v",
  "key15": "64itWaVQ57yFAWCQ6UtiizfWN41w6XwJhHHkahSzeQjQjk17LDBExuYch3VMPzUG7LaKMmLCZ86HDbzsaJ5uPTGg",
  "key16": "52UsDaogLjQpctYBrQJSWaG9mZ13Bc6BE8nEFRKpByhekpQg1RXqJdxafWZcnwwwaAnrF2ScANEed5bDvbSgRvPA",
  "key17": "27pDFxYx8VLQH3SZxEJhTYyJVGeG5Sn4i5rKQgMhsaeGaYwkJ1D4xAqEWeaxThJsdTRmfGnETjtmTQnYCbeLnyf7",
  "key18": "3dKJ5nDRyEkGzFA8nBtunH48XWbAbcHPWB7r8V3CgPnyKGDF3XQwjCQnx1GVo6VupmCsKe8MvkfBS7d33WzyAkgt",
  "key19": "3Jy32FysdpGzqkyysYMMX8qDf2Wp5NJRmjbgznskAjTgHybm3x63AQM33kYKrsejfYRBXcVxrkM2HzuLxwDX1vui",
  "key20": "QFyRd5BLDL6bHh9FjEgb9CWpdi9HKQH8mXVJjPH7un22nBNfrrAAVEUoww6GCLqN299CbRTGHpw2ZFpBb4ysG9F",
  "key21": "2iefyjcmAUoB7dJDN1JgUQAU4t4rSAYL1CdpaC6QkF6MortGAZKzrHi9uCbKoo1cT8NC6ypYiZdr2u3M6rWSYC5o",
  "key22": "2yu3fSBQrNmNiRWBWCVKuyzLexjvYpQyubh9SiVTYPcqbGWnhvAiXhKAcHzQonsb6Db7TEYJdKHxH7NdBkjLBGd6",
  "key23": "4zi9GaNBh1bCUwFfTEKDrnGFsr83UaQYWeuiffDPBqWvofCxaYgLFmDkka3yFnyNAXrUyMw2xkqemUiFA13wSLUs",
  "key24": "21dNa2r5Y7abHw9te3o9uxymnqFZQFnpN1ZKjiAosrNrPQ5RRyAZARWUhKVJf6zXJd1Wz365mK5wMd7AM7XEJiBK",
  "key25": "2eep5zvwMbgVb72Uxqe6a6w94VtSxdxrQoejmAM6CtqrfLdc9CTjPM58U5FxNeerfskpDDmQAvhwagDJt63mj1Bj",
  "key26": "3sVzLPF72D6PJiLdHKi33B4xrfBqcriSVWcy3nuCRQHVyb5uur47zebF99vThPzLovW1TWxxjdjwtG3GhgqduNPr",
  "key27": "4DyuujVFYBrt6sfYBbmAsKQ2ZSEbvS1G1QyaU88hn6dJMakoyzAFHetx452WgRXQmFnAk7AXsovqYXyuVY9Wiojh",
  "key28": "421pxsqHu7FBxfJBN9z8SdxLQZzQAkmgEUz2wZCNyMxgEnK49hVzX3mvK3ois5WeBAvwfW5dYZNNadJLYRExMWVZ"
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
