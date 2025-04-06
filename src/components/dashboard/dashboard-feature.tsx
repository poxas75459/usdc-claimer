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
    "4vT1rXt5d8GH8XGB2dVU3FTPm9sg7TQk5o2AyJh9t1dvYooZpQjBDc4bYT9s9ySPPhxTBmZMQV887EabXrmnDt6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ioFXCvK3R1vJamtvRdju9q78vrtE4A4mfapg8CtqKYmjCozQs5hx7uNSbMERrDH5CdVgosX3BQEAVgQnXvkQi4G",
  "key1": "5uYMn95giXwdhnxYhwJc5hFbZjV3oAdTkWTzXEks8wNPCUMG9Qn3hJTuRKzV7UvaeZzvq2rHe6JMpajUn6BtDNX8",
  "key2": "KtXdX5NXeGibVkLmRays2nprMwrg93QJsEc8zUTRB75AmRFdFXR6PNjQYiEtqJ7K62ceiFzGZvabZPi5JoLgaZF",
  "key3": "5UKcK8zAUrauKP1xcTzVyWJEFpJuxRhNR9Kue4GAmuX3zCxFisiL7TgwcpSJ296zigk8A8DRnDT2yvKXCBjRtpBZ",
  "key4": "5sMCHDxyTkvdb4xtRa1NYE9PMiR2Js6VpuYVWHUcLUVjPSYibokms75sULzVx5iwuWmf3sRRw7ajj6SKHWw4Mu98",
  "key5": "4uxtb6yjLRwWABBV6DrFbLQpwj5qqq2WmQessPXuDBANGRen2JECtFnyr4YbFregmw2B2MR3pocD2SZUqC4wxKhh",
  "key6": "4AGgYYqRm5RhCGFsfDSyuh1Hh9zqR5E8sYeAqwwciU3DciyFCiJSAssbUjU6smjEQMYNqW2iptc81wwrfJw9DQKt",
  "key7": "2TKQiJgygoT5HGiJBVQjS9u1JVeWWx8ZZ4d3PfSyYEkAXtes9VigNK9ddaB3xXEn8TaFkKzW2rUZ9ZkW6FW4SqTy",
  "key8": "rcrBZGeAAQGke3fEw8TRfMZM6CmfFkD1sEDwMos3Df5bMndNKnwNizX4GD5vjkxmJAX5JACUKrxXyzuL9xnTGxg",
  "key9": "4Pe5Tob1fqsiV3cgMkCLbLr6nYt58FCjNSbyNrwA17hqjPftRppiZBQxkpd7cuWMJUNzF9c9D7vnrUX73XQ9jAqt",
  "key10": "3fBvjHXFc9Y5CCvkFQvnFi8ZCSK3qEAVrsWDFn88gWNCcZ4Pqb5J1vM95PtXAh2ZrhCULJDfqPdnJnpZLi41AGzK",
  "key11": "cr3cGaWLUSRjmVcVfoFUJ9RnBNdguwC3A4V3wS1cUeTnAL3VZxKK2eQhdb1iQhDKHH1pWMyghWoJ22fRimTfJ92",
  "key12": "3o4DBw9AZiyZH9VvP6YJeQSqCKYD9UcuYYV6me1b8vZHF8kmzLtCX9CffdJnHWYbRAfuAWq6SgvMjYvSKor7Ryzv",
  "key13": "33c6p7y7H6TJuJvDEqWynPgso35NCLv8euek2xqNSgeSpikF646nasZbEz6LUh9NHueGefRa2eQdcfWeimMjZC7H",
  "key14": "2nbPDdwLVRwcsaZ6NJysCz7ZFg398C4ZaSxRjXY3F4xn4o3ZhSqWzPCmwN84cci7wJzstinorh5hGmdYPodcxYUZ",
  "key15": "5kkdeZ5PkVR6n5tTfqRHxNdMoVmkMZ7HwX2w1cXHfpH4hJJNd79SJyAJbtjkdf48hzbmRTM8e3K7FWRdzuX4Lpw",
  "key16": "5P7L2bA12MVsKCWDk3uv6KEyqj6UrjucpQEuRgxYfc2Y2GktXZhD9yoxi2FxMUQKeCcBA8YBRVYYe94Pr15FLbok",
  "key17": "W2ZXSv4MAmBCHY6MX3Z121i7vDSGUFQh3bdGVYzLt2UfF4CUWa8waqPHm9iow3DNVcqfKuggE25agLJASJjXmpE",
  "key18": "5opu8dGZ5dw2qUDWiocNnBtXqHag9AX5bL49BF97Yq8AuFhPdjyvkvvk92gjgMW8AhgCYCLG8gLMbtYZPj2WHiyX",
  "key19": "21ns2ixB5jiQaNwGJcXEcFguCCDDEV2JspAVHbazswcYsD5WYtLfhJJLfYx1ntoQNqFg3fUERJs4bcLppmRZzS1F",
  "key20": "584bhmvxgBWJipbXB33gU4ZNQLVKRpMHThDeUBykXzgnh7L4ZEzWivdFhDmJ3eWKNxv47PaMfwJR92rVhP9nqYJ6",
  "key21": "M8FdfMrJNPb5cJnmgJ15sMpQmK5WMUvNXQfaxg2SosEvm4va2vYkDiBmPs3FG6c1rRhugmwkmFjTc9jATcX8ZYM",
  "key22": "5MKwbzvTNYGvM4gH9o5ncGrbvSFJFxs8LaD5JxXemVGRbSRaXKWN7CeecZ7PdArJCSDywQG58gZ4fFgQGtYZQDPV",
  "key23": "2xuVYwimHZxfpyN6inDP7AWSRENZUNrwLd8nxxr4HqPhijqWHQz3QpYUwsrsBZ1jsSNcNNExfrx2fcAxVnP3sLtg",
  "key24": "NuQK9T3hD2ibktaNAbpXzziv9sFULmszbtkPHV9ZXMKxEqQC37xt9EVqs6T2YK7EiF99WwzC5UT9dDV6yRvjjAp",
  "key25": "VDNNMVa7N9htfQMPZrevACh1p7LSRSH6tyWqptT6bR11SSViVywHGidkRBee14HNx3DTtXXAG1y67517wJfC1uB",
  "key26": "3zQKr6cRLZabyb6QM3U2HSju61TBfCViPibrZTsN5CZrDC4BXadoZMykYsp9vQAEwUFsFVvXWgxTSfjBqbpo71eW",
  "key27": "2zb3KidmKUYmYpgv5pYkHxGGLFZKtiEyG9NC4PrZHQhUKfkkAk7gP8ZUcgZbpN3irgUTFui7sEsnt3g3N586sQTY",
  "key28": "3h3DvBB2BNRpTqkKeG9BhKzz49vvz2ZrQEJc1hZ7kNzKAG6efrnivt4uCfKdVTiS2Hi8kqhfiWjgFtWJ9WfhYLJ8",
  "key29": "55dF9QqqL9C9511JRx7M2y39AyKgwavC9TUue7ZZf9kJ8PFBdVKA7EYnXHdfh2J8WJiEzWJZukBkdpGGYjejNRQR",
  "key30": "2uSbrG22SBewSMVNiKnKjFVriks2gJeLbMTACdb3osdzfaAMS6rgKDujs6gjEoS3L4KMg5VNLpA7PmdWrjTe8mHT",
  "key31": "58m3Ez3z6uFWbREq4Pi1qhjNwMchNMDBbUQgaDM1g32e4P4CqFyWoP1ZtEQtadwdVrSrtZuW6xrY7kPvfLPh4Kgp",
  "key32": "7yd3QKVTc1GU7Nu6dq13xN7xzJBrhxUXbg3cU9MNMJtTTvtbZftaUnS77tLLJ5a2QZMTVoV3prot9YaY1EyVsjr",
  "key33": "3cLEyVMZj7VweQqv7VN2eSHtM4Hv6xxZjhzVAY4paBzB7rzpHHc654MkXRNEpyLCoiHiWMod5BiAycCXgjNNQ1vg",
  "key34": "4nz2SkiXEd6AEr6QnQfgtgZab7A9xQHJ533s6XrqKtsq7ekTF81a4rAPMgdtVKZNricchHu4BWsArsLqZsYtaQr8",
  "key35": "2Lxj14yLzVaUhmU2BsYeDuV1qiSrJihSwLicAEUtzQLooKJATwrQT2P5rKenTUVetaXkouPFbrqTykqVMhQn6XW5",
  "key36": "2FQxpdXqqyXcDqoCft2A1yEDxEW6bo25cpNc7unU7c9FqyJf7bqMys5cqwMmgdrQzvcJZnu7REjtC2CNDvKbWZPx",
  "key37": "4YC1uNpG25Mv4refzTx36vi7WTQEV7sp1v93NURJj7pVzpvkA8Mo1xk7K4n3Jk4K2ugLxcMSN9TuAKqMWSwFwAw3",
  "key38": "41LvVSnM6CKcXy2dVSAkM21iH8wXr2nUsZbr9c6CWSY9KNXoVwefqZvPG88CjpmNvD7zRr41piKRjF3FUZET9cvi",
  "key39": "3iVrsRoaWc1jC3wFrEZfX7ktuBjSFGfse589EfbwdfFjBmKptMqfutbCYZcqSi813ENL8oMyXzQ9JETbmJx2XE2n",
  "key40": "2ibVYc4VihpzVyQw1NpR4JdwG7thCJQLLpwdnHBe4H9hgMJoWFN3w3ZVvBEcFnYe14pDtT2uwvwFPYVjiEfsC7S5",
  "key41": "5x9FjZq1FaKDiPqLSuAw36ryDuJUWry833gD66PP9cfce99NGPRH6UbQTFsBkAjhN6B58Da89Atjg4xJNR2G3PGx",
  "key42": "E5THfttvANeFMyL7hUj1iH2FHHycSFhgEoGeRu4ezGzsm6RtyiAsGo3BhXvBmmbTWt8PCvDVYMMsgG4d7cyMj1n"
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
