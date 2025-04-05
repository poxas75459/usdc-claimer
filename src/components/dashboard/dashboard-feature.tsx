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
    "61d5E2inNUu9kNtNi9pngzsBDFFV3nfPDkU7xyfR9zxmtzw5YEMU1PwK1qEh7i65K49jXbWuzq7E33pi3h9unQBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hpbpqp5nMVBMGQ8GiQS7CZHcaKhZG3WupwBK2AXNTSgeTYtxoK8suRa4SRBAa4p2HCfDA9EUsEwUbwihtgrdu6s",
  "key1": "3FEErXDgUHZR79B1fSrEfddwp3YLtrAqgeVmkqMsYsjxpUQLij4ucoSYh16CUajakzMzjjzy3TDNLFmWrqacuYm7",
  "key2": "2v1D3sWM65JwhwWjUEUUX9QZJErymBXxWsuShFAaQKtRFJVP9Sw4otBYzTYY14Eo3FPbAEkUiUEgysZubUntccAk",
  "key3": "2TN7WDunokG5JiRv7R3nnCPduYGrTuNQTYWzB8E1ha5SkYFdCsyRgULaDQQJeVENnYTmYjH7Yg713ZPWysEefPge",
  "key4": "Qaq1i2qvj5FN2jLjZX4AiaAVZPzLDqs2EozF6zQedb4KwzHenEW2kdnMLVsGs2kVPJV4A1hh7nxwSH9bKW5uXJb",
  "key5": "2HwMKnEEucCJ343DkqrCuMYGP2vzz38P4AHymYSF4CA3gFJqXzDgM8AqfQCdsv6THBPr2qXUwHU1pDsFnV7suQQr",
  "key6": "CeLQb9HRFgsx9TppUB7un2KVkqmRevvDxFPmA4f5Vr3SnYTbVk2h7U2JZ9jZXhUkkbYBTm1dGKA1jjkD3SLHdWK",
  "key7": "uXdikc3wAKzz1Vp28psj6K8rpHt7tXWXzFMtnECiwxLbV6uNLVvGLUHAmNC8dyRC6ioDFb7WYD7XNPbsQKiysEu",
  "key8": "6wpzpVSnwouHMW5WiYdtZAC1qCgfc1A1xrf97YtDDY4izy1QHMBCDGjeGmNeB5QgkhDzrHj8ac7o4KU6KSBBQ5Q",
  "key9": "5EDxcQjDfGKkzYzMLc2wZqXdUkwAurvy1uirDqsrayGhoaN3JN8gRGFoHfHR74PRWcj9FAZRkTJyLnm6WtnavRAX",
  "key10": "2RJsrnwx3BXUGwbJbbnwmN4smMWRyFdyhGHzkkDkF49zFRXjNiNRvpKJeNeSheSgUCeJKmkLh8GhsrtnnjQ4tfUf",
  "key11": "3BiaQioWSR4cUyA7cVTPcSDQaWkCeuZZFqyM36T5DV7wqU92ddzG9WHrfTP4XxcY3opWPTJQK3K6GbEzHPRfx8pr",
  "key12": "s3FBNaahfp9qFUYvtryavgavLfjGMP3Jqt7PbiAzoreBGiwQZorHHezPF9z7aPPabT5nPp5ytPNSmR5xW73zivy",
  "key13": "29sS3pVkYQmVYr9TQDfgKPDnKg6bCMdx94fQmznCoDaDgdzCVm3Luxiz4wEQDXkVsTueE6emRBzmribEaeNbr27p",
  "key14": "65FRrNqvcQMDaVUWLYmvNXyX6uUZ8EjbM2GkW2bfXKmfbtYx2RqoBiXWB8M3fE8BfdPsL7ukYaMGnjARBi7sLFuD",
  "key15": "4LofVtzsJonW9VSQmWr2GtxUYNrLorTqe6JCvDqqWrKYrU7nLfFVNvAXqCssFnTezCxuvthDusej4bg2pc7M5qZL",
  "key16": "2MFSKpbkTVjtV2CmxvujjPxAu7JJu98HBkJkwL9dur7nuTgDiaqtVEGrGoKmo6Kd1hR4GmYb8o6n9L5CWZSQWPDV",
  "key17": "38NyacoUJ1EDpqLZMNnqqvdQZzycJ97QXEX7Dni5fsmaGJvF14Fmeu53tCvT1dxRpQcSvxkZUaLSjcAygvG1UbCT",
  "key18": "4YDoYmJUJZw2czD8Wy9U5qMh6vckhfuV4ig4WG53DfxXVXFANkDrNMNqwN41JMdUgNvgNP1SKrLCnhXzZnGXNaKc",
  "key19": "3fmbzSFYC4NdHKjBmj1xszGzAVXAV5kzzchqTj2sscGK6SQNe9ghxRR58cN62jcPErMf152dbBLogeFeEdBELwVC",
  "key20": "5N7A6pBim6Yohr4szoLx7BSC6BMMQQpUcbFWwezBxipPe3z4F5rw9Cw5qFPhiWc3KfFQaD7RC3ArLBQ47dpv3NM6",
  "key21": "2EHYdUixP2XYkV7qnSLj5e84GsmwtKgH3AHbjsNYeY2zngxnZdBMNFzT27BkUL1e8fk1YePGN8GgMLt5WEBWF59v",
  "key22": "56sEpW3jQem6KFBqBxL2nngCRe63Rx4KnkjTHyZY9W2nYqMPzfVZHQPN4gTH5CDUmHNpPNTzS37NFpkfqkoTTsp1",
  "key23": "46L3TM2npKR6aRRDjEkwc96hdp1bCQqE8ZLkeCHjgdaaEfMJQMpuC6qoxrs5kaz8dAZ4DXi1BLbYZFbFsQ3Ve892",
  "key24": "4LvR7vLDzkzmHtW7hAKBHRZLZFXwfMcSqa4N8wjifkH1w7vHEhqUH5t55SyrTur1h9DVT2QcuHKhEd4VxGCmo8aP",
  "key25": "52kFNMhYo3vSFFKXQyeqW9izcZ4SpgAAC6paGpsCXEQYCpnRtRbDmY1YubATmJNhu82JpSm2CTJfKeHgpXQDtM5w",
  "key26": "5w48kMF7jtt8sWZGVdRShXiLWZBjHdAcsqWVTUcAcs6u28mi94YvsNFnuHsYbNVcJWXeWbrzkvD1uGyz1ZMoT4WN",
  "key27": "2RJYMK37VyRMNcULZP7UQnyY4AhFJNbh8zQryVSshyv4274TYC4MVihKH5WkA2N2tgbhUsKLPdPL1GvDvtjxKhHh",
  "key28": "392nVf3sCCPMnHsiGbcUw2g11cJgQj4RWwTfijpw8ZzPvSm1pbiYUeiLpRext3Ap9N7RFRfQmZBmTa57KTXrv26F",
  "key29": "2QSzaA8mQyrWmGgRef4PdxiKKiBZAGui7X9YJzMzyfmavwgeWxfNx8mUL1YxyBz3ncURQxZnq3k16VM8sjUXtfGZ",
  "key30": "5zRDbR3PbirYx18eCjwpmn8A5bMBQDkQxea7hx3kQrgcJow7VcrjDajkZ35V97ZRyvYcJwjFCk5yEr1Qkikz5xBf",
  "key31": "4auC3umXmK45MxJk6WtLjkAHPGfmuJ7fvF3ReWVh9WnRYRjSMrQuvowrB69Jr9jRNDVMJMEFuba6L6yQoS7Gytze",
  "key32": "3j7c43bUAQ4Qdq2rZCjeMoDXgESYGdFhBCB2s2UzEBLDD8UYsjHpaFb1ZaDcHqtWYy176TLJVEBMGewfe9bvEcUj",
  "key33": "4Hqi2AheQwTqHrNu25nFEXboPQqKu23dXYdRSdfqXUg1jc1tjF488Zq6T2S3Sx6BNnvxaPvQGKvcGWRJJjqgGSsF",
  "key34": "3gbdxdppHgFHE39PPeX8KohnWH6ikWh4ynKLB7EhWLiphd3eBQxJr7CSRVEs5F5gvdJ9z8yxhwg91VqXkkTTTgzs",
  "key35": "W5reSefeZom7Kjbw6V2EghZhKG7pz193cSuTMaeNjxxwuDrBPPgZztzpdiU92jn8CbbRdUHuip8bMFeVD6jYrxm"
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
