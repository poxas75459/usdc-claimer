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
    "3RAWbrhgvYvzmbdsLQuEVMszrmVmtJ4KaZsY6tnYZfLQ1MB15BLirapLMztXAE3SZz9Hk6xaaQdUHLnitpJAgXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WRbJWkxCYMU2ZQh2xq8KgCSFWj7pw3Zogc7td8vTaZtqWuZDo1EYtYNWW1idKr5PgG1jodYqSnwGPevdUEBMpm",
  "key1": "SfZePMV7y6GQYmPNfBjDXFx1a9mNodN2EYdJUq13tte7gwEcjbYLDY3p3hw3MJpmj2u89YKVe6RBeNdHVXpRd7N",
  "key2": "cvWrbtpgYNDNS1ZgEBGniFXX5kuSiLVMYodggZZQafK7CkEY5b7XjYugeEG8NJk4v6jQRpwZrmokDdVSQ7GQczh",
  "key3": "ZoNPSVnbYUaKjfYGpQ2eCXsTa1GtQNVGQU9JDS2SdyTrUyMzK11zrKz5SDnNzL32WRjvFXbekKDfDZcZon2nVEZ",
  "key4": "2bDS2NKvrcyt64tyCibAeTXbpYDJeGQKs2WnVbTpA6JH28uTrhyhjJJoKDwhoYNRb8WtvFEwtZNaeJLAH6WKpRhX",
  "key5": "4GJm73R85Qj5RQV49UCE6zMavNBtVKwuY2RQ9M4M91KUgNJYHZaX7mWLe83waRy9mjnSV8i7JEGXkQThdE9qJBUv",
  "key6": "4hXJGiKQMiGBWSqxPo3ks5QhcHbJViBZjRDEy8Soc1HhpJHhBSAwQzXBkdCcUZE7NScMF35xwjr4xoBsQXV5PDy8",
  "key7": "5k8ca4Akgn2V69JbkThQyhKtSoY33qurBtyCTvUdqocXhQhVDprHdmXSYgHVSgrbW3iGCyrBPvyDYbMRQMQCtkxX",
  "key8": "T3EFvvJQqzSBAZ3kSXEg8uzaEYvb99XFvsiQLBc2YU8ZmjnVWCetcczxagjMabcT8MqtTTnRbPDyjtSNXSZhUWM",
  "key9": "3f8ygMqbmpZZTnzhFmLoCwqv2wZ6HLyDudVRqB4Lvq7LXLYbPNQ56KXDRFZiCRS7RWuzTSr9mykX2dkuj6VoZuzR",
  "key10": "YRtp3vdsRCdyB4J12MRUT4NRodE6mqtU4Q1cnzfDpwH7WjCdM9vuoc1o5VHvk8ic83C3uufSg3SKFdUqtuvBNQG",
  "key11": "57kPZcpwaazjSPk1SXnip3HdfnNrqNSJvvCAYfbvvYyQL4VX5tYTiC4yfabvVApRBp4URDSxD5JEa98zF8QKtZfn",
  "key12": "5stLmWpShKGeVoaZdZhqpUNdh7vN7uG4SVL3CSJZmqFR9ZBMokzGaJDDvcLqRNJ8YZzc8xf5gfrSU42mddjh9U3e",
  "key13": "2DTw22R8UvCxtZtv4b6ZaRXbPBg7GTKfY3WaqogE2C9VStAYMDToE3wEN1Ck28tju1aeUSKStjKiwGcDbQDLcHZP",
  "key14": "3Wm8aNFnPK7jnD1WHT9MA4QTMGGfQhje27pGgVoaeew6DoYZU2TScgxBJhuosSARNQ6M1nbdtj5HgXT8xEXZV94E",
  "key15": "5jbmD2iDivpZNUrnC1ABWfwVVBdSqd5MUXXXem8GdtQ5n6M3coFgvhkUSHM4fgnLrX4jHdWcc7hSLaSGdHDehux1",
  "key16": "RnLpk5bC28iwLNYxCDFrrdjYaicmu8kjvDqxBxBGXKs5KLHMRnzpjGsg7p52dWxXRhdtYXqUFfzcVsZBzT5A6Jg",
  "key17": "5HLHyPon1PDsnJAGpFT3peUdMmWVj4Qtmo1CnGRafDC6yWnApZQnq1NYhcXL4rBqn4GJB38mwom1hNYndCEjtcrv",
  "key18": "3iaDDmpu2vVxhVSBrsazzyNRuG6en1Ao9nki5cd6aEM3KuCvyrBfSSLcJq6nvsHeG2FAw274SFPD4133qYprQrWX",
  "key19": "5VAhEFaVaxC9VtZiq7VUVNSDYYmWA4WQobdFFxCXsZ33wzCFWUs534uh7T1pScb5PHm5A68MmtpjJyW2UemQkDt1",
  "key20": "2repBgFVsWHSLeMCAXf21TejS1HRN2YizMRY8pR33KtDkBujtDHVEuLGZ6pXQ4EH8tCeMyAGq3hJfnTBk7XCgSyH",
  "key21": "4tTE7gFB5UT1hz1BBdJzo55LxPpkgaMNEURgbUUsfUr4kYQm5wk3jQGPHP9Co4PCMnkrepugpvFAh4KQwKDvyxfF",
  "key22": "5jjL7BkYjCT95AQitq1PRnpoeLoEgaQd4jVyePJfBbaBhu8ZCquJURFdZn3dAuyZiN3CBaRaGbGkEHV1jF5sdvKn",
  "key23": "5JHxEeooxrmbQ8GJhCuRvzvQofrJHPhBu9j8wVunspBj4HkdXkTkBnm2tboqsYJH4ds4rgBjp7Jx1sr94bwRPkfo",
  "key24": "2BALPyW3QuqvD1xfH9uejamE8h5XKGA6d7gPnMGNEzuBCfrW6sw46eJthQ12eSGegnr88enWdsoN6dbxrne9FYff",
  "key25": "5gEvDuxQWQ5eHkGkxyQd9HMCm6ktYQaSsWMQBt9VyaPS1bUV6WadC9aK79yK1QnmtHZfYJjv2umrqYaBrXTcnYjV",
  "key26": "kieHoq9rHpdabieD85iRSJqDD7DNxWTUZUSRSJqj3K6nGXKnwVMhqqYGWCbkXamu3yP13Do9PGgXE3CSiPAgVrx",
  "key27": "3gCdr8vPJSpE3iJWMVwSaoopzxnYohYuyW8PkbeQHkMLJAMSEuB3QXHKQ6ryWhri9PiNoA1MKb9RyTq4ThnkNJzZ",
  "key28": "DLucXHt15ubDqgEwsFPuC85S29VNr5s1Vv67L6NSNwrjXgUqmXEQ6wgji9eJ83tNDmkNDQhZPrMfxa2e1pR2g46",
  "key29": "yjvUmihkvK7enhbMG7wtzPSwkPeatfXNKJVse69Wv4C2YKMUPeiqgQoaA3spAVGTkbgyw9WgaBXdos7jtmLmXNy",
  "key30": "FxuV9iSWNHAVDkXKEJNG784kWhduNhur865wQYVYhA3XY6nWJhanLUr9M9hU8m8iQXv4rrxqLGPFoXupJzdEekC",
  "key31": "37dHpVq2sXhUhhQfTmPwG8YTVEtQ8aWtq9GQp1aXF4rYeNWPeBY8YhFpjNroeAMK6CJrP36TewKjzN3Pmgfeb7wK",
  "key32": "4EcaKyV7rbxZw854UCRgyU2TRQxUTREvgaL5uDyyf5BG2WzqoirWLf3mRnBn3s352KsVUHUd8P7PPdPyqFrbq9M2",
  "key33": "5prFw9B27nxZ2cqUxkgp8WbQjDF6NvduMUnEkBWkNNRdg35RW9EBJUSN4tY4R4TFDLTEzESuSAw6SkcR7c4qCuu",
  "key34": "2NGccHNGj5pbJJ237sRGHnmEkj5m3LHzrcNExdPgKmerKQDaT9BMJscdqYfzXQf6mXWXSNtyqaHEr8Jbd8ot1UB2",
  "key35": "2xTx4NtBL5cKM4sVid5tYXbT29zE2qccYUwov3aQuhUWVf1JNyKMP3hPJtc54E9eXub88PjXLZXhSXXp37dU2hP7",
  "key36": "5aWkWemE7iUffcuvzBoj7Hm8QLTSLedEMzjTPqM4wNZrcQcfpQyrM8SsZge7Uw7VzVsdQWYY6e73kpGMM6Qsr542",
  "key37": "3ezGxtEsjY3no2xnaLUsTmFMe4xydTEzugKC4FgXJQ3sGNLMAof38ABkHf5TTUnLMXcDnKFDy3ykpYjPRj7Hjzit",
  "key38": "62qih6d9G34umEbug3E1WadXr67CPcHqzEKTj41zhkdeEogVjSAr5LP4j43HJGB3z5aqvYcV2HF4WqyF939XRGVs",
  "key39": "4NHJ6HfzrVMTR1PqF6uQvt2MXTf2xMqQ9rV6XQBtR2WngFMZRozMKgB1tGwyu1iTKrLcfUP2cqZHfjHSo4wt2Lor",
  "key40": "3Efw3ADJuKww97LpR3CZ7QB2ASyhjZXc1TVSpxRL766L4PqXxzV2Ai9E5GiNkZ5TiwuZRQkpJF48vtYcyMrv3FKM",
  "key41": "p5sifTggJfyTvSHUATw8A3oBRi4pMWRgd8RBX6KFwvNDRB6vgbPrTkfKg1BWqb8fGdXAyzben8FamYymMqX6hCZ",
  "key42": "5hcZxmw4zySBN1QKZqxXtGQN2qezGwy6zm1aXrouaweHCtXwmyqib2gMW35xH9MQmBVXjRaTgGaNyapSq9rWKFYY",
  "key43": "4YGYL4ookcbscfWxzHcZuiRYVSXJSG2cQdqPbWcPb2EmrqgwLqAcE444AHikVTSCM4xhpcccT3fAxGQ8QHeMCCLh",
  "key44": "3scbHMqo5AoDMjgUbdUiWz31MaAdkgqQmRWHsKZhn9tgYsei1YTP9RymjCSLYknCajkxmAJPFSNqDNc6gVUdAoy2",
  "key45": "GUh3F1zZd9P5eeKBABj65wJtKf3f8aC771nnf7MG7JCwKFu6MrzAr2fMwQrZEWW7GJe3vcmCST9Ht9f3bjxW5qJ",
  "key46": "4J4SVfoqHXEbPyBTDkQzSNMmAEF77g9UxhnCmYdBanu3WVVD79jQ8TnAMMQhwmaCRbh51jXsggShsBHw4Uim9uRK"
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
