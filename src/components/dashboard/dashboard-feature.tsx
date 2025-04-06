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
    "5vGFqwBGinMCDoJGpx28RQbKpZ6B4oARWLve5LcRs27m3ZfVCS7JMw2JMQciSNgNfrcWez35ZE33nVtLBMDZJYXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vnehhW8o1M9vZR7NnHDuerVReBzXd8Mi9X1JZ8SuULZ2X3W8Xx4J5pSTVd3RDbW47T7Q6mPnFkzGWt4Y8GbtQ9P",
  "key1": "3NFrcA7U8QiCN2zNPphdcR5QKdKx7bXkUW4wGH8oh4LoSCXbdsQ66QoHSzg2kzUy8ZbivpkYRjY24Hj6sMzqUzHe",
  "key2": "2wChJUSwunE5RrMSHt1AAXUHY8eeL6E5Q2GEjHfb6aKfPwv6RPrRZaQbAUXQaugtEEhokLivo7sEbDkiL1tXD5vX",
  "key3": "2aj3ZuaKN87bQgHbHV8ebHG4ykqLUwV7kiT5SySoR7MoH9bEW4bEuKb7CcipsWF2hMkEFNWzLEUvSfwaq3M6SRd5",
  "key4": "KcryiBzEqPSFd3SP9ynVmJ8EBRuMeCquJbPBgNzna2s5m3Ho9vv7YYRHH2ayVJLn8VrmBRHaKo5Jj5pW5Utoy17",
  "key5": "5DAh4TMcChiaKzShoJorK9Ebe74imrUeq2HoFpZ9yxV64mn1kqLQJS3Hig2VHDAobWJxA9pJeZXVomH9ejsGwr2q",
  "key6": "2CkCcYa7wFTtHk6xysvLrWfejHf8bGiUvY1Ls47D8yXg3keoPJaD8RVCyDNRzsvqsrDa5dxU85dgoYgt1uNutQGe",
  "key7": "54EBygjDXgdjFQ7MKqVP9zLzL7Zi6ihDey1J7CNw4rrJyGLhJrJPCgSuhpDotji6CofH25jmGGYRAQXyjLbmUtQ5",
  "key8": "ud4U86ruXVeaY2QASfWvY9TivzbPrv5oT1ZuoQavwDtpHbYzEP2FSnarFhN3qKEGSM2rrJrHLAFMcKQQusLWdsc",
  "key9": "2nWErY8tKJ8A9muRiJQfqZcmxy8bysW7DemBTCo447hH6BNoxgno93dZfgZtaKF54T2HmGvA9ymMCSzeFbNsiiAs",
  "key10": "2fmCwuffvzZv3buK7paUsiBbDabeWLVkQ2gZYUXpVsvqmrzPEqRf54bbGLrJinjJPtmK5uwxRvAGeJGdmnrkXAaa",
  "key11": "3HUtRMVvPP2oqz7S5n8jwXiMQSGA98VzmUWUWd7ZKgKcBCUXRLfi9G2kvheq4WDzAkGBkrV9wjn6pkCeUSoxRkb6",
  "key12": "36Ubh75m7hgAWr3pLSAVh3e6iJeCrcVGowHeD9UHXZdr3dDAUWvarqZjYxpjMkJp716ccqSzog8Q4BYFv1RsdGQp",
  "key13": "3ZGmm48P9CF7VQxWgXahRuyyz6Gq67qoKiJwnZAywzA9RxLPKgQ95zu47E7W22WHErqfaPw4hhbpu3N3usT2Fpr5",
  "key14": "5Xs4UoBYw4D9m5pZhRqMGKCeS4BAQcZmLZVsFMPiBynb7d6p1y57jnLiaByib3RSLDocNXAAbJAHkKgZx87BmrHS",
  "key15": "2qJvS7o2tZsfJj1fxQNE4S4xNDkyQbXCs88HfFzRwZ9CwyfEosSRmMV9otTzp8xPJYuihUrpydW4gLHAp9DWVXrU",
  "key16": "aCsZMTzhHzEMbBo6VARLbhhwJuWeeuszAqcVJfmP1ARmqgS3SjvZ82ewo6oUWxwjGMf7gX2EwpENhfDJwwXXoU2",
  "key17": "5SrH4sRfDz8fUBTEkSJ18PsWRDfxcRBvYvnT82rawie9P4o6eJKRALZTx4C3UwyE95eGGQiKqK6NPULtY8bt4fpy",
  "key18": "5UBhRWUbzvzCEi9feDimXXE7g27HPFVemL3QaqcVzJsbiopbjdkZP3wKHKVYRiyDZ31EPqcL7fjGfc5r21d3ryn9",
  "key19": "59aPibkEekeTvJi8iVodF4CP7kf3aDJZouiekWHUzNa8JkHaCJ1tAow1ZR3uqV7HWDUopD8XnAgNFXBkNf82fziE",
  "key20": "33DJ9fhAoifGB76Xz6XZQ4kTa1LgPgtopH5549TVcK8GEYpH7mTQZLwqE2nrt8sCSHnwqqZGSD98C9PswYHT1j2G",
  "key21": "P9gvRQK9dvhYD7q4bkvRgTvFxdhv8hAHTzY8fUAQL34zQwgYWkBcdXEQh2uPadvhp4GTjrmr8fqSCnoTxMuRps1",
  "key22": "8ostfFEi3rgFbyFrw53mfjd9ec6rQsXPDbXn9ASfEEnJqc1vg5EuL5gpDnp38wPZYKvHjDXBaE4g6wGfCGqtFJz",
  "key23": "5fuXxhyoJjyhfRaPBmnNBqxKwSM2HfeXFUCRPptbNAKkS2z6dxUFGUbZQJTVboQPApd6z4xy5mXKD36117RbVU83",
  "key24": "67dSCHhrmhfp615PCHzCdr9wnRFr37DdJdUEAuwEzhXjX2zwjEZb9Mwo2tb8piExwKCQp73azKmM9XBAQjNSAzyv",
  "key25": "N8nHh7wPykdYaVKQrikPeZf1StryBg5Bt6RDZQWS6RWNoTezg3REUy3daEjbLzfuuayNPxhfdepGJ3QpsibXZE3",
  "key26": "Xt51aauiQggz54o1KooNHg2fyLVUkmFk5NaLxGQKiyyeSYpaJJt8MvqtncAUS2uknnsASt5DA54kdQVmYiQxqJe",
  "key27": "5hiQnA1snd97d2KLHR76njw7jLK9JVLX7sxXpZdpHdns8HZYMEhSyeFCwXRC3n4jt8U8SbXYJXRBYhaxo9QH1dmq",
  "key28": "wi3LtGxURMFewnquSgZjsoVrLvfWsMS1BQA129qsTAHHCPwe1qJ3Yqi5hEphV4xPEDmGv2L5uDbgJr4nuNfoDdc",
  "key29": "JhRJG4Hdtm7K3m1czdrVHFDy6GhRdSRHe6R328mNTvfTZHssmbbPmC7HiqPHEatWhemhrk6BVPwiegrwW5tYuB9",
  "key30": "23Anp4R1cEiKyEFFombtvaUp7WFvYCzYgNB37sQRqXkzC1CBg4z5A5UVZTJwu6DKqDPmFDTJ9RQZmhaGLjDkEb2P",
  "key31": "gNVwAAhnKYz2eGartL5CvYEtKNbzFXJJbuXuTP8pq8gqjKDDWG82V4HCiD5chjpNvXoyNX6hELH7yaTPQQJZWn8",
  "key32": "jU19EuYgbpAucWki5eszDpaU1Ry2FRW5CR8gKzsfcL8AhXhh4NfqUmyaA3GNQ5r54Xw4EZpft1RzoK3aCHJAQF3",
  "key33": "5Xmw5awDD16ovhXU7M3xw34vaxpw3szDKZJ5hESm8XeHqCXGPRHX9qfSqtnEe2RDngRo6Gbu1w4EPXEGbBZNqmKL",
  "key34": "39488ZQXfR6ncmjupEYAjrsBdrEdmZEutdkqgkFodEL3sNfTE1D9AW7Nb2aA2Jckqk5RKML1W6r7vA9Fyq8rBoq3",
  "key35": "22133y6iWqYEPzSBfdJy2pdyFaqD5RmSCJDMGdM6bVkFvr9hfkYeRBMhL43kAZ1o2SmJwnNZsYMCVJNpoR7u9fo4",
  "key36": "41aejF5hBnWFK4dyvK61udFmSayL4nEuYkSs5VyAC418Ty8skRrm1PvwYsmrRxLHh3oHLmAQjAGT9GFpYKtLy6yc",
  "key37": "4iQAkos5GP21Uz9WyZAA81EmZjPBmaVCJ3TaPCRJEQCRYYZM7uiG6my9yzy1FvKM3P5ikfCPBsuZJbKDoiMvFbWe",
  "key38": "7naryAoXN4u4Qu7XviHvu8U1WS9cuLYh6UTTk3J96GjhcKarfPnzf5ZVRZRoFcgPbcMWPb8bzziB9aS1qpJ8uDG",
  "key39": "27R2FwzcL2gJbjLXzCiEnAN8WfD5aHZNhoXdqBnmJkq4oF8CZQyqNrvVyaoxvBNnjxCL7o46VroaJDY74C3ujQFx",
  "key40": "4ZTBb3RZDKMTdWNXU5VkpAhDCgFNCjRNLcueARwCcL9cYs7VVJUCgKD3yNokfyDXmb2KcHNWMj4J8ryks22hfqSS",
  "key41": "2Lwaf4voVjcn7a1Nt3BDrdiJ3KVsHJBUhFz4Ug3ozVyTvDaRG8wX5yQKGvGhUnWddqQzHTm6VFnhNsp262Y5NAi1",
  "key42": "5Qt6q5jergn49HEZkTQpSwDsCzC7f8wihTAEoAeTX2fsq6QxWTZFpn8ymdbQ7GfpeEfa8hv8r1H4CjDEcZriLqD6"
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
