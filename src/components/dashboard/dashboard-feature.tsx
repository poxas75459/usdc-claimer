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
    "3qHA4cX56P6RmsxjKhpMZuatNmAVQfFK2M5VfGJ3Jj48bSofbxD9DLcgrzt783mLG4tCTtvBg7SdamUdrHDUs1gc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ahD551xXCos7azDZGAHtVPjQWuEcLHHLbY6uBzUpCLrZrBvgi2jCr6iZo7s4LPdMTcn1GrAYgKJecYPEHPXunZZ",
  "key1": "BeoQyFHrCqMQxQ2KuGshhSDiqt4TeXg2tzfZWDek9j4LJ4GTtnPt92NbEhwFerJYPzQfs9LhYqfzJpGcPvz5Rf7",
  "key2": "3kBQtCaBeumSqpr1jiBPvvzVER1DHXdmmadUDAK7F2pHEEe8ETkjsu915QT5o2ZkZsBvJAppUa8Rfp7m9XZbvdaF",
  "key3": "5SGknFihfL9XWWcBMDdot6vaL7odAPaXGw6TbbRro2FqFrQTBXj1GkP4SqWP2VfGfKbZMws1AvmU3PKx8K12hDag",
  "key4": "fWTANqax3M8tmazkWnVrU6gxG1uNGVjk8aVymvaGbCmVtszxVqwc12Uz32ynvuRvQtsBuWZ9vC8xkZ5oUaUCKns",
  "key5": "5RCj8csCQaRd6M9NGhk9VzwymPTJhsaLzvTWHfqjhxg4Zu3VBNtzYbn7mDBCcuHPCUCLYKRhhidXYo7y9jPQQS9B",
  "key6": "5kjQNnWsb4vhX2r5qDEusWSv79bSVs6M45Gg45W9erFSYWjB4JEV5bjjsz3nCeLDDtquyoLVq3imQpP26jw3a46S",
  "key7": "26TJfZ5wNeuLHpvmigy66jC137acVsXncEih5GRrQr9K3qTQnNhVGxgPo8pJQTk7FaUCuksbtoZjVFxjUf9BD61f",
  "key8": "3FQ86euoLzaN86V9B4cyJdsWcKBtujfKsPv9MyjRANYMiczA2Jih5i27ZMU9Vg6ib3WGzKbD2wSnUkM1R6FzWtsi",
  "key9": "qeMi4vj5DvQat2rErfs7D3RmuSpYznJy7Sr6VfmR7iGbdgA9NCM4qBUTSTeQriPZwbjUqyV78cAotGhYWgHEZJb",
  "key10": "3LNYeghZtmQ1MZM9otTXeUMqCBgck6F6Rd8EjJ4woiJ5GQiwjLBE5A9JHxzAgxSEKqn9iVYHzjUbRawwQxguAFvU",
  "key11": "4LTUMQztAqHNmgJTCv1PQn57yNba1SyvCfret4S3zHcz5XczCHazeJDsGyNMcuZjoVENmrdQahFcyufdEN4723Wh",
  "key12": "2zcnBtiPveqXwLeCd2GBMVa1YH2t1N7VnubRRNdQGQBdv6ApkwtZsdryA3LKNuUCNsU1az6iPfHhwQFzoyHUrzcg",
  "key13": "5zqHh7PWuXcrrx5BauEcAFgP672497fNsWaS9Muh4GT88eq9chDwUaNHYqmuvxoPU93YX1UXt2SBRrfMxC2vjD5q",
  "key14": "49vhSQPR3MvRgkpGhG2j3AgDNKvwgv8fWQeiexkxEYE1apdzqzKZ174EJwHuSQS5Kghvi6mfk7MTBNEhqwRhgdmX",
  "key15": "44vNdGHivRG4RYFiFg7nK4ARjMjZhmxudCHzAnK4GMdzpxircpW7nohUtmo8uMCk5xz4z8HvkQG1zrFL8oH8s1f5",
  "key16": "5YF4yKtC319k5b1NN3Qj1vdAk2vh4ZuBrHWAjVZPSGfCmLPuEZidNJiNPUgADTNyPXmcrvwYr5nfgqibZoGP8tpf",
  "key17": "4KUpNhrymHNmntLavDmzdjdrjdMkESrqsfsAuNxw6WTiGe45TbeXQN3uQD29j4MjhxMufNAbrS5SYGun6BE2vvAB",
  "key18": "AcCipGwAP6AcPVdohLtPyyg8rS5eqsCtdSsMzeb9nUvwzYRmyg4opmi1Xb3V58s6mP6Bca6npykyJXTsh4ejbxJ",
  "key19": "53mZGJNfVLXWMsqZ8ExJN2SyDrgEfQh13795tUZW1QDvvqP2fXkpu7UDF4aWLNcAZD3eckpFryiMEzadZDtew1c8",
  "key20": "2d33tmGxMXXQkTq4YBeASnVKrkAN5HSN2adKnEHBUR793jYSYjGG2rYoAxSX4LjLDvFQAhk7dCFBh5hW8cwvmi9q",
  "key21": "fo2zXg6KFukWS87BBaeSmJCUpShT2T737EwLXTBd8TzWhZSnkP7C5rP77s345ud7wSJzWFXQ4NduDXBqA9ytcoG",
  "key22": "5yPFy8RvKb5ZrTtFeQwLWGhUTGeeDp2ZRAjK2E32JaCbKApnmsamcAbTyE9xkkqxao3pvebNMCerjEFj5nGoa2Em",
  "key23": "5YKmohqT2pj64sSCAmkwfTf2aPVo9RTSZGSEWmBwSnKpL8iBQg6xT3NWZeid7fjdfirx8xDDvvPpYd1JSrwXQsh2",
  "key24": "4DV9JweBxWfLmtezUZFQwzGCx9PkCQ2WVmF9iLhTzZ8P47FnXeU2dBphasoVKnV8bGzyQnymK9WzmkH9U4tAR9Zr",
  "key25": "2QYStySQxDuNiLdB4gxvwKpyraBy2MF8FPLgCMW77SqnbLBtppRnDMotbMgbJ83gANv2Y6wBqXXL6gPHTARiLbHg",
  "key26": "5Vp2TaCUysyiJFDzFh5yv1F9YVaJzkZuM4u8Hr9HHmFETpKvod6tNetdaNR9XNnry9dEdJXKLHSiUb7KRbjipdNJ",
  "key27": "dQ6t7vR1cn3x8fnz8DMjo2dA8gJgRPViJSfJDAqRvzHCvDtFfs4Gt8BeyBW4s8ha4eUSeXvVKSdVREfKf87uEnT",
  "key28": "4NuLzEu24a6VgQDFuWS1973u3NNDrGdfg8xM4sFf8fzrqpZNWbnVsMEqsKVo5uFDkPC7sSfJKXYjP6UadHoRdHix",
  "key29": "5EvXicLmeLP9oZYHscAmYb8SeX2yVUNRf9Y7qVCFVUFbCH2fBjU49Qupn61i7Rj9BduRE7fVjyUNHvZnHRz8Byru",
  "key30": "3S8Ub7XedySbvyDayzhHpWRerdWaboJJCCV2NaWbrqaeWmLTAJoN5fuj1PFWbvn8UmyETubgAYeTiAmgjPrTh4v7",
  "key31": "5bsEMsFNtY6DSvrjafrEmJuW6xhpnsk2rAMgMPaDuE3sCWEuGziNRdyuG8ZB22UceLZkzGJYAQbpDH5sSXRWQPJy",
  "key32": "QvMymzNC1es3rWHNejjrSMpyovbXuJdSB9CU75KNyLJd7qjW5so756PtMqVNF6LnLfAqYgrdTzM8SWurRzAL47u",
  "key33": "5njwLn8jZYkqAtF951Jay8NVZjTrvrm93e8pWkoPbfmUP14VVWrPTnx2yWeptWoh5yEAxEMujAfnhet1MGEm44fV",
  "key34": "3fx9mqMFRgBBQCThMzG8K1heEfwJob9bNPyRmJQsTb5Jv3g8PEHHStHEYadxn21vGATXPg7xUsqNqEZXxVAZm3dh",
  "key35": "2zqw9TGDQ6Ra1uKz2kQG7TWLngXQYfLta5djxQGWBtLNQpLqZG9orjfEF9JxD2Z5vzHrB2Hsk55AxGtr1VFaZtVT",
  "key36": "32tdrZu3Bf3FeHa5DGcB3C1xKw71n6aEhL9tdDwqYJVjo6uWm3LpXH98T8TtL7ymokXwRhqpf7qPTQux1LxqBn89",
  "key37": "5qGXVN75YwvAzQfxuiVX9m1X7cRJu18roCP7qGpQxnVxHdxydpmQzsofn6y2KLsQMXfBQB79CYBfSPe4oqhr176b",
  "key38": "5deLtAV9uD6JtAqfa1MCbcgAiGq2hCx84Q7WXjxwEFFVjBGXYGjUXHVy9UeGqDhC6GkQkLTBsoxMrP5nx1Sq2jbB",
  "key39": "66EWDVkaS42wnTV7DMc7qaKc859VkgG8RBFAK8f3xDRbDxJo8FPwCAgi4brZfpS1CoD4aTQVTGhCFKx3w56UvFj7",
  "key40": "2LEzeUNrrAFm8hbdawDq1H96QDwjNy38cUjrUwnrZyQ5xtNRTyqF4NLSFrxAxfzCyqFg1JJPEQcjDsAA37GtLXgL"
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
