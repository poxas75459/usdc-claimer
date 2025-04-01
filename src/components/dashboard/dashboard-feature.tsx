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
    "4dhBVSBZSCwxCftmc2zFU1VXwmPGRiVDesLZMGoJY4RYbCwVfo8RRPKm4LK2D1Jk4DyU6jgizafb6VVrosazM9bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UmspHFrZ79KSsPDhZtVPXHyyPbiCjsRgqtoRTrNjdy926KyUSHXcnJySryXUQqbTFBbX1FYi1Zph8sF34wNCvfa",
  "key1": "4v9TEXUKG2a9pHHY6tkYnQmXV7txiCfTVRTiwAgVAw58HgoQTLCf1szxAMJSQXah4S51Lbnk5ViwaSazAqfbydT6",
  "key2": "2jpi4m4eE7QNqW9Ziy1mXQtRL5SToQhoq8CabhYWeRDzHTpk7PCxmUeuwMfQEadaYKfxPTJ1wiL64yQ8V1XYCSD4",
  "key3": "2GX9stUMyNus8N3v4xJTLXua1bwM8u6eeEmwNs1vpzabMn93bdDUCdoXndQmLGnXV9gdWVc7pDdBM54mW8zNwqYe",
  "key4": "3Zwdco6hGQK3wuqs5N52tVpTmfyAbuydTrfK49zcuZ5eNVtq2qKUX4cxpiWSVjAKjEbFqpbDYbbD4WiVXGBanqTP",
  "key5": "4aLpL9N8CAEdg6JYayrYdV9do8AAs3rhFMobgiSK1tESn3yR5VmEdq75YvbkMGmoZUU2gmeCgWGJ3W2R7Kmb53M4",
  "key6": "2Dmugc9NiaUJ8gT6mhwp9WYDwrregyp7ciKnHAxdFjM2KgkzvFF4PVxKV4mzpGCzg7KrKHiHNtn5jZWoyQwbK7tf",
  "key7": "5d7fyd9o7C5qNw8r1Qyo6RrLJXaRNM6e1b9yEmvC3umwbBzhqRjqyBYyFPGNY9RNZDnafSpj4Zvhy859iufqnWPp",
  "key8": "4J8W8Xpec22jdgr4We4yTqRazYaSefkD9D9iZ6tmY7vrzFoksL1zBVCYXr9XSjwRFeL5VzGfGZo8gc4DccYTWFju",
  "key9": "29pUPcaTVcaDGmqHFGdLEj8CmCnnnpsQF7QbK2XH9oJkwVx86SUSwaFZR5YmtRu1YKnB3K7hFrXMyR9bRRD6mKgu",
  "key10": "4xJW7ss7J11ieGh1fikyCKA6H3dkdVr4SD7P7mRxYmaJBfNAQ9bx9Nh74Q8Z3wbKMWYzPtKkNwCU76LH1DXoU2rq",
  "key11": "5aSgKedVju5PRVqxEWpSxVzEY4QhCk2AN5g1nuFYAH2iLW9o2yekmwVMviEDbmoCAiYnHM2q1f2R1rrxhyMjNTi",
  "key12": "3DMNAB67vSHqh3MmnXtGV5q6A5RbV3nDKrhEwhSqwPF5Wm8X2bqVRkWAD7ECWnHD9xiUht73zQNRwpSvQYrNXLWs",
  "key13": "3UZv5ph7ojft14nAz4tf2xFutXtAh8dkcuQNjK9u2QRBapsd7XjSLN7svAoF8Rq1RUtoKCGxp5f22pFBmtJrRvUK",
  "key14": "5uDyuB4ENztdXZy7RXsYWtH3FfCaWKL9A8pJAYT4zN3cJiN3Lg4dEfZHY8HvafLibQAS5aTqgUBNMNM2Ajee7gy1",
  "key15": "5xwf2kGW1sXWWTm6bpVBJG1fYnfQKQ1xZxSzX2TFo5eGWL3y4XzGU38fnP43nHu9vxjwUCqJtYKhRozQLfWga7MK",
  "key16": "26YjaJeS17mPDH6F8SvZhBzmPjKN11yzvgUzwUodMexQw11WpmU7C39B2Thcn8sv6jDVqUkbQ1ka4BV7NPzJ7jRm",
  "key17": "3T63ukJFZSNLWhJ4FrbENdDuN2CUrEMv3KCRSJwts5fX3YL23q6cfptBkhhvByeaTnsioDtrdyPU7UEHG9ki7R4H",
  "key18": "5orEaz2XxcBHQvtfZmy8UmbuqogmS6dYykwofNh78sY7JTs3Et8gHS97yxXWujcmKWKr1TRystkbUE1YecghgwkK",
  "key19": "4wntHSTPZZUNM6vN53qp9jrUeLaCogATX1RrFytoBjekxQAXS36dQv3bbq9T8uZoc2in1mMzCuCTZMQVN5FsLWKs",
  "key20": "4sh7uqneW2sQtNJZVan3yc2bJxvPfWAeypmb8hUTeFZpMsH7CqqaV6DdVJTMtuPHYkryzbZGexZp9Q65XZ2CfrQA",
  "key21": "2ErK2dyBnZAKuMr5WeLDVoM23W2TXmD9skivDe9tTg8aBZQETwgUw8EEhvrJTGFNuxQghDWm8k3bYBzvvE5M2EKL",
  "key22": "wDiaR2ZR9RUV9GtdCEaGz6aRC97kiXgHRa9Q5L6o8tzWwmdjWcXheapCNUowaQinnjmoG9CQzTsrbs76BFkMpne",
  "key23": "33U7MyQx7QcPNPXLguD9JgEJb2gwNnXmPhX3JRXdUyd8u7Jb2ETi1n3Jsyg5UFS5V72hosckB7bYQqJWxPiQfnUm",
  "key24": "42wsDugwi31YZTF6vFcuGhFFmJwfGcguVhWJJbK2jLCU95SizGDTE6fzshkcPMGDFuaHr7CTCEugmdFihA5aTov2",
  "key25": "5BPkak7RCybg63zj1T28tskvNH6LXGSDxNVHm1FdacbVRqZkqUK8MzShGVXN5Te2LvQVnDFpkUKWAyYdtWpqefXY",
  "key26": "2n7HTpYiPJE89dz5kCZjQQVbQkC1uhNizYrSYSLquovrX1LC2DCX1aQWfJRxhAmNEd2xgBesFrzbXge7RCo8vy16",
  "key27": "42WnXKmxQnxcSmMzWZzHkrMW6HSVQsNJ5t1wuubsimL2uHZffTjD6Jn89x3XzfRpsZCoPZXQVo4wo6furtwky5QE",
  "key28": "4iEa6YHxcPLzmykPxDogpAJ9R2WhHfKra42K8dRBqx6FXnoicyAZUqpUsa21NJqKkBXCBZJYpq3e4JLx4xZZM4E2",
  "key29": "2QeJmptzDEwejSnqXitt1tuAZYF65UFjzwh34A6tBEw6fLUeD3cUavSjVQL9vTLdqyvCSqBYcP7B3KYwq85CoD9j",
  "key30": "25Lkeq5MzrautkuAZnSQEZaDehGTi3aV7RDGcFT4JN1YctYnkKCZoNbtRToZy9e4LFzAuNwrTf5UrrGeVszRuc2b",
  "key31": "vCwJrZ3oay6arSCwVwMHxN5GvuYiaXCHSxyuYmoJopEc9PYA6Q96AAJziLfPDGZzTvTMg5jA6YCMwWr747fkd8n",
  "key32": "2VpkLcooJpu8ypCGPciNzrjg8G8n6gfAyznMrdJcVDaJn1QAhLk9KPHVd8irsBm5DcNY4u5jnARBNLRzwc2WhxKT",
  "key33": "5Q8ANCKNkwv1F8WypmGJP2JXYptopz1MtMsi8YtPAQGmgcEi94w9YTn1CxjUAUnGWukFNGdArSEdu28yGqd3zYtj"
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
