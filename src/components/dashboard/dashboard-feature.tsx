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
    "4M2y9YMtCYS4CkuRfjc4Unf6GibaxjQXR789em9WDUJigBHPMyuYdypkn8eGDbLoKsQSdyao7Q5PQMJmb5CyDmWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W6YjTNizj6AvFrBsFoRUes4sPtDvPrsf7HicCarUwwk42PXnT3u2XVEJMBwUxLZ5Uifk9y3cVDuZrZHRczAzkh2",
  "key1": "4swWuEMDXPkjhtJgWwsQ5D6efJqYxEx1n6paJboDzZWsjFMaM9SQPmen27vp1Bop428Xwy4JCi1qbC1okquW5Cra",
  "key2": "641Myau2HdYYkzDHqUpxuopDTcbK9w4PoBrB1heMV2Mj8Nf4UCryxL9SsHU2KD9xQWa1d3qKUCVmEkowdjSAiJLa",
  "key3": "4aFGut7U2kQR66JYiSRmEhx85TAhAwZsH8RVs3KspSdfHTWB4EzTrP1Y6viYKej23QS9J2Fqyv8SFk88RorQhia6",
  "key4": "4ZDAvYC3G93RvYr5h5L7Jb4TTc55EtqeHj92TpFqVdYeGHZnZRe9PGCSqznGdfcqs81jZfskwSDoRt2ncCsqCrnp",
  "key5": "3yoTAFYx4hHAi7LWq2xSL14cDoYokcq9BV2qxCSgputTpcwuEXZJYF3atia6Gie4pTiTFrkx8EAbMTPmAjX8EdUj",
  "key6": "5fYDtDbByfKhYeEoT63q8zjpVxJWP4SdVpJNmPF76YxHWgtDBj4CFFjGpfC4US8C3kXh2U89zSdP2YoYHjJQrJ6T",
  "key7": "RJWKVfYnYSywYvCuyhaKiKcmrAkwjdjYTiALnLyshHz8bd12ZfQ8jcuRtNxJNr97Fwvi1j3nYB1qNf79MRXkmfx",
  "key8": "2NeeZ4py4VJp93LmSA9n7fV2FZSJhSezQkQk7DGreSgJ8ADjQYDsr4SCFEvf3AwG6wtdwq5C92gbzft1ATG4gfSm",
  "key9": "3yMf3cuQnCHWzUJ4f8DGPtJdqwZZvpsizZ8xpbBYcdfQ4oaom5CBL3aXHw81suVUi2S2rFoj6bZKvknLECT7e6Pg",
  "key10": "3sKUrFkVKaKKZFKbBVD6dN1WHowyquFVc1G2DdgKfPxoywRh68S2HMFDnNZSeW6QqwxYMAk4mbSJ5K2J6zUu9xzw",
  "key11": "4TeE8j23R3Ji5cKr4QCBcVCQZLwBNNx5CsWCAhNJd3QMwUjn3c8LupuHf6rRuqC5sp6fJnN3UHNcfZVpSceQmefa",
  "key12": "2SoKcRhN8YS658m5ATa5QRDkvqj3mKVor8skgMUhZHUAXxD1DP2sM9XxDiHQMjwNuUAHL2w3KGLScGA6Ey6aaa84",
  "key13": "43u66zMQMTXsCBdH1x121jBp34E2DcJJcZyMdesQcKFnSnbbbs6z3kD4JaPhHjNSnNQCyYZcpAj3zfiJQLDC2Qck",
  "key14": "5gRGdBELu2dSEdSMAmbU7NhEE2JnBHD2KrbZwKDXiMDUNEG2H796SmDZue312Kwe6vyk5GzobzUGg6tXyGL8t72K",
  "key15": "DSYKzxxxBtSfvNLVGydaWoBsjKcTTp7qugy6nSoPNd7a8GPuJWmfWdz7gLLvWCZRzwt1vZpBLfmPUf7mHvVdzGz",
  "key16": "2vYUSC2h3sb1A9S8XSNc4yZGvdze69DHu1typ64Q7zwnVPo21hD8cU86zxUmaDvdyDLXPhKbetjTmpqK5VWQucNP",
  "key17": "4shE6Uf54sHg47TcbTg9tvUiq9r8ipsdLDCu9rHfYKs2zKZ4kXkXzpvaBUYrJSGTB3LtZAFMkxSht8MQetwmTMJy",
  "key18": "3uWt789RXYRr8fGX76wExfRntMeXiGvFyP5FFuvhmcjg8EW5vwPiiKTxm3xjnuh33rzGACYky7vPCBEVvDbrZD8U",
  "key19": "3bbuPFkbNykG5YGTPjH11dWxCNbLXkAsTaRiioyGuBA34N73gqgrMbWMmLm8R38zaL98WtTA7AaHoD29C8ATiyXu",
  "key20": "2WJtXpMA5g4kAynfqDF4xxP9cLMZ9NRzcF29m11N18FQFfH2pzaqEjhfMf9JwBYceQxxCoGkjVsKpdwkHEATXArH",
  "key21": "4LJvsMgjwFZCd5Hm82U2abotsaBrSh5XA487Ua5jAy2axqT17RBzP2BaB9SQyjyfyXYk84e3VxveMiap88PUfkzs",
  "key22": "5NKnVRaJgLHgPRVn2swo8deYHrnXi4ornFKr2aHknQhhq5vNh1MioqRXmSmALYAo5bpLeHJDZ1neoptFQcVsBsFW",
  "key23": "25TqdUhRxKace1awo9yH4uQ4SiRmZ5hGKz9fsJvush1DnLxPC6oJRFSY1RyCanFipu8tgwNTfAc6ot1E8mFCUTnp",
  "key24": "4an1EjYZSYzQv8UCE33QH29doPygxYb1MCQ5Hifur5pqZPDZquuUtQR5p8fMagYKmLigN8cnAdqSJxZzLv7pArPo",
  "key25": "61kg2E1mymxZYbf1LvGW96j7j4KQ1V6fzngaUCuES1PWdyi4Tt4SdB6jwn4e9ZTf8FMJowzEMpEFQ68ydR88wch7",
  "key26": "KKdWEyugVdQU11DRrAu92HGxAvvDwD9UAbf5M77TfXvCbtkKfYyAUMtYoCRcm15rSqkTY28cNGU5atTuMEzzfGz",
  "key27": "3yXQyb3g5WNukqg1nPLKK53Az227bQu3iZS8bnn8N8q57y9WuqvJQEyKWW9HurbioUWtbPB6zkdCxhQJ71nizt4B",
  "key28": "21vL7xkz18EaHjEK7GYuMxc59sWhU89FBYAUkxstTLBVW1wYSVj9RX4pFYvLxaBYKaPALpu2tkGF3JkeqnfTGCfh",
  "key29": "24gZZJYL3d7Dk4kc5oD8neG5iNmENdwMtPnUfX8EwUmYMgW3XZw52djiZGh35wqDxxDmU8UfcGtJmLahAovVehAK",
  "key30": "NmXzZDtYyL5taRg8pG4fDtbVz4tZUkDyMSDeCLgBib13MhmNHq1SReLWXF2VkHnGn3CdomqkRb3mxTbRVf279oR",
  "key31": "3BkWogoxzWeyuE6zJPkVm5nf2egtnvc9BGSTXArKxvDTxYFyMKH1jp3MyQ3QcKUqb43nFtSLTH6RS846oNbnDtWZ",
  "key32": "2EkMP3nT6BfdthN7Deo2k4VWxADZ6iFLP1e26Ty19EJbNiUyhUDcaBs9qpNZGo27MFXu4TTy7nnnnZpHNmyZsqo4",
  "key33": "3yqXn2nk3WpCVbUyF2A95YsAcF1wr73YHgEqtFiyZ2TwxUdcB9WmccdbVFnv3ajjGj6jHcUteSv8dB77wHg1zZyi",
  "key34": "4eGn4zkSyLBxboZwkG6hMqgR1Ur59eDZGPPVDTfBqA2mb2GtfwujmTDVU9HYVnc6wTSz1YqVF3FL5Ko83Bj9wd34",
  "key35": "5GCdqRjuoWkN2gTwSjkZyvgJMmSK86TcdirzV96XGDPJ4PKxrZq1pbxBi1xNiCPAA42z1d7u97d9BXvmHcpy32Rt",
  "key36": "56SBoDp925AjtcmPZtdyVc96P6rgv6g6x3ZyTesF3PMPTAc5rtMi2GuwJqv9mKoSzEdBtp5dAQqxiPJxMegTL79K",
  "key37": "31chN3dvR7bWJD5q7yTXvUP5k6aRPST4NWxYgsjtJ16Xhhv1xAUuhFjdUm5bCcm8VEWeKVkhBJzWognmQwecw16N"
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
