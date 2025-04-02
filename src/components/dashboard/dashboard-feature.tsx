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
    "26kcCVA8HbWXMrdtVhPAwGhkVk8ucZsgjcpuriWKmxNWUnHf8jMaaSeFtiYrPfEuNWw4ucyB4iQu9AU7CySFFb4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k8cT6aQ1whxxpCvhQhPGbFKXRJ1zY975wdMmkPJjp3L37N2ZtTZEkiQUxWmCE716SKnzYaPRVJRHeTJdom1dco8",
  "key1": "3sG4SLwCdAXT5y4AFEcM3VjizkyD31hWVwSWRgDWgXv9RNFXY2amoURy728eN3jgLfnNpXUKC6pugrbkayzrYKML",
  "key2": "2burcgufBBTWK4rmYodwhCuRaY5YcNY3DNxyic6FnTfk1w79Y1xdeXuEbUeAhkfbCe2yFi5veBeZqqQmYe1HSdb6",
  "key3": "HgNCe5qqBYG12WupmVj6JZhPCxWm4iYGXMR8kZjFYpejRART4Nwnm9Thdg96hTB4oAge43Vf8iuwU9dD1fJBi7W",
  "key4": "4HUsLABwJLFMipzLUBuNKJ9MSo2YRp6DJEUVrfSxSjnVGF2esoKpX9W4F2az9654bMhWjWqW9fUk1PGWbr22cdj2",
  "key5": "4bmo9UgVuG6y6fscGh3v41RXpxWZtZWfRPXmeiJhdLp2VLMEVzFpyiXDhnhsa2V42o9yYgSZpgxE97qgyPr9CevF",
  "key6": "3uTeFuQVFmMepCfvgcifVNi3iEAjKfHMFs9UzCEHG2u5PCnzQJKvzxZhyBXa3LdfxSpcuXxuXUgEyeAPSaAdtjGT",
  "key7": "4EjW7Y6S661mDC9VLPtjiCkChm6ZsCzYUae9R3JQqu2Z4RKKKgSJuPRVqVVwmzV8MYCTHwth5Svn89ZC9cKCLjcp",
  "key8": "5XGmVeFx2VUnoXyVmNZRGuWsdw9kvxjDn26FQh7sM2v7BDfqYMkTWuo42ud2pjt5Rjm7K5GnRuihX2oaPdqobdAY",
  "key9": "2aSvsWpUq9bLGYkrqnbeaEEM3mb5S3X7jmZBncT5retSuAzfNKnMyA4crJso3S3wq1ortxB94MJgD9quFu7xFLdn",
  "key10": "45XuWBWstxbHRZViNzUjLF4f3FWPgaXkD7rQcmUibS4NCUuq2DtMbrCRuY6Uf8gFbHePXodjoZCUkdszALJiDsGa",
  "key11": "41i9gYTh18rBDerGaUcHGJfP2ARixPotSujFkL8zqX8bNCqiowWvP7QgUp9Yp2pHsP5iGmYZmSDerLeZnckXEcfk",
  "key12": "4iBmEUhir7Ycz4W2LQudVCmzLqxnbQgKkp1qUmMd7kzV1PWNGkhg3K2bt6N8M6qWfpev3hc29W1nrHZrZecpFkrC",
  "key13": "USgxTJYQQWF4AaiKrmKW8BNzkBPokimJyoveuzjnf1ww7GWDTHzuRKfqf6cM3WpnpzXELTL3NHEDctCzwDk7mnh",
  "key14": "3aiB7NL5zqHuoTzLFxYpagxBFjnkkcjVSyJfL432776FkXzveVEN9UMfF4bXFUydvpU23i5ikTKidwGNcke2ajeE",
  "key15": "2xN7fZcN2CY889aiM7V9MBEgWmfeDs7fdZSTZ7t6nmbxVH1Eb5AjMyV89zdHd9e7miSaqqUdi3LR6PS2JAbTWupD",
  "key16": "4i7BRhs2BycShRrAvCN5FaCXSxvGi9igizj4ayiXT2z2WfSRNvgWhQ5qk6x2P2e15iqzkX8oAzEEpGVeSSWjLXmj",
  "key17": "4YVeAd1y6LCa8FmTdqytq4oW7b3QN2MDfyxLZ8crbaN6c6gkNQAUJuhsRaNLjn7wQypwk97bGjm4A6LiZ3KyuwWS",
  "key18": "jCqfku1xYjErYp4YXbqe3bxMCwboeKuRoarcaL7QJ3GtihrtRtCpbGY2R1bivaEs9NAAXRKUrQBFkUd1RDQ98dg",
  "key19": "Gqts7VUctcCwCxJFHVhzzb1vbkGCuvafj7uRGL28NhdC7sZ2yCG3LWuMYR32DhgUj1mPU4TT5oNM6Z2Zpyes3eD",
  "key20": "2EgPn676GwBkFVqhBzuKaTgzi163NfYNVJniuRrN5H5gPrk1N9CmD56AigBc4M2Ke9UaKKyATPmm8djdfCUkgWeQ",
  "key21": "4kb7xpojPzr7rHQsDd5eSCYPoAjBsp45Uqciv6i4GB15mpfjRY8gxA8nzzkSnRCS1kFtLEVZgWJbUypiHiKXufiF",
  "key22": "4ZtRNWvehUNkqKypnAQqT1kw4i8Bn48YzSte8BgJx1npzYVifTm1Kbb7dzkp92Qu3yMahRY2GsaaRnk7AXKBJDet",
  "key23": "J1qzNXDMpSGK5bFiF7uuqRLrjMe2H3e6MNNJ8u16j2isjoY5tnhPHaEUxzcuo1vZeFvNkXp7if2JHoFCgdN9TdY",
  "key24": "4bvaHSp4YthTFrQu1agmgjT6yjFMiAYdqZXHJJyRed8Fyeqos4vjaxpCbBKRFo9Ccn9FiBsCqoMyvVsxMAsYpzjt",
  "key25": "fGMp8Scewi5NrRdF3ViYZjwaN3GjGYzSMGJYmnc8Z6ZkJGB9wgXBpbmTJJ1ufEz2gCBeD2huwyrU6Wbb42Y9yYK",
  "key26": "5ixAY3rrzrp4bgaia7fkKFR7iAm74SCj3cRR16JfGhEC3ENFigAu7aZSwK7HK9vm19PMpesFDHQCP1khrd4rPfvo",
  "key27": "5UuAd81Z4tAL6c4BsJrsSs6m8X8vJbCsBihhmEMwTkaUdqMMT7wY4fbxXCzZFxUimXXZfdn6GEnEJr2ZkbCCC9GH",
  "key28": "3VV8yWSdNVW7bpxNyfdxJmyynTzXpx9EhGfPEK3qSLdRoeD3WhVfLswvRQdLRb9rYfnXSWFxPWXGaLvbC5tNFyK9",
  "key29": "4N5SDUbCVLNm31crVSBKJwCuaYVrbtSjnqQzWtRAfwsotC1t3oRueTV4iP2GKbXMQVSUMWAoLX9uJAYxshhv5WDu",
  "key30": "4GCuEjjggp2YN5pvKkqbHK43GDiiTwD5GfHGJ18G7XNRwhNbVZTvmsBf4sRxj4gJsCaQ3M5XWzmcxTjqsgnpiU4z",
  "key31": "fmVt9JRSGrjw1iy4kiZKALe6ipJdM8ifYWxagpp6KqviMWAM2mDtntrGxJXuramMaDR8rntDbw9Mg49ekRGCGft",
  "key32": "4QGNnffKEewNc7LSUxWbzbqd7fVpcU6KypRhBTkgi9V9Y4CYvLjSeERZ43yE5KHandTTXfnkq32hv1oepXMfCmLm",
  "key33": "4NS76Ew3r6vdeXcev7qf7CHCrsGB2tN2CbwFK7hJJJ411R3s8rNPf1KgXmCLjRWWSFTsYTMJCjZheDbwyKFuZz8w",
  "key34": "3sLAE2H4T17K9HxHFUeigxnJ28vfWXwbcfUoWkype5ovyuhFoisZUnJrWsCFYiGWHMsKAJmX6X2kYWERTpFxLU6j",
  "key35": "28U71i5X7r1ouqsLFYCxUhYKYyLM8KMmdUFzsW3E41zmWa36yg5wLShjHvGEKWb4u2V27hJ97xGkCGnpCADXnmVP"
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
