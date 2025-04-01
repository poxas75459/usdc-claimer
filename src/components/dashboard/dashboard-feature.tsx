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
    "26wx3C82yHbuZg5QvzaRgCdmECUGMLecKgg2y4S2DA6TaLmgtK1urYxhNxV9jfyub8SYjr6u6MUvcGzkeBFetRtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xqcqbeUTh3wt2Ah4ED22hvdLFxigNH7mqpniR6MtVcnWjPCTg7Zf5QCVU5hnUmRZrkq3mmjGgQwvzyBrsE8pJfv",
  "key1": "32dSkjQFVT4Szq9S97rkJcNtrt2sMzCdcmeCkNHXDrLnx7eh7hywArV3xJgSDCW8T9ih9GDuyrrk7s9rhXGDxJEU",
  "key2": "vXcBztZ6qQ8N1hknHuKZP6ZhZeZXcNHaouqsS4U3NZMwZzvcRgYUNfjnqtz5gmUM9W9uVr87ETCjUJcoqzTP8Wh",
  "key3": "2jA2pg8canYop45EyD1csPYKY39JEYVMmCjQg4oyA1eCiVSAcjn8TT1viWeSmGWpHUrr6FocRfm8NKoxaka5T4Ja",
  "key4": "sSWFCoASforEzfVnyPF6w5mAeM9pRvhQiXZ2emFtNbK3j5k4B2D9STjkuHrHzCmvV9BJAeVQzvaenJ4oCyZrEKF",
  "key5": "29PbJCTmVmddF6EGGVHQePuZ45YDEx6bDDebi2pDnUkRdMe2wEnQgGCFmcXo9f7xxzjKCfUhWk6AAnReJKCEcp5v",
  "key6": "S5LR5UVuwPhGr1UJmtyQmTBvmN8NtbzzfBJ9tEdGwuGLbaewBgJsRFb25bh1qD2KKW3qzCpCLe11vgjTsHrwsB4",
  "key7": "mPrPSdURe7wdpb8wSMVpNCjmKiBftqcbPHUjgesy4cKRnM3d92xs6fNXueJD7w6L7VHfb7t32Hrg41j8gGk8FG3",
  "key8": "qe1rvRsgwuQSLcZmwz5qKkRTBLDpHyRU31d1ishzkW7qz61wrGnPFK89wumjXNpxuFsruStEve8RsuDA3b1aAXu",
  "key9": "55R1gTXLU8vfXLaeGE8iUxh6ASV6QNFVMhfzqipjqcqsJNhqvLGoPSk8gxeSoyMKDiwTU117ZvhNKb8B5336A7Zx",
  "key10": "2QqHyjGhnyrGDMq9Eb11brgsiAYF1vbKuFkSaMTSGrtnPC6Sx9aHGj7pKMKrTUqMy39D2WXU4fAEFJrD5NoB51SZ",
  "key11": "3vk1ii4ToHGfiyf1cv2nLEzeGQBKVDbMkpcuqwZus4cG6ZDbZ4dW4keoHcHuXwTAmAQdtD5MR2C3Uxc5LGpnPERu",
  "key12": "tXuEq36eUkUQ4pLHg6igVKPDLLEeRuLmynHAZxrmmir42R5tmGgknsX1FMtkJXDYEBbfiEgfChqnSsQkjUyZhaQ",
  "key13": "4tpP1Qa9mwDoiEXHosNUhvnxyxzqfoCeFoBam7rt3QGvNqS7DNBYr8amZCqm9B5dUYHBJEt2cru33M6e25boB44Q",
  "key14": "5HvUqpCo4S5EcNV8wiRDj9KdByBPgkitSBrsQkDhfWtfj4U8YdniVB2bd2wfbpnR5fkeR9SJHU1o5E3Dt3JaTKAe",
  "key15": "2HxFiA19P74FRuJMr8de24aqsZyF22t7KLxUjuqzuMZb7gwfY7MqzVcUqp652WJuoGmTieV6LXB141m7oKbGQ85N",
  "key16": "27FP1xd5zaxLwfV76fF8viqiSeUHjMdi2edEYkLqLWdT3TQ7sAHCnnPEmpuNBzNw66PNsUkjyEya42xbPZcmtZaa",
  "key17": "3i1schbXjEpkmM4ivkhGJBvNDj1VCRYErqSQAH6YVPBMDC8vrzyzrQxf27JXXRgba8TA1PhDtyPyYvMrkjMdc8Vm",
  "key18": "4Jxp795mxJxpnFpYhrqAfs7TpnBZ6txFMAFmDa67MhVX1RKRBTAi5UWvQM6YzfrhGn9sxZGKyharVd11uLqqR3Pn",
  "key19": "3XDEFjNuYGyN4dytCC5qJyiVNRr7wLfz78qdgS1K1tquvTYPtY8w1qNhswGUtJeq1ZGnyx1esGxTx2KSDQkAoVTU",
  "key20": "5biHi8ztvEecGWNgffGrGRqEmsJ3PqFZiS57LU3u6buttTXcjVhVyCpMfPJTKTHYhcHmojgnjTfkciyQaS8yejxG",
  "key21": "4hrKbNwuQnQkMqM5mE26dBnGAXVkKqbSdA9XNB5tszMHvMRW1dfpd1upYacaVQUe6yLKnUSJxihtFVkhKETSiwFz",
  "key22": "4ayJX8Rhnop5hbpsuhBF53QSmJp9QjWQeh3pdUByR9ZbZ9f9Qchdkp1mmqSWJqmRpXQHVgQjbrY4fpXynsWXwbTU",
  "key23": "25s6FmxuNyh61Dm3qNvdrzDpZEdM2pg7cjdfExUX4Pv8YVPYDiWinWy63BPGCFSrdkSvi3oSZrGTxPnoZcgWSuLG",
  "key24": "5V9tbyq5J6dPpcLUTxiAp45Vjv8qPqJCAngVA745Yys54mVAmh9r7MJmDuMtgU7k7m86W3ssQfnT3cXSSDCNrWTf",
  "key25": "ouJ1WsLQzG2Ur8NeSWZGFTHZ5bpGHYPMKDqnzmmU5qPYeYTyDzW9X3ehHdadhhxC5utPGFXf7rvQfHkLtkSSVSG",
  "key26": "3acBPftmPxwTnwoy69EFXPWH9ScqmYFghAUPN6qsG4JxcxVjUQUgjYhcUKkgCsTok6nQ68NVCBX9LYij5ZVYhsVv",
  "key27": "3vQ12ZbZQ723q31nGdyLwcnyrC3Kk1KBNbrxnoJDCCmZTzqCHnN4Cq2vJpKBhJE67GWwtgCapjDVb6E3vCLja17e",
  "key28": "4mnHHW45Pm1WUheFKHuiUmXeSFY9th6KHSthUmHuyThvHANsdwgPqrFcwfmGUfGpL5jfPMpUF1F1psVtvyDqs1rR",
  "key29": "3TX71XPE8uNF2bgkzC9ZYghERZiZiXH8aggiejAthxCtnasCEPCm5wwYjxtzHLwyHNvRCPsiJLaJProVQbuYxjf9",
  "key30": "4di4Zsvs4VXwJjPxbksGhdxKwEACbLrTG1DRuV5Xc7zsytLCH3rMtfqrJg2MSbGG5sLCHhec7nR5MMduUzA3jtMa",
  "key31": "57mdKXhvpuiefh5MQTFNbuNAeraGQmqS8SiiUgZ2enmaqSzndATYDeBVZsZdmMWUFzmVpTSzBgkxGhFwa9jaB8y1",
  "key32": "5KFYJ8M3UH2Vrex9JfmvtAJkbSkMvzAQ3PMPkzS1fvdJAa1QGKqXgqHAJ3N9q2Br5njzyL723XgBGumHr8bBRk39",
  "key33": "3m8k7HwXsJxG2EofEyG9cg94SrBqWQDYcW2rjvGNSC2uqzm9Ej5mKMYmSsXptgDuyPN41xMuNuFtAqy2aDPRix5M",
  "key34": "3swMbraMWApWo5HWs34Y3tH1yqtJ7boknS9debgVzTwzdFTZNiyqnGXkMXPtUdaoZbg5sUb9PkQqYVaDAa85scjA",
  "key35": "3RDdzZmegQ9uzasQxpqtb1izv9TRQDQQ3oFNqQDcaMkskXJdkK5XJpMVynJ4MBacU1eRPygJTNxYdgySDUDuwYc4",
  "key36": "dQ26eKyuuQfnDmyLp3GejZAQ7f5MvW5VWzQXdeus9TXqZCRJGuH51BQiVq2ECyrqC29cwMGBnqdghRXVvQZreYm",
  "key37": "uQpDQ4STVec4Uzk6uRcEsfCxPWHjjXPMSH598rKU8gjw4uFsc5eX1pxsD4EXNSWF566C42DASuzvW3yxE2pHnwK",
  "key38": "5bPpoxZTCoHjBs59zxKDhwVK5ehd411fX67jd1Fy2p9LAZXcXf9TEiqPNJzwqhXja9JFSxRBVqGwBBrBe9eUiZBV",
  "key39": "UCNiJpNvy16jDSGbXWva3U2apyJGL5y2v52boL5KVBt7naRTmtnC7Wc763u8T7QhtRqLnPVqGFLhwVuuvXe7nxK",
  "key40": "RX3oiWbZeG7hm85nAzvG6hifLgPjc3JyjwTVKQY9Tf7rv7Svm7BuZFKxr9r4MskZew9vFz7aogf5to6k4Z826Bs",
  "key41": "Rx7TxGcXuruJukmakxZ1BmpFd6dADtTVhcGPappENdtUCV5QWZgwPKAt2Q8ohomZjjn8nfNojJooG1tTEd2DxTz",
  "key42": "UkYoVQwveMoJSMtbhkdVZ2x7LUMrDd8xFF69B2S7UtyJqi36vBjjBsQxTZDwPskdeeouEyqVXpTWKKSAdBwF7Fg",
  "key43": "3iszZxTRtQk2Pii1d34CztEe57i8sXWJm8K55JsSikpvnKxsgwGQdisnRMnED6nn39L2TfH4xQRabsoMQ4GWPg6g",
  "key44": "347CHFHJJsA9RLLMf8sgd7eenjcLqwMaBSYb8TqyG1gDYeLTCLRBQycVbW5SXpVVypTYy4N5RqVXCdUYYVvPCbhd",
  "key45": "5RAB1BWSpUY6x8G6bUNw9MHwvSvJwGh1jfW556L6EaJCASek5GRQVEPZDGpVfaTZwE6nvEVQ34Vpt8Drir2LBKSw"
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
