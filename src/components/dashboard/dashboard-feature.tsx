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
    "2f4K1JPQZdAmdKpr8khu9NxzT3G4HsZM8u24rmXi6TRApwvXNtML3FXusnefViChdfy6Gw8dqGvTRsWEeuTMFJMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mibnP7Ahf6S58Xdy8bimuNkuYYFXeK7YKZ6VNXRDrZiFxd5Q7dB5S26rykH5XadvjzNuA6E5veRvhs5r4bYn5SW",
  "key1": "3D9v882dXKckoUF6njeZC2N2k1UzngU1qu6boX5MfF993LwHNq2J6gibAPf1D22Z9dZD1SSRYjryJqdzvg696vtq",
  "key2": "2d4nfzuSK6EQcJgmttMvL8oQuVn5xZJ7WsmX1id3Kyk1uKJMB4RbFSu4C8wrjzR7HFfdK6ZCZ1w42GuPnyiKURFv",
  "key3": "67GwhLCUvzBzHS8FLuoVDBw76GWxr9zhqZ8gKJB5t1EpayVf7PQjDjarYuW4Q6jqcUu6uU4MHKKtwM4AJQ8Dd8wE",
  "key4": "3T6qijsEXNNuTW22rD7LV3eLXiMGhPnzdF2vUR7GKwibLrc3RpyTe7sREqML2R3CZAKty9GH2hq5T5WN7sRufSf1",
  "key5": "4JrD7VtRHhdSs494kPySbP64MwTbwQxXD7rzgLGjWoPhcHbPrfhfwedpUsbSSL7n1kpyNsqPT9p11HWNXk8VcDdi",
  "key6": "3ARFfpyhBECkWe413WQ9zHhjSHd4s862Zq2wZ5mH1vbDT7mxXLQb7NkHHsSSodaqDdyLZBJPX4rEq5j5zhUh3dZf",
  "key7": "2UaWEt3SrK4QrgijSUSPNuYJMUu5DVe3HkTjxfttgoPvVgEEqpx3diG5AWSPfvLUmoo2fQbeWSs2Mpj1rtP9E5yk",
  "key8": "29QXmiP9kkuEn1FLz5s15coaMXzFapvq82Dm2pWqicfSFoHGNFTqHdkxQmMSJSoLvT79EVGezSZ8VgdGvsfHDRZS",
  "key9": "2crKG9bkfRDeZLHC16E2ko4eGd9gzvFUWz2uVWtCZtJ4CSijnrTXjSYz3eDhuV1AvcytyesibuJWiYn1Csy6c6D7",
  "key10": "4XRgTxvTM8Uod6Ws7GHihX1p118NygnijjDX21VYJKNdmmgsJ7DYU9tF9Rj47j7pqy1hcXGxMbhUa1t1M9RDYcZ1",
  "key11": "5cko9vMjiguVgPpmTEsE2rnVfxLdzfDrSJkDqoq29knFMC8HjY68cb3Q1d7NYCg91vHnVr6aiVpe1pioFLMMUMTr",
  "key12": "3dt3wwTyiAkCRANfhjpgKQAT2pPqRLjAFpfRoFcirM6vu2FjS6rmY7oULj8RCtMKwYQNQCqpU9Je3RTDtM921r51",
  "key13": "2SZkzgaNXjnNrPuQumeGdLYA5bk8mM1jh1Y5b5gbqfncMfg5wGYmu3qyrVpToebP8QxFwVtFD7PCRZvak7XZWJYU",
  "key14": "5t7kQNRFzhnLNr421bKC8mCbpYZjCV6v1bABwqJs425JozhpgTDg3JdjLyEKHNkk7x7L5GFGfgFWPjQbLRucY8Ne",
  "key15": "4NapfwBrcKweYnZABLNPCvKP2vXBP6CXGCBJqtK2UCPGwVmxoWKwkUfCnjhg1GS8YjVz4VEDCxKLWvtqG62L7XAS",
  "key16": "4c6ZguVTKMhyzSZySkqMXSSXfLAZL7j8Eo6h6V11jLaep67WsNzmkEbn47z2n68GJL79QKXmthYLqcaoRZoFaHse",
  "key17": "2fxYoZrCoaJdpRq3bVzzbKhBKP8c5qpKRn1pDLrmsCaK3wFpXKMzLEiG51hLVmEax4LXNPBXSqBBv9nKEpfkxozN",
  "key18": "27ZGgE756ykzrCEdSv9mWpyTPLbS6TWTnufVsC36DvGtWVG9fs3V4iSfDDARvGMkg1FSEz28fdvDTGvtFsy9cbBF",
  "key19": "2CnVLQhoiJaq1vD7AdZ46ECBjmzdesUziJrVZ1ANuReiWhFYZA9P59AYwigfAfhJLWPvvv7Q85ycnNykyKusCLZZ",
  "key20": "21WmCtGJi1sZo68FtvBxkjyHBv2o6HcCQvzRB6cabsT8ckZ5NWBiXdZ9sysw8GjoBiHjL948CPRzFiy7mB13E74T",
  "key21": "2JWwvSRrwmBKo1XM83cfoXqTCvZZKVdGY98746gkVpTzYCgBfU7QvRtGx2c1w7VNPYRTti7m4Nm7V5Wfn12EH7aQ",
  "key22": "4JDQDtm1BTaJwYYzhNfF4zyEhvPRtD6qChSvY1tigUeDdQJKeTkxW6X6hPxzPpHddfeC2tx5GxqFDAqma9uWYZaz",
  "key23": "5WJr2NyGUZx9ZZmRGrpjHmAo1cFrUvrqnkXU5fmvA6zb5dAsYGibksHf3QFSF4GxD77Lx73ha9VtTgRjnYuvREvv",
  "key24": "54zR9P3x4PTbVK5VdUFUxygHwgatogDv7UvtibNzxVWDZtzmY6jKYNPF4eZ1aLUyJBzD7M9ofczk3e3Bc1F8PAcT",
  "key25": "dm6Mh4CJdEH1qQFhmPv5qY1Q1VJewTCWBvZmpANFiEWqKjR7i5jw323iKDNNbehaWYgY8G1FGVLMqbtCmtCDY9h",
  "key26": "3ovpT1XS5sirhqowjX8dvcui4zhgiwkFmUjoxT36zJJnVca2kqDEvqRHYSdi1QCq6jGWUS4St2p1ksmAAro9eK9u",
  "key27": "434UvEjmU35Q5gYSoVosvC8P5vEnk3Ysg5m2R3B3y4jmchoAH7mDYKSTnhGuEBYUFpviRUYdsXzrVckUoKKqchAH",
  "key28": "2nAEReF3HDDnR8YT1Fe4KosTdokztSDUAaMmEAuyVkNen543Rg5PYdYeE6duQFE13EEbEivQv1fkNMzohFggnLLh",
  "key29": "NFzT9hrDpJXUNdMb55ah3pV7GNbbDmzuiPZEJ9APJLUngLArRdXt9xmXFZoCRT7Ne4C7Axq5BWXLbJcwaoEhqiv",
  "key30": "3EmYTW7g1hdMRzwKt26zZoBCwUjU7t7mRWrTce2Jpc7XBkinXzVYHR8S2JYX5uNFeKyxfGgnQZy2eNerAeCw7LmD",
  "key31": "5StLeptzTLH3erQvhmdELESYgpR5ZWjC6rTQNwttzeHm9W28dw4RvW86WvkzKCvjrGvSRhn4bEiKYiptm2e6112j",
  "key32": "3kuPGtSRpJMtZ8WcKgc2zcU6NEpHJt4Ur31gL6fW33dYYdGC2NgrJhYD4HJgL85qGzPKx5yrYBitf3xdFPHf36x4",
  "key33": "5wMuYDtkPT48Qa7sZowgAgLttM4Yh9iAnuctcVxCa35w1mfgDhVyXvqQoi1mo2cUZ95wsg2sMNLtehJBBMtcDsXm",
  "key34": "nj9A8WrKzwgwFHsem9cUnnRtq5xw1adzvmpKuY921oHGyaNhqSAB766eKMJyeAjHSiacxRqkRuW89Ab2cn6c3SM"
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
