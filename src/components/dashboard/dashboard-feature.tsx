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
    "5AxtEGzKZ9bHBt7FwfCYnbNPDnhstU7idtk383TNaDF1wCwY4R9xc1nkeEctf46vYxWtCqJbyhSJLmzLx7xMUt6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28wC4khX5Y8GE2czcxvLyJkKBBivQMPcZFxhF2jmw4wxoziF5c5MjwrV8XNbtAqZ1mSvZkwAb4xgvqqLBAiFC9xo",
  "key1": "mTub8kQWgmiRq3hTGTubcgPEiNHUErB1HEjah5So796Jt8mCR9xYBUPbYkDp1ZwUocHk1CVUr1i95QHuEJF224J",
  "key2": "5TgT8MMp5AZS8nUuLDaEaEZs32g7Cowf586KBtX34zk6o1ma58MxHqJi5wuFHJrX9bGXzAK4zQ1ZaHDusxzmZEMB",
  "key3": "3y4pTDeyG3NQvQRooMz5CxcmbbyehXpRNzQS88zMgEA1byeFu7tpj6zKvQqc2jQpV9sameE9jZcmT3XMQUi7n3pe",
  "key4": "fPm1aEyRpVuotNAQQM74372XrhvSbHPqKdkToKiduiimR38Tzp7ZKR27T13AhiyGSNgLDaKTCYyD6WNvM8iZGZK",
  "key5": "Fn4oorYpcgRiyERr4rfRswB8SgavsQACMF6cuG5yTtSBSvShvyyoz9GYho2cSRPMBxX26fJm5ukAHLAmCcvQRCK",
  "key6": "4fwiZudY8u39BxmttxWtFfX695XKr44Rh48JguTu4c8jeFggvRpNqFxdwyjQjM1unwWS8m6fNVin56KsHASt7ewS",
  "key7": "5tBXWSpxU5bquHoRZTFzPZDPWazK6aFaN77KMwF5jk6V2DfXqpYLHc3FkaqBvNQZH4D9p3gkAbGv4SixjYg2kksU",
  "key8": "3Uu5iUFMWLacGShUKw6x5ZJJAAskTTkd8UMLEgebmJNcVJ3Gju5ynL5jTqPzdBYhDpeegMeBoSs8xXQwY5LoJ7pf",
  "key9": "uZtDPB5UBPoSkxUZ6NwqA12AXKA51pqAT6hSGyHCkQoSaQFf3rDL6UsfWJZ4Rg4Jzd2ST9yXfaiB8FQawHFwJK2",
  "key10": "uDzJZCP1gou5fcV8mFi579yjae681mc7VwQE2pA6ywoHVa15BVw8j4CKvhucP2n7DgfYdiv9kRR9cGw4cbfttzV",
  "key11": "4KaBCtVUTp86ATaCGJA6yK1FRUaaYuXbmaEuZGV1st2Q9hRDP1GSYPQhnef4K3KNDESZPn4PjYGLNu66RHoYLuPV",
  "key12": "BfS7cZQvP3JCK9u3npEK2zGBif3LvkJTA8kvXDs4LTHE5yfH6p43AXK8yRS1J39L7ctbAJWkomUo9Gi1SqZJEPU",
  "key13": "5BwmypPbsPDx9BEukn2wpn7uS3E4GV4V3G9r4wumUn3SJmNNgTZfcJwjxcPZ7X6gpqB3aNPxnpf6AL2AsP5LQjFj",
  "key14": "mJFsS77cr1ujHhioqcSAUpR8kmVE3UrMxqMqm18vZVLBhRYWTR7VwWts4VTGDvGHHBRmDsZ68DRa2SwR6DBxKAx",
  "key15": "E1DPAdW679xN2WmE1bT5ZsiDugK1GSVeVFcvXtGSUCBb4xdpZGRfCm5iCBW9XjuVQrVETRvfREor4TqNHW7k6Kt",
  "key16": "5Zg6njCb4a7N3ZtFC9vuSefHbTr8ncsamt6ZfmhLk3VDmGVaUqxnT9ssgdtTU4a1Jw2jH2Gvyz1RviBMnzfjqZXt",
  "key17": "4FwgWKWg4yxJG2SYc5KkNgCud4yW24N56Sb9a9y84GvY5jizxThxWYveKD3hbMZWkuzQKtaFvYPSiU7fs3cJ7t8j",
  "key18": "55k7F86C9N8q93uRed5yKDhaVPnyKbARACSUBSr4WGAuFmYa1FpcuqrqGawVnbsR89egWiq1vnUdP4NDGaMaPigp",
  "key19": "66kkLUyNcdzGLqFmh4XvnhcqAVArSg8MMwrRNGmTz6Agky5RYbsuvR73aY5S8DX6mSTDZ7M7JAJhiGpDYnPq93Td",
  "key20": "KqWavZ28ouz7kRfopL98SPAfHThei1WzHRbdFLufDr6oJEkwnbZsdmoLNAy3EgXSqNiG7p3c4TaFdzXuviv9SjX",
  "key21": "3uXWQFq1mfNftGpVL9B9UoqtJ159szppuj5kLFNMjxk9iPkBvHJRQP77nVFisM1x3ZQAya3C2MQv2vG4KJQNS6u5",
  "key22": "5dbGEAKQE9VnEy1Bi8B3PMcEHqtbEfsB26bDMbreNDYrsNsv1Kj8N57BnUhSYki2Kwqf4EeC3jPmML3nNPWSUKP4",
  "key23": "nX7tkp76AuDu3Wu16Y8GMvUdPsyukV51SkN4PZ1uz9BZEg9AHuFFxtJjevqS95ZkCTEtpaMFyQkVtias73hCDiy",
  "key24": "5i8LPP7by3L6Ssn1ZhfpkeQceTuub5zGfoQthSFuUmiA7jDUWJmUQoeNah6C7jSJGkSam2YL8G5N6zoV2Xrv87xU",
  "key25": "3hKrZrRQCiXdgJJHij77yK3if78MfBJY3ZugFYeHHT6P9ApbEfawMXs664myXTFpxju4VBb7dkSia5NkqtRwsB7v",
  "key26": "2zoiCkfTFAhktcYYC5A7SzwSSBQRj3hSMBeZR1bDDs1fH5ovJ6NqDAVvDxTuzMTEwq7pNPTGkh1XfbTy3xxRQp8u",
  "key27": "3hYUFPcvUUmFR2bXVRPdCJmyuKB8bxKgSxtkR637WGF4351JPQgVHnM2rUDLGL5ZNy89QxNn4EW3pVGjbnczRoHv",
  "key28": "4U7n27baPFPbc6yvNrfQvXx3yb3hN4RynGVFP4BiCCBYW9KrD5pnPzCix6KzRb59dmZJs6nXfwYeHuEMaBAiyp7c",
  "key29": "3T2DNMPVaLRvQ9cAexpGkAvQGWbZpH7HEh9sVwa4pymqRXhZPPRqKwY8hYtaU1vEUdHkfqEz2ivxQaYLESRe2bBV",
  "key30": "2DHmpCTpD85DgtpmzVDf3TUnJzARHz6XgBtKTA8iLWaFexPKkwgpVpMqAXCGS9pEA8dEow5R5sXvSjx7sG5FZwgu",
  "key31": "57sqmrpd1uDzxu6XkFehwJ934C66GrUpDT5uYwM2swaqU1dNKyxtrGyM3cqH25LAbS69fjzHTPJw4LQuDkK3sdNE",
  "key32": "3LGvVR7uboNr81H6CFsv5eTBsZNWTpLopDzWaaEnQHzSRxzEorpiwR6nm73NAzqeHTiR3RFZUSW8JkQPuV8KBhbb",
  "key33": "4KALTVvpfqXoVH9G5zJCZHfK8aN4aBhaSguyzRmNfE8tHpfKomF5TFvgeeKoUwJ4mVPaxd1g1FwhKyBGXBGybf6u",
  "key34": "2UAZrygA7DEfKjVX4esrU7ymZdnwNP2L69yQy9kbYMU4gVBZXdycKcJqDkUBcDHbrT4Lst6X8NWBNAY4Xp1DSFBA",
  "key35": "2hLZbKMCBz16k6N73kjNxJMTYtM1ZoH2f8FXP8MYqiWLsk6C8G7FPaLpkL5YVkmrAvPfyLFZymafyB7bKWBNXKPs",
  "key36": "PJ42qyyGxwXJrZp6P17HmCnLCVwhCGA34pBoJjT1uRsFKdAtiifdVeiyE42rhrnphpor8jbTrWXP6ivjvsEE1vX",
  "key37": "DnqoJRDrJu2vRhjHX6zxTyDH9ebrhhYk8YHsdVagJF87QwSz8P1du4THLN7FxuouH1xrM948itTv8MBHFRGKFfw",
  "key38": "2J9Bh2otgPsa1m76cqE5vB1WqtkFg39ZogN5yrsjtFBeG1KpA4tw84fxAVzLMuEXCAfU82ChkLiaghPW8RdmBP9V",
  "key39": "2eVtdgQvoE8JpCBiRoBcPhL9uWRRFa745oiz1Qf7D8yoeEfgifrBVgQnAeTwvQExgfdPVQCofaSmoyyXA6fRsxZk"
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
