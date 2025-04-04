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
    "RUBLre2TfndEF11ALxhXKyS3dAEU9sBTthAwQXjucf2NkcNKBNLb5yjBcdxbfmH6a7ercwupzgurBtuKDd86N6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o2HQGwgRgifuwTSXtecELSq2k4wjkA89crxTic9WXMj9hDWDdK3uVmqvmTf2xvTeyKsyMwFnfvxRJiy575FhK4X",
  "key1": "5i2RzPwEQVRAmApRs6jvb5u54A55PKMWviXy59AVTPqVMkzpFM9qEQ8NNCr9sbHuXdspLBAnP9WSJrF6bT1y1v7",
  "key2": "4ftcYpX7y8wkerS7rj8w7f8dnDbacpA7PKaHP5iyBmVc1UA4i8DtcPJAXLJinR3mvrBycXu9mVh3dNDKvRwPbahJ",
  "key3": "jLanaKzptEwHNeTw4KVbRXs4aDb7hJEJAuXkhar29L1WKS2WuMg6HesBWWyLEzsrqHApPTz5qFC6AgyT8M9gBR8",
  "key4": "MKbVFJkJBQ5djnTf47JucGAhfSa1h4HoWyREVeCkA2EwYXPEpqoKUNRo7LKr86EjkaQnPxL1tsJsYP64QQDRChf",
  "key5": "4JC8Z4HeQCtfLYSMxrnR3oJ5uhzdyqRuKSPmXDaLxMLe2QnkoWFvu9w22Hg2PRPCMn3Qo4cpJsaXZ2DhikTu7TGy",
  "key6": "4ppV4VAo31ZFAaVAYzcTjR9iNo5BL5Hom7AGWY1qhCWsr4PkVcVu88JZ2NvDq7gWmdpDSBqzM6sEGLccEmtfeu1m",
  "key7": "7CP8gKezRxkurhfBx2n7V9jD8PK4YUYcGM8FdPAHLRFVNQ8wahLNnT5aFQBBA5ZET3W2gBFmbSNx5zV9azeXEeV",
  "key8": "4cYueZuKY5WoLXuEc1TGuiMgvj9oHsWKjVYCELSNgNFoXf97iA8hNBqSaSjeVF6jGwsWYDEEnSNq89PN2QAkfWFd",
  "key9": "4HCWoaGqXGSaR2Cm3SqccVKRFFhGwCDiR2YcJmX3ymQ8KwyS28aNDW381LTgH1NqZyCuheff5xjCmkFTSodn71LZ",
  "key10": "5x2fR4uoQuhBGJhnGctry4rByB3vB7k5KiPNyJbkTV4TzAj5sss4rY6HJzcwujuxiYQrLCb5Zc3jjJUxVu4Z8Kdy",
  "key11": "51wDGYFKyMuhynTYfFPi4EDfHGX1seWmU3NZYogyFbGAx7QmBzqsjyzpnYvRHTZxMLhyWzYNFrKnYeHKD5cQP3Td",
  "key12": "Wb2dM9boQaCroynrLhzhuMV35UWtU6GCiVaP3WEnuiGuVLENodWZXKa5LipvpXpZPgPLpZKiDZ3wiU9tbQ5zZbZ",
  "key13": "4xJ1odC1jjELvb83TQcxQCoiUCehhNUohkit1wZSa9FEXKPBavysXz7hePgazVL4dsMB36n7aRwLgnkExGErQ9HM",
  "key14": "67cNq7FSbu5LDndQUC4zoRpgn3NVPmMAFYVHqjet6L41EgC5FEcrWuEKKSjRrc2SLdp5dmYwmbVFNSZ15YbGXU59",
  "key15": "3zQbW1c5NqhviaHbiWSJyxDJTHUQPJUjFSerzkKJifjs6XK6Lk8fFHVGe758GWRyB94aWFNCpeCGNtkoQJ53yoEU",
  "key16": "2HJvnmrW1eJjmmS8Vz3oCcE2wCcKjoq7UKBh8b4uBksQFfgMVgRwwBgu4Zw7Y6NcWmYvpE7JHfESyMYDuV14QZKG",
  "key17": "4H46RYoXx6xrtF5M5HKGhmnzNT7tdRRukYmr8Tx8j7FcbQieT1X6XzMD4msawTFMxTYZi71f4dVAhKSePSbeXuRf",
  "key18": "kn6ZF2RB8szBQ3igMjfSEhUmHVkHs2TQodej7ra22Mv1d5KPJCLRaSZA5Jd1YadYNf26h9c2Y8V43ZcFodB3XVb",
  "key19": "4PmtydxbMSCvVBh7GkssZLvRVQQEH2eUX854gvnZk9CHQw3HmCQ86h7Ge1jKwxQZeic3YfQ2hSJUyV91QVLrQdLT",
  "key20": "2LK4AgYmmqBpXcrfF5zRz4VPSJZQNavHzDgvhAq6H8gW2Mm3xfuM2v3Bbda4oYeLzLw38J5Xa1Cf44s5xxAjpp5u",
  "key21": "5UhsxUMfDo3MA6nPvTDioFuhsv4D7V7ReCBFzfeFqQT7PpkrnHppGUcb8n4VHJ3ojDRKvYZJXNhvNMmbrm111CJK",
  "key22": "2V4KZbymejvLC8zqEr1Kd4QX3U5qmJkZ4aQTQSN8ySy5nb9PXYkFamVABpVRZiD4rD7gAGKT5qQUz8kBsqYo7Kpt",
  "key23": "3nVb8MeLwjaixzDcXwaqmC4PKJSF9h6AJiruuZkxpieGM1NZQ4ss4NyxjQrz1JER2VovTXRUGfjPYCDr5vEWJoFd",
  "key24": "2AouYX4Emdjw1SNt2GSemR3CbGRBmNawWz94qLnx67bQ7zkhDKYQE23nQupDNGG3N4eLTPhq86EVcnoDVoiWrYMc",
  "key25": "5i7zWEy1T5YQzrdbMDgJpemz95B9sY8ned7ffzX6r3opHESSX72NA24DVgR2dfkqtWiEZ3kPy6BMCD9rApbsT3qp",
  "key26": "4AQ1ciVAxjLEWM7499UdAFwEC4oYzZxT3hWM6XS2LEzcKrQXgafGGnDCEEftJCoJSNqA1qBJgQmQeZhhVAQDWZmg",
  "key27": "66kmZD68JSU2ty78t7FFsVvmnyW8zKNTma2q6mc63Vpi55a5fmcH7CSXYknpuDibBGmCb6cScF2ApmKbsefSKptM",
  "key28": "bq3oqWJZTjrNiNX9H7RCUyL6hfsQmELXhWuKJ9upe1wSCk1oHxFHEFNUDqn6HttHnfC3WbSSEtZHGvR3He4hUHN",
  "key29": "4BECR19anPnqDdD4KzW9CqeXUB87nEJ1VvVicSP3viphFwSHwuExtqohwH7fb7ET21YoMdbGxiomXkPFDFiXczcZ",
  "key30": "3hUuRtW5E7XcCpCHKuWhvUrNwwEbcJdi9a1B56hrNtGut55Ysx15Ug8kLgH2vNse3iekpX5sw3UniNwBPVVqxS3E",
  "key31": "2wAb4N7cT6BY61CLcnGSGeA8k13jAQAiCjA72ofdtCkLwywqZdLJMoCzo4GKZbZtwfERqE8mTCHdTARpmSdXQ8Cz",
  "key32": "3vNK7PKrt9Mj3JP3SpRD3qDm39fxH8C7znCc8JAufyfzCGwsAA3uLciDp4mqJMePMgRtUrLXnf3yExtfMA8Rpetb",
  "key33": "5jrNphLifsbLJ8u25kutTaPmLrduTTuKzo2TPAbH9FXp8TYxz9iANEjpPZ2GSNcjUoH3tP2MiB6AAUS7mYzUcD6q",
  "key34": "3Tzxh93vgFVjfDu9pGkkjUkaPaWV8aHgA5taRX8BAwTr1eBZx8VaGbPYpNxyx5KmtveKUPZoWXTJ69WCNYPcv6Zy",
  "key35": "4aoj6rMdbVCBHFAWhsA9xzyhMGCL8xcv89ivuoJm2Vc37t1ggXqYuAB1RjmUHEDsLKHNk4MgC1W93ibfzVFB9e3g",
  "key36": "dEZanDYmRmsiUpvcvTkHfknM51ECtg6mwxj1qGa1A5QjJVmwSrhF3FkWodenUfeBwVVuNJ2phJKTPiJWzxi39Zx",
  "key37": "5zLMokE9dLj1hpke6RuRZadMF1VCqPaZ1JQjzxVC6vgxAu2pho2iNiU8XPe4WxnptGEQ5VW9pwCBQNwRXxjvUGSE",
  "key38": "5wJ9FUpdxZPbU2sYrGMJ8w3FH7CbuvB8dNj4vBV6fLrZTy7qG83W6rYicQz5vo2WJRfbnwPjbwYU2jRoM6Pt5hvf",
  "key39": "4y5g3MpnPCHoDM84AUDLaEYPytb5gCVnwtzRshooWqwQVajcFqUkto1SakNKfxRYmSTmmyjmcmx3EWGukzkZwjZg",
  "key40": "2CdNkHZ529n2MjcUsJpgvP1jKazHrFRKq6bjEekD5xyWkt64vpJe9WbwjHxYJ3QKHnRNhSq93Qbbe3Dkspu6WTQG",
  "key41": "4QQZcme3WzUbhwSjpNzNaC6nvD9qjUZ6hx6VyRD3RedKA6YxJcxjaC1HKngoHpRogpK3eqazKdkj4dRiDviDF6Rt",
  "key42": "28SAd8YRSj4tFSEyZBaHPAkq89kmXTikiF1ASB6SFkFeZozNHuSic2KhoMQCASdvZuCc77vvnmnKokrvEP8hFz5b",
  "key43": "3kk9NBfDomMCRtuo4ZjzaikREPzjkcJtsHk4fks2e8Ui72rjDWDkw3SjJuS2rq1gqJgeHQuh3jNqhgYMqbecmqCq",
  "key44": "2cGnHh5upg2w4eBBCpPnRXk6EazaJLTa1H6fNbXrf1LMy39NYJAGx5nmt7D4j2YgfeuyccP4jQpwt4o2KK8pZTdK",
  "key45": "2i6TQFgyQLH2KAe5urpig1AdimidXpEAgr72rWEzMqQsnYZoJJQN2QrpWGpMWCaG17vKxW8TvjE1B2CipR18hirP",
  "key46": "2CtmMrYrBkDJzwUQXhNzHuD1woZB8YJrYsGzfeiapdcXftzz8VeqFSV3oDVrnqDqCZjGmHSWhaWjipR2soToGpQN",
  "key47": "5p7whabHAKBhohpycSF3bMGUTRUiDcgzfGhx8uwuKuoKq3Uymv4RCxgyrSdbc91Cir5jN9v7KPL3TqDBcApPxexy"
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
