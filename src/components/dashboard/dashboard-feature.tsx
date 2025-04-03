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
    "284Viqf93VQ5kg6CuTHqJQHJtkG8JhrDhmqNYxN6yRbECAZsDUUH9RPRX3GDwSBg7oW2vorYimUBLbfFRuBgo4Nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X4dqeC2zbjZLJmGbhoGDXCBeFER1a5LjHiEsqj7syXrG2VkGZrPu4SAD14uTxdend7b9WXbwUyQd3wyBEgHBKWR",
  "key1": "3Y3tC4dhU6dQKWDX9tmtdLCNAWkUef9sisqLTRM5pswSELW8rPorkXc4PsbBTXhgHNygV5iFYVPQru2SvwoxBAd5",
  "key2": "4doZSiuH9PTENKdDepmskneUUaJSLGWrtskmuW7ZYKh2CZqihiUWF42YMoUkFgUR6CkLzV76A2YmXaAXwPotmnq6",
  "key3": "3cyH7HYfRpksjnuAocGSbxKn4WhKzxaAwsRVBYPTHxJ7TH5cTuKPYQNd3pwSwbGCcdoCzcuj4Bo9sgimyJfkbhQg",
  "key4": "5wBc1iYghwePTF6CAg6Fv5yKibb2JAwD8SMHGYoSjWbvZ6NTNJC1dqDdjFqCDNfd52R31vbC62NkQ8TqK6v62xhm",
  "key5": "DNZm2Zh2UAmqzGXLZ29FRsTZATgBFT4c4paLr89uPcu4exmpWzFEi282zqyiQD1vUynf4Xx6WdfcA6odvvDBzUn",
  "key6": "2TaqbFLTA5houRcAfakbDK53qWoR3BBbDiMbprZjtHDEb4HEmixiV9m8aUGRSuTgZpijtAapz8LUznY6tTQXFeEd",
  "key7": "3Xm9eCawwZd892iKMLhjVoWGrLHnCZx9isdRUSBS3jPzvF3pGNhEqR8tbJRhZrZwFBQZqMEnAkYySWy5QBPwGTmX",
  "key8": "3kUZZneeZcB16qvrPe275F8XzJzjzVKfaWoA15T5zq38xGdrr2GibA6jz4tAa12Yps6KvVR82xg3UsCfekT6uRGQ",
  "key9": "2fxc5qu9e1uKQWZTa5xssRjgDmTBLmTqnYYKZGw5ifBCWbwLiF4Kykvvm3WWakg6mZ91ysssPoLoBAUjCKvQEAKz",
  "key10": "2swTZzVjdHE74WhSE8PBYo1dEkg3Qz7VbNLmbBN8rj8PUXRmHUqsZxe9Z3AabU7ynRDDYVAtZM2joTDUvRxn3LsS",
  "key11": "2vQYJpjJsHpHmousX5ysVt5eQKgjNU2DX7Y7runu5CxrEhKcx2ftAiC1GG3xhTfpuxGaVfdQuk3SzeLXDW1ebRrQ",
  "key12": "qjnLEmgugbKyofyuAgsap1FrrNaCuu6BAH8cQLShRDMrsKk4WXcWyaHkQdTCr6amHEEtDkx8Y4XckCjWKfhPXYS",
  "key13": "3pKm7cmEGb88bkpYEBE8JzFCuSd8bfDX85D8ngLpArnbdMgzBZVxoRYCUkzmXJ7WoYHzuwodVyPDKQ63u1PmgAez",
  "key14": "3kty6JoznykuvCjgsHdEm5UdVPed7vx1uE4bAZEFEiGCsXH12sF7fUthWYu7Xr8fVSxLqjEE1E95X5iDCHAmoSj7",
  "key15": "5YwmPqDmSrQFvmeieGRh4CHG9BbuV6rj57ER6UocBEfavFEMj4WNaosWtVztRyHCMcGdme5WCob6TjmTYNrxcCdE",
  "key16": "PXR4HbYyBUMRV4va28vwVk9iZiXc7LHXgEYaKQ2cvXFtLYSXJsDfiH7oVV39BZRzHHcnL7CYeT6vwX5XMBV9dcM",
  "key17": "2Un5PuS54gJpG28BEjCnG3Fa5midqsKKpssRWcRLYQzNJwRMuHBvCJ8W5PqqUJAeFPpBnLxmettwoUwvEcUfACC",
  "key18": "4MeGxSoqKHAKZGLQBq9UgV9W4zMGiWejCGRSm8KEbs5SzyZyjtYSL8V5WSKGaiX4B2oEPx4J58ojiRp1ACq2WztA",
  "key19": "2uYEsbrHCyhnNiKu1cAdafVcgmgFidAqkLf3MXzGsYLP1bh5aZWYK2pDGf4hSGb9jffp4rwtBpG3nLopeQt4Pfox",
  "key20": "4aoRmCxpyuPEz5wuP3Grbkj2NGt3steVTovMx2VZvHjJAecjcjaNiH4X7WoRNXQ4dwhMk9ew1fggm79nYZ6GHGv6",
  "key21": "5z54eKjck5kPoXEQnyqMCSZ4TAE8cxUodbf3P7rkBMW267QFFG7mYPaAEZvuzzxDSSU4YSuxecGkvNyH7Y3rWYzv",
  "key22": "CK8Xjbg8ZGjJ1TVRh3SNJWznpQrcWzr4LoLhS2x6xzfqSG7Fq993ZtDKUg54iVTeWXUYjb4ho7gDGMcmcNxTkpf",
  "key23": "4mhCrEg8GVDLMxi34A9Cj9p6YePmhTekW7SN1JJhZTpVhGudrrLi1ZxuzCGXGHnsjPNupaEN9Zo1HUd36o24Syh9",
  "key24": "5ScxiSBLaPZur1uqmJykgCsyrZYSHZuVxCDxcPK3HDUG6KEgK9D3u7bHEUaxqLLziYkxYGNVDerZvXdNVznqc1H2",
  "key25": "5rF3bko4q6bsP5nbGWAF3UhcQM6d3dwpZRU3fuNDp6ynv4BcaC7aUTuGYKF72pJhQPrjmpayZfGVJKmhKGsyupVs",
  "key26": "2D1C7srqKSuamaaje9Byfobng8jFZExWfui4kp98BkEisnASLwb6R99EyaZS6urar6cq8o96kYfTMBKPvZQb4X4g",
  "key27": "3bgop8wSkakZkcRkxsMUvRmPR33YCpM137K723NDDBiYAF4mE3rRqjE2a59fAxNRDQRgzwZ65ymtqSkFBbTuHYdP",
  "key28": "21kRW6Qsz3wvJrXfnmkzPLjMnM6Qgsj1xaG3dUEiote1zYdLMfSaxb5yjDuGsm6HnALpVAWuvwdL3GDA6wfjaZxC",
  "key29": "29qQffP8p5q3mL5LRR8EqyR9UH1TtmMGi64D1ZmRcCx9TbrhY5YCF3SHmuefsneeVyszVuL9ibKtnt4WMYaVpT42",
  "key30": "46ZLM5cMg771se9JNe5PkiAvLYAvgSAy4SrwuHpUSy478ojSs11ZrM6DHUJPMx77TbJQWct5sm8gcN23j7wAMWhA",
  "key31": "4ZfyABKneC7uoCuTfp9LvuQ8dx1ByQqYMpS2HTqgXXMxrCzz22SK6Gbarp9wCZmY6Vn58zNK8bAMnasvqpAENhjE",
  "key32": "HGTddpmSAEDtCXaV8r5xNzwZfwHW3x4GRKTCN3QKAWUUUQNk615aoJigNLiLpmPBTLTggHAoMFHQrmXqC3eBJJV",
  "key33": "5iUBUUVuHTqnLwXKmBSEozEtT1mYyHP1cndQyjZ8Ltj2nvEdQmKS4tpfkxCuvQPyNyYiegXJ4zfWU8cnDc1kXHXh",
  "key34": "5pnxK54uGBBsTxjsaWpHq3phtiHq8F61Zs7u1Qg3fB9X1Y9MzPbUARLavsQbzMQ3TyPZPuLBKnGpgXMr6gzWePBX",
  "key35": "3nNfr7wjxJXVHuau1Hb7d3g3uKk57oXPkxCKm92ae3PKTDtT7GuUStDSV2mRUrS1cRitRcLKdUZ1XQ2QuWg3XtAe",
  "key36": "2cQdAhvdyxf9XZUzQ4sGVYUXM1PYKBwngWJ5h46EQZfFzH4yzJbx3dETvbNe7g4sgtys21tQL3kYcEWogocGmism",
  "key37": "46jWC7HderE9zsMc5stj5LCvvpAa5U6UkWEvpJrKQnh6bTuC1B8yHGpuvWEwMV4GLyiDmp8WHeWUwbryvc7n73eR",
  "key38": "3rSytJUGMiufBJuk9KHysUekyLUcoVyBuZkCmXAUZ8P6yFhLPMKQMFnbf9MyuKakCBnCcsAeXcRg6iko83C8pUf3",
  "key39": "3tLbP6xyV79Epe4V6uMDqDHcw1nNYaduCMSEGxeCBcQZwXCAwy9ge9DxCcYofKH9hz2VLF8AD2rzJDoc71dnnKts",
  "key40": "57q3XYthqyvFPWzPMZmnyJuKiTjenjNPdSkkZZSC7pGSBp1QijNoGvegKzJVnVGyP7r6cQ8XNJ2uTttuKpZbCRAs",
  "key41": "2vDHR5GiXnAV665kTydBZsRjCP3rwhunDEnQLkFSRwJNY3AsEuYM42BvNLDKptoYsNNrH1MUXW9Cg9356AoaSKVX"
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
