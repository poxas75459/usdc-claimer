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
    "5fCEan9rr7RN3yDvD4MRs3xAD3Kv8WQyNA71jeTzzfR9bm6Bkpag9bSu5hywJ2o3y95as36ndJK48cLTv4JdGdV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "279MuDQudrsDd893P5Y6MMYMa6uKsSQ7tZwz3eEBX3R83CT9ZQYXYReGdBAzhaUYtji9WKU358LaoSd3PbZBQh54",
  "key1": "5pQYDTp6Dvy5EYs3RLLKSsLXcHcH6bfLw9CscG2QXXTLo5XSiP7ZEaE1vDq8MpVrX2RhY563RdbKMS39TySzRS3F",
  "key2": "3WCs1KMD9CZ9Dao49hmdF2CYTdoARhCFAToidUTnVK9QVc8cVXC6kCAAVXgVyFzhVP2Y7xzVUtZjzR9ciWW6zFPt",
  "key3": "57PEasUwc1oUNC3zr3DqsAC3tBeuJ6CdA7JEWSKQXKt7dkf3QsVv1rFSYFVvaHmxXCD7HBLiZ948hqEGjv9dUr79",
  "key4": "6o3HKS5r3U7TB8s9E9TWDxNzaNEbYDwRVicgySijvs9QT2Xh8D3hmdTBx2Jea5AYfVERhenfCMsU1syo4NfKVeL",
  "key5": "5nZaK1XHDRsqTLBP2mwUWjWr6oQcfdPjeJ4PXvB3uoupWHQ3x4SW7TPaUSerTVDCh9Jq8vh2VDexvKJwbpqYpttr",
  "key6": "2egFSxnLDqBkrbGu3EXN65xd7aJRAET1c83vMMaQyNgiGbst94iHmpWcoDTwhV9AzV8oULe7fNr4VvXfSK9xHtH6",
  "key7": "2xY11ERHCjEuYf7SVLeZcUrdfqLeCzk7K8PUdUxb3uHsJo8E8Kw7MvM8vVDMwBWtzdtWcDgt7ZUv7WNnEthgXeD4",
  "key8": "7eccnfVsDgg5oXo36gSmD4FRxwMchfGsR2EMeApaAdgXvcLSjL2vBDsjU9azSDAEc6d43UCBXWu4wBLLFG1UbMa",
  "key9": "4vHEErp6ni4rJU4qe7ZeM5Y7skQeEeWcpY9no5NSLP9LfwJCMBkqowXeHKm4CoT97Qv3od3AdKia5g5wfntSF415",
  "key10": "H137FKTs5Suy5NWMo69SZNEEGoU41eNoxZTTWDSSYaPB15VsHCjpE4jEPcbqn2CwsGYAPPVu8sQNBBubhcmHtut",
  "key11": "4jypjbHrbrGCY3toEoc2vdsq5SXG27jfSTeK2S7KSyd2c4dJZSrcv4xC3rzeroHvxYkhm7YBpitnU6UpJLHMxc6q",
  "key12": "4gN7v4GCqgq96ofW9NqMtWEv79pDg1QPhqTBkZ1ty1m6fAucJSNwyhmCzBK9x7h2RaxhXQf34UYXFotRnse63kiA",
  "key13": "2L1RoadiXVxRbWFmX3dStsdeLRzQVkYYjqzMMiv9SMpGmacom5ehJSXZPePMzD8zhMrw1QS8MQXEhNy2jeDvJLkU",
  "key14": "3KjWkpUQ7gNNHWbt7GwYiTPWpJjcAGkhR71gZ9GdRag5Q1AkDBdk4q7rSHueQ1gVfvjiXWKEsaH3uZqoVLAj5KGm",
  "key15": "5v4rqRFYQTA2YPa4Pt9NSpw9ZtTaVDoku2paMMDT5a6btNih7JmqWkFdBWFhvq5bt29Mv7rmDyuX48vYsQWnVjtZ",
  "key16": "31cqJ1HadcDL9pAqCaRwwZLH2eRbHpCZxVwrSy8shU9g9VwbvCPDnWDXtk2Ux5gcrUYMWWPpthTvjWoX39WxWPD8",
  "key17": "5ku4V23SxezRM6Ew5LMgZSomMwbwmzXWvjy6E5wGJoxLojyeopuA3P82oaetSsmY1YQwZGYft4quDhmXJsF4tEtM",
  "key18": "4jWNCmw85cLXyQpaagDEKqrq8sc8bDyKt6h7YWu6KvoxEuvVtrjfojQPvMakj5fJEgz4gEcr7Va2hK9rxJpu63P3",
  "key19": "HnSF2Er5Nj8jHBVakussUG4ythqxhcs8CN7w9TnhacxD1LpiMu4gtyh6Gant6CbFdqpyyPKmBnhj9fpgRopkJtG",
  "key20": "B98vur2szkTTQQBbWjyT2mwcL7FiGDPBedTcKxuSXkEEec3gUaKocnEmk1QZWd4Q4QJFjDFZR1ajsLsLLSRpiHb",
  "key21": "4tJEpwKZNR7MymHDsetZkrz2GPQQUKknxuY9yFE9DtxF2wErPLTQLTXmdTvaCRrzwVcuyW8AUWfQT3yc9xQBxyPJ",
  "key22": "5LFKAMexAyGQSJhvxRQLJ5c891CCtjzgNS8zpGttJXomSeLTYqBidMxEsR7T5wN8651gmrZKB2TGHyfCxVy4zWhv",
  "key23": "2dw8AEe3zrpAdyDofDjnbyzo7gYhHrTQgBXd3zBCky7EKxF2tq8SuNii4UmYjgmtBKTbUqLANJDFjSsjAD5LbctY",
  "key24": "2zM5XTbcV7T6Nn4R9sDAaj8DZGzqdjAYKSqQLHMEzCVQQhgDkbqLifLchC7FVavxv4jQ4aToazb1heRHLDYLvAzn",
  "key25": "4LF2KVQdtZPTCechczsWH3KJgJmet9E6TWRFrvJm1DqR9EL2GizaRbJthMtFoziNM6rLSVk5w2p27L1A79pEKhDA",
  "key26": "57kAo8npWqQ5RrTfuxbJ55qEfdQcbvhL8HoPoznioPDawFmZfjvAh6ZJYAj36ctoNLEkHLatUKsx2g1tNJPNhzzF",
  "key27": "2sLdZFdgXpKg6W597sbTrnmNGmSP8GuwThu2AQvA5bFmycRxiEYcCNLYGNKMzJNbp6bhM47n6Mcv8kCuu7fJcjjN",
  "key28": "5j3Cacz3QCQHeDiTRDZhije4iA3yyj4zh8QFQi6C89kda7v9BL4ve4nyABxNTGucvbYU8gsi9hS5EpVVd4cWYfvJ",
  "key29": "Bi4RCnA4E4T7vD7GS1wQBCHVZ8mWqSdJy44jYMUdJjDBDx2mcXht6aPD2qonWrH6d5PkjkAYvQYerQ5YPD92e6c",
  "key30": "4i3bT9zyRbQtrzmtRfNWWkVMAVnCHz5bZjDn6NfHPnw21vRjJRVAKcVvYJjhMAJKWxpKGnUrUwNpqHqDoeDBKFNk",
  "key31": "FbJFsPLk4JnMSbQEzyXPmTrmLgJs8Nnspa1EcbiXeyEeLm2gkraMXBEt1aQsVXszoo42xaKvciwbjd2X1rPxwvN",
  "key32": "4igBrGDv2Xks3TMjMRnbXPwqZRAYgyNvuQUBGHdWDwsdhWTKVbQsyxWUdDc8zNMENVoRrnNvNZNwy5k1hk6Zkjp7",
  "key33": "BB6vpy38pVSv2d6zjdUrVH1zSPZ3PyA6MpxGuQDcYVcKGJafxWVxGQApRWyp55UfruNSLZY1aCwrv4svewC2L1g",
  "key34": "4Frckah7WosnPNDufSN1J4jVGGS9UxEX1SC7f1utwt4iReDiyzsHi4iD5A64PwAvsvytMU3R8NStc7FyceNcxHxk",
  "key35": "3rJiagLeKzudkoWjQXkA52KNz8mfTvddtvEmecQTFguN2daaDhXX1PfYiJyHPBxVetbeieK7DY5avL9yctnC275i",
  "key36": "2KAdWdqapS9icqnBuoWD5iL5XcSthApAaKwjijE3oN4VXVNfwQYX22p9MtwkZBc8U3UF5csxCnLqDVwxZpUqJWZk",
  "key37": "4G3KRwjgN5JPN55Kki6tEvW2HQRLyyReUsVNPsZ7Mf3J3kRZk6VuTxSLJjgsdQFK7ukZaKYYe6YDzrZexrnyfMYf",
  "key38": "5M7LunKGUB34pmrCxNXA3jwe9jwCoa3soe128n3tj7VWnkQKgnZZTesVktkGiC48idHbhaD7XS3B7HhLoS71y36o",
  "key39": "4dZjgK8P5Rv8cjFu7UfpDkNAm7thfutufqBy7QXzs2bggD1qS5gpFB4sc2HSfSggAryMMgja4d2HJYyMtyCSJqbB",
  "key40": "4ibLksqBs4x9WErZaJfCPbNQ7bKiC2XShGXRbxmgVrHLxpEo8eZpDpQ3QQ5QySyHtjzXqyKLjmPxse7ZPtR3VNze"
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
