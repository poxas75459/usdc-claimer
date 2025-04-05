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
    "4okNfq7RzFKDcyyzfXGBrbgrQXt8EVpVJY3GkQUJzi4Q17a39sdiCBR4F3CQtnRGAo8d1hfyvK9xRmN1RqKyop4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N44tbCvYqmK5vsoUvxwe59XPkAP5fnzwgNLnEZmXyu5qn5Qu5dCHUgjbRZNj2EvpnzN7NPVhxQTEsLyfvsTkHLs",
  "key1": "TobScGwXsXsdNyFC4WzRXvFgYwR5JfyhGrK8r532PhLATw5sisUkQchYisd2HBMyt6y5XCm5V5su16HtsTw3Vag",
  "key2": "5FmpugoA1DR9eL8PqTWCz4bNVV6BbmEsjrCqxM9dj2GuiocCTuHSLE4Tp2wDSkbVDjpmNujLwMb6aCwTWa5XBmwF",
  "key3": "FEpATNno2LxtavX7AhdLnAgMgpNbY6vatupo47Yuase93TDfdkPcZKQ5JNUKg7vu5eCgQKH2pf7Qt3fahYfiRzL",
  "key4": "2umY9s1wmrVEwn14xAgdHrmZfRcgnY1JAK7y5biZfncAAYEvkA2XSpeenRTSrSYNV2YW8KKnDB9DB85UnZcHVvkq",
  "key5": "QTx2tNz2njuhnKuNRS6fQx545Vt6NS6g2SGMRAeoXDczGtgvHWJe6BZSk77EniwR9QC9xmmFTYSVad7ZmNZEKWK",
  "key6": "5DWT2eYAauGPAnfHpcE93B7oMeFgAboY2Q67K1au1MFxf8qQSMW5Q5eeZrMxiBhQHcMQVNnRjRoFesanLqb6PcJS",
  "key7": "3GKfeof5DNvJWrU1DtEzCnLonrj17jehv51hSCDHoTzBKo8Kn29jaHgb3brGHh9ppddQXKD537D1G6bvBsoR5w7y",
  "key8": "vv6tKwyZtXv22CAaCUnyEqh444gpL9rTv1zp44UowWVpkvgckmEb2o9SWQBnv2gmhg8kzCGsLXsotm51KiMFdtg",
  "key9": "4kSgzacyHbtXDsDpe8fyhHfsv7yodzX3MZ7k2dT7412ijywpErZd4G4a4rih4YkLoCrghRyTsgXCyDodkVLsTVhd",
  "key10": "4WA5bvqbpfzZVvyw2CQxjJQLDCWnK3D5GctPGp8zXEhqBvFWQkiy4LBfwBJ3qRWJzCLbzFYZcGd7CWQiytWx8mqx",
  "key11": "5iDnGPEkpFiDGt567yXcY3ddMvGZXRknu8q2GgHYNyVxhQgQAY19GyrT94QP8Ks1rQ6FrcyFGJjuxEGX9y4i2Kkz",
  "key12": "5bnzPfKXby8ZmQ7uUHf41psHFwPZyhsv6aqNDADTDP7K4sY2JZZ9gbnRuxo3TbZ3eN9S9R5JmJhLP1XaTkf7anQr",
  "key13": "ko2aXQ1ctFJMe1mGtgJ6dDRSqiRJ9rgYDHDbfQQQyZHKuoLdamaFd73ADCuHvBBW49VyDJJWb7EdUtaSHwwGwph",
  "key14": "oXpeBDjYwCtng7x9Bxn1QPsFzNhnu6HDjDqAN9ZfDeeMyXtozXzAXiHAWeM5Xr61edpJvtwPLGjCAaaPetDULMJ",
  "key15": "667JsDgtRUDiGZDrW7ZZD84BhJzn5v6vxEWJAJTMoQGKsD3esTHT1H6LYBp7N6B4QPVXvqshg5C3q1xJNf66Temu",
  "key16": "47iLE9YxjHcQ3PRcJispnk9a4UwqWeAgyST7nMeRWeDPWsZfRJacrzx2ETZjJ5cBSwHr9vhF5nEJJsgdSjo9VgPk",
  "key17": "3hP1i1kArmb1mtULB8V8Ba4wttoeVY3jRn884g2za1WyBoaeQbJ4KN8CMkAt31WcXGkaur9mXfbGZCW4TCE3Yweh",
  "key18": "4HTxjdSmSjehUqMmDhUSu1Jm6fMdi6NwLTubRt4MhddmcjsEjrcj3GR5MkmEimEj8CoByEq4XSBUBiYqJpjYUfyY",
  "key19": "2qmgX93K5S7WbXjkEGgUTv5L8pdinaUngKNpB69aB3UwCFHtVxtjAtEGYPyy4YNARAqEdzNyYV2r7KeHCUWJn3h3",
  "key20": "2GbiBHpKrawQVTVQX9uXTmAcGkq6NEr5beMvf8yqrbq6SAwCag6K32XhZdWh2De2MJ7idtYw3Qx3N327xdMQscGG",
  "key21": "27A2gmKRiYLsAe2X2EfGJRdmR6HXbnxVq5MDtutKiwnsP4i6LpBdPc6A4Ty5dmPK95n1smDGDnGWrGM3WqmSG19h",
  "key22": "4j2MRXqNmnRnoE6DZThizFsEhjFpqC5Dg6ZgEfXaYhPAuQC39cF7BhigyN4LEezGdZvYd6GpnV1G8giDAQC4QV9T",
  "key23": "2z9o6SXyNNTYijHEJjFs4HviveF3X8JiEgNm2CMQqeSc62nskHtggoHC7KVayobtkUQinXcLHmMyhszpCUCmAcRg",
  "key24": "2wtRgUnzY3uFcJyvFdvvez5fn1Ku7iKSDSmUnwoQ3gGNTcLpbc6QNScchYJmf52conoV6k2JWtw4LZXDQKWkneVh",
  "key25": "3xX7ai1nifcnhetSCpL3nv3gRWTZBy76iRoVQxNDBCbsJTEaAidxsy5eTpk8UXkjn7R5T566qDF6fpAHJ8rjTqrm",
  "key26": "V6iYWCSuWmoyKhwsJx2LbEDjoWn2cMPAqiUx9yxEDrQj7CRDxT1nyPoRAFpWNG3fCWFZUjKPv2HrQYsfJ4bHWc8",
  "key27": "5ZTGqoo2H5c7Ez726YgKJzcajDWazQ2WEx9Pe76pdbVhhE6N6x4cCVpB5aQbFRq9SRM3Ck7VADJDGK93fvZyt7cg",
  "key28": "6B6DbGHefRjHd7uRdYtFt8CJW3R2AYk6j88JsQe47uLraGb3RjmBWmh7TAZA3gqeFS32xdnNRcY5bkY5eACsT1P",
  "key29": "3WXDN45KNxTExNjYBi9hsNQC8oH7L5MwejefMMwPKKium96qP1AuUur88h1ri9mQRXKAiiBfG2c74cR6WhZL1EZe",
  "key30": "x6tSkYdWX4AxyLfaXRj4E146xpNKubx4uJnz8eSBX1PBympSeypDfFVb41ku4LNC789taPJAVooNVntaPcoczM8",
  "key31": "3NwhwZ1sPeEFM5YXArSbZyfaanmgztSmZTHwXJ8njQNikQdDcad1s3GuXDmqg86tAMGvcf6FCFfHApNEGtJn7a8k",
  "key32": "4B5A35iTN35sHHob533UuLRW2akRFKGXA2GWk3jd73QspLEY1onPsD3TZVpGdo4dddHdVHu61JhrJYaHgXfQJHJG",
  "key33": "2p1YkgYJFMhoCUACnwrExKdGX6NxN6GEzjzdQPwwazJjDS28rnBoh4g8UAitvAY4fryBYGTMrkbyHRvx1y1jWWPk"
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
