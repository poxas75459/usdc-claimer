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
    "Lx4M91QdZdoHsSRMtTctH5KDUZnWBC9e6ib5EBjkecN2kKk5brFL4ENr39LS28mM2seSpxaQCR6CzHNMsGqhHUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sv1gicD3CEapeKd9teaXyWvpaJWXNhHzoNJbrBGU6TFms5C8L2TjqUEQ2rWjT6dRjzQQjLouHx4DQmBHHFvM2S2",
  "key1": "3H45QGeccxodhK1HeStPmBvftqVtd9jRZq7825rCZAk7mVacNjxkYjSAmjRYycu9QXQ7AbiQkj5CsRW5TBhw3XEn",
  "key2": "PAQ6Yj5FQ8HHnc4LgjcAPSeJLNuK7xFJbaypernB8xP5PX4xfw78HCu8ToBUbcC8kg81ZCTbmfBHYjQAcsPHgPw",
  "key3": "ghowNB2gCFiYfZiYNWK9EBCtvfmTmLLYZFxREsS4e6KKH5L7Q1E4xe1B228vdfShiNAh3bV3hT1thpBgAd1gTwz",
  "key4": "UW24JTyiPEJhDnJ6GTxBwb9CFfa7zwRKgZNfyq6eCJfG3FddQJQPN4M19AiTw2LjDj58ByCBLEfiadLbNc9DCmt",
  "key5": "2Vexp8jrh45v4cftTNb4VpGHmiREJXkpfLCH6XbZjx4QsCEyHZj3zitR87CEu2yyH4SPbuwUgLnPQUKnBTWepd8s",
  "key6": "4Nsg2fS7WWNTzze1CeERWg4QJbXMAp9fCEFcRTcNZWskUjLiatF4rA5f27ADTRQ8tsZhB4P9rrQC6j8trzgPhHhb",
  "key7": "4XAT9uzcnT8DT9xUC4zkR83MtnqwiZPeMVW86UKsTkkRitkwPUTRTbtWsGnvw9Wj4ZhtBjU7NPVFpJhnYg8k4Rrt",
  "key8": "2W6yAJ3orabS1gK4byUiq895feLmtBfpJQq6CwFQKYjVtLFUTtjdbh5ap8vFngno1TT7Q9MLKitY6EEZeB22LqRE",
  "key9": "5Ujocfb4TPbWHti15phjS1z4ByYmpbK9U5zGE1FrmRvQwzoKx8imEQwYQeNn6P1DuE1MP1pgXUmPepZzHcQAWjLf",
  "key10": "43x28FzcPjx8yCH2ypYMog36axmrHwT5TY3HEbCJoMsvvyuC86oGcSAdGZsii3qpD7VbfZn8JpPPkDkbRKveqHgH",
  "key11": "4CXAKMc6HAWBKaXNkusbgzihreNxQDVqoyf1XF7FXLTkntYaai2D8TdfZvbzM2WesHVn9acAreNhSpUYimtiyTfJ",
  "key12": "3UTdKsR3f9VSmwVgssqo1haLt4gp8cVmUMJMmcvfLQAeKftmyawZMvzUUdYod21YmTCRaGaLbkph2sSACwAgxDy4",
  "key13": "5FfuBXBhHbSB51nzR939BebjwLfN47aE3zwEJusQyr13MoXjwkKzcfGoskk46nwXmyktM3gWZBBQDhEBB4Vm9SJU",
  "key14": "3QVabeEjioq1BP14EvpstQDtmiQ2DVFSihGB1Vpr4Binmz9q2gXHZQ5sru4igXT3cadX4Y1mzoQL4meTCiEQJ5TN",
  "key15": "4SdqHUwWKpavvseaoMDfcdnPyKt7hz5CGCs4RrqPB4hcdSRnjB2At9shNeBpfKoPzZHDUwvotkrzYUt7FqzxqaqV",
  "key16": "5CgFJeAyw6EWY58XUtvaC4L9c5X7vB4qz1sjUsqwHJ4YUmZfWrCPr5tGCPxKRs72EJF9UtjmqkU4fn6eTWwCCnE7",
  "key17": "43KuptQoh9REaqv9VDGzqjTiCsc1TPhiaCN6iQAEskPTURykTs356EqQHReepBEf4x41ZtH9VRysjNV99XEp1yT1",
  "key18": "4nz8xeCBFDDMN7jHZBU1YHwpsXfAxBvY37Q5A9YoZiwb6zVzq6UBPLWDoASdsbwgr2Z9m1sC7BqCPvB6zS5NSUL2",
  "key19": "4oAAJAJiRPUkDQDbgyn2oNh5TUzoveLCoUdCQ56BXRJjA5ksh5XxUF4sS48ndZ3M4LSe2m3C8Bcwzt3R2kYubMfD",
  "key20": "222XyUgUdkksqnsBKYjL6fPvG1aWrE2MJ67VU3iNteboMUf4DiuGCcisc1jsz6Y5ZT4WSSHJ2bZcqMkKnvsJCwoQ",
  "key21": "3fp4r4aWntKdDEmM5ZV6m2eNxvfDL6cVuN4bb8NYBYS6LvjqQUoS9xKczMLioKtyxfAyjTDDVdaiVGmPDfpk8qMK",
  "key22": "25YZwFtNY1bj3Tv4jYgqhP71JHR6tnyRB1tfRT3qcKBCkMNUD25Xx8a6ztPE7ajTTtT7P6CGTw7PT1VHnenHpd4Q",
  "key23": "3frodv2MBs9utjdmNLzBUAijcKbVgnhk21PzgCGruhcXYWqvFYVg82CK3PFKYKnZKnrvHN8YsEsaPoDYSKtVjQRH",
  "key24": "2XNQtFrAYx6ZQ9rnrCaqLbzB8WdsKwZif9YdeYfzaN8LLQwavtLrzvMB4EnxmcG9kJs6DYujBJktiEQ8xotdnDMW",
  "key25": "429k8zBdCnYsv7kTWsWyNJ3o1oQEqmWpcM5VuK9EJoSw4oJaW6GjVQub5UbLHaiZGRFxxWrYq7pLTzHxSqRoqkHQ",
  "key26": "5nXwz3zqExqGThXT87f1bCPMyLpoRNDFwfyebQoeGfpDxxBorJXzLUgyncrWdz7FVC4UnyYLrKWFgQA4TpUrE58k",
  "key27": "2aVARSEChWtaWDbMDkJ5KqJudq1zABgYfWW2aLVKt3SaBitkN6DutzUBnusVU8FkhfzJxwgodbnMZuPTto7XRvBP",
  "key28": "oxjkD2Ri7jdKsGQEBGTXAZmxUpJ19vExMZpvNVMKRV7JMK5MgH53WSgkJ27UkQfsJ6pmwMBFruBohGYby2YsB3u",
  "key29": "2VkSfACdZesQZG1zZch7ngsMSZgvzunJxRGYCTbSjMXSYteLsAaeJTELF3sLtQfsrJPbCtphJihehy7RMK9r4moP",
  "key30": "3LoXtQ2dHBLSbf1dXyqa4gQio2AZwKxBzfs9QPgxjHBkTApCTsTwgAoBW5bKrAKFjnCWDE2ZuGRRQVmgMAUSgMFj",
  "key31": "4RM6twibiKCt9odRucQK8Yc1S7MPYAdooBdpSVhZ2me44fWHyzAjMFtSVeNnbrtMwZgEQKvHLxqcZBwEPMQTVccp",
  "key32": "5KZcxtaXtFpAsxJCLUGUWxFVzu3qdki8f8siNGRBs91fxnc24obty8T4QxRdysaGBvE7aiYAGFvpPkPXEzntWBuv",
  "key33": "9k7JrdNyzeW89kzmXpupG76sUNkycHBncm77x5xvgX3p16uqVgKisabQzFmK9Bt3p9ASg72vHtff5CvJGaHhYVR",
  "key34": "2b6xvo3AmtkEFeTjz4PpsCprP2HWsvB81WxLDkamaaAXbgTmztuPGt9n7GSwsUzTfzUutvKMFcRL5Xa2CQofVdVT",
  "key35": "YBxduY7HNM7VQoUSMoJv3tyLwRP2UaaAPyqMzR5PGtWWrVPzfuiC5K8gSv57WBzHGmdM8tSTRgYUyWq9c3eiqKV",
  "key36": "5mSUkxf1Mja2RQbd16mGwyQorMwFnijQr3CK7LLm8AtanYoUrEoURVazKY2YujJ7GmPBjiQjVofW1htFD74rp8vd",
  "key37": "bxAjph3gFzuXwghpTVX7uFBrnEjjspfjFr9JZfB8iHqBbgTiEQCF5i5fp5kCoSLNsNM3n27gwWgjUpsg1dEzDtU",
  "key38": "2xfoD3Mic4q6HTs1Pgd7zdxzhrN8y9eZ8UR1DkrxvGqDpQfAHDiZ5AgNzaXSMeYZ6eBfyFxiTRHUrF31ri25MsLN",
  "key39": "5XVj2qxBzcjpCWemfqANubnpU1cEbadUbcaCJxCfhYrtQ1CgmzATui2NGahwyzrhM8iotB5TMvueymi2SsgHeve6",
  "key40": "4GWDmLacqn7HjA9eH44j4kFAr7nrgybrbdAgpRQDjNTmi7Fz4DFFbMt4csuJmEbhhWPREKFPf4WgN7Vw6RDxh3bZ"
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
