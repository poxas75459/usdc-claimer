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
    "38CGgz4RZVmYJyUMBWJvHvYYombmwfMD4aoz9jSqN4xKAMCgw75iEVwvsXo2dKmzPkhGNzYFqG28f5YJh8i5XbTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fZ5KxmFumfCvuDRXP2BmcihnGQeyU8TEMAuZ7u2nWbGdd9ntbcEKSW82jyiKLz5Hi1BkHfVebnt4Q1KdoXagEqN",
  "key1": "2qFqVT88J73SFq5Mgxabu88pQp7f81n9yNXrBiS1fVaEYzfvbyuVK9JGLiweov2tD7jda94iMTa3RGqa9CFDioiH",
  "key2": "3GP653vadDhsEoHSfyCoYiJRp66HqMHBSNyYY78NmWFBn4gyJY19v6Q9fHPXAVAQGYr6DPuXnyHLK1aSQ7yhUVHE",
  "key3": "5tUf7E5mCm2xnHqmAhMYLap7y9YP1jnx9iX3tvHkcnGZyGEFiKNvscbqNjB6LgRdEwj5eCgUN2SR2Lq73KLNcySZ",
  "key4": "2Dc5SFAYPW7tqgDCF3DLPYgcEPzVV8LmwhKhJXXXKa5X94xqYcyAbuC1wbpzd6Wnv326PJACvDRvPHyESCnQSjKr",
  "key5": "5J9DnSWmhTM4HoqULChPet5pcKLLMniabHsXpWLVXf8GuZUmNyHasfAzEfvUyJ7iRAAJCxi4MtDsWJuCLgcdmVXQ",
  "key6": "x45X71HXd3JRW1vnsEvKmUHYnom2sTeDNA9A4JBnsEdYFae3MN8raQHSe1GXyRmCjEm59Ymffg2PA9ZprU3gMSr",
  "key7": "4PsX3g4ExFn1mxx6HvYrArUACb962kMGa2eLUGv5MgwCBc361JQwsdyP3d67RjnpSyWDWQ1bB28J8t9MMcpVcukE",
  "key8": "5BngSJS3CKFBDy3jgTAEkrtTBqsrpqMdXW1hT4nLywJPFAJUbvN8k4Tg5AATqmXRaDBGmCgdCKh9YdLPFP3AN7YL",
  "key9": "2ujbywZgXnfDiooGc37RYBUmWjiaPcpQEx7bqkXGWYMSkSE6yvuhwxHFaBbRg4bixdiATNJhECdXg3WFXd31JgeR",
  "key10": "pFd3yQYHJq7GWddKT8AoMG2yQYb9tED555CxMofAaDcFF9MZnbAWa4t99oavG5jSpApY6qB5C1ytkhFvG6MhNfK",
  "key11": "3i3RGPjeibMx2tz6Cxd3pNTTzMy7QbCjsyPUmmxf4E38UjFxhUw749p5GfJKsSFj6rF6QEmCZ1irmVvzkUKaicHE",
  "key12": "4KH1MhiYREVHsyHA2bGbRqVaphH1ndar5t6Kn3p9wKd4xf2UvXCWmThJcDAMBQpDnVKPqRDrQqi8L18uTqSLRKpG",
  "key13": "51PevM7jsrkH4TxyZTh68QZNwf51LthCKe3MFBwqV16ZvWZ6nNh2dF3Zn6xVfwhAiTFXkTfoDYrSUW4dZ4sWJebD",
  "key14": "4dsqidbpvSyvSyaU8xsoAyePQ3zSmWfkmQWRoxQjgNYrHLLetRX3GZFdhu6kwpEdbPYrRtV4tc1q3HBM9broKUDB",
  "key15": "3yeprZnZYXhzHm82rxqYUMiRaPmh7n5Yzk95TxVWNUyGtFEmVCCj5PLkFb82vn15K9EU67FewJg42i3rrjE5ErC5",
  "key16": "4dekZ2XSAMedVvBUd4Gxp57jbJMydRPsXJjo1RhECHxhKD8xuhuxA9Ksz2vrXp4kQzka6sJttDv2jjsDT38vzf6D",
  "key17": "gSwvcVDsPBBFUbBgeW1vSiE1GZJkPAaLDqevcP5gBuxYZy6HkyuQUcn2jgW1zB8S9L3XihxZx1xMJR9mvZZFQWV",
  "key18": "4T8xfAkS43DstMkVXjqQBdVTWsgMwPk1JFYUAk6u5CovgRg5UZK96Fzr1gNjy3NwbqxBF4pdFUmVkLytG8FDzpbd",
  "key19": "5AKAvWDNTkKgo9z8C1u5wyYGJqtdn1YFPCuafWgc7B8oyqfmv6XfXuzfTmq78Tddub8r7DmiNk5yV2LUXgAbud2b",
  "key20": "3y8GFqnkXLgTUkHphDDsJRcbd8wDdbsb4vfK3w4Uy3oAuxJbUH2VeF4ZM9htFgjEirkQaAxCjUiHzryLZb74kAax",
  "key21": "2hgNuhs6nfrUn63s7mvU5Qm8vPvCzPy1Mj85WXVamRrASx4RVn3xqokKigpT84DUm4HwJsLQ3bJU3MNvyZxrMYuf",
  "key22": "5ng3yGj246yXAvgW7Bg47GvNxddcUMLMENh4Z8XYcjD3B4DbzhuKtHqs7bzvBEtE8eA6FsE7tdW6vBvryNCP7ZY",
  "key23": "3hDgKpc3gm47GCziYzsv7NwLtMjKNgpAjaxEES2GKGnMe99LogB2JzGGr1JfuRm4RgQZV1Cxiuu4THUnZwgUQLV3",
  "key24": "2mvPNYxiN8uekLQMQaPzdGGaXyFdQQjP7bCgu5sSxFaBuGhjNJVAorH12MrLpqxGvbQ5TxTuiaoJtg5sBWrkBDKN",
  "key25": "62ChyMEB9TkETmk1CNNZF5R1gP7KnzYXxKWdsZvaWNxDUNsSU9e71Q61grnU4BJv9cfgF5CM9Z61tmwr9jHhcrkd",
  "key26": "2Bf9LqA2NKiqVfWKJ4Wb493jr6zMVmE5MYPTUqjNKrCxSkzWeAfHQVF9NkxiF7FL8Kc5768FYVdNGTRX7aWTPkcN",
  "key27": "3yjz6UdBHsKBEbp4kfnYuvHizhkPoagFUPHU3TwHX1apYB2tF4fURaWdtMwqfsRxmTWqrgjdmTuH51E3BTbgzEkY",
  "key28": "2gcPcSy2WLWS1uoty8RmnpgJc63x9XFTph8LeHPCBynPVt8gpruxZiTEqSHSFg6NsN5e189PgAGRvU6bMPbA8zLr",
  "key29": "2yJ92G372jDPHPSSJuxqqqpkFYXQ3Yqmt67huWKTLQihcy7so5L9bfPjy3dHsWrd1JAh7Xhppok8s1XHmMXu6M5R",
  "key30": "2n15ZwUqQV4eX2C6huxzCKvTNEFwvcyucb9xwX5ivWCBHY1wttkWNtkXiFSVgF9nVDMxDSw2SwAhuGWMnZfYq1a6",
  "key31": "27FfefL6f5ncwvwHFhQNCKgAvLycPLZVZhEK7muhETq2U6yUCnFJYp7af85g1TmB9VzbrxdHMQF5SMAagQ4uBCJz",
  "key32": "5XU1X2hqrM9WdHUZUhL5XaY6QYkxk6ewXjUJcxsvzzvy6o4JCtBFT1KDbCD8KiqEjQ9MHzqJYWqL6rfRUvU6S6ff",
  "key33": "2eARkmp5nSDAYqfDiydN3WLf2HuHBehR6jiyUk1KBUGZUG3tGG9jRHuhoB9EcwcLrasejsGb4PvwSx9rdGkoWtQV",
  "key34": "2udNr9MGRg1WRCT5go6vP6wZ6jcAaM9hsTgZB1qexzK3f8ctmv9JEGqVjCQP5swRp6phQ3s3RXwZHyHD939qsX9B"
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
