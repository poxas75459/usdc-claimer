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
    "2htfsQss6ZV6tgebT13owZoWUV3K8TdkPdjfm6wzb2aTBpqXPgB9kiSCkf3u7i3aQzbcraUeBTWk4eubL9r89ngu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yspYFfi54k41sa94apjZ5ri9VzQ8TzJhFmLGEzy1dRNrxhTMYo8PdcHxZ1VzURVjmcS1twW5iXXtV3d412pkmGQ",
  "key1": "59NS1QZgRTWobBAu5VivmEaDutF1PcrQRJSTbhVA91Z9ztQhAKhmwCAvbD8RNtnzcTbJxeJAzKBSXn99rtScJGop",
  "key2": "4LP6EvW1dsgeNorjzVwAJp47UnvuwqAWiKLqCY4kReshoiQ4W85Aq36bZT71wyyuBtXJgW7BKKLVbK7LUP2kMCUP",
  "key3": "4Cx8RwwqSgNEFyc4Aab2Fwf9dBQmP1HYJT2m4iZqFkfMY2kaLeXtNTZteaXSnJetNJMnFgFCjTPrf7Zg2d3c92xC",
  "key4": "3R2E8TXYXtM9rWrpi73rYGKuTX5zHY9mEtv2LKTwu6fGk81gZ7dkoKxYAGEiesMMMezr9H19fr57HLu3tLvNLTXg",
  "key5": "2EZQAPcPQF3843pH6SSXAJvaJ5D2z8Vbgn8hk2YNyL3EFjGrwaNC4FYNCK5Ai7XDoes97V8R3hWYYp9TcnvMMimb",
  "key6": "5AD25CoQUYdF1yUSX442heaBSL56ZD1aw8dFQrFWZptUu7dioN5n2jZXPvhDNbc3Gs8LSXhAZoVcokYzP4A3P6dy",
  "key7": "3Dqg4i2sqfJRXFc5bLnFdQyGm8rdxgXN5YSy39Zyy6BDbGME3enhcow5zgQg18vitWq2J1kjScnqWBZEhffpK27A",
  "key8": "WShxzRbhjSjiE6Lsb2oWF2xie4kVJvThk5PLrehFwRdRDxJLPmGrrULdagi7LdwZgaqg2jXNJW9oKk4LNAs2LGV",
  "key9": "2BAvMszwPfo1n81tURNwehF2n9kBuVed9aLUb4QzZhpNU7eYimUE7JAbB5drJoCANWSUUKVCEvxwNCkaGNosoZX7",
  "key10": "4WPUMzCyCoAkTuNNhfMXRHVej4ByQZ8hMoAU4bj2LXiURsutqU6btAhWmQ9jfK2z54NTmyiPgsGtHsqawXJBr5wS",
  "key11": "5CUZtixJaMxFFJqkHZeewiinsr9GSMEa8ropvowmT4iEv2M7GkzZncB4PNA1hSsipw7Mce91dSivhmuHNJQJbxTe",
  "key12": "51rfHR4nLEdaHiq3zrcuwrmmXBm1LFoF9ywkopGEraecxXMbk1B2MXKct6NJu6TbHx1fDvi6kXDBpvWDhTzGnBXJ",
  "key13": "37EcZ9e33uF8TGMAz7V5u8mmVuoLFdXEx34eQ93aTYvLXt8JcZE2Luq6Pem71gzCMnbcbeSt4uF8whc4EDrP58Fg",
  "key14": "3w9pDzhvPnZL9Vu2urr6PQUcsU5m7fVVG4rvuphVsZAUPbipap8XT5TT9RGM5cX3HkHiNVWxdMr9uMDd9LEsyKuz",
  "key15": "3qscqVVzgLLYT5qDGwKNQ5gjXArTyjPKt4RrmGHwpgppDDybYqEzZ9kazDzvg9BkTuFWWfHTbNKEq7LMJ5HzaBuq",
  "key16": "5Xy3P68qZmpR4P49WikHRZUtdW8fPk2TdPio8tYM7sWv6tFqPV8jwFJc1fXjkc6gsSvZ9U652RmRrwgF5RLFrCXy",
  "key17": "2nNb4iP17rXTS2Bqd5U76zh6WYufVP9HzvDLx3g9xMQrbX9dTuc2f2qq3mcpdKpoCJSoFdzhTvRqgkSHXAnEpX5X",
  "key18": "64TuuJ69VWxHrNAnrX84grfPFVqiw9sQZbG5c9GjXaJc7RRqaZG4yKLBuw6ZJ3gT4fH3Db8Xi6uuwDNWaJQqorQ9",
  "key19": "4BreGHCdfzobmwAqtYYgwRvjhV19imhMj3mxpZpaHzft83DTeMYrZTNpyAKePQZ4Y2J5ECUBiXMcvH1oMYJftuWE",
  "key20": "5QW22SmgLVUDgnEL3wKwtNpSiGmPnKJkKvQ67nZy66aSGcd9A6TkwR7CpmsuVj8TnrMUUGUmzN3BA1uFWTd8j5UR",
  "key21": "4UwYCCbMTJtJx8schNe5YnMJS7eC37VsdVQBFAFLn5tiRCTwG5u7CAvdDXY4xciT7jtu34vKzbrJR1bGGytmcyap",
  "key22": "3HqwmzDFk3JW6Ya5WzNp4SpXQ6VDzt7oMLo1rrSag9mGxWrTdAFMaveEuuHFNdDWvgfKcXqy8pLTJRwW7diHaKqL",
  "key23": "vW38WbQaQDiEAnPj5YnxbKe1y8zxUp1B8Gqiqcn4TavezubpWMaGF6iannjwZpe2tCbG1bmZEhcVc33wfiAfCtR",
  "key24": "3LTkHL8gHpsAbTC6ZdHjKZcv8XTm8J2Kz8orRYC9iNytbHeshfSyDZ7UA1NbEaXK1t1djJHNvkad4KYbtVcuMag2",
  "key25": "5zPJs2TgE4NumdEZ29u3RVBKoAuuuoDYZbJBaS2sz79N6tF7JbmRvacJBHhkjpWM4CdFsWJQtysTxQ5yxGZ1Dnxs",
  "key26": "3PdjZAnJEcRuUVpvbeDrjEPPe2WVpvNz7t3wKSQv4eh8qShyLP5FVD9GgujA9qjjBW45ofn8LADFbTpnmGJ2txhc",
  "key27": "2sk8SafErB8QfW7gAYi5QrtPPCqw6P7fqTKpsbfKhrQR2Nfct7TyR4o3PzcDN9ZoEmyjgwdC9tdVpMncKrikqXhh",
  "key28": "3QWWeLaMHLGxe8pV3vckosfT95fm1pnoEMkCHHcP6mjWSNuVQQ4MxLuFQoc99XtkXY2pUREyX9khjzbZzHaTUUto",
  "key29": "2Z52YWWwiGbQURhFQzC7YbTe3bMDhQiswuLtajfUgKPC6sW6qAahZwmtssqMM64ukvrJE6CwbCEKamDUXikJiEcf",
  "key30": "24gKCN7m7d7FygJuM2vWv19XALxoyLE6GHFGSAodR3j9RhUej8D8YF5SCCXGmyoSC1ifyLTP4QHXTnoXCzJXzTss",
  "key31": "23rSN3C8bcujyo8U7PSB4YWnbRKo1rDEUpEuSHXuEvZ8qMPFFnz8jhiBi5xBewfrpwjqyGG5qcwis1mCaJg4rBfp",
  "key32": "5PfF14fKTLnmq3hxjYCWCcvXQ5kH7p5oKU4PsizziiKTyL3TMRTWhmXZKBx2LbQWAni7EYt1XaZf4HTheuAEASLG",
  "key33": "i5BjrPbwnNDQVpEzHRrEJSngKyRsPTUrRZXj5MUpeV6DcAouGQ6VTd7mYMpKtuiRFMkWimxNLL72MRukc23jcBQ",
  "key34": "4skKQgbxC7MKf329LZWxcubzvE4fGtquQbbkVpwDSAcPWP5uTv8dq1mUA5taN8jfVkMy8APqfSUShrZtxLbvHuPH"
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
