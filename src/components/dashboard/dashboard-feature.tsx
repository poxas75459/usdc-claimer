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
    "4hhrtTFZZBe21BEpsCDQYNHXSXbR9AaDE9kSRcE9iChSk2PQXKB4QE3y4YVgA3xzNqoUHSu5YSXySmjAWNG3CAPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iRmQVzLzZkEKQp8SGygdeXhcYCjQcKT1hJwcP5bM6NsYXuXM32mKTmbcQLe1cFLReTvo6FBBr4vNZz4qDU5XEkp",
  "key1": "24cZgvX5sYRML6Sur2Kw2HaYmu2ur99VQqMPPZ5ELLFFiL1PtonpRwafpvk3YrSBoH3yGsmng5FZRydXoPSHvV9M",
  "key2": "4odP9XHikAPoG9557KywQJPZ4K7t97DzbLBAkXFS7UmPY4ZyFYB9hxuMohqHiTPkaUZ8aUKCmYUP7wMaczfZmZvW",
  "key3": "18Fjx7i6kAy6sfWvJWsJJkHfeUYPjvukJUsNKu1ounHcaJTvpHcNy5PmDcLW3wiov9Bqo6ysRzPEP1T5MSwR1rD",
  "key4": "3rL8i6YeH1naSAEjXGFwWJR6TwhwnSKBa764M9Pe5obwzJfXamD9NBJJxDiu12ghMJfbx89Vw76TjM8q3drcksD2",
  "key5": "2XTYwkdLVTZvLwz3TyZoqFfwwSKA3qJSUqK3cKJdnRP3hKWpvqwTLiA8rkmtck3hsnVFKbFmeFttYJDmyDxok4T2",
  "key6": "5G1dYLwqQSCxNd4NJd2D8p9p3Hn5VCMj2Pxv75XnAwXacHVGfrQAVihZk77tiAdL5mkhpSW9nj9cMa1R6S8NDJxc",
  "key7": "4L1iKhMi4sZ92N3GoVFnTDnddduewQFC3vYKPRazhNxWxT8JGVtctQh7EDE4PRC6VbmwN3sxF4YMCCi93XwWQUGT",
  "key8": "61Gstuur2e32A4eZ8Uq3yeXE93WfUz2f3EY2s9KVvSXmWpx1mwj6bEqs9gjccrr28mj8JTozs3BLaNvQvipAXmTP",
  "key9": "3yXcfEy3RYcLNxHNDoawB95Kbx1DuAgE4jXFNVyvNQiu1FPdGvzERDQNkWvA5nQ49XK2tjWETuXfrzUqP8o68axK",
  "key10": "3igtbN693WHeHuceTSrNktuiYWk1WftGYUxTADCdS1Fyxnq9dhucSo4HBSnExCk15R2oHzi1apusHReRGKNYv18A",
  "key11": "4qFpWvJEK4zosMQ7pMP9Fe4S2ZCY12urvDWuHMFcE9oWqewfJUHoTy2LNkNE6GUTjRAzRzjFzuu53tqMZBUyPAnC",
  "key12": "5gwR8eZmfnctk6XjDWxAHBMryrLdjCPVqoX4pAM2RrD6V2rtWke2e3oh68tXR2FJeyCC8bAswvZmHnRSmBqVSBoj",
  "key13": "4Pkz2yYq5Z3BKCqCNJRnjKruAnYfkX2FGMZGRAsCNVC4K1vxRdMpbvXKrE1ZWeJD995UMs72QybwM9W6tLSYqrG3",
  "key14": "32WpuxAyMLw6zenBk6an4ivgHpEDzVFYtRfA6mX1EZFS1vjZRVq1VAgjgDZjrbQh5FLaDi1jmBLjqTfKqChWMBrt",
  "key15": "3d9zrzQWmNTwzkk3W5avqzHHSyWKAQ9qjiX7GdoGUpRbg11Z3D1nPmseCYddKKXdZmGJpvkYAzE2dqoqACJLyGyc",
  "key16": "589DqQPGXAbQWY8hW5EKBcP2GYwrcMUTmcMHDEsrU9TzNoijo8HCze5fKUwMNHe69Smg7mFzUV1AenAAUFonRS7k",
  "key17": "2xrhiiRwrZq5m1f3g4FyZaeWrvymV6bcn43uUNLhYmhiAhSCN8sNyoy7X5WVcQ33y1fbiZfoJw2yvAbsTKUnmX6C",
  "key18": "2YA7xu7CJthWYHdxbTVKVU8fiBogQwRooQaQgs3NiPMFN1rH7CzV4fFywLKUsqpsoiY8huuJpoyGk8mSFRnMkMWN",
  "key19": "SH8ZseWGMsQ6hxdEQwf5MoSvQc2QP9UTrov7TfvGZu4sukpWatoMssbXRnYV847oXKQNXKMbZkfxdQ9NCo5xWcn",
  "key20": "3wGYJhi2MYpNuN2UQZZJXFW4oXtH9xAzq9gcSEEF8D3zfMWMCRCmGqcXczoNi9wDQDVE54JJc2TUDc2F78LPyvaG",
  "key21": "276fp9cHEca7JLU4k5Fzm6X8KgNnW8DmUvfKJ1UkgesTzCDqJjDBkoHs7FSqiVs5u75et7bqNN2DmWNXjsatTLjh",
  "key22": "2SB4WRxyaPZdkbLwvyS8pp4rVDW7uTXro3k4a14K8Mn8eu9N7C1uwrgYke3RnybHwULiuiuFpTpFBVcf3RwepBrK",
  "key23": "4rJLUnHSmrnJLRhKuuhsNysiQ87Tfs5PFYhBuT1Rbwr3KW1Kp7QqfVT6uamx3GWEpZ3QDRugxwrnJwtdKZiohpAQ",
  "key24": "2ikM4GoKSrNoHC2XSLQomTEyaWxGc7GBih8Ja7cWb2Cg9hXyJFVetj6b8fGDXuhbRH5zL9mZNPhxcFMHxMJqXFb2",
  "key25": "5MNkn7APswqmmfdmoiLjGVKd4uAuVpBGtsRpTTXgjmLCyrTrECtek9sCSJF7c669Xj7hmsMUMoidC6o8YNJ5XKMx",
  "key26": "PJSrE6ikRTnhqw3dWVT4PwhUjfNbQLUuZkbPCVyeFHQYBwXwAXxZ6eaCFCfzAspn8mm4qJPZzzfohsurDy9jefs",
  "key27": "57qrqRzbk2WTjdYLgihJ3iK1rmN6zbM2Y2xSeSdkPzz7EJY8kaXePEkCj2yEBuFFjBgFhLMXt9vmMJRg55z6XU61",
  "key28": "2J79nEuCxXLf72JMq4j7FkzDGzzgTu2YvrVNuukCxWjFpR5mZRdZ3EXvJ9juqZNf1oUCYNdDpwjoAtBP5BQoGvGV",
  "key29": "2HQGGWrtL8VTT875hmNx6VsAMHtv4CXTf8JwwiXzRo1GMespRLvbMxoVGX4fcqiRDvLby422bbB3ZrtC5Z7q7mwJ",
  "key30": "58j4Mz7urcnRf3dwZH5txUoFiG2qjCbEYj9fyqisyCwJg5xVHgoLJa5zqsRGzUqXoxmjnGNtWWXzWUGUaa82KjMZ",
  "key31": "5oY2cA3YYJH99KnFcKbcACzvtcYwgGPGJdH1AhB1YmBzw9Ap72qnDizAA5ysw4ivV4KJbEzrebqD54549Jh6UR6W",
  "key32": "4pNLmkbMh7q84JtCZoSE3yX8dxcbetptXiy4AdCoNwGUVJUM4pFG82ZS1bWmWhUvju8qYx72QsRLN6HY9pxDpRa4",
  "key33": "5tDthQcKahU7sJdSWMeBgychfZ5iYk9UUu52BfUDv7ZAwLuXtnceyDx7z1a3ZLEcVWppdQ8Ro66XC4wbUP7eUf2Y",
  "key34": "2tJ7focQHtP35Rv3uGbgUSy97WbQAZiy6off55bkQt7HoHqQSWQfAi6NcLsCGKEhTDaErHopYHHUMpbevcxpBxS3",
  "key35": "1WyojH6RHV6tCpcNuYryPHSYjKEbpWbDP58GJSorouS4GPtWgmoNQ8axX3JyxumspgDjvippN7wALT7BWKqjSHc",
  "key36": "362hR8XPNPwRJT582454Z79TVkwCqss3d3kgMFJXCzayr6tqy5po89KkvFXgsEr1hgqsMgsafLjGYpa5Pabshzd4",
  "key37": "2YzLu7arpq1zBg4s24JoQzLHjGSAxiwKXGisnY9jtZyrmZpNTbqQ4ZaqqRQmZHvUQBEgbV7cxwvyTnvt9sfphHbi",
  "key38": "3oPt1d5g4Z9VpvP1mBJR9A86oLwtsKBKAqsavWGxF8RZcWxce8Xe4QmnhYQA9Pp9vvzyfwJvUN8KW8UjysaH8BKA",
  "key39": "2DtXfvVTp8TGh77irh6KSig9S6HD8TgGYZpbBJm2LZkRhGzveJHx4GcYjF8CbsV6HQbFJ4PThHHmCowZGxzhfd6M",
  "key40": "5jwYV4anZ9c4LjDNrGJkVQ1Y3dRarxj8Pn3sqX1jWJrNiJakngocfREuwEqj1V2QdorP6CXAQV6Yp8Vr2hmqd553",
  "key41": "2rTFcqwuNxnanLbmneDLNwXj2CAQG3oXBfUPYd9zQrpJ8jqXGS1zUjcfoyMCR1LFNq4sVnCAXUZUmkVbmUtCWqd9"
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
