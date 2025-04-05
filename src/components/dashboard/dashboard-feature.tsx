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
    "ii92boKckqWCReCTYS9r2AW11aePVxor3NMvPXx73fBcUZJcBqpe6bT6oE437JiDAj2C7fozRDeuvb6CQqHwXzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BRC1dSZP6myUp6CVm38zveE3m5AT96EQSyEYRYrxRj68eYs7LopFeSRnyzt8FdUPc8LGEhXQDP5EgUWKx3ww9X6",
  "key1": "2NhhWJ6jPBczmSMNmYTwr83q43GzNNPBmUwXqfszzMdUMYFMZi1y9Gj3BRvziEHFW1E4jv5JZhQ7t4VQSQCuHKAb",
  "key2": "Em473dK34dfEi6u5QicBuydtmNnmgia5Ky1Sm2M6SLq2X5XGAUwfFotk9Kb6L1wgaYnkRAhSB8imNioSJsrEDqT",
  "key3": "5zmMJYbMLvRvFehpVWBmZf38oVcY4sMwRRWNqPMXrPnZaqcVbZufbrmJ3iszVgQwLm5eoFy88vCZGRUGTmvJtnPo",
  "key4": "4wz1xq8qNeKPX3wCbXwGhwjYWbb99Ln5iRbH6tPEAZwkSYZvm6WRa3KVWRs1EzWwHrHxJHYFjbbP7M5RSYVsjdfR",
  "key5": "2LLMpaExfx88uAgaCesX3VV2QacHkJs8nb8peq2PZ4NWnjcPgv86zfXkzPrA2zudi9ftrtGjsmu4LdkmoGiPRsAf",
  "key6": "3hyPN8mMndu75U9zubvrDLqW9EzyCKTfPa7b96WGEaGJWWjscbhpX1PD4b3LmotR7amw3EmYgKBhnjH3LpJ24NVe",
  "key7": "4MKzPM65PhqsKDJ7v9MJ9erpSvY8u5m1nEJiBrCJvgRpUegU1ppQ5dkgfZ5moYLive3ErKrDWpJiQ7k2bDjgkrpJ",
  "key8": "2ebUEoucDTfEMivyLRqreLQ2xtgidN1t7hGa3H2for8uJMD1SqRGAiTFwXSZP4Mp6rtcG2jM5U2PTR7e3jywHDiU",
  "key9": "N2i88bywhWcxmisDB9DiMj2bwLaX5NAtrsXsykps37Sor1MsaZzw5nBrRrBCeZgMn8z9ivUjDNCdqfAHD1ewVUi",
  "key10": "qDi8Tdd5Qda4fVQuMFAFYwDnyaT1hCb7Xj4zbbM1DhRYQdRgDNSJhXg3MHuLvLNrwhNmN4JUUVEpZhQetZQqBGZ",
  "key11": "3Q2ytxLmUtqWfKPAXdNfcowEqPqXbdsE5euB7xKdzLE6tbCEbzT3esKk6WPKVR5mHSAK4wkkYH832v1rzzcDZgwk",
  "key12": "AVpqE72vZ9da3uV5VsPX83GiMxoQ48eFg7HDYadHP8AN8ti5UNisXwQppAY18vdiwd7musQnJuYjYTRLCfU3AP7",
  "key13": "2vdGMwKP2SAZcwNjZrP7Y3HbeG9nqWmyer1SY5yijSUKBhAS3xFR1otW5trfMc4t5EB2ybvNmrePQmJvLF8MJfKY",
  "key14": "5VPwX2qXX5oxcuJ6PGoz1ha38Eef4NyK9m2W5PMheN5Fjaimcp74mKtKnYXhWRnYRkcKax3PS4X44SR4KXtKySfz",
  "key15": "5Edq71DPKMPMGWR6LKeJ9nBXT3mQL3zwGKYHFBJ8CSBK3NLTxPfTCSjK63cJhaY12ktg5AEjxu4MeVSXLY1sTzmJ",
  "key16": "2Cako9tewrkhJzFu8ket4A4otWDAAAAfq3DdZ464JW6sp6VPTNweW3uGMeAG3ZwJiFN2DS9FTorgWiR8UK5QRevj",
  "key17": "2e9rYMDsL8rfSz2Em7ksASUbnyzThbMrD4JzJVRtjY9H4bvsgP9RpQFiRABXnHa3M4DB1Hu6sF1WV8FXDdWKB7ns",
  "key18": "2efSm9nSBkuCgyFCvpoEjdvCEdGpWSoR9ACu3a1BpLjvogeV1NmqUNjGRqEUXq6bazEsUPdEeFApb1QQDWcdPRCW",
  "key19": "3CdpS8dVaZSNFMJVpqZxHBQJTKtusWQ9Yu1r34mA6EDkFbLN1mKG44c8kcYe8ZsgorNJgfyoXAMrvNDvxk98pYJd",
  "key20": "4EsqZHw1Rq8Yt3fFz6iuFBBmFhiVvm4mLMRXi2ArvpuAV3okTCpJX41Xmx739opS1dGqZsrP6JwEADH2Lsm4tWSL",
  "key21": "321fmW8JU64ybtB3oV6z2pLFSaxE6QjvsKBzWk12e4Lv9h5utcAakJW9tu8fZHx3HwDjEiGQyrFcmQSXLV5FohrB",
  "key22": "2kiWhFHiSroRE15QnNHBizCoVDLCkvnuqYe4odumJ1GzKfnwHVPT47MD2ymtxmpvJH2FuLfrYYg31i7kmX39ZnCv",
  "key23": "3xW9q3TsGN7prQzzyby7gvcnPEjCwJ1jC5u9gYQeXkhKvWdyYXLY77z381WVS8bAX3rB9wjsFgQJWtYubyYhqAVD",
  "key24": "3PancDV1zhkmByjckHV3rpVNBUzY6bDTxT6CfyT6YuJme5htg7znLNFx43hj7krmbueeVrKvwjBmXuWJSHRLLvwW",
  "key25": "2R6HRCn1v1hgj2oSCF3yGNv935BH3aTmi75euws6dqecgjiPvo94K7AuoAUiNC2LKHTWC4mHsVQb37PBukbXsoq4",
  "key26": "5iU18CmaUD5aE2eAZYmzmCK4pVfeMJQdLWBNhhmGkSamMP8rqHArcqL6rv3cb79EP9NLdxHLYRdXntVxBTz22w3s",
  "key27": "2o9R5r1XgMGYekt6nGGApZqRr9Pm3nhpSB1SqLsqokgtV3XJAp2nBX93eLMYebcfmArR6ZBKtaAd5MWvZ6NHW7fb",
  "key28": "2Gxrc2iQuCkmZzX5mqQCqpCkqJpQhTJgaCyrchPuq7pj8ZexYnWPtfXPrrUchsegHeh6kw3LviPmt8QrgBJUWpFr",
  "key29": "5ZsBo1VyBXv5znNh2XCcoNhXfzvDDH8rrT1qxaDQYUviFsb6TyhUTPqncapAc2LzoiHQtmdcaCAiBURapPuzBimL",
  "key30": "5fhQawzSfQDCjUnyknBAjkvqZn9B61KZMBjN1RA7Y6fnMN7tGRyecACcxjXtGhwf9Ww43NkCnjVvRRiX384oCUaB",
  "key31": "2h4QNgCsYDTWg1wqbqAXGvL1Fdi2e2ttvh88RPsnCnK7kKdz5YC1YjTyaQXMgSLWWb632LC7rCoiBfefD9WWY5aZ",
  "key32": "5GazR9xGLJQSoWBnxwYrAoJXRkaav8DqNCAHmgAKLrp5c9yo9uAW7m4K9FfHxn9zmsoMJRUcAsJbHvubXBHJ5vGN",
  "key33": "Bj4cov3V4BAGysVibrPPZcfA8wuriDJDmCfGnKy9GzHXapGhLyi5FR8T8Medgyg41rMht7tcD1ErsHDdsi4UFhv",
  "key34": "2v1z38onkX6B2t7JEkRfi8xHXagLRztfmNj5M6wV4m7zRG72hJ2FChqkm8JsToBwYM4QV8Uc38d1Kh1Ugt6YWD9P",
  "key35": "FQoBRae53h4FD9AFXDZQ5aoiMaiRPZY7XTutxrpGw6pkKLsKRaTBBzWrnRaLGPTXpAuv6whrMP8AK1Gnz23T5xz"
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
