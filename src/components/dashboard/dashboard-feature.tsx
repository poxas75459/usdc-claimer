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
    "9QsgGEbtP2e86xrAnjxK3se2tisRXitzQEgdyiWC4KQ6gW4iL6g4AjhVVkrEeQjSpSWHdtBKNnop5z6NPPfT2vX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NHypoMiVGcehndUPez6LfMXeBe58v9gAkU2QhcRin9SZzdzYuMi7bSW6wQUAreen7DRCM5hq6xoRf5XYPRdT6zo",
  "key1": "hiWj4HatDE7BvYXYwfMKbtwwGCbRxDASVtuiYdKbVq349zMACCQr1RQS5knqyJ4RLVvPPFhu7yvFdGHFQnUc6si",
  "key2": "fdyDqPTLE5N85JMKi8h4wNcavcXEpzGDeJ5fvuPC1RtUefnJyXqvtKtUq9DUK2Q4sveyxR684ZTJZ1cr56ADmTc",
  "key3": "4RsMWsyzEfSSNqCGYCFsrLpZjEUmmFxjVFFMH2WaQFKNdK8viwBWJnZqxPQ4jnpGzMDmKVFGiFrvU8ncATRCwv6y",
  "key4": "5s2KnAQgRHVGP5SUrUm28JCDgtZYXVYjHu1XbaHiRwNwZmQpWgh4fMbSj1YZMe9r9AyBQf3PDSCuXH1hAG1iUrrt",
  "key5": "5JUccfSjJHFrrYEGS1adjTfT54L6HspQMdJ3PBHsVGfG7t7SB7UjDMNNMdubWSHv5AoK8SWx7ioeqvhhEgo43pJe",
  "key6": "4n8m9jQMkp93Hx1LehbKmXsyHm2trQeFAtf2hg2KnkqEgXaabms1BgvTxs2VvwEEjq8Unc22RDYfVkR7NknbX4jo",
  "key7": "2PaFUkjsbUHtw9mjxJLgZR3PLheboeT6NipaHn6aGQPymLcEtpM49aAwoJ3AAJggQqEH9cjfAN4qaPBRs72EjyRb",
  "key8": "45eZ8RNe8WSG9GBDXzBPPkXjzKY5LEQTk6G1u2H3uBbPWX3VHNBjECqEsdTX9T5ALGkbqRkXrSDiqxozYsW4wk6R",
  "key9": "4fkyE2eFDdpurztqV6VSJm1FiR5ijedpwE1KEgJazU5CKFG9gxwM6xLEY1RikeNcrjHhvwAtPr1mUSUNBu6onevN",
  "key10": "nXd3ShjcNhwV9HPpbWRD9QTsvhHvPGv47hHPqriTJ2R68ebL1Kjtcqgkki1w7v653EYw21Fr8ADLsvbQZ9k1Ugo",
  "key11": "QjKdS2NwiaP2xnpvR4pkEtGWmWxNZhptxa82vZFvBt5xnvhgKKMf9up8MSzis4dLZ8t9P65CWaSsArEq9K2aR3F",
  "key12": "4rwFhGpdxZdMNqRzxubPgrBsqq9a6CLWUrxMj8RuzVBdCqqFYy8wHVrSdZ6XWEhQf9BMypJp85KbKzc2kNLDP9Ye",
  "key13": "31SwRfADvrKaoiHMbabPLv1MKu1vBny3Lhv4ELW8pYRuMEfvMkcpsuhoaoiHRoAxMKwwPdoHjVzkZmAoYcqAKK8w",
  "key14": "417npUp63a8sjFmX2d5asMSgknfogs5zULswLBdkUxiVxDdQuo8922BoGuUav27pA3UFXnCyYnZ5uXYP3yocSksJ",
  "key15": "63RvHHe9Tgdk2qxLDGhbkG3y413bXp9i3s4C9ySiMsaf1Q8mr87bh8dsTAggywH2mbCjnHFBYthQNPYYTFfjCfWH",
  "key16": "29reZ2HP7FsCJ6hYNHWjyos8yazogMZrpsRcryQGamcgTFjBU2VoLB2sKEiECLiR5vU9onN2kn1kQAPFkvte97Qe",
  "key17": "3nY8NuxGWjQ7y5JgPvLE4E6cMYGcw4WAEapykW3JnK6s7Xw5bz2GN5Z61fvrRx7g9sbCaL1zsDYFPBVTYXWCUx6P",
  "key18": "4hSgcRmuNnx8s7C8x9MqYa9EHuaRur2v2w2EKMHKitg3T9tAkDdCEqtGc59fXCRoRPRcDNVeh744gGUVMjQ9785i",
  "key19": "2CZ65yYH29Xj6nrg8iHv88Nz35iXfndrhZyemVUb8rgSSREGJaVcRVCVnBGwaCM2YqrJNDnLubQJnTgyr1nfSSJ9",
  "key20": "5biUesH5zXVfwR5hp9RZNzvZ6CKPA3D8FDHQqk8jQwHosP3WjEYgbs4zzjQiSrztXHZeRpzN9LnvSpGjWiZBVYcw",
  "key21": "3c4sD3VUZoi3tqVqqfyF2jrXPEBfaN3c5D29wCHpCgg7vDw87eAfKRCNP97YP6KGJ7kNmDB8eY42o1ovHepHQnm4",
  "key22": "3xWuAu4KTFLRcNJEbgxYPvDWp2NWNZor2jF9NePVPPtkm2P2mNjyKa9hZNsDjYUquJsbqrRbxVLqnyMuhAnZGGW8",
  "key23": "52FW6VvV29AkuSugR75w7uxjo2Pgcni5twFvxjvC112SkSX1JSreZdrEFnBEC2A9bj5f5ZCTvo7NdxBiAvu7a3UD",
  "key24": "5zKRnq7XHfTgd29eEyrfiJDtLUejmgHAeJSX5AMhFkNNfW59aMzTJhbHnbdRVkFYJXpxGC3U9mqEWyyoWoUg1Kbn",
  "key25": "3KGG2j2Wg3xHb9iKYAeHRsGE4iCPYB9WtLicTkJM8JhCLzdaSxCKaiQMNApJeL8AbwuQBHhjThHjrTwTXDThoY1m",
  "key26": "2vstD4QJiSH9tQ5Nh6paomdPEdv6W3KoxiVfzpzhmLUP9CXMJfimxZb4YcxFCp4rT5wVMNwmdMSnJoUP9pHvPUFi",
  "key27": "49PHUCSsyWaFLzV4wwSmhVr79kiJAf1xTLwcLqY7FwKZ8Sy24b6FHrbuU2WnbCJjsm63c1852okNXok4xf9BY5Cu",
  "key28": "3AVKHVTQ3qLsGsBeuusVfLMaFwkGZRGL9CbBFTZqGHE4Nr3ZnDZELubTidaS7KNHXMBFCaUajfYnFYdMhJB1LLnM",
  "key29": "2PYU8UNBrfiyBccVLWUR4DyvGa1XrPMZNmdniv52Qy63NqZJF5hD8okKDwvdgAsLBDw3xHw4r7MEcLH116x5JYz6",
  "key30": "5DnHVka1ojepCZvGWwSD2xrXnmQSGZsfiNuovEQxcViUUr5fPcjyKBiB1k7QTCfWkgwk7GUzXZiycPhR63kw9oiL",
  "key31": "36o6We8MmVz4JDqVv7Xjff6H2wrRrmFGM4mP2p482gXkJo1LV3vVN1vMWmXR9mmqdN7hLgoPEJP7Ns6ZTdUZU7Z2",
  "key32": "4pDs8pm6iFdsvrRZJ1kFueVwttc9DXpCPYiQQ7M6wbHpCHpQ6UcmtAfJ2QuA5HC7xYE5W7fSzwj4uMMSg741GcPk",
  "key33": "2o6x8TEXZLFgF9VfHacxE31x2UTGMs9TmNLEEaj9gdbw8tG18XZsB7oyZTgCwqqyo1aGNLyG3jrXnRuMWSMPTFxP",
  "key34": "2zPswwxyqfiw7Lgv5UuMNLakYQSxiqvEx6DsBQnXEbLiTAYCaUeAoZd4AiTN3ztet6iM1VJHje1wnHPcXDmfwtHT",
  "key35": "3kvi7hJubRWbtWs19TAZJDpQMfypk2sdCUQXHeUGGSxQSHbxUKzdtirgwZ9QWYHD5rfY9m9af1WJgDhykmjHFYAS",
  "key36": "4ftJXMt6prfjyDsBmLzVqbmf1tiMgtDescNkWWwMZdTT6yJxRUkJVzfk7C7mFXtxhukqxfbdP3AcRyD7B1E1egQP",
  "key37": "5GEVXjea2sQ7rUNMRp34H7U6b3cEEbRzDWNKFZGEZmduXXiHREpAK7k2PDyKxBKkLn9frA63R6FEC93qaq9TPMTM",
  "key38": "4Dm3Sk89s6rKvhNeD9yXZHt4PQXzP5RC5Hxi65MjYDu7phVAWCv9uqjr4yuLqWWUqzKdAtWVeQyXq8PHQW8r3Rbf",
  "key39": "4MXLTGot3aNav5gwoEpmEZRUzBtyuJ1VK4jsANagdjqkXDk9W5BBxj2SN1VMoEq6Yvc24HNSMjMFGxSjzGbgJoLW",
  "key40": "bZ6WCRmHM4roWkgc8hJHXtt7gp22D3kTRYfugcqUBrQpim9MRNMhfMHRffLNHJDsubxWLMmHwnWsyUhLrzwqsJi",
  "key41": "2rCPqEfJdT9yJnGtB5fSdptjTFwDQfgNm9Ccgh5SwSV5Ux13iky7AqZUQHMNS7UFUqYezXqsTtiDnQ1jBuX1d2aC",
  "key42": "2U7PWZGV476z4SUYbpq5jsLzwhDHkDvjvkXF7yuEoRWeRGQEiNgAYaraziT7K9MoqKXU7Uz88bdJzrrKZrb7h9jo",
  "key43": "4363TDipc7umJrQtzGiNxSnZ1oR7MEFQTj7S45ikJBh57NU87PCzVDagz5h3nLT94aV1Ave3bHQk7xnPvhp26NYx",
  "key44": "5vK1o6L8gWGHgYaR9SL4vKvzXD9JpEeU8E8tcip65AExj3kcatx4fcCHCVbGfXqsCTsykQnsRo9hbUxzvCTYLZtM",
  "key45": "3pQyzjtDaBPGJJXcmmrFJNm89s8sZ5KCmjGdyZeDU4T6GZfBwGwhhTDFU4dpe2ZfbPxPfsUk4RwCNNqja2hgJ4hw",
  "key46": "aQVwV9R5jwsBKEaM9m9XvioGMnyjju7TUb8bzNNjjApMdGPQLB3BvuBVnCwNBEqvAC6Vpp31sBbPhMLpZCUraCr",
  "key47": "3qTHHpmuXYxjvPX62iWSAU2fFoFcKpTrMZSDHTEkgLQC8iEGQpTE2G1YqsU5ApmjAGXNPiJiywKmBR6Y1r78Ckgd",
  "key48": "3udg7G5YxgprwBDsPFRozVBhvxXhqzuKTKdMGkFWZZYPQKRYrVLmLTr6JvfaWCBQ5pyoJGQNkuNnJfmwmF4vnFZF"
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
