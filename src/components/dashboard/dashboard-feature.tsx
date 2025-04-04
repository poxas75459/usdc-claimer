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
    "Nah4GWERJ4Cw5BfyCMM84MK3FWPLPKNVnf3vqjtn4bbZHVZ3rUMmTQEvwpPv3bB1Pzb6Qhn6K4psuoYJgsNej6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29bgjydhX8MwK49HjJ96rXjHwePGRU8fAXa97odZ5WgFjmbNrG5diEEKZTTeFMyD2FfuJXkGtC6xPKvLWLG3818r",
  "key1": "8pkBPdauY5Ekg3mv5bf3VZUSzoVa1mSFD2HA2W6hEzWENezYMhQQP1pz5xRndiyqF6Efc5iDCfc7nznDvfEQNNV",
  "key2": "4Epy6kt8Wz8hQK5FhhKFYtYMGJ2e9YEEtrYeNqabutEHdNncAsNZzFthC2GpCz8EP2oTmu8ogWSVjm1q2a2RrUjR",
  "key3": "cAJnFDx6Bf1zi9cSBVCnuNaVVaVkN7LCqvTYGThyt4eo5HWY76TA6iGEzFf4UJqjeNQ2FkjWQFipJHytFYXmdQn",
  "key4": "zjcokZPCGUzvCZvHPwaredifVJUUBPE7pcrmzEnNvCmbfNqsbencbjG4ZTztYajzTGseVcV9QxSsRtFicdUukWw",
  "key5": "bYYDzqhLNJxVFKk7xHnc54ysypFoJvr3RdHaYUuNrHeqf6KGW4yLa8CYJ8pAjjQsCvpdMBXf7YMj8345gL83EXN",
  "key6": "5kJy25DDiRJ52J46i111Dggq7dCyAs6s85JvCNL4vq7nFNuFQbu2mTvFeardWoCwdz9LgdqJMXTkSK7puGFDmJ5a",
  "key7": "K1zQDzMhaXvh2WmCRDiLqarh9bBZVnbNGSX6yUpQoFjrtptevM6R31c7LTATEAf3RoMKbmRzqavy9dYCpkCpfXS",
  "key8": "3U6qaSCZva9UBeuCszPsB5nwhoRfBXRyMNt41hddLBEyvsDPE3ZEU7UbEpmPG2DaY8Np7XQXQ9is7rkJ8B15mMYK",
  "key9": "48GkU4EjvM2T9UrrXBu4WnAcuTPeoNyV79E8GpNXktbedjFnRtYoACznvdgcYd4i9uAxLkTDKudpsVJjXndWWdUA",
  "key10": "45ZMnHJk2Kvnneb8tfx8s7LcL9NWsWwY2Bah41kdJm7KAEC5u7vvdmUxQXAV1C5HkqVczQ8tjCNkywrxwKFqZ6aY",
  "key11": "4fTvbggdsvaqTJ39ss46e1juH9gnU7K7EGUdBTTE3baYZpMESWnXF5wwo8kD6fzd14big5dyNtuWMQCXqy1dseFL",
  "key12": "51dHVp5R3eo7tHGfC3Gw6P3XPi2onXExwn7zTUem5tMVhspubGUVmaoP7KAaaQoGAttFeqviKsVGCNjc1xGE1GvF",
  "key13": "2qgmmcUNmTRjmjkd3UX2kcQVGDGPtUtTwKgAatwcM4jcuTbGcz7qf8hriM9Xb5YC57wt8Fn2mNskrxgKBzKSLETE",
  "key14": "3aDXjn82FAVszij5B1fDY6VXxa8Q4gCPBi1MEmxZ7rmcFhL5pnsCGgtFYi334WeD8YtW8We9GDpEhHg4MtqfJJHH",
  "key15": "bFAit8Ay5RZND5jDTkjBTmRTpMEYiasLuXHpeeD1aQcEX4FMSB8KHizpsk94B8LKMGFpT2ApEgF1qQ1gx6qjqMY",
  "key16": "3L4nrqfRcH6JM3CNtTNs1iW7WyhQ25iy4rzcUSfvb6LH9u8kvaz1e5eU3DpT6uetBBESo2t1bFmNzWJRt7GZx3Dd",
  "key17": "5bir9Q5jrhYGM4SeWKt3e8gFcpUuQWEyiUYydb8z1JUfEYTUfPbQwnZDUYowH8wKjy9o5BvUWzbjgKW5RX58sjtd",
  "key18": "5uqHKp32gCtEUDmBG4N3D4K8exFjiCCGUVceQi5E1J98MHoEDqgBQDFEXm65s5DfJau6YEHs5TBCUjTninzG2QEi",
  "key19": "3iToZkW14G2xVEmuPRSp2LPm8BUifnjUMDVG3Y3iFm6Bj98FU3o6kPfZzpZCGzqrMRuSwNjv1BXs55RNoFP3JgRs",
  "key20": "3cac4Jkwr1dSxryC8cpZbwwVopJnZ3nGHdqngyveoGxGT7oHi5SRtQS7DCkNmCSSMmjWnE1f3hZnHavvo2zVM23W",
  "key21": "5LNYWSBpWfzwVMBYoAgkyrkTNtw8fc45Hn9H9HfAM4aFWfmULV9svrEpySND4EiwZX6h9wk24Guc24EbKCH45bGP",
  "key22": "5d4C45Bg4yKWu37RxdNxr2pRTc1aXnGh7gthrNveCNtGXcWFCagLa26JczpFNgXzAk7CHdTSWayry9ZDMjJ7C1sc",
  "key23": "2soJ7NvF6giUcWA8nBu4g1MRVHXNBDcSuYgUH7AUi48xmiZxUxifnZZR9kxQdVpMg1qPyYqsfUGp8sjN2BUy5ehT",
  "key24": "21gLP3aeSvG4eyXfckYUvJThCrSL6LAmqgdY34Ru1fvAoFnzcueqQEE4fmM8gu3Cr45CJ8CCCJZYbmAynt5LA99x",
  "key25": "5FdN4g38qdYHUv7XbsKaKzGTF7ZKzp5QRpopR65jdGruNa7pHQEtSnkdef5UbFXq65JXxwnubB4eaQTis2TUnAz3",
  "key26": "4b69X82hnjYvmQ5YAy8JpGDHHZsD27QbXjvu6T5i3zaf2XnfFyWdnsirLWchpa2qu9vXy1CQWKFe2md1bjCCG7r9",
  "key27": "5rkiw6NP6MtB34YXVy8zfo7EEzL3AHbro33L9Phu9pa8zSm8eNxpMQBATFAeR1QUTdsY6RNW8biJ9dr9JeXqsf9T",
  "key28": "hkx7vZyJYYKH1bw2wvZZMhtg7ztb1XWdYJ6MdDZZ2qwRMjDbm9Yw6utDAgS6jhQ7JTY18rJi76EpMQ69VZewCqV",
  "key29": "CcTjvAEavXyYfNsFgAu7w4yRUdQ68WwWr3Tws5SGcUTbvjF7SaDEU4TALBnUa37EvCoqKb3J6vfNx4di2Gpz7HV",
  "key30": "2ompxrMaF7dz1xpUbAXar5DG6eyABnShunRCySXQyuBU8ZcGYhGLfxEPuxxAq4fFRE2EpwxAGhrYX88U3bApgFgz",
  "key31": "3PUrhaouv3T4dJm9XRJQ9Qm8YHkFRH3irXo9QsnY29PCA1QjZeHQd7uHpXTwZqYc9f9hPsDNx5t5sQZYsim2ufr",
  "key32": "5kEZGkU1mRQJdJXULoryA54i7jnPEq2jNMBiaU6e7R562PyXC6wBJYrXQUhZZJpxQeZXB3fP7pTBWLwdLv9F3LTX",
  "key33": "42k59Q26tV4FbYbVhwaw7caU8d48NrqNybnxA5xkfjHZBi1g7kTQuTqdsdeTgJwmdP82wumwp2dwtZtdQeAf9A8K",
  "key34": "3FETBQCAb5AWggZ78r3KHvnVd8oG1vcqnhe6UM1G9z9KhBHo2hKKVXLJy3bjZAZ1u9fCd3TMrT8CfV4vYozZLyzo",
  "key35": "5RixRVGVeU2hFpp7VBPMMsEZv1e47p5cxyyeqyvHYTBWwSfku6qJQMaFQ85pNwRw5dfx4hoR5cmSdGyrGnRhN6A4",
  "key36": "QBg1gmjBxPh55FoCmwjtjt5sfFmzQnDG2RzpR81GufUgyVVKwqMM3NM6Z39gLobnrymGocuRakoAoU6X8k8kgzh",
  "key37": "NZvv5TEEiP4EUJbn4miicVarwMNwQmqhjAPzb5Fqq65iXoTSiLi8NPFw9Vwkfq3FDtptMLztqWwyjcAwj8cjUVd",
  "key38": "51VQ64Nfi7cBqUFg82ozXzALNjc2oiWRN3TaeXVpj1gdLcXmFfRBoWm1xsAq76FW2u7uuuijHbuaXMAk1oF4JZHt",
  "key39": "5uzkCE47eQXXbCGyxgzHVhtoVnptfzGHAGwpq8MwBzaz9cKkGkVzP2UB5uUjC7yzmNuaCvgs39avih6jQLQVcLRc",
  "key40": "29wFbViwkNgF3RBD7m8BkaQx8GLJAFuLVzgdVbqqgaDZfK8rVUcbygrchg3zWyY6htGf9ZushhxLcBqr3BE9igjq",
  "key41": "2dgGQonNztnxKuNEcXkfLbLas9o8YTZHVygQZZzm56RXKafjkmgzQaAqq49tLNSw96gsQHFzVGa4o5sYc7MYVyee",
  "key42": "3sKGiMJc4Xm1GkwP9adVNYhARyG21ccMngq5CrqSS3iJdbX4aEw8aCBALZmt2pM8UL43YmLerb7fE1oDJPGiyg2o",
  "key43": "2iRX6sen3s4ti38dopXkUHEafFhMEUwmeL6vyvV44dikrgdaX6wpuoC1yteKDhJ4QzhkSt4m7LBjpXqTcE2VVDup",
  "key44": "jFtL4LRxKZVDERpCLF9YdYcAAnc49ZnPZ8Sb3im7dFXAMmn25Tij7odYgjKPDSst9edAd5EVgb9hYPgVT7spiY6"
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
