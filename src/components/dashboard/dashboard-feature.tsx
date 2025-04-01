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
    "3itdevSpoeQgL8wmgC1APj2RzngqNxYrqZD456xSDQe2RZhbcdY85eVgnCuiPTERsAr9QDNicS3wZ11CYapQiZjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A9nWmvb7LPTukVwnP75mTsuJa4d1gGXHifbKn1YSGEUBGMNTghT7EGo8HyJmiVW98mrqQrYqyXUgqy5QcoPy3WN",
  "key1": "3MCwZKMmdpm9Dd5jDTLgoefbRhEh6Swrjuif6YhqYvjYwwNYopwgHZ7kiA2mbTZFxPHUh8E18MQ3ZzoSxzrF9D4Y",
  "key2": "jUmZ9FDJXZ81vXYhEH4V6i7iyjTXKzRm93XDLNj7EYFCEJ3TCYs9rVxpRQwi48cuHYAVwcKydLizXRTQq74hPTy",
  "key3": "53omMrsDtNMDCvnYehs35JZRoe4YgnwfT8PxGQXvcaoY9xyaxev47oqFx3wAftDnbLrFXE3ytQMFRxXwH3KtesS9",
  "key4": "3eQg2yKgTuGWKt4DnBTW95eQMVtVdXkwiN6rQdztm8srbJbGtioUMKZHKxz7JrRpzptxo16wSH9fiX77svz6q8Zu",
  "key5": "5Azbx8Wdc3bFZbFyMH9fAWQnJyQ9FzuFbAwpTrB8k4xsH4mcnhcVtxNUKRHVbqtRjqNdMyvABS1cLr2LwiUatmPL",
  "key6": "3CKDC62pLtyVtV4hUd94My7991bSyYTcWsdRAvzcGcnWNrc9eoa6wkaFoaocL8AA7eYwmAKujpNGDvdEFNKGH9bg",
  "key7": "2QP8gWKaxpBmMuFMJjb5c4ATS546hmq7KYUFhCmB1QCevGLsv8UVVjH5S3N3WGw687cswJedzBYGigEBS83CHRvJ",
  "key8": "2rPNTg1ruzTap91g65fBeV6Cu4KVzHRyZeUnRK1Syzij9YJyTJKwUGRhrg6z3DAUWcrpwKQ6TTFyyHqfBRL2aBts",
  "key9": "5z3fN9BjjAdq9ztVDoSK3Jg14oqZ1vUoQBPuMnZNs1HHCnB4qJAbQVgfiBWtZtpxkMZYf12TXEK6tZfehnashG3c",
  "key10": "128h1tsGfjDaPfEU7s3xxU8K2WP9pXZB7639ucQ4ci7gWN81oZPy88s29Fn75PNqZyWy5Qd1S7T2ShXjZLMbx8z8",
  "key11": "4YsiJSWYzVgpoheoLJKJAsVzBgEVS1YQ7z4Yux6JLKU41fr9NHcYfkmPAU8DRkBdR1PFUhiV3KbPFnuNkb9fJzxT",
  "key12": "5dcMPoRiq5u5xNM9LSFjYm9Pr6H7QiLZJ8VArweanDkRp7bKGDarssLr1rNhsiPEK11TiLucHnqRVRha3k1rtMrN",
  "key13": "2abRgR15T2rxtcBPXKhLJSfbGF4LGU7UcKuFxSAvBe4pkffuC1KEXPcPNtSDQoTeKd4PZKGE7yCVnJhkCkgNtkan",
  "key14": "4PqFzgYzuKudm7YGdHbaPmXsk3DdqiarxTJU4w5Q35x3HfQG9NBdczGbsNMg9iPUYGWuohVHc34SQ4XJds9L7sRS",
  "key15": "2wnEGQDUC8mRVY6wfGdik1cAwVzK43WYMV8beQwLsB9Wc5anNCNv9C3Wv6kYFRHmj46jV7vFwXKw5CXVY5pmQyug",
  "key16": "3pZ62cRSQoh2n2iDrjedBDyjW5WUusyJGTx6E7wpcSNWtnZYcdGvR4aMeNxLNPct8erQzKeLfNzEqypn53DTpEMc",
  "key17": "2TinWifGPjoQ4cb1BZs9MCfM8x1GGsjujRE7ZuPT5SYJVbptebWZxa8MrCCnGS7xQfvS2kRiTucEfqF481aLczPR",
  "key18": "6344VQyJGfM13bkLuSVc8goga6WwCoFZvDmDd1qgJrrDmo9umDTFjC3mfwLgPBmpp5F2oRXJMLWdixUXEcCvt3E9",
  "key19": "crEKvQFYyck5hhX6fZ5JuvMfig51ZhzRveULgGU6bnfBo4JgGSGcdUyRXLkLERNqyvkhcdA5NbRREzhoU7bk8Py",
  "key20": "2ghwqyvBMj8Pqn7f22VPkLFp48YmNzFNEJdJsXLvKfu2tW8avU65TWxY1GpgX5iR93sAVqwG4htfzDAmvxTqpmXe",
  "key21": "5EDpL5jhaEHuXkQep8rdd22PcjHZrRnAzFRQ7BY1CQhEkkZY8vVyaeLFmZCNxJx7NsjZvYRXvX2UGqZ2YqtqmxfB",
  "key22": "5oAbuxkY2pPJsfNUhZQ6oYWqXQnhGtsvomAJGYtEkbQprPW3NyN2FLCfe39peAvN7v7JkTH6L8imhX7ED9kkXC3L",
  "key23": "5Aq6gAfVxmecyeNWwRw7AWmn15JVsdfnYCNZydhAAiN45FVbmsaT6dbS8iCisWK7MHJGRswtESbDytWskyUFvvAJ",
  "key24": "4VkUdxLcagVjGPns46j56bRzLFb6od9opTvS7yNX4oTPiyQCrfVpfdt1L1DMDQ2wLpNRrpCxEuuLNr1WJprSTKrv",
  "key25": "2yEtoYNnx2uQtiQHjvxBAgXxrUVRrRGDyH1YMZCkwoTSk2n71h2ku1Qwb4PLm1ize8YTeja6zZGgDGGtF9Vp1rmk",
  "key26": "22uYH59A71j2VAhd26UoUtYhm8fqYZQFb5mEAwNwYQCikWBPNGenLMpdCfQCzSngNW3n293MkG9YQx2SSVUMpagd",
  "key27": "2odyK2wn9E9XxR8TwRvo856j5Fsud87aGvLUSxFfdwoUxtWewwiGBMV2KuBySMKzvLMTTTq9jkoNSAKRPvkSo89k",
  "key28": "55qPfV2adkky3DxJNydz1PHkv174buh38DHCawNpVfZ4iv5c3Hg2FyDUM1CqyjS9mD9vBMySoCj5qQcBHoiYU9dH",
  "key29": "4DJQwTaXfQhe36jmt6M1MNMT9MLx5hVx7tUxiQCUS9xKzEwtMAETDK1Lb9EBJEsKJKmjJQhBYxKNJVMjisfr7qFQ"
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
