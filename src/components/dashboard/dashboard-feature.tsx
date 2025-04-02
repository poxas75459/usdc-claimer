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
    "4DgHor2DzduHogPouraE8pvmVJiFUbVpECrcp4Vu5KYgkpAxC189sDKvkgUPLWNt4SeEp3Db6UB3Vtw3ay1f3iw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CP8KZNuYrgNse6dAwLSJqoDARH2CUqT5PR7RcLNKkQVHJCV736PnYhrJcA1b5TJk8S3WzvD98uqBusdQhoS2R9w",
  "key1": "4zqBp8drrMpxAoQUfxnZCvRazRXFRmrHTfdqQKgdRH2mwj16AzFVkvrLVJCw4VbJaYojAh6rHAKszMYTbMfgo8dT",
  "key2": "2bgoCpubU5RYm3ot5d3KAhuJmKL9gjoynm3fmrGSeHLvnaXb3x8uW3paXzLPRkQNEpbXFFmhKQtT515LqqsFLZkJ",
  "key3": "pxYzYWS1Ysi37W2B18F9WAeW3aVFGYPZPWv7dAjUB4s4RBF8vQ28XawKTUQyisNzT5qbksGrERrnLokP1hdwZ9L",
  "key4": "x9a12ZKPXTWmcJQ4J5CbR8SKS1oXsGNeH4rD8aZzNZ1WxSno99Yqr1YKxKf2QkQJjrtsfjSUeKdDDND8Nd4jYxi",
  "key5": "4Gg1cCepQ7mq2FrdcrEuDsCNLQJefMGG2rH7hSgnDmSmnmbHYG9uLnthVdoZFXh4wn1r1jRYTWHHmQNnkKZSwsZj",
  "key6": "5YKJ9v79m3PKhmYF9Cw5ZHukGeyM87WbQpgD3XqRHVnLKXZnEF8jdydeq2KZu4G6tFnNeQCrQZbdunPsiY5YCE4z",
  "key7": "48UeZhPvonCyb27DrH8F3GY1q9yufA6nLmd8mY1i9m33sXEXXz7TgRwSgPx83rLi43FrLCdPH7WW5e3sMV42P8it",
  "key8": "3gZDnJ11dvqkK2T9Me98HjC3uMkqcmB1QwWgyquFSDg6KzkNXhk2BfyiUxU95X9pp577q8UHVwDBpXLex4Qh7vjL",
  "key9": "4daB9SYREcD9BJf87QXD3HeZdRiRr9aP9hhDDdtLWEmyxhVpgbyXVbSdpNMk5hw1UXWPX5ySTmgKBEsUyFqCxyV9",
  "key10": "DpmZXmBZTGqJhf8jhTsYr6EMtSFgwJYzH5GrQZbeRgj3J7CDrs3bdeNsxuHYbsLnnyeCcAihTZLD4Y5Xz6NXb1S",
  "key11": "V2qaZyS8cKnzak4rZqEDWQybBEF1XofnWcWdHGkP97HgmLhZZXdyrKKX6X9zqeGBrnLDBP7wF2C38jK2jVzeJEh",
  "key12": "2JkWQgZ3QTzAQYbBwWF6cbMLDsyaw4yipmRNJkYaxqnhcmZppdgJ2M1VQ3k2ZfLLVbP6YRkMEtG8RY7tQq2bSm8W",
  "key13": "3TuuhGFn2SDHRwMguU7K6HFt3HSZofQ7KD8tqpmthrfa9AZd2mPBYxhzMvRJLRiAGR1etDS9mZ7dvP2rsRdA697y",
  "key14": "51d5uDmY9pCriDCf2KASVAst9ejpkFeB7nn1Yw5WB635LiuY9EohFG7DLb5ohp8gbhYvrTSSP7xFrCzQJwmvw1kM",
  "key15": "4XZ9YzbHJcKAB6EuSVeyV8o8Ss9pomUP2jjGBhFUfAi3nbwyWeRwPFYvgZuzDUV8WiwxR11odbizCdq4ddKWQ2aj",
  "key16": "iCwKGvAdgbsz7m8mwQ75CzhTTgWSbqG35kGsqvfZ7K8bMb24p3LRCrFLQ9N8C8vNNnkKQmt57vTKcwkZV89Gowc",
  "key17": "7CrV5obpPKGj8jwW28gjP8hqts2Y8KjUAznPMdTGNLbvqBz5i6uyeFsB3Scjpx4VEfiHJLNZPZSzTrhcYsN7nuF",
  "key18": "3iywiTc9iE4ZGocdhKgX1PshBxdqvAhgXw4iNJTt8Vp3TngWmPK9wvdcwvVpGa7Sfgs85BknBstjA1FTaENEpVpW",
  "key19": "4RuNghrikhgvhzs5hUHU1RvZWxuiZFnFtxYz4kZ8txX51B2iTkGA3X9cJkjKdxofCiPFfJxoEzu4xn6TLfABrTD7",
  "key20": "4VzvXiYiRmeLmR8EUdTaaM9uFZ82kkKnSh9oxJyWGVq1hhmqcBSdzs7huj6dVkQZpyeTMmygoYapccwEMfTSda46",
  "key21": "5KnrjvcaaYXSc7btKXaz8Gj7LzS9afCCMHCchyqsiUcJWiLDzEmzY2osFBxZhPCB3aQXrEY3zd6FPR9qTjudv2Wt",
  "key22": "3VY8xwWrrwgmiuBwFZK4EcVHWBxvmvJPCsQGP4PMWjR1nzekJTEPULt8GwidLskDQNvhkXbtf9dBa2ULo3tJi537",
  "key23": "2jfv4naHf4Ue38EfAvNZ7wyWi9L6SvuYdcajwRZQtWnhvSW2rFoWC1T76UhJMQJYhukTQTGj4ovHv6E1JdQobw96",
  "key24": "4nVmcBvt9HRKLRip6iYfxMttbzeoDCj4Zc5Njga2jRAwLYLXYVNTuFo4U78xTq7GpnJNvqrGzrHxrfaC1QFAJQs8",
  "key25": "2SeyWXRz2QtKZZhubj45Hw3JYgEMQ5WHTjBCrBWoDkENJaoewDmt2MNdzWriYwcpbEBAAUxZbTTvw5GpRjZ9YFMa",
  "key26": "5M9T9oHGpTaM6XHyejagMP82gL3SNg6Z88owKWRcdf1vBFhrLHSjWyfyUo8g2RJi7GzuX3v2paKTNSciiRhoryB",
  "key27": "V3ZimPmL5E4ZuAbMfeMXnYwXMMEtj5cRvYkQbjH4PDV57XtxVHkNj4XTwRtEESkJwh1mDti1wwQzM5EceQbS86e",
  "key28": "3XDD4qjCXME4STUsMjBrvyrVhCLfGJxp9EhkYoxCBJ6GAkg1974qa2KCQRdESGMUyHasgKutuTGWg2zE6ZD3wAeq",
  "key29": "4M23dJ5dLdLSqAYRdmzKDjZMxwGyF28x42bAY8DhrErDcjgaBSNFTi8Xr9hMpvWDAQZQnn1bdufjqJ2VWrNmWkQh",
  "key30": "3GHec1RKLGMzrQeeTbFPMqVeBZqkQ7hfbNaA8gDAK5RB3JGSQs2H8fMZps7Fuooo1RGx9cRTTgd2fmZCotCpxWU3",
  "key31": "49gvENe6iTTxoir9tEwheggECwUXVokzcDhoupc1KJuBuhnvjNUfQWm2q8noJMs5Me8gM5M6tXpXc8HHTpntGwMm",
  "key32": "2oyYTxUGBhCpHBrR9i3EZsNjsrqDPj1QnnheZCDrUZrDuewZYniDJp2K3Ae6JKfC16ZMKcmQ5bTeG8q5nYHQxeLg",
  "key33": "5xyAxVJGmpk8NX1yNZyFakqzcEFo4Ak5B7DKnyFi4WpNd9sGoUUDXyi4MjxMCZTQ5nCMwWTMpFRBwf1Nb5GUEEnM",
  "key34": "2pH2QjC2CfdQU9Awu9tedWFrCCCWCD1Ly1EsQj3xPv6XDJazkLB2rUjAcjdxUySdJKYH29NsMRXHHN3ZX7oiL994",
  "key35": "59QHjmpdtp4F94fov4UjU8skMb1ag5FtqbUmCFKRwJrJyVUT8HLCDBdPGj48shrJ3czUgMFfRCF9YRpnUfuKnV1a"
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
