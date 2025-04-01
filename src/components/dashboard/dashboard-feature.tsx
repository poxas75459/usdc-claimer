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
    "cZhUXByZqqVYLHTwphnQvubqPbYX83XkniNcLDt7A9xQWQVsbzNXvyKtHrVhGhAikkjzzdM4bFJXTizduH6ziY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dmq21ywWZ2uXf9toUhAXbSMVEqnzh9dazwNtjZMcHXTrvQjaBuFSvUyZbZ9szqbF8D6nXh9DRtuQx5tJu7QT766",
  "key1": "31zqz36SGZrfoWdjYAPys2HnnyHzcgVrb1EJe4hUSKe5mFvWxAPmdBSd3DKeYkcmHmJDHwvMqQs7gvaWDqCq6oSe",
  "key2": "5EJ6XC8hy1YhieatSgVdc8pbyat15PygYoPL3nCLdmhnFG1kkTh8Eq1X1w7jacqosMB8anwKRaUyGPxyv3NrRBrt",
  "key3": "2uBWnL6ciFNE6XYhz91URmT9hgwzjMCxNCchCChHZzsGPP5wuedb2dbjJGhTN2EUxoGH8mGYzSMuZn3muLfB1HrS",
  "key4": "5bnNwiuUtF8uRAxBGumDQxavHfUxj8gG8Mrciodxx5UNc3NnEpSgt2Sn82JSPetfUugvSmTDokxySSCbTthPXCBC",
  "key5": "4uE7aq9hTEdT6t5Z5rUfrTXwkCgXWJqkQwTgeCCvYwiCSs2XgjTznQEewzrtXqoZL5szsFdMYhLWRzffVpk5qjTN",
  "key6": "36TZrxvxXMwTbqhS5NH8wEBZfN2NnKA4SwPiAqz9pTKWu23kZsmVi93KsKES974MUPfa8ufs8MZZnrHb9GyzY4Lt",
  "key7": "2MAn24LTiawC2FPrLZq7NjGAMmWBZfSH3cqGE3RGzpmMr79JCEtiW2crhMzKZ65LMxjo9yGcDG2jxtyD67PR3rvg",
  "key8": "2UVeJ8uPCHvs8PYuT1XUrDt26Mv8GAzAeBFbFBhorajU7hx5k1WhsC7FXFCECKT9fQEb5SGZLPjdrjwpfsB5o2q7",
  "key9": "4gdnknUsHja6frKt7GBqZ6DC4vcRHxQPB2txrivDdAWMjKnFBudegvq2DBe33E9CDyii74G4Y6PnG7wxyYF8h4Pd",
  "key10": "58p4yJohXuf5haREZjpGFUJWv2vHmwFzznYUGhNWe9TRscYwHa6HcELkyWVoU5Uhp6tgbVQ1wqtdBSDEkSx9dADU",
  "key11": "3fHsF725oZJAPRkhi9WwrzcY1vftdACmz5wSrve6RgnFc26UBpUC5i7yUmbSQaTVAESgYrvGtSgpwyMF9kdit2G8",
  "key12": "5ELbfbsnSBSvNkE1bbDhdCbvzWZCB6tHPseZ6s94tgBr5pogw1MDSadKwgbjd9Zsqb3Bp9qKUzqwdvj4imTWi5SF",
  "key13": "nCtdNGe6924ZXoQgqEjV5itqWXpD37NzTEfknVW6R1nWFT1MP3yzEhbJwam8tGD1sZ1EpK58DW51kQ3Tgvt7Jgn",
  "key14": "23PMn9aTiC5xBJYjWM389YVeyPZgXtqiBhXdNQ2JC6As1LmR1bNAcDNAEMa6mER3oZKyW51juD6A5f6iiAW5JjsV",
  "key15": "5cqTtbz9HFuRavVwWLMmGRwawAWEL41aAJz1N1H3UHGsdpBd2pxfTju3LvNx3KtA4mBLUvxaZzBBoMVtfuCACLm5",
  "key16": "2QBgn4QwN93rnCKzndpeYRUmi19iTUFkytL7Ac2svTfReVzt1xzCrs2U5gx1AADtfkiFqqDDtftBnc1JoHNGELZQ",
  "key17": "59RQCNLvbKw52TZ9XTTjUu1xQfhuVsefr5a2vP7QHbf14wC3491UeFYbckXtm8RhdnGrSiAsYbWJTm9kQweYytWb",
  "key18": "BLGkRQ21oraZHUkTVsS87rNPvh9z6zhwPZzuCSybuMoHCcFbmfGwk2YiGzKNzxVfjJuiSogR51zwpoRPwZSZjLu",
  "key19": "55aVaTiFZ2pbjQozmGLVwBrrSH1edcdea4pLJsMGswaN3dkJ1jXdBwbUEZ7dy1N43v1bop4NXwgK6yBj3v7Gotjq",
  "key20": "5r18PfBPZwJbCdg2uLtaZEz5cqumrx2Ray2M6S6eviYBnmHixo2Roz437C9D1YgdZRKbz7UeXhjoD99T8A2nXiQV",
  "key21": "5Zm8gRLx1eRMua2vbMW64gjpKmX7WGFZDQPCfpVN5NJPapsp9pSJBHxqkpnydrya9zc4npkGD2YhGN9yXNUPiwtS",
  "key22": "3qRfrVnS1SqJhmt1p4FBARFufJox51HQmpw4dg9FWGX1mbxxLUYoBHZ6BvnTdFX1J9XPBdHcRJUorytKbNbnUFNq",
  "key23": "4dLsrW4pNXCGSBrb83dFvc7tVfbyUVT8cgNsC9dh2WaWzPRvM2MGg4mzfCRRAxna8KLSZuxmkX52uTFvrMq6pJw2",
  "key24": "45xo22mozz4cfACEnLNQJN4rckkdussqkd6JTtkSDfvTefHQQVTDZtk96vtunmfRkY63VezXvR18MUrTUDgvT9Ha",
  "key25": "4hU6HNKDTDiqrHaqXsKYoe2yjE4brPSqWnUzynDMTYSocNAamhU4WFYete46F6AMnbf8Zoq5Wp8TkaPRcogC2NkN",
  "key26": "29qFJp8z2D6c7YkKTAiH65Db6j7qYpqMAhiA7n16i5NjU9iMNb6jCgz9ieso5nueuyAtjiAsjNQMcxqDBTr3kT4K",
  "key27": "4YJQu3X2LG9qEQ5PS1oVr9J63Kd6jtETyXtQ8C6jJgG429VBspZdh9DX99WaqzAR65R2h6abXNexzFdTD97D51CG",
  "key28": "en9M9oYagxFUnDciEgLDsvjGaVrrgsdVnSP9EwSJgvTtP6zfpNGxkQuvV2vjWFdEq8m4aQ5BoXDUhi6csAoXzfz",
  "key29": "4c77dPAtYqwByoEDvMjk29FLHDPrUewzKcySrgiMQ1YoeZ6Mw3rrx1cHXhJcpX6KgiQDhJ78HC6tSz2PJbdSTBE4",
  "key30": "cFSPgiRNPqHLFoy9gXhTVbx85DCFAje6PAod2y5JZZSH55XsZMtwoedvQuJCoz4YwEJDgbbEs3a6zbAe1deCMZ9",
  "key31": "sox3Y2aidVg33ayjzcsr4dZqtTRDeFfnk9TMiTfFbA8x159o1ogKPxXneAx3QK2wUPb1AKnEYTQNJ7BGKkVL1eB",
  "key32": "44ioU2dhXEFsNMf4Mn6GmvVvyKerWh1TgZHCRDkFQjCSeE99rGbmMRsDrzS3f6LSLN9ZXPxUCj3TvNVjL5bmCWAL",
  "key33": "qJkdzyXZFHEo3Lv6iJ7b6RvcJ5KvaNYkQUEZXRxVuP3RJimnhPqH3PXvdZJqdcyf29HqZ7vptfRz8zBgcHinrZ6",
  "key34": "uXcsEKNvVFs3XxvdNjKbTmTgGtY1JvVY1eBCnuuijfMtSfJzqpPk5VufEFPtkV6jzewCPK2cxYbkYZfLfBbS5LG",
  "key35": "2RXCj3dankHeL5GK9BdRRU1TwkkifjE5DWfQqKcu6BaCWNw5uwmJfh8gKRbDcxjhc5GDCjFeoaa8YiUfTQK1xATL",
  "key36": "BjeDh5GTmG2VMaNN7ETXZ2t9jrfmjEuihvSodQ8G9EvCWX7pHpZpee2tfeKbMeEAEZih284pCnWeLMqKoa7tZrC",
  "key37": "QodCmoRTLoA8iCskaAKGoiEfEyioFd6ULMrENy9UVdHhP2djyTqru5KZDuLwoCWijkXaAmhcLRMTuZosaKNm6nr",
  "key38": "4sBXPRGDmbwH4nFfh32nmaKXAMxjRVxFcVi9pY1LTXYkMoehVHTM5enZG1CxkJYJyg8i6qTv4bqcQteoXMTkCbJc",
  "key39": "2mWjAT4HaenWvJ91vWckEfae9VM4fq1mLYkcKB9cJ3wKPFmWuo2NnpfjvN5SnkGZD54cxR1Ud7eznnugRSFWAEBt",
  "key40": "4JSJgQ95NHBFedYsuhaVo57E7jEwBkx2qUMMdqzuXGrEyanpmaPJzAGmqzUHX8eKYR3VgnLMwEayFoaiAihEeQhD",
  "key41": "ZfiGLSgYcP3xHSUQcwRtZqVSR2qftnv4GBkPShUqyR2N4cQA2kG4KVrXaYo7Qy1ZawSkA5iFW5G5ctZyYMj3hpn",
  "key42": "zpJRncDaZWXVSrBvqbHkohEY3vi7Mri8VYhcxB1Acx9VbJCgUNqyVmQ6nxx6qQE95c3sDSreF7yqDFMco2CcGui",
  "key43": "2ydQiD26XwmTtRdYQ4CtiC8rsfmMNdA7SNwcAPs8peoKBYWg22VEVmXAG7MYwNsrtk9ChH4AQc9w33cctRdzJvAW",
  "key44": "31zEQfDTsGNTCoEtjwFoicDPiezho3qQGNGSiaCyzXMhwv2HgGhQzKvSsKa6NhepYQdp6TkQ556nEgCXye6XsiBw",
  "key45": "5C6NHU5QgQpgB2dDqum7fSNHNQYDgYQDGtHnWbEfuYApRZ4hoJAEJN6dCfpn8aN17yhQkJ26YRffLEEUNbSk212T",
  "key46": "dchEoCr3dK95tokpND8b8fWXhsjL9MSP62FR6Ra7YYCTD7UZ7NTjXuwtvT4KBAbyvPcUN6gdMYviBSRQAkLAWWe",
  "key47": "32JqqqshTX9SJ5PG7due4hNGyYckHjQFfCKYDWq5pW8sggRNkyiqAxcxQHVpYiuyuMoVahC8cm9LEqsppZJauP9i",
  "key48": "ZiB1hm41ZGXzrJFscbVc3DEZuDL33BM3jAtfCJcTrN3M96i6mi93XXdo5ByHttDkjWpr2sRjZivEpm94LZaNMX6"
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
