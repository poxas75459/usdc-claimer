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
    "54CUCx5j7MCYBFwwZgk7ffmWj9wCX3S78JF6JcoLj8BS6JNfyFCmVibwiMd4ZUAQ6FWS62eStufh2MBNwV5eVTZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yg4FCfb8PWrRMWb8JvWWQGWFhrqcDLAbumZULyxL492yV1dYcu3pThJ74sR5AcQ1cByooSeGQRitGoWaMmjqbvm",
  "key1": "5UiB4UNE4wV3493rqu876FxfDEsrCj9xfCNmWUyd2u9SM3qyEgBDeoMBQy2JacrvXH4Sk7xpqm96jc5BmrRWrfnh",
  "key2": "4VDJDr41au4YWM3zLyGz6pnf4X7VZq49hrNeZ4WLMu3GB1PebGaVg4joVPruYzxUmvNAnoFUcsHwGnJ1vCf4cn86",
  "key3": "61BaLE3hzwmSDjCQibVU1kCXFXXKww7sYGiRazKq79TSGjAPVFcP2XkWRQjAZGWCPaSRcRSNhQqPfMeVzqXc35dW",
  "key4": "5HS1acWw7uWBDN3SRwCMrbGsBYXvQi6gFaPwuDN114P8u339qLL2bUVbnFqJPk4B811ZNwe5D6uosEwry7Y8hBSL",
  "key5": "41QLP7FX6GedR8sdDjwQV2vyTtNyFytPm7d4GACSfVZqgW71xhtiGuybju9y51CSswmMPv7QMsmwAHSwh82sd6Cg",
  "key6": "5jqW7gXgvqx9ofAq44C9ipksPtreUAvQ22vqe9HmZENMMpoWtNnHp1E7m5DveAuSQzoV19QXjhqcERgZUYTEkMcF",
  "key7": "5XDLek1sQP5b2ETkmdwtoLqX5rDuQBti2Eg4mcL1KCdXY7ZBhPTqptGhQX2f5k7gAsfBTd5pKrv148NdgChd15oL",
  "key8": "67NeDD9wCvmPs2hBGuZUh4izoESUxUzsHt4J1xJiDt7kQq2mLAJLodUpctQJG8UTAmUifvSn1W56Egj6fKrUqqrA",
  "key9": "4XrSuVUkM2FfNeTBusuzeLsAxJCycdjhZKzDAZYDxLuv5vWXPyjfZzz84YgkUbHEQtGcA9za1zKTkDHoE7FkKMD1",
  "key10": "5efEjswxigMGWsip4BVEaDndngZzm8ebMtn1ELv4T8kRhs45qT5wmgNAASvo1c3Pmf8yKvfSskfkuzCrNEvHNcPG",
  "key11": "4yKoCrSFN71vzqBcunGqe8wBHfwPCJKATDKHraWtneLUjf8zdASmyuEymYrs5NCaBAzwd4PS3UoH9jDHuCKddrGw",
  "key12": "Xd2BQxbYKiXD6x2FNUmGrmLrTwBpLPn1Ck5TWLiB6f1NKH9hq6hpEjKwgbFGzJdDypLGphR7RogECy7T87DvfdS",
  "key13": "69gZ25CadjB2cX7zUtUpKBqJEKugK1ojHUUxi7o9gyrokV67YsRMt3w6z8dwGvAZAbp9EJ5Rr6We35xMvovJx4h",
  "key14": "4jMRA9VA63znt62zAgStK788E9xJB99UxKAn7GJdVCer7rfpttUcNa6osMSMpKtFDLJadNmbqjktj3ePriNCxRGK",
  "key15": "2aiHtT4mhKEz6Z2sytsGJbVNbtwTpdH99d5FpoKietcbPe11BmyX3d7rDWbjur3sk9DXRduw746yub4FiV4pYFsM",
  "key16": "7kw8VGV6v5eRNWgXZrqpTgMwNJUnCQid1U5SUzTwSrh2XQxt7d8zRqnGEs5bEKXJj6oFthafi9dx3cYieNHwjwk",
  "key17": "4ksx9PnVrTN6chit6mmrHzzCkCv6xeZPZ6GyeCzbBN1eSG9w6yuM7asj91vQJt9vLe8DXDabnjF3LALQFYLDVnPt",
  "key18": "45Dg6z73iB3PXHzg5pmryFr4vwCDjGwaStBE9GZZ5cqFCKe7pB9NGGHmEjKDW4J3ZbNu8xnf74MetSXyVhBJY51j",
  "key19": "5c5pkXVa8cXsenpMQZL4EPUhHnbCSGa1cGCWHVyMcX7YgLtFYoGZUjkGDLZyDwJYy9yk5XwZkNqwX6TJPP29A4Hi",
  "key20": "wXdbhR6ccEiegbzgn9RKFtTnSjZT8RGi8bZye8EzAqPNkNTVBx8cxwZWRBePXoo28PzpjMFmpmZ9F9aNAhQHUZn",
  "key21": "5bH4dG2V9eXBh5GvbRWJFF5vftmWUdL3tJeqZQJ6mBhcgc4R3CxhgSzhDnfbfC7RXjV3pnorx2TsSkjR5B4ezUXF",
  "key22": "5jP5nMZN6ZGxGcn5PV8H7WVVfK4j2gY1vDf2AsnJDsc846fYBh944rdaTWPywAuupJKkAQpwZXGJxDrxgs97FJig",
  "key23": "1EbdDgSUjdxwWoBkBvtp4Ag7LNA49i65C3TEMNX2erfeAx9k1Apdmkd4FsXMX697QgxjSRndGLHdwVCdAWYaJx4",
  "key24": "2J8DSRHdRsFP7pUDZgLQ3G8qJhWabH7z3da7jNyzfQAfwEbJMTcgGukvW6QcHQrUvk5c7i7528nq773J9CtdrFoM",
  "key25": "5Qeq7fZDm7LeJ4nhkXVSKk9NWBtDBZGFXQbAvpdn8hV7JRHn36SVqyzR8WXeYnZgc4NFXx5r4yq8rUepeXX4fPnu",
  "key26": "3NyKHKWhgWR8jtrLEaTwJeNE7Mz5E8uQr8MopVeAgc1D4QajMeAcgpdjcJFrtMFxvdpu4MaVj5ayY1ezVMdT76ee",
  "key27": "3McNrXTkyb1Sb7pY2RB92qucdQNpjUSH3ZtiDbAaFhfAsy8Gdf62iG7zXsB5XnKzYm4jCjZURoLofM55YigdzrtT",
  "key28": "36f6MB2LmbLUf8D5DcEGBdxoopSrZDqpueCGRG3Lgix5MqLiZyeU9j3GXqTUAfanuQ5qRbcuZ5hBHnvtMCiJgvzJ",
  "key29": "4M4m9LXL7qBm1E7zEv6UTR7vMMcEHB6V6nShEvvKopEGSQYtrPQfid5MEJob7g8b4NjDicTkMDrVq9wEhd1Ft9KD",
  "key30": "xSGz3GttHLRhMGX5uWSnhUELWKKfJnc2KkHrdQ6XPpzoZJJP3grAgcQGaBrFjmUpAKMbT2d7sM4HrdUvW4GEfb3",
  "key31": "iwsKiB4PjmWkbqEi2kw4ub7gyQme1acxaNBXK9gabzbRpnozpfPvCwnzxSqjxJbf6XWZPF9gssEKXJFmWVX5kVw",
  "key32": "nPPHuTrVustue42EFAHs9BydQrnT1Z3SJHKvoTZVyjhXdrF4Tn1Guk1hnG6yWzn3fdjFL32PTJns8AaqctDZj7V",
  "key33": "44XTCczGuMrds7TFPxEcfeKuwiA6esjRFpMLrhKX3FpPLzpaTACfp2GtbuBsH76jgoUCgNc39VSQx3kQ1MPQqa3R",
  "key34": "4FFUsHGZ4Ze3jbwN9NcEriF8KVSKi5cFXd1Wm3EmL4VUsXQLwcjoqxZZHbENUQ6MDjvYA3uW8YfNYNXARqc6r1rt",
  "key35": "3xTTuEUs1VPXA5QvWjYKdyXxGjUisCAEFDkRCNLnXfNS7AEJZDqtz7XjVur77DsA6Q3QsjdHSboMD5BaXqWiWTFH",
  "key36": "3o5TAtg7M8T2PvPkdUib34Pd3GojQUYpU2pjZU8hGg9ni6GxmxwSWnv8vLMk4ZjFzeHis7hVAWDzEFL4jMJDMKZU",
  "key37": "Q1P1byfcmfBRAJMK5gRw5VuYSRfUGCE4kvhy62uPDs1kpZu18wdbac8PLynx8YW1Weqz7U6FveHe6Wq3FyriRZT",
  "key38": "4Wu2B9oAnYTfykNhEjbLqBPHgK1687ppPkLRoPgn1bqH5qTSqywoJRRdStWJahjgFaTYt8NU3yk1kEKm4oPkdigM",
  "key39": "WMLV8v2DC5Cu25txvYQVCwjJh2uNBCxb2ZfaXuopz5sTkJerSrMfnWp7GuNJcksmqjUuNmt2eG8f8VAYqziZG63",
  "key40": "3qTmEJt1ar3Au4JG7PFAjDjiovWJnsiYKbC8URgX3555nCw83xoHDY3EmFYrKptLhPCQhxsCvYY8bDz9bWWfK8x6",
  "key41": "3k9XaBMsWT8MSbmX34pj4aKi349Et1M7EDpBbUokeTHPWwQf2qcQyNMnK3ZnnSL4kBK7USBURfjSQs9Kkf2ug6A3",
  "key42": "XmRYgLTjrU2ckhjKyUddtEKvYDfoYN3RQT3cZ4mjh2vRhW6E5jzBJ6qXDCeoW9Mvsf1fbqxY2ozESZSi2m9sexv",
  "key43": "3bg1id36ewysQtzVPZRQGDX1p7gJGdGyYwSNEvATz4VA55Bpw4QVDPaPsGmVcLR7Qih4kpPWAzrjdYMQodt2Gsma",
  "key44": "3bMRKHiBb4343ib3XeAXsFFPKxWamWyFMewQiQsvTCXgtPwgvkWiTqtsLcuXaAPriT3XEJPqgFCnfu86htVePppf",
  "key45": "4nZbvJa3ixgc4nPgvcRvq1RgBxiA3G8H3xqCjR6FA5zdg77j3WiCbSZLWGKGA2h6bYpUFbCdZjRb68YtcFs5NACT",
  "key46": "5kPwK2FzeTK7ebQy55xHqBGEhUg9Bj3YS6tpaTDBDV7pfxUc4FVhW5joH6QdGuEKot7r2SESGTp3DyUhGvXF1DKc",
  "key47": "3Lvrxo1PprhbgzTEyPvLDNr2eqrJhdbRyGDVP6RnWVNapUmMp4ZqLrhudh5Lj6bLL7gSCnjGLczyWFU4TENv3eJ2",
  "key48": "2ynSgetQMofJv6oRxvayzsRBa2ECSmLJsybg1qKqeTCcopCQKLKQTW2chq4DtkGSZPQz3YAtmGctPohb3zHRmfpE"
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
