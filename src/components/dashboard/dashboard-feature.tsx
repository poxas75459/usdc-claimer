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
    "2HkwhmczJMktUr2Ln9EtZvjobsQVsLwBBvB1nME6zUbXzz5gSj1QR8fQAs8wRJ5TMKjfXXg88L4PuJ6GoLKnkLGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XQ6Ufna5uDhygvJ8dc3ziqB7g4ThVxu31UGrgdSd5emZMjFhY5kG5WGkZ5CL2NeSVLBZo6SbVXQL7EoMi4QnHtr",
  "key1": "2siGbmTpr2cEMKKxbyVcykRDiZczYkPqiXsQLC3rhxvSgmuDehpzrvsnk2s79oNLFXLSA1N8om5AqNdDp6qnZjRD",
  "key2": "4ZuMJyQgFKfUHo54b2dDDkXFAT8sZFJ2ULAwHBt1H5wzQdYLEKzsDtuvgwrVLLJQsRscmwnq69zLfhGBQk7PFWEf",
  "key3": "5dNNHQJgZQ4uUjK3uFLNaMoAJoJzPQB43vvCLbJWk1e5TB9FjL59M5bJUhXGYX7A1Jwr9WNKHvnd8eoXs8pLDnJp",
  "key4": "hfy6WBgWDJvU2krVN9DqF7hJMiKWZ4QknFfxPW74nX6tdkxwMydoQhp1eh39bBBCNJMmo6iw6i5ddmy4KiZtJMR",
  "key5": "65ojDzH9UotjRinL9D1bmMpyap5xaCg3vc9nkoTshjG8TyURDEdDoaWza5qUPibwxrdJZGbDUdpPrc6VJZTvd8jw",
  "key6": "MSq1BrQMdRUxsb3QBZSgHuD2ixiTuoEuunW5KYXwuY2FknZy3q8rysiXfCg51GViU6rmakmtJ18kTGFjQQwhSsY",
  "key7": "42A3PxsHRHmjCf2vQSwf6ZV3PSazetVs82Wt2S1jaGS459mJ4oYoCsvv5gPk23MLfK5GZZVNyDjZphCCqsbx1MUX",
  "key8": "5B1UP2xpaq2ZpoMLXK777yK2eHQha4BHsqGteg4h2RUhN7riF7Mn8Nuttrn4mXpEYSCPbTM2m1bgGjCdXp4x6YNc",
  "key9": "3hs5dfNVi5aHnxd1rAVN74N7NDUjPk3jNMqC8gcNUp4s9Ty1M3rbNuqTup7k5rWuEDVZDxmmD3ak7jdWtwaY4tuG",
  "key10": "ThzDrWeSDUax2Kz5N7SDnzLCYX8shNszEEMSc8Sa2Z1FfXe9Fip9ctugRu8W6PeucSzHfXgy7LyHDP9hmvrJrUP",
  "key11": "2xE2dog5Ns1iYND1PNAir5yvVEpRdggdcdpjKuRWFkhJacZcBRyiNBGjw3ixBfAnTB6NNDLGoGrfZCPfVyymgH3T",
  "key12": "5Q4KGjMRX7jh8oziw2kqS7iSXZjiqiHphokJsERJZZ1WVVHh9514zUh7CZsTZ7jUPFozHeefepaaGBupgnpBCjCy",
  "key13": "4V5gbnmLuZvoQHmVPSLjqDE794tcpdFnDLutS5PBVFJLTr8jXkDr8fwj7mdyQib459DcuJyyhEEDiCnki6p8sDuM",
  "key14": "3482vwsVeT3Wgk36w16pqsnMc7m7LUD1jBCWzanpU5xXR4y4fhTJeo2J1rDs33Ag8fjrtBiohXQjA942G6WGoCyU",
  "key15": "5e4j8qYiPq5Bd22yCic5BiHQ1CgaBp6Jqo2z5NXBnLAXuysant6Af8iXMqWiUt6JtmCsekpvbvK2GfwiEFs5cMu9",
  "key16": "4xCSVZXQ7VQpxnqf3SPeWbVJbYFK8iHWJeaMwda5TwxmAiY2dNVJakLvfMWG31AkrZnpQ7FkW68qqWPGYi9sW5cF",
  "key17": "kiYiKuWaok5h8n7QwynGmnkAyD6UgiByeZTJ4CHKjrZjwm4S3aYzEmwtV7riAdt7Ky2zKwLPWP7ezAForgu1vgo",
  "key18": "5KjgS9WmjtAPC7yspFdiXN7i46nrqx9Epw8FurDY93jrzjjitex19uEMPmdDHitbz3dEqk5CiYf9wYzUNghb6b3C",
  "key19": "672rBgg16wh7pUMrKvx3BzTb2M7t3YaRGQziMnsFFbeXs75FeJfAvcYSJJUCxQQjqfpinYtmSGRVVgXND4Kk7Kqx",
  "key20": "3Jy73ML1kPba1AfWYMPdHys2QNpRCfJroGGzfzQSpXmBXWYvERKbrEFXJxKbgCCwYgvXMmCmHuzUnhjohynxXT2w",
  "key21": "3bpxwsYWSZixfaUWBQiktLMfRgj4Jvofgzb9AmugumCi43X5HF2fA6Mn89pwR4LPT4ehwyGUMAPMAffgG6bapUWd",
  "key22": "NSCT7uJ4QhjVoW3fDAr3nDkXAykEbWSxG8HKixPCGMfvDQ6cAwTQ9JzdFzZ1J9ig8FVPmVV2Pt61r7HEAWYYKw4",
  "key23": "21hVUL5CzshvpkUutZXwMYGw6nU9CdXfqfNdJeRq5DXp6dy5H3jt3YxXRwqiSH1bhZp7V6KNLzLm6UgfmgHssDNY",
  "key24": "3t47Br4kYgmy99dDHg7wVz7qzqfs7nPJSB3zJiM9hkEZRw49PRb77oieSGZv7YKedfVrk2b5fY3JWw5NvcR8Vk4G",
  "key25": "5PkXnKwMUECqir1ArjZBPvD1Puzi9HiKUFajFS8hBYeoDXWwTkpu8WLNK6Lo6vEru9ovS7E6kvwLxqt64Z7dvsub",
  "key26": "3vaHj5jJ9kYVdsdGYALG6ANnN4urJH44XGPvjAzwt8Dg9xYYY2sSkBP8T3GCYq3tnpFDiaBYSS8NM4rhUHfysvK6",
  "key27": "36Dw2Mu7J3bMzzgPzGagsj9vPzLDvCaYbUCZUpe7L2gnZ21ivyyRNG9Kn3Aeykzfth6abhyUqnSzxLswFgTnTsC8",
  "key28": "3j3gtUfre6fE7KZh1AK4ACdneBebokmxCpeFNhpXRgWdeBTFbNt3hFyJnFgKEshGBP2WQGWJVQSrXs89678r5aXS",
  "key29": "3a85uzhec6bpZKacsVWTiH9jRzzV7VwdXiirnETaKjxudbji59EPWR8WvwdE6mB2dzRJxETeCou41Qumdde3UnZn",
  "key30": "5NQb96ncexmx8JRrbiviZdyygHkXxYxncEu68u9Pj3Rq5qVJVrviQAMkYyMar3c3jifs2DCEeJmXKCSJHryBSspY",
  "key31": "46JphnRaCwsXuKgAKEx8mUjZxNjYbowVi1dbLXV5NgBaKwGt9LNgLePUS6dTE2YuNd77mSSxjwANz4aiqHGWsU6x",
  "key32": "4efRQq7TsScdywpCNeCRCNs1DwUfdEv1Xuaz3k1x1Ms4qtX4cPXQfw2X4Ws9oHo5GwUP8ckrb7e2acGdMHEd8fwk",
  "key33": "2VugyTKZ5gzKaQqVxf8ePs4JoRLSETWQJwXUiUdWD8uYWKoG5Zvw9JJsAHsjiygLanHEYsNHHTSQ8suYgpJk797w",
  "key34": "7K7nWpPgdf2uvZBdJ1A6rytd2Y2TapKbQQX3QesANhYJW5xgwaxtXQkzFfhg7eUM9pAE6BoHV195jvY1Li3MMUw",
  "key35": "Mtbknu39Ymt7d1fSkEb8rMg9RV1wbgP6mGLYf78wr5Nhd9Hrpy7koVRzRwbK2rePv3JmVErSDf8nibj1ooaRN7a",
  "key36": "36d7qdHxqBgMiJXFYE5vh3CWP8LwWt1e713cQR9D2tYF2Ww9z5ybZ1Nvm2u3s4FtHXp4J7F5mUode414mUbDFfcy",
  "key37": "2fCaCtSUvkwEnJJjdw16bjX6HmNWxyfEibjrpreCpQVqCaerdPzCFGpA6VZ2UuKtjZ14jKtuGLTBieghFz4QJmSy",
  "key38": "3QWkfqJffsaXsT8Bzrh3TGJhH4vb7D58jV18ssoG9VEkm6s2sCBa4hs2fzcSEpozvBzUMtB96Wb1p6BcDfVvdkSg",
  "key39": "LWcC9vtzx1oEfste3xERNCbf6rNC3jdMw2HKc5z9hK8wbGp9ddmyRQYXdoWH2U2BUsk5bmiSTiVvrssqpXxQrhH",
  "key40": "2kPRLzwUDEs8dm2j7AqwJ64DBPFgBURsY3WAmaL2SpidRqLJvPBG7mvxqXtYa4J4XrBHcxSZxRqFq6pbsZDWZmLn",
  "key41": "5QtCpugzXZW3RNbJGLLyWU18b51BWtS4GYFCTFBwuwYhs45UGSEadUPx5AjcVPJS3DBwcj1nmuC5PBpupZvBkug1",
  "key42": "3UEmiDwcBSsRKVeDf9nercUAKJo4eYsn9EKz4H86To3CrxfJ3pnsHPsyCUDa9AKK9vYjnFW8F6G9GhJ2wQmvrvLX"
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
