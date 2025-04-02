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
    "2EBHkTyS6pDVrcTw41ZckjiLqNiFTJPwqWaqU6XXD8chCfdBJ4oKdmP97H3tcouucPuigyZQ3H5SBsA94DGPQ3KH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "252nZdQEvdbBmdLUAX74GSv1jqCshLHBCguqTxjKw3CzF8fBKkkysNb3cxTz4spX8ZmritkWPzsmrcHQMQEKKiKo",
  "key1": "3bw9etP4TxdYke8cjPFegrq1TJoKdcTAfWEQd5oByupmRKQfePB2CGurgTm8xLXK9135nKWo6cBZ844jfMrJ6Z8Z",
  "key2": "5sUYf15Do4ouv7zARwJUQ6ugyYqx4pVk82efeb4LwKmi6EhsDyP5ZUfqoKFaNQsfEfV4MSVUPZ7EnZPEhZ84XzJK",
  "key3": "5QQdc6LSXfR26EZqe1gfAXUv4pn6zARniaoMhkhoKd9sUe8RJhCY2F8AoiqdDKhPbT876mjeeUJgGKPx6dsmKDZc",
  "key4": "4qgg3nAmK52TSt65p4LdM1aKNn1LoG4bJZYjPGaSb6AkTh6N96y8aqVgoLJ99q33QxS9NrPNcmso7bbGcTjhwuAi",
  "key5": "2h1syWgcRVXjNxnzvkZS2WsDZ97oqkuTZsUthNjy6rTzY932EfcsCsQu7R1MTgfXmnLGnJ8vQ2J44A9xmmAeZLbQ",
  "key6": "2TkCB4nsQHnWHK44GBzsrE2LYxqPKxFyS1eGnHBcTZeHNzkyBkJmaZPUAHVoaLjWzGuhhoQmj4XaAPfnffRFFSGV",
  "key7": "4ZB7xr9Aax1ewALq9G1dWFjssQFejkds8As62AgXpM1wmzzTrdQjZUfurmiH6bbp9WirRMHoi73wdEVWiEixJvVP",
  "key8": "5dVQaCmyZtProHJdSzrvtWr4wVTDgr14VNFJFyqvDBguD7Gan2VwUrVqTeWbt7SvsEoHqRcPgG3P54RcN1aNQh3s",
  "key9": "5WY2ApoPEQiV9wyevKJ2bBT1Cx2BPFvWPcx7ErBdNUGpAuBt31jsFjGMrLedXCxxNFoR4ax7G3ep79h1vrrcotp2",
  "key10": "5JpebNB6b6F5BXpSABfaTCsvWkyuf587LThMLAiiPkUPWchvFETqyaHRowH3L8QonuaLJEZks4vvJaSVF4XbFTGS",
  "key11": "3uFNsj1heZmYZCLjqA8mZx2oniALGXqjYgeFqo2yt3v5sjBi8iNr5aqN2it2eLW7pcoe4LTXDrQLARogMf1zzsLr",
  "key12": "5SAFs93kFAmepB8CXFx9dHbXiiJCij5STSiGMfcH2e4WqHuUqwy7pQJfb1vHbGNY9Bi6TPMWV4S6mrW6MJSWqnmm",
  "key13": "5SWja71RUBuYFGUXpLrdfzut9tTqNCNi8ZjGmWQKQKWk7njZYxqXx86azLiBN72kHCjBtYvYeNoGvQqzwq2ubVH",
  "key14": "i8UvpwnUrnScstHFZkUph9m6ejkKvusfFD99c1PcWcnutHj15Usg7KHq7TttmS69LXiB8NbiZvDMGavTJvc9xHT",
  "key15": "7Sp8vQR2Qjq6jMRHG3PM2wc8RMcd4E79qwA2in4dBG4hsqYDH7auKGbQtKj1NH7wK3aZu8MHetYCZAcGDGkx4i5",
  "key16": "5X4e7vm8G3r75js8sD2hq3P2wR9hSiBEHFcabTbr2XzPF38tcET54dEZu75mmoWfQzRiY7nnE2w4i87bZWnNURDo",
  "key17": "8pATaajKQdUPkqPbUyZZJ3cvMHWXCf7stAwtT7qjriYhJffFHqTz92emu6Yk8jU97mFiyMBp54duUzYyhDmfk2j",
  "key18": "3gBbwiX6im2R7jnxNqK2XQhPhrdiqwgPhCTSQKJ6EX9qAYAHhzzwh1TX9coAgAcHJDbp3iMng2X37PfDGN9BJ7Pq",
  "key19": "4mFURqgHvgrbEniEBoNs2ZgS2cGMPM1jBziNXdFroiwrFCnFMmR5KkjbQZRarmsM6zwixuZ96ySCVTGqyhbk6p2L",
  "key20": "2h889UBqndT2HKWYu2eJJFQna6yjdfWkfiwSvS6xxABn4g393cxgRD2CcK2VMTZftF8h9XjLLxuVV5oH4SQEx7iA",
  "key21": "z1Vavg9u3svjhkFGhn8E5i4X2ypWFB6c19kMVbeGKC98c3gfjfwWAHFMD9JuMgyttzfWFZa1yZQRN5CzGvZ87VB",
  "key22": "5mSfDXsLH7T3fpm8nNEZP8fiUpC3cC1GTx9GkU8Y6iWh9efugXi9jJWV8QcqKxaxRuPEhQYT9CmpoTKJQN84oaQ2",
  "key23": "2Qd6Smohk2xSvuyd7qE8c5Qe7v3mrELrNmoz8kmdzu7PiUzmaec2m1sUiNrXTK1EQJCgh7C9Pwqa3GFeST1GZEeM",
  "key24": "4pt5XminEhHRepDfwTdjdUXQyUt8JmxA3QxxewBQVm6T7djkYokpAdbRiEdc8y11H3SWT8DYZoe8Y46F75RNZEbH",
  "key25": "47FbtMCjEmiYjywz2Pr4T9SyCEZxDAKXWjTDZT568Yi9JBELQ9HUrjJTcrdToCYzXfbxJke7V6xdqz1gTMSBSmpW",
  "key26": "4mpy6QPp11FkU4v9ZYQReBQZPstTEr5rK33DsYsPipFa9n5t4Vhbq32ixGgLDrRfJPoXdydKJAGrLPptrQJVWoCs",
  "key27": "2tDQzAG9mLdQ1vyU81fE9QgMtk862pLx4nDEq79NYLuAJr4aec5gUF1BznNCMK5jRdhsDDJBeYmjY1SywUetb4Uc",
  "key28": "EyL6t86bZjzJds8nfjq5M52vWhqFt3fQZQXrbVN6VzK5UC3UX2zM3RQRSKAmNrdVdEqxzmQftwjVWBx96UMZDcM",
  "key29": "4oEjqzFx7dbPSmCXte6Sx3nLb3QhtDjHL3Ycr475gUSu8ods6Fh5Fv5oBctC6mk4pDoP2N3EwpmrsFU7LTduPjML",
  "key30": "4eyvYKDCZohLVEVTDVCR9hB44sVq7zhL1G6L6oPeQtYTq3zifXSsk5Nv4n8FVzJnehA8rTBzXPy6dGicRZ5m8wAN",
  "key31": "5aRn8sqFL7LZQmLrZDFCE8N5i3VoRNtga3oZFQQnoHex1AzgkhijxNt2RU73Wht5i6yzyXo1N4HhFgJbBFdgPvj4",
  "key32": "5nGGyfhW2vVQcNxjrZMPdzWkn2smsgbd9VcGfBBRHYVH2xNvK4nNmcfkktTTKcSkgVMvXzPaD62YtE89BdR4w9h9",
  "key33": "5wC8A6xiamYr4ZoX9KAHkYxmEJU1apRzz8bsEaUZRqWdp5oZy5qwx2VGtWgqDFPCTjibXbWDE5uncgFdRmXdr1cV",
  "key34": "38ALc7ytbo689i6LDvGGsJdPQXhJFhFFWpm9dCrGPyGy48RF4uzpV29dHorbpkmqdu5cPjbYVf3uSQ68Y5HPhiAf",
  "key35": "2hv6qubxd8pkBUjfVv2WTE8woyVR8WgWEvEj1LvpMAAwuvXA4NHYC41tn5tQ5DSE9wp2jpv3K4uMpnXKaJV5e5XX",
  "key36": "5wE2c1Tntx3iFkiYNvQJU6GtJrEgxUKTQENd2i3ucDsZrLVJgPwfXaCKe3EuWfJna7ei1r6nr9MB48rxr9ufWEDQ",
  "key37": "37y5WzX7iHseUR4YmZLZCYYyEhRb1HvXvuG6gJsHAJzAY6pTbhT7MbKBPSZXGYHSYerBit3GkpCcoMDRDNXKNjgR"
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
