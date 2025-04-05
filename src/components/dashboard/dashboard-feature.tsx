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
    "jE8t761JUq5ZBSfmZKgpp4WjM8mzRaucLR6uQocoNu1putoxSmx3XD9C1kjomdFmVKEw51fwsfNSPJ9aqzBSuSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CRWjy64oF1DvGgLXCQ7hz1iyhbBG6cFffnuLCcLaZVgiW4FKNpGErqCtYMLW3R84FNkWAHzWoVx5rffBLxB32Hk",
  "key1": "5ou2WirNFsVGeLPpBtqTDuKMkgGymDckx2kBwYRfyDDeWH2p2VkPL6itmBhkkDKDF2c6LeveSL4vcPY2r2qngyhy",
  "key2": "az4ff7CoXcfWboFgY4dcQosnUmk6n9pP2bFZDCb5mzDHVKMx92tvazyanTR7VZaHq7hC9hFf2PjTGpnX6t9pRwy",
  "key3": "4xpKR5QC5VrnA9EGPdcYAEJZeBzivzStHfJzw988U5Y5A798E5M1KhACyuoyDAU8uRbibGZrQaS6mSZwuLmvMD7x",
  "key4": "rA6KtoV4WL2WiqaYXnjnS6dfTn3wfXnnTDsSzg4UxXi99PkhBc5dmJCrsgS1g2RApN31cFJ7a6u1sf3aLUpbNVx",
  "key5": "3SGPut66thRfaZw2XHG1KhC24kAdY2FR16KEQvAtgzUdE4vybbKdbysGtpLfT1a7ab1NLK179dfd7v9vpCPNN6dk",
  "key6": "5kD71kRqmCbKe7aGsjSrbVKWjjpFTw3MPxiTVZm34U3RaUcn4cXx5HuvQ89ubJeWC2Qh9ytCtzGyz2W3rH7iFkuT",
  "key7": "3SKDDFva3vGNk1H6TKTSovjncQxuc7zfj7H8EzrwWRuVh4KQ2F3YgJi7JsSGfhwpGhAKQoavmvUWB3jkCkt4u2gB",
  "key8": "ZS5h8cyGVVt6BkHYaHVhSgpeZ4ScqCWP8mxvFaMqRrjDuZ8AbrwdNETiLjzuaRWWax7z9xSpQWj5scVU1Rh36k9",
  "key9": "4YfZWKhxUGfmN1ErSovPw8QyzLVeuva5Sn42gGKGRoXU32nmq5vaEncuNG94eAzWAod3o7HmwXBq8fzkdwRUqDm5",
  "key10": "dXsrs7rJLbKGGyj9ng7Ncqt67skR33wxaeWmCjxSXn7hRCfcg9RmCx9gB1bnQkKorn1tkcc8VL63iTFghUcfrtm",
  "key11": "4TYd6ziY7SjHULGpL1nii3qhSLhuv1NWMfhvJMeNVN7Gu89d6WNFMQ468mYaaj6vg9Nk8XFyavtqH6ExVK6Q39JV",
  "key12": "66tXKqJpP75y8NBfxQ6Q45Bk27Ldt1LEFj7Rvs4mgyYn27LGLmrG5p4XcW2K6gSC8zHoHbobfRrP6oCm3MfUnJi4",
  "key13": "37wgPaTv8WM2dxpb51M9ujipzHbiMh6P8TnPs5rxySaeNfJF1wL34UQ4c6t9qLPUSCiamjqeF88nXKpEpvsyC2EZ",
  "key14": "2i4JJR4w5vfqP5KFmvDBRy9WvYiTTT9ZFnbmmDcH3qwyHNy26pqwAV9kRt4CfpsJ8h9fLLjhPXXxx4VimBpYGEXo",
  "key15": "4apwxTngdDmNJcyJJFJFrCfgoBpaBGC12VzZcQ7DwLyZoMfKY9ffJSkYPXPhv4qvLdcra44VvJ3vupswFaRndvEJ",
  "key16": "2AqVLDwVhqGUsE5aUr3m7pBQbmE1EPf2AeaT95eqdyMweCsmp9pZ3JgeFsaad8GDHWzuLkSWWXmrAv4dteq33xu",
  "key17": "2SqQKifg4RzyPVoPGLFKzuoUcp3McJgRS9cikwoMfPC9H7s7wXDd6adXpZmxdEM8Ym4LKGdBAvtSL5a51tfee9wW",
  "key18": "5C7iD4ZYMhPC2GkcWkWpnGUQaBdrvXJnTG5gadXcxe64trQhjCbjieUF5p4LusRPcrTWPkztsV11qdJwzGBxqnR7",
  "key19": "3Gp5aZZs4FzkgsejQfpPjsNLYhZnCzsvu1WbvjRfsUkroySHKK3whAZ4S3efZvdAnkZYyNPi5baTowsL5dK2amEZ",
  "key20": "5Ng3w4ka4TpmMExHEVe1m9xj7z8G5UUL2ME67eGdxaFihCLkzcLyfDs8dyGkd599xpTHAx8pz1G1DoD75NJ7oteX",
  "key21": "3K2h5PwMiNKiokvTvgg8h8uG2Sz3Xad5uvexaszhoCHh6iNq3ZL7Z6C1Bd3WgSGHAcg3yGmM2r9DHC7DDuS5T2Uz",
  "key22": "4BrtJXXcUZaVLDoe6Z1iKqxxTphM4ENkqKHcGcH54uQjJV5Ee4SWgS5ZHqu7i8u15KMYb2bNVFjCrLAkCfQp7UQL",
  "key23": "3Fnz21hxkTE2HQx9mnFNtekbdkhTeUM8m8FCxyBbxMDVVM4peqSS3GvtRwXATwJiF3s1BQAkyjpnZYh3hRRXGE1w",
  "key24": "5CVTHG5gX1ZMZRuQoxCUWvaZvJoVMrbeJSdDXrCCjMZKBa6SN5bYRr5g3JrLiG7NkFpczrcd56x7yRUxi829iMov",
  "key25": "3Tpop8XMYAiQoVkwp5Mo3jZNqRM5iZjbodCdoLa7a6EXKEWULCX5SmY7zaSiTGmS9sXtfzxNrTXv9idNRBH8vMyk",
  "key26": "4vJxHM3Q5Vh3yq6TenmeMJuVq2DiaoQ5ecLu2vEiwjVaqZqu4VYNuTpSksjoMShN21K8Ugx1qDhRjnVMzz6dXrdP",
  "key27": "5RaevsQSLTYjwRHTxxTQzjGdAuNWJ6pPgQNFBbJhbz7sq6avQYmYekhwtndY1mbg8ne4iQvV9MLs3dyKfb4XKqaW",
  "key28": "2LRsN2zjtQ5fnh5VtnhTXZq5yBgkGNmQrYsdqTiqB11f9RYtSzErg1G7z8HVCVnBaKNT5JPfxWLnj1bEXjU6Qxet",
  "key29": "3TKGCbGqKvHBpjj66bZhnYCGU6JRat86SYsAfkKuZsPg6t4R2ut5APbpv6pqdppJzAN9vn7f93pjoMyXYyQnWcYp",
  "key30": "2znQ3RAZsESFgLcJDqv1oSHwLeVAzwJHNQhfpabi7NHtxBEqkF5K92JU37H6hcUKPJ6gUdUXuwt36r1V7zmDM1qL",
  "key31": "4dfJuDtdmivTcr5k8VTf3i79ooDACJF5WajwzXLg3CwGJMepbdM8F4yV1gBt2ABikRcBaJyfTz3x9agmd9HQN4tL",
  "key32": "59hRd9AiSzHQ9QHWr7NJLQDS9vThadZqHGCHLiV3k3DvKG9oQDgrMk7uGhwdtawtuXosQWby4nxNpLQ9XRmFoYHr",
  "key33": "3wcoz4Y4PZD4EXRXizxzidD6gdphupaXvLrNyi985vACSwWBLcfaBquuw44LDz2mNTxSZqxJrwmzjZGbC4XC4P3P",
  "key34": "2xk4NJwg9ceDsk756EWjZPjXCtpfFbbhAwduSxVWuRgKMjDjRbnqjyEKSnUDjHaGYJ87K7pVRFPv3TUMP6S39HnT",
  "key35": "37oFEiM87wsoLfCAH9e2b4wB4TDzb4UMmxokjvFn2Tbrc9UUKdHU5MB6KEkjv7HyJM8ecDPbKz8sCStXG9FKFThG",
  "key36": "5TZfHRGmTocF1tz5skGRAqXtfWTKmWmtDiUDNXV4E3XEybNRWVAVXEeRa7BqgNrnDBvJCeRW5M5mVh8tD6Pa91GK",
  "key37": "2iZyYHntgeUhj8vDGNz75W7jCVJmhHv9uBF6Bp2FyEktNQRztM1VFknaFYKu7BCGb5LXakXt2qJEqwAaEtpfewNd",
  "key38": "62CHfXJCGpDc2WMGPcEfQpTPtEMyPqnzqWYviGGpqDRqiAXeT2xGMrXqR2sAp4hRV5dJNjSFpKMtbF5P8mMJCNgM",
  "key39": "2HuEY3NZgwYABTPmu5FrUXjzDzpftjLqkcxauVQr65tVz9tcLorD9HsvYBNEE3dAQqHnJcLX8rZoFN8TKPYhqMGf",
  "key40": "5n8EYyzj5bsnyzuHYzk21qW7u9oQ8oAdDAENyBDbV8xPmJXRJrWEoh1Lip1dMXaNLzVL53XX5S3p1cS2sTJfTWB2",
  "key41": "2hGYJxypCRBR5DTTctdzmpEUw3HqDQeBGM69aow7MQMEp6u4C161WYw3fdygvGtYjGT9hYMHfD6wy4X1zziRtgu8",
  "key42": "5h352NKreSus2QVekUpTRpdydyWio7GFhgo3PWMsoy2eefV8NPycZqRTfmqGSvDYXQGovbMYhw5YR2TUe5dMT8aE",
  "key43": "5dV1w3AxmxgEKgsxgEDC9WjfCZfqrPnKUGKF1r4Bq9PJEpDw82NxK1Nd6wtRbgW6yiH3weEvofWVyC5xpuyhmQSE"
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
