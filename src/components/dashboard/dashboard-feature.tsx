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
    "2cUHPErKsZcNLfb7tbYihaz4iUYNDPVYSihT1qwUzSVFknMcYaZsv9P24Yjm9gHtHqbnpYYw5FkcXddMuzAMkHBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZVbmdWE7dLUTSqi4AMRpC79PjAKwUps96WXHx8L8FFFPwPUhCw8DLsuxnyYc89qHxVuKp7gPuXjzfdh8WCR575N",
  "key1": "4PVTCLLfGuJdS3y4ZogBEwcKE4MWsW94qoLywABbeD2vAPmF3pBNY3F9YtDxGjEReD3XVRehfGEobtPbMVUrQuDN",
  "key2": "5EHHhQmtVnQ2ocN7V74jpURna3L8o2ex5DVhDdZnUsqGu21z6SUJquPpVC6hCodHhK7Ka86Bec2Uosn11x6LFwUu",
  "key3": "nuoHW3Jrhx4FfGVYqPVMHCQ5oK6QKCwiW7KaWE9a7XaPvMJHXEiKCBYRCbvtMT6T6VBa3ohX7Y3zVrdWthL72Qf",
  "key4": "4fJemUTmJVmhLf7F8VhzojJ9UUXzNdAyN2xtjAv1tZ4Ud1HgyqRz84WrgW4tNwJqYYusG6tC5dtmaz8pAyh2w7Dx",
  "key5": "23iDmZ7v2j6xHNWKR5p5KYxaJfU2B9cXBtcyJ6vDagFTE2dvFLBqVTR35i9nit7nto6QMGP2nZrH19g7k4e1Z6Um",
  "key6": "4RHZKXBszvfs5ZyZLDMz4QtEQbtmYjirLhgtwjd9G7aHVorGBYRZX5SBUWEDXeh2qwowfw2eUrtq4aSqcnnpuTys",
  "key7": "4DoHtY4DTCLpSoLQGGTfbGC5RAB1ASYu4SMot5EtSpzVuNLWj6pWWTRRNhSkukxkqQyorQJhvKFzuKnyBPBxFAuW",
  "key8": "4vY4jjJmQg6ksxoMtqUBKLoZGfKfe9FxXJr7xmvMojehkJhSBwmRFrW2Y2Uj15sPTxPpYsi2JaZ2UqSitSaoKL3k",
  "key9": "5jHvNiyGqP3zC8GLhGf3gtPdmma2syx3Yn3GvNATfgT5otNhXV29dddPYiR3mETXYy1mca4wYBeBfy46T59AwxbY",
  "key10": "2kx3Y322RckHP58afbF8DGSL7zaadcfQLE8DaqbcNcX2JLv7LvXrFsyCcEXWvnKNz7687hgvDQC6w3KJckUtHn7T",
  "key11": "4YstwMGxhBTsHBgVoA2NhxsGtQygYa75PWVmVTFKNfwZoYPHjvePLSvG4n5TWFAndQnTYYPEBG1WNiGEYzphUTMF",
  "key12": "2LYsPndjowF6vagrYBarRAKnUgeYHmGCRp6Csvy2aPqz4nzRCobuzE7A8yfJHTwqhDXS5vNeCuMrodm1tAkpWph",
  "key13": "4v6RtGEpfF6orbsWBXJhFdeSS2fw2iDGvZK3DLSCSxTA5MSh85dri4DcvK8xYwUpSRV7jAr1kHXCGn2QswzU2wBe",
  "key14": "5saH5sMJPLLygHZspecYhvqD2TpEEBN9q2SnrjKntKdoXhDLKieL7GtA2xxWeMWmRkgUYjS8q4mwRHnPPDeCEGr9",
  "key15": "3BxdPWMrnAW6ocXrAqGT2Fe4ZVkxizHRBim3VYfpJRQfaQDXCjBE7gda1VsQR5et4PnZvRjRgMrMTg2bjAke9jU6",
  "key16": "5LCXDQNCsn2558vGvrBGayyenCw8NTgxjcR6VatdLUofnmjFoZJr2CVtma7fUn2gZfxN2omevA6YmKDoSUm2Pzwh",
  "key17": "46vFZuJwZV1rpJm7rViWHXuLJZLMHqp4TZAssxGSsoZrTR3yhKQGcqpqDprcYTTqMs8721p8aSuQM7QAwuXjox5P",
  "key18": "3MHUQvn476LscgMYSRUFEVUXFvnrPdb2tjiY9xkXRZZjzgtm2Uw3PdETfXMdBFWq3wr3xK4kztrBLsKWNmqA8kAQ",
  "key19": "3ZN3ZeYCTJLgbQMFunJnHEpaxgWuo6bFPWC76cRa26jKhSUoeVi3nwvgCEzUHvfeW5uNSLmrvpPfNZcHZyUPje4g",
  "key20": "2bduzmGkJS8F9C9XTGKRSyJHEjtEkfNSsD3NwkcZcmYZHsFcX88eEGTXnw1vjdCPBhUpK8JPAex8TfbFeGdA9TKC",
  "key21": "37nSkKSd8a7kfCv8c5YcSmdhCLj1tasAHZTxwqEfX4degct3iSyh9Wt8yMKx2oEirashoFF8hv2EvEG9gxrapvcK",
  "key22": "26TWZb1dxmD7WjsUkLwBF1sUPZpXAUAnHFYXpsrLEGEjrEH9ebvBvgmjKhtch9UuPx6yu8gtEv6UD3Yzb6uJkSKx",
  "key23": "2a4xHwvY5s4pzEzKkoXBsL1XJS6KNsDkFCDDPcLbFDbWoKSpGHNahKetRcdmHYxWDELRA3ZhXWQsX7BbDBmdbEJT",
  "key24": "2tQ1a2pcTT1jZHjJKwB93fSuc9kXtYi8NRU1D5Fuj5YgxgPKif5ezdqiB7xBDWMF3u9NCFykeMq33mfm32S1cZbK",
  "key25": "3ELG4CX81ioyB3SXGi22XxAC4C1HaQbBfAMBGHLrtX93sh2gpTHFcPPvj45i12M3eeF6F6X9SJE1YriZyUE9cjC1",
  "key26": "2EAcec8gUVcGLLqoNCXBJai25snsyNGVn2uStWg9SzNyoTNmddtKyHkTxLuTRDoKhmCdED8cYnhqqfzWUH2UT31V",
  "key27": "3irqPdU52vZM3PCb8C5UqgeTorX3xQzBzSvvLhRZxHqqQKcTez5ULqN19eXGWBUF9T6Q28oKHjhXt9fU7Mj63dQs",
  "key28": "5aZMdkY3SpsLMYX2dxt978heW3TV9nuqzmNe9hKKsnQ9ya5Fcu1QiE1efcVn5JPpbFEujKbu1S6TA2k1ULEK1bEP",
  "key29": "s7aJG3N6QUPdjZTJ64HnFxCPoui8u4dGYvQLjT7c9eeHfow4LKMvDaFK9jakhaeaAD35kf82GPUsBhn44dEMTGP",
  "key30": "3u1GXw23rkEiPGc3Xfz59zXZD361o4a53kF5n4S1bYS7qx6PqGDmJuGqfpRyUnvRsv9o6EqGAn3sLevzfVAipxRU",
  "key31": "MgQdwn41hirPRQexick51dangz7Q5X2sXeM4FBeY4GqRcV2tUFRJJBuNqLxVyPmBTvxZ4kzKW1b1VfE6M64aXzd",
  "key32": "3wLn8AMvHMYD7EYy8FWqpS4CBcp2dyaTZRezPiLCtyTfBowNUJpy8HEoZ95H8mGEEHY46nXZwRPvoKfoGyWCWm2x",
  "key33": "2YRJX57asXdAY9EywDqp2U1CVzPnZ9Ksuw2RaRSkKVXtkurKXhzrcCUDVd1aNPKRohK6Sgdzy2nByXqZLYb56ZLE",
  "key34": "fZMpd1boT6FCZptBT15VhTTXjGjAKvsZKAPPpCUUHgzKAH8B2KYPnXqhD82niqr2uYFExuvLffABFtx7ihN8tfp",
  "key35": "4raw8dQBzRAoPqpLFPGiyW5uLBRCtGr1ZLPKXNhzRHkEJnoN2LmY6mtJZiMVUBZmDaqAZfFbnJ7tg9T8kkFvyHEp",
  "key36": "2hmeVBaupoMHYutcUJKWQkBB27rm1N7wmMpbUYeiRuTeJTpk9Y4znPcA5UBwJUf2AaZu2HEWHdjzjr3QHhXg8N3C",
  "key37": "5ybCrbcHmzo75K8NyjqmyQkk3Zn7zu8xxgyGg6o3UribnhvH2xVryRieEVjVUhoypERBCugKjByLriPVw7CP8qso",
  "key38": "2nXs81nYL96zwDrxABtHXzydKc1KWtffoUwBGLPYukTYkqv45PLK4BAfeFMhiBMXkD5qdyTDfd6UpSt1PcsSJnDN",
  "key39": "2xQuFedoKm5kGMwGKmK36LeKoTFCZnhzzXHYw6fcGRARSDFSKXdZGvRuMVDLtDatxUPvrmamweXfZMRBKQ63DcjW",
  "key40": "UGUhnZS3qdonUdRCSU6bj5dsfgGNaQA37A6Vy3uAH5wdbSmug6r9Xr44E6ZvM54UtuaLEAB3CvcNPoT1ezpWykr",
  "key41": "2SYpqUSJwkkhxR9Mcy3GFKCi1z7Uhxteab18e5cEAcpLT7PVFymSXJeNX9rR9UMwKoprce7GehCs48PDjkSW69C4",
  "key42": "2r5FkdTuGGaJrG3Wn1zoNnEErQy36zUyuuPK5RdVhX4APhYkyErr6oTR2q7cdQwG7h2C8SBUhhvHB5SbkF4dpHK4",
  "key43": "5WPfogpgFc76RDQwUfLFGwTYdX34jJVW1EySjhfRCmpCe1cW4ZvuHhMnBxwEEXb7LBct5R4Tpkhv9uUV78fqdDvK"
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
