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
    "55E3xaVho8x1c9D58wxeASoj1cP9Bp3QoTidwdVbpJFqx1itm6NhoDMZfLqqoZrw1BCzxgtaiUGX1ayDUdT2rN3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RixNMme8mkeU2o5Kvr6SqPEfMS75KsjegGonivu71nhwDsN1AjrAPkTYNwfGkdRiuDYCm9kpGwotLU3yrJri6id",
  "key1": "5TZCnqpqUwhRRjj7C4Xq3oSEnK143Bj3DeRqKP853Wd89UXgnmndUxgavRduqLrqn1BezDvrj7VBMiWHf9xQDTmN",
  "key2": "4xAAbPzxJcdT8VNgHKmGtXFgc8AbVav98Te5kf17KjB5SrWj5w13Wr84vLvVfo17bYhEQKAC1K2vRYkZRVigdvTS",
  "key3": "4BHwQM4minACoxYF91zE7324HVeDe4brvnUqZCj4SmeLQBmUrN6Cht2WFmeN46Eh9xVQEg1mdaMJLsWc765G2jtb",
  "key4": "3FTYo8UZgfLNn5oYSEwwbhc3gZmZAfzmT13k9wUk65o2CnT3sXbBS8smT5ERa4h54wV5fpTdY9G1iumSxRyCqLMc",
  "key5": "SNzot2aoCWU7cCqfLVkj6zEKgwkLjEgUwVvgBErNULicppsMw8zQ1RXUf1UvJvQHCrizVn4XJDLAPPSqj6GQDvf",
  "key6": "3LUAPPRLmPHHazkDgFT13KKaMTULR2yPCnkn1ZZQ5eEDMqN8AP87TUMfNtK3EGVjVpwY7jhQ3p6k1bRT4jEQEf6R",
  "key7": "4Q4jcMcfc1d9bqwrifcMmYx5tczxVwxFV3MPaCEMsadyXYpkT6F71BF6ctg83o2fXvsJdJ4X3iKUmxyK26iAYANk",
  "key8": "cHuJMiUUNbMRwchxeMzQ6u6xy3m5Vke2pn2GFCMugSqSVCcHz7bnxSV8CmvUE7BGaZ7aVGPoPV7bR3aRfYEnQCT",
  "key9": "4KLz8YxbA691JRJ2YsKkKVwGXwfXMhD9DqeTezbmwLuU2wc6xoC4Mev6qc8eNFYWE11q7GTpcbHcW7MC74y7vsM1",
  "key10": "jQshbBSeS4kNQUYY9jyL9LKkZ2qbhW1LzztYUJCYyfyvxz8AAuvdoHZsrno81YfhcSykbFcwom8zLGfw4dGuNkU",
  "key11": "kbVtYqXBZXEJENc4ybpSUyfzG2YjMA87jgb4yip3QVRExcqdHuFmXqyRyQg7jMiUiKBGUWSsDPPoTzGiBJuH8fo",
  "key12": "bdgGVji8QAKjCmiXgnbxbdoWeMpuDweP3daviAP1AC1Cb1Yi5JowWJMTBTUYv2vYq3FvgRHb98s7U6cqsaDCJRF",
  "key13": "36qoFgTF7WYPa8iamPqwzyjYPo9tBUfm4KEnfLuNQP1Xr1hT6RknaqFuRyMnHZWHMAHR3NbDhgdiDzuzv2ds9ieQ",
  "key14": "3U7F8GbMCBXKUWJ2nmMAc4BsPPnbJPR2YQNsHbrKizmmyd3msADmfvDy5VdwR2EAv29XQraCJ9KixkXA7un9x1qp",
  "key15": "5CRdmhPBiiveJGNcVNHQ9yYAqJ5XBvPxaibzLEgz4mpw8jjh4iCsSkSGKG8ue4BTeohWxvjhxuqRuXPX1EewH6Ni",
  "key16": "4yHk5UK2qt12d9gY7rAHoBtYnUjmYfvbf6jDMq8M23HhJuu3YV76kFumMbx1UmY1HDs5QC8mVmwJSyU7yCbTKTnv",
  "key17": "2xUfu3q8DQgbg6XdCg3XVDbrpPAcAdDsxguEv7X29DKLobPWXFvVTQdCWbgfnUyncF4cFaESwPw4jAMGvDM5x6ra",
  "key18": "2KrjpdSFhus7jt1iCACi9P5mY718eKzSzAiHP6akw5cM4Bt5xf2QzTe8D2tJ3yx3sv8LJH4Dktg3sCZazzD4v2VC",
  "key19": "5NQL22KCmo9P81o8p6nU39XZMoG1rTeuN59iv5YMMQv3yoXRhdqosmmTqnB9HVypy7aaXY5o6y4FuPZkFh5Fvmpr",
  "key20": "3MBwziugSr6t7jHodYFW229GmJTWgPFo8ZPoXJ5XNd993rW7P5EqRYJ9fq9XF8yUEMb32b2TDB8ysxDDLhrfeLdg",
  "key21": "fnmTsF3QhNeFh4UYDeVd5p9MWsVKpfwsBMj5K172eHn3jApLnpD4eDBH1YBj8qSHgKBzLBoEapKRo3quxVNgsYE",
  "key22": "3YUyE2dDk311ELvcXGRUbK3ZisgxSVgc8Bf8dxtBPqHyG3ShehHiieVzapSPRnH3N8zScrnhGYrrMvTWuHkfjceA",
  "key23": "56gVptnr6sTWiA3JfjyAViRcm37KPRZVcCB8EkcHGvn9UjbzCrKWJapumFQgESe1dSnUfWTCZ1x8apacGMe6EejG",
  "key24": "5TWh2DWXVevdu1VV2USJJv8PzL6CNSnTY76Vs6fsbR7xjFPqmioiUZgHpk41cMVRa72NgZYTmW2iKBXYQ1wg22Cd",
  "key25": "2sd6XYrdcYAt3Xe3QDzzpE7ygCHYovga6AXtbQJzEzRQte5229NUGeTLbkHqzUWyZ2jisw7JJW4eGGQKohWEsN6s",
  "key26": "5dBbd2w1atyeDm5rMkWTdi1GfZ49ZQvnwZpgtmsSmFemtgRaoq64cULuB2Yhvh1oeDd49ZfUJGLN8M56GQvRLBWP",
  "key27": "3YZmPXYjDTDeBf6FxPrnAczr6L8KMhtL1GpEFFKpnia99Hyd63H3wm7Us9s5qZxoCv5x7mhuuC7U5mDzNiH2YKm",
  "key28": "2gWcav25KD6cxJBUJCEZkoBXtfjEqfECMRxWzqNfRFUdNNt1pca6kiWvKFJGVLeSRBp8iNP1UTJtzj37TE83KHks",
  "key29": "2Z3Y5gGgbafVHGkhNivjisziy7seaMYY3aje7x7sU9G5ojDxWpRGmC5SfaBnFzWbJDAA7eq9WscTxhC6DHFP2Uzi",
  "key30": "5v77FpVvyVZBj5sBCC644oaVC7CkZwkQ3TjULmCUAfxsVijG7UPZvtB5TMSUJdTaDKqU9pExiwmW61L41ixnkQuX",
  "key31": "2htot4ANJ6jQicM5FaCYEXgocTRXLtiX9NkkufrrQZVW7qhaVZBcQxEZUTPqBkA6CEZDswwvxMZCQiKQc4Xi8y6T",
  "key32": "4uuUKVZShGp9b6bKyvkvBxKqzxyZ25vcLeenXqCkT5uGfvySjGHje6Y9m7wkwECiUQqdJPSpUKTj2H7zWUGbeEe3",
  "key33": "61DHfggNKaNHfYCRTjx5yttXSwN2PxbfxpaX1vQkxgMvSz2MKq49UTjLUjfqzi2pcwoPAxK9S3zG6piYmZgjzZ5w",
  "key34": "4JWvjgH4ZrP9eEwBuHuKXdsw62od5izLAQJv3f5PU2LCBdNkYM1EoNnCbiFdQ7c7Cr9BT1NCN4q8ZJ3s96yBkETt",
  "key35": "65nzjrqqYFPhTfUSvDqPLAwexmkhaV1wQ4CjRQjomUaZEeJfRYR9EDtP4Zcbey8amMsF8UVzESMBNsvUZYtzrfeL",
  "key36": "3zpd3Q51mqjMm8YG73Pj1bLLMnio1BsdSokTAv2X1Hnw3RELkhDVXBFyotWEo4Jd9cQL4YiawaB642E42zENjtEW",
  "key37": "3kTdeJMpPigZwNsaujGB5QWnWmP4xUmuvLSooGFCCP1kuCaFYSJu9sLhDYym4xfuHEZnefXQjH5mLBw4PjdEUPnG",
  "key38": "3RM28V62d1exWNzEjWp55vFcVw8FAVpY4QWwwPuhEFR58QYgRiSdfrgtwjeTjFA1879iHXTuwT5tQcKwesd8WhLc",
  "key39": "3cVgs5W9Wp3YPUnWPb5tfsn1rjeicx95tVSsetZQcWrjnTZdPyC2TdT2KpVtJhm1eu8m6gej6U7tkYPzKGMpeqJB",
  "key40": "24MA75muz5yHEQ3X2V4qJq6TLietLi12FKyvsu6wbQ12uYVMU6FXWfYRqf5q9iQQvHeeWRLN4X1iXzgoqLxxzpfS",
  "key41": "4yWYUykPNZc9kJ8zUwkgbkKgW8GeVGnV4d2Ro8N7ZdLU4mzKRuDgwwMLmHpjHGc1oftQ31VaUTcfN3pyxXLf51V7",
  "key42": "4Np7LmSRcEEK24uVHQQeK6xjkSC42axVtUrUEsXfvGmrztVfFSoULJifFxw5kEJWo7CcnMG8Agsi3V9BKNSMqr5e",
  "key43": "2sWXxWUaL9TjfD3Tb6sDEGT7vWQPp91YQ6L1Y4C2M45SF5qZp6x9gbmimZMr9zFEt8S4an4VRc3N2BB2Cb9JKXtc",
  "key44": "41KiojJ7cwzWsMUQqc5UZqRcfnYm4P3ttxfyhvxRiCcHaHzLwbzZyYtiGnVCAXBBiZ46X8hgqB1gtoDi12k8FMzR",
  "key45": "2MseWXgLMQ9NF1jTGU6mTaV7aJfMSEuh4nkvCYVUvsmfpDTqnVqjw5AmfBm56eiRHVDSrHzbWA13rAQoTSRVvhcm",
  "key46": "4bWxqFfAeAxHdUqdvU7VqpFbMCvkGbmsQnLP1Vz4CB6viPBJFesSpHSk3W2SR5eYpHvVnv2xcUcMWrivBgZzWqci"
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
