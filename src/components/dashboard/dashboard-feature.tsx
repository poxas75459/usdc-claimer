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
    "5RgRhrYeTG1bAQLfG1AZeRExzxub3iT6nP5k26oJXyqs45RB8ej8CTaVcXyiFZr1NkGoCTcK8GWywS5o8y8kF4Zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SzRq9cGwRiaVawXPoaKicuXyprtrh6GMNnzAaAVFsHK7rdJGx1ohXpUZQhjPBeYr7gz67PYj68Z9Kd8vW5ZyLfA",
  "key1": "55Bx79hHUrm1o7W3bejERT66gJjqZ7huiS9Wcqu31TaigCYbKd6NAyjVoMJkiCTjpG8NF2xXCtaRDvd4nLKrEeMQ",
  "key2": "39VAyvLW6prcs8VEJvARw7RAMY58tCBxssonaPnAHN1nZG9F3zE64Pd7QuinPgoe8EUuMLJBJ4SWEMVXp8TnMyzu",
  "key3": "3WtcUX3J1nvUTaaBCzufnKhWzfDzguhwGHQxVwhbjqZdrPSXseuJnhGxbR5Z5V6cew9RoudYxfB7arwMr6WgYZ9R",
  "key4": "5eGb5edzJSfJa12yJgML26X4R23vZPAdxgXZLSXZ97UfN2DyhK9Q7GjSC2LLNy3bTeMedFDFYyYg8bLkMba3SYWz",
  "key5": "4rD3Wgy6yXeaEpU1ddMznSWREoDawqhF4Y6cCVvcAboqw77nHhfi2C7B1dqYrYHE5yGvccA6YLfQrTZjtSRFnZWZ",
  "key6": "3asXmaL5x5NRXHWrprTeXsXJ9ViywpHox7nUYHA2mWCWvQh5Jjvq4bd6171x8PVN1jXE66YAcCkPybdnKZPvdoK2",
  "key7": "vR6nZcSDxhhxuMtmYJsvQkbtNsvvpQJJ1DbWkioqFiRNPpPZC4tRGLadxRqKtM11aYEbzhz5iguLXPTy8uu9hVH",
  "key8": "62jLXhZDsL28Hh336v29eHoPdxKyeVETa79y9nzRceR9NZD115RRKnPgn2hoHaRbC7ULwMXQiF5Ks5FtgiKVrsm9",
  "key9": "U9xBmqA1fjUZC6KxwPQDhURqiVTTwJp74JyzNs8rpa2fr3j4JmiNq7yMjKCRLBtz94RdTmZbWnY3Z76Sxou8kKB",
  "key10": "N3SAAGAjx1rsbzordhJKuCPoacnz4uycW6pfzUeVXXZUF4DzsuNVqrs5h7KKubrTE7AVUTgRcNoEuWtfteq7qRS",
  "key11": "2MJ8w2cGK6xiT8s2N7Sw84F8tETwpvo17UCFH6jrNhR1mJMN9P4TtXFmFqmb4QsZSrPNKZbrJvtTCD1iL1qQ1rKB",
  "key12": "46HxW1mUeebFoQs1Hou86GoaRk5QT4Z9F1PQL73azEYeZXi6NPRqW9JBtYw1cb3BpcPixuukLRgPwpaSr9jPBueU",
  "key13": "52JH2XA3LumqzoGeAJ6X8f8eK23zsJm1q7AjaYELuEybPt231zoZjZ5m4b71kv3E6ezykJMnpk8e9c9fsTk32opG",
  "key14": "3E9MkkeWXwwm68FKADZhrmNSEZsVuWx1iJ5cC7iCtwDGN8hnC538Jqss95WVqqWfVb3sorVNyiB6J4H8jQMp64e",
  "key15": "2dYeF48qQaKgraTyfrnxbX7nanoPoRGGnhPpdDngyaDR5zX4AXEENtzi9WNtJ7ZXG2YUcy3eM82R9ChsnC7aF1YC",
  "key16": "3b8DePciRRaMakabqjKz7zqAiWezYvszMdcjz2iRNuJbPHLSZcEhkZyM5SR2W2YuyTT1NfEMLEjn5QqwSFuW2Sbm",
  "key17": "ySmbbcJ2jBXLzYGjiCMQ3bNciyZ3AMhd6W8RMWXeLEUedxqaAUDSAEgPYrpvb6bWAL3rRgateVTTiM5xdohZqBG",
  "key18": "5sPZa5H86iNRpeydL3wkhvXY3bw3rcSMnVCcff25GscYSszc8oiXjBz5ebmc86YNKvcsQRr3UDLAwEgXTjjEcDph",
  "key19": "3KJyBndYTkVS4PSfGHLHthheWPyfeqre5pwLkXac7VRJkfGoxp7T9yKVCkMSDf14UC1zXfM4LCKKR2LJLUdaTciF",
  "key20": "hmDbViLpn9UEoT1yD5YuTA3fJNZRsVuhnubMCRkYsR6xJZqfRtryKsfyfjSxzHEVBbx1ebusGYpBiFsLyBBxSuC",
  "key21": "5V7vi9PXufAxSgJxb2dh3WPfKmFAcEpdjdtQ93c6VQeiJKgZStJCd5yfSZaoJ1NgHfkj7jmKibj5dFy56yvz11Ub",
  "key22": "3Vcf9mRRDWUSkryJgLaiDTPhsSL6bJwy5WfQpea1QNSrvgMzyAoLSE8WhtwGWWPLSGaQWzgE9HeEMecDfDWXuEUH",
  "key23": "4Rp6rq3WapfFjJgd1GrrD9hxeEMtSFs23H5aGc2ThR6H6kGN6m9xwqSFzoWp6ZJ1nEJPCP1YtdD378gCNyFsF9mM",
  "key24": "3xRqjQcfH4mY7JieCVSjbmUEn7D8dx8bqBCusDfxkRZQWD7JnzvEZC3rnV7kMEGdHxsU3fMrCvT8EDpkdTn8QhY2",
  "key25": "3HMPBBT69gijFtgt7DUEcJxXy27xGJ7FramgSVusRWURUx3tF2XEcgApfc2WyLqiU4mXkAFPs1iX9iEmoTY67W9N",
  "key26": "3xvMNqDYvbQBfkGR78BpGCF3spTpSsGc8Axw9u194E4NHCsspzE1Jsp4Qv1fdhm8EgVXsx7LMLwVsdWm22TdSb2e",
  "key27": "3vySom5ga9L6gqNCExqKXdd2asU4yrBLbzrusqEzPxquqWzTrwBkzVYSmLuXxDiBDEsjyhrWvXeMxeedPcdvj5Md",
  "key28": "gFyv6oRceofmuhUQBz8Npk1p1aSMHbc6jFEhMGnWhHXqRJvTNA9BqDQ5pWeoB5crtpVB93S5Zd5iuLg3NsdwR8u",
  "key29": "oCip2woM15LCEqPmERJJr7LubTnVGe2bq6fePVp1ed1Lj6NZEcorN7tnobRknuZmVGUzyNzfM76pKsAEbikHYyw",
  "key30": "2vpov2kPJ7qcQsZwYUUUs6JhWpCe77EbE3JPbVXqBCh8QAR3TEdBvjAbcYyLdRWD69m1n1sgBLVmfhLAs8aopHyj",
  "key31": "5moQ6rF2mKDdPFnyZ9fNYhv7CXKHtfCwPYmUko9Cyg91BzKU3K26cL89XZq4FbzMTKZmCetQHDFzSEhD1j3ZLpX3",
  "key32": "2UExCXHthbT74nJbZjUhpPgTeexdggSncgUVGUeL2GmXPfiAauAcgSH32YwRaxSaFm7TnNcQAiKjaSFTwGsisLJe",
  "key33": "Ata98QgwJCaALXUJXXNezyFmHf6am4PCkBWSSmzQBS4x4gDLmyCCjsLSb4Hog94MWqgtivgPrkURqiLUERZQnna",
  "key34": "5NcgMH8cbdaEj3XMAsf4VtkVhmq3w35XfGTVyT2TDz2MwVxm4cG34n633yZU8NkYSZT4x5Q8KjRS9GoAoGwRMexi",
  "key35": "362NMLwNPZht2kg7KxunSDyaddskGatJrHwFsZ4hZNHEXbHuTLYGHnuMtN1JfdgeaK5AY5zJmo3YsDzMWTX7kCmG",
  "key36": "2nEo32zChwfj8hie5yJa1jJkGW5mYNT1W6KdgiAB6k59ncNiRUyArvmYfidfuAmfL84mFnp4tHGCncnT5eChmqQB",
  "key37": "65CNuuMYWDgMWGFUpTUSHgeZfGFBsKDTdVGSiigcnnYsaUez8mw4aEYeCe7m1ZaCbkkq627MtoLDLG13YnuvixJZ",
  "key38": "2CkWQfm9vx14ppo2vwEb75oceF1YcnjFVHnDY7SMM2vtAzN3pxrMHQf9ybTALyqXqB4EQc5BkQNsdqhk6hxNE3hH",
  "key39": "3G5qWB7QNMF5XTfAXPmWBegA3aNmbJcxrKsGXfpMM9wMXoEyv4X6qtopdEBYy5WFCuZXxwwBmPGuCpCMHWXguucj",
  "key40": "5xzF1FCx3bSD6hZtFoA68xxxKTqJeVXiphjk77johpRi3w38HC34MRJBv1igM2EAGANDWQpAbzWwMgW67SRsHgEE",
  "key41": "2Duv2RgVAbcYwxjUdjYUJVXD7aKqMMMFB9g21XW6iM4Bp2T95f6yYt4zAfEjPWrtufHof5NdFVYNuY97mX6FdGsM",
  "key42": "2bUcfvSG7iirWiAoW9ZssWhAMaNc4jguTvuBWYsJT45casAtP8buaZL5v9bhASbMNpPBH4V4zbk2qogsbjtwrvkf",
  "key43": "rvYz9udbDg3N95ABGWUAGDPBUnKJCe5z2MZADpMhjBntW5wHk6M9FaSP3MQkWTKGwXN4Pw7UvwMpukwa1ha9CQD",
  "key44": "5NLWXZWfyvmcqrgLPF8cUJCH6MEMeT8UNAvzBpHBkkyaQpPVJmXoxLkX1dBf46w1bssbW7sFG6igdcPp1LExdrPg",
  "key45": "Bgk8vwNoKK7s644A6czHT83R9MYbR1mT8Z87xW7Pp77xKeVwjBF5qhReDepdAtwq5iasKet2JBB9VpF28cSsKYv"
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
