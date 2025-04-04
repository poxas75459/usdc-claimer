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
    "3TPHy5ZfsTDsnaiuSnNJxdxxKV9ptWwXUyW7KLeK9oubN5pPRP1hKYGaWrwMad7j38Cx6ttYotfmXQFnPyVqNR8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kyQEy2wsXrWuqq3RDr9vQ8xC8Vun4W539XnuwMrzjm4473kFXg6CXRfQpJpmN96YbBXhjqiXtSBm9UbCKz2EVmc",
  "key1": "JpwTGZgKiPYscdo7fuunWrnzSevWyMYHAuMFZooZoRenkiLLVty7ghuuR7q9eYPsXvBE3n7kLV9zwAuC4hKPiTo",
  "key2": "4JnKg5gGrYb3xoPojTXPEJeeZSWRoYB9DoxTGp4KxRZe5mp7dRM9yZTm7PLe199DLCoW79iNvqvwevj9WAX3bXD",
  "key3": "24ibVy1GdY9bMQoRSypcNrkFo6Qt3v61pvkvLeY9jBsAKPZpmo2tkQ4okXCrLM2DdUxU3wYV5QEUAkCzESBhqwwZ",
  "key4": "4Fhr1aGVo138ebRL3sj3pHhDcJxHKdo5KiRVGWccbUB7sNx9V4N5MF5CdG84QxN2FU7zeE1ndK9fhtcC2o2U1Tr4",
  "key5": "346b7px1rNzSoiZnWEQFNnhGCZUP1FnNWc1DPFHUkpgnJs8ScrDUz1hGK6yhnK8Cys66u6qqHBDLcVE9jPrsJHxg",
  "key6": "45dksPABBCrXhte2gPvEpSvbjcA4b7YhWdCoFs5gWPRG7axt1Eryho43UrEM88KhCsHfYuYWy4o7R7J9ikstTFGx",
  "key7": "VbEfQUYHK4f7CPh2XFDCjftoiW84BPmBqKf1YgtZpxCpFosGEZ9sTQXM2ofgWenqPjgtWyYd3XjvwP9GQQMepf6",
  "key8": "euD5WCbypHrrqEzHggHJUhc18MqNvbcWrAhkheHSabcX1ikXAXdL1JdfqWrufFdNpd5JyFnn5wAeyRxhdEXcbGp",
  "key9": "YewuQ2pV5nWDUaXjYzEcPvmJftpsudcfnMgT88dp8t5cc8dbh441P1g8rfU4fcRdDzjteL4APqJaNduvjcP9Bcm",
  "key10": "33Ar9SqEqsSxMBTtAiNPWqi3QtEDQULFphYNGwUKkaD4gwGfhb4paAV17X91QCFFhFVRHJ2Nj6A64iym66Gy4gbn",
  "key11": "5jPkeNoY1TqHNbpENpBYWMWg71vpUh98LYHKNUX7S8Ekydq5Wonn5BiBxg86UVUnKa9R4YwNG15omA4zFiKnV7GR",
  "key12": "2oXgNpmLKfqbHWSHqu6LuGmtAgmAi8AYAzyakzobGcAbAW75BAzCTdBVtqqFXqTdBEjH9b5kuTtsR1stiNwWU2eY",
  "key13": "51bi35aiJ2bYSdxaZ2hdAxYsD2mN4zVVmqtDJ5NAjikMnNFAcXDQWGAvbeGHQqsUP4H8U7G4KJN4aH1JEshCCdqa",
  "key14": "2yk9X1KPRS5j2U76FJvhyn7nX3N5Aw6Z9AUBmwzbETiQ7pgBWAvc3LQTgwK8pQBjEPSphwYvXH34eFV7wFQPaszt",
  "key15": "4xxVbfToJejxzqqHqefGaYDAY3kdNN6jtfQ9kuBgtdd9KFmnXTaGKK783gsUjPtAfTvYP9PNZ7Vh5Xx9QzaSN38m",
  "key16": "5ZTaEYCtMSfiJYtpTaaR8B2CBHZ8GN7F6Tk755jnQgnPdTPWgkHFNiYbAJtqn64kbZm8dx16Eyjta3MGXT3BTtvg",
  "key17": "2mQshz7NhbdtwtZkzxtYz6NCkcSB8vSvZNUDRvgU2Zh4hTPGcBZWg54xmz4ShQR6gn4XeikC9TKt5NZ8obpSsrux",
  "key18": "56ctGMJRXNUEqnBZAL9ULBaEa6h5XZt9oJu3BqDbMeuTTBL9KtCRQY3Ne9ZMGKkW1jhpSwrk91ox9d1mWjcAL1rU",
  "key19": "443VWhVNmo2VKBbfmyEA1pNLrkNBPX4RWwiwXmwTLuM7aoA2Dw8gEGpgD7Z8nMbk6EViN659VNrJYcXhNdjSs5uS",
  "key20": "576Etz9f7VSbe8kDQwNzEfDTqeW9Tk75ysLoKqQPnRiyGR4oSdTdc1q4KPgF43HiM9gY42hVfTNE5FMQkLDef8Eg",
  "key21": "44qTcUjPTXTytNXKBUpLp4jJ2DE2wuFPsHZYtF7jmbZziWpWvYoL6f3BLuBoL6WhUtnL6B2U6AVeCGJjBQ245R6f",
  "key22": "hpjFZQKWbHDhXX4S84fwAbXnU6q8oDH3QNd1wZv9crGtuogpdZdj4RhKrN1r9eNYz1toSuuL5b2AnwC2H35N1HV",
  "key23": "cnrFpj9qk43Mho9yqPohYcjxrX3MkK4sJsX56saeQb3wRgNirTKcsKExcXntQ2dmLrVEzSVh1g7B9Y5NDUyhuLQ",
  "key24": "61pA1dFoNsmqmKmLpR9Kpo5antyA4hKqBT8VwRzhgp65DZYQnDv9Yoq6GsP6iCn1tpPsve2f59Cy6167Ty1eVQiq",
  "key25": "5uJ6s3C5aSHwZYwtgrZpG5W8vktrFM4S7zB5JMY5B2y9w4w91iQkG3qVRu9ooihvq1FLqQsXBMPzhEQc7zaSKg9g",
  "key26": "weXQeX6TiRVGjMwVYbzPoU5RPdpQYaLaZv4aw2R4q5evDKCTWhg8XKxd6T4WZDBpyBfExRPPGf3XeEnmGizowNz",
  "key27": "2gT6MJgFE3Y8VGHv3ftboqd229i7VTrEK6hVR8kmqTt55tP2bZLZXM6hCy7w1sy1GMuh4hcRFXLMLGTRMBsBAZ2C",
  "key28": "4hLSbdrcWYXq7QRnvkKa6edHSfL1TSv5Nc3weY6ZE7XShjwAqBrPCyih7dC5pBv3F8uY2JWQiskiaS6iMvdQGjcy",
  "key29": "2SmZWyuBTPQEb1ffwu7st11M3U2t5cdwNhBpZDQfy2kjj8domrHimu2Z3HbHpx9ekxYfWiJ9MKB2msyd2K5xDfZY",
  "key30": "5jHxfs6g97QJJb5tU3hXenfwaU71ayTJd6YFHFb45dEgzpSWHd8Lwh7fduDaQcBUqhtKLjbR97MiZJgXTGYJsTwk",
  "key31": "4FhRZvq5z98XBW5NUDAjsjHpsSihkJJZ6JJFqKCBBAhY1X4kG5Sc1Pb3iMfbLJiaH1k2ATParTeFFc1GuWfyicSd",
  "key32": "4cDfLSrAGycRXZm6cW9LatGG1YtLeWtidmrzmjzUzfEtNnjJRWkimWJEozwTPV2tDyzBRoDmCirbaFMQLuCu654D",
  "key33": "4FrBv332Q3JqXqXz8kSsRBAmbQnZZ6N4r7Uo7Jzs47ZTTw2sArXAcHowLYQZxbzVvwMBRW5NMHa5TjYgRkT4hpnW",
  "key34": "5wp1qhBp3iHZ6U5JhNMjZkdPKBtA2yxwmAYqaRFZLwjdMc7rXmAHqtvt1Kyobimm8QptSc2S4f36EjpMrTudRssq",
  "key35": "4CtH9JcK83GttbFB9Jo5W4uhjYohrpHLHS6gh5dfUdt4PWRj9m8sgbyjDACjypCPDksFhXfwBZHv2dvsDr6DqjZi",
  "key36": "3e1PjQb8f4HBLyknJ6uZsyLUdFEaSGsAdFaGLVH5cjAUBwppPUugGRkN9VWgBQVKBweq61ZvS8mpevkvp7X9XFbB",
  "key37": "4he3FTbWRhqxhoQXDwEERUxZiaJxBUGeySKLYgVyVdy4ze9v5Z1zgxQao6odfTSqapxkGwGgfCVkciCi6KKcW63s",
  "key38": "5RywavhdpTo6WTTYiWbPwQtRcemYNe4xUwyJQ7cLbnkDoE6LKREX2HETekMdWeyc5uNvSkctBkbfw4AqnJqGrkr6",
  "key39": "2PTRpesqY5rec6A9NxMCeZfvDbaC9vzH4Up1WQ8tdLtcCteVoHLd8p52ZDuPJjZMKUyBpgFVAPDAZ6dKp8AjXfrF",
  "key40": "eLthnX6xEJfdY9YRgPzEYGSEuhy9j3y3qDrCVb3CbUopNwAmCoBLMLXzBgqThU5unYLdSrt1nwrvsdooUcUsUUH",
  "key41": "34peQK2fa5ZYJLgtLf4Grb96bH4EZ4Jeeq39JHtiRmHkNt2dXqVTdRFoU671xJTQcUFCjGNDYBfCcDiAfXPqkMML",
  "key42": "p3b4JRbHUmhgTPydkmh6Bz3jLoy7SGHZKGVKKVqaUNLdg4iDmzCNzxyfmhM1Btc5YWGUCtv5DLyWgs1ZHuqKDxp",
  "key43": "33U1XNVJymk1cT6wB5SnN64mq6SwsXu7J3ndrFdf1FtSxKjXnkyKYovKZnDRZ78yNcYEhYr86Nkw7DjuX3y8KMwR",
  "key44": "62U82CfKmLtMTC5XcbrDHuFJSPesmZy2gkT7GHyeQ3qZavWiM28CdmLnbTemVH6TAXrbzHU8NdA6hckwAmaKF5Gi",
  "key45": "4BecW9W2ssWYyt5jei7LGk9BLLzx59yzmD3Kqv8c4S9RKANV6M6RPKt1hcSgG8u8aMHW3N7mU1nWf1w4T6tcbNSz",
  "key46": "7E6NATKXGA7xSueQJtJhA1Mi2jzddo2q8CRpGaq6Tp9vAYpSr2QEr5BuXWNSTkQFJXYWTjP4F2EVVXtWt1Xndv3"
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
