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
    "4yJe48gS5jZx4WfTzsPbPqGnchDKTwvMTk6xe2JmRcfpycptkLN6K1ParCNHeHhfuCBLv8UU3LbFPKShR96uHX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wNTaiQsdVirV1EAWyza628Ve8E8MAAqgqqSgiUhPWYyiaQnFb63X5PgKTbUDZVp1Hxh2SsrpZZRQchp8hGi8Zkr",
  "key1": "jwbGzLjEoaTxG3pzxvoUPmYtnsnZ4qY9YHs1LaMPhgJmHNTwhR6swbJHSvk6nAuZhd6EuvZk9m1ssrrn2ZxNUaE",
  "key2": "49Zy7tm5RcYPCfF3fxDQJE4bviPMKkZbcrVh2BRhNkEoqNRjepcV2oUR8KgYoFR8e9cNtHb2f7L8Vmf2vfqfhoUq",
  "key3": "5yT7irP5zXumLYtqi6vrBz4tQEdJsSh2tinZcQEHMYTwzXKb5tDis3S2K6f6cPhn5B43EhqF6TPmJvEVdzUrwHZV",
  "key4": "5WSkRNL8w4zmm6Hqg25zqyXYuXr1uVgHDhf4py5NSwQfEWraZ2Q5QPzF7x2UZbWZTnpYhAsZHvMGEL6QWv1wpiwF",
  "key5": "63tZgtifBqftqSg2zEj3wBcZdBSLHeofBKvaMPsdirHzEfsLqRVLe4dbRXWrjQFD97jVnHi5E1aHjg3DCAHF7UoB",
  "key6": "5SXKQjf4ZngeZBBiQuaZE9JuP1fSY7eBXCLRmjmn286xUxuzmP3vkrk9JV76RTrMQSaiZudeT4u2AsdR5oVHduVt",
  "key7": "2vy46MRTTp3jAyS52SzjeninzwZUabnGP1SoRQg6mCM1rq4WqDdurkUyFprTvsLk5nEtZZQxTFbpw8BrLDkskiSK",
  "key8": "2AgshWrwvRLRTstWDUMpW8NheC82ZpnrupU2wUoGVFz3cqPXS6mF7ZVi9PscNNjsmWEBu6kZW9TYKEtUrdAHVX1W",
  "key9": "gMegym26YgNKF8CQ2hzM4LRTkhzVfj3AFuhyvpXhjzFsRkwQbNeMKbhX5Vnbsm1s4EE99FqjZheUnrK8wPNDj1Z",
  "key10": "2Wf9vBeJ9vjzTvAviNNNYPNuF1gmgrFLJBkXFfdiyk4ATCozE89anbbMkKJsS6yHg5UyjZBfnBc7MHTcrjhAgw7L",
  "key11": "2mtgfnYgs4xyi7UZ8wFqPgt8Fiffvb8eEpxcoJgBgMxaY9WFiKitVuQCR7crtWfGmmXweALbLUCkVvE7NVbJHdcP",
  "key12": "5XfcVTZhDEW91EtYBt7YLAkDHoFanDvWTyWKgvndt7K7BCGQLAY3xZ4fS1RUaqRubpBr6KWsqF8f5Bv4ft94agkX",
  "key13": "5GjFqmYYkZSwJTh5MjRjPiFkkmqTu36NqGjX8pBmzCBLLgiWpHC2wGocL1uzRAB83jvodDSza5kSKHbdazuzbNse",
  "key14": "mKkXErm4tVfY48BmyepzguvPqTBiWirvrhbLWSkPPzrwCXPsNfMtCPvsypXY1KWwixaQeSU54eeBB4WXLEWqqwX",
  "key15": "2SH7gQaUub6nfMLboxuJZWauqUtnTSCWG5qSJZs1DFfmDP26FGHU6Ua3uJkcAXoBE8mMTUQvczjjanaAiEkTd1Tr",
  "key16": "4hRBieeGRXRA76YuHaJAAtAHmhL7TmbpcrHwV8r5egnAjYVFoAjvRALcVwVBkiASBPjfX7WnFyBRUYDKV3xxEq7s",
  "key17": "25TtyrcLCGqtZCg6YrS9pP1EbVF81wQxFDPEZTFn5sWd5fKQ1ihx4hgPXDoSrUHBjaMeEwFzxBH9oMgWAJ5DJqfU",
  "key18": "3XC1TFGnssTayGQfqShCVFov3VLJU6834H3Q1fLKqTj25Yui1sageLp7uTqpN8Nj6qqxQTvJHAXG9jXekAiyt8Mi",
  "key19": "3mXz6HWtzNpVjcHMkQGvv3peiCWowL7SjxpLr1dgCLUxCCMqAWf8pB6Way2qj1X7m83HAJfSUHnSGnHq2x1RcS8q",
  "key20": "23Rh6PNyPP8SYjC5eECHXV2mhZiYmGLDT344dshpa1drrecbBoswKgBNTY9ruwEmCE62YWWuvMF51CvZVLTnsg5c",
  "key21": "5UTw49KfvuGwDgvk6QcWrFjedok6GdynWYSMuA4PBthYRHgkJnW3orQBUCshtinVroSDjmLvmvTyb6BmHABYhYe2",
  "key22": "4QRakmTsKSMk9MnRa3FN9VEGVX5WKYbnFactJrGaTdewdePoQoKFWbEqs2KdcuWVNZ9WS3BzRBYJokwsmyHzQBWL",
  "key23": "3FC2H1oHxVp2BSCy1PvJJixUr2kyZnDMpZrcq6wEjhmMNF3ZPErVkCJfg9XKvKjWzXYMWZzZPT2A8vkDAHRsCBm8",
  "key24": "3RTuT69H7M8BQTNimGKoU8LCR1vu6TuadpNiVkyTVT4SgzvRXQkfx18LBBZYzvqtk9pgPkuk2j6MiF1LLTXR86hv",
  "key25": "4FB7RMKphN9e7YCefJQPiQVY3SLzmkyheNPrRjyzZ8VgUu5MZMEdqUGgTmw3fGUCHmDaQpf6G1arH3PgCML11Yny",
  "key26": "56V4dESyyvU3AhQ8cKTfb6cuqg3iDejrQPnzY7YUifAsbBDo9eEAnA8A3P6wtfZdpUA6m9Cm93L2twbeKoBpCrQS",
  "key27": "5xAeqXhznyHsWpB2neibCFqXVSN91J71LbhDbbFkBvjxZmki4nGyf8VPKjcpN2uvsmx3M7yZdBPRU15nGXz23e6w",
  "key28": "3ubY7WfhUMVSFU2ivhG84VZZssVLY5xk3B3nCeKxGQersktDBEyXY2BEovbWNXYFjwFuFv3cmVuSwSnA4r6Yh1qQ",
  "key29": "JhGyrLaPANvEzBGdWMffGGFwtVmeYaWnCqpoYpS1rk4STpd2dn1NhL9Y9ngDCwEgS1Ga5BbkSUqTWh6BDLnU3ZD",
  "key30": "3PqugxQsKgy6KQ13PpVy6V8uk7Wq9a75dG5KU8ezK3pxUUQLFhJqLJdSAr6vKvMpYMwUpfJdUUTW2cUAgUM4tTZw",
  "key31": "292weqdZFNLs9YWqkowELcJHWkYXzq4r2637qtmeh2fSvu4fXQ4komDdRoPm7RDUtMYH8StDLj77cFNPe7CcigQu",
  "key32": "3WKoGfiUbn1KNb9bKXsZYswEqNRdDnxcAeQU4LBbRNByxuqbjqJistBho5yxZpZ5meQXo5PtqdyrYTgDmftSCmMm",
  "key33": "5FqxqCRKn7k1BYvQn2bjGBL6ofwD9CLosSA11deAMLMnjz9HvYxLBYaXvhYL9jNfzPvUMT6mA6byfNS5b2XEyPtK",
  "key34": "4xrpe2kQh3gAGtS5GkHCFCY2hxDneeyrQNCkEGiRjdoyBGhdG7sQXNtkZePnjMTvYeb3NzJiRx7VjBzshRDYLk1p",
  "key35": "91ee15jkrf9BaL4YsDEehQZqrEBzV4JG57CZmwSSGtL7kGERd4k5z1tE4sCfrkwM2dRuEpoD8TauSykbZs3UGed",
  "key36": "Zgj7zhvPFVmEhLspdE5m3QuFvNqVPLayn2TBKRLFWYjZ6RAjkSF89GFM8zkUXCdxwSSwFj4ZJGVvyG1GMPiR7Z1",
  "key37": "5ZqTX8PLUk4sfeiQpH1sPNkPL9yiawahQJkxepdEZ3dK4xpzMnbm6AQnDujsUhWUBn8SNjBkxKfE1CiUZcJgKfiG",
  "key38": "4wFsJzFid2zicgzp8ui4FsTiuQ5xdZsU96d5RC9CZAWecPmFfWE9HNfV5s1mtY1iQ5tRuKeYkQDUVrv3PxRDFVrx"
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
