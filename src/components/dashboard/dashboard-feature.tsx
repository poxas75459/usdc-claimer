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
    "2WedjN4yGvH7arEE3NMWQvDwVV1Sy7Hu8cJ4UUQjYoNnBSMRGpQqBA2Z3QdXakjAyXXLtXs8LLKp48YbifvTrZ2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XBJXmZBKAKxugmtATS5ifgM7k2fFMFUKrwp9g8TH7JwciJw8bv7LrZsCZ5ZQ3mnpFcMkT7fuj4cXmLM118j2Btp",
  "key1": "fFh641BF3nWsGaeAb8GLEuLaL8GEMwhvsuaM2PBedq6At7DveU5DTSTSxfwMqbUZKPn3kEUm9Vi5KzS1ACa3dww",
  "key2": "51kSw8xyDARJpACfqt1KPVJQ5rT5V5GzasGmSigyhE5QZry6sdptEkzJA8RWuu6gZPzjRJeQSbdU3spXVJYY1B9J",
  "key3": "4nvjK2M3JKNKepAjPadSrxYyEsUrZmPgGwiJaLkHCwmdRfXHh5T3kQ6cgUFSZ6a44jQ5PTWKohnzVh8WWpv9FVfp",
  "key4": "4raGVy9f9GnsFTnzws2Fg9QsXTU5fdGsXRKWtedoGRMG5wnqsafX35jWMowwheJrkb1PiyFqDKGNGrpetrN3UDB",
  "key5": "2VTDK6cFayLuNGN3bRe3sXMPsnyghtFBq5Y6N3btkNWEGsJNLxWbj5Lm8tFNnj893RYPfE3XjJ3ttnNs91CcSuTN",
  "key6": "4hCMrH3djFXU8Y2QE6J3zZaLRgNauyhjH7YkBHHpbQVe2W7JGoVtcrpiWZh7gr6YCb8KWVgx8d9Bfif3DJzV9mT2",
  "key7": "5EvB7DhW1uZvKWYu1FGXhTdeCxfYwmQyTL7oSkwwBtpBhLumPqi9wQhzQwtx7bWuexFJ23XjtBw2w7fhGSBWxMdF",
  "key8": "38XdRvTVBhF6ujRYDw3yrW7j8spq5yy7t3DrxTzNTZJbEYE9ns4m7CLpDFXwzcaNJgVhnHwNVQTxWoDoYMeMfFR3",
  "key9": "4sVpL8e8j1neBtLpKutmYzRN8dQWUbLi9s7Da1HuKg3KvJ9x6mSWLML8L5THYSF5oR7TC4gdm16tcWx1Hu57umGX",
  "key10": "4SdWXaLi83B7dPDZithoN7mFSM1N9ChcbgEnhHPNEyRiyqBDmvAAe1oWu6m9cp8pC6fKEZEQm6qD3XeXGDxGpxzw",
  "key11": "3q7NiVATwbksgzoEhNSr33FRxjkBcMbAjtQNM3kw3NCwkVPRNJ7F8fD1hK64n5FfP6nokPDKnR3Dzh3SwErUA3ZQ",
  "key12": "26SeRxWXYPAq1Sddndrm2qnzXkUK6rghKMLG8Prpw3SxH9dhx5VrBNKdZFmEcuSJbHGUwA4mAdmtbizYgSZ9WZTq",
  "key13": "5bsE2GprKUFgjZzTiqbF9EJL3xtmZS3NAjGenAbky81nM51JvF2gGBrcWBPdoH6VGxbwXz7d5SHsk7216hgoipzk",
  "key14": "5YSZTDedwdpU9tdyK7SPVjDgcfyyVQCBdHAa9wJqfUC9gPBxuxfVYe3nNZySi8Ys7ooT2Yo9LZWLHRzkBC6RW81U",
  "key15": "273JcCNUh8xQN2iiw8SKjnhdGCbW5LfAJHq3vzBrLWGbJtQ3EBfHzb7uozzzaj5XujbD3KfyHt2y9aF1kh1wjeFM",
  "key16": "4o9FhSVdpWjEKnDHTp2bcT4pQHusYR7JF5Lnid1F4kLETdimf1hZRUKAoki8whFCfoxaw42TCuTRSgZuz68q2i4P",
  "key17": "374EzWktHSyLDbpSBBHAChcK3CR3z1spsdozM2fgfNWTqCJ8SjRUY3M5h1n2QvSVPbJW86XDXujgRHtaBijTB6Mp",
  "key18": "4ipkLzFX4Y2aQFnhwcf7Jy1JfQ9YUF78fey5kcJRK2mAiZFLzFYVAv1qU9yxkwojDuwGzHGz55daKwTJpXL2tDp3",
  "key19": "3cxdDCnUu2KyZHKwgthKJ2mLtvP6jUzBSk7g3bnNxbpM1DW34RzB6uCy7TCU6L8rnWhEG5i163o2cb9hRi8EbKfQ",
  "key20": "2xsiVhg12Vg364b2BhVNHP9da63xDTzdshKCvcL62MZPH3rTD9cHR79SUHbGwuZZW3AMDTucDFDeCaSJbJ8if4BT",
  "key21": "W3Mo5W7kyxvYFn3Yq2LzNWaABHmLhiGphihZhU3vgKhSzmix9T2gPCeYufQKtrstq5iHgzu7WpLhNxTfdos9MoF",
  "key22": "4yXSfNDwZ9SqAiD9yZinTyX2Km7y7brG3Q1avq18biPmtVMAvzRfAiptwQgpZH63CtCZjbVXeYrCtydYv1W6dGXN",
  "key23": "5NNoJTv1KRKu5Ru1MuQKP4iSZFeA4yPmvSspydhhZ274EJxMKMJ9hLmuZwhQZM53g1fUGtRbSZQ6qnzyE8mxR7vQ",
  "key24": "3LvMYyuMQzzsW4cSJHAHuQE3bUiHigx7bP8zNDwe9ch729CS23ZCiNZbJKddyosARbiTkCcg47JZ8rGuxDr8NBas",
  "key25": "3vuubqcNinZBYQzPnqEWL4ym956V3u2YxmWGKgtYD5gWgrE2zBHpDDYJYn1Tp3Qpv6gDfpyVdenYgatHUgpjonTx",
  "key26": "5sWD5DPyX21HUx4Pb21bJ2Y6iw73XrAFraCnptCow51QSmbvJY4AYvMWoAndzo9xDpq9e1WzT3znDVdHsZeJg1k5",
  "key27": "5VLEZVkGiz9wuusRjSU27e5Ci3SzDTSWpfJKppTTNMj5TpHgg7bnHiaB6vFtZaM3sVPHaJxRT7JDy9Eb54u7uAFT",
  "key28": "24PMX9F35DFfFa8Ja1v9QgyQS7oMRqZ2aeEcfogE2kySg7rtNxiAC6ysZdc7bHWT9iECfXR3jiKVEbqjkbGvTR2w",
  "key29": "4ohTf7ZCVDNb9npVWVxEFBwvSyPFmL6rGXwGK1aq8cAnPc4EFzuZf27giEnocAfb9kqHRKdJowxg3roSnsykac9J",
  "key30": "NaoZkuoZpdDubzNrHoNxM7AVFi214VWCTxYTXATkwYSoPk9PHfJ3qGkFYB4GrD5ZVmefLKB7Ug5YsWyTwRp5bAu",
  "key31": "3u125sHXBhnHx4cf3xtWbQMXYsvhsA3GNk1Y53kE7kcHdt8qAfpKTC7WvkkCixdRhLpRF3CDNhfKMFTSy9EttrRP",
  "key32": "JuraNNiwyuWYa12EHVw21CtNhrjMEU865m9kbb6Ud92WTqnYXMeNzmS6fZJbUfhFZvczg1T8y8FN8EJEmr2Y2JE",
  "key33": "4iCdqsLK8qWdpMkpr5ZGrNaeN7Z7PUfroHFEXvaVHZaDvE66KojKfDNRx7gYj6xQ3sQUTG93J4RCGFEERg56jct7",
  "key34": "FHeac6iZk4SYSqB1XgQGjd7bwtjVGVPaTgA6VvenyyAtFNT9kWTTo5SG5x8FJheTS5ZZ3wAGUeQNQoeD6Rr58YP",
  "key35": "UTr3E8oa3Mudjh2bzfJcSBwzQTKGzrqdrmMRyKwG1CqcUpbdDqcpqVQhuSxU5UeuTVXaZswFQLrVoMBuZTTp15Q",
  "key36": "2MqcLp6HZptczBzqGYWKgbAVgScuJkWCH98QhRtEuvHyGRuR3zdXRWVBmYHsKzokq3uhetGoxz8uhDSpG3bxj5hX",
  "key37": "yBhfWDcErK5t3Pqvvub9bwMEH36Rtv7cHbqU7a5ZhxiyA9Ao6xHwG1XP9WcmwXu9QyygNuPLzEkNAawctPuKYsB",
  "key38": "5HvJQ7qtdZdboXuN3aYhRjRtNxi4qmB83NiCfkMba9y8ciXous63Y43DjXq8ysVHu4z5akhE4mLtvewqvR4Evd6D",
  "key39": "37UAL8HRgpxpBtfsY5PRWQjudQQTtmoBewRSZGx7FNfsd5pojQLhFMpdeAbiJh7hk7h72jpXngxFXZHvfZdGj3Av",
  "key40": "2roYDHbxFzXLGUYgu8bJNkpABLZK8v8nY1WtsSES8f2mSJHz9kqEvtdS8zDKeGoDXWRd4QyndX2wZU3H3D5Sk6au",
  "key41": "2VSB1qqVmsPbPfmR6E2X8fdW7vdGP4HKvqkWEwHZ1dm9z1vQYAYobow2S1nku6caF27PPUSqKRT8ZpYpBYpN6UtA",
  "key42": "2jop44HYHLcbNKeqXH7NCHy4Rofn3NZeZswku9j6SbHxf7wVqGF3NdaewiYuC9J3LJCq5gCqHjHkvGfP8bp1uwhT",
  "key43": "7hMQuaRMeSwU5WR1DfwRhjDsWrZ2Lqx9xsssyF4TxbFYV7m2D7YkkR1LfEnhQsCSxqaEpyEQwnwgwz4JrQmmDE3",
  "key44": "3t71WCqLQ22mEj1oVoPkxwWpLyNnArE7A8N6iFbxtAsBiJQ6Ry7dKGeKZtEmfPEFbsDzcEARkqEVoeenwEhVmqqz",
  "key45": "4uKH4RUiEDzcac8w2NWxypVUhmYoJFnniuCMXgbdJ5RebjWTHsTnPbwkAbEv3KoFzz6eTi3ni9kuFUaCWuUxqZnY",
  "key46": "xgDwuX78Geyf3ePJYULHkZxzo49G7rY81UPKbkFSCKqpJoo5VKaZtwKZLtnSczZbvNny2mzib2FpSpTKqHLi9Xi",
  "key47": "25GKetktTnw2zs5aeSCGwwhNGASBHamh9oCKWkkLK4bfEY8qaJLjgBFd7de3u69bPJtiNBnPf8Dn46uw9XkfsvTK"
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
