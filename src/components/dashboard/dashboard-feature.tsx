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
    "4Rk6Ys2yvZesMLSrVDJ9jzU3zW8S13nBV5HmPBQ4Em5bhW5Ffk7TqA74cYR3H3PBtmKVHDyuAmbY8ji3ZjcBL6eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HosCn8CHikkXHCH4srwXNbsz8haPKKFKpdDWyYC3ieXTid5ru1oE6JBanMS8DSuRLUJeyJ7sAW87ZK8rbbnDEDr",
  "key1": "2GCw1C5GfHcjFM7XWJkiEJRsqC7ZPUw2EbmY3Tgu21p8LRJqWGhUp8nPhDdDgFrimbh8qHrjGJ1zeeCEnVxobthX",
  "key2": "2rtmxBGtpge1ejDvEPtMv12W9xFs7DTeznhu55PmyGuvUAgCBDetjPDRnySsUUKTrVFNZE1wNSA9cUM1REnh3NVx",
  "key3": "4rukGUFRbqNxirzqHL2iUXnDkCcqqJbP4xQMUUics5A9Njb7rdpC7ZoNSeCkHfggpswVTLHDeoWNDNZF7yZ6uARS",
  "key4": "65kTKqqyEoroGoRzxpxx4M4GRhZiN2rQ1MbeeTUBtoPSvGofMBgXWU77EMb8TB9AWVEAGr5MmYUVJcbYB7i3GAgN",
  "key5": "hTGsoDtwvRszBktcjdUyUGWwMWSEXJ93Nfri7mB7sUDxCMhDjGNTSwUJEzPTtpfGTsTkjNanoYH4xgr2MT3rRw4",
  "key6": "4voZyTwzmpqMfqfbLiyDXerKruBEUBq49jKN6rLhrhiZLEi4MY7ot2ffX6iHcfTkAeqArjed8T6314E1gAfe217e",
  "key7": "4pUYWzLy6qeLQX9ET9f7sP7kGwkkBrX6FYa87zaEptGYUEpjF9YXVDH2w7NV6PN96p35C5ifvr1bkheLypR1SvVj",
  "key8": "394nVVGtUTQywSmVg8yF8TNdzsw8Jud9ET3jqgDzhSULAmCG2HnYfcHXDm4mhDy9NeotaucsTSRpCkEXYQerbYP1",
  "key9": "5MMyZxJ9KzcLn8Y9ZmBK8GqT3Vh48db4RxW765rNgDfMUnfdsRNkr42NjTsoPzyJwR44X8sxJ5DcXwnLpoyV8SXC",
  "key10": "3AsVt6E4goeyMNTatmevZ4LCeEkzFinoKVUVhyWgr1PmSrjkz2r8gDMhPikuFofwDu56ph7jsiU64Q72e4mgF5ab",
  "key11": "4xrHo91w6B9e9hpAmHJwgvMHUSzRzxXpJ1GK9zf64v8rkj9YrDAnd9QdcUPcmZYJuktUzfXUnWWn42GsAbivAQTL",
  "key12": "4Li3qLAZoaWNtC3bnoU8SpemhzGSGPvfVhc9u3Qv5Cwt4zvSqeP9MyfwPttRZLLFnDC4XNoHGsWJrmmLH9SS2BfG",
  "key13": "rdz2jPg48zhHBoN5NUudsNS4FhizBLfG41x2gJEJD2TkPxSnswFHb9yt11tsnLuvDsWNXYP8kMoc7tRruYRaAXe",
  "key14": "yxouFLQoTySx1pfrnCHtwV74h3TnDuxgpfX2qeLgG4Q2zcoixiV7Udh6KHz2usWrcjvftfJhrFP1Duu4YGv3Tmy",
  "key15": "4PEzYGG8dF8nK2PaEaZJndAytP5WjVrituJrzeSLLVZ3wA8EPsyLWYiTmaSRgUTT52X7uekjFjFssm7AMWgwnXEK",
  "key16": "5UXkuXxxRRGZJHt1HJGhEutXxzrER8deXgPCz7oAVjdGaptPTKfDmkXz8j87hAeGanZZahtSPuFMBT4iTd1yLRNS",
  "key17": "gYYruq5cFUDsEJWPzq3ijfYyY3mJhYcrQg8noa242pev6mX3gaqYzAmrGdDhwjHWfP3pHcD1tZoJZkrQBNTxhbF",
  "key18": "121ELzyrPHPFtKwD8MMZ48BwaVAmqJ9p8ZrVmthE2Jh5uL9jEChT1UTyxRua5o7ks63Dw7EptsqGWRjLqxRRZTD",
  "key19": "45mGD4nQfMfcgYVbFwjeP3j8pVb3ncjhU9S2bPbRcUMBAz71TtvnkQdCZBRRjYMppUy3idpPUjEL1YWEzfLW1QaR",
  "key20": "275Yaw5ZQ8CaWJ4ySbY9794cr6td8jpnL9wihJ3aMw7D3D1RhnsFkucguGXCWdTK92L8bqZ3Jy7pbyuZzQBU76Dc",
  "key21": "5ZYrbtVARr4nwq5gip8jXGCcYvktHzhr8jW8KzqvABQXgG8wbiRXDVyXKSMq2WHnxar47A2bjeQk4jd9apgqcW5z",
  "key22": "44URz9rEdZFiu8YUhWtTATAmDmx2Ua4CjgubesK8p3ebQFeqqva5FuxBGCQjUyRMs1pCCENb62h6jDbYKji5nHfa",
  "key23": "5ChPvJbyUGQTj8LZ5xBrfxtoQMsCgyHsafg4M1swkh5BwueCf1etboH2hYRrwhd8S3S2UZtjk8RTw4ueoyR5zBxU",
  "key24": "5HTFhAqVjTtLchZr5Unwt9xFtWC8Ntn9n5QdUARfFgzsyMHjfJZzUinaQ5FbELNEr1FAJNHmBWCfEaM1NB9DmX62",
  "key25": "4Jy9ke84osyMA4e1nQdnKfhNMGFGUg2D3oXZoamXvNyF597TBaRHRe3Vd9Sqa2CsUWsDcHamajKCkXJLutbMq9Nh",
  "key26": "5Mzidjy1gUgn1iHpVsNYRQjRkzqEXr8EPhfRedbbc1uMoB3EdwrVTFxNABigyB8tmoTWm6SzYaaaVjmPGZ5hAqge",
  "key27": "3LeffXXWXmPxSy8LxDURyacp7a4sXkN8vQ3zKgnpMRDigjvGvmKhGrawb8Jr9yiLPFPnqVc9mhVh2rEJj3fjT7q4",
  "key28": "5GvjU6wBc54bSwbzTHWVvdGCZmh5ZHBqmkEd52D9xzXgg2mQPK7ZwQVUp2rKRNXQpsR8Ys83gEoN2HNWJMAhNLdn",
  "key29": "3mpJh7ADf3G3xHk8tHMnjbyBB1ZCVA7fsqdyr47j6dx2fqbimJeVfsbnGkJtwvrnsh4DPAaQUpMPbRDfVeKcRNgX",
  "key30": "5ViUSZ6bpQbCd6sXPp2ARK8ZLTvCBUvLiMXG1R7D23jj9H8NYbXzkczvUk3xskFpmouoDuhNQXPb8pXunUFn2yX",
  "key31": "4u5d3P7Kpwyt9Q34EFnKYCRrqVsjq9cmAHQ3r6vb8ccS7MNzYYnd6j3Cp6Jdamq9gvSeBMNBZkmzt1Mc8JtQGBMM",
  "key32": "56cw8eMP5r1PN8brJEcSaT1cVcjG7Fox8WfhriegD4bHpfrmjQd2MPeGEZt69sjKzkT7oC3ZvH8QBenUKw2wBCBJ",
  "key33": "4LinciZuKJ8PzvsK8SnKXFHayCdFsxV3kq9nhUVTEqi2PPpfQWVgovz7MfsZEiSRneWk3mHcBe2FJMVgcbu2RBEQ",
  "key34": "49XVTbKpyecHo6BLhXyorr3vCYjPHEo3TsN8A2QDfWnQmydsRvuBGiQG4L9bRP2MSGTPcnKxdEEqRD985tEdiPoY",
  "key35": "3yE9aSvN6qgJAwe3j4RyxxzSyi8UM1THiB4P4jgkjNmU7HAESjyvmSnGjVw9hv2eWUQWmEDATLn31KuaARbsVN6J",
  "key36": "4KVbMEDQRpSGPW25aycZnWmPsxBujVMFCCDtgcXDf9Yn7LgK9epxpGCEgqLarxp46XQDTJ9X4Uid9qAWWxB88GKn",
  "key37": "zaFc9xEnDETFavBR8vKZQxNP4GmFQ9dq6wQAKxhULW6pTUFpmsSgzCKn5sfEjy1g41MBYihWhWhMdzpLkHWMSpG",
  "key38": "5DTUbE7mPaXoPEjdv6Ry2MEkQdcQNjm26KP74CDuxv5fPd2fzmMw4wTmbkxsFeVFTAsTTPEocxyLaigXgQy3kTD5",
  "key39": "2geTkDgLJ8qdFm43tn8zurWZ7qFRU735LVrX9JoALbKvgecwAa3p7CsYkTsnMsnqzJL2ZAwDghgivWCmZBdzMGqB",
  "key40": "5shJQxCnJ7CyiCtNRjdJSCPRtvuxYn2adE6YehgTmdV7zkrcCwmYYEuWsSKDH8oaJFCHyLfZ45EiP7imLqKLFH6K",
  "key41": "2KsbszXfkXVb8bMN7qgPwxWhzH3cpTT3ZPvcAAxCAb2k3HiCBSHrTsTexpfhQDNjYiVrbnDuygKJ2CB5RoFv4eFY",
  "key42": "4dNNxocbJsjKWUMzPbcfymacu58tcAp6MZ8q86kf4g7j3Yw3EXTustwmFwfG3EMUTcUbNtJJDgoyFbUZcdVzZMMn",
  "key43": "2cE1cNiVeBN3dwZ2Y54x3kQQTNfRGm17Lao4bWdvdpPCsdDcCAysfa3VK565tkSvghEho9ZDUBLAEUidjAQcCQyZ",
  "key44": "5kTKExcWHJVw62o2TMTda8BNnJnvyV4j4i4sNdME9mc2YnKC67raHvfwB588kgPV4QBWDSAhKbnACudHVc9s8AsF",
  "key45": "QyHzrNNXgbBio6h4XBUDav4REGNkjqMLYvvPBohCj2idW47A6wJHSvavq4VBKqyiUm9c7at7VEXRFHsRqRi3fXB",
  "key46": "KSKioxnpu5xh7pnmE2G2szjyKE8GjAdebeDmpVn9BuCYHNtgbYLE17Ehnu9i9scqZ4iTYWWnRe8YLPJ4pYvnXEP",
  "key47": "3krA9G8fEbDQSPquZ2rcWdtawJZu55eikjBjqD8euYyLBLDqiySsXXcjKGtANWLZ1gMqaEeXq3v887LtUhtq6CAi",
  "key48": "saorrTHzmZrwoQ5BRXWRnSyh1aynrXSMAKPvMg5FkVJn44drF3X8o96bma4QgdvJu9n2SxfhrgNE6nHCKvrAH9e"
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
