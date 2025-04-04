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
    "4e4gSh9jsP22Uq6wDo19ZahPWNtDVFsyjFXpCGndDiLQEqUrMW4Ecq587VTGBCA9dAhAPG4qTPtcWv9GB2bgrrQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GvwrGTasaKC6U63otcfKGNtPQ8JiWgDy1e4dHyTzBwckk2QDK1Kw3b8sX8QKmSMs4DeiCCE8cXeSQJR2JEKcfXi",
  "key1": "3xhkx9pHD3H9ZLGqJakh2FhnvhUU3nC7qGpcNg1T6NbGuXuwFZPRwuS41UogANtgbg6JKRdicbFeekSLqKyEMHiy",
  "key2": "653fwKq5gbLwNGcmmHWAYPRUa6Hx1TjvsJ7JqdGbTor4fBqu4ueeeCFPS7tBfnGX7Y7ofqU9XyK48smADy9sfdXa",
  "key3": "5gE2HH1EF9wrDRLyhUfTMpSBAqt2DY8ZseqQHnQVuRQpS8CKpXoRQpPQCvjNtfLoannehi12RAFmUwwkHqGKrAQE",
  "key4": "2Xr9kd4Ho5RRUyyPfzUGiMV6ALu2SbFzcRQfEMfcHJpP3aa9kJj8TwyE4cvSBLWN6ARk4M37oRYkqW9dbKaW3vKf",
  "key5": "3no1vJbbSqbNe1Fh4QCUqLpPA85ERy4zdQ6ieccqKiU1aEGEVGgZMXoCDzXV9smN6ou1QCNTXH41JQQanqCBLq39",
  "key6": "V85KK8EbFAnvxfthJdDcgpDwi9P7hVDdtpAJMqNpDuA9Qs5iMNdewx6RqFNkjyk8AKB7tCvA2Ednx3bVoQYFqDt",
  "key7": "5SHT7w5BTDq4n1eBc4zsBmChtXycNFEZ3WevtXS1FWkzFR8qpD19rkxrW1wjdCx6xZ9qPTFdTFaM5zQNqcZDdMwS",
  "key8": "2RyYgG33tqAiMpMcUcrkEpq2QKQjt958EQSx4nRmdUAAyy11bvbkL6TVpA5vrbAw1b4nun1bm4kTzjhFu4r94yhh",
  "key9": "2LcHq5Wpbg2TKCjtfY1Kw175xVjFfG2Fjkp8fbfBK1JkpSRRWPWHV4C99XFrSC7RiiEWwQ2ct87Bjavoau5grsea",
  "key10": "4EgCqSWVsgM9zEfUmQeMfczqTj6XSX56m5yCi88F8xeCSGFqkS27nyZaW8BWbaA7gPLQDCPLWrVQqCtdJCtojqUX",
  "key11": "2vLmQQZCk6eTa1AX46nKJd2yqx3XqGLbumo2FEq5dyW63MJnoBQvB9UqXPPEnat8w3DoyyXptqBKRrygf9yaSVh1",
  "key12": "cK4Xij9cNmPyCWQp4QjwERvUwwLQNrQoa5JdfhhqmXdwrG4W9xHaSqhCt5P6isU8dbg35CiRveJtvN7d6cLVXS1",
  "key13": "21A8NRYSqmNSWwrPrfFcFf4BmpiyufNqVu3BYJS4tFq1mFoSBuaxsospqKKgmyhndNy21zJ8tH3h7ebNeZBvVzCx",
  "key14": "r8ASTubfvESXyTs7VPwEv4GtUWbcARSu5nUtWRoPFtSjKky1e6m699u9pFBJpMZA7MeD4ggkc2cURNWE63SSKwy",
  "key15": "22jP4o3PpLn7guX88xjLGhT71v4wPnT9mEGRvbKqEUgJpAD46PtS6yFAq9UrJFRyDsrNrkMhxXZjuuPFUjNcLzPQ",
  "key16": "57GJXunyvWi3oCFq5wEAD6auWSCnudhj74qsUiQYmYUxDktkEHaX8sS7Lbp75pAXcD8VKFAML9oGPegjMepw7NRv",
  "key17": "2XzNVN3xRaQeBky8ahk1XktJkGAyDndSX7hTGExKN631xDvMgHb2DttXtWdd3B1ZDHbCc4xWDEYs8vSgnLcqnbqp",
  "key18": "3Ddv6uSfQdth6twsM6nnvxZr8kdFDfB6xJcXmYwj4Pfvi5sovTU1pJqT8HgJYGKQAbVHnqCndwWJrvFd6QcMzZVN",
  "key19": "3LQtQkjwaybtAwGuBH29mu1Ts4ULDWwTCSNu5NwNJw395goUCcExJJezkAmG4b7kBq3k1R7JDzSYzmBUYAfijPy3",
  "key20": "2QnGsrigEG2quJYtVTze3hj3CiMGRoZWzyLpD2YNZSwckMxFAd1iMdjhouZVT8D557v5jia4nM9MgmnH4UpwZGCf",
  "key21": "3HWcegUcDuubHas1P3cVWith5Tsn8q6F35fVaEZ6M5xtwSP9AjMJVTCc8qfvr5LPoCNgFMr9dh29rfCbWPzvYvrL",
  "key22": "2h32GDDjNafPq1kyYfuX5DWcJN8b4HwRAFgDMZXLzcxcyLuVHVxBFPf43uCN3nCLCP41eyYVkyDorvYPRV2fiXRq",
  "key23": "4NEJQT7EzRncaNG9PQMCSKX2tE7ebWd4K6RVWCwWRNjsNj13RiHvMWp5WN6YJxXgJW6iSXAkr9gz5h3yv5DeppeK",
  "key24": "EXVfdDv1HXPRSQgECNTDN4pUUoQ5q4VXSUzenRvFGpcXVnu6dxMGSgWYXCgj17jUivZRfGWro5FQqTref8RuzUV",
  "key25": "5QaFSXLHe1vSwMQXEoYPXak9qvN4ZFv5GXY1wvZDPat2RnRsQrVHD2LvQ4FYQ8LyBVQ4G8z5sqSwnsN741wkFh29",
  "key26": "5tnt83nWQt8xcnXwUZKbZ1f5GMzwYTEQEnxqb3LWqsNuFN6WoJvtzAwa5No6E6akuvQ6XhjziJcwuYEL3ss6aFKC",
  "key27": "J3Vnwe7aCtB6Je6sNUiB2p4H4r4CHzf8LWnc9tQVKQjFqRj9c9fRpdJzu7pb15M6d3LWaQAPSsLG53QDXWTZLAr",
  "key28": "LBnaWyELMHPa14LH6ZirhaF7DUdvMtTuvuq2QsgmdKJzQphR9LQxnbiddmPbxYj2vMqAY2Bn7diDNoUPeFzHiKG",
  "key29": "wx5JZHwGUfzQbwKg233nVmpbXggpMirCFvVWzspEda13nF6wtfiaJMV4BXYMSzRfoUwufi3xMEkZAyk85HPcCnF",
  "key30": "485HgL6p59BhVA8fmrPGXfKLMgU2qanRkrmZTR48k1j2GpaYrQesxAY8v2jLcC84tWUFRSxJDAMwpgT8vzLELeUK",
  "key31": "4fu43Q2t3pdu5CX8KSSi96jW577d4JkkGGsGoRkDWWqCfx7sZcegQtmUT572QhyKHveGd2UeLeDHA3ZsoU7wEw3S",
  "key32": "3fGd5ZXpPCEPUk3NFrrJ2JCehKWF43P83KfyLvenJC2FQtUBSmEW9m7AkCWxHMWm83v4Az3ZR339iQhhiK7CmpPP",
  "key33": "2PRa5fPwjUR5Z95tBWvUUniVpnyL1arrGsJ8L8UTBjTzkoR4eNA8bW3UWNiCdtLtrQJNeDhjjiL7vHu4Cexuwo7R",
  "key34": "3TNf3dAe6YKpvpJx8Tjxr3GPtAHeaoVdLR9kN3MPcPBwVr7NKigmJBrRsVRAxgxJCV9vwk66Y57WWwVia9RLRNCQ",
  "key35": "36PtMpcU6twJ4ZVQaF2Pj3gE3J34fWw97TwZyT3JGjJ7SNx5HrTHwQNP1d5iigyMPWnzBuQYHGMjFTpPXzTLDAC6",
  "key36": "P7wAJQUAzW9PhjLuw2QLPw8CPvuEyVmb3hQgFWZYWkWec7yj9rhyANGp1V4Berpe4njZ9ANZV4eUE5BkT73zLBX",
  "key37": "2UWWzvdQskS22vRHQYU5CgHpVHqYp8psBTBcW7KGcNBsP7d3jiHnEwzPEvG9jPRQaKwF6XcrCpyNFFGJzKSJJMTP",
  "key38": "626R65fBtVe8iBFyuZNYyjVQ7okdRnkF9R9htte48wuFmsoMgWW92uzwN8Z6pnyDtP2eenJpkumzVzmtTju8WkDH",
  "key39": "4QvqzNDSM2zjvyR7NLEdhWhXeM51krgzc1L7UUfNn4vCzHwT8xWBu6LQxR9KtbAkKfPDVhYFMzoTfAwtsAuGoCnt",
  "key40": "2qApBd6tq21zn7oD5hAkez71JMiPSBWTpALPtS93oZEfUwSRvp5aKrBh8wRZBnCibHxwP3vCXGPcTPmD6gtRiCsm",
  "key41": "2gMyZcQZt65fL94GeckGy8T7xoGPZ94keP9vWiKfAVTH24rkWcXJwpa2EtYWab59H71WHFpNazRNScPWAhrx5L2A",
  "key42": "5Mn7rL5bUwCMZTDTjLALkYApsNXzewwcxHK3C7MQTpgp2oVw84cfhkDBTSf4cAxyMqmqK5t6tvzgAJiTdRftwbGp"
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
