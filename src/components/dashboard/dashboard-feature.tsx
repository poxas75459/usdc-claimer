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
    "2K6QhVuUBXb8rvubUP42DnogVz3dRysYLUt6KAY2WdZcWxPFPXJp7LRbfSvjADwpPCbTMkqkdXkiChXqwgRLs4D8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PnG4QPYCFtqWm2aC8X6QYygkuhDrQrcixTqRisit9Br7uZEaXj1xgNQt76NBAAL9VQ51e48VSoWrcASS3DJ1CRn",
  "key1": "U1o3PnJTrrHw6BPWVwVeTjNYpNs8Dgme7pymexypnbFyao1ibUzLVDvmpXWHWfZuwme4z5MXJfYoJwpNEXg3CuQ",
  "key2": "2kFc9UnH5ipjXM8csj6HerUik46kBUtsCZKh2jiCeMRZeHugZjq4HbJC6BWpwxgUiWxy1GpQfJTdwe1QAWg9mQC1",
  "key3": "2hY8puxDBJVHFmpTUXmvVKneHsTH9aTPcuqV5Ly2axrG2mfdPM1KEo2soXPfYyFFsFUPDzs23uXh2f6eXKpXRo25",
  "key4": "4QKzURE3ihPVR5McPsUC2g9agc9uhMuhZTCh8QCDuwjNjcmEmcukmBeCE6YX5gC9NPv6qoEyHPDEg9AgGbhzLZDu",
  "key5": "57ML6U7NKjvPYS9FbRkeFhdLktpMAVQApo1XA7gpmuMkFBXHSgrEwWoWj3wAo87Pou9nsXuu7hmgaYCzjrNEbuqd",
  "key6": "3MjPVs9SkErY8u9Qwn2xwamhEFBh3mDRnB6bnV5zkbBTPcH5y5YnBCv9HC78K3wUFfxCocvUus9vpzbZqwFfCtck",
  "key7": "3YdFkaCNdBA5r6oNenY6irJApaoBCHGe5jFWm1jCJ3fHgeWHRQcTT1hJtDRhFkbcwRDCEeuMapQvmqQwQCFojBiX",
  "key8": "443ntYQVf13n3XeseKvyXB7Mk3HYZxEXLRvGUAkJgYXeBatfJCYNvbexqi8Qso6J6DbMd8McXWmnmPG4KQUdq2GL",
  "key9": "2j5GdAP9iouukPoxw3uXNcYTWviDJcGKDYiQuEvwmrkKAqDZc1zMkEbfnRcHRKxFaYSAwSiXjkMrNZy1GK2y3Eus",
  "key10": "3kiWYjGr66ny3udSq4g438dnmFjyuUP7WpZ8C4j38nHLtjEQXWr8whQq1fJZMgq36VMY9maSWBoKmq2tZUKxX2Y8",
  "key11": "2VF8eQJmCtXw6NTq6qmqpkY49qpQv7nCBYT6ucVj1GPfCKjbyhTTTLGtP1AjHLht48uSJgFkS3zgzn5FTdTnEMT6",
  "key12": "5yWk7hQ5S7cJE3pHGpXgCjNYi6jEU3gTb7qWT4bKqzLqkvzqEKjRAXto7F2HQnctdLgYHoKAxyKLoPpyYNjpCuFr",
  "key13": "qfa4MKG69bfNDMyk9rtUFPqzEH1yxd9Ffo21oB4embaH6B7qBpKpNGJaiGLVJ3byzXrzPtC8i2yJsr9cWrYrGaZ",
  "key14": "5wfNaB8U2f38g4wZ4Pkgw9mnETQ3KD2URMahqdQb5gJ6K8YSPdaixnb8FK2tP71XJuX86fyHnqshTEer64PyFqH",
  "key15": "23ZTzRKHC7FXae1CBGQS7JnYRQUpAFw67Bp25vTQe8FYBdTCAUryQ3G9kQRrLdTXXNPUfXWaS1Xd8qVpZANuB1xe",
  "key16": "3WragqEXF9XFgnHretfVvzgfxbQu4FiFyLXAgW2nkEsK1Ajqh696god9BnZQn5zHCyLoDUHaPqm1ufKk81X68LgU",
  "key17": "EhbaKdeXka47sTdj44cwTbFjKbx96CcTwAW1vMX8JKhLxS8azo97kgHgFCVMJjgQACy8vWXTTnF7WtYgAxuyJog",
  "key18": "3C97Z7QGuzmZCTZqrSqK5XRrHV52eABxN9XLcDSGjAMBdCWkSk6tTiTjmiT1Z7YNfqWc3L7HYpujis8sM7hb67nE",
  "key19": "31VdTSZXzZB7J1qwtL48sCWwLYGro8RRUkv1GVbMuMfWYVzuiamhv5shXqEmb6EW4SzRMBAxXg4eV9QQsAX1r13W",
  "key20": "2YbXjmZ7FagE1PgvZiRA28N7GkfbYBdbEULaDyAZfMsuMXdtijfxVADJ82GtiEt4GwHyLcm5tFNDx4u3dsoM4DKY",
  "key21": "63X93vBXCjmjkpfwDR344MZ3usyMaW2HiqDLtTDrSmtKCigFEczqhR8SxnohSisdjUyGDZzY1bJjdQRxEFafWiLs",
  "key22": "2GvgMXqXjYXvwyq3nvwHFEhq4unUWh9ZQ5gPWEbQamt2PfGp9Be5MSKkrdNpY7Tt5LQw2KuyVxCWCzQEkAa1Tsu8",
  "key23": "2MCHiXepAaw2B8XAFvn2w6tPbBkiYJCH3u4VxbWcd3i2pdC1Jqh6mAQsbDMM3P8aiYDWcXExcNns1XiDU3XKaCfZ",
  "key24": "2G2c4ytdDHU4iUfVCQhqm8CSKy1VbkovZiaQ8157mcf5V8aQf56DpthBZmKsLmf59jCAcoPUq55ZVw9WTPXMkDAp",
  "key25": "31fhVa1A61oUbUaoQKjfpkSB9hx6vBJDY2U1eCb3A1rJfzFVQszeSm7zFujpcaP7Z3QccJYN4kwb3vHzqn3isBjd",
  "key26": "3QJSgYYKu1F7mMn4aszZhcwomkcH61phSTsYjJouUThAxprK5dqznRXNWVcA1hnKepGHD9Bc7to7NWBF6GY6SUVU",
  "key27": "4T3UDR3Jqhzb1ndhCWJAspVjMumDCyaM5AJrHtX32MDaTXiCwuKwNRnAtDB361cuTmzXHUu39W9FXr7xixUfcFgv",
  "key28": "MQowrpUJ84rBVHGXYbn3GmhXL3u1chxrERzmmew5fdikc6Lq77Jf6MTsKh5SEw9JMLgfrgvTUZpqaoeLpWnU4ob",
  "key29": "4VcG5ETPK6L95ZEmQmaFiwQm2sGQ7ipyh9DfutzkcGCNAN8wGjWZ8VHxKektGGwUnhB3cLnM3iKFTzFfY6ucdbh5",
  "key30": "3UFPbSjoUagsB5SZsGYsKtr9UaYBqQPTHBDhArndebdyx6EBSiVpW5pcWECsQcuC2TwiXg2r9sBhe9MwirKezqLS",
  "key31": "4o7qhWW4dUAkHjcb7WsZ4QZe4RuvSEb6p8idHZBdGbzfEQwpnzFFKYGE17fsXgdod9LG4t15npLGDrH8TtwW9U5q",
  "key32": "5zqTTaqXDFsNiLAMEKHYMXNjUyAkXe4rogomN74WoVx34HqAmhxBvndN8xHqfgMQZrEtBKDCnn8ov8Ds2VrSA5nN",
  "key33": "5E6zCDCGuuxJaC6SyBeXXr2jJ8BnoyPhAQapvfH5znQNCEhAT5UjhPB4nmhznzJwnXNbZV9isUtHUKNmPMwHNHMr",
  "key34": "41xFPsrBfrz3DUFFhw9mxKL88fCkzLYjbe2b3EucCEJns4TSNK15BjZzipB27EC7ibFxfxFhy8Yii8QyDrKGxSPi",
  "key35": "tBBJUxEMtwv8X7keLBWLJqKEtCtmb8D9q2T9iVH3Nx7PVZvTho7NeMEPpMfBhgAMA7AT2cUcaYGPiYRhdZSBPvN",
  "key36": "4VegfUTRsrE4WKi6rCyvXgMEjH7dmiDYswGnUGYyuvDeeRRPuAK2VrAr4pv4upB46ovo5J3M8QFukMeU9M7NB2Ff",
  "key37": "1x4jZWnNDqf39wprQAzjLTxmBafFebsQHnrKv2BzZczSPDKL4vNG3hVBqrnAgiQtp526CeiRNzsoNB4u9wUCGGe",
  "key38": "4HCCaNqGKCmZD2HLjJwwLFEkjFAX6kiFv92mujYPvCiV1m6eJhocLjeZfRCQLvnvu2UpuEcDAmFhYFjSqJUjM11U",
  "key39": "4B24pyGvvbHoktMsQEHT2hR9MV9tMQs4EzGCW9RhhCYvu6V35y7M4B9GDWPh8TeJAxmS29ZxSv7DQjDaKmso4NwK",
  "key40": "4zrAZh5U9tKWpDx8D2BDXVYxpUTL82P5SmXW18oDVsgXPVTaM7vG4Y8TVabyMc6ep63jQWAUT3PgscTY3L5Nms5p",
  "key41": "47GVc9XE14RnEfGyFctybYtu6587ckQvZ3nn1n67iSpnNpLVWKMyqmGrWaKjy8dpdJ1V9h48UKtVGUDTQ2SHuzyF",
  "key42": "rvoCVJT8ZExy2D8p9JNVswgwQVyygyJfEHTG7g2M8dA9yu3VZL5GXvBUMWZWZ7xDcUqqPFiV4BGqMGWqBrtiq9u",
  "key43": "4Y6EMMw6kHHkbcP8V9uJxMS12p3ZJZLh8XMFg3gHYMitYcwUvMu4S6aJAh8vQAdhdU5KQWTx73XrbLHchvSdgTGD"
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
