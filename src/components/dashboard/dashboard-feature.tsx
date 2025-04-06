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
    "o99iw9vvu1ArgEf4Fx2a8MWFojLR18fPhVNUA8JvoYk8ACkCrzQiMDSQ1TzBCXPXB6MPDxKvGBPfgJ7My6EHYtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9SmLYSuFw8J5PVEJFsDpScUdu5r5Ej1GeEH4P9ZDjLmsfLpjZnBV74ZeRmJyiwMZr6Tedq7D9Dr9zgGVv9srsnA",
  "key1": "2h5Ua5QnQ4cbSQ2eWzhL9u5VMczYXo4J7N2A5v1x56KPLSf5TEsHstnsTaEgTSkTWLaxctK89ZyXmZDMXvQfdtGz",
  "key2": "2ufxmimXwX8Y8BUqVYb9HWzffjwPFoMqQa2RRJ6VP4UTNgLS7fXfUkF3pifCvwKHMtTT6xPyMmaVEWiHdfGBwcHp",
  "key3": "bLbU4aHFJxcomJieUVyB42zVQT4Q5i4uYA2fANbfrnnHgpVXFQEuJxvFQkV7YhYqHwxGg2FUz44hzvwsPqocf25",
  "key4": "3q58E2TY9WvUvN8F1YxgcnaSAiApBRmwJofurj1z7aNAPZuSvQGJGqBme8yHiR4XiL375DAyZpyYSPuGMAcJ2fAa",
  "key5": "2LexHasLURXRaoemWkhmm7oXkb3w7NmFkeGkSsc2Fjqnjv36JYfHb74QXaZKW8QhHF3z7Uu61aof49vENLseaHUs",
  "key6": "xGTonFtcH9p2mrp6spxZYydLUg27RbBiETVu8qQgekJyWMBQKAb6eZDhCUeKiquKcKFPgfC3XFmotGpu8jke6ki",
  "key7": "WPLHU2eAwE8vTHmpdja6TtdJokx2vBsGeHboFX8maJCaDD29EWjpZehcg8bbV1NTUicjhg4MQ4V8rBxtyTBUa9E",
  "key8": "4swar7JF6Dfz52SWjGhY5dTLVvFXNciGreDbV6xCSqAS334u182NQXdAYJAwTfpx1nW4Mxyc2yKnENw1TSKatVpK",
  "key9": "2mwLwUYU7s3W1drQ7ZFyfouUWaEAZHCfhdeFeqiD5zERKEXDSpugCDMtvEXBKhFUWyMtaN11QZKmbYJiKMPzWWzf",
  "key10": "4bXq8qsbDn2LbNvEDT2Uwan2JqoBTcFyZrfST6ojj7bW1qVUsbjyV9YQ2t51q5vD77vGXakfLiMeZNUvcfYFa9Gc",
  "key11": "2xwZt9pNSZqksikvXjvNRPzeZKtLPNzuFhU6W2qMZuqUWdA4MdBS74gk5ikd68fXZiFx1jNqMqkTKApCpGB2U7ga",
  "key12": "JHQHKiTkm5oDHUseg2sLBiXkM8sUo2KzyooUZhCiH7LZ3jarXJCBdG9Wy4KT9W98Fa7h2vuuLu8YjgDmqxByjf6",
  "key13": "cGh5Tgx95sykPpFVKzuqFahGofdL6oypRqKTUGmwf4yNXm7ac6LDap14PCTM2jGNWPa1nnUi9CrjaeNbeZYXJ1a",
  "key14": "3KTdT2nDwT57yuyYJuuEbYU1GD1Wwhjvhfarfxp7m5ASN4KjLnXmzhzcZXLGL7f9PNvh5rAUrHYEmRowUV3cfTe6",
  "key15": "24Nr8nShwFao7PJqgcg2rbDfzdH2Z4CGKzZsZC5qCZHBnCE9DDCAMLEGqZXgbJnKaLZCN4jSJrE9BZizDy2eo1cv",
  "key16": "3siN2UNCHyWr8hCCgYVkouJSqDJfnGhvXspExBiezqY96SYBNFh1B1SCbtoKn5WYzU58ajcWZNp7g2GiSqLbxjwe",
  "key17": "59Gt3FYkdqit9EWdrmQqLyndBE3jeuYKqck1KGG3BkSCM8RvAq5fP7dMMvi1qy3BCssRLrwZdm6BV5gtNe4SJbjM",
  "key18": "35M5Eu3wJwtzBGGAzwDma8DpTUN1h4cjm8asV7wezWWEbfLinpcK1o26zpuUWeF47xDL1hUXdWAYb6Eq9x2xUCFD",
  "key19": "5sPfYZB6ipGoB7eQ7WfxbY2x9FDpoW2dqFgpPWX9GB6eSTW7DoiCPXKcvd9MsvipPAVsJkfCdePmENhcrTkFp84M",
  "key20": "2gEVKwmW9xGnMHcAuk12zntpEAPh8Uy9RpodeHZ5voqcFAeK2j6pQCFp49qqo8xXRhCsEKxf9cfqQ7kcjpFaa67p",
  "key21": "5VdXG5VFH1RpUUQrKDK9hNZFbYi3t3mJkTZFnvufwryfLbwLaADQQJBuoMu97HYEjLSm66e21G371myu3yUJsojg",
  "key22": "3V7rwW9FhaKcXDTyiumuh6KaP8BdH24SrUN3To9dutSrB6spMGVSzo8U4Kqs657M3oNtgkndHLbMetrb4mHv7MAE",
  "key23": "3XhAd4rpQFV3URMDbxHxLQP2WaPqcPybmLBPEzAbYJMqJhaCzge8vDKAEZfe9YLWiuMYLjRaPASgx4P3haTpWee6",
  "key24": "2kdU7XM5vpeUispL3et5rUaDUyg5BRFNwTnu5NvpSScrYDkMf6y4UgoZX42bgP5mTBaNUATCnUuNntopKYE5zDBf",
  "key25": "2a5DmnsWeQ38AfvJuz2hs5gP4bs1TdiBL98zPCN9bKnBPkGAtiqwJwt9GXdN2NsMJjHaw2PWiux6sS2FZhsDpBqF",
  "key26": "56KvtXQEoeEKoRHi8EBZo2vKydEpUTgHxsCakh4vM1mwz9ffMcx2YnKVSnKDJEFqG7prP1yLVRu2r9soYN29BTPh",
  "key27": "5Cpy8gYbQefqSzvJ95K3z6y45P6B7P1wYEHdfLAHqd5VW7VhZdsQHAJApsZBQPw66GUkTS3mpXufsXDDQX9BWPbF",
  "key28": "MEgdr5yXsjQqoHSjNoa3NjXPurGsSBykTJC9UWt7aPd1EJKqBybzj8FfXUeTgwyPAfRLJ1NShCVR35zX34oXERe",
  "key29": "5XHG3JEPWtXJaiJL2wdcX5rZTWk9NCpjNnNNYXT4yf9Pz8PdcQW2EKMExJQsjpESKDKd8ZDuM6H5ohUP2gduQpqJ",
  "key30": "4YmBmCfjAsRWZRXqXCnrqM789GAQgUMu4zNz2ayVMzRELKZXh6cP7w8XB1k27VVk98FiT7X81aM3a9zfcb6NuhxP",
  "key31": "2d76vsdt7WfHeJWSbdNNfdWYXxnp7Wu2jJm3zJRumV7qa7zQePU3xVGsJ3aBt9vKxWM3bwfcQ9jmiop3onew1SZb",
  "key32": "2T6cwqtvjih2GYZAAvSFyihUbQKL4cViiGayZ4ecW6mowNhyndJHPLnHLq7VTw8JYx31911h3FEjr2o9gpNXvexw",
  "key33": "5rRDqj6FuYhf37Ao1RHCpAZr8Ze7DFguzJ7rAsrEUYfftz4jRTjcsaHDPtBTuFiHiCtB97RHWndSKoGxDnX5keip",
  "key34": "49egqhcoSVXcEDMgW9s2wsjGEmpvHxwcaaiz9437Zq4TJzTuHULkdxVTXSto421zVnz5iXzGNaMc9DVw4eTStMsJ",
  "key35": "4r6vBgPQozszphmCT5NU7PZxAzei2RthAKdtxBYAvgLpCwWvjTiNv7ryAmUXms2E8AYTecX28G5nV77CDu2Si73o",
  "key36": "2omj6szwmRhz7tDyYKBqMAeBgR7rh1yE2yzgwuYHotGrPpQRQsajWVPUADTkC3v6sPizUBh8JVZLS1m1zLtqprUM",
  "key37": "4JuBdXfQP6g36Js2wdcQF9PYQvJW7sJxQ5j5AE2pkaR5czFe9Ya2x8ELnEgdsit7o2n7aEbQqeDr1EZoVN5wzkeE"
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
