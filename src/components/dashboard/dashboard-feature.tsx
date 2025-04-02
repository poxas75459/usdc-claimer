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
    "21fDdq7moF1CJUTYmDwLKZPtuqWA4Gm9LdUf7rKcmEbekJert8cLLdzVrRfttSjg9rFyhW3YjAzXL8q1SQzDh7Q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DdPQ1MPST2odwrReYWz1uifNeR9gYzbuv17jf6ewGSnEbjbfzcWgkKgEaC7hZgSGG1xh19i9oz78tgNF8YekofX",
  "key1": "3gV7xMVH5xwZynruKwYsLGU7BUmiXmqY4wqvkN3nddDw3WAdFDdtDpQ4ZRnnEeyJi9UKBpeV83quHeeExFDjiFzc",
  "key2": "2wjeLzZKKShuYj86EMSnmBL84d7xhnoXaBKFnmjQJCD6CJBYGJnJMZuSbjtzuDpPUMD7zWuMCrN3hK4U6359QELG",
  "key3": "3HVJNm89kdx4xXzcgLcKWBCACRPydddpf46DXGC52foyh8KMJyQENg3zU8gyCoFutjMkAG8JLRfxUL6r7vr21rrH",
  "key4": "5MXsmDr4hbyTnN6qw5muPebQqepE2f11eFozBHKQa1NFm6wjsVENtphaM3mgGri1pJmgLdXDGXyLFz5P5BFLCs3R",
  "key5": "2Y29QjD2VzhS1C52Xeefu4xwBy9oqWWjLKhj1AnzJZNE9FwtgD1ReLzH8fjbL9fsL5hxw5ZetnLqX65TuGyhy5Um",
  "key6": "62aYccHK7eQ3iJ41aVZknZ1WivaxKBcrvjsnAikjNxGf16gmeTF5z8ERdJVqu4phBrV7xmHJPDdPojvnHAUkFMo5",
  "key7": "2cbWs1faYEP5tvb7uao9vUyAskoiwLNqYyRYq7Ld4UwQJRpEPzaYMwQfPL9xSq3M2QNiaQgvUaHQZML1DQhtNJJz",
  "key8": "44SmTNDFsnVdRbdueidtaxXAcgFQUsvghsBJUY7YHiQ7bLTcCtoBGfBCfvtRGb44h2UN1guuoPiurezycgiynP9t",
  "key9": "66DhBPwAcY64JdgawWkjGGXGVjBvsrCbMi5Qp7MzJK6QMifpB9ip7W71mksq3bS6RL6MnKJtebFTqard4k1h3STL",
  "key10": "XJc27TqNmZ72wrKbTMKSxJWfghTgcgVznpEg8NnBuJsqonidfD3KruT1SxPe2KZoHTGC17HdbeohBaGt9aFEajn",
  "key11": "4bQfKB9puPg69Rp7LGfSigsfnVj571x8bu4nCzmsxppXqsHzLB8f7MSW4D9p5DVgV15RoAj5RNpQED1TqaBjYDuy",
  "key12": "5trxFe1daL9Y7FavS8Ueewf55F8WdSR9wn77GFr1doVvJfWCt2XNz2rr6dwgAT3iFtUaQCisVKZiVpa6nGdFNVLd",
  "key13": "5TcvSLUS4HuVJXByqubEU63rEaDVHE4XTxkvrz5M53XnKBJZFeJuojW9us3Q9vjKBVzaaFEXN58fC4F2hChF7SVi",
  "key14": "55p2DSM1eGj3ycngYGfjb8ZEzawehyxQofnQ1jwKTaYf6wz9hkwgpzcajuYVccV8cFekvwCof96WxD3pAqRUvmf2",
  "key15": "jrSraH2R6sU1EaeZFg13EmqAsVwckzHVxW5giXsqgWbniNQFP4L5Jd7cry6bsDH7jRsDHVvmyen7F4PNzpjP16r",
  "key16": "5eiyLb5kvBFuQnPqmup3cvasG4VpqdAce8nEyFQ2GvXHsdi2YN76qNBYPAiApMheTAqqfSF6CJ7XoPHy9yn2QVwW",
  "key17": "5udosvZkkHaaMaRxfNLbfDJ8V7WfhTcAHun9CNSjKhEc4jcti8hEPQR9wT6vmkkav68HWWzFkXWiegGYdcuRbUk1",
  "key18": "2mK5u2eu1CwYAh8C4qC1K2o2KY1SPUbDneKgpTtHqyLn2stgQYmMSv9GteGTd4YroXn96THjopcwxzfSx9Mcw3QA",
  "key19": "5zMTxXLeR9N8hx5vBbAfNpu3ae8NgEeSMZGkSLGjQuKi5xBWoqs9DLSDUwxoPVo4M32QAtaKx1aqaG6Bajx1Bn8g",
  "key20": "2yo1KbxxpmUJijrA7APuxpDKdtqckHYzPmLK6R4ZgrddiNgW3SZ7an7Nv8um7v6Mue5yMs1JdbxvqLNSbMQWPUif",
  "key21": "2TMVqYDFnpYggc2nTEKAW3i4cTBxbdnYdGRLgSEsMrVQYkYBBSnZ9CiwN7AawYhzEDTxts5hYfjQrVqM1QeqARDk",
  "key22": "4nXo6dG4gieBa4rT1RJva7sq72o1q9CVhDzFHXDPfg5yxQraFaL5eX9TsBXVwx63yUXnRLpQriZXHBCky7cFuu3B",
  "key23": "2eUB8DLDoJaP1XgZTfsmxNGufabjZtQBUhc7m1j3KzpLfLhTbS7GW6HCQcRXjyvJ6zaXbcNZFWcEonY67DhZkZeX",
  "key24": "XLJLfgYUBTYPZ7VTcYVw9zHq14Dm6kokvPPXzreKMCe9JxUsJcnTp3AbzQ2tJdXo5xANAh7i6jSFBcEjwVgo8LH",
  "key25": "2CGHocwVtC9bj3ijvcy4gLUWv4MASYzdR2EyxaJD9sQtdN9QGCzvTJFSAXTi2gQZit9cfbGbjPGDSiBWpJuAgoJB",
  "key26": "5zSP4Gju5fNhHNGDdM2Yfvq5R7hYEPutjgLTqi7CRPKFRXCvjHV7V6nMuAfyuxG3mbTVpyjNkR28GUXZ28mCS63T",
  "key27": "TnjjfPvRryoJef5qnFiSh4D1fB9csuXy6WffQ4ghRL4SfSM9NkwR9nyt24jD93iBJ2UfAkTKUBVhzd6xsLbQnAU",
  "key28": "67WuDegJ1bwd7HTAdBwGpcDUoX7L7s3oVkKp2zjMKGYXf3FaWJTzAtDbWozsTLpX7DJcM98kWy3BHNcn6iHxM2bP",
  "key29": "PuhYQoq9BbnMmSoo6MNJZzbfERUgVrxXEmz1HT4nHPxHdcELbt19qHHAoL2DH79RYn5XZhNC7XNR4kUaP8CsbCL",
  "key30": "4pupP8Ekv39gmRSQZKDBtifwJcMWScx2uYPEGwqhqXZc9PLhnZqiNVdbVwRU2e7gKKRgDSimtThHx1KfqgJkBxmd",
  "key31": "cqH38viiM19eJiXZaNpn9NVUrbGqJTAztKYyHjTJcM4dL3KKG2LtZdhrJRZq5i5UoDKXfTH8BQH4GJjvkherAft",
  "key32": "2s3FArYfu6phnNnAsPvWFBZvBAg9DvDNDzZSmfRrRHDSeTCjPxHjbVvxwuqh6BMHXU3v1Mjfcx584DcJVKAJH6sx",
  "key33": "5fpF5ZEUqcbw4JQkqCeyaA3NCGMSXFf3upPADbqSYnqAsABsRJFgwQbERDyr2rSkzfgqu1C8F8AAdF5zHgZ1G4uw",
  "key34": "2Dy1A85Ud2FM1336BpaytWgyQDr8Th9a6BnK83TgZLa5uy5E51ACZPqj9boRxcXQwH9JzEVBhC2ntkkJCTfgdZPc",
  "key35": "3yjn1hKkgwpg5JCr4YKDcioTdKBUApi5MbV1GftAhUTvQyuCQBJptvd2NsDcKdv1johj727Nejr33mJQk4vBMVHc",
  "key36": "4faSmP6Lkm9gZdQftRLCDWxt3XrYD5b3Z3Uux7rHVBz6ZtRLxCYs6vWe9Vp3qKLNwoosCxQRH1uT52oPbi14Dd41",
  "key37": "3r6vHXJVPUMWZ7yHoMpxTpwuFFGWoXGjJquxcVHe8kgpbPNaRy8QAh1i9wXnDfRhDDkwSTWRx458XPCKLQfG1fRe",
  "key38": "5nYbjuKx5zHh4XEdtutWnX6FDdCbnB8pby6R15nptr4KZ3GEjRh4P8MHD1U4jowry1qGskLDZvZnp3LajkWU88gk"
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
