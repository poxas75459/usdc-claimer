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
    "5jdv35Gw2kHCYtZEJwqgZSYyecsg7cRL2JvM561iNuArJe4WXzGws4kgCHwZHasxHADingZow1W9BKWiK68K88oz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FMykRUkCRDrZt5u2Sx4jQCGzpqwEno4jvSs8UQNnWe4m3ZK4pfhnEQEkY1hL5BhAmojaptFNVFJ9x7DAUFBwgda",
  "key1": "najA1ZGGxTMe4cnsGn8z42RegY9jfJLCFYDbja3YvEEphGvQCfmgfYoTKX6LxErfK1v8HwkkCv8MtbDXJq3Jdx5",
  "key2": "2dD5Z9o4esBrtReQStrq2XPouoeRPYj3MXiZiNU7xaLb8XJNQ3t24ZjjK73F1p5fTS8PT7Kn4SrX81DCwqF5ghoa",
  "key3": "2ofTDhK72QNw7upWqDXYgmnxdZ9vaaZivPT2jB1PVjuagwJT5VPfZA1dPDsCWSRaM22QeCKKhYGpYawvjM4wfhtT",
  "key4": "38CArBgG3DNjbk9X5xETLqjNenNsyFc5eZ28tS9fYbgkg9Stsf3Fceme3ZBXNopYHWrWBm12js5U6fcLvxp4vRFb",
  "key5": "38mQJRM421ZCwmcjdp3P6ofbjfzMoU9Cdd3CR7P7nfzV1pM74WW9LEib1FZiECwDvAx4hK5bMfEiQg6nfzBty4yb",
  "key6": "3FYkeG7Ba2qaqNwEoWFJuFK5oQMXENjvhfoAgDf7D6Ch41wwXLmY3jzXq2mLe9QdK4WcvdACsYELApQbbWQ9B3gK",
  "key7": "38KGdjqStrYrjcZjHE9q8DEFkFh6EVD2h6R9w77FtsMYRJdu89G9vWrBRCbiJcsf5mA3qn6wuB3JSts455zrzkkJ",
  "key8": "59NcpBv2L9bvsgZATcgoWmxRACRJCr6Tnd8beEAy59UuVruuxUEJxW8H6qAH4n1xULG8sYJHH9jUvxtLhrChc6MX",
  "key9": "5KpXH9CsS5UCsSARfXTTLLiVGisyDBB58dVx8U7BUHZrSjd52KNdb8NF8uCp8hn1rokc6aTuNEzyYxGFXupSFwHK",
  "key10": "3YpfAribuxr9uufW2QfA8ki5U847bRXitskhFGHZgCowT8mCV7Yr6ucDTqTTt9hr1Zq1xh1bThajBdSP7wvAMkyw",
  "key11": "2MLaPGXxY3BdumXYG2upEMFVk1EYsfJtS7qfZtnY2iwma3rDoj2yLz2nVqxLRt9MBiRiuppAiioBK2L2C5kTPuNW",
  "key12": "2ooCV44jikj4dJTYcE1bEZj1kzDE1muUtvWcFpWHrybBRPPijoSFAcVpionNHYtDmTE2UGXsQQTqnVT7mLBjSodm",
  "key13": "615zB5grNCMvxHaTRzUWUczNXcwjd99KugsT3NtecCp3F18xFiiHeviZM1N7S36E7WDVBz4dRTW15MrA9mvEkNzH",
  "key14": "2VdgiWcN7dN32HeYdfRQh9zLAuCiKse8v84RbCWfoWJTmu6AFHxr4pBNEAPEuP1eFCCa1wcD9iJbm4D63oZQmWQt",
  "key15": "3b3JRWP3crG5FVSfeuizAsYAaPCQwxeRXHU5sARHmLobefFMZ5QFeqjqtzbro7dVZn4kRFctkY6aeQwkgfTvMMsx",
  "key16": "57Um2WR3STDPrZvNYEB4RjKhsVnqMusQ6Bc1nJpX7ABEEQphZYUAKMFW7pUP1fFj7QB9cpGLB5YU9jyq63FDomwb",
  "key17": "5moM2s69vgmojp6jBSjvsj573rYSgP8tgNJP5MDZHGmDi9tGwDwUJ5RTSZAyG7wRp3sb6cPzFPkCH3T4tPgz5VMA",
  "key18": "33uftZwAXeFFUAnuRD3ZHStsegb8WS1nNHUWArQQnuGxJnVNR5HD1YYxubedWXBWHTbezFpS3bgYaSxCLBfx9aQs",
  "key19": "3jtfaZcLnPkdvXFYjoSAuiNhm53ptD1C42Nou7Ef5JnU2LADShgJCdetD7Qf3pWYnnc7mgXmuMaHviB7mXfj89ez",
  "key20": "JpbveQTQYJDhxn6mfem8izgwc5qwtCs3dFSAkJwrxZG7zqEwgPyaghXDb6cJdFnu4twmaYNLgMsDcnZqhj77xJB",
  "key21": "5P3wxwKS7uFUrE4TE5tyQDR9jxvbACg2WxEBtuWAqpULhB3bqQU5YePUmke95XKPF2BdMsoFRDcu7WBwActtBA2i",
  "key22": "5C25e4zBoUPA61SPco2PMJE1jGNZpn7YciJevtouB9tpRWoRde2fc2tjRBhDne4yEPKbr9pRj4EuTSAutRF6zU13",
  "key23": "zYFytDRju8kxmdvumVZST6QjrusWjoKPAkqNaamJszkwrfACnTqLEAyHFnbnmT2izE44mUume6r1JaVxibQBZ2Y",
  "key24": "dvJPV416PLe7ssRGE9CJKZy8AZYA5FeGP4zACkx6kQGL42uqBRdf7Zga63rw7s9sYgiArpfJLd8PUTQbvU6bBHZ",
  "key25": "3qPvhEeAFohR9jAFJu6CLwW5BHKQy9Qu1dMQySWjnjvmsxC6dPixyy1zkCv1jgwJaVsVYTjvtjub25s8zLx8qict",
  "key26": "sDidyh3PdXKTcLnUFVrnF71KoRNLHy4Jaig68Aexw5qTymNPsyeUkNwx2vzKERGiZ4xCsTMJ8qhWLmLEYS646w7",
  "key27": "Qft7eun4cqaFASNuKYxTKPZjLpfN5PwmbkWDTpry8npHamGRBJkhuA5i1ip4EvjZKygi9SLU5Ue1LttZfctzoXK",
  "key28": "4hr87Zm5Xkddk131SMnSxZvYfAtbADm29TPvp7o673wbh1PNAQ8pS2bvVUTojVNi1u74enGC3xKToyMcoPchHmd3",
  "key29": "AN8uFePSCAqXRABcqDRvBzEcWQUawhWyRnmZqUj4GU3MiJMXAA3dbn6ph2J1f9VJVhhBjjyy2SSJf93E734btLt",
  "key30": "3PLSsP6FvgYR6taupmbcJBVbJC1k9CGt6q3QRjq9HVqd3WfS1UC278Xik3iHG4pj4KCTSTDPZ5kMofUkZtkmHosh",
  "key31": "2cjaFgU8URaEPjVV2hf6weJuAvzjPp5bnKpGG6DRAQAi3c3KMTG8otdgQcm5YCRUU681iTgMTLcZTGqnFjeadhu1",
  "key32": "5GGRjTqsiDZJ1nhmht6KfbeDLhyUFCo8gBf3sgvM8H4n7G5nzob6YYz7hUguhJiEQvQLtbjB1cAHA3VCmgKC4bXV",
  "key33": "2JkDCkkZm2hF8ThKEdKwt1935ypTKhdeDc4DeSrUTULf7p8M3ikfonzLZTcHYoKQCgwyX1RrNgdURQQDj7MyWkMy",
  "key34": "2f67o8T6tXA3e2kpW37vU9LZ37BMALjeALFNAbjUk6F2rK4ivu7tneGbTrGKT1NmE1kq9u2JHu6Lc9qvntXQUDXo",
  "key35": "3ofbK5JjaJQVsMe16oaQu3VhswSWJmK5KbNfSx1gFoAEUk98FtWyziJBAQsUhBY9792tMKmz1AxhVms3ypGm3NiE",
  "key36": "5cFC54mrgrtSXqGChhYE2B7xA526YWjKyc3d1ekjRQsEeFuQ4iKUrVuA2NgB1TxCPZ7Pcmm3GHDP88ee1XfYmmNp",
  "key37": "3Mvt2bpsjF7xSzxN7D4FBFHD2tagbGJeSf6sWFm9Lnwh9jJ4iX87DJrwQjBHL4dMriHoGjJGKo7b1jKLrsQFPuWx",
  "key38": "3tesTzs9HLBUNrYHGKBPPz2GuAqc1ub1gEmM3jpoE5M8HSziC4EChj69kkZhBBxaYJJHHB2QioiJqn9SEthXfDt6",
  "key39": "5gcgvrHEvqBZ37WtHvVz98PMWu93UxVZ6e7VmHCE8DmVX4hQcUv2tjKRbiA1fGCMjz2RZ7644q8nqKTakMuqjX7D",
  "key40": "2otgqYgBTGbUGhKtHy5AZ74ezJrvBNheKT8GWHUQAfKqVGBxTR3Sby4XTEnssAb1AWt7Qp2JuVkL4jjqPTdJtYVf",
  "key41": "33fNnN6VwSZvn4UtZKCsH15EZKAfhYpWxyfou4beXhU42d5LCE6cc2Dno6XqRgiNgGe5No1tphth6pqcRY7E7dGM",
  "key42": "3VUMd4AcQmq3bsjnA9yT6gvFkhx3C1owVAELKnfbDHCW87wmk2gat58YrUozKbX5X5YZPb9EE4RHgmeNDCyEcpVw",
  "key43": "Qbfkir6emU8wwD8UVyxwFQSrsUY1KUcgUEBfyY6TuBczwPu5L1pV3Pm6LALmwFhF5T62LKQKZVS4jWkEhrqYFzG",
  "key44": "nQsiZL1hanycQSPQahLytCT5Pp2zZfFw8ru5uFAHTx2Cg7qHfbYqE5kxxGt8YuC9kFbjrCEQ5YZMi9fawzrUgLU",
  "key45": "4c5gGj9ZctA6hiQkRHYpkFXVSDjjK3tqKDdnEgTnZVKcgy4k7k6veGrTKKRif1m7KjtRdVpeExRh5T3Hc5Pu2wHy"
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
