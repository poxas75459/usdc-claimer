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
    "xw41MjRnozZ3J6pdFVfE7RzJPFkj4y1ksNA8ygytNEHzazNa6BqfuENFFebJ3i2bc2j4JkytpghWTAUnsC7Qocq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kFF1HwYWzFRiCRqfnTRPeLGrZxt3jjeKtWsVrXr895qZT9TMLDo3H6BxgeDGTnw9PaWkiAfC2zwVQYFvBzdtJdu",
  "key1": "2TLEoTaPuJiyR5Lt7ZK7wzUx3BkiiTVw2Szrcijv9hUdAYJXUc5JzKBzjN6NKv1Q53JFBkbAce6KURoJKr918Ccg",
  "key2": "32pmLyFspTjnKyq4r5QYkW8ZbE4FPAyW2eBN9UMTwzD5YfAHZUdnUcnX3jQjuaZKTwAZqsttf4rNfoct2c8mQt8A",
  "key3": "5YpQBVT55ohyFMt8fNhiChYsXh4hwRcLHpLHfwR6obfFePshFh24w5zezG9awKQgEp2zvEWsBepyLhFUiVs4KoZQ",
  "key4": "5oXAJYieU1QcG5hB5QtXtDQ2FrCHoj2FG1wGufdkbF2iQMncFLxpD4GhxHS37NZbCHaufk18JXnCAYgcbFBVmSzg",
  "key5": "4cAKy3EQojiiyPXYj4SDdLyHmziMNd1RbSGHYJKVaU7e1t9aVBNh7EBFAzYnXuEvLczy5JS3cV1t2wMn8VnUW1Q5",
  "key6": "65MLe8Qm8qPUL3dmuo2k97PMGkK5Pb4Ga5TXntCD98GrvdYcoZaXc5KE8C95FJohPejBQV2pEAVGF8Ft1XrDwmwv",
  "key7": "5Tm2SMebBjxwPs1jViWWKsWCTEjkhhp8KPxPkofCWBSSyuiSoUtYTvGuciXoJLW1peEkYQwhjNGuWVzAfX6yBtvy",
  "key8": "4soKG4k6ftpxyHPzmVeegYamSS3FhJYVjfVR2FMXbCSnQv5b2MPKkYCEL9rupNtkjJe3PjHmJKyyBs4ZsjWGPRN5",
  "key9": "MVHuEUv72siCvBKe3o9uWkAKeWVMGTkqfM2BHA8CUexmCUCpXGHTdWHS5ffkRgyteHywfjnZndhy8xeX5RzfJXA",
  "key10": "5z28NYat7Doa9HEAdFYZS7VsfE7FAvb7E3N7eYCyPWmnC5r76t4FgKWrfnrEWfcbZUrK3Wpn1jvrtKbNGPe7NZcZ",
  "key11": "24nxfuGyw3ZLy2ZVeZ7WKu5MFBcTFwzBi9PuakDVjtEb5s7xY2Mt8x9JaCApnrEU11iFSfVtkPShARLcNRoiyL3K",
  "key12": "yfBTyupkp97XELkBfPfMvtQUwDcoeHCehJunED2oudd5wWCHioYkzhYvdFK7F5TR34nnWoM4g7ERTbvvQ9WgBVn",
  "key13": "5Tkmoz9eFUHgvj3gqabAPD3hDM7D4WvAvQJUtnWLQqYiAeaxk9kbG4gyHvzpqUuFgQv3H1N1D2vYJXAgfow4z4mU",
  "key14": "4mzzHwsELerkkiZpDt1vMDARXKCkymZmRhrD13MWQzyiitDZDYpVCjPHGtb9dNhzDx6ZBeLyCYrRApppeLoSETR5",
  "key15": "5QbPvnX6XnyinPvDe5Q18FbaXHWuazfpsFhiAmbGPWgFHorw2bGprJ69TRbNkzcKjuPSLBoHtDfNL9ZqT7EGJ1Lo",
  "key16": "3fQon855X6j4Chkt8YLAbCjK1cjL2WfLrgNVi8nR3snhkM7nGuggdJG3REvby8Z4FzRuCQqpCRWJd2uf4Vuridfe",
  "key17": "3bGNbmtwu8VUCP2eCBubzzhHpyhZkwBPfVz5dovWmjzVFcKCFrVLbJiztjeK15tJ9ULgZ28ZGTLXyg62rXk19XxG",
  "key18": "2uy4pw1KkLApukKbVEKexfV8MCDG2LgCmpUEF5r556mEwAJqMWFToBcNBjQ4yFuqxSDkVkfjLoJssBPSUt6BgHUC",
  "key19": "y5LeSnTG9efLiFSvYxNnRWYchzZ635U7fHwhegXf9smfvqGwVK3GFA7qVy7nxsXShrTMN5cAwM1tTZWTrYAkjt8",
  "key20": "2QME3Q8wstSzKoceL2bmJ8EJJUQ6zr2UdSK2WvingKwwcEqwKwezW1Q5ciAxccWpy2yEHq4Tte5Eyjf4dAVM5rVv",
  "key21": "f2we6LBdJVrtnkzobW8CwByCqxtupH6eY8xZYqAhgFFRY4zjpZsvnvwbWprzVV7jsQDrpzPVHoDz5mJtQCtq2bh",
  "key22": "4ZQkNQQ1UNq1f5ajPUREJu6DR3ZcRshY8ZL4HtxefW28hPMJZMsmzXcCnFHnMF19y2VVgWDHReMwvCyTvrnStFoK",
  "key23": "2Fxcjb9kvpVc8CcC4gVF1mmSJ3PSMKAFQPe2U4ky8uZVeAVGABtCGffnrqoV7tfNdaUyqyKj9MVBtaRyQSLsW6MK",
  "key24": "3JJ9gP612bTz4xN1As82nG42vh3nxbZfbm8AwzJjim1eTJAPTXiQPbpdBBDrm74fdxrGDeWiSRHak572FMa4m3Ad",
  "key25": "2cUVZUYpgxJotMywg1LtQ1mGH8qzQFbZbHeQDq9bjf52oPASXLa4wWBeKRhFXAezDzKkTHZSm9FGujxQsXP1z3yj",
  "key26": "2xbPDev4SBbz4dkevSKeswM8EKbh63v79ypLLRXg7bKud2Di2Nvf3rLztvXx9SjkQGcykiJytKy3w8WJhWmCLcu3",
  "key27": "65FyhaE8PqXZAWmihymzY3cdyZzcbeTXK4B9CWiyMchx6gnkpRCPMmCweg2sA7anhCVc5zCYRGFrnTfoyJf4CASn",
  "key28": "Nv1LB6je8tR7utwRyby5i4f2so13uGJBftbkAbESUYsLvhvrAzUXi7nwBFTX9KfNJqk9D4M5NUNRChJ4Tc1YNRq",
  "key29": "3SC7rqddc2HaogJN8f2bzJ7YoLC2XtCdLLTzW6Zry8QygQuQ4sUEmQRNBCtLN2NYS8d1VYzuz74HucBZ7UuyJB44",
  "key30": "2ex3L1WcYm31xBT9ojCkSPETxnBFQ1tWwu1LVbrrkYixXxN9qC55vJa9X4CUFBrk9bFs5BbdyJXNNSx1WYNYbr9f",
  "key31": "2qME2ZmhhWg8ov9R6CRN6iVHAKaRk5Dw9rBCNPbEFBKUpbaSLZmZezvkZi9nL2dSjPKCDVQPuwyvtugYiEto5GS9",
  "key32": "477adUVHTQtTVDGssriw9oNwBJwDj5D2GFfM3MeveNMyYWqnawJxqcyVzmkntbkZpKiaWVSdqtiMXmm4J9ft6KaN",
  "key33": "5516qENSZ36ZV8Jvyb2hfL7LtmJup9gddXBthYtxbEMcMBnnqn7ywAUaSBXBp3soPqpPwyUzvehNkDsGkgwHo7RR",
  "key34": "4fXWRvnms11NirgtfSkgLG9er8eYdLz4Nd7LfbJB4cd17z1SgkqVdUaD96soqdipCf1nPrXGHqKsjbEhnJbdwbCP",
  "key35": "2sG6zaFTvR7kqinSZJ3wWsYqg2n9MfYaowzRg2hmnkAL1mutNeaUDAw8csuDupUYnZK5t7G33rFaXWHyyKL7a1Fc",
  "key36": "2on9XNDDj1fTRtZz8NCauTa2sSHpV9frjXWDjBPofsKJ6yHsRcZrkx5BPHipxuHCPYS8VF9HTJ6AghPpBJ7nGJuy",
  "key37": "2bHrUbqidfgvDckTDUCPzhUqjS3nCphEFYydpBA89zBNuiiqvweViE9iX8L5YLcnQ3AqiKVeEMG7qeH8w3Ckn5b4",
  "key38": "aK9TMZFLEatpgX7oh7jVBhsWj7fTWvR989pg1VaZw8VJfzqjaS7di8RBN91UDYCT3HRHTEbgwkWhVuQr9R2ViP3",
  "key39": "4ntoG2JqtQa1KZZJsZ15KpmZoSTFbFeGpCfP9s1U9kGsLduqYt4WS45jzbLvKUUbNjCrRKn4edSJXx5oWkX3GRdu",
  "key40": "bRB7jWPXu1BTVjXk47FA6rs6Y8hcteEj1DrmS5xeYhmHB6g77ff7Zn6WzTJtvPCvCVmd2g8GR3VhtVFBVKz3UP3",
  "key41": "jafDZCtyxadp3g1v4uJ5Hm7bpekMGmjqrykFxnDTSX5ZubfqdZ1PpfqjFGQaG594mxnT7QqVW2hkTgVgTfQpaR5",
  "key42": "53BgtKXv8gyBMmbaDgpAeMYWExxbkjC6i3dyhj5BnTuYMgBGCB5f54n3SpQYFNcYJQ4MYfZF9vrnZjfaqFe3v5GL",
  "key43": "38nmAnNntJ4Bfm4KYt2C2MAENYwj2Vjg8i2r4PCQk9nWTNbCmB8Nqbnx6k4im2Xin1u74zRJbGbUvuWUjTDpxFWC",
  "key44": "3rRsn6gFuBKFrkH585JXBy5ZebQ6xmtE68U3jikZFBbVsGJCHVZniBVk7o5GtsujsW9xQLhmbdc1zRjMjwSXt6MA",
  "key45": "62bkriKYvsckuZgLpBkugmGKkabsUtnE5KJgQJ4ipUtbivz8LBxNHxCmvqy9rjJRDpeKsszvx8D3bo4bHZ3hjWXu",
  "key46": "LyVT7LPD1FuF9SWGpUexwh6J2o421WC2kdPTQrhTnPefWUyLSRSJS99S1vCRqFAV3GzahBX3R7qvvVHmc2ki8mU"
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
