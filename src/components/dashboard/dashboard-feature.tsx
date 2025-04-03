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
    "xZu97PWVZMNWVYyvnd92jrsbqYWzaJ3Qj7ujhTkWHbR6jTZojwz9P53SewqQS5w9KmKETqYTfaAkqkuCsW2d6z2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qEqhPNfes46GNMXpQ7twD5aXL64Ca4NLXfWs4KdjRAe76sWa6g6N1V2hea2HqRPct55GpKPiXC5hHqdSwGRTUHS",
  "key1": "2AtzcgeGm718pXkHKabUxeaKXSpdq9teWiX8BSgVctkBUkTs9iNRx3S4tnF3c7zhqY5ZSyVLqPGMkTuRH7SecsxN",
  "key2": "5vo8MyhC5HuKX967cAv2i9vPjSJodDy2bScqCYNWrVJzktacqmSgHtMeSknGLP1A3bqbYCvowhSpi6BuGbj9MHZ5",
  "key3": "5bxFzmeWmSoASP9qaq3i7pUt7RS9DRnX57jF38XHVpymGZDZwLPeC8QbE9Gz2KcxFAuy12UmmZG6Hcvxc8i8rqap",
  "key4": "QhG9CTARSZufuMwdWb8mYtVfPasvzVym5osByvbFCJiExuXzuwro1VUB6gST5jG7zjfRYQTD8aWnSgEXCMbc8dM",
  "key5": "4bhQxahgu7jCEjFRqHhG3QkiCVYbk3rZq1qGFto3vsBmNyu4ctjxHuTkzbTESrM9jqzaGgaTRoc76WyeB7DnaAHh",
  "key6": "5Vjh527zf3we3gHuAKPaEb22MRVjmVoh6qMcQnJW5ajHnQSF2Aa1GVNzr5b6S4SXMt1b8Yk3r2Rpv1qkS33vd9Lo",
  "key7": "3V7sfGYnWEdjE29XWx5Cc5sLGUNs6uy8YdKkpqDYn8Gi5NBgdduaeNZGDXLBEHkKsonC5MTquGzFoV9oLnamu2Us",
  "key8": "3hwiwMAQSFcMJsMFocwXyxX4UBwr8CigAm4ctWdbzsUr7oFTQrmBbAyZVumh6xGvJNr4g4URE5Wrud3ma4BdHTSt",
  "key9": "2pP92f78pXphuWCji6pPRCf4c1iLyESSS2xjCoPHCPdJcqSU9V4Qpz58WMWCGbNwLXd64Ceud4gMNpFdkYtyLivo",
  "key10": "4vZdvR8cKomyQtF7hKssqSFon5aGqxmsDc13uWoFrZbJdx9zwMEgQhMQHazk9L147rUmqwUSWYhtDFVPwZQePwQa",
  "key11": "WjtE6JHcuZz7pptpKK8Garg1xTsTGoQeNgc3A8H7hXMvxX1y9GUXyhzmotKaTjBhCeXq77fBFeUk2VnMXBFBnWd",
  "key12": "Ey43ZGum7d1kyhYLsRmQnUgDKMvrouTp7uJWuPiDohkzQbVzL3CKFTwDg1mNszcNTYBrWSP3L265PauzMRwo4A7",
  "key13": "oQNwg595kHo8ZqGB53jKKepBchLNQXvqSweruEcjdo8D5DRsauvELjZh9NDrpuc56WVh1Ew4rxTvdSL151poz5r",
  "key14": "4UFKE6hwioQa8wDpwf1pxzxeC5JVXrbLSFtYnWETCAthbnZz38AjSYmNG3LewqAXpAFSaMKDxQhycMYZVmVPTwvk",
  "key15": "i1ELPmH2JfymLFguj2RxBEy3FAW9148U7CzFTvYoPZH1LxNyz4dghhhoW8z3uFPBgad5XvPXqxAx4MyXK38woyX",
  "key16": "3xgEYLGRs7GJaJDyKDf37LeCp7jVo5Ft9hiqdmGCwr2qMqLT2Mw4T5npczsjN4ajzWQp31eEqaBj8GRh9Lta8soY",
  "key17": "37mLM9YK64h2gJTFnCuQikGj7Djre1283n4DRdFze2JFZdzy7AqZSYfo3Q5SmBv1et8PBa3UAXmdpdtRnXsqjtHe",
  "key18": "2zuL8YJzeM2QMapj36QjfviUs32bPbaMzmwcTyTGFKJACXLL9u2avh1zkNmkSNH7g3UnZv143eGJMkasGPq6TjEJ",
  "key19": "37Q5jqAmGPwJYYrM4keTDBu5MUY7JBLiGhu5m3ijV3YYeWTjFh3oeqt87w8xTFXWec1Wf1noZ118SekjqCrLVhje",
  "key20": "4zUNqsTzti8PF5ACt859txmooQAQrngDe6Ji6DRHVp1Ah51t9BjYrEurmy9HqDjSUvEXZ7ae5UpR6gwCFrGsmXxB",
  "key21": "2b4e5BjLSkP8MsJUWXjCoAzABQbQJcDRrzsLKxPwhEPjvxJTzhUk7QB3tWfddLVyYcizC1Sx4EDFWq1Ku9TZFxWD",
  "key22": "47hDttyj6tqix3pwFJbK4N1vTh5RofN66xGPkgj9WFsAkGGytNftynRy37Etj3jR9usP82e4HNBuFoM95uWr1U2X",
  "key23": "4HzeEuxqgnkQ217P2dN8eHXizD9bkYUTDygDFG2jUoWushrwpTQn7o3tNevJ5nrS91kw62ftfPyy4TGdpdzoUtyz",
  "key24": "5KJEufUxLZZrUAXGLia6fT5SGZcy2pbKkRH3A2TCm8vFTVgan8VYWxfEvA59Hcre5maeYHNvLoogHw99sBTCvAPv",
  "key25": "3S61qcGNCE92dLZLrSv53o64NTRqqXGJr8r55gwQrPL6PChMsJ5jaSynSngFXBtJPkHQNXuYdakYpir3YA488ShR",
  "key26": "49EUoSsVdoGep2HqmhqgiCmVeZ5ERwqLsMu5NiT9GkZ59jrpDx3s3Y9m3RTJ5RgFRr4iP2bjUBR2LUT83iXsHUpq",
  "key27": "27rxfctaXtPNRpHJYR1NNJKkgSyec8kF9Gak4kL8bBBUp95j3XBTaHaaDLi9vEvKH4dq3PMVuYbtkJYQCb194bNo",
  "key28": "33DJjZp1HdbiF7AffkDD1yxKaG72f1NUbmuzpXv8zQoTP5PZfSed8Ev2jUJVXsApH8qsjbfjV4VpBgc9m9WdnT8X",
  "key29": "46DYjPoGJF4ZAUd7V62UHfCv87mdMsZgntF6RbZ1C66Cm4k3Rxz97CujgknRmDQUso3sVqTpHJfzAyPXZYFDv61X",
  "key30": "48WvvNZXTfmzPNHC77T7G4hAzucHEsPdyBVtDNeKeSDyaeY4JpGvhCRGRpLN1R6SM7gKpxrFUtP2ykcg8opVnt8u",
  "key31": "dqLhB165X19VwaLYECdnyt6pDnLx8KWKmP2uq2ePJEdypu89GVuED2E6Z2vpj9EGbq4KREQeysbLXSXqW2fnN9T",
  "key32": "4mKvP5Af6SLYEDCRy8M4AEtzbBqV9GRMu6tNLuBiFuVMQ1q54M6NxmoPe2uoGmqL8H94CmWTcr3DCEYpE2znyjWY",
  "key33": "44gKLcThhWz7qs9dULyj28qfkfVxQKtughXJNU6Mtxdk6t4iEbmp2KYBhLxspHwYDgcLvX582Uq9xwejeEEvFJ6n",
  "key34": "5KT4PRpUNERJMvrFJewpRXANg6Yh3Ji5mMzk6xEridnfrdCsDMP7A2kASWWxAt3wXtRtdvgzHgL7VYxZxFdY7Cjk",
  "key35": "488v1gMtWudKSMZU6oMTXorE6uL3q3wrSRT3sAoAgBgxkRaNDsooV7J1QGBBHMwnroaaFGZg5sa7aPhsjfZrRWpR",
  "key36": "2cEyivXJFXz4HqsgAKf4tsiA7a2CFMwE5BU9DP7N4BXwuKxXfPgQYPWqXh7jTzBk9iXLZF6zUbHu8KDmF1zE8xtG",
  "key37": "Gxq674QxUubBxANkjU3nqrEBtq5bXGcV363cvG5cDRNucoFDPxEc5nHguTPrdqtWUVP8gtk7nyFvPYWnPj1mZUg",
  "key38": "44CZYKy2PWTSthSDMAZyEJHbCnhCdffQUrxyVTWi84vvohBzPr5LTV1wfhAUBZWCjbSkKBE3oTWUdRuTFnJSunCQ",
  "key39": "2qKtUBCp7rkAS7ueuqFhaw5C2JMMMYX4qiRdT9MEubAB5kwpRdTGpiRA3aw3FyQ1BqY2HtiTYLeYiuccQeJWERJ2",
  "key40": "3A9dWHNFhCAF9rV5bF1vxcU3tZsswxQi9oEZd64nProinYwMQ3JaJN58yK23qQd9CzEJHYm8sW3WWKsphvJ2mAry",
  "key41": "Szh65TKgkYtDyv77LecYE24n1piy8fmviq5DNo375hZvPNpEnBTXrpEznADpYEHsqSKQpqBttJ3haWBY3NZbn75",
  "key42": "r65RDDy8ZCmr8b2oLzAucAnGZx9cSQhn1LWHtcffE6pbuoEqTGqdJU5EjgM4fNQo4zm7B8j8ixJ1tA4EUW4n8iQ",
  "key43": "3RqiNiz1odNPfX6B3ivhiMZemNTnh54tkndUb5XYVciwRNsE4c9iSeZum5C5BL7sqW6xS5bqNA3dMiMD6eefAVJ3",
  "key44": "9J71YBaDW5KT3GJQ6ByCH86dh2fbg6KGBQMLKyasyvS3tMKon9rm6jWxxuC3oeoPUsrfoZkurXww2w3zKYik6GP",
  "key45": "5PRQVuXQC9tHfDifTx7szvZ6MQeUDRsS5csEXEKkUFL43VkVs4jiALZMFPk3LaDASMF4TLZzz66wMSm9HEvroo5N",
  "key46": "5qWHBF7owUn8KyQ7CztLqjckMnFZRMoDudPfSk9ksTSYWPJcWBJ9epMHdCwxgf5jeZYXupknHppqvxDcsTHrd2v9",
  "key47": "3cz98b9VGJsbhKJBiMk7ApchH31phWKuem8jDQVRF6gfVHWq5UbXa5kEcPvsC71h4MnVaeeQFucYLhvNWtNaTBUY"
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
