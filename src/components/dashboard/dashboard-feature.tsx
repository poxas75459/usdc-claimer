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
    "2fh4KNkuiJ7UnpYxZmQ9GQk3v3LHvw2X5x2Lkk7M4eA4ARWmda5HtynQrDJrWX2UesryEwaZiN5hbeej3wrSbbxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rn4X29CQZ682xa5hkQ6x8WjpWfeU45tnRji1Vf7GGCMj3XKkfYbkhyxKYhtV8uSnTcNitUEzQatCC4KAnYbzX5M",
  "key1": "5ReFrBhsuof3puLC7PHTuybSMAPiZo64gbpG6PnbHe5PqKa3WPmWrJbyx8JdtjN11J899t8QD59dxhEWRgRqL7Nr",
  "key2": "5t5nBjzEnbqvKGB7H3afbRpnB2Agg3g7CyaioBpfGDp7Lar3RxnRnybvjUodRQ5ktVhVVapEkANxAuUvVDmJviVy",
  "key3": "ZunKYb7bPfhUBhUKqgDWCCL2CH6aRigWMzHCZGT9FJff7RBrfcHR9fEmvKbD44687dyaqPPmBswhawsD7R3e5nn",
  "key4": "63rVYxQRbX7Z6N6zdQcoqZeGnU7ZrELcD44CoCTgzE54zBEGcfS27cjfkTfEwRybwss5sxUhuRaSJTXfVS7VmHy4",
  "key5": "3i5VH8rDSMv9jLHKzLAAP3JRRUyLk5bdLZqgMRSk9Qpjej5dLLFUBMvdyBweNnPTXhoPfnRX7BXNrgpmwAzZRqJg",
  "key6": "2odLcdiwFwQo2HzR5E1KmapPKaPR4dDiCGoMpAjeLGTYFJzNVzBsbRTMENEN7JUyq62D4z1uy2WTAuhAwTYmWr23",
  "key7": "3AvdetB7zpPoYpfwip8Ckc2gGmyWVcrVZNw1pn3xu5LFJs5rWeopDwVrgXAugTMN62CPsbmQNkvyEdRGGopaLk4X",
  "key8": "3bcYDooAvo26nmB3J46yb3xAgbSGRP7tG5oZuRtMEEbpWJgyg8iRNyVLD3TE9SyH1obrcRt2vNMhvtpjoVH7No5g",
  "key9": "BvLmfLjXuBtxuXvFdQC7EyRvBxgfFvdbTvCFzGym6YNEHtNHw94dCR3hpNZus8p7j5jLBDWc1VmN3toa8yteUQb",
  "key10": "3WEKjMKoxJFY4JUcA7MWiML3ovALCakpE8b5pW85GG4CjJp7T2fJTSA76dsQYQvzRrwkUZN8WnxNyzdgrH5HTgSE",
  "key11": "4AoohjKahcQKFtJ8W33DzoNDdzmDynRYZYLEbixGj9UeW2RsT8hHzTFQXmtXYWUUEhgfU8xJKKQqPmhtvRxQujgQ",
  "key12": "2KpQAvASMa15DTWSjJVPBLQAgrge5yxyEoZsBRiyAxMwJb4afN9pYdDDxiLbnVR1qVD74NP8YXRettJsDfcKfgRz",
  "key13": "35oHU2Mhod8tX88gH7WStMeNz1Tta7bVVHFJ6rpWsCqMkPRa7NH2ZeVv5KyaMrrEGgFCQ5WcZNrnCvswZLvtiRMV",
  "key14": "22rFrYCuj51J3TKWNqJ53XMEMbD4qJyPrwJ9QBtzquhVkvZw5xf7FrAhMeeKWGsx5h1LUoTfupFeCmws84ee8jWm",
  "key15": "26sSaHAJwyDNzgG3q4X3ibWWBM6EJfEfEtN1Uh6ewPgvN1NiZ2tK9nMCDHeosoFy8JuQqRQA9oy3wJP4DYGEyZz3",
  "key16": "2QYptF9YvGSTybNWEzsZNzCz4UW8jUFMomgbZTLjxGgTBe5md8QosuHRQ1s1gz3aFdDstd5ev9mN4mAiyzqXjfMB",
  "key17": "262NrCJEjosayXAh179q9JuCUU7FPbhEQDcm7MTb4ac33jmpmeU6jRdazfF36mpGTwPQaLAegJF7SncgAzLJNb9f",
  "key18": "bYimZo9vo5YmJPaTWLhsJZ9LKTCChyLdbN6pGhARwc44ykvHGjCAJTp3roAZoTsdGi2KoT77hvH53fk83kSQT2b",
  "key19": "3PSHFoQwSzDN1mGHspQzRQH5Mt9wBmjnEQVrfkPXsU2e6HErkzPr5wpq51wh3Dy27PcqyunJjswVewzeDxrGwDjy",
  "key20": "5Dux4x3ZGMJ4AfrTaqRHsAGEtcpJubCYxhszwLsWmixinkYkPN2VVSycamJ5EbTvSkNkwTtkf5Tfdx8DTT2AK96d",
  "key21": "ebHrFVVyg7hca1ercLUMj2vJ5rjEqXMhGSTh2NpckqzEFypYb6pTGZZ5zqEkw6pPLP6trdQJBpGd3LBEeoNdsED",
  "key22": "4UPCuzKXNJv5SsKCAzyjBsxCBa8bUqDsFVBDG26HTYezQP6uNziEyZXg2dfTwiRK58mJWdpaT3NBWgEyny5Uyp2m",
  "key23": "41vHnRn5e3xRW4Lp28PgfUMv4yLXhyrSP2AEqMwuNXXHZcYz5kt3AXAtoc4qefbqvztU96zhSUbpHEYn42pMsu4a",
  "key24": "2vy2JQY3CGARoGg9iWw9iNNSBnYudjQUpcVmJbAdH67w3kqqoweQsHkjEHiqpBnZAATheoQZTSAe5s1W3HCKeYt8",
  "key25": "3HfrtRzHYnMGmXmjy6AVA8ccA1XJjzknPhfAZrseEMPXRv342ycH7Jij4vNrbpVHDmiJhXMT25KKjHMfQsxze1UQ",
  "key26": "MPHLHqj1MyupxhoExo8K8VdBUPxGgZJnYvDX8B4HYWjP3Gsc7gZTkg96A44gShimduY6wtGQtDXZxBKpEJGtKRV",
  "key27": "UupR5RgCxpgzLTmuYpCy638nGyek2otkAHqpb69WeUT3vQZ2huwKgK5VxETZ17dYWpYuPaDjtwEXQdW5zbUmEb8",
  "key28": "3134H8p3DejMyN77SYRaVHHfZ4Z5wKcQW98Q62w2u9aDzM65T7ZXNT4bDEsopnraZQaJ6fV3HYYMYFf8Ldp751R",
  "key29": "2gRpkU6R1ifz5g7LTc4JoTkXfjSjoRLQkxStVjVL8me3EZidfb9WAEnL2ixobtWbRFpDywFRTBSHZEFYFVJdiGQJ",
  "key30": "yNBLrVwbaZ462TMERSBAGowkzPQe6deo8TkJ2Z7phFQjDw6DzUijPPvz7JFFymzDdufB1FsDGvaW9W7VhKTuGQX",
  "key31": "4D9uqb9UwxF52G3648Y3aq2y6RhR6TaedB3WkUEJ7v4RyJg6Ta3cQqHeGT1mzDm4hAKGS29DkUeaGF45XLUhdvTP",
  "key32": "Lh6uaKjnGQmTvKuPApCvLJPghNuffrtgragBgXG51GduJjzdDm8z3QAPBR5683WDRzYLUAZazudhg2VkiGfX26T",
  "key33": "66Y1zAQrzRuHtSYzn454bcPp6VMeJFWbJkJRcJZ36fuXdBjihd4ZmxDtzhdc9ziMbpaLV83KNcT3jWgrVdc7TqSK",
  "key34": "67uJQc2TjoAQgRoN9HsZSMnsydfq3hjQcYktB6XThnRiu79vwyNryF4iPuU73uwfJ7QKink41Jr31KAEtA7gt3S",
  "key35": "2sHmi9FXdDaB8xXTE5PLWKVJdeEpvcnjzmM3qDR55FNgp4Cf1YEEuHwntj3AD2oHE5kz8JQX993zyEwvDd6Ai8AE",
  "key36": "3zAm2CixmoVCernis6itLGNXGbA2p6DrqDYjcC7BfpY3r55v3KvaB2fTnaEQbJXuHZs5poYzw5Z2fyrQ2T8titFS",
  "key37": "35MRtdkP7mBKSuaNKqVvWPFun9bQu4cnw29SjxvLjfq8Uf5cgN1wZzDT79Ld49VXmYU5UYT9aVsBpriDzzrwLkzL",
  "key38": "4RGjYHmJVQiKMiD5DzXJyAvr4VtmAfVNstUoQ63uUYQGiE576AZer7d1Wgpnha8HG5rUeGmNSRPKLV1VS1qsJ9ij",
  "key39": "4tHNfFmP5odFAHjNqdK5PDJomCPujAJVS3ikf89fsdCugyfiC8BJMMLJttAuTSKy8koTDNY9riPmCikHkK2LHc7i",
  "key40": "2xSTbnknAgaFANxakmfpN1Et3oXgyangLK2589YTDptFNpkQRRuBS2M84BY2HjwQzxy8PRmAZbbvetm2mKbqsBJi",
  "key41": "5zkkTizWS5okWZmQeEEJZPxQYf4EZcKxiUXx4JVmMpN4SuWx8gSB5zmGCAvP3Up9WoaM8NPeCxBTHiXjDV87Mkom",
  "key42": "NE8kP7SVB5GLkjwyTcCC49G6dT8N3rZtGCURL7ahy85WShGgfCVdvG7DTGe1zVYaU85xSu6Xqdt6ohyDPvFJZ1T",
  "key43": "3wZzemVc9mfin9NCJQ6VpbpQsnuSJpDQzQ8Dp2aKkwB7s3zcegbLu3YKsgJT7x4oh5YMQDygdrEw4aZJSBPWm5Bp",
  "key44": "67n4ToAi6dcUXoMgX8rEi1qmFdgdhZXnwPfYsKBPCjripAoeihWdPVVYw3b6dYhYrUXdm8KBUsJ3cKHZ3GpQ3c1T",
  "key45": "28mL8qA7NWvKQ6BPS5Jn5AA85F4aEfb2FEgJtRAj5BhNhv27zovWfjj6oNAxKPzGDAetCQzwY4HBVgKZZkFUtM86",
  "key46": "5JGeoX7oW2nSDhLccCQvPH77g8XhDtTBF79xcUEnEaMrHuE8PGsnpKiHBP9SwBBdr896Z6XWBQdquzKhTeVvs6gJ",
  "key47": "26NHcicY6pnCWKCP2AvJyqNxasDbZt55FHK6ikGpHTPawVv5mL77FSFJ9pgMngmAKSvgADKYqsFu1Cjk7ySUHFzr",
  "key48": "vRVNsWwqk3eLb4kFrXiCLxmeuAbtac9FdBQznYymFgv9gmvLFExW4vGku5F5YcyGPuY4XoiuJkSCzujPHRLVwgQ"
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
