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
    "4WD6LHmvYEPXAawqirRnEgiQ86qpjHVAFSTnZD9a5soQpTJdTeRs4Mg4fcKoBnr9jhrkBci17yhwbu33d6ZB7im5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c1MZBEbYLi8z2koppqNDjdC28QeQgR5xrUbW9GXDzaRpQHRyiXY62SarJWMWPsiTPJTNN4iv9J4yyLAWyfZcDcn",
  "key1": "4iAVHnAkSDEELdosrcqhyZ3sVF7vqGtPG7ThMAHPkd2dbZr3xctJcufw7A1ndbD28nLqTFQmoRgnhin1BEnFY3ga",
  "key2": "3ewgT2B1RZKe7i6cCSemQPRvrN6wn34LpzAoPErCmaHFx8XDJNTYVn1eoGZ14SkziN9SbJ84HTH4QZPYH9KrmNMa",
  "key3": "4GmERUC8krveWoCrYL1GjTm7XR5krAS11AvtZehvNCrU4PZpX9MyH4vFSy5BP6mLVg21kJ6fY5sDkXjkywDaADDA",
  "key4": "4tN6RFy1UTtH8QYVsBRWXREftxFVGSvyzfMRVzkpRUCJ2E1a3svmkMeePy9YWWvZHWpNda5ngeRtvFfDqJTGSmqi",
  "key5": "3w5xpT7M5gHw6CxADSXNzUdCPKgV3QM5cRNbrJpLpF1QKDabxb5H34Y8Jm7zEaB5NNST8wd91rWauuS4eCNTRdqt",
  "key6": "4S3gvzzDc79TRnnSovzGZeVzFQYa84Y3ghWfd26HGE6bADqM2EXPPDnh5cYXcMaDTcJsb3Ap8TrJHJDk7dkfupf9",
  "key7": "TwQGXN1pWD8zav4iuoJ85krrwkQ3qZMsBY76t7JCwq1Yq8TjAg8QDSLsoTopSerEv4v12NLhsz98hQqt7BisjCk",
  "key8": "5Mtn8No6Ap1rqFgHaEWLTjr6SeJSD2m8piFLHWhLtcNqAzgWebmDifD7xWhSFQeXYk7dERrqUrrT3GAcRAWjyNUK",
  "key9": "37nRv2QHZAecuW36KXgRW3N3bXaYYxkrZq8AH9ouhoYV49u1QPrCX2ACmnWFzFegUau4n8YTHKURhGFj6yWYu9fd",
  "key10": "X2TMzFCPU5Bkt4qjRCG3j6fQdXfoNLpHQzMLW9CFvx3gCtszsGwww69st7heRhMXcvQVeqRa9hahV4QGBrxR6H9",
  "key11": "t1A37sFyPw1jY731Xry1fR5sCJ2HkXoPc4XbWzxVkFp2xXvNWzL5dbPBX6oYZ8BX4CiJT7Yaw3Pr75zJQWcACMM",
  "key12": "3MKK92BLuWHZsGHPmUfBXgDJVqnMe51r6Y7kEwcpaWGFuPUHCeHJTVsFP1Rg3CWu5Ztp7xSuo2zKXKjEV3kkPFDp",
  "key13": "2CHToeWfsyR2QeSVBkzWEcCgPMU8VEXvsFzD4UB4SASHAGEf3sXBTzNBom3q9ut2Mr6aKd2hcgjKyrZUczvbCpqU",
  "key14": "48QNyYbsYsQVkMcDHJ97wc8bANLdUooPjCZFyLWuPLg8kypV4yjcZ2UuqgFjwEpMopAKk7baHdRnyHJ41CyrCe5m",
  "key15": "3MnDWkTLxAmL5DQaefQjPg4a64fbm1NU7dBsWjfDyYs4FibpUH7KyXF6tLkvTrBZy96tWdvUMd2tAyEaMfJbM9Ny",
  "key16": "2oefptMAJUKGvRKHKLDGVYpmpUchKGZwMJdrEUvR329kFdNMwRyncF3d8VxxXry1rKHJXJ8mbvX1C4JFUwa52G2A",
  "key17": "4TjJCPTjRdxzXk7ozvfzoE6fjNsd9v84Lo3FWNrXXvzFHfW4DkNosCHFtZTcFw2Mguh9CnGbNPJBFScaKBsbSNPF",
  "key18": "7QVnBrc1y5STWm1onruXcfsDSMKCZjhfGwzh7vKvX7WMyS59DXw4YA3qHf4wWig9WttYNei1fzEe4kiBKbp5B7G",
  "key19": "2CdcLEnow1ojcmQp1LkNwf2rjeJbLPsD2sTXzGYrL4KV8tXw6qkaS5rEQvZvyE8kKaMF4uzknj5NV69b7fTnxgQP",
  "key20": "2gxDk3KEWHddjWkNZfhpGNqU3Mjjw3D5zbRXXG46DUaufwNtR85KGAnD4J4u2gcxSM2DrBYzDLbiFqHv5EKsBCyz",
  "key21": "5ChFYArwtti9t7wYv4fPAgp72z4RsMicvA3oyZDc6yqW7d79NG1Ahg8gopJBJoicM4CtwBxCA68B3KPohg5TwSCp",
  "key22": "3twwwDUDqRABfoFHy5cFP4nnEoauTnV2bXpbZMpLMBGBV6THAytCv2v3CLXwiGhDzJPVSnk7jnAouojNduxUuVjB",
  "key23": "4ZcAttUoF29HK8sBqGYzpTzfnbtGLkFch2MoG1owTLb8Sv7bWbx6JVxBEDXj7pDRsR589epDTm8xZEnFEXXNFhkg",
  "key24": "65jLDXFnap2XNBvchkTortC9dY9kdwwj723gQ6tGCAECc8yRuubxkSJFC2HAYz6dCy3bUSs94sopahRYYqU76YbG",
  "key25": "2mToqCXBogsbmXJHmLij7CL3gr6aA3GYi6x1VMr7W1GgxfK1pstUXHbHA5CictgNRomgimQctcXsAUndFBCshq3x",
  "key26": "L3Yxm6ewB44vvucCmS6CfSKW8iVtgxDas6EdjNkwXm6dFdaoQWRmLAiHcaWQg6iagsFJDrbmFfynxptNnLVG5jF"
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
