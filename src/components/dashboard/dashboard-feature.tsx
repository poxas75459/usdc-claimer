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
    "3ga6FYAcUCjtoDADKhMuX7We1BM99Uit2cFRYoHMNCDyT1qt6t8raXmMKG7EpWTtDfDnmPyMStjNQ86s85D45bKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eSMk4VQw35GZxSMqS2ysSPQy1K1hYVQumB45AGJKeiu4ttd8rRU1n9yj8J9uHTM1tsYqv4Fou6s2dY9gfjsHRMT",
  "key1": "422UcRdzwHhJLiUJCyijgQo4XPFHttswZrdiH4ppdTNFGJr6pJivD8rBFq8Yu19VwWK8cQrj12gcuwNnpBRTFmCz",
  "key2": "2vDKzKw5jUL1stq1BsWkAkezfibRnBEAxdjDyy8GJ3K5zuAdN5GqkNUw4LWXJwSiYyGyWfWNnxPcaqSnKxppCzFn",
  "key3": "5t4nJM1pjpZyLfAbEyPfeq22cAgi1z3Gk7Jkzrn5rrLbCSuJJ1ueJmTsfwLFo7z8KzGxLVNJZVe2kBbvNMqX91sJ",
  "key4": "dnKeq7YCw25aXDT3haFG1f5ePiS1LSomrrStoQK7jZnzL6PUWUU74sdKHhbwJC1ArTNaTejrXq7Ru3PCVAKe4zx",
  "key5": "3jGvXpPwoQbKk3wq1CQJ6vZxFPxHj2avU39oEJqzWECYKnFS1UrNy1toHZ66oieRWkoEawuZnFM4L4NLH6QRvvAb",
  "key6": "2CUVHKUADBBQNJ9CJUTDzKMpa5sTfQWCPDbyNTQTs2bEn6yhsC2erx56BchCw29tqyJzh9FLXC9zKrKp1iLm3kif",
  "key7": "3PwcNTbRxEhyJwbZAsiG8TA8jFoHkcwqDCXeuoFvBghsqdvbRYyXS6Wkbwt5yGvoho29nEWRA1Z9zbEAJ2YVYjpG",
  "key8": "47R4MuqrZn7e8U65hRxpGwaA61N1NSnE6zfttbT4cnG14vU69WwTiGvTXqj9m3EWACriESpiR8SuJgf6ATDoenPH",
  "key9": "2S9tHPZKcFpnjY8RMe8JjySKQRcmmLz46aKNHBrk1FV5bH31Hz6kC83B8kykidPUX8CFfkXJezH3pAdFsW9QtmJs",
  "key10": "3RHDwVjm4t2oJYFYdKyrRGzeVkybLCL2e76vc9p94dU4Ei91aBZRtfhGQnZSn7xh5fkDP19KarusPEuFBCWU5PRS",
  "key11": "4FFx6USpirQCDe6h8UzrAc8EHWEjyNCKiV7XQuBonTubV13qo9nW5vTTN9Je9CP3YmzABxSZaAqNrcRzMNBkVNG6",
  "key12": "5DaVhbfiFauzD7hhGDidTfgB5PxvxMah6YhEbpgu9mBA7vgsVJdyjo7SKGECh2vLceuAke1M159jAdqgz5qyWjPm",
  "key13": "5jWXViyvrS84WV7isGTzZJZDWwahRWv165TcT4wZw7eWL8RakHXvGzNv245vcFvJ8HRQYSTGvmgqQUUkQ79a2az6",
  "key14": "3rPiHUEbrhYJdePxa6Dvjes9fQkz6FYKN97PWMkLhFZd1V8PoM6VBZeG56ejG2B1q3H1NHFtftJ9shXvaEkGNBiA",
  "key15": "4ZNf6NJa3TXTNUzZADwaFhQay3CpXCdm2C15drocUhwmfVk87qoWFYw5iKQHb1ew9THTHHJdScyy8G3ahELENeTj",
  "key16": "63UYGKP2cTRr7z6NRvPr985rPfuGFRsUTrYJ8UKci4ZihVr99E7GoTMbHyWbjCQSZaJSvG8qzyxngLc1BimgVmAR",
  "key17": "6Z54EoRTj21fKUS9k8yCs4SLcQMj4eRHtVAe4adRrXL89Awkq8JhQE48dT1UvZwamEPYYMPyXsb1yPi65qgwawc",
  "key18": "4qDnKkELgkyJr79HVAUi2AVo2Z5An6inTZZJoo9kp2neHAiTMQcakkXKfPDoQuPN7e19Pg8kNejxGK7g7ThRN8jm",
  "key19": "2nEKWX8ZYjGk47JwYky7UTLJBt3aWRL6vU3MZ5mevrX3GbnmozYxaZ7mXpMDHDh7S17J6Q3B6xMSonLMXGfUt52L",
  "key20": "24dHxK1w73cMqdXJMDK7NQy7MR4GYr74JhbYSgHBaPy4i6mH2cGzddVTcSKXq35WJ7kZdodeKhEMWz2pEaByGRrW",
  "key21": "1J2pgcnUfvJ6rv5GcWKr53DoJhT8zfKg2ZX2FjaNCAbvoGkfGdnmxYDynCqvxKjWjSKsyekeczj6Yk7Kn9S8eky",
  "key22": "ktPe9MqBWukKYQeH9q4kk8ZuXHPSeEG3kL9D8fyqqP63aTdVvqWP3j6vyKTDgjmRYsrXkNWjY7UGY8M97NGywE7",
  "key23": "657eyu9R3qLLs6R7v5Mp61zFzQQsGdk2ayntJrQvqKbUbWyQ5z1UdzzHabgA63b6nu245rAhWvF9kitkYcFqtyfo",
  "key24": "4iGbgKkR7hsu2Fg5iqb2vgYE9PPFVbAMFBJ3BNY3Pwf1EuZEHjFZuQ9k8NCUABQTTYpXEpW6jvncDhTZQ48KgpeL",
  "key25": "4CZNy2RbxyeDu9na63eCSjxvS4MWKiSDeV4dNyMoMQLkmqCjn9NVbrUL4WHzPnkYVHf9P3V49bfggdvL9BEZxzKZ",
  "key26": "3noqq1LvGB23mB7DzNXRxCGxNqGzVWBXHxbtwG4oEJ7C8qriyAaS2QF23PLEBE8WnXFv29jt6RP9iALVruBhzeX2",
  "key27": "4yqrPDQDnT9ZpjRziUQndRS7LHb12PH1XdZZiXGH2Yx6hSYQQf3jes13pYKKfKyx37kfeEFzw1JmbGtQgKVTPR1m",
  "key28": "5HSpuiXmiHmxXi1J16WbMuGxWqqkieJ4iD9r7ErvkSLLBWW51Xm91P747DRDeXgVkBt6PwfdqmubZBAChuqLA39g",
  "key29": "3LhUdHSADMUgaFqMbR5muGDTMfa5B8PiLqH9yQaBcnRXbyMtnUHJi1xNGFmJfdnwLARS3huQVW3dSQUp7qq51Twh",
  "key30": "5k9usRGMb8Eak1vYpaUTzFctQopuai7cZbxnhbqbyETGNQR65Hjtz7AkY6HX7kMLsznjy5gz3LEzTQnSamq5cqrG",
  "key31": "2RqYaHjwT3x2LJfSCEhCxVKF1LuSMCXHGBWkVrjqUWMdZrDNXkCmttJSnDrZm51aVyCSb2DZ2AFq7CUvhgxP9xMw",
  "key32": "ymg5egEhBzeLVKnQRQLi5RgUZU1WGxuiQ2Rn24xszxhpUXhTUQiZVevnHSADn8hGFvNcp7bbnB9VCCbDAQWKaEn",
  "key33": "5yFzDpwhqQhzqFbZeMCfuhdKx9c2uavBdPtFm5uuWD9APeFwZ1ndnYNA3kiwT869rfQ3g5m1QgZXanedDiASaBT4",
  "key34": "4E6YbixB7qjevGMzreFye2nUV2gh3KLZ5692u8fsKYw7ebJokdJ72VBEbgkPJwiGFggRjzvavP1zgsB1jgnsMEem",
  "key35": "3zucAzvnUiqAFFSKE8b9xDu8acBzSL2fCn4zZsBty5jGcZDdBwTk9VNkAzYyrSVUWBic6VLXnGs5nys2RpUwrosr",
  "key36": "njN8n8Adx3Z6zTQkTzFQokcMNmM1zK5oFdHSAYfPjb8vzieK4QWTnN62L37JPDp4LpW5a4CebQa9MZFcspkfLVo",
  "key37": "43GXNSxm1oBjneSoxFj5tyWzXgghBL79yT4D9DAxsgTDQPUQuLDRauc7ABwGwnfVFQ2ZmMQqGodk4p6gUEK1na31",
  "key38": "QCDkZsPgmyBZFUryBA8v4pMKgiw3ypTF56aXGWHtNF2MPZSPJQzYHFQrFhu7zeE393TyMA5PWPYqxEM9Mj5sd6W"
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
