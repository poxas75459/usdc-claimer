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
    "4nHmJGRvk9nNj28QPz8m5bny8a4YdkQoZ81iQiB8MXMVoxVegg9VkZPBbZdQp1Y2UWhgnrts9sFbHqa48FSSjLwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sXKrJkDJfR4c4qk3MhodEUJFni7oXbLq97jMnRqey32h6cnBCTfwHoGG8LhL3XvpDqx5EyGeSaNJ4tW5hxL3L8k",
  "key1": "3SF8aJ3K5LRK1B44n9xAzsTxzQF6NtRAPtKcryHG7d9svXJck6e1mcxk9iTdKbFou8jAhxMZx7wn86N3yaZFnVFM",
  "key2": "uwHFkZyPUJbs3ofev4Smiep2nb7jk2Qkb1mJXaSbPN3q7f8YFQmBkEJfVmQQMuPwc6fBebG1pVUkjVnuQVPPD4i",
  "key3": "5nAzxFpy8Ex9nZnvt8YZmWhaHFRsPBjdcKfdAHu7pTdZrK1h1ZhFserE5M9Rf4B4svDb2q3VZ4Gdcyf6CEnXofaa",
  "key4": "4NKhSFomqVzYNkrneQnjHfdjjVQgQ7JFaELegP9i6rBd1ECopdJC3ByQRCht8zN67s4My3emZK568Quq1hGNxeW3",
  "key5": "3fXZxNzFUd9Kz6qfpkn3yTFSsd5BM5VsNLnBPdyy9n98S2Viohe2PSJDzKfqJuJKhAbpkz8CCRijQvWuZJ29Q6Kv",
  "key6": "4xsy31C2JMhpurMkiZjDmViaEUxCbatYtJbupNhfLM1X5MVVVk8HvtusGVAaQ9C6W1q8dkD8zBBTiVdx9uqmPJL7",
  "key7": "1saGZimQ4v7A64cW1nqXcsWA7MzVhGroGLAajwgx87NWXZ4YXMCszSxzaLM84f5JhSFCehgQK9MG9TrtzYmBqJD",
  "key8": "2sY6bWw8wXj26pDhbksj74eh8jvEvqgTZAVQ5BbNK1BB5MPh9KcGW5krLLVmtU8xY5oCg2tcCgZhXqqPqVniJDG9",
  "key9": "634Rym3cN53oqrKyb7uyVsujF9RAHsvAD9nfKZNXEAGKuTwuWvNSzdsSCf1JFaw7XnErsai8oHp5jJm3pZSwe4R2",
  "key10": "4iEaBctsXL6gijVVZoniK9gPiWpJDmaSSV8pP81YjFQgDGAcq75PCFaepGTb9bWEFDgLtTG8mYac6K1eLkVTSB2J",
  "key11": "27btiW7Cx4ZWgTgzq8wAkus66Wo7vVMAZL9PexrYXq42YULPCLyyyxkKtFkVnPM2qLVSin7ye2F982NkDSE9muW9",
  "key12": "bfWeoJpwHqqTgADoRYxm8jm5eWk35EBs8DATyGZtc1uY8y9T88idiLQkPmPjy8oa5vsScHjgybCgUep4Cw9nQFS",
  "key13": "2HSAh8uYBm6xRFge5pwbNH6RrZ4ZLamY3ufM8g5NvhvWLBUPTsh2DpLUF59h8K64AFVGSDXet2yn2uX6d1KGSL12",
  "key14": "3Ap5755LWHHxmvENC6tjxiyvDrt1uyUfdp9x2uhKm62ZnnMRjNuaaBAgtzeKPZB1pmw5cj8GmZbGoxtwcYpzy2jm",
  "key15": "54ZZb14r7VS93wNC3nzAXyk4YViotKdCZb1amix2LTYVrVXsAuDVMiYfEhk1CDNsDgFLRBmjE4RKH8brgbh6mQyd",
  "key16": "h8c7RhtjJ6EZUqzRMFvBQM4h4GFLu69Fcb5n6fWovD95P4jz2Hz3xik6i2ZNHe4vN9SDcDAZzJdrVsAxhkxM1o9",
  "key17": "3SLwgy9adNg1RS1RSgmtYf1EMgMtyQELHqwaXC75vJjizFdo9GzsKWRxzEjhv1wWM6QQRxbsvEq1YGMoRa9aj6iL",
  "key18": "FcZxmgaDhywQbZGxDcstfKZn35PyK1uirT4kFtj5hDbiVA633tgc3fdJGT3Nm2KguifNTCQidvXsaK4iuGeD2GY",
  "key19": "3bdPJRnGnXrubWfhYxBB76LneXfJpu6rLXMTBreEdEnRZiT8665tYeyM2k4gy7aqhdEipQpwDMEkQuD6p8E5furN",
  "key20": "21xWgsPQ2ZeEi9cQ3jALHXT7KrvJnGJ7JNYvCeMJxR8BA7pePNVGz2Xx7vjRicuE8gwUVLR85m3QWKu3YH3bW7yn",
  "key21": "2xFPRu2p2nauGDygr1hFb32oZekxJk3yt1BZnjwjCh6uvBVffx2ot3fYShsYqonovnhKjNf3bnKujmePt6w4YUiP",
  "key22": "4jfaG5YPhb8kAfPkhxKKrh5mG2JWpcpPqMuxwhq1QhLsHdqHioNdK2JDRsDVaUR7dCagC7QGZNVkvonfcSpH9BGT",
  "key23": "55FDCKR328NvrWQSyF1YBeDiNxTzvF5dJBqAHiaXrGGKy7iQm5R2x2FTwSpYZYcJLs177h8bEWjjMDxnDki6HQBz",
  "key24": "5GXg6c9ReyTi4WqXuB9RsvwjvXufTWcVsdEVS8VQ23Ar7CGuqXZJqKiuWWySBGKa5n1G6G6wNBhPcoswCobtS1zN",
  "key25": "4esUZWrQaKasmdmJpncJTKDEGsf6WvjNrso6rCfuhMu8JNTBhTyFPi2ZRzTeW1FqDxfS6o8HdV52osv7JNWeV3jC",
  "key26": "5XquLaLoViRg8A3qYs7m9rmsPcApnggK2Ng8T7ExaTpPj9NFDdkUwUf92TYvCPFMCbFoZJJ4VMZsCwGJ4TK6sEu5",
  "key27": "2Gj9uqGMRGLAB2jxij8oj5QKm7wPKYB5qaLYiYeq2xbPcp8QRobUwwuhmSKfyGNDKTfrkUFdPpiaMYbxTm1vR1dS",
  "key28": "5tQxfi3rs73pMNAdj7ydqk2vmNih36VVKKd1mVX1nZkWyuLRWFkkj27wMz9PfYufXshf8C3wEwaGCCe2cD2NDPLE"
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
