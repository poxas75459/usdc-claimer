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
    "4gVEY2d7trYcJ2h52AdMpmkNSzfsc7JmfySrgEhaD33uHMe7XtuQWo9Z34Q5sjqCua9tB7pV6YKtJU99bUd5zezL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c9TTyRjGv3jvggfkUfcHEfkNAxsfEJqTnkAnudk45j25od6Mxw7gzbhcuMCqk56EJ2AsGnJQy46TWUMdm1FefxM",
  "key1": "3M3NgStZw8FpxPokgcvMpA7N7UZmyUQ9eqC8zBdrB5hZ8ZboLjGMbq6j4mzMdKpnQg2HZDcAzaDxehx5KF7F15ze",
  "key2": "xkXWuGde4kFur5VDXJiYKZnRfFSGAW3jh7QssKh2xkYEvpqR7D7XSHzb9SV3EcXB242FdaqzaK92Gqk6GaWpCTL",
  "key3": "5RYhMahRGQSQHSx3TBYppqCyeZ2BoWzKdmgrS18CQ8UMdiZMsT8q1hSo6SyphUS7GUv2Aea6xVAPbvwdB3o8enEF",
  "key4": "fshTwoKHaiNDZJaAhhHehMrFQpo3UrHxbJeoJ7WUEztmAzm9XPkzajXkucmZe1mpda4DaXMs3XXfUFaPMXN9yyN",
  "key5": "kFK4UmLWQ19QQwy5sQz6QnLWsZMnkjB3hXufWnczxqPnjaG41qUSWbGVNrQuan16aeNoCZ7nFNgpnTdBiozUcWH",
  "key6": "ZFfubdwvoEujWKojwWqxHzzNfGkBfJG5576dwY62PMTfjGTCbMQBd5k4d8AzKWai9VMtMrjeCH9nnr1PTPgoVBm",
  "key7": "3oBgjK3WcZAcZVbjoH1buzsEfUyqyXRzLMcCvC9wr9BYGX1fPDZRPmJni8FxXWpHYAbhaHpK6t4QTmvjscAvG49g",
  "key8": "3YK6oDh3NmdWfvFecaMZa9aavieCbRZ5jcpjF8mgFuKmvZyfDpmeDfGcc3kds9XDgP7ghHqSmHgoCQMBG2pn91zD",
  "key9": "2hpizDzgSQM5N8soMbJLRSZgzS5htBLC5Kvthzg54efRV6EnrybGn2xt5fbV6o5c67b7g1vEP2ngi3XLxVJY9zgr",
  "key10": "4e7US2Ft8XRgVwpqjM7Ei7ts5iHX8HczUxAcMaDucfabQXkoioaou6HTGuE5Bx8R13ihDVDrUbjEFNsQQH5wANvk",
  "key11": "3j53xB52DnacGjM3evLYoTp17EmBN1EMaEShpAXhiZARpshCkSHuH2UJmcDH6dKaaoPHSiQSE6WCh2PsUVz8jTbc",
  "key12": "58G5dPDDHPRPbrpPBBsEmvceZJK9LYrp9RvpUAU1VETGgwyvbfEQ1ACsrUgrdEDFPS7VX1wFMDHNNNntDfwnQBBR",
  "key13": "5CrSGbrG4ciSUgGVLw61rDXo2Tgxs9FqTV6co3MpuJcHhnBWcYz1AsbeyE3zLeJ2TSNJfDk3E3F9KhVVwg7fRjok",
  "key14": "2AhoeZ8SjyxC8THAjdBVM9enVUxQ97Lw7EA6RRnA96Kbcg6dadU4fftEfnJmx8m4SHihS3RuRiBFSBbgc6Eu3aB5",
  "key15": "S9TUPoMXXEAiJjoqXe5bKQAxemwz7WTemXfNhJPjdRCDe5A4qHLKQChpyCh3YSyu4y3JRU7tzMR8n5vjDBw8iTc",
  "key16": "93rH8YWeDjuTUu1RH8wDW6R6AjUa7ieS7ETuN2LM11FhzfdHdCw7UbnzmjFzH3LV3oP8aEgfNSrHA2JWuqakrZJ",
  "key17": "3pqmC69YntTJngQxcrTkRs13XYBmJmT2EVuvrpgDPY5LSq4kkgAb7apoHFHYocTt6XvRaJyYnwjRtdMi9Z1tKS31",
  "key18": "4hueTNVDCyTtbpu2ayJsTEksfYrxEkeW3hW5yAkn6Jcr88nX8ru9ixoBNKwufy1vsjU98V1VXTWQqByCCzj1JuSw",
  "key19": "4k6PstYaGKkhzXamBpaqTSxLgfJdqJD7wSZwypTFuyHWNZcbr4AEC3V1uZSQxxyUhksXpTbEd3hXqAd7FwZZgJfT",
  "key20": "4RmMn5y8MKD1fuaSwN1PUeXVFZ65xpgMJYXRetPKk6RZZQ4kNQfhXaimb5nWWhNG267g6iikwKjr2uNnhWnZW2Jj",
  "key21": "3vVUQT8FMsTep6UbTBXzN3Fp3sQ5opVoo4y2ybU73ZxX93DTCiwYoU5cHKom5V8WSRrMvUPpMyPKA8CUEXwd9F3s",
  "key22": "3ACcfwuiXxXFkVb5gxrx8r3GAjg2JoHcaLXZRvwxS1ehFSnt3pMQhrypPHdkq5WF8Mg9bhgGy9idUvpCnb7E7JGu",
  "key23": "6166SZrpWfmTS3z6NBRh8eA17PrQqoR52SLf2xBGYSvtETG6DKoGKkxW9sT3AJJ2T8PzKqWXmqsQvhdmSSiVhPMn",
  "key24": "3rnoBQx1yFt5vr9V6EDaobYXeHqCPv5MesPBxNGwFUheMeHxdaC9Reqzg1Mi5DWomdquJ5Xipiy5vAH3bLsw5Jov",
  "key25": "n6MEVKFdSRfiWehT43h52L812MfCXCGFnq6uPiELjPo4Q1MZy3ksXVDz289dV9TvzRAWzUbzMszyyGmaBHECQoU",
  "key26": "5ivBZp2AErXByn2hd2bpEeNrKanNoKVQrsybk9JB3LDvv6cTmHgL2LUt2ZZVTCqTbAFvv9Tiwi7jLEqShuBqHgde",
  "key27": "WrdXVWrAEfoNhqFJdbwhXSVnW5y1vs5b6VnTRSdj2JbrKoenYuEiK3k4wff4ccuX9TqCppwyEu4RHdRJfbvABsd",
  "key28": "2gXW7xZr3GfHT2nKWAxNiYtE91yLdzpMAdP3kHtZDHrAHSTqarFYm2SoFtG1NzN1TreND72WoNCPKkoFE9Rdt9cK",
  "key29": "4DKDdRcdeHvXrM1LADY5VaGRP9spqQXwyftadKGuVt4KZSBWTiTiXPtQyje8yPJjqEJGHdt4ZStTwqJ42MNgtnp",
  "key30": "3HMazHsqHNHjbqTz41YQmmQyqmpyUqjtgwF851eg2KcEncJ4cfkXJhARnHVGf56Dq6WJPvtZNUbxWXVPbwfYEU1s",
  "key31": "52rW4JqiF4ZuJKeDY3y1osWBeQo9jhUn2hNJNnCu5qv2xrg6GDCqhdutL6qGmyUBFvrSyxDBDnFchJ5ZEgatyhXK",
  "key32": "4vFbwZBdAkrBvGLJx8fpbne6FMQyRmFTqjXLnTt5F4sYVNiMKbVCwx6sqNhkQVahtKEcJ1pLcY7GrmdgMEja7by5",
  "key33": "4eZajvamyt6sSFNSdbTnpYVAng6R2HJNghMvHGdBGJ9g4hVUTNRnomtY2diMdJj4j47qTNNw3SyAcpBuvuqeXzHg",
  "key34": "4baq2UW5neCmXiaZMcEb5wNE1YeYDAaDrxs27Fw3asjxXhdewuCKd5pR1iJHuUaasJ6W9XUhcSaPzUQB2MFV52ko",
  "key35": "4cufL8JnEXKUo6PYMwpXowe9rcxKZ1P1ZB6HuUkJGiuod6AWVtvMB7unyr2ojMGLrkKR6ydWwNoiHgYt12VyGw2V",
  "key36": "2PbMCvdDLWNXGUP4dQPyRPE2h5PV8ooqZGgGVVWPUEsCxbvsF3MCTfLYsQZqstZwDRMysJ2fZo6QJFWCmd9Qqx6P",
  "key37": "2Cjv6gGMBGrwPx59rYXYm8eeBXvwnaCf2JE2DjHhmSg6sVMy2R9e2PNi4umAu2Km79QU781TvrweqPuu8DQ1RoBR",
  "key38": "56Q7owjBAUeYTmXKPaTvifd9QGyAgC1NtgUrcDhxpUJXrawHUzDMuVNddh3QGwiNqULiBPkGuVz8xGJNg6t85hbK",
  "key39": "41yXbMSXgeP8dn3AZpiYch2CTK8duDYgzaPm8V9M8N2DWSjrC4xt4M6CDZrmYqHNkPSujMur4mNwP7XM8sns1zPQ",
  "key40": "2mG7WdiV5Dg18EPafaZhqYfx3TKBurr7nJQCwwPZGEJQdyeZ3As7CGXWXkUHpVX9x1fdyhzCY3UXZFMYxRc1YHMA",
  "key41": "3zSEs2wfL5susdmjgXXUSUL53iRzVjQ7Pc1hUznyMDMCDcdnwh4iS6VdrvYcEt9FqkWxfhY2f4HR74SNtPoTFKUM",
  "key42": "5gsQdAhrP16XnTEitdGT8GNg2x6f5ouZMZdyZPjEqki7oBv1zVeXxmhgoGScX9t4DhthaFKhQ4ctwsxuTWSzj3VH"
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
