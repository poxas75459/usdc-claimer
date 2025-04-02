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
    "PJUFabSjBsbfPhDJEC6Yvh3HKmksDLm86NZoUKpC38XmQp5AYTvqvP39EzVRhQgAvPSMDpMcdEN35FbqeDujo6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M9HakQFWUp611sLzZZCEiCefmunosMwifE6NLQfbewWtqMS7rMtNWa5M7ssg5hPocMoJsAgmM4EkRzTgwGFTzkf",
  "key1": "4rWHNVa2B6yLkerUiDF1jd3tA66qW41g87HhoSWD53KcGHhmxs24PpFJUZ9R9v68UuCy7gJZVE3EjT2ApCVpq3KN",
  "key2": "3Yag4uhxBk7MFdTXdxEHsJvCcRgjGLtQk6T79Y7x1zut6K3BSQ7qWFMSjD71qPrRCf8nARXnvzoNa4CbTGhmiREm",
  "key3": "5iJebMetZwST8fe3zm5aPDC2S1Smwng6K2ezjT2Rot3RrSyJukc4bNgFg9afoWMiqoNCrAPP87nfp3j6TFdv3CRF",
  "key4": "64iGsPABjLt41b82qUSmBAKm9p1uT33zvtGu6eWBQEMSHC1ik823w8H5JWfmgoQaS3D1A8cmDK8WSLBvpgbNRsmt",
  "key5": "v71BNfVJDK37c45qg6MDshREx1cLUmyffV8kNAthWHDEPKc4xyofBv5BNuCzjejGz4UTPzh1yfaQ3FWMRSyiy9y",
  "key6": "2a3fruSixRoFu4DY4ZSzab4QhkBhCmEAiGe56eWhJ9qWzNbZriUqcoZBQcfZuomHNeZiQGfYj6kEdeKNcDfjLAqi",
  "key7": "32JLfdXJJC9VSfd74t82r3cyy8Pof8upPgnKa6PNxigJuahaiCS4RRRMU8LTYx3QbLf7PFhAdsVSC7TYaXbTsqQc",
  "key8": "21SKiUfnmXJnyX7y8bvRkUEyMSPQ8Jkv8LKhjRbFSChpX9q3ZByhqTiwGsKMs5Nyg69FEuZZmArqi2FmesvVQvhj",
  "key9": "VRPuhsHBMTCw2ZN5kixRpZ9rkDdN7VD17zWr1sNyiAQv52YYSsnZp8R6L1sYxoEx8WxypkkkkBZSy5wLXsoBzJY",
  "key10": "2gVVB5YXg1MMEbtgghRq19PtBwY89EX5uUDrALKdZRA9djNh3FtCfLtmdYUCYu62wQnMsE1EM6AGxYLcpHFFeR7b",
  "key11": "2W5rHfLupafhWa4DJf7FAv9TJudEWwYtfiLxwkP485GEt42Zr1A2ZhYfbQF4bFWddybKJjnHKj1RquCUV1xctrbC",
  "key12": "5xBdt9jJhjni3bLMUbeVCiEYntko5gFDCXTnK6r2EbQTczivhxACGzwNvSJpAiYEcufK6Jr29FgpbLmgbutU6Han",
  "key13": "2b9D1eQ6UpuReWq3qhtiVeSgEu77YyoM79wHzxyECRbKrUrPUKdrmHiSHCT9GyyPEYbMiKqjEgwhHEYfS4Qy6np1",
  "key14": "5E5oW825sRtJ41wa8N3eTyDQu1hVYXkSgQwtJ2Z4aMu84Bi2f1qLK98MaadwbnUvUPze6Qz1mLpbVHAwDBBQFDgZ",
  "key15": "5RZygE2TYF49NPUy8gX9QxtVAvfLUd8usoh4GogdtbybuQpBDWNu2oKPW4tpsVVuhCu9wZ2gieNsMxXhbfF6paxy",
  "key16": "2B9nq8bCPBwKd4f8NSAogTeCPsjnayxJHUictoPWNeSgNZgwiHvzkGQJrMDhHueBZL99N1ZZ3ekjeZE5ARZS1RC2",
  "key17": "54XcnEV1jVi7xNXQ7tf3sokjQYuXaGiz4p3Y97txGmc7LX4r8VYkdejWkcwDXvJep7NNBP3UQFfizT7bSwQMxWKD",
  "key18": "4rGRw3rAaNsKccCmMqCZpw4ho483o6G38jXGXmqaoPJLCZ88WgUHbsYUubTsSoxcsYt1tQJjt1oCZNsp1Zc1mQd5",
  "key19": "5JgC28W1aSReXHrajJfUZFoCQBdX5VaxHomMw9R95N7zESNEUQLt5PrzadHzeFCs7Cdz9D47ztBa29Dzng6nMPbL",
  "key20": "2GfpAG3UmsLHcTWXwGqJPZZkE9MyyByTbtxSrmSaQabDYewmMG7QVwKonyqmLWqBgM3TTdfb7PCECcxTDN3EyNhU",
  "key21": "3Zd8TGHXzwSj5Cptpe3jm5232nn1GVENhx3Lg5gDsSFknHzwDpAAmR2J1ymsYQ3cm4Gn71q1g9CaYQzTKL394rGa",
  "key22": "wmEKqzVjsT6FHWB9w2c9ZD4bfLTvwSHEw3piqcow9LaQqErVNAPPAxejo8tabY8f7i2Ma2d7kRjZMtcHUNs23rp",
  "key23": "3trapbCwjVHM7P5TEjUCjBHCtdDji9aWrVPQX71Xxu732wjH5fL5zNWE6snCDfoMBu1tkUXb6Cy9KDcVQ8VHBtBm",
  "key24": "2BX9g5CMjxBZaZHk3NN7oFH9fJMdxt4iXiH65F2w5C7ZGLUAzB4DEnGuEtwopZJDAgQSY4pNowBXgU8QUVxmKxgy",
  "key25": "wsiKvAaaxK769R4Xs136pvoZBRkpuhCUJ97JjQUQ8HuQL2dCbvjiqPGaXK4YknW2Vw5MLyfR2HTX4b7qdozoe9c",
  "key26": "5324pU3iF5Sg2N3nDeb5ksCbRcxD56FibiwUM6qDHn3Z1Lx8dapqP5JAXncX2fDpCMdTUhv9pa6oP2tvJLNZwmod",
  "key27": "22aDGjtPraFVsQB2SbivUzSDejdaEdjxvkdzzGain7PS39aV4vTRNPiuP92jwFoJNzTEkmXsACQTiuR367kJAsCe",
  "key28": "2fqQNRtnYjeH7eQhnpmBwpqgkaUrLUcx4wwMwHP4rQPVoiaF7jf2nLQFJPUzchKT5aKWSf6FYXQqS5nskH1jJpgE",
  "key29": "44CdxWy5HiigREyeKp17XAiZPgMYTCxyJzSGMFo3xYtXmpqcnuEqAxeymFVgzx2d7pcx8iZXsB15LhzQDJGBbJoN",
  "key30": "2UWUz454jZSgpKD26vA3zDTjSMFPRwyEKsn9t2fpLihwokeGRMyRjThUdcPHbhwcC2CCJhNL3BMFdvujx4sxSnzJ",
  "key31": "4M8r4SUf6KST87NXWP2vr8V3BBWwh64pjMQbPqWSZPZ26TqMNKBjvqv9f8f34uY1VXj5jxABf94NGLUjjVR55jya",
  "key32": "32rGQFRuyta5wajDcLT7L5VzzmbuE1ivNn8nMWKB3yw65hqY9U6WoGt4DH9P8cRhz4HVBhMnsg6PkA5Ykn9U78r6",
  "key33": "3gtnevud4YGYoeFrgRPjQd6NbLs3Gm4no9FUCZvCtHdzUadYQRL7pinxubFbi7WFQNmQWDzgKgjQeihbucaaWfVc",
  "key34": "496kqA584RPDSKLL5WB1uL4FaMBQX45HT5j175vk14qSKTDVD5yMpMLZsfNoVLFx4JuypD9hqrsTzYS7ksDhvG4r",
  "key35": "2SE9c7CnBPYyetHuEjip3RspAH2u2MXAoNrJV8SPeG8k9nZUnQjSy7hF9TK92fTzyuRdjFqCYGw31uAha1ZFqhe1",
  "key36": "3iuSB8VKJbNRsYhw6hScbYMpgzYPh3EajmsJEyPU56xLkUz5VB1RZusim4AE3i2MNyc56eMx3huEBteps8aayGh2",
  "key37": "SDVrX6Td7SMHxyqTTiiFtLWsHhLnmZicxjiy1HBRQL5MADKPi6bLzCbAJfCJxrez2JD5jyHtc3tddEHE7ojK64z",
  "key38": "317uQcHqrqub6Q3FhU8g8bZo5FkFqCcaLz4ZgTb8zCPhX7jg1ou8kokZBNzYG3XpvwrhMQgFimjx8CY9NGHuNX2B",
  "key39": "2akZxSwud5jpYzsEEjase5LTwFg6x3Aak4qCeGoXr2tAjR3GPY2NDgkDiqpZYgENgjTd8Mbg8zyu2qb2GtnqBfAT"
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
