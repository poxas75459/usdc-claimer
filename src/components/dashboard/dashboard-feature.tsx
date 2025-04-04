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
    "5TjFjNAAd4qwPkimDSDKjWKgpQz4ppYSHupYYfdF9FwtVy5ZngFNgmcxyjtzp5XxAqzALyFwAn8kNHo53oStZcXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U8uPtP7bVbV8nUL2RLNSka9DwCRu7bqmd5fdwSfMFh3tQ2FEmuwZMY2dPF74SUproGDwJUniWDgPtA3r5dcWQtp",
  "key1": "24QvWdc2BvCoJjpExoXDbZvAoYpes88tBfHL5mdn9mdy4gHbp8fB3HWWK5JWRvhkMfKqFdhAw9AQNUSkzCGkGghd",
  "key2": "py1dJVbdPxFDf1aefkHjLEjy8qQ6nc6fp9dRGsiW1E6asX9Fv9avhFw7TG3szEPd6vHGvXfwLKzij9dyNMjhNea",
  "key3": "KqV7U5wwQZwgd7n1jnj7aPCHgumk5i5EdyhASDuugQXcQhknd2UM2R3HEd34PFn4eP2sC3SERcFW4Lfswmv8xPd",
  "key4": "5u9BXtPyME6UeSLVKQH2cWazY7hAqHqLCHDXMaLAc9xQnGgamr29oRYyHzJGgmqNS33azt2k87zW3vYsPkEg3QJD",
  "key5": "2bVh8T8oTF4Udb8TtqJYYxjAde94wtQSffpTsSqxdhFkC4UZ8322UFMiKNYaAq1terNDwyorCWnHHsZsTgBYqpBT",
  "key6": "2YHnnbEfkPSAd98Nu2kqF1bDqzDEaHtRcMGsXC3LW96jRcw7vBhZEt9X3HSyECqTpJeNuMWJBA3tcAnhBTq8FmQd",
  "key7": "2YnHHVEFisgqdF6V8e7BgVn7B4jw2uWg9Den4CvYBquDASUp9wMWsh1PkfpJ1UstNghBgYzSUDMuTvLCYzLBnGHq",
  "key8": "64Uu1eS3VsrU3ckMzz3SUXWW8HKVhAmCiHi4hCGRcPQMsMARGEJBC1t38drCmkDbnxus6o7TWp5GBsNpGFjZNKEp",
  "key9": "YhXFjnUj5azsmnYVGhniGy3HeVeta5wn2QUnBTEJFBgGyoUaQamGQirb8sgD5xSvjCCFEzkeVQSeDnM1ci96HDf",
  "key10": "af7cp6u6PkV55VfsXMMA3rVKaKgzE2JGCzf1e9AneaMX9dNWxEeczLXuiNFZjBAHi1ddvCsMkkFoHkuUf1AUqiq",
  "key11": "4jP2PgU5iyZ3vazXBJEBNSGzP1vXiX18kMAe6VDcH6NAu3ZY9MGUeP8ax5y36CmZpZAXyJwQpWhawyDV9JMfhqEo",
  "key12": "4e9pTSBXkbhgA6kvH2c21wsr5URLCBcWVg69W3oBYo9rjojfFRgms2ANVZ7nvsMVz7vxj4kwfmhKvatGYBPNJvZb",
  "key13": "2zMQ55dsFkTJ6UHij5cCpgaZmiSsjsWVkmxY1dwN74uCcMXZZC5BpT9Pde9ubiHndYasxcAaAFceeXE1TnJ5o7Nf",
  "key14": "4e4TZpSiDzp8g6MSbkzWbcHge99c2kYqpKUTEhx7bbTMJ6NvesNZ2NdCBMMupHnAoFaoFhy4GsPqkDU5dSuDGDmg",
  "key15": "Y41zS7kL2kpLiXqiHGUHhyjUGJwskgELQ95aaekK8of1NMYrjJyttYGeYYc3XKHU25KiSeiW9ScXAendP1b4KAx",
  "key16": "4uSS3iCFcNR71wvvdHg8mh3SsEp12uf5uAhmXLWgNCxttXo9ehhQSD5RzYspQfmE7LG8ehHRoeBdbEFWgAnQEbM3",
  "key17": "PnDmV1vH2raaRHiEuAhHNgn36iFypH9ZNhkBN78EXvToiGC2f931PNfxh7Y54RKR4ZMoAonUnyiiRHqR1pB7tJY",
  "key18": "54KTBdbaHR2FWmfHvUT7F1i45qppV4Q32WzA7aLLx7qjhVeTYjrubZP1gTPEeEwFdrWSjJVu4cGvzDLkKoHcggQR",
  "key19": "5hLaSBmvmKPecy1ve8ZJKayQJK78JbuMUxUa7BTbedGETsAiYfQZscPDJsUF64ePXs42Q4s215VBeNZ4HqzstXrD",
  "key20": "2fRRtA8VXtUvYuX1cKeGVy7YxY1szdK75d27ddZtbFNDy6aowmWU94r8VZvomj8ky2qUn5EVugbokTLCbCmTGPFQ",
  "key21": "2M54fSX94VRohGYHLuNEKS5YGru8rbDAGSHMiVZmCQQ8oro1DALkp8Q6hq19twa2jsiTfVhAvmVYQ1sqGNQA55cp",
  "key22": "7PtmMwnNmjHUEeqT868ASsPLJnEBB1V9cRXo56WKyzNgVjfKxFTG2r2veFMrdi6inarc9yrYFqysRxPuJvyubpo",
  "key23": "65huhJoUeYei1Zdi9Y8as4oNhvuC3YnAJMhET52WvzYQVKciH42XtaNEJdEw7BLjfRakYA8VBkummrvhL6dD39Pp",
  "key24": "5RrBbzjm6Dy2UqwpxsoSt21qhSjQYoybmDCtxVbWfh7LnkF69BT6u6aEu89jBKvixSyfWgg1pHPefQv1rvuitNTe",
  "key25": "3zDgXgpGhBMQENZfamkTVovQyqPF7VBfB6PGwQoXS1ZjPWvLjeTiQ14pfYu5VGb43GH8CQpveXsu2xkptmUvG9NZ",
  "key26": "3ye1sWA2ZerEf1SwoU7Feb2C2T8n33MHsWd1r4auUP1VFfoc6xC41R2Y29JLotq7LYBULxHX1MEF4gCx2bkvy9sy",
  "key27": "B5zC3NXwbAot2SdjVbJwS3hwxjRRTdLS9WZWe5uedDBR5E1Z19zWS4ZD6w8VuTWn9zjG3mwyQj9iCARWEe1uUaW",
  "key28": "5Bt1BDUuAPoSfsLvwZ4djqKFc9EVHyX58QGCXv3cj3q7hVPSjB3MKD5af1twituti5VwpZy7SnWUhQJaHrvoWuz7",
  "key29": "3X7czRveYNiv6BNM7L7aKuAFkgS6kbhS1Ta2oCg2huQn3g9dZD2rkvNwmWz6Ev7wVPPnsp9w3vgUEAPTN89XKQyh",
  "key30": "qSgDHX4GnNSGoyQSF1XJLvdftEVgBw5geJtWDtwwUXnY8fQjK9G5UUZzC4KqZM32RbSh1bpNCdTnbGdHLzD7p1w",
  "key31": "4qEtBkgUEBW4ArKLHVAT4852rG4ZaCDWiiFHsd8nTy7RGCEx3EYNMeGrs4r7XChiAL8x4S2rTi2M4sDZRvt6qwMv",
  "key32": "2kmSzsaypwfjchLoYvMubukfSg9zTfPH9AkAAZuzLxdDuNPASxKrCgsBEt1C4RHxrfQZ7NRdm9VjZBrRTff96tVa",
  "key33": "5p6DLz7vy2cL45K3s9FhBGDYCBVFQmy5PxxrbDW3Dhgj8KDFcbsFEgQQR7ZoTvAeXyoWXT4y7pHkckuataJGnTfp",
  "key34": "4zyxW5SwPjamAs8kMDWMK2V2MP2mZi2cXAjcAUAuT3QWJEojqLbNZTgrg5BAD1yKosEbt5KgKv72hf2ELkrUYy1E",
  "key35": "4NrQFVxqArivsy9bkzRGCdXqpm3zMqFj7q9zQ7aZqWHdgJ76NWQM4u5tgWa6QbbFGpuB2nArZuQfGih4UXwiGqnH",
  "key36": "24usrisaF8ZPp3eFn8wvpYUb441dYMzJCpqXCYJUqyWyyyjfmGDQhGsQ2Ato2qDDGhexbFpLibiZ8iznC2n4bh9D",
  "key37": "3LRonAXPZD2eGmx8rDD96pxyKqKs2U3vhfJoSGUV7eCYMFWUShWDGeAWSejqxASPBi3PEjJMe1EQkfrLbTamEuF9",
  "key38": "4Fb7PBnsfTbuau7tvtsZm1jcUCkgYwezb2BToL73XdBuKPbRkR6Yxr1HNoafj7D5V1TdZt2bF6QmQwtHoJkjdSjW",
  "key39": "55FaP2wbPvrrERpNETnR8ypXiMsKXtwrcJv9p5T3dQUQugoogXjiwidNonPe7bHECScLoiQY4uNQgT6tBmJfJLD",
  "key40": "67URbosrBQEvyTNbnuWDWZBgmCbDdDbZNNgenvokZNEL2r2d8NNWJeJqTH73DSAiQhF2e2hvo1fyBo76HmLibPJW",
  "key41": "hdoYaGmYvcWhUnCUvEfSubGQPqmhCxG9KX3e6eFGby6hZdsTdLPztMAgunPhE8xHYTkBwQFF2zjHM79gcK749bt",
  "key42": "3DJ2HSJQcHwNnAm67xZhmBBrMKiFEXprZvmtDuJZ26ceZSS4XYe6Efj3gmwarGy17XVF7CT5YXdNjzpLFaGyNAG4",
  "key43": "hqiYxEP3tnyA5DprZJzz1ebao2ZNY8thXktLav4QTAkYkweQayYmtRkN6WLQdChxAyfbaSQy4pndLoa5VZkgK8s",
  "key44": "5VSk7r7CC4qyp6bcXPT3nG8cH2knJi2Zvb7Zqng54bdCu8Y26z2skXcr68NWjqADoBhJ9nCFzTzGWqzcL85Zvyqb",
  "key45": "HwZLXUeJMxaefjR4veXQt9PEmrG88pmcodVVwuXKV8Z8oswpyuHEo9iPH2TLKSKcBw3nCPbetxD91deWfx6vsPm",
  "key46": "kzaMkfU6ewuWBdRGgiuJpN8CP2W3Jbmk4kbUpm6WpHabXv7b3Mm11Qm3LqETdpyfsecs4a4vamo9BYV6NLaY3xB",
  "key47": "3J5avyvFw17ydcZNchnWpnZmSEZTdwikHRz4XkvYd35sB7ze9m3zo3AiKcqDWMiNKge5Nn1yFEaAAkNDBChcs9cU"
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
