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
    "3EfNRvU8MxUXL8skzYiKaSXnxf6AXSUjYERVABTqvPD1ntXuJpxiT2RJjp6R5FkBWdrcRKuPLZAUnALQ8KAaHFro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fWxssEFZkoXyf9CV1xqR5TrnXCvgcTJrMYg9s9oyfvJ37RRjC6xtTGUpBBrLbLkVYJRwuuLxRYFUfzMZJJEKrht",
  "key1": "4xvz5nmAmL6BxxroCqJfwLXnY74hY8Pw1D1GTwUNx2KiRqqCjk4y3bJ4v8MdfDqy8AnACvpfb9eQ4dXt6ujQfcBJ",
  "key2": "2guTSPxvs2UscydWub12KurzRAScj1sDestq9szzwR7Zp5jHmXwWC3tN3qdGj5Ui85RwfwxYP9bvtDoBAepkodp8",
  "key3": "NiQnfm5U8iSFWHeF8KG9AR1EwXudMtbhe4mEwgJ6xXf5sNfxUNpLV5RefXdEwfcB4UvEEg1jQUNtSFTT6gQxRcA",
  "key4": "BkexH9NDVMTFhZHVfJF83qNj7iRGS4iL9gab48yTnAt2jVpfYSbb8QPWuwu1Y7n7EN3F8EV1oNBLUjkXeC5k3FA",
  "key5": "LK7nYCBH6YnhFv7sh1vTSYoK6ywJB2vuzPSEGJDmGomJDA1cnUoZ2fqAsnoasGCAensEZ7Fei3BE5VhMwG94Qah",
  "key6": "2Wx3GH8JK7tFovwbRwrBx8GZnzeqVYVzepXspT1MW88ReW8Ynxg7dSzp4HMudjCgL3rQJUWtRfpwAuW4kcbxZrQB",
  "key7": "37BAwBDJFJhTLNfLzB4VztwRYqgvkcHvkXCWMjMDY3bJuKVzL64vzZiADTLCJ4NEruwbafv7ab8h29wU9fdSGa5k",
  "key8": "2ymeD3EccBYaLHBQs998tPtBArdndbmft2yXKF4ST6hTpVVeVfsKG5Z5urBnjv1SZYnEVNggGGGgaYVcn2kK9SF6",
  "key9": "4t5iVsB4kdAXLibnDzwKPaRHVeZwAhAcNaUxa6b6qTkzikv7rjNAXnWQMtjDLVDgH5mz4EgZdQX7aYsFezhUss9Q",
  "key10": "2Ymv2mKcnQJnqqpw5JABZJyct9gw64zyy217idujsN5hXgeb3CwWAH8YGkNYPoqhB61YttPXKx5Pnun6Fqofe6mT",
  "key11": "5UP45Zum2TfVUSy8rkB91siqjwCqSdYf5pdZbnSdBisqjAuJMzLDLiZARGWW65s5zqztkkU38bwUGkMM3Vo5bgQC",
  "key12": "59gYhRbdSrLoLDyBVJWPznCaYF1vpcBTghpbCVhmp5trjMDnsEHfdVAR78wJi5VEiVdsyYPAkjobCTFWspqJ2fdB",
  "key13": "41oGWgvYRGVGdta5oXDDbQL6vi4KUYBz2VhtY5PrTMyXBzxLpa4g5AGTmqh7L2XqRC6jfPMTqhxXPnGwLHe5G2nN",
  "key14": "5DvRszHhaUhCi1bagy8Mv7MtYfHpX1wRYt3QYFPskkY9jJkc6dU3X49Lj8rCTAMXga6HLsAg9Q6ZGrcSAUbBZqNE",
  "key15": "5SXaeRjMGUEfei8HShFgNfwfCrZyQENRMcbqbVVGbzgtT8HY97VBCfELUWrCnmjUngtaRZbdrgPGaxdXKP8FSeL4",
  "key16": "5Ea4ZdLYDcYZfHTh9NqBT5mUUtgmExRYKV3x3mGzqRH8pyVEaFb6LdhzDuJcRyKfoWCzy571jqr7gZGwXd5TrN59",
  "key17": "Zk9SxadU7Q1UJucGFwAfi9K6jFXwGVvVGgNzHhW3NUAZaVKWhtGU8xKnKqyoEMwNoxnHcsT1eqbSpZe2h5nAut7",
  "key18": "45AByo8oKDk5HAH3RESAxFSUW2nGnkJZnis9PZ4sfqTJPgL8SRmXWBV16AGFeAxoC19ugFvB9hiGku4hWRY8qcrY",
  "key19": "4GFsbUKCAVX4jjMnL5mLu8YQx7zf2YAeMtHMgY7bMHGcTiG7W6Xo3Bo3U5o7hZ2Gd5EAa8gvUffJsY524m7THJTB",
  "key20": "4HYLD3EpCdDfqKETXRB1c9YVxYWWf3bf5nxCw33T4VeVsjK17hG6M2M7BPhi6raqWrpDeoMZer9mz4Fki6ctr8k9",
  "key21": "BiUcDeyt8XoZ4r1wR9n7Kqt9u545mHf5hTRfGwwdwRUYstUCu41YYpzhtiYXMqWJM6ykBkKRvE9gdY8a1Q98G6i",
  "key22": "4voh6CLxwjiHWJVT5pfxMNzp7rB4QowG1d9b4pNFZpo9JnekwyUkzrgW8qLAW5RQVme4o1DaKAiSuPefwiriM2Vy",
  "key23": "4vFTxnvTJNDqFYvKxLQqDPswkNkT6bddyo2FPyxFdWX6YXpFMnJZPkmBLjAqWmaFh5yJR6vZZSkR49NbiatQ6kBo",
  "key24": "61uFopXNehZeKhPpLfQnXwWySwvXJE2Xe1J9Zcr4DTGjAbSh2GEimmEPoQuWes2XcbH3BJLAE6rtK7sw1FS87VPL",
  "key25": "pZBTSW3wwXR7ajb8xPRpepM4aHunBGdKViTqwfT7C3yfUfzxRmv4KZyEiqzBC6VawsRyN8fpHPmrHuZPN1kH7T9",
  "key26": "3354sB1TBr8C9WCoBZymnR5nG6kTn9Bq4HaJL1ffxCFjbtbG35voDWi1NU5fEn9PVoD8h1GisBGPYXLGtqVxg6Xm",
  "key27": "49iS8KDC8tLcPX7s5qD9jYEp1pYvBpwu2d9vH1Mctpr183XgBa1G3Ji1TqXSrsBWZCeMLvH4w3AjfZ336RPdzLL7",
  "key28": "3TnBckKdddS4bHWNXrC25CxG5R5JCbdqHa6syXGUjk6sqwuZUgKHDbQTLPY4Qrv4ZfecxjP4n14DakBTPeR6sR7e",
  "key29": "GCMVvVQmiNfkxpBE6mWsWPBa4ER8psVoPUypfPssnRRdvSbEjmvBTFr3y9Jb76A2LYCnDzaxWKUS4KrndErCfyt",
  "key30": "2Bz7nENBDAV3t82LBGg937brxFdE9fi2g8pD1eFPBhEkXm6K6v5ghNbuZNxfXMBBk4gnbXXnEVEicx8Cg2GnFWNe",
  "key31": "uVMqQju3GcSNZ3HBUk11PkCgSHZ9R7W78F9fVfSVGF6qieNijASRLzA7zM7nuMrYpq9XfZ7moi3XRcS5isLDQUv",
  "key32": "34Yr6cEYLr4Cuk6tDthkqiiiKor8vK6wabE3dQ3e1Njko5nZEVW3z1jvCssCCfzVzBco8oK7vUuZer9CyWGDyMS5",
  "key33": "2zic9eHqSmk1aS6qiCZRa6HgMKk1Ugox11nnDi1qMF5UB25VQF596aowhpgphzGAXi7AFLms8yRYpEsknDCivqYZ",
  "key34": "ah8DGHACuqdphRdFbxuZKmmZzTrjapaUrYVKEgJ944a7B3PJqc72C1wj4m4bxEuBT29MKeM453SBQAAS3Y9fb6k",
  "key35": "4Wdvz4ae56rx3ELR4rB6sMe9AK4CvQ1EQi7hS6BdECLDLejtbcrfEw9JZuoKEDWsxYvrZnWhXxaiNZ2ogk2cuokp",
  "key36": "5cDJ7F1ZMWvqQbMmqhnvnGmgDQEwVZDVqD8NnSK9yBvfugL7jbBWJN1VYM3onyo7n4uvFWsVMYkVkmn7ar3qJsBG",
  "key37": "3p6BoiMSYPbVphdS9Y4kukd7HHb4A5LLALfQ2HdYkBx8Sn161sVK7sP7scTLPuKAZjg1zvnifD8eGHEDcDSiVj9N",
  "key38": "4dLnfVNmR3Fv2P5G9Ak27M3BMVerPYMzvKWf99wTmVWcCEsGHcWsuMpoSgQb9AkRZVY3TRLWhGZjLzKZBq4TTh5q",
  "key39": "4XrRLZy62qb5kK6qnUuLeYSHZY3KZRZ4jGxYtYLUoQ1rfoK3F9NKUrnfdQZvQz3AFBFaRPBFDqa7AZhWTLgLPXw2",
  "key40": "63LkyLd3h5yuLD6gkMmsYgvVatkGXkNp3Hsjor2c3PgXuHuuaVR3cLrJkbEoo4yXbnJu5mmmQXwJM5vtHQiJ2Jdx",
  "key41": "5w2oaeUyeUsBhRcN6HYT1npnh8VCuuXmett8xRVtTgGCEP9mvqukTESfwzVVyySfxgxtTWa8wHsfKkkrts8Bsrga",
  "key42": "2R7CQ1VK9RNPPn5vMirHQCMjLL2mNc2Nie4HFsoq5WJFzcmvfT5EBQirRVNLMZkJ28oMebzcxzqo3P1aVbGZciyj",
  "key43": "nvNphPy8NCjRuidkd8JfFjnoamaWfMGEQ5cAWwzZbUMU81tiZX9kPt7MbcZzv4dX67zrH5kt7behEJkCZSeiZox",
  "key44": "4xHSB7N39JKx9eT1mRdhdu6T4vqxTDr7eUPydUyi8R8HfCwrngxJtDeYrNYQG3S2qPYbcwNcVCwRqGMLsmzZBP4a",
  "key45": "wM8BtrFQhGQ17A6GoQ8opAptfD3uMZ6JzFuZeqoQ5YMLE8Z1F7ZtjSPn3QEP8dYyP5bXELDLUWLERfYnHnePGbW",
  "key46": "34FmWfbJ41TLfse4z4qUgJAAVD64BdkfGcaChEyVZziaMF5sJfaPpNiVDwA2Ztb1zMPXm5fHBMN6QmBUfTYBUhXS",
  "key47": "5kvw7nrahzRbuY1h8DUAgPn4338P4a25JuE4DjELdCC7FZwnyExGpLdiUkTfe363iJ3N1mh9nvJeVB9jwTSewCQk",
  "key48": "4ATeELNLJF6wZuPmLvyfREHhvhVUjA92B4F3NYDk71hVbUXYaXtchwzvajkV7RqBKfR5nnEtuyhuF7m4aBVueWaU",
  "key49": "3FBxSRkdnsGoenA4vYNmiYt1f4GtFChhBCQz3HJPRqbjTjAYojcZc4FueaG5N9vxRMzFTp4ZK7A9471iiDB1AyTw"
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
