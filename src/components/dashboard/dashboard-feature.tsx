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
    "WBhJHbxHzG1oQmodTSd9y7Y6S6FM5raFvF41CNQzivpuYq9u7pbP9YhxWiAYfnERw6QGM1P2yDC5FC8vsGA7657"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sYH48BWkNvPNrid9LhhW6q8PvHR1mttJLKws4iGHvP4yWKQEvArjXDr7KB42J82RyQpYer1z9iY2qVb2JzxG1jG",
  "key1": "g3aCM8F6arL4nEAFHrFZaCRKxjwwCkiTNeo8ARRxetZFn5wLDzgYJsDg4LXFkT8XtofPmaeVojamYoGU7kXwmJ4",
  "key2": "bhbsJfHpQx3Kqpr4FFJRuPkkXXwGnj3SSb9xRdpCe1wcXfBga7AQYVm7CwpBcxqrPQgj5eqZf4aE8kPaxsTHmDJ",
  "key3": "3YtpNZ3ZthX5A3FxSLbEdmZZq3sR5TNESuxaQnSV6FnZMwobLSZG1duuF3nrRRRNTfg4CYnQteHUPTDAc1ZXFcUn",
  "key4": "5xKFVVJNEC7dBY8fKd9Mse1Tn5rExw8ELugmTdJcM8u19GZ5bHv3QsiRys4yw33bbhZxtFfYvMCcarm96gbGLzDZ",
  "key5": "4rK5LmCedsbg1Pgm6hr6pN2KLRM5dviSguPjpNRYc8MQHJMDjHjqKHwnDFFcuSRPqQRHBvvnUV3fiuHQWoYoUw6E",
  "key6": "21RSGShcNDiyZ8fRUFHfoP7fYzbTxZMYSNP4MjeD84edjSxnC76ip2JqmhD8XPyuNoCUHXLfpSncvVxqFLRTyZqv",
  "key7": "XbfjtAbSAmJ4yBx7amsSUKM8B4eUPRexCPDZcsoh3nEWVQYVeKYjCv81iDzm3wpdiqvmJqYFbSyZ3RY3M2xbwb8",
  "key8": "2mjHeu32ZJSfPgwtry7tTXVf3XNS4vszcZaggnTPqXTRXPbfGJ2cTd9yZbmpkFyGdWXUz9g1FZgdbEKkRbrZLdWa",
  "key9": "3Zn4w4EzdpR4YzKJABvY54tvrC8pypRMeXEs1pCHmLMEmHAjgyMfbYoxf2pQzKsoUfALD1sxenA14a75MCg8XJL9",
  "key10": "5JjcsFUnFpMNWsKJHnUnRCb3R4qoq4qHgZmJmtaHvcdzgDB22Knch4AUY7YV4mSsVtF2Gwkqt7sCJQ4fcHLpXJLb",
  "key11": "2qipmQzqW8YXyVQVVpdqdoS8G38KJCo2E3Qwf15nyuZ4JHKDS9tbbNJK4VLbR6yDX2ZRTHfRt635PzaVH9mHVrKE",
  "key12": "477FTXhsWDzc1ktgLLJjCnxohFuWS4dXVD1EcMF8s29UvvxxMF8GJHwSpPYNKZE4Z9JuxoA9X9XPqCU82wpEnPcH",
  "key13": "4EdbAF4EnpXUnroSsCjihzwiFRPe6sF3F2vGkamuyRvFjvQ3XthcAN6DfGnv4pu9KqVMUc7W2G7K1HA6NicTA96h",
  "key14": "4m9seHGqg8QfMcsGG55DSagRsQrQHKPa1ckn9juTnNcSEqz3MUs7PxbCfb5PpeEQFVS7V2EZL1nB1NFVA9QY7unG",
  "key15": "25CttmJWttEbHigtrA4UKSfyxSwbty3dzx7ePYjNEzruhdvgu1Jk5zFTGveMtyRujKJyDAgB3BQERtyAFgHtvajT",
  "key16": "317AwLYK7GuqJiATy59a7r48K4LBfumXKq1YxvN7SpW8Z28HxmpYWknmxH8dUJMdJ9UAyKXCUsRjGNAVXyUk39gY",
  "key17": "3jNy99oW5pTSmnsqArpTKon7b1ZcRnp7FEZKJTQSGu4EYthVxK65ncZTdbqCMvcGXJki6k95hDnegfwvsHkztjd2",
  "key18": "yc7J4v16CPrBZ3fBvXmK3ukBZrSA6H3xtThuqmNaKi8ix5qJPMEqAAwh2EJdFJMoe7FokJtN2zzKngEChNmGyjP",
  "key19": "3bfA5WSzfaHdjGQqJmpz1ASzmc8w1YGjrmKx3GYdSzwdo4sgWFGXga6Ba8JcACU8k1yMHZQGRmU5gJn4W7eiqEkz",
  "key20": "8x2uyUFmtsAdHzG37LwMVy9ubPNGjFLVsDiZ2C5UJkDNMJCSaW9dWcqTCDgHsjmDznwhXFtt6ZbCCLx5gnehnZc",
  "key21": "2KDeu5jFg9zE3Qbj4vfwwNgk6RTPGKa9CeogYo72YEhEDLJpPobV9Gn8VEJmbJmopUVdYbGV5T52T2LJvXKXK2oN",
  "key22": "5QPutuc7SXUkNtpzV2XMMEPsxPRHmvGyXSseBqzTUM2HrhX3gupwthWuDApvt7RyBPBdEnvQPPXwbkRhpWJHS87i",
  "key23": "4nzTZJxaCZwJpZbPXXYryv5BharfJQjufDnzD5uQvW4JXBBhtL3AhJnGbypxLffuMzrTs6BskDWUYA5hZNZPmeMk",
  "key24": "inMLJkzSh2o6gMoxoF1zPAWw5CfRWPtWd2gxdJKBMcUbb65XRrJ6aCFu8BvX5LT3dVzSGzxik1NRZ8RAQdLLb9S",
  "key25": "4skH2hmE6TRJzQVZZHTFiZsPgiGX6WRkKiNrwoyJM3KvaJMnzjtMB7dcq2mjXDWRLjCFCJsViW66uAaGZUy6TPzn",
  "key26": "4rQSrxSs4m5Sxs18uuw1tRQ7TtwyPNCEV9mt4zAp2xxwu4m7p9mvwBtKjBTrGmzTNKXAn1wUi4favZproQwkd4M2",
  "key27": "54taEsdTsg6x6Mto19G2MjPs6GRJSrDaTK84R5vHZurn7eB9zngEeQ2pi2H2HvxHBxQDogi9VheKvCZr8gHBKAPb",
  "key28": "rdPQbyT37HX2RKTbRao49A8N3PK9n6iheBhftfmZGYubFmynUF9cvjZAq75cfeB44ihYpJQik2K5K5GGTgLzYUv",
  "key29": "533P6vSb56NH2sYTHmb2hYULP2j1e2MG5JPobmycgsU6T3KZXWifcy1aJghZsMnQnj2LyyEBJ32rziuYpumt3GWK",
  "key30": "35Ztj6CJ7C2iHKLBeJAgJryyiBiswmMGjiteULMcci5e2dgvvnprvwRuG4Wd3J5vrdgLxKgexutLNxXVSSwZuu9H",
  "key31": "GMppEyiqBe1S5qpZiEJESJiRZG4eWPtJtrvF1LCRgD752fuTEEcZtxYe2cQVEVCPagqzWBLETwmoz3ARjS7Pw5c",
  "key32": "3DhaP2fjHFozX3CnPheE2Qq8p7uQQv6jry8Q1G8h3V7EKLSPmxY6EmNbkxSabNeEiJqCPpf5jQCXRHvFestuiNmi",
  "key33": "62crakMm7teAi3LttdrYN5wJMoenqNZfjSVxd8JdYGZNrTh6gHfjyMb6mnDzPJ173JSAH96iyP63JtGnU7kYvvLj",
  "key34": "4XYGrfxJfE743sg7h5MeATnDYDHexbGmW69XxzUTW8JRf8CRhHoYVnK5y5vZVuoFEiESovhkbfNMvBHt1t19XUp6",
  "key35": "EbTy54h9xxTXe5HcQZacTmqyBN2EfYfRUkXuMP6hR4XrFrJfLJvKbCwJaCbuZEaB2K47oZKraf2VdCDsWvoENKy",
  "key36": "45Sxr4gzdN3Mrg3Byv7NCGdTm8E6awWQ6chSVJEc2NausupzoZkffnTij594Y8myZiYvF32AxzajbYfrETP6M1Xi",
  "key37": "4444ZSWBsShxejarR9RLQwZzS2QvdtHTMhNzUoeB2vMW3LU4pJTJkRzWXjYdL1ou6L7YmnPPmpZBnSMuNeaCEQdM",
  "key38": "5VLTu3vdbajHKZpzyKt4U4pjxDRkG6MPWByBnt7DEGzRfXMgXF9XAuMT2gZ1LiBAbx5o1kA9MWGndAcseVYv5PEF",
  "key39": "2oSwfZhmuqCpC38L4RP1eaYAFXWVMjeYUgGj8Hc2sRFMShdA5yospZX7JaX1Biv16GMz9oh9mnWvS3UhqhRcnXPh",
  "key40": "5Q2yphu2kXS7xUbE4qMSZ4dwJkkLUDQMd8ma8ZUdavCCqcSFurWdaZ9fB9n6jm6nLFFooLUJbRbpFAuaigUL1BwZ",
  "key41": "5suM5P5XK5ocCmZakSVW9MQ1XdZpnHSUjAvajz3xcNK5TqyXE9EpQtrbcQa23rG2DFThgmLnttX8a4MoRRt6JkFS",
  "key42": "3xu4UAQno5j64Dvha5XnxLfJw1FuPFAiWghQPuWgjYqJetetynbAvPydvq8y4mmTNKR3jofa5Je8bcRLyZ1bFztL",
  "key43": "62vQD2rJUCzvVi6ua8xkMoEfLBFGViEEYq61T4Pen4BCBrQohb3WzsJJXgYWsZLN7fwd6Hf2x2UCdvwWW2CRTVi9",
  "key44": "38echtewpk3c1vrG12mUKGaLv6wqBpfaWCxyEaDAya1dTNvJauRuQtMCufy892S33MSuje9o2VwyBPNLMbEr5BPf",
  "key45": "63VC612cG1vHRM7UNKm9Turii2jfnBJYmRDZM8U4ccaaNTzJJHzGeQsWbvLY6K62p47UzXtNk9ZPLkXcuXajwkQU",
  "key46": "4NW1fBg2q2qkRUdVBuqBrcKMxBUyYYq6Kmpba7hBv6A6XWfa4GnhzpZqqJ8KS5Rz4uKVWmJ8VVuiwBZ4r9CfQHPx"
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
