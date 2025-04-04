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
    "yrNBfz5YPSWGeKq9nvwsKLMgMnf3QGgjnbptQpkecysnXfXCE2jgTC2NyzbxR6mL4UNdYsg8UmkR7vGtAQ63pBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wfVQPiEMXQHZzsVJX99fbi7ywh4AyVp14hbsC246BL614joyEGvBinaB68R26NWpnhTeocE7MBwMbFyrif6XaSy",
  "key1": "eTSy2hayP5vJ8Rg1FpEiX183hJAY4cWr33zvG4b3ztFpQbbRQHuRsURyFXNDmpdYQofDLYXJJ9ZHAFZ2GYnHx3c",
  "key2": "3RkoyszutMhqV56e2NXPYVuAqu5A55t19G2eBjgQ1qpCyNmiZG88DnagGqSfiQQFnjVXdrdakDsoHfgby4NZpTv3",
  "key3": "59wspQZo7ygATg9CvWExKcnq3HGZpq7WWnjbVHe4Q4YHGjjzpjf6SnuGnx3PhH4ZdeVoAuPYRoaXGBbuoih3BiDq",
  "key4": "4Wrg7cAyLoG16K49DaKto3iUQXx6TheobpJYaqGeP8x9tT7n4n9emJtGoZQLX1yMnSu9ivPsXw7uKFitGtT4dJPS",
  "key5": "4GtRKSx1jbkjeyaCCH1Z1TaKWFY2BVEzFtyP41gGgXHFqHftZhZfmJGAM5vEKv7EbqQCnphB1t34kya5GPxBY1e9",
  "key6": "3EL4AhkZUKtzeWDWPJssfdftCVJ94aRrmwaVi7BC5eMi1M98nP7QorFkaccyN1B2Rt4q38VyDdCaR65XXVyc4FKP",
  "key7": "4vw5KDjJkjNfYoTvFC2o3xFMu21HmKBxe9vbq8a4pM6doLhxZDjyscfPASreqnj5EEvERTQLkoysYkaKUFosd988",
  "key8": "c55uZ7u1QghzgRghP8UUQ92Z443GV1YfPGLhuKnd3z5ynZbmEE5LRMEwmD9u7fBxQrV68HQePfCx3Bjh1vtUB6p",
  "key9": "QuNiZfdWo6LESz2gKMbG3W6pCXrVEXa2dWxnEuHGcKnsD5dCyXKomhgxvPiZtg5B2t2gNaSv2HvH2vJxGAiy1un",
  "key10": "4XHXhqCF6yCqH9EJCPb5piJj5QT124zTGUg3f7Y27JBxQZ684UhaFS6arDRKPPqR1VCUT2vMv6kSLQv9LNy7FasM",
  "key11": "3pnSgimd9FxV4493mvb8kdD3T5iwZViY6EfPfhYLuF9UbL8TFe7ootcs7K4Z4bg6q5uo6mm3H7LAd1MzL7TABtfX",
  "key12": "2RUq46Q5UGcLPvyy49K4JhczowgLo6hkb7Zm8EAJkNHQEMTdWmhWswhzbdegodwjQbeqzt8SeGEKRqYd4QG7c8eK",
  "key13": "3i6PJb3JUNx7zY3WXnqzPyBwNfwJo4rbeLPggnXrCGBNmZQbxXgPbWehKTLpSBzXpVhgjvD7cXPZcGDmiTw98riA",
  "key14": "9dqs9aRXGo9UgTEvu78zvEJedi2WeB3AmKg3MFxp6G9pjPzC8aj2ZSfbfW5yPxfvGSQvaobjPnSVQj8LprNyWZy",
  "key15": "nYwSPjh4ovWQThK6d7JkTrcwtnVf8c2o3oFggytJq6ofyPTgPoAafYeM5WGWhDfrQ4R8TvVHqUBj3VL7VWy4d8X",
  "key16": "3ypivZy4JBTHuMpdo53CmBkARishs5zTV9ErmWKPvSp4GaHv1xSdwLtm6YTtmTeYGdvctqjek3ucu3varWGTSNvT",
  "key17": "4veqLRjiiMMvDaJN1S8bLjpxXC1YmBHFrHCNVpHT4Hsn891nuKSPD2vVgmJDvBi2CtXX2eSACP7DkWTbzEsedzYk",
  "key18": "2pGWx55H8eTz5uJEcuD1PE4FSB4AKM3jGiRgAzvBUL3GMCSNTspHnYRBZ4UE1Xqm6dmFZXgE4EzXneAbobnUkyK3",
  "key19": "8YGxVTiFhABxSoiNC8sRVqgkCa9bV6jQrXvekuCDxCWhGTDLagexjmXmsvLDF4FvJAGKrSmQxHKAbNzwQh3KmXy",
  "key20": "tB9UHnHWr4fca2wo6tuBzGYBMsrREXuisct6g9eGxLxhCz7nMUEqqnKP1jaPwdmqAPoQ9FCXzBsb4Wf7M9xfCGV",
  "key21": "38Nb7onUevaJtVQLgMQrYX9iTGccPrCBgECjnYg7jvvCRph5D2mYu9sZzYYJheHZfbupxMYwwQqpPpCMeRV3SQR1",
  "key22": "3bZPbAt2X1F9Asqsj8hJxWvjUnyQrnLeyXj9tu4yQD75Bp7648qrZoZ5RHFXy5NwdoYRvKNCZr5NDLfT8VJeUkYS",
  "key23": "52PLQwHRYv21P5oRrAnd3H7RSxLkA7UwZahwLY5VNSgkFbkaomjf6KKMJ8NNYYLdcx3hykn5jwfm4eYTAPoe95dM",
  "key24": "2bxRMsvR8NnLVuSNihgB2eR9jqHdfqVTF6joh1k977uwb5phfXtaivQBMQBdk1r9z3C6XB9eB4CL6FPtpZ5AT3eC",
  "key25": "2DpwxeDKRoRrTXmyogmCd967CCd8dCw6v9zcbGyUtAJeShktj7wFiR4PQhP9VkMxMyQbAasbaY8n2RzMfVpxBbrv",
  "key26": "sWkP3sDpH1TynfbKRVABzakkFpVosKvsVqQeGNL9Z7ugUoagCmMUcdGjnDbLDgZDNAFU6ARnZ7EjeL6G91pnSh9",
  "key27": "3doi3JmUkgRa2n6FJdTr5TPACXi17iS8npB2grF9pnGW9n1DvTzkVVT3bEV6T1niDAZjFK1fCssBf7kPvZr7U2r8",
  "key28": "5R4LyRBBAfqwpPgaD3G9Cf7gJLMTY53qvfkUQKsCQmixMJNW7v94zQHoCPNZ16VVo9gufWoZFsnqnLvTkZoZdNfY",
  "key29": "63TNi81XdDp1L3MZEyKZnqbiSw48RKGBaScRXDJFxPt2V1sbspkH8PUA7LcsttC5MZParZ4JrScr1vJctarAVACo",
  "key30": "4Uv3ikGhq5D5uZK94HcbdgPK53ayTbpF2z2Yu2Mo3zqTscGqfuG41pNrLHTccfRakFGWacytPQiEdTZkEqSKnf5f",
  "key31": "2szEWKnMmnhcjjxAyE1pq7wWtvb69QAPXzzrf4gkuJTbqbS64zqXkkQuEMhT9FjgnNaZqwz2LgrZT54H77bEzyAG",
  "key32": "61yWRkdYHXa8QoVLQBEDZ9oBMrA5SvxBptHjPyw6VxAtKSRSYbTtNyYZftB732mxgd7LuPpbe8beF4sfwrXt6rmW",
  "key33": "63wPfNNMjbZoqn2mxq2Z5DTqeoeqS4htNWS3DdjQ51Fk2c9ZUJ9AWiQcu5Fv46uVpQPdkwUNVxhNLmT1Qft1h1ZT",
  "key34": "2ey8sYjoMnvwNkMD4F5aaB6gstSapHqbvZHYURAHAqSJWjWLSwHUGtfuEEHbT91ZsDckdjHqSf8JTad4urdW3haY",
  "key35": "4F95yeMjuYc6xzzTHxtfhg4KdtpJjL8SdnCDnitmPvcXzWNcpQPXbjKk8GcC3SQxC2axy7jfJBufDWc2ALGRgvnt",
  "key36": "4nU8Dzq9sqjNs6QLM7azkExhPgVZAgeY7XnjQVrE4cg8sumky1kYaAD8AKDJXL9L3ytvYfQ5hVxDXPqeQjzGQTnZ",
  "key37": "3x1cXzHsfszeQcQ2veWZZWg5M8Coi4gYAYubCf98QUhNcNHUxiHMbDk3ZRReUwhwoRedWCU5am4iWYGCVAeJtHb9",
  "key38": "5N9yge9reVBc6ch4wTdjLNefFuTQ1Cx4XLNtQGumW734oywuT3kyRFxFZaDGhoDuwrFQh1f8g7oTLBD8WE3nh6J5",
  "key39": "3RAm4WZLEFTEcudNRQE3etNTsR4jvNr4f73y4HaYMC3akxy9ZTPgsyaCw5uq5KYisuo2J8iL7pHN71TRbjd97Ken",
  "key40": "4JaGWVFzkL34sdQufx5X8rkyvKYBuLkoMvPK71xXCqRpWSKGkVEWgKDb7jJMPGGMpCme8EWoTLZAfHuDxejN24tF",
  "key41": "4ozu18pMnXu9quLQNYwGarr47wg3Nnpy3B8wATTuNnjhbbGseQ28YWXGg78wdVTPZMaxqgrxSZCNRLopuH8whmNL",
  "key42": "26CXQFdVLsasnu7gN2ST6bxMZAt5caDGt8vCukCuvTGg7nMD8CE5YJSejagXcvs3ApQFuDmRJfa4cSWBgbQhPhwd"
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
