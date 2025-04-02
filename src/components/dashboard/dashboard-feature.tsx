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
    "45cHz9UsLJ9VGskzFPFA3wBdzCYQE1fdB2pYM7ruXb6dzmWZLKAn2qVjTwPU3NyfoyXtvdRqYiYVATvWueYavhMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ijVagmfxMkHCdtjksUk5cJzY7UefG1BWPi1iTUNv5FXY3wnvnEmWHWic65JC7cSiSbdxgWy1n9kbJxXipXZFQDW",
  "key1": "4w9YSz12B8NsuBswD6o9o7c99bfAfMpLojNavYykpSFQWJtFHupSRNT3uAkEmk51Fzft1LHsKrfcpEpAoPpmXiDf",
  "key2": "5VTRQCiyxoqq7nHuvFCWKDy4FPsp9mdpFumcZeqsKi7nSQnWNuiRqBXdJ6mqJhfos2N85hHvS1HwCt1XvgbdeKVx",
  "key3": "4dqjmW5J2YiN2mhSWqBSqgcnpd6SQ6LKYXAKVLRD3nHdhTvBeULE5pZciffEcjutE8dT5ihv12TvyRTcXkZWqMnM",
  "key4": "5JCtxcSVBfyW5EYCtXXBULoTAh2JNmiwrA5FpBQVGEEhpKp1qKUkHwJBSK22TPBZpG5p5K8AsGLsJTBaiFeXXSXR",
  "key5": "5YiaMMC5CnwGRRJCXDgFyMFqcaE2BXczQgGGB3VAzt3TBughXbAkGzza7nP6iZSEa47eorKzhSbx8nSKHadyasTm",
  "key6": "3L6wPQhdT3HBgfaknjWWussouPK3DEqpMiAcCZQENhBZtsjx6sYNJ4cbQxPPNU26yXG1hX9VmutA28MkepdmfqL7",
  "key7": "3QMYAA4Kr6ACWoAEPc79rqKTdaGuq9N5qNTCc5Tcd5CuNgrYUbAJgZupY648yV7gfNPSD5CRvJ5zFNWsx148EQT9",
  "key8": "sj33ipr5V7WnFghkmSSBkXFeu4XHpa4PSYoXhYpxaRJfD17TDNJGLcGM5Q4kk1rX8xb6w6cWgxhzitYrkhSKDWE",
  "key9": "47oiPQTNqS4BDhKcRWdcptv28zuYPGw1E4tNYN2E3Tf8oimMnNzKE2JFJQ5s4XhLin8mLuaQZmBu1wZcSuqmw3bj",
  "key10": "2NwPhvx7YXYR5eV1zaX4tb6Vf4d2yUGALRr3Wogzt31nD3M7tnrV2hUJxjV2cdQFx1fufBjs36zVGUNwDQQe9HJh",
  "key11": "3iAf7WyRYq1BZtD2T6bSPJg8q1odsjmnWZf8CRnzWHqhvo2wCzNdq9GfqD7a8Ncfngjkd2NRuMjCKK8yevkFKyrm",
  "key12": "4nw58USXtMezBgjfqvFgMzVTfumgJkaEUBCEQJpceVns7kePi9pPkuPUjmdKLuBYrWdt1bw66yLFsJVpUipRKuod",
  "key13": "2iKA7WQphbFFXgaAafaifyroUJxkEjvwP5BaFMCzcsZ8ZAhx4ihgDQiEmNPyqHhMYeq5nftmr2mKCSQLrkhR9oha",
  "key14": "4nj9a3cQ9SiupRWsmJLEg48MmLBoVSNqS7iaCTfE2FjsByrx3fEfKWUpp4Zszj5BWA82q4MHfEA4hrhvHZ2D9AUA",
  "key15": "5MRo2hZNNwjmDsKPzF9qBaG4iZbTEmKE3wxC7FJ7vD6xYKqs5ZVBvwiuCxk6FMaEzPdwNC59RM6EwCrG46kqmFHb",
  "key16": "MtotLPHQX7D3bxVUWrxZZ8R5RgzTBtrUWd1sf5fc7gSyxc9C14dAEKYtpE7Mx1N9qpmN4n2Xn1kVLDz46sTEVxG",
  "key17": "5B7GwtJTRLGuXKhaoycDmV4uEC8qHNDDqQzSLHR8dpXjDbf8nYWkZrg1R3c93tWJcspZoykQ5CuHxaDr8xPcojZ",
  "key18": "64d9ZtQnjoVGoHsHvC8jNkcFsGfJKRhQy969UUdjgyr3eLbgKtRso7SKqW8cswB3meaG2mgHBhhkbTNdUcNoQXgV",
  "key19": "4qB4rVzhwkDs4qQqDkXEZ89oLFtSerwuKguaVFTM5NrvBtPYgNzFPGRHAWAkGCTVCVY5Pg62cE2G6YvspewEq5r7",
  "key20": "28x7cJJio7fAfXnhW2qwLXn5gempvhnYHs7F6j3d7nc3yqQUbiPZquahKSQRke7hyjpYga7msrx8JZYgEAdXUwRx",
  "key21": "2RacHVKFaQPNQbiVvsfMqbzVJTxm6jwxHDBBeQcfGktqgwkwK1so15KrAtLxQ9FZtwX6T9YPW1BAMZh4p5o2cTaG",
  "key22": "2Y66LCXYJdw5ZhUNAcHX3XsocKTi544roQzJvbePLpKipreKCLLNU5rL9aVE8Lr7qXFoCoACGABNY71ZtBitA3tn",
  "key23": "4fBVTekdFRZgijGpm4ssi4ip38LtRgFd3DbZVZc19wAJBnwxMcjgghhXFXB1DBApF69xokcDnjZKCyiWWGZBiD8E",
  "key24": "2EsVUESAvE15EUzyQ5K8Y1kJDppemSCvGAqTAJ4k3g5Bqb4AtXEEed82tXFCtQMhLPn43LnQ5EpkCckXby2TqKvJ",
  "key25": "26Ky9vBVddF3CHhPk1wFp3s4CzKbxyZvmMtZDQdbCx7xhfewBKBHdJEep8VioCzLTuHZc3EusmKi5yTu1kos91az",
  "key26": "knNs9Fm4fnfekK2bEBudjzb4SMwCYNsaR8HNmyL5vYRMTqe3YbC4o2U9srB4qwDLVpnAzTacyYq4cdH2r7b8DZz",
  "key27": "36eznTnLmvmGHLz4sdKiLMM7CfFcWuc5UJWnxQeZKvyEJSs7zAkuxKVWkQetVShQjx5fjbmfS1tMpsF3ahcNEqHC",
  "key28": "3BwLK51sUxJGSF9Lh9m833ndTpDYxtLQVYj6Ejgg5mFTzP3mYdCKWifKpJwbUdCJNxVUqJgd63PXrshdB3KiVGNM",
  "key29": "xajK6yDq3sbCT36HT5T3pgFLvZxgPWGuFiiYF8hNa6t7n62CiwUyTy2trHeG8W8NSEQg8ik2CMBKvntu5NBuw7j",
  "key30": "5gwFSoDnypsjtaRy5Sh9QrXjWL9VNrEPv8pRwoCjtPzVNxzViJGz6gHZRdNGLqVqjrZiVbSa2d6U7JJCEktKQy5V",
  "key31": "2CPfEGtHtAvUTip7PQZAUzSajceQ4p5YxVuw2y7NBHQv4bAmZCMnWtGRuHS3rHbfdjVM5KqaYymcH9t2cgUCMsMe",
  "key32": "2RQ6L4kLp2eXk8c8AzJYNZ3pTra6NTLghLEjc9z1nbS9skPeSxWXrMaXBffcct7XTbvqaTGxgMc5tUMDGb11yD5K",
  "key33": "22akyHqwijbdS7wPTinoiK6xU6PSBxDES8nsZ3svQPr7VyFm1tVBG6dfE43uTJHXND4NGASMxnSqJtQdjRgNLCHt",
  "key34": "3GTnvPuUHiUGYRunWo3dpnSJSKdNGnsWU8EY5U6NJKPJLrdmk1T4XARtmJ6rESuspy2VdW4ZgxSf4SWNcdPjuQcy",
  "key35": "2jGKf9jcqnhcFjpmXvioYkHZhDVPcAV2h9jeHpZUTvabnrLo8X3yy8N8pKL6iUGKCF81TXim86dawSBvjQu7EyYk",
  "key36": "3WQQYEnSzxUnmCWZarGXb3qxzfrpaesqcwbyLfkNhC2LfmRrE9jqXof1PGd7HjPQuLmE1BK1mGCgTgjXn8eYZ5wa",
  "key37": "5MeTi8DXkqPzZqZjQRteSAMcwC2JkFeaTs3VcB4ej8RhT8YXJTLmT6YhWis9cGPekh8UsHhsAZRzpXU2RWQmX2t7",
  "key38": "237WEwjLr4QsXfudeQoP7ow9aNyXN7yk2gW5HBXPPg2LAjraZbN12dfgboc5wthfCQ7DCJ5RY7eUwp5rQmfriLDu",
  "key39": "61dnvxXKYaGBNErYA1UvXEL48h2XvjjAhGhD9kELymZqYdVhbFBeMNPnF1QsVWyz4C3dM8AkmaL2bvXbu9mBbDyS",
  "key40": "5TAJMB2LEWsX1gooR72hGZvmoeirEAjzqkKqzHN5rkn53nE1a9bTv28u68J6h34qpL9aM12QgfWPiXp7rxmHHZqd"
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
