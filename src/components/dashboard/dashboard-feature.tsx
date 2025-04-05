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
    "kqAbq74QzBUuLUphk6czK45romC9k14BeQEbEJNpQpXRwm6hMP894GsiBNSAwFAbyQVdVZ5FyBDo98SJyPMX3eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kQMVYDGnjP47h3yxwrTnSnxhS2vRsDnTYYL2T75dj9WMRMHxWBnZ6Fd9CSBesEkPvkw1F6Y2YN2jSXqD9iyPrr4",
  "key1": "5a6poAzpMmrd9aqd4EBRuRQ5DxLQKHkqGADHurmpVxMwG5dVzNU8eXhz4EiWSK981UiPWJQaXvKCMxapbEyyj478",
  "key2": "AX8CG5SYyfMD6Zx8UTx81zxvWW5zhj13SVn8qLaXCLT2A2tfaeKgoUmMbNAyTPYTkhEHY9JFxqgYfy3fmAzEg4J",
  "key3": "5mCuDuiVduY9FVjy1ZSF5gLNPnokvAKhcCRwXzJsk8ujAMsGSTknBEbhJTsiu4Jok3UXTUrqSR9NPZoY99xQB8zE",
  "key4": "39AwcUo5EtknbSB8WLurV8s6SagdSWJTN4U29Z4tJi6wpWMqMibNRKwstsZwBqsq6Fwmz2KsBpLoc6JA9FJraRGE",
  "key5": "41TBoQ8p62MjmunadtrPPkq5xyN16Wi9j99zfXg4wUdfyGKUtsFj6ZbvQFnxZpk8jEJdPXZnea9wY8mLVwgpUoh6",
  "key6": "5JPsJEFsnQER2hhJK8NVGcktjiAHLi4m4Vfq3Wdxz9WTG3TWnn1JvVzfXiLR6Z2KPYsMCAkLSKWhmE3uNcJrzS7e",
  "key7": "4vnErMpFRZH2CVrTzjjyXzL2PCmpfVQeqoi3ppN1n4y5CJqPVgWYkBaYbP4f1XpbwLXwvmQZnhJxTT5SUq3z26KX",
  "key8": "iMpCJ7qK1Rd7VXQqk8bSVRqKCWETxjmYohK1quTK7L9chDbydyMiekPkcqsw9inzAkM7bHS5iHkTBZ3NMpvjVDB",
  "key9": "2pagNXX9zoBjbzHPK9LUYuGEeiDc6dk2LgmvmTowSfFng6FtiAhhmG144cvKVkca7yAi2Bq7XmFLWyNVQEEhjAQc",
  "key10": "5NtHhdMYL59sGizbVpbXvLuVPKPDWCry4PAPMy3BSVuCsJ1oc6UUyBP7RWY9kLDGWh4tW79ymDBMSASCkK6ZtrVv",
  "key11": "2BqU4SsYtXcDfVAJE13BsehZMHk9qWhhrgiMtxWotRCnYd2UQmzeg1fBNYBfzQmqWjfHpGntSSuihWRtN21pCEMg",
  "key12": "K3EMtzRBnvzL5HuhaDSQ99m6QhvvC5CUWoBMwoDaooUucExGnxHMbD4d6EsvJxxwGQ77Bk45sPbPtjHDkBWWVCU",
  "key13": "8r1q2u5DQmngVDqBmxbiELcQ2jU21WNq3xSaVGLcodHwJBPQ9myHxi6ewb611um7XZ9a1P4ZLeAQZeCV48ysLrm",
  "key14": "4ABSzerpcUPmjwHppAmwpTfWbhjB3PUfsWBNTGy7R4NG1o4D66BVFuqPQ1wZF2HGF9RdRNFxHYdo1W6rBzV3VYXf",
  "key15": "4W967pwUjBJRF8rs6bWH4UsJc1DsF6JuFNNn9fpMKXhe1StUHjqV6gumMi5MHNcuUH5NEAxBE91uru4Lhhxutgdc",
  "key16": "rUoKmmDDZkpvZu3wL1Wo2eUtSHL2EKpRPMVNfs87HqLwTJjtSEH7EDYhz6BpbMzAiXtYACsHdU3dvwaKferNrAn",
  "key17": "517nsSdRVh9Hp17pxGETda2du3mB7uU5FwPZe5YjteGQtKGEG4Sh7hb4oQUitR6rX9oqhbjJbFoNpPR5Ef4XxsUe",
  "key18": "5RAeQJJcuA9hmYWeL8VgktpRwPYMoSojBySAnVyRVeZkp2XeAw1AQf2GmkPVmuVtzgSyHcjx1kPDChdp4YSoXac",
  "key19": "5tQ7V7VLg23zVT5NM6y8YFjJMgD2QDuaVJyTj5qMRuLNMY9Heo5ZSkV8pvB8S1c3C6PoB3MYKixFcXoTXh1TAhhR",
  "key20": "3PeFRzEVX8KR4Ec2gvpDggrYeR9uPfUprrFmmqVZsYsZE56dbZzBQzQtCtsPnLq1fhpSCSsdyZWk3HS8pH4xFxS5",
  "key21": "4PGDwdffK5dZv1s8pd1ZqcbxN2M4jjM1z2jieRrmD6DT8rafkg6UMQnqLrBqJLhEsWstGwgBBrDGtyumeCrucwbr",
  "key22": "aPBiGSm5uuZi1veDQY1tpsLbtQpxpCy7yQbb5o5eKXWagUe8iRPYhwduRRNaTS2emUeKeDSf9bMMwaoS3qjU46L",
  "key23": "276q8WRx6zqJSME5vT6mb3eaFYtD6Aq9sLo8tPkxXxPKdBrmxU8RoW19Bpc68G7CfX3VmKUBW8ZLjKEgQYxrTS2R",
  "key24": "3Cag2KmG8o7PR4GTxPRFbtxh5A2DEmEmupffRkBGWxenBc4i4HRW4p9qRpwmwdSXERvfBRdBbUML12Y7bwRqpGqj",
  "key25": "2zsExQSydHR7vgE6hv8KuYVi5aYELWCTtV6HSVAsm5UxvHAWLYmsUHqja246vsRBHM6yKxnyFLpzb3CvMkFSmB46",
  "key26": "uzLaHF9SoJmVvPMgKRo6y3i2T8zomSuSDx93Zbrfn3aCY7uoFSUCvXeN25coXGsWi9RsyyBTUg2mFcMZqsUqoCp",
  "key27": "5UT9H17vxsBiyw73gduwEyrzv8AvjJNiCkNa5nrBWJbUF8J18pmQJQRjDvPH8pcqFFDpfqFH61uAVo6hRALDDq2L",
  "key28": "56G5ceTC4AVsQMk8CTEJC6EPhSDzhNQEE9QswCmhFAYcs4Xh5tyN4CFYEg1CfsbSwiPt1pjZPA3HFn8P5FwarqVw",
  "key29": "3NmiiDVnRoityAHPXiwt81cUtAU35AZnYun6ti59QDokDDZaXppTh41NYZHQaA1TNDughCkdwmuesC9LCGMJJzJg",
  "key30": "3yNaE8JNNye2kaoTWqPLuM3wdKbweQEL9q9aoYi1xMiDUk1pss2Y5fUAbSzCEb3TP5vCRMu7EirQGB7V6MMW49AW",
  "key31": "3b48yagPisz3UCJHtwJbxz4JF1X4dJA9CBYZxDjhVg1pu91reuuxcjbPUzSkbqKBM55cCkQMwmqtrWStMTLMo7cm",
  "key32": "cPUuFei6kcBuLXGXpG8KEZ9pmb1SgtGXQDhPx5Ssrh1yyqg1bn8UwCwSuwrsB9zZ7doBWg1z6YN3xSak5NkVYdu",
  "key33": "28eFw7aHiPA3NpUcw1ZpRED1RBQQYsqEH52HsCUtLNbcVYGVSftCeyRngtMyACg5n4uZyMDfmue5AQeH77GJKKQs"
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
