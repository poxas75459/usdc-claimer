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
    "kHbauHFWWgCdfqe9KnJxmQU1h5RMRVnYtJrSfs6PaSSkgQS2AiR35FeKbsKjoSxSJGThyzVDiXCup6NXeKBG5PP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZemvEYK8TrdpwfwFK6vAJ2HtQXyp3i1CbBV38NnvwBeeQCGHohdrgjpjNVDrqtry9EhgUhF5KqhYxiFyUHwtU8a",
  "key1": "9zf8pJDntGTWdi5r7DNVXENJ4gMDHv8CmJ5K36p1ZmxEa1Re6Qe2E8KAmhZCkjqWjphqdfkhTsuNYygAgFAJ2ex",
  "key2": "gQqRNF5xxAoCLfh686C51MwyBKdDs65PhrRavRSwgKxigusjp6WnNs53BwYsRJV5b7vhmPa8HjoGidU8B8x7v3h",
  "key3": "3VMN9DWPCDngRFYXLXsAweeQ2PZKVZ9QZRWMkqtiCA84nkPuGiua43QpjJDivtqbY7e5fd1F955VMLWx79gVmzwa",
  "key4": "3EGkVVgH5AXCYLKtJ9HG1tMhP1VJhSvYG6R96QWp2FFDoskLEFfoqs3zzJiTkY5YmehUchuDj32jCN2F9knKn7zW",
  "key5": "41sJZdFfwvXWaCnVrXns3iw5YpNZCDmHbTdK89EzpV5HRjXWd7QBQ2T1ggRD5zqAMm57UEaDidTjtPabkLzAHeLB",
  "key6": "KqhNHYhSLrB8A9EVpbY3KBS56N69LNKcaGwiFf1xqXoB2PZjTE7TdiqXvVV89Gw5n1scRiyCaAJp45zrU6d82xb",
  "key7": "3uAND8VsVeBbFB43eVpErdSYNiRt6bKYgDdqD21MH4EcN8Gd1MJ3FsHJhL2qZDHgxPa5opyGcApAJ5NVvN5NRDoT",
  "key8": "3VToT3az1DTqm6tfXbz7bjgZGn8qAxA2sv2CYQmuQwv8CwYi8FCHsgNctaBH4pqjy7BCYco3a1EZ5ZZKsxhNeir6",
  "key9": "29uWhxk2MGhTL3y4eMHKBhm7BBwPNb4K68hwa8Ltn12uZ9WnYgcMdmRPNkbFiEDnEfvu4Zio4EiRsn8HFKsu3X8d",
  "key10": "9s1gCfdAt19bhSKuhWo351bcN8W3nhJ1wPy1MYQzGb662KgJhTQPrzS7VDtftQGPuhvk4VVMT9ophGVHGvePSms",
  "key11": "3C4dWU934DAEarZCG2JayagthFfYaJxyqJ9hEd581kDdYUHxdHTU4GEkq5jDtzkPpC134TgLrCkKjtYQ4yFqbAPR",
  "key12": "3BbTKcww7HjEkU2HqWUq8GRRo2jeZpEAyZBM3g1CFpbEeaTa4i3WBNLBHt3ZVVMJFL2yzQ6q8UnvT9qvLbUyMvrG",
  "key13": "4LzoBwTM4FwEjSzezTUrP9xb1d6gJyAfVTeo6Khh4TdBgb5qaF3Cn27tHyLvRqevwjjLfSdMHiJQwwYb6FqZKV4V",
  "key14": "3Wp4mcQ3cdAMSsexakqaGQrnWTiBo53111kkaqFPFx3Zd4gUDT928JXXPMFZBynjhTHb537BH2sz8yyXeZ66Z8m8",
  "key15": "3PLbweiKf4MnPN3kAUSHt1cfdZCHjEjc9FAjNbFaH2JRVxsq7CauPUbwYc1G4bQXsNYeDY5mYEBcfTDnueoJyET2",
  "key16": "4w18osiESiAwPqU39VBJbnFCHa3bFiZfLjpXRDZ6nFh5U2bFP6tiAbQs7MtFyxjUDa8iAW8w6ULKTVUzQBXJTwS4",
  "key17": "4uEvBWmL5XC3KCkHLeNap8VYEKdfJK3RbJa8vUy4442onqPKUgUbndrP5gi8Ji1x77xotmBRzGgLiJ4a7EieB1DL",
  "key18": "SsaKL5bQ7x19LbaAtq8cDb3QwbAEcySmNwAYpoSo4akxwGKgV9xbdjcVsmZThvUYnXfgEticwXiNgfvTyhu36A1",
  "key19": "3wN41veUj5sFyjkr9fFU7eifT2jHaYccgzMdboYi56Rh2ggyecxGGVGbigfg4GKwKqJFa8aSXJeUVfz64FdaKfVt",
  "key20": "2LaZ16Ly8yW5CwnX5UEuTiMP1SQsJitGg49EYpSRAAC45gYvbYy3Y6Q8Yfa59y7xwN486mBraH3V18ienWkLCcRj",
  "key21": "3ioowjwJoSwmwfEVnYsYZPM7PJDgncbD2drrSgaiFXZ8QY8cMckPumtHpjpLWyJ5nYTEJDdeJE9CYGfassFYAyPc",
  "key22": "4W9x1mBbfj2fxAa8MJ9SDNbKpbMGNFbSmtoAJrAWdgQKdM9jdtVQPaCiAjaL2PESFEv9r7vgmrws4qAD7qskQBsU",
  "key23": "5K1aQjeNq76phCP14iAmvt8xz9W48NmViu1fGK6eHxiCCcCj4bgqe8WtCrGs6Abn1vrXJ3gupDdxcdYTtssr7A41",
  "key24": "tGREaWzw7JGMmjzGqJu8MRqaqWqszRLtb8WaTNV2uMDDAFEcHH9WTsFYEU1jAKVBp61Lc4YyhMYuzaDiBj6J5aj",
  "key25": "66FEUfTpEJ7sVaMst7ucaNGpqVAMjej921D1FbCp7ZtEQWK5D4xqMYnND1cGR8cRd5hysvWErfBLMgLkFz137hXr",
  "key26": "4XsTPe6pgtnph2oRJMN637Qqc2KLAaG5vbQBxKakzaNQh2ZP1d88wYsDc92RHFvFEY4ymVqDBtWnvn8oa7EKRkFF",
  "key27": "ksWGZZ6qirgE7XoxcFYZ4qM5B3C6Cphukma8YWMrwN4ygTZc9tcT4tp2ZyYejcLEq6uB52HwuuPakhYpcxuVwoN",
  "key28": "2PfWGtjKHLFuf78ejW6PAyPxedhvx6DZ3QdQtYQ9DkRdchm8brKddDGMzzM87USU3Frus51ES1e4BbE4mLmANkNC",
  "key29": "2UGz9tzyvK9P8SQMbtFUzcbgygGMavWjz9mfE3gmiri9xDA7qQuktUukxGKsV97wmkt3uEJtc7UTLUn86Q9bdeTF",
  "key30": "2x38hEYQYxdCeSccgWw9jR229Q7D3sRNBeGXZJ1tXrRMC1wbRSNjn7M3eoPA8BvV2ioWvos45QVXZJsdWiR9uqvK",
  "key31": "2hFLVZu2tFTm8ADp6WpBng8pS46NCqs339iCG6WRMWvjsK67MM4oBxhvvJeCaEu2r6b6s4BjMuWbNmwwPKFcneJ5",
  "key32": "5v6jFCzY2Zeq5xakMn6epTgq4KExDuUMXYd9zhjCYnwvY47PMpPw2WnGDwW79DQzJYtfQpZdiH5bZy1wQAhAPD2b",
  "key33": "32Gxz97EvRuEtqwrU9YnZzxyEKvgyPag5vJdzzkYBN4D2AXstEeiXLeubVupTtcr3JZf5NCRo1w1F9Z2VdY1urup",
  "key34": "Bj3sxadPFQcohbJAmtihfL9LQKyKYFUtmEs14Hr5A6tDkwXQLs3PNyfJ46FmQ3Zo8WdtnMMTmpa2LiQrxWPhX2d"
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
