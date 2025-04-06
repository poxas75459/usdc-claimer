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
    "53qaXjNcNdi7tJbu3phEzxncta6RNiMM7BAHZUUiXgkhzwkHGyBpXHd9a2TKdwTUPk7arN46sQw9q5xozrkuenWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZyVb57BUNPkegpNouxmsBAtMx7u3xPaBBnZ7p2hTzM8Rqtwki5ETgvnGmJNwaLmrAbH9wNY5RJjoS7LxbPTuAzE",
  "key1": "xcdGodwaBGagRFP6B8J4VXS2SuCohqwuAFGsKotnXeMRZBjHVPpVfqLSs6S1eReCP3NkmNVJqoKj47tFK6xHwyo",
  "key2": "2i3tbqbzqs3rrHNDZcCtV1STrKvgR6H6fxhWAuxCzosKYWFopSGqsXcWppbksRJ4XMPRgpJ3BoHveeQyxtb2TFM1",
  "key3": "282kwQRYTcjZHTafY49zcQQKwvMKvrK6t6jkmsBG83Z5urSwRSK7QwaEpjpUg7D5qwmBxab9NJREU2WJAwbsjd99",
  "key4": "4RQdLWZf2BUnG7GfNFcKHjkKWuFrBqhNqKAwE2uF51XW38WYzRWwfyVgmw3SWns33AMUVqtsm8VuAWtourZbbfHp",
  "key5": "5PDZuGdbXYBj3gwVQ4W6pvD2P6uqDgStjLTx4zjD12XdtDip4QEX38sATF9vU6fUfaot5jkwakgy9A6YALJgjjxr",
  "key6": "2dYtUS6HMGYKmV9tv9PFKbHvnycJAnYTdZ9Zh6XmN4URXxZfcDoRmkFhJRTz7HektBo7NGkwHaEsQQ9cYXEzEJxq",
  "key7": "3XkJKgnPqRtVc1J28huBKF7cg5TxPwLcCJ6GV4y2gixQHz1J6Dd12Mg2YewsEsgNuUTyvpHFmJPKvGANq1hRx8v3",
  "key8": "2ym75gYRV9gTbgXnHwA2GcAiz9RbASm9WPmpL2rT7ht6TrXosCU5eD7ma2K6Nq2SAj3DN79eTJg9DgRaUSqz4Kzm",
  "key9": "MRX2RWUkA6VbPzXf8DmfXT19k4exRAKnARmwkr551TKJg8QFbUreprMKvVD9ZbjgB5EKDyPpVJXtbYP9dCXusjp",
  "key10": "4aNP4M7DQvuD6op685rKPFY8Q2Cfn2yagntDrEoD7d4G27CgXcH87AN7MB9DNvjuxbguMKM3CzLp6t4yrhRWf2rA",
  "key11": "NDy5Af2eyjtJcWwfmAuK2as5vqfaWJCkrPYqmTbNqbLrNmH8r1hmrk1Er8D5R6KuFftR5tDshwcJtjicQSBxMWP",
  "key12": "23BGdo5eVStM5EyxSBSRUsGD6qyf5D5nzM29yySFqxmJYHuJE6bsGGrT3HBmaKYDoFFTKtnUT2Rqcpv4AfLvwKH2",
  "key13": "mACnk5py1MPAEae5cEVGpg4JLGV1panL7wgKDEwqEWJRrS7pYSx3YZTvsaQar3qc3XoYXizEmwENuiAPd6Yh4wP",
  "key14": "54uA3cjwy9ZKb9Nh2WpKzVxVZpw5pJ1AcWE6g2BqnS7suVZHbF77hbDKY76sM8HSHhcgprqPvQHerMTFaeVoANgM",
  "key15": "x4tWdsSQwAHrDXSGbqGgdSyFbVi4xHxJRQtHCHkwEJE5qwKY47NErYNCieTdn8L8JQkDE2dPtJRPZo8YMZPM6SX",
  "key16": "2L8JnixVGMcSBrf5Sx2JynQh9acXHyqfJMCBzJ1wqi8RTEw4LHpbfyUXYGZeEhs1CWaV1ZRHBx9m1hBeDdPSjcDS",
  "key17": "fbjQd7xq56Yqh3JTFeDhed1eSCXqN86pUKkZXidTjLszK1rq59mjHoGz6Tbx6Ta4kfAZqGe2MPo23itdqqPjM1v",
  "key18": "XMx7USN7mBztjZRA8QuY6xPm1Ku9EhftPCixMX1rvmTy3q9DBgLzCWfLx5mSQDHrpTyBDaVsj5vT7ESQe8cdJkG",
  "key19": "4sFbkPPvTBReAVVVvayyZ7Bq2gqKDfm16XmSYavefiVxZhEri9VbhGoCLyyPZaBk5Ny1PuxGj2vE6Q3cQcEdf666",
  "key20": "58SMav9E4fvaaDCms94h2x6STyGnAm5Ez4exe1TCr2WyNwhq1NjjTgEkiame27yVeJwSHDhGgyK1CeUHQY1uHTXd",
  "key21": "53rxA97ahvXEgSkuyyvVNHoqJ2oqRT381wZaXxr8nyfduC6Loa5C2LEXoiCfaAXBdKcHVxQzNnERsgpyMxzCXv5S",
  "key22": "5gKD7hKZvr8pDGN4sibJZj6hTNsgxaPXHtQ99pZ9HJ4D68QeuxoFpMeKpyBfFEfsGhi41m2GMtMcqs22NXpwErw7",
  "key23": "51e7digrm3NbG6C4s4xqexAsCB9WLZz9voRLrZmm2fxyQYBYrGHwVmEgAZjDfvYxhjZKyu1BpQFq9SpKUXG21Sc8",
  "key24": "kWSMp2gontgUc7DLGSeQzpHYLyM4aqNCkMsJV2FVoHQ38VU45GDP645u3toV1U1iJyicS6UdhAPMLgYdG6WQE31",
  "key25": "3SmT8swoXAj7WFh2SACzWZf3EVtxszKSc6mWVWLFjDHuz8xA24qZZqRcG2zBwttTSv2yxyNS8qc4X1AQDmUckzvb",
  "key26": "4gABg2meMtv9CQKfG38imou5E5d23hvS7paM7XoTmqwZYUqys1NXMvrWwt4bdf4XacJjKv9qQJNyh6LeTR6Seraq",
  "key27": "4X27gp2MGKiuvc8qC1ZQ2EFXMtBw4vpUPHiHJdQdE9HkeFKp8BZzHGqEiTX3xBR5yu9dDE6K9u4e1JnMXFtvQYSX",
  "key28": "Vrj2mSMbg6oSiC4SeAW2bcERghkeatgUXzXHhAEvZKKXBYgw5g6iNiccunC9XfDRHNesLSncXEf2GJWMRhnRvtk",
  "key29": "2tE4JCp8S9CW5tRscMYWxJFt66DZwYHghusR4TiuamjpokgUhjs5VcUrq9voyTBDk3KrmE9HJ2Ae5srADx1XgdQN",
  "key30": "3wQxvTHar25ye3kBRbTxFNyuN1oj2zQsmMfi9612r5jccF1tnkdDhyyqbDaqHVeZ8JdHbXJ9qYym5W2RECs1HRA9",
  "key31": "9v7UHSznKe8zb5H5HUUPLjA3u2yTeFq5qBqC3bVoUanh5iphQqVwtp6BgvKDpAtmowCeTtuzMsMV7my2vzti1z2",
  "key32": "51KEaGXRjPVPJcDeNRvM9ztU5bv4EyJtkLxdaFK3GjVoFTtzbQxxuSh1ggJzi8Ewgt5tFKaSYpwSSqjDiYZF5c4z",
  "key33": "5cyVtrPwD2b7vNTBvT3dW1WjKbToCFibZETbyWgpSELgLyHjcoxWMjfRG7y4M1558ktd9GKtZ5u8YSjyQL18ypBW",
  "key34": "YeE41KDB42MoG9c2Q9cRvCsreFRwo2yxHABYRgcsJcyaB5P2aPe7pfwZGUPNFRzJuvite392i2hjNhz6aFSQ4ST",
  "key35": "5Njksiw1Y257mjUAboG4vwtHijvSw2aTEYgviSazzDkde64w5hNmZvyLzGtHriVNnC9WnAfv1sF4eJeYxjoESQV8",
  "key36": "4KZsi7gWFSiJf1AdhYD15AkdzqBquGtqqKtkNyb7tiDyswx2zE9bYbtZzqrtTngYvVVkZwvfEVFCwJgX48PK3r5a",
  "key37": "4DRN1sKGEczt53s3h1vZcVeAD9z8oUSxvQQ4WNvMVGy32Ae4Adu4EYyNp9V7ZgJWbxPiF6QR3kZf6c65SbJFkFL3",
  "key38": "WRWmHNDrf9FBMkcVo4uHRdgZfVqh4UGqKgCqcNUMYSQ3jybEwPwGd9GSVxrJcnSZLd17d3ss7HoX7cdvEtyTRS4",
  "key39": "2T2rhRx3aescLQQnvC1BhiSLrjRYFBWkpyHh1MkCHqf7WKZJCYGjgGDprQDrPFkLYKQ2VeeeVBJEKyUXErnC1Hra"
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
