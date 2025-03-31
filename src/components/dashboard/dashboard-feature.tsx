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
    "2hgf5q8MzGK546gsJJHDM8YF1qL9CAkf61jmXVG3iJUf9obBCdZUcDdy7xgVR1oogkFHZvn9Kd6nSB6GahGTqT34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54qRwgWxWvtWS2XPoq8HFGdZjF5peDh53xtA51AGZuYwYrFeqjscDxpwtsj8BCA6EZbi3QxS5pusrnhTe2jKnNrw",
  "key1": "3kCLrCQigBjotWX7k2gM8E1z7pXdjJLucnXh4mHDxLXUR3jQzzdzVnpHcvk9zgzD4QJ8afx9S8qAUuMYXf4UtUJt",
  "key2": "4brNpf15m9sMvamXLyn3noGMmu5wNo5Ld3sGHzqF9gD6tpPwhAWGHSYQnjpwHvfbPgLCfEzJ816vs6K2TM39cBZE",
  "key3": "4sCLcELwkVQfpeAADfmb4nF287gvMSUcAnBuP34xHy4ah73HbGG5eGhF4wpryJzLJi1PLQTVK2XjiFtGo62mWN8z",
  "key4": "2kEjyvHTqnix3AGEQQpUe9SwURHtAbdHsVkPUkGhodERKqwCfUKhMXSQCwt36zprTSPJ2z9abvngu2rAZzYgHXBS",
  "key5": "3Br31KsuKA5QLusPe1961XdydEoiwQidS1T4aic6E2Shik9oqwMbVEuhj4Qzp9KRi6YHGVHTJWAugwUQNY6yXNtk",
  "key6": "5S48RYrD1A1GwNbqd8Qa7mBcpcg9Z4WLYrsBeJ2ABqCUu3hXsssmQ5WZD6P76oEcZ1fPbvuygZ7bvrMVJmggVqus",
  "key7": "5Ajj1nX447m43Wt9UxA6eYYJCExhDprKysfnzkeHRpodNFjbpU3ZVurkbjxnts84TP4KfBcHW7nzmU34gzYP6erF",
  "key8": "3TFzTibPknhCoghcZNUewASy3kmYu9Q8meFLzBJVq7KxtrZkWCwZbwiisS2yttRkcSiVZysjPrk5ZpaMnho76mkG",
  "key9": "3ivSVZZAwrhCF8VjKYy8sD83odGqfwKbQqZLTnX817VFCyAzgVQHKCQDuWWj7DwWjpweotMByqxACYSGxGyX2cUD",
  "key10": "3wXeNUMykLxN319RrPYuEoB8PvQq7V5dh99Kq2YgdEqVtUmjd6Be98eFJmpq4c72qvZxsoJUT8fdNDmT1ZkGC392",
  "key11": "yVbBN7PXBwXjgdBi7fVjV9F8fFtDQzFu65zcEoBJHb4BSowBQAjTPzPsC5LoAFaVWAstfw1VixCUBZmoTQuVMqc",
  "key12": "4yLBeZs5NUGKMGPs6rSxi7ed3qGFUPCQMRKGNd2MY2gZaSFUbHDF4MVUW9rpcFALHRAuRkSi1z7Ef6mcsE9id3ZN",
  "key13": "2PnNx8HumzyUKvYh7agC4iGtLPGVZvUtPywSVHN1CfwfnbdRuN9hNC3BrkKH39FLfq441oMedWUMygiYRqhastAn",
  "key14": "5GKira5Tw9UxK2put7yW2b9yHNHgoMm5WCSbzoF1zw2g2WfYdMFTT2Y1eaMxvTTt6Ts5i9mQg2xvV6HCoYxzHLX8",
  "key15": "3KEKWzU9pV4EaDq9qjVWZbw86yy9tYEpGmgfy7aiZw7ZJWm5sCNPPz5MFsvCuHgAVMCNeebRQN1gmm9nm5Tr3Y7g",
  "key16": "497FCG3Sj5jSZ6ccPbK2ho22UnHsWwnKATqA1jepCQn61nG7KgfZd1Fpuw1JUTn9Pci1ADcaewCGe1xddyXmGsyB",
  "key17": "bVJq6WVuVew6TfapRYEqWE5QYmkMTYs1TA6KrzCUFRqFPdh1mfZ5q664Zwrf6UT3SzHLA5N8N1WHFhRzbVGyJ3R",
  "key18": "4pYY3qrkyqLQfiLgNUs9o3UFu1pm8AJrb3fXb1kWErd2Sg5fiViiBbZN262Ntazjzr53U1KA71qxG4mEH62CkVhB",
  "key19": "3nXdgreCSQCz52mTxDXuycL9P8ykQ4Wraa1T8LGCofJVNYw7XdHtpDUfPNyLeXZfnGxWPjM7yUCQwcCM7nsTPmkG",
  "key20": "5FXmVSEhDk76RDE6dH5c9pn571WRP5XoynTUgHQ2Ycs2fxx8Uop57fYS1xCytGX6hog8NiNCmAgp4FY2ECmQ8M9Y",
  "key21": "5WGfPcuMkreQzCGuyPcN5j1putbbCL4fP9g1YfzXUr3rgw8umC6Zb6a9J4VGP7zqXgYMbYR2pnmysLWETPUaMr8b",
  "key22": "3S3VbyttDAhdYLqKsZgtG8Gme2yQMmHnxhPXUKLgs39WvNjW2UoBLBBN8PRgc1NQ4i9YJxic91XD3zi3Kvwv5Scr",
  "key23": "4pdhdAuQHk73UgpLcGp2dVCFs1m3xbJPe3zgR1K4t88TZkWY6JwgrE61JFES7bKNZHthwNzJzz3vHCP2WaS5Z5mX",
  "key24": "43oa7BzupLpNCSymQAiakoJm627jqyXBGunbzppHHiNDFRijbtPnT5QkCt65KpfEyQMvtbex4ez1DhKmwZpXygwd",
  "key25": "2DFb6q8vAjrJDxd7FrmB8D56mf2GT8nXb1E6zXw7db5kgmP4aXv2ePQuvhjhj7dnHg8dVFNWdxWTrfVn1Dzg3AA3",
  "key26": "ijyYaLqC11CwqfGSXKJ3VrXtUjBQeFeyRJagYsJdW3uozvVfcv8o3ZEKq8UeytNioK9GtdERuCY4EQXRuqYRRT5",
  "key27": "4cBPUXArd7QAx2ZuKKsKJ82SKJyyMBCgxMyj7vEH3iH1wuee6JMYiuqiwbiQybf6dNJfskabSqMFqytRMxjyccwV",
  "key28": "61bJLfyUxi8N1msXYN4zC9fedyB3Hoo4NuNkwGPQaT8RcD6SvKgZRgqqkT13BM8DoaFhMgJgZp7J2B5WPNQqFqog",
  "key29": "e6fX4YTUxk88xC2vZ48aQPKRKS8vJSu97ACqu6unA9grGDTrEL66RSf6tFcWZZ3piTsg1QxqSgRtp64zF4jt5gX",
  "key30": "2XfhwAGQpKKBxKnEGQENuUVarwkCThLttcBoyYYBGVeza7MjihD9qjLLqHptgvGZ6AxMuQ4ZosWZP9WjE2bqRjpK",
  "key31": "2uBSNuyHfYYhFf92kGUb6GzcG2zxmpXrtcAWzdvka8F9PZfGJJLeLzPhHqJQt9s2GXALZYQG45XLayM6yLnhAP44",
  "key32": "3M3QUaBUbq2e48BRhSypWMx5gN2SKXd8bWycHKUXKPECwd7VhZnb4gAgAFMW3T6ut6TJXYhaE2vjtzNrJ9FomeSg",
  "key33": "3Wu19Ax63GDZ4AxAyoLnJscPW9WXny45Kfar5pcDaK3gxpPpqj68LnbHqvAWSsD1QtqzBzZNN8FhZaLoig2CdKxS"
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
