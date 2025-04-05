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
    "L346nPEA1hcC4netPeQB1M1SznMjBESVq5sTZaYRBF5xgy1TSoBcuWAvtCZybATANXpfKH3xoB3TRYy5GJkSeTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wB8sjAM8FgzcuYVzPyfzuLDFRv5LwrzLWaVNXxpzarFrgC8toZhk9B8jcAZVQisx6cPuuz2gZ3qBDoPf2Uw5vuq",
  "key1": "3WWzk1s3THVaTj2VpTXWy4DHctz9VbS1M39TvxWU1pZ3THaBjFFtR5GJ5Ar8fRxqUoiePTxdRaUam2R9RouA2U6p",
  "key2": "5RWC6Cp5ofhJfFsGV2hejSPz1h51hZZexVVNmFqtCbbKaJw6Vbtshq1uz1zaoDTSDDACETeK8NLzVfbpFBDuyehj",
  "key3": "36P8uYzaqdcbB9hra58xF6o38gL4ZLTorvddfMytpcKMEJNQNxP18qaB2qGeKYWWVoxhBR8QGRtVX9HijVj8Hac2",
  "key4": "5dSGv8rJU5ixKgzN4bqHoods52A3HFJsDfDed4VhWznWiVuw3Y2SoSLKUKDwBrnMsQjincN1SqJDGjDm2t7PomF",
  "key5": "26ZvB3gQeUaJXo7vcKSGNFGKiQJEPm35Nemdz2JqXoTdofd3wTxPoDXWY3EDQSQH4FpYVQygq44gVmBRdF7pokAS",
  "key6": "3Hy5nuYijyMC83didffj7HmweVi4zzJWCsB5XFA4RKUxSDuHey1asqMBMmRfWppYyGsMCfiyvnANHyfEA9FHmyUq",
  "key7": "53VNUbcx5tA5nrMtRuV4EzrKefejXJLNCyipkqKfpfyPpD596t49K7432bYwcwdxqDLYUdy8hpf96Ejqb9uXb2Kr",
  "key8": "2jAS4bY4h2G3nR4Z4bBN9Gw4nB6X6Nc4DSsMd7EVCChmXTAMg2HroMmRwsR68xoeV5NKHfPvJyLb4XS4kHVNkCev",
  "key9": "2ocE1pb33XZoiADEBoTeohGCRPN3AMGqPaHaZgcbeyXCfkCBUk5eyoV8L1Xrcwk2uaTfY7QYFWTrepMimS3Kso2q",
  "key10": "4tZP23Hv9ZTL1C2cD6VkMQqCwqsS5hTFQXsdXo42kP6vJ2D5fF7g5p4rKoUgKxdf2Tyi3u96zHCyq5wpEJUtXchE",
  "key11": "5opSKrfVNBg7m4194bK1mPoEz8FkaWUGisz7KYCJKuZbmVJg9xcoF5JRVLUheqnCKPiNJ5rDwspZj1niUo7zsTJD",
  "key12": "4xVo7m5ui9xedpk2WKtwZoZuntnjy7MZU1XAAkwjMTL4gy9Sn9nRzLMr75Hh9wPvWJ4yBmBnpbNc6bT8Yp6jsdB1",
  "key13": "2yhhaEeyFE2vz82dh6PzJMg7g3pNUHDJpDFuwXQ1xgVvEsCHsmMZh5q5me345gkEkFXzdwhrAgv5c7sh5qoSKskm",
  "key14": "2QoXZm4KjVhNhfPPKn8UKtJEDMe76MTTr4DgyfyNQt9VnZ4zbMn8Gf8JFsaDHYU7VeRwV1fDmaYDLRovtP38Hzeo",
  "key15": "3GRM2sKr47qkU3w6ycn3yaJZDLjKz2kK2vz5sqmYAQ426Y3ek3W4e82onLkc6FKebTeL43WvA79wq1KyAipqQZ3u",
  "key16": "gBU1pwA5dzJrMnQ5SAm7KqNiwW2YrFkiUDN9yYJWkh6UnjV5Pca9o7JVjZnDZhQcGbpxSGgKsZXdV1TPwNhcoTo",
  "key17": "FTWo4r2Cmm69apP6bW7ymYcu7LPhu5W8o8CDUc6neEERMAXhzrfeenGDvtwgRoAm8ULB9fjiFsezWyTRL2B16wb",
  "key18": "5ZwsyE4s4m3SrupVA2ht9Y7eMi6MmZ4mF1SyCPmhAQfLL7XhpLoJanQ1YTKhbazhuXEW9ePQuFut13p4FqWoy9fX",
  "key19": "2Vef2mZ82ia143kpZD3pkpKa5iRyVs625Q6GCm8NjsFPp7qyLW1Q24YyUkQ3x7VcauzgkQE6fC3pvEwJ3SfwLYZX",
  "key20": "3cLTXuGvfdNFSnCEtKkWPUM6667X6hLX4rHBF2HtMnodMjzygCne1Yd4z55Da2KGnM7cVrw4WMBZkGGPJQuPoa1J",
  "key21": "nKnqrB6PBB8CpJ4JvsvRzgtr38Nh3JwcEmNXmKDB8H4QwWtmUHXXy8q3f1toxDNCsyWHpHUM9HnaayMjjMsMZSH",
  "key22": "2e7cUTtEo7dB1iZcwpVxRyeq1bQguFwkLEgMNPzZSwq5563PhGGWoQMC5BDpi8Gtiby4FBR6SAfu4DCgGjJwXsNu",
  "key23": "2qrR9xQnqmzw6eQFAf73yTPpJJn97jqwdp1anyQkvxSacuhVc3YDVdyPXMMUixAhYQV2imP5v8qqjciiz9JbZbQT",
  "key24": "2Qk6HKgMUYoSPtWF4zbj4kpukdqvGzJjuLz5eFfKSnv2AS7HuaaQVpbLSMxWPCwuBpjDSVVxv8CzsPnRETF7Jvo5",
  "key25": "3GywVbapUHEPyZJF3eaV4MMHTFLkn4rWhXc4QpfaBbQNhfJ77o2S1Rndkonj2EYenkmMBGzx716hXmQKpQyjVNUy",
  "key26": "4vTMaUFtpF4rvKyVSpWixrQD1qcG5aSSDqo8gV9h4tTCDWSvKcZEppacaUxxAmQFMU4r9hQ3b8XFLMFQMHPw6KnT",
  "key27": "o6h8hiKHi9Ft5uP9tWw9dmnBXV7menaGg5pFP2HaZgXed66ATNmqXe32SJHzwcKSeUH4nc8iSyVoZkLrTviceMf",
  "key28": "3tz8dug9HwMdF2VdVhkMQzv2wiSSDaAyXz5FdVqjXuCvxoSugkPGoNFpgas29v4iTgMt94fUGzk1TfVkizDEcfuS",
  "key29": "3qexJ7EChME4ZyedN3uTeAhY2zj75qSTy6NrLQ8DQ2cmDeV6A3krXrX8JSFmBx7u3PgxpJheVLBSB6cctGd9VKjJ",
  "key30": "4k8rfH9zUi17nCVxY9vVJbQNVvW4LYYPW7inKnzTeRGFZKGddG94j4BRSRnBBsEDSkShTz6n3NebfmEn8Z1jzcD6",
  "key31": "5Z8aHJruFfRe4R6ZBC5fFsSAvLn7Eso38RvNu9ed9BvvzD6ZS8mFJqR4s71fdvSa7nCPJMfmhaBBanYNnkv4EF5b",
  "key32": "BTE9WXr7icCX2QVRicqpFRKVXbC8a2wJnCK947wLqhm5wXrRztAxYHPaXn6GjzH1vMNPvW7oEkbC8yNY1q5ayZ8",
  "key33": "2h3Z65Jq47APhH7Xso8b49fN3zVc1GoRP5XxSFr8DzZEviSnDTAng5rpwocwXH8JBzeuH8GcFZP84Q2wMP2kpyj6",
  "key34": "5Vn9icaWB5u6V2i3mScHnWD8qCELsHxmuN4nwzQSHTwV7nhqJGuu8Bx9u8mPcuRQzNfephdex6eZdTbYaeHgn1mK",
  "key35": "5Gpj9btWxADpPNrQQQCSThnzRcQRvGR87VPTNKWSWxvXL9DP9L5CQy5KS9gwx1uAFt3jumQXvy44rdyVgi3vqoqP",
  "key36": "5hugFAnMdiYFA3EpE5E6oALvGixNb8x9AJEjs6R1VKmd1rU9ttSeV4XgR4EFZ9SwtrzVrkPcb717dQhLv32rDayK",
  "key37": "3zEcerngKHMk2k54t3wiaaj65j3tP75ECGVdM7KtsyQKv5VzeoZnFJd5ZYDSfs2CqS5bfbY8ZaVjgaoBVLagAmny",
  "key38": "4W9oZ3pymjzgorq8NZb2WqNfXWEARCdzBfmdDgkhXKBWSBYw1rGARsCnAXvLJdGwjSVbpgFYNBBya4p27TiZFNk3",
  "key39": "NztHagYoayYWtEawChdfwzYE1DhmATz9MaDMDdtzNoUB4rmyKp9dj2Mcv3A42Mj3M1AYQPqkvc8EBfSYVAvg5Vh"
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
