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
    "4iNotD8BGT5egdgjGdhNBHU9f2VmP98vhdMBCHrUFK9bBjG6znoHWtoL7R9GLUFQfGtvQg4zcoY5RutPTM9sX9tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tUofxuvDmnJ2MLdj5upgmh1menUJ4cV3UqhUefkDpq9DWc2Q186u8fvu8oW7CbgmfoYix7mpwHBF62wMZeAMK9Z",
  "key1": "5edsvkpW9C2ud9Vbf5wg7Znn4jR2utZGuiSR4e8bBSqAmRfNFEbPSzUsAPiuwFeAPZjZ5hjhqgeQyoL3kPdepLgk",
  "key2": "2M9dyakiE74f5tHgtFwtTtQ1n3XxheXKnWGEHDpWn5zrjxVPChyA9x1jv3gVpU739SPV2ny5TXzCE4yi71Rs7ezL",
  "key3": "2rw5GqrRzRqWaw7bXXfVPk1XXKgm4ieNqxTNDZPDRJVm2KwLcJjKWZoy3MxhvpLJacZs8XC3jTbjCVADX75VBddb",
  "key4": "5pwdxmZqMbWV8qx6sLuDH6oCSSunFAsPraEs7YeHW4VLYrF9FCuM4eQNihDjz3PJ8uxYUUfMR3Yua6oEChGtYSMv",
  "key5": "BmLyuA2AQ1VUF4D3px4rg43i6Y4w4tivSQShZt19jUTMpX5SUubjxHJ2xHB7uxjrWLSgSKKVDJbyUn9MaHyhzbA",
  "key6": "5LU43TyMjR5zssS71i7vt3uwZAsbkYoNDvCGBtv6dpUesNEHQBYnNcddUp4Jhmv2VB53ZkzKSy4jRHd1bkCSoFpn",
  "key7": "5MFGZuTueunGTowCiCGMhXTVYrjjwVFeq4RNPXMHBKLj1oZ9t6mPiG49q19nUrSHoG42bdNCXhcZpfuWPpQUBZd2",
  "key8": "3XLJ53NNcKfZDxaxGDKA4DkuXux34F51WQpyQLbYLJgs2nb5FuranCM5rpfgcuhXyvFVTXDX59JvaSDmLbENPeK3",
  "key9": "55gb34VdHT5VjGCT5yNdLRGCPpqAxbx9iyTGnPhYRqfqpENKd5S43VGxrVpHzAp54JkQ1pdC9MVxvYQ4adndjXQZ",
  "key10": "3YtZqgV8rhro5bWtLqh5WctRpPF5Y3ReXi35QJLzMiNXjxoGc3GWf3tCXYTAFte71N3JFsE5SQtpsj6hNgD2erBE",
  "key11": "5Uv1gLzeZXQiB6xPGqznaoXpkuEqxgixFwxAMgvSeS2ipQkhaKEsAqTUK4z5wBNjM3UaRVPa7dPZJh5fs9jxE5s6",
  "key12": "5exxvvWETkEbDYMiiSqicVeRiQZRrxNz8MHkTmxzAKxCkn1L4qBMGK88Y1rKn8HJy3WNNMpifq9juELCi8v2YSoa",
  "key13": "66vKNRSrEra7awrpPrrWptWXe9UFDvywuYLFvuTmJzQQFfDqGD8vxEwgC2zfyThAgnyVVjwnZTwLkSDh5aGMpDWW",
  "key14": "23jX7nzqeVhq1uRpsK6nvAnxCPHiFRrEvpxG7qK6T36Q2UZpUVFch2fLXqX8ptzWML8KXWeKQkq9aYZwCekrHeLL",
  "key15": "4RZNMicJFCnuBsJZBtDoGTqmucHyDvvcPGvDMdAN5CU3pyitsmtMzuVwdaLr2mPdxupshdh425rur5UtyJ7pXkwz",
  "key16": "5g5UexVnsjqNSFnbKkhKpbajrcXhL7hd4sF7sDR4TUSwuUcWgwxSNTUL6BkLsBC2Gp4xkpzigebtUFmKUyAQRqBC",
  "key17": "327szoNwRRGF4Q869NZYwbCzeutxX5245toKeyeWvZC2vuYWLavkVyMAB3aCwnauokS1WgGcdRDRg8VVZ4oSyeh2",
  "key18": "5AcUyoNsqfnkiCfAVNKxWSKA7nBVrYq9FsTbTMF82JjT5ovYUp7nKunVPDyhRhb7TUXTEqT9wzhWL1jESErm1Hxb",
  "key19": "51UBJeiRLSqvg9vexjGCCjtyETSSu6JdQE5MktNjMsHqPaCnicY4jqqSfE6q8aKkhry2mmnGZ27U5Jxysy2b1gnY",
  "key20": "5szNqRCVi33TMBvAnT6eJXiALoGDX1V8cC88ZSUkHB3Xjy8KfKrV82C43aL4xujMoXWxDYjsWyjjXbBFASHTHXZi",
  "key21": "5xMHuXHrUfcPq41RkTTjnaGb1aZyfv6ojsqJebGZy238PkxDtdDMZFUYTcCrPi9182HVVByUdd5aw2KjeuSjdk8k",
  "key22": "1jGii1M11kFoovi6k6vC1KgE59Mb7TuYk6UYiqfk6TTwKjDoejJcFdUzec6i3RP8jbbUYYMtMSpgQzqLfMFYWD9",
  "key23": "REquW5gbpyuVUTMyKAYWfBnBxsG7LyiooGUi9CaE9Q8tuxcmcu9KAffN8MpTExqXai4CmEm982zKqdscQXHGJh4",
  "key24": "2k49gds4RCCXNPcbAwgwrNQKvm1JBQJtUwAPiusDjj17uTf478tXUDo5rDt1idC9SDBM8dsq2JvGHZkJqbjeashn",
  "key25": "4L8ciZAY38edADfi6tddv6ZBwbwQJ7R5duKvd1U9B54qHWWMGfbxUSG1tDg1P19Mp3HapE3MN98FGCzgsnx5WnBk",
  "key26": "35wDQ8Knc4oQ8QvMtBiBW8JckSi6LcCbZqme84WJY2JHHmoVmFEpoSq46hHARvthiJaxJEuqAc6iqW5GyZHzNjWS",
  "key27": "bn5N4PibC8rmg9Qgh4fCPoi1GCUWD6qCkJ3GwhaxjNndaq4gAwuSBckdqtRRWgnxNKf5VsYqnt3PQidqhUR19w2",
  "key28": "3r9pTY3FXj2nPQC74U9Mgoc1RdERVCHHNRVG8AHriBjtZ9iaUnYFJ6xrka4ErtMM1YRFYVXDWGGzrj4oyCRzHeWh",
  "key29": "mevZHmP2CWxQCXMighkz9B4wPahaBHwfbznfxD8bom4pR4rJJLhLukobw62WT9rAMfGVJYJ5a9Lrpaf4ZMHiRWX",
  "key30": "2W9q3hBtVrXBvS3WfoS2j6jE4GRFsB2yVQMs21CrvxzxTm1D7DwfcTcJbX4kcBiH2tbbyciBaZb23giNbaaUFb9W",
  "key31": "fJYhSNQ6NJuB3xknRWKVEtJDZP63SaNLNzhgHtoTyJWF4Rg4t77rvHZwMZMzYFrJ8MN5F43F6oxrEifcx6Mfo5P",
  "key32": "3mSjqdDVRgfqjJRfFpKdGHgn5GQqe8oA52RacJ4fHcaQjyY9fYUFWfdqPv8gUouQKyGAPGhtgygwBCiH22SApwf7",
  "key33": "SqpR7WkoRA1CvL9DsJ4xdx1ZP4UT1R5i8p3F1LodVGaU7fr6GebBTzY3AxfDcBuXsaNUaSr73baBtw4uQnor4B1",
  "key34": "5jxfABj6T1KPsyiDxBT3SerP1KKUfmYeJdKFRY9i6kJ3FvDcH547PvU9hpUxiUzorm8Y9M7E9okzguVLmXLQSEyH",
  "key35": "RQoWnYxXLjQkaNHacn8Kq8Y3iUb1cJW8YdVZ3NradEL9Hw8irAoDsEmbSZ4Gy9jasQreRYRNBCuWRtGD6hTcaKi",
  "key36": "5cK8hsqpS5vD7TtVLyQTyqVUYKD13Y4YGXDwvTsDPgyNKR5insYX7y74ABq7waK7a9uSFbfy3K8ThBRpA26khATH",
  "key37": "5QToZUEwbmSkL73Xu9US6oM2YGG1W2uVKUdYsF9RTwBiehsKAWGd92m8Qd4V2RTaKqs4mzLjo2gKvxop9uCMDFy5",
  "key38": "3jAMCuggZatCdA6aBFzoWyCcgvPmHyEzCiizWjMQ14vjo9aHDd6orKVmcWXcwFRtnpEf2jkTtZ4jTfbdzMvQYcN1",
  "key39": "2PMpXLqT6vy5Gd2FCLzxXUV2E6LXkARNrP2v9PKA1EzbZswwZ9uj6rTJxDfeatGunu4nu9troEGP8RCa1FjPNWco",
  "key40": "42HgN23Myv5Syd2caFBu6K1VpU3bFGjSnfjdxtZVAZwZtYLQuGbJ78y2vQUsJDfGmmFibKe1zwoetwbc5VZc4iGp",
  "key41": "4xZHkKFNv2r3UhAKi9LTPzLwgvdEQZubkmQyQpzrPMJTsjfkkvniDuEHTtCQzCQaEgzD5uCXRfLgv6acpf8St6Sq",
  "key42": "4xYnhjeoEyDTLEF5V8sYxRSJwPvLT5wjKreSdAEYhbJifEAV86JhDWJmy2T9iWovTSTnjNeH7h6nydgNBtHoe4mQ",
  "key43": "4wBfvQuMq5M35cAUYtQJEv62kBqGxSCyMZJaz1hmLru9ZdrnfVRqEkWdn3p5k9nUTd2a3zo811V1kKFzQQAg9utp",
  "key44": "2XRCQtpwc5V3tDFF4wF37unRqM5keaDGxNDeM8xTYJNWTK8AR3caWJzUmvdJ1kfvqCqdBKHFwwcQXscCqeDe84tX",
  "key45": "5VMPcCRU4aUJKStqECRp41C97qVmSF5bAJGiAEwUxS9BLwzRnGidTffq2HpcbzF4Cp64qetHmk3Q2i5wUtpx2WUk",
  "key46": "4MsN4KZkmHvLSRvZBVvL8rdpzaxtkmFrvZZ7kTbonQ2X6YqsT3xEBbSB2sx1HwJoT9zUv9JpoJRVPukV4uZGg6t2",
  "key47": "45iq12wm5qsjsoAVbHqyqQxkucsAZB6JRE3Le6dN9rt7WYR8G8XeYonAfQPT7tDeevmshuK4M4Cuby92B8uAx216",
  "key48": "3d7Cxa3829ZskNrQ9eLKe89hXYm83tttNcMGj3dbV8N2wxzhYn6SJakotegQL3WnhXSHpns2Rk1PRo6VuwsxF2JT"
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
