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
    "43WCLu7VThNyjyAVXfzJBsD2nWE9fERvLu2ApFYrrgYzGR64DLcczs5JMKugcjmsXmz9ExB1umnuj6vqVYFNJykz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CpjmqvshGhWxyEp9LMVBjk84eqpocFXXv11UkEfQzc5LhHwgP4phiBMN1RCYAGKozREiQZbmeVt5L9FZsVLFFAg",
  "key1": "5jHJj97BoYjmFZE48ocBZpyJytyLddMwU8rk1xqjdPyaQ27GjEMu7RieRJVR3zvtpVBvYPEUpxbp59KQUYv3WuGH",
  "key2": "2aRnstnszdr9eLnHuKhasyJ9DQ6ifcS8R7Cj8DHnT8hRRrpWGz4XbL4L5Dn72BTaXY1YCrrKwLGoCYGRfZfrFj7u",
  "key3": "5aNN9AEddWd6RjxUv5DUDCosDAqpzZBfeiSf3zeZiRSJt85xM5YM7kvCqJx1wAGhX1fpg8f48CwjY9y1s5hVhiyE",
  "key4": "5enCs8b2P2zhBcn1X3fXH5XUCRG98Cd9TcGGqcJcMLKYetUraUUaaaPspZchSVUDj4MYZp3RTXx8B5rzstupCEQy",
  "key5": "4TLyhkqKdLPwPHqFvf2dtg3sbMp92HBtJERyy9bMdgZF3ymQRj7dDg9bQYYXAu35wgaR8Ef9MnQmyLmqxBRKnXHD",
  "key6": "2mHRrpTzHJBHafUbvH2ukTik5jLK4fyJKWKiK4SZSPNJeubpavngtH9RJCf9mSrUvBC17ynFi86LRuycnYvBUwjE",
  "key7": "3GiHBM4mntSjCvh8JwirKTWiVkjwKAJrWCtpAFQx6gG68MTXRofFmX6xPj97RookpmkWvU6ZpwXGBKaseauYKExJ",
  "key8": "5JBceFWGxqSwvthFnmuXtbPbhbWxgztUWPPYLh5B4SKtnxNKkMomt1sE3tvyUWwmcG2oVUQTiEG7UnxqGV19EMnx",
  "key9": "23p7wEZpCKgEFvo8d7ufWLskdCwsSoBUxdG1VxrZBwgkkLWyrNEgKCHkNwWvAFq26yVZ6Pe6t3MejyXxgFhUCF1k",
  "key10": "4yVDg4iFS2cp8C9nhNoBhtjFzFNry7gFaNsNGXmmij49WWbrNcAGttGc8SURSd2HQZP3JsKuauHPema76T8C8HHJ",
  "key11": "3fimf6vWhXfXn7pr5Ua68zxfBh7pwPhwLGU7mwmEnYjTrwFjMRjh1gpvY5gVGKAKHXcy2WGW2KByFf7Gj593tCxN",
  "key12": "5oah55J5vniXcYKerHWZhRjbn9mXPeM8JYdXtS6wr8VLKyJ8mKj4TsJTTnvFjuHc1bzau9DvgVcSk5W8Y5S3des5",
  "key13": "61hK6TnDXNkeAxZsNdjPNUasK7MooD3BPa95jPQcXbYdK3WP2QR7CEpFfNGiDMcF4YY17MgHSLxjRHfpPu5CNEwP",
  "key14": "kHTZBe2RicgX2nDd4unEGfs3s9fMei7uApgi6wMizVuJXmxWRipm4nVsRsiZykD59ZSQPCLdweKQkRLp7268UEL",
  "key15": "3becD9JvphwS3AuT1rBiMTBT6HH4PGgWGBxd38pq9s3LSGGQAhZbigGYrNg3sScqcJ4aqcqYmR7WKmxRetfzKnam",
  "key16": "33NmYnYNTTNeJqjmVmkgLKhPkaCUfWKFQQdeHtTncJ6f6hreVwRWpcXQ7eQMEU2hnVhXs7ivfhGkQth8BKz8Apq5",
  "key17": "2hjasqVYQW5GsYDhaD9DT12MqgjaEc3vtrvASFXUU3daYLhKU8sYBZdVws5n88p9CguuAXDhHwr1ypAm98aUARVT",
  "key18": "2kqcz6qgFKeG2LAtMeZd2VziJ8oayzwTE1gEk19VajLdmKoEYuSzRotm9UE3qBpFQYymRdKUSS7crTAE3UmsP9Sh",
  "key19": "R1rQu3vNLdo6HqzwGC6zhA6pJ7bAY619fzoQVLfUzZcNjFvGno5WJZoESchvQ1sQbPnEqrZ2ta8PKMaNfK3PJUE",
  "key20": "4ztK6bsp7tMo56Xm4hwdKjXr56SAFGdbPpRJWgFhwgxiwejb3hHN7woGz2Dz1EHNzvdyqb2jYGAVunpMa1fDBEb4",
  "key21": "5PRRrUyQd2794Lcq8MRDcuvnA44uBxa8FzVqzfgfPEV9QLmKxLyoYAvWkHMSHPYMWAHG4ze2VP8iiwKE3TksFGkE",
  "key22": "2JLy18t5SVwcUKVXYEf3jL5ak1kh7EHsgBXNSogZeBdoWwVQhwWddYheYVnWGrJ9w6xDSMWKx2ZkqaRXkftPEWM1",
  "key23": "2j7i3rQ4AEa8FiTMe9yX2EZA1V2mYeS9NAjfcRkfvhB9ZxVg6uJHaFnH4FyX8ahyZikvCwQ5Mv1Uo37JvDyLWBTF",
  "key24": "ij43j5YKRDjA7WpmxQ86mRFRmL6qSweMTZ5YvuMa6iZ2H6GU2w36Lu3y39JVXSJgPTTEJUEAduPiKP8sQvNGUo4",
  "key25": "2qhciofdvnTRWTnduk5EUuu2makYP3xHyER8nWpPmQvHQinJBqytEYvJP8hvCN6q7msnbmJDS1tWs2Dfr9nnKB3g",
  "key26": "4KvktXPnX2fHfZ9uEJMzN4XY6Xud8NhGqLL6TezgFzxhefBLYt2vpWBgRMAvyJnVxjVXaSwi6iMVpp5BJyqrwrk2",
  "key27": "3PiQaL1QhSXX7TFi3cVghKewVf6q1GhuHsETbvwtboBQqEspo4TU9TcCPM7JgJUvmFsYZ9rS5F2Sfd4z5ZEdusmh",
  "key28": "rXFxJTNeXCjB9Mqu7pEuXQXT2kK3vyRyA2Jodx2vYTgFTaWgGwTdhgdorC5fovwqmEQMWmAGHZr5RM3Pc3YaCMZ",
  "key29": "5HwL3r8RjET8tkUcS5pVTEXGetcQx8L8s1ZwG3yLPnCjLnjHPP8rs2R9xLjcYfX9WVccJU9BKTK496yVN73wA7vg",
  "key30": "51KPppw2H38NZSPKkHiVSaxZsXWS3UaUmSQtaVAcUeARGiKrXKDisVNWNv8BdNTziXPessF1qTuh21qhLiP3JuZs",
  "key31": "3HV8kPtCZNmMQwxu6879LAnvQ8mvPTqvdGEYqsBjZN9ASHdN5wqzss53Qaj7o3eM7rPaJpAQcqnNFLGmSJaecenV",
  "key32": "5G3xCgHCF1tM8C1YGqkpeZBV3xe6XW2utFf9f62SdLoSRtRPbZMvyvqe5p8rHb7kfGoAYcstyKekGXesn59KLi3j",
  "key33": "37HeC5GUnd6zQY8AhKtm7gaaeBse5ZShoUpg1adxhJ34xvcXhKKxyyuwGxpCh7qbrhgNo3f8VTVf68BmMkRAuiBn",
  "key34": "5S6qh5Ercgows3owncnJKp7RdcBH5VbfbdwdGoB72FoS9xw6vknjRGwAXX3FB27DAKW4KW8ybJeD1unLYMKUmt5W",
  "key35": "4XcQ1ZqMsDVWS1KYPox8m8aUFBB5L62dnVJZ1fiD9cMz1uymjRjzsDf5jgVUPvZfyFJgfgiS7BvPcfDWdRcCNfon",
  "key36": "3BKLvdyb69jeDCyE9W5QhotW3Rb2g79cJX3obJP56WWQKUFGjErakPwM5i6UfjSSLvpB1RxLZzdA9ZrnNXAYZS2n",
  "key37": "54XE19pMFiVgQqtjD9gfxdH4ex9PEp8JwEAv5KyEMSgPg6j3tLndBAkyQnE8yLnBcQKPoUWsSZBCvsUfheaWJPQT"
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
