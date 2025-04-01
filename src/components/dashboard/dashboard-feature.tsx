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
    "4RTVHZKM9ifoxQv5YFscU11mtJkEqirNuHenaGVeKajuAYqBu6QCJXPspkGjHQBx4eoyBtEjGgxtgDNMtFTPoRwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KhSDXKZdKR17RcLJ36pYp8fBKYWQc8hqcEbnK93z1zmUNhdai4mPtxbs2krgVWuwdLvh6F6sYJovTyhymzSQBBi",
  "key1": "4dQGB51qrfjyqXU3hzDdS6nY4xncobfPVTjgnCSjCU7bZFvZq384xFv6MHXv5X43W29ZYRRCY3pCuLVCDQ5tHcui",
  "key2": "4r43eF6s1giSyroEDZcNEasV3oNYZ7t3mxUNwJhvC3ZAtJTbq3ZM3Ra1r5RjyqaP36rpbYz7MRzgiC8SQ5YuB24J",
  "key3": "39K98D1C2knf8A1xok1YBxYMr7SemUwqV6SSzqJEiCz1xjgwvuh9arFCmf15ZJBpVmFE8suym9R2EzckvogxZoeX",
  "key4": "27K2rbMqriF8FDDUpeNctwr9ka3M8qEDqK1dyHiG6R2CKC1JjLfS7zXNEuoKapBF8Q76zsoYPRXqQNLo7ZryMRxV",
  "key5": "3jYSUG9iJcYm8ro1HjP3CezpaoCMa7d1mAyS4zmuGVeoXMTXGLU1DpvyAbsZZSLYJuHkd5xQ46rkPw4wR1eEfPFu",
  "key6": "3VMJVx9EvjdCVXs3eRhUwye45igodXwhNJDeKvx6RYbJpz1vpNVucRCms1A9bKQnjuviozGs2r3ejZC2ajzMMZtW",
  "key7": "5wUxM4c2LvyXfLh1HQYBRnYBc5CfLh5QNq8AQVd1ZiFyHHBREZEuTVTrJAJuXUhAfuEepyLYAmUau7vW8FrXzmCk",
  "key8": "63ATgWy4ZVBsMjMWAn3sUQ1syveHL8SB6tPdi4v2La9kmsuqG2444VyrXtw1UrSBFNdL64MZQBthue1SPEeu548R",
  "key9": "44hTYyKx9r4hbnXTMwrraRLSxQd88f2WthtpT3CCi2KJVyrZNWsVznQZRL9u5oR5GrgTGFbfw3CeCRuGe1rFTT35",
  "key10": "3pTAp5132vX6qP29XsD8yGySco2Jm9Mey5PWUA5YXkV1dQN8m6crrakuqSSRyDRQ4ZjVoDJJrkkNaKFDhD3DfgaX",
  "key11": "3MFXZKEDTW7hMSfrye5zgcMHfKLL1tERBe2GyVANervtefTa8E3jNjBy4eGNMdjkup9PgDCfh3MoPRaM6uJpwTJ2",
  "key12": "65HkEF416spyF4jXmy96zVqwD8aydFeKLWiJPgijoYj2J38Kn5aKcKqyeAG3ioudogJd6rAHr9ktxpDyFH2ygx4L",
  "key13": "3GkHro2Dwt8Z2b22Fex8wSNUEwbdtHb8XWrv4JJ8rVCNGza9FZi6WnPEyJUDZU2xLAt9gaJQ7hrAHcsRRqceRtBp",
  "key14": "RP6PTXKXECEGmTeqCBZYaZ3Ln9zC6hCg1yWwF2pcYCMw9eQa6afXKZFFKeT4KWv2UVVybteco5waqBxcHHKzqin",
  "key15": "2o2C597mhCxHg3yo9gNUdNDYo9rBQawhbkuf3tMf7Hm7qCJSLmkFQ5rYjZabJvmtE6EzRqR7ybNKPpPxweBAJPfu",
  "key16": "4dffhNsXtHzk8aiVKHFrPK5ipSvBe9RWdK2Mx4gW2mqRo3A4PTc6B7gDutYFnYauWmKsxgprEqQ8kaUMrVnUDkVQ",
  "key17": "5CRjW6ceQXjkD3kR7LA771DrGZmwRSii7h6WfXUXo59S9FKvobn6bNC2Jhvzc1VtmB5Fm3ntbE9cqPvMqnWhjvPv",
  "key18": "5TtKroMPEe75qkRAXYEjNwYYfmWT9cpddNFWYASeoMKmYeB8UotkYuM3VkdBpWSLZp6tNikc4BkCxSHshGXs1xMB",
  "key19": "2y2f1g4b8eDKvZxzLuSeR6eSYK13FTJkAxz13Hhtr86HseshJbPweBpwxzQxyqohmgyHyqbrAMYtk6q8Snoho3WW",
  "key20": "5EaXsRtkcoDYPU5hmYraF5TfXkr4Yhhkg5NVvGUzKrvABooS6fKaSjWfDNbi5Un6zE4umv359god84h9xD1pPGUm",
  "key21": "3b742iBVP6pePHHG5TkV5zQf6TVXvY5zER7JQnc5qJArsKDWY9Y1HLRKurcaLQz8bHhqSHprf9b12gZorwEAR5fg",
  "key22": "4zx9m7XP9vC35aLBDVHSoAXvy9a5kwme9hj3wpUNb5zSrefZL4PKg4DgCNaUEZJDFpE38gwgg8b979bb86L7SqDe",
  "key23": "5pS6n2Cx28QCmqYYrRerow1jXNeMH3TvqAD8eAE1745iGAxMN1WUtYDZWdJ8jcjxu6CE8iYpdiPDjFjyQv1ZiTBg",
  "key24": "v7hofShncP3nzkHonVLoJ3ZPjgssPJ6EU7hoMbUE7D7ZtHN49f9E2X1LJ1eJsfbDxFVjtK7qy3g6ZSuiMc1BPU7",
  "key25": "63MqMbTWsV62Xz4Fe74LPFXv4Hm8LyeWnLxe8Tu1ghMq4J3wvzp9GRsVAVC7CxSQVyQUhgJ96raJK4Pp65ewxbuP"
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
