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
    "3TRLQyGpdF1KhdyB8T3phgfg9nBvgXw8TVWAYZ9hv9FyDHufcxUvGVvKkagjapi2rgS7VQgMDnQ9daU1Df4geZyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zoX9cJWiHk8jNcPvzDKytoRBJA6ZWG38ppWnpXccJhwUty4LhQBrozCCWq3zcmigTtCsk1r63KF6VU6XG7HzvSo",
  "key1": "4G5pDxsUYEa8iqhF21s4iDGp3DCw4JX9KeQLVCQfJfnFwJnYsJ9yghheSbMUBWeQkzPFdJZRwABVdr6aus3nfW3j",
  "key2": "54HxGrEpLRC6pQ5fiuUTqNCsjCikExczdC3X76NHYm9pFP645J7hCRLX1SM9pAcswWV7wtq8GfP1EZYCbnBxJ5Gj",
  "key3": "3mwzpCeBP9M6YcGGiiTiKFCjfHFDaoJA6fYcG5Au7px14fTUi3ZARKMXgoZVpaMWWkwb6pfRdjh1ZkSMwniB32cd",
  "key4": "3i5758ADg6574RCRw6ypmT2VhxuEXt4gGQusfBmh48WjHANW4AQDEc9nhugGqdYvWKurmBQSAQA6xRbdqnjM4Wjg",
  "key5": "25bgRPWPM6o49HkPMCdkox7yfojkfjSCT8hwTjpNkWons4ieFbLoRaMKXRcdCCf3orADATKxpTWctRSoUAwrfkz5",
  "key6": "2QVUkq4ZyttcWnviUNmXZ8i64Vkm6XEey34sWvk1zXtD1zXHZL1dXMdg3voDKWbLqRamc5nZckV4vrnbA5hS4Gx7",
  "key7": "5tdpVG8F3d5tKpreT4cHd6upyeXaMVE8Gkx8wufjSrRsEpTHxMpegVdRB6PWz8URfgRc3SsTswmuAAAsU3Dq16Dj",
  "key8": "2NNPwNhDZayvqJNtwamxU58SUhA5Dr2ZtFCwkAYfkPNiPjDkDuJPWQZq6qJ1k6msbCouxiurQwnUZ9RTGiEg5s7M",
  "key9": "4QxGMGhv6F5WqHwBFSTvLVqGaezYyPA5VuMuvxSguouuVgkoNzH9FQwEVeWbuZhqi4TGKMuBRj8tg9p652qixcH5",
  "key10": "3zvXXcLoMTJFDFXnU3ReftVgfV7fFyjWn1BfyEKYkgBKSB2n1XT6WUJyaW54XjqU1ViRCd3fSBPaLDParPJKdrgy",
  "key11": "5f6KoXh6Eoyb8dJTBkuRAeMRFWZuVLKKxeT4ifjouCTgPXpxzHihLyh8zobQ7LiRzGSvZ9TxH6ChsQR6L8gJkLaM",
  "key12": "ctW3FxLCmucVfGwRprKa3C4Vw8KLcvsBuaf11YuJYzaoApbVefG2RPP4ByHpUVVRkxUyfHiW4wRG68cS3W8YZtS",
  "key13": "3KJXrC3BNjV8xe2yo57BKy1543TtFTMmV42jc7x99iUzkR2XLNBRC5UC7B9aSPNdErtPrrNDD7DVGhTre1F25cNh",
  "key14": "tXaH7GZFpfk7JrVZ476nJ2jd6N2YWg2c25REQDAzTb5z8rM1fVjm25EfiJfPKT5SwT3fRwfDkPGJx4krUUntZZ5",
  "key15": "52N6YSARKgLGy8pfx3Jy8Rja2ntbYK42twVsRMHEQbH52Tj5qxUN2rwTsHqjXZSSsw9KVto3imTmK8oHwGd5FGc5",
  "key16": "ot4UfVuG6x3jw14q4RYi8TeZYbwJ1jBjpntPLvt2a7VbpcNy7ghb2ex5whwYoiXWJChnvtsVgTSbYrAvpDnfBMd",
  "key17": "2xdWoJbXstGFWDjNub7RAqKakm71tKXAWUZmcVD67Q6zyP8WV9jy4ozXA1wj9LTJMb4mHS825ZcSCW2nFq4vHubj",
  "key18": "fPFTRKZdqawjNtwSdnqoG8jjZahp6KJeRfYXWWkXWve2D95uxy8rWxAVjxkaRsTujHMdy9w8em9UrQJKp93SEcD",
  "key19": "3jttPeiH9BQvTXVxeToaCaH5HfuPxuEnRntNekkLifvhxpgqR9jFiVMmU5q2wxMTruHoePXiefunYpYftkKakFr6",
  "key20": "3uMTHHJZbDcYMkdQNCvGrYxwRU3MUz3E8UuyrtbFwGLRWyaJFMPNJfUJ3uZnmeJUMWAG1GQwTnnJamxVYx4JNnbW",
  "key21": "3hKkffSkS7NTRMap1FhXCPjHjNJtP389MBTv1TvMS34gzmT64x9ktxsEVbVMtJk8S35UUnza7i2Wc9YazZZLZGRb",
  "key22": "4fiXoqMpDit4K3sc3XLF8SzHAShavcxaoPtCW2XmvjBpV4KKpcFdzzSTjkZaFB6f9U2AoGXixKexikW1p5DgXS9U",
  "key23": "iyvZ6LbnYfCPZZF7AogMhVDFyDesHGGPdtEU7oXafVmUSmoKbWARDDpKeCax4qQHgoxAVGfZ5rD8xtFf52RYCNR",
  "key24": "2fCtKNghqhHqcJx7jXmxmixBAQEB7xHto3QX6dhJMJWfYCu6nzYubnKegiW1cTKXcWD9b7TNBJky7XB4Zs5uKxaC",
  "key25": "31NBZc9Sz7qk474J4boek9j9FyL54voGGQkvUQU4fBREJrDPoB9DRAHRJVUT65aqhkGaM3op8mtVZVC7E7kvi8N9",
  "key26": "3cGg1e6k8FrTGRnGfSGpZtugo4PrFgMikbTEF64fvQbJqmcWEp7S8dK2GXSZMxjwMo7SiWxvzZpN6XGviqUQFT15",
  "key27": "5YgMV37cKn7kuoitYMVnmWFi5tW964Ue3YayLyDqiUBi1woBxoi9gxzo2ueoETALCmJo76Nd7PGihWMRHse1YBhm",
  "key28": "3HrVzqWYcPfqz5pfwH7vCV9NKEwtzR8JzexvxBXLJgt2ynRmuEqojBEyzGz9xNANB9HexEZgEv1B2SL3YDQcGrrm",
  "key29": "P9VYkW3BMJq85pwcLoQx6tunk4es8xgjZ3kw9ZTuqZhevhsmy2U35rw7mDVybBYDMqUE4g1fHQWuGQasK7xSoSV",
  "key30": "5BHL7mCBrNMsHNrPfozWquW94bc4hr22JEJGeU4Tn8AhkXSFdvb16iroZ8WuzpBWh5qGSGbCTJCkBeezNbv7JX3k",
  "key31": "5tss6R1E8ZL6mgrQxARFjW3TowWhjcGNuU3XvRuBdH2GBcW4L3RWLGfNry9UNdZUnH4HATtDTvGNY8jMU4zFoaec"
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
