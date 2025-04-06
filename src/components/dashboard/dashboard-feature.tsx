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
    "2E8qnwZPKBakHo4bpdEfLZ67cTbLFXS6DyXXNx49M3NkzznPxFzCPGUgDxVXEAdxkuwg41rcLR4JDr75YnqPxF5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jLFCrrGxYk6fbN4j3XsV83DR6bpTYzmAXxvcRnupitZgTJXX1M9fDAn1GiCEbzmdQksTWFvi5q5WAuFQpbhbC14",
  "key1": "54xnMqWSsVgcTz8SXPVteQeJfvUAV98T9Qc6CWQ9GoJPyRd4xTNeYS5GmFVD3shU1ugeWn1yPhiG84boFVGw3J1T",
  "key2": "37CLGg6Z6NEhuXyd8yhFhEgLMYXVjBRX9ve7FxTGo2CxicadXqeoMXXBxU56tnKdctGfAoDpwZa8Z87Bk4RvyhZ8",
  "key3": "9AKjj59VBnsTtV15uiXv48JRK9ExpW19b7LiZ8q8hedGcLDaPiWoZjGDJQYhbfgkPvLFLQXj9LhRB6rdkCFGKLE",
  "key4": "GWCdjg3VU8kXpuFiFqpUQTa2LHdsVvphjGF8yALt6qcbdKaRyBfikxdG6qXSawx1BSc2bUB59Ei6GeQqSvdrv5u",
  "key5": "hqiDESWY3BGCjcFyNcg2ZTcCrUgyfdoXuXnMJJK9fEFZo8aoCy6yTr64EPc6xqSHzY7StnFvoxC91WiTSpwWYJC",
  "key6": "2xUVEPND6gEAoWNK7XAkgshiVu97zUkGNdDRDPDsxGESHe2eAnwsxYU4wSoGws75UkYRttrKsnyQDfinuVMpz2uy",
  "key7": "5Vir9MJc4WJYj2TFFUkVgia4VapeXWrRywTPndWkmaEUfdM79yS8S3NXordpAe4CmaeoXJd96zJGedAJZ4mPZati",
  "key8": "2UVxa3sLBTnBsibaSgfcaQGcmZZG5aXmej2cZXKTd2PLnByyJ5jfLeFqbf24Ryok86To3V5YAhvV4F2RBYoenrYF",
  "key9": "4R5iZwgAZ3GdxDdoPsUdttP3ieF3hHFVdfzBKhQbj3b3HMwGSpGJdUYA1LHtMzkFLq9Gep5oQxdWUN2V4riMj8TL",
  "key10": "4iE6Pmoq6Xu4J1SnmdjCcUFMv4d6MAsYZKtBQY1PnQa3r1zurNjLj98jZdvqxXmzRbN5qbfoeJNybhXs4KTTkY39",
  "key11": "45TUpQfBJQJUaahNAuUnUubHFxSqVrXpZxm4EU1BKZiTciSRGmpZfa3ZZmWbnsvu9wgzTJwas2RP9fD6FpsX9LnK",
  "key12": "kvFhQdoPxX3qvn2jv3mUKRP6mQCu9nrhWKqNWdhTwA3hjU6396TqD7dTREZQ6VjjsxWrmdwByrMMp9uERReQWhy",
  "key13": "5CTvMtwfcBEYFrWb34KoRJmzWcd3iWuC1p2nqnY4xCfDu5i4gBScjg194Mu8iLf1ZbK1nzE2nRAM51XNbyDBGcib",
  "key14": "4oQdUqtq4z8qRmK8dp5HRkLnJj3aEba9AxMZzBJMmsTJfHZLi2mTmuwQ2Ajh9BLcupaAxV2CuWnyoz6Rh7knjygk",
  "key15": "5Kk3AKidreYMmjFtdR4XNSaDvhMsy15UrNqHDjbopZES6M2rp5HxmEZqLS5sXd8PACSq5mcmUDcna4WD7sU5aw8y",
  "key16": "5sefZyvovToswp5PvASJjTJpJm1FNYKaPU2kZe4io7yHZCbMr628vKwj3VCUj3eVef9mAgcbLBBXRRChdLpqfiYs",
  "key17": "62TiNSaFz4rWuFYyDSse4zabha8nMBeL4Ryi58Sys8zMDFk9DdBXYaFTPrB6vDhL3yXJmGQLrGfvqhNdMkrj9Zjm",
  "key18": "354jx8M9HtrNDPhFzLZa4quvurzesqtp9Bq1urzxU1DXMpivWgC2SkqPpPyowQP51ySzwZt7ntY6oUJcgFsHuyj1",
  "key19": "3BAVX5xbiQ1UsAQxNNMbB66WwRTqg1hmP71kxTZt9MQk4Bpj3sJp6iwv6YQhr4BvzZLNJG8hVsvsHZ9ty4pz5f4n",
  "key20": "5g7UbWPHASR9uMZEnFVEHxEyhewhLtLZg7HnCWGFajjXuuP3Ci9zcbW3HE4WJ2ygTGsap3QjHsTuqAT1YA6aKRun",
  "key21": "3PStUthAvaRMyiLRcehGcfGBvUDcpMguS1kERB7kkDbw7BmvWDEthsXsfqW7euFvqzTNUzfzfkz9knXBabdY4Dyw",
  "key22": "3yZ22R4YDKdoREV1Ezy9FK5NGayDdbssr1bdz8djh8UFSBA9e6XCTdTm13K4b5KyepR9FcigafoU3sg5AsLsFdKz",
  "key23": "2xqL8s721EjRYJGLbq8pWoXG33uHqhMLapSoMGKdx1bfE5V7BuG1sphjFXkR7vNaZdQbQwW7RaDoBbneSSVDsmgY",
  "key24": "3GtoGcTQ4yMEMf2jZgYovkywpVmhSPN51FRi4sK7CMXYsQYeuga9MkFReRPvLiBCGLvhKwd9oJ9acdigKkZjwAhE",
  "key25": "48yMY7AcjRYX5zyAF6X3GFXSMECNet6sZNyh6jQaSxGNvNM8VcvzVnxk7XNktL97KKZzJfAEzvFsyqDcQT1g35B5",
  "key26": "2mKNELwQCzSDhVREv3sAAkLU5Ro21ZzrPFrXxV5HQRRTisM7MNQez6weU2snziUVq1GPEyEWCMnVzvqpaT1hnRHw",
  "key27": "3AzmbAPtdczdFqDoQ5RykMM64iaSzzFwDADRdxBx7VMZ92bb7Gozy5A5qypKaYYMEdHUVbaemim8CX6kC4d1UuBh",
  "key28": "4QgCvds4HTXGeTgnMCaDwvwFPwaek2jy26pXvjF6zguKcYFkwC2Z9JcNFcmsP17v48BYVHCJa1rXNiLUuMjge5UJ",
  "key29": "4SPrg7dePMcUQcEKsyqW1GG9vuGTD6EsJ3ZLTR4jcD7JwqYKoq32PEuikeaTmQWV7cCUageEryLypm2BTp88eHUc",
  "key30": "2AbQDpnb9udH5MvyxxiX9i7hz6qBmpiAgzNqAqpM8z8BQqzuxWw9FvbN8KTdzS7995DHLvWXBZ3buqPDURf8xDaV",
  "key31": "3fdFQSZ3wSNVxgUoxcGUqVb2PmovuCHfjH6xaLB4dfmKT2pd8swmy2f1PuvLQgUCsM5Kf6AFM2xb8frhD4DKUnQP",
  "key32": "uabE6WnfDpzoD8wKRw8uFHHnsCA9WxPMqe6taKDV95XHmLFhw9GqLDxCpBdBM3AzQNrRtH1RA4tog21yDMinAK9",
  "key33": "2qMeTFPMgjtDexQgL7yNw1dX6Jv2PF8224cM6dufxCuBQw7KFxJkQziQx8LrB6oHfJ8EsdMRQjwkMxUVapX5zv37",
  "key34": "5H4PTPEofne3pR1tZu3mMUvh5ngnVW8HrhoG34aTAyJKr9rnTeK49LJxauNpXcFrM7B6VwCyEv2hMPNnSVQvyyeA",
  "key35": "2uCNUcrCmETQbgZu4eRuENnaaxUoo2nPhfytCGYJAKyB5RaMYpzoLcSw3Q2TYoxJCHvynv5p2UUZeVyVt56GF8vH",
  "key36": "2Q2sAGvGBYKbAaCWTxv4USNfnXonR1rwLJ67T7BmPjp2Hkzr4BkkLET2WejGCGb9Qcwtzt4KBgVngkPQXEuXCfDK",
  "key37": "4tX9Ssmo8RWW8g7jBDF2j6PhbBt6m94gnmby1CHdspaEprqgDD3LQaJMQEv1SM3t9GKdtAAfLPJrwf8DPSt5v2Xh",
  "key38": "F1viXNRn2Hskmf98NM5qysTjWwGLCpTt9dMfGVQVXNRWu6DsKSnhHkjTqS9Nrvi164SMLLCj9PL6AeZKkzn7izd",
  "key39": "4dryjuddSgo7rSy7N2yQbrMN4Xv5HaF3oExx9mDBgPqY91WNbuNZmmYWqQdihELy8UJe25CHzgcTVr4e233VYheX"
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
