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
    "3yRQHEMa7cqxyhyaQZAHhD81Pghy3tLLyrbeNwZkyB3nBgCQRn4hM7TKT9PmcCW6hwKJY5SwmF9toUgpxcCUkznU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4auWXYkoHuYwbPdgEeVVbkiXvFChQBDwKDygTvPXbTiwV2Sj6Y5fzqhNdq6zfWK7rqNLbGEELY2zA4Ar712bDavn",
  "key1": "4S9DNKu64fWLa1AHJsGEcj1UjxhV3RqYFaeg6kRUw2B3uDj23ProfSyyYCLgz3ARPsHoP98ZHrckbNKf4WTcB1D4",
  "key2": "rLqfhiiT2Q6KePZGx6nuTRturdDoADMDejWUtq2u9kCsAHngV1NzmP6khsSv2xJLojKUXrFtJj8Ty1NagcS3Hat",
  "key3": "2BSaAv8XDug3fQiNTAecStFuMaMQb7yUsXt5GDmLTvdVecK3mTWj9Esfr2oCCfPrRV3AadZBrsAhP5MfFLDq8rTq",
  "key4": "4ropDZV56LckLe35C4SmLg7DeVStVotj978xnXHc2WmkHJxhc1sBouTbipb7bs88sWxnthUBdHJ2gb84Bf8tEJHJ",
  "key5": "3Md7FNcwGtBLEnDasz1MygWy3bReDkLyvEKr9c4UKcrZyatyjcV2YyBTp5di5P2jBd1Ka67ojVfnLu9DHAC7x8GH",
  "key6": "5wockdeNdVeox9HnFp5kANC36vkD3PnFR3kn3Aa7f1ojHfEXeV3M5wQBiptDX8mbUKgLQBNdUsEkt2PdP4LtA9HV",
  "key7": "3epj9eRroJLUzXJ3EdZC1dRNhoWKNubqZeGc8BRxitkCHzKui9qPCB227bEfKYKoEhH9GXNgFUBRYjNvkab4o2SU",
  "key8": "26Y2pysQTnEPeFVk9sdZmJYbBuaxkz1kK32pYobWJqihu72abmxeBAP3HmQ2cmpKMv2SUsJhBr8quaKCkwx8E8VJ",
  "key9": "5ucYgAFbnNTCcRh6KNLtiJ6w7qdvtR4DbJnWk6UBZqY51hdHo5Cy7k6CN9ZNN5ESvNKD2S7AerHn1K74LsVcYku7",
  "key10": "2C2FH3hctnVxVza1hJwS7NvNqspPmzzjj5oDapJMNSdQ2nG8zbaJf1xEm8A6uzP2SQBBu1bh8GgxgUM6jCmfUg3K",
  "key11": "5npHeEdqUauGE4RJethhDzhCGiWghoaA3qYPHDVudec4cEBCzGuiE6vrVNtqEyYj8XRJub7Cr4RMHfYgxPuqq5ah",
  "key12": "2S6jctrVtdHx5upLej5fb625CqZP7K9r5EnNn2nXCveEZye5bvsCPt7rCR7oT1BKJG6K8kmN8NvEgmm62XCS8ZfW",
  "key13": "41Y5eNkwRCucSgQwbZeNZHUPXaVokuWpXJyYkpnrkYwq6pFysL18ncSrKrXDHjcNirWgC9knbVX7y37xBH9f9Q18",
  "key14": "g8Db54zzM5HrE7XbxcNArEb1YBujutUcMGBrgmjowRWgWgeviRY1Xu8jFPzhQk8BAdSeYmhRo96An5YVyoWnPKc",
  "key15": "4X7sv6hDrY3qrrgrdYT6qqdsvwqDqqrM2hrfCwh35bE1fWTzhEWH8mJWsc8FJkmgKcxWqTBNoAo4XeUjLvh444ff",
  "key16": "57ZbBqH69uU6avdtnr3tMQGPM2EYdgSMGoC2MhpuCi2ftzrkXVJ41L1WNA3s6TFYYvuei5zprQgm3cVu2M1pQKM5",
  "key17": "3dJ1cZow8U1JC7mZdXi2G7uQzioxb32CYUUCg26hH8PkZvimpoqkJmi53mLhpSmbHvfPRSLLSxuJz4F2eoC4Yfr",
  "key18": "3H4T9aNWHGw4db5UKaSWL71HBSYpZkcg6yHur5BE3nbx3yGNQXgJCC7EozkY5y9vj6xMR2KLNP8UjAT6E5WiuJjT",
  "key19": "5griY1BusLpq3SFozULo6U54CQYphKnPYNd9fTWXwXbS4wqdJYfkzzSRBQ8PHwV1eNQp4opv8U2pFr5PhHFmzYVi",
  "key20": "2at9ujNH9SXqEooBVH2EAuytzKgzHWrMcsyiThv5D4sY2qjHbC5qNQeFHp5B18SWZzS7ScVXhRb1jEpewfrPqLGG",
  "key21": "3cvVYHdTYAiHKfVy6NHLVswDVDNK2VXPHWGkknovRTSaZmP6bVT33jLyXYp4pSDfbr64XFWMTAU7xoYtxZ6tUYYP",
  "key22": "4WP7KPDuJ9BUaQoaMpTasRocXrPgJK3zS1dFMuDgmULdXh5mduKko5pLdwUAMff89AYziK7evZBeVvoHfdkyBVsR",
  "key23": "4ek3Zv2JNQx9Hm6hSXkk6HBhEaoyqCUFB11RRD4neXdSTvfjsUdbwKLdErp3R6gVqk7kSskkmiGgEJiFPcDZXP5F",
  "key24": "4vXwobm2eQwD5MjfJjDAYXqoQAfcVgn8FMJCKLqL6Afmo8tcHzyHLgRv6iVrJ2wTBQSiu3CZX74Z7fTNhxw6JpED",
  "key25": "2E2pRNbddMSSpqNPwHEZhpZZNssBZqHVnLt4L4c5NbTuEXouP5DyFxYJxZvsXfqeR5nEpQiTNP8ddt1f6hhMiV8T",
  "key26": "2s5Xgav6y1wFHj6B7pbBJBa34PB2zKAYLKjQbFXTBy4Z3QjJLTrdDtvAHtwRFoatvXy4MjFaQUdXbqetSyTHUPtU",
  "key27": "R7aYhFNWtvX3JffkcQRVETGWQp2m9HdHFPD57332hspMkPLCgyb2E2Pb8WiDqYzEPz2ea26BBcCKim8sZW8zBNz"
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
