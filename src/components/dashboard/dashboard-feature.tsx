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
    "64KbALtfivRiPwc4KPfBPz7d7dkP5pi3XLcsnzCr8YQJM2vygS7fAhLfsmDwUQLYTweB9BEucic9QsUa3gChQet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KkP2KbGzGbAcoTQmgG3d43zTcLBVikaQPwHSJAyyQSiDV5LbNcu3mCixNXPvt5XYMMxUiLq56fT6grqnkyPXU7N",
  "key1": "44CgyFPY1tc6Re1BGchpjwpw7NZ1ZVjWgrdCeGvD3fEU76eeP8HuKomNkoP94ydzbxB4WkwdCSwtYxhLYVc4LmSV",
  "key2": "tF5xc31qtgHTgmtGMfDaHFvcah8Lu2u6rmujP6tqX2ai97Fckc9htNVbywH6TW3nzCxY6CjWCPCk1FGuzGPPjJ4",
  "key3": "3mE8CGsRw1YiFnn98gXCU888pGEKD9sq7yEkqttddbX5YChLWZrMfja8f98B93SLWDcXk9c4jKFGM5P5Z4dYpZ2T",
  "key4": "4xhU1S6hMAPWfehh4mWSNPh36Sfxi4h1anSHk65fgNih5rtPDz7FoLRqci1T3Zb9p5AgBjLa83r19KeFcd9GYhpU",
  "key5": "4w9c5XAgX18NBfxZVj3jGGy3pevPdVqytjyChXzsRgXMDq9WqZgitQo2eJTKdD5YZLzJKmBcXQffn7uRKF5v1e7H",
  "key6": "4VHAPUp2HZ2cgbiUSXSqwucnzPHz1Rhw7RMmxcWthkNCeuaFMzKrVE5nDXfcKiXy8KP4EBmjJATKLvWkrMWUT1Bu",
  "key7": "3eez66DEfjzuDetFHMQswKzPZvSzYrbQLKrG5NvZJ7dQG1ftCCYBzhdvZEQDexLishRcbbHz1xZCYg7JQanzEHmU",
  "key8": "5QUgHq38UDays3HKVX1K4QKsDmphucmj5DJ4RMKKH7DVEz8RuBTAcj12THEjQoYyUGjGer5hu2SqBUoWFT2FHVNE",
  "key9": "aphPFEH2ygzH2hNmmvLiZQmV2kBkWoFpv9LhavqSLQuzU7G11tveaSw3hCExY8H9Ywhp8ffoTtnb33wgh72rS2h",
  "key10": "7xRB632nZCdX9h1rgBRum5Y8edZwo6Gcat8PSDRjtHBUZDNpnKCt2E4zQBLqimoraodnQEKbuvutf72Uth2DkD3",
  "key11": "d17MJFSmHBn7m9YuSaHj6Ng7AybkZVF3MMLSAD6dMiwhVL7AmUyYCjwG3WwcW3dKxGNZGokKTcWGtShmC9ZSpNP",
  "key12": "66NH3EhWoo5G45RwMsKcxrLXLSyGHCyqa9AsfYnq3AHueA8LQixSUVQgRki987gPNLbwdzYAhmjiKWPf3GJG5rWq",
  "key13": "2ahXUa699mqTGDaCrN9PhyhVrssb44yKVeNzNdLheyDJh2Nfb2Prr1Rzs2NTYR478amUKA5Pe4tUXmjBLBdp5fWr",
  "key14": "4PNUH29baq2822mcKCzKXetGt2zrF56b9utxg5PWS8mLs26hzT3xWpaPCKpkjqRDSDXKWM5A1AJfqkotBhPVfKtQ",
  "key15": "49LAKEUSndSU6F9bpQZs9yAULjjSwttHyRMniXBu2RNNrVQdTGJMf56khjhYfzWwc2CEC7LqQbwYZVq5iFp1ZK8V",
  "key16": "65dwsfJdMhQEiKcRS6JtRBVQA7by5hnfw5gU67YJF3TYwRNdxsr6h1rhmA4xVnvgcaXnAsH1sR72jXdZYEGSGGL1",
  "key17": "3W4nE4Mt936xSuEc2UP8jHbR9TYXB5NH7v2KXHAye3wnqhnbCdWxFTXHwAYLR5tmVz2hNARwxWSDkVwcyLx7wkkk",
  "key18": "PujiXT6BQkeHmrApjzgJehpaY1gnaGA81gwjvUgPv7aGLeR6qawqbrx7qEwcANRjBWLQNLnMYx5cC8dGPoM7mEj",
  "key19": "27MWzCfrBoxoodwUB4xKEbr9cXbpJ4fkE1CzUzWnNrpwnHGBeVSgU6FVUjAoM6MXLE9Ew5HE579P6TXdcGbt185U",
  "key20": "2qUbnZ8YTHQbUREWUQS3V7u5XviDJGPbt7YSboQov76qxqjxXRo2itXhvA1r5WZVQMGDo6mBiofG2DgqVMQuqkhN",
  "key21": "2x9h6ujEGQqJ7RnmM7hVH8QbRhDB7TuyzMZUH7Q9ufXCpRWyext71cL9dkx8aUNnLdsPEgYexPdN6wttzWVWavAY",
  "key22": "uNF79x9TaXebEyKcCZKjkx7k5SBp1S5j2jB9LBaHZjJToAcdYcrzeahgZZ8W5zcsJLEk4jEcQ4Z2yQMZ4iFx6ey",
  "key23": "44UKwnAEZRYQVk3R3zVnw4gV7bDwhAEhmzDnLjFrbAxH9jD4HNZdtCBufdSCoX2GMX1fdKmvxMCwzNQSFeuwWdpW",
  "key24": "jewEM9fP3YgKmWwyaz9ZkxC7pBcC81xqpNrVrQCunXDf4AvDtzQiE8xJrExm1LnQzQYwSuWh5qfGqKpdTL4SANU",
  "key25": "4hnZaqibFZJCQCY7XjvwugKjj1bAUdUYL7nUDLWWZJYii1f3QLJUxwWt1d6SB68q5HmyXHR49iV5YEPEGKWEk5Nw",
  "key26": "k8qpdLkXdLrKkgLjrhvi3LsN4ypM4T3ieCESwgVjZXubvRKius8aYbdCX3htubUCHYQYrud7D4hbZpyF89XTegp",
  "key27": "2ngUf2ogdqqVmH8R5zQmmz3Ko5wz2a5AdGokNHdtYgjpgZabT9uoh33mePhSoJJx98mrWCAj5GJTeAG2j9n3FVVr",
  "key28": "p97eeofBFcKtjmYW7QmMDjYXX1V7qifPVci8Q2dHFdmDEvVKbR1332cXj4YLNi4UzaunXx9WsukAcD1c1fhsmR9",
  "key29": "915yVPtqZK5deqWWWVoHmZhCHjzMA7Fxi7QBMEJh6ipVCXZup7EEx3rSj6mScvgLAkspgiCrAThcks3MgK7SmmK",
  "key30": "2VXdGiAnU3tt2gJLBtXn8pVqdRyjN32a3nc8mLcxL3FJMn9h9oUFMC7JA63qWchhyvNWAq2i52u4XXBzQHA4V7HG",
  "key31": "5QeiUG8DsYgZT3BsFHbAkNqc2SeiZDAA3SMkGfEPT7iFNgNT65bKzTBpi8jf99xoe64jjU2pCW8J5gzghjTfz9Xw",
  "key32": "5AfH62nL6GdfdTgfWi8XVBNZqD18ZKjVKDM59hb9yhKFLm6XHP2zyoSNst4yYbJEfSMQrcFVkm8efs8BiREmd34P",
  "key33": "4e4L2HSGtHxVhznscCLr3dKitQ43cevdzzHmBp8s7u2g16j57imhCDr3QDSqGjjsDFrGjWYbKZJP9vTAS4RMmFUP",
  "key34": "5VCWryjfSMW5Ww2AsWJp333kL1aeNxaHQkGsu8fJg9enA4YejuwNenL454GYfj5FxcB5DzDezJEj6PkLtBMevLwr",
  "key35": "4XANeuAgQoKCEybdZKqD5npybsPSNrBbM3ZH65yLwbbzrMLZeLPvw1Lun2o3GcQkSUuqP1rqEmV3tGYrE8uSB1tv",
  "key36": "3pSZUn5t3aRou9YV9gG1zR8NQp2oFRVmQANYdinNAXCuMPc5nqC4C9Jxm3cvgfVsFGzHjEEiHGS2UPZ1kEaen5To",
  "key37": "5c1HHZ1eeBQydDwXDGgU5SqaNP7MG1hw9K6StA4sb7KL829JXkemmpPjY2RNhK9WiQBKLDgJGRDbRSuwh8LBszAQ"
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
