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
    "22zzWSX7bfNzGJcPgSbSNgTHPJ6QvgE1KnigPrTaBvswT451dMWSbhJK6QrQTmUXh94jfrcAmdRjeFftzS5H35tE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GPpwJdDC16vyTHRXhggsUbBCvYuRKTwfGKNgJPWAD2pXqr4tfwvFtw6L9VLsSKAubxWx38PgH8t7thoLSMf4qcn",
  "key1": "2nu3vswvEdMZ4UJg4cifN75DbFXSC8eqxCPTbRMxEqqfFvg7NAYVDtVzE2od9tph6gMRBfQgeLtpm9vVnQPLC3xA",
  "key2": "tkCkh1FxfNNz2DFwbnVFusHtfh3t1tCLhYm9b5ENwraxaXnyQy7oCBnC244dzPwRJjzq4CHMELWgexCgVSBm5y5",
  "key3": "259XRCd66cm1Y7kNdJHJy53aBsaRhtegghBocBVoycVYyMUHUXbgPYWJ6TcbmtJGs48ZHZtakxHLBMtiCcMoxCG4",
  "key4": "5a8g262PDvJkvNBBj3eskqZJjv51emmX8AiT5DdGJDSzwQ1Rb4qM2gVYeh8J8yTbJ39KUJxTKyhGe27g53uCcQmp",
  "key5": "L1sipCYmd68MfwjbmymAfFhe7ZPVT1Fx6z79LTKRjouhupxBpJEMkLiwaqQhUeVXKuNvm4TJBzJCvShwG4Ab1sm",
  "key6": "4EreFR7BCYutDP9ZZ8C2L8uFETE6QFRcLVsq1q1eHui7UYNhfG6m5rkjBkQ4ayyUcZspxJ2W3nnUnLKSBPVAiAFR",
  "key7": "3i8hELVfxZdtt7YSk5QPjU2A3GrEty9cton6jU7zPTtSBquWbQUZpS3TmbnwMnzVMp6cVy7mUYV5GV3gpbRmTpv9",
  "key8": "2i67crs6YQMvVVfDfbSdXgVL4hjYgH7TALi6RMyYzLwHeh7CKW5J41RvgnSP8AwsiSaWGFaNbKtbwWbr3TFGobdP",
  "key9": "kDEgfLiu3p8wvVD8igu3Pmny75M1ecfXKnmk7E959vMHPzfNFMer93w3SypwqDnqBiDDgk715XvET7jE2CxSmLu",
  "key10": "4xyu4nSFWW3vb5hNt8Bozp7tnwBWAhPcmRWQVbRimD8V24TqxbbPn5p4xq97opxZGYGjEq9hBEUER8yaeAD8Jznq",
  "key11": "4YAZqfXYoGeo88qqVwd8fFKgMp4rhFeo2UuyNCTwKScPmEfh7cLWjUbZt3uH2BKRMqGuUa592Ub9xM6oYx2RHXD3",
  "key12": "c1Y7cVYRWesQGjAcC9DqBNUzHAU9ZtGxF8yeXfREZE914cCeYnC5QNRi41hrafxWG4Bexr4GBBiFEa5v5aFJcHM",
  "key13": "45bdZF1xygjkp4DbnLYLTqu1VvJbLq9f4BKoQ3j8JmRbSB2oqY1W8UcvRYW7Amz8TJN14FPpBxuYuDtHRpcYuceg",
  "key14": "3Xhq5HTTVtZwJ8f5sDB9zdLxVdn6os9q4z3BTRwZcTfsTkK6ieXySDzLeL11jEKCbDqW3SF4QivXVfoRRdTooLmC",
  "key15": "QaLh7W46G8PSp6kjS2xmkDHrbcGMxzoMS1YC9sbZz9RH2mMgQtUgBAdY9qHTKZjoXoWH7A38s9PmH1UUh5ZsiKr",
  "key16": "4GGG2Fi62sWpNqf8pYXgmMa5ovLWeqJsJVRBsE82XSCayARDL75TBiTnhCU9SADGxx6EfxHy5SRRfrQ97T9jnHPG",
  "key17": "4X4ZLRjqnB5vWvcMtimPjHhPyyg1orFQLdLuL6V4jF8Rzbo7L34GcrAuuAk1U1mW5syLRGrQ26NfUCq6aEVQP26L",
  "key18": "3XNd5Qy8ijCC952oxNQRAkbGuCBqdVx7Mzj3aTWg4DSeCyWETtWFNjPo1CSxEPrE7y69wrgnBjrC9dJo9DviBQyV",
  "key19": "A7aMoXXxgeib8fFCRobDCGktXWtAjRxgTtg5rMrKNQQVWsbFeKCbG6umQwHKCYaYZ2WTkTR7hPpHKmX88EDfdVF",
  "key20": "3T6vZD98mbvUcVY4vuTPyErHxKxLUZXncKWdvrL4nPCgf1Pxw5tsdyxaxMFfNJcGS55MdozTdPEFVb2RsuLSW43S",
  "key21": "2bjVWJVN2m5YtpAriHL26o8mo8d8Zs5SQnGj7oWyYNyNH93BDXW9SqBZR8K1WHHcDVDEXKmx7ibg2UNKrSNnTJfB",
  "key22": "5WkCStb9ckCv4kXPa5rSQ1TFv4arJaXp31LV5stGUbPEFMGaACdk3q6zJR9TesNYm4CtoqwESkiUAdvoXdsKYSjr",
  "key23": "JVjUvEJJaz1kHYyjxGYtA4UyHMJivP9AN1HmvfqDRqREvPc5S8RmokpExoPMQWgSPVSqNjrK337SKVfHq8Mch44",
  "key24": "39jgKstnQ4iNkqHnyoTfYbV2r26LgnLnfZZR7VNyHTKBky3g2gdFbnThKb9A1oppXEdfvJaKbMKECohYfdumdB5",
  "key25": "5qZN6esBrcxZYjZzeh455N4gBnTJFU8x8sVfbGJibkiY4DFAi1yRLcaDkgE9uUYeK5ni9xYH3JvQ136tWsSRx68h",
  "key26": "4pjsZeZwxYwYpZTRYufC3BSGPH1Yow72UJnDQobhbtFtpWbB4ahBB5tRpzWGoiGAhxJkhebxxPPZsVujegeqAHAx",
  "key27": "4MHMvPvvZ5m6g6WPjyEBGf9P3oEd5QGobFdLQFrHrshU848XL9aC3Z66KgtZ339e3oTWLSnyn7oou9aT2U3uTYDF",
  "key28": "2StVFaJCZHhJQ1NoPGL1827pHd88cGos5pSHRfgkP4WTmuD3xozG1cJ9Gv9w9K9nFFqwtsrGV7u4s4yY6bYQhBvt",
  "key29": "3VJt5eWQy3SjGpUwkQRuKzXHYQonoEaLmBWdE46PWY5K8iQyQPrvLoPXFqMrBNQ6FPQGjRyPcb1shK83zkd1MMAB",
  "key30": "5ei19Z95nLyCXpmg48WiN92Tvvw6b28jEyvrstCnkUjuZMa8u8wT8iY5BzCWot2Hy6J8vBTBv29RxYCtkxNaMGZZ",
  "key31": "3GBjvVyMDEEQvLDVagxYtNbLzwwtmPYgGrrGMyVjpNU7GtW8yrAySKDb6gkykzLgPAC6EPhRZ4xFHu9d9icmdKSi",
  "key32": "5bHgYDRiCRdkvDUZhoNRFQRUaJbgD1rCFmo613fntzrtEB3Jhy6HJWFUp7BdF7Qx9JvFDq9k8EpVZ1JG7hxJNrsF",
  "key33": "4BCHtJiGzaCdMB9GNF3UVaiba5XTunEstqvX55csNnz7V6rtXwU2gbK5vANuv31eqrkJ5CxUeRMHcuTHmn8xJgD",
  "key34": "49DgaTxWGHDXZ8MmivzAdUrvHq4zAeeVVpYEcGFvE9uoTacUDKmLdhkeQnbNpa9vPud7wGkzWLt3fvXhiSr9v7Jy",
  "key35": "4ySMmLbhW25ywZSVcteDvKMrjK9WfYkgZGu2F1cfpKZ5yGo37LZheWxd6DCMpNNi3fgphSsSBB4jhpdc6HtepS2F",
  "key36": "62Fb8bX1ht1topmxSYjqHJKCQDR3VuD5V5PXZfyA3wPYDFFRwvFMNU22RswWwgoqPhgL2zjxb937fQFd8eqefdYT",
  "key37": "3Qu9Xu16XxW4nW8s2ReHxr62S1kpzgQa5XewnuNqMCYESfdd4d7ovTzM7m8opUhbD97fciJnnumwn4rnKAEGkg2B",
  "key38": "4TJPbn3bNMUAE5XHoojL7zTsPHTG37LMNcD83gtqWgoS8p64M4KjkLGkwtqGupf6mH9zr1yFvNwoJsnfMgJ7V433",
  "key39": "5KzyCCCUm4V5zehNLVm5XCmkPoo77APNexEiNgQain1E9v2k4eQb7Pz6wG2zjB8kAMnHTkGdfySVgfFhRRq7SLJa",
  "key40": "RFu8tMuZE5R2oAwwizUhpz1DJ6wtQ4ePdgEuxMcEdNw1X636UaZNX97NjVtkD1wdaE9f2A8bxX5Gi8Pvw6ivz2v",
  "key41": "21xBsuP9gXQDphWyo4xEfmWi1V1N954YUNFoaiUCA9kUdyvXJhyWZc2yzDrVcY5th1itgkiNwnR89mp2hLvy9DGs",
  "key42": "Ai3VgsEDRyWJqqvPpguA6iagd1dT2wyZaNP8MpeYcu9WkdzLUGcscgMztASjBt6AhqaH77RboKzukiKTunH1n6u",
  "key43": "2SJC4cVKzVfe7xCoochELodUZC2qgXfk2ueUcmxkFEEAbjFYBknQSqRo1DmikKEqfxJp4ZBWJFGv2p2PPobw8DiR",
  "key44": "58U9tG3fWSxoVpi5JMQGePeEtx2HHdc2WPLswfptLpFH7o5PQBHTueFrSncACSaxRrPRq6yWJsjhFVzEhAzbBYJj",
  "key45": "5ucwvdUZKSBaoPV7CQFpXyqLWgFSu9BvGnC1Mac1KsuW7dJPeekkg7qbMUPYoMnfobfPm2FZ4noqAkq6xhZuFmnS",
  "key46": "5w5WuemHTzc1M3PpmnG6aniAwYX14Eje787JWSsvSzxPFPT5UYNx5xjm73dkC9y3wChrGCdUkt85Y9jPMnADLn2B",
  "key47": "FQdBzwLJk9SjJbPBFibo7VwA68QVkBcPLHpr693ZrKo6QMAmHRiQcjkn1vNP3ZX1HfhYDHBYQrAner5oT8MSkay",
  "key48": "3YcQoevsGvXbVGH1wZDJiFjiUsi7u1wXUMjL1hRTPPi4ioAT1evSUGpKZq9SJkDnDPXViTvuzFmSoexjk11fXLYy",
  "key49": "2QEg2R5qDJU1cPNxXp2SEYPhiC85BYK5cGWBJ6qZea44UmJQT22dVL9uziAesZrNobGoACMwhe4Css47w77rEFCg"
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
