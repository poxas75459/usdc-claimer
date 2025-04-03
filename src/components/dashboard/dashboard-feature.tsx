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
    "2JHC8bFs4mr4JD4W8mfimhdaUTqb2FeZhKm7k6HxCZwdFzzeTnhA1VqJv1raai9s473Uks3TSGb9vjEpPHPiJEuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YZdtNbQ83Eet1AxkKguGPop7cvdTyJiTVT9NaMvd3aJBoQFG7YVpbrHKowEr451TKJgEqDsQG1BnMnSz3Jm7TUJ",
  "key1": "4aeqPi6Y7Uv38966wrWRMcDRN6wVSVoVEqp8zgzmpm69hhGtWw8NzndDbMdLjqzMDdd9fVkBxoA5G83bbFHBYvyJ",
  "key2": "5X2q2fPHsQV17tdfVjAmwc72CfuLSVEJhNc3AuRVgRtWH55SNDJRhxMiFd14KxCXoAJG28nKKWfgGfBqEmNZL24W",
  "key3": "GE8LFwkweeWv3gez7fk7Dz9P9j75C1XKSE9MLW4tFtQM4JBAKSQsLcG559fs383MCpGiUu7bNdYuYRYfKFMgGrC",
  "key4": "2iuUn5c1n9Y97Q1QAETAYsxPJ93ok4bW467bGpLMqXp2okioMmFJqmTaKPcprC5pVK2azX1rgkrbeVRxXHQaQmcX",
  "key5": "5yGq4LJmYMJHgx5uW8tCzpyVtupZtr2dsrw4peKC2zxRex4egvvGs29kJXmnXSZwN1Rkn4k2bhTVJbTP5jhQah4U",
  "key6": "gTjW9RopYRzuRQCsWZ2tXa2Enk5HenBkGCwvqM8sRrtp7wPfKyvpfCoaGs83MVwm9XLr6FNkycCqJ3N83ionrRs",
  "key7": "3RSCfPN2RhG7SSQouo6mKMkehNiukhrMdnAzfBLyXSio5SYHzuY66FAXHvnTHZRXBdS9Bdihtx4veYEgdVf2vv47",
  "key8": "edaQAQ9aRFF5HkmqnTXcvTxfWePHmUHMfvX1UVabiLPBQirXbaZwtqV9REyb48MW6FFU1wAYS547Hmd7qjpmjkD",
  "key9": "4UxU3wQFMQSWPdRxTDtDL1xHSosgnMKtEhdQsdEk3TfQjyQXnpXf3RR35g3ZrbFELQyPfWKb5kinN3F21sxMiC6n",
  "key10": "4DEEfDdtAETvkJwMQVhMhS3JxMhxc8wnUohs7ktayvfDw2gUFaGBjA8GzuMVkbxCZ1KigwTrE2ZMifM9Pu741vWM",
  "key11": "jvoS8akFvaNZeGAKpphbwCXn1LvHrbeYe9f1DC2cQUBcaC1SuY4a1ithPTQ4hDqgDUs8PoM3JYmiW1TDHqo7fyo",
  "key12": "3Ph24346Vzq85bSnCS3HFMx5s7ByA39gd2SpHmtytTBvpdBPUwMyraKipBb7sAj8b7j6b8nfXiouR9CuEhSfTFeN",
  "key13": "4B7bAY6SRAH7zDfiyfUttrz2a5X8xohKyEnEpq7zeqqEFtNmYwbcU5x1romAopchzFKiGiAsyNxSyY66idNX7rFZ",
  "key14": "4pJtGBCg6kPVbCrPnst7mKTHuCM5Q7zAHkf5WoP2W831AewcP6ArbiaiV77XEh2hEaYDVWNJHMrBbgQeD9PUhqWj",
  "key15": "54MBtmdfWdy8iSdGJb1bYzfbeBshyy7adbKcE7Q45Yt6wpkhZWRb2phB7QJbs4LZhU2RTyBVy9eqhzJMsDScEbRC",
  "key16": "5Kjnp2g2nvqf4XN21C3wRmFATTXakNCxN17CEzsLovUQY6haezLZxbMPz2MhRC17WYscsa26nTBpLvJmwJdNRu8c",
  "key17": "5SJFshHhm4NS7fSkBSSicQigxsVLpA69tiJdiz4W3Y831UVJaeYemC2z5QAC9hb4wkhEEa9n5DxDdDhgjG1UVfjP",
  "key18": "3KL4Hn11XFxZHmPLfhttAtbaBYDcLAULs5BTtoFC88y87wdfEuMkh4oeQSumut9ysmRvu99Az9CJJUQVHFfJifGq",
  "key19": "3YhTVb9Y6cn9CPZL32WCapwFoMqFhAZLBYiR2JUPQFCv9oAt4GEFVhMV9ZkUnFd9ZjWzHLa8x4Q2id5aF6kaZnF9",
  "key20": "4HmGZyYU83sE7Nyia3J174rBvDqbPu5JWA1C7ZEk6iQ2HXMJpa1ip9yYXUeNKLvN7KQybMRdqkKddRxcLkzXaQsj",
  "key21": "5BZiB8ELiBXS4KfJMgxiq9BGkVPtt2ECgmQic5ednDA3oFZ6LuUaeLyX4abVq6AE45NdBVUyL2Nt5bPKvFkXZ9xm",
  "key22": "5BZpcpRJtYNQNxZQHJ3Z6WySyaftAoksAV5xikc6mYnWd58JnijvF7m8zb3jZvXFSGNEsxbXpUSPjNCTpjubei4W",
  "key23": "46upW48XkoDygB3NRWmyKDHPEHKeUzDiN4ssDWghj3t8CYLmc5Jr4bsP7qa1HSYzrUZASgf4TNDU9GokyosfHZPD",
  "key24": "N99S6DuLf5AC7PJTAt5xjhes32NHdg1fGM3nvaYXLadtdMAF1zS5yMfitRhffRwnaN5C7AREDLCQjRm3rJXTWEm",
  "key25": "BxFaCuWWutPXccPTtvL5JpbskL5FohicoDhSoyfabbMcqcKqaTUBM9NPWNsD1DV4mHUHaBQUrnkcJ994fu96Cks",
  "key26": "3Q46EqUGtucS1nFU2HkKhcbz8eXEXGyaijThfnNeLtudLrbDXrrGXsdTUTnVL9EbrLAnr3jo1gQp3fdGw8dzPg6p",
  "key27": "Xo8QSG2VTPyPXd3vJgmkvQkB26aNydcqhvmd4jdCfKLDVMsBPpU2jHG131JY2qV9nnzBetH9H3HNiZFKxfvruou",
  "key28": "2Y9HmfhdzwPqVgD3L8ATqbPbwRUCYA4WhZMA9E1xCJrwrHgrnwvVUifkiJxRuE98od5bTX3uWMPidGgYBVMemhg9",
  "key29": "3cUKyBbNkAMKAJKSrmgA3wj5GfLxYVBGJdx6TBN9g3q8LQcf7oY5jdUFEkiLq4Dfn34F6EK5n4QfUsh5izaoHgZa",
  "key30": "rw3hdYELbeVNxeLP2TuQSnUZu23FTDHm42v8btQTqbGMEMsEYAZou6G5niqimSUwFb8BPWNKZ1PAogpm7juCMQt",
  "key31": "5W5kaTBgHGjCvuR6yCKh3hUQMiD7o7XxsgshTJjS5jaydPsP3c6nsqEqYErfvchZ1L69iXc83DW937tn967rx15P",
  "key32": "KePyUEjSBZ9LFgSBxrCN6tiSw51cr155SjMRTMX6nmXNauwZagSDvvxYoaxLgiYRBpgcdm6XjrJ6whc1ynYMTzU",
  "key33": "55Rp5x6h5JaWvvCCVY6SmseuCD6HQxAGF3GohM6rVHYCAD8rKSxsnceoaWdV22Ef8EPpUwPGRaJagWZgGyWc6Pmt",
  "key34": "2L94Dk6y8M7NqWdq2ATVWmhevGKbgP6hUgYsnBKnsA4VifD636KGbN8YrtiwC3ir6XtTdZsErhKfMzu6k8FPLEB5",
  "key35": "2BHtpzsCkJ1nJSruaUGEMgbKHjoDwBA5QTfsmSLNhjSEKudT41uDYG7LMqwd7Hsc5bsApqEUo5MdwrxZUfPa9Ev",
  "key36": "MzXVK2xtsQi7QYuoEeokxRv8NvEajk4o55skxGNqTaqrebiyHMZ2EZz9dGwNvQPNtpj3az2TSJeTCmWJfgUvZWC",
  "key37": "5FZDPG8LR674XYwDxiYHxeqhVQ7nfwwWvgu9uWEtZPZGbsQgzGiddG5cwGRYdo7pCfsY5cyVjSQr1jtquQgGBLL",
  "key38": "3UF8x1mdvVzafkhvAzDsFHKacLmHFuUBPzo8kbEqXVZGffw3pczncMrad23JsE9zBpMyMCxA5fBmWoqNiDiaKi1v",
  "key39": "3QfJQiP2rB1uudGp8X4Vw8yyCw1tjgLSg71yKqD3ut9kwxXPzozdEfrKSPypKWWyByHVRm5TLZriZbEYb32BUENr",
  "key40": "5a4GxHD9Wm48NmWniLC2dX3oquhzTHUR1SWqfwaXmVRpjEigQ9bAumXeEmE2r55KR1jEBtoi3bTFRiTVDyVWhc1E",
  "key41": "2Myo79As9YnMKXrdGyLQzZ93MvVrJz4K4t7xPBWhfEjFgUiLTmZsB9NHuhmGJ7qbhx763uQfnxyLEuiXUg4ZmDG7",
  "key42": "2zXrkuSzsUNtRbtDMvWoXzfbgEP6XZ4R8fCK8NWWh79ULKBk5kSCKs1HqK8Ugwu1YH83Jh1W5FsTtQfr9GRKLDWE",
  "key43": "DHkSStJVphbXjMiC5RgSjNYtTtv98Z26uZmHwFzqzfroKy56GBQHka6c3dWrVNkCRVDEVb5dfpdBuNNg41unL4G",
  "key44": "3dkryynDrAYknLQeFyZ7vA8RQihwB8QBAbVV8ka6EZxrNMyU5p288dodHw4zT8jKMq4Cy6gsqnarm3Uragexg4Y9"
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
