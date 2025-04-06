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
    "46CEbY7X9YvSP53k2YK14VACs2Xhno9pFzcZqgtCFcopJii6D9EGF3Cwq7i2VAhP4Fp1vbtpSCyf3VQ5XmCNaumF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jsjbNug7VPzGjvms7Lo5azutqEeA7vw38qeT2TK9QxpJTDqF3JupF2BxHivyiXNagW2w3FfTE6r9um94WfpoUj8",
  "key1": "oy47LJzBCTyzCg6kzyrSdYGzpLg52pCaLWPEZg9sb7R8rRtRPvEW15TqDueYgwCV41cELdmUN77ZAgy98fhvB9F",
  "key2": "32Jnnc2uTCnpDyQ5r61fXghWaz5nL2tHUuw6iWxivcHTnebfkH2FwquPRbyaZYVeX2u2qnsGa7tTFF9QnJCbx15q",
  "key3": "34pX7x6h98Vt8ot8bAzpmkTT5VsGh9u1u9ARRKtMf3UjeVpuPCa76cnSceMKgt6NuKbdD9MQHevdrt5jzpab5N7x",
  "key4": "22S9pBAUEjSfmiWy44FqkLqVtrmFhAJPo75D7cT8XrNeaMxQGdmJzg2QEPRqxyVPXaVgmqEJMkvJv51VNb199f8T",
  "key5": "5V4ZXTsRgu9UBfNC1r7uSLAHvAugRvGN9SR1sMHYohcYwGrTq7nb7DS16Q1Ak91L3832Zeor3TWP6szNMAtLBwHy",
  "key6": "rvRyR7rfa5RbEmJgsS9ctmX3pvY1nDvMP9gbTLhXEFHBdLx3djZBcvdJJuvspXivL4KM6aXgw4hPg7Z9So9jxQ4",
  "key7": "5o8FMKGys9gqg7xD35ipskBJSQQvnfj2Hq3z33Js9S4ja8Srfc21DJBEqUHXdKKayUBcTXyLfQHkubfY4w5L47kN",
  "key8": "hg6vzJrkE1N3RQuKUFKNccNUFmr9p6nTPNFCqFGoW6T9TazsPqLNndNatdAEFJSxooqoS9qQXULhDTdidui15uv",
  "key9": "4qVxc3dRiUAjRppNQergzK8dripzCiTkRhUEPeL38XyzXHq1tMWdEQ2wf2LRAaNpvwerZsSVa8MwzQRkYGPhUEHT",
  "key10": "557ZzZiZnduNSRomAnAMMhK1CgiYG7R2w4LZkyEbLRbNhmdbH8Xv9m9E3QgFg98XjW8H8ajAF28s1HNw8D9Ht6HZ",
  "key11": "3umgghKfcC3MoS1qXcCW7Ua4aTqTehhPbQ56msXFXN5GGzYUkgYTW9qNeronXqr67D4KpMJLzqxrtv3SvWYuMfiV",
  "key12": "p4M9wQ2Cv2FSTDGyFoByYpKdqoh2azZz8Hu8maVME1RvHc7QZhkPwm4tjKdjWKL8QaUNHwyENNmzhfF4CPkWy1B",
  "key13": "5DSE5PTDt3c3BCUNLbn4WJ2BCdMSKrNdsUbWd4zb6knehXfm4YWopmiy4FstftKXc2mic91jSnm12i1kEN2p3BTy",
  "key14": "3hCigufStrL4PD2yMWC7QgESWCPjmVPkxXizTGBBcgZac9BtRhpQbpcLgQMaKKb1PjMpSi5yXxwXTC5XnBVNMjnS",
  "key15": "42iZ3bzKiSnm4VMCFKJSLneUuWCXQVjGFunze2r8XvY4dM4BGTgUV2CDTGH7RAG9vfozYQZpgRS2kJyrcVbnf4Ar",
  "key16": "nWKzJ6gztiCtjQFN8d9E9JX1WDKuTgUY33inKXtn7xUwRY7HkFNyFHrMwEyAzFVV41PeNLxcyxnHnobmU6Ybi8X",
  "key17": "5Pnz3WnyhAFtp87bdgvbqMN8UFRtrES4PeVQYGQcCCCDPxXaqjvMBTrAFP3vcKDCKAG59a5LuSGELexC9vH9zVTY",
  "key18": "2FyHSs7FuMxFpzeeRByynxjv424XTjvAybRkQBcjVWZH3H4PXiD6t9X9QYAgjbNMz5XLgMngZFkeiT7CqBaUDhKC",
  "key19": "58XpSDWnMQx7EFormjoKB3A6cHVTCPL15dcgaUnhrPehmH6TevjSHEpFq5uLej651HwH3WZyAim1HXdK6yYszbBG",
  "key20": "4XLvp2FQURbZgW4kv5qtkofNwQDC1sNjFGjt1QoFPJM9aWyto3kE31bWJK2uv2E8ipr49x6YT8DS4VZYT596fazc",
  "key21": "33QQTYfdjKhrohKJnsAjEK9sLZDCJkPKb5zAX1v9m6aqRqfY33kHkV3qmDJhvoE8WDrDrJg9gRFet8huXfSGF16r",
  "key22": "2tQijNL2uRotGhdWucSCjbHedna3KbyU4GQJbxLrZRfDhVEsyCjrvML5L93v5Uyd83dYTKXGt1KvyLmj1vjpxMV6",
  "key23": "DmXmL9JNbzKxWgAcPGrKQRMSSKoW4TyP8KAk7vWDEVmRMonbANsdCtJ8gsxoua4osnUozM6BPcHzHBSUG4Qaifh",
  "key24": "feTwfwRnJGLU4pLLz9n8UnTZKaxhMMCwrqPtEYr6A6nrAAzCvCfmhyy4Q7CgiSQM4NrdGdsg7KV3fLzBRJNryhh",
  "key25": "ctMvVU5yCnLxhMHB3rvQsckaAsGEQSoC6nir8tAuCiDKJGnfz136CYHh3AjVW4KmCXb7sMApPwwCwiNWTAPc22E",
  "key26": "38rzkcyHiBSKVKtV1V69DzYzVnosQK5o92aY9WoPUvuAArXUczyfjtZJ98UhHEVtnujRzQCWv3U9dCfG9dgvAtc6",
  "key27": "3yRpgRuQnqsu9A7cRx8jp22GyTonhoZYYCgDhr9d9bwuGvsSmCTbBLrr3nXqrQ7xAo5nBbD4JHKvqbX5db7wGhmz",
  "key28": "5KisxF7g8xSzmH2R2Ef3pQUZEoCRg8gDNFowrbkpApoME2qnJgCiGES3muksJPSPHhiBxV7BikMATC1UDvUV73vM",
  "key29": "3cSopRguyzWPP3y5Lhip6QB3YLJfhFYFYdoBXJgEiJGUKNvgwT5jyKabQSgd1mtWWZV77ZLzCMacC2QdFsqxByoe",
  "key30": "4FpwBtXDGgMCrsLNxVRrmuEFUa7boUa7kjg5UH4rkrxR9PmeUdfLe6mfkKcKL5SVmrVqTmcxuTf6NQaQ8qVxRUp2",
  "key31": "owGRqnwbbJ9o7DCiywnSSBoZ8LZ9ZhnrATsV5oqHM2Uo5z7ZzwBP4bokYg5AsDprVXQrjLQtdXfX4gBJQgLy8Dd",
  "key32": "5s8ssbJcnp8wyMqbrjzyAnhuFjTFToS1HWWrJnQqo27UGRQJpbKXdLtA8AAgntjW5Cwe5HWRnYn89DCrN6sMBZnU",
  "key33": "3jyrXuJGvRKTgrUxEkxN64d9LJTkFmAqjZRY8WHU78isqoyLJ3L2UrPz71FWEiHFynJQ4xva6DAKAT5nrJX89vJ6",
  "key34": "48Bmu59RaE7StmcWrVWGTzNZePkPJDxmsbg2eadLKruTmZhUtYkPE2GAQ31VML9Us8o7UhWiMR5jML8NHySv3BSY"
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
