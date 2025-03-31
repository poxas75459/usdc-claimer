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
    "2hQmqPqsmWi925tyAss68xsw83uPHvtFVrXfrjeatApB1Ffz54D59aai6pV9TwTQhoYuxsVPYDzcKtfz2gLb9TUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CG3txMJErWwbs3RH1EWuoJ55FLiSfCwjFnrQpJLGu6kM1t5FU13dVVnxN8cCkU7Y6fJN3pCYZqEPkXMmYrStvqx",
  "key1": "cBQXKf9UeQiMRRuChoUVeGibDk4RQUxhCmPAjrbpTCtBZCARbH4EugEg9H9oFgrYPZAKMbQWgZdbMxm2nDE828g",
  "key2": "3D5omXehne77JokxmgaE9tmGgwCdEBKLab3fnnx4H1zhNis5wUgfuKy3TudSywdcLUFfmBojD19UUFZZXqay851W",
  "key3": "4H9uhzNuSJLbUF4uaNiqP4HvA4paAXMDskreszXf1SQkqosdBVsjXS2gyepe81hMFA9fqu9aEyxnDnkb6c61oZtN",
  "key4": "2GKPY3CVAVgtpTUp8zqPdcJXfryck2Q8mdxswpkVugpZFRrETfr6Ah5zjcWJjXRijJZAQd476FjTHGk1tVZZjBbz",
  "key5": "KeqRg2ZVyLmPz1Qkqj7m9zJTsScC62Y6f6g3XTut8H8yUhz6UJJZ8GP31HTXpo2KQLgktgGz64qDe8FjLLEnm1M",
  "key6": "KFhrj33HMkb5paG7YEhwsx97jYiCNxtb7PDa8HkvGzYXga9e2QVRadSuKpNjzCDQx8KdMWA6fmKHJpRY9zNmRus",
  "key7": "mDxo2um5u5sm9DZ6r8N28p73mx8rSREvF46FPfJT8z45wNm54HiBXjudM8sLEdJfrgG8NoSfHGriaEgdVZf1mem",
  "key8": "5HH8VU5W92bkrX23NNc6yMoDnoGEP2L46eEdXxQKAbgmWPr1KTyjjr7NyqxAXPEYimPoRfZoBRkGXAzXgDos7cmZ",
  "key9": "5S4Dad7AcTBNCkxAiBsHAskf7QwhoX7AaEU3ChqtkjrTEk68oXJhnqTyHyyMNSDEkrWkS98UQHySKYwtK7Ea719p",
  "key10": "4ZEuW7ysu15CqK5o94KekYcih7NLRPCtA22P8ioMdBkuD2RZkbVmx1HyTRdtMpQ5bDzvFUvokttcSE7Arz9Jap4N",
  "key11": "4GsVQB1UgEdUuiV169vzMrp4MVJ5wtf46ZJHffSxbMyyZyeZL96XafjuFTnST95JHfGMiidzt8VzC7BJe1zCiwfB",
  "key12": "41VvnnxkTQbcqE4iV8iMggb6azdmWwiAnb9ARTqY97FbrVWxUZLN11S4LyCvWJWCgNRuNCYyB2i54FtPei3K8pof",
  "key13": "28fVc1rmB3kuH5713UruWTRW9vKZfXtksQ3uBTZFaQ5Ue5MRM14xUuWDyr4KMQ9cNQLSCoGU11DJyq7jctwiSVoL",
  "key14": "3Agh6qzaC1ySKudbMd9a3g5N2HH4XdzkyRjP48T335rSiMsT1NyfxG4KooiZk62UYvEpjE5jvUySyQ5LsTMQhsNm",
  "key15": "4eJFKfDu2CPA1YodrH21eKicsptvYGoG2ToCSK2Df1gF96kBjXPnsTtPqiikMLbfoUfEgxWYHffE3sH3Dw9nRQzM",
  "key16": "4aiNVdQQ2v33dCxpyzPeCKfVcKUBfaLFvWqQLE6g7XdhW5DG5mJwUVfLgjrDsop7kiBLhbiycSPcixReNVBmDbQC",
  "key17": "2BwoqbyziHeikLpcPHtHuT6rv5tcGcaa2BkuJJZuayskfnhZd3ucFqHhXk4BobZhngDx1n43tHhtAyAv23cXjBcj",
  "key18": "25UtDHuhhpMXv7QDzgvxJXFmuAzeYZR4swdjW9SwoGg3usU2FCK8oa8hatUuvhku1JH6CT7gaNeuYdoPmzrGef4e",
  "key19": "5GYPtK2HpZ7yTk3H1kb1bYgaH2vAFHWRjTbteF9waTV6T4EdNrCVwDfEkWbV6EBvcmuSqG2oth63ZSS5SggYZ3jZ",
  "key20": "5WJuZWBRwhGKSixTYR1esee1P4ccGiHshWDLDhzqz9bjqbjGPHbRituDnq96isfYwoF9RLrbraJZUumE5gR7FHsZ",
  "key21": "JscR1KjvCFtEnTTPcAqZsVZRQmRZbn4PjzbGgUMiVrmmCuGrAJTae54v6LCBQ1q4HXxRnbwdfpYacCpzicVBdLL",
  "key22": "4QjBNvpjY8n7gL3Ty4gYYSh15LjNXcQm8aQcfvkLB46NR3RffeqBnE7vE9dB1mzkUqdY5J83iBju5xqhBGNQ5day",
  "key23": "3hjJcZZroJ5Fwcv2ji73LX98tYpiiSVMCH5KeeMQgZNrEw3RkEPf3Ra2fvsRmGqjcqiNo6WkhjSs6KakEAo2q13r",
  "key24": "34suKKkeGCYRNuRQqXZ4ksfF6UJeeT9gugKjn3rJ14UxR3GMztzmHio2m47qmRXWkWDJHGdUMhNt4hdyMYT731Vi",
  "key25": "2QZAvZior8vog7aCgiDYTNkyXyNa5E5sUGhpGGpeRmQMAU97JMn9pQ7vrMfkP6eLAAYCcacqFXFihcL7k2z9pWQF",
  "key26": "3XBd4Px65WBU1jvWYGmh9bSeX7FJ8uhSz6qV5mKiYKnSxffmDw7Hi7gJTBVvtuoc8ZwUUyZhgfYuMzBjUBoTLz7N"
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
