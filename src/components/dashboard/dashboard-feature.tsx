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
    "2xSB55WNJ2odNcgcA4BtTVwWVSqzWbSAAcKCBoqJzmpyeVsHZvMLkk1znhrWVsVyVGAHfQm2YBqpJMSxzn9sa3Zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ew1mQJgtAgVUR7rPRmFYrop8MujZ43txq4nT2zSgEr5B2As1o6nf3s7GR4xzQsnUdqZPVsVU3fYVFyFuRhdcoV8",
  "key1": "2JSk1RNUfNQDkDuUKGADcQ9ocfGrb5mumjkWkz1RpY6gQQyYDZ1Kn5SxsTF5YwLKKqBVoDqyERqgP3HAZVKgSFbV",
  "key2": "3dxmeoLaxuRqe8RRsmdYf6vHr6B1pw93AFXt1EgszQb7gBAyt5Kp2NEqZTrAefZ5UMiM6FkMdvgvznrEh5LU88E2",
  "key3": "3hLHt1x9EM8Xgbuwd62aC7kFSzWJ2MUb45PsrEstszTBFECfKu8ZAsfKbtWWaG8qjqEvE2K8K7HNtBj6q93JVtrc",
  "key4": "4wmXyhFudKpwTPwvujnxZ281PpSfwpzCDdenb5VGqisDt9sKCNcNAck2gWuowZUjM7HmgKSWzMRsLPedGVGwRRMq",
  "key5": "5GsAm9N49W2xvwr5cFeuPufdVEcAAQFuTW9pZ6VyQQwCivp3XH23L4q3Rad2vAHBpjEDApDZLVNKQ5SS6vyKiqgm",
  "key6": "qmYdYmjPeHYvxTK5trLPYpHKiKGPhHiDg2dPBtT8eGaT8CvZpywZ3Lyaiqum4H4tMcrgmq9dAc17bsFNh3YELRS",
  "key7": "2aNBpcCz5n8VnA8rN93MHLoQfHZLKPdsvX3NiYsQRA2st8AxqhcuUGfrU4EiQRdVvBa6vTpEKFHim2yqFAzczrJP",
  "key8": "4xqedkiYL4ECWPc6u8JP3gF9YAZ6oDYLZtCaJmpe51Rat8gBQ1r3WTgc5ZLiiV4paeCPRKBtoEYt8oegYWbcqErX",
  "key9": "3warFbCJbuSLTadeLXLYYfJqDEGpiyB3c3jdPYp5iZC2u143qURtGAroxvNmYzBjv9L1K8mB8Lw9j1RXQejm88GA",
  "key10": "4pHGkXFUHsWQzp8B18NV4mk3BV1bMjpcG8S9gM5yz7APziU17ncC6JQaymWdkbZxBLL4HCg2LpnfFwsh9K5hmBDE",
  "key11": "srHM7y9sbDSnVHGYudZSZfyztWZF36UF3r8kGzgwbLgdcqR55FgUZDVe6Pg9gw2PdtTsKhhwonQNjVaNtvqjLUd",
  "key12": "3hULzfvQDoEYo67aigithpyR7mz7FJxrSZf5q15CAxdGyj8SQEJnFm3AQcXXp7Jna6e8dNwcNdATFUM7LKfVb2nr",
  "key13": "4vMWPgM5mMv4VUbPpf1xHnVLUnt5LSG9zwYUw3nFfdHzv1Us6uHAEGc6Nbeg7U5cfkjAtz8i7kxXy151pcQPawRU",
  "key14": "5iUeeX9x6QkpJkGfpimmgrQ8QCfTu53eiQ7wv6tVoecLWPzwGEj9K6h3xCg7nn1YQz9C9MwdWDanHFfdeWBExhQM",
  "key15": "4HtYSnRga3gAyrnisM89969AaZyBehUMvdJ7iyFqV2CmsgbYYkshQDw7v53Hcnt8uCf75MhheciHcCp8boP8PmHY",
  "key16": "2eonEzFWh5pGVqjTMaz8w45FMDC9vXVG2oeMB7ZQ6bMAR4vuB8MBPEytCJ7Nbsr98ijCjDMD3RRbJfrom3anpZSK",
  "key17": "5ADbEcgEDeKULnED9gCQTjmt63LA9TMb3GbT59yh9ZEg3G9kYZt5KJSgi9EKV59FKepSy8xHYrjLmN3NTjHpDPNY",
  "key18": "641X66fvYdjYrKr427WKMuYosrXaqBmKJWKFZaM1orKKNENhT11zDaq1kZVMmpL8C4ciC7q3qe4Jx3BVsyqdTShW",
  "key19": "5vNhxS8Af9nemqNXzZqAqducb79PyuqEhX8UPETVAGXmmuJaTufiYL4jYtQcNy493pGKZK32bvQXVmq33Lajeace",
  "key20": "3cfnA9NAHornBrJ1YVBX6HzYdxUtDm1C6NYkU6yDu2ouc42wEKG1EeDDXR32uMhAidM36ZjST3AQtg9H4yW9kTxe",
  "key21": "tn5k5X1t5vXZm6iLT49RNQaaQAmakdNA2vJzMYJMh9xktRMKyCMbKyScnhPhF9hDxpNHbRtUvC2vmGXmBt9xPsZ",
  "key22": "5afgvnZrFykVRdfvfzBb4pwqoEMwqeGv4nEDSXMwwDaqMP9pmoZAXryHa5VBrwQhWrPjV26zxAM2jYxoakpdtexQ",
  "key23": "SGeuunQ3oSGS39ibDp1r3Bm2ondedx6yGY6bdHo9uXfwUFHji9kGVmceTTyKmuzzmoo8S1RC92HRRqFNErhikU5",
  "key24": "2hjGpRjycVWSLpAxn8MFDAQM3qBUweYvwWq5AY3YBvSei2aPYhe3EmKskatcBM1wc7w6AeEmGvssJYd2kdaPrHHx",
  "key25": "53DNTQ9WDch7cb48wKCF86JnKwrqZS7buizmfGXyDCgLE3KvF9TofYUqabM9xmkr362KD38GxVRMc8NH74v76HCu",
  "key26": "3rGZce698yx6t9SesVDa5EVEEjoCKJe9m5xTuYz1ZHN8KLoCMVTCQHa3ULWHYr8U2E4USPWfUHP72V4ZQ7BDeHnw",
  "key27": "395fG1Y6jF4bzuQ73dFQPzYhWhLbf5PvXDsWe5n9DCxJCFmi2rAUi91n4v16WqbsFVPSqWD2y34o49wRMmLjLomC",
  "key28": "5DwfetL3Kd72ecACwpJ2ytRSjE8Dj3gFEWt2Crrhu6XKFuFXMBX89b4mU76BnococamG6ZgN9daMcpt8sgaYRViK",
  "key29": "3zHU2dUDpEKEQnCQy5X89hVmsu3f6xwKVRBbWfCQ2uwp7zHgP7VSUXvpbJz6Jxwu83MY2S1Xm2sE9rRyG16gZAAs",
  "key30": "41dwWJhP5iPBnF1tcMjU9ZiET49i89jEpkpHDSjgsRUNjtPi18DAe1pqNprGUzCHV1Hv2BNLkSBdDq8wRvbG8vcQ",
  "key31": "5nnyHEy5Dje7Eg29YXqix7Cps3GKmdFWNUviwrN6W5VK1iJiq3nEhQvmczeMcZv3FbqzAKA5D17NMWwNJ694YBjS",
  "key32": "3HQ6gHPRBRB2U785Ejm9qF9WVyazZkX49B6TqmmxoWYpDnuJZzgSJVgjySrnRazQy2xsPjLqicoZD5Km4CmpCULz",
  "key33": "61kAB2AKjEDYqpgvDXN5dECydXsMWkvbp74sPQSY2xZkoNCW6xgUBYsRuZnYBboXQofBrEVVMYVpi1YdM5CskvUm",
  "key34": "678LGQJHKAPfuTRmUeXgj5iuh5RUWG3ry8mDfLpKxJyFFCwfNZ8q7g1zrjZhZjKSLF5Kmjp6ha9WjyaUMmWvxnyv",
  "key35": "38QLmBBEienBtjr15ERcL6hT5PQxwDyopVuumktyn4HAroLyEk59JsLrjvN6biFzp2F6UBtKUnt1RK79MpmDHkKv"
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
