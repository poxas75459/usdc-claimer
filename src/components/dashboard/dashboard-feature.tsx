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
    "h7Fsd9QzQ4CJgaJaVwQ6Xizg3n5RryL3xyxPQsGh49h1JpkLteoYvMoiaPRk76ewz8QPMGoWAm27o9Si1aPPNkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J7sDADE4j398QWxVtvVxS2U3CMGrNe6urboZticufTQugmkuFQtwYnkg6khD5yDEPwHSB9zS1MPbtUuyuuvFFeA",
  "key1": "4mxtn1nVQH6WZ65UaV3J44XjNk1iUvS898zLqZknA2tivE1gtLkwkKvpyEaKnSDUak2coBiM4fCYePXYJmfBwGdj",
  "key2": "3Ttahw9L4ZbH3vCtWRhYXo9Q5nc6EuxAgKzvJ6ysY7DVJQTZjERn6SyTNXMbiLN1zgCaxayraHGWbBig84pqJDow",
  "key3": "3wY9kAA9oP1V3Xw3WMqtvJZEfPxvMS4V8DehpU3vbLYB8PD4ELxY5zWpJfRowq3DCpYmMsd2s5c4Ut9MrdGQHBYY",
  "key4": "4xNWzyuybpp8UDSQoQ88XYqDeXebFhXFjqr5pRFFpQqLf4Ae7DcZi9yRNLiPh82693GKbjPQJZuMUiCE73AeajPa",
  "key5": "hnHUTA2sJyUitohihrVa2QwVVPdXVVdxfhYSfYiLMMyhC9JUqSiGYQKuxcoY56DfEpnv2uQ6Xr6Gx3zeifU6kZt",
  "key6": "239L5EXCWMzoTC1o2oiDjY2XAs95DxUPHHQ2zCbtwfBntWZDKvmLibkeBW917ZkiFYsAvtvBS41aeCJWNz5QuphA",
  "key7": "42sBPMtuKs1QYimnTPKyrvmLrkGJdPTZXbbQZejkazq62PjPQ524pbcuktSkSXhxmXeeWiBviq3doHzHFQv1euro",
  "key8": "37M5Ni7uMK4ukPSz7NN39JTuPwkYX7MNNUGPoigP4VagXS4mRuQDkFneDpv3AE7fxnVF4VKHZa3fg5J1vvxgGWJU",
  "key9": "5DiQs7AERVfGTstQEWZLjHJvxQbh8NCz3ASnrm23rrtG3sURfutZjT526yC5cPwkNBzHGuzx7eUb3g6JBJfDxjTL",
  "key10": "EYp2ChGwBwHdKVShbzxibsbmbCEG7x3wdJAsGk4fqEx2Kr6tu2GsAHRCp3B1UXovpTeu8gHLPBN6ycNwxiYw8vo",
  "key11": "W7kQBTy6dtGZn6HQk7Nf3TRrgBp4fW6tWbA4oQ3tifg4vJaXmdWUhx2C3Vr4TF9obwJUiHMbVY5wb9BK6MRACRz",
  "key12": "eRK5uit7nCqQBHECweiVautiSa5au1KJ8qNoB93xggu8Zoucw4dd8TH2kyrzmUfkquF8T75X5r3yrGM3JLJkncp",
  "key13": "3mR9XXBDRBqKoGX9vSGt5VgLY52qJdip4XjUHSXyMtxSHW1hY8ZcSB1Szr7A23XevjskuSK96cufHoYNPkqbmCfg",
  "key14": "5sXfDZX7KBx3RaVR2bQUJfGWoBVAXv21jF7pAga98LusWCwpkB72rKCeWj3FyJGvRv2yrNescmNBbPHiM7s1SWc8",
  "key15": "5TN9hXTsRrseovxMeXVK3dwyGyZRRmdChMgMmzh8CzA4GHEUYX2vYvcJhgkZDnsTtaPE7sJwnFmEHXWy4fXWWTXR",
  "key16": "2hfSFBCDznxYRdAKQusZCJNeKihjPbTvF37TU8M4SeAopGbSuyhLJ2zXnVsocehX6njUnKdRt5bcpsFagREX9xzF",
  "key17": "3ztFy2wQ25EwsaEy6u25DRVRLiq4pfAA6LXwcPzQCpMNj68YWuPzTxDzbstXSTXsQGyf4TNB9U6551bRyt8gy7BL",
  "key18": "HpSwwfvWyNHhn1m1iNQTfCySQ2Gsvo2S1nypNZAxe7U7LX74FE9syQBjbd7EZRGpMs643cnM6mWv5FvHFfi6bHx",
  "key19": "47cLcATNNbpegvTp5pqBHGP4Eu986uE2Z7urjZPUbT3AFWsQPNZCmCx4qsFqfqGCu6kx4MiACAQigs9RHbzfbvgc",
  "key20": "DtjUFaCB1ebX8xHNB7sjaXjzKNhUpR1xYXc3wL6THeL7zsx9JqkE3rG1LQpmsEV4vL6yUKpPfsaBoKKsaykQ2bY",
  "key21": "5G3WyA8T7QqgNYVBfhBjf7taenYNtDda6NNGPxJkQY4nE9UnrBQyqXozsSess8LjTWGTJuwKdaBfWvK8f4EEfEX3",
  "key22": "4hHQcPv5QWReNRdMtGnfU9M684aNtYMAbr5Y57oKiJHsreGTmwjmeA4e4nV9NuqJoNfafvLNC7ZTNjAMTUMSny7B",
  "key23": "2jtWMrbfdtaVF68L5oQSNFWCjsfLis1fEwBYqc7RsFb9e3eopoyNqEnQdHKZkmeGEqdP6NhocNqsxowfapvUXb58",
  "key24": "3qQrDnqAVbXaPeGosWKBjv7TKPqCDsNTQiZrBLPoMB5YH8NsX7MkSsxYDV3V6C97xpbgX4oQnNPs3iNLUNret391",
  "key25": "2ALtudHTKxjcyiS3PNuMqLbFhVm5W8enKta2fWbYGe5aRgHzvZbMz11kuvXWEr6ES7FrPVqY61U4voFwjyf5GTxb",
  "key26": "34yX6dwui8TjT6VajV3CoGovAWcQF1SE2PNzpNBPVcR9n9acMy5MpHbsW9tvNaw6GJ1VoLzC5z7pnhpShYskpsWy",
  "key27": "4V7sdKdk7wLGQCseqpoTsiNvppbJZmxhatkNhUedu49aKpE1CDAxKz8eUUnPpERLTXu2VbfEz1W8EYtqxiUcM8bh",
  "key28": "5HNypfZRGgXAhvJfchMFQZQJQNXvPqu8M7LSYb5TJwEcDqnQFp1qbamMb8DebhK9WhLYT8jDksUiE2gVCweZM7Ku",
  "key29": "38v7h7ozgTLoSnECtQNFRMA9yEg7QU8UvVbrLoQqhFudnmnEm9RALeEcaaG4AJVb4jL3ZMVWu2sS6dJ4mQxnsRFf",
  "key30": "5HShvzkGj2TbNW3TbJMtn6yU9mFy2AqKWZij18JgE8G29drzmuyUyEFi7Xx99WzHvzu58pJZ4SsNcmb2q6pDCp7J",
  "key31": "8soX975EaZAKm2hhyXFjJmnktqD3ytzpi3JCbEDVcetBoVBDHqFcTnHhtpEi75izqB4tPRPoUCEwuyD7ajnKFfn",
  "key32": "5TFPBWbMLjrzKnP9uTuS99SjnnUEt6CfTTBcwm6FY5ACqDQAtsWmCqaHRWyyYMvDy5g9LBTrMC9pxEe97SkQtuue",
  "key33": "5KZNTtogFLGoR23EdT8UEBwhK9zRakdyT7QrbFa6WzW2ioR2yMuW5N628cmyz8SokioTSPedAvePDrnXe49s5nCD",
  "key34": "4bLXXc7LoFMJafsGHGQVs4qpJQdP7rNq1qbEjsf9szCHucAS7Wx93cqm9k5KL3VNcmDeduTEpaLx4mwdHFe13gex",
  "key35": "5cV9wyrMM5sBwdQbFGNWbtuagU8t4X7Tg5enebuk7m3U1ci3pfCHFxzQoY7jas8kFbT9ytUsLzuNhNAXVB12CF9D",
  "key36": "3qTFCq6ySoE93iNCKm1cRQ1LZgRw2ZeUfCSUbufNsC96zAxSABQWwXEoanFfey7bmFaAFwY17aaUrJHixELn3nGR",
  "key37": "4hAVMAWc69G7ZRtwrfHdFRB5KWuqVa4Gjj4XPuHbu6U8uWwQUhru6XtFf4oaqQvqotD85PLdaQgTdasxKoJBK2pM",
  "key38": "3mUhZqxcwyEv46CxzAk4pSKUZA6mgqSecii4gMA9vdiLdHFfPZPQqHubYFtYHGXyZdsGswia54g3Pn8HXaciHoFq",
  "key39": "4CWNEtVTds3fVqoVXE63j7EfCWfPTwkHd9FHCfjNgTpBzXufBKyUH5JnE7bnLyzDE8r1raTHthmqgWd8nYGayKgB",
  "key40": "3iiYPG1CTBbeoAQhgqn4mKw85nuB86niNE98hBihLYN9WuHWtBt8waBr4C1YtysBzqsxQnnfWMsr7Nb3xofmZsCy",
  "key41": "sTL8bAuQ8MMtKkSq7bUg8wmZF3Yr8BA6AJgkJnEdfnesmmsJ5ECjzJn2fqaKDjtKLoLaD3ZME11s5F6SkDRftGh",
  "key42": "MNuAvVSMJTxoVToacFPFeV1a2X9jgiGyHBhDEaSFcYVcBsXPS2GCbyXyZU1X1jMuNPoPG3SRP2PC3jb581dVV3Y"
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
