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
    "3KSvpUqyjGpCjbo3e4RsChXNTnhGaHiazS19pzrdtYC4ejJcdmtKHwHR5eEW8cPDsxLstaS6T73pN3TnXnpDye27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45h5NZYfp5Sd8bawGtQWCPFh9FFnasHwua3r56nJNRhh9hXxjvabGLkD82uoviyFnbdx9aeYdZWbGTtSKyRqNopU",
  "key1": "2TJntpQio9EuuJXkeCJ4JUEVCn1Zz7sPYvNG8Dow2FP9kMqTKWLymPbSYtUEVi55D7Pz2ou9kbYLcB6Ve6VY9RDL",
  "key2": "BAFchboSdbDJyjm1javqv16pV8Rg7Rws63QMufV1YcLcSkM7S33vkftrYgk89nHM2ETAWzktnjCXsKeYqcucHrU",
  "key3": "8kDSyjZnZwWBxcmpTTfzKjzVmUoabZrUU7CBgQp4yeJtSwr9fgdBrEH6nTih977MnUduchVvj3mkwxXbM9Mgt1J",
  "key4": "5FwcCinUnyEp6XwxkmoNMXDgLR5awGgKnBoezcnxSzTaKL7XYD3y3QpCJArENTQcuG17Wb9ABHteGcP6SmSVae7J",
  "key5": "2VRiKs52kzsnzzqEpHijr9NaZtr7zbVA1JLXj9GA4VwncmygeUXixjdXnurjBpeBqFLP94m96gb73gnmEts1bLQ6",
  "key6": "5TD65W3n3bY96t4s1UVzAjsokRF9VVWAP6CC1vhNWw5VsxCjYpTaemMoDfCHRrKD54sQk3Dqz1pJNMHt7vdN6yn1",
  "key7": "2g5QPxDVE4p4NgiH6qoLFj9R25zbSGW1vo2Wr4JJbLs8z85Q9zPdG4tsmBSm4h3PSJfxn6xTTTEAQReS8bizV1r5",
  "key8": "3G5pWgfzGhbeTqkuWmd2PamppNcEiiZwm5CZu4ntUQQxMp4eep67iQDNmAbaAY4srh3YkJFyRWXMWoHmNeCCfyn7",
  "key9": "5mABPXGtrmWkpyQPqU7fEcgAGnmryPzsbq9CJBoW9hMCgo4DuHNJBPojf1darXf2oprsok6ncNWAMm1oXAbjQncm",
  "key10": "57cby7Cw7GZ7ws4FGki42sXZ1hRG521VeDWdHaNb6wQBtEfcXJFfbbkCEgZwHNJPkHXGnB9R2VXjewpdeHduiuY8",
  "key11": "LfPdLHZoRwtvGrHqcRm7hmwPBGPUDd2aP1uTiNKvcxvjmpP3uHnvZgkS39hfxppXg2odzrN3Y7PMAgd1W1VGbxC",
  "key12": "56mVrdxdYq2tYY61jHT5vwVnPutkBzDhAjTnFb15v249ps7YHByD4JhMBHccHuDdMyuppz2mdPnjNPiUjVVy3XnG",
  "key13": "Lhq4jeCGu31rHm8ZKuVHjZr6KmXw2xMhtF4pVszfpeL7gSFV8smws1miPsx84qQywzQfBVddGXqj6iTDoAjC6YR",
  "key14": "38GVWEXbNASiCDMyQiqQ3xwLawADuEetgLqZRZrRwqSCX8KuGyLrW5bEpYHS3W9rzLb4nKZTz3hzftk2Ci5ys8Wh",
  "key15": "4wZ7Vnzn3QJNAtTx9JBgDg3q2K4fbLhr746c3G2TX1dDiGrga8rnbgtFzmbA6FBKD5Mipah3FwpdnZo9Ux742k8T",
  "key16": "2e2shHHXM36G6N1HgiJy69TTcRpvbfqNPzgyafkTcudBERtBLNhwzAgLMqnku722oFMxXz6QPTfX9GeYVu3gKGLW",
  "key17": "37w9v6NQUScv8rHHih1TufvHPDR9Eh6WcPeWGtDtEcYhemNTnW6f24XXzVAYiHnEBYQMDB2oexPiQP4aqiBJiGM",
  "key18": "4xVbKXZ73dQGon1xchsjkBSe539iUsQs9EGGxDwDqV7KtLxLo8KQMFnbDpSVoV8fZCGCNz1kjxShmXxdqa49cwQn",
  "key19": "5FpjDD9BhDrBLFsCHCSTKTWdx5nxTAQJHJVQwPRyMjq49eJcnAxkUhVhhXUdhmc9u8tYmJyuJjRx27Vcuaz4Bn8n",
  "key20": "2hEM1axRWppsXq7KsAv2TKEJAiaY4D7GnEvA2Knch13z5jmTNoRX86nAt1EXydLkvnkG98fomr9TGHcUz8hyuoZp",
  "key21": "26oomVuELoohBF4vTUpy7DY3hX5NCj9bRA9xxFQE2nzDhGdDxtx1Lkmf2zfZAY5PofR7EmWnTj5ftWAAJYR7oKaA",
  "key22": "2pMV4bf8qtgz27cFgcm7SFaxyWsrNjUDJb6MuzUrbGxQrKkyVBk7jkRCfJgxr9kHJErcajdqRvU19KcUPZMtATgu",
  "key23": "ghRV6CNYaPFJoJeQNR29x4UZLtBp1cV8gSEMq9WxtFifMWiQKuEa8vYYTTCro9eNN9EVBGwL6vCzomJnEXn1nDZ",
  "key24": "5PrrKetDFAn5LmCSYmuAfkSDoqnn5rBrpEEYhgFXmC7oWuzgfdpsBjkzNba3APSJetdcXJG6NUXGE699s2kpQuhv",
  "key25": "4iXigzKjZieCsQaHADWL6DrPoRn1vsVzsKeugGXuGEKKtQ32Jww2ZP6g88h2ay3KzgCMZVeB8Aj9aLGcV5aCXCig",
  "key26": "3FRfTr4ugcyagGpPJPrYu3r8ZFoEDFWV48Pc7DiKBmUVH6KvvdxCP6W2Gkj2jmD7S6K9mzvrFSwGgyrdyaxSFZtK",
  "key27": "43Siht6RJWMKUgZu4xgv8b86t8Pafy7wuV3V6xb429bnez6hzX8EKpdw5erXoip2siRhEGsxLzYkD11zcyavP6T1",
  "key28": "54C6Y2h45o6DqykuQj2dEwLYHpAbSHnqhGP2LA8udsp9WaYknVQi2Bj42JYrn7hL5hGtnAfnH8shhycnhX5usBjE",
  "key29": "3mNuVjuiDDoJvrT9QbwtaK8AnEPWWacDEKpgpYJhvbE73EgctAJioKUDMPXnpPMu65htmHECUSpSEA1gqqK8M6vq",
  "key30": "3qRhk1phftiw87wfZA7AL81UE6AkdNa3ERdsyddKWhx41rnxMBizfmMuAaVvyJ5XNq4S7txeXQfTUXw7egtnuV4z",
  "key31": "XDWW1F29jN23dwvpVVayzUCcvhB1R3iBscBz9qVanq1FbwhupYuuQ1Es8tE5jHpYJJwxHDp4FTThShg49xpuaz8",
  "key32": "5dnBdxVEpGdY438kv7fziJYBX4xcuEQfPN92bwFdUEPauar9XE8bnXRGRiAuXmPkuqbj6f57rsE24okU2DS6VYw9",
  "key33": "KeG4s5isogrLRn5AXcvHGaq97ALZpHyJD8rDHgeB83yjyBqrg7NYi8GpEFB11UmHR6ywiNi61h99C2msAsUeotn",
  "key34": "8uQtJ514hQoZrTsyqnFhECCzvcPodrTw1GbkcKzHjmLbCpPM3K38mxMhHKM4PzEwNzUCmZLnAcveDZ6pjEi1nRa",
  "key35": "2puegX5yrCqH9G8XzXbxQWH2udLYTCZRKVVJQfj3fjvf1qN69GQdfiFWPxRwxC47VQQESMiLPCcR5z8CUG8do4p8",
  "key36": "2ufhR4kWMMMj6yHegeN7ev6SEAgNDwP4DwBJNaTBDJ8uLjFsPWxEzFyszG3oFFBFbzKqqq5E78iavpcyKChc5dPe",
  "key37": "2dujjKojNoV4MzuwSB6gUddvUF9zCiLdfgg22e2F68f4LL17VzqHsqakm4C2jgTrVVBoe9DWaChrYQ5UPBNronhU",
  "key38": "29hEBXJoGhNYohsXJNQJFEDLShDvGC7Y1f3fjBSabiG7mPX3HQzJgYvcs7YgvJ3cpcRZTGPF7dqnCM9Q7tyFBMQi",
  "key39": "2uNGhbovkxWi7umFodoUBoWE8ZzD4Qm9LPdxPEcnX4ScJyfMCFkzjhqTkVeKiVEcQ2LYJnjSHR22N3B8DgTDJMgT",
  "key40": "FyrLi1qCjYVTuJMJvSy8gVp2r5s3TRxXMgrXV8L2yRDxSBLs5q9w4XF2jDTzHQmbprcjgd7r6CAnjdkVBXfRHrA",
  "key41": "2wXpnHkoCTEHYWxxT7qXK7m3MSBBjSdvY2ZQLNe5Ds3h2YDYCyBiNPPoHJ8f5NTdXKuNgTYZ33fhrFxdopmrWzb8",
  "key42": "335WRKpCgYwQrU35D1Q5syzq57xZGvyzYxhTSEVTbfpfsMrjb6eaCHTrMsaoP8dHyu1UnVM4QRMFJWLnSEPmFDzt",
  "key43": "1FjykUaWKUiQdEvHDpgMz5Jb4vRWXT9oh7RJJmGzwsQ4RjWvzPZNEkAPCAA4Juitsgc5W8qwG5V8iAEA5wPjrCn",
  "key44": "4d529zT4HSS2t318abngMRUYAdsgLjT33AqxyzxKdLhnUnvjiYaLxqqyqRZVWyzfiWfy4fcR7hC5BxjF3MHgxjht"
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
