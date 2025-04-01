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
    "4RUNvvkbyNRj3k1T23UbTsa8KjiHEVs67h55DtwwE5mtwPKVm1jGeD8pmDDdw7uXSGA7axashzE1VG4eg1jquhbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CyaEmD7egAJ5HQSL3fbsmAj2k8i512kzMAGVPB2ZvKqHR2mQW8REDe9vG9LtTyoMA4GwgmjQoc1tW4tmdZDXWCU",
  "key1": "5SW8xURHrSHJoP2oL4LPsiRymGe12q4QSy7A1T225bKauv4ctEbN3bH91xLZUTdvCNxEz8agzdxsmigYUc4jcYMw",
  "key2": "4Lvj65zhRAgvjDHkQkgzv7iWpxSvBqeZw4wXNee4E43rLjAsrXotSczTgGwBSUVBSytJYP4Ps4bzVZNvvvj9BWN3",
  "key3": "FCLiswaTzySeKTWhac2uMYo9YGRCWroTd6kAPZyiEWf36pLqG3HPAvTfCAjDaW5sWHfHAuyNvoJjMmkeasikMTP",
  "key4": "5Bjd47e4133oBsbfiovJgYhxZaYMkeb87Hk4425jWGUuhL6Xz1upotDot2fmixU7MpswbabTcrASWLiSMWNHb5xC",
  "key5": "NoVt6B5uv6GNGzNy6CwE1kW79Vya5ddgEJGBrHskmvYXbLa9hioTRVTKC7DuYsMM7grdVtW1EmHtN7EaRwKA1Ck",
  "key6": "3gaBYu5QW451TYLDowaQxw9CM5tc2fWrVB3GiQJxu3Eib2n6tDHsvF9QY5uVsDzo52fbusFH7WiS623ZVowFtizA",
  "key7": "2tFHgczoy9jhz3BFvQD4D3Y9C7iqvizNd7r8dWdCJyPUWwbFYQvXVszPoLAKzNPMRxoRon8RbMfryxJsVM2gVD1S",
  "key8": "3qxWHG43kBPCWWgpBBqUV1HMYN9wCZfHkQhpbZf5zSCpheVSzDJXFKjYTncGXiwuDTsq8Uo4X7FPHEM7o2YwjFGZ",
  "key9": "4PYyRHxk9BWr68XtBjrHrZQ6kfJKt9YASPkMAPaUQgeHZrg5A62DKiLuTjQexsdnzZZJ2gM4Dcta9nX4QoTLKfa5",
  "key10": "4mPrwjvG2TiTtWyrdJuqeyA4vXdyUaPbBKEirNmTDeZTDQZqr95PvSf587Xk2WM4LjVRkDiy44CwJsuzEWZuFWaA",
  "key11": "4cBtUpsXSS1nF28sGiFqL58BmcqT2JTh7UCavSN4egjBuWvAshfV8iDHS91MLfyFap2xBgZ4aQ8sosUt2LK7K7ff",
  "key12": "3ULPtj5PSEXBVu8BESXs2ADczMqPGhRU1kCAHjFKeka5KPiVSyfKGSSvNnpMfsMxa7WJJVAvycEtx2wrhcRMx8jn",
  "key13": "2N5bGnS6TpUxNk8zM4RHSWrvjnGGTyKHzuwUC4iHiVi58tFaPgR5FVLxeKSUm4YMstRqJmZ6xWqwymaocSZsV861",
  "key14": "5jGmvyr3q6dZB4tv5ht71DCkZ5makFdcjjSfnAaDUZmxQDHfKmhiN6ytJWaxSWPT9v6KbXMusKVUY8xkjgUizR5H",
  "key15": "3sNzBMWcvd3TDyjuiwPXHm5D9tskuCqRaW5xhottuSFxjsW1m7fumPfUjAwzYuVQS5vMZzBEBikteb8HdUSzvtgB",
  "key16": "2XYVaaoxCsDtxRvqxPbWyC5qWgkAVvRPZe1ZoCSK7PSi4udFP1FCEhhxTDntBezJXJuy7JfhTT44fnCxa5Xv4sTx",
  "key17": "5kQNRpzBW3uMizKYadZf8NHd9dzGVbMK9rreDZixtYVhheFoHrpj2o7RFgUsUEav3FNuMeTs65mju6qN4ErVNUTL",
  "key18": "2WEtvrHKVHu49RdzcVW2vryKYcrBQdoShkx8GezbqqaELBEFjgjUw7qw4AYdZCJDU2zbJoApW3UNBu976YbVyAqb",
  "key19": "5FdZg2hmt9YQxaZGoy7kTZ8wdj5NCN4WGg8qduq7hBhd7EP4K8M8hENNyV2RiWgC7aM8pGTj8cSUyxS7ygrLW8c6",
  "key20": "2RLRo5Bnpn2vNWdMuDtyL9e4J6pd5UpnRxUv94QXjDaBwowCkGaH5XJ8xD2DKUWmS3T9VzFD5LXua1icPYHnHHvS",
  "key21": "2mX7LMBDK4dS9k6dr1qe8W9HpH5DxSgBppAhujHdJ8VzLkcYhodrwPK4wgPmntemDt7PkCerdhvVvkiXxti2KjvX",
  "key22": "JpC2nArpH5w31XiZRBx8H4Z6VETTMp1PeNEb8McsogFm9tCu1LcPsNbA3vQKxSKcFUojCJQKJFidnUdAYLachqp",
  "key23": "36SMmPcVSQXfYf8L55bNQLKnQaAFsnuFCRZ9R6xs5qbpP12qnUe7p3FTPJTkTyF6JuDgZWJ6QCRyxbFzQ4q2iVDb",
  "key24": "5sJBRUq2Vv7D2xVLpUPYozPkNGWUxK96sffQYFm13jWe4HjintenCqHLAdND1C455AtJtB7uWfKmzCcBhD3jT39M",
  "key25": "2RdmTVKQhxS5URy54YSzaRBoUdWdxjv5PNKAvrsRM7kEQkst5GyiNHjiJXv625d9H9dXJkCboZZWUxPoFAMYS8Qi",
  "key26": "5dzpysbC237gV3qwtFacwyYNAdsoXWgZ2P7KSvweZm1rzNFgiXHA3ZuxKWB3g5sDsT8Z6LHqN7qCiMJBwUxBMfrf",
  "key27": "2xMtFvnB87iMyEnEvum8W4nVMGF6WyGKtCYXjDEroiVFcMVinJeB6bd47LkSW3jMEePNxhQzL1mvGo98oGUDfCDE",
  "key28": "3V3xS1toyRsJhLF2WqFG4KUQwTtrH1hiYHsWkabMyZqXtzi8uPiawJykpPdsEyFpVU5KBhrmijz7rv4wwSdp9euw",
  "key29": "2k46tELMvCDspuYR9wG82QGwKyzfaexv8jPhq2EZmx1cxMzwxbqE7Wg3nJw22CvDVkoesQVumUHUUHQNeUDCt36v",
  "key30": "29DwrX1etgEZbAGrP4uwPJaikKRY4Kxy6BYKaHRRkTUZRzbFgDmyFzdm4m4sm6KcAHvKHgxST52DJJfffEDrbLom",
  "key31": "3GdWUkgaaoZKgLrDpbKW87gAMG3TpDmBPHA5HGoepFxREXwYrNepLzRU2UPVEvvNPBu7Hf73WojVVAgoctnsQWcC",
  "key32": "2cc1ZumrTnTP3QhjauRDi2JoLFoF7twbkCMbQGQ76JnjNVmRK4wqYVFxH3tyFG9XDJVJk9CG3HKyHXYCzkybU3zC",
  "key33": "cQ6qi6gHyuRAPEiA8dgyGv98f67MzvUqPcR89Y7CBtZfSnPbwe22gTa3TmjvwQyLxY1f1D45KsDCjyPYyhgfE1d",
  "key34": "4YMJsNnV2QETdkxvnoDfZ3vzixZfYQWvnjFtwfVaEyeS9s55wAod2AReSyaDm5LBnfsnhLCb9xZX15t6EcY6JB7C",
  "key35": "23DVmB8QsYXYqxWUE3uz4GpTq2XkX1ANp9rmXPZo3DrHTJsWWvnGkwsAwptnZTRCnrSuRBXt1q14nM29vGGnR6Tq",
  "key36": "2DQHBg82TynxdUZjrUi2Z83PJJTrDcr5BgTPmNpZU4enoCTPYdgKkKk9kTKA19TNKU34vgfZ637fxk9x58yKMbZL",
  "key37": "4ex4ksruvWKLN8b93k8TfteE8moLv9LKNXd6Q314NDVvmEesfjtyJVbMhxUTdX8CUADctC2hQr5qWzMvtN3GYgeD",
  "key38": "5m5ZwWAwy9vWH8s7bvk5DTCYEfCubNNcEpfxr7tNGLQ8HHz7U84ZnkafnNaJHmx4fwfwfLNog5aa1cdtV14KvuaU",
  "key39": "y4U8ndTsVHr7eKJiipwmsEivfBik1853UHWCtPA1Gn6aUoPDfk6z4JjDbQGbf8TWUWhMqPgaKD2Dk6dS5pZNuWb",
  "key40": "kfAjzHtFhPyrKFfihMgVYubXfr1rYUByPYBAAs23QchkHHCTx7LkEj2by8gHNLM41CyZPbnSUrY5pNUMcPVvDcZ",
  "key41": "qErrx4kSn8p59MjWzwoeug4c5pbjh3MDwXNdd6X8VoYrKPVxaUkQjSv9GLwGicbFzyZVnpJbDwmvxCXoyA6oTCT",
  "key42": "2aMPqHUj7fAnRsZcV47B3m5jPj8kJHswm5BssMN5EFENJ4ZQ7JYheHm9jnWicDtnLEVzon6XntkupBeBcVgUDbGv",
  "key43": "33NyRkQ4RVSQezT6aTyy9eD4kdMvtfntFBGbF6vgqYUzmQ5B7YqTnXA89SLhsS6kmbmGXyxjhKAppw7iZ9R5YEPq",
  "key44": "3wCJBehc8JnPuNjiLSBEWHfsH23afkWbdtQf8Ac1bT7tQ5fEUcfNYrcPvY9cgjf5QiEkpyoYzKuL1tMzZHLJNsnn",
  "key45": "yTvYKb9r8LKEz7ygHQVsRZeRDz5UKwzVshdxhoJhmKAFvT2DdQih1k9M8gAo69ipgDEyXyaq7VwSYGDf2uA6FWv",
  "key46": "2yKVpi3bAfM7ycvPM41t7G928qKeH9egPDaD4HCWHmpg28W9uqx99yoFyYHV4F68JXj52nVi28bQ5P1Skvm7RRjp",
  "key47": "3DJWvxvUspkPch7gnahEDgVjjkRD37Skg7fvA4i8fbn4h6DM8gd7R9uC5d6PoDBaop32GFxmLoAZYeXWBsrmsCej"
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
