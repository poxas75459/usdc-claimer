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
    "4j8F1ku8s2vXFnKfbRipgrBkY8pN9QziAcPwRJJ2tJdEA6D1tCrbkMHoSqQb7XeK3eobUdDkvibjw2VFRqk1bYKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zbG22akc26NmiHSYdzxDmxaCps2sorPVJRzkrcVrpELabf9naHWUAGFsk2VGzpVk6vPrNGC2JhsXhCCfFLZ8DV2",
  "key1": "3LYyjqMWp5AiaWTKpsGYJeC6s4fN1y6cjusPvETmRkuTtYDf8RtoZ2AbHhmbSvxEtZjDtm5RAjTmSpFU2CxHRTBd",
  "key2": "3yaPTDCz7e9CManAECoQDB8qA5jsXf75sErWF4ubyf9NVZ1gyPXzmctxaLvesF1VH5hK2GjM8i2g7Eo3uqkPA4hv",
  "key3": "53CYJqF7grirVH97NF6obP2FaRHhcKggfQGKZMh23666XFiQKkmgaQmFz4Z9w2hXBFHmSEpNVbyqXBaPVbkZGAot",
  "key4": "uuxGngoNb3rpnVF6jVUGukKcLdioKPfEUghdCLMgUX3QzrhxQzBWibNzj8Tsbf7rQ4U1joQdLjfgTRyvWshfz31",
  "key5": "2XSVfVQKGsR2b5KUjFu4speijPp1efjxQJ4Gh772XKu9VA8mXL6b54MHizudniDa5jbCoArgaffdMUu4cwpiznVN",
  "key6": "tuXybdWP5wMGDhSUAFQRn3TLef8mDr4qspjRJiiKsxmPZpEHtu6pz5iLMHTM5kASr2e4i41xs1rfkf7aR89wTWw",
  "key7": "UhXhx3iZPALxGJiJt6knVuA8gCT19Z7VJA4WKvwzMCth47xQ2HLuVuRJtKF6KRff64Lbu3JzJEzktZEEHe3XgMM",
  "key8": "2mCsfbmLJ58C4kWABiCkPJgDT46YRwgUofKXRoBdP7CxqDnHGEQyznVVCUMco4TegsJUbmT1WzCz6FkqYtR7kcB8",
  "key9": "LMfvinuSxhbS9bNNoEwVS6jrJMLH5vhX6FWAzcoSQSCdZ5kJXhAzwPoviL4pWm7KUoHgAZBGb6uscfDZLqNqsUf",
  "key10": "3AubEKYJLtX6BVXqm2puqaAab64Py7oBWncs4zGNGy6VK58PMbX67YrhGrJxUwQG5iXLseAKxKcnCEq3UPNxTcpj",
  "key11": "5ZN8dMvScBwz7XQ7JPmZFU2uvcnJuXNNbBYwbcbx637YZa4RKg7eYLE43aBYhDmaGgznWAN8mpNt3xMtMFHA7en9",
  "key12": "3DWcPzgx2i5xVroTandJknU9Kg5YRRz2VAJo7h2YySMJVudHjDA65SUy25eKyLzuvnt5gpiNapbndMj2N6dRJrAp",
  "key13": "5BtwCNHgSqziCUd4iXaqgcnbJhjSdkeRfdvaVoVW1HP49N9fje3n9FHi5DWCN5jXNAnxg1y8BASC3YxDgNn9gsWr",
  "key14": "o6LkxwPbF4Ujn3kQfkXuhfxA3XG2NafZXHJpyKwPs6EukWrXX7eMQp31VLNQgLqJL6zEyVroe45w1nrRaeTdDUr",
  "key15": "4DraHNUsjtckgiGiNBBEnBAz1Nk5tQPRg2gQQH7xkKeKCXRzMc6KdDZM5aRyqW1pzVpkX8syYs8LrCefNVz2TXbV",
  "key16": "4SSh3LFFmNEunexyvM2Q558YHdAqBskT25heZfzBUoF4JAhxqY69ZwYZUVdVXeDBy7ru2egf4k1JWpfRC17jThxS",
  "key17": "4YuDqxzQAAAgtQ59it9kTph9yvvEdo8uBd9cV7XinZZyRz2wtcUqBtCTaGWCjorCSGzviHiHLxmXVBzabFyZz8on",
  "key18": "5xHvCCqSd2hrGy8hEnmnrNpdhzoGcVQ9xn1oocTfknfpz9DYvis6jMJPENzR33s8Wep84D4Ks52jHjNsCzao7ZFL",
  "key19": "2pnDHh7E6kj2T1cagq9kyBSWjYhpcH42tu56L7c1phoaekpuiA5XA95b84UYTC1tsDbftuKs1Aqs9Gi8gZHWM3kA",
  "key20": "58mvcbMwz7BNYGdfYKMdwgc4VzvcNuW3tJ5jcjQBpU7rMffGF3TkE8fVmxDMkqYxNEadMCDDTJtUVwVcP5CBdr3H",
  "key21": "zJkNrPZWoFPZ7KKEf5cyKZHP2B3URxRojRTiXqSS5Ef1HmpN8zC2EmzuLvTEBcyxcDEvwDa5BVoyJPdUcrsp3MJ",
  "key22": "nQSiiDEQ7CiMU598soy6Qd5tFRf9QUsNTF9rEYQ3WCvHdXn17UxUmbLJpgaYJqkygUvGmkUcYj4AmoMJaTU1nA5",
  "key23": "L2NtvJwz5J2ccyQQ6286GsxT1hcXHdLMstaTak2eZRaodNW4rLajYAb2Fec9PWQsnWDu6o52iLnv6jXjZcZxLDb",
  "key24": "4wACz6nt2os83aFwLyPCwv4kCrtHFBegPS41JDchQnEufjG9ssKqUNqZQAfEk8yKX9BHyeCsa9nxJuUM368RzWzP",
  "key25": "Ye5qHXNrghTrSgPfwahhZBhYMYpvqePGERF9f8n4tnhrQjKs9W1Hwsequ6XpdjJZWFGDYn4wzA9vpC7itpmRJFU",
  "key26": "3NygMRFNp8HBWKMcMPdrmAwyUPx3GX73Tqh6vMgpxXQHWiswGY6eefJEAYbvWghATsRHxxhQms1NSzUqpMySaJoz",
  "key27": "D1UZz6p5J3vjE6vUpwW2qaXFXGQ7RXTWNSi9LN4kRCFpG8m3f79Gu61RR42tgDhnyR4VVVs7Yxyp7zokjyW1GyZ",
  "key28": "zQTbjNMfDxvoTtpX1DgEADGpQe7TDqtGAftq3SwJU7hxEqgtfcWTA93cEQLDdNhkj77UwRdYDjQMDfZ9HPV3tT1",
  "key29": "5a8RD8Eezd31XptxrgrA7jk2b9oCwzvNco9ifnu4tavsMG6WiRPn8HGfejtTkq8MtZu7B4YiTxVvQR7CMjvFVuTj",
  "key30": "4KfNnfCkmUKFSVVkBPsVZa2Q6EYbxzSda7bqjMrbjStSDtSLp8CLiQZDtw2c7Ta6zSJyd3A2ZkHkMiEjVfBKfKwB",
  "key31": "XXcZWxKAyR1dCKi9sBAH17N427rVCcd1ZfJmj3YiUMx5iqPy4ct1izBPBpLMQVuSNYiZLnWeKtzBqDyNVW3vNAi",
  "key32": "3xv4857R1qi742dnwTryiTUgJBQG5gJH7pNsokahPBaekRGgk6HDJdvMPwX6w1wBMBcBrqYPEBVeSAVGyK7ZLiZn",
  "key33": "42VhkUngRSSvMQF3kjryhPaRuJfvougbo9h3WzfR69yq5HbpvNEr3PMhCCD7LAY3oqqBgAbfVjbZmfb8pfqSVvc9",
  "key34": "4x3oUGLrXPPtDA4HDZBtn3jzQpHLSQUo8HXhoxbDK4LLL827eN6fpDGC7YxU6KmQW5X3XuwjWpekU1w8TBG3AtkL",
  "key35": "2Cn64UXEXsZndPoykckrRd98QYsX6CmRkG2kh2ZV2nzkXCgtYxCCEv4EtUtzRpqxjYScFuPh9gZt5uitDAN1mH4x",
  "key36": "3jdaabuYR2RvgD2zUohHvZLdry8WoroGCfeVjGK2DD4JqogEw55n9WnHGb2rL7eeSYXmctm9A5tTAgp7tDnecYLH",
  "key37": "2fjjfczRJHnsbfSFjKCTEsa2oV52JRAReZMxL4qiUfEa87WaayKs5M49KHFbWQA3uvpDTLFAAbYCCU9sAhn63sUC",
  "key38": "4uEqCJJro5rFqvmDR8NKfgrij5LyCioTo2eGSac44cYX8au7EuoMv1x291F4VwfuMrTF9hFj7mSH56aeGyQLeyWP"
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
