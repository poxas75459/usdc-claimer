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
    "4M9asRyNDva4nBDSoyCWZz99R7qgh5ax4kfSFUzt1rsouDvGvA6MLMvze6W4QuGU3ZServSJ1Y4VduVpk9ep8gNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E3NhZhtptE4CN7iZvSzVXPk3c41QK8Hto8hA8yEvZyjkNyt96oQuoAtWsDh6rRCLfnfBRYMbjC96GzdgF9SEdas",
  "key1": "4DCZMqJ3BaQNWSvNztrSCZLuMmHhmn4feuuP8uHqHXm5VoyhcyE5PmrRfCo3vHSQNkwipU9GjmRQPkX4xeKSLPXn",
  "key2": "4pbobsE4afNwR2vo3ipawJDABdsHe1RbrybRGtPADRKaTPWeAbSv6W2mBe53zbAmMqSRLpRwNbiSeZPV2HFWZoig",
  "key3": "3nwYqj1hDa8YeV78seQmYDdDTVmxnLxsMUVXRwQEAA1BxzKKnbQkj4bnwyoZ1ZvS9crqSjmgmt6R1zMTGXX4y1R9",
  "key4": "4mPcHj1mSPKChjUPjRxGJFKhMxJpHsVwB79P13UCAGkzhRUN1hGqf4zarPkk4mWEeMhaW1dgcjqQwZLnbroNcPT7",
  "key5": "3P8xRi3hvyNttZJc7eapdPb1udZDAsKW72WRUMbXxsmSRWsajWbtNZ9ytc7tgX4wmmbSZZRZFcoWjnWmmmVfQJUA",
  "key6": "4rabuq8GjpDWZcayjcpdbEscSGzg5y6mAAjxPRXeYg2MKWFsmU71fyrnP546ug7TMY3krXw3h93LmYDiWerQwakv",
  "key7": "vc7HR81eA77m4i4RRJDd79tCJsp3fQVWoKPgUk2Zouk6YM5wsdAiS9Dbwg56U3ZynbBSsZVmNfEBvySf7baeEEz",
  "key8": "4WaDGAz12N2Kcqq8ZFHWsQF3uh3ifYqjvaAEihDZkRBabeUp3SLqWmjE6K42h3VxhfDeC41SoTnrwjprK2Mmu5RD",
  "key9": "4TcwTPqPA6xqwWE5Nc3BDMbY7sdnyqYCrhtq9NgXQK32XYswuZzm3CyaVtmcv6PB25QC1GdQGnspStEmksuGoxjP",
  "key10": "42DoejHoHq63tHuXJ8PPuNZQTSAQyqzWHLwQEEdtKdMc1YoJJFeU1mtNKPKYcyCRfAXM7rNtggfBAwZfRXg56vWS",
  "key11": "5t6Z6JsJAzryKirYLgJU858z1ToHekLndpCq2n38rmLCSJM3f93kjPzEMttTm6wpnurcKUM1hVrdaoE8z2dY8UQ1",
  "key12": "2mxgZur8ntPzMTeT7kVPx4PWr1iPQTU9AML3dzVuGbmDfMGdzeTgZXkSv9ZU475e9hn1arJChYnSBY1H2uc5buX5",
  "key13": "3k1LA13ChmubnkjYEnnPKiNppk3Qs5bDNb4oGtYPGh5q725wodG5o2UjwU3zQQyhozR6BrqLHR7mtgHweHVXRJBj",
  "key14": "5UHLFvhDn8JPcbejwf8L82Z88Paqhh4KH8A4AUGZE96Zzqko6m23712rb6Pmre3PoBXrfwNSxUJPGukgSL6GvCsj",
  "key15": "4Z8jLkSrDPMRDpMWGBya3u3F7fvDmajq9KQYAE7dn5N1AK7mPnQy9QuyvxvJQHgun2KFQMRwXS7ok3MCY1oa6JNQ",
  "key16": "4hBcLWeJRwetqfAAVhmoRvdQeVLU8NZvuU8eeDhXWiKqU7e3suL8Fq1F1DHiBFNsA72sLaVS3ATS88jWXivBmzyS",
  "key17": "5jQGqwn3vJwRVXUnT7wf5w1a8V1kHG8dF49XokmS4jS4pKbb7BnjZETYpcTehkV6HJUqmCDmHAyu7RXqLYTwM9Ms",
  "key18": "2FuoKrsEaWDbGWPwb9GyVoRGc8jN3vyW2S9cx3G769iQaP7VKAZh16RvMxFoxFjvkF2nPz5tapRxyezZoeWPRxTT",
  "key19": "56LyHm2zEY8LHUgNnE4UQfbiMmuWRxM93WjWookmSU697XUGU42iB7xgTtFa75Q49ZwJRAksVNRoD2QafwhMiHRM",
  "key20": "skjMafcMznoiziQT7ARRpb1dqdmMeCF4UpFKpteh6fTZHbzQ4JEHBXEm76yYsth7C9f6GohkHbMCqUoXgQHoBfd",
  "key21": "4sETscwJjQ2HEyZgMSK7VNVRDVzXNkGB3xMFUCEPfzKK27KveMwLskQ97Sxg6ija3dxBE9poRnMBTci4eTCd8XUW",
  "key22": "5obppsy5uFKp3niwt89d7BQNmZvft5aSK1iiyeMRHHrQMArBMG1Ei3QfxkcL4rDJK1RyiXLFQR1k6vJV7rnyzxZf",
  "key23": "5mEV1xcgmNFLxfhjzEcDS1vFD9ajbCEpdbAdJXwnPf3YXQdeNL1ntEpiT6JgASAUkpsBNF3mpZMA6QT6yvs8N8tN",
  "key24": "2YGNKYUP6VQLBagoNiBLfXq2AizRNv9HmoaieXTThP1iHkZ5tFq4e1qr5icR1XWZVjyCunMspcjPLEw5Hnn6YXW1",
  "key25": "48shDETfwArfTrzDyLv8vGj4mwEQH2co8fiHVw7eAtWemiL5JjeaMg8o4SrfhgQ1aRefu2NGn4WmGEHZFXy8uEQW",
  "key26": "43J8E4xQ2Tjyx11bYhUMMuzDGXo1q5Z9oFkEk7uyWkWKPR5C1sYKrin72UReqK4UdwuLczVmhTHYQnuGLefszhnS",
  "key27": "gD9DdsQKTGg4N8NzHuCSAR1eEmMDaMu36ki7WKx2fT7ovcytn1c7Xba5S7hxehrk4SDycYnmRC9xQN56QWGt1w8",
  "key28": "2qoU8CKbctS8wnLaig2veEpLcQEoJQAN9gkZ5ygQkgCXaBrpTJebCQjpYveewjQJ47atjbcJwyXJGPpFzvpCX8Wt",
  "key29": "4TjXnkuQbfp7rD7pmCwp5Z7zknq4NvxGzqHiAMxZKy22yiN4Vcq6yRZZEEk9xEa9zrjcHuA9JkS7SuTPXEJKp4RW",
  "key30": "5QycwsPhxSeo937QojJH2LeZKcT4Gh8s9gC9r9831fEAQ18pMWwrYNhw1RuiA2J7HpAb3r23XHVBgCZKYqnzHt3k",
  "key31": "vWeUir7xVqSpAkVTg4pDQU3Vjbb8va7CWqqgBFsjVjLTcQPGeSakwqsVYy2fxiubvtAZKdtoxKq4YaAYXc8pkMt",
  "key32": "DFZ9q84CRnz34n2KABPksDVXj2rmRtdGjh1HSi94u7d9YJrbrwLQf8TB2YHnkrgwePyWUDVbWYCMjEixXJdYxjo",
  "key33": "4yM238jGrUYspY8VGUZmpRxX5FeoGAWzjrsF6UyAEKa46JLHSr3MivCv1wQwfapVBQTXNoSg4ytH8ir3ALSmYtNf",
  "key34": "2k9NdbRoJwVKwzo9XEGuzGPuAQY88EsBvVZcWHaFyvhHfUG3nqx4aPQKXFxyBtGKF1q7Nicuzq5AL1XQQNLWVa6F",
  "key35": "3V9oakEhxPX2sSnbtb3HqAinEQcqf3tjRrgzyr7A1yaaTUVVkt7zw4YPrfvqs4sTTf2pfPgc3HT4dHyT7EgMRiGZ",
  "key36": "271WAQHoXo59E51FWXQSiFBmKNPKYxmZPrD2beHvvBKxKzsr7QaxjyCTwdnWv5WuKez4eXTLsphGvW1oStXp7jbi",
  "key37": "22KQkm7RK2cgBbPXpJhv8GQkEXWp9sYXmKAZ4twRFCbrfduU1hnXN42qzgKy2uP97GqXavCEmzmTJkUo8AKL3MCB",
  "key38": "5PgBjx7i5T4KMh3VtHiyXHXxTEfhf5HMxQkiM9npCBRpndN58kUzMm5jntEupt4B2NTm7sXnS7ejcrfabYPDGrxi",
  "key39": "3FtDmtHwmHnV4zc55uUh6PXkhuwskEFBGSLSSpxCUiEpfUW1u6sKuWow9fJJFd9ibsoYrSoP4XANMcRsdApq7sat",
  "key40": "2w9XxBu3WNjU1rFr4DpZv9jeLRyhJeuqWaHULQA2js9fLLivWBYAYykKLjQccHXJwneqgnhB72189ZL8HzVmHZ7c",
  "key41": "dstXaHov2C4CPtuqwLiZjzsN1UmBwoniYtNAqqT2kDoXq1CryzTkfVcC1KgTZDMFrL8VDbmmjxNELTcz5Nkgb3g",
  "key42": "5SkUeuP73hP77SDQ6xpb9fan7WhVGq3CETx6Ks44p2CkVtoLVuNWQuGPj76RbgKRHPFd1nerTPt1EDB3b9L9NLgZ",
  "key43": "2bLFrfGQz94wHi7nPRv18Te5QS6sjWCKCqxvcJ7N96zao1jFXgq4wojgSz7XtjkFjzdfg9JkcEMupttyYFy4LoRe",
  "key44": "3vCfd7H95hoCGev1wb6fgZKjZRcf1u4Ue7VTYZt8qsMR4wqAfRDbrsUd5UsdUCpYPr5aWABe859WV2Jyep8J2Qu1",
  "key45": "4eE7PyQc2pZUezLsjqkHayMqwjkduGVUfGSMkgcgWS6jKX14Hpm7Vw26TtJKF3BjbZ32XVtBCVq1sjZTXprfxSoK"
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
