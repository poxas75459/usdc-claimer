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
    "2hnK5chSLBuRAF8i6KB9nMbXVTFnmcA72gQnewpnfewPKv8LJoD5StZK8PgBTmN4hFeAzKKKwDp5pCP56Kj3gBbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pNgK5nPCbHE4KTeks78qv8q1tmqirCMMj84A4dhPEse8dWDkwsMxTMLdx14H8yXed76fY68n1gt7pmDmdPbz78n",
  "key1": "2zRER7nQCauDFtEkWfYFC79Cv6jway3cNSaCaj52N2zYXnfZcQiCS9QhA6befNZub2kECKyqimMeGTbYVDyVYrt1",
  "key2": "3L4Mz4Hb1e2qjvdcFVvSVQ1rv1a1ZUNX4MJfmitLkTUAztuxVxRSjLkKYo4ftCB4i681xBMmhf2efZZBjqJfpRCs",
  "key3": "5euAWsSGAKWtFJFSiGa6DC6pD7bjBVw6Fd3NBh5n5v5XnGBbyeHqfntDevDKB9mTUBnttWELXLRS9z97P8GLPiWF",
  "key4": "5nv9gpuDgSr8qnPZ1bTeRKTJSA34TJ7w8xjytMSQBNf3oQfoSfc9a9FHHyYm4gmZysyr7Lg2XzUz7VBQBfDwkkc",
  "key5": "3AxRV9oToTAtPhoBGACAFRnXMUihun79cHZR8km3vutDiYyvdTFZRpQrPBe4dYRHYmvAoJjZEWKTdLPRxAiPpJ3m",
  "key6": "35xdb49Q4F8WCagY3i9mhXTREFJn7rCoViPk29z58mDkDCbmFz2QethZzGQ4XetzYq6dpgdPPt2vkCj8SyTLcFHp",
  "key7": "5tPGz2XCNJ2PHhaHG31YJGKS8Jo6fq4YwUizphjFSVUJEnPPwHgoLzCshr4VJBePBumFwjc4Ex6dKF3y8vJV2CbD",
  "key8": "2eBzcW8pxUCZfrCgnXi7vgaHV5tqyoDxXSYVjtkETrSsBgvsT6617tNKBWr4em97bzxQ5QJd6fUpyj2UBxUzhJ6h",
  "key9": "2vZyztn3VTWDLnWPpXVhcrnrWT3VUoVAdgFVWGUc4xSmMjhsYTiM1oUWXXWFHo3Kcw4Sg55qDGPhqqnWmxZaURLA",
  "key10": "5cdvP68axe4H2iS6UeQCK1SPDLsR2J7zm8JPmAzVwbSQssSRejdnZLCCd22eHVJSa69YfdXfuBgu3zJpDZpebx42",
  "key11": "5Aij1WnerSgqPjmvv3UgCbVSLJx4UFayu1cppEiNPnMjRWyZ9ZhA4P9ndpULQjQNLN7i5HCX9qVwmLVqqgKpLnvm",
  "key12": "5FpHK7o7iRupqstpnd8ThfpH1SLyGiYfKrz3QTU1MHLf3kcMo2RZJqtpH7GBSNmn754ukBh4NZyBQwVPFHoXZsUQ",
  "key13": "3opm13zUEJwZ6SXKgVG8wXMmBKb4F82gdVwnjSJw2UnCbyuTHg48jDk92wWz1Dy5S2SE9umzyHrWq2KqDhPr4wED",
  "key14": "S7SgSsrwWajub2dB5ueiTDS8dcdg7c68bFhYhqcjphgfZ85AH6XZxH7gxxUr8bne1DNmnQ7AGY46BGozRMhuRi9",
  "key15": "2n7kUYkgcPhiAhMfkHLGZHmwwbBCdqrH1ont5ebgVqf7UFTv3NRNKbwZWtfP3FKKicBLiPRgwgoJtUmZypSc3Xk",
  "key16": "5Dgh7XZDLncjQDAypWajBov3Q2oy9ugSwpWiRo3AiJ7eyS7uSf3HRPZcvpBwV8kZ91yPQxHhtP65hftmxsC8aAGF",
  "key17": "3aVo7o7t4jpMcubkrRsWqQXgTzjZUaE7hdMWEi51GtKtFhhtdJkRNmmU52ZLRSNBgDD7aQyJnaRf8u1xk6BNtB3o",
  "key18": "3mZGzsrHW1QibTpZsc1AK3N4p6SrAQNiszudm4HbuyxCgeaJK6b64YBDuQNYbn5M5vjTMjToh2ZVk6FGGPjRfZ2o",
  "key19": "5K3WuByqodbUGhBnDS5AUMxyp836Dj8MGYkFUtLZLbsqPgUJuA9cx9wHhGn1bqNnyAvsueYQmmeHxdqW8MQCesQS",
  "key20": "bNd9jtdd6fcH7vKzgmnoTrY8i78f2moRT9DVSAu3AJZrLqHTrtVdNLp8gkzbMu29X4vgdRk6fATfgvwRkMQxo8y",
  "key21": "4AjyjyD9egfa6KF5bTQFGZau45FfyvKZkrqapMTpn9Bj1rebXLBwryxXCoFVUqNsWv9FqYkconQvd8xbTPBs9jba",
  "key22": "3XRB89RZHgKC27A8G3BtKbE1vWem1PEKA8dzTSokL2HBN4pEKDB29NeDqjrecu89yjbVnazwaWYMp1K2R1jWUCuC",
  "key23": "3Qhgjad7vmxFCPnEKTN46oUHmCp4CJxC8DZ9DSDANTL3KyWmyphhtfWfECtQfiZ6spBcJbmoxeVJ6fFxwvUd2wSb",
  "key24": "3gvKo7NFuDdKquKHoBFw69KVVQm2mz3KMQgDHQRRMDZJMnHJ6wq6FfEW2Ctgdbt8duFp9TihU6roGHNNS7HkupVQ",
  "key25": "2cZ7awJVzrUjEPS26CdVoXhDA747n5AGRrqncHHbMx4rZC8XD7cAJ5458ZzBbDF3VeJFegaCWp9BSiwiMqTN6md5",
  "key26": "2QU1DkUcKvqNfbLfbD2uvvbPkX7qVGgbcWnZHE2o5yCAfGdGopYW5WQduEqkJE3f6RkJFom8KofJrkvUzwitH1o9",
  "key27": "31iJqriCgMs6MLna8VhTu7JHi8D1r7Ji2MnHgcgA7U541Gzz9acZgrmrTjhxC7NKk5nzv1dmKzDR9JoVNowJjteh",
  "key28": "3rJmPfuTwzi7dxxbAnrcHRouN5RphAFGB3TYWyutyLvWKBsVYseMKuXYvatUNgTbsKfSQLtM8t6qY3h96kthKEDX",
  "key29": "hPAYcxcU4kGAFpH5ypftsBk25aha4pzgxjdtBCq1dCSQeLG1ppunuCv55H4V6CYgEbWUuSwhd6ewdu3CmweZKn9",
  "key30": "2Q8G56tdoMquWLTowR6vnsGCXGvzZcxczsECnAjyPmxt12eUak8mg4bh4zWqvobGvxUnFq3YvaD1Lj6yif9zexFo",
  "key31": "4RG1qbuw8HGd44r98oAcxJNffwgbGBxSC6ZQJqsnZ6FwBxWSkvK8TsWj4365vXkfQvRsKKyKxFWGqQSvvBvZ2HX7",
  "key32": "33goiXTp8njTLNKL2SrajUrHMYc9YNeguLgVmbBxRX9gr1qaivVxDJ71DTEwGX4fJpgTasRrtFjasZ3Zd7gfXfjR",
  "key33": "5sbw1yGn45Jte4MJEb1Yujp38zDkTyTakk13LACwA5kAZdbfHcz3eQTHKLSQ9i6vGLY1AMzLwcASR1hhq2qVG5nJ",
  "key34": "41f3qeZu35sk2fFz7qP1vchb5K6i5HkFnMfyETsQFJroCFdtpipAF8A646GfU2cGBisBvwbV6KkkU9bZ5mS8u7av",
  "key35": "4QzYbjqi5H5CPHYDse18QMpqDA6j2T5MjWuCjihBvvqNpmLM1e6XoKZj4YvUSif1igzszBaYQxJ1xmV18fwtrHkY",
  "key36": "2BgLKeHmJNGe3Fz1CEDiDwWcpcUcnMpewkpfLMQYGkshL6fVN27jU5b6HfUfthUCwj4vfDoMFc9suDR7Hwa5b5px",
  "key37": "akp5Aw7qSgoVdhm9xo8CnBW8CzBtcHMCS5a4AyLTaFAGtXpXqEi9XBmy7YdB5zB4ZuzGewD5gghmiJ8v665iCEA",
  "key38": "4AuNNua1LmdPuHsELAvDNY3qxQwyZXYr6rhL4LjgETkyNGdfoAnyLRKoGbvjGzHDsWePnU3PzzDd1DaNeHYBABYb",
  "key39": "5n6rKeZXmkQ8kqhdSSCeYrbMFdFqfKaZodTmTE75wRGLouhkwAjA7q76R8nbp3J83jHJfbsUfiST9pfjNss8PbXh",
  "key40": "3pKDSDJGieUkHWDptLsf1V7nhiS5LFX1x8no2vpMHPLqfCka8zWeYPrewFSa15qN7aEvWXaW5uTG3GoSEJnuPvro",
  "key41": "38RsEgFQ9STxN6GdtmW1UHpQgXEdBBw5cpKQX8WtUR27Fe5SaLFBTVweb8q26GkopDrJQNqFpenUPXuv9c2RhZKV",
  "key42": "4dXZrkpvGv7Sahox15jhhYV7dcDAMzN1BHKroPsGgqmSgNwZCVR31WSPn8cEbhe7AaXAyrFPMqSokoL61txzzh9X",
  "key43": "4DUBdUCEV6bX8q6GMYnXadk4vvJZK8Vq4SXf9nJRkWScwJR6hVRKPkCh3H2sUWKGTmpNwp5tuThPwA7uwEW3moQc",
  "key44": "4tPjrmbmk1gETnmao4ceAJTv95XZxnwfDSobFBKvE6jxKgEDubaVaojUYWkgbgqhUcBdRLqhai6GcHndSKsX4k6w",
  "key45": "37WSZtiRneZ8uzqPFwgMb7Czv7eYrNWWqgNPcB5WKZUcrnaM9eeAAXZyFMBKEUHTtCzhYQZhu9opHcSFXwXxAKwS",
  "key46": "2DaVE3WkVoUYX9ySDwGCtQ5HEAaJ9w36XE1ptgictAX7cooCZCMySpJKWbiCzHgkVAwQxnMiCXWDfDxQJNyy6NPF",
  "key47": "2CLTTgGcXmmVVu8nRmYk5exJNrFnrX8PbCgof9faU7csABnnMaA4DaBWJvh9C8iUoNdaErKGrJqkEtKXuntuNdXq",
  "key48": "35CxBtnT2ckQGJapA7Tp7vKExsgL3zvRAHF21cCT9CWq2VRTd1c6YD4osPLPKh3QxJh7KYK2gMev4FJ1n8CZD2T2",
  "key49": "2YaHYXGLJtGtypqnkwSf6LnrRThqDo7LAaMfPLCCQrjXqaCvutH89YXXLNG6rvZDfMfxAqEK549mx2RZwuNp7ycC"
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
