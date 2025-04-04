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
    "5ve7CsBE52RMkGv5Np8NkL4Q2H8oKH2py9kD28PuEkSGscEbbaDfGDUZt2qsdtd1EZza2bJQxkcB4nZEVxhFNSqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iSG6HBkGGRDVtxZZvR5grq4xdTYFcX4xc3rGCUQtaePPNo2PMroAxRT8jUJRxHboGqYcVXuHpR4FYLXvAtrydFh",
  "key1": "28dD7A5C5BvD2Lt2maBNZe9KNfyrqmco36ws2qj1dzF4SUUTfUyxyygM6UToqXMNDTs2LUx5teyq8vMshdQt8fjy",
  "key2": "3DAUrjWusWkp6gr4Pd2BhAXec4etVkqg74CMnQSK6esdMGcioigQD1YcxkoXCqrKUxFEPzm3j5HkbbLSyiQUFvKa",
  "key3": "56TJzzEqaTEUu1Df6piTnWQjhXX1z2gCENQkR5eoLX1w8QBHP6j6zcdb5G4s5UWAsQxkTBJbQffmUKTKU9RbLVW3",
  "key4": "3oC9pFVmpzFHpsbAcC4jpMpEjGM7hmmz8dexvoHMTZTc4kV8YsuSYBWV9cmHZTZ157DcFQhLM9xWWhse4HcP3Ejh",
  "key5": "Chku3ha11c1LWfaxa8yCjDtNdzJFTwjrRHkZGCKC6YCuqUm41tW1bifKAeYEUrpAe3fLyk9qBv2eFnULkqPr42y",
  "key6": "3q7rkjv2u4F8sjoWfaMPrCHRAt8XyPZVfrZdz8kHu9Gnu511bPiFgwJDBNTPVjrP1nPggPRedWi3AGvrYmPyJ3oy",
  "key7": "4iufxS7Ap5LpCy68K5X3cCKs8ope3z3znxXTvK9MxcavSN9MqGC64z5Lt91TXjKp4gbiCxp3FkoWiYAMCx4cXUYf",
  "key8": "4sZQHrcuMe3BycZ3hoLbJSUion9rU24FyXHDwHfkdiEPGKJLunGBA1C7QgFYJV9MttrSuvKRG1KLkc64UdaKgyy8",
  "key9": "44u9TGQMFryBSzQqTRLY4ctzDeXNKW8LPYUVonRBvs3hUN91yYnC3nriZzZ89W2Y3KBHGJLsJfDrW3GZePeYpA6X",
  "key10": "WyCi5wC1daJEkpQRn9AEbPSkXtUkp26dBP7T5vi18gqvPHFebbxNmWpMZGpa5bJqm49AjSspgjoijoLqATqscTr",
  "key11": "2jJXzbQq4oGw38Z7N1GzquhsfkbCpDrN8JYuFtzNo5bvzedAbdjMswJ4Wxc77X9jB8ECRTdwE4mZRjQFX7kM5fyg",
  "key12": "4KFpdJz8ZrKbSsoTeBdUGVixoe9qGcwducANBGJMejUChr1EnajgVUbEsyKajJHBxYkWxA3EuVkk4syARe5eGYp5",
  "key13": "GjDVNzBFokotSgmh9W28u5HmsVrc5YJcW9GY7nCfczK2cQTt5XKTebwQPZTp8F7f1iAShGRqyW9Treo4Qn5kdX6",
  "key14": "4zHFkQ6NvWAs4CUoUKHigAdxkpHDqnsixaPNZEK2x5ctobgUjb4czDRaRyJdQauR2ggWpQdpdZjKaRtQKxmF4U8s",
  "key15": "2t5jL6ubGwCNwP7k57BCvKD5QPfgBQUEZ9ZGSsVHQfu9FuQSn7SKaC7t2rnGBiNR2sNQQyePUhwFZq6fYSeFa8gU",
  "key16": "3Q4mVnLuXpkdQZWBuXNtwPxVQ9vFgAgw2ZMY5VEjqLzMCmfTxwShxUFiBcwYmWeo4k8DS6TPft2komYKsVH5kMAa",
  "key17": "55DVvC99G8AjS9ryQ9oaohdpYKNtY5QaggYm3DxMHrpt9pRETPZt2FqeYE2k4dpWzYm2ZoVo6RhbH1pF2Q7dD2gh",
  "key18": "5hhHWuX3YVoQ48vCkUbReo8J1JhkeCypruxNtN2AAE5fr1R4NXKTaACVzoR9QCdHKXhQ4rHehvb8N9h6xX3xZNFw",
  "key19": "59wHcNaPDzHy9U8RW6Cux5M3gGLxm7YGggJ3HiSaSix2BnBNCwDbzCgfVeEEWZo977w4gP4v7ULM5UkhpGACqBzv",
  "key20": "53hWiJ9YXXbAVU2yJdpzFQNUAAea2HM9yvwWgzU6ycN8SETd9MPb1gXtCHwSxVsJWnZWGTyqP3EiqzRHAWjiXLmD",
  "key21": "26jz8T5VfWuqRuiTKvAVxrmmsb5Av4zuHd2zTZoTnPU8nZJtQsLTwuU3AQKXAQR2BCkoQupTJVGCrLRBHVvqEiao",
  "key22": "42GZBREM11WCWbhjrGGiMfSRSSr9Dh5tByi5PZHsEQqfT47vtvnmGAgF9sEqNwwDyRwYJmHnVb3hoq1PHYRivd9v",
  "key23": "2zuUUGJnzNPq3pzAQPKUVT9pFigxnvmxWJXd65AaqnstbpVW8w7gSYRR1F1uiDc6VSZmgxuDN7NkdufVtjmCULaC",
  "key24": "5RanmmMstnrGkHCwfdE2sVzF4crkV5DzmJyC65SXVkM5Tn2wtoXThbaqqqe1DVod9N2TBzSoNQbmHMEfTTGbb5B1",
  "key25": "3YmPDZk5RUPNYK1Hk4554q5jwn7vLwGgcw8GBZiVECqsfywCPdUQ7xSaofjHf1fDMYZuv6junxinWtuKTZSNL9jt",
  "key26": "3KznMAuyZfaQesKjoEJcvCLJjanBy7rjU57SW2KQgW9SvapWYDXSjzpKWbQdcLyKcm4BJbaKpP4EbcMR1E4UoNpC",
  "key27": "5PDGnHXJqT3Gi8XGP378V994R8GetdugebyysJ1Nwpmo8v65dWNPFobiei883ZBrapUaEV4kWD59TXdQB5pEgZHr",
  "key28": "4uGdW4sUTQNTx9XVNiEbywitHjh1W1GSCSLWjDVkFtDtDLjgAc3tYGt3zBWBZB3siyb1wjUYuFPcte6dxh8wFHvA",
  "key29": "3LZbbom7puRAC2DUdghTdxy453FQjAmdw3wvSf5mNrY8hLeXkRyeDcFtPLZzLjkaHbHCGMiNnq9iweVnreJGFAdB",
  "key30": "3YrGdKSmVRV4ZNJY85nKnRetvDZjt1HBWhAWdpRLnnm2RxApe1Uifv5wGcvLqczrAYveETJuF61u92pnFuARcqFw",
  "key31": "2XZuzYapUKN1uuYT1ohxjZjWv9HSyJostYbSdb3Kd3SArEGfTjEcCqQVnoHYt7aRGd6hShibSdPgTvxPffMGFaW3",
  "key32": "ufzvqFbYd38Awvs4UQBmcJiBanAA7piBEWnDZ51Qvc53EoMaJ1rP65VfUDpDUBP8PxaTuczMaXNxjasn2buZ8gu",
  "key33": "8HCWY6WbWiTB6BBCKhCi1DzBdBZdXQiJKc7FRAHZj2N13CgQvFr4u67wvokF8nZJEB3VMZrr83ad6mtFL8ZUiiR",
  "key34": "4HaRgn71xZbFCQGKCY5tL9siZqoviwXTtqmcCnUia9Svu44gqRap4wy2gRJ42rM46MrrRWgHnVqQ8vcu7tBPhXzB",
  "key35": "3j3fp6on5g7izPDHeV9wqjakHEYhhpqFJjK9Q6R1qfPLYAJKrmDREeYgV8er12zW8RndwmKu1fBxk1p4SbLZVB4Y",
  "key36": "2LyRKxc3kaFhjek7UooZUhaxhpHWTFNfx71uTc4VFf9vK6Dy3CWtbt5dD5uTzJN2gUao8owudKuVVLKvkax4NX5h",
  "key37": "2xo33JGBRzPpv4FbLJHjatZDwghPemMJ4KqbGVNVv1t8Dhg1hpb7HwTnE3twS48Rm9jgDy4bojPm78maQWyZ9Zxn",
  "key38": "usefPDS7oqqCVcJ3jv8kL9mXxXBgBc6USetykT9pFmUgzzxqhde5QQxdM3zVyhyS58nR1Bp38ADDmLeBB3VRdFo",
  "key39": "4ys1FaTGzxfKsJhfBWEkFjJjvg5iL9GvVp9Ecv4Mwfwuja2DtAj5w946X6igvbxLH22CW8YngR2DAuLWXXyxNwZ7",
  "key40": "3u3XxsUXChbB4L9Usc2KsBRAMNjLhtGuwimiUQKKHiDPQpBSRCckn3twNvXJLwpaAfkShfDoQ5WjvLpDxrTEqjZ6"
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
