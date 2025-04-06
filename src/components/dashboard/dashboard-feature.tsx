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
    "CfJhdFkHQssgj4WdPrXBDzcFDbBnykA1LjjZKcFzYYcirN14nbWSAEmZELwiuJB3uMeK51oBey8jR3Rx9ULm4xA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7MGuPYEFzbwEhw5oR8fLeYRcHk398zD6BbLoaDwMLzwkfj5NMsagzi3eGno73SggUg8qgZKXPciMpevstbQ89wr",
  "key1": "3SADcdgXoEh4uSRp8f8iQZYwW2mHrE6vS7VBKkioCwFwgJi78Wjno46Bc32m6jTtgJAN51jpwwDhEzmPahu5qAjv",
  "key2": "zLDbZLyYtXSbrVvSWktHVEMWArtySeeTMm2FkewfCvyFcScLviCwA7G3bznBu6FqYLRF451QGssjkrdKBcnxb1B",
  "key3": "2e5wKk1P8sp1mE7innmLGavPFNYcHLXhhgapRS2tYFbCK2b3VsDRNy52dUV3KG6nig3WUotKMcPwbJ6v5dyiXUrQ",
  "key4": "63xX7Pg4ZKu9hB2qHHWUBWhYTbYjGMuLEDfk8T8YTxqJoEpc3SUfCXWmkKDqa8g4cTJ1Btg7WaG7yZazrRLvi74e",
  "key5": "2uQ37Ed2P6oJhPaDu3AyuwTzDRFB5ABpZEjYxTKYoEYSnAJCEEupCWj4rvR4hc7iWGZz6dyk4GBzjsUuXhVVdgcC",
  "key6": "3yResWKcwak8UzMpz31Kd8fTqJCWcBFDx7X1i9mKJSZTXS4D7CTsX1SAyWtjnSm3c6dutNzYU88zvKkyojYfGYKz",
  "key7": "2nfwDWvax6ZqEvkUFTb79v7WPe5xeCTnREJTjEx8CottNwa3uKUSry9VJBCJTZLjojTSw2pJcpiXRKYTQC1E9NEv",
  "key8": "4XAdz5DCy7uJ7LhFBeURFgQ6ySEK32YcjgHvRf44PXogvEsKVoJMdsHeCHBTM9ZcfF4FdCwrS7JPL7sj6zMzYAjc",
  "key9": "3gaG49ir38FhELRnTZtrJKZg6MygY1t64oUrHRbDVnLqWrLDhZyMYu3csQMmfpbD5YCKrupdPX57VVXhdwuov9Qk",
  "key10": "3KcheHWtRTZcEafo3uEsQyJ11izBaFTDhnhLRKsDNDv3jTZdKsZQq4osHGUUZzg974RukapNL3PojuJ942MMpvRo",
  "key11": "c79GEtdPaBYfjgEWeJsZEYBJmMvd19z5RPN6F9PyVazYyiFG3JQhUfnymfD6FJQqxuVtHCDYw2R6chuYaaqf2ZM",
  "key12": "2uqFDw6HUhKovHhtaVCYe3f8J6CofLWCLe6q9MDVAgdS8u7vhU3mazpdv5N3yfK9ARUecBwMgTPeVtDhrQUoiyLy",
  "key13": "3D6aHGzsHUiwiaex2B3V9vMFSczteR5YEY53meCHGvcKQdku56PktqLGGVMeNW3HMV4m91E8YDPQcRPtyXW1pb9g",
  "key14": "3sFjDf4BSStBk14ahrcMUGLJR2tPYuFNUTgCS5tZRqmxCTz3dvyjwtuXccdky299MjBMEhqV1Y1dCV7eqeKGZ77n",
  "key15": "31jbAqQjypdq4mYCiYdrF8n8c2FDUBY5qxzSMKZ7zPQSjb5F4bbabktFPX7Qv6b5diScmFWBkigKC8NRxLB8EGAq",
  "key16": "5x86WeZCS5MytZJYAwFd8w7hzwJZ8cAXgjZ6C4dbAoEV6rseChwnUFL6N4gt2e58xb59bqq8iXfqmwkRTLLAyAcC",
  "key17": "5AGZjS3oKVedWmYnMS67VCV5gY6FH7m5RSatgV5AywXqdKzfTqmjWYKWmvxwSW1jZzXyEDW9GSMsLps1ePWbpRqu",
  "key18": "2Zwp3ZsZpzFE4bHx3MiAqMVLzJ2birbXtsGnaoJgkSpEBcFq43QRnESEm4TdxHGKs7NVWHZMvXe8AsWVBsQ7aXpK",
  "key19": "3MAs8KUbMwkrQYyEmdNVKisoBswZxFH82ekC1KqEbf9eje4CPiVSqsbEJvjz3gLVpGUjvSQcEK3tcfrxVcK2N8Y2",
  "key20": "4PLMGMTmH9wGrgH92dkEZRMvfZFvdKnjZuUbnHWi3N8fx86SXsXZGPWsMA1smzSNPzMJxKUtfkifcJnZCujHwRPJ",
  "key21": "3kqaoAaX7gXq6qT5JBxtqqSXKKHax5tnWU7GkZgwfvYZxvv1S3WSJWQDQ2ePaE4VWsooyuNy8RixZbnJwL1Q7CXy",
  "key22": "2or3obUaWSKHkPisGoWzS3esVbCSAaFJCgYvU5bFFbF2rJjSxLR9py5gSd67HoRHrkDkMoEDVreXhMzVRrSyHiQB",
  "key23": "3VejbrzrWx8C1RzKAVaMoWs3nfDs5csfBaGwejghUkiERDzZLqx2kPLDEKqWLPn92uEgDXA1GYT4P2nBgBTfvV2y",
  "key24": "45csph6251Ju4CmQpWW2XNtNw3GAgmMmBqwHtCH5oXq37Tg8YsTKpi4nJehpmA8nfr9EFbXUQJNSdpxPSQwoZzpE",
  "key25": "5zzTJ8kh9e6X1Z99TBvquu5JbsZvjC6QQh9iNkzr1Wcmu1erBSMMDqasa1bdoJcJHrxC6aoh9M4LM1UwmQkFGjs4",
  "key26": "2RAhnkq7NSpoywYkKyNj9uYVFpVwNUV4djhMY7mxF9RJKv8ogr32kBZKRyHwiRdDbd6FHiPCBE4M3Z2KmZfh7Rzs",
  "key27": "2ntPA2uvsHEQKPTi4cu4XscLiy9BnYct6WtQrfeKZbRsHvGnVuTsgjznjmJSY5Qm2XyXYDoKUQUhK81WZ11Tnw4N",
  "key28": "4GY1RRLCC2eQ7RUaC3FeCYfqx5aeo4nrojTUwxVkXcD8QomHVUGSYKdNd6WzMgLKf45JN6YwLSasRH2nynk3LjJA",
  "key29": "4dg23vhuazsT45ZJKUjoo6J6DyeewvRWsSiG2Z9C9CRf6CTv7Y8LJhvpkmKPDZYX9tNFkZvxA3DX9UFqbLGsJavo",
  "key30": "efTQVDii8UD9TCEAugDxA4xmZkULQEywd42w3Go9BCdY5dnsoXNfVuLgYBdzj6XmACA2CzKiNHpqDWwfhRneM3H",
  "key31": "5JhnaC8rpRJmPpWNZAdpe6WMwAo6sj5ArAocTYfLGc2qwdhHQaDtPJZGtrQYcs92s73vqS3cC2CoJd4GBSPctznu",
  "key32": "WRWWGno95VptjCP4erHhex818QDnzeXvTCJkuzrr5pqUqVuqHEnSfdAskArSSdHjsXsc1AQoLUWLS2WkYpwz2c7",
  "key33": "2cXQEPrfCt6WswhbSADbiFsnjgG9AWxdQ6pHe7ZnvKh36obKDqJ9uP6HS7zJuyVMwf3PdUzcosZmk3DdnqCUwvXu",
  "key34": "5RaFTNCyDCENwXwaxfVQ6pyaYa5HZPHajFSnngN8QLdLguamy9HUdpwdX4HCDN69VKrjHgb18fKaLZhLu3skWqKB",
  "key35": "4Z4uzrRefWMFQG9TuGxBmLHH5A8vqgq62qHHKdo1jMqjxJhEw58H3fkH1rvZMQGWssygQ5CuGqarzyd7TWLAND2w",
  "key36": "4z8gEMTvFLKYgbEeRG68uh8SxqGgBXFuuabhDaKmSS26zWLE8gYJFvRwZFSRoV1LYDcrP3NEmAYW4abjAiismJWt",
  "key37": "2X7uKXdY3c2oAVriTQnNCFyaXamsDVZ8MjcWg4RBqjPAX7S3QcgzJUuzHPJfT92DhK4zV39JJ2Fi5XmrrLnsLvdb",
  "key38": "4H5SAG7Q7odsYJgF35rmWsG8Vpq4EishWMvspEsdno6h83ChU7i7Ar6YmVt5i64LU8CBcwcLL2386j7vc23Hahub",
  "key39": "awCMrvXc33ajk9G5Mrzxuhc5u6NXKnAYAqaemyrmVZYESjH8zmbbQ2Em5sAvnzqjBpdUEStarKFVbkvALFgM1mi",
  "key40": "sApRP4Yjrn4prUwj59xLvaMRtD831CYiCYDpuVLnKDysxUEu1fSxTxJAs61Ph1wgEZSDuGyYb9RtAw6EgcD9M2u",
  "key41": "3gNtoLtc9ePMARDjmWqJPseccdjZ1KeRy86oEyLp33ej5US8XgQFHdrUXRam2YhNRL9YiHEuNpk9Mp64Uj9dJnDk"
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
