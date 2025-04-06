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
    "3GwKRi8kWZAMnfdmsnMry2ETJ4axmcZ5esos6YkDcSx59xf2PJWXXKafr6D9Wfxw6NFdmkZvAv9DzrZgb8zQ5BPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64TLPVZfpuSWkttS1JrmtobnYtwVQyyTg1v59EQo5QjTudhT9o584Tseo1zvNvH7wHnefaL1jVWSBMoif59YrE4F",
  "key1": "3yUNjVRbRioSUwdTioESh7So5usooB4m9rro6UD5W2sUh2DjpJHTfPWz4DXEAJ7UR2YY9yDp3g5yxBf3zifMaPPt",
  "key2": "4k67Rv7LFXGrTc8EtuSs1RqTeztaFRYcofw1dThP8RfyNMoHnZY12DhwbcPpLudhfo21c4spepTdgu78xvuhHGjc",
  "key3": "4LnGMzfKw3sg8FRLHiYXDGe2yQnTKM3w2KNRgMYkZ3ZnoLjBZnv7PGZ6ChMgRqkMGBPKesyqcD3qdrRTyDmtzQBx",
  "key4": "3UrcvL1tJY2XoeDiB6agZz8MTUukRkVQuYpNfX6VPSYcJfewfsYsoENZSsA85BdcCV2iwfxSqPacygcQVy3N6p7y",
  "key5": "4r5XXMANDZbmkRNUkmKi42zAi1JP3opue4rNh6YkStqEM9kVRc1Tg4SBqPaztv76cZPpKsAQQSSbuXZ2BZK665an",
  "key6": "4cWTFoV3W8ptSkdL3x4uNBp98gwn3YUzMsAcB6D2yHqATvuKCcz3aSXJmt6u6FxY7uDsDqMZBWo953fm6ktC13Th",
  "key7": "4eCcyrqkJ7TTZWaKk9GeWPPuooPYz2z2T5HwR7B9AR7hzpmjFNexqgXfbsRRxbeTExLbWyCCc6tfQkmrA5Laqnwt",
  "key8": "5TKSgYTi38KpVpUj13VozsTT9trxS9caLA91tLdDB3uRNYpT26fZMdvHs83ZxtE9zvXtfqrEACndFwepS2VFCSy3",
  "key9": "4phCydv8fLEMytXSCj7ijE3tkrrVGtQKfyZwcECRcnM2o5HstbFLx5gJBw6cui2iToGZnR6TzXNPYay7Z67Dry2",
  "key10": "44ApGk8TgjRH2kjZH6M5xNif1fVTdyGVs3d2mWvqxD3hYctvozddoHfxMX7BznbocrPy7KckKyDRUougoEtbf8bE",
  "key11": "51xRZmWKEwJSPhcjA5WWHYodDS9TgnSRPVwgZSR8AN7KND6ehVLtKPqSuZuiG6DpJ9zLNVywGyE2koLFxfUryupy",
  "key12": "4gftRbeUWNCr1p2SoRGgXuZ65sNik3b1PeGEiWCWitNafheoVbyhYJRMcZEyg65o3uvbNb7rar1LFYkJJkeNQt2e",
  "key13": "5TmHeq76BbUeC6QKP4vZtCRFU65zYCbT9He6yYpPrUQiYxapZEBMnjW9KujkHciodJphFEZa19TGuyDvbv6tkofx",
  "key14": "5r9zrwUqno4ESWyjzxdonkcTVU4yxbPUxRxPWWsVqSVk7TzZ3GLh2RX9mrvPfcpw2yqX2RBZCHm6ePmuRxXavn9K",
  "key15": "4Ens8y9aYGowfNpAwkt9J5L2ne6k48B3RbBny3Ye5mfQZE76gFjUPFgYqp5TzRYgvZmBEkhWhvNy3ZVE6LipUzEv",
  "key16": "5qk71SaV2ujWDvVXFsDsHW3VXkiAzEcks5cWZox4zL3scTwE3HvXvb1HT3dBL5GzxiFyb93XPF7E7ihcWUpWhTKZ",
  "key17": "BrYFZtTyJgYF5rHG2ckguxNWdWYJdgogbtNNRnTWukHU9BqYJwA4iKhgvHFmPuXYEBaCvkRwKapHZRK4z7fErpC",
  "key18": "3hHvnrZpokLs4sqSjt7354F2Pjf42XdfMSMQAmihGox8ZX4BCQrhVAWRdZiucQKgG4TP9ctn1TepG9DsqpZ88DoE",
  "key19": "4Y2UvzNoMvSuTdphjN3LRqbF2QWufhy37iyyNVdFm7P1vNZT6cLHMbJ2XMUmApbRJE3pWyqzFpPJz4w8ktivz2v2",
  "key20": "2vFUau2HkkE4uks8gGM6QFHGDQZ4xU4MmcRa1rd7UwLGxmD5ch88HLGQQ3DutCkEnhBcK4dNYRgSs8ar3mfRE3t",
  "key21": "54C7xJ55Ca4PRNf7KmbbXTSDFYyhjoRmfoH6GdrJR3PffrgjcdoWFFaBcNCZwPDqg21QUisuFMh6kYDe3DwvqDg6",
  "key22": "2fdNXK3w1utGznTq5mF8gQpWBk2KZomMagmfZSe3mDX1p3VZ4KCSYVrWrVGuBTxSi1QpFoMHAtDjv2NPAhuyA8Tu",
  "key23": "vFxupqm2yT8tWn2ShQmp5xMtRTgsNNrUSZtWnidNorQS92yWR6R5my1WuPtKDaog4GXTXuCJkb3EFMmvttEfwnc",
  "key24": "4D6LrFFRkbvTiqdUNVB9C1w95hHfg8aX2rnaSTNKY4aQFzK42krnNUDCFfRJFMxXmDUJxKn998pndiLKWBDJE95q",
  "key25": "2XSF8B8E47k9v9XNGB3N62UnuwweidRsGfQkTdYToeE5toojkGHA3TGyNPdkgBofvjsnAe73XyoeaCxVLNqNiHn3",
  "key26": "3b42ACXJHAxXKMPnXJQmKcgjCarj9FuVtKroeaQcymzQrHzuumQqdUQFzJzLMkUndtB4WLckcyFz29GcVogsyepC",
  "key27": "nmToxgzsMU6VfC78s8PYisySPbxuc4ZeYnV7N3wMqhiGxnRzmLpQTAfPF2LW4i3QoEq6zU5gFrPdJspjFHcALb8",
  "key28": "21ohvzdg5rk1KSx5Fh62h7fab9tW7oRMg6meBWArkjvwYDwRG7TobW3f1bBNKKEPp4QnbaNNa9ZWYTamywUdoKXs",
  "key29": "583ip9wSgrMhJut7TjivmXiYjqRqeFHq5eJctEDFYezsG1r59feFDvCogLC6HRXUnkhfcDuFek3cuD1yLJTFZ6MF",
  "key30": "2rxWyv7H25bziB3FosPWax1NGc24ybiB8ys65Nc7nKTLabman6jPjV3FYABhhVqGbC4bwTqKUFB7GAZDqM8fMZNj",
  "key31": "1aqZagQP96qd7UTNeEjGxP1pG5tF6qVgWdPe7KMQ9F5UY2v2FcGrfhN1kHgVXhpeSvD4No3m8t9WDJbt7yqdP3x",
  "key32": "57uGknsYH4MF4VZ3z6c6N4rUALNmpc38wRCVa4bW6XbUgAQobzFLiDhSqibPEtjR68jgCFuf849hg9JQRgc6nk6z",
  "key33": "Zz6PTEirmh1SiNav2TrtMxVyvai4yGgpFHc8rimK4ikrwKmcj9NiwWAchjazCBcymyMqxfwP4eye1y6Hq75gaEr",
  "key34": "B83q29ydX8AT32p3Yn5697944qJY5vFc7rc4bPzPBNkwUVGSxREGEssFhkWtsEPdqdEkpYeFwxaUUgKxr5jnUNA",
  "key35": "42ET3bL2gt7ekmmyX6mKPix1uyu8RZLbLaPT5DdLY6ZnbAXWZEjEyq586cNw9XBPHtsqDmcMpWcDWBW6GYLjwC73",
  "key36": "28yCQL24VDy6zu2bq8ZeDk6q5v74ahyYFXeGzEuCobHjiZTjhyApGtbrmThYhh8QABHe2cTmcimFfTs1Wb22GGhz",
  "key37": "3spk7m4qykx6eNVc6xbAuy4V5izBHHegWZXUYwEqCs8vwZqVvFDuKp1pokJGn1mprkqwFQmWw8z3Nvf6uL3duoJV"
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
