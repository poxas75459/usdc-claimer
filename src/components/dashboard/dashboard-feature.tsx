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
    "5KmM7RtoCj7TF3UQJzBbyLo5bYHYFhg1NTBMU6isy9t4tTa6ZmTnjwXtkPsehqbJ5LbzfyFuah8YfezRfPzckUso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MtE9tzcEMmsP3T3kZff4V6cKRqvDb5JQpkMGD7nQDaEDCjLNm6Ys72HAEy6iLbTZiVEF2fJ5RP76Rit7zswtJLP",
  "key1": "64jubi9hPE1Up1xpUX2L4jT8an8LJgBJaEGTR3ytgz9HtThp2ZM9wPQa8nBjrhYDLMYQqtb4DbfBHw8xJ85aEhD1",
  "key2": "C3ZwJqAqWmqzRyALe9uoW4YC3SkfWvqgaTrkvZu2QUR1VMJvNFru2gvRNQvHuzodpVvf16BQYW3kW7J72Lfc9bz",
  "key3": "44nAbie7QGcZvy5v5hZZfXGnjqMpFNhxeFof9bzyicPmJeATA9PxciSmcG9MAy8XtwcQqqXRKQtK2FNYyEBjTiuM",
  "key4": "3dvtebT5c5EGRd6WmNB47nheUqMaH4nA3WkYhcxQiWVeXSzbE4XccwhZBKPk8XhiaKhSM5dq7nMo45TXKQW6Yrca",
  "key5": "MC94zS1Ni9SagnMqqeGLgoWzfzogZYSgDngSesstYyhZjmsp4K2ASQhfvLAiH8RhZ1YTpvysTaEQt8BvC6k7aEM",
  "key6": "5QmDrMnUkLp7crGeeSpS6KxEK5p2QWhnbD4kFqKHC2iBxgGvwoBwoGWCeRciKC17gkNqoCcNkJmnwm6kjV56kzbR",
  "key7": "4HKgF2WXWMkJiPUoFWMH43ybiBHjkP8Vwpac3WHjkGnyjdP19PPsc5sJbyHZvC8ACfBQfsPtzVdsjeV48NHeMf9d",
  "key8": "4P9AYh46mTtzTXcXZb6MDsMy63FpQ93Bp1bMgecF6D5DkunooRtuP7yubU1cdLqeegTTsS2beVqWudCt1K7ohYfm",
  "key9": "57CK3WN6c5iKULEiz9XJ9ESDQFsBqtVFQf1ZVLyur2KrA1WSS8nxCUFtMShE7jDUnrEjzAkCNGyscAQWm2KYDhQc",
  "key10": "2xSLC5peEUf2qzW9ZjuX1YEjW3zRHMJNKFmEnWedf9bNN1C9xJMpvpYeZQQmJHt95sg81Xm8FNnwmJxmEm6mqVsr",
  "key11": "2atv64oPFzWTqToSe23bsjQBWYQHLDnmRdkZkraHgq8AYHm7gqj5fd2FqUSRBAkofL9LYoWmWga1ewb4ADj2cQbk",
  "key12": "f7CYCWp7eEd9QBsizaEwozL8W9YDELyo5wah1NzckxHas3u7pXcWVpv7q1EM323FinFgZ4FHD7H6czMGGt55s6q",
  "key13": "4rjtcdUpj7da5acKKViZGT5VMzSUoRaLsLkByLhSqwE6SokQe3ueSEvTKQokNDgEYKVP6QuNaMF7d4exxM9LwNjt",
  "key14": "WNw4CTvqL3yj6cU85FppwGPdx1fQF1LDUoT4JGYCkoFk7fBF9m8SQxBrjSf9B3r6jZsutqgmHqpN7yUWnDkgR1i",
  "key15": "49USBGarLLjCiFgdAfYzp8x5StmQsFD2KCvThzTvWrjxGQ3X3wrQkXKA16NoaD7vKEcx3fwT8GN5CNhmt7g2wCEU",
  "key16": "2zM3VPvYo7uwKmu4QbFxeEQgmR9QUftKicnqN4iXZL2qk32bY8nkPiJPSyQ6BQhf5L45UdRhu2qLr6QwkJjqKwfv",
  "key17": "3bisviLrmJRzFrK4eC5JyWWZ6yzKyb6saXeU9MTNgxp43NB9XtMo4kmHLwRqHMcTatdPKzADsBzv5FBVsmksNyRJ",
  "key18": "WBiXzRDyECoCaMuxYrGWtuzE7A7nNuHApMzawTLLDfHDDZX9VTG3mRyfj5XC1pYiM6L59gGFxg49KBRed6BN83q",
  "key19": "2a4He3ew8MsHLaGyA6cpu8NnagvvFT229jnKQfSfaAKhkLvsUZh6xPxL2TfAemSR6WarzsiiDMDHuyZQbgW7yiKt",
  "key20": "bWdBuJZMetykaPxuqHj3fuMuYkAi3pjAEM6ncdPT8YfXpCqz5oHe9SarPpdfVTfaoCkZQduAwJt5VEBKdASLkd6",
  "key21": "KgP7ypAfYuZb11Pry4FXHzk3cnJ96VRF6Dt41wCiDgKjGkCTgXuLLT5j5BQdPbbxfqx1BniuVD9Gyn3C895gsPj",
  "key22": "hz5nKpYqbpvef1a1hm1UkEBN1GACWLF1msQ4h4biTMZBWPnb3o7sXkwVgpLM6LUMAd6H2DyzWaMYTsp5eDrcJpD",
  "key23": "4jjZ9EYtBwnnYTD2wphz54sPR7booPZuQCoRqyeAwiLbmvTSEhdPJQcVU7ktv9aR2nzHfbwC7HK6CbKeraFterWS",
  "key24": "2WM5Ezt8jPz9PmMqWm8FrHLmDBT5MyeecyJjqfRW4hYoiZszxRHrNvhzC8RKtr57DchZsVjfXKABR6N9P5CK6N9j",
  "key25": "vKydJz6PtoBKRe35UvSfnxS1G5wjJ7jzq8y9TKCK1VPvtFCxLuN3zyqrBpRcEByJfz181BLycs9wMTbwtPUyFkb",
  "key26": "4f6B8HHbvKU7Ks5Et5hq4RUpzUpWjUCFfsSbRPJSSnp4eEwwWLnNuLvnn6Yf7h2ga6soYZiPbBgnai2ymt3aRZpZ"
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
