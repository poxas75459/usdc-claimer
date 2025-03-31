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
    "4fkDYAJ2z3GXrXUcgyE1pGx7Xfq58vp7jJudme1dGDjxPDEyXNztgfGxRXuS2nP6a8iBHMfqp8RWVDvtdPvgLgrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BsuF17w2N5FnqPN3aJahvgh7b8U87qP4ZgR81pZYiHhdmDjABnK1oH4RAFsqbZpJtqkFqk3qTCaY9bLZQ7nT4rr",
  "key1": "9P6riS3BPfkH6f6FLrgJuwMLRNxh46agsoMbqdJwfWD5Fe8bGnPdgMcTPBNH2jbBepztEKx55hnJHtHtvaLnbhq",
  "key2": "4ckr53P5MJ1vknrjduhDa8Xk2agCyyRhT7T7CAmP7bWKjydMr2e2RbxjPB6kP6b9c4Qqh9Qh5gBqmRDLcKii7NXt",
  "key3": "5yn9nJzffLBbTyrQv5aQhgHavhcxARJpjrdkrWpHoputKNLP58DabuW3NKGAo1taMvqLdqZYNxGZ8LTQPMvVUJ36",
  "key4": "N4UvXkGnS5EUM7gs5jRH7HrxQ1HEvmGfxfesTPjCKCLdsDpQAPFAS38EYciGTNbH75tiEgAq7z6oA3fkt6ga96o",
  "key5": "46m1r4V7b7g34Y7V42x7rJkVmwu9gDSzkpRuPHNSdHVUKwY6CnTjaBy2q92dKnDC83C1E2SsgbU9AhiAEkAKURgy",
  "key6": "3G1LVo1ERQCE1Q4hqZ36QnBW65RLD3pojiWeoHnLTtmGCRjm96T7FuGA9osJvYUoojwn8HSRowA1hyTAwfyNGthj",
  "key7": "2k5B85u7fr2LRmznB6jpJUnLGH3GyJRbWw4GGb2D22AM43VYUERWyc6WWRxAWe7hP9W9uxjEW2XmTDwpESMDZTzr",
  "key8": "ERQYEgQw8ty2zUdtJK9iXJpUoQU6ipp59HLEFZ8eHXETEYZnnxMF1TLjbAdcapcb9GTmfGHJLNvbUTHpVWfCr7p",
  "key9": "4VgUpnKffaGVpmUu5qUTty7HX7BmU7gaAb1HevgZ4zsU8Fe61bsGAL2AJjQCWRiZmMPs6zfMyC2dsx6CcFNjoVni",
  "key10": "22aWJQ9t1HPxRxLTzdMxVEoHwyZwUNu2v1sKUriKoz1h5mRm9LqQRCBk1f2bEso4REKUhkXu6hwepEcP5T3mq18M",
  "key11": "4HD2C2UyCjunncnkwiv4rtVy1xaARSvEHbtKa22sCxFrLvxtYXGKSwNpSp2mTEriixYDAnTJj4YERxuYNZ7UqLKf",
  "key12": "2euURZtvkXDqJ5w2QfAkAPmgm4M7KjmT4NeFpk1nzfj66TPT51U4V6Mv6JzhTtdeyXEBx4njVpWHDjPmqHeuhxQs",
  "key13": "4JKGYNMVphsFLvMFgErgo8t5WAaCNvuci2Bm83UoDy7ACgZ22pNdUpSHxA9sszMgCfA3NAXP2SPjWnuAgGpP6vbs",
  "key14": "4VZ9FwUJBLECjsskcZiq598jmWpwZyG2QoSSz96gJJFPe1gLLW1NMaPHabVJ7Jeqh8XqW1CjfduWvCWzdsYVUeF8",
  "key15": "62XPjYkPUkxvicNrYq5onySfwFokGgGc4XdHRLekgndhR7hJtA31uUhASweFYQiGFixvuhyPdHtCV7wFCKcc62Pk",
  "key16": "4E82M1VdMEpz3PC8nswDXumQLyYwDUt5bDXb2V3WHgjEwA7eaKbduedQEM4QwDnCN55rWMyVsg7EsUo7TMF1DY6s",
  "key17": "3kbvxYqcasR1gim5qhnhWA4pG2TikYnwPBCSa36A27GSY7D5ygDn1KBeuanRmRBda873fJqbrguMFzx69o4eAQzb",
  "key18": "5KKEYCnEjnhX3nqgynf26iuRwPKeumz4dYcmmjUocigByrhDbq9i36qi9feLx6TYWseCXFHy2pAL9NhHVwhkyvgJ",
  "key19": "63L9fnoMEWeChfajvUC8yWpxsqEXnTbMvdEzSQ5jo62rCbyonMdaAyigvagoer14Ma9niMGeZgT2Cq7Myy1efwK2",
  "key20": "39zyJG7aRBHWv9V47SGXTjgsYh8U5ogJ1pRJHHhjMfQ8KqJ786kgJphDn94q92VXHSCyFgpZVTt2GbpassNdG9np",
  "key21": "3WMciX43HhYF5msSKjqQz6PdufE7ZDskoE89ort3HAD1eSRSdCdjfpg1EMm47CroDRcHkttkjn1uxKSrAh9WjTWD",
  "key22": "2JkYPSgnEUkybTmYUAZhmkDaYW6gy9LLear5E2ozhRkUba6U1FmEgtVDkfHayvFXWV5da3FBq9cUe4guKew1PUUi",
  "key23": "YMLQxukXY8PXyePrWrxU6fNnRFepKLfvKjHNyWNSGMEzysDGNNGVz3uQbSBsX4WDyrCRRxVdYvTsdw7cZ4pqiSQ",
  "key24": "3J1DZSNsxptKWheJxqYxjWHvq6DKkjTW3JZDtGB23kDSiMFhkUa1V4iNJvMiWacGxafzgvuNpXizLd6NiDqafUg3",
  "key25": "UYsHsALa3s7oxpWvx2uhJ6FSTghXipWwENccRrc49knKxK9tJ5UiEJ4wKUL6Ueop8v1p4VgYSRTR6vvGMTigCvR",
  "key26": "3ECaYe75UkSUwMwmumReGoUCeEx6YcDT2Npqp9nRa2cVf33XK4j9dWJ9UahVCXX3DarLTvc3nPNuKhRMM7FbBcZ2",
  "key27": "4MAYWBMUsrKmGq1GPMzJfJj9wD85hFjA4DH6eVXiv7PC1ScTEVwiKGTEjcfb2DYmd2Bc1AzSgZQfUxsh5TTFpSYt",
  "key28": "47ephtzids682mfw5vPug7ebK4T44qg6yccA6e1YhSQ1crj6DSA2bsPvwk4XsSeopMryEmJ3EPffhCwLYHjG46Ux",
  "key29": "4sVaimqrPcbfULkRbhvYdyjDqRTFTvpA37Advf3mT233LLbKpzNMMkGGagiMLiC3iGD4s78GNiJo6rvXMPQb65Gm",
  "key30": "5mznvMjqrB86esSNQSqfEQrkaQs1a2oPqw9f8LDLsT41aef3w19josrLmcPZiGQH3FffZVcMtMjVcoWXfwFCm6HF",
  "key31": "2EDn1ZzdzpYGBNhEDTniF4wRYS2XmfUYFjDHq39oVSiJRjBiZ6jwDzSmZGRT5K1ZnXJshKQS5KvGqjxDLYvzq8gq",
  "key32": "5xkuZ7mQkHSspmyMNuJkXGw9PDA1HAgmHFL7a4hPT2HNegCmjBmKjpTHYeh6fnpeyVZ5yM4MQUJWivCqQ66wUCcR",
  "key33": "2DjyNAqVxcHPrTcFbQAb9WqYtK3ArutnfBsZobwDsrqVi86rwF9T3LYDzUuYLXDvBTHDBLhYrygs2auErrbpMBSV",
  "key34": "2cGvnrP8FdSCwUDuP6JxLNJ4yWV9WNRpiaUhGcRAKkF19kGxyT8bt7vdFPNqK8fd3r2Ci9NhHcVeweK7PfSk8XzF",
  "key35": "29ZsC2HoPtmsy3VPQc8jvnbFnsGa28MDfzq2UzksM38pcCFxremid8XjP6YfbvzE9gBYzWYTvzYxZBdpnEdF7UbS",
  "key36": "5YhUpxDCiB4p8fveEjq4amsBAykmSZvS4PaFTrpPNeFAe4wi6WGNeT21CRj6mwX16yPg28Ru8yBvu5qhvXF1ehsa",
  "key37": "WNW4iQijqH17xeZzC69JaHZwHcQJQZ8bC9kDVFbyt89zwuMupraBn55r9ifEPNftH5k9QdWfHSTFg9S9u5KTFXU",
  "key38": "5EsHeFeDj45MzBC8GeyLGvJq5D8aCqF5HqVUqu5QBfKoL2gaUWdmbijAJEQmFugUQJbTt51wSZ82NTaahuVbFJcR",
  "key39": "2bTrFvTgk5Z1vjpwpLj8SWPjq84chtL7aWrjnAM9J3KSX5huVFf9rhWKxME7XFXr1LkKreBNBA9qSAaEozR8cxgg",
  "key40": "4Cond15Yfqbnms3WQaaUy8z5xKo6j7wdtTjMWTEn9t4Y6v5ZiwnuLnZCUQKURv82XTVc16dAB7PxvGRFT3xsWJAN",
  "key41": "DMnj3JTVWXMSY2WwKNQk2oLDhPSRfLtb1ncUjUiyktvks77AHrfPGhZUZJj6pNXg9JoUPgiLgf31CqfjQ7fjHom",
  "key42": "4nZCWcbUy857fDUBA9KXVsZNyh9efhWYEh2SFNKsS5i8rHYr8htSgK74vyxYmwL3xCvwcfZUbjhgLEE6NFeKmyCG",
  "key43": "5pRbjrmqGinvcxMjsLWYguwUw95FQwvFrCBy2oJPLFKk7cQuhZnEFXZDJu5k8aBV5gQ8hnQtAraskNRE8hPMNAMz",
  "key44": "4uSSMhYyn9WYutzAq6J42vBF3mhJeTdumZ1315W4M9NRGA4s9nXegBejv7mUMBfha1LfNagcfNmiFWFEmryhTMSi",
  "key45": "53YY4i8qA8vwHEkMBT6s8KEAT7V6gP2F4p6vEsa5tAiwxeQrLSF1PEMnV6bGvQoMWhkE2VUdEfK2uKVLABPpxmNb",
  "key46": "5HXNxSuyyfrrthq1ZKUzJAiKRxs6p26yNmUTF7dA1pnQtV4STtkFLks4U1HiZpphnzncBsuZD491n4mUgj6MEK1z",
  "key47": "2bHagnPyY3qwZbBYPgvpCh1ctqBH3iY7Ty3g4avWKiZvjYEUzGcQazKTBMrJbXarkM669a9fQP1vatZpePkkdhZr"
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
