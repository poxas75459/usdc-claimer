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
    "2kUkzjYS4QNdJhibE1Gehq54qRCn2Gk5BMGQSMPQZ1W47Qn3dPoAFnG8kkajfga1Pe289kibLkRpjvTLczqnMB5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UztGtaAZapcY4jP9ebTp6oueAUCC4Z9q8n68xNEfBFz1N94iGq3gWbEYWq8d4CBV6GSrndEpiBe28oMrgqUWy9X",
  "key1": "3qgU6Tg7YMerZ54ZUsPmMbz3wwy1oQZyyaT3FWu973WGaVSgDZop3A2LmqcB92p4Jv2rdPmzqYHzLzBjcy9UMmFo",
  "key2": "5sT5UZ5dUsWjTsP7bT2muTcJz8bMT2oAdoXqQXy3vTDxcv4FBy5ZUqVWmSs1T6hS55Xjb8fwAhACCJWqSNF57Fpz",
  "key3": "5Qd36itM5P9beGb1C9SviCiZws93cDCR8BYBfirgDzWZmEcm2ypdZiwHxh7pnkJXe5z5LgdxQ5hkSXiMH8NX2RwS",
  "key4": "24HMFYGbjRJ2VJFtsUAn1EnTTMvu448UgxXnrtkvgjC5piYVH8BCTQEWGW4N99Rzc7VtHeTJgnZ11jiiCq5yNZG8",
  "key5": "2zBJCAfp7Qvt8nM3pu2DxAmTZLwTCVBtRQbqPTCeZYwzkv5Bn1fHsBJMvHJu9VyeTDpYsHNHXowLxJ8dS3Cw7FGB",
  "key6": "QEx2e6kz21pUv27Mw9mosjayuQ2zDAeVM7bsdRQ1BSkRYNcwsL2zxZ4APpW8ojwQWmfQMFF3a9QGAW6RPXX6BnS",
  "key7": "2rYsK9vMuUjZEt5GkEibGGcVEBKE1Pu8zGjVNiZw71Sq2RD6utAYJDCETQXYNsQXRnFqo67xcVQpvtRnWc8jbCuA",
  "key8": "Nhq8h7pgjLsAL4o6wUUwFFrietCyd2LKqsQ9V8AtXGuMKQCyD12MKwePqgoNyc97SjUfX3PkCKiVpFhauHvTu17",
  "key9": "krMwHLWnZdWKTU3pM2GhQW9ehkyWTRM2NAnMxQYVAg5ukGyeJJSZdgxWyxtoVJT5MWCZUc1ixfurPGfXZYQsvEk",
  "key10": "5ZEpVeXJRJwm79AVzbDbwr9cPSkXncDAm5KttUcXPZQTLrP22z28q5M4F4VWzQGGvQQiLRsYz4dVK5b3w6Fb6gKy",
  "key11": "4un3NFXBtgYzch8MZjnzGQaM8K2ZNhFWksUETqymK4JEgBhdWTHcWK5RwKstdBHm5Si9wrZm6qKLRfeatmb5B5Q4",
  "key12": "4o13x5eYqanwChhLnAM9YVvzifUuTfJrjqgkejwwMebk3bwCnx9AwWUbpSxVZL8Uv2ePKsvv8V4wQUKqdykuPS75",
  "key13": "54qy9DHrGXqXTMnJEoD8eW86y8AddV1aFJg3nqSndGg12n74kNN2supjVMtd15KGGq8rkQLYA8TFgMLSvJXspKrr",
  "key14": "4LcA1ZDVy8LTkaXQb6tpdvMstGqZwsCZNJpJKczJ3159PtiboTS6rzsivh7LUvrX6p4gTtiQBguFpqzrLdwpRfbF",
  "key15": "57CsXjY9GXS1aCDrg8pfggo6UthKNpLAn6uijcLycCH3ihPYUQEfQzqj8F74LTdGnATkmraXFXfQoyRfMd6U1MrQ",
  "key16": "53jtRD5x7zvEcFxAJVyE5KcFzGhUQ5Xtcm5CCECdQhdmonc1657g8ws759EdXB7oS8iTKw12PGSicbteie4FDkXp",
  "key17": "4PUzbo93dARmeHoTaJvSNsszx2HHgbpEJZJvYkyJjGwDkWVbUQpAo1Ut4qcW4vyajeF8JMcmx7zo4S1yuaqjtohK",
  "key18": "2Ao29m6zwc4BGvgh6WPJ2VHPKXD5cvsBNz29cUtFzyEWPztBut4Z43GdUmhRafj5NGHTVMSiqiT8pjcWFw434Cmm",
  "key19": "3AoqkQyuu6inGNeN3GZYfLjSkJ8EHaamy7mZpiht1fT4Cc55nh2dktvmz1gfr6v3ZqP1gpE9WHtrFysENJdy6q8B",
  "key20": "4L56HkNoXN6pkYdABwx17oSha294PXtdzjR4jMxruKbVo6tZsHP82Eo9Xu6RLhwzs27yC2U8yk9ixsXVGiLwKZHT",
  "key21": "4AZjE8nv9HUVKuhgCjrcoau8t3yEwi2HbxjLU2i5vhzX1Sdydf4FRMVr76a42oSgk66iHEfYrepFpmY9AGAo3Dob",
  "key22": "3hou4VRhbBKDjDxWeygYsfXxq7zKxRrHUbLMS53i5M16vPp2B9Qw6GypeaqtsWuhN6ferVtsYTXusnJFPPDGKErb",
  "key23": "4ZzGtdoWJyPFwzKxZ8rZLyZt8k1B17eMZ3Yv7mK7oqAzAY7NZJdtUtbAKVMeCCoBAqwN9PEy8KV9t5Jj1eZwieaS",
  "key24": "3DnBEQ2uSE5dH3ZFWXHPR7oGbi3tC685fk2yRpYygHmne21TfCmQrLTuZxaNjVXmPsjrasnPAFpBfxKXMs9DcRvj",
  "key25": "4wUVrwG8gJEEbgoo2od7WYNyKSkcVJcVC2DtaRkiTtX4ghYZc7bW9bHFGwBqz4NvrpRdC6BF8gMxjrzeyMheZFSi",
  "key26": "3eUdRpmcQZxMzdy1CWtoq4Gsk8WxY13x8GTHcefXWeEK4uMBDQ1G3sqXqMrnCchdBnMKxa7JYsMM7VfyjUap6oxv",
  "key27": "4Y72MTbSDzfxYfZ4JfPaQopXdeYo4nV4vS5Lc1adbbmnctJdEVeff7WewXuh15HT3oyj6uSjD1MWmcXvAm15B2wx",
  "key28": "314TXtsq4aW5Gve1qrGHkwV6dX8THu5tuh6qHnCwK2nYXGWnta2f2SB8ej5Z8kyoA39fbGZipzewM98Cr6sPSo3c",
  "key29": "3HWgQDqS2GQyv8pB3WnKFrU1rxS67Qg4XJSsRaSuRjiLbjtjdB4JCLScna6fXNrby1SULwyi1zbNic4mc9Vwwh1F",
  "key30": "3Dpv1z94CXnxgEjc2KBUZC4EYoPG2TpzXkXzidtcYjPewYGzSAPsw1okT6XevLeXS1b6d5y4mvcrdpVF1RD4f1Ky",
  "key31": "3gFDYENGeE5X1BLEURVnYqHmF1QgHPaE5Ybi9uKV5SQVJgihHA23FqSYw8bKvaKCZbfDXkC8QkUBjJfRtht5snSr",
  "key32": "3fHfaqqTztDS3XVq677okkNsUyLEvJKnCru76e2YmpGjS5Ue19FS7vXMEqtihXpeeTpzmUfUwpgj3YChYAhdRA66",
  "key33": "55DNBvCQsSRPF2dvCLDYjW8TRSZJwSSnxAeV7foiv4LSGoyQubkjUCzqLtdxrJzjHYeuLffgfemUtvGQFAqnLCfc",
  "key34": "5ZjeNiPKRZFp8RmgcnaxHpaykxBrcfQAQ3CFraSMH1Hon9eXCiTohQM61Fi4TMEZ2MKW6DaB9dmLSSE53dcJ7bjJ",
  "key35": "MKxEjwjpFgGUN5QpHSGPTsWU3ThTB1uS8UjzFpWdatown2BPm8Dkf4jdm4m2kLV5i9hxbWpHEkE9NBLKyREyrZm",
  "key36": "2SVYaWHsJZXD5zfNGCTv1JWkTbERiGQRhN7e5SiGAvsCJm163JexPGok1hieg9D57puCUYUQCSVGqhyFeZyQ5kEe",
  "key37": "5FTWuqHYJhKCEeCFUH7e3iYyWSyyFz5u7WXdS7R2r1eRbwBctBnWcTkNMDyfMnkFK8hoGtTz3n1mzrmy5XoF9bfA",
  "key38": "2bMvrXA1CkhzRKYRhWqWy1G6o9nMLsvwxWCNT1zT3nDpAYzrvBTeiEQtgHNbZFtWH77PVyv7uPgntZug3NRVNtn1",
  "key39": "5VuuTGW7KBgSa6d585oazsD6jnW7vJoCmzsy4zhCd24kTkDgfxfzjnPEAyQRkfoVPKBsic9oV9KHM63kT4VbMEWF",
  "key40": "4veUJDfS7brFwvMyqByfpn9w1kJGFtw4yMGaGAErG8ggEyUuDMv8fASPKyH9d8DTNvGFprfP1y8aVPrTaXNk9Ntp",
  "key41": "4cWZ9xe8CwErCkNL6L3XM4CxEK1PckL8pMFLXDEBG1H6RcDyMCSpnJTDxoN4sCD2v7mW3Ysf6PpJ2SFk653oujLZ",
  "key42": "pzmcU4aMU6DmWKsTZAyS4BScCypKCc7KnAX3MUwGVXbfmVon1EFc7kNGsxqDveEpX7iF9n6Q7DcGAaKEdPXc1r2",
  "key43": "3W75A2ZAPJaEsbDjixh7ZiwmPYEtkz2GQHmHxV7M56HzGrHRvgToFJJZGamR872wfv1Fe3tdxNKss5ytbyxZD1BV",
  "key44": "59EFhiEaivkJuytimMeroidVoeKborKa2frbFuZZLk3BtmU1aroN3i5mESrSdJ2ZW4QR7rDH4SNEzRwXPusCB9JB",
  "key45": "23vb4wkKTMKUbj4zbxyiG1wdwLodoHYc82z9RBuq5UzbVRdgMm61jezmpF2y9Z6J36uX5BTixBmvnJmcuFfTX9f3",
  "key46": "3FNHj8SYzLVmDhyw5MdVmwzmW8tZtX1ipjDp4tqxfde5yDo6QXj9UnhbktvAV3YoH1QsxkCuJVVdofBFX21p7xiT"
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
