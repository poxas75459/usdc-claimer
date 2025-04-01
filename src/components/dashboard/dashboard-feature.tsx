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
    "4ohuwRbML8Bj5YEbZZCB8JU5AFMU2bpmJ92DLjcQdwazbWPG848ADM2J2CwtjYmMyXxwyX9cVWeeirhcdiHdWHJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2adhPKcusRtwGJF8RkqSd5eZ91NYPbP8vcLKGVvYVSAirYtMxTeEuGKamnCViicaiLFApe9CkNAqUfSaokiDeCbv",
  "key1": "3Y1GkFx1W9M53N4VQTxN1R8LNjYddnTXEVBeWAeb9C7Pnkzj9Q4GZxj4hpxbHtpKFr4goSoxHm7HpDF6snt4xF17",
  "key2": "3YdrQraWuf4a6BCUs7PVcqw8gPp5tB8G38mQnVRZ2rxmC4xivWyi4KyC55d4Q3y2HLF1Fm85NJbz7PjsJoSCA7BM",
  "key3": "3q4zxX4B32cZ6fgLbmPCtkUKxedjHjShiTKHUafv6c3iUuYLFdHoVMn4c7wMvDvvMznGUmTQDur1MbnZfuzMB4eu",
  "key4": "4H4s13PT5gMkJsRHkw5efVBJyvqmTdxs3vL8gai8yHrTMHCDEbnpzMXntpWVatLWa6cg6hYS2nrRyVXGtRQkk9CC",
  "key5": "123NnamHhs4Y7cN1s1T63PsHKvamYQJLWnjwcY3ocNJU7rUunfXKwWLjEZqSwmEcFiYK1TcWWPQKiZM2iqKjkXaX",
  "key6": "3v9GmoBEq8eD1DwDz7kYybXm13Jie5h3bXpUrScbj99DCM9bqe8JPaM4i79sbzrqCjoVd8RvJP4pkLND1dyBwUMb",
  "key7": "4EpTYaCL4FdfcNjA5Da5hyvuvHHBUfmhX79xSkbu4zgdyTznVLoXL6EBR3s2BeU2ax8t2Be314tZ1WRhRpNaWeZY",
  "key8": "2Z9mGaKyJa16aj9iTs96DUv96oXHqhtBnRFgvdQYh9DpYWwWHrmnmSLHeMJ4voCnqTCHe7RTkvfxhmaA8yeoNcZe",
  "key9": "3roLix2dcuc5fTXntC8yPJynjV93pw9ukYjXGz33X42pztDPsaxQS8beH8vNGFkEwKG1WtzPDvwasMzH4BgzJw46",
  "key10": "9FmW6RYJK67ExWjFqar6g57AqASUPWa3jjDyivhcd268ZHJSYvUoTUqyeyeL2N9zkPnjUXnz3DDCB2b9Aw4EWiQ",
  "key11": "dqhHUBmMTbp5CRFe7itSiAVV6mpeaWewV8efDmd935NYWSstdeka9fZD8zcHdMCh7DZWAVaHSUiotKDcjNMj1kd",
  "key12": "3CgKCUxNvawanuwAeRoiAEea2RcHagfW7Z47cqcCdai9MWu1eVhja4GM4tT9eeAUtubCYbLAZJvwaRDLQfPsfio8",
  "key13": "5c4vDzujLkV8s65UWGidJSwviTbHNCmwX6PBrYi4KxNZAuq2juV1KozJAnRiRSoBAeC7umeVmoJHHShj2pSiN1Tx",
  "key14": "4iqdaHncQn9rnMtuy7wUn2BcV9S2VumNeY3hSPWwugreJsi3NsCc7rysieJAAiDYda2ZF6sewusbrRVwNRcB54ES",
  "key15": "UmhhxBrfKCmaczghvxNV3HaeNGUzL9JkxxRQGrgQwGC5ZTiRbnmt8uFxJUmSMjVGdic6iqtR8ru4wWS1tnZKG79",
  "key16": "2DiN8Z4VrYWbAybkjsS5bBjrYzsvKVn7s4wsC2SFvgJyfk2CJEreoApeXkRQZ1ek9Pei8cxBCEBQrqUkfTHiGZUo",
  "key17": "2u6CGC69zgLnYkEf7b3v6BAQNPtFDU6t436NaUtzSFjF5CwGGZByvKGEuQNrMJoAP3NJvXgaxDubR4MEq7yYaCRF",
  "key18": "2wopnMXxbsYWKPbTouqhkfHCEmwypSK5RurwaXoejVqat7uyrEA8hpoB1krfsBdHhMMjQGpHMrzKwwrbVScfx2VV",
  "key19": "2qAm7xEUeNQUGUGModcaXgUW84ziU5Dy55Dn87XcY1dHuVrpp9c9fAAnaR1xpSPZpFTs9qMy4ri8bxpifc7ifsNk",
  "key20": "4kQHC34P8DEyZkbUTDvs8EPu7bGNAYPZay4yXx9VSuWzdeufKVLSPYxSmcVgWUkGWe4HUqwupbZH9o97siTkqckP",
  "key21": "4SrQt82nqGAzoWXYqZmN5jiF1s7RkFv2rJ7fW8vohVP6RvHiFavD3vZgL2T6SDRbPpNj25kpLyVN1t6aSqXUFotY",
  "key22": "3ATpnSuSebpbL5rKcWAFnAbWJ9JuXET1Geo2JKZdqterXQWeuexuQS9s6a2qU2Ko1Qvgr3HvTRxvWCgK2xpKe83o",
  "key23": "2kJtopaZ5TYH2HWR5PK8E2FFsVYGexfg41z5jJEEQX9xkDq9axUYXfWBkAS5pFCyHgZwpxAd9Vu3nLmsEKV29QGd",
  "key24": "4zzp2ojvYVZd4Y4oRdJ4XLnBVDSfh5Lfmw6pk3BgEuBeRSwDtbreTAskkhtsBVbtwY6nbUwNZHRhr1Mh4JKPp1QB",
  "key25": "5TnWyjUvh5n1wUHbFBHn9utfVXei6ZjZEYdjmGwXwDuXEjMGF5XWuDe2AqFHtUwQc9zscbcfRK94hdXnrcK8yn65",
  "key26": "5TfNJ1pV7cvM8BdJ7K8VzNcErramfAXr5WqA8hqKpbU5AnvrnkyweankQrQwWr4Y1DUMDACQUdoshUPYS1Lj9CMR",
  "key27": "2eUt6yZrUEa3YKDvjuurZL6Y8EUQx2BqtA1HhYMrWkhvskAz7rHGwKWgGwm1cQcoHgLy6DjnYCxzbuc3eHnTQqv1",
  "key28": "yL1Kx3qPcJh6LBSaVBV84TTqzhGNFqhcaYxryHFYBcsWTRoKTBhBGhCTZ4eoRfKVfvLnBhTY9JKUYCwqLbdt7pP",
  "key29": "5FByxhSsbfoWbqGCowjmjciFtJdohbXcwNoSxNTCb4EWpGhRQu8DjvBjKBF6BxS8jX6kAeyP7KgNi4tAUrCiU9S",
  "key30": "mHPcsjJgThycFFcVn4aLUppj6F37aguRCXoWzG49efAJDTjz6gupkQ1iJpMthhMnv4VFGRmXKo3EhUMoGwiTKyx",
  "key31": "qWg6wyqoFXA3kJKMNVenmecTnu36zsxDSfjHzXoFGz2EWBK4ZeHyPzMzJNg4v8sM2yuG44zrMGQbZBp37a6f5TF",
  "key32": "3wotVjiqHft5tJxzx8UgPuAVuTVw8Y3NmTfsDd3KPUxUj83UvfviiK8Dw8ZC7zuMx7kTTUKf73xCn6eU41ywr93z",
  "key33": "2n371BqFjfZkXzEBsYvPypVUg2E3tgUSddwR4PQcyoNgsF7sRUGXPoNsxefDBMk8umNHVPer4bM7vhJhaV3p72d1",
  "key34": "53YF7M8oD6xdFf1dKXURiHsQysBrPVr5bKvwNWsMhta175CkVkbXRfqwCCsDK5LJBobV4KKg6MCTpqAh2aHYEq9U",
  "key35": "2pfcT6h5x2BAFgiXFk6JNWmxD41nNDC1EcqrWqDKzifcfvWSUEnibzJ2upDJaHikWgGJUHTHtCWapigsuHzvWAxv",
  "key36": "5tH5YMjV5tpoJqfBXvhroBose53et4RRDDEBLNPGXqHTxmbRhkGbJVvEMF2QS7VjLvv1nMA76NFq5m7hYiDJE1Jj",
  "key37": "41QhHKAkQPdpZCxfE5Pc9CqsTnXA9Btx2NY57Aa6UtTjU1wxGDVackY18VZXDDcPj63HD5RYxy3JaVDT8eBo8ejp",
  "key38": "285Ujtf8jvJxphuiYYefVixWVSRy8bHcfscCS2dDtRivpUdYipMWg3VWH5FArzhyGXaExdJJm6Bjiim483FpqxoN",
  "key39": "38pe2eAGBHjeybiWG94Wqz3DyEVtn1sBWEMsTfFdYW5NvF8XtzfvaVSsaekYy3J2mNtvXZDekpLifkVQxVuwzPrg",
  "key40": "4Uh91SWhBgb1zppQMQBEesESn9TwDdvyjyEBGGoHgx3ESbJohYRdhkFJPvm2iS2skrF8tTootYCJpKikfmhwzf5M"
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
