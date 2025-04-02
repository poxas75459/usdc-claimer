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
    "2zuh8cnhKg8PTjqKt2SxgYrtZY3jcRjtE3mxcC8NdiZrk8ee2jkMA3xxQdF6kJxxgEABzzqttyhrYGvBH2LME23e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y4VBetTvLYQpZwgZZ9ba45V7fJvkByCv83djGaJ3vDmTqE2uUuWZLswETX2yX5KvshQ7bmZDtXcm2P7bcrnFtkf",
  "key1": "617N35MskuUP3ko2YBGPJ5KtybUKgojcAQ6rWGHe4h58wiPuCLyUQnLbMJGaKgdPLU8BuF6rtsU3dNmtXmiLYh69",
  "key2": "5r6bkBFC6FSE2Dy3yVmM5fUqdEWRP3AxyR7WBZ5n1AkQL3BowqcvUwd68fXfSsHYRni1TFEXXC1Y5eu2ssqRLQwP",
  "key3": "q3XgFNaMmEdM7HPEdPjPKYBP55sXSW9boYEZS47eu2hfmXFvU3rJsJd9G5eYAYmKjanDsuXGA6VxVMTFYQUmv7Z",
  "key4": "ZQuxsxHVtM6TT8q7LsstBqrxGUxq6ozp6UP2VndxqXEjzRgqDTSV2Pd4cNAZTvn5KUyEkzDYfPJSgZJQVJCGL7w",
  "key5": "5q2gVJVxpaJ5WshqpUCWACRLF61CdMWDUWj6K5Dft2NbeSZFQZtMZcjJMSnNcCe3T3GaaVogfES5Kwxy7Kp4xJv",
  "key6": "ZihuwFawYK9mABiyHtrGBgtFnYuJuGSbksSqiXGMSEdHWDFkEbdggPvZ68FWgFaZYQZpZ7aRahjXwoZsX8fCcJg",
  "key7": "27KM6UHSgf2BedQ9B2Q7a5VDozSb72aswp5i4trHQZmywhv8g528fqsQuUAnbhhie22RVQhiqfjCyhR437aPnHNE",
  "key8": "4W5CZAfChUSriAazXSKRCR6qJ5JVR9EJwzQim6EpQ81CeTKVPDsJJmsh2uodyaDRXYnwyULR41JzJxtAtXjPVSgS",
  "key9": "4KKwmg1TDYZSbLCbSfvicX8q49z4dN4PoihaQ7vz7hjPYQKFV3QMdcdv8P4As9duiXFhMLP3EAPpH1Yi4JK8qF59",
  "key10": "3zzab9f6A2TAWEMCbvJErhNHi4Gkk6t1PPmsPKXYe8DFZoyQPn5tNNUQHe616VP9MCDzzsS45t1VBS98qv5vcg79",
  "key11": "xsysGY86SBqBSXQRsx98TdsaAstP1FShEFJpsKpBQAchdniANVDE5U2CTKfbGhJqxg6zJZ1eAWJm2WQTxZxLgZK",
  "key12": "4UiQQCm9GVDMUNCpzL6bCkbQEAWj6d6UWfYjtm77nMXv1FBz6wLSiTiz7efVGXmR1XdgF9XWmrgEaDGaPjKMcCs8",
  "key13": "3gRUhT8G8DzKxhDjHxCtwWuUmDJjmaoiiyJfb4iWs4MuAcivAezzhUnoSuGpQActRuSUoqQpc6zoTLCeS7E9cqJg",
  "key14": "2hgFjNhHLipETtPqmXy84vKEkM17o5eE2jzXCUEccXEbvPubVFs5A6WBTdhVLYYNHZNK4X8bQMg1R9FLnCpRTjsi",
  "key15": "3jr972XZVD9G1FPYUe9chUmf6JKNS9kHY3DoGL9SpC8JqpNENKkU2Shz6dht1cAjERUeYHCJQot9tEhs1ZQXZnTh",
  "key16": "2xegzhu9u4QvBFYxPMWfqUTUCDCpmnZFacYZMBNGgNn7N2Fh64NaY8QndweX6hjzRFR6DoeyoJes9tp1qa8jMCR1",
  "key17": "5hSM2TCLXiZJDDig7ZeYPdwKSPWqaAJDwg293eN2sfsMEtfLohAoPkAjshEHG4xXhsBuzZSznWQ4JRCr8vSmsegP",
  "key18": "5cG2TV8BDtGVQXwjSXfHAEW3PmQgdy8scKfTKn5Co7vP7NUrZARrEE7dznh9t3dJgi5e49R8EgXxPoBZerowv4mi",
  "key19": "2S9DEbYYVQHayh2JfkDPvjBug9Q6D29Gnomsj4tFpdcUf7dTkznn1sxaTnow8EHTRax9fBsXQKDVdegNhg3eC6By",
  "key20": "VvuP2bLmXofo63iwytw6WBj1ot44AwpdYa6aiCqwcEuUG6ChvFfVgPBhEGFf5ByTznfu8j43JmTgXFGCXjzGfBv",
  "key21": "4uo3tFbokoZ6FkaVc5UKNHK1jESpc37wZmpX5rPyEMBpu3yFjdXB31SNvkPmvqkdsSgag7cnTcai9YcYg3v7ZQa",
  "key22": "4U4SBAa7qV3Pfz6UAQuYFvmjM91XebLD3tW5kDss1sK3GjcQiPf7Sdxos96gArjbC2u6FY5jnELgJkB6xKiBwf7w",
  "key23": "4aVNgVJ78F9mm2dn9nSLMTb1dCUQ4Dh2AA7i83FD3JzUEqBWiq2CfDedSu7zcQnf7q73EHordu88wtWGE6HH9wZV",
  "key24": "5hdSdrCLEVtZFJD2mxTnkPkRu2v3aMGV11s3fVeDcMhhZkrPdTxyCmyqtNRjWbpmvmRA1grASzNz1daUmTypDigP",
  "key25": "2REPhRnBbDtgL1ztpW7XzdZ6zQyuLnVKwn5zHddqydWAE1C6HSWqFJiGaeaxSw1L9t1pMjME6aTGQegJtv9jeN7K",
  "key26": "2bm9BQbrfdDbUMxB4vpgjVDbTKrHztA69tJEt9WDWqTiSroJT1h6WZs7kq7yEy8SRii2PC4Z2iSoME2zAVrGgyML",
  "key27": "HNarAKbuLhLKgYzbcqtBc58NdPNTgPM4mP5fexwXbC4PS2J5sA63rAbJQnR1skcRdyb8wMUh6xCX32nnSHazDB6",
  "key28": "3TMgD9fdXcskoib3hbAVMrFAbmHpD1wJQuqP1RPruMP55TR4ogTj1EhCcLkE2BbgmfEv8zJ5sFoH3WSryXSFBDx2",
  "key29": "2eX48NFQYdaR7qrwX11fCJ2sSXg5XEuGN1ksjajnvZ46AsgoYFM2gXrbk1LGoNwXZmsC6My5LW3staASrqVBWL84",
  "key30": "YWUGK5wVgVE4295UV3ZKrwCCpRYMwssSmg7pU6mTNqEfejZctCxEKCxebJzQQBCfSU8XF7yxbCeBTAiJx7U9PDL",
  "key31": "4qyt8x5Csp25VRsCLnYJDRnjTdHAFKdH3jpHWeEdxEsauXcPX8VSxxLizYNtY2iKW1C5zr99UqxUH3NZg73sMefY",
  "key32": "3Xq7N5Gjz9dtcio6FeS7R4dXe5pNvY2m1EBA3kyz5SabzniNTuEY8e68xjh2J9KmcXbBH4Jn2Z32yMR2ch5uLjL4",
  "key33": "3iGGSjCNy1LyGwS7njTWFxjUb2ocdpVncqvbtKLPm35uKfYQBRUEe625ohpZUDg5TQBv3QnjLb5nuXvCqNFT9YXS",
  "key34": "2KFboR2atnwCihoAqyVrDDWByWsEaAsPmQHiavKGz7D7a1Sntgdkvh8XnR3HTzkbXYd4aquA8rEPgvgvwWBmN5aU",
  "key35": "5dm4n4dUqiNZD63r1CrT5YeqKrWTWy4ztZvdyLfoQs3Zv4M4sm591CFmbf6NobFMQ2Ri1ZKShAiTRpgPYxdcvfjY",
  "key36": "4bKrMBFRReJhw4YHohxHLfDFErqgxrK2BB9bxnUDknj54J2cydjSpU72HvKi5iyHERpbbocEtV4KUi8CoBCxWwNw",
  "key37": "4bzJh8uHnLTX96MjyZD3D2vwLPKjKvQYjSXQQs3upug9na44HPEMVZcY9d6TM2ZBChLt8J6B6eoRhEqmeXZdXAcU",
  "key38": "JTuR64N8x9FE2cFiGGMK8mSfxQ8MKazTMcWKqrBUvrpM3Q3EMKQsg6wkdXvux2Zjw9onEKy4sp3N2AVZasYL6Xx",
  "key39": "3EuHH26w6rUWzymRgG9WhyLCMiT9Mfjf6UQYAiiLuEKC1n57QesGmdc24FayFD9K8gqRJqZ3XbSKP2dD7Wy2wSjy",
  "key40": "5iJbDvKRVwzi75tgJzMZk83NLs17KNevNUEdEjX577R55xh9gYZnajUh444jMokHGPuPfmdUumeF85BeuXxvkaDF",
  "key41": "4SQB2YpLbJAvUtSYTHALnkJxH374g4bjZxP3NtrYLg86mku8ocQHp6BNhepZDx3DjLYf7TqhKsX59rqSd6YKMScN",
  "key42": "2ru6LBMSEspZQ5KqDK2x5Q2HeUvUt3DamAbdWDy1fB6g7ch6tM73ESpvRyEhr1bkYCPwYQGU4CMNuKXR8nyH39Q7",
  "key43": "4hiua7TYDUFifBkbcfvPuPJBnQnN3CsDwf4qQLV6WEtv68xWD53vhtGhX7z5fj2ahr2rmiFJy8dqqW5YBU4YVNKg"
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
