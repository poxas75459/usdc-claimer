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
    "2Gn9jmS5ptGVRPSit1TdFqCQkV2oAWs8okJjyLejRRdbnJh6WtYqVQEgXyAPhvYc98dBXfQxxh4PoMNdjqLrqT4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KVD2AT6Uw2g4vB4FNSSZZo15Fadd66Wox8gri3znZXRzFrz6tMZJTvRqqTjtX4k4HLdzEgYMUSyfpebiWdPSg17",
  "key1": "2jiBrSMd9jnCGueD6a3GS8WSW7iL2L3Wg7m58G128f6y48XqhXqG6vSGQ4ZxPWLQQeeSvUJjeguYCbxKi29WfZEk",
  "key2": "3ad3twN9PmtKGUPiP8AST4KnqjWpHEM6V79JBHisiQDvrRRoWteTNwMGhh2EYwaW6yJ6A9zQQjdBKEoebtunRUJd",
  "key3": "4Pcg9LSZivTHFBvcytsBbLZ6kpUTq2fM3GBDzntQyULygMbrcjzd92rT2rRXfKQwexzDKYWry9ebiZTyfaJfT5f4",
  "key4": "5bUDG4LAfpFW8tyjAN1S7gYtEkJMYzrtbtfVCkF9tAG6TQw96cc2n7TzTLcJKGfiNtNPmckHVkyLWo7us6GWntcu",
  "key5": "5HyvavLpecYhqi4coM9m3nYEq9LEQLsGAic7APUXxSodpjRc1UW9qp8MnTxEeK8UeUEnVJvZ6bfYezhMJCrpNKFo",
  "key6": "4BUYmXfeuSd3eac8EBJFhLR6iFrVx11Yytk9UpTz8hYBzg3YH4PyhNpVe8euBXNvpDEPkLJxujBx77bbRbGHcuyk",
  "key7": "1GGnj5nZs9caF57vcWV9PvyrhhVL2zmYacGwbC86Xs1RWCksZg1eV7PWwKcPLvC5QgMUXjLbEA1fhbaRNZhm4nq",
  "key8": "61nuCzv9N3vqPW7zSig5e5MpBAZ8bjRGpNFx5BF3q756tvT6VKTYw6WB6mvnpgfpV9GbZEKHq1ngjMiUX1divrw2",
  "key9": "2TQ959BcW98Lqtd21MFHMF749UREzun9H8rpbn6X6mxTakJ2yvqV6HyPWALEZh65hdHvBd9zN5BxWGEnN9u86QUW",
  "key10": "2DfJAhjCuPCRHFoa9y3pB95wJswvvPFEihLqiWbiBJWjEdzVXPQxih389NpBqc8CrEc3pppeFwSyNsz6XqBPneAL",
  "key11": "4Ed7KvSzmMq4FJnMnh8ZrbfwuJZSkBD2sUfxY5pQYg5WBHLzNUwPSVgNHXDHf2SKan4xBMBD5ddJ7fauB2p51Jk8",
  "key12": "E2Ne8ziJfHQGWv3HLPAw8MnpvajTF16P91iHEEKCqoccVrchVx9XgMhWKh1kKivt3wekbj9SaZ6WtFSxRFyJeqv",
  "key13": "5QWPh8hG5FoSuWkK84S2GnJehgc6oikFF8sZKMxxP8jYbAzdjsHnjNwpWXb8uMN6jJXin7SrMyGJ5Wk7EUsRHnzE",
  "key14": "4SGf9CKy8JqrDh6KCfUxWGfnf4Yw5xacguYT1f2Zra2zQAsvrvsDQBURxNz1gsrs8icgQaLhVz3XH5pQLSevcEkr",
  "key15": "3usDSZHFnK9WUdA7ArKCxxoczT6FBop2G9WmVNaAoYVD1eGZSCxE9dvRtFt5NpeUR7spuSgVMrQpCHdvEyzzrD2B",
  "key16": "5S8Bg6xXXiH9bkT3gkPRbsPBPmEjT4wgsYgw9q63LCcvB7CbkLpRNikrD7pSS7kukwgnqzPfEmvzq6wZgqD6c9JX",
  "key17": "49RbNMjwUBWtGftB8GECt1ySUnXURh327BmDUvKAHaDFg8ZAv2cFGc9zNW4kAuHNf2TdGQMG1kV1TLRXQQAj9qgT",
  "key18": "AVXqW9LrCGsc9gKVPmKyM3JXsLWEzH37vTZ4nJ5A5hJMXG358KsHxCqYBjLMTaUD14Vsqx1fujt8CGymQKJK3vT",
  "key19": "4M5GU9gHMpeNhTMz2b3yiFqhZLPqRcHb3Xdd1SAQdeVfALEyojZkwT7H1BQLYhzWYGr8ZTPiaQaMAZtNbdiBPZwA",
  "key20": "3vifxfqFYCVGMpPUzq8Yr3g75oyrBy4i14SGuAgDpAqgW1Ssx2aemFjP7YejMFyhtttXEnWgPRxcq67DztZtKg2Y",
  "key21": "5uVdH5JL7LF9BzfBTFWgUH9DLHwCDEtPUWfkKWA2ShX2wofoJwhJaWJa67dZPuCriCaeimtyQR2ifdjKkQEhHJ97",
  "key22": "5E3hJfrTyKUGxXEQPdkzoQ9gtebRWLtnG2sBjUo6Vp1hJG54qT3pWuZCMfo98V8ccUBmkqLLrSwhqBYpGpLkzGDu",
  "key23": "3E1wVFYBrL3ofFTJQ18YiCRPBnH2QmbyrqtzdMZteFQHnpQUAQFnPUa7gKbMLpxxseWBMVVE2w8vgLXNFcU1Um1v",
  "key24": "2L843XF15BCgDuerfqjRC2FCLhWXpu1PupYAuBngYCoPq6vRV4ccyCJNcpBkHg7SSJuUysQDJQdoQfp8d5wDAUFv",
  "key25": "5Cr4zHczczgrW8W4j8sXeCahqhjYEKyrCZJ9Rtt2woK5oB14NZZAdgC97Jgpi9mtQ3zgTG6ccC6Xsf94ddB2v97",
  "key26": "5AXKj62mgtY8w15N8JairCupPwErTsGWYc5Fk75ADdagLM8f9TySJuQzS7MbDmDP61hQPkUBCizQA28Csyy9rUvm"
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
