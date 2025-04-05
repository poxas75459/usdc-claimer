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
    "ba1jx5Tj4f6eFdztYGUcKo74kuYTDnkRsfqsp1fNWhPoqasT5D4SDiZbNaPrDTHJJRMxW6FeLyqhw1hAB4pQBvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yFTvr5Tq346BDt1g4soPxqWT9hWgmkg4dop77b1TZHiQK8piWQfKcqAfbRrHibqm5dbR7P98JH1yATZmg7fHHfm",
  "key1": "3CeH8yArSWo2tSfJRqob3VbwuFsCu1dvgbyLppcttoZpGgb8U8SFs4MPoUGgFdipkRY95DW5TNyTY7AHA9aKj2W6",
  "key2": "5pN76gqshkn235YPtWr3oQ8v47wRZhJsrnUamr9X5PXvAeuxz6oW23AgiFT7p12aSWP9d8sFbqGjEb3Q1WrxBv92",
  "key3": "3TSLYUQaZqVKPf9A24z1UcPJZY2HZq4eCwvvw1BXaujKtDY3irzfnDSc8a3XycaYqFNWLDL9hdnXZGbpBWr4eqLM",
  "key4": "2YD8HqniB34uhWMEN8G9XM3bWRoh9n3uSznvQr7N8ptMjQZHzmKANSoaJAnhPEwSnDfof6m1BRXuSMFDaEHuoW5v",
  "key5": "5nSZgZ9fJCfBpEaAgGUtDGfA4gQ2aUUoKqLdyhAqXVA73CHsUQp7kRH5DSBuzS1ctucmPnnHVwr2kWjG6UuKyWVo",
  "key6": "3huX1vnKkYw7LYgftkRWDrpuSkoTDyUou2k6TY11dpT8Hvb94ptUchCika7XJoe2AJFQGNei1g6goYUo7rbrC1KH",
  "key7": "4y1oZhzuBTkrKfHhFN2AuVQsnq6QbPrSqKDP7tprGizZPjk8phXgQFf33cLe8xoxyd2DfVoPRWHY4GmLXgSXcjuj",
  "key8": "45SNNu2rsQKP9qbzyV7REo7okZ9HsPFSPX1cktCw9UJBv8PdVanLX7zDFzzfMXw3PWLsbchUM5VQfBoAJJhqiZ2K",
  "key9": "3YoeW5HXNhHvKj7fiCH1cznPsqG6bZs4Tr2nTB7Vrw9xTNKA7RLFZdWz5krzj9vRfSnetJ7dDVMaxfLC6D13Jv4i",
  "key10": "5PWYgXKS3STGH89537KU6PtX9bnqk7pesArBHaTnmAqzV5NCTdmf2RTzKEcgxAcuEzKnnQ4zdte1zuV3UmFvvizb",
  "key11": "4UuMsoHwSxpdKfjagoi2RLctKmccWMNn8BJ7rBbMiX5xMMVXJafiDANBa6bxthYbQr2DFrE88TR19LZLMT8nf9yg",
  "key12": "4cZ2iJ3UBK8YrkkWjdS8xQ54zj4eCWHASBpTujf7r68ZytqhsZonnM52oChB5NtdDrxx1ShM2gzpycFofgRhAUFz",
  "key13": "KGXQQCvQd6ivarywcgyDoVm3kg9DgGMpyN1PBTHEnWz1mat7NVhhmcKeE6tAZckWFYnJxnnS4CnbFWUjm6X9jhz",
  "key14": "2sX8agCuU11j71uwoPgdApGXNJUQXganCERDzmqFYGEECPpcUxxeeuHdxE2m9VUm1oT8M7pLaKWTko2ApdSRhiik",
  "key15": "rcjqoLZg6CJkbiLq9chQCRnj7qxRg56fCZT1FswmVewewgrYkVJCsqKsGb4zN5QG5fZD8qD21D117GrYctUjxgR",
  "key16": "4goAaRXW4ZXSnNT6W5ozkpwXc5xRUVouKY4Hwd1NBM1JURjEReA7CUaaV687aLUV2RzfAEVPYkxgM8mR6NtSgGh",
  "key17": "2MjF3sVfY5Et1p4Yio3XpZWeAx62n94BUh4DpPgvvLE94QVdRgxAaGTmuqr4nQuB9BKYwATScL8HFTZQZDuoXPeM",
  "key18": "1wKnFQttTV7uYXqwsMxxBPkzZGpexpqbtdGZmj8RBmzFc9hupCYD11xDLBcogwMC5TQRpaZtMs3hFapGMYufKSr",
  "key19": "rDRqVHWMkXwrfWraeqjA2HNS3MYMYPS58pqr5gXB4d6NMMPvpyBDVw7gKKioiJcNAWY6aX9SgcsVkSnQ7Ffr8ZM",
  "key20": "3rGCYenYGX3Zryn78kkQ9hKUHRsVLxiyLzbKe7H7KjURiAuKNrvY7BxnApixpSujZeRjr36TCxJbfsZDabXpzugh",
  "key21": "yDwsR7AD5yAkbXdgdua56FqddQCHXrzAsHPDbtp8CWns8wQfrHw7ss9K5DxBhDa4mSEuJBcBitWHozfduC6kxqA",
  "key22": "2JT5KszkdKmm4D6Uw4v2sBMRF1HYDDMG1L3WXGv7UXUqkYA3QgP1ZoDLaSKE5ssPWMFPMgKZCweJRxzdBtx9SgXJ",
  "key23": "2WH4kLHgDY2LFHN46hyC9wqc6rvczjq89QXx5gGRs5EdF2GuhvNorXnEy5vYyHXp23GZJvchhpBAirWJMsd1PkhS",
  "key24": "pnQb6DKBu4BJjghmGTFhAKEe6jKECSMmTF8whPfV4aKX4w6hHfLpS3mnhSSV2s2vYEFzYcvczfkaQsFLZnoayC6",
  "key25": "5Y8FMibrxcxxPF8ahXzcAWTEBng5SmYTuRscct3wjYWw6SSoRqy4Lkb5Md8FekSQeZzEkhXQeqycjQs6cNEhfABF",
  "key26": "5a4FdRzXAtKTG71QK3JPbXPPvArUrkpojnpPQ1V9ZqUREaHGyq24DwQmNyGNqkTUQouArypJD9bAe6rq5NPWzdgj",
  "key27": "Dpzp9AQXiXXWTCPrefEgFz2rwUa9HjpgcBaUnfwqhgyokw6AyXGkLSRkqPXuhsZ56jpn1ERp2PQAtR4XvHMQz7s",
  "key28": "od8z71PCNa58VCbTzL662cusrApdTgSCXgQHnPfXAaHpR563nskRGFnNujexCrTE82YqnFhF4LBPVSJZzvhtv7z",
  "key29": "5wW86CRvzSsE4WD29Pk1kWWYwphaSaRivoocEvYm7RVjVCuQcC2MCtRj2287rETyN211CvD9BXweLQmVSN771SBs",
  "key30": "2hfc8Aa33AfG2LEUt8gitobXDe79MenjRMLRRBHLN5DYt3RNMEjwtSxiqinF9cCsWy8WpBuBveaNCx7m1wXcxYdq",
  "key31": "3382YMy5Lw8AYpEqVEVKju6Ki2HNEwPxa549oUtNGYgzRLMAnRbDnJZtwnCF1LN42BwLVJTWpsQwFs6S7ybSzsA1",
  "key32": "2iNZFkFneKvhoMtrvpPLcrZMb2Ky9iGogxqfUoAR9y5rZFnJAKe9mFabk7pQbfe9ypTUC9SMLQ4zv6TKaeU8ccbn",
  "key33": "3D27VLyVQAMomqqXGUZhAyfH9sstPEe347KUaqtmnFNRezmaJCfT2pCTPYPwZtuzpbbLtuqHtYMErPYMK7gT7qhL",
  "key34": "4mLTGo2TuwkZhQx61QXqmjduMpWxgFMEBKGGEokcyicuZxPoiK8KvQBueZ3JCD4XKhsuGcYYUK2dC1NHXUVQK5VU"
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
