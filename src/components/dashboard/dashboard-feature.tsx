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
    "2acTJ2B5Kf9W73M1FYdorewoJzZqRhuYPvpZV8oHAPGK8iC44hZUUCPDVxuwKnJAPWYLCTvE6zt7amESM3Czyv6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dK2wd2JKjJEC7WPzbdD2nbkvRmXjyQgVTdxAjN9D7UCih5FA7ZTQ1XQep8MBbCkMvoUQusvN2zRF6f1N93bbN49",
  "key1": "4QMZ8P6v4HHwvKvWqm4Z3Wgs23gz8eUyn9bTTKF3nQ1fcM1fGvcjGbErswykt1gBhYz6LPVvxUjw3TcakzbXbQ6N",
  "key2": "2KbPBnDDbUwEamd51inFRc5QLnGh3D97N7L9nq3r1J1yBdR7mqx2LjKU37zJixRGgvkxnXQbJtocLUf8MECFzgAX",
  "key3": "ZnnFqgMFANuCPqiuEBbFWYzUJqySPmapjELYbC6zdkyc86TJs2PHaSF7YWpCJMsXECs6iBWew8ZF4mGHkuvko9P",
  "key4": "4bMxWThQRTP5yTDpQ1DHJ95FG9nH6XndVKrfSRMHTJEsWjXNm4XJ6iM8ioMsr49ZN5aXVqUeLDjxozZsxaKGsHpm",
  "key5": "bxZjpURatQtj3kkT773pqPEiakZyWvpSAKqaxXjcY4u6nppUBu9aZAPsTmADXZgXw3FVWkWnQFrAjSQh5hgy57Z",
  "key6": "5fQhrPsqgJ9oXrkNJW6D1CC3cXetZmA93rHhA98qjVL9VSwh2C6M28MwoKczbVQEbhXj49ba9sPsu55RkdRQXRmC",
  "key7": "4bkKyYqyrQc5Yz8K2mHLrxqz5FyagpTfrNZHCT5cuQsFnLcXW9RNYhB9UiPjnCbZkHCmT4ACfbCfFZKRNebHD9EL",
  "key8": "SyggBYQCd3YCN21rCHX3dpFcFTsLKonDsioWUDGGpDb17wq5dHBJHtQbiNZRbSN3MMGAoBusivjxBMarXc3rXJ4",
  "key9": "32X8XMLcrtr6ZJzL8ZdRyF5AkpfnKzxEYQCQJKiJrqp8q8SP5eZmt8Qvwr4SxnqzFVJjNxWNF2BGioT81etNZyZy",
  "key10": "3so12rKFZMkTZYkG3rbd6Qqy4ZREws3wdVWaL3gqheecJVku3j434bvJBQZKhnDmcmPJAMpZwvkG3zGUeFGo9RVY",
  "key11": "3wizH6cB257x8XNBmfgMM1Agi7qvRHff2pm3Q8ctfMJNBbbhhfQr18itnHHfMyA3Lrjfh7rtH45TGktVqKmK7B7V",
  "key12": "2JLkhk2yEWHGJwmpSrFhmZNNx1nJRjDXDZka6ty2VQLTqQ4dBEMrezRSfKjW4WaBHBjLy9MT9R5uejDKP5papjXc",
  "key13": "5hQUQf6jdfNQ2GhCeESD7qdDDYsxxiNrysq5E1pun2eLLjJJxgpUFkT913oLaoyXvQVebb3pfsewbAURYHgRFgnJ",
  "key14": "66NgBz7X7dtF2rJCGCWDRK6UKg7wmAvV8xv2qBCG5T8d2nNFgEZVH3GEG82r33RM7nfFuuZTaLJnyBmSY3WjmWta",
  "key15": "TUD14aE25sQqUqEtepynDF1FmKXehiwyNsz7dNfS1JSDqHXGFZdaPfZVbcSNLBcsma8oB993HVscNePhB5t7PFn",
  "key16": "3UPCc77wFjAn41CUgv5cEjEjFfimJhTyw7DBU7Y4MVKtTzRTBxdKd9CnvZu8pgJADqpT9Ac7JY2izTTsshKvDvh3",
  "key17": "5LdMDDfuLTLAC4mpV2WTt55G4jighpbk5LLAHxTo5QwbyztHfchDnoqaScz8RmniuN3TsJUEdzTooQV6QiUpL9Q1",
  "key18": "393x8CAU4VdqtTk9j6mytLdxXxWGcHKf3aeK1pNQ6Rgx4ZVoReD1U9bVY1Sac3YymkbkVThdTWUraJZdceSJDFHb",
  "key19": "5woV9fWXJV2SWBBZpj1nW4JQD3ViQ9ayQQ4P4FrGc3XspDdJVJfCheVBBQd4h5MKJo6u22oE11rhiddQBcDynEGv",
  "key20": "3rXiWBkLfzbu1Dj8kzt1vrrnYApMYm7tQ9n8BRJZxSi5neUoyz62LRTa8CgAMgN41EzSK4krZWnksdUWq1rKfD7M",
  "key21": "25fYM4n13keKsfX7CNdb8gzq8HbakRkAmg14THYgC7FqFHENCWCf2NUtLK8dcdZ8EuTHtxogre6cjmKu3jYEQczF",
  "key22": "2t43pAPWimkFyLJJEvBcCDC7EtJNjXyXWn98QbF2mXYLxMskgHPEzwD4GKxvDfgXqeEZTrNdrGEwNq3Mj2SU1MzN",
  "key23": "2iAA596CVdBhtg4FKfjJ31Dp7jyLBKDy3QPZC7hSUQoy3xLzb3k3MwFMn4hscYqZfZBSahyCcHBAK2tbTdGagJav",
  "key24": "5Muc3AsZwFmk2U8Bban8dn1vVyGY1D4rUzoeyyRpnwdhNrCbc8CvcZFiLmXqKmPJWsbSbLaNnjgubbAXxTedUogC",
  "key25": "5tgWTtPmAeCgwqmB9c1urHnHR1nj9p2U7FDE39FQJGSP3F8FDfE37rqfMtgqBojDcqy9jRk8jXied9x4NVTBu8wG",
  "key26": "49qbqwLUpsVLVJZXuXiReJRG2kk2Mz14CeERBajF8jyFvMr318EoKwxBkkFN2T5nLJMyD2T68PCbKDh3WHc3Eyeh",
  "key27": "5H5kgswzbdyzUqu4nhxCeUJXHsFuXtLZTQ5fpmTnQvp3VQW4Ww2vXxEZyDi3twdVEa7D5Pee89MyfTCm8KbcYtZT",
  "key28": "3si2wcJw5tgkRNWGTmFrZsEo1TumHvYRE9N1Jvvm9wbmHyiwEW8jz1mHGbVf6jJZzzwCCBi6hvvcyAhTT96rGMmt",
  "key29": "31J8GGGbdiJTfS2n9BiDrTVkL6TmQP5E8BNLSbarME7JLofYja98s1PunN8eWFWXvjS5XzgVCKcYeyx2ytED1SwT",
  "key30": "4iUHndtbv2fz3fQ3DqLQv1hMqdz6aJ7REP9nCSJ5K6L8Sa5ePBXbLTn9i3iBYQ54RuK9sWRzdKtgho1yRcaQRrsm",
  "key31": "5HGFGm4aEEka38MQ1y8YsXtELdS6nGeDXF5xwRgGUJDvwPxyiQ5TMc1NQjSKoBRsjQKhV1yv5eX8qzaviL8AobFP",
  "key32": "4tCwCvFDZUcdQApTdPdKZm59y6SFgF4pCwZWXbQERQoaDHpwWKrSzPbh1H9aixDnoJ4zn4d46tdjcqwh1aHxjm3E",
  "key33": "21A8Hh8Pxm2tDhEpQ6z8K1Qkv4wwMgTS6qmWxXn71Pi8Kb766CqfR9uLh1X5FFbipnMjeznbmk39Gd4wrwab6tTs",
  "key34": "52hbt2NeDXziuHuiWFUKV2JZRDP8LRrb6vz7XKCKYkiuNd2o9JUe5Ei9oniVBbrLXKWtU6ib3te1FjxrqQjCLsUt",
  "key35": "2HTfojyVujDKXNXveWqbciBVDWPpYZRkEEVVuasPurURJQGnxbv9CXiJ1b2Ca39jynqYL5BCr1bQxgSK41Fs9i2c",
  "key36": "4T651rMobmvtnxF6x5dnjJSafXJvUfhasj7JNV2djXxoNVxyJtNHCp2qvLkb2fdcvYUc4nQnWRtyh2FDf6BRFreA",
  "key37": "3SnxW17LP8nB3vwCw3gGVyPLLFw8rYLfZE1sthwJdc4PFa9PNer67cgj5SFnxNKiFgTn7HpoCaLZbwy6pMiKwJyx",
  "key38": "3xK5fmUmpW9UCL3cf47w6MtwDfwisXriT73mzpXnjNupiUeXwRY9TAK4zpiKcmGshzQmjiqWezNGWvnPo3An7Zuk"
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
