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
    "4HCZLgfVkrBKMMpDvQkzbzpJLWuPQviWpAU3T2ZH2HXN2oDhcKwBzr4bakxh5Zmh4xwFy82A6Jke7ffDmKUFtQQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mzsh7ns12ok8pxraEcUrEE4J57aJrPrW3sy1KGKrz6u7cfmwMSNJpECkLF4YspRbtMRxmM5hGnDjr23THMLPWc9",
  "key1": "4ekRFb7LVP8UKYuVS8e18ucZcnX7NLw1y3uF1T2kv3TFLTnd6DibdorQLpzWFDdTZq48KsyXE5ZT3MXxF5PsX4Pd",
  "key2": "2wNZ7XRbv7dFZASGvnhABSEoB4HboxZrjq33TQH62BmPR1MaYRTucfJbYPUtdqDUU5kT64i1oQidRyRrRUyBsGSv",
  "key3": "3fesUuz3sVaHYakTQ8dP7wudr4gdgJkh8jqdZ4TJHDLBhb9UkDmiX4HrpuPCUd7pd5hRKCcpoW5zqPCDp8Lb5U4E",
  "key4": "4APzUD4rmJWnNeuYf31cV8ANHvvgc1QeVCP1hBccP2dNkEiSesoLaHRoCT7h2Vse6UMV9QSoLFhFuRgxry9Ypyoi",
  "key5": "3RcHoLpu4mjh2iEBocTGkiqtCFa4QT7K1xMf65zcmMw1tTWJkUqGNcFhzFf3gK23kkL6XEnCJcQMSLintX2gWU1B",
  "key6": "52bs6EnzMSxPtS5nHR6gBCeTF59m6rYzn9cAsWVV1Pz6YLAWZgCw3nLtjkNrGGgCroLyfW196qvjNBJRCzVYwY44",
  "key7": "25tQHxqTAxAZ3vdHhhsU86PpGEkNpkYGRLYPRqnifKuGmPJxjCw1fPHNvWomKX539EH8h7pZzq4q2VPnFHtJNVh4",
  "key8": "5xuWqRLSMCnMxXYbwyaGbAabnV4UE2K5jRiBxB9x2Tisw5qo7bK9Nm5eJd5JZFjRY5Xu6McsCQJ4q6bdo3U8wUoW",
  "key9": "3r97CrperkSqswtt5QLiawJxrptTA57sV5A1Dg7zgCYwQ4YRhtmbemvwLaFfaPUGhXyg83fr5BnkjTqZtZKFoWJ3",
  "key10": "2gTHttE8Ma3PaWELDoHptYQVEc35V3Qn8AfxbMSD2MkBFs1Ajxi1fYik5zqs9oJ8uDQ7yMTmNLuvtTYG7Lh3FLcE",
  "key11": "2jKggK7oUJZukrEezbR32kNKa2b7NrqCvLdSiJkcorqgCCMkwQ6jrHpxMSa7ekSAeHFbbJTRVccXc2FVGoYvHBfJ",
  "key12": "2m3kGQrCPpRoZNx5XXou3NbxTSWboLzSYQZYSvLBtAwyXYTrMg9X3WcZGQZuZqM2G94NFCs3aHqfXqqqWEdkjVvc",
  "key13": "4NKej6xCWFRWMbukKa5t5gSKW8HJWPgjiGU8ogcEwottzRNnebfbqCDX3DYJAT5xwcpeso2CqsFHWFEJGnfvTbWA",
  "key14": "3aaKrVwUSeYYqqtEN1DrGKCFM9Kmqnza5GaQUDXBT9XfAC23wvbnswPy6uDhjaWBvWtEPxjRMh2F8DoEsWWpqwE",
  "key15": "4Jrb3LGqTUbyLc2EpCifrGtKzmM4Mqg5o4qkEQKoe1LhGnHzZ7XMvbYNFNWSBjM67vwgXKGLWz9oGvx38BqGE4UQ",
  "key16": "557Hj22qEP5awgzE1egp8gXoA7fBUQYkm4w2vJDoPm8UxoyfcV7CTamHsHZbjppVx781ioPMESxASg9TSRWjuK8B",
  "key17": "3Hx2ipxEqy3NpwD7rvG7xXFPE9jKZKT4JraDPqVW97NAAnG5AsLxEQv7jP4Ef7KMku8Voy9MiMRSHk5AgES4dJ2",
  "key18": "uZ9LxBuQ7SMRJ1rBTQK3DxBDAgRwnSC9vRcWcFdm8zKRiorU7hk4zD3aAdiRrKKCqmD38De571LEi7XaDSowox3",
  "key19": "2NGNEYNs7zEcrGnYHMgvCPfDyYGAK7fBZoDFpBQQYYWXuxE2yzxHWJJBPTM2iaTvnL5cjvbgtCcSPU8moeseiNom",
  "key20": "2A42XxhnCtaWUWQXt9LzHvyM8KBLCxz2SQgp3oiETzRzzECebWvs6LRXKDQ8W8bt68TmiLEd8uo164TFDv22W2rP",
  "key21": "3T6F1UG9Ft18zP1FTqMWH2o8yaTDWBYMBvicuCE93sm5LgeLn4KSezmszMfN4gbHhmPe2cjET3rXy6sSP6KxNHoj",
  "key22": "5dZeF2hcUd6nEvpCVnNsD3jDyXnvVB7bP8Bq6vFizR7e4PpNKx4JQinMLfF4S3B9FmhsmiX9o5Auxum1gof6rv9G",
  "key23": "yY96ysVsBc1H4YcY6JE8usxbmuQG51sajJatactwCq4MNF92Zw8HVzpXkhJjHY8LPHAHfzc6DkZxvycjqh2VPDs",
  "key24": "kqMC7eRCsUbb4Buw2kdGVVqqkEAxZxjfwGLwvuefmfDw4tBxxuCeayuWkpK6CddtaJ6h7sfKtiW8tNi372j6fLa",
  "key25": "53oq72YwkyHFZ9rXoLywvH94cQ3r8iRTWbAmz9vCu1ixvzQhkMf36n5Z6ixkGLQTUUH2CryoStWT8Er5PKyXhEgM",
  "key26": "4BUbqGxD1EuGzNFM2PumFvo7BMASgKD9butAsoMhnH3maCmExXSFwmby88qPMHzHHDPWhLkN63BW3PcMT2k3FBLE",
  "key27": "5t3z8DjK4dBkFMd4Z97jWkvmTunnWypfHgS4jDzMDYPUmVmsaWx6kkf87HVTt9FXP92ic9NeNbK5bYbiKaAPeX2",
  "key28": "3B1qryNxKF9xYyHgtaacU9LpsxK4VnR2FGJ94iv2hvfQXbULcoASdE55hgWHyFsAG9iNWnVY8FcV8Pvo7DZvjpVU",
  "key29": "2UfteK6X2kUGYY4knt1Ac3x7LVZYdeVkb53P4CoWP7DWsSzdYbWKaSKMWtNwF7R3c1SnsJoAfxPwqonsziFfMpwg",
  "key30": "9zVMDrAjzuKyidv4ANsBJKCdmEdwnPLqjvKqiMP9cwP7DNWHfGg8mjU2ZVAc3WgpY6QXLW3cCMMz99cjQQ8Tb8G",
  "key31": "4Hu8VHnyA7onTZEmpnaGSkQdXTBSx8BJLrZWNQZwiKJ6wStGEbFvRzBJULFgki6jhYE9u9SZN2fYsr9pgj7jWHzC",
  "key32": "wJXnGBkeXyw4DXwZfZxivXAoE2WwH1ZLuQDhWuZbjsXCxUKpx84BhKwyxdt5Zkq8NQQwYAZb1YZdyaHLrKMEaLY",
  "key33": "2Z6T9DkDbjXicJhgHH34xiycz1eLcuoMi7zdrYcSzzukszFtEcgqqND6jPpmrF7eCcyu98AH4s5wU1kcSHghwuz4",
  "key34": "5QbNXWsPHe5EGkcdHL2S1SQ2tJ5mvkXppgEZNBZTerNvLZyWbVK181THMUTpTU5AyTeYz1jynbPVp9p8ED7VaGy"
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
