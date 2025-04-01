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
    "5PQoFyjgi3SJj9DhAm7evJ5KaEGTT2wBuZPPcdhjPgKb14vCaxBXweF3YwHU4rBuLDh6bkQHNwk4MkWb8q3g9f9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SWWe9j7XfiYbvcCMUi2hT1pBXoFqmFkYLvPQ3LbvZLgPfnv7QbVTpSjPfYHTHPJJi51B7jtbXm5uxYqE8bvUPvC",
  "key1": "3dDEUCBofiLEbUVdD62egvEB2DNRYpCoTR5yhQAvTN19bzrwPs3wXrzYuFubGEXU2aympdUKqNyCupzUc4CXaMy7",
  "key2": "dwWY4rVnt6ZRv6ynRpaFWdR7qApkKC8vDZNXNSQJXpDN3MxBrss4FP5FrnAWrJmBoX4qZTryMvz32nKEfTn1jyn",
  "key3": "28A5AGJsHiGtuRiLdtnv5Avrq9SVzHssaRTh7BK7FJbaVp4wicdM8YE35id5mNtykihu3kcrzRe6aeJNHsaQ6MzH",
  "key4": "3egQwxJsMd3TEgjhoQSoav989wPUc6fjkCSwC6baYSHSGRNLC1EgirV72Q1Qto5xRznQbxihpVfoUrx7FJxZWzGt",
  "key5": "2vMhGVWdof2uvHSTp12kdVUrpMpgNMeEf4Cac11VwEDiv8d6sCJqun8yG7sUsYvCmL1bVpWe9PWjT82ht3ZSHarB",
  "key6": "f3kxBg67yGzAgSofSm5jZJB1eRgK2npiUacFG9spXSsWhtLxz9miXQxDbPh9jmKWmYPvLZB59e2JP8dAYJAqVKp",
  "key7": "38friMcCBBRqKN72f1v1RhxB1kHL4uqRya6e9cUEhuJLEknvGrrKFSwZnNzi2sSKEVt4p95Mjo9TyGQ9dd9WSNus",
  "key8": "64ZPJ7hbHBJHMybVRADgbCCqXqaxrGEuLTNodU39g5gyjc6Ci9vARigo55px65XZRQCeP7V3FubEmHmaLQc2XxU",
  "key9": "26nB5aXxHahFR3xvtkNQWyVroQb11zXCCJQLV9M7WuM4wDWVyZJDqrYqyyGRArSJjU2P2pPRa1rxkXCENnvAj1p5",
  "key10": "fNLzjwgzz2MLeVCEdiLi2uXoeAjifPqQp92o5vNwq6bcyHYD6j9BAkn1AMYuZK5zyBwR9vzbELQGrKcPoheb7Qy",
  "key11": "4vTvVTHTxVBihhszqk2tPA8F2c3LkNCt1zmPR3rUyHvRCAraURbxMRNDy17P9shBKx6fZaFcEuBzQstow5bouv7N",
  "key12": "4xzQ2Sd9nm9vzUde19WKuP5xC23GLBeziEnDPs9gaPa9gihjTh1N3zkcMFPj7ASPqqfi2y9Lj36YwsWrqi6BCQJ5",
  "key13": "3Kpa7fojMv5swYN7YY8WoouFP64zg87eNYqjVZDcDuUXvTsajyRNGTBAi2vpkszQrDVnUmbR5dq82yPHGN2Dn5oQ",
  "key14": "5wtN7Xnjpz9uaJvE9R2hwA6LrbLpYMZBUbsDow1a3FYDRKMVF87ZtqErZV9yZv4xNmNAV9Eg6n8vZ8vPrbb5eFwB",
  "key15": "43ii8n4aPxxJj6H92Bgp7ThoeVLW4gmWP1zWknkrp4vwEFLx1xc8MA1qfbCkMWJDAXEGErcJGSYUA8Q71oTGpQg",
  "key16": "5EHZNq2FpL8oot5KXtMiGdv2vauHko4dNhVZ8ruBWuX5owuMbqPvbBotbG1FzU6XBTyKX5Z8VtG3j1FUHRcB2gTW",
  "key17": "5Do2RYEZP9hTiDuT9HRo7xanShd9h74UQeF1rS9kuYanKhcLo72A2mcDaL9uErEGNrLPZQpTRT7XoT7FC6EFvh2J",
  "key18": "47xuJNqVEwq51ag84JcJuz58CBfBqZducj2C3hh9Vo58VvRHxxyNjf3w2pKvBx3HDvn8Bmqw9Y51BDErXPpLMcjZ",
  "key19": "4EUwezCpGJufU4BWABwDPXwWoVqvvmBiw56cV95PkwK8zz4VVyg7yn8BL2PEmQJYZfXS75BYgmxSbW6xeUiYUAAs",
  "key20": "gyhk2PyVYfb9ySCWhuMvEdutBG9tGkwsx1tyBRZbUL91EBAZ1o3kYAaqucSmjY5azmKT6ueJNcuffWnMorZWiF2",
  "key21": "RcdrhxbYfZNNenyijbQQP4tKB7XbXe269MsRpKGMFPf3wRDQerFCKrpSKSKTUh9qhigNXgpQmUwVYza69Hq5DFo",
  "key22": "4yLJcn5q3YS7ko7KmFHusZvATYxSnn13gQYxuDbTLTLPTwXEsWkWjaCd7SR8PmepeprCLqEAmbTCK1LemGbo6T64",
  "key23": "5FViorpAyviFpFTuUrkyYWZxf6dzep8CxBaeG6J6MMEHjR56fyoJsZ5uFfb9bxMv19Za9CQKNBuYrDLu8xqXVT29",
  "key24": "4LhyfwJBoPd7dpxGvBc5nfLrCv2xUeN3SPgwdkYcz2AXoXjF5FEHyvXpCbLLW1WmarJ4XHVqcNhr4B3iQ8mNG4fK"
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
