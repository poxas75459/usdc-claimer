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
    "4bvMfxmXdp7Cs6QJDDsGUMQxYYoNPNLzZrpoZMBhXAFbBMuZxKdU86iLDfk8E5BWhf684kuaUAoiWiZvZSBDMkZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZLhQxtyHQRBjtMnn1w5rAuJGjEdTqucaF28iwQxDAHDF2PrU9zxKG2pUesxHNac4MerneugZcwRLuPnRvCPtYke",
  "key1": "Dsu3CvkSNhXwxH7D3tGqEoo84o9wFQ4dZeXiaDF2BAWRhyBk3cNmEAxUQjSrCmCcmZAuumfGtDoCkHAGK8aRWY3",
  "key2": "5vgJWkTMDLre8iPTiohRquxZXzVpobkUNXAkZ485BivkcoDX9HzAb9tu3igCyyUK48QeFjhfMZh6VKX1XegSiEG6",
  "key3": "42Yhhx3jN3g2AvF2M8kWJifqXrCohg3v6gWwB9dHzyd9173nJZYJh2FgNDaydckvmL5VGgZX7qBmLasGSUpmSYTv",
  "key4": "2geTPqmNH68Vqs3MDy8QfmeKtdbaznfbyJmeZaPj9cXuXWE6bgqpm85d3TYaTCSDhGyYxNtCQYqm54AeEuPvxXBy",
  "key5": "3R3auZXj1XZhBk2gdAkWwXwcrz4dXLHDivF4TyhJ3A7suRyvuBpQsGdHnWPqdvmhg5nMJcq1hQFGVauUzG8tT25s",
  "key6": "uKWx2UPYNiADWyMARDnR4QuYtpAreABsdEMd3uqsfY1GA5JwnxwokPK98niC2ib5q3FLDNetNQyfbPUznnRPqUG",
  "key7": "2S3R42cXXLSroBpoVzYfo1xK3GaRQVxat4h4M8Zi1DCZmoQ31L9dHdU59LqZ4KAZPRGnSXHne9j7eotbLFDKKTZD",
  "key8": "3g1iwCh4toqekPEajiBVLz5F9J4XGxMSaNfunCC1hpSJcZftzUGhtTdT6uWSTDYCAhTeiuLoUnAQSFfeikt3QrUa",
  "key9": "uFbMLEZWTAdFoRDfGro3vtMxDbkEPVpvo2M2LCWf8VmzSsSCfDcmdRVzXfDm33VNjJ7tAQekBkrRMehGCF93Spp",
  "key10": "yvYjqQxSAyCKyHjj6NkG8BaNUtdUtujf1HhV5uPcSWUCAsuMkGJGBw188Ch9XUtH39JTrEjucPp5sLbfH3WNJMu",
  "key11": "2973sdaxYDfCj2JNhYeGKNA3XqPRtgToN9M8mebzaTjW1ThSS99RUJbBSrGXgaDX3uFhAawdT2wVSGDeoGU2sGD4",
  "key12": "2AWsSWV1xji2yr27HHWQRhgApKp4zPr4cZMr9ciKbQqcFxwe1dJUQTVFTinyHWqQMoStuFeJvusBoAKXJ2S55v7o",
  "key13": "5kqiiWWTnmPdqwN7oJfb3Qa9ghMVcQzspbfsmtebTFk1nBuf786dREJ7FrrZo1b8zGcjy4jVhZBaenKF1cbDoyHE",
  "key14": "grkD6fEicK8NrAg8JtJDAYdjz6GHN1rLHyeg9ML2P1ExiY8LHsSYmDhge6RtK3yf1zc8amS5kbUrqVwnc7GZhjT",
  "key15": "arqLtU6Tkbb9TQ9881DYTpNyuZQP2wsDXYB7c3kLASGLWVQWLz47ZH3YTBAMZX5DHf4dFuAgknDZUSAASoaVmnv",
  "key16": "vMnnqxWEsJKXiezCGxgrxnGUMGrP8zb2SXuR9GaGUMVE3esYc5Pb26rocv4DJGE1Q3B865F8QJsygAymzJNkLUM",
  "key17": "3kV3Ly87UK2B5CFpsVPs57eCKr6TgN6r2dDMrVwZH9dtFS1TYjMvJrQxgAgGkuRmqxisAZY9kPFcbbxg5q64fHWP",
  "key18": "4BkqoSrLswBKLxKKmTkND12EZ5E3gBx2XYVcAMWdLfZspWC6XdNGBKjPjKtZFuvSvENjHcS5p2QvAvXUv7eDCxYh",
  "key19": "2Q77MRwxd6D1ApVnD6otrkEWW7guFXDHJBWLqudVdxqy1vPTyfaw9rf5ozeChWpRySNRwCM4NFekC74HYkVhy3kQ",
  "key20": "yAhZcdg3jcYb8F9mUZ72wr4gB5WF5KyeTmZrTngypQDQyirGWepH56KmWW2YUk3ym7ixJkJkLGJyLFFwpwhkde1",
  "key21": "4z2VHSWd5LcPDoJFCQqDDchweGwCZDmD2BAcALzska5dfzK8DLazhT9cRfHXPeAehrUcg8t5x9m89sxbDhcaz2WM",
  "key22": "5XRgwfjtd8TWDBEpY43tBV5bRJwHp17GzVWvfHhYTgZBotATHjfZonkzS1QEwVWme5moZ1BnQH6XeNNjfWSxtmrc",
  "key23": "48qnGLXmHUpbr4tZ55fxLQx5EXd4LpNp8JcrWaYXk95Fw9dR1CkGESosAwC4RLMcAQ3WwqEDqMFgz2n1hptvfFTy",
  "key24": "4jGC6QnMqkLXna8sUzai7wfpeQBwRHk6NvG2ZsUGMbsnCgDcbjs3gnhdLsiW3zvW6pnwJSj2LoKNck7eJSogwiaL",
  "key25": "3ryG89CjGYW4QKyizVLDPHcpEByXfPpUt7NFpTfyiGevHtUtXwZZxpVju7sVVzjtygptXzQDgsiGG96WtVpd9oB4",
  "key26": "4cxunp8mJ42FuNHL7NYECxwu1XnHXTeL1hJt2ttAtA1qncW7korrD6JmbX5FGacHVGprKtXu5PzA2zvocmdLGN4g",
  "key27": "3TuBC5vrGGEiYrHbzsb9BcZZAz6so2LWbv61f4UFqN3VM7pX1DqurKQ4zv5Yb4gXx4kcfNtNSHqtVcoVEXeXgan9"
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
