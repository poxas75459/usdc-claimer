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
    "QGZf6t4eRKcBdkXNAsqvLfa5s7MvtHkRHRJ7aPqiX9XWMeBrDnwekPRHsNNhoq5EPZh8Ar2ZKbkCUwH4YrpAdkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cwxhJtKDADvWq8fgsZbFymU9c2hxKPbFVyMMbXVtyHSbdnKT6Yc8fYgCdWrSJbs43NyAX9LkDF3vHEykMggshn5",
  "key1": "3unYAn5nAb4h3Ky7AAoVF6HRnqehG7kXH9EgWekP3gvZyqYD3fHxPD5vgCPPrGjRTV7kHXfHmEMSN4n4iA1sBF9d",
  "key2": "45u5P5LFGwNTpCUkq1e43ocGcMaviDxFSnTz6FY34GqPxw6pu1CMHGGXNNCEqPGWt4basYP3ndPmncTrvkBx4gAz",
  "key3": "AxZWna1WoGA4SvtG5Jw9hvr7SFHiATgugozZW2D9PfUS1iKvyW4Uzf6EeMxogbb6fFLgVC1vretQZhFzHuKbz34",
  "key4": "4m14dyMmbzcoRpNhsm7YL6P6dCYY8J1q9n9S1eitTXCvk8MkGrYsfHdabTiLbrjkkYMKTuWSw7LtvLJLCHBsemY5",
  "key5": "3LoUApRazy9MDsdYWfu6jxKZu7DFHwGYpiQW69u1HxkdWeH8c3VsqPo2crdzWLcNNy8wMwfKAz2uSDxSJFZAnwzV",
  "key6": "2n4w6gLRSRF3wyGLVqqbHFznHXnRjUnGnPyZdvP8mDaXhh8HRTgwrxghjQapeNfLG3gCNooHCJWSv1PY6ix2rTXQ",
  "key7": "5Uo1aQF8anPFqKMZsZq8WTK7NwjDBaW2E5aFr8daPyjbzrscnsw6WY62123JSizRuegBunt3AhvQCfGkuUyM66D5",
  "key8": "4G7sv5aVY3U72NhWvpbfZPjwo9WUYBg95AVCAqd1BMddeUpsvAN6Jg7KJPaYLETxnUDFM7d6VeUMGhDx64SDq3GW",
  "key9": "3QjfwE6Pah4W6tE9aK4NtfJYDNuqtdWek5Pys5e4adimfhmHa442CoKacWv34DznzDmHuVQFroZtoXiRCSPoTZC4",
  "key10": "3iYubKdvhWdmfJtrMKLqVBGSLJoVrz6SStQfhbohKW2PTYge2bZuUgQWzFQMa3opCZKA6M8VNAMABYFvGdeFrJLx",
  "key11": "4WoSQrsYnXkyKvCYNBRpiRSWTaGUoQF1EmdX9NSCaB8X8MtRs243dCzWZ5nF8mLiNaGrxvmNHujaQmEXmd56w5YD",
  "key12": "3ZFSuR3Lur4NqjnNy2MCYn497jTDxdLt43xe5EBPdzBtETGtvzXVRUEmdm2HnzeRQcDwtdwcZgLZE7hhST4i9MTa",
  "key13": "Z6MfBv4AsJ6YVJ2P7grm8f6T5nQGKM9sfLM5ukmP1K47pYgUHAEeEjwoRY8t6W3d9NqioGT6xcP6ysqC5r8iw9Q",
  "key14": "3sMa6znNwGDaruk8143soKQ1dTtvD4SucVZ2xRFV2wNKP2pJcUYbmmXjCEkvkvYRgNHeQMYmKq5GpS1KJTnFATCb",
  "key15": "4g14vmjL5wVN8CvmuR4ghm7Z1hAdhGZgMKcZDpgsHCCdqdPoRkEW8kJXPvqYiGmoNF9PK8ee5gYpzYw9uEXA1bth",
  "key16": "3RV8zx4UXkJ7Ld8oiQRUrQwvzEyLD948N1v6smbkZnvUPbph5qA9bqAaNvUEqvah4atpuhJnnHrotPn4Zupdj81V",
  "key17": "4vJ3yLHHVGJNsomjzsR5eibJ7xxqeiFAVZjnep3KDtG1HKsKHMeFb8EMqz4kgb2g3EEquYsxRw9dNxcXTCeQnmR1",
  "key18": "LcRRvYoLUB51AuzLGfYFBUXZUsriebKtBoKLutyhuJDqV91XawkWKLE481QUvzynXAm8rvC5WDZxPQ4bDcGrijG",
  "key19": "5EyMfj6GFmr8SzpjfJ8PJUYsjeALSFTbKxwUGFTavcqJzUHdw418BBovVVicHke1dTg9L7X1K2tkcv4gZQiJPYvQ",
  "key20": "4ZjVDX7tNUkREYUtjtfQqjzuH9FKbjaV4d4FQTvMcNTypabSbr1gzWWKejHoRyEttXWUgt3RPKBAL9p59ScpTVap",
  "key21": "5FnGmufEp1y9x8i4Uy1wUHavXBwxuXj699RVUK95VpDgvqdr2GWw5pA3xsLcP3EyNQvYSNywCbJ6vXJemXDCQ65E",
  "key22": "irubmasA9ZDowoQ3sE1YGWEbKe1x2KjCY4mBPMVWkbzrgV649r7yBs3AS1At7HJQdwBVrLLG1XCkEYY1qtS4JsJ",
  "key23": "4iLi8y8FrGp2hLMTGgoY6HxPUiAgjUr1xAfRNuCYAHfwAniq7H4QkqYVB1SsJmp33fBUV5NszjmKbrSJvPzme6EC",
  "key24": "4ZUUi1dQF67pzva57qmh6JNm3EtmoWiYP8DDtNbBHFekXRFvS53d9dEUMEvfj1HiUzYV2aPsjp3MPYyKxSGT1jo3",
  "key25": "EMFq7pJijzSd9kckZ2ZrVQk4ghAESuKT58R211TpmCCzhr8HBJxfMkzkpxiQr2nLeSgnSGVjaPcCSW3uS7XWtoC",
  "key26": "b8UeN2RYrDfJvc6TX2i6qYkDnKuKKx69hg87sAC9HDts3ugtRRYJ2GwV3pCKQrv1XZ29BVDNPhDHD5ZbbwnrtCa",
  "key27": "4ob9y6HjJekeHgQB3mhvNgHPyoXakvMmqPM1WufG6tVZcFLy9cQXiGnDF3JgiidX3DDdCWPhDifgnvZ2iZwh99Ft",
  "key28": "59raJ2JdRaYZoy4rJUZgV885SmkPQBeZsXjKoWRqCXyAfKDeMDedQAKgS3qQrpnMVwtuhrE9SDQAZyZ9QfzKq19H",
  "key29": "Y2E1iKhrALh66LSvpYaEmKGEyBWJrf6nXftBeE8G9cdxBXH9WQGSyGELrjrGE4QCSot7N1aUuJ3VQu4LA95ox31",
  "key30": "5e991P6BTzJG6uRWigbN4hccn1Yzak4BK1CYJWpkxBWk54ynhKkyZpwg2y1JpJocwtUzLdu7d6yGQURPBrqJCGvZ",
  "key31": "62qQwRafNjFw1a49h1uNhUZZR3Mux9cvtBQkseVMVAKjBewRYGVabcuW1w4X6GvdPcKDsaQjegcGsygSEg1vYbKJ",
  "key32": "37C6R8pdV4hnRQ5EqoLh3dzKUZ7K3UTGHczkKqNiehu5b6aT5oFVCqkgKGMWJ6tWVhecuUk7HjFwnaK617HQ7JCH",
  "key33": "2vuExMzi3PCxccg4bLftTL4twKc4UgQE4MQsb5TccFexAqQPeFPqEwBTFvjtrogvGXWdjcwKK6FbT8GSgEWGaieV",
  "key34": "3iQsbCuAKDuNa7GGPuz1rgRuEUqbrsN2HT2QGiJRSB52qAHNNzrTBTxG2eL7Kd7JM6v7AZ8f7EcGGq7E5mbvZjY4",
  "key35": "3KZU9niDPT9etCmMyVJRCfmJcK5W69z2rPDeJL7NP5bKrir1aPhQwHt8p1e9SYg9cY4RShNahG2V9ppRnoYTYTBK",
  "key36": "2Z9fFwepd4Cd1i1C7LHwth65rHUAvsLQ9zq1RhYyi69BAXxBQB8WoiLSFBuAiNHaoPgsfi8EmPp6KknGfRJi5j65",
  "key37": "64pnKb9R41bQpPsFa5GdARndGDF6Q8eDNQWFS97DNLWVnKyKdFpasRSoqJyFwNBsHXyAC8eh2eq1e88RvVSDN4bK",
  "key38": "sd2BFLpYbCbFLr7YGUzpfqc6CFH4vE6wthG8ABUnaLGkTWCXmSzU54aZJoDa9VyTQdR2Ce4aeWJpByBGhF8ytKR",
  "key39": "5zCBHpMDRYYnQWCMaKFPmSvyk8dL8kmFKLi3BqD8RRL9uG5cAYAmBKJfiXLGys6bKdbQJjqwFy7Z6yRivpHb5et4",
  "key40": "3eCE2CnvGXchS7vwiBPsJKhqBuaZsct1ymg8EgERiLiUXP13Z2QMEjGgSWc5k4AFkp41odmLzRrRVv87f2RTMwR4",
  "key41": "o7qfoNSAuwNcwMBHQngmJWq1jovxLcc5AkB4xS2XSTJ2786XTRYnqsqj65xU11YmLx2YRL2juiukM5EuQMMpJfo",
  "key42": "2WuvaGKE6cPyDgzu8zv7PpNmnpK3cvB9W7htRAQazHvBp9kxrLBar5N51uTZTPR4hsLdGpD79fQYNVPx11o5T2eh",
  "key43": "3DDNGVfsr76wtkuD8LH9xm3cCi9rbEbUEoZb5BDhAMVA2zCHLYqgASSqcvsWePNxjnFBaFsMj9YYXUUnmRNDcHNq",
  "key44": "dTrk7GeqxobpVjV8gKVuTAtcg8D6tiHiqPs3qsqxvMeCtfu19atZt8JqtDfRNuuD8VrTAmDcy6MYdQRQrd7jVGQ"
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
