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
    "2YYsfjDqjJRMUnoT7GUzVfp6dhuMYAknCsizKbpsjQEmMWJxyy3DoUfLi2J9YFkEAFf1Lz3E722whLg52mWbKYW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u1PvwMjJzoZnyEKYdeoW1uAo3tLMjjmeEXv1wfB5ugXCFhSGPq4GPmy1wkpHzd28DGnNh3CwzeUzwrXHrxgB7TL",
  "key1": "KuGsYjxPU821rxTF8Y8RrkPzHq7p3UDTpat78eT3vb9Ty2EYat4bVpgGrKiBHm29BsBtKbNsKUtexigPH1ReSrh",
  "key2": "sxwKB4A8yWd2Jivq9g3tzUQrDsJyuJqyjqg664GzHZUyHuBubRZwQ8tJbVnrHeGGR9WedFSqLgDj3qHPRPPSzwx",
  "key3": "eFqz3zSCu6xuJruPiwV6G3qL7obhCyxUJJyCJD954epij6bjkdeyuF6seyxNCvNTJSvoGnCJBStRCCnae9sBKYe",
  "key4": "2NFey3tkbre9JTLr7S8DBznZcjwC1czCc42DW6b1pKS9RyfBfnQ2VMnzmk69WAn1qnpod2mucn6VHhk3mr7xNNwJ",
  "key5": "7ErmdhQdDiNmGQyMMbJKKwZKGVfievnE7ryBoXVoLvcbSq6BaVENcuXhhT1hbqeEbXJp9AA8ZurHXFmAP4MCqWK",
  "key6": "3MGw2BKD2ux9jTF1LnZtbF1kHC8JLz7yaBxcxYUspUE3ivwVBHpdpfUcFgwTXv24qN98DmxcvVtX7xTrYzHt5cng",
  "key7": "ATL1RQ4dTXxgZHemE3CRPE1qYpWU5B1z6HxjZzi2zu8s4yiGbhje6DMmkBYbv7qvGHMCymoxoEtUN6gGPZ7WYiU",
  "key8": "45jYG3DHHQP7ywWvJBnETzM2UE2LssFm7JArXWp7iLBLXSgrmZtfEKbvJVTGeVe7MGe1h8u1eP3Yi6aeobyzeRgx",
  "key9": "UPuxJotgaUB3D2e5ES9E1CiLUMatnGfEbgUYZ65DjKfqTprCC5ex7NNzntzTVCUKroJzJzqjF1UKDhaKwtSGc2D",
  "key10": "2SvpcXTchdnWbkfMUYs1VJ3NjaNqVoS91EFkq1m57yNxGMfhwjT2m3HKfWErur4L5jY1FfLLyksR8xNUKHKVxwUL",
  "key11": "3CJJxP8ykCwsJaW2chZy6KHsjUgP42ftUSx23FcVzXW4bNPP69G9yk65Ro5ywUpY19uWbFZMtLBEdVniHsyMfrRM",
  "key12": "eWBub41QGsGwBrBPDRdAENRF25dPQxrqsFkbnejW5doqG7CF5B8bGAP1v67CFg5otQVjZRmVB3TNf69VjpNybLh",
  "key13": "3X7bNyRqgxPB6bLUzjModTpuDrDSzmQKiXmnMNrtc561MJKc8cUQp9jBe5kaG1oKwXNYzFNXiV36UF8a5iB1DHjr",
  "key14": "5odCDRxi63xYcevWnFWSrtxJ3SoUPTm73nEjNMASUxkVEZT1eouXwD7JbNbq5MTatmpsETZMg8zcWd5DocRrNymU",
  "key15": "3NxnViJgqyC9dWHzMWPQRff1vAHL7BDjx8m846ELJtrjLWEyhdYRCugyABD6wwHPg4Hf9J6oykTQe3fABWzk4gET",
  "key16": "61o4j7GrnMx41MzrV2WvKnYeFtnXoY8h77rcUcj3MWe1drP8PWTBqUuuoWsTG1ptWkc2MQQtG1ikKDvVgRBQk2kE",
  "key17": "4DC5khMAzkGpAnGTKmnzFvCjtXJd6sCPxr1VdJVXzqj52wP7PnT4iFDRMTYLzvR5RrXXNx7SgWNj2Ck6NtXTmRSn",
  "key18": "4Ya8QZ6Lig1dm6XD7tV1FzRXLGSf1M1qd16FatBpd3qyJCtB18S5euZR39VGFUsUprBN6h2BWJVF3mDn2hGds6md",
  "key19": "3ufvp6PTkLeFgYF46wceUgmL3YyCUomLJF9Fn4MF15j5h4977WeroRcA36hQrVrVYHtCG7rugRS1Dv2fSFBHbwsk",
  "key20": "MTkquDqZshxS2YKb6MSRAzJdyQHVXaBs4CryNuQbRnLi31AZv3FAPJBzHMEsLGmzQ5C64JVLk2EkWVrUh3yMHeY",
  "key21": "pZxSGnVRHibVxiqHitcJt4rPbRXxi8sTgMsGLEM2VrBnKxUCM2JjXuMAPwppNVJmYhKZYPFnHe4Fpp9dUUJn9Zr",
  "key22": "3eHiA4yj1rYeA78evvSi6tGFhkrCeW1siwW1nMJarGySJLReunBjwzjMMXKtAVc5UaK5mm2agpuLEuTX2bUhcpkD",
  "key23": "5CXnPgb1fMVaAFYoqasamHdNpBz6JKUn8mgumrY6P16BJNfSpRkN8kdeNkTxS824habEXxoSpyWcrS4vKt2gfpeY",
  "key24": "2Bjt8grJ7VDoRaagM9WAsJg7A4JMFFjyzf7N2iXNTXhdqc6N4UHcxC3kqZEYsRNf8N79cBZ4RBEoS3cMyfRnuHR7",
  "key25": "3QogbBpwZUHQYGDBAqnPwdXvcNQ9H9MjnrhwsinTwUExFzEvKrVFQiLUDX64aRumBkvFYxvs2CRkbgK4TjnZ62We",
  "key26": "2EGPHQhMWkWcig9dVTTCcrpECvXNus3snhb1fLYNV1WbGPE9us7YLvRVXSktc445v1xuL7uHyrRsSqpuhLJohCZV",
  "key27": "5vsgHri8oQ4KkGEAMpqE83EjCgF5AP5ECCMckaGY6jhJrxzjgz9g4xfMJ5HZfvU9NatUa7Ah2Ve3tdmPF5jvmYiU"
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
