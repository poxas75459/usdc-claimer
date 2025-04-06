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
    "aj24D1G9miqnfF3rYKqtVKmGzTNKMX1wk4iNUP1nag6uFt2HXRmWbESxWG34DriAfbXrJeCykuTt8rNCnWeq3R5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oDWgbTvCRJc2Ti1mkvfPa96F8P9GrwVURd3CZgQC9ZsWSdfxh6PULzuJRupCgUNGDhUE4ZnH6is9XpzYWLMkL4y",
  "key1": "3JuA7ydCynCwBMdyZr2ovR5EqTFkDAzjxBJiu86KdCZydj7fz29zFgoQA6nRi7T34Qy5AYFhSjdVw3sRcisY27LA",
  "key2": "4UVSJNXZNWdDu2WdA4kYz8WtxpygQ7AYzYv6eBZT9Nh2hVhk8vpymhxnhn4Fo8zeX1w1gR57gbYYda9mHWZnfiNh",
  "key3": "21CJ1XXiMncWaMmEVp8z4zydnrWyWyKwLx2visty1QZGD8sUpjobzYPqCU1uhQFT1oFJbYzogfgeWW3hpNnb7LkQ",
  "key4": "tRKXebNAnwZwQFmai1V9Va1EoPSjqf361yMZ1J7MaunU5kppoEDRPUrQ9rMPekhDFn4VmMf6zNphSmGagn9LNbD",
  "key5": "4Cgu9VDBkgn2jNJYvpXdUrAwXdhobii4jzoWFm1m8b8ShKiswvndr7GXKGPwrrc8wGcYET67eazZww7kDBNi17A4",
  "key6": "28NkWzZHtZCydjY4KzTYtrcJmtygcP6MLhaz8gUq37AqMigyCC7v9aLvC96chSCutHark7N3y8FDid8zgMVgrRzQ",
  "key7": "5VwGFGgToMMoLKTWewRvUoZ2QXAKbi2xAKJwvUmqH83pWCj2ML32BVKpeZVjBJC7B3kxHyyLQk4M3atnnG5HPwCL",
  "key8": "2n8MB6dsZYd2Ea6a76LkL7yo416QUPuY4uBzyVxZs621vUzpEjsmoN8RN3UKRBHiskd761W7k2jKTRFgwV72bnoL",
  "key9": "5Yhtfs7zjWJrAYaBa1Enuz1cygoW5r8evrkhqHsJxZKH3HWDtxsGekLAo8qJapVTNrnTegJwmZ2Jfi3W8tybj3Jx",
  "key10": "SuQRZzpBushcpCXSdrsoodYQUKNCknQNYJfkjE8H7PnQcBYn4X9vaRoSYd78hGfuGmA1UoCDQ4B67xyMsbpy1Eg",
  "key11": "4kaRYtTxe2kfbj3C2xE9A1qW4xWhBrJdCkn1vcDPeFaPx61JfWTps1Mz8PHP6KT7jKiTETD9BeZUYfGCTnPxzbxM",
  "key12": "5hEsmcqvBTNyK37VYonV59nJdEDN8Hq4HECiTNAomCytqCuixNRbKA87NLCX2KJMdBw7ESChA5tKECzf7sXgC6h3",
  "key13": "4bQXTpiEaqB4ck1TF2v34H9vuiXTKfPTSTcR6gF7gMtL4UeTvZqZ4yL9T19hdisTUmJLcobChXwsJkhN42uRhgWn",
  "key14": "3XYd4bTMSkhPQffJSFP3sZ9Uem4TUH9gsJdSV4zQXrGqWCFsg7NtgRCg91XtXU7hECwtP3GWMSDF5Krr3d2WXpiG",
  "key15": "5KT2Jf58ZvDf1sYNu1oaYPtxWLmJW8vS4xoFpA3GRLhrbxVWQzbdPjEDRVGQuJKmdaSRHEtUsvCCGnUfT9Sx4EL9",
  "key16": "2E7JPfVdyhiKJckJyLHBAcp4rTqiZ6y7W9HEoaiHE6VovkTiNo8iuEYJXhZ4YfoPNXbbaXAZBQdvSaANcuwydUrr",
  "key17": "3YWcCNLpBd4MaCRhF6YPgzk2oYgmkoocPL6RqBarjwkeMjfeaxidFpmV3x6dKWxfDn6Wr1uXz6qSjwQMh55VrwwR",
  "key18": "2THmxdfGfHbS4Mfawj3V1A6pgBanN8D1WP3bChJwRTdUd16U9uJxG2DSa3F1SREnwM7XDcrJHZafkUBnvDAS5jQX",
  "key19": "nYCixAjE2cFaBcHKMueRepmAZwkSNiznhwoFfUVY5R3EqqtvjyLo7nFjnMyX4tBJUj2PiYZabJYcgPAnQGvRi4s",
  "key20": "5rrz1ss9m59x38Z7YTgeTWVcBdX8mhGPuQGAieRumV3spxKkzkLy8y4m1RfjQBtWRGhmNKTiJ8TN2CACo68Mcibs",
  "key21": "4qCUTsqEcQzjiQXEQRCHNF7PuMBa31EgYcF6yyVwCMfR2ESM9dqvyndG3HRqRCNcxCb8eRT59W1GpmtXL5CU1wVd",
  "key22": "4PV7knjKEQqbXF7DcPfmByjVMF5ZpuQ9QsoiXZTHjSfUFRcY1ZYMYBaHhJo9hNndMvzNAtNbmkR4PgPfFiaWH7ig",
  "key23": "PayRKskiDwULSt4gKaZiv2Fy9bvAYn5JFe5ebBh6aDaiLry13aXPRwYSAqnXeniq8iK8VSBcFnVHSBvGkFUqENs",
  "key24": "3MMvh9tHEWwuAdfgoEsvAiwFjuepmyKrBC9rQrrU5rNteb4BhdK9C23YjJtReYzBNZsni9A7d3g3rEWHETBwQtFK",
  "key25": "UKp8d17tYWRidYSPWS2kektxGHkWi49CnNXdNNVDxh8FPdJTdJnpXafNDL27wKBphL4MycsmtrNCrWiVoS9FTCM",
  "key26": "5tGiUqYh92hte62KViVyyeopNvTNcUn1K7SwNgo8EFGueeLVLZewra5N4BQouub7ERMB42LM9k5o62KQWFh3CF9i",
  "key27": "3SfAczPBgTJhG74MoR9gB3cvsDHJnHydBowPdJAagienUxkTHVWrRfKrTfj6ou2tUW6fKB1iq2Abbza5ET84N9fR",
  "key28": "AqfXLG37YGxopc97xJzusF2n3WKdEAqYgd9qQHWwoZCkQmns9kFsqm1HFMDdBUCUmz88Am3eGA5v2RRN6LAPsSH",
  "key29": "3REHnKYa9nCVfXfumz8Yu8yA1qwTK5KwMH9N4saeUD1z2HDcDCE9ufMnFb2Qtkui2Y2qq2epfAvTXz1J9LZyomBT",
  "key30": "FbaiEM8wQuZ1jtvQu2F1yir6ceUPoHuz6KN8VdbX5vxgPQM4CWfipQZJx98mBvNBLGRwVTsT7MeSgfug9zz9o6S",
  "key31": "3MHSTvKqkzM9KeBxtVkVSRTKHQ4zPy1JWxKjrUy6zWc3cgBfZtAfzSKF39BGuz6fvtrJeZGMLAZcY6Wh1JhrbwQf",
  "key32": "NKf1AoRzojagL6PSM1uxM125AUBvXeoLYMmHoDjcdVQQf3iLKyQrTEWpTdDyjKJ9F75UrycfsZZ9SbHGkNzWK9t",
  "key33": "56nwnJZcHKXMsuzTH8uorp4dSc7ipS54wV3voR2bnFcGhswnpfnE7qFBMsokHr1Rg3qXKfMCWyWXBtuiQYmTEAq7",
  "key34": "4K8gBFbSauRGEnDggTjMuCgtKbQ51g5eWmZf9CuLxRNy9wooQH9DzQUgvrhTMoLUbwanK1i8a1b1k5S8jfaaKkCK",
  "key35": "3N8psWnitASbJCjA7ePtpgALkWK2qL27jX4Q3KCL9EZ7DDgLGHvd2EpN97Zos3nsqc6yFW848zxF43J66t9pzAeN",
  "key36": "2M57693CdhCfHD7JKVZqKsinCPCEZE5ucJQsHZsJjJUxB4HkGAmiTcM2GhMezMab2fxksqPs3Z93mrPfkrS32L5p",
  "key37": "3tpr5ggZRRmFYLYJur8bKXbTBBbpgSBVvQrAq3DRf7ibn6JBizrK8dRjgT1n1LfjQX3Vt3JEV7dVS9nRhy1b2kQH",
  "key38": "5Z9rWrMtKRFcD8TfyNiTpbm6gCkaBZWhC4RLzEjJx26a4nBdfHjV9uVwhqM4pRSuF6hrfapAF2jzPDvwopmZJ7ME",
  "key39": "5rQz3jM8R3VbdiyRyeAFJaQe1YDoHPGTyF8cpEqPn94ArcFMQB7ro6qBzEuvCx14F3wMQdq5p1Db5zB9fX9zmfTT",
  "key40": "8BqXwexa4HYuqkyrvX6HofvEuBZPkgpR92L9xmEDfwjta3oSjhTRiEeyMAssbSqk9viN1uN82xkFgZj14551VGK",
  "key41": "zi9Y1gFHcQ2Lg6VYWTYjsHUyJPZt16HXPcCjDDztgHTChQU9tRwtw1sG4jRVd3D3mc8HAoLnvzwGjaxPQaTDM39",
  "key42": "3fgMHRE3qYVY7c2twyqUgUFyTkZ9bQwBDvfqSH9AKbN6MSBXmkP4adrxEmsEFnDMXWA4G5SY7i8E2Ek6RTXEZXia",
  "key43": "pq9oxqWMGvdQgogeb8pYQiNrZTQf63xKhS8i7h7My6Qvus8FqJwXemXx62P5bKEAMTNN2T52S6igkeNRvCLYHxY",
  "key44": "58ZTgAs42yP5ZAv5yevUKwhHEVnsaBFPSdRP7eUWdbpNRQWTZQiNyRkVKjy8271kpHyCXqEKhFEiqcX4DoeroY8c",
  "key45": "L5BAW2q6Fab2gj4ZnyYtytdK7Zv41aWSMEhya5DAz54Lz2LkNTLvaiZwFQAZvLDFLavTUr1m6dhxFwieuuZgs7e",
  "key46": "3QRUpZaUxzB37Zo5EbGDdHCs7ZfcbCreq5vnXMQHVAn4DQ4kGnaoAY9MRziDD6nc12S3qTRvkWiqJfBcJXvFVGNX",
  "key47": "2av2PaD3QrgyrmPSRPdR1YzkLau7qKsvj5JPe7ecCAm3qCPGbWaeJ5MY87ySYAa8h91ZPwDnnSFQj9esuj2EHqBM",
  "key48": "3xXqU7Re6BxBM9drMkLQWci7e6ujKVjmGx7sNNoatzcWGZgNSCvxZmLc7Qv8AvP313KbJi4DVDbUHN1imACtagGz",
  "key49": "3qjvx1VMQTKWjbBVWSJn2RZ4FS8mDxMhmLLpmfA4uy3EFaGeGz8uHbFDZCYhBPSjx3BE9ny5bh5yVgrGFY2R6Qoq"
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
