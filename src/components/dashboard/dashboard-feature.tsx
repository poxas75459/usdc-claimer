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
    "3QGicJGqmRrShCjKpTgbzN3MUYtvy2uh7frxJuHzt91qANkJL6QqtJBxLMrPkDUTct8231M9WCETmdEKi5AmKjYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38E7LKnPGdBZxxVwEtVAnNptQM7jKYdxWfjpgGC1YZ6gu25uD3GBg3zoSqpzeJKLeviWZuUaFU3Fq2FJ8KFzPAHy",
  "key1": "63T9Ltua4wUztmo27oMgWteQE5tzZZ5GgY2hbviiSHuk5nNjBfR1zDgxiJG4iTm1e5Ae9v9wNGDFeMxxhGmoRVxm",
  "key2": "CAP4VbuL4faEMZz5eTA5m3ugaC8n1yTpY3iJaHRgh2ydxJ5P6EAmtDSpSnEbU5WWtq1RRsr9NnyqXFQN7tuTLbA",
  "key3": "4mUw9FawYKkZaEUQmFJcGvEq5kcuZNuHKEYe4oGcD9qLRpJa45DAfNtueTGTyiDLc7mV6tLBVa6crQzdmhbjkK9J",
  "key4": "4RxCCLhY95knrLsskTZAZdPvJ1rVNBtgtF9gp3TuaxJ4Tf2ykfjTzVm9LD2FTZgS1WGaRnvd7wdRKunKfdUNf1BE",
  "key5": "61jZq9CNutzfF6KZRU3NZVFLEBpUz1tr9UbGAmHjjoG79XT86NPTZ4bycrmVYgg334erMfgnE9E2D4bQTJbv5fFq",
  "key6": "3MQKLKz6LmifqHc8sNP4WfNtXvWXijzyWVppKe2Vnqy3PCLjFTYQqaGcduuPSS4zbeZn5iK5JU1QDKt7jxhAsf8F",
  "key7": "4oh5ng3H2aTva8kGg9vkMTMwPfNVuYLgRPCR7Eye3dc84qAG5saVfUkwyGdAQFKouSSPFHPQZEB2FyGbZqRc9VFG",
  "key8": "2M1pgPYU1vPjSMFyexDSPMaBj9QMqgBXQb85FfwzJWkgN6g49NXqCFefxpk18tBce3xxzbjxUUW8GkPcyvWDGNPL",
  "key9": "cks56JMjGD3ZZnnYoYS5gtR6iVcbY8zSR4oqmSeEQkda7qmTCQ119LH4srJRuLMFkgwVnCucTLjH4SbzXvqDV1b",
  "key10": "42YCDC3RrFvrM7XEUdAxkDcGNmzgntSypZfMaEuE1EAqrJ76Gnmx6uQmp2fkyKwtRQrzRY2kNmNerR7iKYWRmYhc",
  "key11": "43GvgJnjUkSZ1EQyBD77zsciuP6s3yoZnfyuUK39NnAeQzYa4Z2pqz7BogZYyiZWVqrNiAxkC1TUZt98TBikPHJ1",
  "key12": "3ALRZJKVqkHFjTmRTzUG7Nwq49baXEpxQHjDEzWd9UGyvinLwE5C74SfN5Md9zZnDxwJS6oeFYDJmqtt1wiff4GK",
  "key13": "RALb3SWYGsCweGz4BSLf37T9ZMiSkLADw6v5piM4VaAu7H5ddDziGwecuT8zhsN5PSQREhBpV2mTjazbZgspsHr",
  "key14": "4aVsbZdjwEA68skBkv4xjEjbouab9hpcD7pZeHTscbEQ1BefrXuKWMKMbzpx3juv9YHYMKfqkbhqXGKQ2ukKdP52",
  "key15": "2g5BvEL6SYnjwzLV7Pwzvoo7YSssZoEBBKqvjQLr7y8oamWWbGKdBqbaUJR4KX656VsU8PP5S16GuA937RCLB2gR",
  "key16": "2SUKvgwhRU8kjK3n2QBeqxngtwND3U3XQV8fvT2R9uCAbVRd6XBbztth3QVLsibdNQEsFnn3CZUTPHCm174M27hS",
  "key17": "5FYAKWx1VUi8X6M84TPuohcf5TEde3MfZJr9USa6rwxJcfPL9PHh4tS4JRNtgiLMURcJfBg8oQ26vnjv8FkRNUHE",
  "key18": "CSH6ePSYLEvt11aKYmHLh3hL4t4NTuWrJ6AG6RrfqVzXH9NAgM3GmqW1BwkGsZHLbMaTGEBJ8UkPqCBraNp9p2y",
  "key19": "QDYrKLw24RCo2QVyx2JmafxY7sM9VnZTVYEMX95Qz6BQQbrGt2cTq6fV4cQyNAeepc13pWdazsu6Gn1kckWaf5U",
  "key20": "4zHj4vGnVAoSCeWDo8qb1jwrG2WhQeXBBiEPcuRe9vJRE43fxxhvpPEe5hgXr9EK38MrBM4oHEuzRcRQ2hr4uUZc",
  "key21": "cBSNbyhKiHQ9ZR3H9Gtx8vSkc7R35BiWGeT7ZWyXPipSaZNehZpzHdzjSKG6ouJRKneNBVvEEQCp32Qmbhnm61w",
  "key22": "oHvyYJDgeUnRJd8i8ViHrLhPtpeuXBt3VnF39GzLXQ2MNwGdxFthJovWBL7EwebEva1wYKSr8GcUbePuQ6VVjsY",
  "key23": "4KAcTBDSJ3Txda8ZgBctb1MVz8gEwmqG8S8HmiaS87PG85KYVa7frXfSXWn895MK9VXH1EHp6hfAsUUbrH2iFcW7",
  "key24": "4CCExTWLatqXg8UHG4mBfxhoKDLymKUW33xdpnKLXXLcsk63Yw4h6PRrKEELqwUKguuwP47dXHV2mN1bjnKk66Vf",
  "key25": "5LVyJ2oiTnUppUwgcXToZRQY6mFAKdNncJrKXq3wjGqLgG37g2e8r6k74NgZsyzrAXbZKYx3GdxWNJ4jkXbfo6wW",
  "key26": "3XTVuxGwhUznUiMfUHH4DBBVppfRMbzG8p3jJkiNrjmHjCUadNLRbY1ArCowmErH4o4jW7x6HWzVyw3CW2S5RcSe",
  "key27": "2piJBt4bjcz82PZX4Hrj7W4ESRTxP7aAwZCqKPwDxvu7phP4UEqt2SJTKDcaUVokmjiX7sT5R9P4JVCzseMzM2w5",
  "key28": "1CryckK7cpRWZd4KDBoGnHL2gDh12bntzuBKcachqVzVyu4AAC4hy6W4t5XRAkaDPBzg9dR1gKCSZr4UWfUzL4V",
  "key29": "3ZW7Zn6xYmb3d5eS5S8TtFcB5yMRXctoVDZixxsiM1AzYtBDRAiUoijSsYA9cC9Q1avaxLVEeWnMEsAupEx2Zr13",
  "key30": "3iRpLHs2PEV4oBFdkL2ePYDkjPot2XDz51JBxGq718xKuopwNxP46n1VAogugbMofBAS3wRLPKqMo3TCk4WPFfo9",
  "key31": "4pT5kKS7V546tLPDEKjfHN2m5RhpAF2a99mBLTkzaBKqVQRLhbYeFuZLABGvd1RmhZs1FfpPWgaM9ystuLecgBFQ"
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
