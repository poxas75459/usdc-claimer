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
    "4SfoyhCrgNvK5k8HBkZiWrRmxFbGMb3Au9Xn3fuXpT7wajAJN5RgVhPuoCXmsPxfP1itAauLMkbWpyBrn7Ck7afB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pHYyBRZx5DVdW8r3McWjfLUx6CnXbPnz4gFaRFQm1cVL5vYbqU4sPBGVgqK5ekDy3F38eRuUk6t6kZ7tgtK2GH6",
  "key1": "3GokLb89oTv43jPaejcqNcXJTeXX6ACz2y6pG9RJ85KpUZXwNnuPairZmDojS359oyZMbHA4vhKKUpFSYxoAv1GE",
  "key2": "4CHSW2YSygAfaJpUuqKeV9UfSW2ikNaEKxwDmr9ri8j6L6boTTQcXQe7qrauT4SdEV6diNtA9ktRcytYFXoRJfGP",
  "key3": "RHYkskwZzLJj2YQQZVNUCfJwQyZ7VpvSk8aZnn8E47zZX8msRCGqD8ucz3UH3H4saxhy2mwrLseAGfN4gViCwVo",
  "key4": "2UHnqPGqFPbBDgZozRP1bThgADUcGyWM318RSfJw5t7XgGw1wC1qnv4THgLsU7noUj7Fh7Fn4pMkzUe1d8cpBozM",
  "key5": "4n1WLPfBBNr8bNRkKRnBxfqvWPXkteSskAFvtaGQ9PMop5FqqkfpBUDo6DTMkYXQeK28yKxVQoFXHXZRSzmNfFEo",
  "key6": "2dU3GAe15ELtm5EXk3dqxbYSno7PDS1HUCTtYqfEQN9Wws5tR6phCAecFFBXXBWMxTfT4zYVB4Z7RFoXmJjh9di6",
  "key7": "49Z9foZVPYtT7x6r6fjcYV2UwoEe9mcR2WHgar5XAiYmLd9gANyvvbwWqXKYekkdR1xsYCnZBRsMXykLH7rXkYqK",
  "key8": "5F2NDL2xpL6MCbDQYFLbi196Kqdu147fSThLjhcAZcVNozNgpv5arV7aB6TNCcgMGqp2qq9d7TW9kWbSiUNQdQdW",
  "key9": "5xyBo3yiab4GuWuepVkCAs5nMLz97UuM18RgdMWU9P9S1sc2C8JPCKXJfmqNXDXG283gbpbUxC9iwqhCnzziQgVX",
  "key10": "59WW2Tvu6jtXqQhRbcCewjXPnSvvLmtg744pmW6Fag2gf21kTBKu3mzE4NYGdz9TgtWYEZYDVr68GVKvYdAPQLoF",
  "key11": "5K29UeDyAeH5TatbQYAjJEdTbzKZUF8yLRiQLuuMvnTXoamG233GN4xmGN4WmmjReBCjeMNZkSRBWXNdJAgNUD51",
  "key12": "4JVdxCRSP4YZcWTdpdcfQixcD9zq83JKB65amw34KL6SP9ywiCQnbT6VaGTB2NNU2ThuuUGB41zTuD5TDHNNQfdJ",
  "key13": "2ZqMyu2Z3Ncxk8YQ3D1Ag3WSjKWtm3b3XgGBVa3vKpkR7gZLMHf5rAV5PNSTDhaMTsaEDNdfTRxe39hvqEioUrXf",
  "key14": "5jBLbF2yXkfvi8Md7XfaAqpRBKSah7dqjx43N5AUCQh6eMSPH9fzYDTQemFECxB4EfWVNbHSQ695enWFLSETMcbX",
  "key15": "4AfFEUHTCVCbEMGeHuUc6QaVADpf3xsiMdKWuhJwGWLf2MBgBgV6cDgFPnj64tsg4mkdBWUsi9pNwwCxhzevsFAS",
  "key16": "4NQLtkAj5RJeDHzP1CdMJeWRfcthN2SbjQtrXim97gh5eQWMiVT62md3NbH2Ym9UhfXsn8FBH9BCLQZspyDnxzLj",
  "key17": "3UqaA64oM13Bjf8CNYaPbiHzwvGMHqHiPkWbq463ZV6GRWN9JCV6i7FV6PhV8NyJ8rkAh2cumDW9WrP27v8y8Jd3",
  "key18": "3JR79RbzcGRQ6e74ZH3mBLzMFtzRjwUW6N2HhRtcrYvHuDipgLEsoULZ5iNN63oKJLatfY6Z9B3n2SiSHKBd9xmE",
  "key19": "3Jn4mBfnm73jnktcor9oWPTPfimHE33BnNQ7Em5eYM7uDtqLGx9yoJkSKyNbanNkdynVBPprKZ6r5kzsneeSLbSX",
  "key20": "GNx7oWYuwg45ZG3T9DKY2rcjwG3qMQfdgFVjk2aFk639GqsMupkTkfW6HdzpjSxRrAZUjGEWGvuJvrzqZpXmWLU",
  "key21": "rwR6dLLBBgeYTTtec9BDpCVBvkPaP7qpfuxKvaxLQ1y7N7LSAVBFkmR5UcyuPkpU95LAHo7noDoasEc8KLbmMYe",
  "key22": "L5331NmpGdRv5kXbSGwnqpmwdxqWvPFXT354y4fWFUD9oR3XA8mecYczWYko8g4RK2abxY8Uk1K7KLLHC2H48me",
  "key23": "5TpB6Ubt6XT5CXw1kUBWmXnxfAhvYJwKXTqUbdiwN56ZMEJdvH8UuBrF7mUmLpMGnMxKdaW3Ga1pKqXfofUmYqrk",
  "key24": "579HD3UkAYxWvBUtmHvyC2NkgwSW2ueQnLA9DyRbjoyaxAS1rRYkAvtMBmhPf9rXduFG4rwxkH18dzxKoxaUF35Q",
  "key25": "4iuHQTAyLC7Nx68TyrTMcZ92NzXT4rmBVnrhtxTU2LfMBwp7ZY64eefoQpxVAqR6z5coaLsYBPfDqFd1mHKUmXJx",
  "key26": "4m9To2GJKyU2JEYAN9vUCjJgy4PCusvjkWUsNyw3e9hNyrBKg9i9EkTzPjX9Rvf4dbM1fKZ2C1hEWcxc94yK4zQq",
  "key27": "2edYHJzGUYEUMBF7GwqHMYoHbx9DGixtr22YskMFgtMrp4Y49XVSpSS6ydUyLBKqDs91BzAkey4ZHCWYkEqhc25U",
  "key28": "5eVRx9qHc4QmaMuviRjtEB3yzcbB5yvTLAEoY63QrrWW2kDe3GPj8Bpk5U9RQoDjir8L3WaB8vtnvSGaGQNNEirA",
  "key29": "3Xg7CPsyWHjGbGWpLpdGAzxJboQF8JRTf3te7W44M6rV1Esb4TnQRcxPYB4b8pg7qczC9ZJKeQWq6Ajs8hJqMR2L",
  "key30": "2BThnpfdXbxQVqJ4NnZHPEUZpFwJXvVyxupsuui9C1ufr5BMGf6ijxyeYwU98eafgumHvVwP6SFvdhwMEqXf2uiK",
  "key31": "3piKVEhLpBNa4EXAxPKkUojwXEfcM36jhqHK1MSc2r7rfCFYvWBLuLanuNtx2emztAPkzQq9HoyB5mFP3gG18TV7"
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
