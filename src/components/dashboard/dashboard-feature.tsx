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
    "mfVQLZ7ZdKaTkpUsruSgXYJy7jYuZn6Pbo68hjiUL54o5njqZQDjRDedD5LFx65yackxdmzo677FhnA6xLvgk8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yrqMSr7HF9ygG7EXUymPkUzqzLTJPmDVgKVKcm1EFDnn3hjKBEryGs6hgE2npAzUdMJz8UHWwkPWQrDEFPFpT1g",
  "key1": "h3f4XKYSq8tDf1fq53wzyJQUSAN7NWeaE4TDjeiF8zajePzLHa1n4gkR4YYsf3odf7nutU2GShi6KCebQYgYiby",
  "key2": "2d6aMBzgM3JZJFFJ614CkEUDfmqYdeDKcpePGSKvsZ42QQUm81BkgPx8mqs5MKhvFBZ718rG6rCK95mYwx4e6VNv",
  "key3": "7qfgnPCN8f5HMzqsSQvfsnezkSXAhCcdJfX7sLePRnJf4ZCFzr5xxYc4MWCZ5CQYPjtxwnaVNxCMn7AB7ctk2uY",
  "key4": "3L3gz7J4Qcyww6hKqps2wovSy4L9csV1gDsKDyXmuYajqLuQo7ub3G1zYy173cfiXw45sUnmbFEUTQ9vY2gvGYfT",
  "key5": "Sh9cbVVp8zmvvL2H1arjUCEKbLJw6umHU7q3A4Po82BJHxuXsTVKQwfHkEejt26m1ULA2B2TguqPNwFprqu1YN9",
  "key6": "KWx6NXoQkLRLcPigQWvRZe1Z5ZWsmDEAwkyaWyDCffmtFsyP3C1gNm7ey3MjMPvFJzL2uPvJ42gp7cvtk1qE8Fc",
  "key7": "3zQRUPs6KnXzaSm8ZVpGJKzU5gHZJ7knxQzBpaYQnhBfhStnoGNPVZ4xFmeVSqqfJ3dV3m1FxZhfYq5pRNeA7kXK",
  "key8": "2geoQ3XqbGkRPH7RRAr2GFybWdVSUarJEUAQxz6kVAxdfjeMVQCP4iGKgjXm2DXstph83yJDz2Lvrk5gj6XqAkTg",
  "key9": "Nthf8sbLZnEABbuVLUmxu7uLdqywyxxT2oiNXEsDWCixTzWj9L6FfMob9cR1CHovbe3qD3FrHdw9LLKZcBZXvAB",
  "key10": "7sGMgcGT4sEdZhRDaMzw51riRNpupsxSW6muhv7yUA86b7fFyZ1YPARQyrSBWyCbsscwJyVAsXBR6uSZ1BWBas8",
  "key11": "2SUvJqchvUiCsR6rwmHXAVnSH7C1TiZfnsqt5WbLqmgrF9W1DrNptLQXQPhSgMWqNqn5H8MBmjQ1wa9qfdC2wVTM",
  "key12": "3eCUn33CLF6TyQS9si1K7X32izG23apiD9J4cGFR7qkppWKgiGJxvrbjfwBEdKUCRBZyu6WQrhiSHTapuzKmyUFW",
  "key13": "2cnNK6iuDyLZc6kGsAXDQn4ar4gigwkQDXEMrQSwMgVyMJeXUxgP3cQgfuNeLwnviY9Udat3d7SFKL7RgQhseT9v",
  "key14": "2bFoy9uFAj9xydDckzSzU31Y7sQWSCAyaAABCGhFi23tCYG32cdQpiMPbjiDgiRK5YgR1uReEKrqYufNoqnfTKhL",
  "key15": "4k4xy92H4pocDpTSPe5Y59E3vagjw2oN8YPSsh7qvUMjZk668W1CD7NwKjVPcxrVBBQy8ew4tMj1sG8RFnMcgEe9",
  "key16": "37C6GkXk9Kfso8PT1KemZ9Czbn1XDttVqKNrw8iMHkkXD8qe6on2o9yGiXWBC3Ui2Q66pwb439unU2uKovGptWR6",
  "key17": "384ZwSnf6kLorrGwP6irX68QC595ikndMtveUydph1ED4yhwvDXaMUwTG3STVvHmL1qfHmSVxrMR4A8PNX1HbEh6",
  "key18": "61UJ3MZDHCFjZdNG6yPm4UPWrik49uZKMj6D33WtgvL3L2Cnmff2ZzDkk9EJ4QTdPMUNuxRWrD6Qa9fT7KQmkvRU",
  "key19": "4Ru8oZ6PnYEV4AxrnA46yxj3oUd1X6kjSXFojTbZF65LEJct1zfL4sKkqcJh6TdCmivQ6qiD8JBMNPbG1tX6nxjc",
  "key20": "5NvXKNvpDYgSkKowdqNy3vtQSNXSjxmKVH4g78XYnp6CvC5X8z8rMsjkbSWbtqkk96v93D739TCvvdBuWk8Z7BVe",
  "key21": "Tc5p6nWEA9fSS8TFxwb6ABG5BYwFZ1XsNZdEA5iEUPjQ2ebuDj16seEaNeB87ZP2D32afL6CMQm6KfmAJHsjVvQ",
  "key22": "82tPxg5j5XL1SkCubWr3WbULbPXqYp2PxyhVHvW4Tm8mtyRaAkQ3prvTLVQTFGqwPNoG3u1SpKEh6h9YySFeZdk",
  "key23": "3smMa6jECRtcrryr96x4uakBbC2Zwv3dLCC3ijchbXuToS1U7jo7WQZbigV7b3L2fSS1rxbpQT5VyTpzRtYxw8Wx",
  "key24": "5WDkW1DYjLmZ13Vo1eviX1EadQFYf3b6rbZ3A3XzoKBz2uh7dDJfqDHkHgthFfvgNf5JNMmc3DPegvTTQHMMTXpV",
  "key25": "33jVJe8ftyTTJZizRX7C3NzkDW6sVXEhq7UB5jh4JoaFWPcSoopGBYM6eCL8HKS7LNCzWHNqacdzapE3ikEdBuYs",
  "key26": "4iHYNiTUrd474pP5fKdPjqcZDsVvoCDRkncLPVwVeqGyxvLVe8RGp9FZzS8KKL7h8qyp7tWiYxyqaEk1FBvAXhJx",
  "key27": "5mzh6QpVxnjERAV1kKCiQAp2YzazE26RGgTC1AJNFVD9WFL4BxaKU55QpMeobRtRTP5FWxfqXCEFZwWEneDJ2dd",
  "key28": "2zucg3fc7TjpkKL715MLQD8oSR3HdQfeMPmCTUSRLWNwmBtw8gDMibRUN3MCg7osA2A4YTqSovkYSCs5ktUxQBKt",
  "key29": "3sozVYQLiDKCVyjCFS3D2ZCwMXHMFsJfyPZ7Bj5oKgYtJCezGewg73KarSPJaorQtVoZKCq96y2dd1mCuRoKw5FH",
  "key30": "3oRSgpikQKRY9ivkJF6irjx6oJTwujD7zY6QP49KcYZgp2DPWS46eac9YkyWbx418YZaigoG1T51YEBTFjRUFjcE",
  "key31": "4EmPp2qvRGGZo7fqZkdycPw4WqT6pWbe5B6ZpM5wcEaqrHJHZ8H67HJUhjASaVjM4Yxu3Azi9L1VstWUpUnSGdT4",
  "key32": "4QzaG4VoGRGePXbnXZNZCKmKzcX9pZUSJ2U2JVeo98deVvQryAgo37vKBUGyMZGk1abDZuPU2GKQuPSZwrvJaCEk",
  "key33": "3v1BQKgBV5Wi442MY9eNigaMWYW4bmynNtzc2dJE7qidtD5mBQWYd7vLcC5HYYRi81wJnnzV4eZ2iQPwwhNkES5i",
  "key34": "3CowCSj1z4wukpefbXHdnMQPCxtxw44BCVVY2XXAWGTtSBsYgBh8VT5LtV6jmbbjM5Yg6ap6r3M684iocUn8Ym97",
  "key35": "WQZVzn8t6nBHgps7Gqg1aFaGmBcejjdSM7Emq8gFeQpexXPGPqVKrUcsb9ng52AMTp4u63xKoDcAMj9h9cYh4N9"
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
