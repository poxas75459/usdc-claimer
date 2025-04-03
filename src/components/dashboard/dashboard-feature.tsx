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
    "3TMQKnwz9qtQV5MLiquHnbpUr3tePHonmdr8Hi3vQBNERScLC61T8nitQ5otguQS3iBJznLaosUuaeCkxYtsAiBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBPTsrQasUBfsasvpiw9tbv74XD1eefhor1q9pBHMHybEj2vZVVDFsoJvwf7nFSvXmvNFxerKxPU2UpnKm7B3vo",
  "key1": "5ERuEEPBcV86cvwUgwoQH2Y6UFdhS4v8TTg7PYUGunEFRwYsuDNMZTP1e6EzgA8LZKQaJkF3cfDGykdfEjTiMQkN",
  "key2": "5xnGck54YSk1UvjmW1vxUtZQcWpcBQoaoD42ix3VSXnegp7SdraCWPjqDbwtQWqQ3nkyjFRkUxHtUjzgxGuVvcwt",
  "key3": "3qkTJqs9Jg2JWAJwn1vaoqj2Uj1M3VFe8uuWT2m9VYfGKdZUWprz9tL36dTHzh1K5WZjK5H7csqq4hpp2T4np1Zc",
  "key4": "37JMtRf5jPyCdvn7Lk7wpNraPjiWPVev3VLjPohZ8xPDiwAYckFhDej7mvHEkhW8EuNKPY19mUFYQZRe9N8dotmR",
  "key5": "48nQ6Nu58nUp5Mcfk4Njv4iukXm7NrTnkHTxeN3wC63jEKgM6ofEDGRwTNDrg2yNUBi5h9XRdJB5mXZEafYCe3xv",
  "key6": "cyThz9TMPtcArU2Nt1hgmFZLwhyuFgrHKUy47yhaSMQc9QuHnRk1NMCc9qdqPRau1GcHGxarrq2QNkp56TtNkQE",
  "key7": "5higjh87UkZDV11AxGLVryBnkab5B4jhZDpzPEBsT9p6E8onGgwf1UAUKC5HsPdBeuuWTcyHYXtJ2tuPdzQzx4ju",
  "key8": "4V75RGAZDWeR7WMSH4gZRD7e5h1Pmr9yUadKD6AYMMG8A8eZX3uGkHyPyk1VPg2Hnvg5JMAdgTRz4cV36urnmMS4",
  "key9": "4PCNF4GYiWUJemJ612VGjk9jQts1CkphZnzCqWaNxNEfbbYM3PwDfZUjxJcHdybNecFzjhpgiQ9JkWPnRyXLHzkL",
  "key10": "5BP5SGCDr2w4oZ3ReVbFiWMqTb2CeHctpJRmuWhW7PJB2vwUXVCYjAk2QbJP78QogVQr4rui9BEbTCTFLvqWSLRo",
  "key11": "3ihPAJVSQJ4p4VYwVrPX1jEPFCHMHE2eCccKQotwLWe2fr4ADvuwdSWagSwNsG34noFf5xMheCoc1JYKED6uz6kc",
  "key12": "2Xwxe18TnHTGGd492vSS1bZmdPZqM92ekGRR2YWgSoBSeZzbEaWa7CyuBz5ifHSwok7n9pUWeWGMKs3TQf1UGKMP",
  "key13": "Pv7sh3tTYzTbuA5yPb5nGso6jbtegXRwf198seEqewv1qNZfbndthHMFiHxRqmdum4o8CbRaEvcd2e8zftqzcnD",
  "key14": "5n1yQpyoyUKzTkr3igTMWp4Y2Wn25kixkD4MZ78LUp7LfjGLGq3QzwdHc2AogsTX9pS2ryAhLhT6iuccoUXMN29E",
  "key15": "2CTU4WxZAvQEtvnXE29YLmcZ22Yyu1r8rgLdicWTkC7EZEA7aQGR3GfrmFVF9uf4M8HV5Dr1uUSiWA3wsEc39pmL",
  "key16": "5icerwNTMdsmfhw7poW8KJWBFKABZejCvj1McZ4RqTtsL2UCTmjEuY6S9STzgvbhiCSqjGJQ5ZAU5JbZxvmuzTy7",
  "key17": "2TMLfomweWLNzHAxHEZeMfA9n1Ezj9oBzwpqpmWMPHmRXryxGyNeKJgjuHj9x1SnSkKPTqDZSzwHTqLgp6prc3Fk",
  "key18": "4cMqdjiXfTNP69qyRbXqY1dNrHxwEP6gP3LnipATvsQQ51RCD7EgXrnn2R6gAxsWXnG88qEpTCq5HnrQJkF9v1N3",
  "key19": "S2SJWfun9DQdCtsknmUscW7PrPkj6E5Y8nZMp8Rcca24xVgaXPxq13KiQyaKuYAvARcAGwtpczWHjkVKTazfbme",
  "key20": "22pokfKzVrPKrVh4UaHwV6iqj9U8BHsXjmZ9ZQT24PYBfjRLVDmxG6jqfxNu5ziPPCW3KPKTorGMrLunApQ2HZg4",
  "key21": "2o4yVvQdC9owyNGbM2eTry12dtvWWWi2pAW5CR8cWyyH8XNgXibSEBaViY1JzRW4Vn6DvyLjeYmGovLb38GhbY75",
  "key22": "4mQHqua1wg5FuoXUyAzdr9qrRBvD4gNhkN9Z5cHJLTTUn1hMmcR67dZ9xw1JSqe3vmDdbivCZ1CWufFTUF5ZJ25Y",
  "key23": "2aCKBBVQ1vdw4PV91UbiQScYZBJYCy7qknt3X389XoL6fYihJa35HmKZD1bv7GASpygojwuAhvUPQCxSfeMDJKAi",
  "key24": "4TqdXeoWMBrArcoSt9CMCE3tocLKGQ1GuHeGZELFLLSLBR9xU1gZnanwDo3rLi1MoSg4mpoq5FR2zkkyAPzbvqSh",
  "key25": "5tjtdACu8fkjj8xbGNKhTjL2Uu9vzt3QQZqXXvbH6a5v2WJuUo6pjjywCaHbGVn4M4dDMe5i69xPYFW6U9kK26Qj",
  "key26": "62C29mZNQPuPsburhv4U8CBV7uq9vvuSkxax6FbM3yRGTWxoCrZXeHdopScCcyodTSAM3fJA8MejU3jWUjwX5Ltd",
  "key27": "2qkMgj1GNG2Tt3T8dcwetKB4QYattyQh1pGKSqngmbXnP8VXozfs85yC25cxS7ZnqX4hSKv2xuSZELEyAT3RMkD",
  "key28": "4JkoDTdY1qg9LMReT95yJpEYDZp7KEZrcJRQpED6QdZJDdBC39oT3YkhFtdNdbZCdVTFSebpLoEgV9uoFQDqUrAc",
  "key29": "5JRM8WKpMgwnPt8Xu4rz8q8C6nKMSHxrLKxjcN2swR7n31oEGJpE9wbr8jBgghn4Cjw5J3mS8xxTuex814YRSTqk",
  "key30": "5dH5LsHkPjVo1Kxy2pwx3vB6mbFn9xGm8AYTgqzXGSfwR72JSeVn8Aj23GK2xr7Y1ofk6rW21HfhF1683LyvX33b",
  "key31": "4jaUA3KhjfZeKmSzYf4sViMfhB4WeQofrR8JxkKwgb2qYbdHt8KP2ZG6rKdenATg2MnoH77JeTPHr8gZDZNjmHcA",
  "key32": "5kWtLw4b6yqs7Q8UD1gyRX3xkxRHsFxvnJdVFaGF9trW4nbiLL4gpsLAZ78xGRo9UN42D1GuGhbYfy5JsESwdTRy",
  "key33": "2r7GJtDLUEMzYsfbPM4L5YCscfyApQDPcGJVVsg2CPr3TVjJCqHbFr7JdLJGaXU6atMGfPzRL3enPLqnnyKYEvzg",
  "key34": "5KkHbjSBsBVgnyvUggjcXkARQLp2ydeTgVJZmdiTgTLfJPx2vS3AxAPdoUn9RdKxB4LZWvqU1KLDcuLGgzn5Y8BS"
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
