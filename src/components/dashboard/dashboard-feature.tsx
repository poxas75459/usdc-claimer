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
    "4X79HwPyMKoH6MPe5zA4pfcqM8ZN3Sq8CcDjZrN3tV1uHUWb6wCd9drVSuAhcMc1teQi81Nxh8jFsn19axzgjnGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1NMXQUnXPE417oCgrtYQrdxBoDqa8aLv7JS2v8bjMFrEoJtvgjaCg2rW931bjTbPVLi7eywGkEd95qrRAvnK4zX",
  "key1": "BFoMyJoE7HLk9gnpSQtB64zFYfkR2NVDP6Kq4Ui14UVwrNCmqLcpsJ4AgQZWod4nZWFD793TwmMMushdpY9hc22",
  "key2": "21RMH9nkJQVjwjACkH9HR8BrBLf7i1ygrrfnBN35QNE3XwbfxA6fLCCe1nWxmV5Uja7MrUsybHWi9hdTmqeHenmW",
  "key3": "51xFoGNiz9ZoDGQ6JALF4ssdcj6UJ8hkky6Yqm9MmDEEQpD1fJAs2b7o8kP5VhJTYu97hUGeXmQEiTLLeCyDAJnN",
  "key4": "f1neP8qLWBU6qxuQYkBoxTcgqfNB3qkkGaTUq7ffka7ELT2xiMDYyekwxrZiQ7DM5vpBKoLZNKto3aMdt3Uujva",
  "key5": "3vUNdjETNbS4N83Pa7fYABtMqw8RevW5TJvVWDMTN4jeaEfRSfyTq1JAi11693wtDBMSTKJ8hB1drUJHSA8JaMJx",
  "key6": "WmQP2CtWc2ajkDyZgBFFdV6AHHm3FZAGQm98RGgAXCShzuyG9hQp2nj8rgQqCgyJMnHibJ8WLpfvGWX4LTdvZYW",
  "key7": "4QQaubaWEP5NmqozA1MzQbJMUW6y1sWAuXJCoj23AvWtEMMNRAs6MNY6dVoKyMLHHznJRq7tobkKRciVKxSD5hXV",
  "key8": "4g5xyqqzUuETXzRbYKkaqKY2RdMFeVKD5BY95JG2Ea7vC98koc7kjpm3xRuooYu4Rfds1qg37b8WHGZx7H1o2aMy",
  "key9": "3CH3Z8i2hQwd9REAwtHa6PCQ2WX6gGiJ7LAobG4EscyVyNHifH4NaR7t5NQXEJX57N21by2C9tSai9xMmTDqmRHS",
  "key10": "kQyaugw3xTxfKFJ6duKVZ3uK3cByxXXqeCRJjtkUmQPd589ZfbWexCRuD7z7LVpCX8iC7CKkdwSrBNT6KqGr1BQ",
  "key11": "3QZEkzqDTMvEgvEy9KwvLvs1z2yNbWWuuGEH76a1gtLvUGD1dtrHvtLAdbrnhHJ4qf2ymh9GJTwTGptQf3hFnUph",
  "key12": "4hxQAKfpF6sRDMNoqJF9wLSwMqLQ37mVL4f1FksQkNFhfZQtiFteMwhyfLjg7isdY7tNe6Bjhfb9pzSLUc1CcS5E",
  "key13": "4VsYijdprqKEGwumiT7P8fjfgUCptbb25DDFsGUESBcTuxKoWj7CxMdJZvJffztysWNSZaS2JE7GHXrUkQPqPRxd",
  "key14": "2qqf5FQiQejAXLdhCbgJHpgJzeDZPfCdKa16DWCpV6eP2wYZTpVwD3vSMp2kzGs2EAKAzMxoSucM93n5JCYLcvQq",
  "key15": "4rdmWYWDSDsAxqHkoX7V1SxeGd9bZkFfRWxU3EXCrrkkSthpXsT3QWzZTvxH3GGbUsAGqwEPsBaE8wB5MmXqcqNR",
  "key16": "3yNgrH2Apo91Up5zkcGtupD81nQi3RvCq2VwTaiFPcLr5Zcp8DDUpG7GuwfTNceNemJEpNZ2R1hJtLrLFGS5dmUB",
  "key17": "454WVxeB5TpG4xMXJ9fvbfhT8FiHujGCfFAtpfswMf2zFnGXFSkks6KW6hCQsnBbV4kpgmFSuoyKfkPw8kE3pvvq",
  "key18": "31JgyXNDTJAnvEmUwxZ2xNfJVit641TLNcLPWQdr7HNWHNBYCgXjpyxmwzbsGPUBDuTD9FF5EpcaT5bP5TZ8GNYP",
  "key19": "4tMhec3xUBgobcGYSGyNRWScNDHE95eLCQdA2vJhHhHyaP9mfhHQkTXnGFFqPbcesau8VGkN4gdEPnFpyxTPPdg7",
  "key20": "5wGqvLZhk6VReXhn4Ma17daq2y5zwNbvnpDufNpVFrXLPjzVaHVcJ9XFr3hVfP1vNDxDzyAwErSwdeMXQYVaearz",
  "key21": "4wmNQPvPuS6eNan3XJo6aMbm4FESNZ1vrQ8htzBZfwani9vkEArx8b21MvetZqRRNfTNGhiVWokRJzKagB91kBr9",
  "key22": "2beCrVijiD3gqbBjtG8WH8mxwKLMejsJSD2JqYNqBoZJ9qhxswzQCk2bxZg8Tk3oj2czk1CaNM7EWKEnJDK9RxQp",
  "key23": "2wV4FfbiDop5goZqKCmzgHj1htgkfZ29R4TT9CaaiZbxaiZ9E5JmhURT9fpSKHkUr6vx3ygfBEzbFPTcoMgqGd4k",
  "key24": "3ZYYtfpYbNe3mEWPTUBgFnHrt1Jsjiaer9XRghefSUxdBYkkHmVU2s8JHszKQqsdvvkaFUtosMjtKT4kuqbcpk2D",
  "key25": "33WQFkyTbFcJYj9xRCteqUvDzaUG4MCvH8FtVo3dMds1UGQdvTDUMwniYqk1BxgbUawjyrz145wMfQUt3Ywd64EK",
  "key26": "rn2CtqtWdLvsq7ArBfe2XtqBKcDsDXDEEe6q9VWHYW8Pz8oPaPpNkK8NrxprjhkEgxnVWTKZaxXBR3z77P2yc8E",
  "key27": "4eXn8RYsX7ehsmKd5nCrGtWatzXMkt1Ny4ydQBuLR5eCjMFjNdXvzxNp7i4bGvmPVqacFkHxEN4dyjsnVTvkniZV",
  "key28": "2rUdtVbZihTdzbMX1QGc1n6WTmDTYm7bBmag9NtoYDJVqZPKTNw7YXqmr9UYKqgaCZ6J6SLRzQBgGjkx18oHa1nX",
  "key29": "2wjB2EkxqKyixEyArSyBdnCKCemk1DvFHs89bF9d4n7qKgKGCChQCxe1aNapPnrLrEtjJtWcokiWaoHhH4iiNXWr",
  "key30": "2Vbca5psvyREam1YvBeH9Fy84kSUo7qs3pcVzefpkLwF9hBms9GXEN3hLh7LdGDJ4tEdrDVxS1YFfKs2aNpRejSR",
  "key31": "4WajSoyQb7TF9fBjxyqXDqLGQxPy5oqKRn1VyL2j7a2v2TBvLYeHs2w6kKHK7dgiFRAcm3Pb9UN14434WQNUWaB1",
  "key32": "4Y9ga7vAwawtxd2AweBccQLDjskWYhxA69DoEZfQLGDjktTrTmz5ZZLhmrkzTzvNBroEnbmTzMnDnboZ8DKQjoZh",
  "key33": "EPqppteVJqSMp5xECAFG7yTzxTBNuGhdzCxyKaLBWtSRAcv8GAcdV8xd85pQ5o6BJQkNLhYYodQybWDSKGUTKFa",
  "key34": "4ykgPLF4jR58Pz34r2UgfRY2dpJQTfWVoZy8t4wrtj97KjhMfySKwqQwvuqEZhnJYydPZ7jLtoUea3i6uX6onYxe",
  "key35": "4q5CZ1gF8jKXuiN3NdVj899S4og83uBFRR9AefS35Zrs8CeygmTXLGQXbNhYXS8yq34TvooupyuRfo8z5GGhcgXK",
  "key36": "5w94TmpGnRrjQcmSmSG1DiAzzGz84Xet5NPnbFVwKsf8vS6TkFAJ9J6LQ2pJvSCze5wRDv1APUeurMw2t7KamUdu",
  "key37": "5Kn1WDLT3maS3gNSAyVZ6ift8uCrM6DAsz3mqt4eduQ9fdVsq57JpkNsLjNSXqYPprtiq1RBBMyzqj4nGWg4KJki",
  "key38": "4rbE73gd9nsmnFkA6dcigWU34ydG4BFarFoYgPpNhEZ6HFcqF3MPHETRRoLqpoz119JXEphVQbusbNmasnMzTqyT",
  "key39": "9bNUXsjVhj4vJLh5Z9w9rEQohdvqzgkhPH1i84oo5wX1fsSJJ9AjW9ddG8V8UFBNNqNxmHkeAeZe1bdMMpTUeaw",
  "key40": "KoLYWv7vLSCoGZ4XToCd1ppDZLQmfzCUc2qKKE6gXRu1EXyqS3YQyJasHdXb699QKmo5GaAtsEiQw5reFLuqDVs",
  "key41": "2BTkp85foTyvkYAmG2TLfabDJ8NUntnSVURxjoSE2rxFSN326svHG5c1BncQThUQmeo1zpeyaGYb7snLDw3hQC52",
  "key42": "4DadgZntNwbs59uKUGxs1UtaxQyyiJxQzzwyWmv6Ens53GhXReycfe3HnS9bQfghLGPBr69Je19Z4hXTKNfuBHze",
  "key43": "Xf5sMCmmmMA4nururcuP3kiiuQpb3xqfCtwDtjmuf5mATfGwnB38fq2uP6nTQw6JeqxFKYsuuUV8g3qrzL2c3Xp",
  "key44": "4Jqaf29t1KafUYjBszSexQLcvZthTrr38xyUDzzgyUWrtTsFmsQSUeM6Hcu7y83iFgqRa8ExnD79Jv71t51GucWC",
  "key45": "2HLckUEgx7cJgGUCq49VnuS5vt4qtcLoUVLHhose6pd6QHBxtP8UPKqQQzBTetsz18LFK9NU4XiRzhqLSkNiKYBL",
  "key46": "2dG4bdrKC1fkjzMo1ea9u7JkGCxSf9wSv8cq8UpxGTDjB2M3Q8KgffoLWt8aCfARevWpcjNfMh6yqFB33xauqJjS",
  "key47": "579pgwerKuycYScsqXoJgZUWRkEALLN45HAsNcfsqCzq3bBL5TvKTtmhJyg42rA7jTfMnEkhER1Dq7BKkTtv7KQD",
  "key48": "5gFWV537yRvvBqWgfmkJPJU6WC4fFFNcDyZ6tiBubBX3Z7oyo1Sy57tWXSK6aWwRzecKhf5x8WhQidDwuSWhLoLQ",
  "key49": "oNYrmEEQqk6y6KiJS1GiQTw9TGhHurCjKfSN9BNCf5ZGVZUFTPdqmfJ35CyeJ8F9NdMbezLGHsmybRvAU1fHZtg"
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
