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
    "5FkuSEuZmhNJjxFYqT6KJ5xdQFzgkNi248wdvL9Tn4o782Ncahf8az7p1gC7k2BwFnpoKHbM2DNFqrcUE8eA1byc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QAy2hB1VfazatV8rvmvnwpzM27WQeUFYzU8JLkX3ka4KoJAD4FwvvJg8Pk9hebZRrivByDb7dsnWDaFakP2efk5",
  "key1": "Zm8n3yRwsLphrPd84Kd3QhZn3pYY4qG3V5yhqq9yAkMUWUpM2T58ywAsgNTStK4zz8GMCeHt4LwXtCxEfUhttUL",
  "key2": "VHNhxZKkRguPj6SWrNYvzDp8MktMWD2gpExB4G5bg1kWv6dnnyaYPnoBPxoN7Hq7b3SUZJ2rFxkxnp1B374BUGq",
  "key3": "fVQRf5SpjkkUfVJKm1bnpuYxHf7Vgq8KH888VHDVMWMHJQ1KNKMrzga2Dhr83DsSfAW9wJmfTuYzCmD2J2JEqDv",
  "key4": "4VbHZqk4FkqdHBnoAQtZNdP2TabnHyGrutNQDu8y1CSDCwZM5kCKLiKQo6NwULymShJMdsKPVjQDq4ru1MSrKJX5",
  "key5": "2Am9WFpxiPPqNt6FaF93udVhsxNuKTZaLVQY4C8qrWTtZzuvjUBH5rbhYNeGjoCVkZeTMTqUbRH3RKYWUV64KjL6",
  "key6": "2Z3ZJsgt2VhaCnbUBsJCUjq6GGavmb6cAxSJGriW41LFRzQQHFHzoGruJDVVZqjYk1Tp82aVqD5cxnJcxMeoHRSw",
  "key7": "2g2GksLKtP6KeNo9Miw6gepsxcxJzjY9K8vy7TGW3WnRxMPEeP2K1UfRM3GSQS8RyJTRRjpkUneiPtih8FxvEK8W",
  "key8": "2MGKR7FGC4qU3BS8BKA9fQVLAx1vkuDgUjeuifwBLWCm8sdEQANkEZmRLcCX8Fv3gD3hBTo6vd7byRC47hqjyuKe",
  "key9": "64U67EDkyshUGHXfg8eNDwtKLr3HdWPWf2TQwtTZanLMugubUizusqgk2b3TVYs6aBfCvbq8XseYhZfg7daLXUc2",
  "key10": "2WCZKNgdREqxzNnxoFy73H6HxWjm5boknkY2F9wkeSsBoPvFTwPw2wEtRgupNTEJWJ7iposQSh8Gdk4f3s9GXGFL",
  "key11": "UArKwJYE87ayokBEReqJMBvZjRC13Bv8gVioCnjfxESXgpRydvZisZPBiHMdW91w6pMj6Kf8714zsPJV2HJBVy6",
  "key12": "2tjypPeeC9nBJtnpjgAWqeDiyUsDBensCGhDhNswCeVxqNrERKmyxzcr2BaegoHdKh6fB8CM8toBVS7M3kYJsihr",
  "key13": "25hW2jizUycXtTNJ9GAxyP3ZwTtE9tbVbcVev1oUW9tQPeFke834f93SZPPmjETYdBGVW3MCmJ1fx4B8bBuFKLZ9",
  "key14": "3Z5w8CDFGi4rtfF5rwzyr579ZEF3qL3eVWwSMkXd19JGQBMTy3mR5K3LPaLtTKn8zkZ9N2gL77WJ8tPFPPCSRoaP",
  "key15": "3D1EKMkCdwqLhjkRvJtLoFB2DxUgdConMhqEaXYbCfATECezQsXTPuQRa67F5daH2Gz25jV8YTqeqPkFSsESXSFG",
  "key16": "562HdbQDte3ubCs6bd3Ys2EC5ocvDyTG9nr49NgZQiXcbiBJ4DR7bvH1J8yUBmJVFT3DpQereBqtiox9ZnxNYcTs",
  "key17": "2HdycGa9t7uPGZKADqw53qDYbPLPTJHRNu9TCDugF9ed7yVENNqdEo4FLzxJZYwmUHh1B1epVPDRQMX8XaSps2YN",
  "key18": "2BDyAGCQBW5UW4DYrXDF6LSxMTNpbUHE2k4NknXyv1euG6P3QVgJc7LwUF3n1P9J3LU3anxNEEhW3vS6Akv7tLbd",
  "key19": "27FEG15yjA8wVUFcRWpxbnV9BeEVWiAQfwjvgqmkGnMZ69hf5DrbdE3KjVKJ8KvYx6KuywqrSVmNCjjcuhhn1Dcp",
  "key20": "2SvBruDJeHfRmbAHiihJHPeHdSSomFjuBmvQs1GDukgz1NAB1NRkmEine75hQdYspSiWa7sUTHpwBouVj3Wzo5Hp",
  "key21": "AYTSQhhJRbnEqVd4BeMWiMCzpcF3jjV1UeJhrioZ6xM5MdQQaJ4Hv8tCPrNc7CKjN9ph4MzjnUQaGaRt6tboj9s",
  "key22": "23TDwjspL1CSfEPLBV8uaNFcPVt6AFKeHk7Tg7JYNDFG9ubeChFzmpGLH7sFzKLkFe1u8xma48S7xjiA68KqjqLW",
  "key23": "4fX7QZQ9eU5PR6gsYYimrC1c3jsUL7Z875ib3WUpXH6jWTw4thcLP3vM3VAeFCekg61SrUdS3wn2AiCdcd8FwDNd",
  "key24": "4oHPiqPN1QrVp8izfb9puGiU4upZVeea5A4Hh3ctDHmUYQn8tXgQGZGCHpknTPqi4pS8zBSHtSJfRfs3DmSjffhD",
  "key25": "64tHyzEmE5kDs1gd7nHrkoZaoCWM4oaFKuPhyT19os8PZxCXAAbg1LFqFErq32k8DNKDGoMfYsGgbTMfpKTJ9ybL",
  "key26": "46x33Ui8KpBW4YmQF9ynnJvoZnsqRbHABi7fYupyafioQGqfJZkZuh26uv58226vwGBtcqinDPhYXXFUC6au4GTm",
  "key27": "34UFRKtS5ihSis9EWKoFMArQ9Bdf9BJEghsHoHT69yiRVNtYx65YyBdxuu8xoCeNMcxtRJt5s24Xzznr1iBV7mgR",
  "key28": "kD3gWMJG6THB5AYDSYyJBQMnPvCRB24CNDzsfVT9NeVCAkU76Y2gfjegXHgGsPDim2WpQGy5QcJEDqqVMvsxXkP",
  "key29": "5mwZp1UBuA5RxcHSNGCGyoLSN1ZR8WHvkoyCnjNQGUHog4QTSCahgtj5WXVQn2vD9pixnQSryMxjXZpjHKLKquXt",
  "key30": "5Ytoi1tj4DpUj6477hkqApxvxD9ZzqwcywSAUpX2ozkD2ZFXBJwkxR4LUYiaYgX7DVrHxKVTjseib9HtgnddaV9v",
  "key31": "4FPPSzBDjfKtA7j7nTpdhhuHsVvkyjKtGjiipBE6hKcMzyxEdAKah3CGfx6u21CUNuJFpKuCHjFaTbfBhZSAtYtV",
  "key32": "3wSaNCrVDu2YbM4xq83Yrt6XLFbubQRwqVLoQRA7crGQWcbuNRvZT1PdaQxZbkJKKCCXjDUjtkZHHoS8wvSKZQZ2",
  "key33": "5M5zMmpuRbV6zqh6WuogquBfBUAFLTdGZ3No2KD6dhV2wTDXKUCTLYRvpFAqks9apUWtJhWiSZYTWHUN4QZHUcfB",
  "key34": "5komP1GtDqcpEUwx44cvgYVhXHBtSAmCKDJUMo3qhGLHWj4VZgv7RWGqG2GvgBLMGwnLrq4qnb1c9LoCoUK1kxgG",
  "key35": "2SxXMACU6gkD1C5qf3AvmGo9oWa6XB82EzbpWLomm9Sun77KNC6BZWWzGodm4APfMp6sbu5V4zkk8jMX7RJapMmN",
  "key36": "41vfNiUMBsQDdN3bRR7jscsMAdoFm7Xz5AYa9TzrUYq2qUDVJvsvo32rpTA3S8G8gwHASvZhzHBVdJ3TDUkKByXm",
  "key37": "2pv5Z4qdeyewSrWGQBWP2WXK91xuwZJRZs63xSjRVnHagjNZLNn8cuCoeiRhRzUfWDKe8NvCTVcQi1WnD1ntWjq9",
  "key38": "AVkjNdJjfGprNCnFSCfUsCVemJaPZ5z2GfVa6PDv7JdznX2Le7uq6BYLnVkBY6JkUsC4mTVm3NK89s9oYqN8a6C",
  "key39": "3SoJADmPWF2kmtnX1CiaVc857dKpx6XgdaxBXPALHmxzirpY3iSgn3d3hp5NtQAPYGE1AQ6TFW4XjECjqkKwgfmK",
  "key40": "3C3PeuK2jJPtz751Truw61gJMaZVqFRJG6F4VS3mgfaGDUyffTTHE2xJZymdFGoQuv4aA6qbNKtiWDcLuQv5RKz5",
  "key41": "4WVAsBiaFFYvmcymWMBixk3kHeRSnr8XdqByvRqtQeH13XNPhDVLpMckatHDQVaLZKG6SNnzyk8LfrmDW7cDor7v",
  "key42": "2hTbdEYsLQaWTAyxaE1d7cZbot3MTn16jT8U32QBNZ3ZwhenMMXXJ1D3MkSfYsCG61qpNjj2sPJnBhmoPmuJEn25",
  "key43": "2rWEUkrv83cBgfe3baqVvx9ajm6ABU3bY2ZozQZfLiD9DVHJ6CFwG9oQreWQ93FtY2HGogJRF66dbxRP7gaUCyXb",
  "key44": "3kVxYXPMZ4F4c4HWHNb2tThZU2dY5d2jmM6ZJ3bN8UhmBTYiPh8dfwJ3aVRyGffDoLvxZfnn9nzkxKzqb4qaKm7g",
  "key45": "2saDeWxYf5ZSqkf7VceRYvBfM9RHVAvrEefum2kJw52kfkuq8NUmstmA8YqpoVQ1eteZgohHYVEt3zq5zdswpqTk",
  "key46": "4YRDbCvo5xzpTUXzWaVXHGbHc9d5mn5LhdwTdRkgf8zLpnhc26Pd6xgLgTAMmXKcaAEN9hpQy8xuNwja6JCqwLKn",
  "key47": "2PCckUmXimuoEYEva9wfJhQp9bB2YBUU9jTygHCrrMoTuLEaXznnxBdqH4xP4B1k7yoH1zfbSkVafUHEWM9bnf3R",
  "key48": "5YNj2LiVKhfFZR6LyrjzufGjKiEWVVaNyqpLf1hF8LRgd3j12juMofWLGKELZRD9ibwAwcRoCHSnaHybAzCA9LeH"
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
