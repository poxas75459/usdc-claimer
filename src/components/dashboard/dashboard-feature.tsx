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
    "4wJrFUMYu71cKL3RqTUSDZbBMEYkSpX2raSf2kcTTGQB5pwjYFiAR5XwbawCh2ewTjJu63rT6jwkgE7WjyA4xZCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pFxGJVsWg8HeZVh9WjwPBwbv16wwxjN1AHxUSLkBVsJ7MFawUNRcewHCxLB6SFdYqJNYVE6EjCEd4ujd9wHG1Ks",
  "key1": "4BYCZKk7sevz91XnYypWdaUzczMzJrznFxdsCgtHdh73SFjm3dtY3HtNodYmCeTxCaoy1AjpHXn5qu5nwsqJTaqR",
  "key2": "4JhefTm8XiNvUK9eEZJWVS9T6P7RUAQ5hpki1WcFavCfNrHn563AurLrHn3ihXzv4L4PG6bpmCMqTDd8cync8LjF",
  "key3": "y2qxdX4Cb1Qgo2Rd9YBPRK35cyF3h7SgNMfVREGRQ59dn6CM1QgWg31qJpVREz846FoHnJWKHq8JauxDLWRF149",
  "key4": "337K3oMLKxwSHozUkPWfK9vY9FEdYs12Q8WqaYb57MBCekFor1pzoBgfa5RtpkReYUxgysCFD9kXRa27Kd6UyhCB",
  "key5": "2a3swLp429aAAkfrpw3EoPa2DKn6vmXWcEQsE2WLVZRw4TShm1NuSKBcCQRLbGyCiJLZAT8yBpcD4bXP8qbp6Vjq",
  "key6": "2DgFyTcsjBvvFAY9gC1Uc4X1TMU2dPLqC9pQdNNueXNHrHiKoHuztSg2YFEaBz1xThAFGodKmCPkTp28FN1TpUPN",
  "key7": "3dih4PFDHE4VpaoNhXYenYc4uQpJkeojkUGoTaseBKJFx6mneJ57zLtS9Geqwe2Kr9caWtfzvbfQ1LP5K3VN2fFo",
  "key8": "48Sg6Uokgutq7vRhu773w1ZAyqJdTWibfHz5i2DgorJR5ixoySj6Nq9YaTaF3K1bGLW7uGk4HjSVFfP6Z7g9PuMY",
  "key9": "4syBbWZVhmeiGz5VL2P5MApZevfRvEcgMEYaWHvrVMYSKUWXP5dideUrcFPDy5Lx8twzwraFc7t9rra5yNt6F6bx",
  "key10": "3gra97Dik6TnaBrGTvbwV8s1kc631iBCcsv8uyyJgSYiBhpW2tXbXoyMzYNSkYrUDJAF6PXf27UZ2KD2Nr4NdWQk",
  "key11": "422kkoNcWGJ11QfpmeTefXBGBHUGuARtAoL3DAu7DQBMr4eXLcgKx5JTu1UB4iBgELb9F2pFTkDkthof5QgQvLPo",
  "key12": "3V762BLrsaaAB1XKYoJbGGE8vJ8kPzdZjahK7KdSeMcET6RDxnwBmBCtM2yXY4cMMr7Maqk88EhUudrcRMfYjgL7",
  "key13": "2sAYjhunyhiuvQ7mhzcsH4FjLSnt7UxDox9gR2QszDdhVR8jctgx88azU7e6NWGvzzyZ7fevrWyd3XGQdTYzVV5c",
  "key14": "3v1rvfjjtWYyBvGY5K2VvRJmveqJ2Q7o7esEMaHepYjnPguj1m7DBLXoRhR7bTBGWRrWWPezZWKhTgpQQuS2CEBB",
  "key15": "3DtBoizZrnDEinBEXkZ1UgXohkDze5DEwG3ZYe1Et51sps4ciCzBZaGEQZCUKYQQxo1CWTjQEmnznLDiMfP1FrNh",
  "key16": "2Z1d91jn8p9KKK368XNzgNgAZPCC7CBaNhr5dbARjJmVuaGrATfng3qmdp7SgVCoASUu9oNkwZdHKiptNDf4ujc5",
  "key17": "5GHJ3zxEFnVJomRsTuo8aCHTftbMiAAoLukQbywAZAMK1wWJUDZLG4c5JQJ552iJhDPkxsau6RnPfCDSi2UJyoB5",
  "key18": "5nDbzVsjEGH5mAVKBgqTaCCdYoa7E5uFgmYWDrGmLmtmDWZ63aCygsRuTnBNvKjBq2W6p87gWgc7hGqob1f431GT",
  "key19": "3VwA44dqu7H4xQHeD1xfj8T1gxMHTus9tgBzh6XNSe4mYmMRqqSoqm4sfNdqdjD1HFiE5mH4Fhc1nkRrVsrUKLDS",
  "key20": "4WZFrodvX1dBbDdwES2pqf34sQoCBTUAEi5BBVTm6VTJMXT6V8fwKFTdsh4QvM2srXXvV5Xx3pTHDYspas1gtqpk",
  "key21": "3AaeeTTPqW9h4wJg1uaQPPJ3PzcbYHqk6dN9dWtxYjVDy9kXK1TRh5h292nkfYAFnoEigRQJKxdgU1KeWjU8pkyH",
  "key22": "aQZtDu95kz8ES4RHbZ97pQ4Yc8YaFpJrvvnn3huxbvjMZiXBsxvLtf6drh6WyUaAh71qBFyvhbAu2HwpUWrsfNW",
  "key23": "FdQYTSEzRfS7pdKhsDrYXFnYTVrDdy4H9UhAUqmSWnijUnt4fKr1rXuJhmdsG5q9Hmk1L27XfZo9VtNboTgLqX6",
  "key24": "3kFdoSao6GrCxQ5QnvecEr4xJdgGcJnGUvKvHk8CTnA1fwYCQ1K4azMcXMq2TBX2REdqq55CdEGSNu9ZCa9ZZsCL",
  "key25": "3W55yUXW2wjfd8quNXxRHR6rRviRPbMnMYaT6K1TU9bB865SgAdMbtVj3MzL7GiqvQy9uQew8B1Siv4wsWU8NTHh",
  "key26": "3tCs3kj8PCa3Gp7uqcQwTtPt2yw7ufEhvtXku6JLRpebVRvsjodrrvwS4xwxwBqqjLDr3DJtE76kfMBVKftAqroT",
  "key27": "5GWnVomNmFUxVQxUL8xQjbM9inFnyYKwZRTEPpdGHyGiSffDVoXZ12aAMTq3MRnW3BZGabEZ43Rk1xYu1gffj4Ps",
  "key28": "7bR5dAmDkzV2JBviVQyMiexoHGJ9TVK689Dp8SuUnUAoSGBYxbmYreywAydNJGaazXhfYhaqgYLjM3A3f5pE6Cs",
  "key29": "hVTqtVds1i1wdoUNuhkcyBZnykpGkeMkuYSoCRPYYyL5tUt6GCfBV28UZnmmq69WT15Ey9exZz8rDwNsynDNEZN",
  "key30": "Bgtaf54PhYUCZsjRJJREUFLGjpo3iarfdZzDDFfLjgEcTb92bGoADgvEdgUo4n4rB2NeJPCDY4EgKJnRPktAWWo",
  "key31": "5iFX6SEsMPRGyDcsL6ex8dDLgeazXGSxgeMWHe4LxndzYWZBrYt86mnx3fGwUShYgJ5hkMWku6dgHtdFYtuX8yw2",
  "key32": "3Lch3EuNTZgycRsetAxFrWnyir93USwJugdRjbtpy8n559Hynucw2D4Ye58rn3BGJf7xi9JAYG3h8r7fxZ1QWSEz",
  "key33": "5U7jyHHvXza3zXcWJNcMP8No5HWiZqZRw8Q3U1csZmsGxZRkVdUi6cNjx6T5FemdnQ2B9PyLHEWpkh32poSJ1DMg",
  "key34": "aEPZvyiffLtzByH1YN2cW7sT8FNJ9LN8pkV7ze8HPc68SEFcwKKdq4hDB9ydfzccjf4ES77fa1UUvDSyn41FovC",
  "key35": "NqY2vVHVHzPYTK4qxAADFAnNeJzC5jYoTip7ft7kXYrktYB5XZrp8sovGk6zWqtQp2auioPHYcCuQNkh32PqmNc",
  "key36": "59WedKs2syHQbAMJ3GvtfxdWpLmBwSLDWpECXDfkCmQ3FWLaiwK3MRX6tRHfLQzRDDvNqyoBbfCqpANSYx6hhRUa",
  "key37": "3ANyDEwQiw5eoxP2vVfRR1ZFeroh6vP9WffDMwHSCGPemNPSVwrihCpVNVPLGot18us5DvWFAT3FZgjnG48CvEMS",
  "key38": "5pYYDJUmM7ZbXGXFf5kk7uTyrgf5X8VsKdGrz5priygFKBW7axXFTpp1A69xveudBbUV22Sv6t4hThL8aCtj4svp",
  "key39": "3tx4phnHsgeH6w4H6Vb697WHcsXR3WBrwGyMMrWohJfuP7NnZBfLRH9Bt6CCjPC6SscY68o51XdbesNDmXy5873U",
  "key40": "63jHQGncprCuBCg7HfcGDwifxgqcrku5hmqao7g8GTcgsXaTwKEYWej6SghzmNzrmbEReZkJcaCfAQ9vcJm6CHwE",
  "key41": "4yufwBPNWygtPZaewT4euc5k9SzXcEbMgpvMvM5TCvjKzTnQDViYakzG92Pu3GNWdVr8EopYuGTtofDBBejRJchf",
  "key42": "4L1QKwHi6yBCauwnavbKZ8A314DdtmNy5K2XaDD6kmnKzbBP6d4LDZ6PwrNEGGAmH1i7u7Yk3m4g5V9KiZKGDgr6",
  "key43": "3sQEwHBzeXBNuoYgt2GMpyU6UR6WBSz5wC2DCgwQA9MjVbRhDzL2D3PMSnZzQ4QxQJJK1CcEVD9dwcYvRTFrrL5z",
  "key44": "5pgroMgPVVYVg1Cp8DDthpobRL6ynUB9yDiNgRNvzFgmhiLUU22bdhTn3e72fhrU5zZ7nfuSVXReamhTLNwBf9Xg",
  "key45": "RfWmwpNEdCgU2tkzX6T7REeMrui1cjCWcr6rUHPU2rNaSgJavP1Ga6STTb6J7HGyytYwNmgMf5FKQitbDmhfxJE",
  "key46": "2hgJMtogrUmHuDUdg2RZZayzMmGnxVjHM7M1am9X2xWd3PVeNSuEZoHurvhpZcHyW79jygYov5YRZZs7aS4BkowH",
  "key47": "4DxPxNGpuWMUaTxE994GZ8B6bDsD73p5s4C2nrz49ELn9FXrM2eboyQEeiZQNvDEaHDpMuiu3cSyjtZZXGgvJA2k",
  "key48": "52wbPAfV4yk2qzq2GaJEJ9pcJrjwz3vfsS3xvR6X9Y7oLBHRto1nZesSnjopWeTnarTFKNzvvHqTRpA8ZjGSe9vM",
  "key49": "9spBsqANV4AUPJPLHYURcN73yL9Z7XpH26TPpdNPg8wyNhVmiFdqDcSjg12A1LWab8AbNtb28c4xConRSX1r6Vd"
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
