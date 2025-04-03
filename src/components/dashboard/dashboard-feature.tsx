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
    "2BPt4BuVj8tNzKvMcibxsgNygWDvCpB8NWL1zg5dTQArY1mRDrX9veBVmWfWgNQkdWR2iXkHZr89ci7RoMJdBcWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bTY5yiM6FXhkTxqM2kSCKwVELNadvrHNxMqjPqKmaWpMY26rDMyj7iNyJVrQhEGYZu52UwFCub3pF1NtnfhTcQY",
  "key1": "2xMUBB2tTAaLSoGBSEipbAVVFizHigmMt3rkFX2TLgdAssZmHkDyd7Mx8gyCgGxPp289BeJEj4Dm6DddusXVSyXa",
  "key2": "4MFgKhUgtCJHrA3V6DCt6ohcKmkSyNsAuJ7CKpAzr3v7P1iTcvX9xh6eFLDmqdx9ac3WsMv37dea8TXC7Tt69Rxe",
  "key3": "4p3wKuE7r2R6zYu8qNpp4w6kGAG9SyF2H2gttmMfDc5RzsUnFaW1Bi3qFM9jRXAgJZ7cY4ZLsk1SqbTBDkQFRR8p",
  "key4": "4T51aGihhN4XLhhCs277zKxm784PNGXSfH4y1AZxNYfWYmcCAdViH4vgV9LwaE2Tx8KAdKYBLD35kvxefMf9xkRM",
  "key5": "5fzvJS49qAvzmjof3CSUDT615GDKz8GT7J5A8mf5PcFNsuRNNfywwWoJCVrp3Ugazg4CVQJ9XXVRUwHkkQ25istj",
  "key6": "NcNoWFgYXLD8Egshqw3iENGEres9okaK5vxBsFA6hydU6BEDKjLM3muPT3eaJy9qDuSTfB6y8yoxPGNQqvm1kfb",
  "key7": "J9GhXMB8Fuftbc98bvecbEmXGyiCecQw6UKjwqeSyPWCVNRRrmnFe9JK9HxcfNPYFRRQi244eShPgswQxdYy1q5",
  "key8": "2mhPyG9KqpauoKSpV7cWPfm68Dfe9m57mWmLu8wtvyrr4JHGqWorCWMyhysN3AvQidzCbga7hE4KjGUvoNFZWMfW",
  "key9": "PRbSBFtYHAFe4kv9XWBRwfhqmnQoiEuco3nekGVmyJtsjLLYiyQuRSPecwyrn48TRLQQdCeUqn6BLWPb1ZVWcXN",
  "key10": "v5abx4gWiZmVJ6aeNng1AXtM1UN3u2id6ubNZn1DB62WYkEgc8ey1e4BbDp6gz6wGobrEon2gTN4nJEZ28Nz4Wc",
  "key11": "54A5YhNDGyejyvuzc1S4ovbzfdSLqeRZ4iw1UaLVZGNqgjtWeYAWuP13ZxSLjBgvTb2o1hByMgYiS5hX9KxnHBLy",
  "key12": "tRmTmbd4qgCe7CKAYcj9dUuDu5Z544WULdHikAGxQT2kGtw2Fh9E9gVHz8kHvZFRCnL2bpidfe8trrWWgoAcUVr",
  "key13": "3kemy5wEH1u2ACZfnXD9sVaxJUaA4E2EHfHGEvE3ooztYuDsqyrZDYd8muP8m881d2EzyoU1HjeQnioEbZUKK1ds",
  "key14": "3HPHWV2sfbkg5Moy6pXxBrCXxCuoYMFwHmLEgrN96Cfmf77fF8M2dhH2c79x9ZBUYegbWmgSPhtznropUesmPpAN",
  "key15": "32gdMisSDosM5fMaoiB381hRid9brupQ7NHjiXHBieM6m4b8utUyBtig1tkE8CHWzYYrXGn1Gst4h3f4JRUKQzcn",
  "key16": "3RY512pivYy4PFVe1GVWuwggaiez759D3qfhHfLL7PqD3Ds3yJv9ZskrAVAXzwWNhJ9zMR4FRxgHVH1GHfmVPhQm",
  "key17": "hAL7rXyYPWHaPK5q5SE59wjt6yb5XwEuAJMfRk9gxV4CZydXQ2Kna3QxDQabY82BuusQKdGxoAnBuHaqM36XA4a",
  "key18": "2YmGodfbSFJaK9xxRtJDh1cXuPH1awNGwwPJqs6oJ3nqJUTH7nCbGmBvYh3ZXXoKMnzdirNL6R9RNhVWtYSGa8VB",
  "key19": "4k2PZpRNjFCkqyq8D1xnxFSadM9ozYsvc9MXYsdk6j3h37kNmoAGeSTX3EdweAFbLyzuKqVCtnUHCgvAaNywLj1y",
  "key20": "33JwMubhrfgCuckY2p3zdKtKQkaL36YZ546Fikw2c7uwAX525bra9oBMVFRBzJ4CjjvLHBSSUQAqx5S6SdtboSSp",
  "key21": "2DdMLbK5eZu11KhPWzgcJyVbFdX1kanPfRAHknfvbLNcPQXQXwCYqb734A5cvmEyK14ptAVU5atQX6ceew28x8uF",
  "key22": "4Fs5aaY2bdam6CJbQ6dX8fguu2dtQQb9A7Pihsye3whF1SeVfnzLQJaP3C7og1hpKbRF5GK5pujkDPLK2sNGnscU",
  "key23": "5QrRB531QEfbfoQjy5ERzA4PrSAcAR2ncHutunBSuFyfnpfg56WfagJZJUaiFPhQeZUJr5fSmabF57jRZ9DLSDmF",
  "key24": "4Y9Wqz7ZKTxuwn4CknT8fAnhyNupW59gwhafgVXcqCE4V2jFZ5sQyQmM1ghPoz7L7eCvWp27yREzXYKGP81u7PT2",
  "key25": "rZTrzxgA1RjfbsLuU6FE7XXJ8YT1DfGKE2e1Akq2cTCcsAFvSha9EsYU8fAxrzfxSaWKEqvdUpycxAUVyjhUzTs",
  "key26": "5oxms4ZXiNMcG3noKVHUkXx8u8b2xzHety27bcEh7cMihjaxUm7gghRdgVGwCghtZdpcZ91kD1SKzeWhue6F5czW",
  "key27": "36RbBounGrMLnyjg3UZrw9iHGZTN2Wn2BRg7pggFoXAyE7HynQDRAfAsjHoEeSsqB1SkEjrXDAvW8UhUTEqTb84c",
  "key28": "4fM1p9peFkorGPT9mLoaCoqutT613aE3LRizjbXVmbDcRHN6FpaxfPhCvjgvAuyWbrVJJT2UCqLSnQ5ErAmvZhER",
  "key29": "5o21PxjBbiFHSYL4GjrD6VxdmKU7ZfaDhURjeSFqHURwLDXPFs1E2YmZbGUazvqCodXmbKQBLtjP8hY4q2MFPFzi",
  "key30": "3mPBw2xCWgREspusEAubBwQ9iGjQmWBehv8zXdRqxehWgZ6ZAGjrhVFh7GeFw2Bec7bBVMd2RbqzVqaX1ybXKNTr",
  "key31": "3wQXkoNaUnP1iCcnrgTkRwBjLnbCswe3vUQ7D3n3252yrMLQK6tKybfWQn5xwq7asAtBLdTfTj5Q8VbyqU7FbC9b",
  "key32": "48NMZV6o8rZyUAMXkwdsGiFiALPVhfZ3pJ8SEKroCpHXJTBfZ9SUcnLP1UN1R2mp8UEian3jzrTy53zkNVRRiq9E",
  "key33": "2Z8CXBSkoKK5zPj3iDevkeBM35fABigWJ4ERFmygH3uhmc3AYDcbS3T66iVPyQ5pniG2ButoocwfVAcvo5JPhxwh",
  "key34": "5P3ic5erwc9TQMSVtXkFrNvBEgMtDTAF4PhLoHJFQdsSGqXPH2vEp1UMQsR52K6LBahpogKfHwvMjQiU9A4mYvZL",
  "key35": "5kdn1dh7h7JBZsE7w1C8QJqyL1DEsL8ht5u2X5VCxphwk7xKbiJzTSkNQxBjAGZxyhsLkDtK8CPuR4UXWMQxzyqt",
  "key36": "qqF8pEHiD8yx153Y6XXVkH4x6LCTrigANEyjbeCp8XXhe1tD5WRyMFfabcf8K1RfcC9vycZCF9NHDYbM8femMfx",
  "key37": "p8QAgsF6m41tH5QCoCQyAUhg1McnGkL9amNAmbLc1cPgD5q9ycVYfGeC7cUbTeUPDgBLAJ7AqGyC5e5vc7LyQRV",
  "key38": "3ywqjSLtjYbqKcyRC8UCHs3z1ZvLvHR1XVqquv4TYmueYGfG12G1FG2jwAdaxQsPSmRb6a2pPsphbg4YkTenS2dR",
  "key39": "4vHKGnybxqvARzC4sKRjE9QVKfLwhaPzxgZy4bZdvqL8fM3xAhySP4GXGciN4oAtQGpRBhZG5imcodALKW4Dt3pt",
  "key40": "9FhA4kENeRceKfQN521pMQLMXd76VXCYpugsTLQrqHyiUqq3qUezJQosdYFhyTG3phnyZG6w1bSDkxewoD5sfUD",
  "key41": "2aKQh3ctt1YvFdoYfpMfm9cPh26unN2zhDKsLxm8nA8z71JKZwVptJJFt7ciW9U5E47yb3dMEgRHTYB5KR4PUkAo",
  "key42": "t9SWPjC6jAkcdsv4PUM6EMgvpPEQPRmgMYzFajxJXCujpX5CGuFVWHrCsSd8y9Pbm6zxRebH7Py5yRXwiuJmTmk",
  "key43": "oXq33B6zG8CgdFoDzj2e1kpvaiSF1rsDmVSofPWE347iMcosBQDRFMVSp2n8ewSpWGDVneQJqAPMeuGFpQ9fouA",
  "key44": "398oCiFdu9ZWh5UkzpYmp5pojSyv2RvUDnfEh5Aq89oznBYU4viG3PKTBFLmXEQ2YtbqcztHAPe69rgMmN7PmZPw"
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
