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
    "kv871NYR3Eyo8dgrVKXdeux9W8FNjzCxpGNThneE9daK6g4isu5q1T9BgNGMtcYPMKJHSkkpVFsQPNq2g4JH9zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NXY46MibavfXsrkheTrvZ89Cqrw26wnqDK9GV5bWTbgwcqeiwkau8ztYpRkw8w5YRHYk7tKuKmkDVmNK2XHvXcM",
  "key1": "q6hkrpqWK8sJ33bW4FXAopYdtXhW1DY9HbgT6QDT8WPGV238EgJqBSRMEoTSSk5QBG9yDhTHB8TYczFpvb1va6w",
  "key2": "n9ByK9oVEffagQQ4F3PFvK38xtH5dybpLxYnFffSmvJJySErLKmU8RzssgKwvBG93pjkvu38efzrv7FsHbubVrt",
  "key3": "5n1UVZsNWBprkWCLCDjqR48cVFDPDpJrAkGdvP6foECjKgJpC9ZYYvSx62r15taTWfrm5hRdPLvfeK3epQpcLXxY",
  "key4": "kngoXU1BTfZuw66RQjxrukFokqyWE6Z4dSdBU3FQJfAjjjGWvcTqXtrniLdw8RuYPkyceA6mBA4n8PG8mkxBtG2",
  "key5": "4FWb4oNCTr1rpTUhuAdK6TnbUGtbk2yLAYw1pnLC38xTHWin7xK1DnZsgXb1uPDKhn6akpCYfcBfEEocrG62Jw2i",
  "key6": "3nxAkU3hMKiusp2AqrAK5e678roFAN97zYyEYgPgR7EEr6XqxMaQg6WB7yccf4kAH63movCcQ3tA31jXi1LsfGng",
  "key7": "KxY1wd9SWjESgLoGZyEJopy12v4PvkdoGjnoKXb29Bj8nVQDF64fysGvsCfJqCZcQkAck5gX1AQP2ACPXi2VJSN",
  "key8": "3YW1qnjBjSSaa2aNxmfHzG9FgCMwZRXPbKCAPJueVW9L55bxLgtzrYUPVSVuM8ZLwfEuffPKF1nzzAQGiay9QrHc",
  "key9": "3cGLgyFXKWC4trA1zK7Z9rW67qABSsHbtrgbpENDtGZz5TZSfpVaUK5xGXJ4TTbmmptUf51GsAj2gor6yrN6XaJE",
  "key10": "4QhgwzWhg4c5rcFArTbMug5s3HtffQ12AnSj6yu4oGST5ADNk5j3a1PBABRDyoGt5FENPgFE1XziaJu3dH5ZFuS4",
  "key11": "2qWn6eQC2yTkjBYWd2BbnSCQDYeffA2bKVuUXiGujEUbBgdL2SiDQiVGuyD1gsXvatTj2JTe7VjVj8Px1xJpaY2n",
  "key12": "59Rd4ADgPtiMhqKmYb6DiyP1vU9P63wsNPfnzFCkACLzE2MEQSPnFkzYWAcwRCw3iBgvKwkg6NomM9bz9pjedtB5",
  "key13": "4wxgBqnarfvL6RNtWNHSPsQ3sBxSAqN3NFk2xWkGTVVYBUedo51vYA4CdMjWoCsu4p6zhToXPsQzXxDAZX8s7NSc",
  "key14": "4WQwF7FspZxpy94VhHAFLRbHacts6yosuNPZDEZu5yQ5DCgKUKWTZp792oTkGbw6j6aDxu8hmpSxNLcT3eMu8W1n",
  "key15": "45dURTeKo9TdZA2puUMcixrx9bCfaT453XofwXEY3cK7oAEc13DCaPCMuQbZPEDfmEmatLmrBzt6pM3no5oPxp3v",
  "key16": "2iqHSfWJoctFqbbVFJTXurVsLY2TLY565RbiH5nEAaJm9rUgCjdaPixxrs3tp9wXNb6TjeMYb9J9Byzf19jJs7zL",
  "key17": "3EgLnFzwje9NfAMjWVfEd7Cu8yN5AXYjSwyZdVSjt5PLomxjcQQf2DAvtRueuamSfPgQtmcNjn6oKDjRbUHcJfRv",
  "key18": "2rZxsjNuhLTV3TUJSqNYbfuuLAy1jxXfcC5UQJ8kVkpV81axbxWRHiW8S9LFn5mb15v575UiHvyeB6rrT6dsWUqp",
  "key19": "2rQVEGtrdQijktYWuPe6MyoJ9Wz6Qxpk4bRXJx16qaCHWCwsdXzF2iSXyVKJH6qPqGfabFGdxsZgfCGKuJx4KQXN",
  "key20": "2QUg4ddsrvdV4eA6tBs6zADsAud531afzRQhEn3gK4ckwpsuFqLQMVmM6uJ9Qpyc9NyS4t6HXSWHkFQqBMmX8XZD",
  "key21": "45hxCdVB3tTvFqiaEf8RztSajoqJK72xvfgn1pZTkadBo2Hzs7Mg5UQziNqJNAYexpGTBYdBdn4mEKDrskKjonDj",
  "key22": "654tyihrSHXiH2ioyfg3DaH9Khk4rrjNn6ZUG93AeqsjPjdHCB74jXUY4ccEZXzPUWc1FUxRLMW3TScvNxFFmJzz",
  "key23": "bmqMukNfGA1miP8wMtPznMUYX4CJt8Z8DcTDTgNruwPeiWK1eE7RbA9sW1MhDqUjciQTZxJdZxnCzFT1axvVKUo",
  "key24": "34VVvMNFcccFbVGtv22pU9UCK2FdwxnHcthz8aMH5PdQ5xQVpgMVKCN52i3r5uADvKjedxYFSkYg6s5XYL1Assdr",
  "key25": "53wSZAiTi9kEpZN37JfSRzedzKmEU2wrCK5YBj9PKNsjEABYRyNphfRPc52f2ArBd89jivRq8hQmKz7c8qZ6zG8x",
  "key26": "2rCr12WoexSh9b3b2FknpUJWJfeEWxPKdPLGV5aUDTbEayCk1eSe5XJw7zYDsFhHcp4EBVyP6MRuRrApnTJ1UvzN",
  "key27": "59Ddstx97MoVvrP32hNxiUgVrcvf5guC8jhHQsgfYHVtUr66m5KKepgYEBUe7uNYjFiyGKmPfjRhUYpSh6eg9bDP",
  "key28": "55YhVYWqXsKLu8KEwzSDwkRxcyCRV3zEcgLhkY7hBW6oxmV1y4PvRGMfZUQGo8AqBeuGY4Jg5GLJCGgUVKpP3Kxr",
  "key29": "5ibNXwpveB8h3NY42EAQE5d5y8dg9GZcGnrMevbb9DZfQJjMTerUaYd428NjpEB44nzhTr6EwgC7GyRKkJguGG4c",
  "key30": "3camrao8JoEzeWnuAVnb52aS4iR8jmCkoipPYPP3m9pw4ipEdTpXEcFzhVxG8pBWm85WiTn4Mueb1fpungAPG9rj",
  "key31": "2w7ssZDm7jkM9H7oFSEt3bqtvdTvpcjKftu44VzJhgKS7HwKYvfAu4wZmkn7MsfhvF5dc7QUDV5HZzsKdLX6pVJJ",
  "key32": "4HWYkqzPjaq442UscTAnjv2fiziJkRDWiKeVRBQ8n8moXDwxq1dk3jnfUmzkfF11sJJC9m9BeyXRJBwdwbxXPhYv",
  "key33": "5oJ589xz4x4chArTE21zWip235uxvsMTuonzgXDfFsiZYuXKHuo9sCWtBeVUYY28NJbKgwoCqJPoFPkwqQzjz65w"
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
