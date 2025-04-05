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
    "RyFDbSowzYjV4SvH4pP9SWyhCuN1RtVFYabpDDStprwVsHUqhn9WysusBC8uXH9w6epbknrSuphEq8PjjDTbtmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hdo9id8nrXBZEwo9n319VtCzi9VQkoqfv5xp8FJi1rug1nwJqudJr6JbdndiKtZ3AyY2FRgmbYEkRTgcD9Cc4z4",
  "key1": "8YiwqKqCNXa4JthS62S6cnX7S3DVcSLsKmocC48FzMevcGcNGSN51B1odySESBbu6ceWxvby4Sgukm2WbjFFZvR",
  "key2": "3sHhg9VCprL156XXwaH7ZXfqDCQVeLf2z2kCB4d8cBkLWo93eSWXo3XoQnXheHh1Xs6gN3rWcdvdNAZnij5REPEF",
  "key3": "4VmdJXGPNugZRdZkcQDM3MGA9G5LZCeiWieRfHZvEDNxjtxhNBHL9R3ec7W9JrpckDA58cRaWB7hLN89Q9qnkQdU",
  "key4": "29x1hcMGEThqGyvew1DwhMd1tUR3KiijJjYEgCqnBPRgGMzMybLnaLyaNc6kK2UVdRBv74vSmabYvBkkHqvZcsU8",
  "key5": "2Lu6AW4iF8LBRzFymdFkUdQfAs82Bg3F9MP4UhH9nHr7EUDEV1R4wmWJxWt4ztUNGYycTWav4ZfJy2jtCrXWkfoi",
  "key6": "4mBbrvEVvvvGD7GmWF8bNBNd5ozwnvq8FomFiSQUP8DVwkLw7KDDQcPKKibGHrim9vZX3QFxSGXU9hgJ3ueCiYZK",
  "key7": "4eyrHxMqBxKLnx5MK22jNb45tzjrK2pt3441LAWfe9k7BMQ9pN9k2wQ9XnEvy1E2CKNjAPAKVq2A8gvaSLSmgE7z",
  "key8": "5PM6v69KpSEowUsWSuPoMuPk1SU3ZeJPxZ4k2kmfCfdwahUZUkcfLdCJXSmKAks7dfQDjUdUFScMEXGj4LFgAB3W",
  "key9": "2Yy9dqPKtFuhfbYrPJMWXrusnRzQ3RPn6uSEAGcqTBoNfqA9GtzukRCtppFuch2ZNE7tSXNipeMkpkzoJfrkGpQD",
  "key10": "2B6GCchLJLNVaS3NMdYm11UdypB94uPoVhNWno6S5hME2Wi3K9gCjpkFwmSsmzC9CnYoxHAa1nRPDKb1zgEbfUDA",
  "key11": "2m4EkNJ3mQHu5ZdJb1MGF8UFdKnboeDrn6cpfgdaFHkSoSRsKjkcJB5EnBUJWu58ZMi4jjgsJoLDn4sP83XNaZUD",
  "key12": "5K7e6sZQrAvAGp6kPTvy2QVjn28TB5QcYCRzHL3DncGRtphRWK4RVryBWuxsfAL5h31Kg2uLgBvGz6tFudCxp8Gq",
  "key13": "8QRGgBdN3EEqiig85yhLJS4tJDvfHDfVYD2BMP3AQsGDQn5GmPTsvozuPqQm9ycCqTr7Ci7nDcNTCRS75oSGSxm",
  "key14": "4ngxdLgzcb7qEdPNGNcdrsmQoaB1RWLnjyozHiKMWofULyyF9PowAp3mxMBEfBqyfE7nZnJekBmLZLretzBs8bJa",
  "key15": "TTN7ATSDjng5GfQR9HwfmhiidBi7pwDcrCwHZyLYw1EPd9sUUHAWW28g9ig1BXTxfWyKQfCczHQmwqMhP475xjF",
  "key16": "5x1RY4M5Lwom7VxbBMDbNvrnSPLkgXAW51SFvM2Lnstw3KBrP8ueFmBed7gcarugV2uz8q5aibL1ksNPfJtCa2N",
  "key17": "Fvff2SPWSQj8XYPqHcVhbNEuP44cwnXfo4Sb5wSHqv5ZumLyHL9eFbStmawEZghMdrAMRxzAsJf92RhZBQ85RWN",
  "key18": "3VtyNWYGFTkPjw6hA1TysRpn9KfNxEsFBsanWi9159csWCBUZpRQaCnKxKijwSnv5KdRFR2GjkHmkALPAcfNqBM7",
  "key19": "TGCc2RAoAieYH5dPZaipRXqJLgpTgfBKkutQuCvsWFWRLmywGBGUJyFse8zZ88ZKjZmZphx4uhNvr9fpEYH2vNE",
  "key20": "2YXaPUoDMKBJ6B9et63xmo5ehFJmoCCdzWtPCCNayNZkGitWJkzgHEttZHuV2mbKENvbDnBdwX9YeGHKR4izfkv2",
  "key21": "5cu2yvqcjgwP8mTRFmc4xq2ynQHf6eamAiQ5kgPsuAEN72Gm2xSDPMxhW5ZU7CZvwkdsvmRVf4N1e3PV64V2uiTD",
  "key22": "u5CWSDfS9fKQKtnkdeahfejfamxcc61BjahomfjDcjH7puM4K1TjZUEcWzH2yZ76Yufg5jtKuCmcFMMkF9khKPR",
  "key23": "3AUdaHnbJEWStBrxt6CzPiUK9vqWqpZQfCqzNSr5yyANhHVrRUkiJtVPgdAvGexMMCu6kEXukzC23VWD85HZpD6Z",
  "key24": "5DsBFJrFFLx22qrpD45pxkXFDBJBq59PoqNzLucUCc56MwqfR8pkLGFsHUQruomSHWtZRQvD4rgWG61ethuBK1xo",
  "key25": "53EMoEJ1bTq8e76RKsVKa8m43iub2ekyJxKuYmLVFHGdmj3d9pYN9GohmrDDm8iEnJknqwFPQG6QMJvWKzPJQkvB",
  "key26": "HLjeuUKMjNdEq2tKibwLUiyXdQRQoMnPK85TMVyU7EmJu3x5ewQPG8FUwFkyjsQSutQfABG4zg39MTH4SGchBkP",
  "key27": "2fxE9oDndRfAQh488Yc6CEBbncLNE2CiZttaFXW9VLtKaZU4B6swTkpAnnHLBD8JcgVQKt81pGZhzuujLZAFw7HY",
  "key28": "4CRMYR97X2eDnawQpDvXNxRCQKwxSfPTR6CtoM2mPtZnNj4bmspP3Ua7GyDdQzd5dorJWkRF3JM4MTS6kqVoQN1J",
  "key29": "2MjTAvQuWgMnYVmtDcRpjeNUUbBWVnCWB1Enot94Lbh48eAyrhJLaBoGrpKHfiED7ZRtnPaLWDKxh3AvQhKJ5Nk8",
  "key30": "5H1UdL5VUS2iLgNCKBQwwmSXUF1EsL8jkQtB2dH4KFbxpNgswVJw7RHmxeuibP46vTmzg9aW1fByYxZ2w9GmX4Ti",
  "key31": "5GzjxoaqokdfG9NrwTPKCdChGJ9NK8adBxDP4KZCekHfLVcTmy84if2NQPVJkpXxhoppTdnT7JBJPDefo7yZJB7W",
  "key32": "4SkvQUDBVEr8k4Bi5puvHx8VVxVEbTRW7qqA1Tr21EdyVcduUBwG3Tei3csPXrvsjZcU7KPUHUoQ5j9Ma9A88J1p",
  "key33": "deEusn9oGg8aNpZGta6MzruUwtBmV42zyFzXmZfE68WS5JZ4AjTHM64uwP9EfhKTpEhHmJUJG5TmqYFHkRuS5AS"
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
