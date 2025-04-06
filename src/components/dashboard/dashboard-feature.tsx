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
    "ck2QdHq8WLAzRcqYPBFGoWXykaYXrvZAkFJEfqDzrhUR6e8N7mhnMotuLxo63VMNTfuRvC8WnBBJgeTyPbgB2y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ar88PZoyFUUDnCapj95rCk3RL7mwkoMH32k49CWyHeUmAGYcAGYyaWQbwcY5Fz1GFjxNg7JHxE7z17Xf2caN9Te",
  "key1": "4Wnegpsaxsaeh5z6mKjQHgfNTuXxoC3NpBiqCZJPYk8iyiWScUK3jq6mTtKJnojswmBc6ToywJUAZ4gdxgS7Qsgd",
  "key2": "eGRKm2qvesswoh8EgDNLdW6rjwbMqViaA3mWnq9ZU4xnVXifwVN6tk9PrRU7peYdtB1Vr3PDFwKsaWcjpFHyXuU",
  "key3": "3nJkxryzijBjh9EAMeyDXoPLrcJ8J5WKWRoaFBYmVKceW94GKKFMjtaecyFVGwkbyew85ZTm9aCG7JN1KfUFpq9r",
  "key4": "66bcTq4FPmAnAQi5Ju6gjFfESH5M5dJV1LVrZgreuM1d98DmhkqmjcuuhRBBeTFttiJf31r9J9ghYvftcC3iSpDm",
  "key5": "2BqrUp77UejeS7T3UPza3wY5s5qw85XhZEQkkHx7XRz7SujZWDeuGkAGVa59wbUsp3EtZbZSw5baHuK86tMjhvXJ",
  "key6": "5AYiPZqqjk6zg1F9pfdLBdWkz6fgBNDL5MUx88SXVWzmiP4wp3v7AcQ6NkScbwGSBq9DXqVzRpvj86njd6jeyhxi",
  "key7": "3LyinPxEeCdCyMXZxLeUrjRYDxw9UjC2WX5gCZopx8YgSz5yenyGHZKw6ek3nBNc4pmtwKv9qM5vKYogYqszoBN",
  "key8": "4553PKXVStnRD6ddojvhpjrkoUsv8fixppXmgKG4kfZoihJWMRC2jKykwpu2CCqdhV4zT4AK4JbpkyD4q2t7tiQ",
  "key9": "2gaANtUZFFFH9DgGwfvHX1XQCiE7mmbCRACzVPwWoFDgfrnSnjY8NVFCdyZeB1NrmNsoHiAssYWLiddhzvZipSGL",
  "key10": "bzrJs9qyS2NXXkDas8EW2ayNL2coL8dAnGJePVc9DEuh9T6swuiWQKxoxZeSeENDXYfGRnjcyy4oivmmg9DN1Zm",
  "key11": "4qTqk9j3HmqQVLNxd6vqzpTDLB3377ZdZqV6SBN3FKMqCJK5HKiYUySqdjba9vxt99CofvB5M9M3er1Hn1eb2AqL",
  "key12": "52dXPiU3cmUoSsWaYWv7c3x87oAUvML65EEpzCpoa57vzr2ADnzxHG7FBuNxAk1bnWK6VtEgxdPGaYy34eVETTdp",
  "key13": "2j95kGynbYWCJCAGHkLRefAMJt3uoQeqkH1Qr8ngxUibNduWmM5zamZy2mmfawPcQdeK2iSShqWMKLm48wivJxfa",
  "key14": "3hZcs4ePrWs5smCeFQKw15mgD8cjHFV6xPsGThCKf18fURUgBmnBr8ARb8TN6Pah8zaMoWNRT9XzUmpxkRzpumzA",
  "key15": "5G9NL8WmdTb5k7K4mM3cVRh9RNR9yp6TCFDno2fTzJAgwqaXM95WpJpk9iQHrak2MF33MRFbAAtqydXvoJ3sCKro",
  "key16": "5mDfPWevxUa7oEoT2wacxonp62xzWvYE4L3UYMy4rvDDzpM2RYTYGWiyCKF11i5xWPJtTW1Ww7gL5mobj4LPLRgm",
  "key17": "2uUAg69wzgkby6mtTWQGE8bqJKd47ds2JUSi1jPh7E1h4YRY6V1FeKzCsvhFvAoi8UU3DM1FuDiFXQhYUJ5eb2SQ",
  "key18": "4CE955ormvpEty9EdtaHg7uMiW89Hxd2CBdxWBpv1tadTx2zAtKFDJ1iGanhgNoLGsF6x316jx7HZbkKqSXmfDSz",
  "key19": "3EU2BLtDc3bQgqk7omBocsgCP8qcTF24z7cLpNqQnGztCxh7aSb4uaH9f79gxEDUubDPvhQHRsycReqCkbfd36MK",
  "key20": "3YekM9pDhsMtbkgP3wvBgVWBSwc5igVFboymCTDcJHEjSpnwa3S3q83Y3ZxM3C5CgzAbyFSK3ArA4KcEJUGTo3RK",
  "key21": "57B183YKLar26zc9cSDdCnfWPGvLTjiD77BwXFkaBfPJKmMKdm6CfXPtHkTHdTk4bU4LLeAMzMJzHh4w29SiYiip",
  "key22": "2iphhhdgD4jnAg3DHJZsPtt1CM5eDFtivXEfS9UV3kS9zyJoNu4wodKEjsw3oHmo5KigdYXJ8C5bZk2ANoss6ppL",
  "key23": "pBeBxB7gJHEmR13X8aZxvZ8SFGCTFQihm43gx96CUbKgF4dscQ1P4GYmP8yfQD5DoX4JzY8ydTW1T4b9MrFHsLe",
  "key24": "5XyYvFJRViEUDZ5uMpgYshwTt1Gde37NkQTzGDRsBrkDpR7Hzo5dNXRJffBNHSpVaus9SMXfeZkHCTjp4xKDch21",
  "key25": "gbPP9UrBypJGWL2y6RgEbMua4dSqRw8Vrw1C2wcf4ampH8pLmHV9Vijfoo4mCh6ikqNsYHJ7yrhdxymesUr9tbf",
  "key26": "4fcE5GQY5VUGvXknZpy5vqhHv5KPCcpt3fPUDDLWtS6ifKhcw7nxKxaHhwFwSqJ63xB4tThMx7duUm58tEnmrKbt",
  "key27": "21ctgnmz2jE5oz8Yd534tNLyoJ39u4eKQCrZshTVkhTCfr7whevWLx3TeqYuei9HqTiy9edqDUHHuEAyoPd2k7bS",
  "key28": "ZtyCcosNvCaKgxspVuyr5TiSx2X6wTKsqHUkNKAmLq297kWNLvacHT8WtYAQmVPzd4KZUhPRxwgBBHNgvKM85DK",
  "key29": "mVcfuE8SqxAWFkp4TFnjRGsqEgL4mw217g1YeshtinnJMEmYDpcbwdEtvp4fAGQVoynyYmyGmBunpoonjvBVcrd",
  "key30": "5MMjtfo57LrDKMQbDt3xCmCrNaqA5zgAfV7Mi91zXqSr9iB8qDZEETFDwmgqk5pqfhJUG8n9YtWZJXkmPWvXiy6b",
  "key31": "4NfAZr2hBhsoxuHjNwbnSGqbCcwnRrsTZTfz4TwDd7ugka4UuzBTm6cLpZPE3WZEU4vhN1tPKGeyhEgLH2QEsS4r",
  "key32": "6413qzdZ9Rwx6VpNcnLt4VGM16jhLHLCZ9R9G82W62eSHAKaBt8wyF8MhZkFqNuYMFz5C8xMLvfouUHYDLumzdFm",
  "key33": "t2v7LBwLiAb92ySLnGH3rf8JiScJvJLm1EJtbSPJ1ZNo3ViDtM27KuWqJq6R18s3zBwChxTqyBidE2bsVkTqv2u",
  "key34": "4248QRwqvFoiVAxZnmavo18KZF5mRvnthMrYDG7PLCEqJkQgi1YCnWbFPUsK79XiY3uG6hauvgC8JqVzqmNS3wGN",
  "key35": "4KqGm18PYYeH8jg5URtML47m8RCLDJUQaYUtgX9gnRbmtiUpTwdM4d1wsgfenCqdeoFWn2pdwStswaLR3XdBC97C",
  "key36": "4RFhnsQ9q7dynm5FRFUZvrKjYfcb2L22oqH6XPcsgSMGhPZCVcFp2A9azpYdqHcmfaQXs1vtaNaCu6TX7gZ9ai8f",
  "key37": "2rg3wNeVqnhFJnoGHxRbqv9CkszAvUijKkX2i2kxFsXEVJpKdfdAiek1TDkPoFg3AzUpofcKR5afXB88eduKdZxk",
  "key38": "4WRNURzmUVtxFnK5SDQ5E2Qrps3Qyt8vXnBv2YUSm3MjC89D9FEWy1WiGeixtiuxPNmmC9KZzTmUizZzLUJpbJxQ",
  "key39": "67723AfaEveL5RzJNz6R3Yc7bw7XVdjP5CAf3aqppRxsAVqNcnaGGRw6hZcGu1jmD74gtiWnN3wibWGCk5rgT6ZW",
  "key40": "Bw15rwEnwMcY5wiMG7rXQ8NphC7XG1Ws1F7zS9aXd41No1DCLMzYHcoYRTdBri6FMZ18aGA4QKQn2VhhaDJHB3B",
  "key41": "218Yia2nMNRgnBa3roYDdojL4bvjfNVRWawQD1Ad2Zs8zxnLWqhN3zSg9togFLkCNb33zuyV62391dRC8kmeZ9PY",
  "key42": "3rGXqT1sddLKBbekunjdMz2qXEJUc9pvjBRQkGrggijT9zeNskm1xbuXCDW3dvvrAHduKNSDqmYP5o4fKYGrMh1n",
  "key43": "pQrcueJ7cqAoQmxC2L4J371rpooLXDxx4PyEbkPncZcbCs4RV7gABbNxgnDPMagWJnJPZLTrrB9sPxUo38zE7cw",
  "key44": "3i5gmtF3aZ8z25smvjmwRvDfPcwd6gAjHCHZz4j4MjbRHRMN2nEAefBExSn736aSMoYeDYgHF3PV9eARJHhBRT1n",
  "key45": "2DXAZHBomedg656gYLR3T3NHN5nka3TNM292ZvwY4PxpsaWWje4dE39io2vX9uQwT5iYgd1DZ2K3rheAN2pU4rc3",
  "key46": "ByfxVxUyeLg8ssiYyqa4UE1fXBgayL4W5fVgoXSpFuAmWBGAwTr1akG3PuwMeScuiand7n8JZ8zxAByYDGHLtXV",
  "key47": "56o9C76Fksegf9SGQ1CGvrZyAgBEUtTuUPckb8vC1w4QSsRwMcbMwYtuuzbCcJo66KnKQmrQQcGvqKud7d5DYHtS",
  "key48": "38LuXwxvRV9xgNYcF85W9JFAHUorVz4zR3CtoToqyMVx5sPJGfmFLsDCm6mgLTm5fHxC5A1UtV74xRyw2ciGeigQ",
  "key49": "3Bgg7VZj77LH1Uwz6XNMJ6FkCYujBEw2MyCpz4LN4HTqNRXhhfrVobwoCQrbbVyC1n9xRFsb5rWaz6ByWauK5Tyj"
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
