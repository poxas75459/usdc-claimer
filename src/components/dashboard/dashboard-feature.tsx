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
    "54GuiYKej6BDmkde9CCKisSoSSejfzRZHzk7eKhJaP6DRdxjHbRGVh65844P6SU9co2Aet6wvbPweuPwVcHgHkqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q7PJ5jyLAd9YWEZNoThUS9WVj1eEoUMgw6S8rRaha8a8bvy6xjVHj3YitychJNYjH3V9zic669ay4LSRrsaCMEc",
  "key1": "3A3q4xtpaUWEGXNwk83KLKyzHV79qumQRwDk5576H7RyBdX1HX4E7GjyEVza2Tm1x9mk6znLrAwrSHQhsyRXqEc2",
  "key2": "xBsMGBRdTf73mFtibUqkjDST85Gi5h4Cfao1UR3wPFR7heynHZi4gqx2Nu1uvcv2orE9UYNRUvWaQmP6o16Vqd7",
  "key3": "4uRKyjBtu4egJM3QHBiZ1K7xYRHisvwEEkwzQRk2oQ7yLdxbBkxVP3CekHUAkqT5TQhbf5LjvnZwTtTrPgFfjz81",
  "key4": "5wH2QzuTdqunjy2DPjwKfdY94kUCwoq5t382PmM4BpGiMbYXxLcW9KqTVjXH8mPPyyGzpDvWbL4fZZVHyt5Gb1uk",
  "key5": "43vbRh2zpmiHZUodxmWAYn7SXxcqNKyFCWYwTT3PTa83M1G2p3aS7AChaZovShs5HbALdUgvyWRGupcRvTkGa1SJ",
  "key6": "2YEGUsPP9s7oaqGcPpt8PR87SkhWGuY3MMZ9xPshDae7GmSxUeA6KfsNaEypjd55XHf4tqxYRDawp1PP468rJ48w",
  "key7": "5KEBy3ytgedWdFPAH6uqAaYd54J97qsXFcRfcTiWo95ftvcGQdecH8iJAgD4HqR1LwuZnQt9Uq7gQ7xcHK9dnaSY",
  "key8": "4tjVm18Wf5C43yvhHvuNY2e7KJwUjCuYr3o1GSi8HG71NkYCqJj3jztSiNyNzqN9wZMyKfJtRGe5B9F68sR9Z1i5",
  "key9": "3wWNxvSjmfkoDmSBmRtAnd3Fps8QeqTsGrHZjf1EGfVkCuJJpy9TY4tywmTuUbndAaHRod2feKyTaXvAoZkUoDvH",
  "key10": "49fbwDr6XPofJqS6Pxo47Uyp7S6nx7s3FemLsnup7GNEefSKp2w82sQdKjAPoAChSQV1NSdXBaXsuReqFmunWT2c",
  "key11": "65NNxnTbYtsWprf6zDpH2sg75UMEGkcipN1dEwLDzmVWAds4VqTemy3HSRMedr9rMS7yWTwsMx46KYCRPU5X4NK1",
  "key12": "38XqYiyK8reRYssqkj462c7pTdW3XHYU7XKo5gvnCrzLa8LdRMvCGodhsGYhSYqs6GzmGs8bdWj8m9577e3JSByq",
  "key13": "3ATMvN5LvCiabiA3dWDQGnxU7fjRDQoiXMdzkFRLv4PRrdCBH4mhcSqqv4aq91AsmqE8r3SqA8HR8rgMaaeGCw49",
  "key14": "5R8XVkXVMLcN9SV2AWidKSzxuaLc8wqWVC3gxDPpFYCe1S3VEZ4rFn6hpb9FJSoyTRDFvgZCAa1NtSETV4FCwKiX",
  "key15": "5sw64B7bYr2scpTBSZr45S9p3W2JFsgykv5CJt8mTYzxyuGMrDD3Rrr8gS66Abfaj6xd9ZHkk1CVw8Xj6DMfcZ2a",
  "key16": "UsFB4rXvrbqCr17T9PLf5kfbambLzMHkuQsRsxBmgu23kJdK6K5E4bhhVRKey5xAPLVDwgGFWBNJ8yeRrokhV2o",
  "key17": "53yvuJVAjC2zjnyGadR1Vuhoh6YYMsHbMEb2uZHRfMCY7ViimRb5gKsk5PEEFLztSNKMW4aHNjJHUpuRzXic65Xm",
  "key18": "GuhqjkmhMiC5Q9hpu8MGY4Ki99ZZM71rfszdsFy9kVrbFxaZNGDfsxwXAVneMXkriNMn7o1GYiGmxSVQtCotgkB",
  "key19": "3nHkKLA17odjbZ1BWvK1s8iQPW3jPbg6PmaoPGnp6NG11NnK1JcgxJ6pmTng9xqVJuexH3LGPEAvd7bXjHmCUcF3",
  "key20": "5ia9wujDQ8DGeZVv9XdzKNbC848owCmLrmPCcNJpABWzruTEnjicvSwp13yT3LcHokpP9aZ91yKKg2PmDBKCyTsJ",
  "key21": "2UVX3nga18A8o7HrQfYWyiXGfcUyLTuNQS7xS7WkMJwjTAGmBrRMqWHP2DtkJ817whYADcCDNa6frF66NjMTxkF6",
  "key22": "xiC1BfsaP8p59CJkvXH2vtYNTqX9D3191zae5mU3WF8YBo6KPPqgTviU39TSVbUpm3Kk4U4iW8MdmnAacAj9nhe",
  "key23": "41hV65D5p4E653osW33zQoH6SPLdHWoyKvs6fFdcLLR1jBeDJxMFLY7qYoFUWy35oMKkZ2cAA5QQEc4RUxcfQCVL",
  "key24": "3sghJ3D41szXo159DxMurw9wRDmSavr9DaYKNsidkJ82F8FVywyRtNTCH1NNVGLZijfcCg6X3HBMqpAWiUWUZnsT",
  "key25": "3S2RMedHXM2cDj9sZaG2QKmmtUF3AxuDtARcJb5U7BJyEb7THTccSH75cYoAQfQADdBnG7SyqdLjNg4SQ5L6V7DH",
  "key26": "3BptQptqtu4Cs3VP7t9dnWySTquY6CvhRxr99ixybYeF8TxCarpXWyyfKAjAcK8jBAupSzkds27Z5S2uJuQjcMxP",
  "key27": "mQDVH6BNAHoBExud7kcxGFGYavyGYNQE3wMzC7VQJa8mWuKJMPXQS4S9SnqcSi7CPxo11g2M7jNjCog1bnQreTQ",
  "key28": "RogYbNRnY943uAhaFD1swGUwixFUAw5Kxao8AqFeDbPwq6kTCckq47HpixEJQyu2kKkN94RQsdRYXT4JMrHSSoh",
  "key29": "1WhWdZCJvos6ULaAx4jB9KprFPKYbcTkkDqmHgkV253xnNp7xxcL3AWFgyrBQPmdtQs5FfE7VvdZ3kfqAkh5vfH",
  "key30": "ttGcfAJo8SsVguSFSUbnLKhXUbjMqwHJ16emCYYwBA8bJKmHtN4fE4ohERyZJdZBTH5WhAAfMnojNa7HoveWoio",
  "key31": "5hy77utK9sueATJZBpy5C3W4LHKjJczH3j2RPFK6pHizBipbQ55Mgzme6WoSbbPLwgUxZbUDVn7wmyWCYEVyBYQf",
  "key32": "4vaRQNBcF5STRxB7NAgv7LrTjNgBtbUJxzgdGDRPwLTE8eVw5x3pr6WUiDRqcAz6ccFrq68dJzuXZUcL3RaxU451",
  "key33": "3Fe3uQfGd36qLDjA6JtjMH4CnLdMfrLaSCSzzn1zyg3dxKUYBhUrkWiTUUzimt6FkLyGMYN7QXpvpSgfgheR7edJ",
  "key34": "3Ayfud2JrAbhU3632Rw6FmR4k7CkaW2ZxWpf6SmZNfU8BpXKqYsfY2VTo9BLUG9kVRkgPbRWjCCz7EFGiKVYYNaS",
  "key35": "2KAQNjTEHS8qtBZGaKTJ3FKRw7tg8e6qTQNu5RSaakR1DwrqnXW7cTeDTKWJoBWRYGAb6U3hUytdpXkFN8sgiomA",
  "key36": "2NSJt3NKU5Y8DPpcJ98tQE3sRu9gZX9YxxPFrCZKR8T4UCtkZwm8zE95g38c1C57TXA8oJRfrQzwZgM353KXL9Wz",
  "key37": "2qLyJ4xrmVH5Lm4JQT2wp7qKCQxQnscJyHPHoFVVHXFNAMghn2oz8PyTZ12WXbguYrRreXfvZBD2Amw5WCtxzPxj",
  "key38": "2FwvguPVt7X79S1xTUzJ5SRXVFpV57G5esAv4TB4ZBH8U8ar5SMzV72SXDT6Puat1yEXgwWAcxUV4Bt8i8ntGB4u",
  "key39": "3yxPb4NqMharRj45S6V5wrs3M8yLvc1EttyFJ934NshW1AWpeiLgsY4YRxY4vqox3NTCDuPb8DULRrXicVDyZE3y",
  "key40": "3SMowQxnAChgdf27DNUeB1erLv48NuCt5DqAz68gttmjoxasJnmdmw58VPSqmtyyAEx237HbZ7erDfMX3mEVKF5E",
  "key41": "GNviD281DC5fqstRw7q1YfXW2Y5gE2wiMceCjdj9toG39U3UCmZPogBau37QXF7tNmqeSPhBDQ5yefhi3RmP7TA"
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
