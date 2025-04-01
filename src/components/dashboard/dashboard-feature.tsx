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
    "5bujyzFuaW3nEWLqJcdfQWEXnJYMEcPsusE4HXxAsL48Fy3W7jBmDsGiEP6gQsFN5BoopEq1h895NFfKcaLLhFzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M8e5u5McsMUmidEMXym3KZ6V4ew65N8gtP232HJ996jN8r6GsNcRt1gn3WGoKYKDbwkGTCGjCKzVH24mDonVG5T",
  "key1": "2iUJm4LaC1dP6DSAYWvKWbUbcDHcRcGJWhKRmKQrGe53ggkyDS9a97YwqJHG7fDGVYpEGDCTf33CYG8gPJvazZRm",
  "key2": "2pDcWjzWcQMq1s6m1zAtPb7595RdMhuuJVh6akFvLRhy8idXthRVuJQV12zotVVcq7ydnQ5M7PhCbddBgtJ6FhrV",
  "key3": "22b7r3uH691H3oRWkDx2seCJhFFg32Tfp2DWjpqjn6tZLJzydfbWPsXEfVsZ6eiXve9qQC8rYVbZpgei7tUJa1Hj",
  "key4": "3hcYTefBQyVxgByn7UTER1QqqHyi49gQqBswGchT9tnDTrpacpZ6p8JjEYhCQ3hf6PEo3hvv2QUmXtkgqvsvKrKX",
  "key5": "2Fcv8CGzJwUC9T4svhGBBnyHvRMtbCRRJWHdR7Q1Qb51RLCAtaEhpmysQo8gLAW75BCVeryEeLjLvgJZXRB1C3q2",
  "key6": "2Hndo79pUjJqu7FPVx9daWKYnRZnZYCCtqP4FHDgXBpqTjkZpyqAj5SJaeQVXuLpDoU2ADUFkSwY2EAuQMS193Cg",
  "key7": "37VB3qhvuCxnkpVJtwF2mBxByVNTuZTZqjFrjAfu1BP1j9b4si5RCFPJNm5nUfYTEdooz3tTnNZsB3bWEb5GYKHD",
  "key8": "3R1EzkVMyazkkPAQUxzRDFDjM4nHJWN281pxodzfhQwscWmCTuvttNVWY6sduMv2qV3MGUJAQ1MPb7mPq1bS8fsy",
  "key9": "oWCaGuPFPmA6NEA7r2fw1EebgUMxPqVTt4oNMtGdL4hjzSBMrVrfBZFHWy28c1RnwLegteJDd9ML2kQ2P2KiWi7",
  "key10": "5cwKkb8dtvMF2UMMtrfkKnFcZ2yTTfrJQ5Av8EiMVA5W65RdgHEpwpu5WY48HpYb36K3yJEhvZs54oGfA2wMrU9X",
  "key11": "57yukjJpCJk5gqavU8RHPjNpRP5dwzG5nz8yDBh4pRQCzasw27HB8haxnBTFxKqfdnHAbTL5zsjXyxjVLgr8PHh2",
  "key12": "7Nc7faL9KtDq9jUp9knDm9fwk9ZfD6sqAMBNexrHqXPPnurddabwugWJFV8kZY1BsMhUeWiEy6H6VUs9HomMxpX",
  "key13": "QH3DDvPKovSycQfqnJdQBU4qqrJykRQStKxbrbwnz4xVbFeeha6rvZDtQ8s2eza2oazpY7kUpGD1kvSDed2JWZj",
  "key14": "4C55iKY6JQh1TU3hmkdNmzWAuPifH4qAow8ZkGo52fm6c9m2fbZ2wJTgG3hrLzAEsR81tK9tEyRokRkpFpLLvud5",
  "key15": "4a3EnLe3JV1EH5sdRSwHJzjtxgLS3sxXseRZaxs2zXb7iEvxAGX7sqLS5yP8aiVg2uS2EQKweKWVNDtvCH7zTSKv",
  "key16": "2HM1chaqcFWJZ7qa3JjGJqd85azzQ42HGC9VAU4X3JtZkbiTRHWyaXp5sQUjhFcVwFEG9syQrswZ7J5rzbbbhK1f",
  "key17": "3WUCxt9ogtpKSGTRPf1RCmZKi5Pa5psJ9jMcrmMmhvqua6tJqdNnqPfJngsjWrvzsPdHQ3eMM2NNR6axFRgUvkw3",
  "key18": "2R8GQDYi14XXnt6KYPD7mW6tjKzgwb3gbcq1nvySaxdvgqn1tAFsvbVBrtaKYU6KXq5ZVfRR58cobeRWYgpypzbN",
  "key19": "2MDrb9LJowZ9U7LpkqGCrpqeZihcw8NrvzCo5XHN71vghz7PN95id2tCDY16QSzFMBQa4EkiEtkCewTrDe9Q5N58",
  "key20": "emUPiDru66LGRnYNaBE87AQ8o3rgPFwh5hTGbp2Zk64YWiYQyCggEDGTZZm166UrAo6P19GTM9RFenYhwWTKXnt",
  "key21": "t7AxsBi6BWET5QsJgRZrj7zMcGtrp1iMXdZjbZL27dDgeWsYTJzC3cVqVkYF2SSb8LesjWHLp9YcRAgb7TMRdEm",
  "key22": "2tocXyRoisJVtjVaM9KFkcNoSAJ4uirxz4Tttxm3XHPs9uGk6UeBy18oNbrNcNU11GdVD4jxgouAx9GxPzZaP1we",
  "key23": "gfSS4WZUMSpPSfrc3cscaxNUiBsVhmwzEZ56XehmRSYMVq1uM1arJARQoziXuTYhM9S9psQgLeDCDkyhLuSQcws",
  "key24": "y96gY9HJBkf7LBvdKNKGTVjvRs3gPb74QATWTHcjUmwwUpTANgbccyt7ZFEqWVmkVWxRcJvwcC5rVqCTGmbVCVv",
  "key25": "5wWW7uRpx4Fu6gfLk38xCAkJY9Z3cdr4c6QJmSUmrXjRCDGDRqXA2NVtN2UpQ76ubz9k5Fp16RMZwUNxzwKUCnC1",
  "key26": "2iCAktbJ6QQdpkdDs3ah843MxuC6gc6V4DsffbbAz28Enq18W4f1XCwfCnw7NKZ6cLAPteNYGVuXSNR3x63SuCRQ",
  "key27": "3ivkvPNMwJgTbFsRyEe7vfRGNuBYuaUpHUKgQzqVMvUWJh6JifCt87t4AWdSNhsHKhCc8wmKcCKBV5EWBrbNB1Dz",
  "key28": "55wijdGqGYaGBrfjiQkm3a6Rdy9fX2EncCYncYfe37NrYZtVLx4ZZHseCpEBM2r93ckVpCy7DZqWX3aBSUZNqNdc",
  "key29": "2Ky35DrpdSYkz5a7eLjSagN3bnUmG1Bp1A4WBgw3GWTWbUUMLWvgM3698qmA18oFV4BKFQH8ZdszK5H6o93Y8Rwh"
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
