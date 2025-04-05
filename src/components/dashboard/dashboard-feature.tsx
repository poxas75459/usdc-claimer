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
    "VS5kFhqdEA4HwTWH1Vi2tME3wT7ogamJzqnVH82fXCY1xzQqNob2Age9mJB4jgtyaoWbQ1g45Y7gZ1r31f8tMZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SZsLeeAEKmHbD3MMGFfCJco73s8NEk1S8tx7dw7FkSLJNcvvbvJRQCsvVtNc2LBCLPMKL6XgUKrZubGDgmipM7W",
  "key1": "3mVmbhA3cgaSDPgFHxE1pezxrSnDfXJnMSBDvX4aNJVrML5LZh3YCYwYXMz2pGxCfd3sFAJJXcWohxrdR9V2JRAy",
  "key2": "4QDS6GfYgNyJ2t6q6yV7yaAz5Akh2TQgz113GeWHKcB2365efuVp3vTE1p14RR7U56xZZ9davh3ey1o8UbfjJQD3",
  "key3": "398A4iFnWGdb6dHtvX2wXcxqm8iPa9gudmxFHdhQjrPte8b9EyaoX5sFMMKkkrjCvB1svavWX8j18u5rMxyCVQoh",
  "key4": "EK3pZCbzJeAEs88RMFWqEfXP6mp3PqWHRLsnu47oryjG267eusFikJLAHLP1M8xCrX84RiM9TxdvTL6vvtswUYS",
  "key5": "B4TM4ubwMuGSDCeC5KrEGPuCfYxJNgLohYLct8pU3TXhjDy3nXKxiPwjsr2E5YH57RKsPgf8tjDQD1vQaCYD2Xu",
  "key6": "xz4WxEXS3zkZhjzRKDjRWmuQQXugHLqGrwy3aV23om4srDLGqt1CWSsbyniGTso8B7c6Nqr2gSb7jzcMgcW9H9r",
  "key7": "4ru1tpqXKuCk37DXG5nU9NMFQRconyw5SfqxiX1haR5FxvMUsNrRcNg9RNiTQUfrTviLwCNBxwyXKxBLX5tNGWZr",
  "key8": "5bGsjCyMT1hddU7j8CKaLVxpmfeskrn68UbzPNEcj3WomAtxjWqT7pFoSBqbzD9nugxxaCk45h1surKbr1nyFk2R",
  "key9": "4C9223gEFLPbfTGTV1y9Mt5rdHnaayYGM1Z8twe6Sx8VGKQshGrjdbAhTHoWhFVjC5gLUBJWqaFyr3nmU9rykDyo",
  "key10": "4ZqzdzrXmWmrAS5GQcHpykWKoisfYrZyS8s53Cy2gxPZnqXDfPYiDYF4168cCGC2Xa5bEsC9u9WkaMkJAQjFmca9",
  "key11": "fhVBgD8cVi8g4FZU4prMrCqKt7CKEXcpD8StSw2Zi5EVqscCadofMF8P9PMPF5YnNhfiqyupz9anNw6VtybCFyb",
  "key12": "2upNvUZUky5aPsQFEAp3tYu6aFDUZqqbZvJURZR8V2sN6hdxCGMjcRAwWDBV3JdhCZfHBgoZk6EcqvAtjSLtvbqt",
  "key13": "3X9uF8Nv6jkbDX6vkydQieghX26uiHWYkKbaHLFW8eP4PQkK5384G6uwmSq7XkrqGyTfa5DQK5S5NNTpZTZyKw5q",
  "key14": "4wCmNq4NBxGKPg2DZQGiTfanmyHcrMaRpsdt1ULskC3TE96wfaQtJULXKBKaFoH98PsDxNQ364WqMyxHwuc7KjJX",
  "key15": "3Y6XogNJDh1GZyhnToqjXCFipW6FygRDeoLo4U7WKWphrqKF9z1nLa6kz43uH3vyPiHQCdkTL23UJCLTvvLP8BQQ",
  "key16": "3NLgdydamg9XRw7uNnnTRKtKQCwFyGWWe8LDMJqrEJqtgsoe1k5uR5KuzbaK9mSA4ZesArvZmmEgonoweZ9iJvq2",
  "key17": "2krnfF2BRTjT51iJxFaijZsgLYTu8CMEd79tTwiF6CqxppJtrKP1SwPg4mjB6nQFv5AX2CwTHNfB9a1P7kLGArC1",
  "key18": "4fqHfDtwvc7VmnxfL6SsGapWL5Nt8i1PWdbEtGa1By29VyMsuLcnicnWjZgMeHDyF9XPtmh3eF61TfsHY7Hs6h5s",
  "key19": "63qtT338fUMuydewFFqozXNzzjncthypbeuZkAefRESCrBYUC23Gjz7Qdkw4qJPEmC7cz4SijCUEN3jJBzVqARBw",
  "key20": "455Kf8ZTeCqqsfg8xfLBTBmLKbRMbBpUF9Su6EjHjYjpt1R95FfSUGLThZhi9mFQt2fGLesy2G84kA5cAeJaT3xF",
  "key21": "3kTjnyK2pnsFpYyGRx4Dm8pqF9RcFEwvQFk83XMzrBRHPkuZ38noez4oMs3mSSjKmqG2BLBqRBr7BkH9FbcAKjhd",
  "key22": "34pznTTyAWcfnmyBSYE7ruX45aDb4MFCLyMHJoqVtNWnGtWnFrkrSctsjX15JVEoeowVnwu4UAj6wMA2nyWNeQzW",
  "key23": "3wkMLZWKw6RXNKfvsFmd8sTJiEamTHWaJgJeJfmteQo2FbDWnTnfkAJqhbuNesATG8XcTKKESWsN9iGkJxUH8zve",
  "key24": "61Xb1kahsxv49bEVGWmMzKTEGVPMYUAGT53meBAGS9VPUEfNvgooS9Zx24g27zK3b8GWPMJ5CKkdohMAHjNzu8F4",
  "key25": "5PnnNcLBH5MxGNephy7oS8aLDJmSNUsm1Li392p5Rwwc6zHQTd2TwLhruxiTMNwUm3b8vxyEcVbghzbjpWfus5v3",
  "key26": "57UyP3Cetorf728eAxwbrGpTSms4vJ24wAeLxXUuPmAu9E6pLvzrcEKMLapkE3nZDk7cUFmSo75EePnxW4bZg6tB",
  "key27": "5KL4q7pMUQe63JgW4eukmg4HgfraHg65fjosX4DSVnQn54kEhcfzyVGMqqWeNeW5zKGwN85Zb3hPJiJ738wAtZqs",
  "key28": "2o8TT2rrgXUY71xA8vkh29ods5rwg3J38yhQs6e53DjJEgDmo5ktzm6zzBuBZamhdk6vgQN65cjB7219BLSea9Ah",
  "key29": "4ZjxbaTrihSy6VqWkeX5oiJwzhR4hRPriDiHE7mLGxXpeSFPxHqNUiyT8PNDnKgKJhPhutnAsbQS85KDYrkHxUNd",
  "key30": "4stDzbeDf8Uz7VUgq5iBs9a4hFQcAZuHE4sKy6LE6jProgBSVRRhLLYqgdaAKc1JGdghXg5v9ivxXGfnV2eEjLGL",
  "key31": "22T6yAVPeRdfkGzZh44T4AHm5Ffhn4rzXdrXMvVUsj6654ghFoRJycD6Rgfnb6yzRBzKgNH8eVTa8Mpem7z3GJT2",
  "key32": "5kvvnmKeTgmFpmHM6U7YPhDv3YirMdbQCo5UJwHZoiXTs2WVnGwd3GRy7trq7thWPsn8nTkDFy4CGsAaGjtb3Uv5",
  "key33": "wB33FsMb1UkfvuAJTqnnJiSQLxVfEfEv4K4k4USuncfkspGcEQjuLPocA354moxVLYhJGL4c5PCcMTQgz1jL5Ho",
  "key34": "42c9dSmDw8WC9idmTEmdnZHxxTYdEAbazdQ1YKbCnMnM61HG81N8dqTiZUhCs277Ri1h9ukrTW7MazBF9LEWe3s5",
  "key35": "4s78SM7oTfKMDYEHPV5572GC5CYoSayaBuJTwDiF23TW2fp7JAX7FZ8j4iJVSD125samxeLbZtV3r6KTvPYpkpbb",
  "key36": "4Z9TwCg5XUyPXxeTZfELDy789xEARCmgc5HZu5NB4cprHcNNpcdeZCLCy71psuXcqD5yVLo7AweuRnmzXgTWx39u",
  "key37": "22Vo8phLWZD61y85bwM8e6CRhqnzPpbTrSi7zCkPdq5ZqWT5G5orEVZQgX4TJ3mh3V9VVJXkLTgWSn1xPu37Cmoz",
  "key38": "2tVyzu2ZjNJ9SrcqqDScuhL5TdMNBZn8T7V9xzgDZzBwwgtUbVv7J5iYG1iQpiBhNe8UXNeYW4ZqndWnYocxrGNs",
  "key39": "4RfYqpLcaFsn8qBjJyMksdTQvHdWyzbPHP8CoutaSC4tyDyNmvqdQg8iWpVepQq6RiFMT2HYrVeBN6NYaoTuC3qL",
  "key40": "5xQPwDzcMkVzTUhdUJhxCoMTR4xKbokRfhasAPDr8VH9rrLT68njQ3jSK3nNrwQeLSZVT4zVo1xZx6s8JgKyppYq",
  "key41": "a3egZzGrgU2N4Ja5cCdAi9FMUczp7MwdqfHNAT6WB1XA6rMLTqdee24xBGHXBL9fbExeJzvFnX67yB2Wc3BWXvU"
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
