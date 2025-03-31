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
    "U5qZry6nQSmkwdHfYDuvGQKh4jaiCeWMPC2PLqTp73g4JppUftSwWQMVF8DryWMN4BbiX2xWmNNKh4A8X8nWPNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vmtt2PTTQ2yCokCTixBzup52t8KJd6cPYsX4vKzcFt6ahKX8tNsouzU5HoAP6ctS2gFynjxrvRX8yzJMEETrDut",
  "key1": "5BbS1ejid5ja8BKVrSaHMZej9e1rxn2n3QdZYNo8QWYDRFYnxWU1F1iB2r61V5xtzXoTBpabD7RJNkcgv6mxqt9R",
  "key2": "4mfpxRdGwby2me8EmZPPQVHHepBd3fW56TbmScFpZawWurW1mh9h4hCYrHhMms3GTL6DGh5sxj9CHMU6oq32ApPM",
  "key3": "3gtyKBdZehdFoLzCj2VXGsna5sggrh9EySZzSLSXvF6VwFVVMfV4dV8y3xGFWdDWrMqWuJA7Q1h6NR41ztJoenLp",
  "key4": "2ssybTSDLSVZV4VCdedLTNC7SDUun4XnFuvGwDMqDH8eqV1JjnLr3Qt6tzUepNNeoTASK7MP9AtUV7awNd8dixYX",
  "key5": "4iHFUd6HuSvVD5iSCRRTxAzugN8d2vysKkVmgCTS8KgPQew4KQA7x7TAYsWnhRCtLbEDdCiVMcLKmKSkxNMCgt9J",
  "key6": "5scLJ3ZtTVwerLx39VxZoWS61v3yASKPNry5BzhzuH1MsHmKGkzoghddbM2NeN9ML3pRKgDTAoBw6Fv1y6cUfGpd",
  "key7": "3MNVyQsauTPEngLqmqJzVg5dV1sasQ3UcNM6XK6w21Zc3xDDnb5hmek2bTYtKZDUeu9nJrdywyjiMHvDdKsY1j1Q",
  "key8": "3GJi6J6XxqgYWpdBZpogd1r2fBLyRyni4Yg3vXbU66ZTGUCjAQizF5xam4B4Rq9k1EH83H1oQ6SLbsF6y4ahAa7E",
  "key9": "3WZgV2t8ypHS4dKheHpzN6Bh3CZiDJpbjHNmjFR9BxD844kHxufQt8KMdf6LwV1y3qo5BXbPQDKcHpvEvCcWAYKq",
  "key10": "43ZoK8UKPGxACk4LpoVW34J3zkva9wsfurxvpg6GnbN5RNu2FmPn8aiEJecXefwfnrgjNdWWCMrd2L6JYtivYZQS",
  "key11": "5DrNtLcZeivZxayRBZp3hgRaSCHFj4jGZpPnoD3mG9XHo7zyGkWXc5sVi9wpXTM6VQcmevHMm8BtGpZpW4aqab1n",
  "key12": "3FJso4y9uNq6QPdmfHp129NtSWPoKHWKVSNnDTTKRCUpntDgqGVaFYVXJX4swnNySnXep1R1pMxCgz2aPLLe1QfQ",
  "key13": "3fbHqvZK7A7kdV3pepLuet9jPvQW9SeKp7hAo7B7FMNimBU94b2wyMYpAnupqTWV5hdfxjVXFuw1JLkvLaSPkjn5",
  "key14": "5vGsVdR233gsgqbPeevSTnFZZDTcuFLkWzyS3KXAzAX9Ti7SkZx2BuN9mpPfLtPVZk3ZdeErfDLbPFvPWUp8tgHk",
  "key15": "jRiXexzbSzXJj81F1wvmk5d3zsNEvUJyRGjawFCaqtXw4Tfo2aE8FEY8VhRMdLXNCHcuvBC1XSjF1Y82kaU4Bkd",
  "key16": "DdHPEUw39YjbUWjsaeDL1cKMR6CQGbmuYmS5S65BpFTgqbiXRUtukh1oW3LrzmK7J75tX7JN8jJUKh95dLRaJAM",
  "key17": "3tFpbmydY6ZQ9XbCCwrbAyBBbRfXsSMXNZi4p9yLLaZey5UY4DbxvF5hvQgq66WZY5cHPwgicQK7bR9SgCXuF9JP",
  "key18": "v6WUkk2nA1voq5n44PRPakjNCPW9qXtdH93spJqYXUD9cct75VZWxNtidbNAGVvMn3KjovHxvXZLZZjEvJV71Ho",
  "key19": "45pmXsXMPujzo2wL1DUGZsuy15iD3XG4o9hSvU2gmsUUg8zwBWKuMGNCUgCsEokW66qSRvyerH4XNNJjDSJFxEbD",
  "key20": "4GKpr8YiQcum8xmgfA2A6vKoMtCXHPEu3yHA7qR3CE66yq5n3QktpVmVgt7U7DEm2kwUP7Cx4PoPVkXHGzavsNE4",
  "key21": "4i5BHUBq1htNc1gvnSrbMfKjMdLZ5muaLRYiJSGc3eZEUPyt6H25Cs7iweFexS4nH2Gg3jdsku6dYRfiffMT87uC",
  "key22": "2JWj4hsJPdhWdYLCjstqcwYmr3BSSxJULip81hRSqNCmKVT7bBrMrzyXYCjpHQ4sxGaZLezxXqLbYMv5Cu4vf8fG",
  "key23": "5mijweR9EvYJFZbuX3RL6Q6djbi2QYtSVWKAs4onMnbUPYmVTXeVBeE4jCHvQ9gZyiZBFnHhVRJAPELFW3GVrbJh",
  "key24": "LZzCeqj25yhFv2JsndMz7c2ooECmeqhYdGk7nniMXcDERpKHGTpjzy8Fn7wPu8aT4aMZtJYb8FwdtGebtroxnqk",
  "key25": "5TEqyPJBg4NJcXBUuzeLYzKdZazzaYiqdxj1ccQ1A9kPQCBcr13BWVxVYUJm3jKecmBMHDCKK1HiQo5LWfQSBsxX",
  "key26": "5q1Cpb6i7ZYrbdYcbNTU9HqDLp2LjohSQfqjf8Q2joW4fa5zvxFunbuzxPuN44iVz26gutVdU8R4PRW459oW5LZq",
  "key27": "69MwTZR7hcQgnx5fkBSq3VadT8Eo4EiD8rDK4nJMwS9Fd7cQfaZAXooaL2FJGDKd7dvzzMWKg9vY4x7JQCpuycu",
  "key28": "3i4pg6Z6ypkCLMeyP3eKinY2AeVavmXV2QGmw222KdrxYznyyZWRDqkVcgDiNRMRv7D84WeaC6tnQiJa6oNspubi",
  "key29": "2tZGLCaRtjVyeb9fY5TYZUqDmRHDrBprc6LHa751AqybHZwHqufd2jdi4CUXKJWRw7dFkGEL41hdcQrcnMrEEGQs",
  "key30": "3VaVKHEeugCLG1roZcxrrW5MgZndSWP4rVcBYPKoq1C36ynNiQqYkM1SoNwbkXCRSutj7eZAGoPmERgZU15rZWwK",
  "key31": "66phwbEWbGmW9JpXdsNAHQDBK8saDWprKPCZjvtVJh4jNVUxEQoxmiiRJfBWKk76XtAFbczb9WAYpEByL2hbUqo7",
  "key32": "2J6eATNRSTLEsJeg6wKhrjN2XZ7pUwJV6Z1Whn9vtx1cJPLQb7Sj8sYFkXMwK7ytvszauwBFEcr3DMWs7HpCg8h7",
  "key33": "5dL7Xhwm1QPNJV8pDuxKaRsZAVUofCHUUn6X6QhRVjXoqPbEPD9KNsCXggeZGx623XTDQiZ5i1BXvZzGWR13uv5t",
  "key34": "4ExcTmjpJAp9edU1RfQb8LQPj1HvrgsoHTkUWNQw3wKWAiSY9QjDXsSN4eadaervM3LzjZk8zeidz6fsmGHBDaaq",
  "key35": "4U2FfuDFuJvSPvXuDmepFZUZ3JDuBotvX5raaBEyLLncheki5pmQYUpS3Z32aVEM9pJHwM2RVTzoPDqcJvFtEiLc",
  "key36": "3Pk4EFXYaTXbqi2C83mzu7bzpTw1CEmWmhowgdNSQDkHtjwHwiw6zhRLLNEigTdmxB6Foep4iYdxeLibR6BsUSyH",
  "key37": "4Cq2q2jQL4QFbJAbe7mS3KWHCyA2t7DhZGBiaLQ6UxuJ1xtjBsRgCBv3DhprjYok8ywFfeLAFXZHhkAtcyGFs7Lg",
  "key38": "4Levq3SFaNRDWbkWSWXXvkPo5dDXwvXM6atwyWEaEKcFFzLCwZRdxEh7yY5QsjpGZynqYaWH74j8DJrj2xb25jFL",
  "key39": "3jva4erzxWwP55dF4nscsXsGH4WAUNRnuJBeZdEi2JZBp6oztdL3hu9tqfq4HZzGHtF5Fw3Ay14X8kRGxkdCUwhs",
  "key40": "4SJY8Gi3TAupVS1JjLQSqxgR94byEJrkhqgYux2e5rMu4EuFWLbqe8ekmiAUzLi2fGJeBUsZY57AG8WZNG8RHTPe"
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
