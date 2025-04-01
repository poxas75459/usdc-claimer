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
    "SZz5VLuu8QJPoL7xQ3FJ23NpmYyKLvqbnRaif5EwwXmV8hfANSsLA8jQEnAi3JBULJA9UFeWeDUkGWcouuCwKAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2urabk89ZLURGvxZWYRKRNzKx3mxcEkp3ECMfDwaAAQL7afZAfYQJkVH8qXbZXQCuPhjTHyvBRuLJEN56tYQdXh",
  "key1": "5SQgnAAzG1TD1Nn1jShC9BEpY8m2abhBZRMwQfvnfrHGrrRZdzRc8h6FY3C85aTbzLaVJbAMdJmvyxsQZQU5ASZE",
  "key2": "67W65AwJuGGKJDLqnx876xfk2DRUx94bFk9vP673F49iG6y3aVJrNNgiuD1cNrh4X6E64ATc6TrYEeduFDMBmEvN",
  "key3": "AY8jG9woMns7cPyV7E9yoYP7WZ9BEZwBhd2Hv9aoj8yoAJJWVBgciEvtnKznqQ6siBjgMBDBo88LDSVxHxY2EAw",
  "key4": "3mSnj88g6AM5GkNxhVseAABsnrKuocBodSQRMfhuEiRkiuRLQHnSQWiZhBXrbzPv4ENjzYBeyAHp55J3aYCjtsYo",
  "key5": "d4t3o928vzTxo33Mrj58K8oRXmYsn5FqnUKt8AbJSi55LTpvcTheasei4caKHCH7pyBeQWd3CJYF7ANLHQiKhBc",
  "key6": "4kmXnfHDanaEB1enRpGs6qJpir1Nu7253hXY2ssxp4gY1hSa3vzeVk2Fa58KhhrGuEu3vvStRqPmaDAvKPL81wX6",
  "key7": "3mQhWrue7gAXf8jnJsfDZeLrQYfWpsCSKHYWtax9wqAb1QiDHx8SvKDfzWiZAXhnrz3rMASQYGgqkGKqhsrhGwp",
  "key8": "3z9k315npM7guZL3W12UWMJetHjCVRHosPNHWwb8QfhXgaF7H9YyNZzETRfULZ8JKnqEwt8gwacyog6Q3C31vREo",
  "key9": "5WQcrJWWmJ6LuJGGJUEEtBKsovgWWA5XWRqsmgJAe7YUo67J3f6b7u2wLpQ1XYDwo69rmfpH8EZr269uAo6oB93w",
  "key10": "4kMS8yUDxGvhBaCZaNatw85XzzZmreic7pYCe46WJLdXPFYTpLmvEtzHKjBTMXFjJHBjoGi5c9etFZjQzUuDZV6Q",
  "key11": "VJBuPyMRuwBNLGSJrzNPpGPmkwpCgBk5mad7AZdMxtGESDX2qVhnMXYC4x7i131hMEEdHTHgV3wDTVtHoycQqWK",
  "key12": "VvL8FrJD2cEHaFAG6RhgTNyxnKWgfY8Rdywn6221kvPpdxewoGqwkqt3o6TN96y7ZgPc87gfTb5M86ePoWkPkhB",
  "key13": "2sRhhbcLrb5FrzuTCdpNxk9o1vXnsDLfq3V23pBJjEZkFrKFykbQTKjzj9NaYxY5CooRdHYGFQYCKMECWN9N36dQ",
  "key14": "4BAGhX58x6cXnpstA7ch6LXYZc2H259YWc1xAoLqstEd2ardgTUxmqJPMQDiEakkGtRmtfMuNKi3yfpdDiNBWw5G",
  "key15": "5bLNm1FwcwiN3C7EJkcjjJmm7AFgSJ224jRqDYMJ6k7umUV5KTfQ6qP2R25tkmGeueAUrurr9pgFTuEAttsEaLme",
  "key16": "4SzENNtHr8ki4zAjSZ57rCV1YYci2L2yQBV4HyFprF6gYKBZFEzajdBWeDrNDRFChzKzv4JgCuTLTno9RDMtXZmf",
  "key17": "5esvprqFkQ77xeWgtRqJU8HopAGzGJbPcp3h7R7HG5noUYY4CqP1nYZbh37Y2u6GWcR1ao8Q4JogDFm715HUdZ9v",
  "key18": "3H1XTUhKQPMeYd4kTXJNkT3Sou9NjyWq8PdHS72XBk6eCmv3RsFVbXmh37vVGGsDwPMZah5ui5uanmJSLueNdyXm",
  "key19": "5Yb5pbnycmdXXn5riueYdgAon6V13NBapVcem1s6qTNpiEXWLv4MBr8ydPZWtcc4kcgKG95ztBT8jWNx8Y5eoHvh",
  "key20": "3adCQb6Q6cjq1bXTFGBx4izTig8S1n9bjbkqUh9utcAsEA7Fwzum9NVCeWFaJgZNtLDLdBG8CvpdatEKyC8cahvg",
  "key21": "55qqQNt65BWztDcqdQqjDouCEnbo5Jpxg6xNYjsWhzFvi7oYnYHaayWh9BA8vfcpKRDKzbGktaAfowFBift7dojN",
  "key22": "3FsLhNccgaXVrpCjS2tUWB6dA5Dr1MPSkqCeyL9uEMHw2tz476smAWYn4rtDqGsm9p35MgCWBUPvH1L2Z9TPLAWV",
  "key23": "3C91dWnVjGFdqHcKbMr6F213b2unuyR1Ax8vhaXbUg1idYQSTptfPKe99xPK2tpAbXBhCJXfrCRYwe2EbYMfJqcP",
  "key24": "3kMx3AMR4G3CKKSHYFJzUgySLXEZTb6jf815pnARAoqmza9s7zkmiGHQ8eKoXjwrTHjfDGsPf55Vmf764oqU1jDC",
  "key25": "4zWAVMtP6Y4NVNxrmsF8moTVKPpwbjw4W28JcwEqyUx7hRDXqHe51BPcWtRZdYEwCtTMv4yGqMdrFA6w6KhxtgR",
  "key26": "4zHoyyAmBXG9KzUZYGa2TiSwQqM8FRh5hRhPc31qLbHHRpQDtGHZtQAPCW7PMb3SMSRNBBdVovoPe7EtqvPzt7zP",
  "key27": "3q2KcUy55ApiyHke4jddL42WV5NunnVfrkUe6G9vCZLHengwiieiUC5ffa8CrbAb9x36Dp5iuX4Na4Wjs1Ho35Fn",
  "key28": "3kATrxD7Yc9tzQiU8WAPspnbyehp9MMai45D7YCofnVwHVGnwf3XQfzFedezCgxFuhy2vUJoHgV8A6YE19DuHSPp",
  "key29": "5rcB2eNjz7Qk4Mcb2jbrpkep1nwguaVJQQrRQjRdoC5rWsb9FKT9CybGxhEMjvHi5aFwiLyA9cCa9jBB6u3wwMBE",
  "key30": "drL96XWTyrGyaaWGvhibt7AhujFvmrQMVQQL6dP7R4ahnWYZgvzKwqX1oS4HakRi5QNE4Jb2YMLuLnF3gwAzarq",
  "key31": "4XmY3cnViGb7UWhrS54ZXxXEYAP1LdxkqWhjNyFD2dgcfniGVhx4TyWCrwJ7jevRrqexRpYtntK2gkTrj1ihRa6G",
  "key32": "3chNJP4S1DaAXntTV45FVanTEwsVbfJ3aH3bgYCR1DR1V7jyceTqsoSk9eRmZS9FNyk3N8FPxWoVJSKfKWzzg68e",
  "key33": "5vqmgVnn6kXtRphzKibVHnjxeiARvwLGCgZadKxSkeKna9FkfvEVeHP8dxpH9NtXnfKvebTSzD4abuqTt255eEtu",
  "key34": "2Wuq3Bn6FnCyus7HZ1wwp5PAET5w29tNDzMkprV52oEGkRKpBQPfRhTPMtuwEvSpBTaUZ2KgNT2qV2MZuok3nB5f",
  "key35": "2ZMKk66DRt3KkLXgsQrUU9oCXAVbZn2oyXsMNydrypfXXNqzc5T1miNVaQGvBupvrNkpvmDCBkfPtz56o4jnmzG5",
  "key36": "5K1zR65MMFg7Yvkqg4nps45LY7yJhCHsdoPx935xufE11C1eX7VTkeGRA3YKzwwfyx9vQS5Gg3vP4SgXNMpqtX1a",
  "key37": "27wRxzQAJnN4mpxCmxK4geXw7cCRrKv71iJnaD7WbJTwoUc5w6BTdkXTLgZhqemGnu7sXo79FgYYCcRvAfGkueo7",
  "key38": "4wYKmVfa3CJMEUvp4zFnC32S6S7nHbMC1rNzjs4JTmzLNTKQkN4GgLLULjFVRSXMuc4KvseinoktDuXer9c3aMPs",
  "key39": "66dRBDFfV7ht5NaW3ExUr9EeWKrrysGJdqAHiG5Y52WLVCtw5tQbQVqBdzjUiDBawkvRGKF3anNwycuSLv3vPtsd"
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
