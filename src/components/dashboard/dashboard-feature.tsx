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
    "3G5GMDuQajUHe8NrgPyGvhnUKDJ7bPJxJJFb7symYov9WzUSYo3ZaBg6nzKWGjvr1DoYWFyy7xG2X67FtqpVPXFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zWEyYt2faE4zCifwRQmmeGQ757odQk7FnDpCsTe1S4JCv87ceJZHDVRY5YkaTH5PVS9KisFpS17PovRhfx1vHd7",
  "key1": "2DC8sFDZJ4JvqEwyc17ndVt75SMaxyAxizbATkC8wZF6wD5dYCPRdvMtuvZuUXv6aLGvHvJ283SQm9YH51SSurom",
  "key2": "27eqgrjU5dkkEnS7RoeAsXe8zB5N6V3pmxsdAQsrh7MrXqK212E1pkqMXjjh6b9yttX7aUgM8ehiYEiMa65b6tJE",
  "key3": "672QrZToMoB5UErEhkiXY2Qxswrc3XJjhBf8KZVUjpuxuq8aos4MMZm1H4i3RXq8LKgkQgrBLu1EV5buSx85oVvD",
  "key4": "5zF1sqtt3uXE79kmBs3S3ud2xZEgghAix5nXG9r8bc9eZUsWdhZXNBJm6rJJwxWVYBqAECvYe51LFjTZ8nJ4WR4A",
  "key5": "5QhwsP6tg8oc4iArc2kfaTYg2grLuckJfRCsBSEgUhwkR7vKrp7BjRLzaroL2v47Dj7nKb1V2oiCgHmBBQxD9bdn",
  "key6": "4T3yb27jtPQUUSFT7AU71QQ3jy4EarqxJ9diySTiUSmdvsrB8ZqaPxe9eXa6Hyx6wbg5TCJLdgSZB8wT7u6k6jUG",
  "key7": "5BmYqBHgmvdMbs4X8rTDXYGaAXKyPRVRmiZAEVELCtq98YKC5ABBZvvQHJS4rTuvVMn4vgG6aXQeDeiNXZtQYNj4",
  "key8": "4RGqkv2MDS3wuyXdPmozZi6Vce8Ljf44LDbZpEUueb97e9AEZSLd8HJUCin7M6MT82mfdonRj8zF4p3fCrF6BgcR",
  "key9": "YVScHKci4FRgMnYV78iDMaTeaDG7TTLh28KuJ3spEwD2o19swQ6qGCwtenVUiFx7ChhA4s4S6boEdVruWUcGgpJ",
  "key10": "53qki1cQw5J4Q9TyMxt1Dwgydpsqsaxn6r4YyjQVGM32S8ALUPfqnRSVbbVwSzJtvLVzUNkVEhjdnwrDkZGBoFGo",
  "key11": "dnRN2nGsmExoYmdGxRu5FMP2mXJLMS2FQx9sAS2729XEPd6g9n2FGBr5KGKGbcPc4bes8RWeB7vkqT95beHqHt1",
  "key12": "39gYCEqKjuQwQLXuV9feebambGbeQUcpjNfQWYxFzd9scRP45y9K8mrcneiT7sFHDsM3SKW8gJRQeu7iYCGZsnP",
  "key13": "4MuiWQxKFGgFZXFgrr7Hi6vDKueSfDepZKsWyXAwBgv7rwZ3YSmbZxHgZ2RVCu3ddv6ZsH3fYcwVu8YZwcT3thc3",
  "key14": "58dTiNTbiZnfG5YpHBJegWjsrVL6FME3Xu1F3PNpJMgBGDsKqi6pSjDjCwjhAfXKuLYzYcZY8Gsq5AL3ovxDzGxa",
  "key15": "21oeoKD4CDo2Vpua3PMde483S2tnwx9QNGhJV9Zwibp17NKh52Yk5hshFw1AnUTYTPKfwJkGqWNuZPEPxasw9Deg",
  "key16": "5FhbJ1xExuW4hvmpZN1AGTG4yA7gQyF28JjQB2AhKMQxcnsgX1FSBBBR4pxTzuqcYcAJbGWJwoM3GLRtVnA9Bw4S",
  "key17": "bJAxQLxMsSkJrfgVSjAktuF4mFJZBYCx4uHR2tTTtPmxJ4ngNv9XWN3BrpesLp386efsxaeRYo7Gb4WVWZ9G7oH",
  "key18": "3o4nKr8BSV4Kht8EEQX6SUoUfTLEQ2bmHZiegWinvVEHj1z3dVFrF2HmEzSrbnn8rYN2euDJn1p9iq6pXEXB26cH",
  "key19": "5dfaXYB78WLs9Y845MUNaD8Kdq4UF7Uba1o9bNU7xtGZvv3mH4KaFqBGNz1Smnjta6GJWHa2a58QXdQ2JS9Bsr28",
  "key20": "p1fjMrkY1i7JRiDXustJD8sRDr2Ldg5G4fhrUDokyFX3wqbh2wvufLPpmPzS1t9X392VtREYgLBadiWPWJuXLA2",
  "key21": "2vLutJ6jJpqukmGdEMZtLscKBjJNKVCNYzBT4GMpiwnm9MN77SkpAE4Gv3QG9n5uHfuFBDQH3LzwNeSUVyy7nC2Y",
  "key22": "4ieQx3Ufx6BisxWiDftXULmtRHxdHTEF8wePbtrtU87fp3wU3bui4ieHzrMB8hqF5znxJXArt9d8ePNn4KAbKPbV",
  "key23": "31S3XmrPp2voCa7bTQhg1UnEuEy94pdqxBeovsoncjTHgQxqBfPLwxRi6U4WvvGNPthJJ2AJX7bRf7XinERQRFKi",
  "key24": "3dWnSwTBE96Ro2HDQffiCjePcv1cqdBaqy1eqQsSGHDzvgXsWkkMWyzJ7hHyYPJr7tN3YY2aAe7R42pQhGbCQw38",
  "key25": "4yvoSU7H1xC4keH7JYDDDXk2jNh1hKxAHvYT687qRUFQNXzcnCahuGqnqTNsetEWRZuHSHEPBhkBdUZSzHT8zxx2",
  "key26": "2wMPjBtmwhY89BqdxsCgpUQFUbpZQ7nvJMiBcpUNfExh9YsiL16niHf5nXZZxpp1s9crf9Rq7VdRvHKcohhhVKn2",
  "key27": "548gfEFKj6Qj6bHP8nHpb5r7MJShBv7LC6iGMfUSw1FkDiMLxvAD82iEHoNHxxoLuSAh4HY5iSTUZ1cAQ7ahpTnv",
  "key28": "53QSMqYTAssKpzbe7TkPFnfhaQXNgLEqJae9fXwUZiGYhtsHc1NWEVkZ8vvWkKviQgEUX7LeLGP6hTdrZ6f4Uxnn",
  "key29": "pCcscCh7AFJPPzJCt2jSQjqXjRyMXtf3TLnxvHsjEYUwngx7M2QokHboEzhw7KKHZsRQ4yYTogLJbQgJU7y1Yag",
  "key30": "5kjSyytnkatf6eTwwAVrtBX4V2vB6WwmKRj92gN26ZTignfvqegNDNJh8Dc6aTbZUgGZYs6LWF3zbY3pquuaDjVe",
  "key31": "4CUfBtuvYBiLxPWV8hsCgXBgMkiEuNrxMNxFpjozvPCBwb4zemqJ2ZQc6fscNPbKBDcpRPDLdd91XFTd9FNDDfPK",
  "key32": "4dafoaXZJwX1Q5fTT71YzWWMMdBEzm23cDjL2wVpnRbjSFLkVLj6HyTXqkzgDXaJQpC1XJxXvPXNcr5RsRGAiYHf",
  "key33": "3CfTCwCgq91M31jkwPorhWV4jxbHPjSstKwPfSn4zyoXnvYzje4beCTR3Za8SM469hNV1PXyY6eBac87by4z63xi",
  "key34": "5jdCvGwxuytT7bJ4LrQ6Las9yXBGEbmpLxwZXtZqavUp1zYNYAv9hNSXxr4cfHNKdXMGjaa4k7eNrjAyrMSvzpEd",
  "key35": "5knGUkqgUTdXqVqtnHy2rrXCbNSM9WF58jd6rVPnPifoWUKo9A5uW57WoVbHrwmur5rCsP8KnZq5C6coq6Bq3oSZ",
  "key36": "GGH3VJiSmpbVxkrCcYK8awFUJZxymzyrpbUgKzDYYtFyxuJH6CDXJ23x4B5A9KVxKyVR1sPf1Z6VPTV4xmw2Tnt",
  "key37": "FKWMDVMnUMi2hosFLDf7i27fSZMnt8XgRit4D98ybYbWrazvnFAFuCe1vJ3JLJPg2iiJJkAE23tzpzvDST2GUvF"
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
