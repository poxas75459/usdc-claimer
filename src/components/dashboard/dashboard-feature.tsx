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
    "29i3cpPtwenycAyPH6BRFbwGbY6AF39vim9fwoep94DxxDNq84MZPewB3qGFY6sS8uaayS5mMj32BcMZr49cC3xM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rtnDztNrPU8fE9r24fV4gcTeL5v8dPVqbcGkKLL2koPL1MYVTQUiq9zg5U9p7xs6QAV2nH7iFLBt86DbV8a6YXt",
  "key1": "4iciMAzse8YqK4n5BJPbuQDnncgP6kyGct2uWro1hKcawtQvFokrrvEExiQSF4K3rhKd9aEt4bpQQBMCiaWi56ha",
  "key2": "2V9pi3rPRkshJMiExHztpHRazuDUMDD2Nh51GoLia8y95FRLGpNqhSewQu15j3TkR41kxKmd8dVjYFYtEYkQx8xs",
  "key3": "3ep1mHUaNsEX9dhvuEL2i7MiM4ZwiKRT7ro5ThqSZ9h3eRc3pbGUu4RUxjGTqeBrFb2U7SfjtewHU2P8EGpDvECT",
  "key4": "2w44ckZhsuahkb1ntYZoY57rGK2CpPBsGLMj2XVzTS17bSc4ZmHEjuFWeMpVCg3bbed4jLjHP7LsYF84axjcgyoS",
  "key5": "4wkpC7abstvWQ8WQC4w37r1Rp12ooNUenQkb6Wd94oTGX6cNLwM4W9otAiLYAty32bRTf88TbVpGWYAx2bTir3U",
  "key6": "559dhQG58j5Vq4dDMx4ppuMgqqVaixhRqdkK8WFYoTZU4YdCPD3jDi4ft6uVdLQvd5fWsAmyXpnJUJg6cbF1CHxS",
  "key7": "3kmg8QusfWJaqmx2gdc6rigrDWTcqFVp8jnYFJ3BZ2x4ePTYkTafryzwX6fjQtfw5615SEvZenevixm7xsJR2SHn",
  "key8": "3ANr36Bqexo5yoMBU7anFTbS9huujMK5bTDtPsUV7mh8uckWyDJmrfhVPUrmTvyLufpSnPt8DPopYmAoqRDj3rAi",
  "key9": "5G8ZAGdsncrymkT26Gs1pQ8HoyKwiuiHs4WsCPkXyGvm2HEK57RbjPYvG94axTqmDbU4Q2tW2nWXUTREvrKVNnfF",
  "key10": "5hzRWGiZJ21f5xy5HDwBkhNN5uKJbmCJxx3nZVxZRXUPXob8y6n7yHsZ8PtF2tWZDqWS7h2ew6s5QAtJuckn2bWc",
  "key11": "4mJvtgF6oYNTS8dKc82nbBQZ8TJP4sb6GvUyiDS24ZZWPr5vx3DRPD6qUWt5TLg9dRJw7NckzcvNrWwYRbVUwL6h",
  "key12": "33Y66h7WadECNLiJSe1Jp2uYeYPz4skqcUt8iNHMtH4rFiXoC95PbtK5WYHZVbZBeZsKSv7HcK2q7cUPTCwJnFLJ",
  "key13": "sRPLiVEBdSgtBNtXURJdEd83WS1Mt3bpSG8eoBorgWK22uL7DN3Hw7yTUysXKT3du7MKwZBXhrF2UaUzmQdJDvU",
  "key14": "4JFpvCk5hMQP21c9Cp1PLTaRZJG4pzZhPqPtyDEsAYn2XcxXDSm3bRv7GvYhE95m4f9Em8CxZ7qnmTKjXKkuKM83",
  "key15": "fYN2kcAHwRyYrvX6R1qtVMHhwoVRjfzmiCtNPw3ZYvmAV2WwHVPdtmStQQH3bNaTGRrGuRtoxbNa41g45q6F6bn",
  "key16": "36wE3CunNct4ag6Gkzv99b36UkDcio5UyYdHyvFyK9VVNHM91NrB6STQaj18iKbW3PRFoim1j4Q6hmDv7ezz4hYu",
  "key17": "26P11cb94J1e77oqjwTCKnK3jfGeEuG9i7VUw3tpMDcwXtKprLYRsVUHnMB5LQiqFpGQ8YRBiVyMzc11xaXJYZdA",
  "key18": "4EaByfqZFUnXXjZQmjUbcQGn1WqUYmzXqjSebZWmbH5zm9Kf1vJavijGQ3VYwatXECwqrD3kwNkUtu8PgcuqTJir",
  "key19": "5huVwWrsiGDqDiqz5dixtp4wH6YjWNgBv1mLpLbs8A7qj9qgvuEsTrAPxxPYzvsszVEtWgyMoTfduWHGSZ3BurQ6",
  "key20": "2PiBXFmffrhaeEng6myzMuMTDek9EzLcWvA8nv76aaWQzqLP4CzSQzJMhTpC2wprhqSafqd7ohcTBNRmSd64pR7A",
  "key21": "5icVspos61XJivnNDvJirmiYed8gBzJUfJnNBwX5ej4PgVocTkSthbBobdQyHYjLsYAS8yWG4k5N9Gk1Fob9Awhp",
  "key22": "4CYikNKZtzRW6GPik43gAe1NytyJjGTWSMuQwvsmMzKZcbWp8DnXBQNvp8BDA6PtNKP9XH4M4xUU1JzL3eAWnNwh",
  "key23": "4zPh1wQ229Pkk3UBvA52Ayh8AbaWPvDQ38sqEa7mAPi8gPR3FdNGfVEkf1tAJNHUe5d1GH8zMzFtcCbKt5fPKQAS",
  "key24": "5NgJTowT1rwYqnDjP2dUw3E4TSTfcEnMPf6rpzMUpQV3G3mEDVh2xf9oMH1gQjmrwfh8DHVUpgjTfdYJDJFnTFZF",
  "key25": "kPUQxPpRzPpWGmotLzveoUtCLWDb5mqiA5YM6pUkUnLKYZH9gA1ES1NdFYb2jxm2MQyVv5iAyjJQe3PYuFPZn8y",
  "key26": "5MQN5TRo3n1Egipbahga46QFBdCvFHgruegNnRVq4NND7oascmncXtwUZZjkSKM6v2KwTUftkvQTN18uyXBDWtdu",
  "key27": "KHrZM3VH9mfTUeme7maA42NzbtrYoqxHJgs1DewVPaZqfZSjYv638U7w2DDKZUikeoq4vUjpUWtiNsFkWojTcuY",
  "key28": "4kUESaW6fu6BAvx59FWDMe4d3iNYXGGPQEgWrF5dSVYebx7CbUXHwWmc5eRDWMFEiorhRCAEzx2GZBcmhch6hxRD",
  "key29": "31HdZ8he4hH2EPEkHXihjDNyA8juWDXAEmEsyc8YNoEvPZoY5dRanRaoTfqoEENsEi4n6Tp7YJBS51EBBRoLSs3A",
  "key30": "2ULHsMdxCqCpDdfBP2vBbEPt8unxMYDdu2MifV5QMaqhj24BExvECJSU5psrdAny5G9c7sFqRs3Kodt7G4RUr3az",
  "key31": "2ugQwZTRu3XaJe8cBh4o6PDXrqmGuvEbjPNNK5SZwnUj5pxHXRWAxrJUm8Um3uD64A3DXBwobzzLeRmBqmGPqoEK",
  "key32": "4sEnbwYfY1978mXiq6Hy6RWjakAuVpnWss5vqQJzFc6K9ptirHDrM9xzbokH93h47QEEoogrWnHLUGYhFcBMXvbg",
  "key33": "4oMTgGUGm9nQ9s1z8Nrr92rV6dLEMNJiC9GY8wX9P8P6AZCb64EcQemEYjiTeifkGGuGxgB1rGbe9QLxaHLE2jo8",
  "key34": "3rxjQg4SRTZhG3udAj8QaUC6h313XDv4ircBSab9BSoiPGn7A3gbvBTNDXEexy14PYnm8f35qJxNyjdEG7FJ8wg7",
  "key35": "2U6efqikWAPYs8JjvngPvoqrtpFJfwHfSwUfqEUuBqXbpXReSA5HwJ5Kpq9KxiK2FgE24g6pdeb3eEYBBQPTPgiY",
  "key36": "3bkL7W5tEeESjkodjYAmFMsv9npw9LpriJSzhbWc3g8LvxTmNbh8iQZzcaM4qzdzq1NDVnjJArtusjbUjFiWZw23",
  "key37": "55NQNDYLYkanTNMaQeYhkVB99Kkadh1mtSmW4YeYc1yjBP5Yb8ZtLEmjxjPntykzAd3hYyDTKiN7quGD5aekmnAR",
  "key38": "2choey7YejFDwKb45Zh6fpJGCAN3TgzXWbHjvSACQR6EZ1VN6aiKpSdzrGQVSgip6cVuc8vtvNF51CPWCaraQdcv",
  "key39": "5xePGQJ7SmoQNSMdph5fCaYXuuCZLftPhhLjTQqBiqSsJXuh1NCQ2fL4D6e4cbEP36TfKbVpbAsaoaCDCHS7hm7R"
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
