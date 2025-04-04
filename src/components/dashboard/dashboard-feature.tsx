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
    "2RKaD3ntA7MgFV8KfRGNzYx5LdYm5AV46XbNFZyRzhW7wAFBybkCrydRKSh7Bj78RHw4XAoxpgGdXxSEs2AqJcdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AHNbZupHBjN52N5eXzHaQ2W8XZGjqZ6Xhf4iZCP1y6nczesNJRXytvdMcYpKUthvccdjyhMdLGHAQnSb8rSRWJu",
  "key1": "2Cm6nQqPAb6Z8acUvVTJQb7Pkocv2zZ5V6kRVWBvXa4YwzYqZ9ujuwxQ55ttLF8Cf1qB6ME78GotJ4hWX2GQFyHv",
  "key2": "67qGnmZGqjdKQ95pMxEwiVukhGpMK1LEJCQeRvuCFLBYaKQV2Fr4URdKKTZUXihXZoMA7HAd6xdTMQoNgxqC614H",
  "key3": "63MmSDPs1DGpG7NhSFSNC7VnyWUz4JLTxdE4tk588xwC6ZYME4JJFbJXGPFakKQmGj81t51nHmAspT5BqB6bQVV6",
  "key4": "kyYzY7EAXfNjbauoa8FU1X8HGJuvPfwS4e5uWGB7euQsAtk1HLnE3obiE8HWbPtW98QQV4KME4X2vaADyHU3Waq",
  "key5": "4dnb6JeMBpEi8UpCS7dvY3ka5SmoVzDvtWtyZ2aTHx2tBcfAqUjGLnBvPoMDaTvrgecvyhRYyE55k4RqDxCBz67C",
  "key6": "44noaEipWaXzZtuP2sMYiyMsTAzNkC6vHVehxmtHMMdunDqiWiNMSe3dSyYovgVzdLV6YjArA4jbatAY49ghH9Kh",
  "key7": "McLecU1WoRcu8hvbX4EShv21RsQXwSzAx4UTED2ej8Ys62z6eVoeWTQpjDG3zaLLX4ynyYK9GV5tYjRhTD37PSA",
  "key8": "qCn2dEnuvNuYKVYhkdkHza7nuptdaRYCqgTquzsNst3g7MenxY4u3esEPXvz9iDtAeBwuLpWU6PbPdxHM7PMXgN",
  "key9": "5Shif1Px7itVUN7VaV8LHSd9M5txdX7r2wyoLqvEeMXzDwecFdVFxq9ZBCgQpSKv55hBo4bbZ71z6UyXiK2vphNk",
  "key10": "2rUB1H8D2Q9mPwY656eDqstrtDWqN1RhLC2dj6JM13R5AN3P2v5XuboUWb1MSha9tdY884r63L1pwQo7616bWtK7",
  "key11": "2UW6c7NpKjcN4k1RszQQCLp4ZFavKRof6UTqh5YhJnm34VELPAwpcMqjssc2BTnQtjnbPkGfzYDNo7vwNDJ8xBts",
  "key12": "4Y6Nmwkt6ZRXGxC5H8P753odG8JXwjrxDEbutJz9XRqYu3WB7rxkuxx9D3heZVMTUEXvmv4PTCcG7GxKz2RQCuG8",
  "key13": "48mVUq1GbbGjW3dHHLW6ymRcNmYXPfwgLfANcucoKM7XcTpNrEDCCSLLhruyWyq4E3aMgRjphWff6V9AA4MnzazD",
  "key14": "3crV1PgAn6HzHQ5AtyDH9v7iA9sMtwmAAWV6irFh5ycPYmSHnFwbQvW6i5uUe8P7GxNU3j15vfGw6RTFE6eH3UNW",
  "key15": "3yXFRGtkFSEPwNi56u6itoxwgxtTh28Cvr5GtDYbrQs9MBw5p2cPTS77uFc4D2C8Ku74XVnftyf1FiWAY2RJstwq",
  "key16": "4y3RB7NSvneZsvPhoRUeaNnsx7crnwooSHodCpfqnbYCvGCozkixHU7doU1FRTMDL6zs3qpFZ2yztUXQVw3bGUqY",
  "key17": "6WQ7ZZdDJm4nVNbNijzUZKtia8Nt7iQMccDNH73Y1EGSQBr8Qe5EY4rUR9snbdWccoBt6rmqW4UshgqspnmNBai",
  "key18": "3cbVQdcwtH4NxcAGTop995eALXpQeHfLuBtcM39TqTivnHvNsMvxHxsRKWd1VBAFq7sMNgdNzisJeBPH16jbafUd",
  "key19": "5LpjdeikvZEAHigz2vzkN2g8Tey36QNXTg9sgbPFjJ2WEKjV2MHC2oEmqfVHQ3YCoyPHe9XvqxtjGvUiYhoCudsA",
  "key20": "59x2U4kgmzskq2dzRbzupungGAfo1Bw3VNgYmMqw79yRcw16sMz3agMV3NG1mX9ofTP46MNqf7smZmucK7vVmsK7",
  "key21": "3MJTmkracVHk6YCJ78bzdZNcwcL5yRaS94MfeLgcFeH2uT6wmmjwmvC4KDMFyTcGGeNq3ijCLaTUUNodaSQ5vRaW",
  "key22": "4kMtaPr31DvbAuRhcgTn1JKRvSkhr8V6HFFQCR4nJg2Dv3TrpCXeuufAfFaYpofhaegKfEdgjwPU2VuhgizyJgtX",
  "key23": "3ug6gPx2KfErRideBV6hvXiAhvw817p51Z4LG1nkNTvMuN2ckCskBfjRFwbEe5qhMea2fMvZSZNsDjRBoDkrLHVn",
  "key24": "3JdDwXeB83J6g59AdtgfCMNDbihBKewK7ZKwN1HutPuyEeU7PxwneN87VN9RV8DsH3WZh4cmpkU6hVQxRb7uYQpW",
  "key25": "3QouTZgrdYmhS41d9vTxha3oJ2y9qZnbBRZ66vDZ5o6spF9RVYSTHLzLBertbcqnv5U57erXpMejKeeXfYoS1k6E",
  "key26": "2DaQ8NUqYdtZLzvK3rTDr3po4hbw6jfkiY1br68Le8KSxEDmBrgMNhq39exZ8iveRFv3zQdLCRPyRmxasj7cBb1X",
  "key27": "oePJ9tLWbvA7hvBxj8wrkzXGKK539aKA1a9pFffzW7qfaq1aJ4K2yLd1jeH66XKFuZCgVs2MFnF4PKUX249Phee",
  "key28": "zRNecUEqhw52ff9vcR6QfWv2SVfzkw8QefJBXgyKk3JMcKpn2mkgLymu5GD95iMbrHNcvces4L6FWJAKNrSVEPA",
  "key29": "3uS5H1mwQtxJJF7SkfXm5mMYKEcPowzWjoCRT8kTjYgrhHbJrmJxeZmqpvqP6iqcRExeJFM3i5xWSu8m84hgJXXF",
  "key30": "YW5mZeekHTTcU5PizAe7zzpNb9cTpRTKsznUdAz8EkB4eWkJeBPQjV7G5bh733SLdS5DaUpn1SWjtcSLukntMdo",
  "key31": "5ktLfumRSjqkyVesME7pbhiom3mhirKJSnmMrcVQDBCR1iU5LAopc4FBqfsPkSuRNFJxn9rtrvULW5fvG4qrbVG8",
  "key32": "65Y84Gca7FgcfzXQS9auoGfffRK2V4AShETrfKoArXLukQ5aLCHPKFKL3JFMnuSUcNfi9zqvmxKogbhWyxotVjzJ",
  "key33": "24XD2c8fi92orcEsmukteRrHCUvmVQNb4USBBRiYtBPs7g2fZ9EK2gLzud7d159LkohaQ6P6ZfFKefYWncrFtxm3"
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
