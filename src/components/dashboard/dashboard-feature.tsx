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
    "2L6iZwGKL2oqBMEYXsSpuYZf7y9jAAqdYiRmc2QkejqYpJJKwSpEr2tPzobAd2ftZDvaaDisY7rmAKfDJvxrpKor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tjZuSXEyotkznnz5kSB1pRKwL5rA12RWDgBGt9XUiWT2d9Ezcj9W2RRG45LJHrfbhJwWkqW1b6D2m8XYxtHz1J2",
  "key1": "2G6LU7MGY3djW6Gbo3SpRpxoNshYiDT8z6GhihdYgPA76udnEDZvVMgyCdzPkA9Hv53HiKmg84RrnTdAFepsEN1x",
  "key2": "GK8ihnaZ5ngZ17NpLKTfNhDn6YZt7ApXXHZtkjd5Dy6wHh9tiP37tcSMmjBtC9LGrDeCW23bCRnyDaBE8hcWvx1",
  "key3": "4zaxHrwznVcZ3QXf6cKxHY1PH5J1NJgbYeQzq1TKRabj9vY8zgPXpansBXZH2RMbzvJm4YL6jc8meyrJGLrqQbSg",
  "key4": "3SE3EvzVQDARU1oUrpnuX9bs7rrWarnjVPV5NHTtWezzS1eRkBJUAJAsadiyx2vk2ADNFmmVwuarWVntMTxekSvq",
  "key5": "2Nj7nzDyVwsrkhEFkbLALeCGxa5SXeZCd8dwLBU3bK3GZq8K9Zf594njf3GGuN1zQesyPeW4gdwiNnXKXDygyBag",
  "key6": "23WAyTEieh3PM575h6R6EtvqnCnBcwaohGGsjCDLuhBQUTfowmxCkBGBFMc5GUfLmGxBFUK3QTnUYFRbKV2sVGaq",
  "key7": "2oAHUzBjbYknKaTDRvasUq2ajBE3huVrmG6qeNkQuEELmgU4b4sXAZAHM5nTaMYXy5Lv8p56y1GJnHQoty25UgZX",
  "key8": "23S3RnDmTHv6PkYZqwG9A8WPuXyE1GSmEqMeafAbdLBP4K4EeFFCUs4QwdQuwRLFk389DadcijfLmtonT18CRvrt",
  "key9": "3dvVv6Y15wYVUByHWdfKNDQNCALe1fbZcT3cQTWJEV9Y8dGLes5nKwwXFVQKwmNZbPGPcpzDPyvVGRxRqhWthonb",
  "key10": "NHXpU7ekW8Z6TrYzA1JzmnuU4hyAexsXLCQTLB5UcyqA8jfp7uYX5wkJNFqKPaDnVxoXXQWxu1rU9rBmfgXuUTX",
  "key11": "5VnKLsEmLFoberHtJdAv3GaJJXAHWn22SgWnra15GupLypXQPzgQ2J9VhbpoWADfBBFiGkFvthF1JxBRZTUgru3u",
  "key12": "5gYyBtN4TSBkxoGznudy4neG7dKbv1wuAGdhr1jrChBBfLpsbrwofJnnj8KB3rizVHYZzuYKxECWjXjEKF9tVj96",
  "key13": "MV3Xdq2HkcWhJBTJN3BRdHyRbiNweSFp5E2e7nKW4QC5Qz97zcmLiMAFzb7cXRbWdnNdX9wVZuaxLCWL14EavNX",
  "key14": "5Z6rBbvA5SLGjqVKQHDGtuusPsSv4VChWU1U6QVLYxB88d8o44SFV8Ts5Thoe7qapN79CfyLE9vJpvtPumCrRx56",
  "key15": "2FYTzQV6mV3xL4Y26AxrBQ787jRGzg5BghPQJuzMzTfZvmFibpTSGKF3CEHwtBufo7rX8aREYGfWvXU2A2XXZJtU",
  "key16": "3AB1FeUKasdEsBAgssYMYdCAs5A7mW57njwYdLVHc5Da1oQJVpwEwu1uaaHpEswXohbeju6aek8GPKVZYGkphmJD",
  "key17": "63D9SwRFmaWexT7dj2hnSjQYM8XjnNEJXmurutdEY9z9fZC92q3noCQwn3o78yBd8j5vNHFZ2XhAit6FtBdTkrpp",
  "key18": "yfZWAwqVD8xGuwruRpUrS777dEDd952xazXcJcyFyB6KYquPPw1UGHsqS6YnhdFuSChumyDw7ihDBu6sHp3kTB5",
  "key19": "3oj1kyZpQyrAP38cTpzF1Qmx9E8fUKizdakAcu9deBVM5GUPNftTZ7eUfotwd6pHQB5aArEU2ES1vb2NwzroxKmp",
  "key20": "4ALaZDvY4rkZjTbeLnmDYBJE6kBUKrktMfVQefy1UaJMD5dNCCQvA6RRp617QGbhSe6jAiowGCFC12MvUKm9bVd",
  "key21": "2JDr1pgMGh2t18HCPJFmWtr7qYhWwg3DxQTftx55HFvRjqfQLB7Ur7wAhH6dYAKh2fGK8KP42zP47BiPLmaVbznp",
  "key22": "21nCxAPw4dgvAFbRXZbJUrVSLrftgbApcfYp89zpxJz1ZrXoTtzFG6bi8mKiPmgQz8azAsbqENs1aoJz46XKY55T",
  "key23": "Bm4uSsEwjzTQUxmBGpRrBDjiPdKLjQxZ58ELnUsHHbdnLmCsbjdDryi583d7NvNzR5h92AkB8235276hk7DJiNU",
  "key24": "2jEVkzJkoLZV9rNwFm4jmrrvWe36BiKvsuY2JjWEy8JhtGQorHQfKvMfCd2rVYF21C4pi9Yan1YmuXk2c3x8hbVH",
  "key25": "4mKB9wvxuLUZ1Ut7iVCsR6goYH9EoXUzuTJ3ZoatFjxMix5t9CjWk4N9UsnErp9W5bbATa2LjFJzP7RoKij87xYh",
  "key26": "46sduvce2ii7BZrTLikhPNxK6xY4HTXYue7iXZeXeweMJ8nkBhQgpcwfhANK3zwUoTbMZ5KcPWBwiYQ2htzgqGLw",
  "key27": "677XNAVN98xcth42rCjf4LCcULxhLzzqjmcngQeUXHnxE9aw5P9QaZNEkxJHrGMWETy6vZQzsgDv5ijjqvTmBjWs",
  "key28": "29LbRwzV83fDqUNx6wK6Tt6m7mLjHkBkCH7kySkrzeupNjxVrkPDKnU9q7hKc5hNfQVVpzqAVvpcbWTioroxsYBe",
  "key29": "5h56HSvKCQK4nFT4Xrukx22kxEB2fszjbYCdTGQDe1PERJoDUqhQEG95Ukga5FZ9onvQn54fiF9BGNKCFfi3GTan",
  "key30": "3WaGJydimgTPahsQPWNCA13SCQKDeJj3h2CcrZk9WMQAx9693eaWgtkHAR1jRjaJbz8ydcSwPuRjGwsz6N92dJxw",
  "key31": "3dcjC1pTGthoKzsyJDz2ms3LzKL4yFuFHcoRUMabc5H6j9J4ucrSm4Tmr2XGotX1tecp368uhz5ZwnDYwKkMmQbm",
  "key32": "4rjkUhgwtz6uUeCD1PfzSLs98hTnQvRJmREk6TXsYcCM3bRBm1nPgdNVBrsnCeyoGMKikB7H3AqWscv1CwSpyigh",
  "key33": "4rcxmKz1Ld2Jnzsv2fsRvWYxJAN2fH8mWTC4ZyzwoLp4gsATYdw3Uczwj6hkyy7eoaoypdwkkDGQK3VFcMrJ5rXH"
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
