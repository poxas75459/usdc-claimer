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
    "3VMjwAEUcSznHeHFPDDuGhA935LHFi4WTLb1mU2kJQVVnASESBmkg5ALQ6NUB7pjnvpn8TvnfXxGbvwdPSUqbsrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eWWcjg9WtSLhT2D1mWeWQyd7rg273pyrCuawn4ccxEvj5Gb44WxMT6dCAVsPYTpfcZU8uA5fsqn9Qatdjr2NT9q",
  "key1": "2Kq5HcLifdcDa9ZNr13ozyiz358F6RhHgpq9Hcw6EMXsLGE1HVJGDfAyCaiuV2W5KmJVqAGdEtZg88cNCKwpM4WM",
  "key2": "4TMtqr1XRhzGMbFu1rhDwQVuHLNjtwkfguAaAW3VtaJXAPa5oNkTw9CCTA4gYNCgnSwvqS6K4bBct8MeYraTNVj1",
  "key3": "rcGbKwfwqfdQPpHjvfVCu2pBz8HtqCXBHpHDHfFNBrCpiU4oLKvPL6c3FhXFPoqMtp4YjFxt8KfwvMsCue67ZpG",
  "key4": "4tT74sY37Qx7KBEwWYtXPqfcTG4zvAg61VBEQHWYiUHTGmUepnhUs97TKJFCAqoG7kmcuKpQP3ftcVFLD4i9E4Po",
  "key5": "4jH9NkisrfMUCdGAgiJjrcYiDeE7VKTVrSLi8kgrDVZFc4imXkZ5BzXZVACik6sy9WAENRDehiTZbXwCQ69a8Xnv",
  "key6": "tD9Lj5p66SsEfvWDSn4eocQt671uZmdvzR5gBVuVLzjHWjU6wN4H4XQ7r2qGfHh9BhD83AxiQZjtBiW4FSWcin8",
  "key7": "4iLYWqFVEP7UJbd7wLMF2RE9FnKmTgueJjgkdenxC4ELYtHf579JACSWh9aGrFGfkeHbo27ELkA8c6QqaAyCeBAc",
  "key8": "36uyPkBCk8WxgoGXoe6fLJMhM2vaXpaqDTAxpv5pPaN1B2ro2YznMxq9kUhB53PA6ep9tjzZqw163jo3uUTkew6P",
  "key9": "5F8LayEqNZp6V7HhdsLuikEs4axbP9LGafyWEj3hDshYZppCVkfj3MxZ5ZsJxXnoYG5nw3PvtoasGKHragcTCXUZ",
  "key10": "4eiD8sQxanp1nrE1pFK9NUihPPxgheBp7zJap7xb2MRwE9tSLsbWxdVyyK6GLaVaKp1s5FMfbRQ9yY96pwBjsAom",
  "key11": "U6LVfW3rA644nYq1z7cPQwUb7CwVkPu2RZ9myDrdq2hvo6WRfJNLwrhK1WakSgmU4CYx95kpsgBaTwpBVh9ZXqH",
  "key12": "5UC1h6P5v94dUirxfG8dpx1GgopCuKcvrzWY3KtEyivNCGQym7zhucAqftriygBnYVyutcwuamYq8JBNEZwkK8tz",
  "key13": "5tnET9kt5XMePQaErmLQSekSyg7rYrgHUvrWFqMKuntVG97TPBdhtFrs7K6mo1i7QEqMBXmSNJ7vzVH671j7H8Xy",
  "key14": "5r6mMULwo84zzSboY5G6xdD7aDSLacbZBdFe6mjCMNHavqaSHkEfJLz7Xk5fNqx291KeKxARPNTR21oySHswGxaY",
  "key15": "2rVt3WonGswzK4ihvLtd9rQkM4dwCV7grwGCQqCv9e7CPfsvtfdDagLXhba9RzShjAdx2tb4HKcWnAiXDzy5REsF",
  "key16": "2iP54Bx2ijqodVpHRi5tb12DTvKxfe3M7nSBQYBBm55aUToVje5gTuibToCuHmhWSKXnkszdgJKxxbgnnjhXUYTV",
  "key17": "5FH5f4cdcCM8gBC2URteEcAFwGDJE9GojUG9BHGghMC82od9WCBhVkD3FZW3fyw6Hrjmer823VxYx6e4Jfm8g9dU",
  "key18": "4CdUgjXbdW1iGeDBdT6gqXQar5764rmAxz1C3FZRiArchCXUqXvf144Gh5ueGa3djbjRqJwV19ESm6AZCRMTMvPy",
  "key19": "rgCCLxqZd3p47p6SN1oFy8rWnE86DD6UWcf3bZgQhEG1kXSk75d93Eay5hFRAUbYCFkna1QZeMmfB63CmRQ9V2A",
  "key20": "23s7dKiGPh8wtS4rdxpNbQ6hk3XVCUhT1dzca3P7cmT1rv35Frra2K7pKCAGmntKQk7b8WuxB68XZfnMVCxAfnsc",
  "key21": "33fXAQo3XNDWStmTfsPLugx7dRPNx6HJmxtjUL6HVZ4XBjHRtpJ11GJQRAm2HSYkvDVihUXtgxF3ohAogWfTAD3Q",
  "key22": "3MwvnfQkz1gJMnJ2vHjAQFD15gsdcxTWb9EAhUazGw1cPWiv1Df7mCf9K1AtJAgs5B8mog9Mnu7SZVy6Djy8NB2y",
  "key23": "2BBJ4nes4bxvBkXaaBSzV3ecPkniorpGPunaBAMf7JY26sRvJjqMY3ouVHWesvZ2aoJxCYyn6B1fUMjP9aNbNA7Q",
  "key24": "YTrzdbr8ff9jAtZNBtqRXUdJXuavv8dFgruT57csFohVFiYghfbhV3cuGcaFe8TWsxBzFQWtSgKha1mctaVsWQo",
  "key25": "3K6BbTsSryTtmjpkbP67r2GSy8Djr5SjAd998K846ufiuCGeC9UsTTWjZMPyRbLhDtS2ja7nkiHDGScs2pMQMAQb"
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
