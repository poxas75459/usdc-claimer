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
    "4m4r58qZdeKKMZ1JqQauQ6GomHooWusABiow5JdnyoZ5cDhAfEhwgjACzvV5VZ6BJjSU7bWvUH4QtXtSZAE8Nc53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KQTiDtB6wmfZLGbTaYzhMvFRHexDfDwYhkbGgeaUvTYWfPsAtx3BPBy6MNVZG1Dw2ghgEhkvL4oby3j3nBQuAty",
  "key1": "35bkZREJoHVKtoR4dZcDYiaJf1YUcmrDr9ggTjXeCXdPszUmq9vgMBrKnFsy2LUdWg98U3mEvTpYqqZv2rUb8Tzx",
  "key2": "2iafWSRRjwxT2YPbcLzx68Q76t9XSkUxdwJMp6tnsTLP4FMXChK7MAh6iMzLnxvfBCYcJRBSBZcvPF3mExyB6w3s",
  "key3": "5BVi5tpHxwwYLZPNxzymgoijBVJvD2Ffkj29Z4oFFFUubDTMW47ta7GDFFFaKCLUDFrPG931QUt21ZNnU9aYwREd",
  "key4": "5fqrk1bfKSF9yxfT4yxEjG2kKSM8ssEpDCTmUYU1mU7XbhfhkXt5kcEio7BBkVQbnVWxCZ8kfEPmxicqmaDAUphM",
  "key5": "4Wq6GZVYtY61YTNGJcKzQqUA9tLy57QSLQCi85vqmnruFMgZMdxtsiW2TmAHq3bvCpfNjRbd7hpgYPReb2HFJ1j5",
  "key6": "5LYbAyceXz5L5XVPpiuHU1i9aWrskWs6hDVdxwS5yQkBi1ypksFTsgoeMnjK5gPm6mRwTqginFixhQaWs82b1sFN",
  "key7": "4A56x9S1retBGuA6tfSo3b8r3McvmWxADiRc9fhegEyaMym8fESexxHo3pq1nLksQBqWpZL9XMEyPN2P9Tifurim",
  "key8": "27aiXPqTKc7n1Btnjg826oASPckukMxbKfEdxv7RTTXkpPPjLobhrGkPPTMzuTSnkKSF3NHuoMLssXUZ69LpWA1h",
  "key9": "B9TYbHYVcpX4ZSR9DXcqvZhdA1ZPJ9KpC4tGDDox4mne8LJeMZk6VK3sZ6TCsTEf1LZA5VEWjUqQEx1PYeC9h3i",
  "key10": "5eJYy6HKRXSSFagvuXjB1PwBsdpywjuHz6t4pB4ei3ftwY5wxcH1iQDtB4D8tQ6Td4uTBU6PVVpcYiYfLdCKKsGq",
  "key11": "4NMz6ZCWAM4DHEVgsU3ZXJTNeM7ir3UDh5JgYqvnQSCRtF3N79yqQ6sb9NHsPTCXFZtzqVckYugdbKRP1vXGVkuY",
  "key12": "5s2wVdQANHcTdVW6AVgwj2FSfgiD92w2EnZtdW9hNRfNhREVWmZDQLg2LE2NdrdCZCZas4mD2xo4k4CpEeNxi5PR",
  "key13": "ikUdMawE23xWSLxrDKz1xHnzBWwM2F6od8pWGjZbQVChf92ekwJj47M3fk4RCwSfjWNiTCjJASBhV6sD5ikrAY8",
  "key14": "5bhwVDxyiPfbxgteb2VVAvZ7S5PsX62QQ22KBnFz1YZSN6qVUvSfN7yDfmWG4M5L7nY4G63PaNZhF8foAbKJYx9N",
  "key15": "2USVvaLQMzhADmEYMKuwV4r2KqbqKdSawEFfT4PGGd57SMkkhEFJq9Y9VG2hGpApN49LpLs459vgQvbFB6br8CFy",
  "key16": "h3wKN6aB3GjSZwhnFz3Lz5xNgqsd1ZsdRjeZcw4Q5RREYvJxMhx6q3KXH2ggFUhYDPDKRqUUnh4uarT7GrYaF93",
  "key17": "2PChZhSY6EDJTsqNhRUo1xmt9Sa43JoPD33gJvsJaQfyFzhmwo8WsaMdxgr2sCLFY9oqja3zUdn1pHU8nR8Z7q4d",
  "key18": "4BU1KG4SLvNCSpX22TPfAygtZ3kCf7Qk1gnxFGBcSE43w7ftKCGgvFaKuZcvhPoDCvKi3msKt6UURrsPsLuVGiux",
  "key19": "2VT3y5t8WWodKRdLv21Rqt4XzFzGm1Zs1wR1fCUe5dbvNTa9NmA5PGm5MR4QVziCwFYHxRnQRnYm8pBt3bRUozJG",
  "key20": "4UL7VeWSVQoQePzvPubLv1pSsqytcKTNEpYLrahpd1j1nzofbsG2G2Ct19kxVcih8LKuezMKKcEkusx3YBstW7Ck",
  "key21": "3aSjWqhFpTF8guMeYJTrP4QvuB55Pxc11CQRXAVun9SP6qomBpybftc8Sv1x83Zj5PPP8HCpnFNQNNf8fagtH85R",
  "key22": "4qbc4mKddH5wNWU1ZCh4Y9yn3afBxXhuZ1DA3PjZYAmVrFGy5gehpRnrwzGU1KwX5oFkdrSmUGgk6d2sKZCL2Eh",
  "key23": "3rmLqPVrGyrxYB3iYYcxtN5arW8E3ucn4kRPb1WgHqrKyvPRww1MpS8FZaiGLoABYdyokHuCCEYbTSMhLJmty6tT",
  "key24": "46EdKW2xDW5sk4ckjteZqfLNvigwnVYfmtxfcXr4GUpavB3ZqpbEpMrARKaNhntVp5ED2PqvCuvvanDZSvkVniJ2",
  "key25": "2iXeN1wJEWjxfCUVm6Z54nsNr68f5mfvcz8qAEft6eF5tbj1Bec1Zm6zDgwRJKgYGzhfWjKHzPyBoEaJuyfEko2z",
  "key26": "5kM5VxH8RunZURkFAtFBEKDdRPMwMWybH4re5hx4q3Mp6nYz4H3EJvHKeHdP3TGARewsGHvCyLChmf4MLRKatLK8",
  "key27": "5YactbBhaEVVrhk4nysPtFFRzgikUGpR7bpndodJp7BTH4NuJNiSwPhnpp3DpLYWHWtE7t152RqHQHoCzpQiBjkX",
  "key28": "3ELmTHXbAGzWKKznSgDDfEzTxswNaLkgcBLEQwCx4XUmuq9K4urwAdgNZUsbyA57WUCm2hzL8rzgVkGHWZzj5KNA",
  "key29": "26TE6xN21EQaRvRtWWVNL1ogAkQAZeV7wViRJ6rtg9T9wJx8avTNXSJqVfFEmunw72cd2dKkrLKnc4U9Ej1W46Yu",
  "key30": "2Psf6LG1vVtCXjzaKjGqNKwv4SRJSXNQdX7ezfCbLTnrNrq6Ag7Zqzub18KFZfY9Qmh8Rw6vTbBKm5rG47WQbMCh",
  "key31": "j4BC3stjTR1uj7ZCN5VEjkXPsGz9Hr7iWMizLrW5jz4zMX76VA1B6j6iBpQqNG5EEJLsCBJkx3WD47vzHXaoAwC",
  "key32": "4hQngiHvffutcxmTQBWj1FmV91wJLVeayM4pf6CrrHPqVjjhfW4t8BN2kgFbNU1s4JgaBcESYDXSBbYVXyasooiJ",
  "key33": "44oGfrxJDSVKGakEdThDP9zM1cvinvnWkKiG9HzDqdQW6xWwfGce3ZXC8RXunc4awtv16wDvScZSKgysYhi4XQw1",
  "key34": "3NH6hT411fwhAbKJKWaQeRFyVGKqmYkAKrRy13HiCsZnXbPdGf17tAffQ4rMK7U72kkSJKAo6f4AbHrLYrnPxJHy",
  "key35": "4LLjN9Y2p5XjgGeBTxhShrV6M8f5zGRexecEhp91njPkUwsWcv2iL4yXT6zQr73pSURd4YQr7JQuL1twvSC3aeVi",
  "key36": "2Vbb1SWtKFvBbiyhcEpv5XCYffSXNj6fivaGVzSLJFTthmCy4SBJeCoMqZSuj3axsA8sqaoogdLUmTo5DQ862xTR",
  "key37": "36E4USinW5VpeQ1BDs3Nko8MS5ek9kd74fc2kAnSccGaa5pts3nTbiNxyW2WJEoabPmiPZFE59Mc7Y2zHeska6H6",
  "key38": "3k7qkLFsVLYR1Ywg1PjfpbNsyfNh7egUvNzwcbSxnVQH33TGzHDGrpuuQ7Knrqg9U6aR4yrm563f1QWSo1QtQGDz",
  "key39": "3qXSaHbi3x79VSo74P1GusnRv44jh4H2YwHNeDu4aV8xEuMBn9Dbh1m9DZ54dRQYCHJmziFxZiMrKADzJMqJgnyG",
  "key40": "vFeLfSDYnUK65pNsQGXQgBxdSFr2PZYbMaSYSk1itGhX5cBhu6AfiW2zLQTGcaXRdVAuESkKYzXRqAbRteFoCYa",
  "key41": "2617DJ47APRtFncwpeuHek5s1TNAV8ZEkw5NVZbtQAMRJ7ppDRUbSjnepizge2vMT71N2TkDgJuZ24dhakVKpwmn",
  "key42": "48hrCnvEt8gu8NpfGGAbcqiQq5ej51g1iWiLB77LjAEFY8zR9X3n66433H9RrjpCGHkBWqeiFmjYZoH6i3863zkK",
  "key43": "35CHsa643tE7MLJ7NmN8TcUvUQvvNvDSNPvQpW5aWcjxhKNQBFieUWAGUwFTmYiczdFDLqt6LNopCP9F7x7WWt8C",
  "key44": "5o8D3La3XBn8QuZhTsWRoKqyRocgzPCpjetK9csPy5zjNSWTXaRBj97vzKbtCPSTij15rPk9kV4cCVqhoNhbKqdM",
  "key45": "3yCiGAZFNYCcBMS4DXSPBcNzPvVy5MBxZXe38KyJNtDJTSyMZsS6n1UEBHjPYzG5a3wBHbPEzi8YD1nb98wZ2qSU",
  "key46": "3sGv3yG2bNBG5tJayZDhLH3oTBx2DX3rzga4eUCt1kwnaixiWuvFFMmwrMufHG8RgXFwFWPQZwVELVJ6cMUzMdbZ",
  "key47": "TFDb16wPum3nS9DCK1Vf5y8hoAqv6ngJudoX9fwU3tGEzVwft6HauPTY99cKps4P9hdMDH94ieuCjmayRtd65yJ",
  "key48": "4G71WtBq1y6zr4otx2H1fAAAH3gAXGdR6Ew7zdtXtL4wgHMyTRTSefKLe9nsiz9pL7ix4UXukjE9AFZdivBJcK7Z"
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
