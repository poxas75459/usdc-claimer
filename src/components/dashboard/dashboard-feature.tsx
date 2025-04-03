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
    "rqfsTmxvd3PfWSyo2L96eKcpXTSMwJtAoRo7MRgdUjpwfES3Pwd8x9XM8CkB3x8jonQ3i7utwH7MFVE89jmaqQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BWYWaGA3Y3R6tRGn81Dt53sa3YGCKsVzpkLYnMnoYeDVo7CB6LWmUKJzWDijwvb6n7UMbpoURFznDmCaTkjK1o8",
  "key1": "5mpdwdAA4n2DdR6V63wT5oGwNyhZaWEj5u66vVSJLG5NsihbemVoqyXEMJstAYW8kLL3MpQE3DdRnJZ6mFCCySzo",
  "key2": "3TyNAdmQYHVVpaAQJriFVqkBR6kjSc2XZcMAh2X4pUq12a6JNhA7PNbWJyDdqMVv19rCPJkUcjR4zm5obSCQZAED",
  "key3": "5Y7V3uSKLkL9VUJscvB58UMLPeVaAq3BihDUDMFft5ENbidgsMRkoMPUrDXGhxwNhzm1V17tf4TxprEpGYSbD5Mg",
  "key4": "443Q8Hma6s4yhWpUKc8CWKSYWGtii7rnLUsxnr9RF1ND9Ed8k8zYmVFWcyadjk9t1iT8KrQrZjfxpDjznHch9NBR",
  "key5": "4s4fJXpm9VEyUH8R5arDWQ8y3KjJyXfcP8CdJpC2TiJS5o9VyNXmDswcMtj5kusyu7wwd6bDgjzhrBngsxx6zYZq",
  "key6": "46QZWDVwX15QU8BxdFVhDGfuz2AGHYsNhnLN9DhH9KhfUZGc6K6TviMmS3yu9MVmGaifGGed7HDjKETMNTnwx7QA",
  "key7": "tYUm3hgr5i9zHG1XnsNYrsi1PHXCHMGqeQo1VGZfQjEkEAFedpLmwQERd9FAaMHMqZTCK6Ez9ZQDixnFQbyYbjY",
  "key8": "3dsgkCTekhNi6RFFFE4UsR4u2VAuE7E2AvCe4R3RuewcLLGP3CsHdddFEbk5YeRpb4H6PM74zsAaeKupftntMTv4",
  "key9": "47fpe43CG6nAc3xFEADEjGByegCLDHvupP6HQ84gDs8fRmn51NrhpCce4ciem4gUZoTrdw2zMrJiRcWoCPswxUWD",
  "key10": "2G8GQrpfKyCe4Zm8sbvmMCBbi2kW81vXGeiXbi7ePsaVLBHnXCswSgx3ZYufxxj22cy8ZvHqeuxxWUULK5ejCgvJ",
  "key11": "39DiTcTbNjrptNDvs7BMhJMgjPXSJN7ZspUJrMChUxZqjmTTFcQnUuZFgQ6a7mz8ipi5rHfgFEjgatb4bkWajbTt",
  "key12": "2RpJpVqfcq5fZh7qwNDYALzncpxZtb5PXYJcEzRj3sCER62YQGpu2hDpG4oogVgxrkNaYc139PkuqvdZHKTXTSrH",
  "key13": "5P5Jftuf7rZdbvfELwc7xSYuXfTpvBV3ugjqCfctDX7oAqs6TEjtRNuKKgDyBkVZx3d5RTUvU171q74vbKN7Qo6D",
  "key14": "4vKX4oM5kvLH5dsn5AtoYWVdDHuKi8hg5bL6uG3CYh3L2i2ZvS6X76AdYCSKCWVvW7R15W5b3YcMoeKmQyMmkeXn",
  "key15": "5DfzJ1geEdXebBS5qJa2tebyffbSTtZ4Yhz7cNwvXmU9L5JB4qmtgafT6aLEhfubFC7ngG1pubqigBgA66AXAiEx",
  "key16": "2UxPJBtjmc6euvgqzTtmqhoQ9Nuuyj4aqPxb6QekiHfbcDfqHAUtcUXQbEUVjGoKzTvNY5sCuJDUxXMXHfXPTP1b",
  "key17": "KJ5A8rvmtJwyyrugWkSDQMUyDYqJmxjmwjCweitempSmEwViUWe6PBVzCcCNcUPvjtWzQz4t3qg7A3CL4fN2X5p",
  "key18": "5hG3RBuEzuN25AtTyu8SsqkAgcxygnhLE88xPFHvDVCwEjyqnvx5uC4QhcuncEDEcs6hG9iVfUwqWVkKHDU86wJZ",
  "key19": "2zBweQXfp2gEog88uwEGBk6m16m8AUBdD95GqoYVK2SoxT6sieq1WrxfefzYNzWuVsdBpnZsPNuvbq8mz88oxNuK",
  "key20": "4w2dmZKvjcnwqrWU1vtrRxo3Nw8qDsmNPeVB9SXToztu1pfV4GBz4YtStavBba35LBDaeCK5gmXtkxXuYiXQQZLG",
  "key21": "aKHJgU1kQifGTz6fYkfQuNGArf6j55q1W1U7i2n29kUJvAHrBnExhSoHrSLVDhLs8wuXSQZYnJWteYqkyYVmvsT",
  "key22": "2yPVVFYxE8CSu8ShDpeJUbVUZ5ZS65zXdZLf1J8ZZernnM1ac69qD63MRGVn4VteJzYdXWPX336r1peXXwYNzDvS",
  "key23": "3BKpwzPGyjSJKRgSmkLo2CyBZCYmFi8TUzCu4hvNRi7tFnZW3n9uLY7i93huMBcQmcCAQifU23aSwTwM7rMxzCaK",
  "key24": "4gb8VzYzf1g352xwR9Y5b8XvGMXYFdCKLJMyuQNzJxuvuhxT6fW9P4CBaeNhdzu4gHjJkyZFwFx4WgJ5tveZSA1g",
  "key25": "4dEiwyr7bipK9XpQ2zsqCH368TUS2mZc4omkH8CLyyRPYfwa5SqBaLapHo8VgwvrZBChefqp57EC84pmKL9esojj",
  "key26": "3iSMxN1zwfNbw5jucZGoCweBm15c6hYm2d3pCYsST15cFU3jyv4U7gjfsbL5HWNL1Xcm1YUkf4pWe7BDdnQ362Am",
  "key27": "3vSnTAJ69chr6mh1G3xx623JdN46v1uCGohx6ErnehnxZWovjfBRyLnx6Nk4zz2w7vu3ieBkMvbQbPgGWcPnkGnU",
  "key28": "msAcVeFDTKrfEELCsZaJkAyGScQsQGFWJka7316PV3NN1WobXUsCtVGu6L2QSQebae2iMsRPpJUss2GzwGeQ95j",
  "key29": "2HhfmDn4ZYYJoN8D5ybTrynEMB7U2x5x1XHJ3XbQabVCuW8dvLUgQAmhL9cFBeQtEWVCZsP5DMzAA4XqMQGCma9n",
  "key30": "4h3hdYsMrdWBaASZrfvasPs54pobxs17DmQRxsc99rXmFoymBWPHh88RUfEjc3nB59aoFrfc7vhqkeAopLMCMN6J",
  "key31": "Yz3ob8BiygwodbYymz3BxGftnZJTnu6GGnJ6C1P5TporAkPRhFNQXUNSfnpJgBqgT6TgUUnhLdwhsLptLC344sL",
  "key32": "4nNnFSch8BpKRStGHaht6vcNMv28zeScreefQPUfUQbaakh9QeJpHC3zyq7DiPDAdKMYob4otz9RyQYTT2GtDVW3",
  "key33": "4gTgFs8PMwzhvHNnXUfRck2gDfoSDTnQACnf7GMWw2qghELdFmtCTwA9CcPS9Eai7h9tVxyQrUpCqyDEdU8xvJui",
  "key34": "6611nJk4oE5mwJSaZYa1X7R4NBP1aEB1Zm9mHyS3nfP7KTz2XwwWJLdVjuMcx4KvRB5ENkt2g1ExLPJrDQuth1TY",
  "key35": "4pjNCmA2MmrwuLdDmqXxbgv3eGXHAwipQGzwaeE9T3NRAi15gwhGNQ7c1EdUwcnwWajHxhkm3CBHaFUx6kj6MR1s",
  "key36": "2sY8ohQgy8adx9ppKJwVRSQ6ijDTiY67AKqKtDeWdeiqCWuLDLyqQfY33uyZbijfAeRT1zRLXybyya3SomyMynp3",
  "key37": "u1YuhsErj4E4QaGsgdYBcRDHxhxcpmbH2n4N8JRAKAq5u1YYcsy6CGuJpf8oqUYdSEGY3rAiLXXeQap2jM3HjTs",
  "key38": "ZADHwvFsKQW4ueFVYhEyKLEhAXGPhGM6nXum9U5tqpBCbn46hGtn2E6MCb8sBCSUByViqU7LKXyc4Ge4YfHYCgH",
  "key39": "5mRyu3xpiBFrKChpbgraBrUPvUmrTiGtaSxQuFe8p5CRyWunK4rhS8mCrzUMRL85v51UA3TerTYgvJ2parmn2kjz",
  "key40": "2TotU8qQVX297KEnwHNkuon26iEpXRzKuo5CzA7hRya9qGQgV9yXxAAzKUj1LBCgv1zB6nsxDpXXt5Hb3dAThy2Z",
  "key41": "rBVbmMJuAuWLyeeMmifqq2rXX1mSx3KVRiHCSP6k2ho3MBqtbw2SScJe7eJmuPzzberqGRB3iTd4ie6fuRvg2hS",
  "key42": "4Lmt8wxpTjsaV2SbnxXJCk25yG9JK4WmXGS3Yohjrvb9JjhUn9CgJXrrg3sdT256zgVpJwHF7sTNYMvUBpwx8xqV",
  "key43": "2PQy6UVJ4Rz3EEN717gXNCPET1QZdKVUH9i8DNNuCjzcideKAqbW3k87d8cPKbHQWm9oMpKxgw5TNCr5RAevRVnZ"
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
