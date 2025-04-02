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
    "6NpsjfKB9kMGFJmc29ZNnEPhey27dMP5RfPhhVp4GWopADdNHsoFBkbXvkAdDX9uTpUQSugmD1kyS5MEJ5TtxWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BPXBDKx85pgJ85kzAtsmAMLVAduxaHjNgmXnsNWFLg2WDmTMXEK5Ep3cUScnPYF4Xq6WdNKZ9nfd3App914B4Vm",
  "key1": "386CLngfvovtURwxvLoZWWBqyQsZQPZpsug1JTETUHLXijDwKxuJEzb7Ctp9RFANkr5MKkwqe9BbjXPjur85wLHX",
  "key2": "3PZsZ7S4Xjmkz57v5S9U2keGxaSjEWWNA8s2qEThgba7w8LYbM5QVTnEDJDF6WLMgSzcB37MDLTfmHwDhs2D2ywS",
  "key3": "3aUXcUktpGmh3VteM5qpnQVyZAaXb8o9BnEV2ncee4sNS6JZvSdH951gksBTcDNAjpUKhqqLfgMeWVJekzD5Pcuc",
  "key4": "5irGqxUEYAnBJpzVcSnpJpDgy4Ly3a13sZrHRACvTwwT4HfSxJmWcfPZFZGjaEvL1sky3ZNbAiWbRSvdc9quetY5",
  "key5": "5vFmpBABTC74vNA9cNCbuezVuJqcRgehVWKhnCQAELHxjTztzkg5iZ7L9hVHwaSZ18Efn9pw52goZnhho8wiQz9r",
  "key6": "59HbrLmi6JhwstjFqAvGhyHPSifASTzFGZNJNWKhZKZ3bLUZLUWNoTVfHgJWhPpX1tEdBs6GnRarRgcJ4XZWdva9",
  "key7": "EvAPapBccYvBdVReEPruU48zPgm8qMy4Z63a5fLBWNmUkMe69qmsQKYECLXwQgeZpcNHnvvRgWvoG99fmB2DjuA",
  "key8": "54Q6SezLf8hS2CwMg2GrHf4aPe5vRGBZ5u6Y4jrEZY2L2SLyZz9B63sPWRLv52t7gk1btJSkEs3t1aFppgRu62w6",
  "key9": "2MEqLySmo4oXMU4dDVEfUmkfCfG484w6uK2pT26HutTnLvsAoUzPKyFE4APgQ4Am9sx9J8ndcxDTZZJei8mDVqQo",
  "key10": "4q5V2EqB3Y3hGRqyFXLnuTEkYePzCtSzNpiWh5GBneMFwdVkYteYjCxUQwEBSCq1i6Y6KtCj6YmE746gNjwGBwns",
  "key11": "4ZcjCR9yTYw7b7L2Jta3MUKCUUBTbEQeqheXzgpwN8B3TTqf4PdKPQercG7ir3q4Md2Xj6EyHCTvqjpeSMZKuWt8",
  "key12": "aX32yDN6c7AzDzu59G9N981v2TrZTfumay6MxnACXVdRpmyqML5zWHuD33SStmFjHFazyc5YgL38TdmuxF6zEri",
  "key13": "37qe3LAZmkSra3E3dBcG2kP6g6WjCbjiL76numzrrn1HaE7k1fon6xRb4K7bM7NKjXxDWdRpCA3cVmo3cXe39dWt",
  "key14": "61iYCGuzhHBduErEtsS3cTqsSnEEAZtuqAoJxYxLgEcxqGjKW3sKguas5vmSC3fuwPLGP56u1Z7SBwoiEypX1U6j",
  "key15": "4h2CdtV79Y1X23Yh6ovwxfaxB9Jb3ybLurBfcL5M1y6Q9ELFAFK9PPvufhvvA6jieVUaqnmH7YNS9fA9NvQAMzzZ",
  "key16": "4AYUoXQzh5dJ4gku7neKNGDBUyV35T9eTrAUJ5NMPTDB52DA9RAeV3rEoi4Au4Z2fTvE6bb49y6y5JAQknfxzxc1",
  "key17": "4SbaL6MCCKAfrE5TQTLCHDT4xYfQTMHXoDUvNbc7hSdJXEj7jyvtktgusjVe6bktBhdooNE235wwKjECYHiftr6g",
  "key18": "3uNCxP1cs2HwjVY6PtGj9BXmvro9GGDfZ7X5v2mXzfsW8p6VKfJUGGbiZUTcoed82ai8Aj2HUu9RbwEQFj85VtoC",
  "key19": "4za53GF3FEPVetfmTq3eYjCfpppjRoTX51LzbwaMF7YfyLMhaPsdrezggiShjtvqgncim789aG79VbRosru5XcUF",
  "key20": "3HRcQHkzSjVRhEebQPiKnhFMZbfeXN1EpJu2QCdbkbTyqDJpkNdu9pNmjfFJK4RGrPoVf7YWd4u3Uzr4CneXXANG",
  "key21": "2rGKexSiAW6RKLhvwAa7HbeBMzdo8RNogT5XEi7wb9GDgjy4fbPH3A2QxEHeBYSiBqJcbYnsXDH4CV29EgYB9pzy",
  "key22": "ExRnzCAbmGeNTwhwHPH2kUWifPA9jiKMhcnewGZ6doiVGARPpZXBvAJX7dFWHt8UQakpeoUWw9hm2JdAHfeEC95",
  "key23": "2mXjpePR36gtKVXCTKpbXEyiQwRYPbkZL5jNoSVfXKPDkgs5e3mWuU3muoxvvNkXxingRPxAF22Nt5L7AzCXdpzn",
  "key24": "2faTMaJmGGvx6drFXup3yzFqSWrU7YE2AgJYMkhtNXtf1654zxB2fWo4ZC7ajKumof8fA8AReZr1HihkRGhegBih",
  "key25": "3pZeLRxpBpZqZUKBDWPKA5So2H1scQ9KnKg1M5s2x4nLsPs3VawZqD3ytiJubAMzNr539VoCFGw9aJieRNZ8Lnzc",
  "key26": "np9BR2JtDXwKqTC2hyvpQa6V4YT1jh3yFzvi8c4Ak4HTUH92YwzB4ggFiGedf66W9uiKVBgh7ZSePC3srvsXjry",
  "key27": "5DxLSgnAgNTcFnrj3y6mJLmBDLYzV1CRCm1BYM46NtthKKswbZzPJJcT6DmxD72RwCEJgymuobvwtvPaLaZ6GGKs",
  "key28": "3WLRFJj6VcQwjqFWbKLEQPWUakfGyrcu73DQrtDrXpeXRtFftyVdHy97NrNWZcz7DpLwbAAZowFT14zr4oZw4VJD",
  "key29": "K64qLRF1PATbDb2sf1tGHjoHRJh6dxX77okoQp9DC9iKEQk6LspNUEmWY3QpbdxyfofSzqU61vHVS9NMXoySJov",
  "key30": "DBpQr7bn7PFUZsdNmBiAKdCDXUx629fGNbnQaQH5sMowbRqpJqo9JWee1H7T7P3cBeffsNNteLPgXAuj5x2qDAE",
  "key31": "5rA54P12D2fQwBTaC3jL69r8y14chcDaoLF9sP5dsuYsqx9tZV4UjvbrVgCBme67ep46zEu6XABv9UHQsuv49wsv",
  "key32": "4yfLd36xoQ7UizdTN6mUMiurxWyfW37eRvFPeADCi5PPx2u6PMt27MwoQRaZRfimPH2oq6kZy48Zx7iGXGtL2fBr",
  "key33": "35Qw7ff4Kvh6zLsqksupTeErk8hK2bnJvw6YtLBXU1Pz6MQc4gCGVa3TCmCFZhK9ZnVyWP8XByATfJ7FnNEfjQgL",
  "key34": "5JU7M2ypQr35LidUZp37Dwp3yMrmiFcafGvWFhGGb7kerh1LzshRkmorxUrvSdsvnht9b3XcYEjwkwrc9xDWpBnB",
  "key35": "2MSmMNMCLsHJ8hv1VQFt4UfqmZ2JXFWxdcMNSvfu2XgUx2JGVUpvswvAKUDjsJ1XajcFSyEUpSYBw8jQPDS361Li",
  "key36": "4rRCtxGau87kYuJ7Em2FjyiN1KrZPrwYwt4naA4HfuJXCKFYo3ZS62HVbTsopMMVVrYHPuScrZfF3Y8cFbqiRZW"
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
