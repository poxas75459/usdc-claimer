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
    "2jTcKoJDAAXbUZN5CDBjHxHUDGiS9qabVnriSawy6ccLcRz2ZFXm7HtxyiwxWQjUWE4YV66wap7W5WAuN3ABKzsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WYhjhfbPdauEhExwTwyyXkxPLvepVpJk9yNCkN87LduirJemQznT8uuM2f965o8Pf2J8Q8sfvpku4nWR1C81fJu",
  "key1": "3gpmpNXN4fehiDNgUJX4U46mYGFZ3FDPjGBKcsuwjHUD4FK64sYdX8yuRU74KQPXRhK8rgTbEacJ8y3a1hidVnRV",
  "key2": "3D9pBxuyD4BKrSWHekHS8ekVQz9SBcXJJe4sqF5nS4fjmcgZk9983C6TXZ6qi6boXYecf598YmeZTrj3hi3gyoYP",
  "key3": "4kJVY2uE6bpfsyjZvRNoVJwpxgYNsKnJsJYtMFWbRoJtsRj9bSLEykXry3kRq3Ea4AggHTrJrjHtqcxeCoizQ9oP",
  "key4": "2VZZ62n1Yx5B7hFyHPSNUv3sBgq523KrFum1Jjzs6hJsiosmBP29cwmc7GDbn732EWWZVwrJoGaio7HwjkpWPcrx",
  "key5": "5b97QqNDtH3JZJwBxDvMX24QbfwyrHR15GN8UNZfWjuZbfWEC2aTszPyt1T3M43rep3eC8eLvL9L8k5c5cy3H3Eu",
  "key6": "4hZep5dSTijqssniPmm7mkvoKiUt64obyHPAoZEGUZMLq7Peo6ZRD9jh9QEosFvh6TboF9W2EMADnYeo7fAzxzYR",
  "key7": "rV7WXUBN86ubqLM69N3GB559DTxHHgSF4iHAkQPigy29RrgyYa7jUSTBYAt4DQpmxWZPHkLK7ZgboywR2TjGE1A",
  "key8": "3KjndKGfUvBFznpazvUL6DPwoieMhPApJYzV52p32mdnqY73zBc4HQVkLjaH8vnrXL8FMdjn2eTQavxJrihejtSL",
  "key9": "3HN48acdDeskpb517xsLn1LQ9vHNNstSKLG3Kug4ftBjeqY26SWC7kE6mf43AkY7M1GmENe9FdgqiVkgqDrzFkQZ",
  "key10": "3LLE2kXsKDfkewdJvREoWSuGPV4bDsSvrQqjvR94es7tun2uEzW87W3CYQUDsB4mr49Xeu2wTgtZihY8F2N5ihgN",
  "key11": "24gThUREnCEGGT3VcbVQMwsCqnhMzfydSjtfjyWaCQJZrdgofrmLzTwVb824xLuzvBNUeN7b6aY2cstAKD61AaZQ",
  "key12": "4KbRE4db5nuVcsFRMjEVq6PJFGdpLBrnkM2ZZUp4ViDdnDKvB5QNUi7ekhRsfcgNZwGk58miXHCFZLeL4R7H8n3h",
  "key13": "2as1X3CZz2JgqVHJXKFosgbqTcu11Jq98qJwohMW5b7mFkk4rT9nHJat5c6Vk2r2ie8GZ5gRhjoqWQVifjxjzr57",
  "key14": "2EoGfTQGamuSPeKWSvisD5zV3ZtL9cDmPtNRsHCNjwYy49Ur6CSu9PAkY5pUZKC88sN5oUVvmf9gpcGi5qZNbzPF",
  "key15": "4miEDAVbkqBsp5xbQAMY3JK6DNaZY9PVNVCSweejiEhZhaEiCRX2jLu4rSrpyFsG5MKWcAsAARcEfsn1fFA5qM55",
  "key16": "4hdCkKKCbNHTrW1RFokn9og4DxQ4tGD837QHSSQ1a3tut4NDU62pmQEtHkQKfeJTe33uNLeYudFNvqTZrGqXiFmh",
  "key17": "3xE1g7Z7F3XybtaMYdm3qx5e8gNp391oeVQvbNsfHzGsaQnSqLmBUeSSujvMsrVXGsAWGfgVmjCWAUdAyCSBDpDM",
  "key18": "2syoRfprEWrQDN1HT9aYo3ZgM1Y3AwFWLHKhAgMZbqPPnNDp3ucqUVVjpaZbRYfJu26mYBCy6WPQ3KhVLGN1EK3N",
  "key19": "CWfaSWeW7ZUxnUicA9N4bgTjTos2Fbn7kH3mjZ86vYj3xWJoM7hB1oqJ5fJL4s541s2rr1Q3YUrX6fPWDsndNDk",
  "key20": "4QGL1QGvEkSw9DUWU3R6tNLTKZ5cruSuj5JwyWNZWLVEDJdbWFKR4znJTZD7PtDb43e6sJAZWT9KaTqeAWBpGLWy",
  "key21": "5pjoAKBmNDe81Tes2igEd26pMfBpBtpzzdxmiG9NLMRNitMTtcehQAQTZBDmHh6Ea8vKp2FMzE4o9v8AHSB1FfNP",
  "key22": "5kWyDEFmriJjioQgqWdQkyZiYdmAhe9udscN8YQyPjLCGhFPHaLo9jUsa1EmVt36x8XvYJYPeu5GctiorSKcuMb9",
  "key23": "K4Ei2vS8up9bDnkz7ceC6ebwt6vdEcnyEgyDCe2rhUNw69S6A7S41sNG6o8AKiMFEdCewgz8KJVoUJjBV5UFzC8",
  "key24": "3XG2SbCWCgxcaCsWRFAaqPvWe7RYEpAjjZ2aN5YAkSbHXNM76xzFNBhfT5uUYRHK3fWjmid3YScupGHr6ocmRYtt",
  "key25": "5x8VmKHa5oJVYVxkXaZWU4QUKaE9sXUR9qbnjZk542SnR7ioZomXBdTpDSivrf9wrGBjssTszXBzCS9wWwXqF9AU"
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
