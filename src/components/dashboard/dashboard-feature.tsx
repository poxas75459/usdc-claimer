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
    "39LAbrsbiyUkvkxoapMdyyuev8Cp8jGWVfUpqLWv5oy2GoHfe5RKriEKVPoEhR35BrT7WzzuUHZG3xZf74RfYXYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zG8qoCQJaxwPDH5wUNGhZWPhu7xUDmm3T9W7wCFYD3UMbonefMHJUWpjJmzDoLY5TvgnFkDJMzkoSXb3LBwNpKk",
  "key1": "4yVqER8iUYNiwcXEqyDayXoctWYKf5tjj1Jqcnp3qYKqNgCSNmYcH4XqerD6gAJKHwr2QnbrYe27kK9v1fW95udJ",
  "key2": "4DyqqhfzmmHeMmtH8fmJmK8Jkmw658FxvLRcdLpgxZph9wpZvSiwJmqvg9KjopCwuXky8LjxRPE5J9ywZWZHgZtV",
  "key3": "2WrJ8pPVoRxPTAMXAJa7LVaP3VANkCgT6SbFdRKBB6QUjRBZENREkBJP9VKmo3ESDaxuwYa2Xpmzcb6YGQ8yWH83",
  "key4": "2rXyMjWAGxPRkzh11gSz785Y16H1uZ4YGBF6Ut5EpyfY5PS7J26xuvpN4trcveV5XD9NFaaY14Jx6qkauqSiL2Lf",
  "key5": "2R1SFPysjFm41HdVw2wkcsQpbD5z7J77oy1TKy1NE3tejq7T3qoJQEUd9acS7AHTvMAis7zFqp9Uncu8SpRew3n8",
  "key6": "2uRxQWGVUsHeUEdJeY6ZVLj4VMgQFrStCCL8w7VKM4S3goz89jJ7mpTrStZsfpveu8shjQyaGmGQWk3tMWX7mB2q",
  "key7": "21aSs7zzPBo5arTL3qNKoMWRuVJg5o826qD93BVJGXaMsmnbHUN2cKXpe6uP4BzRFPpgCo2uNZ9qZgv4SUypsKYe",
  "key8": "hFKDnmAXd2jLwVYmjnqr9X9pati7pscsfcNo8SCy9FA2oa2Dp2kxFB8XLYmbn1ZFMMK1vzfVDXXQfcmfDcLQJnJ",
  "key9": "3ZkZ1HfRq7HFBNYf18LEcsw5e8iTvJ1Ceb4Ems1dxWRuCxiE3Q6zFfF3mC4m5TtjSjuWogpjD9hEXA1hZs6skRxu",
  "key10": "2xLNbCz1RHa5Y1U2KaQz18NjiEc9cYvfUp4tkKnZF4sAPPUiUaUAyTkuzruiiHPGa81sh9EEgGbHmRZuydtmaaKJ",
  "key11": "4vAFrGiP2CtzaX5aQk1xbjsJeQu95S1Z2UE5jHtWTXMzELFr8Z5TJdCCsbZx9KwmJAArmrg5HL2QteoeCy31XNFk",
  "key12": "5chCNjsHzGkkN3EDcJZLAfpSkdtK5rNb2CYQCXyjFHvD3U5ChnixdR9HBTmdvh1kkY3U7ySHmn3iw6nkrHRmACZo",
  "key13": "3dAfAXZnhwjxKXQMjx95VVrTAokKKDUytbiQnafHDGPZtVmx5hEy7wPw5hNFKw2Gx5zH17PY7XQUPExFnfJk7ox1",
  "key14": "457g2wJz55qHw4W9uujKyZKQdQJpLaNWY71oCkT94VJc1AQUdyUe8RaKr3KTRGUDphmWVkAHXtJiAQCxiD65GVhw",
  "key15": "2TPy4jLtP3XRuhVwh2xUYR8M6zTtArWdYWJwUWPfauzbzLr39Dgu15MnNU4Cb2qpb8SfqMUZYwSNpkc8a4cc9j7Q",
  "key16": "4NC6e6HnUJ53nvGn9rdvFiFwDpLNsMx8tmeVCeUdQjsng7ATFBo3iPYRnX2YMLYePTqXYqUt7GPiB1ifuHfyjS4g",
  "key17": "3KUT5jfJkybz6VJScdmLjgLkScMahNhuoMK9nxK981KxPx6fEtsmsYgVwqYo6N1SXNu1Twg6ePejcmTMN8edPVqK",
  "key18": "4MNcQZfywkKwwZiCf4kVqJLZ2PJQcuuH6yowG8Dm568vrymseQaZcoK1mpkQXGBBKPL9zjjGdTFYRygxP8yrEm8F",
  "key19": "Pq3NdkkrBt7hpNBBZ1H2mcxu86xJAW7M9oYDHJyyw9khaeVN8STf9CLahUTDE9gYyo8vUWg5ESgsMVFr6d8TEjZ",
  "key20": "4faSX9wqfgJswvVM7QpYwdt6Ar6rWTpVZe7sdwSqDUGyKcmQPcDig6fvFDSfqjRwFnBA5yrk9xYcu6bF3HLU2KJW",
  "key21": "52jdT3mSkNZv23Bh4UAQLT4tP69fqLyzdFxYq2erUzwtBvdfCzuAk4VXCypyRn1eQtJBDjkLHYyhpZjEoBDUaJ3b",
  "key22": "62TaGsvEPJNhxzgHbSZw6T5Dr1VLYYkXKace8M6wT4WP5Bt6x15NZoMmaVZBoBH6PEurNrdu3sjy4zVUEgPk48o2",
  "key23": "2uXEGD1BTjiheYB5ZjXKHXp4bGZ3GcS97gcvHsmfFuV9EQVtQ6UsgHjgTkyqH1DNxEGtiX5QANiN2gHDsZVpDeGg",
  "key24": "jpMBQg9trfyg7WZALkt7qA7HiMa78EuwmbML83SVW4QxVK3LeSDiPuiJ2AecPY4JXZd9VzW9ajQZT6nhbJZEzZ8",
  "key25": "4fyGP5kMXL2KGhbJtVf5j1u6SrHcGEtHMLzK6JgBBE7YhXb6MmR9kXskwgEtDs9uqEJGKarcMBtGrvvhH8Dj2e4w",
  "key26": "3zSsDTQfy71chHVjexkWBUk4RE96GdhCvX3V4upTmoBXYsXpNqXHy5i3NHfZB7hjdnPpDoTrJxr4hKxM4XHzB8Ar",
  "key27": "5HSHMc7dEyMxsQEQEVXFmDmJTyXFimkJSw5G5LK8MNbi3zn4LWBLG3Azr42ENQMLVRY9E9BRtWQxTdev6zUwwZm7",
  "key28": "2YovzUFEm5X8DP4p4yaAw5HT6qnj2eA23BnUounaGo8u8YJBL38dL4pDY2ZywNknfCUvh22eWoULGvhoJedGCyKe",
  "key29": "43mpmVG7AvjCLKi8c1mHmAWHZfG1dh3WA2iwQyuAk6KtAFSH4Hayk8kc135PMjDaBdwhSuzRPKY9KxUCufYbDivG",
  "key30": "5imfpcCdLNChFRKopgSmeK7jLxomLNkyfTEyiEHkTUXWgxuA2XBGhJpzLPr9K6JUissTQEheqACkaby5T6iojiFs",
  "key31": "4F9pKzrp3BJZVxvwfDMM7eHaBbeoWzGFjhzaNVqL4rXXsBU6pghBKkLRQjT1SFw24k3tEDT4G63ARK8taKeEaEEV",
  "key32": "wuZeLZs2qpdStLpYjJTTVWX13wScSTCV86pekQurnE6PdxGGhUhi7ZBiSq68cqkMfs6wycKSG6FN5pQQBGQiXyq",
  "key33": "26XMjN41o6Ckavbf8K5t5uh2G67f2kb4sPGLTyxqrJuWuoVYoXeSVn2ceMb4XW6JGmDghnUpCMzvSTfEFcQDN5kN",
  "key34": "j34VHdzAswUuMvbeQS9zZUAJGChcrJxK9ik2UNGu7ru9Y4c9UDmLoPh4QQ5BHJ4AhGSPybjoHP22D5Eqa5zSH27",
  "key35": "56HLGUfSD7W9RQG1Wk7Jo1LuqdDbVTtVUANuqmowme3sGjBgY2X7WH7MfmHzEPyRdcoNTkuURA1xS6JsSbhcddBW",
  "key36": "5CrWB4z5w15bfZjQzEXWbVu181tCq7oZ7QMyczMqAHdvkB5ZHs9WAg7mEHrYxvtrEaiUvGSz6b1nkRVAMLgcvM1E",
  "key37": "25MiWQDqFJ6jbhx3whX7oTG4go9pypfMbiUerjrhy7c2uv2Wfd6QR7u6X5A5BXAjEHQiVW5Nwweiqe4WCHVYCwjb",
  "key38": "3LthKMVj2QBpnYyRLpkVKaPLAwSzRfrr3MJ92GfN7rAULTVm8UhegVX5NQfqcsjzy27ZdKjAQjh1FjpM61CvnC7j"
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
