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
    "8TH9u2FZz8RehrqcUgFyJJtUtcWTpbEFN1KgeMuhwSGwWWNXRws2yKzwmJTw4vr7Uf9GrYNxwFcBmfqgo4kGuop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pCvNzzPrXA9kBA7BD6a3sB8GsB5t98dEBvUd97doUkAGXJ7W7VkFMuFTiRuzjpDAQdeiJwjTnrq624jZBeNhAUv",
  "key1": "2C2YrmRJszEySCGfin2psQegNhfaJKSF7kziMEU1oTD1sJX8TbabaRua6UqQjzzb8EqinJmmpm3bXRSZTSer1Bsc",
  "key2": "4uvVHkb4EzDY1h8SBaQKozUQhZrnr9yekqKXGcAYnKt1w3Yj7bWRyWP1iP2oMSi5mDwxNJnLMvRwKeXNEDPdKkH5",
  "key3": "2hsRcwCzQoT7G8aEdfDrjTL79vtZfYskJ77obHSU1zqBLC8DNrNku3paTPpUp731UCgMZ65ZDmx3QU2u654KaFZt",
  "key4": "3bSDcmUxJ5kWVZazdpBLjCY7T9mwPbg77Enig3yBqavaTQUj9U2neQZpK37p4wThFCUK2VhfBag4HttfoRdx6Kso",
  "key5": "2te6txh3CX627GqWq6azoLEXKGu9RNUPeqLJYhVYQ66J796jj4Sxr96k1oq2hNMJd3t5FpvJmUs7XfkcnqD2gMNs",
  "key6": "5LSBw9mFcauHntWbYgMZSeh3msoknUFSQqqETArKGaBjmMLGWwSBm5uk9MQhygLVHdg2DigZWUzdriU6EudEARj",
  "key7": "cBTZKUzoSz6kYaciTUxC3L2zdzLA6gvEXpvSGsuPdi8bTQfYXAuyLwftidGGCMyKej1YZALd9gELYsMSQG8pqHC",
  "key8": "YusgyX5AdGTyv1p137QcCxKgiFrUkJh5ZiKKEtprpqeq2f2VSXzLMA6pHydFTReJZCqHffbHqChYpfRhyNdt8LW",
  "key9": "yLRAi4B4dxYgRndDD6KRjixPngmn1u4fMsxqa3bizbTevvjQQZ8pkHkZ2qznAFKXSiigdBkCPNeRikKPatiN8xS",
  "key10": "xoxpcGnLxSppSRfCBgdn7tA6NNLuQHNNvhy7MsFnUjgefThx39PcePoEZ6uDL7uizVu7XBsGRZGmDa3euEbLU6f",
  "key11": "2T13ez2CSoKfz1uA1ai6ALX9pRg5KnY5974Wn79h8BfLhDVyTt9bRnuzrMQ9Zm62bvGMNcmkMidKLo1yiX8FyHzS",
  "key12": "3rwZ9KAX9Q7VZPx9jdiASyZ7DsWTNGa6AzRV3Z35xYFXu4scE16fwyzr2qBSqKHG5qx9cD3erqjebqv4ZUCKHSvd",
  "key13": "3ybC9bUCPhbNzmxiqhuKgYfRv8gt3FCWXnq3sq4ZKzACZbs6QZmZ7R9mdCgyG9Ahrs2ZFwsWw7cazVmKmyvo5KzF",
  "key14": "3mRN68vNud49qygibs5JZGezHr9ZepcQT32sxMWALMQL1Pg93YKdpjJAuuaewbsFEoKyZVc45TSQUK4xtexeATLj",
  "key15": "2PmbLin7kAR1LoFhJgcDjPe8R8LCpE5GtrBGjfF2CGah2Wmr3zjL62uzwKiiVTDJhW4C2WayFUxAsj8ncP74tj3n",
  "key16": "4rJRJXFcgfzCcRueDQREHwgccR2Dq9vVDzkjLj8RvcC692ZpPzdgS8yiJ8n4qodjsNizvCdhjjDPJPTByLUcSyiR",
  "key17": "4iA6taoVQHRPsux5uN6PHaE3ECS3QcpiN5bVn4fuVA4wCZthYSCxt7TYSt2j2gFpuxqK1z8nKCMVHjqoHgKD2mc",
  "key18": "32yX8DLzbudr4SnLVze3hnq4Z8fZQ2oiVGVebUpsX9ZZCRwFsXiurMcw36mbwYwz9cjC2FVezB7WgH3Vw1gat9Ma",
  "key19": "335wkGoeAPaq4BVvVUDh46twKJVggCR7JFhsiMuEMBAfpb84AwwzuCJ97o3ijxU94SMrRwH3TrLW2cG7nVG3PC4c",
  "key20": "7oWe4SzSSvnMfxpKw2Ysjy5ByU7daAUo4MjSytUKfcZtR2hPAFAWY6QQb8VzKdimKGrR4uBjGd9F7SG4mFdhZHA",
  "key21": "4cDbVdnXZNtRMoXcjrgCE2hY1U6J9ccJMVgHrMn7u9jeinickTM2b5FwNieRzQcXa5C1USZRNsPxt54i3fK7twQP",
  "key22": "3RVesc7TvQL8FoWuhPWuQZsmM54b2okGsLq8NcjHB3whMyAekbgKYEvEjxXjGBxPhFkvSrcwbif1FbyjABHmHJG4",
  "key23": "26LsbyjPTpJ4PqzuqqXLLLJFnfCRU5Fx1RU4yw49CiwryM3nLUVXSU7bWtm6UbuXhjnAnsXW1H63U3JQ8WkwbdFR",
  "key24": "3R33LMWHtkWxae5jfhU5FnJAoda2tmBDfX7E5Su6G5HoYcfir16BqsXf1x1hBSr8WvDd1W1dCNgS2HhcfPUTwKNK",
  "key25": "65qH9cVt5QTT2qxWVdXXqpv2g6jeHvKMbZSPVdoVJLd1v73dreGUKu2pujNPY1F2gryQejHvNNUBYu4bVNSFkPkL",
  "key26": "4xV1BCiZnA2RKw3crZd1YgQSbqf3CNpz6cffnBVaHBKGJ5UFat7RshVepEXkzfkze8UzHeWP2xpGdagMsR8C1K4j",
  "key27": "PmW8iqjT53Pign7gFiBUA1unYxBuzyWT6k4wa9BntzuxNEnCcSyTEP4PFMP2vJZJN5vtTAP53rNJjouyj3tpBf5",
  "key28": "Uqsye2TsefyXs4ceq2jtoEHqUakiTUey3GFbedT5GQ6RSphA219qUzEkacqGsymNj4FLbN1P6FAMsZrbNA9wu3V",
  "key29": "4Htoz7UYPEcHEqfb3jXLGSQ35VLzpXXE4mKd4RhfGNJKJdjQBohanmuJhiFPVMxaQ5NGFDQXjjGaRsKu9GC2ZUk7",
  "key30": "4DqneXr6vMmnThjSqigaTj2SxvVPg1pYZrwMgtJ8UCa66cm1rq9rQwurf1jRwtXsDQKToYVL3u2piSuvQJnoFqE7",
  "key31": "3CGF2CbGY354xdJoAuixXn1A2npBuYT9vqkgXrFJXpF8M37raeZPC46jxaAHHn8FwHApPtvYK4yYPbzsJQuwAG4m",
  "key32": "2AXGKbtVGg3e7Yfx1zuUnmq8UXLnJEieS4tBXWD6AxsxxtWrvndF9YYGd96SytYbpbDsav8jgFoavQ9hVnCMquT2",
  "key33": "2a1WAhvTzm1jkM3R6GcUiYBbLf85WzJTaEomPg2SGzQjx3m6thtFeC3TygHf8jEdhihc3yZhj6chf3GCMLyMADd9",
  "key34": "4TSkrREyDVQjVAZjytNGMaBAYce9S8juPmYqgjVF3sYesWe3s7eMFAYeAoCXtKhtgPQ1AvqF5EB3niF9Qc1T1zVP",
  "key35": "yhXiyNVUvoNan4PkqC7UP26JRYLJX6DDoxXSnpJHx3hukzypiAYEuEMYntk814o655pD2QPUHEP8KwfPRjvf1aj",
  "key36": "N7DgWYqJe7jCc5uUGHg1J7ryDUm8gXbjRSCshDABRxqoq8JS3HigtnYG6u6RtunANFZHgmH7WyxoeHHbnTGrRZA",
  "key37": "3EQMHrDgpRF2Bp6a5sh8dgbGeqUmnouEZy6cJC7KtWSTGRniGjJf5WEP5765ev9TZaHJMemAfSZfEViXDCaVDHYP",
  "key38": "49ohJ8fu6u7y38UBWZbzggA4MWEPBcUrFrMgGARgsAsX8UJPATafDFptYHJWLgNtX2w92F4dGdvfqLLsTefzN3Ho",
  "key39": "23kF6XXsb48PwLBiE9tN3tU9zSgK4drFWTMNq7ACBbY5nbMscL2Nn4AfL3M7kYqVi2gpxy1cidTaGy6hqJcZ3ZKr",
  "key40": "2rU3m9AFo5Z6p2vGpRy74KuPJPvdskoYfccgo6fm1wX2LksYbfmEFyQb6GG3tmoiqP8sQ7iYx5FWrtZ43Jd1gNkm",
  "key41": "55BRAYqZ6ByAMk93RtozKwajSukw6rWSdiqSrYh8ytC9obm2mXEGFsNF1hZFVnADY9R4WY57Dd6aG4pPc74bcrav",
  "key42": "4yBy6btCkqm5T6Rbzy2MXBLjvzFfP5LwPiQAebbemH5JHAmtnKYK4mWnEhVVQEsb1o1axVh4tabBMnDumyM3U1y4",
  "key43": "4mkm1DC75oh8r1QnfWPogGgvVgvQ5R5BhodAyXSDoSVCETAH1GAb5kmMKTuTaLoSKUJAgwbtix8bczRBx3PvNxFW",
  "key44": "5q9UxHsrAbWSSUKL1GD4ndxg2mPicjLoyP6b4WtxNcGJaKCCTnHMCsyZjozSdMyAXCna98vpg6exMTSHwtsPBm6s",
  "key45": "4YRmeHj1qptYaeeepwrFkYZvoGqPAZh3dqw2X5aapeDSS5koXfw2ojvHYnJAKs3UdAhxt5sWKLQZG8Zb87Qn9cPn",
  "key46": "2F3xYLbpPqmXALXzQmrEHh7j7Q2ShcvQ7agEuhUWtJRgqgRDr78hxyvZ1WkgyxA2k6eZTSkFRZjmQD478db1Kgd5",
  "key47": "syeiCQqjgPYZ3oiwN2Y8Nrm9h3ozQzGN6urACvtYSfiBmaS5AH1oepTogHwjCwSCAcB9FA7rHGQ5FKpwd5GsWxn"
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
