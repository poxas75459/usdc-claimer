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
    "4RNckyHrKLomk6mKPJhCRgQTkmMrYicvNEzbbsfRd8nyaEWD3M3GdBrXqMzpMbQqtiAAQ4zNLvtJiyqP7SEP3w38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sAPf2k7r7AhHLSEP7gh3b1oZtehL1HYDE86A3PdZndXSwP7fZKmgCzbfn6DERzy2FSJ1VJcWcTjneJZ7R44JXfy",
  "key1": "2UCHmwVc7HThkHfn2JexHAKZi13fpWvXYuY43BZqPWhe5UZZyC642MDY1Q8S9a4HnxJ1PhnniE2rnGJrfgtRvAEr",
  "key2": "jGDZFbyCAop4hoypJSwAYAruK99uinGmi6pR8Kq9zciDtUwPAbJAicXobtHcaQLkCnUBtZPcuYSohAprLYd9oV8",
  "key3": "4c4MJX9vXCYHFE7BK5U18ZXfCc3eddj7m7cVJ4qinFmwj5fvVx4GYoYWs7kRk5jqv99L1jUGjMvoQj658Zcm6q8k",
  "key4": "2rFZPqntoiD21oEicGfVZCGHutkajUq6GdAvqaz5n2QkQECRahoBW2YwLMpsfwm5EWDxHhqXaZ7Ei9ycqcJyyGXj",
  "key5": "BLrdxYNeLGx1mTSHLJfB9dLjKQWzGohrzeu4ZQFcVSPULi3CNrqaYPB6ABGZFY19d7NgHwZ4mnWwYwRQHV2ZVHw",
  "key6": "2KRVxdKy3RoZDKsZeJ1oBMFBLbBtiC91NYNnAxPDYkicQLmMui6thFpLU6pWQwoFwfnLeDXd6Jm9wMhWjsgS3rMe",
  "key7": "4zCamdbCXPno5wQMsFQEzSQKXHCrC4CdPrpCaLdz9b13bZiaPrGVXN33FBRBJTQfepRJg5DP9F8FkA7CDXBV79AP",
  "key8": "4UgK45c5aToSazLcjKmBxtkyj9eu29zpiFQF3GG7XQMTQDfhEhR9xccCkJzJ4BV2SeYW3Zz7sepWetmnGahYDjYK",
  "key9": "tfPiVia8zrFssLn2eUpUFEuUAWYSNDWYcc65XKiqTVHbAhbWLEqQJTDaAisN1cA1ox1ecWYmJDwsuPkTJVG4Jxy",
  "key10": "qRaPkENxMvcensQp374FcxQMGgUhUj5JGhf8u82c91djZPZ6fEE43nnbKShXCySkzAQCnv3KUQDbNeKTPddT9KN",
  "key11": "xUPkHVSF2CXUEPxFm5XhHDtMg8DdMYgAyy3V9xVog5Rz1gVF1PuwibmvPsiMr5uibgoowDEKcEBCnW76uaUy13b",
  "key12": "dKUUqkVCMGs7EfSh1h9rsu4qDhPohVRDQsv86bKdYQ5HtPnospaLKEXc377FE6LFHXySkWp9T7s2ZobSC4guk6T",
  "key13": "3jomAgtmvLGiX4VWmoUiGLRmcYJyafoSXTbTidqVN8nLrfV7mcf93ARr4wk7AtE8WnnKDA35dLoAxzK7Qs3oFLvC",
  "key14": "HxLYr17oYztHC2rpJezSEm1MvmGMvMmqixM7gsNJd1JfRMqYHLFqXV8WE98uPMsGXYPgpdBQyLgyZ8Cepf1cKdn",
  "key15": "5N1Mbwz6y4rtS2fku2vykC8kCxE6J2x4C8bRDmWrL6bSnZ3HKrd3MmvqdL2bjpUgMVVqQd1DhrHfEiFN3VFHWKZa",
  "key16": "5XUVTo3z7cnMDjSEWaiyoAo1rFzMsz8vedgqnWmAmwzYQL9T3tf35yVFznLWwbPUtyVVg4rw4FjUHNiDP8DXq6s9",
  "key17": "4kchQTtMEQowuYpDbcFndjYVzW9U8VsUZdihCwW3GZJr8RLrDA9Ls6DCRLzGtwzSD46db6DGetzb4cT3yD3hZ39C",
  "key18": "5FqMG41PYxC1y1tWAZr6K4xeJgw1WKP6kkqfB5vREFVgYEvVKJsdeeXCTfdsoM6gQN5iPYzgQLFqi9RS2Gf3rUsK",
  "key19": "3U83c3H3Fbb4hLMhtkXvxdpgRdyr2nPHAsnrHu9r4ZsSUMMJRC5L7UrbgFeafTuzbWQ42nMmdApiiWvuLnedN7tz",
  "key20": "5LT8czRQy2cnGFVX8WKF1hwkDa7aFDMTPN4UnxutBGp8iWxS4AjD5oDvx5uLV5R8wSfxLbrzTCNW7WhtVTzjVZzN",
  "key21": "2FRCF99EUf5Kc9vcnYofUx1LuDqxkQcXCKmafLQpX6vLjuwnji7bZUpwtpVLPy3zF1cQFv4wD1CJLbrLp34BSjGq",
  "key22": "39oxUjqV5AXMbvLRkGLP75361nP8MadUssiQgi2mB3At51fujS4iWntY9LuuugcKgc9savziGWp7AACQ8MRen6am",
  "key23": "2xR9EZaii99rhQCtQPVcXbuAXchxsfJbX2w1SSi1NKGsYPq1FdF4wKB1aeZYN4Ba6hzBepxJrkDWMzVSf1pfVxpV",
  "key24": "3R8KtLnshoKVN7oMxUy7Gih8cQez3ZQP3dnv85LJpctTQEvgjM24D619ZamwuJgaVAXKU5j4euEuipdToH9pZSpj",
  "key25": "4YiDaiP9TueNJVhzv1mDtswRRgN2skzAZHR2LmaEF9umhFESzGH9Kep9DDWUQoEsR48tHrqTWHdxwH2kYyWPuCus",
  "key26": "3kCN3FXczRcdxpameCT2xNQak8kXz3AWhSrR5ut5PEEHaaGqb1r5dckEVNwfU4d1GS86yU7zrdbAjtvbrBqH2A2M",
  "key27": "gWkke9F5wSSeujw7q2wLayVtA3upS9RyU65YatoVuvLoXtAWoBtxgFqhf9d8ohNtGaRAUZUuYCTKwrtfa4EL48Q",
  "key28": "4SLXdFTY2HN7SBNWQDBFsEBdKjp9beRvgCsEstEbZNfh1UsYUxB4724Svt1BP1AVqXfL54vXJAouSqvJyTEBDngs",
  "key29": "4To2PExSfr3kC5364nq4Usm1YuNQhoE1uScLWDn1afWKNDrttvAoWFWWDrnX7fFKXTXCp8ac2vx5pR5uvMWRYLkZ",
  "key30": "62t3PuaTtz6G92AT21DHK4J5Z6w1LKcEsvPr4QYVWSZg9eRQTjrMp2mouqbdA5aCk1XgGYtcNp2CRLqAs6xV3zge",
  "key31": "5cnmY1zjUQyTBtGEj2kRbTRb8sVXsQ8NpBUoNqY4dz1JNxbd5RRbaQFdPi5uePDWhcvfbwR5E1FMqLt5RgRpXPTb",
  "key32": "NqfqJ2XztZuvAeLGhaWcoLU1TH5XSHtkrkMvb3UG3WpzCnmPmav3u5pejBj4DYoD2ETJRH7ygpx9NDmddrT2whs",
  "key33": "rXfScZQcCbbyUkbiHxVQP14jw3MGw5FJRqbwmFa1zYPiPAX7jKriqDz9pX8ra8atp1Y9E6ATHUm2gDpmrR2mhp6",
  "key34": "5RZi7VUePorgChXrKbAJL6wkLqdNJLEYHNpKjwRWFBMhJw6kVXwhzqUdYea4YPWjeeDpsDegfr1ZniKf9176cmqn",
  "key35": "5Amjy9cDf823s82VcUiNCm9GpvajSNJL1GM2F8UsBQDNYwsMVrcCG9yNuy4H6j8Y2FhnurufgK3JtWXjPeRL44DH",
  "key36": "66DTNCegsQQ8mAEF5zCzCJvj9zoTF3WQgjKg421XnYTrvPFgZq3n5gC27gNquWBZgkhbgizvgfSyThLpxKuGKYXp",
  "key37": "39NhmXM1h25TTD6cUi4ZBi55RCWbjhWCeCbnuoX9trkaz8dFQPPWeA4iTWcwDt54kF7mmTnmyJwF4H7T677xwmSc",
  "key38": "29oWYa5pf3w1Fm9vmhNP4zDxiVm3L2noDm9yRE5uLAjj3hFiLFvWCAnKWbjy5ttFARqVhSUWexLddUe58PUWqdgX",
  "key39": "5vbmwr1exHZXpuRCb8pfMiv5W1t94Ps6YfFrNHKixvKjHsEH3eGrWkx5QTrhG9CyJ3XQfSddS7Yg1qzYZVqdGort",
  "key40": "41c7Hqvmv2ka7RBK3LMV7LvGCTqvwTJ6w2QKKkJ1HRDhMwuGQXWzHth9ojDfnE7dX6bMDkQktgpbpSynt23SdZqa",
  "key41": "LB34tsJhuHUHGomAYGQZfkPhbLcDEo8VNQpr3CJrJKgqy3CAHw4Nr97eA4QRbtHFL9thkN5XHhDDHscc3MG1fFW",
  "key42": "557iC34dXQSdy55yG7H3PtozKbHXWqtk43pE9o7pktY7G5mqFdU8nwE2tDTjUFW9bPSdexLThP7PVsrZUBvehTrm",
  "key43": "4degNxhWchmfa4g9Tmw4KpiAYsKZ4iwiSm63sauNTZeRViSgWdhaskzmbDEtL1kUndN9ZrzPqFadnfm9KkKKs6Mn",
  "key44": "2xBKDSXBVay15BYPxZrbj4wNByK4tNdxa7MrqrSpNUcvEcaBeW6CqKZXMREE3vkLrs5ijk9qjK356TvYQ6zaePm8",
  "key45": "33v3H2SMLoaSG49hRg4xwSazDTzQzFhb1wLKGcGwBHBK4e9zehh8NJavXbHTY3ZVona7sUa2SZzSCza219sLP7Xo"
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
