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
    "2Hdd4LyhV8KryUyzR6SsoZYw9MoC8FLP9ayhb3hsvNYiTKyqH92h6jrNf4kcTwePBooRRdE9Zc1vhkvWwT7mNhWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V8QmRcujHb3NzfHrV6M7ELoaq4jabfpy4UEgzpowemtw22e2p2xsfuRbV46RfT2aArFmuioMM5aEBkQQPJCHLRQ",
  "key1": "UaJHAqnwcrTd1Hzh5NHej8B2eTPLMew4raiVQULnSAsML3VMk3h3bX3Ra5bKufruFLTxDPHzJG2gRuQkaxC231U",
  "key2": "5hTd6ZdmfUWEJ2AAgKPREsvQeS83KLuZ84BrEbnMeR2AUERmge8hJD3Y5Kd7jrSo1yZcjneeMq8ueDEGUcBHnxES",
  "key3": "5x4Rgqs1yDDUUE8c2UJTzUpwEXbgbpUxF1CL8Z5tyfuRekdnggcwkACq3WixXpoeaKx8RuqvHbyhFQ49BdyfKRQh",
  "key4": "4E2kc1WcGvyDmkJ2cEodw8EAfgy4MTNjKGxJKXkaJRfHEzBNwWw1o1Fu7LgkgtwjFwjF4q2d4RUheBc7eoXvVcca",
  "key5": "2UaGjVmp3GC27QvPbYMxRhcfAvQMhSst6hKJiyf2YF4aLVxcVc1Myb7Gq2eYv2QdWtEqXDNVSTio2JdSJVE8ugEa",
  "key6": "5ctdSw4o1AkenTvNPMtwD8SRrieXSxb1KTkeZf45ip4qyNwPP2Fa3dBFNW5Ta6PBXyVAzCDPsCD6eJQoN5yFRpeT",
  "key7": "5RnAsMApZ8iynqQfCiX7pgnrNXRLtWCXsnf1KF44CcJsFCXFVo3a1YBVdCvqMFwKWfKXxnxHKVoGQoavqwcUgiDE",
  "key8": "JvUWYLJnewgBPmXybmi2XBYwx7gLsKU4rJdBm8GLQ121hzT1ifjUGn3ozfR2RPAyzJWLj9ufyLpNBxx7VEJGW8D",
  "key9": "5BhvAgVYhgGVtFu7JGdTpfKBYMy2PCYWtWZzEFoGTs13KpruQ39wAisjdCXWoRpRUtyTfVQpz3PARak2TMETiYFw",
  "key10": "5PX65bYkN3QAFS2ysFY9nusGBSea2GRVzbh7pmjrrpRRAA1wYm1vkAukHwfQB8N9AQzF6Zssd55LMxbk9YBTgyew",
  "key11": "2Erw6z6FFQEgofnW1i9oyS2McGq94hVsyWSDmerzUP8tMSiUGvqPbUND8KNcLDfVAzFHd8GNkpG3XzbXn6YJLtaF",
  "key12": "3RVbHZXZcibCAnCrcnx3BgysH8AKFBknjpyRBkdM2tnbxAU49MMo6K7ZTSfcxPNjjqqaqZJiYt5kpiHdNeematoY",
  "key13": "2ta1uXNSwoeDF3EKnW9uNPziY9xe8aib73yW7NkhKzVZSxHAeS9ycHyB95WDd1ZBK2PJ9SskJ6oToc2cEfMnJarJ",
  "key14": "4swwtDY4n8XtJ5cMqNrYBSt6Ra17DnNKLdKVFgPhjzLaB936zQjDjkGFPdUKGNCBE7dx57uJeSSLQDsD7JV21ouu",
  "key15": "3HZVy6mFmp5GFThz9LQbJe9VF8s2gs6rK9cq7FczP95hy1hQTgoPUC6kjRjcX8FEHke5V7zn7pdZ3w6VMMfaMvHk",
  "key16": "5zSFGhvfE4gkTazBsUiEKz2TgWyMSxC6DZUNNfjbKiPSSTK9otsRWjxVFdJGcH4H4HtbiK4byJpjQ5JGzJvbxRTh",
  "key17": "2aebcrb8z89MmBefUBpDz2X4RLWrjGuzJPEvLQYjuVrqjHJHGbkihzQyLdowRnnAGEbtV9HqnJvCYuTR1Vmo7WAK",
  "key18": "4V19E2hqVDTRKsRNqZGMPxg89vyacWXmikSsRHdDATpsZPCMLG6QBuDHjqb5CbVmNuTYb8i8Enmpaz6pUsWBi9Ut",
  "key19": "58oPskaWnL6Y5Akpss7tFSuteax57U2Sx8rodnZ7Zh9qVcTnd54kQcahAMAxKgWQQbrS7WYr2hpNgmJddHJW4Krt",
  "key20": "3TLv7BkifmXCF9RY1geusyEZF9u6MK9UjRkUGHh4kTAAxH56XBk29gFvyTceZTMPDHw6HvjeKoUP6KSutp2sCU2e",
  "key21": "Byp8MftUJxDUC8CuJhC72W8CKW9WoyEM9kGKAYZfUyqYbgxE9d7RshFvWQXdNNLcFxwJh8MXgrLwBQ1GTVosYuR",
  "key22": "5sis1KwtqNgvvbQSZLKh28RWo9BnWkGZ684xvEj6kQyYiWQBsjW313U2JNogDRNbodnQTpRFfFDNNxxPYGwGZhV9",
  "key23": "4HssmfwkwPegt5CbgSDTRUgYJneJ8TcZTTiWeSzzesGbnaHxkTT8jCAcHNUwvAPkhkCWKrswVvHFCGpsZ72vXvxX",
  "key24": "XCzi6v3X9eB5aMa5ADuK3ruFcSAH4JHjEArZLDxKZX7Tviu8tb5nmDsuNMjBtn4jtsgBr3DuWEb5RMX3KqwSNXN",
  "key25": "35mifFbRprAHEwkiwfqsYrvcHXpM4VwfbPA9ezZ8kM4bhra9PeZXuzHBUpdizQ28xgtFU15ZAaA2z6zS1R65WGAE"
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
