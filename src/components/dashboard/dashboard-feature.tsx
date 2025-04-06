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
    "2ib6X4fwi1W8X7Jm6vmnXSV8r3KikPNd9b4EHQcss2CqctMwRJfcGL7mu76GymWoLtHTwVgGUfQDC1Tzmnqax39V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BiScD8vjps3ExwqdNeFozXugft6qQBmRW5dLbiSB2zr5ikzzbXHLeVnPZSXd6rVaD129EGNM7aofst91sbuhetm",
  "key1": "5ezjtAzS8EnQMDLz8RCoZcb5MgCgteh9yQxbNA7ck1XmrkZ6D8bSXY8MjF9CtbSdAZ4Jmice6CUVBVrhUaFaoz2f",
  "key2": "3GrD4mbSQqT68PT6pUozeT1PyfgyBNvu8GxGDVZ786zpEymPW7F1Zs5KMNifGRR2m4zpaBD2jDvk56WuDr8QHSfU",
  "key3": "5Y342HGcfF5qB7o64f1Lx8VKUB5Ffgw1z3LGs2GSkEFj1jLV7HrWnxHfEERLc2juhusebMNzdFju6Q8ypCMPaEHC",
  "key4": "1AMsYZduqH33YhNAEuc2nv9mieoekgLUsh4AeNeffQpWnJx9rpYKivfHLDHBuK76cW4PmxbxkeXexpao9i9Fzrs",
  "key5": "4obAM8tNaFxE4DpogSL7qp7w4h2fJJsFnwbymumQ7i6t7NDy4AoZUyQSRnE9ogb7XzjFfbHhc2dvhfqHmuJEntoa",
  "key6": "4435XadWQdbKtUTExSHwL3aq65u3PbehYJWVmtswAs98cY8DGF6CXS1Jf8T2AUwGpen8sk4fWiDeKkc8bNCoMRwJ",
  "key7": "527XTzAHDoqq8Egq3kw7SSTWmnyBQvVm8b4iCcFGLzub9dy1Zjgp6USka8g6VFeyjHs5p8HaGJi1Pii7ZSJeTLrd",
  "key8": "4Bq6kVWQN9KUdvFSdMP197P9ppWZGNrPLqt959J9jHNfjQ683u1UCTeepGvTScgcjGBQUJDi9xumG9U5zWMRvWLp",
  "key9": "MNSeFA8no5M3Jy8d8dZvGPm2KkVbcaERLJSvC9Tfi5GdnHjZ7v4oFLdb7t1YW9erDvDDEUfZ4Z2cfmBrjDBg5gy",
  "key10": "5Zfb6b59TEAVAZg4Q8DL5HdgXdbdHdAffMMFe8evDddjvoPZYpT8LUGadTVv48aXPWuDNimijQoLNhApqMC3JNEq",
  "key11": "2P9vXBXZXTTmraJnDaWS5vbjma2cXTZ9NnvBDjNypyGcgz2oeb8ygnCC5cNxyHo47HkeERRri1dd89TyQSFqaQLK",
  "key12": "43JeLWjUj2ax7AerzLTtiAHWiTSjEwYtiu4wDMzD7jQ8KWhKSWg8p2Y25KBfWcVkNxQxz5ZZWSwQoM4a1wkYxdcV",
  "key13": "5Dr2sHFrnJkKMsN7yQbrRMBfNoorKpnHqW5XXcm8qt6XmWV1x6xetw7LdP6UZv5vRbnBKZNDG6WiSm1cUqfxBEsC",
  "key14": "429og4gXQfoRejRXmuxLqb3R44N6fa428E8PxhvYQ7MVtK3fZ9mYfhQCygYGB3TZvdhtT9dG2PVTXMRgDMjgnvTS",
  "key15": "4xJodvuTvGjcwf6jBJW6gCLXoYcHyumEbHm5S9RuAmJXWAG6q1SBWDfuKEqQigco6HiUciL5p5KPYPWxqS8NV3Bp",
  "key16": "2noZadU38qAyujWb6VjAw97ZEhMpnJYTiG7YYo5a4KnwMArk8dutJm65iGzHKym98Jgq1E3hY3pxzBDf4AxeCZ2u",
  "key17": "Re76XgAeG8Wx9cmtbES1LMBGBWLjR3RbFMLfm2QWPLPeuDw3PGNVbdLxKLnRVvzCUVs7PB2ZEUoYGoJvz9jvREL",
  "key18": "4CqbCgVi9B4SRJ75kVMZNoCz2zXfzYD4Momtb6VP4evgnkgEnCr96JFKoFXFEZPHUdYnL8fQrX6aUmJThJvKY6aJ",
  "key19": "2VikvXsCVm5XCwDn5qar6NZcdt6BibdQwNdsaFEo7rwRsQ5P3GyaJu3e71fD9XwM7tmAPb2d2e3ES5rxNFgQP3Dg",
  "key20": "3KDfSZ9koPUd63ty1oRE47rdVrHpnMGhvKrdPg4rPY92m4KRsthxtFAfSjpxnQG6zekHm3ef3oDcf8udRj4S9wCv",
  "key21": "46CKSjhexRwyWZwffmk3crmx9taKTk9Rq1nRAHA4GBDmAhPLP87b8dfraPBdgVjrX88u9UojBiSpsbxWHy2SnugE",
  "key22": "33oZrejx4pqmN8DaFv3XjaGoaKNTWjkEub1jSA9gDu58vxrJftszomg9sEqg75hYK3brC1Q2pb3NNgcb8MeBFKub",
  "key23": "38N2fqxvmyRUdUmTrQyWHfcd5Trfg9yW4a9YvHH9QoXFML94j2t5nFmqsnWoZGU5ycg8F9NUvyhVfsxbMJbbX1Xe",
  "key24": "2TAJAjcdQ4GzJam7w4BzhsD4y6fuR1SqdHKTeJe7YMiGot1AHCdp6sdqKDcvgPUymQgukkWYKufja8ZHKQ6NHP4d",
  "key25": "27LA7eYLHxAfmt6utoQpMCWcVc7CeZjFeG3mfxMcdCVmksu9gKBgPJdgmPkEhpm8M1kCUb9ipe2wtjAEF7psry7W",
  "key26": "5HZ9Pp7mMVTeA1TPioc1q7m4fqbwXGGysqovK65fhZyU2U1ttuXhB8d4Ra1XqoRda9tj5XU6SeUQAim6anaaSbjH",
  "key27": "4k1yeRqfRbNyrvUjcgPoZTry1mQdxA5AE1NbrY9LFFLXHRggsNHj3atNgVqWXseQD9ShWPRqSH9wFtdLsCwR8Vbf",
  "key28": "zkGdVCgVk3vnpYArHBkKuEMeWQEqYeAG4HAXzEjtmXhHMDsVGJsX8rQEGnPKAbms97V27rRJjvXGU6jpn8m4iRa",
  "key29": "63TdsHb8PjNk8kXB8HxoEviYCA48BuJXTR24GkevGsNyJnSTG5p67zAwc3GMidsWDHNBkTtDgapgf4i6NsYtm4Xf",
  "key30": "38gvcD3jMQHRJUnHDtEKqaxcTGjM9mxD6wd6vVm7oEPp1SLFoViGNmcv1EwtUETMnbZ5Dqm2y1vCiWKCq4oDmGPS",
  "key31": "zsRVj5XYBZr4KWCtva3fZuai63aiLTMxavVa1nQBLpoNiGsfWVwCkkwd5d3et5sZW8DtWcvBSoKPDFFuZKXomuq",
  "key32": "2yXtMp8zJMqNYTvPuSBMGJWBVN2q2x8gjLupF4FFt5WCssmYwJktpiPqyoU5QbwLkD6NEocZiWxMTCdHfqqfBwqA",
  "key33": "5GS9xrvLwSnjwmRZTzC6kPvKLQK3sz6hhaoHpQJAJytw1i1WrruxrTntLhWRHXoX1kYrxxgFsbjwT5XgYsxr7Cwa",
  "key34": "2NEXJRzFU13BV1ja7xZfLvz9eZ8m5mUDbqHKGwwdKrtweSeeEahPVfhTqWS44t8GpwMyRM1VT4smPMXH5ThBj355",
  "key35": "4XbJkNdsp6uHGmHd2NZsFajJG64huEbyM42EFBrwcE7gPDMgh1C4gBzD4Wpq5UhZYMKNR8vdWjhQFgXsvUmGJSkE",
  "key36": "4BXfbyAoZyphdCjmL6LeV3gSdHCZi88RXW4oEh4ZtBdkiEe9c1DxuNhHtEtaKjBDSzKqWcSWWVqiG8zA4bHvD7eg",
  "key37": "5529SELrAxMrRAs6AP87rCjg99y6giLGobBqmgyGgEvuBg3nJq2KvBNWnJwxNh3iYT4dYyuZYdqCYCuaEQ3nvic8",
  "key38": "oqFg4ELRDct4aSh73P6XimSmvTeoBP3xvcHL4jbBMTsb5LbGNVXGEgj5EMm3rbryNJtSUf42rrLLnUPKwCDfET1",
  "key39": "55p5yQCWan8TZAPxcYuFvDBT2TKKto6MesmuR2zymwAcknDJCtWa7jN7WZKQktaEP8KeCZ6gSMECUvFtgjP1SBUF",
  "key40": "61mw52Txm1R341sAR1o3gspqu3r3pkk7bbfSdSpfi7T3nrLus4tgrcsFBncJgR1it8WcfsLypP7n5dTDNktroJAJ",
  "key41": "3cmXjZtfC6PRmBCd27Eu5U8gbMU5YQqvkUHTZ2duZyLgr3Kr8YB71FjLt6WycZVi3rG1yBFok6QYV71v1Qvx8yCc",
  "key42": "64FggfVmvmprqDzdA8Z6GgQ2Dxor6wsqBz8nbM656Va6KW3Ea1pNyd9A1vWriAwiC1GHGpcyqv77iqqFM2CTa1xk",
  "key43": "49iNhPtszJuAegr6fZJGWY7qfEhCn9hUruqqRnfzfRPxuf5Dqjg4DKzXDUCEYGGyr1JdQXgroXBrXhVxmGYpzqtm"
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
