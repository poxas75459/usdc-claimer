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
    "67CfRzm73xKjoyUa1zsk8Q2D1dPJh6s8kUZX85uh37M9EgZ2Gb52jKXi19yuSBZ6v935bZv6ig36dh3ZjmBHHF3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MAxUpak3gT46wWj4zamYRUMjRUVfNbxm1aAwzUGjSxvYrfeZfsxXnqaDhH8fSbvqtp96v15KYEHAxMrconKr6Ww",
  "key1": "4BBQBqFAExUMnwvVcGVTgg5czDzRQ1Zt26vKuVHAaV2yYwg67v3teinzroqggJYhKjMChadHhfoJ4eUYsNzaAXaz",
  "key2": "kVfLacK3QAAXb5vVJptYeLn8dDvaJVYAARjBQ73MLqNLxzk4xPz1QDXf6WxwAnewpjJ3WymNs2DB5rTrnBEBAPV",
  "key3": "uCN824Z7EBUW7BR5WJbGfPshXKhEGZ3uHNSFeuBKZd8eRkPoJ9moSLrqdaJGLotqkoJhLbJjkVsnqfLeboMMgCK",
  "key4": "2Enjp1JHu9ZKM2Hs2Z6Fbp1oDw7MKq1yhCCsnqZ7NoeaBd9iovoJ1Vtc2S87wJkp35SQezAyJhPMg7DRkdksEsgE",
  "key5": "zkF5Mzfr9fmYd5BEJYYsueeDuJ5fp1QtBkko16i1M16C5huM7YystN8um8QmZLyBCnfdEigHDP4h7hrqBjwndYY",
  "key6": "5s75tZh255F4THQbvhxAQFDSUogkhMkvmYoA1RXkVbvBY7tnwmgXyfAmJ4nGVDrL6G6biAohtpQsEufnbUtfcdy4",
  "key7": "3zGNKZn2NaQCCgBWX2isPkr9x4eaLDSN66291UCof83sDbame3QWiDCuZkexLetvm5dPaNEkA13s9mdFTEqsZH5y",
  "key8": "3NkrSuRgdhLxQmEnuQnpQdgXMiu1V5aJA9cGuSLFYxJDmx3aPgBnuWuDDqd3iWZ1Kz3UpUTvJiucvuSXFHg9YTK5",
  "key9": "3RpBEWEnfv46cKrKtSXC8jX9WfsCxJYeLoYsfMguzpDeZbrY2FnphQcZW7XkmuG6DTy5pupiKVG1XSPza6Gfshp4",
  "key10": "QcCioF1aV8UPrWsCw767t54fB6UheSmcGbrZiPbcg77x2KjpnUxw81iBCKckreiSeuhvihiR7WJEdt9xHHTd4rg",
  "key11": "29pGMcjFd9gkCi6ySPkRwLGvkPnntT2AN6FtJe6P2WfXRPd2whTcoD2VFJ6LY8ZaZWMgvSKy7CtwvRY8JJRimVVr",
  "key12": "2hFqbwsXgXGoX3o4oAxFHDBRy3DM4meTxDGktAbrLJBVsz81ioeg851T5KHhd65BrmwDhivd5FNZGKvP8i21sxet",
  "key13": "2bJpUyVzDyUNrkkSnTDKDTcQWB7KQVSPWDFikivbwAD2ZqWwKezCMLcFtJFeD3Sm92enGsQMJMi4s63b16tnUwQs",
  "key14": "2jq9iKkE8C8wA2p9dMMeAVQ95jJ4Rurw2nYLahHBy8zA6cWQHsnX95aAtsJV56aDUXKz1HJqiBunJRxd5eEdgZ1n",
  "key15": "2HQdHr51NLc9Hf28sLxPtGSAzEjqG5vRsaj4KVhRqmjRJrq7PL6gihAT9ntuPHby3vAcwG3gcAaj9ACwHmJtRsp3",
  "key16": "2136KgiuSexGCCom6VDdeFrR7DhedhewHQNYgi7LEDyWSqBCVyaDSHWGJW5owmXo2ZpViNhcyNLS3DE1KCHifL7q",
  "key17": "SSzaT5GfQ1J4bxhHGQDzjt5FyoF8YFM4pWAr6TJsAoEYzBmctzYMVLDi1vpjw8qP9Z9Yo7VTQoA46DCjRZshz9H",
  "key18": "oBZPjP3Fkth3XL8waJita1czJgRWjKon8esQ3GCjyKDJpKXmeBPBkquWVko2zQxfEx3eKftzbpaxhjyWPD1cmRE",
  "key19": "2JRZUmpKB1ULRKLwRjRiq19ao3TEbMNTRzu85fh2TaswkMuztnF3b4wSFg5Vq2ieEHSu8Wtc8KMeEFeMmWiG4BQb",
  "key20": "4y5zEvMUwd2EstKmmHXg9SCrRQgCx2aZS5fewBy5bZHx3naMz4zYDYczZQ9ftfy8zV855ngpeuPc8fzYJLF1D2it",
  "key21": "2eSt1yPxXfGqSRvSTgXwkeahSWb2VXSpw5tZpBAk6KwAJhxFPxuQ57SGcdeNLr5sNmKqzzo1fiqvZgesBtfVMc4j",
  "key22": "3ogASrtNcjjYQvcAAyFAnqWD2Us7ejnHgt5GKkPD5XHVbYNmLMgncT5Q5rLPf7LHfvSNkBQUvToEw27vHzpjJptT",
  "key23": "2UQRVPpttG4crZ8BvTfB2JNw5iznBcGPmyimLMCFjwpBTeckuTuPFQrwtSe2MyA4vh3WkE5gP9r4vBk8TGSsWpzB",
  "key24": "2bFFJ21nMtchPkBzTvx24uQEhwpUXibvEHo1sk8tpsY58h4nPRf5RWEFV8Ni4wfEa6JssffLBm68PTC32Go3cL1Y",
  "key25": "KyrMHc2Mb5k8kFhpzqRreWaxWbCUXZxqsm3XunzuErTWnM7GgkUYWdNjxRnfcGWbhbJvBJqjBCp3HmEaFW9aavS",
  "key26": "TmvAfUDZtpkAEwbs5cj1Xhfck59u53gW1Vqcwbo8TJed8nvJ98BmRabG9juzDWrRsR1vYgankrNKS7YwY1NHWQS",
  "key27": "2egGFQGKG85VUeP5pNfGVRe3Zkdgd3hyk6UFNeUnYy5JBYRBTBzG1cBW9mbT7wg98rCE3xz8R6nFGNQDD4NBc5pi",
  "key28": "38e7DB24JfSVJmb8WsaMojds7hN6LRPdouk7zE1U5AY3TSaMFqUUX5xdNqMxTQQmRHRWu4rciAjn2Ms56m7eNzoj",
  "key29": "2G7vrshv5HSLPWJrKAdxL2KUPwJ5MUmN7ho1zbfXBTkDFR4soy2N6qgAN4dSJAMRikcEMPgD5SG215b5qHBkzVoG",
  "key30": "385pHjvaiCanQoXemTHyYE4uLj34f1pA1Q89Fgj2o8Bpo7io1qAkcjf47oBvww3zz8LBEgucYDdE3FcWxgsh38CT",
  "key31": "2PPvPrvPt3gwmwFJKf4nouhb4HLoQZCAyRJqwPUwNyCTjECD6KP8XPnKEYwiNkr86dbvbQk1sCnVCNHXFKGQRtoP",
  "key32": "2cmkVffEcjxsSSFpJPe2RfvZieX9u7QVvs5Y8SeDg7fViqP4w2YFiQf2jvFHkjjeMSFwr1wgbWRewXuqABdh6wNR",
  "key33": "5g9DHiF2xbA4pDhZAXK1SiW6KHrrLrLmaY5FMBUvHt3DUxHJjHmBAnhfLdQc4b7YWWWQeivjYRNTzvt5c61w1tea",
  "key34": "6jeRYLijrajnWGTz6rP4HD8Q48SXNdJE9qFBGpu7ioRmJTwHNoeD9FeWqGAVMyuHx9dDhGA9kFDkGhsdaQsxXcT",
  "key35": "5jDxZPaK1Q9N5Zjrg5W5fhMzvMCaKxAdJynX3rSFAD5w1gJTJ8Sn9CS2ZdEyGwnUd6Ze5j5UbFsW4KKXPb2hU7yo",
  "key36": "8xvLH2xmZ5bV5YUaDLjaSnECh1UfQUJLMeh49abWq9Tp1Jq8iifGy14sRTEAHfjoDLuH8MvNC2xoxzjSXKFp5nw",
  "key37": "2UYnbjwzn4NoBy15Ka5jtPQH7UWQpjXpTM6XTkKXJT1ChnzCXT25Ugj4Fw3HphTGKySqZYZsi6d5qt7ZjzCqiypP"
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
