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
    "2hmpu6Gx9NyQ6XGqhPAx5mVNX8dhoFRZ1JiMaYNnaqBNzANXYB4PqLHByuDC8Sh8Ad8zj5fbuBWQ9NNbHgBeG5kG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v4egvXMK5VapPJZVq7SNNpYaaDKsZyiQYyhJVXNyUPE7RKwNRN5EyHYTrXLGMX7abEcU6QQBkiGFj6HjMLsiz18",
  "key1": "4SKL2wzuzRMEQysVZg8CyFsQLs6F443eXyVyE4fv4FPo8StWKMT2RrBnjg8rkZphQhkJyFGvdo2ci6wcnvrk9sQ5",
  "key2": "5Hw4uhCB2JvFYTz48ZzkQ9JLxoatxSiFGTbtwsNVsJduZNbYarJ9Nyj5hLAUvnCSK9MKAgJwkc9qLQCSLMoCzkZJ",
  "key3": "3Sa2GXfvxWqgSYQta79bf5SfPkUyPiN2uXf3hnDxMtJVxVTDMtHeCyLXyvZwUXk9C3gknVpWcbgNigQza8FW4gdd",
  "key4": "3m3Cw7pxaNBLZYhey1KNfCcRCzpRz2HeD1Z9Dcmq4eMvpL4uBq5S1JsfVKZJ9WC6vYD7JYRw9W9rHnKmrt95XvKb",
  "key5": "yzyK1uV5HXT3cLSGRe3qzGCt8DtwkC11nDWYtDuwTh1Hvcto4gS1i6tbVB5kNCfa88d3eCouqweDbaGadDgsRSm",
  "key6": "gEsdT3rU14BgTjXRTV7sTi2R8rdga76ViszesNHmsdDT9YYNVzN43bdtDorGmFUgu2B4fVnoXMX2hd6zWjDPmcP",
  "key7": "4uwz5NdLJvDXRuFSmjd7gTLr5mhVBCe4cpJUDdhGv2R32obKwAVMV6WF74XJZKGHQmLfemvhQcCESn3622w8xUrk",
  "key8": "2nEyvDouqJE2fXNuKVttReF44DRGXsLCtT5NyC5y3ZwvuRnZW2mZKfetbD7M8Azz8Vf1xL1QbHv9u3jNXJ9v77Wr",
  "key9": "3aPZ5kGdi9MUBiKLy1B89wLEeWwFvHi8BAgibur5gDs77wGm9yjX9PSsncGj6oQV1wRnM8VAjd16ucTanhyRpsYS",
  "key10": "HwJdCFjqEav8ydLiVzePdTicYoajb6onWnDk6s7ojS1kt47V6uGRMBuk3n7GonwkNE4ATox9YiEqzKctFfktdpF",
  "key11": "5JN2Gb1TtNgWGXBLRPogm2LoKXzgYawyVEVxV3bJeV6A7hCK2Nu21FMCyZ6BBwrd8gfEJYBQqgqQhBKTwdXnvDKU",
  "key12": "2JvSE5BSvEFFdQdXc4bZgfrfmFhSyut7HrfNh8YRXPExJMntbhWzMD3cXKuWrs5WikXwbJQQdUGnn7ZgFKMWrxBV",
  "key13": "LhjUaPXYvG5bio4W49pfdm7cqEwGtw8aHtF5KFT8LcP9RgRA2ZnzdPA8bSnModj5HSnV823NwsorULyAEhX84Pc",
  "key14": "2AP5Lq3ZvT6d5XnsUMPWQeWSgZWpf3wYZKYb5ka1v3ZkZXK8WyzFh9dP5dLRW1CeGMzitLc1TxtTs8rfsrVfWrZm",
  "key15": "3pgNHkfbkr3RvGFsjV9hPigcGV6AfogLijzGHA5qSfWwrhpzv2hoqrfpd1Jif4PzxUvd47EYx5WY8csgkePgf8pv",
  "key16": "2hq9f1g1Ljkd4tdBo9YBwWw2FdwpShK9Ufp7haxubsxMCjXk48BaPojkooAvzbMTik99UQZzZSsybSMif6TkuMht",
  "key17": "4oTvunC8L5VXw6VmznSHUKCjTZ3f4M5TaRjZpwxFSRDYQNGDyAo6Q1mmW8rzQRUWRkttJHbpeozyjrrPQVhoAsQY",
  "key18": "5f3B9MPXxZFC9Kc1jpE476DHh21rbFxyhgWJpn9H8PMQub3Pgwymi7XuZDmwBF7C56CVAkrFFwfP3TuV8VNTH8Mv",
  "key19": "V3P2TAhXVsxDGsTQPwmEpMVrU4afcqq7DVd3MNv52HvChpBDeMn76CbdQJ3u2BYYmCns3euJkHZP6ULJUVStWRD",
  "key20": "6HmCZmSjCSzDthtRqVmAd1iNYGeFjrs6SwqVEf264QJJfoFxYVKYTih9MNtnz7cUexAnxHhBSm83EGoHnEq2Bto",
  "key21": "5Wk5JCFxUauQksFuPKSgJeRC7gGzdpd1SS8nmhHUroGbYh3qqdtj13uTK4DrmhjpTJ9DsyToUGcUQ1we2ba1VNYF",
  "key22": "qzKH9oJ6oLD2h2aoJSWkLRjxB4nuKUgvWt8X9pTGYJ5pzcRRFfo4qi7DsPGFNTkKoquJBofB3X6rx5Vq8hrikTH",
  "key23": "3jbY7ZtS7YyZ63xsvRyEtxdGRoyKAnSosgkyXmhNvqZqdBX1RJyg6mQCY2FzUuEt6B2tHeh86yRM3jUMt1FLKLBC",
  "key24": "4hp4ojyGzqAmVH2EDzk52YWTRK5MszBQCgvYsjshuwmoFWr7eiSjnNtRCfN4hRrcZtPjdTmDHadKsB6kqiuqo3b2",
  "key25": "5Ks7SZfZ8dUEPSGpJjQ75yvLNhJ3ep3rEYpEcuGEtRTsL6FNhdh7nNDfZMpQpsaGDdFuQ1UTcFgbCb95Zow47XrP",
  "key26": "63mfPq8LpWzFeZEf94nF9pWWHYfrPgYeeDmU85rxNPFr32AzsdDRHyfvMLFVJSuTgPQP1CAMvasnS5qCRKhwLcfx",
  "key27": "4SrYE5yBGNuoDLR6nkXRHWjny7B42q4a49J3UDx71qnte1wU5B2Bm1rbtjjo1fdpQVnP7iTk4rfavoBLeBXFvMVz",
  "key28": "5fnbwDhKfSKRYpkJRAYSzAPcAkca1x2tXUdQYQXH9eM6axHJjg5tq5yRATooR7GU9p1aQwnPe5J7vxYxwtc6fYWJ",
  "key29": "2s8AcG4P9diEBs4mk8nDe51ffDZ4iQJsV5Qk2iRjzjVybNaTxKM7DnHEhqwGFYh7wPFKe1fp6ArmRyRHqeiAb6QX",
  "key30": "5vz4qB9EuVEcyvpc414FgeTMLjwJW4noojaaiFqtHs6vSg8TzMEWyREu93q5HxfrEQf5vi7BQgnWgKm8m7QpydkQ",
  "key31": "4122nVNEVvjFdtJUrXKNyeLjHBUh95dK1SJ5MFo5sHEAgDgKCqPb1PwfqUud2uQmo9WodMxRQustvzrgQTUtci6f",
  "key32": "3Y1Nz2AWj6PatqRJvJtCVCueEU8Lr4UKvwqaPFD4wYWhi9H4nGWB3mC4T6ys7rqQtkLu3dfmjbmB3SUQ3jbhpNVU",
  "key33": "3NDfGj8fHyLaTLevjZuw9QMRoM3JumGTn1qAw5ZBvbcE1HAVPR67gmxzLmzer5gN6pcibx4XG8CPrSJMFjm9pM1D"
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
