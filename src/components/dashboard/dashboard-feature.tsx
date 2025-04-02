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
    "4Jkgj656VpdivpwjmoFo5xoMbKHqz33Bc1Lo55MtdrLxoPgFdeDBX9VNrEztiWdVrSrSDVUkReemB2dSxVyi6QxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cHW3JgCXp7598556kqxPpBkZTb6RiX77FegH3TPpEsaYMadB1SoHsGWkGRJ47ANbc4S3GAzWunYFpG5XtvHsgkB",
  "key1": "65QGaX2g3k1HVggQSjY2xVosj6argB3ytXBqR8DgCJtc1vD4ky6nJD2GywwSJeSUdtuQfkRU7UMvNF57e5UQ5kW5",
  "key2": "gu9agfKr2ExyXVZyTLMJZM8C5XwCYQf1Re7gXVxDMmALCE7n9CQvocnCyors4CARULjR4eCv5RVYR1zx6FVog99",
  "key3": "3jy3tMYXxm12X2ASUyLLycX6CVB2YUbXtZowtsf29F6ibUTvn4P8ousdUA942CNcBFsp31ZodRWnXNRevpcihD8c",
  "key4": "5TyB3W7YyN4eM4P4RGYVwWkLpvxn2HVXBz8cgEAqGV8oYkGtDwVhaf2GE58ef1eNTWmZ5LUprZ1nV7M1bSo3prNN",
  "key5": "2tAky9V1weBmUFCGNSWK4LNaRtpctSdrrqV6Yjh5LQGwKUQeHA9aFqXaZg67wo96KpK1afJDAkrpuEpzpp6yUwew",
  "key6": "4HWKaXoP4HU4cx1QUN3JApnNEdscJjMT7pemHFk7wZ3arE2wBUZMbGCe6orajAZAvC7AWCV7hsN5cby6yg7F6yyz",
  "key7": "46MQXrHSiT97hKuzsYidm9TRqn6b9ZLPxnKRUkSZNwocEZyVgfWDrJBUXCzqNzYZCEWVWo6RMLS7Yrau7FjWcMFp",
  "key8": "5RnfQV5yHrNScRUQE7ET2EwjBnEnCHdUvFjVMG8E8AnvjwpSAh7FnHhpLPqxV7zJS15JbZTc61PL9abLRekbHpT4",
  "key9": "3Ag162CR27SoUDzsjPjx7fFqrZeQuTQjQe6yNqjSknKQeTuJQuhqPCSrzAGeG3HdZv8cpArgU1FLE41y4YFMYHdE",
  "key10": "5CmG6ipzswBzmodRVCVpqZiigJ8pkCB2URNVZ3nkPDV8Jg5WnhYZ2j1LJAgHZZsSW7NJaCBieA7xr7xnQwBHVAos",
  "key11": "5SArkFsgoq4Dc6sqDJCQBa9Rio7KusbwfywWPCMcCiTnAV6V5hKCwKpnsAGv7HeKoPnjLu7i9huMo7T2c1BEqggr",
  "key12": "4WmBbLBfCQWjoTgSgRKDkjAZdZpS89pFH8rHocwnGsmuqkjaCpgWXNpJhWrHnackY9q4TkzdpFuV46VqcvW71xzj",
  "key13": "2gi6inALmyYscKSsAFW9d7k3ySKDB9zMPoFFbNQEMrCYddD3q93MW8uQYMnWKad1y5nPGVYBYcPJQKAJ4gj49o7o",
  "key14": "p4MGX8kumHgoFNBntNCSyDimCHYftS7Rm4NbbTJpe5ChJrvdixaUytH7WBzpLcGizuouEY5Ro2vGWBZVXZYqfVV",
  "key15": "27Y9T7oPbc92etacxb5oKJgF1iGYTas6K2vN2AbsXjj32a9c62WACSwizB2swcTDfLQk1SVhuyi5pASvCrRX1nDD",
  "key16": "2HWEG1oGL3bv5nYyVYh8RkWkcqnZqnsMwCR8Q9BjrsvHNqoMfZhHV2iiQcG6VEh2BEhksgQzNUbjpyZ6eeR94npf",
  "key17": "2rbPByutmSE5XXhwmuZD2XmeMhAeQELecxBxNmgCAVjLAxra5kCAyMKkyNr2kxQ88Qyp29pNDhr4KawchgNqe1Ky",
  "key18": "4dJFr7JT3ViQNcTWcuMbKVwtR3ZVMQ8rQrvZWnQ8Rz8K5gNTtzUeJfzHUsGabzow5LXY8LweCpytEbmdBQwaa2dv",
  "key19": "4Yzo1CQmL5epnw89hcFRNXZ92VDL2c7ksVpiVLnuP6yUYv638etVNT5aX5NeXmK2BXtv427UmPc1VEPiRJKyrGst",
  "key20": "AJyjLtr9unM85u13zN2QaGc1Dgct1mjCSLv7qjU5rBwkbKwYBXgJao61QrFoQhgDu6PJFC1CkAE9qvcorAH3xoJ",
  "key21": "4amDs8xVTFyZ246fiS8MQ7w8TQd9ZHZNeKC1BW84kHGfBFJJvbGjtrsGPzyDCX3PCiqcgFWyhaEtj7YGhvJ1YPi9",
  "key22": "42YpKBMbdEmRaXp84dyHqeoVhmkdDbrSRMH4vmbhfxWFCK6RCpz97qQoGMGQ4UkTGe5RiGiHPenYyEojDgC6nSb9",
  "key23": "3XGENEPGEtKbhSLhwwsxhL7cvxFAdzDC3yWsSCqpJfY1jjokz8Ac4tRncNYhdKfMNgxL1wAiL2cd3nPfv2sdiNPj",
  "key24": "4YhV9L19nHU7wJLSAEMNUoGHqKJaexS3uKooQzwwNbeG4KimR2Hytj1WeTip18CZhnGb1eTgjgFX9NGYu8ymqiAy",
  "key25": "55T7rgqjkjUjwFHgBfHyW2rBfi7hXfnNPX44bMQ4rP1pkaz9bpktkGVpLPLpsJi2zoCTSm7o91sQfUxRSv5WqYcb",
  "key26": "3HbTHZ2LVnYwAbG6dkPp9vAanBxxEiDgMgxsJSKnGq9kzY8rMaQ61PSZvpwP6Bzkdg1xdHrZ1HDMhqMwf5RW7G43",
  "key27": "3CwoyePXXkpKKgZmCLwacz8sfeGmH16MGD4rHXAXkWBa8RnJq5ojqN8SE9YCyAKF9YzB5jiVLSSGXwXKJHkS4dM",
  "key28": "p5WPg4FTXpiyDCaRo8rqNkQQcdViocw8gWz9Whu4yek9BfWE4LdN6Uq8QjqerkziVVxQcpUZGnL7GhxPRD6dKL3",
  "key29": "2h1LefkdTFG7KCtJzutdVoJu1p2FxAsmEbdXRidRLQXV6eRwoQkVCN1xTMLL1v9F4NgcFBzQ1beRgBqJ4LK79nLk",
  "key30": "4LdsrtpCpkgEPAzvXoUgGcs5CzfiwLXqbMV3sDjFu33dwdobVrCwukg5kmv1ztkQkiHZdzWT4ciXeCZ9QgcFzaci",
  "key31": "ggL9UHG9deVK5D6uh1XxDcwijioTfXHFGXQBgdSRAmgMPWK6pZbSpQ21j7SyUm2obtpoDKcbdPGqtjvxm1UmCBi",
  "key32": "5MdG6J4YrZZoRLJRkHwWfuasGyRjJLugPEPNGcSJzQkEmBZxMB71jHSVrXijvw9FXko6y8g62m8BCBjsqMiyErMF"
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
