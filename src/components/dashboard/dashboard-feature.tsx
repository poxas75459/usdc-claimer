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
    "2NJ4jBbDfjLE4F4j9QBLYGU6hg7jnemSS2yJhwvmeQrVsSUaqpqUPjT6vjZYtnZXgv4U5G2jfToMEmmci4LThD33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pgJLRUteof8afntSDZbpGiWj9g3L5pAReDsmCk8HNm1Nms5G2sNySz94qgRZVq4Dcsd1LiwjWYQP47JeXzZixz5",
  "key1": "8bT2QGPbA4BNnZpwjcTJ6NSC2HDmyd1ScDEudtD7GxPYEKL4bcxzZzxb5cpxDoRaihEw6MFKH7Ayd3sDbwA4LPM",
  "key2": "3aSkcqbp3P2NLCFadF4GE4Udmw95qoWoyXM4ad9uicFjdSZYwysx6DoDi9dnP1GRXrpPZSrHrg5SYpuEjWMiTa4L",
  "key3": "2RdvchaxXm5bWBuXvofu6uDU9TFu8PAYQ6dtxuqaCb9tX6L2DTRRXk8i6PP2t3qb2fdxZ8jKNfZLvgxmWUvNrg3U",
  "key4": "5a39nQTWdeBiMYQtqsRgh6vwoHLFnQ9Yn15MBiseJro8qmnNB1syuMJs7Dd1UF9JBjZ4AHMVQAKoBpxdnh5kVJKK",
  "key5": "BCbeMd7JfLKDJ4khPiY3nqZKN8mevvPNBe3ceJj97rPin81qh2vvPxfVWqXNW6QbG4ACBe5PnUEAaaHVoYgv2FX",
  "key6": "2tvJuB7GJLseF5YSZuntb2QeFxcHajq7tjhGnh9StEyRdXRPqb14h46qjj7p1fuy9uk3BQJ1Lhx7et1cuWwoQwak",
  "key7": "66253me36EHEa43aECTooY8k9HSPEmX86jcBLfLSyUeBwJ8CPquNfzKBTmASX3oPc5vAm7w1TJy7LZqkoGhJohqR",
  "key8": "56Ufg9RVaYt4M7MKJ5dYgGooNP1MfZp8x2waXL2YuyJhp1h2iksvrpFFLwqfYAjvYefKRcPpNxnJB19D1aTv4MMs",
  "key9": "5dJivb3GMmY3USdeaF4GXJBj98nkBui8LTdMvVFxxs3Hiusr9Fob6f9anJDbghXhY8u1QrphZHhvaTHRTy7qTEDQ",
  "key10": "5x7YfmN1anWBfWzgRa76YgCFUdXC2PbHEJYJeZF6tEu83b4ixNMbBBRaVs7fZ4SBYCt3N4YoeCY5T58viJ5pSTBF",
  "key11": "P5J29yz3pLQ3JWpyTVBNcu8eVREWMSViFWRtePqm5xH7b9m5uXrXjQhuhxq482cjp1ChUB9UQEvAj22vm4D5d4j",
  "key12": "5WTqC5JracLWi5QGvLAkDAScC3J1oAP9cnHPKAUxfPFxqBaeB4VZidH69MQLk9rMJkSJSSYcuxmEGehR2WfzHrmR",
  "key13": "4xKMFoY7tdzC6UWyrDkqoUuPE66rz85nrjFnsepUbQqAmCvMvpGjZY8g6sE2qWpCjUrHngN1HrtAFCmeUSgjjBeu",
  "key14": "4ZmTKcYwY4XYQbF7Pwmpfef2qXnejbGwJuvJDqw5rAs79RGtBZxwSN15q269gmpLxDeEwQ8AegDssh4H6fbhi4Jd",
  "key15": "4N4oWma9yTCEKMHUurHf5TPQ1v3psis8we8Li7jF85nyvaUwzikeZn4uon7mjA46EkHfc7P54Q6YGbiQJKrqCVJH",
  "key16": "5JJh3Ku9J8KGGCCk9k8oWqszdbC1VCR2nuKm1y58s1FgwyTozyWYc6kQxFz5YtNLGJsFvfNZnq969K8EEF4UJDSu",
  "key17": "Uoth5ivVNuaHs3W2KgPGv2RM7dQRgB37fNG9Yniu8tyxmvkbtL7b3Dj99QeonxXvMQCC4hB2FqdiSHVkqNmGwL5",
  "key18": "3raXwwoFszfC89BTe5U14BKXjjmT8qTLqB4WWsk3kAzDTm2ob5A4wFfxjmtj1xHz2ernFwgTL3MHAUT5L7DpD4jE",
  "key19": "22Ht1aN6qQ9LQ3RYfWwBvKbW6pwKgeEw5fk6KftigYN96qrsXwBhxPpo71XF53Z8G6Mn9NsG4NzZGh9bXZJMy85z",
  "key20": "GNZwVBk2G5UpXBAr9P8YiwRPGRobL6FaZSJTs1RoJ3BPPpQMicALMzJwy1Bdo6jxKksXKghW3x4CTb4X3oN4r3i",
  "key21": "RKSbpsdJCUVepQffKgocemtupoUyiFYPUA6P2viuCKLmaQ3rzuDsq4idCmiPYATMzrT2dhooTFfQA9mJQr7Diza",
  "key22": "2AkAEgDJXHAXvuF3A8A4oEegtvFdD8YBSoSTrcdKqe8aAEpYBmUSpdW8ye6UwwbdNkQ62ZzE9ZpC2SQ7zA2Vqf2w",
  "key23": "2BdPjsSQjgN3MNZ52KSqwaq9246Ln54ZsEHaNKpQfByq9mnriVX5GmZH8V2mMY4dgp82hFzYYEEJPV2ynszSjqFp",
  "key24": "2GrQPgPfumnuXF31VNHnDkSMU9cug7FGZYn9jgzwK53Tuw6692pw5boga93M5a7aiozMJXqtq6ntnChj7AysGymx",
  "key25": "2N7Ws9hQD9uSrv9Go2tGxLCZ32TDphZ3aZxvyXLopacf8WCg3ugpS889MLd5hhw319CBPUvTsxxMvyQGFMcQiTwu",
  "key26": "2PUg4kvFLgMPXJS74C2vb5S7kCRr1E66FYyABnkK63xsa597KWC9X6YesAHxLxkpphoC5pA1PxhATKSmXGtSgopr",
  "key27": "2fUAsN5RqGFG6w4CtC9MAKSwV6SH7T4HbifXVhogXMqGkBfHTkiQsd4HeAo3TXBVqPTdvfbbLi1SU54cYqW2xxCx",
  "key28": "25KQUnz5XVJS2hQsjzE2CG3i5MJDBs2BVC6AMcgDUVcrNueF6dYmMhD8LucGPXLaf3xxoTiFpB3JV68tmfm6i5Fa",
  "key29": "2NUPXE8dkpS1JZKuMu86A34Z1oyZwNzvCQfkdfWJRpmJockJzDXK26RGV8xfPb9Z59D4KtxEjG6eNs4X6Pye899k",
  "key30": "3mgGUBKvynZKEjcYCrCjHxjM1AGBzus71iyVTz3kunwsAngWaud71cajfdCVPdftZMePn56nfPbAGJniRDQHDGJW",
  "key31": "5bdhVmLV6cY6eJWgZXE1UK89EPJVdzn2EK7fPnPwtvsXrdYvZyYVJdDon5KMZoNcQeYncjAysKqR3r6gMH83eBFm",
  "key32": "3NtiRVzjzK2Vv4DD67tAhmtPmAHZrHmx4o2Bzxh7pRjjhiFm8fFH9VTvL4nKD6Q1kbragZjf4GExYv7e55LxUrpV",
  "key33": "128FLsGAk6YYEhd5yap11tk6JJ2innvzbTFYuVsjMdb89kLafai692fdXCSmDQpfeUFi57zRofNhzooLqE5Uyw3u",
  "key34": "3Y1WZeS4p4UQVNBMnzTrL4WLmcRg1FMDFLGS23qQTx3U1jnvNSCMqEdCbvpRodJawNp7gjMY3ULVzj3oKwR1AMmS",
  "key35": "4mAFs6ojhRY6gNkMQoeFGWbs1RXHQNXWY63TQ6UzGdXvtgcq5x7TaoBxtuKiCLjbXMBE25iHvAhXF5HgZZTTY7yZ",
  "key36": "2wpMJxkArqxjP3PQShxmRdJqVg89G5j8tahQmNaE6uzuWboz56ki9xKu6LbUA7eajo3dXHUNxtJtUzBGyfQPB6HK",
  "key37": "5goad9m8HycL6zGDw5UpqSiaReYt1LoiJgD1ZgspY8Tt1DAvwnDBCDJcgcB7v1N2aMHtQ1YocPwdEYjog5FgZ6Xg",
  "key38": "41Vms93wjfoQk7mAV4GCitr1JBRour91jjGA3bSCGJ6RyUYc7oQo9AyE2APJKVTVR4h25N4T3JtXyuFP3o3acagz",
  "key39": "3XBV2J2srX2TuXEJJ5qXkUgUXBCcZoM7rxu17qCCifPCgDzYpVoffwnw242k33VuKEpWq5sJy6KFYk5eWmUvWRhk",
  "key40": "4GsaFPKZrPULXVVZrkxT3cWu8xdPVZqF8E5PsgtoSN96T2tBsAHAYPB81C5X7WKhCFxxtydRk6dazS6tWMdDir6V",
  "key41": "4cJixy7hSdMePG8sLgQSJDu9z4hvnghAPXahoM23HJz3wFUdY3GanZPNBMoqhmRQTjGqRDWHE6bZ5HwdhCoLQTS3",
  "key42": "5mTY4kKGBut7aMS9hTEG5727zT2mSPDoGzj6vjqqz4LE2CKHDLeQjCaVMEB1s2HCSX71uehQCUnS2Mj5Yr2E8k4u",
  "key43": "3rWMfnHUDB8rqLQazq5N82WifgaTpydPQBzrCvUppxEQPuNY7YcwtTYZxqmEgDQXjwRtA7Y6ftkSbJHmBjrxBbQT",
  "key44": "3fsYwuLfYkgueNHUQKtjCCYPJFKQ2UvwoJHWGuN3y9zNzentgxgSSxjUuqS5CSSr4X1QJB3ZW97w2un2hibqfaC",
  "key45": "5vLGzZKX5rBSHp1A7WM12K69u2mKyCsTcWg8XUTtRW3Fyb5a87UBqyPLEr83NAfoJDuSjcQK5F1x6SJf4oJJGoK2",
  "key46": "5P6Bv8H5377HKTpvmoLyjLSE18uK2LdXzpFFiM97jrTS1EFiEZSksMmxkmXMc7SoAMncjzCszTeJ2DfHE63sJF2",
  "key47": "2b8HrvtywYPtNVU4Khkwp1dhA5yXPZFbsscFWgqEZXzzP48wdSVNL31MN8TiSzpCRyEf4FkBZPxY9gvc4tiQCmBd",
  "key48": "4D61j67jhJYQMUyQU1SkznKdTXfKfL17kUxJ3TdufyKumJAsdda3RDB5JLoz8FWHqSVFNKyj1mVRpA7tYLXvUBT4",
  "key49": "4rXu6omAL3z8YfSdsFcsL9nu4EPVGqUaJ3Y7D3uiihzWznddoiCfpuHnXQyiiNjib6siq9oMQchiBtAUJhCmSMTV"
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
