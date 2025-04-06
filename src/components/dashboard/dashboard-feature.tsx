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
    "3m8jdEKrzCz9vbrPuLrUXBmmDVHuE6VAtEY2C7HeWU5csikSWjoQcs1Jiuunvx2zDrnrWKMz5eXWuzZ7nWumRvmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63vLAfPh49eKYpev2T452YDg7Jk2AdKEbz52sEPTAz9TXcWqZ7F42D7fJwLpmukMiuVwfHsepaarj7By6aMJ1NEQ",
  "key1": "9JyFFs9MW2txBjBkuAtzDXy4JK68biJ8AW1YtdrsCu4NgDXnrRQe3NMMMiR9CqHXaTsGuvcjV6a6KpKAYdxsDb4",
  "key2": "vFpjgjF2KA7GvuFUaB6kb4zAxJZ22JFtqri3SNGZuxyiuorkNLAWTQHcSmKGzP7Ti75SvHhBcBj219kkeN31dkv",
  "key3": "42hY8Un3vDYb6cE2sGdyD1ZRjmVzbjD9fqtbpwcH3jADBLQhetPXubozpkcTZpYYDmENRpzdkWWKM7JhBpZ1t7N4",
  "key4": "ABcoBDkoYujMW8E3M8cVwPysF8uxndsnXQHHu3TAbV8qReVe29KYE9CBCL8tQjkX72ZmMsRR9F12P3oszTVMLye",
  "key5": "6ZM9JRejEaVCvKQATRjRufx4kMCx8HG854SK1Smk9AhY4AZMjz1bnn1dxvSHhjcizAnJqUM2FsxqYfkX3qLGdMh",
  "key6": "wgbMoNVgdm43bKj1TWEERq7CRepuGN7QKQefVCJF2fKSTZagXBL5bxWLSoEG9uidL98P3KpowpL4rUTJwfqAZxq",
  "key7": "4u1ZX7JuMB359SWYzKyiPL4JVYU6XKvCZLxQart24jczF61qje9tLVfPiBKEe99cU36AKVVXYwQyhpSgv97Vzykz",
  "key8": "3dEzM3rXnLkNxdH9Vuw5H7PR6DyWf32xvRrQ1zv1M8oTeKwDwP9HuCuYcr1Eh8FhGsnUCvztwzuv6qxMT3ncRY8G",
  "key9": "Z5graY2ZkA5N4HoGCwW7mt7Un8YkswWtcbSb7j8wR3CN1XczCphfPYPffay8ctwPDtFNYMERwgiSgrUxih9B4DB",
  "key10": "5BjZ2mYDmbLbWzAAHffs8FCw6CofBMNnqKDhxmp8rg5S4zsKnrfYHh4yjWfa7SxnATocTHoheAeZp2gBocioxf1s",
  "key11": "4JsjKHnmgPmW21Mzm4uitW6hhpLRHFtutfRf1rLMcmkgjdzXVhXnjCAqPtwUVwfWBujDFALrLh7Uvg2aBUkmwuHH",
  "key12": "4J3wSFnNLKB2RxPjFjVMaBhr8koyjRav7fz3e7dnoWhpSSrJabqaWL3AiaXcZEHsADRPcNFEAziSSeiJPfnQPnk8",
  "key13": "32JbVsGntp9qjdo2FL6rhFq6UwuuDRmgFmJEis116NRUEmpoXcfejKLU5dGyL4ZWmfa9SJtHZcXvfGSo79mbex5s",
  "key14": "2WJMYw4vJVzPHiiQnzykqvsFmdsrwexL5gcboAuFqyvwr9qoeuxa88aC4bATV7dZfFjqrixx9JiHshVt4dZPLkD5",
  "key15": "4zfo1k2nnRnWpo6JruRcCzQUM7Rn23N2xqyTCURS5Y5Sov6ZLo3LX4fbRMJRws78C7BZQNQkkDRkkbcbJNn4hnxg",
  "key16": "V4o4qQwfhrw71EtU7qrKfZfFArNHxGyrfxRRPgyKxi7FCp5GvWBNdQw6ghdiuJYpv1DjpgQbjVWyQVFn6n7kv62",
  "key17": "623pnofa7tueXrJ2k7uzcY5Kuddqn2Tn5YirBmb1HNpMEPTZr3tYSmjieBdpv1mnVnkyMeDktZsqfYkbRSz6vKkY",
  "key18": "Xm1gXT51VS99SnDsfaWEc9s4rQXmzTM8xxmbuGEDNnmRuDpum6yuWVRZeWCUmAFK7aXvA4rMjsm5Sg5eqSSzjqR",
  "key19": "3VqB4mgLecDH9Q8SNyoCQgA7wLRQDreCAaMJNoWN8T9Dd9kMEx3kMHyQ4CUbfwZSk6SspF5PqF8Pw7RjK9jGGidk",
  "key20": "556EdKhcpoNV7dRQZCBTpYRTgwzP7towuN6ygFEHNWJAi3eHf7s1QUfXdHWwKDAyJwCqB1ZkizfSoyNNoEu7ng1H",
  "key21": "tdmKMHjVkriKnXCQEmAMa3QfBL3Brt2KvzZfR8cUqx88uVQbhoJU3Z4DASsEXWwmrrWNeQ8ZoH7iNALDh9hENHp",
  "key22": "5PkJXdnnxJnfU85HWMkBm3rQS4bBqsEi7cdf96dYk81HcrwdZrtTF3nyQnoHjBDr6NMsftJtKi5yauLTdWkZ67tF",
  "key23": "4514RwXrTqYXMKuUys9xCZTs9vxAZRB6FqHvv6k9uXtMDjKupNxDvAXXTMSwXmJd2diXPMcys5qJsxaQ2zNvescD",
  "key24": "3rhrZbSv87N7Xb2dP2rNp1YPi9VsLKxpK8EyLkyC4MTRFqbmQJryvQ7WPdfDf1PgNhVYmzYFJLz65PJUw6dspDDa",
  "key25": "RYaUHtoyEZmTjrVNH1k2SiMAqqskT3SRjPytPAoPLR5bq76bYxVqVj2Yz3SGLqCUPXwVrGgYTkSEe1kb4ZNwrh1",
  "key26": "2QjHpb1emc7A3nPL7zUDJuPkiPugxa6rnh2vcdtN2AWb6qMGn5dqV9q4rEuzqhw8CQHvVqJZLyG2MfQ4KLJtNcXR",
  "key27": "3uwsygCXXtQCw8ejr96F2ZXZMrZEg65CuHL6JtwKnSFq9tz9bZhDM2Bedh5x2knXA4o2BdLA7zL7cpv9BGewqDAr",
  "key28": "4r3tXzhHxwEH6vFVTugukastZ7vLztFUSS78CiBDpYr2yDYtAVhuEWMecFXgcMrYj1xsYd2dkH3Ksc3U4je6WBvj",
  "key29": "suyq8D4GjLDssCTT8Gt7ML5fSQfaBGUMokoSYwV8EwvA2mPmF3bDmzeZhrU1uSd7gPWyV8vQBv8oa4HQdW9JwNe",
  "key30": "4UYpo1KpYFSTmrK33Ews29GMMijVwbt4gsMMpGa8qLUgwsoiPMMsR15rErsxxUBkjwHBpar16Qd4PQAyprw8x9zE",
  "key31": "3Fgw33f9ZNDFG36zHTKWZUtLtCHqy8UxToE4vsz6dBX3PPGREs4JLUC5SDBR2D3VjnaMVW2JotmXAYZimLDPk2ig"
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
