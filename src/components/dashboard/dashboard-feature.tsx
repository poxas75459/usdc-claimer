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
    "3sFfQ6VevpC8P9TfBR2ZgxLSJe3DSHcrJtX6tPpggNTXwouHeBPmAe6zLs4fqsHRQ6Erbx1nADo1N3BznktYsZEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39qUY4vUyiTnEpTikF53e8wY2cy3DN7mvf8hnjGkYy9uJDD3B4RbLrv7t7JSvDb7FebHxQq1uNwSHJyEZxTrm6w4",
  "key1": "3GyGFjqKMWBL14wNwWKb8XuyhVV2utgLG7DXdscUX3Rg8MeeV2WNS17chJKK1LAwugQibFZZFoRbV7HoCjeAsek2",
  "key2": "hqQXEUv4j7rtF7kMzWoLqUseUbxQpH5f5mLnobvcmsFY3xxh2YeGxQ3YLF1eyhifVaFZZAPTMdJ5qrostnVyBfz",
  "key3": "2gFp3S8Zbiz8RZFnEsDVVF28oceC9Q2GF2edjAJEGmVvfqUJtBjzVpqfFqAF4YdMADosTKWE7Ld1LQgp2AXRHZNG",
  "key4": "4hAPgL6RoJrHvEiAmGFjCmcX5Nj4U99tPcH3BhUJWzVyXbTarD5neo9dG9JQqJDwr6j4ZsRHqZNtAS4Jnoo4QLJt",
  "key5": "4z8LzyiBoB9qsVfgEvTDHeZKL88ezqjM5h44V56Zsr4WBpPpoTG9WJzj3XeMX9suJtpaykQ1AXAu5V51D57kePKG",
  "key6": "2uHGAhCCVkk5bFPc61QDvwavHbwWL1gPoi1c7UX1VTMrjuix4HzfuxaPJHsUojSe7CMeF8rdfXC19HAMpcJAUMYC",
  "key7": "5oV7TTaiNNo69eM96swWUQL9ghM69Cr7MrGWAZhjiFjSd8m7KP5hN57M4aLPT5UDJcnGgokbHyCs4LjV4wGP3164",
  "key8": "2465ucJyNhfQC63qEEsqcDtXgH5dqRNsCDnftkYeMnnprPMQBC78XVnym4KnzteQ5Wt3VtR2yGdFbj8zkFaFrZaA",
  "key9": "2NQCC2KFLJvDoUJ9Jtcs6kg6X5gRiMTwK6CgS3tSLUfVmPbxSS3yR5Jj5ZwKQB3L1TXrZcrAqxrU5VmZ3qFUjfPF",
  "key10": "58F5VBH9B7QKDwQY1AbeofuSVmcGf3bDqcYthp2Kwnky4QBPf5wmAXCF2t9umhDSLLVAjWnUfF31zkBw6A8dCdAv",
  "key11": "52PtcGwEQyHXRwFASF7swhxaemxjCTDCK6AbbGj5A6kqjmF75qqfRxmh2UaEPyhLKLNiR4EwW8nA41KkurQryuLy",
  "key12": "4LsXUr6SN9aPBJscNLgh2Aen2LWo7CzCpjJc6NPf5cjxBsvzvgkPG5hz31dXfT5YCcLyRQJ4jFfsADadVvWhRVD7",
  "key13": "2rHwbUyT2SETBWEkbF9Meytpqs7FNYg1cZ4gXjLy1KzsHzQMywAvicbrj16jX9eAcvu71fsFMCadskegp3E5xEns",
  "key14": "352DaU95V9cdSZmJCosexD5Te4oRDWGmK42ifydEjK4HFJvHZzCc8yesiSLK4B14xTrGdLKciotT1kYZdeuU2H54",
  "key15": "4uFmFrCkqxJtjzu6BEybFacKEyeBphYskd5tYHhq8dc7yuQ18j7LM4A3sDhid1r6DdQTRWFUBKo5Ae5p96NcFDEr",
  "key16": "eoJJwN2uThQtQ4S1ESexANrsS1mgxNk66rtieyDcdmc5APzhdJESTPUtTj4aAdwrjuFGMR4xE6RFgCFbmdjJi8K",
  "key17": "5aNnEM2Ab9iNZSowRJxEFMsyBj2PabHc2NvmwSQgXUw9pZkxugHDZXoULWQpx5yaDpnez4wHS87xNDo8tJqXm8rv",
  "key18": "23bz3xx1cVuicbywc2jMXRqWxxstHtCqsseV2yr1SPN6NRQGMVPFX6WuZ3N5Yk4PvUcMJdMZfZpKKKekyYCGUhgY",
  "key19": "3rx6YxQCBtcKt3CJ5FbQktkXMewUP56G7DZNK7FqbG3qtJhuev1BLQBanrDHcdriwPR5GYR2uHVohb5UqoRvL7HK",
  "key20": "2GYXYuhCfAq99L2A9uP5VovEqkMtwY6Ym6a1gwUySYMm4ZY1qMJzfPm3oD5pSdYyBZJzf1jBvA7y2kNFq29K66TF",
  "key21": "66j3xkF8MvSvsPVbR6KTVHHgvgbMyUYqnGBNjXjCH1M2dohNoykmQLo2GaQVatbeqDWywgmyjFikzgi4P5iF8WSL",
  "key22": "2SWAjnYppPz6iTLgbycNEzeyjZDPShuxcyMV3BndoKFjXts4xRi9D3oDQeaGPBKfKf5MCao8kUhFwUkifL78RYfo",
  "key23": "2Wr4rzvEVY7cPg9RjbFWCa24pcqtnRokMXgTGSgetSF2xXpjmT4CfPxivytfQGB66c9jkTvb2ZyxiEiujJ8WT9AL",
  "key24": "3Fs4pLo1fhC72Fy5sZbc4DcieicoVYLzD5h55NsdPWBtobHPVkLXooGsVfyVC49Zpixf8CwygK7NTeQtLeEhep1h",
  "key25": "NWYcwaGtHJPsKpxsMnh2jyn1E5WhLioLumt4dthQCG5U8uN4cNnxuScJQ5YSb4EnTuvvaXfAQxtYhvYcZDUH14Z",
  "key26": "3tPdcN44EwdmG8BKirZhw5JXDP86aCmFqpttzm9hRTGzFLZmFPpiM3vr4s5peX6JLgvZse9d2uNZD7hRs8FJ2MWA",
  "key27": "2VYuWnBWfBtoRTakNhHJzKibGd7hSuBszuMDCtJj3xepchDGvNosezPkkwYeG2QmHmdFeABjBeYFuGwPq9pK6Ep8",
  "key28": "3RCCaUQT93n6ziD8cX9dKZUAKpPaBmFKntfk9TjTPKsuzv9ganZDbmxMuWVuXxgpPeKAaCzgWhdNNHHmjLvjKmK4",
  "key29": "5Tbro7RMGkkr7wnSnpX6D1A61hYuBiRvjUdiLYQcP7WQbUDcwuNYi84bArqrjSHJ8P24mYvK7QECxuTKXoFk1D53",
  "key30": "4AU9bqrkMhhg6NmQYScqX9gxHbBM31d8X3eUEd3FT3aygnLNKyeSLGHh11tmBrYfYFdeFtCwF9GTHjGrYskPwVy3",
  "key31": "3SnUUe1e5CHVn2bRa6ck6sVgdxtiwxK7k7nVBEVSF32w8j3rN8utEwYTyh9QJZMQDqNt3KXzPsj1MBJygyU8HE24",
  "key32": "52rD9EJFCw6XHTzPwvo5LBWzgfq7f2MSwwJd8c7LNL7mysuYtxDCFLjnfSeMUzwcR3gXpdAUvVo8UFhCp9A7aHzB",
  "key33": "3V9h1daodHwYR9WhFpFXqPJEmUZ3UcEmq8rJ5ETGmLRLm5hd5EbjiquP1phriZCUE8DFZyshackzYGwtmsMUWRjD",
  "key34": "5G519kg74dGu48obv3MzvqdwcYeBMihNdtJNdUkFannCtsLarkMrQ9WCneCxZNnHbVnuxbADdiWfV37ZoGCNHsxk",
  "key35": "3yLZhhKFLuGoTEBvUjWkNH9hU4FuUxo7nBNSfhPaASJbgn291Hq1F2Kn4gRKUZ91cMXVaSeZ3fLmsvf7ctiyQfmE",
  "key36": "4qQsTG3hQbWaRDZott9sU3evpfVajpCt2mv5yY293wdb7nM9jJ3UTYCpjNhboU3EfW7bscETRqcLToEmTm7Gjxkg",
  "key37": "573p8VWNnUGApciMGTbVg6x5qXk3HBjV5VPWEf1k2uASqEmPdKXxzYPyNMuQMqUgW4YRGfKGCcGYyy44FfQAW5Yz",
  "key38": "5VS2mbwFESSZsCT3fZgWXvysgYog1phFHfDmjXEDkw54ZkZ8HVzzwVF515Dmc9sbsy7N5hvNWHMVPUGch8k4q5pW",
  "key39": "2zvSmw9eD6fRyiYVaWySDPy17a7QgUwUq7JMJUTLz3hpqbYDSMhpAoUyUS2tuns9cb5pBhnDgf2xfoumnuAKFWBW",
  "key40": "5L834auGWTQVg7RapAMJcSSCyLnAxcnX3YEk8XwTxHGwYi6Yw9HhsF3E9ZRVTMTU4n1M1MyvGepgtkoQy4DXygGz",
  "key41": "4nmwYgo5XYoMrnRUoGGEbF9LUmMs67YXD2vjwhpucMWJMdryBhgfqguApbXkirehxkNTJfxwTmFvSNyFJFwCWaMr",
  "key42": "59jMaRb7pK5HpCUzd3V43ggn9HHRnVnqT8A8eTnKL8hfLPHFzPJ9sUuUFZjKjQHJALcTXay3VNykMXmhpi5Y1238",
  "key43": "5tBaX7YELXWXiZVdXiiamPkKH7J1SkbxVkYDiiFbkfZkLWWJRNCRs69D3NcrrWZecjpDgg2UP4QBagFgWe9c8ZYd",
  "key44": "3RJP8QHNoUQHCthKk1ZQy8PkRUEth86M6GQZSe6x5zBKESjj7Ubn4gZChtdaD4CQmPJBRCmhQmY5Jq1dRFK9f8qg",
  "key45": "5zbFRKsMTqcv6JdEdDLQbajbYAVn6bWvkZH6dC9CJ3pa5T2gHphXFwQRkbnJxEfjjhhKChwmVhGsJNLY2KAuRffr"
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
