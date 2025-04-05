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
    "5cckxiJihd2oD2Z6dagTEpVZ2HGBFVBUWejCU6rjekW8ZQu45JGH2HMSm2ZVLvgKXDpm24VN2G9KD4Xr9VSXtfJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D485ppM4sqwtxjbUwuW4i1a8bPFcs2WnsSKNS5rxhvCfH4Eb1AgtZKukmx2edYFfqpokG9MonGTmAAMAnFLiekf",
  "key1": "21UQ9Pk38AEPhV2SJDBJFiwYde5V7FDe3XRNbKrvV5t4hEJReaVmvvrhaQFxbbmkTNyjtvwgJSBKNv8CBqxhknuq",
  "key2": "4nFGs5yqZ5H67GRvCGzMho64bGiHrLiZuZARvb8fbnifRqw5AzKTwkPdKkTaLXoECZqowC7XFmYWvK79UTMmhMUD",
  "key3": "nn35c6NhmjbKgG6vHUDDKEvueocigGE28Zmhqwd33hNRSqmrDxwtXEZsyqkAmzGFYW8q3VaoyZsPDCPambXhqvf",
  "key4": "eyqDQKkWPvzwm6mzxQ47iu7SPNVbVD4CfQYDWXSHDiQSUFKAN27zsX2N2ATmimSLxie3b6ehURN7D4XaV8i4uDA",
  "key5": "62VFcD7mxz4M9LPPMGvsPE5TQMyZQpBUfkRYKZ7FgXXaAQJN77SouNh8PqK2DFuTz5J38Xq6RRgfD27EZsscjWe2",
  "key6": "21tksPvkf4nSRstE127NT5tGepg3YMJAXmhEpEpNgeoesmeXWfvgADQKkWmnXbMdnRJ9NScL8TYhpzqmA2zMxT5B",
  "key7": "632X7KRRYAtwgZxgMKDN9LnjNNGNKTnmaiKYGrQfKfr1tNcSirUzgpzxZJNe4z11139666FsotpJmDarSa5xgLQ1",
  "key8": "5Fbwxp8XMr994R34bowwnk4qKdkPNnrgTD2zLvtm8a26PGLMBGYeXFn13LAuTVK2r1GhM1dtuStgzHFe3q1gcL55",
  "key9": "2oYgdJb6JnMifZYfJAJytzSnd2du388Q2mmxJJVZoKj31Vq4qoZQp6XJBd4xbNqV5CdwyczxUdFn3ZTdRQ3dj7Z9",
  "key10": "3B7eoEowUWzDD7CgcTL3KMm7JyVSgRsGV4BwhzAZDnz7JPXyWrCvgpXJgQD3TDWND3fauBmzbCQyXikQUHp2P2U2",
  "key11": "xmzPPm2CdW7xthCgFio3gcswfiYnHt6zzUjSsd9Wg68iq1DqY62VgsUPQmGeQ9bstx7Gj32UonppciGMHDxtBCH",
  "key12": "g3WDRJxemfUjSeaWRYo9yqhpaLbGioaGcM86BU8dJRnkyEiZF6HEM4u3qgYYhqjtxj4EEEEk7UKWP5pG2aKBMA9",
  "key13": "4eUBWPSGsFDDUGG71Q1BRSATHuCYdmcrFL95MKY3uCiWaBzfTnFjC7acdzNTXg8AjEwK8PwpRghW3AsZvvzzBS9c",
  "key14": "54Vq1TUHrjM86thEkNmd1MBiS2C3PqrkP2Tjsq77skMF7bm1mFM78zBudERkF5c1oJUdPV936dWJ1ozinwJ7D63R",
  "key15": "2MF4r9PT85eDjqvs8dSJ3bDkBkPyKhvvnUWjbwUqnHreSkYCEGuGPBFxdjtmZyKt9MYq7MZmThVbKCWc4RAzv6hp",
  "key16": "3JmQnc9sTjRgWK7U8osdDVVzUoi9nXRco2kSHqNdCYSCA3jzjqvr6QWiPokFoEvx7mbP8NiU5WNNhM9EqpWgr1x4",
  "key17": "4d7oScN6iuXD4UYg4J41GxCTN49yCGj7iMsdkuQZWRCvhC9LeD733K9RGYW7Hon3Bmhjm58LTgiTHWKSbBnfdkbw",
  "key18": "t4QzikzjYQpU68yKuZcWRdzsjXUXJNAYxinyrEkvEixRadXby7eUUBPsdAyTc15AZ7y6DANzT6DFmM67oH4HYaf",
  "key19": "3mK7syEXSjzX5RrNWHVQn3N8FXfmctDjunMmi9MqzbyNJDBXQLezPSQ1URAViAGSjh6QDbS7ifhJPNcvACAqJUKw",
  "key20": "3SYdCV8zKkgEvCZ7dN33vbGLDzHcGKoeZw7gRA8GDAx2pZAFFQXeNebZEWR4ftJinNEAHJEkgyPU3qWwkmMHiw3A",
  "key21": "4TRYiG4KpNinPAhBoXSmDuVvcJRcLUaLdcYYFCZ71ovczghPxbJuUUWUWyYHf8U5kv8bTqHfsRnP5VfmMxK5dZWa",
  "key22": "5eCvZYW7LaNgS1Pi2v4LE6zSCLJjPxM32NEkbVg2fovQPGoSN2qGPAPTNNVuqnc7HCNiJMy4W6r2PzuTBe91kVQz",
  "key23": "5iWxmT5SHzDPXHTDA9J9yMNCK1NZhJQHAwT86MeVSbwDJFpGfBD1dvCS4iZArA8V7VHCDumJgaDzfpy6mY1Twhf8",
  "key24": "4AtRm3faHhc4t1qWMUr5YgiNDrf3i493gib2Ao6w7wBa2kwhURgQozZwRJFvxqiFRKEkJaXLabXT64UKA1BnHgPa",
  "key25": "4JheG4AjoK5QVHDJ8VboTXKBwt6sG58RjJaBbTyg4gxb9Mq1VeeM9QTKAD6aYmRZLWanTn91XdN57XAG4NMonu6F",
  "key26": "HCPLHAnmBmuiY7GQ3vLLdLcaoNsRU7M9qQnzKfiZc2tnwCpgKpnAJWbgcMMDyWTE5cCEVHoJAs1f3h6mRFMvaUp",
  "key27": "4Qnm43BbsMMhXEZYX2Q3Lz8aa2MzHgXWMfS1DH8BxZEUfzRGBWpHXXm49Q3bvai64FzJw3CvgPVcjmAbT84Mn9yh",
  "key28": "32zYnMJhMuHCwwbXnbndmNqEGyx2T2JoXRtTKSLYLCLPYDKZuYY8Y2LKppTWb7LqgKsqxZDJNJcYD3d748yPmrX5",
  "key29": "2kuowcL8B8em7ndhGshXcJnSsXy5Mq43CAkkYR5dSs4MxJr957GjTq2Lhazowio2ve5DGsfrHGT9zyUjkKLnMuC7",
  "key30": "5X1QGdLzSByM7HsjYzWmKYk3G7UABBvea9Qwe3EP6nJa5BfoewJJcPeA7n6hb6PY9bwy2Gmxqq8fHHSWYPvc4Vte",
  "key31": "4jc3aAiGnDs73KhNXhwUo3oUfLbkVzKw4yfsBAmajEeyyXwfY4PZ4idR8yMvgLzw7WGUcetNxDUMCqNg1xygwi7G",
  "key32": "2cSiULbBwNgaoV43C5s7V3omRwGnpqLuYLpyrufA2mWF9XmensyXYdQ6X1zB1Mau6ue7NruLeijkwQJ7hSALUjNv",
  "key33": "2d2mZChyn9AopWL9Xa4EbJJo9FhsnsbHsiAPdoZjKv4RwYaPoMfU8gFno7FZCSDp6BzUyHu7gbWw7kiiHDbYCMi7",
  "key34": "27RcvqvKnjwc8UiY5YCSZCUoBZZQiTQt9WrZQQqJbgsvYM8FRbosL3so2gwpiSuSqKHBFbe4uZHE8BC1NsXgchWg",
  "key35": "bHvPzKuKpdDYFphmD166H5FvWFSrHq9wRxFVc5vXd5bfSvg7FgbBjodQcg5bmye91qZevZc5df1EqFhFp8ZNkCF",
  "key36": "56S1wXjF1u9VkgE7Xno7Ng8SMNQXxgpMGYJdXGdoXoFPjm7SbDshBkrqwTFQ6ZYxNPhmg2DzxKiZ2o5u4r6mJBfX",
  "key37": "2QqDViQSyCVgA8FBVQKAnm8rSzKrUDAMnUFHsHyc4kKQxuzMXFXwznnP7oMvystxE5jejaBqayfM3DwhG1iDAASA",
  "key38": "4jo5fFU6HtFgyGoMvTtdnpCrHM2dDregeSAX4oQA8gvMZr5TgKqytYfpHjEHKRx1Yjr1TFZ46AfQEN5o23Xaj1Pm",
  "key39": "9bznaAYEuSdyAFqTq17n7ehZa7VokqCpCzKVNMLRJYaKg8gJcpJUarCtRvkPhNC9JC3TJzgzMCZT8NycKHZgcrY",
  "key40": "RcYroXU2cdA7M4YycreLQziKsFi3UyepoHM14vr8dKBtcaiyHSpn3xApi3p71udgGBcXrpgP9YZwEMh8YnK5zbY",
  "key41": "4PEYirrUhMrBgEQqTiGDwpnpDSBjhQtVELARDShQtduUs28fT8rmxzedx2R79owweiw5DCLbet8bJ7yiUVQFT8wy"
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
