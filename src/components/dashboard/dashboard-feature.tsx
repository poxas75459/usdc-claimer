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
    "2zcL9DGQsJeLiBvnbdLNV5heFE2bHPqFnZ846B3NJ63NY6FJCRKVSEqkQwbRzdz9DcJwPrQFY1xfYWQDNmHyk4UJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tkGrQmPr2bHkZrhGDusNXqvfoE5yCFNGcGXUk7xm1NfHZmRfE53NxfTE4jWvboe3jJxt52ySC6cW816h26t5Vyf",
  "key1": "5DJGWKE6fwURMxah5FkzDgeqb3p2uzDwsCkLCWw5hurSntrXMoSffhSjU5CNVdcd6jcHEQCAJ6nXFWUPYT4Uwwe3",
  "key2": "5TCggj27vNQCFrkKnCxok5aEmAaoYbwatY3aj4fpDnXbaxiv8RaqpJSUj9bRw9ffFJzBD2S39PK245V28teB4WQe",
  "key3": "2rqG6ww3pZk4rLm1gfE4v5qGPmwgxbP2FJuSMhMc1afYETgM9MS6xSH8GgFPTC5B9A7ocT3jcEoAzCssyc187fFs",
  "key4": "4ocUYVVs43u9NXrBeZCvorb6RbeAZJ41aTJzx6jSMnEXW47HdH36338MrsCmuB5VKET1Br2jzXVoAcA41548Fokf",
  "key5": "3dgBEo6m9VXbdn4GYPkUaQsqfuD4znvuH9BYWNuCaMHWqZVBxJ3gLr1TZfgA4UiNcaya58X3TV8F3cioDfabDdPv",
  "key6": "4NQ5pBjvEqQ74CtfVXbLQuFHBNxWDUFuBLHHrxnGB2HQ4vAE1WDnbmZdttCAUZPA93GVWS3nMYwTMrARogeWz8tm",
  "key7": "48rn1DYZBWLFcXzmtEia17KscLvQvZGHyxnRcxeZQxHtAtaA8wJqdStbj9zmZmTHtLYP8Qkd1cZTZ6hsz8TRNJc",
  "key8": "sLyrhAg6EjRYRBewC4tjqQ3zf6indwUeNn2s3yqrYDZWJe2w8sM4YRai3uVY1CRVLWrJULXDHaFH5WF5P7V25fK",
  "key9": "3Gs2h5U5TMuyDvgeqNpJB65X2qZdcx1weovgHygDjcTfeHT2b8KPjfGJot5isX6WzPTWuLgHwRCLjxEVdjKgRrzW",
  "key10": "5wehRumGVPayko2kQyWY7QbW3mkJCXvn6WYPxttgCbXVxT2vm8LY48WsUTbiVwBizkUrZrk7Gh7JQz6SrfKok5oP",
  "key11": "4XE6ZxZeWgypgYv2Dof3VgkrzgKuQ98n5kj48FLxCFgo3i9B2BPYVwFF2YGd9nrLYH1NjXqvrmrrZW7LJMX1UyoL",
  "key12": "2RYR3qhpyXpTbJSDF3A4rpgYAmcF9f48h9gndkwh4uDuVE3Av4Rdhbt9Y3kW7h6cgf8eyDi9BMiZsA8ibL739v4j",
  "key13": "LNSGEECuQbp2zwbzb9HHeiw3U8EPQYHYPoN2r6oRdGTn5L7pUGp8X3rzSkiZuEWZpyxdTrKFrJEEnGaAxi2iHCC",
  "key14": "5ZPe59zb3mfMh8gipwsSZV3a9jKJQpDDxPr9d8uwFdGPEXQBiG7N3yBXLCLQcnUdV3SjjKvByeAuE9YXf2ew9Lpe",
  "key15": "374wn523FWza8yagY2SiPjV7PvMVCYGY6PzYbvgFatBSw16aJSBy5ujv5iN91oJRk2QdWU2rx6XyuXUaLJSgEzR5",
  "key16": "4oM75uESVt7UazgnXdTSwGP9A27aG9EXxDUK519p6HjQAAwUzMYePKs784RGwsLQNxwk8pokbFV1yL71zfcDTmxe",
  "key17": "4gkb7kYPxgnbunuVozceKBGPyqmbP1YosuEWG8eB8siBVZXY73e6gepytgT5ttKobYjeGuRHTFcLNDrUZQKsK8dx",
  "key18": "5NWm115Ejx9GsbUSyAurHD5mzUvk88HtHk245bsXaE8d4g2grrERDgkWHfY9wvhLv23RAoUWD5E75F39S5KnvZkd",
  "key19": "3a29emqVSEJLkpi1H3nxF8j8CD2r2NAQwXzgthMmCmxDsiRsMy1F7BE15FgELma45Jwb9xCHjvPEDiErcbs7ZdSE",
  "key20": "4ucNhPdRezUxfnfiZqRyYrsiFfHMGC3fjJjpxYnEQ5psSdC1LzEYrHbvrAdfoguQS3cY1ZwPAJR6uWqpQXB8ktpr",
  "key21": "2ZrDEPQcaWbYUtyMdhTReV84JH77cLnbNBmd6kP1azmP5zpVxyVXxZmG9XCPtab3SusYXbYLHSHf9UVh6NGrhUMV",
  "key22": "5Q6NZaGiBWN4SVSh4i3KbPiR4R8NHL8vskZmvwSuW4p4vzWSuoG9nr3tKYNAgP7ADwppfetpvfcujW47CUSG1mp8",
  "key23": "e3f8QTWDFMF1gRmNqb4Pj25kNao5JKQJDExF3N2BFZowAVN2pKCTnVU1MwNRVDbyjbHEZgDqUFrVpEgt6G6cPBz",
  "key24": "2nkxqUcDd3ButQe5pyQgC4Y673dr35sb8wZZQ4SKAoDcXVmpekGKiTete2SPnFfyQ5T6SFu6TbP6trbr5AzrDeuS",
  "key25": "3fWFAb5z1N63jfR7hXgCd4atwZHN45ubTyvzzb3LDyaxjMTaJmjZnQ9tgzG1RbehXEjauarwXmyQv1W4A4hrFfo2",
  "key26": "qkuZRaNu18xX9iipEynB1WpKGkw7xGZujkc5tMRRbR5T2T1cbsKaNNuv8HJwo7oErvioySibtZB1RiyfWfwpNR6",
  "key27": "2uEXeJ8d6UaLCN7b8tGvNKHY1ZMP5boki39atoNbdqpkvEEvGnjeQ83NL6PMzYBrsEwawdQg55xmKAaceccHjmbF",
  "key28": "tcThvvQbZMxDVt7t65v4WKt5DMjVsZ6Yuy2KjXVPKVMdY5N77R9oqKxRnUihHNXCC9hVeYvi1ZgxQY5HAiqnMLG",
  "key29": "5UwmrvtKYe5tdrVYZAR5xmpzCbvGqjbSVYtVybVLD7c8oi3A6qYahviyaFdBZFZBrS4np3YNMQDGYcqavMd8PhGh",
  "key30": "5PhgaBVePPveWsSxrR1UEyb4kSNQms5QGdg3bWpiYMYHvdEzmx8SExRXD6FbjaWxqEvuRkMVWGMBd7vEuJd1TRPK",
  "key31": "5PxGdNZGh47S1CrRPtrGWDHKmVzJk26vwtJviQQubuxKAyEpqJuqMNwJZH5bKkdJyQRqryN9KBxNv3PtqNEzDDgk",
  "key32": "enw1FUAH1hpUfGZuTTL9xXinW3KfLj5oCdhoYzgX6JBQXMksq9CN8vrHqoh3EnWnHkn44QkoSQXysVEQxWX2nN7"
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
