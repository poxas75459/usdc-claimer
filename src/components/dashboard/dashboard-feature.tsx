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
    "nfi7LRgXhE4axWaXWM8uEioU7iHVZ8UpBbS46aZszk2M9hbhEyJunV59AUeVPRhE7tGndXHaKmmuaPXuKh2dh1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fJictuSrGezy2ME1CiSXfRgaZUoPzdfJ8qwVwxd4uEpZoXgAVdLz6thBFwjsJCmcMmxyLkSJq6n1Bp8cXYc2Xrv",
  "key1": "nSZJaTzirkgfwE3Rku5WHQ7NUbW2LmocGkdTxicGhuaWALms8LJLdkcs3WnZTVLWq2UemCZ8M712eivUgctCaH8",
  "key2": "5asxSGggZKDWdP7bViKgZCsRNQEMtWjXxJs7kUHbXJYaKB5E2yiB5SKQVjrt4oa6LPcq6QrTBdLpbw4ZYqEMHzBu",
  "key3": "2WLmyXPBnGhDSMRnFF8kieVN39yi6ekoeWLeed4wvRWxxMCJgNkkMDVAEg4EtJrRyy8f6tvyXCAdDTCerC4MR7gC",
  "key4": "3FGUrvqPHThFNAbSVavhd7azr5tEBxKcgXkevMQxpF3X5VP9Fnv9W2yukLDa9QD3gzkaXRfToeQR8gwqR4TRxXvq",
  "key5": "4tqUXwKWXjfU9jJQpGmyNhpw2TjE8zeqemXwkwxVDzE9bGMcoCrFf8hr5Ho5E3AmjnzNHyjtbZckrw7YD1PxN1kL",
  "key6": "4FFcEXUD4Aa3Tixm64U5P8bnFVbmVFG8xH6Z8eDsusMnQEb8rUMWAV94HP4jXM7u3rygrBBdmj5Pujj4pv25dbJt",
  "key7": "2ZnakftQUaFSs4Q1tHK3ZZVi8Ldu2ikHYdsTWpkcQsMyybsyGEAxDBqi1ZfcbMXSchpGzp5eu5DprEVP7cKnj5r6",
  "key8": "2wCj9McKfQfasW4pCPMrSHgTUdHLLzwXoqZ17mTy88NNdShjv4n1KQU6fA7Npe9vnx7GPaT5yocs6zeagVfn9Bmn",
  "key9": "63bx5SPF5q1YCbgjU6sHtRLftiaXppDioaBe5MXSFnLTmK3fR9c7rNK8nczWEX3Dy3M1k9ch3DFKbLttheFf8zw8",
  "key10": "5kmzLW2GuByUDBwoYL4ki6P4j34nfLgQCDdS82tfdgJUDoXbnmP78id2ah5qPPPqFwTrtMkgWw7XKAtS9C4hAon2",
  "key11": "6FyNP5JRH9Y8JoyyjaiFUckuphrBR1fmHMXcbZ3dHno1VfjXbMsqrRSsK2eUQEYsagwjBAdWV7AZfXxp1pWTb73",
  "key12": "Q2r51cgrSeqbPd6S8Bp8jwiBxiDKUQJj3shLRUhPwgQPGDRjStbR7BtbUDWrAPTroPhNQRVbvDMpVsJEEnpJSpN",
  "key13": "3zQGvaidk5a4a7dez256h6uckWE5AdLWawGXriaMCbdUXhEEHyv7TC3WyJzWf96VvoRvE1FVQbDgKQF7MMNUUjHa",
  "key14": "3U1H5ZqLWLmVo7Kkcv5dr7pfQQwn8oZn5mggqotbwRnYfU2aQg48te18k2TjC7z8792Qg8TZEaGRZ3tuK889Vrbp",
  "key15": "2BVTSgbW7pxkfgiWpdPPS7yqXHMZ9b1CxbcML6sHTNKjczWb2eyQZowLbConZe2WZRqCPtq58HYA7gxSEWH2YjTt",
  "key16": "3zXyBT6L24JSfvvnpU6HPTYurVqpCVxqzGTSKYUbThToksQVW6Pn3jJC6dZRfgL46jsQmvLg2bGSk3KWqzgGddtM",
  "key17": "4LRtq3M9G3vPg8g5J3J8NAaXLjqbVN9hbbGQVctsXH5kPzfAhFwJLjRcZ6bPwEo9NnxrXqnBVFxH9kU5YNwXYson",
  "key18": "5CPAbGAvmmCm3jFChL52mxjL5kT5rou3qmHPDrSCbJCCiJZ3ZJAB9q612oCFXtu7xr8jiZkvHaatJKugPH6h3eTJ",
  "key19": "3ocrEof8i9x7X9J9NrCkPSicUbiMhdNs5S9NwpWZVhgF5juHWWh4L9ha29QTRS5if2zqKK9paqdSfHVc5uBKQoxd",
  "key20": "5ypQVrcK1RboSvnT5mxqtjtmaQGBZkR4g5HRtxKREo1wcHYMorbQ86F9VrVt8D5xfe8z74sAcatdtPuzwswrQjSL",
  "key21": "3bRMuwJyrHTARbvqY8TEnjr6vcpoDTpM3m1M4y55EWkB1dmtBgigKEhbVpQDfaLrRPXzSpt9kBExrYxtLEMxEfWu",
  "key22": "61GDRsyzGYBdAVT8WtTGjhwXjdTw4WBaXtALFE1evkMTNnR8hWfJsb8yRiQJcPf9rXydfZPcmVSJBGLF5hM2PJEd",
  "key23": "5HptbcdvNQ6dgEgVX9W6gEsN4zCGDuKrBMohtdZCMoDdMJZpZm4DtRf9QYCHGmS55UUBppvZYmEiLj9KEj8ACh7V",
  "key24": "TEzDLucE6YekkaVFto51xqWxRCgcbe1VNYRgRYg2XNUWui4sqttkmfLumpm6SJyE6Gt9VXHza42aVLKAXw78PLQ",
  "key25": "5aeytXifAZb9SGHb6g3orDdxTBCzQJoVdHF18T3wmpNPYY6BXZCjwAVuL5VDSLPLmHoS89r22N36YZ9JGiRnQiwS",
  "key26": "5ci82s7haAc5jah9MxjpbykDTCsqgcy1YzAfy32bavdBJFp6Gz48hewSFzLPeKwhbPDCxNDG55dAiDN3WHweJCgs",
  "key27": "3i7FFMn4x1b2e81QeL2qVciCTySYfGUtuU29cr5fYNyGF9wQjhwb4DdVusteAiQfitSch66va9PvmWVhacqzCKag",
  "key28": "qPN3uiEnkM5pLYnHpuxGhLpG18NhcNtwuN5KhJFgZQiQdcK8Hc42TZrkH9MEzhDD5m66vPdzrVMtcjXknptiGbC",
  "key29": "2nBzvE9BZXZMoYEUUF621Lqt3hMqvn9KL27jMKYKn5rDoCnrNNTJ5Y8sqgFwvBu8U2sNttVMXRwWSvGgzWmi4E3o",
  "key30": "EB3hc3PzErDba721o34W6TaSfe4WxKg6dRu5TBxN4sLCh5zTNNKpTjpfH3Ctjjgre21qHdwzHaasfo9NH3bcnYW",
  "key31": "5ZZjB8uvhUSfaHudoEuhjcP6cZ4oNRdA8mkHPPNpgKnaPoCocVPPGSFRUPMTvidX3tsMNcEQRvLiAVyBXbydWzew",
  "key32": "cs48cBbMbKBP7oqTPXvVU49kYNNFfhqB9o7WP8Q3K9kf9tZsikXg4541xLhXmb45hXejQ5zKMTS8sGHo5sdsyAN",
  "key33": "3KKWfHobR6EaFrsqgKmqR37xqSyvpN6w34M5Ryn7Z4esqJxDiwLLzk9RCpR4nMkMbEH7xbuS4ATDH9Fv9jmUEMSa"
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
