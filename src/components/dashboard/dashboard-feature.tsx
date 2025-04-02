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
    "MSqDDFxhf1JwsfmXaR19aVVQcRFVGLTQeEK1x3FhE9rhqYvJ8TwSnKfypeoTfMjFTMY6Ld9nnbUREuQ54wnVZUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65u5Dd7thwda8Bd5H3c5P8Qai4tWVVpYyNtNXFupTr47UCvEnLWsqzVUYtBPnmci2KCCkdyeSNBM9o11LGfDtQTJ",
  "key1": "dMFijGjcAoWEMQcZKa1uMdWtjZxy8A7CYbLfXeRVXjzGNvNwa2v7jszW8myXfQpbqsiLchGa4tY8QtSuVgDZUqS",
  "key2": "4oySNbHNj1vZtT6a6bxv1eNLYymWvPbvaL8zed3Ln1kLGbi4xrnCfpRKCApw6dj4tTTXxmMjXrEjePNUuHe6PffV",
  "key3": "24mGkTLGGYyVw14tAop4HqmZqUkeEePKcei7hKrs9HRn7uC8w3jFt8gyuxwePuwGjzxGJCHFP9ZuTMctetxztQMh",
  "key4": "2SzfE5QagS527UuoefZaiY4GaM8JDPueRpEuAKP62pPHy9ccffCXBrEQUmhBzxpGPb5sikPxDj2gUi1yz6SFvrbj",
  "key5": "3sPPLCz5FwromgKnCVhmzRv1jL4nDboP2Z7XAQLSj4hhRVzgDfBdmQLoDSAo9hBr2ixmuymCX3KHmrBwYrYBPxhA",
  "key6": "4TztJQBYunuxCHzRJ3XoqMhWMmYquAPjjJzD3C2DXNzvkzFHpriNKCDJMJRqwzQKmsM8DYMbYtggeZVrX6gSjtR4",
  "key7": "5tzy5KUNy9uRFQAoFsmTPm2e2NPfTw1M4skWPzUdAbaco5bfU1mz4hUwteyw2odRBD8PhLyQT53jta2i2vLoqHNZ",
  "key8": "5hLcME18TdMogBtckuRfoJAAJMFJ1pe6thCWXP5GzVxSs4sHits75kEcvmiBExEFWQBHrxm92WjdZkj41LDJUvn4",
  "key9": "57ZKCDSYAQJkUDXcYdwm2Ex969HBXE3e6YBs5TzP7dae3LfueUUWrEk1gYUUN271c8vNTKoQQZ3dmocyLtNKqqqR",
  "key10": "3ZyYbGUPJUz2apYDYqaNz45jbs85wgmPxDJCKgFMxgbNPJ5moBTuve4CwZx6o3B3v9Z39Ygcj4nTwZPfGD8NTD5S",
  "key11": "4zJwQfvwaw17owXS1vxATEuXbNdCKCaVVYA2Jf2GFFDQLapU1c6NFdkLodrjjkdU635rzGn4AmQwzk1W4yTxBkde",
  "key12": "34ZhWQkqFxJPNQoS1rcZ2KA15h1Dn7JKeMAJEC9ABBJ5vyjSb9Zp5XsCgbhsLDD5B8acrn7QKftP56TkZqcYXHZ3",
  "key13": "3Nd1cMCF749JoD17qcJk56gQTMWy2SqbinncxgK4MCYXyb1WPabCoQBaQ7amckYHZwJoHfPR6vi7uCfPrudCNWsr",
  "key14": "2fvQybKmP7boGxQCRjU7yYyHMab4C5t3fnKNFMhE7qCdjzQcmJYLx8TdeFkb2SrEq5cRcJtswMJBubAWuw4MZuyk",
  "key15": "KBjLxkoYx1PEdUiog7UMAY9K8pgTNrCFMytBB8S7GFiaYq71KYXRJ1ySUainkPtEvNvRRjehET4bNzS4NP39Gmz",
  "key16": "WYsYr4KCBfdZNdYAZuCPnuwvNRtRnR3wAz7NgoWnbHt277vUAstNFAMqkQzgXkKuwg6fmsGRwNZyqTzwQTz4ScL",
  "key17": "51aLZN3vzriwPnV2itQLNzEX13ysKMpNDz6aaWrLLVFGuN3kxfGN8CcKZ6jUK1XRrwjwNkNqgQWYraTX9zmVNJ9T",
  "key18": "FFm6KpmVcQhR8ECoc7wTuCARYzMqG5gzeuZ5zrmh76v1h4YHZzFsCuSF9iii61fLVUj99uxDJiG5VRqzvYgzjKk",
  "key19": "5hjnTFatZbicP7fBYfgBNZVTXJ759MoxCKRjhNzyMNPGWpQoKMdTpd8JiGo8FQgwJYpXUwgwDR7jVJha4bJhgms1",
  "key20": "2uMKLft4kaVUDw9gDaEjFjL6B8RQPWKSCn88UmPma95bi6GUQiFWbRraaSqB9b8axAqu2bjZxucRtKdYncFTf8Lh",
  "key21": "2DC5kXTv9XK3EEckh7tR7Rra3sJWcjSJDxdSGPdHjLWagydAR5EJKvqxeoaG6Drvve8TqnWM2Zc62ZP6B1ALnwH",
  "key22": "vNnZYXx3cAhGSZd8fYAub9yD8wLakooadDEhNY1GoDSVuGhZMK19aDfv3yMmghdfma25XawjPGAQ7g1aieUoHcL",
  "key23": "2aEnvuXg8yVUURnuAo7Jun3NX8yMbYTtt5xuCaujk1TiyyCS1iUh197fqibBg2ksig32XjVgSne27WUPMEHgm7xn",
  "key24": "5apqk4mKqLj9TvA6SR7iasut4vBTAf3k3ugH8X5aRtstMBGQx3AZ1dq2Afb88srtGd7T3dnTCS2q41Se3vhuHwLy",
  "key25": "5cYGF4V8E98T2pUE5nTNdt9gnWJ9RaDY1pxnAMVhwBA4tv6uNhhRVnuR7q9Wet1ihYZpZ2rWRPKNpjKfMUByViBb",
  "key26": "HyocrTBa2fYM33DU3bLa7Y9jXPcFU5f9jdkTBJHXeQSCfHoTqFUjkHpR2n98cJVT6u8srqZY92jdjRkTcLCknjV",
  "key27": "dVk3jGpycQ4VD9tzvCs3fn7pNovYH5FpjU4BX4AZwzoPu4yjy4MBrC6TDThPFBrM89TFeGF9dc4wEj71TkNrGFg",
  "key28": "5cGfQVypRuGyaXenSaSrPZnsk1CiVvZxQ8VvvnyRKqRdBqVUE29AdFQHindrzdJKSVd81GRCAp93jKVQaTE1Whp4",
  "key29": "y74c3j8PEmMZEZYSBpfyLKE6rqYXreHQjhUQDjtoyZA9QrvmYNTKgMLTqoj5cs5h5ZtTgRSUa6m8t3P8gkFtt3Q",
  "key30": "58fSxTTzHbvmQNMzqhg1ubgpKzNoJApJZPgiTyDXtEsLQD6KaBmqSbsScENowZLTTKRhyDn2LyFmpKAHxHyQpZ49",
  "key31": "5An3ByVQBBFSCFZMQaDfKw2zaC98kYUaKDQuyE5XCzXJovChG2E8uxzmNE6e3Sze6gKjaG84pNzs3t7RJa4u18R2"
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
