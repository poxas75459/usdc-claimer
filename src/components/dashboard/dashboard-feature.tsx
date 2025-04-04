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
    "4qUTSS1PSoakJXTn9TJZtu61cRsggx3uki6h7GgTF7kJgcg7WXNqtyFKqiyZix9peZH8bC1YHzrcbK86YGki16sv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42oLJGBbD3wUiUStV2LqUPeLxq4KmszKfauDmnTYBRxcMHXmqrf4ri6gyUWUbsUc8Av7EsWQgEyfkYozPiw9K8su",
  "key1": "5zPeExfEWsdTatiBCk9KPiLXpDVx61bfq1SC5A8i6pbzD5L9PH9tii1u2u7GP4ngDEBxhgysTreWPriVd4FXUxQk",
  "key2": "3UaV6dzTW8vBGG1JHq5Feqsi94kX652ti1yfVAM3XpFdCFxJSFGTD2x1WjM6hG9CnuD4dtyt6PbRgXbrn9yzdSTL",
  "key3": "5UwmMHAf5peRRDMXebyT5LLobsbdRAp9GVcU9wgBEpmcYjkGkoM5ruKStS1fZjWxrzjtujUNkmRv1APS4FRwXUbj",
  "key4": "3Vh56rNZBer6Q7WQ3NeiYvEhexUkYA8shvnfFwUKCRGCRxCWR8LqTZe8AS95iynRZUPskJ4iZpru9E6cmdFGptuF",
  "key5": "5SjisLxazJikycCAVT3CrLYWN7SRmWSGZuGjdXtj4JqWo6m4bFTxgj5udouPfBTKmFjuX6yg8WbaUjAzWwkFR8BU",
  "key6": "4UNQcNRNQv3WpPTGjwhg5ejh3PZGtpC4B2GzLQwZQKmkvGzErzM2CmRMi56zEQdmXxnnLMkBhok1AreigZLjbkAk",
  "key7": "5z7gpw9VqVsgir7QKjQiMY5S3ZpdVaCRNK9QjC4LGPjMRYanJzgrHZ3onzzViuL4Kj8miL8Gt6v2jzSzbdPXKEwX",
  "key8": "3u23x8KuxyLAg7P9td9QeYDTxmqzecrMWbjpcCqk2HwJt2xPDytjxajCXZgYDsNZc79xPa4Du9QuDVRjCKDFhacc",
  "key9": "5fpqBkTAviZh17ydprBJzwf6hkD2XSDmwksaC8CCQmqy27GvYCHnW4vWH64dkLG24MHZHeUci5rjLcoPKLxVAwRq",
  "key10": "5XmvSJT5rGc4xNcoEE5Eo68Wvgh6ht7UPAThxPEaAvYbTCprgqTv83xzzfE3w5BWznA1a72CqqsyKL2mMeQB3cNc",
  "key11": "2Xq2sS6C2hf3BQ2UV5v93yiinbiJwuUwui9stEkMEjeT46cbaTf7iZJoVoG1ZpxUPFjZAX4pGUPLHabQc73WGGBn",
  "key12": "5xwaf2NS23BpuG62crGN64ciZgeuLxdBRBh796mYCkkdtdqUGafSaB1zHN4o2fDMeXxyxZe3MsYQrnw6pxZcB3bt",
  "key13": "43kECyYA9Ug2emv2ivSnvtzmLRy92aYyjtLLccb8wjHG4g9EiofwKpHDQGzCvAS2RzT44MA2PXSr5vHWmEtoTWfo",
  "key14": "5BSUnm62BFg5a2fjPD2GNsdLrvtZxCJyb19F2QwvLXPoktcLSL5vKkcPeVuZDVbTyu1MpjiQYzJLX4w3RXtnyVgN",
  "key15": "3rnCL4VgRkkmaLyn7Lj9hGYuobjZnLtbcErqedLTicYoa6RzsANocw7h67GVoV6KspK6BYKytwAFv12jUL2edTR7",
  "key16": "2vSGxbdEQijQJTUt2wdWgcFa6YgzsuSwoRM164LgnMVWPtoxidvQbrwUd8uWqsMg3rxBEUXfoDGr47riKN9c5eAs",
  "key17": "5Y6vp8CqPZ9wXB7YRgsri54FrpCZTYboboDv7o3KTQUJWtRBumbnZfrFk6y3cdHxkUVxAYqZKTVxKEyDufv1yLc9",
  "key18": "4rz4ZNwtxNKjy9s1QhP1JKJtXGqxPwhQq1aTbmMNxKmKj8rQJscUYj5MMB1zSVkdCrL9Lwcvh4VotAtGrXYTyjCF",
  "key19": "pw3JM5ABRh66zcdpwWXULU5NRtCMsH2hN16WEdWsjHooHANyCuwmFeHT8dhmEPvMvzW7YwvPsSd8egt8S8ebCDn",
  "key20": "3zaMfDVcP1E9yzH1i4yvuaAePDqteZyAnCXzLogd5R9oJSJWabaZRZvZBovN52f4ZbzCLMCcYRPUDXDwRSKqpKYC",
  "key21": "FguUkdkfRv7EHK615Gb5NxYAyVgB6H6JBT8akLkzHjjKMvRdf384ukBvzWDwpmZBW5hrzoFatUxaeFnxqBPtiSm",
  "key22": "3bDm7y1mJgaSciuPj43F98kEZTyfrj9jjuUSYrn3PU53F5PX2PJNompmB1dDdkLovZPX6hKgEeBP4Xwnfdgfqu3q",
  "key23": "7R1uyN76B4CzyZy3yxpNM1GWZfwaYyiofKPqAmkeMCHKT9fcYsovn5stA46J3MFpAxKHW4JSVp2tpz3QNy8cA9Y",
  "key24": "TqBsUfku7T3xRsx7PsgXb575qd7XUrLE9hgvVnGqS1uuoVjp8VgiyjQ8wJLmmyinEdaJUSgoUkpSWwubVb5zrqX",
  "key25": "2EgkpZftJ1JSfuFgptTS1rXyMrZQgKmH3X1qJHuX6BrwtQA1Poce7RocifqgjBNHs4RaGTG2gaDkiajLhyTHvMTx",
  "key26": "AjtNifKksbsjbbDrTnNJp1FHHXjztEbLbJ2oD7bpsSM9vgnWd4mi53dTCbFUmCPhKFbwzRvWwetfzjJcNHewhBB",
  "key27": "64NBwp6k5o4C1A5KTMMPJDWgixL1kytKEre2jLJmyCDbNkJ8PT5MRxgZURMmBvJiu8fovrN6RSTSjGBaXZHUH9JN",
  "key28": "4rz9ZM7x1UoTPvudKPvqKgLkrkYnTTJQA3ibQ7m975YCN3vXEcyMkL4eP35fFsRhXE8cMCBD32TnvW7JsNzXUpkr"
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
