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
    "5te29DCAEsB1K8LcCnAzj2Y98kHKdn6CmwLKJJHVYw1SfYFrhft2WxTqzNpGe6AYD3Ug4pcxpktZprbHPUHrzLXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c9nCCz42onTLqobrBfFmcPgNKEdfNWYMYzNwr395e452ayeuzq8kmmTJnikEZpQfUBPiyN86YmJKpzBWQRivfUz",
  "key1": "4rhmKfSBoNZvxiuPDmrJj2Tyff5gKLEmVFjvVWuccgP1UJNksMRtBdsskrKYhTK7YsMeU4Xu4aDTM5KJntJwXtSL",
  "key2": "2HZuoDQEtYtXD2rZframo9GTwqapFtHbmhxXDMJM6HjVqPTUwgm9F1ezf3sDgfCF8j8CP96wwi6KWc31Yb1EBU5R",
  "key3": "rgeXhRRxcSs6UTTRAw3XWJ49jVB5R42XmtpLeze3S28eTb8jCwZ1HBdhpniBeHBkVbF9P716bmBA2GKqnNbnA1A",
  "key4": "4ut7p3CMSGLQ566F7WNY1KsT3S2JnMu7P4JVEY3MuULgc3FLftmFY35ZoVyckVkDUH75AeUofUyVpVdYsGCv6NUU",
  "key5": "2qbidoN9yKr5t2uRwM85J6AB7sotCzgQ3e4SBQQPvF1HQbdik4vrAcPpHXrbYCbCehPchK4mGU24ybmShTbGuzP9",
  "key6": "4SjckxqBAKZoafFDhv8zyApL83M2vzctm85N5EAN3dCbtMDBKae424LsHT9UVjicuMoeajeYgnodKiz5GGP5Hmca",
  "key7": "5AyTLDZ5LVXQeQLkdtdZ3HzizSwYc2tdASDAqjfXC993bGws9SxJQfVjibrEWW54CeyDv6VrrdccJwnEWGxHXqYH",
  "key8": "5Ue5zUrgFYAzXfntqsRR9ruQJkZBjiHFrXcwqQH8SascPKjP9JR491Z4iVrGFApTaoxhGh9rxMyqaaPyUygFBfnC",
  "key9": "5CXsRgN7qHrVV1KafycEMRxYiErzsMor7zHYAftL19iLhyKHy3fW7GgVNvxBv9LkM5STEaJ6RZ2CQcaMFuw4zRZP",
  "key10": "47qHatsEZMdJHZrwGaUMNEpAb7yuH8QEckLuK7Ecbs85q1F7SfFKBBo77U5hCzreauUTHgq43sJ1E7ZejWMTaXZQ",
  "key11": "49FMpCpYfZ96jHvKEh5oQ67iwEStPt9yb7qVWwDPn8hdeH8M46kbYVtuE1m7tdztcoyiAL9KSVkzFbd4nWUJDqVB",
  "key12": "3HMiUSRHHMYA7xx4xGWSU5c6YRSfMwA3AdrGpo3Wryghe96Nyk36Q4S2QCvQA1peBDTJF2VRoztPYmMTVxZFR56v",
  "key13": "4rUzSfvjK63rqUQvMLGoSyHi8QyLJSqQbVpP8LsPTiVSJ1Mdv7vmJSAuVeLU9iU2ZB4SSbvPrb4w1cN1jExYwWC3",
  "key14": "4f9HyR5ReVgMUMai82QkwTBBpMFBLAn3SN9kzaHfURMrTaFNbbtNudGj7n1hheJTts8cJoWhGTdK5CoaLbAd3zFB",
  "key15": "3si7iWgWVj6DJh5MzyvW9DYt2tiEp5msXFnXoSab5khLw9GgvsYehfhSnWxNRnL7BWc6KRBpZPByJdc4S7ys16Lz",
  "key16": "5hStoJk2ato7KRJ9y6MJPKjLazWCvnF7pchs8aWPS8LCm2Et3frBfPKPBTkQFYFju7J9WWp1Yxn4CDnSKBn7nK8o",
  "key17": "9fAmycXMmLS8vzaiLzKyWsyyuwznY1SMqpiYZ6b6NtBPGh5G4nRf1ruvWptbJQiPXEJb1FMXjKWMh8YyQdJa9UN",
  "key18": "2Z1HVcB7Sgczf6yyoz2jWqKCeXDvqzcBLjgXD7G16CWGYD8MMMQGXrag7CqkirK7LXYhvBHqprPLdyYTk7c6oAkd",
  "key19": "3yQiQneht1VCtt68aAjeFVXcRZMniQmpvecyLVNF4zX11PfgA81dm6jfXQyy44UK2n1CtS83EnXMYWJ1F15f1i6c",
  "key20": "387r2WRTHPSEnUW7rB82quzSgn89eo2st7crtYTjjHDJFQZvu1xsU6eCYPt8qJgtNXsAw6zZ6bRE1WfgfEKwQWHn",
  "key21": "4CyeHtjiqD9nH4yc89rXKo24UHhXr6x8FNDuSKggrZUoG7xTMXTt1v3BtdvomxVN5Uy3AsKZ9Bw118R2EZngNr3Z",
  "key22": "4NKUoQpZhjbHuvT2RzXcXLRA5KowFpcbyiQupUHLqAHN6vQEzJ3dY733VjFE6yhzwoWo5YuThejHLZG84DVKpCAe",
  "key23": "39QVBFqc4hozbGCyFWdeLDpMEsxG9s3s4B35YYctwfb9x88XQHozK2gmPb2UoaeJ2rxeYvwgaghp5kDToZnUfavy",
  "key24": "5DEkRSTjpKMTooNoZD6wc7XwxucLMquUeGfsaWxAA49dEep5hUuSDnXkoY1DUDENVziM2CdP1sFpausPZBnwXdbP",
  "key25": "4sALwTU1ALYTSsTFJU5HbXaZNB7jJEzfTtPvCXwFSqVTdY7w9ucQQ2BJAKd4efUB2giYdx17AkksHZmiXXfbjhgM",
  "key26": "3yS9saPKLyjyBxcVphwEEdcenMXtZCeowuNnp4m46kkbyQy1jpfLBWgkcVdRVnp4gMbG3tjFyhoXT7WvgAeQpAja",
  "key27": "65PTgTVmYJeyK9r7JibKaCgB8exqbAiQMmj9i2dk7ah67FYxFe1JV7gzmU6TFHQEuELhCfyJr51w7tP7cj1XJLC1",
  "key28": "4YrBVJMmFBxKXsDRdWfWabgm12zts8p7NLxTRX2uxWzYtJCJme9RFAKBRAXFBFFRTE46Rwsix5UKr5Nnzy7PLd4z",
  "key29": "mYgesmwh82EGJjqyaGYoAXZPmKQiTAL56N2CWgrxfR2UJ9H6FbNqDF5omgEm9DoWViMprDcjZBKUfBtpudmTDfR",
  "key30": "91sHrk1hFbhMvHZeFB16gjX2qRP8xgnD82bVtGH9zDeD1MBXDSnrkiBNZMcdBK1x8YySumKoBCVJ3ZWv4x8Zunh",
  "key31": "2bFahx4eVF4vRXKataYG6g9jKuocdqdwLD5HwpRdK1uwDNSewE9iX4MtWQ1pN4tfX73JCT5CtasgyY8rb6YE8Y48",
  "key32": "3j8fTM5zJWZoY7kj7pucY8FKg6nEGkdQ5QwHFjYAwBYZiARJDKjf8B8PTqXeVBmwXAxF3V5tddYNFWiLBESgcVn1",
  "key33": "3ukpMUoQLqTz5QnHRCc3bELVpmj48fRV2uHVyAdsZMQLdbpfjaL4NQNjDYFAdjEA2H7RGmfM6dYLeL3TNwKJsH62",
  "key34": "2vsxzE1NJgKiYiuAnnA6S1retFKyZhAQTRCzyPkSaicCtYk7AqLzwqWseCAjxSj6Cvq6Q7Uby2twrSnyt7pLUiGK",
  "key35": "2eFssiPhThmqDqK752gT3j18NPu4esGu9Y7enShBkgUswGXbi4dds1MyvHZf9BY9ummC9cxvRYwT7ts5FzmcaRT5",
  "key36": "5BhreXAFbz5VfgBg6zARGpV8GmaNrNywKpK9XKyiinRwZZTWFPn4WeVsWH2VqhRd7TxuWEjPcmGUJ7ZBSGCsVPjR",
  "key37": "5QEsn57ZZb25CE5gV16mRp5LDa6V6ePpVri4nPcuSvFcqTMqmZ2gQ8CTRezcDvkWz82wGs1MDUDkr9zq3jKmWA9f",
  "key38": "5QvKnqBwdLt9qbkfYDHDRcpgabscjkCYby4inu8q1j8Pe95A4c9Q1vMf5gipQxogkDzsgJ24K1roDm3ZwDL2FCrY",
  "key39": "64tpSNAxeYZkZShfSg4CWwq4zvJqX4jFoMuh9JzMyRjcXQ8js9XkaYvsN5ywn8jtJQMjoRgiYmigL8ETDFe3f4UC",
  "key40": "Nkd1knSPpAbfCW25xG2Ls5RSumEyqpQBC4GL3vLx2aVKGn6ESDFMB7ABG27B5AZ15HQV5xUHk6hdjTfybg4WFBU",
  "key41": "62dACNHdspNiQD3ziP2jjFT18gN9qMji2M2gyVAxjWAuhnddF79LYR8cECreArtr29nM7GHHMVo2JupT1ZhuiDDd",
  "key42": "21C7bmurAyguVgfMo7bcqgpC3phjGGhvYzJaGRpRM3L6X8zmXgHDRrcgL74zR2apj7PkTZpvGNBCvpn6FcyzFzqe",
  "key43": "274wiqh6yv7sVAj5h5P73C4Nv7Fu5LAL9RLUdxqp3x9D9Ag5ewMJSkaWoa7MLm3WLz6ZitfTMC6m7PckCtpZJ8ju",
  "key44": "9MYmqGH3hk6sYQYDhRvVHP8PSjgAzubnp99P411PLcEY6UnGuexZwngdF89qcKZFjEcZ5Y19MQVJpdi7En8aVUg",
  "key45": "4NU4pbhNwhJ9gwGUwAZnPmWFoVWY41iYcyF3eTTKTVUhNSs6B4S4x6pNtsVUTrZUAN4fNgYFh75EAwU8GQKpuM1B",
  "key46": "2zZ1L2TJjBQEKcJBboLhJ36zxhapZuWteokoJsrGD6JtWahenwG9yC718c8SMYGXvu2FUQx8qSoQg7BTGUxboxLf"
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
