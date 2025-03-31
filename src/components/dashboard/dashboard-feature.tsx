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
    "4ZVjTBYvyXTpLmDArwefHtyVRxrHQD7shvfFbm1kp7vLN4yKZmo9htXqiiNrcggVdAk8WKgeBnfR2v2X7qxtVFZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p23duSsJh2yAiENsynB3qWj71KVnM14UaGX2c83mGrSoYrWrEYW4zs34FBw5cnZrWAddpHewqvVoivvSKLZCsbW",
  "key1": "66FYkwoGqVxEu94Z2ASfqbuXZ6TFnagEuEo8Xke6X1YmCjJZ4s24q5n4LszLxVTRvoA2wjnypbB1gukZ9ZcUoWRK",
  "key2": "5dyUxzLFhPb2q3CTRSfkq93VZNfHEQTojoz2t38gEYF1Zhk25qNVUgzJw9ofjW9SmLdyrj7xNyFLd8V1wJ8warfY",
  "key3": "4UFpdxbfgh6MMJQk4HRfqVhETwR3icaHyZKUK5GHGinuoLmcJbRddvsQAuxwyCqvEWkax4iqbmwH2zUeyceWqHjL",
  "key4": "5hDz2Pan5i3vmRbLzXNTJSegHD8Z37ajWTH5UNyjtF4LyGz5HLVvaN6EVPfr89VmCukT9sQi52tSXsZLiJvKZhGh",
  "key5": "3foQYUHsjtJExkj1DrogVKE6nPbCBvKorBzaWUvpP7vjVdiUzV561dLy63G5PFu7Bt6NpHPgpCRdjVqTo9tEgn17",
  "key6": "5vhpNTwhWh852NVzreerWapTc7Y2z3WkwonhEbphxFixs5PjhKBvCD1mfnRs7d55SgBUTPPCF9nbJ2Ds198C9e2w",
  "key7": "5vzsiZZMHweMeMGdh3P7T4bEWwYPWfn2eDxZaNZD9Rv88oVpnyqaX9LK7nJVcvxDK8wUxdeniZJQfonriDpJDbrU",
  "key8": "2L3R4Ry2CEdarTQ8kwyZPFpdQt8xYvro5Ff85f1oqJMseVLpMzmGPxGjZWGMMBBnQmySMxr7StWeDvJbXApkGNRt",
  "key9": "5gU1xfARjxMevv4xcLbB7Jn4VzzSx64YQjybREavVmFMK74XGRWXNjzSKC1H1vS1T8xQZWFHBiMJBm9DFUR7wyyj",
  "key10": "5tQGu59fyTSrRkBznQPnCqvE8TFrz3LCTCT23iEKUkUm1prq4sPcFFobsz7q3sN6SqwEaAn2hxX43NB8MLsWHUar",
  "key11": "4GCPKrJ9ZSQZFXhN8vRWcC8bzMvSeQZDyYW6pYZ9rJfpFgjyDgkA2nW2M76WwCvDjJ3drdxR8UN5HzhkEV3Qt23D",
  "key12": "6sWmYTcC7z4CVgtLdyY6wobaoNDcM4dpJLgakFt7SbWppaZManWRu3pNWZ64tMyYVsHFYYRptHpmHpXK2gVN2j2",
  "key13": "2btCMeUUwKRsgaLSseJnpitPHf9Ya4gWVUyQpJTjrs82VxV846NaVCmSBeV8csTp8FhtJqu5nXAMFDVBNwGrzUFW",
  "key14": "2vhP7e3CsbQTYa5x4hvuZNLXg2njAHFdCjwkw2NcBuUV1A1dNpgFoUzYLafPvmtyy5MkCY61qxk6xQWSRrW7zFqQ",
  "key15": "3g4JjdxnkwtBuvGC7SVZEnmwEpLaqFvh19AVV81ZPzq3Vw3yjFX7zMdW6mbdjYk3ix9vUhdoy5oQvrCH1a6xzuYQ",
  "key16": "3HZZJm4qDjqwaPCzeBPY3inChKvWSV3wPoMXfAVouCvCR9asT93sjrcR1cHZzMCqJKPbUZcYQnCh3HH6KqQX9bsP",
  "key17": "ceDJB54YbnTbYBhWzwf3mfTCJdk1uNyCJiwzgJU28ESczrTTysH7xDfpWUYzC7jRg5Vs4egSxvk1bPyprq7xsKy",
  "key18": "25r5m4MZyAXxpHXFJQN3EiKxfQ5rmGEznvY9faqmvhxcgCpG7bJkZiwNQytaMt2AMobL4QgaLLLsm3VVHVmiZCQ4",
  "key19": "2EPRGBnKSaDFDwuAkdTKghrUV6TFDyjErszjnGzAkqLeL34inT1RYNdQVKXRfLv919E5xVQtMYdTQpzhvXjm6JHB",
  "key20": "5xZ4G2nmVRFtFvUT3pFHW1P3DeifSKeurmtq8wNS5Nwa6n7SX6XKnw983rXweLmmpr4JAJaXebBo4pjwXyMwfMty",
  "key21": "29DwtEgwDpG6LhmdqyXfkfC7w1siwVZWAgEHkHedUf3MzX5iYX49y6W32xK5sAHYdtgSy5wTz2whNahXbaUKo7U5",
  "key22": "2UeZvQnyPF7LkcL9TFrpYZASaK1ZjYY8bRu1CT6bPJqmER9oJ9neayYCd1tvvDHTBFufzcdo1KwU6oYJ8gLhR2qD",
  "key23": "5KyNhVkMjmDr7buL2RmGj7zfQNZQEw4sae39Gf5aJ9WqWF3YzCStym9AtknaVh4peNFrVukJgNJdfyUAKAJgb4Gg",
  "key24": "4fhg4wgZwvKnafb8EGKdef7HwGnHMBZEEHUPQngNSyzuYKRegC5ohxakjf1HxRnACozyxXaqs3m1Ho2Wo4ag6jKR",
  "key25": "4aE3rYqVfuSKCQbBNU6T7arix1agnMU2eNU1CQkSxDrnjMq91yeiZ3oguZRmLGb2B3YkR15JqvAKrWckxC62yT4G",
  "key26": "29BeVr27LeLuNCjWZiRJTtc38JgiJXcCSMrWQjt1Mgf77q5567AoGC5UYBrSbQmtiD3ZxmyNF2ikHGcXL8ZbGKJQ",
  "key27": "z3zTigdnz8VuxtP3pxdTxhG5QZ4pjnDH1429BWBcYkJbL6rtvuDVveFvScXKcFTDEGZCvK5Jx5dR4gdurkoeTKn",
  "key28": "4ym4qezxEKQWTNEeP6n9w35v5E89aN5wnUUtvvFBXC2QQy984nzm3eSGg5WS5HoYNfvULPrbswzZ78EmxWBecPzp",
  "key29": "4ggbaUZdZyWtDPRybpaXugVoNXovKLubEY4NpqJQFoii8gSRrDdzivctYqvCXRXTWLkZtFLn1Y5NgaBU5snoNYg6",
  "key30": "2JSWJVxuPZHWPUcKFrFzFHeZ4axzehhCFNvuBJhDJWqFpLikpMSWx2DaRfXiSb9YspNdxGCM3Ye5zycFRttm7pCA",
  "key31": "4R12RHAJXQoto2YCqSbBwJYu7gAxvsb9ht8Hu3iVdtJr964Hzm1PKttJMpHXtsbFPGNDvSFYduquwSezGiN8zQ2e",
  "key32": "5oJNoRmP8Ju2swWxADGFFAYP4KkCgzvy9saMkBGiCPVQJHoFfU41uN6yz19UvhBSAKfCdtrhB9LbVPc5QS4XL6yE",
  "key33": "2YVWZ31gg6SMb66eG2UwXerrzYe2BHe6aBWTvUnNz2Zq5LfMfysNUupSdNiE8u3fesH8MLGBJp8EGn5UA1JJVodE",
  "key34": "3cRFuowwh42ggFxPXFgiRJjScjvNtezdhVvtvsJE3Zt2wWKHNBg7eHespdkH9T4oKCspecMHRKBqUMHxC6c213ps",
  "key35": "5v7nET7WY3j281U7iyqRbPzjoufUGNA3pt1bkdzNW4GHD186YxbQowfA6mtLoWQP7AZKm3G3y5dXPNWLZbkkR1eD"
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
