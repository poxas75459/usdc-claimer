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
    "2qDF4o824WhHwrQuCbK1zHv4nbN5RZkZ8zuY28KScgfRo95Xjm3mcq9JAPN3hSp2AKzXCSXXPd3wqRTHSxMUt5pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4516Pxy3vMSh5UzpnjtKDCeySbLw29zgCk6m9wNr7Mn4PqJfSBxeRcWmYyaxsCWf3UfcDFQkG3Moseon53EaJAJC",
  "key1": "5DKdKuXKMDC4HGwgtfvURrxuNR7gPFpnbuzgDV5UfhgLg2EmiArfkvWghxncW3B7LwRBJwZ7yWfUpYUCrk1XYgB2",
  "key2": "5ZLKNsymsfXVLTfjPRhwJ4DX5UUFKvesNPHhR52N6jqURzexT4iiHEVHKaoDaC4pD7dQa4KNqtMFuUfjffuS4Btd",
  "key3": "5RafjzPyyLdY6o5eCZqbVTv7tarNdcYLnXC9moaWLLs8H4P5wZxNjvSuWU4eKcVmLj5d4FBdtmZSVVStmWpG3aEg",
  "key4": "58AXdTDRwGqjwVQ9mSfCuz145uFdvqLWv9LnaFZHsvrGhNFkFLvbm6T9k8mkR3dP7f1MTAXiU7Jj3go1PjDQqCka",
  "key5": "4JqxKF5Pff7Vpq8xLqZHBU9HctcwsYj1ik5Ghz4PosyZC77Evbf5dhNQXD9ugLPCvjXSqR7Pn5kcuYeNP4PcDQLP",
  "key6": "aVBx4Ls7YF4NjWZeFdm21qPpaniEv6eqF6YNZudFkBdMP9vdF4ZQXgiicYRoGL7Zr1c74sNN8BSpqbACM9ASzfS",
  "key7": "549YqdrneTm9hQXLkHLaBB3mqjfrVZw9cN8GzGoCB9HytdntB1QPW6Unu9CKFZWUxJkwaf3wDQkcHgRbPYyq8V9B",
  "key8": "4AqVTvYgFeWmwCvTcG1TszF2jophN9p46zppdkBD7x6RT36hV8xBfavRFqJECbqquhsHK6Nhf51mTPabknrHR3H2",
  "key9": "4exDXmgPvh7eHzjxV8hoMFpzMzFGQh2CircCHeNWb3CvDqmSMVp7fktb2MiFoyegyoDZ5uCk5vTF54FCS2XUsBjr",
  "key10": "5DxCM6pHCZMgftHWgbuo9rLGZT3teC4TuKs2DRQoX1FL1K4VMm7H5F848kzbgcHrUWj4omY3eg72FzTy63Hv1jdi",
  "key11": "5nTJ9hHjixSpRwwjpjcVue3djSJtu2c3AN2cBjGkZqBEfx7yNJrC539jbiJ5CeouuiTsjaHurXsRFz8BLpL3f7GJ",
  "key12": "3TF2ZRZbCk33qnxiZrgXmhFBPwYHUhYA5oTHMQoa9vHt29e2z1aBe8iftGq2hwr6R9NVtNCD6gxpg2pwNKnSa5fz",
  "key13": "4fd7wN64pyRshHtvGcNW4e5AoNcXe8Jzb7GRBa8uau5m4Cqu2imzB3ah2DmTNfHjaeE1MVzrNx8KxcJ7LkvN5mrW",
  "key14": "2LfcupuoxPWP5k5WNxZstbCSrGFoExvFG7ZiCLkVBUusGonZmmC1DkK6yUcULx8S8E9DaXQBTQfw74BkZEA6byo6",
  "key15": "2P5my2g6fYgVfPa2DDL9Kzh775zYABr7HrBFDySWaKdGhDj2GyE4JvehdUhBhMpXbGL1RyJQdkPdeFFptNfQrXi6",
  "key16": "3yqosMfS5g66Ks9PnFhAc9qfPSyueu6nLt4VxiwGytRro6Y4PQ2Lu3fh2hr4M8FdVv29BSiRrXR1YXTvyb2kuMhH",
  "key17": "3YjrYb4a3GSugYvqydLiLNA87H6LqqyVN7a2Gfmi5BtGZKFVHTRGRbiGhSumWujZXzxkMYEU28Ry1P8cZGFKNhn7",
  "key18": "5SgBXXsyspizQNUeCYKcRVn6vaH9brU3hkhxBZ2Rds3GmppMWHo96ZQphgQgpbytyX68MSHQX7zLgBL5TXK9bkbh",
  "key19": "3E1FbzFHKqhVGrwZRWmzjyJgdgG8WzQbBTngZaNQ5pFsHNRw2zs5Nh7PVsm79Dq2CnmaS8Qnbhd6WdHNKdmWqCjD",
  "key20": "47UaZKjURG2uiHCKv81x6BNov2EykWXQnzPpE2GrdEJ88AXLLTfbjsupd81QpWa25Cc3UY15iahYPBYqrU3taBkK",
  "key21": "FnphVVd5vQKjcfT2vQG87nszJ9pyDZrjetuAYorZNEc1LttMuTi4EAY7pZhbuZSjKXsXgjGqBZS79GthMm4rRew",
  "key22": "3BE6umujkxx8bgK5iDHcd6XTmpeWwRKfUByR5vfnokmEt5w2YMkzdMPcpDafbzpTm8j1sBVBTbKVNwskTyAaLdw4",
  "key23": "2cLp4iTKRXkQ1xeyNCnTagbYPhUrFvzu163HfZ6dCr6w4LxKg5Kaj82UcfDVVNo9pU4fg1zQK2BJMaf4cYzDbfFU",
  "key24": "3bqpJGp3L5PxNBvAQDLcNkKWqCqfEdrJzouuMBtZTBStaP4pmbG3ZBL3QZpp2LgsQKzU2kfVRn1N68KgBawWv6LN",
  "key25": "3VyX6q1PbXUjaBPMVjhNhNKBvWXe25ikCHMTSRam2fzfeZjC1YfyTj6FAudL1FxQSMB9HbcoNXVYAGaLHxdwpVNp",
  "key26": "2nZRUV3hEXdQsbjDtLK984q4Y2hdNeiFp3CkhYkrVoDbnAeCRbQ1eCDr9n46x1BRpz1SUzrJW5cKdsC5nWK4QSH6",
  "key27": "2zBMUMWHoWhokDJ8qXePub59rzucaWTQqX12Gon5Y5RaTuL8b7kUe3Q3t1yYpJjRtyZw6vu9u3Ljbn5t6QMF5YbH",
  "key28": "3K4kePkd2srRYDecMm8JXhV2iVStyY4DB4yAS6jhydytz6AKcyGRYJPWRAL5qnUbcbVXM9CnBYEP87CRT1cxzGyj",
  "key29": "5fNTbiMLHTparZzsZqTdcBERomaq3NAaDx72d9HKH4F89dxbedXuGa6BWXA9MUq5H4mt7KRNVCwpbLQtwJGKZ2tb",
  "key30": "3Et68uRoatprigTqXuXPC5nsB26zdzyAdQg8U2gwCngaRn6vFNESSMPCpm95fJUTZDyPsB7W4HdK6ZhVQFrgmxm",
  "key31": "2i9S3WZjqgzD8GVF7qdfUwhQdK6Dotn14pMb8cU6kd9Z1stV6QMoxiUeYTywgJLw9CDbtuy9VrWnToK4HMu7vyv"
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
