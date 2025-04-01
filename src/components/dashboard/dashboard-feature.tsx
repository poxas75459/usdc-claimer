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
    "2x1z81EJ4NwgdTicuYQRMwgH3ThxXnE6KiRYL72JgVYa8xx5QquwpBd5Z8rdqWtXEEukVzQi74mnrQqdX2eUc8R6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yWt7bo8wJUWEPosdLY7dX6Eyz1W1b7kptRnLezxpPxWQ95FktV92uFNgY2HECGYvSTqGwLPfndfnQ646eKfUaur",
  "key1": "FANgCYsKRV26m1F9NozPtZA4c543nAXw2NW6PkmK3DvPFtKdjmDFa2Q2dUQXi5u7gmGRmSwuLZnEqWDDwhwQb9R",
  "key2": "NCbFty7w2k3CkNBbKQKucjgTZkhjHdtvoSwjYdMVKq1rgbffiojnPMtG6AXZL2uVkdYzAA1jyi2xYvknoJfLSnP",
  "key3": "4QPA1LkpzXcKNdX73dsx2vTye5SmTNE3da7uyWHHcc3ffV3waSX4qdYxTASqTYkd1sFVaDCLuN9SUonqcQM1RPHi",
  "key4": "chLGytu4HM51RzVugQdTQ4TU1K5bTt2FUKKbDn1tjZANcEe9JxwJrvZNrKS2EChYZaNhFtxsLNXqdyrEoXsGytn",
  "key5": "3av1jaZoBN5YdHn2doWXU8tnePpfyvnEJxeiCcE8i2eAwXEPXRqVkdCLrT9MAgLDWUsakxLys3XFw2dkv7xNLBy",
  "key6": "FYMtHf8GV7r2SofNgSa8wBRh957ZmsGRopgWq4C4kaPeP864s2AM1Jy2TH47nLpwLvPZkPny3FbFZsxhPtHR7Jw",
  "key7": "2KqLrA85uApR5pcfu5HkiQ9v9n54ZST8nCqmV71t34P9DuXpgtUBpW1BxAp5VcWbcyNfJCLGkmBb6GrJXfnn7AhG",
  "key8": "4h2g8SRKoK692KYJn9WmyLjAAFzjCeofrY8uUBKTvGXpXgybFBeSPrgAJAFj7rDCuAFicjx2YNtBSnMBi7R2g84k",
  "key9": "49sGJbDsvaskrjhCN7e5d8qdzoYYVzsnbqEawAj9KNWtjdg9DUSzUbS1Yu82ioywjsz4bGVXsNHnK7x6njEtSULB",
  "key10": "5iznC97CWGgKyYe9jd2qPHmwXJvQxqGhHzFEtWFUUiQNM7kFfCFuJauF1SoPDpQutT9s8cRYA5PgdGsTXv2TskTs",
  "key11": "3SLVE4EVoBAGVd34GssNKqXG5QbidWb4FhcKv1aushqkbuKFcRpqotMc3PM71Yv2d3CXnQKEqLtWYzTvKkTVKirb",
  "key12": "tw8n3fcVetCFapUgoirorg99LHp3rNPZ5XKpVjLaU3KAXHuyNeBx5k6JYFXYyYtBw6HrhgcqBvpkJznxEABpm9j",
  "key13": "soZeDzpD11gXvP1ZaLQvSjgr9iLqHGHnFVLoCHHdtdwaPLjbCB9TUYk6hkXEMrmLyq5pssuNaHFga3qxqLCBN6f",
  "key14": "JnPhqKqnEr1eiyd8JoBnrHsXzxzgJhj2XhVvtDP9Eexhn81uAb9C3SbRAs8QVuw4mkAkT3A3QYrY22BjyRjzyfs",
  "key15": "2VgrHdsADhJaDPwfn1qFqGWcaAdz7fEQDFDomenrAiU4eEqmpQ9VhBBv7QvtzGBg31pv88vAwNrZadd4a5txUuYz",
  "key16": "2JaseDiHENrHPdvgXCrwcj9SBu5DdgUaAqFVs22PdrqBVinxzMrKjdrbChEABQGXoYPdKLMCocUqP45LuJryix6",
  "key17": "5UUuwMTQSUpXTF4F42B5qi6x2ukbykBikKu5b7R9bkKAJREJnzzWUEFKGtXiv1hReDczM3P8dz1CShLYoSZ2BfYz",
  "key18": "54c1rd1mGHQEtyHbEzDY6pty87ULGVgxNDfgcTa81rvyfUh7GezRi4Eq9JWZpL9Am3gUHaBXr9cD9j1Y9JkGEr8H",
  "key19": "2F6RZLRtT2bDdDspJVbKjddJsBiqNXSKGUwt7A9k7StMgQfDbyHWZtdJjbeAVNKPVZvnyqS8GW3pyRLuCAbgNkBg",
  "key20": "4J7JXaTdMVVKMZevJBc5wfQnoFnj5Wi1H76KjJb4GmKyV8WixeeyhgiFtnGWxcf8jMxKgE7KxRpJGaPxAy2FLVmg",
  "key21": "3GGCU9N6NT8CLS7rNgfWgKuAfwMfmoW9rJH9Zm4vf8d5yvbWTn2185WECda32PUJz1oKjWEoj56wrrbsD6EjAFzs",
  "key22": "3LKnZ2vdqztDjzTqUk85mUJUK66HCA4zXMmaSqh7djfqDKVu6q81ioXa39d9d4DQwBB8JNb7c6zJJ32Fas7Y41Ry",
  "key23": "62WD1cxiSuWeWf41xo39YkaNapztFFgmfS3NULAqCuznfgn5vHXr7cJJik4TN7Rsr25YwmwQzmDohRP1nE7cwvmF",
  "key24": "2JAC4vgjXkh2RTw3ezkhC7TMzcUKJ3tEAQnTyxHReNmnyDfX3ixqj1PWs7yEyNy6byKz5Xm8W5kU7uLNStvcp6S3",
  "key25": "E4h16X8QXcPRGzZ21duoQPkTKgmaJTpeqbN39XXfiyPd6EJtT6fjC6JUghPXQSmTvL7phU8k938NC32aYBSPhX6",
  "key26": "4DrewRsfZR6vDeb1CZDc6hqTMfSRvxhZFcxKyV9cjpR6tGJ7qqwoC65atz8xUCL9fEytrNxxybMYCsdRjK7ggWVx",
  "key27": "3jktcLEXDo6Vs6TzPE1RUHE5QDd8ZereuoAjxtuPGzG7NreYU6znb5LZiXnYzSdKRh2PwcVA8fhiaufKzXjKQ5zY",
  "key28": "65tigEFZoFAFTvLZ2vusvVVKytJpj2vbV4UMCpy3TrTnmN6Qr5FmdNJBk6o8pA3gVwnBaxf9vFGRmLZnHLdpKqTV",
  "key29": "Te7kckfK4EUVcMtwMmvdXoU9yX9EdEtme6bBH3h17WZNceWpuuK8m4gvYBQQfsFkFijPjwYaHGnwZR3af4Qs7hK",
  "key30": "5S9kaxZpYCcwwPz8g2m7oeQ9CwkXb5t5D6uW4warZBimUJwaC6hXQ2xbHE633pWWbcW7n9BgiUgbSPhcqqTjmBj4",
  "key31": "36znjYzN2Q2P79zdvKrnz3w3gNMWUQzvpr3XyxJ28P35VTGv7GaU44qxT8JzuAwZS3e6evzAfMSdiexMpXindydT",
  "key32": "3XPX6fHgXqVDfoD8As7H4TQh2yNyABkntwZmvSMtY8eCNsKqA6oEy9sVoVXtBgxpxDtuqcce25uEJah8LFac28aC",
  "key33": "4oKEqXTVwd4QssaJUs5qj3qDeunyQJRHfsnhJ6YjtfGqDLkMAS2S4S6KMakcosAPV3ePXtSuSSU3kHF9t168ukTK",
  "key34": "3CwRfBdqNHnQY9Fcp81ib9NCHYCs2ywuJr4z7A5RnTtFRPUvbpLZSo8PWFGK4bF9rFgJfQux6QjA7Yv2gDwqxsoR",
  "key35": "54HsV7PxNVEywPdezWTSULFhXUXzGQ9aHC32nX6GmpbFD9Ho96rU1xBMFCkidMdPBAy7XncGK9dMhSx8SCCkY2JA",
  "key36": "3JtC764jxNJLaL5ba3g2uGMeeRSCL3xYyKeT695FAM5yN1uxTMoPxiEWmA5x9mcCpPoFVu9Gn8U7pbeyFs159XbN",
  "key37": "2jMuvNFtVoEeVYQW1Me94wd4J2SVPqm6gUS5q6pGauKSpFJD66X4HSKy7FJSZoeZc9WPqdZfpr6Uaocyuspn7Amd",
  "key38": "n8JstUqVSTd4gosVjmJiNPQzPEsy1G7BpjUuarutdhAvVSuhNBreqQEQYDZwntEzwaQTzviKyFEQM9mRpAUwmdj",
  "key39": "Xz45ze8oCrBctYpe6MqNpKNe8RXWzXXZRKHLkztnbQJeRMhyNj7GpSkNL6cyNekz648ZznNPJir6HGVhdCnev98",
  "key40": "4gBPjL1GJ17LykiZcaLpkBqFR6hgZqD6RZRT33FQCY6eBVBiZRoyuK12Yk6urqRF2zmowVQbCArmCNF3kGHwhibZ",
  "key41": "3jY7pKGCH5jG149WfAQmj3VhEigV4yGLAFFawiKTfPPgKg4c3F8RTmMJxM4LurvdYcTAGubBqwaeWTy84TqUfY2V",
  "key42": "4ySDNhCCqnUuVkZ3EXcfmuJkGqkkyhQjv94VUASFGjqD56rtNaP12DYUxbwTjZiP5REyYYh56XMcC5QrRBRHsRJo",
  "key43": "2bYZXu3BUXoWBp12HCcfufMZzBgRQ6EXdZChGAAAThZbsLeTThgGuGF5SQFubZuoJ5aF8nCGFxawCsPgxNTC113k",
  "key44": "5iQVdhkLYaHqxTywi5CkUNTvAq2DwHgCUcyCEtCYbvvCCsXvdsSCLApnvbRKssBi5FBF46z8r2kkmPc1L7y4pEq8",
  "key45": "3MN865haC1mTnGMjg1JnCNzx5oNzNpEc7WaSkx9F4DVgYEBcTbiSWgW8G8rrgrgaNDPMp3bfD6wtgat7Y5wQMmfE",
  "key46": "4vNgz3WnSQcnoNg2wemdZdsWDP7wrfCYiWdiwuBXrsC4NoqFYed7e7GG6ZUcv6HZJPpiQTg2BgtumZPCKgxEAhQm",
  "key47": "DYWZxJpK2sQJyBXQes6yWSao31c8hTFYFMQK5E7tM6wNFKggh6YnM2Wmq8MVzq4DojzC1hPhvAbTn9cWGZoyQv3",
  "key48": "4JdETuUJ9mxPw2UyJgrexuzriUk7PH5oTzGSjSWsYJdZwdUqEKgqxug8aE4EYfn4bNTUDscvFSY6eQ5LEMruq2bj"
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
