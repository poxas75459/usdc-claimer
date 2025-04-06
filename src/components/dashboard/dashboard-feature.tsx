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
    "HbbHiPU9apmmJQN5nArznc3fdniULQ1uZD5N9xVVLkpBeQdAcTNYj2GGQYmZehJuRHefp9cZ7QtMucTRbJsT5qV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yLhmr6cPHbiFPCLgiELdez6BLsJi2tpyGi5gG1U3t2yJ3g3qygBmDRmZMmQhfGtFPoJpbWXDqTqD2BjASjJqEj3",
  "key1": "4bbwwrpQ89yqLtn51xndDUhUZpXQD884hkpUSJSxRBnyWp3k4TDzB9RTAc617Mdvm8FFnfwHCouQVGZ6JWdaT5kv",
  "key2": "aJpfUAvYT5QsuAiFKWJRZAVeAP2GEkMJoFwVbcmajcJdc5wULuC8gEGJDZ117HSRFs22fwjw36ZzsYhZuMBiQCD",
  "key3": "3sYXWLnuPG49DUT3TSrbkWYco7bNWMop9xE3auMyy9VUC1jSgK3HSADgiHFpnxfTpqzV2aPWEsr9V8baLbFEYGq7",
  "key4": "52CMnQo2pjaJ1rDVbVfM4atb68zEFi71LoxRr2QMpGM9Bhrq6GTG3kKfAksB8Dme7AEUUWCsXhv2QLGwwom6qwNt",
  "key5": "2oZY5PurfamWX3bFYm9zAckKzDF8E6RoEj1zuq3t3GeVQ3Was5gdQNaBJGSKygQSwRDzrfZ6yxMZcQfsTr9u9Mmq",
  "key6": "2svVkU6EP6tzX7vFaN3MduP4WYHQXaJLWR6zQVC1i2ozdRPtgzFWX988Hk8njbHaAb24xN9yhCZ93bKwtE5JfMJZ",
  "key7": "5t3257nhND9nxvb7knX2HXCHq6Vef1esDTGLs5nsjAnNRxjEMAizbzxegjmEWmUj8QtyCTMsZKyhJYMS2N8wwdDv",
  "key8": "GcZn4A57v3AnvK2CNZhhuMhUZxH1iuXC8dXLZBi6uQ8ThdCBT9xByzWHjT2TnoEMxD5GwBeJ7piBKKSmLHH14m2",
  "key9": "ZcimsA2D8zSFP2Ftub8CXH6dP8s3muZPWXvdzro6jScKkMwopiWG1xPuvWWf5UF73PiXEdz4FWpERGA1xmBi7qX",
  "key10": "2khVSPbsDErNermz4JLuWYJPba73kBo4dsnUz7dJvYqGvCvM6k1VbMJn6XCzM1meBu8F5rc4dhrGVV7rriA3tJaN",
  "key11": "3Vn88eVTqGs4EL1WVPgoHumLPK1oy2ftEkjwQ9bF9uEGF4UZBZ5cxaDt7kFKV2uV9Z9U9otsCuzLDvSvTkpZLF2B",
  "key12": "33VkAfTRyV7r7C6P5A6YBxHKiPij2HSfeRzrADnsSiPPWZ8iW3wVPrUkVpXbKx4zq5MhYwuVC2Yv9Xpt9wq9E4v3",
  "key13": "4MNvAbd4JreoqbX3QTEr91FR4s5MHXZegXxeNrTXJBrYPuCcjVTTdf467Zv2Jya8seZaVgP3wLWcUhV5bZ8rxTUa",
  "key14": "4mxPCehnsg386vZZJBPvJkDKU1K1gxBhkSfCvNtbtDx3qxcNLmxhtvmRWB1iNSRVTzRB8jcaTUtFCV3f3yoP8UGN",
  "key15": "3LQoeD5UDtS5RjJVAkgXC6rnBKuYCgxzf9MMmXvkw4YTDWXyf6eGujHXPuCtUc4DgSEXdHSHrkTgX7BKxzD4E8Zv",
  "key16": "4HVroWrskFZ4eQ7ps9FTaSKD8MRWWj3qFFCmLK1uDQgpPeLny5KmEFneWeAAuH4aJEMBiDepBBuMNB9oZbGoA9Fy",
  "key17": "41LSXgQam5cr6aMGevVtmioP9aRe6q54dHgyQPMrBBMbTRCom4ycKH5ZSgbninRY3qfmLcvZQ63tsBZCv7hgw6hh",
  "key18": "5T52eSRzfWGvedgDyWqTb1mha2VPexZR3Enawqtag1RSTp5k2Bjhak8nsb3SJUBxLAhqoLHJJeLhDigQgc11WHiM",
  "key19": "3pA8qtwEuyk5kz6jFxLT8zGR34vwwK9H55HdY8HkN93QRpvvzxiqe79sd4QcN8fLiCsiUyKekZppWGyv7vCKdCbd",
  "key20": "5mqV9zpgG7LsLhGtkudYG374DuQnC1Ncjq8qRtBg9VsDLbGvRkUVhyJobkL6xHVNpfJg5UaTEnjcJjPi6evDmcoz",
  "key21": "3N5bLUPDUAD3dcJfjCV9bwj7nNnToChfddbPfV3owoWbJLj35yiz22rJxaoGWVTYDAiJ9efHfLVV95GsxdHXVqep",
  "key22": "5GuMguvS22o3t6h9JDuSGxpg3kyGYePAMDZLkd9e4sRP6nX7DVJEPgnSfvLcXhwwGRHPw6yftRX92Uo3ZiEHcTpG",
  "key23": "3HfCGyKczCsBHWY8eUD7rndsFNiTyWmaBxXWd5ydSC343GztWcw5hPMYgjdsyrvngLqUfefjC3U8wzjLExmEMuFU",
  "key24": "3pnooXZbDPsEZxRk4WryMrTdPyKt23qNSTzmgA7fWeWeBx3CR9KyRXWxydWF633x9TkMpd9dp9dTY2AvwsWdLV6Z",
  "key25": "2tVKXtsPomXprXvUxXAKJKtKpv2peRGhA9q2WoJHnKSxbLZgJKrfVzKXR4N6uN6m8c578eYLYg5PPM9h1UsTvZcr",
  "key26": "3E8mvVdTc8LXCVjQuFsBwkwrGVfJgi11QW5VKiLWpbaHwb1inFFtRwJD7okcfzcedNYnCgFYSiRdkGUdZNtEwfab",
  "key27": "QL9Uxkghb24StAjXargb6dS1BHwUfe1xnAXK3FKPGPSbY47P6hqGrXPTAWEAHYKBCoHSR7dY5oeXqfY27Z7udQE",
  "key28": "2TKEYQsSzjk4KBHWCwQqCkJqb8Cmy1DajAMfn6rxjgpRPxEo5kWSRtKPgJrksyAVw4wBT6m51JAGipWGdijU6jBP",
  "key29": "5ZWjwvZZsVRDKijjrcQ35sGSSi12LxYrknvLxL23DoQu7cN4CQjn15Jhndc54p7ARdWnpMBTMN4tGD13Cz44y3Vv",
  "key30": "5MiWbHuionRBAU5VwNfXbqBi4b4456whg4KRHNW4M61Lr1GQ92Nm8JMJsq8DiAwXeJALB2ZmnQS9UcUwBtM2qeb1",
  "key31": "5NJt2YXXX5739qkfWXyEJui2HH8DkpWz7LFvZA4FBKEMXcqJ5MstdotPnLFLXJFj6poWYyfmhYMBxAHCqoXitgo9",
  "key32": "57pGUoXeQBW1SuQTuCMW6SuG12f9vkChbXtRUZVP1WAnevFt9XWvtUVesiLUGCgVAfpWyuhna4uXZwNEyRdaLxvX",
  "key33": "5reZopmwscJPRL1suwpxwSwAFt9dXJLqtrz1VEvJfb8vbr93PKqf9iabJNLDEQmGSG3Wvc2Y9mKi2qfMFj9itamz",
  "key34": "3mgmwmm438pPdekfKJMjuh42cguj6auV9DbUC7iH5H3iYxShsMwAMeTfQbddw3HoVeJYJTztB8Cc31aHjqH8TmUQ",
  "key35": "EzRnhgAmncjrW7K3qQnHZMasZSsNbgHysZQDHypBCN2rPpinfqLA2mDHXy2PjujCKiLMyDenbEhn3BtW719Zi3G",
  "key36": "2xNswk1qWEcoaTHeTVCQNifYb11YmCHv8ts7hzMnpGJxP8WNCEFSsfZn3qkCK48GG1g6auyAxC7BrdxynYCxQGvk",
  "key37": "2txwQiJASo8hB9NrhLAhgHkBqd8KFkWXzRDbhdVt1i8zpHzFvunotr74SaGx8PuzuCjt54fdnUQJkzb2imBjVWpG"
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
