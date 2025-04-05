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
    "3C2idmeEC1LLCKUMS7vGqnxEMqFs5zs76Y3HeB2bfimAe8mhuW6tD1ZMeeVX5DTxhzFUQBwht5fAJfMsFnukiTXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CMPKj7oijCpNqDggFPaYffKm43VNxhyv2Yt9gKFjYpmtndKnJYt3QRzbAskuay6UFxGP3q8VaNvpFFkjQJLtTG8",
  "key1": "3CnsfumM6K353Sy2SNU4uxuschPjGcvxS6w2P4gFKEUpi32HKi5vLuVvJ8sNNXiZizu8biZHYYzQbHifdkzddNW6",
  "key2": "4y8AddZUuzJcpZCTjyuf1inKubAuWRT5sj9cgtGKwgRJ2bpjeXtUvZNdRsaAuBumRpfpYpaWdN39VStcachGCFWb",
  "key3": "5X5YS5MpgUDeFBxWmk4qsRJjS2Ztyx3F8ogcmT85uiPZxbWa5jTVSp4RC6hecLCTYJpuojgBppuvUyemfb7n5FJi",
  "key4": "5BsFZFLz3QkoQgvHokHyw6b7CFWfLjjt4pwU2t42aQY3GhBfXjcunGzfou7o7QSCpm9fzdMwmiSxm1NbRQXtWj7p",
  "key5": "3A4ACoxEqonT8i9EuYjmK5fmeMEsRzdgJoeyscmxTQMqTnWLhSsH5vipKCtJskMsZBohEg8HMHECvQER4uvDznQV",
  "key6": "66vcZ2iMMz9aopJgjwnZHXhB52yQe9rHFNzJzBgUxyE2nhQhgL4o5uJ6a1kp8XrNzEXPYDuqXXWL1BuivSdbbv1u",
  "key7": "2Hk3XCDg3QCMBK1oFHWse2BiyhXUricP3bJWeaMox1BBdetS5aCDmkXxGq9riMYv6hK8dCHutqTueQ37vrD2bqws",
  "key8": "4nv9d356cdvGkfrQmdjxyi8bZEKKLH4bB3qmdsmJpBKqXQppSicuHbj9g9KM1GrWGu1tHTU21dgLp5szGUQNnYEB",
  "key9": "3dWY24QsJXSm9cFupgUnaeKEHVTMKRANdt8Mi4Vp17hkFYEU1FYi6i3iFW7YvqmBuQbVQ2bCk8cy7jWVwqA2YXzC",
  "key10": "3FjfBp1CM4UQUH6aWXdJpAg9jwP4YkgrzvrUaTS1pfYoQR6SWESAhnHHLHtCfFqH9ikZ5rtRDNqkARuGQUKQ6h3w",
  "key11": "VWjsVqssFmowkmDbQ5gMNhB72VcxhNme66hBnB3BmpEro4rEqauAn7GYiyHNM4eazLLn586zZs9M95UscJ5UHNz",
  "key12": "5FxFcWyxP4WgKRYjdoG8oCe4nZrupATayMXXsLeDusRZWns39Pe2pC9wL5DAi9v3LqfZp9a3Yg15seAKiD9BcJFr",
  "key13": "4tARd55nFzaBSa3hnba8m7tRzvSVdKeHxMPEHUCtgKjh3Y88G4NBdH7ThK9P9o7PV3CTvwv6tk3uRVp9oWcDSzmu",
  "key14": "5CTf6jZDdmMML1zHrYm6SPnPEFdhttbzzTUrhVdVUZDmQTrVg7KKxdP8tztqyenL9HovxUX7cJjdoafPHevXRBdS",
  "key15": "2FrykXM4eZprxUVpPjYMAWCmaUZ1RUgnBUuXcv6P4oKA4EnnrghT3gfCC381wwP1epJNbYggwRdbn8BrUu8Y74Jp",
  "key16": "29bf69AXKd2MXB4xgCT8JdLr9UqamGhny5F9QxK8CSTAfVpFbRu29uqP6yy8g4VVAg9cqDiMVkMgARqprTxmWbBg",
  "key17": "WNVaGseL5NeeGrgVVtqE5LSoA5ZZwGobMJgrgjr9LBUG1tqakg2XerWdZwMAHmL13cbqmknDyHqVJoMUfLb4gsB",
  "key18": "5iQWubQASit8s76NkCn6kKegP3AZP8k6kJzYb8G2jbpwFCQZsbdERDbCLCx5J5E1NqeA2NW7bX2NgpdNVqjG21qL",
  "key19": "2Hdqog8iTeZ6QBnpjCokQkHqQQVk2LsZzPRogLyfn6iKu7FuKFicCyzR3JnGkZFxRwpYZHDGTjubEJn38Wawkay3",
  "key20": "58WcPrTvQcUdbvUzfvd4AyoZkZNR7DYm6JCjArNXHfY7LqzXJwPDaZWfL2XqTeZBMFUjSVmuH7eshGt2FSENxdcx",
  "key21": "JNNS8bi2xsvZCJXSrYFbAFuLVM8miJw2anNCK7Dmv3UKrjmMgHssW7GLJtrLyaCoxHX7sNMUA1HDnCLkvt7A8Rn",
  "key22": "iYsCz5SrKJCAYkjTTC5GnzMf2WBvBZByj6Y5PSgGtU2QxAnex6fYJG857AQaQDBDRojUX8wVD6aThK1qnRDQqPq",
  "key23": "2Mtm89ZoJHTzua5X3GFhH9HwrbcNxp9zXJcz8JGVa7f1C7gKHeHKGzy2K7ChbSemGVWWfsorMsAMUbUT6YFqmAfi",
  "key24": "VwnY7BZvd35smDpbQd4TWeMFR2SivdTazidcDCaxrNBPD7AowDU8iYH2c4sdjZhwFjRsHxZyHJXaTof4jVDdgas",
  "key25": "ncMznnz3GgsLtfhwiRYFxbQXdZPKtgcHKUEfe53vzhLMw6A61FXvHxUwWCUuffWhPHVbFT3tEtDS6kq8at3tbMx",
  "key26": "5TcaGrHcKQpfZzn21awvuGvctc2zqHq8hS8Zhrcft63Qr4HSHcVWmkv5RHQnGZRvqE3VhpUj2kVkif4sVC5tsjiQ",
  "key27": "27dL9t4SboG7v5WUywEp8VfQCi1nQysw4T1Ln4jYeassyPcAg5ZX48duEysFfChRAv8oW77Z1D2W1jrtBBA1Wigg",
  "key28": "5X6nnAgDsqrpWasdEi4HKReSMKa9usEpp3SqYmcx3hJzx36GGs7oy8LdeofiAjrBdGrmPMkjstqSryZ7GSnJNr6N",
  "key29": "4HEinc4EHRxnArh18SwLrbZ8sCQSEbaXMdCmv8PPcBt4HQtmD41MSq7kJ9vgktr7GNAJoAVM3vFTNZkwLJFB4LMg",
  "key30": "2FTX8a5dA4hsMmArfqvELejhLXw1MzLBRiSuinPkcbUDnY281qE7rwevjNeNeE4U1ECbYhWSsNJfksq7DHMqrnEZ",
  "key31": "3YFboWoBXGCohpzYJLzrwFQZgezudgzUkyDu3EUKWgBDKM2TJyaYQw9T5D4d9FkMy3suwYxmm1Wbz1MuhYNwRKNQ",
  "key32": "3JBRqHrqQo18ZEnaBaa8WyX2LxRrjfAqRb1h7VyxXUU2sHCxAKZ4fmBubWNkEeGTorcxaXS52kY9m19LTstEKfPS",
  "key33": "3P1wge5JLqdkNVgnXzkxdw1MiorZCpDGFLoCFU1pUmE5GoZ6MCFp5WBDYLoZmBKFCBE3gpYz8WRUMJNgvP6kwfvb"
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
