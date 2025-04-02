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
    "5NmosVKMTTH2feVzVe4MFVXiFqSacLxdTd4nGBWB5p7UFnrqwLmQzX1CKg7jrWWU41n9GUKsyxXicdfRLkc7rqtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4itJw5tY1eoxDADDmnxFHdiLNoZGmQG5cAnxZDy2ZkETVmo74N4SDYpSjtKLUvcWydokgxyCgdjGzv9ssFup6pPi",
  "key1": "29W5JS41iWhGJbwLA6EDNsqwmWN2Pfyaq8Wq1gcK7TAuBv91JXxwXDnhvxz1Y5sVMBqhkTaJz1rw9Wi3tZGLR1mo",
  "key2": "4gD4jEa9Bu96zCkgWDzgfFgrJ4D3qTZyBHfrKHgnN38GhnMmBBcacC7at3v27pvFydzo6ueazM6YMANS4Egbjg8L",
  "key3": "2hY42v67TZCZZuJWZ7nkTaiNyDCrQg6rqzAaox9ocTLfNDJ4LGuBZMnvD8KMNKGGnRjNsmkGX9Vkx9ZgxRF2G9Vx",
  "key4": "2YhjnSYdmsgWzjd4pRAwiNpMZoTX9kSGcT7JTG4GB9TjgNvufQtwJsmnpYvbnVriaUdFvwhsWkNGBC8LLkVYF8vZ",
  "key5": "51RD29XVTidhBWRDnX5QWx77TNj9WtUnerFoeCM5J8uhbb492Js7ePtXvTRFQ9bpNcQU9D3q9yfcJBCcq4mTk2Ge",
  "key6": "5pUXRuVicWEC2Xfkija9VEp7GofhzAyJAyHaYCtrtwXvrPsdP5qacWjCAV3S2rgZcvL2GqtHjR9FX3MF4cjJg86e",
  "key7": "4cEWjKLExA2phvsMqPvecP3xiYGbFqyH5FMhKYBW6r2jprEZ7eAjjdVx3jE5eGQLUcafygMxn82rjX2hBSQTR1Wv",
  "key8": "5Y12LjRg7uEyfFr36iNEjch3MA1k9njRWavzphsCG48aHAMpbosB7HTHiZiqcy9xyJi9ekhDQJxqTScsQhCQJB8D",
  "key9": "3FwRXdfKQvuBBGbshwCVsNS4uXb3UGmEE64hew22KjJDrrjx3efRnZYvpWVZUMNQPrLk4mLVWQZAZWniiMFuBSrE",
  "key10": "5CArEtrzx8ZZ8EyPxj7eabEhrnHQ92QrqiaYqrwvbAE5VAg89C1QfdW9sRzM8qeL65C7QPXv4VSeWMxRauNGQDDw",
  "key11": "3y3wjfUWZAafLCr686ho8KqH5goAFPcpw68fAZUzCd4G6Acc77JhGoziwNoENTTp9iAChTpGUVxhEqipK379QJv6",
  "key12": "avMuSjfcNBNKeJrDd9FHAAaUCWmmNH6JWFmqVHmBZQSnbYCxn46ktWCJL1yQL65h5nbu78p2QWRjJyWtroCDDWc",
  "key13": "3KGzXYCoUEGFNRpcvSHNBZrT6H2Vpgoog53aAqamfy8bwmk4ibD8Trtr9YYX36WESAvu4wBz2g7xzBhrebx1MK4a",
  "key14": "sq86XXmLtmYPg4oLaSbbNdTshcEuiDk4nx192g6ryrWFFNqUCUmwyxTUxD29GzPUNh2goWhGZKkRhzK1wUxpGN1",
  "key15": "4SeDEygQuCHVdTokrbHcq7vmavqH4XfPZFtF8EKxpkR6Z4NSrj26gPUqRCs3jv9k5fsPGdjKPDXxGSinJUtue2K6",
  "key16": "3pUycqfdJfBZYrez2xjyiRvCeKWEtVp3ZvoftnHMEyem1hRkws4t9xWBR8W9RKAC9oJiMZV7isJ2tNnZV46aQkaP",
  "key17": "FNzzekUoVN8JDwV8UhFwTGFurofnfY2pC8vvgM2ALxnyadkQyr2trernLN8wekXkoDw4tMNbPosDjaYFAxuQcQS",
  "key18": "2nPxUsSLMo9vhwFqpTgRLHvPijJpSeLxKdQswtfkvcEgKh2rnDf7PUkXjzLyeFRJJeLkaHNMnyDZ9oER1E5qDdk3",
  "key19": "42hWkQRzcGLwR5PRSCzLvRwKPmSaHrYVCwDCGn81WcTkEoqZFs6JKM9PmS2HKTRcy68nE4NcaJ215PVUD2TggX3x",
  "key20": "4f1DVFPG9oBZcGtWbDXE3dpWKb517R6f1wutk2VV95MiE2cEHE7wZ6EhKLiYuyyRNefqyvdBuK82EJCP1R9XsbJz",
  "key21": "5hrk5Hg26qRcfYQfhsdiN4gBJPZmh7R4Tpeut2H6RXaRrp82Qqrs9wzG5pbsxxUdjcwEQ2VDYWog9PoCuXEqEwiV",
  "key22": "3QBc92MJreZmjkfu16YBdKNFJdmdvkcxZsN8bPkXscTu31mypUATheXEV3kwC5k21QPVVRaZ86MHafuiYrPYg9xc",
  "key23": "f4GdP5NHmzxb7WsEaqXU6GBABNenh886APRBdNBYCubSnsfrWzSpBJBuo6CxrBHFGQDWtp8FhV5a4aB4iEEDkzb",
  "key24": "4NoNy3jqv4ZRvesi1Q3jRKfLE5mtVzdDcu2jukH51wdJRBQjxE1hUMsm5sW1h76Z4qBbYXyGj2s39N68gY31Do1N",
  "key25": "vnFGebiDcHtUvx8zeyYfTCoTrFgBaCV9mmndPPDLWCTFZwAdusCkgQLWGkWvhBW6ETvXjhE76uKvrDvxTRfwSeB",
  "key26": "59ukZBDziRZKchZaPmUpqd2kMSaQsbJ9nR462AsYNtHDvWxpNwP2oWwcKgNBRFBYJsZje55QGSwN4EwX6yQee27h",
  "key27": "2wsR6Ff3nPaeF4EGpSpxt4g2xg7pyqNpfsjnP9NS4iXkvUjJmXrf4tpA6wLAxrAMYutyLpY1dU3PhpyGNHK64Chc",
  "key28": "2qB8MSDz7FSJhQLdraksbKJJ1uBK8YdAEcf3GtXGP4WNB9DyDXSQftzmqYnAP3c5KW2cHm7E1aS1zzcujddr2jMK",
  "key29": "52M1hAqDEJY4uPKFv3XgRwzFjZN7XFuP48Jjw4yda3CNdXqswt2AcCGknqCjjwsn7Riy8mY6eyR3w5xHsoYiKv2B",
  "key30": "4LQ1ZFhyarZ8KuSofJ2bneG7LwWgYwxBMBeSArShPUnXmmx7VycbJ25BLViuAPTssNdykBhavaH7nymXH36sPdzh",
  "key31": "62QDTHgn4GKcetHEpuVa5EHH3DRZFCPSQGNJpiDMnobLFvFYRejyJ876HJxMteR7MdAbGwFKTkgCYyiPvVbaxKLQ",
  "key32": "NiFQBxA4tL5HUjJ4LGiCo3Nh7YmjeY2yhS8KkUd15cr19db5gHSRrkXUxDGoaywWqPPa7s6cPwGX7mr4bzAxXeD",
  "key33": "2JeF6iYoEZeTVH215xzqUS9mGqhJdsHqr7AEmurZYcQaTTj7GYKXjXPbsUwGf4Zg3g9pfJQF9cKwZ2t8Ps8mi5A9",
  "key34": "2nrqrCtdgeqNaQjigGgRgYTtX7m4xUuAFAqxJ6aCNrRrHPc9eo92yq88gpjUQrCECfe7PE5W3TtZeyEf4dybGoGY",
  "key35": "4KSu2nx6fckwg4vu4EKqPaGHx8kqfq49vJBAozEg9cPxKNLi5HmhPyTVWHqy5qYpCVg8TMM7rEJu4WoGn7ofC9bu",
  "key36": "gp4GaPSxAjvXGqBRxuPXXYLgzzGdNFjgKLLDuahbVxdizMHDUcfocX3ZaHayyMwbuRuMtuncpwdvZV17cvspq6A",
  "key37": "5HioBUxB4oNSt2eZAStrGdiRXa4sKxGh7ZnpL1QY9z3oapuRczajPh2vPpkK9soiGMdjxTSZMsddqQH7K7HasMjG",
  "key38": "2V9dW935AURb6gCNavJpPRdepks54PrxzGGQqwYdb72EpU7BsHzpD1u8LemqGQWKTYzBTUYBL9GnMfG3HvUskYKh",
  "key39": "3jNPHxXUCugHP1wA7dKDVm2r6Bsyj4GiKAGtBPN1uC36PL5MGij9KgXKRAc1N3FRYp9moMLRF1xzhEiax2oVFjoe",
  "key40": "3WNWnBmWk6sjVPkpiPnvCSBXTcp2BH4psmovbn2zKxFEBFksCrh8EsYWZ2etBCsgKoGro2Cb5LGaQZ4WpQ9CTsfn",
  "key41": "27exiUHaWYGgyVKJ1kH1BxuAA7Kq6ssZ9PTFatRHqa24VFVBSXmxzNY6KzvP3NWR6QMTQYp5ErLw8tvyo6Y11Shm"
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
