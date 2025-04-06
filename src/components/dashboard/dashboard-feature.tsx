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
    "3BKKmLqqguuuo9H9J4fKZJey1eCENoiNLTV5xBsPJ6FK8W4xF7qVk6zdK1uunYrNovCzNhXSi7aivuSz9Qb9Gdc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oxRkMzcoeUAP2g9kiejyS2Y3byWr3y3s9YFNBjp9o6gMmwpS52apDNqu6h3qyy2mFVAMX7oGo5PgQKB6237y7yh",
  "key1": "5sYmiZ7ANbkLuDCgEG5VoWVZ75Nw57B831n9rY5qiWRd9jfibfeKE5b6v566CznoGLDkvLP3L82XbS2co4MwgUXU",
  "key2": "2LUKStXp2FtpF57japhR6RVHUVHu19rRJH8EsoLQSHbYVY2y9oTNRThATgdN88kHsb2VYaZJ5PvJxgPvJ5ffdkoj",
  "key3": "4eJNVPFh1pWhHfpyzmwzei46tQNT3nWnJ7Q2aP75WL2WNzV7YHBeJUFDun7WHmoPcZ8MEHQu8LrnaU9MeSWsNYYk",
  "key4": "4UNL2hKp9XjR6bdj68mkh5UCXqBceSa4KB4F59Xe5CMyXN1pE4vVbJGPQN8Xt7KaPakoEY2FLtaXwxLSQx1DbDTr",
  "key5": "2zgBDhtGbC6TjsedtLiuLdBLsAoLBWb6NhMc1kuZkhgiUvMfHmbTJ1y149cvRL5nbpgiJ5PZsYpnA2eamUhsYGV3",
  "key6": "5WisnwFV5W56ov5LHX88KXurRx5vU6SEd3rFyTAPR6TwGfrNxd3q3CLRXz7DwEcXYCJVy7oeoabRDGH3swAWKuEn",
  "key7": "39uRj4zeYDfMTBefLf1VmMZ7gPkh2fyPGbeucYGeUYike8H3gv7pdY1738gVcooFgSJRHmJmv2sJfkZ3Gd7nRCZr",
  "key8": "G4Mc3BzQrDLqUabvCog4phNZHay62jeQmKXa91QBoxLLjya5VBDQad28c5EzpXMvmaaDtTJPiLLH83AGu4Se261",
  "key9": "3zizxxgQnde9NTwcWSG2viBz8jXdi8JxKCqjKU3L4XgCvVR8nBNVdhDjAA4dmVkBUBz9kYrPMyT5TLQqESswuoyg",
  "key10": "3NXy63t1Huf38dQiANxFZmBtzi9K5hpAKKjwQpp64xTVqCqPWCepwM77WFcH4WJQnDMzW9Bk5xSiNPDCMwzfRdyy",
  "key11": "5UumPvRGdqYrC6ABSh1ZTuBXFnyQfdma1vXaH4JxDVM62cvGnyZLdCMdiDhsunXnv5ZfimoqJdEMqedvmipyQh4z",
  "key12": "3Js5NWfMn8PyCteesoD4U6es6nBYxbt3pZcgaQoxvt6XwcxSBKmUfmykgsfn5xY47L8xkeBa1Q2bWn8QDBRoD7YK",
  "key13": "2PHwdtkA5EGeQTHigAYAm5RccMP8i2f9xn4GYaCrL8uZ71pybJAULhUBQNYiuCuPcn5cTvqvVByGYQ649u8XqBym",
  "key14": "3QU5zSUWk1yCwSo7iTW9bECbkeqa6bYiZiie4S1QFganEf15JpCbCQ2XmgdHh2xHS3n569e3J8zR6GQcWp8FKB3s",
  "key15": "2cdBozkDxawcbrfUXzLu5F9a34L97Lkgbu2c9XRTYqGCSzmKNBGzduzHjZbvnn6571cydAi8RoeFpDUiagdBZU9Q",
  "key16": "g52ymCCynokBkJhJAcDt37LD3exrR2Ze5xRtyepc3uPViRFgecDiqRgcDeMrvEjbZFM4JgVYMc2DXbuwSXjMMT2",
  "key17": "4rE6ghVFhRKE8C4Z8hMBD3dMPn9XnZxo84C9DbUN6MsEWEgptxZkv969X9PsLrpYUnpnbQkeBYBRicqRgazR1Zde",
  "key18": "Cq3VhbPKurBEvJNgavpLEyRXVzGbJ4i2hJTysEBa6c3wG3d4fAzrQCM7m8j4qeQiMci7UxeDubadcBARaqyQzbs",
  "key19": "62QHKpJJpTMzmP3u4D2D3TS6wYFa86LeGZnTcTH4JMADfdNrdyoD6JbgeyogZJSLGcAye8Hj15z3jafwP53We3bZ",
  "key20": "31BdfC2LQisLZwX6z43tzfZfzjZo7EKnzW5gmansMSAK6Cr44yYiTQnfNw1bUiQqfy63evxSV9Uum8CoAmGPeRcB",
  "key21": "hyxi9Ra8zmy3V9zujfAkbY2ofVyCHQ9QdE5rZnYSkAnRq2LhbD4yWW8M9SV3u2ffXkG71EPohDord4eA2jBZE8Q",
  "key22": "5ai3mCK1efh8NquPkW5vbYQhC3yFcT4iRBRh1QdfTgbdQjUq5e3ndB92GoFipeC38YWy6QbRJUxgqFbqFHZ7Qes2",
  "key23": "3vhiQ1638faCSapc7TnxDtV4TjeqYomYZi3MHiu7mKRSmbL3d6wieprFPFbGjZHAorTdFSdint8d4eXy5ZVkNRtX",
  "key24": "zzUqubC1HfMMi2sN5HS41qW9BVhmQE7Nxb51zTM4X5ChBBKvpbUcnY1kZDuiKmmaQBFiK7QXjtC4TYnWf7u6jtg",
  "key25": "5ZSzurSUNUJj7vZz2cEmhpaUV29kbSgapqmrLmFPdnHodaDJYyZu2fm6VD2Hj1gXJ6xNbwKezSWxDns9AnqfBZXy",
  "key26": "5CNrmpAS5ifY1K183jdC8aboL8NESYSDWPZf3nvCf7idxJunJJYdKsCteKBKP9syqMTyBg6mdULCm2Rgh4GcAfPR",
  "key27": "y6F8WsQqrAfJa3DWr5jYQpq4QZL5opwHJcSC1zQ2sxChUR9YDb1zEtRH694JXxobkvjQQp69RtCxrnbAVvbNfGD",
  "key28": "5bEqi56381nfq8gtr8ZqJKgNjiiEYJS7Gqu1VSoiuai69oFXyRtRG4AbuTEnkLWxowQQPFVFf25E7jr92je87fqK",
  "key29": "2Sszd8gAaRntM2EuEhzYYXRGEgAT8QUhay81r3fkoxEJ86dLq9VrjiRp4eDBSRcobALaHTJfk3xDTcvYGrPbwvht",
  "key30": "4jocFu2xGo6Rj9dg1PmCEv5zqCTjQhDWveinJBEbpo9ucXncMRymDcJ5uYQv4nFmcWBSNxvU3BDwE8hqxLCXgiep",
  "key31": "3Dae27QsZBA8wuMh2ds85ZqyJzzJyt7JcmagAdrUVkX7ZSFUyvYvbvdNsyXe3p3zhc9hrPju6jfcHR4R27Yq92Jt",
  "key32": "5yu15ZjSeeqo98WKnWw4MPCtvci6Cc9eysV5EJvQaqHTyNjY4h33mJpwTTA8Hx95LuLXgB4FvWRHpTtWDVZMoH2t",
  "key33": "hJMtooEGr5CEgbT3SzzCGumcHQsraUXSMPyzWQjcsnjfhbMXgbJqg8G9jmgCihnmnUKpYCVQFWhJ8ZhVkd1j6M6",
  "key34": "2kNmVFMdgqAzimFeErrgB8uLhAJNtuY5rZLzJN21BVPQBpJcyt7awH3fCK8aufKH9PHZ14aj8wiHqYRG1RM8vcFa",
  "key35": "LsJaRoqJGnRAeLJB9rnXsZCvcA5L8yxxJ3oCPEvgjSUHxiX7uq1ZHMrFcgBHkPeh1Y9izDFBDGVWSvqJunUKgcZ",
  "key36": "3RUahZe7WHkJbeXPARhC8nVhEjyC6SWokqAUBFBufSM36vNUanhjKL4oszwsM69sMLAsUo5p2n5efm3Ruv4GgEGb",
  "key37": "2YrJ66gBkPuLM3D9jKt1W3NPtTz3No9Kttw1YjKxV2g8MvXvsUcXHWFR2j2yWudAcTbuHTyQuAqc9DbRnCTjArLa",
  "key38": "66qxMCBdqt8Wqrg1GdBaCvd49MUy4sLopzyagB55numMLprAsetoq9CW1VAVDhiAGP2WdzNLb8ULy3CrJSHWMfBS",
  "key39": "3XqA2q2Ks85vcSFYrh6nUu8nr41wjFTheKaNZWMjhRe8WJNUw3xNcHuWQmtVKTCGKRhv4ithqjnJLrn57LUba1u1",
  "key40": "3MVinUz2BR6gi8mJzQAuRwu21DBbZ2GhPMF7JDiYCrRv4WwR37teJpJimPcEQ2KMaCU9tLwys9yGyxL2XKCbz5Pw",
  "key41": "595esq9JPpGquCfxK5iQdc4NgZhnCoZXsLcwPpjKPcui2mpF2uHTRb5mBSpiMU9M1ATh491DhYW9jDsECWPTBeJ5",
  "key42": "3T8GduDtWYV1RwLN4cmpy1JWgvo4bGSCjoZiuPYo4QQXcSL69nGajVSyCpeRwF2hsXuTqRxSrb1Nu7B6kDUieNYe",
  "key43": "58eobptAfxSHkP1AuJ1BWBBqfFVLvBqSSGr2tFKh4cruCeKxo6KG21n5jAPutKAyVtbYm9o7c8fKnmhMj1QiGmk4",
  "key44": "odCuq4n6yye9j7JVHaifR9zcBAU85v4zXzPNvUQqgVbJqVFDeztRoJ57etZE2CUrLNGPusBJqPPh9ugSMNeajsN",
  "key45": "wr6zeZX55w4fXsZHuBEETo9guvCPJmo3Wa3ktzP7iQkg2BsQobAy5mmd3gDVqMPwDWd3FTDfKzM1y2dXSr9tVLJ",
  "key46": "3jTDHnsMX9xgc1TbxqNiuU76R4BsJoaDhnV4fWh4rL2865J7Hp8DubCszdrWQxcNYMsUXg4yuh2F34FWpDGUQXw9"
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
