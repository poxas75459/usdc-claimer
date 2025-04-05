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
    "yRLpKsVaShnUEiNYWxR3VEqToLaPgVqqcqqsd9RdFAcZtVnJLRfD6jGemfXdzqBDU72nrhWgn8j1RvndJsiwYst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UncqjpZ7q3KZMa9167sTaqkkzX53ixxnEk8WbwpyUD2tn5H1UcZdXv8EjZL1Vbxtori6ZbW46W9JRv6eb6BF5m2",
  "key1": "2PPrs1rjmWSWaV8KLHJoBQ3EbuYhK1avq9EcCAk5exvLwg7TwHTrcLm1Fhe8X8DpjLmwsdeyKeuRv7uAeg6Yfj9u",
  "key2": "4yKvzcJ9HAxNgiGobbztKmUJ5EBaMDi2JFNq5qP5UUyQWXWEcJwo9uZuvt9pzhVMU5GM5Y4FtHs59eDPzETb2qSn",
  "key3": "2Zp6XpTAKrvmu3A1mXhekRDgMaEcBYkKKhcUB4Jt9MZ44HcvXCMkxbsMtsQq8sZBj1XKsvYQQ2keYpG4ofZBRBMW",
  "key4": "4qaE7unT7pmc5TeVji4e39Lfnb7M4a5BeYnVqrEDSTY5oFpr1wqgrhXPLwf2YEGwDsmiwAViPNYuBB5h8xAXb5eL",
  "key5": "sdJAnu28Y92B5cMMk4dcRHgbNpk89cVrRgHYBbN2PbAUqpKoMrgYFcCTwqcacqUXgBBm7pAs5mepBS2hYoEEY6s",
  "key6": "hpmpnaJeEJkEJUbMv4i8xtY1ZB1d2192Vj7YEevv9k4nbYdFAbVbzn4rYJdkeM9AyUXn5qL2ZuW8PW5sZkpVuyz",
  "key7": "58YRJBZcduo5FBu3kgC5414Co7p545XsUjtHYCUZqTxGKerrt1LChkCn7p7x3mZWf1GVC8BmjnJ5kDstPCKEjK52",
  "key8": "2B7S1PCwhs43Cpv3KPmjFkAh1LwCDitbuFke5CvFQ18cxYYkmQds6X76CYRtVFAg2STMUAQJ5KGekJayeLAsDHXM",
  "key9": "3mpDGwooihP2sqyAykDDnAv5oYVHyvZ79uz8LZyeyqhzduNC9e3j1CePZk5DEd9yY6KTMjKyeYZ24dCdQxrW1ifk",
  "key10": "4v5tbUqT3t57ATm7bqLzba8iC53ayc8sifxtmYnhbJaYJj7vMWkSWw6CaRkz53PjC93uPhjE1AjooFNfYMNpsanY",
  "key11": "VYaKvhjZmrc3bNsCipANBndc2552K1DRcKqL1gGuamjGgDXFDrVQWrhu5AxQY8YwEvjeB3qNJ3h5h71Lbea1wnm",
  "key12": "5XMDvJtvgkS861wg6mkDotfeuZ4DdwLH5KVeNRoQ4Xc6LpdZnkzXSWLzTxco4XHdwZmrC4gA84tGiZehJKrXoK8p",
  "key13": "298Vab7DSpVx48NqWBsoALtTXhMFAPgcjJvu1PJVAfuGwxsmy4gziKQn7Q2esQx3YePUA51ZcosT5ZM4wZyLG1R8",
  "key14": "3hpvfgZs9MUgBpAdHf8rNEohWwq6bb1UKj8WuC4qJzysyP8FDgidwYZ9yDe7CbncYkEJAKijmzRC5MskSbRs6CE4",
  "key15": "49w9W2hDj9bjNAVNVYwzh4N5bvgUUyJoW8v86boqe8eqXYZGzJztFAyD994UJwhHLguCf89KXpZJ1FdfCk85khtF",
  "key16": "2enVLMSZ6m9wHKN3NJ5qphRhSgWW48WnLx7pLciC1Cea2Jk3Y9zUnHHtGSdBWCKPRAVa2W7tKSV3ty1AHRgtuhwQ",
  "key17": "5UZ9jMScUJsoN8U9vGmbtmQ23SbqFu69gtMFWvoiu6twPVewAghWTmwa4KcXNG3yFL4GtyewQrKLehemyv3PPCzC",
  "key18": "2UfcTv8Ub6k5gtYqSvuLY1yLkJZ4yWkUFbebBZ5gzq942t2bMuMRKXFeBeBzFQqrJq2JSJfNxrTY2z2BUyE9NrAs",
  "key19": "LLmTy87dvzJMoUNssLukfuAE8ziquqqSLAvs7Bo1ZaRp6A9UAg1iQtgXtZ8bT9qMmGzq8GP5ofhFqKRHu27RAB5",
  "key20": "sVv9n489PoCAUjwUAGAcEq5JRFysgUhhTY4HiTqewLXnLXevwNTJFUKzgdkwLtQjGUSHTxh9rL4oazaBZyLDN6Y",
  "key21": "3eN6hwUG2LA7n64rw91KJxyw5vLVZvPfHKPC21F9LHAUZW9j9vXH1pFK6AAXamc4KQPTQosh39HvXq8JYUYLHbEs",
  "key22": "5nbzEVVNHZ6ntT9kuZkWRbGnnBZpJ5SGtVxkyLkA2retM4YwYXTKvwgmiQk6SLWQRYJh7XfwMcAxmqKXw2QLbX19",
  "key23": "3g2fptamq6ERj3VwpGSYAS5xDz1kpdKWYaNe2zmJ98fbGoq9eDCvcYEUYVui7mPXTeCHdaKku4ZvYyWLoxs4SjrC",
  "key24": "494xaBDp9TM6SEM87nYQELMmiV9njRtdNwgHiHTNsR9CGRBZFpL6mEpJB8qCsLwNJhxeATJY2uXydDp6LVZYPLqf",
  "key25": "4uuD79sThANrnkDt28LmL7r3h8HL83kv6189bS2Vor98wqNeTa536gduJLTPRJrooEXrX8P2zVmY2JkYSmCFV5KP"
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
