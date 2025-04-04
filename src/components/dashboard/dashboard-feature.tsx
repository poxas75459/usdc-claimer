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
    "3wrJtDa8nyGbx5Q2MajxQzw9qynZTGhMRTLzB1iMXJKMm8mokthkpHENtvrqkJeVofW8rEZNu9xAcujTKSYVNJrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mgJWx5B9e4DVkxEopyoCKGTVf4CDoJ4qn9tBPoSx6LsjJrNeDXjSCAXnVVE1N6v63tcE8jkQxDwQDF4YdnQ6mYe",
  "key1": "2PZwqREB4rMiLY5ra6jS7TJb2Qxr1ynMQszMQfkg6AWMAhsnYvUWZUKAnUY7DWUiadBrZQ5zm5kNbxEk7gVvnYc8",
  "key2": "2ss3aKETr42KiwyLt3vqtP8HTq3qoLwsg3HFvgCF8RaKrBazcsTnyGuXajxR5NL2EBSGpb7W3HQMbYBEWpsLHe3K",
  "key3": "5m3jamopgaUsUUYXeh7WXB1sWMZY1NUvuSC1Ks4mXYjk4TeVeGDu1FUnWBNzcbHXfTe1PsZLkbUaLfUxM5JWnQKz",
  "key4": "9iZxg5tCEakKoPtEYitFnzwJGcNj2WAv39TsfCBmZTWuTaw7tSSRTXcXZqDUcc68b9k9uVbEGJa8VkVJC4VdfAN",
  "key5": "3MnwBR8TK2EJQ2SruXah9R3VagBwdpdGwbTMQKBeQPyXnJ6ZmgfJZqBPNHqfkvFaipgdSBCtiK4r1aSi6U7UCLg",
  "key6": "4nZoUnchXPD4ZfLsKQaJyYyHzuQHTsXejD7m1WB4qdWkPTr8VA3EDh3UBhw9Gc9uneyEKWob2MmPgS6rnHGptjmw",
  "key7": "3q7N6KeL698qtSrBKzxnoCGiSkN8hdAt6USRfVJS6E2poMTD4AyYLwzrWNxY915qQeNjWXcm4xtyS8Dg8Up6ukpf",
  "key8": "51kvCXX8j7vPCyAGw65wa7uYuZWV5APsfeBxSh2iQRkdzwjBWgmQiifNgDs3cmwMPNaf1d6Ys5eS3Y9RaX3j7wqk",
  "key9": "2TSAxqcDYgM8rnZXtNHvVGUczUV86CEFfuWgH1YPFsCwrh86zqff92hAkSWPdzG4efJKNpbUxLb3anLp7L1u7CqG",
  "key10": "eR8ZFdM4jx3WjkqDLjL7vG5f4f2eAWMwdDKkpnxA9bdBeJdpnjvPPcUNGm27x8AAdoeAwxXivG8sqxJfYrGEYgK",
  "key11": "59gkPWMyVuKxNbNxPsZA99S49gqQEQjUiwRC94yKB8GMwfGWEMJPPyV5tvn4uSjk7WtMRYp1mZX9HxuXoHrBa1ut",
  "key12": "61tdA1ieZ5vbF4LpB5mSNjUUhqmsG12kAcwfcVJJA5X9Y7dWwFk4xVxCXzNLfebxviLPH6KUtNfDvCtax9H4SxZR",
  "key13": "4FZEcndVrZ3XRtuSPDiCPojwcJGk3hx7ACRJQUhtW6Fv9xajJ21gwrwMcR9vR7xBa6NxKaHz9YGVQH9rX6h38XfY",
  "key14": "2hbBECvbYzG5mvpkadRsSc4RmjUhPtzSjMuGtQoSjcWzvQnC5pxt7Y1HUjmmqvcWYL4VgbfSs2Esg5Xs8fnJH3Wv",
  "key15": "5s9rigH5uiXWa31igTtfQM5F16WmjkYydu4gieYRoXcZTwq5s9aa3jAs519LXR84tcy7Gcx3fbHBgH9V2g4Qorwt",
  "key16": "3cyhwdJC9KackLT71e8YD89UpUdNF786LU85BB9a15VwMhsiufNXcXqBXMDFQfBxvf2Xf66JMf12vYmfTbd62dzP",
  "key17": "61uKphiwLX9VmYc6Ce6FmPw3uTeyU6WgkAyVyMULGqwqEr35tNEsvESYx1yq7FNj1iBnUvn8ecvLgvZjo1JGednY",
  "key18": "5SJaSQnJZEZ422x2E3vcHArDTypD7NNMZZ2C74PWP3bFsUgEGNVzn5BAfLoYKaUKV9RU8vYyb6gMWs6nPmj3846h",
  "key19": "4T3b43qJsRctJearYwgFEq4dy9z4jPDk7P7nc4gyDCT4qXqh9VY89LURavoUUHZF9wNd8CjzaXxXfCH1TyV2G79S",
  "key20": "SZ7CY7BznGTAiVJFbNpR7inmLJG1Vp7H4PH2rk6RE7ZKi8G4yN2Zkuo6sSt2G2RMN9t5ava5YxbvbzRTxmCH4cQ",
  "key21": "2oHquAhfXXAx5srj1BT3q7AuNscdB5yEHTCnE1dm2XY44q9ZMSDwxLMb61BdhutE5b4XKSmGnDczynwm9ziiH9ei",
  "key22": "2iLanNrRtVXcoaGnsd8wxsrD8aJ66uDzUTXMt3iLcVgo7LQ8nmX6ZzGGu68taN8iLmCvCBhX5yLvpAzyEjG4JJuj",
  "key23": "5uR2gLRgVJrUh6njbU5YHo2rF3CvBz3JbvaNzbFV4zfhuh6sZ1ezVHLMD7x3SucibZDamJwmoKFRzDioTu8TVZ6Q",
  "key24": "4kq2yo9kydATCtQ9e84pBxjHn8HCphHRJCnNwcANLTvoAT34vaSGYfVJoGejAfKwGtMByijx2Y3dWQXnWUHEaNwa",
  "key25": "2hT1LJLHh4ZscarmAQTNmTcC5KydrT5jhNbgE962pTbyv2xZ9WFFyyS1Eudj25yA31WN8aL9EVhq7fvhHsU7gVkX",
  "key26": "31rCRe2D1gAEHcqtm6zAvHznVZU2AhqXceyYwhRZ1M48B9QooLscF3BojgJBbo3sdoQM5UQYBMhfmta9hewMYS8G",
  "key27": "64whoNYiZCCvvmwRuoQ9jFTTogqXEz8xVnRXcaVRjZ38oweyuzcLYjNTP2dnVyjkyuuc2fmwWvFtLGv3gSiWK1Ni",
  "key28": "5hoyytkmbGjJSM6UZrTtPC1Cyuj4S4k8vZEKyqUZa2FfNWninDqYCQynfEGKk5KjrJDaVFguuDYRneEMSweZQAPN",
  "key29": "LBtVUG1hV73iE1po48uedAYXDV8Z9Moxtdz5XHrJbs4XxS16f3moNJ9MxHTtDoiZdubDUiRc7eTMcVjVUbA7ptg",
  "key30": "5bFAdefP7VrJrRXRSuQ7vVCt2tLwW4w4kko1Kxwr5MgrkX22XtUuNXehAnrQ2seJ5656BuEQp3hv6RzXWyp1qnpa",
  "key31": "3NWC4uc1UfpdNZiQVBvAZvd1pRDj4fNFwYbzq7vbDbbXigsAQLeYXfGRyNqNqMDNQ7j9j999QyagxXg2xWXVrw6w",
  "key32": "wYpJijbKjmfCk6Jqx4i5d73YuD5XJBxmkaKKFD7AdE5VxZGL2RDMSsGTvAC7JtUHdauv5p1y2R9fSs58xGqZbu1",
  "key33": "2iuXrhmRRZsm3GrscYxZuraFdmqE4L33HazM7WtfegxVQiCM31mCciBBuJ1sPrLueCYgtUinR23pMkF26KGkXAFL",
  "key34": "2RX5NSGPtwq5oWjC8oHnj8Cz1HoHK9aVk7uSf1m3L9TCsBSv4xctosD5UiDz34oHE1wjP8h6KRmh2pXeWXmHHmgE",
  "key35": "Gq8aY91Gx5R31eL9dQeJzqYdeLoSnsrb4R7ZZyeKHUn8wEseVzrSBnpwWqyx2Grs2WsVSgTZW15XtXcg6ts4LqH",
  "key36": "YjJuog1BTT4L9rudEfcu1G9oL12re1KRPQFzZYbVKoyjuoYqQR23JBZqdR8VLgieHb1AttfiGcfamM7zYAwPEYT",
  "key37": "49gZTZAVGufYNmsHieJjHBobNjaAL7q82TNFavXQuGfsQ8MBj3oDQqjEDKiGHCSeuhyoCWNhJrha6QuG8kJziBXk",
  "key38": "g7sXjM7DT8LWZVGZRNQy382fvQCjFaKxMvyPSH7u2rqPGybtbWpesGoKgxyEVGnVmMpENSndNEhFqaL77zfHgQb"
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
