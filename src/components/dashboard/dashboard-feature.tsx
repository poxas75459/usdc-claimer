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
    "4mJqjmyYabx7zM4sM9f4vgfaowJmTGMH1RtqVDg62nqwCFFt6ubCHe4SxL22DuaWEuFRMAnPd8sTb7yrwADotcVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22LZSpsUwNH9bLanoEVz8ZiHphTGC89HXKMgHcyrKFDTfSqFjk438nqAN3xNBjuyczBUHjsXVFonVGxY4y8C6xpg",
  "key1": "5WAPn92aSVyfqzztPfHAP7C1grsypCBMreuLvSrmxPqqhDXsCjJhvCRt7eBtH76DfcoGnS36jrf55sWr3zqJGFk2",
  "key2": "tmZ6ri4bPuvHNnE1G63csLeNXceMWUWa6htp9c9hbVTbnvGJxQU3RZZkJVDzfw8AV9nxjK4zhPEZU9GbundJyn2",
  "key3": "5nqsuCz8aAEeDXJTYSjxVdayMZziMpUe5gFYs4e39H4WUfgbXtJ2ypAsPLSp69Pebk2NRcPNmJsRUqtqWVvz6i8z",
  "key4": "2JcvY5QsVLAYTtU1gcjHxGnC4SU5XdiPqxzbrJ32gm3ofno6ZhGmWr2foW9bvYwbZQPzv8qt34hauCbPRNU38opd",
  "key5": "bQFshZSc73oMmKR6Q1gLtvZpLNauwySfSaKjC9Kjv29zYVXN3ny5Y8bX1SXn4xDQ4Q4Lth8Ss6L7fiFSjAqHc5h",
  "key6": "4nw8wHnZYaJBekR5Pyy3JQUDrHE8FFDUd9K3KrVSk2v63ANkkcJ3u2TGQGwNSGSFMs8c8JJr7P29TN7VUXohpEVL",
  "key7": "3KTbvyobYN3mH6KEbz2i2QvVkomvV5BNSpVGmSEUvu5xs73xCkq3XkVVnsV2fjwLkhP1J6MXB4A9PZqenh3EeERS",
  "key8": "5dz2YnmzBoGVtVYbF38LXUHmMxMCA1xFazCxu2Ki7QYWN3QKWuDdFJ2K7nYa7ehCr6BhtAvQBUiRQNHCHyXwcsY6",
  "key9": "4Judkz9CgkCsG5obk2v3gDm5wL3Li7vEcgUwXBq6E1AcNN1a5zBPGXL8nesqf2ESnMm6zGZBb6kdEcoH6BiDZjGE",
  "key10": "3GwGVg1Hhrqi2GimPx24bmeziLWe8mry6U1SkBuzBaFPMHNDKvAGDp5t6r6zHZvt2oRC5bai7iudX2V2QgyFzxDH",
  "key11": "baqPaA7mpjv4aXWzZuSzWBW2XVer9UCDLRJsrrPjfwkyzTHjVpJ2cbjUnA79qGzpwWrxvJWc99w3h4fEyqQ7PAy",
  "key12": "3PWVi3krySnNnCpFXPSHD2wYwBK6tV1V1Und4L4wXZkpYWRfkMdV5mYpSAeM7T1jySW6be2bwNyeoibB47SqSTAh",
  "key13": "Wft5Uk1xFPiZE67jrYuYWuppnVVs38MSUkNkGVsn7NYJz9MCk9iQxkrVS2eUNmKztBsngcB93WuGWYmDaoXpuSj",
  "key14": "2vHhJPgKTHHj1vyHyzYMdYee4xC6X94L1mtYvZfD47rLCuqu655dkvRvA1Af9x4wTsA4PDgLdmsEhDTzj7WQRhhM",
  "key15": "dw67jEGPqd4FbUqwLbrN2Wmn8vH2ZCKNX1aJqcGYW65rZuddrKmSxYD1bet5U66TdPFFbPaMKTNet8RizrZg8m7",
  "key16": "3xxSbrPjdNmUxQBnYaaT7f9YwcKqZVYdbbvRbmjL3V64M9FYNiCuf8RoVmE5MTQFxBz6fB7KqSZ4Vwt9N94aVxYg",
  "key17": "5gpoq4La3c8W9KqGBEPnnvy3GsPfww2XuzUmzjxbeq5jAF4PKsRnDNK3DkZndfkC4ELfKLf9pc9298V8yk7KVJ5e",
  "key18": "2bojPtQRpvUj2GmVbbERjycnTiMrGkiPZdVeC9HAFkxWXkFc7DsBKFGZ6CFf3p7bKUPX6nLxSXPFZAqHiqFFqgtr",
  "key19": "3WKVLJHRBtn2cPsKuqceCdKXnd2baVqTUUTmKetawUkDMy125Yp28QbokzDAwuVySU8YsT4nxe24b3wNW9z8fTFp",
  "key20": "51tKbq7N8uxmg3o8tnUXfUNU9H2mJePo7ktExQ7KCk71H9cPydn5WVcE6btiG4CWL4Wm2FYTNhvHTaRcJ7Us9M7K",
  "key21": "4y4LJPPRLCyxN6biNqtuYPqDStqJgXy9uBrPiHWPiuaRvRVnrBZggehpBqGwjH6ErX3mhnoeVLf96o7V6pbGfJfP",
  "key22": "4P6fdaEALxUN2PAaCYQ8hojTfGd3b9NAdbUfURVWLZ3CyofyYXPPXuoc3ZTNtPUEPsaC3Eu6VYGpUVjgtyDs9gR5",
  "key23": "5AxUMhjis7RYPD2vyi4d7E2F5h41RpfkEGaGreRZ4EH2LgznXSR1wFCtdQyveMSiu7bwZ5uL1T9Kxg8FLJubDVNe",
  "key24": "67muW1XRbWJKmn9Rj22Mf3kNffcMsCsJ4LwNPtYRCbCbArRfyyppTubkmEdMt7YHKA7KdZvhWTMMrDrUUBNeh6aC",
  "key25": "42RegvXqw6zQKPaKu7oA4cuVdLtKuF6iGj8ivfeEvjHGdLDoVVaHxet2yw6FUYa2hgfWs6yNppHnL48jYXgoyeKH",
  "key26": "5vU59s3BRZcbGzTmMyyrcem9VNxzREVxbB8bkMTNxYn9XYhMjHXCEwZYQRfQUWJCTXWutsuqaN3LosvbwJBLss6B",
  "key27": "44swTMjYqGfmL1kZUj9dHBg9hJTC2Hmngr1FYZAHogAwo6M7uxnvACjoyjn41fZW9akuQdB97Vi7MY5hP56LSiFv",
  "key28": "3hNcRmUZxZZzecKvb6TRFqaq9ECu2dN2JWZzLuYTRMoW6Fc9VcUezHXSqYRtSVaRpBbk1gukm3weaQ1RDPLMFCe6",
  "key29": "2rUk21oCsZJL2aSjHDxWCqZBMeZ277XCRKtDAxsMYZTYfqbv5F3cdMxrpBMjhM8xHdmkz9qUXjaYQ4wRTojk6Acb",
  "key30": "5FQjsKu2UdfF4EWHU7LEpQbFTUDwN1JWZdssjDRbwSmBjcSM34w8krJVsa8o3FcGFoFEM29veEVQ3ikesRNwaFke",
  "key31": "4ch42UeVkKR9Q3snd8QvdXQ1gm1AbeRp2HzCKRqRHH1FneFvEiDzLYMBGRMDjWXLmLEi96NLCvcP3kNR5YA1h7Lx",
  "key32": "3Ruo7BzUXpCRTdWirETnHgY6sJFFVSHicLVTE5qU9SaG3f9Ag3ucHvohzHd5SDH9ewfq5y8ksQjvYJ4C8pqMh4vd",
  "key33": "2cFqVq7q8KVJ1a7ApCkipbyz19znfmTUVWS5br6UJvkPsLTNdwC7goP4ceTMQpCB8VG8MvMdGoeLrz4kbYyFegvm",
  "key34": "2DsqUBB6Umgr3XUo65QfoRY516ejEKAfqEk7XNKkEwYBin8SpDjw3gkBpr8qq8MhXxip9mVN3A2tgeSBJ7TUL5fX",
  "key35": "Cb9vSFfbtj5yYAGFE49civz4FsfhoXsQ8UKGtinxhdz5nYiT63vCBZz1pchtUxVFMUfWQMQF8P78pvsHBWo6H7t",
  "key36": "52MpZmsnEymE3j6EpPh4wv2xCTDKRJHKPQkPxT7kBUAp2wm173SdYXf21vnnFvp7Bj32pZMMuVKa2sLqfLiiqrWn",
  "key37": "3NZm8HMvh7wvvgnNPzG82BQfLi1BLundVFR85yRZztSUaYwRhBe57QHNpXx5fxD4ntaRRyX3oi1ypJeXvTcZRjJS",
  "key38": "23xUhzRXd7QYzwJdAMWtvsLDrBVqHbdN81eKouiGQc1xZDPZ5TRdTnaWVW34pjfcbR8TGAQsdjBCpkrdhjNaKUsc",
  "key39": "4GkuCBDy3MGSqfMEwz9JiEVAvm314AaWmZM1gDgnCcbTmw15Dr4zqP28x5ra27vxyLg7z2cP3KXmYnWqQBo7q6Zv",
  "key40": "3SaHjtvVUzebxb2xw4WSJowCnbJToeTLXwyYJT28Y4NyGqDEeZR6YgJfsLJQpF8acpwqZPEKhVQxBtobTf5JVysQ",
  "key41": "3qSutPCw2vHseCLJa9CEkv5kcS8HA8EDe3XrZLD4cNCZe9PwTJuAhVFcTcEzrdKEM8hUSSfSi2M4Q7jua4A8b8Bj"
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
