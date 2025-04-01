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
    "uMTAxg7LWFyeFyRPqDN89q8Q5scDs3DpywfTVhj2eZLHUmJn5Xrv89Mifpm1ceP8BKu4fp4k6jafpcckuMtSiHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RiaG9na7SYwYxxa2Y4qicx7JpKKiAjKxmGjHjEieA9q3m5BJ9XfUv6JwnhNHei8wdZ1i5ezWUsTyj8872JUpUXk",
  "key1": "22Lvbwf1JuGAVYybX1mUkEbY4kQ1X58YrSBAGmqHcjagwCNz7NzNhk16KGYAZGtqJd6XEi29nxaotcVxxmAd9Qb5",
  "key2": "3kbbfBvZx5t1GKqQZAReHVt1dsZKC42EQJAqLQ2yJh9VPqvQN7LpwsJkpCMADbEvzikkcztme7Ui11LbiENcNNSi",
  "key3": "35MvAEXtS3AouWxMLE8gPeq3eYbVL7U69jPTs5WzKsm2UcXgYsztmqCaJ2Rcr1FrFukp9rFVCEqJQm5AiVCpz3fD",
  "key4": "5hvfBWHuhAksv7ENJZphTtjzu23J9GeZ4ZZSkW6Pw4b6Fu8mxv7kvoZpsjpvBjYrLt8dfrENM7dygnRKfgLuytwu",
  "key5": "3qs3wGKTukZYg3mHx71uw17yBFbuQN5ZTs5YvTNY5NZHs8W5u7TmNcgQvHtVvk84SqfYTguqm62L281icCS8ExdG",
  "key6": "3sxEuDSFGb7z65oy18s2w1thBgnjhF8r8aF3rjc2CL2yVtVpdtwQHhqehEAWt1cneXuvbvunJvkhsgfXQSBFeBce",
  "key7": "4zYP6nopx1XkkrsUQUyciQs5PdCmQXn2twnaaRJWpd961HumrgF9WjPFK7HGoSYvsjEES43CXEvKxCPHcHdvKwV7",
  "key8": "N2afvn6seu3KTCoASw321StAsRQoHXZUmiUGzfAB9Ebk2vqTFyq7VVqpJro8TkPzGoUhqH9eaaJ42YgPKcienRr",
  "key9": "28puUCE7zCVZzhWEHuawi6TzNaiEMR24C2snGBDXYgNNarRAn8pC9uiceXbLnePt5KCEHSg5Gdxxg3Sw34DkjBQv",
  "key10": "sqBDXcvAhBTjZrBK5JvG8JghNKtY8JPdsyAyU2dV5f5QMKL5SRAGMQyKpfwN3mCGp4mzkVsWBYAazEVQVpMZTHi",
  "key11": "3q7oPde7eVBXeYT8ng2Xk83V6zshesMxukhR7o3pTyVUzu7c9uKaYMYs6M1rax4qDZ2xxrAmBfCY94gCKcPqdBAg",
  "key12": "2iTsyfEscXs9DMnjggMSYooFamsneBbGFydAWM6svdT4pBJhAAM1b2i7jRNhc5jcpJ6psxRQcSvThmcYHC4zytMS",
  "key13": "VrsRDh6YoWAJQWR42dLRzgGK3GDt8Eg5qkJrvnqmBFVjUfY5MwZvCuayS24JUvByFQ5ManqXD4vkVRfndB2BkDL",
  "key14": "3AntYMBFTyfkt5hVAoeDy8LrfSiwbLNLmWzH3GE5ZNAaxuUAU8t7ZFo2REVYCrVs8Ch8CTEeHwt4sjTAN6XTM42o",
  "key15": "124AxzVBw7AJd5mCsWaLXK8WP4BLf1jEeeZGnFE7gYFMcKFphF7uujfnDmFG9V4wZAkLNZhwFiLsP7KmsRgcKQVE",
  "key16": "4xfr9B3S1k6iBdxL8s9wnTgWRefRUHEUBRZtQAxuPWD3SwxbbUHauWoLCP7AmG685Ha25xa2cVFcJuskuZ12mJko",
  "key17": "4sVeF3aMKqWLsSsmx7rCUUqdJUb7t9CLzy8oYq1zpNjqYYSjVAKi5m2jjcLYca95R9bjTs7JpL8hYuytNh6uDjJo",
  "key18": "K5ZT6oRCegyqrJ6EW6HNBqZfRMc6qSCYTeZkcos96EnavQoPexz1MTnyHi3VL7XNZtTPXnukb6wYahSNvdGJ88m",
  "key19": "5crqgnzMwuie7S1qFX6utN4MH1NVv75LQ7ycz87jQoWT62tPYnUiSBBs9qcxu4wRXRkCkBjtEtkHkoAgxrkYosuK",
  "key20": "2RsP3JiKptv6VqzDZ4RGETp9et5VKEQgX5JjdPYXnKoAMKgDuzZfuT2VtxT6jQrCN6Kn9bm37wHSQdQNBGnCLyLW",
  "key21": "XwJ2ooYkguVvmpoVSzPenTaBcQtBiDFzR3azJHccRxy6awcHoHyuN963zufEVP8cC3CpjQiM6QYYMvDVVv4ghyL",
  "key22": "5yHks9A12AKmBzCpswRMHTBvF5yufoPfScjeD8iDL7XCLQMBUedpvVPXpag525pUD6ZW45aASFDwjsa57hYEeBcN",
  "key23": "2wDshXtgD99hJzE8up1gUSjcNsisaR6SCWFfSp7jyidkEJ8VJZKy8ZmejSiXzbbnh815PGhexG2QpUdrKd1GUtex",
  "key24": "XAxmKMreTxhMHmPCwXpvNCiqTFK8NZpwkQqQaCNUKuckM1CKgz9gqC3AzPHYgGKBe5XX7p5LMSVmYLzkcZAtxfB",
  "key25": "4BdQvqKVGFGy6ET81WfdDK5D9MRtyqhyYGJNVakJM6DuPBmcELK88uEPvBXGk9sWyimeSDrsrRfoSE88GQJQbeUH",
  "key26": "2wzFi4cVTBJVpP1fQpQ3YXwfdJynn2KHA5iiuDXSv77r6GQA2341vtgkXaonHatfoandgamUCgAR6VJhtdQAKSy9",
  "key27": "dAnbhB5PKxmuwcdkN4Xes8besw71UHp6GtcuKijw1XqPQ47iFDsovMn9ovnLsHprgBrG7iazzaLgL6H1LCCGLve",
  "key28": "5DX39WV2jXiDbHPr3nKZ9heRQZxDVBwSkrfC9N8yoV7AweEdpg7qxsuXmPdHQuZLynQutGH1hrPSvQTYJ6PwSa4h",
  "key29": "25SHZdA4fqSjSTgJ8wQdXu1R7JW8TFp826g1NHJR41aghzvMuUoKzzJH1UgcK8C46UxLkdfrHNdzpc8HwZM78cjM",
  "key30": "Q3mZnYeTzUdbgdxVTwFu6eaJfnf9VuzzuFu5yQXLKoVS3dhX4uVed3ySy4KgbAeKr3bJAcrRRsuPvkiHL95ftNb",
  "key31": "2jq6NK9bdEDhm7mR5mtg7hKYigd6Pzav7zhyA1jXrjorn3tXGgt2FtijqZ1iuBe9oqYhXFvfZou4GcEPEtDvBiDY",
  "key32": "3KrZFNo7xCi5Mu6kHeVUZHFZ8FHgtE5TVmNoi453AQGTohfKiijM75Rg6Ra9WnSaeQFboqUdESdkhKu5omun8KtW",
  "key33": "KJcjG7ZNaH4pips5TdWTXvoEXH2kRmEVR9KExBWxTfj5UboH98ZCnknZbZpmwvKF1YSP2DW7rd5adtqWipgujjA",
  "key34": "5wuNMVcoacjykJ9qYg5yvZZzDcepyqSccPJbERbCD956g7Y28fC4QCXXMWGxawm9xDPXqppX8oc7ZQbuspVgZLi6",
  "key35": "2xnLhi2KxyRudM1yLuSoznwfs2m2xHMPVY6DjUUf3QLKzEpzWpuXi73QVPKfsm1MJWY71XLRkKcoavHPeqNzC5JC",
  "key36": "5LkYjoraPq4wKsrMPgCfYY3VPdQMhSnuztvBLk6WtiYec654xd8fxT4XXRfhssd3xEujkL1RD9wxXJHiAJA6G7SX",
  "key37": "2SSXaXGeGCJur4RerUm6nCYxVn7sixHJgVa2abT7bbfxCorRWn9vpZnxq9err8r9oysGh4kNbvYv97TH1uQosBe5",
  "key38": "2MucvuZ7JJF4dDdL7mcfDg27UuJdgVxHFkJ1iBxvXQNRx6pXs5JRjUP5aLXtJxF5zbJ4ynbFJiswugxBQi6WTo49",
  "key39": "4oXtcbSfYpeSzBkHsgN479Wxba7xDLGsf66toaezNXPTqSSmnPm2XsLZxzQywWXT6ezKstUieS1YUMSi4VR1AqSU",
  "key40": "61yk2hcsZY5GtDVfCK7VfcUMgtAGqpRSLaYs9Uo2tCDbeknubKD41X9iQ8RxSdeo5iZLLSYHZgbvW4FjA4YkjGdJ",
  "key41": "63AZ1F5YR27aGu3MSbr5PNfjtf85zyhQL2xvhhxPpupfWwG7w4QitzWwfSEP4Dssq86yFs19GGrqMfWRWKaBkkGD"
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
