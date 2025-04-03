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
    "PDJUPXbA6wcuiRr9f6whgKAVisngvpQutbJGPzWqiYw1cz5eXm5zV1gNqz66qE3srM9u5Df77AC6u77oAXgmCqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GoDiDswb7gifZViDS7gRNfFXDL78TVGB84EwKYLWXhpiiAF76u7FTYexrD73mdkUCp98dNt6hSMiGpc7rENtAvf",
  "key1": "3BAVKTxrMuiQoEL8ykmwMKfJMuneuV8936HPaHgWoFY5HXcvx1HfnnGmmn77diMMRCBFrdLVr8f3d5mW71ffdhMs",
  "key2": "x75KPNKWM2bL91bi3w3rg12Bi6aJxwAaPqg2zGnwyf117CQaFtfRKQkBr1zRfC9FiRX1Cnxka5LH5aGpZeuBjXX",
  "key3": "3UC2uNnyS1ANjfabWi3yGdmauUP8214xMKGQCUN3nuUBp7FkcqfTNUWz9StYYxkrZumhj5niJoD1emXPNegQ882L",
  "key4": "4qgeRrdo7cgJu4LH2xMMX5gtdgu6douQrq6oTSaDqZBaLvRQaSNhEUQj1SEP8x8WARAq92cre24p47YhsUGjrATm",
  "key5": "3miy7fzUvNzs8ttNUDxRjTo5t6whKu3wu1koYy9h1X3zjTr1cUBDji5WVwjgu9oG4kS6dgjudimwFVBQGJfwWdUc",
  "key6": "eSASceG2vxizpcq2UDe64VdHf95bMPP7oS21GZBjFtskFxTS9wpEWhCFoy4jTHuzw3NupEJffAiVYh3bZq1o367",
  "key7": "4FoEQDVQWPTsZqCVDcDffsAjz1EVKcrxWVrS7VpQAo9LUKwYdMHhAWBKQ3kSPnfUZHGKRqKowZANvn8ZcetLDDqR",
  "key8": "3oxZmEnLDzVregzr6BTrcqXkA7wEHt9GPbgP5Nu2Z4fuyrxvUZWfVF4UQkgnnrDhPcrmBDTpNy7QcTeo2ArmSh4q",
  "key9": "22w1PrtjTi8NtjXatyTGt6AiMe6rQ5LfXaToHBnAL8GHecHv7wjMGfCMr6DyUaPqCHiR8SEhAJhqafWKQWdvqymh",
  "key10": "3g4BRT4FtTLGmCY35cu1EaSqcP1CgdZVkArfa4vChS7t4J8g55pQYnCWfKnbMeCNsE8B5NnsnZdj8AQwn1KVFuYD",
  "key11": "5oB2FKw5ymG3H5XuHhKSvnggQSa1XKvhP55hzADMnwnAKBymf1HhpTioAorcjRZ331us64nGVrt59X6keN1Phbwo",
  "key12": "2hiXe9c5HB1dozKgCCjvQGpHzcJA9Kuy7MN6vx3tVfzAZayBRLrVcbiLdzRaE4nMWSMCNegqMT9Ae4ouFikVLGvE",
  "key13": "3KCgQJDhoPgWSdSWsKhGw5EZYhk2eKSjvUWcBSnaFRutQ5n1Zf5MrWMcV6WU38pzQj8e3L2TvMkZcPqCrRG5JaLm",
  "key14": "3hhH4sEB1e2KzmhvCU4GfGPHz4jqevFfru2XDRTmrdzUsHLxYLHeiKsN6KQHf5m8qR5htRzJ32W5yqZCAqRKce8o",
  "key15": "2aTVLALQavcGbV2NRWnCnb3hiYUaecTHNRCotJQ3z3G6F5YVP8bDwNoMurqK1zAcPVZqTnDeTmYrJ4yd7u7PwFPd",
  "key16": "4doWoPUmWzUe7khqoy4xUrLpbw9Mvn3t7W9Sdjkt8DVw3hoa5VLwqzNeXJ8rpYPCZsbTky7MTG1rjG2UESWJACTC",
  "key17": "2EGbv4RRviLFpoCvawtzS9p9Zr4N9H83th4UsiefEGiiCAghLwPq1AvPitvkJa7XdJkvNhsUwRuDA54VweywwfX7",
  "key18": "5y3CcEU7Am4tqJn5GCiUERF6CndViRYMYgxsCmd9aAuj7sMQn9mCiYs2MYk2Fd7PbcYbNCFKyuLWfhkE7TeGKmnp",
  "key19": "dPijm7kdSKQn4hNo9tY7bZjUwmk7qZE9rKvo7gXTTAwNd4VMqZ8gVaXr28WM5BVBzxVJVYkDpytVrrd6PABh73v",
  "key20": "3F1yBc1BMWJ1Rk4ivBANVNMe2LA1NJmqJKYxyyYiHvq3jiSTL9xRDQAzH2mAYDX592cii4wYCeLQ8Gfo6eofNLD6",
  "key21": "3gjtoCW7BKRnP9ZwxsC8Y9RcvfmTvwfn51yoNhwZ4HsQWyMZ4HcUT37fR2iXgZjoAfwiZpmW82uxuKGYQri1CqJ4",
  "key22": "3FPfcdJ1kCq6ZBDg6qcYhwiiNKBr6xz8zhPzVuuNP3afAVPqcGdeDv9Kv8532DQeeGHZkZaq1kX821M4rwiXKzDe",
  "key23": "2RBKtPnw8Zw1EfrFvT9Vy98FkWhrtpSK726ZWFKn8CQiNC1PmkRzhMThF8Rvo3Q5TMRWdV64r6YdEDTWW872cXxM",
  "key24": "3yYyi14155EtzX9TtvHBWxyhs2uyPyykGi1Fo3vXDreGUbf9GsjVBqPHCsMTqv93cZYvbmBxeVq4svDYrnszfDEy",
  "key25": "4V8Nk211qbdhzDWAUwdoDw3ZhvQHDFupeUL3uwCsGrmYR8CpsodK9L9ZLvFBSCvh4gYPnZzKdSFaiHmT73XYFYAB",
  "key26": "4hJpfkErxLmWhx4r9dPY7EyBSVyKG1Mh8rkiA7Cm9RKs2WBL9L6mU1X2xmyF1xKfm9Z4VMLYmfrtaEjnSZvGAPUJ",
  "key27": "2TajtwwZRB4mEs2stDcVXKuxpG8dAm8B3zzYcbf83EZMdhJxKkFCYbC21XNKcK1znzmzoSX3agLL86EeZMg4itR8",
  "key28": "mL7ZUJmvT5Bq9kcP5o94Jn16cogwVQiVzw7WGKPDmwV3MftMSveMvYmx6cQZM2idNCvP6QzhubSnneontKh2qzc",
  "key29": "WwUEtzDEkfWVzDnFwvUxALYJkZb7qHijbqn5Phfs45r5ig41MimwH4YXrPYvkodP21erLs9BiPDm2LJruRCiR43",
  "key30": "5KTcFJMQHRio626JzbQ6CDxzJ376qrX2Jrs87MNTUQ4PvAbeJK2CY7JXnrEdrp1YgxZYy97ooQS1jMZM7MnFwadE",
  "key31": "2Rp76Ujza4UnAmZXssxDWzaLNYeVRP1xV5zMeSgpkQuxqn9ho2pX6DdWv8YQiQJhw2hJzEnV4bb3dNsEmtTny3tP",
  "key32": "4ZY4k5j77fHCLNj4Z23vNiyqPpeU2mpzNewoXyn7PHpWRRqbGwNCCusAerYFQuuiVSSUeaEe6UnBXwPpy8X1nG4Q",
  "key33": "4Xaa9QEVHdrtkaAMmXMn5DcLeZ3BMi9PTwmaTrdU77ALXtTaDiTzJG8xMppebj6edbkobZzC6AACxsoLCXoDShYc",
  "key34": "s4d7aa181eGy6bSQmfFZX9SwT1A9VzWYB4HbtwMZ1EChgTZ5zsXd6dx6Jxp7XL1mtC4QEce9M2VznCYu4q6wpKk",
  "key35": "8XzYPZ41xhVFZGC6B6kYs7jhGrghivDtfoyUnVE9GocgXWHZbioptK5rPDDmVivFmgt9r54pLSYhRtgBMo5Q8fU"
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
