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
    "5gYjnYbxgVS82TrN2igAqHctPfAwjCiw8x1K96RfgGDoQbYEJfj7wJwVmWJhfTtjw635Dc19WQgdS5jzWVdbDf8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Koh7MHTBSycohkidFrutZgr8TJ5pkXB6eFJ258s15DiYcLdu4kyoHNM5bih7H1aQpq2vWckraGLLnL4MwtCYMU1",
  "key1": "2mj5Nh63gse5pxXL3PHXAR7ZKKdCShJPaa9FDNvPUW8Kj7THqfdwVYvjxmCDJe3JyKXRHCzbZVvigmekZPCRfkq6",
  "key2": "3HPp7mKu6CWMsKPnHNMzT6d6h8sBaXcBgrRXGzSgzQVXN5i9V8BAWxca9BtXMzDYJKeA6Hth825kidwFvV2dMHx2",
  "key3": "21VqAHaUx12DrXxvzVP8iT6iDhrYvW4K83mULbgKJEqZ39BdmN5T1y6Zd6z3aKydo8Et2crqW7q6i5Yjk2hWzxh5",
  "key4": "tL3KLb6obXsPLReRhgqC6mDfUyeupGhkhVz7KPrZAvRLYwKvmgzv5JJyqTTM8zkLdnofJruVF3FvpyqFQLFbYJi",
  "key5": "5Pux6yNyNWToMX7d72JEoMctWJGxMRGzSA1xD2ogYgAQCFG4TaBhUo25UaM54ecYunyefyYo2WAWY2rrhj2ncjea",
  "key6": "5S5rVkEfY32cUw4YX6LuTzqvuMYcjaDfGJA28TvC8AqTyW4eUaGwDmLD3eGopGmoVD7bwLkEokpWdGkwtnZ1JJFJ",
  "key7": "2ijmnvTnMXyqAnB8Za3hz1HgzsbNQoP81HDcAQ6QGymNuiRudEvzAAgm9DtmRgeajDuUckvGLRDfYkCWWuGkBaAn",
  "key8": "3sqZaJtJgUC4dEx3wju3rgZmtCKQhAxTv38BkZWtmy5kHk8Bh9MhGF9D5LQCNUUzNu5HciMUuJVp7FtW2kaCR2T",
  "key9": "5cXk9eE4Qr4SRyxwjd19ThKg4nwM7yJuPyEtciGKKMBUoNWBCyp4wufDKcRg92GQsz7qgrGTna7tX45J55XQfShd",
  "key10": "4WEMadSGeq3TBjGpBpSTHw8H7KE37oMiKqv5eMqskrSqw1k8JNgTiaWG5vYTTphk7mgbaF42fC1p7RkwVQMayyyn",
  "key11": "37UQFicSnz1KvoBkzpmoB3gFFjkJVETZjuBj3JmzR1yCgTeqTvjEfjG4LMv2uRM71md2RitpKZ3zh2RJSYJCQoj9",
  "key12": "3jMjWEGSiAcre4LqA3YnM1QEpAZWhkrSjh6dN7MVBk6YFhJNn5RstHLkbdWBFrD2yzNYRyzD8As9xsavdgFrCeQQ",
  "key13": "HFJZMQGXX88YAaY5GUzRGmNMDDqMcSVJsqzbdKeKengJrJsgVuViZUAQcUY9nBbBkfnZY3uhKwAZiXMvNYxtgxY",
  "key14": "2LRBfRKfNCKsebkgAW62CLvJpCiJrHUmwvfZpK6yvBqvCzA2R31TMZRZ85LbVAZNLCMRtuA6swZjp8UyT3rScr8K",
  "key15": "4tUqy34DsxKG95ZcVof8gJACtgnVhUUuXNw2owefxemQ4kyFrfditep7iW1MSmAnNTcyyKCKg4R4irwZfGg69c9G",
  "key16": "VWmZA91FjMye2yFcJkaVMCJjLuAsTm34Dyw2wcRKHeJNeu8JwPvjkSjRUFDV4Ur1XFbAcpfKTw6ADqaU51kmbgU",
  "key17": "2DcCpxsNDk94GaydNs46fSJmufo7XTYz5UqoMzzRBJtZR2J15GHvZ8g6tKXbux7w7rucyoJXi4JMsPiui9rMpZck",
  "key18": "495pxbvpBRkqEkXaFaisrmzcdA8UmgL28TEbLFpkBmZYUurTneiSjuut85MVx5qezUpSH19kpL3HJD39HQYVF2hR",
  "key19": "rgKdf5qGEkudtwmS4QYKANNnoGmU8tboPiJbPrWVSYU2rYwwZnZXiR1BLZrqcZSdJY1XCBVJ4R2tAvtZiCgUaHV",
  "key20": "2xusBJRX8jLuwbnPw2kkHpY9vjAUcSyHm24D2kF7PrGNYfKwA4TtwvwwHZm6NiLqeFSfCjazF3N7vgpeEvu6Zeud",
  "key21": "QEmzXUb9pvjJw8qRYAUym22Msqtm2z17QYxV8kpkF6LNZc8QFSCMYyYRkqEKQ9jofo1ySeaxWZQDoPk9L8Ngngf",
  "key22": "oPwDBnf76CdKZeeJzHAZmmsQNsBauWymzCdfGMHCp4nrakpKvjsiZbLryNKZXU5ieBQmSRPM47pzWbVhFHaMxLq",
  "key23": "5ow7PF3GcrSZgVbg84i5zB97jxqWbRX7i6vCUAeYSitcyKLPgoraZf3vodLiN9uuCacx3Z6TD2Nq7m7LvNWTR918",
  "key24": "4Mte6XeoX79JrAt7zG5yYY1iTavKmQzsHiPZhtZNRxiWsaCCVC2ZpBSL88Ht1VHT4BjpPf9Kodo86kiudNQyV5CU",
  "key25": "122e3QhY1rNkDHTzJuQ9jN8vDCSr6H7kNbaiLKNJgAdPywP2PNuMuM74se9PMbvZsFCmVyRfHjLmyDHZ7xSi852Y",
  "key26": "5gkJHEFBcPY5TmEsMJbJXNcUSNG76CwJuCxYoVxaYTjEs4KDmGQ9UViPxMwRgJbcqnjyiCxPyZCJk5QyJnvZn7CN",
  "key27": "63Uy8ffmDE9RKQjvZLJTb7mPHkasdJrB5C1BJvd1qCji6Uktp9PRzsUXQk9mfUzaZstMkVjXd8NhEnKyFAN41x3P",
  "key28": "4nfm9ftTWMCNExQfCaTeawc8kY5EW4J9kQyyLRDUF26G1xjHPiFbD2qR9Rb39GSG4cwd5ju3GmtXVrJKmmxszn84",
  "key29": "2R5UAV1EcxKmMDotMmfXr5CAzuDcoJwFkgVrcY6L6YyXsYyXShdPfaHPL5hyNPPC4bz6VJTfujZLYoaLg7CVoZKD",
  "key30": "4bBJTkZQinMyQXDwhAn3isTVfCr1dhTN1UdWA85mbcDje3YRHQG6qts8tgNBnpoJrB6eSo2TDBHtULKzAJEfNd9x",
  "key31": "5QiDdci4c6Fbr4SDMLbznGdScSYsUv2hBM1yoqqmxuZsxXvSph2K7NdrEutbNRogKXPRVCcKJrQBw3BpDwtJFi37",
  "key32": "WCYPYYAE9YDh7VkJ5D4CKiVgvhfSgicKkf5Ymk4zFujmpwASM51BdxZKnd2hL9ERh7k9Vh3z6TeWrEB25cQZmMj"
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
