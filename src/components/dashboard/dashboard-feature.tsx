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
    "2gL5JsoEFtixVZui9uora9Wmzb1TmN2sKeMhoDLkwnETE4tEJADo8yJeA83h2NoiMsPVMqZbpnYv4hPyWpUpjigK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jjC7MJePux2JR22bbQghVBCUAxDR2k4X9aQ9pCoZKZrHsG8TidgSXVNV3uWKErGy6ZXrXCG1uYfB8sR1h5mpqkX",
  "key1": "4Mb1BmEZvyFv7LHGieJeHX3wdRXmLhKtbZc7afZTSZvebapHJ7L2CnHzDrF4Si66Ps2yq6eVVzVgSRhG8RGVB6b7",
  "key2": "4JKGoSehb5sckhbnfN6pCzQnNRXmRDwDHPpgfrmzKESqcKqrhN6hPv9VSTRs7H4r2ntzbDst4bcMvFxRkmY2N7qk",
  "key3": "3CD4YhvFbxnGc5uXxVXvjRUAYXLxbWNj6twMcNeuadCBR6NyG2L3WYpnwY9CzKZka182Y5vP9juBeuX2tkKyVoXu",
  "key4": "5SWECBEN1AdEMyNJ1VtYB3WqbFnBabBDiRXfT9CrZ1KAJnbTz3Sf3vPQH466uoLKKiniMmkFwqgU8G7vn1AqAys2",
  "key5": "41EDnAu9Hh1XvH37N7JAt75aSqcFE4vbW64rpNFdU8VYo8KPPyxztiedd5Z3SoDVydX8F2c88dmhfubNvUmB43Zw",
  "key6": "5h8tDJVEHDHSgv5hVy42bVHD51Qu7QmTPadFEJAiPMxrqKx6LnmJAGLECL7pwxfBaVY29xHWFhhDEz3oWjyzh83W",
  "key7": "3DWZJrFXW55gxGkuNyAnPhiFtkKBrUTwcDb3BSKXVxyYPxS2BtHG18kU3T8htgPDoNWJAubwwf7njvBMT1zySJCi",
  "key8": "5nhRZbCHpE9CtJV3Vq81QHoLrQANB59R2k5XCA2dmkQDY14Mdc9DhbbRBocjoa1TaxXwutPoy4fEJNL4a7U9kB48",
  "key9": "2zeGrc1VruxKWPtSv1Fj3EF9aCEx79nwqB8PkxWpQMz7pWg2zYuubEcntx5rnJ48N9TZcrzqRCmBxSovH5LVrzBw",
  "key10": "5do1VX3VoMeZdDwE3121XPrv3B6gkexu8nDjyJ3t7W3uE5JPf3PDXpyPdrHxiNUiqmA7mdu6MTUFxy7iYniPhvQi",
  "key11": "2VmuMHfcRcLoUYLLzSh6HJZ1Q7qx5dLGqCYdhV93A663RCk8QSu6kJrPfTDTho37iYVivofHPAJUf25n49TJEpgu",
  "key12": "hLLRXqYDgUk2XsAkYUaHiMH5QXmjE7rgGGNkanaQp7HN3JnJKUAK35a1Qxkpi6FARZkrLPhnDxq97t3oooraihe",
  "key13": "4oUBR9CGLwxL95LrFNUL1uUzC5eLQnFUFgvbeWGg5cChqGwDiCK3P8B3w3qscDr56cregaXpkxVRqJevjxSJaA2F",
  "key14": "4AfEMCvsAakbgqKFWqzQeLE5q8CEvtHCzvsvKmx8bJ3VMGZy6TEUBFt51Evnvqy7oTnwsm3qkUrviU2EuK7gPpVQ",
  "key15": "HeyJJuszHu8Czsjwq3GjqLAR1QqjZFgNYtd9fBP3983xLfYdFyRheKCKdwRzE2TuiCjEzik7Z8CxGr9oWkHiyv8",
  "key16": "4no47RzLktdEPLQVovcyd8a6y2367zAkNYaZsEqodXrLWELZXhL4eVSR9AsxUPJFoynncpbdV2f6mi8Tz4FSUB1p",
  "key17": "5GfKtdxzNwEdQ8weYVc2V1Y9y4NHHAwdqmV7kCqL9DvMnP8Vqk4kfANxxzGBLE87SDS142CdEQXniXePekPXUrX9",
  "key18": "4QuRbC94aQjj4gvyegaWbLZJPr7jfVdJagWYFnh8sWyZfvkkVBozATxNWthaJc9GBK6NWgfxCPpLA6RfqTcz3xSy",
  "key19": "3Sh7vXmNegWCfpu6GqDaAiF8SB6TYaVTX3c6kwoQy2zQCyhnmwVmcnoAaCUEL872DNCKopBpNqiE9Rt9JQjnVK5E",
  "key20": "38BVx9qis2PvBKPAHPWjt8gg8nTdHpAdqx6FaVZH8gLAS4sx1MQGuhXm5cAMDisiAgJuGqXKZPEjP9r8DK3XTrc2",
  "key21": "2U7LbwjCLe2e3gWFp7SSZjJcaW4HUYy579uzF7i1oQF94b9sXrCUHPsPFwNfvtACN97SjmDgEfQ1AJTE7bNNQDFU",
  "key22": "5UzfYPfBunzWFC8dhwFaASB6N7mPbQfLHNrHrxbLN837Ntfo6PCVqfWKy958LDw4kc7snu1TP8kZnuMmHFB7niyy",
  "key23": "5okgwY4EAYtgwvipLzTJhLDbUZEmR44xo3vfYmVFYqTQuANWpz8SDv3XVtRggkHxgr8kq9Ji11axU7GjT6PWpEj7",
  "key24": "49RtThgSFqouJq7zL6Kb48c4HdXXKmDwWpd8dmCdZDrno7PXFAwREJ8EqoJ16BQN6Y7PHCv1U2mUZpvirPzEJNiY",
  "key25": "2CK3qqJPdUafA4Lcjs3KLiBfAAN4nSmbar6jGk6ijrz1K8F4CC56YtKJ2rv3PCSTAmYUyN1JbdUH7wbXJJ3J9QQ3",
  "key26": "4B2hLAe5G3FazFbEvj4S5mpLbXD8PrAZc5Zqqhi27sTiiKd6YyhgZmmxFhX7AzJUR5nDvUiBHfmiy1KvF7yK3dK3",
  "key27": "51zvL4WPve4sEAGr9fYw8fMidFjGcqSdtBkn1HA9Qu99egiyHqigS7pHSJkdKsNNs5MiyLiNgNeEM6gpu9Ldu5Dx",
  "key28": "3C7RwstAk9YpSsbxexaMgDMxZz1Nrhf4cQKzAm3dL1RCdoBDDLLD7BVfV66TtoC12USk9cp9CSe8aWVAWzTcaM7D",
  "key29": "4vpHZEqK47zmzHcrL9k27GVbuv5g7rPYbck5HuthkZ9jPP1qkVZWJSU5BRrYfiSxvfpR1LnZL299jYR6waCanjQE",
  "key30": "3Cwbw4zfjz2fwy2Lqccv8ZsYh7u23nzb7Esr9tFwLLtS6mqtxoBj7H5FjBWmrZQvTdHAM3Sx1HpXeDFRaQSnzRoo",
  "key31": "36WJtE4Tg8hpgT1mSt3K65GrrKXLoBLzuXgyejDdNYGyFDihvh1CGH2iWtTQ5X59b6aYnacWvxhNFT6A69LRDshx",
  "key32": "3zhMGju56ipY5FQ6y3Yt4rGSp2Zay2cNyW63EzjqPxxUqnqQhkkndybtGQPaJWoTctyiTpcs9FDA3RwoQcq4BRak",
  "key33": "27hmTXC2jTuuwj2ybuL7K5ntQ5vjRVgFZv3vrP6srHZoaCw1XBxQyHX9YSfndPQGwJ2BtmPVcEutJnMnGJbHH14t",
  "key34": "2jg5UHruqe2LDUFGLfvCA6DrbR6qAo3csMmNGUtLTMG3WiLCoaAAeTDGK7HvKMwAjA9jVvoVnaEWicQQmNGfAzA3",
  "key35": "25PctcWzLteQSjGccGrcfnJyoBBDxv3PRygiyqaeikXL8jkKmtwHwKsgCEgmWjwBq8b2anfwNsJaYYZRQEBH97w7",
  "key36": "3ydBrWUxCJQghePBQMk3xPW2TnnMWydmkc6gCuyfkPbpGYgoKE6y5WhQu1Mv5N679jLqxbcGm4DrTqYEsYyNdiCe",
  "key37": "5dWVm1VpKyHtV2CTrcftqDX8YA17P4LfqKoG14yvtTvtNFrYH3cKjYaiTP69SXyC4Qsvpg5XTBECcfeN2oNJLXA3",
  "key38": "5QAAfA1Cu8PueXKji85SeSKa1khbWcP7qBBzBe3suYd7KPDo1nvDUSmqrPBNQ1keoKmBGZz6fDcCd2SrqwAxuYDu",
  "key39": "3eUHv78kTBeWxyuy8geih2vjy7ZVYG6mYS4wZyyjzTHuXr8EcEy5KthxG8rjPJSkMpWNvR6WjuhxdoVuu65YB7Qp",
  "key40": "3KwbfE4yismpZ4BWGwEv42yD8mdacG4a97HszrnmCWDuvP3R45aQWe6PUJrHzWj6R11qWXW8JaZokXmyBDXrBsc6",
  "key41": "3Q9hDNaE3zMAmsCV7Jdt96BF5gEFUmSCPi7eEVUQ9KUTUJWLGH5q4JrfFSiXF4UcWtuTKQtziUXNA7ed2VHF7rNa"
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
