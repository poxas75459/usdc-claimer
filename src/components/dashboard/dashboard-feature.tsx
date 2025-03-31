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
    "wDH9jRKHgtM7Jk7MLzNXtetYmNwHobduhgumBS43Z1YxpZenP2AC9xujZYmMJVn7129SQ5LtxaTfpy6a1Wkc19D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fh41fswtkbaSky8hzAaWvDtC4XCzysuZmFFzKPsr8sTCCXCUoix2aKvMfFiz7t9SJHtNiByE72hUtsRFMxKPDPJ",
  "key1": "3L8KSg6JifKPX6ovXQK93eTuFqpjzbZJg7vqXQYrM75fgQxFfMqE3QzpBegx1axTbQFuCLGJRfqPE2qLzJ7C9hzy",
  "key2": "5j2y2Fxr7WUQcbaigikd8qAZqBQeM3yNmYo3VCtVWdrXU3FJ6jDt3vP7YXQvTnxGyGcaXtysNHXkJTMx911zY6zD",
  "key3": "4yMnD5SGxstPnjiiDixawq5VJykTjkUPe3Y6FpUAsSY4fW4ukSoso4cADJAbbp9DfjrfEimBxaA4pTPLRtuoD8Ro",
  "key4": "5XQZgwaqMV5gE4WXPQpB4NKK4a8ST1cc7mnUXctDiLD8oM6BWW8tLnRVzNtgMVqVnuktF5USkhJfxHMPQ6yVCV2i",
  "key5": "NCP51c4X6WZrawCCbUSEzkvfZEVpCvvnLZ5Esnw4QbHAReqNTUDNbmCbtMzHDzxwJZaNhDxVRp3hPzfC79ieA7N",
  "key6": "56CqVahnXkadL2JVMU5ht23q3yc3tzzmQb9mh2KbjcYAweFsmnKEYML4o6AfLpHcsAbcjDkSksL85sHa4Ja5YZdm",
  "key7": "42tiZ3zyNujnHQMiRyNL1YzB3KM31JwZaNyqYy1qkHUS5EMB3eNBkmye1XDtWNua8MKxQ1oLrQtyGnJtbANYDVtn",
  "key8": "5Js37Euau3CcnS23QKmt48mydCU49y7EDXktBooPsDDWs1Ek3EKJNq18fPXH7kM8EzsyhECia9CihXbZ8yrfM6YX",
  "key9": "4Ya1quBXZZe1rYhXbDCPePu9QLLxvcs21UcurWDcukvaC2KMxxts3zjEiKL9SQP3MfAN9CbfdU7BY7Sz6WCZkVVf",
  "key10": "VWJpNVyhsVzytzqMqJ9ad1inJUrNVCLiCSGdpt56Z98PrH4z6J4g2HeGrHDe6vm8472G9hgoMyvnQYgKQWTRgJY",
  "key11": "2oSzVRpdvqPG5qyRtLN1WZrAZpmwfrqH3VndkJWr1wBtHNifknumBzxjJHDHweEJvAs5Lr8qY61SY35DHxfy1idf",
  "key12": "5kuLMCnwuR1xVNxmQ1AqS2WaPSi5Cy8M1hRrEt3exc89mhQmWfAtqyDKpmUeDT66vLomFc3i5ixcFfkyXJokDFKE",
  "key13": "3tVJUVa6V4ufKmqNHnhaWPCCSBihXE3gZ3eghzkJW7LJDmm9PS5foRWSnLnchdFWhj1SXLvaXxUEZxKko6UaRGkU",
  "key14": "5ynUiaoszDDc19PP5CvinsU8eq9sCbEprwnSn9QXEDBtzBR6hNh8e6mzQ4MiF69Rt22JrSx3YjEQnatJTbvJgNBz",
  "key15": "41s64iiEUdTvjpZ1rYwXqrxpHzH696SVYF18dZ2Cqq86FkYAzGE752K1GqkYUVihZRqfjPeeBrBhacgdoh43pM5U",
  "key16": "4us7PXtycQxbtFNHGqew2WsmugqNofhMkoNc5ctj6j76YaypzQhWDccaEmvtHahxTVNztEfXwL8u2NSKr4RWgtAT",
  "key17": "4mgwzbKmf8Jpq72AfRwtdByoSPV3aS7gE4BpdiZ5ggqfTJG2Mf8qrkid6LQmU5nVyB2fFQxVVKBf1rScnijj6dz8",
  "key18": "5bN6kMc7CuUNJfYvUSazNuAGCRERtJ6dQ77tsvzu2udsRNVbXst6ifdmZKnyYu3AjJaBVY6XMUXrjFQTiH1PLjNc",
  "key19": "3GyH46jeU5Xcq2Gt1VedobaA6dE3fbj1FBsEmosyntG9SSijc73UqTgyQXxe8wpVq6XGaEEbq3uSHuPrDhQBssu4",
  "key20": "3NBgqfaEUB14eBkZsJxsHjKJWMTohhwANkmSh5CetZJhRCMuqwmCTEdJe5QvCWU2cXixvT9msA994PoNE2fQKaNp",
  "key21": "4bGEWGLsjoXq4nwm1tNc9BNgXnaGu1SqQvXXX2H7ZzM9Zw5TY1T5XSUHDgoo37z5XAEMZrPpejiTGKD9amHXqUCf",
  "key22": "5fTtGTEV6GuJg9xq6c9gZALEDZVQBLq8MQdZvHhMkZcWEt5fPdoWpd46gFyooGJB6BtiEXBJsxBWnYDoKotWrv8j",
  "key23": "25xAkY4QkBUFLmsgehxU4FUiPoXFpqLJBCfVJ1G65MTwFrCYguK7q4qadTZLLC6JRmUu6ZUzxp4fDbUbZN39g3i9",
  "key24": "3uc3BRAJcMmLCCcrGHEYroAzAEe13aewRCg3MqNaq65nhqmaPzWS46cycXtVbeZrHPcySPjKhtmpajeePJKrF2Ui",
  "key25": "4m4BmTYMr6L4kmVzMAqFXAUJbS8WSXjFbQ4du7d7CxNJ24GNH1RCK88gcjx8essFFXEDkwu9SvfrtUPRcVmxSLHs",
  "key26": "3iwLmhgdFCbkuY7GBNT9bYUX9o7k5deBu5GmUggoJLbwujuQ9CdyBoTvZRUdn2GAwXa8s51VdASzhQKKYJPaq4Mt",
  "key27": "5Suo3KsGtN1FaX6iGD8Gj4ZF96ATcjsJdjreUMb7nsPVN7pfU1TRvA182soEbQr93nmnKKCdraYPfeUsBF6Cca6b",
  "key28": "2jWHocN8ktZXyU7GTS7G65GbcxQ5ymBd11TzgRrfZrKHgEEwqvk4rZt6QgFBdKpEpY7U57YdgXSzXS9zVuHrronQ",
  "key29": "2bswE5cXTKdUis6ftzjKPYMbweZPPg7zpgLkWgVggZvPowgcvTcfXMyPuoTHmANyg6iPyNP4yRCKVLQUppDUdQDD",
  "key30": "4wbJaUxND3qt1p63KJp1rrYPYHgTcyKc7oW3QsNAJBu3r4HWdijzKL2bpTcjx7gWoJE7NBik421qW9iHzNEU8T8X",
  "key31": "2UPthDsV9xB9AqzWF9eAvAzhahzswGamUB4vhXbvrL4zPaGwejsQpVXSSmVqoXHUKQJgG9g6dDxxbmcfepf4Boar",
  "key32": "rWgyXjQkUFUNqqKFk38NiadSxAPgFPRWo1YbzCPnmSMQZktfABEbguWX1onB3yEgk5Pf5eUFfMmXQ1ch5NxzE8C",
  "key33": "2zXLSk2KsA2W8SHVhrQSS3GhcZkUYCthYJ6EexGMz5gakjmCeyc92ogBXUoqWU7xsauq1dncukczHiNE4irxfJH1",
  "key34": "2gx8RCVYEZfmdNowLFhjWk8poFpRMDCkp9dk1vjfhgkZxhi3dZdxdgm8V3nHk45EznJCriLtwsnoND7QRki1Eh3b",
  "key35": "5P7uAq7pwxVq6bkvE3jZwwWDW5pf1Q4hWF4TGjxLvbf75XMSYR6hcyAUmhjzjQCQjo7VEDUL1BPzfNThDzub4H3L",
  "key36": "2wVZ8D58VaB3RoPiin82x5DixtE2AdTg16TE7x4NeWtpijMSaG5R8Ky86zLsSP8dSzVoa48No65JAe8Ge6HQFtJj",
  "key37": "3DB7R3xj2qQZ8d7KAhnAf5fJh3hHRJPd1AykrXV3C5bUEqTepkt4ruiKxM36S3e3QZMr3FE9HPZQ4jR2nrsEnTRH",
  "key38": "2RZnu3GcbCMHeYDVKeoDJKKbCwVxCSoTnD7UgbkEdvvJSxKUPniNxoZELWHdsKLuBcBVRagEjFxdRuH3CYHVPYo3",
  "key39": "2MtjTYNLLP1UKLcve8dQiK4ZrRHyvxRx5CSgEaHjfj1ug6LidspWAxWXyb5Hnr4j7Fag9Pe6HSxpdda7DwccjPWy"
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
