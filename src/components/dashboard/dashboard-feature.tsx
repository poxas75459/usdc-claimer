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
    "333E4DpZxyyLMqUUgQ4m8HxphTPMed2MgErDedGF9EfWnizFn8MY2nHi7ZaghtXPtCgBvkRGzKNQb8QhQ7Gmy9f5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CNWQewAupMXKWYpHXiJwgRQSL9H9j68vaXPdVM3FGbnSvj9bMUR5zeWNysSGt73HPnQF3QUoQfQTksJLe133Dsc",
  "key1": "31KGY9Y7rY3ZxSHMeQi3NGDeyV3bE3HZpGyety6sksaAcxmte1c69eFwXu6P6xnX5GQWNoX4gwe46YDTXBnhoxfT",
  "key2": "4NJujFDyY6uUKPMDbsxbDmYHuat67wRREyWRYtdcTF2ziKtsQSEt8GZRmB8gPnw98Qg8yGY84jbf1ZsuYD8FUnwa",
  "key3": "4MbjAswxPS6RCP7DBUs2QQU3AV1Me8XV7DYUVtr3Ekt9XneaxtpzR8fdBMavHdPm8drJAnmkhYfx5b5oPxMqrHrf",
  "key4": "2vyBKCWKABooa2o5YLxpHsCFTsRqsziawBabfgDQXAFr8mm2Vpt5aYo9MzxNtgcCL9U1iWRUSWoY8aXg6odGEneA",
  "key5": "5b2X1KwAAB5N7B1CcxVnH7pcagnfTm3WPWYkqQz1RzcLtiDeGSZ2cLZhYvzCXK5dWuTZN7E6RR6CSNZpEzoVeKZb",
  "key6": "gwGgT7qXvYyP3q2natRa514nDzYwtj3RVKL2naFRYkP4yZCQ27U2GgSCgEeMGQFBYQddUqLZ9jPj362nL3CF2bN",
  "key7": "3wME5HNV8DPtSZorA9hCcV8aTebpttwVWYD7sYhX23uYJpLf4oDqP1npQAegmcLG57EPp52tE58pF5asFoy4Rnnh",
  "key8": "32uCaMmFRGEkgbACNwCjrEUHMVpjstCuvn8cRtyNF9qdsfLwCD7uBFfTAK9mD3pA4C6VXzPbK1oFDxpumsFPbQ7c",
  "key9": "5AEsvGPMUqgBPFAYP3SVLjpcsnJj3uVKGgeKvmEED4nsGWcRHb5yoVDbnnYtsrqcDzZzZnzZ2HgxK69P27kgLYDW",
  "key10": "2DNTgyotLKa2D7fbVBFEDQzde7HKZRCFFujtM8BQyh6754HnNCH8joyEcPBPr89qhGandM58zyd56BCZCPeQs9UJ",
  "key11": "ag6Ld6kUneLTZYe9DDNKDQztXJ1UPzRyKdgPGFbuqJuc8N95jRy445JVy2kEpa33DwTN5Q3tj4cQZwz86iridUH",
  "key12": "4pnTbDdv46EtAL44Rm3TsJb3eMjz28THVD57zR4sPwAHdUSzGTTahEvHF4irfDPdnFqbFJTf81VqzkiRoVQyeVKL",
  "key13": "5AkGEQ6onEARgDzFAcjo8WxYNqL6j8SJxEC9BQ72rf9p4zw6TZ91eY51BF6VBYyhSh8or1GFnim8LnbbC88MwDyR",
  "key14": "5ta25RqYm9NCVDWe6RByNxuBBQtXRFVP8BeXCfzBEH3ZysiUytadynZQN994a8m12keiNhTXg5HNxXLQSzhZmUgw",
  "key15": "HeBQVKdrBK5V7YNfPxRjAAd3m35gM9WEn1ikmUSPkianCLgq8Da3W52htj8o5JBpYvzMy1718ZAQjUxu3i6uuNw",
  "key16": "44SNUfize8uYHdaiRbyjBXd3niL9t55HEK4YGGi1X1kxGoDm81XDFJCPWe9yNGTcyHiqZjFJHDcvsgwHfA5eoEcJ",
  "key17": "4rgAWQeSPxfAQzXFVrq5un5AhhBuZR82PfAg1BCBzkdU96bCCF4ckAg6inFKHxujFbLNPJLjTwHpCKSpwwJSCdoF",
  "key18": "4i514ZW1aJ4ZcNRPaiJSZMCynFLSuj5fuEDzvrLu1pQGjwCxiFyuqgsknXDAoXoNP9p4bXenSeVJwY4qLfUcr6K5",
  "key19": "2jLygEHyVyPtV3Rryx7dsepESXbwvi55d7Je1H4aMWi18k6bDmzFnqp2xowMtHgxvZtTDY41Vj7RKLxjSG4pT4DC",
  "key20": "5sXUTTrRjGnhHjB4PK8kPjEQqzPY7DY5zXj3re8VSr1KRKuqxqnBoo3WbJ8jY7cvSe1P1gnK7UEqGckCXAQwomah",
  "key21": "4REaASLKMEcBPCoBrTb3RxqfjYRSZz37nAbyXTmpKcutGqgFU1DVK3uemN3M92Hh4VgxuvGbBiWTH39hVPoT9LLe",
  "key22": "hxqjQy3pgR9m991pJwkTunpATPmkZNd4xnaa8P54z2kxLzCq8Xf3EmDLMtaXXFdHb1mXXy9E55c3gV7C9ZFGcx3",
  "key23": "2qKEwBbyGR1ZhuvZ5c9fy5ADWpUB8f2AiynGjMjbzzLHnmtZtcExsRSHLBCJWmEkaQ5e6UD3qjUTfXnmQQsguj4A",
  "key24": "3m7zWHyyAdnfikicV19xhp3qz18iH3f8uCPb4ry96yRMSJTFhhC5VdXjaf49kgrTuReRUrcHyM5Z2NFn3yXSfJmS",
  "key25": "3pS2wdgu3QYnQC5yKJfLkZC8wkgDwQVPJDHkz2gFg3aiyPra8DqE44gAJcBDxPWQRFpgixNsx29rkueY4r2KqBiD",
  "key26": "4HtyVyVq8koRaQqzs4oz6xiZGHA2UQ6ceubiTLGg8SadrbYUPJAJ8F2vjn3tadA894o87EWnYJxTBaDq2fqy1Efi",
  "key27": "5W2npAZC3wwtyh5qS6C6W8UhuVDvG4rN2QQjpYWPv8PgZuBuexPcuTT7nY5itQwyqikCC5iKqwXWYCafcrNoqp9Y",
  "key28": "2a7Xgfq3V6D7FeaD1m1JDn3qszp6MucX1xcVtTwAob7EWkX4F6XJ1BGPNQbNJ2EknxX1zSWftEtcZNK8hD33xnVP",
  "key29": "3osShFH6NjbP2TZbSHY4Ukf8agxWryTJnVT1eBD5NcLhapWYCMtJS7ty8HAaJ1xxoqr7S7xhdYchgGRQAzai5jkT",
  "key30": "5bT6sQ4k18suF36LLFjV52xnjTcLu4kgsB9AF1empcSfm73fECWwFgzWs2s2yiyt7gkfnHtReehk9aBMLywmJKbQ",
  "key31": "47F3xxXwJ7Nh1ViT9xJbf3CNjWB8J1hfZpsgKQM3Yn4N5MkTjBmZrHyhvnEGcfW6kAzFDP5eAMQnktiJNH1H1MWB",
  "key32": "Pr6YXfLTCJnPcFqgeKx62DsfxPiMzwCgTWVs7AsfX8zSrYWX75n8t8qUsaNJZj8S82oWAMqm73Noeick9tmRLTD",
  "key33": "AzrJM8dZ9V2FLxPWsMMcCHHCiPA4k96y9ZsSP66StZNMnXy4NmzVy3JGh5YiNuySHVNDELDQWvNpi2mhd8t6WCQ",
  "key34": "5MbeJ4ZGQYyJGXc6GCUUTm5XJtSBWjzTuxM2z4gg9xMHScZ4JirWTykFkXtsEChRYeQv8NHbLn18rbDLMMhBnCix",
  "key35": "5Kj48khmsbfd8z1FVERXdqnf6kMaGhp4yd9BxVZduBBCmiA77a8EfoXu6aRQxQAZYKEhZpU9Ugb3Y8snjP72oJty",
  "key36": "62eE2vqkmvHVx67xoCz2dPHo7WBWA5isMupLFBEzNygP3QTekgph2MSfKN2QoJfMfna56A2oFiB4PmaaVmeqnr3d",
  "key37": "42WSw4S2v8DMni9pZnhZ3hiFc6Bt2wErrhZHz1ypiENfWpbtvaTkmPg7e8DqPpdAsSomDQJ6Sum65HanVGYAAHFs",
  "key38": "4f7RG6c1DhNeyhm9NhtH91iN8dHTntjywjWUPU3ndCtTCpUiYrL24AieREjRuXTENguDg38bxfPD3SqR5zu5zZQ2",
  "key39": "3UeN5b44pBnKSFbAES198LzivXxCt6QWdkWjqCLeqeps35DBGq8UqX4dLUUeRdPbSCnpuPw7fT9rVXF74UJFRhSF",
  "key40": "3LXjyFxELYSWvBqRJUpoLxXfQ3ugpHhRJyKC5LpvxiCqQ8Jx2auAhuV7MRxa4jAnZhqFu4bzcidgFVdCe6GB4HN1",
  "key41": "6wHAisCiTKcFdJvzhykkDG6orRHGVcNbXaSM1JTrhDkLsNqtqG9y42GHP7T31PA8ciEXxmGpocCtyKP2g1z1D78",
  "key42": "P727Xn7Z7tau9BoVMhGLPugDw3LSYQozeVTrYYRVAPEVafrTtSi6evpXUoRnhNapichG7pgpAY4rQ3pjfg9HUxw",
  "key43": "EDeAvtqbE3pmqBtT8EqKW9Wk3Vr7cMxb4HMUtw4WX35C5fyx7tRn2Uu9oMwRpxfGRvrAPbk4BuWnvaLnvckDEaT",
  "key44": "3QhfFLXsoKWR9ByFyHQBTZf254g4TrwLeAZPh5CkV5QkzCZ7XD6dJnAfu8D9euZmvXJZsu2Fr1hA8QTQadjNgHmR",
  "key45": "3TQTPnLfazbrxKt6VcbLTmoXVZSMeKgGWQKyVFUwr6FonNhdxY8wFSPmegpc6KvkdtuxJtrATbUtmVmSF5FWWef",
  "key46": "4cgUUWzTkR6QX7JDZPixsNUmJcAad746A3V4J9RPGNpLqtH35dnd7FRhQfTXnMpkVjRzjR4zQaUhTQnJWddxFDuB",
  "key47": "4BtwPiB3F4KcU1Z7vXCV5HcGuLUBLyhLAB1wSnuo88YmXii5eJwHa6r9L7a6F9ohCECnLQ6Evq7aBU4R2Gm24HHn"
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
