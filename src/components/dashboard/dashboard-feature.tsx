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
    "3w4uTDbsqSh8AoBhnkimZ5gFLcBArhRoVdeaAG9QTzAbcJmJ1AFf5WhafXPiQ2enWZnXgdixqp6eLYRWdgZ8ASFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sCsiMDe6wpniT92M439HhReAeoBAVXi3koKCTn8j1GE7mByZF68CwjwwvvJHA7srZtapLLs555V7NNvEBRvWktC",
  "key1": "3HDdNMEZCUtKdhAb5JGv4zJTaZsNWTu6rGhZYaSge19jcstmTYYzj1MfNSvToxMDFatzCC3vKFN4BGoY7DACmSEw",
  "key2": "3Me2g8de5RBqfZi7zwp5KCPuwgvb7eH9sUQAF5M5aUo2HUhpC25qgN28U1mNFEQ4LjfWJpoJ1P4mb3G2unX5N4nT",
  "key3": "3WsUkpm1fr41NUruaSfh9PoP9VTw71LUo5tbF1oeZ2o1s845DqVU42X26QvS6ZetJrvFnFVNJRWPJLunnojWGofR",
  "key4": "2BbA7J7ZbvfqCRKBkcA9Y2KcoXwkgSjA8Y8EQ4qSRuxncnpswjHaWw2ZZoXCbndQTjZvzM1gHS9Jhd5wrTLyd9kA",
  "key5": "5gbM2CPMcMLqTpJDsnxJpByvw2tHfs1UrA5MRmDUfwE1ZXWXKKrwER9T4sn6tupCtQSRVLyCyodi2X7LKr56MT6t",
  "key6": "535LZygRXTnEb5yE1Qtn64Gas8r7Xp6u8aaUqEGVZFgqmjVfAfdrf37Y7KjrGEKMxwXrd2PrqY2Bz7q5Y4eGsHWy",
  "key7": "2tp17LVrTkUYXkgQniJ7CmfStjm9CFN5z53MNTJDe7fJ7uk7oN5mtFRv56n2sTckUtXnjVb7s1tswM3sLhggmYpd",
  "key8": "M6h6SUKkrVbyTnXq4u2no5cfPeVnmbRoVaX2nGvDqef9BjZ3xKu59v9UxkoSUL7oqz5MHTVDdGa38tpxNK9S6NG",
  "key9": "4jYrzTZw5jEmMXizmEdmunDPskSnVeYGar2oojcmNg3a1GQQUKUY3NUA97mJg9EFa4bjb33wUiJajRys3J8RK69n",
  "key10": "5K9VEe1i7nv4SMa59LN8RzMvkY1ry7gwqCpTKqj8JVrSyH5Ku1MSzZxJY4XHiAaaYPw6Cb3LG6RDaP7YDf1NEG6E",
  "key11": "3TTVtwLtXeSMjf55x3ro3peqhJAu9qfU5kfLhidnM3doW3Mp5ikmh4YkyZKnoQ7V2hf43iouZoqcCcA9ncdQJMJB",
  "key12": "SoTv9igixSPrSJux16QB6vLeBY4Sjcj4hGw3cKdHmVvx5SamKoRUMHPo8uUw5UA5otVzvn1vwShPMWovyPGoiPq",
  "key13": "UZT2xjGPpKjXjBKe7TemwHVRNgffxM94qeTunad2hHts9xNcDoJhwa3vo4Serpf9zx1k5VtX35C8EK6ZZziyk8x",
  "key14": "5XCajRVugRWaGYMeuxed1zc1dApwUHZd8CnQTmbM9NuDSuAdcA56poAiiCL1nAYK8iyWM3QiaHZGheDeuFZhcyYh",
  "key15": "5wFNkJG2ttqnxK3wX2vaxAXJiqmoEeoWAPv7ujK3AbNZWkkJ6EqCRtsQGyX2xthcmtr2nXuGVFESFLoE3mYEDxhi",
  "key16": "UTLCBd9sn1iAkDEVfq9FRJZot6Zs2T2oza79z8GsAE8P58x9p52jqpgpdGwi7Nj8WBKBnsMB1imB1Rzz6R8bJQ8",
  "key17": "4amdcAxWoXDAY5Xt52y5ubKvXP9VmtgEon9yqTEN5vud4UPJFdDpAEddUBfXJhPKvL4X5BvF6pcPQ3SUEa162gek",
  "key18": "2ZdxMamY6ur2DAW9A2pSYsLp7QnDFGZECgRAS2ErkeQzhmmSLLgawSGFdytmxsT2eT2PrA5QtJCqvCbrtJpPESq2",
  "key19": "SxN3cGonC5y1oDo3nRFdpSkPELqeFy2Y8zjyU3vcMzCH7nL628zHCcuqYmmXKSMG1P56uvQmqD9NCbXVbaeUPjJ",
  "key20": "4JJgLLHDGYQQkG8AKv8deGmm5yuDiYShnWQFhZ1gHKN4Jm4cYfv7iH7xvqvFtboMScfzU1vttGsJ8XeRyvBMtiUy",
  "key21": "KSuMXu4wCEstHvokYsEmRDck6Ht56SPZYBdXqtCvBQKUq3CZk4cSajij1eyUtDqP64DvjmLVV8TqvSNDjKR6yL5",
  "key22": "5ZNyfXtDWHwLjKqnzoZ7Vk1LuxdbCpkj7N7LCPfYgJVWKYLgj33Pbpxj8szciyZqfctLZXd2jShjg2m5G6TwZWR6",
  "key23": "56ve2VqJjtvU6RdW2ZHzdUXSBCVv3qyRgcoZSSBsbryFJPRyknMDQ8LGcY7izrdDmMr8bwob3YPANCVJf1ifu8c2",
  "key24": "557fvyZF9VgfJEAf3YheMY3wNQupVpHmrTZVD6Hn8MruMqv34q3WSXQA3DhZyPzydLNrSbpZ9JkfnsLR8qvJ3s4W",
  "key25": "ADC6WiKdQMJzjocz31gjxw9HrJsZRbSzGvLDvyZzBFS3JPMFrpwS96zEXpQzUUGKZa5FNwJCASPUC5ebirS3ZsZ",
  "key26": "3BRQfDG74xDQrP5RFL5Q8FZYq5GjUkGQdt9dEoEXG9UPiH5Rb9JfnwuZKNfazMGr8qXJHsa6FeYR3z35YvVGMGPF",
  "key27": "5tCZdnCUDHjfevJcfSPApfdPWEakQjzNzitahVPbCBMeDiFdpviK3qfvMMQHcGjzdSmCCeBzbBtAhJR92BnQcRA1",
  "key28": "5EKUgympT5TZeMbVD9iq6XUh46UCbjChkaw5LQ6iax1LuuUqtYhTeL1zAfTzLfeuE8gdGswXGctnHAYJR2jWqtgV",
  "key29": "3rtq5Nr14XZRNDrySsjNvFez8eJFrxgxCtWztfJUZ3BgrWkZjN69G1b1EG9xMrKzDgFMUBRMcCwBun1QJRMczUX",
  "key30": "iza4z5HTgrSqEsQnrGWj5acp3QCMHwApwZAPJ8kGTuhr6R4bUc186XjUCzzZij7zuWgKLyQVxVRjGmj7M2HZQnv",
  "key31": "3WwUyYVdV7vXUXbUmgTiwTC1gotX8pEDLG95QDSPA9FPmecyykWh4nVymuRiuocByJbMCRr5bMmL3zSituFxXXGR"
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
