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
    "3KycDjPgPyefTz395p8HGmySZ1wD9SfXgNUgGfCCxzqawjsSL28FVUbHxokyysAtUnfHq686a9F3ZDub68H5yyuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "385DEtrxehy5RJT7GjBZx9PWZ81G8TQzA8cvSh53CsbyCZLChKHEzXph27aVSgN67WNFngHuznNLXjpB59DKM6rZ",
  "key1": "5ihMinXsYKUHsdD2nQQc9z19u8twotkqgPmexoPQcWzSjwnZwi1rdx4rYz3sbhuZgUY9j4xpXCuN4FgbhHdqdnrK",
  "key2": "5maJWEtb9UmRqxrVpdVwVaWsBYLKY44G5e5ycdjzCoNSQiVXqppTgjzCGUTQ5T8L1647KWYB7EieqFMNKKEWzU8U",
  "key3": "5UoWR1kFk6xyC51Dr1QL3UfmZNYH8rShxftobLHhnCU7xPDq3ziHWDszGthbxvus4BtLykjycWzZ6dBspLqs3S5P",
  "key4": "4duqnQLGAJDTpC6CT9HRQHwxeLvo1rCNQ6aQG97bQPquHTE9ZRTj89iB8j9EQdniK1qkmnKg74MRrBjnRqvVQpoF",
  "key5": "4wKxWZeiAgcYeFe6CJVN6UESkMeznqWxaMgSBAfD1a7L8kRfnCMgiM7zVY7YihvB1e4xzsCeZDjgvVAnQjvB423Q",
  "key6": "4z7CE6cG3ixNoZffZz3PcNuzrFKdkJ8tLnkfbMJB5P9SGfCrDYixWmMnghALq9duUzbthMmoqKyiz3XgmonUzmoC",
  "key7": "29UUZPSLshPuvTvTBQWDQwb6hAQVp3AyuKkxq7p6oQmc93Hbpc5FWWaMJF1rzMJoC9jypUV9e5vBpaPyp8QELe8H",
  "key8": "4HwghPT5s9327cGuJdC4WsyYTc2oMe65k32dEB8eWxTyJvkBAs1NmEL7CKVL7VcVvQiGzcHo3Qvm8dyWh4Mymm1v",
  "key9": "5gVksMp5arH6SXWzpgyPkJhBqS7CHtXmfLGvEyD3s6baQy6SjtUQv2mfHTWWaCizr3f1DACVcTXnuxw8UsLLc7rP",
  "key10": "2JAXbNuhvZKqAT8hiCsGeTHikuVuWxn18DMgrFuGmj3cS7fKMqKyzhrxKmKjwWNQLCSxer7nazSDsrzGpTE3LcY7",
  "key11": "5f6DQ6tAHpedB8UyiwacbUQKAJ1DV9njn3PdbVuD1U1EWcDbTPSobf7Bpzgnr8dg8D6PZi1ThNiyoGR61EneC3Nt",
  "key12": "2ykiBkuJkHyavgrMQXicLjcx2e54bWiFycNVNVNMRccVzkdNHBSTRcFEvZhmBFZGTSQKLknKaF5QFBd1CsZAsdZw",
  "key13": "2CC8ZoHUaBty9yc7mt8ntmSpPwNCyvp3P5VBVQDWGFHGN4oFQdnL2aXHMvxxisXTRNk4MmdXdBzuCg2nYUj89Tyu",
  "key14": "4hYFXqhH2852Fe4iNFtfYj6KhYUzVqryFs8oFVWahwbQQerNYV6dqj462X9Ttxt5SpToeMHxdV2HhksRZmKFHvhm",
  "key15": "3URtRVmd6pSaL2R8Xw7w8MY8Y5abeyzQdvBLjMXE5fwB24Rxs6wJp3RbLECJ2apjfE4KAW4Bpo3vXsRCgMvCTmy3",
  "key16": "3v7YS6gKbtvfLfiG69nGbtRH4nYCfSLwc6HKBTrQU2p3mXptYPkeiKZFPLg4TJnzihTQfwZibDDMSp8CoeQJ1qSW",
  "key17": "abioDnHQUPAJB4QrkvqyLvomqy99yX67aFfogr5nsBYGk1hWrrApduwWT2Di8FxfueLZMwTqjMQ9tHdYSo4bG1L",
  "key18": "5HBecw9N9FG8ooRXGJ49f6LTz7dYNRZ171LAjXoMxBY1dhTUE2joCo45ewmWSdUiv4ySBei2Q3G5ggsi4bfCrKBp",
  "key19": "2cSTzCjMpspMVQ2ifNa517srAxqK6wcN8pzshMkn1oF1N6SZrpJnYaR5nj1KNS7LMiyL9r39F8iwB6NM7hx99CNZ",
  "key20": "N7fBAfjgV755Vh9KkBDji2Um2FQU77d25o5zThKxgVqbnxU5XqQ9vga1wd7y4J2vr5K4vZMY8sGcLBJmovhvBe7",
  "key21": "S5rWxu1AQXkreoY752BGJ6rWpVBB4r2tUXJ9J3iHdnRxF5hcRQMJdkpKX4qMiE9F7WBjYdQgQc76JJN4ZCjcEeF",
  "key22": "37UHFjSgwBQd6TcB8UGGvF8wUdBZAyXwxSN6L5qNBSVNJMTeHdPVgAmg5uqoyzudEmmCtCsijnwAD2HXiw28EVeE",
  "key23": "3XD7DwD76VCpZHQMi4zRMsH4KxMap3SoF6Dfh29v4eNm2pcAmzbU6j7iqQ17cMSzjZXXbMW1GuFeG2r343Jeu28C",
  "key24": "4w45QLoFrGtsKgLL7kY3ziLXt4JkvbtPut4kXNGtxehBGLduPsYnNHq7gUucTbCf6FvWdH8kNtqBKu9paCQfww6E",
  "key25": "3fCGSm5HjLWmBojLmyi4cnwMWUeGqsiFmhADaZXJq8nqbp6cLHHeDE9KwCzSYva4GifdLGK7JQEHsTo9YkSREzYj",
  "key26": "3isWw1Up69wgWa8hTBk1XMs7NdpyJmTtQy4TbnexeBZhXNbWVfVPEyhNtwecy1MRRQi6EWf8Nhk453BMkgTjwjrf",
  "key27": "Lty71f16QvDtrw7weDtActTqivp9W7oU8SYt7ihnSRdK5FXhiCU7HpXi9EnAesBqkLBXoWRKhKRenwgAwypcxHj",
  "key28": "4jbXhHUjVWc7xZ9zb7a1bmWeGFLPHBwkVDHjRzdYxA1mrCZ3FRQFx2c6sgQQZ88FEE9rA5pspyy8mNP9t6Ue4VLd",
  "key29": "3E8Em2nbwtu8taJbDmXmwHpwmy1euR28cHRWwABuMe9itjGCvkknE1cAHsMh5Zdy7zx8Z8fhZfQfwXm8vMhtAw4V",
  "key30": "4beT9kYwUXVT3YiUfQu3GA3QUtp6oKhTJV72Z7M8qgB7eVrCuxFwHBsMveTMAvCuX14awiiTR3F98KcP8XKkNTFk",
  "key31": "2k9Zg9p1T2Ax5UkiFPgteWYMu5vy6UhpsJjqEhfXpVBuSpKc7gYfRfurGt7sd9Z7AH1isavYzbBHGNdB2itEvhHG",
  "key32": "59TSeFJS8b9UWhX6rtbuA1FMsKpFxMkRZNaEzNbnXX3zJYQFMKFYzhPEfvosBQ3nRxBwV8PdNVZKKSr2b4QUNU9V",
  "key33": "2YEJc4J2ECVkVZDusDhDPxNXVdu3Ni2fGPy5qUwCTBerGfar5uLks8NPsFpyaT7faAH4qMfAUKx21Nr9ZQ24C2T4",
  "key34": "3WJ3tQuyty86YMMvp4Y24gKyksb3Xpb2Dw2Yq16Z3pnnCePjHF5e8cKCPADXq2rtKQrNYcHQbd5ydYmQdM1dkwWG"
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
