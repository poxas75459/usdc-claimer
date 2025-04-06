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
    "37ixw6GW8ADzoqXDEMrmkDpNYMsXnBE2Frfuu46fxEf36ESJP26tpkQNRsucjoWfng5tQRnTaWZLbsYNuwbzkPA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2chpazE3PXgQ898oN1hb2YHRZArCazw9t7p1bVQGjwncC8x3jZCRUKhmese5qa4usspPngdJLfdapdm59BWbwcNQ",
  "key1": "tkVF7g3AroJhGoy7ZhtfFvDPf7y4ASY95BSPuDiL2n24rKWKSvcfVo8DBvMMTM9FBv8MHHT6EN2Q4vS2bgwiLe9",
  "key2": "HxpLKhxRGSC7W9r2CzNt2yPt5jXUJrepJ3zcDirzvFFcMuLVtXF6obG8z5EbKeFmzYx3EzJP7kPrxTkP3fgskyM",
  "key3": "4vLjErWdKdA3GcYXkLtkcyybZH7AAAdyFycW1ppxRXGwLLwKfA43M7BVBFZFDo1b6BcYVj5PgxKXqBEKgMYLuPXK",
  "key4": "LUnC9cVkbRfA43pExWQvrUpkmhDok8265t2fuD4xmw9QhayHRYLjqopzP7SBh5Kw863NNoWwY9nbrA3KtWwE6j4",
  "key5": "5ZxeBtmCdSeV61rDoTpsARcBC1RFZM8Lwj5ewqxt6Dt3Qs9iWfDQJ5K9QJmKHWdxk7uD85xxLgTscSK8fo2Xnb1k",
  "key6": "2y68QVaeWY1AbqjqdoCEYnJLZc4gpRj8amkp5KNtfuXYuU9AQfGr1sscmCYTcg2sY2qRkp6ecKRHzrUU2sF5GvYn",
  "key7": "2D44aBvnPK4zuDRij9ZBJRLQPQX9o8okfnMZtBfRou4mEdmMjJezJGKRWDrVYwH7pd25t1Db4sjXV7ozibEYqwAQ",
  "key8": "5utqMAqVCZhnELGFg1dJePawvMhody7H7RCkFyRqBDpeiRPpaAVkckw7nG6LrBBKdi8ukBusxfJdfivRcB3HQGdB",
  "key9": "SHRz7VFnSmLucPWbAWv3vHGCyzm7zqQ9sukdHWBfuKh9TfPfuDbRyW7XAPAv5aCPwZJhPqLRckv9ycsrqGsQKWb",
  "key10": "3LnyQgtGWDxRBvX1FQpmHAzwP7SpKsxTY1TR2AFiaTyekm1goap3W5r9Gure5L5537qdaLdYEydX3HTgZP35h9d3",
  "key11": "2GuPjFwxsKgzoyAZoRgY9TzNG9rP2v8Cx39o5KfrX1DCVAzsc3xcUdfXBToQ4xDMQ9oPReZ4XrdGymGoeVN7wHAz",
  "key12": "3yi1VDPgE6zwA1oqNekvpqiKSzS58EVC7N9AQ6ocNb4g6LWghRyth598NsLaRU9gK3atA8Bioj6hztC1nJUJ3Grw",
  "key13": "2Eo8jaZNWL2jXavKpesvcVqmDGzAypuFj9tkZKeVWtjdkMQYgMjtr478k8vHc2j5SJsig9N2drnsN15uRwKxZjLp",
  "key14": "5j3e2hDH1giYB9EbhjtMXBMteoXnoL6WXt9T7X6NrYnEPET2hNDnNJ3URNVsbgMo3ZHTTPWHompsSaaeTJbALFfe",
  "key15": "2WrVwwXAANcyZS48b2FyVVMop8hPCba3QS3jt3zQXzSh55TpYJwWNngrAqyjts2vwvd4vK3gn8pZRUXKMTD1iBFE",
  "key16": "52Q7dwQyA2T5qa16sQESnvTVGQ4zrRBr6arTLrWdLzdLzxrdvuHDRgET1kPB71TF8hxpMU82dmAUdbmXfmgPu5h3",
  "key17": "5qvLEK2TmHuz8orixKiMtzgHzF8EYXt19fsND91aW4F3CbD5vBHpXcwgfiPLe19Qypc1W1LJCmT84q232MmDjcW1",
  "key18": "2JwAcCQh2py9bnTZnsFvaCRAmyvbZerYLjNSuyeEAZDBqvvX7rPywgp2x5sRo5dMGLuwJFDvLNwQopa1dNwS1199",
  "key19": "GbbKDgbbEuE275CW1THhx2ufe9HQ4NXrvRhgfRUiChWsMiAYKkB9k1FdBDUpeocPJ7cMhYKQuWSauHzCC6R4eco",
  "key20": "2oGuRhW7cETpgvAbxQScTDa19DFr1QnSBq3httE5YsJCkeCjjUAzZ9Hz5nvHjpPyiaap633C4EL6tPXdDjPUUkdP",
  "key21": "46gBfp2omnkmVYpVNqdfsMo4dxSQCLLxCL77vRjyHpkgN3Br5S5vCzv2zL1WWNBwBDgdX57LBWDMPU44MDk1c26X",
  "key22": "pABTJe7Cw3x8xcgtyCdyogUYBG3tSBPzaBnSyVQmKAD6Av1RNsJBmwWroyMdGf93q3Q2YM8KQmStxaRVe1eERaF",
  "key23": "4tHbSeCeRwD3esv8v8HBg6gAU8FAbXpfdD5SZD7fqK188KYtyPicpzA5f6v93giZ8AW8qJAzjfP1aHzvRiFgE6WB",
  "key24": "XZSi2JxBxJKJQNySw2xnnoH2fYatQyPrG7FrWoXXKvUfczPaFNMt4trFsVLTECPB5quUtoQNwFH7yYQUistftq8",
  "key25": "3r7Cpfrv1uq87SQPKH4iao8xsqqYdQcw3rySrsVSYpBz8wyurD7MePW4Uz2gDund19DJevJu89DwLQ5hFdP2uoQZ",
  "key26": "24VfeKTq31c7kKMWfn5oDic6JQk7nZb9C9TRg49oyoNGgF4q826YQeNSyZ71ZMGURdDq51YhbS3ZaXggcib4YDJV",
  "key27": "9MXVdRJ4ch2N8yJ3NfjonHg69Zq28iceksz7C5V1W6WqWaMYxGpSFK2tNvbSE8sbYDkmH5b3njvdZzQiLihXJSN",
  "key28": "p11kTaxMZFBxPEhzA4Z58fzhBJeN6V3WPrAET66Nan61rq2mYUwAcyXPvqhDvYikibKPv778esnRUjGwe4DCthq",
  "key29": "41cRDj7o4JbDn3ZgUR4Bqv2f2PKucnoVUs2WsdjpLDVofNiRzRZfCPQn7aMRWPv6wSPz3PBb28833R97rh9DcixD",
  "key30": "4mXQXEXEUqzrMy6Da16fCqsi7UhUVyBL75qHpM4kjAuWn4Fvw2fK9gKffVm9zpDsmCb3ybEJ2wRpwLwtqu65QoPH",
  "key31": "FU16sJ5dVCc7UqTQMFfkGLEjCcjEepFSZ3ynfUDdeg8bc8AB8q4Vqq8CpAVyrFWpdoha8m2boud2zFNh2eAeErF",
  "key32": "3aUbG1oAJE2Age6reTVaUmM92E5K5UAe9Uz6mSsc4vK3myA8QaecJbVrXzKFFt2nQi6gxRDjX2d9hWgiNFz2GUdE",
  "key33": "3dmqErTzycwtEKgehJVswfXB1uLQ7xqVZaPT47XRuYBt3YByvZ7nSBzd4ZQmh8TXu8GGXMwP5ySYe8xiendYj5N8",
  "key34": "4sBdi31xKfWGrfNHyBcXNcQqHGYsVBrHztSAVgsrLu4Vk4DmQ1iJ7Bvt9MznBqp5u3Dxench45pD79p8xB2xZsj2",
  "key35": "4kzrJKJSHpVayxKhaGUWBcphE9aAdJRixvtrg2piK6fZQZ7Dfso6pVyrCjsfde91qXSfv2A8GBMZSFQ9h33oDgYK",
  "key36": "4j1WFWNPQse4yTjXM7a4auSGLUc8kLAiLoCnRTeBkCdKXQ6oHE2X4PZahY8Wv3mJGhfDQc7yKKyeGDdfysEYnDdy",
  "key37": "2EbqWAhNRJ1oKyWCzEtfEqsYjMvUi9FyPsmaTSfcyXayVcu9RPSxP38GgmmsyfSWsPsEF2eBavo5Bin4JNRMDAZF",
  "key38": "3tTs93HQKmrAa5hsUt7vhQvr2vgXKM8KJAwnXxLFJZALASyQbGwfiET1FVrVJTtWSF6TDYMri4vCD5cKohvrXSNF",
  "key39": "dY51f4Rskey8PMkE7zajdxEhsHtydJKaKkQsCsphH9wabPToUsaitKdDVMUcQDF8S3xxXfUH54ofcNDjVpJt4ed",
  "key40": "4e3nn7rS9pWr5V88Qqa8BWGc3KmFDF4aetC6LFEGCmRYKt6VqPW1L7wq4d1ycEJNQRws9TvPXSqxQeJmCuMrUtNa",
  "key41": "nhS1fpaTmCPawtd5LDEto9DimmxV7jKu1tjEaXfqufwLhYtYSjVJRT3vnsNDFmn28Tdr474WrZcpVGQuz9MzxiJ",
  "key42": "2LKQm6Pj5sRdvXHT11p4ftTug5kp1YmvPSKp7wrLM9fzNvkSudzpkgzc4dNN6MF1ZVJxXBfrM7PiHEjqeNMGVfhy",
  "key43": "6gwx9NDNHG7BzhC9vwrsxjLCMmRG3NYqbTDGf8jm7guGjo29ULJiEPnqYuUi7Uor22LvL3aB2dGjvChqXX3pRnq",
  "key44": "65cJhHs71eJDkzijKNNhF48RQpJvPbHzp2EqD2z883n1YpAw1Cpfekyyzt7XB8qxgprTrd2zvUCj6BEqfE7vq4HK",
  "key45": "2DsT2Dfb2tjByAY1eQZV7JuM1QqnkrqALTqctGvYQNL9tDNyE3GQy1TYrkmwPqJvQBEGcjXw9noTWS1efrnojSC3"
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
