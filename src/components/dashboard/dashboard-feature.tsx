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
    "5CcEkCW8vLV75zW2WMjpQ3YS9Q1GxRRzzqcGgig6bDkQ4E2ayEPiMCBpYCwNjPbVUkXzSsePwgDSCr3LWJCz3E3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2weVRbT2ZKE3rrVSiLgraEKax5R6TAp2P6CHovxvuaSEN3YNS2XyqEzjMfVNm3KgEma94pRTopPGVt7CfDCYvSbA",
  "key1": "3A1u9wZAyiRc23cf6fBagLEAfG9bNDQp95n7mFR2upBEX46cZKQqNdmN3Afuqe5emdG6347SSui5FGXa1Qr5FvYC",
  "key2": "eR78WXAA27Lv5QhU7Zv6LCfMjV7PySRb8i5HafZHufNdwKkZXGBgqCBbg5zydkT1URM81dBK8G4QACpjYgj8GuR",
  "key3": "4fDe4EFkpdmNDFynFacySTGW6XRSSDVWW3GFCXJMPQNnEcuMXHwUgGBiUixCYSYAbRUxsY8ftbavp8w9d39RoFre",
  "key4": "Wrf3qbSXGJDv8iufmr4KQ8HHq5NPFMjesLCNzPLqhzmQu96eoH1bJ5s4sHFYcbRLnSSebyoNkDdLDKxt4DApxs4",
  "key5": "4PRnfoN1XDxWdS4Lk92Q3Nfdw726dWZMTH4UKWUhLSS41mVevkSxz7dKA1n9VDLJEhAGZKjnmjt8NUxAqJPsuJL4",
  "key6": "CAjeWc8iFw48WLT4Te6vvSBVZbRP13g47SLxwtXXbi7VfrLkpDbmCv9DrmYjL4sy1SJnNkh7UQM6T8JMRTkrs1a",
  "key7": "4qHh3YPpsFbVfmpYMfQBHaG45LqE8AS7BU7DX6djfeN22WTUCBDbBAkTRQ77ZbMTRpsX4sdco7WDcjCkQAmPEphD",
  "key8": "51ippT1MsT7fh9H5pPo5P8jiaMewK5BaH2mNmHSMSPogVezg8WfeSZ2Ujjdv3QqGrhpPekesGQrJC5ny9vNVUoaM",
  "key9": "2HDH3GoFthzxWe61qxCGyLovimiDSC5F4Yjp5gTusiwWqWARSuMTUR478KZ7JiG1txyKkycs1wfkwWss4b17TKdN",
  "key10": "4hQ2b6hjvsythipFmo4v1gpY32sLjTwz5hDZ6k2w5gwEHXY1SJG31S3o2UoUtvgww6QF1w4W2qFLUj4Wmjbmzxm3",
  "key11": "iCyY5ndaWfLqKQUmweTcRW65W5yKUJFR9wAJCcFUoxt21pwvAnfx4ihgvEXu3ik5L1h4uYKFyuoeYqVeyxYVxri",
  "key12": "2c9hcoviKeMDq8ueTzE4Z8ChJN93zWLRebtQXykfmYKr8hU28hyQCDW9sCEEjrEUnCt1S4EV5iZtCjw2NdBnjk8e",
  "key13": "2Njz8UuHZmaexrXTMvWo1BUdrWFTect6hqT8Aa9FHi2iTnXHAnixDf9yE23XwYcrDYEzPgsLhuKQjHxTk3G32PzY",
  "key14": "4RvzhEpGTKcCiRFBgim8ALeZzMhYXtweUruTSWeqe4Gx2meZhumA7i1F8MkrjGLNEBDWDz7oYWG1aT6Z5tqb47Kp",
  "key15": "2oS8cVGuzgJ3cgdr3sNvBLbQ9F11fKm5vwd5Ec7Yg1qc9uRCV7KGShW5YBRJcYtVNgiSedVoTFDZTyn8MqzBbD8o",
  "key16": "YV7huh9JmZWb8j9xfY3nseKXgdNeJJ68FirL5r43Vxa1cxJPuLxbZPzhGPhgRS5kSj6yKoaFSQP7iT3hkYTsJyU",
  "key17": "4qJkKn96szthCEUvEywbF997PirnmyDN22q7TByT1DtwkojW67EcLNWky3e7zoCYwseRySFoSFM8DYWhdHxkoKHX",
  "key18": "2rQDHkU5dQvZR6zrrDjFPBjpf91224fywvnuXD8kp1hvMWm1qoQoFKLE17dpv9KA48HPuB42ieo54BZYU9BZQLiE",
  "key19": "4RQZD9Xiiv4yTPKA4vPhVHg5WSMtXN9GPBjrUspXhiRqUWUeB36DDbkA51wc9YamUgcSWAyzShhgKhn165iJa457",
  "key20": "2v8qJm2onqr3rZCQn8LvSjYWDiZfBFHWAXaTGkEKMzKrHxj7JfQ1641JwG4D4JMyR1HEEg8uJEGQvWf4RpZovUE3",
  "key21": "4Z8K3J1szxa4aTkyeo5o26FuBVep3Q8xygdscdMr3rAoLUze1zXzZDmEYPqJAZMRDqXVbwQHHXv5v3EsDU3PouVK",
  "key22": "2bMrNuBtqnbvxWveARvwtm69Z1mfhKqcxbEVpf2yrGBYHB74uvdi93dtzjAUYvUL2zKpPsZPQHwbEe9UD6BXqAoj",
  "key23": "42wj6UhX12zJsRpr37UAy3hAcEtwWeHPA51oWySho9gjA8GaMAAKF9NJv5EyA5a5yeKQjwWy3KavTYUu8mSP4R8x",
  "key24": "6732UEWn9ZSm1N14XooPwoJk38p5aAYYxFA8ukxRL3iTzqfvrXUbXNXttwZZbBpo4aCUDHxZmMJUwSWz3cNJ2Bqf",
  "key25": "3Acuy2APS8hTNFiDNVvuQRpU9V1QQfJ2DDDvw7N1WWToY4BQwgovX13QsPgpauZnw36wweCFQJkEdXcEhRyFUu49",
  "key26": "2K6PZjzApY3gDakNt8Xs4gpSUdEjQtMeQNRs3k85frxno882dSizMc5eQGLci2RSGVxeaP6hD4A5wrNqbuyHhrJC",
  "key27": "2xn247vwZv7juZXM8VvyZopERtT9nF2bALRUEqHLenN4cQB52ALZbhJ2AtwCqsjop751kxkL5LqvGfcpTEGKj7Qm",
  "key28": "2tkJueMLjCc8pPzQP64V5TUVaHqwquQKUHRwnm4aCezQBQroEfWkNSCBRrJWFfH1HAGw38L5nF1EoZXaXLc92TXJ",
  "key29": "38HfdjQT1pjjiJmnVW24iMjXf5vK6iNTHcd4T9gZg2UkME83udnr4GWrFcGdXb3UCM4ZyedkN7xzhLvG7gzAGmHc",
  "key30": "Fk8gAoDSYTaZrhJgpSHgZaoyersFaqi5juYNQpJBkEZt8Qq4X1J5xcd1PuqKoB6WvF236xwi2nLbUvWBnpig9T7",
  "key31": "3KUTGSLJMXWt7Qkb52LEAyueCGa5FNzQp5z7FSZ8Ka8orMm5bkf9u8xb1jQKnpn3YYGPrqvYFN3Co7BxwUkaKVi5"
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
