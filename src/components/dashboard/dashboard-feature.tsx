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
    "4QoEJMxNdbU1QynrktwNN3ocirAkEdrQ4LRVYTpYHjeePABrnsh5XRyDwyGkMefTiXypKgpcKEaZZXmJXXAkT5Nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abkzqhDUAwdrkKKn657Mp4TnQjqDSpmhs4JQDgQQHk4jHTNabARqD2Dn72zRZtQJXX84H1ajLpX8VQuCNASivV3",
  "key1": "52wheTdLE6Ba2EgoZmvh5GtfzWUUN5tEeuR9fu5NdqXguw1Qgr6XWGKHShS11bjB5BYxuxcSGsRsMnma5cHEuuzM",
  "key2": "53vyeDBnAotfAQyWaWC6B8qvkd5SGgzeoBPP3TceEbSKM2LtUYQkZHX1BChnKcaL4e4cKcoL9Yjf8ZHytA1TytcS",
  "key3": "4K3RqYQxdVKkU3stqoSFT9jKqYNGwiXeQCLGHXuPtdm7sTmNCfkBzbnt7hSfN22nyazYJpxRPVR9wdkuLLwPnvpn",
  "key4": "51VjWJ9nncd4VfCC8qVk3j4Z8HKQeiFFJoFaZ6yrAWNJDcgi8Bj2o65z48LsY1TjfE84icejfC9sf9YxHABF8Hfi",
  "key5": "4ndpsN8Z4wQ8NLGVvF3CKrg4jNND2s5Kg3d38HLRmm3quoBoLqfzCgtJQ4FUSKDG7bWLfrZVxofmzQCvGQYk5K8C",
  "key6": "5Sy3wwQHEegvBvJT2oJq5FKKb4oaAkpFMGSdAwfCHgZTRU6KEo5jnDFqKatjfteY5XkJvsVPxzwjpPJUWLcYG83t",
  "key7": "45yKa99tnDqQS1fyPEnBgkXsWE9Re9XqPNFRgPz3sWUBh3TytJVqc9nqKnpLQVT6RrnwWxjbvDDKeESohXFEh2mA",
  "key8": "5FXPHaPj1LghDuRmSkvttatx1DjVt6fTi7iTTeFkMN4FmHYRKHez5xJk5kdzDrhDJ1Y38Jk9bDhy9nNmU5kjtnSt",
  "key9": "5Gx4zaBZwbH8JXNCrHxbvJYyDmP3N4FCW1ygEgbq8R8rx6RiwAT1BnXJSkXuKmUTw5qbA6R2pL222C51B72ornPy",
  "key10": "2n6xQ5C5t1zezNnPNNGnAWeqYK816AYud7Rk4KadbAa8qdmc54yxLGLH2TCvu7bAC1AEY1Zn2FtezTEquCoQJRwR",
  "key11": "2rkFtUJAi6o48Kcivr7GTuiREC4J9R9DuYR3ZTe6Y7mnAD6DZVV6wHP26MKXWFMzwH3qEeFe1QXmGBiDWqTxEZBr",
  "key12": "2em4Zce39abQTVWaPVfvCJo67dKWK22TsgMQzt4G28yNGSAbNNfk9CDLPu7YkwbnsFD5rWsHmb7tCBcoLny9ew8i",
  "key13": "52RZ57FsDXNfhmfhpGWZGKrLSEgAYofXpBfyg7nqurVDSkWsNT8hzcfjm8FbxgfLUS3yoer1FFyvygR9y2rAQfwF",
  "key14": "3v2dn2HtdZQU3BAbQphr2rK63Q1r3CBgBhr3VVZVkkFiMKtMUrhRwC1AUqoKK3yChxGeHZUU9ewHzGfZXkETpJAd",
  "key15": "5uJSX1ASo6rMCVDPbSPKPF6tTiK6BX1JYrsW6tak33VoXsuQUx4i9F7CFSGbqKfAWuVbNGDYfcMRrpwihsS8p66s",
  "key16": "2G3LUmkNhNghdDEiBfUwbjsV8c9jUMMgobMxmd5RfnEoDnhc6CpEHsKVtySTStiks37PetjitR3zFhdLgGom5Xea",
  "key17": "53VrXHo42oDduMdNBrygCgGtSHGEVs9xt148dRGcDMtVVKUEzEbW7fZwqmgGweJF7DNMC3Qvs8fTQ5GQnDPJHEai",
  "key18": "3A8VWQ5v2hxsWESwPD6YUK6wSjzmH1BkzzkCCSF2oaWd1g36fqX8vS3goVzZZF3C2nL9XT8427Q5dLYQEuDvq7ev",
  "key19": "4FysMU3AzyYgDXj5vUfCnbYioAe6zGgSKQd2LYnNRP7a5yqsuDsnQAZMejqviTjjD77ukkQjSMJEn7p3aPqrr89T",
  "key20": "3k9NWv33MqkBMyq7KxqV5aUXofiwRXm7VWMzmx7K3xRurQXBsqt8GKRrF24uCoMZfWxs99TGAbUzmJ3ordDVKWEU",
  "key21": "2MYF1sfUNqaTtpLhQPjXpfHpUrTYtKwVrCL5BzWs3zJiMV2CxrWKccQaykYcajXyCJwNj7QAWU2RugJaCgnRn1ZU",
  "key22": "58saxZXCnookHHacMXwtHeWyepLtXTw578jAmi71nwr18WFzWEEUeXJcW6aestC4YyxtXuU73c6ETmpCQErK2JWJ",
  "key23": "HGqsqVSRPY5LWKRyvpNJAFyjuZDDBrp1Jw56man15iujNEZtK1TL6zMaKGEGBZdbagLj7CvL6uQ6ZdqhQD3Jt6c",
  "key24": "4cCgAcSrAyzHThmm8mJ6pvJBHxsGyyiY8m9YZPzxZ3tBQMGmsVQUZHN1FRMfrpzwR39NSr4rvqMQaHfj8iQLrT6B",
  "key25": "2uTM5qLL7GK2ZPaW8zh7G1mUNGs8LwCvMiUu664SsCr6zrpiQi2HdRB7aAc7wcMstk7X4G4K1MeYEJKHN3HtkA2q",
  "key26": "61mYGRyWUcSE6di39u6quMZ6fmT8vv2mCV9GQACZM2VXM6kUbGicG9oFq2Nogoa1255Y1dHyQmuk2Zm1nNrWqnqX",
  "key27": "4hypQJqRhS6aFxVR5D99Mbd59JEqwzs4rbseZwLTobMnRJTa6dVtMw3Nmr4Ny3jFn9mWL411oq1H2mrLTXGdGWSn",
  "key28": "51g6TR6zkMiMB52Ae524kQiFQwEM6Gjxg8isD4xdXEWSvCTii8L3asz5V9Rk26FgeEYjACpDwkrrkapQQQXeAhdp",
  "key29": "9VrfYvLngiCMNPCu259rw8e4xqhwzxFUY7isUfWHg8eeKzUbqyMVEBkKNY5fwP6s386Yva3G1w5czLMVy2qSuhr",
  "key30": "5Q1kx32qYAtKesnH7KsRRdAhxNdnqoTAkF4kt4qknj6Jo7V3VebMmdUrUZU9uUKYhzKs9q4bZuHainrBkRby8yAC",
  "key31": "2F76dzQZcrqeMBE64viZLNCJpcDd7iYB6JG7QL3nabLbxFkvVx78xsouiCwtbANKZPCqcCz4TNuEw94sVWiX6Myj",
  "key32": "4MocWegF5Bx2hVGzwkJNdTrXUngsiywJkUvpK228jRK8ouL3dQu631hPC8UPkH59jqbFMJkMdQ7UBvn9MBqSdAu6",
  "key33": "3okGZ2xaDWvSK2tjta15spumivofbJnTUfLk1Kb5hYUpMDmNkhsmog6Li2aNZUjqPh7K7va3kUPcuskteaSXXmYC",
  "key34": "M8PS856FHAjzoBmFbnXD7bZGnuL1YTUF4wS7Z4y4NXeEEE3AZxFwmSxT2LH2YsKsevtbvDghRabMaFS8E7o1rPn",
  "key35": "65Lgs9Wy5v9MrhC9Z4nJX6u1Zb1CFLe5ks7t9YCr4C5soZmdGyyX4N9z7eDGZLLDz65moaMk7yn8bdJenAZxP598",
  "key36": "2LAsGfaiehBYogvtwSbTMQq4pqvmSx5Fsi6gZjtggWiak1jy97en2xGc6ps9A8qQPbWcpJpyEJdXVgVX4y3XD1v7",
  "key37": "32fhcjYrXKQk74mrdgMrTT3MUpJjpE7VzBEkaBMcAGhUtQQxCuikcef4TJpybF3xxprDjWU8sKA6hFRHnqrAks6x",
  "key38": "bCpAdEAiRWmiXE48CBWZUBcZhP6LdpA5v7bWLqDrejzXRMZwMneFz7q6dVdZwzddbar4R2pXYXpqZM4EcVrECxh",
  "key39": "4ZAjW1DCT51i7bFfv89y4UZ6UyddVFNK4y8N2QfG6TeiN8j4m8YoypBvenSmQD2NADv1wLdZcgjLuXokmk4mpwng",
  "key40": "5QX8N55tyYn8xQYttNJCWgH7dcLfui8Q5kjah7bDcsnFu5SbFj8okomXQBoRAyVGffaLfits2hj9CwsFao6eVywy",
  "key41": "37a41Cmz5dzFYGyo3SPFjwUBn1AVfZmQXjN6Mi7iNEJEYWJABthqzTk2S67KH4igQgs9oqWZd51nUfBBBnYvJb5w",
  "key42": "2JHJFbHkjKhNWucG7B7V83un5xjQ4jxPLp8JyKrmJqaBvrexa5YAG94cThqLD3GDoL6CfbxSmwNoq1EBvS2hsuKe",
  "key43": "4sRzyaRSf6Waz5bR5WPtPDkvYUCNK2ZzDHUQ5c9CC6A3aLYh95vtyzWp9kXRHHxNZAJKzQJjCuF5wPovynikBmvx",
  "key44": "4g2zow9dgFjeNArY9K4142wZxwpmBMn5Sgeoe82AosCtTs5AW116YGXmxwZmiLmvUgYuT3Ym4ygNtQqdFDUWeC3N",
  "key45": "13WdqqJzq37EGry4RPSQnFf6kEkF85Foq5WwZV7GKeNb5AWJLr7TXrZwWiAztAM7MEiMBB6XQVEpKBSPfXQvQjX",
  "key46": "2YxLhUbUCdc496mJV6enjgErYoqLNJ3sGTGFqYVZxYCdoz3VHPCsZEbH4uagRT5JRQdH4xNFyJ7DA47JojUKrYoX",
  "key47": "3FD6iDJ5aNCpBeQ4EtkU2jxbKYsPuN1G6aLnHJnRwJ7SNdESbUfFSLJhZKxRyGAB9Dt8nB5H7Aw6AdNMioBvraar",
  "key48": "3eJXJuMczZ2hnVVadKvWJKu99aKPurYGjwbfdgcJcv6x8xePmHsFxVebQNxq9J5tGBfgMbpkdGTEZxoQvUSTxQbG",
  "key49": "2NbSTTgMQ3bb3smk2AEGvrZspfdMJxWs3EivAWSdM81aB3wcjfSGYFjo82BN5mqrQApcWtD1oh78TwsSaeL1XmNq"
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
