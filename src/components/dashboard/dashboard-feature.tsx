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
    "WUDajt83CAHXnJc1H48Kpax8YCcAbuEa7sFEsqer1dSbb9UtGtem92TJTYCYeQpeb6U3cGRsKXKjm4yPDBeeS53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53T5pozeuRnjgLZYm8v3Y9zZehwJFuAQdkvN5KSxKNgFvvcTZaqUkuewftjPAkt5iDBf38XM2mP51RWeDPfiwmNN",
  "key1": "2Ju8UixVgfmqjK9Ju4NvDnBb31Fd7TS44j6F5SJ5M3SttjbouKYgDFWAr7CsqMFiVJa3KFNCiHKAJAQVqzZqb9KT",
  "key2": "42LSC8YycyL9ThEZU76SDXYJeYKTV1FoXtnFcbvG1GyiTh469Bx9UWoZkSCwjNrkpPJmkYivaiBHaL4611DK6sPB",
  "key3": "241yfnNMKRqc5Aj6484JVSKFadYqPdA2rVpVLdsh6ssye3ErezQnqD74hM7LeewtpFiRa9n8K3Rj4eCNARWv5DxC",
  "key4": "M9Rtf4M9wYb9BM1QNW76nHSQL64mibvf1e8i2vBp1gxQ5WjHVFKksWCHbNnAaWLEwTT2zXyFZEKg2cofxeweAZL",
  "key5": "4W3Mm9BHeSAyJSExLapRJL5nTXKGtCyx3XUweikqYLWMgLQpj5H7KzaBwd5heGVGGqyJAzuckhT9wJiEaJgwo5Kc",
  "key6": "VEwJzvEWHhTA1cLjJax6kUJzYownqPMbSPogW8QfKPTF9qfQjFeHto6v8ZR7wd5VyeyMw5k9cDU9BhhEHL7X9At",
  "key7": "wkYXvuY4BaNrxeTMQwPni5L8gexDB7irdbX68Rj9yp21i6NPBzUCeaSGKaiUfhGKq6PQq6TpJjTM4XPt5HtJ6N8",
  "key8": "5Q7PeJYWWX9c3Uz22bEseraez98fMMttUxLpmPzqDkzQ6RF8BySmCZhfHmN9EBNeqGmJT7EEx97CitBX6oZCycME",
  "key9": "29cPYfkLxzXUV4rYExC53BX9GwmHefE2yDt7GX548gXz3qM5Sn23ffdGnoHZMq1Vyzt7rek4vnYARV1Pp27izjS8",
  "key10": "38NZLpvD8hbt6nJL9aTqkBzB1uk8Sbysk16E8JvSYa1NfrsqPKPfm3xDKxy7hrpDjxK4jzgBZHS5tvMayMbNDCVh",
  "key11": "5uFPyaKFfBpD7R4VKEfhVEhsaeWcQmHN6QHMjPYLLYL1gZ7Cg3bJ1v3xVRFvTY7NSaLFLAAAYFYhYeLkwsnBDKmv",
  "key12": "2h3qT2KVHE91stNNWi36V9bZDurKTH1iFwSVJHhrCqca6Zz1NATkqdPyXS7orEZPMaWC9NNzYnyyGMX1V7zb5EaB",
  "key13": "2VKW1eCgjLpaMLECDJe1kfuERr3Uj7GpenoUHTCqzQ6dzzoPzbExWjkRVpPJMLuJEMKsGzBQBLkt3fErE8ZqUBht",
  "key14": "2rUVTWB59LH5EYm2J2HKmeJCyigAbtVJAr2Fk5rssuBKRb3WLq5y5EXJEKcRPjQT82ygTZaTcjm7bcNvjS1uWsMw",
  "key15": "2D2sCxiorySGSQRtdwskfUDvnZLpHnY2h9QrLF3fNE9X4PzhGpUp2yp2MGFiwJV25pFKENbVsbctH7NuYonCsbrA",
  "key16": "5nM3nZLa3YSqGGi9pheGxzv86iN1Q3n5obwb9hc51ptHQjeEbgxH1vneXx3ogSYU3idqYUcaRFBGA661ib6H9wSf",
  "key17": "2XKMrsi9kroWoyQuNeHf3JsTQctHmpQ91bpMfrTi5r1o7cN3UXe3u9YFFanPk7xsnSTWDsAyF5KTGriSJBKaGckC",
  "key18": "sGA92g4qsgKYcUcijKQ2an4ntcwkzpfaohYz2JTCe8DBb2JU2QWfM7XXaqcHNBv8SZFpc1oJ2ThfrYg38wFrwip",
  "key19": "5NJw83PEWQhAZTMX2j5jES5VZ5X3YftX5cQ7qdzWpqaB2NZ7G83QCASPUwvTL8gNcaANwbfUCkqcGaXWRbXDboZt",
  "key20": "4YxXDsXeSgnK6VYPUUCoFcnGjBXvGTLZCSEV5eP5RsTNio4Wzs1tfS7vpRx67m5JN44vXQHgTxEWD1qwgktji1HR",
  "key21": "4aRxhJx2PxfTG7ScbBvgsmCCPMvrE8ckL9rwUq5BVqDnG7KkXyLh9vxjvvsv59sFnP1xM77MRxbihAtDSfYgqhG",
  "key22": "394SyGsbT375is3azHnCukDvt5uWpkmtFDqAQWhYsVUHxeLnvUD4Ngd9Ay4RqheyXziSLS9ziTfLvrepfqHZGRB7",
  "key23": "592u1gqyBGAZ91JptyEyDp2NgP8xbaNBzm1CJWbqSFKY5cJpGVotHxosdVBqvr7EndBnoxDnStPViJvYUbKi2bZs",
  "key24": "37f7F72wLbYMUJuw2AHnhE5msMbAA6RmjAa6VbPdFtLjvdH3mcJ7M2QJDS9ojXJkGpjxpnCzuKvg2g9DKWGwLFao",
  "key25": "5NgvFtbPyGtus4AViyd353tzxcP6xmYUDYHNEYwkVvhbYn2ZEyVJ1UEZ1oypzTSxHAFNfjeuKmBpfxwv9vkAnRmx",
  "key26": "2PA7GRRA4Khn747KR9apDkZvF6kQz18jskrtDvrtVyPto6hWKgVj1b8Vqdu4T7qkxh7K1z4LQoYMGoCcUfJKgYqU"
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
