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
    "2tdur2g8L6MduDM28p9j9anAhp3hgFc9HnFidvDWx2T8peryJf6gi68Z4FaYiKxoiRUgnF5H3CtHRWSUe1fxj3MG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yezFW2bHX3EF6ZZQ7ruUinThg8k7fvt4P4VvGcUrYD7pV7qHt3TwQBiUv3oXqhwMK2sQmqTEvBeBUupoKCAP7Ty",
  "key1": "2M6wu7uTYHytV8vKyfzFFoi44mfGssgVo27Ftmz94Q7HsATqYeZi8TRyeuyNW9AEPJCAkbtC2NFmBFry712dMKgs",
  "key2": "4yPZipFVFoFZuKAKz5wL86RnAZj9sxt2gQSNG5jcSsmjAyJnGBMxU5ZKxT8gVpmCKS5jXgC9FYuSh4PUwtNs6r9u",
  "key3": "2ENquyUxTJATLmb3piPKpKdyBsVCUEonUev6Scr7g2mbFuBH1K6iqA9a4aiiyEzdQUVvnCxtnVBcRxxdMmjXFstL",
  "key4": "2gcMuZtuo66331VGx1NdovXdt5TJ7Py1jeiifjjHr6nyavTRJqocvQ23iYzvNU2RvKKzB3YnJnfSF5F6wg1Sp7QT",
  "key5": "2HuHSVKyFV5m2U6ddpPunMfcDMRdA4YdFFDJbCFoevb5dAPSabr667cHkJWEsXzkfTu2Xouj2tUTx5rCi1cfsarJ",
  "key6": "2dCz3kcXgbUqETG33y6g7TFyDZtYK3roXzwoUJ7ePRo4zXwN6hE3ZLiaYRaMC93R2sX4PXYKihdkG1sMeZpmyyDF",
  "key7": "2cv3wcnrUhKJDVzzxPHkKrnXGDsHX6C23tA66fzhcMDxRpTigqJcjsGosKo3YAeFfW2t7Wq9ytGzfpeh3xY8xCNC",
  "key8": "2J9y3tiqQLEbDpk9LgbAbBNeZtKP1ncrtgYek5bx6Bgfur48qnSmCiC1A91gx6bwZCHgqqcmc1gLhoZkHykw3kin",
  "key9": "2gpLYwwNRJ1TyNNrZTbxau389tmp4BbqLhfActnkZr9BFbTvcoek9t3cvTpfgEFC4rBUJVZamqEnhLdZE7FPBN6X",
  "key10": "33HgfDp79icdwFJsjUGkDMS8mGCRdUFCe4dx7RyoAocgbRuaKzZZZtzr49rd8oBbH63TU68MCb3G6MjaZxBBFWcG",
  "key11": "2S6qmvupto44ayr7NGCMtqNvCjhTjsaCV9EuhRRwD9TKbuXsqukVDxKFkPJxnpR7zRy7Sn9NUAJEYFA9Qqz3G6GE",
  "key12": "h2ZjfoZrxxusL14kXELbRWWtajnTrW1uEXyskZynhyXyZRsJVp4koPnZJVZupr9cX1sPaGCGxt9qKWPHSDk4XLn",
  "key13": "5Bho6wevaKwS1k3MasXpdxWVSdBnsFfMg2yRLdTQvFUUxXf5znLVMSQh9NQ6KMD3SYo6pJxixQ1mBXRKd8tNY9Df",
  "key14": "3Z7aJhLgAeS1hEvuJ2QvA9eUSQbVARoxnTf6QqR8rbEkDiXpPbWUTkmRoTbi6FeXFx1wy8x9BvEikGTpe4c6zNgs",
  "key15": "pQsTw8UjpoQunXL2sP9ksfrGcLrsnTs5LtF2miH6StTuhVVMsPDNY5bvzAJotbNtyxvyf2AyAxhfHHujieWF25z",
  "key16": "2bnar8ESzsR14LixBN7dVnL7kj8TWCDzuBomsbCtUNHjMwuag4B9rVCTgdvZpi3XWnUiT2CDsn7aFyKoh5HcMrsn",
  "key17": "4wVeadF6Tamwn4yVnHEvFkVBSN7RmnAPRuZvLevRkdyysPos7Wzp2yPK6aaUbr8yiz58mH1hUnGZskzrhnDna5si",
  "key18": "VrGvKdjQKACiXr1tDy99A5ewVS6RC3yQYfYckGtjZow7Aey3KhThxHbEtA3nX8mKZndihbCaVnBRtHRkcTk78f4",
  "key19": "53f31w6syTnq6Tf4SAeEfWvRBVf55q5czVKToZVG2CtQkbcBMmiN8ktjJXAHdQSDCy1TW1CjLSLt6NMXmPtEtAdU",
  "key20": "2caUxpvNi6BXAxZ6m18tSoUziMoo4Epp737aGuQ51jFjs1hStJRP9ZBxe2hFttwKGwa3TGDgvdkPU2TCFWvJw3D4",
  "key21": "2DnEf8ykGV7HbQhvc49oNTXmNLqJLorHoGakt7377A5kcH4694NS4SkfjJy8pHpi6iSB24cnVcmfHjtqRE6wPp8D",
  "key22": "4grHwR6qLfKs7poxfh522MHXihFdogA1axrZVXoWfkVChj9Pe9tPr1RdfSeGfM7TGzGkVVms2CU5nkctaJRJXax6",
  "key23": "6452BJ4Lq8vkRseudmFktrY6ja82fsLUWNEEnfaDXJkyk59uxjx6Cs11dZqWwUjQ9RuYLfzU42gtzMg1DSx7F46g",
  "key24": "5LCNzsNrukp6GeqWZHiMWeA48fxGoTYaoUxrD7xKJgh8xJC2mm5ovwFvnWw6FYg3QNQCYZvbDYqbhaARuiHUUTZe",
  "key25": "w4JS2jLRv7x6u8SCpDRqkPRhELGryG9NDKAWWqDj2gnWwxxjsHjDBdEKEgawrYXcn6VWrvPrGJVaU2i4Qg26HUb",
  "key26": "2ynFknDNvWHb1HMsaJcWKCDm7FY9frBZSXqxY3DCYh51BK59f9T9N5T5JmLSbwYbcrKm1pgss2HP1iEBp4RHqZXG",
  "key27": "41cP5ZGs9rKKPydcGX9jd7sV7noj4THmTV9hF4UEXsvXBzJU4Am59DVhytDiHRySTLsHNf2LwXgRoHLv7m87TjvC",
  "key28": "37G2c3HcNJPrLWNPeeVQVwPSYwYFPhkp7N8fsMzD1knGpriH4XdFDuJaD49wdNT3LUGuBAywaDo74U614HeEXV2S",
  "key29": "2yx5MmUUtNRXeFikQNo8S4HTvg9MBL7wo6LkkxWY7rJLuWo5YVvtCVEzSGPbpe5HcdqCTN6E7DyvWytqKS6hJraZ",
  "key30": "129L4PWJBnfXtCVWARAoYFDQaGKxot76pDoCujCXpyxs2qPUMwbtEL2xgxiXZ2S1HwNb2yDUhDzmPP8X5FMTgMQq",
  "key31": "3s7112yBuEfuQEVC8n8VS7SU5nXeG9uQhaQXETMrvSibt6cuUEtJsQR276jxZunj9pwv7CbsAS6xrwfCfWwTQJsK",
  "key32": "5cC4ZjRDjZkp1shq1kJWveij72mUz1imvP6669Uk5HeJMamUfYTM1j4732SDWYNGE22nWtC9bgTqGXgjyr8kLkty",
  "key33": "4QCu4HFttEaf3h6RYGfxwgPZZrUREdJCg7KrVYNAJkvtitviQub6TMfMjhmYD9Q2K4eBxvvuRrtuCqFqkjG1Bcr7",
  "key34": "26eruDckGuqhLyFBpk51Aa1n5b9sscEVuRjKVb8ZkpJCoakvMgjYWS1KSNW8UAXsaSxUVqVWx9XHywEJ9pWmUydE",
  "key35": "2iDo2nwMPQBF6mY3it34DrXePNAqYmtnQqcE4ZPYX11dCmU6oUinx1P6z9MotjoGB6n3MewSqkxkCWDFWn8tD32e",
  "key36": "4khhyhfFXGFbpz3moMgBeeQyjsbzv5dXk2KSdp2mvqUWnq4m2B2miZF7YwUdZJcx3wDinpx1D9b5HK5ENz8xMtpU",
  "key37": "4frRjj35TbpLMAWHbykMxjvaXv7Bhh1YdeYspEbvYMpCcrrozdSGQrt5hsMLYaw5zFsKubUNz12JJZTmdMLACcjd",
  "key38": "3vh52HxpB9vzgkPtwtgP9883zHXpcwJ4xtU72YQf6gynnukJngSvTaroTT523ByBuadqgJhdGwjPLhqJG95zeL2z",
  "key39": "511FM9ugu1LmhLkYgA9S284miVgt6SUPRhcMQNxSgHVyV8LzseUjL7Qku99eTM9DKsiE3opFxATJsQHPsEQoZhNV",
  "key40": "5ZQGC3YNMnfCkY3QF7fz8GPKFDfuBbUhEBFR6wk9iGhNFP18L4djMCC2sFP6N579CFfztimVQHQCt2XYokX7rZSt",
  "key41": "4EaryxSxoF8bwoCT7r2KjCJW8fJGENyfheZLCXCnhL4cZspchquCTXC4TiDhJMXxLXTWyfZDPCJd8nkjRgMcxQH7",
  "key42": "5sZV2MuSGnvFUANDXLC4N78G32peT8bQwaQxJqTartcoCj4DooM8XMCPbF3TjrxTYQTkq7q6Aj5PrJRh9yHAHgZ3",
  "key43": "2iYr9RkRPqp84UwLgR4vCcMAcPRL3kmfMASmW7nJmp1FCdRWFZLQDcRnEpg928vDLAjpVGwqrvcPyUo2ptk8SGBk",
  "key44": "3SotwCx5Aqhh6ENnQ71XQ8Qvw5xchSPsPssQx171Lk5zYmJXgstj4JNeZbayByuFrNBG5MBaZyM6EDgUhtTbfXnK",
  "key45": "4kB3DcmiGSsWZYbQzj7mAve648gugEh1sN9mmmXR8wTg5UR5FftTqi32xEWtJXzrNpMq7w9ULbo97Rnzw8YVKJFs"
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
