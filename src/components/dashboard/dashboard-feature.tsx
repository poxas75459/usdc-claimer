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
    "WTupvqgrVTZ8VQ6bMsULoBTHqiUHKsvXehrpghzY8tZ7WDeBeo4vcgSLhfZB8LTCQW9zD9VKzciJQvqPAwGWsfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fxsG5EahganJgWhsnrxG8kQk9Ao7esPFq6EjqmEb5oxHiMjMn29frtJbmq6G2vnSECS1GumDL9Hs6kLTv11x31z",
  "key1": "4M2ossaKQaYoFVcBFCueEfbn15ams1Q8mQ4TEJi5jxCNh7zC4xdyTUwHMqDCJLp6g4WXHZ4cCeQi6gaQGq7DB6yq",
  "key2": "128MeKyUW4nSkCP6mnteT5Sg3kVz2NqN2LBbFGHTLaJi663ZVQJpuGeVZFRaDi3iNBePT9gdPvEco98ucNVJvPaT",
  "key3": "5pYz5AtDpKHzWhNpEK7F6ofjmWtCGtXsjtnjp7XseeNmGeovKLXFxKypDFo81Bs5Ln8i6y8yBKom8Z2xDU2heP6u",
  "key4": "2ymdBNcTL9bd9dHHeVvSt2MBWq8fQdjzvrBZYGpB8SCUNde8TVAhmt1aA8xvhiHfkW6x7rFn3SoxzTXe9zViK4E1",
  "key5": "2Dmq8W7jZMENkaqyzF8Xj6g8DH1Tnkpu2ZcMhjUwqNoumYJTQh2ccwNGmzX2qvbGEsfsweGy3TYwPrBaZBZTECUo",
  "key6": "4CuEcyN1SKrz8ZDoA7oAwz2dqiPkhew1N8aoRZ28zAzUnmKYHXnPvYpmErp79jx2tjoYqH8HRg7ufAycSWdDxK3v",
  "key7": "vmXr8ccL1ibrX9mBQie3uDXn7ufmexhdzYMtGSF7fxAf2WRYMjp3mJ7ZYYf76Luj2fZYuim9tQWAsJeDjoNjDQJ",
  "key8": "3etR85kqJCib4qjC7V4Uh7GfxosPurUrV5t4khpS6pNv8f7CGkvsxfYuoRVKHP8jDJFJh7vfD8XgYxjXheZajeNq",
  "key9": "5NTBcrYyAPKXvBCXxgRPgyqc4RAUG8Fz41o4xhXx5xb1bXajaJQ9sE3Ny851ZqSwh7pvf4N6iUf8DAu2vU8VpLi2",
  "key10": "2QQZqd7edNQQcoJ7R1ayn7ecNXmA6SU99rpofTEyR7EZ2zRqDG41fKXSDbocRZYatLjX47Ad1VzkaSaznL3eixwK",
  "key11": "2r3biqub5szjCLnthCzzPpyXpzv2AfwYs9atDqoFBzDTc4tBviSaFe6xKc5V7SS7cuzAYm9xGaRChEpMmkaqyTVg",
  "key12": "SpvJABSpthkNJgfPuQZdiGuM636HjKtp3aFiQKpSMzePPt5P5obPVhdMo8irs1kzsnMnW1jo6yHtZuNMZgVH6gw",
  "key13": "5N96Y9RCDPfHJ2PQaUVfqVRkZdvcexeHFV8FwLMcY44hRTr1XPcarLWydYhXUv5zNKXiPP6HcRRpsrngGN5a9CuG",
  "key14": "3DnEQprXPCDWvWzDzgMUdN19x5XnRpkJ3zkvZ1mXi5bzXjyEgxzyBUaTHv2MMtMJJRkrFN1mJEGT88xtEeq4gY1K",
  "key15": "5thGjfAbNXzNtFzmP3E1wkAqBogLB74Y5PmFJ1ECuitM2t95718UPEXhUPMU1jNWERKnt4fpGkFYcjM7XcrkFEVC",
  "key16": "4mRDhz8hEHUBCQzyTtWocBAReYxqp98RE41yTLiN9MKYXezmevVmMm9sxjPyeLPmfhY3D1S3wQy28PGwnk7yLFVs",
  "key17": "3VGPMAxPywy37WpcnVGUdq1BxznsnmPTv66KnYqtvMv3rEPsK9swNAgduFJPWHC5911HM5qazZ62j5CMAcovRYe8",
  "key18": "UHtWjf9kVH4tpHnLsdE2D9mPcDW7x9fQ3VGRUHAWnkmk9LCVVEp9VyMsNj6wAJzA5GSoqxdGqv2BUPW4sRRZnmE",
  "key19": "2CrmZsiWmp7BJYMHu1DEzM8RtvnDPWkQPopWpsvRE3rZ71caE5YBTT9ngnPrmX1oU9cBmBtzB4TfyjdLr8aoGGR8",
  "key20": "3VwEZM4XnYktCe7kj4RuWF8cb6FaGbnYswcBNqkqKAX3owqatbsAcMGinDpNL4o9Y5gn3xh8fL9C2EhyGc8n78eE",
  "key21": "4rpr4C8zgKuL1u9VXmwkyiJiAYPRu6JT5QymgG9hCXZGbwqVZhXt8B7kN7UmMe6MF1tfW5N99ZtqfTjjBanog34J",
  "key22": "2cMTczN7MVAQhRVi2AnEaU7mhnvj9AQfTmgrargaxT6jjz8hb77C5eJpwQgPSuXLKeLaNbDaSBtHjUwqBaQZaaep",
  "key23": "2nLLRhvqzSK8KtfJKPxi6jddjAQZQUPBg43PHWmx7EWcSvraD8ypAR5oUYVVdKHA8KVbojZwzKS98Z1r6hgBkPnS",
  "key24": "3kLTfu37SC51BGaevfatuaKi4ABVAXHLE4fUmSowRk8LDxX63B5gDwWQ2jV4YEuDypAupVpTtJn2knu4Lk1W7Qg5",
  "key25": "4yJJB9qaoxpw2LLpyh4ic8ZpFQnnHWDNXo7V9PJTBnPYMQHVCKnM53kHDMJNBZ6ZkYR53oV1SZC84zwwErq7Gtyw",
  "key26": "5SbCG5TLAFKE6PzYzBv2UjJ4MA5BDmEYdVMrzRnH1DU4v2eekcTqXoN4dacXVLvxGRVXmPhtRFuTUoUuXGyZLfGy",
  "key27": "RbzfHP5sFEpViXd8Lp9Zgnk9xFKKt3kAZTFLYDd96br3VapHDbJcLzLSqNkiTDx2qmqZxs4cKkLks3nKSmJKCTd",
  "key28": "4BQ4wwU2chfW19WpJWUABnTF2KGbsN6o5okf3AV5dSALj216VKRZvEnZ2D52fjEYyWkki7nQt6h2dkJ4NekBpQX",
  "key29": "3CqJfmGF9sNQ2E5SLWPJCZwpv53hHk3XwXsMtXrf9wBrp5yAT7XG6Uo3Hb4vZCnN4bgtLG2QGuJ7wRL5mcDGpRki",
  "key30": "5pUovpbv2KpjnpQk7t27xTnnXEQpJU6Vem4MJUopgkcjkGFkD4Da3VwBHMSR7qFd46NE1m4TBd19BZsrMP2y5EBH",
  "key31": "5BQnpkjUtVjaU19hbufzyoGXCUh7cY2MWQEU3Z6skBJHmwJTHq2Xr2uMta6uLFXSSuJJotURVJbjQiU8ky3FAzRb",
  "key32": "aTKm85gFdTrSAKa2e1ArG8HfEdGBv76cz3JVsGRfkhNP7i26A5pPnoWw4972izKgnuhdCoM6o9LsRXGesANmFPR",
  "key33": "48XxZqrBsDFGdGNN3iMCZPQCJYpNGc3KLLEerzLDgTW74mbSoayE2U7vTFNt46tFbP1vjThyDTUABUDAq5sF4WED",
  "key34": "3Nr7wLMb9u8p2inAhTAafvHTz6SLwhFCXs2a7vTGP3ercm5LimBPe8z6W6fjfnaL4tNxy1Pmmxe8QbJEPWpCeunb",
  "key35": "2yLBQNQ4vgtCiSBBmntcdxhqdSEFQWS7kqJquVyEjJtfxTf3jR6MfRrdaXECGAvLp8t8JdVc7h1CjVm5yTDbSQu3",
  "key36": "4eP6tC97K3y53gjCkkmvTWepRhRYqierGYDuiLYNzzPmiJnaLPzcMfh2KezD7SUKe3u4X9Ft1hegR1zTjMErZH8N",
  "key37": "5Qfgdgqc8iAuV3RjJ6EV9aN2vjUvbkQ96hxrLW6AgWWNYfTf3RTW6KCtsCj2QksQtAcpPvEurMXbmK2Sv7nLySBy",
  "key38": "WizeNVY5ny1tyEuwswZqvFLakPdbKrBMx5NWa9FpstrUaQHxeX8CE3K8mfWiRG9MD2FJqfdUX24oY7Adei9saWU",
  "key39": "7ZVGyT9mVRqtUVX9SyxhNae5LH3t99SVDQzrrsiZUSrKZzEL2hXb9K56oRRRgHvJ3EAfnasJUJUSfKzpAhBnLz6",
  "key40": "4kmveYYw1F49RVHMgZx8tWL3Q5AKuGv6t5HadRtgVSuBmehaaWcw7dkopGry3F5broZqwrbUDvHm8Ft5dMzFW6Pn",
  "key41": "51kkBk4N1nsSgBZ5XCtMwzgyaUcbeGYiuGqABnN7B11c7fbAiRTTj6LAzAdV6K8HLnFZQEFcAgWKBoDh7sMXWAzb",
  "key42": "ULzgmszzfvwkk7uYu56BnMWWnVrm95hPMJU7BT51Nt1eg1upGmLKkT7t1geBw2hLFHQjdGq6oLCAAHqin5c8F3t",
  "key43": "4QA3SDSV7PRHJhZkKGnKSvdBthd9K5xmdNpCpjtF733jF7xx28UUf1adrKUkSWrymebHLcjFLGWsSLq4HS48S8Yo"
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
