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
    "3LQ8Gaf2a7tnnqL5RyUrCMm7SxKgahjmJ5XmXKLNh9HwB2wdh3ECCCmLqsnrmEvBd3GfLTrJAJKz6M8AaFsUDmnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aReEvEPLYjrizGhWvPQCEZpvuyDA1Na8191K4mQdzUmuJLXWLeqgV7VMWNJVuXZQDWQHdFVxXwYtNi6GqESGYaS",
  "key1": "HfJwZBvRvv4qSH6PHyuBGkcPb3w9RZS6huimQiCRFzLr6WsiWk1GHjY8f5Kwyd34mW8xjSHv7C3rUyeNWgmT2kA",
  "key2": "29j346VirFmxckSxCZ2opBTwoo868s82XFtSP9FJ34jizGUovbSY6F5Jkf3u5fzk2PfYaz7RqpEu6yyUzpdF7Eee",
  "key3": "2VWSQvMQUta2G1tv9HRRGgHZQw4wP6qtK5ZtwrSmF4ezMVWJBZDEggzvNB8aAHML1MQjciAk6pHpkxyQedXhncvi",
  "key4": "4aT4oxMPN6CtwduC3j2oTfjB4ffj8Vzpj2BjXNtd75i6ienhr7Vht3zf2swKES8y2Fu7vBBbuwmyMyE4G4rc9pXK",
  "key5": "J1MfkK8coeYaHrDjNQXERVDR9Sue8MZPjP2f3hKHADzuohrnFgsVVZJREo6NKZpgMRZ6Pe1YMQGjGNjuYewnXWa",
  "key6": "WQ6AQVf4bAMSVDhuSwmvR2y4Xn91JFK31vb3F1Juw5Z4tmiE3NNP8uEUWu4k6UTeKEwy8GdxArvXp48wwC4zphU",
  "key7": "5hWS4MT5ToK7B2hsriWCjVrBRbMH3GKD57TNKcG3nPSK7xNWFHYPsegbJ7RqjWmTBngk7Fk4BQvCgC9kL7kJZfEj",
  "key8": "4wy9jmGgszJQbEBtx8co88A1KXkHv5xRC1WtFdA855AHyjGVhVSUYUZc2vNW5K4zAruYDd3ftgsnSVx4UusQ2Tr9",
  "key9": "46PC6EdihnAX33F3jN1oDhdnsUHTeT3W2ru5Uu8fEmMpPxXAF3fQPo5dVqvNbMsiRNkspyPVKpQWKtNT61Gtn38C",
  "key10": "4UvbZciY1uBd9xgA2VFXPUmQQR9pCkpcNM4btM6GPoGRQEqyTu5P1hQ39K64RXmTbfCQMnAnvzsxLG1sx4DW4MTs",
  "key11": "2vF6rWnnpyHWp4DQgAoDsy4a4thhRSyy6Y5CtQKM9hwGvrtP95N9J7WCb5bwUKbm3VkFSMpDN8a4BQTQxbwmMmRM",
  "key12": "2d3mFNSeCdmMAmqXZuQf3N7T14p7j66nTfN6mASdEWkNy8e8ckoFT3GkuxkMBb2srjm5eTsZCkAdoXjb1UVB2ieA",
  "key13": "5a5wEDknSLninUjCLzp3oaAfgHvXFnHF16LdRYdJYR12w2MKeHHcxhp3Ct72YimP7ywLdZsjTWeXUNcnHFwW36Fz",
  "key14": "21QLn8sL1RdjZuiaavcH8JZrTUkfM119d6yZFic8bzkch9FhTeiyWRWspvz97iMnjNY8383TEtYio1mzEbr2Xn1m",
  "key15": "2nm6mnJhRwx87x6EX1ddXithtVk9JzhbwLXYipKaiBmbQA7kUsXSs2bjKUQEMKJWoc9T6yXPjBwhKLdYVCdR9peW",
  "key16": "5Lxge7VzP5rnpFC1GkcWz2DcNZqGnf5G2k2tZjS61X5U93x698jb5aj5T6bjTsMsf7jvvc1qo6GU4ixQVG3cZvVk",
  "key17": "4xFvS5yoBaZwvF9VeddqgSjuq425SmffSVyA7vqsCVEhqauPNac1XX8N3TybsoRqzhZsnjRTMjxnw8aV4E5miStC",
  "key18": "2HPM5b2VWaYmj46wJepjpx6YD2ad4Q4nbzHjSnjutupjHrfPZb5HfTpLpn61Q9ZdKq8Q7Qyk5H7o3XHfbRof2S6W",
  "key19": "4pKKZ1bKrmRm4CMo2QZHj8FyHMcHnXKutau2apKbF15fSkLgtQhB4DCBpSt5jNsVCqi6Mezqa1xUeHSJg8Je3Pa5",
  "key20": "5Qxq1Y49P8ou79qm1tYg6z2XV5kaHDaAi7MYWKCFqjjqT1j1LSUPkiJwrKETB3jUzMBGY9KSpSzdua7AXgT1YVAW",
  "key21": "4YkjK4vLPmQgBa5qYWXtcp9i23RZqsqooAdtH8SW7B8ruWsGUK5awj1C3bybnHTQC1DqkgrHD8RDhqEq9GnNV4CT",
  "key22": "5x2DFz81sTtVk5pQsr1Djw1hicfCeYXt9UEy7YiKPRxq7fPJ3SeiSWMHCvQ6LDMugxZKpM8PrKkgBhwK6Yge7SVb",
  "key23": "4DYCniM7KEQZsk1veDvkb534KNh5o6iRtaMTVkGNanzv9VLN75EjfCwNyksadsncBx3GK1G6vHs3ckfzxyq5xwYV",
  "key24": "46CxdKWXqL9Ed9QiPnMpacxLepXozyFYMUftZbxVEQ6X1FmMYheczCoSTAgtf2XAS8wbRffuEq7vFW7iL9LPDUdv",
  "key25": "2Q9icGwXeG5fX85bnGe8jQwFRiFTvAE5328HYHLdW8BvjaNU56JRLu9EAVPNirCPMwzFKHeQAbWaVSJcpdqUTS23",
  "key26": "mwv25FmxtSnMGCAJChivhprCjqkj59aGSWwSjRpEjwz4xkWUYS4zGBTxgivrSbNiGMwgcHJSBMTUapVqEMUmSJG",
  "key27": "2WK7rEfR2bYRZxEtsiXzJf7Lb6NZzCyMnYuL2KAdPabHEwPopJNbYzwocPPft75zH9y2ZykMQBP2VCuEQ5UpZKxf",
  "key28": "236QjFpBPcnfc6YrMvtxrHCWitpfyDHJR8Z5JsxiPBfnKJZxKtBNPActPkuAn9LnGx7d2iRGirkabdWvQfo6cCoZ",
  "key29": "4CBitZfgF6dc13URGRPDxKqtZewnTygSkHvFyVCwvYMzUc256FYbs48uhTA1JMTYUSYjCsSc47WkV7GkWCBehREx",
  "key30": "5XnKtkBQ4Y93SFLa7GWATqyLHMaP9rSGsgsJWWkH1KANhuntYKoBRLhXtzcRyEvYtj1PGDkgPvhGPKRThTTcqcLU",
  "key31": "2ocnkC6mSQQXeGRv2cLLBMmNAoMW8N6BPJnsoPPyzZcUFU1M9vY4biKH3rnXek39P9CVbY7gCqsSBDJWDiWQh8pt",
  "key32": "3rS6zRYLWtaUfJb8RdU8XE9rZoJAA9ALATQb7KZ6MHYKCQoMrGaF9TGRhvMU47zKW2WU242rLLw7m5Cc9zeXG5RU",
  "key33": "3REwwzPyDeL53jGAp9MjyyzprnvqntDqs7NpNp8tyaLw8N1vNxapjhi9UfKBNnHTbwELV6qn53XgPPzsMPKWobo9",
  "key34": "3cEkPrrRdrkqVgYRotRmdATJB24M7UhT5R7mqvAn6cCyKDjrvJuHoTAgxSGTNSpSA3VmZmEEzu4jhaoTtT3TeG81",
  "key35": "35REX7jq4MVHdsxExHVUGcqe1uRPAdaquk5HqJwCztrWVugBfJkTFkrgVEU3BzNhTnunc7vmGpVL781VMvzNxfv2",
  "key36": "2qxfquc7Bu93DUTXBgoUcziFPRnWstmmpPqXhUtaQNZF43CK2SJKReJ2RFH2fRhFybU9QmJoaZKMcjKXDN9ANFzF",
  "key37": "2ojnu2UVmGx8XdqLokyGfLCSR7ExzezfnAjt6xmZ91x3GUUAZrSgxmNBNYznhcavPKPfGDfCa8AUeD1CYqKxvh5q",
  "key38": "3qvtX5VbrsNxSth8qG2ChKZx9vZBo5PzAaT8MYXLUtFyjyezHLh9oRJQAyHaUQzTgvnazDDv7AfCkVmCuF3D9TG5",
  "key39": "4F5XLCstjCstdTzRRWkgiTZs5M6cJ34717ModfWbuRQXhNBtTdGtFd573HdkQ5AR34bxRn7CUMC1kZrxoDU4Szoz",
  "key40": "673REJi7K5Wm6ajEc4RDox7Nbb1NGK6BJ2QeccWSxVAjGgsz2oEVQZnD2suoxWZwqDCk8v52ewXqYzbE5F6x1zNd",
  "key41": "3vvXhbqDCNZjZjqHSKjzVUpvdTJE3qsKNxeHFqdsza8E7BXVvWeWefPWEPePBNULhyQfTBmSgMpVBnFao7hB8sau",
  "key42": "2hpanW5cFBfYBew2Dzgb8973h1a9N6BCKNkbNK7bMVaU2YykN5JkMBk1j11dKQGNAvQAFyEKtRLB6N9TRzSE5fjQ",
  "key43": "3rsY1W5UPnxuvpLLd3rWtDQ1k9hcNhGFKsUUinUfaBVhVmPLPwR6h5Wa6rmsLE1uZpHvw2c7qkTtyozuX6NBGHUC",
  "key44": "4WVXntmpniGZcM2KSjvgxR6zyRYsY8ZptX5uBy61s5vQbbCxwDN5yczE6yCWJgdoRQ8w718bDY8uaLJLbZWSvRY9",
  "key45": "3szfhuwbrj6F3cbHu4kVhHaGznc9ZJQpQJcVS3piPGfK3kJtZBwgVje1G1hAyGSUTCTMb5s37P9Mc51kCkBYBda8"
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
