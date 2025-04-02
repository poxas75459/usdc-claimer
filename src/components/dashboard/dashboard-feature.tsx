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
    "S8WBqWDyNPbdHs7iPoGZ3erDCPjMMLfd2s4gSqtTeh6Cf52uw9ZwsDH37gjrEYFCWgHZhrpuxQCaAd8pcYgmz91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aCdocuJArKMMFqJm1sHsBurkoELQu3iWgZYUcUzo9vFxe1Eouyw6SaZZG6yQRvxtrH2QTauXRgdUrz1GQg6jwdA",
  "key1": "4AzvmCh62cdjVvCPMunxsCsAXotcqiCLHEQie45RsR8hHHYsodRVUcUnfPcZuMViLGN18pWzV2kPh8CiTv6XNoHD",
  "key2": "5twEotcvuxfDayzY7f7ixsQijoJr5BwBCfpc1sxiYTXhRn5kbgLyfjrx4B9NtRaero6i588KfCxRDjNCUorirpb1",
  "key3": "34Hcw8fZMTHt7z1TmNuy8vUiM3kRgWzXQf9kjXUSroe8htWzeovF6bBvEK9kkX6K8CrazAEoYqBL5zUYxULR12YK",
  "key4": "3YJgo2Wi5LTwpG6MGjB1fpBDXZfZtYPcmSqeLRvbKzCBCUG1W1BD7eQkrkjML5A5Z1QQnMcfWAEFNL7JXDndQSzG",
  "key5": "4r918eVK6fVdF9BS5UBfdLToDmqHmUiPW13Tdq4GUEBRNRe44D3iBTVeyn27QHGYTaZqcZmqai9ahEm8DWKTWSQm",
  "key6": "4H88J1wSSXPwXYrHoQtbR3H9xL3UFSitUvEEX6L2wspyTLFcJShoiKR814PakK9DDgJFQDDzDq7hFQ4L9pSZbg6Q",
  "key7": "3Z4rte4u3CrVjRq2YHh1yHxmgDXkwCpS159rAVHU8tfsvQAkazm3baJ8i8EX1WgeC1rM3uowHAu92NhvCxsE1RMs",
  "key8": "4yUqVBEd5e4tEFuSdYurcudXshQ5P8JAy6gR4Lus9U6sAo6wBTYBNe5mfwaARqvAKouRhJQrdEnK9qERdo3o4yfZ",
  "key9": "4ukQWuigBeRMYLnFkWc5Aj6v2sbuKP8UeDrAX983Yz7N8t9TNxaAY9ZAmzzY48aodeHzL4nBsttNpyWqSnPaehdY",
  "key10": "2A3VBQWomhUYYJDanKhG9Hz4GsnoFiZmihcSjmCqoCuws9mCEqWXbwqsZ251Syz2A11XUBq3QYv3ZdjQPAoupPNx",
  "key11": "5wiMiDGk5zUTtNh2Xoh5KKLzEFfNmJEsLfbnYbqYduXTqWo5EnNCzL3qfAg1vHFYKw1pAgZ1DNbqV5KgnXSurRaY",
  "key12": "4zpvZogy7APfpYBgEnpKCxvWu4DrBtWF5JsZ7sVAhqs1SGyVHQWXAS3ipXJUJBzgkGkiS34KzwHQboSHCdUSTtKV",
  "key13": "7FbUVWKzv26tEYTz1nswbpYAVWKi5BuLBLB8p1nvMTPzW1Y5WCm2fJh4eZb8b2wrqbFWpTg8yLz3cEv3HnRSpGD",
  "key14": "2p4bWzRixmnsRC2ag6ecegQE7a9Pyoj1wWmyoMzdEtJaDNLeWfyyz3vnsqNGWBvMxBKZ7gAve2ARVNcA8PxW1v9f",
  "key15": "2CvoPLZEXYXZrZfQme7GBVUQhmwJpZRCnKxsLhXNVVnnR72M9afff4ejZMAUdFTzV99uPRNn4P7F3GvtzRE5dy4f",
  "key16": "4JSonnD65xoceEapRCsVLJ1JDgW97xUSijMXRpDKxjQTuH1HYBM7JnF9GWS4aEsu96ZbGKf4aGAGm3LMZ4JAunf6",
  "key17": "5fMzg6nnFhHfDipV24JPKz7w6BTBQYjSes4Mx2AFB5xCbR6ykKX918o9UeHAkznuU8KpxumbHsHMAkWuLg4YPXi1",
  "key18": "xbJzTSX5uBBFuADzB84M33y22SAMiYCGqCpeYBjUnsz4p8uGeCM7nWZexPrtKVamndWWvmWTKDGLS9TP3EDjint",
  "key19": "5sLU5GoLk7WAKo1EtbCyk4v51qkRfxCZ2DWDRL9RWxDmUnYpwFipcDws5RToee5GREsyasfvqEhBBpTbX4BQrcnc",
  "key20": "v1TbYknLmmQZDakFJT47YazrsuBKS3FP2Goduy3kiqdsCJdtPDx8rXrNXaVKR1xE82dee1HZqDR1TY5r1gPxztz",
  "key21": "4SDc9imUVxfdvAfNoP6L6WkgsbrRKtBJi9FpsLMpWBnMqCkTZvWy2dqW316TPhwkbeANtHQWUqMw9M41TDW7Qd5H",
  "key22": "5ZnXLKfFsPFHTa9RzSqbS3AsrPZScRFwE3JNUWESnYRX8Pdqdg1gjr7sKoskgmHpzZU4kqyAQWZ3zaqz5w4VrHGs",
  "key23": "2yUSiiEz1U3zL6fKAGvH6aQnWtYSdWt7n4M2nzRsWWEGQUazc2yzd6QCfEyHTqyVXciYXDbrHc2qP2zioSzP7d7S",
  "key24": "3KtQXei7C17wA7fA2bWFFFmmv2xTG3j2gayn88LpGniarquFRrmCYoMwftxk8k5i5Wy7QMhsVdMmEghEPwWVdjoi",
  "key25": "25QukCo3dSLUmKfhyoZaE6eRk3G6WEAqsYip6opAwGETm29avwaNdf2SKpVShc8mHwbVSEd2cp1Z7FsqgY1U6sDK",
  "key26": "ySwJbSwXQUnbEprtoexdKRKpmkRSZEDtxbyFM6q9tPAYo2WawYYbBkgYYrqcESRYXEYshFDTrY51oDZxXeLkETa",
  "key27": "3mNb7Qp8aUzUda34z5Dsistxq1TEzrv1GLk9swV7Lqat8d3RyytcM3uKL5SemsnetyY4pajscXR4G6jbcQkSsgJ3",
  "key28": "4VYHqzLnX6hrnBxsiGPZa4U93qYzyrpt5cwrhowB5UK4YvyCaYKPYTE3ZcJGQJTwMTzWq91GdbYcEoYBcPpV6Wbe",
  "key29": "4S3eqo2t7n5Fs8QcUiizQdrAX5TgzS3bFUNfKZSP46HN8SKdvTMfxnNaXqvcHMRG7judp7uKd8AnQ8yMyyoWp8rD",
  "key30": "61nPg9YotLH2JBfN3uEvyc5rz375Lh1G1gae9VCSFUWicaz3rLCYpaz765wn1LmwZHC3eBL8JtAHEEt9V3oiZKGK",
  "key31": "5Mn3fMZbMyHkqfvCNiFiZ9JnzExCkTJXYbqPaWzUEy1CgUofB3Ajzbyia1bKfSnvezfrZWWp6DU5KZqSXJySEyZC",
  "key32": "43cnih8BBjmtZa2brXceRDt9Zx3atRTejLNFicPs52XTc6iLygjJ2t1ME9t6ASu6REnciVVabG3DLjVenbSfbjzL",
  "key33": "8YEjnk2AG8ukawyruWckC6CbTXM1o63T1ZMEfuQW4Py5mW9JNKgLdtVHxHZnp9u5f7SrFuq1eMbzkvsU8ceCfs8",
  "key34": "4eWPivUH5MMsRw49fkMdGMXg9ArwkTsDbJ1YnafuZNvdfRqGYiTej8FiCNWkaf2SVjvvrirNGh38b5XLmJDCCee",
  "key35": "4RyNomXucDhJWhDeU1fcnXKiRhn8MaGQBGdhfPBcoS47x7oLqdQdujPni1QLrsncRrkH5H5VQPTzhmohTtcD4CLY",
  "key36": "SBt59fFbxZeKQnkAcoB96FCc2AWZ6hnTXKicr1e2S2d9LSAHdmtuU9H3EAYfr3mmsoz7YRA83KFQCXGcAjjmsan",
  "key37": "45gY1AVDbyi8YDXhZM8NpAYvmsYFtmp6Mc7KVWxiyahGf4o7e6xq5jCg5SGSX3XmFw8Y2ruZVmvVK1RkCH24bZXG",
  "key38": "4ZS9kRFdvnMwXNbyoxRjeEDqoDZqrUavgUybVercc5YqBzCNKEEp4DR7HqMk7B6bEhfR1aJZNtpdEKRcAEXmigxW",
  "key39": "51qpg9DkZ7raEWbSmVfJ8Mt17rhtUK5QmKAWipnivJUu5FhEmKTUJmDR8Xw9qnGA9aJBCjWTx8cNsH5Bxp75YEU3",
  "key40": "NNDD8KSZEpdjEmuEhCuqvxxYSz5Jr4EC6pGWmKVxbYqi1fE6J2iXx5dfPRP9bdBw2EqDoW5SKCfTowTKmuE9tdf",
  "key41": "3HEY6XvizMqNxFvENu9tFvnfXpWWKdvPg7VWzeTqgNDmPrJ2zR3y1pJoUmPA44rXt1Wyjm8prEVYvksZ6sT5zNah",
  "key42": "gwKRzTF4Tz9R8ufY9aX84Abe6LjCYU7ci5nRu1gBsWJYWhuo26MScmHpADdkALgoeXr6occi3JfjWiX6SAvdJRL",
  "key43": "51yS65A7XfqJBicqzYEa2UjxXyVDPHxsjqd1ErxJ2QYsU7xadTCNZc2oY514Y92woEiwcDjZ6BkzHwqRerYT1byU",
  "key44": "2QqGS15Zw5YLNmTvGn3jjJUcUS9SoJQyzju1ZMZe2tac8mjEGAirJh6BcX6faLdxf68TFKaJEVSw5CZQzyohXZYU",
  "key45": "5cFefyDpJst8FYtEecMSMXXArNdbnWsVN459RG7v8SWRdmBNBnHqCkTJg64UPteNzaHtSLh6Th6MZW4feKKBe4Qo"
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
