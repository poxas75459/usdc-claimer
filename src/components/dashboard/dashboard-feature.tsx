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
    "2BjgyoipWPhFGCPMCUn3aRTZgh6FmEEnVxYcGBPvcL22vPLbpNBzXo5dR9wYqWDgcbGSB58HE5TRFtKEfTo5z6aT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MVyeKxWK4NC22VXQ6LqHftcvNcDn4pnzq2hTTjwmGza4bfmb7jE7A5HjDridVCB6Fpvo8kD6RbyvvHHTGogJrwU",
  "key1": "2kLc4Fba5AcTLg2eqxwqK6cXPoZ9hUEYqs1MyuaJ5DmAkpxarTaRMNto2XvrpJ15pdnkRnaHJni89QHJwgTCP9gG",
  "key2": "MwpkYAqZQ8EEEhf8PLmyFfuPH1jJPjAsB5hiUkP4jvS8XkGVXy34cppk2x1hNtj5UkktZtMB3E165DdrhEJUmFp",
  "key3": "5EZ76wvxRdhiZyN4n3T7XtnZFhS7NNv8MtcM9hFwPMUDzC2qdokS1cbB63QWS9nVi5o3qY9DC9tk3XnUXAuNzVV5",
  "key4": "4cppmaRTExnsm8LWoAqVNBQCQBtfsK6f7Q8n8bXwmSVCix2hr7dJhTv17YN5ibNt9yon2R4emmVZjKb1Vx8fKbGf",
  "key5": "126sDVJeiGWU8UgTpTwG9b3ZGNLihqgPzKdje9GKSBPtfcJxm48ry5gCDHLg9Qdqt3eq1fSoDhGJJeQjJHtaaFs7",
  "key6": "2TzLdHB6LrxbRcXYxztT7uccCdRCP84SBRgV3bTRfG6NmbkF7vs5nbjeFZgBW6bztyF4QA5tm8NTDhQUg8TknnRw",
  "key7": "22PEYgao89iiqo4SV3xgyurF2KogzWMXp5fUu7x3xiqvYrH6CtA3UhAysKP152hdJzMvdxdx7jSG1sk2nmb6XwmT",
  "key8": "4LrAnTaYXjZp3yoH1wayC3xXJcXBLcJXhzLhSqyupEswjNgTgYV8C9T4rXcLjKTStpCkrtVQwXmkFbN9MeYb4q4m",
  "key9": "5TdpdbWMwmU1CaUaYryQkNRGJbiGTWgS1WDzNHNR6U7h4SvmFhzZPsSmQ435wtoiGCzX593t8mBfdyFmfNdVxTGt",
  "key10": "3bENcZk2oLggTfuG8b9tnLQfAiwQKFa4mkTn2MQAqrQsJ7B1f96pyiJ68HKnnNpG2RvSWYeEzFY8cp7rjpKEy17a",
  "key11": "2GwX49z1PF3nHWLUPPjtJfjxTxNQsoBuUvP7HYV8gwS5pu6RAFLtdmK9XUqMU1kP85nrf336g25s1aujAHB4oTzc",
  "key12": "3zAgmPi6N1cUxjNP4XHipNVky97Q1ZkZwwGhJxExJTCj4rmqBpeHveCsTEQZU5kxv8TnTLxPKs6UPAVFJh6mGxxV",
  "key13": "4VtMYBBRScZE9BwvAAg8QCd9RA4R1NKSiiSBGkA8zyuS6bXtA9HMHiThrKyDVZMCF7VDhUy7tss19pFx7gxfrh2i",
  "key14": "4jW6yW2zHyqfJp5BosUnY14fhnEt2zLV5A6uzzr1MFAGByCCUypkBm6e82SYSWZybjDWHDbVJWpV5hxveuwaCsFV",
  "key15": "2HWasEh8ySEzQ1jVjpaXU5GAVF8A8mmZ62MYihCkuX7B17TQJMgfA8vjHqbnyqMxfTgDQmCPgjZAUhWBbiRU5kSu",
  "key16": "55VJVAvbiyDcaRhmv7KxkNZH7GCg9VXKzk52KxV3ttDtqWbVzsiZCJpSH4aLQ6fWEvuFYkcsocYvazMnaxCrS2aY",
  "key17": "4JcSXcy76SLna2SNaMwPH4mXtAAXHYxVrVRFFKVQUVjTgXV558uJbCgkm58AET9vtSUMmTXU9DNjdRioPRxtLcCe",
  "key18": "3cw5Cfx5UdqUaCfEgridEjFS3H6zPW7WJAvb3iFrK96XQ6oQc8pdRqwaMN2ZHff1y3GBxjKHTExm2ThpwnVEcuBe",
  "key19": "343aZLoEMnpFqJYcNsfmmHspMxoPwDeM8JWrghVoYj3wL5jhBLVpibM3uW9UgSfz7WfW6kkboKvSGV3mywsBisZL",
  "key20": "c4Ja77dyESmuJVaRTpnwqkqJqu5HkwvP4PqNYKEGZRYmgf7VKyR86ERppDhisCPJ4Ts8QMwbEQWfPEpiAAiocbs",
  "key21": "579GmNcNXnDtFQgAwyj1A8u99vdzoNjdyLHr9A71W1gY5hGHqyjuCe5ZiHMuSVQXj94gbdgf6weC2FqQfuwEWyve",
  "key22": "3yFmCv9wsHgbeH2teTU6W17KLaqizhy2mDWyZ8hU2BHsYitGVnBoakyixz4J31erWCNvBtrPX2wJpt16iTG7Qc2S",
  "key23": "2kr2vthnizvi5T9DNNwZAXA3SPRvsGtgcXLyVUxcxW3jXzeAiicf6o8CRKHb7vHd27wX6GzZGeQywRUhhkovr5SA",
  "key24": "57YrH6ZgbhAzhJy221dPoeCycXPF5AFn1g8S4WSEqfQnPYtJDHrtNrFvFSSGyr5QGayEksmYHtBW1UiXKS2m9ZnX",
  "key25": "2WHZT241GS7HEih74zhVTTHLrDgbU5ToaD7bor4zAHJxbAXyiN1PQdxqgBqTqHc4McC6vFyDyE5XDrsyAba3TEAC",
  "key26": "2Ekf3bKtjwmnTNfZQGu8YfvHTvadXpEWygHSNVfVeN714PmtvwYcqA3UaJDuZVvgFSAnSbd5BfRurMhGR3mdcQjh",
  "key27": "55rP8dES24czsDaGK7u6gmAY3PEk5yvUYxns7pNK1NaxKPvTbpd4BXytfZr1QEHFL7gvsenEx7qdhWMxQT9e166B",
  "key28": "3iMZDxb7uNyNAPDTxebRDzzThP7qdwP8G1TvnFLFoD5ZxeRRRw55AorL94b3LhWaDfmPa3AYRvubBsJyoVA2AQty",
  "key29": "nKK7cSMSwQJTrhqfEnU2pmkZouCKNCaokMWd6eaynv32KNHVhTBzRvz437Uq9u7XaaMhHJFUiN64qMyZztpLUU4",
  "key30": "5xMdHXWRXMcoFfQCXhreqN6pZuhEsKQxVH7AsrRbtXNaxmZCru8T77ZW4piATkhCDuQ81UM8L3Gg8kdDjtmJ97ZN",
  "key31": "3v4wxJQCyt1mDxpyW2zk2j1Yw1fEedocFBimHNw3RkQkhKre3FASBYYZ2dbyhu2CbGcGqkPDjLXEucbMhQZSyokf",
  "key32": "4oPbSJtcozxqdU2d1CQkSJsqDr9H7z6P6PLQPqLBFJ4WxCuHZejS5NVDutMztHaejHoiC2SagxBpYpn99WohrQyj",
  "key33": "61gqcY9QYcnERAEzZ2NCpTkqQTeTZeWTsoKGnuY9W4jLX94NE9pyZtg4d7RnkW2zQdMEbfCDfbozzcCLtWhSDiXz",
  "key34": "9JCJdLnreZneb9HRuQCpb5vtPh9YAn48R2HSDgdwr2rbLZeq9Ea6UXoC6rugCxLJjukaB4FqXseEcwzgom3FKYW",
  "key35": "4ynKwvmCtbrwWGXn1Pyrj53tAKUamcjB6qCPWQnHYKYnzdu6GWY5oC4YqyQwm6RvGTEBJEaLTqQhMbXzXhwww7bX"
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
