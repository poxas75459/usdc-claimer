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
    "3xpLqvRXZCAnbRP2uruLbsP5QxRfdcnXc8FHvAcuUCBwAskyuAZWgVDWRmRkVqJg3wtsyRarydvzML9G2wNT81Bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QMaGrxJhYg8eLJeYpj8JbC7sNjie8H8V79NKEzb8SxSHTo9y76pgYZ6Ai6XDEJjFfjsCYJR5AmZ1oPT5aSCTN9F",
  "key1": "4VF283xNqfhCijkoKC1spNxDuRm3vitXqSqumxNqotru6MvaX2YsqeZnPVDRGff9Jd1nmvk1Kf1S9uEeuj4qVm2A",
  "key2": "27XQu7eSdMKS9cXAwGS6hszWr2wdU6WLuS3BR6utGJGJvwziBr1Mh8RxZEakfPzGbrEhgSk56LxYcEoLRTt5tGvo",
  "key3": "4jg8B7WWnHyxxMapGJS46wWkNW1FqyqnzNNMVigroQTwzr1TQKQTXuk3TkUMPpsxQmP6ssFN9dBnRT7mFfHaxnFZ",
  "key4": "5xnkopwqrscyijRiTAHvtuxDrSLTcjoumEGQpYhRnQLYUXPW4qoMCM5KuToPqeUrX2dg8TeAqGPZ3eKb3uMF5TWx",
  "key5": "2veb1NwogNA8MTchR2yqV5L2WaebNWChhY5RaBmeiJHEHyzozAAsBgGJ8FYRXbC1o8D1LvBJx9koDSjRdCYaBsZL",
  "key6": "sibRoyGL8ktKQ4jiLcbLowk8ixsgXLVRUJtLZwCcFL6n8XTUCP4pYhqNSj66HKvA1Xc4WtueMMvsDYpgiApQjV2",
  "key7": "izR4XTzZxBAPrHScd6iuwsU3N2eraQeafHppHPtjtDyAT9UVdphXso8qEpSYHvcFFnkjKZsyTi8Q5BvfmNPvy61",
  "key8": "2k2SgZRm648wkFZAu55x5jciCBD2vyqbucM8pSnaDFqN4joBB7LWyaUKrZxJRm6o4H9N9CDCe8EHqaLfFdmqApes",
  "key9": "3mcxCGuf8xUcLRmGXwJ2jXXxfhSUVX25HXQxgeA5ThsgsAXer8UkqHzPj5k1fPU4mWXC9XDUV2zQrG2MKWR4MTV3",
  "key10": "5MxKVp25vNVQ1VE1Kns1XBrAriBVxpAJwM1JXJ5qZXTJmTEeUosZ8Yu5KpURXafubpVnis2dipoB2M4FYvh4J427",
  "key11": "2uRjLwiM4q2Puebv1qiUN14WkMqactbcxAysSvvkqeyeJRGRXEVxfhPTrQZLP2VT2d1s9nrLxyeFMWTqKQgZQEwr",
  "key12": "5zqnP5mUphbsxHUid2A45SBiye7PyZxA7dLZme2djqyvPcCqLSfe2o4WiFXQMxneUrMRp7D3zApgNFHctviSf3sm",
  "key13": "QArv88Vvmg6j3uAa6WzXzqzAXXPR4kvnmppWbDBKrANsHKbt9csN48YCBtGudJT3qKpHEbE3jta6Epbes81bMFN",
  "key14": "4VaDUXjNRcwRZZYzRTA1Tuq1CdUfk96eEDoscsXNL4zxe5qLjyC8PKYZvGo33EWFctw9RYMtFZoWpXoXJzu4Kd2X",
  "key15": "5JRnYoMic6SxJb3hCXcHPhwPKeq78ZXdujwPUnoC7qRGfP81erqWMWM7V6ZJ8hyoYSdJfvZDbNVemrtWX1gg5ju2",
  "key16": "5FzZX4hWrXnJUaTxndgubMEfqv56gSpFpsT82CRDo3rJcU2ncs6eGiK3x3uH4cWNA56gdpeh7PtdjTxfApNEaoVy",
  "key17": "GkbeKnGb1hXHsCnPAMcDmYvKnLfzPbzVWmsRx25R6qKwiwcmCELwuZbjJafc8eYCoNEHByEvCePrBNQbssEgAN2",
  "key18": "5WcbC5Qs6wqSHELvpEbBhpYViX9TiryzfrnwHcN91j3cB3J2CLk9txwMUXqs38dUZjq5j8A2tVJpB5JTWuxtH6j6",
  "key19": "4JQJ9Ga2HFmRg5EraMVtCjKR5hbvXCAJijvPTg8PscsaYqDorAREqsNTbVCuA39mnW5gLnjRmx1fLma1bBoNhrn2",
  "key20": "4xL5114ydCWWtr69kjx5pJiRin5JBSBgNNNPs8WshyZq1uD4ynEqKMX39C46zHy1EzauNBEozZry3Wx2jQGwsFw",
  "key21": "4bkVYKxw8tkfaEk2pndHJxD32AaaLr6gECLwciYogR5LZDHhds6K86PAeDL7Zyu3sJZabLB9Zeqy95Zvq3F4VRhv",
  "key22": "2urMYQpjVZeGADNsKHyhrKpv4cZjuhw5EVRGSoGvHcrd128o19WEW9iR9uacLbxuk3JBcqwW7jVutjtbrr5j9k4G",
  "key23": "2rE3mrSmLYhDkg5QkqLBE37kFekgpa8wCy7wRxu51p6WXq8ZQvKvGVvY4CTgN7ecsgE9dibaByTVQ1mtL9B6HiKB",
  "key24": "voHB4Dik9H9yAig5vKZkCiX8sHBmCyVRc4rNpSykPanKCbiM7dn5NYJJcWK4Cuq4mf6ZQHReo9HdbpDkDsMEFxs",
  "key25": "2rAqxVJtUWSFikGGcMMEiNgi7XcaBAtgSL7fo7YfMxRofLib6QqE3Ctp7XmXWHLskhcKT9R56RFm8ns9YTg4VLLE",
  "key26": "Mj7PVT8h5vTHboF2Qw1yV7ats7J8SQPydXi5Qp52mvoh4z6rpJXiYK4Sjs3p9TzLFs5u6f8rf7vVxDHh2LRpGEM",
  "key27": "4DZ7d1GhaBzWun8ytafVokAN6SF7LqnhpFhtopA4JpNDwSyypEanRrBFVacD88yHG43tWA3YjgWw6fGGAKYJErbM",
  "key28": "xaySVZv1wmcfucvcrZj1tLtAiifZQTTKsyZyx2RHm3wdw5spyp1fGD2TDMERYNQgST4iS5YuC2nwgjJ8jjMJUhB",
  "key29": "44F47VyWhUErgjDFLQeDLtxUwAJmWNhD8RC4PjhM5ACLuw9baGjMgqsJoBV1MzFEBdNUkHUszRTSYrnwd4oqQVWN",
  "key30": "41ShcqHhsSGxLjeJ84QtSyo1VpqQnfZkmpr56H3uYzwEQg5oeHiZ6AfyznrY6tFhW8wES8rB3rdhEfZco7xTtTQf",
  "key31": "GBrJ7JFxRtzyvxBr5EiTXzhRQK5ttCqyxrNDxGfHtHZjEBytHrUZqpme9vddGuwoWxDCKAF6ZjyzCLMX1keGkSr",
  "key32": "2iJbYRXKtwqbkY28XsAvBsN8xJK5bjxGHmnWsmwrtyiBpEL8bUxBiprKRw5BP3q1ZesWdxwgM2FVD8uMzqNsTGdj",
  "key33": "2r7H9rygivCm56kwfj9AZpW3spovRv47PVbKYoGzbTmaeESpMpwZR8f9F4mFfM3Z8JHdE4xeRG296BNPG9pi2Pqu",
  "key34": "2Z1WB38mUHdanBsF6m4enfcW8tWVjWRr4C4es4StCN2yyX1uww2YYWUf5Y221cdDgHTBnertW5Xb7WQTrnWRUJKr",
  "key35": "GVytubRwgCSRSLPVQoQHiDsSafTN8fdJBaUTkv2y7BNjAgDdCh6ARk87mi3Tj7NQNt6DznyyqYPtif3UCWQA3ZC",
  "key36": "4BkthrBTBG3vcxgptjdSSJCz5kgPEXGWrJEPioffeNLBQAdbPaWnqfdVRLVM8KUsdeu1RRFFL9SaFh79DA3Jz7dG",
  "key37": "57Vct9McNPJKPPaTZuzpQYvszmgaLWShLfbD9DP8H9kVtvwmwCPDeyqM75JrAbYdLaSLNf3URsAKb7JZsEVqoUxr",
  "key38": "2PgD6uWQSH4bXemvHEeRLeR1ExqcQj6GbZ1A9wDGCqY3HUNsLdGbMvNDeCtc65bdiqMuhRUvLfXQznCHxtFEmnuA",
  "key39": "9ZEutWj8XoWQpeAiJJ1dEXW1bxJ5i4PoasU5HW7axw5mEoiJ67J46h78Y1KkoGmcSNCQtG9AMMbR2DqrmUS5tGy",
  "key40": "2ytTyA5btCWNw7y8tpHCLbzd72K7GDGNSZvcDAcAvfGypogQgJ4xZ169FmasZBqkbzvuui3ibTjML7g3qTTWyfar",
  "key41": "3FdjZYrJt9ydCieFJ8kuRtvcYUuP2rmXy4TZrGQaPfhW4vAVC9LXDJJREXdCo6h7H7xFWQJU5wDzpx7HPsaKwzRq",
  "key42": "3gvnrsYxKGJTRzorLGokjNyfKpjeCpX2J6NJyoerfwRHTPatziyUAPn81pixPAZdN9rDnVyNhFB72aURnj9gBVTN",
  "key43": "5YzeK2vG3D4WYytCotzjnQ3ccz6RiHWye6TKmJT8CEpyAb62v9rJYTNSoMQaSeMC5tZgTE1hxSfKgapcyF34FaKj",
  "key44": "3BToKzpM4RrdZ79iM41Uz3kheTULdYrmKZktSm7ELbHWcZpisew2aLB1hQ7gnwp9NBSi4xdPoVoykJDpw1w36j2h",
  "key45": "382K8JAqMQap2dQrYJx1kKDXDCZeCnrFDkhHy2L37PZnFHJujMXoZGsAc42fuTnGRhopvE9aa8Z9gGrTkaYCBvHx",
  "key46": "5MnHJQVCnLtqQ49voEYVyLvrcCa7tCiLrXXVqjmUVKh8yT5yj7HxwHATAP7KttcaLdakmBmFYWTwZdohsqHqsYKz",
  "key47": "4GT28Zj3jZvXAkZ5gQHScEbpQCCcVjjAhM1vMW5B5SyEdPK7r91sDRcuu9UmKWrdn9c1i3g938K1sKSashKXaCwo",
  "key48": "5hXmysTE6dKVbdkPyxwrLMusPVjHXsh1fSanke6rb32xrBrvyqyrV8ALZWCuKN4y6kCFHcKiHGijeBZCbnVJMwWz"
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
