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
    "3QVowoVv2SCC1P3ZhcDfxiymK4CDJkgJ6axSbcgeQqy7B5YC3FTa8yk9c8WsxSQ3thv5LVYf2KzQz2QrdtqEY7SW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vkkG5XmpZ8qS9vic1vvH684fic9e81D2JVeQYxwPSxvHbGbypySDnbikae2tKZXxzDZL5rLaqFQJge29iGbWsdx",
  "key1": "zwjWkMyRr57CRuiKhhaY9Bn4D6UG2Uw9xJdDrPeWTmaXY3BasZ7DCWRBkq3jx73uxASGzcvq9gCjr3uD2uDr9rN",
  "key2": "5jWLgXsd9ikxqmJx2XfkmFGyyJctqLFqey5TEPchZGxWN27mXjvMti5XPJPUj2479htvKPDjrnqFiHfrKxJAUuCB",
  "key3": "283xYiJsSQeFguYqbBnUFb3n7BojN77vKiAwpM5GudE5ZBtbUn9yuhgoKAGEJ7DyqttKteArxv5yrZPkGUxiQyW1",
  "key4": "2Xs454pHZDUBCqrkyJ1YUUy5iMxYPqpN3TgbfCS3TUcrx42MRobZmHiwvAiVsdRSf8ux2JQ8hyAYfS44Hfs7bWbc",
  "key5": "2Hg7X4ZqWuVnaoUVJwxGn5HUAeYmZNBycJMyUsgAEYGHFRWZ729vyQyoL5HgEE24YcgCfVBi5EXHGyrxwmV7ofjY",
  "key6": "2JamrMUoXfrmNWChgGjo5csFz7Tfy6N3tn7VHWHBMLxsEPsgCNZaJumgJa7amS37CEiSzoqxmdpYtmGJttHVWTQ1",
  "key7": "36TXXWiGWqPt3BDWUcscF8UtUAg1huAsDsB1vqf32fWSDYQepwsfubYmUziWaun51jThC1Ch2UuwCwvcQVBx1pPE",
  "key8": "Wr2xZs8bvNsvawjBAVNEqQqAsz9aUDpu5zmfDjmuxoQjrcf9dU5Sej2su6EKpbmhFiso4JsjQZ3iVZnmFpPyf26",
  "key9": "NjFvmq8GkoxiWtPPzbA2eYcSXZZNsDEduMPL2sc8tvVeakGLbyXVvrDGDNwdFTCTh2SMmfpT5Ze1kcSmgY4dcPW",
  "key10": "2qgicnnxSKzYwGgkBLg3rcPzQTQj1fXpecTB93VvBGXsorM1o2tV95C1ya7jDYruwAKbYYRfeYZxAAijnZbmFyRU",
  "key11": "5VsH9321uwS6tG1gUAY71Vq7Fjr2gDaButcNR7XRK2mBAeDjvyd9w1ZswnyHZcCYCX2XedoU3B5YyFv57ygJe9i1",
  "key12": "TjZFBRH5WagtezrJCfrbHJVf1waB3MsMRjxKKf4EMsvbkekJ3ciYCypr4RgqXZf4tqtwcQoxcNrqbbjM7FSF9xq",
  "key13": "5caHfQMMCxWhdvCBMQoyrw6QPbKyzKbcTNGf1tF7B5sDgh2buE44gXp5CU8y8weT6nzczJqWnzHEtpt7A2ZBSAke",
  "key14": "2JureN93NgMZfgTUZPENf1JzUhHZEfC4KjvCeqDaW9GeZDJtu9RnfsGo39r45fYchEwACR46vgJdfDHy6wKJmcX3",
  "key15": "2CjkNBauwwzuqPb8ka6WpDVPvTzmiNGNaxGDFTh69mencLo91npG5XJHnNxFsAki7tEWWbDb6cyL1cnw1RJuAwvx",
  "key16": "4UjDzKiakYUrdqfEa1auriRN7sZ93kpNjeCVRpnowwJpJg4eL8zFw2WwhtMtB68MXx342E6T6jr2EFqL6ZUE5Lf3",
  "key17": "22maYDYMDDxREiUrNPXmuVnpspzaMGUm975qTWpeX74P7zPakHtpUCHhZFF8XXp8argAXZNr3PmEkuKhiqUTPzDM",
  "key18": "YzAADCeSgx8cpnSYxmnbSfJymZrBdRhNzWAYsRybz8hv82T5UnAz4kJz1wwnLtWcftSkrLQGy7KYCXo1iSXztJ7",
  "key19": "4p6kv1FhmdtzknEDXAfAnk2SqRRHZLo1kZjiXqjNdFDGYpK5gkijmDoAWqCvkDXoWNFySX1kRMWLgjXNooxrXTNM",
  "key20": "7oM3XkdX85B7hzg3hyMJdnzcK7HPuiXbFXLHD8GzS7Yuz8KKpNJkjg7VzbvsZu1gpr6YsEViDYr5JGdA3CRVJnA",
  "key21": "5inN1wuriNKeCLZMFMKXmUjpHwZvMr7Crg3ifsZ1rfzdiKfTV8YkBgdaobf8rAYNjb9GQvESZM8Rh8DgJcpCRGZa",
  "key22": "2YgzriWThbwcXj25HdxKe8LTn76hUMSSobxFxucv5Ys4H8H3uw6ZSHheQHHat5MA12rfRFip2oBHeSu23L9gKsrU",
  "key23": "4v3FN6G9HyLTfKjEzABJ7qkaLH7i1uhu3o7UyETXkiYNGxLKkLr1LHPoms91ViLCrcHHkSvLgxF94bgVbytHMV9w",
  "key24": "5x9e6grb5GgMV7xXHYHx6WadRD7YKEdxmgk3qwr8HyX5jjPqnM7GYQLtFHWPyFn3wj14KjUgGcf7YPEsX7B2587m",
  "key25": "5y5yDWSRy6BpSiXrAuri33wp9UPNgMWLYTWAqBvdgFPc1yvcT9SHbCSz7m1tHGMSzidNmcdedMgGYV9eh1SXdr7y",
  "key26": "2PoU1JHXTDZLpJRHcDPQ23A4N43MWzHQP6DfghSLJdh9ewRc44YpK6xnu1owZGxAbEaweQtwDhBpJu2i5JDQ1ewX",
  "key27": "He1VGSNyKD6LccHf4FVUFGNPUjzewqmcEqS8o6qfa9qCUV9CedaJR2PuTVi6jZaWUAn5mYjmNy9P1QBxGcmvR8b",
  "key28": "5gSwSo4RM8g2hq2DQGMysmS2R4rWJfjPm5MY3HCce12SRPhqzEy6DxWpKFTfCSs4e7QTxNXBDEuUMdufwz27BdQL",
  "key29": "2Z1fv7uy1K8WHwhWu2kCSSpjRJGwK1akZvhrEKQHNQdAHB4XwzAxJTCxRCWi1MJWqmusPvjUhw6fk7uw5Qp4DBn1",
  "key30": "5tH8vZMWD62a5uN8pCtiMW5jZ1VKJCWsxw8pQv4J1KvsdENp11TKiUL7sTU2DjLCcZJymSbnpJGEwt5bdhNY5S1N",
  "key31": "59Mdj7MzN4s3Pdu4xGtd7ejyPhFWmc4g7fUn6YshZo9YuDjJqfpdbL83UdzeKGAyxaGYQ5VpoQGpBh8AiLy1E7bp",
  "key32": "4QDh1qE5fVnDhhGbfv4axtRwtdunYN8Hq96FqF3ipzs2UNpjjtnAVM2QPGngSryT9RA6xDdBZfdDmhsakvv8QWmT"
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
