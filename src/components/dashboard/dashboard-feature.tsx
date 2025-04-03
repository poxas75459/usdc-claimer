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
    "36ZMnMiSaWponJxoXokoz3a92uVBN4Ym43ZSsRfcuwgsRRRPEpJjabW2FKmKqVi5siZx8nnNbw4R5kE6AQB2zTna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2svtk62LoATNFEUxQYzY76arxsVgcbyaR3rHrsEm3zWTds9pUvYGTtFXyCn2crq7UNFwm3SU4PFruyuse4pTEJ8c",
  "key1": "44oSWR6ZELGMEwcjL5ZsG4Y91bSYHJdupe4rMmThtgiJRbJgfFrzENALZStZLBvVwNFFD5yFHVSJkcmkRsHjwTKL",
  "key2": "WJVyhtAoEPLNZ6S4YWva42EhGSX2h6aifBD31pgW6y5jfqYoaGQDo8iZdZvfyMugubdfT2Yj4s6AeJaN9Xfgvny",
  "key3": "5VmRhyaTdbDArg79pVwdwnEdkbumYSik8ZgPSunJ2sK7brvumbQMaSvR2aP6DZr656JDBjg27Yv17ToHkd2XVPML",
  "key4": "53oLH1RZDguDsrapeCGLVz7kdmxeyh9PFtHPgm2mi9WiWC9haDez8ur5WdE824WFJ3XwSGsXmbrxhDiV51HnAXbV",
  "key5": "4ZBJqz2jJwivUiVYFbwJMCBkP9a2zWt1FtNYFnwhnDMyDCaQSs7imjXMARd6pQGkWW886HWKdYDmmCH5RhUKF1rx",
  "key6": "4i3QnsHeeDQ4DHtXhj7dFBvBcB8rtzt41tVbswWhcTS65XhTY3ka6duzhFRtGBmALn5TPEjTNQTMyCq9Sbzu34qv",
  "key7": "39Qh6KJ1rdejpr7i4KCdaVG5WnBMiGEtvR2ECdeHwyxFXMNzHAMWc8TSk4pfJiHE5fKXVrArQDeRUtp8FjevQDYC",
  "key8": "31rrrqnZpJop7NPAivGzjowHwNyZtkpvw68gVVyMHBiSX9WnWwCrtWimdgZRV7jhDYe6t6f9EhpFyUHDxfQyyarP",
  "key9": "41GKo2n8jog2subuRvWndNhFuxLrv7rvJhpBSrPzU8gMww32kK64ti8ijHHizjgzVeGaZiHybJjUNvDdu8ajtQQu",
  "key10": "2xDEx1aDZ9wVr5R5ZCm1QAqbj1w9qUohXELsnT4nhdFZAPwCAfLD51pUxdhi1WNm8mRVo31xPSW7tSq9aeBuR1FS",
  "key11": "3N9CnWt6q5K4GxeGwx7uLYDJmP4byEgKbhy3EKEzLvkukGK8wGJvLuWWrMkRw1FDUeyM8hHG6DrrouPTNezK3Qnd",
  "key12": "5oqsVdN1KTqh7D1CGCdsuTYmQqdANnEbSYD4aNNnLtGV1jKFdahPAQMnXdWqW8QN3q7gds5cDwWghREnFt2xvSju",
  "key13": "2r5xKV9UUgTovrmFsbWh14TR1JNjVAqPmRPUaxcagkUTzKGWRs6xEeiAMGz4FSKMr3qZS2kzDGjQywP2WwVGQ5gn",
  "key14": "3pfB2kVftsxwPKaz4Kyj9VhYCKxX4xbLig7v6FCievqwfG8dhhG7nXZhHLZjVX7DVnPBUqvERS6yTREF4VYPQJHj",
  "key15": "YqatkFzJmNmBcDUv31SGg6LxQs49ngHV1Hn3NZhHxziwPtFUzKTJ9kc41Zg79Z6ppakJssgCUZrB5M83Gsc8ioZ",
  "key16": "pnnS5t9KXSmhEGfS7it2VKD5GWfuZDSZcCJfFCKvFU53MBYhFHEuHCgJWgLqvx6R2Swm5J78jCGPfoeWCKuhtcL",
  "key17": "5iqFFD327YeqUJmdSfwh3oT4tKhJ5B2QthzvSuTyr4Gm3qo1vmxViGukro9E3XgobqAfQg579rTCqJMRF92ZY7h9",
  "key18": "3KeN6LZCfwudzcuN1VWPiwoyLqShP43LPxiD65jVzbYaLoah2XRvg3rGWWfq3EB1LcSoewgnRqj6NCMj9KTeLyRT",
  "key19": "3wbuoGYPdYUL3sKP9eZd9Dc2WSJUeUyXUsukpGUJdN67B22Y16u5Tf6vEP6GbewVYZcKoXohcLMXJGhTGYEe9wND",
  "key20": "4CDwRRHf8d9Cf9m6dqzSVbRXZH5auz6sW5wYNdsVUJjFYv1GxjCP6eHAE8eCNVqkiMexJWSbm3GTxEvmovjLAM4f",
  "key21": "2XoTouUvQpwt7ZY9MLqjDKECJbENH1HPh844dqf7cHgHGd6zcs7HNht3pB4DDxDKzB6xoM1qcpMffyq7edbazYqR",
  "key22": "oPQ47v8aHNqKcHwRqdL6BbnjbyKHfnrSLniRpVtjUzdHPf4qj5QJWwACuECEsf7kfFQ2KG6PYdq5GF9AsTgurch",
  "key23": "2p5oquVuQw8HXLwuRs4VbRgSAFUZfK7YJwxhYChugurgxEgxieosc6cYX3ucZom2w7VJM3uornmX2bJCUmWnZkWS",
  "key24": "5Arcr5eYrXB8H7tkqgXftAhnDheAkUBDtzin2oYtr29xWcEcRRhjhJk8mSr2ssMbgLASiYQD5Lx2rZPaFuNYE759",
  "key25": "bEi7gndiJtsLyc1Y2iGtTdm7X5ZdaYJyB7JXuU71Jfm4sftEMoP4whSSS179r68TYEoSkD5mcVuYKSWejgXms7h",
  "key26": "37PTAD79ATuiBHPdxK9smwuetQLThp6qYTpfEjmpjdWAYNBSomG7NTZYjF7FQYf4qG2wPrnfBjkYY7caLxpxWqCs",
  "key27": "3H2ePNhAoAGXrMKAjf2Qcb5z3f7qy8FEhTzHQKJdaUe6miThW93YVceZmWTDYQDfqbdkRgbyJyKDxsSjM7jC9iDx",
  "key28": "4JYptNaJ3AkKm3aroX1eQGP5AchTNLhjFuHCvHFEuumTmvJKQZEQRTeJZ2PwY6QLUGVrFwKCxfUnFT9QqBN7rCY8",
  "key29": "3ggU3pUha96C56WN7teSc9d7iARkGiEi7Ans4WDcZLGno8PJHTLVYuqZJ8m1zXkWAqjssEDEYB6qUN5U9TXLLpfc",
  "key30": "dxcjbmS4r8KVnhwXyGqZoP5kfq2rTMXN2kWPCRwsxrdZSJ4BiULnH3mQpmnciwHyzPtSwpqjDVPDehos99wbrAE"
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
