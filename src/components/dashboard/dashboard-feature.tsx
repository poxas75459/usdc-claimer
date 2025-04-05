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
    "2uwW3cdDFduBxstCt5r8KeVs6fSmpJBc8TJLh8EpCxxJ6SVN6gdKxonyRyc6Z2Bor3173D1frpS8zTwfNH9fTA5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6CfN6FijARA99eWQY8dNRCxZrpZFQHKoGr4HF2vbqqad8UuPd7TjxQdprtVdFnMtwNcNLWwdUZokdgas2fkFLm",
  "key1": "63deTeyPaXGAGxmgEGVjnAxN1iBn2jHopRM7onCKcJV6r8hp35mmu57HiqToUc91RRxcA8VSEGVNKrzNHyyjk81c",
  "key2": "5uaL7FhhNPkizPpH5V4DcXF1y7PvhcCBHgLDBa6hT9gVpm6Us5r5PyozqwRo2zvJidjKaV2w1yruSPBk93UddKs3",
  "key3": "4LD9wZNbVbRTemFSPMqbv2pzSUGL4wVf7YZhrbep8tE5BmzjnLZcu1UD1to2FmSC9DdMbwgsbDp8NX98VvpMNSR4",
  "key4": "4SBhVSS9484LvHubYcwjWv9ePh9PeDhmLgsW9yD37nr9hx6qDjq1xU1eibeALH3xiQzpQ151vXqMmnwBborZCqqi",
  "key5": "4vqMJM1kDGqZpRqDC7dYKrkpLQZj8o4oZLtEhd2ruonZiydWoqcjsSRHhrnK9HxF4X6538SDfAskBC6X9e9fdG8A",
  "key6": "4w41q1GUyiCpKUKrJeMYFmFWA4DvEpM78fABYPYARr4iVHT9NQLY7cLgSMYxHFCpPZs1NW27A5Yznz8i4JjrVgV",
  "key7": "3QgC22FEhkTi1hTaQoMUxkSoKUPUpr6MaurF47BhSX6na1ToqtGBByqCnyrw14Bk1kW3V9wxBWW1BgX7G5H4AHfc",
  "key8": "3UoRwsFE1PdXF6pdzbaHraEBWdEG28oL5qzPtTmdzZeB21BdJTBZ34sySjCPVnKc3T2BSMP4zAgBJdDmk1hgn3BA",
  "key9": "SPMfNh51chhEcaSc2c35p7A1FRiRngSuJh9zhZtuj2AaSMAji6dccSKDi8f72c2kSyHHeSLccqk8RWmXv71Sknr",
  "key10": "26U8Hp6jPwWRcZ9AukXYRH8ifyeAmptkGPqJH6r3ftRYn6H5Z5jJDJnxghX7phyQcV2crAa4ENKFt5nKtckrFyUo",
  "key11": "xxGqRjUiZHZrfiAJfuVdYaqWerJbGuhqtnQGL6Tjz5MyDfTgGLWoV2FfT9ou819SUvw5xfznQZqsG2fZgkKxSDY",
  "key12": "5RYy7giTqKmPL5gZFhd5gfVu1bKZJxx2VEoHY8WDW2M2FSoXr2KZkLTpPqSEk96WYc86FPW84pa8tMS2qE6vTKCi",
  "key13": "2r4BoV9zMpzBrLZr9iaujjAoG6gfXXcNtQkTGkhNYGofPvBmUrVSMRUC6dkTBdiEohHcbKxL7376b7rMMw1dUSuJ",
  "key14": "3vWXf2qNbh2toDqiCGNLp2m18eu9SaysekcTuiUW1hWACpxUts6svheS8a4STidQwXHY4vsB8zrSPwT4oUY4PzZ2",
  "key15": "4e3BxiwWx6yEsvbxUvAfZyKL6qZUwhR3Sg9Dy85JG8Eb75wq6HzBN1eZ84xjA9ZBeC6V5ktHsc6uqtqYW46EPJGR",
  "key16": "4NNDSFjprcRKJPJJi4RAV6WMb7J2ARrrovhLTLzxwDk8yeo8BCJrFzgQaKS1U9iF1zjwRjxHgmtjeNJi3jbxnf2o",
  "key17": "4cjEyaer8Z7AgyB5JrJXmf5SkCp6dZZJ4eLd4pQ1okmgSwWcUpsFRgPLEWPWhyN1Dkrd6JJ5ong7zH5Y1QS2YxY1",
  "key18": "28tnWm4xP3kXybMBDNjLU6tT4UW41xKvTJfEuq2X6KjKaTMxBUXePzHkZYMSqQkhjHT6t5T1DuE5PU1Nsn8DgacE",
  "key19": "sWFCDgbm3vJpRX77CtJA8DLCP2C9rSSqHiLrWjX57DZ4Q9Ae21wSQVBKPizA4XFgeHDTRd4isEYeECEgMAmbXoM",
  "key20": "4FhmQM4nuTa899ogzwLtvv3Vmz2X7qFLHZBKuSscfCuoZZmufNNTxgYtMtY2HDmfukXDYZ4jLsYRKCpXVHkLYvAZ",
  "key21": "5iSsWRdHF4FpUVeoMyFy9aMaHv8WMbBNY325VUM1fRA64JJ4ZoeBy9nNBKnuG1vTcSLbdxiMEKNnwTBKCcSJnB3V",
  "key22": "3fbM8SPMiBXBttNxBHG9vNiFEkQfXQaQyd4BGzfuwjWBjEg13Zn9mza5UagKthAZcLzo5rB9tnmpZ8oHWsRqA577",
  "key23": "8uGFYRNFZy8u5hoc2R93r5hDwUUU31CMzCNRSWjQejrFJ7GFYTPoX28AkfWLA6kBnJ4RhNow9mc4r5P1ZGLDySM",
  "key24": "5YS3gWgNUJc2t7zPoGhYQXaL2hhpfjGprtSSQkRPF8cjz55q2kg6CN6ymx3u9diwsXxMpUoXc8CSe7LGugd2MGaG",
  "key25": "5FNv4mD7PMJK25PdrDHqGcDTY2b1tUAvK6XRuZaFypWsLUm4wURrsQh85WbXr6pvfqf2wqkdeLqj22f667vJheGK",
  "key26": "5KCf6pBfw3zR37zgwfYFp9rxy29RdCsCCuZAAKkhT4KJdjGsAoVDKpBjpZkbxXUyhLGWYLuc17mK33bSWtFoohgv",
  "key27": "48AHcf8xCr6mwSc34ztHPBnmtN4rFjwrHzwwu2t4hqwRZNMcU1keKUtGhMJnrdu4mCk5DeyG3RenpF9f3cqLFuNH",
  "key28": "2Ei7jj4u8HKisavGJzMox1Hq4LVFxbfFh2LqNSQ1BC9jSZ56zsJRhmwLrsyPAgkQUBpicuogPHBk6H3P6Fn5ymuq",
  "key29": "5W5M8BbP17HBgQ6meXcaDaZWwrYKpGwgsKVBNLQAqnFY5qPY9G1QTJ7nAmF2fktDBhd8Qbrd6zRgjUoENndHjovp",
  "key30": "2E6nFDJQ6uhmAtXsPqVq9MusXBBYjBEgiEJQFyBkmhExX82tF1jLZ3pM97oYFy9tUuxs17i8bYG3ppwH1tYEXEV2",
  "key31": "5BgwrxVoSNBjCkJvNuhcDVjvNU6TodJk27Dq15UrtLbPSLNMmYFffaRpu6RRwX1cr298PPB16vBGCNEYCTTK2Bpa",
  "key32": "5j9hf5oU51o3V24PfPFsqTne1pPYRZ4v8L4mbr9ZEk9cLLMzFonP8J2zYQn3nFqD9RmabtdjyRfEspvJisUCWLyi",
  "key33": "5KApALxuD5iht6KeKzfepfmhKg2JTSnHtfq4WKzKBVajFotDbiPv6cKXRJXxCjGBKv1ygmD7UzHKFZds44hH65FD",
  "key34": "3MHUQ4c1r6EreR7QvgJQK3taHXuMmUX9FTtHHky5A28JGqWABGoATsxze82KFg4PnWneARB66jsn33TebSeUTCSp",
  "key35": "65YoxNqosut8hg9VnskLCdkoUBQZj9Jv68VrWruntQgzdkopwrSrFVuPedvc9PmnsSbK2BBukCL29M5jfQBqSQmg",
  "key36": "2gDXJsAyFPRKdeGNGfXsGgbMwAn12pyxtdJWdteMQDBRm51oMpj1PYeWbYCL4kSMNS93juzFjNWLxFL1fUxmBUTr",
  "key37": "xTjwhtpSXZK7G9SwF91LMV3zN2s1ae3fBWhocmJKfQgtXE9aQr11HbnhaNHSs1zVQ9DxrEHry8kvRNSVLpWA94A",
  "key38": "4A4Kbm7FiyYsrkscmrMsBMJu5AwLv3XZ1sb8mEeQ6SuaGA2RsuceCr4beB7xwuaRk8gKwST3MsVG8pj4HwjLo1FP"
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
