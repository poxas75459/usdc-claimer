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
    "4k4wCzBJkPEeDkXFF1wdwJyGyKZrWyFRizjoCjZLjt7Kz4m6ktMATpZTzY8gzrycsRMVUMdW9s7kpp31BufLCGqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xnokduubvKX6kGGHxQSHg34gSokVjaj2T7CA9qPJqGmRcTsjpG2aZaSTkoozjNx7fBq7j2HE2V8B5jJe4Nz3ALB",
  "key1": "3GgPXF4ft1bZP8pmSfLt9rrXMcLmZrLhNka1N6Q6KwP7MByqEkJfN5JAp8Qcnbfd8yRooP7tbshszwYDNjiixUpY",
  "key2": "5Rd2v6ZwfBWgYhscMYhmAxaTUC3VTWXtBEvhu44KoyB5UbYUCwq4nLzaGFzbvXEDKTHqhpyerJdzw26FgQ4qkKRF",
  "key3": "5RXnAui3tTw1PVCxChfkLCu3wwT6sbRAV33xUPSJHJwtSHcd1QERxBLLePdAJn5cYXyENUgpi8DDpMdtcqTXTtDZ",
  "key4": "344k8YfUYApzi4mJCxU5WYPHuHvmFBzLGG1zHpbGZsychpy1BSq2VHd8WNqKz9naLFbFQRCiHiKHeMQL4ac7snkJ",
  "key5": "fL6GBtg4fRm8d3NJ456vyaG3FGo3KGibSWGxxDTi2u5viYw3Zqf4WRBiTWtALRvTRBpnwfRBeg3DvWZXRhdVG4f",
  "key6": "4RbPCpxNUcZkQuhj8tRdD8nkSse5nJGBKxst12vqGEPCBb8H11cpFySNvSut6wKotmkZVutJDvoyHQi3oZ1bW7FE",
  "key7": "5ujafP4uCvDwGYMtBxBQ13dEjbhxXkEq88iYHtJDncvT5SAJZza6U5nxbcEDXZE9V1Rm5zdKXKRTatipJQnEaNdW",
  "key8": "5NTefxVGS2RdtYHH261rYyqDRsMVfPYeBWTrioYnnksjpRTUEngF2q9Ls9iCJdPEdBw9sZ861sDFTE7MZwDopnME",
  "key9": "4uVGwqKfY9nwkuPCmRhLTsBxZ1oWiqngo53B2c8nn3LW24aqarW45kBguzMqn28n1mDFvUsXpgbGUjYX5r1FcTxE",
  "key10": "4wXGYbDkM8MasSbK1Fsv5TBkSwSGrg3w9Pg5G3YNYLWT9TruetSX3pQJqwDumjTuVjZrorcxigNzzefSNSJNgzt",
  "key11": "3PbtwxCctK7miNQVPgKnb4JSrdSKcSv6N2dxP391PeK34L9sjgMGoRCeFCW8LK2YxToFsPoLUfUVHV91aMiFxYvh",
  "key12": "48HrQQctnXJ4eoPjTcRQHqAy2ENPQYyMhf2HavYuV7HdyYT67rucTwjnHpnZVSgMfgxLrhuuNvKVp2ghNcJZJ5Hd",
  "key13": "2r7vLUqhxQbzciBKHaMBeLaBxJNc1JKRYot7cTfCeSZimz5e4YHoyTs8cAFvMohHw5HZdWCUemrzR869p4wtihpu",
  "key14": "5cCDL5NQaZa1GGEWmetwLQ3t1AWmWDA1XDcQmedwUmxXtzpJsrsqBHvn6cckL4QwKtGuB3RAWhmq8s6hpHL4EP4g",
  "key15": "5udnjybn3gMLpXze6p1X2LLpazinxFQgPZeCxfiUssZMk4cQ4vFxwvqzCF3CpdGvPFUeAL6QuZ1gbYaLkKoPKJXV",
  "key16": "4DCAnSj7B8K7sNKt6zpD4kJCbybgi62ahuP2yr8ebobjeSbnpincpgVzpYZonxQem4ZpWHxccEEXbLFRZeegMS4v",
  "key17": "4yWsepa9k53W2htfME9DtMkY59Fe3YakP7bXAWrmNMyTvcdxFbgghHhmc9Anqt3itxJYiK8gbskWTbrKT774yZJA",
  "key18": "58gDSGxUQ64jGDFCPbfMVtj5wS1zTtYWJXJCsdEJRSyoYJTc2w4wqhTUYaHoqNou5BnFqzTARjKY9Wosj73SRLUA",
  "key19": "5fVhLEi1tj3G3CFrYKarFhZHWktEEqJ19FAbLgdbgudD9YniiK4dFuyLKcYzY3Zw4dxeJyY5k8ToZR17sh1vU3bA",
  "key20": "3vyNgrTeSwWEMKpcZYmJfc2Akdc7qdtJzW8amLYXGHS3BAAAw2VwFstrebHSp6XYAe9HgEjaa8aUZCSbTMhNW361",
  "key21": "2bykhhqhZ6Ghhtq2wePxtMWBuTUXTH4pV2mQSiwBLKvvVbGKFoJ7ybDr4Cd556Kth6KQFtq4b6PQjxC3pBgD1vo4",
  "key22": "257yJFTFjoMar1pZXyrQ7yL6rV5yoJCEGM59k5rFNiefa1iQa4NzD11jBMfj7QLnF4xzyaQ5BxdkGbiDaYvp7Gg4",
  "key23": "5CoJy8M6PNNtFRHk94mKWgECNXSZXn2MCjTBxN6DZ7pdT562NJhZN816cPS4BsLv4Vr288qYRiYbXA7uK9mdxKjk",
  "key24": "2WNB2F32R3a4ciRdnau3AbTMz9qzEQGj2A8bKSnTiQ1H8QP8MK5Cs3siWXXQyGnGZZ1yUXiGhG1hr5qiNj1BYgXV",
  "key25": "21DJhUcFxzG8ATtvmcmZAit5oYRZD3QhErXZuhtDtJjdowRs85YD2oPVpt2HAE6vYaoVfiJThPKZ4rSJTPkQYAe3",
  "key26": "62Zdxb1ZPPfTH6KdxuhPYW4qTW4rUNxn1vyVyquuxiyhYfBZxEm5EKmGPpSfUcpw4Din8sEPQAfPsHpEmwTyE5ma",
  "key27": "MGKpgXHmBSv1NCU57Nb9d9u7LWu5JFtLgziBhBLyuSqkSKKbncfeCenr149i8KRF5YbBtDbLopxpmCGw2XQgVZQ",
  "key28": "wgfXz75PWSWvQd7LeowhtSjmEJkKt3JVLceboxdjYDFGbbqZkk6NHSQDMNPgdVWZEH6M2tyQEyF4W12N1yTw44Y",
  "key29": "5BoHRy5t7ooNLPx995jhLUFmYwuRMN7w5PEBsdx49SrFJGMVi6tUTFguHHNaBC5hRmCYZssojCoA6YNrSBfVBmzE",
  "key30": "ZFSMDCg8TtSuv9aowRPxne8afrn8CVy3ZgWkkWnwRbwQtYuBgF3xLH5chjtmpcCBmkZj4BdMZxxNauKfrJSseNP",
  "key31": "4kdUimdFsegrNPc78FByzzW2YMho9nhDvR3ToCX8bTPQmuTg7ZYwuiTmd9yUfipzXbU81djDwW4yvbdD8TdcUoLN",
  "key32": "2Eeqzeq93uFix4j2BxXemGXT4toN2mPzbBe9Xw4rJByXLtmWR61ynexaLfNtNJPB2AGLa2FaqHUEKghEMtcGnzjr",
  "key33": "36b3jxNcruCNnykamGC7d6DKxrsYVZriH3LHMPGKRC2jUiMsxFpuuhK6BfhYWx2rckKQwQRAYJQP1zUTcBLCCVqG",
  "key34": "63R16bJGssfBEbSduPzumskS4hsq6MEzj1pgw7Ws8oW5kUqZDGyVL2G5Kn3F6wdYhoBydMMiMvrUxsww6KzWxSFA",
  "key35": "3n8zha7QZLr2eJQ3ouHPSiGuSuXmgGDehUVopEAtBxYc5w25sjCG6GQaJaYESyjZJK1WhB2z9nvT7Me4SyxGxqbD",
  "key36": "ULi5erAE3rJMYeMbfGsDB1vGg24K4RsvFVr6sEeRU9EbkJQS4fJXkrjGfHv9G93XfWGZMsJFR3cm1vTDk5euuB4",
  "key37": "4iQ43KWTZqScbw1zmUrLTx4xsq7nCw4joC4q9r3oh5QuAdxUBBFXbF8Yi1jHACXXLvxuuHRHkbAxFHJK6kpUNUNq",
  "key38": "2zTMpBDALi4nqJiAM2HSYKbyDq8syCqtEuxThL6Q8fFWGKjQXgcXqpcmQ1ngg9ys4KFAJYmPrxub9TQCLLtV9pND",
  "key39": "42C86uAFVXbkWhGSQc7EQbqKSS95oRG45Qdw4HDNWT9GMze9hVM1yQJJCv1Er7fezWMM8SpjcGrF7njQpCNJEuBp",
  "key40": "58bJSoFHSnfu8vgpLqU49WT29CUZt8kAdB5KPFmXgTvwypGkcHoe1WRDjUDLJRS9tUSXzUxEsrtaMTQ4huswupen",
  "key41": "56nVS9X4tix3JtmYQUZu36dLS4caek5d2bfgRgbrcAvqZtfy7v3iZ8skcm7JyNdUiD66RBPCFPF8sCxGioEQesFS",
  "key42": "3bARDiUJLax4AmNzBkFAX3rKhtM6eo91kpVV1eRkHNUR2ozSy1hginSbTYB3R2xixMwAahAMFE3oBVVzBut3DYKY",
  "key43": "2kuhbReBZbz9xtcX5VVzF1T4eb8FftfPDJgxwcS44R9kXeMFUjdgtrWf33b6fNPwETc5nvQkBiheLErGVvtaggG8",
  "key44": "3bA4CN8FcSbcF1PvD46vwvDsX9As1MXxhs3C513Q44Zt1mwVuZmQiztGixMVCdke965iVjB1wRWqfdHfqCKLcHcp",
  "key45": "5tiLWRyZ7rWEVt56Kwq1rjV7kxLU6imSddaBexHKzL3CJpJX1mdFKddWqhqxsoGvYS6b1HhYZfSotusWx785AkoY",
  "key46": "4Wox1vxuvDp4W7RwK4YLLTW6HQTK4P7qNveYmUNCBFQ1Jnz7Sd3ofhY4tLnceX5vvtNnsCHyvBfx5d3KZFYmfzRr",
  "key47": "5RDpSfKmvtGp1fBY2Qdb8jiT7Ni72E6Fvby6gqnAxE1WNkRW3ES641Zyo6AFcDsxaLgK2AMekP74JqzBYVmG5bhr",
  "key48": "4MdgkWrFqXPfb24CGSbuZ2JmrPCbd5oc1mJo6LCTkLWxFPyssbNY4Na3EU6VoMvYGGsPjqMjVT4wufp813YYhkJ5"
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
