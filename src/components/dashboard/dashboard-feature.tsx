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
    "42VzDxLN5NmeZQN9yrzGUWydyuTmUR7MzhaGGXexezz2eQcXzawFQ7theYdaqKLwYvwF9NunQSwkSKG2bGDAu7QB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RF4TqU4kckocwmf3F2o6zy7UPEVvTqHtVUUj4aG5sYjAtAD2jYfVFLx47TNnLiRVP2ywhc3mhhVu27V6iQMC2ZG",
  "key1": "2vNh8ZDSTrbYATPqm6tpkSGfp9L5vU6ZUsVt131otU8N6k718x7EFi9See7apx1hTUqRzJwD8rAci73CgbA6tuvS",
  "key2": "4dv6kep8Nfj3yh5Fpcb5RoBXFkEwPN5QaCaL2T6PrGWwXmnix1VSmv6Z4gBtGD9HJij63oTnkUKWUnur1nanvH7T",
  "key3": "41uge7Y5ZPTpUfUmVZQnjaaoZXmMxybZEKSzomUomituzUAAYzk4rvHNjVufDPyTbyE5Yv58FNHfvDxS2CU53Hy7",
  "key4": "3uKV8vzqhJq9zFdcirjQnWYsvs4rPDGudeH67K6KiJFCZhFScXCErYGrEbUuLpUAEtKAoEnG6nDMWFwPFJfmBYyG",
  "key5": "2X5kqqQdpjPze6TSmSDD3AzQeXfGLFu5tcDgjujDbWB9xyjMDed37nT2nCZkyXrg4TDqBGZ3dP68xb5izbJJAk68",
  "key6": "2NciiP2SFV1mMBFMoYt1ypPHwddbtZ9awomxkX6jgUA7qMwrLKkHLmCGpMbonWh85bCfVb2tRdmRUBR55TbMVtDf",
  "key7": "2NnmrxFnV1F6vkUDUeVqChA3UxrxTp1FQs9soauHdWc7Un2Qu1Uc42vTSrLaoaeMnJu78cr7fTSmsjFanwsbMJtG",
  "key8": "4kRf9KkaZvrbuBjrKqnCvqerhygkHhaQYgC2oZcnbvxFsFh1TxYMktCSdG9rE3TitHxEXxh7gQp5RYZuKmjB7ZUa",
  "key9": "31jtzmX2nZpkHuD7gTiNdEW9vkdA3HwmKACNahRxUb45b7F5bqV3XX39P74sXU6LKmKToHo8qbVqARkXp2vSFtcx",
  "key10": "36vSBJFaHc9JnzjRxZ6ntgmjb9J8rtGNJP4uPqT3u1KYJPxyZcCd2zBs24br5bgDAtzRo1SnN5ZUuXJZ3DWhxDkT",
  "key11": "5CibR169vnZUu2dnhGuCKeGpB2b2zZsmdPSQjXqpT5pWvKmqzJKgSi3nS4fPiMcGeungb7CShYFtMBQ9CkrqdQUp",
  "key12": "u6E6MmzU2q8quhnCuRnrSjezqkGdhJD4UBwYcHEF1rhy6Th5Ujc1FFqVJWmzRfKZF6W2a7f5Jqe9owTbuQhQ241",
  "key13": "2MzJybaWszYw9Q7ToWQKDPdugQVNNfKiTvzmK1iENc69oRbCL1GhsaiqVRqddQneek75LSvCcK1q7D9NDJmyEy51",
  "key14": "4TVXRh3heAWMY8uNSKT1YniChggk6rXw6KMVtKMo89PbtqmEuLnCmEwGytfyccxcmKPHTVyf4W4vbatbNhVVBCuo",
  "key15": "voNfpqUz1gBkKsTdvKQ5VrNtD7tQZGWR5fgJLP83VtvwK45kQUmBNmbNyeQMMrLt2QcNcCrF1NdKZRLoLMpSUFV",
  "key16": "LRF5D3HMfVx5gd5YBaBbMJVtksZRdKZL2Njiz22MSE413pm3PtiXTBhYCvvQT5YXy4zNQq16TisFtxcKfUePGkC",
  "key17": "43kFFzXuwBivihduTFRQyWXoP8te3Yw5FQJ5MhYSnWuGUYsq4cKtd2GxbQPoQQUrDrxXxrdX4i7omeLByjGsJpSX",
  "key18": "Bajx92sDSCYrJ4zKKhYCWzpvyRqUvA9A5eSSK1psH4kf55zHgNMsNuC88BRfdBrpFPgdyjXzhGEiLCmB5HoeQfM",
  "key19": "4anWmY7VAvEmDaz3GYq5VmyDK8BtJHTDaS33DTo3Dw6Pnke8NpxahwgC5cYUGV1GmEQyS87SVPwEciQJXakiY2Gd",
  "key20": "1Hphn1oDq1EHNwrHyXhewunUhurWPWJovkLnvzUNkmTj7PYLhAJTZjRunuPsThgLVHvLUhGemoJSXJUuZP9HdgB",
  "key21": "raCsHn277SyTVQL71325aWD3CuW7vk5cgrA76dBQHaYDk7K1p77qxF2sJmGSFnD2RE2JrXKqmxkFKKgFCGumdBo",
  "key22": "51MXahmneamx7kkBPrpdhL9BYgXDjvS3uzDRQ3s4fr74g9AKNm5W16AN6SjmNgCNW4zF9o86mUepafp9X5SbM2bN",
  "key23": "5VSd4S3x6j5oX1r2at8FeiQxdf7rWtxRRkiWqEyUzeucroFr1ZRgBmutzcLBZBLyEmbwWwnj86wzM29QnoJ6pdQy",
  "key24": "5BJHHi7VTpfudF1RdzghGfbtVQqXvoXyZ99jkcpPsSyzyCBazobYtKYFhiWw8PC4WvEgw2jrHT7C34XN5S5jcAhm",
  "key25": "41MoGcmk9H31XZHkoZpPebmz91NpXiDj8Rki35GFirSC4GRufYoFPfEZBmbTbHzrr6rMP8fGxFBTjhFoYt4fyRyF",
  "key26": "5KYrGGJtw9ttqgYJMY2EKjYBVd6MEhSKViQDkn7EqsYAz51RmPugq1MKTNrm1F7EejtWtFksfi177VnwPM2yiopX",
  "key27": "3hrqL94ZQJNFCov646CF6TZTXc27SEtT6FDZ154XghCDJjS9uPkekvjQegjDRC7AMW5QKDe2XmxPC5ukgpuQ2Ruw",
  "key28": "4nDGYEvszoviincr6nkeHRXNry3J8zjXdxgv96eByTMogvnYraQ2dPdnjrfFaz4H9yry4rpJi6TDTTEwjdyfQmuj",
  "key29": "5MYefLrhJsJFnDdPHmu1dYdAgXiZ1vMAPUAvXks5oJfjAHYLJWV2Da9dhz7yZcWX6uLfWKthyXHLBKe4ij71ojhF",
  "key30": "3yNWZuJN35GyJUxE5ia1HVnE1MQ6HcFpbLxDmH6mmNAdXdR2k3D6d9it5BqjPQgsq5wrJtx7skfYp7TNiUkPeUV7",
  "key31": "4ED836JhDE4CagTE4tDB1Viztbqn8LAsNU63uCVnT7s8EuvRaLfYwiL2eKo48q5umkaGuGxkACxgHdpWXprQCTnQ",
  "key32": "YGBiNS3fyPLKEHRQUrF2QnEjZY8SLow3CHZQdieuH7Pz5nRpyux3pyPwNUHdRuHrZTWzyFJYyyY4aXmh12sKtz4",
  "key33": "2PtLzBkiyx5EnKth1VaNpEXwz6QxL3xEbFxnJS2LSCQCfNhUVCsa6ML2xrfFLgRjjQUhRyqKyySZtNEa9ARkL5dk",
  "key34": "58M2MkiHxCCc7pmJEQdLMVtqPTxASq1gFMAwLZpxKJqb65o3jh4a1FYpDsW7MmvTzECQiNqemT1dchZNDAKC45JF",
  "key35": "2K8JTrkZTA3o9ucLpTcfQUU3ENrXUVEkWruQ86aQaxQWnSPV2LgAotbjBJNXB6Cy9grZTe6HJmoAtUACZynsXBtc",
  "key36": "2aER3GwK7aQicM8oUwgWAD5Uih8AggN2mzrX7o15ypvBEmqkemyT562L1x37L477swV2TNnuKmAW7EKjm3q1srYT",
  "key37": "5aRs4hvDoHSzfHL5rfxSpPXnnvJs2tffEQXHm7XYsMQZJpSxPz2VrLq1CYiFY4bDvUrSDxoM5kG6uHDriSw8fFMP",
  "key38": "wtSi9x6eAq4qFgu9HnfSWxDu8vBbQzpMRzwjswDr8T7GJ5sSqUwHwchSR5wheJnVxxwAhQWaFEqgnkwPpHmgV4a",
  "key39": "3LzE6GdDPJDx3YytmsgAHp98KrH1wzxvnjKx73CjELYiYYuFZMKuDo8hmJGqpBXwA8A63fzDsrtxjMRjqGxvDZrN",
  "key40": "Lbu3mwzcpPFmcNfe7h3htK57HpToNLSJAUksS5ZtkeMRtzGp7qYNLWACnwyQNPRcj2FZW3e1B8vba7jhFdbhjA6",
  "key41": "54Q1JKbY4qVj243g28JwZiTfZJBdScHYmo7Nt7voJHQwhwJV8hNs4Ut3DYGLzcYDoV5sNJH2hAKUL3mht6eYYe5X",
  "key42": "4q3atfmBhGBsdA4XbdEjAzZ8oJbsD2MGk2fnnC327cj9AwM4qqkDAWrQEX6wHGmCLKtPn6CqJRGJHE4V3stJxTqW"
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
