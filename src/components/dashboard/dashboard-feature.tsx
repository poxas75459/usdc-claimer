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
    "5K7F1iMa6KeUiavXTK79SKop6E4qswt2A5R5AUgEh4cPnddba4xE4UysyftdQ2hTZeAVu6M9gZWyJW5pK9FzjJoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oibR8bPqND7U2G9ctyTKYRbNdv7bJGSPqf9kFX95zo2nxbrLZ3p9NEXmUbvCNDreu3rLfjfbAUBkTyz2exMe5r7",
  "key1": "au7zNjM3A4GWeSfqhoEi8YT3biGBLorpHG6zhmdDcoRLUwMpv25ocQgZyN18MvcksfBARv8x57FXwcaXHjKKqM5",
  "key2": "2J15f67SSYuJquqiGirntM1rrtkDpgrbGqy9bTJj5u7HH1uyEVKh4kxudgR5B2yE7ba2iNgBwYgZoRNeyW3fTw9D",
  "key3": "63ua3FANZfWDUaHL2yd9wKfB7ze3dk8rTh3PkCCWLXw3FhmwNfBwhcjLdBwkxFRTT8EzQsiN2ExDu9UHV1SJvgip",
  "key4": "4mGRV3v2NwXR3BWr7CaMqWhAvxpqQjsWXhm2Z1zqLmUGraw8FRfebGdfeqDxNNGGyswKT8LqJ3FjDpfc1thAdX9x",
  "key5": "nWUqY1u58EDBqraJXQ8o9FPbUQyY9mAwp4mpYT9BXfxazA5m6kuhYxV7hd4SAMyeLtxqwz4CZjfpi4r1oY25atc",
  "key6": "228T6LSwi5dpHVRm5URahTc6zzsMZxH9Jaza5obNRcdACy2QVKpfryVDyQxrnMgqw7pnRq9SgG4vfQCAaK57oCBQ",
  "key7": "5eo93AT3WZNtstiJCBjrgkq1FeHXTRaGG8gkbhJ9pBSYvqoVKFZoi7cEzGCp8JhBfPxu8pqNvPMG1YqBt5CpDXeX",
  "key8": "3RG5b7YoF5Lm75RCYwyPs473hii42pBMAX18GUFciLh4SkjjikxVjTeBymH8qHuYBvRT6wAvAbm495oyLxYDPcn4",
  "key9": "31pxpLGwysxXFoPFFeKEszEKvgSz1478LF5ajDSXhdUWkMa6UkbuxGGfDQnx1eBKhbwJCzDUHZESnQuBZVa33DuT",
  "key10": "5dqkTkb9D9hQPi3WEThtrQ1wBS8xdx5na9kuVk1Ck898nhHbJLrLJ4TnZUvmYtvKUcNQaANCsDjVM7AKepXD5ZVq",
  "key11": "62CGm2v4geqDVkzjGNhgAioTpdp9sN6xGivqg8DwLBnapUYcKS67AJoPvgjNPSXHdt9ZiExAjnDBZ145Ncy8HC1M",
  "key12": "xdDnHvVveyW7YE75Fc7Pm3a3X4KMTPMhfvUUwiGJ1NaATt8Xu4hUzyaujZyU4eqqctjVXFNwMSoCuMJPnHZN3yz",
  "key13": "5KBaXzefdrY8gU7v9n48Swm5dum8sAdpup1fLETdQvDiAtZpEKSARs3KDF3bfUfSQrwCSVBAc5e2a1JWC7gTQYvT",
  "key14": "2oiCzH9bpiW7W35jmTqbGHe3MFqkscTm9PykV1H6xV1DExzVY6Z8RFRg2ce8ax2SmwtyAwLxRKTbz3B8v6Ja1DYj",
  "key15": "fLRaLCP9mpC4dP4caowevT7ejwSz9dcA7MpHPr3dgfhf6Qxy9Sw2cNGEcCTDENepNS8zqVSGhN7L1FLVtjbVrZe",
  "key16": "5b9e1x8db1a5NUMcPhmTjAM5QmRteqM1WiGiHcwwmQULhkRLkbdZV1jfqZDSwFWG2buurM88QDDEcebGeZNd8a3S",
  "key17": "2zDRDBYtNJ4C2xvQygMuw7GvxcgkyhU3SSeRp8d5sA2nutkPSpVECQK9w4cJ7pdRdzpAYZ49XhgUMa3CoxRvr5YU",
  "key18": "2ybEHGcrkoCmAjtTwtBLcUdRT5jV51t1xo4Skz1NcRRi7tpytMu6cxo2KaTJWRaVwTjUfaxHren9wRbmzqZNfxqH",
  "key19": "3QHEMQ3F1sgE9QAkFmCiN79rPcTVTAjn3MQuhHneWA7kuRq29pUhD7h6vUxg7eBaCunaLiD1DE3zDBrSAJaVryos",
  "key20": "Pnf8XqojHKiR58hsGgJxpJwEUMQb6QkgVdn6KdrsqRHwiLNCFNrnngH5uRtwPQiD6qZvFmD3Vd1qa1NHefhhevq",
  "key21": "33pi7kMT7MqRrM4zgxRBM5JZZnHFsL6v4XxwicukgqdCGyGvmm4bNmA89toqCoVhkA5HgGs4Vp6MVG2Xr3Qogdaw",
  "key22": "249zbJrpsdQtUt8cq8JDp3yQDLWCspm1FbvQGWFP441uWJ3LokARXgf8Zn2HXkJ6VTmyqh7Rmo2KYLQ11aYWWocM",
  "key23": "316ComTqWXsCJfeSzxDjUNeQXVLARnG4s4ru4opG3bCj37Yvrs2a8DJ7Lz1mPBiUf9azCajfaQPY5PavTbeQWqvR",
  "key24": "G6J1MBLgLo7C4E5oX6dbBDFtExANnqnPgx6YKDNxUQ4hYba5Yro9SeSgUUjKrovgtyi9vhYJukHuefS5xJp9xgs",
  "key25": "52c1zTConWtU2yr2JkvqqMqVazTojHXtCnruiPham43SYAc8hwFLJ1hcRNBKqGQXqCAiFFZx9hGZq3fymkJ6BeiC",
  "key26": "EunNat7SHNdwQdJwCJ9cb4XWTHcPdgUqT7KvxyDtM1PkMnzkfFFuAXRKZrCR4Tj5rHeA76tMBdPDyqjcLW5CpHL",
  "key27": "o9bhdcqC2BWTCpUDySvU528HusatCYhBJHGwHXbD458FgfWk6uow2zXVdRUh5R8xbXhvd8rJkfTrL2LorsCpJa5",
  "key28": "2jvU1eYTiNETb43zQF1kj7NGK3SvPNWyhvbe7Bqy1gScpQdaXmTLimPoEWGRnfoVG2wkmpJD5GRo3kadgpaHr1YZ",
  "key29": "2c1jzKJ6wUSe5ESanJ65Q2Y4DjXhB59fhPWiYr2UAFZjz6oJR9j9pxtojeEaQUSDto5TJVZjR7UegtHZKsgLn76u",
  "key30": "3m2mBmsSvugDtPc9Si3DBwQiZNhSvub9UyTrNWgbBqJ6sGXMkAHvqHtbjPU7EKLj7HBKDFV3j7EM4zqxfLKZ6qXF",
  "key31": "TQNXHhuhiUjeUWH9VePo6GDK2D3pHdnPJMvBPbk5GFNDFu7MX4BZRctSfZkxPQ6GYU4iUoisBrfSnUnqjjBw59k",
  "key32": "3BbTYTqJx4kHys6fFYQDNxWXSdNbzdRFcNb21wKNP8g6KxgHrDmimwoZ9h6JjX8kFvPRkFUrs5s62QCyQ4PcW4PN",
  "key33": "3H8yUb5DvwdwPbAGFEqBefSvsq5y1HKK94hU6y4F2MjkRnTw1g1e9aH1xad6YefDG5EfWs9p7mxdLHqfHaJgG35X",
  "key34": "4aubgViQVKQhFc56hc5cv1Kiy4tEizxL53DNusU6gokQjSMRFSj62HGaTCj5rXXEajrAgEptbVZD466r3W7x2v3W",
  "key35": "5CjoMw6PKZkcp6rHiWCx4YNTPiQeDXvVz31V5qPjDrDHCrR1eH95dkWun7aevxz5XVnkV8QDwwJSdwCJ5Zueo3Rm",
  "key36": "2oKWX8pchkXLb5B8HVDqx55Sg9XSHF2a8yDSHWQF5Acq3HATGwuHBcpcXfHPM8VwV5fJ4agSYNaj2hQp7aTnqnn9",
  "key37": "2fVS7sRU3sZQu6zSMfHsjYV3C2uFm88j8TZTuzysBsW3iAtuD8NFaGSuo5vpqFJVYRAuqPGuBzr8fBxS3g8BvCSB",
  "key38": "2tKNTmnydaniKvZ5Ge9hqnB7i25VvaM9GUjfByU8whD7iPFaUDJhq5jq3bNFGMBDNrXmZqfGjfG7e8XqGHd3YAYa",
  "key39": "61oDhNAUr8RR2sXUzYmn33wgNPo2zpwg7EvkN65GTm6Ft3bwDfMbxzuHuhoVXVyroSgcD3x9PfqvytESNkbaesMt",
  "key40": "4LYS7QGPm9JToZDFzhkMitBxMr6ugWShKQVdZMXcc8xmeMLCPT9CFEd2W1wZABLaTNAoa4MhoXCqHDJNKhuDyy3y"
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
