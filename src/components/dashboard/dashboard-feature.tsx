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
    "4FQzdChUFZAgZdHfa3JLx71Rvdfj6WLFEKD4dTcgMYtnji1veCZwLMks8YonQ3FGFx4URixZHa8qGdZeVjHhdRDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26yZHCMAtis32ezTyzw1tmASLSPiBQtf1vXaAhBK4hHzNfLuu4equv4rXyDkGARz7zzquFFpYQ875WC9dMP8GL1k",
  "key1": "2xqTyPhXjKfPQ7wTs9pvduTkc16hDwJN57qTRSJdhM9tBTSGzpvfprRsx4H3F96Xq1LLe3WxebCbgauPXc4uGvKN",
  "key2": "2RLJoGp2eUoKpmtUAKBGoXLSyB6mcc1Cs3ygRVfSjptnkPo4DtsvtBMNiKqxxtg9XotwdYj5SUmG85hmmiYXnTjD",
  "key3": "2hzPrkrEZawmTLcdJVjPzjXeLhh9BjNmZXiQUrLKqoL6AeVzBYp3yfVYcTD8UMKCQ7YL2hQmm9iLGkWJ88gynh1n",
  "key4": "56REGniA2fXkxKwYmkM6LU24VDnvaJ4JNzGQQHKQuBU6feA25FjXP5ptgN3s5A3PHZe8T7N3G2gzz8qVdacV2LyL",
  "key5": "5rTfrouHJc3Tz4uPRzU2NgCuvz1MQx2C1v68kP2YqjEbQyJmi7tSiHHMPDUZfcweSQcLfnVxmyD2BnRq1q4CzPJT",
  "key6": "3jBEMvPzmV9nJtTKVthRgWN1jD4FG6WCNh4MkWSAyjiYqdSbwt6z8swoQd88pJ6HdPvq1egjYiBL2dVQKvKXjmNd",
  "key7": "4GCujqS9qVnVro17Tv3dtwEmL9xB3Hz1iCCmw9xqLbMWzxayxTtZzFPGJTLxNkce3K5NgQGMrvEKdX34kx7rGDdp",
  "key8": "5YmMPpFS4cM4azRYKmrTwohWAm32RPduh2EzepNh8BcX6Tatn5ombPhW9YZGS9o4tY1gM96HogT1s1f6WZgqUx94",
  "key9": "5twxaySio4h1xzh54fkmsNyLtRL5eGW7Uc9dpsAFWy225MeeLbPkmAhN8MdtyiRczQ5WyUgNyA8qWCWqX2JuwYoV",
  "key10": "51P7PXWVeGMFqLBPN6xxfLs2T15tFJLPCjfBxnK4UqqJpkNEwkqkoeM6TnpRv883v71nvHFF9q5uDRBXW4uVHcqH",
  "key11": "oZEidLWceW3hSbVXu2YSAY9fgboskK5YnjjbNmjby2go8v6J4Zv83PMD6gFfeFVHYjQiZ7hg2gtcKr1kTNaBPnK",
  "key12": "4MWJdFqpGD6yKesYHKfFruuhrjGimAmdh91aK2HHEvTDnfweGSuDU9oJKUp9bT6NW3abZ1oQMD15vk34YuXDbUdq",
  "key13": "53U6CdeMV9nXxCt857uCmWYwdSh3YbYV7JZ8pt3MA2Z6vpR3cSNvPFTr1UDZbydXRgEd8q27pwTUzTSLZnsiCYvn",
  "key14": "4bY4CRkBmub5JsKL32reuTEE3mp6G6NeJ6wHG7ZhmKgR4USro5JrecCuccRNYf5CPqTTfCC4XkjLcC9BBNqxBuFY",
  "key15": "3HYyiagYS69pu2J96LHbn3UprkXUC64ocwGhiFHEBxj39Ls8b7eBiwnyV8Y3TtQ9q5hjDzQiFuJSZiyAhKZHBixu",
  "key16": "kHHob35SjfoKLJp4saqsKy3jfF9rF2vNajDKkpULWz9wAxUNM9z2KAh2VthcYZoaBuXoumuc7BvQ9hAzUzw32xj",
  "key17": "3LVec1hn3LVSKZ7Ps6WKDuQKmLPabF7gFhQ5tu1NCa92JWAYwuU8FHcGTD7PnvMUFtjozrDrh2EYyeofUkBwBXSU",
  "key18": "2YbEySR2nHM6GQgXzd3ZUAEtnfiKdh4nFNxnSLxGLuPB2JRKEQXFCLe56yCz2unEPtXciUfpYK4tS2fTrLvP4e4P",
  "key19": "3dc3CQXpkKDA1DmQoSVg51s3oWFB4sZbHajZfrT3bVGN4j8QkK2Sk7o2bBUbofvpfzbUZXpETbtdzi9SJtc9bTa7",
  "key20": "cYvqAkN9XbP2AWWPP9HWmCQjUEmB4dq2wiBjWZdEUCBS6ur76nE8T2PsjH4xveMpFVh5uWVodZTdXRodtZm7vEB",
  "key21": "647bqRCBbzow98FUQNdubEbD7XJQHKGtTd3EeYTkLUNPGxcEtvA4RDcy4AA8ybXhK2fj3ze5ouhWDT7DcnNR4Ubn",
  "key22": "3DfLdQdK5jPse3UKQBaroG2xn5igJEw3oJnJY52XeHnBoA5ynt3skg7nz1ysUupLM1uxgJTWf4nMT8t64qSR49tu",
  "key23": "2mUShRKnB7kAcMdeevw2kfEszfhPmysXuuKhUaDyQYa9dyyzjAnV9rdoN4hwCnnKM1ymJZFmqitLmjUannkJnqPU",
  "key24": "4yBux97KgpD7E5rowJ9d9Qb6pgfK2WU7AXHV8pnfRFiQge41rkUcN1Hd8RZ5Pispqr9mXWe7yMUTpN5KsJFCSWmv",
  "key25": "4NoSmXR9u5afmB62Rbg8PtzbCnr9EfXv9SRLYjp3Rdq11BNXvi8DjXjJNJYL5sSsUeyKpsXvLvyTb3vvRP43ruKn",
  "key26": "e56D8SYRJg3dtQ219iBCmaQBCAjmN9HbneUKFDfmJdAmEaHNccj9777MnDCQezx2FEv4AcvhCa54k7DQe3rhk6w",
  "key27": "5FA17fbWNAvQKDEeHHmCD8hg1k6u2mW37DHU83RrmamgjepFEWK7k2FsWtosApSVbVZrBVDU6eAFDEiFnUW2gvB",
  "key28": "2EvGX2DPa5DzonoLZfVF17WoBzn5CBfbX2eRJnvFcEDE4cUEYfvCh2HFjDBi2JSSgdWX1hCZAr4eKG4JLUTXS5A3",
  "key29": "2cuU9Dng4aAsFeDKfAdM9RDAr6FZbVMduAc68fKTzSPBaEyNExD7dQm3V49ugoBwhdXPkY5Ty9UgSJg7CUrEJSnB",
  "key30": "3u9AaywzFFEe4q1e79AT4Vfnyz6J4PcPKu6FBUgxga8B4v4zj6uwDCueLTHDwP34ixhKgQ5u7wffpTc3hJSw1oKo",
  "key31": "3oAHJG9ARpCCFBq7cvjB7wMZ2j9Rh3cksfzhhFT3rFkB8McFnAqXMayogBDDFaAgpu4RHSEWxpEFmuije3ucGwNw",
  "key32": "35osJ3KQtWhCKgp7oTNhaFLuYhYBYnCmAQWQzdrnqey4R4Bo2NUmM5rkxtkrhu7vi9kqeJDihn1GuBdUMWkkYQ97",
  "key33": "5AWRykfK1GX36WydVpP3xZK4DLi4xgBgUjnYdJxy6jZZbyL1zML6xFT8CFHB9h6WtRFrnNW5W6EYaBPzu1GPf4qS",
  "key34": "cdMrJtAYreosARCfhbAy4taiJVirXPqF7tdjVwd1vbibwiovZSdYxWNvnQcXFmnJZDagitnuxf65Fwb4R9TK3tB",
  "key35": "266zxXPPz8xqZSgJFipdWUXL1fGVxKCCHHmkKLYxTsBnEDrFqin9FpbbH7qmrDdWgZMtKTKntiwmkVQxmh1yd77H",
  "key36": "NoP11ytDj1DJZCTntYk6jeaHcbHyxJEQa4LdkkYP4Ve6fU9yc1Fv92kwPUb6ANNGNEZaFfEmnePpzFn1KAdqzSN",
  "key37": "3we533ZhjEh1sxEMqd7Gtgv3GGCmvHDkdGz6AqccB2HsWPowa2zyvAfGxECvcXSbRdxwuKbz6K71Sn4USoX6Bi7A",
  "key38": "5XeBLHGBovzCwzDhcfp9uNi75iwgHe5jsW21de2vRt9fEU4mpwLsthG5AfwCEFU59V4JmUwSLdFRvURuDDqMdcFz",
  "key39": "5efh2XJTTVeFoEAqrpGBzXutCCbdhfR44f5hEigGqMHYmgJeX46D1iLYWB4ze3rFahYH9JyQAPBV7nqft3EGME77",
  "key40": "3C556EH53jnJeJ9eN2TNcBdjPHoCtgoqonXVHCo117zJDiV9kEvUGGb8k9bMxNN6RX5TFqio1skdw5jA93VTtYW9",
  "key41": "3R7RBbRajck1dkUhT6b7RHcrAk8rVQ4y9HuPw9fErk2dFZTKh8DV9f9y3ZyRtCnqb7x7SmTzL23hnqcbJPdzprYj",
  "key42": "3D7N1kvczt2ThN4FgvMBygHQcWgE6PjWP2myAKFL8UGs1hYmaYDUuwSrXJGtXfLJdPJuSZxGQ5xZCfeCJKboxLjp"
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
