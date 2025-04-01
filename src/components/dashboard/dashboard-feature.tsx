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
    "4F1tuN3YB1Cbbidh8R7M4FVpDBzJZqFzaHHTkacqbEgJV8dWBBtC6A41fpFBV6Myq9sCUbmvrSozPzQ4eW6mFhiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oYPke2SCJ9PLTDGz6UU9N3EWB59arwoBEgguYryqtmV9QNoePnyRSrxpYk9oN1RFPjqtMLEtdt71WZBHvYnM6Pa",
  "key1": "pSceyLpHGuV33NMQNXLgJSTYpRhwg8EbAF6Q8mHNNBFQbmK2ifApm95kD1hccjCX3hCgthRGGx7BJrBAQHvsQJK",
  "key2": "bKm7wQXs8aVUaHbHvsqGRSi638bPb5tgWcjQNP73BkZpkAJaeE7p55WvTXPuRMDGK3fpVMBatCkBVokYUbjfbcT",
  "key3": "5DvSnVX5B2TkXGea5sNeS6fNb6FzegBN95Ky969mgog7kiaJ3vTyywLN67jgVnYjYHeT2qojoCChcaBMqRTRw9u6",
  "key4": "4eRn1Sh88tcPXPP55ebXqkhcv9tBovcvpxYeoQE6FuYnt1ivLEao1tAVxF3PFYtbBAWXCyNBCANnsk5ipnyaeCHM",
  "key5": "5Wtxs2MDrsdiiAdrcYGRX2ZRveTbLZmom4McFyn6i8KqE6et5t1VdnwZQzMCQ5GxjwwyMq8Rsn6495pKcZrJbL9Q",
  "key6": "5geCZsj3wAFU6Tcz1mQJzUB3RSkEGU3Xzy8kqP4BR9C44C1NBWUDY7gfd5xuVDB49BupDx12j8ZJpE3MrD12ECk7",
  "key7": "44jDMhYTkFW8FEpngHXuZK1qjnnF82aFKbWzPU93CKdbs1dAi4ctkDhGpeyjAZHNuHgxPpxyYnpmh8gK3xVpTfbV",
  "key8": "n7t51T1myHYcfNektE3stjkWCRneZvyTGXaRNtjD3fAa8TZvtQFDfK4Tg3CkL6tZJs7Qya8L7tPRRmUdGTX49GJ",
  "key9": "2bYuYcsivySd1K35whGGqtd39hq8yyFG1LdRV3vedyv9aMq8sHDx1gYYy3fpTHK5qqoQ5You9ofcepuJ8otmKWpe",
  "key10": "2g8raYGESbXqsFk8HjVj3PN4uVx38HyPLqYNhQAWiMkBT5WgpWGYZQFGc9GECfaMfS659R1hSkU7nvY1wRRWACNh",
  "key11": "4Y9p78mRTDF2VEgTEcUMtDetTtxsmuy8qQViGqdUAAQCM8StJrWpyaiBDhVWUHbUkwrtV17fS7AiGk4qF8tKNYaE",
  "key12": "61cDNo55FwtS4FfQwx9TK52XTFY2YjsTMx8cn8cj4rejRSV9ARSRRhdcU6BJuSmPdWX5ygqNwYQVDL9Vub8kKmci",
  "key13": "3H8nJdunwbiEhBLgJ3LGUr1ByVKvpzgmWPHNPhent3T11YB3s9abWZepr34HAMkDhz83Kw2E2dmMf54j922E7kmy",
  "key14": "2XP5NwRkkHAZemTTggJmqz6HekeDXABJ4PkVC6ep3aoo55wmAZqoUpB3GbSgR6b62NtGWM3a5QjhraddYpq6zYH7",
  "key15": "4TJstp7ifpJgh1KR1jxPaWuJuhMMznspcJCai2zWG8CAnEyKaDboLc7ukpq2Pk3mAghcDop6E7poMpbfHYTKefKc",
  "key16": "waMbDu2j6UWYHLkrXqqZfFYXWL3JZhaC4hD5D6Z67CRqeiVvsSYtnbeHsNTBkTpuTBjf5M3BBH3doD3U7KHifxH",
  "key17": "4wbGgmZULyKzfdLQWp7EfmxEaqL7Xs1aqk8rAURqjLvifqDiRqQa95BqLsnRfB3b71HDQWdsjset5xCZt6UxrxPM",
  "key18": "43yDuWVSyKXbZDA7vZNBDCmrMhtpfD3usfe3jSUW7Pbb48AYngyi9WwbvTtQ8rewLZr7W4jvLr2hvGR7s4WqXBPG",
  "key19": "5omKWX14DZbkVuyzCMC7VKEZia8yeRBHz8sszFNgYvHRhxGYgHmgz63zfaq7grr27pMH9sj4f6r8G6YaRqtHYxfF",
  "key20": "4GAdsWmmPSWmooFiLfFCqB6XJk2EBJnFQfjPXGoy6yCeKxJsZPPXcy6r1gvkTN7rFSvahGM3XMQA9NTk6W5wZzd",
  "key21": "4JsfofHnvGYW772AVsJ9TjYUof94h5txVtg4XMvsEytCdSC6er59Pw54kWYp7CV42EGPDEJnfJwdcQSVKPfJoi42",
  "key22": "4R5dd9PnGNpESG45FiQDPyR2ELZ5h9pbpFo6nbmW9cuPzP3mbUEyGK8PCLyPebZtKcPBk3KTJWSdpVZ5cp11SWoE",
  "key23": "4rzTPi9AgDKRSgPJGsNCiW7waAUC8cozeVG31t9DuBb8PxdwMXKAsNSYtWLcsjkEUwfxM8nFRkmR14kr1kiKQXK",
  "key24": "5Thd6LUeRXTeoVXvhxJWK85SrqDqAnk1zkZoBwrPikp6r6BApA9LDgMwdExA2UEEXfaSfHzbYwNEDcd4KrJUVAc9",
  "key25": "5VaDjZbUbUtxCz68A3PiMyANukSr8HWBFKHo5jf2GAfPcABMRuekiNMScxL5K7Mkcp7njUUK17vuoD9ukTNrUKDx",
  "key26": "5D62bvKSdm1c5QoWVzGPJsKpMEF5w13XLtZtL7HANBaQJWDXoHK2c3DBuXVhoQzTbMndRxnj8DmreT5ER4iQZEZj",
  "key27": "5XpRndtWSoBDBnSUBnbU4m7sx2rAhz8jGeQ9zYAAnzVTzBJmrvsBdi2yc5KX84FsgWbpxrUtixpGkF6vJ7YjA4P3",
  "key28": "3KSoTtDnfPa3u6r8hyuUPQpN56K5F7BpEKbovbAp4uNetP4vKZeMnr3jXPnWbP8cZaTtiP8TTrsXpjWLbgSeLheF",
  "key29": "3Qu43EZnaLJnFk8dEcN76iWdasSwiStGYyfxddeVJ742cRAPs3y6tPCV32rBMGZU1QPD7cFqENBa1bnxguHWMnn8",
  "key30": "5QFcfHbT6AyWZRDHwJYFH5StVnaFgj3UGC9oHTFwjWDS8EDKVoqUR8TVmfRrLbRXL8PyeHqbuqW1RHPk58XdXaX9",
  "key31": "42wqZgLK3S3fMsYWPC5gHCf53rkp5fQ7arqj5b1MzAtYZDujThxt7XhQY1R6xDDFN9no7BqvTTrbdhPTr5NWiEG",
  "key32": "5a1AvFiW4CViRuJEnQjACSygvugKHTY6Dj7WRrDy6PMmyQNwhCfHSUVkvvyhqHehF2ZmndRNKfumDF4DsuZYYE5D",
  "key33": "xc5wSesFcVP7zSb9zLQ2EcT9wNaauvYx9rHobj3AQc4TTisUCdzKtnKBhTSnrACYD3bxKbkdNqtPP3vaCkYv4Ck",
  "key34": "2FZKNF6y9UmafurbqjfZQY1QaufvjCL6J8dvcDYzxLrGsG2EJoyXeYfqWMr88M8KKcS4Y47gK84PndENoe1ok6Dv",
  "key35": "4AcBUWKp592jVkNoHwXRWHjmyZxtbJbbGg9Xb4iapsuj14MxnodkeGPAECWrKmxTxDGFafctN21M4mmHf5t1x64x",
  "key36": "595GYA9mU59DfxYTWMiRxgG4GZrJPDJNvTL5dVkC3nGbbNtDkgHbmDtFMBEkacRKnMcmw5jTa6GkapQdwxsmCU2N",
  "key37": "HNELvY2A37WwZnKiaou6M1SC6FT8mVJD9jFui3zUb3zE7AU42nZwzVj7A2hyAsa2W3JMEY6UdMoEqVybpGwHVXx",
  "key38": "3Jfuq91Cc6jbWFFqEAPGdkJ6WTk2JkSLnpfqxvTaxrosj2qZj54aiVJfYSTxkMHtafV7Ci6xKzwqnQeYHkJPcrW1",
  "key39": "iWbEfqZNfxDfReEtLt5ZjGf1JNQv1AUyiLFybM4Hyz47k2JNVCGu4V9bCq7yd6jKniZLLwkT5cUUCs3ZrXpU7ZA",
  "key40": "5D7VLMjBBrqbmSwRWejWjKPbzdtkB2KEcpB54xEAR2k3MwUnb5vzAPsChBjyrHGw4ttpo7z3UVbpM2q1mfc264Rx",
  "key41": "2cDzxpBgUvNHyvQdGSv1S28ahM68yZm6N2phbQK1bs9HRDki7iJVTeYVoMqVpiay6rUoKmU3X2bLur3wMAKwm6Bw",
  "key42": "3UddXMZ3bhSNEGMeDZ4JKfwWPFdfwHk9BZBswQErHzohCyyY5YJ7yRxLV3aYscXG2XoasnWf8hZrui5kRBHsd6Ln",
  "key43": "4k6F7Sx6ZNxUARFWzXYuKjKt7obXmVrgBt7DuV1WNwvnKzwRuuDG25dz4tAvuRE9xWzwLkfrZpDWDTUUXkxjCYNt",
  "key44": "4m7u9LoHP2w2bfTYmW3YqustNTfWacXmUvVnzgBBnrpx1GzABZHiWehWkeQueRiw3iqyQaz6cfLcK5VMrjCvX6q8",
  "key45": "4rWNXPz6trX5bdRMjtT9P2WyD3UZQMxKT3gPjmSWTeii8zN7EzAtcmoTQxYkb14sMx7F18VuprPv9R5hhBkRWFMB",
  "key46": "557DvhnShZcNS3UJkYDozf3uaW6Uvb4AK6GNVLqKKHitS3LziRiJWwCqwGyGCeU9XZtnBiTWkU9QZAS71FQeJXq3"
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
