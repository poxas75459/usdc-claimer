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
    "5NKfvTUPr5Yzsg2QFy3yoN9byzBMSC11hJJFjRzfk3diZCfHksN6cqnaPNjUzg6mhh21pYNzXEDe5gR9kjFcEAqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CfXEd4qK1gmD1Ui7hsrawGPT1upo1HD45rZo5ZBD3iX1dzGNWc4E1kepucCkLBtGMKSfPirewgj18xRXyeNCLAB",
  "key1": "5bao8ePkQkjCXh26zQGSsqnRH9wE8Yp5MYCt9ritg3c7hCL8GwJszqQHfq2nYfv3Qb7ScXGbdSKjLYADobEfcEZi",
  "key2": "56P1xbE9vJmAf1FCi5d7ck5M3FLi5kNDe7tDSmpgq9a31jeVsw4Sxe3E47YkMWyiLokePk8w7kmkaQ8QWUgzjA1T",
  "key3": "3YzojwthJQs67SNFHGXhYwyedViqRiWHSJQ4Dx3bPEdXEMyaavtPXqZ1SFnu683qSm5MMb5GDHdFfzGndSo9nDvR",
  "key4": "Q17aSX8yWYtiq1Zmw6PfeMXxEYksLdqGx5FYeZVBUb5MYHH3WwiwbSBhXQMhJ3ZoHDXNdaQtkr43cSr1x1xQ9FQ",
  "key5": "4FJZheSwUm9DLqTe1gbFc6pRiNRT36uPiT9bvidf49eKD57h2ZHgVHgrSWLM43ZmyAewWxnd6jA2yBL2iycT3HU",
  "key6": "37X6zvpaQf9Hu2LoHhkrVZxLsVkdaQqHfu9VYxZzBjrVMwmhESdDPXjuE9eoKUagZ933NaV2dQbaGCt5VqqB9CLX",
  "key7": "397so1iGMNm3nEHzf7TCwUujzCB7Wj9aw2YWGqDqJ7f1BS3v5vpEPFKdWH8KrcdX3Ukezg8TVfpVbHE4hwRDzvK7",
  "key8": "BcGMjYEhnz4SDAqjjJQwwPKRUqYNwHs4GzGBS8tFPputfjsKsHNW5aZpS4rYGguueLYW7uPwE53VbefcMcPq8Z6",
  "key9": "5XdfkdKM5qaWyh9HFHX6WJDk6jMHRwEVWhZ87ogtBaWCAQhXaorffANsGsPaUFb9mydFP8MeUorZ3hsCNU4cr5HF",
  "key10": "57Ncpa7yiN5UzpoUkM4fprMNtxBKufAve6SPbhPiG2gmNkeDcFmGbKXwd9MwLDCpAqemEVob1XXVKGx1qh4kLzZQ",
  "key11": "45rm8rQUmCzEz4TeKn37Ao8FzttLdVypvLFpvH8TXzP5TXZdt3zWMajPzLhA6p69Tt2mcVeZxMPBN3DNEh1Vx2Tv",
  "key12": "4Yip1GbSCzm3h2SNiGNm4qouEe9XjHqN8xgCWJSpDhzMfQVMtqoQ5MqAzbB4tKmcbc2AKi2m2skbjmrDwuMEvkhJ",
  "key13": "4eTvokYfdtqfvHfb9GNBFysWfTda6bb42cPGmnug7qztb591BDT5vmKujgizjqe7LJTBw1NYizpFqFT5AQzZ4xhP",
  "key14": "3noFBasEViuMwvSrYJHopk9dPXJWs7gjmvMvPGoHhG54Wx6NCmRabwP4DiMLoHgezmLAK4i4BgpEMt4mc7HWdyfz",
  "key15": "33613ijrMYcLqG7rxeSgLAvGd14pu5ouBknaUB5bTLuYpHxYASxXdFCoTwycBqRVknY55udPdX4WggKC1UzzWbAj",
  "key16": "gNSmBmYtGYZvRMJu4BCNQwZuktFsbqPcZHeQxfFSww5KdwdMR4iHWmv5obSaXyUsp4cmP9NURu6xQJehn2tpFMF",
  "key17": "5tqtsN2fUjjk9BzXrxKJn5xcbtNQDhNDoDn8aSmK96dh1B4rFCidRm3qoFa6RngLHp2eTDJnQTm8Ga6TypVKAeN4",
  "key18": "53zXSDZCjeyDPzYpJnGhyNE1MrHCKeRpHPLrkkJyKaKwprQHcdZzq15NiUGu4WP1anUUpJhDTZCygLHE56ihqTcj",
  "key19": "2qcCjWWCDo97nzxDmPh6CWZJt4oZMvxMR94A3tvPZijDBVYrDTpXNZRUfvgNhr9nyGx7sGsXHx8PNxzEZstWfwKG",
  "key20": "2uB3q5kqQUuJbVtzMzM1HmjyfpUKmxu1vGhPgbcoHeKPX3q3AGyoU7QvG9EnsH46oydtiJW5y9XgLu7FYWqy48Ac",
  "key21": "5y6Y69GVqyzR2C3csftTea9QUvw3RcRwW6fBiEYP6KpWcNFwGnG6xNLjPQnYsRXHY63CFgnMfq53gRX4d1Q6DKF6",
  "key22": "5i9ZxZKMdm7dgT5SYZew5b3rQtQAUcZU19jJRcAAMbPXL6kbW8ujNvXv9XUKG7gBAuLSSNoKukWGkcwzdgqo1xQP",
  "key23": "3XyncbEuBjgcX32XWT117z9sXKo9h2VmbiQLsT9dUtBj6Ark5hYQ4EC77HeLP6wKdYYhMpS3LhBR5F2v1DeNK9Yt",
  "key24": "2eQSittWfwCHQF3VmbTgat77EnUYWFv6tW4odLE5uxQrwryEEA64xVR5VCN6RSXmVpYB6Jm57v73wLQfQeZhiv6B",
  "key25": "4KMTZDzB4Lo1QCBm2zvuRHUj2xeF1Dw5y2ZVfkX8E4ULEUJoyjtsCP9bC9QnmvUhvLnBFhHPQDzWdNADgbapR5oT",
  "key26": "2KMyoW5YtVv3LtAsSGwdjeTDo9KY9rmQ2NqURG32qHWAE9ubKw8VabTouTAm6cTWef9KUNx1JQBiL5KuWmSW8VCy",
  "key27": "2Qnsy4iFhUXWckE4M9yRFQqpsgJdtQS4B6rjQ85UwQffmgLjEbjdqGo5xXT8PzjbxSdaF17FAaCJrUH4h9RUqKSH",
  "key28": "5UV6VegKXujZqfpxHkBuqgbJYY3fx4XVeXxMJTQwLdo6C6Atij2ogig9KtJFc3fuwMe5MBKgutjRHyG6h1Gef5wf",
  "key29": "5JH829vk1c5p3DjRdkh14qYZY6YhtcN2aMqZBNMA3bPG7XNJY2gLqk915U49jd6B742BddfpFgUyBWdBKydyFcDv",
  "key30": "3QoFhw733tTrh2x1BcDYXzDuDTnt61CQQKTnbA48cqzgkqSk89QnHtWC3BapBraH8gsNEWvGTdt8fQH449KQmnL8"
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
