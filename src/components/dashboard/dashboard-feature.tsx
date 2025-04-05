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
    "4jn2eLqePX2uzPsUj1unccmRkayTDP7bePDhMNEmCigWob8fBAfRf8Tg5nc88kUCwL9mPyoP6nZeUP7wd3CZaUgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m86uqaQU26f5rtXNXVJD5Zudejhr1oVCptMQrX41VKzEZL33NMdC5TG9tEqnDzSxQdeEMp1LKVimnnwAhCd49Dc",
  "key1": "5bgNViCSstJ6c1yWiWwwnUSiNnLbExhzXrCpNaPPRzF5gEd9qU9Pdk6QyCxfomDybNC9ewGULnPTtaLBxP9zzjqB",
  "key2": "4qhMRQfHbkFtZqnoUWN6H1kE2GaBmzND7fhN7eZDv1zVeYvMzkLAm8JJBKKrvH1Y3Bdqbx2DJ44K1R8hWkm5cKni",
  "key3": "5Xb8NFNiwbgobDDgJYYYPXWni95pKw4sRnLFQ4ECWTSjTY8fycBAeiNeyUqSMt4vF6tPAdHv4LcCME74snDggEL6",
  "key4": "2BbN5sNJnDv5nX5qNeuxFJ9Xb4rWCX965f6dn2FPcnDhQhF5ujrMYNzeSAyB9WLv2RX5xUpnAKWitmfjReDFNVjB",
  "key5": "2wSQYQbBTfou6bCCc5DR5Kc1KceHBmUPgFxsnj9wSwA8Vz1srqZV3F3QN4DdqntxXvQqHRvTzZqQccvwoCD1D4jy",
  "key6": "3FkFU96ivoW2gDX3ibEFB2YoijgYuYhztugv776Tjs1H7hsdNrNebzo8ooDJFyfShSZkgWYKjYpYeoGHa1r3A7ux",
  "key7": "27XS18HzfP2qiV6ZStLN32eLFbMnwfKpDXKN791MsP5beEU1bDnrQq4yVkw7BxJEkjk7a5gCXGzcP34PtcU1fHhY",
  "key8": "32vcqoKfZisgr6ZgBzacc2RyD9z2c4RCGUxpcUMTZioTVFtN1jM79HKDahC1nAHMt2jNfYezyVqUSoSDfgCnZHqL",
  "key9": "2zGZYUoJZnJfj3eYvDTzY2We7s3zJUKNVbzd9wRYz8P56kbCiiomqPgEPXaa5uwimYZgPguHF9pbyMz7ejLFYzxK",
  "key10": "a7hQXU4wDoDVSnyMzdNx8beSmLccRdSf29Mr6NBTN4e2szjVgVYt4bZstWBcj6JNPk9vpdHsfaHgrbnaxzyCbxz",
  "key11": "4SHHPuJ5B3vti63crYnfCeVe3km4qQ36MPPDQVRCtroemGzAar9mpj6txtoS2sC1XYSZn7jzoRFH9Coh6AShMdqw",
  "key12": "qvw8S3JB2f5gTCvLJKNmQfs6WVuLX34nMzJdEqWL4YQwQqh5yjwXi2WJRk1Eh71LrEgEwnyP2MHcbnAoKG3FL1J",
  "key13": "3guXqwUmDMUygtMHP8gHBaBq9nihuT1gZrgUeK1CNq7Yd1grBvgqjkFLwNYuLCLyZgXpYBaT1hukSGJQDqNC2tpQ",
  "key14": "29pZQfYahc7qkB4u7DBBfHaFdf5A73PEJDxhxtMdBd1DYhiThy1ymwuDcQf3JCEPsx3KmA1SujNn1f68EPwy8Kbw",
  "key15": "2kcVQXw88UfQo8Yu98EHdLaavrmxSrWZ6gSy8yHqcH8jaWzDS8pVnxWMBSKkLgb61JFRZXm6MrTXoZzRPbqPXFt7",
  "key16": "4BMM1FdFyDWVceXRcYGLfb4fYHNQpL5LWKuMXd4WDdNpVjYMUR8SxfKdHRfs13sPZWh2asbyVn2QHL2C73DTaB2H",
  "key17": "423ESrfS2eTZnaXFroM3TkcUoAdZNU93j4FRhKaGFTKN8TeB3v7BCWoJzzxdMjt8QbJWkHGLJM1Dj8xxGfQdEEit",
  "key18": "9kAsJWJDkKn3YMxxqdgWVd4ASsdunMXwGmdLcabwBci3RCnn1NB4bsRPUvfBn1P3KNNfE1ZromwD6qUSbwmZnWS",
  "key19": "4YwtHJP9iA3wD3ZobfWkVMWg4xTNzYH6UWsGpFGp3zW1LSWSkoahb2nNEUsY2xCY4K5BsHVABKdcNxyedinG2K2Y",
  "key20": "3VV2fY3xtXpKQPhG15hhuMvAvBxew1WkXjnVBQA6GwCbpFZ6SyFPuCA2XwBqkP2oErwH1shRBydTweujGCXmBZvh",
  "key21": "2sgLszXTkA215aVKfU9LfaM8mNHaWYbSMLd8sR5uWWqnjjymmJe3ju2VcoYSwfifpBRtDmtkKmkRttHKtGVUxy6R",
  "key22": "5DBSNMoPH1NW9wrfrWrwi1FnyoJ7GRqnr62aWRVUP8ndj2LB1kcXyR8RyEvnr6rqnyoA6JqgdCcCJzM78w8MxeGq",
  "key23": "4Cw1qKji23AMoPjP8koHGquZM49PjkUJR3ogKTpszdcZbX2kY9ExsWmsoD1nPRkR8g2SHk3drz8aTk45RhhDPyLD",
  "key24": "MzGfeN3QPE1urrfj1xA1p2Y5mvnpd9QLgZAqdYm9Yto3UB1qP1pnAAjy43SrYHkjzjnBNhoNegfMxVo6S3saKdT",
  "key25": "59yhFY6opcBojnhhe5PeW4tCwVxyPB1D7x6Qfe7G33hZotP8uwiRYtWNNw2z25fYJvodW24NB6bzrmxatsDi6yPe",
  "key26": "2rMWe4CNsa3EKMEhQ4q8Lq7L4wpfT6LyyziVj3JzhD4Kd9WuHU7yBARXFNrqBgoDSGUawy9UGvP95m5QPxeiGGYm",
  "key27": "XgJWa5foVdzy5PJry44BUDeTYnSt4VLdXuABmzR76uka3mgk7GELbSa6hzjDSq3AHwKv4g7ctzNPifr3NSHmiTQ",
  "key28": "2xCpSteuUWhdoPYZjfZyXuygkRjCb9fxhe6DU7uUwi1esrFn198DWWd9fSAdSsuH47Bz9NGpHwmQ9MZqxGxXbCRq",
  "key29": "4hrpG85quHWD3W8ixqRmBQm5KT6HRoBQRZqzrQbuAjResCaf9DNdrVzLJGEVi5hJLAi7HqLBiJQRMT7DEg2K9dxU",
  "key30": "4oH1g5E7qF1SBFnwgDfDQ1zrbuVBkWc3i3zrT1fSdhXqG8CRF5AhAubotYWVghtzLV5wLdtjjvzMjNUzgTX48p6E",
  "key31": "368CWSKjeMaoXGSSs6oRnxVuYtUvQGxzUgxLchHRN3bpbuQQR4hPNenEusywAkSk5nhE4ojJthprMBJz63GA2AJq",
  "key32": "5wkN8mAUYP8NcrhMb7i877bLoNZxiZHStqhcmr1Aicb1HMBtwruiRg7AVAhbetxnZsa2NCN65wfRe4tGor6uPwDu"
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
