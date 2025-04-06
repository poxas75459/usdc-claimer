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
    "yqouMYWXiPGGkorB3whvJVZogBAxPy39wtsxo9m3vvYG1edK4DfEthUey6brZNKXJJRt7vPy78AB5v35SFTZLc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KiSD6cwQMxcvgQEibFtZ8kG15r6Pbh9zmtn2sn19nywuKio1ewMBUid2rsyCjowPx5Gk7DUxUQU5urHdD4VKrLk",
  "key1": "m5yywU3GqzXzGfeHNGZ8bftJjvRNQ16QE9YQT6xJLqfzFE3W8MW88YmwjE4tjKxMi7hAiL7QvG9nS3EgkbvteNu",
  "key2": "39zv1whRwZSHuy5QY9DfLExCDW37Vu5oDFgCABz3bibarfA89WCfPSBtD5PC7Wr6TJyVsLgLG2wfPdTqQAE62tCs",
  "key3": "4vDkBRK1bjnaw5NaL7JNjKoX3q5aRRstk8RNxiM41JrvwwYA6U2sAK5wcDvNMguHvGnRVYux6kRkWAh8YfsKjueg",
  "key4": "cybaJz7oTeg6B5TuqZ8gajpK2Jt3bxXQpECzngZJZKujVBoWCYESbLLunq1DC85zxW69nAid753e4Pc8J3n974s",
  "key5": "2qufzo1FhkXXxDUAqBiy99tF69jGrrzNnZEjvAH2k8PVpG1rwePvbms2oW1nXX6EndTZq4D516fJf9wk48QqMyq4",
  "key6": "3et7aW5Lt3uFXVJzScKdgpXMHAApVrha4f5SeDi6eosUBSS1iWbBEhhN4ejzQXEx5wK4qTUtxSARMM6wrTwwUpi2",
  "key7": "37RbHqddhpZYCg9VWhjrthmR6UsDQQxzwFyXq7ovMkWMZmEX6X5qfCHVHPENsfbTfsvNHcYDBqB1ExKez9yqhCfg",
  "key8": "433UveQTcoGGk37iJe2ifM5jruzXEr2LaUDbaTQKwW5SineFnaPVja81vWgK7Lrij3JNKgmCNcSWJX2vrPbiTykD",
  "key9": "233iEdRZRn53NmCvCuXdBZERYzkcrFNLjLSkAnkJ8ZghFAk4XraYnRczUS6ynJK89143vH79okPacNtxvFzgyGJp",
  "key10": "55qXb7nDZe3cJkjwcDRjPEKtuvNZweKNfAZk83Drb7bFjkeTtRmd9FEU9h4MzL5FjLvcByPijVDkafN2gnCy6A1A",
  "key11": "61X49QZPq44gUrcdvz3v3Jo6y976NtyaaocEtoCaegEaXyfBPQro2XeFK6aRHw5ZF7bZxX5Z816iZskCNi3eTXvk",
  "key12": "3SYXLBcCYbDNewvBTtYqAPkAeD8x1G9svK4Eqh4VCwxA1gbJrGxB8aF3ubus3kdu8pGUWu46dZRznkg1xJpXMBtq",
  "key13": "yyEPEe7297PU6BoGZLcx7uDdNtC2KwBBW42rH1e2nFXUrMjPTQtg4azBty9yGx7DftK2WnddHeKcZkEA2B6XU8n",
  "key14": "3mnYetyYHuYV4HZabL8ByKfQiacqvohtWjgq7fvu9Zjo9KcynAmFmqpoW6HK5JPY6HWRC1aGwoPNVDNyKJkH8wHP",
  "key15": "2YxncT89Yq3CLwop8GyFuot59oLHKV97XGrgb4BGRUSpRk4LPQ23d3B492UhcTfou4VDDvWcqCfNx8tnioYGj4af",
  "key16": "2Br1w5vdtAf7sXmHNV8bqxZbGA27nSzx9rSYgeemDNwYNekwMnkLWnLmNxCnxkcwhhraww7bAgps5N1UXL22oD1d",
  "key17": "mVN22s53RPiuzr4bDkrVhuKEQqVsCcA6UQmtV7Lb9LYdRDJbs8GApP46rc7BKb9dgdJmwFGJ2EFjePAwGFVjxt8",
  "key18": "3v64Y59UjRK1Vb1fN9wzfTECGBWvRUVJm2EKRnPeAVVSQy2b878UpLChDiQAurEWrAWQhf7XumUBBtvYEAMR8eA4",
  "key19": "5suUYyTRdJWzVh41dGBc82G9xJmtLR83mH1P4vUsbh6CUaBjgbbsESyJsuwxS1C2ApxVftkoJQF7Cq9mxg6ATTSM",
  "key20": "3sX63KTqDN6ELC4cpAihFqDYdUu9VZWRGkeK4SkwGo3CPTZZCaAyNB4JDHuu5THpKDPAWnc5WkLouiY8KFpJFBxM",
  "key21": "32wMhRnLreQ4BqwkQcGimpfnGZHtPZLHCHpnfRe7mbWqk5FBKBp6aMv1vX75TR8MvMvFfaqiEnTTPMjiekh7v9WD",
  "key22": "3bAWJCqD7Po3n4KDQYQj9n6Miojp6ypeK3AWxZkTc3D7V4PQENPzE6ZfDiRCWhBrCJ5R6vKRx2xrbHRhBwVRR2bT",
  "key23": "5H1VhZ9SUmHHoUVGv2Qmts6ssaoK5ZacHWKnRtyc3cbcijwCy6qdpVqiuij7MV1qLuAwuix1RKnNVJiJBB9ZR3KH",
  "key24": "3nP8rYRnwhbhSkKwfhdWNJMnTRPWa9u1LzvNYowgCSeyRwEpZEpPkNtFbvSrrYxbr6Rur6ebheGFGMxEmZZRDF68",
  "key25": "5SZDNYbK98GZS2nWJURNhY4KD5KmXXL7zFez9tj9AKpPTFBvjKiC6wsFL9Sp4oGPXAZcXHhdakXwBFZkhJzh77nA",
  "key26": "4jTB8G5GgsRFQ4E891Ywgd1cizxRYAE2EkMg1hoFiEht9uiQSxKBfP4CU5JKR3epJmS86DjgqhpS2Y1m3t5kFCZa",
  "key27": "3FNXan9GTsCBxV5ggh2iBv1w3W66dchBB815f8Uv3pMFr9ykN3LouARUjAhKt4BUqRNi6BzeHmLwX33nR1wQQJFC",
  "key28": "5UvmbeXwZpU8Uwxo3dvENdAttyE75yjg1WkMfRLDAefVzsR4o2ncYaiqXhSHgw2AiFfshFBrXWesJcJXH75hDLqM",
  "key29": "3V1fmzbTJPMediL1d1JxymXtyEAtybzjAyPAa5f2GUaqo78t3Ygp4yUiFjqjr1rPd2m9HPuBWBHWQautJVTaoxJU",
  "key30": "3xMv4TxyKvNhM3CFLkaih7fRVhhWBWiHLgQMW1joE3ya6vSennGAYRVkkQUsSzGvpWBXJt8fbV4DAqfLqs9PPF7s",
  "key31": "4prgtwz3fNS6JjjGNbfHFH59yPoNRD5EzK5ChsPZA1qUNqXrXfMXyHWtnu22apgipbJMQ8VVzo59e1unQwcnu8Nq",
  "key32": "4qhYaJKSd3CkMsCGgsgvMmq1UzGK2eKCNgmWaDRfKU6gjwhmWg5CU52ezzFteB2WRVeRkcatVZBh67mNAbK34oqv",
  "key33": "3kNoKDBYM2zziLTpGQ9LYDwDSBDHPZpwh35cMDfEEGmPMffG5obcgf3D7FMrtEzukqVnv4aFshv9D7eyamG97F8x"
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
