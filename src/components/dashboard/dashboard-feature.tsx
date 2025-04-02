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
    "3ah5y7nk4AH1kReU4VtQU7F1J9ndcrJN8bokv7wF7qWe4DiMcGkAHNrBFK26irWJfWkqwDCV6dtaKtQiJesEz9fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47FpPXaE5HPFqFsg2LQKMA1ztfViFTvDb5JJaSJdHoj8YKT3yMJhUC7GZ672uGFnSPc69LrnWwP5BsFRsV7BP5w3",
  "key1": "2xczGGQ5pg521tMWqNEmD62b89pTC86tCxtPdC7tbzdBCYkjMfSAU7jMX6vFQYLqR9A22tubUWdKHj4g8e8JUtG2",
  "key2": "2KvfroLahHeMtzqT3P3FX2nnEU2G84objjgPnA27bSQsg77dPNnC2PJyh5ZCtX3HKdP2Mnv3dT2ETtjqnWFzVR9W",
  "key3": "2rgnM1hsVEd3bJzJbmCToJRgQCDER8SKc5DqEqhQpLFEKjMoQwJif86RQxQeayo66t9w4jy5zcMbB7kFoYoecP25",
  "key4": "5tM8QSwUxqJcRjzUisgKr9qdztTCRYRBUDxK6CKXHZuDy8a9BGtWM5ZASQYpNERKmnxtAWAN3vqFa9JfhJELdRV8",
  "key5": "4gkWbhjEqdDvsCgJAGq7PvP6LenBkre5F5VvQYLuhLv5QuBfbnQxe2YKXWGrBRo7dKAkWgMU2UDbK9WrNjqvWUDT",
  "key6": "3nE4VtSU1RZuRTXnLwjsjt5c5pot9td8E8vLmLTqT2JxCuArqmdFDsBDYgqHMt6PZnhNzne3Pep5RbfpADaNmKce",
  "key7": "g3M1cb1NwVcMZmHdnQfBJSbk9SashG4Zs3qxZWLoyXvqsBygnTNzE3nEi2YXyC6s3ytrQeojHbg71Rh6Cw18DYS",
  "key8": "3CxXza1Ea7jH1N7b7caNmQmV8xTYYYeyAnSLR4Bk3E5YwoAhQTzZko8FLXrAp2JmXWLfnHdhanS1dG4R2sAiqjsh",
  "key9": "acXzfrYQziSfYQMHwADZEokR3SP16qv3y2aqntQ6T8QcJVbKCKTFLRQ8HzE8T2ZqdqXTonYYM488uff6JQ2auSX",
  "key10": "27BY8apBXem2x6Xf3pbEUWzHVM2friu74UJRK2r1aJz8o8uWUL5Lndqkx9fM7pBm52N2W9bETaLvUfqvNPGb1wdb",
  "key11": "4sKgZQwnmwQuATuqtcu78o77CQsGwfDF9KUL9EitxV7GtiWfi4ojo6FsgrqHPgXqGrnbcTn2F5eJNMkFSd1oYJtE",
  "key12": "4747uh7aQebsSSYTk1j929cQoeHT7vuDz4k2USYv8WSEuwRfJuNGV7Q8DNuUvL4qpNoTM71i6TERaAhf1psLq1Ss",
  "key13": "4BLzBpCMPN8b4wzwsQ23bDj5bg2N7VbQZX47JgTxaPatzHx9fsRkrcFJxv7PyhAeNJUZHzpPB2GsCrHVU3p9Crb8",
  "key14": "41rNL4HxtK38UJBLG6zgjhwkX3Tbin2FSYf3qcUyMiNJHeZ8ZJMwhUFxD4N1R5ZGiMGxTQpCuT6p17Ge7wSXWfnN",
  "key15": "5ZNNAHjJsd8wrhYsKft8o1EXKHDgu1WWezJuVUxWfdjmdL26KHivatYs8AP8SUF54E6n6uhLWxSeTkhKzMDi2s11",
  "key16": "3yymHNh7u4gPbisuH6BKUP2s3sZu6aLFpkiRFPt7bWDnsYW4VYwCADyoG78hQDX4t8hhm52UpRLdiPkBXPqY5K7T",
  "key17": "5PhQNdA1Bk89zLLAEusjLxxM876fw5Lu93u1oBWvK6MDoRMm2bAg1tu9pzhgRvp5vFnNS2S2x86E7y4EYXLwE8GA",
  "key18": "5QFAv9ntYD9EWyouk4h4wGr2AKg2sUBnnxA9zWkJBtVHZqEaTVxBRyu19sG8d7Qwo5UtVSeu7HRP9KeieaXiDJkn",
  "key19": "4P9jSQb4RhnjRvGaahQHCdVBJ3P5CoLtsnZV5mHPJtYLYseWPZfYWqWA5SVVgVYczZebkByveMagZL3YFkadjMAq",
  "key20": "4qaaj255bDqMdytvDMZ1RBZZrxyHQSMr9wEwLPR4x4UPhWT7bNRGCGDyYzc7FsK2cW3s5CAyGYezjSdNnD9qni1q",
  "key21": "3r7Aq4oCDtHFULo6gNQL91uNSsLHRVzETUoYVsxSGBChRNgctiuQe1kgiPU8GActZ2p6steF94ZF7E8VfVLYCDhT",
  "key22": "5ibTTmdJ1j4C9niDHu8SGj2jXJJDKuU3ygs8tYy94DVeXLd8DgBYoJ4T98SJfxiaHrMfMcCyx6CbqLCp6KGWoW8F",
  "key23": "5WuADLYCxWubVmxKs1zos8UTf1SYxENoGQZb2Wst9hFzGKvRRRiK7uh3KjJYVResfDswAeaF3rRvKf9eqmonfnw4",
  "key24": "5Fd1H2Mg6z9cX5tvSNTdhvVpeQGf8HuS9BrvNdL1vLSTUG1RrzkXYY4c19GM2g8B7QKsQTZN9S3scvS62TdSZhNz",
  "key25": "odaojEEiG3dckmT5X9tzvRSdJAXXEnrK6vg7wrHzeDDLwiZK8XysWxqbMB8U27QyuQCxXMDmqXaJKJjwVSMX1gi",
  "key26": "2NTrh8WR93ZdXr82e344Yf8PjYTKMBJmwLSdrcfjiiV7SWL6gwxzvMejiKLV2Gp9vNVPvLAFvLD4roRHU354RRZR",
  "key27": "4ftuykEnD4CvS63DXszCrFWB7Nm9zQ8MzcGD62RXNXMoGcueaAku1RxVNsfuPCiaQMZPGNgWYChbePrWN5VZ2weK",
  "key28": "2Mny56JyutNogTLCojr5msrXmh2PT9yvkdBFz8kyNP6fJRibCpUuksk3C8YXVdtWpkA5tWpRhvAosCZreQsEaGyu",
  "key29": "56SLuwgpAGQKfRY6grnJoF5TGdtzTuLtZcEr5jx2EMDrjQUzwo7zrjvoCT1XwuVM8NfiGrL4DFzTSKmPwyW5mwXA",
  "key30": "3ttxPeMN5skbPhDqkYuEe5JvCNX9syhefjpfG1ynGu5iN6yxnbFZUE59Xws8qRck6sqZY664Cv65nqjHoxVnunKQ",
  "key31": "4BwzGGoEAKVBfQ7KYeDM54AV9oFvs67MdJUegD7iWJtozb1nrQwBdc6uq5JPR5CvXV23jN1QheprJDVYyQbozecK",
  "key32": "4ivZ4o7HiWca3Kc5wMEVv8JNQTNRb6bYwKNeEAkU5tYcUEucXf9do92ZGk5Mno6WtzK1yKCEBRw8xgrme9j5MCDQ",
  "key33": "653kweK8GiHYtKeyrmvAghk6T39KK5W1TzsZaatp7YteFrzSDmHKZXdNz1zGHm4fDvRNq9uYXvkn6s45ZGjcykpN",
  "key34": "3Ry9EAu6XNixFfgeU1yzLimy5DyL2y26hLxEGVNUt2dr2mUV6S1dBFf52B4bjBD6eS92JzAZFZ1rNaukd8gBGh2j",
  "key35": "4cuJ23Xtfv99BHokAZZG6pEgWHvu3tZ3rfNmSPuQymo72yUD7it53RXX6k5Zd2sazt3mhJW7wcBVQoqfD2175uCv",
  "key36": "3N29vB6ZAwQwGFZcgRMVX81PRbbGHqoQHsQ5DuvsueA9rpHkoC13uLYjiJFxGvmMVYEtLWj8Jzfw2qk9cqDr6CbT",
  "key37": "2uhy5En5KWdcy3aGUSn6sYkg2HRKtU3Vqbjy3eQVgvn6CbMEEwT8BpetDfZVKSkq9QGWKjmQMNcoHubqgsM8fkT3",
  "key38": "D1zSRCE1xTTvobgrVWVGV8Y5nFadbfM8vPJcPibYwtSm1VnGwHcV5yjGjXvTXZdxJtEmVVXP3GCw9YSXsmrZJ9q",
  "key39": "61un22Ad9zrac7GAvknyYJFeUtQ4gQo2mHJx1c1pmjVkjktDhx41vvJLLARLUampznFYD6YYKDLj2hT1ur72fFBv",
  "key40": "4CUHysW9EJaHv2RfAVWK85NQos6zTmitUkp9o2dHME3myUkyFYQVWgn2ZBVmGdwo7moWWJGhjf77rvhgJrEYcSYY",
  "key41": "32NjntexmxV2RhjbXsi9ktM5S3uk6cP7xLn7vcLE7WsgHYY2mkF2oDEbwZicJCykMhSegreNpwm5vt2itQsDhJ1t",
  "key42": "3bPKDFVQJdtdRmL4CSQ1xAN48NTdLtcy3gerMBbyk4bj8epRWsse81tTPtvCmFPww9wxVQi5aW2t2uWzSrBEdQUP",
  "key43": "2LFawBTc64CBR2DZ73AoV5t8Qz9KRgSh7oKkKWb9BhgdDME4ZPNv4zJLJLUw6WzDBow27eLHcdC3Lvc7MYfQW4fo",
  "key44": "2r2GQbFXuivXRkbgQNk7JAipEutdNgPqMMZ4JzUdHezHWKfkxnCujQW6Wo3LSTPfyvPJZ5L7zKMiUPnFyUUECWop",
  "key45": "4Sy3gVRWohmt4i9qMMAjZkaY9b4ZREwSwvz9w8MpiL1BXTPgr7XKq7mFBkHAPbUKwzf64P6UNCGFEmMpw1oou4ce",
  "key46": "AKTuhtsiEakn82TkWocseQH6K35h1uxHn6jNGqk3RRvZvVP7n6GP5mLNVFoRUEZnTkGqcWenRRVJjdyvi2UbPji",
  "key47": "4NZLHPtVP6SDA2X9Pee1rducy66vtjTY5qRATpgAJbr6uyv12Ky4jUZjAAVyn4si2pVHftamfvFZbvuy8YPpbyBg"
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
