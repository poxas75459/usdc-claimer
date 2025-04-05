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
    "2JcyksfCjF8m3noURGG5PnNSFtkk3zcKjPCRbvtDs8QhExn1hfR3QJkPUC1RPygcM5nvUmCXMY7tec3wahQHsXYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YzHM5EeLSPdj1LWhX58ti1vxWQrSG8PE6MGRZbQEr26QFTs9w7QBNFawkNGWfX2NQmfkaTWAjLFdn41SGha5yps",
  "key1": "4ZmpoxX7Qqejupqi4T2Y5oE9hSFFwrZsLmNx2zb5dWiTSTS7VLkPQgfmKHREjXjeSrBLSZiG95ihpmWx4t82b53x",
  "key2": "2HLew9eavgvkXcH4mychU8Vj3sX6mHkSNFn1ynz1QanzfMTq3uc6TEnm4qQkLhauBqy1avDWh5p8S8rAnkoVcQeu",
  "key3": "3ykuge7o16asQfdmg9bpVKNcKuwSLKW7GsZv7QpSt9CnvZotu3jfizK2BfCbd7KqEoFjVs3FMriYMDYZFdxrztee",
  "key4": "27yFVq7vjYtoLtWRMsybFt6xLov1c2WGWf7dYkRPFHXRLAFZ4RjHHPKgmetzrxevbTPc6NqJRFQgRrgH44zo2jtL",
  "key5": "2FuAsF9GNHTXw2FaaGDgdKQAKQ3LJwhApmN7UuZXom4vnb9zTYjr51BvZePCS96MsqBBuwL6usZqETt6q2jdP8fb",
  "key6": "3ZULANbQaXueqo4rbPnZRpttUUrK6wMjxTwuUJa91ua2n9Vosn885qAF72bzYSGUZ4L9Jg6kwbMCgBWSdvgqS9WU",
  "key7": "B9iZ4EwXh8sNN8x47rtonZePJG1vmjSxUHxvFaDPXmE8dZbjmuQTAq5cAgnsxN8vHiQnMiGwGZBmXey6yvZFRsj",
  "key8": "4XHSdnQw9qjfTa1jT9izy7EZ4BpAJRa7Sn9JKgoxwKbMfh5m7YnmNci9q45g2Z1JXwjycCAbPbX8puUQE8yjtmrk",
  "key9": "3HPvyQTLvf1GGatR8kpnEjMo7wF9A41ffUQmkQtWWvaAQMWaouqYbanQUa18BpL2fhqznjrgpr5MKeWrpgDsqgcv",
  "key10": "5pefDmtvgaKUnH7BDVXUdkRmDrkjmfo1jsMdasvkHN9n1tB8SgzbjMasJY4tcZEARgLkGZB2WPHhq3ZcQhRV2Aq5",
  "key11": "5FDw9mdFTuJhD9SXE7oAzRowRNtRhWR5pPpmdbVaSnzrTgxjLbXX823htaqoRNyiWACfd7zVvHQegrPW1Soq5EEW",
  "key12": "4KjK19ddbHvbc4vNpw6HCzdSEGeriZ44xARZGwJfmWVMBbiHhZqkyPBKc683Cd5F2WCABrWL7RjrYHKQHRTRWNtX",
  "key13": "3TsZXKXGJGFgRCqT3VXhjL4QiKMghsm6QTyHbJE49Dz6XKVLvG6ei6kQF2AJG9BVQqv6FNnqRBwvN7Geu2ebdSwv",
  "key14": "5Eo2p8ddKGxkTLjGXFYXFuE88iuQ3qkMByYDtSgHaohRzFzuSUuvSq26BaSt5D3c2TuEJSLjpFFtzjTtBN4KDvV3",
  "key15": "5A1L7eqZbgGiktXsKCrV671RAXjiHkKzoi3U7FLMW68fPMpX8khmXmF8VDRtVgyDV8tZrjTvuCf82aLRLcVnKA9E",
  "key16": "2b8j19YTK8k1JkioBrqM9GszEkn1pWwhWo2bKtvNyMee1NjSgL9JgjGZmuxcmmTCnMCQe92J8wM7V2bbmoUyJxYK",
  "key17": "4wEnULnpiJsjokJ8eFWrRtwvtHiqS7J8EvXcg7heBW39e9jXDo9n9ABZLZ5aazHBvQBttcXY9qgTCcbeCHRDPMnx",
  "key18": "uuPqikLoCrEtZMFH798eanA67DchvMCgdWqmNSjbSY7sXqRXk5Lr11UpY6XmUyQ2xKBhkAGTu1QyyLqrhRDgXas",
  "key19": "HbjKoVTx9eatkMCrh9CD1UyTQQgunDSqrUe4aM2zGnd7D4PT7bvGgVyUSDv8dv3z9yrdN6dvypHx7yMcaK46Pd9",
  "key20": "3rrhScdP3HdEDMwg1fRU8TpWnEtbxffMbGMJ12eacE4PgS13bFnmdPfss4jZpaFbFVkV1WzPUYjmsLro8KquYXVz",
  "key21": "2DPf7TGsjGF3mtoykQePN6fpHovDhX82NZU5gNNXyrSCxahMZPNTsnYudCF7fKLtuj8tQfk74zTMhwFmTrkt8Y7i",
  "key22": "3uqqVXjegiLg5r3YMMmkZnBAkUhtTKBPAqUVUMyZCkDFQshvg3qufjEqtYMtLXdHBaLgfwUrMdLWUnSitzG5Brhi",
  "key23": "4xpXBpeByVf1rMyVLJq7GhXAye13jv4sCTbBdgaZGbz8EwxrU4fafARiHfq7e6UwAa4T3fHjdNcXVzLXY8f7FKYq",
  "key24": "5KToMDu7AFpe5LYuHSehn7AJw5fDrhacmAVdWoq8dwbv9sZASnqxxpgH2FYaicgjZBzBpaT7wHCF3juFzmdJdTWi",
  "key25": "3uMDJekbtYmAvmvZuQg8DuyhaV6eUpVywfr97gfS3qLTZEKc8He9pQQ5VSUoMy7gJ9szvSZjtHxtyEZ3bCieTjWk",
  "key26": "5pHMHGTjgqysJbCev1rqBSNesJQ1qhRWARmzJz19uxBaJe7B39sbzoBnxP1WSHwtf6WPGYjnunu5foHFgPrhWZQ",
  "key27": "5c5ijwheZUnrR9asBTZmkeL6Y1SGsx9tMSBXKfhGHsiduDrULUBThD3zBTNE1zD3WpR2tiF2ZZDuG9VNsYTwFrgY",
  "key28": "2oLy1hTPTcArpqPtBvBtuPnmsEbPCqEuvvjs2t1c5tXiS42fzbMAG3MCX9v9mXts233UtRaEWzmf6kDcxW2c641T",
  "key29": "GQQEk3cRZSk5Fho9v2znA8ALYBswFW7odWT7MtiG2uvgs413rGogY5XrSgDogKnBPRUy4MYDyLMrSgodMwUospo",
  "key30": "3ngNCxZjUvxcfiV97fU55dRYPsVuTkkwedB8qvb3Q4DQpPzehxvUDXkPr3peadsFdK6uKvdTS84gSAFm7iUPUtky",
  "key31": "9teiuFvGDwE5fmrSzsL6usMxfqjG9hGpcSZkZDRYczv9NUfeYFALxFY82jnFa2i6EPtgxEU4nA5niE5t14gyEMr",
  "key32": "2xABeT6hYs89VXeugKDb1z2EAsPaECgSqxhezC7YD9s7SofqpVafLsmsL7FzDofwWUTs1PXMShy2gbCJ9tb77JuP",
  "key33": "PCRibNuKvXTBZKBo3VB9tUDBdWMaSJS5pxF4CiVMgcKM5UW2pSKSYsqsGN64aD4cmwqvq5KmyhRFvbrwHhSuKbz",
  "key34": "2wCwX6LNb7mU78gwUn1xysk5hyLQ84X9WKhDtJpE2tQ4z2s2ggfkcjdR4gEhTv8haC9SyjfCVUicxnxtzFdAfBC4",
  "key35": "3GMSRnKAN6JgQePJGuKA7JUG2ju2enDRGj9GHB3fCPRd1nD76Ab41j9qmX7r8PtXhqYL3kLmsQiGB6nNCrayU8uU",
  "key36": "2Qk9XR5n1FpnXDqma5nWMYi4XSXArbcGfP4xTK1ybwPSt5wmMsr2aMBmLN81VchrjegWs7XNVtLMMprw8y3snzRW",
  "key37": "2iug3M5pWNLeWfQkHYyyq2DXn4z9CpEEAQdRavErrk7wUAwUQiVQV9fsLADMEyqe4HAKDUTobZvYhmaPY7gXC1hx",
  "key38": "5y8KrB5yX1jUehvTfjhcp426BSvShAykoEF6VmforWbnCDqtQ9xpubtT2nZpJPPDo3PNsqZ8VcNVKniUHTJFfCEL",
  "key39": "59tbz8BprojUZpZ1V7XQjdpbbpLfsDbMgNRegVcViUur5cojcX5vJUZPrxhQ6vJjekgjYreckbkaG6LwbgLJr9XF",
  "key40": "5QBPhMzCUyP9idGbVVqBWmxHMNsYzedhQci9i1pE5Hm8CH5KghpKE5m3okGwpG34MaFFdbs51uztiZRcZgwkzbcm",
  "key41": "2Sh6oRqnSsije1JDAgZptWPF2mt8GPN5ADMcWwyozWLE4tuLa7BQtmqLp4J4WSWwHarQtqeE7ywuR7XqaDwCpTsK"
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
