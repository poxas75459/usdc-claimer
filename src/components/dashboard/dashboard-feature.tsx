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
    "5f8B89ijs9TCz4XQEgK98z2t6FsjAVFJbjcbGKJ4TN6fBW9YHZQhnU6E6zA5RR6mWxYoTRQ4pBgUgdxSWuzHrhL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "86X1HjMThdDKCCtBBhdPKzymYhGw3RKzSHpwTspaHrwxgBSEKL9Cww9QBx32uGeDgiKAMzUqNV6AtMX5vswcEJb",
  "key1": "33Fd3GHZ5hbdx3am9vEDYbGP1xvnTySYw7HYUuZFjMok5Y5M6w6QL3vE63KGw1x7Ew7YgNMQenTtNLbjXxLJYTBs",
  "key2": "45pEcND4sairJnCo7CB9awt3cq887WCwLuazNgPK6xrt7mJE2mAXyFkaVjTCfW4qd2wA9a9pfpxeCQ1rKKV1qbpb",
  "key3": "3eUNq9hKroRJukVLzG2gENzvpjmCee6Zr9cvsLBgVKzGjcyZrMSPgoHoSoGZv6QVauvZcDhnJwFq3my3LHY5aHt2",
  "key4": "5sMkhmgwb9pgneiNEsk9MGfzGevfVkENkWiUQ1RyAn6irkZWuhxReHcyKVK76cmrfKf811mYTaa3zBfwjWm4pBaz",
  "key5": "4jW48gtcmfSGe84t8tkzJGEtNJRksGb5WVGfsYdMC5cainD6HkYjeM2FqSi8yVvrZ1rWPUvgzrZAfWpvroW3JmMS",
  "key6": "2BTY88xnojZToJGfyYBeBtuHQwbgsbDns6hqWsnbxYSxguNPBy1ay9C14jb6uxRUt72AWnKjtPTDut2Mxpmhu9sq",
  "key7": "2ExYAxb8jXbDBh8xQrEBrXGTNEY29E1DMWNuX3G6MX3Tbjsp3GDRY5gnvfMJoyKzBV3viXySgjNYTtiRw46mF2D",
  "key8": "5ra35NESmdctP98nDk8jiQgHdhk1Nd7SLopW5jVyeWxJtWURAt8rLnNne9VEpLW6rZ7kxcB7V6BkydBqsQBWoqfr",
  "key9": "2ohCfvpHkvyAojsAr25wJ3WdNh2dqA4xmohhPjVRJZb2N1JT5LbNuDeJSRGrDtsAXPozYwfPWqdK2kAsDFST1Gjx",
  "key10": "4rYyVAWEnZwiXpechicz8bVh5unt9ScitmSY6evEPZcXbUvumJKtuE71Qsqbc5TBfoYd9NLUpHtpKGxYioXnT7e4",
  "key11": "4kJuSxdR8cKZzbhWvHiRyDfAtny2ZX2JyGTLhrGqZfwyjiNBXFB7e9aMvtpswBGjJs4BT6SQAEugzree7wnPvt3U",
  "key12": "2pdL8THsNgPfgHSjJit53GyWAx36rQ2rNcihMQyDVhmSpDDouC1dMptEm6h7jPkZpKwYdRzZhDyNyRdLiYwv9Z3R",
  "key13": "2XnU9srWMvddRLwwG39M7Q9D8Spw2MhT3k1jPCqHZJbBsLrRpkTGGr5t2V4UoSKkz8qCGnFQQqvJZsQGgWeRDddB",
  "key14": "4Ty8FeSvLxNzemrwVTNdxtg3Fmpy9JmkQU1ARoNtQszP8PKDmQxF6ApzQmBonPVzx1M2AgZdkf7U2MRpYvpQY85h",
  "key15": "4v2fTEaopeDhohnV7QVFHaB9eQCGDCzJswxS5GnYUVNMZHqCBfo3Q13u3VGnkqCuNJa2PhBVaHk3n77zG5VmGogm",
  "key16": "2BNz1pvhuWVfuw4iNctZRFknsaC4HqQqWQYGPnRTtMgTtDB15mEn4muCoEtBbEXNDzdmpr3rtcgNnEXMc32My22k",
  "key17": "39HmsBa1fiyMQuaBzvVNVfSwJq9h3sUvUvFLMrpTdGAM2JE5nBgcWpBDX8Kc7uktyz9pXe4rme7wzMxdtgpQu54a",
  "key18": "54uTG8pHdfE2qDGE5jyixj3EWk3rAr8cWgkfpB21HsTCnR6C258F8wgGMuo8mvNTkiq99RUotAuF5nxErmLv6pJz",
  "key19": "2r5YMyK86oSq2V9kNYzrqmt9ZNapnn8ZotVpG1KttYMQ1nZTPBJWKvdzz3Rmd9b2X3oxby39igampzbdnDK97GT7",
  "key20": "5PVuBPWqTJPDhXQw2XVQbvCCP94T9CfVffLL2ycwvK7dxTN19vALUy3dPJSnyRHHNgnywHuhR7gSZAh9WL3Vtjmw",
  "key21": "54YSiNCsAqxEdvbGF7WN38YNQvjgMebmAVGDJttD6Fhs21VmmNYwrjzC528ZUyeWEFsxqsXp4aFsFh7F3abZ5wkF",
  "key22": "5TtCoihiUf614fZczhVBTSBVF5JUgwwBRPjLvyUsfdK7ytHvZf7Vg729Xaq2hxVuiCNgoZ55zcXpuSNNkAyjfX9m",
  "key23": "39Gt3SRHEhJVv6tU4jgHytHocBtxuCi3Z6L7zTtvBd9dJBy3ym1ERGRnDaUi4Hea9QEW7LNZzEeY11sy4vpvu15h",
  "key24": "x6tLwz4Ug42BdynnsYXSrLZVKEJbrsnZGRchWjkWSJgwTY24cQvRLBFWvjBmGdtneH2p7guQ6hHrTCLdCWtK7Ty",
  "key25": "5CXo9ybMvT7LvaaFuUNnSEaFbBceGNRFCUNYjMmu9mfYRnsZNC9aMzj2v3qnj7qmr9yREtfddkN9xNgr8Br2cdKZ",
  "key26": "3qxtuEdfv1QcAiEjfHVGMRJ4umtXBan2mxQKPPGcngMEWSfoY3gFob9Sq2EgKUYzjH3De4b8jrTTJxt3nUgFhd5x",
  "key27": "hA8aptPLdavoB9nZ3dWy9Mc3rZg86bmGEnZdaCjVnNaJM5DzwdTUU4EDXtMrJg6Dq27RTQv6q6iMpM2a1W1R5Wd",
  "key28": "3HLqDTpcaMhr8AzssXEStqDV9XCZcCcazmPb8oRGngXDNXkd4Y7j9RBuV9L4jhqLYnm5gptUKvZpkJuHk2ymgbG",
  "key29": "5hHfhfaCddC168cnos8Pu7NjjAknUniRTuiUYntSXNs7enDXnnLCHhWB4AsFCeR52fQJgzfo4jQsLFLuxk5R99eo",
  "key30": "285DcNEjyh2P15jdRYjvB6v9smLe8ncQiHYbv7rX2tBpRiZDYt8sJh9aTcoqaCREdi4qYuXhd9gVuKXVbXP9tuo2",
  "key31": "31VyKg26L9m5ezkx1dorokv5oAeZqWg75ZxQ8DPyGeTcZPqJPnHbRsgr4kFUvfJszFgSNp92sunzBg9X4MeXx5ge",
  "key32": "4ubxFAUQMeobGD6z9o3g4UYx3A8wnSB8NZ4EaSRMUPBUMohqspZac6sSiUDcvTEkGtEUJUgxCb1Lx4apuya77Qwh",
  "key33": "5iFwJiT2tttDAg8urzwAu2xhqRXGYp6V5rXm2u9f1AnjD271kvPWenxzAzrDG754jrbbn9U1kEeKWFF6HXLPyvGv",
  "key34": "Z2yTn9w5Ah1gSZPrnaxNa5wbAh1MoySaXtr4qDiKF83cpWJKwY7dnMDHsxh7fdWAjGQTZGaL5ciSbommht9Px7E",
  "key35": "2U1KfgTyrJgVeCoGzswYyZWFsK4cPYMggtguZLFFtTfxrwLipaqUgQyNff53hkQ2Yx1eKRtnXfF5rchiEKzQVhY8",
  "key36": "6W1N7a9KMbzPgbca5ZBVorSVdrhXsBfW3Xobpa9dYshgM9StCMMVNDjW8Nk4eW3dSQxrSAPx5ZPqHPWAc2NZxZ7",
  "key37": "491YpvrLXa32zGaG2wGvHWqQ9irafKjaidn6gPSVyexA3ZMFHzDCX8SfCBkK2jqfjJFnmMjwfgShwvz3p4YZTNVv",
  "key38": "59KpKuMRwTre2tnV3LZYgXJw7y75aSVQoHtR1BHhy9oEhBNGeH3b3y1W9PiQN4GEjiNKSPvJzypHxeyfDgaqwV1h",
  "key39": "3MKtbREXWmjhanQFQ4tZgsj8GuUw2rLzshkR2WN8S11K5YeNhVvnid2NxhtbzRmpoj45oVpmPuw6YPZx15Qzqnpu",
  "key40": "2p5vF6t32onoo6qDg5Gnon1LF5SbcxuhEyjwx3YhZ8j7HNFMSjR7nN4sXhrNvfcNKywuQrGaiK94ahrJWPUSajN7",
  "key41": "2sepGp1yRxMEZnkVvLBwxx3q6G5ThCzHZGR9EitJB6EAqyTVKfMygiFkx4NhC1MUSx8roiVTc8cHKp2o89oqL41c",
  "key42": "5mbWXP5uciMtietbWvxURN7mmT6zv5AHURYB1FLMWGC6zMJ2XKq9h3fjMyrzYsqyQffHQ4ENxYdYg2QX6wsAokZb",
  "key43": "3MN7tV2Jfkk28uiXkjmGRD99QDDKnpZuyJue4xeni5a3rPrZYU4qLFojtZheMG8ye7Cc6mHpsShR2U11NhUHaTxm",
  "key44": "3EYSK1PzZHT1HVyActPZEq8ikj3AnmNiWFwgQnKwN7WqHK5HojFmGxJuh2HMGrSE8itqdr6vtKSmpWbNwqoCuwb"
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
