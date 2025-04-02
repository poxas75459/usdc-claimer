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
    "2UVyAwXyTtpeHvw53B9fBrpDqULSRN3eRWDiKr2NYSbZoWvNGMcgJqfQmcbVjj2yD6UBVEW6WQ783eMwxtRPEHkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nNKtqv24ZEpHNkUA1V6U96rcY9W6HCst8yGBaLdKJfwp6MLRqaXNXo9JZtjgSd8orJ3sQsx1AoYTbfnZBLWJF7t",
  "key1": "KLqS1PrKHoB2UY9ApHkUZ3yLA7g9kqK22fVjNuGsfbHDiCZu15bUqZVAQGDHV2eH9DXQGjDHvA4Bh26oAU9SKk4",
  "key2": "31beSai3AaCe42iwg4tqaL3fnyBopaHp7Ghj2GFtPkXSGwLncrMuoSoHp1siDjCPFa64bLKRV7ZkPKr1gVGHpv3X",
  "key3": "2VuCtrBHHt3iSQ3hqRkH5fbdB6LdB2jUWHTGD9Ud3W7qd9pBh1vvz27McTzfvuvArfyKTZY3utpiaQw4rMRVYYQe",
  "key4": "3pv6JRGXwuL422kUPf4qXUTqZMAGAzRS4WAcEoF42krPrtHExbAmzPmnPPewKJ2GhBLYNEM31sR7qKiymwwthPz3",
  "key5": "K5jtxNCosRTbSV1b3ChPsaQaXq8DG66J5GZ56rvTbdHJrsasqL7ZzihHVDbZxZZj1MA2HSqPGBHJ6x8fpFmXUp8",
  "key6": "2MW1RRiUoTNY74WZTv53NnS6ryh2YXCa7r4gYtFVGNsbhUWpeDmF7BbFUWW732p33BFbLGmGJttZkY364xLX4oLn",
  "key7": "2qiz7YF95HJde35QvpcFekbfiDnBssQfJG2CoipfBCXYYgmBreabqEqpWujGdBxWyfssGT6vdHExvMUbX8vNT6jw",
  "key8": "w8RQgkqSLXVsTD6RT6sr8QXUfFn1SBR8T6EPGQiggaYd6jE1Zrpe4cMGBm9NkVnjW1x7edUkBX9RKXmpFwtR7LZ",
  "key9": "hBunqdHgKyaTusDUQpjPZTSPkbEvWTNi54GmYdQdUVwvj6tALKwiuspMWjFUB8hYXWXs7GQH624pYUhH4kgpyKt",
  "key10": "2uL5hJGnatCF9zpSUxCwus2mzDx5WukPj3znkkdAMTojdM4kQu31ErUpXJ68Cj2eSdNsWYgGRZvdJ99uhJusjpiG",
  "key11": "2XzkVuT11cbe79RQd9eibfZxgHowZkHQ1rxiccaXoAAr98zrYiB9eJr8hB34Zgx6gCtMajhJWhHudJsQzgXGRKFh",
  "key12": "37ng8izeJFLsJqPh7GQcbv9a8wWtvhov4X9vTWufgSVM971oh14gzubDJdKUhex6YyyVDYf6UpCM1GUVrjZ14m88",
  "key13": "5Y6U5ettwW599zpEqtADvZH44z7zn5Hew5TNhbRLorUyaXFwxsh4Fo3Lr7AAY2NazkFz7DaGR5V2aK1EodnmM7Eb",
  "key14": "xAahiYXzHMiRHX77hq4mpn2QRVytp4CMJcy18yCxiM4e8Qd4EKwxM5DB7FBAiocg1FjKeP33Jusm6ooKHPFvCW6",
  "key15": "5imyCSxbaVYd6K2hVzQ7dhwx4HZ15yr1h1NsmJqKnQHeFxGFmRmCoto1m9N7HnrTrDxE96CU9uobyrUpsUwoyLZN",
  "key16": "2eAsfHRJe8RjvMscEWC6p6fiJMb6xrXLvquDwDjyUo9RWrev1tPqtT6hHUcTNYBC7oBCJ1NwEwAutYG7HZfriCtp",
  "key17": "4tgLLTvMSTVp3ZHxgxWdUh5Zw3NhVLxHtBDEgFMkTFEeLd4NDEWd5Bou5x5z6iHPCvXJ2HK8VA6B7s4zUsrQjuWo",
  "key18": "3Fe2vNXe7L5zntrGQzawhS9m3NVn7hUwRBkSpuGQcDVo6TDRFD55o7DkqswVdVsNSakyRdqVQhyL6urC2v6nZkZ9",
  "key19": "nRV5NLYgEA8477su9MaVJXiJWQSWYvCXdo2K6PHbhaVZ3xVZk7FLK52A2WBCC3eSB9CjWksR98fnBZgqhQ9vzBS",
  "key20": "s9aCAZX9zNSaCyPjuJnstMiWUij5CwPnXkzGGkP8427KveMQwDRu1CT9nakAnefQW85QSoqz87M6EnrP7wAatcn",
  "key21": "2iqvWxVkCzAJtW7LweDzUrB6cWWHNTrdo2ZKGDYBswS6HEopkDoyhfMaD2ns19m7n7dBGmBnnGr31E4JSwjjpjeE",
  "key22": "2S3cHKDJGUMvNBgke9SqvDvd4PAbPU3MGXQkzjNAWUCP3N2CZvg5Gm6JzR7TkkwvQn1rkxLmHUAwDscQDRxUJ2XQ",
  "key23": "ffvSmSFJrL6ku8pWuheT6JafeMTcETgmsdxZ7etTuLLAGyewYm6u41fvQUqZbYxW9Ahkg6TYsj9ecE8gg4LZj57",
  "key24": "5nUdp5dP8bgCCb25CU9UTKwEiYTT9Rs8v9qJiGJYqt38nZsHtDLUYKkhfx5JCdw7f5pG1BEzWQ8pyDctT7hiSeVi",
  "key25": "2QxULDZfPvXpVGSj1JZ1QS7c24BFgzzpagRiyvjBvbcaBKELj7XzvKgwdBj19iKyn7bZfafusCMdHrCfCewNJmqY",
  "key26": "4Ax1q2JLWvFwcq1y2Cndmf1Xc6nKjpCDiSWvZMo5pRr2L9USy8LrzLqeocSVPguAS2QoB83ms9L5Jny9tbSajX71",
  "key27": "4T5pVRxUBcaC33CQNuPe4RCQjpvQoZQWzBLGnvBwcVeNaCPVsNqbSrwp5phXBDMxvw7VG6np5cAnyzeGUHTBFKNs",
  "key28": "5scJ1QjzMFqVyXCNWQttZGac6ytWaqhGafi2cmmYLfw5AZbtgsAfLBntgiCAp6XoqAY8jf4xk7ZUCWZppfp9uau3",
  "key29": "4EdA1ezPqeucduFU3Y7fXymyCfMFmT4d6DmeveMFppTPWzvLB3nHQ6mm1qBGCfiHs8PpADUAt56jcCASsYX63x16",
  "key30": "25YhuaeZL88hkpeNCPoxZgQjSM5Y63dC2RqsyvyjZNfjQEZqQr2ehM84JjYgZiUNTFCZVxjq5CbQ9TTwV3WYgXmM",
  "key31": "45pq8VBxZJMre7t9fJVh17Yqj9uDDV4XWoiWhx882fJWYszmv3NR4XC3vuf5PBp4JsSkpSQwDmehCwjvxWhFKRJu"
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
