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
    "3NjwTDTUxeHFYSwM2WAJGMkqELqjeWifBJYWPC2Yh2HTBSJ9oDMm5A3fAmg7swGnAvWEUzEqZe9g5uvk24bEkCHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vqTXwb77RqPf1mUsWBva3EKiegUjoiXfN3LqFrUZodwqDJYnm4QydmvRJjJHzzAccCvtS9nd3k8WvgbJNm7dbbN",
  "key1": "3KTSq3apigoRBoDjDiWvSeYQcvAzU2iwAjCymjH1seqBVKCUBvd3RZUwZosF1oiZuGMnddSqLfnmKcwedYyuu1Vi",
  "key2": "27n7ffrYxBVLfeqA1EHQ3HkRYtwdFZxvuVdyrzqYLmzLyDQDrMYLhrevbFTWYWg8pVMS3af6fhvRkf4g7wGUqE7h",
  "key3": "5wnUwTUa8ACnJdypGjzYhkCUvLJBkRThgvFwyPVp7qXMmpEsF3eZb1PWcinHCHbS9PJGaK5K7svx2Ene2tssQadf",
  "key4": "61uDTFP4PMNod8Xkwq1Z6tEectvveGJ2teA7dsVtQm3C8ry748jwmXfJs4xV2CCoxczwZ5RcWiiqw9KD5Zwk2bAE",
  "key5": "4apEKRJG7akX3SWzWjPUpU5Cxa7zkLbjY71BE6EWszxk5dX9hzYjq5WVuwkpqNq6mHd9EA9CKNgA4t6e9QSvXTt8",
  "key6": "34zsUnyfcf3o67S7BR9arNQocxmGD5TZzvfPZWomV2KpohXjpdUEXZFMowy574JHD5FrSE5ypYmmMsEbyTCJuPrt",
  "key7": "PpxxZxdEPYZXqX8qsCMoNZGNm83H6YLpeZ9HRLESeH1fQYEc47RH2toNb1jsBimF6nE85ezGpnRpPTU5MsYZSyW",
  "key8": "5wQqoVhkMjv71b4uJuX2qwnqvDBXENqqCHexZ6GrstA2diZq6JAGL11KrSjw1VfB3Sz2Y6nNuNXz53nfgMAh4p2Z",
  "key9": "2zmFFFSdCoSDQd8jZQcNaxwr3ybsJzxNaQt214nc4PW2t4qBnNG2HJFmCSEbM6hPsPTPefMMSbGtuz6P29puPLLq",
  "key10": "4mfXXsfGGBHK1ZktvqJ41HJc3rVgFbfo4o5vHiaSGCUYK2uU4GTgPvcMFKHaFu6AS3mniqidKY13MJ2f5W5Ywp5V",
  "key11": "5PknzUmXxhEnFCk3tX2whnGDh2S8va7JtH1mqhu8xa6KUhDrbkp2zqjLzaGjAvfNnWbPNEYH8nNe3URukYU5sMgV",
  "key12": "297ZQJhRDJnZFLDU6vmovQhf3BBitUE37HJEaqgY15yJgEtZeS9jKeHkRisDuJi83k1Ci9JmdWxrb9M9nwVGeH5c",
  "key13": "4grsFDi3owvHeDVMgHLbzLfhQE3JoLPp2LvvG5gie5cNr2R6G5McY85z74X19Smo9zWsBmqPWk294eXgateAx3d4",
  "key14": "41ekyTyw5HH7xeUPFYhTZ7NYwv6gxkbpdcYTSk8YUJCS8Cr637VLsu9p6EM3ENnCWiqe8L4yxPCaCKY11u2mTnMG",
  "key15": "4Q41Wr5hKgeoDK6cw1UyoY2Y1Xqru1UFgBV2z1AXrfbqtv26n4P6oBGTqsKbAWA6bXJWWGVo3tGCLkwf8afqnLT",
  "key16": "YMJTQwmrMBgSvUNRsrmk6gwm9Rovy87f1KuhYHLqztnNaH3nJTAgutSQomSf3WBso4Eb5vpC5WJT2EdMeWSdB8d",
  "key17": "4rze9ZRPR3kGTW9ZxBhc8L5ZTaE7t4PpAgwi6a6PmuRKfL2gDLRboUXQdrGwbpaFMsu5ixX39VjhpF8dAgW5W319",
  "key18": "4PmVBvqZYuizYqcDxESEvKRTUWvhfAM6fo9z1ivLopCS5MvdZeLTM6fG7UewAzQiEombcLvh4iHJZ4Eyg1uaJCMG",
  "key19": "4NF73ivE9Uib7t2JN5fS75LNWUtLNLSMa7ZVuwYEwkToy9XyxNdJxxJecqtzkh8VUyHCp8hfoWnGZhMgt8cr8hkN",
  "key20": "3pgUnBwp8a1qiYZLcZVNLABX4FQNutDhAhnD9dqXKVrVrTX5kBECzr8EszYjqwgVSNjq4fWnV7RJQmEysFy5gsF1",
  "key21": "LssJAttp7hX9EKxBgw2Vd4fa8qYXzFJHBxum9FhdoiCLmovDXhyX1RwGcqDH7SxHwHtAp9mBw7E4eaU8QH5Maif",
  "key22": "3C41QeS3Gbv2mPq3kdrxoVKzFdt4Ysr8r2UKfif4R3oCXB4zj4MVD38BeNRcYFgtwq1NwoziRbjxCXdBGZ3kBDtv",
  "key23": "2byGkQF86LKyB7HrCEA67LdDdxZUrLtWHw7GAyojAaYbar9SWvX58N1mJCiRzjuPKBh9dRAkp7ATAreimb1QPace",
  "key24": "3CVLL4WRoLWuuQZcuqWpHCeoWPBdHc9kai5Tg3AavxH51LXHrtb3JEC5KmH5s6NE6ax4jeLT7Ya3EuUZ4gvxosqz",
  "key25": "fsjHKrZFWd2pzsGwe9UUkVcQSF3dvtUB23R2nEnY8yRHYPSByoiuJnUKSqvdbGs1asDRmAjpwgS3WvkmPgEhf9K",
  "key26": "4JUV3wbhxyAqvse3faRHEDzTALbgbnZcnburZDTuLrWXvTJwc1K5biW1AtJLufzacRUT9w1GBy8QkyKVKe5NvDp4",
  "key27": "2LC12A4DwhkrderencVyDF2qBcji8QNRVKSqnJ46wmQqUMYAPZkKCTzs23X2vntGBnADQwoFeGzQTbDq6iM4EPYw",
  "key28": "47LQcD7FQtLwGmtP2eMmquuu7fRG9uY1Yj6u2uDQWHFRbC4y9ESzpydZeBu93VFEdaBEgqwrbhGLuPBxK4YnnjZj",
  "key29": "4MVaMivAJGksfUuy9KTfdsHiEq3XDCFKNFs2tqVKauVYozUzDU45TNJeiGJo2vXnXbRM8syGEx5yZ2MSUZipNQRe",
  "key30": "2N9aEvJ32ELLYKuPtdzrr7btn85hvPKeWWqXbZbHGQLmBv7QT6JSs5X2ixTYYyzz6fNLUaZBjctGMwhU3pLTS2XB",
  "key31": "365rA4Tzug9aqjycrPuFuwDULiof4m3nvNzyJ2reCMxt4aAD35Lozkozkfrq2mDbMjFZjke6sJknJxR5ymTajxvc",
  "key32": "3zWtE7BVQizMKdbx3Dob4zNuqtDhQnbPi5Y2C84w3AEiTUrRgYiBLRJJGf6pM3Lx7wTvQU2BpNpcVMJNqtjB35Eb",
  "key33": "3prE2VRNoAHRDhLPoPFPgyWZCf54vHraZFHrNFZSwkEUfNqVZcEwh2RRwXb5gUR5Zht4ZsBx2iBzk3oj9zZZbzWs",
  "key34": "3EBoD2U7sQvyRcFtnUXGDMYMVy2eWZziAZJRsHTo1qRejk6C2DR9aV5zqBzyWwrfivw7GQd1oEresp91ATqVmprz",
  "key35": "4fswfPb2e1ivzXm5pf2RmBz5bZ4mhyQ7rJNq3BiJqjU6MGc8QfCWtu3nsfa6Ej5BiQF64F5XCP5JRF15MekMKRTH",
  "key36": "4kPUE9pzJcrEs3fcMN475n8WWUnam6fncRs317MmEmHGwSVAVCVJUQzGcWMDBuVU5RUWzu1whTTKtfdUSYcCvZ37",
  "key37": "3SdAZYGv5ApHUuHcX5JL47Gn9HocRunoczrAvevKsvydNp1py8TCfdvsgH4Cy2EtsJRSJ49rvcJ7vTwPJRkCPJSS",
  "key38": "2nK1vnfLFRHCASn2EcaC2FrZBNdRMiWxvKawBdiE9gLMQNyqDUJ7aw5sE39eYduo6kusDUXGu4ygbP1jAoG8beL",
  "key39": "2evjYntgiLY28B1yFGwSeHkc5QCkrra4QnN2GK4YDxoRyipAX7sUUqUBDCHuEnTDTU2i3RRTNfEXSMXddJaSfgDe",
  "key40": "2sEPEgFJBzMBAaXBaLpdRNbgJ8jaecMrzpWSg8tciwXPrY8wdMrLEKirxWcHosghy4hdNrr7ryHHwzZ2Q244cet1",
  "key41": "dGipkRyRrXejUJi1kiTgCW3EXAqnMeEB6kLk6DhuAgBeM75Kz8xnDwqWd8T1cypj3kFtUuRLXbiNKMFDYxxtpvB",
  "key42": "34BwnSXgsUhG199419bfxCqexKKpvoJeXduhoFL7iQCgxYcvLGSR8p7GRq4r1aTrNLdk8ke38gZ7FhYZPa29EhL1",
  "key43": "4BS3c4vve8WpLKJPoDLhmb4CjyX3oLrWA9JrrdFqgXYgriQC1THwjNzKStRbXSApqZsbxpKfay5HFPeTY8L53gzg",
  "key44": "3ui4YjoT54QbCCn1qUZypyAagS6NuHD38MqHhkCA7FaWz1rvF2ew3XZi9t82aXbrQUdGheGQgEQwsuizCD16N4sJ",
  "key45": "5qJWLW9XVpesFqWcWto2eoPgjXfPNYntXXx3GF5HNd9C45qzbxBERJr6pTrkDL7AvetyGuqDgH4YBbSgBCB8uDdv",
  "key46": "izChgLhaEJP4wUJ1rvBCM1g748HAewJFbwWiZ38xAnvT2LPjSxbnZiX3H1jjEoCoGfZLGbNJdVzCfYpwrQQHpxT"
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
