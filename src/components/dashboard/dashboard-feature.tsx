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
    "3SXFggEV1ZsNJdFfdRrX22TGqJ67RJGtC1Zfke8BoHTBQnKEtKkRtXr6vzUEvs5TAVteYy5X8zNH6AtGynhYafTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uBEY96ZPL6rC4JJwFQSaaZfGHdkjFMf8V2gYJzCP3CwRj5ETwoWcFFJ3Tj83yrhjupRmqkre24emSwjsgwu4NsF",
  "key1": "5EVyTLDA867443yaiRh9JUmwJkcVk65rqFAVvk9a3D695DehHw1WT7uPQs2pM5gwNYBbAxUs8jN7KY1ejgs5q2o2",
  "key2": "2ZbPfKGgZ4K4uEdHpnttYhhbx7tLXgF37w5VfZ2piUSv2MHsRR3TKFFCAFKUjJGhyFCCHABpvSm1xUG3SWeMkhw1",
  "key3": "5D812CgZKv6thdc1ibTqLi9FWrP4xj2gp97jH5iLK14i9mT4FY5rB4gqzJH6ydGbbDARMbFd9vUMfVXTCNYcfx2R",
  "key4": "3PBhfCyqZR9yZVdt5Tn3VmRLwMs8YKTNR6GpSXAnpcDSHcBksmZkPmwy2a4TFA9NFcPxQ56G66sSWDkYMxBdbZfE",
  "key5": "KihCJdBT5BGKR9WJiW8KYWhekdv7cvnzqXj5XddzYmH17Sbir18ABNoRCTofvPijfnLZ7rkHMNVKstkwz3XHgmi",
  "key6": "4UGmLBhcjMVZsmnANxZP3LjoX7ivZ72g9vMt4bPsUJmALsi4FnEwErNzdz8Fk7iyhg3cTp7L1hakSe9oxgyBUjSH",
  "key7": "4W2GZrs78JnbKBQCTMfoqYuqTyuzmZQwph8w1hqcpBWKsNuwByqjdMco6amfbzDjqmJS2zd4MDG1gFVxMJCziDGF",
  "key8": "4Bywe5MU5VA7h1xC5U13kt2qWEowWU7r9JFCkxdve4oURCQVEWcM9DfcCFWPHTPReyWFtwkLMvbuad8jfV3oxZ2r",
  "key9": "523Rsntw8zGac1SfC2hnwAaJUuZta1zKvB5x6JVHLAn3e5s25vriixs8KP1kZuHw4zQvVHDezHaioxc3dwyJmuuo",
  "key10": "o5EQkfAdrmDcc8FhmiyDk9Ymon9gjLsWr5J6GTL9FMXGAE9tAzW5qo9onG8niLQ4tA13RahR62EJzhkphovsCxe",
  "key11": "4qscwyiC5vnjdD8pWPANTbpSMERz598SAmGYrn2mg72V9UhCj52jHw9wpBzEN8BQ3CwXNQ6jSXXTRTyRAYYh7hv3",
  "key12": "5fjE7qTgLeRfh1EtrUBpcmmcFexaatMz5Q7cJW9zSZCQaawNYcSQDXnb2yJrfqXhjDDAStefRX6fq1o9726AgrtJ",
  "key13": "nhQm6JYWvRvqqoU4MgJTJne3XCmQm1hEfiyuYvt1D4TT7U6YRzPv6VRxtuFw3VEj1KPFDUo7oWtHLmFfhGVsuQH",
  "key14": "3nNRwgYAxBCwF7pmk6uehyKoWT9PnNukd2JaUH6n7fNgGZsxumZA3t2toodcr6nMjE7mSRiPtGLBNFeZSL2VL9b6",
  "key15": "2gXdbGoCrwGmzyHqoJc1tePEnnqqM4miBtrPxTjVRaRkTryYE2NqQZrnReG4BWEUmSgGVzmnCRfL9HC66u8heWG8",
  "key16": "36BMfX7Vk7pnhXTaZCE8cRySTN4HZaVDGEeusfBtopA9ZCjHg3qhtBvtp6DaphiW92F7wzqBrTxNiFoDwH44iGUt",
  "key17": "5A8mAvRJpaXhH7GpVsFYJRsZKj8tRfPDLnQLin67VwxR5mphxGQYwPqFN8w59m2x4SoxthQJw8KaF8jgc5rU6wkK",
  "key18": "6vEFKcyMaG4NjrN5uqyAz5BBe9KUwipxkhQhye3VhgDm2ZjcjDugCnSTUMhn1eXwUovPH8VXHVspZvqf8mYpxwB",
  "key19": "4iinM3th9LvXnpm9doYhvJaW4rdmi76u7gn26mBgqMMU4GQGYdQs6qttUWBnJjq1VQMbrdRh3L2oaMZtRCQZh3Lk",
  "key20": "579SnSqwdpzagusYtCyMN9LzGcgkZUFpPTC3RCP1WK4FbVdhXbnMsFKzTmkKdkvJiz3zT6PmpsGbpxo5GGH3bUF5",
  "key21": "263GV7bVnqFiMbthTgE2cCpos5C6VVf6JcsZyvRAfrsNuCksHqfcACc3JnoPN7HmaJ3v1SdEwmxqUQUo8CBLimyf",
  "key22": "49wtVsaaqPnmWB5XmbekH82Q8m8meGLeAc2DvXmsSbogEnvVpK7Q9142QAn9UssEuVewZwcv9tBCVSDT2144zwuo",
  "key23": "JaDkywLn4e6MmDHzY7cYyBSD8suesMg1S6PYY2rCL468dEBQVmKEd9Dn81XdmZCeHkhkADYH2pNX1CXzyJ8fxTv",
  "key24": "EqRTdAc7SjPLuj4LKXYH3HpmSbcMmvxtwutuNmitWUT9WsAibbJ1gndupeLEsmTic5SDN6rNtp91Lt5LyA4cZkT",
  "key25": "4iLBNuC4JwAdd2BDz9MTrN8H8fDwEjagrtHyj7gnnbgqxzNhDYZfgkVecyVV3Jk8BN5NiYp9vWSKH2NYQABpQ57k",
  "key26": "5YeKFZ9prccor1NUqoApbZgCE9bNnNCRt622NFhy8oqPDfmG3UzZ17rD8HZtiuEvcXsFxmd8jWTodhuYd8W3WgrU",
  "key27": "2STxmTneSJJrCzikcrjCj9JXA4CMxJVgDFs7fu5Gx9Wh7ofueShEeAQz4LCUWHVzVSAN4YBdH3PGLePgirwLbX77",
  "key28": "D4orcqJYCpV76HxVuQSBxcKajM5qQ44wXqtdSEps5f9y9gq3cAB2zf4TtLt4S7SBUvLR1pKsHA3BFNRv4vQxs8B",
  "key29": "2qVLJTfq8ykbEMtWQqS9hN3g21aanDYetWohDZ3kkoxBfpauXGnsxAYCe7AACUiubQAxDKtxU4R21zg5u94jdnzV",
  "key30": "GUmyj72bGtPMzVmfcQfAkZXCP2BMeAWuE9J27W4iKXXKvRG7GTLaZXu7vVxVyxUfdYt81XCU1fVP3AAy9VFXkBY",
  "key31": "m6SUUG3ZzJZtRvWUjJLwmfv8wC7Gxr8ZNaYgGgtb9tfiJdUgwU5tX3CoRfjYtzPn62jGrHmG7sm8JYCWWMRmJSv",
  "key32": "4JaPyZ4yderp66PhqwoTRSKVVycHq8NBnLmSSj7dhSeUwAjp1TdXLcdquM13HZT5ygNSuTonV8jxa5PXEtYZjqt",
  "key33": "5MMgXXVNp9HnQ45RuzVg6MSKz8AkJc1P45bWATVQydgS6PFq9tovDeLFJxNmRZK12YnMGjoVd2sQB9tj7x5Eq6xK",
  "key34": "3xUc8YsGzRc8jzD2NZGpJvU1evXVBMwEoWKqVLZnKK4SXv21Ep8z8KxfPsuPnCoGogkUbTBTMJaGw9Z4f3Ehf8vz",
  "key35": "3wq1aEdUHbdZbcZa2YZLTkwz1xvuPN4RYcrLVyRyeVa1CibPvVKRWmsTzBQAYiSkvzmtA2KaDLCPb2Uvztg9qotn",
  "key36": "2y3t4R22ScC8246wK6xSSQQLTdRbXDyUqJjZ3bx4qYWqwPmN9VSPkQtuSKhhxApjsLWdPhirE2XNpHtMUsgVN679",
  "key37": "46oUs5Rj63FhfRv7fpweG1HD7AYjK1XJpp1dDttu1k1yCgUnwQtgqAc7rMtoQYv5hAgGZXU5SqkWJ1b2Wg3a7Hok",
  "key38": "53LmgQFUd2rdKpBrUfVsg5erxfR7y4DuTh9dEhnkp2kJE7WszdFkdkRDqDZYu4rsiJc29caP1gc3w5xN3XWXnBZ6",
  "key39": "4hdxN4cCuPA6cWFhU8bPkhSyzwF55TkPLWX9wdbYazgiT1iqjaboLrHQFgjDaFzL3GnrigNs2LGxNTUeJAER7JkK",
  "key40": "61szrTobUAsQsfmh3yoXoMCpUfjdZ9ZFzVLbquFxAFgDPfEK3f4RoWHUaApyv9pCBbxkRsmbC6PUGungQamcMSAH"
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
