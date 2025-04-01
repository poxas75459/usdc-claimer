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
    "QtyYKVsgub51aE5kJKpADMCp2ziP96nBCfGrU8TUN2KwuN5mYUsyRBfmoButaeWPv4eSnVTwF9FXJgYirX3cEyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XJfE9FQkFtnDAfDK14LvxvxW9F6dMB4VnWEwa4FBQrjmStDgFtHbwE4H4aXymLj3VmLMF3fcvyGk3juTQ1ndUaB",
  "key1": "Zj853MPzspgQpDLE7HSpYiTzeBcWnJzZka7DfJ2qApxzdXkWb64dPgFETds2mFxA1eWYnT5fgcse5E3yGpTs52m",
  "key2": "4ZqVsd2NpD6XmwvQ5T4NRsW5R1C7BfvfCzjH8AXynGY4yET78PvUYTPZRfaViKZKrFmugoZZ7H6S1zzaeZfAvhgE",
  "key3": "5YcXFmmkP36siySsSv1PYMGHKWEEytGC549uYY5fbAj3knphC226HyajfAnu5dZs3VT8mDX6BVJzz5cDLgdjp5Ph",
  "key4": "26a4DdXb4mWwFMko4ZjSQMqevxJSmPAFFz17JMn4gcpf3tTLs58B3Kax1aPLYcEUkiCm4hoAmxocWwChrgtGfUwW",
  "key5": "KTWHiWqgf7CvtHsCJtN6aLXPoKmd8qKqP8kM6h3GHBfmTepPhn4sH2XnA3vaH2aFT6fM8XSsHntMEgi2bSKHduY",
  "key6": "4YYjG5fcrsEkFUej528MVAjB6rgcT6yJpXo7roYvsP6wnkVFrrdZWGhCsyNZc48WbarkygpSFFuaypCFNYxHgynE",
  "key7": "3LoyQUHpMrVQrQHPo3N6MVRHEbMEvQzWAExs7iC78UYWUeoUcyjsq6xFaFNcRvjQbXv7hJ4mPPJdoYs6afthbnxt",
  "key8": "Yc8834aVZ9KzbCzsszBKRtWWVT6GFLADQCZtfwoSwfGcbFKeuayZ7oQDr64C9Vq9u53HiksAqWXF6GVwzHwk6bg",
  "key9": "3ZJgzUnua79pvhGyWcgG751auX14AS4adVDM4vimUuRoHg73c8x7XQjUFmtz2ieenbdM8JDRJrXWurV8167U2Vni",
  "key10": "4X59B3onQLR6CtuLMZ2713WcdCgAKbFMnzHhigVovmT5CQjiSbF5ixC2g3D2CUXEegiznZ925KMTeSbEAKqdXnin",
  "key11": "4CSag3H2rW9Z94PGVmAyExyopg1YAinKg9YNWbZwSUQ5WETpw1Uhi5DoQgrQCjje569riWxxtHuU7RQ3JXMNMd7v",
  "key12": "CT9oaBf9AVmxr94bQtiY7JgxekkLVqEWcxVA39bGJZycuBWHw4MHLjFm6HN9uKxQZmAzDChUZxSFLSwVvNXTSTH",
  "key13": "64kPRqC4mk96ZsBNCES6GiSbSTethFcwyLhCNMTCrEyDMTrDmkyVR4Q3mrjzFUQ5eeNTKg43FAyT6DKkk68MR6Za",
  "key14": "2ndH8E9ye75xyMZBF4QtsZMcee9KxPBHFCBKZhGjcJGx9hVySAtrE6p3CLQ9M7VBS4jyQojK1fjZ8Tv4vxfmQBRY",
  "key15": "4iBdjD8ckk2v8rciyc3PnVdXPjZp2KoS2GxgywUZTS9GL8HtitUpLHXdsQ2hJS9M5RxFrvpEj2MThKSxRQrRyZMz",
  "key16": "5gKxfHwgG1EW5vYZSHHAttp4CXGrCWrjwWmBT5DAShApPSPYZphL6szr3dLyhjfcQmeCojZcGHnKviG6t8TDz8By",
  "key17": "4Zhw65XVhX82Fd5uN2fRw8m1txaPxNF3d7XNkWna5KFpSbLGdKPY92TGWXf36dFYZARKSiTKwYvr77FVdSbdQ9RF",
  "key18": "4VsRXiS7yHALiohCPmxuy1P4o8MHRv8JtMkQvcSat8gD8Ww5PgVtofCrh2nJhARinZWkwFuuSo26bF27JebYUcfQ",
  "key19": "UpamXwc8CKtDB4DMscDjVxqphZA9rbRisRGLmXyTHfkE8pj7aaikj5xq8DotfMfPQM3xjysFup3gEgx2iHN6K3j",
  "key20": "SbvuF3NHQcT9v9zC6AiVZMiWd5Wf7Cpr1ezbid3AYVC2CpmqjSURBDr7iUAiws12Ej4Rr7MKx3SUNev9rzFJJo5",
  "key21": "KqxRCH5yUkPsJnbtjUjY7t284r43Cu13FS1a7g3JutHsmVYsK8zWsXxkA8iLsj39SnG6sPaFVSLHcZRZvEAQurh",
  "key22": "3cMV7yxDTmJ4iKg6kteYYyLA56J15xJaGaQoCxKiQQKdm5tzWX2eGhTPNFiFPFM3QkymUJwoAQz1doiYnwD21ubn",
  "key23": "3JnLsvsEeD5QbhurbJSCJnAA2oyjTiF3WU8jABLXC9LHugWSxd4rEnMRcCMUfX5PiyJmppb5udSEwBDSyhYrgptt",
  "key24": "3zw8JJ2BwwacXtLQhEbWy1sEMf7n35Xu2vWQvZF1bwkDbt9BU8DVUsMewfbD7qpfLuZu4c3KBQMwwcWgTiv7AkPF",
  "key25": "26guQXTWPiYY9hqNwsmUpCL6eUFMne9hbxvtfXJCeCKVTyniHAJuSyvRcdavKqr1Nv3scXypcHvkhBNEZWyH6V23",
  "key26": "4RaVvKDF16P1PL72t7GDxmnbAhrrvy7Qx3xWD6Bc14gFPJ36hVA2gtVWfQ9SfQzDe1mqho3aDx7dVqKeyGsDxQ5K",
  "key27": "5c2hGrniHQdhosNJeKDEWRPw57qJMaSowBvWvVnPa8RFCYSihUrssqABxSnRJLDSeb2CUyWCp4DK8is5MHtNZ7Kq",
  "key28": "5DuqUTsvyYNdZnkYoqTHhF7nYP6Azg4VM7ugTptvZcX7WjhdM6apospsJcmDXixDKg568VfAJtvr9zL2CdiBCnPi",
  "key29": "3okWuxH4qyKhHtDYToMqSAdJgLbWxRWFGk88NHgLSJj7JDJcZ9Z8Y45CFsLmqANyPbxzZQMfCdR4E5atRoyLGpzb",
  "key30": "3z7gkir7Us3MS6FEk8U4n6WQWKcHmiPeEYsrZuNAKUsViNJtJ587Q6qXgZJoV7XDiHbPTfT32bwbAbNS83Lk8u4h",
  "key31": "4q2jMiL73Htfe1NiYVcpTEpMWtmMt2EhX2BHdcWGXu3E1jDtz33rXowqPnV5QAh35AtSQFEWU1xec7TNPGFEjWJf",
  "key32": "3XjzE4LkSfMFKMZSowJj8e5MV2nkEi1mjTkMQcaL51iDm4vnztRAGMfABAo6LGQm5XwUygukKqVnCPz5vpaZzNmJ",
  "key33": "4pkFZpv81ngF99WYDujzoHK8o5uu3KqSckwuBioHxD5ZUMaX9CQ9iaTMQdtx26iphiPq8FyvEYkbN8iJm49Wg7KY",
  "key34": "46wW6EQdTgNKPrwrMEMAmziu6TQ7wPymMTsLcSr6PUkn6ydgcSVFqyHPkfAYHjppx6BTdcvR956gHEXJsh5iHEjH",
  "key35": "3sxnXKTVNFGvvee8PxcxtZVXeZvGMaPgiuWyYHoVj5XkMsTa4LwYsgX7c796C9paKRa5UmbMKZgawCNVUStCGi4",
  "key36": "2DKDW9Jo2bj1Td6piLBu7hPEFTnWtn5TH9Gdfgiv53KHxnnyjALq2AwRewLjgMFUE9Br5vpDNUosBYYETzSoFGPM",
  "key37": "2NEVdaNF8AnLRkhWRGBTTCy3WCtuPzqjePwFV3WvWiqxZf966LtzgK3xeoqnqh1cHZ5RWXfJpSR81x2hK16kZopm",
  "key38": "2tTdww9SogsD6gYMWXMS9HuKk2R1yyb7zGir4fotRezmjvVj8f7uhJEe4b918d3SK1NA7BSU4gxZgUombZdyMoqD",
  "key39": "4YXVt4pRCSVmAz9SJ3BmkkEVXi5GugNyXvJPx8ej3tNXytfULuNPjAa3HsF1gze1Lo2KmYMa4k5bpJJrJeLcjjmt",
  "key40": "5pxY6K9V97GStfrSRkb2LLeUPQ8e5Z74uSVFgLd69oVYgsFu4BfXvRsSkkL2gULywZetTmPN7TmkJkCtX8G2PvkR",
  "key41": "4GbXDY9o8RVxx3R88G1aKDTYkgrVRUTMnCv8KACrNskbApAwSLZHDbsBxQ1nHm7Q31kPyEJpBB5iFZca5Angd1eo",
  "key42": "5AcjUDztzB3RkFm3EV9BGGMDQWJfgoZdrfnqD7k7mMQPdhjDZkEX1F7LfPt6gTBsAtowSRD4GsrN6qfzkN7TNkFj",
  "key43": "42jjNDDyJHSfTEctZX8nf2T3714muwuY7Au3VgUxRJL1WeXG2coNnJiMSH2x9cNj8XZsRazrZutggXVULvYpmf74",
  "key44": "5qVLqdzdscAogBrrSXZdR8abeFC7daxYNSopP6Heesu8mtcbWxMSQXRUAxRpUxUWbM8dwjt7q4wZyG6rytE5YLmP",
  "key45": "4oCWriLpXCk2AZowb7C1hfk9gC8PNfp2ba1CupTXz9ECxxa8qPZiyFTiL37UHfwozT1Y6nAiPW26cbAkDMm6MgQW",
  "key46": "3jnhT9ejPr5837DD9YZWUdWRZJrDhJdGwvjg7iVwrCav7CYQeRLQsReYnN5YGcUa6HyuRTgsNtrXPbzn4A48rwSo",
  "key47": "5iLsZKonptW5CgD1JGuGSKp2zfxiSzBhFvZ3S5MeafdXvN1nZwExXzNB7j25z2bVtUrzPsAg9q9BPiGbNBFCtaWs",
  "key48": "51jydt33NUJ9sY49CUFvj1KADgskc6Ug3vegsQepPUqqutTCCL3ASoRUbX4ivQmBMiT7F6HDHF1E2eMS7xQC9QtC",
  "key49": "5DRDaEez38NZMbyPbWP9aWe8bcWAZ3qsP88QE6APpwiCi2GhBRvJzxhRKFLaCcYPQFUw2uwJRaqFNuKcUpxAwuEk"
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
