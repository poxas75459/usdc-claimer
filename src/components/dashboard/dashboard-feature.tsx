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
    "3hQYXggSrbDBS4qrNbm48CohPeKjZEFgbJrjzNGXPqf6Hz32RPVYRdm6g7CDr1p5bReKhZWUfEGACVuqpQVM8sot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1d2riPRVU36o9dqHSaEbAtckUqv9REPpsM3YvT1y18dVoj7WLPE15DWsE2LoD3R1nuG1oxRsoKecRcVhhYDDKBw",
  "key1": "5oBVgaD69TuhejuUBkKxNzkKgXhSiHcfJGbGQFnvHPCZQExa2ATp6QXyH3cwbPGujxyHJUeUc5BhpNFzvMRwFpRr",
  "key2": "GTs2dobmyKDWXWdGvXZu4nKZdVpFxBSP7dxMNqJGynYhumTQvRQAqj8yGdDo3RerY3rM3oP9vCVx2rmNmMTU2Mf",
  "key3": "54FJaTVBd9RDX761GmDjUe79URaqU8maXkRjGi5rvYyYtoiMLoTeGNgo7FbbPYRNw9vyV1egi7VHVQunqVN2Vwsr",
  "key4": "35tkMqv6hgukQyALqERhSjo4aC4RCkmnudGent2bs3FPZXwbwRDUtHyasLuFsYAvGK9fzheLYcKnMshmSnVCSCjB",
  "key5": "3csYEG2VEyvEiRJBvoLgMUsmVBQN39Yb8at4SafU2sGazkUZ7GD7L17CkHUpBNjmdqKSmgSG7QufbumgEieZnAqT",
  "key6": "2WZLEFdrxBS6yCP9b433MVqi8bMJZpKKTPufTueXMLSousAxghfScAs6vaEULWrNw64236pR1GEeCaeZDyex9vLg",
  "key7": "658ymoQG3NDFF9HVvjJMXpf59AEKu5YWQkA19P61DAG2xQamxvi1zyXGroTivAaMD3Z4ypuykbxM63hsrbgbHEqP",
  "key8": "3AJ5m2rWALqceRsUzfQWVNtd5cMV7WtLV9BUbfTgs6WVk1BPd9Y5dpz2FpJcawz92Z4A7qjrTcQkCQfdewX8RUyo",
  "key9": "2qmA9G5U1T8nnL4JdphTWqos6qSgE6G88ebcLsaymidTXHvTVvA8MPBCZDxj94iEWFu3qZsdjA99RnmbC9oAZN1q",
  "key10": "5YugpxnbdPzoSQKK4iLCL7LFpwcodvb6BbtcX8aRw1kCjEt6dEkp6BBKk9kXkHobYxfnBsf77oc2sxXyfg5Y2UR3",
  "key11": "47QhmCReGDxHMBce2Cg8GRuWDp6pyTY3vD8Nu5aCfRYHa4TTitehFGRHVErmsD4VRpadqH8aecexCV7fcuH186u2",
  "key12": "4MWAutgthQNfocu7oX5YmtPH7geWB7SWck1Z6q1KeULV67j48uQqmwY1vRGBhSUqBXwmfMu5qeBGNfzXSZdQDrqE",
  "key13": "28vcNQ78UikTz5hKztgr67qgrPNvRwSoE92xaTcb9ke4WTJrxbJ3BvuU6wJ48dzFbigqTo5XxLJNv9A6LYftCHop",
  "key14": "2Wc9kSFaUmLRoDCEo3NcXPup1WMTp48Rvs5VZEC5fo4RC2WeT33FNPaWXtHb7BUbcFmZiEeEUBkr6NyrvajxLazD",
  "key15": "3h5nHVeRfXkgThrwMoNvDVGqHTYgp6jDT7eDBVt3FSDNN4b9LrUw4PD9Pj3UCernwzn2wuwsCsTqJdngetTN9xk5",
  "key16": "2dGB5aqHzVtXbrgPqdTaoSncHkQax6KYrZ7qNLSGRg4XXqJT1BUPVQYtb9rvHfQJzemAfc1vqWgnbkYfejXw7WGr",
  "key17": "5EbCJ4HQ57DNXcvAzRn6TQVMKz934JZJB6Y27shJqMRqyvwwNfocS22nEPTNFKG3f8JJR1DjRNDFBcHhcvaqxv9d",
  "key18": "4zmCU98uq8agAVFH1DP1mArzu6NbyJSZqSrmPZge6Wg8vTakKpjN9s7tYLAe4SXqDX8J6KAcdwf8deLmPWDUXzfZ",
  "key19": "4Qpmx7xLzsujcA5huLAmspY12X2gbLoCSyVD7YF5Tks1NMZESDodNxrhz6XXMVgTkBWkZhNj5s1SArn69tzcjUuo",
  "key20": "5rgz9ev7oVa5r87DyKjc3chrRzekhhp7U46zedeaVi2x4VUAhLCCESTCk6dxMNh6gHjgQs6k4TQYS95Edx5iq4qR",
  "key21": "597of81mDg2pLxRUd1m9YNqhByjQCCVukyKwkCDVAjcDnLgVJUMkjpWoNLZAidjxZHPfQTk6oVx4tJiCeQDtiN2z",
  "key22": "2BEPHfCAAx7uBJC4trC8L9RsEKyGeiJgiueoGzqPNygYhBB8uvUqr1XgjiBGtmh7Wko14fMiPf3zTZEH4rocwEr3",
  "key23": "2Aczh3whSm1C5F2y99rKFUnb8d9dv77kRiZY86hn3C3pKrrCt37CYLPhKmfEPPeDfasW1eiiXZuHkfksCvXKWj5R",
  "key24": "BKcmV9bXJdJYyeY8y4NhNpGchwLhVgG6c75ojAz8znJb5U4U7MPTeaTmeeBtaiboabzBEEuvSZTrBpowKtBjmAx",
  "key25": "3EZ8eNoYJ8N6y6mbjupG7yZcgdp5GcTnn4jMJxi3pzY5RJBQ9NyoyPDu29UYjwrLk8UyTXwDfH54SWnHvjetNgcm",
  "key26": "2kiKygnX68eWe6Z6CmYQBmXQUoS31ngJR3xryUyS1Hhotcn8bSLrWhrfKeGoaatCWWfR79qBB5YCYfQEpNiqPNe3",
  "key27": "4zvZAF4seMRyU58bejdBrYGKXyKqxkzhKtKwTFiVcTTz1u18eBzxpcvy5w6hJabR5FUQMAjjkZUTUBPsDBkPqu5Q",
  "key28": "3WZyvwnP7usVGv1anfSBXRzzKvQQbW3X4Q4Yv2q5WXe6MLraofdyhxkw7wrtYoxUnLLVFJnxFyoq7RcxW4piZoQE",
  "key29": "5bVhDqufGTutNqdejiwYQ5imi92mqQEXMnswJMjGLWXcxJXmxZXpARjR8JAXpwRLg3oEMsNhTzASb9b8UdMGVxpv",
  "key30": "4ArG5kr6x5qqiVrcTJiEjUTqYT9RGkkgMrpxM3RmDmxCsGVtvYont1uCvad4ttnzK4939QKyFwyQV6QtLeExuSP9",
  "key31": "4JmLEb7WXQuiQSgVZW3pvKZBp5zwyvDCpCsGhd9NRFmqEKNq3FknBjUfws6nZNTm2TNuU5GUFj8ZiippvNGQEGaP",
  "key32": "62fxhSLoSzXaVXv63Ue5xcFNamyqAakmnquPFwfKD5o4HuRFqbQv1gLsW9yRYRWWkCkWidDy9k5CkQMgeyX8tHqq",
  "key33": "4PZqQA4q5sg1dsC2AhWukUKwsaEeWfNScYBxVMNXH5GRVri2X3iHUp7gYBk6FWBJYZg1cMzuLtXJJbZmErNf9vw9",
  "key34": "49QutTrDPAQpF2GGzFUsMi8vCdgax4U7Xr1JMGK9ohZbnJhLxfu4cDL8uPxNh8jwxynYQ2jYuh3Ftvw1ukRZckb2",
  "key35": "4NpQzKRTFopt42heXkzj3b63h4SRF1StUMgUudiPbad14JCbgWJqhMFmaE5L1P9SQMkxVjaWzW4cHx9yDAwryXL7",
  "key36": "26fsB4P8WAPRik3TkwVShfApENuijjB2HPtTDEQ7HGpitZrELFWy7Kv596hJPGiMHMZEvzyamx4UQn7kHcvYQALx",
  "key37": "3zh5RagYawvWaE5bfwUQbS379VGJafKDUCPzT9W5rL8bnbc3aR58FtbMmjTKhaDCw83nkPPQmmuTUUJywW7TLpND",
  "key38": "W133RJKubv1znEy6HakkYxtfQbBpE4B8qC1raVxKouNykKpEn8qtEvrQQ8Ht1VYggQxbsnreiTwyUUESJ3CsScv",
  "key39": "yge9EPb87htSEPcvigQ1XWM1Xw6hYJHTgDLspoJ4Vfy5DcXu348Gxhf3RtrM5SCgMcsY8aF1Mp9oVdtSqbhkgU4",
  "key40": "3U1LVSWQmMxFHV6A3NCvZNNf4AZZ6RsRsXT9n7oK4y4SiPoBPpMDQiV5tQdaEcgP4fsFTGXvagpxayMELgsVauWT",
  "key41": "53C2PDjskfmFRG9aE6jbJSQupaJMxG5ek5CsV4qKiNMku9pVRn3EU9UP1pqG2cqVA7rNc2D2Y2pCPu1sNM7DETXq",
  "key42": "43SWjbVAHMLY6SSrRVLc2ZE7oESugr8k6L9rfDgTpdk1Z8bDUB2c9xsMRocLjrx19ktF2Y8E9jNPxqPZy3g8dm6P",
  "key43": "2b9S8gyndpU12Y8TPQHyrvEFx3GHr3Z3LDVq4cd4kohX7KwhjepubLG7cmsJA6Zi3ijEyqgPnCwtSijPdXH7WP3X",
  "key44": "2m211foE61CgHTk7dUA8cNHAPqWTKnfWsfsDzW1Yh8A9hSDRtyyDvJ2M8Q6iHT9EuRaApCbZERFYALS87zEaRjYa",
  "key45": "52EsrAeSNJYF9ohmRKHTsvrNY5yZzy5gixLi54yGxVaqExtSJprBitTrb1gHk5d1Ctt9yc5aWoMdALokjs8r7yzN",
  "key46": "sA2mbn8m5yLywUQs83YLuxcErpFS2ysjs4nS8sB227oSvibw4bDWwukzLR2gYAxM4Qerupz8FnjNqWcMShD3Bb4",
  "key47": "2YUMHdxczUypL9N3EndE6KJXTUvXTSt5LP6xQiUjeig616EGAhB1McvNZmBnK9zq2so7iQZuUbVsMBZd1BqpoSre"
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
