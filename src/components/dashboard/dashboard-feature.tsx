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
    "29ym5JPL55Y9C1esCUcWy7zLCTuFWa7mgmV7zPtL9DqKBj3KRANcrz9fSmvspPb6chKRPzoGwch6HQVaLus7xKor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z5wFoh29ZjVPLQ6NQ2SNKvxobzHu2Ymj9Mv9mMrQUbqpKawFqxBJzkK9Di84Qz8G2CQAvNWLrBC2iCjCgtdBiQb",
  "key1": "41HdpF6pv93YDoksqiiBjYkqi8Lipn1d3Lb9xtUhV3R896gvSZL5ng75D4AjaSndEvgnvaXM3CLFqkdR2nxWYxWT",
  "key2": "4r6DvrTuF9qHWQvKGBzU6QojHB9WKAhhM9Y47DvCfAVs7cn1bsqbKr4DKtnhBfw1WK6dBn1KXqWcTmnxLgwofAs3",
  "key3": "5pRfndKVUr1T2HLG7M1ezoH9XNueCjmvA8zF3fLpeoCoSy5FFBqgn4X9xkKq7gge6aX6cENN4BZ7GAMRT1ZCgx2m",
  "key4": "DmJuF45sJz1M4XX9wfPxbv7AfoddkBLqHttBkmSRXWCtTWd68WM9SzA4Pcbtxn9LWUJamdxz7PR5VVooV4egDTV",
  "key5": "4hottvRHGBJCCrNkFRVFvW3AQVGQ6BbiAbSqyAKfKT5YcSB63o4ZxzCSh64DM5J2fBBG1516rHkWbCPu1WgNJGct",
  "key6": "4ZM7wkw8PPEvqJ3BJTK5o6QD5E2Hq2kkCCL2GrreDaKLQaGbDNwg2CwhRGBdzCzr26hmFRu68Ht1ART1fzBDxYq8",
  "key7": "3CXW2iLZUKfksqN7hGq9dnbEMgTU2S7gvn7QAqcTGDEyF3uYvwho1bQMs4TmptbzLnkit6Yw9EUsJdztPMG3ZT5q",
  "key8": "2NBnE5tG1VKHmiw6b5WUkbnRZKpSCuNYfvqZVgJtHSyy2U2r5PGRCsntWUdtU8S2qJ4umywbUriEoAHswD2iAdHF",
  "key9": "3s6rKi7RF8NqbMjwcN6wCewc1agrLw4TpM6jFRBsFtgZPHTC393EeErduHNvDtr9C4sbc156wHM3dEZLAvJpCRCi",
  "key10": "4GgMnECYhqNe6B6Hkupa6ggLj5iorKTEms8QXTpTEcJibE4uKazwSWMqgeDkWy16RQGssRwFek3WX83PvDgbagUo",
  "key11": "33UthG9huYHLWadQBSHuUXRvM2NJBNNVTAD5UbQom6xqTxHSPQHMGBqwXBuAAYMUmpFT8QWLs3uik11eohDBrRjU",
  "key12": "4zMMBCtajWAeMzM16nnSAQmQbuxrTN6ZdvUee1TXkqAVAgFnhr9E2gnH2uXC3XgYB11cBJULtPLC3KZsQt5EuBC9",
  "key13": "2WvCJeaPkJsXtVeoTy9uM2NhBrSceg9LER85zxy5425p7Nw77eBSy1Cw5qtMSrAT8Zw9pbvzq8BQAmt6fUVZ3An5",
  "key14": "4BETNtwhsTDKef3PcWFY36hG4YYVvHaU9XCWp6CftAZRfxEKf7MmuctJj7DvSuCx7Cb6bYjA7WSofEJeLSd88Sac",
  "key15": "4gxcvSJ1BiGsK1KtcPQsdr6uQ26WD9ifULTaamewQ2f9SsqXS7FRcGccYbevaAxw76dankTUL5SfX4Ytb2RpDgbZ",
  "key16": "4pekB2TiTWaSTMC5b5GYP1jXQfyB1AKPPjvzVUGYkhHaji97BhEii3Zud3sAgvTqyUQLcZKy7Zqgj38pZ3V31et3",
  "key17": "AKqfh8btb9ZGMTdq2xQn4232KqkiAorggor4GwFYs5RPVv2L8sTYtN2uXngKaCxvL7AL5HvkEiB15pJ5NjRLvmJ",
  "key18": "52RWkgTtsvdt6TWApWdnqaMcixXkWUk5MZC9cmtAo9BVKGcmkYY9Yx1av1GTgbBLFaFGi4LzaELtzfw2kJfm7kdA",
  "key19": "U6yc2hsEfsJGgjo5foDHLRQLxxkoqF5XeFQvieC3zCAdfGstB3fP9N9xWw2xoPLVBkHya58mqzmkzESJCtyFWMH",
  "key20": "24xQjNg9S638cshpHviHU7YtUqYJwWtaDjgYKBXyeqFuWpF6NmpAHTdBxyfyF8jmWTbGh3dg2WqQPKtZKvKhiuGx",
  "key21": "2KYKwwMXBREmbS21ehAdrrLRRKqaZzGSk7zLwisuqCJow96z93AtwQ4upJazHMPrpXLCq5qkgNepXVobSPRiS5hZ",
  "key22": "3jj9wNtq7hVRGZTmBuiznG3FaxdKRMeFSJTYMLqvq6wDww3VaX8J6DatPqhA8SUtJ76xkT2dkCLt5pg4yPPSvK1p",
  "key23": "hivyRjCbZaxZm1CrUnTdgeqtmQWWADjpa1yvbYAPHVrZQJZYTMpQNsSa365FN6WjpfdWXnatAUEAjxn4waapsCs",
  "key24": "4aVc5PSXjUjL1fQabT4BQnpfyCByzWXKEEH4kuMmbsM5ATkPATsn2woFf2MrWRPyy6z97BkNbJC8Z99bTNEGHFtt",
  "key25": "P7bZH2cRW6ap8qesjnquUUitRvBfEGtHABtUnyP2gss5FsGEyBwYE91CwMwPbQDCy7mVn2fzEDMswvXAxR57myu",
  "key26": "zF9WULJpHFF66w1GCxywQ3TtNdS2GhKvG5SYekiSdHswhuLW36cMknCtruCsepccyiuNbK3BuPFhKvuppnkmZPU",
  "key27": "4JpzGbPt2gScvq7YxpGiAEw1gp4nqgcsQdtDNc72uk2yjPkrfgm6aDwoPWohnTkutNyhgjs3YfRVyfyUXiV9NRQ3",
  "key28": "2kvVV7Vy4x34AhXcret2bQu1P6tSRDKbzJjSYHfMnUwUunMQWxSvLP9d5w1Lv4r5NvuZftwZ1YmP9azcgTmHuRXV",
  "key29": "tQR4fydqiFHtUgeiAvRqTeZrdtdPSrck9DmBr6TAEcQ85FtZd8CCQqg5piog8bUheueDxPSTmihRGpAR3mKjRUb",
  "key30": "YSoUNu5k4kv7bpN148zHxzzhy6nytgmpWysryorLujvMwC9qmnByZVu97HPt9YzmA4oVY26ympxpzGLdFmWGaWg",
  "key31": "5xAd5Z3iSN4F6dpMai117osq8mcxzvv1FnH7kwHwQW7i1QasZgTpoKK9vevvw2jfLu6LEtAMfmqPnwqNPSSkBLo9",
  "key32": "5WoZX3tA1ms7BZ91tM4oKjV7uJxBeLctp28ibuXhPSUaZCasrfgq6GEWWxeuEqtXB3NHB4r7Edci1LekidNjdMqz",
  "key33": "27gqTu4BMVbfPffcxpro2nsmSBiafnBPLUnWZ12HEzhpoHKBtCSvLT9gFnZ2T5j9LbTGNm5tSd6DagzCJwrK3vdZ",
  "key34": "29PbtUbHcTe2MsujeN8JAc8ZfrekKMRsWyxxAiCA1R2K5JnC6K29sF1yaPJAzuGcuk48Us4JtoHEynNhTKFHHSE7",
  "key35": "2hsdfmUtryDg6Z7rowWrE1vTruJHHwb23Lg4MH9CgSsUvQc6VGj2rzaBVaGdxDVqM35Y3k48cPoQ4ZFH8toFQ9Ng",
  "key36": "2jEKnjiAgttzmS5rRNhWcwT8xeZm2hxJXFvrv7qYAnTjdYmjiHrMD4abQ2UjkQh6xPM22QnoAduZhUs3F2miUF84",
  "key37": "3JXVNg7qeEDKpVcKfc6uUvQEDjGcxbv5xrqDGDHr4ss3mwxACoY7U23y1sAAntKjHgW2yUh4Jnwa2Aabrh49gqMh",
  "key38": "5BxhCdx4KgbDrCnyvDkr5KcQSLCYBgriPi2468NrganWagMX5jNbsURCVK2LwiGkhwipFdFp5ckpKhDhUNacxcCs"
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
