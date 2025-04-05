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
    "2XnnRpi7Rej1WQjjE2rZ3shYW79qySShRBSi2KkgKKYDX3V9CfQXEDKxg8JChgHSXZRfoPGHUy6sRcz5QG1DCb3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cSMGV5UdQ9KpQDSzmWoLs4sXGnf11bHszyobef3wqbqvYSUnRESGhyXkMLpajxo83Quk4CPRy5YkryP8MU8xqwo",
  "key1": "2XNkxMBeuFiZqfJx7FWioszu8SgGtMd7PbBaGAgXWfuUsdYz37YhwEidUgPx3bgo7L2PsAdhiXebVtYWDUSgigbk",
  "key2": "57tzJvkVtgucPQDHDAGYGd4rAm3UffE78ACS4rtdHwdTrVxDeh3ihrNF2FuuZW52dd64uFbNz4pJcauSKzzC5LUu",
  "key3": "5zM5H8R4LGH7PmGMnVyvZgoJVHTuegVgEwabjTjUptqyuhUtSiPM2Uja6qTvgxvjAmUAPYJfg6rbmY658Sdb6npY",
  "key4": "U6SJAXGwpmgjLNf7qNsu3fi5H5PL27p8Nww3HX4sDrNYzQFgMnFdfrN9hSfWaeHXe7ubdnkCwaRQEWApfkt91Rj",
  "key5": "4CJmzXHF9gPDXS2eFYgJTfwVu2rDvJgXPE7gUqGGVDbR1Q3Tc31KNex7yZv8RuVrVn2RG1QdWHdEeYBDREytMn5y",
  "key6": "4wDLbXcWwty8ArrDbfUy6aEF6eLC3NizDyn8wHYh4YzF22h5Bo3GSsh5eV8mBeRLaeecX9BBPwBLFQeBZXePeXRx",
  "key7": "4ojcebxiA1jgBm6vCLvCM53pvth2QayVmbsApQunMuuwQkSmfzM6xiuFRrXCrhC1E5Sw9s2kR8hodvoMN9ZT1BWz",
  "key8": "4K9PmkTx6SzRURzMzgKhetrTJQpQvBdGyc6aVWv4en1tnTbnnoKB2uZmEBiSwdgMkGvhJkeveaqmLuGC6dyV8TKC",
  "key9": "2tnUuNMKYtFAtSRw7vpWLJ1m7Xg9dSwKmH6Ta2dFrrrzy3jA8ZLSiVgx1yM7UAD5jcgwjMXdmwfHZ4Xf6P9Xa8vq",
  "key10": "3EZwPVjpNCu95AwFYarUNbb1EatB7igv3Pd3H2714C1w7WE9cj9unxZ5GkQCEi8TMetHB7qQdk2Kg3nUSZj73ExU",
  "key11": "5d4S176c12HgZD15VMAwaC8WWwqsmyoQhriEzwSRD2HRPr9Yt2mqjY2i2uey6DEfvw9Pfm5xsJXxb6AEQFT5GWwY",
  "key12": "2tSgn7RiSJaWhqeRwMjWWB3PrDQxrCar5Ryo83rBjM3z5m9XGmM6YjHT6JjomjHXcrdKqcysyYUj8GKrRxjRadpt",
  "key13": "3cpUSyHDZfb3cb37FnhGRN8m14MKocV8H333u5vodm1yXxMdtWxA5GDUEP6aTN21Un4DtNBhZ9pYoDV3oqgU9hya",
  "key14": "4rhU87x98n7TDPYbYhPuwNDmueev3iR4nutNnM4nuXm5kN96KExjYXiT9ckSnPeLoMHtX4wNkCHfw83t3ngDvWmA",
  "key15": "6pcyRQhaD5cJh7SjbXh4d9J9uXQP7yniX98YSwPpUf2eGBpBA8iKYD7ACd8gYZXUBW1gyLkC3upuVse4p3FeG8K",
  "key16": "3hsLXh3DoazQsBC9jA1Wz7hRPmpDb5GCmfp7kEQMYEuihG2nuVKchm3udC72UozQTGUQyoCAUtwJgPX73BaAFUAv",
  "key17": "2d1LYeRBJUFhJZ5hn29C3kt9rPPUCNi1W7Jqn14tmjLxPUyKCmFo8Sbn7wvGWr69Rm1Bi8BjTxr2sxX7FPBaJGpB",
  "key18": "5St2iWzDq4YnXJ7sCGNoHzhudyJpuk6FQa7xAPyUp6wqn3TxEJoeUyybHxgDCC6cAmTcm4L1npK4U813ySaLvvma",
  "key19": "5wLEaQwaHPrCAuRxpnSWdnF52ytS5nGgZNb8Bz1MmPHHLkUen35Py4EFAxEqpZVUKNfcn4HNNPL9WD1cqBM9s2Lv",
  "key20": "49bUfjEhcCyb6xueUHBEZju1TvmDVUAoYHHSTuH3QKxN5Mh362BAg2djs8nH74ZfkXo5J1zJfny1vpiy49pHesbV",
  "key21": "3je7aULLu1d5JtQ9YixaC4qKoa9RmzsBfmX8oGnj3fhjFe4YujmACp3nAw3XaKeSSWNh9b5zwaj4zfstFiLJ8NTJ",
  "key22": "5VGeq8xgewuWWpS9JyRsR2U56E6HvbNksg6zYDyKm5FzToZiXjUFRcCKnAwF5taTN7Y9iDtHneACR5wvA4f5ffBj",
  "key23": "9L7daqZU77XaFVKti2VGtw2H9X7ExgRSAVN4skbhJfY9MW6ABa6RhV2gvMQ5edkJ3ajdABWoUU3P9Jg76TULhVU",
  "key24": "2hHbjR2ugn4EdcMAinHbSL1D7DGbV9spSQkyo4fiqik6wHG6m5QrxbnQ7ioPuixfzBmc1QfaTCHVZkwcMJFb1Sqk",
  "key25": "4jz1WH7RPsAG4ac3xCPYW8pDWzUhRmVWQpHeju7ATBuTfNaiQgohpZkXJvBENzHPnrPtCUVcBgFhxjQ1K6ALK9Dn",
  "key26": "2DBMF479cuFcSh29jVenYSff8te9oTo12QWnk57rkCVh1SLSxyBws8aJXX26VJwpjVGLU8JGvemVLre9VXrVp3Bz",
  "key27": "mPKxjuS9GBsj84m3YKPEWiJ1UMYGvUnDLzArXwfCrmYCaYh6tt6aHUgF2XnK9F7FzrAi8izYH2cpjT3o8CzRgqE",
  "key28": "j97Sg8onRCPT7vbxgcsTNXJzVoeN58eivpsRV1tskRxDUXCo9T8uC33zv1WYzcmKQSPav4npmrz61dqPJ5Ssx4p",
  "key29": "3KJk1WMdTJSESsbw5ayPdU9hWb1j7qm1BHbGRniXbwAE7qdS5iySofgG4sT826E9uUGUH54fK4MVL9YExcudjGvx",
  "key30": "8yaatsweWVqqUuL3hnxNiiiF5W2TxB67NLZ8crMXQJ4AezWDXwJwns1ZBAx1bCgk3uH8692w5nxmAbxDwuZRYs9",
  "key31": "xWENd5S7fyZgidnC5LMqadKkvu3DL5pFJyy5ZR2R8yHdwpwMbo8mfmdc94EX3mENndvzbQovdEegCjgxaajejwU",
  "key32": "4demrbSJU7HwenWEfoLSWC3icj2zKVNuTetNqchveiZpqjajrgxkBfduZ6X9624zYQ43z9b9pXxsMHAFBHTa2Tv5",
  "key33": "sFAJitFASxhQfGgowzkBf9wHmW62v41P5fFHrJh1GrdhP4VKPYSCmuMx81KMhnd9nXANjMpkBd75bs1ESZXgpok",
  "key34": "2298wk4bnYb2a25R9FMQMcB8j9TrtgcXqMAALLtABfPzTfcFeJXW9RmEkVRYeT5t7WC9FHVndsyr2W2UJiDP28jn",
  "key35": "2CsPTPHESNpMCirR52m8vBh5WSp8HaV8zNcJK7cuXKjJ8ykLGVDGzB9GWE4zhXR7tfB2AKcjBwVGVDdnjjtr7MTe",
  "key36": "NcQM2TyypAWoKZLofChhFSf6HdnxCrBVkNNNZPBxBG4N2dGB3vXTQjfJRxjCZJf7yX1keP1oKthyr88FJZkjAai",
  "key37": "4T76yy2ymSM3nEJKiZVv74oed6TontdbD2baeJtZYFtzYBsi4tmKYfgm9P5YPUBTbBxRCk7M71bW47AJefyELu6b",
  "key38": "3T8E1wPpj2Uc2TD9H3yJJ5wbcWq5gennFJZkBHhsGAf4MpsAjvy9tr2ovo7DcUK7vLnBMQHREAfXJvZEYGys41KJ",
  "key39": "4A3KjjLMJoCuCUYk8eQohFPXtgzf5aUuPeMafrrkgyymkDLkamNK9woLQg1CVTXkS3JUu3N147A8sf3RCxHmTDJn",
  "key40": "5iyiscPHsBJdMtrfWy9gKNNGXfSBJejorXEitpS3mEHKfmVzBEnKyV7xBJ6c2X9G68poRx45Pa1Xy8RgYUSLk4Sr",
  "key41": "5ARYpGigkHT5FUxkTJqdauKgiJmqKJYrpoyGSX7CEHAUJVKNtevBSJjFNaLSq2E9yqF3n3Hepo3QA7DBXKWj4UhW",
  "key42": "5GjG5gW8V827VhBMRMx9RuqgTtuyQyoikY5GKsdNmMJ8hx9tUcQVUAxrkFbdPh5Deb8MrY6JoaFU5fEgk19h3AzZ"
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
