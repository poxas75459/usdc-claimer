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
    "tZMXVSwJSgTRWtwSwo1vdXrwFCjVF3ggZWBHs72WKoJLtNn1t9FqSevmBMZrTEkFyVxddr5YDFX3RtHKA1LcbbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fdg2vkqwvfbuKj2JEU7EoG5EhVq3SM8Qd7aYyYqLhfzVo1AqD83uR2F6mqpJCxpANckXacctxmmFajn6cKiZDsD",
  "key1": "3beEPjysWK66yo6fmWbZri2Bh95Ev2FbVxht4o4snMV9Y1oB8omYtvKJbbTKnfDkSbP8TT2EgvJsDws4yGRerj6V",
  "key2": "297Xcvrz9djZUa7pKuGsnScTrvRPJiw6jvmfE1KjuLxmPbDhajMTaBQyJGBV2J1mExpbTrZurjd6Z11162mzAQn3",
  "key3": "63BduBjVnAhXVgnQ22kTGedsZxjGScBqMnApmccuK1kCxpqx6AuZzYYtUh75jZFgkzGmaah5j2G9bYoQSzTHDVJ7",
  "key4": "4J1HaLRiL7KaHenX6zVaAtVdxY1ZTu1WjWePaYMPfdcGvxSRkJRdiU1DauPr4ggE3Z5ZMN658Nx87GjWUsoCdDKP",
  "key5": "4bxVTmwPNd1LUNriESrrDebdHrsMt4M46CtSmbGWhEGdzN9d67wW7jwtd2Vq2HLRNLw7L7djj9gZ1bkNkKnqxzGU",
  "key6": "5XkMxUb138N6zxmKzPMsXCjYY9pEHEteNFztHvw5GzuXGvjcPRU4BQVGGDgfg8mV7fuKNgkuywM55CSdS4vvyoLk",
  "key7": "mBpfCagd4jt3XHXw3jKppYMoYLBAr1D94gtNeKtXqnpJ1TetS41J2opBgyxhKJobzvCL3gCa4A3y4jbB59TJECy",
  "key8": "2YePyxx5WNypHsob8MQLXLT8TWnwrCdbrqKxyfX6CSao3NMGrqqvPBkuPRSi518js83ZCbdk8RzwPH8Wr8qtWCX4",
  "key9": "65gJCShWU1tGrQeyN1Me8pnJDgnmHPDHgoYyv1US9YDp9qcdzox863ZA2F6xfdDcqoUg2APCYaY6FqU4wSzWuMJD",
  "key10": "4grCRvf7aa9MRzhE8S3o3beHt7qJ6wyXUg6hbC45prbrrMRYiQ55cV4hSymaWzCpH7WoeF5tAdVZEMwC88LzQVnn",
  "key11": "35QkqXEynV5sFRPC2m1jjNuJES168rwPhs23YHukTeZw1dy1VwaDUYkFxicL87KFgFiwPryRkSYSjbadXQFgUDWY",
  "key12": "HAJ5RvzxN4NeABZF2CcVbuFNdhTitXU8WUP8mWv1Jypdt3LbYsT5chd4eVeUVcaG3eUnitMzAUm8hJqAmzwCMNr",
  "key13": "5Rk8KtcNUJBSJKJ5HwKDq6Re1upP8QbCUZNnTL3ASuRjddYFYyGze8hoXyJfUqBmQaemCZnGCVUj7nQ2A1aS2jZz",
  "key14": "51BUgizcsGekYNJMw1GMrr8pwdjrRCE6vxLiY6uabBNNfBLN3tSx8r6w8rgjo7NZAZ9PUECLZRttfGVNXT1Eu7vW",
  "key15": "4cjKQ3ztp28wUy236D2M8nd4MUKuCmj1V7VGqxJaGFxL62XWwniozo9oRyngzheQ1yydHszzLhdgJHSW5n5irw2D",
  "key16": "5rVcdYJRwUpsnsSNuRmA93ZSZLztnv5igsQYBDf82YV9DLk8EZuciZvmJw4Wua1H12Y2nTwcWbmWhWecRB5U5ehT",
  "key17": "27zug14RVMhbWYxCVtffJwSUprdfjiFyy8XcigeCGQRfAstcuLYmKzZfBuTTRqojXjWabQi4j6UeHkJTZKJBNDHR",
  "key18": "2T4xZe76TwBAyncdWVHfRNXdB8wNTU9YFjCgtqJBKgtfhhGTk7GpsX23VCbp2GhzfWjSEBr1Mjfj9jNcDdUFGdte",
  "key19": "5dd3pQWxF3qdx4GscMrZ9ZDxm5hwbjXE78g82BStwoa3o2wDyBoEyrt4Xau1CUggf5Yo1gbToMg6vPe99tQmTxPn",
  "key20": "NS7wPorBZ8ytbUGGTSae7utqxpbGN6gU5FAh33PpztEfxfQSiJ9efj3Wfgyw4kyg2KGRAuuxGR3XbLfeSeo8aBU",
  "key21": "4Zj56zTuvhBDDCU5cqV4L8Rv1kiit9aJbwR6vN681RsCFs6YNWujupQaE82qqR5icj5H6TbVfh3hUUfR9TYJJdVU",
  "key22": "pninYjHPhZYDi5R3waBDtwnZyi8oA7nzM7EWL332KSFYBuvEEXCN2E5MNCz6eb41B8HeH2BuYQwJzKBf4KR43KC",
  "key23": "oVCAJT21nHGgJeYMkzRJTooRVXWFKFh1VarF5tSeNGLYsJwGuWvYohZoQq7ec5xFFaZFJPvxWcVPeHu5gRf9zEK",
  "key24": "2ytPjFGJGcrPPUgNCzqTMx3ph2CgtL6AkaL1er4fyv1eKX7boeRJWcJvGQ2LvtcFSuih6nPSxZGGxLumjMxtJ57k",
  "key25": "29KoXzyyQygH8fQ61v94Jdi51pGxdChYxjZRnRa67v9KmEKHVquTJCS9wY7SNRNok8iN8hHMrfuJaZNPuhf5G3Xj",
  "key26": "5nqmtLznCMtizGBADDYyQrUiDcyUUpd8WD4HENX4AyvSxsqhEcSsgfCqYLNTDG9vB81YszS7JqLaqqW2PumskwiS",
  "key27": "4aC5fPU1PkvZJQZQPo4eMwRsYrGkH3XcoZwmXeKdWtcgcrV6k3pwnVp5NXt3GG1oHdhyMAQcAcF5VgKdEVDZRWMT",
  "key28": "2yosgd384wEWf18Dy2YwoK6W8ErSGT8vknTwDq5U4R6VKinyMP4UxdazxQeNTcyyaKfJMD74KkN55XLbNuAiRHta",
  "key29": "GKmq4cmjzcQViMpzAA62nSkLDu5bKTtekoUQ38YypiYqMaLUiyw35FjAjtHmXMsMFZzMnA8ZhYVBxgtpvBgThAf",
  "key30": "4xNKMu1ozmzbNGnhxcUSiZxXnWxJ2CQ5jSqXSqfjrwZm7XtzzP5cuscdWZ8BjpBgekWjyiJ9WTD5V9f27e93yYg4",
  "key31": "3QwzeThnHX3uWb3cKkqpRi9RHasrNH33HF8jXtW3b9VBJ87ZTEshPXDzbiYuNcEXMi9a2EPj6QLc33iVDi7PoWnm",
  "key32": "3dDVxanusYef1cFR4NGwm7UkCZzC1HdcFpAoK94Mk2cHyNN1RN46u5WDexxGy32j57YpjC6CiqJUgzY9TZRa3iLM",
  "key33": "294gbsNRL1tNbUomQangFUqn9sRcmHMckFu43tjJBLVzUzn8CWk6hXudj7XRt6b4XjY5GEiF4cSTRi4gRqv63Kmn",
  "key34": "61Re6xJmGgQvjWyV7hcPMJzQXT9pmEtua18rvM7utE2Nmkrpa56T8WTnVeF6cxLbuTXCHo5ADthv2XrqaoTHE32z",
  "key35": "3mxZ9dzXQjZ5V3FWwRETFkvKsQqJ511juWvTDeHRKkcYnxagKCKUXwUZ6BNJXQkz71RszjtkC4tZaKAHJ4apTHar",
  "key36": "5gcg7co1J7KL9LBmETNKpu434p88Sxh1jzqogsyFj12cWgSvy5yJEA3hd8yN86aRbEhinpWrJ6aUZ3aJFHT2Ktcf",
  "key37": "64TStSgzwP8dynifw4SAfU3sggRooCo8uMkbEZmmtZKWDyTd2a7Eud3oernNubnomtDZJnYDeicbVZaVne9kKsRS",
  "key38": "9dq5DksKCnbdEDLrDCaPRW7fc6fzG8Ez1eJmbYdq9NP4o3kv85rXSVFYdVnoSj4nnqSYTgDmtbrE5PQm4EPepaE",
  "key39": "214u4yWZENaVHYX1XbGZ5GgBaG4sauPbPHsPqP5BgrU1Toq2JBAsDUnYKxtEpDNy3W9yj9F9YftnQKTNNm7g8XSH",
  "key40": "2LqgzvzYtS7AoqBoivrmQKnjfc9pg9HhyBa8CV4BMTgu24EoEeR3WrLyo2j2LFe465iQXjYV9S6972i5M9pboNjC",
  "key41": "3NzjUjju39Mywd9iiKLwAFyuymwSj2aThcfquKmSX4SG2eKm92UyHNy6hDcojjvUZVqmpG8LzsxR39mnmN8kDz59",
  "key42": "2YAmYdhnCdwZC8JWd3rfDjMtCe3exmAgCc7SGnxuR4EGKg7iZRCGACbSZ2vxHcdA4sQzeyCXKJ357BeutVkGgjnh",
  "key43": "2sSASusE3joRMtyFxWM9FiEnfMNDc8NtNNg7pU7zKNZ5boQrUdAb7TZ1n2Jo4eQEyfLVra8QvC6YmmqJgXG1iaDF"
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
