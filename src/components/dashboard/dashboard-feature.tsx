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
    "5nwpVU1yJqGCssXPzrfA9KebW5D4QMaToKHubt9ByEAN288xEYkrQnVsYsdvxon3snNEykMsuRqrJHWiPWmscTrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2suHLbapKFy6VX6j5VxqAvMNa4yNh51YBAJAigfYFcH9nukU81V5THP4WFxvCJM9GkXwMRJqyq8BdMy4J4EGioVq",
  "key1": "3KoZjc667Diyf84oghNNUJbkQc7yRnjCi4YcGG485gRvHBnSSUzGF9PCf5FNGsjxbKWMFHq3kN8m2DLBGvD158Yr",
  "key2": "2eFRqJTga79yL3qaYuXMVJGGJg8XWcU54w34y6QDaoTxq2ysHTLDNiaaMJ9aqXbFJuSojYpMt2HBdcMPgFJGWwwS",
  "key3": "5754dzb63DQGbXx3vCZ4dr7iVBua51eHtXB2yaWmgFjGTTM76hntAfjM8kQnswzTYXpQuYtcN2UvMAALyonMMRih",
  "key4": "2eM44W7VyqVSq6VDpUxCTKgGFHsfZZxpugsEh2yqJUdScq6gvpp1VNcUpPi4pWKGghJXkKN1Jo1WHinuePxZi8J8",
  "key5": "59kr1Z6JnP6aPRoMPgB7HRVJbAfxGbwuY5cXvYuXWa5zXhWtRHs1VCVvs1FW5EZ7VXa495GrhKNTwX1vvigq55Dc",
  "key6": "3dU4fUGZMSZNNZNYJz2qaDXvCCwMf9HZ6NC5SrMHWjMWtTikTgJxuD2PqghKpUE61JZB3wY3EZQuf9Z4wzhsrAAH",
  "key7": "5Jgv9ZJWccdUZyXFgh8GcAyqvJjSKZjbkQ8aKqUDJWUqq8jJPV5SNwgYXsQm4mvvae8KhgTnHmNpokP4pZghqBtN",
  "key8": "4LM49t5DDQDrMae5HZLoKkDPiBbvWHmjf7M7AGWEXXYg4thNnnTvTQeq3GwawXdVB2Kx4P6BausFp6DYCPpuyMv",
  "key9": "3hkbCytHoih73qwFqFmt67DqDTbZGozNVKRo7dtfETbErim9GnWeE4myZ7NhmUUdJtmU89X6BfyiHesH4AMQU4Qy",
  "key10": "5UUM7vv6WHvzkiCuaRq5NNSqZ3NMs4vbk9WowC2TZ3JrJoeeAuVsBWsy7zKjddTQuK6CuqNJSho6YoQqKBgk9cVi",
  "key11": "2vYCC8pE9WjjeGohpmo9mS2EyKKYNbCQRGnCqqxDv1e2cccW4D9G1B4EBibRbzGvJVPPQSVS5qqvWPWHzvPumpXG",
  "key12": "2UZ5e73t9SMTvrVKvBpTZqWSiFRQoFNpu8P5JMnBgoxNb8R3GWHa2hiYRNfSxMrBsB2hYZC1q51jntLrXXpYJWhy",
  "key13": "4dy2J5mcVrLR8ALeuCZJe1xDm4vvGvbexbs6QnzZv7wcFzB9kGCNLn8irg5ATSkCeUhsQe2veJHB4pnkvMShF9R2",
  "key14": "61BbsLAnsEwFSodmAQoGdmirPJ7QeZZcUmA3oadPUPAJLfhzAa8bLgsi2NsVgR7Di1DKTBMt1NAnHUDkNB5ndHca",
  "key15": "2PYKBVygku3tfHN56ZGcB6sjug62pETsRUJR4uz989RCXNpLxCQCffc8wMLr6PAMYFSWrCBYKWBXd4Kotqfq3rbX",
  "key16": "4rQMogimZYWevbB4ZBvnNvQkJbAHH95WhqvJMdSGF7DevomzGhdMAJcWfChpVjY8nAFyGjm24LTzM7gXkcaihEGd",
  "key17": "2rCLJqaeYhy165bSJPnDFYVocALMpoZpDPmpTszp4px4C8ukrifsfJRaLDuZoskZZSe6CtBAFR73jQcqSCTyrhhn",
  "key18": "5Tjk6Vz8UJzQ1NqsQ5DTYKwnX92nuypvzy15dveaDx5Td74hZSLYqWE1yVCkLEETovLJbk9gkoKTS3nzA5QApTVL",
  "key19": "2zYD9FA78MY6rKKMeCbjT54UeRTbuTcrAMAXbNcaLAoxctiNAyj4Hk6o6oTVDEhzSTwYDemQ26faMz6kJ7kS498v",
  "key20": "3iDn7xA8DHwEi77rq4pndTve82prRK4RMt8XuNre3XPJYVQC3cqep2jLk97b7TktSAMJZKy7kzU4ov75Bgn9d4Wy",
  "key21": "4ESsKd4ZNUogcLHHMujnrRqByTWCLPXYkZSutH4mwtNUHoKC6TrqMYdNRXAdBHnUCiKcm2G9GQAjYXN1SnFeu8ZA",
  "key22": "2uFyEVzHGCbJNre1hy9erQKVBUwd5xKbygZ4QXrsa2z4fDqjb8bRoyFLgS16vakSqxPUE6wZ6iYv2QtCXcjKkv7i",
  "key23": "jwUDDz3dMoaX7UghT44XL4N1JZGgjy9Yj5N561eiikyG7LU6EcAdRRBEufmuPa4A8kwGpzTU5KPa1df8DmTLyeR",
  "key24": "3rNdhmJT9LHGT3LRfenEUv7BEsANyybFVsYbD8DkSQmjvGKcxT8BQqQXHYbMaeunDhcNwNmkMf6uqXzXxSmVovSg",
  "key25": "2Rx6jq1Y7je2nB4Wmh9DmbRNnzf3XwFxE6JyK4jLNkiY8TaUykdkxCxqHRUKm9GWgFBe1CGVzFtc9LH3zGa8C3Q2",
  "key26": "31RVySHWnaZGm5wu9RTU7BMPDf9D2YzXYpo1KoJPDkgxpbWCZEsSyJ6FXiK5Zo2pFC5jv4bmyiAS2ttqbgRdZBhA",
  "key27": "3KBHEDS4X5JTVM4Jvb4X5ofNpunUvZ9PrgQjLPkGNuEH9Y2Eiw8a3yV7s1MY5EnTm3KJLJaCbST9d72vCzPJ2am4",
  "key28": "2PSmhNYX8i4gKc2Wfkv6o4xZSp229LnadAVqNF7uXh6AeTNM4cbxdjdqVT3DwhTbbjvWWfKoH18JVXQxiLxHPBjb",
  "key29": "3XEYxguBeSxLEB4pvx5WdBmjF8KdGrZKkVwxV7XZADQD9HQFdpLHwknAVPp1C1RkJgHYHMUNYo3AxYHwtU7rWW8C",
  "key30": "NwmbC19Vnoy2mungcRxHsXgnHwDFYJZZzt38bKnfNajkBUMLaL1V5hJbSsWZpu66iRPkFZ9JJtqSygipVQYr9Gf",
  "key31": "gzgmSycK7YWuSsdEQNDtHEtfzpX1EEFniHcqKHqoo8ZEmnjw2tUwNNuEW6KejJ89MdqKdKqmqqvSujjBtWwLUKx",
  "key32": "4twyz8SMzaxiHppNDtYC5ZBnKGw3dnZdtCxm1AiMydf9G2tW37dom4b1t5mD96UWTf6RhELgLcUXSjTYzgA8cCVJ",
  "key33": "3UKE51aCzyFu1sAVEFoHgj7uhFbhSGjAzKK1TCWeNjtEeLNhhfkcV4FCe7D5mZDcKnbYgeprfDpN3rjHbWLPuge5",
  "key34": "5qg381rZ8qgHTLLQcg9yxrvS8LB6WcxXKCuFHnWkmaqSCwsX1eC5m9c94kAAb6rtK9vhJaGPwN3DVkbDx5tDnVn6",
  "key35": "2RH9788sSpEg5Z3Xs4DSK56jHQW2DWFrKxXWcq1JGxjW93LQcsPrhamqt1YAkUHQUT2gjkR89Kp8G3v9NSzXNxdY",
  "key36": "3dt9V4rx6xHEfdfuFqKbWcX6EEmYHjF8rpTuihCxdcskGoPziUcq3ipydz88GCjLvaG8gHYvBZabrUr6nS6dGLD6",
  "key37": "3bT9V6dF1nLR2JKeBzANqdj7XjevL67mscRYkeukN8dps1rbFEj6EtRWxCL27MkbLUov5FAAeY8525e2RbBrioAo",
  "key38": "5RKTkdCXASg3wE7JvQb1pNoaHr1Jien9pNADvmbXpu18hG6bPWjjRzSstDk3oAJLAq7Mt2rJc4aFKKnFCKUseMgy",
  "key39": "5Qi5Hz9hoawdPR8bwXJv7BRM3Xy6sefHnWQb4BB8cQkXWPcC4b8TiYvQ99XLJtCLRtynurYwyc8QRpRqZmJTuKCo",
  "key40": "3WkkTNoCLPdEswBwUVRJabaDmUsuBvP9BdQbsd5zGfJCnD4uDNpKyM7KsAaiV51v6G8Vd5DKjBwXBevpxHy5oamd",
  "key41": "5tJx3qYoPDrbR5qXnrmZAg2bhA4aAPSTeWQRV6BsVcjPZiDcW2wVneSXRVip4mCwQCJfG9MCAZvERu2y1MkRBu1F",
  "key42": "5bmHU5HmopaHnp4PTAhNgSqe2CDqomhvjjYaq9c1oHhP913K5vLEEyzwXELgRYJQ6h4ck8bULK83Q2EZBqLY6iPq",
  "key43": "jhQkxq82wtg6vJij68ZJe239z9wCto7rQHuhvmwDh1FBk67QGP26VbxH2Pee5E2z2ZT3TiMABS7zRLgXFVBndYA",
  "key44": "3WyBSMrggG1GAJhMhXN2yiUFhCC8VwJGAU8CToeWMmwvSZSuGW4S2RbzwDnbJ27FS88psMdtVXc6e4k64GAnzdxb",
  "key45": "4HN4YGn3FRx73Ps3GgEWE9Ko3Z7ac7x97nyvBwDs7qMz4cERQvwgJvycpzRHRYh8D5RkXDx3A2Vpm8r1Bgkt2CY4"
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
