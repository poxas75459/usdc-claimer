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
    "2NBJDkDXmY6bJKbGBX33Mb3QYc56HStD2uxYVQWMXUhUMtiT9t23egLJVNYpSkJUKNuSCgQDiqBYRV6JJjoNVmzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ky8ygw6pfa3Y7kmnUYpUkSji5vMxhaVWBCQds1UAXiqWmE3qbpdBtgeabSwWPq1WGEMxETVvNwuqEnNi4Qyaya9",
  "key1": "4au3chJELLdRXRpySnMJqnJMYCyy1iz73vy9J6QTEs81AzWhTurPDoD3tZ91ESXLJ8nTc5HZsojDrmA4qjFNmAwH",
  "key2": "Vfdx61JFxHk93g97Jz1rjCk2xZET3MMtj1N4v2AkwSsJ2RCDHsAujnqFJM3dMiaEXXN3AMxkKjf779erdeYYHLa",
  "key3": "2iDLTBEZ2gGCJWYVNFctYDeADeoqqYwbJSH58y63ajM5ueB2v81wMFxpv4hiJbzJyDyF52DabJn8JwPQuT3kkhzu",
  "key4": "3NfuRVmaVoXkaoyhU6jiZHoKtEANb7e6k6sMmCDaJHmkAqTWz5xSzmS9XZJHFrxHY89jowFctE91j7g3JTHNhVBM",
  "key5": "3fKSj2B7HdfNz1BBvad8ee1yNMJb99cYexz2Nuts9Dz23Xm86gBU9xWEJ1Y5RFp1Mh781GCF9z2nvEWrrYn6BQaL",
  "key6": "3hCM61Q9VsRmbZNYR9JAR15Pycnk6kNzwc3KDtuaC5wM1QSB9hDpt7QFSjVhLBhuMeTyE2nPVJF8uSw6gEefNRzZ",
  "key7": "3jSyEYXeGbCfxuVJko4Us1XUoPzd2EB7bELz1srbEtXAzy9mNLXLcaHfKk1sLysZDacEpG9NtEf9m1hfLGHvFyEu",
  "key8": "48xpYNBY4kU1mDyYLjihZL6qaZotHgVxbUXNv1FnWQJ1Xzd3bxfoP7UkF2P36k2tzLSDJfasfYDp87q2oiKciY6i",
  "key9": "4yU5c3WwQRrXNVs9TKS3xCAjKxMwaeMxbPTADHphHUJCQnuaRNEqoRteFVaLPXHfyRZBCDC4Dwwoy5cuaC6e4TVn",
  "key10": "66Vjy73oBJGfcXqYRtrL18CD7GKwms8vjBhtoe5iEfucYUHkXVqCNnC7pk9oTCXCAbewmbYVEJUcA962Engdvjy6",
  "key11": "3GqVxzYAefixgntWqTRQduq7ypEibesZhsS1HfVn2zGHpdhCRk1WhpBPVSouYGLxc3huHDEBEHdtksTcP3LqZgX9",
  "key12": "5t1W4h8ikZriYbFUg3wrNmHXBK3dssb9FqnYQobY1EJRAMyAbvyRvrsc4MyAQDe6scRunoP8jUPL67PWRyDYBdx4",
  "key13": "4AjnNszspAvFV6cCdrsykf5NuWBaw9N7FhwP9PNGdbB4pkvrnSvhEsRPnRCiRXvgWcG7tghAURXYfKaL4ZdYuUeu",
  "key14": "5CK8n6KycWxaRTNLAjnTkxSsjrVEvjWiKucCo1FDrm3tz1tyiay7rS79bn5oYFcm7Bz9oDfr6kjCeEkUi5qPDtPr",
  "key15": "cN3tgHJKyeS6BN8wPiypj8S6KBhbyU8FZeNhe2sZ8LBNufpqGwUZDq2i9dzjptCkawgfy9zMmt2dWA8QPnDCECD",
  "key16": "4dW6QC117BzawTa3dm6VvY5Bo6DAwi23CAskf3oPnpUmeVtXZNa3eiXcdCvjQGmBv33pv1Yo3NFAM8Hb9b9scmV1",
  "key17": "4bWapsgg4uncKM5HG53Ae8ce7W3W6it1FeubdbhkjabDpxB3VikrTi6DXmTWssD7rM7qyhCG9YjA61VDFbeqkpak",
  "key18": "Gk1YHnVC24a3pNwYaxvhkxjLcMEUE1vqiJZnQNR7ebQkgGjCxgVT4TQZ2u6g5DnExoHt22LgxL77EjG66Bd4rCU",
  "key19": "4dwY8ZTnrN79YCv7dmfpULWgcrwntavHYnLmJzVSZ98cnyYfZa1dAnnYb9cTL21fiW1pTvyhM8D1dK1rQ1baDfJ5",
  "key20": "47TnRxyvTr53H953WRgjCQaej6B5ozup3Xa1MhJqA4MbFeZvi6Sk4ERF5YwaAMALZ4FJJ1PdXJYPKdP3rRSkrUu2",
  "key21": "4wpUng41uLHomq5xgSXVuqtVvpJ1sVhocw7F9LKNqwnzaGQ5u1chRfRUTp24EMJK55fSwTqW3s9nGwMch5QmXrJD",
  "key22": "3BKHuaXLBQpRyHSA8f4A67gkhJxeABjCefsZ3eMc5VUjGJQNdx88hQoMCLHmPULwC9CBqpvmpqS6f1GD9aKD6oTV",
  "key23": "54jEuHLeiELAecbxbX86u34DRjihnUTiZEBkrB4z4bYPoFFSz862BqNfSKWuXrLaA92xuJgPUEaeLC7ds2J75u4a",
  "key24": "2uussvtcwxYidAFdGY9yo8dWrYV5zaSsE8jVNy6UW7VNNuJes8xpLd4yatpR8Gm2iv7AWMMzPvACtkR8WobTPkWQ",
  "key25": "24ZEkX1YkbVVZ6m7RQTWBGRFQckwjKENDYrXQ7pP5JcRxcmgv5Cuimc8GFx4Y6a9Byzzra7CHQfRAkLNEg8J61ey",
  "key26": "2FUWunsN6obcMqH5zLHPAckmtDszi1bcXnWkDfncXhvG7jGKsH7Ca4QjerX17LrQP7owrur31zTJeBBX4mqdyAeT",
  "key27": "2mSGDNv9cjx4v2CVzMm2FDx337MgsyH2EPHBiyyu5rYdeWjPwsheVfDALFwQAnYBJuC6hpr88TJuxnKdtGVrfo8Q",
  "key28": "MjL3upekMNV2Qz6bXH5iT7MxRyfCkypw2SGZdYUMxi5K5moxLWyhGbCcmdRpfNCu1czpL8YtP6YBpBy4ihzA94P",
  "key29": "2BxcNAkBvQJFxnwm9E3gQnAHhzreUtjwrdQra1Uc6gxQd3aRQWbzCYAb3jBzaBqtDaaV7dXWYVZxRXBRqMfPPyc",
  "key30": "2XUGMey6jCbKD9aG6BpUpqSBabiHy4Fdb6XSn9TFGWeuEcLRM9N14YEJJuX8kSjs7JRy74zZ1dMnAvcD7TWt8yn7",
  "key31": "2ygZeXPfXNtGqaNxZmxj6JVdNo66EdhadWtNrakYLtDQPX2UgBGrqyoPY5GzYJ4pj17Av7kuJ3q9bkmMqrVKgSRc",
  "key32": "3jCt9x6muAUdnyGDwATh6oQm9YNMe2w7GrayaALQo5c5PeAV9EhatzjRnoiVNeQnLEEhdxvrFkYHa5ucpFBBpSZX",
  "key33": "2LMRN5xvb1jJ41pR9AW9UXY89169McLBzRHFy2f2VvwTZzeUKSCTZcXHNSX7x48ta6zQSaMgB5395qHG5QsChL44",
  "key34": "3yULicqkdamroqcSTsYxNNZeoAacdsUDkVXFjuq4SDUboQLRe56umLdt7TQRfoCBs93wRgJxGSAFiByT9q7GfXRn",
  "key35": "5WdEFWQznSWbuUtcb7j2v8iKT7fh2JRppFXUfKNmZzcLYH97uqFdBK3yfSh1ntAVpJafhCKMSb4dAfJi9DXSXhWe",
  "key36": "B1BrcRzW4fv613h2ntu5i29aBZtwcrwDQwzS43Kb7LK7s4hz1VQ6Tu7TUndYrDDjJw1EdbxSVeK4Zd78dZNRvtQ",
  "key37": "4J8sBkT8i7v9ZAPt6F71bF87tSBkBpBEfcY7zdZsXHHCqtfgqqswQRQNC3RjGtQYceMkSV68A5LDaUfKSiiD7Sj2",
  "key38": "3QUYrub8jekv6H86wGj1vMsHptYjEBCDr7N7qjx8HpVUrkPcNRKRXDThEuFqpGyi5M7R7kseWFvgTWGToMwyS2wA",
  "key39": "369XobDUb4ocr68fUYntnhx2dY6aNVKey6YCigk5UKcLQjrjvWtF3K9UVhhckG66PFaMnoRvKfLu8ofRfGYjhnsH",
  "key40": "4XakT8hwCtdgv456b6tyDMUweAJXYXmb3TqiCKkPEXSCBRkSEaS6jShZ96TTXYZVHEHmm28CayEbKXx469phmR9a",
  "key41": "4Wti7GoxKBGnP1bvxXTNcXu5YWFvKNA6Ypok31h6hhMVpL82LwrXaAiMZQXiQxeU4bkmEbt7xZ4kRmwvTr7ApXWD",
  "key42": "kdjexxWXg5LYJyYGmw3hGL9A9M52Nt85WaHDoasJrBd2ZPcg5UFnhH6y14qU69QemtjvdJawKN7fobjhstzpXna",
  "key43": "52WZicVLghhmaEFqzgvyVnA9PWfkcLHW45zmqNmpkf744RiPABgmQsejfe4CdgCQSvemnANJYHC2vCeztC5QnuNd",
  "key44": "2wtDstpDagv8QZ3JZs6CMQL26yqLWh59m8vo2eahA7yk2P8sGPWv66smExJtGLKy5RoyCTUet2xHrkpDg4EB9aei",
  "key45": "w43duGbHbFQRTohLwjjmS85qpgmv1yxaTCMdkHtkbaEqdWUYqsT2s8E99oewB34XBHkMnCRnAbt5bpFddRqxpWy"
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
