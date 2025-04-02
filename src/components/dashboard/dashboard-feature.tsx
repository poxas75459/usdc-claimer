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
    "4DG2tyN41BKsUZW5nYvrwqKVPzTdg7eJUD4v8RL8pxJSHyRVxqPJJXfxPWfuPhzubAursnh4vcYHhsUmpi2caYfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jUueTaDSAeasZVacv4i2TuEyggtpkaBc1EJo9QvcuBJSMmppoUW3Gzv6PvwjgswvtWc7CSLjnyZxVczP5T1DNkN",
  "key1": "QzhAotK6iouMHrYKZ5eEtQrEsLFHm4ZLLUd3bvZPjp4UKksv2QdjiGcggt78NtHpx1MC6nvXCLRcWXYEbR7a1D7",
  "key2": "gv61hiMRK5tgExgVFGpByLEyR2dKH4VP4jTeARNNEhqnXxzhsdtEbgt8qs9AbNVQQr7XpcBdzNDKjpvwqCR8iLs",
  "key3": "4uTXV7aPaiVaJ1J2x25Hz8aQUxFk6ZhyMRPHDCPNQP3vMQKVNA6N88EarxyKaDdGDD4yTtMfrm9BEHyim25aYioL",
  "key4": "5c33q3Nm48jXefppV5YKdFmJSNPDJ5Urqo1ikDeLdSMfjHaxPbt6wuModPs4qnBGaFociwoGFR1GrzD1BvSqBV83",
  "key5": "BKToo4Mqh819nhcnSTmA7c4FWxZpHFNAhFJ6v9EcAvSTVszknEK9XHFZe7jScGQZXPgsYzjXtPXYoXwnktcB9sq",
  "key6": "54ZZ6XgyPB8dy4V9EVL8EhR7fq2Jrzh43RbMkbGmcCxAWthXe3YG8EQrHLjYMjBTFcbs5ZTxvFjqUKpsTQr6jqJq",
  "key7": "3fdZ2oa5Hs1eLu7xWQbnTeNiStksdZ3YQSx63ykZc9F8DfvpsUQFTAYN3J3YA6L3DdeEj5mRqUkoNEbz9gXUg3j3",
  "key8": "55YXZuA7suJnJr8m8u9u9EBKh7yHpBKU5k3L17NoYbfF9WuMNP9Kd6JUVtbZcMYTJgeqTAMLMPkS2qWjyr4wC3M3",
  "key9": "3b1nauxadvtTJi9ihL57evkRbQUcrR2JNUz3b5MNR5wRW17oxW8dgzHmrAPMaRT3kW4xWvmHq9LXzGpaRf8XjhNd",
  "key10": "2XgyVvPMb8o2Y6Nd6ZYucvfuDiDSdpooo8Mf45X5cAwyNXSqtSukbrYaX2zQZgymPLUEq1usGEzmdAsWf2ZJwKNj",
  "key11": "3pKPYLgLC45xJQe6WYLavBZ42WVivLawErbT5GntetPaFQgeNCXnEDnhLBRrjamKkzQ41hCqDsuuke7UFoRxXrYP",
  "key12": "46arVjRCKiA2rrLabDvar3Hr9tRMjWhp79AsJpH6DJ1DFxaVjp9r8sf5RmPurV7JQQHLcHLfYFxozp1RLWBRGVqY",
  "key13": "5WeqwKC3wAhbPhRMBBZ9NHHRxPXSxM7whFUY8uiGqgkSv4HEy67YWgUxD6vKGevNp9W4SGJRms7jxuUP5omqXTmc",
  "key14": "5D2JiVac6m4HhfFtRSioRhN9CCGgsVbj9vh7GfpKdgDtJUNgocit3V2wyyPnjPXs7J6iUUeL3coAEfGBZgWj3bMK",
  "key15": "3HYk7YkaXzWgZHmzSTHWER9Yo6eLujr1MxhLKHAktPxcpr6DemHJ7zp987Y7ojbqxMuyD7SfcJVEXbVotRZbR9Lh",
  "key16": "KX4tXgXzyezDTDTTYaEv9wdKuQEQMi4ULY6nw8FEXTXzjjqffANjwkidNSHxor1yg11rk7YS8or4migqQGJs3A7",
  "key17": "4y5rmf23dR96gqnuTeqaX37x19bqYKZUHMV9qb4eErAQKdtGoQ25XVB8W3K5hy8KyvcBNtzyjaBsgjXaYA9VUNUN",
  "key18": "CZ3G5WKhT63WPgM5qCXnXCpjb1AHnPyGZBnSzwy51KkV2Ke65awwSv2vHv4AAo8aEQpeFpYtu5Ca1BmuSfkNU3T",
  "key19": "4Ze6LpEhSzJfEd3G7XjqGACWqa2ZZigqKDqMFH7u4D6Ns89z1itZa6AKChsh3tq4QuRP6cJXx2xWCLxTVo5APUem",
  "key20": "2v4BWGz411mvN1HzQndpCZDDW6WnncTVmsf7hsq2zDKHNaUXcdZiDqgEFFKYfJFNJSE1gG3k57bN9fBUVZseUF9Z",
  "key21": "3PB1TtMNC8MaLQLzBbDBhz1ouCtGQgr65rMHfSxRTPGRoHdMMsk3zBbS2ZerBb5XWkt9SQ3uQF5EViahLngtK2Mv",
  "key22": "3Mf1GmXTCqBkhMv1bg65X2oFyshKoMAKmCQpsVF9D5H9ieKQtfLgejbHcJ7mtaAPUM5JzeVFcYLfYXnerkxyNm4w",
  "key23": "5w2eGiYeCxATVxbgvsC7xxK69hj8jqkZNWqEYCpVyXeWpwivPRHhNCbfiFs2zV4L489uY9i7dB67rrekZoCzsFck",
  "key24": "4HKeCu9BphEJ6KDexotRsGy5xtdrRfyUheFkAHdX86zwf4rNrZmvq2D99p6L8madxXB1PgiewohsG9J9SVYvXo8v",
  "key25": "3oDuvMxtnpmG5B9amaLrn2HzS3qwmLxtM6GVmGACEDBdhAKou7YakjHj2a3wpwmJ6AyErkiV4KQDmu8NdCeHwCFo",
  "key26": "3rUHV7pXLBFrhjSsnqaUg2XwVaCiXrhZc52vhJWwRwmLTfaU8yz6mMkdhSb9rD8nacht8kTNJDV1VccT4wBjq1bz",
  "key27": "5BSSvUcxi11T6UzjWVQ4VX5PMSLXVqxxsxCKPqp4VrhBDY95Cr4wcydfRSfdMroWKVEpLHBvW6v57KXcFg6yEBFn",
  "key28": "WyqYW32ctCwQgeAuFrNMWcRzrgpsJRvwWSpr8BgEqC3StkXtH5kxbg7G6nzs5efg2dYcZsKiHEPAmprkUAHXZ2v",
  "key29": "4CuyXswNyGmRojZ9AAbCFEAkGWZeYx7n8mkoFXFTvnSA9JJbH93eqmuZ184eFX8uUxQJukJwGj7WFiRsvsVYEXtP",
  "key30": "3Qgn8AAj8LuUrm1BJpVWqLFPGW4zfocBSftQQNMsUsU5TjyBUnAcoFAARS5iri6TC8R9Lz8CAcZXqLkARLorSKon",
  "key31": "wKmQeAdN4ui7VJxnZ3bJi3g1B1FPvkcnvbBsxB1nLXgqzLrsZeSUdiMqfsEwyXojQBroW3TE29927mh5WHB41cX",
  "key32": "akppAUwAkwsEuCwUFcA9eRBRNEdvbUFCzsxJNHM1gtQdrgGXvYmiVuzYXmnVWrS5VYJedEe5kWeik67ShLQ8Heg",
  "key33": "5mM8vzRJvXpL38JYEsXyQp2HqDZC3TV6WsdmiduM3RKrxLTEqPvDdH7eJaPpvgZ3TDUrU3evaHXTbxWLUF4MZkNx",
  "key34": "CM1667iJj2bX1zDYWBNno5fwpLB17wkGApsuSWgjGXCsWDgMNXHxu7j3xBnTugeFACndzbSeVSmkNZzNsLkEVE6",
  "key35": "4v8uuWZSLD19qptc6rHgpadoLKTyEJUAQWAz9YNFQSHzTLwP9iaspLhRUPn55RVLvRWaL7TwXSXxzLAtxGj3Ed1N",
  "key36": "4nAvnJvUPZgmvYdmpuJCszBhNitBumTzzLprxAT2W7pi1U7MyzSuEVfU76AZd77dhbQWa5uFbePxbVpEnQo2Lu4P",
  "key37": "39pbb639Q4jqf9rncaJHSjx7uheKdzfJNtvdggEBHs3Xb5c4Ad1Z72XJ5q8QhdXYPg7Kto7Q2JdkTFHxBYtk8XPs",
  "key38": "2D3MRbtJyf5GX11X9WJWJBMsALfZW7e4PDi1sRpxEjqUVmKgq5GVoUVRVb1SZf3cTGyGSAdNH29UjUYaWLAapRxG",
  "key39": "4ngEMU9H3vtoJ7qhy5vVGxVKDh9nhYUioPh5hBrGmu2NpxqPaJkDXufKu8gbWiAujK1PZmEPWsa5B8JavwcovzMy",
  "key40": "3eb55pXBgcXzxAj2PKjo4JA6RDsjorUPZb6hMrwph8AjPdwvWYTaNB96vhAoJgYRB3NNm2rUDzicvEsYrzmbaZ2",
  "key41": "5mwziphZL4ZA5H7E8tLb16ERvPgXCrPvhaUDE4FYw2nbS2ZAUSgn5a7QuUuHrHrTPdzLf1bG5NqgK4oxpJjKBtAs",
  "key42": "5gduPzu3ebVsMQd7cWixfcZBvWSTtsNsSiF4UBEaDMs6GAPXZS9zgm45uoxXHA5VY48cXPC4ZuVasyztQyfqf1WR",
  "key43": "3G7MtTCBkQoMu3opjatnbghCTLzAHxQnXJSN9LRUvYNoyjprfUvez2jw1iRxC4UGLTyaJobMDyqrXVCQfveYwhJW",
  "key44": "4L2p1NuHpBLeQAMxYi1Ns6obSAWyYxoPD4xQZ4pKDGv6nzsUq6HVNRVGiVjoEGweKXzz9nK2L9ZLDY9Qvrdz3EhQ",
  "key45": "5B9ezzgEmoXMeVp9FJmdqrFmyhZXzKffyh13SJyWkAuz5xV8rghuzZZxpRqZkbdqkdkmh5TAqjPXJD6h5NdUPHw4",
  "key46": "6sACU1rRNPHPubpcMUvt6qbVyJu6YhiTRL3fGCxgcV4gNsjhVkonHF5ftXAMsCSMKoZCN7HrwPugyML5dGArvaY",
  "key47": "2qRMXJAf2HQYAh7CAPWnaw6rnMdMFyhFR2akAwR6ZQQuGJ7KibipyHMrSeW49VPomnSew8xZeGBLvGQWP25DFWnD",
  "key48": "3jAeq2LvVwJB954Ydz6p1s645vdn67rStxb9tUUYQJseBUtaYMH6azZRTHbnU6mq3aDQcqXQE5VA4GxYdW8GF5u8"
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
