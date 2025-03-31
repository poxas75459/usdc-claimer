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
    "4pEWLPqm1HzEER8ed1cdV1hDb9HnihkdcYD6ALgxmFTkKK9fEGevNWctRDKEFpK4xQHuXo8YiUap6b3p6U8hm55i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aGRduVmi577NLXYFDGQGqwCjHCuF2jZXDhuLeGHFYWXcyKsBfWLNF8wqzn7YZmUQuwG1XdjgT16B4VMPGwZQJvE",
  "key1": "3kXiTdgMRMaL68N3eZbjSKGwMe5PbEz2H3aeuGETTTF7NA6JqqhnG4HMEWeomaGcYTfXXZBvtvZAryfjCdoTU2Su",
  "key2": "5Aj9kzrMqAroUFt9mChK6vW7k1d7x1sbhbjSQcdMc3pH4wwgMnVdg8KyXXUAAzyAxcq6aFRaohcYwg4t6DR5wjq7",
  "key3": "2K6xHwmK6SC6dMXjdxJJnyYCwv9jqvaetivEHkWiQLgx5FyRB5kQn5JZ7v14HFGdEArEZeujAhjLdQ7awEp65UA1",
  "key4": "4KMbZHMJmgtCGXikkosj25S4dtLSzEdSErq6xGRGXNwsgsR6SrvdUxGV5hJuXNHFiSB96r1yN7RDRstox1v3EnzJ",
  "key5": "63DAYBShsD7PXfYykmARvfyHBvHF7QZ4gZi96FHivJRemXb8Zb9Qp9LsjbMyaNnCPGPMTxuYssLXz8sFhsypHU59",
  "key6": "5vQMS362nkizgwQNGHnWH4ohGZ3ahAzhzcDWypep79Gw5cCQWQoTJZkosM7uqrexyVsa47j8QugbHaq3pc42P85P",
  "key7": "5CHToj9FuEYM338akg8X5X5cg3MKpJxnHjXFf1h24UmA2stqDMTTtvBtTEuEUeemPn3qStT1GzrHbnNeKdCZnern",
  "key8": "iG61k2E8xgPm8mNckKB1GdCCeFvhHcTDRgiwiimehhRdY316FfAUyXzejGZh18w2p1LCCqNYk8xycNtMQn3gyK9",
  "key9": "2zYYqPdMndk58qJnjMCVBqizpA7mBkBzEN2xDbLGBJbQ1vFNNz5TqC5g4soKQ7zTzxN3YcwjCrAaSYmkE12wQpM5",
  "key10": "32XmGieSvjTpxupVFSRcUkCZ4xL4uXnF4wGULnswwo1a63XTBXg9gyPiPQ9T8vxVFZx4hbV7esDaCckdcDmqZepe",
  "key11": "htQ7xG57Zm6C7fZ5AeQtQGk6ne2y27xAPhSVD3xr2hSmmQiocmA2pv7KenWS6nKnRkJaoqvq6kvETrA55gtPPnk",
  "key12": "WY8heEt257DyH4UkZs4m5McQxdh1XkbLRNEXPsGZQiY9tniArieNju8bMkFgEx9Xdb87uEThJvJcSfdBnRoQfuK",
  "key13": "4NcQo1SD98vNQtdathpc9mf1ViT2KneUrmUSU4YkzvkzzVgKpUu7YipyA6WRvCLtHWtkbsM173QJiqtRhnBM6iT8",
  "key14": "2A3Sk3qFsdU2C13aui5UY5UYvJDPWMrkJCKrzrxy9dfehT6yoknfmWXCSb5c6GmGJzNHo4WrQesQ1LF2qMnkhkPr",
  "key15": "517q9sJLdZ7i9kGWJMR4Qwssed2Xj2vgwq1f6RFmqyXjVUxQrGRxnAfcwcZxv1jVGZMZ3G6vXUfjXXUzEWnmJsNp",
  "key16": "3p34JwfUvLtJjmQvDvCAoo9baUazBEGozzgCC9oH9iRF3nm1L8LEmDCfFan8bjC91HWgGSngCgUVqa5LFuSk4CB2",
  "key17": "29uzGKzAPgx7TtbwPh3SHj9pQGFmVj38SuMQFaGagY7G8cLYCRAy8UfWLSNJNoaDBvCYyoD2Qfrs1mkhTRnNHWqx",
  "key18": "66MfEMprHhvPRgfVBBPjyGjpfcWPGH5gK89XfXZnDxsAkQ2HtCMupw1eY9JVYZ4N3sFC5QrhzXZjkE6fmSPY8PNu",
  "key19": "4hEWj7d5ybfYaPe6We9Yiudugh6AzdbEZktTZYr5EvTsWb4GJtHbLJNAPDkzSqKh1Vg8d9oNhztVimrPizsn2KRg",
  "key20": "5QssQudjwXXmUgk7fS7s5fu3GdV78crTCGx3Q7jPq4EcyfcD4SuVhYvE93ny41F9Pof1da7jyWEFHe63oKzsqroo",
  "key21": "LC2Lgz8uguXxzP3dizkKo6skJHDDEi5U5N9Egn5kQeLk8qay8NkpkLk9xqbeFERSTNKFTy14pE4Bxy3GhVGrq5M",
  "key22": "2MrqadFApNSK5QNeYdFypEqyf1mmmdDQKiMoYNEnPpKZXA2wTLm79NckpShs7BXvvdZi6a1iMVKbZMm7kDynH4T1",
  "key23": "2gUtV52j18YUgZC6Ft1GN5UZtGkxrjg3fcMPyzoD81JY15hgThn9Xy32h2VFNzNqhvCLGCV6nWb4SjpTpHjjk2No",
  "key24": "mvFjidCaDZNkMwzEURTSmv4hZDjqDkZ741bhyce5EbNxkB3J4q8cV1mxurVEbfmb3J4rHASppatET1oZ3Di4K8j",
  "key25": "2Nr5D4HCfwuzQwUPNdMZphFyf8kFAY7HNWvESeVFWDJuZjxMyoSXSJ7ZFPXuikcSGDJBKSeEZb1bAxM7ov6FDXJQ",
  "key26": "TZufQXWeq6J5J7azzU239MgpxAmpa5tmjERKHCQ7xEK3xiZJrpHtUuHbuDhNqhXTa8R8aPEHRKTQ4oYNzrtdzU4",
  "key27": "5RD95mCE2DZN3QGkdiT4DEVqqUk3TaRNfNNFgUwmQTVwSXjV4QNxsxnveiAcpuFtUmpFLthTU7dquSxbFerToNTU",
  "key28": "4tAu3HbqZg8iAQnj2GQvt1FiJ3uBD8p4Znd3hvTm2dz1dBjLWqN9WRP1nz8t7Cp61G9uPpeGELYvjyR3u2uepFyS",
  "key29": "4RGbv23GwJy7eZvT3a22ikzrtEq4e1sKJ2RpdQrWSrcLLwzomtAQ7bb1JnxvDAgXLLvUwcejaT6AZqegMNzorQMc",
  "key30": "u2uCeJ49PqYaNzCKg8CfyqBfkxPtAB165EcNuejout5CBeFgaHsAZhvysA2xcLrN43BTHAibHZ71rcii5JgohH4",
  "key31": "5tBou8H6XCxbKprRpeZg6KvqTvmGCpjFjx4jt1FWks7f9JBZta1GTuP3XhdvdpFrHLY9g7WUYsJfGrv2Gb3rTuYs",
  "key32": "3mCbTdoyu4YuabXbGFXXRCY9u5Q5xgjveBWk5pUxTz6FyHfvMEiz9xcvRWubRZPDY3fZqUCQPoVmJM463zrxREs1",
  "key33": "EDSeQG4kfLWxFhHCqsMtkp9sTjS1Dww9qJUKRujZQHzJjsUWZEreGv9p4MdWizMNifFB6wWqUzxD3oyEr8LnK8F",
  "key34": "32ApwnAJModWTTZcRUreXgcnhqvCaU85dM2aaTUkpBEYj95dUVCQGLpdEub7DBiUtpDdmFV4UUKJBYSFHHEBEhoX",
  "key35": "5tWr42cPgF2x7SnJk4yJ4JbjjeHCTVoN5rgV964ZerbbRaHPy144iG2XZE45E6DNb1m2u6XpWdrLUnVATWNPwiFg",
  "key36": "5guxwYYgBuiHMNR9UjhCAH6ehAuMrjj2tjQs8qMGSmcQPDgXWKhQBxtqz8TiCPb8LqnCC8otjTq3pPPgdaUvMej1",
  "key37": "4kYMNRck6wpG7kep833mDv5zYw7vw5z4FPGki2W5jptLcUNdozw947sBJPWfPyxp4KXc78TS942rqbSQudmsyU6U",
  "key38": "3Fm97Y8bFhgE6qxVF8bHBHR3xqyvudHdsdzjQhLFipyGRSLDJMdANWSpFCeVBEFGMfHGareAEjQdV6Jwxbu2CvLK",
  "key39": "912r95WxqQGMC74JqxYNdtwWjdzgcSaoALAj5AD9fZUhEhoeDo3E8WYSA47EbBwAzRJn6RctGfUuFsRTj4YXiXS",
  "key40": "3RXm5e1pBGHybbSxmmBRYyjkpoAnCewQV5vFb4Hcmg9zMiDxCT9UW6MPRmnfMCZ8MiG6CGmUo4ZdMGhHRd9eyoUb",
  "key41": "57Ko7VbUXa7G5tHRYvs7u7s1ysZV2ToR87mW27RXx6t4R4hh9iTgBduAAenjiFUuPBkHF6odFLgzf239kHkVssiy"
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
