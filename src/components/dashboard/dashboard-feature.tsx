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
    "3CJ2q6LMqwdQ457XrC9j7g8doWWdssv3r1FW1BcnX8q4XL5W1KEQzQV5MBXhDARys9pdMUt4hxbsGU9ypZDbwPu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cwyW83wx742qjPBfZJYk94F55LttvjKjU7dLDnfpq7T1nioU7G7SCrZLjx17YSJHJMDmdEw1qjXjpUSg1pN5kLF",
  "key1": "3ZtGsHRGwFEscpRqKw4EZ8PJYrnTQpcVaxgaqcm6RSEDDrR4q8TLdUmPe4fHQAUwbjL7edJ1V6MTBZ16UmzAvwf5",
  "key2": "3gJyhPU82cCDEchpCCSrwji8oXK56bft2CG41KWyhzPvy5JWNuL3cnPpKZmVwjkD9mEfGLpiCtiin4i8Wg6B2A4b",
  "key3": "4h2PLhCUuGXBwLs8pBsuTvP9oswqYwmMPyWDuvJpLho4d9c7WFyDt5JKDiGL1HnmkbnpJ6L5czmgBnB13ksuDZkc",
  "key4": "4bfkpWrjZJxcxn2pXPt9MvfyQeod1XiprpgLoef175cKeq3LVsksT7MBAeA9f9ULBa4Ah6BJvxGk14s7Kn19kvze",
  "key5": "37R1TtW6oyMu65QwFHLDytfUXZcaWQzjAGcKbgs8z9SzfZY798oVX4sKcY5X6A96TBESt4roKbRef35TP69S17Aq",
  "key6": "4dT5AMEuzQTne6yAwoU9HQ5UdwbNZzSrwmoGAvpGtkj8kB7eCtPModRuRPnqzhkDSrPEBcYp5BR2Y2GUi9xtkwQb",
  "key7": "4yHzszkCxo26tTYUnW5pt1JgyNHnARJHEG1cbjeiWZHoWUSN5diyYEjfNgi65qnYWvcvQvgYnkcNUevuU9zNjkc4",
  "key8": "4ruvGWjLvXKkQNaqTbi1eJYNTVEq2D6JjjabMhC7cdUsNxLdCvZE7DgRB3C2GepEjaTDrxeUhdZ7zHVZ6kQi2F4e",
  "key9": "4KtBAKY8KjvNdUFQkC7myYnDqX3J9XiYDsCpRQgdjvvBMJuAt6BJ7wRjXyuhNYjqQc48V2YQV3dCBsrNLUJaLSEX",
  "key10": "CJpch8ceT55uLQAxyZEGfnDDuefeqqGSGpch49P74ivrFYGA4CETm9mJQEGsPHeh8nHeSVsnAsbRBWgjccZkydB",
  "key11": "243jSo8ZrAPjvA3K9AUBPHah7FrJos7iL7oKEor2vabVQk762fPWza1Z44DiA1sSPay5vn3BB4Db4zQN9vV2bZCm",
  "key12": "2V9T1vxvsuDL9cNNHP2rVyTuY7ZJayejP4QyNouc7Nd21eRyUhnseL3m8SBz6KxiJde24tLhDK9G6G7bvgub1zkC",
  "key13": "2cpwj2yKWHjLjf49X2ZBJZkiw8QsXMP6LRDWy5Q5FWUPuLTT2prsdQQwNHiCT4xbbidbUSAAt5GN4piZ33Nh9m7q",
  "key14": "2twSamhvrE2AN3q1fiWbB3oPudS5Q4HyUuCUkeUCFQrqf3fXN9R3hbSNXqRHBrRh9WPvZBZyahB2XxWNQPAitrXg",
  "key15": "wWWD5AQHTP5FamdUwD8qtiToyPJLPgmkNWi2Z2i4f1iu2uHqtwYdZ82bPxTvbFqbQuN4YB7dK7FFTkBDecgNRzc",
  "key16": "4dUbmzhD4ymqJrjCjHmw97xPN1qMVQAiGhZvx97XX7ajt478iWKzpmfK2hdncZe4u3YjXUMkzA5gLKKfrAZ6pLz2",
  "key17": "4uR7SjGtRHKx6KfEsfLQhaCjPh2V1XbP8fLevyGMhme5tSMtknc8dZmEz5ycnk8guPEhiyXWby2ASJGzfAJURCFh",
  "key18": "363msQUvZCnLdmdYaJ83qTw5TwsiggNxamPwxTqdBdBof6VQ9FV1VxEq7d1WbAC3uB2VzNDD7y7kcyrvU3pDtNnK",
  "key19": "5ipSnuHhSEqsMBn5NBgGGHPU9gHGqidTWCxuxzVF6DwcXpc99Pb6koeYB9fNN12R1iqErravEUArpSfZcmtWVMzY",
  "key20": "5ieSMb56KnkTZtH5gVqvwvnhP4egLNdfsaJjWqe5RwU3CR9986cZek1iJHr64hro1dsYMQxKJtZE7wsZMsqMGpnV",
  "key21": "5HfwrbeuKEp5XhB9VryJr48ecVRdAb5PUtTTAHQdbvcf9bx5pxiY5nzr41Cq5kHiBviCLcJEPFZn4nqFj5T7xoeg",
  "key22": "4z2wYwuyNyMKTjYeCFfvvwJwEWVHP6FAi8dCXahhMmbksZbusp5WtXZon8uDL3rhTJaEqfiJdVquTwQBPUqTfPr3",
  "key23": "2SZWg9bfnNZBkxTLyGKFvS27MiB16BLMoGMSHyesrdQFYhsFXxsMhmwQ15M3cQWDCRSWs8BghRbJkw8LobTZnwhU",
  "key24": "MaZ991LSKN28YeyEgyMaUXACvG6fpwf15Ji2u7q7zWTfPatC66WeHUmEkisNmvrCLxpmcMNt5ZAJdXkFSoSYBzm",
  "key25": "3UTgMa9Mtc1swiESBe2YPFCFUm4myYS1ikV6ampqzsr5WG5b3jmCogEZBobSuMaNZiWnPLPsUkgjERvVKG58Fbiy",
  "key26": "2q5PgwfC3VQrzEAfpkbAVgaNA5MaEN2qKhtd3bFLXEfBR2pvySTb1QpWKtXydh2y8AXG9dLFc1FR1A3iHEG24oi2",
  "key27": "KszWZkoJD2CYUpVXSSztdR1ggd5VcAQcowLDUCoRTdsDXUfhBSH4crqUa3RpQ4XyyyUJdupwnJg354QBB2gQMXZ",
  "key28": "5aVSVdWv4i4fw7Ev6T1DosMrkQsEVni1zThH7EAtDtuB4Y5v9WdprkUeoHbkd9Qun8K5AkWrHrTFAGXXeMsEKtCh",
  "key29": "w3JNSCUt9DCSFJ9qKq5yu98SuYLjjQXCvQQZHaDthknZH3VbnaM7DpkNNpyjFQe3iECmNqt2DaKqsrTzSKXfj4v",
  "key30": "5qF7tL38Ho1KXeBQLsuwFisLWNzgpVU2EjLfEZXrEXRo16JBD7qkgLrFdGiRRypFE6vEfiSW9HXcCNjf3Vg6MNuZ",
  "key31": "qpWC1TLfwNLnp37uGnho4ToVcqpBoq5MzyLnVTEPxx6Ri25AxjZHyVjeQ76PTJuzZQhLjVJsGpuYmSgmKLFoftc",
  "key32": "6PPsuiMRo2BBWz1JJSFZgpaMZQaYXCmhHZDh6z3vvHWdyiDtp2tZEK5Xvc35ELRttKnwUoQ7uTVNNadZHSQ8H5E",
  "key33": "QQAUckfTkdpEcyckgS7i6cF6kSaowdi31HL6uGFTZm6xSJq3YFfLMVc9ruiGsmvv5YzWDjK325cRAjc2m6RNpZZ",
  "key34": "2Te2qJwv6Q72qMxa4VQwxPCotu9L3So2aLFQ8TDpdZptbuRBuzX5Yb1qWFt2Ta2VHthB1YSZx89eg6Bz1GsPuqvL",
  "key35": "4a7mB2Mp5nKyuMXdir5KBaVyGyXj9prQ78KyjQgBEtJVvUejXTjD32U6twx6HtWVhz6QtRW3a9GK2PmVv4K3Nwu1",
  "key36": "4bjxfEQv4qciVuWHB9YPEberhQEiG7onFPBx8VNh4S7gCsr2KNpxYC38X5P4UgnA9jiuqMvGo8yXU7CDFrRCGRdv",
  "key37": "28ZZhbX3sTbhsCTvNGViUyoiVppG9nXbMU6QSUEpFGfK5vcGdoofczyZegN6YTGDxwkt5VFdyqvBHHxCh91fQjDc",
  "key38": "29vB2PyGQ8M5oMmn1es4kaYjBm4r63EobHD8oQCP52h1SFj91GQgfoa9u7yWAQRAGSaeqvoEieX88Bh1SyquNpKJ",
  "key39": "2vdQKMieRUPTdV1qrqhy4cm1wpv6UWdXNCNZatNcfYmzjh3XX7sBF3kZLBf9wVWVkdRMbVqYViCUqd6qeqGg3fPB",
  "key40": "2chWjR3ze2TAz2E7sa7uFHLNfFL4YVRoG49rDLAZCBMaqj4odeWdXRnCHeZtgZ622Doa2uoQB884vC2j4qYV8enq",
  "key41": "3VQYjBPvRyR9RVC2UN5QmLFRb1VXx1JipMynPii9BrUbfsnbBEaJoXwuWQ7bRjierFbQRUKjWZLoavERBEp9P9z"
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
