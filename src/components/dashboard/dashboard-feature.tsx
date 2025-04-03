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
    "3aSsko1GyaqzCJtNdW1xaNkuQGJNpdr6PqvKVWFWCNDh5kHv2B3gQ2qc93WiMtuzBahZ2DGJpgMGM3zxB1N2dFHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NMqd1Lpw2KVRVDWqW9Hh7XryzHtm347PcYvxx5ZVDxsWhxXWyLhGshxKufQvQcCzMyvSaC8pSrVYYGgp3oYXutv",
  "key1": "3J6pRUZZgekgi7dx7YnsY8BSVAzNBow5krTSUbagwNA1VUxst7YJngTjgJC3mdSg94St5zakCo5SojbVx5mexJCL",
  "key2": "23uhKkW74cAPCdDTZtcWDHSwuZMADmVavynd7oZV6kximtqKRppXoXeCesV3ihRGPpb3XgtF4anbqmpv7trPkrk4",
  "key3": "26VaiRjeykGvhi6AyzuWjqjMv5ni8ZzVcR5RFZrJoGSgXmzV5pqWW8spi4cSwZA14JxVRFGFuVkwYLeFTMmNooqC",
  "key4": "29dK5p3SSW3GZENwnHzKTrhuanJitq5LJ1y5VtpyGEFieBJ7zhx6mkXQHBqf5dcrdYqfsoAGQax9FpSCKJTayJ9y",
  "key5": "5Doyy6puCfqJic7tgzJ6FtVq551s6bhkseHP58AVBkm8rKwBQnSpvejXYxzTLJKMDsKwZUJAA7uJWduz2p6G1VGi",
  "key6": "39ALFgub1ipGT5tCUR2yUvmgteo9bLzqCJQhyVUyykK8bxN783YgVnR2ZEopphMcJ5karGGgRdPBKRvpizLRvLQ3",
  "key7": "2D3zG28jLrTfZbnnNQT8FgU3bKRjyVqhE3YwnNvsATAjN56nymhi1i8NR4hSbXN7Mni4FyLZjg1JRbRYWhwitsYU",
  "key8": "52YHmAEpvER7t5eyycgr6ca5vg1EygiAyQpxd9oUkTRwKPETbBmui7xKfqsRNB9AaaxZk6BQa2akfaxNhVjcyBbi",
  "key9": "3xmR6NsgSHx2Xr7EVwd1uQR4ohEwnJdvK6LCqcqua97j9o49JPPV6sjMVMLU6PsPeSJCiUtQzex21ffSV4G8Fae8",
  "key10": "3EsE9eNLspzaM7exgYsoK61kLyUMfN7Qbb2piJhpvNW7Cj5aX9B1AiN1WDByX11RX8Ymbft8mHX5ADnDoLKQrEuv",
  "key11": "4Pm7FeXReQAcQLyUQZyvKbYywnZWRjQKv4RHFpsC9qWnD8cLi94JDdVA14aPA1zJxrNGfGgutBkpBNUaeK33cAUA",
  "key12": "5rNsGzQgaakQCC8PJPPk285m9ATxmgj15o8CGp5CvgAjsKvMEmFAD164KQCNrDSNTcsnfzv6bfeWbf8pNAN13r7q",
  "key13": "638TJF5GUaW2uXWzNiMcuBhKaafXzbLfMcfHViZ9C6Dd9z3zYbzXiWBKJ2PeDeqmNZUqyDm9EbSATou9Ur9SmJKP",
  "key14": "4WF16nhZYQSHcLP9m3rpQ6DrjhaLr8vrWJ7L4rFNukmqfdu5PrmwuHnm9wxnncyH2bz43NnxY6pjucfteaoFS5Xv",
  "key15": "3fCVE178WhYmiGVAFrhnhPJ3WGFquZiFsi8X93qRgjj7aQLp6HmuKfYWP9zxYpHXG3BxhCwBCxH5fabmrZV1u8WH",
  "key16": "4VnPk65rqgE38zM5pkPhN7Lv94UEGjctbLsktR777rQ6nc1PhLEwdQydCWtfW6M6C1yZzrkY3yk6bMnDZEXL11Lb",
  "key17": "44Titp37paCm1i6FeiB6hDQwvHVhTLzc6TwkkFAznHTVZWpWEZrnkgxbfzMRfsecD2GwRwCCsXfUSB1geFgVa7P4",
  "key18": "4zsd5DUFE5QJSTSjL4jtKd9gXVc2gmhfoPJkxgSu35Xi8ht6pQmk4yNw93jaxp1fC14BT1C7Cu49dfMTXcz813uc",
  "key19": "3KjREVvwoqZSJHapq2FzE3ETx9sMVETpGEDMdxGM5yh1uJm2MiVRGfKkcYcHy1cNji8j4db4WgY4uCrRor2gLYF",
  "key20": "2RoAtYfzrM1kbsmjx64EGFDAM7HoodNZTyRfD8iMKEF77eJbHqa1hbAEh2ciHbBNXAEBR9geW7HZrF4fZjgmN8SF",
  "key21": "2MT2hMynzTiedzR59U5VKmWRmfo5UNAE7GGgYWqerJxEGjCindG7jXYPiP1221Mu4i9zjWwcM4i5CEFsnPhyh19R",
  "key22": "9fuqQBF98VdvJc8sVUnwW54iPeeRubWLf5FEHoZKVyvypQCv5CvEXZpsC8uqXF2qU9RrAxBbqEo4J7bZb1UaPqh",
  "key23": "z1fJE7ZZ7HtEW6ydxFbKpwnGe3VRC2R8Xb6WFCJqc3wCkR1ursCfxwDo5yxngoaH1RcG8YFknZH6jPQiThQGzrx",
  "key24": "5xYj67bWRFkaht1UhYmGUZfePPti1QFehJYh1KbbTp5maMaAF1yNWWe38UXv8LNJR6C2LQgeCHhXTT4whmVWAKcS",
  "key25": "MxWXiAChqs5RNZq3k5yQTjfMdW1RVgw17zMCbtiTzFCfwYWXTixpMJxYBBvxFeS4sdPHpb97rzRa5tRzuCEXFUB",
  "key26": "2s3JvEr7ZKZkUGSL5YEscViXMCDp2fx25FiZJbtYCr4fNfE2KcHxSR28qsiF75gfvg5YLrWokREc17YgcCi9nHHw",
  "key27": "48HPo2uUDDUV38uQ72fnSBKWThey4kp2pKJUguXmwC7PaPFV3Cdwk3AGLMBqqhaa3a6UdvyRSSKwm1aWLdW4KV2y",
  "key28": "3wExrauWrCVoo2pzY2Rmt5R8X7TBoLKyjTt3Zpx8EHVwgw7j4FKW78ZBDypHK7Ad17BjSeHggdaajSutrZAX6Fch",
  "key29": "45rDqg5pRit3MS38tcfzWLALmMWAMRmpWDqNPsBUtuzVtYJcAEfAf2Ks4MXG2MnEakPW2TwCY5QrcRQ6MteeyUYX",
  "key30": "4iJn81UNHkUzbNE3JqBFgbRzpRzJuy6ExY7rbb28BgsEP7nJppkmopBYuf8ZMb9GWaVxJsFnF58xY1bnihGRvJPm",
  "key31": "3dkdUYbgDdUVCtmu3eia14J2EwDtEEJJifbBMd82nRUSDkXAUiu8HYEoeJmf9ZYLzqL9ky72KmcapKEwgR8BBVEm",
  "key32": "5a8gjyusSWwpwQ9E9rH42Jd3bQvCfdEUJPkALJsLsjsfXtdZLShcH6b65fKZSzuwf7EpSRxGfZqLRi93fozM1hNb",
  "key33": "1big1RFZpyC8rXwasLgNRTwcGDNAPjBoevSRZQMMQvG9dVBxwfes8uc1JjhbDD38E9PUnc2m1paAmu2u1eEKg86",
  "key34": "n4ns9b4f1ebHd1aqBT5f7W15Lugayr13Fs5tJE1Jt4FvzXMX2mFomMnzu9DK7aARUZjQcBosmja1FSJp3cVvAJJ",
  "key35": "iZMnqmZgD8rQzzdEHTTVbBzy8tJn1qCtBAACnjVAUAThDf1YBFWmdv4Wq9rY9oznte9BeQfQ83t6ooospa99Hbd",
  "key36": "3qG79nByBbrt8sSrq1uPpTFJkVEShTT3V1qquZ2pYsE6kLbkq2hTyG8exKJ7EBWaRJr8jjnav6tbMYLrdMHMKAYk",
  "key37": "4zC36snzmFBiMK5BHJdTKaj4jftFbpQxvg5TdqKkXncVQVkJw63XUhDSmSDmfAYVWPc1rxejPL1fiCqQ4AAuvBAD",
  "key38": "N2pBp8fuadJUG6aNHov9RbXzjCvMyzN1qUc5Us8BVEVcAav4TcALD4hppSiHMUXz5KWbEHvZoSrw3LBgHYE2JqN"
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
