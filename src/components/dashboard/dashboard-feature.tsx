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
    "3jnRcgzqaz1AtEvQxZUi2CDnw1NQU5Z4nrTxNa2mawPv62mgTSXgbvGKWQSGokxui8F3k3fDoJhFXeXd4ZVKz8FB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xK9xE2zrDWLMQZZttBon8SrQ3gavi4hopAgViBKVtACzqutp93ebd8wJMgzvdMwmS7EmSzSsxhQ3AC7gweaxwYQ",
  "key1": "2cqaZx4pEga6xhFbNGMYGJ62LsU8DbwTViZB2cykqamfZ4NtfsQcMxtjWWGst4BMLYTczuj5tG8z2G9f2DAnR1fL",
  "key2": "WGaVk34LXu4z7evvx5wn8ghuay7S9pqzzTpYV7WkzmYCh7BJZ4hu23xazXfKvfyLUWjPEpAw7D6r4xBD7SCT1rp",
  "key3": "121fPaQFKEu6XHHsiQsYr9qcHoMEMTXDQfXxfnGHJiDZexMyaWxbj3gSikbwpiQ5VGfG1nnVBk2XhFzNZgMhqoCS",
  "key4": "369Xes4oU99Z66S9efzqDJiqyVr6VS93eHTJdRGC6R3waZx9hwdufKEodjESa9WK1n4AUvwphg9EZLcWji75eq46",
  "key5": "3xKCWpz8MPv64LGJZoAtoSw3bcyakQFruoNiXduZxijfUZYcYgS3J4XEKQVUTLTReUhGXsAjkRNLFMEaP4zD3obV",
  "key6": "JzZQBmCk8ed5pWuuHX7szMJUbvRM7uEnwHkiVH6q7FCu6T7gtuYXHHfUtBWMRiTMHJyLq75vQcv51t88xWdxrmG",
  "key7": "2ExxMqvsDJShgxhjfimHobgntSPnhKY9xPz3JsjSc9ncCAgBo2JDJZUfnPeugozp3QaqCmCzBBnX2zU2mTVGopLQ",
  "key8": "5dQQS1t9t1FCxthBQMJPTHgReS7ibWtb9RnroBEiBXqQ4VesnifWaiqQXvotmoEVrR1o8rCn8cPprKCW61qE4J7c",
  "key9": "5YRPszmXTvZqGRPgnMGtFzvCdPN92QZ3EopDmBc6xZBqyUEuqEXDgUuZHk86RbY4pkjntg9BsPaeVQU7L38b5DVV",
  "key10": "43thFwfBMhK2jziSKjUum85sVE6e3QQyikQVmwkfCp7VKqhdvEbS5qL8NKQPEib7Ge9ZSeZGCmKDDq1NgMEcYs8C",
  "key11": "4buoBroSfde6RUFMTuzZgL4an7UaniRKgCoopYR8t95q2UTHHHkA2VtxpssA13qVouEbRqP9PHMuhmRi98vHxqhy",
  "key12": "2TRo3LRcYVVnV6Y1jvrA7RjA5HywHUgXKYxJbTJXBXNVtkBR2aWHCQDyq6B4nzZ9fr5vjyShLQM2v94pUq2JRoTS",
  "key13": "doHVUR4CNVcALdV52yZgU9UUqtRnSUgZScnZiEt5E88qeebvfK6EPBavkYdrjahaS1FBiro7iHoah3N24BSJqdN",
  "key14": "31Lj6PBnbWp37aK4RcquVY8yZ87zdYKfeKd5Z8rhwv4oXhphEjMy1aLEcFjJRsh95DUhewMmrachNkj7atZvZSCL",
  "key15": "mYDNB6KdnLQAqARVWc8MrYGzrr6usP9pc4HL9EZBpw8KQhYFUYRWDXydpW9G1s5qQHbVpBc6QevuoEc5bfjQ5s1",
  "key16": "5Gph68QhJDVwZLzSJKYLwiFvSyQFH2qCT2W9PGjFAZQyKTKDAd3jLaQumSMdM6Mnmb1w1FKhM1FgwDKxsTobrpCm",
  "key17": "NeQJzAA2rJpbi5vMyMMKMtXUMLZC6aXHYD74Ft38WC1TGTUPbczhfsAr7au3B4gfv39iJ2HwT9c6WzLDGNkxwh6",
  "key18": "5BVxp8kyXDQbLWnfHVXergUV4CEJ6Qi7gUNSPMbf8iiqc1LhXDFjQUZsVH6uu3WiUYobqGWB8gPGZKAUkJ4LFS5r",
  "key19": "2dHXhJg5cUXhNfvqrNwCrtFdZWmgUZtt3135dxmTF6xHCnvnpgpebhLwhUBY9QuzHcpHLBmqerqmHKFmFXSYGqBe",
  "key20": "5mUxAUEkSvpY2776WCRR4aeuvNM4mMDd7HkD4mFWTWKM9X8U1jWiuDqeM4YyDEbfhEVHPW4kg1KNRoVedx5rUop5",
  "key21": "LLawyPnEdyenHcDT4qGR24doX1DMTQeUbL8wWSQHYPq8NNwntuUVRv62v2WrqSi1NUv8zfsaxhtanXQNpS9cFeA",
  "key22": "2uNc8hVUKoAdpF6PUE9o5YrbMYTtXoXckceCbs8XpTCgizszR19mwEpJdtXgkbQPDaYu3JSfyA1iLe9ZtavCgfdF",
  "key23": "67Qagzf1zhibKdQs7etau8va9HFEQJiN6ydLQRvRxHVjJv6pX8T9RnxotbcAnbbSzPPzQYwyr9F1XDxw2gsUga6c",
  "key24": "33vW4YBRUX5gwdNwgM18zeP2jsy6Ah91TjebzNV5iyXYX5fpSK32rwdqUVMC9jE9fNymGWBgRaKaKGEhxv8XRzp3",
  "key25": "28zPXMB5FzytcBMpAJ4ah8xY9t8ZpDUjaWVAWp8HyshktcX638zjwyobC1JbXuaCpuYGsMdmmkyHkDcQLRP3kL99",
  "key26": "38mTbKFCigkSL6uuEez6vUNbhvHqpMAsKDFBaw4pWh3PhYQZ6QbRTV6HZfC6QLKz4uaSzGbhPJkeZGMrRxUVNp7Q",
  "key27": "2wW7iu5NsFwzTdW9K4weHECG56nrb2mKT2tDdm1sMf4ZBxPBBZJgC9ZjDF6SRvwYd8onjtz1StmiovjeNV9Te36w",
  "key28": "5DwZXyATfzfaffvHf7559npvahikXBQC7RJ89aPPj5Xy3qvRoSQ3nCUbmRCLsfLPX8zErFVLa9paHJaezS3PcJRg",
  "key29": "26Vm3oF8TttEJHhKSofRhJyUnLGetEHdXQb6TdPWGYZWKesbPrRV9j4UJqQMWD5aottFSVrZF1hZQeQMKvHLEE7m",
  "key30": "CJsoDSQqoksBU3m2gE1PRAYLrxHsP3Dk1MDmcSwuMRumXrjrRUtkKVQMjkxzk8NT2MRjAXnYDwhNTmJFUREQH29",
  "key31": "4zXBdpUPDSXV3phXs24yKD1pVQ8QSbvdugqzkWsx7BcQSRQH75wh2pr1PHdppJVZB74trqJ3coSZc8RwKUXdpNqW",
  "key32": "3B3Ac4iWZpkZGDMmZr1b1ND4UuazbNRVdUm6DW8iZLF3qBqM4v8wJ1fj1E5maLjPuJKA7V9kDF5XYeUfoEYcdZH6",
  "key33": "2GKe1FKg4PBVZYGoRPkft7516LgJfEeittD31G1e6mh8xy7Hc5g4ctz7gbg937PMzj1T8Ha3YdvKUfnVg9r3Z2B1"
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
