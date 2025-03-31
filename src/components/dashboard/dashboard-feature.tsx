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
    "2yEbnbzu43CCLzzdTh7t2KTMjejv5PVQsC7MmCCMHWJ2CsXnReYrjh9rRJL3YuKLRUXQNxuGeME7bLd3bgP97yZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "95j7GuyFbwKVbJfrxw8TUMa6EyCzoWRG5EU76HpkXjVh2eVLQPgTh5j1hhTyuBEAiQQRA3ysua9o2JMYP8k88LU",
  "key1": "37hswqNUwMCFXW78H7ijTwMLvr82Bqkh5aye3Prv2qddrLoviKGmGUSM7rxa7UqSVx5ykppYfZssrUM7BmU5X2Np",
  "key2": "4Yd9vAx6ceQRDQxX1K72Em2LYemhfBkMjpPCvAL5KUTbzNbXkZiKUoyH9SjAH23xiMFKwK9navJ6mmmrJhh2xv7Q",
  "key3": "2ypeoGapRebGjqjzs6cnNCSkofVaSwYPYzH4jSG51MF4VxBxs2cGSKnysVo95TZ7gTzWimMJrUCzsEDVDfznrBAW",
  "key4": "K5ExPWNkkqgxNo6BaNcnDA7MEw9976AJqo2Bu9EBcpewumwokUEivfXXEDv9QGKhbjX8nEWZkFZR8XMkeXhyK9B",
  "key5": "3aBPHZr7Bz4UWA2vUCTTVvjHQezNtRxbHgrW3FYdGiEajksJ38sasKN4HUuK2D4CDHemRUkAXB1Z2SoqMgWHHgTE",
  "key6": "sHXLKwqsoJALrj4pbPLMinYKeQGM2Ve15LFTzPLcH4SpRRo53bbuK712xFUt1vS6EHaad2DLqmKxvBedfGFULmb",
  "key7": "2uZG4VArUvUwEcNuQoBvz2N9as3poKFMZqyXRg4W7HFK8pDsdhPnMXTMkFCkcxwQFbiF68TXRS6RVDR36kkGWbry",
  "key8": "26kUWkM7aZsKeDEZX35mCrHYYjKtnwGWH97dK2LMXKuwCxkbkbiu6h7ubNbFTtnoaL9Vb1drGDsUF9qdRH237F29",
  "key9": "4KZNtzKTnvrr1kzVrBMjbyDLaTSq5nWobD82sk9g9p12XsZAMooQG1dzswhT2fQWyWwesjzWaT8dbdYwmifZRFjx",
  "key10": "5E1PSE3eqg5kCtubGUpYz7Mxn6rEPmUkLv6aDoRJnGE6ob35YRirk6jdB1Ca5Hf89rJKYhtvwWWb1d544xWGaikF",
  "key11": "5trgEEagHJvdXyNv6i5wyQW68v2bs9gv8NkG7kzmP8zK2BvdrZ5k51ELcmCYNSTx8qE2R3WgFS6Ssb8q26tFDJ4r",
  "key12": "7xWSPxdexgyLAZumeCj38NJSuU7Mfk3sxf9dWgki4n2v45u6CRB6Pa6D3e2haWBUHK7CsKrtYZF6fM5wG9rKUGY",
  "key13": "5wnCsQV91KMeB2GfF3KoQgj6arDN4DUqRTkpu3SB2xHLm9YKpNaoc49B5MTDx9aqizgjHCxjw4Xp9B13pgfH9jrW",
  "key14": "Dyrf4iPUmJE75jxg2cxs318zauZihDyYuYmdvKU7kEbniyoDvZrAuKMFJtG3YXsuuka6bAqaMKb5U7GN9jWGuDe",
  "key15": "3SEJpRE681X89bqRMkrJgQhuEf3utaNRLqyWpQV9zYqXGP31eX5asVsjQHbnqRzXEA4zvrzjzet6cqwAopZY82V4",
  "key16": "3QAbasqaT9uenUwaeKcuNkcAkqEVKWf1HoRL171GYGUUD7sEmVJ5rWCP7pS6fypLCLozVXMrgjkuCtshJzCuA9yA",
  "key17": "3yfs1CVgJti8UHTEyzXvikRXtoBDWJMJt6hZRFsb8BvvTx2iqo3CWhcnNYCrACcG56KaATMtvm6jaAKGwbpg1Rs2",
  "key18": "3dKE5WrK5m8KgfvmcjajpXcysbBs8kkjKhciWAiCuxXnh3TarqBeYc6yqc2Cs56wTCCqxip5fCMT6oSPBJXbhpdH",
  "key19": "3w2AfTv2o4yJXs8dX4RRoYsvbNDKQqDqkmk2njZMptP2baGhXm2x3djpqptmLwvVNThJsf11zHgPLJ5ryrzq1jcU",
  "key20": "XnDqpJKiQDzNGRa3YJfiqoBc73YrCyX6iAk6XFzd2ebAizijK7GxGX8oq1qjUeGy7pNNoowGVxZTCR5LTBCrwdF",
  "key21": "5pFU1Q8PqEaCJdiuMApikewAzZEViiNHjsGzLZmMbbFXKTZUD4D3yQxMHkXkswZKipAGzxUG8cSR5a5Gxs9Qh9Jo",
  "key22": "5WFgqLZjs9C6JCoa9ioJ9EmCAWEkHaA9KBJ3irLFuUSCLPa3mxv2CR3nBVw1dH4prHDzLwpxStu2Ttp1jtBcBNqi",
  "key23": "iemTNkY6ECZvKUDEatgMDZeY4rye224QD9CGVwjwjkjNpB1cU3UjrXE6s26FtCCenfQ9gx5GV7NoJpreqtv3fCE",
  "key24": "3RmqpbJ1afVp8xaV6brpabWWQZchQnfktDyLR9TS7tG2xFYSgamfuZcehGDHCcUNdPo4Ca96Czmoydor6bLu33uN",
  "key25": "2S6K8XFenzsfSWL3XcfTw9WjoRovMAumQQCaJ5PdzHK5PCC8X8TXbmbyU2mSWFPk5iGRFJAuHWUTyz24CV8SGrX1",
  "key26": "kdRXuV1CKEgVJv6BgYMhk4sPEXVL5eybNY9Ja9V8BGf1JuGrchN2Jyca7v8FDzJZp6Ux6xx1vDfo7UemNqGvPfG",
  "key27": "2uTpUQtcxFJFGz3Yjki9CwNqEcoFkXYotd7C84oc5nn3ciktpR6TT6U49teb2g2LF2aVX1of4vVe8k2uMP6iGucx",
  "key28": "2Fhy9Yh1ACP8BXoHxS9jyNkH3JFkA7kMdoe4cyMAcQmzjemiAuFiY47pgQVLZAdJ9YYX4FyDF4osHvdi5EZ2wPau",
  "key29": "32vrH1ksygAWYvVtF3zqTEScRTouX5K962Giv4KQBrHs6STVW9JF5iG3qbRvLQNJ3acTqKLGRckBwdLQfsAoCiEj",
  "key30": "4zuPY6qYeaepL8eCzVeJHrm1y1aAnDYzePpN3o5n4xyyMTBrnbk39htVSLruCP2Nnv9NhL4jfbVhCTYj3HsNUktP",
  "key31": "5YzpkBUsoqxE1KokaKM29KRyLRnh9tsLBhDpTsmDrFGoyrKUx2iGESgmF9oZs7oaJHviwq2cE32YnA78R4ZTvW2r",
  "key32": "2dXpm5akpC3mkqFZS3HPpLVgF2aLNijy142RRWcLtju3AQ8rrRgncewDuFoaC2JqXGtWTKcpzSmN2JzZW2hyHYkq",
  "key33": "42Z2CuUWJ8XmRvgYKBHEUzJXZJxSTMdypd92CcDxdA4u22HWSguL4p6m1R6JFks94qthbtqM8rGRaxTwxMMgHyg8",
  "key34": "C3wxMT316E7BL8VQfQgnenoj1wX6Ac8NByhth5WTTkQYBZHyzkoYMdRngz6FuU3Bvfu1aZa8rY69o9ikPKcQe2m",
  "key35": "23ZSqKHpZQz9H6LoqQFkNz9dkPHdSjyuRbyMrYc5YnDQc3B4tB9uPfPVeRtYQEFau5m6LZqf4sR3Hou3WQnFkGk5",
  "key36": "KnWiBJyg5sDZd1Dh9GofrJv2RXWPVjyiYqVdtFxNwfyRVcKxDDDHDDFWiugHGuLhsQvJxed7Ch3ZBEvJLFmFt6u",
  "key37": "48DZpknoLxHcfZeSzENj3EXAu7XzK6hZfk61E7C8pzXFvf7cAnR66HCnY3RzvX5wmxa2cN6Xv12cTegeqww2xRcp",
  "key38": "2JEPkpP6Ro4CLK3qvjFdCFZqPoAyb5BCrMXmg8vxfvDo6EHzNZZo6zzDqXKYrmSJetqYW1jMRGinyfXGZsnqkwqD",
  "key39": "bpbYB3nXmRTNX5e6SjsWtjCRpdCsH9XdiHtvZiNPM9Br6SxoEhYNr1S1hpi8nJjhdJho7aYTh7G9p24RhaqVmuf",
  "key40": "X3ENtqCR7Bd97n6gGZq1icny4zEHApaw4Hyo3C9aw1C8rnxEd1RzvJmRqUqh8H5yPT3zwy3mK18BoWo6NmV14i9",
  "key41": "5CNwhoLcougBEcfZjX5WbL2rBaWP6uyVoZhrxU8g6RjPe8MShesspVzNL3pMm5s4h4mkP5ovxoRhwC7Kny7FUYP5",
  "key42": "32xY1s5QzLJVuGesMhQj43ZmhKmt3rcyEsLx1ewSTZT2RH6YiLyooga8MSbSGqWzEg4BR8r4euCsM2K67rXYtbGi",
  "key43": "2ajZAsZ31bEphnzQ2eNR1FaSigpDKU8G8XRYviQTLFni6JfLVFVfCaoGmbhZtxqWa9tyn6rDubmEXNyrFxvZz2uX",
  "key44": "9Tcczeu2DysDjBRdX7jJt4GrJhPf2sMP9FErJK1De8vPsV86YF4N6sArxCiqp84xkBkZ9RfBqfTWiqfbwpZmG1q",
  "key45": "4pUnsEXyC1GJ8LRJvVZbLE1CmFeSb1ZhhPr2SvCmLm4yw2hG5yAZzsNpm5oDohnotsH74QtSwpuBPiswcgpyFecV",
  "key46": "ytoWqjspdS44dW3GZGuNFQ9rPpLnJ4SkCockwhD7WYTymAGmagVy4shKs8We7F5UTUgKh2xwtKZsTcLxPZaA5kD",
  "key47": "2ZPtYoN3rXHQ7miULia8ABLBuuxWRm2q3EaXra3SYz3t2e3bQ4qbxoE3YXYDy4Nmb4kMJBd415XPw4beSaZPLks",
  "key48": "3qm6EHFfyav1be5UCfuQb8KdHeeB4GWDtXGvMdxNq2q9s4JuEgLGCKWUkEDrdSp3yzAGHLWJBdsZXxwf7BN7oDyX",
  "key49": "3eLM8obnspwVr47sBorJ9CRp4C2L4daGJucCX719ohCKWSHiKd3Uw1zFKC2r3tS7YCduwyC67KLg42anEMScByhk"
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
