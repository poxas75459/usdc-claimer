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
    "5Fn97Qyt5egxUH27uzYdRuwGnH8pLgap7pySr48dBvRH3Pk7xZEerwysvD29LqNtA97jPJsU4AXAN3V39ovR9N3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nqTYvjRn3GH418DLiotyFAAYk5NV11VwysmebDGqiYRhn55mwQsdbweAqg5MhHsZnwRS4dAw3aFfNrM3RAVofFu",
  "key1": "5zfSd14AHFmVNfG5gsJF9cEvFErJf56uuKHCfgXYNe4y5QbrVeAGJgoJJJ6n5f56K4GKqL1ydorqoH3DZiHvD5on",
  "key2": "41usZjikVZmtVsDJKmYxqA66saKMRomoGb9z6STU89MTtqXLuq7jDDhs5JqBNgrVc2VWBGyYvcGoucwyjzYDR5k9",
  "key3": "3bYmsgTyvBVwV4uiRfM7qWRSLqzHBu8mTnEmzxsKqupEUHqeT9pEAaz8nkMd5ejrnGShqGwt1mPCKJ4FCWgqg8wn",
  "key4": "54ge9aKzN25hTCxqQ5Mq7qDa1w5TcS1kBH1NAokzpbqffPKrKzXiUuQVhX4CumbijrZdYWUcy2LYP3etARYKq13p",
  "key5": "4gFQ4FdcXEPu2ALnTJqzuzBeNExQ4awCKKRU3kLDiZN7Ln5Qd4b3mQ6vrHurDQXuPcafEeoGXzR7GutqJVDu2gwR",
  "key6": "5HKDF7PqyafAeKgUzGauSaSCjS65wMGSq4v3jgtB4e2CnDhwoSGygurtS5cmJVAmmRv8o1uunKHr7NEXHfwmL8tW",
  "key7": "4Hazu5jAe8XjoPCxLLZigU4XjTPHxbAa3qDo6KteMXX4zRewUfCJf2zuGuWm7AWmXzCooLAczxMiCCtwx3Y8818C",
  "key8": "3bcVXyf9fW3bD6tTVqCuhp4mBfSsyhjw4UfyBbidYUE2VnA1t391w38MvnYJwp1HE8qhyGaadqT4Kr4C8KRuKrTx",
  "key9": "5LXCiCrestWUDGmJQru1ac2YTJhTsq5PEexDVqHw4H9Q2NwSjX6gJTcGLJ6LKjUYasELHT4gVuSCDNYihYVGWJWE",
  "key10": "297xyQDr5jVViM4vgfCiTgiLbDKztwkoSAia4K3D8fVr9iL4joGatmgPMJDkFNPtRsBk5bTAvS1JuZoyVKKuyajb",
  "key11": "5X6jxYTwdMTBorGFEw1m4t2An4q6MDaGwkWfWPfTaMj9gcgvnskc76o4y6YQ3L6vhDzdbfJaYPXujWsZoYxq1Tfo",
  "key12": "2u32SkFmk65cdhzz1pajVCLY3BejNXK2Lsp9U7ZBZibTNR9bi1WXiq8Xbgw8ZmZedevxXBH5W9XdgmdwEoc6pEef",
  "key13": "4SavAC8Wmsb7Etpy1wZUWswT5kwGLpKkPsFLrrAwJKUYUxUqAYrbKJi98To6WJyjpHTZ81TnurpSxEuUvL6cixnp",
  "key14": "4LPquvEMfbgYjcpMB6QXk1p5TasR3NxfSWXcWC6GXgA7G9WLEH7oF2WKVVgbtszUM1EWE1KnyF4e7QnSJF6cxJpo",
  "key15": "2Vh6BoEwL1SUh5rdP1vuH9NoM2whGqxAXdTwJmnmgMYGspVnA69j1eQ1smK5d7S6vYbZrNc8Uu1TTmQMfNfQGsCR",
  "key16": "4Mdt1vTAuEY1FUsXmhqNErU5rEaQSpTkgipqtRWANw81e1erDcpHyA2VNNMaJfEbboLrs1n8z84BUxHoST6QMwWq",
  "key17": "4MzdZfFuoeiJ1tCSMLpHH6BmthH8bd7JEWiWM9tLRVxUk2Lwu4ewmRrAopXszYW2meEhAVQ3WaibepZq1s47hucg",
  "key18": "SNVPgZM7AtMKujCdoYrdD7G3Fv8GhRS73umMCaxnRkSDfVzCBCns6qaVPkc6WpRWVpoxFWU64p4sVq9GmmbogkH",
  "key19": "3hKEV9cXUhgXbNQPxUD21QYLLZnaMFcYRqzWsuBSJqNEzRGKxbj8i1NDtpYnvgJ9Aue1S9tKG1Pg1rhse8YavQ6U",
  "key20": "53CQCXwK35doVv9wrrBTGte1J7GduB8hmt2UUzEhYQEEEpnSSGYqMW3EsHCUEKzYhBADLQ2Bh9g7eJDbPqAhqUZS",
  "key21": "4FZvKeuKHXQDxe3LpHcDfKzRTNg6Vee8twowJ5AtBfHS5qVJsALEykDhti8fSS21aopN4My3iHc8YNBK8dMqLz9d",
  "key22": "4qHjtjZkGhG5jfVUGmJGu7iRHNdeFS2PrayXrVL9eGGPwn9uJLEeiS48czVqT8bw8CVARQafNa9D7B3mahnFRsyG",
  "key23": "7xnwzbWYPit4rAJAyNs4EoCTs6kQrnWtn4xts2UCAFNc3fU4KDP7RHwpNdb36c3prZVS3CJPFAwFCURpATFfmFs",
  "key24": "5EE8CJbS4BqHooz1bpBKTm8veSFmGHUByUeX8cCeS91YRa9odDKSb6SKgo9ujyntopsb9pe2zmXbNpwNF6KxGBXX",
  "key25": "3HHzNVUm9hwypwVqvVp1MbQRD9EyzagtJfzgjQERJeQfkgLAkHx6V6xw2L5nrSQt89fYhgbTgdxEWAWFPaPkqmeZ",
  "key26": "45pQDtLwup6mPpFVzutHToUeMdB4XxVGm5sdYXeVcMWTJ3ZpZscnsZwt8NjoipXPP1PKR6PUHhw8ZqtV4Xk1LQCo",
  "key27": "4cdkAgiiPRxHkPxr8n5XoVcAYrQzNT8rHmPLBwijCetQhH6KArywv4NbzCHy6txKnv7essM2dCWXmsBZTyJ4eJvM",
  "key28": "s2AUpTpb3hFAUzkmNyFeJdkRUfmv22FiPWua1DPPSXNyZvSfHkipYfVqHpmCKGvrh3K7CGfSz8k4uRrAY2Jb4TN",
  "key29": "fynV8vBwgn9yQuHJcxkhuGCUvBKb3XnVxPnijKEdpzAweGe2abg5SWeMZ8Gi1GzqF87S65nqenGtHGbUwf62GRQ",
  "key30": "26ZPqd1sQNmWY2YQK1ZhG1g7EivPqWjSfVeQRhtfc4rr81MiPZwH8P9fKCPrB6aDiQLuViLEYTrHgMVD79yGZfwi",
  "key31": "3iqg2sKL6bXXUvywTd7Tpja1E2WcUPUjxJZ5LCMSphK7ySVhQH4mUTK4UxJS3vPGsaomGbMtGWtNvQUqAQeCYogw",
  "key32": "jWLvLBCwrPP6jra5asReaFZfqjMBaJHuEsSagjyS1oD2gAmapnEt93q5jsoew64ksBpzHg2oL1kzFmzMDVx8mSw",
  "key33": "YGNuY2suyXh7TcE2s6Rp3F9WRAULezBhRrUM7W7mgFieriCtVwSSWm1jiyCCDwuCsMDHDjXRavzgFLBYkBTRhQU",
  "key34": "46noNornmubMhBECsVp6rPL9nbQhzTAYmAkS3n1CmLnkrQRtW6imMWpKa8dGsrzDTjWC4dZP9cMp7dyX93LHcabC",
  "key35": "2fYedXdfhdo8US5RZruKKDFrN5pAUCb4nzQtPgBtg75ZZvfJJFA5XfFiXiJ4ffLhssXMYAKK2eSCfrVQTYLw3yR9",
  "key36": "5rVZssnCjgzqAi5sDvvbTSFsVh7y27bJitP8msuxNZXR76k2WhbqTXUoW1JcytWyNNc6XuTrArZ22NpuDQRoYaA9",
  "key37": "2Q2aJW79xvbKmLu6bS2VmDPgYgWpUTMPCZbZd9hEmxxyU5xSDC8JupFJa32uHyLcB89rdkSHhvQ6zbQicm8xJsSE",
  "key38": "BxD1vW29Ae4dSCLs7SQRhRLATehyyn8FnPa6drN9wEfFfy5gFAxXjKLU3z6JtHpvCwB9sGQRcX5C482Z754E5iy",
  "key39": "4DLrQ2mSLEbxtobJugFsgBKWs9Yf5YK6CLC9F6sAmZkEhXkLVuu8WsMxCTE12mPXs5gpyBjBzcxFzu3PcQ986Bsv",
  "key40": "2tVf9xCtiF1wj45yyHo7ja7MyeTzoitGnzf6tGrZzwQrRvLW6e6NxovyjnZdFayybw8vKqoySQjhHmyTDUU4ZjYw"
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
