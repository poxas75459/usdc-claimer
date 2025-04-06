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
    "5o7cJZJ14ZafBwKyjTrtfzcXW4YVVBpKVrp5mhQ39GgCmUG9hPDj4uvN7iWsF4hPijkMN1s4ucCKSzuAiY1XRPeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zRQTHFaztDdt7YZDA8k4hr1iJHwbSxpzAwr83fiXWsXn2L8ZJkj95r47yiuzFZDhvRYkyigjsTpxNN7Y3ynjXar",
  "key1": "5jDYkZF8xoaCZhhWKVi94crtvo2uFqXWGcAoRZdaTfFVq6yZzjFguG1JtnCHNt72Kh5ssfbTTohQVhFJqtm8ZuUo",
  "key2": "5En5Y5YgRSArjCJi46EsXzXkYiYYFQDRJSWDhu8ZEFcRd2ma7u2DnoQZWDLSwdfE8exxLA7G4VPLLPDGtMvZuYZN",
  "key3": "3WHoYEQMuA8k7FhhFYF8mvBgJWvQm4Udfe4k5ZmFJJ5bDeKPJMXqLVzruDAMshVGrZtA3tvHffBU8G8UCGdMCEwK",
  "key4": "3nu7A8PsPPJ59VE3GqSS9vvi3CarjTKwek9KyiVwqzA1AxJBrUernwQ2K1KcVD3HFWMjmcviUKffkGny8UsGAN4b",
  "key5": "ETtiAsqN3khLBYaGtTaQyJ6dBhroFt12B6Yu5pQyk8ndRYbSXR79BpNEzjogoEcsM8Q7Fxkot2UfDkUXKNodJSg",
  "key6": "2guc7VFCT3v8HXyVcm4BUgmZQjqvtEUKrmU5dXJKDe4YDivYbXMSZddFB5h4JpkdDRpcVzb4Q7ELKjWSqUZfGpo4",
  "key7": "mSWGJaJz5xQSy1gZN75qjc6dgHqDuwVn1UqPA8VkKLqfoZD7U6Eo9Ed7mzkfEPCeKGSRzahgu2yLeEJ5YNc9pqw",
  "key8": "5Ggk4wJtCsZ4Uzpa2fLjKY6D5LArvagUtpgsALE9EiHBCskKiagNe3GsYZgVkNXR6omsWna64SEEKEDK2nKfN7dj",
  "key9": "5LmLCPxeWVYeekt9UFDNUvfjHT3U8k6GeZyyq7KXpCBz1TcSz1N3f8yE9xsEb1MSwCRz8UMcX2eo8BhVbVDAxp3q",
  "key10": "4q6fg17y6Dng7jiDJfv8FAXhpEWSX1Q9LFMtTXCZgmuJZDbWZw7JvdDmKRXhCofxtyWVqi4tkcrAaxq3FR5jt6zq",
  "key11": "4nvydv2pJQ89xpLD2FVRqxtZtiv53GuAVtdx8oyqmD2rqiU3YeBDnr63i9nhYFZWNNYzkcNCARQ1SSuiKHo67w4W",
  "key12": "kefsbLaf5QCMVKa5HRmbqYqaFjrrmtEsA3zctvzo5PJYVjsC1FTK8zkGKjMqLdEKy7z4xtsQMoJpfGdVqG49HLs",
  "key13": "5HuwLM1hsZXraVQuwFVCtQGMy7vSGU8cERwKPwh7j7XN7ETo5kTq6dJLJ58ycSusX9TskaJqQawTwSjcMZMqve3D",
  "key14": "33DqpqEgW7i7QzcjrEqe38f9uruXaa7ksDAMJH4Ka4WPTjFJdJZuZB9HrPQbkjjAWFHmagg26eXz2t4a2tP2ia81",
  "key15": "CA9N4Dh5fmRbiC9FeaZy7qHyFghjjVtMgKQfJPB1cmX44T82J3QeKLeRaMMnBfMwaDxhyxMtzXfmrm45dhz2nmZ",
  "key16": "5va9gdF7RYVPW6AaAoh7TY9ynQdepzP5ovutwrJNxPzmWApHZcqG3AXNK9mgyuZfaFgcA41qv5wFXB2adU8Vg7h8",
  "key17": "4qzsN7HYM1wYzv6sXW9t3B7eJDdHjtsbL16tVKocTZbPeD254P1gw4qPL3dukA4SkszNtDQczowkjSkBnhu9pFh2",
  "key18": "3gGuBwG87LjMsTaHorsfUgpu4JhaR8hDyAGqXyj5XnAKhLDHxYJB5bGBKhGWeJa8ZAQo8xiAtjmAxBBLnz8Wdoht",
  "key19": "fcEcHZEY9wUAYwzkpGdAjsthf6po3uRdQXmrywabzqckr8k3EhqULx3igyviBiMkc3SmrP7Hzjzbe5gfnDwKJET",
  "key20": "33doztqS3BFDAjm3VYTTojLLEoh96hwBhCDjRndiXm1zUSa5nxJgwxEhekMhVZ6V6kNHAu8dGzexK67g8Qn82kjP",
  "key21": "32ozXBDPdFtHTTMsePxsHTzhGusRYHQs1WBQdCPcAruW12ECfuBdRve1dMTkuP9TpMgg2JTAVAf4hDrGPmQ8XrGW",
  "key22": "51vcnqQ2qBVMskuSYRyadgfXbXAwhWBY8Kn6BDjwzmFymsR8vad5HKkWKkPiWUvUAaebVCPf3fxYfogn87Dhk4k1",
  "key23": "5FiCSRheNxD1nkTRJaqKDDi1JGjjocrAn4DTtEHfAvow5iL138jMU1DFw1L83dzRJNpCzdiwEjPMGg2DyZsvfBcT",
  "key24": "4TEdTsyASagSXPNhF9U3LYuLkJXGE2HFc46AnoxS1SUgamEAH8B53d8bEbN1nWdYZJK4drhXB8wRtEdi5sc3EnPj",
  "key25": "2v55FBEKctn28uL1V9egFXCpB6iQYxNaeZ3qqpxdmfTDakFf1Y978z3UyDecLUBjnqsnwjKczAoJ3gjeYNcRmhX6",
  "key26": "5o6omvJmGLRh6odWQh2LiBRdr1TozW3LR8oYVdXQ7NwZkfWgP7o9L6hxoCqEYcM7SPbXt1cZfGKyhL4QdiSc9D1o",
  "key27": "2DATqCLJKot4kwZ1hrYdfhT6oF1rJcCp72FGvG8PZi4q3jsAWfr5mypWMSE3gKPMfiXAZNfpazd9JV77SCtA3J5L",
  "key28": "HawZrAzdC7cqQGaHtJpVhZ9WqHdbPzjxRMpwPxyVvp5xim4ZHN67KEApmaeaZZ2vdjZbZ748dYJ2VfKUgaRvHri"
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
