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
    "DvPXijBiU4HkHjbnJAkfnJxmJabsRtUVZ617JjMHBWBDnAP7To5MMr3wPqFguYe61cFTDtmGcpAgAcqu5RYAKUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E1VXYYKJ52KLaDSDcVw3155QW8JsLN2RrVtThVX6GLxyKQ9qj8fCb2nzLmUjV16qRmcpbm5gZ1Q4F47pnzWPtXf",
  "key1": "Mk1iVcvT3Qno9aNWuvEvKhqM252bK82YgLKVxtgbKUgjwAyJncAEsfEBj7F75sbSuFnmtzLNB2rq4JcEn8r2XP1",
  "key2": "8EmhVKorsDEtXET5Q5s9wBpYJchNSx5X2fFzq6hodj4PAjRUP8sUGco4yRdyDHP7bZXE79BM7WvrWz4YZSgLdkF",
  "key3": "VMNQwmkyhHZFZeeJTvrHkXH7BtTM2XHv98bZgJZ5SYrkb6ykoh3ibbD9QfjEXw1sM8RUu2heSuDp8EuVN42gHgt",
  "key4": "2Yq9rU9u93kZ3xbTWCWS4KCxXwCBxjC7Qc5hNT8NWBxekdi1JY3zZvZS9RLBzqcG6oMTiTDzpmmPYo2gazACCBba",
  "key5": "2qV8kSQ1RqP3jXNB1rbCCWmQzrYnmwQsYdG2UjSZ57f1T1QEn4jh2pXHPT9xM7MDmoAQuvrGannPbRyZBnq1P9yD",
  "key6": "5hVE4BnpqRWLTBGPJsRoZKR5VjC1gXXX4VQ5j2Jd8tthsuYfhmU36RkPW4SwmpkQzLgy6RqUA8akTwD2VYmfX3w",
  "key7": "5CyfCFkUMt9JB3N72zgrYHRBgaNronv4brupQSThJPPbxzBwbjtaetzEwecWxnZRWNrRi1fxpe7ChmeGHPC4Y4pP",
  "key8": "3esQd43fnvtWMNsU89fr9JupyM4HcG3ky3MV1pVhPXe9hkg7x5PWzDipRiV87FSMwZuggHrg3R9W1Y3nETC27ais",
  "key9": "3GY4j8Fv9iJfhteTmgGs2JcToqVeD7GKsTkZBhvErajsfCLvt4uuYYhxzQQNXbFeNB39KdMa8VL7m5CGyUS6AF8x",
  "key10": "83is14qXgeq9wv9ydCJSejPLjS3HA4RGE8zv3zmMZwbcTFdnVG8nwhZESu2nL9HXQwGGeQ1wiMkmtTb5FExGRtH",
  "key11": "4jypk5ftWkkkbMdnZZuQYxQCPngpA7y45PGyCXJyJKFxSQ47LTrQN9jF4Taru9DqZaxmxonkFhW2c8z3SEGQbg6G",
  "key12": "m66VZfynRASGGcAFq4uN1etd3N7svaryPtziuxKHnY7R4U8P9Tk1pZ4dBGaLhWnEfDnhe64o49fR3P5iNRBqf86",
  "key13": "31D1Sn6K2MKvbmpgnTdwA68rPPRpaGUrhUKMM37Z7oYCn2ccycFfHjrZzQgLtxHNRsmJwrsPSA9jA2y8WrMzGNGp",
  "key14": "5aiNMkBDoaVvxHwUNbCsgdPZ2eXW27MDm9fZRtdsCEEsyKHuwdjBi3VjGwQ4jNrwXrYhViTxKfhbRmv4LWjam4Z6",
  "key15": "65RW711pA7pVicwHSqY3ZJbe4Mn9vMDhQbmFcdbdHLeR1B6cz4WuhbFTVVuvNvAkYDYCrQscdVTRGYfegkQtG745",
  "key16": "38G7yJs1SgM3jQJFx4hA7vEvm2iBTYLAUABtUmHMnfK2UKVG8AgRRajZyDBZRFvHLSt3UuHgyDzB2RKqJo4AqmK6",
  "key17": "DLGKfapFKp1smH1PjMgepsJbhf84pQMkKnxgVyzS6WNqoHXXmeWTcrKbSkiCmbQLsH7eXbuQ51tgeBehb1paSUb",
  "key18": "zbv8XZVBBSsu5xN5WLxL31VuPUotDzbyR15M9vAnhsZs2qHV52NAdUrqj4zct8D2eVV2fhcPUNVGf8CRQyEfNWk",
  "key19": "23LoNvpXmHhzBfVH19EQZ523eqMtb63Mi7CqgPViGWCjEVmowSwmvSuxqRK4wrjGgS5iF62ScJxhGi2T6Hi481qE",
  "key20": "WLR1kuPCUfzoLG7PLXJbaJA3ZDGHXybbXffZhH2jNeuTqwtcRRU9tQFgqFVTKhY7gfFVTVrKUVvKRDxKbp4Ant1",
  "key21": "57McZZw3SpL8KM9b8N7tx2QofRkQcbBXmenremucEAqAPfXtmMdDuSMKMRdHnCvwVdHzfAVJwLcf132xsZdHPm81",
  "key22": "38kL2MeL4y6arYtFzFDhk9pDkxho4f7WeUdDegaLVGNZCArohHJFar2qAaKbeo9SvxwSU9AYyHPQFjutHgTqqg4G",
  "key23": "5qEvFsDhTFQEp6nfEViwqSHvJbgVRvkrtrqNUnqY1M4rdYuxzFm9G8NLGdihyRNG9a5dHCqZoN9At2ycGRxafk55",
  "key24": "21AECzsZsd9t4EAvvcD9Dik16sErTbVdyHrJe3YVA9RV1PSjuW1qkXDoPwcNMK83TfHitTiSBYWDxk3Y9sMbYg6D",
  "key25": "58t6MmJrbe99dnxFjH9uk5qcRKyBr2wZa8XMKw5cY9CGV6sT56zoP2KDPBRbMheXZoo4QW7iVGj15becnXp6xJ8s",
  "key26": "3HHumphs8BZ2SM2RgqH5N9hYaKgHSRKtDq5HRWddBoHksH6VT7F6PVqUSLRD5TZWRFXjPpse3sDvPo8Joa9z7qA7",
  "key27": "3AVXVGMupSpWdJ91uZuPqM6XuLxSZSPg2FyeEm68MRopasvoAdW3YUCQmNKhsoqeT576XtU7yDq7JbKiUYkrrD7k",
  "key28": "4GmBnXwYwuBDLGUnvqHAeubs8sh8Njf9bWi2HVPT9Ya3qFhg4rEGL6DHwXk3dhMppY35nduq8mCidTQyxfaxWQox",
  "key29": "4wt6UCbcEQUPZcjpa1ktWuo4Gff1nFbRvJ1DZeGRQ3cj5fxwAqEXQXJoHYmJs1qsjp2LEUN4DMC9CzSAvbBCoNL4",
  "key30": "5BqFKcWsX4XPV8Bf9eKBrmtjGDzYUVfWrp6Lzo58ZwBczgnfZH4p8T42LY9Fv7jGhmkb99RZnxFKg52d9tPsk45n",
  "key31": "53ozXdvGD5BVGgvjxjj8e57jb8TYZSWAPCVouaJ3sik2tDkoNrCdGLGrqG5spoPGvvtwrwnLHiiHzGb75DahsMfW",
  "key32": "2FW1TRd68i5oiKqTGeZzpQizKzKDSsqVAY4wqK1TbuZncJiKVmyEQj4g1xVxpeKW426HMBxWZUc8JT58AGD9NUJ",
  "key33": "7p9UdottHoooqZ9vSNbCwKfNtQPCjJWRUoUCZuUy1D3CihJ1Rkf9gSjjZYJaTwEWFfwjgDmy28MPJBWgLERhA1d",
  "key34": "5V3bEhxhahgdBXVEFMTTPHShgXAgBBJ6RmAwumc9CZnrG3GKqgjmAWRAqmhBQhjyWiKsjU8zLK9GmseeFzxhjRc9",
  "key35": "5VeueVkUG1qW5RtErWMKVxZ7xeBAvkLEAA52KCyKPNQpz4EbvdEAEL7ukWq61Bp1KaXCQDgWEczrTfGhzFpVo6Bd",
  "key36": "53B9STN3pdusnBPMRAJfRrkeP3yKzsuLmNFLAxqZSWatk3kaRJX9EksgU8mJDaazaiJoiPSxS8i9AC18EMc6NLCX",
  "key37": "2veVm4LFVBy71X7JCPU3AWWRM7DYn8A9q7H3eG3v7ZYuqGwBc3yBk6mSxP48eFdvYrLDzaeyMUkWm3UMoinmnRmH",
  "key38": "31jUV16NgHYuboMhfFog4EwixNJYUcD7qHBAH6tbso7M3sPjkgfN7yuWqNJc7DPP8NGifgdrxfdDL32HeB43FW2X",
  "key39": "66izxWHm1atx2UR3DLb5SHEpBSQvPU3sR9WVveeaNopbnrs7mq48DEB43PmdyL2iMXfTTZSofXmpHfaxSQMUDqd9"
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
