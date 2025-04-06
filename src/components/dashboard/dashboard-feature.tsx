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
    "55UY3TmYHpcYMUN8fTk8GoQPddNDAv6AQADgjRL83b8tHRZbEvbtwTWRao1QdEUC3UGrkf45pJj1JjwQHjnGQxWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xTz6mBJGzaneWorYgwYaUML8jpmBybB7ndxcZVwtE5tG4sqshgANLa1oimPeUZ1c4Zyy6Vu8W5R9EyE7nTnnchD",
  "key1": "2Zsvce7XKbTiDErbm8chBs23hUudzTWf6KSk3vfRPWdw8dPmmaUrzGNLMDK7oYh241VugPNUn1b5xcGR1RR8sxza",
  "key2": "3EtNARbxWAH59pHcJwSqGDjkRatxGnPAqt22vMKFUzxDPdhMrqLFAowTm63uVTFA2g4EbAq7riaeMmsNBx1ZSry1",
  "key3": "5rthqBd6vMZ61Q57PiCYKKu7nXps2qbmYpTmvqNBD6ixnLm4FNETuLxsnaiL8VkK5QjNz6wo1DGS2rHa9kBHRU5T",
  "key4": "3TYTNUYwtkpSYVCE7REr5ACMUZVjmwcGKzx1hHUnCFMm4kSzvaUjYYk3LjrR3jrDgWTjZrwLN2bjPMQGGWRdgXWW",
  "key5": "9RWpaCkiFbN9epKPLaGSUBi8M59NG69qXkYEucGcne2MQMysGbphkoTVmwJ8uBqLtqy3gMKz8i2oFfwdsnkjM51",
  "key6": "3SnwP8AcsukvSQaLr9DfYd9UwhYLKcX5eU8Sad5XKLLkFosLgywWAi2TsK3M4aPmLwrVM81iJEzHZmhBVbY4v4k6",
  "key7": "26fw6WmZv1jFoYtfY57ka18saxebnzxKTsH8wqX58KeoCvx5hLSh64254MnYoL88kXdH2fWdg6hU7PNVAb4Q39w6",
  "key8": "UbEdjUNnXDxm9FanTwLA7PeTsMVNjz6WzWJg2xBFGADnaN2sRYifQP8ucSfjR2qn4fgUSj7LCaA5DjmBgykmrFz",
  "key9": "5wgfx8Rxc4SFTM8zUwvHb9koCwdfdcTSvMvY5A254SYCCbQdzzBRaHwrycWjSmajM4RnFmM9fokL9zXrw1LYtdvQ",
  "key10": "2t8wFqoeu4nzLskgYExrSivTp4zhvjk3PGHzGPgA83ykXsKchmqfFHc2RPvemquy2AY7GYg6zCdPdJeeXTSgTs6P",
  "key11": "5heewxVMJnBzLfo3dD4tTXLPLhTnLj9gLdVmeDK7u6YfvTS6sBY9uAr2xAGc8NPaoq9pYUJ6oKzmCXUgBpwBTGNp",
  "key12": "5hwAWzNF9G3YCexUMD5vLcTErKVAQJrJwrXAqHzLWpMvEKnGaBUfqCeZMJHpwU2wHPftcWM8R7ZkG88CWowaMUZj",
  "key13": "3FdKfzTdix1cGmT4BgncksdRCpyyiWRHAg94QiVKoajdMgpZ1qdPCSm2mqZCfHBevwDTrMxPCzCqrYSkWK522b6V",
  "key14": "QjBKpLe5cCdqydTBm9MWm2NUEHYaUT4kXE5zkFZB8SHCD7J8CNiKRMVn6myoGrT15hKUjRHXsFGRi355kKkR9D6",
  "key15": "2uN6sgimakmNukApfsiQJKCUo2W2XndjPjJfUsX9B83RefWKywxA3T2N2mBncdM3cdcj9zfX8WEaunjTsHgAq5Uu",
  "key16": "5RXKgZmLwkN4Nou5DCKPyxASSYEB9gsdzaDr3EqqFNUp6mhmhp4PfFdTfNLGCWVhTWoTKSFjUShxkg9pj15m2zzZ",
  "key17": "NSn79jtHNg4uazLUWJoF5bz4bRkJeiCAJqkSeyPLwn4fGQvK2rnhr3tcsnZzxoNzLwbpUhTNAi79NJfzPrG4wtW",
  "key18": "4dQyBZ5zJUMfht46qCQ5edBcUSKADpHAPQkCebsyhLZMDMW9FF2uhMVzTiyxiLDmfuGm8U13Wv3fYDjcnu5Hb6vu",
  "key19": "3VktKNc8HJ6su5PtEF6rqsq4JA4xdBYjLk67oMH39JoDGCjV8rDanZT1CXJgCJjKMmhomumXNaZgYiBsdWNbDXhQ",
  "key20": "3DmuJXAEFTUgBoFDPv5Wax5hkkk6GoRCqpohSLwRphmxseHVvRwVJBZpXs4e8Sy7tucv9SAUdDEmAsLKTMcSxXBV",
  "key21": "4iPawaxnCsAMf1HfAmDWwtSjSRqQmy3q1JxATc1K4GQpQCfZfkVkE68fzkBBpAZFnkCgjncs4Vg9Haq3L3P91AF9",
  "key22": "3hJzVNPbn2giNVy3eofkZiMG1pr1LxgAd4ajRaTBrLFiENdT6rG9Uqu1PnncpLydaWXoJg25seMfYDNkVwqEusgx",
  "key23": "3kATvYnKdw5Bu9PJtXCT3Le2oDj9gSRWRzYNSZaGsbemstSyMffVuqbQR6Kg5B3LVVCg28THvX7s6xFoi6YsuuWh",
  "key24": "4cdmyEFX1PQW5MKop176AgQk25RhTbMWaZWPXZwoVtLh4ma6CcSQ9LvDiP6go1gi8tUjGdYmDAFZJnUYPPDy8Wmk",
  "key25": "4FLBFmoSSxqZnABb2dKkaMgrpb72CD8HCUbr4YKvucsWkFbpfwNrFjNgs83BRWZmPkLnG3AfUAVwVGVjkPvSbHXS",
  "key26": "625duFW6w44dp9EbZwWT9nD2XbRKDzoE7bMqfksvvdgWi1R8LjaBYYK9eXzLX9tamfrAeTcHMd1V9b3M2NnfPrFW",
  "key27": "2vQZmG88anrXz2N4iYwEkUUoyTm5NR8FMtUWCaGnnRNhW4DnM6htVyFSHtLbT3NdJikd2RJH1n8vECMyyj5HifyH",
  "key28": "R9d9iaiyFcNp5eUt9rxMy7RAWky1ShCypacxP45YVufbmeQxDhzYTwRsYb2u2AU6QA41AKi4gCdovZnrH6eGquh",
  "key29": "qBuywm6rjHu8VtsP7gEJmDVRxKiBfwT3wS8tT7yoTeNeEhZD52G4iCuT19Q7zy6mqSbjKK3op3B2sqegnaJTbtU",
  "key30": "nUdP2amAQSH4o8Vi94YALvgeGVRmZ2tgnDSkna5Rusi3iMt7S9x5kVi7ee3vw54MQ221aTjg3oaNzJUj1P3zZGw",
  "key31": "2uHQjM2kmdj1zugdDnwmcpyBBLwK1wZXBz7FK4VwP4W9N4RqWxEipEnRyipqv7F7VWSFR3aZMXQJBZ4U13668MA8",
  "key32": "4j6wvogPTqGFk88oSdCHfBgw4xtrK1wTQLs9dXmMz4iXHaJ8YDsHZvjGrLkaCD6ZAHMYj9E9Wdpzt9b1xaR3KyN5",
  "key33": "5UF2TAuGFH15pSXMRi2UU4ocH1g1axGFpJpzsrqrziXAvWypYgoTaWFRfykd4bnz8cTWfRXZxLKcYuAQJRxiJ5jW",
  "key34": "2PvvGwDBGtCU5wBmFRTJoqDZDkWCtgLnndBf7kMwCXavfaSfz1wn2bsz1DZNFbvAqnaL9RQtRdKrKYQTvGkXSY2h",
  "key35": "Q2jWziYEE62ZHXvufYXJzFANyZLoPLhwHLgQVpZpshWTiiGzboyJsR4az7Q4GkymiXR2TruwZHyntLBPeiFnY8a",
  "key36": "3LWzQnfxxcrdxNGXJFfPJA4v9NAMDJP5KuB14eFUGdqLP1Dj69dLakUtKREq9mvWXctTFot11iDycPgfiUtCxjBF",
  "key37": "4yXJ41suqo4ka52wL76MQhvw68hNmBTG7iug5jnCBcLjPVuG1Cxk1if8jAxPQLaNJYgoyX9gN1toFQfNFfsdSW4",
  "key38": "4FuoZ3zDjh1MvfErNNmEArYHJqPausNCoivSZs7wi9wfJ9jnnjAhGo2tdQ5jMae7VabEumozYNf2NxY3thiT7A2z"
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
