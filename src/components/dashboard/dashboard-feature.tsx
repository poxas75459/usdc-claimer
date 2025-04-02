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
    "45vEhCxqds5vVZiaAUKr2CajRUrdAj2jVqtzDsUiETzKcEab5F9ngHUcBRK8VDX5DezAqWroirEZK1NoieptpMuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QoErazzCL342xzoRQSA3SzEBFLjs34sTFALonKopm2ABFNGsqVTKySs8jpm5J8WYRUmxQZkCfFMPMvsehpSsXcs",
  "key1": "BcQnMeQ8WrZW9NBHjC1qhw3G3DT16pqPqSnToTTCGY8Q2mZAiBfjnEJE6k1uRbA7EMemG2bgt4EH5aF8hpLgAm7",
  "key2": "2kpuWqdHdWC6dFDcMBgBEqpHp83BJuH8KEqubGSCkFCZP4Fhf8YDtNxEq9QiXc4c28RPXqGo7SCHLBMefUeEb9CP",
  "key3": "578EAUNcrPgAog2G92LpJAB1bBFeTjoCBK8oUoL2QBXFaRvac47GA5L8rMhcpVVMRgsjts4atkU3U4yHbqJ16kBJ",
  "key4": "5fkbQjsumA79WDGYLF5v5SGRSnguLYgekq1qPgMejHq5wBzBzVrHT7v9eKYGhYX55xDKMozyFkBmRswWBnMCq45u",
  "key5": "T2gZKG14GTY8MJ6togBTxqUSdc6PMRnFz78cwtqWqbheBY8M9NZwpzup1u1Ud24v4PL9e6frT4EwtEGEwUcNE5Q",
  "key6": "35seb4XxdXZ65xLAyka4YuG9gSnVCzaqxHCH6BT8tFc49chK6u6CxpaeqZ41AKYGJdqAJvzLSTCYoAE7kS4sB2LR",
  "key7": "5JsZA1B5GFoBrJ6WhFVhBdQY9z9T78pKqxcWnHgJGpsaSi4bEehhjzNxkqydvAyhbXg3L8csvMcUw4UXZ5gSBkNM",
  "key8": "ZbbCgGNuUeCBpvLQgNFFc1TLJJvskBKmZRfmJYFRSABmQ1TjKc2WeoQfjSRECypbT5nxP1Fzf7KcEMDJuGSAEgT",
  "key9": "2tPFPzNdq1TeJtb95Y5LBP9xtdYR1eL13qRPY2qT4HjP7zkbHhzn6Gek4Nx2TrhLUk9aBKx6MGosT5PrmnnuLjzP",
  "key10": "2iAyvQhSRfUTgnGEt1P1MgRxQ8WeCux4zeyRq9RYSKXzhAEJwWqp9Bv8otJMoZukZfACFnMysTnx9FmaoFpfHaeU",
  "key11": "31J3xbVjNfHsaTVMB3ViBQXECEbwUhNWTMPi3zaVoTfhBGcLu5jVseTApJo577e6RbyVAvXtrfCBsqGc69YkqMsv",
  "key12": "461TeMJRF26qQkgVjUNKTURkwNKL1Zr9wLk4bBnY1rcxqhCBt1hFc5FMGJNj7AMFcrgPnqrtufHQMnecA3bjY38w",
  "key13": "iMnGLSj4wQvKsTLP69wptXx1NUXSjez4mvbCHZjXSti6bJFzfCsjkJxxHQmoa2SqWtcfE3nXdbZ5xUqnbPobCVj",
  "key14": "aNqFVCKeUGrDYmKELb4sDt2JYP6xWM5XnGxJrAqCxerrTZV5T18LPfximCygiJQf2teSMKXsQoyTnxQCyrfzf4f",
  "key15": "5nm9xg928YokMTPDM5i9daWxVVZqmXUa6YSrc82as1z7EyWRVwDQb1mzvwRypSE3PKq1qWuKgwy7MBSF5DaN82jD",
  "key16": "2XTqFHqiNPTotFU47PPHc7pGcwGqXHXChRHvs4nKrt2uaNVNh1uzz3QFsC472WA9KMgw5HkMpvdn3AvRqWLtat1X",
  "key17": "b8vmJBeoYZAGvVHD1DHHmBDhhTsCsJfXcxtxQpvaySkRYMmaEo6fi6XmgHxfxRptVWnf2wUV2FRFRZybkxnxpjJ",
  "key18": "2sgfivvMq8mrNzZvaCtrkVixVii7sdJR9nc2duY3xMqt4CqXvqy2UpABAmnyXkAQfy1Y7X9aAkqfvjn3C862gP3s",
  "key19": "5vfjnhbmzdFPKgRWfDZU9FNgmHNfEtT7kZ7iM8Sf9pWQCBgiQ8rda4xgkpoRadmZ5wSRAMnaAreFEZWpHxRuS3wi",
  "key20": "3Fv8JQ4VYDcLvt3SFxmkz7ix7xShjbYy7GBGx4QDqttxzi6T84BmcNwCJFVtFLBozWVvcvH4ADBA8g2w14HyfczA",
  "key21": "4pWR4DmacF33zkbDCyc4PbY4W9P3pe3biJajFRrVkwWscMzXWGZiTgu51SR12NKEQGTwm8xhMiKux95i5Z98tFnQ",
  "key22": "3K5RH361YeoBWL5jW2xExH2FkfoUgePcaobSb5ZCizBCFYhVk74xMhdafjQu6yRieRHbSz667XpLFUkzDFjxtYw6",
  "key23": "44Vmiio24UazejyaaAqiNk6TbiesKVgbaxRvRNYD7N2gNwzn7HaYk7GHQYyZJp7yzua9wCd9ZqHNjFgAdn3Bqt41",
  "key24": "5Qq53Tep84uyYpoFnZjq34iAw8q4HSBXyZBQSmg9V9GNk2yq8niJG6UC2UkuP4JL38hiG8Ksf6gVrhy4ewPAxxE5",
  "key25": "2tSqk6yF2kQRbRJyBqcYbgGYkriSmxdfhWHwCMbaMpacjzWubM2Mmpiv3yLVHFiCQeiY5cULxq7NhXZkcDmtNtji",
  "key26": "5FkfEqXx9AVHCW8SGjDrjbQtRE334Whfed8LTJiGJEQNkB3oS2FKy8YVdeHnvMaPVT7mQeV7fzeDQkDEsxDtgWHX",
  "key27": "4hpALPnBK2GKSoBq9MsRfWLqN9Zj78tzo5aNbB6HNpGPtgUgeKGkzrf1EyetcfPDVDCG5q4UNn6eNqR2H7eXxLtB",
  "key28": "autuk8VwdakkgndnUwGXGZ6TSCw9oNPDodcuX9tzkmtkAYMFTtfxeE4AZ76iNRmBqkws9TdqS8MUUARY1883Kig",
  "key29": "5MUTqQzNxiyjLebvC6jnHwPFzSasmApWgmSrfbcZTZ5H7D5vnjt58djBPh1C4687D7HaT2W7u12gZWUDYaK3ARTG",
  "key30": "wNLKaHaGfxckEAx9epTWZ5kNc29GP5ytjYtRbaNzj3f8UWb476NEb59Y4U7124Ey2WseALHaC2k2h3vPC4bcwsA",
  "key31": "4E54v2x8LnXNnAXK9BotoctHpXSRLVD4mzBopzrWEdj9vM1PfD54Ju8VE4ocPeqLzkTDBGr5bsot3o8zWuET7bc9",
  "key32": "5cG7W8s5NMPx6gAeCHmPgqDnKr5Z6qdPDxyi5Y76ZopmozxpJSGuZkiSYwirM1M6qdHtVvSeLnCDVxFTh9MLuo6B",
  "key33": "3PyiSdCinMbV1pRgYG6q78qMvywgZV6ktxeu5sSGZBQQjgLDegdyTsEgdtiTZqBVWzytVrMDqsyb44MoqJjRf1mK",
  "key34": "3jev7N6vYSaGWR77R4q62pQEjd2bBfcQgx8SojfDx8vAMRsbBeAWwRaatPfnrGTAR4UH2hALhZL6i6BpRQzCDXMH",
  "key35": "5KrSYkg65XtqibVuWwgUC4vYfwjNHpho3mhahUKHBecYfJ2yjy33kSYH2Kp2YT8vXByb9vU7TGf9Th2gDB8B2S15",
  "key36": "42JfH7D2frDB4HCwtbkiwfQt7wcX3N1esWgckECU3w7y32NEzX3KfnWFjQR7twiWvX3wQQ4tR1y4Lw1SVDBpB5ra",
  "key37": "2ewNxRjW9wNyqrgtMb2THUGGGj6rnVLwoz2nABq63cn2S94KGXwFjAShDLEJv8DNFTk7wqFUoPMgnJtJoXSX9ZvB",
  "key38": "4r5Y195CgN1xkqV8KQwySWZRSb6bsfJZ6EiKnqpnjVrH67Qk5EH3LMcAmrmxBLyPwds711ynZdtq8DvDR9Wqx4Yk"
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
