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
    "2Hxa2FyWfCMESFkzE5RMCtSj1FHCdrWFyXk9zkzD37tYo26FriTb4BeJqyzswBN85x3mHPGrpWQQj22jzLcuQGiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DLobygX8T6PhafsR67mfpTgTGFfeGGHmp9kHf5KwQGPEcivNA5y6r5BShmFLabzukrzRwBfmJj5npxPtNJcoVPg",
  "key1": "49Ei9nKr7k5coA6TPWRKmoeWzP7sjqq1oNXEKLPw2Wp8gYx9K4gM914qFZBZ7hB5MM3cdH387ws7y2x8GDCgZWDq",
  "key2": "2dmk47nQ4or2BnDNCFfRkwCcVqpNgcGTV4JKvXMkZyxG1acXb41f1kr1NM3oquByNARNZWnC1i4QX4ceMKzThPrD",
  "key3": "2wsQ3JDBxuZJnsiaT4QrLyE8tHkmHyoy71gnaFP7C6ZqPKBNoGM6LHfMDBJCMdA8aqqoqWP1W8V3h7qtUTLhhu9U",
  "key4": "3KtYVamcwUu34QmDYHX3jbGiy89N6ob4utMQDbSz1LVsALGQzP25bRuNPdXXTf8dtozWy2WqSG6JXSMLSyGNqS6y",
  "key5": "65EBTMJ9UzZf1nTFt2xMMt9ZgRWi1x2oWhtToPJK865dciFp1FSGuHjvPE3ybGhbUpyxEFfsdxXzWi4heHfzeqnD",
  "key6": "2moxhV29gZMUUpwB9RRmgDWmb9Rz87XB1JRnV1ENZ9uT2VQiejAJEyzesKSPXAkYtNtkUkUCqN4tmr8CrM7zxA4K",
  "key7": "2bJXiECQaGcJ3YGLhMm3KqSEtuDABqJbDJx8AVeGvZpUjCUV9LzYHTowraisQMznpRXSxV7FPyQ1APBbvcuym6DL",
  "key8": "5vzVjCFbHCNcPkEWuhVZG9ydp7b9CV1apAWkznu8gKNbFfYUpquh4K9JFqYZn9Ezc7TvnsXoFiVLqm6sYKQnJwBy",
  "key9": "3te8Mpcs6rxsostVE7R4hm8oDKTbQFgxa4MHHabg6etPY21rHdE1bU7eqtm9qUHhZcwCKkopz4XQ9CYCEJt6Fu5o",
  "key10": "47jPYZ7VFJK1EWuJnu9pEn196AvqRzCD5RKrUGVCbcX6NmJdRzBZo26eMDV516AAK95os1FsokUnsvksHYpfyMdb",
  "key11": "2NVvXS4ndZ6uKmCnkRxCmzDyMEZQ8LC4z6dDHKtGX19DwP1VMCvzTAcvgCANnThjoFm3acv8JQCBhAKZwFWDfjuh",
  "key12": "5Ee54LFHJbD9vxjByD78BR2RHmH3HZGDhfXrKfWjWGELb6tVx3Rgf9DvtD8TQUzBkf7mt3FmDSuZdJb78tLALeat",
  "key13": "4iwy9UoNhwtQvvd5PHXVjrbzMhiwDn8TBvnjRHJVsBBs5yL4ayYCHqZooL4Y7owZBgTtexGuzsmNqZFiTDgbmKvt",
  "key14": "53P3kPEAg1em9TmfbgrnPFRn5wZbWLTnc2cogcpwRTxHHVBV12RcsJuFRHob26ugrM4CeKs1d9Y5NX3e2qXuNNbH",
  "key15": "5D5gkrhkre4jwTbs99tJyHf6bsGVeMFGFdkAK4qJtgCyCUgehyirUoXij3xf56HMfdBcfu7wkbz1gygoGoeYRbWk",
  "key16": "8CPu5FEsBZaaYPSHbNd6kFqK32hN4MKeGTxdZKMDzP7cJceUeRWo3A6qwMGH9nk2PeGDFKQineAw7kmyeesMc4N",
  "key17": "4eE9tq9wpUCHsxCMrHKGRpexC3VVp35oAiZHv4yafvRm3cEpCfegD9e9q7zwtsHDrYotmdsXfiLh4pQ8Sa2QRx6S",
  "key18": "oLqNn8ph81uuDeammdwwoZ87fvFhyyaW3zve3kRzDqRGnrpstQWhESGUHNgoiE5aTdMQWpRBJSoYQza8xcUPwXv",
  "key19": "31i5LpZ62S2sf1Mc6PKQwWWXwFB1jM9v4nzoA7jEGA52FSpoJNrCEhtQYMet4LNkKLSMSKpaLcj4AgkGbz1eXhRs",
  "key20": "1X29js5vcirSjK7XScgsqs2HMT4ZMYmZNcKkvy44gtkPWRSy7Bm16W3nUXiQSb4Bb3ZNxjVQDmcy5ExKHpL25Vn",
  "key21": "4k6BvTo395Pw82eCU3Z7EBuNur3mEZE35etsZX6n73JJQcBCoze3Hwp81atxH5nrQzd6KeDwpqwEv8pQSGmgRBre",
  "key22": "2mune2zEuUX89uurq1LxPNtdS7MjyPWL8zL7eBWLg5DNVuzyUxxXYnV77sQ5ihUBbA1WTGEUy6NziWKQsp2EkCn3",
  "key23": "wzGkLXMkSGKcT4zd8YkrETuHbjN1TysBKYFUEzbb88dMpnmP3MhFd5sk1zSQELWjchwnRdHCyK7zdBdxA8VuaKB",
  "key24": "24uh32atngAmqM5tC7EduqCWTAy6y6LawSxwHLkEdVqcnE8sw9UmKD6mVtJADT3adZT3xz6juxm1Lpo6jZA6iqjE",
  "key25": "4JUTjYrdXaM8m59xXEr1ystRLZLuHNQF3Yr6mHKM1XJLmM2QKBGGtmzbkdxUNKGcoDgu7dBo86p3CL8sw6LMKtxM",
  "key26": "5Cy4XXSvSDp55VWk46bjU25M83WQHccGYvx1Noiwmo3gS99b2iKFm5mhwc8xoL8bXQdXf8jthDaGjCYXhtnaJBdV",
  "key27": "RrSPns9VnfG4Q9Bri1gtghGGQtK7ZwYpboxTaVMjogX4CWPjDsZH6hoX7c69GR5fd5uKy8sho99JBx4gNd3cU8o",
  "key28": "2YP48a6BLdbH6iztLZPhdWBoNawJaPXXRqNZKcxL1AKKSGWM4mynNboGZLRQkcUwrwQGEo8GLqRKj4fDSoJ8Eo7n",
  "key29": "2KqNNoejMK6ibNqEDZtsqchYCZS5frg3TAuHpY8gSMBv4HT5r4QSf4xaXwSssVXWtT3TAZkBV7CLTz7GJvcSdrGr",
  "key30": "55yzNypP8d6sg2mfceNgMQKC9gyhM8zgVEkrGkBe3Pjw4PctbDc1ZMrtajLSc5k9JgNmL181oNUn6TTiHBZp1CB3",
  "key31": "aheKnBfGkeSyuWamMJJu57T8WLPmJoh66niBCGWvrLLFA4LowSqyQCkr4jU7x1LJccbKmBEqrTFwqPiY3No3W2j",
  "key32": "4jMxnaMMPE1sPtMuDsWwu5U1H7uiVPpmcPFT1N27CxGwh94vNz2ygatodtCmcEWnSaHbVyzi8hz6SRGNPNChgkHZ",
  "key33": "4P6JULCyUABdGJJFy88CF1y9F1MachYRzvG13n2ZpbRoDoVq5rcmsroCdxY78syTebVZLSoYUgw9mgpwL2FBJP6n",
  "key34": "5BPJjQw3hX3XVDth6NhL3MjnyjNC8bzEmLqmU8oV8XdzLwEnNkXrSCrFBkEWTgnBpPeS8k12G1WdskHER3qr1hWs",
  "key35": "2Wcv7Vt8CXSRCWV351katjfU4LMpzdvuE7w3RyPdgSRZBzMtXD73GKepnjaXzgytpKCDCgeJ1BvZmCV64vppxTKh",
  "key36": "4wcKAWY6Jvpmx2FB4egm68n4N3QpuNAXBSUFVewYHK7JqLdwjWDore8TH3qb5PCctbMxh4vWJjWPv9tPJ197vW26",
  "key37": "3S8wzNKdfBQHwsmAqcrd7gMhw867qieZ6X8SWqH5aj4tRtX1bqTRKD5LjAZjnaxzEVpFuRnZTmV6YhEub66Z7wZN",
  "key38": "453wWVpkUm3CP2CW2bV9Fa3K7bLKVHpYWJbSbeNia5ScsXPK9ZRDwD2mLD55FdR3K7naKCNuX7Cci25VKpGD6Zar"
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
