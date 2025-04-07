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
    "3m2LBoCfPuYNhg5MsjbfRywLSLR46LiWvCfE7q8UHBtbZUTFTr4EWg8NYDXzuuqmJzmfXg28ChQqQsjX7SWzZcmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CCPy3wkwk5G2KdBNcq4ugxiambhZwQnxMkum733DmyfdDbja3fSkbQ6VqxVCcanEiQzRcYCQqmEAy1ebAzdxNt",
  "key1": "NLHN7CiMXdsaRhfyHH4XiHPkVxiJAp7G2JgKKv71DczanM1fVdG9Ed5vA5UbZafsrkPpByN7DbVu71tFrF78XQw",
  "key2": "2Czs7UzhRj734LUcrb1CmL9gMHJ1zGe6Eozk2qVvojAZ7pKqSKgnHBrEmEEFwqn5bhptoj4g8hrsNayyVGfbwYdn",
  "key3": "67eFfdM1t7sXcJWKpA1tmhMr4yzffTv4PW4pB3fopisBk8mgWLM5h9DK87pwjAhJLKVt3bYrbiQ6syR46txcdcD",
  "key4": "2uT4R5e456H7fdtVyKJnGxvZuDpa9Ehd5wzCYK72A4nepnYdsYYqMMFMuSktwvdnzAMsHZ7mFtsipM8fPAhtpqTP",
  "key5": "65xSTEkubq93jSunpua9DtvHHZPCyHXQ85YkVQnSotjAHkHZRzQW7ffTmMCPDUb9USKFD3bVCjSuJ5NeLrL4BHp7",
  "key6": "2Z1DQGrxPsvpkPtTP37jz8y6CgVhdpNBjtWBHsZdvBTRnRsAs83HFNWSE2Rq146NKRQJurRY9dBCH9h5gQZQP3Rz",
  "key7": "3oWh7oUMGGVLTXotxxiCnDnzUSM1W9S22YPsPDGDAkvyYWGfogmG7MhoyeSVTgKAMvj3pMvqqTmHDtqEXWZMxrc3",
  "key8": "2UWwhdQ261PYXkVdQutDn4C2CyJGo1k3XmwAZMfqVaZzUrAKD3okG3pWV72t66VtqDa5JTeFwYFgemY2bd4ajxCu",
  "key9": "hmWBHp5PqQ7w5riMrJnoBQFjVMyM54G4Xm4o85Tuu2LdT7KuxswWXKeZJYaowJAKEGBVnke7McEqTUdNHLBmrmQ",
  "key10": "3kQaagxwQ5RE4DLp2yJLEg2ffQyuh7jfS9qC8qCEeedjiQtWTjvP48xVTmin8trCLEZq7W8Gaq494cyKx6LYTcGs",
  "key11": "2AG4zzx9Q7mLSPHjhvyFzfZcPY1UxE5ShT3N66RcSN1zq4YiyWvi1y1r3pHqNpvwN3a3eJw7yS4zWA4dDTK8LTwv",
  "key12": "3KYvX8FpV9HZKUW6xNGsFjYHVFpxy9kJVP8LBCAeTEhiqGEr5rDHBMrBNXiktx63sx3bEJPqMgsia48dhCGRujdJ",
  "key13": "56dbDAKbihM5s6k5X5sDoWi16hE5gj2GWFzTZmAVE58zUAotwmG7viDJ8k6HBh8YM7JuE7szX7ah1vK4whswWvhJ",
  "key14": "5w8keo3zVspncuYj87icphYWUf5Czqk4W5QUM5bEw2Zk5qJqg6cwvLSEXsW6g19m8LiqukPGw5PnPzBnA5Pw5deB",
  "key15": "2C2mc6616fgacHKCyGP2eD47xU2nKajbvuggea8esyTaCraBh3Z4G8tZEZ9gDVvLQVRXMeHHWSSuMZ5Rnge3kVX",
  "key16": "4F3UZpCcr9BqviBRb4CkenaSjAT4BQCofuFCnHPFiZCH26KYDctDJmMs4McCVTHHhSu89pVjffBvkjPU8hQRxw6w",
  "key17": "2zw27GSHDaAhtYmxfY32VLGbS2nfh2SynbZDw6ZFuYUNBEChsWcxmVn7FcoDsBQNXY3eYacjVhSmNd2rM4thGsEr",
  "key18": "3boJ1WZjftoRzcTXkTvnSiuvUzCYRU3SHi825p6rrfvY5LW8pSZ7s44KMTzQ4mq21DmUWbabPFAHmn4NsC4t3MPy",
  "key19": "3ScbN4KsFkEKvtNw8kNrHrjVGpKgCr5uwrhj81dgEiG9QWGNqwv2n8ZN7W5VGA3vLNGHAHfgs1ZE9wuBXn6A22Zb",
  "key20": "3xfiX7qP1feXDkUv9eDp9bWk86RmABKe37E4CfTSTF8FyPyboMd9AifTuUpVcLE3p2JedguRaWvuDm6sFGNoKpuu",
  "key21": "2xPYB6Mczb729EMHoPKqrVG6TLjRawaVQG7NXgitWjsZsKJ3EWiCXqjDuZhRBqM235mto5D8ZaTp613aRWQBM46h",
  "key22": "2fqGTmbm8bKghzFgso6QUyxwZzUHFb6eQgxTywknrUDDjiA2WRZTztJ2ZYUtkcZ7BohGS5jbrNdwA9qDPHkinELj",
  "key23": "dMPvmyamsJWxKUKMHtGbeNkbyVTFWeB8DatozCVBJdoA8HB4rVk4qSVK2nWgNW3z1bTw48HrFYG6e4PUes7zRSH",
  "key24": "49WuAgYo2poGhYSPbYQ1bKLYSD8orM5bnpdxLjyScKL5jBmW9S8jcHXP7L7sYFHNyjLYCLuB1HUDJXwvmx8mdg4n",
  "key25": "28sy5nLdZjwQi1Bum8LJi3TNFG8LfBgpMJnXXtHvkD8Vq9ksnCzH5XaDN9zzhWMnAi4k9J25mogQ9FhnJU7j3j8N",
  "key26": "H1pg6jcxSjxnNZCa9DG6Z5JfXkqkSavfHdiwi6jRAsVABiH1AjeR8m3u3LA6sTDrrJeEeV3i4KcBLjKS7Ss4gES",
  "key27": "hCp84ewiGRCKwYrhMZ5Dt28XVyGYP26eCNrjjujT4FDVgYomzaPzcmEdyM9jvpCrAv67xiMEVDBMv5HZ3FdYPW1",
  "key28": "5WWZfcb7QofKVDTT6QVQUnPNhKAKMfyBaxsUcjdUCDhXTxYsocdq1NqvryqMR1hBpSmDgHmYNZtnysNcCB9ykmtj",
  "key29": "3kQjy3QFSS5zRp8aZwmqBRUVSSKf9burq4kzN7Nw2aAX64pVzPUBz9fxCXxtkrV2ZkrbeG4uwVqYgznhndjPkZHi",
  "key30": "2ZAcNRTveysuTEtLoJyh3To4GZroYMPW8V9PZFT6tSST6N75hobAjy4f7K9tYgkG6EinKegn47Yft8rVNrFeebH7",
  "key31": "UMZd2GQqxpGoNWxcajvm46A1TrygXoDZscta1khQg8FDifCuTXLJnyfBrVC6AJPdVozkm7MnT2YMkaLgnePLE6V",
  "key32": "4UDB7VgqC6pZGybqczCHW2vjF3g7P9w1dXd8cWYhpG89sEcQfKL6u56k522ggud6Ma459LW9WsgDpU8Bj9XyFcFB",
  "key33": "2hiFz8WmBMKYEwDbF2UR7W6rETAP13DH6EasGFgZYGWxydsH2Rs1Xw2kRkbkZ1j5tuRPNB8rFXQdQw22yF7Ay2gm",
  "key34": "2ovC3gEt9oXjjtQRWRRcpnY2NcKjQKWLMuRfvdZx74RH8tFpzf8QK8c1uiLx4CpvY8AaMH67vFHaagGR68YU4Biv",
  "key35": "57MAtj4R98pzajkCXvNDtmkPJq5x1M2sQKQEtAup6WFTv9ULv71fJUyZQ64yw1P5LAcgud4jBnadmyijKAkKgfb1",
  "key36": "dheDHhbJW6pyugsXxwiVZEEYfaobYuNQeRkcpgii9aCASZebZegADFsReHnfnhz5thndd8m37abcFaZaQRqMQKT",
  "key37": "2KtoGe81cNVPp1KinAUTvNpZvt26tLiPRgHTj9WpXMpyh2b71NgHt5yCx5xQQJb6Z37YshAfXAyHs47vygM5heFE"
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
