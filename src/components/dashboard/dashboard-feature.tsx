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
    "51d1NmqQQDgWBcT6xtoiBbKdXUF7qPC3mGnSdDowRk9yozzBxuuzxUUdrmBP8o5asxrHVV3PEbaVfB6VQyBs9HKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nwFBDtJTuMBKpqr1UbqFbZt17SybaTXcVDMeuMHnpZC7ao5HNoemC7AAFGFFdNh3dqoKSqBcohuik9bmaPTfxi6",
  "key1": "3TVXdGiKy64ACSvpsxt9MTV7brXYtv3fVLcSSbBXf7sN247X9L7uAm5QDxnRJf1AY9fhdV72Brd54iFX5WGTXGM",
  "key2": "3WjNUdM5HpTkaNDx3GJut7yda3B1NWnnK7qxJauwamCFpJG32V8D5fS98cdoskpE8tJBe8BFnobW4xCDxWwSF9Cj",
  "key3": "2aUh8FzcFvHvUA6vMxQjup86rdkifDWSx8biXpumf6UCWxDKTP6Sx4b1LHz8rAmJbaspTgb2T6dx8ePreJbqhpPQ",
  "key4": "5wq3NU6wFeGakNGXEX7bYcSh9kEkNWYm25QdD5wu9SNoybHEYCesyXQoGtZfWMjVcpSrRfTqGC1s7eYkiL8tnv75",
  "key5": "2Qn56d8X84Wp6zTBreuew4FiM3DbMx3cu8VJoxU9vZyLkyUDCafXbWuTTJwJPjppKmoTviZ8xvcsVSWvtoDAtdHj",
  "key6": "63SGKM65rgUgvujB5NcBLm9vh8MPnburcR6a9kuHjGCigMti4jQMxqWQdLxw8Vq9FVEzfnmAdUPkbGRhyFLxHYL4",
  "key7": "bbjfozDM6DHQxDbgz7RyuvPDUs715V6AYQZzZMfQdsSkVbrxNPMchoCU26VbrvdJ3ZnYRkGy2feN46gqHhhJrV3",
  "key8": "3vXogsg8wCnfzMF2ixfMm3HwMTAyFKrPp11GbMt9jPEeKn8YhiKGLyQRZ177PivmGrSs8vwYFhKmNmkRYZuxP2S9",
  "key9": "2jaP9bJt6out21Nk5MnqiuirTm7ZWpRqYJvwr6LGP9sxcf4mhRoPFkkDKF7HzbvqEC4Y4kGqaFW1wpvqdVzBAdjC",
  "key10": "5tFfVjnpqh5shrjqM5KYd4dxjzNGWN24XQMndxXgJW6vRmtaXpK4ctSQd8DreTUgN42BMpL4a5cQkZuBfccNbPA8",
  "key11": "292dbbC8Zjdu4ptc9f5ZBbaXcym96xgNv81GitDgdUyzYLPonAguNQjTmi8jjLkyVm12PRvB12JmCPRLhzMR6cMZ",
  "key12": "5NXcPbDf9ReovkRko5w8rCNTVwcWRFkRQBpJsCRZjvUorQWQ6mvxDcn7C7rdPfYv6N4qiwZ2hXWXvXb4ZgUSZAUZ",
  "key13": "2f6ZtUrM31bMdzWMAw3cXk2U21s7DPdu55rzYcZPa2R2vSteW365XLCVnXMEy6gh73FajEoMqBRsRjc7c2kaeVgr",
  "key14": "d7HzjYTkHquSJhzaNxGwJU7TrcZ22JyoNZRx8TMZZySCuGzfk22mFujouP1pC6Vmv1fCJjWexZBamWBrrCfkDhR",
  "key15": "5LXPGohY7NgDFAVJSmsNw7F3Wb2Px8nPsveKpsr3DkjGDyXCcNeRi5VWdikqLFRC21hhxz9HcUGdmREFpADAVRHL",
  "key16": "3hQ4V2rwRBHvbdJGS7NiBsc33LszJHq85y4tqFD88FohsjGnmZJFUYFqyDvZyCmfLjqXMmDfUWYDRy3nxPHZMNdB",
  "key17": "4AhNv7vrSsSH8Y1NN1bFsWGkWndfdNeR2Yvmt8e7DAsZr566SuK3JvYZj2r3NCxRcgXHkEbFYjVoYJ3BTCHrxg3w",
  "key18": "4MR7UV2f9pa9KiVzj2Rys6mTkSXqaZiy6tbAht5DKYaMfecC3dMyRduRp142QJonkZr2BsPGF4sPz6Yp2zB6gX9o",
  "key19": "3s3wN6kDQAULmznLJ5dyu8C8vmYMhoSTpkCNtR2boiCn1aajdFg5PSordRwQJonP3b3qidkwqvywAjhJt3irmHvz",
  "key20": "VyU4mouPJ7eoCp1MUfwKfs8pcjc8TRmYh8wJzJxiK6wfVLQSJ9T6R769YCjRDcbGxrcEUCmQBHeh2p2XQsu2Bcz",
  "key21": "5ceDXLLaBrqa9P6XsvxwX6KDWX7s6jwTBbdxWKrtVW4eSUJ4R9Si7YnS9A3CzJViBqugQCMBK272adqTXi2JY3q7",
  "key22": "2LukeLXk8xqQLj62ks3FeKBN2Rh3jaBGJrkQWTcZpdJfzQVZ7FhiCJemh8CBT3FKqSHzqtmvgT7EXDJNhfxQtAqM",
  "key23": "4fH1Zd5s3mFyZXYCx4VdWvpegZwoqwh8CRHViHFUCkqb976DENegPAqWh5FDhrw64qKwJp6LqrmNrXnSAY44h9Tn",
  "key24": "x3QyfnGdyPjMoJNMAfuz27hHRcZGdVKWLbGnaJjFnPfcsVrj79WvUbt9Qi9fkG4Nzts9DutL2XZBjEi9xUbYuzC",
  "key25": "rshRnUoNJXe2K4aKot9H2WtLEP8Q821R7WS6BNX2HApDf4xjzH4iGaCv8EJowohKzLTyhSwnVGDGF8us7RRfPK5",
  "key26": "3T3di7wGALdDKbwBr2YmeUune1Wc3DWPZdNHdXyvnP9Zp3qp3FLwhLuP7U26mru14vE28MQLEZ1ZwrEMpET1JtJq",
  "key27": "4WJRFMoB1t4RuBiQsxHKpSTu4R69eBzD9TrhHWrtrMWwLUb8qV98W62zScbVFvbfXCyFRaCgdvy4GsZKV2uBkRwP",
  "key28": "4FfoRL15E4V2nFZAgxUtPwzVZ3twUFgtdck8j7Cipv4HhfqdbaVnU3KVpR3iawCpJM3AJ7NZ8BX8WGFrTtG9fXAY"
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
