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
    "5FhwhRxrRogTtQ8ySbAwVqwAzCkAkBfN3VXXvj5GTahPYj6n1HTu24k5GmLe7uFTjGgLeP9FFMT4XTf6kPDu2U4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rb9Gjh5gAApF1LL2LtzQuk7gTLqemvCXbvQQJ9hndpvZgNAEfa8zhtEu4S6G6f7GfedHGHQebznRpTtrh7dq4eH",
  "key1": "65PHzDGKpoCACG1R9AXu2j1GdqZLLqMaga3XGsacLzr4cKWmFZfKbzYKvdSaAhUL4LdvBZ6fYc4TrrfgmKadUjqb",
  "key2": "4VmnvZtcEeS7vDwjac4R9uhBk6pNCZEJ4Gna6XyrtxaWQmTdnGAeFqbTeEN61Y1r2yxjmwHHTWi19iyJAuoir9kF",
  "key3": "4W4sDTiUYh1XYxmqxvEsSy4aktsXU3GPECuQ4egsMQYViytjAfgdKwp1z8uDDeFv5N8E4NmP4Hzm5vaW1HkgfLJp",
  "key4": "TDW4Gu5qT31Nna3Eqcc4mPdKPHN776ezta61ArfmodPd4pvPpVWZr7BTuuPnLXkzhoFSvoPZcZ8XvUH1E7UHaiV",
  "key5": "5T9nGfEtLNKKXs9nauBqod99oJvLA4aiVEQkpoUtXcebMgH3bWGVuy1xjwvrTEguJ6WyxCFaQdeF7y32aYVP6q17",
  "key6": "vrppDmn73KSSpCcSHbkgyAbnY2n5CDZB6PohPQxwFXDEtKthAz9PMzdLSHZ2A5JwAagmNsbWgoQbGHY9jotE4Y3",
  "key7": "5NnzL86yoCnqs9tB2spehTdv4y8EzajGS9JsQ8uLwfvoX2WeU9CxyMjyYLRcbuvESi5rBhsG9pNvRr8DLhyF5nSe",
  "key8": "2oLQMS9YNufmGNWPyhdJtJ3GKdaaG8QT47v4wr9MsycQJGCbk5bhME6pntV5niPnnz9AtFHnUTBpaAgihdCEamy2",
  "key9": "2EisXvAiEUNMLAEhDUiDU7WCaaSK5MYNjRogXiMx2QeiaeC9LQyWTfwXEMWBG5X4wMkZ16RSxMWQoef5mBL3iJ9c",
  "key10": "26mCTgwjbrYPDkmTGwnLthwaG1F86nC1gq6YsUxscTTRHSZXr2oH35QMrEb6wDLFsRYNWQyb1RKr1BJTBAABo4wb",
  "key11": "4829gy6sC1ZSzgNJf1VdzgAdR5JEYm5NBQuxQDtcd7Aus1phMmBGEcqwHhVXTD4sipZTzNUaCTHMMTP6GPLPobgS",
  "key12": "3MqRbFTXQWZnJQ3rcgj7ZkurjjRzjcBn4FAufHM58PpoQwawRkoT9ha8HDtZZZYu1m8RztRGB9Kgtdf2Ct1gUoKN",
  "key13": "5hNbRRdCaCSHiwNTNGVLqviBPSUZofsKe73hXPBquBjrQiAmc6hSpQqoEE8JwLyvGn4JaXiU7HW33ADhuXxMTqnk",
  "key14": "YRDdktJXuFmqoUzF3XXsP9q4APTGKdoY1nPYHU6VDjK7dW2f385ZV2L9BWMPj4GzbCFZbJpc9JbtcHKCFaf1QYU",
  "key15": "5P8VSFxphP1v1TqpSNoBG5yb5B5yWS85zGZ4gvsCP7E25gtVRu7QoYKZL3CDCCX8jEVns5ZxsmyEGxgk5aNcamDo",
  "key16": "5iM8KDRmNxNPqVby2udr2VutjZpUzu1HhP7fHXuh67ZLPoyr2rW39GDaNfn6ay9qyaLMvMtGiWnA4RZ3f1u3KnPe",
  "key17": "2omV7A32qkQDbngDNRh25UDgfHX8R2Y7UdH2SMZQyQdxCbSQZTwX6rX1XJ1oNNtWDnj6pSEAcEZuUBJKZ7CExJiN",
  "key18": "5f1t6Guk15BVPyRiqkDiaFNBkmYjXrqjmTotpPuuvvMFDNWVgKn5w4tMrh98Bsbinz7XNJKwwF1ZfxCbTwaWBGju",
  "key19": "2N3TjB5vYnF6MY2xKb9AzVk2dbCcobRZTxVSQNBqyxDj3y6hHX2Jx1DKphCVLvHXRpDyqFbQbXrkHtDn3njhCYDP",
  "key20": "4bhaFWn8JFhrUMvrpr3DPAvch5L4FsPE1Uubo4H3kyo6pGrXubc73LeeeAXYxAuAN5Kzp91E9KW6L78uPftKmv4D",
  "key21": "5ims2SJ5H58V5hZbjqqQ5AkzBEDmJNrmjmM682YgcgbuSY452xQSmqdAiaDEf7ok1UhJBYV9GyX4vsmJ9TqNWdxS",
  "key22": "5tAT1wie5yw7u8Muz8BttSsDQW2dXDdzD9ESvqSiebn8nMSWrJvehbAnB55KF7Lvg63JbGvT2GiSoQ1c5GubH8dt",
  "key23": "3CVeru2rNYwPxR37j7smfw34zAPpBPt5DEi3TDouVBPTViXB8cDMSmfbD4Nu9vQ8YLGKVqjVXaLosHrfPJJRqTBa",
  "key24": "127hERmhAaxQczf5pEYpiCJqCsFy6cM1G2UJMDcNbTmn8iJAP7MZYmAmWR637GbFe6ppZLYn7rCQhmEmotM9Uk7R",
  "key25": "5TfrWgVoVeBwjd64q2Kicp14U18d6ZB9nrN8ntkBS6sdyJ1paxSWkNNsySv65yvTD38CBSmGqTbp84t2xTCzjgxd",
  "key26": "4tWfuUypF6qUt1aCH9tGXrmKFdsdc4sB2bLXUv9R8MndUoooBM93fTynfMBoWXXUbi6EqhQK1Dou8Xx92BwAeG3F",
  "key27": "4VnkrGBdZQoDcnEU2YUK4EtpgbkGN4JidFDxXGLbYfhFcD44qW59MFPLT8bm7euLybNhuJ5NsterGJihfzsuLfqQ",
  "key28": "xtGhLKSbbKHLq9XpQ6fxbMN967YtzWdAJefaKzJPwJFL13zHmkafNwoTEjCXnTgDBnF3kbhDzrDJFQxHRZqTSgW",
  "key29": "4GDP54uWgw5sb8zpD28cKLfZLueveUGKLRgvtwqWwzi7k7smvLmT1z7vU7pc4GPudqBQagqkFYpixgsLYtMrkUsc",
  "key30": "5GEGGRz7rQcXp6DsuwQ4ACW7MizL77ounVMAZb7jQMoh7pGN64Ywb79nW9PXQ6Zouq2nHcShuYppmENTQPuyqqrv",
  "key31": "49DysYSumDrmL7Jr2bHeZmRGKq6PTPyeJ8AHohqnASfGK1Nif4g63eShx5f16KRc1TyMkoskyDEUu47S6v8p2KmC",
  "key32": "agJf7cCU138m7MFBkZgw4dRrhufShdgLX4Vh2kE3MyBzHwrCYBH596zPrA25uhYkD55iB9gH3PqN981AAtMFExY",
  "key33": "osizGgtVLhPiKoNvjAknjyUbVzWX6wydFEa8RQzNgR2oGKWpdhAaLVf7d6EFc1vBE5wwad8n5pbZjgxoLi7rCvD",
  "key34": "4gqqSuU6zdTLPF45yhQg1RZTB7NdSQD5FCRu3gs3zAofFzzqANZDmyBqS99sHzS8B9tmYcZnuuD4L2aUF5pjWamD",
  "key35": "2BSRaHLE4wDGZNQccvphAR43KuM9AarD5ZTGfnFKkthTTewLidMdL2qeTomN24tAk4fg5Yn6BKTBo5Ggmw5BnJkW",
  "key36": "2MR22vTtNiUS5eLd4ArZ9nhwYUDjMCiMZeaA24AYdqqLucG5wjVXichKbAwa52DmEqwVtbhVqgNQ2CfSoLPc1E9R",
  "key37": "4Ffmat54rCPQq3dZeArJBHfMSxHahXrvJLjk5ArtjkGYaGVNVxm2Wf4JPERarxuXk54GM7bfGUMkxJqcwLAgeh2y"
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
