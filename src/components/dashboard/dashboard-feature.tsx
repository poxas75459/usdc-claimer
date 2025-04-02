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
    "4kmgeKwgUPMknYupT8xcHXgpADjSvdb6pKTMyAZKBhBJpNxHZBFCCfTbxiduYgZAz3QGxQzJNuKnb9GrfXjpeKq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BXnqpgTRJjjdRZNfABxs2zJyeNCrHejoE43AphqT14A6NWv6QuTKJWcL1NVbK8VEVfexKa1W5kuUbKZGMwjAumS",
  "key1": "3Cq91SKCtgUNPeBNWctnrRA8YTzhM8QWYRps1AXdKuwp83ijo9xM88AirBDHXX3PiFxz1kBAJYCY8WHHRpiThcaa",
  "key2": "4ny44cXViUrBktfgY7YPpoiktqAr1EUXbViGQfmxmJ6iUkn23RGxvtofCgGrBmRfD4vCw6GMXSKKNTiDMG2oFLdo",
  "key3": "59S9rFxaapUkyCvYHUWzZXhpzyGnyKj5EYoLbkiS5DcWuC2eVXb7JnUUho8nrkwjiQzuiDLvevbvLrR5vyiuqX8f",
  "key4": "t2KyjrAdrgaBYff22x5kM4GyHt2SdtZpnub9vFD4Le3DaXa7Lq3em1caGC8yAMDFY149ZcWjLxE46C3eHX8QdfT",
  "key5": "5Co1jqvdi3F169y15BQyoXTwaz6yUwGitXU9BbGJKQo3iQ75PR4XUZtuBqqm9ghsbMoJeNW8cBjZWcTaRGBAKp9z",
  "key6": "3xfeG9gLPgbmjQD7TkbZdo5ZW8qr8xay7RV5CczUxRhFn9zSvfj6a8vrZ5hq4CvNktTxzwmp6boGYgzN9FjyP33U",
  "key7": "3mtEjwyHKsE3h5geqRfUVVgxynwzQ1bQEVzS4BtFgeWZWYUeRsqUBFtLbpg2bhrP53aCpreqVhXj1QnYWwEZrrcT",
  "key8": "5WGaauSZ4h6iator67tQ3zppFmfkNhFW3L2wqjWf9xHzrnEDvX6zUwDEt9XNV38P2eEBKH52fiDu8SeWC512CivR",
  "key9": "47vQsKqKEfDeb34azfkn6Vfd8QJrScLfTuvv4CRRMgkJmVXUitvfY4RrPZZfdcMroJxVXG386ZBY1evjufqwNdhT",
  "key10": "nhjHxpHo4NyMj5BYDGez18VLTS4s6tTrb2SLZCYdpmgaS5o5uiFMvHpLBPMYZgPSxAUB3yJ3zg23oYnPoatpDn7",
  "key11": "5ugsbannehfJ3bEu9TSdcU4vmCicqmoz1z73mTV6Aipey3eMwM8fDWKzqVS7A2PrS1yBak2XBaf8nDjz5sUorran",
  "key12": "NVJHPrimvorudTtzRnK1fYynRkrKLZFFre2hbe361K5AiAuA6wr4mxcJDGAK6nvPDGrRGe4jLiCqqZny98NKKKQ",
  "key13": "2K8oeWtBFaR5iQsVzAmMaB6teZC49UH2JKGSwPhT9C89xtrwCg1hbkHFf55Kobu4CPxjir3TuqFm71SmPE9vLKTw",
  "key14": "2AyeHkmN4AHM4KtqB2AaWQscVwRwqYQ2iaux7cdfrTo581NqxZTga4odmsdp1vuRWTfrsMrHBy6FAFGK8UQUBRUU",
  "key15": "5Xjyg6xcUn26dNzMsdWzbNKphzeYJYmKba2G2JTyEc6tcaV6h8Lbj8GsKNdkrjy4Vi1FaA5MrofSrQW72ds1xcoR",
  "key16": "ZQGb3PJUNpQpTH5SiAWfaArnYycUpdgkMP1Yju2GM9wSwqhSzJS53G1kDrksjqTegcFzZQPJyWR1wMUQkLrPNzn",
  "key17": "4qR1Weo48hjQVFkNhSnYRX3MNVgeuFxrHjr2JnRdpWTaJLQ8Z6K2yBcdivqpYAYzMSoWNricFLkzvqezKucx5N3w",
  "key18": "4Gy3CPDcWTrWEcs2VvHErVCgv1kzHi5vUpAbJ61quDpiL9L2tENmFgisu6P6mTcvgqRzSWbfQuYywf9kvD2noJwz",
  "key19": "61acxZBwHYoPfE3f8PcdFCjzTRNrNts4xU76q2NBZyL6DSuRPo9g8VLcetnVmy9nCsZeSgxv6cwgZezk5Mn1k3Qy",
  "key20": "41EGb9NMDX8fd1Hx6CbmhGDUZxX9UUyP1Kke8Z6NCDdc6caRKAsn54zWNAXkzqctRucabQHgd5o38kEJZSsRetTi",
  "key21": "2mmsoQ8SNacv5phe5iSkrVoR4poJyMfoitxZPWGrLqzGaB8WE5CT7tYzxMvpMUTv7DKKMtBdN1WNUsoT93qgGznf",
  "key22": "5TPD7B5NgAkTbwy6avJrTXSsNXeqh9mgsAAuWuMUbY2febCpyTkcLsbVpvnGzBmi5KJTg1q1RQ4hDfEX2aQ1e5uQ",
  "key23": "MXanNdrz9EtwZgAxsWrwmec1sVzBd1WxpxG2kFJX8bNUhRDBb56TBk7UPZE29yRoLfyca6H4SSTn5H9nUadmxey",
  "key24": "2fShdtGZDxgHrCRWjPfgXSm4DyHgmyMNrF7SksJciC7o4idjKDKZJvm4SzKgicWUdcrfLFgKoFj22sC9zFeeoshE",
  "key25": "53kheBAp6bHUiZM14nLoZwzz4GWfXJFUcL3hivcPTBCZK4Zygt5nN3XZLyafcYXLNQLZYpNp14sMbvQZ8wHnHsvP",
  "key26": "4H6FumJkLyr4dRAyVWJNrXhL76on5iNiK6iVoFeN2j6P2SexXuVenRdmSQ55pacoGCfL1UhAcTBRYSRTvTqyqKf7",
  "key27": "4seCYCBbYwBGdu7DGxrswm7afraKCXNBfLhPJwdNZajEyUfeSqWEw8tcemfsZnqMbCRnCn2fCzB8KGY94cknD46Y",
  "key28": "4YAQQGZ7eFP1Nj5BC2VS8nXgj7TQSwths3J2NA8wJVL24DgaBa9k4gRWKP8JTLFRhToNsjCrS1AeELh1gNkQWZM7",
  "key29": "5jZAoEAUSXMRAfQK1U64SdCDcJTaSeKw16PmkbtzyishFUMWUN9AhnsFqBzYfvCp8KHqrVyXmQDx48QZe89XSuLr",
  "key30": "2LAytf6U9K7CzS2Pe6EZ67tWw4Xdvy1bRMqNqw1t5zNN5grExEBKdSKxm7cvLTKTvXuvAiy6dxTDUyAEhyn5tQrc",
  "key31": "5hwwPgXnpq5FfPwHA1BjuRVEgWc3kiNqUy4EkqHKtWnTZwxxa4UrApzywFrewGkMrosH8efEVeGi9Vo6Hs527jwT",
  "key32": "58VU9bRuuc3cUEoAVf1JURnPDBoSaLJebGHPgpqbnLLJmTQq2jis2qLgEWhyzkaisVt5Sp6pHhLP7YnAkYXsxiNP",
  "key33": "qQgJ5L6mWKMAEha7D8cZHrinWr4RDeH5u6idQsEzFbCatbTp2JuwSJJxZ2WW3pMg4o1BQaib2c17n4AfLkKgMqY",
  "key34": "3KsRrbeQHwDRSirU1sqt3FJ3fX3mJzVBeM7XZJKcgzQcZbicQCeDzTJ9uDGu5yZRsZUiHcJMoNDDH8Usnw6mWypq",
  "key35": "3afEGosnB16gkGB3iwXEmr1VeivesiixxMRACRVWnuQEuuabSSCgnDzkzqVC2KR1QQFY6inU8Cnzgygny5yrKgtJ",
  "key36": "3yudRKmJ49PMnsRmZyByv9VT2nDo9qtU83BtxgMyHpn6Gs3C1myU9cRWKHgNkMXNAEsPp6bo8iPdDHVPqWrxtn1W",
  "key37": "5fJZNrpLWxVEYtFSBmCsPFY7EQSDrVAfuSwcUvy2o36omBazpvaf4KNPprCyNvVGmidgm2nNtNgoRqAB2ZwapW77",
  "key38": "63LnGXqWd7WEvBJfYLBswc4hc4qHG9CG8AAkLckySLKWxfUHEJoGgPqNLiNizSdwgoC3qeg2rDL6yz83SbdWw59G",
  "key39": "3Sn6QfrHaFu5CefeiYeirFdVTtUCynxDq1Tt1ahGjonPqDabwtCwmuJfgbGD5txDsyAqaFj1zBt4rpNikp8dqBwp",
  "key40": "2Hk2rA3fWSCzL813sb8bJxLgwd4v9LtYtQfGhcCZFfB9JVTAiCkMvany5wFLdHbNosoZ8N1vwaJRkPqrJ5doeNew",
  "key41": "3iJ8fJABhq8jbGTJBW4gWBctkkdyAgF9d6oYriuqT92dfExQTAxVyBpYm8UR8oTq4JjWZYYvK8nPnvKRrWpiyamK"
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
