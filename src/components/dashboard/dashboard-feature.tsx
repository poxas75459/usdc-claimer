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
    "3fiV26knXeXVpJWPFgrLr1fZoW1DJQ9UKC1BBgHzGCEGL2HQAFeCCz1vvayghj39oUyuGUf7nhymLiG4F1St2n6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S96yaMA8Swcg2ZSiS8fWfuuFSWZXMx6pvbbujfLwNktnqDEkgGvaei4NuwdhxKgwQiD8sTtMypUQ2GbdqBFMBHv",
  "key1": "48j1vdmhdNkCGtGfE4Po9dssBAXHAytum5E7mARc2TXL9pvN9PN5QGVpVTvk4Loj4zQkUNFPCy68bvrfPZ3jUZ5n",
  "key2": "3X2mQ9gJ6mzDwULD1mnVQAU6XmSrDTBGKVmkv8t2YdEAZKnHCNn9QvbaQmXdLLtLBf5gLXXvyt1R2SYL4HnWYj8",
  "key3": "2TcoQJQwW456i9nD2cFQc9g31bAajrZY8vbGDcKhrJH6CBn5shAyHXbtyXPzuTHa4roA1L994hk8N91Kcvq4vpgA",
  "key4": "2UzX3yAwJbRxRAQrtPUAQhuztX2B1SfViPWtK2L6kERmgTc1DXKd46jBqCAPtidaMxH8m2kEwv1QARNWdzEPBHDq",
  "key5": "4Uy6rxa8ewxL2C5q7u8AnFtPY6bowBrgQ5VCp2Qb45gvMH1ZxjX9y5gY5RKrtkwFw8BbP6vaeqFKm6dJnd19tWik",
  "key6": "2t6KFN7gBRwyZf9HJZ6UHWFgSrwTT9Q19cUK5Q9KdBtVoHD1GhVaUeReiKEN5ViqBu58ngK7ZNTqFHTdLFjUhrj5",
  "key7": "qPdxudv7emFX52TYZSQkfqBfnUsiS39pmfjLX8QDwgrBErFZwuLW6VXQtFqgZa6YQsTrWcTZmQ78FqU688CbEQu",
  "key8": "47jLbzTATCEjRMubeAbK3DnVqYz1hJifxEYZgmTwuzT1JCShXiVptgzFAAuKFUL8HwtJt6QCcDdttDrrhmZNtk1C",
  "key9": "5GWKA6EQtKzUtjBd4iDY2aj2g3MPA5mZZUrh5WESCHZ5iSsrnHnwYJ1Z8dxgq4zQ1QhnonMvt8EnS675rZwNEm8v",
  "key10": "mmrNjggM2QDLUAd3gpBXgxX71BbPre8AuJXpuAs82d63GaCCoBZ9sQhVvzUkdj9NhP6unsHHZM3ygPj8962XmfR",
  "key11": "3WjsgrKWP2JmpNRnrHbEW8k56paGJX4oAP6r15eHxPLzHcPKHL6EPBW2LamccoGbujkSJBWsDkcU5hT1zRPfa59k",
  "key12": "3qRwq3rMim62aAJ3HTGWK3BQaCGL9SfhiKiy7oKLfWxxPGyxjKZDjC7RRHPQy6jXafw8UzaRQ5n5EcQt22LMNBmq",
  "key13": "58ipDWVh9d5TXa6ZxG1m6pmJXFm63maV2mbnHbxkw537jbFtrhTJMM369LCZTpPZyiBcP6Zc4tgnigmps6NeFYrT",
  "key14": "4rgxtZrdWp7ZdjQ1Mt8QLxzXqGtZQzYyzkxKZvpNj2Tae77vNiAoxJ9fF7GVf7BEXDBsRqJJ4M8ppWL9CNe4rGbc",
  "key15": "i4Kq6za2GU1LJFKfG4G2KpAKCMDK5CEWp2AjFYengyC3s3q6wBYdBHgrNWmMbZodtUgipsbZN89sEA7rBLAXDuo",
  "key16": "GA9kCKyojS52t5McGk35RoDQv6WhMX9HFbTSPKbR8dRjNSYxvTphnbWrZ8n4PX53HAkoB2xKceWGUWYFRzrUWut",
  "key17": "fQsQiRBcZKHAz6rYYdpVu7EheWu6gNCiKYLgpZbyXDk1mPDps2odxszSpbMZLXXiM3vB2WHckcJhEoM5mMtFS5k",
  "key18": "5TvdRzLLrPsjwUZm9QqWwTPwJnajPmNhDUoXVzXwBC7pynnSjmdQjX1D6Bt52Cpxs3PU4QpG2v9BLWv2FToGNMzM",
  "key19": "4QwSSTTKqkEeHexoaS53TSUcv79iVhwH4kk2qWbqpEzcGNyUN3SXWVn3tbJFAZGqRcYFeC5BKFKar62R4urtQixa",
  "key20": "4La9sbS4vfhcRYLnRdD5WHb1M85KRLpjy1q9NS7WwZGUCU22BDxnW7uSicXAS2sCrbJbx9ZVKETBST1RbTsQ8t7s",
  "key21": "4ZHvKNcM98CH5uTKjPFBRCpVv3JyYEyPQv1zYsBz3376B9yJRAiuQ3vzpKmTffLzuwYvCjshNCECASmJt4PURbQG",
  "key22": "666pywShQ3v6u1wp3KdrhBL1yWfKn2L2vXD9rBtCFan7V987sjsApW4k9xyBnUEAiuFzUfTkLmU8pwpgn1aeeHZ4",
  "key23": "2TuPS9RZLxViLNFFFrVhcAp3MCALMn1vQxs5aRrLaZ5MRDgeukku2i2tRCdsR1jS8RYj14ik82JPdXZdXKhv3DAz",
  "key24": "2uqcyLeX19btpuYzd9xfQt1b4mo8hZafzbV3sbe81jTceCtjw8WDU9oFsxaGi2FC1UZ9MLb5aMifiKVEv7tZeLCU",
  "key25": "2Z4Z2R3z191MUjFE3tccMjjTyu1dANPiwRknsfnYjbyd43CpNAg9HfBZgovs4sWJFVz5om7WZa8PfG3HZhrzHkdn",
  "key26": "2qN9UyVrPxggDbCzxUBfxmy2oGghTPCKrysoqGsQQSVBJLYQyExtcaN457FX1LMmbX7rJUi57D9QdqinZqY3Prys",
  "key27": "615WWCWHdAJiKw8Ecg49ceB238NNeYSWzGu4cJdtSiu2cvqRpTt7VjeWqBj1ZSNmtJMtGK6fjPpUB2fniVCwj93C",
  "key28": "5xrSnHKNqdvAqgpfy5VKpyzNcHMMNbDYjqewAzLwod4f3ER5QhxeunBUFQ4cYejd8twMqWpjw3qKTibqfCc58gLv",
  "key29": "5j894ksq3odcs5v1MmiHCkf3grMvoeG6EtXQHRyYJvhE4KfedvK62pGUqkiWqJz8XVThUXzu5rx36g8Hpn3BTVyQ",
  "key30": "31BJXhZNzxQR6W8SJ3szQk1ZXG4V1WMpRWnnyHYSQVmYGAT3rdsJYeLgyKpNdrpThYLamxAuMQmt15LW1JuJUu57",
  "key31": "4cDMJa3UY9hJxwbzvvYKzR9qMy9GvEjtuWAkYnCVkPHG5kwVxmaW9zofuvstM3a4fonb7DzKrJV2LJBnVJErgtLp"
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
