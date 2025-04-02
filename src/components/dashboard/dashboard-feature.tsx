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
    "3rprEr95W1cfazi1FaaWbPEBewHj94WUwas5MA1GQ6a8KXFYVem5V2xqDPnFbXEx4tZLqCFo3PSdJaWJ7ZtghuYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ay6AsqA1H5mk6cULUFoSMXiaRZA9ahwarkbvS9V1356y7CDVitoZ45KdCD6jLSb7CVsZAjt1XmSByX5S2sPgoRF",
  "key1": "5j7bfau2QitRK2vpiVjQ8HCd9RxGKkHfHzVdWtGhxrx6JWHorS55HhFbVzMJRBPyusC8t9B5GGJsG9bFQXVaLBbw",
  "key2": "65DKJYLGnJuPmyYVb7JQtgEohsodiBUu2CRydP2mjYcr5ZVPA3RjDAaZLD39hJYHJNX2uHqxrV9rWqELwUaC19jo",
  "key3": "2jLQvjHXWvnEzLNzWqoys3yfpoZBBHZyEWEJ1UWMjFFqEVqnwBhwDznMBEUwT6kjLUj6PQ5RQ5VgHV8XXsYyymuq",
  "key4": "4P7YBdLAXGxeEW46qkDZ3ee9cVF1xmoq6dDyHstaFJaSwgbFZ9Ndcv7HMgHn8UTjWCBNpZ18pTPmrQ4MEgYPLp2W",
  "key5": "32qT1FpEeh5whQBxoDYwo3hqSDMQm3MjZBwqfU8NdtnHG3FycM5bYX5A8A7mCv2A9HdKk7rvh6BETzZw8gHYqSpM",
  "key6": "3esvBLbzM8zmapsLCnYccK891UQ8SFopCsmpoVm9Z5tfyjc8mRM1erZKz4R9bm7DXwbi7p3NdfgdcjgbYrF2Rqzp",
  "key7": "85cMrK33RPo4rWQSoCZzoJdqWRNsagFpxn2VN1xMzwx88PJSXNvbR6MUEY3KTHwnLToJdSmaVeUZbp8UX9nsQuz",
  "key8": "YQNEtbhHcHR4rqJgK7XU6Ghb5kxwtnUxnu4fSJUzKYd2vuT1RSecu5EPw18BMbHF6sr2ECBEgPonxtyCpmHhyCW",
  "key9": "4PN1dfseqTLHZhVERMmBdGiYmpoepq7rDTxW8d3GstbuzGSJm1i8GroS71pXZe5BWg55mpsSyFWCDHar8tjAQDBJ",
  "key10": "MooH3AtdWttoN6iPAvp4sivht6MVoZ312PN1ME3Mc9W1Niey2sQvw5MPx4bUcazA2UB31dXTfuUJ5YtgYtvL5pW",
  "key11": "5382F9pZgavsXB5jwV142WcGfRswRJnpbzdG7ZREqUBLXuUs97ice1sDL3DaKd574QsmyANePWHUkpkRBMj9dG7x",
  "key12": "55bxRN2BnrJbFfqLRFdLvQwwTaVmFvL4bjtQbSk3ak6TgeYaAZfYBTCxB7RjzKN2bjoZaXWmU7QRJsEyndU2c6G7",
  "key13": "2U1e4cu2xMYoR9EVrbMEruALzMcxUNY37kgdjqRGBTnQVFoSBMCXpbdkBdFJt88meae35rT8MYpBoxRozYJ5iLRL",
  "key14": "2nRqoFDQEHHYq6E4z1yUAWq8XECQ9kSFmrYZtc1Cq1BaLmAi9TK2cgYFiFSrgymtdkQ7ZV1haz8KXcD38fX6FNq9",
  "key15": "2i7ej2s8yo5Zn6mrp4qwL6XpC319BPgwBd8orVRuiuiMmpA7movRKsUiHTyXG5VCVFkn4g2sjxRXqpEg9SjRtLKL",
  "key16": "R3upNRuTrrZXpZrRJTCB5r3eAYGRqg944H5cyxbVdLrWtUXMeoA7XwJdX5Vty23ZseMLvL9fE7U9CgRorruBKq8",
  "key17": "8xEhj68KDULxWxJwRMeAatt79JE2YRhWdq5uQzEbnrb6WN3eTwGRzu5JyNn2TCuwvih2i14AVy6TDYrWfLhQp4f",
  "key18": "5Ptz2b2WpvP6ZkVAYm2YuRqgJQ4atnAcVfMrUp2hVjvMqEUSCpU7puyyHXXy3WAaGnTgVRJcWznaBhpQsp82MneB",
  "key19": "4pAbSPJhaVCYYJLNude9tRLftCfvkekQ2o1w11gxfJtdRA2LeVscF2qV8bfjBiKhAz5GsXgEQWntzfWqnp23gEpJ",
  "key20": "2UWZ9NzxSPiNxTzgBKXwANcvotYPecFcAFTbs4E7C5a5mftQJPFerHih2YAi5u7WMfh71L2HEHnZp4LShosspa8X",
  "key21": "282Fs3h7yoDfJPTfJfLRENRZ1TYd4ANx9BtaXQZC984VXRZ2tKfTWinBARJik13Gkwfxf7uhBVAyPG7zHv82XqtZ",
  "key22": "2sBrpKsFZNF4mUPywegim2iD9iMkx3R8p7cxdVq8wvZ8j13tApJ5kPxebU3xMvvwKECxfNLZhousvmvAn7nSjo52",
  "key23": "22JTuN2Y6YoknA1Yft5tVNfqof1xtWTbAgwkhC6a6evrTtTwN6G53XyNTbyqsd3icYW8AQ5asxmSRgpGTN4LgLdD",
  "key24": "5C2i32TfuUFyrp3eFo8ErPCZH1jkhxyFzZoq81oykVaTrmWhubPHvu1KBUrhDGHumpUNfD6ASn1nNkT5GV1PBYVp",
  "key25": "2vbsAaKWEPyiEVHg32b4srQL22ypQB2BoiyrqtwPTPBTTamPFQehRKmpsErwcfYNYfbZZn7uwGR6rZwignJtRvMW",
  "key26": "MtzoZMNRkvHNX3NkUFDSQDEQ218LX5L7BYKZCbLcCtQTSgpy3bmjVJMgzAB5sLgpm29GZXhhgh3J1ePYW7GSnNs",
  "key27": "29HavAveWe4W18YTxAeHpyR3tRdrJgEpwxRjEuYZFQovfCx8LDC393Cp5yiqvEsa5r3EbbwEV7vVrdTZm4GAeNDg",
  "key28": "SuCUWLycrWRJmYzLbBU7i9n7qTPFnXbxGBFAmXhgMGPMMjDqysDEvUgvbvJpykpuZCmSWu74r1fzRDQtaos5cnM",
  "key29": "KneLR5HuyKrCRkRstztHtmkpFjFTSXbfphszzozAefpLbJVkoa6asPertSR1HbK9sjSJkcXiaz1URVviY46yxno",
  "key30": "4MmtpawEzG8W8YbhkwPEieDY8UGxmXegSnUc919pshmaiz1hnpTuPDPRpFu5KQLriCC4hbCPWoMUWX5nDrjvcvpi"
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
