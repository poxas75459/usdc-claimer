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
    "5m5TdNRPb8NRrXN9aM4EE6GgdoESApZFtrWXfcMPCh5rnEhGUHoKAC7AsF2p98uDcegm8EJAPS1Mu6Gs3Jcmp7nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rPTq8c74ZR65a9P1rWGviVo5D2L1y5QjudLbNzPdVecURgNU3WJHHZK6ZV7ewRz9UycZDdVXs94xHCvQChDhbZR",
  "key1": "4P3BJonrxhGrsek3VEYQFQEh9icQKWvj2pzPCJh1vT9crk88MJNwgsNxR5gdHqqxcHYM9Ymwi2hBGQ2iBqfHXTmG",
  "key2": "5UU8GHzLkV2GtmgrjhaogCMLHTMf2vfWSbX18C2trerbDzxotmwBzHKrmDvYZGdn3iudM22D4GMVXge98pauhDNd",
  "key3": "5ARScx5KuShbd13pSLWHk8ha77GLs8Y4riUzvBtzfNsDBQkJhfhnbTRdcEaLWw67RjMewNjzjCR2ZSJ4B8fNii8v",
  "key4": "5ouVQtxf5ijDHEtWKC9YJ2LSskqy4PBvJ233LxHyFdDbhJmCRDvX8Lh3ZFVByeCSXaFFtJKqGrcyoerH3hH4xZT5",
  "key5": "2JMHG8oFFPNFqr9YnYqm7nYDnwToiuV7uuCForHZk4EcUov1BkZj3Z44FTaQEZcttfRrxSuLX4m39XjvsfG22BR5",
  "key6": "5cAawq8Ws8KGsGDYzREMMog9yguzWF1152zWspbg9ioxqRwBvHxy3zjFMMAST5ofcridEhyaDeWEiUacthoKBDKv",
  "key7": "5wTPXKaEykZpWq9gYfuFHSgSSh76dhEpM4V3NdVKAfTj9V4Xn6frDa7giVDqQqdYzBFwUVq1BHCwNWZZC74wkRg5",
  "key8": "4Hvzi3yuPxzrMzV22kTN4dxD9LcaHrZGMv4AfaTsBDQVLm529SUJEMMBizzCRbBL6Y2kKijGWwu8cnFDYFnEE5Ui",
  "key9": "5USKAcgvuGZZXTM1dENPooKDpi8FSWKengMY2RdQVP4xd84wDpvDa1UJqAtEwLZHbw1XZBQcm8P2pVgDb2DpCdBh",
  "key10": "35fEYgqudbd92C9GFsY5mTrCJ3LPqnwQB5BwHiNuj9m2WDqpknfVxd86uQVSJ5F9SHznS6tjyDYuJzmPj7iwWizD",
  "key11": "5J26vq1QLUudcZnbFSi7sjs6C53NDcte5G33CaQ3CUCpCyTckD3NFBGHSexGBVf5iG8yL8Vmkkg1XuH37We1i7K3",
  "key12": "3TeyazNnhHFd3dw4EE1nbV5qDL5ZAJHfmj863fprB5dCJPHwWpmozsXRKMH7n3nESWpRU9BYzgcFQRRabJY1rwwU",
  "key13": "56gHakJUYvXu1ohfADA1zMB1LbBS5KzBTxyGbrLP133mcves3CezmMQ1aHDv2iUe2yhprZiYmmMvMpfCZqz3oshE",
  "key14": "KXBASBsvyF9Z4hPWZpSpSkMaM9Ksqx7eyRBV4Hb93U6RF7BMLuy41kbTbzDPDnbtdWWQGDAf7Ru4WnzDzr3h4wF",
  "key15": "3FHW5KZxqKx5gr24WConEL4J3wiko9JSyeXpNDfauS2Ec4HnFqfpK9ueVhZ9cfKDhSty2UKZsTSoiJ9oXpkZ7jPF",
  "key16": "44Gx7ygxniFhFyEatKRigon2yXh8iU3YFdzAtLQE73boZzLyxnjgVwivQmPvtUGNp77GAVLJNzswcTxc5Vd8Mgiq",
  "key17": "2cm1x8WHhxedqYwzMELcvJAvf7acxbeTjXZKSeodbbDaXP48U4Xg4c3ZtHs61oYPFbAQyJa6jyhEHq19qqnzjSye",
  "key18": "49dGyX1pK3A3igRmDjTQ6PPJseegRFJ9aWuYM2ybNt9mhLcebQLHvgRQDERXB2P4bxN5V76uY7S6fNAazfi4ha3",
  "key19": "2NBSVk138H8KaYccFSaV8wUncwDUgdoqqMtd6Rh5rCZqbuFraws98qbyyS5Dp3RfnkSpBbxDBewT5USaCcUASCSz",
  "key20": "5csJgAU7de7J7gNv5eF7Qnzcjgbz3R1MshQHGqmkjmth8yXxaTTXgRnMCDKwDLMU715rmJVQZVif1Gp3NDyxw3UJ",
  "key21": "LusgsdJoA44xM6ty64iyjedgvig45DJeUVYZ9EaTiZ6fzrSJuiPgD2E4ScgNaYiA2NXMxD1QyccyoTJXey9w1bj",
  "key22": "2ZmdBu5aWsxE5Kaq6NeYw62JnUoK6Z54kz7RYKtuWa3FAAoK8UWNFBJc9mDtggZcG5QbEfthZAiw9nsPrhs19E9w",
  "key23": "3CSF2viwpRfZa4UXBdS5P9PrRKCP5kMUgjb6v3mcxjqoo49mSG617ekPMKFoD31SrQ2Lzunu8GRyR1rGu6ugySaZ",
  "key24": "h4yD5Ku5fpDnRc6adABMzoUoG5CKnFv5YyZsfm8HnkZWWTVJw97WrdB3FPpstcQhB3te4wd9Qp1Wvot75tTnFHc",
  "key25": "P67bc19T1BWzaUiBYjT45nRwg9S69GwH6FBtSxK6ARWg7cvJdnCt6YhagPdyzSxmNQG2jJQndxsxhJVz6BRsUcP",
  "key26": "YkudDpFxhaHXKegGfaezNxddFHkJKzvutsWakKb7C4tV82uJq5imATXvGQBk4Afo79Zs2LaAfa7TMaf9MEDjdyn",
  "key27": "4kSQttjQuiNCp96oKSamprPcjT37N5zqggJVvBfskQGyK67qD23pCExyDVsYJSjvAFZae3mipmC6zXvWkGDGfaZL",
  "key28": "2j28WY8pZ8jsZMHKwTcn1UyzSffxBBEmGFuHiirT88GddtL4u419NUxBDZcMxUxRhjA1cGWTNpwaXztWQds7QpvZ",
  "key29": "5LRdEV59rPvvQk3uqVjRKJaa3SrrDoha8wZMz3p8ygoWJnnDNiydpcKXLqvrxzKKbCWgQmGHhVTJzdru8aNanHHy",
  "key30": "8DHhCiGKggqQmjDdNzUFMW1SxZP1GYVsk4J1Gwo5fjzBMeY6tJRZ4q1KFJE2Qmz4t9DSJj9qmXqoe6jkBZhbUQX",
  "key31": "23aGwUwH6zj5rLGohzxPn6xPCSyw8GcLhfQ4JtvTGDqT7SaC4Ufd3JT7B39neXScnLPa2YGXHJc6cLGAE1aaXy5B",
  "key32": "4BD8Bmgh9w5JNPZusJFMF7fTWZGRdWjjN21pWz3tae2iZD2og8tAFMty4NfoyJtZj5nKBC7cRcdFhznHoutPwwrf",
  "key33": "4CW6rcnw6YxAvqaUn9kMcjriNRXRB7WALvBuGXTw7FCabZuY6p7KFt5KVYbj6rFB7pya5UaNWauR9Es2v9xcG5Z7",
  "key34": "3cRWce2tQCPBsixoVZkpk6owvCcuKLXPH6itoWbVyckvcHddsv29LGUL31RAfcqatGaSYKdE4Ywnp1XyYFgPcUTP",
  "key35": "ipUq6KVB89ZLWnqf1EVugB153kMv9fdsgAWxQ5XayiLWH6bJTrdrKBKbdb5KeqEstThsCM2VNBMEuaxgubB33AV",
  "key36": "5DBJThRaDgUnKWDXFcChQR2p5Yv8jthRZ4cHSseA2uQgxc33udgfaxqWNBY3ttvC96kuo3re6cYyECUidwNqNrap"
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
