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
    "2fyJUWUugSeWfMmpksWuRgtGMQ4VcRSEfE4hj3yog3zpA7HD5gqvTPbZjXYVXrXtNhhQAyAthswkd6rK5UcAEQ8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CW8TpTCD8NeNgA6GbaaJRbqGShXsxBWdLHupxn7JpyYfjicD9Rrmzky3qj9X997kEBxDbGkWLHvGReo658kQMJD",
  "key1": "5R9mxBTLLh4jv3UgzxGyxVyowp3vgSZUugNToCyHsvmtmhUDpEuhQtiMTWGLjyAMnzBMTWLFAuwTvxQe77a6wzGw",
  "key2": "3wytagJyr7yEtdDeoACUWq3dQvsvdL2RwAK9W9HegD5Brf9DZJ1N7bdf4fKrZFAwX3J2EpASXcwk65PFYqqYmYwb",
  "key3": "4Jds3BWJHWVEJQmNCDrZDFh4Jt9zGeyQqXTcD5JNqAzRGE6uW4F7tXGTFCAkjqs6mJq1HvA5GzENnWziDVpTmgTx",
  "key4": "HsGWQGafdPfAZRv1RrkYn7yBgkiDUyhRKMHoPdG7GzSKUSEAPTBbbwAhUL6zM5sCqar1Bg31VAw2HCcTj2d2S3G",
  "key5": "6SaF28RbbAveJSEDLweja34YDYsAPnKg88Zah4NJaMhxp1fddHZRX7Yti6a6Q1ucQ2suhS1qWc3jP4dXCdX7gZx",
  "key6": "2wQwRWVQy1E7Fbvu2s6wBYktVXLQqR9xJRciNTHN56WDtk6TB4prU76b5oWcZuwRDtqxg4vzWxuLA8FZq63THcUR",
  "key7": "3pXkh8fEiekXyGjVcUaob3txbJfs369kmNpfRFzngY3FhnzxL1rEdZWY3vF6BCXrfeSMNJzYDXKqnPesqZLQDmEh",
  "key8": "5KUPhtro5MU4DPz3qtxF2c3vmcUTMfEx8WaivRkcoXAdVdXysrLua1M6S739FW4xCjCfuuyefRJC6AZeYSTR8N6f",
  "key9": "16qnnUefPmac3yjUYjaH3LHSNuBLnxbZ2Lzhd519os2kcskA4no9hidGmJZm2meBixtwgnCSLtgJwNbgHZDYiVM",
  "key10": "38pXZi9mw2Aoq8DQQnX6ivji7rBs9fx2FFPzqirchjVhNHWBZkRXPYsqdenfwDceeu9zuCVsctv9BTKdm97HpxTt",
  "key11": "FPVRnZUwkzwpFr29xEAHXFuLxYTTMBmo7rrLzDTHT9accqG1HbySjd2TSNqe6XgE4jWUMRZA6mqMUD2fZ6v2NhW",
  "key12": "5PKQEXpXCGxxKsSXHEhJHsbWKSSd22i54a63LQqaVCNxad8M15Fj5i4c7RQupXq8xw8XdGmHu49DNDvkJJfuU7P7",
  "key13": "5CxqDT2Uk8Ays1GrQj9TYfHyyd5yq9QmQkHM6sU5LwEA7vDgakk8GKCPm1tG77KwYAVtsqjUKnnAQhXxvQEdhnaT",
  "key14": "4Pevps7ecqAtw41bUcejyPsKUy87XYCj4nawgoSqMiEXLRoReFLiKj9ALWkKMn2Y8EH4o5hAiAQNtboKS2Zzq9zw",
  "key15": "3NfQQSBub9BHJixQasuC2vBn2jZYE7geaPzMPehom1vS31EZmoPAYdie2FdXCxEMh7W3MLZmHV8u9wngVjLho6CL",
  "key16": "2fXNTR1ExqgDR313dSNak57NhPi5K5uX92HbLsJgB5hxCPEyaPzJu5GgX1dfjvdG4STKFkFBst5P7pTiZyRwRSNc",
  "key17": "2mi2KWmdPWQoMZ6u3SiWESytt6mfFrcv5Z7eKAgLMcMQQmPenatCKRefsN9ETJqxcK8AFVTHcBMuYXm6a25oANf5",
  "key18": "or1szVR6EgaJWNFS1VwXpo5e75e9VBVMQDXm2fvCrNTptQRpoqSUTShJtWrioFaHov6HLWLWYTv1VryVnCZ497q",
  "key19": "4WBqJ1dFyWJsHLJ4zy1CnsmBFZYtXwkUswAB1n5j8XbGKpnxZfazSbM8RUdvjhb7NryqFxN6bzqMNJQiGB6SXnXs",
  "key20": "2MPp7Cu15r7BiuuEsj1zKNTkC4iSESNYJnKUMRxUtP4FnWYWkG13JRvivQb2JV94SbBpRTGyHTBwANecysjuKnpS",
  "key21": "458u4NMcKr9qmomnQfXqJf5R5WLnUC5FYsXmmt6Set8x4u1TNsD15YS4e8jrQbsrZUT9hGL8HnJpzQhfVLVZNn3h",
  "key22": "48T1k5c9YkqnhTeeVB9E2in137LuFduagWz79EUg3ZuycHnaPWrKyopyo1BT4NoutfvWeoPduf8jVU17SHNGoNXw",
  "key23": "4CYRErPJ4Sbg1iSoVEejdUcbXFBxizfQ1pwRnhwQMH6LtmsWfD5UErtpDLzkxBAbJk8b8ZDStnQQcibFdiV9L6gp",
  "key24": "5v7tuFu8X6bMYTfdTwyq1N6dWtp5o6D5cujdB7XUMfQioXi2YGYBb8eBa3JbtrwgNsPsYZcCBgQuefkZc2mTJYCZ",
  "key25": "4aPGMvutobL2KTz5SJ5skkY2ULH2ssJhMUC1oWSezuDSyaFSGy5yX8rQFagDXYNUXYnPXEt2xso2G9qnzQa35Vm9",
  "key26": "4KDj2WScNwatdgpSAScsPNkakKjTmbDLfdbfCWyxRtFYoT4iS4Snv6sVU6YA5DuN1rBiSH3oxJbkrnbj2GVqM1Cc",
  "key27": "5Eq55q9GbQUJjxisY449wbCgfXBqCPeJC6ixuGqfXejwUoi2HrLH8QQw1bngS2vb8TyAEPM2Sa334vaBDwoMYo8N",
  "key28": "5AWuxixyd21qv6YMfqRfw7nUNKRfAsFjSs1gCfiKFzqC7gLQ7H1tJvFR8Ut12Jzyxpqg1577Zc693RULpmANhhss",
  "key29": "2QTQaif4d976Rsgee3JDnLM5nA6SUiEuMEdV2bJyBJYMbTTmoUu71UAVBhUJbWJ2sugC3vxxdFT6Coq3mCXAuE4d",
  "key30": "5bmja9ePXn4YCEK8ap8LCg9q94JTkkXzMu85M8b2Tu4YytApPDm4VJPiRzLrpujTrDL8pZsuuBnCxA9PLUbVkaSS",
  "key31": "4QKKd31TcWEEh49AVySqwVzyz9PypgFkBSsUSjmpZaFbWo5uZM3AahKX9Stk6vSVTpBpHTzRLC8wzqqKUstGQRLd",
  "key32": "4hFNoFWK9dLSaohUKdifA62qGHiRzzZkTL52PoJYBY5V2jKeYkJdJo7fXDWPdWo8k4hmq7AjdgFQ9qPsnmzvr7G",
  "key33": "228D6QE22uiBA9YddP2DBCwbcbvAyyUsDWWACdpX1aFHs4Q2cj8FRPNwGWPrNkTUyXbxnFWMREKd1nf7M1gyr7yb",
  "key34": "3WP5QwL2UzgiPhyBiAiEBmrwxrvtcMRZnMGLabyWvXT4eMz79QCeebGs9BrwgJbgv1NTLkPfdCSQSQaxUHLd7cAm",
  "key35": "2ApDuPG72bY2QTqfK2dVoUjXCjpTc1aDaFEp7kSxQHJSJyDyvtea9rpVYDeecXbcyJ3AkBPt7GzJ86DddZRXvpfj",
  "key36": "hfKb3xgZA88zDbPYF6JHd3m8eqWncocm7upmZtMxA2PpFPiUaJDUYN5d1yWJwDAxbzf5FizWccht34GTw33Z2w5",
  "key37": "5vgfJaBco14QYx5oPEG3REtE9Ux9KM1Z5JZDBwtDrbmEdFYjQqjcrz6rXNcs16zScxhja9hD5phWhiXzRJKqAtWQ",
  "key38": "49FvmtyBX7d7LwXQrqg3WtBAe8w7w1K9c5KwgSDGNdhAgQoKwq5EyeN9jBs3R5ZjYTnm5Frm7tD3Fzb9m4QHZRKr",
  "key39": "4vkFypJ4RLrMQzEaP2a5htLxRAch7ZQqMFG9FnTktQHAxQtXxrPTtLNKPqP3DUkTmKPpjr2oBiHC37s9QkHd4uYe",
  "key40": "5iKpy2LbtuSthij7CzEfN6cQczmSzyaRc9ke16hrNH881y5z5CTB7rVrJB7rSLnToY2MA3DFQpbQmfJnoGqG2C6h",
  "key41": "5kLtR2wPJgGLHKLzx9qQNGwAXV8rJVB1SaGVQwDPDanQi8jnAqUvVbU9pZXUUMsbn9GzfNAfsjD7R8hteLUXMkdo",
  "key42": "29GW5xHsj3tkh2G3qdp1nqknRGnUtBH9oEsBUqYmKbh8dyDnBuBZUeYQzLx8TKGTMLwm5tp4RT5fm6ZkPvReudvj"
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
