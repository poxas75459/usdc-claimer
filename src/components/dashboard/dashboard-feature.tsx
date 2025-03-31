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
    "3pCpHXeXV6fmRyM35gJt1Rc78LmapfXG4mjJ5DUoQt55SGXmivmgh72gkJ9eorNDx2rdtTbkFgmp5oSDDeHi34Vd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tgnVzdon45XaAzLMraAPSxTLHXznWR4t5fegic2eS1hSunYEUsnjZ3Lwm3gLu2Y5oFsC2PtxXf6VRYwmtsaYur3",
  "key1": "3ZtZCKTpCZhaJQbVCNEDXgVaBa3Fgots6E4vfUGRdSjz25FteadYhHK7sYkJM1kS8odjNUHPMLJBedSm1qERSkb8",
  "key2": "5i6sYQz9wvwfi2FX3X1zzNaV6KQGTuzzUedTHEibp7YXTqvNyQ8ULSHT2gcv5jBEDfLUGJodRB3tniDHtha2TAos",
  "key3": "4LmFRN84KENPvsEiZDcrbAWQLif7Q8L2UFRmrgs4Bq5FKtNAhqxb6LspswVov9DE6Ec1wxP5ozua6Dttb9RL3TTi",
  "key4": "64MSv3NGQYwzPYc3VX95nXivzDJJUJJ1V5un5CcWVMmydsLNg2xqD1i5qz6adhMyGL4HwAmabunsHoTNXvYvTHqH",
  "key5": "2XR8BpiANQz3KbhgLTx6Pdm6Ztti2ESeWXsAjwZiDYLGmp61EV711yycz83d9ERPj4FRkKPCWhU5VGLEGbEoZwM8",
  "key6": "5zacbGXrfUYHPUbygNXC5UczvduaBMLQE77uMjRte37RVAftoCZ91UDzbDi3rX6Pedi9pWUUgQMocynej9p4S6h4",
  "key7": "3TNWSr46dcXtzy3QTzW6CuN3LyMguizmKcsNxQCCX1a8cnDaxv54xBNUoqeyGKUbGPJB97FXw7DzVNZz86qdxRNy",
  "key8": "3JVKaei2gNzpnKngSfMQWxafqafJVehLd7KL36NFpJwiLm7MGyuQdFw1oiEEy5YtJwghJ39HNb7d14W5Co2gQmMH",
  "key9": "ji69rgbpsFSuMpUqR6YtTbrK96qPakhhfK1bTCSK7QnKswn6XyySzDF6NW9jtupZhThRGWGqwr1ATv3sD3wxQhX",
  "key10": "3KuVxDa43xWXrKVN844sfwYPyaWoi4vg6WR3vvL7fPB9zubqJf8Ugt1LxqtVgRmYEApWhixF3rP69Mv6Ad4VuW8n",
  "key11": "4LS49H7X7R5KvRuYy6FZKTQiaMVhr8L9m9cVNsUXrYTeeW32iksXNfrA8QLqfiU92caKbVGXCF8jPVMWb7GfZinN",
  "key12": "28WS5FuLgfSyb9J9cmea79RDc4dH8A6wtHxnQqirziPR2PEqcLy3L2SPxLLkGA6McDpidrtPSczSUSktNG6RsmHz",
  "key13": "LG4QBsMr1FQJJKpQgcspGxXT1GFKNT2BsokZtcagfMGtfBZtnnpTBW9y9MpSwqbCiYsqUtXBc3jATyRsLELAbej",
  "key14": "4fpi81TzJb3J6YRVMPfKzcNzxgsaeJ3TEQSzTj5w8wBrzu9aSLyi8wkfjsjgcZUkXhFzDYMeJKNxacN2acwf335M",
  "key15": "4aJeDjWDKCZUryNmWqpt2oaMPuKCGFGGXY3zsKtgpvxbvGvfy7x48SXhLded6CpCRBLyePCV4EVXQXcAsVeyvNNU",
  "key16": "37BupnSdZYztYJBaRC9wfxRoffnkBuArjFQsSKKmTLPUvCxY4Rj5rUsBd7QZSucKjxQvtG5GC8Bf85yVu7qHiHrs",
  "key17": "59tpwJUy2Rn2NhThgJf1qoh4CyVyJtTwytpRUUvDpZdNgsdjRMZNCCjPjQTMqpz4Mzyzjo4xMs2XTCB89EmqDpEp",
  "key18": "3NrUhJLnXmPh9ssYEzfKpZJsBLDMwQEAreebDY3RDiXUHCXobBU4PKkYfkydBvhjL18D95jGyAxYchuPcfnvheHi",
  "key19": "4s7itHArQyzMkgM7ySAfGAyU5FWnG3r7bMidnmMom9eDDQEr34bXefNv7CYsrDc3PopekbduNAWRhEV1H3J5aVav",
  "key20": "4ekJvaRWr6VdFtbwiVY54ujmSjZSwUD7LoZhwZvSdBa5EiGHHLEr4vnh9YWMbhJB7Mr7juWh5vHdPnjBw7kvyT6p",
  "key21": "2DqD6F2KDfNgpQYfu68CBxhmc8NSicfheTKtYoFNJTrTU98Z3uSYLihfZXAqH1YGuQahuQopN5UViWw12qzGVJDi",
  "key22": "5bSzrUTEUmtNbm5wAxKGoyoZTbhHMTEEveACtmovZ9yTT9CCSLzkVCu5tieQNhgmb5xz7tmhd3Sd6GEuVPWY85pv",
  "key23": "2LFyh3hGA4tZqV5nm2qZhwBzjssSXvgJWBpk7oam82Pp4Z8jj5A3M1oesW8nQnnpr12r2ci8eBP9Dv5RAgjYznAt",
  "key24": "5Dx6TGqqVsLfzqr4BogEnR2xJpc8N7vBxRqsfR8HbQXskXbe4N67bwG2eQfdQHK7uwF2bxyfcn2kdfwgcQwRy1vy",
  "key25": "4fdUnxp3WmTEyVR48HEiswA9teKzBUV1zK2EhJa91j2iwGpQQ24C1zSqp1f4KMsMQ66g8raNvQBQayFpTmQswFP6",
  "key26": "2y54A5eNdaGhhSPTu5YY8hS9W4eVQgF8GVmG5iwNF8JFHSFkygo6WzZsb2MQpQYk1HtNrZR4Ju8v9qxN8WN57dd9",
  "key27": "4LDWmjkgtPBrGeWCebu8TfBPH6WhUR5Yg3Wqky5wk6sg6BAmZ2g19X2h7us4gpHPtYG5jWoLPmfGW9V8o6EcwA5i",
  "key28": "4R5AQDFghzSpwoprp9VW5UKkQd38S3VY7fV5g8EGs1sEr7iVcrzjJyDu5Yr9BVnetbmJRzxPmM5GCsHvP8m4dCzD",
  "key29": "4aR9xHt1v15N9qxSg2CTwshW2s6ainK4PZrnit5GpUny579zx9mWTEaniFZjGcSZkpx4NHAfZjtJy6CNLyfWztYw",
  "key30": "queYsLJyH38DttMKPPM9ZQ2SbYLddpRo2bipaZrGbSx56G9yLDxkAV8JbXPyvdaK8DdGYAkQhJrfYBUdY3f8tvY",
  "key31": "3Dc6QHoh3k8pbJc6NFxBJ4AjuCRaZMGV8MZGR7MSR8iSe4zW4GBvWathszmhcYmS8ZwCFYiRRtnU6ESYQQfUrciS",
  "key32": "S4tS6NSvz6WkWC1MY588ihCPxxWwqaVyGBu2Kunc6PVYFgCwgsjkFJH8hdFNM4QAzNBPMjuucofRdRTzeinFuTh",
  "key33": "5oUv946wdbzC9pr9KCSFjyr5yHeMa2VBB1pCumQCTNPwsFxTbNfm8mBkWDbDgUuXZdGa98ACehHJjhJ11yBtpXYe",
  "key34": "3AZGtoM8M4MR3weVZ2o64bS1TEnsTkapAAkzbJ7qjbCMKzYw8L8QD3GPJ54sWLTYMHfDV8TPgEVDjUmmrf3m7vFK",
  "key35": "FMduV7eDoyn4HWNvY9rKVTHc928hxXi7fDcigMJBf5ZeAEcVEABjcCfCWJy6oFBMnUE6uhYPuXrMhXGYYdLxNyV",
  "key36": "4A3dN33u12aQtLvTpbEF5wLSidzTb1ERWk59UqqMdPShTBTsWTzFTp5Hy3rKbsMgwYnwV8HCVrJ3B7x9H75pK6cf",
  "key37": "4W3iJZhMn4FNTe1E4AKi8DNphRQ4FYo71rjhpivGfqMEXT9XGRjZoZvb7uM6URZu6cfB246ZSSRCThwWDyxURyJJ",
  "key38": "2fd5Tf5mgDcfEQ46JVAJk9KLzUERm141Dgee3n27oiT5saM3CqbpJXE89JK7K7DofXdrPDmwziL3BGwrM9fr6DaX",
  "key39": "gjJXdngNeo1SLzxowWznaHeQhkJSoxgwjY4242Cc5W1qA8Bgn19j86Qwoez3UrENKoZqFEa78mXRmeNr1cnrQ7P",
  "key40": "3KFnr2qgUu7r3Ed2CjihBjwhaRiWKgkqLphuoozqa3uoGmTUih1B8obQARfcszt1FLyTaYmsDkqNsWCAwWYMHCNm",
  "key41": "ogNbjyQZqpxjZCikVJwsKNBHtcscFYnNb8BM7dUHy32WxRAfmgQYqf61zadeqANqtTLMsPCu25WzzVYoYXCKgvG",
  "key42": "5wctyXA9z1wqzYmV5afqk47xzBrdwsVqXFpndXtjFuuEwCkDsTtszJpU7vETgqtkCZ2HxeoJM9yq8Zbr4iSG29YV",
  "key43": "4fzG6f3YhE9cFHNJXiUbwqiU6Sp8dV3H7uWuHvsj5ikiQsuD67z88DitTvmz5AuSTx5C5AhCREuozeKfEZoioKTW",
  "key44": "66HY5aJKttRoxyFJpHh89ZdCnp7ohANms9X9cBpSNj51so8NPiDCPxaKZ4cmCAqrPSdhyLWDFxDRogMrDQhYsKRL",
  "key45": "2DqGgc1n7zfHPy3zZhx5YvN35DycQJYhJLxZPGTmv9R37L2mrU7fwW6PJ7R3oiRi7ZbV23tuWPPDHfTWfuPrWaNP",
  "key46": "412ALV9tMdNsqHwt9PJJP5GpY3u5Su5DBUhzsSrFA3PYcjLQbco72cMpoSK94TQxUGssZf2iG5xCcjUC4TEncAXC",
  "key47": "3T1L7mMktaYo9nHLj1wdSGxyhPvMZGTuXnyvDYc6Sv8kYDA4qqYtRcF3o18iCKeqS8ASisWqBEv2B5LAGvaKdoLL",
  "key48": "2n88Meq7stVyfF6a7Nh9rUKG5V4DNZ3ovMNPMCRXAQQr78guLKm2n14V5xdFq95MvsPMNwAvzda4tKBxXw2YzRnE"
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
