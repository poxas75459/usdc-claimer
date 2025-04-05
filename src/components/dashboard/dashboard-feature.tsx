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
    "4d2uWFGUqFCwrcnhftptzyAYS6iLFdrz11RXg1pcmGBEj6oYvib35UA5SCzQ97N8ZES2Y52yVx7QDBf1GsZei8dE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e8kVix69eb7eTK7hjhEGAj4duQWoebMpT6UQgf3sjuZ7PH3mCC7FqirmHnwB5sZ3WmoHWjhsjhUE7H97nbDB2ZP",
  "key1": "5bZJrqBuBokt9Axcjqoc93JafBozNfHwicWEgDCbJFRZXxRwyyEYNwXZBWJ2bQTJQT6HFLSivyauCvzToPeKG8Fi",
  "key2": "2qzy5Zt864x5w5T1vME6XMy1wc2GxxBb8xStUVfnkw7P9dNCU9NXhoNxF3Uuf2riADpSR4AKPQygetEd2e73hg2s",
  "key3": "3YrwXCnJv3uFewpsufCGa7Wf2bwqGuQ3oEwA92kU3WdFrcfimGxsRiZSh2EhsHDX2TnSzkGaNm4ckZVrMQoSzje8",
  "key4": "5w8y3Xr6TDKECuaicr4HBKHFdSbyshN2SMKteRxskFapCBPb2rkeuUxegL3beZWYFCpYNE7ijTzDngzk7R546UMu",
  "key5": "5RDYauqbmWSihCR41jraZU8ZJAgwhN7uYuM93bprteMJqS5vKP3EGfrZsrBDHbEhkMqeSFmo1HHLivAfc1qRMHsK",
  "key6": "2KVomyBw7J1kUef9PaHDJEPEF1jDje97sJ5VRbEa9VcDXcLW1qbA4JpnjkemQZGaCuxVMwhEqy2UadoXdw8R16y7",
  "key7": "3KkdEzkgyYfbyNcRYraRypWp8Vcd3jr4YJUtU7vP8Rmz2xaekueBg3rW6d327JVFqVjacwtBNP1CKVgp5d472xYt",
  "key8": "57ZmKBYRNcuGT4PwTdoH3utZXupoA2HkP6PNwFARZZMoGRUXLLetGq6nToyBKeDiPzbJHTMFc7BbifpHJMPG6vcW",
  "key9": "5WV238P3mxZ4gH9KKq2u5RGPiC1Y7soca3s1mTYg5c9QiwFwAZkexnbKNN5iEmR4EXgDEax8eQKtFRUW4ro58Zhr",
  "key10": "WRLZroCu8T7TqSQajqThzjkj8cUATrd8EvHZ9kP3TcbCMxwC4rHBYyXUdGCWFYTm9e6mjWeD3SNg79dyQgzPNmf",
  "key11": "fNcTqcsDEFvNGPuRE7y6capjLGh1KrrNrmQMQrQ1ikgWuk7TkScLhjA97g9dMjXkVh56nZaugH3gmx3n1Ux4swm",
  "key12": "5Vtwj19MKQxHbdrddTiWF2274FMTwX2kx5VeKvErwvVEwfsPUUvK2NwmLBJ7DsE6xBWPeAwRqFE3RGa1Cjk4SQH9",
  "key13": "46QYSjRDzqYafdYdTvD9uC2rWxXVeUDmTWdetVnys5e56rru6uX824S59DprquYgpP9RzqSekYaaXPGCeDzR3KEk",
  "key14": "2nEhtZcxLUbAv5GSy6SwWUWXCt7wgYMocnUZymVBvPhkhbRP8kS7GduXzy1sLFxPDBoM5qExwhSnuED8LS1zRJwk",
  "key15": "4aQpDC9LcAY8CcEwq3FXoeyepURoZGha8ZjqiiW7Qx5uFQuFPLpX4EezX2rK27A8LMoDW91NYJDAj3vcgoVEgTAD",
  "key16": "4p8Aybj9HJdBmF8JuQFfhHeMKajD3fg19t7JKChSg9DH4eEGQbZF4scjWqV1jm5jjjXvjZwWqAsWjf3nrUBGPnt1",
  "key17": "42y2nwbyVMZ4XKH4h8aKvfQhEhk3Zyqv1DYVjxGpHGFx94y6qHdV3QaxYSEuTsj8H8Sd4kpVpC84vFrE8vrFm9LV",
  "key18": "5QwV9FqcjJBu3e3W7hMQkhMMAY2RAZNY9eN6L6X9YU6EMDHxKXPUmpxUQhCfNr84eh13WisYmtRuDMKDytjNpPXh",
  "key19": "4smTvbZi4EzYvHJ6DTgrVxHh2HKzUn77aqzD5K7pW1u5AbdA9Gf5JotCE5RjVGqFRqXdTiSdgJfx3t3Zg7Ymavyd",
  "key20": "2pX1MnQDZ9VuqKmar6aHwQwXKqhDXvazGHECHuyBZoDEgsMATUaJ7FvgJnCKnZUFCHeWqzEA4hhLZ5uh1QK94cC",
  "key21": "2hH5NPtkH11oUWLveTmjreUv1c88wmeWXwbRtMjWQRvuNgRmRxZzLfw457hVSEe8Bxpn9E7Pv7wZc2AykfwBSyjw",
  "key22": "3yyb37pCbc5puK1va9tF1M78GyvAvWsyfuuHANx7PqN1qrK9h7ciTN2HvbyBMLPxGWSDB3YdjZudc3wc7i631jba",
  "key23": "5Nigv2aBvdnG9agR76tz3cXZ8MezpKhekYrj7iY7goQh5asg3PTgnuvButw3pFWy8VDoDyWL1MTyud78UTsE9U34",
  "key24": "376w3qcTLz6JVQ1RC9V568VgFAx5HyqhGp3bPTFj8onBVCag6kaK4k7dATjkoqVwWwvd49y6uo3c5V1b7Vv5egoD",
  "key25": "cYvfgR89Cch9VC9e9kyaZxWMs8dQbTH5fD3NaYJCXHmx195UMBdCzbCz6DNfk4eMz2JXr8fHsCEJGChpBAaUsiE",
  "key26": "5F6s75DWWZjVDEx7713eaka99wdKuF7grCPimK6sEes7phWhhvan9yMhU6Wh6TJrq9zgtUDD4uCCZX8uxTqT6HZP",
  "key27": "4ZwkDUxW5kn6bek53G5gaLXvSwM6pUs4ajJy2nguWhiK9oXdYexNGZ3Zye9W1EKMGsZfvhGfuh41HEyKfMwUeUGw",
  "key28": "22hp3gkm2iNV8tF9hHZ23H4hBAZCmB9sJTmU7rra9GFtMHTefcouE79LhfkU7BuCmWgo7fnAvXf87rbHnkxxDcdv",
  "key29": "awRcFaVYnYZyLQbv7gJsLQCmt7qmky6xkcNpwffxqauG7q2wWDek9zEUXhdMqea5q486a4wP4LTR2heTPg9yLcV",
  "key30": "4t1ndiiLWEgVc8a2ZeXTqsYrqEw14UFdZvAjF5ZCnVnJypUpjuACMc7LNEnMnKfYcvn6L2PZv81wynBGyyRR5kYp",
  "key31": "4VtdSYKw4ZNbfLDFRGzmRddoCMAG6utK5RzD9ouEmAhpwSuyhHumsipaAvioPhURLZAcHGB2Bw1tJ24vFpZJVafE",
  "key32": "3696h2dXWHB8DfEoQL8XfY8wQkepfp9HDHtoFJNh9EoGtYmLMTb9cwb7tNXWPTTSwQ6qxrTkWQtz6agueZuMMTHu",
  "key33": "32qSNaG4Eq1W9ptiuEEnW6JgMfeLcZhff9fXesrbmkgG2JNpWgb982XmwGGwxugj5YLa9595QH9tkqGBoyMgtZJM",
  "key34": "368AQcgrPopjxXPL8GsAARo7yQdUR7NrJZGvexS57uMBAbv3T9mk71fi6gYs9Jt7AVcj63F3zqkrSjr3JhEm2PGa",
  "key35": "63isZgfpDJs8xcs35ZsGPK69Swois7F2PGgMvkMA1SzypCHfU28CuojBqAUdqK7eeRNFtzaf2pArcRe1dZtrrYrq",
  "key36": "3EU2ziyC1DZVBDg2u7kRANAD1BJnCwF35tpbFNZgv4GFsAUYu8GnBQSRJH9175h1W5vFkDw9nduYwR59sxArrqCG",
  "key37": "3hDMMD9N1CBM3YWqv7Ey7P4nYjN7Q8qXf5QL6MyQw1WPCK866U2WsTL4q1m2ULo86pq5CMJyGLFqpUEgVBguwLK"
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
