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
    "3Ah69j5KhjPap4WML9Rwv2Tenqrhpxt5LXMtws7ufrEPXPkdvjjqRgTZrFtQBzsE9Wjc7UYMbw8Vm2C39jFHChPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64UjGXy6TMEB1s9FMYMTXirXAaYbyMFVeiRgCgnHWjxAXKACVCL3aPNtKK74SHS88msLPkUDjvxeVjQHn5qL1oWa",
  "key1": "2uoL9KYh9S6qt8SvMCuL12wLn27Xzqpaf8m87aND4yDu8Ktptu4NQ5VSHEyaMdV1WxM5vYZDYpREggxkHm1afrs4",
  "key2": "628EwfH3ANRXyansdKmdb7AzSrEdJKY3abZNw5iNX8prGyt9ECypXadbrTwtre2oQLU21e9A48S3NnM5xcoGTqYi",
  "key3": "4bpXmHe3a1Q4fZ3i6CcJk2qL8xEqHroDXiUCJxu3HCj47w9UEgEjDia6L6pumEgDBiWSpF2VSQJWLVWTv3VCvkAJ",
  "key4": "75vKkbub8KW7r6rgmBwgFco1dRV5FJ4iBc8bXXddQ7eesV3diPcDu1KhDaq89L82E7aScAkNbWz3pikhUMYGSua",
  "key5": "5U85vuHv7s4HgtTZVW7SzwoRLhqXXWWRkmMwpYnC71z8syoN1P7yecMdnVRK3d8fVAhkMzLGpDkj1Xz42jySx2t3",
  "key6": "5rRRWpcqNYXnGfyWM45YZafWQcbU1FZtC48v8PrVxd6xdzgvtxDMWKZ2EbjNyWspYxhv5NzaVUbZcJRcU5Q4rHCv",
  "key7": "4FCeQ19kWyA71Q2z2EM7ZXt3KAeWA7tFzvjWaZgbdyYT7ZixwpaEraCUQrpkZ1MVfENaHhGRcyLofEZqhxXx61zt",
  "key8": "3VGzLP4tCqejRC3Cmsoa2jzcLZmG5fACwXTmJP7itDwoHwuYNq5ybFW1i4n11cSNogMuqefMrAhr5ddEth7Q8EeJ",
  "key9": "42TC6itzAVfPgtCcB1fhdNTWmC2ZTAMng4Z67YtbLWyqyNhFvJ2Va56HKHu9Q6oNot924gPqeon525VLXoGCG1XE",
  "key10": "4ZwoyoiBGr7c1WhHLbSUDMqn7YZMp1xWfz1h3qQrvtnHsLFc7D8RM4EKBkBxaL1nEeEKn98x2gjta4fHi69cpFQS",
  "key11": "N1mZAZvkXsrDkRXtKXw2b7Js1caFQMw6qDfVSegseKSztNYm1B8LFmPxoZ9HzJuZgTXHQse5KtFxmF7LDcNMtWz",
  "key12": "ontr3EK415dr2uks7VbMXDwoekVA2YNzLzfSyNhYK5gaZ3e5zB5vcy8VirkUMqZZ1tvajSPcWLsz3VXYwUixnF9",
  "key13": "4EKuJfA3uQKhxKvFmtqhKYPdCQzUey6EXorK8Nm39uyaN2V1ZJjFv1CDrcxMfT7cK6LgAQQx6EGdQ3JKtbPFTDy5",
  "key14": "4fx3yPiwPwL69cSH4BozHx8p3pVZyvKk43KtCEpKXfM1VUbTfrkHjY4Fo8Qn29KmbLp3j4q6LYYweCoDr7r48t6s",
  "key15": "5EdxY49Jdtw7X6KVSMhg5W32s6xcAzT56Ja55MAZGuJQJ5p6zNdbkLo9Ty1U7qb2nMtyrb6yapCTZhQP9hyjpQin",
  "key16": "TqKg2tit2dJ7RFEQxrCtCzQ1VAQ5jC3y57WwRofddxbSmK8ZfcGMbVgXnwT6TXXPRWmHjCwvq6k36X2YVbqr1Q1",
  "key17": "h2XiyYHV8rAXUbLJTqrp9rpA1rVM8VMsemUC7KXeGPtjKx26rNYUCiPGbGHRoueE36hqD8D8izrbWaAkEqJsHs3",
  "key18": "5upZAiTT7nYpxhPXogt2QcaKXjtkxBChsQ1SLg3v5NYFe3FtfW9LA4B3LLUzms2eWzLqRKgxsooXobTwCd8WC1iS",
  "key19": "2jKk5PbMjAFSnJYVxq1QsuwMcHtkntAaGQENyps2AX6L3LR8ATarpZJqRXTsDQ3ktK9nx7YcMsTTp2GR9aPcxpv8",
  "key20": "4ebenu1nESUvbB1zpiktVRV8a25TEQizkD2qZx3wKQPJ9JEeavy5PZbfaNevCgqiUWCR7mJERiRH6wLhYeFUp7JS",
  "key21": "3ufxeWCoRQfbgVmGteky92YNE8jYfcbmaUUeQ8e8WHSrsukjCEaShYUdQLRRfip1MdM2Uj7AiRJxmzD4Ba7xNedH",
  "key22": "4pD8n9Emk4LswhTps9X97yJGzt6rCksTqSsobUpGFV8fkfVQav7Gfb82MQsL6Yic9R5ZNkD1g4uJnKS8HoSHoRZG",
  "key23": "3oS3p9jfczjAvPmcfqo9Lr26aHvpDyCEwTAiTqcechtA9uM96Nj8Y4eaXjbWj8FUQG9CboVF8cwtUsBxs5nhNLZ3",
  "key24": "5cAcKySUNHy289jK9C2ney2FgzLFPwFLGe9eQXiNiXu9oeP9v6YJN7N4nbS1ZNemiMw2puYFtZjWWRnSL9t7WqWY",
  "key25": "58wtraC1MPRfFCwB6hykdjgfkvP5goL3e2wiKDJG274CD6vw4pF2D2Q3huVWgyS4wjiqwGYDrRnfyyDedkrmCQyJ",
  "key26": "3hf6V16bqirZK5VsLDyFmwekWwpSWdfBXKMmekziXfFaJ7dgPeNyYvj6t899KhFQQTZMppQkhhWWfvLi1f5pSbSU",
  "key27": "25mNf7ZU8Gby6J9htQ9eos1X1cTb3aY9gbYn9LA8jBStCDcNGv5FvW7SSZRuBGNyJLsVrbseXKWxQS7Y391H7i3W",
  "key28": "44YePcLMFWe4B3AYg9tFoazJZsEL9TRMKi3J1VTA1MdtZ6rS7sb4LLkxFYJEBAV9VCUQx4FbSK8si9J1hUWysQBd",
  "key29": "48ZELAeHYe2ARQvxQGUWNTxmJuhr9eSypPMbSPzHjJPnRdmTnwrsAcuM5kzu5knViFeQUPzXtmB4NEnpLGEzNMjJ",
  "key30": "DppMwr9re8Sh1y9vKQLywAaNqJxcQGnkoTc3ecVeZbbjm2ptVY6nD1NuNTu9VStj7R2XZLEcRt2XBieWsKaVAE1",
  "key31": "EyeEB3YFzRoPpVH3ULwpn3TncNWbTGz8tFZrKXrApHjXKpdegsm9DSaWb8otBzK8tiUx2kv4JbdcxrjxYwT84h2",
  "key32": "3f7N33YjYFAbvarVmAFq3eYi9KigzrgiyKF9dpou1MJNyQnASXNZDDvR7R5ub9SUe2q6vNb7rFgybxpELx2aGV5m",
  "key33": "5trN5UFHezDRL2EiYfAnaPrtX6X4xwUys86ZBQu2DRsJZkdwHB4QN6p5C57CcpUrgqubySfbco7bGWCYc1Y962qF",
  "key34": "5kuCgzd67SBzjoH1kfLPjGZMECJcreHFYZkcSk6bgicvLgnA1JU7YkdBWiEoRi8iyfLYwgGB9173ih6dvGFqaQa6",
  "key35": "3Fyek1Y4dzz6N3dXdAYtFFyHfkCCP9136a6VX2dsiBG6oWTLqdkfe8aMkKZuPz26xvSiGZiXi8Lh8EdtTeX2XBk",
  "key36": "41ynQZRLqhGZvJfMAXGcF3k2omLisUWeJ2s2bV8PK8hS1DyrHGPaPww62iThYLwnT9UXNt7TSYeRyiCZVUn1uXUr",
  "key37": "4bq1tbNnYTxtA94eKgjv2QbaUa3QtKPrRDE87DVyVV6DyVxMZKE6Kj8PWH2jjmktTthjisXEfoRjcCp5QRKxjPHU",
  "key38": "5kwhDEWJhz5tq8dgaSfwFpDFw4HWsE2y6HA4FYxvRhCTZuEKucYxwetXJ2uVGVnWw4mDbvMtuEPksXyEBpHFJMQD",
  "key39": "aBeyHmdWkGM3HpvdDLNnoL66aE4Q6nbexMqn8FpL71sVkKZZbHMe2Bbgxqim6GTT9jP3yrXsT8PgKjgLA3EGen7",
  "key40": "5YFLrgW87utcGuTdqxsyMZxHQLoJGW6ug24cLYRjRUkE4V3ZEY5nBJdRxdgUPPfYuAVDxwX2qBFBZg216H2Vneth",
  "key41": "21V7gcVMn4yf1sPuMLF1kZQjMXgi4kVYiHtSTfvsmGFGNx6YVAQcincTkcizWF4yQ4KuNCQDYSoUXrDkXncMr22M",
  "key42": "4deLr3v5EPS2ZkWaf7JTYjhn7AMP1QCz5k1QRdQrUKRefAP7VeBKZRLHAEaAu28tBJTU2dyyq8AzoEcgc2fgmw8U"
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
