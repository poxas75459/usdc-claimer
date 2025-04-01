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
    "XHRzazJWkosmRdrtZPqSUDFBvXZcN4wXG1zCKRFPJxuqMJmnqXQokhp8xnboxjczK8S8s4tzSYHTWpY15jyEM45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qvADmnRPEaCoqPReiRf6MXJXr8LGGstMrSSWwXB3Dqgx13dadk3nAM3tizyUQaFfwUQYQaZAtaJvbZgBnxWFy7C",
  "key1": "4JgUVBWvQJSMxNqz3DGoHJ4GByzJGorWwEotWm7YUY1djEH6tsHcS19kit3JbnpGRh2L9ZybN3aqcqdRJZ3NAAmH",
  "key2": "3BXUX33MiX6KhnJp8GDDbXcfqGTZiDyb214vRoe1EQNMN5UHw49ypi6mYoQqprvvvRR77joEFkLgRCNhCbScpqa9",
  "key3": "3eYzCAJpqY6TyS3UTHR8QeZStqyjx868hiPVnx7yifER24u2BbYMX7scKpmLd68bXxmKcbXa4rmumN8EfDVitE36",
  "key4": "5da7PstAax4bS5EKSTypm4n1GUC3kE11d8GL1tDfPtE2d5KbTP1D1N9qnMA3ie1J5ABriYmreypyhMehs6UUbJGz",
  "key5": "4Z98okbWJWRh2ZRQ6CE7YYonaNpQhVgsU3JKuEUV3jAnnUrxBE7vjbBaJrKz65jQiRzkR61do1dQxtoFoRmKGV8n",
  "key6": "3s4TaV2qWyB6QND3HWmoUs53nRzgFb7MLbjtd6UXcSoH2ADeEWUXJY2stDULkDhbJV6QWcKwUEkwKeobczkuQ9Yh",
  "key7": "ihVbNvtvmKPh2eF5Tu1UrQAwzAMdsGvuMhMFLtu5zysSBAwmpTJy2B5mDZpd8pkVFRKZCr7Lr2VdxpabbSqhK9n",
  "key8": "r34afGWagwBWqGoMiv4dW8b4pgNcbPKuGDW33yiEdpk8NkM5N6iHMhHBLXmLpyw7RtPrXde3o7LDJ2kHmHjfaGk",
  "key9": "2y74UBrv6q52cwHdGRi3i6JMsHXVN3ZHkiRZhSCHRCsGaB1hmuSMNHFhjvmJTV5rcZZYB2L7c9camVJRLa7ekUe8",
  "key10": "5iyZXCajjAx1rwRt3H7Vqr2nxdPWCPnUGYSS5BdVvXDdjz6wKqK6exT3VgF92fLZJTqhvnqHXVjR8S54uyxXLC8u",
  "key11": "4jBNJsqngq7a9ZhbeQpaqeuCybTuPzoXUfSrENNJifYMxRAByDWVinARjFpmdTGvYmUM7X1WXswmhrdtYckyWX5c",
  "key12": "2dgorNF2rFTWsj6NaKsoiGamsBodbhThds2zhsjBkBRJZFWV439QBpKdXdz1EkxPCNCPL2UdH2anTGxtLTuAdxfm",
  "key13": "5Er3DGwP9aTHyiQbPjxxqaquiXGKeczE5TEJJfgwebP4JQyGwNN1RLjuze6AB2iQ7JHsW1UkF6FDvZzav7ZygrnW",
  "key14": "5Z375d6oSnFFEUTFRBw9WmPHsBya3kdJ3Pah3djgexRmKgsdGMNV8XLquV3BLskWKwaGygC6GoGzjwxdkhqaJYNt",
  "key15": "3f63S5x4Fcfk61ZaypV1DTebhPBS9CKNJEXejNtvLT9meQKNVmpckzWa7grda6XCC9ApxRrVXzZQMt1zMbqX46zA",
  "key16": "46CyK3aA14xKbfe9oHhJE4uASeGnDGYr9wK9979d56whU9wYDrT7uMBS7nZ2ABPRKaJ8aYPaaCybtgrvBpQgazbU",
  "key17": "4qaavCgDdD69cnMjbMzRwL6p4H7bbqpGU1TinYDB6PDR2SFwMSix2odF26P7bXeQ9UXp2cPaLztz4ppsTYiEVyjy",
  "key18": "3VVCCc8CYh1HQA9T4JFiaHTHSgzTvRF2yFVUiT5HYyMsmZsDY2Ju2dBdxCDGujGUda7HFLzkkVcbhBDSjAWkXM3S",
  "key19": "34mZthKCXsrvXvaP35E5gdiK5nzkNDPhb387pmzUx5DtEw7n9hwZdWrcWq9JGAD4zieqL7X18LekbkCPA3J5ZpFi",
  "key20": "67HcuYx4uj5Qtqmg5GMWgrCe2bWFcLtKMhy9MhRYjp8n5BkUkSKr83BQK2dmgXjbgBkB6XJ6BesttTTkBQzL5zTk",
  "key21": "5b5RUTzxHUea6UzuDEA6h8u7ivW8fHs4K6D6U9fdsf4KRRrYvrbWFusyonaBbpK2cMrq3iPn1xbmCZWej1h3GWFf",
  "key22": "5KMSdnU4zonQwdPagCvF7mJWDX64AQbwiEQfQUHDRtFcVv4CFd8i8cWPKVdzeYbXNULfEswcVgn7jCcAyLpifQVo",
  "key23": "5dsKgpHr8vBzrLmTBcQHSAMehn7u5qPpSpfKFL4FzEmm6dvZDvksoBSQDRWy1PkuUUrZCeD4Xqb82iw8CYZV98Zi",
  "key24": "oGqTSUkjrA8ko9H1eTwwWrhw3Y3KcYKDieLnfcFxfLCxRTz7VD3wiMPeuV1LiMEVkpu9nZpAFfG39RFme6YMdtw",
  "key25": "2NQTrPQC7aK3g9h2X6tzQU7RDLoQmqv5iK5MGwmsYAzKB3PDpbgEkw6K9Us2kZk1AgefM1osfjasdR4GbHzUGt92",
  "key26": "j7XwFwjsSvPydmsaqjZUywMaQSsFc2pRCAFvnfgtx3uPVxeWRYB78G9t8SHwZw4VfpF1nRgyN9pjmKNha2yquxG",
  "key27": "2zamjhgSFs1FF74Za1GihrPXAx3MVKqP9DAyWYDaJBoW2zJGRAXyFG3RWpjCiZ6TYmQ7MLFSGkKF7g2xhuZ3KGST",
  "key28": "4CGQCoTTr3ngbjm1UrkoobDZQLozJaYsVLb2LDawvw9nGrcoqVVZauvPTFzoe63e2TNbq6Be9a3fUH2vVXrNgf4y",
  "key29": "34wBK9XqzmN56RPkQ7xah7YyUizaiPFpjRGXf2XH2pGjZ5AciFWL4Ysp53Ptk6ppLzqsct1CUPsJHGbc9cUpUw34",
  "key30": "26VvWSB28SU1S3eCaRBBtMHyaoz7e6MKNMyYe1DN5rzHTwfkpcmQbvAesUBxuiNRxwpGwWA7pAUdNQxHqEwRFGVs",
  "key31": "5UGvaYueMFAFsMX7uAE8r5T6MwAncq6MmoN6Sm3oVVic6ZGJDPgEHyxz2j7id5VX6mKcYNmAE3eWvgrWfn2K8ovM",
  "key32": "4A1uSLca1zavFZvFe9EQh5JmBqht8Sk4MwZsPswpomQ9qxVvFQXSQxfHzCcKcQgqhKzGWHBVirEC6oudWt5RxSED",
  "key33": "5Q7RnrSdTUrszLJdosmnigypm1ica4qy8s63qkZToL38ZQSZuaKEYMq5Ta5HiBAtPtT3n7yv7E4Uqv4evmgfgcE8",
  "key34": "2NDTC1ZixrQVQB87oeQMJMXDWA68a7YdqyXmAof7xSm7hXLvaTt67cSChAW81btrphCdUJChfnQqgi1ndo2wAHSB",
  "key35": "21pjm2UknUy6ZJMzYZ7bh1L8aN7ro7j2Lq5eVMwaShycs2rSgZbZg75vkvZob9BVYd1oepzvBPCotfAKDXMR5THw",
  "key36": "4XpGw3tTFpL72HHqBPLNR1pMTEHMb951DD7H4tKfHFQUctQFVLpQQ4ydcRUnkMbRJL2trJX4sBgJTpJT4RK6FqLt"
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
