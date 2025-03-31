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
    "zTxmb3Rp5t2TwG2bKhCo4U3pEb5sEMZP65cYPHxJMQJiV1LZ7J8KTtqmAQyxqNRvUw6L75sQzj1BVBva9qqGxbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uQK43KXjJGusv7ncmBCfJ9p7QqtpT4q3km3tpXq2ePopMSofBkY3r7A7nxdPGzn75VBnwKBvkkoAaxEujhH8MdW",
  "key1": "4NRWW3ayvW9mUAPPnK4ipnuL8UdmpYgKwxueTmnht4B8yq8jazSnYKMj8FmjfxMvqNMvTBkYeLvtr5hbPStMp2Ze",
  "key2": "3ou2CTCY6tmJwWM3c17pJ8CSp4V3aQSz9J6LTdVS2akNSEPTv2KE1SPwuuWY8MkynPfS4z4c43nnXUHFC1GRYFC3",
  "key3": "3Yd1RkYqGJYidtGfuAxbyjCYPfYQQZKwsniWpB5RMmdigL7jto8C4e2YAsZQ2WWwWjkoED4LJvQDb9RrzKQhh4GQ",
  "key4": "4QdDAzhEMGVEED4YLSGJE85dbPTfJE3THvKjjbqXfsnuDLdEWL7nREEhZ2TeAmmUAqKfUUGYgUQ5jsH1q67bQE9f",
  "key5": "XB6jq7Qvxqa2aakeuLPwKcJR715D23KDjvExcxtnxxEJL2UjHnFqeM3QhGH31LeEUZZ3u5KwwjXgd2iaqynHKv3",
  "key6": "2qQw4xGKyCGGZfrnmCMYnVaBFMkT3ftV94HJHdbQvhgnYfxZzkfQq7pdkxtTEMepx98RUobSYsVjfsga7WfWKRn2",
  "key7": "2PvAMCDbqqxViCyAMc4TmrU9nkyrRzvXmRZi9nF7biwQSwG8zpr6GsPm3XbNeyiMyTfnBeqR8rGy8yYxAMDDXaKV",
  "key8": "29xUYyT83RNkoh3CwxCVYsvdgNAeCHH6EkKC3ZK7JRcmwF78Wf1NCUbeYztQ9zkMYrZmXDUHopz8Py83HJcyvRPC",
  "key9": "66GqvoSfx2pJZxTE9t1BYS1vzjyhYP4n3i24JUTwqQjuR6Huf4z19ZkhcWGFnTso9E2kKn7f5ADbWsPftT6a2Xgc",
  "key10": "3H1kY5v7wD5syAdEJSqbnXW1wAYMAskUkSsvR8HqN6Lo3z99THLVACm6GSyqAHs6jqvSYFSfmtvBmZd2p1oHLL7C",
  "key11": "4Qa4D2mRWV5aP1kfz4j2KKbYMf2DUmRZU4H4q1nRmizJkYhTT93SVrSmWeumkhmf93yhoPxocaTCrrVceegYTf26",
  "key12": "5LcqTumxSeUsuu4ExZhCZegPdLAKoiyQY9ERgckba7MhDqoSpYY3pE9e9VW6zDVbj2hHd7LPpdSFimGpMJRHy7Nj",
  "key13": "2QS5bXhpMQhJvePGV4FmC1kcupMPt3jkZiTWwzKSJnWsBiF2iY4w55F9cGFi3Xkfqjt2S5xBYvJvGcQDDveyr3VR",
  "key14": "2i8RLAXnu81zK4PFZquA7DZgW8ark6r54rPPkF7E1gD6BP9fwxy4Cwu1MoCNoFheBEutuB6xWRtCd737ZDhgqVW6",
  "key15": "5Jvd4q3azVfKwkZgyKnTxYZkpMsTibMzdJ5ahqQ4xcKbETnpAzDaLSvediLjKatyzCL3g3QYeLy8F7GSmj3U5hNb",
  "key16": "5iEk3wr3NMyi2MWWS5rsKUSDd9XaetMxqabnw65cjp4rWhtCpNvFSpviotTfxzV4YJP9Mwji2MPzSNPd8gjS7y7Q",
  "key17": "4ZiJx6Rq7oqhdcJb8MHzQjoRFjYF4Z5bHsrxbTy87zNDckRJUWrKtHnx2vJw1AVcJ2JhjNSXtoW3vehHFaYM5BDz",
  "key18": "53egFQsmMSsvtAQzZxAHrFaehzuDAVZz3XQ1oorc2dfCpeyVNKJNyfaixnUMDH17yVaKqc9f6896uHJDj6Ft3R38",
  "key19": "2A7kMtpjZft1PVvV5QTda64iv1bHR51ph3tyzz5PTRCtXymakxuJHdpPbJBABipJhixujijyYiU9wHA8eabkMwm8",
  "key20": "5y5Zusnn4nABoioQ6rhZ4fQ7uUjEGjwWQ3mBgCfJeyv7k3r7g7Zbbro2Q7aYd2BBNyNiKmxzhcgU5osGvbPPJzMA",
  "key21": "5k7qR1ptzkezfnqZr5ByqbQQnEuqxfmaaHgeeXAToTXpDyeNfDvoQbsdzvAPNPaq742UyWGQwMeRzgercwpW5Kai",
  "key22": "2wdqbNL7efyySSjBWt993nJLGT7vcnrP555DMVbA2j81RHHKiZCzQMF1sBD2V4JPxyfqiQpHEqxaFvk12Zpr7FQ",
  "key23": "3Tc4GMkHpVGmnS7SqqmquffLJB5pb3Rocigi4vn8bHNzgjAYUQX7C78Z46Y6wN9ofHjKvWjfcyetmE6yqF1xWZCi",
  "key24": "2NeXhjZ6MGmTDQPJum2bKUM5ytavFxEFtcMzitYUAiCoJEueMT4ZoRoL2A1URhFF8JVBNQjbLTiwKLkyrWpJ3rUK",
  "key25": "5uL1i3MxHYJRKEyH9esHKEqREBTcnvDpcC3QyWuiJavkkb8UhtjTCSnuKvA1K4H1U9em8N5shYKDtw7SKuSFn1pt",
  "key26": "3R6juqXKdbTAhYdJCGn7vB1E7EcbQGveGtGn7nVVyAeYFicYYcg5bT82cmN6E9vUV4dyfbpvBXVJTRZ64hiVg5pn",
  "key27": "38SS3StaHAGjteF2T58WNzyQsre1benek2g3cSmQ9XD1kU8Qyu56PuFiyA3dBbXoZruQAvAVueUgpKkhTCFBtKqF",
  "key28": "2WUTN3EPArzvBsKyHhFfXKnqos2HTQTvrDknwbfre8aAhV4DrQnp1YapS3SvfmYZWe1gcsJrxAPqFBXsMGqM91yZ",
  "key29": "4kwzo1Hi5v4tTmL47DAfV4CWXRz9SRfoAnvGxqPesdyLobmRjpxBejR73a3N1dHMFMchM3TZs6EnbgJmNr612myG",
  "key30": "4u5YzdGfAS71XuNjDHBf4dNYZ1oCSLUQswGPUff7fHNrtWk5sKx3MiwmuPXpPuyMLcEKMUFMguBw2ZFtwHmMZw99",
  "key31": "5gW9XLVhq52Yqhh37fwqKA2PtbJTkHCEwSnr6zn2YKCPZEvQjegRyKdSL8zWLHFhSf9QsN7v2LhBLXR8FKbQKkuW",
  "key32": "5jBwsGSoqjFP6tG7sMo9dL4nqtqhRNJsLXCXLC3GpPvT3s4at33o34cggbDQ7ZCfWiak2DM4PYTUjHZuyS39MkTk",
  "key33": "9XEv47HepdUrLKgEeLLJoFYxEBGqrutXEg4qwsSddsJrQzg4wmByf2JhM1LBvi9iFgBH5Bc7poxYFQRRBuyYehE",
  "key34": "43dsLUEDFCxycwQNMDsKXcEa6ias7ChFcgdK57xLCRe9rapoizeF4xLLBrVZW1dgi9qhiee4R3MS5Sxs7dEuYtPQ",
  "key35": "3ckrwBL2mCWQ1evpcvTzpURVVQtrFW4qRXQwMzRUxsdQhoxeUGBMX3aC9byW5BnSk8bgnkcZ9wcwW39r2KcoTUyJ",
  "key36": "4DPMaUicjhsdxX7T8nxK3eyVMohcpHGxdAHZEYSAzzrTQmP3LUpwho5fJ5RFjVca97aeJnpwTNc7yVMPmPPznPoV",
  "key37": "2yqsk7kefgCodEhV4LDAi5ivAfdfQXTS9G7cNiVnsJux1tAc642mC68pxNueeSWLQFk6LjTqPQWGGPv2Z7qmWzVq",
  "key38": "5o4K5mKgLXkg2Few6tUBsz7jc8nZ62mTsGXSD8SB59gp5cecLEbYbz2sPRLSoz4trEdHsTuzYKhLcNXUWEzDh8xM",
  "key39": "TnUZTu7ExtEgvkD8UPUNRbmihgaf4wZ2Squw48gMePmsZ8eRTGvxU9F3yCeWhsxXCrvDcifvYYnEkChLPgp9aSD",
  "key40": "4T4bBHPq5pCk3iJMomsBxDWfTHgHF1t37oz8NSwvAZ3YUDpFbyYq9CSxrFYGA2x5eaX4Z4zBMtNyZjYKx8i5rovD",
  "key41": "25td5MrPmJmHK7VnWZo4TpMDJgi9fBofYKUAZaCKfZ7WRshoXEBEHBU64nUKLN2Q7cEEH9jcwHTziogrzDb8GdVX",
  "key42": "32WyDgT9paZ15xTtLGMpD1G5Rxtd2rtk2j32zSdDBXpd1vyBzsci8yWksPeG713tUQ4TY7uooAgYJfPumjBiLGSa",
  "key43": "ZHpTwmbUthd4bPqyxvaKgrLfJ12Ye9hpFZ7gFv18pQ8GRuCGCXjasS5EUhqH12YVo15g81cUC48z3uVcxt5acqJ",
  "key44": "5xMqSSZcC5rycVFWs4tw5Lpxzcrs8WJ37M4kdhwmDtunLcA8b9YUf9si4NXD7Jg9NiFX3o8FNXokK6Bqr6j26CbT"
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
