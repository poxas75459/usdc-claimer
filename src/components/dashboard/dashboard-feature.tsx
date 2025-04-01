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
    "5Gy33uUjZ2RMGaJCued5YUWHL4PgtrNvrZ8mTAZpCyU5Bnry6q8qYDbUEVP6eizC5ondPKPWSdrY428Na1yZkKQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zyehuTC8KdNnj2H6fS5p3qFvGim7RQ9J872KRRdpo5fCEhh4wnHzRabo5M6SbbC82gtF1yqgoYEyEKwoNCskdd4",
  "key1": "22kLJsRdvXxZN2AxhJjBRPJwWkaNVDE8KLN8jCN9x4UTQoTWvSV4kAW1tz779NHbD36ejLSXiwizjieBd8pYQZq3",
  "key2": "51bwzP7kh7LNady96fgqoFT4knVUpba1LbjHPTdtSbr7NfeRPr7w9s51jZXb2TNXf1QiLU5hSJuFhjNbjc7LGop1",
  "key3": "624tgDihGkNTi7eTzu4t5CvVmZJJubQ8RV421g2LRdb1ysLb7qjpALyHbCb39Sw1bdVZy723AhxB1soXd7kCoCgK",
  "key4": "4Yossv7tbdmSwc1p6TAmELTb6ADV6kLrn6Hqwys7rdu9vpZFB3CLJpQofxgRS2JtE9dkCmPqnkQNSt1KoeXuWZgY",
  "key5": "5gcwL44HWnmetLnd9ZTL6UGrxjY1gmab8g1rCfJ2WdbzqEDzVJbU8cwxZb3tpzXJ8ZDXobPJ4jgawQEhhwV1jKzF",
  "key6": "5LJfSkeg6wunBm99AUWAcogoMXpaMpnywSyUqRZZ3pruxpgfwWtinngPhA6vfA4jnXwAZWiuepVrc1sVrchD73jz",
  "key7": "aaza31sVJtcKakvKPhXaHYHBKkBmdaan4cDdxCp5uaRyGyMXxXBqMC6qHRfWZrdJTazCLi7stNe688XSKs5gnZH",
  "key8": "vbz3ouiFnNGoWBkePWjGvukxJF1GedR4VsjufHfdZCDpURSmv1jURDP6rk9cen8pTf5kcQmXdTxkiEdQeneKEPz",
  "key9": "hvdk4WxwFtNmmVcbRR1miHwCcXWzn1FGWg9osyXejcw8t7YmzqMh2v5aCbyV2UCVfFsFAguGYwENDcHYdZ1DQZt",
  "key10": "4p2FPjVgwrogJXM4o1hPH8pBtFAY4QcjPBgTM4dQ3gKYu5wz2FbK6ctMnbyAT5LSH5jKsEEdQ5J9ejwPy28Nz2Ey",
  "key11": "3SSGGUjvNYczQNjsJJM4y34rG1GhfZwLvRiXyw8xGYTcGYUyCQsmx19tnxPJFPTD3HhTtWpnHzTXevKLjPnvBa8S",
  "key12": "2BCsGb6ZCXEPXLbCBonZgMPDyALUfVawagmhBwaYf9e8bSW8nNR1n1qVMLRmdiKgBe23abKx8Zyv2qECocdom5Gh",
  "key13": "kySiRSgXbFsC63JpwTyn6VyyUWfyCMpcDmX4PBe5RYaUWauN82WXxdHFrPJ2J4E6NkKLNhYqc5bwkD1xEkaxuFo",
  "key14": "bt4Fu8Yc7RSK99QpNNEzjEKz1j1b6UC3ktNnMQCzthN8oSUPU2oYim4ztMtxxCaLzJmJTt2pocYcYXF1yoqUdAv",
  "key15": "3nqPdMmaYr5Abr7pSvuo5moWjDnPV287meSSru5VN9AKWjpjdkj3zak7wSzabgSdinSHFveTVms5Y7KjQjMJBTgs",
  "key16": "3QnvUY9jbvUtk18V3nwYapN7va3NaHEp1vdXXtckkBbtzq8LWSyoS7wsNUnnkhcAmbg8TtxUsEVuWALnWsMi1jbo",
  "key17": "3az9Hf5CWtNrn1YG5cqZ9wHtWxjMxduHMc2SUNLZi3dUMuYtnY6WGFFxqSMcgqc71j58GSRzaM72ixcqHYLUb8Nc",
  "key18": "43pC6MMxn14rFVnZbHkEXsuE87B7eyoK8eNwokWT4x4k8d1DBeApXQZPCr1aGRT8qp9n3T8kAJbbVCUGjh3zF3wV",
  "key19": "4rTi2JCsVLFYbagUqki1b6FwUuTJ4foDAXTFusJ8qx7xo5XR7WoNapqaUAmvr8gtcseKZDT6SUyQ4GtfkW5qRvqH",
  "key20": "2uEdQYSfu8839bwSLaudxocWgV3FvpqLASXRMoU6JCS98wEQsRZr7QwYXbYHPEEuBTJbnibTgK62kNBfqckF82y1",
  "key21": "v7NrDYKr71gErU555aRDwyXbC79M4YHT9b54Qdj6LpZ1kpmxffx8D6A1WyaZxWxYUsjJg5hPptavnNhMaQZfWXE",
  "key22": "5mmT9GMw9PqWWyGwb1oFv7a4hhYGcH8BE7W2TzKnTL5Nedz3Guhtfe5mshEyRMEJNMPJnntzYTPd6Sw8SrvnpoUs",
  "key23": "5mQdu8EXCydzYo1J8JkDgcWX7N3E3erHcrrnitnFdvUEijD1SuuerwmVK8SnFZ1Zy2XcTM6tKqdKgeugJjzJPVT1",
  "key24": "57q8qLemFyMd8nET48BdbwyAsTFDv57ut2WMMqhai87TQwxqofxSvMiW7jHgshFckTJWpMxyzC83NZ6Lp6ezB21t",
  "key25": "5uAMUxhg8MwyTDdyfsE5fNfUMXsmzcoBFWTxopULav2VhdgZtbKfGuMJbtdyLEb8bFBz7Bu1xZF1SnGF1wHtZjqT",
  "key26": "2a6NAqayaoh2W5Ur6EdgPDMMViqNNQJZUo4jGTzgmQeXfaDB78Mt41KzxNdkBhfuDS1QL1zmimQzEWpJYeXDtZBd",
  "key27": "3sLmtxzz35Zbzo6zE2oUjwYWDVUkTCu9FaayfcVo119qDKevyuh6Pv8JMgmTCs3vFbMbyyPYoLeYsAmkR9c3t7vg"
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
