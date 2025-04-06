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
    "5necBBc7nMg53YsChbqV51de8nnwfkFwEvJkvRQRwoVDaW7WatDNZZSqudHdKZZjMftby7jNTRtHPH8GF2H7fA3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cWJGAMjqd3k5A5557A8tZR9yGRGjbxNihy1U72SCfqiPFx2sZXzAozrxEN3MbHtQvc6rWa4jjSiF64GiMrAHeHF",
  "key1": "2z17PXqto2duDcwzCjkEELGZY7aEseHrTMdu21MeaFyPnPhgcnjBUK9UssFSCc2Ak4LKrBmhT8QM26YAgMvEQmR4",
  "key2": "4zg6bTuqrHeNWN7nTh38U6dQGvTGxGstJUVgTki3quGZ5EofafV2nYER1uroN4ZXaXxXUxqgDhBpbnEdwSBPK24e",
  "key3": "4JZBPQ2icff8RVPftyh6QhEn43vHMFntHSwao6Q9EXAVA1KozokkMefEAS9jco7daHqsWUaPCrGwu8iLDqYQWADG",
  "key4": "2igBJyFxzBWvvnWakjEr5iadpQ7bmY3bpRGuMnZz9gw9bfk9LWA3ExBpJFGfCkHHQ9z7G59qAzUJsFc2CSSux75D",
  "key5": "4qjMQnfjfQhTAJX37brikEVsDJrzz8FoSRy2bfCsgmAgtiWLStkjoj6eYuMZu7ZwafzkZMATZAW4Krdy1YGY8JDc",
  "key6": "5wG1M58Qz77sSjtgotZ8G9XRG2PBiPTeKECBcJG1Bx7iXmU6jJVydh27SZxqZouPomo9pcMnekiy4BuEwG76iG4e",
  "key7": "b5fQcWtxVCKuFCxeHXesVkuwQTdTtqfHLZT8NWXMGrh8v69nV82s6SkX3tdcjphBfydj4LErNdNidnjRzq9FFQV",
  "key8": "3EhimE6cgsvT7eXmC7gm2F1ERk6KNR5zixmDAoycj65BCLvkbhvC45wFqg2gFuGbnt4EYrdMZmHcik7qPVRERpiK",
  "key9": "3HjQVxvPQBzfvXXiJEhhAzRjB4yyYx1YEnc2WNK65aJUs6Ygh5kWqFeaTsnp5XY8RpsPuBS9suWeEkkpEYgUQAQL",
  "key10": "5om15VN4fuFjKaqGiY3SNwFwnr3EuoGFTJ3AX1zZoRSy5N3pwQZKNzwrAYPN3S3xAKEbbFct2BV2Gr2S7NY15jy4",
  "key11": "Hgypusv8YX89P6B1gaPTz1heoSiFxm9U3SoXfkwuedEJLEkwMxhcjrBJPEvWhqvq7Ve3brvYdCekCdxwNEEQVAJ",
  "key12": "3Fks5stAoAkWTQWXQgnreea42BGJ1FJHzNxpowaYod365Syc9BaK8vdQBFjd1bM7RxpiwykyaseBN5mr3EadgLP5",
  "key13": "2WseKaTvV5ibv3pjDYRWb923dATkeqikpaqXB4GaFhSihCSfDfmtN4xwxfM4LUUAkRcN2ozCJ6sRW2Ydi1sZqTUg",
  "key14": "3NPZqwZwdNBRPZUeVEFjVK1geascLvdrUN6tBz2yqe38q6tPErTEuDWQ1cGhcYXuQ2fyTqtp5zHW7t72JQn2tTJw",
  "key15": "3RpHAukWaSegGdtEXoqyUvUJTz8f7SgMFvXpKdjqfhE6oGBbz71TenSsSDSqugCeYckdKDFq84pwwhhacWmWTeau",
  "key16": "5wxfs5zFE8nxXjbdFG93YkkLP4SMQxdBuZaW2uvS2rykydXLVbro8By7PndV3dsdy9QJT6qJmFjqnMUKXETNScWo",
  "key17": "5iEWisjYWCmC3U8VbPKHMZqhkRdd4Dc6z1WxbuvziPr4ehqYrUSsBWSASnpu7Y2RbfRLNHMtWLKSVTYCa11fB7xm",
  "key18": "5jrgMurSDeCWxUoQGMgyWQegBRX39g8zLLkptxGzFEK7rJq6kjnm9CS77pbPQxGpod84Xnhw9rv6WgixjNRZAdWo",
  "key19": "2S93KdvF6Dm3LD7Yh9MpLdrGHozHC6yF6JPh4yhycR3kUm7zoVWAXaLcPhQS8ByQ86F8skPybsUwsLXdU9rh456m",
  "key20": "4csTigsnZXxhUr6f1cKz3ZF8XsX3UmEFHqe5nu8jU7JcfM22RYtWbytnsyBvbgpJPn3TEBc3qGRTfS43oBWMN8W",
  "key21": "3LyD3MxGcCDR1wp9dUoEctjt6HEXQc2R6fRANzXUuAjNWGVPKgoKFv8WpNfuipMGknY8FQPXVxe9t5EnwHdLTmng",
  "key22": "5r86HvKU85rTCDozFUJhw1pzB311YKHVqqxMHbKNxHYDkSvW3FvsVgqfrLZwMnJKHzkyKubKfcU7x1dXmmnY5o7n",
  "key23": "5SkuUjNSd3xRJoFM4tWBEBie5BQNg5T8kTxrcnf5AiDmbaQjXyQKpLusuy9ScUyUQFZNGys6t3RmAPaW1NKwZsKr",
  "key24": "2RRsZMXA5yvFpjHhWGF4G5JbzRFiWYrj9w28rvKRLjyZMG4SixBnbez8pMaHxntFqXnFroYpsC5j4dYEMfaB4Vmj",
  "key25": "62rue7LbLDBT8owo4ACfuksNHVtBkwbK1WqgJfvKo2YWw2g32QPNHHaW52ju4a6NCtA4ZrGyd6fNmZJdzfFpDYTY",
  "key26": "35rTpdqU5egnJfgqPyz5iWZGT6cF9kV4ueoM9nEmE7Whk3cwXN8ByN7R1PMXNhrhJH74gZZy6QoDrmVh6davxiio",
  "key27": "5ZmKVxiG3G2PPBSETG5ohK44UHadoPDFvgCXBVwnLsRPztztCgaDQkdcX7N4RTgNqjdRcDmRpTQg4BMv15PYBVjW",
  "key28": "3eKTJAd1bmo9dbsTjbwqfyAkkaRmq4enxnXVTruAw3YVoeApjJt3cKo6WpNHVj43p8X8m7m8zdRJpSaNJhgi3srQ",
  "key29": "3T8ozPMbZRrQCoFXiPezL4oGdyLasqZLJ1Yuj3cwiz7JMzConvrt1EtbaZM3DavB2AHQBmcjiD3YyYKT5ddNTC3B",
  "key30": "3W57Xb2VCRUMnoUoyXNa7p6kd3fZhXKwUdF3Ub2uyWqgPAWyQoEH1TUNrvaw97ZGhTKbgg4Xi2YPqLMJqVinm7tx",
  "key31": "6266GaTpRNUWNT94HHZsyEPrkfybU3JH5WRonytm8pNytoWRmm7xuEjFxJq9PmfLinXeTewKubMafXt7L6GG8ZuD",
  "key32": "4E1WFrsruZY3JAMv6iNY8Bh7eMJxonLAR7fdFhYyLjbLno6H6tGfRjswgvWnfGe3qgUz7e4BWz66nrmGsaRvmJWA",
  "key33": "3kPLrM64FoPD8cgvvE6nzgKtUpyWC1EN7w57yBNdcAMpLYS6nERrLFBEGG9kaWryFKvLusuA57XUfot9qeqrh6zE",
  "key34": "46jDAjayyRqiMQ16CKGKbf54kAsuyuJ8dQXJx9sM144J8ukwQxagFfJQb6HKC2ks3dy9NUwumpdhFH1MXX3K45pb",
  "key35": "3aDwJwRiVmygLVDNa6bc4tnWtffiBuBiKs173V7k3yVywb57D9AgZR3L1k7pTTWMsUJSDziCE9KFU1aHfgfPuSzq",
  "key36": "4o1Gx6rfJnRHa8RnLYR7EHCmj16nGtSmp4naR8282VnQhqZbtfENVjeUV1DQC1PrKyvz5raXgju5gYbVBVk18NPo",
  "key37": "29uvFf36FCVMwnrJH3E6W9LtjaM5ynPLGznLeomwL8eeztrx9GmYiD8opQVfML1B584kF2ihf6TSoLP8qdFtJFg9",
  "key38": "4wVTHgFjFRy2GMkVX2fnXVRwmxUAjzh5UdGZsJMhXKWDHs8ap8pTVu4KJ1uN1rtEeTir4Fu3rQETvgpzbmGx21zc",
  "key39": "4e7CgsdLz6Vy65eURKH6mmQEXkvB5bAax9jQWz4LwxhJjnGAxGL5Tkx5TV8DCT1sGAHdmU28qSEyeMjpeBpeuiAK",
  "key40": "1nN3u1RHd9McXEupWLWM8r5uDfMmyagg7BWTpg7P7YfF9k9yCRqZxUdTP9XYSwsbQ6Bu4qCXLA1QGpWbw94excG",
  "key41": "3RKBrFj1Hi84f7Xoht5ttQC5sjBSqHQ5SPDSqKtQ3oJRjhrvYmLv3NQdeSLgiUFYfwkTFHHNbyRFkwvKsGXDVYPD",
  "key42": "2Ur28cgriXTmky1KhrPp6vtQjm2BFbfsBYRXubqWMJmPVqBQUdCsteFmfc4isLTU6SUiLAv4SLxgCPNKfqcLRxtk",
  "key43": "FdyzhVVpB26VUtwLDiVVpCbTu5q5YNXLWRY8fbz663muPzkmLaw3ccRCrgWLs1fCpzPzkRtvuWWeaymGftmk58q",
  "key44": "mxL3CctwN7URFXeTkGvo3paV9iFRbjkznUSf8YypzKCgU33vTWHk33mEqsJZsMBL225x5WFoXaRXVNGmiqphCwd"
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
