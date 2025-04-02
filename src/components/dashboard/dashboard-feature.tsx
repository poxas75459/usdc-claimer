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
    "5CXcBzNjd6nrb3NhJ4cGzsUHf97CDsifddHhyYf4o6FNkC529zmN7NW7okFCR2MdRHro3MpoKpYGnXukLnaPdwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G8ZvNJ3HJsV3mzeegP1H8rDhBf3BURJGQiRpSJ618miCRSaW34qFVBnQ9YVXg7JVpDU8U4ThhtNE2YwcprdXd8r",
  "key1": "3h5KUGYAKMVkXcbRqEomeGWVDJHZGBX4xvcrwcW7rkHVfYbfPDfAmfsx5dBa5iFJ932wAUUkZExfp4NDNfPqD5jg",
  "key2": "2KLYt5svN1uEWmL5z41ZdzELKnYxQjMVNpUrJpXrVSJnFr5NhrqTTyZGPccvdUecqzLzGnpRm4iQucQ3hXeLuUd8",
  "key3": "3rnqoXTfSkjQGaZhpnfk1DE2qizCHcxgTwc6HUbQv6QH5BN3nbQXKLr8gnM9jvC97pEBTUN8ehNaDKZsFZEfx6r",
  "key4": "3vMfbFmBW3BdG9wxiZUhsfkexeLkiXwvm6ym8kuz5WFYkCyFnNMsLFVnsiZnACcVkKUDLbJaXKLeSvtVvGao1ViW",
  "key5": "3NpoNvPqccq1wQhU9PhSra9W882rfUak8bfqo6W9kVjUoHHAJYYrW1MmsySuHVYd6c1xNdqqXqirsfATsYemGQB1",
  "key6": "Nfbu4Ukrp8vHdrasBds5oiM7D7i8ic8uXxTQnMnULfSr55f4s9dUgCWEH3ycfxyWerAAH4Fw6j2HRy8578hr3ux",
  "key7": "3bnYAWANuN92RfNCV41vbsprUndoqaQ4a698MYw1DH3pL54pYheZZte83zHeT6ozYWddkjVaDDT9PggCCSUFiyTv",
  "key8": "5WPY1TTPjjKi9XuqtTah919jBBCaQistK9JxeVnjehnwbyJY8BEF78hphSWVqQQVfiJm6GjZTZU7zocy4EZKUuRc",
  "key9": "2Ug16P3nvZmRxW6BpA5xdhE9AhB2CfLY9aikPqwedZniw4wYFpXAoJVnwX6uoQtYpUWzPF6Xw3U83xJzhmj5S3kq",
  "key10": "4PcLLEpaW5YUuyRNgSJ7JJd1zBjtt73zyFMQ1UZC7PYNL2YaGdgzyFtmf1uX6Fkrxh5ddjM3nuz5WBKfuKAXZs32",
  "key11": "52BLphdtjtaLF2Y4YGBkFdmiZYJNTA99M4q2neGBLhWEASBxpbT63bts4QjYm9hxQcNLneu8jJAmFCJqUjxZoBqF",
  "key12": "Ei3tJxuybLNsGTNa4TrRt3aTHftsTC2Sehk3TNDkSMqmBSEEFeWf6cqwRi7qUvWHso1k8QxCvoKUGNdknCbjqTn",
  "key13": "5JRiLmx5BzGoQYyfNFUW8nYw8QSEh4jcuAHBdAVBVbzkZ5KjaWCQcthbDJHKtF3grDXtodDC4Nm4iXCx4X8DxCkr",
  "key14": "Yy72GcX71f7jHBMHovpC7dW4ZmSp4dmVnA1UjyKck4Bd5Vb3S9kmtayspbi8ChS8A1CCe5HepPjEDw9TcUigL73",
  "key15": "ZxXmLSEaPDAh27eUck6hKzRj243wY6X8kGrA4dvb6EeJhdHfgJG7syY5Ht6zhxbHxs3eFD9rcjAvHkfQ4YYopSE",
  "key16": "5QGiGfiJjwK7gGbtP7BTVvBF1CMLPpVJQ9MuD7iXoK8g6AVmYHxWGNn4Natq7mdS8DauvGQUowdg4Yb21iAEKcbn",
  "key17": "5yvD8KKBxmuEe6xrNuph9TDynjiJ3xDdBJMVnf3RtKAxqDDjykaRbQSGHWtwMbwyLQ9BZLNSuGjgKB8MxaNtBxWz",
  "key18": "3XjTDsba3pa73aXYDCoSjZBdiCVJAzmsYE5se1XGjJBrksNn58GQTb9EGfkCCXaS8Geeo5hymSimTP2a5sXmA8VY",
  "key19": "4cavKd65Xiyv6fTojzREuZKSsvJLE73EX9f9nBAAX1WvNAS7duhJbX9ScHj2CDw4vT1t2usDfLd1UiK4eamoD8zb",
  "key20": "3y4jvpawGzaZ6kfa1px9iBKNW2rdpWZCyysL4jBynvkPTKoaZ9LaN6f8xzUa6b9Uxv6qFZ4oGTgJrjxAvWZVMi9D",
  "key21": "7VYbCfSk9svf49eDzY5HYkSpMAshFDNbKeGJgEs9SEVnuKRainXNejpGio8EgLY4j2SqjuJiHKNiv4P8GuPgSsy",
  "key22": "4EcmQR1SgCPnfJRS7LpehoZDRM75akX5z1jCLHmGqtehWgePzgNDBJdxyA7nNWQmfYXSJkCE3nJPXyrhjADX8WYA",
  "key23": "4vWNXogRBGZgzPzHbWxNBTgFWY8x1b62wjtaz98Eq95eJZzxNnKMjzx7jEqKVYWc4R5c1J6dwq1uQnyYd22GsUrf",
  "key24": "4JKwXjSjQUpi9UaNUs77fE5BVy25mYxiQ7pgSrSzbECis96LyvRHL25EjvwmqHdWBvKh7zjiBjWF8qumNHj9Xf42",
  "key25": "4xjTPWM3922dhE7cwR9wiT9EMdR6wEsMqJpvszXRDsnggDvc7zNRXDrqqJnsDncBnWf6kR677RbkEML8FFeouMvX",
  "key26": "4DDAdS5bPppTTQehppDH8TC1EzQLDjB39L6vye84bMcJhwr8eSPHb5pQpnhRsESqaWUXyU3JhNq3B3fNVp84qd67",
  "key27": "4NkJANDdAwwCoigzmKZPrTw4KmCCjf3pmKrb4TTR13jmbJQ6H3NejPZYJhJXHBnTiSNYAznsZS4pA4iuxn7V4UQU",
  "key28": "qk9LqoSKd9xx73eHNS1id3rENojPDdpq4PhZ6o8yShhptLNDU1rrvHc4HGkqyvfmnUY6FiGTESsUTjsmfohWQCA",
  "key29": "4fmDwUNb5B8yF83bBKrsFWYhbE53i9JRURDHm7kTozh77jNu7X7vptHXnkrvTEFJrzKPyRfDUnJYTtBf1QK9RAdw",
  "key30": "3sckJdU355Hx3Zddncb9Kh5t2RXdJbK3WFVA268umtQeRF61neqtKrrcSrfgEyQz997AtwHPwtT1oGneyztuU7Wg",
  "key31": "59Jo1hcqH9dJ4xm4B8U7R941ths7sjtXzeCb5oVPVxVdDJ1qMwsMSF9q3dHwq84YcvL8tNdEbfLNBbEGXwtePPBe",
  "key32": "3jq4NbfKt9RTD4nt7RDfojj897hTFcr3Fna3ekFGWMqyq6KiCMVcLsaGuUfxqEABDkWd5b8bPkkAofF8HwAC7fiw",
  "key33": "2tmgt7CnBE5nQEnj8MdwX98sVpHc3R7xvZrJZQLtmyYv6zQ9epxcfCjrux5aLNjXQL444yAriPWuFpKPM2knudvb",
  "key34": "2svgfPxVsPW5EwPfeMvkVj5xwJ1UkUtB7n3eZXmryMHQQsKs83ipZEy1aB5VEGfd3yDRVhBAqCiEVZAvsNwVrToq",
  "key35": "udSj7rCDTkF9DMfmHHEiH85vuV1RsLZNpzwMkbMXUBMSPgA5ruCZcbGGcopX8iNR4aNinEZm5BSnkuVkG69Dcn4",
  "key36": "4LDPuz8air7MP4JKqsY64MQyMShc7NDFx7yEUim2z2NfM8LakFZws84qFfpghEpwpmXEdbTR2gR7n9V5coiEqyw8",
  "key37": "4bi4CwULa56c5pckuMpScyTMhbawQTu99GbLaYa48xspVi2eR9CRH8embHxXJ4HxFZBJEDYoYbQBC2BHLTbDzAMy",
  "key38": "4R8DVMAo9c8er57TWjeBwU2m4Xik3uBWp6uK7VbbY1CEcoVDzJpnzWrfXgVGJp8xdXpDah4JdZqb8eTEWNjfgC4f"
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
