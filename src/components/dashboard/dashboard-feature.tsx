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
    "3TZ3b8aPzBxfxhCMSjgpNNHDj4FeQ4AQQ1AZaxhZ55X4jXHb5SSJvX876dBYr6g41e7EziiRHqyEX9zUqs4ZP5xK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z8qFvob1RMF5h9aydE9AvZySV2GjVi1bDKeeupfLX5aqbScLJdNkLkopadyuzSV3qSRGv4m6QCepJ882FenQVT5",
  "key1": "4NwrtrxTtiu3Rn78ATzUF92huC1nbFtvuL54sEgDPQQ9bFE6qPbiCWzji23AmcczEiAQALPUS2U5xpWzx4sjur1i",
  "key2": "41jWAp7oLf8eTHKuvAnormT7t9PcxZPh96nsYC65yFqsJvtqp8KyAr7nSvcnvEJVkAR5fwL6YAi8XWaCSguj1tSQ",
  "key3": "rNCjNiAegh8pbRiMU9Y9XdLQM8JdwpXrFrvH8gk7vUH6yFnuhrdeQRp18wTxQHZR2XZyq6rLLuLKwJSiXQsCzLy",
  "key4": "zUtWndSzoTS7tj3V9hJ1fN8GWCMKvULy1ooVMgHFUszieFjhrQ4kCsWTqZvVaC57KHnXZVU6zZWqkK57TBxdY4A",
  "key5": "4U2oEVrSLTfZWHE7BYGtvnvd1vc1LDmiKwWi57DS35sot6MZeFfv2YcvsrrdoxXYw3DrKRKEm639nLWYNXp8qRay",
  "key6": "aooqmPPb9oxQubeEkMVcgubHXLNRnDrGj2DsnXjJki4yrvtEjkZAzujq9hW4zhdZge1AYFRXF9xiUBYMbSbtfmV",
  "key7": "2xPVirYwTo2pYwc4W9Q9cGQY23QQSkPsYkieNqNjDgfhvc3Uo3wfBVDDeN9wYzsR6T5b7gXtZunaX8pgcNmwBrwZ",
  "key8": "3KdRJU4ZYEtWThnMi716oXu76ZK7pdSN7czZnCwgpT7bpRyKvN83Uytnk9HsciE7tBQSCkMAmkYyvVeqx2QEML8x",
  "key9": "24LW17h1YFF65waJJohDUKipLmiycv9i1oVmyDdRyQWje5dwp9mtmMkY1gyvZyqPAn1jHSnbMdtomGu2SZ5vt2ou",
  "key10": "GkrLpP1jLPC9Bcv9fvLe5RHZLJXNq7emhEV23Ka1kC12aNKnoYP2h6n3vXGBXKyeNmnzqJJP8CBTbBxEVtGPz3n",
  "key11": "pkRaXaFoGfaHRf9AifYx4iWBtcWfjd68sPcXVYySPFBKitxCsrg5VGrvf6UhAvDbJtuDtQJgX44hQtYyd6rVsgX",
  "key12": "3F5XakhmC1nyLF6QoaWDiXZz8j2u3XZDGK8royKzWzCiMDSfkQkQKNC2gj8UnF6XGd9BVHqFDx3awsBvg9DouSGJ",
  "key13": "3uTejd4fKeKLGZ2WPGQyja6yjRZtTEbbys8SMqBR1g7ZFJnWGreKCm1YhmjcMtSRPLpckaQf5mbvUt96fyr14GyW",
  "key14": "63PuHaPErD9RjnnzzQvc2heNoVwzT4Wf4wJ8Z9Hceowc6mogGU9zSbtaihQ7yoHXTFTCXMvum4BXGMbNqaLiPKY6",
  "key15": "3qor1tQ5Ce5FwnA8MYm8PmQUkcFShFxsbbQyHWdQ3LmtxpQYHzWuAEFvWAtKcvshYxU2Ao6mAycGSjUzZGMaeeRX",
  "key16": "p9qosWb6D3yVMWdhURxom32C8ZEaNoSP9taroQNc1sebx4knZcx76jLWspBr5rnkDdD4wBZgYpwz413qqojcirs",
  "key17": "5dE9e22DMxHTtXJqDdJk82aXj25zqYNf8oe4usqfu78R8RdZ793ozSRJF79Egs1SRNSsNQGKe1CHyUURijRMVpmc",
  "key18": "5RHwJR4SYqqjBJGGecMQSratAw956k9f2nmY1Z47fYxJ3EBKYjvVpRzLHbcMCv97LWMGge68KpFEScWuySfScJbi",
  "key19": "5zWyJX52BkUWsqjCKvoH6yHMJtwD8BfpLGKtTxm2MGJ6VV6WgJMJZyhxviAmwsEWc67hDs5vawD6MJKYTB976c7c",
  "key20": "3Jb3zbJ4ZN9Uc3ovju4VtcSkksiPixEAurZv4sEvx2Lj3r6n8nbgfqxExov4JNAwc3ViCboEktLu55w3WR8rerE6",
  "key21": "2kcpj9YPGdMXXdSrTRc1QeYUvgPF1iw9VmqUqoJu7rNFWUKV8EqdZYYffm4uhBQiJPPDz4jaTE4jCKnoNtC7KHqc",
  "key22": "31AeqvNXZA2i9G8x5GKGQnJJc94twfnW4SjUVbYqCvckdzKdfPyPSz3esUTX71Y1hLXVv754oyiP7wQhh4dDjMJe",
  "key23": "4JWXg4i5Dd7PukFEPP9jdTCbc81Y2aQU8qe5XsT8SQGiUmFwJ8KRAWc6ugq44tsuzeo4kSb36HD9M5a8iX1YcNdo",
  "key24": "3JndhTizZaHJDo62topaJyYFkoA76ar2hR6AKyt9KGBXMvcLYHy2gjKiY9fh7QRkgGXCWgERZzbdYgtJJDj1CUi4",
  "key25": "3BipYHoXL8LSf8nScTeBXdgiDFLX2NfR1JBgC2Tbs4xuMCsfQSKsm6YP28H6mQNYyk3s88AR89PvLE4ZmmoSECPr",
  "key26": "4phhtYbeesf1YFkNYFoyeo1eVjDHBtpnzqxV1oF2srf5jaDJccABsNMf9Xiqgq1fpw5ooz9TmAoo8QtDzPw1kewb",
  "key27": "4Rw8MtRzDkH6VQbzyKDYFkFhR7cDaijQgwsGxUBoyoMVypCDMAVYJwUcZbs7PZZg6Nve4GSb1GPEuwoMKpRzZxYE",
  "key28": "5Q3XrJUqZZpxUsggqPwLd6dVopsS9osR2vFrPHDof1YpX7ip1PS9114eVZTFTQka8AzLT8YmZNgY7SyQ7JDPWTkB",
  "key29": "3Qug54dFAXZSnxhb7Du4SUnbBDge5ZJTewQZj4gHgF8A2sVCxrcMqwXYtFBSKCdxdjjKozLxjL66TEQHmrpPehxk",
  "key30": "3GtD95UBwRun5Guhr3NuzDEjDxuyjJLnEH3DGKLpFK9ckgJ8kTZnb6BYvzVVLzqMrtuQX6VeLLoadMWH6r1PuwZE",
  "key31": "4SUgRMQBWrZnBmDXSJNLVciuibRbawR2vNc2Lx7njhCBnhi2xbY7j6raankX4acE52oAabg7SRFWVhSrXggBRgBN",
  "key32": "R5U7V4qmHtmbw97c4WSoWRJHw86fw46uovraS7JkKQjyuBQiW5Q9FGY8KmubLuipQ8aCpep7RwCB7hAHR9iurYM",
  "key33": "2yVtkigxFS3S8QyEuWnhAoibJ9hT8uHsp6KY6gnDLUWVZNyz43ZRcQ8MFEM2UfvuRUimo4ShfuBnDe4dfwjPtLt8",
  "key34": "3Cop7fK2ecADr9qdX6hp9EtauUyFziSnZP12jaQvVBz6LBof266eJnoHSAoMnqYvgsZgsc7paz6PpGmKqkADbkNF",
  "key35": "41mgHqEe9SxnXBhntJvaU3k9BvNF7F8v7eoZSv2MeUGgayczjZhoSjNpk9nu6rA8quyEpgaCyE1EMdkeN5s62RCM",
  "key36": "3KMQVn1SQ1P82vHpMJ26MvvMqAgdihDZpA5NWnnkAMaxC3GCEziqrSXfnqvqZWMRwwy3EMnX2gvFNmUxi2FR2wvk",
  "key37": "4AVYu5PpXg4MYvXW5pA1XxWFwCrR9ugBjLEegP4kxeSJGs4A1h2GiYYUDvd5SqrPK31z6R8CAWty19CPsWG3jV8N",
  "key38": "5X59dL96kZ6DiEjX2zinnUaDJEzmKkFUyyqC7nPnc8mPnSM3TnKqkgQ2rN2fe5sNyBBLtdJuvjcTGJGwi1vEkc3P",
  "key39": "3VDcXzUMP3c3toCAyMmK6pYc5bt9FVxpxYBHmtdpi9SFCT5TGomw8nJ4c4Zqyppdf1Bj3qKaxMjS7mWnR5RP5vku",
  "key40": "hfN2ehUy1fRi4WF2UNfWFP9tccNefEYYCQM53Brziw4ZcP58uEJMrrzkgy2f76omXZ1xCwMLAESyELC9UzarNkY",
  "key41": "3pU8w5oUDH1yDuKub1iLL2SULELjWRsq8fbWmgyQQ11hXSTDG9StCBJHCLDLbC1wkYrv8JnoBFkCrcmMs97hV6nL"
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
