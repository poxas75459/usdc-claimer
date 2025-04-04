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
    "5YkCNCbRJTkGtrkw79RbB5virvX5gv1dkeEGye56Sbu5aTy2Ptg61cRSVn7VxbGq1LRzAPsyLooanB8scuetK3M3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pjT96ejTxW512hnTTxxCgvaNLU4ysDoVGLCbbf8n4c6ep7DfxMiLGjjczgYQ2dzeYGpumzHe8To1N28GxEJ7v83",
  "key1": "2BbueXqhvHDHKGceTzG2CVqgAWAE39Lsi5czFkg2qMtLB3kFUmFLNkyXV6YavkJBLd7in7H5fFThuYnwWhrFPmp9",
  "key2": "22YyENvEnKxKffuT22iqUTvNSd4Up7BybYknu29ShAKaPqXHLwdJ8mZrMvcgkB8rJSoeaW8GCFopAetWTwBGQ6kF",
  "key3": "TGMVYiXA5EugTDW7zDexankuXAn7okh94M3Gfr7K1um77SoPMKD9eudz4vGjwkX1EaCxWt1eKAUL8i2cQMKnLfw",
  "key4": "2bBgWwA1W94MDGsunw7M2LkRmmWrFuYa2fe3rMHqP1AeVgK2wdSFgCmHW4De2TUfUTpaada9ANbAUwAcgcSkarrE",
  "key5": "2zhFazAADwvDrvzkuahjo7d3bLWXZY7qviGQV2TfE4zwgLYAmjbNUiEtr3XBbxp4ror4pTnypv5Zyc8mHBLrSuBf",
  "key6": "2wG911GuJ4wjFizkztebEp4KiM5MVUD9mRWFKabuh5McPuiy2GT1k5Ci9dWE4YDU6tEfbt6D943PhQpNg5wR3JK",
  "key7": "2fuHNq6A2eB2bc8Kc1mScoDnNNWc4z8C2yGE5LQdt7x4ZVoydtWHPZ83qY123WyyHV9Vwg4At6k5HC7K5XKtg5kG",
  "key8": "5ikDLAZRSqNB5XceZaNh2kRZLaJeNWw8JmMKUq7rhJSQ9UkhYNz2JMPqhFoVZS1huHefNToNGeWXgAgr5ykwLy6y",
  "key9": "5qHjeTDeK4rQ2nFvJXjuJp2w8gLwMGFWhfNJWUiJ2CWAAYPMYvq3s9K1FSWm5XQ4YwKHmHF2pcjpixWVX7JPwNwX",
  "key10": "4HCa1X8aeXDBBnhibZPB1taUaiinT6ZKVMW8T8hNxUvoAD646GWNBbNQUnMoigmgXTAFyAm7bgWfhAk7buUNpRYT",
  "key11": "26PLQ1YCJFhFM9moaycVqiJjt9ePc5PEq3bMiVMWmCmA2W3uVbAtXrGA7D1LX7soi8WnC1gnSFUGSFPfo1Nc1mVZ",
  "key12": "5w65cqN9WcsFxBctT7mt2ezbMGcvTPQDq815q5Meqk9kXatS8uUKue2iPXME5Lbb6VK7v4PksezKmCZWjMa2RHxz",
  "key13": "31ZbvUyUhgBTxHcS4sRAVMf9HRzKzw6k6QLSovjpqoQPYkhraLmFCgRNzBoB4J1SXu8o33KbXWLs4sQDboBBMP8N",
  "key14": "2NzP6z3J91VGSWhUNrDV5baAi2Bmhezwd5Ty9g1hYRSWwnswhi6E3yeMhNSTckqNSa6FacKdz3y4P8rARY9GF13o",
  "key15": "3gNVk13A6AaLwMPYdfNJiDvpqLuRunKfWEpux26yNBjXLpnXyLRk7TSy4JKSDCHhpUyNmk3pcKeKVKZq1FngoH8h",
  "key16": "pa4sci4FcYxBMsXY6wH845Usut9ymwJtXR6nYsF1DwgbNaGq7TftbRFTvoz45yQVsbTYw4Ra4djqGGrkN6R1tQ6",
  "key17": "PuzKZYMLmtqh45ZQ7dJQhDkZPWw6dk5RS7M5vC8wGSAeXv3WzUJks4CkQXZ7QtRGuZiqaT736x4fNjTtGEvDnac",
  "key18": "51ju4VtCvdBJMH2sNemrb96osuJ4KPEkeKyQdF5QKgGyxcLpfpn9pajxH7k4EaEvNJ9opw1UA7F87NNS3fZnsVFn",
  "key19": "4cN6hkgCLV3Jv3H8RaLe5qGu2s9BvJP16t23b6UC5noC8uPNywjFthMhfQGBCbGuPXmEVyuSnuDsFD8WWZDBSKTw",
  "key20": "2jGK3ZyfMuoLdPG22QBNrJyxMQnkFaN1BULte7C63rkvEev9x1N8WQGfkLU8MypNS61RBgDr2QCv6pdF5v6pRLhT",
  "key21": "4AbWjWyxzHFqxfJW18TUXHEFojqM6NHuTLq5qFS2y9pxwA8CAr9cqDZ3a1xoT9yWmy9eX4UZYpKYDP43nthnKBdJ",
  "key22": "2HuUU7zfLTisCmgZvSsfuEVDAbMNHPnk1zPPCDJCgfRVezD638A5kZ1Qrm47TaVufUauQerf34StArVEXWEvQBcf",
  "key23": "2gJdRrEF6gFBVX113ZbEYkL55HgQwJvBmWhvTSCeJUKkEEdALikxp7zvCvuRr1BNaSqQHT9fNxWc9FVEb14NNH5h",
  "key24": "3RB8ezx9zkT2KWidYnMxaYNA21WZHW4MuFjALc1QhKZv8DDWuWfgz2oP9NVNXG8rnYKAKaMtoekZgpAgcSSxuHyv",
  "key25": "5BkAFx8fHNa6KE8nEzqYjX51t8ggVbbRwAvRQ6a2EuBv28yUTGv6pXf7o1dzNL39ifBz8CrEUvms6jabV6DXL2Ai",
  "key26": "4iHDRY8G5katPG8M4tDFiQ46h4QCUxb6rWSpFm2LmZcwtP1Uvgc8P4hqg2bz2HTN4LdEceBUtreopR6b7d6KvXnM",
  "key27": "3hBmuAcLq9prVbfprET81dgF6hi7vmqcC6Cj5bEZ5t4dduKbYF2DzkY95U48VpXF5NCst43NsJ4ENEvLr5v3HyJX",
  "key28": "v71UveGpTaHzR4KPNwtEhzL31pfASo63AM6z7KKG3tqQ7tuBac6gERUkW4Z12NdnTopq6Y4hPB9gnTNQg957eCk",
  "key29": "2MgcBcwE6gFwLL6ZzRf6J5kHf4TchuwThrJibBhaWZffarYXZns94bsx97uBwbqiQFASQQN1SuqkwoSk1Gcoo8Mf",
  "key30": "2UTWChYhFepF6gMSjmB1j9oRFtAiV46tZgDvS9v1ecVdWG33FVBTd8Ru3wZzjGPcT8PCmSe8LZguRjE9v9ynarR8"
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
