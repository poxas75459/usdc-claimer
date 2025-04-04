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
    "2gfjLafr9fpASTD2qVMsfpLDjyrMCFtN61zF2Nin12pMpKVxDPnEoz6mHSw5jEW8dd99gGbgbc7uwjYLf9Zmg7oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xmoS87VqipR9t3tM4cgCzTeaN2hiUzB5en2RW2cx9az2Q7z7ywngjrUak9CFeb819C9FCgrX54od1793Sf24sC",
  "key1": "5DEjsAaVkh21SntnxUbMeoswds5TvBpLZiVusKVsL1inMr4bPyMJVSuXWBYcnHRXbiboMY7ARSsU3QzMoeK2mDGa",
  "key2": "5nkBBASJ5EzJeUhCH7JeNGGfpEBkCmmzQubqS66XqZvdfov9zaCtuAU2aBft49j1FEiqnTeTdHpRxnB2k21NAz8Q",
  "key3": "52gVAh6cgeDJrDHdQi4kTCZ4dazwJXCsNpKPN2MgbdTquGzQg4EkWsRQVfjDKtUwVijusSzQGJM8LguqTm1ZKgP5",
  "key4": "2ZiB6MDi2umvmtLPhV2vDEB1s4TxA4Fdfpa2nK7K5h4CnutduGuUskfeGP8C3UJxEuzA3vAWnoqb3GeUPUQ3tb2x",
  "key5": "7KvjZ69EN8VWCJmg3nzf73gLqL8kejNAyDdhy5BN2vwZFhuqJPejGA4HAmUQ55hBGtGBc5nWXPtjkV2MGiHdtZJ",
  "key6": "28xqxgEbvJxjDUHU2JpbqLWG3xqDi6WuY6Vr7rMe7ykX4NLxrCZWYrcDCTp2c5G1kU9aiGUmCZG7nwF5DNGchRam",
  "key7": "4XnTQXVZaw6niedoAPEMoLWxG8YE1G59E9kC5KjVqKHeD1DvWSSqdA17zpdn3bHJ1UBghNj3yXFJYiXnQtZXEYB",
  "key8": "2X5Fdg64repd9QeD3BNhXmPq8wStgnZx8h2BANMgdX4VSbYDDyYtGyMRb6C4pzAAcmtm6Ly8V4XBLGpJEpT6Ck1u",
  "key9": "afk6uLRECpJJxzw7At4Q87izpsUP2PcoVbWuwWsHpnEEEPaGzynyC4LhyKN4Wa3fbbUfMoeqtmBzNCvUGy3QQtt",
  "key10": "Yi6u3yonneKMLXJmwYREM89ZixcfPMVtL8ok9vziC9hMMotHKvcBD9mWcc3Mu99ZgCX661VuF9atgZPP6aki6HV",
  "key11": "5HVM1BgHw4dbnMw3QkMCPh4pVXbpBWe3MNqwM6ygAJJVD6LkNdj4JqArvQ6bqtyoB3Qa6PMqg3wZuoPUzeUeRV5e",
  "key12": "xq5vtJb5o9VR5w8gBkCi4TRmcRWgJGwBqxLQs4gJfoJ9sW2ZL3Eox8HEMraNx545tYJ91wttkkWyQyc3WdeXq9i",
  "key13": "2VX39VgbS6iyhyvP14Lp9KbuX3nGCkCSqGwKZKQWkCkB4GUjHDmcEdHAgYqH55EWT6KpZCDeod8ZCE419w7n7cR7",
  "key14": "234gaPQCYBhkPxjLgjQmD3hM6mJ39QzbJw3WgrKzYBP9ospEPrb3tXzib574pZD6J4jKLLYmy1KDf86GfwbKak1k",
  "key15": "3oJXTfDYTm1mY5Lhm76eFt3z8y8JBhvKDSv6pSXsfufmcVRUFg7ar79LJixCDYjdQNSC1h3inHjDxgNtYw1Qw5BT",
  "key16": "3XRWk5H9oK2rxtpfsVFdE38MUFcscvKYi6iDQGfcT5SNnMb8PvH4zHJBpRLogR2QWbhrrdqFSLijF26AoEqi1T3K",
  "key17": "5TmhnzHzGbTQZg7u3FmhyxsmZ8hcqqePVTuNDyHEP3CjuWPG7vHZVhK3jfv5oCgQwcCAbpBHCENMDLVyrEa5mCoS",
  "key18": "3t9uGochWkRUvbxPe9uUJcATm3QEyHxnWZ19fEvb6siVwHMcxQXbV9e1U57erFQVonm3oRjTn4WUtw9sDhiZJQqC",
  "key19": "9DwXVEcEpwJnTK7zhPDWPCFU1Kmjz9EGs1djMrmtgdHwsLTpDraZGCLC4whAGy2zpRK9E2ZnTGqngLwpJ1t2RUb",
  "key20": "AGJzY1iuKVX1hxYGt3KJUuyyZ5w5x2sZffnt9Mt2Dhx52o9Z8krhyxX9eqaZcD4ESHwkwpbKXKMbeHyUH3CKH79",
  "key21": "4hyFbv2vQ1Z8Ado8L4HRFWtReGD2memSSoUcppZ3nYshw8KWN72wnpDrWXAFS2bwGemp83DWT6fyRbxgMcpPDZjm",
  "key22": "5ZueRf8krxZc7axUsTwnXQhgEf6dx9tRzrdufiJ75r1M9dZwKEmgh4CmUuSMHidXQgRadJY4NMbTxaQRBc1Fh9c1",
  "key23": "2zmG7DmuskQ9HHTG7cvhLaeJKT6jcv3bVmbwBDu1KXJcTXxvv2FycVrLPvhiySR37DiBffaryAZ7HtTfNw7JUpcm",
  "key24": "59fUpbpUbXonWaetmsyw448wVZ7uVkjHJymDCpNxW9sf27pFVejPwj35tRBthsdarr6pmZVeo4fwjMviGVMELTqc",
  "key25": "UkxYQjkRvdmiECzNVEppwJVCYxWDn8AuvqdhWjqinnEh18KNRuKPMgS6kJVSjq8hhXutB1bBjxkvesHxJiarPJw",
  "key26": "3Amkye6uj4vo3LuoKEZKJxqoMB3w4eANioVvRbqsUTBLvprRPZ3KdHzjRpqdVvWb8471j2V8iSEwaRwT3XC4dBVz",
  "key27": "2GPLwEMMfHD5ruKhoPvwZUnM4ssarg2LpQw4PyP2qhBHchNpjQB1FW6ktPj16dTn9urnCHWjNXRjr6jN6iYVNbVg",
  "key28": "4VZSaToCr9JBJe4WY2uCz68sReuyf52TC47inFMY4jWLktPGE9esFqdXRuHoutBtVVKYVUTnrbHBDG3Jvr5zmHXR",
  "key29": "5wFV8PGMqE2HjjfQEjGBM6nZ28ijhjicNoCHQ366ZQJMepFjGVGRQERvxbftqgrogdPPGsM3sYN6UBN8tEc8ATb9"
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
