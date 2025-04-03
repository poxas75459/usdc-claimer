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
    "4iwfGERKy2qWhjMVcZVc6BTVJdRkUHTdKFQSc8VGFeQWkZ2RpowEwS6qkwkZGrAqhKXxar9viUdNat8weKzLc2J1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BNu2RJJKPbhzm5guDqG8V6g5DXF7wHwv3B5jL83axtsiFod2A8uhVfoTvHdSiPVBgSsBy7tNV93xr7xBMBzgSrT",
  "key1": "3HZ4feYyB3eWGQPdVegFHLGHAWT78hX6W2oNg5W4hwamBT4c3jsoeRpu2B86LQyhCjmrQicAsY658FafaZ1LyaQV",
  "key2": "3MUSou2MhD7rvC9NpmXTo25hVNa4dx6tGPPqG7CAwGWy4nQ9NEDLb1X9YoymGq9airKidGhVzxgRPs8Sar7DBcPJ",
  "key3": "3hgbsAASiG5hpyuyHnmukQksGeUwbDP7i7BSKQxH5g2nCyFPCMp5UApz8Br1osEtF2jiyUfcszeeq2e7pSM4nqjz",
  "key4": "4YJx3K7VQM9JH9UrqohpU4NHXDUh71qcLPDZb8Rcfpb5hyYw3suDW6gRDxFLGBNTydqYmjYkisokqprLit8Lh8G4",
  "key5": "5Gq2Fe8KqxJj3z7cgiTVxNuwas7DojqRXBGpiDZ5ZUBknGj4xFg2At1SsQgzQsV4JR7hjcB4uJvDNoLj83iKNBGR",
  "key6": "4Uc6D8pCAsRjtmbgAstxGhuzThVcjdtqeEj6gYCdLPYjWZD7HnhnbHobcd2PJNg95BaCnrVh2pShv9TkEZGuPXZ2",
  "key7": "4TCtvMaFDJm24hgj6idXFCse9ZoA57VVvieMdFhPprdgSsMBG6Myh79xiQ6Gq2SgxqE3AS9q9bgqccpeT6CSug4F",
  "key8": "5tyMbQ3MZ5evWLdXGpNdhNsgXzRJMkRvGMPRr22v2t1GWsnWR5ZYaE779WhGHSrW9oZ1z1t8FmJCfZqQy9FBJYAN",
  "key9": "HmJPouHPX1UZpvXmi1Dtwg1MU7Yv2w5DF4soJ7Fat2YJbk8BKPiDWzddHmhF1WjgpynhuzRjNzb5TdftEZNA3Cc",
  "key10": "3yMPV4vhyodWxDrwaBnrG8vZXa7jWJa2UyVFBcyhDuJri2JfPk8i8UTdMkEK4tH3phnezyEVVRQii1K8NCy6JEZV",
  "key11": "PKmrq9dWjiz1F8dZgk5PXzYGHqjzudGbRk84jQoJBga5Fwrj9HnQanrs7YLquzv1VmYmLzBTXqFWHsBgQZNp8aZ",
  "key12": "4L6z9PhkTJandGrHGbA4Pn1W7QQtjyzWqcGDaici74VsMuvePrgRHyZdVYBfJPnpg8bWi6m7QZjhyMkRG5AXxMBq",
  "key13": "4UpCj6pysp1tZXn46kCtEteUGEUvxjBSDXaFvjBEpKkAMSNGWRNc9jW9H4L9pyLUyXPpFQeV5yJdJ2jFxE2bE6mQ",
  "key14": "67ofEkCEevyuX72Vzd7kiSXhXYEnueDK8AiJqYb5ejPqwCQD4JXrPoptBZjsKWFzX3xMELeyofPfnS5e9KXSbniL",
  "key15": "5QEBMhysxQPwazxQ5vCviRd1fgmpgQ24Gc2Aa4rnz3bGZSUZWtNN5JNNnD9wvYiFKuYSXrGknYiNdVpQAcDkncdx",
  "key16": "3qHjaa8yettD2N4qb7GqPXeM5cNCZKT9Wk4b2rvHdDFfKQkKX8eEt3Da3hMMthT6yxBEZvxxeXNRz6pmj5bpEcp6",
  "key17": "cqPSQ6cTMyo6BUzCzVpa988B923w1RrfvporCDBJWHZ4UegZPYwyNsFzh8ZiPYRvmZSZ7AZDMaZftvNFYBxY7X4",
  "key18": "FPatNQXyUTwgYuti1CnPLQ7Bs1yCMVs9ujJAcHHd3kmQxC9itRzAhERGjdyTBMZmts8nWRu7fyGcGrtFjkXWC7t",
  "key19": "5kgprPASKKpCVZsW6Ak1Av26LBK6ab7L5TcXYXNQJn79MPhgmKyHKNU9koM7MZmvez6Pd6EqAHGHZPhJ3cWWPZp9",
  "key20": "3Kunje6FXaNDdnJykTLaKTHHt6Y2e6uToSqkFDxScRiAvWToN6vL5bT7bzhHMMDY4Anfs3V6E27eo61aBCg3phUW",
  "key21": "523LobX4Hxd2Hu8DZEeYfisDNd5XNewEtzi83ZY99Yb3c7qoPgGmiYQnZNvKJTA8BAnSgksChAmVG4DJTZ11pi7Q",
  "key22": "3Lha7mP895wMtVn7Ph7nfsLupZ8SMcLjcrWie1WB3xYSVJqaoSV459MMtjnRnaoxv61rgu3J1tXxYPmUFr6DASao",
  "key23": "3UPcJLzBt6Hx9WYPsZ1VEyHFBdAMwqogGZ1TrqZsAmXpvBPQ4LbQ8VAE9eRVU9YQqBDQY2BybSGtAdtjm4Cnq5At",
  "key24": "3HXmW5qbqi2fNHv6S6ABUSWo3wLaCmZ5rNVUtLncwyKU1SFgXGk3P8MyKmXa8EHkoV8cVJcpUcupHoPxjfQkkHTW",
  "key25": "rDNGE3pUHGT8vKdcBUSiBQo3KHDA6wmtH2ihtKZ8ErNRpAzzJ3rmkDMzuTU7Gg9AMSeuhKaStt6CWMQRFxmsvfT",
  "key26": "51ScKRbQv1C5A1YbHD34CEoKkW2c8t9NhB5fWpwof4oGihyLZAt4UVuohQGV4gHdL24W35Q7yW4C4FyfStJCef2N",
  "key27": "3QMgXLDkyYfGD8Xj65UpEbyRs1r5UAxX9vVwPd8x1Nk9eKzH8tmp58pwBe8RyKsWiNX7MokoCQGqNpz4JRVmyxLc",
  "key28": "4BoBhfMLftJCZTkR1gD7M5sf4YYojWnDuxp4r7KLrCF2BLrWABwpdDoRynq5b4zmHp6rSoyLYVXhC36KNEW3nWpF",
  "key29": "4wSZFyPExGp5D7U8oHP956tonhUJh1msJV4RwG3JDLPvXNR985j9LhsbkfzibfadBxQftis5fKk1KfAtxarbuesS",
  "key30": "5AKY7B1vtt3wyrZFRuxeeDn8Wri2heGNVRRXGfjfQvmn51E3cD7sMaJhRAa19jLr3tYjwtUM7oHSpxkeR9hi25cw",
  "key31": "iLuVHiRoyWbehpNYxW9XEYT8oHdLHYsCWiXRFvLw3QubH2zHpz55gTKHPLsVh2iLQbEAZR71RAqjBPpi8YeBWns",
  "key32": "4iJfCghz3Za71uYa95PN3JNyUxQHhVr9MPvdf5k7Hk4EXnC2Zv5gJb1k7KnYpFcxUkK5p241pzemnceKceWTjbAY",
  "key33": "58asBxkdVxkCEC6ejK9rmAdXABnvrbjGKcmyNUSvDApjMt4Bc5Tu798eH1hh6QbpmWHj8Kcxh8pf5UCrwLsDqwad",
  "key34": "3EkHYaLvegdvRgDZmdbqesoKvRqguxdNeY1NsDdgLUjH2mwfn36WFhFRZryPWN6G6KqMmy7MqtNQoR1bL613p9n5",
  "key35": "2QH6u7UyRhXoKbQigb23TigfxQozvFQvQCr4g4uPtRs54TLPJzQJxL4eaygwM9hD85F4oobqya7fsqVHZTh5EM9H",
  "key36": "8Gf6RjAWaqXPkkhkWvJMT1Bzk8QGT7ptsU7fp5f41zmFLo5ibkVQkxEk76RaTa429QegsKJCHGPP6JcyrQeec4a",
  "key37": "3sVqWR3L9rAXs1FfyBQHnnwor51QJnMZgt2nCW1ZfczCFE1CjxHu7P8KVAUWCXsgZAiHhmyAQmPdXwk6RoaeAv8x",
  "key38": "31jo4FA9xJEySFdqhnAMnKZwvKvHQu2G4N41THA9C3oLotf7FCo6aPdRPJT48oKZN9Mq6Xv3DhP4fs1LzQ4HbMof",
  "key39": "2PZbBMNS5NLduqHwS1oFQwPLu316T8wuma8VT5ujCDCYCVbtXjb9Hwc8VRQAZZBwBRm8EcAb4U1QbdVFUznCe9RL",
  "key40": "4hdw2KzSDWmVKFrPgWsJRSnNvVRFrUJUfLceU1fvBwfFrhiUwdoZxhicEyUuN7CtkSJXyf4AMnfo9sPTo5NTFCDL",
  "key41": "3EDwDozxYLssMZ2XjEKWkmrPKWtGwciCHfrkhtzFBi6kM98rgFTH7hRSHtHYwnVLysnGEebG4NUncuy1zDWHTi8v",
  "key42": "3oxcV5DvypqfA2mRJQRu5ceCP9C5UPaDgCjoNi28FB6RVfG7tnvB26Q8x6yzWvYxVuTMp3UT5xhtsiMai368Xkah",
  "key43": "2zz2bMz3ysdJ2kxYL3FMca6zpfhoaF1u6Nr3fxHS87kvEPdFtQmTEgQcz8ohD77KQWUUWS9MkqWpLjngg6Fc97CQ",
  "key44": "3YXRfGhuPwU1JMUYinqny5CHCAMT4Dh1Rzfq4R7YueTborT99U6uW1i1suMEgitapDWFp48CJySavULCV4WxQZZm",
  "key45": "2LGZKGuRs67Kisac3Vm4DgoxLVt4cQxmB2bSJ19QnZzXnnJnE6bGn6dqYPXceX4reXtLAQ5x3WoxdcYJqUEVLJDr",
  "key46": "8sXc7fPrcXdxETF6Jsrdotk8hP5GCRcGEwWLQtaebxgUZG1m4DknixEudS8bwx3t8t7rTDKaXxKu8xbye1Qm142",
  "key47": "5ontYDo5iqXjXpjfC1ita7bRBy6rwYGAFU52vK2GYKN21Lk14reCoHN7zPP8CMNByhDGCw8yWEgKf8PLLN9cjFg8",
  "key48": "5yB1cdp5PkPE6tPs85tN89foPaPRkQZxzzxq5umkBq2jKxwXrkDup8vsX7GQ4NgwQTWuiffr2bpmhPMihN8cxWqh",
  "key49": "Y9V7zXhQBfR5HnUxjCCvTp6p9WN8MQbkcRyczNqjhfkgUmg7nGeCGpiUgLfSjGbq8NpfZxXnPWzp5KqpKTaSgaC"
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
