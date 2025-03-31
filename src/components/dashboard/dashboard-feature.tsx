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
    "2XroUch6Su12VQQtQxVYDbsL3Ha7W8smJnrZAQ7ojb2uBBfms4kCKTaTC5e7fpAtbTNHwXTZmoEykyDvgVaT4y3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LhS8kXUxkTKGLAjjZGDD9Bhxc4ByEYty1fukdEQqsNCCKDGHd6UQLrcdnSHCJHtLrEdcbpujAVfJcfGjG7KobdA",
  "key1": "5Bi2BdMc28Yd59yeUWz8F5SnvRxfi16cF67HkPhr3WDqkPjtaFUtjZQqqZq7ukRxXxWo1m3XbLbayQpsoVpsB9NF",
  "key2": "4ppVRv8efBbPnKGn2yJtySusSqAJbfqMu4Nh44cU4KjFzmMxkURcnwQibyTuWynA8gR9gr5UP8mtjDwvPYdETmUk",
  "key3": "5wDSuXL5LCqu5kTL5wMRNh9WJwrru6RgyKubtwt8hQEUzUKUmoYKiACRXhiCA6dqWJY1QDXRNYuaAdko8WuyTi4B",
  "key4": "2btGMLYuXZZu9phpoCMZi4wAayZhhzeZWSRrTQ4XWBdTc1s9CRwF1WXCxMEuqXQeFqDKpNPD8BWoVfadbG6J9zzw",
  "key5": "33iutJXeM3SZfC1kuUcNsHLV1B9kqrBD259YExJhjnK4rvpo1WUjJ4F4ZaoRUk5gFrUb18RxYCHLtLkM6PP1AscP",
  "key6": "2PQGhaBngveY3qfv2FJtTgZzi6GnLZPpTAe2WJHrsxF514LFq9UJb82ugzQofgCRTqSGACcWaedWWzYu3kqdBhWs",
  "key7": "2ySVFDqmCL3zo36B8wfp5kFvtKC9DGNDzy4TFpWF7mETGV3B8Vi9wiMJN4ALABZtAn2Rizmyn3iry9sThZ6GU5Rz",
  "key8": "5T49bLxE6Whv2AfWCnG82zufNTqjNgrZboL2SLfy7W1K3ZmEFTCfdNtE9UHcBBiAciPrpbsHo99oEdmM5CHqxDgK",
  "key9": "4Cvsg4kX9u82u2souAeQ5qZaCnpvP7kScs2JpuCxQY11WHfzkNGCaTM9iJ539Vp8s6yrVqwLrXWfQrRsm2ruPWkE",
  "key10": "nfJ8A7VFPxhHJ4KYGE2kAUwusP6J4EZmfJRqxvxEiJWeyuiG2KT43PD9pegUuxA1EsdXrYCScqZbSJdYeUxy3Fm",
  "key11": "3pUJrXyN18iG2zyQk9yWRT8dDUUpVoKjHTLUYhWvZduoy4xsGFJ4ZzAUE6xCTpCVfoA22xQvvXbZZMqFeTLctx7A",
  "key12": "3sLRJYWdWXXA4XPpLTGgHvFjBjHUv6dvAexETQcPUDHbbjnuPsHUdYYUAU1Ttdox9T23yGNiHggGSiUWQAcECyb5",
  "key13": "52rKYxMVy8dyYqtAoVkYp5dsZYR1URE9W8jodYzwsf55o5UDpvjE9esM8pQ8j9BzWs8448HVhmMgCbykdyshnLoZ",
  "key14": "3gWdxPne7qpSKHctbzMcEK7fqLujWny5kThXbfuT8na7thBs1zBkpc5ZQoqWgmWu3ZYGGcrNvk8RwGBQGBZiHboR",
  "key15": "2GFz4swm9PFMdgrSmSyMbH4ozuLoGViG21Pd1vNMsgejeGW3o3xvknTbfijuaQHiNx542Z4tvY4EStPMUA2NxrPi",
  "key16": "3WttiBMrVPTwKniR48vrAcnug8xNjCqYHcoH3465KoB53WVFqCHSd5UX7gjiLvxTKuwfx59MqdeGnYGr3rbt9UAH",
  "key17": "5bR9RARyWYXB463ZvcMgooYrxUddy2PEk2nmqZbPfrYGEdoNRSBzQcYaKDzA7VA1GCZXMJ7NtsL3oPLi3J8jsksu",
  "key18": "51Y2Rd5ZEMHTgBtUKn32tYW4H8XXYsaNw3QzrouzhA19c67N4YVwoBnmBSnr1bPNhgz35CYZYt7Hxs6FscdKgPKs",
  "key19": "4xuYFC4DUNrv5kwU8x8PdzSHuuMkFMhxBdWoUJHS5iacmhbEnUWDyUkC31fmEr4xNwwgYod6yx2uWmCFL1yKoBct",
  "key20": "2kkeyutPBcDT6uBa3o4RgagMLbDnRXo2RRS3a3J5QER2Fo7yWDecJezfqnz4QHKQqhBo96HBkAd314KY1zbhw6Ns",
  "key21": "2t9k5ac8CNaQiztcGvx9oVJdnK47vTabwfitRJ7KHWHu1Zxp1j2WU553qDZ2dTZTH5FUSYnEPWdNwW3fxFmPiuH",
  "key22": "5PepNziBtTG7hTfc5xL5ENkWog8yFCMrJdRdNgACfhyXpZhTA6593GpK3PjeiB9ZoXByxAKv3Fw4cXGiupuLTh4h",
  "key23": "67kjKiGwVp6DRZrMQjxvjvHJ4dm9RZs2km9GNJugJNvKvGeiS5i68zTsY9vXtrJCTquz1Y4u9ng8qZBR7HVaMNFq",
  "key24": "2vJoU3VLgruirc8XyzoWALVrcipgHrZ2itwVWPkvjPMLTEAu4orjYFoyhUThUPV2eTbq6QPD7mdX1ZGg19bMi7Kk",
  "key25": "48wRvUHbAiLt8ZRcgU8JuWU99pisLhfLtgQsi5iah812T6YBfu2Ka7JQXWdSsKwuYt5fP4S97DFfASrSWARH2rXv",
  "key26": "5My9ym8HSKdEL4TbtkL7bBqjTc4FMqrnPm2HgW5xt5FZ1jTZF6Qipq7DEPuByuEpTUHSeLvvjM3dP3E4nZa7UcR3",
  "key27": "g4bGQNPzqa4qsVsxbDqLf7XthJABqB31J1pZpcVSgmK64q1ed79LQfZuQjeAtauUvyYrpugeUcHYozgRmsgzLab",
  "key28": "3NNq59Fg5VHns3KFwoegMw3VYwJCmXxSursvD7iusn8WsfAADvX2RTdhVAiLAZkSFdk4VKzqEaxvDckF4UJrrQTy",
  "key29": "3Q1joKhpcGNCjmbrqR4KXE77qp1SkFJybYijqSqgmN1PEGzRqqkELjZ7EngKwTjzopvRL7EfoA6PKCg2raPAfpfB",
  "key30": "36hi4Zavwov33UcLbWLdtxYXy72SuYC1dLoCDPWYGJ8uESKim7eD8ziK2aCqYcM3EBCDR9SMSHFTKBgtfghVVQNh",
  "key31": "5xMtiJTff9Z2a95TJVcizvVNvg1LA13wVCpeEfJ64Pam5DkRFW9CNt75gX7rFNzcttDxJnAks9JA1rnPEnMQsyFZ",
  "key32": "669jbUTX74Q5nagZrdxrr7AMFjeyFj3yJZFgu9BS3Hj8m2U7w2ESW8ECyBbtrUXRWMfVzZgJXYbciCRfzB9kY7hU",
  "key33": "4iruxXGo3iuvZC8NWWsBShWaQA6iMNZGFvoDLFABKMgNshTS7SLXEywpvXPDR2NoBjyEzCRgQuApkxokmUVHXtxP",
  "key34": "3uGZZHVkHeXmD9dTvwQtX2vynspBna7MhdB2nmCETf7FxxvjbdTz4kc2wTyskuMosiCoFVaZaLtEbrM3Tbd2BSFh",
  "key35": "2CyaBwsavTFccVvtgHRKjnke5CXMzJFq3koqNXGdxo9EipgLsDPmBY4Yu7eyoBR52jusGLgQw4ipBuG1aqgv1WSj",
  "key36": "zygffJzDRgBzem4nVTSwUxEz7q88icgZZsALchwQw7wVaxExYqN3wRrMRQ6oiHCw6G5Y93yj1ewVaiLqwnjX24k",
  "key37": "3jLtAiznkffFGLumAfp6SqxPCEx6fNzWt3Pjny9Jofn98Bvzxn93hYkXMqNCdVxtgfaCWXQb15zap9ieTrzUdTYi",
  "key38": "3Ny6igsD8rwUyxsnohSN1tcdhTdssX9HYuKVUVtMfjbrq8BRBoE5qmrtf3CEZviFkHjmUr3QGqj4HUq6J5PJ6jXZ",
  "key39": "dowyMVf8mMDqShPdeGnkqpgQDfYhTX12KzBRAXnCknK4eZTVQxTyyLUfvVACBjRAbaXF9Eivpt7hVdFhi5sEyj9",
  "key40": "3ZE2kenRp5Vdyr3Z7BLsYZKPUUhadLaHsyVf4nhUsfnQhynzssi54iSWrKeZj4z787x9K8Cmuw88YyEje8K7uURd",
  "key41": "4ngqeP1LkdewpG41tdXrT7H5r7fRFLqfEhMuVGZbCUEk8Xgf4kjeGz3oTfZqNQVxKZjXoY6N5yG6EfRtcwCJGCid",
  "key42": "3ADu3Gv6t5txM2tNzK62LDVVBKwf2pPRTVxWRn8yX7WK6GvHkeQ2S9QtMWgWAme9F626xVhL1pWU8APFSju5ofN6",
  "key43": "3L7BRPzFrRKohDLDKGE4QimS19NRmgYFvudHbQvKvx48fnXikQUKYedoYxPWd3A385iue1U2FPYubfvoSaBM9C3o",
  "key44": "mmgtUqed1nFmbycsprbH6b2pWVdJa9ydfmfYZKKswmtMCHbBgct6omdjeF1RcqQt2kedFPMpSBFKAEqmbpTvMm9"
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
