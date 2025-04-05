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
    "4yi9ubVP1EswaLc3Go2eWxXCW2tNm7NDH8tiK8NyXJPxDnZhVYrtWhjvQdbizbShxSeJVLL4xKodXRQuyyzN7saQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VBHNR67PPBx5hpBjUo6jgqYz9ufknA3CjHcNsfZkPZTZK9fPGpeJE2gGkPRduumXAiheKMSqZTpgfGXcz2J2YYv",
  "key1": "sLq3x6x6vL1ByUtGuCaVHVHmLXHuN7JJqxDwSw9pR74tsMqCHopSNfv2SK1tAzdC2n1ywFkugj3wKk79aEyYaKr",
  "key2": "HbHT4G4EMydJrRDDUPDuH2QGk4BDnBdfzYkYEzi2Ai5EzG3SoT1QYfcgqNqyVUuX7zX27Yv2kSoiQ7rD3oDW2eZ",
  "key3": "8wGMXkDz1FpE3mytLgB4KcWrkH8k1GqL5j9n3REdUWuPCRMHX3U5sAgdwA8VY8Kc3asymFpP93JsmXZQv2rJWYA",
  "key4": "2mUYpNnBf36nDKcMTeCEM1uwUY5H9nrjPqNzyzxpKP6n231LCi6gVKJ57dEs1rD5VmUtryBf8cEPqQsaGV9Ks4w2",
  "key5": "zz62S9a6Wib1t4ZD4Nte3GwqsKLdKKMMdZpfkzHJmQXXfDK2HyrjL48NTdCpasch1rv7zmHySqeQsRQ5tRbgJqi",
  "key6": "5SCxz81qgkD6wworQWYqRzQ5yw3qem1ze7FdyfiRYXegjJNqVkiJB8dBKqVqELe7qZpbvTWy4UrPNtFdA8naBFkE",
  "key7": "qjVVtTi55Yr6isf7AxySJ7RE5Mgy7fTM3sKL4iTBAGu5KXp3SGtntRMDfjJXV17xqD8vpHUgcagGgbzhVa9eskn",
  "key8": "3FfNQWrMfsaCEhE9UA2RRLeVfh6sqThu8X8JNzTQq3wgenSjQwnZtrG8nbLBS7fc3pQURnVeQKtePrZoFjhi78RV",
  "key9": "2QfjvsaP3UNbT4CJFf6ZBtHEFnVUCpBf5JKUtPP8EwFgerTjoXnyHbcXrs5dmBr41YAf2UkehiYsJStgrVuhkWwA",
  "key10": "21r8W2C2KTqQYimvdyesosc2YN7p1rMsMtCNTnoG1RbM6oJiHGKAoh5YRsiwiigFhSqbB26s7WABZ3S4jmZmCfsb",
  "key11": "5PTGKMyMLgevb4LPGe7u7zchoDFoghveG8QUu1YqN8rugcPCw1mPidRfRjvUWA9b17Gb5hmdcmuJqnpE3UkwrTJ3",
  "key12": "4c5nim5KREC9CTwQnW7GsnxpTL8hZLgFQ9cyZEjk68f6prCo84PGWUoqqPqLxS3pkp6WR6VCMMytiptXqLvJv2x2",
  "key13": "2VphGZT5Ac53YJKirvrtvALbg5hZJuiLwSunwfR87o8jzdxDEBHRwuDC5WtWB2DMVsxm7ZGSYnK7fXPRuEYqBtbY",
  "key14": "2i59tyj37h5ekigHSxDQ5CAMF5PrFxQ8HmWGbdPdt4EXvtccBv9aTRDBrcRruiPN2m1mneFKfRFiNNV3f59mxbj1",
  "key15": "3h1tiguKhi8EdBWLd61QPSpnJKHNG6K6KP2pKWSxF1uMk53e7x9CNw6JSj5SXkDzusw95bqeaZne2d2531eaYn6F",
  "key16": "F5toHwj17gGaj9sxZewY38McZjHeQk5H5hY1yD6kGWVRpUtGBAsyZM9uXT141AQTjzCZGbxARpZ69mPQYmVVL1W",
  "key17": "2MJxcBGvfZrUZXn9ynLg7xT9hNgAuo672bYSvTW8PJP75oRVVtkr1Eo9JQxhgZQ6XQ1EuaUK3W6qA9AdfNxbBeAf",
  "key18": "21PgMQxbzc1SbJXUddc5ZHXRZU9mxkKomUsNXuVvMG7j7AZHyBW2NFimL8hSXyKnRqCs8yN71wSJqqPVwrJUZZCu",
  "key19": "2bnKVvVrWK2kSzzS4paqGVT5dpV9MnjnMzV9FpJ4HNpvEN7JMNFoir4uY1JiUK4Lp3fRkRfjb9oc4tta5SfNfJLf",
  "key20": "3pgMtwSkzhrLAVCdDKEUfjchG1R9WFRrSRGb2nVgt52BbYDGe1sGXXkjkXCqVSnPq4rTXVKjNN9BddyWjFN4cJPA",
  "key21": "3f5oN3Jn4n5mmx6Gbbkb7ncQmBBJy6dAESW2N6SPjwNEt9k5HoaKtYRc6PfyYQtKE8DKFDYwh87oXe7Q4PHpjWWk",
  "key22": "56n4zz7mYFamgToiSg3ZPf4PsHWXLLkLgjHK9RmZC8LJL2gEkP1VdJ7hoFFR85ewNnB1DinWZbWu5UrRYVqK6grt",
  "key23": "4JKtnxXfWHcrRdTbGxcG5jR3C5k7UrpqWg6J4SUdMgSxQksYCXH7YErFRmUrx353YCQwgPdvejZJojv6Lv1eLXfk",
  "key24": "3Zh7yjqEvXd4Fhb4VL8LnEk2E3gmLwrRCb4zqv4dDFjxXEzEefVTTfPBEEUd274GxbXpWdffEZzsvJfJfh8Ae7Q9",
  "key25": "3oxiicKvccYVNhF3tTV3ffHxkyYG3HJHseMirGkr6DUQVJyTNBdbCrPG9bjtsawxtQrjLUEDVKjAz5VkBCY8RKfY",
  "key26": "41vcjihL2aakr8T6VUddRtNaRD4REaQzVZVQeBbdgLbRbDiS4yesjPnrxGykRPMmfJmpNa9hkyJqZeUacLbuFdJ9",
  "key27": "41xYyV44HkiYxW7Sr8XvWXRxZ3jPBPtxSh5Wq4eP4owqCnj85VLsAombS1Dbwxy4Nz3aiPUTgcWRzp9JYyMy1VH7",
  "key28": "4nEGdx88ddPZcjTTxMJzy4rAf7CWDWqdpkhwbAqQyEzDbvcwvbKV8MuRcV2TKBNJPFbkB9d1jevHmGgQ7osTMzNE",
  "key29": "3qwrusrHC2SceWwjg6Ju7gWAKWjd8XSocjCfM8JmFaCcbVzVu53R2zUZSxJEWBvnUYMAjaqATmMiBmBHmwmuZRbz",
  "key30": "3YE6TBttftyrUnFZaYB979o3JWMjjGjE1WCW9aAqvmYGrcHB4F4bBrg9bVUWeXU5rSKRaLAjS8k96UBgiaz3pzNe",
  "key31": "4A4QZu2J6SsP9URHPDjqMxV8DEVXniMMMxPJnSM2Xtq8Ve3GCvhkHBuu63gp7rXtLYjYKfWiZaHjXFjcSW8FgDni",
  "key32": "5azLCizJNckpZ5q5XJvBrPiEGXh7PDcBK4HQZBi43A42x5oLxrtrZkcoPgW1BPvHaM6SoGXGkVbwKHhWmtbn8Qg7",
  "key33": "2jEPJrQcJPnfBSGso2aMN496e74Qpe3pbH1TNAVuT7eg78cFHaKx94a4f8tkPSaJnbMwJt4Qx8vGwhyRVUmbMA8e"
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
