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
    "5rWA6RgusLTShdZHgovTKKRTMeTrHHUUaGjL17wQgSGavTxapanK75yeGq7DNuwifL1gDoBMuz2QZnR8NJwfec4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pt8GyKMHjvLjMNcXHxftoMPdZYYSASt4hD9B4uDfNeywoqsWZv73fUMfhsN8pGy4k8Br8veirrkYVYNyKaEo6wk",
  "key1": "2SbVxFows9viXhMQ3aGPsMCN41QZw5W34kY7YEgTnbArTstuzubD6MkLsHNdqUvmCsUFVxeo4Qm4NaGG8vWVVf7n",
  "key2": "4HgnnZwYr8PHxBBMndu9RRVc9KAumAuGm8kku94XoqvrWRrXq4D57d8NuGz6ti5DKTxFtgUmcfGLqBEpSwuFD7uc",
  "key3": "5M14xQevhxzHuC8udu9Yk9WqzqN5hMkNC48mukdLTPoJHZhNEmvGjqsiHixJhwmSqZzpFDXYGJoas235eEK9ua3Z",
  "key4": "3Vo4XdxNGBP4Fb1TPzS6Y2JrP51cAPnXTfCQELX5vCmHyAmVM7CCfskN79zvhmDk5njgPGA9Ac3Fz86GjVXeXL2Q",
  "key5": "2HqHMo3fisy2Y3QG3eE9vdD2eUpzDoeQhnp54hjvvZ4YFHUFw247e3TFhq4eYhvKAYULVpT9nDABeLTNgREtFspS",
  "key6": "2MY1moqWg88Q9uLcittgQvBsPb1vgWFd8dr7tZCuZesHFuaERgy4sJWRbhdCmca2tZku5SCFreDP9rPyvBfeKNqe",
  "key7": "2ckvHxVpyvb5p3XeQ2iLfDL8ki5VQDcoihUgpp1S2VvifiioGPpXBi8mTBN6V8LFR1wg6z8jCccKojD7LFs1mDm5",
  "key8": "5PCzKpMr2dqjceimkY34YB3PV5X2DDc8JxFV4XBom1VCTB5wvmoibsUf3AQTiBhEMSQwPM3umTtm7jRXXyeByToy",
  "key9": "3BqvF56KkLadvNmAsXkdssrn9Xji25ZhgCmJEWKpod71GfghoA8KGVHo6EBTCoWmvP8sWMs1UD91guyxfYWccTZv",
  "key10": "2T9HCMzHZ3cTr1Zohsm36gcRB9CMh7HnXR5oLeicvutnGxmmyke2ZPb3G2t7aCdqJbhBUDagf5VmbQBarEZf1qGc",
  "key11": "3e8LeWq17u5fgCwHD5nkMre6BZHDmtaw5fmb3KX9hzsaHPzFJfuBon99PcnrzdnMAmJmBYQuuAvJykKzm8V8Y2kT",
  "key12": "3cpg5h19ZWE9mm37zDjEvzix8quM4Fjo62BL6gXF63W4qyLyY4GFE7ymowGm3kzxp4YoLgEc3sjUrZEp5oTWNtnR",
  "key13": "4T2JFWHjqpF89WV4ZBCD4vhBnuP7K9hribVNQmB1xRVpWQfYjjyPjmaCAygdzwgnAULyoA2JPvpnS3usaKjvTFau",
  "key14": "3tyqQn5B1ZSN5G458simD7Wn33Z8pufFFQD9na4w5xzSiVDUwRTqBFKYP7uYTAUwKbmgDx8fWL783wZGvR2f8uai",
  "key15": "4WeVaBfY9qTCEGe9wvQJxVez9yt4a5XfXbyDKLsKusBvqb8A9r8pDFMStNE3ekBsv9YPuncE7AFKvNqVnrZ3bk5t",
  "key16": "3nf4UQ9iuND5nYgAqGm7YXZjmDRxPKMdkhCgwkcxup5DG76w5BW2RU1pYmN4RugRm41XtNS15FcRyvQrDg4CA8KK",
  "key17": "6MRJgzgy5BV1oJcAU33zvDg5Ghej4D8AXeTTb5hJbuyp4TWxhdkDatUH4DcehzVY2eQWmKszFB659kxuKnaEmzu",
  "key18": "QX2vAz3Ri4kmZCiQFxvFgTXKXFL6FeMCoFjeJMJskTphhn3CAgWNcaXgTErDNEXQfKNE3Mc2NxkM8A1BW6SeiAG",
  "key19": "2myvsYdBNqjozUsqspsmaKXH25NsUjheb7yf8Z35L789q2AniAZZERBKb8ZioRWtroeWS1dGZwBaTPxqEtcTDqW6",
  "key20": "5TZZ2QLmaHNGkWLN94sXboqF6kSkYi8L2tJ97ioLkfgBYJsqVy3RyCQpPs2h6Fb8jn6nL4D4kurp652TTGgcH2Hh",
  "key21": "3gLHgwcVN5s5UXfGjs3FVGM7AqoASnPRQwXRGUd67kM8Mof4fbfww9TFw4e18zV6QEAS2zLi32YGYDG2uTBGNQhr",
  "key22": "3uRy9ptdPyFYgUHwfUGWXBAh7apv1VTvuUu75usdHxq21K3eUZFZrW3nr4VdXEKNdkK6u8oEBsSrvSKse24RfWYP",
  "key23": "2j165h19hTcSQgreBrabTrTM8FwuSfaxR38PjMrBgxQr4FzdqvzMknRmUtHQfY5Cvtd21HqvCrMQuNyyCf8VNjnj",
  "key24": "2ky7bwiH7RGzE1SRWwsLowb7E4th1Lh9yYvwEWuPaFj7JkRAyPVjtjurpmAeLay7QVK76aKHSBEyj88sTdsVfgcN",
  "key25": "4yebPafjeu8RpFzxQ7zkkmgmoVVQ76NmnfgoNRZMfDpCVT1fK5tujYcS2AYGtFSoRz2VBixk6RuCrhXrGikRuGpE",
  "key26": "4WJrm77euveEstaEeuxxLjnbZdTLFu9tt8vtPiFbuFeQEyxSYM12K8WFE6VrmuBp4Y1GYyDymBuT6iTD3rnMBSa9",
  "key27": "55xVk75SA1AFYQnXzxJv6UjQB9RrNoyH3rGKPDEHxqaioLhS6ekvsWXetSYfnfxYLu6SbLKPM4d8LF4tHGM2oJWM",
  "key28": "2B1zidrWDipRckYmMfwf2Z6LEvk6bEz1giEoZAN7PrkNQugMZwkdUBNCbfqfLm4V28goo5b76MbBRAKCaoR8dvUG",
  "key29": "hY95gjTz4yL1inM8zPd8V1Q8BUgpzRAu7AfJVDngUv6Qgtw4kKFcMqaPmUsDzKBG8rxW5KuX8nDDPGD6p8tzA8W",
  "key30": "5KjJRqMfnubPkbTm8WnKm8NXDPrDNWYCtYy62B91dssxnGTHxhX3ej1GbLcsp3KbLbA6gp8K6Sh9XLMZjb9pVxHP",
  "key31": "5xeLHWbkwBmixzW2z9S7pT7jxeVqMDaomMv1uk3NYSSaFviLdShdksCeqiMr4nXqfDA4NwG5NfPE385gFBNQFmvc",
  "key32": "5TzbX7wSugZx4yoUwoEbtp7spiksXiMhAk7dk8PXM5KXpKnPzYCjrFouTBG8DdWCJHrLJ4Trd1cPK8GRS2rXNx6g",
  "key33": "3RJTtokq94ox1G5WzSPHqXHcmT3yCxzqZzJMFsNQG375objBqTGo4AybHhK57Leud6qDJF1QkjbUbmG4RdbcykMx",
  "key34": "4aFj7ASkdrwWCxjw4APi2c7jvKeheq7AQdUgqmD3L3RaPEC6xQZTVoPAF6o5wddoDHntH5Q7GYXRf618mDUmooUB",
  "key35": "3A58X8n3CbSNXwbkc54dc3icPrvt4VqiTuRWQTj4phDZPPArGqy3uPJDMT51pZ45qW86MdTB1rdQPM5GicCh4zWg",
  "key36": "uATE5TwUM1hkQaHnzD5DqLSbFsG4H2sVMLxPnLm4aRA9oqyioPZm3sNHJnRTK5NYHh7VkJWVUMv5D4v64anXMgp",
  "key37": "zgYSAC9ZrCTG6wwJSn4LcTV7KkUgbBFy5MFnsAZDH9dCyzzGVfA9xASXZmtFHDCagXh2swRrg9eEGJ7bQX3SzQN",
  "key38": "HitgPdCCmCscsVQKn6sB3KQq86iK7Ckk6gzyQ4nVyuABh7eL5tWVsMTbZqh5a7kxFYMY4hm94Nz9uNKh5RdGzC1",
  "key39": "4LpS7MjAPfrgkGqxH4E6VZ6qL6c11gAxSXtVAEwunbijxdyBviG9zAWnJZW4V9aCpELbw95i8mKpR38vLHyYR1WE",
  "key40": "4ngRLu1CHNDeAC4GbMQLBFNgpdo9YJXTeA4pEpipL4Cw6WMU3B3f1D9bATsXRGTF74FKwGae6Htit4LH4o6RmZFy",
  "key41": "5dcxPhKUTqKa45Kwuov4LyQQSe1B8PEiScoHS3At6jSzU4p39vadb5D8hCLPtSx7RVEaMfJT2zAcBXVFK22Mf1s6",
  "key42": "czWPmnkpyfFMrZQdJHpw2MwpFRSczRQ4xrLNf7FcsEo6cHWJG1RWXuN8xRpHJU3XEH88TrvRLcVKgCuHp6ttugH",
  "key43": "4dW8Yo3bLRB9sXgMVKEJXsvwQXWq9xmxGCtEFjFUUL819q36TJnTezLVGUoMdNe5ENK66uh3vMHXcGMQCFHHZ6Wk",
  "key44": "2Q2JH2Ww6dSNzEaQDxzmtkT1kHbHmMb3VhZyoh4WKnj9Hmb7gN72mybz8gUYRFZNU98dWCW4VvvC58GeuPEENRuw",
  "key45": "4PKVupJokBARoR6eCt9x6UciRAm6npGVDyH4qiB5CghCgSv43Po6aK5td3HseZbcYCfTX9dSz23nsS5Qy7jkC6Rt",
  "key46": "2jxHKqMEM4YjaNJfwZKK4auPDT2CLHCJzspwzLqCHJv856zuPYKFie8UfCYZM3jKJiMc4FdBRFjYDKD9W6jKZRwY",
  "key47": "5dBo3Ehy4kVdmLnaz1p8dTeJAgs3KBBQFtxSQ6SKeSKAnc4dZSTonrMjMR1U1P9WL4ZmB13uAvtVSXV2RSWwTE39",
  "key48": "27Srj3hgo4uJXRXK6UngkxnHn9q8g2iZvh61meft19jEs3sAFc1N7BCiAyXfvzCrgckZYfLGvvUwoEqGduGGzwep"
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
