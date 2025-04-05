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
    "4SYwjfPJPWeDcc8Mhbkwv1mfDMpg2At32HUE2dvyMQ1Aoov7v4cNzL1JUqaZn81KtWC3EGA2JnNxV9FNBtyFHrYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fTfsv3pTcdfMoYRhRtpwqJ7mi9z3mJ9SH1z4mf4uwggkkEj8VVdfC48t5KeKvhXBnpqUy348Gsx8GRKw4EcMUgd",
  "key1": "5ZZkUnZiBSGvtPRH7iXfRPPt6n2LRug5ZcUrpymL6qWoFf5vtiLmM2Jj1ZAJZDdk7eUy4LnPiqBeM5NN17P5fEwo",
  "key2": "6eaAkif1jUeMLH6JE68X2xfuDFn8cMrGxYpKe75FgKbVfUct1vYYHMiHpiYMB3odDVKZnfygozvGCFhBaQ6CnBE",
  "key3": "8bdNd7PQrjypyRnBdRFFN1uK8QmRXSkdGAe4ELuhL5VxNTFfQeJPFm9YoBz4Zgwy2Tx2w53oCnQFaBmiM32iAsV",
  "key4": "5o9SGMRdnzeU4gP4WwDx1JW9ahXnLUyb1ZR9wGf6CYSGTwsZLwkbqpATheqXzaXX2wNkKmT7rtDNLHGuN6nfrURe",
  "key5": "4qP9ijkdUiG2xTkSgown7FuoWQJJKXxCwnsm5tLGN3AJcwTw5tTWtpPkg1Vi5qUmgdhiJn9Ldr3z6xtV1MHrwHj8",
  "key6": "2tC2QLhxrutQNyHFuVpLrrM4NeFX2UUb5CpYYyqhUXofDdhPA4UiAVXQ69PSWfCdzp5YbPusxd1h8R6hH9A8pBX1",
  "key7": "5S623u5Voh9NLUEaPsy8AcUGhwApoGab8zgrffti1Re4gtRNqmaWNmoZ5B3wTbDzG2N2wVSUL4otz2aW2v2wMv4i",
  "key8": "ofn2erqs88hrQDbLyYgbmbE34a5PL66ZTqzHUxw8mQvwRXyLE8JiFKMUQeb53815uqM2gYzQXrHeQPRjDRn51ow",
  "key9": "24QadKoExAGpzmdUAP6i2M3FHbiTFB2TXtmczc4GdnX7dbdSjMUNX9pYBkb4yKSNRdxiHJdxxGQLqu148iNVvza2",
  "key10": "2MvmRRpaMtaxEr2cVfSCgSDGmcfNHM4dmgBCFgSW7Q7VGSwXXjPxeWNfekY8WZkEU5hQCcZNPgLFpCGJSPKTtLfZ",
  "key11": "2i1p3fsDUhYYygoAtE6jWp8LD4bUYBcfuw2iRSpuWdREh12WoiDPGAsNyum5vAcKDmTNRPw666RFKoxYx4Ce85oX",
  "key12": "5Vrfk15Czsv7ECiE74RSd7gP7oPsUhSjmygjbnD1k5Daixg4TgC4cn2M4k1XDFsoMGQBBV8oQ6kbme2jQhMwuVKx",
  "key13": "5KAtkzQ8KZopJipDGACc6Jd3UdxSUr44uVs6kERhHH7SWzfqUmFpcddpCd7LfqmHTjNH7SMs38CmqaxExbhS8wLV",
  "key14": "2ApNDcGocG9ZzrpqzGmUoseqD82sQLmXtxEq57ADBKLCJ2rtpv2EBEy4rgbG5pQZyh1TVHzAWDA7PV5Z1VZCjxAG",
  "key15": "2udvhWyuds3PEzJBpSz5jQziE7kFZyZdmaFVZyVKyrPyoaJpL9KWCY45tUhBt9cmU93ASxzzjPFjS9gfF3VZe6UG",
  "key16": "3VERgNCq87MxjJoYdMq8DSBLduuk7EcNSCRwLAt1UdLpM58spoHvCWVE9eM9Y7NAZ6n6Kiug66YyckwZjJAL91Hy",
  "key17": "3HhNuc5uTDyaxkN6BD3HborwhRQhrH7TErjXSjhA5TfX5P9GmXCtdu2ehMQz5HejDSNDVKDDnXTjXeRu3UyxTpjm",
  "key18": "scVT4owuCQNasnnMEMryuWELkeETZG836ZdAYC9F1d4LbFpacqvKwACAA9dCzJjfg2AjSRAqsZWA1a7uTpTzN2w",
  "key19": "3fYNb63pBYEswpCWKe3uAa1CzEStupkB3SG1hwyBZrk2vQ2zqFKBV76qv3oamDKcBoV2pXYomKH8W6PfaPZgaXCr",
  "key20": "2aE6iYwXpLFNqKDNRfhLTP3om4XwRscZaa3Nr17QuxQzt53ypQJ9pS1J5DtzHVWCJedH7xK8atDwZhmW6RzgTGar",
  "key21": "2FaTHi2vfcuH9LxfEdTx1kJ4bGABqsppazNfJi7biw8kNqDMnVjTNpyZ5vtS26eLNoH4WPKF3jj3KRJZULVZzDru",
  "key22": "2okuGKUARJ3U6p58d9SiWJi9QTC9XGSkP3SHe8XU4e7MzUKXWTTDHtUg5sQHLetGU1AoQmXHjvsbcAct1hpJrr6t",
  "key23": "3ZaYQ2C7AqoLHEeXq5ywYPpQ6BfSHjGNn8Et5x228hnHUTVKsVXX1otkWim9297CY7sWeRp2yjcNqoS2vUN63pZ6",
  "key24": "2cMKUwcgDdmMa9MSoH7mN8PsHB6eXqhD1QEiMQ8CMzNYt2vRBzhokXii1FA29ukAGcDMCjRZ1gipBkZv5ayTAyoq",
  "key25": "Cc5qy4xRc28CZxwFGFcUNL4NUy1E1sAGx3dCvZEve1LYMpNAs8ZJehvF9FBnuqrRJhcDLy5QYHWUYFrera3Hqqo",
  "key26": "4YKZdBBZU3hBhTTDMJRrAFKtVamjE3e3Ry9qXnTfehKMXhXKS3GgK6wi5e83Gdr8jD365qXa7buRfokiRNA8rALo",
  "key27": "3L5SyxnwtN3mFqBATtvvtVQo1QPqQDBiLtLjDZKYGvRgUCUUGnHfRP9F9FaN56NqZqwa6aGxYEhW59CZ5MMdN875",
  "key28": "4jnw1RTE7bHJCyBXo1J5tZvLFxfKCNfsoEoNwcKraRS68bNTXquSkudo9ghhZJSjxFD243Erv13BV3jQfhnRftji",
  "key29": "4RLGaZ5YNdaoiNZnrX7WanATykk2Pst3wo7t6tDDyWHrTmzrNPrw4BVSgdMJuPUF7gKUqFy8b1YTdeT2DoqX1759",
  "key30": "3tb1GVj5nzZVgGfTHgRU4zKwot5SaQaZYA2828Q8XdzEhEC25Wz1Pqi9qyJKS7BRo5WwZYSuyVsADmLTYQC4efBz",
  "key31": "5ML3BcTUhhtAhQ29jxLNiHXwXNw1DFTJbDbmnTrVa9xYfrPDKphnaXuvLNzRXG436xagA5L6gkdzR54XsnjJ8duu",
  "key32": "5PSskMeFscf3BifoJ4JgU4JFvRdnfrjGQZhz7m7TASXtMxQ9TExPA6gFuqpgd8H6F3EYVUA2ks8QGLTxTyN7v3im",
  "key33": "2cYHVq2gVERsPUfF8bdGchXByXho8jPMweWRo8ezPapHVqdLreCESjor8yu9x8RyFfKWkEtTfMSaUHPZxqffrcRn",
  "key34": "4z852fbZNbAyy6w83dn9pmSvKj3bn39C4ibQV1sZLzJmzksnEMvJZUnmMxDoZWpJcFQGi2eWv8eSK9QhpjcrjFLZ",
  "key35": "2PL8URJSNbvLbqZD7ZYiv5VA3c1JZmDDhUxhY97ygizKFSd6f8KTWPaXvmkwYkGSLqWbjkVZV5wrJkn3YAJafe31",
  "key36": "5kUUXsznVd8kUkiKb3vMGnUbmqPNwxi9qAsTwoiViEws7bSETyX4yZfDGS7pPqSw8fs8ckzMg7p5WjxDQ6U3hMuQ",
  "key37": "2TnASAc4kZSByY9rNxcTt9rV7ZQ9SVgkzDdstYMCghQu8eskEDwu14S3NkHzFUSX5ogQYvuu9y3i78e3naFymkQe",
  "key38": "3vdfaMmPssQVKVCWWJUuQ8Yq3netpE2XuF2DCg1PmRrm3aVyLKanMQgKcBAnKqAHf5VG4dJJKX63M3R8157cGUME",
  "key39": "4tAFKvNvF7pt9whQsLCHkRc6V4xeZXGtE865jFKcWCeuDrmrbgcgvu6QrkMVQe2qfQVfFmn8LdxQuMC2Yww5Zw98",
  "key40": "t4QFnbHrHv2fqt8RxXRjyNuVL8RMGfvYy5uAMyFcmSrexL2rWCNgDmX854zxEqAoFzikeJfq95wyxJx2i7YgyNX",
  "key41": "rUNHXugnKdYPi4JMVwLsUH6Hk8J8j8MVBseG3DPFmfn69sunA3MV7ieqciMpAoyLPfFZkkEnW4B9sGxBkj3ycws",
  "key42": "4eVFnCfi1CamQhTqa75zV6xHSnkMCwkkjDXDaDLdsuCQvGstZykwUaCyAAAjus5VwUqJ5N9irH7onEqZB7tcXxH3",
  "key43": "3fpkYWBYVDCgEQJoKdgVSWVcsRYtaAj7kvSmQzhLXsdFYEY25HeaGUoKMvDGjddRYz3uXBqk2vLPfrNiPJyqGND1",
  "key44": "3wnWks9tB5e3CJP2CtX5VN13MkrnpGu1YpTb4mcuwrMKpvCJyXncSS9Bo6aefUD7pejyV1XvMenig7QAeH5YEtHb",
  "key45": "3mdwMU1XRvLbd3ueEwCJ3fHixT8N1VNuYcuoPv7Ps2WgR2XBnWZ2pNn7Yh1bnhoqiTVEMPnyBUQDPJUL3rhkLMVv",
  "key46": "28fbSgtvU4jB7wdtJPsXqcHgBPg1QHbvxTCeL5E1WaWayXstnRnxiAQDRv5wc4Ahy8ua87fpTwPUcLgVpALiErsC",
  "key47": "2brZbrZwNBgapNEMmN31PNJc9o7tEKi9qJNpRwnkA9j6b3sfDqbHp7sdGEjaCGUqZs8AUqcK5nhLwFutS1BLAXff"
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
