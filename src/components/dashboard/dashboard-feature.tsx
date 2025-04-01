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
    "3vBvm1oxsuvZTXqpvTqX8VUYDJLKsZVcwWzXZqWbAXgqUDMs3XwAtXgnhgbfgCzqRuFgEvw1cYv8CkLrZPNCSp5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36GCUKwAcoVCVgVr5ZK8hJXEDADsCKztam8Mob1xVphjyvytE7vHnjCY3Ex3BfiiR92dhGUtdR8GBhnJ2uooBA6t",
  "key1": "pfNaTiszJkAE4atHhG2WUAwuqaV3dvPoTuG7cqJXL8MVBMR4mnYxrfF5TKJTENhaZGdC1WSEoaNLQXWSkbiP3Rm",
  "key2": "44YzDyjDSfT9cB4SXTLGfg9kqbNDvRYKvkteye7fLBNhDqU7hxHoMDDce3yTckHEWS1yDbcQJQaYQfY1mnuUihmY",
  "key3": "3AVst5MSNxpNug9z94tkPX6Uo9CtPhZTRSDiRVLxbpLz7NuHdhCZyb7TwDRLGDjMsWmUQYMDtnR2nA2yFMeMeZgX",
  "key4": "dAL6FYmc6sB4bWdNpJ3JdjntxMaoYzCdiuEk1zDMj8wGx15z81M8xWJCKVYmyDfAdAdDZY3M7wSwQmN4NqZWJK9",
  "key5": "5Wc1VX1yuFJAYNGGZk4HGGqTLPwoBWCN7q25n2GkfX7RvYmRvhk4xMzvT4BrsJ7KY8aN3yW9myF8o7MBwgpvMdbe",
  "key6": "WwjHNKrorDi91Ex1YmpfaVCvacZKkZwmK7hBkyyTixx1xCQvpWxtNuic9kxTh64uPscRDjRi9JFgogeSZ1Uv4eZ",
  "key7": "42wzSopTBKU3CpuwVYaD4qTd8NhyL8THNESfDybuU2SM4FrKP5NBw4ax625dM4p1EFNZbCkpcgjDbzGy15myQmZc",
  "key8": "Z5gQXm2tzQ6j7DcZKQVwFNKxH4uedYUucQDs5r7mpdPUHiUoLibWnrNw9Wnnktdxxm6CUDE7kjEkDT4R3WTwN41",
  "key9": "5uzVT2RBPZYJmmByEZ5eU3g5AEio9WqjTDgFpHTvpc3n5pvivtozij3HagYRvQGj2QcisaLizfUEQeaRmwve5wNV",
  "key10": "5ibRdfvD6U4ncR1m5Rtd84jMyRuixm8n7J8fzUqeeyBkpL5a6wEdMUQ87bqGtdogpWM4VQ9TXHbBB8FYtJGQB3pF",
  "key11": "3diguxczjRLuJdP2k1kpxYiNVFSZQrefNb8Lgbco6v5tCDVAscek6cDKUx51A6pTfnnzzf9MAh3qiSFsipsZ1Jsf",
  "key12": "5bREW71nhCsHDapQohEpKBAXYHe9u1ZC1asCuGsU1EkbtDohxKWQtDPm6zWrVj3aw2WJuBHCKUWeFdE9MCUoa8sr",
  "key13": "4hXsxsJpAu2vUWBLwLApFGPKZ3cdbJCUyY4Zh7Wz7CCYoznMsv7MDhg1gBuwQdyBSyUzN59Ghf9wur39BnpVwHnY",
  "key14": "KRBpRygBBTCmJL1wd87gKQ99QzNSti1sQXc4ryYWqS4R7io5zmKh38sYXfcNeooYuyxpQQ4zMEuwHd9MgHNU36L",
  "key15": "43BNUJNi8DGLiyaPQsi1VJbb9q1Pmq5JksDuum42ydJCnQfz26B1bHXpERaF8MNwz8gm9r8T1L2kqbVKMF5qZkiY",
  "key16": "226v7MgcELTg7zGB7Cq12okzfVdxYbQVVKttxKz79Ct36Uuydt4EWxpC5jMsVdP5Ncxds7oRrhoNnKS9BMRjfzWA",
  "key17": "BKXim1HzBV23ueYfN2PAffSiCw6paZCohiYgtkz7bvCCK2Uu2qc5MM439pDKAjL5NS1Tk2LHh6FMnXNtvQDeeaR",
  "key18": "5HguutKpqvHi17SxT9k3XtyVfxn5GsfhHpXW4CFLFvfLCoGGfuetzcx11fuc2h1gfUdGZVUutnLUTfoxqPy9fYir",
  "key19": "3JtBjfVfexF1PphEobTqEa2WfZ1EiFq3V5PrGSDvcKzFxSoS4T9ZtqhmMNUXq1cNgmWrZbp4A2QMDjmcpEax7mWD",
  "key20": "5yhsrLqhBQgf4Mc9gZ2x7TxQMwbbQts6ZZRy3u1hxWoMi798LXMQ5e69XdkpB5dmfRpo25EkoETsbSi9Z197DCDS",
  "key21": "5NJfTrKxHeY5qTRs71ebPwG1uT9FU2ayqb7rS987RDoB7ESdPCS5qLwV3PhWibo3HyPYd5qHtJGVoZemyDXuro8V",
  "key22": "4sgjSf5iqmHMQg9vArQRi4nnHVmDVga3AjBY2xiyxTpfhDBrnbZkxWmLFiRMnGsRSRnQNu5qdaobXHGZTWda78Nj",
  "key23": "4iiBX2uZcXoxYxS2PeLZJ7suNSsSJ61xxSBATXEXGhCjDya9nPpT1VwWM13AA8tvkp6FRmubAaxUDAR7U8GpSyCz",
  "key24": "5HrMvJdi9mg5bDytN4ZEo4bw78G2jzUpxYLvDWdRdqX2fkFZx1Tjm19TpP1LgNZaHd5VHmP83K3yJEUJEaaPTBJE",
  "key25": "3rk7WgjAZC7BTkFyRHew9BWLu41GqC5fefssnqoBij3TC2q4PqMm26uX833vDNyjxm2TKDsZzssLgAwfDBQStJEC",
  "key26": "539wnxFrJxn2BxGxhiqxeWNfs14abGgxr7sh6m5Pp9pCM28ed7NAtVwVPEYJ5hWgG8XhKHAMJdV8iraCv893wCMs",
  "key27": "4gJqeejh5eeZWQiQy1e5cxL8W9NUM3HDqEPDc1JirzPjzVMBr2kJdPmS3eXDU2rxfvF6XAJpda9adoxPC9GRFdpT",
  "key28": "wPiugq5VRaVxuWrpzW8tkHX5ueQxqpKPfHrKa6aNcorwSXtvMJVojyi4rprUdLYdJU6qtoLTA3sCNnAg61DtWTf",
  "key29": "nMN8RMQkHEp2186zqjesPmFAhRjHMPX3DTbhPX1PTD9Eax9sZVgrvmxCxKR5yJesgAtoHQnmSJ2BnD663BqkZYL",
  "key30": "4xXFapyd3TYRFkrA8vvYYrF8W1S3hDKZxx5yiyUW1VVSVcg2rL4bL1ig9ZYKNneoGf3uCRvE6pheQhrq1bcKumHZ",
  "key31": "2gFNuRNsuRiEyAu8khC5P47jFTNb5gXQL99NWzMrmEppHJrxqDU9dhJJ74CpoLYEHGWT5Yr91RegBL7B9LoVV9Mw",
  "key32": "3XEoo1KSyBNTPfVYAE2mT63YERBdUwPJXw8PuzHap6RwjWHNWRnN21fPzPNcbeQurNN97vAqWcm3wq9Tzkb3FV8r",
  "key33": "5zPqAtvnbayDVBwYSsVkxE6eNdpSiPJ7CAbzpmBYLABhY2hMa5YQ1NXwzpZW1uK9eiXedHJf8KfMA2mbLSDCeRir",
  "key34": "3QgVBGS6ATz2fDde9nRNBx2WEmcSxwrMiwXJYKgFzSYxtGogiyz67RdAUh1sFnavySDwQVBL5r8bQ4faa48sZuA4",
  "key35": "2nrhEs4XyCjVNKpjg4FvS9jPZ2punQNRpaUeZDFH4opuxu6a8pSp1kRgtDPfp722QC4zjcSt94gjkeFjHBnw9fxh",
  "key36": "3TtDnr4pvPRSd9XYEAivoRtyhJ4Ju2jQsTwaLREjLAR6BoRHRvjo69Vtm2X1vqB67vWWHmeFMhMJEoafChasGjsz"
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
