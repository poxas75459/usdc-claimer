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
    "4gQEmYGST7MyYBAa5umiNBFooEiGRS9RVUrnjSeWa3jmqa8svs9PY46Z9jYYJUgrURRCNChnsi1As6PeMQQooAEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PscWnTr8gDyjVbAp96sPLXc1C1YxNN8wHWq9qERWCa3Mo8NXjHee9Qp6SEzSfLUJedqbTdhTcbTQiokgZAAtjbT",
  "key1": "3rEPXVWHa1bN7JZ5RrhYskT8yF3uosGQr7h6YkpqPMSz1HQeDQc3G8j3519etH7M1SJvEWGyC7qyZGcXHnncGP14",
  "key2": "4faaL3sKKEyCTX679n7cMkA7a3UcKViQGpPjmj289Fp2PtTL7HbAM8ipYRs7uKNvs7xmLDrkwL1xBciJxdHNj1p9",
  "key3": "2UqcgKj8DLxh9hrRKx3nX1TjrmGy6M48YdniQXu2tCeXc51LMkohR3q8MvYLUn5jfrqzmA9A8BzTPyNe2qag8Th2",
  "key4": "JKShuSp14AHqvzrNhGcZe3BYR2mGWVtzPiLNdQrhmHy8KK1gUuAoMmqFqbJU4bkvBfhaqhvkF8z64z21k5pzUuu",
  "key5": "gRjeLJcW7dHiBB5Jz6XeKtQqUTP8GxsJZcsD8yzosR18nfHwNeBAPxnHc9efqTM8pj4rXLm8sVTYw78pcTUTRa6",
  "key6": "2sQntHfsfet7r1BAsE8DQvDh1u3tNszoAiamPDFCWnprBSGRGxFEKsKK5DvR5NDLxVwQQrNLyvqaJ6csAnzmsYnG",
  "key7": "2WJETjJEWGgBVGCHD42hrQhHE8MsXfYaSR5mWNKVgeeA76mU9ywTArDJSgJbLCRE1aM7ytPmDsKx5LAECtbxTEtp",
  "key8": "5ZPNEPoSrK4vqby7vzwNmZAd2vUzrHjAkVui3mf9WQJpBBDgFKfZgjxWhKEe627Pi5dVEt2RDMZnLHLJd7mLmaw7",
  "key9": "2jZ8UvEHvg8uYb9GbnEVS5CJ8HuYMs5T96WFehhiyjZ1R1S6mnTuuRNe8VwRK8ZFaJXRaAaRN2MuK9g7FvZTsuhb",
  "key10": "fECwGxAZFym8ypwLU9igp13ysbBrB5kCUdKKAMFpcsAjoGgEW2gn67negxDahykPCLS2eVEQicAmSaA5uh5TkTp",
  "key11": "53JcirseBZgHHFoVQTBx4LMgpamzdEKvyFxkqcoFtx63f63t2JzsGSrvE5TmMak7U6ntceateDHHQvm9qSid3Pyc",
  "key12": "5QG1jiFseNS8nhaXcNXL6QFtwaMa8fnaTLMumakvUuXjuD6waNEcxC4KNken36eaxGzwZCMSKKEJTyJZMsV1iH88",
  "key13": "d87C4Fm5n5MCBFzj9r8p4M2hzD8VinQLW7Hp4CS2V4aFJhimbtAZ7sp2RkMsGjCQEB4BuLPjfchr8sn2PEm42Rp",
  "key14": "314G3y1YGK66cGywp6V7oGYamDnoB3mPxe7XJEpLRSCy8haPD9hXXKfBgxjNgyZjNv3GUXhx1YMHR3K4ZbHnNp7x",
  "key15": "4EMAYEjW2ZbfYUaxhs3jFn5xzqXYKKpX6PKLnaVkbkXjEopyo6g1vEWkUmgFutUoeNwdttvcWKiyTQXAVQSL4vrw",
  "key16": "5JHciFpYSYUNyqSFVFUduRHmx9vLwkPprh31W5Lg8jitJJEAimQFmbHwDYZUCLcSufmXBTMp5UuzfXE84goTG4KQ",
  "key17": "hx95SAtLuKsczrq2KfECVgz1gUeXFquvUhQsXqPzruH1HVnATZos3hEBPzBAc2budsL9AkuBnz2zXECiiGYUyQW",
  "key18": "jAScqwgxHrbPFKLu6mhh9Xmz7zn9W1VmZ1AYjPwc6JdWNjXpcuK2Y6i5hD66YQ85pdc6nPyyctvCLyZBLvLT7fs",
  "key19": "5haGfMTnjd4yJ3P9o4mPUo4Gyk4bAnov2ChecFKLivBLRoDYcZUYUS4b9y8gGDAcYu9trvAS1SGQETZ6Tq7Af7Zd",
  "key20": "45HrdxfgSZ9zGWpHSAq8SRgq8XwbJzEWHgRBaGQeroxzLJX1y2sbVrwQocsp7UkKdUKHuLU7WX17BuQsjKvVo4ug",
  "key21": "zaFdDfz6Nn712Ss4MCgo57skaQ8nReLzKvfz5bWtS9SURUdaSkQfdN4EnidZ3RiLbdpxxwvfVs6xwypmm5Mk9Pg",
  "key22": "4sY1arksSmof7UocW6RTmmQKPXLVfXF1S1SgnJYdxVhMw5sSzcQ1SfaWcWE2kBWbGb4Li2mVJ2QyS39twXZdx6Fd",
  "key23": "3JPVj1WfW3pTqFfsA5oE9BBzmQDVG5D7vaD3oktrRkkmo6sCUiFKcQhExW74whsrdS8r9ygTA14n3tG8JyTAQsSi",
  "key24": "2hMibgsVi54XkABgsMB1kzquqSd4Mw3B5vq7UdmLX7Rsqtoy4Ds5NoJMftCcggK7ZCmbAggdUxQxTonzdhbTZJ5C",
  "key25": "4iSAthziSw36YvMuaDCo7PM2CYiYiNSSq6CLJdpgjrmoocCRenLJC5dPbrZX7jKhjaianJBhEB8NkdCuNPPYAiZN"
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
