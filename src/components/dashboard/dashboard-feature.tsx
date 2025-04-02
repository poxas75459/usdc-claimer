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
    "tBRZFJL5joP75AJX5nQhZAcUN7j1QP8zEP2t8ZPWegpmyd75HJrFbhahY5uj467JEW7peGnV9Eo9vUZuAfikyw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fh5nPmgNuovGg5NDNx8NCoUdH7CgAsdYiyZjGZN52qCtJSf6VnmdxatGNHG7GDGApVYSt5V8BUrHp8XhkGd9hZm",
  "key1": "35hcfb6o5BiE2V78YnumWYtXcRg2uPuu7Hp2nasFy4MoP9fhxY46ofnnR4uJHWvsqJu89RPBkM7EfddiKXEeFr5A",
  "key2": "67HL22HAsDG5hXrVKtpCxWbeSJhhokP2AAyBWg2KHbXMMEumyoNjgdqvr8oxyptefaWoT2wGvkq6fATbYTaP1KnS",
  "key3": "3zZ1dMZB36tH4hGYgTcVNKXq3eWwBp1ZYJEgFcfUAvg8QDC5uM2qiB6keVEb7ZC5wSBYg9h6wGwY3GHycRM9FSTY",
  "key4": "5gYVKzc2XPzv9VsnisXk81ZjwwHhQai6PdSnNe4RyRYB7qMWC2QTzooYLTM9FLHiP9DY5ayNUH6QxDAjmzGHQMan",
  "key5": "baVGkUqKJvBUXu8pt8YgKsBrHgzvqq4GHB54iyiHtz8m4aUaugNRKJVe3ETkJmjWHAzYoXyAbiqo4zrzWgWJ9iP",
  "key6": "2PesYMYymGGHiHG9USL9EUTqTsCFbC5WBuP6nbQwSfHHoagzAcj4WLLGahKM9oNpNyVkFL66oUSamm7rBALtUvPs",
  "key7": "3L9A2ax297LYTcvUYPcTveD4uC12SvmoXYQHcYJrrUd3sTqidajuLDE2aksTTGLZZrePCN78vWFm9Z5GbyREpHgj",
  "key8": "4t6QNeACNvnL47Kkck4CpsHHVMrmbHP5W6GU2W3FJdUZ2EAUEznuYBqdeFGMRaUyaePUJxdDr7FATHwmcPN4SAFR",
  "key9": "3jtzktuep7f2NYdfg52y4RHZJUcZ5cL65qnj4BY5TC7cCHE9V1CTqAP9wfnTJqt72d1D4JhshEWEExKcX2KU3fHQ",
  "key10": "2qXLahg1iFQRQL8poJztHS7BvyHR3UrKpToAXVuFEf7gk9CsR7eWjWCu8aXerEQkByDJ9EGDeMRD7uxyAxMDDswf",
  "key11": "VZru63dSZwfxhSoKwz89ERVuxZSmgQfLg8nSt1XMv7osuxqeLca5awmPHnFYdsq9jAaZ1hgVUKmterJ9uTRMbP6",
  "key12": "2U4WVvtdezoexBPL2N6NUVNyFWQGWNvw1JXA9DwoBUuaZrgtTvR4puDnbyiRgjT5UG9dmzEjnP8f7uQc7xbngADQ",
  "key13": "2SX5v1jLUd7qdZpxMjNU4ujaNzRpb31djRva4ZBSwBiz14ijGpphY7mvk68Q4yTfcorx2NthUejXArKfLhT61Vnm",
  "key14": "2znpTHWXgxg1TgUZqitUevHnTbH9iYY7QZFqyWGXDpsfeF1fZz4465BosmQLeNp8ZaicNnxrpeUtTH6qdLG3yzbY",
  "key15": "5B6KzBrUJgNLmBV2x7yqcXYgK6BNj72NEFrwG97iM9wARTZmmVAhmrq1Q3Sd2K9XQDABg6WSGeBYn9ub5FMwyxfW",
  "key16": "58VwnesEfTfeCEnL4u6arLN2pb3XS6DANjrk6EJQu4VaphymZCC2atsJYMcTQ5HtK3SEY7Hj1NjuEKuDbAz2GGBJ",
  "key17": "4C1pmDJRRxcCNiWuyvPFFVXwdZySdXtcCR4gPGCN7NGDhPGMV9Pk8LpmS2FwqMJjhg8VNqUsp19uDLARCTjD2179",
  "key18": "is6BJ4RHLnNqCAFz3r5yVDaYe1o8si72hbn9ka1LegPpKHWCpE6hh82ehmRetUFhHaYm2ybGcUP45P6BFEwKxmk",
  "key19": "2zXGh6XwviUSEtjSaQPnGyB3etj9u3b7M8kqHptLm6SeyuAg76HTooAU5neRFEmHsVqskSmYMhSEVStShCL2wAot",
  "key20": "4vzKt6oV2YfQ21wRZjYM7BW3sNvDLmN5fcGzeJaa8r8HMCTdwP7nQffEFzLNm54b5xYNyEsY2XWe81pX6yBUScY1",
  "key21": "4H9tssz1ZRXCpy4Am6hgdZZAkMm7YosUePWX2ELzagkEThnSDMWvEdhRW72tFmWLsJBug8HsHVAxL6YxHcjoB6Yo",
  "key22": "4uHWcX59iCSoguqev4nNNBMVFm5JFYG2RYQkGbYuFLJkvS8G9cS3MfUDfwqFhBxUAHcK4wJ6Wfs9vDd3jczwFnX4",
  "key23": "5XE5VYTPzrgJtmAs6UmLm3Ek91Ryn6CZ2kiVPXUs32dC84ETPh5AzhZtpnTiMzFpnprHEVh8YCBMGjTEPoUQG8F1",
  "key24": "uVr1ttJWfqQxcLCFRDs3V9qodMngVquwTBMSmpHysH8GHNhnGDuevGLXbeokjiom85hWiH1xZ7wckL4ram9PfeU",
  "key25": "UatpJYTXdkZMho2yaYZewm5gRqTsHEfqGPAJuctEW6LQC4Wsq89SAeeEpkMewRGU22eGAeonUtqtKjLor13jqzf",
  "key26": "5Gg6Mti3krhcEB9VTfp3YVKUGyzc9dqyuRyrMkRhohu3rtBou8SNB1fHrD6pCKLGexHdCfPcmJkKNxxcAE5ccHb7",
  "key27": "hBpB2KKA7XxehYBMFEbyu1zuB6KUjWEuMsdU6x7VxTyQKvnTTgsthLBS17PyyCfDKmm6L2yNTRLj6sGvsQUj3dj",
  "key28": "1CDf4AKZGKoK69yFbNaixPK6yT3pPuGSBo1qtYWWuRcXpu1gwSjHkmYxT5fBbvzTknMjtcenX1NuAA7vd5Tibzf",
  "key29": "2dKDmvzRfSRBv862cV5fV1xZdCNd877J4mPjnx2wtYyjgMGF9KjQy6mQ91nAjC4A7PcNyEWohcRpfojT7kbT1dYc",
  "key30": "4oSiC4Tfh25P2pGRU6KvRr1XPQek5hTcj6hWbbXBrigNfgJmUmbu4B5wyQ1NS2vtgEKwrVZLDQBXoS2erKXuwX1C",
  "key31": "53bS5amDSJAdXNobbYYqc79U97QWieAUdR2XVZviRyZG7yjnoLjsYsg4Bvk5w3fEM1Dok89JfCUq5giDUWmMSjyi",
  "key32": "5eTH6TKTBGBG1AqC378GV2cGVey56FNo9XqyTwRqmMcFcsWKVkxkMcKxtB8qDLdRgCY6qq3VLmwWw4uvWSEKAsAw",
  "key33": "3MiVh3qyWwXons5sqRF4CrBy589LYC78stiCNZLCGaLKLpAV5Y9EWK8A8FdPDLMziuwoaRNXhfFcgqAzoDi3fTc",
  "key34": "4uUjxcg6KHU5gZ2144VxG2KEDMoqPii38zTqD5bXZ6QcJVx93pLWx8R88A8wVDWgBud11oxMa1xakarM7EjikuVA",
  "key35": "vgRGazatH5UE5M6ZVhbunvRYfSNYxeqcimavwB3U65jmrxJ8in5vvN493mag4AwMbNdKt4to7VkKZUc42sh4XPj",
  "key36": "2YFExq6trBt9SH2AuQ2gGzHfiKEEZgfHLQ5xJ3Ckay5v8oT8BQTjmvL9FEEzRuV1xARebtcfD5z4N8wXGc1YMGjc"
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
