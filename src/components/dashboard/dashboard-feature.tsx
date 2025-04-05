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
    "5fiduuhRn8QxZVfBGcfy2hQbggJPgbSPzTVHt98ZyEqngMNGMcQ7n3E1K8K6A5dFWmqrJXiAsn4RCFmxnDz6yXCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LpUokGR3fLBpfMyR2Ag8K9PD9zpMq138Dp9C42CGczvwRWsDQP342RmYFDpTac3v3bzAMmTJEV8uVQzv3uiTBuT",
  "key1": "3wwymiXLQ8tbDKznApEFNcT7aEwfkdEUNw2TRfqeypb31ZtGH1KRjhuWAWj1PEFPxb9eDvsqs6Uhw7iAdk8mz9P4",
  "key2": "3j9pqK1pCR6mt9Af1V597SU3aGsefvqvLw21FnmAzH4722jrpQDYozmyEmDqKopjZNszHPxN1CU5ZzPdjTDP5yrt",
  "key3": "2SSFLqq5tueQ1eNchjEiJTg8XyqrNhdWM6g71Th7RuX3kJ3NN2XaWVrwaewCJpQPBcQAywAsz5vYoiC6HoLscYBz",
  "key4": "3VQbnttUDme2zKtAcPyp6RbExh7MZWGVGqTb7xZnWBQHzGtTy6W6gitx4QEBDWvRoyrfsaNeTE9Wjbdq8scaSpT4",
  "key5": "C4mNdHiKv3Z2k681hZPLSsKtjjqHrqQ3yoNWr8LejbSweSDtSgisgHmoGxcBVVnqNfcfr95YJoyEagY62SzyMPb",
  "key6": "1yjvfKZSgwa8eAqBvHR9CUtU9T89c86gEzr8W9eb5ViJvamiFtFmWB39nmtnLSSvMb38FR9d44dzu2FPwv52gM8",
  "key7": "4n33evH74ZvsHasLe8wzbJwgxCGqGFUkXfPB3bX49Lgf8ApRKxbm7rxJVZa7d7nBTTrkbqmor3QF3ZJqMsLat7kV",
  "key8": "4m3adkMzUEp1mMxsCMBNLrM5jKoYSmdwKrmyJJ113z32iE5gqDn5hNsiJRRpfuBRchmj88j1gqT94eX3fb2MHUNP",
  "key9": "4XbXknnER9xunh4aajCC3nBRAoh5gjjoSrWDf14UibpJStjsRyKmtzfLDobWtNt2QEDrfwbKeRfA8fdRNQFnUo6X",
  "key10": "2r5y7t381LQY6nH7BQ2HyBwpWzdgnNdGUXirg78GHiuJLZ4wSvai8abAcyLGgjsYVeH3SzsXjtGSHs29vPc8ymae",
  "key11": "2QUdc7RcNMF8n1jRB9KUZdRRwtTM5a3nyWZWJbJ2JuwK9zyCuBqZ2dXNeRrdhS2AvkkNfbZM99XEKdSfRqvPec6N",
  "key12": "5eM3p9ezHmkzbANCP9aoxN4pVAxfMAvWAp76ZgAxiq49dFro9tutkRWBcfcCrHMwSGAuQsacqVv7s1RvG32upJV3",
  "key13": "3zS6H1kLLfzCM1iytTp18oqBMqfYwVcw8t6y5X63sVm8SNWKCZntk59Fvfm9JWfm23otSRUTxwCMcwNFexz8DieU",
  "key14": "5ZsMFTWYixqrXvR1u72NDffd9pfj6HyvJMvoinf8bmySTmRrS82cU8uJgQm8eYKptwgwX3gSwFsmupVtLvZYPcCA",
  "key15": "p5XwoSdgf54HjNDxsRFLRZZEKgSHd3jjtB9UcDQZbPjkXxBhnUSHGNaeYaWp7CdBpbDe6G5wTsnXQPvKX9ZNSum",
  "key16": "4xKp4Uc9fpvkH2Z5o9TzuNEoLB9KTbXSzehvAvCAFU3pHbrfaypLZ9DQ7Y9MLQxj8yXy1YYakyzq4Xx9baziWa8H",
  "key17": "4QKgoV1wVZGdsMaJ2H5sovQ31uvro3VLPWHmXMpU9rcyqD4PDM8GgEFUY3r1cybKiGANBHjeVvquY1tjZafGxVHE",
  "key18": "5Aouyva3RJLsTvz4XtucPvHzDcwNtTgLBZimxbL8ErencopNd2UqCjbhwBrMa7aKGpssAdTYrKAFxafUJwBZqY2G",
  "key19": "2x7LfvfxWp2MMsUmB5qofKBzYQA7NFztTQsqCmZNLHTPJtuMeF2ZUiF5372gNXc2k47BASfzEuVzHVRhzMDRFC4M",
  "key20": "3wSHjiJzm3GMv4YA3PhsVPiBoTAi7mRC2vBZoxDTLDWLrmNdjjib1khU2ox5ZX436ryTg8NJ7yAFBRtjnwqbYMUN",
  "key21": "4Bmek4MY83VHdTVRYhzeYXt4yXZyfEDEA1XCHyEUzWuwYEMfoyyK37q6HCaVCEA4mqYLhVd7NpgoVUk4wR7314Bq",
  "key22": "27BSPnPD3KeZP4Zw74jwJbYLKgEqFaLZWMiw2vaPqnQ8w8W6ax9B2uyC1WLy5RKA8yggrTJQUqZB3zjckFLLgs8Y",
  "key23": "314BLoEUbmuAbR8NMNitR9QKVNPQzrgm1oiH6XsbhetGQFeXzfuuSQX7rrtgFRNDLc4c7cQJRGRGNpmdw6zZ4ca7",
  "key24": "3oUvv9v6fTLPTbydtGvukLXGnYHvrKbaGK6jmW1KRVw6Ce1ex3bFCEfRYKxFPLq98r6rRRDrvkoEpV2iMBiVuuqd",
  "key25": "4fFQEAfGbBwLnXUjounkBfwysRwJQd2hrbrLRzojd4Tq3nZZa26v41ZEX3tmNR1wqzDhqFDJsr3XuCuMXWkbwBYt",
  "key26": "3YUbzvvj3nJaneqXKP4VpWze1BUmPcgJoPzyXdqns4SfAkzGVWzq7qf6Lkm5naTgKZytT86cnCk4jxF6vEH93XJp",
  "key27": "55oZTiXE8HHUfjHdzwAjzj78TrbQm6gRWZq62sdM7tLxkZhqEhUPwTNSbjkW1m6TaL9v2GWSYaJtqssjeW71hixJ",
  "key28": "Kj4LQ77ZhHpUWLsgSc6iVGcBdb2zbT614PH77Bg9W3izM92EM2BcK9FDUbmXnnaAzMbt3rSpCA6JtjatUqfKodz",
  "key29": "5irqqhjbhuVSGEd8ujeCnqbXmgUre8hhMWRXJDRzh2JU3myhwaznL1eY7KNREeFyPUH3SmNzucWb4te7QRXaQLjd",
  "key30": "MnEr726wGmyqhBtVh9CmGuzetvYwXxH12a6Fdn7Y8s5F2BxX2bGvHTu5tbB1f7xRkUg3DTnCMSCvPdTScxka6St",
  "key31": "RWU7krrPyFTFeowRiLw4yLDz5KgUGEkgCz263vKT8hhjqRQ5dEMmqMhzGV761R1wdYtxhxz3urWSooV1iZA32xr",
  "key32": "5nHMfSXZbyN5W7qBsQtHyMDYMXgpDWgSGyghPBMbxGSTJAPEaA7XnXyLBePXzwkGr862T7se3gi28nxHRv8Cdv7c",
  "key33": "3NJCRLLcxwoWbbQ5oifqtzAhE4VMauHrdMeJd6aVBPHnTjVDixXt84ZvFmgB7VkD7wMS4rUgwE922UqoaSZ2TZr3",
  "key34": "2GF3nrKX7jJF9KDfNsVNfReJBub2JzyX6xjn2LSRvt4ZqAQkBfrTUtvJVcGwjWgbMN45waR2DgB3Sa6oxKF6ooG",
  "key35": "3bwx5wqhrd7Hm9uSnvezao1UzavEmHrY8xDtQiB1xWtTZzv3pD267LsGqgKvmxMhsJSgqSY97jo5HF3cNZcpmXVx",
  "key36": "2rgbtojfb3J2aXRo57pzaRet9Sqm3Tc5irJr1ReeweiZ1NCZXsjdx7CtnbGfUet75Wi1f5y9ZQ64K6wq9AWsEBnv",
  "key37": "2tJdjTe8YFkxXZgYVj5CMtZ457rffMKtqE4dGpuetsnCNU4UAjwWAPhuHHKzPMW7MDx8RoRsL9bcUNmE7c1PY2Ze",
  "key38": "RsG3Gwvx8zvFQqYSERz69NjVNibBsR5UgouKuipUCzKA3miqd38BSqxXbLr8ZbfTbtP44ip5Fz2wSFgyywQpmTd",
  "key39": "fesrf9mWmtGLo5Q8hVxcTDB7saEHx5DFUyXU82RT2z1GVZBdydtKeqkdxUiYV4xAKa2LyD6f1KzmiY9FZv6GowE",
  "key40": "8YDvtLJDErbnTRVTwQ3ynTfct2C5fm3Jdj1FMRzBMmeHcPhQqAJpPBHASxiDKRy28gJ6MzEYk8Ka9cFUuhZ3hEW",
  "key41": "3LoBvPbLuFuM6WwaEZshM1B5TftmxNwCpc2Y6ZfoyEGiDBcedmMzAzUuKEsBGCyrVpYweAeApvTMfYciDN61jNTS",
  "key42": "4TqKVjfYVmRuGaVR2uiEFdFKumSSDymGUWhPKtZzsK19EBr2PfeTgBnQ67iqMpESxDTg5j3fxuJdMq7M2xBxu3KA"
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
