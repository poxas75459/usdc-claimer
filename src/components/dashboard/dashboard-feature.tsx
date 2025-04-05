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
    "3PZZHBFURDpD5mbD57vNNh6qZRtQgu2mogvmApSao6kzTPbdBfCUAo53DwEqTXUDXM4ThhnJCKzsuZcgoTRRzLbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SXBMmvfcqVaZdZKoZXiXjF4YZisvdAqSqvxevpjnUR6GG11yDmWv5g7xvBsQkpRqvLSCWqx3VCqsauVdVWTb8bD",
  "key1": "3FwUe8Qw8TcWkcJgNgUdXHyTFRwUCfKXM9vAn93e61ekeBjP4XUG4EpqeLS9i9BDyDDmk2vMeLjPcUt5BkKrXatS",
  "key2": "2nW6jUBvJ7vnENAyFGTgH9UubFc1MUzj3pP4yA2eyyfhdTUx6NddBDHgrEwGtYRdMQunu4nLqrGjk4j4MMaJrLJ5",
  "key3": "5cXx3SVe9YHTnsTYhvsKbAidqhZ5yyNmA1bMcLi6eeYZbuhUbftiitbTGWXA9MMqpA6drvRWF6y3vjWo1wTABDf9",
  "key4": "21spd3QSFLZXUTzGvb48jae1k3T6nv5uYRVSrqQPj3U9UAk8qwtGaoP2A8LGcPE9vFAiQwJHPKFPqpL42tX5XN71",
  "key5": "4wgdhcvGC823kK8SjPSzjrA5GzhdWKESCT8Q2Fyhsf98UoUrPRtUWAx4xrBvvFV9g2Q8ZmqruaYC62nEink3p6q2",
  "key6": "4AxfukE4ry7M8dQEbuHM4KN6AXT3G1tkaEBqBRoeqM6gTYqrfoFA9t7PGKqbCj8t2eBJcs9p1mU7oZTYfYb3PwRQ",
  "key7": "33mwCbYVPvSSuVuzGMCLwGc5vqxz9VhihEPiWTDrHEunVWogopzJpiGE5fnQgMqXvW16au5axzDNifwWQvFSut1q",
  "key8": "22JNenrgLH1WiTcaCBDCL99wvCkBvUaHKUFTAXtctH7DdhMKs9etMJekT9nckJetBn1pvh8Ns2njRRHWhjEvX18D",
  "key9": "66DGKZW3o7jEwNN7cBhExNLdBSgA2R2oh2fqFwA6c8SVDamwrok4Cv1b5Tv7Hw5hnSbgkZ1w3hmYsZYTYUVBBWLc",
  "key10": "5zKarphSpYvvnYVTVWhkiva5jDrrcBS8Xn9VsKLj19MVFe4rpPVsazJEjfLvfgXSkZCifRrd2RvHK7RaL51fMN7n",
  "key11": "2RkXqgGayC6zhhF4e24dDzedyigX2nRemZdr8UeZ3m9BkVTjMykcjLzSTS32Szqfc7DqoZ6Tnsi3tJ89rvrg5q3G",
  "key12": "vPfqZ9oePTy9SbbhJaFPsjxRwcZ7TqTvc1yDEQg2QZAhYSXtzKYs14wQAxrMYea9uZ1iZMwD4qWsTdPHp3Gd3kP",
  "key13": "2MHM9tWy3JaFJJqcLytWPEWEwQH2a8JC1GEDQgh5TwGPbdtDAGmRKzu3ka4aAVt5u2xCtkEK9JwPP1vrVXMXssJR",
  "key14": "5xjXJq3fNCG9iRpifQsB1Mc9x3F56K4uPiGmCfff4Ca4TmeL8sPLpNir95ryDDzwfzSb11NTKoAZjHD8PyTrSyLE",
  "key15": "4m5b25SKSC2vpf2aREsSYirMzhwXvsPz3c6dxn9MBjwPLmGw4De5SGbnGTJTbKNyDNuX2isyHHyoqM5hu7mFoZgW",
  "key16": "QSQLomqK6SrS4TmR28LH4A4YqWGrsMdjGtPDVUtZ4aUZVuPGRwipj79Z5kTc2DqmhoKMxRS59kHCaj63m1SyRK9",
  "key17": "srS9ndLrmZbC5T95xhmQgcVjwDi6kCkSQsVh8x1vJvNZ6WcK84a61x6HnZm7g4YFbfdfrTydiBWmgPqo49Sv2Tp",
  "key18": "3XtgmgVXe9Hfr9Eq11Bx1ukRDx1hCVga35cyynMgqEyoRJKpVnQrrqPFxnvFtbCSiXRCHo4tk68rdQmAt2JrDXc1",
  "key19": "2uDkAtjhcJZs88g6bTDPKBg6J6XYwud6SMRXg8Xe9H1YDEnZnFN7kL55DM9JjwD5FG5nxzwRVrYmczWBaP3e7Mbw",
  "key20": "2iXrj4tXZEzJtQv9wbqTfcJ4iFEmjpmtderpNQTRSa5uqd2UJRUTbfTinFn7C9oktNLBrVBxJTq6QWEEgkqevH3n",
  "key21": "3aabk9Agy84CpxLwn7MeCRuBUELdwXMEXW3ktwq21k1ZNu74KHNvL5iPx5umi7gmbFA6YptRCufdkdhGEzMMCBxs",
  "key22": "4CH36enWkVGynSrqQauDVDJiqpgsrdVXnCX8zPtuHb9dLMsjkcDRDWA14ULLaFgJeZupLzY1q2x3vggfnzQHKGn8",
  "key23": "5hbkkJeLiWDN7G5tgPU57Do8y8QgUiS4ZK7aA7mjEU2bZRe6RXY5VXwWxM9dk3FLhN8cgH3Aj7RpxVguki19LitY",
  "key24": "2C3GmdZaio1c6BfWv5HDDnpFJ1AERd5aRAQwAd1QA1JzfAHHyhnDewkbbncEpJD6Ls9rcnvNGDHnZZfQNPkZqZMM",
  "key25": "2WLb1kkoTDUNCTaxoTgSRh7paKDUZJ8FWVLXKsxgBVidfoJ3e7w4mGsXwHwe3ac1WTHcnrvE2RaAS1JkwzNJe5M5",
  "key26": "48AaiXViJWBCFN9mDCJq7cFRSRboJzwq1tCFgWJKU6MvnEg2R4N3z6qs4A64AfmHghWTzrLHHH39RpVSF3eZLG8i",
  "key27": "GPDwDVgYigRaKCFa926wyGpjjqJDYNtgb2bf3q85ZLDybvbvA69ZLukdK3X5876MXsMesJuWAouuyEMiAYZUB91",
  "key28": "2ykiB3CHTDyxoTntnKQpx2UgncHDPQG7TiH8FVPHh7BceUuRkM9Dhp4ecUoAXtMcgxuFQDm9LYVNZvWJzyGc1nKN",
  "key29": "646uCVjD92xpQQmm1rJ1d7pAqR6z7wFYHyUnACcLiL4ta2XFGgGEycz8PzbCHhbwc9tUmS1JTQzopR46myY7Kby3",
  "key30": "4zY9s3gw4ynSjZ76edaXQSj8QrNprpUCzjFhoNp12iwFCZw9rMFiSeexgVS8jZLPZKbuT549JTz1DNGrc5fTwpyD",
  "key31": "5Kd776spzMQ2zViiJThKWLipokwzVeJJiWyXBWL6QCDQpidfspcVxEJMkvqtCL5vuCv86ea5fWNUwXNVFgW74Vhq",
  "key32": "3xgBCTYGThpAHqbdnmUQh2izGnLK1PL8ptaMrsNJ5T9VZgjs6pLS2kEuuws9bV2CyHPzFtRUE1C1cFZPC51UHj68",
  "key33": "TvXN5yBP9YFcdoAxhPhkxZfgVHf5tnBbYv54fMszoKFhqm7MFb4TMXRk1RoG5YeXHEifJ3C9siqewGgbaxUVnNC",
  "key34": "2JwW79wnz1tQouEqvW8nUjiWHthNRjEwMx64N7BU5bPUxpR8TKuMEWcAujCwFqvWGKjYbWwXe8szhRVuvFxauzYo",
  "key35": "p947fCwNPzJ7mPKCoqtBhS1QFTiqpCWSRXCUbfV1D6VTyttsDuzKBBxqJ1kN8Q77BsCqPVTuZYgPLVHcNgnifs4",
  "key36": "5hjBriGWr31gqcH79of6FUjEJCCKxr9X8cJPguPXxL1q8gB4dSnpmAiU3Luhw6Wq8FHreBKhU38vwDwewcPuW5LK",
  "key37": "3ocT76t3iaweSwTWsVUVRqnvfV8BqbCSmPQYidf3x2PGSv6MWFs8KqQJJgvKyHsqgqiuYWRZTSyvasbwoAjQHRo4",
  "key38": "FjfskdSLeHmpyY5HymujXEb62yn9sDn6fwtC2PJZjxnb4VeAQhjyAGjjt8ZK61MHAmLNUaUHBVoU35vbQi2bizP"
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
