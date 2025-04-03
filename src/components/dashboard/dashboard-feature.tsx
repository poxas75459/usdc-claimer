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
    "5ngSKExuKZX4zP1DyrCwgFTaRpoVXva8mnUeZovfz1aGiVh2tFa6QBcE9kudMtfKybvRic7cpXWzRAPrTygnWPfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YZknTLpj1WKsteK1TkwYyQnfmsH1MiKeVroMwhUSxGSFxgR5PMQvMTusMoKq6Pemw9HswBymuvN8L2tZc9Mu6iy",
  "key1": "3xARkWnjTzG1assTA1ZVAWo8HGogkgRaVSzeZGC8gQhjBvfdDjSBduJ2AQBfNQH1gWV7oJVLqK4SsS9pmg8Wqz8n",
  "key2": "3bZuWGwjCFxwhoKjE16YJAcFo2Q5rzr1eP3LQFxURMMWJRMfpyvrMYwofS2PtrGYGvJcxgxxmtxsmj1QheTu9Vei",
  "key3": "2embxwikGmfMt4FpNK4LBr3dqnQAmW2qUBoU4MJ8Yjo6JbhAsEXHJ8Nx2qNb6evTwEUzAAWtCBe1Kaa1C5q1YHBb",
  "key4": "2M18YXipzWSJdoWW1G1hrydYNmrYzYPJWN7iiGdvsRHWEGMwPAP2moEDMxG7n3m3wx31z5gNsMtAzsYbcyoidVgp",
  "key5": "8L4oarPxwiN7QGjrroemQUkjzB9hnNXKNJYKjroE3rmTnrHVUC9LvGbuXfkGjW1tcH2MbhNNvZTmz3vx2v6PwWm",
  "key6": "24sD9A63dkpdkw29nsxyYbpeAVBAY8PNbCtC4BRUrhPuQQMMmYYq8bbUXbzgszTH6KwtzW16e5cCTofE1PVYVk6D",
  "key7": "2wG8hqnYpTWee7kLHvyW9ewXzVFY8dVo6csCWKQkKLuYVTum9oDq1M4ozry52FxM9CDNotCS6jBF6SopRM1a4tma",
  "key8": "2pmYpE2p1ihs1a95eA3RFuiqSJKLCfDasvWFTMpYXcBis7yKKcbL5tVrfsFXBteCduNpJJe4RuFDvM7Y9jMQY7eR",
  "key9": "4ryPYPqknsFcEUsWegw8dcc3xEcPh5dJ4DFgeX26VAiCJKBhvX61fVSF9GfuompRMtA1ciuKsSGgxKKAKeU1aaSN",
  "key10": "5ArxeFv3WLfJkM5aPmMtXh3WjprXVcHBLJuKZTVhREseCNPyMgkFQUvKKE1VSMGF59Y6iBnXpdBFraKQQqnMvHeC",
  "key11": "VMbN7JumLBzWV71XBz53cJ3qeoJ1FFySuuXTzg7XA1YFreQDoaRWbXjdPKzHbe5Jr9gdLWc4aTiivAETvrdr5YM",
  "key12": "21wjqBDjBPnnvc5rjG9PAfc5jZ7hh9WYEqwGauDGJs6GPkWpbwi8kUt9C3vdZS2FzDhLpgqG6ghkxzGVZwYqgVQZ",
  "key13": "249DHrRQEg5bx2B9v4ifFGVfQYEHboZDRBXotNjid47Ra8VWbN1v9BYAGLmGQkVYaRFj3cyzBMwDNV2Uq6t32br7",
  "key14": "2TMW3V5bgxzH6DzzizEZNKFo5m5nQAaMajpGtNMQ5TuKhTjzgW4dz4gsLuPLWHfZHYPVTKrVbUnHHWDBJj7o1bEg",
  "key15": "5zJ38CrSg9Pwdx7pM7z3CZSFzoFqFeAW1S19Bu5KrRvD2MGmc3n5cjdWDX1KURgrcQMwNTUj1hUgifkUQPncUGwj",
  "key16": "NQmLiHTo6ujtLo2GKNVGtLY6MX3PG61PYyXQtYeafdcr5kKE3T8UnrHcwcXciySUoFoMZMSuq7ebuDt3m2udRvL",
  "key17": "3ZMUvovZbUbQVzuQpG6CaHY5e11Hk5G11sD8EN7PUVmxHVvbCxc85pwxR788SoPq4do7rGx6Cxn6BvDV5b3BeCZY",
  "key18": "5sYUmUNqy3pnhG3bzmiGnuJpaG8mDMmmVBVBv4qtawpjETx8pziDsMBxic1DQw5GJtnFCjWBSM2r7ta5UXRfKnrV",
  "key19": "2bAaNJ1s2fo4n7S4pAWFB2FYtsk8ejhmbYFcqjmMSQao3hycRG9N25JXh2srPKHUjv2Dgv6jgYeQVTDVGXz4Udgx",
  "key20": "3H93wzeH46e71NF8YU1158jkNaMxuWNEdne7HyR6ne6CyFALTWMYtJRp9EoubTqU9haxQL9Fq3gkZ73r8gkVAf8N",
  "key21": "2HwapVAiFXMqNZeTozKonr6iD7A7hbTHY7CwDWTEXgS7KHqZcBESdPvosuubKUbqHBPrxEg6VPr4sCbMebzbN7Q2",
  "key22": "4h2cMekUzyx3aN3R2wXAZhcb7V5QMy5akiVdjziEdB39hacs683nr4NY34SssgT8wHvuyVQY16kfUJP27JznYtHR",
  "key23": "346hzreyKXdr98QMm67Jc9QNQfBY2rP7coiWTX5eEU8NWU86Eh86CQgn7NhBeE4bYbyHJaYzL6ouSjiawvMmbP5a",
  "key24": "4T831aDnsX779DwAP3itxq2hw2xs6pCKF5FQFVvp6KfD14iu4XQTC35FFjcdD6MTjVYcSPKCrRtM8MEkQbTkCUKy",
  "key25": "4ASQFWwwC7TsX1V9QSHL5zRG7ApJ7Re4tbma7g4ija4b9jHgA6mJqa27kWQnNKFj7BoxJsodXVyCqJKTpC9wS8h2",
  "key26": "43dTmTdDphoR9o3m2f54C6Gb15J3pNGmYkYBWYvV31vJ8bfBXdEaHWQTpDqtnzqdbupX5PZe1vz9eLjTAyxexS16",
  "key27": "3U9LGjk7rQrTggwikpfNVgrBsFS7t1J39ZHUaGc4baFicbf8H9P318HbKAxLtwfnRdSt22G5vU4Q7vrugJZi4NWa",
  "key28": "4Xj4V8NUJcWpcng5TacJa8XzrpWgi85h3bNPW5JXLsLCTzpFbkjNff9r4rxBGKhdAkAsqF79oHYZt4vXNAVomba4",
  "key29": "5nTUrv8p6MsXKqNV4pPtfWveWDt38oaQ79Fa6vHJQY5EXmTyKEALmBPot5oRkqcDGxaRM4SkA2yYd7D65QKpsaiw",
  "key30": "3JvA8vKoVb4YKz5dD1P4SpauwnTFRSv6ueMhDWG7t13WitmDbLULfxEkyugbqYfUk3mz6qs2QYsvff72RQE7iwnn",
  "key31": "3m1LqJB4TgCWMWjFQ7WCJ1HrRHDjirMQNjrvztxFmjbYAMJFejp7s2kkFHaWfQNfBPNR7s7QFYw6Q9wfE8tMAGkT",
  "key32": "Xdtp7bqFJtE6h1oyaoTZEFUN2Ezc48GCmzRByu8ELe1d6UdX8j6Bb7M1u4sWoM6sUsxxBfhgSobDRoAyBpaF73x",
  "key33": "2ALWt7XJ4tzb1PZ2xg2rgMGcFNmXVGZAb2fkYh24ft7pr6gQPTWrwkzbkhm18BYGJ5ksnSdq99qHHZL58GR56HTi",
  "key34": "4HcxsUCqCoa6YXnXC1U1re7sdb75iJpF6xbLgkPewHoTydFfya4VKs7xFjwsykQ8DhTFb2TvuWTtjQDks7474pXS",
  "key35": "3snRQVBsBBt2yRwAbCk7PRC13cuGNGqjRyU98jbsLZvZ9LPAsw4Koa9rsXHZCyvk7VxrVGbyBHpwXDABS4A5oZL8",
  "key36": "4k1EbySzxADbaD8eQALiQqssQG3NTUrJd7uTa8sWbXd2aqiwnxMLoR6Bvj7bMTuMRsr7fc9h71sH22FiBGeiBwb9",
  "key37": "2sbjSHZgWZjHATCAGD4Hr8Ey3AJEGFxZcHhRCPoGQax2W1ECQJVBK6NrAgVfYBdvH7JSx5b5fLQzyi6SNqP1JTJa",
  "key38": "2QDg5qdZWwVCWsyh7PUEuW8jwPFv6AexvNntM5RXHuEnUnLUDhwR5b93cpnxQ5YktaVL2owhbGaToSVUnrTKSQYP"
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
