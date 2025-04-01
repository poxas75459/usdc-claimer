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
    "3fPXk6cBva4rvTZJNm35cQUvFvUBLdsrb5hXqpKxhYMmcfyhBBeXobGMxRARL2FZgY51qzWbM8Z4y5JGeUQ8MnmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mfrfMKKogWqz8ySr9DvtZkpaxeceKsugUVegmdu5breXNVHDBHDMv8YwkhxGZRVnfMcJu66r9o6sjs9jVDydfyS",
  "key1": "3LBHCN8Tay17utTaQh5tWxw13peFFtStW2UgcH4JuDPz2qzTHL1pMowwKgx5vxa37xvhCoX1UpTvmRXV1jydccZV",
  "key2": "4FyrhVi4ZmifFpUEKDTupF8ySSK8F37J8m2y8hYGqswGRotQeiMUxbhpmQiiqR2wP9r9tckgpQXWxFqfn9WXsubu",
  "key3": "4kdoW28men6aQVY7tXzwr4WMouJnN1fQ969Dcj9d567k93sHMVTgAbdVVYfP7Q9gKvRPbVtVghxCJsTGygyfftkp",
  "key4": "CJeyuUmvJSezoVyiQiYLTYi52mLNHNzqPxk3q3WcptyZgWWaPk2XfGYXo59SFKX4h5HLpEMcVE18JXHs9L5DCtz",
  "key5": "3SkMUbsNE5aiKvPRRbyvurZYguCFT3VqyZLRryxCsrdrAGzkPCDJ2RMuP581cyCc4avGtZwvDKHBC4ZgzpYXz6EA",
  "key6": "DhV3gjHYW9Wgwa419na93vpvDGopmtM7qWTk5hEPGw9dvJ1sCMp9DGUSXPyF9vvQGUUs1d6BHcH19XPaud1wokc",
  "key7": "GEPkRuXub2LMQSNWqAUzvmDbxX5nFMKwDN5QmYqKi6U4if97yo1HgSRhScGc3vHKEHu3jijbBoqmt1VSaupQ2YC",
  "key8": "3U7uBaTG4xtdrxtmS4VHYhxXgMASVkc3neLFbJSHYhptTRT88RpZ9gChce8E7PxY5qRZheg3cEayorUkhsCyW216",
  "key9": "5HTy96SVBEur65eDKG4rfL5pfffezGF9uZHENosYJPjPgq9WuhQkmeYN4XkRJ3F34LZxXTEhi4k75Es889Tm9y5V",
  "key10": "5SEEYkHH3xWgygdXC1sx7876DTG1xLywVrSR9krfRr9fx283NMPF15dCKNco664DkeY9cAKrhCgb66rb6SzdiSqr",
  "key11": "2ar4PgxCpGDgkcujLztyMhSyQgF9M8UJAiYjxorjSszzWQTFzNSnXSEs3sAqmaBgeW5NB7rdSXSeL3Y8JyoBvrHg",
  "key12": "Krhizo5BZ7NXDLaTyMULdj7MRZkehX7Xx1uWRNPq5akgeFJN9fzN4RhazczM48zP8nxem1sLZiTA5Nd4QuQLCXw",
  "key13": "5cYPYFuXBAzUpBuECVUq3eaCeSQV37kekWQKrFDTsyATv6oR1oJizuTW3aU7fLM5JNa27szwM8gxdWv9F95NqJj8",
  "key14": "JsatW8BzBamgygc1MsT8yVnT7pMe3q7MsBJPzzaRJW4mUHHYUoXu41oJNB9BjemipqzdG6r4t9kYiFfGAS2Z1oQ",
  "key15": "3MsqBuCirZh88bQEancayvXJ7Rt78TwcdKSDo8iLL4rJ53LQL7MGSHd3PK9M6UQKjKYVnzQurAUmyAKqF9MM7g9G",
  "key16": "3eCX4gd579DBZAMnzU2vtCfpa6QSAJ8nuYDybtxbjPJH2spPvEYz2wXTHba3tVYdrW41GtNPw3cmUbBcJu2Wi81C",
  "key17": "4mr14yTMn3K2p5yqcFfYk9LjcMMJfLK3sfCWUas4ZKGpz7X4CJqDaWr4d4TGHqqmqJGSAFqKMeEGmZ3ifKsxKn4L",
  "key18": "5DZgkTVkdAuKjYFfyQrYLHQzrP8Du2F7TGJVxdAzSuZcUMpn4ErSYv4XWsdcDC6ALvU1HSdCKDKrgpWkCcxWUPrB",
  "key19": "4JyyQSVJg5rqhxgPS7qgBHypi2um3jKjD7VPMtgvCFjhRW4waW8THZ86eR4vZ2CGVbj5ymVwodWqDnEWe9CZJ6Sm",
  "key20": "5RnbWeCRqJVMv1WMzjVyKE9nvVxBDyw8n4CRWkeukYq8bJRxVTgkrwZtY3qx9KA25dW8ayksiwvMGCUkN7m1ou9C",
  "key21": "2V1y2YF31xMSv4xvjCrkZtKQK8D76XXSd3fVPMKPA3NPwMxNQTMamEcf2THzcQEU4wLJMvxJt1UCv3t6Nv82a2jm",
  "key22": "2JWuHf861RkhFPcYWFQMEGfLRaz4VsLkxn812TeTHdPNSZ3Uim8WLw9e9cSoBEHETeFXJvpkdpWTYjm4EwTbeFPU",
  "key23": "4VGcKQi3MU2gBvHzTfgZXmjoWKMK6xF6kpuy5bWFxPqhd28nsCths1AhGTiZ7hbJRTo6hRRUjWwsKLiFLUHTgTSU",
  "key24": "vnj7MCcjjUgbNmT2QJktbLfq898w2jN4VuftYQJuQArsvdZXC3B163BRo3ENjBQFtm6epTAUmC9jfHp4SYJDerf",
  "key25": "21Cvjtohtvwgu2zMS9XP1sBUTqUgcjNwjtgRToEF4a2NyH3wCr6fPJ5KHNxgZC9BAxmrAjXLSn2XhbssbSs2YE3o",
  "key26": "2ys5M6VsBSihXtGvU9PUd1oBaCcmfFHyozC5fiqHDqg4R1u4UTy81CmMzJnBmeFfSjEgAF7ApAq4G7E5ZvzXM9tf",
  "key27": "61KC2iWhwarsBCcbiam8wdgD4VLev4SQYfHkAGSi7Vs6gaebyjjjicUeE6pWQMCkffS7jY9pHmhKSdrZJGtpFVNT",
  "key28": "2zpGqY4LZk2JXeDjg5wX6vDr9zYnZQ1M1zCfdtRejHtHh65JSqfNoQ8z3r7LeFhTaFKrHEEEdrTAtca21E7SPjoF",
  "key29": "5oyvRjSDw4kdtU6YZDkJsefiVJnoUDW1w8DTPEXngQLTaJcif9RXWmNBoneVzU6cbzuCuZeMn2cHkS156J52RBab",
  "key30": "ZCdSAucF7SWjfwKubpcUBdkraT8SsPhYuimVaQ5RyWrZhztbfQMatXmkYn9ZjAY9jFgyVNXYLLXi6GArVQCdbqF",
  "key31": "5DDHTPUdaYE7FyFVjzLkmyQHwipxwWbTtNn1xhegoR4BG8jYaPAAoXzExLni9KBXUdz65WannSVJCq1tLHYsqkLX",
  "key32": "4uZADG6VGoqaprAcrkAYMMvSivNEsjJwmjHCbp6EWTuen1zJRtvtRhftD7ZTMcZ6Ysb3jgR4erKwqSzpjLYP3KeY",
  "key33": "5AzMb32T2rENFPyYrnZyUUHZkcq6pvLi8HjZ7m6ctr1qqNxdHcpVzWWDzTtHqR4Rhwc4yvNfPys681YGanoU6dF2",
  "key34": "2HqxAocEKR2MLtGYMoa1hNit44YDfbHpz3ZLXP6X6yqgxXrTeQ9B6MviLwXPGV2CvEDQtNa1jTYmqPzVTMzVHKag"
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
