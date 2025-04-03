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
    "3TVZsoMqdPscPTsirTR7NVUnfPbcBMVm83SWwGZ3oz9cy3TUBrRPo2AAnqMXLRH3FfW4baCV6xR5vF6UkaFVdCb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kCh5qhctPZQqxvJZwtkicfZe6DBWwu3V5iQQZaR7jjZ9wDfDinCGVq6KLmckPfhXXimWdPB1HFjbPhMY5RHwkb4",
  "key1": "32nFHxghPKJe8TJLFu11VBNMKZXd81TVhRZ63EuuS7bgprFnGXKevVLqHa9gnrs12pbWLBevPLqxUi4avCzEJ2iQ",
  "key2": "5TT91pSzPYkTFu4X5YMEXsKxVrJpKGWr5tMUuHbhQCyFngWQrAfuFvP3P7J2SZdbYVYPWjmrtASwDQWNhQo1KyuJ",
  "key3": "2a8HSiV9WKBwm99eJMiCxKEDE5hsHUG9TPsbfrjhvTvGhQKThgZdmGePcc6Q5jKqL4CiqCa7JtaZnEckjy9ApZJD",
  "key4": "2B73h1rw8aCeTZU9iNao9tq6qjNZVZyubbcE4rHTTzLUgsYf96Hwh2wJ1veAWcqunhvNEobyCaTknKqjVFdErkuu",
  "key5": "3xbFfimUdjVP5DFXBtDSHcfGD16wAUXwgZTtbofLj5w6utseJTCoJFgjrivD2iJq1K9SYi1ojC1kMVhEPKa7Uowy",
  "key6": "5NeQM2h4LfmSqDMDw9K8xkswRQnVG7kXZoW9nQySdAGfnBHeEtfYNajuz8kraLeyVQo7aBTxXrqgMXUpsH2Z9xuz",
  "key7": "2w8Bmpjj86Ufjhs8DYRFUJ9DV44hHLdERyE8BpN7Xw6YF6LhMe3tq5kTRPRDV5DNuToT38kYys7d3Xj6VmR4tK5e",
  "key8": "4nCgjDtuFcnrwaQb4ddaFQXkZ8YbxN2naVvSxXrH989rSdUX3eBYSjjqr7hukdBZuMrGUms1C5GixWRQFPMz7uU2",
  "key9": "27833egBtPb5qxgdMPiBybo98RNyc5BGDhN8pzXpH2kVpyrfUCVRYog3aqvSytNSfvyHajFDSAUUumY6UfLds2kp",
  "key10": "5V9L8xwqpGfUtbRRHcMdDHPRgEYvNW3FDSASUcZRxvpU771HS9stoq5C817maphLegH3JqRqyqARM7T4v4zSaWcw",
  "key11": "5wuJDw5MRo9ZSeHCiogGTqhNEgiZV68gwUyvX9PFqyTWJLfJgbtyXHxDNcSGE7aUk51iZLBhjWn8tzCKjfLwTy1f",
  "key12": "4XbFzWhg3TxNv1ikQuHtQ17AaBCmpu39DFiS66afWZQqu7PfChZvkajcvnWNWWwGBUbkFFcpKNTntwKrccvx1Zgt",
  "key13": "2LmzckfAgH4bFWj4YtukNBtbGrvfq74xZfDH9BT8ZRx233BSQ1PjW9TXc4a9wD7dDzpMvTQYBoKJcMLAFapoKXJb",
  "key14": "2FDJhNLNim2CxKvCBtLmiWU2SQQ7ag6ckUgwHB4q9923oiaTq4PPZcJJqyjSpYZ5DhVJVatyxXRELHUn7K4iAshx",
  "key15": "3dsCqHCgXTwVwT18r19TksBXcRoiX5va9JLmBsVnUQYdGh4NE1nBsdsaNvLcJ5F8rSwEyE7kx1dN2bTEjh6DbZZ2",
  "key16": "4UVASuofA5TkUovtGnzjRMmjuuemv9wdYS7q5dC6DzfQLjhBnezzRKvU8bS1k6FWEW1EjszUDLs6Eb3kfj6q8ZhC",
  "key17": "2KcLcZzWb8X7sTQnXUFnEeZHxdqsTdKP6zCag8Wp7KHYBDVffZCeVuLpBkK4ENMTZixj4PWW1bwwekDmXdmw5AZ7",
  "key18": "2uqSaGCKrAPTLq5TgYm7Ey67yH6r9Gu7yDQLNz4jiPmXBHRnm1zCWFWvQtjS2xph93MpRQwLUaNe4HhfXAhpjPmK",
  "key19": "2szfSgFcMGJKv2vFAvL9mbcUqCuoqyAMsXU8qjdHxewxv9SwgEsofxGkGMCSrbrSxNJLLaq1PA86veefWUVGeZfa",
  "key20": "4S23UZ8QsN2KssFt4WdEotp4R6RRGTft19TXSkCzoa48VTa9F5UPCWh8qW7thQwW2X3DqeEEue8K28wAwfM5qXWY",
  "key21": "5Jmb64ZepSiHuvSyH12kEMKuz9x16Y3dKHpd2PAGdeSLYJyNuihh6AtaqJ3kpvmbxMnAFo3jgG2hK95UPJSwRf1P",
  "key22": "UwR69Ss2DNEoXMPd2Z5LSYZXpcKAckRFAFVZv7PBojWV1FVBkaQ1LvAaPs7gkz5yBnSSBPwZ1UK6V2g9FLNab5C",
  "key23": "2BvFryhtrULFHDkufjug6sVna6ZQqg4X7wwRGtEMrWYuFAFjRrN5LmyAKCVQaqadqsN7wAcyPL2dAxkc5t8qiDbb",
  "key24": "56miE32X99HucY63WVsMebt72BSCjBbzSMBcoRCiHuQRBYeQJmZaM2hCBxyrMuhFUk5BiPPWPaTPKWsCCMLaRtnE",
  "key25": "29myK9bS4qAjctud7P5cp9QbWPjs3RwqFPbH44dHAmSRysnhsbkg3Wr88h2mVaM8kqjU4QknuG48aN2CqMhdoFYi",
  "key26": "5dmVEvfHKmghWCDCm41VLTaDcn2tGFoynBi7rhQHYt3tE2TZ6TFLS5JBAqvjU25S6TJycrPdWb2xCfLo1uumVAq4",
  "key27": "4A5o5Bky8hvXJRWenvbnanGp2fRWSG9ZxXVRsFis4MWtbjfpBDmuWdJUzKuWbXmaecgt4HfdKts2EkPiawYgUUU5",
  "key28": "4F5MLdshyop4VuHWjxvcZdp7gaqnee7sY3fTV2YYygi5cpGAZsqc4MTGJ3vbuUfyp8frHbSkrVjuE31g1zjKQuzp",
  "key29": "i9aWm946SXKpsQzrZr6fZsBoaduC12K1RZ3ZUR2zCkzcn34WTP4KnToNCKyPwQLyBq9NyyKgntbRPewMZAtTY6Y",
  "key30": "4TYgCdEzfRpjeNiY6khoVHPiCHLvgtepb7WdYYPHYFVEP5kjniXsTo99WbbA8CdpofEw7pe6LtDPHfAZbvXhkxQQ",
  "key31": "2UUhFyHQW6qnsy9n3XF5EA4iXPezcm3nrU79xyUmJ8UxjBKmjERCYZ2Yx6Vc4xmAKACChaydPBdW5LRPcdtS3Myk",
  "key32": "2aMknr46bgW9YuF7aSRcKmUmKELWEXG4B5XbRebH3VLafhLgWyLtUtaqiMZhU9BCTfDG1KamH4X17r2XKt1Jo4uP",
  "key33": "3bqh4JXNy7BF4Hi9Q4vRXcR4H4wkXHXDrpeXyGpVF7uBrGbdP7eUJ3c7BYimAPknwbp6TSYyLdvo2sJYnxY2ywTJ",
  "key34": "STwwVkMwfMEjdp44Tyh3uScbjbpiBRHgrbZBCNuyXg3znp9WAHvKwUUyoqvP76sJEpuaTcKhJa89uL6mfvGmEHQ",
  "key35": "2mRqcjtBBwGDKwzxzx1jb8JEjGJ7t9YuAfNuYTkW3ag6Gy49X21XEhKj6wWXvk7Z71vAk3ZLHVqjadWDLuysPcGj",
  "key36": "2wuYWKfErjqLWzuah6yK7WADjzdyBp2LVP55q2TfWcThpWdhKotb1sirYYcTxoRLoxtYDpRSH8J7KqTGEg8mhVcR",
  "key37": "2YC7kDeYdHkhHNUNJnKSmnex4T3fQYcpdkwhcR4abeQHuQgF952z8dLDdFFzgcnRyNdoYs6yd8FJDT994GjjvUcc",
  "key38": "4JD5UCvSKAXSnFaiztmpfMN4gzLXghBCqL3jG2CvBCr2F9Eit7F28kCjYeLgbNzGEB2zpTMsueymh2jKfsJzQqYt",
  "key39": "4VDQnnfeuNswxah77X46FYdehK3qfHmh5NPQz646c5nYjAgqvThbwj2okYFwCTTSFaMJ4VN5CvxZMxbn8qD4VLRF",
  "key40": "C29cae3fMXhtQECkzCc7ReQQz2UurZkPDtwAQf3Bt2Fp82Rq6Lndc6RwwDTs1NDSjo3dB9iqkvDhhffaXWBMStM",
  "key41": "3EMdLPT2mpgDD5skmcL6cnwPLZNXngoBnjhbr5GCSeGeaGHhtGkonNvUXdXkUEmtLC62s8QoQPKA6vAMyxoYEdsS",
  "key42": "4NGs5yUMeJRF5b7suv67qn3SxH5wuH1EQCEKateJxoZcBPgJwJ9bprZ7PURajNH38xjT5kQBNJD6CMkaMEKUBTCU",
  "key43": "3CoLdnuj5sVWqH7xjiQLwgtTgUKzTnBdpbjs8txm15pbg88FygnaKj53YYoCa7XuzK8X6Ms5Cef3roiugZTr8AvU",
  "key44": "TJNkJuCWdUh81NnY8mXez2eaNqpq6VPAvNocaL5AKQ3a8mwPvWvpXu7MHxFrMAppXDDPDDysXzAr6oxjoxEL1Wx",
  "key45": "669VtexGk1DFNEe6sgQBWyhbEwuQ5YMHndm9h6A8soS1H2rtBJfZHH6FSrpb2XqaG1GG9i93gBnVqs5weixvhmsm",
  "key46": "5MB4aGeE4sP86cVpCJGHZJZEuoEAvPSekr6KtYNF6yfwj22fJmAEjUqbGD9kwzEqVMJWTzrFhtAadZFqaDghdgoe",
  "key47": "c3rjAB7pMGdTYuqg4SVoNhdZ9FXoxdo3RTE94ndD5V1pQydHgkH569XuUa9a4LPS4DGeRouSLTG5v8Yu8ntEq4H",
  "key48": "42hrCoiJER4MAGAXnjxifTznEa2sZGD6MLe9jjwjXei3nCXfpJ1NAkK1mJ4AwEvJmZtbrtsjvcPYeWG8ggnj4qdu",
  "key49": "5PmaFPj7Q4qS55Ju5iVyoUcERyTUPtHDgNMKAtxwrqanRWEFqqC8Kv4xen27MHBRjXZxFYJjPYG5SqBkMiaB7y3f"
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
