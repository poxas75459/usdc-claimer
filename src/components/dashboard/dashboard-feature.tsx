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
    "4dxfuMHM8kqV1XrQzzmx9qaewbJn1e6RrF2612N9NMNuehterePBc9Weurt85UqoGL7u4SVep4ahMufFmu3V2nwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VYNpHTpAAcJwWLTrsbmRYFRD41yhPRJ256F1dwf6yQKmYRgasGcTjUMbfR7YARebNBKaYfRJnZuNDCYmZJde2Zq",
  "key1": "DDwWwf5JHu3Y69Dk9sP1qWnQetDSWs6tiWwkvH7gzSppJzHpRFtfnALqHA9Wqz4K1Jg5qD9G6vfRcWc5RbC7Zb9",
  "key2": "2ouzjWddvSp2pFdfDkjjKMvwQJX5oxcyFFcUjRX9QznDW6Am1tJoE2xToeB2BdsCsmqdHtvKedKi6oewT6DBmCkh",
  "key3": "zifuH36x1nFh2GqAsppyG8MUpH8xvgdmkdSw7VX398hK7aEyikvzSEGLLfp9hXCGv34Fn9GpoxQXS3rV8RpgZzH",
  "key4": "4WuFKUC1MPUjPBTcBmJ42V8uzZv4RZbzunvsnRcF777yCWBY7EA4GkJxwMAuZ4VLC17gDhwaJKUwt5KeXtjXHh1Z",
  "key5": "2gwHkHAKnRn4oxqmr5hZ9Y4n3JWe2DLZfKRtMe1iP3EpuUPCTYbTFMd4GgZKLGM66Hsk57CnRi63h9HSGxWdZ2S2",
  "key6": "sVGQmWL5PPSfMq4v2SW1BykgigCEim4boX5ctaaN11rf9wVWpXLcm2UreUT8aVGmKkkw8gYpLjysW5aR47GVuMY",
  "key7": "2ddERZw7wRLxYv8xyDhNLYS4c7n3zoUyvYfBVFidZYBWtNhKBQwBL8uptNwBXLQMoGkyzJ6zJtNuheFdRgkczfPU",
  "key8": "5di9imZPNAwoHJcmXvX1e9eEUYDcf646PVPEwTiv4W86Rzf9zhfzTzPG1WRFZPo6ay15K2dL1MF1qN5g43UYd6Xb",
  "key9": "3ugbkx2cgtLJAkekpEQWgswe57huaZ9mgyrmwJoSVH1sEJrbfF7yFhRk3uDSc1aeuuxRTXu3F1p5wywxEEVmacma",
  "key10": "4sGJ9MuxGdR18xYeqtSqcJz1SWNuRsEwFD5x7Q9gpwUbY4JefDxLa99Gz9ELUxPqXdMY3hxKrFpvgVDei1VaBrsM",
  "key11": "221a59kksx9yr1SYb44QzdLRZoohizHfsY9UvkFeWai93uW6XZTduMaf6VToxqBx1D41YZy1LKF1dByVX1sNVuGT",
  "key12": "5z294MKrZyXmVCpEcQY1jWjemXBvrSSvDnhnhHqYtUnQSGi7bNLYKAb9sKEmcFYxnozJo7y6rWJvCTQcEtqDDRVY",
  "key13": "2b7qZt2cjfd3inVWyHXqyYcgxfmT8EgfkJ1ToGpWJMq78KLGuAzJzRrMRJjY2DzJ6hhiQo2GeF4dNMGxK7HSnkdM",
  "key14": "27Eunyq6xYPDpD6MY2M4wXro4zzECwxhfPE2cSYQMsB9id99QP4FVUWn7mGyrD6RymEQSza3D2zmjfEUFk5VDhCm",
  "key15": "hXD1Q6MdX8RACEEyS1cHsBrejTwzeEVi1NHZRUzeyzxYVbo9Qr2aCyWRSoj5dToz19BuDpeTyCMidccy4JCdFeg",
  "key16": "2HtS3X4D8Qm68Wn6wWZUQdYWW36MrZYCav39dY9qTnJSk7FZ1Z9F5cvZfPwgXSV2RinxhfV6UXDomsJQfkenTFYj",
  "key17": "2BuGUFN2BC6tFzAxYDTnT2cFixRQcFVN5PZ3CofxU3vweEn9C7ccG12WwJgo9CMA9d9f3zKvtkp41CZ53NvsV6K3",
  "key18": "5spopHLWP6KztuspieiFgLdcUGGp8RvcxHbcKjHq9ovmqEE9gaS6J7TLa4UVKfhzDnK72kR9qebFuZVK6nC3Fzzx",
  "key19": "46CfArdoH9MTbUeizAhqfiBpTrooujEdDWbxVQT143DirPHYAFuhT27kHDc6cQBE3yZTY2QGoKeMtWejThgDyvuc",
  "key20": "ZMc52u8hFd36RdZJaEXuLbXbUX9RXVSh6TX9Am3AqNMvuzCGCbs9RHWumBTmv5skYa5AM63q4j241SFH5Jp1qW2",
  "key21": "5XDyNDP7UrRNVyDtwQaS13nyhsfH6HY8LLJW4w5uh5UCqn8ZYr2ZGsuhVfo5y1ccAa796eXCgoLx49WqFzKzPFwz",
  "key22": "3835QcGUGzpzfridmsqz2Mb4aYqq4RdhNcnqxFhhToVhiQvfubbsLavaE7v4xh11UUQJURp4Najj9t25gbHdzVN3",
  "key23": "38hwdrwqtMF2XY59g4VSv82Lot7PTRRvLATCz4ViV1Q9cWeM9buaHcrWkVD1q6fxyiTcKrGHpBzDH8s1gtGNdGve",
  "key24": "25oJs3dKnc7nwPnt3vdeqvZwME1jfCWjpMZZatNtivypWVTAw8JmYvhUbxDwg78jNC8rN9miAxx1RNMTc5S8RL9Z",
  "key25": "44419FhYmXNd66733XNVsqdoxwpKpfyeAZqq1mXw37giLne4YKozhTjmTLmPQFZ4C1gyGUP4WRg81HDeJUK8ti1n",
  "key26": "3Li7npKmxTeX8KAqUEj5kPrHDXYDMKZUu9WPsiF6BTpWSVnmcoFrbVuMMiNv6X1dZNwiRAdJXKAYhCHKenm3p3mi",
  "key27": "4cC5ys2TbSB5215W28QA4EBEw14j4adfiDagPhqABP4QEuicjnqyRNeEsbam2sFjTsoMVRyDPkPpHPQBbAFA1RBg",
  "key28": "Pxh3kaqY6HHbxmC8nrNtSKhdj1CMjHnGhbEea9MgwWFQ2Xqdw7Qq9KbmzHKSbyV4XFNKKj9wSnbshZAVUHeaZ9Z",
  "key29": "mRiHydmAHcD3riMNrRhwT3uKM57nUjaRxuKCuGhr1kEfnD7b78JiLpUK5we1qPLWQcvEk6S5zuXKsehwcZQWGXT",
  "key30": "5tiH7oYDbTjw51Nyk319ZKMVUsLY8k7Yhbnu8vtAtBMapEZnyWxM1dGtJfzj7KVxqBm7x1SPaMJGXHpoAqaSAWVf",
  "key31": "43JPjDop8Qn2AiuRDmK2KAAP9cnipPf7yZtXvGCbDEiHbug41tfoWDu7kpjaesJSd5p6C82ndMm62LuzpAvMvxSM",
  "key32": "5jPuVoryCxo4h46SLzQSk8c3YCLz17bcodJe8Q4ixgwBEV8kh48RD1VJ7SJDexYiHzpQwxuv2KhG31wtJmRvNYq",
  "key33": "4oGasSoRfJJghNnbmNfDjYxv8CGxxCXzJYpLJT3x3JJBEktudEdHaAosRMokyW6FnQmpdSRuhqGsnFzwD3uFtYrH",
  "key34": "49Prk3bxWSBwLT3MEZZEAqbJPXWmeKrqDHKPbcpcAUMPv99TgXXpwahVzBt8w7x4L5VWTMuaLPUGpuiss3zxxDY",
  "key35": "4F1jBdWEr8zF2oAwJiq329pKL9fmuzMoHCiXzwSNaWrw6DZxRPZZT4YcXhvPbKNMidccTpkop1xPfdHS9fXcrekY",
  "key36": "4ABsvhJopLEMVpcVBnCthRL7BdVPETkbCj5m4f7MXe29vcCppi2K6q4gsaRuGEftEx9NVNmcDeSWh3TCnWdXeyy2",
  "key37": "38jRgtQmi1ky42DfNnuAoDySBo7Segwvk1XohXson5mjZeQX4xG18ziiiAxxn8zeh7EAa6mCzkzy5BJzDDcRhFf4",
  "key38": "31WJGGLQGBQC8gc2KfKHXuFThAojne3z7HGk99SkkQ2xEfDzXNy5x3sVynmbQzSBoLsngHktjXzJ5ZQX88zJJBt2",
  "key39": "3BQ2Sex88UfwCfgQfqM2C2dzLHG2C27JNN3yMZMaBQGLDdgFG6KuMSSzCtqAjXF7EAD7foTPZPEBE2GLpRRZJVu2",
  "key40": "56cs1pFddBeJYQLWamsRkRAbZQuCUaaZkPJQESbmExzBvfUhH8ibnbZS7fcTGc1U2Xm1FTwjSF916Bh9i5JPff18",
  "key41": "4h9ph5J9xFLNeWJMbvMVqU87Zjd9RSATJXKQQzRGppnwr7et9ZyuRpnEXNA96F5uzKa1RXm3owYXmW7jtDXfqHVq",
  "key42": "3mGjwhF4JiJaYdMeArDpsZekegQMm1n5MyPN6v5svAxSPTqAqmUQRDgQxkPYyf8wpVhTpEcHgJe6WKSY7NaXh1Jp",
  "key43": "iiJNuqvw6uCpRVq4ssPubNsngbGCDFxAsfY74iGtQFipPoazgXmAwokrmLE7NPtqEttp4u4TA92Cr9QGPb7iP1E"
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
