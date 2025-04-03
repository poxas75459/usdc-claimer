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
    "3nkjtY4jnwBkY8GjaVp8aUaq5J5jTEhXnwhABS6hj8wSkh3eGMU8K8RLVN2mZQbasqACCJuuKvpBQ9TAbSWqrVut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eWQdfxmUyd8vpLycb6EfMW4qPRMpVhLtXMWFeo2QnkxPt3wYAU3gJZm2xz7rkHT67cDMQA5D5qRSnDa4dvgWswy",
  "key1": "3e2oYbP5r3GH4US5Hq6gHJTjMD6ozbjjYG6RXqDPz4vKuu2sHWCKcXBXvWrcH7Cu9vh8m8ujvokSrPnSjJiSaoq",
  "key2": "5E17NDPudEWUKJXjCHYsD6aidZvduVe3r7Wa8iMLghoKSGW1b6CaB7aYe3bJ6JQbbNdBiqoP73tbQ5K1kjDFQ9P1",
  "key3": "2g8LFwJT7LL2eXo9GVF4PMQW6BkGEUVyMgrKqJtxbE2JjuXCiHk7UVcJ144WpFZYpjidBFcYwLtdoUMSjwff2E7S",
  "key4": "3R7xTiKB3itcmrrdnCjdVUUq9wx3SSJ5GATj5zYAgRFAySMBfnnNkknUkaiLoFmo3ZVp7p4V6VNJpzoFDAVB2yT4",
  "key5": "5A11QTnjWwestDh7txkCiW65Qm9AVRFqMQqy8RT7kpoQjUVsRSrPYMhCbRDDXyQtF6C21XffFdjDDogotGgPz1W8",
  "key6": "cmkj76HxLM8pXQGi4xTU3Z6C5CgCh5WiYMs1cN5VWAfGdZRjueNSbaRzZQTDTX47zc2KfeHzAyFaPGQZzAZNyHk",
  "key7": "pA2MyvMZLwgDn5wjG2YM1XJYSamhsJSSL5TgHe2RSPoDRiTwU6YwTkqYCGbkdqWrLBUXwscWB6WkQ4o7UAaLUzF",
  "key8": "3de7yAKw7kGwzKpW5dfwohLL9P6vLhhvBCBALZakwejsJbcAUqFjH69tzxMuAdvH8aenC6Za3pZwGLb3PoDPQo34",
  "key9": "2jH8DdofDki7zEV4EimWasVbKgJCbUkMZknLMgABKgU8cmsVLQ3QnTwCcGSsSsQ5LWBEp2DVGXpuBY2zVEfkxiVe",
  "key10": "3CoAUfBXw2rWYYaGi6JY8sUExN1W2JiYBkFEAhfRZYMrgf3X2d4Lx4AE1kPhvJuprUZCsFGSQp4d7LRdD27jFpr2",
  "key11": "2KzrSuvVRz5V8jnkYdqA8BFUn3kQaJGhkGgfETrPrTccd2XjErFzbzffcAPCAEDzpVdwPgvqV6ANVPpUc7ZPS1M4",
  "key12": "V3jmfnhZPmW9QDEpGgzqhsFLmkyL444tZKwPCgaryegrMWz8JR9GUhkfg45chu7CHBMj7eYAS3NPZqvCYpFtSsZ",
  "key13": "2mWQT8D81xdwUCBVWY3CEANpYPuSCRSBB57AJCXvio5Lrr6L8n1JjUFSGYsNPKBHhHHNrXfCHaZGSDMwQtLrcRWc",
  "key14": "ZKxnzPjy3UyZQ268pefsAqsNF9JEQNThRKdxtwB4zz3aZuKTUiSoNRdW9Lva8tx5swwtVjWnkUbVtKr5ru9f541",
  "key15": "4Vnn8k9xMJ6Q4BNgBu9abqSis7j79cfHv82wPFyFULcxFv2SyURA3zENDaP86VZj85eMdekaZwionGtfWkbrtoEt",
  "key16": "Yrrr19RGDqv6S6rhaQdSbpyPNLmTMgJxcTj9TXKvxNpyey7ASdgzvW5GoJwMox2E7h8iTSN6Q249bFy4tobeQBW",
  "key17": "4TdcHvbhDuy45ATBXcBAqnu6p9oNXxJZoNKnYbW35pYsbg15qLbeJRMoM4YFdxMQWzyJmmjt7TeBBcbgN4CaRLsN",
  "key18": "2qQTBgV3DT3YkkvuJLKQkdoFcxeKEwoChi8H2wDn9LM7goowCawkqCkzhrJzezA29sLusZbENiJGiCgcF4gj8vuK",
  "key19": "36QQQjCrL3PaS52Dye13Zpz8SBzSm6y3VHab3DE91Hh11mk1SX59bzfPvQspt4fcnnRq1A3SiT4mTPQq7dDFFDc3",
  "key20": "5CpLr77UJzNbTCnzmdA29AJvFpTMfT5snNtKuorfQzqPzHurHYiTZbRQRqKeTEa9TVsG9ncPs2ijX7dyciFmRnNV",
  "key21": "65Q36V6pf4yWTShYrxKofNM5LrzK91RpzkCF5Cnxf261revCh7G1dUQ5QdnUpQKEyKMJTvPDP7ZZCirg8QWpq1NW",
  "key22": "56bxKZJDAxQ1cq5o14C3EsGV45mJPfNey7AKdsAKZ8RFcyPQfW5km88v7zLFtF71yKKTAajiJwnsGRu7Svc3Cpiu",
  "key23": "2XqZypRE4KeHhqGmk1BwHnBwTcRowAiKn8qAXXRroGvBkgGedMrLeoPyU158jcjgYrHh8HJYkXx3QbKMPJwDXYRy",
  "key24": "tDUwfJHkcVBepLV471GvXwWRxcudnbiMhYPA6MinRtJCaxw3Mn5xgNdE9Ljd345m6D9hp3YqLuR2DTdK65ihYf4",
  "key25": "4jm94mwTnp4zVUje74HF2QnfwUSorFNvENurbqtk7on7bFQ79JF3pmea3tfh57djMoYPDsfM88JsXbAN6ByBFzUU",
  "key26": "t7n9KEGcP4G5KpDC5vzLsh8AzRnoyWTtq7jef4zvzPb7TGHY9aKXU19s5SzQPRQoTqDj5V8c4fSu3QR5gZzM4aw"
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
