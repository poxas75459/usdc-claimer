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
    "2mgTfFoPqzaSrjLGTTPcxb7f6Poy4ahdPbyQcjChifehRnKNv2twMURb1zUqbCMxNjvcbn4bVr5Wju8FHggyMaX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vwGi1JxxrkhfXRtqwcGGMzysH71AaFiN3utpxniUDRbQ3tCaTdEfKK25A4DyQ8RhcfcmyGidxTRVdQ5WYT9MLzQ",
  "key1": "4ouR7J2L4X1MEkwxVZwqEMVmqgQuDc4gaksKtS5fNhwF3gDHv68zCZUzgiodG2gKRgDK7QUBPeWtz1LCKtiDajwZ",
  "key2": "5moK87aeyNuJLiYs9iUPJjUDkp8uzGyTQmB6pS9JYFziua43bLzw95MMvmpJNr9AmXWhfrZdeoFkCsrsCXQZGKhk",
  "key3": "4dfWKdfRtDuheYCBHmVdbTCiAXRN7h5gQapYVt8A3JcNifUXA1axu8MqdfZ2kLfqyfPM4eRprFcYtJgAUQT5sKSG",
  "key4": "2ZhwhpQ4J6JGPW1musiVBxujcxDuRfdF6ydjrpZ9UUXAx5EE3rF8NhfAhsbMbkYNmWAmEANRv6TG5KEL7UhhG5P9",
  "key5": "2KsPzJGLB1m6cCUKbCWyXgmDaCMcp8C6BEoz9vvay3USx4PDMhgDgVx85ccFjm32gjNsheKeWWbp1F52t1x1VDx",
  "key6": "31y4UDcscvQhrjZLQ33Acj2Y8CDmTsGND6jAoFKTte5VQ8Vvvgf4xXxhajMD3fkFt6nsRKRDirS5efQ733rbnpJ2",
  "key7": "3grCvemE6xZsE7MLhpnmSEdMvvZJErjsSnWxz4R2c8g7ppdBdouFAeZGjrwoJ4ZjtnSrieJPXnT2nRASqhN6GtZe",
  "key8": "311Ah5PpZW4gd9B4CFArMmXzjmNsy9J9L3b5yJt647YK1HDwFYBAGYLULnW28wGkYTcFiAxEaGo7fb4vNUqwqiV5",
  "key9": "4c7K84TyamWahsBUH2GhHLLkSpqDgNNz2XrYtm357NspYHjd96GxUSxTwDVu1sJ8WRZE6YFyrjb6pSspYs4yELjK",
  "key10": "AD4sryfPrRsqXzveNAjgownaCWN187BbxxCDrgPXWJHVSvcZjo6nhe4WyoDNy9GBkEtYeMM3oswrUk56Ag6vgf2",
  "key11": "5PCAGfDKSyuqR8uVp6RcQqMi1eDSRJ6K6VMrZvVpfZMsHe15T3AHGt5uGwm4uNqF7MZN2WA8hj7JWpFPwY7yDAcA",
  "key12": "5fX1PHtxLwzskVeExJfySB1d36rST2t6xNniaLbHLvPo9fdgRiNHuCyJZPmkw1SS9YcWn7oEMDDRSd9BViei9nno",
  "key13": "5CGncSEYSZofuHWHMgif5BQ6hg3K3EFcMbvkjTRMF7bQwZz3eVw1EvLmnqcsuZbsWd8gfQZbhJn5SAVL2HcsNLB",
  "key14": "5m4dR9QrNwKxWRcK5pdso4aFKECbB7JQkKCbtsbzxx1DNbxPeVM5VYiHaNXD5m68DpvyZzHxfLn54Pw2pkLdEsvZ",
  "key15": "4AfREeK4EcNNyMu58nneNmBvzeeMS7819oXt8XAJ1MvS31HGgxyWbzsq8wHMW5XtPmMWd6vsNtPJKmQRhtDvDWyd",
  "key16": "314YKs2MdLiQbvZ77XjJdBeg8g49Qcw7vJvUCnLAcE3kgSYJt9iND5qqXsy4je6CbCki4ZmP2eHDRW4cTH7SdGhW",
  "key17": "2D6uVccuqurERQVj9Mg8GgvcJBUBTvZrNW1zw7NCiieaucSdbXmorgG6i6zJrawbXG8JNEztXjXer6Bk4UvkjTEA",
  "key18": "55ysPvqJdypVERApSSRejSVDCknKRXU88oKA6NYGr6CJBDypgXVAew6WsKqyadGCjg6UcQgvZQ9NVo3oesJzjjH",
  "key19": "3ngYEcN9ngzbGr5v4juyZm7gR5s3WV7E6cmksHDXR2MAiVtZdzdMuGZBenNUhGd82FcbHK1pXMQoFwmAEyjUXcX4",
  "key20": "3b3rLisKRmjsefmb7FemqeXDrGSzuJvjvSu73ZkJNGProgLJvqf5rVjp7at4RCH6xwf9EJDUPGvUFcqjzHLqW7Xf",
  "key21": "4DJmcNVi2RHrAbe2Fjag7aEGHUA8cxfh8exxtpTUHUbTR8xyR9j9mSD3Psv99RaewrBwKTLJCGHf1C1HFMuvRkqT",
  "key22": "2beCx5puzCV79hzhTtpaVk7KHyFZFKNnzBJYwdJxk2mfc2V7jod6uNk2uwgnq4YfVwPv8kHqC8xSU1jhkp3Jhnmr",
  "key23": "5D6oyskKtqG7jkPQdRbVM6uSpPEwR6cSPWR1vYUnJe1dmeRPVRG8LoLVQAg8nQ1AdQfLnNqjifVAfXpg6Acjp2VM",
  "key24": "4xL9ryQ4MesPaAHHH7wSxTseDk2UATkeSj3SbGKUMBhKTq8EVSASG8SQCwePhYAog2Bu7CSzwyKppKHUMiL1PkWi",
  "key25": "jQVxe9ax1xjce6E4qcv8saHHQFiywgvjneAZ9fz89oEmZkqS94EALVXss8gMAfgCz5DgMrSKMmqVymBveTvNyKD",
  "key26": "3PzNFnWxHwsAXCpetTvK2H8kCMPpfTfB5qFPZo8W3WE3zzgCAq4B6ZsPaHXgjLkhY3p2hw8J22De5VjQksb2Uc2i",
  "key27": "4JhxiWZRLEJr6cdkTdiKpX4fR6PUm8rxaJCGojX1XotLbEENCQsoxWiJKUciL4LRU6pMVw8PWnF9UxHCQvK2eR6C",
  "key28": "zTqvugSv7JFzG4Rj4ji8WnvKcCa2kL18x7RAgXm1tiXJKTSvfy1UMYNyXKHbphu5qbjXBQAbZwHq5NVUr8UpYBp",
  "key29": "33x5GQ6DeCgw3yxzSjERhwayUxUNUANbAsfyY8Uer7neJq2xZmc8PajFijp5bLrbyM1KyW3GbwakSEU6SpigytLA",
  "key30": "5oXZKhHSneP3ptyo33doGufLRF2aqJ9JM7iXhL52PJaey9W3xXt7zZhxG2UBuwT7aLTzZtBqbccEUwTeFbCgJgF2",
  "key31": "fSxgB9r4QN3KKEAnMtPYLfP4umx2htZbtk7wiP6482kp8AXssSSDKHshRcwAuMWJeBQVQhXobq66CKpgzphEkZG",
  "key32": "5RqepuWRwisuYjWjuWDWQJ8go8QfU9ygNttCQQaCtavQZy7VDSyDkotAjSbAMfo99grBEt9P9dem4xWCCA2y1ZMk",
  "key33": "2ez6XGos9EJ4YAQ8X8YekNXjXuGrnjLFizisL6dNzxsKRWJRJVEerrgowTsVHrErtpoGrxCxpnF86LVdMeKaFifM",
  "key34": "4XqGRRX9AJG2XNof1DqsyZvhbhc9LVfJsktSn9kvkYkXiiru7GWZXkTG1wJMjk4fjVKYMzNAdGKAYxtH1jiq8NGV",
  "key35": "51o232CB8pqLbsjzZ9aM9wGar2Ssr68p7nErn6LxjqGnyxoN8Gno7hh5DQizurTBev85iDkmUUATwGPVkXcubHPC",
  "key36": "3HQ5YhAps6K8q4UGvkq2BKL8T2odLKje8P9ypKCVsFKacS2PmcJznG8SEFpShUkSqNSX2f6FZuY4ZH3hQHPnTsx5",
  "key37": "5bVwyLD6cUtjmxdyW86YTFTUF7MNxLRszgFqNzCMmhuRKrBUMftHGU55aD7b8JvD23M9shUoB9cccfYVyiuGemzv",
  "key38": "3FeQUAS547x3tepQgWwLqjZJFedccPYqs6qBcYTmB4zLVWLov5TpD68KzcUxYukE1JR6nriG7sWRgeVN7Pxjd1FR",
  "key39": "4ggzow3KbV9k8c56QJTyCqYQppQPxnF7vqY585p1zcA66NygzGVWH1D8mQR4qJ72jf6XNE98KAoHoZRQiDAYw5gh",
  "key40": "4tcy2VqTh4rJR1aTRRnxxHdpjyWtUHiN7c1orwfcBAqGego9ZShiRhvXTAb61Ko6d7feequByUcMjXwWRp737v6u",
  "key41": "5aoCACwnoXT2TBCCDDckvVzUi4yAXAbhr6EQL3Ftc9zuCPPnSJSwDctKZUdixzVu31wNmyMUTPjsqBmKHGbo8rjL"
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
