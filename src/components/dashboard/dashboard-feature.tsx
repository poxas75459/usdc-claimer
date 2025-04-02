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
    "XZBCuapL4L79ximp1WgpNpGJJFEfYKYCWkj2ygXoEuChTYeMG2JLdziHs5kQFfrKSmB92ZchcFaiKy26WyQmzkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HTiREy24HuJrt9qwAoguMoxFyC4mknnqBejVUYwx3nKf419nwgoP8f86PkcJraVwri7FKJCUdVhw2Repw6m95a",
  "key1": "5XFKS1GrskbAXQuykyEFQMUuV8pwxyUQs7gXbKbA476R78taQL1p54v3CxGneKkhi6E154t7AfN4gRMtd2pTvAkm",
  "key2": "iEPESVT6R7oaQF8CgL1Gy9rnvmL8iymLrV8qNUXaXRRz8HTZP2eVjxmEzfvwJbXVztSMZXuMQ54z7jT7DB6cEqT",
  "key3": "3uNChorJ4Nac8za4xswUNgXVnArycnmqxywnmtaiDGujdiJXCe8xFHmB232mjsv5u4yXunWQ395Yk1vyza45CEgb",
  "key4": "3dSigTfuup3HumtG3uuXvtpc1bynRz7yYZ4TtCeUoNebFHXFgjeRgYgZW8zKH68C222eTjB8GSY5YHhyvjD63Jb7",
  "key5": "rdFBwwRaaVxdMRUi5qpfbDbEQgnkPo6no8ReMkNYonuKXXsYZTWPpsVRGceJeVRbyKtSFjwek2vWj8GVMXjnHv2",
  "key6": "2q5TBbzcr6k5kDJ6fh1NZ3pii9sMKVUnaa52BiVChk4h9oSRzMVnxWb6QBybz1Wus3vsS1Scs4QW5GCsYCcABXov",
  "key7": "41pM1SH15o19uQYXhgWmRj27SNigFVvyoPK84vFcbVFpw2ZDhztQDJyQ3wnbxkjjXFZZJVJVL9h15KposCCXMG8H",
  "key8": "5h7PbVSYs38HYw5UuUWT1tLQBjwJMXwkDVGm8jX5aukR8Rzicv5NYaPnPCV76JCyTbTTEHtNBLze4T8vM227muRR",
  "key9": "5VjpWpTQbuqRXH6VzFDSg8V3GBGBzQdNvnnwBQ7z1LTy4agT3Noqe3QEg6sJeDCiGyWsLkwNtEPM91E5DkSv7Axs",
  "key10": "4F6uFjUQUbeKQ8cgvpnJqQfcEYhN4Xev64Vh2mFUATH6L6adN68VFWvhwrLR1XSTrGGPHaJaTMjBghtqXEWNBeDj",
  "key11": "35zbxMxUnfhtKKe5KK2Yc6AUaGy3mG2Ps5k46iyYXC9UF29scHn2fjNTb3psmyMupBWWa9J7dhpfVk8Gi4rpME82",
  "key12": "5hcoHBFzoenVUqNEXeSwEp9eNx3ToqM4nxHfty5d8EuTAUDdUHbbwxAxMGfTzck6WFduAkuzqLMQ8ccsTizk5g5S",
  "key13": "4KMdmGbsz8RkwByCVoRYURC1nFvWqx66nk8xwNLof6HdfGfvdrUZNDdrMjyJ168arR5MXv9bM4LKPQuNjavdcd1q",
  "key14": "33Q5tFksDTsm7ZzQW9J3vCHv5xDsJD61dAcrrxnyup4Q7BqNYiqKs8M9rS1oRpfyKe7Y41Pmf9ScW37XoDV3JhVy",
  "key15": "4z8jvr5umLRgWaCRcfbkiYQBDzHtnU63fLzKxpyBh2M3MAGDeyJhq6J2EgDqJhJf3gka2hsxv5a7DHn6exjk9vd2",
  "key16": "27poLoby3jvUG66W1nXwTpenvaLzKaSTnB3xN3HXMJAxgd3Rh1JhXuMnVtKEAbHp6K1iewvgCnTizP15zi6Hq69b",
  "key17": "np8tZbhxZhrjbrJsQnCAK57FykmfCo3vTbEmXfUrqHssHtcfpaeHctP9JdCkYEM5uD8EWUgieq8ZUPzibph15ni",
  "key18": "3pj1DPFKSVxcPYcHDt11vnejhm97Rvv6C3ZFPh7n3onNCMVibGJPS8JKeKLEvVjb52g8VMbXcPUGRFiaCcunB5fT",
  "key19": "2SxU7Xpdn5pQHrF9wDdFEsoYhsAspHrTK919LyLQJfRS7fYZJssd1HuLLnpWx3Zo4Qfgxqjmp9Fq53Gf7xCDBZi9",
  "key20": "5nfWFYehYm1eBELHLFG6Y6Zgc7q2WZP3buBYCDjPWk9PfAnyQqGCU1PWR5jKxSfASwwx7XVBb1SjNuz4zcvgYbBM",
  "key21": "4H69nvt8stGwhbwhsoZ7tbuu9SHp9wg5v5v6JCPpw3fDFBhQtVBWSL5iacXpCcV66QFFXWUMz7qqG1N7JVsPj6FZ",
  "key22": "4KA38fvNrJnaACkWNkGt9bFnRqDvHxrks6cS2UU5C7uu4Hq3s72VPTPdc1fQ57vfXNbXPbaVWdboZvAtQ7gXQZGD",
  "key23": "2EpSBxpGsnwv1H8kS6Th5Pcw1yR6mqoSCfJpVWcAHfVarmenv9zv2ipFy7bdMaKjTAoi2z2xi64Ee6zPcrY29Y5P",
  "key24": "5BYw6MpPdNKsm2HDsQuxAZDCj8Rga8Szsagz5nx4BdcmApBxRvtERhWjaZkNu6TfFEy5iMoo1J5F4ULCe3uCb1qL",
  "key25": "R6Xx68ydWKdns28Wqb5x9LUKfr7f9ay3JSLT2WmKGwPgbJhDTpPbRUk5N7nfmTEYaEVaEVFTXaFRczxv4m5HZ7b",
  "key26": "xVNDZtq88WBKvYctBwY1yAtjeYpN8uPVaHW3bwBa43vRmoy7CW9B5748AJFPPUrTob6yyVCWV1BevWCYstqGcnk",
  "key27": "5tymFbZ32B84yVGyLaq5rBtjSf5MMP5jKEY4b4bUNNyMW1ahTH7yXnsZ67cwYStkjBzXhnTRW3BhVvqCww8ezXFH",
  "key28": "2hNESZfbsiZSdqQ4ewB9aV6d9GcNpH3ePkNAfs3Yt6zVCgWfvEUuhpgFqqocx957HWaQWErS2pDGfWVFbn5vwXEo",
  "key29": "3kKADDNwKW4sZJYTHqbVh5u6djRN9Na5g7QTcSVawpTS97TztZeeM5E7ijT1BM1kJrgusXEt9PG3XvZgUjJAfTbs",
  "key30": "XB6FaNMGtiSQSgdC66zeQ4Kam36Sm4P3Goup8K27eCB5iFhsVRH8XYLzP5MrVQSdVc3z9j99xYNxfy1Esqv2gdW",
  "key31": "5wbufe7odriYZXnUh4EijdtHboBv36wdPxA19ePBRupwhevi3iHHf9wg9fkyXrSjFpWpgdeq1scQXRs4oN6Hf76j",
  "key32": "64CQVcdJR1gaagswiGtWbHNtiXzSPp5AJA3gS31AmLe2DJuHQG8hLxh1wJs6UQdGq5qxHJQnEmjfuor1g2SqMdit",
  "key33": "5D9ZeZA5Zoph22FYpabtXZt6vn3dmDcApgszFW7Y4Pzrh3QtMJw8DWx2RnNAKKEF9sXxct5sBM7pZNvBatqCDwXk",
  "key34": "2Tc7TrFMNYasbTvQ7XdNX5HiwkiGVQSk2yQH51uyP88pqpDucQ52vMg1Au8EZZGNAGRAWFAT7A58jyLK5BLRw6qo",
  "key35": "5PbKvEUq7QpqGv5rfQsuqXFHb7eFUoR7gjhGS6eLqs6Pjb92p3uBy7umUmtVxbtHB1fEvqipqiMHkoj18cHbLi3L",
  "key36": "33XQdRvKm1JbfzJ2GcHJbSeX1gFGne2Y7Frn7EfCDVPHJmUzGMKu4mKknPQRfmEp7TfVGddYG7BfKyE1WDWAiTbV",
  "key37": "4vqGvjX4QR3qA2zVa8C5cAtrWtHmHiZRkVpDFU41NdU4JroMqPWqPLporVgvA76SdSLd7PGMjgoNYQqExoy3e2LY",
  "key38": "vHiXi3T4rDuuEKfXqGPgR9bWbEUFyTpqVkwnXqfQyEGfrrHr44aT5HbUzqwUF4e4axsA2so6cpCCe6P21W76mdr",
  "key39": "43ME7zxG6EkDyB4ZrtHvVaAeLttqtNyrDr9biVzG7PKpruH1xwNJXSXJyiJCrjXCfzymtLmLrBHHjmhXwEBd5zES",
  "key40": "5FA7JsD5Cn8esGehBFduQ2a8ACGGR2UBqnDwwCf1yvoxShkqLcigkzTNc8WhpCVLug1oveKmeqsyoCJsmiFUqyjR"
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
