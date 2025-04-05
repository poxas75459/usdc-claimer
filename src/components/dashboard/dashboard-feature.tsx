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
    "3iYtZ9tsxSURXeadorYiUKiPNkZ7eeLr6sgNPcx1JN8QLZNuKhsp26cRjDcf7EViQxjjNiGkhwhxXr3jprH5LSmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SWMXbF21eJkYnp4CngN8kecvcNEWrJqVhwvohSNvLZz3URGM9VkTQCaibx4CSy9rG9WHw2aVSdJdexRQqNR86Q6",
  "key1": "5cgh82yxp3nNw6N9UdKzVeawFE5LpBpCDb7uLFxGbJmtiDCRhu3SPvnrxYCj5c4279bMDPhwWWgFnFAG2uMaJbjF",
  "key2": "4Pua842toETbu9WgiXDRMt6BGo5Z7TEkoMrsjuHxPKQjcjTN1hwQZDaeKcxyASLoMxBAJmE3rGsXdyH1LweyPmH5",
  "key3": "4vTjnDrkfkPRovwcaUvkkdryisHV9qFNaJiFdmiBqntbL4AuLW7TqKApHPkjJZEW9ajb3wRxi358jAJbxKSW7bxr",
  "key4": "86UbmCk9m5sX6cBnSUtxFiL5B7HU4DFcpXXH3HEuuPChXikiPQPCmbQsWiapuB5giuKBRS66M43fcvSU6w8Qzjp",
  "key5": "3X6G3hCndiA2L78vrfNav5NDYAUu1WJKU6FEptCcTLSuwBzfGxmEGHbJ8TAZW4XJLydW6jp2MSpiPJ5YMynVPLzq",
  "key6": "5GgFd6LvjYpM9N7cAGthpL1sJGdeT5RAgcFYDvqWpC4frM1pPUoiyP8QT3hcNq7tKejSmLBVLbs1XPF2tLtJGkUV",
  "key7": "4vMdRsYehT4KFFP6pg8FKtwZKMF8B3eYq5eAX91io7A9eejwPdjUhmVckijEvkj37gKBjpgmGu1NQYWYQitd7Peh",
  "key8": "4AMLepa4YbpnsCBQC4dYf45y6Z1GHGTe1dnaqkqgiUGKXy4TfRTtkaZozoBa3RYyzyf7eyCjzExAZcFT4uLS9Fk1",
  "key9": "29s7jVBVdztVnKhUQXkLt5PE1c4is8RJmWHBXjCrxUutJ5iPNTYph7VoHGxCQhNzgqaFWGhkEocjecmqXWzff8Ur",
  "key10": "2JEwL2MQgXzxeKF2PFQzcaF63yibxjAeexzrR1PZspuNH2YAhNHPr6n1MizsRjPkDKjogzJVvCvN75o8NdL9KRKj",
  "key11": "2zBqZnZUNzRVM1zbH9w21Zg2pCrQrDJxdHfpwrhWcMNAhJcx73TkWUWBucJBpNRWYai9VzFWFmfdSo3ZsdwEz12e",
  "key12": "4khcSbHGb3HjTXPrDcfYdEVUXoq4wPJSdF83JpixBKLUzThUS7oMSXjHedD7sdHrRhg67woQnugiqh8R7RjLzK1c",
  "key13": "5vepwAxjqrkVdsqosRqmfZh1YMy1VQGMSLrj2HY8wq3vfgj5YjYWUPMWvvyFQUSXRGnBtYvguer45NFr7RX4deVt",
  "key14": "5Cq1SJr2u4zv7D1f3wURoa8UMx8qyD7qwoq7iGpruHuVmSF1X4qZ1oLQy9nckmLMPYjqD7p6qXsdJgsyebKcVy6h",
  "key15": "QHM1K5KDunN7HKjGVAioY7ZdvwSGdEtkdc2agy85iKQHgcXfc4Gv35gkXDqtLJnCK7YpkgPQTMamzZ5CNW9afRt",
  "key16": "4iKhFbgRVNj9BFDpPNm1Q9ErPC8goChfuU1AH8sMkzqfZXMbNmAdqMJksjbJsnikxKCug9o3AbP7nckw4EvZSZtm",
  "key17": "ErmFe4CgRcykvPYwcEE1hdY1XyaEvkGkDGckuK2Fo2UaRWkvmM5t957ZQY5zFABKE9cWka7JXDuZKC7Phg5iiYk",
  "key18": "2nEiMEaV1rt1o1iiyJkg52d5E7nwiQEMf3aQEamK4qE8ff2x6vTYdwkU5Ci85ei5cyCCEhBsx8J15vt191Kq5q2B",
  "key19": "67krBNXuPkYoE8ALAqSSozFDpFesHBA1JjbfT1QP1JN5wjiLEhqsW9896Msn5PTPv16A7V7zPDr7Ne46Chm1cWEg",
  "key20": "66NxiAzCy82bk7oxdEFjRokGFjLV1s53pRzCNWSMVpbUjdEqERVK1Yz32J7JwhQ1RAgLVYjGAKQDMnMEj1aVKmGn",
  "key21": "2rMsqqgEMY5oMTKYjAc7XEXjeBCv87v1WMhbt39UqNrd7uwktgmGnRCKv4582qxiY5CzGpJcZfMDtLHmZQWrT3RN",
  "key22": "4XYyhkCC988ua1Ecu4DKGS8AB86K5CXy2qtfBkTT2v2BRo4bNdW4xeMMAcyLgCBS4nPZwpkYMx5VggGJqJanaBAg",
  "key23": "5ELHHn1RjyAPjb2gyA3tEwSvCBufb7YwKqi8pXG84iPxtqT2JWy8oK3Zro4RvM4eDyoNuLGSgFEAznEBVohWXV9",
  "key24": "3Fw9yAPrTdggLMLWrg4kCiEr2XujeodirNnJKVqUwpzqUQv7mqPC8FHZF5KBKSFcCXiZKj5JaP5odRc8NBbMPRxS",
  "key25": "63mNhCqmgE8EkARwEj1nmu6z5Fam7bezgEFzvhEmCdrk9YKTFRveuu4x2h6oaDtHa3VtFfVY8cZY9SoPhiAzo5ZP",
  "key26": "2FLEtJmnA4gJ6SdJm36rodgKynER2aswnhK1N8QQwEWXKijV56s5YfriR59GtEt3i1UTw6DDVW9fpi7A7Pxd6Pv8",
  "key27": "62d1SjiU3dcNqJBJeemXEDUweNsZDjXsqppKxf4iEnsJcUgonteESUzBuqWfGtibi44DiU6fxnLRmwbMicYnYLuf",
  "key28": "3jEyikq5PxFHwiYTSVUXaQBn2wi4E6npQJvLff1CbMT8UTNemnfvxVtCCcURzsNunFA7CYZeJQQKHGzuWh6nu6vU",
  "key29": "2oZHacVmAw6MfdhjPe8ja4LAp3iNmaffRDG6DFhpp18kSdDxZfrKV2UsM1QBSCtapYqHX5ni61YRAcPKRzTa9vem",
  "key30": "eKix73jqBCZo1WcNh3sfYS1ckAPmdSTDd7oNJA6wGZSzmYVympkzV8nPM883TZaPy7AKt7QygFLGwbM7Rs3KtdL",
  "key31": "54BwWFLP6bgwpkvAsYE9FRUoUdJXXhFtjCZYMkH5z72NGNpkRu4Ae64fnD81Fkqnk7mnsGE3rq8ReamprouY3D7S",
  "key32": "9uVKnzC2Rm5kc1VvUiNPgTJ3CFTwDAR1dFbWHXQTJUzHsDrVQz5TVkSFW55uzA87iznCNZTQx4g4mX93nSE9gLh",
  "key33": "3BS5zciVJmUot7JnhVS6FffSoCBvn2oYk7EFdxtkTF9seeSNQH2RTCiX3g9xY6wFUAL1qaBMv1p6so9Wsu7P44UE",
  "key34": "LYhN5YHmyreVPxtKfh9VuAfsyN2cA3NxPgNdNBN5sxDRmvVXrmJpSLMJXJCvUW3oVgPAfwFtRi5rNz65seru7jY",
  "key35": "51cdgKTe6zmsi4Nmr5XKbUYra29R2NqcLrpQXoE4tkSfQhnReHew6nZKjFbmQrPGEbFHtiYkmAjnMVZPTBobH5w1",
  "key36": "3ip8f5DKQAJfFyN8EK84zeSaPx8goYn9vHpCUCj9uRsr34RNiB6PyWZeiUqcj6EttmsiDFi7pZFWvcLU4oTZgQqm",
  "key37": "3xRwb75UNuaKKh88nbgNwqL61zb48dtWYFeZJKWvwXwvf7ZBSk9m6hxnq3yeG1iapA3CgkcmoVGWnRfFKYcBTSyv",
  "key38": "3FjaLxAydXcwbFFEGTDH2UNjbTxGiQ8R1NbxyeZtK6feDSDF8PydRH59wGCT4WD6EcXnGSo6ZVJqheUbgf7CBf2r",
  "key39": "4scPNq4RfjWgm96T6uj48TzVaPKWAG4GhYmu37UZZSpMEg4WGc883AHtx8FuTjhpU1QGCbzsweVvbR9XwyPnxJir",
  "key40": "bWZo3vo2inotsaeXkwHCG5PAFdQ56HdYFN2thcLJHjSbqUhU1VFRNntMTXCJwn1DT6FDFky6K9zH7ebcM5yC5R7",
  "key41": "33Cz6Pspi1T3mEh76GgMJkUjjt4wUTak6YR69dnfgGM1HcAURKcPM8To2jXtkkyR6Be18pYgJLZLwi2QYPZpS7KB",
  "key42": "5VSmDb9qiz32UyFMTMUC9HrQ8tgd4is3bW9aKzL2myBm2YMDfZzMCVd49CrF1AjEb4b8RLF1EU2zTyVAEWAphoM2",
  "key43": "31FN6SxBjHe8j3xkNUpHH6gVSZoHdRtPhxZh3Cuuw4vH2PBahSTfaXizGJJgzeNT1gxtEe7xpgzh8KL1V6qGXUZx",
  "key44": "4DPW99uGp8fBSjcF5Ey7V5Cq1NVxBJE1ouWv3gPoRsQqYzvvP7h1nGBfWjh3rD8evhMBChjbWSWg5iVT553Rq9HG",
  "key45": "CUr2tHWk8PN4czj6uS12v3PsEg4vksMF3LwEb262jryZ9VNbsz5UKNtS1hd2951cPVHmtbx1fMhG9Qp7De5uERs",
  "key46": "3hKthvBUodgJCm3QBHUJ53UsebXT892WuHtdrJwBsTWsFR87YukGx8mBXRhqtjNEE7yN3ZHRQ1zJzWeLHFy4Fy8P",
  "key47": "4dnW3dEczikzBj7uRwCqSkGdwoEaA4V9JSkoFeKsmpoKJoKCm6ZZB7nMWonB6hx7umHJp1Sr1MrhcQEGniRM7jDR"
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
