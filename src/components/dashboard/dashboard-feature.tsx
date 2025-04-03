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
    "3HBYMtqtKM4DYcaabBr5e2EQHPT7cyobCx3j4canFoMTEKG4BKm4sn3trMVUQo12WvPZEAyvvM5Zm6RJNxS4ZgJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46fA9MMd3Qd5XZC6MdGX38cX71XZHzf6oHupWBF3oDZPcTcLZBqhRW5xK9A1DAP3A6Wi3QFjjvHgVJcX7LEyKWyj",
  "key1": "5YTH6Vz7ST2yyepgHiQskwFmerkDBiRHPG7SVcfDKqWDqUas9Mn5evVfkbtPXtx8bmeeGAHNPdyudnFm7GV9NebL",
  "key2": "235khDdJDmNQv2cvdkFyC6jQWBghQ6fB5Dd8qwzB8XHutXt7Ng3Sw2Ns7zzYFbevJXkF2BGw7k3Gy5QnbSvRxi2t",
  "key3": "5xxXTrTJKRdfGHVoggx4hSEKgnH1SGNXXRYCHFBTTQ1ArUo4qRgwX2LGXo56dpy3TfxLcHx9Lkzt3coP7tJXv9Ks",
  "key4": "37uCPdLwuJB6iJsif1u3AaThSw9Pq7zu8vtf9T88Ws9SUKP2vanUHhP7v4UDQ7LV4ryHosoUMkAp27yjGDQKA6WY",
  "key5": "3qZptwatshAvrdhzKqVDPe9MubDzr3v7eAUpngv8xDD3hHgz5detPsFNEb48mztsxLznjLQiu5apntiQzzG9rBN6",
  "key6": "4jQULMvAqhtewgQXFvwj2WcWrP3g1g6sA826GceFhxLdy8wwFZ99uo1cFQuUwY8azK1bkE2oXWyZNRBmee1j9Nvn",
  "key7": "5jZZhcf8bpeFexDT4QXCykgYXhH6bnM5TqRfzwr1ELKvJvwYG3G15xeuTuXCVe9ZmynWT2r7tBCesHJaQBq7FvLr",
  "key8": "4VVGwsi9SJs4LQGoT1Y8RUyQ3Zbt7PHQ8D1Qww8yi9aR5EwCm1nWk9tjTHVUgbDbFG1d7Yd3NcPyDCFisYmvfhMo",
  "key9": "1rzmcM9KjxZWqN9Ek4wa8Zjjax3vKAPLWegrSh7sA3BLncp7wz2KLer3EuMH5EBrb4tdFscse6DkTxb9kfqcAXV",
  "key10": "5Zbgw4BN4g1WX2N3PkGUwzze2y9szPfdY5iwHLrN8YajbxUHFZFxbAha87hu4KeKxgEnyvyT5Gw6zBQzvQTdd664",
  "key11": "nYS884mShXsAbY76PPam99eMqaqY9tGhrjTMHYQaH7Q8qUMPSXLjbQdNv1N57RnUAqJikfzKhqiX9nE562t2GmB",
  "key12": "61reWtz5mSQU5BAorWenx2VKwGpaLuyxJ6sqi8Lr5etMYjFKkEnQS15im94yXFVBxGaTM9fVTYQwmqFNE2DtZNdX",
  "key13": "5FLyXbSfroy3MqaGgTXZEZH8msZY8hbRx87R6w8t2S3wLKSSxsv3WsMEGsH9npr7y8VRxEMkgb6KFiBYAa2jgTJL",
  "key14": "asQobwB6eGThfFhA51waF9L7eNiza1xFx7GyASQS5PEjrbMMY8ebJuYSbAzP97EuSv4uucYWS9PhnCw8RSCqcn4",
  "key15": "3sUtDbsELQHDQdAWmqCRJRJiv4mPd7tDuVgwWqniSh9ZJC7TerqK8RAUTpe29EFSoY5Apb6PA657BujWg7vtAacY",
  "key16": "2HjVA9BWYxAAV3Cjqv9u7muthMeRKkbgTDpL77i7BmjxVHAUvuMU3e63vDTxDHqvPVnJFaK2BoKKW6ffV3eS5pgd",
  "key17": "2XzvSF2GKFjdCkSL1wNzphBASYz7kh84SaYCtKqVnS7X8rBfXD8eGVTazHrVsGfFvzQisHLNSX7cavMinhQY3Ns8",
  "key18": "DhnRYmAik9HKP7Rr2SAPSvxigibgjPpEBtw7D1x6rnpfujc3f4LD1rLqHdV8kUaTPUC4YV9xcqpp72dhFNkeauU",
  "key19": "M4Jb6dyXZPRcxvzZ2jAK14DDfkqmo5ENUGzykQRUC3bxqGkucEMRKmwcJJAu2u7gwb9TDSdE75qRuxXjTZ49Lru",
  "key20": "3vEkZrGp41UL7oXvvtEeGCidPjsA3XzFJDF6W1VWpUyyXwiW5hoRxW2HRPF17B6j64SPNPQuJgKBNZQEgxQYWXPV",
  "key21": "7kpoAp3uCWM8ydWLtArnstTt3CVSKi1Gj9DrY8Jr4d67a4VpZ8yovsUkYE2owwReRrBeKFHwBVb7r5vdCJLEEyS",
  "key22": "7GzWdMSVvu5XCxgnNAnJZH2PRZhQKqM8xdHA8DnUFtJfakzoqKo8w3Xr64Tv7t6kJZfSw7spusb85ZUhVLwycwt",
  "key23": "TBca3nJf8wgEeJcJ2D7meFjp85vJ9buxE34KnNvfFDPtpgDVuvQsoCKt37vxwMersbC7MGh2WSkL1PHdQxqV42V",
  "key24": "2Ro2LkHrASEnGasrSHhembCkWADGWgYqQvhuz9sLqoZF1XEwn91ECxzduttMUrNLKstZA14He6modyAZV4pAQude"
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
