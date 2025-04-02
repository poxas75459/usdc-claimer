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
    "4x2r1fRey7xEwzADwWGA1t7DcTknvRpVJdSBa3osjnU1mkQDdc8UmZa3hQDoBXLdPxqURBjcfNGkcQnvkrvbpEkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FsohodoM1RhaoWtVhiTEZnEBWGKTRxt1xN4pSMC5w6ipgAvEGrboaga2NgMeh6SGnSevCBcvJBRKKNqVmDP2ScS",
  "key1": "41Bx6bJh4usxDLCFmdu8qxeDrtX4gepmu3cg6EJs3ytXiwqXFe173BqLmBrBmLfCzXMmBj8V2LJPnvS1nyhDRerJ",
  "key2": "5RxowvJFLi6zkjRpghAvBQ8KpB4iHhbeNDtCDiTT7Vu6MECr5b7aHkh4FKQbdpmxQ7TDBKM1GdYTk8aVaS5Gvrty",
  "key3": "5xUDJBYecycpjquMirSxD7qt5khSTGJwSQ4AQ1WYwSPs9ac6QUSeUJpXVXt2qcUWEtC3mXDs3DVzc3LEmyDADAz",
  "key4": "4nmTzVtqYknJWgqh2sy19TMtFioAAqgQTGfsZHxvJL5zACjJHYsWwC5spoLJpMNEb48rrm5CAV4aXC68k8Vy39H1",
  "key5": "4infvZWU83w3rQHzUCcBMP7MF9Dg1EN75ma5VRRb5jLCEcwWxUK82iSfGj584KvpJoEmHXEfAz9iitpEzRK1YfdX",
  "key6": "5bpry1nWeAn9jLvWd1RPAZCZQYtvfrdwPVwBtn6iYU99NjV8QErcwkcM3dMA1nEZ42di5rfXtkPRqY1H6CPYkdvf",
  "key7": "ckxMAedWFMNAYkxbDC8cXqJ374pZh8FcjP4g9hydVv4mY1QroqToC6uadbKMjndPdjPEbNzNRTfbFCzkJU7Ck4v",
  "key8": "2wqYTGkhriMEMijoszuKcVCACYb6jJMy1Ci8xrghQtBbt4CcBCrV2JMAdz6SsHDoTqr5uBY9CbddPCBiHka4RQU4",
  "key9": "YbMUKarVZ9UefM3P8m7T5kkxkXQZGQ13qzxwGM4kDwv6Fj1svGtF4RJmYPSYQrxvtuDVwvdAq6vUeqWd1hLKGnM",
  "key10": "5jGyBmKfudFtwck9ZVpdEf9Tto9VSCxyDnNtzMXq2d13B9Lo4VvefiasPbq9xTGuoysun1e7HT9RsjDS5SnjGxMa",
  "key11": "3EN6KJ6C3xuaEgmLxvTJEoyTGt36HkYiWYMEeNpm2yQ1Mxe9TKrbwEv71jdJ2dNgq3ppfZoebb8PpAMFQSVkxcJk",
  "key12": "2ygzVtkqUpWHf5ej1LueisD9TEan49J3sCkUWiqJtZGRS9W2Z1LNWxkAMm1pJ36mh1isKopAzXRyw46skm14oj31",
  "key13": "5bTVNyYA9cX6GfHvfhCYrGk3sfLV9ZexSHycjUKetnd156nSe1iqD3GiYHYZ8DDdPreVZjydTTJcT69RkTnTC7Mc",
  "key14": "zxW8FYQbth3UHNqq3V8m7F6uQZNeUDBzwNYyAbcSmA9T2y5wzgL7U5G6nwvRxeBGHBc55VTLfKgp6QcqHgFqzXb",
  "key15": "Tia9hiZWKB7KJXbHQdupL1ofHXqBH8qfE5kW3zd5TdifiSFiv2rsD3vaRpYsE1Fb72RYBQtok2xbQfkrmiQHZQd",
  "key16": "2SoxZbggC3G7onUCbktcofuGd2jRbdJU3JESWLAgibysRr9GcQ3oswHARTgCGdxFpkeUecGuLndgLEQb2X7GwfyE",
  "key17": "2xyZ7S84zw5nN1zyrcmuDqtzEt529wWJAVuc4GL3mU9aJ1iVHCxTAFuAZK52iAQMnzmeiQD3fgx1prrDdwhSACcY",
  "key18": "4PpwPwU5yyG1KU2Ec6i69Z73acFHKdtNf1FfHoj3xcQYBdpHi3KJRJSbjtS8xHpYHfbHNvaYWa83SnxEFese3pzn",
  "key19": "2d8TFUqhmqsXbkMFpVUyEwBAdrD2xR2PBtpZbEcHZa3dJPj7bWk2wkAioR1yEkySLjNRynBGEZZXHXQmcY6j22jY",
  "key20": "4H8NrZ8JSzxhaS4g7Wq1hhKW4zx4qiEGwQScgSFG9YhsK8qcqULAsV4PuHzM7m4VTiz3k47STovDniGN1KgySXA6",
  "key21": "5Ehg3TkbQ7Xa6JaLAgU5iJTQ6Vr9mnoNxSWwozqKHoHVhZNoKNEz2fhBBbum7xRErMANeWveeey7kB5px9tL7viv",
  "key22": "5m4HoTrLqGo6CwQQ9F2fUuA8Fy7LcDzVpWy1DRby8yg8JrpLuTK8MtpusSL7HhKnbQFxTtF1bCZEFNHpegTZuaRY",
  "key23": "3Tz2V2KarUBriSSpTot1qyBqBSb6vgwiS4qdk8Gd6TAuiKD9U3SztqnwydjzuoGT9VizxoA4cwWKN7TMrJepuqbH",
  "key24": "49DuHkRzpdsy9ZoPc7dH5TgcjQ4ZqDqRq7GX6GAxZLnK7GoMGGPYSs1pZYLgnWKUyXL9M3EYBAhGg9Yv3uXXcvgs",
  "key25": "63KRfj5moSTyc6AayjcJqmY5o6CrvJdL9EeKxUVeSmC3eCeo7LA3VGHHCV3GETgTqyRbiTN1G4TXgBVZKRMygZNw",
  "key26": "5eMEYkKHNZXn3bYxVmT8m4Hj27uMk4eVgBmjZ5SmXqAheGT67P4EM1juiN5Avf92hEqaDK1EHbp7tn8WByxFN3pJ",
  "key27": "45ocnbhyA8FurVJtB2SucdGQnCQTEY9tU238ZoLRJjR6FC1yKAtochZpnP8Tf2QP3UtQXMvMbzcQFWNzo8TYX7Gk",
  "key28": "49MoQ2MyLjrwVH9hnoEU3KFYy5eHXNA9WLRtj67Wywds9H263KULjPYngmYHgFhdutvjmRVPx92s561SCitcQBMV",
  "key29": "Ly6f5FhKHvRmbqy6GbCKTEYnKros7MZEFEeoPqgS5afXUgRC7G9iSDhp5kiFoWkSzJTwqkYsZAKoip6CAUU1kth",
  "key30": "CjrCdp3gdCMMDH3UyqvsUHxDXWd8R4XiwyosyCwMB2acrpjvyhr1ZvBhhdibPXgLDUHynKJUTc9B4pLhicn5b1A",
  "key31": "2bWL9Q7xXGF3RXRquYJxHH3sAcVBcCgvW5GCTrEfmPnur9rhj9XvR8EzRwhfGwJnzLe7RXd9dMVVmJj55krZk5Xj",
  "key32": "h3se79HriUbgWCQiFYQVzxEv1mkPN7ZF7mmwdGmgwtimzni1o2bmLTPStzDSRSZwRhfqXzRJ1UwozRAA24fwLry",
  "key33": "USszk98JPKuVfwmTTHUpicf2tQibTxqxq9JbagVcL1bj1JJ8AEmN3KjJ76kT739UJfpRjhgVL9zxXUvZ8Rqx1rg",
  "key34": "o4K4CXe1isqvMswy2A5tqFRwFdPuN6henfo4LAAKgE41fjFQiaeXe7sgWaxo8sb2qSeVtg8QtyCuZRriisci1uf",
  "key35": "NcGScBYLRZRSs6P7JZrqbTRP4xeXK41TCu9i2zhKFyhHJXZamYELFMVyjGNW3MuABMFx91DhNEusiNwbJeXT667",
  "key36": "49mn57fYHHZMevWrKrVrx2SVjVETyUTsQQa2cgjr4RenjJtRHrcNXJY9C1iU9UKRouPEVmPFE6ChPdKAhajWMJvr",
  "key37": "6773w4ubYbQuEpJeVeGYQVx2xUaG1tvfipWhfMFqRuAzFekPWMTt4eqTfL9tMQLo57rCcAd3So37Tb7A2FrRMJXo",
  "key38": "5vLx1EC1swBcDFsmAxov9fk2uknJ7FymrKnhQJjgqo2WaXu5qygpjs8HHi6aDp1ozoEkaAmar2Uo284vftJoRyQA",
  "key39": "mpaKJQSaU8bWvffoJyyMKQdzHhoeEAQ1McuiV5gb9vhxqGmAbWGRVRdLF7kocwqGD3ZrPaiuSW942GBEcZSJxLh",
  "key40": "Y6eFPiPocCjf2SKaZAAhmDKGnvjNeQwmT2nfv5qzyNmBZKAVpGUA5uRWsTVjoeGEfNpLiz5TT7SF2jmmNh2x9HZ",
  "key41": "sUk91oormUdqH5jPiZkuC5Zo1oQ3STt3jt4EtGgwfvPRCfXMf4pKgCqPPBRCcLkqf95jhhhb4LbXW4mcGxzrBr7",
  "key42": "64rbxSKpJHftPdvWo5THWuoUdPNAjASMFEH1ssp7Hc7PEeLHohsvKbWDiwZ2QkrkmWDVimxAJQ9VtJUadtW1dLhp",
  "key43": "PwxA3G9ct1wjkT6dwpKjeS4Siqck2K4UNuPCAFYEV86JPUJ7K5eVmDgSM3abAtCT8STALES3ho5b6QTmTWkZvWb",
  "key44": "SBV4M1PNMW4P9DZu2MEbCV9E8YZqtmk5hagX5xJjExYPVTQuqhE6Avv2n8roykfXyYZCWJ6Kk8gvSKB35YNx1Ud",
  "key45": "2YEUQW2KFgPBw1wdJmm1MpiZ4UC7o8xmawbiswZyvt25hfZC3jSTniE8SiHeEeAsVcdXjPGPU9C57YddY4uUgNwE"
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
