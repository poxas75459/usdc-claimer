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
    "3MRSs8fj1QY5VaVAsc3f5r6wH7RW4jFRn9cTU9QimiVb8BnKn1DEWzSoADwzjD3icaJQdtf7U81tp7Zi1AnR9oB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NREGWrsEsh2cdCSY2DyQ4n2Tp7C3tPn8sFSzd6wkwzbGzHpXURyYub2Yi1M7F2ZLZk1FneeD1WtoUy8MBNV51SW",
  "key1": "3wtAzi6Dut6sG7dKMiPoAt1enQr7jGwFvbnwMjFquWbko391s7FbS91PN7DhM41C4VD6hWUH1Nv97hg7qg1vMdn",
  "key2": "5TQn7oyVrTrCQKNZ6VL2CmwJFynZoUQ2d34u92QU2KY8okziEFs2YKBickyQ3UkiZ746SE9RxBr5mELb1igL7kbm",
  "key3": "393yarDShff4mG2zjaG1MbjRKqunLorSbgGuc6AMJkqBDiARGWpQvnPmzMkfXr4FdG3uD8ELvKNVw1EmmehNtLTn",
  "key4": "pc7kGy6JrkZBR8TniqeYTGhdAZGNsJ8AqFwe2Fo51FQnMVBS82jJaAy2moC6MBaSTaD33PsCToc7n6eH4nNAbxE",
  "key5": "4r11QimSfKAyfmVByTvbBkuVZrzS96jgwPgG9QvcMpqbkyBJ4GoVXrpzdmpuazhjd15aeypHXPRdWydtkncDeViQ",
  "key6": "4cbRkVMc66DnitBDt5qPbgq6sj3QkSJVy16EQLps6xH7fh9FDkSfL5TAP8AHNcdnXtzYG9EDgZf1FJM5yYsysVn3",
  "key7": "3jsDoPEwAPTnKoCkMJEJYLq8ofn8b8BbeXX8eYc97Ww213VajPbm5jNsX47fNU377mQxT4T7peESHLW37svcqM1w",
  "key8": "4B7vF8EQ2hnuySaNf5GRnBfdYymAwpR9X6Wv2fQJDS6TSqaMubugZr9Zir72mvBeeH89hU8Z6hjhXPjiMuHbfdDX",
  "key9": "2xfMZXxi4juVmu9BF3PdfYzoYvtWm3euuuW6RyxnQEHQH2rzSdiMTVrV38LMMNtKJrbBFLSpHUBSde9pTPrAoWCQ",
  "key10": "wHL556SDRxY2iDrkSL4zgiLDDpsbhMJrmBoQRV1sVY5qq25tR6RcKpKTGZtBD9H4MQDAWbZW8zpRTEaQK6HMy89",
  "key11": "3Xab3hHwKdfYA2EPddk87xm2VU34tmXRWaWoDbQG4DieeLtjrP3GUBAoHTeSFkwicGvHLHsKVvdcn7QWJUb3KXmT",
  "key12": "651qGAfuAebJ9sJhMZmnch1rchLFviWr8nACfnyYpxfqtfK2wy7Z4UVTqHPNDQbnJabqT9RBhnzEyH8ZbfDJcBnu",
  "key13": "5LW35XFErFxyuJcNDHphMVXAhWxWBUUdR6Wn55ZD55HRZs8LzYnWzgQd6cXu58X3mDhXS1r4PEJQNRVwJ62NjQk4",
  "key14": "5Q2W4mFbqdkriidWPNrPi6Yd95Ehi2QMe39SPr5xHn2ciW1C5jAYTwG9gYTFunss2UZQXHwQTk5sxZaCCwoEbfEQ",
  "key15": "uawVxSabQrbGy6TaeCjzVNi6tg6eooNocRXwUpg4kjgqbXP7ebcyLNWCV67wdkzAjCTLxm3RUXj3oDuGNqQFecG",
  "key16": "5TeVsvg7kzRVLyhgkSUvWicBiRn2KZnhXn7PoPHrJ5qQvzDbja31aVMgqpxLXXXUgeuimuonYuZgWwAvtzVP4kT6",
  "key17": "4br4czV8G7Hz6TdndaFnyocUcBxbEgyyx1bjEgzKrBHGLf1n87H1dJNaGdJMxqtjCtAnFMcfgsuaAaLd6Gcc8BpY",
  "key18": "5pGxmrM8XXCLTZZtuwgCrLbbERhiN8nr39FqW6J3PrEZ4FHvjoFv4dfKvVP8MsHjPcUzPhRqB4KqCwjkjaR6fPRU",
  "key19": "61mBkkAAkp5KGrTano5TGB1q34vXf3qyPWUKFEra4WRYBnHpfESK2YtasqLdEHAHh6vtEhzPS7r9GrNSKw1PmiBh",
  "key20": "67bKEQ1tjyqq5WeNNQ47nutvJfhtWUa1GWm8w196NnFgTJN9PsYyh8yNaQwPkouWNAFkf6CaRQw8vq7ZH9g8ARx5",
  "key21": "56en7FDP1rnNzRJBcHTnihAWEsmBDcs1THj9EubipLPH7kzBTVZy5pNUS7mivj3wPxJNgBTXZmy82bsdikUkNgVD",
  "key22": "4psPwT82tqysuiVKXwxKHPPxnZ3AZh7Go5NgVn6n6tNQYpwzeTizeAdBRsQYa6RNSCkYy81hkW2jkA3pf2QKJWo6",
  "key23": "2oR2RZs768Tcm9d8m63eHDmRu3Ce7CETg32RPez4PSoy2a2YPHabV4FhXAFg2zX1wraMCqPyWGgyXao9JSm1y7Z5",
  "key24": "2RrvHjVyptvsMhFrxApC968HnAUFbCtuKYqVcVnc2C2n67puurhbtRx3PKKyemJKvmmbacdCuSWHm6697WzSDVtH",
  "key25": "4W2pR4iHqBA6vv8XU6nnderUKimLRqhB5tVNhf52yXjusFW6JbQUan5MhCvUnNMJqsuKLMLGh7QKWpVFyTxHaZtF",
  "key26": "EsSKoeMJYqww4Q9pfwTrSTfrF1eVpAydAtLqLYK2xPApU4kSmxfaNJXQL8ntn8ZNRJ7Mhxwqk4HapKiKSs6H6e1",
  "key27": "5m5uMZp7dXSNZenKopgRAz2v3gzi4rqyFBUzKUKRXFa9yfpsWbWZKTzRAA3QifotgDDLpgTzLJdGs71cJ8iuHhoj",
  "key28": "65b4Y4qabe3o2LTb8uP2VxhKHQXz4df6ekA2y93iByAET2iQTBZWy9g31EQ6pyvGthRntYnDjAtwsHtEvdK3onDb",
  "key29": "41Cw3MEeWjeDYnev3v7hiMc5agXMWmB81g1xq2DYzZMHKVpNhX3TA9BDhBJfV7xmYsQUnHbXGQkFexR5RpKyw1x",
  "key30": "3STvkHjCmhBkszcWR39gADmWSSJZaLXRmUDgmQuzRYxFi7KG4dNdhKXrQF9HbV41YSfGdS9CfsXxbxCdbhRCrUdd",
  "key31": "5SakWap2izwDtnjBjKpeXNxgiTb914Ti3aN8HySGFY1VGwqXtP6nCQibVsR8CwAK9c6wwSmW176nB6j78Npr2HVg",
  "key32": "5wAYjj66RDLSursV4Z55fWCNE7NTndt7rVvEQ4EZ3z6mzH4Jh6hi5cZno9wfqQG9Ny1Y9bCxp2CHmAGNuvmULFHb",
  "key33": "38sgSKN389hTDXjfFraMXoeudJWzHr6hHzjxnbcW48R61ygk52YD4LFYgYZEARhZ36iS8182EB84a37r4FxxMJqN",
  "key34": "2a88vYgtZRQWbo5roHQJCC5pEo9sKrAc7xDw1FGtyYNXL9t8wLuVMbqHfnbHp3HzPvgUsAcsY6rV6T2wSmp3SaUv",
  "key35": "5tq6G4Dm3meLVj7LRXPa1BmRgipb8qZZx7eRoCtUbq1vRddEYEMULKGsqY6DRjwmbZRPa312hY5WMdwEdcxCuZKa",
  "key36": "GZegHC2kZLr8NtnRDdKc22xWMGRBnC5vi5ta1ppKF2hL8nYq9h5Z5SzPrTfha98qMgZCUfQffaedzWeLuRvBA1E",
  "key37": "3SRxvQcrJPzeXHQ1gG8zKFvCvqn7UYkJUZhxGRmLGvdwJ9efq69jNbMnwYiuj1nsVsgnwLvymP7nB4GyMqNmKoTe",
  "key38": "3tV2kL5vZhHUSoSPHgpzk4PZ45x9cNCf4D3um5XHHu78wvUHpQCEm8x8dVYFcBXAR6yxmQf5ZDNrB615U4UdAVnd",
  "key39": "22cbLy4ZHRBuxRg2m7ysH4np9ApBaPrhiRvMkLrUpUmNcYPiVZnCDkWKrqmqstF6hSLrJ6wFhtbTzQv31VG9zFsq",
  "key40": "5i7QuzMbHrdA2kkkX4iYGDRsnfxgZLVCUzcjyTWCUbtoqsoNAtFHXnWBGHYHq8mGhorhXNqiTe3q33XRN1afGni3",
  "key41": "5U9qqGvXK73wjAHXLaHznecW3mkZcPCo2hehbLimUjhhM5nBULjn53byKuT9zc3pEFdiLZjtZ5H2x3fYT7uqzTev",
  "key42": "5JZT4DgLikjZNmZ7scWvEvRVPnPt7pycZFEqHA9jPEkM5Xu2QfrPYZmdYGMqz1usvwGahY7XYYFpo7MrLWk1WNbT",
  "key43": "5FNLxepDgsxUfVGszXGuvF5FyCt9BK5ccjpSizD5bn6W81DsTPbC78msubBahD6qz1e4tqELGnbbcxaRCMNADwTW",
  "key44": "31QLd6Pg7DdTnnT3FaMhx64DoSc5uMUPATaNsfXgh5kBweyN23GqeVkeXmH3Eytv9HTBeNrpUpueSzocGAUgL7ge",
  "key45": "5wHXmKSrQwYh1XHMt1xksTBZ8eqGqkmrSnpayV5KcdombeHQaPtQrq1DUogsCGLmQ2PwVsyk8ExrRDvmYD9BZ5NQ",
  "key46": "5Y9F7AUfF3A7BR6i4zENZEASdAmrsTAhf58Kt8tB9iKFoKrWY7pTcuUVA3WsG4qoPNUrL67U9wV1dq7Gb7TsArga",
  "key47": "4dE868xvqkLi63zva9c3ZqhV9hnG6WvmN3KtotcTyxJNz2zQEFMxdja4ERiwJNszgL1h1uyW79GpRLGR8qX6jBPY",
  "key48": "3Rzjjmxz2cP77huBs266jgf7oYU3q3zqPgUhJMRZ2YoxmVm14jvssBpeek55y1tGtsmBxQ7p2oeLWucsWfeDxjgF",
  "key49": "HdUUxmDMubotpkc4rPfCVDq526oLkFp5cjqZkVRb4DthzhreYwsdj6thAHhqJaAsCfvGkXfKiHpkn8wG8h5w9Uu"
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
