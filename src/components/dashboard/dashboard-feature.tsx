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
    "5kEMn81y5Zwqs7vKTrEVri2dUz6yM4zFdFC2giN28LsH6MdctcesJGctdzzNQG39EAwZa6JDJbb4FynZvfgpQ2ko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58HUaxknGDqNdoH814NMUA5dtZRi6QStXAJpExzU82gt3dkudwUEXccfPSc5s8VbB8gz6gR8zZT4c2HhZu3C63e4",
  "key1": "4hwoUgrNRyd6u3qL9pxLgodGxbgWXMfMs1LAupo5Dq8CwLwaGEgUCZEVFq4P5rWEQ8fsQSttxX9LjTsFKbVRNdRL",
  "key2": "5psiL4gop5HMhbQACSHqsg9mLNHQCsCsiNcYMuoLSxuAQL3Ni6qxcRp6TkVPFqrpCtEjjVzjGVa8HSkb8TpgnTKs",
  "key3": "3oyGbyPfXTpfsqZbnJnsJQCoYnEwrcM1GmmqjTCUt68PDdaz1uzqstFz74k52VKafZu9hVSepuGyc5ZB3vD49QWc",
  "key4": "44ezRnhnZxTt8HFmc2XFoUwuBBMQ1qf1NPwCV8GaDoyWJW55gq4LTp2Y8jDW47MVNS351dZATSzT34HmjXqADJbz",
  "key5": "GqbwNB9xVHHuTP12jYwAuLgVF5wE3JvmBP7J51trSuX8gmMLamvv6y1DkzLLnkwynxQ9S5RMmVAxSrhsWjv5JqR",
  "key6": "57Bh9qi3f6k8NaUjKeehQKiWqrh6gdgeLy7WAr6Cz7tNqw9CdkqRAAbEu9opN2SWi9hZiCN5K42jpXTRjg7emdKw",
  "key7": "4UgnhwF76HuD9n94uUKj5Jeb61Z1v5gpyNpLvZg3aMdMbCkpGsm8Ay6gXYAsVeZdSnjhXXhswZen6tAhjMkZ7jyw",
  "key8": "21HdRJ1tvzAZEBzzqzzmqZ1C2HbtEM5upvRoFeuDUx8dECwvHBGgE28HMK4ZmhuvEw6VHnEq6Vy9WpZh9h3j7y7r",
  "key9": "2bMCdxzgZPb5MYrm8CQbXabDFvjUbFdBKd8gLXT6aBdqBGGMhk2t2CV2co7n9dnJU8WPK1U3sceobS6TEUyV8wEn",
  "key10": "2sAejDURjeijFkfEAdivTZghTE8z6V56nYG6mM8CWB2WX4uNHG6WUHA4U2Y77HUvcq7np5U5QjWNeWW6bx1JXqpg",
  "key11": "3LNr9muYxcYhuAwmrK3i3cYQq5pgXhJhJHg8XSKFw5R8EQKzho5BA2zzo7M8XoWap7KYP8x5Kp9eAPJivxcaFAT6",
  "key12": "64ZS5mpuR9T1np7rsGwgdRiPUwNAqGRePawz3sqwtnkpubZEf8E1Tb8LWyj4UHpEKQp4mrL4p54evqXcn7uRxmY1",
  "key13": "3ZMEEa67oBvh2SHEiNLuWeWtHC5RACYxysRC9f7ELVteFCUnLkpFLism6HVJVD5TN44dWabSxPHi7mLwtx5VSQ9X",
  "key14": "2oH48TjDXYLuc4Vo3AUxaypTFFw491LszFdudhx3whQjua17gBbJYy6nocWZ5C5PWR6Dedyv9KtvaE9jTNAnHzu7",
  "key15": "4AQ41b3J2YSGV1ngoR1vHNZ2Zj93qohs8h7Vw3qUkgFqMH3DNjQx6bvLyMX1VN2Fa7cUu8esZmaPKtDokrpBmHUB",
  "key16": "2mpe26e598bpFkehNkGdfBGm6Czi5aZ6SZ6ct7JrTNyxHMfy66uxNVhve5qXJ8dw5769guWc9GxeVbWBVJzoAq6k",
  "key17": "45F28iy3FYdaMVazMxfwG8nvup5aUkc8v93Muzy11V3A8tv7Gbvwrp8j3rZGUQ2M62hodN13HspWJ4YDRNCdFQF5",
  "key18": "5wL2Ac7qc9So152aSJq7S5krRVmSYB7TMnYUJ5HpBFgSFMy6oaKMtrFsuchGbAREHQTZB9BrN5WbBJZwkebCpf3N",
  "key19": "KDomBLwXARb1ueuFYu178CS7HKkrT5D3Q3yyAM1uANCPjs2aNJSRPpGoshtrzLn77D4vWJsLDTi9gY7LUnHf83Z",
  "key20": "SPe2e9sDUgKa6jNbwgH29b1t2Ffmhpnc4udnXHibNJUw1s8tfu1oTDpumCYr5DzYHDr12Z6MryQVt7xkobKrDrc",
  "key21": "KCG9LimKVQGT4xx5rNW6n5Uta83kpAAgMTyjP1G5GMqLhwr8vrYD1etohQzWiPSQJTjHyF82XSseEqLH9CebwKX",
  "key22": "577pyvqiMMR2BsFDCUoGKKybQ2L5wCBSukysn9JSoFEfd3MA9tz5Wx1Gg4VkxgYet7dCVzR6bkFRgjmzpNyuuvXu",
  "key23": "R9PHUhfxqWSbSRm5iaVHSaGKmFYQqjL4JtQ3ivXzGELz4BkP2ykzGxMx983LoES1f14weHwQ1fUuhcTj3a8Crzj",
  "key24": "4qvLaySo2RdukJsJ4U9ai42u3vKsWy2hsdocxCRVT9wmrcoJWA368wQL3eN3tQDxqfVvvJFw3vpim5kB81RkMx5x",
  "key25": "3bVACyt4xHnhrHLDjd6qJ1rcWVUkUaWSv551Cep9LZqJgi5d35fj3C9QQZCqhwwMV15fWfGk4pSeHZEQGKec7Ro1",
  "key26": "4F8iJp99e78R5rEmDm8PqQ2bQ11mkBxVkeMcgZoATdwTWzcGXNxkk7wjSkxdcSVFh9p6YGf2wjRP6wVzKg7Qemu6",
  "key27": "5yK7Bc5R9CRzv2bh9CZbtpnLRE5rXbW497JezE29dNbLibpbd1rNFmju51dGwVpm3dTA51B3BZ72DiWQJPHfrnDM",
  "key28": "3KjDFp8aPgtfsL7ybFfUh4rsWBzJfuxEyNeoxpMmp5jcLmefkPqHycFPcF2aQK9R1G6f3rcu2g7yemGjRGwuqHwA",
  "key29": "3GxvgWk8tfJmhZZyn8mXK8qE4eZZ67Ah73tuP1z5wYUXkzuQGj3Lr4tk727RDkCgeU9Px6Q1ZTYYNQYdVZ4LMYcn",
  "key30": "4JuPd6QfmrpN9ATnHBzNYVRMsdDeTVvFwDf8VuNWNcoRVKMEwrwNcVkVACWpZCkRmfTpxiCUr8y3DH4fdqEr9Q7R",
  "key31": "3yHUhtdsV1aTHn21wNK18VfLyQuguGnYtQaESLE2A7bzHS6u4gwgGwpe9c2hoFFK6WXn5fA9vzrhz3PHGczzqy2R",
  "key32": "T15KnY8SvG9XK48a9n2nVaYTBh6wwcSWaYVqhNC5UwUaKjmmJr6cM4HYptiJYBt4u5YKVHT2zfYmZArhYhS2DEB",
  "key33": "5L1YyWjBT1jg4xhuDZk4RLBpCwnr3dCPDmtXhagiyvmTTL1PhdeQm18zQQhgETWFfZTdLyEaFZJxdEEUK4ngeQBQ",
  "key34": "2rxucWaSSE8mhHfZatbfd8VdjpCejLaKUcuGL9wUy5ra5GE612uopxNP2vvojeghTtoYntvGsXWVU12T4CEnaDTR",
  "key35": "46xdGPPQJC22xVt3jUbV15PuSSohgYnYLfPCxJKXQDT7iCVwZKhao3q2zsLRuyF2uGh3R5Jz5LcdcU8hMnE51RUS",
  "key36": "k61BvbxSame2Z2a6zQks2tBiEDxZpcW9HioLM8kZCckLPnJFSWwBqNiUuCAn21JijxzcqdRwNpUWhuYjC3MgEMY",
  "key37": "5Reg8aAzYEfUX5vn4C5qCh1GQHP7Q7b7xSW1WQxjQrVZJUwNHnqypa1c6L4CwiqboDpr2x2nWmiro7uZpppxjUdd",
  "key38": "SmWy8HHpaq2CyXpCEmRGfFvDeKty4RSSnjbNfDL1bYvUWB8yA2HBWxH4etur3KfTRgNM6KGqyDe9Xp2Jrct4UkC"
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
