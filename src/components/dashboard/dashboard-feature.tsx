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
    "42TTzsZHC1H5wXEL7tq3rDqgDc8SVfHYfTcLWfbTn49qAcYGQuj4sfp1y3LMkHwG8R4HiKJnXRXiHvJvz4erNvcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fFY9HUZofRqCW5gHfoAQayswaB57zUASNga4MgNvfcU7D8F8uNF8cbRkTVn44xbXXGk4KLBSDhe6kW3faMk7JBn",
  "key1": "4U1HsqwuMGp4W4muT5hLX8tdeH8gbki9gHbR1p5rNh1RqPgsJQKPJV9WW68K7dRPd3ZDkiVsWMQHhNZr2CPwYCqY",
  "key2": "2fKXrJjggLYhfDFgnPsJZ4r6zJgyVnTD7mQieKqMYFBtqzd4RhCnGuk3ih9VN9Pc6aWLKGhr4woizw3Vbreoib9x",
  "key3": "2Y4vkwv5ymDCT1JRbcW1fZPmyJpk2tijbwo1pi2iH3scA8tu8YXUzKxhRW8mhufedcPuDnqkFNwuyLjcSKxocLHP",
  "key4": "4CYKCVGk95xK3RkVFd4N95gDcXeaE1jCF2CrgK2JKwTPyZxsQT2DLKaHz8YSsKTVHC4avYGGwdtUyVjzPcQDNC3E",
  "key5": "4wgsvxoGZdHyBcoPHBDr6b4Kiwtg3ePxHNo1cyUSkcD4NbWEDBfHWXo9Bwy6sX1GR1KQ4i9NZFsQMZ5chRMRFLyS",
  "key6": "5Ah6M2vbzETVpaWeEHFajLBhkFqKUBhNmbyqjwZPZkbC7waoPozuBf5miqpXw6wVWxrDYAG2hRS1G9jiE2M3UN84",
  "key7": "3xMEiu61AKzbccvwWTKgcthon3tF1YFAZcgRsHRrMb8ZRhLKDuxwp5Ci47KwvVogBD4ULxyzVtfeqifVUcmSSLrT",
  "key8": "3TKVANNvdM9McBXMDQMiszoK2iaTeWuX7MdsLUKLF1qfgRtjq8o52Zm1AvJcpf5LtqdeZdhzCi4y3athsrYDAFNs",
  "key9": "47qy8XyBJ8tPwYuiXxMxDZupkWWPxGQP22XyQQxycueeRJzkLqXwvdu7nqFt5BrNxkjWF7w1ZiYWxTEernbrhLcK",
  "key10": "2EwqrWkRzbEoqFyphrt5PVrdGsRzE5H9Zc1mF3oRngDguBoYipxqHpWyQFXFh3yKAM5oDDP15hXHY2tyVPYZGLMZ",
  "key11": "2x8if2UqS5wzpPjkZeS5JxaqrqWQsxvGfb5ScuAma3Hwdu6LfkDbjk61W9BEq3LTrmhujnoDGAwMNSwcHYEwzEUL",
  "key12": "AkoqAzjwcmxc9gZLe5v2XYQTumGcuBw2SKSHyjfRFmg8jWm2SM1KU9yBJfsqGgtBR8GYjsNcxrViqsf2FDWV5i4",
  "key13": "5VUasBEmyT24eASY8PANkSuvmD369xUMAPGYC9LrWWwHdcoMfm1PgdQj9JNQ8pCJmYwCQGJv3E5ML2FscBUuyJsd",
  "key14": "VifSZxoiGXoV4pg2HMk3xAUfsUdSw92hYuTmZd5mPtFVEqS7Vm84tKThCqJivsrQSy1WC7uqH68rbNUjiah2j76",
  "key15": "2QeRYDb9voYaoh3Wv2Z6YCjPAenBvfbUGfAgxMHm43VvhhBwYnxWhjagYLTHqMjokSMqCawSoHDnb9j7dNcJ4eRB",
  "key16": "4rJ17pBnNCje9Z9fbjs7yYhAkfF9H3U4RQkVgUHaDy5UPprwuU2wxVPyydXuVWV1xUbufyjx26ffaUsdNnvaPb7U",
  "key17": "2SesGq7QAJzyCuLciJEqkkny7huwHSdeCAwepXtMi6F6RnyQjxWw8wwLttmUzadXNd1D6uHRdS2CvLNL32qp4PJU",
  "key18": "65TXrnRR2ygubfJckxRU7TQ3W72hRJDCUZD1Q8Xuzix6Ch4pApaWEFLXZgh859njjLzMTkBUnNFkmDkmhmmNELwo",
  "key19": "5e8gfMNBZ8TXQDPAtFHNkpcLZQhF7wbpdrbSAyvVC1xUf73xaU53KMyDcmZdLEGqyqztHABZvRc5U4vD18vYHtKg",
  "key20": "5We3JgvWRatFbQJ6Du2nfvGVcWh5Q3EGXvEerE3Xkz9zCKwtaXcFqX5ju4WCfzrZcWZwTXDdUUdvY8KtA6XAQDrV",
  "key21": "2ThF7RaxqhePzNMjDShKnZeCTAHLx6yFvYq9LbQrdFoYBVa5s5ceEomLuCHpqMP2fB8qvxqhmxF6nRqLMch5UvHQ",
  "key22": "3fbqch7SP63r69DyhN4T5fQ1tbTP4MvPue7uqcyWMdjvMLbfkGn35DBBkgkTLcDCoixRVdyFdB7nUHHb3mXQZ76b",
  "key23": "4UWjAtgd4cwUeBAkGR4EueY8XNgmhbgityUXCPcFhHuzb2tvngEopbxBtXj8f2TmL9KiV9Wfs2rFCkZxZuR4QPYo",
  "key24": "HFqTkVue7EiryZJUYxWcRjmpZK2GUrLtUQwkjKqe7EkNRLHQwgD86DeBnizc2Bicn5kxwaScuaygvEij38YaNYV",
  "key25": "D5H7puK9oxTqH5BcsiKu7QniYBLG5qFSmEgAxF6RLyGfHjLKu4DvY7fPX8cBCWH8b6imANpjMounsVWywGtND51",
  "key26": "2M7gBQTDtRHK7mFDMLsc9xiuaQLLDPADkENcTQvPEtnHJVrRdo2fUJP1ZqDoVHnKcPwynNjQgVK5aR7N6ZeGnwtf"
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
