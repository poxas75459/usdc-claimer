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
    "5zYkJhL1KhGpb3HgMYq6EoMi6Xc781EYeVY88Veyg8fPLdegLP5KYKBTK4SmtXWffg6aXfXbLcUtUmUbqVfkzBHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26z73g2pRkAuTMjUDThXLeukrCkGNEnmF8y8wh5E71EiccUDbTFuwbmeHiec8F6ieoqYLP8k9EiT4UAAT7uhgYMi",
  "key1": "2sCmspaHpjEc4LmrVqZjEDD6GYxExbmxnyte3ekfmfyWnPYgjkGJFzYTkZoRLEBZRGhCUppKrzrswA6E1LNjPcnx",
  "key2": "RamdBm49ksceJXZ62Y9j4pdkVCkQhdjWWyeq6Nh8Lt2kJBdTHaatSbfjdU9QQADjoZS7B2bGgUdtLyoMw1LsTqj",
  "key3": "EP31YeZCH4fGfeYeMsUtqvmkpuhUhJNr8x6QK4xtQBnpFWoKKs8QfBqv9mKT4oz3tBLtBoLP27ByT2Efsb9trNJ",
  "key4": "HkuGiFSaAcRYFjz9W3rRkNjnxD8tjcqkCniGDd9iFAD4qp2Ue7VMaWiD3zM33FF7ykn2ZvhaVRgDvgcPzgfawft",
  "key5": "3yMFyCgHwN2BU3kGMRBCpauBFZs8rH2vUxTKb9L5a3mAYpSjQ3zo27ErhjH7V1ZgLKkmchwd5kiabC5R7kCQ4yh2",
  "key6": "2pQhzyKLUX4UgKmQV9X3ad1Gy2quDpgqb6LKwKRgnBedwHQUZAcvcG1dyGK5cuoF4Jve61M3pjcKPdGL18yFM2qT",
  "key7": "225imrsVC2eWmqichGmXNmuAFDVRmFwELDj3cmXKtNG3zz9MHrnBguQHmuh694f5fb71i4H98C4LQ2u4bJKn1emE",
  "key8": "4Dq5fxEYjy9pjTjs6fBJ67NdmJGy2E1shLtcgzKh469qfmjqYiSyTup2sYysQQxKjv87anpuPP25qXgy5oLN6rw6",
  "key9": "5umhn1H9FEgKZfEFyMETtdqRkkg9aV95aP4kffzgYTBociyZPaKZyzjSx7iqySZWmgGRG4vC7BZFfMJMnCc8wXQp",
  "key10": "4ngYgT12cKuWdr5cn4XMQDhrkU4k54CrgfBsdcw5gcNTcZvXvgg9AahdTxnLTA2yj7TcpWc4AqDitPCMktZUiH92",
  "key11": "ANZTDn5rh4hneecqWhaaXQUjtSh3imVj7kCG5E79x6Ycekvh8YsMUnDKFTVbPFReLqzNQzGSrjmQ9STjKgnyQbN",
  "key12": "2sbzaz2pZLPahKsMpWf3r1qBifVe3ktVwqy15Dagxyxhyc2dbtG4tSogntWjmLviL6MFhE3E6phXiqMDEPfi3ucV",
  "key13": "4girdCC3BkGx3Wq4CjVy3yiTdDfkmhhiZMw7rvurj4dUfbNwMT7qwn6TiH18qdAAbTTzcamxTKNKaQU9zEmVNTqN",
  "key14": "3WvGh18YugFQiqGFjto6EFwgJY5xd6sY9wp8NuNvu1Wvu1kgaq3E2G5Csrzgkz2mRDJbeApM6YAHDo4B23KsnaBt",
  "key15": "3LYMs44nvo34qENtsgcXKVQwn9y4z12VzrzJ45SagpunXCrxAWqJeaRA4sm4Sq44YCHxGkFiRavcEa2Dk6acpTtk",
  "key16": "2A5c8KncastjuvtypXwE8WdMzjqoQTsu9rpCanQQ33JHjZf6YkwBCMfaZv5RLmZcEq6qUFYfib9ktCNWCxxVchgU",
  "key17": "2LVzM6A89Y7uPFTPuvzZez3N2kDFvseNWGXLH6bqb1atPyR6a99R9ekXgxJCZTvEQZnZCNQ6yP14MZvmkBabjYwD",
  "key18": "3Na5JHtqLF9JBVNn14cP6dFj627C8jUQdns1W8kXuAQr5gQkwhoLKkDremLGirk1Gf8UnyYSSDRYBY8drAEc9PKT",
  "key19": "5kpGSmEzTiFfz8kaNsCZPyL8yRifLW2SD8LAUHGQymAJJybbitnAqzQSv6ArKeBRM7HH1zf86DNzcfV3gwKfu1VF",
  "key20": "5eFvGtFva41GZWreoTAbKRG3H2N1Zz4Uw854CKwy4VRAi6SPasPGb5EgvcRve8fJGd8eApz3d77MfYuP7rCZqGz1",
  "key21": "4hB2WNY6eRSX6Tv79GEjvgjN4aEV2uHc1CVjanequhcKEuPsMWrEXpo25JTGaVgXEN3JgdtWipX2DWnoL7a1mRte",
  "key22": "aEwUSbK4N4JFiiHzcutZim1DrFLCsLGYApbXwKjZTwCt9ccTe3w6MiANqwUV18hmbV8GaxTp4NTKvhwhxGQyB3v",
  "key23": "37uimZwkeJQDqoGyhjqxnkxNnWkAzzwCSiDVWZbwootnUaUVo1x5AyxRzjSuGcVx8XNa7DcFnm7iMvGoszXFTNqC",
  "key24": "2xmgwg6HBsuvpnbMp8HKnCufQhdqxnpRbNW5MVmPnNhWfnJeAQXYW77UanNQv3UbJBizzUTB79sHkNYHgHyX2Sh2",
  "key25": "2xyhSABm9mBbfPHGKVh3MVnFG2u4EAZzCyaL6f2ze1Rco8v8CGuizWcCQwgq8XZQqEPNpRD9MrKKzZbLL6e9zXc8",
  "key26": "3Gxp93gyn961wCMpgfuU9MMjM6GvFgDxdyhUhND8uHQP6aATNhCMBHEv2yviBwSrVDt5Cy66Lx8AdEpZfZcXfr5w",
  "key27": "3TtMvLx5P5YzpNSwTLfnngcCc9x8gEmipjp8s4GiWsdq3DMd8TNX4fUvc6JN9D4cXRHCw9CeYat3AMQmAWsjGRTq",
  "key28": "3LVbcz3cBAUJuvZkRtGv7wvnhsbhie3ELjDY5wUag4H1ov8jXayWVqEwjerEvq3nyiaCpLsE64TMUmkLAn2ALeQw",
  "key29": "3zxUFKuEBHdwgXWpF9q2w7SULN7agjUpfrofejw3Go1aCodmBhtbSJHzrah45f3PnRpEGRwdNB47hzyaxpRH4mbp",
  "key30": "56G848jUFctiiv8AvKuPppMPPsmAVyFKpy3vEJUFiNT3gzuas8CpAyfm6yvVNpxpCnqmcL7ysVEFHwGsTFYxPyjt",
  "key31": "3juNkM6QRKBpWUbW83SUW5w7TfZpJEWygehLEADSR2CfssJMHbu9MSNVkft8Zs8jBKtLr5kUNr7rvFcsRHj5xyY9",
  "key32": "38jmU1gsxYBUv1FptCAj7nsWwZ6iYrDvYLo2cBtWc8mgqme5gZ2mk4ofrqQrQoaMMEHjHznPuh6asP52jRMkSEJG",
  "key33": "4kcULY8unubxcy2oQTQ2EVtuNvwo6neBeY4reRHKvFJtpAnnDuKu9qm1GVG1KPJF2rWZ5PMPLTMTTUo9E3csQNCr",
  "key34": "2fyXfSoPbkLxrXsqWsyiVCBxS9oVFnCpJX7rhCdYUA6hBkVqdxMR7HSVCKBGsfcZMA7Mqp3vXrNTMnLF9sDGFs57",
  "key35": "56UkhKcKBaixfS9HKURe9t3yPJWmUkLndKhPifurviDRf9A9v9uQq6zmMiThnAtBpGhtafLiscsUFtNEnrh43VL4",
  "key36": "4uetY9MuNXkmHc59WpHpLyotMLFB6jMQH3imRDBTCvnKS6vyNq6zkVgggtmhHc3ZP5SQZ9h2PDgPnrdhnf4mjNQs",
  "key37": "2YnW73nDVyNXkeBbgahYyWC1vEAiTUsaBHeCaD6DBqXxJoyKDxkC4YbHzNfbNCWJQCSbupnG4kQRxZVGvtAqv7nk",
  "key38": "Y3gpwtLPAJph5hULDn7CTtj6xRHcsGrmVRd9yFu9hu68mFLpC8MhxAR8enPcSNLVfCN8GaJVKS19c7hzctni1Mb",
  "key39": "5HNysA5SHz2dia8SWE5D8gvh2eAyCan3mNnjHB15gVPXK4YekCNJw3WSLqRY71Vv8ntq3agXoZcmrmbjkB8RPyYP",
  "key40": "3vaQXWp92BJU9gJT9gDs9Gr6fjk3va1V6uJn5FUTvsYYMoA4McPVNXjQP4U9Wa8hRhzirDafBw92rUVy46yiNGPQ",
  "key41": "2ixnsnBP8DVKk1P5PQC223eeyw1tXQtH79Cdyj8o7gZ6JNh6hRgp4g9gSz3pDbk7NQnnMw4jpR4FhdiDrjrVYfeS",
  "key42": "2cydyzn44qDU14qafff7HVu7mQEXMNLam2BYwxVZWcYiSZqcxJwhWUrWf1xNBtyrkujCzJC6DQEf8Y3iQJKYXfAL",
  "key43": "2NnC7FH25CuLm2tm8WDTKcnKnf4C47w1SBCE45ysKwYVjCvdFoe4uqCfQ7J9whGWg5jkxuEN9uHnfBmvtbswvVNq",
  "key44": "5uYEpiGH6MykJFdoPB2rmab7jiSdKzKdRygCoHLWUtov9ZVvxEdgXxoA86rKduZi9qGpZrcNBvkJdGrqUkMdEvGU",
  "key45": "2Gi9hNPRU55465wWP5RgepM4S926CPixYq3Z8ztMh2DJur5D4zw88RoCtsX4Jn5DaDJsBorHw26ZSYCW2htkkgsz",
  "key46": "5S1XaFjXgbNHDm9snFEtxj9kgdXwCEQ57zinALR6QRVinnmUDJfBqe7RjnuU5kyNXjsCyDpS7BUodiCHTjTU6xH2",
  "key47": "2bFgjdb9JZBkBchuAfrjtgUiMYD7B9qU3JeDER77REdxBdFrw1j7vDXiLX8o258p37AyYkEYgm6xymjkwVydkj9Y",
  "key48": "4KeNBxJgUB5gpZYuYyQRPU222aLWEuhjB87ViDqRRssZMLTEHs93C3BqVGZ6DTEZRxex8p2xU63HBMMPQ3VMz6xw",
  "key49": "4o6o9uo3CPjujo9FEZ4d9oEmcMVRsgZFyhN1ZsY5f8UijMHSkUrU4sGpDyfSghx7ySJZVB46PSzbWppxudeG7VLX"
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
