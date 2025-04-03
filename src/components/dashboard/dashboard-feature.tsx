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
    "59aAspWUDHFyJgaPDUgBJ3gskxMPFBWY5Z2GzMNUzmfsS9phCczid6S6eACUFAvohE1vYdJnvC5wvYt3Qrrx8axZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XZuEoSGgQzjS7SkCZiRUj4Q26D31BQsh5AWUqQhiZCqV9msAhgh62LrdDnyw46HKzWBTQrA22YKQQVKBCg59Ut6",
  "key1": "5n8tWd8axV868Qj3q9FQ1fKLR3RExPicUsU1grLpXa1SiGYUJWAUwTwu9m8ZZEfnGhmPMDftR6PL3YgvxbHddffM",
  "key2": "5uHN8aERhYS7gyAfeQrsyLLiuxUto3a3DA3BrEpFXF8HmUsDoCBZbHaFbzbza96Vie1zKWdorDRKaqAKRLEgMssV",
  "key3": "4uoCL8CsKT2WMvp4swzXVWEgCUZsFBfwdSh1Mfe9c3iAmmvCqxhUKCA1WPBniS84BqEJQhzLtHHbukRhLVvD7ngk",
  "key4": "3MK71HbP4zvs2u9PZGyjTXYzCXfEZYRef6ePw2QtHbiredSNNpVztAY2TRreuC2JsBK5VpR95FnWAnVd1JLBZQqT",
  "key5": "5mLQCox19Ad11yPDUrBDvZFCbEzE795kGWoXMjP9kyHMNXTfDU6CsEzrpENLjU2gRE5HEBU1JyznW2kTrjLYhERs",
  "key6": "63yBwGrHjhFR4cXpQ5YuyDwLbFcwCqEs4cptXtzumWwPM6N4ZWfxkVn6e9353odA6PtWAqaqMNfQ4QWPrdkXN2fi",
  "key7": "5kbLWTw8vn2bWMaC4gSoutPFvoS9B6kE1rgcN45bTZDRCiUrM3CzeYNESCnwt1rrE9G1dAc5t5wTZNxnhmMyRBhd",
  "key8": "5Cn1FELwmasUgesNETxkG9vFLxY21Mmo14HmcYjQhrcWEh3Uhmzs33PpwjCcoPB2L6LuKNvGJdZGBj1TaX6Wpjah",
  "key9": "3QfqFyrfw2jPEXZSGQiRFyc5MJo4V8RM66pZzjKwniWZx2dyxMQ66txdvVp1jaRg7zeAUBTCck5S9JMaQbtBTR7E",
  "key10": "MGsXcpDDFoKQ25dGo5gnS7SyesRe53RRJBXonXWKZCKepZTw5chKME265RXkUZkdfDsSRS92D37Rmaw7BkG4WWg",
  "key11": "4iDpnmFHz9qx6wMNKxcC3jknRyT7bFku1VuZ6TnxnfiGq3T5QmEQEhn71zuhkLizJ2H2Rb1WhHCK4swdezK3jLEF",
  "key12": "29VVsRiZwyzdvBi9PMWkfUbj8McM8aE6bwBghuWu5PaJ5Z5rEbQ6YqXtd64Mky3GshwcroUNeYoEc8U9YTWbT1AP",
  "key13": "3APJ6wmv4eMa51sLz95eysrKhbzarzBjegHcBub8kdGtFdZqf4qZA4kotTYG5zGLWVnWiMRHBoUs4ti7EAmrEGXs",
  "key14": "3Q2BSV9YBVbGGguKEDAh3ec6kac5NZYWfyc1qgfYUEN7LFQZgDL47hWcYHSoxKfWbZyh76TQYiMRtKpLKoNBMwyt",
  "key15": "5NsYKJSiTxziv9RvZxErpJXWN34ej6KkFeZdFQbbCwFiwev8TxrBswudcGAbBaFesn9NMPsiKwkUZChjoAYB5zE7",
  "key16": "2WxLaSHR6yB6jzZV72rqHQUKKca2xEtFxLpvPhvZkQcraoFHbdxVxWwJAckQeVsb2xqphRGGVANuTTBugxqGaYTJ",
  "key17": "4EjYKZdK4Jd4EMPhxzbCKcjAnoS39ViCycSpGbV2WPtWUdhKb6qamgzPCuHf2xFERrq97hFPf2RpHikGnAVcAoMi",
  "key18": "3ZUN11K9SintiYkCoTf2U6R7LuWsm9cTBMq2Fja8RxeTMSgvxoNaMXxSu2DkqrkF7ueR3MSQkaRjMYxt67mEseoD",
  "key19": "28FryHow1sJsrQg8wmhUJZqnytUKsS5otoykfeZpyFsjzTcx6wHrVkSjVUCqhooCEbytCxcwSP2z26cD42Mwa4eX",
  "key20": "ohPtvhLUsraNUGNAwJh8uPUzCQUj7sRMBLe5cEso5GyLTAjMpNXadCBSWc8FZu1q7rAG4RkJ7gHVDcTCyMnsXT9",
  "key21": "3nCFPNncYGcW8vsR9SrNMiBXVho8wTcqDBT87fRBTdt8qrtny8hpePiUxnsNcDZ6Sp49EEGZYs1wsGNhkbFBqWC8",
  "key22": "2AcdFy4Uz3itqYquJSMMiBR8Ax2kMyfdjbtdVJ8SDZhsrgjgun3r4YjcxrnaLiG6HE3B5sbLfZvZW7hD7MTDcC44",
  "key23": "3bVXbxF9tZ7Pf9daKZbewp4qDSVYrjjVn4t6W3KNts9N2UZJfwBAT1AzRvPtftpFeMajB7FkLU7GqxMZRTB9MW1X",
  "key24": "4D6gynv2gkNQNhqjNqpWcCRUFWFPbKZPF8dto3bYhzueBpiFmG5BjHEGKgkNcncq9R7dm7zKWPhC1fUPMiiU29jG",
  "key25": "5p2dC65J3umkG7EA5yws9FKg4W1AjPSCRAYWaHXw4K3nCzRHuqHxJSQbT2BzdVnvEV2uR3XR6kEiEC9QGKsHz9j5",
  "key26": "anH9Bwdvebe1WqMevzh5ciazovaUQAMfYjn8MB1A1psEqTuxViDSeie2yHgTUcL1BvNvriuRxqWUBryymVkc2eB",
  "key27": "2gdRtdAwR4wXLcKzfMdrQimaoRez11jjvKecWH36ChLGQP6tTUDXGYdatV9Hd2GqTz1Xfk6cTrckpt9Tf8HoW6Dr",
  "key28": "22hWCrCwFBdTfFpyawRD5Vi6HGEw5atPxFKUJnb1SRJFXtCQejPpKzkdSyohy1AtSg25VyVQyfA2nRp6ANVUijbv",
  "key29": "4KaqzAhpDz7hK2vFymsfJMHZveLmzedp747udVo7E251N7iy4TRtjMubYBBs1rdreLVwgMXX3hXHjGdcTPZvaSjt",
  "key30": "3LFuNK5waM4V8BHHmQQJMoQemz2oWX7EDUv2xcHgBhvraK1drmPQjvmRY53XNZy2D2m2geV3Ya6XSWX7hVkSrFfv",
  "key31": "5vAs3o7HzHMy4sQf1rQxgLapW3eUwgsLLPLAbiwmuPrMu2eNWpa3KzYuggkdnnYaGLZqVuyTuXsdFGQ1eW21MHxk",
  "key32": "3rJh4ZYSAgfizcBbCyuEhsN2tGhZincfLpqCKYDguLMQPrhqtLuHMjiwAxUsFEVWqYpMUV1bWKsqMMuYw1nF2Jyu",
  "key33": "jhqjbXvDftNR1rMi8xvvmYH5AjHvRamcV4aaTmoF8ZYTfm6Zoj4h6Ty2kec4zgESMfxtg7sSshFLuabdWMvGN3T",
  "key34": "4gF9HiArq21bvtB51dmBPWiA7ErCgahvqyUiaQ8pNP5TtKzR7fpLJhvNYJgi33TKxZuHnNq9sdJ9gMUtYhgSvxnj",
  "key35": "2Aungxt6Q1W6ttyz8io1KqCvA9gNbwmmizWz4BuDuKMpW4GFF3uWA7tGMno2LKRRtCZoXr7NkXPeQdnJf6xhQxqU",
  "key36": "3wKtEgZK5ZMrdDur17rzXfN6fwgzZWi2vLyjtrEBuAFLeTnYPvQfzqnmT5hZKAbBJT62DogCTNmme4L34LiJctXP",
  "key37": "2fvAoaM8i444nNQFoTmMwErgH8TVjRhkEPxfKY6q7Stmw7hwvy64bQq952uyVevUebhcejnv9Bma2QjiNgnZomxc",
  "key38": "4nGCWH77Ato4s7MeXnKfbjV56X31pQb8KmGtHs3dZyXQoD4HGUCEosVb6MLE7eAxJsam3aejXWhKAc3jgTXVAHKF",
  "key39": "4dvy5356bay6mBN2XLY5ZG4X9X33DhNzaUFk3jCyCkiyycjs5BNyyJJedqzjuS6RoNgTzYKTqAJ3XqFAf8VCpzzG",
  "key40": "rfRVoNiNkkx4UoFFcMPEJQqVHVfMAYuqE4ecWCwxvH68MzLrtJb4UriMVgFsxuv88Z6a81K7M6JgTNLh7F5JYrU",
  "key41": "4v2UUseGhNqUSgvttqzZpBhntYqzj4VebnzxwNJ5yxzAJ3ikRsUNHcmbCKWQJjAMbvZSeDo39nT33dXLn5BcL3Nm",
  "key42": "51rkz1yuXyyKvJrPkuYWRJ2ewPRMP18Ljjirh1C93DEeu7MPTkTAMe3HQNSsytMn295vfgXE8MtvWjDzFWHa1XZY"
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
