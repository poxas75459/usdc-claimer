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
    "cBShSfw988ypw3Unp6piqqGtF63x4CGtgn5uVzQNEy8ebCWSVzfWRMWPPs8D2sjFCbBRBw5z6JpiPXRXQVSngAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37AWdfpZQ5eyMH7fLAbik22SdYAefYi6UyogzwXVHYA335FgNwyjCgzrGsuPjTh3443WqqsXaeSAc5QAWeUqb58Z",
  "key1": "o2fUcUVcgS375Z4GPzSas5NMExPxpwMa6oqCMEZk5KDrmaCnay56JCZYRuVvYnbdfjpaZuwRxnnK2aDDR2Xqoxn",
  "key2": "4PXYzXum51vvvhrsMEwAhRj36Nzabr8TgZYWZykCFRuNV7fhCqRUUrqeBJAf6jYMDLgB365bwkecVptiMQxT61DW",
  "key3": "3kAkPLqwynJT1U9QDL4QXL713oUW7c43BojPuBArQ1NHLKr874bNmgYHhcsFQ7Gu6daWMgaQK7wgH9Mda91MYt81",
  "key4": "3zh3JKNxaXyy7eq8QP9KxoNEyRXzkqADwyg45gG7RswbZ6yYBP7iPPQMUaqE4stWvVxj8t4D3RrCb3kMV95S1rsu",
  "key5": "4VEUtGV3ddWaURde4JweFNjcpidftd8nVUKKJrHY1dkdbRbYpCUpTMEH1kmFYDuh4vcoaazJ9B2mv87sFBvtf1nS",
  "key6": "5kvYiB6uMU97YdnNorU9qq8Zt8UZ7Vbjhq3udoaJGPhLLNW7F2unqJTo6oFDUGQqUzewpRmr6m58SkKMqet7vWGi",
  "key7": "5f9RcrM88uu1DEE8EEhgu6m8JJg75oAeBYA4uHZxjP3PEmcT9SZ7PYAuw9BbP3PW9HgwzUo2DgqfTRkSBZDDPbiL",
  "key8": "546vZ53pXkaj6izEfmoeBocZGA1WkyB58rFnd4hZe5HwzxPuwDCBcLWS5RaN44rd3qHyxkw3Ai3SssDBJuSNe7e7",
  "key9": "sHrUQPQAss2S4yySHgx9eBNoj9d8ncJyCdYqe79Ew6WcFdqF775iT1ib86LJN9ed6YTATvzMKWm2mMmHX71FHjY",
  "key10": "2FYQT4gmyyQ6Qmrxycc6AUv2Yi1CMQduSDunpJJE6RRuUDHmfJdhb9GtEqEkdjpeMDgadNLmP2yk86iH9ev7Zvy",
  "key11": "57K1t5wqmCtnnCbqAmn9LYaPy6LgzLzLoDEEsbze2JSaK4efYBFTW8gxcmaXCDugvkZo44TiJhQeC98Rt5CoAMpz",
  "key12": "3JBKfunXweYYpiUDCbsDVWHtYAvVMSvLW3wMsx7ePTszKBpUZVsHkMT3yjJEHG8d5T1vVEqXAK9jnBMo7SY5RP23",
  "key13": "cwEr9BMW8UcNJhDFEcHQb8j9TuaATNKrrkyzTJJSxkcnK9E5C1qY1zUu4DMEjNZ2q4w27K2cNfSj8sqbgoPDreN",
  "key14": "3QFFp3iawkAzLRRb772BV9WTGrnteoSnpk1JGTMVomVng8SEbRezFj7gSLoojEze3CzrXVmD3Mb9THTYP9MbFhhD",
  "key15": "2628CXvfhKmWuSYuRZzbJPcKp45NUgoTJba9gkVi6U4zQnM7H6S4JSPNxiFbKuTj4A1tukZVZKK4LEb9s72gNaRy",
  "key16": "3SzPRyax3NiA877ELdT7eJgEDGDnnSzsJPHGDvfAnxyMiy3ipaSuq7aFK4EVcdTAkS5SGKFKRqu6jzxhGE6Ph3B7",
  "key17": "4pg2LHTesPCwesXEd62zgLBJRaYBmXjc2YszXo8QuoU7b4tU7eEstYncC7sxs6gepUHoQSTNtaTXFAhxvCLG3nRV",
  "key18": "2bL9iG9VLzsr3YV1Tebc29BWjicbFT3whTwFepGmm72BpjusQ6HqAt51Z8u5HeTbSpyE6NYzBKrfUriruMoKRPAS",
  "key19": "4YGv6R4D7LGx67GYBwRrE4nFuFHVpyZeyPAxoEGUZD4hUek8m3hFhTn1N9DQcKkNzsjt2gutLnHFLPv4zKNBhAAB",
  "key20": "38osMDHqFn5mMWFFJQiqbSXBTzkjEwaTFYuWyNtasrDhXCWc8mAJfMp12U21LDwTqGW3aKabUcBPxUhgYjcTSCvR",
  "key21": "4HMtvQXv6L3aU9QPuVrZdPHnJezyc6w1wExtRoYcvawg41ABhEKQPxugi3UdEAVV9NUj6WAiKPM6Z2uCnwjZkkbt",
  "key22": "3qyo8g73YBSqfeSo6PFXD1GFhRYcBeQn9UZWSa1Nu9JRuPuGqRbzq7HyfHrfZUwS4M2AXq6AedzUNn2iksUbFq5W",
  "key23": "58XbD2DqQV82YgusrqTJNtpCSV4wt2f491bTQZXtP3DH38yW5dz26A76WbzyUNdfdw7zwrcWwKMiVPc9JQJU96Uo",
  "key24": "2utiEurpYfJLj1Ro9WRPuo2Euzzx17T9pwHkZUG4M3xYXG8huXJUSwmpH93U6vHuMsNdhJokG8hBjGREJWxAZAf2",
  "key25": "5KTPRkTjrXQ95Sk4S8G5jhfL7m9hb72P628U8NF7R6ohRbH6YBP4SRA2qmHGoq3JgnfksQyjZb7RFmibDHYT2X87",
  "key26": "o7zx1YaHXj4GxmWGKWCkruDGscoUu6aCkyHdCULcWnGFT6SsGkRhxeV8vPZDrw4v8nzkP3pqq9tbkSARHG2oxQC",
  "key27": "G8ifj3HfTWiTSbDHbzWByN4a92Wp9oA39RMcuy7SvNd3o4ZAGbPFp2vjeS3tVvpCAK32HQziFQQcgK2RkHPs6FX",
  "key28": "4EQUP3fHovB2ed8ZkUbukZhFoR46iKkNXDvStoMQJdoszYkRoMya38yvqP2FKQqvu4DDxwjn25bWHRrT4jRVk6Gn",
  "key29": "2axsScBTVcsKNGEAoRVrXSbRbuMwnkbJCRM36QuVATGo3B134MvtNbdSLZhyQSEx3Hy5xzuaG7uEHjSQmkf3Kdwr",
  "key30": "5pDjVWSFR3e7kXuMEVEKwrXWahERBFarmzPojQ7nxfyRoCMqq6nn88TTptot3asLus2FPKVkQmDu24fF1W4AnoWu",
  "key31": "4EdYwnLU7XgpYYf81xtq8XzCBCqMY1NzrcR47MwjqzRjT5xcNhbZ6bE51mkUW2aWCwuRGQTcozRiPRffijQLrFwk",
  "key32": "3vMemtJrMK382j3C2HKieLiJ2gcNmgGVydkQf62WnqJxTprBL9mfKNXfgcHCyH3Nk8VV1pHMYhvU6NK7THWXDkA6",
  "key33": "k5nJCDjpDP2Hkb5JfoAQdKFvgLYZB2stQnfWpbQGhn4RLtEDX8ZDsz4kpvxvxg7NnJHU532aXed3cnaJETMVGkE",
  "key34": "HsbtfU7336QKJSAKZC1u19fne3nXgX9K2ThHUf9gGrTtwu4sRDPJHWQo1gVF6wMY2tCm6rT4r8bFkBj2QGLMUp3",
  "key35": "5SpMzjp6fWErRBqSwzMkqRyzZNhkRh9qauavgkFhZZ9HMpQDLqS7YPocEcNAYwRWvqN9N2vkmz8ZQyw5GEDzrdB3"
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
