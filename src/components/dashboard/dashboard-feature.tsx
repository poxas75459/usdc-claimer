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
    "3ysgrRzfYn5kJSAz8SWYtXqkompD48sAgNMtzURpn9bwYsWru156ZMHSDddawjB5yVN9WdKiiWpyjQEQdHsFeRDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pWPRPgFv2EzP1rYXegspJTa6a3fxNC9sRkpgRNVJ9z18zajPrAo2Z6CmvuvjpU4zDNAU7ag9SaTRcg5DAtmiUZP",
  "key1": "x3CEmmVP9udtzDc1oT9twhkzpNbfxC3SzsAQQhd7KPp3jycEqwQaGc9xvUgcq3ddZeYPzxWjFu9frwBG7JTYfA8",
  "key2": "4ajVP1VVKUsnyTXkz9GNUTd1fY3bVmPXtPq981mamy2DSu7t4mB7G7ApsDbgWsHb9DnnXa8Kiyn13ruDhA6Xk63E",
  "key3": "51Dp6vaNZtoLrRxs5hqKLKwghEJfEqkXub37C4WBVGeEBe5LM3tUafTzhRXVjEm8c6ufPoaA7ciiptKe6FEbg2PE",
  "key4": "4QrD7pNK9M7AD1YKBTLuVvocFC6ggzKKBK7344jbg6rjc4rf4jcyLB1KhBnJUFFBZZmrvnqAkjnXFYzANufWSPp1",
  "key5": "xKNkeVJRs46BJERQ4qjrULfjciQbcbAf2uvb5BTqCgZ4e9HPaQWvgSxLCwh7AxGuBHab1K7UPsP5gRpLXf6WfRm",
  "key6": "2X9R5yeH3Zf2ckBXQu2qWqqmEMTt4ML9ndshZGJ33ZAVbWUf72EcjRBj55gKZk5D4sN9F4MdGNd6HJC8ZZ7aTDGY",
  "key7": "3JwGaQojLn5v1krP5dz4ApnuzJ1r1HHSJEuqRgSw8C4JHqtSy16NVkw5sytUf8k3BsnPpXzkEYWU1XV9cpsj3D3e",
  "key8": "2u7kqbb3ug4r4E6DqSA2YsRZtF8Bc2q1c2NadHw3ULz6bYmUaKf4vh9yPEiEiPuRD8Rn1Z954p5p4APGFxh64oQY",
  "key9": "3Ja7YwczWFVttx426jVQuAFFTaMQXvQK2ZmAAq1qcmLEWpwRZNa3qA3qUYNwPxAUJA3fwwFfBnskwtjxsoKkD3Fc",
  "key10": "5gba7xMzU9GkCwrEtNJNHKJm6jgmFT51dvJ6jLtVzwpEwD1gvTjPXV91Y2599uX3CBxPJLy5rjhb4QTkK3oKw2Hr",
  "key11": "5Aa65xDCmVqgpwMsJfrjapJav4cvgwfP46Ug7LCUnyGAJuYzYvyGBhCE4FFh5hdZJSWUZkX6VGgEBt7GBMHaey6H",
  "key12": "2oTfet1KSaQBZ1eecJxdW4PeUAmAYrTh9inm1JUhsng4i7v67fdV5qMCWCnzJ1Ub1koDD13fg5hncoaNKwbhUUFS",
  "key13": "5BMPs4En4hUPTFjBqy5VX512sAq8VL7PZckiez9nQf1KURrC76to1XD7vyjGhZphzzpXHs62xnzFXaXYttN7uyoK",
  "key14": "Qo1eDeeauLdSGQyN2B379GntKVR2JNAzhqUFFbFS4agEf3DneYQj9VTWYL22uKUDQukwNUJk1KSTPc7RKRRLddB",
  "key15": "3gFf3FSzyZCS3xRNXDgwYtVWdN45AEcLh6n9SavqxG84HDD6xgomWU1Laf9XMDaSqkm1DfyapuX8RzqpBCAJsn8Z",
  "key16": "3bh8nQL1WR1PsJUNHWqshkGvDvNm64Ae41Z9wuRVwUvsy9mGbaEUWB9jQRyNGdaD6hoxQto9pQwNP7bSXbLLvT86",
  "key17": "ppou2H9Qcvt7mgpMSU77dTivJ9vgLueg4cBCTGxQ8japnvLRkwm32jVjgNDivLC5adjNbaU36SvALhCgDfpULsR",
  "key18": "2qL3kRbMdapSPJFfU1yQ59JxawZ5yqTTRdU1aDmYDvfM2L8DkQPWv6FfH6XfktwhszvqCVsPpGpDfdWpWbWeug7X",
  "key19": "2XhC1a8sRbKPbqjj2sJmSrqWbhxyJ7Jw2cYiSvAK6ozZ1yL8UaVkjzv4obUCHMEeEijxY8ULFBBRruZvBKRv5afn",
  "key20": "34Sc2SSkvf9G7VgajPmqvU24G7dtTJodYGpZdm4C7ZrKcbUn9E8VTu3gAcWgKUDUJAj8gxDhy9E71uZwdr7MMSWt",
  "key21": "2FKvEPoqf28WJa7oKW5ZXAqDLjxwNKCPRG5XVumW5QnjNW7qZDUXZxELSNzetQokYmp8ak7aPsu7uBXK5SDUXpwC",
  "key22": "5ZxJYDeBoygmabPzRM5YeqJwfcxVQugHEw4ru5EYK4Ty2vatnmvJGL5DycyQeNbbFDwnrJrVgVhAvxkg2hauajYG",
  "key23": "5ywfBF1Xe2U2gDb92NtEyLGHZKrgsP2GGBYGyvjZLJd8z7sqDSL8Ue2yV7hRgyBc2U7WR1KBXVnXLi6tGxeSe1rx",
  "key24": "5du4E77fXDzgkVNwha4VDzVRuAdLbs2jwPLipj58Nkx355aBK8JbMykG5LCTkMBiQ13NYhbZXv5zUXZ5VKMBZ7An",
  "key25": "4eQ8tKGEDiXxLu94xq2j5QSKrMmQ3P9rD5yf7Zh41DxDqrBnyMHcMYbCZC5sLVhQUWsS5iwufNaa6pZNAa6ZfYBg",
  "key26": "4yFXanJR7yy6E19u78x34fHVfn3vLaSNfuVwA5SJfK4HL1kVZ5fjC2wTowyMmcM1xdMv7soV4DF76cNLM39heUAd",
  "key27": "42shht9pWSKbYxtTmbVidGyueHpWS9QtXHNahwY3RCDFs3s4n8yBWmhPEHFRFneLo198MaCwKKHUjBcYEtmY54RP",
  "key28": "3VNRcACtnP6THK2Q3gvkMd8eNV4QFx6vHF3yUZJcRr8p3D3nDafNbzNcT1o5zmeRv37MBkgdBgm4B6bX5Bis8RqS",
  "key29": "3KoH5eKK7MSeozeb86oMbhiqMdrbrZsM4HDbsr7T7XbR9bu4Je2P6J4H7N9YCMvpR4M96Mr5L9jYfn47P6NRFUfG",
  "key30": "HtgpJYgRBBj1Za35VhKwyPDoSRhH52BxVN4pu76eGmCxSky8tTDVJJwLVJQgX1eJNtuMnHCMR3f3sMYetuhpVpd",
  "key31": "3bfuXRkjTidneWsVZVrQDmPkCXh2PvCLhKKgon9vgfqNxuRLmu9B84EVVSYjwoizbT7aTUqoBwKUmPMKv1kyHKur",
  "key32": "4vKPDSkfGzcEeNpFxPVJwfUyZANrskGGijz9cxRCUcCrqtos5cbDVLYunaYgwNGX2RnYcPURVZU3PYpgBW4PEMhp",
  "key33": "5jVcL6jZJ1TcBbNYpW9nmYkcry7JRi5eUkh5zuGwBpNhNS82qT231sfJmQZ857XS9uCdVqjXwfkbmKMaCAnx1fZ6",
  "key34": "2DWNWEWrCnVSC3ZCr645nuYdtbxYkihQj5jUiSddjnguZEKgbBy89ryoq46ok8RxmbPrkAcUfY3wucHGURkx25WU",
  "key35": "5SwPUqZ3RDXWdTH3hiaJHpCFzKT9YnxF8VUQmBYQMF9faZedWDZtdnGC4vjuvjFrtDAm2qBNBCn8GaQNS37dZm6T",
  "key36": "3Gbm8beSyc9DEjVriWv7gALJ1pimX4rWGnrGdGvZdZWetb2vBeUZ84jUoZXzm9t1JhjhZcZbFVstAL8VJE3EfyFA",
  "key37": "3qVZ7RxjkcrScbEuDpiXnw6ucza5doc2vkXAwND7XNHWyn7NWr4uuVfN1VCUFY7DLnUTh1N3F2ktLjfAY9NPu6Sa",
  "key38": "2xqTb3YTbWiA8m14E1qNRvqisJwAPrtmXQTGkE48JXzurNz91UngDaTetMRQ5atLVqf7TC1D4XLJvEdMNUbvqb1i"
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
