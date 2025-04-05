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
    "47MKDZauDm5A2n7a53T7Pq6wNoCRcDhcLLVdT8zJw714gurZ2rbkKyNA21dRpjDPbJjStGnJpnWL3KQsc5fdGaC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dtF4f4z9juzGmmoVBeocskE2kRBpoZvTfEjmNdmj2sFY2rpFoD5rSH5ihpEZ1exee869L4ZNSTLLvfYZebg7i3Q",
  "key1": "64XNN6Ln8ECMC3SSXxSs2cnwPAJ8RKnWKRqpWx5yYDvUzftuotJeCj1c5sRtAK5d4eDHf6jZM3yEJzPjzmZLVr8M",
  "key2": "4ptDunEjnR6aSzWwwoYmpbFjzUNHJJmgFSRP3a1gauAWrF1cw5eiNciv6wQkacg5RM3tZLiBSTq48RZ48axUQLTj",
  "key3": "2nPnaikirkrsNBDtgKkeREzkJtuuNfhBu7p3nNwZG6vBDFYLH4hiKR1gvQejrJmsEctqEBpmB8xMe3TAWPTKEyG3",
  "key4": "4QT1bkJR2vk1pqkzwfbyYxGdsebNZnZ8mecN1NPSWzNK9GzmBYGTWNngGVSxFch4gBNzJi2y1tk97YnhtcGmKoMk",
  "key5": "yoodYJtLk3GMwd4GppmQ4BXXDyaTTFYAUSD7Fp29WebEKmKmDgTa4xpfVoNVCvwf8N7rmuzByui2ySByGJfPpbU",
  "key6": "62djHNNkkz9pc28GqyjnoLjaPRptzjESaC51E1sLNqce48W9uCCLe6N3d4SobWV2kCdwzkyUgJpv4Xrxb8rKabiC",
  "key7": "3aauoeTa1e7NiXd5oggkL87WxG3dNeQCwzYTmAJt9d12K1USVQt7BGcgFcK1vSjAHqM5HYaSpLY6AL7n5fYXwBnJ",
  "key8": "45AVcdHPtTbFmHsT2UAW3vtrQRnnEtUg7SogV4YQdVjcUAA9e4vH1V3bZS5ocfTqfc3JJhE8mJXQ9fKJtqvxhCHn",
  "key9": "2m7PggvD2vtNvHbq3cfMn8uFTuYrgNJUListsWTCLU9JLuMMCsguDNtT3Q81FMinHvNv3XFdujY72LSrzEq3y92Y",
  "key10": "2MNZFDunkjb3wofmBorTTbpTt9DejZZADDyRLtbVQYo2gyHqKNxh4R4UNi59PeC9kizKuveV7ybkwKynQLddAm4r",
  "key11": "52QJW7U9mbexERLDUaf5o2i3d8fgg73ooBixrZpePSasyxV2FCZcjwCsj6QXRUqfYAUqxU571CaK4UM3TxigQK3B",
  "key12": "5CeM7Rn9Kjr8vicQxfWfZmmZJ7jBkFm2gFDHrnVTRVaKgkcCVVWzmrzCYrwhVeQwcoG8sTcWaxr7uuVZxWycuqnY",
  "key13": "2VNwswBGt63VBz1C2dgwGGy4fecouwBFBU8Mcj27gytqSna7D9PzSb1zwLp7vrx4Q4nXHDZUeSPsNg13kuWLVXuM",
  "key14": "4XyYbnR2CypQdQfH4W6may6QYRt6SnJjXevGnR4otAfxW9p9hezjgQbuD5L3JkJdw3HzHUvWHMAeCseCTpMcx5Qh",
  "key15": "3obpt8pNdzZwYLmC2QgAKXeQUTVNCtJj6uEV59XFGQAfAhhEAXWem99zHY67yWSSWBHv4LB5A4JEp9ZE7BjxeEai",
  "key16": "EtKKgRLSMZQ4aEmUrcVp19YKFrai3iJc5GVu1Gt75swcgvemcHyqVnkNHbNrLAphdPe2D9GTnmpvMjsZrWKUhmJ",
  "key17": "5hBHcPBjxWVkyr7crWMdeH6ZYtswspyqHApBc6xLiPcsx3WP1hL4Koj2dCVb6kbx9FWUtQkVXbAoz1UsStmyQWyP",
  "key18": "dCuUYVzaoMio35HP2C4kv7CKpmnMSbtLh6r1dmkCa1HFH9EGLr6TuxxjXNvSJD6Biv99wtzc7zQ44w5AhRK3v5p",
  "key19": "3MbUUgQU9h2pkCfyBFpd4DzsunqL3Dswe9bEryUPrWmkUoZWTHdzpLZbWK8KZZ28X727WtAxTKqLoCiTQWzTi8zD",
  "key20": "5ykrQcEZ7DATdB6LrTmRMzAhb8Y77PvGntWG5rv9hGNMVrhggSfRwTXVwNcY5kccMr6npttfMHvxffSAYepTuXwZ",
  "key21": "3Kdmjs41yb1j9CYPAFPkeYARb3oCWvzaHmd9YFhQaAavpNQfKc8mFwWrs7HApWPFFMSn2cdvv7cFkhYkmJHvfRGJ",
  "key22": "5umiPQDWARmDCWryh6zpG7251Y3TUaXQz3a6gGAHnwbAFGEQK3HR9ymNqjABM3T93K3mgdmzo9SxAEgef5gcRqVS",
  "key23": "2iiFcYsgDcg6LL1ArQiah4ZsD6GAihLvVgGQA71GqUuLUABzNYsAN8Ro4hUVbQuNXjZSQhuXkM7TdiTpx7vXtqgt",
  "key24": "7mCciCCvRfGv5NyLdJxX3KSjajauuFgXnx8FDBd74JdDw4tAx3oa8Btkh4mYLBNteL61KF1uPNpRM3ZGHzqpL6b",
  "key25": "55mHxopRMPbwtVNnSUFy9FqPNWX5dcDQDU39MNhMVaU66fFgtyAd2vWuJTAgSvQ8Ysz7A87KahvwetCWGuYG4tGc",
  "key26": "2EBy2hE15tKDDNmbj7GnTjQonzBBYqJKeQuwPBjjJyWR6KJkQvki2CFtWuJ2Tqy7Fx8SuvQcy9mfaJ4QySMMYVh7",
  "key27": "4DFZSMrkALNQRAjfwZj15cCLbS5sRZxY3dMsDUptG18PjoizA8Mu84WHJszpuHN32vV2BnA7f3v15VgE38B3eqp3",
  "key28": "4diUGdLLQYQR18p7QA2YfhEbABp5Zd2Skxid1RaBrDD7Sx9Uwv6bZLjJXHxkSUZ8vDcgxwiyAC6PTFCDQkWZXZN6"
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
