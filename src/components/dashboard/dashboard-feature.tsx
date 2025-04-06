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
    "5dA7NcXcnsexH1kFXh6rcJbksQh87JWQFn1emWTQMQ5gMacmX87c2JF4y3McmEtDhu3uLYh1MVEatPTkkYaYnWHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z9CqiZbs6i1GZSkJMSLNSTtgpbAJyRkJtnj8JBFScM2inA77gxsc1XbNyafQaANGSbNhvRfhka39mpvCepzF5C9",
  "key1": "4pvAuQezXoqBC2RPmP5J1BpASpxyby6JRJQfTi2gjCKP5ZDCpY5vYKjrcGePijFiL3yecVgPB91wxLrZ9XVQZiLc",
  "key2": "rHdHgY1KLikpDYSnZ99Bm6aomnMBxx5MXbxQGH5T5XvNFGvoAa6snfMKe3AuPjKYoPMJeBvfFwAu8gBBdCTn8xU",
  "key3": "RLJCmczsiK28JoKnuRmXLsAJuRZfvu7ExjEL9m2FbWhWbkWr2PQJVCqppFYQZveYkxWoRzt2EiWcnFUTvKwD9LT",
  "key4": "4vcfQrbaXATwcR3vCZzSGj7qhNyAGfiL9cL2fjedSznsWAsFW1ma9cygMTHna3oxqJMdDT9iDLx5Lu7WL5wYUrcB",
  "key5": "2oMszbf8ajNU3RDQsSZX7H1M1tuquKUjPSvZ487hiphyMzTexKFxuwxRgr3mvRgyyVWR7CdKPx5k8HbXEQVnqJ98",
  "key6": "Rarc3gc7sfZcZxxb8Fmss966JD36VjnkACir9jqzivPeABaegz7EMpzyVPCiG2Lnq7znMR7Dsu6dT4ARErCKCcE",
  "key7": "43UPigPkpZmm6KmPiJ17tWDj3tSagMimA7MUyXM5xqhrrWrb8WCb6PPnx7nXbFaPkk6BFure3bVHRhnkHVda3cbT",
  "key8": "iCocxso36kNQnEQzd8kCU1hZhwvs4SGssHCU6weZHQ7Zm5A1WVBBtDbMjnGyfPQRVxMfxrAejiWhfwRLdQEjmHp",
  "key9": "QxXPQdf8mohZGfAh3ncpeXrXzSY8xNEZBGHFXhWiZRqGssCRnkpkV7a65inZfW4GskLPS1hUt3YmLy4c5AKkgMz",
  "key10": "5Ymhoag3tShyrtFtaNzU4A1pEqrkbA23Ku3PXn7VZC2HHapYRT3ZxWku87V7XTVAP2xnwFPu4gizhGVUQAktCmiC",
  "key11": "3SqDV3LGfxrVwBRvd5p9DKyncYoqnve9Z7hZGAi5qY5tVzp2WqmFv3BdU1iqX8AazG1V4QThD4f3JWjfmNV4nsMS",
  "key12": "3qP1Nj38RBNZFbpjSCcN9Ny8aRsLHG9AVbR4ca5utpTyF3Zg8qu2m9rCU1ZeJrq7bHuFpPGGaWruNQiLEiooq9NA",
  "key13": "2UucxSx8Pk9Vgq3wbuQXdpaeDSFscmoEzWQbVaLGT9LRNk6X9zw1QdD8CLvYBqkVSYsJFR6Hj3ywD6YTXp8MNTQD",
  "key14": "2a5HMyRZNCdvja3f6GuUVDDp6dkXzLNNxxPtmcAXBvpLGkNCkX3zMZBdE1nVLGnzQvER6s6tDfdRChGAaMEYERy8",
  "key15": "LVphAydVYwB9fhW65uY5WV3jvxeBo2GYHmn9t8zxwJgkKtimfy2VwnBv2vn2DAYg7YQCkqMqRw1JoYroDkqw8cj",
  "key16": "4NxtqSg9v8r5mEmNCkpWzVLUs5n4iUXeuEWtw5bbnuBm1BQS3VX7crNmxh48cMuMfcEvDGirWuQV2H2TvabezGi7",
  "key17": "2C9nELju6cKJyApKQ5bxEvLSVqB3Er8rPgD8q5mxumeF2nR9ZQbrQkBdDnVHYuqnewuPWfvLmM2GcwiadwnCGQkQ",
  "key18": "51gQLPo4FEv33wT4Wy2K2JZttVPQtQTmAvWPQ5xugUjDRt1dpbamEJRC8fstdsk8H77Sf9tfQUJREgb99gp1x4Up",
  "key19": "WJp6oNjv57LN9EwcfedaVocEeAEDqJ8oFfxdqrDdjcA8v64URZmcfwCMnsYMsywym2qkwe71VbYEM7NPihcwoLM",
  "key20": "PFbvNVnXJjPDGgU3VakTJ3ndmiwFuLjyVkgPiMHZo8EuKaV5HAbUgacJiHZcbrixWUTzEgd8612cD6e6YhAaQ3s",
  "key21": "3GJeDubHyoSyQkGAZ8xnbBh2A2Nca17wdtBVYEyg1JaUKtWdtiaUG4LEewg6wPMF6JmFe3gUt2WQqF1jPrRRCL16",
  "key22": "4FbhhEBsy7ZhFrtfCo3fM8snmSpidUcMDGoXwEpYqFBmWhRSennm1WfKo3MtJEdPeD3mW9BDfDCAa9Q5s2RV5Wud",
  "key23": "5cEdGR8NfcuLAeP2bieWygrqm5hXP9fzvPBYgeTtaq4HHt8F3svypLu6pHNjZKzMGNU3jc6Yf7ZCCfS1aLyaWyTU",
  "key24": "3A81a1zxAjoXrozVF8YqAno7Fcqwne6tLTHyNFhS3wBLymTtuGowmw63UJUpKwsqc8NSBqN4u4ysaUQmm1LTrRMG",
  "key25": "2da3wCxUdiGUeuVsSwXKGXqGFUuTyYXYEukCctYMQ7jwiQf1REv5r4TzChws7JJ2U6XNqWheGmrKPh3cBSF5Uu23"
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
