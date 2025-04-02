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
    "5pzMXaoN768v5RkVgP4P2QvxHBqW3i2Rr1oHpWVK6JNV9ScYtkGfVAAWc2bUyM1P6MN9j6kvRs9Q2JP8Y5oiP5eH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w1U75rkaceFfEJwZMNTv5e7ZX2miA1idLEJXf3EL6o4UQc9UvdjQgdrCBj1c3WQ6FSRAoRfvKX5Y7cqD6Ajs1Ee",
  "key1": "3ESV3caN9THfid7KHsfCBvZgfLJ3RBp9z5RBJhK2AXLfpGxq33yS52HjqJxgM2PVNW3JTrEMrRF3HahjAqwwgBfc",
  "key2": "4W5ygfpYvJTU6DYiGgpci2uDVKQJrfehqzY3FV7v4MLhSFiJ3P8FWBteTTSPF4UYC68RE9TBkNPLAykNPsCKzFg9",
  "key3": "2BdcNtBdrsknqCTzrYoRFYtvaPCZg9m5WFq8N4iotpTPRw8H1TjnxQGmq2hn9WJfhZhUfA4mWBczbLvRAwMQFLYu",
  "key4": "EP88JV1hjyVp2SLDYH9zuy9f55dGqj39nQh9RiFn3fthwvUimSo3iHzKbDzok8U2SUijhvBFa11CpNek3C51KtY",
  "key5": "5Cd5JqAVU3xhGCpYzyRGdUq1kbRK1jtA4N9FhrpdNfxbqnLcyN8F9tBN4cZomxKitHDkALYfYp37qELHDRcUtJ6H",
  "key6": "2QFArWdUd2asQVrZTqmVpiFdZZ4pNsVNwi4cBMNfAT5qQDEkE74y9HCJ2XnftPBde73e4zoTu9rkMAdK5yy4P9fu",
  "key7": "4wvxiomDHfLgZuUJsaLxDeQywCEXNosJDdWLTHcq58bQCM2S2byj9tAQ96M29K7ZLkEs8jW7CA5ZzJskHLVQgmbN",
  "key8": "UwMUcNdh4J3w9pSqYKriQKA4xWBFkCH6gmPtAmFf2Wb6WkMeaehvbzyPVzFcACP5e1ortoVz475zDoibwtHZJYo",
  "key9": "28M2qKZ9np2qMwcHXak3E6nxDLEo6rxsjjbUb17SSBxrh9LdzBeqbWcfjBP5RYCGMg1tYcYYzxUMSV3QvprLKZrb",
  "key10": "5kNmxBK2gWpZA27KFnc9pvi6woaqnbEkGG8r8yN7Zb1DSot5jwxWfd9oWPWaUFm2fptryYrpeGy3BMMsnk8CUVuZ",
  "key11": "3fTbMrb7wbZV8mePGkEsNJq3LE91R9Lbk6XZw4vRRuVD1bxeMNhv91qq5dDB87ZdGuNMKiyvCzgsAhVdjpmsA1en",
  "key12": "2wjefoFsDacjJmpNbku3ToZEJ8JyYRXc5YTKoLrzMbHn7XRiDoTxJa5SicqvfdkjmkiZdeQYu2JRCuTDqxt5jHtE",
  "key13": "2cEeBFyDAJJqGmopYcoNFafwzn8ZpGwoHNC4Hk4eftNgTa9W9EiGjfWJyNsL1uxiB53qYWH27sHJg7xdCqFnexip",
  "key14": "z2Mb7tVwVmnpLVWhNX3TsPy9qfonqmr6xUQamw2kZv2pvL4TfKzp6VCSrAkEQrQbSQKcRNTvoo9cV9b2CGp8EYt",
  "key15": "5xKJHkPUxiizvyTgmWEPvP4zAN3MrvybwH3rApc3niMhpPYgnvDkCc3bnqdv81i6Xb3LSswSKhuYyJmRxwwDHYij",
  "key16": "4Ab9UnP9iDxFY6ztAbB53xP6JPS9PVUZnDJeriMTSoUp3RTULsqJ8qwyYgs9eb5USo5TK8yQurYeUvh2G5ZxZdDi",
  "key17": "4EioFG2PrTb6sMsftYdGwTruqwaGGJbDXG7p72K8yE24yvacrJFjtyyXtNPD9SWuXwC9xR6KY2f47xZuQCNNJpZD",
  "key18": "2RLk3GJwJpdAuAjDLxaLhdpxoup26Cnu7D61mivMW8hznarprPBKL45xf7ZaVBM2PTTxo6rNcoTFgUxLQ1Vd5MNJ",
  "key19": "4kzPGoSGSqfx1kjNuf6pMKT5abS6VfS8b3s1or6t4iVRaqB33gktAMcVjSKm7rPE2XwZVxdxqbLQjS4DD4mZTURQ",
  "key20": "4QecdL8cntSARMhtWxeqNNHDc12VGpyrFYyeHfxss6KWsfwphqzokQoDuuGN4W6FbZK4py6pkis9AYGDKVsxUUKc",
  "key21": "2aa4VYAsoo6uHS2pXCCM48PZNkAS7Wk2eTVNW9iaoJzCDnASaNBZbA47GtkZnTPYjHdaSDSwfywoJdTA8iF8vTQz",
  "key22": "3RMJKuaz22ctMYHWZ8eZgLKW13ZzpbkcKCn38DpxgiQfXRewovGyDeX7iJJsFf23Hq1vGTAuXWArtFfCkk9TTFvG",
  "key23": "2pfRKqCYLRkrdWkd1nYjvgtZUKMShg3msirsDGgZR8wv5VtZ5fwwRHvGqo7v4r35WDU6aTfu7Jfan43n1Ty43Xzw",
  "key24": "4EXdPef4J1mp4wbLySSovRZq256MYyrwHFXJRjhnTk14Di1s3AD2PV4PLLuz8rhK8hJgg5r6Mg18qLR8KDHa6xwc",
  "key25": "2n3Vv5uV3HezL5pctMPpgGxRAF8PXEfhYvjrausA7f2hVRaoYeviwA3aGW8xPSBVM4FbioqaCPJ9kGvtCxNjNwer",
  "key26": "koSrttHXN189tEpBK1CTd6bjagWHshdCQq8XYffmTVALpmBknwt2DRDePDFPnuYXGRbhqyAaQnPumppHKDwpoMh",
  "key27": "3vVB3MrTGNjyMmMgCdN9AGdTgvZo7rY33VGL3K5xe8J66CgeYGnUZ2r8Lp5uFTUiKsiwroRAsCPhqP6ZMJFP4qK3",
  "key28": "4m4Z3e6EkQHB4X1nRAXz4YJZC3jbB916Psw75Lssueg6f9257NRpbCUhvNBgUGMe4AxtMafsrCLEX6GrCnfV4dP4",
  "key29": "43z7LHfLrcEJrP6RmkPRGQ8utiqVKeM1ec46B2BCmeiSxUVUiMBUbVeqqfe6z6faKMhaCCv2u9qWpRtLHVG4whTp",
  "key30": "63jcEXji9596afjD2HkwjRkBcCNv6PxBvkACxh8roCYKyjavkGpzXLHTJDHBwQh5X8ZM6fm3ikZQsuXdKxLefaxp",
  "key31": "5v1z9TqBQGAZqkR3crLEkTuSDPZ6X4kxyneWS3hCHSomqua3YUw6kjh8eEf1MBJz6ezUYLK525wiTfN2JccZJYMQ",
  "key32": "3uV5mQSbRvmKtqYbLWcwVfvYXmgWK2juzCS3ShGPym3qDkja1TGRckcaH3S27DHkJrgsq2495Ucni9rrn3EFV3RF",
  "key33": "5183kRHsE5njFkSG4XknJkp8EesFUoXZ3mXPgTJefZZn9rrf2vyism8Rn2fnGjAE6rf9BKs4ecAawDC2KnZeV2Wc"
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
