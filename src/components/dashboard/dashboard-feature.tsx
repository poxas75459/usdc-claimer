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
    "5PmHDWVUNSq67PPtYpDMz1BDNMuYjbuwUpr3mXBAD5y38mhxWUGH8HR3utd6wgAKsxpKJ4AkkHYUeLQJAEjtKEG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zv6dLJVjDWfo8iTkVEeV3ydWxmRCGXx9eGhkhkiXVwJNvMGxMGMwVjATydWLmiHSes8GeHufyfCAt6mSat9EmRr",
  "key1": "2q5bGzQRHBcN4DM6HNYcjzLesyqPFMHqty9uPGPYr99nDgVnGn8pRmzmvYVVc4pVYGgTbeczz2nJ3mtkvM9AeaTd",
  "key2": "4hxTN2HYWZFgvioqfCobkFKHj7TVdi6Z8XtfqhbNzhoRhi45nEqG7RnYUajPYKwjbvQBgVAbteG7ruhuJJwGF9oe",
  "key3": "3w6sTNHWFzFbe1zavXJNhDDjMjSy52RGxVvpFZH7XEKPWCRNtoeLoFdMq8acbMoaH6pYzcxJ5CNsV1uD9zGYQJUW",
  "key4": "3zhauc4WT7TSwABKWgbNAyCtdGHUZncy6cPfByHrMvYm9JeYBSJTsYSNnkDjtpvH7gRFB2H43P4TsRBRegAVEnd",
  "key5": "2biabJULCWw86svhVzsPW3Qyca44CYAqBffSixun7Nk8jKFeXSmtWJihFwWQgYQKYc7BRt5HTGaQzmbURyWqzNn",
  "key6": "Y1Wr9YHrTt1X6vmpWoXfiTs6eyvVfotpVDwX27TVkt1tuBD3a8oD9BfAV2Nh5hcggmVKNwBEniTiTjULLHEUu2N",
  "key7": "2votN3MrcRowrf5MKdBKEV6XbQJWopV2WozUr6jf2eKe7NsDeD7H2tvAeLVyNAJmAeX33TNWbZhG91UT64A2ySzn",
  "key8": "4v7Lpifu7Do6tqrXxvZcwHVpmu4dQCxGfsQT6kcxPmn5CDifza3zFw1tbpyVo1smggkeqFqaRyFSH7r1CTrseue9",
  "key9": "52d6yeXNoyYmAmuHuVajuP4obq1u2dtg4nDqJgMvBD9MybapPbZChRuMt6RedUSN4oBYrAzpZ5iyeBGYQeX2hvic",
  "key10": "4hreXa4xNcu9F9iNx9km8bsVfNEETh8U5agDvEpL9LPZ6BfyGjYyezYchFvCimXPG8BQ9ri6xAQQB7itCvo66JS2",
  "key11": "28Qt9tgkDnPBgXPujzwjQvYFWjyuoXuc9vc13f2LZw23yc5ouVarTizZBWDVH5i6HZoKiBxqYBRAYUXziQTtnZVf",
  "key12": "3eVSS5zAvZ6GTUPnZsMpzvMDkj7w3e8oKPZbBAacDHMktHUY7xxR1aFrFHB1hVp7ZHy8t2f1CX7vtCznPUcuZCZF",
  "key13": "5QKHthKQDnqukXwCWDvJXeU3JpdJUMqVJZiKU4KzYsuQZ1BeBb74ittfpeiydfX7wqMWSn32pyHnPmohk3thabjg",
  "key14": "ZJunw5NQVRxonBaX6yNAotD69PMYeBcFXq91mHbA6nB4aptcstbMijcFV9CqLmKrAzKS6YAgevJV8r36CWLreGq",
  "key15": "4VuoMsFhkFtXCwjjAmE1cSgsBFNFjZeULfkwsJoQ3xyRdqVj4a6shuHpVx4sZEdgdue1ptSrRZveH7Hun8BKSk3a",
  "key16": "5iFSgALmZzP56nCKEUUnmATKHLVqYrnXP8HxcdvaX5y6xPw1JYtczGKkApKKmvSWknJxKbkqY75Ek6tZMJ5nk1Xp",
  "key17": "4uD5SS4FDmszBX3pFtpXALWQnpxuusgx81gjEMtfKxrhVqFZAxDeC1NR8s9pgV1VdLm6TVJvSHbukcMcwMRzwVeW",
  "key18": "5N1HYvd4aXRQfNK1ZaXWPzFpnghuxPkYABi3Dy9stmpmZ6YjdqGLEh8uF5zVzJadwbac4ppdmtqFBhVvih5jWMzc",
  "key19": "3Knh4ASe7E7q6GCX53otEENbrnJBQgMP8buFgBmCfsGGk8WVjMyt3gd42aka1nZgdSJE45huvkVfzvh4as7UANL5",
  "key20": "Mi3JwRgXRPzUhB3FTKvTbQ5uij1mGPsVE8r7bsqspgohzZRgBqbdGWg3Zr1huECbWaDjwhtnMTBQ7AiekKUoanZ",
  "key21": "4LADrKg8YhgTtxqkQubQM9EUvi6KtAV1VVD72Lkr3335Rv12u2huagREtfgC2JqN4b9xtNW2ptvroY3gfZZLwZzM",
  "key22": "4dUuary5zU3AL1UDwTdxrYCWjax5FrtBnGyjUopWTohdazfBvKwRdta1LqW4Bqrc3ooaebQmnG8zEMAU1mfhuL3f",
  "key23": "348ABVkwxBJM3Me2iZiE7vtCEkt5r9PXUPMTngDUUj2RsdimuJcUwVJe4envbFaCgvxsShZ97FJNJV9ud5nnJPgL",
  "key24": "5o9HrckLHcv29yEaJqmd656ku8fEuAkSmuCxHG3zWRiRpZ5YHBHjcoBFNNGGhFZV7kBwXv1gsisXRwaW8GBM3s5W",
  "key25": "PZeaQxXfVQPCC7NxVQCfLUfMs8iLB4DGcEg6aZGQR4CqKP4JnRq7bCncWiijSbJM3erZoxNepWhGR9Ecim2tFf3",
  "key26": "2zaMJM57rhtBoRGYW9TyCNWv9XuuDYGonVM6d3Zq6Xi3YZiur9kPuPo53CGddznK4RHxZ87C21jtnm6viHQhbivC",
  "key27": "2QJEFMR3Ara2ySDQUXGtR7PeQXVn3FknwqpLig4RP5ByzCdjWTycVu98S6wA3ZC2LpWFpvfEvXoVf8wKcBVEUAxG",
  "key28": "3Ft7aTzFMeWUWgSLJkAtYciffmSnGMmUkwMzRLgaWirnqNXQ5zJ4sfC9yrDDWiDGu96PmGWFgLjjBY8ZfsE9x7xy",
  "key29": "44owxcaSq3Ctqu9uMw4DTrDCjjnHMFFLjrxdS9DUHoN8Kw69TmY19bggD6axcix2JRhCy9gxXKzfQx6kHJHtmZDb",
  "key30": "5EN8o64Wy2iuFDzB5L1mL7CrRqSiFnKu3eXt3WYX78a82z1vhUEk7BZAovQNPLfyNdXCY7QuKRKbVLZDiUKx219j",
  "key31": "3DPQ4EjsprfRzSRuh4jXuJ5nRwbawsMgWbB7K1zSUd9J56dKHKmjHDgpPt7MR97SDWTHqTU2aZqR16HuhbWtFJD",
  "key32": "2Kzpr9ucNkSSsJNutuxTbp6KNewfcGpmXKjBtrfdJhqi2bh3Tr2jmGYzWrY2RHD81E8ZQTckd2nwYcPQnmWR7N6T",
  "key33": "3Fa58BMbXyw5aWjF3MTZESuUiAKokVgpBRDgMpzPqiNQmHBFA64gUxtVn15c3tcSGYQUeei5b2Fk4pHR7GVitqR3",
  "key34": "Ft9AhWQpZdk3J7WMEyArnfFtNmZwDK3PMrse3RP4vYPER8ro9FVPkAkPvDwGN349jgUae6SkoRukhTuAQAzT3mf",
  "key35": "4oKJS8QtnvbDCBjSxn3wERgzBKin9oDBm6DNKCqXki5MqphJtNtpXjFMnkC4stsBjngsmD3U8gRpgrp6mErrPL7e",
  "key36": "3oJL9sNQ7ezfM1fAuzCt5dFxzag7YEV1bZcnhdkSGPmK5CSSE4JfXQbia659qp7CUNzwjt4Qwg33nQ3xA9pyrzaq",
  "key37": "5jFaRyuc5D15KS8NNM1b9kvLPKq933QsUaRierCAbkRnpYcLFJGHgdoVtcJihFp2cHPRxAabLnJfMQV3KfMkazwg",
  "key38": "36DVycFvd3J8YdAi93w1ZAS3VH8PynLtVrmZzPBZEopZB38d65VNx2AqYYN2aBzdoWSTHQYwWafRasyDV8UuSGjd",
  "key39": "5b5WF1wJr3AuVrPauHXsRvZtoNBjn7BJBrrhb2Lkozm9Jh6V1FGswVYyTb5fky5JgU5pe2zA9WMsMpdvv5wSoQ4u",
  "key40": "4XCRS5Ah4uAMAXNeTr5HgZ6Ewfk8M34vMSK2mq2kAuNXEbzyHKixFBCGRav5eaF2HCamNRp9BSZDcgL4DMqwDv6W",
  "key41": "3sAQsgwd2TkifAoxZnXFExR1ZnXJGoTjWxoiDhpEU365ernca29JWqm4ZozqQPPrPVFDFdC1NJ5YddPGqtiqsVjN"
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
