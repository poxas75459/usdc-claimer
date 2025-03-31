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
    "66Aqy6pnprnJxDT3zUvinhLmzpwEB3Y6BEjcxtWhUwfwVybLgrKqZqE6dCoypttcQGqa8bKUAZjnUiERLQJcHj3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P7PuYEEHZ7XupTcS3nD7mb5d7VsnLTbpYLfFJM9KyXA62cBqtGgb1jd1gwkaMoB89FGCzvnhnPtRGvj4En3id89",
  "key1": "t3Z3rWohDxjkTrQ7A3wBSHr4qf9fosaYCFpBpRwRWhtmrb8r2Z4nCnMWKtx9Cj6ERHEis17bom7DpQoip1EEvtP",
  "key2": "34JDvJsRS8RrgdzPuMj9XKNMe337b77RKL5LHofHciBanqn2cUjE7kWV19UqaAarCCpSV2wEBNJ2ofpsJyMhmnTu",
  "key3": "voDBfVYSWk2v7FCYGz5oUZhrhUXg7zi2JXY5ae341umrVNwVR6xdHJBdJZeS3Er6xK1pYXkKohcpYZKxPT3uCVe",
  "key4": "B27LwwXzbt9dZTffLFYyQDKz1ZQ3t9Q3uKJskyC31soX7cahZGq97Uw89xaMRZwawgPFe4weooR7m7XkdAJmJja",
  "key5": "2HqSk78YdcpRrwEYKf3xZaDmRsg3pyfE7S9M3JQimZgKRJPSJRTbZe65KMNzxgcnEDMNiuHAPPR8cjAdUfLEjXHU",
  "key6": "3azDTn4VJ6Hsp95grszX8pLfbjK5uS27cxWe3MDgUH7F98fcfKguWnsr7TgSMQs6oUb5Sa1EbSCmWwf6qvyvdgT1",
  "key7": "3vgGakfyDQXhCuygibnGBorKvfUQgFUwEetT2V5n7nYnuchpS1dVer5wy9LSGVqtSmLbnHRUHSXWoKKYVoihaWgV",
  "key8": "Yf245BxKfwgL4LaTuNontG7NGRzWzF6wWbUCTras8RVc96JYPQLa7UAroMbNqz7orRRoDKP3pmJfB9FKXZz5684",
  "key9": "WFF7rkPJu7yZedfBDyc6sPV4sw866RPkKx5xoDKZQSSdKCN8nybipr3c6CwtkXtFFF67rfgPJEWkpRcDaov3nYV",
  "key10": "3hve8zcZ8tERNXiUR4zD31RvPYNvkQLMiaaUzFkkAe5zsiFqfgN7ZACq3WiApUTrEgyrMyxRbYxA1NF6T3KMt29K",
  "key11": "5ZRyjcst1idWLREqGUVu2xNaXqp9ACnVeywuo1wHaV2MhRRbPrjMWb6y7hr6Bt46UCT68yuZiwQc7biH7MrET69L",
  "key12": "3cjayXjyRrvYXFRh4dTCRsNCk8yGsJUhjGtXqrEduQca7GdKZg5CCQLFpTjcLvrSPaAYd1Ng8wwxmrnRJQsg3Spp",
  "key13": "5eFmzJz2wzKLtctozUa4KQMSpEJZAG9X6R69QGJbhbsGM1Gz8vdbCrNxs9orTtXMWkBmxMU7gkQSZb9FBnRDFamh",
  "key14": "DpiJHi4jX9Vqxmo2VBN4yFMeATL2hL682jTJkFcS1Z9mZTkqQnj6rFesdBiNPyjkbxwAnEwH1tSE5yfdqDMDrKq",
  "key15": "M7mnwcQZjgPdD235ZXk3SasNVDuRzSCR1CXc1aZQ936FtXm7wmnTZ5wcMi53SvR1mfTaXqBKU5qorxdAx8kWWqY",
  "key16": "53W2zNKb4crBdxo72TddL1ZEoHP5bocQCYjBFxfGYEdrKMicap6PaA2uj8tc5B19jU3PMuPvKZEhX2Dm3mcxzgJc",
  "key17": "3GCVwbcTdFYwEEetV3wk4meqXMKpfqgxTpVJ7uB4rPrZRwYnjZnShR5LTdv7uL56ggVN5HY3bC6N2C9beacsraci",
  "key18": "5oi7K1NygRPu49d1F4TAWTybwxbePPSN8etNujtaMPAf4d1GdzZDYVqSeYQVSJg5tNMEgJ79gWWJnBieFX4ArLay",
  "key19": "2JNQWbrtj4qExMWVw3cgHfjwPwU1uSef68nszSrSXBJaP4j11nJFwNE4yo7sAruYqvDzXY68pAq3SZyV5RFb6ETU",
  "key20": "4S2ziCYbxFVzmRM2N75J21d15xWsU3LMzGwLFhFEFKzCyUYqPqKjkHqpwpLAk11ULXvPxtDjPtRLtCdgUpVSPXiN",
  "key21": "4WVdJ3xVVyXg6zijsqMrYuWjbGaKKvQjEua9LyAzADKFEP7NSk5DL4MNuBNKWiKnefqWNZFauGYcrBAPSuoiXg4U",
  "key22": "4BeE6zgVEu3o48RNF9Gv7nb6Rc6si15uEbFNSXUEz41zQMbMRQkAn6asYmKh8T2wjB7Dzum1sEtsxoE6fXKgpUeX",
  "key23": "aPiU4ehANDZKRRCC8XvXp9oHmxM1nc4PP13rXgvLLc7QEbNMJFArQ2wYW4sKupCMUeNvAD5fqZcs143fkgA2GSN",
  "key24": "5d1BPrMBiz2J7Hc3Q29gNXdJz4UNB3VqnUedpg4GkFkTrQo5s8F7tdVPtP2BiGPWNY2qLpxcgf4VTUKvCwwvpadE",
  "key25": "4g5JWDzQ5fY3YYuHvWNzGHoPU9LGVKHxiVej1s5XH44uMFrorMqtMT5hKac2jkprQQE7oUzeNRvpX9mvSp96ARp8",
  "key26": "2igLDzSka954op9goZCRTnUFBBem7ekb1wFmbZZ8iLKYAa2PJjekDJ3KyhfdavhhhP5Li2Ls595MaK2wjbCtb2r8",
  "key27": "2iyvVjFKu6pPKq23uHfTNNGodsDs6JqRjHqkV6kNH8uZkexJD6zJSC2VUZ1W2TLvxE8PLG8SZAPtpS2yfqHvt1zA",
  "key28": "3sLWMfEAg8BYxbxTYYaEL1LanUhZvaqPdBzt6aSwxVVRABCCi38mTxUvACFN3F16mBMUJdW58s6BsxFbiLTjL9BZ",
  "key29": "5WuXQzw6HQzQrCFnw8PyZM1sDMSZgdDNo1pL8T9N3jsYJ7FE8j3ZixMfEciGMoGYUX1Cf5HEa7hMgX8SPSH28sJX",
  "key30": "2rZTD87NWmgFqF6CorpLArMcgYHG88HDwLiu2mZRgTsG4pF3hpUrXdpVCc29gqDzQ8qtVhWxCifMSTSYDaG3xnHd",
  "key31": "61rXbCbJ5gQcuyPnLuJvpZjsQcnrvWLN4LrmpVo8nfq6DM9989DvoSwMBt9tehqwiMRfT5pcuTD1M3r4mEwek3JE",
  "key32": "4xT25xdVkdhEoTKm919TVZLQi1i86LSnB4PhQ3ZwBSzmT8UdtY8krmvmYoskrXCvRTySf3eKShobrkhEojxTuiif",
  "key33": "2BzWko3mAqrPMYRxWPZA5BfYKvFsZrZ2csW4zoL6gL25xmRPi1y9p6QSKN7ktAHh8GFVp8YyLHWguBnLi2JDz39g",
  "key34": "k7GRUMNajF5FyF3YMvCBE9j8N6tPiV1mYCiay4tkWwiiQ6HdHLRK38tEC9p8voZMjgtBSBNdTDsoCs2HxkZWP36",
  "key35": "2VAxfn553eTFB1wpF87qyysBtE2hnY566HBAgGWFLBa4ScDABgyRxRmkeUN3BNt5uXQHtPkiixPMjMqrkC2xBpr",
  "key36": "5UH9VkhuRBCagGEAXQSaArXECj1utJGPhRDRhok77FDXcrEP4yYf7bqLQbnosbQpHFkQUghzm97vHbg9rytjgAEn",
  "key37": "4WSpMdLynRcRexAjvqDsGrkivRWvcfLLy3SuY1QmoUn9zDmbSfDgQvZdDnfPPq4BTLnCtnqso5CVQNSsUP4YXys8",
  "key38": "5D1QCcjmmdYczevoQzTNKJZ9UFYmfKrT2thaBc2Yjnm1xfu8rEsFHbqBi64QU8ezPy51czmyqZA47HNx8ded24uW",
  "key39": "4NsExdArSzm7MAUX7UgJ2vxzEjrpu9rxp8frj21LCtSxeBgnfVp4oqEPXGANCttmwitmaqW64ybWby5JaHogxmrn",
  "key40": "5jRQexDKN74nTWTt4tTvdY5U3mZcYMHRDpaAuEn6wTX88wDSFnjDtTjnGUMXadsiFtU5S7WbYi883NGVwyyGvQX3",
  "key41": "2ZXUt1VpUrVaRdng5TZwiLaR95MMxBXjbbJmwR2UZKU1Y7gjhUGDXPRJMtsajPtu3U25znjWV2FSjw6zLQe7p9SB",
  "key42": "BNvFEZRuevLbbz2YCAY8zn4oKR1tTQn8sZkQ6nHwYFfREX6ejwxMidfiQpzPhFd2i8PYEV2HHqRZM2XfL49dKsp",
  "key43": "3gywErRfJCu7jKTncLzmXs5Sgp9c9Ls87uB1seY9Y1A55y8VtYVwyyHDoSSoS7b7n31XmD42PZUdoPsQg1wHArQ2",
  "key44": "34pPHxVZNdNLH9kkkeGq6Gm6Lge3TSdan1XYwRTD5tHfooNqhZQFQZ7nUNcvQciCpr8rKNF2cS2hgztAXcRJiod1",
  "key45": "4TpePM1gEwM3Q3nD27LBy7nNVJaq5DSKeK6bRTZv8JZ8EWAdSZns2QTfeaoVyhLjDGAsMuepPSepAkeeyNxnSMph",
  "key46": "UAnau9BKFokLahMyuS73wxnPhUpNrTkB34u5PPtriCSn4PsFf9n3BtzUeGzpAwZymrHAQUGQEeZQ7N4WQ38iB3s",
  "key47": "7oRfadwuy4LjYef7ho2DajmFbXLbXFUmFfmiZzCq8XHwAErEqk5UQzem1Vvoue2GshtJqAT2rQYvudyxWLFjdgE",
  "key48": "28sht267hfjCNwuXvKVfQQ17mdWicisCcAwuvfTG17Q4yMN1x67dfe9oH5upGg887Nkdjbe7kJeoWNrceNubppMd"
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
