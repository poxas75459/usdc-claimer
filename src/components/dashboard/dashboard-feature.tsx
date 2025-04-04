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
    "WyqJ6rgbw7dYQ5jmHQ4wyrLreBvJL5GQezUp8HGEMc5QtTMR2Tpje1s6EeKmZsGxnb5yNYnxUJ3N9EzR5GZW9KX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qrVTGQ89XrkH8oNWXq1eGjq3HwhwgFTJ46LVXb4rUWvDkVGyG4FhJnEoB6ypSPyJFjQRBtTqtZe1UJkqGfXMtqq",
  "key1": "2RS2KffYdSMZNLMPkJ89Sq8a1bWVtZUujejCSMRXJbtSgdqz14QnWmLfdR4AJ8BMRm6HUD2DzoCiE6vnCCYwrKh9",
  "key2": "5JrjzFCwm7PyUU5qn38ko9kQbo3DrPzSDeWnC67kSvt7Y8WAmgY9jgf3nwiWftCurECa6y99W5sd34ABThsdF3qp",
  "key3": "3qxTwjA6jgskVhseyRwRG9cZu9yMaNA9u3TwukmgagoxpQA5WNNGexA2A25sF6nqnJ7y2d377dzZeho4roUotwMX",
  "key4": "4GBf5ej3h2i5i61nhuC8z1JwwSGzdWPu36WpH88GPdppTEUNkSu9epzPcGw83tYwQgXZKaaBoWT7PqTrkop2D1PE",
  "key5": "2XtTSkU7QXDqMsnPdrMgPysG1RN5K6pCERNCXA9LHSU4PQCGzXTppXcJtRU3rb6c23r4pm9M3SF5q17Qks4wnAev",
  "key6": "4DSuxSqqEM2xdzG3VCETHQNtSv1F5xJV4TgaeCSrHoShfeCmcm7jD1Ue2twuxvYFLBZnXnUpR4GNWBeoVLH7MRQr",
  "key7": "2WzoCdGFEVnEtGtB1bzn3kYtSvaPvCu39ebKbGmvfDiTfKcerD1ebAZckKfJFG5ZrbUY2vJ4nyYJ9TDA5Rubfz7V",
  "key8": "4j1iD1Zw6uJpHGWofaGm9jvmGgram2rLetH9HruxnYJGUc3YR7PXMR4wFnccyK1NAgnPLFzxao4EgV6HsoZeMg33",
  "key9": "3oSZ4oquiRQHDpzwbQ7L47ny6yMSZXe3P7jwYDDNbYX3bcghAU3seZiP2JS1EJsS7YUhaW3mHqi4njUJVLMRnBU5",
  "key10": "fn4GkDx2vrK1oxRZyLAzuSMEf4TRwoyJ9K3KSQPsAKsRyb9AW5qJ79XuCCY4TQyNYhAQosVDP7Mxc1AgGabhRhF",
  "key11": "38DAuP4PgydvdVmmpzTXDsxEqzZaNkExF5oBKbdxPFCpx2wgN6qu2MfpGN1WSdXDRqgQDk5ZMRVGj214VEW4EC4H",
  "key12": "67RzU3qZZMmX5SJVcs5N7dGeLx9zcnREeRaD4M5ejUcKYnVk5zpZmgLMfcXMdXcNzu7gU9pGZSLiYhZAaHme64WB",
  "key13": "4JJmWN1yksPxRTHzpZ2invAMGdPSKx2ynZhZybZH7TKkMfX5D183rWsry4Nv8rwpbDPqBnH2u62EpWmqq7n7dFg8",
  "key14": "4kePKy3RGS4gTSgtPqcBJSLofr7ZedajUKhczimMM2MVdmrQBs8TtW2gskaFcA4rRLuDREtyX1k8avun9fXKsuyL",
  "key15": "5S3Y8AUZVy76fFKgSsA7CVdkdQfRKD6XKXg637sVsBEQtpEgmx8fW4r1XVfkYarLZPRqtHkr14gvzp8kUWPpSY9V",
  "key16": "4qqQHrUoNr6iJ4YPsgpddmsku4j4LDWA9HSU57G9LG1VkZAw5GCTWwKGCoDGFw8P3YcXPPobXhq2BJiUgDUHy9ab",
  "key17": "5ybqicm2h34twdKApuSnyNU4AYBrbMLdfRsn1Fa8bFGMjX6bnkqR7SrqBc4fHnVobBCgDodA1wPQie9ZHJ1Ae2q",
  "key18": "4q8yogA3PGUhwjLBuKqmqVismp49Eiqz5gawQjN6HG8NBnZkLZz8wZzpZZJVW44hSLSY2HomXxGg2Ef23JavTueg",
  "key19": "Ge8Ebe6F6JeyhxYWX6qbswL72oL6bxt9vtbfKt1XvFRy5xydqbfKmw2BNm9tXR7Fa8EJEiNLUmCnQi4A92YRMdJ",
  "key20": "3EBD7ZfeTYn8RjMrVym9C5kDHWnKixEmDL9rf68hikwC6ygWEcuoJa4ocSXA4o2e9qEbKWyCvTB3nUt6vPaybpMq",
  "key21": "2yRpbTkJhuZTarg4aMLnWGTjTHqiGq8Bk5mCvUfVpTxP9As5vsR81LPVdCEcicrQXC9JURscsg15i2f97FDy9v3B",
  "key22": "5EhL4ziZxChCc3KvWHFtQ88exX35dKPcTxMphUGTaucNxjbQeJ1ip1MvGRofwUxV6inp2HsvTLEJK7LPvHcWBQkr",
  "key23": "5WX4bcLhoT1ARyvCwtvPcyNsmiXJZEGzMVKjZaXsVGJc5dFq7BH7DTFwkMVck32hseLa6FxcgF5Fm2abWCQW2hju",
  "key24": "AyeLZWQSv1MZELDGGvGAAyjKxUjtQEDHuof3moBCPmN3Lnv4daPBCQkrvQBuckPFTcCnCpJC9n8S3wyxu3iJ5ZT",
  "key25": "3BLK1PNMpShatksvbxQob22y2BEqLGSNyQGsZPdR5oiLfKiHGSZtcBVCmYJieTaSeiWG2uzcidk8bhpeD18LKrfv",
  "key26": "CEhEHzVpaJikXRbr4xMdjix8Fi18t5Aoo1JHfZ63dSAyhUhMzsvbdEpxNfhxVqtmyzZf7o3LFY7PxY5RLRucLab"
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
