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
    "yE1phDG18TEwvpRzqBHwRLRy2zU9j5j1uwi61DzSsX621guZivWMgGKmZhi5yJYCnraUVRr7RSGS7Wybh7MxSPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DhFWaRinCddofP63BdM1ji2kVSheNgamSynfjvX6vpNRUcckgbi1dsBxneruSWo6eSV6fzpT6jYzqQMHXYu27Hx",
  "key1": "zUV6qp7H1Mz66cMPi8YexAiBJDdJhawVV58gaLkNv6UdHzrYMHRPQgrLQXapDJfi2Dop9RzMTFbBduEMkmyeHBe",
  "key2": "oYHUqQ9piNjNnfLKWX8Y8YDCMsx5aqnsZSwqu6uL9Qi1rrsYut5yrq5SQd6QhVQH4P5NDktcgLcJmTaBEtpdJNN",
  "key3": "2Mkdvhcie8VBJnCdWrCiyJP2mKNAaiN4LiNRpRgsnjb1HzcMWv6T7RfNePAjACKo7R1AwntSq9pHJAX3wazx53za",
  "key4": "5VsqCbo5wMeqe2azdX2iXBZj4qLa8NbWuzspREmA28VnPpfcJQMvGrd3V55Y5EfdNdmNaEaAxivup54gGYoLBmzz",
  "key5": "5ApPuEFkwvRLVQMBQADnC9fePrWH1RJGGYe4oHQtRCnYuW4H6Un9awuM4A6vtqJYR8xBNLPEUZnQ5VvEAFKngN4N",
  "key6": "xvywCySpunvbUuHUWe7YtBE6oiNBGVofJkK6MCuH6rLRQ1xgG1y8SRf9HUbSbWJ656HNycFEMcyoZUZnBaJqSSf",
  "key7": "2eAF921FmwDEvi9hj7v5KFzCTe6oxavCxEnVK9PGQGK6EnZVZRrJUZ2DRZDhqJi1u9bQj9NPDUUMuZzdwvqDLKHo",
  "key8": "358yqQJbCawCcSxHiukeP2WX47DPWrZVe6vCYdz4NNvNurLmkAeCxUS9kqhShy7sNH3W1dGoi1Phw3Sg4CnV25t9",
  "key9": "5eE7bz8XH2RSn6ffPW4nU5LV627VaxEnJWmYGi2SEuq7XoRWrgzh5fv6EKGCt3DbSzUAMHZRPNSbMw13SNZkmcMY",
  "key10": "95Yr3H7LkH4BALDVhcMWLduY6SaZ3YuHiJv1dqCt9TkC9DP8DBgPAPLDS58VWdwx614cqeD644cog563PpP2MJs",
  "key11": "2FiPvvRU6h7NnUCpLRL73m3pJwxFwRJDd7LwJmsDZJwb49ztqChVNUCqgzLgxfT2gFyVyLHHam2SszcnRVrbQJXd",
  "key12": "5WsDUwWYwouXRA53MXn4dAi2wrt9FWzwLDeM4LF3s3cqQNVpVmGGukhhZKNqcNGGSd69LmkRc7NUkWCErQKgiv4f",
  "key13": "31T6NcutQuBJdkkGhrWrM62nELGMeeF1piJu6uWhHkKQG3W8A67HhyEtTtdqfPCBkjhgkX7iHf9t6Rethdcg8hJ4",
  "key14": "2AqYezBAJ8HxU6W3Sg9Wq59bgZoRCdULZC7G2tUYjtDn7tNrdPa1F18ZjpHXXCJusxmrHGP6V8EDD7kyBxVUakJy",
  "key15": "3Kuo4W7DjiRUELnyPxnbrnw1DyAtwwToENC1MVFbUjDYd9mGuWnD4NR8by8jwVPZJWHMHD8vwkos5ZhwQSa5QgMe",
  "key16": "5i2nEEt21U2dZNFVfrmTPXijC9XXje9idu1Hz3wy6TjaGLsMfwx8RsWVWLrSLFKbBN2MKfDdmV3ZdJB9bMYwuZwv",
  "key17": "57cC3MbLmEUdARERpSpMEwC5HYas8KgbbH1KENFpQ3gHmzsGpduBRxQFvmhwq7DtMYYhm92wMaiomTZUrCJFgtme",
  "key18": "394Y9FyzitY7xw6Jivn6dXPeG1gmAcrEBNvNgyAb5m5uGFmt2aWKpA6CSWzcJy7jzoj8ejMxhPZb917jRsqDXwvK",
  "key19": "2BRfhCtoMNhFvG9drkAwEaYLntDTMJBEbGm6afKjF7fNtYzud3myWh3UranhwBVzDCjYFxpisZr3t3dymBmzPLFb",
  "key20": "QkcXAGHVYKC46rgweHnSifsvQYv1bjuNBgL8gPmYFfg4uB2Y4jaxzrcF8YzGimU71awcdjdjiSv1soG5BDkSXEt",
  "key21": "5odsHC2vH3q6V8unwZjWxME4zcpRGVrRvXqV91rTVmugVbnUTup9pqpmC7gJGXdBQfgNTq6F7sPx1kvGCg2Kp3AS",
  "key22": "4T4BiBNHnRFLDPo8Ju8atgZebkaTCUAxkXiuRiWY3RX4fpLxvyyXP3F2XMSbueuUnQqYrbpVSQoEnRvF9VQNiYa3",
  "key23": "3SaExEmhvPMARrgpUUo5rkYXzSyXu4HcdEDca1m8LJqQzr1xw6WkU2dVSQDmb3KCw3TFttMCm3Qvd5kArj1844qk",
  "key24": "2e5bVfrA1rDkzMDVxxT4kbiHEHaWjz9v2j3JMrVvc9zKQPLGbM4zWrrbYnFejiTGeMzJ94DFEvMJta3m4ze5BUei",
  "key25": "3yc5WqcYuLZyVUAfmcNzCf2NTvLj9NMudcWP7REJRwNtMShaQBddrRBR3uvcJaR3JoMvNr9v3FdCYf5tAC1nFqcE",
  "key26": "4FM175UAjtqDGLaQ1vKB4yQbKGxbvpzogWxi44Pv5xWZZsnRgmR49TmfyHnc8cnGaK23g9HT4o87AnwRJoHvrq8r",
  "key27": "65AeSY1weVkoYDbQVaK6P3JzcybY4xEooKwksdwMegpEL2UZtRSzbHNqQLVMUJd2pozbKwQ6vKio3XEdQt6AuFn5",
  "key28": "4nUi4zqt2pkrX52oPnpJ6q3mJxAFTrkbyih31EEpMhUhfEPYf3UuSS5jQXiLuKrrb9dLUmcgP7BbSKYCTABStnA1",
  "key29": "4suVZRtW7nKYSfmAArokU3QQLNZCXvS2Ydo7edjd6zTDBUfcGz35XfZbTSb4gw4mieTHb1bWMh4nHQnYcvrimohM",
  "key30": "3ZtaoKs1mrQL4kVq1ADYxbmZMuWWpUf3NKKhU9NKkrAXD7TLcVgTvWJnytMoNaXVDQhhC3i8172Cpm1A6zvwrjcJ",
  "key31": "xXUKsa9wtobdhej5Pq1sCZnFshF2aWKDoF3KkZ3Tk49K3W9ajnnhHJ7ag5dA1nvHB33JRgcH4jZYfhQTDFEBSH3",
  "key32": "4g8TJ6zSLDoPEY8BBZ64NmBe6G6wwiZTGUA9xv3nRYppNki46UmHpTbpnSiix8jbv2AFXEJnUgcUzo4wtAX6jx5c",
  "key33": "4EwkRTxVXwnVadYsmpKcii3zQuWzGcFyuScVxLMz6XaqcEWq7fRuXft2wevmiwAMf4ezcZbnpXNfjtYBGABHxe2E",
  "key34": "2Z7FKDetXLmjZ8FJozTiSUVCB4aHEfXhaYiSzUVsuaPJS32bwpuxyEC3AfWmtEnRMQYfdNm1naXWyUrhiZaZYTLM",
  "key35": "5nD1LGHbov57FX2Jua2JxhJYzzBEVGq96DH5RHE5JUTR6BVMXRyMGYnTQiDDbUuEnCT1dUuHafFNYAkNiwoC2zcs",
  "key36": "4W6nn7F7iqASFEbS9mFLRGAzvsX1tA7RUgbD9cx69tcZjBgkPfsDMENbKFV9n9YearGwEKdKnRymzoxxiCKjbM7M",
  "key37": "tfJQbhrRNh5aFePtvmvpjbid8t7T5PtPMRMnMrv3isJScZBwwy3oZC2aRWojLGdj4c6UsECpruQKvRQNwrrVxTx",
  "key38": "5gCpRYhtf1uhqxwPxbgK9ZREj8Kast9kVJtnwztcoHRiR3ZjhP9vkvmQzj1SEVBT6woqCFMkyZtcwBQPsA17h26B",
  "key39": "4hQXEywLvHhohmXZcj5nj2dp8HK8ZkrFnsYojFXXRbrmoECNiSnF8oD295v2qV2izLyAyNJu17NMCuuVVAa5x7v",
  "key40": "5krR1qKF2mUSPThAp8NvP8PjKRjX8Hsa5fX1zS58WHckPHPaw7vXEvuX2YGY2yxxH8nL84QgynkPfLy31cJope67",
  "key41": "4XgfQuN9jFi9YfQAddVCnReEiVyrNqRk1jaiTaYbqAGTJiXvr6wiccYkrZWGtA7yoaMjX8ctAFt9xyVto86DkrYL",
  "key42": "632kVXxii72nBBpDMozkXZkqcvbF4ATKxGL44JZEwJy264Cb9zrCcS9CCMLrmzQrAjEo5S4bUDu7X3g4sqgavRVU",
  "key43": "5z3jKeZZP5zhM7vrsm9Bp6YVnXJ1Gtd1ArtSRRbhNEMNpxi6Q5ERKHgcFszBjEoRQyuCwDSiRTLJcXR16GPDxUtX",
  "key44": "4f3xCbM1pbqu1M7efhthbFkYHSMsyY6nWXDSgyFwJ5Pi6uwvP3RYc6FbNgDQhS39aJ2rhMTi6ZQMTHEUMVZgZc9A",
  "key45": "pmGG7EbAG2SqvT2i7S8CUzTw1gattwg7CnyyUbPJp6bw9hcSW8Z7SMLEjFsHGH7TbDm4f5VRSseTCYPZtb2y8g4",
  "key46": "4X8eC8PGXB9eeSqRAuvHr1ssp7tNFjDPpxedQU1HbgptxsoiSW89hZ7GGyKgNfiRKKnrA1FXyBXHALhfJnUrk6Ny"
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
