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
    "4ueCDY58LBnTWMRr9UVmCKmLgXATANnDfxREdo6vqGWDbcgQrrtLh6aR3v3AV3Mbwmatr34VC7K4tCGXUWHDJhpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L8wzHTU8JJENdEk1DhA8w6UhHLYX7HK6zvS514zZhMCmEodvE8CwcpankWQcwkwoJsdjbqr1PRRPEoELtG4LotY",
  "key1": "2K6E9Urw1D1vCXmtGWysreC8VvHvpy6rb9SRrvSMpf1nNLpaMf7QcBLScd6tEYKCg1VJ42DKXFVtGnntjHMaj1X",
  "key2": "4okVZQ1UcxXXy8hEfPV5rjeurjfqaGrwT6iiBQynWd5tMEWJUxDf9itJm8owiu12McVs1KbKPJJcfjRoub4pLxnH",
  "key3": "3s9GwHw5S2iduW2qqkeAXqvVaaYpVZmoBRVVSNBWYCodkF9mhCzQBue4M9DYBaXCJdvpuGPQgbtJ17oY7bosb9vJ",
  "key4": "2Dzut3EHJzjUkgyU93voPNWr6pDccpVGVMr1skJigGPhNELKscPmmMXscxHTibnKavu5r59kgwUBifVyM4cCLF4j",
  "key5": "RwZWcWiWPLFyQTmv42QMk3hB2wDA8fZUWJ3dX99jX71pPELQyThWExNpigfKvoGBWrMf3crYca9G6299HvsHwVv",
  "key6": "4hmCdpoY9Brz4YPjaHYLciZrAasf1ZDZsDnU7mZGR5KVQqFw7voodFffT1YVeUcuWGxcXV2NJwDt2fKeisrfAai2",
  "key7": "5fXMxqT4TkhX1i9V55mX4yApTBKDmEBTAUTpZgHWojFyjWBeyScHAj28bymjanFShHVnayJFi1V1N4UMUKdEnPx5",
  "key8": "5rgKVKBedfPNwrJcqaKvcqukmAyfb7GSJZh2PtuNG8iuyvJfjiupWKFjvqJBZBWTQGpD3DVMbn6e83iKSVUSeCDi",
  "key9": "21rob4scyBwAddj3jACt6GfUVeuBD8fMcHTcZR9dd49W8yJvPYLhSmEX5MrprSS99DksrctoTGg11VtoXMioxJrH",
  "key10": "59VRraCsbT5raq5LjtuuKwofRtikzEpTiWd7fQ1HMzp51Qxfbh1xtqWhPRQ1s7YyfvK4sWfaMVuN8nHjo4LPDAjU",
  "key11": "5u3VaeixgbxUbLKVfuukQDgJXn16bgNow9skQDZAPGBxKkfr6LdHMokSNPcsGH5ruJDGPNMLSGAfY75bjatqsxpp",
  "key12": "faB1HtNUmXiuwGM7w1E8KYBAaz737gKR2sCPX3eUFPEhNSQ3fWQC52cSiWWyNEVnyF6ctD2FuQN2zSWBJXi38tC",
  "key13": "2w1Ef1q3V4EXZskWE4aFCfJ1iTRAJaM1nLo36SoGpAN2c4RPmKzmp3grNLC4F7nwUVKf8iatYEvZv4sZKafRgNKc",
  "key14": "2BpKfRTv5hqaF7C3mBUFCqEwj3T179WcvGB8ryvzzWT4TjNoND1SSrgJ6W2tqxqosCUheE9BAYwFJongkSCmfZWk",
  "key15": "5mupTcF7wKjXqbB6oPsJ79CZQXRE6u6mJEeQ8JXKU9X8FotHBYye4w26G3oD1NHC4JRudUrm9qSM2WZtfc9zRnA7",
  "key16": "52ooZfgCey3xYR4FKovMeMskMTGJSnmwTp3hXW6g5aqGxZrXuLcF8cPNaM1ErVjDYrqhL2MXvYFBgRi1Wn7myKLU",
  "key17": "3rWAa9y6nDX5hGkYZuEmHBcwp6k4RAr2LCnoBeEDQfVSQE3EvK6zz9fU7KSqKxQksZkrVLXtX3ZXvWLS9eRxSKnE",
  "key18": "p5bzkg49EcnkwpwAqGjfEjKeY9QRfY8dsLPRkUetQgU14q8VG7BDiwAyRUAthe7i78L1eGWweDaqfE5g8Gh8E8s",
  "key19": "3fXtkFa8Tvsiqz4jHKfpXT1uxVNvoYECs3tRdjg9o3UcBEMeHizkS6bRbo63mB9tFmFKqycrXpGGzXcf5EVvxdXb",
  "key20": "3cSh7sCBJw9rmbXMgGFZFxcLqyekUw9LMnBSBDSi9Avvjf4Fs2fHJNrS8ac1DteNjkwVwHnkZJf12E9NxgmuPtvp",
  "key21": "8iUgpk8ekmJyRD94mNb83XcBVuVqWhLefq7Hfi8PQ6CqMRba4njTDZJdEb2riXEyvM6mWUV1XRtUjS9QsMcRnzR",
  "key22": "3ArDKiuJW8u1xCPWnnbkfDjDgQD1cd2eptBQm34sQm8Vsd7ho13VoNaKJdSX1oaUbbPn5dxjqJy24bbb81j2tdGG",
  "key23": "5oPU842Q1VY1CAsxWc1MQ47pUi4Ud8sKMz67WQzzbUnzj3gf1c6o2sP3rDumHtpKXgxipcQbRzX92DzKnWkQQpKz",
  "key24": "4pY2d9satrNcgpGf6dBV3S1CJ8MXG8jBhYDENtpZMqNzELUVMZETwLXFHefBTe4cqQjeBtKLgnNQEJvFkFYAGJgF",
  "key25": "3AQZEhJKYWS4jCu915VYY7ZwvQzN9XuPDRZRPiYG6MTTQUhw3sNzYaoTbJ2jtREV7ehScCgVwPnXqhiXpPcoYYs6",
  "key26": "5rRHfKjRqJ9NGRCJNZJK4dJxXUYaJ5xUWievJn7FkmMnnY1sgSuisypaQcojaYxMpHbsJBqc2sXYw49DEPeeDiDx",
  "key27": "AHMnyMPfbRvmQFm2xDzCHaUErszmfupxCsKm35DAfmofuq6aBsx3wNYkfp2gAcLiutHshF8C4jfoANDUi9uU9wG",
  "key28": "4hoQA1nLMFJU4T4H8LGJWwuhZnCfrqRfxZtF2cxk7ZWWP4HuwK2HZjtvUiEpewBVkBwp6uAJMXYAtFGkdZoH7Ly",
  "key29": "65xdbZVDcDcCe34cWoLTrmK3fduw4Wn1ZkgA1VtFYLh6Tdq6xfMm27RiAGbjhpVnhADnR64RJEodD6k3LGvM4oBE",
  "key30": "s2onpWViFyDtQbYpt22cKfeAsPpph4DyBRvJK6RwZ7MVCdxznFT7LkxvftRrqJWbWVKMtUnGDhuALQPsThtLqLh",
  "key31": "5kRbbYovQvryWKwmrr1jvdY7uejSpqztzk3kBszC4VJTrXWn9QJYPfxGL3ZiZV6eh5G6dBLdF9a8y4Ftri62v7R9",
  "key32": "3GKnJAk7EQ4BL63SqJQzssTGzAo48ja1dVciDoCTs8zcurfZxmUCoy1aDqfoq6rKKeYhaPjBRKWoyY9qbTawkr39"
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
