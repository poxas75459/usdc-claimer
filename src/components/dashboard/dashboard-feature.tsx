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
    "pxjFtAyUXba8Jpin1W1UtkzGWaXbhgyMnxKfqgyWC2pUpuQ7NBEa8p1w1oVdYLyeppWCzeSxf5SunfDvJARJpdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ezqSvJTTs24xsQZkja5dQ4FxfSrZdpRyDZH6F94mNbVqEeaio4i7Z6v7g1NSdoDhzjWtzAfHJSoT8brYDS1CtrP",
  "key1": "4mVBRdSV4pHrmPhJbWGehqgvKBu7uixRBKxLWka5uNq8tsdsfoAk3zoSmdeKB7FDYe3tkCEoWxJWfkCHRxT8JdJ4",
  "key2": "5oZnwz6QmiG5Jgf9jcTeSwCUw9RQVQhQyjsqWq9rv9RTCx885eL6YiQzuyadYDm8zkZdqXRP9bAtZKFPssXTpcem",
  "key3": "yrHLwBGaTPfQRwRcdJ9jirEykoDBWdHroNRdkzk2v8LENMtDhLmgV1cEnvK8PkY7Dc2wuvuieAWhZv8CpDy1kxt",
  "key4": "2fUH6kHoA3xbVfRWSjcqkwvoLeti9ED3hBxxtV2ZdUAUrgcgaLzr3vNp3SY35mgDpi4HTuQuaiVRVMB9VAQ8hKYA",
  "key5": "4XsqPJis5cJdkTnoVU3XqziVNwaZ5cFyBgoxPUUfcuZwmXqnYDqMAcmAzuQ9gh4yfH81R3MqeL2M9AmZKnDEALzU",
  "key6": "2vQuba88DKee2XA61dRwZUuqRAX8QzXW1EhNJwDufqXKTLNpeSZAP6BikPFtffkZgZy9m5U9qRUCmFhCJ42ZYrFB",
  "key7": "JtjjdCK3fANqs31FKvSMQhQdeypwm9A4eAxEzpYAu8ezPBEcf2ivB38hRoWngWMDtwAyd7KnmFnE7y8vXdF57HF",
  "key8": "5KvhbZzqmjBdgyxMyPFpeGPkU9onf7XXjvfMHZ2h1JMHmJTBwDV2Rae35u9bi29QndAYMSmoe9rxUuQmLSSS54T4",
  "key9": "3KYEZimShaqcXvEHp5pnsA3bDbs6voiLUAPLaK8jZAY7QN3gLxsN6dvrVjwLqhTmLqgUCVX5pwxmZMKY4bzonsCm",
  "key10": "5hK5eUDhvwsHNSppH6ZH3v9J1rFoj97pXajZkKmeFnbNgJ8v2dmKcAqaCcrWpJtJYYP6k1XGqCCW64wE87hpWnsN",
  "key11": "p1bEC5GC16v4dDBzYaYs2hxxtvmZ8s9Wr6uRyvHxuBbKLr9XSTB5CDj28cYnmq23rLdhAnnASneDRrn1yWH2nm6",
  "key12": "w53DHN2Z2AYnezyrXNFAbi5r7Jm7grPRzZJMnjY1JLFasuM384m2ofn5dtR56yNzQyxjK9ZVbMD83eMu95jSTbi",
  "key13": "5eiweAS7dhwmbJfxT5JXSQZyPf5vYkTvpLzFCtChyuhufjQkqBWFcdEjNRKNC5DcRp5UxWj4SDrJW8w94vJdPptC",
  "key14": "3J86b9bYJaWAA5rybY7BvdbWPDgnC1iYFBxpmTKdzBictdBfMhP1NBuZVnQUMHSbZejFPMBLC2pyjfbmqPVz4ZqH",
  "key15": "41o3frR7iaRqC8KWDHdGQ4nYuDEHP7K4SqCF3t5kW9YZ7J3bqcWwz6bLn4caWn1XGGxGvBYWz3Q5M9PEsQC73Xks",
  "key16": "2ohheJDeYY1iq8gJHJLcV6TJS2XtU11NMwai2xHKwfg2oq8yunpurRm919Ar1cwXNEB4sDqpcFrzZg9qytQDskzN",
  "key17": "3KKGD26shCegGmk1wSLqHSKhTneuozSeTwrKp4XBKi44emqwGM8DrV4nBG7WEiNrpxMdq4TYtcKSNLCuVzrfjS9E",
  "key18": "YnhQ7uxJRECBgNLwPQyy6PfudS15xeDB21fqm2kwqsudp6e61XBeXYpxdq7sFLQ6GRwWtnLfse3jTYUabE1va6D",
  "key19": "645Y8ix6T46HUdTpRcNP5YmZJjEAEc51e2C1dDYMUh493vJTX28qoGN8PJNrfPCLsTzTWu6mZYo24TkwRY2bRoyx",
  "key20": "32YvJL3xHWeALHG2HzGB4Rwtwus36KJxfMFcTKt62xZkdAMU9165Q59DhVrDp7WCLsAwF5sGt9V5Xuc7oBGGc6p1",
  "key21": "55pb4FQahp2ydHgp82L1SKuaiwBtETaZ1Zu78RW2ma7QGZpmz7UnJog3jMFc7DT2H4Y6EhGhmy9r769yhmowYSZt",
  "key22": "3PrunKKebVu3ogzuUkEsuCLejpnhxVQudeWwzcFvirV2MEe1yYagXf88k325mgW11asNC5q7ozuNgPR5STvKYGff",
  "key23": "38VJC88jvxwbV8GwEM8n97XfWCp5yaFnZjDFm1mbuYwP92mhGzyLx4ndmgHQUTuZK9tV4zBd1srexEgyVJgXmP6L",
  "key24": "4gcd7uw4RboxTYVGbRM66Pt8WY7YHbq8uGzdbRGPrimKwGHeUMnkczfLboLgsz4ov9GYJHx8n7NVQceNppw9KoWo",
  "key25": "32Da7146qkAYoxafbKw9sbtHGemo9iiE7yK5xyFrinB89MzvebLGsLNpvb4j4BQv2Nw4pjc24N6MNTQtQ8gnzAyM",
  "key26": "obZ1vTm2aqL7R4knA9zAgLZhysKx3SVwZN8F5R3pLmyzzXc3n3whcAUuBd15XwzcauUShbQFcEmmwQ5RUmrhFRY",
  "key27": "59vYkbBL1yznoN3XSUPUZQjdXXVPQtFEz6SPGZBYonRDQzg19df6s4Ck6jRpaVA57BgrP2PQEGsTdUyYkVGyi1Hq",
  "key28": "DJZixWoMZeZ9YTfUF3525C74qBvSjmt4cDqwUnJL51u1PcEdu85UQD26FW45mqqkhES3Ls342VypM4GgzV7Fcoi",
  "key29": "GqWjxukPP3gXo2LwMq9zk4bTA3NtoTok9BQ16i6LhKtFHxXwRAd9bnQFZZC7F2Q3Mcpg9dibqJ96eSiWjZCEcr9",
  "key30": "3a6XPK9dMXArvXeA9GNKhDksRRgwPqHxgB5EnWj5V1KcMSWEi5sxqMfe4MEvRUpfQeBoTyjRoTw5TpUFUwhwvSBu",
  "key31": "4n7Nrdou9Z1kpFYbFyXZLpi3MY4rjMEuYpT4i7MrpofkVaM9R87jKMcv57oyeta9nwLEPoBLiV1VdPaUBG1tKrHQ",
  "key32": "hcdEbebVbABZf1bq6DovPcj6uiGf2B3RhiYaqrZjGXpTnxmseQFde6ARuQeFxiUvzrc9VPp3bhC21HXrCyfCy7B",
  "key33": "3qAvAcHmAaP9XebEv1E7qtpHW1awGTjovVX38Pviyup9zDrbNEUdGwxyHhiPDp49f3KbrP23iJGCm7AvnpqEMg2w",
  "key34": "cz32jXMoU9zZJnr1r4C3mCe2oDfKYTkXAEtzLzXAhJAgZtJHTCCRdEruz3Sg1xBbVQcZProvdi8ftBbGYohqHsP",
  "key35": "5GghPLx6nhBcYCypThKmDq6KEnz422sudonQYCaSeHCTiXTRskm1EGgauct3V1HCf7KdD5sZiWbPkhfRPjFNKHmp",
  "key36": "2u7Sm3utAqQBnWKADsf4oH2Edqi8EHxvZ8HoAE4meiRLM2nGHFBLg7vsRpR65aKRhH76MHcmPW7ZJ5STa5L4t6Hb",
  "key37": "4Pabk7jkGrSBLBFXU3CPnwUEQGiiuckWvVoSmDJncoA2dJcM1sAfkURQKDrY23eDcWwTqG2FJ6uNCw7nbwBBWVMj",
  "key38": "48kmZME9H8nPxDRuKbn1Mx14B2AAHA5z3PH9LEyXCvZMF8Q1sRgyNrYEEiWcDWpC1Lu57sEmBjfwZdC7KMBKyiYQ"
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
