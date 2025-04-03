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
    "YVFevm4qc1XtzfwrnijDs28eZuhViFUCjX2Jov4nACVMMDC3HMSNvCsXLArnniUGxDsWGrVynESfvS74YcBzomK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uGMp91qQV3PPHir9zxUscjg7acwF728EVpLFgcbeXZpgMTLTb5VkbmRpqDWtukwvAdTu8bvCJ7anisWfZ6J9yuF",
  "key1": "3X6RTS9pPVCyjJqthHuii6FyfCLw9ULv6EF4ummPmd89KRgoXYbvN2p5GaFbBQHhdsPstz2vPjXmUUtemK2yZ4Ee",
  "key2": "2WLtMCRqMmHNZAHQkQvBZoYspPF6r4EcN7UnDVPxT1zmPjBQKh3s2xwH6TQiBvfrGEgrSDinxZbg8LfjeTLCAT3A",
  "key3": "2Ux1pqrSM6TAxpWx9Q38qn4eESwqdGLW9wFH38SrZVtUbGdbJo9hmSyx3gu8UECYy7e8VaKnuV9rBRL74sjrzey5",
  "key4": "3iSidEmUsAnQQESg9MfsEKZeiVUQWM9H9eAvkiEarsP8VnoaahQtnwrucezDVJiotAs8PcANnSkREPYAarm47Bfm",
  "key5": "5ydkLXUzRUPLv3yTbHo4HRPZf8yda5M7YQq5seiVgCXiXCBfRmdjrfQU5C27EKPhKSy6XhshSqdSyjXbsQSCbze",
  "key6": "3ixF1uHX4gKrcEjuFNfT9BvzWMciudXbPz2yU3jyyXMPtFm7Y3KJuR3iKwiufqHcajmFwt7kDpBjKqaHjaYwbj72",
  "key7": "fp8Gx5AmUPsghF3sRWAvdpGAhZucZDzuM4uymE5AbXGvrYJSAfD4DVAuF7Pp2si5Rvh2HS3diKkFsBzD88CXtCt",
  "key8": "6CB5SfSwLXAuYJpzMXBNQAkujk49b1yWJJDZ5cJ2kjeqhrXzvnp7hfeMMCA1xp6WqLJdp8NQAHuakxe7khGTiNb",
  "key9": "5U3qWEk53MHiqTSjnsHRGkdxF1YHqpmiKkCUs9CpwyjxsRDfjtE33XwQ7dqztSfbUEjR896aRgtdw34aUkFVs2ut",
  "key10": "PzyacvfmuAHsJDXM9n3vdYvcrFVQpuVN3i9Ytj9QaZHPEBxvjs2goDJVPnMtx27qnMCotguTWciqdXNyi2j3MgP",
  "key11": "5BKkgGvME33zofnyCxhTjGGg9U2wFyVP5tMo9uPXTHMNZZJUCj8wPQYKEFS69isYASkmLMbXWz7sPXxWNn3f6ooL",
  "key12": "5HwKvEw67KNTVqvfF7kXCA4nM9Fo4oWofEAHsQbbCTqfJQNneQkPz3ZJ5wFrwvcUHAC6b2Et7L9V9R6Uaar8d2tV",
  "key13": "2wtWXXnWGZtpmQpuWWZX8992Jg7maRcBZATRvfUUm9AttyV2PqdE4WCHJAPhjgqXAYPgp3xesmggQdn2KQCqdZNY",
  "key14": "482yGTkSzP1zfcHH2qVQmYkHbobF16LDQgv6MnBU4vJNf9PJ4QjtXNhVCZmqSbCZ8fuY21qc1XZt7nNoKhdMV4Yd",
  "key15": "xpNUSkbq3gCXiHDkrjaM3CVd4TWjZptVHxnQWN53MfARxfX8MtzkLGQZotDqoCzyqx7f43UivejuKm8e1qkeoYi",
  "key16": "4mxSopZDveBffUmkbQsBhQgZA7BUPxuMaPcwTp1w9ym47SHJznVcDwdtj9ZJFyADqT3ZQiaRxN5fqjWuXJtyjULy",
  "key17": "2tFNSeyyMb6nuKhRdwd5XhW2cZW6zTh89Wx7YtUvh9pXsBkBEh3PnTSZMWrWWUGnwBvZ6Ldxjo2KfMsvdwnFspmJ",
  "key18": "4L3xVuiue6eub7h5fzHZvB2C1mDMy6afgLRwSL61ea1DcJEUQvxpELvvqY5HiHSo7JY3h6x5JAeYA6b6zsmbXU4B",
  "key19": "36nZxbnezUVGSypCetxAx4hX59yAZwYko4VFqpT1U6Cw4bNZhEaT3ooLoYdxLCVuGq4gjK28gTKLU6aQGpRk9sSv",
  "key20": "5F8ySMsE1yBKjLzLSKbc5S26aUatsSbrx6uMYZ4kjXpxKrR3c8L5ksuZSnCcCKemyPg8Mx2KF8EvVuTHrYZV8wcn",
  "key21": "5zZXhVtP1DGZWYqVQCzZmkft7rnze1MkXQqkwLjvcjjBhPBu4GXFZ2DxNCgBrTu2CiVf7LJ4ZzCuFQwktGVMC8jA",
  "key22": "4HkkxZyhRggRwxUWKVWGHYg9XNEKBS4hggxnNHStDyJ2teXFZwP4EYDCFayEpMFP17Pe396inmWL5QZzMeJikBrD",
  "key23": "5bc2qLBjZxUV3c7q4syYgcTEhjFSiZwZaa8HteLkagUya9FHBRbuGCYHUfhhvmbv9s8yiG5JHrs37eYrgxzZRYrN",
  "key24": "4uQSUxXSoVoyi4PupJ2nW18jrptpXuxhXQ1QwJwnBagy9LCsBrYosLcRDAuPdeV2B49qE6yHRthD97hwL5eVRf1V",
  "key25": "2NpqPiDHfRiSLGXpuBfBEezU3uuNba8z6fYDS26Xaw66eGMXN4JD6wcumvVeHmnrd9junWZzDLZDzYVetKZwCzzg"
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
