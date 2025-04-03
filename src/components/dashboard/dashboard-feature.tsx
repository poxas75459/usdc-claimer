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
    "5eFMNmXMK3DnSAUVdvnP9baU4yCi5bMCkfDY41JkH4sBjURa3fa3KeuXToZsHpZDWR91sBk462XhnPz4NLhyB3fU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oJk8SQJAY5S1sLdW9hJYzeryhShfwXdgX6cEYNTQsiEpfT3amY7jnFSbXLfGym42THeFdVTuSJ2ZzWgGWCMqyPH",
  "key1": "3Fn3Y39uAkR8NEbrLEc5bTBdZZ3zKqSvPxPow6B8CaYXLhyKwKHMdAKo3ajCeR2apQNfwDuNEE5W94ujR5PqBj4P",
  "key2": "4Lg7NVTjGdneG9EZrAZw18rsqm48KX5hhjWxfmpyZuppfAEKKuHbrA2v8Y9pHnp5P2hFxqpxbeeg4jcV8uSSSyMh",
  "key3": "5hEbzcx8jNrc8rCqe5JZgwUNeBDhP5oR7jfqfmRoCgGufc5W1W9WG2Rr59XK4sXZxsWZCejY8rViGFNbSjSvG8Aj",
  "key4": "5YYu1gdpWjrZfaDmaN85uteedCQMmHHvepYxQWTV2fFFec9mg2CZiZXLYje1FmNVN5fJqv8Bds9E7kBQj69m7yp2",
  "key5": "2Tsi7xfX32hBmMZgvdP8zKQ8ZMA7XTmk16vgPYyzTGhxkduR41RR16VqL3itmxh3pK5jJGRu5uTCkX4ZNosejYfk",
  "key6": "28FKjJV7XGhuBHKiyMEcHyzPYXyBRLeamK3S23mPbQ7Xe6RGCdqgock4N8L496UKRL3rsuYm7oe8cRNMuCyVHsQW",
  "key7": "3twFUdwmoM7rWfpPJZTjYeCQ1jofxrvVbqvq9y5fFSxbcLRxRQTYWrPa9oGAgLbQCDzLKnVXpPR7GoXPPP3gui3N",
  "key8": "ExUZkNFwJyJvWtbaJ9wBctkLYT8NkfJxiESBo2C6dFp7jYLoj6jcCNwsyHDX5Pqm6Tuy3fFDGfdGB2mLS6tPrzp",
  "key9": "2Ajw4wXtmBJVDjHp2sH13uFjWZYvkEfVV3aqSKWuNo1tztnyA5MxEbSmnYqNRzWmh2TBeyCMLGcW5vTzDeYbtDtj",
  "key10": "2AQjkPvRhAQHM6yZhPaefsZc5bAzwLd1xGQz6CU2KweLL8DjUixco4BBtejfncpsP2E6PFJ9RmsF4A2fAjWMRnhf",
  "key11": "4DNGRH41VNKA3bHZMnMAKFXdG28NznakeoWtpRo3FLmEbgKm9mZy17DKnGmnBHdw1sLabNWjYf6oHfhomRu6iXYb",
  "key12": "4jbdD848sXFYaCL44XB3QK3GpSHZvE3iCTYHeUczAux29D5XXk23ZUSWMxkUqzcQm93MzUq7AXcdmRcVyS6Ydc7W",
  "key13": "5emfTUPBpV6at6QtEmfPgqGGJatoqxiQEzrkoPgoWyJCHNzj8vrFLouq2BJRj2h1ZQzAWuXK2BfvEeMy3ZvTmpam",
  "key14": "4z4Hgx4v33fZPbR6hYT7i1iVrFtSptZADCejLx9AcPNmKZib4mhnsUNiu2ky7gVv9ai2tHrrNUPycigmC1Dn8QUb",
  "key15": "3GSEaSCY7d8DFBbVm5PGdwPobEYXzzEMg278e7taiNcq3snwK7x55taTzFbsjivPBUjRmEfkWPvUAbuCyCeUri1Z",
  "key16": "4PDZTQoagSEBkguU7CdNeTU2Bh361ae75NVwwZVWD6UpuSvxetDHDf5PAavfEa1CwScDJWG4mpF35WJGKFSXbocV",
  "key17": "5gC2RMRHgLk9q4pxASoouBqjewVyER1hDqr8BVPpuGfKkXvcdxUYUc1iwxSHo7dzXpHWNQJpUWfMhiGuX7AjuiUw",
  "key18": "8qpzCEbybGh7jprea35aY4Ch2KjBcRFuNY4sSTDVYwSLK1ycQiok5weZewJX1aos6eRaqJnj2w2WeNH7UuKUhq4",
  "key19": "WmXuUq7sHjrDXGURc7eN31j1c79e9mHBgCSqW89AkeFJHwVMq6DQM2dbiP2XRGCjxiPq7WDcobjfw5mizNc8wqT",
  "key20": "4HtPA83sDfMSxSQkFgXtBwzXnjT2dsYneLxyUs8weDUBdApgXkjdb74pobeLXVmWHFMfffwyXbw2rR7prGqRFRRG",
  "key21": "s63aF1WzTXMjN61E8JXvDBpU3AY6PpprJ2VuCFftNRWHhGGUbMDwkFncH6DqfyUDhAR7KNzYtNhaNmRLmesR6ag",
  "key22": "2uBZ9oBudCXMJ4ApwL631RAHpZBAbFNujopHwsWqVMvt9Lt47Gn81c7h49nhqT3RTzqECf6jgrtYThy4maNY5vb5",
  "key23": "5Wx1peHGQUzT2wxyma98z8sx1hN9qmYnkyVrbxXY4Khr9PBjqq2zrdQqZzXRRZSMAjy9zPCTpbDJLfhiNnAk752s",
  "key24": "5WaxHwozGgqyKKuZSEB5g6Q8LFT3qwcRj78oExRFWS4fZBn39SpKqUshm8GeyYGNCe7Fzj6ZLsouSL8kCX1wHG92",
  "key25": "3C1BQge3V2Q9qcWM7b2A91ETnd2akfMuiHPTELd3FuAYS78YYTyt7A5fv25kmD86HzB3XNV5L1c2gzJ8izPtiWLm",
  "key26": "2x82LJd6FnSbT1aFYUEZoBu3C3ZUN8XpqSQGks6LMShL1wRkYCf5oePfw6fPjRU2HGDXiHW3vuP9PU2vUMddUaKB",
  "key27": "5wakXEATqrFQfKTsuVSpkXZPFNXUW2nVT2jnDx1PfDkqKtdV3w87KLPmCQBS7EegHCgBCYm9ZukQ4iZiuDtdAod5",
  "key28": "5PTp7tHedkTDPWyvUYCDTajSw5q5WCrXM5T51Kgzr56m3AMLnD9PnzuH4XJQfgxZt2VUwNGkkJnoAhiopozQjdbm",
  "key29": "3iE3ie1YoawNQsy58RGxgpmQ1S83LiE6sCVD76rQ5JmjzHqQS9beYzDmucAsm5S4H5o9sKTzUEoPu1jJZ5G7PCXL",
  "key30": "3jnh9ydMV33YWDzbCTvUYCB8P1TiuAhgHQLLq8NADzkTpkHXsMQovB3UW7PRk27QTXjQGwriNsuQueSgT1eMxCbk",
  "key31": "FJwsjGkoxoxszfXvBZRKua92wRScR2SHcwvCARVJ2Ve1bfyUDgc7iBvyVY6ih68Ps6azCCa8QJg4TcuRL4NcABa",
  "key32": "2nDdz1GTHiNXQoVx7Gb85NSiUvFaQcm8AkwQByQjuWho4pc3wSZonoZq9sRKkfw6B41az4aXCDJLXu4V9mGk9UJB"
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
