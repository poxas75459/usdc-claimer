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
    "3QrfNxjm22oY4qbPyrrica41ptJwSVuuDLihKdQ4YGzWoJMD4YgANmJxeh69MVtvzhvW8qSKqYJYpqTVnY9BAM2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m8b3fmL58jgKuLFXCdimmrczyKMWFiKJfaKVJEvDbkSa2Nn7HkWxph7HCLD2FfJhj6TUMughYeqBxXmFthuLbz4",
  "key1": "2v7mDDh6YCqg6TXhJpwomWWZMy7k7KpWUdquCxPmWJvVnhuNMzJDz9gzb7fMewZB9y2R4WeYTE1NaouaAct9BpwW",
  "key2": "45dnA3VeSS8pox6Adi8AVvWNHvsc51rvhYGXrxC31ofEcd428wYMcyAQypGmxgbTj9xPMgcaYtVFXUjCVBW5VD6F",
  "key3": "2gqSPVwV4BdHQVXqx4v8BWGCDMqg5HZyJDCnsTpcpkgsKYRuwrLBLR1ZHa5u77apfZ45pvwbusLwReus5L9m9rZu",
  "key4": "4NoJGUe7SX6siFVTeehb1kn94qV4CEn4NQgj4do9c4v8gxbqAYxBjyg9N8yfXCqsdnTYxuLKh4tQkgBrSg4vpqDh",
  "key5": "5bBsgaBLyrdhFBz9TsCvrn3Y3HM95GNEXYXXniukG2C9ioLYkwDHT8rd8aNKw2sHBVUdFqEUDsovwzfRYfvrJEpw",
  "key6": "4o61Wdbh23gSVp6mwMs3KLPxmhidikLDGidDiqJjF5FuPPcS7J3JidW5NwVj65NBdbN57QpZQhyakckZSyp742KG",
  "key7": "5y1NhSwNAFmhDwiW4sCy2w1R1qyvP9v1LsqEZZk2YHwTabeFjFD3szjarKKpDtiY6V8iKAhL9SfptWsCiVXPo8SM",
  "key8": "2kRp7wmUPJnBb5v9f132Ut58hwvxzbC8WdHjdDJT934sZyvLaefmRagcnVLqfGiE6YEyA6rsaMxkF4Hcsg7zkSo2",
  "key9": "4CLcn5Sdf1PHitxnEkKR3fiCokZnHBFFWTXUwShrnHq61sNYoBQ2JFPxarJ9J4eq7U38nPgqUKzgHSpbc4vW5Gdk",
  "key10": "5KUJiLApSuJfBujHmBGfznLy2uyS3RQ522vXo3Yg3oXsi7VK71t9AQZ6irphsY9U6XiksPKRwD38zV2G7on7mR3n",
  "key11": "3VBQTmVbrGw2c8ESu67apGmEe1MmieNiJsQZxyjCYuYS93ApMasFy3cm5oY78JrV7JTD4ZoSsRigZ9oFV1sNCfXV",
  "key12": "3x2wzKezFMDKC6LJKkbBE368t9QuGcRyURs7fxfq1kD9F989Q7J3m75ahdCJpAXaUzYB8oroPfcqXLns8ESMbz5H",
  "key13": "67MSEiHBKb4sKVSdc5H31Zcr1pUdrCu14CXCpGbR8oeU4xEpggstBuzcuAh4C4Lj7cwDBfRs9ELfDWRQ9KP9ZcK2",
  "key14": "2YG8fEGsfhvJRnaKhU11hcgYNwZ2EGnfxZbKGSK7oHc7612iLMpyc9BXQacVfN3kXKe8kZZ22BTie6tYEBVNrjh2",
  "key15": "5bvJ7F9dCXdEnusx6NtvgvR2nFm8eZ3c8xJWTmAqTKgiAxUECK5de2s9wt9ah17NraqoRo8qMMEdkxu74BUVyq4K",
  "key16": "35B2eMLPX3Jp21dmK5jasSHXyvBi4pNEWuDfQ3tmB4AJ4GjSeX55Hp4cQYbwMwAQHiHtkrYGccnG9zeJ9TT6vMa8",
  "key17": "34TFy2iZqNXXdPeNs8KACDaJWEu9LTaEeccHSqgK4Ua5yaLxCwbo8hLHzKfJkJfv3WzpRzsFbYyxgDo1sqKGeFcM",
  "key18": "kGVTMoKuJ5f8hfHVm8KCwba6TUpULLEFfNTzKS53DYoRLR3S8miFR59XbUprofnTYHZWJrde9RVdYGw2aT3xsPw",
  "key19": "2iAJxGTbGQkW9HaD8QHciEXzG57tRL7xdLL8N8aPLSTzt3HFwwu6t8xcdNsxKQE3L9D8Kks6VsENEvG1VMmPopNQ",
  "key20": "3WjXk4BnbPWRDbSuppXpMNQbQWWkZVzjMoo5y7RRFwPw8d3QwHyGi7EP2tdzKeT3ZYSVay3zUNTErkoaa3fCbgUP",
  "key21": "PkAPADoj8jgreTY6F6cxFNh5QW61qo2SmGroAb95pn9xEc5MSdMkdwqVK8yJqXCBWMhBhbqo12QftL41SHz7Nz3",
  "key22": "4gxjCigPgpike7ouY5Vsd9VJzYvT43PPKZucBsCWjQtZPtDEWwAQdv8yPqaTG28dPhFFsj9gNumCK2SdZgmNUHbo",
  "key23": "3SvZxgXftaCfKi2vGtFH1z7EWcjs9wtJuZiD4C87eT2f7U9rq8sg75vyhkdvJHtzdTQvjfyWdd7xHS8KNty9nqJ5",
  "key24": "5QToq6gC65VBpkfrNDau8rqUy9tyzbomJs1ASYDCcMMuZ2NSrm7fVnSukBPFZSLThCV2zCA8DM3nycFrSEE7EVnV",
  "key25": "3jEBk54QwyUMzckfB97ttwgCzMD3PmNicV4xdqVmsHGQgtoskbyPo4kELHjz3mvE1fiCAsTn66igRhZwDSaBHs8N",
  "key26": "5ctGL9wSde2huhWApuudBmVBeRCLRJL9S8iXgcH4u2RLNV9kyd9w2M5TaikubvMW5ZxxBdoPeZGZ4Gn2J1Zj4KkA",
  "key27": "3b8RzvhEwikRDU51t3Zt4tGZiu4sDsFUYoZnV26cxJEPHniFDFG4GiWpqXfTKd1cFTti2yQBBtUv2XeaUPpvjbzR",
  "key28": "jR71uQyZU3JRX7nZUi2NwTRA776iuaZTkvVJYoQmNjKstTxqwZjgxVu7LgTyEF1757oa5H36CC2wp4nHxCw269D",
  "key29": "Mo34VMg4yWv5qYdApqBJ7XfeJ8cJt74CSwCXbbsJtF4uXqGhSeZu82h8jJB5XupMqz7MkSTNDhn4P44LoARokkj",
  "key30": "3JVkZs16VLJoMtACSFWuST8hhsF8xZqXbWvMKSZptK7JHwJLXBGrNd1xMkvkmACdAyFgSovsR38T2qnkkBh12FW2",
  "key31": "38s5nkWYFwpBSR2HtWHdorctywZJT14Lb8NosTrzewtdPMPwZ2Lz4uJunBdtfb1oLjtwoLmfCSPDj3KzuG3tZCSC",
  "key32": "Y1SH9YtcBLxUE7h6N2nWiJyhRSrYh99XtkPsNKX2FQXhQfFra4igvVhh57zSxomrwXCmkjCsfEHD2Fm1uZScwot",
  "key33": "31iQjZ9cw6aHKyskfEqNseERZzrwFhH6zhTcQWAXoWKRrVPM7qooCJQfzJUeCvtxzHzVvYFVGsznXo1mFjAFdf9p",
  "key34": "2ySDEhKf44vmpeDw7kKtMWu4GTFnKeLYVwTzoNaACqAWycXpC3rXQQ2NFdWjP31c1q4PPK5va4T7gKWK51chrVmG",
  "key35": "48nFrotn1XWLCJbbr8K7f7VqKszEqsnqv8ZK5MthGr5vVeXBaERWyaq8ykAqLwvKvNHxNvujQGK9gHYxRMMw3wAR",
  "key36": "f2dmnUeZekcEM6ZvRHJJEgSGXZR8YYaexVYRex9nBzQKDGNV77eQgYbuD8fdvRvTxBhEYkhtrRX3t6vBxUT2RnA",
  "key37": "122nAFPUj6omsx6unmQf5p2wcBKNn6ePcV8dtfheTmaFNhyVKgJ5apsrpgXc311FbFES3AgjS9BxtLMdmpYCRrqK",
  "key38": "42TrkRKx6FiSNhigjaT7pQsvJj9hxWoMDkJ2knTXjfGj9NMz6d13o83Eo5pn1TBiNUejSshRPBLVkbxvfZkTfoz3",
  "key39": "2WqtT787q4Pn6rvT948yfkG43stWuExDzBU3SKU4VvA6wHvH38fTYk1Ac21bqRzB5RNwY4GdCK6kRXP8PDLFoen",
  "key40": "53KLD2Tg4mvDfsCBhoLZZNJdjNGdDtxtjbArbJ39bVbf2KpT8rDd2ZP7yZj1hj9xauGykofoXmVVxS5wi4k2gFtt",
  "key41": "UmnRkR7zENPs3q8VhWGYWgSHYNQ1k4x55JZybdJnsPWsk6i93WuVEY2NSx4sw1E4VSqz4ZSgT9Zpo1uEgnb5jAn",
  "key42": "2W1LYPqXYWPWKhQefrFn8Q4PocYwNxxfYsGZiyM6A7292DTeVR821tDscvM7tSJU2uFiWmrD8MbAeNdqBV1eWXNz",
  "key43": "LgXDbrmmDeipgPsEFeKm85f36bJMdTMQuSpKCBnhRojy6YtfqjCpx71TjCEk9stF4ZbYDY8Ak3u6Ty3MXJNKg8C",
  "key44": "2S49SnB5Sc24gaQ1UHsUUgfiu3WySxJ1wwsqe5b88bb2G2UVgL4bk5m7jEkkngUV6bHFVqKM3eaXRGZoDV2LMcR9",
  "key45": "3njFJedtqH7wSgnX2kxTAMkeXNYtewiwSPvdj8HHEQJ3y7dvwBrbVTRZYdJi3GVpY9uzZrKvbHYRmrsVQwJXn32u"
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
