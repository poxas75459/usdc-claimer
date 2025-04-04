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
    "4o8Z87jNWmuAREdHxSFYStvjru82QHAEPqhzKomSzdxrxNL1o8NXvyG1be5tFDYYiH8Z9E9RRZzGgjFxJwYXYKcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44A68JXe9HbnnxzZjTYSbvwcCkFPtu7Ar6NYPDgnXFs8mrapuudS6c1sQR4gu7WNmnvUnccJEWhiSWRw4JhyuY63",
  "key1": "2M5KXYS3jDX4XF1QYNcC5icg3vK8QwQ2Te565JBeL5sJjsU2nAK6X3YNWxLTvoq8HRWdTwaUrbLheNfyqvrkmxXg",
  "key2": "3X3CdE1dZATVLHiXNpkgbGDvifpR423Px5vb5riRD8hrN1TeFXhHbQx8YAVHVakJY8P9bXbjZU3CYj2fwHVx9dcH",
  "key3": "3sejbD2Pq6mkBGpDqoVygLoD8wK4gEjRCQwhBGdvHfaMLN2x5LzriTdfgRDLeA4EDEmYC9o2C2CWHBBafNwS9C5m",
  "key4": "4U5C9R3E8C3PPMkQgKEQAKfRLCfe9NFEScJNdTweYLgLUL7Ki16g1WDm9LpPcDGzWoqL2Gxid7ni7AuRKYowWKBU",
  "key5": "2tCQz6VF7XXDoaWqcADyJ4ehPbovqRztooTmEdD1s724KwfDZFk3b2PaE21DSRS75eDfcPXHhn4cBJLu4omga46g",
  "key6": "4UF4x4WrTGrvLoen7P3zaxEGR8NsKurnrdJrR159bfqJGUso3CCGSutmpUsj8X4tDYZs5ucYfk3n5PLBcXfcs3Sm",
  "key7": "zg11x2RuurbeMhaaB4xTxKMHpq8D3sXRNZuEUGxXEUroLtitHUnzxPhXBR5EiwyT7Q9nWkR2XAfeNhk5FRMm6av",
  "key8": "4JjeWiy8yAUgrFEDUevBxxfsWvbaXVUMwWJBL7rHjCQZdFPWiHgPXtW3HMYGPCjZZRVdgni5FckicSvW4nmiMQRu",
  "key9": "mwCZH6L4jDVsFNttJa9ze7VEQB1yx3X2yyd3XooPG2qmPq6QYfmJa6CtGLnGeAV6taFahMoA24dJyBjEZaHLd2v",
  "key10": "F1FCCQfpS21o9tSjSYRD1Q6gFxPzX3jHgLjFD9tWGjf3sHrenAvSM5ZMh9QhSyRZ6vCZ9qaTUvAbSWjQp2oJBNU",
  "key11": "4JYeQc3G5zZaMFC3UFaELYyFFrBt9vnQwX3jCAwMNNYULSPWwxN15nBy9a11oqv8heFvai6VDSh4aVUWPgX3aJ9k",
  "key12": "42ZLJMhHgQoyBccvD8aXQvgQ4MiX5ZXQSR2gS5uhetDRXjCu9weUk8NHQyJN5pqBGe1KauUve5Djumo5uGQBt3xb",
  "key13": "3zyPBuXRswJoQH6CiEKPDzvMp3iDvfBYyPTB12JCf8FM3nr4GKEpVvVzhXHFJFxXsx3h6EtpQSqAKefgEzsvRZkr",
  "key14": "5jLohjS6ALLgiwZ7ctJiM3wDXLk7MzgxGksY2AUvFM337j2p1pKJqvaECsB4G73iaHQjKhywfm5hjXVDnB1Xcxbr",
  "key15": "5oVqzhwNi24YtgLz1nvPdsAgHojQWoMxLrxr4ETHcyE7XEfZ8PQPYAaaea1zdx3d2VPruPiYgCNdv6chAMdmKU9K",
  "key16": "3J7FtuorWfwEmRdT5ztceXz7GUfT4M5Kb9nADuhp13DmzyjMCs28ZX7wuG4aso7mCF14mUyySkkppg4ojpJXCa4",
  "key17": "uULe26HY1SJiMdJ9PaKFd1FPxg8gjiDaDZRz89FFdRfm7DziVZUq7n1BiGp2UmxemKkpsAxSm971ZTwZ4hAhP5a",
  "key18": "4sYmvfpaidq6sFawVV2xE7KLWsvimcwyQSsQJuwX5dtXg4UvixqXv3WTyRUHHqS8V561SP9tCuE5CE9wtqM9D5CS",
  "key19": "2Rdpr9UgYBQvnKPyTkagYXExUYSxCoxEWG3JE6KxhycK4SFEimUTYjKvWJM2pzkhBxvWhs6azK1yVGbjdrxhYSqc",
  "key20": "343kKi9C3py2y2L54QxAT2fKeSB12tStfdcMQvRcPR8eBoXK5xV3yn6ZCrxGzyyUXL9j51GZVmka78SNqHYkua8Z",
  "key21": "5sjWJ7aSjpTzC5aMPtuDSWWZdsFVkUxgAcTrhXBdvcjjkNwhoFgqNqxbME8ExJMedbj58s1gTkkTikUm1quYwC7H",
  "key22": "2eS2djJDruGwBdMkmUWBDh4KAN8MrndqyGHqP1EPzs2LPJvqKexbf7WsfWfRpZq9AZVcqFumHtW4q8RD3Qt9hL2o",
  "key23": "2fpt5hRjhLjxWkW2esLg4RzCKjbsR6Z6AXvJqAERNd1fb8vzmQpYUz7WuZT4Pv1SmJE1MvcK9xDa2t6ijyyTdVJX",
  "key24": "2UhMRq1aY9yJ2LXvDQpNoSn1u1kLw7xLhM3ox282wi4vXpQmBKAEapK3QHTVmmac2FahgHaNN4tFDF5uPm3vb4R9",
  "key25": "4bTA245aQ6rXQom8JYjRNodzrtVewfPXk9mAdv2DsTc2JUJqzDiN5goBqPqBJZvJzEns4NzH9d7HVMddfHNBiBHN",
  "key26": "2SgycZ1CMZLX5oijYP3Mc5F42gQKEbD6ygCPScHLj6jZRJxYCMxSaMNj58cnkWVjxsNYMoqHS2zRhJHeoMoA4QNM",
  "key27": "5FFiSqJxnwcca2t2fFnvKEZGchcScM5se49xAHDFciaDzojKawUD3iTxAKcCGwk57PG6eCS64wRibeZwQW8xx24J",
  "key28": "eH1fzoMJLxHm8YtwCGVvYuxLbubLRzAhGKAH8FenT12W5zTSHZB3Df6S7mFCRCY5ZoawaD5qKJ55gZJjZX4srbz",
  "key29": "5uXmshfb7MDnzE9SJDgf1UmPz1rRBNyyjyK5WBjzuRZsfpRcvB4ER1R8KCvYSvF97WFPTAi6Mv4hihR2NCA2vivG",
  "key30": "2g7J349c5jtNWjt97WpGgux3cVL1vSzz2HYNUoQc1BJSSgNsj6GUxHTpYZrC1KhkcpSW6PuVTar6FGRzaxoAf2yf"
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
