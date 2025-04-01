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
    "3otro2Zdn8rs7mwt4REfPqJ5CjeAwxSHxsFhBdwbpF7HhsCQeLMrLRzszuXeb6BXfQLmfpyLas1yvMDKm2ZPuzr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uk6MDKb3ikr4qgfZvTHJhjq9FVcnubYVctrKagWEWfgbKtHNBKj1Kyo5nVPFkaQ444WCYYBtRYqv4efYpTcCy1s",
  "key1": "2AiJJQzaKTR6qRQgLaWm6vP3d5fKp82GD47wdQveMHxS9G2VkngLwAimcUq9X96M1y4foNC9yRHw5wRwUDrpYGvH",
  "key2": "3vy69ot6dqSPdP3LdzAWwDR4x2kXe1gbCFFR65rZBaJuLi7QQwz9uFnXfDFjLyXmNHGbsrReZhC7sFn5YQG5zSuo",
  "key3": "4YDpjk8usUw7SVeqfSM3JPaXhwpn5ZBZSrXMnJMew4dWkV9kydGooAKPu4RtJgLs7BydhKS43v8xFW1MsCJCNM9M",
  "key4": "5Qkc5q6hBh3m5B9KqRgu1wqafBjWRearPd3irAiPD1SVSBFiwH2YtSy2RkHRZFk9FmEVmohaAvB9a6ZQL6AbjZVb",
  "key5": "4DQznQcCRRfX1g2fpxWNW5BvC4v5wqvFC9dktJ1JXZTHcrXFGqHrhG4cnKMhBwiCtU9QXou1GmEyvamPXPsHW2qt",
  "key6": "4whtLZp1emg9VTV3vHaPuaDHxvyoaBSzUhRXKFywkYV4DisVCAhkFjq1Cij1UZiRFmFvtqqqJGMuEPFsa6cA5KZP",
  "key7": "62F9zrvkBefJH1epgjU6D262ndiLJD5KwT1yvmoSjwv2x6ue59exmJU2a62ZyATBdDK3eodRXt3T9bmxkLSwGakx",
  "key8": "36DwAgcf2ApqoTe7RUwF3SqsMZHJc5BKbcLdaD6g8pU9mPqWMga3JchutA8sX7HqJSS5kPHLroeLYQfHXcrBa3Qt",
  "key9": "4e8ab55szfCYWEctScD4Kgm7LJohNcxiBj7N3HHtqDjKeibNyx9LnzzUQ7KEYGUpgHC6cmG1qvx5ZjggMQgprVXk",
  "key10": "41NB6HuNizoX98jHLxcsXtTKQ7a6dqGDQgkAFDztYQJ8bTXvYXtRF2bGHeE3qnLT2aLSYbyuC4YDP3oCQywH72Un",
  "key11": "pT9EgSwZChA647dEnVMA2uKeGamduycUo2jFLf5aoZfUTkJnfFEqvQPZQ9aZ9gfBRaNDQNCtWcFSx5BYwSRTj7n",
  "key12": "5db8rvfGBc7WEvPasn9aZ8QbSCZ9L4t5NRhy4e2Ajtj2aScqazaDxw8sN5nhezrdFHZuBCvsDev8fg2C1g2uioP8",
  "key13": "5eczrqDgmvUtq81c12pQMqshZQSdQpZLzNcx8a41TVJqJfN7giDYFvMdEzuTqVy5qNJfXmqyDTgPFRdjHZ5XQfve",
  "key14": "4k59ebzobNGDvNXwDRpW5Lz73dTpkQJdi6F63AHZ48KXo2ocvzec2izqYZYrcfkqaaR4jnhzwi8dhLSDR7ESuKqX",
  "key15": "3g4fkaXjNvpvkPD4gfCxYNRCj2oh3EG3UCxJH26HvdACnFrR7s3GsdqnATiURdKmj6MhHZcL5XB4ChTNsKHzVB6f",
  "key16": "3RenXA4TFDbQ6zq6Uteh7v29rbEQrksFa5s9uShA8sa7D96MqhzKpH29LxD27Dho3sdqTY65rtiwHVWgVNXeFmAp",
  "key17": "2LvRprdZBvZbEmeXWjpKgKgtxTYinigV7hmuf3MJF7dTWaVDAb1DLG323YE2NR1wUtv8CDKbonsYc4QcE1DefKLH",
  "key18": "fVWfaUuRXyaKK6qjrdvLh2aKXUDex3tL8TQG9Jf4NUgMj44eGJpE5VvpcgRuBhKwCu4WUNYQsSTKxdpSaTm7noK",
  "key19": "3LqfyTFYpGHorRASADfDfxE4LoTv8zHUhsVXD4LGLVPzdfgQ55QH6sAep6pJTT8MR5thYVZYKX9oYBpiyJs9zDp7",
  "key20": "4VDBCEWfqdjJ2zXydWCJk268Q633ecgL3u5gv37YvUcJKqqXeQoWDkzsGMiPtChCYULxyMpjpcZycavip2HWoi3U",
  "key21": "2evAjeFRFcv7qWGQ7qJNopo1qRyzLmKaszV2fdGE97Gh41mg8oeJXivbY8jp4HDwenhnBB6scE8j36WMvMSSBFNC",
  "key22": "5S9Ltu9C65Pi9qJrjxFzG9uXYr6vQFXFTi91Ji2M1JLaFBfDKjgmivME7xqn6hjdXc1FkeKbioVwYvCP6HSJezW5",
  "key23": "4aWyaDQLb3MU2xm1VKiCNtWYAjiFUpKiF35HbqffUeseRwuPjssqbBjsXYbghV3fCRyKr2mPcK4x9R2nXcqiSGfX",
  "key24": "gA5zczaGAbrXbNVQiYRqHXKHvVM44RGutJqbLxgGNvTCjgZMpRfv56mwbNZMCnemVMme5rwsbMQrB13ZCWbfG6t",
  "key25": "5AuuL83nR92nteqDGfsPuKWJEXgb1xwFC6wt9tzhmhtcshqUNC39Gvm6Xw35medg5E8Mf9462kHZaVzfhYgJZ2GC",
  "key26": "vbdQXrFdd3ELNUPGeis2joZS7QYZSHE3ENrCUNMJ8w5YUvcVYy5CnWZvrpmP4njR9UyDhYuziqMEqJ3yihwew1k",
  "key27": "2BhfrkJT85H4vQb8bzwAoADy5vBZ113xbrozxhph7bqR5i2jnF6Vkyt1ZH5VW6CnwtRM14uGrdZbAAY435GcrKg8",
  "key28": "5sADvGR9hag78eWidXJVzCBJ4ArAsJueXuMo161Ui2zj3iGPeqxyBpayfFTPadB1BhiK6ccbnWD7qXvzVYRb1USa"
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
