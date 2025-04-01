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
    "53p1cJZsCfSTS9tRSWS96neLcj4FgEqSAtXZHHjdW3LoiFQSb1ZWKWrBxU6pdjVdA7Vu1nvFepUEvf1e87mhT73b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DNT65B4VjbP4P3ocW1foBw3eYzU3mkQtECCRC86zYDSBG96vve5GsJ5rmQktc35UTzzYGgcDQRb9xHVszg78ZTW",
  "key1": "616vpbEz8BcNhcq2D4HB43k8uVgGoWuyrs1t37zRKd4pgnwWSBqZ8wVBo21Go9ffTriD5Jaj44qJMQ7yKVcjMEz5",
  "key2": "4DYVSLYKx7bPJkAdA1h6PUjbzfRjFSKhtZWbmM8JzhY67svHk7bBMwvcks3CdzYpwD9NyPZg7tqYFazGSApAewLS",
  "key3": "dmcH18FB1YyG9kL9YF2HrUkbiZGBzfUSSJsKE9pi3ZyEXwkhAxLWoWhsghsYNLasR5asdwUaf4fyThA5KTv4Amx",
  "key4": "3mK1jXXYjoJrohqx6re8qFDyL3pEuDL5uDnQStBSoSn7cqCMWeB4GfyYxgGQ6ZwHSQYD6H4JSvaLkaCsQBMz8aMK",
  "key5": "4zvi5zC1z3jZ7WjaHS4KaunfNWmyCXwe66XtbcFtBzwBDRrfhDPrE5wyYCiEyUU5p6u2M2pxGgywdAHbTmikfzQy",
  "key6": "2CxS5XwxdxCtLs3LtWbDcPTswQhxt8jJktSkhkzA7ybcsJvJCvvN6JrCEewrVb763c7JUXwfMEcWkcK7RVaGdkQt",
  "key7": "4ne8qSY5kwtWPozBFhpQZLmKBYZucKmDLvXAA3XonLxBGqtn3PKfJcS7EqLQsWmXAGYT1FBUAES2KHX5pVFYKKV2",
  "key8": "23RcW7MawhtfZreEPMb6ykxocVpzHNjuxwFHT6QLkxgMgKkUvKfF9ZokYNHC6U27Bii4cgdk2S9Pttq4s5QBj578",
  "key9": "39nYpyETi5MA8S8CQoiugJSpE9ATuJGYd6yZrxGxW5u2oXyDB9QFemk4hRB94jWZC7hyeRhhVNBje5F7Q6qQfxop",
  "key10": "2qBYE7qWgSaY6ZmenYX1tUCSaLg6N1Me1Dzy3xWzEQzTLoXoHeaJSCQ8cStMwc1YRybxdEXajTjf92DE7dwQgxjq",
  "key11": "5XD9TMGCYPP3wyLJinx44rmTYLnmjivUEZZkFKPhYPXq2XEswK658FDHXjyrehLM5ng9BkYAJEJkvYNHtQYNFHqy",
  "key12": "2jg7D5hhdbbYqtUm4ykrHydNhUPE9xGJ4HMxpKL3G1ivcN4MYRx83D4BnWpe9YyqwJVJrHofzZ1jTkenv2q6zF7n",
  "key13": "jtvNAmcPNSdeaciHxQbtLoCRrwQYE2AbqiFB2ZmTijewCDT9KQ8ca2z4XQCY1vkfzsiEorobk2bZEjdk547xatc",
  "key14": "tKRf8fT61dWfU1s3ZQssbY2LNboVHX6M5TYszG77p4iS3AJKJ5dya7as6MrL1GFPmxtuLCQKRQKF8bQuEJroWXB",
  "key15": "5G4iCgXGtzt3EgmUZtPT5wnDqgyWHKrNkVvdVV3qG5R5hAv3fkNpserpw7doq8PAb3cpxkihFAHycoeGWpWtDSHu",
  "key16": "5X2E7fFVESVLBn5VQuoP5E2LYDXut8aDqmVDZEUVvUDPcFzZSdqw4n2Vt3LWxv87sosnH7PhQJQfcfYFNRNYNM3p",
  "key17": "2CfFWFew1ewbiU5N4gbXhYDrXpEfUX77V9L2sodmeNQ8HbduqCy1ZjmwtPD73qSxZfvTUhjbVZN6q4UruFPb6UgZ",
  "key18": "3FPRugiT3uxw2aEtgzQrkxKkv9Si1oq2nwScwZJXE7Aqz6NX6fpnULZsZMy7PyczCVWV6M9TBSXJNGa6Bpf6TBTn",
  "key19": "cHTVSmA1r4E24mMKqrz638JqGx1W9dtLNCzxKoosv7eSKGi2t5TWJf41Safd1ovuRyexqFuay3ttX8hC84x1FUf",
  "key20": "4opVdtLD5ATHmoReHYVhE8WcbhCec2FfYWhbHYvVKdxWfjaqKCqmyTCQBtMQqLCB4yHCN3NePTrB1mhf4KnRNYGR",
  "key21": "3qkgHZYzUUuwKCEkTPsnK92UWQpKFXHgb5gwWXTxHs6i8Jiy9ZzrtjebMXSA5hy4Bt6KgRPJTpbaQFVoyyaHX8kC",
  "key22": "265ggf7ExwAUJSNJYhMvbo11iLyFmJ2qr9qoYcAswFpPkwkKnzhYmBJXiHbnentmCW91JpDHHrSMAwCNfiSA8y4r",
  "key23": "4XKyVXxHMeM1K8cHjkyJbiAp6Paa9zjwpADFFShbATeVpfuyesnPTcpfTvhby4TME9xNQPNY5Q3TJ9RdecuC3Gjd",
  "key24": "4q9ZQ6ULL7xt3TEwVGTnHvVmL71iLsLY21hXEg8XDZ5cKwgWReWFxMmGwpe4ePqS9ajipoit5zXMtA51qghqR8hr",
  "key25": "55Z7zncztEWeWnZJQG9Y7Kvvn1KxdTSZ8jHKLsK6JcohaUvsSNDtXYohtKaYg8nnLZ3GW5cgQXeYaeGpgPyD9Eij",
  "key26": "Ho7BtrijQXoDarZTAfNFnmkqcNmrpFZ1tdYdMjgNaXoo3LJG7GVC8DTw9KDitXqAxY67C3iaHNx3ZCoCqJb6uK7",
  "key27": "zhqxdfMu9dgRu1uqq4JURc2bZ4EEAZE9JUJjJSEpX7VrTuBFVG837MypJ9fyRc8UyDRDzX9nMLWS6uDgLqtLNwy",
  "key28": "2Z2kHQWaAzctDuPoeCjjQCCvmKhKTEXacozs5F4mFZGBcnywTaixW7K5W9JuFEZ6nGb91M3x2ijrxumLkB6WDk9e",
  "key29": "ZmeJdUd8y7b5vDcLvGDzAKX1K5S7TziRwJ49SYJgEyvJk2oBRuvWyqneYxAeDfLwY3JLKYZa4uv4Zuxio8iV434",
  "key30": "552KxJqHYewT7fKDWm71FVYZ9DKdynSf5yEN4xCNjG1xYRNtQz7VsoybnUvLVr7tCN9VE1C92Gbd2RZHv7xz17kK",
  "key31": "5LY8UDU4nG9VN5um4J6zmhUVf7buJAUZPgySNpy8f9TVRZxkDAR482Y4y6cQ8nXapmYc8zq5Ko79r6DXUjTs9o1M",
  "key32": "3qwiXZjrhRRysvX4qZoKJomvAbvc7PdeDVFd3KYa6RTX8XVY4FAwV2apGAzujnmDH6sc2ZBasHDfUya44R9bXuBm",
  "key33": "4DvrTDavBqNhTcnpsgpkuVAgVwQteU2JnwvHtVdKZtE2ejKXb4FReA4DdNAf83uLz759nfC99us77eBkb4kK5jaE",
  "key34": "57vu9c4JCTy3NK8PoQnfzdMTDDkNp1F6LUgMwzEEfxhLhHh5eyWjvcjvyitHepHthmNAcXVrJR9QjgxmBk43tkby",
  "key35": "2AQDzLXfBqsPVumpqft3pALyBzXvDgc4hocf1gN9HvVA9Eke3xHWWcV71mzZLSsNbTo4QKcbRFy86W8WWCu3Qwde",
  "key36": "5pHweuURqHKwP5SNuPjWgkfDtRKT8BXwaFN4YkgjPBiBPcNAnPeupnHbpe4KKMt3Ln53N8sasj4XdBfe6CAvxjR1",
  "key37": "3U5FjFQveyvq99EwFs3Y4pnFYG4MuocCwfmtVYHiimKckCVs5J4hcJAbHKjvrLMwJGvVV4tUW9uTgBsmvD3GrMg3",
  "key38": "3D1VeRrPZba57wraKRCZyQvtFfodxm11Ee8gJ5o2SQKum6iqrWceNHgpkG5AdFWzNYisQqdA4Tkb2xpoud8hFGFP",
  "key39": "4AVxNxMo6PrGPyTw9wmqdAg1o7vhmXXpL4jPpVFXdhrGBYCkimd78L8AzkmJrLwQkjQmHe95Lqhqo7dkvs6TNtjU",
  "key40": "2pcokzA4b4ZqsEoKqXJ8REz8Emvb8jf7iKtCvVmyM7cphqNNnWAvwD1mWtBWAbZobm58mhLCbKpspFhtetEbsH9",
  "key41": "LMXUwPo1UAf4XfAUvoaoQAaPRjwQ7GVeMPudHVW8TnQ8it6GdxeXmtHH23Lf6e4Fmabm7qHTFp7JLada2gWVvdM"
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
