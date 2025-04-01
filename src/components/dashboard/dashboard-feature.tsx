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
    "3JsmCYtGHUj2S9KLbRm8AzRZcBWYgSZUSFyLpJeYyR6qX6dyfB4jEoQGrVuvaB7nvMex5og1BSpj97MpDJtjehVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kacz3VbnZwvrJ1W13u8bPvxfbb5oAgiYXjqV8XvriTcYqQbSzDW44pfuiVjwy6AraLUFjtZKTrxB8mwtFnuYjYT",
  "key1": "9N9T3QmdZXSsLinrCiXQG57YLBZGLtJaUzUUtQqGfNDCEqJpdHtkr8i9TwUsskHPtKLP5PGEBkHaA13dk1UKkAF",
  "key2": "3AS2TTSRfAjPMAqffBE7qmYKMjngwWBgxkNx3KYRG1T8LGzc352hXbdY6LMxd8HLUpZkfJZFne91e6PZYXmsi6yF",
  "key3": "5SjQZLp8ZD9apsUL6oaS2WTx4Mt2xkCq6BBqVwjpbD1q9rZM9UvaMoPBCX4Ko96SLzvRUqe78qMQMsiP5J4DfcUC",
  "key4": "57kaVR39PKsXXhsQaDNWEF4i4yFdEeLTaidzjhCZa9U9VUnk2SJcuytAogPPXAbtnfyiERTaDrwJJUsswE3ucap5",
  "key5": "4udyQjNyC92csD8haDvTwoKyXSZw3ZPVU9g37o1EZtwqzqpm8GWe8heUBNo4LAQYEsY2saSeUwAohrDXVpKLc48u",
  "key6": "25sH3P8Gvraf9FfaGMXVteroqBdU9WWeTJrA8C8ZJ6U2uiBP6pYAcpJP73GvdgEz9sjsKvyhMhZqc38GuCDrn889",
  "key7": "62adLgr6Luxevik5oBu5GYWbeNjS2hyMNBJE3nstXj9aFoY82cvk2zB8b8wedRBDV5AcuuicURsC7WsshLZGPBv8",
  "key8": "5TDisCa1uEw8z4NoU3eckBdKq6XzMCzaTt4tPGyF6VAbnDRsHqzmJC7aGJTfFWLaQy9BmE71gsXM8VUiGAhypRBu",
  "key9": "4MtK1E2LehPs8zxGQyNdGyXwRmbzPhmQrKukmToNZLv9L23wsfWcELZ89ZU62ee8foZH97bBhVXFogvXqk7NGetf",
  "key10": "2hAJBBTEiQinwuxeKyKShg8rkaFHsTZ8ckitcskchuQdNKMPZYr8qNdFrDRUhCo2zZXJHYNcEhf31b5631xLEgoN",
  "key11": "4TKkDTVCzacPDRoxDS47QV89YPMWGbrgajseUqVUEVNi4hkbe7EdXJqCpVyT5vg7FfenZxfePnuCYP7mPnZuiC8z",
  "key12": "5TtEBtpjH1L8jhrn4Y5TxNgEdkzAwV2piFRzjd956BEZhxo4ZZRFwhuhgNYEM5epYhhrQQSrDNdJMWhn7YB9zdGE",
  "key13": "5pxsFd8X2HxgBtNZqpUXPSSRSqT37qwfyrQJyT2RFwhfZn7mmZCPVrH65uqLE6qZyFK5W9tDACjTkZhwHxVre3mE",
  "key14": "2mPLx7SFqZWv8zDdvQSpyJxkmvnPYPea7kup69zjaXoWeY3xwwGyqb97darJsRdEajLygfh5ztkMNHgpn2EzHmJu",
  "key15": "5uvADmgWAnXNDvku6EZ3hzLSxHkQ8MmpMKHvFVkq8gCm4jmwmi1BgeYnNsNLXd6tHxhVWsiQNQK9JrtPnGYkJBvs",
  "key16": "5D7sXcc2CwK9bGF8PhEPSqV3KHTB49c32GVKc3SvvqcpfNkNnVGvoLgVgHncJYWLfsAGrjNnXEC4asHBgFnkJ6qd",
  "key17": "54WMrsTL2WnkCxNyshSFrw6Sr7gygu5McAr1NwYkHrDaQi93exoiuH2tX9vqyWKzebnLpTZ8up1hyqibfdm6eHyh",
  "key18": "xAbFuTGzoNRLCusNzNoANJoxyWHVK67n9Z28T49jMbVqLUhu1RmMoEsYprzmcneZciG7kAokK3wjeM8Yvu7UGmY",
  "key19": "37VMFaUK3sKgZcXH5Y3CqsTaPCM81KrXiAbowCnHo5jHkfjYgA29FTYBLiih8WniGhN1zS3ai34vMnYXh6fAUUzP",
  "key20": "2TAu85ojDZpHb3hAecAoWNsWiY9h3WjZdBNidBVJYafLBUCB1DWNxQukaLWw9PKuZW1QXbj1sUNnxCg2ou5RmeE1",
  "key21": "5gdAhZMxboqhUbdhpJwzDJjG2TN3myqkAtr5vpsxMw7iSqmnDJRtNyTHYwpBiwSUu23U2sMDz2i2XAdawknYTxzv",
  "key22": "2Y1YfAr7VxczwY7sSgapWeqeEF2PaEu9kFfRPjEjJAijDAZdZsGYrBed65SHqJEvyxGDUKkTJs27AraBi6TLzEjy",
  "key23": "Ux75tUCfMcrKyyo6H39V58S2pNxpuQSjgSeEAMkzRLY1RVYfUK5ZxtK1Sk6cHBXTpm9cbr6ni9EW7jHNY4BsiSo",
  "key24": "54DEexxDUzkX5ov7CfoZwvM3cqeN1YcCP2W2tqsydzS2NCYd3PHWPXZPgitcn8JNrtaK2snoiwKuKpVdU9xS7HBH",
  "key25": "em5dTPupZsRjxqwSajqpd2z2CVWZhZSnT6yz9YgJg7K3tJUTYbZrvtFnqkm2cj53sNQMbAPXs17oMYzQu5Q1HRg",
  "key26": "3j7C3cPWbqPkj79GXwtbFxRtvQSpvAhDcje359x8x1QS7zUBRGXQ3f9HFx39yLFTt2YiVDnZEU4fFKKDdKs3Zuwu",
  "key27": "5GCyx5zEYEMbZnExUQTK6fUxrBoTXoHhsePxCW6ULWoacDSSkyJfpTRo17HPtBSy6ztW5eoJ2sR5sbWjdcsyAbNS",
  "key28": "5RDQRZ5XPqqmKNAiK67gpsMorUeoscWauaFiBhTDZhgStzmQGvqub9oQhCDAgUbnxHm6azYjEaV7fxG4J7G5Kf34",
  "key29": "ofBhhgcmJC7jKMLwh3ttbEtR76utw3kZGZi8GdheERmwEvw2QJ5tiu27fyefaUD3yzVxuTQqYsjCWXyFyLxkUzv",
  "key30": "4RVqrRXPo2WrzQFsjoYa5EzVpTExgDjspdzD1cWcn3PqJo6ZDggaAgxJZDCDLqiH6fvcHZHqU5icdCwB5xZJrYTT",
  "key31": "29NwjeD2biezzKdrSjfZYZF1fjZ3H4cdKkidkVf6fxEb4Adnc5UNEVwzjKSsMmEYs7SmiFrqz2NYLXn3T2L9VqDU",
  "key32": "3iEFxWqmj9XXSgBHjy35aEbKKysgDbi9e2wGX8LbE5j1Qn8gqmsC9R6Vkto5Td3C5pyEXUK8hHvxqXWyLZovQx2W",
  "key33": "2SbcJEMFuCn1AQWsnPmD6gBM7QewYnNjTSZEHn8srjYGPfwiok65AQezhVuT5SmzFCuTC2ywPLSHrm7EmZNgAdtB",
  "key34": "4GTaZQG8Bkk4WDu2HEV2onZhXx2wAGihNW5QpoBnZsRhiMY9jnjopyjSybUd1r6WXWCzBzuQxyqe92nRuHWBYLrd",
  "key35": "5vsMbLG4jQ1E9Rdu1xZ8RDoH9E2YrX2F1EKWWgHjEsfjAZXbfRi8kU9qbN2JJ8Bw5zfHYS29MfBBpEfFDm9dZ2iP",
  "key36": "5s1zzHFNKDvVhcLHFUm9ztejn2QEp5U9JVqj2HmAFX5HUsePmBFnFcvz42zBn9Gr2BdpJ8H5knQFTc7FyA21APMh",
  "key37": "5kvqF5gQNbZt3fPZpcvwpuNMZ2jiC4KCgRMLPZYP5xSC4bftn8G5R8QNBfWnk3uY99GXtC6PFRrtPApP6N16yft9",
  "key38": "n6EgjyYa9NbYwXoiZpNcr7GPEaZ6yiNh2rJnYukQHVirivMZav3KMyixeNZJDUN9HVqhp3rjSyVK9VfEAzk8zze",
  "key39": "4yET2vrgVVG5eirjFb4AxRK1xBFVDSpKdmcdcUoQ14k2XD1T3A1PFxGW159tYF4qtQCUKAzKsobTfFbM83Aadopt",
  "key40": "8hWxgzQjVyKabHHh5aqiwA1qM8Juxp5a7pGK3RR2ZMHJncGNfHaDcFrvF3Qn521i4efo68CdW3hMSFGakEdfhxJ",
  "key41": "3EJ6vaxemjQVb8CE55iHmd2FpjE65v3czwK6zbJHZdQKmostsJUjqHMGUfTHUkMeoLjUhjecqcH4AXU2Mm3XXpR4",
  "key42": "3pCSVmFLWm54vYPAGFpBL5tjUEUbfKRjU3Yo6GMnxWrmP6X8xykuvGZMQdLWaDW5UhZEKaxCjacUrg3ptfGua5xd",
  "key43": "5FDoKuUEX2AG9yhuDtZ1iJfycugWnMjn4wZksPk1NqNtcJo8qaknmcruPiamdymvF5M3vhAyanK6EiaNPBDQuoCL",
  "key44": "4pAzLKhEsKxdMLsKRw5WghVndZu5T1ManQhHkAN1zwXySvZ76dbuF712qEiijxEkGV2XxB5nKwXpiZmC6NCmLNv2",
  "key45": "5D15ewXrfGsxzb1e6qBdPy35MMJpbegMJcysjoHUQhwKiDsyMtVunZiVCMia72YBXHttXq7KRNEDuAZikKnH864c",
  "key46": "3L4vUGG6A2K6AsFmCQq5yd74AjgqmrDjBi9VyFfkYBXiKqGKN3vJQs2Uay3WY8Qyz8GgfVT6u7wuWQMA3PBdmME5",
  "key47": "9y6MsG4DmUPkkCQPeh6q6aiG5fDZKzrD1SvxRmnTYtBL5adsB1Mt2zdZkeD1v2aESYP766U47Q8amQx63EFL87S",
  "key48": "5MiAWKgt7KqGhsHWVZy7NwTDjAmUZeHs2f4pCV9zd8GNMubnGb6jkXeQNFSuV9kYs4nE5GBC3i4E6qC4iD6S53oh",
  "key49": "5wkyaf87nbkS6wLqaHyLToBKVPHshG226Dw2tpP9ArRdQbQY2ZWsAnbVgT1KHE42nuLjmDkion4a3N2M69HQztoK"
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
