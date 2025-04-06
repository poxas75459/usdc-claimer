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
    "4Fdaku87yAHkTbC9GzNaFjrw4azWBcCTtpLXRJQ1LWJUjsJFX8YG4ny3VgzSxzXr2biJurNG7EgXxCbNi1NFDKHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J6s9LEW2JM4RWDbEcCyf9nxVE4RaUgXjgYKxTia5NHKSBU85vUYTzdyLKJipKvXpppQGRcLMPFXScUfFuqQqbaN",
  "key1": "X8mxBtbDc7azK6cdz9Fzu7hgj32GQpu933RN5gcqo3mncSW54z2JgpMonJ8zds6oftZ5xvCGJQAZNWkpYzdanej",
  "key2": "3u2d9ePVQQanHBV24PhvZJgQQnJ9hSz8KXbVGY8xvcUS1yPvNsTdPTfFbhj7sF2eTynMz1PzP5QtECG1eY1k3bRk",
  "key3": "59wtpETk2rMMc8sNVywvF4BxuQjzVgrB43wRF6sXpxxjivrkYxKtgjGbwBAkgECWmS9FrfT5WSXzrGr2jew2LrDV",
  "key4": "su9hjRfZo4ho6arZmsHfLGB8n7nBQy3XszhH1tGQuVXaerh8F7R1y3Sg6oYiZaAGZ7TrmtYD7goEQJtMD3ScaH5",
  "key5": "4S5CgMqhVUiqhMYxvech9HSSas3iwzCEEKC4m2CYzr2X1jzY8ZUkbnjwE7Vw2xK2RoW8qWHaGdE2DVUA1k6apVPP",
  "key6": "2J9sbBoxiAkcyjZnhC4d4vKx1Ph656KfEiw4Zg8aAJaMiDVUHuCZythdAckensdmCQzByVDty1x9ro93ftfTDpQi",
  "key7": "5mBWfzfJYG4NrkjMnXsC4Ki9nzxfJWCSLAT932ZZjxNEiT2Gr2PzN52kvBUbB8HTPkT6uaxwzZQifEgAUF4YhDPk",
  "key8": "Dvr7sviShPWkwoNdqj28RFXnkyZPCvzfteqyzX8425D9dUYzvmFKwBVW5JY4rq9soMh33u9WRaVjvY5gYFCAz3j",
  "key9": "5cyEruCZ7dAaUv8d6ebitULfZ5A8SS2ipbVFMERek3j28YiaKnW6VYg516tD7o841CKFUfRQqWe4vbwm8fFp4GN",
  "key10": "igv3wFfAU4WXTQWzcpEn2tYd1TQLdDf2vPbJS8iXt98W3WjanxK2i22CL3WqKV6EuF855tvxboAyoi9oc4zWr64",
  "key11": "gBjbdHZ2WGcdToFo9T64XnEbxV1F26DAtw4Z6JK5W37PpesSC9PHckXRZuYk8xHDvPCpjta5XceTNAdnsWhz9pz",
  "key12": "4MHdSRoKS7AQhDkvmxLnizUn9xv7w1BUUtjUrBEU4mvQrzoLRTFP556icJT4BSWV9hMYH5i3r5N62mpcobZWPo6v",
  "key13": "5bbKMaAYfnCCSgddBneZNM1JkTKyN66CDy6XC4smbDzfeUQMk7crbWSjZWomRaQqm7KsCtVF8RZkTuP43cQmd8pU",
  "key14": "5A7EtDmjVxqy53nKvaV2TAH8YjQHneMuEsQdPdAmVW4p8EPE34RakbvR2qHDknbLnLUHRHC31PwZz3JPEhnynskT",
  "key15": "aUmPtueJwiXgcLLzJu4cjN3qrG3Unp6TzEzB7DX64D85HETwgpd9MXcEGNp1afk8cABq2TWwKyEm9MsvsP5gQg7",
  "key16": "4nTkTgFUewMPoCbQTXbFtHa1aUK6tk5oBD544NyjupjfZhnv763SryBR5c7PQECgVy16CybdYkQcKxpgeWZsUjeU",
  "key17": "59oauHz9Td4fXJeZ8GRDUzdb2uEzvWU9wcFeWy4CsWwkiQEiqbuAGCv4dqBqLZDyRZ8K9T9CP394jzFJm2cuM4QT",
  "key18": "TyL6n5tctL8dbTyLAXAMqZSMpoavjGbrDgLHxdbddpYunWDH6Ej9QKxV7h2s838Syq1PhNXp63PcsosKccBL4PP",
  "key19": "4R7PaKh2LcMMrj2RDaKdXDwzakV79ZhywamHtB7JzW9Vg77PuYhQwU6qvB5SNhdCUpkztVWxMJpwb8AXyiCebueR",
  "key20": "3nG5zVt9JPoAphDE9wp5ThhYzMgaemJst5hVnufYb6MbhrQYHPt7XZHsWghfQRLseaNs28Q9pFZdmfKJCdRLKr5b",
  "key21": "51gvsZPaqwsQXdXnmqQAd2QMVv4VSXSx5LnV6XARfyGkG1BoXXFN3uqhfHNuTZ2RX68rwWkTksq5VkhbhgXQ8Rv2",
  "key22": "6Rs2Z3DVM3VVy6svLRqNnKMaT84sFJ8sxkT8JrsYXruZKmzBWRcs9GacQnRg7onf4bJJdB7uxy1TMNEwESR3nW7",
  "key23": "3egXhbbVBuDRxXYVMLT5FXMR2LX43f9dzQW65rEpTN8FR5Ai5bGvP1xhNdFW3LPksmG1ELyXieqTCe9XehsFoLMR",
  "key24": "3rNuyDYbpsmgzCpKSkBDHoC1oy9fa12cinyUuAfZAfRxDWAArUMpYz3nMCCPg3TojtGZw664wUtJQT2JU5QPyzfo",
  "key25": "2V5sxViYudiVTFbtB8GdUFtxwdb1jQBfXKw5j69VKCm5y11drf3uQzpwEbhLHxKdgDi9FG3RpE418PyHLuVrX8LL",
  "key26": "4wXLZsGJE4heDp8bWo62TBqCMDEK6NgthS6zVMyuMEioHaSv3yXty4y8PiAr6xhL4ERASVs7vkCJM5UdNaWAhott",
  "key27": "4ZCF9BCQfQ9qPVuFJd9n4yykZur6STkyGv7zVW3mac2Fg9BaDKtVWeWz22GQE5ciyS8KPCRZ2LNwaMM9Psbun9Kc",
  "key28": "3EYiytxXhw8VXJNm5PwGHnDzHXNm8uBGzijJChoTq72XqourKgV26GduHKXiYv9kd5pxSuNs1PQoetaKsxRGoySa",
  "key29": "63p7GCD655NvRBbGJWL8XKveKr2KiUc71WDm7pSjuaunHCx7q9TUKgcjxgN3uf5pXiXABwv9CPkwDv9wTNP2MekM",
  "key30": "g2jAGSBTLzMN9wMxtWjpxgdBVRZW9aD7HmuzrQJWGSipGDZZk5Ni8uo6XSzZ3cUsFkqmJruTx6fXLAajAmbXHPv",
  "key31": "4vgvPqgGDenu8ykrbXLpUZgqRTEhPcZatgNsZ8Sh1ohYQqHXFKQ2Zq3poa6rRk9p4yfoxS1tQMKKGSbEU25qFM4K",
  "key32": "5TicfeEm1N4KxRVZsTKQhQ59RxBmSE88XbPMqr5PtP4DSABPSQ9B1bm6iMw77seJiYYn4WM3dAj9Gf5vCHHxGfcf",
  "key33": "DmPd9W5CHfX3iCVqZYd4hE1uu9XigudsQ292cVD3mNN7y9kpHweqV5p2PvFDZPdwwYcy613VY5U39aHgYSy774w",
  "key34": "3VRPtAkQqzCUPht3rp4fQL1ue7eV9JCZuFjVKKLjD7Bm52vTGyEv7NFJSemLzGNEe55jx94wjebiLVFeQW44Jnvb",
  "key35": "Dzo3zwNSRaVymcsdnvPtjEMoJfZsPWJYjr1yonMg47jGKuefo2Zgwyz9DxtqSNYpsTzsSAaRsHDV22n7SmW1wMS",
  "key36": "5LaSAFurS5WCHHjpe2mtu8PwE9vZuwKXHcjRGRhTzdo2M9qrvRAZn7jasUUZ5F75iefdNMezfGvVUbpL3rdYx93R",
  "key37": "3KLUQKvP7THuH4XLzyF9f3CpaBb88cnH8yweJeXBjPyocAicHQX9vdm8es8Nm3wwMcbsQpbsrjBTy2iTWK4vQeCh",
  "key38": "FwZPoXmqeztVWeuzV7PfKJLB5MqQNe18tsjC9LrNMF5qmJjnBgAHQJM1QzDd2UNcojbcjRW5od2mViUB76h6Kjf",
  "key39": "85r4VVRXECfMiTwe9N7L93EpEJLPVYt8iQ3zDTP6ba7PzqTm1mFQ9jSUmqMGGLXUVoXUxLCHGXMREYjo75r32kZ"
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
