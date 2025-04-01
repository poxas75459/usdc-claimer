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
    "4grswJ3a1wiHzQi57QsF7A7CuQdyqkrEUtitB7xZtEydp8tyxUDGYaPbVjYDKnAoDyzoyKrANjq9dD7CMDHCDciX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31cuBgFposxobe9T3j2FDuDQQ9dPTjTohEB93ZUnAABmxAJ3NeR1N2RLgfC6j9J6qCkv998uUBW5jwBCMnh6rcL9",
  "key1": "dAHe95ucYrG2Lfn7pnzHmJvw75DJDhHV3dBhsY1wa5yJvvH8chPHRYzohAJDh6YWJAHkSdAfbmQUyptqAjHyvFk",
  "key2": "37dhk32GcYo7jGAr9MUTJGwVjfZxN5zVEeQ9pdFX1PvGHHXUPMftEXsh9JV8mG65cFz98axGHnpzJxgmVy7dj6My",
  "key3": "2FnnLWGSgy6Qy9sz9uGwtgAdtKpekunPb9phAguSjp9NW8ccB83z8XjsoMqmFTAWWU6BLB2BT4WqMTm5QTUgGjV1",
  "key4": "xveEL73JsGXZVyreuzBarJnfrtBsK7nopvHjgSr5goQxPR4a4EcU6RBGxy9qXqj6BV7HpT5XFrJeRmLvZu7koFv",
  "key5": "2xgPYMtPFkYQDbf7dHpafoWVvRHDvi6MGLpG2UZKkg23a8DYeeK8mD3T38vtKzf5BARmNjPo277zfpNPByV9S2zH",
  "key6": "4nMFoWgJKqNRbsGtKMX3r2E6GmTH7UHCSGkJDJvGsXY455gBcAUjd3CGsVbKCgoic5JqpYLLGWpqSjBHGVmbP1rN",
  "key7": "5Qi1TcpKXYPtKXrWqjkf2fFnXuWjCMZVmnp8GjXdPCKn9dLhgFKRSpDyaEuKTqBYGXBar9bqVA1JgvvNjLQZDg9S",
  "key8": "NbuiG1EHm3jm7mao2JPCFid5EZcW9cUhUMSRUupiBBxgV5fBEgYnHJUq7nV1qxMk2itkiC2CYGHeBUAqj3WkTHp",
  "key9": "4GajSQM5R9gPxbEw2HzcLEiJEiiGLdNc41qLafqN7ifzhivyrZB9pJnrWak9FWNDmMSL1iYMYDQDqN7QAgao7kp7",
  "key10": "2DmEcFGeM7Ybov7ZQqnLdEcXc4i1NDEdfajVCLpscMtV1xqiLvHCG4KVCC83qQSZPVq4TwmsrJxcwVK3bGVw8HkA",
  "key11": "2neRLFitsXBKjXhGFvww6EqvFhZqFMtTMad7Fg6rVjuFGLrzL3wfsgECEjnkVh7HX92FGKjXGzt7oWhYGDvCgRz5",
  "key12": "4dVUWLBTjYCu1i9TfjPUMbbLmcwxiZnVFqUsCM1LLYGZU4CRLHNBNtwBgRNHXy6uBrNkDJu9H5eGsnLg6HV1sVC1",
  "key13": "38tsnAXzz78PbhkJo67MLmrFapG1DCvXu4sdSSnvdzmqYmuQhuwRJqURVzCqvyzXL15ZPuLpDpNGQ3F7QF2MDXjV",
  "key14": "5kG7Rw157BJHUJ15BiJnFYZDcSjJiZ4J4YPdctuTu2mqb7zPv13sYwsbUkNyjEpkvZr3z1NWbQmdWE1GMjB5mKu6",
  "key15": "3VM6faFr2e9QqKau2qRGp29c2suHAzk4aAN7CFZbp7DvuChzSPW1RADd2d4jCrF4bdCTFmMghZqVdLQoa8G4y9nh",
  "key16": "51J4Ea6jeyMdM6rKSkZQYrERNeedgwx7RqGNuqxE4YW3Xm2sRm1qqy697TcgotC4FkuKjrZAhq6PvQhxMr9cNQtD",
  "key17": "5CPqn51NyhDKcCVHVBit1TNBMN26RECNDdruK7nYLhXBwrHSqDhBei15h9vZVVbz72w4hBcjoM223fzKDQMPA5si",
  "key18": "5TtVrBHE2txUH6WxCnewd3W1dxXFT7GxDFy1iGfhXVyMLnHifepJptak1A1CWdAjR5TbU6KdqvoKW1H2ZFFqRrq",
  "key19": "2FHBjJMoZNvFoFRAL6W4ggn6AmRxmxJYtucKFGBcL9sPp49nusQbHWEQpzCbEQeuw2HtnPvZnjSZVnSu8GJGeChZ",
  "key20": "26iS6dhaeRM4mx9wwidm4NeETD95ExuVrUpmqp6gN5J19LFsfjMDrVpbbKhn5PotLbXXHhL6vPwz5BqShATUJCwy",
  "key21": "3KxFDN4svoRJhotF43TLTWZNA8HvsjpASKDGrXQPiDCQiGQ6FNwmAV5Ljv1hQRuhwrosHSH3pZXwqNU152vnLniS",
  "key22": "5XEuxVfUHZxFuDQTBY8zMoYs4hMgijP9xS3MCZFDhWyjbC8EJYxfQGiKAsAtLMrACv9oKtHmMvNF6sBXZkbfZXtc",
  "key23": "4uKyB2nTKtnn2tyn43cj4rPHuSD7YCnwq3H3sGtekJWdGWMRMpKbrPrXYysSuRnrHaTYWyL9nWHqgo5RLtLBdCD9",
  "key24": "3bfqaBhnzE4iEg6K7Dv4cy6zjQqcq58H3zkcXzj2U5pvD6vCwTtcq6brPMQX5CmPydNfVwqTxVotaXT7ig5S3J8M",
  "key25": "5eZMMrugYqBrZfzaz8XUqkQSdpDVK61x3ndgj2fXUqRSVDnMDNr7XLc449hjvtY3hRPaMJUvNB91tDP2JcoQH1pu",
  "key26": "3yGXdyVe2UgSw9ZEj8vbPrgyufdbmXfdrKdzPnAt81umNqsSE9uU3UHcrbqPDDX3xbuyLwmLLwmMdPptvaJbRpG1",
  "key27": "2MurYf446aWg9b8TygiVCTVkEFeL74LU7UTWRu6YFUqrDy8hztQK6pRMiMM3EU38HRduYj68eq3r1XEC3t8YXqZs",
  "key28": "3DVTTYBEyPkfaxqtM1qPJxcJrBY4wrz8Ae4aDZRjYMEZthkeuKX5PBTsCZw5EEe7YjQFPAkQ6gzEZ89YbYtaTTf8",
  "key29": "5ABF5TZuAwxPayPKKDYdgQGiemE2WRSykWXoucadeFu3iRxvX17EbRtu7L6CLRYkGencQnonNxoXWpbEz3ZEudUh",
  "key30": "51nM9iPgJ1vPNw2yboMTEA5CVeNgteLpN94ncvWcMG38227gsp6LnZao2Pfocqq7jhbzBR5RvsTM724VSc3EEwR4",
  "key31": "3tVMZW7WbVccNqzapu475wRLazRtp9QKK8UgGLG53drCCBPYBgDQ1f9uy3c5ZmagD8BX4nyPPfMncFbmwEJePCJr",
  "key32": "41rKAtP7V5XSrX6MXUnVDkywYMNPqpZrXGpz5L5qoCQFsq2mpStbTmQt9gwNcjnrbGNebTehHPct6XW4VKmXRfH3",
  "key33": "rmiXbi2mnSbbnvhyVg997qEMUPdfERKt5UXtXDr4MccKF82Qane5Du8oEtQFwHypZJtKu1M2cWg3ANcUF17pNtC",
  "key34": "3MCN13HrP69vah96yu8BJjVaw7dXjLdqjb11EML7NkP9xWdZuNkbeXsFr588QC5tE5xhLYZHaaT3aMvgAznfQujU"
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
