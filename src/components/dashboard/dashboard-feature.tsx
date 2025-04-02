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
    "3YMoKGqbGGbDpCUSukUqpH3zAukJQPirHGAuMxosWxi1ixUQnetEDuypH4caUhPuEc6mmnKMmhF53k8Utni2KyJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JN5VD5UCjAbvAmSxcNkbQz8Gravq2s113YSTxh1JaHjmGqxyRCfka3hp3nY3EfUVVg8j96SPpKJ7ZCtWAsczXgr",
  "key1": "sSvKKGYMAQUVqzzdYhrDoLjw6CPqCxedJ7YWgFaGMGX2G9fpJzde1fuXb5NR3x2bRPHh6Ra7Zh5W1c7WY6wQBoJ",
  "key2": "4qkrzNTGgmdx5SRyuawjEN2GMMBUixR8AMh2Q1ozk64yHYFNTJ5hJFyuzWeq8wruC6sF2PijEhvWd3EhG8AnEgZ7",
  "key3": "9ez2HpD1dbusa6n1ArNMqLqqJFW2sSxN1NMdQwyksN97tk4SwtC1PmB9NTVGSMtCcWbiT45pr5eNWrr671BEPCB",
  "key4": "555eXtaEEXn2BdWSxfjsRDue9A5AgoB3ub6Y8wJ3uKokoEP44HKTWGe3gbzpzFowG9JdP6vdfYX1ciJ1x5dat2g3",
  "key5": "3bYnAnRMgnn2D4bGUxPVvVDMYeeXP1TDPx6SdX2yoQ7jvrBJCXZugSGDaXbuA9UvrQR2iugZtG55tUrPNDQ9CFp6",
  "key6": "FpLFkKP78XuYtEoH1ipbFvZrxggXdJikrghVjqoTRKfMWa8AaoHsvYwWWsdcCaskLnaAuFsCQefagiqZq8Gq7fZ",
  "key7": "5cGp7FF9BGbSKo55ePdnNL8mQjDPUdf7DDkfavjtZFSmL3sbiZhNE6es4NzkaX4Jqrk84kEmfRwiHNWyqBdxLKDg",
  "key8": "3cGwLLKYB7oymLyPvvBYMCHLQmN4QJorfB2esTtGZsTnmd83PvPAWZVtuWe53kZPUksW7sNZDes8rbEaxKzYnsSd",
  "key9": "21ydN1drhtthULYPnaj9GHM2vmxqEVxXJB8P1DviYbyUAvPgCGMu261ox81J91HjT2yhPNZx9kDvkU7rFtvfZkvm",
  "key10": "8twDhLefw9YW3yfPHi33GRvcFqTYPSU6dYNJDmLWkbdTEF5s6JiLd9w6xe5WviEEZ4aFv9ZxNddu9tEvghRtwyK",
  "key11": "4mdVhyTDgwQaGkCMZi1d9dtiED7CLeRfkt1Qae41yN94pM5fGcUWx8hyYTHLGYMieYPAZhAmz37q4eXuJ6Wvxut",
  "key12": "31BzkDNTLEoAA2WP35cvwMyQTx9GWz7LL6shvLhzNYWnnZyd2mTbWkH3YmkhxNHZkvFReq3Fz5w6UPusjo24RXW7",
  "key13": "58Z2aE2jHzPhAJxtrs2BLn3ENrtPaMqBqWmCACt5Ebu5r76Shij2fVXWNhKu1zpjS4aDxhP3edV9dpkMjv1Y71Y2",
  "key14": "54954h3cv24QKofkqNC4Yap1LEoraPgHwxuE1kUgwXm2GmejNvCL7NK6jZFVMcDLjQnRXGbcZrrVE52aLv3jpDr4",
  "key15": "63cUgGhsddm2d12axMP8KZaEsFjF5jeAmn8Hfk1daDwctFnZxSQvAuF7DuZFJFNF2vu5hWmYrow3ajwPZv6B22Y7",
  "key16": "5XGtzex5FtCmz5fhheJzQUkaZe2ojgDE8En8DciB1a9bS6o6icWLQbjftDr5RcjCzcnHDC68r8XZTpkjjruShVki",
  "key17": "2t5KjZUTLcnuhgh3rykNKHTkuzG3VXeLNAvqRobMGebsCUrHNQLu6nxfuTRZGL8bJ2vBx6a5ccUi9NBretdu84Yc",
  "key18": "4hkWtzzU1YFfQM71BRpq6xWHj3itntvW9mnEhbzCNnJCQLHBdpF2E2rj3j8Nyp4GFFxuaewNq6ZeLFMxDLCD4KjD",
  "key19": "35FgsDSDeCHsCZAc5owEsfMWAjZDTPULKVPpyTrVqHwAMoGcHDWPr79hokhT5F6i6DUTWRPZbM85h5szP9bgwABA",
  "key20": "bnhnhuqqhDFusJcPkTF5tqHb4Z7h35ZxgRpfLVQtHM5HZoUNgNEazX2XSHYtgNvTtVF1Ncan4SXAVXwUfb2neLn",
  "key21": "DeGSDjeztJUYQo5ZmFDQPJ7gW46FcBfbFdqPUXEfri19FnMcqvHQbbTfX17LYm9yg9R1U3PVogxTeuKvxaTXGh6",
  "key22": "4Xx8YhHnN2NYpUe3KViKaJ26h9kG73CRsLfE1gtY5dyM2mnd7XdRtwMKeocCCyRJHYRVyYYBwQrS3HHUdKBoNrqW",
  "key23": "29B3FSuTYJ2xkQFryTAB5ryXrkRxNXHxaSV9XmyHxBT5iUwfNfqFCjCAmnrFiLH3dCpbGVmiPbG3ARuZy2GoWvpt",
  "key24": "2djKmoPk9eiJei4Lf6uTUfCB1YNoq7yZfS41eeQ5Ev9Z9vkruArNGfrD8TY8DehetW1dMPNBy6jA7fgVEnZQeJGL",
  "key25": "3ANQisdYxzmLXu6w9KkscBdxoCTVoQVtCLjUmpYSEWWYjc6jtZXkyfUj4DdQwJQZdMt2S8KoonBsardaRc2rLUpH",
  "key26": "63ENjBwrFbPEkeMkMyngtuZXoE4Ymu44nYJgoF6NZup4H2GyvmuXtgQ6vu9XtYuU1xFUj8wWKddfNbFo3W81dvsp",
  "key27": "XtsSfRwsfBdPhW9Wod4K7fJxGtAB5ynZUKHYi5biZCUifUcffPvXpY4miNcLWcGyvcp8y1rrmydVmtNWLkQsrrV",
  "key28": "3GfdJYSEYuXtY6vvBNcaizcewVy92ehWNc3CEjMA7Z3zd64noiZbFCwEsjjWiN56Af9MKaKJSLH7duFRfAjd7hp3",
  "key29": "5LLiz3xJPiCFcsm3UsVrZsGHYcirCrzZZDD8CZfZ5rax3B5Aoc7viHaxGAMJPXjCdRAMwSkY9W3QrUKkcD2uVRu6",
  "key30": "65AgwTbUzZqSBkCPNrYKFp6n1GLMssw1XxgBvTEnbAMrAsSqnZh27JSGZdd9F7Ean24Gm5cLn6aesKaHPvwuEJxV",
  "key31": "4NhsFRz2nEqAy95a9FRyuKcLQXhJMusGarFszRUMmWnWYVkMLLRcJCdWdWsJoFRKKeJGpEfCMUN2vUUBbSC8aXdA",
  "key32": "ANgiGNvPHg1AEdaM9PUp1t6rHeZhaymGTQCuFft1nti4obHxYZFHEaNHPi2XB5GYeS4shuDnNo1AwvwvogC7ZTF",
  "key33": "4aBkuSfD1n5iD51GWKLgVGhwYLRd9EHQmRN6icYDLYWJQnBQsCb4Se1CgFgDDpGx3x1fyq7YQsh3ZupXq7byWWBk",
  "key34": "2XusUCwNdd2YpNv6KfazBf1LeC2u6KXmZ3A4hUZzGrTR93zxmASSgZ7DxTCesDNqMTHBALF7K8q9QY9DNu2J4d84"
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
