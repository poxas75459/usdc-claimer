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
    "5CBtm1cBa7oXxNGckwtLJdgxJzJ5kK56kgbbvSBCqyAYzcoMKGscZrKAAswquZZvj1S9bs5M6PZfGzDZXBwg2u5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u4aJHN2Q8B3qTY9UoAwn8DWHL4aVu9TbnK4jXT8f4LCpCjE4YcujYkFaLxqUGCDLnuAr43Gneoix2kPaTBNuu4M",
  "key1": "41KPfGsQz6C7qTY9Av6ZAwJcBne4rcMAXHpzkfpxEYSZnAWEaY2tYKsiiamBnbhr43vHtqwY3819hqQFoxTgBT2J",
  "key2": "2bNUrh35h9SKtpm5RnMvutgRJTiynjUY7cBhDVZHdAQdK3MiH82RXEEXK6nz8pxwdHQ34cpSPziX4iJ5ayYJZLHA",
  "key3": "V8UkJZxPm9eE3HQ2e7RemkY7nE4FCfaTWCbZ4MmukyVwVm8keh3YuL19AWLtWnH41oJkmPiEs7HSCknHwrwYcDB",
  "key4": "3X4RF8CHqMkJvrV6xN26rqdhi1Byoh1yTwCg51hsQnKmerBqX2JLpn1tTp265bq1WR2Gtxsckb3mmsevfjFgcMXh",
  "key5": "2jT2G3edAi4GCY2hK3RhRAndisisPGxMBYYH4otHBSvGMhkQ5yAo4JBFA82RnNhWtQQqiye4XT5T5Q12c5jxirsz",
  "key6": "3ExUDXh5siKhoAF68ungy8chdY2hZ9tAuuPjab7YQjE1K81ZxXzoq39sAjtUyr5vcdyR4vmsAKvrhTto98m4LVYZ",
  "key7": "4ciTyde6HQTyhmBJKa2yPHF2B3GSqGeXcRACzR9g9sNZtzaQUw9AdgM99gK5C4b3q4UkEEQHUNsNeRbUhHsJ2ezf",
  "key8": "2WRm4M7NQew5GTfU7Ep9xiEH2Mi2CZkjzpRTkvFP4GEQpyYvDVvTwN6fxepsP9SoAy6cWyiiXsraLPbjxJTk4Hqv",
  "key9": "4R98uMZWDmawAmwPwY71Rhji3feVrbtjFgMkq81P4Y4KWRoTcvHtvf5Y32ey6u3xSobz5ERza4S7WUEP7Q26rnvW",
  "key10": "29ujf8Z4gUgKYWHDRmQ8jTaTXnqF8H8BpDWftGemUSA6CRgojKm3SuYV9V4J583HvkV8425KbLnV4ZFD6Mrqhk4t",
  "key11": "5pNf94hdAxhnZW6vHxJVjDif9pVFBGQcCkU2PNJA9wUFfqBHxLDhNCCtKyTtXa8vbGN9kNhGPrGFXcXb3omc8kXj",
  "key12": "3A4P8KM1zCy6fj83WzkzCaoQ7WdqLvPkSYzgJ3FHisfQXJPJanNq2ozzySuHfiMMfPxmhkRf7EXxWgiyrjeUCdFL",
  "key13": "2VAr4YuW4dvxwPfs7S9GC3qGyZ3ccEmMWsjpNmsuXrCQc2NE45s84b3zfAa6WY9J9bMN5FN6R7dKnezEpCkifSAs",
  "key14": "5HeV3z2GcZ8aYE67PYo6FE1LkzdQsJptXveKtJv83ribMPuH7ZbRS9VTMZtNv1nwaxgz4X4dXqQJDL7XQFiAdxum",
  "key15": "454uArKPm1FnZjPtrjufPdS6fRXHKyXYzD8ov4xp7VjbqNcmmwX3SoykCbko81oErT9ybfoa5Nb726JG8H6ozXvQ",
  "key16": "2syz944EETsG6346ac84SvjJmn9oHbztQ8jHTnaLGpDydTN3eDgtiwJ6GJc2WvRNJEqqXQb89PTZXAgQ82sgdSXR",
  "key17": "3ZLBzytGbSursboRsMyVaJGGRBGbdjZeSVBqk6wd1cFDDM1czZPbbyZvVreugYEk18boGQ6P3LjGF52cR8BkJjB8",
  "key18": "vpBHnyzcqLMn4NkdVF5LMomJvqt22YsGg97WmAmhYywNKDmbmCb7mfirHFaLFktmGKc6CAt4YF1wuWY4s8zihb3",
  "key19": "VR9E24pWghW9egaRdBXUy8boFmqeuGHvMKkiJ5bfcd7Ld3yKZE4RJLGRFKGccxM3SyR7YnVUahd2DxyYoSBtY87",
  "key20": "4yJWZXUd46U8YVUCGBdmmLxQrnneXqAQum3EuJWSoMQHvntv2X8itJKkgDmQomXFCBA893Wna4yzSFiMfJYh4AVi",
  "key21": "4CrR817zR7j2sGuTz6uxscgazCNb2kUqmH6cnXiw4ny3rvBUfp7kBiTVv9BL7XBXC5b4apN3pLzmpskpu5XSfTkz",
  "key22": "24vmKvg5ya9mh4uGthLgZakoko4sBn4kfvwSK4hyvBBQoNZR4Xa9DF1gfK6Gq43Gjf5vAA42ZgErHUMpXsfiXVwn",
  "key23": "A5MeGeoe2tak9y55QKhJWQzX69Vcu99GYxcuj6oqypb3ezNA12afHqvPpZngXfbSu19QAQkZxPmk5cizMRaCWe9",
  "key24": "4KvM9EMZsL69BRm8RfWN78aWNAjdVwrDKeHQ4hLyT41n8zKPibVNsy8FLYEXVCub7dkPuHkfA7EyPCvjFUjf1132",
  "key25": "57LTnkaC8vuv9WrtSQKXV6zcrWVz7k59qZga7B91rVPdQqqYkAKTVAyu366DZMRCrVHTpnuuErYgCHeykdUbjska",
  "key26": "Cx4dgTd3nLSxw8gEbg4mMMaw45oDVMYaUK4PGtN5q2mVXF4G6rnaVocWo3kXQ1nGFYzET1MA8Y68LnQXuKrfmLZ",
  "key27": "SfCHMc8Z6y7E4zRvbUBwTL8ri4v1br19RPbYDDYhcJ4fcb3ToFMg7FvomLSLFaYCF8XF2wdt32CZ7bBYsa3LS88",
  "key28": "teyntFcmeAtPeZhCw6jfAVwMERB7BuULbrFH2Jh1nJ6mSVnMuNcC74kMLQQM63u1AVydgnFaeLWnqNCGXv6s7kn",
  "key29": "4UiMmnoytTRtyDqT948RAueFpyDkTjy8Azq3A39gdsd43CaJeBMFugbojicfbBRd676GPyX73yjAWjsBmUNxzYyj",
  "key30": "kN6vBvEaKrrkYT8mi8KCbzxqcPYY69uHXwznVwJLYjJE7V8HQyzv6bcEqm5PBXm6awdXGXRHwYve9rzwsJZsgrR",
  "key31": "54cHJkSJynhzQ53qkzN2FcS87Ktpkyb1bhLVfjRwdS8v5qpzXDUD9Q4XN62TXCnprhiB7GnsuzZNmAtAS1vgbM5k",
  "key32": "3XnYAo9vYsDXdKu2ftbowCdfxnMG1KvD9HeJhHSKG5prNpmEPFF8vn491vgHmNfjKYynH2SPkZp7oitdxgKAGUBh",
  "key33": "XSdzctEG8dQ63HnJYoBX4mGfWFbqFxv3VwgZgbid8uDuwdVbeLfwJHHBNLGi3VAuJ1sgjbk5DHmCebBek8iqDJn",
  "key34": "45EUMGgUuwypRgcf4etEVPxYHwgLZ7gMej3ffAT4YBU1EbUTjVHiLnSbgyCTVpG6xMnp37Mxt1KzdJxQZ92QokEV",
  "key35": "3BuwdSuqcx9cxQRUyWMoA7bmjoWXQyYfQPgBWKSfVYzNvVmAdSPRbdcNRJva2byyE3PdrU3nZqZrDaQjprg2jhvf",
  "key36": "5bDEK4YBrz2fHJev5QY8C9cna8HHVb2WuatnvCW4sQYoq5LqDaGf1uQqLQNimVGXVAYUnTywSx4kBmBJPsb5aL5L",
  "key37": "7ABH22wcd3h7ZxnvLv1678jKQ2gbfAWWLpRmUpyEnw2EjFSW7sKCWeajya9rmVP3WeLMv5EooyRdyEUJnAdmjWe",
  "key38": "54APxvXs66DPvCShpExF4geEYRRN45jMsKnByJpJaCtruvgGC2xnGYYm2LRaorjDZD5GvhDYjP8vhN3ZPVvZcRtj",
  "key39": "2QecS2tF5oEdEhF7fvnZ8gdMCkavz3GDKhMCp7LuRcUFd1vnwediamquKTq8TmxMU1MVFcNV7xTE88txc1CWFFYD",
  "key40": "2E5BJaK11SR9XmK4RoWGbuSksDDYHdNybopuhwyLob4BooHhBbtG44sPt68hE4Z9AstUCucNtyFTS38K2Grtza5t",
  "key41": "5rAF2j6iH96gwY1hEhR5xjyGUZrtcAxyh5Zodwx9fnLMNSu7AtUM7YehjoLFEWbXdNcACbkKTFmFDA1r43Pm8VNs",
  "key42": "45u9FymeZGftJTRSiVYYr2qdr7Kv1ZczSMrofoByNqPSmWweaBvUCd5cZ2xoE8YtHzFDCLpbm6nq1NpbEQndYx8H",
  "key43": "28kdUXuv2pPHB2SQ4h12DEmYhs1rRE7xjQ8XFzWfGAdtz4qGPGD6AeXQce3WbkM2QB2Goh6i4fK532Ypuy6yF5pZ",
  "key44": "5zL7TNk8Kmtn6JYwvmGiDT4mTSPEcuL5fDMUgvSJCkXpd4oZCduRxjnLdZY4b61k2k5RqYGL8qK7U88PzZ5qyHuu",
  "key45": "opw2LcjaZmJcK3iPzyoT1ziSSj7zWvf8vocTQ4wys6WdSh6uJnT9jqcrJPmrW7fzCRaRZrUztz8kbZGtUBaXQUz",
  "key46": "3Pzod7bBrzPkWrkb1UKKsdUpjWx4ufNw4pyDSRxaywbUBwR3tNVXZbLfvD5GUvz8d2Nt8SjUKLCgLFc4LVbUs96o"
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
