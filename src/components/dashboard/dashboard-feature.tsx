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
    "28AonMrdx8XNrSYtUc7qHaMSLgom1r6T48s17pETPPuLazFZEhBswYKy7xLbnDKn87P8oWhUEtkqcBvc7wPqASQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "643p8ymafT4YWmURtbHM2c8LS7MW7dwyVWJu7ZSfzVJW4bADFxWLp6JnG9yiB75M9AoZnfL9xkRvsuwD73Danc4b",
  "key1": "v8Pu7xwGecehMeZWRqbGqCA5NB1sS4CtXgTGdrevCmVgoCMW8hJyyk9h7i3y6eRpZgmsBAcfk6QDvQF6ipzbrcG",
  "key2": "3YrXVsed8ZFpaW44iim6GCLvha4AtFipxnnMDoNUbG55aT8UDzrSMZwsFwm13M4KUHeseC1SK9VJpQRBTNhAgD8y",
  "key3": "5d1ekyq8pCLwDdMvRUJDSvt1BLfFjRekdY9hjTK2XV9AJzWuQDGtBX64Tr4GbWtN66zpvBQPua2xzqgsiMH5gCEj",
  "key4": "3JAmAKR945PUi67aqgejmN9sPARD5infWTN9fEf6GuNL1JaepwvZTKyW8n7mMiAviQUGcdPkx2YQqVawmwHm9XJz",
  "key5": "2XJw6q2q9UgL7jjd1EgQgbhD1SEHQ1VCHDV8Gf9pJo9qsNiYrxueBTFgWcobwpDFE4J8zGsVW8YNxng9UTTTH8gE",
  "key6": "2gKBTy35UB7QZudYvQf89PLHFhbTHayn1vP8pVM9bkVvPBQ4UJoj64GpwPZBNzHpz97oYtNNgKp6VbeVnm9Bp4Ax",
  "key7": "52vU13tMpzodSnxnXE7TKxJBTB7Mt1a9Cf7AxhAkdkdYNa72Pq8s5aQjrcaDkRNfU9H7ohnawzsZev6aaisjPafN",
  "key8": "Gk8ouD4TzCVrdVPhQFeQvpwPtu3wvin13riSkNSkkeSsXqaFJy3j4KwReyASdgat11xMbqVzbLmhTtm8RSwXXtJ",
  "key9": "4M6PWaGio894w6UoYcsfgM8EN5fo4MgPKUE7LGdxw3ZkMwbERWfEWzKvHMivZfSsh2de5oaptBgrba8CniFprrci",
  "key10": "5sSxTD4ahNvV3cfsmvspivvF9c57DhTB4Lehfp27rPvcaegUK8MVfzE2vAdeFyyqnNvYijFU72YxHb576kFX2cxf",
  "key11": "e6GmNcTwFFcDi5gx3K2StzWjVqSjU93QWS9MBZ9VAPwHmJcNptDXgWCATc79GWi1qEb9wMduqPEM83fz5wUrS4z",
  "key12": "5Uw2j6CjjkDsXkrKzSg7qTRFuBzVgYYwfoPW77HTBRxXuHFkENpdWKyUC1WWqcbcAFEyUbTRE5BBeh7tmoK2Lj8f",
  "key13": "3dLWXU7HTc9auA3zwVUoyFcGU5ttpPpzG4hPuQKLW8kAwvm6Hy1emx6s7RCWPqqaSYq9ofFfyGPdBAva5vxmebZq",
  "key14": "4wrRVd2oZSXoEHRGRWWWsSTkxkAoyhfzFBJffYqtMApkXEJsjirEzccN2zw22FiTrs1brxkexqUnVWiELPayxdpY",
  "key15": "2HtyARQq5nZyftiNVw79JeMEj946f1H9zFAUqBL2M57FKoarqkE8B259CMwhqY91n8QQmPGyqfhkGDhYZWupa6bM",
  "key16": "2AXhygxaAhqyeUqNQ7nXpfnC4GrLe3qL528cfBPERwh4fXxd278fDetCFb5mKyuAUxU4FhLDnaXiB7xstdRyDuJb",
  "key17": "26piPrNaVyfZish7gmzttScPCmDEwAYaKjSZCKMMX5kX9L7PQPD1vdg3pxuapk7sQuWT1i4yCYbqaY6rp6Tt1abc",
  "key18": "5umWLQ84AgfUca5GGCg68NK9dAQkL1DEPbRWuSYNsm58gt8Yvjcjnx3Xwmtbizfe6q4HKkVE9aCinTXwn3yCD3W7",
  "key19": "iynPi3PBvybJSky88rFeWC9JiERpEQ7pc6kyQ7pZ9fL71Q9CbeLVtUHwfC6bp4bBL9T2EByd4L7nhczjQzdRdyZ",
  "key20": "3Q5Jnrh2PEB2AckjqU9X31nZDK7ttvPR7u6YxKLh6igzjuG2zhnuSnCtxEpPPvUw9jLqYM7wq3R4ZFkPaqMdxarU",
  "key21": "4CW7cTLPP266CBrLr69wjJ1EZeKszGGeG8hUt4KFskYJM5CMvXjZHif4A8HyjfdbENqbzP8YF55aRUP3RCxx9QM6",
  "key22": "2yfRAeXoonTinjg48mBLSy5crQ7SrQtf2EUMqMeBzmPGatPnV66wn1xLXp5SnwdXLEgX1YAbtRR6SKnnYVxMiNaL",
  "key23": "7od7vqhQaAdhwxfCp7qxkHYbkenf3ZrHmWS74mfaoXbGXYcQ9gQXoNMxoBPzfPQmREzSbLsMRt6WyfVep8hCEfK",
  "key24": "3x68S2E4jodJUd7h2ZkeyENtT149opc1SFVryPVBHzzd1kg8YwMM7RsSZs4EGXpM6QFpYA2uLXHbQjnP7fY7Bgwa",
  "key25": "4QfrVWMmEmhq9QYWvqcgHtaw3qUANoxxcZx5n5qRDXTJMmyMijkjaQhU4MMUELUyUmsSa6ZRf3Rv7EjxmQGWNp8s",
  "key26": "2zkvCfJadADPNJc8janNPaUpfp92c2DHMXJrvN5tHdFQR2EQ5NFD3vWwJRS29YUNSGSXBoGp849sPjnqkbm6nLjm",
  "key27": "3aBNYPRhMgiGj5Nb5uB13vyzaiUoP75NY5HMJY6LVqZK25tFrh2rZmitKELWXNSuzZVqdZmXGVTWD1vZ6LYPKdDK",
  "key28": "4AgcFhwWGP6heAZvGzZvBVgu85rxk7YsePrQstD9cW6nPmDCXjEUyD1yBF3NZ8CdqhVUzjg43UpijU2G3b4hx4fn",
  "key29": "4XG98zGarpteNnTAgErscwM2dm9tnvGCq1uqVGfkWTpE75jfCL2ApYt5hN114Z1pn7qZ2McZKhScPxupMgtsZTwJ",
  "key30": "oQw7SevY2J7q3EafRFBWHEJ2s9AWjnPj3zDqHQxCHzZA9bo7kq8nzHhsR1BKz2mgBrY656esgYjyKcePcTjtpXB",
  "key31": "65XcQXsj63S86FWznAGddzgjv99jatScvPS2UMHAMd7cG7dskpKG98Xa9mGE6yuHTwuAy3uSPRX1XguzYkPdRnPm",
  "key32": "651jRaHsHNv7ZxcexHsY1GcNSg2HcZvNDQx3h72CeZEuQezHo7VKsqYCDtWu8nodSBKnevoDo5sRKhhNedBy1E2Q",
  "key33": "4dstSomqZ5posuE6e32okB6sHkttgrp3bDiKkza5TGXfEjDcX9dkU3z4KVW7U8KCMuES3Tsuc63pF5qg3JJddfLf",
  "key34": "5XuNG3MnR18mzdy9uCGFzqZQEVPuHf6TkPAP7Wptst4f6MU7dr9116fDjYaF6gpMX96W7MWtkn45n8GERM6n8t9a"
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
