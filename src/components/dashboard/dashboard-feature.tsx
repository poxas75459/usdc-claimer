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
    "5mNBDMnNKfeHX13CJ24KRsAgHcWRQTCqVQxGExzoaXarN9v3vhkqSLRZEZDQQPV1kQtYpPfbMZGkSUo3dQbcfLPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nVzP5XAbvLLBCAs6meGVMC8CEViPu8MH9tDR9ZckQvmCPweP5mAcZMcZe7ErRRFyq8keQUJkLUaguKRz5zytUpf",
  "key1": "5LSd5edKFS9nKgw8akCcfSq39sf9bdBKj7NN7xvemCYwtyzHjQngEWVDosYyZvHv6Pxqb9XQfJTNmTgVi1pWgs8w",
  "key2": "2tRxKYSx7amfPUmutm4mNZkkHF5e1LmvEu9P5Hk1sY5StGRFhTqQLNXZhG8VSk83fhtMqQ4FyVMesSjTv9Hy6PkN",
  "key3": "54QCmNPLJhq4ZpyxKcMoyzmeMsibU1xTF8HC7srodfcMcaak8fsJQEsvcrhKAHeGQ2r9UQ2u7pBamUsPYb8LR9Kd",
  "key4": "64uZjatFvFrgdSMnga2qYof6eKbQRGKTmGKVKVRUwR4XREdVML34ntCdMu2NPe1hUo3syz5FcZi81hg4iRUXkP8m",
  "key5": "2uGHVuj428b9ugwZQu5a5J9n4V4PTtET2aBiuQ879tBfb6TGyj79Tb7rQ2HhTNvFWVNg8sYsJ7aNtaQeML9XZLA2",
  "key6": "cHvkTjFGYZoTVZbeCbRFPqueaAvBVYV12Hvkzz4fkUZYUVkXPCU8b1ZCLJQjhAJeine7yrTP5hhQPKiZnuMkePQ",
  "key7": "5dABzYLprWypAuGhk7e2D7R78k743VgaPHs3mwtrR2WPvug35T2nSaQyXtHxkLQyf45JG25nbKmvR4jEACgXU2yt",
  "key8": "53Ti66iBzbNua4zHjy5wMty3DcijyoMZ5dgBs5s2dnqaYBweRuPkNPBRxLJoorxLAuRM5PTJAWd5b46NX9bmCS3r",
  "key9": "31igcC28vPuLy4EeYzPnPytbEQfQjwPnRakSUJVpce7q48XFChGdjXp769pPXXkXSDbP7ECjDvmQZcSWrd6pfJ1G",
  "key10": "3HTv8tTFZ4bq5uT8fiJdDFuYHt47vApyUwvoeSMeHhWm4ZaM7qiRP4uRs7ESv1cpixASAnNc76ds1oWMWzpEnd4s",
  "key11": "2DDSpaVwW4VkFveSLCYE4o7BPQd6VKPSUDwUz2j7VMnvcQwHMUG9cKLEsCTmncmjhGcFvWCia5ncDP5815FWtMGp",
  "key12": "23jGnqvu1qAParvjxeMeXUGFAN3RwCWbT9FD5DLb9SDGrg2MxyqsRWgng58fx85RM4RgPzuEiLfvUGZghGXKN8Bm",
  "key13": "121WkiCfx3nLJvGWso8SE9Afa53LHAMmUjDLzdnNA5YJb2v4STeSFsYnnsuNmKH9hFAzkgPBCtyPxWteXv3XpyPy",
  "key14": "Pr2tAfC9m2tdVdpu8DHwHwLg84mKwKUgg3jWN2aM1tcSoxp1yQVSrWiW7DpVUeSqpHG6B4GJM7bHFd7ornAfz2R",
  "key15": "2xdDAx9ARuPQZ2eUTNAYbteHr6PB9RRsc6cRsmhLtgyMa7vFF8P6Jhhwahi9tnf8ovxXDVXHwacqfwbx6xM4cMha",
  "key16": "4Dy4zaJto4hWqb43Phwa6Lkjsvd2sj5zTfRfAmFfLLG2zJoNe8d8vR3tPeJy9cD4Gcboq2Fd8nHn6TF8TJz9Lvy9",
  "key17": "yYjzMPkhBLbUxz8tod21Tz4er2BsgpJHj7yikWnkGUMi5wxbtuGNKrPR4pf6qwesxpGQfR4U6DPpTLd8jukq4rP",
  "key18": "4jNHMYvCuWbk2KnubZ4KTqy5M8qZmqjzcJyy4ZmTRVGJCzXrE91XJYo5MRgu1tqnaPQRvBJ5a4yYi1BAMZn7ZnJK",
  "key19": "4WVxuxKxxBAts6QaKkvbU9h2SJvw5nXAYxVLnjeArCe9KCQqRLe2B7SJZcDEX4S9DBGaTFVTZMHLEjR4qcZbEPUv",
  "key20": "535NSZpr89eKSDkEJFYmzKEH1HVN6aL3ygy17aRQjoW5HsBL3Fitow5vAA8GWEqTzJzxxqwj1sxhfmmM49pLNP2r",
  "key21": "qLYkf65swyL1hwq7ZJVtbPS4xLtFa5MmYduSN7edpW7vUJejQubsgDjkzxaBNeoemk2LsYkG6gT1yNL28zmFo7x",
  "key22": "4Dz5pMi42NgeGZPCG4H82zg9M1UYqJac8SGQzu2v1ym7xQwFs653XtEfY9PJRZubqA6GLuxwyNH5tXh6cRzSVRqJ",
  "key23": "3uzusn8FWY2Fa6uzkafnX8EvptgAKeGfr6eLxtAuHmEZJ75URoD6wiecKv8ZH75sjEv47RxWcMM2URi6gTmSy3Ss",
  "key24": "Xf1nyr2K2yXDZG6SSzhr9f1fKKCoq3kTQEyRHorL9KaQnZ9ETzpL12Kow5XzU1rNp6nWJCxR8C8AS6VorEiu3uD",
  "key25": "3gQdGr6krow4synp2hFzQKZcPXTjepuu4VdjaCkxsBAqWbLJSox8H76VyJV9Vt2RJP44oi4KhcLwVmKKnyYoLeWC",
  "key26": "4iB6cqu8YQ5jcnUuWfSzh1fUt4zqn7QpJwe8Vs7qLnALNgTeaQXZ9UoynU3VJtnqJgPS5T44x9pqby5mj6WMk4o7",
  "key27": "S5noCtgBB2p619mocyBDGqqXyYrGfNauk9EYHdUebnoLAt1gEKSHwH85gmY6LXY9Jz3kB4W8ijmkHsvvt97GuRY",
  "key28": "3rpDAks4bgCSDdEWSJu9BBsESUxHLek6Vnh9g7SS2qZ6hQxt2jPvjd7EfFpPz7UTfH2nSdBQEfud49UjUXNmwvs2",
  "key29": "5LL9nNzvNyYJz8jcM7X7EiQDRSfGsuYpp6SDseusqqvScr623QLzakUU18ZCZePhr6xqFfgrN2XHn72CgNMW7DFM",
  "key30": "67mMHXq7ncJ7bqaxoiJq5aMewdEDKasLXvxhAjX3s6LwN4JwXFDt4i4XVshHix74CzaG8F7dRj63d1NxtBSNVzvR",
  "key31": "2di9gzbqFHQWseFGMP14f9iouBKkJoaMWpD7QY5g3XhgmqMB4uYdhjEzBMcZTuT9E7FALEAc22MF7NXgsaqaySwg",
  "key32": "4yNb9uzvfLaHYjmKSkKfsnzko7JyqYb4KAAsiYrRfdm5ofUic6KBN9wfSHkMNWSZ35YzcxUDrEeUUKEp8UZyCWsr",
  "key33": "2WfCBCevxbze7gRRnvpfHnXTtUszSXcmnNmngEhnSkiekXcKDS9Vco1T4htyYJYoYE7WE97ynd6A8Pg6vHcxJXCj",
  "key34": "61uATasv6aD2zzkzoL1NF1NpsMJUi2g6amgSojSnTWyM5WmyTPdtQwJhz6qbe2ei9xuwyYepcZnUhMCjrw9bCzZR",
  "key35": "2PhwwEC5NsxN2pRFaGTCwNmRA4d1CNqttYH4y1K5TeJVGnXqwn2J6frRgNNXJwwN9DjKUjXycTXwteF3s6FehEFm",
  "key36": "2fPz1QhdGzDMdaxJ47CBmoApVic4NDXZrSWyvPY1MP9MB8VFLdTstmYF7bdhqYFpAbN4GLbGh6G24xYUpDJeHRuo",
  "key37": "4jXZa9UKjzuQ77kQVqPyTDRZ2JfnzKhuyLsyzYPoXJJ5GU7PJQ1YvZ7opYE3WSnr1VEPNYBUJmUxa2xhTdWQ4GVM",
  "key38": "4RZe3tyHmZM43g77mMaeyo9vJvFWnXErRMZt6jEmq2XneGuGj9Q3MZU4JsghXrc23SsZwo4RXM8kNQ2219bbDK17",
  "key39": "2MrByqWUgD9Fbhbr5ManzmqiG4r4UcGGX62FZr8u4wrbKEvPw7moqZZdMEqsMEq4LwJJTXRYintw29WVWgPJWVNs",
  "key40": "2sopem7UXMbSEuaw6ZawoVbDAXEXczvKJuZQGHWKor5MURuTXFh1Wh2uZVJGELpiGzpkqj6M14cHrqJorgFPPWoN",
  "key41": "3NCZXexXkRJ3XGPzugTVALqD12uYazwJuoY8tGY1BhqQdjKHRA3K1kEhrXcRQeLBf3RCmKt6YbfHmPJDGTQdUsYE",
  "key42": "J4iSD61B4TxQGurRBRJCDMy4YqHb3u8EB7Awe3KxWni8i8EJqGYrDtPHaJAmEY1AHJiYbVn2WLryHBRCwZHcUKw"
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
