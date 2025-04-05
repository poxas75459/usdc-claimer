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
    "BbkyqrhU2Pq7iTmYguFLNGPKnwoTcjNztusYpNC6tn2GyhaVT8BMCsWHmx8JHVkzGQWXBD8S5swkhdgM735bqUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H9HjDKsdBJrtre7aniku6bPE3GgQFcCMUUtHM9mNH9quzARCPpnJiEAeWsQL6maB6fsNW8tHVQ1tcMkzXoTASvy",
  "key1": "3tyGuABXQsfNSxP4C9P2yeoxzNvvWrGfhZYLQeVzj27Dy9vPibnsCMo2mwvqzKX17DLeV2NJyrSAiNArbRbNhoc8",
  "key2": "2s7hGL59rEZkBjhSbKJaQqWwoYkPXHb5kPakCsJHtRf8NLtcpkqcZy5o4QVuXu5xKFnFb1xAtXkyFo2Nizmx8AaN",
  "key3": "5hSQph96gWnyTi6ZV9EmzazKuTgqmAvqYq1DZAwixE2tHsCtg5g6yKJE8vC57PTDpwLz7VzxzzRZ1ZDFQugjWY8c",
  "key4": "38nW2YdZwJoGqBhiWsLvQc7yGAGjuKy2ivBvNzZc7WyBWq6hyxq4jDNc7xzPK6FCGK97rgaNJmwDfpCPKt3JzDxT",
  "key5": "4wiL3bH3Zwe83DFaB1k2QkfrEoHYbyg1Ag18iZjwpxnSo3Vmoqpo5tvsGFqxmJhv691mtHjmNjVQtEzCHu1ohERj",
  "key6": "5nGMkg9vbBjwX95HW7RhEdGb3EWAH8EpDmWVxjRAmCwMNRNsaVbzaaB4PDJ5EQcU9evL6XRkaaiX9a7a3sHhLfC7",
  "key7": "4YWxAM7vjtuwkyy9Nex2xkhyFrQe2Lizra5qRtMWsWSqEVaouSENUiRzj8brLwZ4WdGwqwL5j7qFehrCCYWTX9sq",
  "key8": "2xfc5n1FycQT6prgtwUSX5J7jrnwKQhRjfyrYbdjwFqLqaor8ntn2am4ZJhjjU5ifzX5SvA7Ao4RU5zN9U8cZWtH",
  "key9": "5NDQdcw88CgbpLMfAopS3jYXSnsnmqwgjGDTxnbjPXtGP6n6ZzrGumcnDHr67AggxhEWdSUP64Thk4pN3UBCdqgo",
  "key10": "5XKCyMjm1ZZbuYJkKv7bzz3ctkx6rrX79LtvmzyQieVMnhTfA3zGYE1HNsDux2B9EPsw1MqCgTAdVXpULwHbvge",
  "key11": "VGakXN6fYeNG8QYprZLWDgMv4hgT54VvUW3UG8bds75usndajRdVAcJKF4chFUXskCvTgKdSKivNNwz5fGbjJPy",
  "key12": "4VchuX3pxhZ13by6xD7bPgDaxwEVE2y4osuEe6Dq8qKdJh6oyHngcAtApMmU9y7Cu7PgpvMwd4fo6UTN7aXvr9gd",
  "key13": "2rA9QqRgy64mppumnvopb7xUxyqeaP6sNnvMTQzuCpfmVjwYZ5PFPP9XgoL7rfcyuwmT19LDjceow2cUrjEDNd4R",
  "key14": "2Q4KAR1K43C2VRLio7A9ydyAXLPJNcFtf3jYf4jCF9LCvwBgJt6RSrP8TSUv64JrUqkpmerQJh7YtMd14y59oPHB",
  "key15": "32f8veypV49ERpEdpp6ktni7f8JVS5qjiRxQ6Q9g1JKnr9MUccHKJYzTFJhf1RAKpFg6HfcdzGX5zcBMcXwe21Pm",
  "key16": "5Kdt1ztM5s4CLsTRvGAKL3cKEzRdogJHgpEHdorjPHdoYiyMD5ntQTZWP86CcT3h8WHXLxrBsMpeHkn1g7nxyF5r",
  "key17": "2y3MKpQ5qY3SHEqgoE9vKbZSfEhRiLogfBuxHcNdsyLGPgG7oW8rBBSwdqAMr17MLPSHFYDMdccSHgqgPWvDaPJu",
  "key18": "5QFTXenYnUrnFZf6eAwfAC4xEqghtzxs5GzRZUouPLLPHUKsSZ6zucmYKTNNssZ36uovNaVixCxg5ds6t6Tf7hxy",
  "key19": "3ZFwm6brkLZAGoSB9jfeDEydNXc3gLMTcaiUT3NXkNxQLBJs41XvKsswsu7zbKMt3vaXyHeRTfRpcn74cfvfZT2J",
  "key20": "2APSa5Sczwgn9aoSdaR2SWZG9sFkoSrs12TXTuEj2uwFDPFSk2xrnEXTAQBWkTRpWcBWxwtw7nuiYQVrMk5gPXiq",
  "key21": "2a8swziK7vFbxJ32nYNAdffePiusiCqvRKhVKkFHNYjD42L9ZEoDmVipQu1uq39UZo41tcM4J8THZLn9qUBEZnEu",
  "key22": "3FAmPcjpWafVrtysGLBkHWs2Mpg1sJJdyGsXomZe2WsJcegab8Me4LnHxynr7nax9FR3KxijMhAejNz55q68szM6",
  "key23": "5qXiwKqJGDPG42RyK6SEYNubStb872E3JJGReBGngRmeMT9R1TgaxCkCsrRbBGVtBmSxxJFhMgx6Zgvqewqq8tom",
  "key24": "E3Q2QYJqXvBhDNaa2iBzhTnE9aqiQbtspKhjp8tnVSukFxp2iy4HiqWRK8hWMME97EM82BooC48drnSZs9ecKKw",
  "key25": "LXY9fN8EXTjeYq3ynSMtAqKMmDAMMQWGuJL8oz5y27MAZx4skcUgUEMcbxM7vpjqEY3CFWZ8jYakZJXA2nRidbM",
  "key26": "2g5NomufhpT3E69FXnHbDDHkiHnEv1oAZCGfYH48QjuSWwzCfWepdsPnQAUmTiRBh2kGDeKtA3ZRtpCpvFat3jBp",
  "key27": "29jReQXT4CGbXzDMxPpAw8FSmRSG2Xd6HLbHeSzcd453Zda6P35A2Uyv55a2CupT5bDKJxS5dV41KW5Sj69zGH4H",
  "key28": "33s6YBeoJGH8r38cDj8d7ZvRNhgSCWDVeB2Z2kz4qDFBj6rcgvovAh1EmuNCa4rzPs99rgDZXR66SYdGhMxQNh5w",
  "key29": "HygCyup6t26h55D3FzYkbgyKB7b6p9ef9L4sRE2NShkZPQgN5wPcsYnE782UKFJS352ooxdtJDoAKPVoYC3fjhE",
  "key30": "59pknaCQNckvS6nrx655Ljr994qGeGrp2zZWZNnvwnebfkHqVNRdfm5C4XaBFirGt1ndXbUmYiGm6otixc4r599T",
  "key31": "GAuEFonY9Gobko34giTHvC5c3y3Vux6sjyjitnN3WYyRFW4ERSR8mYa6uxqLNknyAh4F7G7zEwTuQToM2VJPm2o",
  "key32": "3o7ZPJ5hM4HV3gjmjR7muoYtrmhjmBaZjY8Dcm71yoEnyHN7f1NEHHqjYfeHdQujLoBgfiePSXTkr4QV398Nsr9b"
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
