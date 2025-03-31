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
    "3h4LLcWn2xSweHti1dttnnGoz47N55eKgFJegBNyTNiyqYH2h5uSfi29Ei1yny2jFKvUBvA2Y8HPLVsVo2krxFbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bm6LaYCamJnCKyqsLtg6orgJgKyhNHZpEoTrNuwksiaCn1sUsXV2593AsoEBpapuSBnEzXQ2Xwm7SVXKBwtjvNr",
  "key1": "3JerGnZrv6jYxkzddrYSLzwDJ1RfdbM7AK6xFNtFMcq1QRdP8n8NxpbhXLLoqiWxqtQG3o4Z1s66Vfk2fMYkHc3w",
  "key2": "iaJGFhLsTDpeYPXLetbXFtvQ8asGtC28kJCXVZVVcxp3JqpGmWwDL871pSJvuGUgExUprCczGend5GAeF4LD7cp",
  "key3": "4zao4Ugsa9t68t926u43JPFFRaRtuYyVssGERbYTTVYAps2gNxSAbxpoK4nD2wXXfyRD7xnijQ5D2QgPMUs18DqZ",
  "key4": "5Lx2kH534pnHbX4a93taQQSu2V8J5BU3px7B7VQxmThMUsykakhcFTJENak6RrbEphkivMuAXRdDdC9mZfvRAeFH",
  "key5": "hhQUaLnFksVZA96rd9Dsa1ZDjStvswj9RxFUMUFVU55n7Yqx9jvhg6ANJNohxEKY3JtgJCBDKvWPrhWsuCbPz4b",
  "key6": "2PahCtoEKzTQWyEGkmuEqGztKchqTHuvVV8nqwZHMHC1rUWNJQXg8Vq6TMUap6FEU7kZynoJhJLfHMeNQ59jonkW",
  "key7": "2hJFYPLPA989c3Smic2ysAaECEPa12aXvyPhehEL3gNEsRw4W2M6hqvPrmr8GUjWhz1noFrjbWb1HVznaXVU7q28",
  "key8": "VaW2dRaSjJ6JKS1CowccSJKWkzUbtUgPvymah2JZcawf1fe1SQuBcSeyosyjxg9VJYuMaAU34kkiA4YuTqcQPpm",
  "key9": "d65HuzDo9hj5eksxZfPYvf56m2A3fhkgnQdbwyQENjxPJeemAPA7k4pRRyfyGD6pW3p3tAmZCaN32JPwwFYvrG3",
  "key10": "46bUTziQ2wD8Jb2TpvhLVyQztmbrj1wXFhB3yKQ97BrkU4f6PMzBEKgGVSdBCJtfDqFV3udNF2ZxH9F7sHL9MdZX",
  "key11": "5guEQRMsT1HHdeKErR4MsSG4S5gLoSYWnmY8ixT1LsU26hwATCmFLh1uUCMBquUPj7rXkxsyhGxgHCBhqKUuhZm2",
  "key12": "4guic1WhUQKDXya6Sy5w69wnLkVykWCL8QpuGBrkmfP2GR7irdH5dYjVgpK2ETYtwzPaVYabAuqHMzJL5GT1PckY",
  "key13": "vHNADGErKHpN9x7f8Qvadm1zZ33cigpAcJW4Y9fzKHmvYd5WgW6Y7En9Y6oAcvCXQjguFjJvkgoJSh1KVeDigWA",
  "key14": "2n2Qu3q7cu3rQ4Zgmq9MsgAm8z6A2K5oo2vttNiGHqFjqm4eHgJdyyqBbBJE6b6WvWJjkXY9XWDjBokMyW8Us8yR",
  "key15": "4YyXuC6uD7Hdy7LSGYxdxnWCvdSC2AnLPmWBhvuapAFPHPtqr6sVukYJFFa92vLJ9JrbjdqkNnnc9VabQhDnLia2",
  "key16": "43TyreXQLhKxRxDGPNYDThqcuoTUbqfVwGuyCYMUR5ZVeGEvH7kAwSFQSrbpARdnS3VGcwFoinaoX9yDTJJv3Ges",
  "key17": "52M3FFhx9VMtmbvFqtmuYH9gG8Z6RMPu21YX1qzibru46UM1kBuwpzsFN4NpADhhPPRm3yLM6Pf36hV4vPwW2Ykg",
  "key18": "pzCdme5R7p3eEBUDYnSnwgeaF2cckb67JprHhRb79e3QVdwi29XcQYd7xAN1BSE2UbtVJZuMcF2BPoVvBZxAK9F",
  "key19": "LxesPmQHs7Kc2jnuhk1ZteuCN9ZsqK1bQvkne1U3QJwKmp1gLmdQceWbjbHjSk9XLisfaiH6gKGxsu1GxN35q8y",
  "key20": "5ztd6qrfF5TzGYcBxjHq64tPSsfAod2XxYyodbQiGXvBPr59oCwXE1jahnxfZDeboQ9k6BLpny5L8kBojh4eZgeE",
  "key21": "4uwV13DtNNHsAhVbBDsGQpcwBmwCHDBVBA32dKWpRPALG4jbR6JxAyAEe61ENYBAHNWYsU2uJDjLmcG7WuMv79xt",
  "key22": "3xuPdKneo9CYKw4Rm9SuCNFk3Z9AjgxcBjCUoTZyPDt7WnUpXf77XCJ2CFcobmDeUoBpBf2b4KFpyaTitZAGQsqG",
  "key23": "5hCNYuCLBdTiiFs6jcHW8k33ibpRTUrZLAy8oGSBrebXuXmC6hgMHtG7CTprNG9tsdkJfjrU1a7eUCnMtd9SQsHp",
  "key24": "5PQ3EcayfGMErU6mtepySQCqTjzvSxSgdqf283jiitSJsk67erPDNuQSB1H5jviMnZgNwnAyALFY2xdUBwGnd2nB",
  "key25": "4Ci2ujNhP7NtTomY6jEWejDffpQnANDtVNrH9CKoN5wCuTmXMtQsBaPWKmp87JccAA8Thk2bVf3T6sMDuy3isipd",
  "key26": "4icgxzy3e4g77KL8vHPzNJMrTqoD4y32MBzHddikzaARF8e83FsJkCRNzYRyhBmxMoWsLNc4BYaB1XVk8qEGyUHi",
  "key27": "32C15iVwAfAVzonYrbWZ5L2hrygnZnHJztpoHc77hAKq39PdZ65DivAUbY3ShUcnQDRQHp5EvQT6EYbyBemEpAiT",
  "key28": "3WWxpikQJ5rHJKuaF96BQdQuLUtszLZa5Y6htPYbzqNfJMKWy83hFwroSVLGNLNPMKkzKouka38PHngMTSq82PJS",
  "key29": "5cqFEaSn246DLwfJgVyjortZjYpsnrFQrfUyRNcqN46yE8MC1VrvAQ1RA834wh9huvwhZFVPxhCzKC6BY467RnbT",
  "key30": "49LSpaYMieNCMbEV4jrDiJduaFDWnQjzYHU5b5vQx3hMoAW9W67HofUFb3G5VADrEs9PcQmH8gkKfEf1SWAKTGZX",
  "key31": "63S3TmUV1WZjxK6Q999YDXrdhqjReFHpzGB5fraHbxVu8vFMxUP9XMqRrWBFYK8X2YS4HzWrxCQ9E6EWNaJ72dH2",
  "key32": "hoz7Y4JVKtubb8X79qnRjA8ZPRDmT2XqeMBpCFJYjnwgqF6q7N6G4YmXaZbJe55SmRGPDBPFdwpD4y934i6f21c"
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
