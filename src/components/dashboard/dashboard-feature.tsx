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
    "jP2vSfiDCTz5dMVS4ZVpkrGatbs4YEHuq1JcoRcyHMbjR6KyCeXeUCJnschA9b6kaKCaZRoWi4HTs5iMXicmaSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zAqwuohixoiv1xzdJNMMnQtNHJ9Cvua2MFzkzYj8FLNAxr9bCbPMXHZb9wqKgHKz4Tei5FYDYW8ELajkfd3uLZB",
  "key1": "5kidCxKDexfj6EiqpBUcd1jTEeJSZn4UmrSJsKhcosvkAmFhRaYkdojNNfh9GPnmx2WGFPLFbjJgSXRUG3q3ekR9",
  "key2": "uRReFQgdX7udpEpp5kHPVAG89r4n3PpiRxRhTaKjh3niLm4XtZTMAR2zwYp4GSS7zyqu2JWauTcf3SCYeh1a6uu",
  "key3": "5SChQ5f8eQ3LuyHCEBypUVTb9VFhs6pjmNrWQKw5uEaFKnKpzag5hUPozJkUZgjZmgaKy1y1s3oudbes9P214xEo",
  "key4": "46N99d2svuhTkETHLgNntRhpAvRkVTNFobkmCWbwRcrP37QgLWR8P6XX1tkXFyb74u92cvGjPFsqsjDGSNFxap7y",
  "key5": "8syKZJAuYLudx6Szzvn28H1sJ4hNn9N5RCbU31sU5LKwVkrBdcfWRkqXjrnkrmqvtmDE1P5tc8RDZxb3gA6JzUR",
  "key6": "3QNkoavvEbWZNgSZLXBdn6AJR8g5eRMdfyJe1ccHrgzhuoH14c8FLNs5v4pRFewvnjt7U3zhJkwKQQmhYy5kye5A",
  "key7": "2cWEZqVY76Fm4j8X7G7eVs6Axnw7YXAEWUGBi3appiD5Er3NnzGCXDh2QSx9HsTcWuJGZdr5fEPfUpnMMsBLpDVp",
  "key8": "4WpuM3qjctLdex9Vsjr1Uis27KJFmjUyKMAuhpSmsLfj8ycMssGP9yFmMAdbxmCLhEVfzEbq8n9pC2X3dDkQgaHd",
  "key9": "3nFvWZpHzqUqzy8smi9aznohGNqmyuAvW6wPudXGPz8fqVTK6yE11gCcK71qrDxy7v9zfzCMNZsc5CTkJCp31b8P",
  "key10": "5oyZctwkCqM5EVbHc8LXHZWCSx2g3xMy5d89LDrr8ih9JYMp1tuDrVPieH3csFAwyUQ6qWErKvkM11n6WTZK6NJo",
  "key11": "341DJLxFedpWF8eZ9miw8EmJnrTiHskLBsAsg5TYLi4yjPQ4Zv3EpwwjyjU6GEs87VtLonxcXJoSqsrNfGN3za8b",
  "key12": "2LV98BaN2fHEUWswunKqVBThifR3Z2FyMymdFVtomWCnaiLUP6pQVPfzpv1N7V1FVdibPWS9yQ4fFy8iNFPfP339",
  "key13": "c6JwM8bg4VMKjG5esJsGVZ9rk87xQySAhU1T9LbTZa3xuV1DD2F45svF5ap4tQBorLp4UYnnVbEBMST7nBvbiCw",
  "key14": "5xeJKcCCmFx9DWjRu6VuWj5utouzhPv1ugfyWPjk91aWsmzR6RXBo9hkwLc5i4iCFT8XN5VJUHDaaET9q3R6nCmg",
  "key15": "3rPu8aJZQzVL7Y7SQxruLv4fPrR96FxdPEWizX2UsBcBcJ5UHGHDCfjqVuZwis2Xx6DBrRjTqQTivb4qZr9tCjBk",
  "key16": "4gRKBgXHXdH8YXSL4fyLy6E3dBjviuzFikw1KmktHh5HSZEkvbT8H3fT7BjVUD5AUVbWjLiv7z2qmH8iArJDg76N",
  "key17": "5vw7P5LTcTzru6gETAdnefGBDjdESK6TuTWupYMzorENV8J6e6wzaizVSmHFkDkNDFP6DpTAgovAr9w16iszuNXR",
  "key18": "59HqDpmSfvC4wZaDVYTG5UoVgR2HpjR3bNxm1X4S3qeKfLjkjYEa2k1RGpcKneofTREPiUzdyM8zMRkoydTWBBU4",
  "key19": "ChsZiDPY9XTSHo4dPQFnGiuANQciLDoi6pNcuLcWZtSPdJS2WLQmKhxNh6DYFVJzuxULW8CjvVFHjJK2YJR5Jp3",
  "key20": "5HmJDpvgUFukyfFbWMJYTpK7rGqUs4jcynUWvGp1waaXrnuL8poAHGUdoVPS86f5AP47Cw3PsMcZJkph8J3TvHr7",
  "key21": "4qhfEizxx48XUFwVwWTKuDYtQegGkercpqoRPpWViTNWkSmbdiPZ1mde6JXZ5FKJqMPYGwLsaiEwyRiu85gg78T7",
  "key22": "JMrD9tLoVTK1FNgGtnVNRXWHRySPmPz8MxcYqTeTbzmLGgnWNpC6cPiwicmkUBix5qD95e3tmXUXvT8DrYdU5sg",
  "key23": "3tXd5qZNcq5K5gto6X7e1isSJcz2HWg7k1zsFFUVD46nG2nFDPKLPZ5EnCygyRynEgxY67Kdw3NUy1ayBxpC8Xw3",
  "key24": "4PcZqZKyeKqyNZN5U5gngy4RBeEkrYk5r9bnH1pwVMHPK7oajs8HtjSiZAuxa7AyYTquUXeML7J2rpb3r5RZ9WkK",
  "key25": "2E3vdQymF1n98mPa9tjjcaFY7MESNM6ywqTjj5x2Xa8zc8NqAsarLnWc1uBswu3sfq3YhutqEaYRf6HhVPx7cLGC",
  "key26": "21PUbc2AQQjghp1TEQo2gWw2wnhnXMevg79HVhhvqzPXwBNJUTfNEbvFNomVUqyy6aZwUkg5GEvtfXt2qcDZANKd",
  "key27": "poFcUGJXQmhmFXMCzNvH9z74RJeXfvagpaL4JcjSU9DZp6Mh8MCVWE8wvYmMmXAtden2R39RnHmP6K3ec7GtYvk",
  "key28": "E4MMSJg7BETp6omThoxPr929VLXTZ8HHokLwAf24B9EhP96azWkkp62rxjx8DSQzXBuRSV2ukzPMJGUdB2B43we",
  "key29": "7iKcqHdJiDV1r6xXt6srsma12mpmTQZFZanm8cy7Cf3HDnZAu4oGMtLmdVboC9eBDRQeG8ir3eKNjeRH2RX4Mk2",
  "key30": "4Fh564E353P9UNmuprt7c4QKHmnwk2U7voWfGXu7oaWUXD2hg9dKwrmLfjaVdYnBY3wXHrWC5EUrpKAjdVm2YdYA",
  "key31": "5SMKWyvR4TYTrYATahB1MvfKEpjFi7jZuATf2TNiRCYnk9dYCAa9h89cH6NGGtAw5Y9nBQaNKYdL9Ha6Bv4K3BVr",
  "key32": "5jUapLnbooLp1S8nkbchwjvZFPgU8UYyrfaus36mQuaniUd7FQhxnjdLKfSp5s3SfG9gkR5AhCF8iiRiz85iTbxT",
  "key33": "2dFRuqHcXJMsi76wWGBDW6mFdYJ9Hz2p1XAcTViZAipfBuntrPtnbX2JBLsnX7bhrxD436GXqTDFhD11UskVWQ5k",
  "key34": "4aEBeWkroZd8TJsKN5dudvhA54itGhJ7B3su8h3DwQvrxYJngwxzB4Y6DmEwWnW8S6RgmM9vCCBJ5mSEXngkRvH9",
  "key35": "33dPK1JNoPd74wBxEbJCrfu4qtzJXmQNPEjt3FsfuD9HqQL6CidxyZXJXys6uKKeoZ4QJsc9c1mzJRAYKdC3Wvgz",
  "key36": "65nXPxedQPw24f2F7BA3xjP8MxvYQz5CeH9D45DGbjQXJm1kTfmR2myEBadn6mDstLz9RneT5VkzS7WTmiVc9gjq",
  "key37": "2hwuEhHdgp7bJCVKFWxrPZedZyEZY4wHeyhfR5WvgGRKSwHfvQh4JvKMis6ucE122G3BoTWLTjvRLKkHbZL879Tz",
  "key38": "3jx6bJw79thhLC9jcLr2pFzEK1W6v2WD1AfHGJru7vkSosZms715ewmSrWoaKykAJnRCy7ANUJ4tLzyHfkx8Upwe",
  "key39": "24diWQuMWnQaEpeGPA34n5rwQ88mUvmn4fvGmZcdm1Shsvqor5biL9z2q84jptm83mZZPwmnbBuuUwRo7FLUskqT"
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
