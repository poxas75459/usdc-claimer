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
    "3fgzbj8w5B7XbFBKV2XuKPjsnfhCFx8P5aLEs6kwJAzZxk89oEkVBDk5BAoGdwRquvEeEJQLyHBv1dQgAd6Ct13n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m2qBg3gqhfV5gq4n7QQ1EAFGe6oUWBB4G787wDirorgvthevNLH5FKPXZjvepp2PmDnggt2Kq2pY1mrpwHLK6xY",
  "key1": "UZ3T7RzVs7TAsjHeGitXYWqvYPohcTWrU8Jt567yMLcJ4DrusC3YABVUHaXt6qQT3cJgzVnHf7YaJAfpPeisysq",
  "key2": "4fT4QqrRYWhPsjDjAVK53Y8hcCXPutxqnbBwZoktWwdezocV9KppAhgPxJLqxpwiWLcrxPxDDZA8sZ6to27PjY8U",
  "key3": "yS7Ervkg4zbhKZaR1HBBCcQmoFVTzCf2LyLvNB1Xp5DyHJAhxhJUXesnM4aM6dhZs5wzx9q3DpX9nWREr5m5npR",
  "key4": "2dd5ZA8W5nyHfbZdmFTr2bZjK2c2UqRKMZDNTAcapiE84izLkSHmRi8rFQmmZvpGL1LHfzgYQVvHdmbsWwh8yAZJ",
  "key5": "PJJM92X3NbLVU6s8sv3v2ZXM3Vn8b19gBJjPWkg6v6cGaHfkVHk59zx1wHWrQJPboBY6KGcvAZ3YtKZBKPaE99v",
  "key6": "4MZB9Th5d7eADDnBV4rtfCjukbcedNccQf2qVEW1pRi9YU3YzNiZYDhXiPbfzHMNuq8TsjKYURy7enumi1MM6DVe",
  "key7": "2595EExwWcVcdCgHwtVBisTSQaek3hQXPoARia5T5H6MaSx41G2oUiNxULg8uQnDLhhjvEj61JfuFwjQw5mbWXTh",
  "key8": "5znX8o3SzL74AsR41VvR9ufmPff3jc4q79yAtAL9nCTXtb9TRjW1Bgir8x4eNoU6StE64LYA3iFbTH7BbxuTBoYH",
  "key9": "3kL6rG7YP8WFwhf86pWU3CyosCFz3KN72rJ2rFzygP7FywxGFUDyJt8cwQ3UK35RMVFHizd1R19GQmH2toYvHort",
  "key10": "EtE2KUv6iSTbjgbjirdUTkJexuj6XCZZDu2vsswo1HC4JyP6428uANx2ypr1u8RXXf9uePJGa8uF4RNFNjw3sYB",
  "key11": "2ATBFPiT4SEYdcdZrSoni52Ha82MAhojabnFDhu3hJpwxiNfGGkTJefMXLw97aRecAFCdfTN9LskoerFLEmc6R8o",
  "key12": "4EiJVKjatD3mQAdnzSdHNNDVGvoWo47Juqpuvvh66vGCjy31ajnvxMMLSdxjg9ZKaPCYbY517HgmNAi5oQSVreQ1",
  "key13": "26xqS19FBKRLedeFG9TK8wV3aXHS1cMNQZ5x4vz7JwcV2j4wnCDfWTtEEtKrCQ544Ugei3MjAFN6iA7Mhx1CnLtJ",
  "key14": "2XBgnkMM47y3uaUHWV1RVDCcCPsus9uMGFCzc2S7gSNqHZYKrprQAq9umPeWBvmhbvZpf3GqLaaKY6yZ2DD8JyGs",
  "key15": "3W17jsB3uCXNcpSEU62DfHTbmyhmMFD5qqj88NXsLvaZU5j2GjRtRa3uDZRwxPvBup3ARkBtvCituWhEwEqAh83w",
  "key16": "3a4D5FQ97uu7v4CnNBBZUyQeN3uLouCD8PEGC6tWoBt9R62889xVvfrDAnBSZ7tFGKNCTAmuQRCSNe78tVP9pMXL",
  "key17": "57E8A4fqU6ey6ZTkTrLu9qJc5KmmDrnRPayDZh9XocKzsf6taj2ynAArVknP3rnMZ92hi7KjDwiceXFBmM96epmx",
  "key18": "4XaUGtR7QHMxcYP4fsch3dWziQmVb14W9pbcDfc9LVvzjVyyGpK9wuUTbPPwpxt2qaHKBTMEDWB8fpFG1AUokCkH",
  "key19": "3uNgUb6v9GTKm8SXpnk3rxgkmZh5t9GTgTKeo9bXpUVfDMJJF3PBS4Grd4iYBmjEun1rWpMY4DLiG4vuh1WEdBYn",
  "key20": "5GoA724K6BwRQy3D5Nx9Q1vmMZ1fRdRJwynRDcWHDZQdr5zsCJMTkdNDFrCtr5zrxCiwXeKRc7mmzS3Lr3fkucR7",
  "key21": "5SYmJJtHHw6ic84R4C9tjqtGU6R8vRknsbwzARH7nQQHx3vYzNf8S5Cve7PxikJBrHNLXbAwkjfc5MYUuUPPJT5r",
  "key22": "vMi9LjJZ8QGQ8xruwvFdzNY4X3EwUCBuqkfAMGteEP3bzDuHtH1EY73uZ2hVVgJd25amZxTMYpMkku2mQxbsu4Z",
  "key23": "5YDGMGVAyo5L9h4szeTMGLeEDarBs8L7MuW5jsT6GiJqYRYoETbQk34eo4eD4zP8aBxgqPZ8C9JpRUo8LGtktt4Y",
  "key24": "4v59w4Lx2QuRAmdd3Na5ERqCA4r9ANH2zt6Ut7GaZm7MiadbATEq1h4ZMPTS5qb69s9ks1WK7hUaTeoRvs8Do4ho",
  "key25": "4jVpsGdsQwRY84vbizBuF1QtUMZULWoMkgNwaksPcZBYrpKPdoFRo7xn1qayjvr9Gm3mENPbip95HzWsExWpk9k8",
  "key26": "4tUHToR3VvwN34svn8yNd5XJtSHV8G3PmJgqLp3tR2iSKKZBVQcyan6KhSwLET6QwHRgYopaTg2azkjUpShyNF3s",
  "key27": "DNHsWQd75tyhHVomBWE7MGtocNtFLP64jkbCsM7bLHqrtdeTWTdXHiS2e2mFFkQ4G6D1kb7iAJ7QGDUWKpuiXVU",
  "key28": "R2vcWzCQJSVsJat2Gc1cd8n4eizVYzC1nKtD5rL9w1YJ6Yxc8ZQuTnGfKVnPJJDtbpVZ4XjrSnedmvEdyHGPkwE",
  "key29": "3oN6mw2dnVVcz41QE64B9ADgNUf5cs6cNroxMv7wDoJwUmSehhPfR4Cb7aJb1bfTy79H8axedVVMbxMkAjRVK3rW",
  "key30": "5n4dopRzE6cd7WvT9TBFpK9yVVFBjYhNEhpqNBcUVTvJyHZKdd2KkBeQnwHEriVeynv2NectW1DmKTARM3w2n5P4",
  "key31": "5HRkrY213Fk4U7UJktRRq7PvjbhqFCueggowsW3T4rsfUeSuytX4mQCKW3Q6muKt22e9w9cmYERxisFy5eYwaLQX",
  "key32": "2Pts8MfCqvvJRWc5aH3yqiaV9BbSsaYC2RBY2G6p4N6ps8QZRoidbMUGy91BJcg4pr9G71PzVWH9LprL1oeqeUZk"
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
