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
    "3zdXtHcgPyt9jaVQ1Mx3XkPLjCvjvYZ8t7LXNTALxZcUc7MsVV2bbZdehWnyACmG6sR7184LF3niYQsGAj7exWQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L4WXqZMkDP9FAKmD3eyuhvQYXBuEPpXxZDakFAAHjpSeE2BN9Pcdowe6tjAgWZYaKSUtFFqLMh5WsUjRgz5BcjP",
  "key1": "65goqRPQcA5pq1E7878q1sj3FqPmeeczw1Q98KUXqS3ZDDwjrHoZjLSB4m8KMBHcnC7eYLMnGrAd5zhhQPr6n8BW",
  "key2": "4Y19SfAijZMFsPf8C27dShvnL8maH1zxMybzsdjAcGoejfGHhqshxyDzPHNuiZQb3tvNh8om9AqFexnnGiurrURf",
  "key3": "3fp9j8d4Sh1yYz2fzhQEhyJWhTYWETX1oEbjre55ChD2hqdu4gDjVzAdRZG4KSu2ZFxR5NDFZmZwvcpdEhufxxjh",
  "key4": "2MHnMLKsssAA2UZBSuM9VKSvvXBpJE72o7YZNpZU6pdCG3SfnyY1ZyzwyNMLG2dJwcRWnr93kVaQ7ZPZoQqeiyqU",
  "key5": "3UgsUERG81un9Rf4MXS2dwdaYh9zkvdXfgVB3jYKUqzons6sQ41kkAoVoxKiD1oqSscfDsefxAS4rfrpFmyrWVeD",
  "key6": "3wS94mmJq1NXnwx5SNP4WN7exKmtHNoCmAy5E2dtCkFUEm3JaE1vXgx5pnkAQMApdmhwE8qfiEzKd9hbkDQeoWPd",
  "key7": "kFJjtivNMLHkBAjiV9bKSdoCihcDhfuXWZsG6jdLVQJvyfRyJJ7ZR3CZFAephQcnQnohd1q23CA79GSgSe824Aa",
  "key8": "2mUnD4SL3NhVtLJq4zW8QLdPrBrYLHvVxSj6Gc6yocZpFtgDKsT4vMKPMT1k6Frop9zNqsSeB6aoZoQJnT7KdCGT",
  "key9": "5fnU26iHxwPqdWxPHTVGY4AoyoCSnE6Gt26nNAh47KCymhaAAe9hA89eu8vT4W5ZRqvnqysSLuXRtejFUrSJTVLq",
  "key10": "5uepiwXD9JTP3rB18P9UKbGS5whrH77jPFPk7HYxdRq1P3uvCytopP77QSarF844P86Ay8ys1C4TLx8mxV28YnzR",
  "key11": "2rjoeVTLa1kEA9DQpMCKECFPWA5WordicMATDx1NzjZAVtfovwdoTXqUe2TN9g5kqopE8owT5mBLz31o2tXnwGwk",
  "key12": "5jxzsxvoepDknY8RdXqU6BzzLqvEqeueyh968frUpjZfWRtT2fpSP8NEbgRNJ3bQkgSJ2Codfyjv38jZVNuUUPH4",
  "key13": "3wktNbtkuABo9VNZ5z2HzQmyn89D8WRoJFyZjDsCELncqtdfeDg7UqwJegd2c8kes7xKR1ncvhUfud3Rzf9wx1pb",
  "key14": "36UsZnfPjGJMLcn1sThzezHQEZu1zHk2jsbf4iKB2kxH7WfbK2bx4jmXhJzSiTz8XwndHNM2RohBCuFkGZ5nb1d3",
  "key15": "41PKHP6DDmHyiWcKjXt8FdV4UL7TqPA3cn1U7Hk3TQiwd2JQu1nvLhCfX2HcTMpwr7s7MW8VH5auoak4ug1StKbd",
  "key16": "1eciyZUwtE2jtZxs1kjyrAJneXZbWMw5XTTeiQmW51Tj73cRTEBEHkhnGFXND3TwJhKdEfG6My9oXdJUiqxPQMN",
  "key17": "5Bvv2PTERBvP8JmhY3aHsJUvM9kkdbygjQPRH8xQmHt5fsmWaMvxLuW5UZote7vnkBtan4ZMT8fxq3DpBdzM5U7d",
  "key18": "i4LbcSkCDwEkVxoQZV1XPopj8Jv65JREroQRHHSUpzDAGPaCGFqgbyXTbErvWAGBGMjbUsKrD5P1qVfWC1VR33b",
  "key19": "DHNXcd73ubae8SDzBQxBxUJAqFypQxXkqQ9dTafmPLeHLAqEBAgYSiyHz5NgmNrqzM9Q3HgNCcxMs1TiyhmuqoP",
  "key20": "44v1NJW2kZtswx3Jhwky4rt4MVj8suyWwgnEB7bPRdyWdnFM5FrfokmNgFz8K2TYhV1fNtr2RMk27aGRth8iKHVq",
  "key21": "2kpatKnGLphmhVG86DkmBMS7v6eztTwj7CMevwRLxvJUJpwY1SzoVxSoUg2zGuSQ9GFFWUdwmmw7ioeim7igU4K6",
  "key22": "tfxUBFfbCLmnKU6yiA4xXAz8A1Tt9gCpBCUiGcy4xGrYtoZX3CZ4HZFXHVahsxy3PasfV9Xj5Fk5TgF511LnDeH",
  "key23": "45j4KXYQFdctFjhroRiaAs7ib5LjQvkmRzPRmMgQVTmsb6uYvnhdJMNbSZ5yRF8FZp1W21yYFS65tMqCPQshBNEr",
  "key24": "2zQWGErrNmUrsnTx1cGSt2EoLFee5h5SJ2BhQvedaG7dzitaH1xCvbn8Wwixj2QxKbaiJPX1BSTWatuXD571kcVV",
  "key25": "Ht6qsSw7veYPsKiLyRCMxs1NkKX26paHbReWse2DFuw7sRwRwd4CcjiKikTQUDMRxMdkAC194KjBSxaYNY8mfra",
  "key26": "31mwRRg8KPiHH3TtZ3EBne4zfDZYqsvTo6RHP58vYfQXkCHrHizcehSVSZK4SssUkT5rQrnMDZ7s1oFoUw3gZdrr",
  "key27": "Pc37Z4YJXP7oJtEW67w5zjZhHTXGzE4JYN7m7HKix93pCCKn1kZMi6YsvWaNTQLJx37P1shyErNRzc6Jegaz2KK",
  "key28": "4iqaQfMznmFMvQfo96Adp7F7rWWf2aPKsBRAinovN6xVxJF1JmBdNnAXk5VfmxLQXdaL7YMqXbhcpvTC73zRrPng",
  "key29": "3SxHWC4BgpYL1zs7xU39Ts6ahtr6QLTuqPEHwVfUgNysumiT48JyhHBFscSw4TGUe3MKjGQqTXZepfkuaDPeTL3i",
  "key30": "3mEpHRhqWm7VdnwimMuHg4fyspxuMLf4kx6TfHtykBbYUgCFuEmCMyAUMWonW7SMq7iRrW3yYZnm9HnxF8c1qQjn",
  "key31": "2w1jxBmtCybN4z4F775Bo8YQqjY1BganUX4SdgmCuwTcvomBhKPiP9vCJz6SwW1RkuXNhGbpoYwbws49yNMUqRyB",
  "key32": "57YKvjKDT63YoQU3dELwNr5qbjugzxR5eMjHLyDqgGdpSEHscL4MjB3nishPAMwZri3SDRAcHGqV4bYL4iyT63SZ",
  "key33": "oTg5YjboKebRWxRnepfVhCRVBJLtWMCgonk7EV1zz9cEtA9vg1vqGK1sCJeTTMPU8Hp9rH1Z1oB28qE8odGT3NT",
  "key34": "3q4b3h7s8oEjSpvvcAkGbnW7AUW4gLxKaBJMbQ2EWxoZ4QHFNnqWPfxSgQqFGnKyUSqJxbQfT4Mg3PRHDoAgAuAu",
  "key35": "bnpoYo9jzTfgLudThkaParEVdvrNvgV5eNzr8toggoxWTXsh5PYNbpaowem6DshgY9YaVXFpNxnZbr8RMHt1soK",
  "key36": "4LJGdDNrvE6F8WNEA2tYVWZGZ7JZi8iGMKJPMvK3NJNRrbiF2cFh7nprBwjzFM9MdUwgYYxuXmMxw9RPpk98ajyc",
  "key37": "4xYSXZ1BDSHP68xGPX7L7L5AR1FWEHMwNUQ3EkJr41CrkUSnFMUsdNfAwYP3sDYEQ9nSP9itEh1J28ajXCwNaUWK",
  "key38": "wjN6tE515SzkgJBkNSkiC2F2c2Em8WiSzPHZ1EkTR45GCBdytbfVvVMLTQv8FTW7kmhUwTKD6xXyPFQaFXgRpE4",
  "key39": "3AYA69RDXeWyzz9aPfwWov7w3KeNWtwVC355wZBJvrKqDNNkbNBsz1zrpS9k35jFkiGZybndavNRezJUKqFiYckx",
  "key40": "3RV1AnLif2aDUxL7oWvgz3b5MLo3sQwSoTJYDYnNffB5e2DcGyKTPbJeBYkGRKdrAC5fu5sBahJVzFL443RbbUhA",
  "key41": "7WV7nAgHFtB14japRYt1TT2U6g5PSeVLy7MQZezVz6Wunrki3CNdLoq4XgjnNwq7RWpDBYdwooLM9kCcqwAnScG",
  "key42": "5P6Cq1Ccu98q1gWCJ2iASnX2yy3XkkXzvUHBNhqok5XaWJXwFbAS5Lmps264Thcmaoa5YMresAfc3GXiUFsbjdmK",
  "key43": "2SWU5GiXaVN7DkgpU4a8rQzUBXKtyYcZX3hbay9w67nBz4BL6xvi8GjMxdnsiGbcpFkdxP8aadreN9gCsJsygVQb"
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
