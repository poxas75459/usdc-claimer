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
    "5oMqEWRmzXQZNeZmr6NL9tEwmDSygvawDNTbhFABB3sc8fYPhiAL5ownUhU1uee7YvybAooyM6hRkrHrfA7mCcxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RhpqZrqKBwEA8Vk3yvu31vP5edtg6ubeNRSCruFJ9EhTMsTnoLQUdBF3WywAXacUmy39UavKLMvKvQwhszBgJz7",
  "key1": "4atqV4XeA9bk4PN3SBPahxpXPWvRyd62ffbc9G1yVuh9FzJTeBZ9BYmAtZV8pBr15GDiyDWJpM3tRm9KKAf23RSA",
  "key2": "QYzZujiGLiwCHsh1vg552yE6uXe5Q1TL3VKq1Tf4DqxGRQWEQnCZmo1LfRN67XTM3qaNQALnSCpC9JL9Y2aKAmB",
  "key3": "2k1usN6x94H3KA1qj3VQjUDD7F58DzyVemsN9QnEvqit2LTjnT8znxRfNQ6WxCRqZEtQzQWmCrZgiopQoA1BAFy3",
  "key4": "2pKKCtxkytU8sxZUzHdzH6a7r71ft2QZyQErapmJz78uZxn43EREaC7pd3FrRbtgji9JrkYew98snDwstzcoisWG",
  "key5": "2tA7HNDcbohdMWaZm6dBgvHo2z2SdZo8q76qVa3JUcq6EZDqUYfAkoQ41EnrjjEyhtFZDBztKaWsz2N1MgfGwJ9s",
  "key6": "59B6rsEyfRQpt3XcsjMbbBWeapyjYGgqjuUsS27v5YAWR98Ka8ga4A8ZSZg35LKvhzTppbSsmEiGzqswisjmwXTi",
  "key7": "5FR6cQrXeFkg7ETZ5YKMebFxTqM2Re1JWw9oVHWDJiAcPDC6wJNtn9HfBe4ejcBnuuw54o2A9XHDEKmrNFhKRiHL",
  "key8": "2xZ4Ep7TsNtk87TFcumtncnFqfaFY6yFy76oR6VX1Evp3jbSJhwo3oHf762T3Q14T37o6poXKBJiUjWpJ4BGQsdL",
  "key9": "5uVeUnGLR61m7Lzqna6PJkGCRv1SdUJgR7UgA3KPiqEoL3Qazr8pk6YJpd8in1Z6McJYEwnzJ17yB7RfKamLJse4",
  "key10": "2rMF7q4caAQwmdMPp6oz1p6E3MmbupbGRpmMUtF3VTZDn4FSwSn5JA9GMtEmvLYkQ5k6TUBYhb6TfpVuawDhqHkd",
  "key11": "3VPCq9PAd9StyLaLbBtf2LCE7iHcGED8Ue44inAGStKwzasbdQsvvE2P1JGTegEY66QYYyTedPQbDJMhP33J7Zfe",
  "key12": "2ipnxsB8PnZ1U7rXyTuRhAbh5aGc44gdmwsUhVhFBGzGyvVAyyWT2oGJgWi7pixHoyg4Q8kAUH9LPNtgn3LNacid",
  "key13": "247vXnSnuiZgnYrmXuYUpsDSnoXjWu3tkcBX8cFTLihUvuoQLiT5gt7Cd8iYAFBqybXT4FZ8JiPuwfVc2sB1aLjq",
  "key14": "62yQWAbLhk3JyW4s9BPeGKKYdwnTLFGFLjR8NNd5cN2PxJ2mLcfjGDBEGroZMaVvCUg7zg7JVMgmfa4JKqqrkLAK",
  "key15": "4s3caMdWdtDFWGfapebGdmK2AqJC5ubSftKqnwTMQgeRwNuE5tHmYJPDUQ2nEExS6fxXicJM7v9tzgLmzkNMApDK",
  "key16": "3QRqhAsbqpQSUp6CXwKUmnNp4fmc7vKXmsSB6Fok5pJuRVewxheuuuNmQZoPHWb3tjikxZjDExdzXyWAT8FkHCmZ",
  "key17": "5JsL34tz8LNNLUYKgTkM1jZtaZ5xXU3FWVjCJuZ5bErsWzLnBSpDgEJQ7WVTcFcayeHBat8pqVYnhTxbSHJz1Rj8",
  "key18": "L3pkfrhnSQ8xDrzcLJ6ZjgEKHp9wdBzHvYgR4VGsK7xvsKpsocUQj3s31AzJy3Sj3gHUQ9nmZiJ83f9nAbFH5H1",
  "key19": "GU9w3CLCkuMQy5MzuRZhaYyREam2p5HdARBCyQfYbXiDF7pM9T4JZfNYhgfF2rY6uhVMFK9QYBuTX62phSYeYEL",
  "key20": "5NUQCBDKQQ1BP8QjoPzyGEjyZUbZF2SNvGAfLj1QCgt2k63ag8F1rHFdfFMxa88HVdFTdLRrsjJajyoaif7raVZd",
  "key21": "24BNxxt4C8LWJg4xpS1HyQvCPxhHYMgEfYMLsrr4tnRZJ4UUFfKA5cHCqAFd6RmgBFy9v9ju9BdYSYC9mVTdYrh5",
  "key22": "5BnEfgjewcCsDSh73v75V6NMMq9S7EdxEfLZNvNUQB2E8WmJ2AANL8KjjjVCqnfwonpf2KstvRTfW7JtBks3cJfW",
  "key23": "3Fw5cwgFj11WMS1d59dRGt7PevH2rWBTV8kdraMh8YJ2xvZpW8edhH4jCLtK9ZmU533NUGP9yQSm6GDn7WVYS87h",
  "key24": "2D7ipJJCrjgRbiNHAQPY9w8J8eKzZoaJfzErnnoZWrNgqdvVxuQVeRoxR2Bm4ku8Fh1KPPToYV6XkEfrQD64iis4",
  "key25": "PYhY227vrGTEaqw3uiHKCtQMByX25ofdXpCYj3ZEgduPEims8t6dKkvPNqMqcUAuHHYyXFt1Esk1hF8eCDpjcDg",
  "key26": "2G58uv1JLQAAQKLG5mfFG1HinZS4y2wPbiMUJbAKkVa8xY5jjWcm8vL7u1CAM5h7MpKG6HdNKbr2jMEVeoZwTgs8",
  "key27": "3Sb4BKYkSKALryQ1uL942N3WUmFtu8uyUfmBkVQuYHChwFkQsQFuU8w41niJaR13dZNtZdF54DW4WcmiYNusQ1fZ",
  "key28": "3fx1Mdfeu89JWnQuiG9JEJiFknju4FSE6iv5JNVhYT5wAmctE8KWMh78r6yr7TFmdTBeDrunuPcRJms8eLpNzFB9",
  "key29": "5o5uDKAy91fDpG3STNhzMnbT8UMfkvAQGwHqYAB67eh51hMLrZkfEFR4LPYjDTt54xGt8gBXynqiVGNpkWchkFNV",
  "key30": "5HQJ3XnSR3X6GsUjoaGj6osktLyLJ5pdwuGEMXqNasLMXZKgKx829mwa8YHs1inmHjqDou3ea3H81BN9B5ewpxon",
  "key31": "57udYeh8EeXQmiN5wH6UwZ9x2269ujRmcEBLiKscAnELRmoet2zNEaxRboAYHFaPB8gApMpqph5KQHHBsgt3YBZR",
  "key32": "2CGFxcfwzm3Ao5yERDTKtgs5nPCvM7ACWWrcNmRqWv7FAwnWHFxvi9vwEAAHEWVw8xbN8zSaTTxSTRUCWGwTRmB9",
  "key33": "62rfohB4q4SxT8DU9SVuPtD6B7W7eeJvc3wS6nRrfwEddpeSAd7BLJ5soFb75TNQ7NV2Thi9w2U47iAiZGnVDHqt",
  "key34": "5QEnpe5Tk5RjzCiAtPNhiwmUjTTYkJ6RHpskKXzrAqWPp3Eoq54yRN73x6VebmF44Rgckj1Gn8R7AmBao2sHYYwE",
  "key35": "5DLYcAYackEnC5ejE3mknm29jwLuBdf43ALTd13daxaZd768mnH41WEqKpURm1LBud9bVfRYQpmwLXafL7wA8TRn",
  "key36": "4a5mV8Gd1Tw5D4phZwYNhh582K1QtZ45poFn5zoNrNc2GJbMFe2xsBkcpgov6Frdi7mQkrqJ7BriC5AKCMNUdzpi"
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
