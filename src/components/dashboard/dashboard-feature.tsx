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
    "2hUgSh7ogXvENaNdntJLcinurqSjCfGSzX53J7Abcch2URjB7Rh3KWHqtNwkJc5G5jUyTheLfvZiUrSnvdTBMJZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cCLnkWrZBsAhQWYPAV1ERTf57j7PiG6HD7x2FadZ6FveqVYU79Kwap5722K2xJ45U1JDg9HafzdVd6t67GAsQmp",
  "key1": "kaz3xKPzpVm6YnnhjYEDxMmWwwH4EMAu7x9UdksKFyyLB8LyQbTRSyxbCT87FApg8Nu9Syv3J7uEf1TEnrQTFKc",
  "key2": "3Vh9bXZp6GTrixfGnVzVwDD2WeHnXEtDMRZxGoXwi5H8Z8Wn24YZpPQjBy4fbqoP6NJmB9v12EgdCss7fzx1mvfx",
  "key3": "36ShnZTrzy36fYEoCuB24o7A2y5KxfrWm6xiidbZLrU9DsYr4uzbL7Q52GkheV3AuuKtJTPFPah2yguucEQ8CLGZ",
  "key4": "5Av9iS2j7CaqqwUqiiKK59puSxsEs8LMMPu5VGE4CYWWJDT4qXguZmZiNCXF9MaTVaf2eoaLaVv7U3poGnoMV3qK",
  "key5": "3gqcxxPw52y9EsHWB7shwuojcZYVJTyS8kszjGCDg6QxW688xQBQGvXsvU447k8WxumUKCbjGxf1r2RAQBzbxmWM",
  "key6": "4jbtgFX1z1ozDgJw35PX4Z5KgKnF8bDRKtjKePWv44MCN1aChLTRQrZ5eArNBqfGP1vgwzb7UEX7QutGXKv9ScDX",
  "key7": "5CBzGYW8GMGMoG9YQHiDo8kXEksvTamcvQAjP498yi8knb4ky9F2CnMPWyVbQtP5coFPskuk37LdEcDL6HRsCi8Z",
  "key8": "2oJvqA4Zhiuzfe1CkKg3SxUD4mWhZJyVjhBUKNEHMhupP89znjzZXwuhNnfWxDGS542DfpDD7uw4MyxVFgNzqp5n",
  "key9": "3jdYpEnF8TfcM8JXjoizoMbkpLDJNHwos3wyLTF2B2DXn5fhDX6mWne6ANS72cjxLQ5N8gYqz5XbBMXaLnBj5SVM",
  "key10": "4EaS1jgWLh8sKyY21A922VSQFHmQt8xSSgEBCTBZibgheh1mrkEvTnbGdRPqN1jmWf946hb351dzaV85cRW2WGND",
  "key11": "3Bfw3raa37nWcAxzU6bcz338uGYoarYGZQCiS1i67DzBLzxJP33Ys3Ajd1PnNPeCfCbj3WmBiVaFSnxmbuAZRbk3",
  "key12": "3PaCcrHudUdWeGXvz85cjAfMZXkWSGsJctt2BuggMST3k1vvGy8fzMnk5twA3iYicGjfVPt8uHPpqyG6zXLYjBm1",
  "key13": "314ti9pQ13gSq5gNAh6ZAXExbxqgq8VSXUhheCxDL1rbRn2FGutAFqto3RSbSisD8ru1FYautE8oVtLLoXWMziZC",
  "key14": "3HHBMZKfnQzzSUaC95dJ9s9khioK1XpRM9zuFSF1biRQhbiUsRT1jrTmEaaVY1Hk961rEqcLKySkzimAcfwX9BpX",
  "key15": "4TqcLUnk29eJ4a752hfMmjaF2UaMgCtxfY9rWXu3quDzVrb4B4F9oRJQqBeSh7HojJRquX1hAucQoAThjqVL5E9r",
  "key16": "3unxRkvmVZiWsd9aB77hW4UhHTB1DMHtMDKsYTTEYgp79ox5QbXMVsivRoaVdosVVa1EeRFPfWZUHzwetRdV3gVg",
  "key17": "4jSxwQTYEzZZNJszopZvueWtQ6482GebUXweUfP2eLkyAdMcKCXZUPHfh11mWg4mnG2C17odXN5NxMnXB1xuhhwt",
  "key18": "3JjkU6MbFJ79cxT2pPjVS2AbqCirvZk6tQqfAG9DFpZF9gEFY2JcLdMsmoL43kq94GreTdrs5QLfRrumSqdB6mLY",
  "key19": "4MdXCGgYAwJg3xGAaXzWdEa8kDeCyRnTiv52y68rmsHrU4iH9KekVkTRSZtYfYXc7hjbed8ANx8sBchnzWYSmKqo",
  "key20": "4X9DvibJ1Hmm8rL6HJ7KoCmGTeJLCxiAc3DyWsZLhgP7B1YDkhJ7vw5ygSuobkYK8g39owuCpBrPXoB3PkVE6qTK",
  "key21": "3qHEk7RPhSRi3qtwWjgUPqqJtFLvCahh77poeCRt9Af6MiYfVWcXLKEAtY9JdmDPBBkBUnGRjT68XzEVphZ7xM34",
  "key22": "5yeEYfChKm7tT2iSVpdRYt7LWBuDjQGVcNBXFKJQ1XgXDgttLZc3Rvzqnz2VuPtewuYxVqoT8jPmVYeUFjnm7cMc",
  "key23": "4mL1NmHoM2fW5CswFYh1Gi576oioT4cUWcpiGovLCDLHBZdFGdS1wtXBpVPEi6LuLF6vr3jPoTzEFNpcyezeDk1e",
  "key24": "K9P44K6VRGWAGsYSCHqn9vNzVKzzcPqTCGemYBts8wTdQoyyFHXCEKr8dXgFcxeYBLQUD47RrWYsFgw9pg8vFRK",
  "key25": "3tpmmHFSTGF7etqJrqze7HKTALeRsA6Lxu8iXoLwUSR59jadhZYo6GyyXbs19Ma3ZJp3F5d2APmBqH1ZYCcYqmsb",
  "key26": "3bLMXknUQidrj8W8Rti567H18cqU1QxjWeZ8XqYdos1KyVvyo7KQYsfvxyfN2TeZrqJopU1jFgWGquReinXZ9GAs",
  "key27": "5dEgUxoUd7FrddGy27KU1ZxFVoe5GC3PXcaBk9NBEtH9Ag4dpUKy6VxeV8woLN5Up8kNmJKNJg9cqd7u1FGMqLz",
  "key28": "QZtJwUfKgRnPUYe5obCLc8pLk7MBoTmRPC5auvbLdqP9tDYfx8CCk9CJswkKxqvpL3aZgx3AEFXJwKxPukE52gH",
  "key29": "22BeUYcJ5Mh3uhbSEx7qT2pfxupCGXMChTQsz7YS6RKUGqj6fWMLUHu3g69KqJtPDY9yiLp5X2yvmnpHc7ewR1zs",
  "key30": "qhqLJXXWMNScYBeKkNQGZr7FxRKDs6hHNA2aoS9pgft8okwgCZTmPq33E2vpPhoYCgeKq45BuvbG92dkfb5WntD",
  "key31": "3SwVTckUetZs6FsoxBpCsS35cdAsx2d9zw8X5SVt1eDQJhH6XJT4JXH2ZuZgudnDCoth76o8TwnKaaGVQ1QKHx5C"
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
