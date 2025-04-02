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
    "dgVWaDGdeRdihDZdtcCKnMajWAXsaqCWieEcgEKF4jmhDpq5AvZTNCc7ZYVCitHiPbCdotYeCdVnrwnqJbLN9ox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jyvG5hPXAS4Co5eQ1K9pBTofJEAeUXEgLB7Vk9b4HRnao9MFKsp19xhY3V4ULV6Y62nwnWC34QYq6zE4GNQq6qR",
  "key1": "4t1GuHQxWeb7UfXLFJQ9RFFBzdcUdrwpiJUPTHAxwDR4ugVkrn6efDSvZ5B2arB9nLLfYLtdZuvpJij41CeZWt8t",
  "key2": "4RgYkT3CBa17zAkSaDZsLyghqpqNHNAVqjpJeXCyiUpbcJA2BEi5s79Um9rSGRrekVmxuyUJLdUTTtCJ9BnnamU3",
  "key3": "m5Nb2efQK8uBqKQ4gKua421dBXt5GVYrW4KkFh3u4RDBkY78amTHeV8ujnbv4WgSAHVVpsBWNbjBeVyUb87pwpb",
  "key4": "3Cc9MjK8g55rRHFYn6LwL7hWrXNJqujCdjGMik1YTNaoq49YC8ZBadsyrHHa26GhmnigHScwXkGeYvET8zr3Hjzp",
  "key5": "3fW8F37eGJK5oETLcmphh5b9wJiiWKL45S6UuuWRetS85bnkBa9UFxf8cXUA1pZsdh4TNBYdv8f9EFCWLN6RQVFC",
  "key6": "5B6DC65SheE56pq51Gy4LFxKmjWu7jxG466XWKZttrh1D6SVp5ok6Cyn8rXynLCHz7kctFmfStWvLFDmMy2fjXWt",
  "key7": "2RWq4MnWDXaHQbQqfFQc1o7vNY7Hp8ytUPdH7YpWPjAyqePaYAHkLn5t6RsBGjV8oYxMvLYcWGZhrDwekXohpKQo",
  "key8": "4FpqEVuuJEjiXpaoWSgWre1qkbyn7XePMhfppwnaxroMVPyGPb1RxBPsVo45X4h31mSXgRCDGMkKaB6ZdvSXacfU",
  "key9": "5gvzmCY3Ai8C63574iXLsWYBADDngQwbGmr2MJ6Hctpmb9CXKbL7RWhNMa69xtPsPfEGscjgxZJeBpemsE6NSSV2",
  "key10": "3RmpiuYVxby1VyxBWsHF55Y6EHbryyQ2U9Lob34CLs3gBZ4GLBpFUCML9AF4pYkxEcdMcFkC16bWxBdYahc1bpQA",
  "key11": "RCqwsBk3MuLPAkPAjKpRXaUg5dmqoZJARL3k1bSoizpVReAk6P8DTonLDhHsVR9gqDAkN8nETbi6gvhvhCuHkeC",
  "key12": "Xvrei3YDVQpDMg2bshovBKoBwu95DeYtTKbcVYqqa2KAPYZFMegerZkMx5rtSrj4Cdfh85GSZLfsKxPJZJH6Rbp",
  "key13": "JKyy87pK6ApxNf8chen54k8ZiRw7oukNzCbuPEnjvCEHkdddKHEr5QrFB2SyiFbXCWggKtZH5o2MkN12uDTNEB7",
  "key14": "5AHpm8oHVuZcaqybCnEJCGk5axYV5P3SCSp9VV7pE6kRZojUBy5rn2zeb42sVFVqQFfN2Us7eCmPavkaUVz4Ew7n",
  "key15": "5ckrtDdhqAJvbTBVPNmJZo2pQXgHqVxiQFZ1hLjNRo8ttPfUBkSVaVjKmYjpCTxa7yDbDA4T7xNWUxsVY8G7z5Fv",
  "key16": "61AGaCTBxm8UrP4uwaafRfShknWfj3TKNPF4TDbjGNzWSdxcddvfVmo2DAHH3S1iMD1LoYHVMzyE81wZ6eL9YKnF",
  "key17": "327E688Ln4ZrLfDXyo5eNZbr822LNpmWGJ1MixhLYm9PT9nBTroTDYPWfjRFQTL1bcgdAWRDrdgG827rSwbzZqg5",
  "key18": "5kyEqRDV15jZF8yE7EgEziqVWXD8iy5WqqmLHgRR7zL3eoqD81vkAgvGtckbmdDA4dEgn7kFRCtYt6WQdKpkW8T8",
  "key19": "9HLinWY7XZ7i8RKaKGC2SWV8nKbusGuirirxctorQMPTEKhrnXAxUa3Z55a99SDwzjVY9au45qnr785HtQj7mGa",
  "key20": "5LeSPpittM8rgJ19dBbKSEdEHR3gU2fCuCszJBVE3UvdNRZ4dVw9EWK1M5fZHfPwSgfDwE812Pb4wAkto5YxbcYK",
  "key21": "5kn4BXPCZjt7fg3VYb3SwbhURUHEchWzTMWHsACnYrnB4FXDarfcvkNcgjPEyMZQ7kAP7ckfnyBcMup4By8q3LP1",
  "key22": "5CMnsfRYnxQPyu5dnCjkEqsjv7tw6pt2groA9W5ozJ9bw7doXCueq3vdQLzvRFCM2gAP3gwFPbEh2dWQevyxi3f6",
  "key23": "4yrdPLyVT4pbRz8nWcymoo6gsj6AcxVk4V5tLJbe8gL6LqpsPQ3iNjBJevjiZ3xFCRQUQn5RMQgVEGqj2Fxodtxv",
  "key24": "GRD9Qek493SVspEYFKMKxxQkraFKAJe1LnrXhv7wSn3zH2eqCKw7QEPoP3j1mHQgyNH6FJanSMNHBMbT3aN4UDA",
  "key25": "4xF5Y1z7jmWpEooEfhBC34W6CU2HRWGX2iEpSv9NN1WDsvPeBTevD4QVNUdbp8tPxDqxkNrrwRrFTqWaqUQR6sTS",
  "key26": "2KiJrBfKRKtSaFUfactt41rkEu6MRe5UvxUV5yZ1GgAdNnANzMK3LSfRKsFjYwyPKay1z4X41YanCsUB9vB4khMF",
  "key27": "2mj1AvcpvFwup9zmXDLc7YqGQ9FewC21YhrimadHR5UrWE1SF69PFz1LaDYiSfHJbLpxuTT9LabxsB1WQJy6k7Ce",
  "key28": "2eF44amR1qMG2Poz2C3dtg39wc1w9nr2syaKwC9awR1keujJMgHEsms2PCZVUdtw1qkt96LxZJSnjS7pTS8wcrw8",
  "key29": "4jRozJRJizJEtLNP3gLJKWkTbfXpypbUi6MJ7iytXdK4PjuBNT2YZrxQB5SFdsXa46ZpE87urXLCEXvnSGVABnWU",
  "key30": "5FkMmfBbYihkuTThVwRn7Br6xM3DH6L7sMFNmk4X5oXUTPYAdaN3rxdyzdus1nmgKW7eLrM7uvi2iLsrbizTLyHw",
  "key31": "5JNiQc9Pvz5nuFaLLNjSaSHfDq8FGXPdrusgJdZf7i6fiih9yJywN26F3WckowPuHStbvoxowqoUnFxRBsDMDVYM",
  "key32": "2hwfrmV4veKV3DEVc2YVCp7PU3JxKR1Bq87BCfdqmivuYBt9wqhDdwQJqBkb3v3WnWxZxo7V4WyrP4LGTdezPUdk",
  "key33": "4kV7m4cmHxwLVezfo8QrVoqGpvFYUU35fUStzBSc33nyVMzLwT8o4pMWX2Q8A5CPx78N8cV5zq5mvxZcU6rHH4hG",
  "key34": "4huzRFNQHW3fjeZ8Pcjcs4jWwFLWNA8abZqLrRwVmYykhtCEFyEW49HRmyR8R2dzSFfzDDxdT7SzzC1F7Ej9E7yn"
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
