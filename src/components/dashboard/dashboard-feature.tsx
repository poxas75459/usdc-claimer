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
    "4ybHu7jDDYpjeAKRWunZK9FF9fzpRQLt4JRxu6EMNpqap7iWJTQVhGFZzkpHsGQLGM21dp6T45fvox7uZiY6gHL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NizJ8wGDxCN6tMkrkuT83RHuqHYTCGzZeHZAwjcJU1tS1V7TvchNZagvcat8dTRJypqdY4Zzzdbn4UjjvGMePcP",
  "key1": "3WKAFEXSNqATWrM25RcquQh3KarqGF6HLGTotVCwY3HeYcByqKUUwEqWKYy7jz22SkiAgT8yda1xGUeF6Y5Q6oMA",
  "key2": "2K37Fkw9WKqQnTYT9bvEMzaF28NmAKP9DL8yuYeByaQ3JUh1cPMYCzX1bEwppShXdUozFB5byoyCDhdTFypcH1Rp",
  "key3": "3df3mYSGCCDFK9L7zt5Jbcfji6V78vpRpzHQTtKnGJYBcMeRBgZQyvYdW4yb24MqL7y8kGBe7rCWvECBcF1DHa11",
  "key4": "5nvZGGo6TWmvNPLAwiAkYvQk2gcshQ6TnH5euiHCsnoYPd8GKkqRbQFzTbStPj73Ks5gxe4NVvoem2FFa4nxjTLG",
  "key5": "55dnCkmt4LpAH3yECD5a9fyKmqQz2ru97KN5k4LsNGmoBjyAtujShJWD4rgvi9MCWpQixjpVgTi22PLDkFuMgY17",
  "key6": "36Vo87QXCTdpsoiCrR6kPtGy3ivYecv9v2N5QSWKKjCJamPGnckZ5m3fwkS8fzGPKZRuDdoHPVSDaSatxRh6RJLB",
  "key7": "3NWkAmrEFkh92vXAbCtkukv38YNUA4Wjt5nqAhq8U7zzy1nrd9TKH9Z2Co9dA9mD1Zjcytbpg3npm6LLVUNRMy2s",
  "key8": "5ooz9naVk7eijbhha3UiJae8r8RYjLz1NbuyGggJfBUhZ1dgnL28xu3VSWXEe3HE4JMMWE38DV9YGGbH7ELSqNhm",
  "key9": "35rn6CLbQYo1fCUbzMLMUUjEkBDUhe6KafKLWeaY1KyCy9nycwqS4GkM3jEw1rjFRu1PVSKxExDTemonGGvMqpQT",
  "key10": "KY5mA7ber12KjoyugppqTKJrT69QYo565YEE1kdKmzDeBBebZvx3yUBi3Pd5zqVtcQdjTFZ9VxzdLVtYADxaSaf",
  "key11": "PT8fwZZpyUxJYS2cqWUw5hxhvdLSUnc2GPmcoR41LUhk9Q1WpfmNU8tnxrwpKrZgLMQek4U1faftcUnrPoedEie",
  "key12": "2fdHxPQUE95gm5CH6bjDVGTQkwiH3duConeeUSVenw6qfCQRu2Nk7MgKB6nM7NN2h4BLnUutENc8EC9UUw3hPcjc",
  "key13": "4kbJaNpYrWpnr53D5xDPuv1kjZQaqfX3JhM4xmBQu2Qn7NJC75jN5qyTVvrd7cShSMYjTqdqfNLVcTKvRsZmvsDL",
  "key14": "VgtjM1qCv1Sj6xV7rixZfWXupiWqYEDDSdh8b1jy7e7t8m5mHssTxArsxGsPhsV93Kt1YxxjKVg7v7GGpyishkF",
  "key15": "5Mat66Yo7Xm6xFWTChUqyCbTJfiPViWzkfH4TQWaTwKKLm71Lt8tYwpkg3tKeywvipYhj7iuz7vHhW9kyy8FkEWm",
  "key16": "2xiKeA2ggLdUv3hgLuhAL4VJ6AqP6Y84jzRhVZGoMHzRLJfQCms1E3FEmma17DhpFHGW9nDzxBAXfDwZRTKXaVKF",
  "key17": "5kqTzsMTHRRPH3A2sjaUJKQaUQsB6XWksV6JvykgadVK5ax8YhXcWX1ubxrJcHp4W848fGjdtTzAABwgLQgvZjZE",
  "key18": "3rGPJQLUp8QLnb1p4nRuT5ka9wvP6Mo7g9k3PGVBc9EiVJQPHfWcA2oo4iJapfRNXUQVyamJzuz3BkSDpXokgsQX",
  "key19": "4r6Jktcvwmy67VPrMnL5TCku3Uj5ZpoFJ7X5TzVh2ZV72FQ55guacVjLyYx8z7SE7TL21ymbRu3Yyd1vSgsWcuCM",
  "key20": "p9mWcuGKifmQLkFEDUPB2RXZfNhA9evS2ZYbakireuQyrrmvr39yWjSbFH7eXnY5xoqrk2z8Tzw9Pe66wN3xTkT",
  "key21": "35F6THBf2JKXQ9irzdVA566vw9ucWY1w9Z1CKLNJQXRc1MLqBdeG7FVrcdfhvoG3RPy9eREAcDegPgsGAP2b4FyN",
  "key22": "9qGn4bLR4754sN6SWw69MgG4izFrRjgTDdJCa7fsu9sXDz9PjCKhHu1NNDWNo5pJ4XbsMzT7KuvJbcuHzgVvjdH",
  "key23": "2HCYJewr5YWHW1Pdut3YAkPmChwuAtkyBDBiwGmf8awXYNJQU9A8SVvZdqzR8ueWTQcyX5EvMExz8MnHC1sqdgen",
  "key24": "3ZemvcBou7qCc291ATRktrsHsVRfgNNRdZGoedSEYMDN55VLdsbegcPqMj9JEt66V8CVbxCcbTBmfXPT7C3aQSPC",
  "key25": "5KaBYqnww3oBF3HQgrJVyQig5RPibtmnvphF67bxuse3TJZiyVQfvpoqoCfBywZE37RYcst2ah4P2s4zjMdeur8Q",
  "key26": "5TA7BT2K3RpZ2jvXCDk2V2MLaB7JiYUxTf5RCsm7ytR2u8Mbm5hoHVVVCnqyDCdz65NSukALVgZd4BGHCaKxVmr4",
  "key27": "3acok4MsRJokHVLLza2niLYRLWUz5cAt3QShbfaiSpp9bnvHko4zDGRrEQDBgb66KJ9eFkdFLjjGUowTmirsNese",
  "key28": "2QWdU94c82fRx3nBvEKttttkAk73pix88hZJ9gRpa2T71VkWhHrJ6mVTpZdGdNukqJRMXCcCRKeo6hJdSJfakMtY",
  "key29": "5durcUmh3f1zs3Hh99TXBYtMALobGJmzDGQE2Hf34BScVvSjVXopR23Q6Uce17i3QUZ1ge1mTxzNhvAkFypTVYBz",
  "key30": "4erPJzksGHUoGBPFWSUiFNbqc2KuRZuPvVJtiJsmp9EDPgb6GTy65w4Go36ZurRyAowNu9EhCcVzSGSxz1HEFDAX",
  "key31": "3CSNFQWU2QQUkekUoRiX56QPa1jrignqqroF1TwR98KosYy9M1w183QbQR1PZFovSzgr8D1DN19UebiXy8A5LAQi",
  "key32": "29bLmkb4XW292uByZq7xaWTn5sKHsV2NWDWHPRpPHvzzqPc1vq3vXKFUAy5GhHExaPVKk3un1Lgq1LcC6t7sQtBU",
  "key33": "215BCWj46Tjwk5mLNoLfcLURYEfqJHUgEKUBgQTxy4snCE628w1zxakR6sKHHmXy3nbDfQgAoXwHQJg4fqGN9EJv",
  "key34": "5oUyV1iuSjy12YTAbxwvgBAvzY8JB8qR5yZZ2E1q8QG6GUhwFi4AN5gZqdDjC89DqgQ5kjm8uPhF1i6t81s5Q1fT",
  "key35": "3dE94hRkyjQMEkcRuNDke48ayBvQXaeNTJiPngmn53gdjJYWCG1ZZL6vDgHwT7Pxz1pLN7pGoHH9wLNBTjQWTefC",
  "key36": "JgDNQhaJFaaFPCcYbm73qQMCdYL14X27FbLNXJRtRxDEiCMwpik47khiSUAXYuovNnnFF9YdWBCam7UEsJ144pG",
  "key37": "pCqWUN25gPd7UPh4EJNsjdmyjFvvHRqTRLDzNG2fV2qGEYbJQhVCz5rSqaUgw6244ktbepu99tirrSpGJPYvaTn",
  "key38": "3xNGLSvNCLPdd9jaD44o5c4mWmLGi7Tgc3YeBRCYBpwRL7zwCF5pthkH5pLfX8W1FRY2BLQiYwrjKYVpxtQHmc21",
  "key39": "3QCwN62MH69SVLkdjwqeXAXZfrZJ4TZtSUMBykjPRZAPa78rvhPam1sUbTGUPaUQNtpde6z8ZvkJZjdz5t2df5gP",
  "key40": "2iStRdVn4tL3LpEijthLMm1grPrPKhuox5s4ZZCqFeU9v6gzr8djL5T3vqNM8o7SZRixBSUMdtJHeWkAwkxiVubj",
  "key41": "QB9ZYTB1SHHxbeJoS724JdTjccKJMX46eAo2z6zUCRXP77R5GtJLfTNYWsem2VDZQ2wbsJz1TJER54d3gapt1Gt",
  "key42": "5Y6xGPd5CAH27yoxBUN9ZfYS4Ss5XH7pDhzx8Nd92nbV5QbozgFX7Q3xVw2WYteDovgQLmKprVXtw2cF5MQWuoSQ",
  "key43": "sKMF8N9WnrGgRbjTKnPeZd8gtHiGSXeMW3JT3aK4JJyuweYGqrKLCXYFzTpW4QEE24zxnoorvgbAWiyqbuVHDRR",
  "key44": "2D5bSX2zyrYTmcr2dESFgYyagmLTk8mGjh1q46ceHWU78P6YQ18TQP1qG8PB6hPgJnm3GrbErSPxxPgDbxiEsMSy",
  "key45": "3c5p1HyBfFe6uYwbUqeHM4yknvjL8ppkWYoVBBXyrH4HAhpRhigXDdoYwku9ETNGmWYaUXGTMziVdddAviCGsPsk",
  "key46": "4r4Fk2UWZYcj91PaiR4QZWKHE5F75AQDyfxGogcfQ92a5JKxtqBBPQYMpoQkbu6XtK51q2trNqLdkG2Mn5UmJT11"
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
