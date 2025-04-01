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
    "hd4zMdGKjXiT3ckDTdriGG2UhPhK7TiXjS5PqacMCQJVXgdfX7UYuqs1xQsAyL6LNUq7nvQaWPw6xFybkfrRVe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uaWA9jU4TTNkdDYj4kGMKZL9zqKKsV1kU9wm47ymKKcMi2YsBWR8v9gEWpmUYVeFTJGvF6tyRzuX8rn6q49zeA3",
  "key1": "2fDxxfBkubvk6TeUYvULgwGnj1E7GLkV8w4e61e9ktEMMErVBazRbyNJweGXfvx9FTHwfF2XWy8xGWbNU1PSoraw",
  "key2": "5symZj5ChGYfmgVJGz1vhCE8tVdQeG1wt15n4kf39FPdqGN8mK5bSQE3WgRYRXQg5nrv7P6yEdcLg281ZBXzeMZA",
  "key3": "4g8ABUWKAM3hMZJZ6d3g95cUNkXTuXYSUQvVN58AGCnsafaS8bZWn434b4tP72GEmtXPTyUW3ryAp1cMBXAVA5xC",
  "key4": "64inrNuoFnHMaTw27c1qtYWocXwNEjgXu2ENziw8YV4YGh2XE9NR1ZEGaeEogKT8WKVhgKLtea1pXwR43RVpRfkT",
  "key5": "2kcMN35jeFZDjWkdFVBVW4zfTUpSBKaJ5MSDdfLbnwWxZbLgChRhxAhQP8cgewVJmNZ47CVACEmN1WpzGRFTyr2D",
  "key6": "48Z1QhzKrYUyZD3Q3sY3nuKfd88JBUaqGqRH6PTVeAK7nhu19kKYocKgo51ZDjhUNjhQdSURJdLfy5Zpa5wxE6Yh",
  "key7": "SfAJGnR12YXfbKmFdRLAFTzD71wHvndb7NJfWMNYHxKjDWCmFtKCpAseJPbYY8WjVKbkzjGe3B2kt3BTUCxWind",
  "key8": "4NpajakrQAeqVVtp1ieGbKgF5FT4SDtt6iRjGTkpGzBQbLHg2AT3KJkPnsKCc1LbteQ6Tdtccxi9QPpDrvvocasj",
  "key9": "4gwLx6yvSjGTXCjigAWUGeTThC14nbpMHCTq4ETMrEWLmzxbQ9aXoV6D2iSxs7ZvSZa8mD7M6dMBK5mCMrtD1xMA",
  "key10": "GVCrRa38VpCyXFC5rYJ2xMqxfHFrKmsBpFNeJTzAofcUHjfMr52Fue3nNCy7cbaD8GiqFeR5tLtFhUruUdrkW91",
  "key11": "5EKgrgJ1P5mWjUZWzw55sT7jUfHkqorga2rdt8g1m687ZQKbJWJ4kCpdFuxbB1RaxRfXDRbLhsX1r1rPWyVa2rve",
  "key12": "3hdKN4RT6eqVDyrAxfv71gRMWvGeKc98vU242Jih2nevos9KHaHtpWD58nqAQCFckeJhE6RaZbWV76UsxXCUbK87",
  "key13": "2Jm8QJGetdRq1iJyp61jUVrfxrHW6kGaG4gzSNV114DC45YhFRgAVciD1pDYoHnkZLh9vKzm8qQewmGxL1tg3DjS",
  "key14": "6UK2kmKzYHD17UuGxMTXjXwttzQwz2k479SRGhb3MU3x28wnPXis6kQ8i8A8mcK8g8rN1DF7Pd4xdZvEqMHV75v",
  "key15": "2G6foG3jThEkJRx2M3M7DRz1W83AmEhJbPEQPfno2QmioqpyorHRjJtrGvsbjo7thz4CMBZHt2mXWGUE7ZB8F35e",
  "key16": "v2nUiL6ALn7v4bw8GkxLkoVbafZdBGRvaBS3ViTvChNYNPuquJxn41NeGjysdE5Zwf2zt5TWRQnozkc5nhP1uci",
  "key17": "2x6LPtZZkyD8GyHW1B73PxS9Y8jCfkZMnHV8NP7hMPc3xRnNbv6q7JCRykWBK3Qzx2aNaV5xCZ2r53V99XfF7Wo3",
  "key18": "gALZk295ox7cW5JEQHfqqX1JQG7u96TvNxJm919xhNxYjQKXZo6S8vu3JYobEbqphf45FuKTxPYZMCSxCHipCnV",
  "key19": "5pCS8ikHFSAqUUXggqkcSuQGH5hd2FXcLXp5XKTAcRVVey97X1r3ad2H5HHNBNDUbCKAkKBGEdrNAvMsCAnRJuqA",
  "key20": "2ju7t8cbd99ZTe9cn3dP2p9DLHmRByhPs8wnGJKzy6usqtMHskbJnWw5hpf5ihNBQ4FPy1ytSdCvZYih4Z2wqXmb",
  "key21": "23H1TjiwR2jAJ8J6J4R4GUYBrnkJ4ZZoQ85YMYDjk3XA244DPvF8EBj8MKco9bwfSSiy3bGj5M2DpLa5yuiRTDR8",
  "key22": "4SqNFAZvdJ1NBmxvGeE51BHob51iPdd3MhMnYWyTun8E7cQeRS7TLbjtj6TWAx4YYiiMhxSZfKBpmu7dWniXWqz8",
  "key23": "4rYdeSwZCx3tBN1ARGmfsmaXKxHNFpzd2EeHThzt6eEAYoCdbXBwrYQw7feCH8HvgFb7ZJbTcC2WwuuNom9Rtsbm",
  "key24": "5hckDpmMhUpsKGSrtHjRqiXcuegThcnRRFPADssXctWRvtwepazdYgGzfyviBm3LhJz4S2LESKnVAB7cwkjvTyzC",
  "key25": "3kathwfUT9jn3QRLV47kGTciHoYmEMnzHGT3KcFtLeTzQr9TUnV71JVv9p3gq8ikqRGLkr92DAUDrGqcy4beTaWw",
  "key26": "3kqqhtwASKuG1QMoN9A2M2zgVGRALdMxMuMp1baP1pRToGumCDFeZy4xumSJB9LpvAfjDZZAWQzxWNG6mZ35vk63",
  "key27": "67AFu98WCJNfv6Y5jxCTESDvC5sx3zmsLymuu8WWrka5nmLXBYSUyXGLQTJQSZxjorcjwJoymQtCvL3Z6GFgtx6z",
  "key28": "3aWz5nvnQGhgF6GXc2c33Lq4oMHZRLRD1NdV3QqG5FyYu4DxCvu7vE9wQpUrHbieD5NTDZ6gjf8XFTT3R7fNYJpX",
  "key29": "4kgJmKhFk2oUoJg9oEXSyA9miTg1uoYgtXe1zp7Mx5Xz2GLgumB632rn4rWCndM7eVGS4VbrNrXEZfKcRzetVyMx",
  "key30": "3pgmBqpyBbQeVmaie5qG3EmLpEUhdu2BivJ6Aunpjz6eZNBDZpbjxbztx5hQrthd4F4KnZJNy9wkQpR1USUqBJD8",
  "key31": "38sPRHjYhDNtDgQqe5yUzYfTKbDAGNRRkKQ8AEAH4CgCN3kmCdW81E1qfAf5k7j2XQj91yrNi5qEXkdDQSGazfcX",
  "key32": "5B6uRtcgD5u3NkHjAvUA5KTF2XWKAgHx54WgwZQLLHDAihD1XuHK4ZgsLSRGQnpTpRDGj6tqAzSd6sGnsCFTVvAa"
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
