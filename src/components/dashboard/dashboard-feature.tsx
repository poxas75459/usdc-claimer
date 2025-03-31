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
    "5iuuRLpkY75eW2AnmLo6dk5txMwzJYD4j2yiiiJ7AoEGngEzuWdtqnQGBoXTc6BzQtQ9FBDngh4poMZsb2ioxS4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yVAh6hm3Z996ar3nwLu1WYmHmhCK1vEysWmnujTSPRDtcQ8DKHcFX4jC1mFuiWSX9g3R2uw6Ab56LmWM9Ep4tRa",
  "key1": "4HREdWyeRpR2zUEJQbRuNXyEPixEYE3CrHJj5Pj23x5PhZbgTS5cvHRBv2axMKdnLLGabLA7Cbjb9eFcVaWJtRGY",
  "key2": "3vRekawnmetp9v6fuMfjyApqjcqMBSRH2hyas3VXwZ6V7zBBhVL8hvQ4woy4Ddfk6EcePTWzG3AufbYturQPdmEB",
  "key3": "3ykLP6ta8e6W1UGzNbTuTQMXQBbG35cGCFtXNE6ivjjbxFHPqdf42Ho6YUhPidPo6BV4wFsJ1wDvZDNjqd4ZYEna",
  "key4": "3Ffk1sfX6Z6ko2auc9MuptjQ7dx8krZZ5fqy6X3ZotQaZcAigMFqS7hGBhjVt1t7JAbrjrNcPW6DcYhEAQ6sojF",
  "key5": "47P1K1jea7D5hHsR1PyxRNRWedwwTeropkAqgjmAMaQoEd2UncCbEfWYnSTuDeEfFg7quNA42mZp1x8qqap4Nske",
  "key6": "Vo6feZJKHXusrkRZxoEJTHTfE336BLZb1C19SrxuRRyvb43Q554ACVrH7CmH9nF1EGKuXvCFyavtwvLeJmTpNC4",
  "key7": "2jSDeetatYorZaDypLX857C7rLppUyxZobAsGed1HNbwZNQu7KSqKyLXW9AvkENrFFN4Fh7AH2H3XenPMx9YWV3A",
  "key8": "35PwGGg83T9FWWn1SZRWNhkzMJPngVUzZ5R4UFS3WjVBPTkaiDcjQh1JhTQPugtGXW61wgc3Gm8uqt19wcbuBLk1",
  "key9": "YoabLYYjmuAmvegDjBtEXM6g1yruDgBZGVZhEVNnDmp2kG7riZRYiTBibc1hQhJrF3DojS17tNkwhiiWX7ehsxM",
  "key10": "22E9MsTxov88KZYLXbiLAFViXGHiipgJaC5C36qzgSP3s2D67LK4XrmNgeR6TTsFaAzrjwN3qUhWn86y51vchhJ2",
  "key11": "2Ff4wBq3REc3s8jBNT6QisheZwSGFAiFXiKs37TfccpmMsxjusdynvBBn3MXtFHGZpghS9tg7MRbFQgg88S6o8rb",
  "key12": "cfd7FQ3C1K3g5B4Vwr4evnpxMemZ9fVhE8RbX6rEXBT398GDij99f3GhRtEHadhipoyRwpRno6r7N1timRSh8s8",
  "key13": "3kHKQmYtaDij2px1NPcgD6jux6fh2NtEYcHBZmsYwUGeeN3ya6C8W6tiFGQH9smUW3vqwZZwgbBokJdWnwxh1S9G",
  "key14": "535tdUHGiJLqFJYDhQVX1TgED3V2D2zgZfUdH3ZvmDo6HUc7yeGtYQu3K9CG32J43YFKaxF7Hgit9ZnzAt3uXgQY",
  "key15": "5mpobWQim53f9e8UK1QoPX3nmcXVcMjKdkg9Ty1AsCVTY2crgRZxxMWs75dvWHvfP9DXBio4XKx4b17xe4uoHZct",
  "key16": "5XAnev1D3zwZHD3fcdWxa2RTcFmkLvp2pgPT9ia5QbXRsbdoH56jHD7EqALJn6o9zN6WZfDL4HNHW2NS7iCm1x8H",
  "key17": "5GM2zVKnqtTAYu1ijk7meH1mpPwDuWcpyb3FzfRoFLWsmiovuGQY4jSNS58CpxEnxPGAVvn5mWPvxWemLEWn6z3k",
  "key18": "eke7rtaZbti9VUJVprbmRPjdqJtQtv2arHNWYx36nZr9zQDiw4MbHEncPK8Fivyt1m5gvD5mP9WcxcGXiq55Tkh",
  "key19": "5n1KZpD6SDSc6QvHixx9Hcdw1TyGQqKvNg7RNcvoKU4rgY9WMB1aPQSYoFHEcpWw9eWa3Mw7YACiwgBPMEj7LnSL",
  "key20": "dikdxGG1HL3UVoeUc1psYLnGvgeyDj2EZFfTVtDBpksiomnq33WMeVEUfp8wpU3TiAadCqqCznfHHGz2uXETEdh",
  "key21": "UGTcb1CW9UpthJpZcYhxHRjgkwBfMnnygeVBoP3KR7VSsEAx5X1GNMm63bNsQLmg3uN27NU4RyqjEehk6mSwi38",
  "key22": "3tWb2DWPFFyn5zxD33j3mtYQKrTykD3WBff9js46BSRECo9ZQsBcoVbV2qYaLyNdZHrKqx9obXGZTnJRAwnUBFBr",
  "key23": "2asr3TCsv8uvWgwtL3SAtbjaVC7kvkCmkgYpghCN1XQ8MjfEW2De9RfyYEivNKm1FEosMZjGakDa9P4bpCxbN5jJ",
  "key24": "3qbpGinEAbGkX7T1TfdhhVyJTELUrmEczXJQeHSgiwbndU9foRZpVNtgkUXxzL5do66TpwecLoR2Cqnss7dyY8fv",
  "key25": "5VNqx6JL81coWDnRoXN86W5ZcdXmFGXDW2tk9TQN4wk3qJ6knFy1K8atSKvkkhUNznmGaLzD8nL9wVEYhtxrgkCw",
  "key26": "4GgXMND92N7r2Hhjx97bUdpBhay9QuKUmPnn3FkXTR6kXaKjc2gisirABmWBUPgbYXwJAg5miFNJGU115v5pLofC",
  "key27": "5EHDpqVqgR7yxJc4CdLyJBu7gKpS4ea13bH8HzozooRZETojBqK5CP49YyJ2YXPbDFekZPjGuQUNAQ75gRLBmDoj",
  "key28": "3bwfUwnTPERJkzdHG2SHX7Ps9YrDfLze42JwLzfB12x8HFbrtq8xg3qScz59GhXm1DjD2jbxXmRiaeUkcEnM6Thj",
  "key29": "37whLAarR4GgD3pkin4PLx66H4XBeFy2DeJz7ZdG6AeyFgWHsTzYBDza2doxxeeXUYKkmC4q4HkxJA6cWHdrHTt9",
  "key30": "4MCXVbg6LjJ4a3zGS6EiRTe1orjb6FXeofFM6LPmLY3nDuXnKEfWbpeS7XFsVefmNzqvY6X5YNu3fqhfPCJUhoso",
  "key31": "3iEifxC2GbCsodrmPbheBALR8ygVmTTvXd7oZPDXXRSz6ERMTLaGaWoPAYTMrcpR6B4AZB986x2Mukc5v7SwU4ku",
  "key32": "3XDmyp7Q8oAxZbJZrzJWmbU8NbWsivt8xujKawah7rx924wEiHxkPdafSpfo7GFjcrwbKr3iR5bQ6HPwHpHvBBGr",
  "key33": "3CXwE2fUVufu9TrcTFjxzB38SEJZztPzCFr4VofTCWDhqBifzZjxwXGYh9YiHiYrXJZwEUQvyAHKqZtqnMu4fcSz",
  "key34": "5eXeJYuSyNRdtcHmTDvS6WuQadd2eCV4pS5QtJL4oSLyv4efsEwJT6ykrNqL4gCGK86uEtc95LYTfMfDuC39k5dr",
  "key35": "2sHB8oHiLCmXGE2TJjUxjCraJUpVtzrJgKNfzBfZhqHPXuTdbaWkCJoUnDeR29GtwDPCvqLAf8h66k2DzSfbRFEW",
  "key36": "nZuihEZtxY1Fi2SWzWd9Guvujjq5Mj8mddk1xsFEeNLLBvKer8zThmgJ3dYtB2LjgbbjnUoS4AtS5BZmWPUNwM3",
  "key37": "4qGZeKwB2wT2A9WQtkdefXeL3CjDCgL6TdaprUtvwtf7jRt8LdBKP5nMH6H3EdkyZJXe6RKfvFQePYNrKjYjk3sj",
  "key38": "56z95cPsogm7cswtkWoXSjVw3nziCaUtnVzud4V8DD2W3Sz6ok28rJLULt5KXDdnmNoumeWPUDqTohR7BVwdqPnG",
  "key39": "5ah6Z6Ygzss8taobVEareEyJyLMCg61ZmWKVCDGNcTPYSY6yLs6U4bjVaqx1uP7rgGBWvCr5hUugYTb2fDeR8W3u",
  "key40": "4C4MqnqmS1NJBiBarEFWEKQt9iy48kgQeHV7XzpF4uN3gGqMJaW1ztpnKgXi7yCn65GZ75MufPbJEhH25sdwL4Q3",
  "key41": "29BHEDFbW3TJcwLP6E9gDCqBUaqEXFgoPoi1xPPPN3F4rBXhN5LWMsBkZiqph9oVyrzFk9wpMGhNu14uVnFKLsdN",
  "key42": "3J4dzTDHFZRAUfYRjiVu3mMRXGfs4qkftzTuWCgW4DPYDLofjWwr8EyK1t4GSpttcunrUHunKWv24kHLxDDNvU2B",
  "key43": "3BZGKDeW7DA7Q1yW9pSEFFjedkNziDsh972AEwDq4qTbjLYcmXYekRE6XzvGaKn7iqSyChRk1JkRUE8Qac9Zsci5",
  "key44": "3qXthmYQMNfwvi1CNoe4U2HqERvHzR1DNJzwY9wBW9MDtaCh2JB7ngzR7kvajpAcbinan1tmBDEQKCzsz6Je3Bqe",
  "key45": "nCVFCmQS5cR3tkLzTww6t2jYhP9Wfvri6bQVGs2EyUvNEAFTdTJmdbBuJDa1r3R2eUw8yMm5ns3jaYzXDpRGyyT",
  "key46": "5QtQAE8uvJ2YALLuUihSw12VDVDKnnFGTgrV4s42mHWN4bBig3a2tecEnBqwvKDVULphcuPCmA8sHEVbJfpYrc5z",
  "key47": "vv1LDhhDaXeNfob6dC6bFAn3pAKq3GpbpcD43MjmKPqU2FKxtR3oB5ZGrt7Cyh1tRTU9BqqgNzsJUTWjjXnJaQz",
  "key48": "4B5HK8HVkPyWMS4EhhS9LRbB18RTjDocXVqtNqnKuqRqaEbvhHxyG7nU4kJpDBYxSnxPm5bMCp19cqKzCiMzkBrS",
  "key49": "5JrkFYzgxJdKiGLs3iHNtNJGNMeGfcwu8Hv5nRTChFMa4MQqkoubGZVhEfTewHUy9hMAj4bQtemU3wrwvy6E1Ht"
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
