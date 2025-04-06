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
    "61vAwftdgCXc1aVPZdT8Rrw4VTW7BSLaQsN4MyLT7fFsEPPnexKdNFAJ5J5BZ97PRazLNR5r5gNZLotTnFzNmEtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jmNtu7jtii3q7BrYH4CFgT69oshWrA4XVKRLKBsJuYp34UvrquXz3Z1A6RsVXZPEgXc6pS62BEP3HP3FM7Ko3B6",
  "key1": "5jAnJvXf7iuJ8BoxhL3BUDLWA6n9SXV3sDsv3rPzz5b1oSxBVw3pWP5nSrfNAUzgzqKVrjyeSg1PhqUZ8KBNtuNP",
  "key2": "5JsuAVpJLm3uz56TM7QSFo3HSFroswxrn2nS3rBygW2yg81Tv13o1xqaW3KKCryfwWhJNq5n1He2mU4fHiaCQWA3",
  "key3": "5yXWSa1iWNYbGfUfwnMagEqRbm6ZnBp6T2Rj16gx94eRJ6oy6WigzhjgUW4w5MPXh8Ziq8csrZ43LfEMNHvV51oS",
  "key4": "43AisAnASbjZUzH9KKQZWWrXzDpGm5Dk7kSB5LVnrH1eNooF9Eu5ASyE2PeWfYqTy6LugDaSCsWBW5p1Dn5ZTs9A",
  "key5": "4c6g2GHt6gAeZFkA6yiveeG7z2P7U5mxrfYbxKBxszfMr6dRo6aJgSfZbxD29bN3ZzUy2XD9WVxsLhE4bS8M8UwK",
  "key6": "3TXF8djMLLLia1fdJDX9UauiW8fJSRnYpBE6itwAX7mVPxkS3M6ozG8Pkq7rRUWczeDmAwRagasWKajwUpNZ81Gf",
  "key7": "4jwfax8iSzDPMqwMQXas3d3xDhpK7zWHresSDRAH9LdY3WCGMCgDBdztNCy4jn9XNkEwPohYb89TsvvyUCEmADcv",
  "key8": "5uPqVUDSQmeURi1HP1hQCvEyBCZizFT2YoV35LCDHVv75tcMvVZrvcNTuX6EU3F1crhFbqimBKZ8jthLDVMrn5J4",
  "key9": "3VuPGqJzUj33u5JdU46ZLzjExuM9abGgrcMxuARsN1Eg68kUhYWTzNHRv5Suea4kdjSngNCB5aPKBCWf8oxqpPi3",
  "key10": "5SETRY8LYcGj4bRRZU65VnjcHNDL7Susch8Dc44aqUBvJDP3oGtewkqgG1KLSuq6qnS8P9Lb97yiQcdzxZP3Q9uF",
  "key11": "5a4LT9rApsXqLC6q4GeDyzhMeB6USC5KAL3W6yDSXES2RcisLDdieemWspyd3RtWpXPrwczzwf7arVbYPH531gM4",
  "key12": "39m7SvM1HH214vKLDjzpWtbFzbQwdxL2ShWM8vmMWFEaE9t6BDFRFywsDCfFTE5rvSvfcQ4n2b6Jmqg2qngkVaq4",
  "key13": "5663ksyQ6JKMToRhejkZfzmqGJYbi6S7CqGY5iUFaLpe6j829UVGzB9LNkUXp9CSNYzqC4ro8miHhE1TpA1xADaN",
  "key14": "Wh2ZN4dGiAUbTfReu5w2ogZpk3bzdWWTN6LxtPAst8PjypmJCrEpRsodEZoyZNaCqqUbuTxsXebq85XHH2UxYbB",
  "key15": "2eQ47giLayf2sNTgDfxY8Q3hrKd7Gp2DSpmRMzXnXBgCzFpKuVzz7ak1XheWi7PU3x5qrjbeiivBU1iTXJUu41NA",
  "key16": "5PU7AXbUVeXnePXkgvS3rVQTAoEFpcMk5u6wVeovZYfsTq9aspmDBCBzcsCEQtxFtHfFURGAQYvNv76zygzPrD7C",
  "key17": "5vhYvFfAEp3DSpCVK3HwsWbH4c8bFURZNKTX5C4c9NY3PvfD1UbggJyizDMs2WoG76P2qDAg7WYyUiTZF45BxBZz",
  "key18": "3vDvvCfwH7vAbQ3euwbv8SZTVpHFzEtvPy7bwRNhZkiQY16oQbJnJq5KKK3ufDYbZcN6tbmPbYtHNn4Da7dw1d7g",
  "key19": "3zy74DdYQ1ENp2ze5Mhc14bvNdaVJK9gZye17AnYcAv8Bw724mkhCoHzmGDoReUjhxxFoE4qPR76p4476YxdaGQP",
  "key20": "LVj6HxcoRXRvfgyL29g6yDxWnbmoy9K4jKdusvKrrYwqHQ4SbEkBDvpZhVD9bECUBVbh3XN8w71hmTcZzYGk7S9",
  "key21": "3fJSWyN75MHkivWuYAgNDrg8d1zWCWBX4FarJj7wm3xiFD3UX6Vjhwo3u1vXkba8j2DUG1NLNo6rNNx5MRr9JfBF",
  "key22": "4cxJgsimUrwpsytS6Lon9yKJDKMwncbZkeJsTefWe9yMNWGKJHvPTK1beADNp4Tonm1s3YRQbw2D8LpsEhnmef9X",
  "key23": "5cQMs6jsxzzZ3hUx8WGHQjS23Msc1dawW167utae8VPMoYberkyuCRapownUN1iSSxTuEQaay8RNXG2YXCj7Lrx4",
  "key24": "3tZpuhvzU3sd6ryXPTDVDuBZjsJAdVRLFwSgYuvEXd9kTP3A2v5TXZZYQnZH6fNHXzMqgKwKsmfGjn2BU3kQCnnK",
  "key25": "3vaU87VgwDibh3FoiZ7gmZ5pkLMmkLX5WXGeV2C6Ye53Vho3UBN4xL9PEWNPVWUwSbRBwocgotRQ7An8ekheAZuV",
  "key26": "rUNzMcNFB2q5BSng8QPy9VF3ztf6119krrgotjpSW6qjiGP8tXD5aCRWa9iFz5WjGuxY7ud44HeRT28iVAnnwEs",
  "key27": "4GJr5WsSoqCLPv1hNumPj8Mjq4xepFzKnPGC3NLYkHyKUychswJj4X9BZJ3VpSAsRzq4tQzv1Lx8ySHSLaLGCH7f",
  "key28": "Nd5qW8AACsoRrPU3y8M5XANmFcrniVKpSWk22DfJXBmPevF65zxneABAXie7CPhJZeDQHJmebFThjNpTC1rUYuX",
  "key29": "2dJxBYezVrxyZdqxXesjrmvbSBGs9UsPECerWpSPkJTRGD7eiz5HM9R6AAXsqyVUFrATfBezgzFGuyAtDPb6ciBu",
  "key30": "5eFh47BZGppkLUV1J8WTh9rkZqurYHYphWmcgebMLZyG2WrTR4thNgWNGAn5ymSwwXhmDbArGNEa1Msbb5NfPrwf",
  "key31": "1t2uQ5Drav2EDhEUzkkzvJ2Dk7i898Eebgxe2JpgDJRrvjvcyo68gMJjaYWD9C2SYHgAfKEiqEhhExH1SNADPUr",
  "key32": "3gnRKqcDcaLhnjdiZDCh8iFd1ihgRt3W2ysz4wZqKWTDzdBpuh7SiNfeT5VM82T6gCZcn4BfJVV7TQmCHAD3NVDN",
  "key33": "5vgwJmJVMWbnYCQFzbxVkJSPyqFGMEtfG9KMaBbvas1BHCEmEofxwHET8GJUYQoPhEez8Lf49xYVzmCR9yTt4nB9",
  "key34": "2UCAJFJd8TrnqUmSuctqTBFrSxu7AaQKdrwLFBGznrWmEGz8RJZLFxdN93YsM7fCG6yXRAWeJWM7HwAAsTHVrfF"
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
