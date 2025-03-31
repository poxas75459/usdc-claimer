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
    "4BHnPhq66v8ikWj2ZxWumNEVC8X9XU2299gNqbTfzu9iJ13ty9WrQFP3ezeDaQbQ6RbRP5phnh55U7zV8dHFMgKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FWmAZABe2y9MbDWDoJNAUcJGW9SqGQZYA5LNfKz5J81NzGKHEaZApDQ3gsAqs5iaZWGwpHhxYDv8SrVE1YvrAyE",
  "key1": "sDfj5GXzCGLTc1gYhx6CZxRkwifLdQZTb7zbUDATNjmvnyAT96ErdTp6JoAWn1BxgXEk2PJmg4E2dev7TPWe1US",
  "key2": "5coCvSwWMQx7tmQz8fB2UKneu2qjdtu921iqhhbz8A8uSuDESXEqCzeA1dKwsZUHCLuFdfvTjkoNdcubdShKxBXy",
  "key3": "57SopgVkTqLBsUoF3EUaTg8SxN73hCVZXyYyq2h7T24xprgDs7T8Z5hzNkovTw6D7vL63yQ5uz7Aspv18KR9gYmP",
  "key4": "gPhC2wpw7fL8XSsR31mGxXcZTMJLUiPsTkC9vXdyTMsv8f1TSqxqbmenspmnAVjfMbdNpWT6CBt24vSvaQz6pGx",
  "key5": "4gAFLvrioUeR7buufscnYx3gL8JaJgz76xPrwULuN3sW1tf8RHQmAfrCQFfLovz76eeM7U6Z4MQLkH4Yf6DzwSgt",
  "key6": "KoBc5fxa8AwFPg5KbR7k61egam8DfN66pnyj9ZtBx57EwbnnxN7MiZt2wHfk7mGDUdRNe6ag7K2Sv8iJpXcP19m",
  "key7": "Qxjm6ZRpFe7xgFtv7y49L9vf9vEHcyvZAsE2QSMduckpddUN3Z2DHQbL7qn1DBuGTP7dYjJ1SCgES5CXsXV47Ej",
  "key8": "ftBmfzNv8pYbFzdpdgJUUNwMFwgkZvPMdYh4tncjTbzQRKWN8p2sDRarnSz8wh9BDoeaXshxC6LYTNWDfJmbKSS",
  "key9": "5ayFKvF1LfzrDkGchngAtiigSLcaXZTWQt35Sqs1dotJLiqtHSq4VGh84ULKeU7s6UZPDM3Am5GrXkpGebjbF6Dm",
  "key10": "5N5cFRS8EoCdQR8FuAQootCN45t6iKLMnZ7Q7FVWcBwD8wLKjKowZDCXYr3ju1RRVuEt9c1QAcniMGtTsm3E3XD2",
  "key11": "27r9absvAUA1jsCvWATTW5x57P3bYNMtM5BX4sM5eXmccAoGYqWt3qxMxA4KEFNH7uMfakS9e64ZCAF3YP1rCHEP",
  "key12": "4sTmNwMVF7r4XpN6cATf4XxRex9HvCwMhHtmaw6mgzCdqByx4uFQbC7iP3tJQCx1EY6UUQM4Yx783EmAB6oRPWo6",
  "key13": "3dZ72y1wDThft2aqK3RUComYWruVKxzB4nT53ncQHHRVFhZiZWNCmvLwBQCZ6CTdbj9sMoLxmKf8yFHnmoLoJsgi",
  "key14": "2FUqvYAj8u4GTNYUNGWByc437CRmZqu1CoqC9LAN3dy7zv2MnRj2jBykxWKJUETB5Q4n8EFxqncTP7a27nAQHbSV",
  "key15": "LJ293mDQtvjW2k2qm5fQdDkcimACdbXXCCMp58dX7j3dZeu2FM9mC5zKGGTLCNfXm1zW9kf8LPSDkrqGNrL45ZX",
  "key16": "55p1dEq3Jh8EeijmC9WAyZGerP9UZsjF5zn4GNgiLLK4FpzR8uae5yEPgohjFRZh4JexwZDLDf1oMr5QAg62BJSy",
  "key17": "5Cw5Es2oWa3p5Rcg15Y1291N1obNzgPT3PQ7fp5yqDRqMrMEN8mRBNoMMvDxfL4ARTaFoBsBWcVo1Vdc5RhSwM1h",
  "key18": "4ZANRpuTaL5xHPHPLzmY9bWU9fnXSHMk1oz7aC5Qoh1qUrKdsq2VfibS9bKPPBzbjkHgvSZLhFCcbc8vWun4jbW9",
  "key19": "62SwdwxogtGuEGzrGf5hWNCeJ7uigrmxdrGq85AAHxbbumhx8YeDbJDsMfUMwDAdSTQbpV4hjvZoPGuxs1aunk7X",
  "key20": "29LbasiiQPHSy3wMfEZ64y9VFvWFoHHW6QEz9gPNHckeGaYoTtsfQ778eitxzwDvttt1SxJ1uaxH8hVKADSXeDJU",
  "key21": "5kQCDJ2H21gjwzvbDSreiA2HbT6ZyNt3srprSQU9JkS2qMypHJihSFsVSGF1ENWHWaQBZEcxrU8EBpwvEzjiyZKh",
  "key22": "1neSVxEfFhXYb9skNDnDWZ6Efng1SqHfVA9HEFh2bGZCY5VmgCrTwSqzZnTZXxThMspf6psaGmVs8vT1SENzjpf",
  "key23": "64VEd2wJsRgYxwSkeG2BWPstCzgNd8oKg4CD2oMVNCPkLQC9aZUyPdPnWQQUHCLAeHeS6WrQXhjyisdkkLJ8c6R7",
  "key24": "2e3bTgGNEvNrbqgATb5UaWptFLKmVxgauZLGr8zdVoqhSVAKkVEgWpji9wVhwa9af1agH7pX9JiCuaATeM3yWvP9"
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
