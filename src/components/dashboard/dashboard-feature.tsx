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
    "2GjcR2MVA4bZXBXT2Ns4C11smSBG8LH2HdRfd76KBTymDA4CmtornQxf6D2sgGrYqYFMuydovEagidjWf6jxSM3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZcM4gEZRjm3ekN5Cr2rFnJZgABTy6qbMsortT6fAz3sgw9tQAL19YyJ9KQNyhCB9LXzJKErxPkFTsFykgxPRTPY",
  "key1": "5uzBxD5rPowb4DrrasxbSCYrnWryoqPes1kTNXxxVtZSKA3rTjRbv32YnqA3VkAQWNipxpzMKBs5gbFz7zLDLoEk",
  "key2": "cMQP3ecE3Jur6mw5XkYYfKP3GZRkkGQhN2QZygBJsRcmvMUmi5ozi8Qz5yPcaWGg5QGzohR6fMd4vwf85oNRiJe",
  "key3": "by5zfjxow5mRvZfxrhx7Sp5Hq95DwxyJzobpeJv8Xh5rb53TFkoSpxAUMVm8HpZ93JffMTZJEYksqivUWp5n13Z",
  "key4": "2wdvPcQiDy3y5qjgdqsFzdiKGq7bMfXeJJhHzyYR6PR8pSnStkZLaRe3DSYXqoJDCeEfEnnYRYzEtxZPN4tSAyLE",
  "key5": "2AJAYjckkETPt861hZH9Ypo3CXVqzJ8sdjsrwENkADf6UgtRECRCuicMMBgr9UZrhSWznupSWFqiN8diMuVGea3P",
  "key6": "52kx1gzXY9T9pzmRoKsThu1kq88gxXBwMkyC5E1MjTaM3vZSi9gh2t5DimjfJQVVJwUKjRvSHXKqq1gc2rqmVy4u",
  "key7": "5qEKBhzmptpLR4QAhKQpS9cAspypUd1mFAjaJNPf2aQTBgBZhxyP1FcUa7XuyAwicDDmCzEnWA5mpuBLrZeE5gjE",
  "key8": "3PaZtgvFnHLKDufWSriRoLFhyknM4YGkHGzoApeQCtGXbZsfwMsybrREGaZhosyXWhAADEbn7oW6G9wwg2gtjRtB",
  "key9": "2AGjLHcUebLj1NMR552D5Go4b3pT8rSdhhTGESxYCpVwcs6BAmUaF6T9tgYrvxLGAGYWwkMV8mfc69zaMEnGXu7o",
  "key10": "3nWVQ6oPBbyrcavwCzzw9iHMXCuBc81NzDCVwq6xgaQ1mqVBLqYikvjVwCqddUvzX5XQinruBG7DM5uo7SJrefEs",
  "key11": "3yG2hwSh1bAHi6p8Yd1aMdqc7ZToLeZPeuwj24hbTc16y2Z8QCqEyWuC6CadkZEahViRLcTmiY94NMFYNR4TZra7",
  "key12": "49ETJ1fdCSR6Dr6Mu8Gh66zJciDZ3DNYmNRCCEPjooLW7NBvfNC9zJ2gDLgwfofLGocBDZkBZYRz7idqDGPHbmyt",
  "key13": "3Le6CgMyJaw6qQTe7pL8KEiGujFrEgD74QNKGrqH9voijd9nHDSVwx65QphfViUSXPTMCnE9zM6epcRLJBgDQKUe",
  "key14": "4FVYVXovupL9Lioc4yfpGmazvf91uHUH1tPDm1noKcHgrYah2jQ5JZxrHqizwRFgzty1aKKqHL1EbqaEDpad4YTf",
  "key15": "2dFzBkRfZvWr5uFhQM6o5pE4DKCcHWTxRVNukvPXL6fY9RSv9dUYuVi1Lf2Nuvz5SQjBGCUdrvApcZ3ytAUniCYZ",
  "key16": "JKS5u9WVebtWZe9ptfVZQDgE6dvmxp1aoTtN3qDhMvHytx1pt6J9Kbx4Gi3FftkBxiMnVUimp2ZxRsYpLhV3wqA",
  "key17": "2hzpc1xmrXRgFjFuNnJtZJ6ura9CS3uJgsiaCt9zDY3vC1ekx6YtZvDx9rE8njjGzgqy8G1z9gmnpgKkJ2JhY7gf",
  "key18": "2kkC1sFtL8LcdmAxqFU9tBMqXVpkLNfFZwtojpiYCstKyTEyxgCuDGYzQWJbFju1kWfsuJFFnoAyooz9Vp4KTsp7",
  "key19": "3eCNXJqkuebUapQWKhAuN3ZvwBYejH8EkcYvuZ3d9cfQvn1xHKvqHHUmQ7ARM54eY4DFrSebyZbkuRQcKKb9Jo9T",
  "key20": "4vRNx3zspmfBX7QDZyL3KQ36AdiQCi5C9oXCHiG7oN9KDRvFQavLBTvLdFLeoa1Tds2B72oHXLYhQcDkePZkSZcM",
  "key21": "2SDRbwWocL2wU199fyRKfrp6eLyLvjZpoxP6thTFPTDuGGUuE2hQL4kX8rbJHa7z4NABJbfv9PKNnhqoeHAik1Zi",
  "key22": "7HcXu3jUUkuU7bSDrZuuSuKUQrLxCJ2PQ1yHd2iZo1tREjC5PRMuvPLq4dPtzCDCEFFs7RxwXbNf3SUVVebw7VH",
  "key23": "397PEUEkfS51HjbWkZGh329MMU2py1MTpcU8nrC6StnpSTZKCHxv9gj3zzbdTh33asS5vUerviAhSKn3iFrEDERg",
  "key24": "2kHwzP7jDmpPJY7cP6RuVEb4kiHRxDavap68XMHEcJGjGZyngQDhaFeDcMrNkGNUkg1ebvUHsg4N3qXWNMrcBSu9",
  "key25": "4DfC9TS1SP6gnLSakvijtntfbkbPkQ8EWMXnGmVNzP2QDgS7sRZCfbJWbAbXM6wqzCR47ttKShRnV4ZytifhHjYt",
  "key26": "5xSox3xf6gnjLqVbnpAeyeTH2V17gu4hRWmTiap5QEJ2p5rcda4PQqYxkptw9et5VbG5ibyAo1FfccYDf154STJJ",
  "key27": "5hDykzAMX1SU9V6xo6H4dLaVDBkmusSZezbYWKiQcX4RheGiRyMvxgT18gtiBEiCg7x2kMLxCifXFRRfApWKE1A5",
  "key28": "5egtgjMQcsxifcC9rZurfepW1yUXvbd2AFSvEG1o6sKPvM9sgXrsfjdZRWigJChTGhV6U5je9Qj2d9bbMi8cyYNc",
  "key29": "4zN8Aj7HxCaurbZYtu6jnMz5GfBHLUuBMTu5wSY6bF8CZNooHrDrfyNY8iGR8ytFFrZE6aRLbX5gqhQRUQvQU7JS",
  "key30": "YvfEgG1jz179JfivqJ9JLsLGqYdbHsGiC8VUBjh5KztqFsjR8pA87AA9qveXpofGSwuwwh44LUXxk69kZ6ALu71",
  "key31": "219m7Kwa5NjDLwbDBBN6Z5Nwa9jCzk3VLmPF8yqkMYjNkryc9rCBu6uqwuosGueFtuUPiXtHCrRj2HX2WxaGuHB7",
  "key32": "5a8BGDB8ktfvHFhahCy4UUuBTHEibSGTumwAdvrcAfLadU91U7K6ekGDup49dyTJJyCG2jdzFjHFCg4Wogtq7CzC",
  "key33": "5tNUvpb5AcUFLtHakuLgCLaLEAmdpi5kBvEtBF9rgCX9r4bqpWHLbtD8tKdsvaZDRnSxRmhsqUBi7RncWzNXT2ho",
  "key34": "5cgxGhWw93a1QWUghm7P2VcLDjQWHbkeXKNxkc7ct4JcN5inrMrWKSrKwY7FvTSUBiKuqgZJsESbWDyKwW23tzbV",
  "key35": "4Bo5E35iqSNbhcWdA2bVceyBC3Ged7fAf3pCVantjMo7G5897F1fM3NdaHjDF8v8C3PErqrgoyxJzJTc5H4DmasV",
  "key36": "5NLkwP7QGs1KpVwWQLX578mdMfkSVRyrj2YtburgTAQaquQNzAzK2WRxzYN94hniAwk3HyqNVPCGWbGRvsGPZGAy",
  "key37": "u5kaerVK3C7C584Q8Eyi5CQm3MDiy5MuywV6NaaqVZzfnNBmf6myXTLG3FvFRMFrN5FovEwvHJ2Uhua43hwaCWp",
  "key38": "2iiCisWd3eaNMyhRAguRnN32E7zf89GGjuyJEnJf4jibQUwrnJswP1R9eqyC4Ab785owJDVatERfx16QfwcGUYp9",
  "key39": "2m7nr4poTHNhUwUuhWfySbcRXNFLyHeXbfWUrNamBq6AumadDbUbhwPHHK9DoKjpqt2bTz9BHGyZWmEvCk8HDtB4",
  "key40": "49JGDwtUVWmUy5J8KLDiKkVF5hnH6ZeVk5eg82kAwfvso2C7FVTYS4ZGVfDKMDQVYkJHFsqZe44fKHWvvdDQwBBf",
  "key41": "45TJbxFzEn34M6c6a8iZE1Yyf49rtmR81dfgQJaN41Tvj7uLgk27ovHSU2kPe231wQ68jRP8eA5TPTkVxKrr21C7",
  "key42": "cqLXhqnhJX5aRUkcJ6J3PjvkhRibxnrcdN4vG82fS2HsHohC5ZnfrqqWSKmL1YjSCKRuGsdAHHVsCSfXp6w7XVS",
  "key43": "4EYDr2asR7VBpysMgL7Rs7EJD4ugQRt8P4b1XFsD2wKoBP6A3tVv4kbkTx4QBZLXYYATdNrR8czMkNSvZnHgxeiK"
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
